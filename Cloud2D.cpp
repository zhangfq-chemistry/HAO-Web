#include "Cloud2D.h"
#include "AO.h"
#include "mainwindow.h"




Cloud2D::Cloud2D(QWidget *parent) : QWidget(parent)
{
    this->setWindowTitle("电子云");

    // Create chart view with the chart
    m_chart = new QChart();
    m_chartView = new QChartView(m_chart, this);

    // Create layout for grid and detached legend
    m_mainLayout = new QGridLayout();
    m_mainLayout->addWidget(m_chartView, 0, 1, 3, 1);
    setLayout(m_mainLayout);

    connectMarkers();

    // Set the title and show legend
    m_chart->setTitle("Cloud-2D");
    m_chart->legend()->setVisible(true);
    m_chart->legend()->setAlignment(Qt::AlignBottom);


    m_chartView->setRenderHint(QPainter::Antialiasing);
}


Cloud2D::~Cloud2D()
{
    removeSeries();

    m_chart = new QChart();

    if(m_chartView)
        m_chartView->deleteLater();


    if(m_mainLayout)
        m_mainLayout->deleteLater();

    if(m_chart)
        m_chart->deleteLater();

    delete m_chartView;
    delete m_chart;
    delete m_mainLayout;

}

MainWindow * Cloud2D::getMainWindow()
{
    return mainWindow;
}

void Cloud2D::setMainWindow(MainWindow * m)
{
    mainWindow=m;
}

void Cloud2D::renderPoints()
{ 
    removeSeries();
    addSeriesData();
}

void Cloud2D::addSeriesData()
{
     AO * ao = mainWindow->getAO();

     if (ao==nullptr)
         return;

    if(ao->cloudPoints2d_pos.size())
    {
        QScatterSeries * series_pos = new QScatterSeries();
        series_pos->append(ao->cloudPoints2d_pos);
        series_pos->setName("positive");
        series_pos->setPen(QPen(QBrush(Qt::red),1));
        series_pos->setMarkerSize(2);
        m_chart->addSeries(series_pos);
    }


    if(ao->cloudPoints2d_neg.size())    {
        QScatterSeries * series_neg = new QScatterSeries();
        series_neg->append(ao->cloudPoints2d_neg);
        series_neg->setName("positive");
        series_neg->setPen(QPen(QBrush(Qt::blue),1));
        series_neg->setMarkerSize(2);
        m_chart->addSeries(series_neg);
    }

    m_chart->createDefaultAxes();
}


void Cloud2D::removeSeries()
{
    while (m_series.count() > 0) {
        QScatterSeries * series = m_series.last();
        m_chart->removeSeries(series);
        m_series.removeLast();
        delete series;
    }
}

void Cloud2D::connectMarkers()
{
    // Connect all markers to handler
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        // Disconnect possible existing connection to avoid multiple connections
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Cloud2D::handleMarkerClicked);
        QObject::connect(marker, &QLegendMarker::clicked, this, &Cloud2D::handleMarkerClicked);
    }

}

void Cloud2D::disconnectMarkers()
{
    const auto markers = m_chart->legend()->markers();
    for (QLegendMarker *marker : markers) {
        QObject::disconnect(marker, &QLegendMarker::clicked,
                            this, &Cloud2D::handleMarkerClicked);
    }

}


void Cloud2D::handleMarkerClicked()
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
