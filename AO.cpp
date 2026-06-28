/**************************************************************************
 *   This file is part of GIJSBERTIUS.                                    *
 *                                                                        *
 *   Author: Ivo Filot <ivo@ivofilot.nl>                                  *
 *                                                                        *
 *   GIJSBERTIUS is free software:                                        *
 *   you can redistribute it and/or modify it under the terms of the      *
 *   GNU General Public License as published by the Free Software         *
 *   Foundation, either version 3 of the License, or (at your option)     *
 *   any later version.                                                   *
 *                                                                        *
 *   GIJSBERTIUS is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty          *
 *   of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.              *
 *   See the GNU General Public License for more details.                 *
 *                                                                        *
 *   You should have received a copy of the GNU General Public License    *
 *   along with this program.  If not, see http://www.gnu.org/licenses/.  *
 *                                                                        *
 **************************************************************************/

#include "mainwindow.h"
#include "AO.h"
#include "functionals.h"
#include "SolveEquation.h"

#include <QApplication>
#include <QProcess>
#include <vtkClipPolyData.h>
#include <vtkPlane.h>
#include <vtkPolyDataNormals.h>
#include <vtkSurfaceReconstructionFilter.h>
#include <vtkContourFilter.h>
#include <vtkSmoothPolyDataFilter.h>
#include <vtkBox.h>
#include <vtkReverseSense.h>
#include <vtkClipClosedSurface.h>
#include <vtkDelaunay3D.h>
#include <vtkExtractSurface.h>
#include <vtkPLYWriter.h>
#include <vtkPLYReader.h>
#include <vtkOBJReader.h>
#include <vtkOBJWriter.h>
#include <vtkCellData.h>
#include <vtkCellArray.h>
#include <vtkDoubleArray.h>
#include <vtkPoints.h>
#include <vtkPolyData.h>
#include <vtkPointData.h>
#include <vtkSmartPointer.h>
#include <vtkXMLPolyDataReader.h>
#include <vtkOBJExporter.h>
#include <vtkPlaneCollection.h>
#include <vtkCurvatures.h>
#include <vtkPCANormalEstimation.h>
#include <vtkParametricFunctionSource.h>
#include <vtkBooleanOperationPolyDataFilter.h>
#include <vtkIntersectionPolyDataFilter.h>
#include <vtkClipClosedSurface.h>
#include <vtkPolygon.h>
#include <vtkMarchingSquares.h>
#include <vtkCellArray.h>
#include <vtkMergePoints.h>
//#include <vtkRemovePolyData.h>


#include <vtkVoxelContoursToSurfaceFilter.h>
#include <QDir>
#include <vtkTriangleFilter.h>


#include<stdio.h>
#include<stdlib.h>

#include<stdio.h>
#include<stdlib.h>
#include<time.h>

#include <chrono>
#include <functional>
#include <atomic>
#include "ylmFunctions.h"



/*
#ifndef _WIN32
int Point::_tag = 0;
#endif
*/

AO::~AO()
{ 
    clearData();
}

void AO::clearData()
{
    if(isDataEmpty) return;

    clearCubeData();
    clearImageData();

    Nodes_R.clear();
    Nodes_T.clear();
    Nodes_P.clear();

    hasNodesBuild=false;

    isDataEmpty=true;


    if(pData_RDF) {
        pData_RDF->Delete();
        pData_RDF=nullptr;
    }

    if(pData_R) {
        pData_R->Delete();
        pData_R=nullptr;
    }

    if(pData_R2) {
        pData_R2->Delete();
        pData_R2=nullptr;
    }

    value_cloud_pos.clear();
    value_cloud_neg.clear();

    if(points_pos) {
        points_pos->Delete();
        points_pos=nullptr;
    }

    if(points_neg) {
        points_neg->Delete();
        points_neg=nullptr;
    } 

    cloudPoints3d_pos.clear();
    cloudPoints3d_neg.clear();
}

AO::AO()
{
    n=1;
    l=m=lml=0;
    Z=1;
    scale=1.0;

    a0=1.0; //a0=0.529177
    sqrt2=1.41421356237309504876;

    isXOYNode=false;
    obitalName="none";
    hasNodesBuild=false;

    visible=true;

    visible_pos_Lobe_Mesh=true;
    visible_neg_Lobe_Mesh=true;


    orbital_type=FULL;
    _isCloudVisible=false;
    rR=rRDF=0.0;
    _isRegenerateCube=false;

    value_cloud_pos.clear();
    value_cloud_neg.clear();
};



AO::AO(int _Z, int _n, int _l, int _m)
{
    n=_n;
    l=_l;
    m=_m; lml=abs(m);
    Z=_Z;

    scale=1.0;
    a0=1.0; //a0=0.529177;
    sqrt2=1.41421356237309504876;

    //check
    if (n<1)   n = 1;
    if (l > n || l<0)  l = 0;

    if (abs(m)>l)   m = 0;
    if (Z<1)        Z = 1;

    isXOYNode=false;
    hasNodesBuild=false;

    nlm2Name();
    orbital_type=FULL;
    _isCloudVisible=false;
    rR=rRDF=0.0;
    _isRegenerateCube=false;
}



void AO::nlm2Name()
{
    QString name;

    if (l==0 )
        name="S";

    else if (l==1) //P
    {
        name="Pz";           //0
        if (m>0)  name="Px"; //1
        if (m<0)  name="Py"; //-1

    }

    else if (l==2){ //D

        name="Dz2";                      //0

        if       (m==1)   name="Dxz";    //1
        else  if (m==-1)  name="Dyz";    //-1

        else  if (m==-2)   name="Dxy";   //-2
        else  if (m==2)    name="Dx2-y2"; //2
    }

    else if (l==3){ //F

        name="Fz3"; //0

        if       (m==1)   name="Fxz2"; //1
        else  if (m==-1)  name="Fyz2"; //-1

        else  if (m==2)   name="Fz(x2-y2)"; //2
        //else  if (m==-2)  name="Fzxy"; //-2
        else  if (m==-2)  name="Fxyz"; //-2

        else  if (m==3)   name="Fx(x2-3y2)"; //3
        else  if (m==-3)  name="Fy(3x2-y2)"; //-3
    }


    else if (l==4){ //G

        name="Gz4"; //0

        if       (m==1)   name="Gz3x"; //1
        else  if (m==-1)  name="Gz3y"; //-1

        else  if (m==2)   name="Gz2(x2-y2)"; //2
        else  if (m==-2)  name="Gz2xy"; //-2


        else  if (m==3)   name="Gzx3"; //3
        else  if (m==-3)  name="Gzy3"; //-3

        else  if (m==4)   name="Gxy(x2-y2)"; //3
        else  if (m==-4)  name="G(x4+y4)"; //-3
    }

    obitalName.clear();
    obitalName.setNum(n);
    obitalName=obitalName+name;
}



void AO::SetName(QString & name)
{
    obitalName=name;
}

void AO::name2nlm(QString _Name)
{
    obitalName=_Name;
    name2nlm();
}


void AO::name2nlm()
{
    // 1S,2S,3S,4S,5S,6S,7S
    // 2P,3P,4P,5P,6P,7P
    // 3D,4D, 5D,6D,7D
    // 4F,5F,6F,7F
    // 5G, 6G, 7G

    QChar first=obitalName[0],
            second = obitalName[1];

    if (first.isDigit()) {
        n=obitalName[0].digitValue();
    }


    second.toUpper();
    l=0;
    if (second=="S" )         l=0;
    else if (second=="P")     l=1;
    else if (second=="D")     l=2;
    else if (second=="F")     l=3;
    else if (second=="G")     l=4;
    else if (second=="H")     l=5;
    else if (second=="I")     l=6;
    else if (second=="J")     l=7;


    QString name=obitalName;
    name.remove(0,1);

    //cos=positive, sin=negative
    m=0;
    if (name.startsWith("Pz"))          m=0;
    else if (name.startsWith("Px"))     m=1;
    else if (name.startsWith("Py"))     m=-1;


    else if (name.startsWith("Dz2"))     m=0;
    else if (name.startsWith("Dxz"))     m=1;
    else if (name.startsWith("Dyz"))     m=-1;
    else if (name.startsWith("Dx2-y2"))  m=2;
    else if (name.startsWith("Dxy") )    m=-2;


    else if (name.startsWith("Fz3"))        m=0;
    else if (name.startsWith("Fxz2"))       m=1;
    else if (name.startsWith("Fyz2"))       m=-1;
    else if (name.startsWith("Fz(x2-y2)"))  m=2;
    else if (name.startsWith("Fzxy"))       m=-2;
    else if (name.startsWith("Fxyz"))       m=-2;
    else if (name.startsWith("Fx(x2-3y2)")) m=3;
    else if (name.startsWith("Fy(3x2-y2"))  m=-3;


    else if (name.startsWith("Gz4"))        m=0;
    else if (name.startsWith("Gz3x") || name.startsWith("Gxz3"))        m=1;
    else if (name.startsWith("Gz3y") || name.startsWith("Gyz3") )        m=-1;

    else if (name.startsWith("Gz2(x2-y2)") || name.startsWith("G(x2-y2)z2"))        m=2;
    else if (name.startsWith("Gz2xy") || name.startsWith("Gxyz2"))        m=-2;

    else if (name.startsWith("Gzx3")|| name.startsWith("Gx3z"))        m=3;
    else if (name.startsWith("Gzy3") || name.startsWith("Gy3z"))        m=-3;

    else if (name.startsWith("Gxy(x2-y2)"))        m=-4;
    else if (name.startsWith("G(x4+y4)"))        m=4;
}












void AO::buildNodes()
{
    if(hasNodesBuild) return;

    lml=abs(m); //absolute m
    int nR=n-l-1;
    int nT=l-lml;
    int nP=lml;
    //int total=n-1;


    if (nR>0) buildRadialNodes();
    if (l>0)  buildYlmNodes();

    hasNodesBuild=true;

    cout <<"\n\n----------------------------------"<<endl;
    cout << "Hydrogen Atomic Nodes of "<< obitalName.toStdString().c_str()<<":"<<endl;
    cout << "  Quantum number  n   l   m:"<< "  "<<n <<"  " <<l<<"  "<<m<< endl;
    cout << "  There are: n-l-1="<< nR <<" radial nodes"<<endl;
    cout << "  There are: l-|m|="<< nT <<" radial-Theta/angular nodes"<<endl;
    cout << "  There are: |m|="<< nP <<" azimuthal-Phi/angular nodes"<<endl;
}





void AO::buildRadialNodes()
{
    if (hasNodesBuild) return;

    lml=abs(m);

    int nR=n-l-1;

    if (nR<1) return;

    vector < double > poly_R;
    poly_R.clear();

    double alpha=2.0*Z/n/a0;
    double coeff_R=pow(alpha,3/2.0)*sqrt(factorial(n-l-1)*factorial(n+l)/n/2.0);
    double term=1.0;


    int k=n-l-1,j;
    for (j=0; j<=k; j++){
        term=coeff_R*powl(-1.0,j+1)/factorial(2*l+j+1)/factorial(j)/factorial(n-l-j-1);
        poly_R.push_back(term);
    }

    double term0=poly_R[poly_R.size()-1];
    for (size_t i=0;i<poly_R.size();i++)
        poly_R[i]=poly_R[i]/term0;


    SolveEquation roots(poly_R);
    roots.Solve();

    for(int j=0; j<nR; j++)
        cout << roots.answer[j]<<endl;

    Nodes_R.clear();
    if (roots.answer.size()>0)
        for(int j=0; j<nR; j++)
            Nodes_R.push_back(roots.answer[j]/alpha);

    //sort
    sort(Nodes_R.begin(), Nodes_R.end());
    std::reverse(Nodes_R.begin(),Nodes_R.end());


    /*
     cout << poly_R.size()<<endl;
     cout << Nodes_R.size()<<endl;
     cout <<"------input-----------"<<endl;
     for (int i=0;i<poly_R.size();i++)
        cout << poly_R[i]<<endl;
     cout <<"------solution-----------"<<endl;
     for(int j=0; j<nR; j++)
        cout << Nodes_R[j]<<endl;

     cout <<"-----------------"<<endl;
*/
    hasNodesBuild=true;
}




void AO::buildYlmNodes()
{
    lml=abs(m);
    int nT=l-lml;
    //int nP=lml;

    cout << " l m:" << l<<" "<< lml<<endl;
    cout << " nT:" << nT<<endl;

    if (nT>0)
    {
        int m2=m+lml;
        QVector < double >  poly_T, poly_gradT; //theta
        poly_T.clear(), poly_gradT.clear();

        double term=1.0;
        double  Coeff_T=powl(-1.0, m2/2)/powl(2.0,l)*sqrt(l+0.5) *
                sqrt( factorial(l-lml)/factorial(l+lml));

        double denominator=powl(2.0,l);
        double denominator2=factorial(l+lml);
        double numerator=sqrt(factorial(l-lml)/(1.0*factorial(l+lml)));

        /*
        cout << " 1 :" <<denominator<< endl;
        cout << " 2 :" <<denominator2<< endl;
        cout << " 3 :" <<numerator<< endl; ;

        cout << " 1 :" <<powl(-1.0, m2/2)<< endl;
        cout << " 2 :" <<powl(2.0,l)<< endl;
        cout << " 3 :" <<factorial(l-lml)<< endl; ;
        cout << " 4 :" <<factorial(l+lml)<< endl; ;
        cout << " Coeff_T :" <<Coeff_T<< endl;
        */

        int k=floor((l-lml)/2);
        for (int j=0; j<=k; j++) {
            term=Coeff_T*powl(-1.0,j)*factorial(2*l-2*j)/factorial(j)/factorial(l-j)/factorial(l-lml-2*j);
            poly_T.push_back( term );
            cout << j<< ":" <<term<< endl;
            poly_gradT.push_back( term * (l-lml-2*j));
        }

        int size=poly_T.size();
        QRRoots roots(size-1);
        double term0=poly_T[size-1];
        for (int i=0;i<size;i++) {
            roots.a[i]=poly_T[size-i-1]/term0;
            cout <<roots.a[i]<<endl;
        }


        //the roots of associated is [cos(theta)]^2
        roots.qrSolve();
        Nodes_T.clear();
        int n=0, j=0;

        while (1)
        {
            if (abs(roots.xr[j]) <0.0001) {
                Nodes_T.push_back(0.0);
                n=n+1;
                isXOYNode=true;
            }
            else {
                Nodes_T.push_back(roots.xr[j]);
                n=n+2;
            }

            if (n>=nT) break;
            j=j+1;
        }
    }


    Nodes_P.clear();
    if (lml<1) return;
    double phi=180.0/2.0/lml;
    for(int k=0; k<lml; k++)
    {
        if (m>0) //sin
            Nodes_P.push_back(phi*k*2+phi);
        else  //cos
            Nodes_P.push_back(phi*k*2);
    }
}



double AO::findBoxSizefromIsovalue(double _isoValue)
{
    double b=n*15.0;

    double r=b;
    double h=0.02;

    double R=0.0;
    while (1)
    {
        r -= h;
        R=radial_distribution_function(n,l,r);
        if(R>_isoValue) break;
    }


    return 2.5*r;
}

void AO::findBoxSizeBasedonProbability(double _probability, double &  size, double & _isoValue)
{
    //double b=200.0;
    int steps=100000;

    double sum = 0.0;
    double h = 0.0001;
    double r=0.0;

    for (int i = 0; i < steps; ++i)
    {
        r += h ;

        // use Simpson's rule
        sum += (radial_distribution_function(n,l,r) +
                4.0 * radial_distribution_function(n,l,r + h / 2.0) +
                radial_distribution_function(n,l,r + h)) / 6.0;

        if(h * sum > _probability)
            break;
    }

    _isoValue=std::sqrt(radial_distribution_function(n,l,r)/ (4.0 * M_PI * r * r));
    size=r*1.5;
}


