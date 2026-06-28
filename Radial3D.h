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


#ifndef VIEWRDF_H
#define VIEWRDF_H
#include <QtWidgets/QSlider>
#include <QtWidgets/QLabel>
#include <QtCore/QPropertyAnimation>

#include <vtkCamera.h>
#include <vtkGenericOpenGLRenderWindow.h>
#include <vtkRenderWindowInteractor.h>
#include <vtkProperty.h>
#include <vtkDataSetMapper.h>

#include <QVTKOpenGLNativeWidget.h>
#include <vtkSmartPointer.h>
#include <vtkRenderer.h>
#include <vtkDataSet.h>

#include <vtkActor.h>
#include <vtkCommand.h>
#include <vtkConeSource.h>
#include <vtkEventQtSlotConnect.h>
#include <vtkInteractorStyle.h>
#include <vtkPolyDataMapper.h>
#include <vtkRenderWindow.h>
#include <vtkRenderer.h>
#include <vtkSphereSource.h>
#include <vtkTDxInteractorStyleCamera.h>
#include <vtkTDxInteractorStyleSettings.h>

#include <QVTKInteractor.h>

#include <vtkSmartPointer.h>
#include <vtkVolumeProperty.h>

#include <vtkPolyData.h>
#include <vtkTransform.h>
#include <vtkTransformPolyDataFilter.h>
#include <vtkPolyDataMapper.h>
#include <vtkActor.h>
#include <vtkProperty.h>
#include <vtkRenderWindow.h>
#include <vtkRenderer.h>
#include <vtkRenderWindowInteractor.h>

#include <vtkSmartPointer.h>
#include <vtkPolyData.h>

#include <vtkCubeSource.h>
#include <vtkSphereSource.h>
#include <vtkCylinderSource.h>
#include <vtkPolyDataNormals.h>
#include <vtkAxesActor.h>
#include <vtkTransform.h>
#include <vtkCommand.h>
#include <vtkReflectionFilter.h>
#include <vtkNamedColors.h>
#include <vtkImplicitPolyDataDistance.h>
#include <vtkVolumeProperty.h>
#include <vtkAppendPolyData.h>
#include <vtkCleanPolyData.h>
#include <vtkPNGWriter.h>
#include <vtkSmartPointer.h>
#include <vtkRenderer.h>
#include <vtkObjectFactory.h>
#include <vtkRenderingCoreModule.h>
#include <vtkProperty.h>
#include <vtkTexture.h>
#include <QVTKOpenGLNativeWidget.h>

#include "AO.h"

#include "View3D.h"
#include <QHash>

class MainWindow;

class Radial3D :  public QVTKOpenGLNativeWidget
{
    enum renderType {Line, Orbital};
    Q_OBJECT

public:


    explicit Radial3D(QWidget *parent = 0);
    ~Radial3D() {
        if (pColorTable) pColorTable->Delete();
        removeAllActors();
        clearData();
    }


    // Remove the data set from the scene
    void removeActors(AO * );
    void removeLastActor();
    void removeAllActors();
    void renderAxis();
    void removeOrbital(AO* , int );
    void removeOrbital(AO*  );



    void setRVisible(bool t) {RVisible=t;}
    void setR2Visible(bool t) {R2Visible=t;}
    void setRDFVisible(bool t) {RDFVisible=t;}
    void setMeshVisible(bool t) {meshVisible=t;}



    double scalarRange[2];

public:
    void renderScene();
    void renderObital();
    void renderObital2D();
    void renderObital3D();
    void renderOutLine();
    void renderCurve();


    void renderLine(double p0[3],double p1[3],double color[3],float width);

    void interP(vector3 , vector3 , int , std::vector <vector3> & );
    void buildColorTable();


    void sendMessage(QString);
    void appendMessage(QString);

    void setBKColor( vector3 );
    void setBackgroundColor(vector3 c) { setBKColor(c); }
    void writePNG(QString );

    MainWindow * getMainWindow() {return mainWindow;}
    void setMainWindow(MainWindow * m) {mainWindow=m;}

    void clearData();

    vtkSmartPointer <vtkCamera> camera;
    vtkSmartPointer <vtkLookupTable> pColorTable;
    float lineWidth;


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

    void setVisible2DView(bool t)    {is2DVisible=t; }
    void setVisible2DClipped(bool t) {is2DClipped=t;}
    void setVisibleCurve(bool t)     {isCurveVisible=t;}
    void setAxisVisible(bool t)      {isAxisVisible=t;}


protected:
    void closeEvent(QCloseEvent *event) override;


private:
    vtkPolyData * pData_RDF=nullptr,
                * pData_R=nullptr,
                * pData_R2=nullptr,
                * pData=nullptr;

    vtkPolyData * proj_RDF=nullptr,
                * proj_R=nullptr,
                * proj_R2=nullptr,
                * proj_Data=nullptr;

    vtkFloatArray * scalars=nullptr;


    vtkSmartPointer<vtkRenderer> m_renderer;
    vector3 bkcolor;
    MainWindow * mainWindow;
    bool RVisible,RDFVisible,R2Visible,meshVisible;

    bool isSideView_Visible=false, isTopView_Visible=false;
    bool isCurveVisible=false;
    bool isAxisVisible=false;
    bool is2DVisible=false;
    bool is3DVisible=false;
    bool is2DClipped=false;
    double maxBox=0.0,minBox;
    double trans=0.0;

};





#endif // VIEWRDF_H
