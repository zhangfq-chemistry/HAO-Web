#include "Radial3D.h"


#include "AO.h"

#include <vtkFloatArray.h>
#include <vtkLookupTable.h>
#include <vtkObjectFactory.h>
#include <vtkWindowToImageFilter.h>
#include <vtkPNGWriter.h>
#include <vtkSampleFunction.h>
#include <vtkColorTransferFunction.h>
#include <vtkLightCollection.h>
#include <vtkLight.h>
#include <vtkContourFilter.h>
#include <vtkTextSource.h>
#include <vtkFollower.h>

#include <QtWidgets/QVBoxLayout>
#include "mainwindow.h"

//vtkCxxMacro(MyActor, "$Revision: 1.45 $");
//vtkStandardNewMacro(MyActor);





void Radial3D:: writePNG(QString name)
{
    //vector3 color=bkcolor,white(1.0,1.0,1.0);
    //setBKColor(white);

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



void Radial3D::interP(vector3 p0, vector3 p1, int num, std::vector <vector3> & ColorMaps)
{
    vector3 step=(p1-p0)/num;
    int i=0;

    while (i < num)
    {
        ColorMaps.push_back(p0+i*step);
        i++;
    }
}

void Radial3D::clearData()
{
    if (pData_RDF!=nullptr)
        pData_RDF->Delete();

    if (pData_R!=nullptr)
        pData_R->Delete();


    if (pData_R2!=nullptr)
        pData_R2->Delete();


    if (proj_RDF!=nullptr)
        proj_RDF->Delete();

    if (proj_R!=nullptr)
        proj_R->Delete();


    if (proj_R2!=nullptr)
        proj_R2->Delete();
}



Radial3D::Radial3D(QWidget *parent): QVTKOpenGLNativeWidget(parent)
{
    this->setWindowTitle("径向分布函数");

    vtkNew<vtkGenericOpenGLRenderWindow> window;
    setRenderWindow(window.Get());

    //background color
    bkcolor.Set(0.4,0.5,0.5);

    //bkcolor.Set(1.0,1.0,1.0);


    // Camera
    camera = vtkSmartPointer<vtkCamera>::New();
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,100);
    camera->SetFocalPoint(0,0,0);
    camera->SetParallelScale(90.0);
    camera->ParallelProjectionOn();

    // Renderer
    m_renderer = vtkSmartPointer<vtkRenderer>::New();
    m_renderer->SetActiveCamera(camera);
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->AddRenderer(m_renderer);

    m_renderer->LightFollowCameraOn();
    m_renderer->TwoSidedLightingOn();


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


    lineWidth=2.0;

    scalarRange[0]=-1.0;
    scalarRange[1]=1.0;

    RVisible=RDFVisible=R2Visible=meshVisible=false;
    pData_RDF=nullptr;
    pData_R=nullptr;
    pData_R2=nullptr;

    buildColorTable();
}

void Radial3D::setBKColor( vector3 color)
{
    bkcolor=color;
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->Render();
}

void Radial3D::sendMessage(QString  message)
{
    mainWindow->sendMessage(message);
}

void Radial3D::appendMessage(QString  message)
{
    mainWindow->appendMessage(message);
}


void Radial3D::buildColorTable()
{
    sendMessage("Building color table for projection orbital ... ");

    // Create the color map
    pColorTable=vtkLookupTable::New();
    // pColorTable->SetHueRange(0.63, 0.0);
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


    //cout << "-------------------------------------"<<endl;
    //cout << "ColorMaps.size() "<<ColorMaps.size()<<endl;


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


    appendMessage("OK!");
}






void Radial3D::renderLine(double p0[3],double p1[3],double color[3],float width)
{
    auto lineSource =  vtkSmartPointer<vtkLineSource>::New();
    lineSource->SetPoint1(p0);
    lineSource->SetPoint2(p1);
    lineSource->Update();

    auto lineActor = vtkActor::New();


    auto lineMapper = vtkPolyDataMapper::New();
    lineMapper->SetInputConnection(lineSource->GetOutputPort());


    lineActor->SetMapper(lineMapper);
    lineActor->GetProperty()->SetColor(color[0], color[1], color[2]);
    lineActor->GetProperty()->SetLineWidth(width);
    //lineActor->SetUserTransform(transform);

    m_renderer->AddActor(lineActor);
    lineMapper->Delete();
}


