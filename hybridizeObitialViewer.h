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

#ifndef HYBRIDIZEOBITIALVIEWER_H
#define HYBRIDIZEOBITIALVIEWER_H

#include <QWidget>
#include <QColor>

#include <QVTKOpenGLNativeWidget.h>
#include <vtkSmartPointer.h>
#include <vtkRenderer.h>
#include <vtkDataSet.h>
#include <vtkClipPolyData.h>
#include <vtkPlane.h>

#include <vtkImplicitPlaneWidget2.h>
#include <vtkImplicitPlaneRepresentation.h>


#include <vtkOutlineFilter.h>
#include <vtkStripper.h>
#include <vtkSmoothPolyDataFilter.h>
#include <vtkImplicitBoolean.h>

#include <vtkCutter.h>
#include <vtkFillHolesFilter.h>
#include <vtkStripper.h>
#include <vtkFeatureEdges.h>
#include <vtkRegularPolygonSource.h>
#include <QVTKOpenGLNativeWidget.h>
#include <QVTKOpenGLWindow.h>
#include <vtkDelaunay2D.h>
#include <vtkLookupTable.h>
#include <vtkUnsignedCharArray.h>
#include <vtkPointData.h>
#include <vtkWindowedSincPolyDataFilter.h>
#include <vtkPolyLine.h>
#include <vtkLineSource.h>
#include <QVTKOpenGLNativeWidget.h>
#include <vtkPNGWriter.h>
#include <QList>

#include "AO.h"


#include "mainwindow.h"


class HybridizeObitialViewer : public QVTKOpenGLNativeWidget
{
    Q_OBJECT

public:
    explicit HybridizeObitialViewer(QWidget *parent = 0);
    ~HybridizeObitialViewer();

    void initializeActor (vtkActor * actor);

    void removeLastActor();
    void removeAllActors();

    void setAxisVisible(bool t){isAxisVisible=t;}
    bool IsAxisVisible(){return isAxisVisible;}

    void setLobeColor_pos( vector3 );
    void setLobeColor_neg( vector3 );
    void setOrbitalLineWidth(double );
    double getOrbitalLineWidth() {return orbitalLineWidth;}


    void   refreshView();
    void   generateSketchModel();
    void   generateAngularData();
    void   generateAngularData_SP(QString name);
    void   generateAngularData_DSP2();
    void   generateSlaterHybridData();
    void   clear();

    void renderSketchOrbital_SP();
    void renderSketchOrbital_SP2();
    void renderSketchOrbital_SP3();
    void renderSketchOrbital_D2SP3();
    void renderSketchOrbital_D2SP();
    void renderSketchOrbital_DSP3();
    void renderSketchOrbitalAxisLine();
    void renderXYZAxis();

    void generateAngularData_AO();


    void renderAngularOrbital_SP();
    void renderAngularOrbital_SP2();
    void renderAngularOrbital_SP3();
    void renderAngularOrbital_D2SP();
    void renderAngularOrbital_DSP3();
    void renderAngularOrbital_D2SP3();

    void renderAngularOrbital_AO();

    void rendeOutLines();

    void setBoxType(int id) {boxType=id;}


private:
    int boxType=0;
    bool isHybridized=false;
    double length_x,length_y,length_z;
    bool   isAxisVisible;
    double color1[3],color2[3];


public:
    vtkSmartPointer<vtkRenderer> renderer;
    vtkSmartPointer<vtkPlane> plane;


    vtkPolyData * sketchData_n=nullptr;
    vtkPolyData * sketchData_p=nullptr;

    vtkPolyData * angularData_n=nullptr;
    vtkPolyData * angularData_p=nullptr;

    vtkPolyData * angularData_n1=nullptr;
    vtkPolyData * angularData_p1=nullptr;




    void renderOutLines();
    void renderScene();


    void renderOrbital();
    void renderAngularOrbital();
    void renderSketchOrbital();


    void renderCones(double height, double cos2angle);
    void renderLine(double p0[3],double p1[3],double color[3],float width,vtkTransform * transform);
    void renderLine(double x0,double y0,double z0,
                    double x1,double y1,double z1, double color[3],
                    float width,vtkTransform * transform);

    void  setBackgroundColor( vector3 );
    vector3 getBackgroundColor(){return bkcolor;}

    void  writePNG(QString );


    vtkSmartPointer<vtkCamera> camera;
    MainWindow * getMainWindow() {return mainWin;}
    void setMainWindow(MainWindow * m) {mainWin=m;}


protected:
    MainWindow * mainWin;
    void closeEvent(QCloseEvent *event) override;
    //virtual void closeEvent(QCloseEvent *event);

public slots:
    //! Zoom to the extent of the data set in the scene
    void zoomToExtent();

    void onViewXY();
    void onViewXZ();
    void onViewYZ();



    void onView_rotateClockwise(double degree);
    void onView_rotateCounterClockwise(double degree);
    void onView_rotateUp(double degree);
    void onView_rotateDown(double degree);

