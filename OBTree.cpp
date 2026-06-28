#include "OBTree.h"
#include "mainwindow.h"
#include "hybridizeObitialViewer.h"


MainWindow * OBTree::getMainWindow()
{
    return mainWin;
}

OBTree::OBTree(QWidget *parent) : QTreeWidget(parent)
{
    //setObjectName(QStringLiteral("treeWidget"))
    setGeometry(QRect(10, 1, 191, 691));

    QStringList labels;
    labels << tr("Setting") << tr("Type") << tr("Value");
    setHeaderLabels(labels);
    header()->setSectionResizeMode(0, QHeaderView::ResizeToContents);
    header()->setSectionResizeMode(1, QHeaderView::ResizeToContents);
    header()->setSectionResizeMode(2, QHeaderView::Stretch);

    //refreshTimer.setInterval(2000);

    groupIcon.addPixmap(style()->standardPixmap(QStyle::SP_DirClosedIcon),
                        QIcon::Normal, QIcon::Off);
    groupIcon.addPixmap(style()->standardPixmap(QStyle::SP_DirOpenIcon),
                        QIcon::Normal, QIcon::On);
    keyIcon.addPixmap(style()->standardPixmap(QStyle::SP_FileIcon));

    //connect(&refreshTimer, &QTimer::timeout, this, &SettingsTree::maybeRefresh);
    isObtialMesh=true;


    connect(this, &QTreeWidget::itemClicked,   this, &OBTree::updateSelection);

    //setContextMenuPolicy(Qt::CustomContextMenu);
    //connect(this,SIGNAL(customContextMenuRequested(const QPoint & )), this,SLOT(OnPopMenu(const QPoint &)));
}



void OBTree::updateSelection(QTreeWidgetItem *item)
{
    //the root
    if (!item->parent()) return;

    item->setForeground(0,QBrush(Qt::blue));
    int idx=item->text(0).toInt();

    if (item->checkState(0)){
        item->setCheckState(0,Qt::Unchecked);
        item->setForeground(0,QBrush(Qt::black));
        hybridizedView3d->setInvisible(idx);
    }

    else {
        item->setCheckState(0,Qt::Checked);
    item->setForeground(0,QBrush(Qt::blue));
    hybridizedView3d->setVisible_(idx);
    }


    hybridizedView3d->renderScene();
}



OBTree::~OBTree()
{
    clear();
}

void OBTree::removeAllItems()
{
    //find the item of the Atom
    QTreeWidgetItemIterator itemFirstBranches (this);
    while (*itemFirstBranches)
    {
       if ( (*itemFirstBranches)->text(1)=="root")
       {
           int size=(*itemFirstBranches)->childCount();
           while (size--)
                   delete (*itemFirstBranches)->child(size);

       }
       ++itemFirstBranches;
     }

    //  delete itemObtial;

    if(itemObtial)
        itemObtial->setText(0,"None");

    name="None";
}


QSize OBTree::sizeHint() const
{
    const QRect availableGeometry = QApplication::primaryScreen()->availableGeometry();
    return QSize(availableGeometry.width() * 2 / 3, availableGeometry.height() * 2 / 3);
}

void OBTree::setAutoRefresh(bool autoRefresh)
{
    this->autoRefresh = autoRefresh;
    if (!settings.isNull()) {
        if (autoRefresh) {
            maybeRefresh();
            refreshTimer.start();
        } else {
            refreshTimer.stop();
        }
    }
}


void OBTree::setFallbacksEnabled(bool enabled)
{
    if (!settings.isNull()) {
        settings->setFallbacksEnabled(enabled);
        refresh();
    }
}

void OBTree::maybeRefresh()
{
    if (state() != EditingState)
        refresh();
}


void OBTree::refresh()
{
    if (settings.isNull())
        return;

    disconnect(this, &QTreeWidget::itemChanged,
               this, &OBTree::updateSetting);

    settings->sync();
    updateChildItems(0);

    connect(this, &QTreeWidget::itemChanged,
            this, &OBTree::updateSetting);
}

void OBTree::updateSetting(QTreeWidgetItem *item)
{
    QString key = item->text(0);

    QTreeWidgetItem *ancestor = item->parent();
    while (ancestor) {
        key.prepend(ancestor->text(0) + QLatin1Char('/'));
        ancestor = ancestor->parent();
    }

    settings->setValue(key, item->data(2, Qt::UserRole));
    if (autoRefresh)
        refresh();

}