void Radial3D::renderScene()
{
    removeAllActors();
    renderObital();
    renderAxis();
    renderWindow()->Render();
}

void Radial3D::renderAxis()
{
    if (!isAxisVisible) return;

    AO * ao = mainWindow->getAO();

     if(!ao || ao==nullptr)  return;

    QString label="X";
    double length=ao->getRDF_radius()+3.0;
    double height=length;

    double shift=0.1;
    if(is2DVisible)
        shift=maxBox;

    double l=length/20.0;
    if(1)
    {
        auto lineSource =  vtkSmartPointer<vtkLineSource>::New();

        auto lineSource1 =  vtkSmartPointer<vtkLineSource>::New();
        auto lineSource2 =  vtkSmartPointer<vtkLineSource>::New();

        auto lineSource3 =  vtkSmartPointer<vtkLineSource>::New();
        auto lineSource4 =  vtkSmartPointer<vtkLineSource>::New();

        auto actor = vtkSmartPointer<vtkActor>::New();

        auto actor1 = vtkSmartPointer<vtkActor>::New();
        auto actor2 = vtkSmartPointer<vtkActor>::New();
        auto actor3 = vtkSmartPointer<vtkActor>::New();
        auto actor4 = vtkSmartPointer<vtkActor>::New();


        //lineSource->SetPoint1(-length, 0, shift);
        lineSource->SetPoint1(0.0, 0, shift);
        lineSource->SetPoint2(length, 0, shift);

        lineSource1->SetPoint1(length, 0, shift);
        lineSource2->SetPoint1(length, 0, shift);
        lineSource1->SetPoint2(length-l, l, shift);
        lineSource2->SetPoint2(length-l,-l, shift);

        lineSource3->SetPoint1(-length, 0, shift);
        lineSource4->SetPoint1(-length, 0, shift);

        lineSource3->SetPoint2(-length+l, l, shift);
        lineSource4->SetPoint2(-length+l,-l, shift);

        actor->GetProperty()->SetLineWidth(1.0);
        actor->GetProperty()->SetColor(1, 1, 0);
        actor1->GetProperty()->SetColor(1, 1, 0);
        actor2->GetProperty()->SetColor(1, 1, 0);
        actor3->GetProperty()->SetColor(1, 1, 0);
        actor4->GetProperty()->SetColor(1, 1, 0);

        label= "r";

        auto  mapper = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper->SetInputConnection(lineSource->GetOutputPort());
        actor->SetMapper(mapper);
        m_renderer->AddActor(actor);

        auto  mapper1 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper1->SetInputConnection(lineSource1->GetOutputPort());
        actor1->SetMapper(mapper1);
        m_renderer->AddActor(actor1);

        auto  mapper2 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper2->SetInputConnection(lineSource2->GetOutputPort());
        actor2->SetMapper(mapper2);
        m_renderer->AddActor(actor2);

        /*
        auto  mapper3 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper3->SetInputConnection(lineSource3->GetOutputPort());
        actor3->SetMapper(mapper3);
        m_renderer->AddActor(actor3);

        auto  mapper4 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper4->SetInputConnection(lineSource4->GetOutputPort());
        actor4->SetMapper(mapper4);
        m_renderer->AddActor(actor4);
*/


        for(int i=0;i<1;i++)
        {
            auto textSource = vtkSmartPointer<vtkTextSource>::New();
            textSource->SetForegroundColor(0.0, 0.0, 1.0);
            textSource->BackingOff();

            auto textActor =  vtkSmartPointer<vtkFollower>::New();
            textSource->SetForegroundColor(1.0, 1.0, 0.0);

            switch  (i) {
            case 0:
                textActor->AddPosition(length+l,-0.8,shift);
                textSource->SetText("r");
                break;
            case 1:
                textActor->AddPosition(-length-l,-0.8,shift);
                textSource->SetText("r");
                break;
            case 2:
                if(is2DVisible)
                    textActor->AddPosition(0.0,-l,shift-2*l);
                else
                    textActor->AddPosition(-l,-0,shift);
                textSource->SetText("0");
                break;
            }


            textSource->Update();
            auto  textMapper =  vtkSmartPointer<vtkPolyDataMapper>::New();
            textMapper->SetInputConnection(textSource->GetOutputPort());

            textActor->SetPickable(false);
            textActor->SetMapper(textMapper);

            if(mainWindow->getAO()->get_n()<2)
                textActor->SetScale(0.2, 0.2, 0.2);
            else
                textActor->SetScale(0.4, 0.4, 0.4);

            textActor->SetCamera(camera);
            m_renderer->AddActor(textActor);
        }
    }

    if(2)
    {
        auto lineSource =  vtkSmartPointer<vtkLineSource>::New();
        auto lineSource1 =  vtkSmartPointer<vtkLineSource>::New();
        auto lineSource2 =  vtkSmartPointer<vtkLineSource>::New();


        auto actor = vtkSmartPointer<vtkActor>::New();
        auto actor1 = vtkSmartPointer<vtkActor>::New();
        auto actor2 = vtkSmartPointer<vtkActor>::New();


        lineSource1->SetPoint2(length-l, l, shift);
        lineSource2->SetPoint2(length-l,-l, shift);


        if(RVisible)    label= "R";
        if(R2Visible)   label= "R*R";
        if(RDFVisible)  label= "RDF";

        lineSource->SetPoint1(0,0,shift);
        lineSource->SetPoint2(0,0,shift+height);


        lineSource1->SetPoint1(0,0,shift+height);
        lineSource2->SetPoint1(0,0,shift+height);

        lineSource1->SetPoint2(l,0,shift+height-l);
        lineSource2->SetPoint2(-l,0,shift+height-l);

        actor->GetProperty()->SetColor(0, 0, 1);
        actor1->GetProperty()->SetColor(0, 0, 1);
        actor2->GetProperty()->SetColor(0, 0, 1);


        auto  mapper = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper->SetInputConnection(lineSource->GetOutputPort());
        actor->SetMapper(mapper);
        m_renderer->AddActor(actor);



        auto  mapper1 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper1->SetInputConnection(lineSource1->GetOutputPort());
        actor1->SetMapper(mapper1);
        m_renderer->AddActor(actor1);

        auto  mapper2 = vtkSmartPointer<vtkPolyDataMapper>::New();
        mapper2->SetInputConnection(lineSource2->GetOutputPort());
        actor2->SetMapper(mapper2);
        m_renderer->AddActor(actor2);


        auto textSource = vtkSmartPointer<vtkTextSource>::New();
        textSource->SetText(label.toStdString().c_str());
        textSource->SetForegroundColor(0.0, 0.0, 1.0);
        textSource->BackingOff();


        auto textActor =  vtkSmartPointer<vtkFollower>::New();

        textSource->SetForegroundColor(0, 0, 1);
        textActor->AddPosition(-0.5, -0.1, shift+length+l);
        //textActor->GetProperty()->SetColor(0, 0, 1);

        textSource->Update();
        auto  textMapper =  vtkSmartPointer<vtkPolyDataMapper>::New();
        textMapper->SetInputConnection(textSource->GetOutputPort());

        textActor->SetPickable(false);
        textActor->SetMapper(textMapper);

        if(mainWindow->getAO()->get_n()<2)
            textActor->SetScale(0.2, 0.2, 0.2);
        else
            textActor->SetScale(0.4, 0.4, 0.4);

        textActor->SetCamera(camera);
        m_renderer->AddActor(textActor);
    }
}



