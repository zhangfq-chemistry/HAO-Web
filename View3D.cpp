#define USER_MATRIX

#include "View3D.h"
#include "matrix3/vector3.h"
#include "functionals.h"
#include "mainwindow.h"


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
#include <vtkUnsignedCharArray.h>

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
#include "vector3.h"



void View3D::interP(vector3 p0, vector3 p1, uint num, std::vector <vector3> & ColorMaps)
{
    vector3 step=(p1-p0)/num;
    int i=0;

    while (i < num)
    {
        ColorMaps.push_back(p0+i*step);
        i++;
    }
}

void View3D::buildColorTable()
{
    // Create the color map
    pColorTable=vtkLookupTable::New();


    pColorTable->SetAlphaRange(1.0, 1.0);
    pColorTable->SetValueRange(1.0, 1.0);
    pColorTable->SetSaturationRange(1.0, 1.0);
    pColorTable->SetRange(scalarRange);


    vector3 red(255.,0.,0.);
    vector3 orange(255.,0,255.);
    vector3 white(255.,255.,255.);
    vector3 green(0.,255.,255.);
    vector3 blue(0.,0.,255.);

    std::vector <vector3> ColorMaps;
    ColorMaps.clear();



    int i=0;
    while (i<20){
        ColorMaps.push_back(red);
        i=i+1;
    }


    interP(red,orange,80,ColorMaps);
    interP(orange,white,25,ColorMaps);

    i=0;
    while (i<5) {
        i=i+1;
        ColorMaps.push_back(white);
    }


    interP(white,green,25,ColorMaps);
    interP(green,blue,80,ColorMaps);


    i=0;
    while (i<20){
        i=i+1;
        ColorMaps.push_back(blue);
    }


    std::vector<vector3>::reverse_iterator iter;
    i=0;
    for (iter=ColorMaps.rbegin();iter!=ColorMaps.rend();iter++)  {
        pColorTable->SetTableValue(i, (*iter).x()/255.0,
                                   (*iter).y()/255.0,
                                   (*iter).z()/255.0, 1);

        i++;
        //cout <<i<<  "   "<< (*iter).x()/255.0 << "  "<<  (*iter).y()/255.0 << " "<<  (*iter).z()/255.0 << endl;
    }

    int size=ColorMaps.size();

    pColorTable->SetNumberOfColors(size);
    pColorTable->SetNumberOfTableValues(size);
    pColorTable->Build();

    //appendMessage("OK!");
}



void View3D::initializeActor (vtkActor * actor)
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

vector3 MakeGlColor(uint32_t dw)
{
    float v1,v2,v3;
    float &r = v1, &g = v2, &b = v3;
    r = (1.f/255.f)*((dw>>16)&0xff);
    g = (1.f/255.f)*((dw>>8)&0xff);
    b = (1.f/255.f)*((dw>>0)&0xff);

    vector3 v (r,g,b);

    return v;
}

View3D::~View3D()
{
    if(glyphFilter_pos!=nullptr)
        glyphFilter_pos->Delete();

    if(glyphFilter_neg!=nullptr)
        glyphFilter_neg->Delete();
}


View3D::View3D(QWidget *parent)
    : QVTKOpenGLNativeWidget(parent)
{
    //this->setWindowTitle("Total Wave Function (Psi)");
    this->setWindowTitle("鎬绘尝鍑芥暟(Psi)");

    vtkNew<vtkGenericOpenGLRenderWindow> window;
    setRenderWindow(window.Get());

    //background color
    //bkcolor.Set(0.6,0.6,0.6);
    bkcolor.Set(0.4,0.5,0.5);
    //bkcolor.Set(1.0,1.0,1.0);
    whiteColor.Set(1.0,1.0,1.0);


    angularNodecolor_Theta.Set(0.3,0.6,0.3);
    angularNodecolor_Phi.Set(0.3,0.6,0.3);
    radialNodecolor.Set(1.0,1.0,1.0);

    // Camera
    camera = vtkSmartPointer<vtkCamera>::New();
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,90);
    camera->SetFocalPoint(0,0,0);
    camera->SetParallelScale(5.0);
    camera->ParallelProjectionOn();


    // Renderer
    m_renderer = vtkSmartPointer<vtkRenderer>::New();
    m_renderer->SetActiveCamera(camera);
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->AddRenderer(m_renderer);

    m_renderer->LightFollowCameraOn();
    m_renderer->TwoSidedLightingOn();
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



    plane=nullptr;
    clipper_pos=nullptr;
    clipper_neg=nullptr;


    //LobeColor_pos,LobeColor_neg;
    //LobeColor_pos.Set(10.0,1.0,1.0);
    //LobeColor_neg.Set(0.0,1.0,10.0);


    setDefaultColor();

    opacity_theta=opacity_phi=opacity_radial=0.8;
    opacity_pos=opacity_neg=1.0;

    orbitalLineWidth=1.0;
    nodeThickness=0.02;
    boxlineWidth=2.0;

    isBoxVisible=false;
    isGridVisible=false;
    isAxisVisible=false;
    length_x=length_y=length_z=1.0;
    isOrbitalVisible=true;


    isOrbitalVisible=true;
    isCloudVisible=false;
    isPosLobeVisible=isNegLobeVisible=true;

    visible_azimuthal_node=visible_radial_node=visible_polar_node=false;
    _colorType=1;

    initXYZLength();

    scalarRange[0]=-1.0;
    scalarRange[1]=1.0;
    buildColorTable();
}





