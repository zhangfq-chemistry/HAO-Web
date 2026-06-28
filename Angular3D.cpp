#include "Angular3D.h"
#include "matrix3/vector3.h"
#include "mainwindow.h"
#include "functionals.h"
#define USER_MATRIX


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
#include <vtkCutter.h>
#include <vtkPolyDataSilhouette.h>

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
#include <vtkCleanPolyData.h>

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
#include <vtkContourFilter.h>
#include <vtkReverseSense.h>
#include <vtkLightCollection.h>
#include <vtkLight.h>
#include <vtkTextActor.h>
#include <vtkTextProperty.h>
#include <vtkOrientationMarkerWidget.h>
#include <vtkFollower.h>
#include <vtkVectorText.h>

#include <vtkSmartPointer.h>
#include <vtkPolyDataMapper.h>
#include <vtkProperty.h>
#include <vtkRenderWindowInteractor.h>
#include <vtkParametricFunctionSource.h>
#include <vtkParametricTorus.h>

#include <vtkTextActor.h>
#include <vtkTextProperty.h>
#include <vtkOrientationMarkerWidget.h>

#include <vtkSurfaceReconstructionFilter.h>
//#include "vtkCrustSurfaceReconstruction.h"
#include <vtkExtractSurface.h>


void Angular3D::setDefaultcolor()
{
    LobeColor_pos2.Set(0.90,0.56,0.14);
    LobeColor_neg2.Set(0.21,0.44,0.53);

    LobeColor_pos.Set(0.67,0.34,0.67);
    LobeColor_neg.Set(0.13,0.62,0.62);

    xColor.Set(1.0,0.0,0.0);
    yColor.Set(0.0,1.0,0.0);
    zColor.Set(1.0,1.0,0.0);
}


Angular3D::Angular3D(QWidget *parent) : QVTKOpenGLNativeWidget(parent)
{
    //this->setWindowTitle("Spherical-Harmonic Ylm (angular part)");
    this->setWindowTitle("角度函数(轮廓图)");

    vtkNew<vtkGenericOpenGLRenderWindow> window;
    setRenderWindow(window.Get());


    //background color
    // bkcolor.Set(0.6,0.6,0.6);
    bkcolor.Set(0.4,0.5,0.5);
    //bkcolor.Set(1.0,1.0,1.0);

    angularNodecolor_Theta.Set(0.3,0.6,0.3);
    angularNodecolor_Phi.Set(0.3,0.6,0.3);

    // Camera
    camera = vtkSmartPointer<vtkCamera>::New();
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,10);
    camera->SetFocalPoint(0,0,0);
    camera->SetParallelScale(5.0);
    camera->ParallelProjectionOn();


    // Renderer
    m_renderer = vtkSmartPointer<vtkRenderer>::New();
    m_renderer->SetActiveCamera(camera);
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());

    m_renderer->LightFollowCameraOn();
    m_renderer->TwoSidedLightingOn();

    renderWindow()->AddRenderer(m_renderer);

    /*
    vtkLightCollection * lightCollection = m_renderer->GetLights();
    if (lightCollection)
    {
        lightCollection->InitTraversal();
        for (int i = 0; i < lightCollection->GetNumberOfItems(); i++)
        {
            vtkLight * light = lightCollection->GetNextItem();
            if (light)   light->SetIntensity(1);
        }
    }
*/

    isAxisVisible=false;

    plane=nullptr;
    clipper_pos=nullptr;
    clipper_neg=nullptr;


    //LobeColor_pos,LobeColor_neg;
    // LobeColor_pos.Set(10.0,1.0,1.0);
    //  LobeColor_neg.Set(0.0,1.0,10.0);

    setDefaultcolor();

    opacity_theta=opacity_phi=1.0;
    opacity_pos=opacity_neg=1.0;

    orbitalLineWidth=1.0;
    nodeThickness=0.02;

    isOrbitalVisible=true;
    isPosLobeVisible=isNegLobeVisible=true;
    visible_azimuthal_node=visible_polar_node=false;
    xLength=yLength=zLength=2.0;


    needCalculate=true;
    //_cutEdgeVisible=true;
}





void Angular3D::setAngularNodecolor_Theta (vector3 v )
{
    angularNodecolor_Theta=v;
}

void Angular3D::setAngularNodecolor_Phi (vector3 v )
{
    angularNodecolor_Phi=v;
}


void Angular3D::refreshView()
{
    renderWindow()->Render();
}



void Angular3D::setAngularNodeOpicity_Theta (double o)
{
    opacity_theta=o;

}

void Angular3D::setAngularNodeOpicity_Phi (double o)
{
    opacity_phi=o;

}

void Angular3D::setOrbitalLineWidth(double l)
{
    orbitalLineWidth =l;

}

void Angular3D::setLobeColor_pos( vector3 c)
{
    LobeColor_pos=c;
}

void Angular3D::setLobeColor_neg( vector3 c)
{
    LobeColor_neg=c;

}


void Angular3D::setBackgroundColor( vector3 c)
{
    bkcolor=c;
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->Render();
}


void Angular3D:: onViewXY()
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


