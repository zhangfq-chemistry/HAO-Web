# HydrogenAtomOrbitalViewer: Desktop and Web-Based Interactive Visualization of Hydrogen Atomic Orbitals for First-Year Undergraduate Chemistry

Author names and affiliations to be inserted

Suggested running title: Interactive Hydrogen Atomic Orbital Visualization

## Abstract

Atomic orbitals are central to general chemistry, inorganic chemistry, structural chemistry, and physical chemistry, yet many students struggle to connect quantum numbers, wave functions, nodal structure, phase, and probability density with the three-dimensional pictures shown in textbooks. This manuscript describes HydrogenAtomOrbitalViewer (HAO), an instructional visualization environment developed to support first-year undergraduate learning of hydrogen-like atomic orbitals. The project contains two complementary implementations: a Qt/VTK desktop client for high-quality classroom projection and image export, and a pure front-end Web version based on Three.js for installation-free access through a browser. Both versions emphasize multiple coordinated representations of the same orbital, including three-dimensional isosurfaces, electron-cloud point displays, orbital projections, angular-function views, radial-function and radial-distribution views, nodal surfaces, slicing planes, and annotation tools. The Web version further adds classroom interaction modules such as prediction-validation, orbital matching, orbital comparison, node-discovery prompts, drawing/sketch support, and stepwise explanatory demonstrations. HAO has been used for two academic years with first-year undergraduates at Shanxi Normal University. Instructor observations and informal student feedback indicate that students found the visual, manipulable representations helpful for distinguishing boundary surfaces from probability distributions, relating radial and angular contributions, and identifying nodal features. The manuscript presents the software design, mathematical basis, classroom implementation strategy, suggested inquiry activities, and limitations. HAO is positioned not as a replacement for quantum chemistry packages, but as a focused teaching tool that turns atomic orbital visualization into an interactive virtual laboratory for introductory chemistry.

## Keywords

First-Year Undergraduate; Atomic Orbitals; Quantum Chemistry; Computer-Based Learning; Visualization; Inquiry-Based Learning; Web-Based Learning; Three-Dimensional Representation

## Synopsis

HydrogenAtomOrbitalViewer combines a Qt/VTK desktop client and a browser-based Web version to help students explore hydrogen atomic orbitals through coordinated isosurfaces, electron clouds, projections, radial plots, angular views, nodal surfaces, and classroom interaction activities.

## 1. Introduction

Atomic orbitals are among the first quantum-mechanical objects encountered by chemistry students. In first-year courses, students are introduced to the principal quantum number, angular momentum quantum number, and magnetic quantum number, and they are asked to connect these numbers to orbital size, shape, orientation, and nodal structure. In later courses, the same ideas reappear in discussions of the Schrödinger equation, bonding models, molecular orbital theory, spectroscopy, and structure-property relationships. Although the concept is foundational, the learning task is demanding: students must interpret a mathematical function of three spatial variables, distinguish the wave function from probability density, recognize phase information, and mentally rotate three-dimensional forms that are usually printed as static two-dimensional textbook illustrations.[9,11,14,15,25]

The chemical education literature has long recognized the need for better orbital representations. Early work introduced physical models, contour surfaces, stereo plots, and computer-generated drawings.[1-5] Later contributions used software such as Gnuplot, Winplot, Jmol, Mathematica, and custom graphical interfaces to produce interactive orbital plots.[6-9,14] More recent work has emphasized Web-based and inquiry-based learning environments, point-cloud or density-based orbital depictions, radial distribution tools, virtual reality, augmented reality, and mobile visualization.[9,12,13,15-19] These efforts share a common pedagogical goal: students should not only see an orbital picture, but should learn how the picture follows from quantum numbers, radial functions, angular functions, nodes, and probability density.

