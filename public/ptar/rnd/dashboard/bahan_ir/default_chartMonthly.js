lib('cdf-env.js');

var render_chartMonthly = {
  type: "cccBarChart",
  name: "render_chartMonthly",
  priority: 5,
  parameters: [["yearParam","yearParam"]],
  executeAtStart: true,
  htmlObject: "htmlMonthly",
  listeners: ['${p:yearParam}'],
  chartDefinition:  {
    dataAccessId: "dataMonthlySummary",
    path: "/public/ptar/dashboard/bahan_ir/default.cda",
    height: 300,
    extensionPoints: [["label_textMargin","-10"]],
    colors: [],
    animate: true,
    barOrthoSizeMin: 1.5,
    barSizeMax: 50,
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
   
   
   var month = scene.vars.category.value;

    var year = yearParam;
    
  
  
   var drillDownurl = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Abahan_ir%3Amengikut_bulan.wcdf/generatedContent';

    window.location = drillDownurl + "?bulan="+month + "&tahun="+ yearParam;
    
} 


 


 ,
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
    orientation: "vertical",
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
    orthoAxisOffset: 0.1,
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
    plotFrameVisible: false,
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
    valuesAnchor: "top",
    valuesFont: "10px sans-serif",
    valuesNormalized: false,
    valuesOverflow: "hide",
    valuesVisible: true
  }
};

cgg.initParameter
("yearParam", "yearParam")
;

cgg.render(render_chartMonthly);
