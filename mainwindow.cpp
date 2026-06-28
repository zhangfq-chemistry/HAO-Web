#include <QtWidgets>

#include "mainwindow.h"
#include "vector3.h"
#include "orbitalProperty.h"

#include <vtkCamera.h>
#include <vtkGenericOpenGLRenderWindow.h>
#include <vtkRenderWindowInteractor.h>
#include <vtkProperty.h>
#include <vtkDataSetMapper.h>
#include <QVTKOpenGLNativeWidget.h>
#include <vtkSmartPointer.h>
#include <vtkRenderer.h>
#include <vtkDataSet.h>
#include "AO.h"
#include "hybridizeObitialViewer.h"
#include "hybridizedOrbitalProperty.h"
#include "aboutDialog.h"
#include "axisProperty.h"

MainWindow::MainWindow()
{
    ui.setupUi (this);
    if (ui.tabWidget->count() > 1) {
        ui.tabWidget->removeTab(1);
    }
    if (ui.tabWidget_left->count() > 1) {
        ui.tabWidget_left->removeTab(1);
    }
    this->setObjectName("MainWindow");
    ui.mdiArea->setHorizontalScrollBarPolicy(Qt::ScrollBarAsNeeded);
    ui.mdiArea->setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);

    QMenuBar *menuBar = ui.menuBar;
    QMenu *menuLanguage = new QMenu(menuBar);
    menuLanguage->setObjectName("menuLanguage");
    menuLanguage->setTitle(tr("Language"));

    QAction *actionChinese = new QAction(menuLanguage);
    actionChinese->setObjectName("actionChinese");
    actionChinese->setText(tr("Chinese"));
    menuLanguage->addAction(actionChinese);

    QAction *actionEnglish = new QAction(menuLanguage);
    actionEnglish->setObjectName("actionEnglish");
    actionEnglish->setText(tr("English"));
    menuLanguage->addAction(actionEnglish);

    menuBar->addAction(menuLanguage->menuAction());

    connect(actionChinese, &QAction::triggered, this, [this]() {
        switchLanguage(true);
    });

    connect(actionEnglish, &QAction::triggered, this, [this]() {
        switchLanguage(false);
    });

    QString ss(QChar(0X03A8));

    ui.spinBox_n->setMaximum(6);
    ui.spinBox_l->setRange(0,5);
    ui.spinBox_m->setRange(-5,5);

    connect(ui.spinBox_n,SIGNAL(valueChanged(int )),this, SLOT (onChanged_n(int)) );
    connect(ui.spinBox_l,SIGNAL(valueChanged(int )),this, SLOT (onChanged_l(int)) );
    connect(ui.spinBox_m,SIGNAL(valueChanged(int )),this, SLOT (onChanged_m(int)) );


    n=1,l=0,m=0;
    ui.spinBox_n->setValue(n);
    ui.spinBox_l->setValue(l);
    ui.spinBox_m->setValue(m);
    ui.spinBox_l->setDisabled(true);
    ui.spinBox_m->setDisabled(true);


    connect(ui.comboBox_AOrbital,SIGNAL(currentIndexChanged(int)),
            this, SLOT(onAOSeletedChanged()) );


    connect(ui.actionCascade, &QAction::triggered, ui.mdiArea, &QMdiArea::cascadeSubWindows);
    connect(ui.actionCascade, &QAction::triggered, ui.mdiArea1, &QMdiArea::cascadeSubWindows);

    connect(ui.actionTitles, &QAction::triggered, ui.mdiArea, &QMdiArea::tileSubWindows);
    connect(ui.actionTitles, &QAction::triggered, ui.mdiArea1, &QMdiArea::tileSubWindows);



    



    connect(ui.checkBox_OB_xoy,SIGNAL(clicked()),
            this,SLOT(onObtialXOY()) );

    connect(ui.checkBox_OB_xoz,SIGNAL(clicked()),
            this,SLOT(onObtialXOZ()) );

    connect(ui.checkBox_OB_yoz,SIGNAL(clicked()),
            this,SLOT(onObtialYOZ()) );


    connect(ui.checkBox_OB_corner,SIGNAL(clicked()),
            this,SLOT(onObtialCorner()) );

    connect(ui.checkBox_OB_quarter,SIGNAL(clicked()),
            this,SLOT(onObtialQuarter()) );

    connect(ui.checkBox_OB_wedge,SIGNAL(clicked()),
            this,SLOT(onObtialWedge()) );

    connect(ui.checkBox_OB_smooth,SIGNAL(clicked()),
            this,SLOT(onObtialSmooth()) );

    connect(ui.checkBox_OB_mesh,SIGNAL(clicked()),
            this,SLOT(onObtialMesh()) );


    connect(ui.checkBox_OB_positive,SIGNAL(clicked()),
            this,SLOT(onShownObtialPositiveLobe()) );
    connect(ui.checkBox_OB_negative,SIGNAL(clicked()),
            this,SLOT(onShownObtialNegativeLobe()) );




    connect(ui.checkBox_box,SIGNAL(stateChanged(int)),
            this,SLOT(on_checkBox_box_stateChanged(int)) );
    connect(ui.checkBox_grid,SIGNAL(stateChanged(int)),
            this,SLOT(on_checkBox_grid_stateChanged(int)) );


    connect(ui.checkBox_Node_Radial,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_Node_Radial_stateChanged(int)) );


    connect(ui.checkBox_Node_Polar,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_Node_Polar_stateChanged(int)) );

    connect(ui.checkBox_Node_Azimuthal,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_Node_Azimuthal_stateChanged(int)) );





    QPalette pal = palette();
    pal.setColor(QPalette::ButtonText, Qt::blue);
    ui.pushButton_addOrbital->setPalette(pal);
    ui.pushButton_OB_color->setPalette(pal);
    ui.pushButton_OB_Axis->setPalette(pal);
    //ui.pushButton_HOBAxis->setPalette(pal);
    ui.pushButton_redraw->setPalette(pal);

    // ui.pushButton_addHybridizedOrbital->setPalette(pal);
    ui.pushButton_HOB_color->setPalette(pal);



    angularY3d=new Angular3D();
    angularY3d->setMinimumSize(350,300);
    angularY3d->setMainWindow(this);
    angularY3d->setWindowTitle(QString::fromUtf8("角向函数"));
    ui.mdiArea->addSubWindow(angularY3d);
    angularY3d->show();


    radial3d=new Radial3D();
    radial3d->setMinimumSize(350,300);
    radial3d->setMainWindow(this);
    radial3d->setWindowTitle(QString::fromUtf8("径向函数"));
    ui.mdiArea->addSubWindow(radial3d);
    radial3d->show();


    view3d = new View3D();
    view3d->setMinimumSize(350,300);
    view3d->setMainWindow(this);
    view3d->setWindowTitle(QString::fromUtf8("原子轨道"));
    ui.mdiArea->addSubWindow(view3d);
    view3d->show();

    proj3d = new Proj3D();
    proj3d->setMinimumSize(350,300);
    proj3d->setMainWindow(this);
    proj3d->setWindowTitle(QString::fromUtf8("轨道投影"));
    ui.mdiArea->addSubWindow(proj3d);
    proj3d->show();

    ui.mdiArea->tileSubWindows();


    // Hybridized orbital UI is intentionally disabled; keep the source files
    // available, but do not create the hybridized orbital subwindow.
    hoview3d = nullptr;



    ui.checkBox_OB_mesh->setCheckState(Qt::Checked);
    ui.checkBox_OB_positive->setCheckState(Qt::Checked);
    ui.checkBox_OB_negative->setCheckState(Qt::Checked);


    ui.spinBox_angle->setValue(10);


    disconnect(ui.checkBox_R,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_R_stateChanged(int)) );

    disconnect(ui.checkBox_R2,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_R2_stateChanged(int)) );

    disconnect(ui.checkBox_RDF,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_RDF_stateChanged(int)) );

    ui.checkBox_R->setCheckState(Qt::Unchecked);
    ui.checkBox_R2->setCheckState(Qt::Unchecked);
    ui.checkBox_RDF->setCheckState(Qt::Checked);

    connect(ui.checkBox_R,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_R_stateChanged(int)) );

    connect(ui.checkBox_R2,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_R2_stateChanged(int)) );

    connect(ui.checkBox_RDF,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_RDF_stateChanged(int)) );


    // connect(ui.tabWidget_left,SIGNAL(stateChanged(int)),
    //       this, SLOT(on_tabWidget_left_tabBarClicked(int)) );



    /*
     //bottom widget
     setCorner(Qt::BottomLeftCorner, Qt::LeftDockWidgetArea);
     QDockWidget* bottomWidget = new QDockWidget(this);
     this->addDockWidget(Qt::BottomDockWidgetArea, bottomWidget, Qt::Horizontal);
     bottomWidget->setBaseSize(100,100);


     //!add tab widget
     QTabWidget *  tabWidget_1 =  new QTabWidget (this);
     tabWidget_1->setTabPosition (QTabWidget::South);
     bottomWidget->setWidget(tabWidget_1);
     bottomWidget->setMinimumHeight (100);
     tabWidget_1-> addTab(infoview,  QIcon( QPixmap(":images/console.png" )), tr("Message"));
     tabWidget_1->addTab(calculator,  QIcon( QPixmap(":images/console.png" )), tr("Calculator"));

     bottomWidget->setMinimumHeight (100);

     */

    ao=nullptr;
    orbital_type=FULL;
    needUpdate=true;

    ui.groupBox_2->setEnabled(false);
    ui.checkBox_OB_Color->setEnabled(false);
    ui.checkBox_OB_negative->setEnabled(false);
    ui.checkBox_OB_mesh->setEnabled(false);
    ui.pushButton_OB_Axis->setEnabled(false);
    ui.checkBox_OB_xoy->setEnabled(false);
    ui.checkBox_OB_xoz->setEnabled(false);
    ui.checkBox_OB_corner->setEnabled(false);
    ui.checkBox_OB_quarter->setEnabled(false);
    ui.checkBox_OB_smooth->setEnabled(false);
    ui.checkBox_OB_wedge->setEnabled(false);
    ui.checkBox_OB_positive->setEnabled(false);
    ui.pushButton_OB_color->setEnabled(false);
    ui.checkBox_OB_yoz->setEnabled(false);
    ui.checkBox_ProjVisible->setEnabled(false);
    ui.checkBox_OB_Color1->setEnabled(false);

    visible_radial_node=false;
    visible_polar_node=false;
    visible_azimuthal_node=false;

    RVisible=false,RDFVisible=true,R2Visible=false;

    //-----------------------------------------------------
    ui.doubleSpinBox_isosurface->setDisabled(true);
    ui.doubleSpinBox_interval->setDisabled(true);
    ui.spinBox_Ngrid->setDisabled(true);
    ui.doubleSpinBox_probability->setDisabled(true);
    ui.doubleSpinBox_boxsize->setDisabled(true);
    ui.checkBox_box->setDisabled(true);
    ui.checkBox_grid->setDisabled(true);
    ui.pushButton_default->setDisabled(true);
    ui.pushButton_redraw->setDisabled(true);

    ui.checkBox_lambert->setDisabled(true);



    ui.checkBox_ProjVisible->setTristate();
    //ui.checkBox_OB_Color->setTristate();

    ui.tabWidget_left->setCurrentIndex(0);
    ui.tabWidget->setCurrentIndex(0);

    isAxis_Visible=false;
    ui.pushButton_OB_Axis->setEnabled(false);
    //ui.pushButton_HOBAxis->setEnabled(false);

    ui.checkBox_AllChart->setEnabled(false);
    ui.comboBox_BoxType->setDisabled(true);
    ui.checkBox_lambert->setDisabled(true);

    //ui.checkBox_OB_CutterEdge->blockSignals(true);
    //ui.checkBox_OB_CutterEdge->setCheckState(Qt::Checked);
    //ui.checkBox_OB_CutterEdge->blockSignals(false);

    ui.checkBox_cos->setDisabled(true);
    ui.checkBox_sin->setDisabled(true);
    ui.checkBox_cloud->setDisabled(true);
}