void Radial3D::renderOutLine()
{
    AO * ao = mainWindow->getAO();

    lineWidth=0.5;
    double color[3]={1.,1.,1.};

    double bounds[6];
    pData->GetBounds(bounds);
    double min = bounds[4];
    double max = bounds[5];

    if(!is2DVisible) return;

    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->RotateX(90);
    transform->Translate(0.0,0.0,trans/2.0);


    double r=ao->getRDF_radius();
    if(r<1.0) return;

    auto cylinder =vtkSmartPointer<vtkCylinderSource>::New();
    cylinder->SetCapping(false);
    cylinder->SetHeight(trans);
    cylinder->SetResolution(100);
    //cylinder->SetCenter(0.0,0.0,height);
    cylinder->SetRadius(r);

    auto mapper_cylinder = vtkSmartPointer<vtkPolyDataMapper>::New();
    auto actor_cylinder =  vtkSmartPointer<vtkActor>::New();

    mapper_cylinder->SetInputConnection(cylinder->GetOutputPort());;
    actor_cylinder->GetProperty()->SetColor(0.9,0.9,0.9);
    actor_cylinder->SetPickable(false);

    actor_cylinder->GetProperty()->ShadingOn();
    actor_cylinder->GetProperty()->SetOpacity(0.2);

    actor_cylinder->SetMapper(mapper_cylinder);
    actor_cylinder->SetUserTransform(transform);
    m_renderer->AddActor(actor_cylinder);
}


