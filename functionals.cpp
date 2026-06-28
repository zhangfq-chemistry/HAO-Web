#include "functionals.h"
#include "SolveEquation.h"
#include <algorithm>
#include <random>
#include <QVector>


double sgnd(double x)
{
    if (x>0.0) return(1.0);
    if (x<0.0) return(-1.0);
    return(1.0);
}


double factorial(int n)
{
    if (n <= 1)
        return 1.0;
    else
        return double (n) * factorial(n - 1);
}





double laguerrel(int n, int m, double x)
{
    double v[n+1];

    if (n < 0) {
        return -1;
    }

    v[0] = 1.0;
    for (int i = 1; i <= n; i++) {
        v[i] = 0.0;
    }

    if (n == 0) {
        return v[0];
    }

    v[1] = (double)(m + 1) - x;

    for (int i = 2; i <= n; i++) {
        v[i] = (((double)(m + 2 * i - 1) - x) * v[i-1]
               + ( double ) (-m - i + 1 ) * v[i-2])
               / ( double ) (i);
    }

    return v[n];
}



// Associated Legendre polynomial with unity norm
double legendrepn( int l, int m,  double x)
{
    if (m<0) m=-m;

    double tmp;
    double p=0, p1, p2;
    double c, c2;
    int i;

    // compute starting values for recurrence
    tmp = 1.0;
    for (i=2; i<=2*m; i+=2)
        tmp *= (1-x*x)*(i+1.0)/i;

    p2 = sqrt(tmp/2);
    if (l == m)
        return p2;

    p1 = sqrt(2*m+3)*x*p2;
    if (l == m+1)
        return p1;

    // recurrence
    c2 = sqrt((4.0*m*m+8.0*m+3)/(2*m+1.0));
    for (i=m+2; i<=l; ++i) {
        c = sqrt((4.0*i*i-1.0)/(1.0*i*i-1.0*m*m));
        p = p1*x*c - p2*c/c2;
        p2 = p1;
        p1 = p;
        c2 = c;
    }
    return p;
}



double polar_function (const int l, const int m, const double theta)
{
    double cos_theta=cos(theta);
    double Theta = legendrepn(l,m,cos_theta);
    return Theta;
}

double radial_function(const int n, const int l, const double r)
{
    // radial wave function
    int i;
    double rho, a;
    rho = 2.0 * r / n;
    a = 4.0;
    for (i = n - l; i <= n + l; i++)
    {
        a /= i;
    }
    a = sqrt(a);
    a /= n * n;

    return a * exp(-0.5 * rho) * pow(rho, l) * laguerrel(n-l-1, 2*l+1, rho);
}



double radial_distribution_function(const int n, const int l,const double r)
{
    double val = radial_function(n,l,r);
    return r * r * val * val;
}



double angular_function (const int l, const int m, const double theta,const double phi)
{
    double cos_theta=cos(theta);

    double Theta=1.0,Phi=1.0;

    Theta = legendrepn(l, m,cos_theta);

    Phi=1.0/sqrt(2.0*3.141592654); //m=0

    if (m > 0)
        Phi=cos(m*phi)/sqrt(3.141592654); //m>0

    if (m < 0){

        Phi=-sin(m*phi)/sqrt(3.141592654); //m<0
    }
    return Theta*Phi;
}

double azimuthal_function(const int m, const double phi)
{
    double Phi=1.0/sqrt(2.0*3.141592654); //m=0

    if (m > 0)
        Phi=cos(m*phi)/sqrt(3.141592654); //m>0

    if (m < 0)
        Phi=-sin(m*phi)/sqrt(3.141592654); //m<0
    return Phi;
}



// https://commons.wikimedia.org/wiki/User:Geek3/hydrogen#Code
double psi_polar(const int n, const int l, const int m, const double r, const double theta, const double phi)
{
    double cosTheta=cos(theta);

    // absolute value of Psi without phi dependency
    double pb=1.0;
    if (r <0.001)
        pb = radial_function(n, l, r) * legendrepn(l, m, 0.0);
    else
        pb = radial_function(n, l, r) * legendrepn(l, m, cosTheta);

    // phase of Psi
    double Phi=1.0/sqrt(2.0*3.141592654); //m=0


    if (m > 0)
        Phi=cos(m*phi)/sqrt(3.141592654); //m>0
    if (m < 0)
        Phi=-sin(m*phi)/sqrt(3.141592654); //m<0

    return  pb*Phi;

}