double AO::findIsoValueProbabiltyBasedonBoxSize(double size, double & _probability,  double & _isoValue)
{
    double sum = 0.0;
    double a=0.0;
    double r=0.0;
    double h=0.002;

    double probability=0.0;


    int i=0;
    while (1)
    {
        r = r + h;
        if(r>size) break;

        // use Simpson's rule
        double first=radial_distribution_function(n,l,r);
        sum += (first +
                4.0 * radial_distribution_function(n,l,r + h / 2.0) +
                radial_distribution_function(n,l,r + h)) / 6.0;

        i=i+1;

        probability=h*sum;
        if(probability<0.8) continue;
        if(probability>0.9999) break;

        _isoValue=std::sqrt(first/(4.0 * M_PI * r * r));
        if(_isoValue<0.0001) break;
    }


    _probability=probability;

    //  cout << "---------------------"<<endl;
    //  cout <<   "boxSize "<< r<<endl;
    //  cout <<   "probability "<< _probability<<endl;
    //  cout << "isoValue "<< _isoValue<<endl;
    // cout << "---------------------"<<endl;
    return r;
}




void AO::find_LeastRadius_Isovalue()
{
    double b=200.0;
    double steps=100000;

    double sum = 0;
    double a=0.0;
    double h = (b-a)/steps;
    double r=0.0;

    for (int i = 0; i < steps; ++i)
    {
        r =  r + h ;

        // use Simpson's rule
        sum += (radial_distribution_function(n,l,r) +
                4.0 * radial_distribution_function(n,l,r + h / 2.0) +
                radial_distribution_function(n,l,r + h)) / 6.0;

        if(h * sum > overall_probability)
            break;
    }

    least_Radius=r*1.5;

    isoValue=std::sqrt(radial_distribution_function(n,l,r)/ (4.0 * M_PI * r * r));
}



void AO::clearCubeData()
{
    //dispose five kinds of data
    if (CubeData!=nullptr)
        delete CubeData;
    CubeData=nullptr;

    if (CubeDataXOY!=nullptr)
        delete CubeDataXOY;
    CubeDataXOY=nullptr;


    if (CubeDataXOZ!=nullptr)
        delete CubeDataXOZ;
    CubeDataXOZ=nullptr;


    if (CubeDataYOZ!=nullptr)
        delete CubeDataYOZ;
    CubeDataYOZ=nullptr;


    if (CubeDataWedge!=nullptr)
        delete CubeDataWedge;
    CubeDataWedge=nullptr;


    if (CubeDataQuarter!=nullptr)
        delete CubeDataQuarter;
    CubeDataQuarter=nullptr;



    if (CubeDataCorner!=nullptr)
        delete CubeDataCorner;
    CubeDataCorner=nullptr;


    if (ylmData_p)   {
        ylmData_p=vtkPolyData::New();
        ylmData_p->Delete();
        ylmData_p=nullptr;
    }

    if (ylmData_n)   {
        ylmData_n=vtkPolyData::New();
        ylmData_n->Delete();
        ylmData_n=nullptr;
    }


    if (yData_p)   {
        yData_p=vtkPolyData::New();
        yData_p->Delete();
        yData_p=nullptr;
    }


    if (yData_n)   {
        yData_n=vtkPolyData::New();
        yData_n->Delete();
        yData_n=nullptr;
    }



    if (dataXOY.size()>0)
    {
        for (uint i=0;i<dataXOY.size();i++)
            dataXOY[i].clear();
        dataXOY.clear();
    }

    if (dataXOZ.size()>0) {
        for (uint i=0;i<dataXOZ.size();i++)
            dataXOZ[i].clear();
        dataYOZ.clear();
    }

    if (dataXOZ.size()>0) {
        for (uint i=0;i<dataYOZ.size();i++)
            dataYOZ[i].clear();
        dataXOZ.clear();
    }


    if (pDataXOY_p)   {
        pDataXOY_p=vtkPolyData::New();
        pDataXOY_p->Delete();
        pDataXOY_p=nullptr;
    }


    if (pDataXOY_n)   {
        pDataXOY_n=vtkPolyData::New();
        pDataXOY_n->Delete();
        pDataXOY_n=nullptr;
    }

    if (pDataXOZ_p)   {
        pDataXOZ_p=vtkPolyData::New();
        pDataXOZ_p->Delete();
        pDataXOZ_p=nullptr;
    }

    if (pDataXOZ_n)   {
        pDataXOZ_n=vtkPolyData::New();
        pDataXOZ_n->Delete();
        pDataXOZ_n=nullptr;
    }

    if (pDataXOZ_p)   {
        pDataXOZ_p=vtkPolyData::New();
        pDataXOZ_p->Delete();
        pDataXOZ_p=nullptr;
    }

    if (pDataYOZ_p)   {
        pDataYOZ_p=vtkPolyData::New();
        pDataYOZ_p->Delete();
        pDataYOZ_p=nullptr;
    }
    if (pDataYOZ_n)   {
        pDataYOZ_n=vtkPolyData::New();
        pDataYOZ_n->Delete();
        pDataYOZ_n=nullptr;
    }


    if (pData_Wedge_p)   {
        pData_Wedge_p=vtkPolyData::New();
        pData_Wedge_p->Delete();
        pData_Wedge_p=nullptr;
    }

    if (pData_Wedge_n)   {
        pData_Wedge_n=vtkPolyData::New();
        pData_Wedge_n->Delete();
        pData_Wedge_n=nullptr;
    }


    if (pData_Wedge_pm)   {
        pData_Wedge_pm=vtkPolyData::New();
        pData_Wedge_pm->Delete();
        pData_Wedge_pm=nullptr;
    }

    if (pData_Wedge_nm)   {
        pData_Wedge_nm=vtkPolyData::New();
        pData_Wedge_nm->Delete();
        pData_Wedge_nm=nullptr;
    }



    if(_removeRadialData)
    if (RData_2d.size()+R2Data_2d.size() + RDFData_2d.size()>0) {
        if (RData_2d.size()>0)  RData_2d.clear();
        if (R2Data_2d.size()>0)  R2Data_2d.clear();
        if (RDFData_2d.size()>0)  RDFData_2d.clear();
        //cout << "RData  is done!"<<endl;
    }


    cout << "Clear Cube data !"<<endl;
}



void AO::clearImageData()
{
    if(volume!=nullptr)
        volume->Delete();
    volume=nullptr;

    if(volumeXOY!=nullptr)
        volumeXOY->Delete();
    volumeXOY=nullptr;


    if(volumeXOZ!=nullptr)
        volumeXOZ->Delete();
    volumeXOZ=nullptr;

    if(volumeYOZ!=nullptr)
        volumeYOZ->Delete();
    volumeYOZ=nullptr;

    if(volumeWedge!=nullptr)
        volumeWedge->Delete();
    volumeWedge=nullptr;

    if(volumeQuarter!=nullptr)
        volumeQuarter->Delete();
    volumeQuarter=nullptr;

    if(volumeCorner!=nullptr)
        volumeCorner->Delete();
    volumeCorner=nullptr;


    if(volume_!=nullptr)
        volume_->Delete();
    volume_=nullptr;

    if(volumeXOY_!=nullptr)
        volumeXOY_->Delete();
    volumeXOY_=nullptr;

    if(volumeXOZ_!=nullptr)
        volumeXOZ_->Delete();
    volumeXOZ_=nullptr;

    if(volumeYOZ_!=nullptr)
        volumeYOZ_->Delete();
    volumeYOZ_=nullptr;

    if(volumeWedge_!=nullptr)
        volumeWedge_->Delete();
    volumeWedge_=nullptr;

    if(volumeQuarter_!=nullptr)
        volumeQuarter_->Delete();
    volumeQuarter_=nullptr;

    if(volumeCorner_!=nullptr)
        volumeCorner_->Delete();
    volumeCorner_=nullptr;

    cout << "Clear Volume done!"<<endl;
}








void AO::buildRadialData_2d()
{
    cout << "Calculating R,R2 and RDF functions ..."<<endl;

    RData_2d.clear();
    R2Data_2d.clear();
    RDFData_2d.clear();

    double interval=0.1;
    double extension=20.0;

    if(obitalName=="1S")
        extension=5.0;

    double r_max=least_Radius+extension;
    double r=0.0;


    cout << r_max << " AO::buildRadialData_2d()" <<endl;

    double rdf_value,  r_value, r2_value;

    //#pragma omp parallel for
    for (int i=0; ;i++)
    {
        if(r>r_max) break;

        r+=interval;

        rdf_value=radial_distribution_function(n,l,r);
        r_value=radial_function(n,l,r);
        r2_value=r_value*r_value;

        RData_2d.append(QPointF(r, r_value));
        R2Data_2d.append(QPointF(r, r2_value));
        RDFData_2d.append(QPointF(r, rdf_value));
    }

    cout << "Done!"<<endl;
}



void AO::generateCloudPoints_3D(int N)
{
    cloudPoints3d_pos.clear();
    cloudPoints3d_neg.clear();

    cloudPoints3d_pos_psi.clear();
    cloudPoints3d_neg_psi.clear();

    double maxpb=maxprob_3D(n,l,m,maxBox);

    vector3 p;
    double m_psi,vprob;

    double x,y,z,r;

    //s
    if(l==0) N*=pow(4,(n-1));

    //p
    if(l==1 && m!=0) N*=(n-1)*n*pow(1.3,(n-3));
    if(l==1 && m==0) N*=(n-1)*n*pow(1.3,(n-3))*0.5;

    //d
    if(l==2 && m!=0) N*=1.15*(pow(2,(n-2))-1);
    if(l==2 && m==0) N*=1.15*(pow(2,(n-2))-1)*0.7;

    //f
    if(l==3 && m==0) N*=1.3*pow(2,(n-4));
    if(l==3 && m!=0) N*=1.3*pow(2,(n-4))*1.37;


    max_cloud_pos=-10.0;
    min_cloud_pos=10.0;

    for(int i=0;i<N;i++)
    {
        //-maxBox<----->maxBox
        p.Set(vtkMath::Random(-maxBox,maxBox),
              vtkMath::Random(-maxBox,maxBox),
              vtkMath::Random(-maxBox,maxBox));

        x=p[0];
        y=p[1];
        z=p[2];

        r = sqrt(x*x+y*y+z*z);
        if(r*r>(maxBox*maxBox)) continue;

        m_psi=psi_cart(n,  l,  m, x,  y,  z);
        vprob=m_psi*m_psi;
        if(vprob < 0.0000001) continue;
        if(vprob < maxpb * vtkMath::Random(0.0,1.0)) continue;

        if (m_psi>0.0) {
            cloudPoints3d_pos.push_back(p);
            cloudPoints3d_pos_psi.push_back(m_psi);

            if(max_cloud_pos<m_psi)
                max_cloud_pos=m_psi;
        }
        else
        {
            cloudPoints3d_neg.push_back(p);
            cloudPoints3d_neg_psi.push_back(m_psi);

            if(min_cloud_neg>m_psi)
                min_cloud_neg=m_psi;
        }
    }


    //cout << "\n\n\n\n\nnumber of random points: ----------------"<<endl;
    //cout << cloudPoints3d_pos.size()<<endl;
    //cout << cloudPoints3d_neg.size()<<endl;
    //cout << "---------------------------"<<endl;
}

void AO::clearCloudData()
{
   cloudPoints3d_pos.clear();
   cloudPoints3d_neg.clear();

   if(points_pos!=nullptr)
       points_pos->Delete();

   if(points_neg!=nullptr)
       points_neg->Delete();

   points_pos=nullptr;
   points_neg=nullptr;
}


void AO::generateCloudPoints_display()
{
    if(cloudPoints3d_pos.size()<100)
        generateCloudPoints_3D();

    if(points_pos!=nullptr)
        points_pos->Delete();

    if(points_neg!=nullptr)
        points_neg->Delete();

    points_pos=vtkPoints::New();
    points_neg=vtkPoints::New();


    value_cloud_neg.clear();
    value_cloud_pos.clear();

    //cout <<"begin generate random points ..."<<endl;

    switch (orbital_type)
    {
    case FULL:
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);

            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case  XOY :
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            if (cloudPoints3d_pos[i][2] > 0.0)
                continue;
            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][2] > 0.0)
                continue;

            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case  YOZ :
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            if (cloudPoints3d_pos[i][0] > 0.0)
                continue;
            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][0] > 0.0)
                continue;
            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case  XOZ :
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            if (cloudPoints3d_pos[i][1] > 0.0)
                continue;
            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][1] > 0.0)
                continue;
            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case  Quarter : //remove y>0, z>0
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            if (cloudPoints3d_pos[i][1] > 0.0)
                continue;
            if (cloudPoints3d_pos[i][2] > 0.0)
                continue;
            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][1] > 0.0)
                continue;
            if (cloudPoints3d_neg[i][2] > 0.0)
                continue;
            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case  Corner : //remove x<0, y>0 , z>0
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {
            if (cloudPoints3d_pos[i][0] < 0.0)
                continue;
            if (cloudPoints3d_pos[i][1] > 0.0)
                continue;
            if (cloudPoints3d_pos[i][2] > 0.0)
                continue;

            points_pos->InsertNextPoint(  cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][0] < 0.0)
                continue;
            if (cloudPoints3d_neg[i][1] > 0.0)
                continue;
            if (cloudPoints3d_neg[i][2] > 0.0)
                continue;

            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;

    case Wedge :
        for (uint i=0;i<cloudPoints3d_pos.size();i++)
        {

            if (cloudPoints3d_pos[i][1] > 0.0 && cloudPoints3d_pos[i][2] > 0.0 )
                continue;

            points_pos->InsertNextPoint(cloudPoints3d_pos[i][0],
                    cloudPoints3d_pos[i][1],
                    cloudPoints3d_pos[i][2]);
            value_cloud_pos.push_back(cloudPoints3d_pos_psi[i]);
        }

        for (uint i=0;i<cloudPoints3d_neg.size();i++)
        {
            if (cloudPoints3d_neg[i][1] > 0.0 && cloudPoints3d_neg[i][2] > 0.0 )
                continue;
            points_neg->InsertNextPoint(cloudPoints3d_neg[i][0],
                    cloudPoints3d_neg[i][1],
                    cloudPoints3d_neg[i][2]);
            value_cloud_neg.push_back(cloudPoints3d_neg_psi[i]);
        }
        break;
    }

    //cout << "---------------------------"<<endl;
    //cout << "\n\nnumber of random points: "<<endl;
    //cout <<cloudPoints3d_pos.size()<<endl;
    //cout <<cloudPoints3d_neg.size()<<endl;
    //cout << value_cloud_pos.size()<<endl;
    //cout << value_cloud_neg.size()<<endl;

    //needRecalculateCloudPoints=false;
    //cout<<"generation display cloud points done!"<<endl;
}

void AO::initialCubeMatrix()
{
    overall_probability=0.8;
    gridSize=100;

    if (n>=7 ) {
        isoValue=0.0001;
        maxBox=220.0;
        gridSize=120;
    }

    switch (n)
    {
    case 6:
        gridSize=100;
        break;

    case 5:
        gridSize=90;
        break;

    case 4:
        gridSize=80;
        break;

    case 3:
        gridSize=70;
        break;

    case 2:
        gridSize=60;
        break;

    case 1:
        gridSize=50;
        break;
    }


    int N=gridSize;

    //obtain isovalue,least-Radius based on probability
    find_LeastRadius_Isovalue();

    interval = 2.0*std::ceil(least_Radius)/(double)gridSize;

    maxBox=interval*N/2.0;
    minBox=-maxBox;
    maxBox0=maxBox;

    buildCubeMatrix();
}