void Radial3D::renderCurve()
{
    //maxBox=mainWindow->getAO()->MaxBox();

    double trans0=0.1;
    if(is2DVisible)
        trans0=trans;

    auto plane =  vtkSmartPointer<vtkPlane>::New();
    plane->SetOrigin(0,0,0);
    plane->SetNormal(0,1,0);

    auto plane0 =  vtkSmartPointer<vtkPlane>::New();
    plane0->SetOrigin(0,0,0);
    plane0->SetNormal(1,0,0);

    // Create cutter
    auto cutter_line =  vtkSmartPointer<vtkCutter>::New();
    cutter_line->SetCutFunction(plane);
    cutter_line->SetInputData(pData);
    cutter_line->Update();


    auto points = vtkSmartPointer<vtkPoints>::New();

    //filter cutter
    for (int i=0;i<cutter_line->GetOutput()->GetNumberOfPoints();i++)
    {
        double * p = cutter_line->GetOutput()->GetPoint(i);
        if (p[0] < 0.0) continue;
        points->InsertNextPoint(p);
    }

    auto line = vtkSmartPointer<vtkLineSource>::New();
    line->SetPoints(points);
    line->Update();


    if(!isCurveVisible) return;



    for(int k=0;k<181;k=k+180)
    {
        auto transform =  vtkSmartPointer<vtkTransform>::New();
        transform->PostMultiply();
        transform->RotateZ(k);
        transform->Translate(0.0,0.0,trans0);

        auto actor_line = vtkActor::New();
        auto mapper_line = vtkPolyDataMapper::New();

        mapper_line->SetInputData(line->GetOutput());
        mapper_line->ScalarVisibilityOff();
        mapper_line->SetScalarRange(scalarRange);

        actor_line->SetMapper(mapper_line);
        actor_line->GetProperty()->SetLineWidth(2.0);
        //actor_line->GetProperty()->SetColor(0.0, 0.0, 1.0);
        actor_line->SetUserTransform(transform);

        //actor_line->GetProperty()->SetOpacity(0.6);
        m_renderer->AddActor(actor_line);
        mapper_line->Delete();
    }
}