Several recent reports are especially relevant to the present work. Hanson described a graphical tool for visualizing hydrogen atomic orbitals and emphasized that rigorous three-dimensional representations and nodal surfaces can support undergraduate physical chemistry instruction.[14] Li and co-workers reported Online Orbital Explorer and the BingOrbital game, showing how orbital visualization can be integrated with inquiry-based activities and retrieval practice.[12,13] Manae and Hazra highlighted a common misconception: students may attribute orbital shape mainly to the angular part of the wave function and neglect the role of the radial part.[11] Tully and co-workers used Web-based pointillist displays to emphasize the probabilistic nature and diffuse boundaries of hydrogenic orbitals.[9] Rachek and Wilson focused on radial distribution functions and showed how dynamic plotting of radial quantities can help students interpret electron probability as a function of distance from the nucleus.[15]

HydrogenAtomOrbitalViewer (HAO) was developed in response to these instructional needs. The guiding idea is that students benefit when several representations of the same orbital are placed in one coordinated workspace: the full atomic orbital, the angular function, the radial function or radial distribution function, and the orbital projection. Rather than treating these images as separate textbook figures, HAO makes them manipulable views of a single mathematical object. The desktop client provides a Qt/VTK environment that resembles a classroom visualization instrument, while the Web version provides a static, browser-accessible implementation that can be opened on computers, tablets, and phones without installing Qt, VTK, or any local software.

This manuscript reports the design, implementation, and classroom use of HAO. It describes how the desktop and Web versions visualize hydrogen-like atomic orbitals, how the Web version extends the original program with classroom interaction tools, and how the system has been used for two years with first-year undergraduate students at Shanxi Normal University. The contribution is primarily pedagogical and technical: HAO does not introduce new quantum-mechanical theory, but it packages established orbital mathematics into an interactive environment designed for undergraduate instruction.

## 2. Pedagogical Design Goals

The project was developed around five design goals.

First, the tool should reduce the operational barrier for students. Many high-quality quantum chemistry and molecular visualization packages can display orbitals, but they often require input files, calculation outputs, specialized workflows, or more advanced chemical knowledge. HAO instead lets students select an orbital by quantum numbers or by a familiar orbital label and immediately view the result.

Second, the tool should make multiple representations visible at the same time. A single boundary surface can be visually attractive but pedagogically incomplete.[9,14] The same orbital should be explored as a signed wave function, a probability-related electron cloud, a radial plot, an angular plot, and a projection. This design follows the broader principle that students learn spatial and abstract chemical concepts more effectively when they can coordinate complementary representations.[9,11,15,16,25]

Third, the tool should explicitly display nodes and phase. Students often memorize node-counting rules but have difficulty locating nodal surfaces in three-dimensional space.[12-14] HAO therefore provides radial, polar, and azimuthal node displays, slicing options, positive and negative phase colors, and projection views that help students use visual evidence rather than memorized labels alone.

Fourth, the tool should support classroom activity, not only instructor demonstration. The Web version includes prediction-validation, matching, comparison, drawing, annotation, and stepwise explanation modules. These features are intended to move the software from a display device toward a guided inquiry environment.[12,13]

Fifth, the tool should be practical in real teaching settings. The desktop client can be used offline and can export high-quality figures for slides, handouts, reports, and manuscripts. The Web version can be deployed as a static site, allowing students to open a link during class or after class without installation.

### Audience and Learning Objectives

The primary audience is first-year undergraduate students in general chemistry or introductory structural chemistry. The same tool can also be used in physical chemistry when instructors introduce hydrogen-like wave functions more formally. Before using the activity, students should have encountered basic atomic structure, quantum numbers, and the idea that orbitals are mathematical descriptions related to electron probability.

After completing a HAO-supported activity, students should be able to:

- predict the qualitative shape and orientation of an orbital from `n`, `l`, `m`, and the orbital label;
- distinguish wave-function phase from probability density;
- identify radial and angular nodes in a rendered orbital;
- explain why orbitals with the same angular type can differ when `n` changes;
- compare isosurface, electron-cloud, radial, angular, and projection views as different representations of the same orbital;
- justify an orbital identification using visual evidence rather than memorized pictures alone.

## 3. Mathematical and Computational Basis

HAO visualizes hydrogen-like atomic orbitals using the standard separation of the wave function into radial and angular parts, an emphasis consistent with prior orbital-visualization work that explicitly connects radial and angular contributions:[11,14,15]