void AO::buildCubeMatrix()
{
    //ao->setIsovalue(isoValue);
    //ao->setOverallProbability(probability);
    //ao->setInteval(boxInterval);
    //ao->setGridSize(NGrids);
    //ao->setBoxSize(boxSize);

    cout<<"\n\n\nAO::buildCubeMatrix()-------------------"<<endl;
    cout << "dim: " <<gridSize <<endl;
    cout << "range: " <<minBox  <<" " << maxBox<< endl;
    cout << "interval: " <<interval  << endl;
    cout << "isovalue: " <<isoValue  << endl<< endl;


    int N=gridSize;

    if (CubeData!=nullptr)
        delete CubeData;
    CubeData = new double [N*N*N];


    //int i=0, j=0, k=0;
    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox,
            psi=0.0;


    if(volume!=nullptr)
        volume->Delete();


    volume= vtkImageData::New();
    volume->SetDimensions(N,N,N);
    volume->SetSpacing(interval, interval,interval);
    volume->AllocateScalars(VTK_DOUBLE,1);
    volume->SetOrigin(x0,y0,z0);
    volume->Modified();


    volume_= vtkImageData::New();
    volume_->SetDimensions(N,N,N);
    volume_->SetSpacing(interval, interval,interval);
    volume_->AllocateScalars(VTK_DOUBLE,1);
    volume_->SetOrigin(x0,y0,z0);
    volume_->Modified();


    value_psi_max=-1.0;
    value_psi_min=1.0;

    //#pragma omp parallel for
    for( z=0; z < N ; z++)
        for( y=0; y < N;  y++)
            for( x=0; x < N;  x++){
                psi=calc_Psi(x0+interval*x, y0+interval*y , z0+interval*z);
                CubeData[(z*N+y)*N+x]=psi;
                //cout << psi<< endl;
                static_cast<double*>(volume->GetScalarPointer(x,y,z))[0]=psi;
                static_cast<double*>(volume_->GetScalarPointer(x,y,z))[0]=-psi;

                if(value_psi_max<psi) value_psi_max=psi;
                if(value_psi_min>psi) value_psi_min=psi;
            }

    cout << "\nbuilding cube data completely!" <<endl;
}

double AO::calc_Psi(double x,  double y,  double z)
{
    return psi_cart( n,  l,  m,  x, y, z);
}



void AO::run()
{
    //cout << "\n\n\n\n______________________________________________________"<<endl;
    //cout << n <<" "<< l <<" "<< m <<" "<< obitalName.toStdString().c_str()<<endl;
    buildNodes();

    initialCubeMatrix();

    //buildIsoSurface();
    std::thread t1(&AO::buildIsoSurface,this);

    //buildYlmSurface();
    std::thread t2(&AO::buildYlmSurface,this);

    //buildProjectionData();
    std::thread t3(&AO::buildProjectionData,this);

    //buildRDFSurface();
    std::thread t4(&AO::buildRDFSurface,this);

    //2d--------
    std::thread t5(&AO::buildRadialData_2d,this);


    t1.join();
    t2.join();
    t3.join();
    t4.join();
    t5.join();

    isDataEmpty=false;
}


void AO::reRun()
{
    isDataEmpty=true;

    setIsovalue(mainWin->getIsoSurfaceValue());
    setInteval(mainWin->getInterval());
    setGridSize(mainWin->getNGrids());
    setBoxSize(mainWin->getBoxSize()*0.5);

    _removeRadialData=false;
    clearData();
    buildNodes();


    cout<<"\n\n\n\n\nvoid AO::reRun()-------------------"<<endl;
    cout<<"AO::buildCubeMatrix()"<<endl;
    cout << "dim: " <<gridSize <<endl;
    cout << "range: " <<minBox  <<" " << maxBox<< endl;
    cout << "interval: " <<interval  << endl;
    cout << "isovalue: " <<isoValue  << endl<< endl;

    int N=gridSize;

    if (CubeData!=nullptr)
        delete CubeData;
    CubeData = new double [N*N*N];


    //int i=0, j=0, k=0;
    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox,
            psi=0.0;


    if(volume!=nullptr)
        volume->Delete();


    volume= vtkImageData::New();
    volume->SetDimensions(N,N,N);
    volume->SetSpacing(interval, interval,interval);
    volume->AllocateScalars(VTK_DOUBLE,1);
    volume->SetOrigin(x0,y0,z0);
    volume->Modified();


    volume_= vtkImageData::New();
    volume_->SetDimensions(N,N,N);
    volume_->SetSpacing(interval, interval,interval);
    volume_->AllocateScalars(VTK_DOUBLE,1);
    volume_->SetOrigin(x0,y0,z0);
    volume_->Modified();


    value_psi_max=-10.0;
    value_psi_min=10.0;

    //#pragma omp parallel for
    for( z=0; z < N ; z++)
        for( y=0; y < N;  y++)
            for( x=0; x < N;  x++){
                psi=calc_Psi(x0+interval*x, y0+interval*y , z0+interval*z);
                CubeData[(z*N+y)*N+x]=psi;
                //cout << psi<< endl;
                static_cast<double*>(volume->GetScalarPointer(x,y,z))[0]=psi;
                static_cast<double*>(volume_->GetScalarPointer(x,y,z))[0]=-psi;

                if(value_psi_max<psi) value_psi_max=psi;
                if(value_psi_min>psi) value_psi_min=psi;
            }


    //buildIsoSurface();
    std::thread t1(&AO::buildIsoSurface,this);

    //buildProjectionData();
    std::thread t2(&AO::buildProjectionData,this);

    t1.join();
    t2.join();


    _removeRadialData=true;

    isDataEmpty=false;

    cout<<"void AO::reRun() ----------------------- done"<<endl;
}




void AO::buildIsoSurface_XOY()
{
    if(pDataXOY_n!=nullptr) return;

    auto surface_p0 = vtkSmartPointer<vtkMarchingCubes>::New();
    auto surface_n0 = vtkSmartPointer<vtkMarchingCubes>::New();

    cout << "begin to build XOY isoSurface ..."<<endl;
    if(volumeXOY==nullptr)
        buildXOYCubeMatrix();


    surface_p0->SetInputData(volumeXOY);
    surface_n0->SetInputData(volumeXOY_);


    surface_p0->SetValue(0, isoValue);
    surface_p0->ComputeNormalsOn();
    surface_p->ComputeGradientsOn();
    surface_p->ComputeScalarsOn();
    surface_p0->Update();


    surface_n0->SetValue(0, isoValue);
    surface_n0->ComputeNormalsOn();
    surface_p->ComputeGradientsOn();
    surface_p->ComputeScalarsOn();
    surface_n0->Update();


    auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
    planeXOY->SetOrigin(0, 0, 0.0);
    planeXOY->SetNormal(0, 0, -1);

    pDataXOY_p=vtkPolyData::New();
    pDataXOY_n=vtkPolyData::New();


    if (surface_p0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_p0->GetOutput());
        clipper->SetClipFunction(planeXOY);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataXOY_p->DeepCopy(clipper->GetOutput());
    }


    if (surface_n0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_n0->GetOutput());
        clipper->SetClipFunction(planeXOY);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataXOY_n->DeepCopy(clipper->GetOutput());
    }

    cout << "begin to build XOY isoSurface done!"<<endl;
}




void AO::buildIsoSurface_XOZ()
{
    auto surface_p0 = vtkSmartPointer<vtkMarchingCubes>::New();
    auto surface_n0 = vtkSmartPointer<vtkMarchingCubes>::New();

    cout << "begin to build XOY isoSurface ..."<<endl;
    if(volumeXOZ==nullptr)
        buildXOZCubeMatrix();

    surface_p0->SetInputData(volumeXOZ);
    surface_n0->SetInputData(volumeXOZ_);


    surface_p0->SetValue(0, isoValue);
    surface_p0->ComputeNormalsOn();
    //surface_p->ComputeGradientsOn();
    //surface_p->ComputeScalarsOn();
    surface_p0->Update();


    surface_n0->SetValue(0, isoValue);
    surface_n0->ComputeNormalsOn();
    //surface_p->ComputeGradientsOn();
    //surface_p->ComputeScalarsOn();
    surface_n0->Update();


    auto  plane  =   vtkSmartPointer<vtkPlane>::New();
    plane->SetOrigin(0, 0, 0.0);
    plane->SetNormal(0, -1, 0);

    pDataXOZ_p=vtkPolyData::New();
    pDataXOZ_n=vtkPolyData::New();


    if (surface_p0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_p0->GetOutput());
        clipper->SetClipFunction(plane);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataXOZ_p->DeepCopy(clipper->GetOutput());
    }


    if (surface_n0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_n0->GetOutput());
        clipper->SetClipFunction(plane);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataXOZ_n->DeepCopy(clipper->GetOutput());
    }

    cout << "begin to build XOZ isoSurface done!"<<endl;
}




void AO::buildIsoSurface_YOZ()
{
    auto surface_p0 = vtkSmartPointer<vtkMarchingCubes>::New();
    auto surface_n0 = vtkSmartPointer<vtkMarchingCubes>::New();

    cout << "begin to build XOY isoSurface ..."<<endl;
    if(volumeYOZ==nullptr)
        buildXOZCubeMatrix();

    surface_p0->SetInputData(volumeYOZ);
    surface_n0->SetInputData(volumeYOZ_);


    surface_p0->SetValue(0, isoValue);
    surface_p0->ComputeNormalsOn();
    //surface_p->ComputeGradientsOn();
    //surface_p->ComputeScalarsOn();
    surface_p0->Update();


    surface_n0->SetValue(0, isoValue);
    surface_n0->ComputeNormalsOn();
    //surface_p->ComputeGradientsOn();
    //surface_p->ComputeScalarsOn();
    surface_n0->Update();


    auto  plane  =   vtkSmartPointer<vtkPlane>::New();
    plane->SetOrigin(0, 0, 0);
    plane->SetNormal(-1, 0, 0);

    pDataYOZ_p=vtkPolyData::New();
    pDataYOZ_n=vtkPolyData::New();


    if (surface_p0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_p0->GetOutput());
        clipper->SetClipFunction(plane);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataYOZ_p->DeepCopy(clipper->GetOutput());
    }


    if (surface_n0->GetOutput()->GetNumberOfPoints()>100){
        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(surface_n0->GetOutput());
        clipper->SetClipFunction(plane);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();
        pDataYOZ_n->DeepCopy(clipper->GetOutput());
    }

    cout << "begin to build YOZ isoSurface done!"<<endl;
}



void AO::buildIsoSurface()
{
    if(orbital_type==Wedge)
    {
        buildWedgeSurface();

        if(pData_p!=nullptr)
            pData_p->Delete();

        if(pData_n!=nullptr)
            pData_p->Delete();

        pData_p=vtkPolyData::New();
        pData_n=vtkPolyData::New();

        pData_p->DeepCopy(pData_Wedge_p);
        pData_n->DeepCopy(pData_Wedge_n);
        return;
    }

    //positlve lobe
    surface_p = vtkSmartPointer<vtkMarchingCubes>::New();

    //negative
    surface_n = vtkSmartPointer<vtkMarchingCubes>::New();

    switch (orbital_type)
    {
    case FULL:
        cout << "begin to build full isoSurface ..."<<endl;
        surface_p->SetInputData(volume);
        surface_n->SetInputData(volume_);
        break;

    case  XOY :
        cout << "begin to build XOY isoSurface ..."<<endl;
        if(volumeXOY==nullptr)
            buildXOYCubeMatrix();
        surface_p->SetInputData(volumeXOY);
        surface_n->SetInputData(volumeXOY_);
        break;

    case  XOZ :
        cout << "building XOZ isoSurface ..."<<endl;
        if(volumeXOZ==nullptr)
            buildXOZCubeMatrix();
        surface_p->SetInputData(volumeXOZ);
        surface_n->SetInputData(volumeXOZ_);
        break;

    case  YOZ :
        cout << "building YOZ isoSurface ..."<<endl;
        if(volumeYOZ==nullptr)
            buildYOZCubeMatrix();
        surface_p->SetInputData(volumeYOZ);
        surface_n->SetInputData(volumeYOZ_);
        break;

    case  Wedge :
        break;

    case  Quarter :
        cout << "building Quarter CubeMatrix ..."<<endl;
        if(volumeQuarter==nullptr)
            buildQuarterCubeMatrix();
        surface_p->SetInputData(volumeQuarter);
        surface_n->SetInputData(volumeQuarter_);
        break;

    case  Corner:
        cout << "building Corner CubeMatrix ..."<<endl;
        if(volumeCorner==nullptr)
            buildCornerCubeMatrix();
        surface_p->SetInputData(volumeCorner);
        surface_n->SetInputData(volumeCorner_);
        break;
    }

    //positive lobe
    surface_p->SetValue(0, isoValue);
    surface_p->ComputeNormalsOn();
    surface_p->Update();

    auto cleanFilter = vtkSmartPointer<vtkCleanPolyData>::New();
    cleanFilter->SetInputConnection(surface_p->GetOutputPort());
    cleanFilter->Update();

    if(pData_p==nullptr)
        pData_p=vtkPolyData::New();
    pData_p->DeepCopy(cleanFilter->GetOutput());

    //negative lobe
    surface_n->SetValue(0, isoValue);
    surface_n->ComputeNormalsOn();
    surface_n->Update();

    auto _cleanFilter = vtkSmartPointer<vtkCleanPolyData>::New();
    _cleanFilter->SetInputConnection(surface_n->GetOutputPort());
    _cleanFilter->Update();

    if(pData_n==nullptr)
        pData_n=vtkPolyData::New();
    pData_n->DeepCopy(_cleanFilter->GetOutput());

    if(orbital_type==FULL) return;

    // flatten boundary vertices onto coordinate planes (creates flat caps)
    auto flattenPoints = [](vtkPolyData* data, int axis) {
        for (int i=0;i<data->GetNumberOfPoints();i++) {
            double * p = data->GetPoint(i);
            if (p[axis] > 0.0) {
                p[axis] = 0.0;
                data->GetPoints()->SetPoint(i,p);
            }
        }
    };

    // flatten for positive lobe
    switch (orbital_type)
    {
    case XOY:    flattenPoints(pData_p, 2); break;
    case XOZ:    flattenPoints(pData_p, 1); break;
    case YOZ:    flattenPoints(pData_p, 0); break;
    case Quarter: flattenPoints(pData_p, 2); flattenPoints(pData_p, 1); break;
    case Corner: flattenPoints(pData_p, 2); flattenPoints(pData_p, 1); flattenPoints(pData_p, 0); break;
    default: break;
    }

    // flatten for negative lobe
    switch (orbital_type)
    {
    case XOY:    flattenPoints(pData_n, 2); break;
    case XOZ:    flattenPoints(pData_n, 1); break;
    case YOZ:    flattenPoints(pData_n, 0); break;
    case Quarter: flattenPoints(pData_n, 2); flattenPoints(pData_n, 1); break;
    case Corner: flattenPoints(pData_n, 2); flattenPoints(pData_n, 1); flattenPoints(pData_n, 0); break;
    default: break;
    }

    // rebuild normals like the Wedge algorithm:
    // TriangleFilter → PolyDataNormals (FeatureAngle=85, Consistency, AutoOrient, Splitting) → Smooth
    auto rebuildNormals = [&](vtkPolyData* &data) {
        auto triFilter = vtkSmartPointer<vtkTriangleFilter>::New();
        triFilter->SetInputData(data);
        triFilter->Update();

        auto normals = vtkSmartPointer<vtkPolyDataNormals>::New();
        normals->SetInputData(triFilter->GetOutput());
        normals->ComputePointNormalsOn();
        normals->ComputeCellNormalsOn();
        normals->SetFeatureAngle(85.0);
        normals->ConsistencyOn();
        normals->AutoOrientNormalsOn();
        normals->SplittingOn();
        normals->Update();

        auto smooth = vtkSmartPointer<vtkSmoothPolyDataFilter>::New();
        smooth->SetInputData(normals->GetOutput());
        smooth->SetRelaxationFactor(0.01);
        smooth->BoundarySmoothingOff();
        smooth->SetNumberOfIterations(10);
        smooth->Update();

        data->DeepCopy(smooth->GetOutput());
    };

    rebuildNormals(pData_p);
    rebuildNormals(pData_n);

    cout << "                                 done!"<<endl;
}