void Radial3D::renderObital2D()
{
    if (!is2DVisible) return;

    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->Translate(0.0,0.0,trans);
    transform->Update();

    if(!is2DClipped)
    {
        auto actor = vtkActor::New();
        actor->GetProperty()->SetDiffuse(0.5);
        actor->GetProperty()->SetAmbient(0.3);
        actor->GetProperty()->SetSpecular(0.2);
        actor->GetProperty()->SetSpecularPower(10.0);
        //actor->GetProperty()->SetOpacity(0.8);
        //actor->SetUserTransform(transform);


        auto mapper = vtkPolyDataMapper::New();
        mapper->SetLookupTable(pColorTable);

        mapper->SetInputData(pData);


        mapper->SetScalarRange(scalarRange);
        mapper->ScalarVisibilityOn();

        actor->SetMapper(mapper);
        actor->SetUserTransform(transform);
        //actor->GetProperty()->SetOpacity(0.99);
        m_renderer->AddActor(actor);
        mapper->Delete();
        return;
    }
    else
    {
        auto plane =  vtkSmartPointer<vtkPlane>::New();
        plane->SetOrigin(0,0,0);
        plane->SetNormal(0,1,0);

        auto pData1 = vtkSmartPointer<vtkPolyData>::New();
        pData1->DeepCopy(pData);

        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetClipFunction(plane);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        clipper->SetInputData(pData1);
        clipper->Update();


        pData1->DeepCopy(clipper->GetOutput());

        double bounds[6];
        pData1->GetBounds(bounds);
        double min = bounds[4];
        double max = bounds[5];

        //clipperYZ->SetValue(0.0)


        auto scalars = vtkSmartPointer<vtkFloatArray>::New();
        for(int i = 0; i < pData1->GetNumberOfPoints(); i++)
        {
            double * p = pData1->GetPoint(i);
            p[2]=p[2]*maxBox*0.9/max;  //correspond to red

            pData1->GetPoints()->SetPoint(i,p);
            scalars->InsertTuple1(i, p[2]/maxBox);
        }
        pData1->GetPointData()->SetScalars(scalars);

        auto actor = vtkActor::New();
        actor->GetProperty()->SetDiffuse(0.5);
        actor->GetProperty()->SetAmbient(0.3);
        actor->GetProperty()->SetSpecular(0.2);
        actor->GetProperty()->SetSpecularPower(10.0);
        actor->SetUserTransform(transform);

        //actor->SetUserTransform(transform);


        auto mapper = vtkPolyDataMapper::New();
        mapper->SetLookupTable(pColorTable);

        mapper->SetInputData(pData1);


        mapper->SetScalarRange(scalarRange);
        mapper->ScalarVisibilityOn();

        actor->SetMapper(mapper);
        //actor->GetProperty()->SetOpacity(0.99);
        m_renderer->AddActor(actor);
        mapper->Delete();
    }

}


void Radial3D::renderObital3D()
{
    AO * ao = mainWindow->getAO();

    proj_Data = vtkPolyData::New();
    proj_Data->DeepCopy(pData);

    //#pragma omp parallel for
    for (int i=0;i<proj_Data->GetNumberOfPoints();i++)
    {
        double * p = proj_Data->GetPoint(i);
        p[2]=0.0;
        proj_Data->GetPoints()->SetPoint(i,p);
    }
    proj_Data->GetPointData()->SetScalars(scalars);


    auto actor1 = vtkActor::New();
    actor1->GetProperty()->SetDiffuse(0.3);
    actor1->GetProperty()->SetAmbient(0.5);
    actor1->GetProperty()->SetSpecular(0.2);
    actor1->GetProperty()->SetSpecularPower(10.0);

    auto mapper1 = vtkPolyDataMapper::New();
    mapper1->SetLookupTable(pColorTable);
    mapper1->SetInputData(proj_Data);
    mapper1->SetScalarRange(scalarRange);
    mapper1->ScalarVisibilityOn();
    //actor1->SetUserTransform(transform);

    actor1->SetMapper(mapper1);
    //actor1->GetProperty()->SetOpacity(0.8);
    m_renderer->AddActor(actor1);
    mapper1->Delete();



    auto halfSphere = vtkSphereSource::New();
    halfSphere->SetPhiResolution(50);
    halfSphere->SetThetaResolution(50);
    halfSphere->SetRadius(ao->getRDF_radius());
    halfSphere->SetStartPhi(90.0);
    halfSphere->SetEndPhi(180.0);
    halfSphere->Update();

    auto actor = vtkActor::New();
    auto mapper = vtkPolyDataMapper::New();
    actor->GetProperty()->SetColor(1.0,1.0,1.0);
    actor->SetMapper(mapper);

    actor->GetProperty()->ShadingOn();
    actor->GetProperty()->SetDiffuse(0.2);
    actor->GetProperty()->SetAmbient(0.2);
    actor->GetProperty()->SetSpecular(0.1);
    actor->GetProperty()->SetSpecularPower(1.0);

    /*
    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->Translate(0.0,0.0,-height+minBox);
    transform->Update();
    actor->SetUserTransform(transform);
*/

    mapper->SetInputConnection(halfSphere->GetOutputPort());
    mapper->ScalarVisibilityOn();
    m_renderer->AddActor(actor);
    mapper->Delete();
}