```text
psi(n,l,m; r, theta, phi) = R(n,l; r) Y(l,m; theta, phi)
```

Here, `n` is the principal quantum number, `l` is the angular momentum quantum number, and `m` is the magnetic quantum number. The allowed values are

```text
n = 1, 2, 3, ...
l = 0, 1, ..., n - 1
m = -l, ..., 0, ..., l
```

The program uses real-orbital combinations that correspond to the familiar chemistry labels such as `Px`, `Py`, `Pz`, `Dxy`, `Dxz`, `Dyz`, `Dx2-y2`, and `Dz2`. This choice is intentional because the target users are first-year undergraduates and instructors teaching the conventional chemical interpretation of orbital orientation and phase.[14] Positive and negative signs of the wave function are mapped to contrasting colors. The software therefore supports phase reasoning without requiring students to begin with complex-valued spherical harmonics; more advanced complex-valued orbital phase visualization has been discussed separately in the literature.[24]

Different views encode different aspects of the same function.

The atomic orbital view displays the spatial form of the orbital. In the desktop version, VTK renders surfaces, meshes, electron clouds, axes, boxes, nodal surfaces, and slicing planes. In the Web version, Three.js and Marching Cubes are used to generate positive and negative isosurfaces in the browser.

The electron-cloud mode represents probability density through a point-based display. This view is useful for explaining why an orbital should not be interpreted as a hard boundary. The point distribution helps emphasize that the electron is described probabilistically and that density generally decreases rather than ending abruptly at the isosurface.[9]

The radial-function view shows radial information such as `R(r)`, `R(r)^2`, or the radial distribution function. In instruction, `R(r)` is useful for discussing sign changes and radial nodes, whereas the radial distribution function is useful for explaining the probability of finding the electron at different distances from the nucleus.[11,15]

The angular-function view isolates directional dependence. This view helps students see why `p`, `d`, and higher orbitals have characteristic orientations, while comparison with the full orbital view prevents the misconception that angular functions alone determine the complete orbital shape.[11]

The projection view converts the three-dimensional wave-function information into a two-dimensional surface and contour-like representation. It is especially useful when students are learning to connect three-dimensional lobes, signs, contour lines, and nodal planes.

The node displays are based on the usual hydrogenic relationships:

```text
number of angular nodes = l
number of radial nodes = n - l - 1
total number of nodes = n - 1
```

These formulas are simple to state but difficult for beginners to visualize. HAO uses them as a conceptual bridge from symbolic quantum numbers to observable graphical structures.

## 4. Desktop Client

The original desktop client is a Qt application with VTK rendering. It was designed to imitate a compact virtual laboratory for orbital visualization. The interface contains a left-side control panel and a multi-window visualization area. The main hydrogen atomic orbital workflow includes four coordinated windows: orbital projection, atomic orbital, radial distribution, and angular function. The user can choose the quantum numbers and orbital label, select real-orbital type, control positive and negative phase display, switch mesh and smooth surface modes, enable electron-cloud display, show axes, display node surfaces, select slicing planes, and adjust box radius, grid density, isovalue, and opacity.

The desktop client is useful for classroom projection because it can present several views at once and can export figures for teaching materials. Instructors can use it to generate consistent images of a sequence of orbitals, such as `2Pz`, `3Pz`, and `4Pz`, or to compare `3Dxy` and `3Dx2-y2`. Students can use exported images in reports to support explanations of phase, radial nodes, and angular nodes.

The desktop implementation uses Qt for menus, panels, dialogs, tabbed controls, translation support, and user interaction. VTK is used for three-dimensional rendering, including isosurfaces, mesh overlays, axes, boxes, slices, and point-cloud displays. This division of labor is pedagogically practical: Qt provides a familiar desktop interface, whereas VTK provides stable scientific visualization capabilities.

## 5. Web Version

