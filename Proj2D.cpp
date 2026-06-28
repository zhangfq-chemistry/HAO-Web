#include "Proj2D.h"
#include "AO.h"
#include "mainwindow.h"


Proj2D::Proj2D(QWidget *parent) : QWidget(parent)
{
    this->setWindowTitle("波函数投影");

    // Create chart view with the chart
    m_chart = new QChart();
    m_chartView = new QChartView(m_chart, this);

    // Create layout for grid and detached legend
    m_mainLayout = new QGridLayout();
    m_mainLayout->addWidget(m_chartView, 0, 1, 3, 1);
    setLayout(m_mainLayout);

    connectMarkers();

    // Set the title and show legend
    m_chart->setTitle("Ylm");
    m_chart->legend()->setVisible(true);
    m_chart->legend()->setAlignment(Qt::AlignBottom);

    m_chartView->setRenderHint(QPainter::Antialiasing);
}

void Proj2D::renderCurve()
{
    removeSeries();
    addSeriesData();
}



void Proj2D::addSeriesData()
{
    AO * ao = mainWindow->getAO();

    if (ao==nullptr)
        return;

    QString name=ao->getName();

    name.remove(0,1);
    m_chart->setTitle(name);


    QLineSeries * series_pos = new QLineSeries();
    series_pos->append(ao->Ylm2d_pos);
    series_pos->setName("positive");
    series_pos->setPen(QPen(QBrush(Qt::red),3));
    m_chart->addSeries(series_pos);


    if(name!="S")
    {
        QLineSeries * series_neg = new QLineSeries();
        series_neg->append(ao->Ylm2d_neg);
        series_neg->setName("negtive");
        series_neg->setPen(QPen(QBrush(Qt::blue),3));
        m_chart->addSeries(series_neg);
    }

    m_chart->createDefaultAxes();
}

void Proj2D::removeSeries()
{
    // Remove all series from chart
    while (m_series.count() > 0) {
        QLineSeries * series = m_series.last();
        m_chart->removeSeries(series);
        m_series.removeLast();
        delete series;
    }
}

void Proj2D::connectMarkers()
{
    // Connect all markers to handler
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        // Disconnect possible existing connection to avoid multiple connections
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Proj2D::handleMarkerClicked);
        QObject::connect(marker, &QLegendMarker::clicked, this, &Proj2D::handleMarkerClicked);
    }

}

void Proj2D::disconnectMarkers()
{
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Proj2D::handleMarkerClicked);
    }

}


void Proj2D::handleMarkerClicked()
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
