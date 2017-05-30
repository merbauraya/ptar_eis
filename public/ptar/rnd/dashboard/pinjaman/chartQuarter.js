lib('cdf-env.js');

var render_chartQuarter = {
  type: "cccPieChart",
  name: "render_chartQuarter",
  priority: 5,
  parameters: [["yearParam","yearParam"],["categoryParam","categoryParam"]],
  executeAtStart: true,
  htmlObject: "htmlChartQuarter",
  listeners: ['${p:yearParam}','${p:categoryParam}'],
  chartDefinition:  {
    dataAccessId: "dataQuarter",
    path: "/public/ptar/dashboard/pinjaman/default.cda",
    height: 400,
    extensionPoints: [],
    colors: [],
    activeSliceRadius: "5%",
    animate: true,
    clearSelectionMode: "emptySpaceClick",
    clickable: true,
    clickAction: function drillDown(scene) {
    
    var quarter = scene.vars.category.value;
    
    
    //var state = scene.vars.category.value;
    
    var year = yearParam;
    //alert(year +'\n' + state);
  
  
    var drillDownurl = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Apinjaman%3Amengikut_suku.wcdf/generatedContent';
    window.location = drillDownurl + "?suku="+quarter + "&tahun="+ year;
    
} 
 ,
    compatVersion: 2,
    contentMargins: "0",
    contentPaddings: "0",
    crosstabMode: true,
    ctrlSelectMode: true,
    dataIgnoreMetadataLabels: false,
    dataSeparator: "~",
    explodedSliceRadius: "2%",
    groupedLabelSep: " ~ ",
    hoverable: true,
    ignoreNulls: true,
    isMultiValued: false,
    legend: true,
    legendClickMode: "toggleVisible",
    legendFont: "10px sans-serif",
    legendItemPadding: "2.5",
    legendMargins: "0",
    legendMarkerSize: 15,
    legendPaddings: "5",
    legendPosition: "bottom",
    legendTextMargin: 6,
    legendVisible: true,
    linkHandleWidth: 0.5,
    linkInsetRadius: "5%",
    linkLabelSize: "15%",
    linkLabelSpacingMin: 0.5,
    linkMargin: "2.5%",
    linkOutsetRadius: "2.5%",
    margins: "3",
    measuresIndexes: [],
    multiChartColumnsMax: 3,
    multiChartIndexes: [],
    multiChartOverflow: "grow",
    multiChartSingleColFillsHeight: true,
    multiChartSingleRowFillsHeight: true,
    paddings: "0",
    pointingMode: "near",
    readers: [],
    selectable: false,
    seriesInRows: false,
    smallContentMargins: "0",
    smallContentPaddings: "0",
    smallMargins: "2%",
    smallPaddings: "0",
    smallTitleFont: "14px sans-serif",
    smallTitleMargins: "0",
    smallTitlePaddings: "0",
    smallTitlePosition: "top",
    timeSeries: false,
    timeSeriesFormat: "%Y-%m-%d",
    titleFont: "14px sans-serif",
    titleMargins: "0",
    titlePaddings: "0",
    titlePosition: "top",
    tooltipEnabled: true,
    tooltipFade: true,
    tooltipFollowMouse: false,
    tooltipHtml: true,
    tooltipOpacity: 0.9,
    valuesFont: "10px sans-serif",
    valuesLabelStyle: "linked",
    valuesOverflow: "hide"
  }
};

cgg.initParameter
("yearParam", "yearParam")
("categoryParam", "categoryParam")
;

cgg.render(render_chartQuarter);