The Web version was created to make the project more accessible beyond the local Windows desktop environment. It is a pure front-end static application built with Vite, Three.js, and browser-side JavaScript. It can be hosted through GitHub Pages or any static Web server. Users do not need to install Qt, VTK, Node.js, Python, or other dependencies when accessing the deployed version. They only need a modern browser with WebGL support.

The Web version preserves the core four-window layout of the desktop client: orbital projection, atomic orbital, radial distribution, and angular function. It also preserves many desktop-like controls, including quantum-number selection, orbital labels, positive and negative phase colors, mesh and smooth display options, electron-cloud display, axes, slicing planes, box radius, grid density, isovalue, opacity, and image export. The Web implementation uses Three.js rendering and Marching Cubes isosurface extraction to approximate the desktop VTK workflow in the browser.

In addition to reproducing the desktop visualization experience, the Web version adds classroom interaction modules:

- Prediction-validation mode asks students to predict orbital shape, phase, and nodal structure before displaying the calculated result.
- Prediction scoring gives structured feedback on node count, phase assignment, orientation, and projection interpretation.
- Error diagnosis prompts students to distinguish common mistakes, such as confusing phase with probability density or overlooking radial nodes.
- Node discovery guides students to reveal and interpret radial and angular nodes.
- Orbital comparison lets students place two orbitals side by side, compare node counts and angular character, and load either orbital into the main view.
- Orbital matching presents a retrieval-practice challenge in which students identify an orbital from visual evidence.
- Principle demonstration mode provides a stepwise explanation of how the current orbital view is generated from the wave function, radial part, angular part, isosurface, projection, and radial distribution.
- Annotation mode allows instructors to add draggable labels such as positive phase, negative phase, node, projection plane, and radial node directly on the visualization workspace.
- A sketch panel lets students hand-draw predictions and compare them with the generated results.

These additions were motivated by the inquiry-based and game-supported approaches described in recent JCE literature, but they are adapted to the present tool's desktop-like four-view workspace.[12,13]

The current Web deployment is available at:

```text
https://zhangfq-chemistry.github.io/HAO-Web/
```

The source and deployment materials are organized for static-site publication. Because the application performs orbital calculations and rendering in the browser, no server-side database or backend calculation service is required for ordinary use.

## 6. Classroom Implementation

HAO has been used for two academic years with first-year undergraduate students at Shanxi Normal University. The implementation has focused on introductory atomic structure content in which students are learning quantum numbers, orbital shapes, phase, nodal surfaces, and probability density. The desktop client has been used for instructor demonstration and high-quality visual projection, while the Web version has been used to support student access outside the desktop environment.

The classroom use followed a prediction-observation-explanation pattern. Before displaying an orbital, students were asked to predict its general shape, phase pattern, and number of nodes from the quantum numbers or orbital name. The instructor then generated the orbital in HAO and asked students to compare their prediction with the visual result. Follow-up prompts asked students to identify which features came from the radial part, which came from the angular part, and which image type best supported each conclusion.

The tool was also used for image-based retrieval practice. Students were shown orbital images with labels removed and were asked to identify the orbital using evidence from lobe number, nodal planes, phase pattern, and radial structure. This practice aligns with the idea that orbital recognition should not be mere memorization of iconic shapes, but evidence-based interpretation of graphical representations.[12,13,25]

Student responses during the two-year implementation were encouraging. Informal student feedback indicated that the software made abstract orbital concepts more concrete, especially when students could rotate the models, reveal slices, compare electron cloud and isosurface modes, and see radial and angular views together. Instructors observed that students more readily discussed nodes and phase when they could point to visible features in the software. Because these observations were not collected through a controlled pre/post study, they should be interpreted as preliminary classroom evidence rather than a formal measurement of learning gains.

For a full educational research submission, future implementation should add systematic assessment. Possible measures include a pre/post concept inventory on nodes and phase, rubric-scored explanations of orbital images, comparison of student drawings before and after software use, student confidence surveys, and delayed retrieval-practice questions.

## 7. Suggested Inquiry Activities

Table 1 summarizes classroom activities that can be conducted with the desktop or Web version. These activities are designed for first-year undergraduates and can be adapted for physical chemistry or structural chemistry.