void MainWindow::switchLanguage(bool isChinese)
{
    if (isChinese) {
        ui.tabWidget->setTabText(0, QString::fromUtf8("氢原子轨道"));
        if (ui.tabWidget->count() > 1) {
            ui.tabWidget->setTabText(1, QString::fromUtf8("杂化轨道"));
        }
        ui.menuFile->setTitle(QString::fromUtf8("文件"));
        ui.menuView->setTitle(QString::fromUtf8("帮助"));
        ui.menuwindows->setTitle(QString::fromUtf8("窗口"));
        ui.tabWidget_left->setTabText(0, QString::fromUtf8("氢原子轨道"));
        if (ui.tabWidget_left->count() > 1) {
            ui.tabWidget_left->setTabText(1, QString::fromUtf8("杂化轨道"));
        }

        ui.groupBox->setTitle(QString::fromUtf8(" 波函数"));
        ui.pushButton_addOrbital->setText(QString::fromUtf8("显示"));
        ui.checkBox_cos->setText(QString::fromUtf8("Cos型"));
        ui.checkBox_sin->setText(QString::fromUtf8("Sin型"));
        ui.checkBox_cloud->setText(QString::fromUtf8("电子云"));

        ui.groupBox_3->setTitle(QString::fromUtf8("节面"));
        ui.checkBox_Node_Radial->setText(QString::fromUtf8("径向"));
        ui.checkBox_Node_Polar->setText(QString::fromUtf8("极向"));
        ui.checkBox_Node_Azimuthal->setText(QString::fromUtf8("经向"));

        ui.groupBox_2->setTitle(QString::fromUtf8("轨道显示"));
        ui.checkBox_OB_Color->setText(QString::fromUtf8("配色II"));
        ui.checkBox_OB_negative->setText(QString::fromUtf8("负瓣"));
        ui.checkBox_OB_mesh->setText(QString::fromUtf8("网格"));
        ui.pushButton_OB_Axis->setText(QString::fromUtf8("坐标轴"));
        ui.checkBox_OB_xoy->setText(QString::fromUtf8("xy截面"));
        ui.checkBox_OB_xoz->setText(QString::fromUtf8("xz截面"));
        ui.checkBox_OB_corner->setText(QString::fromUtf8("1/8角"));
        ui.checkBox_OB_quarter->setText(QString::fromUtf8("1/4角"));
        ui.checkBox_OB_smooth->setText(QString::fromUtf8("光滑"));
        ui.checkBox_OB_wedge->setText(QString::fromUtf8("3/4角"));
        ui.checkBox_OB_positive->setText(QString::fromUtf8("正瓣"));
        ui.pushButton_OB_color->setText(QString::fromUtf8("颜色"));
        ui.checkBox_OB_yoz->setText(QString::fromUtf8("yz截面"));
        ui.checkBox_ProjVisible->setText(QString::fromUtf8("投影"));
        ui.checkBox_OB_Color1->setText(QString::fromUtf8("配色I"));

        ui.groupBox_6->setTitle(QString::fromUtf8("盒子"));
        ui.label_4->setText(QString::fromUtf8("总概率"));
        ui.label_3->setText(QString::fromUtf8("间隔"));
        ui.pushButton_redraw->setText(QString::fromUtf8("重画"));
        ui.label_7->setText(QString::fromUtf8("尺寸"));
        ui.label_2->setText(QString::fromUtf8("格点数"));
        ui.label_6->setText(QString::fromUtf8("等值面"));
        ui.pushButton_default->setText(QString::fromUtf8("预设值"));
        ui.checkBox_box->setText(QString::fromUtf8("显示盒子"));
        ui.checkBox_grid->setText(QString::fromUtf8("3D网格"));

        ui.groupBox_7->setTitle(QString::fromUtf8("径向"));
        ui.checkBox_R_curve->setText(QString::fromUtf8("曲线"));
        ui.checkBox_R_clipped->setText(QString::fromUtf8("横截"));
        ui.checkBox_R_2D->setText(QString::fromUtf8("侧视"));
        ui.checkBox_R_axis->setText(QString::fromUtf8("坐标"));

        ui.groupBox_9->setTitle(QString::fromUtf8("轨道"));
        ui.checkBox_negLobe->setText(QString::fromUtf8("负瓣"));
        ui.checkBox_HOB_smooth->setText(QString::fromUtf8("光滑"));
        ui.checkBox_HOB_mesh->setText(QString::fromUtf8("网格"));
        ui.checkBox_posLobe->setText(QString::fromUtf8("正瓣"));
        ui.checkBox_Box_ExtraS->setText(QString::fromUtf8("外加S"));
        ui.checkBox_Box_ExtraMesh->setText(QString::fromUtf8("外加模式"));
        ui.checkBox_OutLine->setText(QString::fromUtf8("格子"));
        ui.comboBox_BoxType->setItemText(0, QString::fromUtf8("四面体"));
        ui.comboBox_BoxType->setItemText(1, QString::fromUtf8("立方体"));
        ui.comboBox_BoxType->setItemText(2, QString::fromUtf8("八面体"));
        ui.comboBox_BoxType->setItemText(3, QString::fromUtf8("四边形"));
        ui.checkBox_HOB_angular->setText(QString::fromUtf8("角度波函"));
        ui.checkBox_HOB_sketch->setText(QString::fromUtf8("示意图"));
        ui.checkBox_Box_ExtraP->setText(QString::fromUtf8("外加P"));
        ui.pushButton_HOB_color->setText(QString::fromUtf8("颜色"));
        ui.pushButton_HOB_Axis->setText(QString::fromUtf8("坐标轴"));

        ui.groupBox_5->setTitle(QString::fromUtf8("旋转"));
        ui.label->setText(QString::fromUtf8("旋转角度"));
        ui.pushButton_right->setText(QString::fromUtf8("左"));
        ui.pushButton_Down->setText(QString::fromUtf8("下"));
        ui.pushButton_clockwise->setText(QString::fromUtf8("顺时针"));
        ui.pushButton_counterclockwise->setText(QString::fromUtf8("逆时针"));
        ui.pushButton_left->setText(QString::fromUtf8("右"));
        ui.pushButton_Up->setText(QString::fromUtf8("上"));

        angularY3d->setWindowTitle(QString::fromUtf8("角向函数"));
        radial3d->setWindowTitle(QString::fromUtf8("径向函数"));
        view3d->setWindowTitle(QString::fromUtf8("原子轨道"));
        proj3d->setWindowTitle(QString::fromUtf8("轨道投影"));

    } else {
        ui.tabWidget->setTabText(0, "HydrogenOrbitals");
        if (ui.tabWidget->count() > 1) {
            ui.tabWidget->setTabText(1, "Hybridized Orbitals");
        }
        ui.menuFile->setTitle("File");
        ui.menuView->setTitle("Help");
        ui.menuwindows->setTitle("Window");
        ui.tabWidget_left->setTabText(0, "HydrogenOrbitals");
        if (ui.tabWidget_left->count() > 1) {
            ui.tabWidget_left->setTabText(1, "Hybridized Orbitals");
        }

        ui.groupBox->setTitle(" Wave Function");
        ui.pushButton_addOrbital->setText("Display");
        ui.checkBox_cos->setText("Cos Type");
        ui.checkBox_sin->setText("Sin Type");
        ui.checkBox_cloud->setText("Electron Cloud");

        ui.groupBox_3->setTitle("Node Planes");
        ui.checkBox_Node_Radial->setText("Radial");
        ui.checkBox_Node_Polar->setText("Polar");
        ui.checkBox_Node_Azimuthal->setText("Azimuthal");

        ui.groupBox_2->setTitle("Orbital Display");
        ui.checkBox_OB_Color->setText("Color II");
        ui.checkBox_OB_negative->setText("Negative");
        ui.checkBox_OB_mesh->setText("Mesh");
        ui.pushButton_OB_Axis->setText("Axis");
        ui.checkBox_OB_xoy->setText("xy");
        ui.checkBox_OB_xoz->setText("xz");
        ui.checkBox_OB_corner->setText("1/8");
        ui.checkBox_OB_quarter->setText("1/4");
        ui.checkBox_OB_smooth->setText("Smooth");
        ui.checkBox_OB_wedge->setText("3/4");
        ui.checkBox_OB_positive->setText("Positive");
        ui.pushButton_OB_color->setText("Color");
        ui.checkBox_OB_yoz->setText("yz");
        ui.checkBox_ProjVisible->setText("Projection");
        ui.checkBox_OB_Color1->setText("Color I");

        ui.groupBox_6->setTitle("Box");
        ui.label_4->setText("Total Probability");
        ui.label_3->setText("Interval");
        ui.pushButton_redraw->setText("Redraw");
        ui.label_7->setText("Size");
        ui.label_2->setText("Grid Points");
        ui.label_6->setText("Isovalue");
        ui.pushButton_default->setText("Default");
        ui.checkBox_box->setText("Show Box");
        ui.checkBox_grid->setText("3D Grid");

        ui.groupBox_7->setTitle("Radial");
        ui.checkBox_R_curve->setText("Curve");
        ui.checkBox_R_clipped->setText("Clipped");
        ui.checkBox_R_2D->setText("SideView");
        ui.checkBox_R_axis->setText("Axis");

        ui.groupBox_9->setTitle("Orbital");
        ui.checkBox_negLobe->setText("Negative");
        ui.checkBox_HOB_smooth->setText("Smooth");
        ui.checkBox_HOB_mesh->setText("Mesh");
        ui.checkBox_posLobe->setText("Positive");
        ui.checkBox_Box_ExtraS->setText("Extra S");
        ui.checkBox_Box_ExtraMesh->setText("Extra Mode");
        ui.checkBox_OutLine->setText("Grid");
        ui.comboBox_BoxType->setItemText(0, "Tetrahedral");
        ui.comboBox_BoxType->setItemText(1, "Cubic");
        ui.comboBox_BoxType->setItemText(2, "Octahedral");
        ui.comboBox_BoxType->setItemText(3, "Square");
        ui.checkBox_HOB_angular->setText("Angular Wave");
        ui.checkBox_HOB_sketch->setText("Sketch");
        ui.checkBox_Box_ExtraP->setText("Extra P");
        ui.pushButton_HOB_color->setText("Color");
        ui.pushButton_HOB_Axis->setText("Axis");

        ui.groupBox_5->setTitle("Rotation");
        ui.label->setText("Rotation Angle");
        ui.pushButton_right->setText("Right");
        ui.pushButton_Down->setText("Down");
        ui.pushButton_clockwise->setText("Clockwise");
        ui.pushButton_counterclockwise->setText("Counterclockwise");
        ui.pushButton_left->setText("Left");
        ui.pushButton_Up->setText("Up");

        angularY3d->setWindowTitle("Angular Function");
        radial3d->setWindowTitle("Radial Function");
        view3d->setWindowTitle("Atomic Orbital");
        proj3d->setWindowTitle("Orbital Projection");
    }
}



