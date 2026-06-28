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


#ifndef CLOUD2D_H
#define CLOUD2D_H

#include <QObject>
#include <QWidget>
#include <QtCharts>

#include <QtCharts/QChartGlobal>
#include <QtCharts/QChart>
#include <QtCharts/QChartView>
#include <QtWidgets/QWidget>
#include <QtWidgets/QGraphicsWidget>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QGraphicsGridLayout>
#include <QtWidgets/QDoubleSpinBox>
#include <QtWidgets/QGroupBox>
#include <QtCharts/QLineSeries>


#include <QtWidgets/QPushButton>
#include <QtWidgets/QLabel>
#include <QtCore/QDebug>
#include <QtCharts/QLegend>
#include <QtWidgets/QFormLayout>
#include <QtCharts/QLegendMarker>
#include <QtCharts/QLineSeries>
#include <QtCharts/QXYLegendMarker>
#include <QtCore/QtMath>
#include <QtCharts/QLineSeries>
#include <QtCharts/QValueAxis>

class MainWindow;
class AO;



class Cloud2D: public QWidget
{
     Q_OBJECT
public: 
    explicit Cloud2D(QWidget *parent = nullptr);
    ~Cloud2D() ;


    MainWindow * getMainWindow();
    void setMainWindow(MainWindow * m);

public slots:
    void renderPoints();
    void addSeriesData();

    void removeSeries();
    void connectMarkers();
    void disconnectMarkers();

    void handleMarkerClicked();


private:
    QList<QPointF> data_pos, data_neg;
    MainWindow * mainWindow;
    QChart * m_chart;

    QList <QScatterSeries *> m_series;

    QChartView * m_chartView;
    QGridLayout *m_mainLayout;
    QGridLayout *m_fontLayout;

};

#endif // CLOUD2D_H