void AO::buildXOYCubeMatrix()
{
    //if (CubeDataXOY!=nullptr)     return;

    int N=gridSize;
    CubeDataXOY = new double [N*N*N];

    double d=0.0;
    int Nz=N,Nx=N,Ny=N;

    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    //positive
    if(volumeXOY!=nullptr)
        volumeXOY->Delete();

    volumeXOY = vtkImageData::New();
    volumeXOY->SetDimensions(N,N,N);
    volumeXOY->SetSpacing(interval, interval,interval);
    volumeXOY->AllocateScalars(VTK_DOUBLE,1);
    volumeXOY->SetOrigin(minBox,minBox,minBox);
    volumeXOY->Modified();

    //negative
    if(volumeXOY_!=nullptr)
        volumeXOY_->Delete();
    volumeXOY_ = vtkImageData::New();
    volumeXOY_->SetDimensions(N,N,N);
    volumeXOY_->SetSpacing(interval, interval,interval);
    volumeXOY_->AllocateScalars(VTK_DOUBLE,1);
    volumeXOY_->SetOrigin(minBox,minBox,minBox);
    volumeXOY_->Modified();

    //#pragma omp parallel for
    for( z=0; z < Nz;  z++)
        for( y=0; y < Ny;  y++)
            for( x=0; x < Nx;  x++)
            {
                if (z0+interval*z > 0.0)
                    CubeDataXOY[(z*Ny+y)*Nx+x]=0.0;
                else
                    CubeDataXOY[(z*Ny+y)*Nx+x]=CubeData[(z*Ny+y)*Nx+x];

                static_cast<double*>(volumeXOY->GetScalarPointer(x,y,z))[0]=CubeDataXOY[(z*N+y)*N+x];
                static_cast<double*>(volumeXOY_->GetScalarPointer(x,y,z))[0]=-CubeDataXOY[(z*N+y)*N+x];
            }

    cout << "building XOY CubeMatrix data completely!"<<endl;
}



void AO::buildYOZCubeMatrix()
{
    int N=gridSize;

    if (CubeDataYOZ!=nullptr)
        delete CubeDataYOZ;
    CubeDataYOZ= new double [N*N*N];

    double d=0.0;
    int Nz=N,Nx=N,Ny=N;

    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    //positive
    if(volumeYOZ!=nullptr)   volumeYOZ->Delete();
    volumeYOZ = vtkImageData::New();
    volumeYOZ->SetDimensions(N,N,N);
    volumeYOZ->SetSpacing(interval, interval,interval);
    volumeYOZ->AllocateScalars(VTK_DOUBLE,1);
    volumeYOZ->SetOrigin(minBox,minBox,minBox);
    volumeYOZ->Modified();

    //positive
    if(volumeYOZ_!=nullptr)   volumeYOZ_->Delete();
    volumeYOZ_ = vtkImageData::New();
    volumeYOZ_->SetDimensions(N,N,N);
    volumeYOZ_->SetSpacing(interval, interval,interval);
    volumeYOZ_->AllocateScalars(VTK_DOUBLE,1);
    volumeYOZ_->SetOrigin(minBox,minBox,minBox);
    volumeYOZ_->Modified();


    //#pragma omp parallel for
    for( z=0; z < Nz;  z++)
        for( y=0; y < Ny;  y++)
            for( x=0; x < Nx;  x++)
            {
                if (x0+interval*x > 0.0)
                    CubeDataYOZ[(z*Ny+y)*Nx+x]=0.0;
                else
                    CubeDataYOZ[(z*Ny+y)*Nx+x]=CubeData[(z*Ny+y)*Nx+x];

                static_cast<double*>(volumeYOZ->GetScalarPointer(x,y,z))[0]=CubeDataYOZ[(z*N+y)*N+x];
                static_cast<double*>(volumeYOZ_->GetScalarPointer(x,y,z))[0]=-CubeDataYOZ[(z*N+y)*N+x];
            }
}



void AO::buildXOZCubeMatrix()
{
    int N=gridSize;

    if (CubeDataXOZ!=nullptr)
        delete CubeDataXOZ;

    CubeDataXOZ= new double [N*N*N];


    int Nz=N,Nx=N,Ny=N;

    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    //positive
    if(volumeXOZ!=nullptr)   volumeXOZ->Delete();
    volumeXOZ = vtkImageData::New();
    volumeXOZ->SetDimensions(N,N,N);
    volumeXOZ->SetSpacing(interval, interval,interval);
    volumeXOZ->AllocateScalars(VTK_DOUBLE,1);
    volumeXOZ->SetOrigin(minBox,minBox,minBox);
    volumeXOZ->Modified();

    //positive
    if(volumeXOZ_!=nullptr)   volumeXOZ_->Delete();
    volumeXOZ_ = vtkImageData::New();
    volumeXOZ_->SetDimensions(N,N,N);
    volumeXOZ_->SetSpacing(interval, interval,interval);
    volumeXOZ_->AllocateScalars(VTK_DOUBLE,1);
    volumeXOZ_->SetOrigin(minBox,minBox,minBox);
    volumeXOZ_->Modified();


    //#pragma omp parallel for
    for( z=0; z < Nz;  z++)
        for( y=0; y < Ny;  y++)
            for( x=0; x < Nx;  x++)
            {
                if (y0+interval*y > 0.0)
                    CubeDataXOZ[(z*Ny+y)*Nx+x]=0.0;
                else
                    CubeDataXOZ[(z*Ny+y)*Nx+x]=CubeData[(z*Ny+y)*Nx+x];

                static_cast<double*>(volumeXOZ->GetScalarPointer(x,y,z))[0]=CubeDataXOZ[(z*N+y)*N+x];
                static_cast<double*>(volumeXOZ_->GetScalarPointer(x,y,z))[0]=-CubeDataXOZ[(z*N+y)*N+x];
            }

    //delete CubeDataXOZ;    CubeDataXOZ=nullptr;
}



void AO::buildQuarterCubeMatrix()
{
    int N=gridSize;

    if (volumeQuarter!=nullptr)
        delete CubeDataQuarter;
    CubeDataQuarter= new double [N*N*N];


    int Nz=N,Nx=N,Ny=N;
    int x,y,z;

    double  x0=minBox,
            y0=minBox,
            z0=minBox;


    //positive
    if(volumeQuarter!=nullptr)   volumeQuarter->Delete();
    volumeQuarter = vtkImageData::New();
    volumeQuarter->SetDimensions(N,N,N);
    volumeQuarter->SetSpacing(interval, interval,interval);
    volumeQuarter->AllocateScalars(VTK_DOUBLE,1);
    volumeQuarter->SetOrigin(minBox,minBox,minBox);
    volumeQuarter->Modified();


    //positive
    if(volumeQuarter_!=nullptr)   volumeQuarter_->Delete();
    volumeQuarter_ = vtkImageData::New();
    volumeQuarter_->SetDimensions(N,N,N);
    volumeQuarter_->SetSpacing(interval, interval,interval);
    volumeQuarter_->AllocateScalars(VTK_DOUBLE,1);
    volumeQuarter_->SetOrigin(minBox,minBox,minBox);
    volumeQuarter_->Modified();



//#pragma omp parallel for
    for( z=0; z < Nz;  z++)
        for( y=0; y < Ny;  y++)
            for( x=0; x < Nx;  x++)
            {
                //z<0 and y<0
                if ( z0+interval*double(z) > 0.2  )
                    CubeDataQuarter[(z*Ny+y)*Nx+x]=0.0;

                else if ( y0+interval*y > 0.2  )
                    CubeDataQuarter[(z*Ny+y)*Nx+x]=0.0;
                else
                    CubeDataQuarter[(z*Ny+y)*Nx+x]=CubeData[(z*Ny+y)*Nx+x];

                static_cast<double*>(volumeQuarter->GetScalarPointer(x,y,z))[0]=CubeDataQuarter[(z*N+y)*N+x];
                static_cast<double*>(volumeQuarter_->GetScalarPointer(x,y,z))[0]=-CubeDataQuarter[(z*N+y)*N+x];
            }


    // delete CubeDataQuarter;    CubeDataQuarter=nullptr;

}


void AO::buildCornerCubeMatrix()
{
    int N=gridSize;

    if (CubeDataCorner!=nullptr)
        delete CubeDataCorner;

    CubeDataCorner= new double [N*N*N];


    double d=0.0;
    int Nz=N,Nx=N,Ny=N;

    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    //positive
    if(volumeCorner!=nullptr)   volumeCorner->Delete();
    volumeCorner = vtkImageData::New();
    volumeCorner->SetDimensions(N,N,N);
    volumeCorner->SetSpacing(interval, interval,interval);
    volumeCorner->AllocateScalars(VTK_DOUBLE,1);
    volumeCorner->SetOrigin(minBox,minBox,minBox);
    volumeCorner->Modified();

    //positive
    if(volumeCorner_!=nullptr)   volumeCorner_->Delete();
    volumeCorner_ = vtkImageData::New();
    volumeCorner_->SetDimensions(N,N,N);
    volumeCorner_->SetSpacing(interval, interval,interval);
    volumeCorner_->AllocateScalars(VTK_DOUBLE,1);
    volumeCorner_->SetOrigin(minBox,minBox,minBox);
    volumeCorner_->Modified();

//#pragma omp parallel for
    for( z=0; z < Nz;  z++)
        for( y=0; y < Ny;  y++)
            for( x=0; x < Nx;  x++)
            {
                CubeDataCorner[(z*Ny+y)*Nx+x]=CubeData[(z*Ny+y)*Nx+x];
                if ( x0+interval*x > 0.2 )
                    CubeDataCorner[(z*Ny+y)*Nx+x]=0.0;

                if ( z0+interval*z > 0.2 )
                    CubeDataCorner[(z*Ny+y)*Nx+x]=0.0;

                if ( y0+interval*y > 0.2 )
                    CubeDataCorner[(z*Ny+y)*Nx+x]=0.0;

                static_cast<double*>(volumeCorner->GetScalarPointer(x,y,z))[0]=CubeDataCorner[(z*N+y)*N+x];
                static_cast<double*>(volumeCorner_->GetScalarPointer(x,y,z))[0]=-CubeDataCorner[(z*N+y)*N+x];
            }

    //delete CubeDataCorner;    CubeDataCorner=nullptr;
}


void AO::buildWedgeSurface1()
{
    if(pData_Wedge_p != nullptr)
        pData_Wedge_p->Delete();

    if(pData_Wedge_n != nullptr)
        pData_Wedge_n->Delete();


    if(pData_Wedge_pm != nullptr)
        pData_Wedge_pm->Delete();

    if(pData_Wedge_nm != nullptr)
        pData_Wedge_nm->Delete();

    pData_Wedge_p=vtkPolyData::New();
    pData_Wedge_n=vtkPolyData::New();

    pData_Wedge_pm=vtkPolyData::New();
    pData_Wedge_nm=vtkPolyData::New();

    yData_p=vtkPolyData::New();
    yData_n=vtkPolyData::New();


    auto  box = vtkSmartPointer<vtkBox>::New();
    box->SetXMin(-100,0.0, 0.0);
    box->SetXMax(100, 200, 200);


    for(int j=0;j<2;j++)
    {
        //positlve lobe
        auto surface = vtkSmartPointer<vtkMarchingCubes>::New();
        if(j<1)    surface->SetInputData(volume);
        else       surface->SetInputData(volume);
        surface->SetValue(0, isoValue);
        surface->ComputeNormalsOn();
        surface->Update();

        auto mData=vtkPolyData::New();
        mData->DeepCopy(surface->GetOutput());

        //cout << mData->GetNumberOfPoints()<<  " sssssssssssssss"<<endl;



        auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
        clipper->SetInputData(clipper->GetOutput());
        clipper->SetClipFunction(box);
        clipper->GenerateClipScalarsOn();
        clipper->GenerateClippedOutputOn();
        //clipper->SetValue(0.0);
        clipper->Update();

        //if(j<1)           yData_p->DeepCopy(mData);
        //else          yData_n->DeepCopy(mData);

        if(j<1)         yData_p->DeepCopy(clipper->GetOutput());
        else            yData_n->DeepCopy(clipper->GetOutput());


    }

    pData_Wedge_p->DeepCopy(yData_p);
    pData_Wedge_n->DeepCopy(yData_n);



    if(isPosLobeMesh())
        pData_Wedge_pm->DeepCopy(pData_Wedge_p);


    if(isNegLobeMesh())
        pData_Wedge_nm->DeepCopy(pData_Wedge_n);
}




