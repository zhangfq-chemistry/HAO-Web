#ifndef ABOUTDIALOG_H
#define ABOUTDIALOG_H


#include <QDialog>
#include "ui_about.h"

class AboutDialog : public QDialog
{
    Q_OBJECT
public:
    Ui::AboutDialog  ui;
    explicit AboutDialog(QWidget *parent = nullptr);
   ~AboutDialog();
};



#endif // ABOUTDIALOG_H
