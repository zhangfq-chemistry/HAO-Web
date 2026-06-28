#include "hybridizeObitialViewer.h"
#include "mixedFunctions.h"
#include "functionals.h"
#include <vtkImageData.h>
#include <vtkContourFilter.h>
#include <vtkCleanPolyData.h>
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
#include <vtkTubeFilter.h>
#include <vtkWindowToImageFilter.h>

#include <vtkOrientationMarkerWidget.h>

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
#include <vtkReverseSense.h>
#include <vtkFloatArray.h>
#include <vtkPlaneSource.h>
#include <vtkLightCollection.h>
#include <vtkLight.h>
#include <vtkOutlineFilter.h>
#include "ylmFunctions.h"


#include <vtkSmartPointer.h>
#include <vtkPolyDataMapper.h>
#include <vtkProperty.h>
#include <vtkRenderWindowInteractor.h>
#include <vtkParametricFunctionSource.h>
#include <vtkParametricTorus.h>

#include <vtkTextActor.h>
#include <vtkTextProperty.h>
#include <vtkOrientationMarkerWidget.h>
#include <vtkFollower.h>
#include <vtkVectorText.h>


void HybridizeObitialViewer::initializeActor (vtkActor * actor)
{
    if(actor==nullptr) return;

    /* VTK custom actor metadata removed for stock VTK build */;
    /* VTK custom actor metadata removed for stock VTK build */;
    /* VTK actor id removed for stock VTK build */;
    /* VTK actor id removed for stock VTK build */;
    /* VTK actor id removed for stock VTK build */;
    /* VTK actor id removed for stock VTK build */;
    /* VTK actor id removed for stock VTK build */;
}

HybridizeObitialViewer::~HybridizeObitialViewer()
{
    clear();
}

HybridizeObitialViewer::HybridizeObitialViewer(QWidget *parent)
    : QVTKOpenGLNativeWidget(parent)
{
    //this->setWindowTitle("Total Wave Function (Psi)");
    this->setWindowTitle("鏉傚寲杞ㄩ亾");

    vtkNew<vtkGenericOpenGLRenderWindow> window;
    setRenderWindow(window.Get());

    //background color
    //bkcolor.Set(0.6,0.6,0.6);
    bkcolor.Set(0.4,0.5,0.5);
    lineColor.Set(1.0,1.0,1.0);


    // Camera
    camera = vtkSmartPointer<vtkCamera>::New();
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,50);
    camera->SetFocalPoint(0,0,0);
    camera->SetParallelScale(3.0);
    camera->ParallelProjectionOn();



    // Renderer
    m_renderer = vtkSmartPointer<vtkRenderer>::New();
    m_renderer->SetActiveCamera(camera);
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->AddRenderer(m_renderer);

    m_renderer->LightFollowCameraOn();
    m_renderer->TwoSidedLightingOn();

    //plane=nullptr;
    //LobeColor_pos,LobeColor_neg;
    //LobeColor_pos.Set(10.0,1.0,1.0);
    //LobeColor_neg.Set(0.0,1.0,10.0);



    opacity_pos=opacity_neg=1.0;
    ExtraOpacity_pos=ExtraOpacity_neg=1.0;

    orbitalLineWidth=1.0;

    boxlineWidth=2.0;


    isAxisVisible=false;
    length_x=length_y=length_z=1.0;
    isOrbitalVisible=true;


    isOrbitalVisible=true;

    isPosLobeVisible=isNegLobeVisible=true;

    _colorType=1;
    invisibleAO.clear();
    clear();

    obitalName="None";

    initXYZLength();

    setDefaultColor();
}



void HybridizeObitialViewer::printInvisibleList()
{
    cout << "\n------------------------"<<endl;
    cout << "invisible orbitals: \n";
    for(int i=0;i!=invisibleAO.size();++i)
        cout << invisibleAO.at(i) <<endl;
    cout << "\n------------------------\n"<<endl;
}


void  HybridizeObitialViewer::setInvisible(int idx)
{
    invisibleAO.append(idx);

    std::sort(invisibleAO.begin(), invisibleAO.end());
    invisibleAO.erase(std::unique(invisibleAO.begin(), invisibleAO.end()), invisibleAO.end());
    //printInvisibleList();
}


void HybridizeObitialViewer::setVisible_(int idx)
{
    invisibleAO.removeOne(idx);
    std::sort(invisibleAO.begin(), invisibleAO.end());
    invisibleAO.erase(std::unique(invisibleAO.begin(), invisibleAO.end()), invisibleAO.end());
    //printInvisibleList();
}


void HybridizeObitialViewer::refreshView()
{
    renderWindow()->Render();
}


void HybridizeObitialViewer::setOrbitalLineWidth(double l)
{
    orbitalLineWidth =l;
}

void HybridizeObitialViewer::setLobeColor_pos( vector3 c)
{
    LobeColor_pos=c;
}

void HybridizeObitialViewer::setLobeColor_neg( vector3 c)
{
    LobeColor_neg=c;
}



void HybridizeObitialViewer::setBackgroundColor( vector3 c)
{
    bkcolor=c;
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->Render();
}


void HybridizeObitialViewer:: onViewXY()
{
    camera->SetViewUp(0,1,0);

    double p[3];
    camera->GetPosition(p);
    vector3 v(p[0],p[1],p[2]);
    camera->SetPosition(0,0,v.length());

    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}