### Table 1. Example HAO classroom activities

| Activity | Learning goal | Software workflow | Student product |
| --- | --- | --- | --- |
| Predict the orbital | Connect `n`, `l`, and `m` to size, orientation, phase, and nodes | Select a target orbital but delay display; students sketch first; then show orbital, angular, radial, and projection views | Prediction sketch plus corrected explanation |
| Compare `2Pz` and `3Pz` | Distinguish angular similarity from radial difference | Display both orbitals, radial plots, and node surfaces | Short explanation of the extra radial node in `3Pz` |
| Boundary surface or probability distribution | Distinguish isosurface from electron cloud | Toggle smooth surface, mesh, and electron-cloud modes | Written comparison of what each representation means |
| Find the nodes | Relate node-counting rules to spatial features | Enable radial, polar, or azimuthal node displays and slicing planes | Annotated screenshot identifying nodes |
| Projection interpretation | Connect 3D lobes with 2D contours and signs | Use orbital projection with positive and negative phase colors | Evidence-based explanation of contour pattern |
| Orbital matching | Build retrieval practice and representational fluency | Use Web matching module with labels hidden | Team answer with justification |
| Principle demonstration | Connect formula to final visualization | Use Web stepwise explanation mode | Concept map from wave function to rendered view |

These activities can be structured around an inquiry cycle: orientation, prediction or question generation, investigation with the software, conclusion, communication, and application to a new orbital.[12,13] The teacher's role is to provide prompts that keep students focused on evidence: "Where is the node?", "Which view tells you that?", "Is the color showing phase or probability?", and "What changed when `n` increased but `l` stayed the same?"

## 8. Comparison with Existing Tools

HAO occupies a specific space among orbital visualization resources. It is narrower than general computational chemistry programs but more focused for introductory teaching.[20-23] It is less immersive than VR or AR tools but easier to deploy in ordinary classrooms.[17-19] It is more interactive than static textbook figures and more classroom-oriented than scripts that require students to edit code.[6-8]

### Table 2. Position of HAO relative to selected prior work

| Prior direction | Representative contribution | Relationship to HAO |
| --- | --- | --- |
| Early orbital models and contour surfaces | Lambert; Ogryzlo and Porter; David | HAO continues the goal of making orbital form visible, but does so through interactive desktop and Web rendering |
| Scripted or desktop plotting tools | Ramachandran and Kong; Moore; Chung | HAO reduces the need for plotting scripts by giving students direct controls for quantum numbers and display modes |
| Point-cloud and Web orbital visualization | Tully et al. | HAO also includes electron-cloud thinking, while combining it with coordinated radial, angular, projection, and isosurface views |
| Radial-angular integration | Manae and Hazra | HAO directly places radial and angular views beside the full orbital, helping students avoid attributing shape only to angular functions |
| Inquiry and orbital games | Li et al. | The Web version adds prediction-validation, matching, comparison, and classroom modules inspired by inquiry and retrieval practice |
| Hydrogen orbital GUI | Hanson | HAO shares the goal of accessible hydrogen orbital visualization but adds a Qt/VTK desktop client, a browser version, and classroom interaction tools |
| Radial distribution visualization | Rachek and Wilson | HAO includes radial distribution in the same workflow as 3D orbital, angular, and projection views |
| General molecular visualization packages | VMD, Avogadro, Gabedit, Multiwfn | HAO is more limited scientifically but simpler for first-year orbital instruction |
| VR, AR, and mobile spatial tools | Dai et al.; Levy et al.; Zambri and De Backere | HAO is not immersive, but it is easier to deploy through classroom computers and Web links |

The main contribution of HAO is therefore not computational novelty. Its value lies in integration: the software combines multiple orbital representations, desktop-quality rendering, Web accessibility, and activity-oriented interaction in a single teaching workflow.

## 9. Figure Plan and Suggested Captions

The following figure plan is designed for a JCE-style manuscript. The image files can be selected from the existing project screenshots and the article figure folder.

