lib('cdf-env.js');

var render_chartPtjType = {
  type: "cccPieChart",
  name: "render_chartPtjType",
  priority: 5,
  parameters: [["yearParam","yearParam"],["itemCategoryParam","itemCategoryParam"],["measureParam","topBottom10Measure"],["mediumParam","mediumParam"],["topBottom10Measure","topBottom10Measure"]],
  executeAtStart: true,
  htmlObject: "${h:htmlChartPtjType}",
  listeners: ['${p:itemCategoryParam}','${p:yearParam}','${p:ytdPeriodParam}','${p:mediumParam}','${p:measureParam}','${p:topBottom10Measure}'],
  chartDefinition:  {
    dataAccessId: "dataByPtjType",
    path: "/public/ptar/rnd/bahan_ir/jenis_bahan.cda",
    height: 400,
    extensionPoints: [],
    colors: [],
    activeSliceRadius: "5%",
    animate: true,
    clearSelectionMode: "emptySpaceClick",
    clickable: true,
    clickAction: function drillDown(scene) {
    
    var ptjType = encodeURIComponent(scene.vars.category.value);
    
    
    //var state = scene.vars.category.value;
    
    var year = yearParam;
    //alert(year +'\n' + state);
  
  
    var drillDownurl = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Abahan_ir%3Ajenis_ptj.wcdf/generatedContent';
    window.location = drillDownurl + "?jenisPtj="+ptjType + "&tahun="+ year;
    
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
("itemCategoryParam", "itemCategoryParam")
("measureParam", "topBottom10Measure")
("mediumParam", "mediumParam")
("topBottom10Measure", "topBottom10Measure")
;

cgg.render(render_chartPtjType);
