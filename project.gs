<?xml version="1.0" encoding="UTF-8"?><project xmlns="http://grogra.de/registry" graph="graph.xml">
 <import plugin="de.grogra.vecmath" version="1.6"/>
 <import plugin="de.grogra.math" version="1.6"/>
 <import plugin="de.grogra.pf" version="1.6"/>
 <import plugin="de.grogra.imp3d" version="1.6"/>
 <import plugin="de.grogra.imp2d" version="1.6"/>
 <import plugin="de.grogra.rgg" version="1.6"/>
 <import plugin="de.grogra.imp" version="1.6"/>
 <registry>
  <ref name="project">
   <ref name="objects">
    <ref name="files">
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="pfs:Model.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="pfs:leaves.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="pfs:environment.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="pfs:light.rgg"/>
    </ref>
    <ref name="images">
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/jpeg" name="360px-Mangrovebark" objDescribes="true" systemId="pfs:images/360px-Mangrovebark.jpg" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="1Bark_sm" objDescribes="true" systemId="pfs:images/1Bark_sm.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="GreenMangLeaf2light" objDescribes="true" systemId="pfs:images/GreenMangLeaf2light.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="GreenMangLeaf11" objDescribes="true" systemId="pfs:images/GreenMangLeaf11.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/jpeg" name="stem2" objDescribes="true" systemId="pfs:images/stem2.JPG" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/jpeg" name="root1" objDescribes="true" systemId="pfs:images/root1.JPG" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="bud3" objDescribes="true" systemId="pfs:images/bud3.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
    </ref>
    <ref name="meta">
     <de.grogra.pf.registry.NodeReference name="Model" ref="1887696"/>
     <de.grogra.pf.registry.NodeReference name="leaves" ref="1887697"/>
     <de.grogra.pf.registry.NodeReference name="environment" ref="1887698"/>
     <de.grogra.pf.registry.NodeReference name="light" ref="1887699"/>
    </ref>
    <ref name="3d">
     <ref name="shaders">
      <de.grogra.pf.registry.SONodeReference name="bark" objDescribes="true" ref="9"/>
      <de.grogra.pf.registry.SONodeReference name="bark2" objDescribes="true" ref="12"/>
      <de.grogra.pf.registry.SONodeReference name="leaf" objDescribes="true" ref="15"/>
      <de.grogra.pf.registry.SONodeReference name="leaf2" objDescribes="true" ref="18"/>
      <de.grogra.pf.registry.SONodeReference name="bark3" objDescribes="true" ref="12202"/>
      <de.grogra.pf.registry.SONodeReference name="root" objDescribes="true" ref="15918"/>
      <de.grogra.pf.registry.SONodeReference name="bud" objDescribes="true" ref="17217"/>
     </ref>
    </ref>
   </ref>
  </ref>
  <ref name="workbench">
   <ref name="state">
    <de.grogra.pf.ui.registry.Layout name="layout">
     <de.grogra.pf.ui.registry.MainWindow>
      <de.grogra.pf.ui.registry.Split orientation="0">
       <de.grogra.pf.registry.Link source="/ui/panels/rgg/toolbar"/>
       <de.grogra.pf.ui.registry.Split location="0.43291405">
        <de.grogra.pf.ui.registry.Split location="0.79" orientation="0">
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/3d/defaultview">
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/3d/defaultview"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="View"/>
          <de.grogra.pf.registry.Option name="view" type="de.grogra.imp3d.View3D" value="graphDescriptor=[de.grogra.imp.ProjectGraphDescriptor]visibleScales={true true true true true true true true true true true true true true true}visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 camera=(minZ=0.1 maxZ=2000.0 projection=[de.grogra.imp3d.PerspectiveProjection aspect=1.0 fieldOfView=1.1119528]transformation=(0.7727062003699989 -0.6347638363278967 0.0 -0.2949337450665214 0.29052664381272514 0.3536618285399848 0.8891105557064455 -0.8398538188357666 -0.5643752272598522 -0.6870212392087908 0.4576924947290947 -2.254950880646759 0.0 0.0 0.0 1.0))navigator=null"/>
         </de.grogra.pf.ui.registry.PanelFactory>
         <de.grogra.pf.ui.registry.Split orientation="0">
          <de.grogra.pf.ui.registry.Tab selectedIndex="0">
           <de.grogra.pf.registry.Link source="/ui/panels/fileexplorer"/>
           <de.grogra.pf.registry.Link source="/ui/panels/objects/meta"/>
           <de.grogra.pf.registry.Link source="/ui/panels/objects/3d/shaders"/>
          </de.grogra.pf.ui.registry.Tab>
          <de.grogra.pf.registry.Link source="/ui/panels/statusbar"/>
         </de.grogra.pf.ui.registry.Split>
        </de.grogra.pf.ui.registry.Split>
        <de.grogra.pf.ui.registry.Split location="0.69555557" orientation="0">
         <de.grogra.pf.ui.registry.Tab selectedIndex="0">
          <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/texteditor">
           <de.grogra.pf.registry.Option name="documents" type="java.lang.String" value="&quot;\&quot;D:\\\\GroImp2014\\\\ARtest.dtd\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;E:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;E:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\BinaryTree2.rgg\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\All Users\\\\ksmolen\\\\kurse\\\\sfm2013\\\\groimp\\\\Blatt.xl\&quot;,\&quot;C:\\\\Users\\\\moualeu\\\\Documents\\\\Groimp\\\\Charts.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Users\\\\kstreit\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\src\\\\eclipse\\\\groimp\\\\C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\Users\\\\strei002\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\src\\\\eclipse\\\\groimp\\\\C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\C:\\\\Program Files\\\\GroIMP-0.9.5.7\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;E:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;E:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\C:\\\\Temp\\\\GroIMP-0.9.4.2\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\ColouredObjects.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\D:\\\\Documents and Settings\\\\Katka\\\\My Documents\\\\x_School\\\\nemecko\\\\groimp\\\\condition02.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\D:\\\\Documents and Settings\\\\Katka\\\\My Documents\\\\x_School\\\\nemecko\\\\groimp\\\\condition02.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\D:\\\\Documents and Settings\\\\Katka\\\\My Documents\\\\x_School\\\\nemecko\\\\groimp\\\\condition02.rgg\&quot;,\&quot;D:\\\\Documents and Settings\\\\Katka\\\\My Documents\\\\x_School\\\\nemecko\\\\groimp\\\\condition02.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -001.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -002.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -003.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -004.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -005.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -006.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -007.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -008.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -009.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -011.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -012.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -013.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -014.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -015.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -016.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -017.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -018.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -019.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -020.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -021.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -022.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -023.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -024.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -025.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -026.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -027.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -028.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -029.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -030.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -031.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -032.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -033.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -034.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -035.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -036.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -037.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -038.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -039.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -040.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -041.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -042.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -043.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -044.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -045.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -046.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -047.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -048.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -049.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -050.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -051.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -052.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -053.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -054.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -055.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -056.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -057.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -058.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -059.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -060.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -061.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -062.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -063.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -064.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -065.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -066.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -067.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -068.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -069.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -070.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -071.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -072.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -073.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -074.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -075.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -076.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -077.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -078.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -079.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -080.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -081.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -082.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -083.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -084.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -085.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -086.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -087.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -088.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -089.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -090.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -091.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -092.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -093.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -094.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -095.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -096.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -097.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -098.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -099.png\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Dylan\\\\Snapshots\\\\Architecture\\\\Sinlge plant White\\\\Dylan -0100.png\&quot;,\&quot;pfs:environment.rgg\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\groimp\\\\Platform-Core\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\ksmolen\\\\GroIMP-1.1\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\levent\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\eclipse\\\\groimp\\\\Platform-Core\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\eclipse\\\\trunkRT\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\Users\\\\ok\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP 1.4.3\\\\\\\\dos\\\\Dokumente\\\\eclipse\\\\trunk\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\Users\\\\kstreit\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\eclipse\\\\trunkRT\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\Users\\\\kstreit\\\\workspace\\\\groimpAngers\\\\Platform-Core\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;C:\\\\Users\\\\maarten\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\eclipse\\\\trunkRT\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;D:\\\\GroImp2014\\\\\\\\home\\\\levent\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;D:\\\\GroImp2014\\\\\\\\home\\\\mhenke\\\\Dokumente\\\\eclipse\\\\trunkRT\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ErleTriebAmBaum.gsz\&quot;,\&quot;F:\\\\工作\\\\功能结构模型\\\\GroIMP\\\\Example01(1).gsz~\&quot;,\&quot;F:\\\\工作\\\\功能结构模型\\\\GroIMP\\\\Example01(2).gsz\&quot;,\&quot;F:\\\\工作\\\\功能结构模型\\\\GroIMP\\\\Example01(2).gsz~\&quot;,\&quot;D:\\\\dox\\\\GroIMP projects\\\\axillaryMeristem\\\\Hormone\\\\Hormone2.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\initRoot.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\initShoot.rgg\&quot;,\&quot;pfs:leaves.rgg\&quot;,\&quot;pfs:light.rgg\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ligth-test.gsz\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\Users\\\\ok\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\\\\\Users\\\\ok\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ligth-test.gsz\&quot;,\&quot;C:\\\\Users\\\\kstreit\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ligth-test.gsz\&quot;,\&quot;D:\\\\GroImp2014\\\\\\\\home\\\\levent\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\\\\\home\\\\levent\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ligth-test.gsz\&quot;,\&quot;D:\\\\GroImp2014\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\ligth-test.gsz\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Mallee\\\\Mallee.rgg\&quot;,\&quot;C:\\\\Users\\\\kstreit\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Mallee\\\\Mallee.rgg\&quot;,\&quot;D:\\\\GroImp2014\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\\\\\home\\\\mhenke\\\\C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Mallee\\\\Mallee.rgg\&quot;,\&quot;pfs:Model.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\modulesRoot.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\modulesShoot.rgg\&quot;,\&quot;C:\\\\Users\\\\Alejandro\\\\OldLight.rgg\&quot;,\&quot;C:\\\\Documents and Settings\\\\Administrator\\\\桌面\\\\2011投稿\\\\model\\\\Organs2012.9.5.rgg\&quot;,\&quot;Z:\\\\Lehre\\\\Strukturmodelle\\\\termin6\\\\PFL1.dtd\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\All Users\\\\ksmolen\\\\DFG\\\\lignum\\\\PineLsys.rgg\&quot;,\&quot;C:\\\\Documents and Settings\\\\Administrator\\\\桌面\\\\2011投稿\\\\model\\\\rapeseed2012.9.5.rgg\&quot;,\&quot;D:\\\\JUNQI ZHU\\\\FSPM\\\\maize model\\\\Referenceline.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\runRoot.rgg\&quot;,\&quot;M:\\\\GroImp\\\\Workdir\\\\Test\\\\runShoot.rgg\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\SimpleTree.rgg\&quot;,\&quot;C:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\SimpleTree.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\SimpleTree.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\SimpleTree.rgg\&quot;,\&quot;D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\SimpleTree.rgg\&quot;,\&quot;C:\\\\Users\\\\Petra\\\\.grogra.de-platform\\\\de.grogra.ext.jedit\\\\macros\\\\Temporary_Macro.bsh\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\All Users\\\\ksmolen\\\\DFG\\\\GreenLab\\\\XL\\\\test.txt\&quot;,\&quot;C:\\\\Programme\\\\GroIMP\\\\uebung\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Untitled-1\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Mallee\\\\Untitled-1\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\colin\\\\Desktop\\\\Diplomarbeit\\\\Untitled-1\&quot;,\&quot;C:\\\\eclipse\\\\groimp\\\\Platform-Core\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\katka\\\\GroIMP-0.9.7\\\\D:\\\\Program Files\\\\GroIMP\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\\\\\home\\\\okn\\\\Untitled-1\&quot;,\&quot;C:\\\\Programme\\\\GroIMP\\\\Untitled-1\&quot;,\&quot;C:\\\\Users\\\\bearz001\\\\Documents\\\\Untitled-1\&quot;,\&quot;C:\\\\Users\\\\osei\\\\Untitled-1\&quot;,\&quot;C:\\\\Users\\\\User\\\\Documents\\\\Computationele Modellen\\\\Microteaching\\\\Untitled-1\&quot;,\&quot;D:\\\\dox\\\\GroIMP projects\\\\axillaryMeristem\\\\Hormone\\\\Untitled-1\&quot;,\&quot;G:\\\\Thèse\\\\Wageningen\\\\GroImp\\\\Untitled-1\&quot;,\&quot;Z:\\\\Lehre\\\\Strukturmodelle\\\\termin6\\\\Untitled-1\&quot;,\&quot;C:\\\\Dokumente und Einstellungen\\\\adge-k\\\\Eigene Dateien\\\\GroImp\\\\Untitled-2\&quot;&quot;"/>
           <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/texteditor"/>
           <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="jEdit - Model.rgg"/>
           <de.grogra.pf.registry.Option name="selected" type="java.lang.String" value="pfs:Model.rgg"/>
          </de.grogra.pf.ui.registry.PanelFactory>
          <de.grogra.pf.registry.Link source="/ui/panels/attributeeditor"/>
          <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/2d/graph">
           <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/2d/graph"/>
           <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Graph"/>
           <de.grogra.pf.registry.Option name="view" type="de.grogra.imp2d.View2D" value="graphDescriptor=[de.grogra.imp2d.graphs.TopologyGraphDescriptor source=[de.grogra.imp.ProjectGraphDescriptor]]visibleScales={true true true true true true true true true true true true true true true}visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 transformation=(82.83870712899525 -0.0 -62.12903034674643 0.0 -82.83870712899525 -310.6451517337322 -0.0 -0.0 1.0)layout=[de.grogra.imp2d.layout.GeneralPurposeLayout fit=true transformationSteps=1 idealDistance=1.5 yIdealDistance=1.5 maxNbOfSteps=25000 fast=false startAgain=false]"/>
          </de.grogra.pf.ui.registry.PanelFactory>
         </de.grogra.pf.ui.registry.Tab>
         <de.grogra.pf.ui.registry.Tab selectedIndex="1">
          <de.grogra.pf.registry.Link source="/ui/panels/log"/>
          <de.grogra.pf.registry.Link source="/ui/panels/rgg/console"/>
         </de.grogra.pf.ui.registry.Tab>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
      </de.grogra.pf.ui.registry.Split>
     </de.grogra.pf.ui.registry.MainWindow>
    </de.grogra.pf.ui.registry.Layout>
   </ref>
  </ref>
 </registry>
</project>
