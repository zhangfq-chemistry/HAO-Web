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

#ifndef ORBITALPROPERTY_H
#define ORBITALPROPERTY_H

#include <QWidget>

#include <QColorDialog>
#include "matrix3/vector3.h"
#include "ui_AOProperty.h"

using namespace std;

class MainWindow;
class View3D;
class Proj3D;
class Angular3D;
class Radial3D;


class OrbitalProperty : public QDialog
{
    Q_OBJECT
public:
    Ui::OrbitalProperty   ui;
    explicit OrbitalProperty(QWidget *parent = nullptr);

    MainWindow * m_parent;

    View3D * view3d;
    Proj3D * proj3d;
    Angular3D * angular3d;
    Radial3D * radial3d;


    void initial();
    void refreshView3d();

//signals:


private slots:
    //void on_pushButton_flipPhase_clicked();
    void on_pushButton_cancel_clicked();
    void on_pushButton_ok_clicked();
    void on_pushButton_ON_R_clicked();
    void on_pushButton_ON_Theta_clicked();
    void on_pushButton_ON_Phi_clicked();
    void on_pushButton_OL_positive_clicked();
    void on_pushButton_OL_negative_clicked();
    void on_pushButton_Background_clicked();
    void on_spinBox_background_red_valueChanged(int arg1);
    void on_spinBox_background_green_valueChanged(int arg1);
    void on_spinBox_background_blue_valueChanged(int arg1);
    void on_spinBox_ONR_opacity_valueChanged(int arg1);
    void on_spinBox_ONT_opacity_valueChanged(int arg1);
    void on_spinBox_ONP_opacity_valueChanged(int arg1);
    void on_spinBox_OL_positive_opacity_valueChanged(int arg1);
    void on_spinBox_OL_negative_opacity_valueChanged(int arg1);

    void getDataFromCurrentPanel();

    void on_spinBox_ONR_red_valueChanged(int arg1);

    void on_spinBox_ONR_green_valueChanged(int arg1);

    void on_spinBox_ONR_blue_valueChanged(int arg1);

    void on_spinBox_ONT_red_valueChanged(int arg1);

    void on_spinBox_ONT_green_valueChanged(int arg1);

    void on_spinBox_ONT_blue_valueChanged(int arg1);

    void on_spinBox_ONP_red_valueChanged(int arg1);

    void on_spinBox_ONP_green_valueChanged(const QString &arg1);

    void on_spinBox_ONP_blue_valueChanged(const QString &arg1);

    void on_spinBox_OL_positive_red_valueChanged(int arg1);

    void on_spinBox_OL_positive_green_valueChanged(int arg1);

    void on_spinBox_OL_positive_blue_valueChanged(int arg1);

    void on_spinBox_OL_negative_red_valueChanged(int arg1);

    void on_spinBox_OL_negative_green_valueChanged(int arg1);

    void on_spinBox_OL_negative_blue_valueChanged(int arg1);





private:
    vector3 LobeColor_pos,LobeColor_neg;
    vector3 angularNodecolor_Theta,angularNodecolor_Phi,radialNodecolor;
    vector3 backgroundcolor;

    int  R_Node_opacity,T_Node_opacity,P_Node_opacity;
    int  Lobe_opacity_pos, Lobe_opacity_neg;

    int background_red, background_green, background_blue;

    double  orbitalLineWidth,nodeThickness;


};

#endif // ORBITALPROPERTY_H