void OBTree::updateChildItems(QTreeWidgetItem *parent)
{
    int dividerIndex = 0;

    foreach (QString group, settings->childGroups()) {
        QTreeWidgetItem *child;
        int childIndex = findChild(parent, group, dividerIndex);
        if (childIndex != -1) {
            child = childAt(parent, childIndex);
            child->setText(1, QString());
            child->setText(2, QString());
            child->setData(2, Qt::UserRole, QVariant());
            moveItemForward(parent, childIndex, dividerIndex);
        } else {
            child = createItem(group, parent, dividerIndex);
        }
        child->setIcon(0, groupIcon);
        ++dividerIndex;

        settings->beginGroup(group);
        updateChildItems(child);
        settings->endGroup();
    }

    foreach (const QString &key, settings->childKeys()) {
        QTreeWidgetItem *child;
        int childIndex = findChild(parent, key, 0);

        if (childIndex == -1 || childIndex >= dividerIndex) {
            if (childIndex != -1) {
                child = childAt(parent, childIndex);
                for (int i = 0; i < child->childCount(); ++i)
                    delete childAt(child, i);
                moveItemForward(parent, childIndex, dividerIndex);
            } else {
                child = createItem(key, parent, dividerIndex);
            }
            child->setIcon(0, keyIcon);
            ++dividerIndex;
        } else {
            child = childAt(parent, childIndex);
        }

        QVariant value = settings->value(key);
        if (value.type() == QVariant::Invalid) {
            child->setText(1, "Invalid");
        } else {
            child->setText(1, value.typeName());
        }
        //child->setText(2, VariantDelegate::displayText(value));
        child->setData(2, Qt::UserRole, value);
    }

    while (dividerIndex < childCount(parent))
        delete childAt(parent, dividerIndex);
}

void OBTree::moveItemForward(QTreeWidgetItem *parent, int oldIndex,
                                   int newIndex)
{
    for (int i = 0; i < oldIndex - newIndex; ++i)
        delete childAt(parent, newIndex);
}


QTreeWidgetItem *OBTree::childAt(QTreeWidgetItem *parent, int index)
{
    if (parent)
        return parent->child(index);
    else
        return topLevelItem(index);
}


int OBTree::childCount(QTreeWidgetItem *parent)
{
    if (parent)
        return parent->childCount();
    else
        return topLevelItemCount();
}

int OBTree::findChild(QTreeWidgetItem *parent, const QString &text,
                            int startIndex)
{
    for (int i = startIndex; i < childCount(parent); ++i) {
        if (childAt(parent, i)->text(0) == text)
            return i;
    }
    return -1;
}


QTreeWidgetItem *OBTree::createItem(const QString &text,
                                     QTreeWidgetItem *parent, int index)
{
    QTreeWidgetItem *after = 0;
    if (index != 0)
        after = childAt(parent, index - 1);

    QTreeWidgetItem *item;
    if (parent)
        item = new QTreeWidgetItem(parent, after);
    else
        item = new QTreeWidgetItem(this, after);

    //

    item->setText(0, text);
    item->setFlags(item->flags() | Qt::ItemIsEditable);
    return item;
}

void OBTree::addOrbital(QString obitalName)
{
    if(obitalName==name){
        if(name=="None") return;
        //QMessageBox::information(0, "Warning",obitalName + " is existed! ");
        return;
    }
    removeAllItems();

    //cout << name.toStdString().c_str();

    name=obitalName;

    if( (!itemObtial) || (itemObtial==nullptr) )
       itemObtial = new QTreeWidgetItem(this, QStringList(name));
    itemObtial->setFlags(itemObtial->flags() | Qt::ItemIsEditable);;
    itemObtial->setBackground(0,QBrush(QColor("#e5ebf4")));
    itemObtial->setText(0,name);
    itemObtial->setText(1,QString ("root"));
    itemObtial->setForeground(0,QBrush(Qt::blue));


    if (obitalName=="SP"){
        addViewsItems(itemObtial, name,2);
    }

    else if (obitalName=="SP2")
    {
        addViewsItems(itemObtial, name,3);
    }

    else if (obitalName=="SP3"){
        addViewsItems(itemObtial, name,4);
    }


    else if (obitalName=="D2SP"){
        addViewsItems(itemObtial, name,4);
    }


    else if (obitalName=="DSP3") {
        addViewsItems(itemObtial, name,5);
    }


    else if (obitalName=="D2SP3") {
        addViewsItems(itemObtial, name,6);
    }

    //else  addViewsItems(itemObtial, name,1);
}




void OBTree::addViewsItems(QTreeWidgetItem * itemOrbital, QString ObName, int number)
{
    for(int idx=0;idx<number;idx++)
    {
        QTreeWidgetItem * itemOB = new QTreeWidgetItem(itemOrbital,QStringList(ObName));
        itemOB->setFlags(itemOB->flags() | Qt::ItemIsEditable);
        itemOB->setBackground(0,QBrush(QColor("#e5ebf4")));
        itemOrbital->addChild(itemOB);

        itemOB->setForeground(0,QBrush(QColor("#546892")));
        itemOB->setCheckState(0,Qt::Checked); //item1->setText(1,"true");
        itemOB->setForeground(0,QBrush(Qt::blue));

        //store the index of molecule and  this orbital
        itemOB->setText(0,QString ("%1").arg(idx+1)); //store id
    }
}