void AO::buildWedgeSurface()
{
    int N=gridSize;

    // if (CubeDataWedge!=nullptr)     delete CubeDataWedge;
    //CubeDataWedge= new double [N*N*N];

    int Nz=N,Nx=N,Ny=N;

    int x,y,z;
    double  x0=minBox,
            y0=minBox,
            z0=minBox;

    if(pData_Wedge_p != nullptr)
        pData_Wedge_p->Delete();

    if(pData_Wedge_n != nullptr)
        pData_Wedge_n->Delete();


    if(pData_Wedge_pm != nullptr)
        pData_Wedge_pm->Delete();

    if(pData_Wedge_nm != nullptr)
        pData_Wedge_nm->Delete();

    pData_Wedge_p=vtkPolyData::New();
    pData_Wedge_n=vtkPolyData::New();

    pData_Wedge_pm=vtkPolyData::New();
    pData_Wedge_nm=vtkPolyData::New();


    //build XOY
    auto data_p1 = vtkSmartPointer<vtkPolyData>::New();
    auto data_n1 = vtkSmartPointer<vtkPolyData>::New();
    if(1)
    {
        if(CubeDataXOY==nullptr)
            buildXOYCubeMatrix();

        for(int j=0;j<2;j++)
        {
            //positlve lobe
            auto surface = vtkSmartPointer<vtkMarchingCubes>::New();
            if(j<1)    surface->SetInputData(volumeXOY);
            else       surface->SetInputData(volumeXOY_);
            surface->SetValue(0, isoValue);
            surface->ComputeNormalsOn();
            surface->Update();

            auto mData=vtkPolyData::New();
            mData->DeepCopy(surface->GetOutput());


            //adjust manually: z=0
//#pragma omp parallel for
            for (int i=0;i<mData->GetNumberOfPoints();i++)
            {
                double * p = mData->GetPoint(i);
                if (p[2] > 0.0)
                {
                    p[2]=0.0;
                    mData->GetPoints()->SetPoint(i,p);
                }
            }


            //store
            if(j<1)
                data_p1->DeepCopy(mData);
            else
                data_n1->DeepCopy(mData);



            //clipper
            auto  planeYZ  =   vtkSmartPointer<vtkPlane>::New();
            planeYZ->SetOrigin(0, 0, 0);
            planeYZ->SetNormal(0, 1, 0);

            auto clipperYZ =vtkSmartPointer<vtkClipPolyData>::New();
            clipperYZ->SetInputData(mData);
            clipperYZ->SetClipFunction(planeYZ);
            clipperYZ->GenerateClipScalarsOn();
            clipperYZ->GenerateClippedOutputOn();
            //clipperYZ->SetValue(0.0);
            clipperYZ->Update();


            //store
            if(j<1)
                data_p1->DeepCopy(clipperYZ->GetOutput());
            else
                data_n1->DeepCopy(clipperYZ->GetOutput());

        }

    }



    //build XOZ ------------------------------------------------------------------
    auto data_p2 =  vtkSmartPointer<vtkPolyData>::New();
    auto data_n2 =  vtkSmartPointer<vtkPolyData>::New();
    if(1)
    {
        if(volumeXOZ==nullptr)
            buildXOZCubeMatrix();

        for(int j=0;j<2;j++)
        {
            //positlve lobe
            auto surface = vtkSmartPointer<vtkMarchingCubes>::New();

            if(j<1)
                surface->SetInputData(volumeXOZ);
            else
                surface->SetInputData(volumeXOZ_);

            surface->SetValue(0, isoValue);

            surface->ComputeNormalsOn();
            surface->Update();

            auto mData=vtkPolyData::New();
            mData=surface->GetOutput();


            //adjust manually: y=0
//#pragma omp parallel for
            for (int i=0;i<mData->GetNumberOfPoints();i++)
            {
                double * p = mData->GetPoint(i);
                if (p[1] > 0.0)
                {
                    p[1]=0.0;
                    mData->GetPoints()->SetPoint(i,p);
                }
            }

            //clipper
            auto  planeXY  =   vtkSmartPointer<vtkPlane>::New();
            planeXY->SetOrigin(0, 0, 0);
            planeXY->SetNormal(0, 0, 1);


            auto clipperXY =vtkSmartPointer<vtkClipPolyData>::New();
            clipperXY->SetInputData(mData);
            clipperXY->SetClipFunction(planeXY);
            clipperXY->GenerateClipScalarsOn();
            clipperXY->GenerateClippedOutputOn();
            clipperXY->Update();

            //store
            if(j<1)
                data_p2->DeepCopy(clipperXY->GetOutput());
            else
                data_n2->DeepCopy(clipperXY->GetOutput());
        }
    }




    //build Quarter -------------------------------------------
    auto data_p3 =  vtkSmartPointer<vtkPolyData>::New();
    auto data_n3 =  vtkSmartPointer<vtkPolyData>::New();
    if(1)
    {
        if(CubeDataQuarter==nullptr)
            buildQuarterCubeMatrix();

        for(int j=0;j<2;j++)
        {
            //positlve lobe
            auto surface = vtkSmartPointer<vtkMarchingCubes>::New();

            if(j<1)
                surface->SetInputData(volumeQuarter);
            else
                surface->SetInputData(volumeQuarter_);

            surface->SetValue(0, isoValue);
            surface->ComputeNormalsOn();
            surface->Update();

            auto mData=vtkPolyData::New();
            mData=surface->GetOutput();


            //adjust
//#pragma omp parallel for
            for (int i=0;i<mData->GetNumberOfPoints();i++)
            {
                double * p = mData->GetPoint(i);
                if (p[2] > 0.0) p[2]=0.0;
                if (p[1] > 0.0) p[1]=0.0;

                mData->GetPoints()->SetPoint(i,p);
            }


            auto  planeXY  =   vtkSmartPointer<vtkPlane>::New();
            auto clipperXY =vtkSmartPointer<vtkClipPolyData>::New();
            planeXY->SetNormal(0, 0, -1);
            //planeXY->SetOrigin(0.0,0.0,-interval+0.01);
            clipperXY->SetInputData(mData);
            clipperXY->SetClipFunction(planeXY);
            clipperXY->GenerateClipScalarsOn();
            clipperXY->GenerateClippedOutputOn();
            clipperXY->Update();

            auto planeYZ  =  vtkSmartPointer<vtkPlane>::New();
            auto clipperYZ = vtkSmartPointer<vtkClipPolyData>::New();

            planeYZ->SetNormal(0, -1, 0);
            planeXY->SetOrigin(0.0,-interval-0.01,0.0);
            clipperYZ->SetInputData(clipperXY->GetOutput());
            clipperYZ->SetClipFunction(planeYZ);
            clipperYZ->GenerateClipScalarsOn();
            clipperYZ->GenerateClippedOutputOn();
            clipperYZ->Update();

            //store
            if(j<1)
                data_p3->DeepCopy(clipperYZ->GetOutput());
            else
                data_n3->DeepCopy(clipperYZ->GetOutput());
        }
    }


    //combine three parts
    auto appendFilter = vtkSmartPointer<vtkAppendPolyData>::New();
    appendFilter->AddInputData(data_p1);
    appendFilter->AddInputData(data_p2);
    appendFilter->AddInputData(data_p3);

    auto appendFilter_ = vtkSmartPointer<vtkAppendPolyData>::New();
    appendFilter_->AddInputData(data_n1);
    appendFilter_->AddInputData(data_n2);
    appendFilter_->AddInputData(data_n3);


    //the latest filter
    auto cleanFilter =  vtkSmartPointer<vtkCleanPolyData>::New();
    cleanFilter->SetInputConnection(appendFilter->GetOutputPort());
    //cleanFilter->SetTolerance(0.01);
    cleanFilter->Update();

    auto cleanFilter_ =  vtkSmartPointer<vtkCleanPolyData>::New();
    cleanFilter_->SetInputConnection(appendFilter_->GetOutputPort());
    //cleanFilter->SetTolerance(0.01);
    cleanFilter_->Update();


    pData_Wedge_p->DeepCopy(cleanFilter->GetOutput());
    pData_Wedge_n->DeepCopy(cleanFilter_->GetOutput());

    if(1) {
        auto filter = vtkSmartPointer<vtkTriangleFilter>::New();
        filter->SetInputData(pData_Wedge_p);
        filter->Update();

        auto Normals = vtkSmartPointer<vtkPolyDataNormals>::New();
        Normals->SetInputData(filter->GetOutput());
        Normals->SetFeatureAngle(85.0);

        Normals->ComputePointNormalsOn();
        Normals->ComputeCellNormalsOn();
        Normals->SetAutoOrientNormals(1);
        Normals->ConsistencyOn();
        Normals->SplittingOn();
        Normals->Update();


        auto smoothFilter =   vtkSmartPointer<vtkSmoothPolyDataFilter>::New();
        smoothFilter->SetInputData(Normals->GetOutput());
        smoothFilter->SetRelaxationFactor(0.1);

        smoothFilter->SetRelaxationFactor(0.01);
        //smoothFilter->FeatureEdgeSmoothingOff();
        smoothFilter->BoundarySmoothingOff();
        smoothFilter->SetNumberOfIterations(10);
        smoothFilter->Update();

        pData_Wedge_p->DeepCopy(smoothFilter->GetOutput());
    }


    if(1) {
        auto filter = vtkSmartPointer<vtkTriangleFilter>::New();
        filter->SetInputData(pData_Wedge_n);
        filter->Update();


        auto Normals = vtkSmartPointer<vtkPolyDataNormals>::New();
        Normals->SetInputData(filter->GetOutput());
        Normals->SetFeatureAngle(85.0);


        Normals->ComputePointNormalsOn();
        Normals->ComputeCellNormalsOn();
        Normals->SetAutoOrientNormals(1);
        Normals->ConsistencyOn();
        Normals->SplittingOn();
        Normals->Update();


        auto smoothFilter =   vtkSmartPointer<vtkSmoothPolyDataFilter>::New();
        smoothFilter->SetInputData(Normals->GetOutput());
        smoothFilter->SetRelaxationFactor(0.1);

        smoothFilter->SetRelaxationFactor(0.01);
        //smoothFilter->FeatureEdgeSmoothingOff();
        smoothFilter->BoundarySmoothingOff();
        smoothFilter->SetNumberOfIterations(40);
        smoothFilter->Update();

        pData_Wedge_n->DeepCopy(smoothFilter->GetOutput());
    }


    /*
    if ( AOName.startsWith("S")
         || AOName.startsWith("Px") || AOName.startsWith("Py")
         || AOName.startsWith("Dxy") || AOName.startsWith("Dx2-y2")

         || AOName.startsWith("Fx(x2-3y2)") || AOName.startsWith("Fy(3x2-y2)")
         || AOName.startsWith("Gxy(x2-y2)") || AOName.startsWith("G(x4+y4)")
         )
    {

    }
*/
    //work properly
    if(isPosLobeMesh())
    {
        pData_Wedge_pm->DeepCopy(pData_Wedge_p);

    }


    if(isNegLobeMesh())
    {
        pData_Wedge_nm->DeepCopy(pData_Wedge_n);
    }

}





void AO::append_surfaceYlm_pos(double x, double y, double z)
{
    vector3 data(x,y,z);
    double eps=0.02;

    uint size=surfaceAngular_positive.size();

    if(data.length()<0.01)
        data.Set(0.0,0.0,0.0);

    if(size<1) {
        surfaceAngular_positive.push_back(data);
        return;
    }

    bool isExisted=false;
    for (uint i=0;i<size;i++)
    {

        if((surfaceAngular_positive[i]-data).length()<eps)
        {
            isExisted=true;
            break;
        }
    }

    if (!isExisted) surfaceAngular_positive.push_back(data);
}



void AO::append_surfaceYlm_neg(double x, double y, double z)
{
    double eps=0.02;

    vector3 data(x,y,z);

    if(data.length()<0.01)
        data.Set(0.0,0.0,0.0);

    uint size=surfaceAngular_negative.size();
    if(size<1) {
        surfaceAngular_negative.push_back(data);
        return;
    }

    bool isExisted=false;
    for (uint i=0;i<size;i++)
    {
        if((surfaceAngular_negative[i]-data).length()<eps)
        {
            isExisted=true;
            break;
        }
    }

    if (!isExisted) surfaceAngular_negative.push_back(data);
}



void AO::calc_lengthYlm()
{
    double x=0.0,y=0.0,z=0.0;
    lengthYlm=1.0;
    heigthYlm=1.0;

    if(ylmData_p!=nullptr) {
        if(ylmData_p->GetNumberOfPoints()>20)
            for (int i=0;i<ylmData_p->GetNumberOfPoints();i++)
            {
                double * p = ylmData_p->GetPoint(i);

                //x=abs(p[0]); y=abs(p[1]);  z=abs(p[2]);
                x=p[0];  y=p[1];   z=p[2];

                if(lengthYlm<x)   lengthYlm=x;
                if(lengthYlm<y)   lengthYlm=y;
                if(heigthYlm<z)   heigthYlm=z;
            }
    }

    if(ylmData_n!=nullptr) {
        if(ylmData_n->GetNumberOfPoints()>20)
            for (int i=0;i<ylmData_n->GetNumberOfPoints();i++)
            {
                double * p = ylmData_n->GetPoint(i);

                //x=abs(p[0]); y=abs(p[1]);  z=abs(p[2]);
                x=p[0];  y=p[1];   z=p[2];

                if(lengthYlm<x)   lengthYlm=x;
                if(lengthYlm<y)   lengthYlm=y;
                if(heigthYlm<z)   heigthYlm=z;
            }
    }


}



void AO::buildYlmSurface()
{
    cout << "building ylm surface ..."<<endl;
    ylmData_n=vtkPolyData::New();
    ylmData_p=vtkPolyData::New();

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
            parametricYlm->SetUResolution(l*50);
            parametricYlm->SetVResolution(l*50);
        }

        parametricYlm->Update();

        if(lobe<1)
            ylmData_n->DeepCopy(parametricYlm->GetOutput());
        else
            ylmData_p->DeepCopy(parametricYlm->GetOutput());
    }


    Ylm_pos_existed=Ylm_neg_existed=false;
    if(ylmData_p->GetNumberOfPoints()>100)
        Ylm_pos_existed=true;
    if(ylmData_n->GetNumberOfPoints()>100)
        Ylm_neg_existed=true;

    calc_lengthYlm();
    
    double shift=0.0;
    if(Ylm_pos_existed)
    {
        yData_p=vtkPolyData::New();
        yData_p->DeepCopy(ylmData_p);

        if(orbital_type==XOY)
        {
            auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0, -1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_p->DeepCopy(clipper->GetOutput());

        }


        if(orbital_type==XOZ)
        {
            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);
            

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(planeXOZ);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_p->DeepCopy(clipper->GetOutput());



            /*
            auto fillholesfilter= vtkSmartPointer<vtkFillHolesFilter>::New();
            fillholesfilter->SetInputData(yCutData_p);
            fillholesfilter->SetHoleSize(20.0);
            fillholesfilter->Update();
            yCutData_p->DeepCopy(fillholesfilter->GetOutput());
            */
        }


        if(orbital_type==YOZ)
        {
            auto  planeYOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeYOZ->SetOrigin(shift, 0, 0);
            planeYOZ->SetNormal(-1, 0, 0);
            


            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(planeYOZ);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_p->DeepCopy(clipper->GetOutput());


        }

        //Quarter=XOY+XOZ
        if(orbital_type==Quarter)
        {
            auto planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0, -1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();


            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);

            auto clipper_ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper_->SetInputData(clipper->GetOutput());
            clipper_->SetClipFunction(planeXOZ);
            clipper_->GenerateClipScalarsOn();
            clipper_->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper_->Update();
            yData_p->DeepCopy(clipper_->GetOutput());


            /*
            cut->SetCutFunction(planeXOY);
            cut->GenerateCutScalarsOn();
            cut->Update();

            yCutData_p=vtkPolyData::New();
            yCutData_p->DeepCopy(cut->GetOutput());
            */
        }


        //Corner=XOY+XOZ+YOZ
        if(orbital_type==Corner)
        {
            auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0, -1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();


            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);

            auto clipper_ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper_->SetInputData(clipper->GetOutput());
            clipper_->SetClipFunction(planeXOZ);
            clipper_->GenerateClipScalarsOn();
            clipper_->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper_->Update();


            auto  planeYOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeYOZ->SetOrigin(shift, 0, 0);
            planeYOZ->SetNormal(-1, 0, 0);

            auto clipper__ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper__->SetInputData(clipper_->GetOutput());
            clipper__->SetClipFunction(planeYOZ);
            clipper__->GenerateClipScalarsOn();
            clipper__->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper__->Update();
            yData_p->DeepCopy(clipper__->GetOutput());
        }

        if (orbital_type==Wedge)
        {
            auto  box = vtkSmartPointer<vtkBox>::New();
            box->SetXMin(-100,shift, shift);
            box->SetXMax(100, 200, 200);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_p);
            clipper->SetClipFunction(box);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_p->DeepCopy(clipper->GetOutput());
        }
    }


    if(Ylm_neg_existed)
    {
        yData_n=vtkPolyData::New();
        yData_n->DeepCopy(ylmData_n);


        if(orbital_type==XOY)
        {
            auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0,-1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_n->DeepCopy(clipper->GetOutput());
        }


        if(orbital_type==XOZ)
        {
            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);


            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(planeXOZ);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_n->DeepCopy(clipper->GetOutput());
        }


        if(orbital_type==YOZ)
        {
            auto  planeYOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeYOZ->SetOrigin(shift, 0, 0);
            planeYOZ->SetNormal(-1, 0, 0);



            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(planeYOZ);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_n->DeepCopy(clipper->GetOutput());
        }

        //Quarter=XOY+XOZ
        if(orbital_type==Quarter)
        {
            auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0,-1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();


            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);

            auto clipper_ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper_->SetInputData(clipper->GetOutput());
            clipper_->SetClipFunction(planeXOZ);
            clipper_->GenerateClipScalarsOn();
            clipper_->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper_->Update();
            yData_n->DeepCopy(clipper_->GetOutput());
        }


        //Corner=XOY+XOZ+YOZ
        if(orbital_type==Corner)
        {
            auto  planeXOY  =   vtkSmartPointer<vtkPlane>::New();
            planeXOY->SetOrigin(0, 0, shift);
            planeXOY->SetNormal(0, 0, -1);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(planeXOY);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();


            auto  planeXOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeXOZ->SetOrigin(0, shift, 0);
            planeXOZ->SetNormal(0, -1, 0);

            auto clipper_ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper_->SetInputData(clipper->GetOutput());
            clipper_->SetClipFunction(planeXOZ);
            clipper_->GenerateClipScalarsOn();
            clipper_->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper_->Update();

            auto  planeYOZ  =   vtkSmartPointer<vtkPlane>::New();
            planeYOZ->SetOrigin(shift, 0, 0);
            planeYOZ->SetNormal(-1, 0, 0);

            auto clipper__ =vtkSmartPointer<vtkClipPolyData>::New();
            clipper__->SetInputData(clipper_->GetOutput());
            clipper__->SetClipFunction(planeYOZ);
            clipper__->GenerateClipScalarsOn();
            clipper__->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper__->Update();

            yData_n->DeepCopy(clipper__->GetOutput());
        }

        if (orbital_type==Wedge)
        {
            auto  box = vtkSmartPointer<vtkBox>::New();
            box->SetXMin(-100,shift, shift);
            box->SetXMax(100, 200, 200);

            auto clipper =vtkSmartPointer<vtkClipPolyData>::New();
            clipper->SetInputData(yData_n);
            clipper->SetClipFunction(box);
            clipper->GenerateClipScalarsOn();
            clipper->GenerateClippedOutputOn();
            //clipper->SetValue(0.0);
            clipper->Update();
            yData_n->DeepCopy(clipper->GetOutput());
        }

    }


    cout << "building ylm surface ... done!"<<endl;
}




