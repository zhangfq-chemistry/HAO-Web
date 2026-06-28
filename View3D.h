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


#ifndef AO3DVIEW_H
#define AO3DVIEW_H

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

//#include "matrix3/vector3.h"
#include "AO.h"


class   MainWindow;

class View3D : public QVTKOpenGLNativeWidget
{
  Q_OBJECT


public:
  explicit View3D(QWidget *parent = 0);
  ~View3D();

  void initializeActor (vtkActor * actor);

  void removeLastActor();
  void removeAllActors();
  void renderAxis(double l=3.0);
  void setAxisVisible(bool t){isAxisVisible=t;}

public:
  double length_x,length_y,length_z;
  bool   isAxisVisible;


  void setRadialNodecolor (vector3 v);
  void setAngularNodecolor_Theta (vector3 v );
  void setAngularNodecolor_Phi (vector3 v );


  vector3 getRadialNodecolor (){ return radialNodecolor;  }
  vector3 getAngularNodecolor_Theta (){ return angularNodecolor_Theta; }
  vector3 getAngularNodecolor_Phi (){ return angularNodecolor_Phi; }


  void setRadialNodeOpicity (double o);
  void setAngularNodeOpicity_Theta (double o);
  void setAngularNodeOpicity_Phi (double o);


  void setLobeColor_pos( vector3 );
  void setLobeColor_neg( vector3 );
  void setOrbitalLineWidth(double );
  double getOrbitalLineWidth() {return orbitalLineWidth;};
  void   refreshView();




public:
    vtkSmartPointer<vtkRenderer> renderer;
    vtkSmartPointer<vtkPlane> plane;
    vtkSmartPointer<vtkClipPolyData> clipper_pos,clipper_neg;


    void setBoxVisible(bool b) {isBoxVisible=b;}
    void setGridVisible(bool b) {isGridVisible=b;}

    void renderBox();
    void renderGrid();
    void renderScene();

    void prepareCloudData();
    void renderCloud();
    void renderColorMapOrbital();
    void renderOrbital();
    void renderProj();

    void renderNodes();
    void renderRadialNodes();
    void renderAzimuthalNodes();
    void renderPolarNodes();

    void renderCones(double height, double cos2angle);


    void renderLine(double p0[3],double p1[3],double color[3],float width);

    void  setBackgroundColor( vector3 );
    vector3 getBackgroundColor(){return bkcolor;}

    void  writePNG(QString );


    vtkSmartPointer<vtkCamera> camera;
    MainWindow * getMainWin() {return mainWin;}
    void setMainWindow(MainWindow * m) {mainWin=m;}
    MainWindow * mainWin;

protected:
    void closeEvent(QCloseEvent *event) override;


public slots:
  //! Zoom to the extent of the data set in the scene
  void zoomToExtent();


  void onViewXY();
  void onViewXZ();
  void onViewYZ();
  void onViewReset();
  void renderXYZAxis();

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
  double getAngularNodeThetaOpacity() {return opacity_theta;}
  double getAngularNodePhiOpacity() {return opacity_phi;}
  double getRadialNodeOpacity() {return opacity_radial;}

  double getNodeThickness (){return nodeThickness;}
  void   setNodeThickness (double t){nodeThickness=t;}


  float opacity=1.0;
  bool isSurfaceTransParent=true;
  bool isSurfaceVisible=true;
  void setSurfaceTransParent(float t){
      opacity=t;
      isSurfaceTransParent=true;
      if(opacity>0.99)isSurfaceTransParent=false;
  }
  void setCloudVisible(bool t=true){isCloudVisible=t;}
  void setSurfaceVisible(bool t=true){isSurfaceVisible=t;}
  void setPosLobeVisible(bool t=true) { isPosLobeVisible=t;}
  void setNegLobeVisible(bool t=true) {isNegLobeVisible=t;}

  void setVisible_azimuthal_node(bool t) {visible_azimuthal_node=t;}
  void setVisible_radial_node(bool t) {visible_radial_node=t;}
  void setVisible_polar_node(bool t) {visible_polar_node=t;}
  void setOrbitalVisible(bool t) {isOrbitalVisible=t;}

  void setObitalMesh(bool t){
      visible_pos_Lobe_Mesh=t;
      visible_neg_Lobe_Mesh=t;
  }

  void setColorType(int c) {_colorType=c;}
  void setDefaultColor();

  //void setCutEdgeVisible(bool t) {_cutEdgeVisible=t;}


  void setXLength(double l) {xLength=l;}
  void setYLength(double l) {yLength=l;}
  void setZLength(double l) {zLength=l;}

  double getXLength() {return xLength;}
  double getYLength() {return yLength;}
  double getZLength() {return zLength;}
  void   initXYZLength() {xLength=yLength=zLength=2.0;needCalculate=true;}
  void   getLengthFromAO();


  vector3 getXColor() {return xColor;}
  vector3 getYColor() {return yColor;}
  vector3 getZColor() {return zColor;}
  void setXColor(vector3 c) {xColor=c;}
  void setYColor(vector3 c) {yColor=c;}
  void setZColor(vector3 c) {zColor=c;}

  bool isColorCloudPoint=true;
  void setColorCloudPoint(bool t=true) {isColorCloudPoint=t;}
  void setNeedCalculate(bool t) {needCalculate=false;}
  void setUpdateCloudData() {needUpdateCloudData=true;}

  double scalarRange[2];
  void buildColorTable();
  void interP(vector3 p0, vector3 p1, uint num, std::vector <vector3> & ColorMaps);
  vtkSmartPointer <vtkLookupTable> pColorTable;


private:
  bool needCalculate=true;
  bool _cutEdgeVisible=false;
  int   _colorType=1;
  bool   visible_pos_Lobe_Mesh=true;
  bool   visible_neg_Lobe_Mesh=true;

  bool isOrbitalVisible;
  bool isCloudVisible,isPosLobeVisible,isNegLobeVisible;
  bool visible_azimuthal_node,visible_radial_node,visible_polar_node;


private:
  vtkSmartPointer<vtkRenderer> m_renderer;
  vector3 angularNodecolor_Theta,angularNodecolor_Phi,radialNodecolor;
  vector3 bkcolor,whiteColor;
  vector3 LobeColor_pos,LobeColor_neg,LobeColor_pos2,LobeColor_neg2;
  vector3 xColor,yColor,zColor;
  double  opacity_pos,opacity_neg;
  double  opacity_theta,opacity_phi,opacity_radial;
  double  orbitalLineWidth,nodeThickness;
  float   boxlineWidth;
  bool isBoxVisible,isGridVisible;
  double xLength, yLength,zLength;

  vtkVertexGlyphFilter * glyphFilter_pos=nullptr,
                       * glyphFilter_neg=nullptr;

  bool needUpdateCloudData=true;
  bool isColoMapSurface=false;
public:
  void setColoMapSurface(bool t=true){isColoMapSurface=t;}
};




#endif // AO3DVIEW_H