void HybridizeObitialViewer:: onViewXZ()
{
    double p[3];
    camera->GetPosition(p);
    vector3 v(p[0],p[1],p[2]);

    onViewXY();
    camera->SetPosition(0,0,v.length());
    camera->Elevation(-90);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void HybridizeObitialViewer:: onViewYZ()
{
    double p[3];
    camera->GetPosition(p);
    vector3 v(p[0],p[1],p[2]);

    onViewXY();
    camera->SetPosition(0,0,v.length());
    camera->SetRoll(-90);
    camera->Elevation(-90);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}




void HybridizeObitialViewer:: onView_rotateClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void HybridizeObitialViewer:: onView_rotateCounterClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle+degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void HybridizeObitialViewer:: onView_rotateUp(double degree)
{
    //camera->Pitch(-5);
    camera->Elevation(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void HybridizeObitialViewer:: onView_rotateDown(double degree)
{
    //camera->Pitch(5);
    camera->Elevation(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void HybridizeObitialViewer::renderScene()
{
    if(obitalName=="None") return;

    removeAllActors();

    if(_colorType==1)
        for(int k=0;k<3;k++) {
            color1[k]=LobeColor_pos[k];
            color2[k]=LobeColor_neg[k];
        }


    if(_colorType==2)
        for(int k=0;k<3;k++)
        {
            color1[k]=LobeColor_pos2[k];
            color2[k]=LobeColor_neg2[k];
        }

    if(_angularOrbitaType) {
        renderAngularOrbital();
    }
    else {
        renderSketchOrbital();
    }

    renderOutLines();
    renderExtraOrbital();

    renderXYZAxis();

    renderWindow()->Render();
}


void HybridizeObitialViewer::clear()
{
    invisibleAO.clear();

    if(sketchData_n) {
        sketchData_n->Delete();
        sketchData_n=nullptr;
    }

    if(sketchData_p) {
        sketchData_p->Delete();
        sketchData_p=nullptr;
    }

    if(angularData_n) {
        angularData_n->Delete();
        angularData_n=nullptr;
    }

    if(angularData_p) {
        angularData_p->Delete();
        angularData_p=nullptr;
    }

    if(angularData_n1) {
        angularData_n1->Delete();
        angularData_n1=nullptr;
    }

    if(angularData_p1) {
        angularData_p1->Delete();
        angularData_p1=nullptr;
    }
}


void HybridizeObitialViewer::writePNG(QString name)
{
    //vector3 color=bkcolor;
    //setBKColor(whiteColor);

    auto windowToImageFilter =  vtkSmartPointer<vtkWindowToImageFilter>::New();
    windowToImageFilter->SetInput(renderWindow());
    windowToImageFilter->SetScale(2);
    windowToImageFilter->SetInputBufferTypeToRGBA(); //also record the alpha (transparency) channel
    windowToImageFilter->ReadFrontBufferOff(); // read from the back buffer
    windowToImageFilter->Update();

    auto writer = vtkSmartPointer<vtkPNGWriter>::New();
    writer->SetFileName(name.toLatin1());
    writer->SetInputConnection(windowToImageFilter->GetOutputPort());
    writer->Write();

    //setBKColor(color);
}



void HybridizeObitialViewer::setDefaultColor()
{
    LobeColor_pos2.Set(0.90,0.56,0.14);
    LobeColor_neg2.Set(0.21,0.44,0.53);

    LobeColor_pos.Set(0.67,0.34,0.67);
    LobeColor_neg.Set(0.13,0.62,0.62);

    xColor.Set(1.0,0.0,0.0);
    yColor.Set(0.0,1.0,0.0);
    zColor.Set(1.0,1.0,0.0);


    colorExtraLobe_pos.Set(0.90,0.56,0.14);
    colorExtraLobe_neg.Set(0.21,0.44,0.53);

    xLength=yLength=zLength=1.1;
}



void HybridizeObitialViewer::renderSketchOrbital_SP()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);


    if (isPosLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+1)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(180*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }

    if (isNegLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(180*i);
            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }

}

void HybridizeObitialViewer::renderSketchOrbital_SP2()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);

    if (isPosLobeVisible)
    {
        for(int i=0;i<3;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_pos = vtkActor::New();
            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.8,0.8,1.0);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();

            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);

            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(120*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<3;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(120*i);
            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderSketchOrbital_DSP3()
{
    renderSketchOrbital_SP2();


    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);

    if (isPosLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+4)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.8,0.8,1.0);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateX(180*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }

    if (isNegLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+4)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateX(180*i);
            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }

}