void AO::setProjType(int type)
{
    projType=proj_NONE;
    switch (type){
    case 1:
        projType=proj_XOY;
        break;
    case 2:
        projType=proj_XOZ;
        break;
    case 3:
        projType=proj_YOZ;
        break;
    }
}

void AO::buildRDFSurface()
{
    if(pData_RDF!=nullptr) return;

    rRDF=0.0;

    cout <<"Building RDF ..."<<endl;

    //int N=gridSize;
    //interval = 2.0*std::ceil(least_Radius)/(double)gridSize;

    double interval_angle=2.0;
    double theta=interval_angle/180.*3.141592654;
    double cosT=cos(theta);
    double sinT=sin(theta);

    auto m_PointsRDF=vtkSmartPointer<vtkPoints>::New();


    double x1,y1,z1, x=-0.1,y=0.0,z;

    int index=0;

    double extension=20.0;
    if(obitalName=="1S") extension=2.0;

    x=0.0;
    while (x<least_Radius+extension)
    {
        y=0.0;

        z=radial_distribution_function(n,l,x);
        x=x+0.1;
        rRDF=x;

        if(x>least_Radius && z<0.000000001) {
            break;
        }

        if(x<0.1) {
            m_PointsRDF->InsertPoint(index,x,y,z);
            index++;
            continue;
        }

        double x0=x,y0=y;
        for (int j=1;j<180;j++)
        {
            x1=cosT*x0-sinT*y0;
            y1=sinT*x0+cosT*y0;
            m_PointsRDF->InsertPoint(index,x1,y1,z);
            index++;

            //refresh
            x0=x1;
            y0=y1;
        }
    }

    //RDF
    if(1)
    {
        auto data=vtkSmartPointer<vtkPolyData>::New();
        data->SetPoints(m_PointsRDF);

        // Triangulate the grid points
        auto delaunay =  vtkSmartPointer<vtkDelaunay2D>::New();
        delaunay->SetInputData(data);
        delaunay->Update();

        pData_RDF=vtkPolyData::New();
        pData_RDF->DeepCopy(delaunay->GetOutput());
    }

    cout << "                ... done"<<endl;
}


void AO::buildRSurface()
{
    if(pData_R!=nullptr) return;

    cout <<"Building R ..."<<endl;
    cout <<" with rdf= "<<rRDF<<endl;

    int N=gridSize;
    //interval = 2.0*std::ceil(least_Radius)/(double)gridSize;

    double interval_angle=2.0;
    double theta=interval_angle/180.*3.141592654;
    double cosT=cos(theta);
    double sinT=sin(theta);


    auto m_PointsR=vtkSmartPointer<vtkPoints>::New();


    double x1,y1,z1,zz, x=-0.1,y=0.0,z;

    int index=0;

    double extension=20.0;
    if(obitalName=="1S") extension=0.0;

    while (x<rRDF)
    {
        x=x+0.1;
        y=0.0;

        z=radial_function(n,l,x);
        zz=z*z;

        if(x<0.1) {
            m_PointsR->InsertPoint(index,x,y,z);
            index++;
            continue;
        }

        double x0=x,y0=y;
        for (int j=1;j<180;j++)
        {
            x1=cosT*x0-sinT*y0;
            y1=sinT*x0+cosT*y0;
            m_PointsR->InsertPoint(index,x1,y1,z);
            index++;

            //refresh
            x0=x1;
            y0=y1;
        }
    }

    //R
    if(1)
    {
        auto data=vtkSmartPointer<vtkPolyData>::New();
        data->SetPoints(m_PointsR);

        // Triangulate the grid points
        auto delaunay =  vtkSmartPointer<vtkDelaunay2D>::New();
        delaunay->SetInputData(data);
        delaunay->Update();

        pData_R=vtkPolyData::New();
        pData_R->DeepCopy(delaunay->GetOutput());
    }

    cout << "                ... done"<<endl;
}


void AO::buildR2Surface()
{
    if(pData_R2!=nullptr) return;

    cout <<"Building R2 ..."<<endl;
    cout <<" with rdf= "<<rRDF<<endl;

    int N=gridSize;
    //interval = 2.0*std::ceil(least_Radius)/(double)gridSize;

    double interval_angle=2.0;
    double theta=interval_angle/180.*3.141592654;
    double cosT=cos(theta);
    double sinT=sin(theta);

    auto m_PointsR2=vtkSmartPointer<vtkPoints>::New();

    double x1,y1,z1,zz, x=-0.1,y=0.0,z;

    int index=0;

    double extension=20.0;

    if(obitalName=="1S")
        extension=0.0;

    while (x<rRDF)
    {
        x=x+0.1;
        y=0.0;

        z=radial_function(n,l,x);
        zz=z*z;

        if(x<0.1) {

            m_PointsR2->InsertPoint(index,x,y,zz);
            index++;
            continue;
        }

        double x0=x,y0=y;
        for (int j=1;j<180;j++)
        {
            x1=cosT*x0-sinT*y0;
            y1=sinT*x0+cosT*y0;

            m_PointsR2->InsertPoint(index,x1,y1,zz);
            index++;

            //refresh
            x0=x1;
            y0=y1;
        }
    }

    //R2
    if(1)
    {
        auto data=vtkSmartPointer<vtkPolyData>::New();
        data->SetPoints(m_PointsR2);

        // Triangulate the grid points
        auto delaunay =  vtkSmartPointer<vtkDelaunay2D>::New();
        delaunay->SetInputData(data);
        delaunay->Update();

        pData_R2=vtkPolyData::New();
        pData_R2->DeepCopy(delaunay->GetOutput());
    }

    cout << "                ... done"<<endl;
}



void AO::buildProjectionData()
{
    cout <<"Building projection for atomic orbitals ..."<<endl;

    //includes (0,0,0)
    proj_scale=2;
    int Nx=gridSize,
            Ny=gridSize,
            Nz=gridSize,
            N=proj_scale*gridSize;

    // cout << "------------AO::buildProjectionData()-------"<<endl;
    // cout << maxBox<<endl;
    // cout << interval<<endl;
    // cout<<N<<endl;

    double interval0=(maxBox-minBox)/N;
    double maxBox0=interval0*N/2.0;
    double minBox0=-maxBox0;

    cout << "------------"<<endl;
    cout << maxBox0<<endl;
    cout << interval0<<endl;

    gridSize_project=N;
    maxBox_project=maxBox0;
    minBox_project=minBox0;
    interval_project=interval0;

    N=N+1;

    double  x0=minBox0,
            y0=minBox0,
            z0=minBox0;
    int i,j,k;


    QString AOName=getName();
    AOName.remove(0,1);

    cout <<" calculating AO projection data:"<<endl;
    //cout << AOName.toStdString().c_str()<<endl;


    projType=proj_NONE;

    if ( AOName.startsWith("S")
         || AOName.startsWith("Px") || AOName.startsWith("Py")
         || AOName.startsWith("Dxy") || AOName.startsWith("Dx2-y2")

         || AOName.startsWith("Fx(x2-3y2)") || AOName.startsWith("Fy(3x2-y2)")
         || AOName.startsWith("Gxy(x2-y2)") || AOName.startsWith("G(x4+y4)")
         )
    {
        // sendMessage("Projection to XOY plane");

        projType=proj_XOY;

        cout <<" Projection to XOY plane"<<endl;

        if(dataXOY.size()>0)
            dataXOY.clear();

        dataXOY.resize(N);
        //#pragma omp parallel for
        for ( i=0;i<N;i++) dataXOY[i].resize(N);

        //#pragma omp parallel for
        for( i=0; i < N;  i++)
            //#pragma omp parallel for
            for( j=0; j < N;  j++)
                dataXOY[i][j]=psi_cart(n,l,m,x0+interval0*i,y0+interval0*j, 0.0);

        cout <<" ... Done!"<<endl;
        return;
    }

    if ( AOName.startsWith("Dyz") ||AOName.startsWith("Fyz2")
         || AOName.startsWith("Gz3y") || AOName.startsWith("Gzy3")
         || AOName.startsWith("Gyz3")
         )
    {
        projType=proj_YOZ;
        //sendMessage("Projection to YOZ plane");
        cout <<" Projection to YOZ plane"<<endl;

        if(dataYOZ.size()>0)    dataYOZ.clear();
        dataYOZ.resize(N);
        //#pragma omp parallel for
        for ( i=0;i<N;i++) dataYOZ[i].resize(N);

        //#pragma omp parallel for
        for( j=0; j < N;  j++)
            //#pragma omp parallel for
            for( k=0; k < N;  k++)
                dataYOZ[j][k]=calc_Psi(0.0,y0+interval0*j, z0+interval0*k);

        cout <<" ... Done!"<<endl;
        return;
    }

    else if ( AOName.startsWith("Pz")
              || AOName.startsWith("Dz2")
              || AOName.startsWith("Dxz")
              || AOName.startsWith("Fxz2")|| AOName.startsWith("Fz3")
              || AOName.startsWith("Gz4") || AOName.startsWith("Gz3x")
              || AOName.startsWith("Gzx3") || AOName.startsWith("Gz3x")|| AOName.startsWith("Gxz3")

              )
    {
        //sendMessage("Projection to XOZ plane");

        projType=proj_XOZ;
        cout <<" Projection to XOZ plane"<<endl;

        if(dataXOZ.size()>0)
            dataXOZ.clear();

        dataXOZ.resize(N);
        //#pragma omp parallel for
        for ( i=0;i<N;i++) dataXOZ[i].resize(N);


        //#pragma omp parallel for
        for( i=0; i < N;  i++)
            for( k=0; k < N;  k++)
                dataXOZ[i][k]=calc_Psi(x0+interval0*i, 0.0,z0+interval0*k);

        cout <<" ... Done!"<<endl;

        return;
    }
}



double AO::psi_byName(double x, double y, double z)
{
    return radial_byName(x,y,z)*Ylm_byName(x,y,z);
}


