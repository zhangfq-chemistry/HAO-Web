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

#ifndef MESH3D_H
#define MESH3D_H

#include <QObject>
#include <QWidget>
#include <QString>




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

class Proj3D :  public QVTKOpenGLNativeWidget
{
    enum renderType {Line, Orbital};
    Q_OBJECT



public:


    explicit Proj3D(QWidget *parent = 0);
    ~Proj3D() {
        if (pColorTable) pColorTable->Delete();
        removeAllActors();
    }


    // Remove the data set from the scene
    void removeLastActor();
    void removeAllActors();
    void renderAxis();



    double scalarRange[2];

public:
    int id_ao;

    void renderScene();
    void renderObital();
    void generateObital();
    void generateObital_1();

    void renderBox();
    void renderSemiOrbital();

    void renderLine(double p0[3],double p1[3],double color[3],float width,vtkTransform * transform,
    int id_ao);

    void interP(vector3 , vector3 , int , std::vector <vector3> & );
    void buildColorTable();


    void sendMessage(QString);
    void appendMessage(QString);

    void setBKColor( vector3 );
    void setBackgroundColor(vector3 c) { setBKColor(c); }
    void writePNG(QString );

    MainWindow * getMainWindow() {return mainWindow;}
    void setMainWindow(MainWindow * m) {mainWindow=m;}

    vtkSmartPointer <vtkCamera> camera;
    vtkSmartPointer <vtkLookupTable> pColorTable;
    float lineWidth;



    void setBoxVisible(bool t) {
        _boxVisible=t;
    }

    void setsemiOrbitalVisibleType(int t) {
        _semiOrbitalVisibleType=t;
    }

    void setColorType(int c) {_colorType=c;}
    void setDefaultColor();


protected:
    void closeEvent(QCloseEvent *event) override;


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

private:

    int   _colorType=1;
    bool _boxVisible=false;
    int _semiOrbitalVisibleType=0;
    vector3 LobeColor_pos,LobeColor_neg;
    vector3 LobeColor_pos2,LobeColor_neg2;
    double  opacity_pos,opacity_neg;
    bool isCloudVisible,isPosLobeVisible,isNegLobeVisible;

    vtkSmartPointer<vtkRenderer> m_renderer;
    vector3 bkcolor;
    MainWindow * mainWindow;

};


#endif // MESH3D_H
