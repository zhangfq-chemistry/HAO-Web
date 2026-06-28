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


#ifndef ANGULAR3D_H
#define ANGULAR3D_H





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

#include "AO.h"


class Angular3D: public QVTKOpenGLNativeWidget
{
    Q_OBJECT
public:
    explicit Angular3D(QWidget *parent = 0);

    // Add a data set to the scene
    void addDataSet(vtkSmartPointer<vtkDataSet> dataSet);


    // Remove the data set from the scene
    void removeLastActor();
    void removeAllActors();
    void renderAxis(double l=3.0);

public:
    MainWindow * getMainWindow() {return mainWindow;}
    void setMainWindow(MainWindow * m) {mainWindow=m;}



    void setAngularNodecolor_Theta (vector3 v );
    void setAngularNodecolor_Phi (vector3 v );


    vector3 getAngularNodecolor_Theta (){ return angularNodecolor_Theta; }
    vector3 getAngularNodecolor_Phi (){ return angularNodecolor_Phi; }


    void setAngularNodeOpicity_Theta (double o);
    void setAngularNodeOpicity_Phi (double o);


    void setLobeColor_pos( vector3 );
    void setLobeColor_neg( vector3 );
    void setOrbitalLineWidth(double );
    double getOrbitalLineWidth() {return orbitalLineWidth;};
    void refreshView();


protected:
    void closeEvent(QCloseEvent *event) override;


public:
    vtkSmartPointer<vtkRenderer> renderer;
    vtkSmartPointer<vtkPlane> plane;
    vtkSmartPointer<vtkClipPolyData> clipper_pos,clipper_neg;

    void renderXYZAxis();
    void renderScene();

    void renderOrbital();

    void renderAzimuthalNodes();
    void renderPolarNodes();


    void renderCones(double height, double cos2angle);

    void renderLine(double p0[3],double p1[3],double color[3],float width,vtkTransform * transform);

    void  setBackgroundColor( vector3 );
    vector3 getBackgroundColor(){return bkcolor;}

    void  writePNG(QString );



    vtkSmartPointer<vtkCamera> camera;


    vector3 positiveLobeColor(){return LobeColor_pos;};
    vector3 negtiveLobeColor(){return LobeColor_neg;};

    void  setPosLobeOpacity(double c) {opacity_pos=c;}
    void  setNegLobeOpacity(double c) {opacity_neg=c;}

    double getPosLobeOpacity() {return opacity_pos;}
    double getNegLobeOpacity() {return opacity_neg;}
    double getAngularNodeThetaOpacity() {return opacity_theta;}
    double getAngularNodePhiOpacity() {return opacity_phi;}

    double getNodeThickness (){return nodeThickness;}
    void   setNodeThickness (double t){nodeThickness=t;}

    void setAxisVisible(bool t){isAxisVisible=t;}
    void setDefaultcolor();



public slots:

    void zoomToExtent();

    void onViewXY();
    void onViewXZ();
    void onViewYZ();
    void onViewReset();

    void onView_rotateClockwise(double degree);
    void onView_rotateCounterClockwise(double degree);
    void onView_rotateUp(double degree);
    void onView_rotateDown(double degree);

    void onView_rotateRight(double );
    void onView_rotateLeft(double );


public:
    void setPosLobeVisible(bool t) { isPosLobeVisible=t;}
    void setNegLobeVisible(bool t) {isNegLobeVisible=t;}

    void setVisible_azimuthal_node(bool t) {visible_azimuthal_node=t;}
    void setVisible_polar_node(bool t) {visible_polar_node=t;}
    void setOrbitalVisible(bool t) {isOrbitalVisible=t;}

    void setObitalMesh(bool t){
        visible_pos_Lobe_Mesh=t;
        visible_neg_Lobe_Mesh=t;
    }

    void setColorType(int c) {_colorType=c;}
    void setDefaultColor();

    //void setCutEdgeVisible(bool t) {_cutEdgeVisible=t;}
    void renderCutterEdge();
    void renderCutterEdge_FeatureEdges();
    void renderCutterEdge_S();
    void renderCutterEdge_P();
    void renderCutterEdge_D();
    void renderCutterEdge_F();
    void renderCutterEdge_G();
    void renderCutterEdgeLine(vtkTransform *);
    void renderCutterEdgeLine1(vtkTransform *);



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

    void setNeedCalculate(bool t){needCalculate=t;}
    void getMaxLength();

private:
    QList<QPointF> pos, neg, pos1, neg1;
    bool   isAxisVisible=false;
    bool needCalculate=true;
    vector3 xColor,yColor,zColor;
    double xLength,yLength,zLength;
    //bool _cutEdgeVisible=false;
    int _colorType=1;
    bool visible_pos_Lobe_Mesh=true;
    bool visible_neg_Lobe_Mesh=true;

    bool isOrbitalVisible;
    bool isCloudVisible,isPosLobeVisible,isNegLobeVisible;
    bool visible_azimuthal_node,visible_polar_node;



private:
    vtkSmartPointer<vtkRenderer> m_renderer;
    vector3 angularNodecolor_Theta,angularNodecolor_Phi;
    vector3 bkcolor;
    vector3 LobeColor_pos,LobeColor_neg;
    vector3 LobeColor_pos2,LobeColor_neg2;
    double  opacity_pos,opacity_neg;
    double  opacity_theta,opacity_phi;
    double  orbitalLineWidth,nodeThickness;
    MainWindow * mainWindow;
    double black[3]={0.0,0.0,0.0};
    double grey[3]={0.5,0.5,0.5};
    double white[3]={1.0,1.0,1.0};

};

#endif // ANGULAR3D_H
