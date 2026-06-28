 #include "ylmFunctions.h"

#include "vtkParametricEllipsoid.h"
#include "vtkObjectFactory.h"
#include "vtkMath.h"
#include <cmath>

vtkStandardNewMacro(vtkYlm);

//----------------------------------------------------------------------------
vtkYlm::vtkYlm() : l(1)  , m(1)  , lobe(1)
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
}

//----------------------------------------------------------------------------
vtkYlm::~vtkYlm() = default;

//----------------------------------------------------------------------------
void vtkYlm::Evaluate(double uvw[3], double Pt[3], double Duvw[9])
{
    //cout <<" l m lobe :"<<  l << " " << m << " "<<lobe<<endl;

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

    //power trigonometric function--"theta"
    double cosT2=cosT*cosT;
    double cosT3=cosT2*cosT;
    double cosT4=cosT2*cosT2;
    double sinT2=sinT*sinT;
    double sinT3=sinT*sinT2;
    double sinT4=sinT2*sinT2;
    double sinT5=sinT4*sinT;

    //power trigonometric function--"phi"
    double sinP2=sinP*sinP;
    double sinP3=sinP*sinP2;
    //double sinP4=sinP2*sinP2;
    double cosP2=cosP*cosP;
    double cosP3=cosP2*cosP;
    double cosP4=cosP2*cosP2;

    //multiple-angle formula
    double cos2P=cosP2-sinP2;
    double sin2P=2.0*sinP*cosP;
    double cos3P=4.0*cosP3-3.0*cosP;
    double sin3P=3.0*sinP-4.0*sinP3;
    double cos4P=1-8.0*cosP2+8.0*cosP4;
    double sin4P=-4.0*sinP*cosP*(2.0*sinP2-1.0);

    double coeff=1.0;
    double r=0.0;

    double eps=0.00001;

    if (l==0)
    {
        // name="S";
        coeff=1.0/sqrt(4.0*M_PI);

        // The point
        Pt[0] = coeff * sinT * cosP;
        Pt[1] = coeff * sinT * sinP;
        Pt[2] = coeff * cosT;

        //The derivatives are:
        Dv[0] = coeff * cosT * cosP;
        Dv[1] = coeff * cosT * sinP;
        Dv[2] = -coeff * sinT;

        Du[0] = -coeff * sinT * sinP;
        Du[1] = coeff * sinT * cosP;
        Du[2] = 0.0;
        return;
    }

    if (l==1) //P
    {
        coeff=0.5*sqrt(3.0/M_PI);

        //Pz
        if (m==0)
        {
            //Pz = sqrt(3.0/M_PI/4.0) * cosT;

            // The point
            r=coeff * cv;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;


            Dv[0] = cosP*cosT*cosT-cosP*sinT*sinT;
            Du[0] = -cosT* sinP* sinT;

            Dv[1] = cosT*cosT*sinP - sinP*sinT*sinT;
            Du[1] = cosP*cosT*sinT;

            Dv[2] = -2*cosT*sinT;
            Du[2] = 0;
        }


        if (m>0) //m=1: Px = sqrt(3.0/M_PI/4.0)* sinT*cosP;
        {

            // The point
            r = coeff * sinT * cosP;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            //based on wxMaxima-win
            // d/dt
            Dv[0] = 2.0 * cosP * cosP * cosT * sinT;
            Dv[1] = 2.0 * cosP * cosT * sinP * sinT;
            Dv[2] = cosP * cosT * cosT - cosP * sinT * sinT;


            //The d/dp
            Du[0] = -2.0 * cosP * sinP * sinT * sinT;
            Du[1] = cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT;
            Du[2] = -cosT * sinP * sinT;
        }

        if (m<0)  // m=-1:  Py= sqrt(3.0/M_PI/4.0) * sinT*sinP;
        {
            // The point
            r=coeff * sinT * sinP;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            // d/dt
            Dv[0] = 2.0 * cosP * cosT * sinP * sinT;
            Dv[1] = 2.0 * cosT * sinP * sinP * sinT;
            Dv[2] = cosT * cosT * sinP - sinP * sinT * sinT;

            //The d/dp
            Du[0] = cosP * cosP * sinT * sinT - sinP * sinP * sinT * sinT;
            Du[1] = 2.0 * cosP * sinP * sinT * sinT;
            Du[2] = cosP * cosT * sinT;
        }


        if(r<0.0)
        for (int i = 0; i < 3; ++i)
        {
            Du[i] = -Du[i];
            Dv[i] = -Dv[i];
        }
        return;

    }

    if (l==2) //D
    {
        if  (m==1)  //Dxz
        {
            //r = sqrt(15.0/M_PI)/2.0 * sinT * cosT * cosP;
            r = sqrt(15.0/M_PI)/2.0 * sinT * cosT * cosP;


            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2.0* cosP2 *cosT2 *sinT - cosP2 *sinT3;
            Dv[1]=2.0* cosP *cosT2 *sinP *sinT - cosP *sinP *sinT3;
            Dv[2]=cosP *cosT3 - 2.0 *cosP *cosT *sinT2;

            Du[0]=-2 *cosP *cosT *sinP *sinT2;
            Du[1]=cosP2 *cosT *sinT2 - cosT *sinP2 *sinT2;
            Du[2]=-cosT2 *sinP *sinT;

        }
        if (m==-1) // Dyz
        {
            //r = sqrt(15.0/M_PI)/2.0 * sinT * cosT * sinP;
            r = sqrt(15.0/M_PI)/2.0 * sinT * cosT * sinP;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2.0 *cosP *cosT2 *sinP *sinT - cosP *sinP *sinT3;
            Dv[1]=2.0 *cosT2 *sinP2 *sinT - sinP2 *sinT3;
            Dv[2]=cosT3 *sinP - 2.0 *cosT *sinP *sinT2;

            Du[0]=cosP2 *cosT *sinT2 - cosT *sinP2 *sinT2;
            Du[1]=2.0 *cosP *cosT *sinP *sinT2;
            Du[2]=cosP *cosT2 *sinT;

        }

        if (m==2) //Dx2-y2
        {
            //Y = sqrt(15.0/M_PI)/4.0 *sinT*sinT*cos(2.0*phi);
            r = sqrt(15.0/M_PI)/4.0 *sinT2*cos2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3.0 *cosP *cos2P *cosT *sinT2;
            Dv[1]=3.0 *cos2P *cosT *sinP *sinT2;
            Dv[2]=2.0 *cos2P *cosT2 *sinT - cos2P *sinT3;

            Du[0]=-cos2P *sinP *sinT3 - 2.0 *cosP *sin2P *sinT3;
            Du[1]=cosP *cos2P *sinT3 - 2.0 *sinP *sin2P *sinT3;
            Du[2]=-2.0 *cosT *sin2P *sinT2;
        }

        if (m==-2) //Dxy
        {
            //Y = sqrt(15.0/M_PI)/4.0 *sinT*sinT*sin(2.0*phi);
            r = sqrt(15.0/M_PI)/4.0 *sinT2*sin2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3.0 *cosP *cosT *sin2P *sinT2;
            Dv[1]=3.0 *cosT *sinP *sin2P *sinT2;
            Dv[2]=2.0 *cosT2 *sin2P *sinT - sin2P *sinT3;

            Du[0]=2.0 *cosP *cos2P *sinT3 - sinP *sin2P *sinT3;
            Du[1]=2.0 *cos2P *sinP *sinT3 + cosP *sin2P *sinT3;
            Du[2]=2.0 *cos2P *cosT *sinT2;


        }        
        if (m==0)  //Dz2
        {
            double dz2=(3.0*cosT2-1.0);
            r = sqrt(5.0/M_PI)/4.0 * dz2;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=cosP *cosT *dz2 - 6.0 *cosP *cosT *sinT2;
            Dv[1]=cosT *dz2 *sinP - 6.0 *cosT *sinP *sinT2;
            Dv[2]=-6.0 *cosT2 *sinT - dz2 *sinT;

            Du[0]=-dz2 *sinP *sinT;
            Du[1]=cosP *dz2 *sinT;
            Du[2]=0;
        }
    }

    if (l==3) //F
    {
        eps=0.001;

        if (m==0) //name="Fz3"
        {
            double fz3=(5.0*cosT3-3.0*cosT);
            r = sqrt(7.0/M_PI)/4.0 * fz3 ;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=cosP *cosT *fz3 +
                    cosP *sinT *(3 *sinT - 15 *cosT2 *sinT);
            Dv[1]=cosT *fz3 *sinP +
                    sinP *sinT *(3 *sinT - 15 *cosT2 *sinT);
            Dv[2]=-fz3 *sinT +
                    cosT *(3 *sinT - 15 *cosT2 *sinT);

            Du[0]=-fz3 *sinP *sinT;
            Du[1]=cosP *fz3 *sinT;
            Du[2]=0;

        }
        if (m==1)   //name="Fxz2"
        {
            r = sqrt(42./M_PI)/8.0 *sinT*(5*cosT2-1.0)*cosP ;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2 * cosP2 * cosT *(-1 + 5 *cosT2) *sinT -
                    10 *cosP2 *cosT *sinT3;
            Dv[1]=2 *cosP *cosT *(-1 + 5 *cosT2) *sinP *sinT -
                    10 *cosP *cosT *sinP *sinT3;
            Dv[2]=cosP *cosT2 *(-1 + 5 *cosT2) - 10 *cosP *cosT2 *sinT2 -
                    cosP *(-1 + 5 *cosT2) *sinT2;

            Du[0]=-2 *cosP *(-1 + 5 *cosT2) *sinP *sinT2;
            Du[1]=cosP2 *(-1 + 5 *cosT2) *sinT2 - (-1 + 5 *cosT2) *sinP2 *sinT2;
            Du[2]=-cosT *(-1 + 5 *cosT2) *sinP *sinT;

        }
        if (m==-1)  //name="Fyz2"
        {
            r = sqrt(42./M_PI)/8.0 * sinT*(5*cosT2-1.0)*sinP;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2 *cosP *cosT *(-1 + 5 *cosT2) *sinP *sinT -
                    10 *cosP *cosT *sinP *sinT3;
            Dv[1]=2 *cosT *(-1 + 5 *cosT2) *sinP2 *sinT -
                    10 *cosT *sinP2 *sinT3;
            Dv[2]=cosT2 *(-1 + 5 *cosT2) *sinP -
                    10 *cosT2 *sinP *sinT2 - (-1 + 5 *cosT2) *sinP *sinT2;

            Du[0]=cosP2 *(-1 + 5 *cosT2) *sinT2 - (-1 + 5 *cosT2) *sinP2 *sinT2;
            Du[1]=2 *cosP *(-1 + 5 *cosT2) *sinP *sinT2;
            Du[2]=cosP *cosT *(-1 + 5 *cosT2) *sinT;

        }

        if (m==2)   //name="Fz(x2-y2)"
        {
            r = sqrt(105.0/M_PI)/4.0 *sinT2*cosT*cos2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;

            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3 *cosP *cos2P *cosT2 *sinT2 - cosP *cos2P *sinT4;
            Dv[1]=3 *cos2P *cosT2 *sinP *sinT2 - cos2P *sinP *sinT4;
            Dv[2]=2 *cos2P *cosT3 *sinT - 2 *cos2P *cosT *sinT3;

            Du[0]=-cos2P *cosT *sinP *sinT3 - 2 *cosP *cosT *sin2P *sinT3;
            Du[1]=cosP *cos2P *cosT *sinT3 - 2 *cosT *sinP *sin2P *sinT3;
            Du[2]=-2 *cosT2 *sin2P *sinT2;

        }

        if (m==-2)  //name="Fxyz"
        {
            r = sqrt(105.0/M_PI)/2.0 *sinT2*cosT*sin2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;

            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3 *cosP *cosT2 *sin2P *sinT2 - cosP *sin2P *sinT4;
            Dv[1]=3 *cosT2 *sinP *sin2P *sinT2 - sinP *sin2P *sinT4;
            Dv[2]=2 *cosT3 *sin2P *sinT - 2 *cosT *sin2P *sinT3;

            Du[0]=2 *cosP *cos2P *cosT *sinT3 - cosT *sinP *sin2P *sinT3;
            Du[1]=2 *cos2P *cosT *sinP *sinT3 + cosP *cosT *sin2P *sinT3;
            Du[2]=2 *cos2P *cosT2 *sinT2;

        }

        if (m==3)   //name="Fx(x2-3y2)"
        {
            r = sqrt(70./M_PI)/8.0 *sinT3*cos3P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=4 *cosP *cos3P *cosT *sinT3;
            Dv[1]=4 *cos3P *cosT *sinP *sinT3;
            Dv[2]=3 *cos3P *cosT2 *sinT2 - cos3P *sinT4;

            Du[0]=-cos3P *sinP *sinT4 - 3 *cosP *sin3P *sinT4;
            Du[1]=cosP *cos3P *sinT4 - 3 *sinP *sin3P *sinT4;
            Du[2]=-3 *cosT *sin3P *sinT3;
        }

        // Fy(3x2-y2) = sqrt(70./M_PI)/8.0  *sinT*sinT*sinT*sin(3.0*phi);
        if (m==-3)
        {
            r = sqrt(70./M_PI)/8.0 *sinT3*sin3P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=4 *cosP *cosT *sin3P *sinT3;
            Dv[1]=4 *cosT *sinP *sin3P *sinT3;
            Dv[2]=3 *cosT2 *sin3P *sinT2 - sin3P *sinT4;

            Du[0]=3 *cosP *cos3P *sinT4 - sinP *sin3P *sinT4;
            Du[1]=3 *cos3P *sinP *sinT4 + cosP *sin3P *sinT4;
            Du[2]=3 *cos3P *cosT *sinT3;
        }

        if(r<-eps)
        for (int i = 0; i < 3; ++i)
        {
            Du[i] = -Du[i];
            Dv[i] = -Dv[i];
        }
        return;

    }

    if (l==4) //G
    {
        if (m==0)   //name="Gz4"
        {
            double gz4=3.0-30.0*cosT2+35.0*cosT4;
            r = 3.0/16.0/sqrt(M_PI)*gz4;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            double b=(60.0 *cosT *sinT - 140.0 *cosT3 *sinT);
            Dv[0]=cosP *cosT * gz4 +  cosP *sinT * b;
            Dv[1]=cosT *gz4 *sinP +   sinP *sinT *b;
            Dv[2]=-gz4 *sinT + cosT *b;

            Du[0]=-gz4 *sinP *sinT;
            Du[1]=cosP *gz4 *sinT;
            Du[2]=0;
        }

        if (m==1)   //name="Gz3x"
        {
            double aa=(7.0*cosT2-3.0);
            r = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*aa*cosP ;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;

            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2 *cosP2 *cosT2 *aa * sinT -  14. *cosP2 *cosT2 *sinT3 - cosP2 *aa *sinT3;
            Dv[1]=2 *cosP *cosT2 *aa *sinP *sinT -  14. *cosP *cosT2 *sinP *sinT3 - cosP *aa *sinP *sinT3;
            Dv[2]=cosP *cosT3 *aa - 14 *cosP *cosT3 *sinT2 -     2 *cosP *cosT *aa *sinT2;
            Du[0]=-2 *cosP *cosT *aa *sinP *sinT2;
            Du[1]=cosP2 *cosT *aa *sinT2 - cosT *aa *sinP2 *sinT2;
            Du[2]=-cosT2 *aa *sinP *sinT;
        }

        if (m==-1)  //name="Gz3y",
        {
            double aa=(7.0*cosT2-3.0);

            r = 3.0/8.0*sqrt(5.0/M_PI)*cosT*sinT*aa*sinP;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=2 *cosP *cosT2 *aa *sinP *sinT -
                    14 *cosP *cosT2 *sinP *sinT3 - cosP * aa *sinP *sinT3;
            Dv[1]=2 *cosT2 *aa *sinP2 *sinT - 14 *cosT2 *sinP2 *sinT3 - aa *sinP2 *sinT3;
            Dv[2]=cosT3 *aa *sinP - 14 *cosT3 *sinP *sinT2 - 2.0 *cosT *aa *sinP *sinT2;
            Du[0]=cosP2 *cosT *aa *sinT2 -  cosT *aa *sinP2 *sinT2;
            Du[1]=2 *cosP *cosT *aa *sinP *sinT2;
            Du[2]=cosP *cosT2 *aa *sinT;
        }
        if (m==2)   //name="Gz2(x2-y2)"
        {
            double aa=(-7.0*cosT2+1);
            r = 3.0/8.0*sqrt(5.0/M_PI)*sinT2*aa*cos2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;

            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3 *cosP *cos2P *cosT *aa *sinT2 + 14 *cosP *cos2P *cosT *sinT4;
            Dv[1]=3 *cos2P *cosT *aa *sinP *sinT2 + 14 *cos2P *cosT *sinP *sinT4;
            Dv[2]=2 *cos2P *cosT2 *aa *sinT + 14 *cos2P *cosT2 *sinT3 - cos2P *aa *sinT3;
            Du[0]=-cos2P *aa *sinP *sinT3 -  2 *cosP *aa *sin2P *sinT3;
            Du[1]=cosP *cos2P *aa *sinT3 -  2 *aa *sinP *sin2P *sinT3;
            Du[2]=-2 *cosT *aa*sin2P *sinT2;
        }

        if (m==-2)  //name="Gz2xy"; -2,
        {
            double aa=1.0-7.0*cosT2;
            r = 3.0/8.0*sqrt(5.0/M_PI)*sinT2*aa*sin2P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=3 *cosP *cosT *aa *sin2P *sinT2 +
                    14 *cosP *cosT *sin2P *sinT4;
            Dv[1]=3 *cosT *aa *sinP *sin2P *sinT2 +
                    14 *cosT *sinP *sin2P *sinT4;
            Dv[2]=2 *cosT2 *aa *sin2P *sinT +
                    14 *cosT2 *sin2P *sinT3 - aa *sin2P *sinT3;
            Du[0]=2 *cosP *cos2P *aa *sinT3 - aa *sinP*sin2P *sinT3;
            Du[1]=2 *cos2P *aa *sinP *sinT3 +
                    cosP *aa *sin2P *sinT3;
            Du[2]=2 *cos2P *cosT *aa *sinT2;
        }

        if (m==3)   //name="Gzx3"; 3,
        {
            r = 3.0/8.0*sqrt(35.0/M_PI)*sinT3*cosT*cos3P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=4 *cosP *cos3P *cosT2 *sinT3 - cosP *cos3P *sinT5;
            Dv[1]=4 *cos3P *cosT2 *sinP *sinT3 - cos3P *sinP *sinT5;
            Dv[2]=3 *cos3P *cosT3 *sinT2 - 2 *cos3P *cosT *sinT4;
            Du[0]=-cos3P *cosT *sinP *sinT4 - 3 *cosP *cosT *sin3P *sinT4;
            Du[1]=cosP *cos3P *cosT *sinT4 - 3 *cosT *sinP *sin3P *sinT4;
            Du[2]=-3 *cosT2 *sin3P *sinT3;
        }

        if (m==-3)  //name="Gzy3"; -3,
        {
            r = 3.0/8.0*sqrt(35.0/M_PI)*sinT3*cosT*sin3P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=4 *cosP *cosT2 *sin3P *sinT3 - cosP *sin3P *sinT5;
            Dv[1]=4 *cosT2 *sinP *sin3P *sinT3 - sinP *sin3P *sinT5;
            Dv[2]=3 *cosT3 *sin3P *sinT2 - 2 *cosT *sin3P *sinT4;
            Du[0]=3 *cosP *cos3P *cosT *sinT4 - cosT *sinP *sin3P *sinT4;
            Du[1]=3 *cos3P *cosT *sinP *sinT4 + cosP *cosT *sin3P *sinT4;
            Du[2]=3 *cos3P *cosT2 *sinT3;
        }

        if (m==4)   //name="G(x4+y4)";
        {
            r = 3.0/16*sqrt(35.0/M_PI)*sinT4*cos4P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=5 *cosP *cos4P *cosT *sinT4;
            Dv[1]=5 *cos4P *cosT *sinP *sinT4;
            Dv[2]=4 *cos4P *cosT2 *sinT3 - cos4P *sinT5;
            Du[0]=-cos4P *sinP *sinT5 - 4 *cosP *sin4P *sinT5;
            Du[1]=cosP *cos4P *sinT5 - 4 *sinP *sin4P *sinT5;
            Du[2]=-4 *cosT *sin4P *sinT4;
        }

        if (m==-4)  //name="Gxy(x2-y2)"; -4,
        {
            r = 3.0/16*sqrt(35.0/M_PI)*sinT4*sin4P;

            //filter out positive
            if(lobe>0) //lobe=1
            if(r<-eps)    return;

            //filter out negative
            if(lobe<1) //lobe=0
            if(r>eps)   return;


            Pt[0] = abs(r) * sinT * cosP;
            Pt[1] = abs(r) * sinT * sinP;
            Pt[2] = abs(r) * cosT;

            Dv[0]=5 *cosP *cosT *sin4P *sinT4;
            Dv[1]=5 *cosT *sinP *sin4P *sinT4;
            Dv[2]=4 *cosT2 *sin4P *sinT3 - sin4P *sinT5;
            Du[0]=4 *cosP *cos4P *sinT5 - sinP *sin4P *sinT5;
            Du[1]=4 *cos4P *sinP *sinT5 + cosP *sin4P *sinT5;
            Du[2]=4 *cos4P *cosT *sinT4;
        }

        if(r<-eps)
        for (int i = 0; i < 3; ++i)
        {
            Du[i] = -Du[i];
            Dv[i] = -Dv[i];
        }
        return;
    }
}

