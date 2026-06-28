QT  += core gui widgets charts concurrent

requires(qtConfig(filedialog))
requires(qtConfig(treeview))


TARGET = HAO
TEMPLATE = app

INCLUDEPATH += .

CONFIG(win32, win32|macx){

    # Windows dependency paths are read from environment variables when possible.
    # Example:
    #   setx VTK_ROOT C:\VTK
    # VTK_ROOT is expected to contain:
    #   %VTK_ROOT%\include\vtk-9.6
    #   %VTK_ROOT%\lib
    #

    VTK_ROOT = $$(VTK_ROOT)
    isEmpty(VTK_ROOT) {
        VTK_ROOT = C:\VTK
    }

    VTK_INCLUDE_DIR = $${VTK_ROOT}\include\vtk-9.6
    VTK_LIB_DIR = $${VTK_ROOT}\lib
    VTK_LIB_VER = 9.6.dll.a
    VTK_LIB_PREFIX = $${VTK_LIB_VER}

    VTK_LIB_NAME =  \
    vtkChartsCore\
    vtkCommonColor\
    vtkCommonComputationalGeometry\
    vtkCommonCore\
    vtkCommonDataModel\
    vtkCommonExecutionModel\
    vtkCommonMath\
    vtkCommonMisc\
    vtkCommonSystem\
    vtkCommonTransforms\
    vtkDICOMParser\
    vtkDomainsChemistry\
    vtkDomainsChemistryOpenGL2\
    vtkexodusII\
    vtkexpat\
    vtkFiltersAMR\
    vtkFiltersCore\
    vtkFiltersExtraction\
    vtkFiltersFlowPaths\
    vtkFiltersGeneral\
    vtkFiltersGeneric\
    vtkFiltersGeometry\
    vtkFiltersHybrid\
    vtkFiltersHyperTree\
    vtkFiltersImaging\
    vtkFiltersModeling\
    vtkFiltersParallel\
    vtkFiltersParallelImaging\
    vtkFiltersPoints\
    vtkFiltersProgrammable\
    vtkFiltersSelection\
    vtkFiltersSMP\
    vtkFiltersSources\
    vtkFiltersStatistics\
    vtkFiltersTexture\
    vtkFiltersTopology\
    vtkFiltersVerdict\
    vtkfreetype\
    vtkGeovisCore\
    vtkgl2ps\
    vtkGUISupportQt\
    vtkGUISupportQtSQL\
    vtkhdf5_hl\
    vtkhdf5\
    vtkImagingColor\
    vtkImagingCore\
    vtkImagingFourier\
    vtkImagingGeneral\
    vtkImagingHybrid\
    vtkImagingMath\
    vtkImagingMorphological\
    vtkImagingSources\
    vtkImagingStatistics\
    vtkImagingStencil\
    vtkInfovisCore\
    vtkInfovisLayout\
    vtkInteractionImage\
    vtkInteractionStyle\
    vtkInteractionWidgets\
    vtkIOAMR\
    vtkIOAsynchronous\
    vtkIOCityGML\
    vtkIOCore\
    vtkIOEnSight\
    vtkIOExodus\
    vtkIOExport\
    vtkIOExportPDF\
    vtkIOGeometry\
    vtkIOImage\
    vtkIOImport\
    vtkIOInfovis\
    vtkIOLegacy\
    vtkIOLSDyna\
    vtkIOMINC\
    vtkIOMovie\
    vtkIONetCDF\
    vtkIOParallel\
    vtkIOParallelXML\
    vtkIOPLY\
    vtkIOSegY\
    vtkIOSQL\
    vtkIOTecplotTable\
    vtkIOVeraOut\
    vtkIOVideo\
    vtkIOXML\
    vtkIOXMLParser\
    vtkjpeg\
    vtkjsoncpp\
    vtklibharu\
    vtklibxml2\
    vtklz4\
    vtklzma\
    vtkmetaio\
    vtkNetCDF\
    vtkogg\
    vtkParallelCore\
    vtkpng\
#    vtkproj\
    vtkpugixml\
    vtkRenderingAnnotation\
    vtkRenderingContext2D\
    vtkRenderingContextOpenGL2\
    vtkRenderingCore\
    vtkRenderingFreeType\
    vtkRenderingGL2PSOpenGL2\
    vtkRenderingImage\
    vtkRenderingLabel\
    vtkRenderingLOD\
    vtkRenderingOpenGL2\
    vtkRenderingQt\
    vtkRenderingVolume\
    vtkRenderingVolumeOpenGL2\
    vtksqlite\
    vtksys\
    vtktheora\
    vtktiff\
    vtkverdict\
    vtkViewsContext2D\
    vtkViewsCore\
    vtkViewsInfovis\
    vtkViewsQt\
    vtkzlib

    for(lib,VTK_LIB_NAME){
        VTK_LIBS += $${VTK_LIB_DIR}\lib$${lib}-$${VTK_LIB_PREFIX}
    }
    INCLUDEPATH += $${VTK_INCLUDE_DIR}
    DEPENDPATH += $${VTK_INCLUDE_DIR}
    LIBS += -L$${VTK_LIB_DIR} $${VTK_LIBS}
}

