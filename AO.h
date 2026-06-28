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

#ifndef _SCALAR_FIELD_H
#define _SCALAR_FIELD_H

#include <string>
#include <vector>
#include <iostream>
#include <ios>
#include <sstream>
#include <fstream>
#include <math.h>
#include <algorithm>
#include <mutex>
#include <iostream>
#include <utility>
#include <thread>

#include <QObject>
#include <QThread>
#include <QTreeWidget>
#include <QVector>
#include <QString>

#include <vtkAppendPolyData.h>
#include <vtkCleanPolyData.h>
#include <vtkSphereSource.h>
#include <vtkImageData.h>
#include <vtkMarchingCubes.h>
#include <vtkVertexGlyphFilter.h>
#include <vtkDelaunay2D.h>
#include <vtkLineSource.h>
#include <vtkCutter.h>
#include <QVector>
#include <QString>
#include "vector3.h"

using namespace  std;
class MainWindow;
enum OrbitaType {FULL, XOY, XOZ, YOZ, Wedge, Quarter,Corner};
enum ProjOrbitaType {proj_NONE=0, proj_XOY=1, proj_XOZ=2, proj_YOZ=3};



class AO
{
private:
    // principal, angular and magnetic quantum number
    int n, l, m , Z;
    int  lml; // = |m|
    int  id;

    QString obitalName="None";

    vector3 pos;
    double  radius;
    double  a0, sqrt2, scale;

    bool   hasNodesBuild;
    MainWindow * mainWin;

public:
    bool   isXOYNode;
    QVector <double>  Nodes_R;
    QVector <double>  Nodes_T,Nodes_P;
    int numPolarNodes() {return Nodes_T.size();}
    int numRadialNodes() {return Nodes_R.size();}
    int numAzimuthalNodes() {return Nodes_P.size();}

    void setMainWin (MainWindow * m) {mainWin=m;}
    MainWindow * getMainWin () {return mainWin;}

    void setId(int j) {id=j;}
    int  getId()  {return id;}

    AO();
    AO(int _Z, int _n, int _l, int _m);
    ~AO();


    void set_nlm (int _n, int _l, int _m) {n=_n;l=_l;m=_m;}
    int get_l() {return l;}
    int get_m() {return m;}
    int get_n() {return n;}

    void setPos(vector3 pos){ this->pos = pos;}
    vector3 Pos() {return pos;}

    void setScale(double s) {scale=s;}

    double x() {return pos[0];}
    double y() {return pos[1];}
    double z() {return pos[2];}

    int getZ(){return Z;}


    void setQuantumNumber (int _n=1, int _l=0, int _m=0) { n=_n; l=_l; m=_m;  }


    // orbital name to n/l/m
    void  name2nlm(QString);
    void  name2nlm();

    // n/l/m to orbital name
    void  nlm2Name ();


    void SetName (QString & name);
    QString getName () {return obitalName;}


    //surface with psi=0
    void   buildNodes();
    void   buildRadialNodes();
    void   buildYlmNodes();

    double Slater_Psi (vector3);
    double Hydrogen_Psi (vector3);
    double Hydrogen_Psi (double r, double theta, double phi);
    double calc_Psi(double x,  double y, const double z);


    double getIsovalue() {return isoValue;}
    void setIsovalue(double t) {isoValue=t;}


    void   setOverallProbability(double p) {overall_probability=p;}
    double getOverallProbability () {return overall_probability;}

    void   find_LeastRadius_Isovalue();
    double findIsoValueProbabiltyBasedonBoxSize(double, double&, double &);
    void   findBoxSizeBasedonProbability(double , double &  , double  & );
    double findBoxSizefromIsovalue(double);

    void setGridSize(int g) {gridSize=g;}
    int  getGridSize() {return gridSize;}


    void generateCloudPoints_3D(int N=500000);
    void generateCloudPoints_2D(int N=10000);
    void generateCloudPoints_display();
    void clearCloudData();



private:
     double overall_probability=0.98;
     double isoValue=0.001;
     double least_Radius=5;
     int    gridSize=0;

public:
    void reRun();
    void run();

