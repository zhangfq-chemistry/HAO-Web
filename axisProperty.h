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


#ifndef AXISPROPERTY_H
#define AXISPROPERTY_H
#include <QDialog>
#include "ui_AxisProperty.h"


#include <QWidget>
#include <QColorDialog>
#include "matrix3/vector3.h"

class View3D;

class Radial3D ;
class Proj3D ;
class Angular3D;
class HybridizeObitialViewer;
class MainWindow;


class AxisProperty : public QDialog
{
    Q_OBJECT
public:
    Ui::AxisProperty  ui;
    explicit AxisProperty(QWidget *parent = nullptr);

    void initilize(MainWindow * m);


    MainWindow * mainWin;

    ~AxisProperty() {};
// protected:
//    void closeEvent(QCloseEvent *event);
private slots:
    void on_pushButton_x_clicked();
    void on_pushButton_y_clicked();
    void on_pushButton_z_clicked();

    void on_spinBox_x_red_valueChanged(int arg1);
    void on_spinBox_x_green_valueChanged(int arg1);
    void on_spinBox_x_blue_valueChanged(int arg1);

    void on_spinBox_y_red_valueChanged(int arg1);
    void on_spinBox_y_green_valueChanged(int arg1);
    void on_spinBox_y_blue_valueChanged(int arg1);


    void on_spinBox_z_red_valueChanged(int arg1);
    void on_spinBox_z_green_valueChanged(int arg1);
    void on_spinBox_z_blue_valueChanged(int arg1);


    void on_pushButton_cancel_clicked();
    void on_pushButton_ok_clicked();

    void on_doubleSpinBox_x_valueChanged(double arg1);
    void on_doubleSpinBox_y_valueChanged(double arg1);
    void on_doubleSpinBox_z_valueChanged(double arg1);

    void on_pushButton_apply_clicked();

private:
    double x_length0,y_length0,z_length0;
    vector3 x_color0,y_color0,z_color0,line_color0;

    double x_length,y_length,z_length;
    vector3 x_color,y_color,z_color,line_color;


private:
    int typeOfView=0;
    View3D  *   view3d=nullptr;;
    Radial3D *  radial3d=nullptr;;
    Proj3D  * proj3d=nullptr;;
    Angular3D * angularY3d=nullptr;;
    HybridizeObitialViewer * hoview3d=nullptr;
};

#endif // AXISPROPERTY_H