double psi_cart(const int n, const int l, const int m,
                const double x, const double y, const double z)
{
    double r, rxy, phi=0.0;

    // absolute value of Psi without phi dependency
    double xx=x*x;
    double yy=y*y;

    double pb=1.0;
    r = sqrt(xx + yy + z * z);
    if (r < 0.01)
        pb = radial_function(n, l, r) * legendrepn(l, m, 0.0);
    else
        pb = radial_function(n, l, r) * legendrepn(l, m, z / r);

    // phase of Psi
    double Phi=1.0/sqrt(3.141592654);

    if(m!=0)
    {
        phi=3.141592654/2.0;
        rxy = sqrt(xx + yy);
        if (rxy > 0.001)
            phi = m * atan2(y, x);

        if (m > 0)
            Phi*=cos(phi); //m>0

        if (m < 0)
            Phi*=-sin(phi); //m<0
    }

    return pb*Phi;
}


double Slater_radial_function(const int Z,const int n, const int l, const double r)
{
    // radial part
    double ksi=1.0*Z;
    double factor=powl(2*ksi,n)*sqrt(2*ksi/factorial(2*n));
    double R=factor*pow(r,n-1)*exp(-ksi*r);

    return R;
}

double Slater_radial_distribution_function(const int Z, const int n, const int l,const double r)
{
    double val = Slater_radial_function(Z, n,l,r);
    return r * r * val * val;
}

double Slater_Psi(const int Z,  const int n, const  int l, const int m,
                    const double x,  const double y, const  double z)
{
    double r, phi=0.0;


    double x2=x*x,y2=y*y,z2=z*z;
    r = sqrt(x2+y2+z2);

    // radial part
    double ksi=1.0*Z;
    double factor=powl(2*ksi,n)*sqrt(2*ksi/factorial(2*n));
    double R=factor*pow(r,n-1)*exp(-ksi*r);;

    double pb=1.0;
    if (r < 0.01)
        pb = R * legendrepn(l, m, 0.0);
    else
        pb = R * legendrepn(l, m, z/r);


    // phase of Psi
    double Phi=1.0/sqrt(3.141592654);
    if(m!=0)
    {
        phi=3.141592654/2.0;
        double rxy = sqrt(x * x + y * y);
        if (rxy > 0.001)
            phi = m * atan2(y, x);

        if (m > 0)
            Phi*=cos(phi); //m>0

        if (m < 0)
            Phi*=-sin(phi); //m<0
    }

    return pb*Phi;
}




// Probability density function
double probability_car(const int n, const int l, const int m,
                   const double x, const double y, const double z)
{
    double pb=0.0;
    double r = sqrt(x * x + y * y + z * z);

    if (r< 0.001)
        pb = radial_function(n, l, r) * angular_function(l, m, 0.0, 0.0);
    else
        pb = radial_function(n, l, r) * angular_function(l, m, acos(z/r), atan(y/x));
    return pb * pb;
}


//probability=|Psi|^2=Rnl^2*Ylm^2
double probability_polar(int n, int l,int m, double r,double theta, double phi)
{
    double pb=0.0;

    if (r < 0.0001)
        pb = radial_function(n, l, r) * angular_function(l, m, 0.0, 0.0);
    else
        pb = radial_function(n, l, r) * angular_function(l, m, theta, phi);
    return pb * pb;
}

