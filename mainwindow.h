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


#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

class MdiChild;
QT_BEGIN_NAMESPACE
class QAction;
class QMenu;
class QMdiArea;
class QMdiSubWindow;

QT_END_NAMESPACE


#include "View3D.h"

#include "textEditor.h"
#include "Proj3D.h"
#include "Angular3D.h"
#include "Radial2D.h"
#include "Radial3D.h"
#include "Proj2D.h"
#include "Cloud2D.h"
#include "hybridizeObitialViewer.h"


#include "ui_mainwindow.h"



class HybridizeObitialViewer;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow();
    void hideActiveSubWindow();


protected:
    void closeEvent(QCloseEvent *event) override;

private slots:
    void on_pushButton_clockwise_clicked();
    void on_pushButton_counterclockwise_clicked();
    void on_pushButton_Up_clicked();
    void on_pushButton_Down_clicked();
    void on_actionNew_triggered();

    void onLanguageChanged(QAction *action);



    void on_actionSave_PNG_triggered();


    void on_pushButton_OB_color_clicked();
    void color_background();
    void on_pushButton_right_clicked();
    void on_pushButton_left_clicked();
    void on_pushButton_addOrbital_clicked();


    //void on_checkBox_Node_polar_clicked();
    //void on_checkBox_Node_Azimuthal_clicked();

    //void on_checkBox_Node_Radial_clicked();

    void on_checkBox_grid_stateChanged(int arg1);
    void on_checkBox_box_stateChanged(int arg1);

    void on_doubleSpinBox_boxsize_valueChanged(double arg1);

    //void on_pushButton_redraw_pressed();

    void on_checkBox_cos_stateChanged(int arg1);
    void on_checkBox_sin_stateChanged(int arg1);

    void on_checkBox_Node_Radial_stateChanged(int arg1);
    void on_checkBox_Node_Polar_stateChanged(int arg1);
    void on_checkBox_Node_Azimuthal_stateChanged(int arg1);

    void on_checkBox_cloud_stateChanged(int arg1);

    void on_checkBox_R_stateChanged(int arg1);
    void on_checkBox_R2_stateChanged(int arg1);
    void on_checkBox_RDF_stateChanged(int arg1);


    void on_checkBox_R_curve_stateChanged(int arg1);
    void on_checkBox_R_2D_stateChanged(int arg1);
    void on_checkBox_R_clipped_stateChanged(int arg1);

    void on_checkBox_R_axis_stateChanged(int arg1);

    //void on_checkBox_axis_stateChanged(int arg1);

    void on_pushButton_redraw_clicked();


    void on_spinBox_Ngrid_valueChanged(int arg1);

    void on_pushButton_default_clicked();
    void on_doubleSpinBox_isosurface_valueChanged(double arg1);
    void on_doubleSpinBox_probability_valueChanged(double arg1);


    void on_checkBox_ProjVisible_stateChanged(int arg1);
    void on_checkBox_OB_Color_stateChanged(int arg1);

    void on_tabWidget_left_currentChanged(int index);

    void on_checkBox_HOB_sketch_stateChanged(int arg1);

    void on_checkBox_HOB_smooth_stateChanged(int arg1);

    void on_checkBox_HOB_mesh_stateChanged(int arg1);


    void on_checkBox_posLobe_stateChanged(int arg1);

    void on_checkBox_negLobe_stateChanged(int arg1);

    void on_checkBox_HOB_angular_stateChanged(int arg1);

    void on_pushButton_HOB_color_clicked();

    //void on_checkBox_HOB_axisLine_stateChanged(int arg1);


    void on_checkBox_OutLine_stateChanged(int arg1);

    void on_checkBox_Box_ExtraS_stateChanged(int arg1);

    void on_checkBox_Box_ExtraP_stateChanged(int arg1);

    void on_checkBox_Box_ExtraMesh_stateChanged(int arg1);


    void on_tabWidget_currentChanged(int index);

    void on_action_ShowAll_triggered();

    void on_actionAbout_triggered();

    void on_actionXOY_triggered();
    void on_actionYOZ_triggered();
    void on_actionXOZ_triggered();

    void on_action_Axis_triggered();

    void on_pushButton_OB_Axis_clicked();



    void on_checkBox_AllChart_stateChanged(int arg1);



    void on_doubleSpinBox_interval_valueChanged(double arg1);

    void on_spinBox_n_valueChanged(int arg1);



    void on_comboBox_BoxType_currentIndexChanged(int index);


    void on_comboBox_HybridizedOrbital_activated(int index);



    void on_pushButton_HOB_Axis_clicked();


    void on_checkBox_OB_Color1_stateChanged(int arg1);

public:
    void initialPanel();
    void newFile();
    void sendMessage(QString & );
    void appendMessage(QString & );
    int  typeofActiveChild();
    void removeOrbitalfromMesh3D(AO *  , uint );
    void removeOrbitalfromMesh3D(AO *  );
    void clearAllViews();
    void loadFile(QString );


    AO * getAO()   {return ao;}

    int getN() const { return n; }
    int getL() const { return l; }
    int getM() const { return m; }

    View3D * getView3D() { return view3d; }
    Radial3D * getRadial3D() { return radial3d; }
    Angular3D * getAngular3D() { return angularY3d; }
    Proj3D * getProj3D() { return proj3d; }
    HybridizeObitialViewer * getHOView3D() { return hoview3d; }

    void removeOrbital();
    void removehybridizeOrbital();
    void switchLanguage(bool isChinese);

    QString getExecutePath();

private:
    enum { MaxRecentFiles = 5 };




public slots:
  void onBuildOrbital();
  void onAOSeletedChanged();

  void onChanged_n(int);
  void onChanged_l(int);
  void onChanged_m(int);
  void onChanged_nlm();

  void refreshViews();


  void onObtialXOY();
  void onObtialXOZ();
  void onObtialYOZ();
  void onObtialCorner();
  void onObtialQuarter();
  void onObtialWedge();
  void onObtialSmooth();
  void onObtialMesh();
  void setAllObtialUnchecked();


  void onShownObtialNegativeLobe();
  void onShownObtialPositiveLobe();




  //refresh data of panel
  void refreshIsovalue();
  void refreshGridSize();
  void refreshGridInterval();
  void refreshProbabilityValue();
  void refreshBoxSize();


public:
  void setObitalType (int );
  void addAO(QString orbitalName);
  void disposeRadialFunctions() ;

  double getBoxSize();
  int getNGrids();
  double getIsoSurfaceValue() ;
  double getInterval();



private:
    int n,l,m;
    bool needUpdate_nlm=true;
    AO * ao=nullptr;
    QString nameAO="";
    bool visible_radial_node;
    bool visible_polar_node;
    bool visible_azimuthal_node;
    bool isObtialMesh=true;
    OrbitaType orbital_type;
    bool needUpdate;
    bool isPosLobeVisible=true,isNegLobeVisible=true;

    bool RVisible,RDFVisible,R2Visible;
    bool isR_SideClip_Visible=false, isR_2DView_Visible=false,isR_CurveVisible=false;
    bool isR_Axis_Visible=false;
    bool isAxis_Visible=false;

    double  boxSize,  boxInterval, isoValue, probability;
    int NGrids;
    QString orbitalName="1S";

    View3D  *   view3d=nullptr;;
    Radial3D *  radial3d=nullptr;;
    TextEditor *  infoview=nullptr;;
    Proj3D  * proj3d=nullptr;;
    Angular3D * angularY3d=nullptr;;
    HybridizeObitialViewer * hoview3d=nullptr;

private:
  Ui::MainWindow ui;

};

#endif