void HybridizeObitialViewer::renderSketchOrbital()
{
    if(obitalName=="SP") {
        renderSketchOrbital_SP();
        return;
    }

    if(obitalName=="SP2")
    {
        renderSketchOrbital_SP2();
        return;
    }

    if(obitalName=="SP3")
    {
        renderSketchOrbital_SP3();
        return;
    }

    if(obitalName=="D2SP")
    {
        renderSketchOrbital_D2SP();
        return;
    }

    if(obitalName=="DSP3")
    {
        renderSketchOrbital_DSP3();
        return;
    }

    if(obitalName=="D2SP3")
    {
        renderSketchOrbital_D2SP3();
        return;
    }

}
void HybridizeObitialViewer::renderSketchOrbital_D2SP3()
{
    //render planar four lobes
    renderSketchOrbital_D2SP();

    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);

    if (isPosLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+5)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.8,0.8,1.0);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateX(180*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }

    if (isNegLobeVisible)
    {
        for(int i=0;i<2;i++)
        {
            if (invisibleAO.contains(i+5)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateX(180*i);
            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderSketchOrbital_D2SP()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);

    if (isPosLobeVisible)
    {
        for(int i=0;i<4;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_pos = vtkActor::New();
            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();

            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.8,0.8,1.0);

            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(90*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<4;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateY(-90);
            rotation->RotateZ(90*i);
            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderSketchOrbital_SP3()
{
    if(_colorType==1)
        for(int k=0;k<3;k++) {
            color1[k]=LobeColor_pos[k];
            color2[k]=LobeColor_neg[k];
        }


    if(_colorType==2)
        for(int k=0;k<3;k++)
        {
            color1[k]=LobeColor_pos2[k];
            color2[k]=LobeColor_neg2[k];
        }

    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(sketchData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(sketchData_n);


    if (isPosLobeVisible)
    {
        for(int i=0;i<4;i++)
        {
            if (invisibleAO.contains(i+1)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            if(i<2) {
                rotation->RotateY(109.5/2.0);
                rotation->RotateZ(90+45.0+180.0*i);
            }
            else {
                rotation->RotateY(180-109.5/2.0);
                rotation->RotateZ(90+135.0+180.0*(i-2));
            }

            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }



    if (isNegLobeVisible)
    {
        for(int i=0;i<4;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            if(i<2) {
                rotation->RotateY(109.5/2.0);
                rotation->RotateZ(90+45.0+180.0*i);
            }
            else {
                rotation->RotateY(180-109.5/2.0);
                rotation->RotateZ(90+135.0+180.0*(i-2));
            }

            actor_neg->SetUserTransform(rotation);
            actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderAngularOrbital()
{

    if(obitalName=="SP") {
        renderAngularOrbital_SP();
        return;
    }

    if(obitalName=="SP2")
    {
        renderAngularOrbital_SP2();
        return;
    }

    if(obitalName=="SP3")
    {
        renderAngularOrbital_SP3();
        return;
    }

    if(obitalName=="D2SP")
    {
        renderAngularOrbital_D2SP();
        return;
    }

    if(obitalName=="DSP3")
    {
        renderAngularOrbital_DSP3();
        return;
    }

    if(obitalName=="D2SP3")
    {
        renderAngularOrbital_D2SP3();
        return;
    }

    renderAngularOrbital_AO();
}


void HybridizeObitialViewer::renderAngularOrbital_AO()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p1);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n1);


    if (isPosLobeVisible)
    {
        auto actor_pos = vtkActor::New();

        initializeActor (actor_pos);
        /* VTK actor id removed for stock VTK build */;  //positive
        /* VTK custom actor metadata removed for stock VTK build */; //index

        auto mapper_pos = vtkPolyDataMapper::New();

        actor_pos->GetProperty()->SetColor(color1);
        actor_pos->GetProperty()->SetOpacity(opacity_pos);
        actor_pos->SetPickable(false);

        mapper_pos->ScalarVisibilityOff();

        if (visible_pos_Lobe_Mesh) {
            actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
            actor_pos->GetProperty()->SetRepresentationToWireframe();
            actor_pos->GetProperty()->ShadingOff();
            //mapper_pos->ScalarVisibilityOff();
        }

        mapper_pos->SetInputData(posLobe);
        actor_pos->SetMapper(mapper_pos);
        actor_pos->GetProperty()->SetInterpolationToGouraud();

        //actor_pos->GetProperty()->SetInterpolationToPhong();


        actor_pos->GetProperty()->SetDiffuse(1.0);
        actor_pos->GetProperty()->SetAmbient(0.5);
        actor_pos->GetProperty()->SetSpecular(0.5);
        actor_pos->GetProperty()->SetSpecularPower(100.0);
        actor_pos->SetPickable(false);



        m_renderer->AddActor(actor_pos);
        mapper_pos->Delete();

    }

    if (isNegLobeVisible)
    {
        auto actor_neg = vtkActor::New();
        initializeActor (actor_neg);
        /* VTK actor id removed for stock VTK build */;  //negtive
        /* VTK custom actor metadata removed for stock VTK build */; //index


        auto mapper_neg = vtkPolyDataMapper::New();

        actor_neg->GetProperty()->SetColor(color2);
        actor_neg->GetProperty()->SetOpacity(opacity_neg);
        actor_neg->SetPickable(false);

        mapper_neg->ScalarVisibilityOff();

        if (visible_neg_Lobe_Mesh) {
            actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
            actor_neg->GetProperty()->SetRepresentationToWireframe();
            actor_neg->GetProperty()->ShadingOff();
            //mapper_pos->ScalarVisibilityOff();
        }

        mapper_neg->SetInputData(negLobe);
        actor_neg->SetMapper(mapper_neg);
        actor_neg->GetProperty()->SetInterpolationToGouraud();

        //actor_pos->GetProperty()->SetInterpolationToPhong();


        actor_neg->GetProperty()->SetDiffuse(1.0);
        actor_neg->GetProperty()->SetAmbient(0.5);
        actor_neg->GetProperty()->SetSpecular(0.5);
        actor_neg->GetProperty()->SetSpecularPower(100.0);
        actor_neg->SetPickable(false);


        m_renderer->AddActor(actor_neg);
        mapper_neg->Delete();
    }
}

void HybridizeObitialViewer::renderAngularOrbital_SP()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n);

    double angle=180.0;
    double times=2;


    if (isPosLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateZ(angle*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }

    if (isNegLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateZ(angle*i);
            actor_neg->SetUserTransform(rotation);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}


void HybridizeObitialViewer::renderAngularOrbital_SP2()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n);

    double angle=120.0;
    double times=3;

    if (isPosLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_pos = vtkActor::New();
            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.8,0.8,1.0);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();

            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);

            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateZ(angle*i);
            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();
            rotation->RotateZ(angle*i);
            actor_neg->SetUserTransform(rotation);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderAngularOrbital_SP3()
{ 
    if(1)
    {
        auto posLobe=vtkSmartPointer<vtkPolyData>::New();
        auto negLobe=vtkSmartPointer<vtkPolyData>::New();

        posLobe->DeepCopy(angularData_p);
        negLobe->DeepCopy(angularData_n);

        double angle=180.0;
        double times=2;

        if (isPosLobeVisible)
        {
            for(int i=0;i<times;i++)
            {
                if (invisibleAO.contains(i+1)) continue;
                auto actor_pos = vtkActor::New();

                initializeActor (actor_pos);

                auto mapper_pos = vtkPolyDataMapper::New();

                actor_pos->GetProperty()->SetColor(color1);
                actor_pos->GetProperty()->SetOpacity(opacity_pos);
                actor_pos->SetPickable(false);

                mapper_pos->ScalarVisibilityOff();

                if (visible_pos_Lobe_Mesh) {
                    actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                    actor_pos->GetProperty()->SetRepresentationToWireframe();
                    actor_pos->GetProperty()->ShadingOff();
                    //mapper_pos->ScalarVisibilityOff();
                }

                mapper_pos->SetInputData(posLobe);
                actor_pos->SetMapper(mapper_pos);
                actor_pos->GetProperty()->SetInterpolationToGouraud();

                //actor_pos->GetProperty()->SetInterpolationToPhong();


                actor_pos->GetProperty()->SetDiffuse(1.0);
                actor_pos->GetProperty()->SetAmbient(0.5);
                actor_pos->GetProperty()->SetSpecular(0.5);
                actor_pos->GetProperty()->SetSpecularPower(100.0);
                actor_pos->SetPickable(false);


                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();

                rotation->RotateZ(angle*i);

                actor_pos->SetUserTransform(rotation);

                m_renderer->AddActor(actor_pos);
                mapper_pos->Delete();
            }
        }


        if (isNegLobeVisible)
        {
            for(int i=0;i<times;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto actor_neg = vtkActor::New();
                initializeActor (actor_neg);

                auto mapper_neg = vtkPolyDataMapper::New();

                actor_neg->GetProperty()->SetColor(color2);
                actor_neg->GetProperty()->SetOpacity(opacity_neg);
                actor_neg->SetPickable(false);

                mapper_neg->ScalarVisibilityOff();

                if (visible_neg_Lobe_Mesh) {
                    actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                    actor_neg->GetProperty()->SetRepresentationToWireframe();
                    actor_neg->GetProperty()->ShadingOff();
                    //mapper_pos->ScalarVisibilityOff();
                }

                mapper_neg->SetInputData(negLobe);
                actor_neg->SetMapper(mapper_neg);
                actor_neg->GetProperty()->SetInterpolationToGouraud();

                //actor_pos->GetProperty()->SetInterpolationToPhong();


                actor_neg->GetProperty()->SetDiffuse(1.0);
                actor_neg->GetProperty()->SetAmbient(0.5);
                actor_neg->GetProperty()->SetSpecular(0.5);
                actor_neg->GetProperty()->SetSpecularPower(100.0);
                actor_neg->SetPickable(false);


                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();

                rotation->RotateZ(angle*i);


                actor_neg->SetUserTransform(rotation);
                m_renderer->AddActor(actor_neg);
                mapper_neg->Delete();
            }
        }
    }

    if(1) {
        auto posLobe=vtkSmartPointer<vtkPolyData>::New();
        auto negLobe=vtkSmartPointer<vtkPolyData>::New();

        posLobe->DeepCopy(angularData_p);
        negLobe->DeepCopy(angularData_n);

        double angle=180.0;
        double times=2;

        if (isPosLobeVisible)
        {
            for(int i=0;i<times;i++)
            {
                if (invisibleAO.contains(i+3)) continue;
                auto actor_pos = vtkActor::New();

                initializeActor (actor_pos);

                auto mapper_pos = vtkPolyDataMapper::New();

                actor_pos->GetProperty()->SetColor(color1);
                actor_pos->GetProperty()->SetOpacity(opacity_pos);
                actor_pos->SetPickable(false);

                mapper_pos->ScalarVisibilityOff();

                if (visible_pos_Lobe_Mesh) {
                    actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                    actor_pos->GetProperty()->SetRepresentationToWireframe();
                    actor_pos->GetProperty()->ShadingOff();
                    //mapper_pos->ScalarVisibilityOff();
                }

                mapper_pos->SetInputData(posLobe);
                actor_pos->SetMapper(mapper_pos);
                actor_pos->GetProperty()->SetInterpolationToGouraud();

                //actor_pos->GetProperty()->SetInterpolationToPhong();


                actor_pos->GetProperty()->SetDiffuse(1.0);
                actor_pos->GetProperty()->SetAmbient(0.5);
                actor_pos->GetProperty()->SetSpecular(0.5);
                actor_pos->GetProperty()->SetSpecularPower(100.0);
                actor_pos->SetPickable(false);


                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();

                rotation->RotateZ(90+angle*i);
                rotation->RotateWXYZ(180.0,1,1,0);

                actor_pos->SetUserTransform(rotation);

                m_renderer->AddActor(actor_pos);
                mapper_pos->Delete();
            }
        }


        if (isNegLobeVisible)
        {
            for(int i=0;i<times;i++)
            {
                if (invisibleAO.contains(i+3)) continue;

                auto actor_neg = vtkActor::New();
                initializeActor (actor_neg);

                auto mapper_neg = vtkPolyDataMapper::New();

                actor_neg->GetProperty()->SetColor(color2);
                actor_neg->GetProperty()->SetOpacity(opacity_neg);
                actor_neg->SetPickable(false);

                mapper_neg->ScalarVisibilityOff();

                if (visible_neg_Lobe_Mesh) {
                    actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                    actor_neg->GetProperty()->SetRepresentationToWireframe();
                    actor_neg->GetProperty()->ShadingOff();
                    //mapper_pos->ScalarVisibilityOff();
                }

                mapper_neg->SetInputData(negLobe);
                actor_neg->SetMapper(mapper_neg);
                actor_neg->GetProperty()->SetInterpolationToGouraud();

                //actor_pos->GetProperty()->SetInterpolationToPhong();


                actor_neg->GetProperty()->SetDiffuse(1.0);
                actor_neg->GetProperty()->SetAmbient(0.5);
                actor_neg->GetProperty()->SetSpecular(0.5);
                actor_neg->GetProperty()->SetSpecularPower(100.0);
                actor_neg->SetPickable(false);


                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();

                rotation->RotateZ(90+angle*i);
                rotation->RotateWXYZ(180.0,1,1,0);

                actor_neg->SetUserTransform(rotation);
                m_renderer->AddActor(actor_neg);
                mapper_neg->Delete();
            }
        }
    }

}


void HybridizeObitialViewer::renderAngularOrbital_D2SP()
{
    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n);

    double angle=90.0;
    double times=4;

    if (isPosLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateZ(angle*i);

            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+1)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index


            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateZ(angle*i);

            actor_neg->SetUserTransform(rotation);
            //actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderAngularOrbital_DSP3()
{
    renderAngularOrbital_SP2();

    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p1);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n1);

    double angle=180.0;
    double times=2;

    if (isPosLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+4)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.9,0.9,0.9);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateX(angle*i);

            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+4)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateX(angle*i);

            actor_neg->SetUserTransform(rotation);
            //actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void HybridizeObitialViewer::renderAngularOrbital_D2SP3()
{
    renderAngularOrbital_D2SP();

    auto posLobe=vtkSmartPointer<vtkPolyData>::New();
    posLobe->DeepCopy(angularData_p1);

    auto negLobe=vtkSmartPointer<vtkPolyData>::New();
    negLobe->DeepCopy(angularData_n1);

    double angle=180.0;
    double times=2;

    if (isPosLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+5)) continue;
            auto actor_pos = vtkActor::New();

            initializeActor (actor_pos);
            /* VTK actor id removed for stock VTK build */;  //positive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_pos = vtkPolyDataMapper::New();

            actor_pos->GetProperty()->SetColor(color1);
            actor_pos->GetProperty()->SetOpacity(opacity_pos);
            actor_pos->SetPickable(false);

            mapper_pos->ScalarVisibilityOff();

            if (visible_pos_Lobe_Mesh) {
                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_pos->SetInputData(posLobe);
            actor_pos->SetMapper(mapper_pos);
            actor_pos->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_pos->GetProperty()->SetDiffuse(1.0);
            actor_pos->GetProperty()->SetAmbient(0.5);
            actor_pos->GetProperty()->SetSpecular(0.5);
            actor_pos->GetProperty()->SetSpecularPower(100.0);
            actor_pos->SetPickable(false);
            actor_pos->SetScale(0.9,0.9,0.9);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateX(angle*i);

            actor_pos->SetUserTransform(rotation);

            m_renderer->AddActor(actor_pos);
            mapper_pos->Delete();
        }
    }


    if (isNegLobeVisible)
    {
        for(int i=0;i<times;i++)
        {
            if (invisibleAO.contains(i+5)) continue;

            auto actor_neg = vtkActor::New();
            initializeActor (actor_neg);
            /* VTK actor id removed for stock VTK build */;  //negtive
            /* VTK custom actor metadata removed for stock VTK build */; //index

            auto mapper_neg = vtkPolyDataMapper::New();

            actor_neg->GetProperty()->SetColor(color2);
            actor_neg->GetProperty()->SetOpacity(opacity_neg);
            actor_neg->SetPickable(false);

            mapper_neg->ScalarVisibilityOff();

            if (visible_neg_Lobe_Mesh) {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            mapper_neg->SetInputData(negLobe);
            actor_neg->SetMapper(mapper_neg);
            actor_neg->GetProperty()->SetInterpolationToGouraud();

            //actor_pos->GetProperty()->SetInterpolationToPhong();


            actor_neg->GetProperty()->SetDiffuse(1.0);
            actor_neg->GetProperty()->SetAmbient(0.5);
            actor_neg->GetProperty()->SetSpecular(0.5);
            actor_neg->GetProperty()->SetSpecularPower(100.0);
            actor_neg->SetPickable(false);


            auto rotation = vtkSmartPointer<vtkTransform>::New();
            rotation=  vtkSmartPointer<vtkTransform>::New();
            rotation->PostMultiply();

            rotation->RotateX(angle*i);

            actor_neg->SetUserTransform(rotation);
            //actor_neg->SetScale(0.3,0.3,0.3);

            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}


void HybridizeObitialViewer::generateSketchModel()
{  
    invisibleAO.clear();
    if(sketchData_n!=nullptr) return;

    sketchData_n=vtkPolyData::New();
    sketchData_p=vtkPolyData::New();

    //using dz2=3*cos(theta)^2-1
    if(1) {
        auto realYlm= vtkSmartPointer<vtkYlm>::New();
        realYlm->Setl(2);
        realYlm->Setm(0);
        realYlm->Setlobe(1);
        realYlm->SetMinimumV(0.0);
        realYlm->SetMaximumV(54.7/180.0*3.141592654);

        auto parametricYlm = vtkSmartPointer<vtkParametricFunctionSource>::New();
        parametricYlm->SetParametricFunction(realYlm);
        parametricYlm->SetUResolution(20);
        parametricYlm->SetVResolution(20);
        parametricYlm->Update();
        sketchData_n->DeepCopy(parametricYlm->GetOutput());
    }

    if(1) {
        auto realYlm= vtkSmartPointer<vtkYlm>::New();
        realYlm->Setl(2);
        realYlm->Setm(0);
        realYlm->Setlobe(1);
        realYlm->SetMinimumV(125.3/180.0*3.141592654);
        realYlm->SetMaximumV(vtkMath::Pi());


        auto parametricYlm = vtkSmartPointer<vtkParametricFunctionSource>::New();
        parametricYlm->SetParametricFunction(realYlm);
        parametricYlm->SetUResolution(50);
        parametricYlm->SetVResolution(50);
        parametricYlm->Update();
        sketchData_p->DeepCopy(parametricYlm->GetOutput());
    }
}

void HybridizeObitialViewer::generateAngularData_SP(QString name)
{


    angularData_n=vtkPolyData::New();
    angularData_p=vtkPolyData::New();

    for (int i=0;i<2;i++)
    {
        auto orbf= vtkSmartPointer<mixedFunctions>::New();

        orbf->Setlobe(i);
        orbf->SetD(0);
        orbf->SetS(1);

        if(name=="SP")
            orbf->SetP(1);

        else if(name=="SP2" || name=="DSP3")
            orbf->SetP(2);

        else if(name=="SP3")
            orbf->SetP(3);

        auto parametricYlm = vtkSmartPointer<vtkParametricFunctionSource>::New();
        parametricYlm->SetParametricFunction(orbf);
        parametricYlm->SetUResolution(50);
        parametricYlm->SetVResolution(50);
        parametricYlm->Update();

        if(i<1)
            angularData_n->DeepCopy(parametricYlm->GetOutput());
        else
            angularData_p->DeepCopy(parametricYlm->GetOutput());
    }
}

void HybridizeObitialViewer::generateAngularData_DSP2()
{
    angularData_n=vtkPolyData::New();
    angularData_p=vtkPolyData::New();

    for (int i=0;i<2;i++)
    {
        auto orbf= vtkSmartPointer<mixedFunctions>::New();

        orbf->Setlobe(i);
        orbf->SetS(1);
        orbf->SetP(2);
        orbf->SetD(1);

        auto parametricYlm = vtkSmartPointer<vtkParametricFunctionSource>::New();
        parametricYlm->SetParametricFunction(orbf);
        parametricYlm->SetUResolution(50);
        parametricYlm->SetVResolution(50);
        parametricYlm->Update();

        if(i<1)
            angularData_n->DeepCopy(parametricYlm->GetOutput());
        else
            angularData_p->DeepCopy(parametricYlm->GetOutput());
    }

}


//pure ao
void HybridizeObitialViewer::generateAngularData_AO()
{
    int l=0,m=0;
    if (obitalName.startsWith("S") )        l=0;
    else if (obitalName.startsWith("P") )    l=1;
    else if (obitalName.startsWith("D") )    l=2;
    else if (obitalName.startsWith("F") )    l=3;
    else if (obitalName.startsWith("G") )    l=4;
    else if (obitalName.startsWith("H") )    l=5;


    //P
    if (obitalName=="Pz")          m=0;
    else if (obitalName=="Px")     m=1;
    else if (obitalName=="Py")     m=-1;

    //D
    else if (obitalName=="Dz2")        m=0;
    else if (obitalName=="Dxz")        m=1;
    else if (obitalName=="Dyz")        m=-1;
    else if (obitalName=="Dxy")        m=-2;
    else if (obitalName=="Dx2-y2")     m=2;





    angularData_n1=vtkPolyData::New();
    angularData_p1=vtkPolyData::New();

    for (int lobe=0;lobe<2;lobe++)
    {
        auto realYlm= vtkSmartPointer<vtkYlm>::New();
        realYlm->Setl(l);
        realYlm->Setm(m);
        realYlm->Setlobe(lobe);

        //S orbital
        if(l<1 && lobe<1) continue;


        auto parametricYlm = vtkSmartPointer<vtkParametricFunctionSource>::New();
        parametricYlm->SetParametricFunction(realYlm);

        if(l>0) {
            parametricYlm->SetUResolution(l*100);
            parametricYlm->SetVResolution(l*100);
        }
        else {
            parametricYlm->SetUResolution(50);
            parametricYlm->SetVResolution(50);
        }


        parametricYlm->Update();

        if(lobe<1)
            angularData_n1->DeepCopy(parametricYlm->GetOutput());
        else
            angularData_p1->DeepCopy(parametricYlm->GetOutput());
    }
}



void HybridizeObitialViewer::generateSlaterHybridData()
{
    int n = mainWin->getN();
    if (n < 2) n = 2;
    double gridSize = n * 5.0;
    int N = 100;
    double interval = 2.0 * gridSize / N;
    double isoValue = 0.01;

    if(angularData_n) { angularData_n->Delete(); angularData_n=nullptr; }
    if(angularData_p) { angularData_p->Delete(); angularData_p=nullptr; }
    angularData_n = vtkPolyData::New();
    angularData_p = vtkPolyData::New();

    auto volume = vtkSmartPointer<vtkImageData>::New();
    volume->SetDimensions(N, N, N);
    volume->SetSpacing(interval, interval, interval);
    volume->SetOrigin(-gridSize, -gridSize, -gridSize);
    volume->AllocateScalars(VTK_DOUBLE, 1);

    double sqrt2 = 1.0 / sqrt(2.0);
    double sqrt6 = sqrt2 / sqrt(3.0);
    double sqrt_1_4pi = sqrt(1.0 / (4.0 * M_PI));
    double sqrt_3_4pi = sqrt(3.0 / (4.0 * M_PI));
    double sqrt_5_4pi = sqrt(5.0 / (4.0 * M_PI));
    double sqrt_6_8pi = sqrt(6.0 / (8.0 * M_PI));
    double sqrt_15_4pi = sqrt(15.0 / M_PI) / 4.0;

    #pragma omp parallel for collapse(3)
    for (int iz = 0; iz < N; iz++)
        for (int iy = 0; iy < N; iy++)
            for (int ix = 0; ix < N; ix++)
            {
                double x = -gridSize + ix * interval;
                double y = -gridSize + iy * interval;
                double z = -gridSize + iz * interval;
                double r = sqrt(x*x + y*y + z*z);
                if (r < 1e-10) r = 1e-10;
                double theta = acos(z / r);
                double phi = atan2(y, x);
                double st = sin(theta), ct = cos(theta);
                double sp = sin(phi), cp = cos(phi);
                double st2 = st*st, ct2 = ct*ct;

                double angular = 0.0;

                if (obitalName == "SP")
                {
                    double c_S = sqrt6 * sqrt_1_4pi;
                    double c_Px = sqrt2 * sqrt_3_4pi;
                    angular = c_S + c_Px * st * cp;
                }
                else if (obitalName == "SP2")
                {
                    double c_S = sqrt6 * sqrt_1_4pi;
                    double c_Px = sqrt(2.0/3.0) * sqrt_3_4pi;
                    angular = c_S + c_Px * st * cp;
                }
                else if (obitalName == "SP3")
                {
                    double c_S = sqrt6 * sqrt_1_4pi;
                    double cP = 0.5 * sqrt_3_4pi;
                    double c_Pz = 0.5 * sqrt_6_8pi;
                    angular = c_S + cP * st * cp + cP * st * sp + c_Pz * ct;
                }
                else if (obitalName == "DSP2")
                {
                    double c = 0.5;
                    double c_S = c * sqrt_1_4pi;
                    double c_Px = c * sqrt_3_4pi;
                    double c_Py = c * sqrt_3_4pi;
                    double c_D = c * sqrt_15_4pi;
                    double cos2p = cp*cp - sp*sp;
                    angular = c_S + c_Px * st * cp + c_D * st * cos2p;
                }
                else if (obitalName == "DSP3")
                {
                    double c_S = sqrt6 * sqrt_1_4pi;
                    double c_Pz = sqrt2 * sqrt_3_4pi;
                    double c_Dz2 = sqrt2 * sqrt_5_4pi;
                    double dz2 = 3.0*ct2 - 1.0;
                    angular = c_S + c_Pz * ct + c_Dz2 * dz2;
                }
                else if (obitalName == "D2SP3")
                {
                    double c_S = sqrt6 * sqrt_1_4pi;
                    double c_Pz = sqrt2 * sqrt_3_4pi;
                    double c_Dz2 = sqrt2 * sqrt_5_4pi;
                    double dz2 = 3.0*ct2 - 1.0;
                    angular = c_S + c_Pz * ct + c_Dz2 * dz2;
                }

                double R = Slater_radial_function(1, n, 0, r);
                double psi = R * angular;

                static_cast<double*>(volume->GetScalarPointer(ix, iy, iz))[0] = psi;
            }

    auto contour_p = vtkSmartPointer<vtkContourFilter>::New();
    contour_p->SetInputData(volume);
    contour_p->SetValue(0, isoValue);
    contour_p->Update();

    auto clean_p = vtkSmartPointer<vtkCleanPolyData>::New();
    clean_p->SetInputConnection(contour_p->GetOutputPort());
    clean_p->Update();
    angularData_p->DeepCopy(clean_p->GetOutput());

    auto contour_n = vtkSmartPointer<vtkContourFilter>::New();
    contour_n->SetInputData(volume);
    contour_n->SetValue(0, -isoValue);
    contour_n->Update();

    auto clean_n = vtkSmartPointer<vtkCleanPolyData>::New();
    clean_n->SetInputConnection(contour_n->GetOutputPort());
    clean_n->Update();
    angularData_n->DeepCopy(clean_n->GetOutput());

}


void HybridizeObitialViewer::generateAngularData()
{
    invisibleAO.clear();

    if( obitalName.startsWith("SP")  || obitalName.startsWith("D2") || obitalName.startsWith("DS")  )
        isHybridized=true;
    else {
        isHybridized=false;
        generateAngularData_AO();
        return;
    }

    generateSlaterHybridData();
    return;
}



void HybridizeObitialViewer::removeAllActors()
{
    while (1) {
        vtkActor * actor = m_renderer->GetActors()->GetLastActor();
        if (actor != nullptr)
        {
            m_renderer->RemoveActor(actor);
            continue;
        }
        break;
    }

    refreshView();
}




void HybridizeObitialViewer::removeLastActor()
{
    vtkActor * actor = m_renderer->GetActors()->GetLastActor();

    if (actor != nullptr)
        m_renderer->RemoveActor(actor);
}



void HybridizeObitialViewer::zoomToExtent()
{
    // Zoom to extent of last added actor
    vtkSmartPointer<vtkActor> actor = m_renderer->GetActors()->GetLastActor();
    if (actor != nullptr)
        m_renderer->ResetCamera(actor->GetBounds());
}



void HybridizeObitialViewer:: onView_rotateLeft(double degree)
{
    camera->Azimuth(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}



void HybridizeObitialViewer:: onView_rotateRight(double degree)
{
    camera->Azimuth(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}



void HybridizeObitialViewer::renderLine(double p0[3],double p1[3],double color[3],
float width,vtkTransform * transform)
{
    renderLine(p0[0], p0[1],p0[2],
            p1[0], p1[1], p1[2],
            color,width,  transform);

}

void HybridizeObitialViewer::renderLine(double x0,double y0,double z0,
                                        double x1,double y1,double z1,
                                        double color[3],
float width,vtkTransform * transform)
{
    auto lineSource =  vtkSmartPointer<vtkLineSource>::New();
    lineSource->SetPoint1(x0, y0, z0);
    lineSource->SetPoint2(x1, y1, z1);
    lineSource->Update();

    auto lineActor = vtkActor::New();
    initializeActor(lineActor);

    auto lineMapper = vtkPolyDataMapper::New();
    lineMapper->SetInputConnection(lineSource->GetOutputPort());


    lineActor->SetMapper(lineMapper);
    lineActor->GetProperty()->SetColor(color[0], color[1], color[2]);
    lineActor->GetProperty()->SetLineWidth(width);
    lineActor->SetPickable(false);
    if(transform!=nullptr)
        lineActor->SetUserTransform(transform);
    m_renderer->AddActor(lineActor);
}

void HybridizeObitialViewer::renderSketchOrbitalAxisLine()
{
    if(!visible_SketchOrbitalAxisLine) return;

    double length=0.632;
    double length1=-0.186;


    double color1[3]={1.0,1.0,1.0};
    double color2[3]={1.0,1.0,1.0};
    double width=0.1;

    double p0[3] = { 0.0,0.0,0.0};
    double p1[3] = { length,0.0,0.0};
    double p2[3] = { length1,0.0,0.0};

    if(obitalName=="SP")
    {
        if (isPosLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(180*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(180*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }

        return;
    }


    if(obitalName=="SP2")
    {
        if (isPosLobeVisible)
        {
            for(int i=0;i<3;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(120*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<3;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(120*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }
        return;
    }


    if(obitalName=="SP3")
    {
        if (isPosLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();

                if(i<2) {
                    rotation->RotateY(90.);
                    rotation->RotateY(109.5/2.0);
                    rotation->RotateZ(90+45.0+180.0*i);
                }
                else {
                    rotation->RotateY(90.);
                    rotation->RotateY(180-109.5/2.0);
                    rotation->RotateZ(90+135.0+180.0*(i-2));
                }

                renderLine(p0,p1,color1,width,rotation);

            }
        }



        if (isNegLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();
                if(i<2) {
                    rotation->RotateY(90.);
                    rotation->RotateY(109.5/2.0);
                    rotation->RotateZ(90+45.0+180.0*i);
                }
                else {
                    rotation->RotateY(90.);
                    rotation->RotateY(180-109.5/2.0);
                    rotation->RotateZ(90+135.0+180.0*(i-2));
                }

                renderLine(p2,p0,color1,width,rotation);
            }
        }
        return;
    }

    if(obitalName=="D2SP")
    {
        if (isPosLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(90*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(90*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }
        return;
    }


    //--------------------------------------
    if(obitalName=="DSP3")
    {
        //planar
        if (isPosLobeVisible)
        {
            for(int i=0;i<3;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(120*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<3;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(120*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }

        //vertical
        if (isPosLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+4)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateY(90);
                rotation->RotateZ(180*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+4)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateY(90);
                rotation->RotateZ(180*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }

        return;
    }

    //--------------------------------------
    if(obitalName=="D2SP3")
    {
        if (isPosLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(90*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<4;i++)
            {
                if (invisibleAO.contains(i+1)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateZ(90*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }


        //vertical
        if (isPosLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+5)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateY(90);
                rotation->RotateZ(180*i);
                renderLine(p0,p1,color1,width,rotation);
            }
        }

        if (isNegLobeVisible)
        {
            for(int i=0;i<2;i++)
            {
                if (invisibleAO.contains(i+5)) continue;

                auto rotation = vtkSmartPointer<vtkTransform>::New();
                rotation->RotateY(90);
                rotation->RotateZ(180*i);
                renderLine(p2,p0,color2,width,rotation);
            }
        }
    }
}



void HybridizeObitialViewer::renderOutLines()
{
    if(!visible_OrbitalOutLine) return;

    double radius=0.76;

    double color[3]={1.0,1.0,1.0};
    for(int i=0;i<3;i++)
        color[i]=lineColor[i];

    double width=Linewidth;

    if(obitalName=="SP")
    {
        radius=radius+0.01;
        double angle=3.141592654;
        double x0=radius, y0=0.0, z0=0.0;
        double x1=0.0, y1=0.0;

        for(int i=1;i<=2;i++)
        {
            x1=radius*cos(angle*i);
            y1=radius*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            x0=x1;
            y0=y1;
        }
        return;
    }


    if(obitalName=="SP2")
    {
        double angle=120.0/180.0*3.141592654;
        double x0=radius, y0=0.0, z0=0.0;
        double x1=0.0, y1=0.0;

        for(int i=1;i<=3;i++)
        {
            x1=radius*cos(angle*i);
            y1=radius*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            x0=x1;
            y0=y1;
        }
        return;
    }

    if(obitalName=="SP3")
    {
        double angle=90.0/180.0*3.141592654;
        double x0=radius*sqrt(2)/2.0, y0=x0;
        double x1=0.0, y1=0.0;
        double h=radius/sqrt(2);

        for(int i=1;i<=4;i++)
        {
            x1=radius*cos(angle/2.0+angle*i);
            y1=radius*sin(angle/2.0+angle*i);
            renderLine(x0,y0,h,x1,y1,h,color,width,nullptr);
            renderLine(x0,y0,-h,x1,y1,-h,color,width,nullptr);

            renderLine(x0,y0,h,x0,y0,-h,color,width,nullptr);
            //renderLine(x1,y1,radius/2,x1,y1,-radius/2,color,width,nullptr);

            x0=x1;
            y0=y1;
        }

        return;
    }

    if(obitalName=="D2SP3")
    {
        double angle=90.0/180.0*3.141592654;
        double x0=radius, y0=0.0, z0=0.0;
        double x1=0.0, y1=0.0;

        for(int i=1;i<=4;i++)
        {
            x1=radius*cos(angle*i);
            y1=radius*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,radius,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,-radius,color,width,nullptr);
            x0=x1;
            y0=y1;
        }
        return;
    }

    if(obitalName=="DSP3")
    {
        double angle=120.0/180.0*3.141592654;
        double x0=radius, y0=0.0, z0=0.0;
        double x1=0.0, y1=0.0;

        for(int i=1;i<=3;i++)
        {
            x1=radius*cos(angle*i);
            y1=radius*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,radius,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,-radius,color,width,nullptr);
            x0=x1;
            y0=y1;
        }

        return;
    }

    if(obitalName=="D2SP")
    {
        double angle=90.0/180.0*3.141592654;
        double x0=radius, y0=0.0, z0=0.0;
        double x1=0.0, y1=0.0;

        for(int i=1;i<=4;i++)
        {
            x1=radius*cos(angle*i);
            y1=radius*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            x0=x1;
            y0=y1;
        }
        return;
    }



    double angle;
    double x0, y0=0.0, z0=0.0;
    double x1, y1,h;
    double r=1.0;


    switch  (boxType ) {
    case 0://tetrahydron
        break;

    case 1://cubic
        angle=90.0/180.0*3.141592654;
        x0=r*sqrt(2)/2.0, y0=x0;
        x1=0.0, y1=0.0;
        h=r/sqrt(2);

        for(int i=1;i<=4;i++)
        {
            x1=r*cos(angle/2.0+angle*i);
            y1=r*sin(angle/2.0+angle*i);
            renderLine(x0,y0,h,x1,y1,h,color,width,nullptr);
            renderLine(x0,y0,-h,x1,y1,-h,color,width,nullptr);

            renderLine(x0,y0,h,x0,y0,-h,color,width,nullptr);
            //renderLine(x1,y1,radius/2,x1,y1,-radius/2,color,width,nullptr);

            x0=x1;
            y0=y1;
        }
        break;

    case 2://octahydron
        angle=90.0/180.0*3.141592654;
        x0=r, y0=0.0, z0=0.0;
        x1=0.0, y1=0.0;
        for(int i=1;i<=4;i++)
        {
            x1=r*cos(angle*i);
            y1=r*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,r,color,width,nullptr);
            renderLine(x0,y0,z0,0,0,-r,color,width,nullptr);
            x0=x1;
            y0=y1;
        }

    case 3://quadrangle
        angle=90.0/180.0*3.141592654;
        x0=r, y0=0.0, z0=0.0;
        x1=0.0, y1=0.0;

        for(int i=1;i<=4;i++)
        {
            x1=r*cos(angle*i);
            y1=r*sin(angle*i);
            renderLine(x0,y0,z0,x1,y1,z0,color,width,nullptr);
            x0=x1;
            y0=y1;
        }
        break;
    }
}



void HybridizeObitialViewer::renderXYZAxis()
{
    if(!isAxisVisible) return;

    double maxLength=max3(xLength,yLength,zLength);
    double radius=maxLength*0.012;

    double l;

    for(int i=1;i<4;i++){
        auto line1 = vtkSmartPointer<vtkLineSource>::New();
        switch(i){
        case 1:
            l=xLength*0.7;
            line1->SetPoint1(-l,0,0);
            line1->SetPoint2(l,0,0);
            break;
        case 2:
            l=yLength*0.7;
            line1->SetPoint1(0,-l,0);
            line1->SetPoint2(0,l,0);
            break;
        case 3:
            l=zLength*0.7;
            line1->SetPoint1(0,0,-l);
            line1->SetPoint2(0,0,l);
        }

        auto tubeFilter = vtkSmartPointer<vtkTubeFilter>::New();
        tubeFilter->SetInputConnection(line1->GetOutputPort());
        tubeFilter->SetRadius(radius);
        tubeFilter->SetNumberOfSides(50);
        tubeFilter->SetCapping(1);

        auto actor = vtkActor::New();
        auto mapper = vtkPolyDataMapper::New();
        switch(i){
        case 1:
            actor->GetProperty()->SetColor(xColor[0],xColor[1],xColor[2]);
            break;
        case 2:
            actor->GetProperty()->SetColor(yColor[0],yColor[1],yColor[2]);
            break;
        case 3:
            actor->GetProperty()->SetColor(zColor[0],zColor[1],zColor[2]);
            break;
        }
        actor->SetMapper(mapper);
        mapper->SetInputConnection(tubeFilter->GetOutputPort());
        m_renderer->AddActor(actor);

        //upper
        auto coneSource =  vtkSmartPointer<vtkConeSource>::New();
        auto actor1 = vtkActor::New();
        auto mapper1 = vtkPolyDataMapper::New();
        auto transform=  vtkSmartPointer<vtkTransform>::New();

        coneSource->SetResolution(100);
        coneSource->SetCapping(true);
        coneSource->SetHeight(maxLength*0.1);
        coneSource->SetRadius(radius*3);
        coneSource->Update();

        transform->PostMultiply();

        switch(i){
        case 1:
            coneSource->SetDirection(1.0,0.0,0.0);
            actor1->GetProperty()->SetColor(xColor[0],xColor[1],xColor[2]);
            transform->Translate(l*1.01,0.0,0.0);
            break;
        case 2:
            coneSource->SetDirection(0.0,1.0,0.0);
            actor1->GetProperty()->SetColor(yColor[0],yColor[1],yColor[2]);
            transform->Translate(0.0,l*1.01,0.0);
            break;
        case 3:
            coneSource->SetDirection(0.0,0.0,1.0);
            actor1->GetProperty()->SetColor(zColor[0],zColor[1],zColor[2]);
            transform->Translate(0.0,0.0,l*1.01);
            break;
        }

        actor1->SetMapper(mapper1);
        actor1->SetUserTransform(transform);
        mapper1->ScalarVisibilityOn();
        mapper1->SetInputConnection(coneSource->GetOutputPort());
        m_renderer->AddActor(actor1);

        auto labelMapper = vtkSmartPointer<vtkPolyDataMapper>::New();
        auto labelActor = vtkSmartPointer<vtkFollower>::New();
        auto axesLabel =vtkSmartPointer<vtkVectorText>::New();
        auto transform2=  vtkSmartPointer<vtkTransform>::New();

        switch(i){
        case 1:
            axesLabel->SetText("x");
            transform2->Translate(l*1.1,-0.02,0.0);
            labelActor->GetProperty()->SetColor(xColor[0],xColor[1],xColor[2]);
            break;
        case 2:
            axesLabel->SetText("y");
            transform2->Translate(-0.03,l*1.12,0.0);
            labelActor->GetProperty()->SetColor(yColor[0],yColor[1],yColor[2]);
            break;
        case 3:
            axesLabel->SetText("z");
            transform2->Translate(-0.04,-0.04,l*1.12);
            labelActor->GetProperty()->SetColor(zColor[0],zColor[1],zColor[2]);
            break;

        }
        transform2->PostMultiply();
        labelActor->SetMapper(labelMapper);
        labelActor->SetScale(0.08,0.08,0.08);
        labelActor->SetUserTransform(transform2);
        labelActor->SetCamera(m_renderer->GetActiveCamera());
        labelMapper->ScalarVisibilityOn();
        labelMapper->SetInputConnection(axesLabel->GetOutputPort());

        m_renderer->AddViewProp(labelActor);
    }

    // cout << "render axis ok inside HybridizeObitialViewer"<<endl;
}


void HybridizeObitialViewer::renderExtraOrbital ()
{
    if(!visible_OrbitalExtraS && !visible_OrbitalExtraP) return;

    if(!isHybridized) {renderExtraOrbital_AO();return;}


    double length=0.92;

    double color_1[3],color_2[3];

    for(int k=0;k<3;k++) {
        color_1[k]=colorExtraLobe_pos[k];
        color_2[k]=colorExtraLobe_neg[k];
        //color_1[k]=color1[k];
        //color_2[k]=color2[k];
    }


    auto sphere = vtkSphereSource::New();
    sphere->SetPhiResolution(20);
    sphere->SetThetaResolution(20);
    sphere->SetRadius(0.15);
    sphere->Update();

    if(obitalName=="SP")
    {
        double angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);


            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }



    if(obitalName=="SP2")
    {
        double angle=120.0;
        for(int i=0;i<3;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }


    if(obitalName=="SP3")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateZ(angle*i);


            if(i<2) {
                transform->RotateY(109.5/2.0);
                transform->RotateZ(45.0+180.0*i);
            }
            else {
                transform->RotateY(180-109.5/2.0);
                transform->RotateZ(135.0+180.0*(i-2));
            }


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

    }

    if(obitalName=="D2SP3")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }

    if(obitalName=="DSP3")
    {
        double angle=120.0;
        for(int i=0;i<3;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

    }

    if(obitalName=="D2SP")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

    }

    //-----------------------------------------
    //render negative lobe
    if(!visible_OrbitalExtraP) return;
    length=1.22;
    if(obitalName=="SP")
    {
        double angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(0.6);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        return;
    }


    if(obitalName=="SP2")
    {
        double angle=120.0;
        for(int i=0;i<3;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        return;
    }

    if(obitalName=="SP3")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateZ(angle*i);


            if(i<2) {
                transform->RotateY(109.5/2.0);
                transform->RotateZ(45.0+180.0*i);
            }
            else {
                transform->RotateY(180-109.5/2.0);
                transform->RotateZ(135.0+180.0*(i-2));
            }


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        return;
    }

    if(obitalName=="D2SP3")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
        return;
    }


    if(obitalName=="DSP3")
    {
        double angle=120.0;
        for(int i=0;i<3;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
        return;
    }



    if(obitalName=="D2SP")
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }

}

void HybridizeObitialViewer::renderExtraOrbital_AO ()
{
    double length=1.0;

    double color_1[3],color_2[3];

    for(int k=0;k<3;k++) {
        color_1[k]=colorExtraLobe_pos[k];
        color_2[k]=colorExtraLobe_neg[k];
        //color_1[k]=color1[k];
        //color_2[k]=color2[k];
    }


    auto sphere = vtkSphereSource::New();
    sphere->SetPhiResolution(20);
    sphere->SetThetaResolution(20);
    sphere->SetRadius(0.15);
    sphere->Update();


    if (boxType==0)
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateZ(angle*i);


            if(i<2) {
                transform->RotateY(109.5/2.0);
                transform->RotateZ(45.0+180.0*i);
            }
            else {
                transform->RotateY(180-109.5/2.0);
                transform->RotateZ(135.0+180.0*(i-2));
            }


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

    }

    if(boxType==1)
    {

    }



    if (boxType==2)
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_1);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(30.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }






    if(!visible_OrbitalExtraP) return;

    if (boxType==0 ) { //tetrahydron
         double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateZ(angle*i);


            if(i<2) {
                transform->RotateY(109.5/2.0);
                transform->RotateZ(45.0+180.0*i);
            }
            else {
                transform->RotateY(180-109.5/2.0);
                transform->RotateZ(135.0+180.0*(i-2));
            }


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }


    if (boxType==1 )//cubic
    {


    }


    if (boxType==2 )//octahydron
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

        //vertical
        angle=180.0;
        for(int i=0;i<2;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);

            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();

            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }

            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->Translate(0.0,0.0,length);
            transform->RotateX(angle*i);
            transform->Update();

            actor->SetUserTransform(transform);

            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
    }

    if (boxType==3 )//quadrangle
    {
        double angle=90.0;
        for(int i=0;i<4;i++)
        {
            auto actor = vtkActor::New();
            auto mapper = vtkPolyDataMapper::New();
            actor->GetProperty()->SetColor(color_2);
            actor->SetMapper(mapper);
            actor->GetProperty()->SetDiffuse(1.0);
            actor->GetProperty()->SetAmbient(0.5);
            actor->GetProperty()->SetSpecular(0.5);
            actor->GetProperty()->SetSpecularPower(10.0);
            actor->SetPickable(false);
            actor->GetProperty()->ShadingOn();
            actor->GetProperty()->SetOpacity(ExtraOpacity_pos);


            if (visible_ExtraOrbial_Mesh) {
                actor->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor->GetProperty()->SetRepresentationToWireframe();
                actor->GetProperty()->ShadingOff();
                //mapper_pos->ScalarVisibilityOff();
            }


            auto transform =  vtkSmartPointer<vtkTransform>::New();
            transform->PostMultiply();
            transform->RotateY(90.0);
            transform->Translate(length,0.0,0.0);
            transform->RotateZ(angle*i);


            transform->Update();
            actor->SetUserTransform(transform);


            mapper->SetInputConnection(sphere->GetOutputPort());
            mapper->ScalarVisibilityOn();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }

    }



}





void HybridizeObitialViewer::closeEvent(QCloseEvent *event)
{
    //event->ignore();
    //this->nativeParentWidget()->hide();
    //this->hide();

    mainWin->hideActiveSubWindow();
    event->ignore();
    //QVTKOpenGLNativeWidget::closeEvent(event);
}




