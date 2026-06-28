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

#ifndef FUNCTIONALS_H
#define FUNCTIONALS_H
#ifndef PI
  #define PI  3.14159265358979323846264338327950L
#endif


#include <string>
#include <QString>

#include <string>
#include <QString>
#include <QColor>
#include <string>
#include <sstream>
#include <math.h>
#include <vector>

using namespace std;




double sgnd(double x);

double  factorial(int n);

//associated Laguerre
double laguerrel(int n, int m, double x);

//associated Legendre
double legendrepn( int l, int m,  double x);



double radial_distribution_function(const int n, const int l,const double r);
double radial_function(const int n, const int l, const double r);
double polar_function (const int l, const int m, const double theta);
double angular_function (const int l, const int m, const double theta,const double phi);
double angular_function(QString ObitalName, const double theta, const double phi) ;
double azimuthal_function( const int m, const double phi);

double psi_polar(const int n, const int l, const int m, const double r, const double theta, const double phi);
double psi_cart(const int n, const int l, const int m, const double x, const double y, const double z);

double Slater_radial_distribution_function(const int Z,const int n, const int l,const double r);
double Slater_radial_function(const int Z, const int n, const int l, const double r);
double Slater_Psi(const int Z,  const int n, const  int l, const int m,
                    const double x,  const double y, const  double z);


double probability_car(const int n, const int l, const int m,  const double x, const double y, const double z);
double probability_polar(int n, int l,int m, double r,double theta, double phi);
double maxprob_3D(int n, int l,int m, double max);
double maxprob_2D(int n, int l,int m, double maxbox);

vector < double > polarNodes(int n, int l, int m);
vector < double > azimuthalNodes(int m) ;
vector < double > radialNodes(int n, int l, int m);

double max3(double a,double b, double c);

double m_random(unsigned int type);

double lambertW0(double z);
double LambertW1(double z);

double F ( const double x, const double r );
double DF ( const double x, const double r );
double DDF ( const double x );

double rLambert( const double x, const double r);



#endif // FUNCTIONALS_H
