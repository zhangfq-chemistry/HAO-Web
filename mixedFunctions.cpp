#include "mixedFunctions.h"
#include "vtkParametricEllipsoid.h"
#include "vtkObjectFactory.h"
#include "vtkMath.h"
#include <cmath>

vtkStandardNewMacro(mixedFunctions);


//----------------------------------------------------------------------------
mixedFunctions::mixedFunctions() : S(0)  , P(0)  , D(0), lobe(1)
{
    // Preset triangulation parameters
    this->MinimumU = 0.0;
    this->MaximumU = 2.0 * vtkMath::Pi();

    this->MinimumV = 0.0;
    this->MaximumV = vtkMath::Pi();


    this->JoinU = 1;
    this->JoinV = 0;
    this->TwistU = 0;
    this->TwistV = 0;
    this->ClockwiseOrdering = 0;
    this->DerivativesAvailable = 1;

    sqrt2=1.0/sqrt(2);
    sqrt3=1.0/sqrt(3);
    sqrt6=sqrt2*sqrt3;
}

//----------------------------------------------------------------------------
mixedFunctions::~mixedFunctions() = default;



//----------------------------------------------------------------------------
void mixedFunctions::Evaluate(double uvw[3], double Pt[3], double Duvw[9])
{
    double u = uvw[0];
    double v = uvw[1];
    double *Du = Duvw;
    double *Dv = Duvw + 3;

    for (int i = 0; i < 3; ++i)
    {
        Pt[i] = Du[i] = Dv[i] = 0;
    }

    double cu = cos(u);
    double su = sin(u);
    double cv = cos(v);
    double sv = sin(v);

    double cosT=cv;
    double sinT=sv;
    double cosP=cu;
    double sinP=su;


    double cosT2=cosT*cosT;
    double sinT2=sinT*sinT;

    double cosP2=cosP*cosP;
    double sinP2=sinP*sinP;
    double cos2P=cosP2-sinP2;

    double sin2P=2.0*sinP*cosP;

  /*
    double cosT3=cosT2*cosT;
    double cosT4=cosT2*cosT2;

    double sinT3=sinT*sinT2;
    double sinT4=sinT2*sinT2;
    double sinT5=sinT4*sinT;

    //power trigonometric function--"phi"

    double sinP3=sinP*sinP2;
    double sinP4=sinP2*sinP2;

    double cosP3=cosP2*cosP;
    double cosP4=cosP2*cosP2;

    //multiple-angle formula


    double cos3P=4.0*cosP3-3.0*cosP;
    double sin3P=3.0*sinP-4.0*sinP3;
    double cos4P=1-8.0*cosP2+8.0*cosP4;
    double sin4P=-4.0*sinP*cosP*(2.0*sinP2-1.0);
*/
    double coeff=1.0;
    double r=0.0;

    double eps=0.00001;

    //S-Px
    if (S==1 && P==1 && D<1)
    {
        //S  = sqrt(1.0/M_PI/4.0)
        //Px = sqrt(3.0/M_PI/4.0)* sinT*cosP


        double c_S = sqrt6*sqrt(1.0/4.0/M_PI);

        double c_Px = sqrt2*sqrt(3.0/4.0/M_PI);
        double r = c_S  +  c_Px * sinT * cosP;

        //filter out positive
        if(lobe>0) //lobe=1
            if(r<-eps)    return;

        //filter out negative
        if(lobe<1) //lobe=0
            if(r>eps)   return;


        // The point
        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;

        //The derivatives are:

        //v=theta
        Dv[0] = c_S * cosT * cosP;
        Dv[1] = c_S * cosT * sinP;
        Dv[2] = -c_S * sinT;

        //u=phi
        Du[0] = -c_S * sinT * sinP;
        Du[1] = c_S * sinT * cosP;
        Du[2] = 0.0;


        //based on wxMaxima-win
        // d/dt
        Dv[0] = Dv[0] + c_Px*(2.0 * cosP  * sinT)* cosP * cosT;
        Dv[1] = Dv[1] + c_Px*(2.0 * cosP  * sinT)* cosT * sinP;
        Dv[2] = Dv[2] + c_Px*(cosP * cosT * cosT - cosP * sinT * sinT);


        //The d/dp
        Du[0] = Du[0] + c_Px*(-2.0 * cosP  * sinT)* sinP * sinT;
        Du[1] = Du[1] + c_Px*(cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT);
        Du[2] = Du[2] + c_Px*(-cosT * sinP * sinT);


        return;
    }

    //SP2
    if (S==1 && P==2)
    {
        double c_S = sqrt6*sqrt(1.0/4.0/M_PI);
        double c_Px = sqrt(2.0/3.0)*sqrt(3.0/4.0/M_PI);

        double r = c_S  +  c_Px * sinT * cosP;

        if(lobe>0)
            if(r<-eps)    return;

        if(lobe<1)
            if(r>eps)   return;

        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;

        Dv[0] = c_S * cosT * cosP;
        Dv[1] = c_S * cosT * sinP;
        Dv[2] = -c_S * sinT;

        Du[0] = -c_S * sinT * sinP;
        Du[1] = c_S * sinT * cosP;
        Du[2] = 0.0;

        Dv[0] = Dv[0] + c_Px*(2.0 * cosP  * sinT)* cosP * cosT;
        Dv[1] = Dv[1] + c_Px*(2.0 * cosP  * sinT)* cosT * sinP;
        Dv[2] = Dv[2] + c_Px*(cosP * cosT * cosT - cosP * sinT * sinT);

        Du[0] = Du[0] + c_Px*(-2.0 * cosP  * sinT)* sinP * sinT;
        Du[1] = Du[1] + c_Px*(cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT);
        Du[2] = Du[2] + c_Px*(-cosT * sinP * sinT);


        return;
    }


    //SP3
    //sp3_1=(s + px + py + pz )/2.0;
    //sp3_2=(s + px - py - pz )/2.0;
    //sp3_3=(s - px - py + pz )/2.0;
    //sp3_4=(s - px + py - pz )/2.0;

    if (S==1 && P==3 && D<1)
    {
        double c=0.5;

        double c_S = sqrt6*sqrt(1.0/4.0/M_PI);
        double c_Px =c*sqrt(3.0/M_PI/4.0);
        double c_Py =c*sqrt(3.0/M_PI/4.0);
        double c_Pz =c*sqrt(6.0/M_PI/8.0);

        //if(idx<1)
       // {
       //     c_Py=-c_Py;
       //     c_Pz=-c_Pz;  //sp3_2=(s + px - py - pz )/2.0;
       // }


        double r = c_S
                +  c_Px * sinT * cosP
                +  c_Py * sinT * sinP
                +  c_Pz * cosT;


        //filter out positive
        if(lobe>0) //lobe=1
            if(r<-eps)    return;

        //filter out negative
        if(lobe<1) //lobe=0
            if(r>eps)   return;


        // The point
        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;


        //S---------------------------------
        //The derivatives are:
        Dv[0] = c_S * cosT * cosP;
        Dv[1] = c_S * cosT * sinP;
        Dv[2] = -c_S * sinT;

        //u=phi
        Du[0] = -c_S * sinT * sinP;
        Du[1] = c_S * sinT * cosP;
        Du[2] = 0.0;


        //Px-------------------------------
        Dv[0] = Dv[0] + c_Px*(2.0 * cosP  * sinT)* cosP * cosT;
        Dv[1] = Dv[1] + c_Px*(2.0 * cosP  * sinT)* cosT * sinP;
        Dv[2] = Dv[2] + c_Px*(cosP * cosT * cosT - cosP * sinT * sinT);


        //The d/dp
        Du[0] = Du[0] + c_Px*(-2.0 * cosP  * sinT)* sinP * sinT;
        Du[1] = Du[1] + c_Px*(cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT);
        Du[2] = Du[2] + c_Px*(-cosT * sinP * sinT);


        //Py-------------------------------
        // d/dt
        Dv[0] = Dv[0] + c_Py*(2.0 * cosP * cosT * sinP * sinT);
        Dv[1] = Dv[1] + c_Py*(2.0 * cosT * sinP * sinP * sinT);
        Dv[2] = Dv[2] + c_Py*(cosT * cosT * sinP - sinP * sinT * sinT);

        //The d/dp
        Du[0] = Du[0] + c_Py*(cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT);
        Du[1] = Du[1] + c_Py*(2.0 * cosP * sinP * sinT * sinT);
        Du[2] = Du[2]+  c_Py*(cosP * cosT * sinT);



        //Pz-------------------------------
        Dv[0] = Dv[0] + c_Pz*(cosP*cosT*cosT-cosP*sinT*sinT);
        Dv[1] = Dv[1] + c_Pz*(cosT*cosT*sinP - sinP*sinT*sinT);
        Dv[2] = Dv[2] + c_Pz*(-2.0*cosT*sinT);

        //The d/dp
        Du[0] = Du[0] + c_Pz*(-cosT* sinP* sinT);
        Du[1] = Du[1] + c_Pz*(cosP*cosT*sinT);
        //Du[2] = Du[2] + c_Pz*(0.0);


        return;
    }

    //dsp2_1 = (s + px + dx2y2 )/2.0;
    //dsp2_2 = (s - px + dx2y2 )/2.0;
    //dsp2_2 = (s + py - dx2y2 )/2.0;
    //dsp2_4 = (s - py - dx2y2 )/2.0;
    if (S==1 && P==1 && D==2)
    {
        double c=0.5;
        //S  = sqrt(1.0/M_PI/4.0)
        //Px = sqrt(3.0/M_PI/4.0)* sinT*cosP
        //Py = sqrt(3.0/M_PI/4.0)* sinT*sinP
        //Dx2y2 = sqrt(15.0/M_PI)/4.0 *sinT*cos2P;

        double c_S = c*sqrt(1.0/4.0/M_PI);
        double c_Px =c*sqrt(3.0/M_PI/4.0);
        double c_Py =c*sqrt(3.0/M_PI/4.0);
        double c_Dx2y2 =c*sqrt(15.0/M_PI)/4.0;

        double r = c_S
                +  c_Px * sinT * cosP
                +  c_Dx2y2 *  sinT * cos2P;


        //filter out positive
        if(lobe>0) //lobe=1
            if(r<-eps)    return;

        //filter out negative
        if(lobe<1) //lobe=0
            if(r>eps)   return;



        // The point
        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;

        //S---------------------------------
        //The derivatives are:
        Dv[0] = c_S * cosT * cosP;
        Dv[1] = c_S * cosT * sinP;
        Dv[2] = -c_S * sinT;

        //u=phi
        Du[0] = -c_S * sinT * sinP;
        Du[1] = c_S * sinT * cosP;
        Du[2] = 0.0;


        //Px-------------------------------
        Dv[0] = Dv[0] + c_Px*(2.0 * cosP  * sinT)* cosP * cosT;
        Dv[1] = Dv[1] + c_Px*(2.0 * cosP  * sinT)* cosT * sinP;
        Dv[2] = Dv[2] + c_Px*(cosP * cosT * cosT - cosP * sinT * sinT);


        //The d/dp
        Du[0] = Du[0] + c_Px*(-2.0 * cosP  * sinT)* sinP * sinT;
        Du[1] = Du[1] + c_Px*(cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT);
        Du[2] = Du[2] + c_Px*(-cosT * sinP * sinT);


        //Dx2-y2-------------------------------
        // d/dt
        Dv[0] = Dv[0] + c_Dx2y2*(2.0 *cosP *cos2P *cosT *sinT);
        Dv[1] = Dv[1] + c_Dx2y2*(2.0 *cos2P *cosT *sinP *sinT);
        Dv[2] = Dv[2] + c_Dx2y2*(cos2P *cosT2 - cos2P *sinT2);

        //The d/dp
        Du[0] = Du[0] + c_Dx2y2*(-cos2P *sinP *sinT2 - 2.0 *cosP *sin2P *sinT2);
        Du[1] = Du[1] + c_Dx2y2*(cosP *cos2P *sinT2 - 2.0 *sinP *sin2P *sinT2);
        Du[2] = Du[2] + c_Dx2y2*(-2.0 *cosT *sin2P *sinT);


        return;
    }


    //trigonal bipyramidal
    //dsp3_1 = s/sqrt3 + px*sqrt(2/3);
    //dsp3_1 = s/sqrt3 - px/sqrt6 + py/sqrt2;
    //dsp3_1 = s/sqrt3 - px/sqrt6 - py/sqrt2;

    //dsp3_4 = dz2/sqrt2 + pz/sqrt2;
    //dsp3_5 = dz2/sqrt2 - pz/sqrt2;

    //the planar part is SP2,only the vertical is calculated
    if (S==1 && P==3 && D==1)
    {
        //S  = sqrt(1.0/M_PI/4.0)
        //Px = sqrt(3.0/M_PI/4.0)* sinT*cosP
        //Py = sqrt(3.0/M_PI/4.0)* sinT*sinP
        //Pz = sqrt(3.0/M_PI/4.0) * cosT;
        //Dz2 = sqrt(5.0/M_PI)/4.0 * (3.0*cosT2-1.0);

        //double c_S   = sqrt3*sqrt(1.0/4.0/M_PI);
        //double c_Px  = sqrt6*sqrt(3.0/M_PI/4.0);
        //double c_Py  = sqrt2*sqrt(3.0/M_PI/4.0);


        //dsp3_4 = dz2/sqrt2 + pz/sqrt2;
        double c_Pz  = sqrt2*sqrt(3.0/M_PI/4.0);
        double c_Dz2 = sqrt2*sqrt(5.0/M_PI)/4.0;

        double dz2=3.0*cosT2-1.0;
        double pz=cosT;
        double r = c_Dz2*dz2 + c_Pz*pz;


        //filter out positive
        if(lobe>0) //lobe=1
            if(r<-eps)    return;

        //filter out negative
        if(lobe<1) //lobe=0
            if(r>eps)   return;


        //point position
        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;


        //pz
        Dv[0] = c_Pz*(cosP*cosT*cosT-cosP*sinT*sinT);
        Dv[1] = c_Pz*(cosT*cosT*sinP - sinP*sinT*sinT);
        Dv[2] = c_Pz*(-2*cosT*sinT);

        Du[0] = c_Pz*(-cosT* sinP* sinT);
        Du[1] = c_Pz*(cosP*cosT*sinT);
        Du[2] = 0;


        //dz2
        Dv[0] = Dv[0] + c_Dz2*(cosP *cosT *dz2 - 6.0 *cosP *cosT *sinT2);
        Dv[1] = Dv[1] + c_Dz2*(cosT *dz2 *sinP - 6.0 *cosT *sinP *sinT2);
        Dv[2] = Dv[2] + c_Dz2*(-6.0 *cosT2 *sinT - dz2 *sinT);

        Du[0] = Du[0] + c_Dz2*(-dz2 *sinP *sinT);
        Du[1] = Du[1] + c_Dz2*(cosP *dz2 *sinT);
        //Du[2] = Du[2] + 0.0;


    }


    //octahedral
    //d2sp3_1 = s/sqrt6 - py/sqrt2 - dz2/sqrt12 + dx2y2/2.0;
    //d2sp3_2 = s/sqrt6 + py/sqrt2 - dz2/sqrt12 + dx2y2/2.0;
    //d2sp3_3 = s/sqrt6 - px/sqrt2 - dz2/sqrt12 - dx2y2/2.0;
    //d2sp3_4 = s/sqrt6 + px/sqrt2 - dz2/sqrt12 - dx2y2/2.0;

    //d2sp3_5 = s/sqrt6 + pz/sqrt2 + dz2/sqrt3;
    //d2sp3_6 = s/sqrt6 - pz/sqrt2 + dz2/sqrt3;
    if (S==1 && P==3 && D==2)
    {
        //S  = sqrt(1.0/M_PI/4.0)
        //Px = sqrt(3.0/M_PI/4.0)* sinT*cosP
        //Py = sqrt(3.0/M_PI/4.0)* sinT*sinP
        //Pz = sqrt(3.0/M_PI/4.0) * cosT;
        //Dz2 = sqrt(5.0/M_PI)/4.0 * (3.0*cosT2-1.0);
        //Dx2y2 = sqrt(15.0/M_PI)/4.0 *sinT*cos2P;

        double c_S = sqrt6*sqrt(1.0/4.0/M_PI);
        double c_Pz  = sqrt2*sqrt(3.0/M_PI/4.0);
        double c_Dz2 = sqrt2*sqrt(5.0/M_PI)/4.0;

        double dz2= 3.0 *cosT2 -1.0;
        double r = c_S
                +  c_Pz * cosT
                +  c_Dz2 * dz2;


        //filter out positive
        if(lobe>0) //lobe=1
            if(r<-eps)    return;

        //filter out negative
        if(lobe<1) //lobe=0
            if(r>eps)   return;



        // The point
        Pt[0] = abs(r) * sinT * cosP;
        Pt[1] = abs(r) * sinT * sinP;
        Pt[2] = abs(r) * cosT;

        //The derivatives
        //S
        Dv[0] = c_S * cosT * cosP;
        Dv[1] = c_S * cosT * sinP;
        Dv[2] = -c_S * sinT;

        //u=phi
        Du[0] = -c_S * sinT * sinP;
        Du[1] = c_S * sinT * cosP;
        Du[2] = 0.0;

        //Pz
        Dv[0] = c_Pz*(cosP*cosT*cosT-cosP*sinT*sinT);
        Dv[1] = c_Pz*(cosT*cosT*sinP - sinP*sinT*sinT);
        Dv[2] = c_Pz*(-2*cosT*sinT);

        Du[0] = c_Pz*(-cosT* sinP* sinT);
        Du[1] = c_Pz*(cosP*cosT*sinT);
        Du[2] = 0;

        //dz2
        Dv[0] = Dv[0] + c_Dz2*(cosP *cosT *dz2 - 6.0 *cosP *cosT *sinT2);
        Dv[1] = Dv[1] + c_Dz2*(cosT *dz2 *sinP - 6.0 *cosT *sinP *sinT2);
        Dv[2] = Dv[2] + c_Dz2*(-6.0 *cosT2 *sinT - dz2 *sinT);

        Du[0] = Du[0] + c_Dz2*(-dz2 *sinP *sinT);
        Du[1] = Du[1] + c_Dz2*(cosP *dz2 *sinT);
        //Du[2] = Du[2] + 0.0;


    }
}

//----------------------------------------------------------------------------
double mixedFunctions::EvaluateScalar(double*, double*, double*)
{
    return 0;
}

//----------------------------------------------------------------------------
void mixedFunctions::PrintSelf(ostream& os, vtkIndent indent)
{
    this->Superclass::PrintSelf(os, indent);

    os << indent << "S  factor: " << S << "\n";
    os << indent << "P  factor: " << P << "\n";
    os << indent << "D  factor: " << D << "\n";
}