//----------------------------------------------------------------------------
double vtkYlm::EvaluateScalar(double*, double*, double*)
{
    return 0;
}

//----------------------------------------------------------------------------
void vtkYlm::PrintSelf(ostream& os, vtkIndent indent)
{
    this->Superclass::PrintSelf(os, indent);

    os << indent << "X scale factor: " << l << "\n";
    os << indent << "Y scale factor: " << m << "\n";
    os << indent << "Z scale factor: " << lobe << "\n";
}



/*


//----------------------------------------------------------------------------//
Py::Py()
{
  // Preset triangulation parameters
  this->MinimumU = -5.0;
  this->MaximumU = 5.0;
  this->MinimumV = -vtkMath::Pi();
  this->MaximumV = vtkMath::Pi();

  this->JoinU = 0;
  this->JoinV = 1;
  this->TwistU = 0;
  this->TwistV = 0;
  this->ClockwiseOrdering = 0;
  this->DerivativesAvailable = 1;
}

//----------------------------------------------------------------------------//
Py::~Py() = default;

//----------------------------------------------------------------------------//
void Py::Evaluate(double uvw[3], double Pt[3], double Duvw[9])
{
  // Copy the parameters out of the vector, for the sake of convenience.
  double u = uvw[0];
  double v = uvw[1];

  // We're only going to need the u and v partial derivatives.
  // The w partial derivatives are not needed.
  double* Du = Duvw;
  double* Dv = Duvw + 3;

  // Instead of a bunch of calls to the trig library,
  // just call it once and store the results.
  double cosv = cos(v);
  double sinv = sin(v);
  double sechu = 1. / cosh(u);
  double tanhu = tanh(u);

  // Location of the point. This parametrization was taken from:
  // http://mathworld.wolfram.com/Pseudosphere.html
  Pt[0] = sechu * cosv;
  Pt[1] = sechu * sinv;
  Pt[2] = u - tanhu;

  // The derivative with respect to u:
  Du[0] = -sechu * tanhu * cosv;
  Du[1] = -sechu * tanhu * sinv;
  Du[2] = 1. - sechu * sechu;

  // The derivative with respect to v:
  Dv[0] = -sechu * sinv;
  Dv[1] = sechu * cosv;
  Dv[2] = 0.;
}

//----------------------------------------------------------------------------//
double Py::EvaluateScalar(double*, double*, double*)
{
  return 0;
}

//----------------------------------------------------------------------------//
void Py::PrintSelf(ostream& os, vtkIndent indent)
{
  this->Superclass::PrintSelf(os, indent);
}
*/