void MainWindow::sendMessage(QString & m_message)
{
    return;

    if(!infoview) return;
    //m_message=">>"+m_message;
    infoview->displayMessage(m_message.toLatin1(),false, true);
    //TextEditor::display(const char *line,bool is_error,bool newline)
}

void MainWindow::appendMessage(QString & m_message)
{
    return;

    if(!infoview) return;
    infoview->displayMessage(m_message.toLatin1(),false, true);
    infoview->displaySpaceLine();
    //infoview->append(m_message);
    //TextEditor::display(const char *line,bool is_error,bool newline)
}



//parse atom orbital name to n/l/m
void MainWindow::onAOSeletedChanged()
{
    orbitalName=ui.comboBox_AOrbital->currentText();
    if (orbitalName.isEmpty()) return;

    QChar first=orbitalName[0],
        second=orbitalName[1];

    if (first.isDigit()) {
        n=orbitalName[0].digitValue();
    }

    second = second.toUpper();

    if (second=="S" )         l=0;
    else if (second=="P")     l=1;
    else if (second=="D")     l=2;
    else if (second=="F")     l=3;
    else if (second=="G")     l=4;
    else if (second=="H")     l=5;
    else l=0;


    QString name=orbitalName;
    name.remove(0,1);

    //S
    m=0;

    //P
    if (name.startsWith("Pz"))          m=0;
    else if (name.startsWith("Px"))     m=1;
    else if (name.startsWith("Py"))     m=-1;

    //D
    else if (name.startsWith("Dz2"))        m=0;
    else if (name.startsWith("Dxz"))        m=1;
    else if (name.startsWith("Dyz"))        m=-1;

    else if (name.startsWith("Dxy"))        m=-2;
    else if (name.startsWith("Dx2-y2"))     m=2;


    needUpdate_nlm=false;

    ui.spinBox_n->setValue(n);
    ui.spinBox_l->setValue(l);
    ui.spinBox_m->setValue(abs(m));

    ui.checkBox_sin->setCheckState(Qt::Unchecked);
    ui.checkBox_cos->setCheckState(Qt::Unchecked);


    if(m>0)
        ui.checkBox_cos->setCheckState(Qt::Checked);
    if(m<0)
        ui.checkBox_sin->setCheckState(Qt::Checked);


    if (m==0)
    {
        ui.checkBox_sin->setCheckState(Qt::Unchecked);
        ui.checkBox_cos->setCheckState(Qt::Unchecked);
        ui.checkBox_cos->setEnabled(false);
        ui.checkBox_sin->setEnabled(false);
    }
    else
    {
        ui.checkBox_cos->setEnabled(true);
        ui.checkBox_sin->setEnabled(true);
    }

    needUpdate_nlm=true;
}



void MainWindow::onChanged_n(int _n)
{
    n=_n;
    if (n<1) return;

    ui.spinBox_l->setRange(0,n-1);
    onChanged_nlm();
}


void MainWindow::onChanged_l(int _l)
{
    l=_l;
    ui.spinBox_m->setRange(-l,l);
    onChanged_nlm();
}


void MainWindow::onChanged_m(int _m)
{
    m=_m;
    onChanged_nlm();
}


void MainWindow::onChanged_nlm()
{
    if(!needUpdate_nlm) return;
    //QMessageBox::information(0, "Warning",AOName+" atom orbital!");

    //n=ui->spinBox_n->value();
    //l=ui->spinBox_l->value();
    //m=ui->spinBox_m->value();


    QString Name;

    if (l==0 )    Name="S";

    else if (l==1) //P
    {
        if (m==0) Name="Pz"; //0
        if (m>0)  Name="Px"; //1
        if (m<0)  Name="Py"; //-1
    }

    else if (l==2){ //D
        if       (m==0)   Name="Dz2"; //0

        else  if (m==1)   Name="Dxz"; //1
        else  if (m==-1)  Name="Dyz"; //-1

        else  if (m==2)   Name="Dxy"; //2
        else  if (m==-2)  Name="Dx2-y2"; //-2
    }

    else if (l==3){ //F
        if       (m==0)   Name="Fz3"; //0
        else  if (m==1)   Name="Fxz2"; //1
        else  if (m==-1)  Name="Fyz2"; //-1

        else  if (m==2)   Name="Fz(x2-y2)"; //2
        else  if (m==-2)  Name="Fzxy"; //-2

        else  if (m==3)   Name="Fx(x2-3y2)"; //3
        else  if (m==-3)  Name="Fy(3x2-y2)"; //-3
    }

    else if (l==4){ //G

        if       (m==0)    Name="Gz4"; //0

        else  if (m==1)    Name="Gxz3"; //1
        else  if (m==-1)   Name="Gyz3"; //-1

        else  if (m==2)    Name="G(x2-y2)z2"; //2
        else  if (m==-2)   Name="Gxyz2"; //2


        else  if (m==3)    Name="Gx3z"; //3
        else  if (m==-3)   Name="Gy3z"; //-3

        else  if (m==-4)   Name="Gxy(x2-y2)"; //-4
        else  if (m==4)    Name="G(x4+y4)"; //4
    }


    QString OrbitalName;
    OrbitalName.setNum(n);
    OrbitalName=OrbitalName+Name;

    int idx=ui.comboBox_AOrbital->findText(OrbitalName);

    if(idx> -1)
        ui.comboBox_AOrbital->setCurrentIndex(idx);
    else
    {
        ui.comboBox_AOrbital->insertItem(0,OrbitalName);
        ui.comboBox_AOrbital->setCurrentIndex(0);
    }

    // ui.comboBox_OB_cossin->setCurrentIndex(0);
    //if(m>0)  ui.comboBox_OB_cossin->setCurrentIndex(1); //cos-type
    //if(m<0) ui.comboBox_OB_cossin->setCurrentIndex(2);  //sin-type

    view3d->setUpdateCloudData();
}

void MainWindow::onBuildOrbital()
{

}

void MainWindow::color_background()
{
    QColor color = QColorDialog::getColor(Qt::white, this);
    if (!color.isValid()) return;

    double r = color.red() / 255.0;
    double g = color.green() / 255.0;
    double b = color.blue() / 255.0;

    view3d->setBackgroundColor(vector3(r, g, b));
    angularY3d->setBackgroundColor(vector3(r, g, b));
    proj3d->setBackgroundColor(vector3(r, g, b));
    radial3d->setBackgroundColor(vector3(r, g, b));
}


void MainWindow::newFile()
{
    ui.doubleSpinBox_isosurface->setDisabled(true);
    ui.doubleSpinBox_interval->setDisabled(true);
    ui.spinBox_Ngrid->setDisabled(true);
    ui.doubleSpinBox_probability->setDisabled(true);
    ui.doubleSpinBox_boxsize->setDisabled(true);
    ui.checkBox_box->setDisabled(true);
    ui.checkBox_grid->setDisabled(true);
    ui.pushButton_default->setDisabled(true);
    ui.pushButton_redraw->setDisabled(true);

    ui.checkBox_cloud->setCheckState(Qt::Unchecked);
}









void MainWindow::removeOrbitalfromMesh3D(AO * ao, uint idx)
{
    // mesh3d->removeOrbital(ao,idx);
}
void MainWindow::removeOrbitalfromMesh3D(AO * ao)
{
    //  mesh3d->removeOrbital(ao);
}

void MainWindow::clearAllViews()
{
    if(ui.tabWidget_left->currentIndex()<1) {
        view3d->removeAllActors();
        proj3d->removeAllActors();
        radial3d->removeAllActors();
        angularY3d->removeAllActors();
        view3d->renderWindow()->Render();
        proj3d->renderWindow()->Render();
        radial3d->renderWindow()->Render();
        angularY3d->renderWindow()->Render();
    }
    else
    {
        if (!hoview3d) return;
        hoview3d->removeAllActors();
        hoview3d->renderWindow()->Render();
    }

}