void Radial3D::renderObital()
{
    lineWidth=2.0;

    double color[3]={1.,1.,1.};

    AO * ao = mainWindow->getAO();
    if (ao==nullptr || (!ao) )
        return;

    maxBox=ao->MaxBox();

    trans=maxBox ;



    if(!RVisible && !R2Visible && !RDFVisible)
    {
        setWindowTitle("三种径向函数");
        return;
    }

    if (pData!=nullptr)
        pData->Delete();


    pData=vtkPolyData::New();
    if(RVisible)  {
        setWindowTitle("径向函数");
        if(ao->pData_R==nullptr)
            ao->buildRSurface();
        //cout<<"ao->buildRSurface() done--------------";
        pData->DeepCopy(ao->pData_R);
    }
    //cout<<"ao->buildRSurface() done--------------";

    if(R2Visible) {
        this->setWindowTitle("径向密度函数");
        if(ao->pData_R2==nullptr)
            ao->buildR2Surface();
        pData->DeepCopy(ao->pData_R2);
    }

    if(RDFVisible) {
        setWindowTitle("径向分布函数");
        pData->DeepCopy(ao->pData_RDF);
    }



    double bounds[6];
    pData->GetBounds(bounds);
    double min = bounds[4];
    double max = bounds[5];



    scalars = vtkFloatArray::New();
    //#pragma omp parallel for
    for(int i = 0; i < pData->GetNumberOfPoints(); i++)
    {
        double * p = pData->GetPoint(i);

        p[2]=p[2]*maxBox*0.9/max;  //correspond to red

        pData->GetPoints()->SetPoint(i,p);
        scalars->InsertTuple1(i, p[2]/maxBox);
    }
    pData->GetPointData()->SetScalars(scalars);

    renderObital2D();
    renderObital3D();
    renderCurve();
    renderOutLine();

}



void Radial3D::removeAllActors()
{
    vtkActorCollection* actorCollection = m_renderer->GetActors();
    int numActors = actorCollection->GetNumberOfItems();
    actorCollection->InitTraversal();

    for (int i=0;i<numActors;++i)
    {
        vtkActor * actor = actorCollection->GetNextActor();
        m_renderer->RemoveActor(actor);
    }
}


void Radial3D::removeLastActor()
{
    vtkActor * actor = m_renderer->GetActors()->GetLastActor();
    if (actor != nullptr) m_renderer->RemoveActor(actor);
}







void Radial3D::zoomToExtent()
{
    // Zoom to extent of last added actor
    vtkSmartPointer<vtkActor> actor = m_renderer->GetActors()->GetLastActor();
    if (actor == nullptr) return;

    m_renderer->ResetCamera(actor->GetBounds());
}




void Radial3D:: onViewXY()
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

void Radial3D:: onViewXZ()
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

void Radial3D:: onViewYZ()
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


void Radial3D:: onViewReset()
{
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,30);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Radial3D:: onView_rotateClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();

}

void Radial3D:: onView_rotateCounterClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle+degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Radial3D:: onView_rotateUp(double degree)
{
    //camera->Pitch(-5);
    camera->Elevation(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}
void Radial3D:: onView_rotateDown(double degree)
{
    //camera->Pitch(5);
    camera->Elevation(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Radial3D:: onView_rotateLeft(double degree)
{
    camera->Azimuth(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Radial3D:: onView_rotateRight(double degree)
{
    camera->Azimuth(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void Radial3D::closeEvent(QCloseEvent *event)
{
    //this->showMinimized();

    //this->nativeParentWidget()->hide();
    //this->hide();


    mainWindow->hideActiveSubWindow();
    event->ignore();

    //QVTKOpenGLNativeWidget::closeEvent(event);
}