Figure 1. Overview of the HAO learning environment. The desktop client and Web version both organize orbital learning around coordinated views of the same hydrogen-like orbital: orbital projection, atomic orbital, radial distribution, and angular function. The figure should show the four-window layout and the left-side control panel.

Figure 2. Multiple representations of a `2Px` or `2Pz` orbital. Positive and negative phase isosurfaces, electron-cloud display, orbital projection, angular function, and radial distribution function are shown together to emphasize that no single representation fully describes the orbital.

Figure 3. Radial and angular contributions to orbital shape. A comparison of `2Pz` and `3Pz` shows the same general angular character but different radial structure, making the radial node in the higher orbital visible.

Figure 4. Node visualization and slicing. A higher orbital is displayed with node surfaces and slice planes to show how radial, polar, and azimuthal nodes can be identified from the three-dimensional model.

Figure 5. Web-based classroom interaction. Screenshots of prediction-validation, orbital comparison, orbital matching, sketch panel, annotation mode, and principle demonstration show how the Web version supports active learning.

Figure 6. Classroom implementation workflow. A schematic shows how the instructor uses HAO for prediction, visualization, evidence collection, explanation, and retrieval practice in first-year undergraduate instruction.

## 10. Hazards

No chemical, biological, radiological, or physical laboratory hazards are associated with the use of HAO. The activity is computer-based. Normal precautions for screen use and classroom computer operation apply.

## 11. Software Availability and Reproducibility

The Web version is distributed as a static front-end application and can be accessed through a browser at the deployed GitHub Pages URL. The desktop version can be built from the Qt/VTK project source when the required dependencies are installed. For reproducible figures, instructors should record the orbital label, quantum numbers, isovalue, grid density, box radius, opacity, display mode, phase colors, slice settings, and camera orientation. The Web version includes image export to help document the exact visual state used in teaching materials.

Suggested availability statement:

The Web version of HAO is available at `https://zhangfq-chemistry.github.io/HAO-Web/`. Source code, build instructions, and supporting documentation are available from the project repository. The desktop client requires Qt and VTK and is intended for Windows classroom use and local image generation.

## 12. Limitations and Future Work

Several limitations should be acknowledged. First, HAO is a teaching visualization tool, not a general quantum chemistry package. It does not replace electronic-structure software, wave-function analysis programs, or molecular orbital post-processing tools. Second, the current implementation focuses on real hydrogen-like orbitals and pedagogical phase coloring; it does not provide complete complex-valued orbital phase visualization. Third, electron-cloud displays are intended for qualitative instruction. If they are used for quantitative comparison, the sampling method, point count, random seed, and display parameters should be fixed and reported. Fourth, the Web version depends on browser and graphics hardware performance. High grid densities and high-resolution surfaces may be slower on older computers, phones, or tablets. Fifth, although two years of classroom use have provided encouraging informal feedback, controlled learning assessment has not yet been completed.

Future development should focus on four directions. The first is educational assessment, including pre/post testing, rubric-based analysis of student drawings, and delayed retention questions. The second is performance optimization, such as Web Workers or GPU-based calculation for smoother browser rendering. The third is activity authoring, allowing instructors to create and save custom orbital tasks, prompts, rubrics, and answer keys. The fourth is accessibility and localization, including clearer mobile layouts, bilingual support, keyboard navigation, and alternative text descriptions for exported figures.

## 13. Conclusions

HydrogenAtomOrbitalViewer provides a focused environment for teaching hydrogen-like atomic orbitals through coordinated, interactive visualizations. The desktop client uses Qt and VTK to support classroom projection, multi-window visualization, and figure export. The Web version uses Three.js and browser-side calculation to make the tool accessible through a static link and adds classroom interaction modules for prediction, matching, comparison, annotation, drawing, and stepwise explanation. Across two academic years of use with first-year undergraduates at Shanxi Normal University, the tool has supported instruction on quantum numbers, phase, probability density, radial and angular nodes, and orbital projections. The most important educational feature is the integration of multiple representations: students can compare what a boundary surface, electron cloud, radial plot, angular function, projection, and slice each reveal about the same orbital. In this way, HAO helps transform orbital learning from passive viewing of static images into an evidence-based, interactive process.

