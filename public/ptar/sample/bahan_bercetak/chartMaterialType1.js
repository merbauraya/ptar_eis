lib('cdf-env.js');

var render_chartMaterialType1 = {
  type: "cccBarChart",
  name: "render_chartMaterialType1",
  priority: 5,
  parameters: [["yearParam","yearParam"],["ytdPeriodParam","ytdPeriodParam"]],
  executeAtStart: true,
  htmlObject: "htmlChartTypeLatest",
  listeners: ['${p:yearParam}','${p:ytdPeriodParam}'],
  chartDefinition:  {
    dataAccessId: "dataTypeLatest",
    path: "/public/ptar/sample/bahan_bercetak/default.cda",
    height: 400,
    extensionPoints: [],
    colors: ["#003333","#FF9966"],
    animate: true,
    barOrthoSizeMin: 1.5,
    barSizeMax: 2000,
    barSizeRatio: 0.9,
    barStackedMargin: 0,
    baseAxisGrid: false,
    baseAxisOffset: 0,
    baseAxisOverlappedLabelsMode: "hide",
    baseAxisTicks: true,
    baseAxisTitleFont: "12px sans-serif",
    baseAxisTitleMargins: "0",
    baseAxisTooltipAutoContent: "value",
    baseAxisTooltipEnabled: true,
    baseAxisVisible: true,
    clearSelectionMode: "emptySpaceClick",
    clickable: true,
    clickAction: function drillDown(scene) {
   
   console.log(scene);
   var category = scene.vars.category.value;
  // return;
   
   //var s = scene.vars.series.value;
//    var state = scene.vars.category.value;
  //  var v = scene.vars.value.value;
    
    //var state = scene.vars.category.value;
    
    var year = yearParam;
    //alert(year +'\n' + state);
  
  
   var drillDownurl = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Abahan_bercetak%3Ajenis_bahan.wcdf/generatedContent';
//    var drilDownurl = 'pentaho/api/repos' ;
    window.location = drillDownurl + "?kategoriBahan="+category + "&tahun="+ year;
    
} ,
    color2AxisColors: [],
    color2AxisLegendClickMode: "toggleVisible",
    color2AxisLegendVisible: true,
    compatVersion: 2,
    contentMargins: "0",
    contentPaddings: "0",
    crosstabMode: true,
    ctrlSelectMode: true,
    dataIgnoreMetadataLabels: false,
    dataSeparator: "~",
    groupedLabelSep: " ~ ",
    hoverable: false,
    ignoreNulls: true,
    isMultiValued: false,
    leafContentOverflow: "auto",
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
    margins: "3",
    measuresIndexes: [],
    multiChartColumnsMax: 3,
    multiChartIndexes: [],
    multiChartOverflow: "grow",
    multiChartSingleColFillsHeight: true,
    multiChartSingleRowFillsHeight: true,
    nullInterpolationMode: "none",
    orientation: "horizontal",
    ortho2AxisDomainRoundMode: "tick",
    ortho2AxisDomainScope: "global",
    ortho2AxisGrid: false,
    ortho2AxisMinorTicks: true,
    ortho2AxisOffset: 0,
    ortho2AxisOverlappedLabelsMode: "hide",
    ortho2AxisTicks: true,
    ortho2AxisTickUnitMax: "Infinity",
    ortho2AxisTickUnitMin: "0",
    ortho2AxisTitleFont: "12px sans-serif",
    ortho2AxisTitleMargins: "0",
    ortho2AxisVisible: true,
    ortho2AxisZeroLine: true,
    orthoAxisDomainRoundMode: "tick",
    orthoAxisDomainScope: "global",
    orthoAxisGrid: false,
    orthoAxisMinorTicks: true,
    orthoAxisOffset: 0,
    orthoAxisOverlappedLabelsMode: "hide",
    orthoAxisTicks: true,
    orthoAxisTickUnitMax: "Infinity",
    orthoAxisTickUnitMin: "0",
    orthoAxisTitleFont: "12px sans-serif",
    orthoAxisTitleMargins: "0",
    orthoAxisVisible: true,
    orthoAxisZeroLine: true,
    overflowMarkersVisible: true,
    paddings: "0",
    plot2: false,
    plot2AreasVisible: false,
    plot2ColorAxis: 2,
    plot2DotsVisible: true,
    plot2LinesVisible: true,
    plot2NullInterpolationMode: "none",
    plot2OrthoAxis: 1,
    plot2Series: [],
    plot2SeriesIndexes: -1,
    plot2Stacked: false,
    plot2ValuesFont: "10px sans-serif",
    plot2ValuesMask: "{value}",
    plot2ValuesVisible: false,
    plotFrameVisible: true,
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
    stacked: false,
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
    trendAreasVisible: false,
    trendColorAxis: 2,
    trendDotsVisible: false,
    trendLinesVisible: true,
    trendOrthoAxis: 1,
    trendStacked: false,
    trendValuesAnchor: "right",
    trendValuesFont: "10px sans-serif",
    trendValuesVisible: false,
    valuesFont: "10px sans-serif",
    valuesNormalized: false,
    valuesOverflow: "hide"
  }
};

cgg.initParameter
("ytdPeriodParam", "ytdPeriodParam")
;

cgg.render(render_chartMaterialType1);