double maxprob_3D(int n, int l, int m, double max)
{
    double th,pb,maxpb=0,r;//th:theta

    if(l==0){
        for(r=0;r<max;r+=0.0001*max){
            pb=probability_polar(n,l,m,r,0.0,0.0);
            if(pb>maxpb) maxpb=pb;
        }
    }
    else{
        for(r=0;r<max;r+=0.0001*max){
            for(th=0; th<=PI; th+=0.01*PI){

                if(m<0) pb=probability_polar(n,l,m,r,th,PI/(2*abs(m)));
                else pb=probability_polar(n,l,m,r,th,0.0);

                if(pb>maxpb) maxpb=pb;
            }
        }
    }

    return maxpb;
}

double maxprob_2D(int n, int l, int m, double max)
{
    double pb,maxpb=0,r;//th:theta
    for(r=0;r<max;r+=0.0001*max){
        if(m<0) pb=probability_polar(n,l,m,r,0.0,PI/(2*abs(m)));
        else pb=probability_polar(n,l,m,r,0.0,0.0);
        if(pb>maxpb) maxpb=pb;
    }

    return maxpb;
}


vector < double > polarNodes(int n, int l, int m)
{
    int lml=abs(m);
    int nT=l-lml;
    int nP=lml;

    vector < double > nodes;

    if (nT>0)
    {
        int m2=m+lml;
        QVector < double >  poly_T, poly_gradT; //theta
        poly_T.clear(), poly_gradT.clear();

        double term=1.0;
        double  Coeff_T=powl(-1.0, m2/2)/powl(2.0,l)*sqrt(l+0.5) * sqrt( factorial(l-lml)/factorial(l+lml));

        int k=floor((l-lml)/2);
        for (int j=0; j<=k; j++) {
            term=Coeff_T*powl(-1.0,j)*factorial(2*l-2*j)/factorial(j)/factorial(l-j)/factorial(l-lml-2*j);
            poly_T.push_back( term );
            poly_gradT.push_back( term * (l-lml-2*j));
        }

        int size=poly_T.size();
        QRRoots roots(size-1);
        double term0=poly_T[size-1];
        for (int i=0;i<size;i++) {
            roots.a[i]=poly_T[size-i-1]/term0;
            //cout <<roots.a[i]<<endl;
        }


        //the roots of associated is [cos(theta)]^2
        roots.qrSolve();
        nodes.clear();
        uint n=0, j=0;

        while (1)
        {
            if (abs(roots.xr[j]) <0.0001) {
                nodes.push_back(0.0);
                n=n+1;
            }
            else {
                nodes.push_back(roots.xr[j]);
                n=n+2;
            }

            if (n>=nT) break;
            j=j+1;
        }
    }

    return  nodes;
}


vector < double > azimuthalNodes(int m)
{
    int lml=abs(m);

    vector < double > nodes;

    nodes.clear();
    if (lml<1) return nodes;
    double phi=180.0/2.0/lml;

    for(int k=0; k<lml; k++)
    {
        if (m>0) //sin
            nodes.push_back(phi*k*2+phi);
        else  //cos
            nodes.push_back(phi*k*2);
    }
}



vector < double > radialNodes(int n, int l, int m)
{
    double a0=1.0;

    int nR=n-l-1;

    vector < double > nodes;
    if (nR<1) return nodes;


    vector < double > poly_R;
    poly_R.clear();

    int Z=1.0;
    double alpha=2.0*Z/n/a0;
    double coeff_R=pow(alpha,3/2.0)*sqrt(factorial(n-l-1)*factorial(n+l)/n/2.0);
    double term=1.0;



    int k=n-l-1,j;
    for (j=0; j<=k; j++){
        term=coeff_R*powl(-1.0,j+1)/factorial(2*l+j+1)/factorial(j)/factorial(n-l-j-1);
        poly_R.push_back(term);
    }

    double term0=poly_R[poly_R.size()-1];
    for (int i=0;i<poly_R.size();i++)
        poly_R[i]=poly_R[i]/term0;


    SolveEquation roots(poly_R);
    roots.Solve();

    for(int j=0; j<nR; j++)
        cout << roots.answer[j]<<endl;

    nodes.clear();
    if (roots.answer.size()>0)
        for(int j=0; j<nR; j++)
            nodes.push_back(roots.answer[j]/alpha);

    //sort
    sort(nodes.begin(), nodes.end());
    std::reverse(nodes.begin(),nodes.end());

    return nodes;
}



