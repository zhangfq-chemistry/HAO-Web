#include "Radial2D.h"
#include "AO.h"
#include "mainwindow.h"


Radial2D::Radial2D(QWidget *parent) : QWidget(parent)
{
    this->setWindowTitle("三种径向函数");

    // Create chart view with the chart
    m_chart = new QChart();
    m_chartView = new QChartView(m_chart, this);

    // Create layout for grid and detached legend
    m_mainLayout = new QGridLayout();
    m_mainLayout->addWidget(m_chartView, 0, 1, 3, 1);
    setLayout(m_mainLayout);

    connectMarkers();

    // Set the title and show legend
    m_chart->setTitle("R, R2 and RDF");
    m_chart->legend()->setVisible(true);
    m_chart->legend()->setAlignment(Qt::AlignBottom);

    m_chartView->setRenderHint(QPainter::Antialiasing);

    xmin=-10,ymin=-1, xmax=200,ymax=20;

    isRvisible=isR2visible=isRDFvisible=true;
}


void Radial2D::renderCurve()
{
    AO * ao = mainWindow->getAO();
    if (ao==nullptr)      return;

    xmin=-10,ymin=-1, xmax=200,ymax=20;

    removeSeries();

    if (isRvisible)    addSeriesR(ao);
    if (isRDFvisible)  addSeriesRDF(ao);
    if (isR2visible)   addSeriesR2(ao);

    refreshAxis();
}


void Radial2D::addSeriesRDF(AO * ao)
{
    QLineSeries * series = new QLineSeries();
    m_series.append(series);

    QString name="RDF-" + ao->getName();
    series->setName(name);

    series->append(ao->RDFData_2d);
    m_chart->addSeries(series);

    if (m_series.count() == 1)
        m_chart->createDefaultAxes();
    refreshAxis();
}


void Radial2D::addSeriesR(AO * ao)
{
    QLineSeries * series = new QLineSeries();
    m_series.append(series);

    QString name="R-" + ao->getName();
    series->setName(name);

    series->append(ao->RData_2d);
    m_chart->addSeries(series);

    if (m_series.count() == 1)
        m_chart->createDefaultAxes();
    refreshAxis();
}

void Radial2D::addSeriesR2(AO * ao)
{
    QLineSeries * series = new QLineSeries();
    m_series.append(series);

    QString name="R2-" + ao->getName();
    series->setName(name);

    series->append(ao->R2Data_2d);
    m_chart->addSeries(series);

    if (m_series.count() == 1)
        m_chart->createDefaultAxes();
    refreshAxis();
}

void Radial2D::removeSeries()
{
    // Remove all series from chart
    while (m_series.count() > 0) {
        QLineSeries *series = m_series.last();
        m_chart->removeSeries(series);
        m_series.removeLast();
        delete series;
    }
}

void Radial2D::connectMarkers()
{

    // Connect all markers to handler
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        // Disconnect possible existing connection to avoid multiple connections
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Radial2D::handleMarkerClicked);
        QObject::connect(marker, &QLegendMarker::clicked, this, &Radial2D::handleMarkerClicked);
    }

}

void Radial2D::disconnectMarkers()
{
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Radial2D::handleMarkerClicked);
    }

}


void Radial2D::handleMarkerClicked()
{
    QLegendMarker* marker = qobject_cast<QLegendMarker*> (sender());
    Q_ASSERT(marker);

    switch (marker->type())
    {
    case QLegendMarker::LegendMarkerTypeXY:
    {

        // Toggle visibility of series
        marker->series()->setVisible(!marker->series()->isVisible());

        // Turn legend marker back to visible, since hiding series also hides the marker
        // and we don't want it to happen now.
        marker->setVisible(true);

        // Dim the marker, if series is not visible
        qreal alpha = 1.0;

        if (!marker->series()->isVisible())
            alpha = 0.5;

        QColor color;
        QBrush brush = marker->labelBrush();
        color = brush.color();
        color.setAlphaF(alpha);
        brush.setColor(color);
        marker->setLabelBrush(brush);

        brush = marker->brush();
        color = brush.color();
        color.setAlphaF(alpha);
        brush.setColor(color);
        marker->setBrush(brush);

        QPen pen = marker->pen();
        color = pen.color();
        color.setAlphaF(alpha);
        pen.setColor(color);
        marker->setPen(pen);
        break;
    }
    }
}

void Radial2D::refreshAxis()
{
    //m_chart->axisX()->setRange(xmin,xmax);
    //m_chart->axisY()->setRange(ymin,ymax);

    //m_chart->axisY()->setRange(-0.1,2.0);

}

void Radial2D::setXRange(int min, int max)
{
    xmin=min, xmax=max;
    refreshAxis();
}

void Radial2D::setYRange(int min, int max)
{
    ymin=min, ymax=max;
    refreshAxis();
}


void Radial2D::setR2visible(bool v)
{
    isR2visible=v;

}

void Radial2D::setRDFvisible(bool v)
{
    isRDFvisible=v;
}

void Radial2D::setRvisible(bool v)
{
    isRvisible=v;
}