else{ #LINUX
TEMPLATE = app

INCLUDEPATH += .
INCLUDEPATH    += /usr/local/include  /usr/local/include/vtk-9.6
DEPENDPATH     += /usr/local/include  /usr/local/include/vtk-9.6
LIBS += -L/usr/local/lib

MKLDIR = $$(MKLROOT)

LIBS +=  -fopenmp
CONFIG += c++17 fopenmp
#QMAKE_CXXFLAGS+= -std=c++11

    VTK_INCLUDE_DIR = /usr/local/include/vtk-9.6
    VTK_LIB_DIR = /usr/local/lib
    VTK_LIB_VER = 9.6
    VTK_LIB_PREFIX = $${VTK_LIB_VER}
    VTK_LIB_NAME =  vtkChartsCore\
                    vtkCommonColor\
                    vtkCommonComputationalGeometry\
                    vtkCommonCore\
                    vtkCommonDataModel\
                    vtkCommonExecutionModel\
                    vtkCommonMath\
                    vtkCommonMisc\
                    vtkCommonSystem\
                    vtkCommonTransforms\
                    vtkDICOMParser\
                    vtkDomainsChemistry\
                    #vtkDomainsChemistryOpenGL2\
                    vtkFiltersAMR\
                    vtkFiltersCore\
                    vtkFiltersExtraction\
                    vtkFiltersFlowPaths\
                    vtkFiltersGeneral\
                    vtkFiltersGeneric\
                    vtkFiltersGeometry\
                    vtkFiltersHybrid\
                    vtkFiltersHyperTree\
                    vtkFiltersImaging\
                    vtkFiltersModeling\
                    vtkFiltersParallel\
                    vtkFiltersParallelImaging\
                    vtkFiltersPoints\
                    vtkFiltersProgrammable\
                    vtkFiltersSMP\
                    vtkFiltersSelection\
                    vtkFiltersSources\
                    vtkFiltersStatistics\
                    vtkFiltersTexture\
                    vtkFiltersTopology\
                    vtkFiltersVerdict\
                    vtkGUISupportQt\
                    vtkGUISupportQtSQL\
                    vtkGeovisCore\
                    vtkIOAMR\
                    vtkIOCore\
                    vtkIOEnSight\
                    vtkIOExodus\
                    vtkIOExport\
                    #vtkIOExportOpenGL2\
                    vtkIOGeometry\
                    vtkIOImage\
                    vtkIOImport\
                    vtkIOInfovis\
                    vtkIOLSDyna\
                    vtkIOLegacy\
                    vtkIOMINC\
                    vtkIOMovie\
                    #vtkIONetCDF\
                    vtkIOPLY\
                    vtkIOParallel\
                    vtkIOParallelXML\
                    vtkIOSQL\
                    vtkIOTecplotTable\
                    vtkIOVideo\
                    vtkIOXML\
                    vtkIOXMLParser\
                    vtkImagingColor\
                    vtkImagingCore\
                    vtkImagingFourier\
                    vtkImagingGeneral\
                    vtkImagingHybrid\
                    vtkImagingMath\
                    vtkImagingMorphological\
                    vtkImagingSources\
                    vtkImagingStatistics\
                    vtkImagingStencil\
                    vtkInfovisCore\
                    vtkInfovisLayout\
                    vtkInteractionImage\
                    vtkInteractionStyle\
                    vtkInteractionWidgets\
                    #vtkNetCDF\
                    vtkParallelCore\
                    vtkRenderingAnnotation\
                    vtkRenderingContext2D\
                    vtkRenderingContextOpenGL2\
                    vtkRenderingCore\
                    vtkRenderingFreeType\
                    vtkRenderingGL2PSOpenGL2\
                    vtkRenderingImage\
                    vtkRenderingLOD\
                    vtkRenderingLabel\
                    vtkRenderingOpenGL2\
                    vtkRenderingQt\
                    vtkRenderingVolume\
                    vtkRenderingVolumeOpenGL2\
                    vtkViewsContext2D\
                    vtkViewsCore\
                    vtkViewsInfovis\
                    vtkViewsQt\
                    vtkexpat\
                    vtkfreetype\
                    vtkgl2ps\
                    vtkglad\
                    vtkhdf5\
                    vtkhdf5_hl\
                    vtkjpeg\
                    vtkjsoncpp\
                    vtklibharu\
                    vtklibxml2\
                    vtklz4\
                    vtkmetaio\
                   # vtknetcdfcpp\
                   # vtkoggtheora\
                   # vtkalglib\
                   # vtkexoIIc\
                   # vtkproj4\
                   # vtkLocalExample\
                    vtkpng\
                    vtksqlite\
                    vtksys\
                    vtktiff\
                    vtkverdict\
                    vtkzlib
    for(lib,VTK_LIB_NAME){
        VTK_LIBS += -l$${lib}-$${VTK_LIB_PREFIX}
       # VTK_LIBS += -l$${lib}-$${VTK_LIB_PREFIX}.1
    }
    INCLUDEPATH += $${VTK_INCLUDE_DIR}
    DEPENDPATH += $${VTK_INCLUDE_DIR}
    LIBS += -L$${VTK_LIB_DIR} $${VTK_LIBS}
}