double AO::radial_byName(double x, double y, double z)
{
    QString AOName=obitalName;

    double r=sqrt(x*x+y*y+z*z);

    if (r<0.001) r=0.001;
    if (abs(x)<0.001)
        x=sgnd(x)*0.001;

    double p=1.0,p2,p3,p4,p5, p6;

    double  Z3=Z*Z*Z;
    double  Zeff=Z/a0;

    double  x2=x*x;
    double  y2=y*y;
    double  z2=z*z;

    double  x4=x2*x2,
            y4=y2*y2,
            z4=z2*z2;

    double  r2=r*r;
    double  r3=r2*r;
    double  r4=r3*r;

    double  Zeff32 = pow(Zeff,1.5);

    double NS=1/sqrt(4*M_PI);
    double Ys = NS;

    /*
     // NR=sqrt (2^3*(n-l-1)! / (2*n * (n+l)!* (n+l)! * (n+l)! )
     R1s = 2 * Zeff32 * exp(-p/2);
     R2s = 1/(2*sqrt(2) ) * ( 2 - p ) * Zeff32 * exp(-p/2);
     R3s = 1/(9*sqrt(3) ) * ( 6 - 6*p + p2 ) * Zeff32 * exp(-p/2);
     R4s = 1/96 * ( 24 - 36*p + 12*p2 - p3 ) * Zeff32 * exp(-p/2);
     R5s = 1/(300*sqrt(5) )  * ( 120 - 240*p + 120*p2 - 20*p3 + p4 ) * Zeff32 * exp(-p/2);
     R6s = 1/(2160*sqrt(6) ) * ( 720 - 1800*p + 1200*p2 - 300*p3 + 30*p4 - p5 ) * Zeff32 * exp(-p/2);
     //R7s = 1                *(5040 - 15120*ρ + 12600*ρ2 - 4200*ρ3 + 630*ρ4 - 42*ρ5 + ρ6)  * Zeff32 * exp(-p/2);
 */
    double R=1.0;
    double alpha=1.0;



    if (AOName.startsWith("1S") )
    {
        n=1; l=0;
        p = 2.0 * Z * r/a0;
        R = 2.0 * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if (AOName.startsWith("2S"))
    {
        n=2; l=0;

        alpha=2.0 * Z/(n*a0);
        p = alpha * r;

        R = 1.0/(2.0*sqrt(2.0) ) * ( 2.0 - p) * Zeff32 * exp(-p/2.0);
        return R;
    }


    else if (AOName.startsWith("3S"))
    {
        n=3; l=0;

        alpha=2.0 * Z/(n*a0);
        p = alpha * r;
        p2=p*p;

        R = 1/(9.0*sqrt(3.0) ) * ( 6.0 - 6.0*p + p2 ) * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if (AOName.startsWith("4S"))
    {
        n=4; l=0;
        alpha=2.0 * Z/(n*a0);
        p = alpha * r;
        p2=p*p;p3=p2*p;
        R = 1/96. * ( 24. - 36.0*p + 12*p2 - p3 ) * Zeff32 * exp(-p/2);
        return R;
    }

    else if (AOName.startsWith("5S"))
    {
        n=5;l=0;
        p = 2.0 * Z * r / (n*a0);p2=p*p;p3=p2*p;p4=p2*p2;
        R = 1.0/(300.0*sqrt(5.0) )  * ( 120.0 - 240.0*p + 120.0*p2 - 20.0*p3 + p4 ) * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if (AOName.startsWith("6S"))
    {

        n=6;l=0;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;
        p3=p2*p;
        p4=p2*p2;
        p5=p2*p3;
        R = 1.0/(2160.*sqrt(6.0) ) *
                ( 720. - 1800.*p + 1200.*p2 - 300.*p3 + 30.*p4 - p5 )
                * Zeff32 * exp(-p/2);
        return R;
    }

    //waiting for checking
    else if (AOName.startsWith("7S"))
    {
        n=7;l=0;
        p = 2.0 * Z * r /(n*a0);
        p2=p*p;
        p3=p2*p;
        p4=p2*p2;
        p5=p2*p3;
        p6=p3*p3;
        double k=1.0;
        R = k * (5040.0 - 15120.*p + 16200.*p2 - 4200.0*p3 + 630.*p4 + 42.*p5 + p6 )
                * Zeff32 * exp(-p/2);
        return R;
    }

    /*
    R2p  = 1/(2*sqrt(6)) * p * Zeff32 * exp(-p/2);
    R3p  = 1/(9*sqrt(6)) * p * ( 4 - p ) * Zeff32 * exp(-p/2);
    R4p  = 1/(32*sqrt(15)) * p* ( 20 - 10*p + p2 ) * Zeff32 * exp(-p/2);
    R5p  = 1/(150/sqrt(30)) * p *( 120 - 90*p + 18*p2 - p3 ) * Zeff32 * exp(-p/2);
    R6p  = 1/(432/sqrt(210)) * p * ( 840 - 840*p + 252*p2 - 28*p3 + p4 ) *  Zeff32 * exp(-p/2);
*/

    else if (AOName.startsWith("2P"))
    {
        n=2; l=1;
        p = 2.0 * Z * r / (n*a0);
        R  = 1/(2.*sqrt(6.0)) * p * Zeff32 * exp(-p/2);
        return R;
    }

    else if  (AOName.startsWith("3P"))
    {
        n=3;l=1;
        p = 2.0 * Z * r / (n*a0);
        R  = 1/(9.*sqrt(6)) * p * ( 4. - p ) * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("4P"))
    {
        n=4;l=1;
        p = 2.0 * Z * r / (n*a0);p2=p*p;
        R  = 1./(32.*sqrt(15.)) * p* ( 20. - 10.*p + p2 ) * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("5P"))
    {
        n=5;l=1;
        p = 2.0 * Z * r / (n*a0);p2=p*p;p3=p2*p;
        R  = 1./(150.*sqrt(30.)) * p *( 120. - 90.*p + 18.*p2 - p3 ) * Zeff32 * exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("6P"))
    {
        n=6;l=1;
        p = 2.0 * Z * r / (n*a0);p2=p*p;p3=p2*p;p4=p2*p2;
        R  = 1./(432.*sqrt(210.)) * p * ( 840. - 840.*p + 252.*p2 - 28.*p3 + p4 ) *  Zeff32 * exp(-p/2.);
        return R;
    }

    /*
    R3d = 1/(9*sqrt(30)) * p2 * Zeff32 * exp(-p/2);
    R4d = 1/(96*sqrt(5)) * p2 *( 6 - p ) * Zeff32 * exp(-p/2);
    R5d = 1/(150*sqrt(70) ) * p2 *( 42 - 14*p + p2 ) * Zeff32 * exp(-p/2);
    R6d = 1/(864*sqrt(105) ) * p2 *( 336 - 168*p + 24*p2 - p3 ) * Zeff32 * exp(-p/2);
    */

    else if  (AOName.startsWith("3D"))
    {
        n=3; l=2;
        p = 2.0 * Z * r / (n*a0);p2=p*p;
        R = 1./(9.0*sqrt(30)) * p2 * Zeff32 * exp(-p/2);
        return R;
    }

    else if (AOName.startsWith("4D"))
    {
        n=4;  l=2;
        p = 2.0 * Z * r / (n*a0);p2=p*p;
        R = 1.0/(96.*sqrt(5)) * p2 *( 6. - p ) * Zeff32 * exp(-p/2);
        return R;
    }

    else if (AOName.startsWith("5D"))
    {
        n=5; l=2;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;

        R = 1.0/(150.*sqrt(70.) ) * p2 *( 42.0 - 14.0*p + p2 ) * Zeff32 * exp(-p/2.0);
        return R;
    }


    else if (AOName.startsWith("6D"))
    {
        n=5; l=2;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;
        p3=p2*p;

        R = 1.0/(864.*sqrt(105.) ) * p2 *( 336. - 168.*p + 24.*p2 - p3 ) * Zeff32 * exp(-p/2.0);
        return R;
    }


    else if (AOName.startsWith("4F"))
    {
        n=4; l=3;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;
        p3=p2*p;

        R = 1/(96.*sqrt(35.)) * p3 * Zeff32 * exp(-p/2.0);
        return R;

    }

    else if  (AOName.startsWith("5F"))
    {
        n=5; l=3;
        p = 2.0 * Z * r / (n*a0);
        p3=p*p*p;

        R = 1.0/(300.*sqrt(70.)) * p3 * ( 8.0 - p ) * Zeff32* exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("6F"))
    {
        n=6;l=3;
        p = 2.0 * Z * r / (n*a0);

        p2=p*p;
        p3=p2*p;

        R = 1./(2592.*sqrt(35.)) * p3 * ( 72.0 - 18.0*p + p2 ) * Zeff32* exp(-p/2.0);
        return R;
    }


    //7F
    else if  (AOName.startsWith("7F")) {
        n=7;l=3;
        p = 2.0 * Z * r / (n*a0);p2=p*p;p3=p2*p;
        R = 1.0/300.0/sqrt(70.0) *(8.0-p)*p3*Zeff32*exp(-p/2.0);
        return R;
    }


    else if  (AOName.startsWith("5G"))
    {
        n=5; l=4;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;p4=p2*p2;

        R =  1.0/(900.*sqrt(70.0)) * p4 * Zeff32*exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("6G"))
    {
        n=6; l=4;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;
        p4=p2*p2;

        R =  1.0 /(12960.8*sqrt(7.0)) * p4 * (10.0-p) * Zeff32* exp(-p/2.0);
        return R;
    }

    //waiting?
    else if  (AOName.startsWith("7G"))
    {
        n=7; l=4;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;p4=p2*p2;

        R=1.0;
        return R;
    }




    else if  (AOName.startsWith("6H"))
    {
        n=6; l=5;
        p = 2.0 * Z * r / (n*a0);
        p2=p*p;
        p5=p2*p2*p;

        R =  1.0 /(12960.*sqrt(77.)) * p5 * Zeff32* exp(-p/2.0);
        return R;
    }

    else if  (AOName.startsWith("7H"))
    {
        n=6; l=5;
        p = 2.0 * Z * r / (n*a0);

        p2=p*p;
        p5=p2*p2*p;
        R =  1.0 ;

        return R;
    }
}


double AO::Ylm(double theta, double phi)
{
    return angular_function(l, m, theta, phi);
}


double AO::Ylm_byName_0(double x, double y,double z)
{
    QString AOName1=obitalName;
    AOName1.remove(0,1);

    double sinT,cosT,sinP,cosP;
    double phi, theta;


    double r = sqrt(x * x + y * y + z * z);
    if (r>0.01) {
        cosT=z/r;
        sinT=sqrt(1-cosT*cosT);
    }
    else {
        return 0.0;
    }


    phi=3.141592654/2.0; //=pi/2
    if(m!=0)
    {
        double rxy = sqrt(x * x + y * y);
        if (rxy > 0.001)
            phi = m * atan2(y, x);
    }

    sinP=sin(phi);
    cosP=cos(phi);


    double Y=1.0;
    if ( AOName1.startsWith ("S")  ) {
        Y=1.0/sqrt(4.0*M_PI);
        m=0;
        return Y;
    }

    else if ( AOName1.startsWith("P")  )
    {
        if  (AOName1.startsWith("Px"))  {
            Y = sqrt(3.0/M_PI/4.0) * sinT*cosP;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Py"))  {
            Y= sqrt(3.0/M_PI/4.0) * sinT*sinP;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Pz"))  {
            Y = sqrt(3.0/M_PI/4.0) * cosT;
            m=0;
            return Y;
        }

    }





    else if ( AOName1.startsWith("D") )
    {
        if  (AOName1.startsWith("Dxy"))     {
            Y = sqrt(15.0/M_PI)/2.0 *sinT*sin(2.0*phi);
            m=-2;
            return Y;
        }

        if  (AOName1.startsWith("Dxz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * sinT*cosT*cosP;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Dyz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * sinT*cosT*sinP;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Dx2-y2"))  {
            Y = sqrt(15.0/M_PI)/4.0 *sinT*cos(2.0*phi);
            m=2;
            return Y;
        }
        /*
        else if (name.startsWith("Dz2"))        m=0;
        else if (name.startsWith("Dxz"))        m=1;
        else if (name.startsWith("Dyz"))        m=-1;

        else if (name.startsWith("Dxy"))        m=-2;
        else if (name.startsWith("Dx2-y2"))     m=2;
        */



        if  (AOName1.startsWith("Dz2"))     {
            Y = sqrt(5.0/M_PI)/4.0 * (3.0*cosT*cosT-1.0);
            m=0;
            return Y;
        }
    }



    else if ( AOName1.startsWith("F")  )
    {
        if  (AOName1.startsWith("Fx3"))
        {
            Y = sqrt(70.0/M_PI)/8.0 *sinT*sinT*sinT*cos(3*phi);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fy3"))
        {
            Y = sqrt(70.0/M_PI)/8.0 *sinT*sinT*sinT*sin(3*phi);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fz3"))
        {
            Y = sqrt(7.0/M_PI)/4.0 * (5.0*cosT*cosT*cosT-3*cosT) ;
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fxz2"))    {
            Y =  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*cosP ;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Fyz2"))    {
            Y =  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*sinP;
            m=-1;
            return Y;
        }


        if  (AOName1.startsWith("Fz(x2-y2)"))     {
            Y =   sqrt(105.0/M_PI)/4.0 *sinT*sinT*cosT*cos(2.0*phi) ;
            m=2;
            return Y;
        }


        if  (AOName1.startsWith("Fxyz") || AOName1.startsWith("Fzxy")) {
            Y =   sqrt(105.0/M_PI)/2.0 *sinT*sinT*cosT*sin(2.0*phi);
            m=-2;
            return Y;
        }


        //x(x2-3y2)
        if  (AOName1.startsWith("Fx(x2-3y2)"))    {
            Y = sqrt(70./M_PI)/8.0 *sinT*sinT*sinT*cos(3.0*phi);
            m=3;
            return Y;
        }

        //y(3x2-y2)
        if  (AOName1.startsWith("Fy(3x2-y2)"))    {
            Y = sqrt(70./M_PI)/8.0  *sinT*sinT*sinT*sin(3.0*phi);
            m=-3;
            return Y;
        }
    }


    //formular based on mathematica ShpericalHarmonicY[l,m,theta,phi]
    //name form https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Mathematical_Functions/M4%3A_Spherical_Harmonics
    else if ( AOName1.startsWith("G") )
    {
        double cosT2=cosT*cosT,
                cosT4=cosT2*cosT2;

        double sinT2=sinT*sinT,
               sinT4=sinT2*sinT2;

        if  (AOName1.startsWith("Gz4"))
        {
            m=0;
            Y = 3.0/16.0/sqrt(M_PI)*(3.0-30.0*cosT2+35.0*cosT4);
            return Y;
        }

        if  (AOName1.startsWith("Gz3x") || AOName1.startsWith("Gxz3"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*cosP ;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Gz3y") || AOName1.startsWith("Gyz3"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*sinP ;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Gz2(x2-y2)") || AOName1.startsWith("G(x2-y2)z2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*cos(2.0*phi) ;
            m=2;
            return Y;
        }

        if (AOName1.startsWith("Gz2xy") || AOName1.startsWith("Gxyz2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*sin(2.0*phi) ;
            m=-2;
            return Y;
        }

        if  (AOName1.startsWith("Gzx3") || AOName1.startsWith("Gx3z"))
        {
            Y = 3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*cos(3.0*phi) ;
            m=3;
            return Y;
        }

        if (AOName1.startsWith("Gzy3") || AOName1.startsWith("Gy3z"))
        {
            Y = 3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*sin(3.0*phi) ;
            m=-3;
            return Y;
        }


        if (AOName1.startsWith("Gx4+y4"))
        {
            Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*cos(4.0*phi) ;
            m=4;
            return Y;
        }

        if (AOName1.startsWith("Gxy(x2-y2)"))
        {
            Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*sin(4.0*phi) ;
            m=-4;
            return Y;
        }

    }
}


//https://reference.wolfram.com/language/ref/SphericalHarmonicY.html
double AO::Ylm_byName(double theta, double phi)
{
    QString AOName1=obitalName;
    AOName1.remove(0,1);

    double sinT,cosT,sinP,cosP;

    if(abs(theta) <0.01 )
    {
        sinT=0.0;
        cosT=1.0;
    }
    else {
        sinT=sin(theta);
        cosT=cos(theta);
    }

    if(abs(phi) <0.01 )
    {
        sinP=0.0;
        cosP=1.0;
    }
    else
    {
        sinP=sin(phi);
        cosP=cos(phi);
    }


    double Y=1.0;
    if ( AOName1.startsWith ("S")  ) {
        Y=1.0/sqrt(4.0*M_PI);
        m=0;
        return Y;
    }

    else if ( AOName1.startsWith("P")  )
    {
        if  (AOName1.startsWith("Px"))  {
            Y = sqrt(3.0/M_PI/4.0) * sinT*cosP;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Py"))  {
            Y= sqrt(3.0/M_PI/4.0) * sinT*sinP;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Pz"))  {
            Y = sqrt(3.0/M_PI/4.0) * cosT;
            m=0;
            return Y;
        }

    }

    else if ( AOName1.startsWith("D") )
    {
        if  (AOName1.startsWith("Dxz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * sinT*cosT*cosP;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Dyz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * sinT*cosT*sinP;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Dx2-y2"))  {
            Y = sqrt(15.0/M_PI)/4.0 *sinT*sinT*cos(2.0*phi);
            m=2;
            return Y;
        }

        if  (AOName1.startsWith("Dxy"))     {
            Y = sqrt(15.0/M_PI)/4.0 *sinT*sinT*sin(2.0*phi);
            m=-2;
            return Y;
        }


        if  (AOName1.startsWith("Dz2"))     {
            Y = sqrt(5.0/M_PI)/4.0 * (3.0*cosT*cosT-1.0);
            m=0;
            return Y;
        }
    }



    else if ( AOName1.startsWith("F")  )
    {
        if  (AOName1.startsWith("Fx3"))
        {
            Y = sqrt(70.0/M_PI)/8.0 *sinT*sinT*sinT*cos(3*phi);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fy3"))
        {
            Y = sqrt(70.0/M_PI)/8.0 *sinT*sinT*sinT*sin(3*phi);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fz3"))
        {
            Y = sqrt(7.0/M_PI)/4.0 * (5.0*cosT*cosT*cosT-3*cosT) ;
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fxz2"))    {
            Y =  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*cosP ;
            m=1;return Y;
        }

        if  (AOName1.startsWith("Fyz2"))    {
            Y =  sqrt(42./M_PI)/8.0 *sinT*(5*cosT*cosT-1.0)*sinP;
            m=-1;return Y;
        }


        if  (AOName1.startsWith("Fz(x2-y2)"))     {
            Y =   sqrt(105.0/M_PI)/4.0 *sinT*sinT*cosT*cos(2.0*phi) ;
            m=2;return Y;
        }


        if  (AOName1.startsWith("Fxyz") || AOName1.startsWith("Fzxy")) {
            Y =   sqrt(105.0/M_PI)/2.0 *sinT*sinT*cosT*sin(2.0*phi);
            m=-2;return Y;
        }


        //x(x2-3y2)
        if  (AOName1.startsWith("Fx(x2-3y2)"))    {
            Y = sqrt(70./M_PI)/8.0 *sinT*sinT*sinT*cos(3.0*phi);
            m=3;return Y;
        }

        //y(3x2-y2)
        if  (AOName1.startsWith("Fy(3x2-y2)"))    {
            Y = sqrt(70./M_PI)/8.0  *sinT*sinT*sinT*sin(3.0*phi);
            m=-3;return Y;
        }
    }


    //formular based on mathematica ShpericalHarmonicY[l,m,theta,phi]
    //name form https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Mathematical_Functions/M4%3A_Spherical_Harmonics
    else if ( AOName1.startsWith("G") )
    {
        double cosT2=cosT*cosT,
                cosT4=cosT2*cosT2;

        if  (AOName1.startsWith("Gz4")) {
            m=0;

            Y = 3.0/16.0/sqrt(M_PI)*(3.0-30.0*cosT2+35.0*cosT4);
            return Y;
        }

        if  (AOName1.startsWith("Gz3x") || AOName1.startsWith("Gxz3"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*cosP ;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Gz3y") || AOName1.startsWith("Gyz3"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*(7.0*cosT2-3.0)*sinP ;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Gz2(x2-y2)") || AOName1.startsWith("G(x2-y2)z2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*cos(2.0*phi) ;
            m=2;
            return Y;
        }

        if (AOName1.startsWith("Gz2xy") || AOName1.startsWith("Gxyz2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*sinT*sinT*(-7.0*cosT2+1)*sin(2.0*phi) ;
            m=-2;
            return Y;
        }

        if  (AOName1.startsWith("Gzx3") || AOName1.startsWith("Gx3z"))
        {
            Y = 3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*cos(3.0*phi) ;
            m=3;
            return Y;
        }

        if (AOName1.startsWith("Gzy3") || AOName1.startsWith("Gy3z"))
        {
            Y = 3.0/8.0*sqrt(35.0/M_PI)*sinT*sinT*sinT*cosT*sin(3.0*phi) ;
            m=-3;
            return Y;
        }


        if (AOName1.startsWith("Gx4+y4"))
        {
            Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*cos(4.0*phi) ;
            m=4;
            return Y;
        }

        if (AOName1.startsWith("Gxy(x2-y2)"))
        {
            Y = 3.0/16*sqrt(35.0/M_PI)*sinT*sinT*sinT*sinT*sin(4.0*phi) ;
            m=-4;
            return Y;
        }

    }

    /* based on mathematica, and no name is available in web
     else if ( AOName1.startsWith("H"))
     {
         if (AOName1.startsWith("H")) {
             m=0;
             Y=1.0/16*sqrt(11/M_PI)*(15.0*cosT-70.0*cosT*cosT*cosT + 63.0*cosT*cosT*cosT*cosT*cosT);
         }

         if (AOName1.startsWith("H")) {
            m=1;
            Y=1.0/16.0*sqrt(165/2.0/M_PI)*(1.0-14*cosT*cosT+21.0*cosT*cosT*cosT*cosT)*sinT*cosP;
         }

         if (AOName1.startsWith("H")) {
            m=-1;
            Y=1.0/16.0*sqrt(165/2.0/M_PI)*(1.0-14*cosT*cosT+21.0*cosT*cosT*cosT*cosT)*sinT*sinP;
         }

         if (AOName1.startsWith("H")) {
            m=2;
            Y=1.0/8.0*sqrt(1155.0/2.0/M_PI)*cosT*(-1.0+3.0*cosT*cosT)*sinT*sinT*cos(2.0*phi);
         }

         if (AOName1.startsWith("H")) {
            m=-2;
            Y=1.0/8.0*sqrt(1155.0/2.0/M_PI)*cosT*(-1.0+3.0*cosT*cosT)*sinT*sinT*sin(2.0*phi);
         }

         if (AOName1.startsWith("H")) {
            m=3;
            Y=1.0/32.0*sqrt(385.0/M_PI)*(-1.0+9.0*cosT*cosT)*sinT*sinT*sinT*cos(3.0*phi);
         }


        if (AOName1.startsWith("H")) {
            m=-3;
            Y=1.0/32.0*sqrt(385.0/M_PI)*(-1.0+9.0*cosT*cosT)*sinT*sinT*sinT*sin(3.0*phi);
        }

        if (AOName1.startsWith("H")) {
            m=4;
            Y=3.0/16.0*sqrt(385.0/2.0/M_PI)*cosT*sinT*sinT*sinT*sinT*cos(4.0*phi);
         }

        if (AOName1.startsWith("H")) {
            m=-4;
            Y=3.0/16.0*sqrt(385.0/2.0/M_PI)*cosT*sinT*sinT*sinT*sinT*sin(4.0*phi);
        }

        if (AOName1.startsWith("H")) {
            m=5;
            Y=3.0/32.0*sqrt(77.0/M_PI)*sinT*sinT*sinT*sinT*sinT*cos(5.0*phi);
        }

        if (AOName1.startsWith("H")) {
            m=-5;
            Y=-3.0/32.0*sqrt(77.0/M_PI)*sinT*sinT*sinT*sinT*sinT*sin(5.0*phi);
         }
     }
     */
}



double AO::Ylm_byName(double x, double y,double z)
{
    QString AOName1=obitalName;
    AOName1.remove(0,1);

    double r = sqrt(x * x + y * y + z * z);
    if (r<0.01)
    {
        return 0.0;
    }

    double r2=r*r,r3=r2*r,r4=r2*r2,r5=r2*r3,r6=r3*r3;
    double x2=x*x,y2=y*y,z2=z*z,z4=z2*z2;
    double x2y2=x2+y2;

    double sqrtPi=sqrt(M_PI);

    double Y=1.0;
    if ( AOName1.startsWith ("S")  ) {
        Y=1.0/2.0/sqrtPi;
        m=0;
        return Y;
    }

    else if ( AOName1.startsWith("P")  )
    {
        if  (AOName1.startsWith("Px"))  {
            Y = sqrt(3.0/M_PI/4.0) * x/r;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Py"))  {
            Y= sqrt(3.0/M_PI/4.0) * x/r;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Pz"))  {
            Y = sqrt(3.0/M_PI/4.0) * z/r;
            m=0;
            return Y;
        }

    }




    else if ( AOName1.startsWith("D") )
    {
        if  (AOName1.startsWith("Dxy"))     {
            Y = 0.5*sqrt(15.0/M_PI)*x*y/r2;
            m=-2;
            return Y;
        }

        if  (AOName1.startsWith("Dxz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * x*z/r2;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Dyz"))     {
            Y = sqrt(15.0/M_PI)/2.0 * y*z/r2;
            m=-1;
            return Y;
        }

        if  (AOName1.startsWith("Dx2-y2"))  {
            Y = sqrt(15.0/M_PI)/4.0 *(x2-y2)/r2;
            m=2;
            return Y;
        }
        /*
        else if (name.startsWith("Dz2"))        m=0;
        else if (name.startsWith("Dxz"))        m=1;
        else if (name.startsWith("Dyz"))        m=-1;

        else if (name.startsWith("Dxy"))        m=-2;
        else if (name.startsWith("Dx2-y2"))     m=2;
        */



        if  (AOName1.startsWith("Dz2"))     {
            Y = sqrt(5.0/M_PI)/4.0 * (2*z2-x2y2)/r2;
            m=0;
            return Y;
        }
    }



    else if ( AOName1.startsWith("F")  )
    {
        if  (AOName1.startsWith("Fx3"))
        {
            Y  = sqrt(7.0/M_PI)/4.0 * z*(2*x2-3*y2-3*y2);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fy3"))
        {
            Y = sqrt(7.0/M_PI)/4.0 * z*(2*y2-3*x2-3*z2);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fz3"))
        {
            Y = sqrt(7.0/M_PI)/4.0 * z*(2*z2-3*x2-3*y2);
            m=0;
            return Y;
        }

        if  (AOName1.startsWith("Fxz2"))    {
            Y =  sqrt(42.0/M_PI)/8.0 *x*(4*z2-x2-y2) ;
            m=1;
            return Y;
        }

        if  (AOName1.startsWith("Fyz2"))    {
            Y =  sqrt(42./M_PI)/8.0 *y*(4*z2-x2-y2);
            m=-1;
            return Y;
        }


        if  (AOName1.startsWith("Fz(x2-y2)"))     {
            Y =   sqrt(105.0/M_PI)/4.0 *(x2-y2)*z/r3;
            m=2;
            return Y;
        }


        if  (AOName1.startsWith("Fxyz") || AOName1.startsWith("Fzxy")) {
            Y =   sqrt(105.0/M_PI)/2.0 *x*y*z/r3;
            m=-2;
            return Y;
        }


        //x(x2-3y2)
        if  (AOName1.startsWith("Fx(x2-3y2)"))    {
            Y = sqrt(70./M_PI)/8.0 *(x2-3*y2)*x/r3;
            m=3;
            return Y;
        }


        //y(3x2-y2)
        if  (AOName1.startsWith("Fy(3x2-y2)"))    {
            Y = sqrt(70./M_PI)/8.0*(3*x2-y2)*y/r3;
            m=-3;
            return Y;
        }
    }


    //formular based on mathematica ShpericalHarmonicY[l,m,theta,phi]
    //name form https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Mathematical_Functions/M4%3A_Spherical_Harmonics
    else if ( AOName1.startsWith("G") )
    {
        //0
        if  (AOName1.startsWith("Gz4"))
        {
            m=0;
            Y = 3.0/16.0/sqrt(M_PI)*(35.0*z4-30.0*z2*r2+3*r4);
            return Y;
        }

        //1
        if  (AOName1.startsWith("Gz3x") || AOName1.startsWith("Gxz3"))
        {
            Y = 3.0/4.0*sqrt(5.0/2.0/M_PI)*x*z*(7.0*z2-3.0*r2)/r4;
            m=1;
            return Y;
        }

        //-1
        if  (AOName1.startsWith("Gz3y") || AOName1.startsWith("Gyz3"))
        {
            Y = 3.0/4.0*sqrt(5.0/2.0/M_PI)*y*z*(7.0*z2-3.0*r2)/r4;
            m=-1;
            return Y;
        }


        //-2
        if (AOName1.startsWith("Gz2xy") || AOName1.startsWith("Gxyz2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*x*y*(7.0*z2-r2)/r4;
            m=-2;
            return Y;
        }

        //2
        if  (AOName1.startsWith("Gz2(x2-y2)") || AOName1.startsWith("G(x2-y2)z2"))
        {
            Y = 3.0/8.0*sqrt(5.0/M_PI)*(x2-y2)*y*(7.0*z2-r2)/r4;
            m=2;
            return Y;
        }

        //3
        if  (AOName1.startsWith("Gzx3") || AOName1.startsWith("Gx3z"))
        {
            Y = 3.0/4.0*sqrt(35.0/2.0/M_PI)*x*z*(x2-3*y2)/r4 ;
            m=3;
            return Y;
        }

        //-3
        if (AOName1.startsWith("Gzy3") || AOName1.startsWith("Gy3z"))
        {
            Y = 3.0/4.0*sqrt(35.0/2.0/M_PI)*y*z*(3*x2-y2)/r4;
            m=-3;
            return Y;
        }


        //4
        if (AOName1.startsWith("Gx4+y4"))
        {
            Y = 3.0/16*sqrt(35.0/M_PI)*(x2*(x2-3*y2)-y2*(3*x2-y2))/r4 ;
            m=4;
            return Y;
        }

        //-4
        if (AOName1.startsWith("Gxy(x2-y2)"))
        {
            Y = 3.0/4*sqrt(35.0/M_PI)*x*y*(x2-y2)/r4 ;
            m=-4;
            return Y;
        }

    }
}


double AO::RDF(double r)
{
    return radial_distribution_function(n,l,r);
}

double AO::polar_density(double theta)
{
    double val = polar_function(l,m,theta);
    return val * val * sin(theta);
}


void AO::buildYlmSliceData_2d()
{
    QString name=getName();
    name.remove(0,1);


    double interval=1.0;
    double theta=0.0,theta1=0.0;
    double x=0.0, y=0.0,r=0.0,r0=0.0;


    //S
    if (name.startsWith("S")  )
    {
        Ylm2d_pos.clear();
        Ylm2d_neg.clear();

        //draw a circle
        double Y=1.0/sqrt(4.0*M_PI);
        while(theta<360.0){
            theta+=interval;
            theta1=theta*0.0174533;
            x=Y*cos(theta1);
            y=Y*sin(theta1);
            Ylm2d_pos.append(QPointF(x, y));
        }

        return;
    }


    //P
    theta=0.0,theta1=0.0;
    r=0.0,r0=0.0;
    double Y=sqrt(3.0/M_PI/4.0);
    if (name.startsWith("P"))
    {
        Ylm2d_pos.clear();
        Ylm2d_neg.clear();

        //Ylm=cos(theta)
        while(theta<181.0){
            theta1=theta*0.0174533;
            r=cos(theta1);
            x=Y*r*sin(theta1);
            y=Y*r*r;//y=r*cos(theta1);

            Ylm2d_pos.append(QPointF(x, y));
            Ylm2d_neg.append(QPointF(x, -y));
            theta+=interval;
        }
    }







    if (name.startsWith("D"))
    {
        Ylm2d_pos.clear();
        Ylm2d_neg.clear();

        //20=3cos(theta)^2-1

        double Y=sqrt(5.0/M_PI)/4.0;
        //positive lobe
        if (name.startsWith("Dz2"))
        {
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                r0=cos(theta1);
                r=3.0*r0*r0-1.0;

                x=Y*r*sin(theta1);
                y=Y*r*r0;//y=r*cos(theta1);

                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                theta+=interval;
            }
        }


        //Dx2-y2=sin(theta)^2*cos(2*phi)
        if (name.startsWith("Dx2-y2"))
        {
            double Y=sqrt(15.0/M_PI)/4.0;
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                r=cos(2.0*theta1);

                x=Y*r*cos(theta1);
                y=Y*r*sin(theta1);

                theta+=interval;

                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, y));
                else
                    Ylm2d_pos.append(QPointF(x, y));
            }

        }

        //Dxy=sin(theta)^2*sin(2*phi)
        if ( name.startsWith("Dxz") || name.startsWith("Dyz") || name.startsWith("Dxy"))
        {
            double Y=sqrt(15.0/M_PI)/4.0;
            theta=0.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                r=sin(2.0*theta1);

                x=Y*r*cos(theta1);
                y=Y*r*sin(theta1);

                theta+=interval;



                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, y));
                else
                    Ylm2d_pos.append(QPointF(x, y));


            }
        }
    }




    //F
    if (name.startsWith("F"))
    {
        Ylm2d_pos.clear();
        Ylm2d_neg.clear();

        //Fz3=sqrt(7.0/M_PI)/4.0*(5cos(theta)^3-3*cos(theta))
        //double fz3=(5.0*cosT3-3.0*cosT);
        //r = sqrt(7.0/M_PI)/4.0 * fz3 ;
        double coeff = sqrt(7.0/M_PI)/4.0 ;
        if (name.startsWith("Fz3"))
        {
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
                    Ylm2d_neg.append(QPointF(x, y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
        }

        if (name.startsWith("Fxz2") || name.startsWith("Fyz2"))
        {
            theta=0.0;

            double coeff = sqrt(42./M_PI)/8.0;
            double cosT,sinT;

            while(theta<361.0)
            {
                theta1=theta*0.0174533;

                cosT=cos(theta1);
                sinT=sin(theta1);

                r=coeff*sinT*(5*cosT*cosT-1.0);

                y=abs(r)*cosT;
                x=abs(r)*sinT;

                if(r<0.0)
                    Ylm2d_neg.append(QPointF(-x, y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }

        }




        if (name.startsWith("Fx(x2-3y2)") )
        {
            theta=0.0;

            double coeff = sqrt(70./M_PI)/8.0;

            while(theta<361.0){
                theta1=theta*0.0174533;
                r=coeff*cos(3.0*theta1);

                x=abs(r)*cos(theta1);
                y=abs(r)*sin(theta1);


                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, -y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
        }


        if ( name.startsWith("Fy(3x2-y2"))
        {
            theta=0.0;
            double coeff = sqrt(70./M_PI)/8.0;
            while(theta<361.0){
                theta1=theta*0.0174533;
                r=coeff*sin(3.0*theta1);

                x=abs(r)*cos(theta1);
                y=abs(r)*sin(theta1);


                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, -y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
        }


        if ( name.startsWith("Fz(x2-y2)"))
        {
            theta=0.0;
            double coeff = sqrt(105.0/M_PI)/4.0;

            while(theta<361.0){
                theta1=theta*0.0174533;
                double sinT=sin(theta1);
                double cosT=cos(theta1);
                r=coeff*sinT*sinT*cos(theta1);

                x=abs(r)*cosT;
                y=abs(r)*sinT;

                if(r<0.0)
                    Ylm2d_neg.append(QPointF(x, -y));
                else
                    Ylm2d_pos.append(QPointF(x, y));

                if(abs(r)<0.5)
                    theta+=0.1;
                else
                    theta+=interval;
            }
        }
    }
}