void MainWindow::refreshViews()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);
    if( !ao || ao==nullptr) return;

    view3d->setNegLobeVisible(isNegLobeVisible);
    view3d->setObitalMesh(isObtialMesh);
    view3d->renderScene();


    angularY3d->setNegLobeVisible(isNegLobeVisible);
    angularY3d->setObitalMesh(isObtialMesh);
    angularY3d->renderScene();



    radial3d->setVisibleCurve(isR_CurveVisible);
    radial3d->setRVisible(RVisible);
    radial3d->setR2Visible(R2Visible);
    radial3d->setRDFVisible(RDFVisible);
    radial3d->renderScene();


    proj3d->renderScene();

    QApplication::restoreOverrideCursor();

}



void MainWindow::onObtialXOY()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);
    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }

    if  (!ui.checkBox_OB_xoy->checkState())
    {
        setObitalType(0);
        //ui.checkBox_OB_xoy->setCheckState(Qt::Checked);
    }
    else {
        ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);
        setObitalType(1);
    }

    refreshViews();
    QApplication::restoreOverrideCursor();
}


void MainWindow::setObitalType (int _t)
{
    switch (_t){
    case 0: orbital_type=FULL;break;
    case 1: orbital_type=XOY;break;
    case 2: orbital_type=XOZ;break;
    case 3: orbital_type=YOZ;break;
    case 4: orbital_type=Wedge;break;
    case 5: orbital_type=Quarter;break;
    case 6: orbital_type=Corner;break;
    }


    if(!ao || ao == nullptr)
        return;
    ao->setOrbitaType(orbital_type);

    ao->buildIsoSurface();
    ao->buildYlmSurface();
    ao->clearCloudData();
}



void MainWindow::onObtialXOZ()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);
    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }


    if  (!ui.checkBox_OB_xoz->checkState())
        setObitalType(0);
    else {
        ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);
        setObitalType(2);
    }

    refreshViews();
    QApplication::restoreOverrideCursor();
}

void MainWindow::onObtialYOZ()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }

    if  (!ui.checkBox_OB_yoz->checkState())
        setObitalType(0);
    else {
        ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);

        setObitalType(3);

    }

    refreshViews();
    QApplication::restoreOverrideCursor();
}

void MainWindow::setAllObtialUnchecked()
{
    ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);

}


void MainWindow::onObtialWedge()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }


    if  (!ui.checkBox_OB_wedge->checkState())
        setObitalType(0);
    else {
        ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);

        setObitalType(4);
    }

    refreshViews();

    QApplication::restoreOverrideCursor();
}



void MainWindow::onObtialQuarter()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }

    if  (!ui.checkBox_OB_quarter->checkState())
        setObitalType(0);
    else {
        ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);

        setObitalType(5);
    }

    refreshViews();

    QApplication::restoreOverrideCursor();
}


void MainWindow::onObtialCorner()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if (!ao || ao == nullptr) {
        setAllObtialUnchecked();
        return;
    }

    if  (!ui.checkBox_OB_corner->checkState())
        setObitalType(0);
    else {
        ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);

        setObitalType(6);
    }

    refreshViews();
    QApplication::restoreOverrideCursor();
}





void MainWindow::onObtialSmooth()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if  (ui.checkBox_OB_smooth->checkState()){
        ui.checkBox_OB_mesh->setCheckState(Qt::Unchecked);
        isObtialMesh=false;
    }
    else {
        ui.checkBox_OB_mesh->setCheckState(Qt::Checked);
        isObtialMesh=true;
    }

    if (ui.checkBox_cloud->checkState()){
        ui.checkBox_cloud->blockSignals(true);
        ui.checkBox_cloud->setCheckState(Qt::Unchecked);
        view3d->setCloudVisible(false);
        ui.checkBox_cloud->blockSignals(false);
    }


    view3d->setObitalMesh(isObtialMesh);
    view3d->renderScene();


    angularY3d->setObitalMesh(isObtialMesh);
    angularY3d->renderScene();
    QApplication::restoreOverrideCursor();
}


void MainWindow::onObtialMesh()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    if  (ui.checkBox_OB_mesh->checkState()){
        ui.checkBox_OB_smooth->setCheckState(Qt::Unchecked);
        isObtialMesh=true;
    }
    else {
        ui.checkBox_OB_smooth->setCheckState(Qt::Checked);
        isObtialMesh=false;
    }

    if(ui.checkBox_OB_Color1->isCheckable())
    {
        ui.checkBox_OB_Color1->blockSignals(true);
        ui.checkBox_OB_Color1->setCheckState(Qt::Unchecked);
        view3d->setColoMapSurface(false);
        ui.checkBox_OB_Color1->blockSignals(false);
    }

    if (ui.checkBox_cloud->checkState()){
        ui.checkBox_cloud->blockSignals(true);
        ui.checkBox_cloud->setCheckState(Qt::Unchecked);
        view3d->setCloudVisible(false);
        ui.checkBox_cloud->blockSignals(false);
    }


    view3d->setObitalMesh(isObtialMesh);
    angularY3d->setObitalMesh(isObtialMesh);

    view3d->renderScene();
    angularY3d->renderScene();
    QApplication::restoreOverrideCursor();
}



void MainWindow::on_checkBox_cloud_stateChanged(int arg1)
{
    QApplication::setOverrideCursor(Qt::WaitCursor);
    if(arg1>0)
    {
        ui.checkBox_OB_mesh->blockSignals(true);
        ui.checkBox_OB_mesh->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_mesh->blockSignals(false);

        ui.checkBox_OB_smooth->blockSignals(true);
        ui.checkBox_OB_smooth->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_smooth->blockSignals(false);

        ui.checkBox_OB_Color1->blockSignals(true);
        ui.checkBox_OB_Color1->setCheckState(Qt::Unchecked);
        ui.checkBox_OB_Color1->blockSignals(false);

        view3d->setSurfaceVisible(false);
        view3d->setCloudVisible(true);
    }


    switch (arg1)
    {
    case 0: //hide
        ui.checkBox_OB_smooth->blockSignals(true);
        ui.checkBox_OB_smooth->setCheckState(Qt::Checked);
        ui.checkBox_OB_smooth->blockSignals(false);

        view3d->setCloudVisible(false);
        view3d->setSurfaceVisible(true);
        view3d->renderScene();

        break;

    case 1: //color points
        view3d->setSurfaceVisible(false);
        view3d->setCloudVisible(true);
        view3d->setColorCloudPoint(true);

        QApplication::setOverrideCursor(Qt::WaitCursor);
        view3d->renderScene();
        QApplication::restoreOverrideCursor();
        break;

    case 2://grey points
        view3d->setSurfaceVisible(false);
        view3d->setCloudVisible(true);
        view3d->setColorCloudPoint(false);

        view3d->renderScene();
        break;
    }

    QApplication::restoreOverrideCursor();
}



void MainWindow::onShownObtialNegativeLobe()
{
    if  (ui.checkBox_OB_negative->checkState())
        isNegLobeVisible=true;
    else
        isNegLobeVisible=false;

    view3d->setNegLobeVisible(isNegLobeVisible);
    angularY3d->setNegLobeVisible(isNegLobeVisible);

    view3d->renderScene();
    angularY3d->renderScene();
    //cloud3d->renderScene();
}


void MainWindow::onShownObtialPositiveLobe()
{
    if  (ui.checkBox_OB_positive->checkState())
        isPosLobeVisible=true;
    else
        isPosLobeVisible=false;

    view3d->setPosLobeVisible(isPosLobeVisible);
    angularY3d->setPosLobeVisible(isPosLobeVisible);

    view3d->renderScene();
    angularY3d->renderScene();
}








void MainWindow::closeEvent(QCloseEvent *event)
{
    ui.mdiArea->closeAllSubWindows();
    ui.mdiArea1->closeAllSubWindows();

    if(ao)
        delete ao;

    if(view3d)
        delete view3d;

    if(radial3d)
        delete radial3d;

    if(proj3d)
        delete proj3d;

    if(angularY3d)
        delete angularY3d;
}







void MainWindow::on_pushButton_clockwise_clicked()
{
    //view3d->onView_rotateClockwise(ui.spinBox_angle->value());
    //proj3d->onView_rotateClockwise(ui.spinBox_angle->value());
    //angularY3d->onView_rotateClockwise(ui.spinBox_angle->value());

    if (hoview3d) hoview3d->onView_rotateClockwise(ui.spinBox_angle->value());

}

void MainWindow::on_pushButton_counterclockwise_clicked()
{
    //view3d->onView_rotateCounterClockwise(ui.spinBox_angle->value());
    //proj3d->onView_rotateCounterClockwise(ui.spinBox_angle->value());
    //angularY3d->onView_rotateCounterClockwise(ui.spinBox_angle->value());
    if (hoview3d) hoview3d->onView_rotateCounterClockwise(ui.spinBox_angle->value());
}

void MainWindow::on_pushButton_Up_clicked()
{
    /*
    if (typeofActiveChild()==0)
        view3d->onView_rotateUp(ui.spinBox_angle->value());

    if (typeofActiveChild()==1)
        mesh3d->onView_rotateUp(ui.spinBox_angle->value());

    if (typeofActiveChild()==2)
        angularY3d->onView_rotateUp(ui.spinBox_angle->value());
    */

    //view3d->onView_rotateUp(ui.spinBox_angle->value());
    //proj3d->onView_rotateUp(ui.spinBox_angle->value());
    //angularY3d->onView_rotateUp(ui.spinBox_angle->value());
    if (hoview3d) hoview3d->onView_rotateUp(ui.spinBox_angle->value());
}


void MainWindow::on_pushButton_Down_clicked()
{
    /*
    if (typeofActiveChild()==0)
        view3d->onView_rotateDown(ui.spinBox_angle->value());

    if (typeofActiveChild()==1)
        mesh3d->onView_rotateDown(ui.spinBox_angle->value());

    if (typeofActiveChild()==2)
        angularY3d->onView_rotateDown(ui.spinBox_angle->value());

    */

    //view3d->onView_rotateDown(ui.spinBox_angle->value());
    //proj3d->onView_rotateDown(ui.spinBox_angle->value());
    //angularY3d->onView_rotateDown(ui.spinBox_angle->value());
    if (hoview3d) hoview3d->onView_rotateDown(ui.spinBox_angle->value());
}