    double RDF(double r) ;
    double polar_density(double theta);

    double radial_byName(double, double, double);
    double psi_byName(double, double, double);


    void append_surfaceYlm_pos(double x, double y, double z);
    void append_surfaceYlm_neg(double x, double y, double z);
    void collectAll_Ylm();

    double Ylm_byName_0(double x, double y,double z);
    double Ylm_byName(double x, double y,double z);
    double Ylm_byName(double theta, double phi);
    double Ylm(double theta, double phi);

    void buildYlmSurface();


    void buildIsoSurface();
    void buildCubeMatrix();
    void initialCubeMatrix();

    void buildIsoSurface_XOY();
    void buildIsoSurface_XOZ();
    void buildIsoSurface_YOZ();

    void clearData();
    void clearCubeData();
    void clearImageData();


    void buildXOYCubeMatrix();
    void buildYOZCubeMatrix();
    void buildXOZCubeMatrix();
    void buildWedgeCubeMatrix();
    void buildQuarterCubeMatrix();
    void buildCornerCubeMatrix();

    void buildWedgeSurface();
    void buildWedgeSurface1();

    void buildRDFSurface();
    void buildRSurface();
    void buildR2Surface();

    void buildRadialData_2d();




    void buildProjectionData();
    void setProjType(int type);
    ProjOrbitaType getProjType() {return projType;}




    double * CubeData =nullptr;
    double * CubeDataXOY =nullptr;
    double * CubeDataXOZ =nullptr;
    double * CubeDataYOZ =nullptr;
    double * CubeDataWedge =nullptr;
    double * CubeDataQuarter =nullptr;//, * CubeDataQuarter1 = nullptr, * CubeDataQuarter2 =nullptr;
    double * CubeDataCorner =nullptr;

    vtkImageData * volume=nullptr,
                 * volume_=nullptr;

    vtkImageData * volumeXOY=nullptr,
                 * volumeXOY_=nullptr;

    vtkImageData * volumeXOZ=nullptr,
                 * volumeXOZ_=nullptr;

    vtkImageData * volumeYOZ=nullptr,
                 * volumeYOZ_=nullptr;

    vtkImageData * volumeWedge=nullptr,
                  * volumeWedge_=nullptr;

    vtkImageData * volumeQuarter=nullptr,
                 * volumeQuarter_=nullptr;

    vtkImageData * volumeCorner=nullptr,
                 * volumeCorner_=nullptr;






    double  getInteval() {return interval;}
    void    setInteval(double t) {interval=t;}
    void    setBoxSize(double t) {maxBox=t;minBox=-t;}

    void    buildYlmSliceData_2d();

    QList<QPointF> RData_2d, R2Data_2d,RDFData_2d;
    QList<QPointF> Ylm2d_pos, Ylm2d_neg;
    QList<QPointF> cloudPoints2d_pos, cloudPoints2d_neg;

    vector <vector3> cloudPoints3d_pos,cloudPoints3d_neg;
    vector <double> cloudPoints3d_pos_psi,cloudPoints3d_neg_psi;


    //vtkLineSource * RData_2d, R2Data_2d,RDFData_2d;


    vtkPolyData * pDataXOY_p=nullptr,  //positive
                * pDataXOY_n=nullptr;  //negtive

    vtkPolyData * pDataXOZ_p=nullptr,  //positive
                * pDataXOZ_n=nullptr;  //negtive

    vtkPolyData * pDataYOZ_p=nullptr,  //positive
                * pDataYOZ_n=nullptr;  //negtive

    //overall
    vtkPolyData * pData_p=nullptr,  //positive
                * pData_n=nullptr;  //negtive



    //rdf
    vtkPolyData * pData_RDF=nullptr,
                * pData_R=nullptr,
                * pData_R2=nullptr;

