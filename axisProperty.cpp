#include "axisProperty.h"
#include "mainwindow.h"

AxisProperty::AxisProperty(QWidget *parent) : QDialog(parent)
{
    ui.setupUi(this);

    //ui.pictureWidget->sizePolicy().setHeightForWidth(true);
    //ui.pictureWidget->load(QString(":/resources/images/splash.jpg"));
    // ui->textBrowser->setHtml(LoadTextFromFile(":/resources/credits.htm"));
    // if (!IvRestoreWindowSize("AboutDialog/Size", this))
    //   IvGuessSubDialogSize(this);
}

void AxisProperty::initilize(MainWindow * m)
{
    if(m)
        mainWin=m;
    else
        return;

    typeOfView=mainWin->typeofActiveChild();


    view3d=nullptr;;
    radial3d=nullptr;;
    angularY3d=nullptr;;
    hoview3d=nullptr;


    switch (typeOfView)
    {
    case 0:
        view3d=mainWin->getView3D();
        x_length0=view3d->getXLength();
        y_length0=view3d->getYLength();
        z_length0=view3d->getZLength();

        x_color0=255*view3d->getXColor();
        y_color0=255*view3d->getYColor();
        z_color0=255*view3d->getZColor();
        view3d->setNeedCalculate(false);
        break;

    case 2:
        angularY3d=mainWin->getAngular3D();
        angularY3d->setNeedCalculate(false);
        x_length0=angularY3d->getXLength();
        y_length0=angularY3d->getYLength();
        z_length0=angularY3d->getZLength();

        x_color0=255*angularY3d->getXColor();
        y_color0=255*angularY3d->getYColor();
        z_color0=255*angularY3d->getZColor();
        break;

    //case 3:
    //    radial3d=mainWin->radial3d;
    //    break;

    case 4:
        hoview3d=mainWin->getHOView3D();
        x_length0=hoview3d->getXLength();
        y_length0=hoview3d->getYLength();
        z_length0=hoview3d->getZLength();

        x_color0=255*hoview3d->getXColor();
        y_color0=255*hoview3d->getYColor();
        z_color0=255*hoview3d->getZColor();
    }


    x_length=x_length0;
    y_length=y_length0;
    z_length=z_length0;

    x_color=x_color0;
    y_color=y_color0;
    z_color=z_color0;


    //fill data-------------------
    ui.spinBox_x_red->setValue(x_color.x());
    ui.spinBox_x_green->setValue(x_color.y());
    ui.spinBox_x_blue->setValue(x_color.z());

    QString s;
    s=tr("background-color: rgb(%1,%2,%3);").arg(x_color.x()).arg(x_color.y()).arg(x_color.z());
    ui.pushButton_x->setStyleSheet(s);

    //-----------------
    ui.spinBox_y_red->setValue(y_color.x());
    ui.spinBox_y_green->setValue(y_color.y());
    ui.spinBox_y_blue->setValue(y_color.z());

    s=tr("background-color: rgb(%1,%2,%3);").arg(y_color.x()).arg(y_color.y()).arg(y_color.z());
    ui.pushButton_y->setStyleSheet(s);

    //-----------------
    ui.spinBox_z_red->setValue(z_color.x());
    ui.spinBox_z_green->setValue(z_color.y());
    ui.spinBox_z_blue->setValue(z_color.z());

    s=tr("background-color: rgb(%1,%2,%3);").arg(z_color.x()).arg(z_color.y()).arg(z_color.z());
    ui.pushButton_z->setStyleSheet(s);


    ui.doubleSpinBox_x->setValue(x_length);
    ui.doubleSpinBox_y->setValue(y_length);
    ui.doubleSpinBox_z->setValue(z_length);
}



void AxisProperty::on_pushButton_x_clicked()
{

}

void AxisProperty::on_pushButton_y_clicked()
{

}

void AxisProperty::on_pushButton_z_clicked()
{

}