void MainWindow::on_pushButton_right_clicked()
{
    //view3d->onView_rotateRight(ui.spinBox_angle->value());
    //proj3d->onView_rotateRight(ui.spinBox_angle->value());
    //angularY3d->onView_rotateRight(ui.spinBox_angle->value());

    if (hoview3d) hoview3d->onView_rotateRight(ui.spinBox_angle->value());
}

void MainWindow::on_pushButton_left_clicked()
{
    // view3d->onView_rotateLeft(ui.spinBox_angle->value());
    //proj3d->onView_rotateLeft(ui.spinBox_angle->value());
    //angularY3d->onView_rotateLeft(ui.spinBox_angle->value());
    if (hoview3d) hoview3d->onView_rotateLeft(ui.spinBox_angle->value());
}


void MainWindow::on_actionNew_triggered()
{
    if(ao)
        ao->clearData();
    clearAllViews();

    //delete hAO;
    ui.treeWidget_HBAO->removeAllItems();
}




int MainWindow::typeofActiveChild()
{
    int type = -1;
    QMdiSubWindow * activeSubWindow=nullptr;

    if( ui.tabWidget_left->currentIndex()<1 && ui.tabWidget->currentIndex()<1 )
    {
        activeSubWindow = ui.mdiArea->activeSubWindow();
        if (!activeSubWindow) return type;

        QObject * obj = activeSubWindow->widget();
        if (!activeSubWindow)  return type;
        QString classname=obj->metaObject()->className();

        if (classname.contains("View3D"))
            type = 0;
        if (classname.contains("Proj3D"))
            type = 1;
        if (classname.contains("Angular3D"))
            type = 2;
        if (classname.contains("Radial3D"))
            type = 3;
        return type;
    }
    else
        return 4;
    /*
    {
        activeSubWindow= ui.mdiArea->activeSubWindow();
        if (!activeSubWindow) return type;

        QObject * obj = activeSubWindow->widget();
        if (!activeSubWindow)  return type;
        QString classname=obj->metaObject()->className();

        if (classname.contains("HybridizeObitialViewer"))
            type = 4;
        return type;
    }*/
}



void MainWindow::on_actionSave_PNG_triggered()
{
    if(ui.tabWidget_left->currentIndex()>0)
    {
        if(!hoview3d) return;
        if(hoview3d->getObitalName()=="None") return;

        QStringList filters;
        filters << tr("png")+ "(*.png)"
                << tr("All files") + "(* *.*)";

        QString FileName = QFileDialog::getSaveFileName(this,
                                                        tr( "Save File" ), QDir::currentPath(), filters.join(";;"));

        if (FileName.isEmpty()) return;
        if( !FileName.endsWith("png") ) FileName+=".png";
        if( !FileName.endsWith("png") ) return;

        hoview3d->writePNG(FileName);
        return;
    }

    int type=typeofActiveChild();

    if(type<0) {
        QMessageBox::information(0, "Warning","No Actived Orbital!");
        return;
    }

    QStringList filters;
    filters << tr("png")+ "(*.png)"
            << tr("All files") + "(* *.*)";

    QString FileName = QFileDialog::getSaveFileName(this,
                                                    tr( "Save File" ), QDir::currentPath(), filters.join(";;"));

    if (FileName.isEmpty()) return;
    if( !FileName.endsWith("png") ) FileName+=".png";
    if( !FileName.endsWith("png") ) return;



    switch (type)
    {
    case 0:
        view3d->writePNG(FileName);
        break;
    case 1:
        proj3d->writePNG(FileName);
        break;
    case 2:
        angularY3d->writePNG(FileName);
        break;
    case 3:
        radial3d->writePNG(FileName);
        break;
    case 4:
        if(hoview3d) hoview3d->writePNG(FileName);
    }
}




void MainWindow::on_pushButton_OB_color_clicked()
{
    OrbitalProperty * moForm = new OrbitalProperty (this);
    if (moForm!=nullptr) {
        moForm->setAttribute( Qt::WA_DeleteOnClose, true );
        moForm->exec();
    }
}


void MainWindow::initialPanel()
{
    disconnect(ui.checkBox_OB_smooth,SIGNAL(clicked()),
               this,SLOT(onObtialSmooth()) );

    disconnect(ui.checkBox_OB_mesh,SIGNAL(clicked()),
               this,SLOT(onObtialMesh()) );

    ui.checkBox_OB_mesh->setCheckState(Qt::Checked);
    ui.checkBox_OB_smooth->setCheckState(Qt::Unchecked);
    isObtialMesh=true;
    view3d->setObitalMesh(isObtialMesh);
    angularY3d->setObitalMesh(isObtialMesh);

    connect(ui.checkBox_OB_mesh,SIGNAL(clicked()),
            this,SLOT(onObtialMesh()) );
    connect(ui.checkBox_OB_smooth,SIGNAL(clicked()),
            this,SLOT(onObtialSmooth()) );



    //-----------------------------------------------------
    disconnect(ui.checkBox_OB_corner,SIGNAL(clicked()),
               this,SLOT(onObtialCorner()) );

    disconnect(ui.checkBox_OB_quarter,SIGNAL(clicked()),
               this,SLOT(onObtialQuarter()) );

    disconnect(ui.checkBox_OB_wedge,SIGNAL(clicked()),
               this,SLOT(onObtialWedge()) );


    disconnect(ui.checkBox_OB_xoy,SIGNAL(clicked()),
               this,SLOT(onObtialXOY()) );


    disconnect(ui.checkBox_OB_xoz,SIGNAL(clicked()),
               this,SLOT(onObtialXOZ()) );

    disconnect(ui.checkBox_OB_yoz,SIGNAL(clicked()),
               this,SLOT(onObtialYOZ()) );


    setObitalType(0);

    ui.checkBox_OB_xoy->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_xoz->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_yoz->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_corner->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_wedge->setCheckState(Qt::Unchecked);
    ui.checkBox_OB_quarter->setCheckState(Qt::Unchecked);

    connect(ui.checkBox_OB_corner,SIGNAL(clicked()),
            this,SLOT(onObtialCorner()) );

    connect(ui.checkBox_OB_quarter,SIGNAL(clicked()),
            this,SLOT(onObtialQuarter()) );

    connect(ui.checkBox_OB_wedge,SIGNAL(clicked()),
            this,SLOT(onObtialWedge()) );

    connect(ui.checkBox_OB_xoy,SIGNAL(clicked()),
            this,SLOT(onObtialXOY()) );


    connect(ui.checkBox_OB_xoz,SIGNAL(clicked()),
            this,SLOT(onObtialXOZ()) );

    connect(ui.checkBox_OB_yoz,SIGNAL(clicked()),
            this,SLOT(onObtialYOZ()) );
    //-----------------------------------------------------


    disconnect(ui.checkBox_OB_positive,SIGNAL(clicked()),
               this,SLOT(onShownObtialPositiveLobe()) );

    disconnect(ui.checkBox_OB_negative,SIGNAL(clicked()),
               this,SLOT(onShownObtialNegativeLobe()) );


    ui.checkBox_OB_positive->setCheckState(Qt::Checked);
    ui.checkBox_OB_negative->setCheckState(Qt::Checked);


    isPosLobeVisible=true;
    isNegLobeVisible=true;


    view3d->setPosLobeVisible(isPosLobeVisible);
    angularY3d->setPosLobeVisible(isPosLobeVisible);

    connect(ui.checkBox_OB_positive,SIGNAL(clicked()),
            this,SLOT(onShownObtialPositiveLobe()) );
    connect(ui.checkBox_OB_negative,SIGNAL(clicked()),
            this,SLOT(onShownObtialNegativeLobe()) );
    //-----------------------------------------------------




    ui.checkBox_OB_Color1->blockSignals(true);
    ui.checkBox_OB_Color1->setCheckState(Qt::Unchecked);
    view3d->setColoMapSurface(false);
    ui.checkBox_OB_Color1->blockSignals(false);




    RVisible=RDFVisible=R2Visible=false;
    RDFVisible=true;
    disposeRadialFunctions();

}



void MainWindow::addAO(QString orbitalName)
{
    initialPanel();

    if(ao!=nullptr)
        ao->clearData();
    else
        ao = new AO();

    ao->setMainWin(this);


    nameAO=orbitalName;
    ao->SetName(nameAO);
    ao->name2nlm();

    ao->setOrbitaType(orbital_type);
    ao->setObitalMesh(isObtialMesh);

    ao->run();

    ui.doubleSpinBox_interval->setDisabled(true);
    ui.doubleSpinBox_interval->setDisabled(true);
    ui.checkBox_Node_Polar->setDisabled(false);
    ui.checkBox_Node_Radial->setDisabled(false);
    ui.checkBox_Node_Azimuthal->setDisabled(false);
    ui.checkBox_cloud->setCheckState(Qt::Unchecked);
    ui.checkBox_cloud->setTristate();




    cout << "\nNumber of nodes:"<<endl;
    cout << "Polar: "<< ao->numPolarNodes() <<endl;
    cout << "Radial: "<< ao->numRadialNodes() <<endl;
    cout << "Azimuthal: "<< ao->numAzimuthalNodes() <<endl<<endl;

    if(ao->numPolarNodes()<1) {
        ui.checkBox_Node_Polar->setDisabled(true);
    }

    if(ao->numRadialNodes()<1) {
        ui.checkBox_Node_Radial->setDisabled(true);
    }

    if(ao->numAzimuthalNodes()<1) {
        ui.checkBox_Node_Azimuthal->setDisabled(true);
    }


    ui.doubleSpinBox_isosurface->setDisabled(false);
    ui.doubleSpinBox_interval->setDisabled(true);
    ui.spinBox_Ngrid->setDisabled(false);
    ui.doubleSpinBox_probability->setDisabled(true);
    ui.doubleSpinBox_boxsize->setDisabled(false);
    ui.checkBox_box->setDisabled(false);
    ui.checkBox_grid->setDisabled(false);
    ui.pushButton_default->setDisabled(false);
    ui.pushButton_redraw->setDisabled(false);

    ui.groupBox_2->setEnabled(true);
    ui.checkBox_OB_Color->setEnabled(true);
    ui.checkBox_OB_negative->setEnabled(true);
    ui.checkBox_OB_mesh->setEnabled(true);
    ui.pushButton_OB_Axis->setEnabled(true);
    ui.checkBox_OB_xoy->setEnabled(true);
    ui.checkBox_OB_xoz->setEnabled(true);
    ui.checkBox_OB_corner->setEnabled(true);
    ui.checkBox_OB_quarter->setEnabled(true);
    ui.checkBox_OB_smooth->setEnabled(true);
    ui.checkBox_OB_wedge->setEnabled(true);
    ui.checkBox_OB_positive->setEnabled(true);
    ui.pushButton_OB_color->setEnabled(true);
    ui.checkBox_OB_yoz->setEnabled(true);
    ui.checkBox_ProjVisible->setEnabled(true);
    ui.checkBox_OB_Color1->setEnabled(true);

    ui.checkBox_lambert->setDisabled(true);

    refreshViews();

    //default parameters based on AO calculation
    on_pushButton_default_clicked();
}