HEADERS       = mainwindow.h \
    AO.h \
    Angular3D.h \
    Cloud2D.h \
    OBTree.h \
    Proj2D.h \
    Proj3D.h \
    Radial2D.h \
    Radial3D.h \
    SolveEquation.h \
    aboutDialog.h \
    axisProperty.h \
    colorMap.h \
    functionals.h \
    hybridizeObitialViewer.h \
    hybridizedOrbitalProperty.h \
    mixedFunctions.h \
    orbitalProperty.h \
    textEditor.h \
    View3D.h \
    vector3.h \
    ylmFunctions.h
    
SOURCES       = \
    main.cpp \
    AO.cpp \
    Angular3D.cpp \
    Cloud2D.cpp \
    OBTree.cpp \
    Proj2D.cpp \
    Proj3D.cpp \
    Radial2D.cpp \
    Radial3D.cpp \
    SolveEquation.cpp \
    aboutDialog.cpp \
    axisProperty.cpp \
    colorMap.cpp \
    functionals.cpp \
    hybridizeObitialViewer.cpp \
    hybridizedOrbitalProperty.cpp \
    mainwindow.cpp \
    mixedFunctions.cpp \
    orbitalProperty.cpp \
    textEditor.cpp \
    View3D.cpp \
    vector3.cpp \
    ylmFunctions.cpp




FORMS += \
    UI/AOProperty.ui \
    UI/AxisProperty.ui \
    UI/HBAOProperty.ui \
    UI/about.ui \
    UI/color_dialog.ui \
    UI/color_palette_widget.ui \
    UI/mainwindow.ui \

RESOURCES += \
    src.qrc

TRANSLATIONS += \
    translations/HAO_zh_CN.ts \
    translations/HAO_en_US.ts


