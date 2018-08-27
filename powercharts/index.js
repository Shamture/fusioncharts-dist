import Spline from'../viz/spline';import Logmscolumn2d from'../viz/logmscolumn2d';import Logmsline from'../viz/logmsline';import LogStackedColumn2d from'../viz/logstackedcolumn2d';import Splinearea from'../viz/splinearea';import Msspline from'../viz/msspline';import MSSplineDy from'../viz/mssplinedy';import Mssplinearea from'../viz/mssplinearea';import Errorbar2d from'../viz/errorbar2d';import Errorline from'../viz/errorline';import Errorscatter from'../viz/errorscatter';import Inversemsarea from'../viz/inversemsarea';import Inversemscolumn2d from'../viz/inversemscolumn2d';import Inversemsline from'../viz/inversemsline';import Dragcolumn2d from'../viz/dragcolumn2d';import Dragline from'../viz/dragline';import Kagi from'../viz/kagi';import WaterFall2D from'../viz/waterfall2d';import SelectScatter from'../viz/selectscatter';import MultilevelPie from'../viz/multilevelpie';import MultiAxisLine from'../viz/multiaxisline';import MSStepLine from'../viz/msstepline';import DragNode from'../viz/dragnode';import CandleStick from'../viz/candlestick';import BoxAndWhisker2D from'../viz/boxandwhisker2d';import HeatMap from'../viz/heatmap';import Radar from'../viz/radar';import DragArea from'../viz/dragarea';import CrossLine from'../features/crossline-adapter';import MultiCanvasCrossLine from'../features/multicanvas-crossline-manager';export{Spline,Logmscolumn2d,LogStackedColumn2d,Logmsline,Splinearea,MSSplineDy,Msspline,Mssplinearea,Errorbar2d,Errorline,Errorscatter,Inversemsarea,Inversemscolumn2d,Inversemsline,Dragcolumn2d,Dragline,Kagi,WaterFall2D,SelectScatter,MultilevelPie,MultiAxisLine,MSStepLine,DragNode,CandleStick,BoxAndWhisker2D,HeatMap,Radar,DragArea};export default{name:'powercharts',type:'package',requiresFusionCharts:!0,extension:a=>{a.addDep(CrossLine),a.addDep(MultiCanvasCrossLine),a.addDep(Spline),a.addDep(Logmscolumn2d),a.addDep(LogStackedColumn2d),a.addDep(Logmsline),a.addDep(Splinearea),a.addDep(MSSplineDy),a.addDep(Msspline),a.addDep(Mssplinearea),a.addDep(Errorbar2d),a.addDep(Errorline),a.addDep(Errorscatter),a.addDep(Inversemsarea),a.addDep(Inversemscolumn2d),a.addDep(Inversemsline),a.addDep(Dragcolumn2d),a.addDep(Dragline),a.addDep(Kagi),a.addDep(WaterFall2D),a.addDep(SelectScatter),a.addDep(MultilevelPie),a.addDep(MultiAxisLine),a.addDep(MSStepLine),a.addDep(DragNode),a.addDep(CandleStick),a.addDep(BoxAndWhisker2D),a.addDep(HeatMap),a.addDep(Radar),a.addDep(DragArea)}};