double powl(double val, int p)
{
    if (p ==0) return 1.0;
    if (p < 0) return pow(val,p);

    double ret;
    if (!p)  return(val!=0);
    ret = 1.0;
    while (p) {
        if (p&1)  ret *= val;
        val *= val;  p >>= 1;
    }

    return ret;
}




int rnd(int a, int b) {
    return rand() % (b-a+1)+ a;
}




double max3(double a,double b, double c)
{
    double re=a;
    if(re<b)
        re=b;
    if (re<c)
        re=c;
    return re;
}



double integrate_radial_density(const int n, const int l, double a, double b, int steps)
{
    double s = 0; // sum
    double h = (b-a)/steps;

    double r=0.0;
    for (int i = 0; i < steps; ++i)
    {
        r = a + h * (double)i;

        s += (radial_distribution_function(n,l,r) +
              4 * radial_distribution_function(n,l,r + h / 2.0) +
              radial_distribution_function(n,l,r + h)) / 6.0;
    }

    return h * s;
}

double find_isosurface_volume(const int n, const int l,double a, double b, int steps)
{
    double s = 0;
    double h = (b-a)/steps;
    double r = 0;

    for (int i = 0; i < steps; ++i) {
        r = a + h * (double)i;

        // use Simpson's rule
        s += (radial_distribution_function(n,l,r) +
              4 * radial_distribution_function(n,l,r + h / 2.0) +
              radial_distribution_function(n,l,r + h)) / 6.0;
        if(h * s >= 0.95) {
            return std::sqrt(radial_distribution_function(n,l,r) /
                       (4.0 * M_PI * r * r));
        }
    }

    return -1;
}

double polar_density(const int l, const int m, double theta)
{
    double val = polar_function(l,  m, theta);
    return val * val * sin(theta);
}

double integrate_spherical_harmonic(const int l, const int m,double a, double b, int steps) {
    double s = 0;
    double h = (b-a)/steps;
    double r = 0;
    for (int i = 0; i < steps; ++i) {
        r = a + h * (double)i;

        s += (polar_density(l,m,r) +
              4 * polar_density(l,m,r + h / 2.0) +
              polar_density(l,m,r + h)) / 6.0;
    }
    return h * s / 2.0; // due to azimuthal function
}

double integrate_x2(double a, double b, int steps)
{
    double s = 0;
    double h = (b-a)/steps;
    double r = 0;

    for (int i = 0; i < steps; ++i) {
        r = a + h * (double)i;

        s += ((std::pow(r, 2.0)) +
              4.0 * (std::pow(r + h / 2.0, 2.0)) +
              (std::pow(r + h, 2.0))) / 6.0;
    }

    return h * s;
}


double LambertW0(double z)
{
  int i;
  const double eps=4.0e-16, em1=0.3678794411714423215955237701614608;
  double p,e,t,w;

  if (z<-em1) {
    fprintf(stderr,"LambertW: bad argument %g, exiting.\n",z); return 0;
  }

  if (0.0==z) return 0.0;

  if (z<-em1+1e-4) { // series near -em1 in sqrt(q)
    double q=z+em1,r=sqrt(q),q2=q*q,q3=q2*q;
    return
     -1.0
     +2.331643981597124203363536062168*r
     -1.812187885639363490240191647568*q
     +1.936631114492359755363277457668*r*q
     -2.353551201881614516821543561516*q2
     +3.066858901050631912893148922704*r*q2
     -4.175335600258177138854984177460*q3
     +5.858023729874774148815053846119*r*q3
     -8.401032217523977370984161688514*q3*q;  // error approx 1e-16
  }
  /* initial approx for iteration... */
  if (z<1.0) { /* series near 0 */
    p=sqrt(2.0*(2.7182818284590452353602874713526625*z+1.0));
    w=-1.0+p*(1.0+p*(-0.333333333333333333333+p*0.152777777777777777777777));
  } else
    w=log(z)-log(log(z)); /* asymptotic */
  for (i=0; i<10; i++) { /* Halley iteration */
    e=exp(w);
    t=w*e-z;
    p=w+1.0;
    t/=e*p-0.5*(p+1.0)*t/p;
    w-=t;
    if (fabs(t)<eps*(1.0+fabs(w))) return w; /* rel-abs error */
  }
  /* should never get here */
  fprintf(stderr,"LambertW: No convergence at z=%g, exiting.\n",z);
  return 0;
}