    //wedge
    vtkPolyData * pData_Wedge_p=nullptr,* pData_Wedge_pm=nullptr, //positive
                * pData_Wedge_n=nullptr, * pData_Wedge_nm=nullptr;  //negtive

    //Ylm
    vtkPolyData  * ylmData_p=nullptr, //positive
                 * ylmData_n=nullptr; //negtive


    vtkPolyData  * yData_p=nullptr, //positive
                 * yData_n=nullptr; //negtive

    vtkPolyData *  yCutData_p=nullptr, //positive
                 * yCutData_n=nullptr; //negtive

    vtkCutter * cutterEdge_p=nullptr,
              * cutterEdge_N=nullptr,
              * cutterEdge_angular_p=nullptr,
              * cutterEdge_angular_n=nullptr;


    vtkSmartPointer <vtkMarchingCubes> surface_p,surface_n;

    OrbitaType orbital_type;

    vector<vector<double> > dataXOY,dataYOZ,dataXOZ;


    vtkVertexGlyphFilter * glyphFilter_pos=nullptr,
                         * glyphFilter_neg=nullptr;

public:
    bool isNegYlmExisted() {return Ylm_neg_existed;}
    bool isPosYlmExisted() {return Ylm_pos_existed;}



    bool isPosLobeMesh(){ return visible_pos_Lobe_Mesh; }
    bool isNegLobeMesh(){ return visible_neg_Lobe_Mesh; }




    int get_projScale(){return proj_scale;}

    void sendMessage(QString  );
    void appendMessage(QString  );

    void  setOrbitaType(int _t)
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
    }

    void setOrbitaType(OrbitaType t){
        orbital_type=t;
    }

    OrbitaType getOrbitalType() {return orbital_type;}

    void setObitalMesh(bool t){
        visible_pos_Lobe_Mesh=t;
        visible_neg_Lobe_Mesh=t;
    }


    void   calc_lengthYlm();
    double getLengthYlm(){return 2.0*lengthYlm;}
    double getHeightYlm(){return heigthYlm;}

    double getRDF_radius() {return rRDF;}
    double getR_radius() {return rR;}
    double getR2_radius() {return rR;}


    double  MinBox_projection () {return minBox_project;}
    double  MaxBox_projection () {return maxBox_project;}
    double  getInteval_projection() {return interval_project;}
    int     getGridSize_projection() {return gridSize_project;}


    double  MinBox () {return minBox;}
    double  MaxBox () {return maxBox;}

    double  getMinBox () {return minBox0;}
    double  getMaxBox () {return maxBox0;}


private:
    double  minBox, maxBox,  minBox0, maxBox0,interval;

    bool isLambertW=false;
    ProjOrbitaType projType;
    bool isDataEmpty=true;
    double lengthYlm,heigthYlm,rRDF,rR;
    int   proj_scale;
    bool Ylm_neg_existed, Ylm_pos_existed;
    bool visible_pos_Lobe_Mesh;
    bool visible_neg_Lobe_Mesh;


    bool visible;
    bool _isCloudVisible;
    bool _isRegenerateCube=false;
    bool _removeRadialData=false;


    std::vector <vector3> surfaceAngular_positive, surfaceAngular_negative;
    std::vector <vector <vector3> > pos_Ylm, neg_Ylm, rdf;
    double least_Radial;


    double interval_project,maxBox_project,minBox_project;
    int  gridSize_project;

public:

    double max_cloud_pos=-1.0,min_cloud_neg=10.0;
    double min_cloud_pos=10.0,max_cloud_neg=-1.0;

    vtkPoints * points_pos=nullptr, * points_neg=nullptr;
    vector <double> value_cloud_pos,value_cloud_neg;

    //for colormap
    vector <double> value_psi_pos,value_psi_neg;
    double value_psi_max,value_psi_min;
    double maxPsi() {return value_psi_max;}
    double minPsi() {return value_psi_min;}


};




#endif //_SCALAR_FIELD_H