void View3D::setRadialNodecolor (vector3 v)
{
    radialNodecolor=v;
}

void View3D::setAngularNodecolor_Theta (vector3 v )
{
    angularNodecolor_Theta=v;

}
void View3D::setAngularNodecolor_Phi (vector3 v )
{
    angularNodecolor_Phi=v;
}



void View3D::refreshView()
{
    renderWindow()->Render();
}

void View3D::setRadialNodeOpicity (double o)
{
    opacity_radial=o;
}

void View3D::setAngularNodeOpicity_Theta (double o)
{
    opacity_theta=o;
}

void View3D::setAngularNodeOpicity_Phi (double o)
{
    opacity_phi=o;
}

void View3D::setOrbitalLineWidth(double l)
{
    orbitalLineWidth =l;

}

void View3D::setLobeColor_pos( vector3 c)
{
    LobeColor_pos=c;


}
void View3D::setLobeColor_neg( vector3 c)
{
    LobeColor_neg=c;

}


void View3D::setBackgroundColor( vector3 c)
{
    bkcolor=c;
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->Render();
}

void View3D:: onViewXY()
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

void View3D:: onViewXZ()
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

void View3D:: onViewYZ()
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


void View3D:: onViewReset()
{
    onViewXY();
    /*
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,30);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();

    renderWindow()->Render();
*/
}

void View3D:: onView_rotateClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();

}