double LambertW1(double z)
{
  int i;
  const double eps=4.0e-16, em1=0.3678794411714423215955237701614608;
  double p=1.0,e,t,w,l1,l2;
  if (z<-em1 || z>=0.0) {
    fprintf(stderr,"LambertW1: bad argument %g, exiting.\n",z); return 0;
  }
  /* initial approx for iteration... */
  if (z<-1e-6) { /* series about -1/e */
    p=-sqrt(2.0*(2.7182818284590452353602874713526625*z+1.0));
    w=-1.0+p*(1.0+p*(-0.333333333333333333333+p*0.152777777777777777777777));
  } else { /* asymptotic near zero */
    l1=log(-z);
    l2=log(-l1);
    w=l1-l2+l2/l1;
  }
  if (fabs(p)<1e-4) return w;
  for (i=0; i<10; i++) { /* Halley iteration */
    e=exp(w);
    t=w*e-z;
    p=w+1.0;
    t/=e*p-0.5*(p+1.0)*t/p;
    w-=t;
    if (fabs(t)<eps*(1.0+fabs(w))) return w; /* rel-abs error */
  }
  /* should never get here */
  fprintf(stderr,"LambertW1: No convergence at z=%g, exiting.\n",z);
  return 0;
}

double F ( const double x, const double r )
{
    return ( x * exp( x ) + r * x );
}

double DF ( const double x, const double r )
{
    return ( (1.0 + x) * exp( x ) + r );
}

double DDF ( const double x )
{
    return ( (2.0 + x) * exp( x ) );
}


