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


#ifndef HybridizedORBITALPROPERTY_H
#define HybridizedORBITALPROPERTY_H

#include <QWidget>

#include "matrix3/vector3.h"
#include "ui_HBAOProperty.h"

using namespace std;

class MainWindow;
class HybridizeObitialViewer;


class HybridizedOrbitalProperty : public QDialog
{
    Q_OBJECT
public:
    Ui::HybridizedOrbitalProperty  ui;
    explicit HybridizedOrbitalProperty(QWidget *parent = nullptr);

    MainWindow * mainWin;
    HybridizeObitialViewer * hoview3d;

    void setMainwin(MainWindow * m) {mainWin=m;}

    void initial();
    void refreshOrbitalView();
    void getDataFromCurrentPanel();

    void modify_PosLobeColor();
    void modify_NegLobeColor();

    void modify_ExtraPosLobeColor();
    void modify_ExtraNegLobeColor();
    void modify_LineColor();


//signals:


private slots:
    //void on_pushButton_flipPhase_clicked();

    void on_pushButton_positive_clicked();
    void on_pushButton_negative_clicked();



    void on_pushButton_ok_clicked();

    void on_pushButton_cancel_clicked();

    void on_pushButton_Save_clicked();

    void on_pushButton_Load_clicked();

    void on_spinBox_positive_red_valueChanged(int arg1);

    void on_spinBox_positive_green_valueChanged(int arg1);

    void on_spinBox_positive_blue_valueChanged(int arg1);

    void on_spinBox_positive_opacity_valueChanged(int arg1);

    void on_spinBox_negative_red_valueChanged(int arg1);

    void on_spinBox_negative_green_valueChanged(int arg1);

    void on_spinBox_negative_blue_valueChanged(int arg1);

    void on_spinBox_negative_opacity_valueChanged(int arg1);

    void on_spinBox_ExtraPos_red_valueChanged(int arg1);

    void on_spinBox_ExtraPos_green_valueChanged(int arg1);

    void on_spinBox_ExtraPos_blue_valueChanged(int arg1);

    void on_spinBox_ExtraPos_opacity_valueChanged(int arg1);

    void on_spinBox_ExtraNeg_red_valueChanged(int arg1);

    void on_spinBox_ExtraNeg_green_valueChanged(int arg1);

    void on_spinBox_ExtraNeg_blue_valueChanged(int arg1);

    void on_spinBox_ExtraNeg_opacity_valueChanged(int arg1);

    void on_spinBox_Line_red_valueChanged(int arg1);

    void on_spinBox_Line_green_valueChanged(int arg1);

    void on_spinBox_Line_blue_valueChanged(int arg1);

    void on_doubleSpinBox_lineWidth_valueChanged(double arg1);

    void on_pushButton_default_clicked();

    void on_Button_Extra_positive_color_clicked();

    void on_Button_Extra_negative_color_clicked();

    void on_pushButton_Line_color_clicked();

private:
    vector3 LobeColor_pos,LobeColor_neg,LineColor;
    vector3 extraLobeColor_pos,extraLobeColor_neg;


    int  Lobe_opacity_pos, Lobe_opacity_neg;
    int  ExtraLobe_opacity_pos, ExtraLobe_opacity_neg;

    vector3 backgroundcolor;

    double  outLineWidth;
};

#endif // HybridizedORBITALPROPERTY_H