    void onView_rotateRight(double );
    void onView_rotateLeft(double );

public:
    vector3 positiveLobeColor(){return LobeColor_pos;};
    vector3 negtiveLobeColor(){return LobeColor_neg;};

    void  setPosLobeOpacity(double c) {opacity_pos=c;}
    void  setNegLobeOpacity(double c) {opacity_neg=c;}

    double getPosLobeOpacity() {return opacity_pos;}
    double getNegLobeOpacity() {return opacity_neg;}


    void setPosLobeVisible(bool t) {isPosLobeVisible=t;}
    void setNegLobeVisible(bool t) {isNegLobeVisible=t;}


    void setOrbitalVisible(bool t) {isOrbitalVisible=t;}

    void setObitalMesh(bool t){
        visible_pos_Lobe_Mesh=t;
        visible_neg_Lobe_Mesh=t;
    }

    void setColorType(int c) {_colorType=c;}
    void setDefaultColor();

    QString getObitalName() {return obitalName;}
    void setObitalName(QString name) {obitalName=name;}
    void setSketchOrbitalVisible(bool t) {visible_sketchOrbital=t;}
    void setSketchOrbitalOutLineVisible(bool t) {visible_OrbitalOutLine=t;}

    void setInvisible(int idx) ;
    void setVisible_(int idx) ;
    void printInvisibleList();


    void setOrbitalAxisLineVisible(bool t){visible_SketchOrbitalAxisLine=t;}


    void setSketchOrbitalExtraS_Visible(bool t){visible_OrbitalExtraS=t;}
    void setSketchOrbitalExtraP_Visible(bool t){visible_OrbitalExtraP=t;}
    void renderExtraOrbital ();

    void renderExtraOrbital_AO();

    void setExtraOrbitalMesh (bool t){visible_ExtraOrbial_Mesh=t;}
    void setOrbitalAngularType(bool t) {_angularOrbitaType=t;};


    vector3 extraOrbitalPosLobeColor(){return colorExtraLobe_pos;};
    vector3 extraOrbitalNegLobeColor(){return colorExtraLobe_neg;}

    void setExtraOrbitalPosLobeColor(vector3 v){colorExtraLobe_pos=v;};
    void setExraOrbitalNegLobeColor( vector3 v){colorExtraLobe_neg=v;}

    vector3 getLineColor() {return lineColor;}
    void setLineColor(vector3 c) {lineColor=c;}

    double getLinewidth () {return Linewidth;}
    void setLinewidth (double s) {Linewidth=s;}


    void  setExtraPosLobeOpacity(double c) {ExtraOpacity_pos=c;}
    void  setExtraNegLobeOpacity(double c) {ExtraOpacity_neg=c;}

    double getExtraPosLobeOpacity() {return ExtraOpacity_pos;}
    double getExtraNegLobeOpacity() {return ExtraOpacity_neg;}


    void setXLength(double l) {xLength=l;}
    void setYLength(double l) {yLength=l;}
    void setZLength(double l) {zLength=l;}

    double getXLength() {return xLength;}
    double getYLength() {return yLength;}
    double getZLength() {return zLength;}
    void initXYZLength() {xLength=yLength=zLength=2.0;}

    vector3 getXColor() {return xColor;}
    vector3 getYColor() {return yColor;}
    vector3 getZColor() {return zColor;}
    void setXColor(vector3 c) {xColor=c;}
    void setYColor(vector3 c) {yColor=c;}
    void setZColor(vector3 c) {zColor=c;}


    void setNeedCalculate(bool t) {needCalculate=false;}


private:
    bool needCalculate=true;
    vector3 xColor,yColor,zColor;

    double xLength,yLength,zLength;
    double Linewidth=1.0;
    int   _colorType=1;
    bool  _angularOrbitaType=true;
    bool  visible_SketchOrbitalAxisLine=false,
          visible_OrbitalOutLine=false;


    bool visible_OrbitalExtraS=false,
         visible_OrbitalExtraP=false;

    bool  visible_pos_Lobe_Mesh=true;
    bool  visible_neg_Lobe_Mesh=true;
    bool  visible_ExtraOrbial_Mesh=true;

    bool isOrbitalVisible;
    bool isPosLobeVisible,isNegLobeVisible;

    bool visible_sketchOrbital=false;
    QList <int> invisibleAO;


private:
    vtkSmartPointer<vtkRenderer> m_renderer;
    vector3 bkcolor,lineColor;
    vector3 LobeColor_pos,LobeColor_neg,LobeColor_pos2,LobeColor_neg2;
    vector3 colorExtraLobe_pos,colorExtraLobe_neg;
    double  opacity_pos,opacity_neg,ExtraOpacity_pos,ExtraOpacity_neg;
    double  orbitalLineWidth;
    float   boxlineWidth;
    QString obitalName="None";
};


#endif // HYBRIDIZEOBITIALVIEWER_H
