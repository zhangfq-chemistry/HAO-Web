#include "Proj3D.h"
#include "AO.h"

#include <vtkFloatArray.h>
#include <vtkLookupTable.h>
#include <vtkObjectFactory.h>
#include <vtkWindowToImageFilter.h>
#include <vtkPNGWriter.h>
#include <vtkSampleFunction.h>
#include <vtkColorTransferFunction.h>
#include <vtkColorSeries.h>
#include <vtkLightCollection.h>
#include <vtkLight.h>
#include <vtkContourFilter.h>

#include <QtWidgets/QVBoxLayout>
#include "mainwindow.h"






void Proj3D:: writePNG(QString name)
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



void Proj3D::interP(vector3 p0, vector3 p1, int num, std::vector <vector3> & ColorMaps)
{
    vector3 step=(p1-p0)/num;
    int i=0;

    while (i < num)
    {
        ColorMaps.push_back(p0+i*step);
        i++;
    }
}




Proj3D::Proj3D(QWidget *parent): QVTKOpenGLNativeWidget(parent)
{
    this->setWindowTitle("Projection 3D");

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
    camera->SetParallelScale(9.0);
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

    //m_renderer->SetGradientBackground(true);
    //m_renderer->SetBackground(color1.red() / 255.0, color1.green() / 255.0, color1.blue() / 255.0);
    //m_renderer->SetBackground2(color2.red() / 255.0, color2.green() / 255.0, color2.blue() / 255.0);


    lineWidth=2.0;

    scalarRange[0]=-1.0;
    scalarRange[1]=1.0;

    buildColorTable();

    setDefaultColor();
}

void Proj3D::setBKColor( vector3 color)
{
    bkcolor=color;
    m_renderer->SetBackground(bkcolor.x(), bkcolor.y(), bkcolor.z());
    renderWindow()->Render();
}

void Proj3D::sendMessage(QString  message)
{
    mainWindow->sendMessage(message);
}

void Proj3D::appendMessage(QString  message)
{
    mainWindow->appendMessage(message);
}