void AxisProperty::on_spinBox_x_red_valueChanged(int arg1)
{
    x_color.SetX(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_x_green_valueChanged(int arg1)
{
    x_color.SetY(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_x_blue_valueChanged(int arg1)
{
    x_color.SetZ(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_doubleSpinBox_x_valueChanged(double arg1)
{
    x_length=arg1;
    on_pushButton_apply_clicked();
}

void AxisProperty::on_doubleSpinBox_y_valueChanged(double arg1)
{
    y_length=arg1;
    on_pushButton_apply_clicked();
}

void AxisProperty::on_doubleSpinBox_z_valueChanged(double arg1)
{
    z_length=arg1;
    on_pushButton_apply_clicked();
}



void AxisProperty::on_spinBox_y_red_valueChanged(int arg1)
{
    y_color.SetX(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_y_green_valueChanged(int arg1)
{
    y_color.SetY(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_y_blue_valueChanged(int arg1)
{
    y_color.SetZ(arg1);
    on_pushButton_apply_clicked();
}


void AxisProperty::on_spinBox_z_red_valueChanged(int arg1)
{
    z_color.SetX(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_z_green_valueChanged(int arg1)
{
    z_color.SetY(arg1);
    on_pushButton_apply_clicked();
}

void AxisProperty::on_spinBox_z_blue_valueChanged(int arg1)
{
    z_color.SetZ(arg1);
    on_pushButton_apply_clicked();
}



void AxisProperty::on_pushButton_cancel_clicked()
{
    double a=255.0;
    switch (typeOfView)
    {
    case 0:
        view3d->setXColor(x_color0/a);
        view3d->setYColor(y_color0/a);
        view3d->setZColor(z_color0/a);
        view3d->setXLength(x_length0);
        view3d->setYLength(y_length0);
        view3d->setZLength(z_length0);

        view3d->setNeedCalculate(false);
        view3d->renderScene();
        break;

    case 2:
        angularY3d->setXColor(x_color0/a);
        angularY3d->setYColor(y_color0/a);
        angularY3d->setZColor(z_color0/a);
        angularY3d->setXLength(x_length0);
        angularY3d->setYLength(y_length0);
        angularY3d->setZLength(z_length0);
        angularY3d->renderScene();
        break;

    //case 3:
    //    radial3d=mainWin->radial3d;
    //    break;

    case 4:
        hoview3d->setXColor(x_color0/a);
        hoview3d->setYColor(y_color0/a);
        hoview3d->setZColor(z_color0/a);
        hoview3d->setXLength(x_length0);
        hoview3d->setYLength(y_length0);
        hoview3d->setZLength(z_length0);
        hoview3d->renderScene();
    }

     close();
}



void AxisProperty::on_pushButton_ok_clicked()
{
    on_pushButton_apply_clicked();
    close();
}


void AxisProperty::on_pushButton_apply_clicked()
{
    double a=255.0;
    switch (typeOfView)
    {
    case 0:
        view3d->setXColor(x_color/a);
        view3d->setYColor(y_color/a);
        view3d->setZColor(z_color/a);
        view3d->setXLength(x_length);
        view3d->setYLength(y_length);
        view3d->setZLength(z_length);

        view3d->setNeedCalculate(false);
        view3d->renderScene();
        break;

    case 2:
        angularY3d->setNeedCalculate(false);
        angularY3d->setXColor(x_color/a);
        angularY3d->setYColor(y_color/a);
        angularY3d->setZColor(z_color/a);
        angularY3d->setXLength(x_length);
        angularY3d->setYLength(y_length);
        angularY3d->setZLength(z_length);
        angularY3d->renderScene();
        break;

    //case 3:
    //    radial3d=mainWin->radial3d;
    //    break;

    case 4:
        hoview3d->setXColor(x_color/a);
        hoview3d->setYColor(y_color/a);
        hoview3d->setZColor(z_color/a);
        hoview3d->setXLength(x_length);
        hoview3d->setYLength(y_length);
        hoview3d->setZLength(z_length);
        hoview3d->renderScene();
    }
}
