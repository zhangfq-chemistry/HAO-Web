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

#ifndef mixedFunctions_H
#define mixedFunctions_H

#include <vtkParametricFunction.h>
#include <string.h>
using namespace std;


class mixedFunctions : public vtkParametricFunction
{
 public:
   vtkTypeMacro(mixedFunctions, vtkParametricFunction);
   void PrintSelf(ostream& os, vtkIndent indent) override;

   static mixedFunctions* New();

   int GetDimension() override { return 2; }

   vtkSetMacro(S, int);
   vtkGetMacro(S, int);

   vtkSetMacro(P, int);
   vtkGetMacro(P, int);

   vtkSetMacro(D, int);
   vtkGetMacro(D, int);


   vtkSetMacro(lobe, int);
   vtkGetMacro(lobe, int);





   void Evaluate(double uvw[3], double Pt[3], double Duvw[9]) override;
   double EvaluateScalar(double uvw[3], double Pt[3], double Duvw[9]) override;

 protected:
   mixedFunctions();
   ~mixedFunctions() override;

   // Variables
   int S, P, D,lobe;
   double sqrt2, sqrt3, sqrt6;



 private:
   mixedFunctions(const mixedFunctions&) = delete;
   void operator=(const mixedFunctions&) = delete;
 };
#endif // mixedFunctions_H