void Proj3D::buildColorTable()
{
    sendMessage("Building color table for projection orbital ... ");

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




void Proj3D::renderLine(double p0[3],double p1[3],double color[3],float width,
                    vtkTransform * transform, int id_ao)
{
    auto lineSource =  vtkSmartPointer<vtkLineSource>::New();
    lineSource->SetPoint1(p0);
    lineSource->SetPoint2(p1);
    lineSource->Update();

    auto lineActor = vtkActor::New();
    /* VTK actor id removed for stock VTK build */;


    auto lineMapper = vtkPolyDataMapper::New();
    lineMapper->SetInputConnection(lineSource->GetOutputPort());


    lineActor->SetMapper(lineMapper);
    lineActor->GetProperty()->SetColor(color[0], color[1], color[2]);
    lineActor->GetProperty()->SetLineWidth(width);
    lineActor->SetUserTransform(transform);

    m_renderer->AddActor(lineActor);
    lineMapper->Delete();
}


void Proj3D::renderScene()
{
    removeAllActors();
    generateObital();
    renderSemiOrbital();
    renderWindow()->Render();
}


void Proj3D::generateObital_1()
{
    //cout <<"Generate the projection-orbitals ..."<<endl;

    lineWidth=1.0;
    double minBox, maxBox;
    int scale=1;
    double color[3]={1.,1.,1.};


    AO * ao = mainWindow->getAO();
    if (ao==nullptr)
        return;


    //cout << "generate orbital : " <<ao->dataXOY.size() +ao->dataYOZ.size() +ao->dataXOZ.size()<<endl;
    if ( ao->dataXOY.size() +ao->dataYOZ.size() +ao->dataXOZ.size() < 1 )
        return;

    scale=ao->get_projScale();


    double stepX=ao->getInteval()/scale,
           stepY=ao->getInteval()/scale,
           stepZ=ao->getInteval()/scale;

    int countX=scale*ao->getGridSize()+1,
        countY=scale*ao->getGridSize()+1,
        countZ=scale*ao->getGridSize()+1;


    minBox=ao->MinBox();
    maxBox=ao->MaxBox();



    //render cube outline
    auto cubePoints =  vtkSmartPointer<vtkPoints>::New();
    auto polyLines =   vtkSmartPointer<vtkCellArray>::New();
    auto branchIdData = vtkSmartPointer<vtkIntArray>::New();


    double trans=maxBox;

    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    auto points =  vtkSmartPointer<vtkPoints>::New();
    auto pointsSlice =  vtkSmartPointer<vtkPoints>::New();

    double x,y,z;

    double max=0.0;

    auto transform = vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();


    double p0[3] = { minBox, minBox, minBox-trans };
    double p1[3] = { minBox, maxBox, minBox-trans };
    double p2[3] = { maxBox, maxBox, minBox-trans };
    double p3[3] = { maxBox, minBox, minBox-trans };

    double p4[3] = { minBox, minBox, 0.0};
    double p5[3] = { minBox, maxBox, 0.0};
    double p6[3] = { maxBox, maxBox, 0.0};
    double p7[3] = { maxBox, minBox, 0.0};



    transform->Translate(0.0,0.0,(maxBox+trans)/2.0);


    renderLine(p0,p1,color,lineWidth,transform,id_ao);
    renderLine(p1,p2,color,lineWidth,transform,id_ao);
    renderLine(p2,p3,color,lineWidth,transform,id_ao);
    renderLine(p0,p3,color,lineWidth,transform,id_ao);

    renderLine(p4,p5,color,lineWidth,transform,id_ao);
    renderLine(p5,p6,color,lineWidth,transform,id_ao);
    renderLine(p6,p7,color,lineWidth,transform,id_ao);
    renderLine(p4,p7,color,lineWidth,transform,id_ao);

    renderLine(p0,p4,color,lineWidth,transform,id_ao);
    renderLine(p1,p5,color,lineWidth,transform,id_ao);
    renderLine(p2,p6,color,lineWidth,transform,id_ao);
    renderLine(p3,p7,color,lineWidth,transform,id_ao);



    //ProjOrbitaType {proj_XOY=1, proj_XOZ=2, proj_YOZ=3};
    //double minZ=100.0, maxZ=-100.0;
    if (ao->getProjType()==1)
    {
        if (ao->dataXOY.size()>0) {

            //#pragma omp parallel for
            for (int i = 0 ; i < countX; i++)
            {
                x = x0 + stepX*i;
                for (int j = 0; j < countY; j++)  {
                    y =  y0 + stepY*j;
                    z = ao->dataXOY[i][j];
                    points->InsertNextPoint(x, y, z);
                }
            }
        }
    }


    if (ao->getProjType()==3)
    {
        //dataYOZ[Ny][Nz]
        if (ao->dataYOZ.size()>0) {
            //#pragma omp parallel  for
            for(int j=0; j < countY;  j++)
            {
                y = y0 + stepY*j;
                for(int k=0; k < countZ;  k++) {
                    z =  z0 + stepZ*k;
                    x = ao->dataYOZ[j][k];
                    points->InsertNextPoint(y, z, x);
                }
            }
        }
    }



    if (ao->getProjType()==2)
    {
        if (ao->dataXOZ.size()>0)
        {
            //#pragma omp parallel for
            for (int i = 0 ; i < countX; i++)
            {
                x = x0 + stepX*i;
                for (int k = 0; k < countZ; k++)  {
                    z =  z0 + stepZ*k;
                    y = ao->dataXOZ[i][k];
                    points->InsertNextPoint(x, z, y);
                }
            }
        }
    }

    // Add the grid points to a polydata object
    auto inputPolyData =  vtkSmartPointer<vtkPolyData>::New();
    inputPolyData->SetPoints(points);


    // Triangulate the grid points
    auto delaunay =  vtkSmartPointer<vtkDelaunay2D>::New();
    delaunay->SetInputData(inputPolyData);
    delaunay->Update();

    auto outputPolyData = delaunay->GetOutput();

    double bounds[6];
    outputPolyData->GetBounds(bounds);

    //max and min Z
    max = bounds[5];
    //cout<<"max generateObital_1 : "<<max<<endl;
    //cout<<"max maxBox:"<<maxBox<<endl;
    //cout<<"maxBox*0.9/max:"<<maxBox*0.9/max<<endl;

    auto scalars = vtkSmartPointer<vtkFloatArray>::New();
    for(int i = 0; i < outputPolyData->GetNumberOfPoints(); i++)
    {
        double * p = outputPolyData->GetPoint(i);

        p[2]=p[2]*maxBox*0.9/max;  //correspond to red

        outputPolyData->GetPoints()->SetPoint(i,p);
        scalars->InsertTuple1(i, p[2]/maxBox);
    }

    outputPolyData->GetPointData()->SetScalars(scalars);

    auto actor = vtkActor::New();
    actor->SetPickable(false);


    actor->GetProperty()->SetDiffuse(0.6);
    actor->GetProperty()->SetAmbient(0.5);
    actor->GetProperty()->SetSpecular(0.2);
    actor->GetProperty()->SetSpecularPower(10.0);
    //actor->GetProperty()->SetOpacity(0.6);


    auto mapper = vtkPolyDataMapper::New();
    mapper->SetLookupTable(pColorTable);
    mapper->SetInputData(outputPolyData);
    mapper->SetScalarRange(scalarRange);
    mapper->ScalarVisibilityOn();

    auto transform1 = vtkSmartPointer<vtkTransform>::New();
    transform1->PostMultiply();
    transform1->Translate(0.0,0.0,-(maxBox+trans)/2.0);

    actor->SetUserTransform(transform1);
    actor->SetMapper(mapper);
    //actor->GetProperty()->SetOpacity(0.8);
    m_renderer->AddActor(actor);
    mapper->Delete();

    //proj on slice
    auto slicePolyData = vtkSmartPointer<vtkPolyData>::New();
    slicePolyData->DeepCopy(outputPolyData);

    for (int i=0;i<slicePolyData->GetNumberOfPoints();i++)
    {
        double * p = slicePolyData->GetPoint(i);
        p[2]=-trans+minBox;

        slicePolyData->GetPoints()->SetPoint(i,p);
    }
    slicePolyData->GetPointData()->SetScalars(scalars);


    auto transform2 = vtkSmartPointer<vtkTransform>::New();
    transform2->PostMultiply();
    transform2->Translate(0.0,0.0,maxBox+2.0*trans);

    auto actor_slice = vtkActor::New();

    actor_slice->GetProperty()->SetDiffuse(0.3);
    actor_slice->GetProperty()->SetAmbient(0.5);
    actor_slice->GetProperty()->SetSpecular(0.2);
    actor_slice->GetProperty()->SetSpecularPower(10.0);

    auto mapper_slice = vtkPolyDataMapper::New();
    mapper_slice->SetLookupTable(pColorTable);
    mapper_slice->SetInputData(slicePolyData);
    mapper_slice->SetScalarRange(scalarRange);
    mapper_slice->ScalarVisibilityOn();

    actor_slice->SetUserTransform(transform2);
    actor_slice->SetMapper(mapper_slice);
    //actor_slice->GetProperty()->SetOpacity(0.8);

    //m_renderer->AddActor(actor_slice);
    mapper_slice->Delete();


    //positive contour
    vtkNew <vtkContourFilter> contours;
    contours->SetInputData(slicePolyData);
    contours->SetValue(0, 0.001);
    contours->GenerateValues(20,0.0, 1.0);
    contours->Update();

    auto actor_contour = vtkActor::New();
    auto mapper_contour = vtkPolyDataMapper::New();
    mapper_contour->SetLookupTable(pColorTable);
    mapper_contour->SetInputConnection(contours->GetOutputPort());
    mapper_contour->SetScalarRange(scalarRange);
    mapper_contour->ScalarVisibilityOn();

    //transform->Translate(0.0,0.0,0.2);
    actor_contour->SetUserTransform(transform2);
    actor_contour->SetMapper(mapper_contour);
    actor_contour->GetProperty()->SetLineWidth(2.0);
    m_renderer->AddActor(actor_contour);
    mapper_contour->Delete();


    //negative contour
    vtkNew <vtkContourFilter> contours_;
    contours_->SetInputData(slicePolyData);
    contours_->GenerateValues(20,-1.0, 0.0);
    contours_->Update();

    auto actor_contour_ = vtkActor::New();
    auto mapper_contour_ = vtkPolyDataMapper::New();

    mapper_contour_->SetLookupTable(pColorTable);
    mapper_contour_->SetInputConnection(contours_->GetOutputPort());
    mapper_contour_->SetScalarRange(scalarRange);
    mapper_contour_->ScalarVisibilityOn();

    actor_contour_->SetUserTransform(transform2);
    actor_contour_->SetMapper(mapper_contour_);
    actor_contour_->GetProperty()->SetLineWidth(2.0);
    m_renderer->AddActor(actor_contour_);
    mapper_contour_->Delete();

    cout <<"Generate the projection-orbitals done"<<endl;

    renderWindow()->Render();
}



void Proj3D::generateObital()
{
    if(_semiOrbitalVisibleType==2) {
        generateObital_1();
        return;
    }

    cout <<"Generate the projection-orbitals ..."<<endl;

    lineWidth=1.0;
    double minBox, maxBox;
    int scale=1;
    double color[3]={1.,1.,1.};


    AO * ao = mainWindow->getAO();
    if (ao==nullptr)
        return;

    //cout << "generate orbital : " <<ao->dataXOY.size() +ao->dataYOZ.size() +ao->dataXOZ.size()<<endl;
    if ( ao->dataXOY.size() +ao->dataYOZ.size() +ao->dataXOZ.size() < 1 )
        return;

    scale=ao->get_projScale();


    double stepX=ao->getInteval()/scale,
           stepY=ao->getInteval()/scale,
           stepZ=ao->getInteval()/scale;

    int countX=scale*ao->getGridSize()+1,
        countY=scale*ao->getGridSize()+1,
        countZ=scale*ao->getGridSize()+1;


    minBox=ao->MinBox();
    maxBox=ao->MaxBox();

/*
    cout << "\n\nProj3D::generateObital()-----------------"<<endl;
    cout << " cout : " << countX<<endl;
    cout << " stepX : "<< stepX<<endl;
    cout << " minBox : "<< minBox<<endl;
    cout << " maxBox : "<< maxBox<<endl;
    cout << "-----------------"<<endl;
*/

    //render cube outline
    auto cubePoints =  vtkSmartPointer<vtkPoints>::New();
    auto polyLines =   vtkSmartPointer<vtkCellArray>::New();
    auto branchIdData = vtkSmartPointer<vtkIntArray>::New();

    //double trans=maxBox*0.7;

    double trans=maxBox;

    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    auto points =  vtkSmartPointer<vtkPoints>::New();
    auto pointsSlice =  vtkSmartPointer<vtkPoints>::New();

    double x,y,z;

    double max=0.0;

    auto transform = vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();


    double p0[3] = { minBox, minBox, minBox-trans };
    double p1[3] = { minBox, maxBox, minBox-trans };
    double p2[3] = { maxBox, maxBox, minBox-trans };
    double p3[3] = { maxBox, minBox, minBox-trans };

    double p4[3] = { minBox, minBox, 0.0};
    double p5[3] = { minBox, maxBox, 0.0};
    double p6[3] = { maxBox, maxBox, 0.0};
    double p7[3] = { maxBox, minBox, 0.0};

    transform->Translate(0.0,0.0,(maxBox+trans)/2.0);



    renderLine(p0,p1,color,lineWidth,transform,id_ao);
    renderLine(p1,p2,color,lineWidth,transform,id_ao);
    renderLine(p2,p3,color,lineWidth,transform,id_ao);
    renderLine(p0,p3,color,lineWidth,transform,id_ao);

    renderLine(p4,p5,color,lineWidth,transform,id_ao);
    renderLine(p5,p6,color,lineWidth,transform,id_ao);
    renderLine(p6,p7,color,lineWidth,transform,id_ao);
    renderLine(p4,p7,color,lineWidth,transform,id_ao);

    renderLine(p0,p4,color,lineWidth,transform,id_ao);
    renderLine(p1,p5,color,lineWidth,transform,id_ao);
    renderLine(p2,p6,color,lineWidth,transform,id_ao);
    renderLine(p3,p7,color,lineWidth,transform,id_ao);




    //ProjOrbitaType {proj_XOY=1, proj_XOZ=2, proj_YOZ=3};
    //double minZ=100.0, maxZ=-100.0;
    if (ao->getProjType()==1)
    {
        if (ao->dataXOY.size()>0) {

            //#pragma omp parallel for
            for (int i = 0 ; i < countX; i++)
            {
                x = x0 + stepX*i;
                for (int j = 0; j < countY; j++)  {
                    y =  y0 + stepY*j;
                    z = ao->dataXOY[i][j];
                    points->InsertNextPoint(x, y, z);
                }
            }
        }
    }


    if (ao->getProjType()==3)
    {
        //dataYOZ[Ny][Nz]
        if (ao->dataYOZ.size()>0) {
            //#pragma omp parallel  for
            for(int j=0; j < countY;  j++)
            {
                y = y0 + stepY*j;
                for(int k=0; k < countZ;  k++) {
                    z =  z0 + stepZ*k;
                    x = ao->dataYOZ[j][k];
                    points->InsertNextPoint(y, z, x);
                }
            }
        }
    }



    if (ao->getProjType()==2)
    {
        if (ao->dataXOZ.size()>0)
        {
            //#pragma omp parallel for
            for (int i = 0 ; i < countX; i++)
            {
                x = x0 + stepX*i;
                for (int k = 0; k < countZ; k++)  {
                    z =  z0 + stepZ*k;
                    y = ao->dataXOZ[i][k];
                    points->InsertNextPoint(x, z, y);
                }
            }
        }
    }


    // Add the grid points to a polydata object
    auto inputPolyData =  vtkSmartPointer<vtkPolyData>::New();
    inputPolyData->SetPoints(points);


    // Triangulate the grid points
    auto delaunay =  vtkSmartPointer<vtkDelaunay2D>::New();
    delaunay->SetInputData(inputPolyData);
    delaunay->Update();

    auto outputPolyData = delaunay->GetOutput();

    double bounds[6];
    outputPolyData->GetBounds(bounds);

    //max and min Z
    max = bounds[5];

    double scale_0=1.0/ao->maxPsi();
    double scale_1=1.0/ao->minPsi();
    if(scale_1<0.0) scale_1=-scale_1;

    auto scalars = vtkSmartPointer<vtkFloatArray>::New();
    for(int i = 0; i < outputPolyData->GetNumberOfPoints(); i++)
    {
        double * p = outputPolyData->GetPoint(i);

        p[2]=p[2]*maxBox*0.9/max;  //correspond to red

        outputPolyData->GetPoints()->SetPoint(i,p);
        scalars->InsertTuple1(i, p[2]/maxBox);
    }

    outputPolyData->GetPointData()->SetScalars(scalars);

    auto actor = vtkActor::New();
    actor->SetPickable(false);


    actor->GetProperty()->SetDiffuse(0.6);
    actor->GetProperty()->SetAmbient(0.5);
    actor->GetProperty()->SetSpecular(0.2);
    actor->GetProperty()->SetSpecularPower(10.0);
    //actor->GetProperty()->SetOpacity(0.6);


    auto mapper = vtkPolyDataMapper::New();
    mapper->SetLookupTable(pColorTable);
    mapper->SetInputData(outputPolyData);
    mapper->SetScalarRange(scalarRange);
    mapper->ScalarVisibilityOn();


    actor->SetUserTransform(transform);
    actor->SetMapper(mapper);
    //actor->GetProperty()->SetOpacity(0.8);
    m_renderer->AddActor(actor);
    mapper->Delete();


    //lattice
    vtkNew<vtkNamedColors> colors;
    double interval=0.4;
    int number=2*bounds[1]/interval;
    //transform->Translate(0.0,0.0,2.0);


    if(_semiOrbitalVisibleType<1)
    for(int i=0;i<2;i++)
    {
        //cout<<i<< " -----------------"<<endl;
        auto plane =vtkPlane::New();

        if(i<1)
            plane->SetNormal(1,0,0);
        else
            plane->SetNormal(0,1,0);

        auto cutter=vtkCutter::New();
        cutter->SetCutFunction(plane);
        cutter->SetInputData(outputPolyData);
        cutter->Update();

        cutter->SetNumberOfContours(number);
        if(i<1) {
            //double interval=2.0*bounds[1]/number;
            for (int j = 0; j < number; j=j+2) {
                cutter->SetValue(j, bounds[0]+j*interval);
            }
        }
        else {
            //double interval=2.0*bounds[3]/number;
            for (int j = 0; j < number; j=j+2) {
                cutter->SetValue(j, bounds[2]+j*interval);
            }
        }
        cutter->Update();


        auto cutterActor = vtkActor::New();
        cutterActor->SetPickable(false);

        auto cutterMapper = vtkPolyDataMapper::New();
        cutterMapper->SetInputConnection(cutter->GetOutputPort());
        cutterMapper->SetLookupTable(pColorTable);
        cutterMapper->SetScalarRange(scalarRange);
        cutterMapper->ScalarVisibilityOn();

        // Create plane actor
        cutterActor->GetProperty()->SetLineWidth(2);
        cutterActor->SetMapper(cutterMapper);
        cutterActor->SetUserTransform(transform);

        m_renderer->AddActor(cutterActor);
        cutterMapper->Delete();
    }


    //proj on slice
    auto slicePolyData = vtkSmartPointer<vtkPolyData>::New();
    slicePolyData->DeepCopy(outputPolyData);

    //#pragma omp parallel for
    for (int i=0;i<slicePolyData->GetNumberOfPoints();i++)
    {
        double * p = slicePolyData->GetPoint(i);
        p[2]=-trans+minBox;

        slicePolyData->GetPoints()->SetPoint(i,p);
    }
    slicePolyData->GetPointData()->SetScalars(scalars);

    if(_semiOrbitalVisibleType<1)
    {
        auto actor_slice = vtkActor::New();

        actor_slice->GetProperty()->SetDiffuse(0.3);
        actor_slice->GetProperty()->SetAmbient(0.5);
        actor_slice->GetProperty()->SetSpecular(0.2);
        actor_slice->GetProperty()->SetSpecularPower(10.0);

        auto mapper_slice = vtkPolyDataMapper::New();
        mapper_slice->SetLookupTable(pColorTable);
        mapper_slice->SetInputData(slicePolyData);
        mapper_slice->SetScalarRange(scalarRange);
        mapper_slice->ScalarVisibilityOn();

        actor_slice->SetUserTransform(transform);
        actor_slice->SetMapper(mapper_slice);
        actor_slice->GetProperty()->SetOpacity(0.8);

        m_renderer->AddActor(actor_slice);
        mapper_slice->Delete();
    }


    //positive contour
    vtkNew<vtkContourFilter> contours;
    contours->SetInputData(slicePolyData);
    contours->SetValue(0, 0.001);
    contours->GenerateValues(20,0.0, 1.0);
    contours->Update();

    auto actor_contour = vtkActor::New();
    auto mapper_contour = vtkPolyDataMapper::New();
    mapper_contour->SetLookupTable(pColorTable);
    mapper_contour->SetInputConnection(contours->GetOutputPort());
    mapper_contour->SetScalarRange(scalarRange);
    mapper_contour->ScalarVisibilityOn();

    transform->Translate(0.0,0.0,0.2);
    actor_contour->SetUserTransform(transform);
    actor_contour->SetMapper(mapper_contour);
    actor_contour->GetProperty()->SetLineWidth(2.0);
    m_renderer->AddActor(actor_contour);
    mapper_contour->Delete();

    //negative contour
    vtkNew <vtkContourFilter> contours_;
    contours_->SetInputData(slicePolyData);
    contours_->GenerateValues(20,-1.0, 0.0);
    contours_->Update();

    auto actor_contour_ = vtkActor::New();
    auto mapper_contour_ = vtkPolyDataMapper::New();

    mapper_contour_->SetLookupTable(pColorTable);
    mapper_contour_->SetInputConnection(contours_->GetOutputPort());
    mapper_contour_->SetScalarRange(scalarRange);
    mapper_contour_->ScalarVisibilityOn();

    actor_contour_->SetUserTransform(transform);
    actor_contour_->SetMapper(mapper_contour_);
    actor_contour_->GetProperty()->SetLineWidth(2.0);
    m_renderer->AddActor(actor_contour_);
    mapper_contour_->Delete();

    cout <<"Generate the projection-orbitals done"<<endl;

    renderWindow()->Render();
}


void Proj3D::renderSemiOrbital()
{
    return;

    if(_semiOrbitalVisibleType<1)
        return;

    double color1[3],color2[3];


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



    opacity_pos=opacity_neg=1.0;

    isNegLobeVisible=isPosLobeVisible=true;



    AO * ao = mainWindow->getAO();
    if (ao==nullptr)      return;

    //ProjOrbitaType {proj_XOY=1, proj_XOZ=2, proj_YOZ=3};
    int n=0;
    switch (ao->getProjType())
    {
    case 1: //xoy
        if(ao->pDataXOY_n==nullptr)
            ao->buildIsoSurface_XOY();
        n=ao->pDataXOY_n->GetNumberOfPoints();
        break;

    case 2: //xoz
        if(ao->pDataXOZ_n==nullptr)
            ao->buildIsoSurface_XOZ();
        n=ao->pDataYOZ_n->GetNumberOfPoints();
        break;
    case 3: //yoz
        if(ao->pDataYOZ_n==nullptr)
            ao->buildIsoSurface_XOY();
        n=ao->pDataYOZ_n->GetNumberOfPoints();
    }

    double scale=ao->get_projScale();
    double stepX=ao->getInteval()/scale,
            stepY=ao->getInteval()/scale,
            stepZ=ao->getInteval()/scale;

    double minBox=ao->MinBox();
    double maxBox=ao->MaxBox();
    maxBox-=stepX;

    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->Translate(0.0,0.0,minBox-stepX);


    if (isPosLobeVisible && n>20)
    {
        auto actor_pos = vtkActor::New();
        auto mapper_pos = vtkPolyDataMapper::New();

        actor_pos->GetProperty()->SetColor(color1);
        actor_pos->GetProperty()->SetOpacity(opacity_pos);
        actor_pos->SetPickable(false);

        mapper_pos->ScalarVisibilityOff();

        if (ao->getProjType()==1)
            mapper_pos->SetInputData(ao->pDataXOY_p);
        else if (ao->getProjType()==2)
            mapper_pos->SetInputData(ao->pDataXOZ_p);
        else if (ao->getProjType()==3)
            mapper_pos->SetInputData(ao->pDataYOZ_p);

        actor_pos->SetMapper(mapper_pos);
        actor_pos->GetProperty()->SetInterpolationToGouraud();
        actor_pos->SetUserTransform(transform);

        actor_pos->GetProperty()->SetDiffuse(1.0);
        actor_pos->GetProperty()->SetAmbient(0.5);
        actor_pos->GetProperty()->SetSpecular(0.5);
        actor_pos->GetProperty()->SetSpecularPower(100.0);
        actor_pos->SetPickable(false);

        m_renderer->AddActor(actor_pos);
        mapper_pos->Delete();
    }

    if (!isNegLobeVisible) return;

    if (ao->pDataXOY_n->GetNumberOfPoints()<20) return;
    auto actor_neg = vtkActor::New();
    auto mapper_neg = vtkPolyDataMapper::New();


    actor_neg->GetProperty()->SetColor(color2);
    actor_neg->GetProperty()->SetOpacity(opacity_neg);
    mapper_neg->ScalarVisibilityOff();


    /*
    auto scalars1 = vtkSmartPointer<vtkFloatArray>::New();
//#pragma omp parallel for
    for(int i = 0; i < ao->pData_n->GetNumberOfPoints(); i++)
    {
        double * p = ao->pData_n->GetPoint(i);
        scalars1->InsertTuple1(i,0.8);
    }
    ao->pData_n->GetPointData()->SetScalars(scalars1);
*/

    if (ao->getProjType()==1)
        mapper_neg->SetInputData(ao->pDataXOY_n);
    else if (ao->getProjType()==2)
        mapper_neg->SetInputData(ao->pDataXOZ_n);
    else if (ao->getProjType()==3)
        mapper_neg->SetInputData(ao->pDataYOZ_n);


    actor_neg->SetMapper(mapper_neg);
    actor_neg->GetProperty()->SetInterpolationToGouraud();
    actor_neg->SetPickable(false);
    actor_neg->SetUserTransform(transform);

    actor_neg->GetProperty()->SetDiffuse(1.0);
    actor_neg->GetProperty()->SetAmbient(0.5);
    actor_neg->GetProperty()->SetSpecular(0.5);
    actor_neg->GetProperty()->SetSpecularPower(100.0);

    m_renderer->AddActor(actor_neg);
    mapper_neg->Delete();
}

void Proj3D::setDefaultColor()
{
    LobeColor_pos2.Set(0.90,0.56,0.14);
    LobeColor_neg2.Set(0.21,0.44,0.53);

    LobeColor_pos.Set(0.67,0.34,0.67);
    LobeColor_neg.Set(0.13,0.62,0.62);
}


void Proj3D::renderBox()
{
    if(_semiOrbitalVisibleType==2)
        return;

    if(!_boxVisible) return;

    AO * ao = mainWindow->getAO();
    if (ao==nullptr)      return;


    double scale=ao->get_projScale();
    double stepX=ao->getInteval()/scale,
           stepY=ao->getInteval()/scale,
           stepZ=ao->getInteval()/scale;

    double maxBox=ao->MaxBox_projection();
    double minBox=maxBox;
    maxBox-=stepX;


    auto transform =  vtkSmartPointer<vtkTransform>::New();
    transform->PostMultiply();
    transform->Translate(0.0,0.0,2.0*minBox+stepX-0.001);


    auto cube = vtkSmartPointer<vtkCubeSource>::New();
    cube->SetBounds(minBox,maxBox,
                    minBox,maxBox,
                    0.0,maxBox);

    cube->Update();

    auto mapper = vtkPolyDataMapper::New();
    mapper->ScalarVisibilityOn();
    auto actor = vtkActor::New();
    actor->GetProperty()->SetColor(1.0,1.0,1.0);
    actor->GetProperty()->SetOpacity(0.8);
    actor->GetProperty()->ShadingOff();
    actor->SetUserTransform(transform);
    actor->SetMapper(mapper);

    actor->GetProperty()->SetLineWidth(2.0);
    actor->GetProperty()->SetRepresentationToWireframe();
    actor->GetProperty()->ShadingOff();

    mapper->ScalarVisibilityOn();
    mapper->SetInputConnection(cube->GetOutputPort());
    actor->GetProperty()->SetInterpolationToGouraud();
    m_renderer->AddActor(actor);

    mapper->Delete();
}


void Proj3D::removeAllActors()
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


void Proj3D::removeLastActor()
{
    vtkActor * actor = m_renderer->GetActors()->GetLastActor();
    if (actor != nullptr) m_renderer->RemoveActor(actor);
}




void Proj3D::zoomToExtent()
{
    // Zoom to extent of last added actor
    vtkSmartPointer<vtkActor> actor = m_renderer->GetActors()->GetLastActor();
    if (actor == nullptr) return;

    m_renderer->ResetCamera(actor->GetBounds());
}




void Proj3D:: onViewXY()
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
void Proj3D:: onViewXZ()
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

void Proj3D:: onViewYZ()
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


void Proj3D:: onViewReset()
{
    camera->SetViewUp(0,1,0);
    camera->SetPosition(0,0,30);
    camera->SetFocalPoint(0,0,0);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Proj3D:: onView_rotateClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();

}

void Proj3D:: onView_rotateCounterClockwise(double degree)
{
    double angle= camera->GetRoll();
    camera->SetRoll(angle+degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Proj3D:: onView_rotateUp(double degree)
{
    //camera->Pitch(-5);
    camera->Elevation(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}
void Proj3D:: onView_rotateDown(double degree)
{
    //camera->Pitch(5);
    camera->Elevation(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Proj3D:: onView_rotateLeft(double degree)
{
    camera->Azimuth(degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}

void Proj3D:: onView_rotateRight(double degree)
{
    camera->Azimuth(-degree);
    camera->ComputeViewPlaneNormal();
    renderWindow()->Render();
}


void Proj3D::closeEvent(QCloseEvent *event)
{
    mainWindow->hideActiveSubWindow();
    event->ignore();

    //QVTKOpenGLNativeWidget::closeEvent(event);
}