## Associated Content

Supporting Information should include: installation and access instructions, a student worksheet for the prediction-validation activity, an orbital matching worksheet, a node-discovery worksheet, a short instructor guide, selected screenshots, and a table of recommended display settings for common orbitals.

## Author Information

Corresponding Author: to be inserted

Author Contributions: to be inserted

ORCID: to be inserted

## Notes

The authors declare no competing financial interest. Institutional review or exemption information should be added if formal student data are included in a revised version.

## Acknowledgments

The authors thank the first-year undergraduate students at Shanxi Normal University who used HAO in class and provided feedback during two years of classroom implementation. Additional funding and institutional support information should be inserted here.

## References

1. Lambert, F. L. Atomic and Molecular Orbital Models. *J. Chem. Educ.* **1957**, *34*, 217. https://doi.org/10.1021/ed034p217.

2. Ogryzlo, E. A.; Porter, G. B. Contour Surfaces for Atomic and Molecular Orbitals. *J. Chem. Educ.* **1963**, *40*, 256. https://doi.org/10.1021/ed040p256.

3. Linnett, J. W.; Bordass, W. T. A New Way of Presenting Atomic Orbitals. *J. Chem. Educ.* **1970**, *47*, 672. https://doi.org/10.1021/ed047p672.

4. David, C. W. On Orbital Drawings. *J. Chem. Educ.* **1981**, *58*, 377. https://doi.org/10.1021/ed058p377.

5. Ramachandran, B.; Kong, P. C. Three-Dimensional Graphical Visualization of One-Electron Atomic Orbitals. *J. Chem. Educ.* **1995**, *72*, 406. https://doi.org/10.1021/ed072p406.

6. Moore, B. G. Orbital Plots Using Gnuplot. *J. Chem. Educ.* **2000**, *77*, 785. https://doi.org/10.1021/ed077p785.

7. Ellison, M. Orbital Graphing. *J. Chem. Educ.* **2004**, *81*, 158. https://doi.org/10.1021/ed081p158.1.

8. Chung, W. C. Three-Dimensional Atomic Orbital Plots in the Classroom Using Winplot. *J. Chem. Educ.* **2013**, *90*, 1090-1092. https://doi.org/10.1021/ed400112v.

9. Tully, S. P.; Stitt, T. M.; Caldwell, R. D.; Hardock, B. J.; Hanson, R. M.; Maslak, P. Interactive Web-Based Pointillist Visualization of Hydrogenic Orbitals Using Jmol. *J. Chem. Educ.* **2013**, *90*, 1290-1293. https://doi.org/10.1021/ed300393s.

10. Griffith, K. M.; De Cataldo, R.; Fogarty, K. H. Do-It-Yourself: 3D Models of Hydrogenic Orbitals through 3D Printing. *J. Chem. Educ.* **2016**, *93*, 1586-1590. https://doi.org/10.1021/acs.jchemed.6b00293.

11. Manae, M. A.; Hazra, A. Graphical Representation of Hydrogenic Orbitals: Incorporating Both Radial and Angular Parts of the Wave Function. *J. Chem. Educ.* **2019**, *96*, 1794-1798. https://doi.org/10.1021/acs.jchemed.8b00372.

12. Li, X.; Muniz, M.; Chun, K.; Tai, J.; Guerra, F.; York, D. M. Inquiry-Based Activities and Games That Engage Students in Learning Atomic Orbitals. *J. Chem. Educ.* **2022**, *99*, 2175-2181. https://doi.org/10.1021/acs.jchemed.1c01023.

13. Li, X.; Muniz, M.; Chun, K.; Tai, J.; Guerra, F.; York, D. M. Online Orbital Explorer and BingOrbital Game for Inquiry-Based Activities. *J. Chem. Educ.* **2022**, *99*, 2135-2142. https://doi.org/10.1021/acs.jchemed.1c01277.