void MainWindow::on_pushButton_addOrbital_clicked()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    //=ui.comboBox_AOrbital->currentText();

    //cout << orbitalName.toStdString().c_str()<<endl;

    addAO (orbitalName);
    ui.tabWidget->setCurrentIndex(0);

    QApplication::restoreOverrideCursor();

    ui.checkBox_cloud->setEnabled(true);

}


QString MainWindow::getExecutePath ()
{
    return QCoreApplication::applicationDirPath();
}



void MainWindow::on_checkBox_grid_stateChanged(int arg1)
{
    if(arg1>0)
        view3d->setGridVisible(true);
    else
        view3d->setGridVisible(false);
    view3d->renderScene();
}


void MainWindow::on_checkBox_box_stateChanged(int arg1)
{
    if(arg1>0)
        view3d->setBoxVisible(true);
    else
        view3d->setBoxVisible(false);
    view3d->renderScene();

    /*
    proj3d->setBoxVisible(false);
    if (arg1) proj3d->setBoxVisible(false);
    proj3d->renderScene();
    */
}


void MainWindow::refreshProbabilityValue()
{
    probability=ao->getOverallProbability();
    ui.doubleSpinBox_probability->setValue(probability);
}



void MainWindow::refreshIsovalue()
{
    isoValue=ao->getIsovalue();

    ui.doubleSpinBox_isosurface->setValue(isoValue);
}






void MainWindow::on_checkBox_cos_stateChanged(int arg1)
{
    if(arg1>0)
    {
        m=abs(m);
        ui.checkBox_sin->setCheckState(Qt::Unchecked);
        onChanged_nlm();
    }
}

void MainWindow::on_checkBox_sin_stateChanged(int arg1)
{
    if(arg1>0)
    {
        m=-abs(m);
        ui.checkBox_cos->setCheckState(Qt::Unchecked);
        onChanged_nlm();
    }
}

void MainWindow::on_checkBox_Node_Radial_stateChanged(int arg1)
{
    //cout << arg1<<endl;
    if(arg1>0)
    {
        view3d->setVisible_radial_node(true);
        visible_radial_node=true;
    }
    else {
        view3d->setVisible_radial_node(false);
        visible_radial_node=false;
    }

    view3d->renderScene();
    angularY3d->renderScene();
}


void MainWindow::on_checkBox_Node_Polar_stateChanged(int arg1)
{
    if (ui.checkBox_Node_Polar->checkState())
        visible_polar_node=true;
    else
        visible_polar_node=false;

    view3d->setVisible_polar_node(visible_polar_node);
    angularY3d->setVisible_polar_node(visible_polar_node);

    view3d->renderScene();
    angularY3d->renderScene();
}


void MainWindow::on_checkBox_Node_Azimuthal_stateChanged(int arg1)
{
    if(arg1>0) {
        view3d->setVisible_azimuthal_node(true);
        angularY3d->setVisible_azimuthal_node(true);
        visible_azimuthal_node=true;
    }
    else
    {
        view3d->setVisible_azimuthal_node(false);
        angularY3d->setVisible_azimuthal_node(false);
        visible_azimuthal_node=false;
    }

    view3d->renderScene();
    angularY3d->renderScene();
}




void MainWindow::on_checkBox_R_stateChanged(int arg1)
{
    RVisible=RDFVisible=R2Visible=false;

    if(arg1>0)  RVisible=true;

    disposeRadialFunctions();

    radial3d->renderScene();
}


void MainWindow::on_checkBox_R2_stateChanged(int arg1)
{
    RVisible=RDFVisible=R2Visible=false;
    if(arg1>0)    R2Visible=true;

    disposeRadialFunctions();

    radial3d->renderScene();
}


void MainWindow::on_checkBox_RDF_stateChanged(int arg1)
{
    RVisible=RDFVisible=R2Visible=false;
    if(arg1>0)    RDFVisible=true;

    disposeRadialFunctions();

    radial3d->renderScene();
}


void MainWindow::disposeRadialFunctions()
{
    disconnect(ui.checkBox_R,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_R_stateChanged(int)) );

    disconnect(ui.checkBox_R2,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_R2_stateChanged(int)) );

    disconnect(ui.checkBox_RDF,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_RDF_stateChanged(int)) );


    if(RVisible)
        ui.checkBox_R->setCheckState(Qt::Checked);
    else
        ui.checkBox_R->setCheckState(Qt::Unchecked);

    if(R2Visible)
        ui.checkBox_R2->setCheckState(Qt::Checked);
    else
        ui.checkBox_R2->setCheckState(Qt::Unchecked);

    if(RDFVisible)
        ui.checkBox_RDF->setCheckState(Qt::Checked);
    else
        ui.checkBox_RDF->setCheckState(Qt::Unchecked);

    radial3d->setRVisible(RVisible);
    radial3d->setR2Visible(R2Visible);
    radial3d->setRDFVisible(RDFVisible);

    connect(ui.checkBox_R,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_R_stateChanged(int)) );

    connect(ui.checkBox_R2,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_R2_stateChanged(int)) );

    connect(ui.checkBox_RDF,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_RDF_stateChanged(int)) );
}






void MainWindow::on_checkBox_R_curve_stateChanged(int arg1)
{
    isR_CurveVisible=false;
    if(arg1>0) isR_CurveVisible=true;

    radial3d->setVisibleCurve(isR_CurveVisible);
    radial3d->renderScene();
}




void MainWindow::on_checkBox_R_2D_stateChanged(int arg1)
{
    isR_2DView_Visible=false;
    if(ui.checkBox_R_2D->checkState())
        isR_2DView_Visible=true;

    radial3d->setVisible2DView(isR_2DView_Visible);

    radial3d->renderScene();
}

void MainWindow::on_checkBox_R_clipped_stateChanged(int arg1)
{
    isR_SideClip_Visible=false;
    if(ui.checkBox_R_clipped->checkState())
        isR_SideClip_Visible=true;
    radial3d->setVisible2DClipped(isR_SideClip_Visible);
    radial3d->renderScene();
}

void MainWindow::on_checkBox_R_axis_stateChanged(int arg1)
{
    isR_Axis_Visible=false;
    if(ui.checkBox_R_axis->checkState())
        isR_Axis_Visible=true;
    radial3d->setAxisVisible(isR_Axis_Visible);
    radial3d->renderScene();
}


void MainWindow::on_doubleSpinBox_interval_valueChanged(double arg1)
{
    return;
    boxInterval=arg1;
    NGrids=boxSize/arg1;
    ui.spinBox_Ngrid->setValue(NGrids);
}

double MainWindow::getBoxSize(){
    return ui.doubleSpinBox_boxsize->value();
}
int MainWindow::getNGrids(){
    return NGrids;
}
double MainWindow::getIsoSurfaceValue() {
    return ui.doubleSpinBox_isosurface->value();
}
double MainWindow::getInterval() {
    return boxInterval;
}


void MainWindow::on_doubleSpinBox_isosurface_valueChanged(double arg1)
{
    isoValue=ui.doubleSpinBox_isosurface->value();

    double _size=ao->findBoxSizefromIsovalue(isoValue);

    if(ui.doubleSpinBox_boxsize->value()<_size)
    {
        ui.doubleSpinBox_boxsize->blockSignals(true);
        ui.doubleSpinBox_boxsize->setValue(_size);
        ui.doubleSpinBox_boxsize->blockSignals(false);
        boxSize=_size;
    }

    ui.doubleSpinBox_interval->blockSignals(true);
    boxInterval=boxSize/NGrids;
    ui.doubleSpinBox_interval->setValue(boxInterval);
    ui.doubleSpinBox_interval->blockSignals(false);
}

void MainWindow::on_doubleSpinBox_probability_valueChanged(double arg1)
{

}

void MainWindow::on_doubleSpinBox_boxsize_valueChanged(double arg1)
{
    boxSize=ui.doubleSpinBox_boxsize->value();
    ui.doubleSpinBox_interval->setValue(arg1/double(NGrids));

    if(!needUpdate) return;

    boxInterval=boxSize/NGrids;
    ui.doubleSpinBox_interval->setValue(boxInterval);

    view3d->renderScene();
}

void MainWindow::on_spinBox_Ngrid_valueChanged(int arg1)
{
    NGrids=arg1;
    if (NGrids%2==1)
        NGrids=NGrids+1;

    boxInterval=boxSize/NGrids;
    ui.doubleSpinBox_interval->setValue(boxInterval);
}


void MainWindow::refreshBoxSize()
{
    boxSize=ao->MaxBox()*2.0;
    ui.doubleSpinBox_boxsize->setValue(boxSize);
}



void MainWindow::refreshGridSize()
{
    NGrids=ao->getGridSize();
    ui.spinBox_Ngrid->setValue(NGrids);
}