void Angular3D:: onViewXZ()
{
    double p[3];
    camera->GetPosition(p);
    vector3 v(p[0],p[1],p[2]);

    onViewReset();
    camera->SetPosition(0,0,v.length());
    camera->Elevation(-90);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Angular3D:: onViewYZ()
{
    double p[3];
    camera->GetPosition(p);
    vector3 v(p[0],p[1],p[2]);

    onViewReset();
    camera->SetPosition(0,0,v.length());
    camera->SetRoll(-90);
    camera->Elevation(-90);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void Angular3D:: onViewReset()
{
    onViewXY();
}

void Angular3D:: onView_rotateClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();

}

void Angular3D:: onView_rotateCounterClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle+degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Angular3D:: onView_rotateUp(double degree)
{
    camera->Elevation(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}
void Angular3D:: onView_rotateDown(double degree)
{
    camera->Elevation(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Angular3D:: onView_rotateLeft(double degree)
{
    //camera->ComputeViewPlaneNormal();
    camera->Azimuth(degree);
    renderWindow()->Render();
}

void Angular3D:: onView_rotateRight(double degree)
{
    //camera->ComputeViewPlaneNormal();
    camera->Azimuth(-degree);
    renderWindow()->Render();
}


void Angular3D::removeAllActors()
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
}


void Angular3D::removeLastActor()
{
    vtkActor * actor = m_renderer->GetActors()->GetLastActor();

    if (actor != nullptr)
        m_renderer->RemoveActor(actor);
}


void Angular3D::zoomToExtent()
{
    // Zoom to extent of last added actor
    vtkSmartPointer<vtkActor> actor = m_renderer->GetActors()->GetLastActor();
    if (actor != nullptr)
        m_renderer->ResetCamera(actor->GetBounds());

}


void Angular3D:: writePNG(QString name)
{
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
}




void Angular3D::renderXYZAxis()
{
    if(!isAxisVisible) return;


    if(needCalculate)
        getMaxLength();



    double radius=max3(xLength,yLength,zLength)*0.02;
    double l;



    for(int i=1;i<4;i++){
        auto line1 = vtkSmartPointer<vtkLineSource>::New();
        switch(i){
        case 1:
            l=xLength*0.8;

            line1->SetPoint1(-l,0,0);
            line1->SetPoint2(l,0,0);
            break;
        case 2:
            l=yLength*0.8;

            line1->SetPoint1(0,-l,0);
            line1->SetPoint2(0,l,0);
            break;
        case 3:
            l=zLength*0.8;

            line1->SetPoint1(0,0,-l);
            line1->SetPoint2(0,0,l);
            break;
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
        coneSource->SetHeight(l*0.1);
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
            transform2->Translate(l*1.12,-0.02,0.0);
            labelActor->GetProperty()->SetColor(xColor[0],xColor[1],xColor[2]);
            break;
        case 2:
            axesLabel->SetText("y");
            transform2->Translate(-0.02,l*1.13,0.0);
            labelActor->GetProperty()->SetColor(yColor[0],yColor[1],yColor[2]);
            break;
        case 3:
            axesLabel->SetText("z");
            transform2->Translate(-0.02,-0.02,l*1.12);
            labelActor->GetProperty()->SetColor(zColor[0],zColor[1],zColor[2]);
            break;
        }

        transform2->PostMultiply();
        labelActor->SetMapper(labelMapper);
        labelActor->SetScale(0.3,0.3,0.3);
        labelActor->SetUserTransform(transform2);
        labelActor->SetCamera(m_renderer->GetActiveCamera());
        labelMapper->ScalarVisibilityOn();

        labelMapper->SetInputConnection(axesLabel->GetOutputPort());

        m_renderer->AddViewProp(labelActor);
    }

    //cout << "render axis ok inside Angular3D"<<endl;
}



//theta node
void Angular3D::renderPolarNodes()
{  
    AO *  ao = mainWindow->getAO();

    bool HorinzontalSquare=false;


    double thickness=nodeThickness;
    double opacity=opacity_theta;

    double length=ao->getLengthYlm();
    double height=ao->getHeightYlm();


    double color[3];
    color[0]=angularNodecolor_Theta.x();
    color[1]=angularNodecolor_Theta.y();
    color[2]=angularNodecolor_Theta.z();


    auto colors =  vtkSmartPointer<vtkNamedColors>::New();

    //upper
    auto coneSource0 =  vtkSmartPointer<vtkConeSource>::New();
    coneSource0->SetDirection(0.0,0.0,1.0);
    coneSource0->SetResolution(100);
    coneSource0->SetCenter(0.0, 0.0, 0.0);
    coneSource0->SetCapping(false);
    coneSource0->SetHeight(height);
    coneSource0->Update();


    //lower
    auto coneSource1 =  vtkSmartPointer<vtkConeSource>::New();
    coneSource1->SetDirection(0.0,0.0,-1.0);
    coneSource1->SetResolution(100);
    coneSource1->SetCenter(0.0, 0.0, 0.0);
    coneSource1->SetCapping(false);
    coneSource1->SetHeight(height);
    coneSource1->Update();

    auto cylinder =  vtkSmartPointer<vtkCylinderSource>::New();
    cylinder->SetCenter(0.0, 0.0, 0.0);
    cylinder->SetRadius(length/2.0);
    cylinder->SetHeight(thickness);
    cylinder->SetResolution(100);
    cylinder->Update();



    //build one torus
    //auto parametricObject = vtkSmartPointer<vtkParametricTorus>::New();
    //auto parametricFunctionSource =	vtkSmartPointer<vtkParametricFunctionSource>::New();
    //parametricFunctionSource->SetParametricFunction(parametricObject);
    //parametricObject->SetCrossSectionRadius(0.06);


    auto cube = vtkSmartPointer<vtkCubeSource>::New();
    cube->SetCenter(0.0, 0.0, 0.0);

    vtkSmartPointer<vtkTransform>  rotation;


    for (int k=0;k<ao->Nodes_T.size();k++)
    {
        double cos2angle=ao->Nodes_T[k];
        //length=ao->getLengthYlm();
        //height=ao->getHeightYlm();
        // cout << cos2angle<<endl;

        //just the xoy plane
        if (abs(cos2angle)<0.001) //render disk orsquare
        {
            thickness=length*0.005;
            cube->SetXLength(length);
            cube->SetYLength(length);
            cube->SetZLength(thickness);
            cube->Update();

            auto mapper = vtkPolyDataMapper::New();
            mapper->ScalarVisibilityOn();
            auto actor = vtkActor::New();
            actor->GetProperty()->SetColor(color);
            actor->GetProperty()->SetOpacity(opacity);
            actor->GetProperty()->ShadingOff();
            actor->SetMapper(mapper);

            if (HorinzontalSquare)
                mapper->SetInputData(cube->GetOutput());
            else
            {
                cylinder->SetRadius(length/2.0);
                cylinder->SetHeight(thickness);
                cylinder->Update();
                mapper->SetInputData(cylinder->GetOutput());
                rotation=  vtkSmartPointer<vtkTransform>::New();
                rotation->PostMultiply();
                rotation->RotateX(90.0);
                actor->SetUserTransform(rotation);
                /*
                //build one torus
                parametricFunctionSource->Update();
                parametricObject->SetRingRadius(length*0.005);
                parametricObject->SetCrossSectionRadius(0.01);


                auto mapper_torus =   vtkSmartPointer<vtkPolyDataMapper>::New();
                mapper_torus->SetInputConnection(parametricFunctionSource->GetOutputPort());
                mapper_torus->ScalarVisibilityOn();


                auto actor_torus = vtkSmartPointer<vtkActor>::New();
                actor_torus->SetMapper(mapper_torus);
                actor_torus->GetProperty()->SetColor(color);
                m_renderer->AddActor(actor_torus);
*/
                //crashed if added
                //mapper_torus->Delete();
            }

            //actor->SetScale(2,2,2);
            actor->GetProperty()->SetInterpolationToGouraud();
            m_renderer->AddActor(actor);
            mapper->Delete();
        }
        else{//cone
            //height=0.56*mol->getObtial(i)->MaxBox();
            renderCones(height,  cos2angle);
        }
    }
}



void Angular3D::renderCones(double height, double cos2angle)
{
    height *= 2.0;

    //upper
    auto coneSource0 =  vtkSmartPointer<vtkConeSource>::New();
    coneSource0->SetDirection(0.0,0.0,1.0);
    coneSource0->SetResolution(100);
    coneSource0->SetCenter(0.0, 0.0, 0.0);
    coneSource0->SetCapping(false);
    coneSource0->SetHeight(height);
    coneSource0->Update();


    //lower
    auto coneSource1 =  vtkSmartPointer<vtkConeSource>::New();
    coneSource1->SetDirection(0.0,0.0,-1.0);
    coneSource1->SetResolution(100);
    coneSource1->SetCenter(0.0, 0.0, 0.0);
    coneSource1->SetCapping(false);
    coneSource1->SetHeight(height);
    coneSource1->Update();

    //double thickness=nodeThickness;
    double opacity=0.8;
    double length=6.0;

    double color[3];

    color[0]=angularNodecolor_Theta.x();
    color[1]=angularNodecolor_Theta.y();
    color[2]=angularNodecolor_Theta.z();

    //build one torus
    auto parametricObject = vtkSmartPointer<vtkParametricTorus>::New();
    auto parametricFunctionSource =	vtkSmartPointer<vtkParametricFunctionSource>::New();
    parametricFunctionSource->SetParametricFunction(parametricObject);
    parametricFunctionSource->Update();
    parametricObject->SetRingRadius(length/2.0);
    parametricObject->SetCrossSectionRadius(0.06);

    //the following code render double-cone node, based on theta
    auto actor = vtkActor::New();
    auto mapper = vtkPolyDataMapper::New();
    actor->GetProperty()->SetColor(color);
    actor->GetProperty()->SetOpacity(opacity);
    actor->GetProperty()->ShadingOff();

    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->Translate(0.0,0.0,-height/2.0);
    actor->SetUserTransform(transform);
    mapper->ScalarVisibilityOn();

    coneSource0->SetHeight(height);
    double radius=height*sqrt(1.0/cos2angle-1.0);
    coneSource0->SetRadius(radius);
    coneSource0->Update();

    mapper->SetInputData(coneSource0->GetOutput());
    actor->SetMapper(mapper);
    actor->GetProperty()->SetInterpolationToGouraud();
    m_renderer->AddActor(actor);

    auto actor1 = vtkActor::New();
    auto mapper1 = vtkPolyDataMapper::New();
    actor1->GetProperty()->SetColor(color);
    actor1->SetMapper(mapper1);
    actor1->GetProperty()->SetOpacity(opacity);
    actor1->GetProperty()->ShadingOff();

    auto transform1 =  vtkSmartPointer<vtkTransform>::New();
    transform1->PostMultiply();
    transform1->Translate(0.0,0.0,height/2.0);
    actor1->SetUserTransform(transform1);

    mapper1->ScalarVisibilityOn();
    coneSource1->SetHeight(height);
    coneSource1->SetRadius(radius);

    mapper1->SetInputConnection(coneSource1->GetOutputPort());
    actor1->GetProperty()->SetInterpolationToGouraud();
    m_renderer->AddActor(actor1);
    mapper1->Delete();
}






void Angular3D::renderAzimuthalNodes()
{
    double thikness=0.02;
    double length=1.0,height=1.0;
    double opacity=opacity_phi;

    double color[3];
    color[0]=angularNodecolor_Phi.x();
    color[1]=angularNodecolor_Phi.y();
    color[2]=angularNodecolor_Phi.z();

    auto cube = vtkSmartPointer<vtkCubeSource>::New();
    cube->SetCenter(0.0, 0.0, 0.0);

    auto cube1 = vtkSmartPointer<vtkCubeSource>::New();
    cube1->SetCenter(0.0, 0.0, 0.0);

    //Nodes_P
    AO * ao = mainWindow->getAO();

    length=ao->getLengthYlm();
    height=ao->getHeightYlm();
    //cout << length<< "-->something is wrong"<<endl;
    //cout << height<< "-->something is wrong"<<endl;


    //length=1.0;
    //height=ao->getHeightYlm();
    //height=length;


    thikness=length*0.005;
    cube->SetXLength(length);
    cube->SetYLength(thikness);
    cube->SetZLength(height);
    cube->Update();

    cube1->SetXLength(thikness);
    cube1->SetYLength(thikness);
    cube1->SetZLength(height);
    cube1->Update();


    int nNodes=ao->Nodes_P.size();
    if (nNodes<1) return;

    //cout <<"Number of Phi Nodes: inside angular" << nNodes<<endl;


    for (int k=0; k<nNodes; k++)
    {
        double angle=ao->Nodes_P[k];

        auto actor = vtkActor::New();
        auto mapper = vtkPolyDataMapper::New();
        actor->GetProperty()->SetColor(color);
        actor->SetMapper(mapper);
        actor->GetProperty()->SetOpacity(opacity);
        actor->GetProperty()->ShadingOn();

        auto rotation=  vtkSmartPointer<vtkTransform>::New();
        rotation->PostMultiply();
        rotation->RotateZ(angle);
        actor->SetUserTransform(rotation);
        actor->SetScale(2,2,2);



        mapper->ScalarVisibilityOn();
        mapper->SetInputConnection(cube->GetOutputPort());
        actor->GetProperty()->SetInterpolationToGouraud();
        m_renderer->AddActor(actor);

        mapper->Delete();

        /*
        if(!ao->isXOYNode)  continue;
        length=ao->getLengthYlm();
        auto cube2 = vtkSmartPointer<vtkCubeSource>::New();
        cube2->SetCenter(0.0, 0.0, 0.0);
        cube2->SetXLength(length);
        cube2->SetYLength(thikness);
        cube2->SetZLength(thikness);
        cube2->Update();



        //render one line along the cross
        auto actor2 = vtkActor::New();
        auto mapper2 = vtkPolyDataMapper::New();
        actor2->GetProperty()->SetColor(0.0,0.0,0.0);
        actor2->SetMapper(mapper2);
        actor2->GetProperty()->SetOpacity(opacity);
        actor2->GetProperty()->ShadingOff();
        actor2->SetUserTransform(rotation);
        actor2->GetProperty()->SetInterpolationToGouraud();

        mapper2->ScalarVisibilityOff();

        mapper2->SetInputConnection(cube2->GetOutputPort());

        m_renderer->AddActor(actor2);
        mapper2->Delete();

        */
    }


    //cout <<"2Number of Phi Nodes: " << nNodes<<endl;

    if ( nNodes <2) return;
    //   cout <<"3Number of Phi Nodes: " << nNodes<<endl;

    //render one line along the cross
    auto actor = vtkActor::New();
    auto mapper = vtkPolyDataMapper::New();
    actor->GetProperty()->SetColor(0.0,0.0,0.0);
    actor->SetMapper(mapper);
    actor->GetProperty()->SetOpacity(1.0);
    actor->GetProperty()->ShadingOff();
    actor->GetProperty()->SetInterpolationToGouraud();

    //rotation=  vtkSmartPointer<vtkTransform>::New();
    //rotation->PostMultiply();
    //rotation->RotateZ(angle);
    //actor->SetUserTransform(rotation);

    actor->SetScale(2,2,2);

    mapper->ScalarVisibilityOn();

    mapper->SetInputConnection(cube1->GetOutputPort());
    m_renderer->AddActor(actor);

    mapper->Delete();
}


void Angular3D::renderScene()
{
    removeAllActors();
    AO * ao = mainWindow->getAO();

    if (!ao) return;

    renderOrbital();
    if(visible_azimuthal_node)
        renderAzimuthalNodes();

    if(visible_polar_node)
        renderPolarNodes();

    renderCutterEdge();
    renderXYZAxis();
    renderWindow()->Render();

    //cout << "-----Angular3D::renderScene()"<<endl;
}


void Angular3D::renderOrbital()
{
    AO * ao = mainWindow->getAO();
    if(!ao) return;

    double color1[3],color2[3],color_bk[3];

    color_bk[0]=color_bk[1]=color_bk[2]=0.8;


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




    if (isPosLobeVisible)
    {
        double opacity=opacity_pos;
        if (ao->isPosYlmExisted() && ao->yData_p->GetNumberOfPoints()>100)
        {
            auto actor_pos = vtkActor::New();
            auto mapper_pos = vtkPolyDataMapper::New();
            actor_pos->SetMapper(mapper_pos);
            mapper_pos->ScalarVisibilityOff();

            mapper_pos->SetInputData(ao->yData_p);


            if (visible_pos_Lobe_Mesh)
            {
                auto actor_pos = vtkActor::New();
                auto mapper_pos = vtkPolyDataMapper::New();
                actor_pos->SetMapper(mapper_pos);
                mapper_pos->ScalarVisibilityOff();

                mapper_pos->SetInputData(ao->yData_p);

                actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_pos->GetProperty()->SetRepresentationToWireframe();
                actor_pos->GetProperty()->ShadingOff();

                actor_pos->GetProperty()->RenderLinesAsTubesOn();
                actor_pos->GetProperty()->SetInterpolationToGouraud();

                actor_pos->GetProperty()->SetColor(color1);
                actor_pos->GetProperty()->SetOpacity(opacity);

                actor_pos->GetProperty()->SetDiffuse(0.9);
                actor_pos->GetProperty()->SetAmbient(0.3);
                actor_pos->GetProperty()->SetSpecular(0.2);
                actor_pos->GetProperty()->SetSpecularPower(10.0);

                actor_pos->SetScale(5.02,5.02,5.02);
                m_renderer->AddActor(actor_pos);
                mapper_pos->Delete();
            }
            else
            {
                auto actor_pos = vtkActor::New();
                auto mapper_pos = vtkPolyDataMapper::New();
                actor_pos->SetMapper(mapper_pos);
                mapper_pos->ScalarVisibilityOff();

                mapper_pos->SetInputData(ao->yData_p);

                actor_pos->GetProperty()->SetColor(color1);
                actor_pos->GetProperty()->SetOpacity(opacity);


                actor_pos->GetProperty()->SetDiffuse(1.0);
                actor_pos->GetProperty()->SetAmbient(0.5);
                actor_pos->GetProperty()->SetSpecular(0.5);
                actor_pos->GetProperty()->SetSpecularPower(100.0);

                //actor_pos->GetProperty()->SetEdgeVisibility(true);
                //actor_pos->GetProperty()->SetEdgeColor(0.3,0.3,0.3);


                actor_pos->GetProperty()->SetInterpolationToGouraud();


                auto bkProperty=vtkProperty::New();
                bkProperty->SetInterpolationToGouraud();
                //bkProperty->SetColor(color_bk);
                //bkProperty->SetColor(color1);
                bkProperty->SetColor(0.5,0.5,0.5);
                //bkProperty->SetColor(color1);


                bkProperty->SetDiffuse(0.5);
                bkProperty->SetAmbient(0.5);
                bkProperty->SetSpecular(0.5);
                bkProperty->SetSpecularPower(1.0);


                if(!actor_pos->GetBackfaceProperty() || actor_pos->GetBackfaceProperty()==nullptr)
                    actor_pos->SetBackfaceProperty(bkProperty);

                actor_pos->SetScale(5,5,5);
                m_renderer->AddActor(actor_pos);
                mapper_pos->Delete();
            }
        }
    }



    if (isNegLobeVisible)
    {
        double opacity=opacity_neg;
        if(ao->yData_n!=nullptr && ao->isNegYlmExisted())
        {
            auto actor_neg = vtkActor::New();
            auto mapper_neg = vtkPolyDataMapper::New();
            actor_neg->SetMapper(mapper_neg);
            mapper_neg->ScalarVisibilityOff();

            mapper_neg->SetInputData(ao->yData_n);

            if (visible_neg_Lobe_Mesh)
            {
                actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
                actor_neg->GetProperty()->SetRepresentationToWireframe();
                actor_neg->GetProperty()->ShadingOff();

                actor_neg->GetProperty()->SetInterpolationToGouraud();

                actor_neg->GetProperty()->SetColor(color2);
                actor_neg->GetProperty()->SetOpacity(opacity);

                actor_neg->GetProperty()->SetDiffuse(0.9);
                actor_neg->GetProperty()->SetAmbient(0.3);
                actor_neg->GetProperty()->SetSpecular(0.2);
                actor_neg->GetProperty()->SetSpecularPower(10.0);
            }
            else
            {
                actor_neg->GetProperty()->SetColor(color2);
                actor_neg->GetProperty()->SetOpacity(opacity);

                actor_neg->GetProperty()->SetDiffuse(1.0);
                actor_neg->GetProperty()->SetAmbient(0.5);
                actor_neg->GetProperty()->SetSpecular(0.5);
                actor_neg->GetProperty()->SetSpecularPower(100.0);

                actor_neg->GetProperty()->SetInterpolationToGouraud();


                auto bkProperty=vtkProperty::New();
                bkProperty->SetInterpolationToGouraud();
                //bkProperty->SetColor(color_bk);
                //bkProperty->SetColor(180.0/255.0,1.0,1.0);
                //bkProperty->SetColor(color2);

                bkProperty->SetColor(0.5,0.5,0.5);

                bkProperty->SetDiffuse(0.5);
                bkProperty->SetAmbient(0.5);
                bkProperty->SetSpecular(0.5);
                bkProperty->SetSpecularPower(1.0);


                if(!actor_neg->GetBackfaceProperty() || actor_neg->GetBackfaceProperty()==nullptr)
                    actor_neg->SetBackfaceProperty(bkProperty);
            }

            actor_neg->SetScale(5,5,5);
            m_renderer->AddActor(actor_neg);
            mapper_neg->Delete();
        }
    }
}

void Angular3D::getMaxLength()
{
    AO * ao=mainWindow->getAO();

    if(!ao || ao==nullptr)  return;


    double x0,x1,y0,y1,z0,z1;
    double bounds[6];

    if(!(ao->yData_p) || (ao->yData_n==nullptr) ) return;
    ao->yData_p->GetBounds(bounds);

    x0 = bounds[0];
    x1 = bounds[1];
    y0 = bounds[2];
    y1 = bounds[3];
    z0 = bounds[4];
    z1 = bounds[5];

    xLength=x1;
    if(abs(x0) > x1)
        xLength=x0;

    yLength=y1;
    if(abs(y0) > y1)
        yLength=y0;

    zLength=z1;
    if(abs(z0) > z1)
        zLength=z0;


    if(ao->yData_n)
    {
        ao->yData_n->GetBounds(bounds);

        x0 = bounds[0];
        x1 = bounds[1];
        y0 = bounds[2];
        y1 = bounds[3];
        z0 = bounds[4];
        z1 = bounds[5];


        if(xLength < abs(x0))
            xLength=abs(x0);

        if(xLength < x1)
            xLength=x1;


        if(yLength < abs(y0))
            yLength=abs(y0);
        if(yLength < y1)
            yLength=y1;


        if(zLength < abs(z0))
            zLength=abs(z0);
        if(zLength < z1)
            zLength=z1;
    }

    xLength=5.0*xLength*1.1;
    yLength=5.0*yLength*1.1;
    zLength=5.0*zLength*1.1;
}

void Angular3D::renderCutterEdge_FeatureEdges()
{
    //if(!_cutEdgeVisible) return;

    AO * ao = mainWindow->getAO();
    if(!ao) return;

    //ProjOrbitaType projType=ao->getProjType();
    //OrbitaType orbialType=ao->getOrbitalType();


    if (isPosLobeVisible)
    {
        auto closedSurface =  vtkSmartPointer<vtkFeatureEdges>::New();
        closedSurface->SetInputData(ao->yData_p);
        closedSurface->FeatureEdgesOff();
        closedSurface->BoundaryEdgesOn();
        closedSurface->NonManifoldEdgesOn();
        closedSurface->Update();
        int numberOfOpenEdges = closedSurface->GetOutput()->GetNumberOfCells();

        if (numberOfOpenEdges > 0)
        {
            auto boundaryEdges =  vtkSmartPointer<vtkFeatureEdges>::New();
            boundaryEdges->SetInputData(ao->yData_p);
            boundaryEdges->BoundaryEdgesOn();
            boundaryEdges->FeatureEdgesOff();
            boundaryEdges->ManifoldEdgesOff();
            boundaryEdges->NonManifoldEdgesOff();
            boundaryEdges->Update();

            auto stripper = vtkSmartPointer<vtkStripper>::New();
            stripper->SetInputConnection(boundaryEdges->GetOutputPort());
            stripper->JoinContiguousSegmentsOn();

            auto cleanPolyData = vtkSmartPointer<vtkCleanPolyData>::New();
            cleanPolyData->SetInputConnection(stripper->GetOutputPort());
            cleanPolyData->Update();

            auto actor_line = vtkActor::New();
            auto mapper_line = vtkPolyDataMapper::New();

            mapper_line->SetInputData(cleanPolyData->GetOutput());
            mapper_line->ScalarVisibilityOff();

            actor_line->GetProperty()->SetLineWidth(2.0);
            actor_line->GetProperty()->SetColor(1.0,1.0,1.0);
            actor_line->SetMapper(mapper_line);
            actor_line->SetScale(5,5,5);


            auto bkProperty=vtkProperty::New();
            bkProperty->SetInterpolationToGouraud();
            bkProperty->SetColor(1.0,1.0,1.0);
            if(!actor_line->GetBackfaceProperty() || actor_line->GetBackfaceProperty()==nullptr)
                actor_line->SetBackfaceProperty(bkProperty);

            m_renderer->AddActor(actor_line);
            mapper_line->Delete();
        }
    }




    if (isNegLobeVisible)
    {
        auto closedSurface =  vtkSmartPointer<vtkFeatureEdges>::New();
        closedSurface->SetInputData(ao->yData_n);
        closedSurface->FeatureEdgesOff();
        closedSurface->BoundaryEdgesOn();
        closedSurface->NonManifoldEdgesOn();
        closedSurface->Update();
        int numberOfOpenEdges = closedSurface->GetOutput()->GetNumberOfCells();

        if (numberOfOpenEdges > 0)
        {
            auto boundaryEdges =  vtkSmartPointer<vtkFeatureEdges>::New();
            boundaryEdges->SetInputData(ao->yData_n);
            boundaryEdges->BoundaryEdgesOn();
            boundaryEdges->FeatureEdgesOff();
            boundaryEdges->ManifoldEdgesOff();
            boundaryEdges->NonManifoldEdgesOff();
            boundaryEdges->Update();

            auto stripper = vtkSmartPointer<vtkStripper>::New();
            stripper->SetInputConnection(boundaryEdges->GetOutputPort());
            stripper->JoinContiguousSegmentsOn();

            auto cleanPolyData =  vtkSmartPointer<vtkCleanPolyData>::New();
            cleanPolyData->SetInputConnection(stripper->GetOutputPort());
            cleanPolyData->Update();


            auto actor_line = vtkActor::New();
            auto mapper_line = vtkPolyDataMapper::New();
            actor_line->GetProperty()->SetLineWidth(2.0);
            actor_line->GetProperty()->SetColor(1.0,1.0,1.0);

            auto bkProperty=vtkProperty::New();
            bkProperty->SetInterpolationToGouraud();
            bkProperty->SetColor(1.0,1.0,1.0);
            if(!actor_line->GetBackfaceProperty() || actor_line->GetBackfaceProperty()==nullptr)
                actor_line->SetBackfaceProperty(bkProperty);

            mapper_line->SetInputData(cleanPolyData->GetOutput());
            mapper_line->ScalarVisibilityOff();

            actor_line->SetMapper(mapper_line);
            actor_line->SetScale(5,5,5);
            m_renderer->AddActor(actor_line);
            mapper_line->Delete();
        }
    }
}

void Angular3D::renderCutterEdge_S()
{
    double theta=0,theta1;
    double x,y,z,interval=1.0;
    pos.clear();
    neg.clear();

    //draw a circle
    double coeff=1.0/sqrt(4.0*M_PI);

    AO * ao = mainWindow->getAO();
    OrbitaType orbialType=ao->getOrbitalType();

    auto rotation=  vtkSmartPointer<vtkTransform>::New();
    rotation->PostMultiply();

    auto rotation1=  vtkSmartPointer<vtkTransform>::New();
    rotation1->PostMultiply();

    switch (orbialType) {
    case 1://xy
        while(theta<360.0){
            theta+=interval;
            theta1=theta*0.0174533;
            x=coeff*cos(theta1);
            y=coeff*sin(theta1);
            pos.append(QPointF(x, y));
        }
        break;
    case 2://xz
        theta=0.0;
        while(theta<360.0){
            theta+=interval;
            theta1=theta*0.0174533;
            x=coeff*cos(theta1);
            y=coeff*sin(theta1);
            pos.append(QPointF(x, y));
        }
        rotation->RotateX(90.0);
        break;
    case 3://yz
        theta=0.0;
        while(theta<360.0){
            theta+=interval;
            theta1=theta*0.0174533;
            x=coeff*cos(theta1);
            y=coeff*sin(theta1);
            pos.append(QPointF(x, y));
        }
        rotation->RotateY(90.0);
        break;

    case 4: //wedge
        theta=0.0;
        pos1.clear();
        neg1.clear();
        while(theta<181.){
            theta1=theta*0.0174533;
            x=coeff*cos(theta1);
            y=coeff*sin(theta1);
            theta+=interval;
            pos.append(QPointF(x, y));
            pos1.append(QPointF(x, y));

        }
        rotation1->RotateX(90.0);
        break;

    case 5: //Quarter
        break;

    case 6:  //Corner
        break;
    }


    renderCutterEdgeLine(rotation);
    renderCutterEdgeLine1(rotation1);
}


/*    void  setOrbitaType(int _t)
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
*/


void Angular3D::renderCutterEdge_P()
{
    AO * ao = mainWindow->getAO();

    QString AOName=ao->getName();
    AOName.remove(0,1);

    auto rotation=  vtkSmartPointer<vtkTransform>::New();
    rotation->PostMultiply();
    auto rotation1=  vtkSmartPointer<vtkTransform>::New();
    rotation1->PostMultiply();


    ProjOrbitaType projType=ao->getProjType();
    OrbitaType orbialType=ao->getOrbitalType();


    double theta=0,theta1;
    double x,y,z,r,interval=1.0;

    pos.clear();
    neg.clear();
    pos1.clear();
    neg1.clear();


    //Ylm=cos(theta)
    theta=0.0;
    double coeff=sqrt(3.0/M_PI/4.0);
    while(theta<181.0){
        theta1=theta*0.0174533;
        r=coeff*cos(theta1);
        x=r*sin(theta1);
        y=r*cos(theta1);//y=r*cos(theta1);

        pos.append(QPointF(x, y));
        neg.append(QPointF(x, -y));

        if(abs(r)<0.2)
            theta+=0.2;
        else
            theta+=interval;
    }


    bool needRender=true;


    if (AOName.startsWith("Px"))
    {
        double cosT=1.0,sinT=1.0;
        switch (orbialType) {
        case 1:
            rotation->RotateZ(90.0);
            break;
        case 2:
            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            break;
        case 3:
            needRender=false;
            break;
        case 4: //wedge
            //Px = sqrt(3.0/M_PI/4.0)* sinT*cosP;
            coeff=sqrt(3.0/M_PI/4.0);
            theta=0.0;
            interval=1.0;

            pos.clear();
            neg.clear();

            while(theta<181.0)
            {
                theta1=theta*0.0174533;
                cosT=cos(theta1);
                r=coeff*cosT;
                x=abs(r)*cosT;
                y=abs(r)* sin(theta1);
                theta+=interval;
                if(theta<90.1) {
                    pos.append(QPointF(x, y));
                    pos1.append(QPointF(x, y));
                }
                else {
                    neg.append(QPointF(x, y));
                    neg1.append(QPointF(x, y));
                }
            }

            rotation1->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Py"))
    {
        switch (orbialType) {
        case 1:
            break;
        case 2:
            needRender=false;
            break;
        case 3:
            rotation->RotateY(90.0);
            break;
        case 4: //wedge
            neg.clear();
            pos1.clear();
            neg1.clear();
            break;
        }
    }

    if (AOName.startsWith("Pz"))
    {
        switch (orbialType) {
        case 1:
            needRender=false;
            break;
        case 2:
            rotation->RotateY(90.0);
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            break;
        case 3:
            rotation->RotateY(90.0);
            rotation->RotateX(90.0);
            break;
        case 4:
            rotation->RotateY(90.0);
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            neg.clear();
            pos1.clear();
            neg1.clear();
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }

    if(!needRender) return;


    renderCutterEdgeLine(rotation);
    renderCutterEdgeLine1(rotation1);
}



void Angular3D::renderCutterEdge_D()
{
    AO * ao = mainWindow->getAO();

    QString AOName=ao->getName();
    AOName.remove(0,1);

    auto rotation=  vtkSmartPointer<vtkTransform>::New();
    rotation->PostMultiply();

    auto rotation1=  vtkSmartPointer<vtkTransform>::New();
    rotation1->PostMultiply();



    ProjOrbitaType projType=ao->getProjType();
    OrbitaType orbialType=ao->getOrbitalType();


    bool needRender=true;

    double theta=0,theta1,sinT,sinT2;
    double x,y,z,r,r0,interval=1.0;
    double coeff;
    pos.clear();
    neg.clear();

    if (AOName.startsWith("Dx2-y2"))
    {
        //Dx2-y2=sqrt(15.0/M_PI)/4.0*sin(theta)^2*cos(2*phi)

        coeff=sqrt(15.0/M_PI)/4.0;
        theta=0.0;
        int i,size;

        pos.clear();  neg.clear();

        if(orbialType==1)
        {
            while(theta<361.0){
                theta1=theta*0.0174533;
                r=coeff*cos(2.0*theta1);

                x=r*cos(theta1);
                y=r*sin(theta1);

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));
            }
        }
        else
        {
            pos.clear();
            neg.clear();
            //Dx2-y2=sqrt(15.0/M_PI)/4.0*sin(theta)^2*cos(2*phi)
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                r=coeff*sinT*sinT;

                x=r*sinT;
                y=r*cos(theta1);

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));
            }
        }


        //Dx2-y2=sqrt(15.0/M_PI)/4.0*sin(theta)^2*cos(2*phi)
        switch(orbialType)
        {
        case 1:
            neg1.clear();
            pos1.clear();
            break;
        case 2:
            rotation->RotateX(90.0);
            break;

        case 3:
            rotation->RotateZ(90.0);
            rotation->RotateY(90.0);
            break;

        case 4:
            pos.clear();
            neg.clear();
            pos1.clear();
            neg1.clear();


            //Dx2-y2=sqrt(15.0/M_PI)/4.0*  sin(theta)^2 *cos(2*phi)
            theta=0.0;
            while(theta<180.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                r=coeff*cos(2.0*theta1);

                x=abs(r)*cos(theta1);
                y=abs(r)*sinT;

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));
            }



            theta=0.0;
            while(theta<91.0)
            {
                theta1=theta*0.0174533;
                sinT= sin(theta1);

                r=coeff*sinT*sinT;
                x=abs(r)*sinT;
                y=abs(r)*cos(theta1);

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;

                neg1.append(QPointF(x, y));
            }

            size=neg1.size();
            for(i=0;i<neg1.size();i++) {
                pos1.append(QPointF(neg1[size-i-1].x(),neg1[size-i-1].y()));
            }


            for(i=1;i<neg1.size();i++) {
                pos1.append(QPointF(-neg1[i].x(),neg1[i].y()));
            }

            neg1.clear();
            rotation1->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }

    }



    if ( AOName.startsWith("Dxz") || AOName.startsWith("Dyz") || AOName.startsWith("Dxy"))
    {
        pos.clear();neg.clear();

        //Dxy = sqrt(15.0/M_PI)/4.0 * sinT*sinT*sin(2.0*phi);
        coeff=sqrt(15.0/M_PI)/4.0;
        theta=0.0;
        while(theta<361.0)
        {
            theta1=theta*0.0174533;
            r=coeff*sin(2.0*theta1);

            x=r*cos(theta1);
            y=r*sin(theta1);

            if(abs(r)<0.2)
                theta+=0.2;
            else
                theta+=interval;

            if(r<0.0)
                neg.append(QPointF(x, y));
            else
                pos.append(QPointF(x, y));
        }

        pos1.clear();
        neg1.clear();
        //Dxy = sqrt(15.0/M_PI)/4.0 * sin(2.0*phi);
        coeff=sqrt(15.0/M_PI)/4.0;
        theta=0.0;
        while(theta<181.0)
        {
            theta1=theta*0.0174533;
            r=coeff*sin(2.0*theta1);

            x=abs(r)*cos(theta1);
            y=abs(r)*sin(theta1);

            if(abs(r)<0.2)
                theta+=0.2;
            else
                theta+=interval;

            if(r<0.0)
                neg1.append(QPointF(x, y));
            else
                pos1.append(QPointF(x, y));
        }
    }

    if (AOName.startsWith("Dxy")) {
        switch (orbialType) {
        case 1:
            break;
        case 2:
            needRender=false;
            break;
        case 3:
            needRender=false;
            break;
        case 4:
            pos.clear();
            neg.clear();
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Dyz"))
    {
        switch (orbialType) {
        case 1:
            needRender=false;
            break;
        case 2:
            needRender=false;
            break;
        case 3:
            rotation->RotateY(90.0);
            rotation->RotateX(90.0);
            pos1.clear();
            neg1.clear();
            break;
        case 4:
            needRender=false;
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Dxz"))
    {
        switch (orbialType) {
        case 1:    //xy
            needRender=false;
            break;
        case 2:   //yz
            rotation->RotateX(90.0);
            pos1.clear();
            neg1.clear();
            break;
        case 3:  //dz2
            pos.clear();
            neg.clear();
            pos1.clear();
            neg1.clear();
            break;
        case 4:
            pos.clear();
            neg.clear();
            rotation1->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }




    if (AOName.startsWith("Dz2"))
    {
        pos.clear();neg.clear();

        coeff=sqrt(5.0/M_PI)/4.0;

        theta=0.0;
        while(theta<361.0)
        {
            theta1=theta*0.0174533;
            r0=cos(theta1);
            r=coeff*(3.0*r0*r0-1.0);

            x=r*sin(theta1);
            y=r*r0;//y=r*cos(theta1);

            if(r<0.0)
                neg.append(QPointF(x, y));
            else
                pos.append(QPointF(x, y));

            if(abs(r)<0.2)
                theta+=0.2;
            else
                theta+=interval;
        }


        switch (orbialType) {
        case 1: //xy
            pos.clear();
            neg.clear();
            pos1.clear();
            neg1.clear();
            coeff=sqrt(5.0/M_PI)/4.0;
            theta=0.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;
                r=coeff;
                x=r*cos(theta1);
                y=r*sin(theta1);

                neg.append(QPointF(x, y));

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;
            }
            break;
        case 2: //xz
            pos1.clear();
            neg1.clear();
            rotation->RotateX(90.0);
            break;

        case 3: //yz
            pos1.clear();
            neg1.clear();
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            break;

        case 4: //wedge
            pos.clear();neg.clear();
            coeff=sqrt(5.0/M_PI)/4.0;

            theta=-90.0;
            while(theta<91.0)
            {
                theta1=theta*0.0174533;
                r0=cos(theta1);
                r=coeff*(3.0*r0*r0-1.0);

                x=r*sin(theta1);
                y=r*r0;//y=r*cos(theta1);

                if(r<0.0)
                    neg.append(QPointF(x, -y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;
            }

            pos1.clear();
            neg1.clear();
            theta=0.0;
            while(theta<180.2)
            {
                theta1=theta*0.0174533;
                r=coeff;
                x=r*cos(theta1);
                y=r*sin(theta1);

                neg1.append(QPointF(x, y));

                if(abs(r)<0.2)
                    theta+=0.2;
                else
                    theta+=interval;
            }

            rotation->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;

        }
    }

    if(!needRender) return;


    renderCutterEdgeLine(rotation);
    renderCutterEdgeLine1(rotation1);
}


void Angular3D::renderCutterEdgeLine1(vtkTransform * rotation)
{
    if (isPosLobeVisible && pos1.size()>10)
    {
        auto points = vtkSmartPointer<vtkPoints>::New();

        //filter cutter
        for (int i=0;i<pos1.size();i++)
        {
            points->InsertNextPoint(pos1.at(i).x(),
                                    pos1.at(i).y(),
                                    0.0);
        }

        auto line = vtkSmartPointer<vtkLineSource>::New();
        line->SetPoints(points);
        line->Update();


        auto actor_line = vtkActor::New();
        auto mapper_line = vtkPolyDataMapper::New();

        mapper_line->SetInputData(line->GetOutput());
        mapper_line->ScalarVisibilityOff();

        actor_line->SetMapper(mapper_line);
        actor_line->SetScale(5,5,5);
        actor_line->GetProperty()->SetColor(1,1,0);
        actor_line->GetProperty()->SetLineWidth(2.0);

        actor_line->SetUserTransform(rotation);
        m_renderer->AddActor(actor_line);
        mapper_line->Delete();
    }

    if (isNegLobeVisible && neg1.size()>10)
    {
        auto points = vtkSmartPointer<vtkPoints>::New();

        for (int i=0;i<neg1.size();i++)
        {
            points->InsertNextPoint(neg1.at(i).x(),
                                    neg1.at(i).y(),
                                    0.0);
        }


        auto line = vtkSmartPointer<vtkLineSource>::New();
        line->SetPoints(points);
        line->Update();

        auto actor_line = vtkActor::New();
        auto mapper_line = vtkPolyDataMapper::New();

        mapper_line->SetInputData(line->GetOutput());
        mapper_line->ScalarVisibilityOff();

        actor_line->SetMapper(mapper_line);
        actor_line->SetScale(5,5,5);
        actor_line->GetProperty()->SetLineWidth(2.0);
        actor_line->GetProperty()->SetColor(1,1,0);

        actor_line->SetUserTransform(rotation);
        m_renderer->AddActor(actor_line);
        mapper_line->Delete();
    }
}

void Angular3D::renderCutterEdgeLine(vtkTransform * rotation)
{
    if (isPosLobeVisible && pos.size()>10)
    {
        auto points = vtkSmartPointer<vtkPoints>::New();

        //filter cutter
        for (int i=0;i<pos.size();i++)
        {
            points->InsertNextPoint(pos.at(i).x(),
                                    pos.at(i).y(),
                                    0.0);
        }

        auto line = vtkSmartPointer<vtkLineSource>::New();
        line->SetPoints(points);
        line->Update();


        auto actor_line = vtkActor::New();
        auto mapper_line = vtkPolyDataMapper::New();

        mapper_line->SetInputData(line->GetOutput());
        mapper_line->ScalarVisibilityOff();

        actor_line->SetMapper(mapper_line);
        actor_line->SetScale(5,5,5);
        actor_line->GetProperty()->SetColor(1,1,0);
        actor_line->GetProperty()->SetLineWidth(2.0);

        actor_line->SetUserTransform(rotation);
        m_renderer->AddActor(actor_line);
        mapper_line->Delete();
    }

    if (isNegLobeVisible && neg.size()>10)
    {
        auto points = vtkSmartPointer<vtkPoints>::New();

        for (int i=0;i<neg.size();i++)
        {
            points->InsertNextPoint(neg.at(i).x(),
                                    neg.at(i).y(),
                                    0.0);
        }


        auto line = vtkSmartPointer<vtkLineSource>::New();
        line->SetPoints(points);
        line->Update();

        auto actor_line = vtkActor::New();
        auto mapper_line = vtkPolyDataMapper::New();

        mapper_line->SetInputData(line->GetOutput());
        mapper_line->ScalarVisibilityOff();

        actor_line->SetMapper(mapper_line);
        actor_line->SetScale(5,5,5);
        actor_line->GetProperty()->SetColor(1,1,0);
        actor_line->GetProperty()->SetLineWidth(2.0);

        actor_line->SetUserTransform(rotation);
        m_renderer->AddActor(actor_line);
        mapper_line->Delete();
    }
}


void Angular3D::renderCutterEdge_F()
{
    AO * ao = mainWindow->getAO();

    QString AOName=ao->getName();
    AOName.remove(0,1);

    auto rotation=  vtkSmartPointer<vtkTransform>::New();
    rotation->PostMultiply();

    auto rotation1=  vtkSmartPointer<vtkTransform>::New();
    rotation1->PostMultiply();

    ProjOrbitaType projType=ao->getProjType();
    OrbitaType orbialType=ao->getOrbitalType();


    bool needRender=true;

    double theta=0,theta1,sinT2;
    double x,y,z,r,r0,interval=1.0;
    double coeff;
    double cosT,sinT;

    pos.clear();
    neg.clear();

    pos1.clear();
    neg1.clear();
    
    if (AOName.startsWith("Fz3"))
    {
        //Fz3=sqrt(7.0/M_PI)/4.0*(5cos(theta)^3-3*cos(theta))
        //double fz3=(5.0*cosT3-3.0*cosT);
        //r = sqrt(7.0/M_PI)/4.0 * fz3 ;
        double coeff = sqrt(7.0/M_PI)/4.0 ;

        theta=0.0;

        double cosT,sinT;
        while(theta<361.0)
        {
            theta1=theta*0.0174533;

            cosT=cos(theta1);
            sinT=sin(theta1);
            r=coeff*(5.0*cosT*cosT*cosT-3*cosT);

            x=abs(r)*cosT;
            y=abs(r)*sinT;

            if(r<0.0)
                neg.append(QPointF(x, y));
            else
                pos.append(QPointF(x, y));

            if(abs(r)<0.5)
                theta+=0.1;
            else
                theta+=interval;
        }




        switch (orbialType) {
        case 1:
            needRender=false;
            break;
        case 2: //xz
            rotation->RotateX(90.0);
            rotation->RotateY(90.0);
            break;
        case 3: //yz
            rotation->RotateX(90.0);
            rotation->RotateY(90.0);
            rotation->RotateZ(90.0);
            break;


        case 4: //wedge
            theta=-90.0;
            double cosT,sinT;
            pos.clear();
            neg.clear();
            while(theta<90.2)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);
                r=coeff*(5.0*cosT*cosT*cosT-3*cosT);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Fzxy") || AOName.startsWith("Fxyz") )
    {
        needRender=false;
    }



    //Fxz2=  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*cosP ;
    //Fyz2 =  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*sinP;

    if (AOName.startsWith("Fxz2"))
    {
        neg.clear();pos.clear();
        neg1.clear();pos1.clear();

        switch (orbialType) {
        case 1:
            theta=0.0;
            coeff = sqrt(42./M_PI)/8.0;

            while(theta<361.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;
        case 2: //xz
            theta=0.0;
            coeff = sqrt(42./M_PI)/8.0;

            while(theta<361.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*sinT*(5*cosT*cosT-1.0);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);
            break;
        case 3: //yz
            needRender=false;
            break;

        case 4: //wedge
            coeff = sqrt(42./M_PI)/8.0;
            theta=-90.0;
            while(theta<91.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*sinT*(5*cosT*cosT-1.0);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);


            theta=0.0;
            while(theta<180.2)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg1.append(QPointF(x, y));
                else
                    pos1.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Fyz2"))
    {
        pos.clear();
        neg.clear();
        switch (orbialType) {
        case 1:
            theta=0.0;
            coeff = sqrt(42./M_PI)/8.0;

            while(theta<361.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            break;
        case 2: //xz
            needRender=false;
            break;
        case 3: //yz
            theta=0.0;
            coeff = sqrt(42./M_PI)/8.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*sinT*(5*cosT*cosT-1.0);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            break;


        case 4: //wedge
            theta=-90.0;
            coeff = sqrt(42./M_PI)/8.0;

            while(theta<90.1)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;


                neg.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateZ(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if (AOName.startsWith("Fx(x2-3y2)"))
    {
        switch (orbialType) {
        case 1:
            break;
        case 2: //xz
            //needSecond=true;
            break;
        case 3: //yz
            needRender=false;
            break;
        }
    }

    if (AOName.startsWith("Fy(3x2-y2)"))
    {
        switch (orbialType) {
        case 1:

            break;
        case 2: //xz
            //needSecond=true;
            break;
        case 3: //yz
            needRender=false;
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    //Y =  sqrt(105.0/M_PI)/4.0 *sinT*sinT*cosT*cos(2.0*phi) ;
    if (AOName.startsWith("Fz(x2-y2)"))
    {
        switch (orbialType) {
        case 1:
            needRender=false;
            break;
        case 2: //xz
            theta=0.0;
            coeff = sqrt(105.0/M_PI)/4.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, -y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);
            rotation->RotateY(90.0);
            break;

        case 3: //yz
            theta=0.0;
            coeff = sqrt(105.0/M_PI)/4.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*cos(theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, -y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateY(90.0);

            break;

        case 4:
            theta=0.0;
            coeff = sqrt(105.0/M_PI)/4.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>-0.01)
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            neg.clear();
            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }

    //Fxyz=sqrt(105.0/M_PI)/2.0 *sinT*sinT*cosT*sin(2.0*phi);
    if (AOName.startsWith("Fxyz"))
        needRender=false;


    //Fx(x2-3y2) = sqrt(70./M_PI)/8.0 *sinT*sinT*sinT*cos(3.0*phi);
    // r = sqrt(70./M_PI)/8.0 *sinT3*cos3P;
    if  (AOName.startsWith("Fx(x2-3y2)"))
    {
        coeff = sqrt(70./M_PI)/8.0;

        neg.clear();
        pos.clear();
        neg1.clear();
        pos1.clear();

        switch (orbialType) {
        case 1:
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=-coeff*cos(3.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            break;




        case 2: //xz
            theta=0.0; // r = sqrt(70./M_PI)/8.0 *sinT3*cos3P;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);  cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateX(90.0);
            break;

        case 3: //yz
            needRender=false;
            break;

        case 4:
            theta=0.0;
            while(theta<180.2){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=-coeff*cos(3.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }


            theta=-90.0; // r = sqrt(70./M_PI)/8.0 *sinT3*cos3P;
            while(theta<90.2){
                theta1=theta*0.0174533;
                sinT=sin(theta1);  cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg1.append(QPointF(x, y));
                else
                    pos1.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation1->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }

    }


    //Y = sqrt(70./M_PI)/8.0  *sinT*sinT*sinT*sin(3.0*phi);
    if  (AOName.startsWith("Fy(3x2-y2)"))
    {
        neg.clear();
        pos.clear();
        neg1.clear();
        pos1.clear();
        needRender=true;

        coeff = sqrt(70./M_PI)/8.0;

        switch (orbialType) {
        case 1:
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(3.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation1->RotateZ(30.0);
            break;

        case 2: //xz
            needRender=false;
            break;

        case 3: //yz
            neg.clear();
            pos.clear();
            coeff = sqrt(70./M_PI)/8.0;

            theta=0.0; //sqrt(70./M_PI)/8.0  *sinT*sinT*sinT*sin(3.0*phi);
            while(theta<360.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            rotation->RotateY(90.0);
            break;


        case 4: //wedge
            neg.clear();  pos.clear();
            theta=0.0;
            while(theta<180.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(3.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation1->RotateZ(30.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }

    }


    if(!needRender) return;
    renderCutterEdgeLine(rotation);
    renderCutterEdgeLine1(rotation1);
}



void Angular3D::renderCutterEdge_G()
{
    AO * ao = mainWindow->getAO();

    QString AOName=ao->getName();
    AOName.remove(0,1);

    auto rotation=  vtkSmartPointer<vtkTransform>::New();
    rotation->PostMultiply();

    auto rotation1=  vtkSmartPointer<vtkTransform>::New();
    rotation1->PostMultiply();

    ProjOrbitaType projType=ao->getProjType();
    OrbitaType orbialType=ao->getOrbitalType();


    bool needRender=true;

    double theta=0,theta1,sinT2,cosT2;
    double x,y,z,r,r0,interval=1.0;
    double coeff;
    double cosT,sinT;

    pos.clear();
    neg.clear();

    //Gz4=3.0/16.0/sqrt(M_PI)*(3.0-30.0*cosT2+35.0*cosT4);
    if  (AOName.startsWith("Gz4"))
    {
        coeff =  3.0/16.0/sqrt(M_PI);

        neg.clear();
        pos.clear();

        neg1.clear();
        pos1.clear();

        switch (orbialType) {
        case 1:
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                cosT2=cosT*cosT;
                r=3.0*coeff;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;


        case 2: //xz
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                cosT2=cosT*cosT;
                r=3.0-30.0*cosT2+35.0*cosT2*cosT2;
                r*=coeff;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateY(90.0);
            rotation->RotateZ(90.0);
            break;

        case 3: //yz
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                cosT2=cosT*cosT;
                r=3.0-30.0*cosT2+35.0*cosT2*cosT2;
                r*=coeff;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateY(90.0);
            break;


        case 4: //wedge Gz4=3.0/16.0/sqrt(M_PI)*(3.0-30.0*cosT2+35.0*cosT4);
            theta=-90.0;
            while(theta<90.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                cosT2=cosT*cosT;
                r=3.0-30.0*cosT2+35.0*cosT2*cosT2;
                r*=coeff;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);


            theta=0.0;
            //coeff=3.0/16.0/sqrt(M_PI);
            while(theta<180.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);

                r=coeff*3.0;
                x=r*cosT;
                y=r*sinT;

                theta+=interval;

                pos1.append(QPointF(x, y));
            }

            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if  (AOName.startsWith("Gxz3")  || AOName.startsWith("Gz3x") )
    {
        //Y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*cosP ;
        //r = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*cosP ;


        coeff =  3.0/8.0*sqrt(5.0/M_PI);
        neg.clear();
        pos.clear();
        neg1.clear();
        pos1.clear();

        switch (orbialType) {
        case 1:
            needRender=false;
            break;


        case 2: //xz
            theta=0.0;
            while(theta<360.10){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cosT*sinT*(7.0*cosT*cosT-3.0);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            break;

        case 3: //yz
            needRender=false;
            break;

        case 4: //wedge 3.0/16.0/sqrt(M_PI)*(3.0-30.0*cosT2+35.0*cosT4);
            theta=-90.0;
            while(theta<90.10){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cosT*sinT*(7.0*cosT*cosT-3.0);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);rotation->RotateZ(180.0);

            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if  (AOName.startsWith("Gz3y") || AOName.startsWith("Gyz3"))
    {
        //Gz3y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*sinP ;

        coeff =  3.0/8.0*sqrt(5.0/M_PI);
        neg.clear();
        pos.clear();

        switch (orbialType) {
        case 1:
            needRender=false;
            break;

        case 2: //xz
            needRender=false;
            break;

        case 3: //yz

            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cosT*sinT*(7.0*cosT*cosT-3.0);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateY(90.0);
            break;

        case 4:
            needRender=false;
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }




    if  (AOName.startsWith("Gxyz2") )
    {
        //Gxyz2 = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*sin(2.0*phi) ;

        coeff =  3.0/8.0*sqrt(5.0/M_PI);
        neg.clear();
        pos.clear();

        switch (orbialType) {
        case 1:
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(2.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;


        case 2: //xz

            needRender=false;
            break;

        case 3: //yz
            needRender=false;
            break;

        case 4: //wedge
            theta=0.0;
            while(theta<180.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(2.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }


    if  (AOName.startsWith("Gzx3") || AOName.startsWith("Gx3z"))
    {
        //Gzx3 = 3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*cos(3.0*phi) ;

        coeff =  3.0/8.0*sqrt(35.0/M_PI);
        neg.clear();
        pos.clear();


        switch (orbialType) {
        case 1:
            needRender=false;
            break;
        case 2:
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            break;

        case 3:
            needRender=false;
            break;

        case 4:
            theta=-90.0;
            while(theta<90.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            rotation->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;


        }
    }


    if  (AOName.startsWith("Gzy3") || AOName.startsWith("Gy3z"))
    {
        //Gyx3 =3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*sin(3.0*phi) ;
        //yz
        coeff =  3.0/8.0*sqrt(35.0/M_PI);
        neg.clear();
        pos.clear();

        if(orbialType==3) {
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*cosT;

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateY(90.0);
        }
        else
            needRender=false;
    }


    if  (AOName.startsWith("Gz2(x2-y2)") || AOName.startsWith("G(x2-y2)z2"))
    {
        //Y = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*cos(2.0*phi) ;
        coeff =  3.0/8.0*sqrt(5.0/M_PI);
        neg.clear();
        pos.clear();

        neg1.clear();
        pos1.clear();

        switch (orbialType)
        {
        case 1: //xy
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cos(2.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;


        case 2: //xz
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*(1.0-7.0*cosT*cosT);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));


                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateX(90.0);
            break;

        case 3: //yz
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*(1.0-7.0*cosT*cosT);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r>0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));


                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateX(90.0);
            rotation->RotateZ(90.0);
            break;

        case 4: //wedge
            theta=-90.0;
            while(theta<90.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*(1.0-7.0*cosT*cosT);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));


                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateX(90.0);


            theta=0.0;
            while(theta<180.1){
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cos(2.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg1.append(QPointF(x, y));
                else
                    pos1.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;

        }
    }

    if (AOName.startsWith("Gxy(x2-y2)"))
    {
        //Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*sin(4.0*phi) ;
        coeff=3.0/16*sqrt(35.0/M_PI);

        neg1.clear();
        pos1.clear();
        neg.clear();
        pos.clear();

        switch (orbialType) {
        case 1: //xy
            theta=0.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(4.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;

        case 2: //xz
            needRender=false;
            break;

        case 3: //yz
            needRender=false;
            break;

        case 4: //wedge
            theta=0.0;
            while(theta<180.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sin(4.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;
        }
    }



    if (AOName.startsWith("G(x4+y4)"))
    {
        needRender=true;
        //Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*cos(4.0*phi) ;
        // r = 3.0/16*sqrt(35.0/M_PI)*sinT4*cos4P;
        //cout << "3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*cos(4.0*phi) "<<endl;
        //cout <<orbialType<<endl;

        coeff=3.0/16.0*sqrt(35.0/M_PI);

        neg1.clear();
        pos1.clear();
        neg.clear();
        pos.clear();

        switch (orbialType) {
        case 1: //xy
            theta=0.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cos(4.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            break;


        case 2: //xz
            theta=0.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation->RotateX(90.0);
            break;


        case 3:
            theta=0.0;
            while(theta<361.0)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

            rotation->RotateZ(90.0);
            rotation->RotateY(90.0);
            break;


        case 4: //wedge
            theta=0.0;
            while(theta<180.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*cos(4.0*theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    neg.append(QPointF(x, y));
                else
                    pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }


            theta=-90.0;
            while(theta<90.1)
            {
                theta1=theta*0.0174533;
                sinT=sin(theta1);
                cosT=cos(theta1);
                r=coeff*sinT*sinT*sinT*sinT;

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                //if(r<0.0)
                    //neg1.append(QPointF(x, y));
                //else
                    pos1.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
            rotation1->RotateX(90.0);
            break;

        case 5: //Quarter
            break;

        case 6:  //Corner
            break;

        }
    }


    if(!needRender) return;
    renderCutterEdgeLine(rotation);
    renderCutterEdgeLine1(rotation1);
}




void Angular3D::renderCutterEdge()
{
    //if(!_cutEdgeVisible) return;

    AO * ao = mainWindow->getAO();
    if(!ao) return;


    ProjOrbitaType projType=ao->getProjType();
    OrbitaType orbialType=ao->getOrbitalType();

    if(orbialType<1) return;


    QString AOName=ao->getName();
    AOName.remove(0,1);


    if(orbialType>4) {
        renderCutterEdge_FeatureEdges();
        return;
    }


    if (AOName.startsWith("S"))
        renderCutterEdge_S();

    else if (AOName.startsWith("P"))
        renderCutterEdge_P();

    else if (AOName.startsWith("D"))
        renderCutterEdge_D();

    else if (AOName.startsWith("F"))
        renderCutterEdge_F();

    else if (AOName.startsWith("G"))
        renderCutterEdge_G();

}



void Angular3D::closeEvent(QCloseEvent *event)
{
    mainWindow->hideActiveSubWindow();
    event->ignore();

    //QVTKOpenGLNativeWidget::closeEvent(event);
}