void View3D:: onView_rotateCounterClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle+degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void View3D:: onView_rotateUp(double degree)
{
    //camera->Pitch(-5);
    camera->Elevation(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}
void View3D:: onView_rotateDown(double degree)
{
    //camera->Pitch(5);
    camera->Elevation(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}





void View3D::renderScene()
{
    removeAllActors();

    AO *  ao = mainWin->getAO();
    if(ao==nullptr) return;

    renderOrbital();

    renderNodes();
    renderBox();
    renderGrid();
    renderXYZAxis();
    renderWindow()->Render();

   // cout <<"View3D::renderScene() done"<<endl;

    //cout <<"rLambert(): "<<rLambert(1.35,-1)<<endl;
   // cout <<"LambertW1: "<<LambertW1(1.35)<<endl;
    //cout <<"LambertW: "<<LambertW0(1.35)<<endl;
}


void View3D::writePNG(QString name)
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



void View3D::renderNodes()
{
    /*
   cout << "void View3D::renderNodes() " <<endl;
   if(visible_radial_node)
       cout << "View3D::renderNodes() visible " <<endl;
   else
       cout << "11111void View3D::renderNodes() invisible" <<endl;
*/
   //mainWin->
    if(visible_radial_node)
        renderRadialNodes();

    if(visible_azimuthal_node)
        renderAzimuthalNodes();

    if(visible_polar_node)
        renderPolarNodes();
}


void View3D::renderRadialNodes()
{
    double color[3];
    color[0]=radialNodecolor.x();
    color[1]=radialNodecolor.y();
    color[2]=radialNodecolor.z();

    AO *  ao = mainWin->getAO();

    for (int k=0;k<ao->Nodes_R.size();k++)
    {
        double r0=ao->Nodes_R[k];
        if (r0<0.1) continue;

        auto sphere = vtkSphereSource::New();
        sphere->SetPhiResolution(50);
        sphere->SetThetaResolution(50);
        sphere->SetRadius(r0);
        sphere->Update();

        auto actor = vtkActor::New();
        initializeActor(actor);
        auto mapper = vtkPolyDataMapper::New();
        actor->GetProperty()->SetColor(color);
        actor->SetMapper(mapper);

        actor->GetProperty()->SetOpacity(0.6);
        actor->GetProperty()->ShadingOn();
        //actor->GetProperty()->SetDiffuse(0.2);
        //actor->GetProperty()->SetAmbient(0.2);
        //actor->GetProperty()->SetSpecular(0.1);
        //actor->GetProperty()->SetSpecularPower(1.0);

        mapper->ScalarVisibilityOff();

        mapper->SetInputConnection(sphere->GetOutputPort());
        m_renderer->AddActor(actor);
        mapper->Delete();
    }
}


//polar (theta) node
void View3D::renderPolarNodes()
{
    AO *  ao = mainWin->getAO();

    bool HorinzontalSquare=false;

    double height=4.0;
    double thickness=nodeThickness;
    double opacity=opacity_theta;

    double length=ao->MaxBox()*1.5;


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


/*
    //build one torus
    auto parametricObject = vtkSmartPointer<vtkParametricTorus>::New();
    auto parametricFunctionSource =	vtkSmartPointer<vtkParametricFunctionSource>::New();
    parametricFunctionSource->SetParametricFunction(parametricObject);
    parametricFunctionSource->Update();
    parametricObject->SetRingRadius(length/2.0);
    parametricObject->SetCrossSectionRadius(0.06);
*/

    auto cube = vtkSmartPointer<vtkCubeSource>::New();
    cube->SetCenter(0.0, 0.0, 0.0);

    vtkSmartPointer<vtkTransform>  rotation;



    for (int k=0;k<ao->Nodes_T.size();k++)
    {
        double cos2angle=ao->Nodes_T[k];


        //just the xoy plane
        if (abs(cos2angle)<0.001) //render disk orsquare
        {
            //length=ao->MaxBox();
            thickness=length*0.005;
            cube->SetXLength(length);
            cube->SetYLength(length);
            cube->SetZLength(thickness);
            cube->Update();

            auto mapper = vtkPolyDataMapper::New();
            mapper->ScalarVisibilityOn();
            auto actor = vtkActor::New();
            initializeActor(actor);
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
                parametricObject->SetRingRadius(length/2.0);
                parametricObject->SetCrossSectionRadius(0.06);


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

            actor->GetProperty()->SetInterpolationToGouraud();
            actor->SetPickable(false);

            m_renderer->AddActor(actor);
            mapper->Delete();
        }
        else{//cone
            height=0.56*ao->MaxBox();
            renderCones(height,  cos2angle);
        }
    }
}


void View3D::renderCones(double height, double cos2angle)
{
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

    double thickness=nodeThickness;
    double opacity=opacity_theta;
    double length=6.0;

    double color[3];

    color[0]=angularNodecolor_Theta.x();
    color[1]=angularNodecolor_Theta.y();
    color[2]=angularNodecolor_Theta.z();
/*
    //build one torus
    auto parametricObject = vtkSmartPointer<vtkParametricTorus>::New();
    auto parametricFunctionSource =	vtkSmartPointer<vtkParametricFunctionSource>::New();
    parametricFunctionSource->SetParametricFunction(parametricObject);
    parametricFunctionSource->Update();
    parametricObject->SetRingRadius(length/2.0);
    parametricObject->SetCrossSectionRadius(0.06);
*/
    //the following code render double-cone node, based on theta
    auto actor = vtkActor::New();
    initializeActor(actor);
    auto mapper = vtkPolyDataMapper::New();
    actor->GetProperty()->SetColor(color);
    actor->GetProperty()->SetOpacity(opacity);
    actor->GetProperty()->ShadingOff();
    actor->SetPickable(false);



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
    initializeActor(actor1);
    auto mapper1 = vtkPolyDataMapper::New();
    actor1->GetProperty()->SetColor(color);
    actor1->SetMapper(mapper1);
    actor1->GetProperty()->SetOpacity(opacity);
    actor1->GetProperty()->ShadingOff();
    actor1->SetPickable(false);

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


    /*

    //building two torus
    parametricFunctionSource->Update();
    parametricObject->SetRingRadius(radius);
    parametricObject->SetCrossSectionRadius(0.08);


    auto transform_tours =  vtkSmartPointer<vtkTransform>::New();
    transform_tours->PostMultiply();
    transform_tours->Translate(0.0,0.0,-height);

    auto mapper_torus =   vtkSmartPointer<vtkPolyDataMapper>::New();
    mapper_torus->SetInputConnection(parametricFunctionSource->GetOutputPort());
    mapper_torus->ScalarVisibilityOn();

    // Create an actor for the contours
    auto actor_torus = vtkSmartPointer<vtkActor>::New();
    actor_torus->SetMapper(mapper_torus);
    actor_torus->GetProperty()->SetColor(color);
    actor_torus->SetUserTransform(transform_tours);
    actor_torus->SetPickable(false);
    //actor_torus->GetProperty()->SetOpacity(0.9);
    m_renderer->AddActor(actor_torus);


    auto transform_tours1 =  vtkSmartPointer<vtkTransform>::New();
    transform_tours1->PostMultiply();
    transform_tours1->Translate(0.0,0.0,height);


    auto mapper_torus1 =   vtkSmartPointer<vtkPolyDataMapper>::New();
    mapper_torus1->SetInputConnection(parametricFunctionSource->GetOutputPort());
    mapper_torus1->ScalarVisibilityOn();


    auto actor_torus1 = vtkSmartPointer<vtkActor>::New();
    actor_torus1->SetMapper(mapper_torus1);
    actor_torus1->GetProperty()->SetColor(color);
    actor_torus1->SetUserTransform(transform_tours1);
    actor_torus1->SetPickable(false);
    //actor_torus1->GetProperty()->SetOpacity(0.9);
    m_renderer->AddActor(actor_torus1);
*/
    //
    //mapper_torus->Delete();
    //mapper_torus1->Delete();
}


void View3D::setDefaultColor()
{
    LobeColor_pos2.Set(0.90,0.56,0.14);
    LobeColor_neg2.Set(0.21,0.44,0.53);

    LobeColor_pos.Set(0.67,0.34,0.67);
    LobeColor_neg.Set(0.13,0.62,0.62);

    xColor.Set(1.0,0.0,0.0);
    yColor.Set(0.0,1.0,0.0);
    zColor.Set(1.0,1.0,0.0);
}



//phi node around Z axis
void View3D::renderAzimuthalNodes()
{
    //Nodes_P
    AO * ao = mainWin->getAO();

    double thikness=0.02;
    double opacity=opacity_phi;

    double color[3];
    color[0]=angularNodecolor_Phi.x();
    color[1]=angularNodecolor_Phi.y();
    color[2]=angularNodecolor_Phi.z();

    auto cube = vtkSmartPointer<vtkCubeSource>::New();
    cube->SetCenter(0.0, 0.0, 0.0);

    auto cube1 = vtkSmartPointer<vtkCubeSource>::New();
    cube1->SetCenter(0.0, 0.0, 0.0);



    double length=ao->MaxBox()*1.5;
    thikness=length*0.005;
    cube->SetXLength(length);
    cube->SetYLength(thikness);
    cube->SetZLength(length);
    cube->Update();

    cube1->SetXLength(thikness);
    cube1->SetYLength(thikness);
    cube1->SetZLength(length);
    cube1->Update();


    int nNodes=ao->Nodes_P.size();


    for (int k=0; k<nNodes; k++)
    {
        double angle=ao->Nodes_P[k];
        auto actor = vtkActor::New();
        initializeActor(actor);
        auto mapper = vtkPolyDataMapper::New();
        actor->GetProperty()->SetColor(color);
        actor->SetMapper(mapper);
        actor->GetProperty()->SetOpacity(opacity);
        actor->GetProperty()->ShadingOn();
        actor->SetPickable(false);

        auto rotation=  vtkSmartPointer<vtkTransform>::New();
        rotation->PostMultiply();
        rotation->RotateZ(angle);
        actor->SetUserTransform(rotation);

        mapper->ScalarVisibilityOn();
        mapper->SetInputConnection(cube->GetOutputPort());
        actor->GetProperty()->SetInterpolationToGouraud();
        m_renderer->AddActor(actor);

        mapper->Delete();


        if(ao->isXOYNode )
        {
            auto cube2 = vtkSmartPointer<vtkCubeSource>::New();
            cube2->SetCenter(0.0, 0.0, 0.0);
            cube2->SetXLength(length);
            cube2->SetYLength(thikness);
            cube2->SetZLength(thikness);
            cube2->Update();

            //render one line along the cross
            auto actor2 = vtkActor::New();
            initializeActor(actor2);
            auto mapper2 = vtkPolyDataMapper::New();
            actor2->GetProperty()->SetColor(0.0,0.0,0.0);
            actor2->SetMapper(mapper2);
            actor2->GetProperty()->SetOpacity(opacity);
            actor2->GetProperty()->ShadingOff();
            actor2->SetUserTransform(rotation);
            actor2->GetProperty()->SetInterpolationToGouraud();
            actor2->SetPickable(false);


            mapper2->ScalarVisibilityOff();

            mapper2->SetInputConnection(cube2->GetOutputPort());

            m_renderer->AddActor(actor2);
            mapper2->Delete();
        }
    }


    if ( nNodes <2) return;

    //render one line along the cross
    auto actor = vtkActor::New();
    initializeActor(actor);
    auto mapper = vtkPolyDataMapper::New();
    actor->GetProperty()->SetColor(0.0,0.0,0.0);
    actor->SetMapper(mapper);
    actor->GetProperty()->SetOpacity(opacity);
    actor->GetProperty()->ShadingOff();
    actor->GetProperty()->SetInterpolationToGouraud();
    actor->SetPickable(false);


    //rotation=  vtkSmartPointer<vtkTransform>::New();
    //rotation->PostMultiply();
    //rotation->RotateZ(angle);
    //actor->SetUserTransform(rotation);

    mapper->ScalarVisibilityOn();

    mapper->SetInputConnection(cube1->GetOutputPort());
    m_renderer->AddActor(actor);

    mapper->Delete();

}

void View3D::prepareCloudData()
{
    AO * ao = mainWin->getAO();

    ao->generateCloudPoints_display();

    if(glyphFilter_pos!=nullptr)
        glyphFilter_pos->Delete();
    glyphFilter_pos = vtkVertexGlyphFilter::New();


    if(glyphFilter_neg!=nullptr)
        glyphFilter_neg->Delete();
    glyphFilter_neg = vtkVertexGlyphFilter::New();



    if(ao->value_cloud_pos.size()>100)
    {
        double scale=1.0/ao->max_cloud_pos;

        auto scalars = vtkSmartPointer<vtkFloatArray>::New();
        for(size_t i = 0; i < ao->value_cloud_pos.size(); i++)
            scalars->InsertTuple1(i, scale*ao->value_cloud_pos[i]);

        auto polyData = vtkSmartPointer<vtkPolyData>::New();
        polyData->SetPoints(ao->points_pos);
        polyData->GetPointData()->SetScalars(scalars);

        glyphFilter_pos->SetInputData(polyData);
        glyphFilter_pos->Update();

        //cout<< "prepareCloudData()---0"<<endl;
    }

    if(ao->value_cloud_neg.size()>100)
    {
        double scale=1.0/ao->min_cloud_neg;
        if(scale<0.0) scale*=-1.0;

        auto scalars = vtkSmartPointer<vtkFloatArray>::New();
        for(size_t i = 0; i < ao->value_cloud_neg.size(); i++)
            scalars->InsertTuple1(i, scale*ao->value_cloud_neg[i]);

        auto polyData = vtkSmartPointer<vtkPolyData>::New();
        polyData->SetPoints(ao->points_neg);
        polyData->GetPointData()->SetScalars(scalars);

        glyphFilter_neg->SetInputData(polyData);
        glyphFilter_neg->Update();

    }

    cout<< "View3D::prepareCloudData() done"<<endl;
}



void View3D::renderCloud()
{
    AO *  ao = mainWin->getAO();
    if ( !ao || ao==nullptr)
        return;

    prepareCloudData();


    if(ao->value_cloud_pos.size()>10  && isPosLobeVisible)
    {
        auto mapper=vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper->SetInputData(glyphFilter_pos->GetOutput());

        mapper->ScalarVisibilityOff();
        if(isColorCloudPoint) {
            mapper->SetLookupTable(pColorTable);
            mapper->SetScalarRange(scalarRange);
            mapper->ScalarVisibilityOn();
        }

        auto actor = vtkSmartPointer<vtkActor>::New();
        initializeActor(actor);
        actor->SetMapper(mapper);
        actor->GetProperty()->SetPointSize(2);
        if(!isColorCloudPoint)
            actor->GetProperty()->SetColor(0.2,0.2,0.2);
        actor->SetPickable(false);

        m_renderer->AddActor(actor);
    }


    if(ao->value_cloud_neg.size()>10  && isNegLobeVisible)
    {
        auto mapper=vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper->SetInputData(glyphFilter_neg->GetOutput());

        mapper->ScalarVisibilityOff();
        if(isColorCloudPoint) {
            mapper->SetLookupTable(pColorTable);
            mapper->SetScalarRange(scalarRange);
            mapper->ScalarVisibilityOn();
        }

        auto actor = vtkSmartPointer<vtkActor>::New();
        initializeActor(actor);
        actor->SetMapper(mapper);
        actor->GetProperty()->SetPointSize(2);
        if(!isColorCloudPoint)
            actor->GetProperty()->SetColor(0.2,0.2,0.2);
        actor->SetPickable(false);

        m_renderer->AddActor(actor);
        //mapper->Delete();
    }

     //cout<<"View3D::renderCloud() done!"<<endl;
}

void View3D::renderColorMapOrbital()
{
    AO *  ao = mainWin->getAO();
     if ( !ao || ao==nullptr)
         return;

    vector <double> value_psi_pos,value_psi_neg;
    value_psi_pos.clear();
    value_psi_neg.clear();
    double v[3],psi;

    //positive
    uint numberPoints_pos=ao->pData_p->GetNumberOfPoints();
    uint numberPoints_neg=ao->pData_n->GetNumberOfPoints();

    //positive
    double scale=1.0/ao->maxPsi();

    if(numberPoints_pos>10 && isPosLobeVisible )
    {
        for(uint i=0;i<numberPoints_pos;i++)
        {
            ao->pData_p->GetPoint(i,v);
            //psi=psi_cart(ao->get_n(),ao->get_l(),ao->get_m(),v[0],v[1],v[2]);
            psi=ao-> calc_Psi(v[0],v[1],v[2]);
            value_psi_pos.push_back(psi);
        }



        auto scalars = vtkSmartPointer<vtkFloatArray>::New();
        for(uint i = 0; i < value_psi_pos.size(); i++)
           scalars->InsertTuple1(i, scale*value_psi_pos[i]);
        ao->pData_p->GetPointData()->SetScalars(scalars);


        auto actor_pos = vtkSmartPointer<vtkActor>::New();
        initializeActor(actor_pos);

        actor_pos->GetProperty()->SetOpacity(opacity_pos);
        actor_pos->SetPickable(false);

        auto mapper_pos = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper_pos->SetInputData(ao->pData_p);
        mapper_pos->SetLookupTable(pColorTable);
        mapper_pos->SetScalarRange(scalarRange);
        mapper_pos->SetScalarModeToUsePointData();
        mapper_pos->SetColorModeToMapScalars();

        mapper_pos->ScalarVisibilityOn();

        actor_pos->SetMapper(mapper_pos);
        actor_pos->GetProperty()->SetInterpolationToGouraud();


        //actor_pos->GetProperty()->SetDiffuse(1.0);
        //actor_pos->GetProperty()->SetAmbient(0.5);
        //actor_pos->GetProperty()->SetSpecular(0.5);
        //actor_pos->GetProperty()->SetSpecularPower(100.0);
        //actor_pos->GetProperty()->SetOpacity(opacity);


        m_renderer->AddActor(actor_pos);
        //mapper_pos->Delete();
    }


    if(numberPoints_neg>10 && isNegLobeVisible )
    {
        for(uint i=0;i<numberPoints_neg;i++)
        {
            ao->pData_n->GetPoints()->GetPoint(i,v);
            //psi=ao->psi_byName(v[0],v[1],v[2]);
            psi=ao-> calc_Psi(v[0],v[1],v[2]);
            //psi=psi_cart(ao->get_n(),ao->get_l(),ao->get_m(),v[0],v[1],v[2]);
            value_psi_neg.push_back(psi);
        }



        auto scalars = vtkSmartPointer<vtkFloatArray>::New();
        for(uint i = 0; i < value_psi_neg.size(); i++)
            scalars->InsertTuple1(i, scale*value_psi_neg[i]);
        ao->pData_n->GetPointData()->SetScalars(scalars);


        auto actor_neg = vtkActor::New();
        initializeActor(actor_neg);
        actor_neg->GetProperty()->SetOpacity(opacity_neg);
        actor_neg->SetPickable(false);

        auto mapper_neg = vtkPolyDataMapper::New();
        mapper_neg->SetLookupTable(pColorTable);
        mapper_neg->SetScalarRange(scalarRange);
        mapper_neg->ScalarVisibilityOn();
        mapper_neg->SetInputData(ao->pData_n);
        actor_neg->SetMapper(mapper_neg);

        //actor_pos->GetProperty()->SetInterpolationToGouraud();

        //actor_pos->GetProperty()->SetDiffuse(1.0);
        //actor_pos->GetProperty()->SetAmbient(0.5);
        //actor_pos->GetProperty()->SetSpecular(0.5);
        //actor_pos->GetProperty()->SetSpecularPower(100.0);
        //actor_pos->GetProperty()->SetOpacity(opacity);
        actor_neg->SetPickable(false);

        m_renderer->AddActor(actor_neg);
        //mapper_neg->Delete();
    }
}

void View3D::renderOrbital()
{
    AO *  ao = mainWin->getAO();
    if ( !ao || ao==nullptr)
        return;


    if (isCloudVisible) {
        //cout<<"isCloudVisible"<<endl;
        renderCloud();
        //cout<<"renderCloud done!"<<endl;
        return;
    }


    if(isColoMapSurface)
    {
        renderColorMapOrbital();
        return;
    }


    double color1[3], //positive lobe
           color2[3]; //negtive lobe

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

    if (isPosLobeVisible && ao->pData_p->GetNumberOfPoints()>20)
    {
        auto actor_pos = vtkActor::New();
        initializeActor(actor_pos);

        auto mapper_pos = vtkPolyDataMapper::New();

        actor_pos->GetProperty()->SetColor(color1);
        actor_pos->GetProperty()->SetOpacity(opacity_pos);
        actor_pos->SetPickable(false);

        mapper_pos->ScalarVisibilityOff();

        if (visible_pos_Lobe_Mesh) {
            actor_pos->GetProperty()->SetLineWidth(orbitalLineWidth);
            actor_pos->GetProperty()->SetRepresentationToWireframe();
            actor_pos->GetProperty()->ShadingOff();
        }


        mapper_pos->SetInputData(ao->pData_p);
        actor_pos->SetMapper(mapper_pos);
        actor_pos->GetProperty()->SetInterpolationToGouraud();

        //actor_pos->GetProperty()->SetInterpolationToPhong();


        actor_pos->GetProperty()->SetDiffuse(1.0);
        actor_pos->GetProperty()->SetAmbient(0.5);
        actor_pos->GetProperty()->SetSpecular(0.5);
        actor_pos->GetProperty()->SetSpecularPower(100.0);
        actor_pos->GetProperty()->SetOpacity(opacity_pos);
        actor_pos->SetPickable(false);

        m_renderer->AddActor(actor_pos);
        mapper_pos->Delete();
    }


    if (isNegLobeVisible && ao->pData_n->GetNumberOfPoints()>20)
    {
        auto actor_neg = vtkActor::New();
        initializeActor(actor_neg);
        auto mapper_neg = vtkPolyDataMapper::New();

        actor_neg->GetProperty()->SetColor(color2);
        actor_neg->GetProperty()->SetOpacity(opacity_neg);
        mapper_neg->ScalarVisibilityOff();

        if (visible_neg_Lobe_Mesh)
        {
            actor_neg->GetProperty()->ShadingOff();
            actor_neg->GetProperty()->SetLineWidth(orbitalLineWidth);
            actor_neg->GetProperty()->SetRepresentationToWireframe();
            mapper_neg->ScalarVisibilityOff();
        }

        mapper_neg->SetInputData(ao->pData_n);
        actor_neg->SetMapper(mapper_neg);
        actor_neg->GetProperty()->SetInterpolationToGouraud();
        actor_neg->SetPickable(false);

        actor_neg->GetProperty()->SetDiffuse(1.0);
        actor_neg->GetProperty()->SetAmbient(0.5);
        actor_neg->GetProperty()->SetSpecular(0.5);
        actor_neg->GetProperty()->SetSpecularPower(100.0);
        actor_neg->GetProperty()->SetOpacity(opacity_neg);
        actor_neg->GetProperty()->ShadingOff();

        //isSurfaceTransParent

        m_renderer->AddActor(actor_neg);
        mapper_neg->Delete();
    }

    //refreshView();
}







void View3D::renderLine(double p0[3],double p1[3],double color[3],float width)
{
    auto lineSource =  vtkSmartPointer<vtkLineSource>::New();
    lineSource->SetPoint1(p0);
    lineSource->SetPoint2(p1);
    lineSource->Update();

    auto lineActor = vtkActor::New();
    initializeActor(lineActor);

    auto lineMapper = vtkPolyDataMapper::New();
    lineMapper->SetInputConnection(lineSource->GetOutputPort());


    lineActor->SetMapper(lineMapper);
    lineActor->GetProperty()->SetColor(color[0], color[1], color[2]);
    lineActor->GetProperty()->SetLineWidth(width);
    lineActor->SetPickable(false);
    //lineActor->SetUserTransform(transform);
    m_renderer->AddActor(lineActor);
}


void View3D::renderBox()
{
    if(!isBoxVisible) return;
    //if(isGridVisible) return;

    double color[3]={1.0,1.0,1.0};
    AO * ao = mainWin->getAO();

    if (ao==nullptr)      return;


    //double  minBox=ao->MinBox();
    //double  maxBox=ao->MaxBox();

    double  maxBox=ao->MaxBox();
    double  minBox=-maxBox;

    boxlineWidth=1.0;

    double p0[3] = { minBox, minBox, minBox};
    double p1[3] = { minBox, maxBox, minBox};
    double p2[3] = { maxBox, maxBox, minBox};
    double p3[3] = { maxBox, minBox, minBox};

    double p4[3] = { minBox, minBox, maxBox};
    double p5[3] = { minBox, maxBox, maxBox};
    double p6[3] = { maxBox, maxBox, maxBox};
    double p7[3] = { maxBox, minBox, maxBox};

    renderLine(p0,p1,color,boxlineWidth);
    renderLine(p1,p2,color,boxlineWidth);
    renderLine(p2,p3,color,boxlineWidth);
    renderLine(p0,p3,color,boxlineWidth);

    renderLine(p4,p5,color,boxlineWidth);
    renderLine(p5,p6,color,boxlineWidth);
    renderLine(p6,p7,color,boxlineWidth);
    renderLine(p4,p7,color,boxlineWidth);

    renderLine(p0,p4,color,boxlineWidth);
    renderLine(p1,p5,color,boxlineWidth);
    renderLine(p2,p6,color,boxlineWidth);
    renderLine(p3,p7,color,boxlineWidth);
}


void View3D::renderGrid()
{
    if(!isGridVisible) return;

    double color[3]={1.0,1.0,1.0};
    AO * ao = mainWin->getAO();

    if (ao==nullptr)      return;

    double  minBox=ao->MinBox();
    double  maxBox=ao->MaxBox();

    boxlineWidth=1.0;
    //double interval=2*ao->getInteval();
    int Ngrid=20;

    maxBox=mainWin->getBoxSize()/2.0;
    minBox=-maxBox;
    Ngrid=mainWin->getNGrids()/2;

    double x,y,z;
    for (int i=0;i<2;i++)
    {
        auto planeXOY = vtkSmartPointer<vtkPlaneSource>::New();

        planeXOY->SetNormal(0,0,1);
        //if (i>0)  planeXOY->SetNormal(0,0,1);

        planeXOY->SetCenter(0.0, 0.0, 0.0);

        z=minBox;
        if(i>0) z=maxBox;

        planeXOY->SetOrigin(minBox, minBox, z);
        planeXOY->SetPoint1(minBox, maxBox, z);
        planeXOY->SetPoint2(maxBox, minBox, z);

        planeXOY->SetXResolution(Ngrid);
        planeXOY->SetYResolution(Ngrid);

        planeXOY->Update();

        auto planeActor = vtkActor::New();
        initializeActor(planeActor);
        auto planeMapper = vtkPolyDataMapper::New();
        planeMapper->SetInputConnection(planeXOY->GetOutputPort());

        planeActor->SetMapper(planeMapper);
        planeActor->GetProperty()->SetColor(color[0], color[1], color[2]);

        planeActor->GetProperty()->SetLineWidth(boxlineWidth);

        planeActor->GetProperty()->SetRepresentationToWireframe();
        planeActor->GetProperty()->SetLighting(false);
        planeActor->SetPickable(false);

        m_renderer->AddActor(planeActor);
    }


    for (int i=0;i<2;i++)
    {
        auto planeXOZ = vtkSmartPointer<vtkPlaneSource>::New();

        planeXOZ->SetNormal(0,1,0);
        //if (i>0)  planeXOY->SetNormal(0,0,1);

        planeXOZ->SetCenter(0.0, 0.0, 0.0);

        y=minBox;
        if(i>0) y=maxBox;

        planeXOZ->SetOrigin(minBox, y, minBox);
        planeXOZ->SetPoint1(minBox, y, maxBox);
        planeXOZ->SetPoint2(maxBox, y, minBox);

        planeXOZ->SetXResolution(Ngrid);
        planeXOZ->SetYResolution(Ngrid);

        planeXOZ->Update();

        auto planeActor = vtkActor::New();
        initializeActor(planeActor);
        auto planeMapper = vtkPolyDataMapper::New();
        planeMapper->SetInputConnection(planeXOZ->GetOutputPort());

        planeActor->SetMapper(planeMapper);
        planeActor->GetProperty()->SetColor(color[0], color[1], color[2]);

        planeActor->GetProperty()->SetLineWidth(boxlineWidth);

        planeActor->GetProperty()->SetRepresentationToWireframe();
        planeActor->GetProperty()->SetLighting(false);
        planeActor->SetPickable(false);

        m_renderer->AddActor(planeActor);
    }


    for (int i=0;i<2;i++)
    {
        auto planeYOZ = vtkSmartPointer<vtkPlaneSource>::New();

        planeYOZ->SetNormal(1,0,0);
        //if (i>0)  planeXOY->SetNormal(0,0,1);

        planeYOZ->SetCenter(0.0, 0.0, 0.0);

        x=minBox;
        if(i>0) x=maxBox;

        planeYOZ->SetOrigin(x,minBox,  minBox);
        planeYOZ->SetPoint1(x, minBox, maxBox);
        planeYOZ->SetPoint2(x, maxBox, minBox);

        planeYOZ->SetXResolution(Ngrid);
        planeYOZ->SetYResolution(Ngrid);

        planeYOZ->Update();

        auto planeActor = vtkActor::New();
        initializeActor(planeActor);
        auto planeMapper = vtkPolyDataMapper::New();
        planeMapper->SetInputConnection(planeYOZ->GetOutputPort());

        planeActor->SetMapper(planeMapper);
        planeActor->GetProperty()->SetColor(color[0], color[1], color[2]);

        planeActor->GetProperty()->SetLineWidth(boxlineWidth);

        planeActor->GetProperty()->SetRepresentationToWireframe();
        planeActor->GetProperty()->SetLighting(false);
        planeActor->SetPickable(false);

        m_renderer->AddActor(planeActor);
    }
}




void View3D::removeAllActors()
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


void View3D::removeLastActor()
{
    vtkActor * actor = m_renderer->GetActors()->GetLastActor();

    if (actor != nullptr)
        m_renderer->RemoveActor(actor);
}


void View3D::zoomToExtent()
{
    // Zoom to extent of last added actor
    vtkSmartPointer<vtkActor> actor = m_renderer->GetActors()->GetLastActor();
    if (actor != nullptr)
        m_renderer->ResetCamera(actor->GetBounds());

    //renderVTK();
}

void View3D:: onView_rotateLeft(double degree)
{
    camera->Azimuth(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void View3D:: onView_rotateRight(double degree)
{
    camera->Azimuth(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void View3D::getLengthFromAO()
{
    double l=2.0;
    if(mainWin->getAO())
        l = mainWin->getAO()->MaxBox();
    xLength=yLength=zLength=l;
}


void View3D::renderXYZAxis()
{
    if(!isAxisVisible) return;

    double maxLength=1.0;

    if(needCalculate) {
        getLengthFromAO();
        maxLength=xLength;
    }
    else
         maxLength=max3(xLength,yLength,zLength);
    double radius=maxLength*0.02;


    double l=0.0;

    for(int i=1;i<4;i++)
    {
        auto line1 = vtkSmartPointer<vtkLineSource>::New();
        switch(i){
        case 1:
            l=xLength*0.9;
            line1->SetPoint1(-l,0,0);
            line1->SetPoint2(l,0,0);
            break;
        case 2:
            l=yLength*0.9;
            line1->SetPoint1(0,-l,0);
            line1->SetPoint2(0,l,0);
            break;
        case 3:
            l=zLength*0.9;
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
        initializeActor(actor);
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
    auto actor1 = vtkActor::New();initializeActor(actor1);
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
        transform2->Translate(l*1.2,-0.2,0.0);
        labelActor->GetProperty()->SetColor(xColor[0],xColor[1],xColor[2]);
        break;
    case 2:
        axesLabel->SetText("y");
        transform2->Translate(-0.2,l*1.2,0.0);
        labelActor->GetProperty()->SetColor(yColor[0],yColor[1],yColor[2]);
        break;
    case 3:
        axesLabel->SetText("z");
        transform2->Translate(-0.2,-0.2,l*1.2);
        labelActor->GetProperty()->SetColor(zColor[0],zColor[1],zColor[2]);
        break;
    }
    double scale=1.0;
    scale=l*0.1;
    transform2->PostMultiply();
    labelActor->SetMapper(labelMapper);
    labelActor->SetScale(scale,scale,scale);
    labelActor->SetUserTransform(transform2);
    labelActor->SetCamera(m_renderer->GetActiveCamera());
    labelMapper->ScalarVisibilityOn();
    labelMapper->SetInputConnection(axesLabel->GetOutputPort());

    m_renderer->AddViewProp(labelActor);
    }

    //cout << "render axis ok inside View3D"<<endl;
}

void View3D::closeEvent(QCloseEvent *event)
{
    //this->showMinimized();

    //this->nativeParentWidget()->hide();

    mainWin->hideActiveSubWindow();
    event->ignore();

    //QVTKOpenGLNativeWidget::closeEvent(event);
}