void MainWindow::on_pushButton_redraw_clicked()
{
    QApplication::setOverrideCursor(Qt::WaitCursor);

    ao->setGridSize(ui.spinBox_Ngrid->value());
    ao->setBoxSize(ui.doubleSpinBox_boxsize->value()*0.5);
    ao->setIsovalue(ui.doubleSpinBox_isosurface->value());

    ao->reRun();

    if(ui.checkBox_Node_Radial->isChecked()) {
        view3d->setVisible_radial_node(true);
        visible_radial_node=true;
    }

    view3d->renderScene();
    proj3d->renderScene();

    QApplication::restoreOverrideCursor();
}



void MainWindow::on_pushButton_default_clicked()
{
    //needUpdate=false;
    refreshBoxSize();
    refreshIsovalue();
    refreshGridSize();
    refreshGridInterval();
    refreshProbabilityValue();
    //needUpdate=true;
}



void MainWindow::refreshGridInterval()
{
    boxInterval=ao->getInteval();
    ui.doubleSpinBox_interval->setValue(boxInterval);
}


void MainWindow::on_checkBox_ProjVisible_stateChanged(int arg1)
{
    proj3d->setsemiOrbitalVisibleType(arg1);
    proj3d->renderScene();
}


void MainWindow::on_checkBox_OB_Color_stateChanged(int arg1)
{
    if(ui.checkBox_OB_Color->checkState())
    {
        view3d->setColorType(1);
        angularY3d->setColorType(1);
        proj3d->setColorType(1);
    }
    else
    {
        view3d->setColorType(2);
        angularY3d->setColorType(2);
        proj3d->setColorType(2);
    }
    view3d->renderScene();
    angularY3d->renderScene();
    proj3d->renderScene();
}







void MainWindow::on_checkBox_HOB_smooth_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    disconnect(ui.checkBox_HOB_mesh,SIGNAL(stateChanged(int)),
               this, SLOT(on_checkBox_RDF_stateChanged(int)) );

    if(arg1>0) {
        hoview3d->setObitalMesh(0);
        ui.checkBox_HOB_mesh->setCheckState(Qt::Unchecked);
    }
    else {
        hoview3d->setObitalMesh(1);
        ui.checkBox_HOB_mesh->setCheckState(Qt::Checked);
    }


    connect(ui.checkBox_HOB_mesh,SIGNAL(stateChanged(int)),
            this, SLOT(on_checkBox_RDF_stateChanged(int)) );


    hoview3d->renderScene();

}

void MainWindow::on_checkBox_HOB_mesh_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    ui.checkBox_HOB_smooth->blockSignals(true);


    if(arg1>0) {
        hoview3d->setObitalMesh(1);
        ui.checkBox_HOB_smooth->setCheckState(Qt::Unchecked);
    }
    else {
        hoview3d->setObitalMesh(0);
        ui.checkBox_HOB_smooth->setCheckState(Qt::Checked);
    }


    ui.checkBox_HOB_smooth->blockSignals(false);


    hoview3d->renderScene();
}



void MainWindow::on_checkBox_posLobe_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    hoview3d->setPosLobeVisible(arg1);
    hoview3d->renderScene();
}

void MainWindow::on_checkBox_negLobe_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    hoview3d->setNegLobeVisible(arg1);
    hoview3d->renderScene();
}

void MainWindow::on_checkBox_HOB_sketch_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;

    ui.checkBox_HOB_angular->blockSignals(true);


    if(arg1>0) {
        hoview3d->setOrbitalAngularType(0);
        ui.checkBox_HOB_angular->setCheckState(Qt::Unchecked);
    }
    else {
        hoview3d->setOrbitalAngularType(1);
        ui.checkBox_HOB_angular->setCheckState(Qt::Checked);
    }

    ui.checkBox_HOB_angular->blockSignals(false);


    hoview3d->renderScene();
}

void MainWindow::on_checkBox_HOB_angular_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;

    ui.checkBox_HOB_sketch->blockSignals(true);



    if(arg1>0) {
        hoview3d->setOrbitalAngularType(1);
        ui.checkBox_HOB_sketch->setCheckState(Qt::Unchecked);
    }
    else {
        hoview3d->setOrbitalAngularType(0);
        ui.checkBox_HOB_sketch->setCheckState(Qt::Checked);
    }

    ui.checkBox_HOB_sketch->blockSignals(false);



    hoview3d->renderScene();
}

void MainWindow::on_pushButton_HOB_color_clicked()
{
    if(hoview3d==nullptr) return;

    HybridizedOrbitalProperty * moForm = new HybridizedOrbitalProperty ();
    if (moForm!=nullptr) {
        moForm->setMainwin(this);
        moForm->initial();
        moForm->setAttribute( Qt::WA_DeleteOnClose, true );
        moForm->exec();
    }
}


void MainWindow::on_checkBox_OutLine_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    hoview3d->setSketchOrbitalOutLineVisible(arg1);
    hoview3d->renderScene();
}

void MainWindow::on_checkBox_Box_ExtraS_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;

    ui.checkBox_Box_ExtraP->blockSignals(true);
    ui.checkBox_Box_ExtraP->setCheckState(Qt::Unchecked);
    hoview3d->setSketchOrbitalExtraP_Visible(0);
    ui.checkBox_Box_ExtraP->blockSignals(false);


    if(arg1>0)
        hoview3d->setSketchOrbitalExtraS_Visible(1);
    else
        hoview3d->setSketchOrbitalExtraS_Visible(0);


    hoview3d->renderScene();
}

void MainWindow::on_checkBox_Box_ExtraP_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;

    ui.checkBox_Box_ExtraS->blockSignals(true);
    ui.checkBox_Box_ExtraS->setCheckState(Qt::Unchecked);
    hoview3d->setSketchOrbitalExtraS_Visible(0);
    ui.checkBox_Box_ExtraS->blockSignals(false);


    if(arg1>0)
        hoview3d->setSketchOrbitalExtraP_Visible(1);
    else
        hoview3d->setSketchOrbitalExtraP_Visible(0);

    hoview3d->renderScene();
}

void MainWindow::on_checkBox_Box_ExtraMesh_stateChanged(int arg1)
{
    if(hoview3d==nullptr) return;
    hoview3d->setExtraOrbitalMesh(arg1);
    hoview3d->renderScene();
}


void MainWindow::on_tabWidget_left_currentChanged(int index)
{
    disconnect(ui.tabWidget,SIGNAL(currentChanged(int)),
               this, SLOT(on_tabWidget_currentChanged(int)) );

    if(index<1)
        ui.tabWidget->setCurrentIndex(0);
    else
        ui.tabWidget->setCurrentIndex(1);


    connect(ui.tabWidget,SIGNAL(currentChanged(int)),
            this, SLOT(on_tabWidget_currentChanged(int)) );
}


void MainWindow::on_tabWidget_currentChanged(int index)
{
    disconnect(ui.tabWidget_left,SIGNAL(currentChanged(int)),
               this, SLOT(on_tabWidget_left_currentChanged(int)) );

    if(index < 1)
        ui.tabWidget_left->setCurrentIndex(0);
    else
        ui.tabWidget_left->setCurrentIndex(1);


    connect(ui.tabWidget_left,SIGNAL(currentChanged(int)),
            this, SLOT(on_tabWidget_left_currentChanged(int)) );
}




void MainWindow::hideActiveSubWindow()
{
    //int type = -1;
    QMdiSubWindow * activeSubWindow=nullptr;

    if(ui.tabWidget_left->currentIndex()<1)
    {
        activeSubWindow = ui.mdiArea->activeSubWindow();
        if (!activeSubWindow) return;

        //QObject * obj = activeSubWindow->widget();
        if (!activeSubWindow)  return;
        activeSubWindow->hide();
        return;
    }
    else
    {
        activeSubWindow= ui.mdiArea->activeSubWindow();
        if (!activeSubWindow)  return;

        //QObject * obj = activeSubWindow->widget();
        if (!activeSubWindow)   return;
        activeSubWindow->hide();
    }
}




void MainWindow::on_action_ShowAll_triggered()
{
    if(ui.tabWidget_left->currentIndex()<1 || ui.tabWidget->currentIndex()<1)
    {
        foreach (QMdiSubWindow * subWin, ui.mdiArea->subWindowList())
        {
            if(subWin->isHidden())
                subWin->show();
        }
    }
    else
        foreach (QMdiSubWindow * subWin, ui.mdiArea1->subWindowList())
        {
            if(subWin->isHidden())
                subWin->show();
        }
}

void MainWindow::on_actionAbout_triggered()
{
    AboutDialog * aboutdig = new AboutDialog (this);
    if (aboutdig!=nullptr) {
        aboutdig->setAttribute( Qt::WA_DeleteOnClose, true );
        aboutdig->exec();
    }
}

void MainWindow::on_actionXOY_triggered()
{
    view3d->onViewXY();
    angularY3d->onViewXY();
    proj3d->onViewXY();

    if (hoview3d) hoview3d->onViewXY();
    radial3d->onViewXY();
}

void MainWindow::on_actionYOZ_triggered()
{
    view3d->onViewYZ();
    angularY3d->onViewYZ();
    proj3d->onViewYZ();

    if (hoview3d) hoview3d->onViewYZ();

    radial3d->onViewYZ();
}

void MainWindow::on_actionXOZ_triggered()
{
    view3d->onViewXZ();
    angularY3d->onViewXZ();
    proj3d->onViewXZ();
    if (hoview3d) hoview3d->onViewXZ();

    radial3d->onViewXZ();
}


void MainWindow::on_action_Axis_triggered()
{
    isAxis_Visible=!isAxis_Visible;

    ui.pushButton_OB_Axis->setEnabled(true);

    /*
    ui.pushButton_HOBAxis->setEnabled(true);
    if(!isAxis_Visible) {
        ui.pushButton_OB_Axis->setEnabled(false);
        ui.pushButton_HOBAxis->setEnabled(false);
    }
*/

    if(hoview3d) {
        hoview3d->setAxisVisible(isAxis_Visible);
        hoview3d->renderScene();
    }

    if(view3d) {
        view3d->setAxisVisible(isAxis_Visible);
        view3d->renderScene();
    }

    if(angularY3d) {
        angularY3d->setAxisVisible(isAxis_Visible);
        angularY3d->renderScene();
    }
}


