#include "hybridizedOrbitalProperty.h"
#include "hybridizeObitialViewer.h"

#include <QMessageBox>


#include <iostream>
#include <QFileDialog>
#include <QColorDialog>
#include "mainwindow.h"


HybridizedOrbitalProperty::HybridizedOrbitalProperty(QWidget *parent): QDialog(parent)
{
    ui.setupUi(this);
}

//read from View3d
void HybridizedOrbitalProperty::initial()
{
    hoview3d=mainWin->getHOView3D();
    if(!hoview3d) return;
    QString s;

    //color
    backgroundcolor=255*hoview3d->getBackgroundColor();
    LobeColor_pos=255*hoview3d->positiveLobeColor();
    LobeColor_neg=255*hoview3d->negtiveLobeColor();

    ui.spinBox_positive_red->setValue(LobeColor_pos.x());
    ui.spinBox_positive_green->setValue(LobeColor_pos.y());
    ui.spinBox_positive_blue->setValue(LobeColor_pos.z());

    Lobe_opacity_pos=255*hoview3d->getPosLobeOpacity();
    Lobe_opacity_neg=255*hoview3d->getNegLobeOpacity();
    ui.spinBox_positive_opacity->setValue(Lobe_opacity_pos);
    ui.spinBox_negative_opacity->setValue(Lobe_opacity_neg);

    s=tr("background-color: rgb(%1,%2,%3);").arg(LobeColor_pos.x()).arg(LobeColor_pos.y()).arg(LobeColor_pos.z());
    ui.pushButton_positive->setStyleSheet(s);

    ui.spinBox_negative_red->setValue(LobeColor_neg.x());
    ui.spinBox_negative_green->setValue(LobeColor_neg.y());
    ui.spinBox_negative_blue->setValue(LobeColor_neg.z());

    s=tr("background-color: rgb(%1,%2,%3);").arg(LobeColor_neg.x()).arg(LobeColor_neg.y()).arg(LobeColor_neg.z());
    ui.pushButton_negative->setStyleSheet(s);


    ExtraLobe_opacity_pos=255*hoview3d->getExtraPosLobeOpacity();
    ExtraLobe_opacity_neg=255*hoview3d->getExtraNegLobeOpacity();
    ui.spinBox_ExtraPos_opacity->setValue(ExtraLobe_opacity_pos);
    ui.spinBox_ExtraNeg_opacity->setValue(ExtraLobe_opacity_neg);


    extraLobeColor_pos=255*hoview3d->extraOrbitalPosLobeColor();
    extraLobeColor_neg=255*hoview3d->extraOrbitalNegLobeColor();

    ui.spinBox_ExtraPos_red->setValue(extraLobeColor_pos.x());
    ui.spinBox_ExtraPos_blue->setValue(extraLobeColor_pos.z());
    ui.spinBox_ExtraPos_green->setValue(extraLobeColor_pos.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(extraLobeColor_pos.x()).arg(extraLobeColor_pos.y()).arg(extraLobeColor_pos.z());
    ui.Button_Extra_positive_color->setStyleSheet(s);


    ui.spinBox_ExtraNeg_red->setValue(extraLobeColor_neg.x());
    ui.spinBox_ExtraNeg_blue->setValue(extraLobeColor_neg.z());
    ui.spinBox_ExtraNeg_green->setValue(extraLobeColor_neg.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(extraLobeColor_neg.x()).arg(extraLobeColor_neg.y()).arg(extraLobeColor_neg.z());
    ui.Button_Extra_negative_color->setStyleSheet(s);


    LineColor=255*hoview3d->getLineColor();
    ui.spinBox_Line_red->setValue(LineColor.x());
    ui.spinBox_Line_blue->setValue(LineColor.z());
    ui.spinBox_Line_green->setValue(LineColor.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(LineColor.x()).arg(LineColor.y()).arg(LineColor.z());
    ui.pushButton_Line_color->setStyleSheet(s);


    outLineWidth= hoview3d->getLinewidth();
    ui.doubleSpinBox_lineWidth->setValue(outLineWidth);
}



void HybridizedOrbitalProperty::refreshOrbitalView()
{
    if(!hoview3d) return;
    getDataFromCurrentPanel();

    double a=255.0;

    //lobe color
    hoview3d->setLobeColor_pos(LobeColor_pos/a);
    hoview3d->setLobeColor_neg(LobeColor_neg/a);

    hoview3d->setPosLobeOpacity(Lobe_opacity_pos/a);
    hoview3d->setNegLobeOpacity(Lobe_opacity_neg/a);


    hoview3d->setExtraOrbitalPosLobeColor(extraLobeColor_pos/a);
    hoview3d->setExraOrbitalNegLobeColor(extraLobeColor_neg/a);

    hoview3d->setExtraPosLobeOpacity(ExtraLobe_opacity_pos/a);
    hoview3d->setExtraNegLobeOpacity(ExtraLobe_opacity_neg/a);

    hoview3d->setLinewidth(outLineWidth);
    hoview3d->setLineColor(LineColor/a);

    hoview3d->renderScene();
}


void HybridizedOrbitalProperty::getDataFromCurrentPanel()
{
    LobeColor_pos.Set(ui.spinBox_positive_red->value(),
                      ui.spinBox_positive_green->value(),
                      ui.spinBox_positive_blue->value()
                      );


    LobeColor_neg.Set(ui.spinBox_negative_red->value(),
                      ui.spinBox_negative_green->value(),
                      ui.spinBox_negative_blue->value()
                     );


    extraLobeColor_pos.Set(ui.spinBox_ExtraPos_red->value(),
                           ui.spinBox_ExtraPos_green->value(),
                           ui.spinBox_ExtraPos_blue->value()
                           );



    extraLobeColor_neg.Set(ui.spinBox_ExtraNeg_red->value(),
                           ui.spinBox_ExtraNeg_green->value(),
                           ui.spinBox_ExtraNeg_blue->value()
                           );


    LineColor.Set(ui.spinBox_Line_red->value(),
                  ui.spinBox_Line_green->value(),
                  ui.spinBox_Line_blue->value());


    Lobe_opacity_pos=ui.spinBox_positive_opacity->value();
    Lobe_opacity_neg=ui.spinBox_negative_opacity->value();


    ExtraLobe_opacity_pos=ui.spinBox_ExtraPos_opacity->value();
    ExtraLobe_opacity_neg=ui.spinBox_ExtraNeg_opacity->value();

    outLineWidth=ui.doubleSpinBox_lineWidth->value();
}


void HybridizedOrbitalProperty::on_pushButton_ok_clicked()
{
    refreshOrbitalView();
    close();
}

void HybridizedOrbitalProperty::on_pushButton_cancel_clicked()
{
    initial();
    close();
}

void HybridizedOrbitalProperty::on_pushButton_Save_clicked()
{

}


void HybridizedOrbitalProperty::on_pushButton_Load_clicked()
{

}


//------------------------
void HybridizedOrbitalProperty::modify_PosLobeColor()
{
    int r=ui.spinBox_positive_red->value(),
        g=ui.spinBox_positive_green->value(),
        b=ui.spinBox_positive_blue->value();

    //ui.pushButton_positive->setStyleSheet(QString("background-color:rgb(%1,%2,%3);").arg(r).arg(g).arg(b));


    QString s=tr("background-color: rgb(%1,%2,%3);").arg(r).arg(g).arg(b);
    ui.pushButton_positive->setStyleSheet(s);
}

void HybridizedOrbitalProperty::on_spinBox_positive_red_valueChanged(int arg1)
{
    modify_PosLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_positive_green_valueChanged(int arg1)
{
    modify_PosLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_positive_blue_valueChanged(int arg1)
{
    modify_PosLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_positive_opacity_valueChanged(int arg1)
{

}


void HybridizedOrbitalProperty::modify_NegLobeColor()
{
    int r=ui.spinBox_negative_red->value(),
        g=ui.spinBox_negative_green->value(),
        b=ui.spinBox_negative_blue->value();

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(r).arg(g).arg(b);
    ui.pushButton_negative->setStyleSheet(s);
}

void HybridizedOrbitalProperty::on_spinBox_negative_red_valueChanged(int arg1)
{
    modify_NegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_negative_green_valueChanged(int arg1)
{
    modify_NegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_negative_blue_valueChanged(int arg1)
{
    modify_NegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_negative_opacity_valueChanged(int arg1)
{

}



//------------------------
void HybridizedOrbitalProperty::modify_ExtraPosLobeColor()
{
    int r=ui.spinBox_ExtraPos_red->value(),
        g=ui.spinBox_ExtraPos_green->value(),
        b=ui.spinBox_ExtraPos_blue->value();

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(r).arg(g).arg(b);
    ui.Button_Extra_positive_color->setStyleSheet(s);
}

void HybridizedOrbitalProperty::on_spinBox_ExtraPos_red_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_ExtraPos_green_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_ExtraPos_blue_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_ExtraPos_opacity_valueChanged(int arg1)
{

}



//------------------------
void HybridizedOrbitalProperty::modify_ExtraNegLobeColor()
{
    int r=ui.spinBox_ExtraNeg_red->value(),
        g=ui.spinBox_ExtraNeg_green->value(),
        b=ui.spinBox_ExtraNeg_blue->value();

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(r).arg(g).arg(b);
    ui.Button_Extra_negative_color->setStyleSheet(s);
}


void HybridizedOrbitalProperty::on_spinBox_ExtraNeg_red_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_ExtraNeg_green_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();
}

void HybridizedOrbitalProperty::on_spinBox_ExtraNeg_blue_valueChanged(int arg1)
{
    modify_ExtraNegLobeColor();;
}

void HybridizedOrbitalProperty::on_spinBox_ExtraNeg_opacity_valueChanged(int arg1)
{

}
//------------------------------------


void HybridizedOrbitalProperty::modify_LineColor()
{
    int r=ui.spinBox_Line_red->value(),
        g=ui.spinBox_Line_green->value(),
        b=ui.spinBox_Line_blue->value();

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(r).arg(g).arg(b);
    ui.pushButton_Line_color->setStyleSheet(s);
}

void HybridizedOrbitalProperty::on_spinBox_Line_red_valueChanged(int arg1)
{
    modify_LineColor();
}

void HybridizedOrbitalProperty::on_spinBox_Line_green_valueChanged(int arg1)
{
    modify_LineColor();
}

void HybridizedOrbitalProperty::on_spinBox_Line_blue_valueChanged(int arg1)
{
    modify_LineColor();
}

void HybridizedOrbitalProperty::on_doubleSpinBox_lineWidth_valueChanged(double arg1)
{

}

void HybridizedOrbitalProperty::on_pushButton_default_clicked()
{
    extraLobeColor_pos.Set(0.90,0.56,0.14);
    extraLobeColor_neg.Set(0.21,0.44,0.53);

    LobeColor_pos.Set(0.67,0.34,0.67);
    LobeColor_neg.Set(0.13,0.62,0.62);

    LineColor.Set(1.0,1.0,1.0);

    Lobe_opacity_pos=Lobe_opacity_neg=1.0;
    outLineWidth=1.0;


    //color
    LobeColor_pos=255.0*LobeColor_pos;
    LobeColor_neg=255.0*LobeColor_neg;

    ui.spinBox_positive_red->setValue(LobeColor_pos.x());
    ui.spinBox_positive_blue->setValue(LobeColor_pos.z());
    ui.spinBox_positive_green->setValue(LobeColor_pos.y());

    Lobe_opacity_pos=255.0*Lobe_opacity_pos;
    Lobe_opacity_neg=255.0*Lobe_opacity_neg;
    ui.spinBox_positive_opacity->setValue(Lobe_opacity_pos);
    ui.spinBox_negative_opacity->setValue(Lobe_opacity_neg);

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(LobeColor_pos.x()).arg(LobeColor_pos.y()).arg(LobeColor_pos.z());
    ui.pushButton_positive->setStyleSheet(s);

    ui.spinBox_negative_red->setValue(LobeColor_neg.x());
    ui.spinBox_negative_blue->setValue(LobeColor_neg.z());
    ui.spinBox_negative_green->setValue(LobeColor_neg.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(LobeColor_neg.x()).arg(LobeColor_neg.y()).arg(LobeColor_neg.z());
    ui.pushButton_negative->setStyleSheet(s);


    ExtraLobe_opacity_pos=255*ExtraLobe_opacity_pos;
    ExtraLobe_opacity_neg=255*ExtraLobe_opacity_neg;
    ui.spinBox_ExtraPos_opacity->setValue(ExtraLobe_opacity_pos);
    ui.spinBox_ExtraNeg_opacity->setValue(ExtraLobe_opacity_neg);


    extraLobeColor_pos=255*extraLobeColor_pos;
    extraLobeColor_neg=255*extraLobeColor_neg;

    ui.spinBox_ExtraPos_red->setValue(extraLobeColor_pos.x());
    ui.spinBox_ExtraPos_blue->setValue(extraLobeColor_pos.z());
    ui.spinBox_ExtraPos_green->setValue(extraLobeColor_pos.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(extraLobeColor_pos.x()).arg(extraLobeColor_pos.y()).arg(extraLobeColor_pos.z());
    ui.Button_Extra_positive_color->setStyleSheet(s);


    ui.spinBox_ExtraNeg_red->setValue(extraLobeColor_neg.x());
    ui.spinBox_ExtraNeg_blue->setValue(extraLobeColor_neg.z());
    ui.spinBox_ExtraNeg_green->setValue(extraLobeColor_neg.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(extraLobeColor_neg.x()).arg(extraLobeColor_neg.y()).arg(extraLobeColor_neg.z());
    ui.Button_Extra_negative_color->setStyleSheet(s);


    LineColor=255*LineColor;
    ui.spinBox_Line_red->setValue(LineColor.x());
    ui.spinBox_Line_blue->setValue(LineColor.z());
    ui.spinBox_Line_green->setValue(LineColor.y());
    s=tr("background-color: rgb(%1,%2,%3);").arg(LineColor.x()).arg(LineColor.y()).arg(LineColor.z());
    ui.pushButton_Line_color->setStyleSheet(s);


    ui.doubleSpinBox_lineWidth->setValue(outLineWidth);
}


void HybridizedOrbitalProperty::on_pushButton_positive_clicked()
{
    QColor color(LobeColor_pos.x(),
                      LobeColor_pos.y(),
                      LobeColor_pos.z(),
                      Lobe_opacity_pos);



    QColor c=QColorDialog::getColor(color, this);
    if (!c.isValid()) return;
    LobeColor_pos.Set(c.red(),c.green(),c.blue());
    Lobe_opacity_pos=c.alpha();

    ui.spinBox_positive_red->setValue(LobeColor_pos.x());
    ui.spinBox_positive_green->setValue(LobeColor_pos.y());
    ui.spinBox_positive_blue->setValue(LobeColor_pos.z());
    ui.spinBox_positive_opacity->setValue(Lobe_opacity_pos);
}

void HybridizedOrbitalProperty::on_pushButton_negative_clicked()
{
    QColor color(LobeColor_neg.x(),
                      LobeColor_neg.y(),
                      LobeColor_neg.z(),
                      Lobe_opacity_neg);

    QColor c=QColorDialog::getColor(color, this);
    if (!c.isValid()) return;
    LobeColor_neg.Set(c.red(),c.green(),c.blue());
    Lobe_opacity_neg=c.alpha();

    ui.spinBox_negative_red->setValue(LobeColor_neg.x());
    ui.spinBox_negative_green->setValue(LobeColor_neg.y());
    ui.spinBox_negative_blue->setValue(LobeColor_neg.z());
    ui.spinBox_negative_opacity->setValue(Lobe_opacity_neg);

}

void HybridizedOrbitalProperty::on_Button_Extra_positive_color_clicked()
{
    QColor color(extraLobeColor_pos.x(),
                 extraLobeColor_pos.y(),
                 extraLobeColor_pos.z(),
                 ExtraLobe_opacity_pos);

    QColor c=QColorDialog::getColor(color, this);
    if (!c.isValid()) return;
    extraLobeColor_pos.Set(c.red(),c.green(),c.blue());
    ExtraLobe_opacity_pos=c.alpha();

    ui.spinBox_ExtraPos_red->setValue(extraLobeColor_pos.x());
    ui.spinBox_ExtraPos_green->setValue(extraLobeColor_pos.y());
    ui.spinBox_ExtraPos_blue->setValue(extraLobeColor_pos.z());
    ui.spinBox_ExtraPos_opacity->setValue(ExtraLobe_opacity_pos);
}

void HybridizedOrbitalProperty::on_Button_Extra_negative_color_clicked()
{
    QColor color(extraLobeColor_neg.x(),
                 extraLobeColor_neg.y(),
                 extraLobeColor_neg.z(),
                 ExtraLobe_opacity_pos);

    QColor c=QColorDialog::getColor(color, this);
    if (!c.isValid()) return;
    extraLobeColor_neg.Set(c.red(),c.green(),c.blue());
    ExtraLobe_opacity_pos=c.alpha();

    ui.spinBox_ExtraNeg_red->setValue(extraLobeColor_neg.x());
    ui.spinBox_ExtraNeg_green->setValue(extraLobeColor_neg.y());
    ui.spinBox_ExtraNeg_blue->setValue(extraLobeColor_neg.z());
    ui.spinBox_ExtraNeg_opacity->setValue(ExtraLobe_opacity_pos);
}

void HybridizedOrbitalProperty::on_pushButton_Line_color_clicked()
{
    QColor color(LineColor.x(),
                 LineColor.y(),
                 LineColor.z(),
                 255);

    QColor c=QColorDialog::getColor(color, this);
    if (!c.isValid()) return;
    LineColor.Set(c.red(),c.green(),c.blue());


    ui.spinBox_Line_red->setValue(LineColor.x());
    ui.spinBox_Line_green->setValue(LineColor.y());
    ui.spinBox_Line_blue->setValue(LineColor.z());

    QString s=tr("background-color: rgb(%1,%2,%3);").arg(LineColor.x()).arg(LineColor.y()).arg(LineColor.z());
    ui.pushButton_Line_color->setStyleSheet(s);
}
