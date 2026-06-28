/***************************************************************************************
 *   This file is part of HygrogenAtomOrbitalViewer                                    *
 *                                                                                     *
 *                                                                                     *
 *   HygrogenAtomOrbitalViewer is free software:                                       *
 *   you can redistribute it and/or modify it under the terms of the                   *
 *   GNU General Public License as published by the Free Software                      *
 *   Foundation, either version 3 of the License, or (at your option)                  *
 *   any later version.                                                                *
 *                                                                                     *
 *   HygrogenAtomOrbitalViewer is distributed in the hope that it will be useful,      *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty                       *
 *   of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                           *
 *   See the GNU General Public License for more details.                              *
 *                                                                                     *
 *   You should have received a copy of the GNU General Public License                 *
 *   along with this program.  If not, see http://www.gnu.org/licenses/.               *
 *                                                                                     *
 ***************************************************************************************/


#ifndef OBTREE_H
#define OBTREE_H
#include <QIcon>
#include <QTimer>
#include <QTreeWidget>
#include <QSharedPointer>
#include <QVector>
#include <QMenu>


#include <QObject>
#include <QWidget>

class MainWindow;
class QSettings;
class HybridizeObitialViewer;

//Orbial Tree Widget
class OBTree : public QTreeWidget
{
    Q_OBJECT

public:
    typedef QSharedPointer<QSettings> SettingsPtr;
    OBTree(QWidget *parent = 0);
    ~OBTree() ;

    MainWindow * getMainWindow();
    void setViewer(HybridizeObitialViewer *v) {hybridizedView3d=v;}
    //void getViewer(HybridizeObitialViewer *v) {getMainWindow()->hoview3d;}




    QSize sizeHint() const override;
    void setSettingsObject(const SettingsPtr &settings);



public slots:
    void updateSetting(QTreeWidgetItem *);
    void updateSelection(QTreeWidgetItem *);
    void setAutoRefresh(bool autoRefresh);
    void setFallbacksEnabled(bool enabled);
    void maybeRefresh();
    void refresh();



    /*
    void refresh();
    void addOrbitals(QString ObName);


    void OnRemove();
    void OnRemoveAll();
    void OnPopMenu(const QPoint &);

    //void updateViewItems(QTreeWidgetItem *);
    //void removeOrbitals();
 */

public:
    void setActiveMolObitalMesh(bool );

 //   HMO * getMO (int id_mol, int id_mo)
   // {
    //    return getMol (id_mol)->getObtial(id_mo);
   // }

    void addOrbital(QString );
    int getOBId(QTreeWidgetItem *);


    void addViewsItems(QTreeWidgetItem * itemOrbital,  QString ObName,  int number);
    void removeAllItems();

private:
    void updateChildItems(QTreeWidgetItem *parent);
    void moveItemForward(QTreeWidgetItem *parent, int oldIndex, int newIndex);

    QTreeWidgetItem *createItem(const QString &text, QTreeWidgetItem *parent,
                                int index);
    QTreeWidgetItem *childAt(QTreeWidgetItem *parent, int index);



    int childCount(QTreeWidgetItem *parent);
    int findChild(QTreeWidgetItem *parent, const QString &text, int startIndex);


    void removeAllOrbitals();


    bool  isObtialMesh;


    QIcon groupIcon;
    QIcon keyIcon;


    QString name="";

    //View3D  *  view3d;

    unsigned int idx_mol,idx_mo;
    MainWindow * mainWin;
    QTreeWidgetItem * itemObtial=nullptr;

    SettingsPtr settings;
    QTimer refreshTimer;
    bool autoRefresh;
    HybridizeObitialViewer * hybridizedView3d=nullptr;

};

#endif // OBTREE_H