void MainWindow::on_pushButton_OB_Axis_clicked()
{
    uint typeOfView=typeofActiveChild();

    if(typeOfView<0) return;
    if(typeOfView==1) return;
    if(typeOfView==3) return;

    AxisProperty * axisProperty = new AxisProperty (this);
    if (!axisProperty) return;

    axisProperty->initilize(this);
    axisProperty->setAttribute(Qt::WA_DeleteOnClose, true );
    axisProperty->exec();
}

void MainWindow::on_pushButton_HOB_Axis_clicked()
{
    AxisProperty * axisProperty = new AxisProperty (this);
    if (!axisProperty) return;

    axisProperty->initilize(this);
    axisProperty->setAttribute(Qt::WA_DeleteOnClose, true );
    axisProperty->exec();
}





void MainWindow::on_checkBox_AllChart_stateChanged(int arg1)
{
    //if(!proj3d) return;
    //proj3d->setThreeDataVisible(false);
    //if(arg1) proj3d->setThreeDataVisible(true);

    //proj3d->renderScene();
}


void MainWindow::on_spinBox_n_valueChanged(int arg1)
{
    ui.comboBox_AOrbital->clear();

    ui.spinBox_l->setDisabled(false);
    ui.spinBox_m->setDisabled(false);

    switch (arg1)
    {
    case 1:
        ui.comboBox_AOrbital->addItem("1S");
        ui.spinBox_l->setDisabled(true);
        ui.spinBox_m->setDisabled(true);
        break;

    case 2:
        ui.comboBox_AOrbital->addItem("2S");
        ui.comboBox_AOrbital->addItem("2Px");
        ui.comboBox_AOrbital->addItem("2Py");
        ui.comboBox_AOrbital->addItem("2Pz");
        break;

    case 3:
        ui.comboBox_AOrbital->addItem("3S");
        ui.comboBox_AOrbital->addItem("3Px");
        ui.comboBox_AOrbital->addItem("3Py");
        ui.comboBox_AOrbital->addItem("3Pz");
        ui.comboBox_AOrbital->addItem("3Dxy");
        ui.comboBox_AOrbital->addItem("3Dyz");
        ui.comboBox_AOrbital->addItem("3Dxz");
        ui.comboBox_AOrbital->addItem("3Dx2-y2");
        ui.comboBox_AOrbital->addItem("3Dz2");
        break;

    case 4:
        ui.comboBox_AOrbital->addItem("4S");
        ui.comboBox_AOrbital->addItem("4Px");
        ui.comboBox_AOrbital->addItem("4Py");
        ui.comboBox_AOrbital->addItem("4Pz");
        ui.comboBox_AOrbital->addItem("4Dxy");
        ui.comboBox_AOrbital->addItem("4Dyz");
        ui.comboBox_AOrbital->addItem("4Dxz");
        ui.comboBox_AOrbital->addItem("4Dx2-y2");
        ui.comboBox_AOrbital->addItem("4Dz2");

        ui.comboBox_AOrbital->addItem("4Fz3");
        ui.comboBox_AOrbital->addItem("4Fxz2");
        ui.comboBox_AOrbital->addItem("4Fyz2");
        ui.comboBox_AOrbital->addItem("4Fz(x2-y2)");
        ui.comboBox_AOrbital->addItem("4Fxyz");
        ui.comboBox_AOrbital->addItem("4Fx(x2-3y2)");
        ui.comboBox_AOrbital->addItem("4Fy(3x2-y2)");

        break;

    case 5:
        ui.comboBox_AOrbital->addItem("5S");
        ui.comboBox_AOrbital->addItem("5Px");
        ui.comboBox_AOrbital->addItem("5Py");
        ui.comboBox_AOrbital->addItem("5Pz");
        ui.comboBox_AOrbital->addItem("5Dxy");
        ui.comboBox_AOrbital->addItem("5Dyz");
        ui.comboBox_AOrbital->addItem("5Dxz");
        ui.comboBox_AOrbital->addItem("5Dx2-y2");
        ui.comboBox_AOrbital->addItem("5Dz2");

        ui.comboBox_AOrbital->addItem("5Fz3");
        ui.comboBox_AOrbital->addItem("5Fxz2");
        ui.comboBox_AOrbital->addItem("5Fyz2");
        ui.comboBox_AOrbital->addItem("5Fz(x2-y2)");
        ui.comboBox_AOrbital->addItem("5Fxyz");
        ui.comboBox_AOrbital->addItem("5Fx(x2-3y2)");
        ui.comboBox_AOrbital->addItem("5Fy(3x2-y2)");


        ui.comboBox_AOrbital->addItem("5Gz4");
        ui.comboBox_AOrbital->addItem("5Gxz3");
        ui.comboBox_AOrbital->addItem("5Gyz3");
        ui.comboBox_AOrbital->addItem("5G(x2-y2)z2");
        ui.comboBox_AOrbital->addItem("5Gxyz2");
        ui.comboBox_AOrbital->addItem("5Gx3z");
        ui.comboBox_AOrbital->addItem("5Gy3z");
        ui.comboBox_AOrbital->addItem("5Gxy(x2-y2)");
        ui.comboBox_AOrbital->addItem("5G(x4+y4)");
        break;


    case 6:
        ui.comboBox_AOrbital->addItem("6S");
        ui.comboBox_AOrbital->addItem("6Px");
        ui.comboBox_AOrbital->addItem("6Py");
        ui.comboBox_AOrbital->addItem("6Pz");
        ui.comboBox_AOrbital->addItem("6Dxy");
        ui.comboBox_AOrbital->addItem("6Dyz");
        ui.comboBox_AOrbital->addItem("6Dxz");
        ui.comboBox_AOrbital->addItem("6Dx2-y2");
        ui.comboBox_AOrbital->addItem("6Dz2");

        ui.comboBox_AOrbital->addItem("6Fz3");
        ui.comboBox_AOrbital->addItem("6Fxz2");
        ui.comboBox_AOrbital->addItem("6Fyz2");
        ui.comboBox_AOrbital->addItem("6Fz(x2-y2)");
        ui.comboBox_AOrbital->addItem("6Fxyz");
        ui.comboBox_AOrbital->addItem("6Fx(x2-3y2)");
        ui.comboBox_AOrbital->addItem("6Fy(3x2-y2)");


        ui.comboBox_AOrbital->addItem("6Gz4");
        ui.comboBox_AOrbital->addItem("6Gxz3");
        ui.comboBox_AOrbital->addItem("6Gyz3");
        ui.comboBox_AOrbital->addItem("6G(x2-y2)z2");
        ui.comboBox_AOrbital->addItem("6Gxyz2");
        ui.comboBox_AOrbital->addItem("6Gx3z");
        ui.comboBox_AOrbital->addItem("6Gy3z");
        ui.comboBox_AOrbital->addItem("6Gxy(x2-y2)");
        ui.comboBox_AOrbital->addItem("6G(x4+y4)");
        break;


    case 7:
        ui.comboBox_AOrbital->addItem("7S");
        ui.comboBox_AOrbital->addItem("7Px");
        ui.comboBox_AOrbital->addItem("7Py");
        ui.comboBox_AOrbital->addItem("7Pz");
        ui.comboBox_AOrbital->addItem("7Dxy");
        ui.comboBox_AOrbital->addItem("7Dyz");
        ui.comboBox_AOrbital->addItem("7Dxz");
        ui.comboBox_AOrbital->addItem("7Dx2-y2");
        ui.comboBox_AOrbital->addItem("7Dz2");

        ui.comboBox_AOrbital->addItem("7Fz3");
        ui.comboBox_AOrbital->addItem("7Fxz2");
        ui.comboBox_AOrbital->addItem("7Fyz2");
        ui.comboBox_AOrbital->addItem("7Fz(x2-y2)");
        ui.comboBox_AOrbital->addItem("7Fxyz");
        ui.comboBox_AOrbital->addItem("7Fx(x2-3y2)");
        ui.comboBox_AOrbital->addItem("7Fy(3x2-y2)");


        ui.comboBox_AOrbital->addItem("7Gz4");
        ui.comboBox_AOrbital->addItem("7Gxz3");
        ui.comboBox_AOrbital->addItem("7Gyz3");
        ui.comboBox_AOrbital->addItem("7G(x2-y2)z2");
        ui.comboBox_AOrbital->addItem("7Gxyz2");
        ui.comboBox_AOrbital->addItem("7Gx3z");
        ui.comboBox_AOrbital->addItem("7Gy3z");
        ui.comboBox_AOrbital->addItem("7Gxy(x2-y2)");
        ui.comboBox_AOrbital->addItem("7G(x4+y4)");
        break;
    }
}



void MainWindow::on_comboBox_BoxType_currentIndexChanged(int index)
{
    if(!hoview3d) return;
    hoview3d->setBoxType(index);
    hoview3d->renderScene();
}



void MainWindow::on_comboBox_HybridizedOrbital_activated(int index)
{
    if(index<7) {
        ui.comboBox_BoxType->setDisabled(true);
    }
    else {
        ui.comboBox_BoxType->setDisabled(false);
        ui.checkBox_HOB_angular->setCheckState(Qt::Checked);
    }

    if(!hoview3d) return;


    QString HybridizedOrbitalName= ui.comboBox_HybridizedOrbital->currentText();
    ui.treeWidget_HBAO->addOrbital(HybridizedOrbitalName);

    hoview3d->setObitalName(ui.comboBox_HybridizedOrbital->currentText());
    hoview3d->generateAngularData();
    hoview3d->generateSketchModel();

    hoview3d->renderScene();
}



//continus color map
void MainWindow::on_checkBox_OB_Color1_stateChanged(int arg1)
{
    view3d->setColoMapSurface(arg1);
    view3d->renderScene();
}

void MainWindow::onLanguageChanged(QAction *action)
{
    QString locale;
    if (action->text().contains("Chinese") || action->text().contains("中文")) {
        locale = "zh_CN";
    } else {
        locale = "en_US";
    }

    QTranslator *mainTranslator = new QTranslator(qApp);
    QString qmFile = QString(":/translations/HAO_%1.qm").arg(locale);
    if (mainTranslator->load(qmFile)) {
        qApp->installTranslator(mainTranslator);
    }

    QMessageBox::information(this, "", "Language switch will take effect after restart.");
}