double rLambert(const double x, const double r)
{
    const char prec = 12 ;
    if ( x == 0. ) return 0.; // W(x,r)=0 always
    if ( r == 0. )
    {
        if ( x < 0 ) { printf( "%s\n", "There is one additional branch:" );
        printf( "W-1(%f, 0) = %.*f\n", x, prec, LambertW1(x) ); }
        return LambertW0( x );
    }

    const double e = exp( 1. );
    const double em2 = exp ( -2. );

    double w, wprev; // intermediate values in the Halley method
    const unsigned int maxiter = 20; // max number of iterations. This eliminates problems with convergence
    unsigned int iter; // iteration counter


    // If r >= exp(-2), there is just one branch of W(x,r):
    if ( r >= em2 )
    {
        if ( (r == em2) && (x == -4. * em2) ) return -2.; // At this x W(x,em2) is not differentiable, so
        // Halley's method does not work. But it can be calculated that W(x,em2) = -2.
        // If x is close but not equal to -4*em2, there is no problem.
        // For example, if x= -4. * exp( -2. ) +/- .00000000001,
        // the program still gives the correct result

        // begin the iteration up to prec precision
        // initial value for the Halley method
        if ( x > 1. )  w = log( x ) - log( log( x ) );
        if ( x < -1.) w = 1. / r * x;
        if ( abs(x) <= 1 ) w = 0.;
        wprev = w;

        iter = 0;
        do
        {
            wprev = w;


            w -= 2.*((F(w,r)-x) * DF(w,r)) /
                (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
            iter++;
        } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
        return w;
    } // if ( r >= em2 )

    //here comes the calculation when W(x,r) has three branches (i.e. 0 < r < e^(-2))
    else if ( 0 < r && r < em2 )
    {
        double alpha  = LambertW1( -r * e ) - 1.; // left  branch point
        double beta   = LambertW0 ( -r * e ) - 1.; // right branch point
        double falpha = F( alpha, r );
        double fbeta  = F( beta,  r );

        if ( x < fbeta ) // leftmost branch
        {
            if ( x < -40.54374295204823 ) return x / r; // because x*e^x < 1E-16 as x < -40.5437...
            wprev = w = x / r;

            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            return w;
        } // if ( x < fbeta )

        if ( x >= fbeta && x <= falpha ) // leftmost and inner branches
        {
            double wm2 = x / r; // initial value for the leftmost branch W-2(x,r)
            double wm1 = -3.; // initial value for the inner branch W-1(x,r)
            double wm0 = -1.;  // initial value for the rightmost branch W0(x,r)

            // Halley iteration for the leftmost branch
            iter = 0;
            do
            {
                wprev = wm2;
                wm2 -= 2.*((F(wm2,r)-x) * DF(wm2,r)) /
                    (2.*DF(wm2,r)*DF(wm2,r) - (F(wm2,r)-x)*DDF(wm2));
                iter++;
            } while ( (abs( wm2 - wprev ) > pow( 10., -prec )) && iter < maxiter );
            printf( "%s\n", "There are two additional branches:" );
            printf( "W-2(%f, %f) = %.*f\n", x, r, prec, wm2 );

            // Halley iteration for the inner branch
            iter = 0;
            do
            {
                wprev = wm1;
                wm1 -= 2.*((F(wm1,r)-x) * DF(wm1,r)) /
                    (2.*DF(wm1,r)*DF(wm1,r) - (F(wm1,r)-x)*DDF(wm1));
                iter++;
            } while ( (abs( wm1 - wprev ) > pow( 10., -prec )) && iter < maxiter );
            printf( "W-1(%f, %f) = %.*f\n", x, r, prec, wm1 );

            // Halley iteration for the rightmost branch
            iter = 0;
            do
            {
                wprev = wm0;
                wm0 -= 2.*((F(wm0,r)-x) * DF(wm0,r)) /
                    (2.*DF(wm0,r)*DF(wm0,r) - (F(wm0,r)-x)*DDF(wm0));
                iter++;
            } while ( (abs( wm0 - wprev ) > pow( 10., -prec )) && iter < maxiter );
            return wm0;
        } // if ( x >= fbeta && x <= falpha )

        if ( x > falpha ) // rightmost branch
        {
            wprev = w = ( x > 1. ) ? log ( x ) - log( log ( x ) ) : 0.; // initial value

            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            return w;
        } // if ( x > falpha )

    } // else if
    else if ( r < 0 ) // two branches separated by W(-r*e)-1
    {
        // minimum of F: W(-r*e)-1, zeros: 0 and log(-r)
        if ( x < F( LambertW0( -r * e ) - 1., r ) )
        {
            printf( "%s\n", "First argument of LambertW(x,r) is out of domain" );
            return NULL;
        }
        if ( x == log( -r ) ) return 0;

        if ( x < 0 ) // Two initial values, one less than the minimum of f, the other is one greater
        {
            // left branch
            wprev = w = LambertW0( -r * e ) - 2;

            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            printf( "%s\n", "There is one additional branch:" );
            printf( "W-1(%f, %f) = %.*f\n", x, r, prec, w );

            // right branch
            wprev = w = LambertW0( -r * e );
            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            return w;
            }

        if ( x > 0 )
        {
            double lzero = r > -1 ? log(-r) : 0;
            double rzero = r > -1 ? 0 : log(-r);

            // left branch
            wprev = w = lzero - 1;
            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            printf( "%s\n", "There is one additional branch:" );
            printf( "W-1(%f, %f) = %.*f\n", x, r, prec, w );

            // right branch
            wprev = w = rzero + 1;
            iter = 0;
            do
            {
                wprev = w;
                w -= 2.*((F(w,r)-x) * DF(w,r)) /
                    (2.*DF(w,r)*DF(w,r) - (F(w,r)-x)*DDF(w));
                iter++;
            } while ( (abs( w - wprev ) > pow( 10., -prec )) && iter < maxiter );
            return w;
        } // if ( x < 0 )
        } // else if ( r < 0 )
    /* should never get here */
    fprintf(stderr, "LambertW1: No convergence at x=%g, exiting.\n", x);
    return 0;
}