14. Hanson, M. D. Visualizing the Hydrogen Atomic Orbitals: A Tool for Undergraduate Physical Chemistry. *J. Chem. Educ.* **2024**, *101*, 3539-3546. https://doi.org/10.1021/acs.jchemed.4c00547.

15. Rachek, M.; Wilson, B. P. An R Shiny Application for Visualizing the Radial Distribution Functions of Hydrogen-Like Atoms. *J. Chem. Educ.* **2025**, *102*, 857-860. https://doi.org/10.1021/acs.jchemed.4c01251.

16. Fatemah, A.; Rasool, S.; Habib, U. Interactive 3D Visualization of Chemical Structure Diagrams Embedded in Text to Aid Spatial Learning Process of Students. *J. Chem. Educ.* **2020**, *97*, 992-1000. https://doi.org/10.1021/acs.jchemed.9b00690.

17. Dai, R. X.; Laureanti, J. A.; Kopelevich, M.; Diaconescu, P. L. Developing a Virtual Reality Approach toward a Better Understanding of Coordination Chemistry and Molecular Orbitals. *J. Chem. Educ.* **2020**, *97*, 3647-3651. https://doi.org/10.1021/acs.jchemed.0c00469.

18. Levy, J.; Chagunda, I. C.; Iosub, V.; Leitch, D. C.; McIndoe, J. S. MoleculAR: An Augmented Reality Application for Understanding 3D Geometry. *J. Chem. Educ.* **2024**, *101*, 2533-2539. https://doi.org/10.1021/acs.jchemed.3c01045.

19. Zambri, M. A.; De Backere, J. R. A Mobile Device Application for Visualizing Molecular Symmetry and Orbitals in Augmented Reality. *J. Chem. Educ.* **2024**, *101*, 382-391. https://doi.org/10.1021/acs.jchemed.3c00652.

20. Humphrey, W.; Dalke, A.; Schulten, K. VMD: Visual Molecular Dynamics. *J. Mol. Graph.* **1996**, *14*, 33-38. https://doi.org/10.1016/0263-7855(96)00018-5.

21. Allouche, A.-R. Gabedit: A Graphical User Interface for Computational Chemistry Softwares. *J. Comput. Chem.* **2011**, *32*, 174-182. https://doi.org/10.1002/jcc.21600.

22. Hanwell, M. D.; Curtis, D. E.; Lonie, D. C.; Vandermeersch, T.; Zurek, E.; Hutchison, G. R. Avogadro: An Advanced Semantic Chemical Editor, Visualization, and Analysis Platform. *J. Cheminform.* **2012**, *4*, 17. https://doi.org/10.1186/1758-2946-4-17.

23. Lu, T.; Chen, F. Multiwfn: A Multifunctional Wavefunction Analyzer. *J. Comput. Chem.* **2012**, *33*, 580-592. https://doi.org/10.1002/jcc.22885.

24. Al-Saadon, R.; Shiozaki, T.; Knizia, G. Visualizing Complex-Valued Molecular Orbitals. *J. Phys. Chem. A* **2019**, *123*, 3223-3228. https://doi.org/10.1021/acs.jpca.9b01134.

25. Reisner, B. A.; Kinkaid, M. M.; Pratt, J. M.; Bentley, A. K.; Stewart, J. L.; Smith, S. R.; Raker, J. R.; Lin, S. How Do Inorganic Students Represent Molecular Orbitals? A Multi-Institutional Study from the Foundation-Level Inorganic Chemistry Course. *J. Chem. Educ.* **2024**. https://doi.org/10.1021/acs.jchemed.3c00823.

## Author Checklist Before Submission

1. Insert author names, affiliations, corresponding author email, ORCID identifiers, and funding information.
2. Decide whether the manuscript will be submitted as a Technology Report, Activity, or Article. The current structure is closest to a Technology Report with classroom implementation.
3. Add final screenshots and replace the figure-plan section with actual figures and captions.
4. Add formal student data only if institutional review/exemption and consent requirements are satisfied.
5. Verify all bibliographic details against ACS/JCE records before submission.
6. Add the final repository and Web deployment URLs after confirming public access.
