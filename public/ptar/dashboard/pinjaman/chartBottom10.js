lib('cdf-env.js');

var render_chartBottom10 = {
  type: "cccBarChart",
  name: "render_chartBottom10",
  priority: 5,
  parameters: [["yearParam","yearParam"],["categoryParam","categoryParam"]],
  executeAtStart: true,
  htmlObject: "${h:htmlBottom10}",
  postExecution: function() {
var myself = this;
  // Set initial width to match the placeholder
  myself.chartDefinition.width = myself.placeholder().width();

  // Attach the resize handler only on the first execution of the chart component
  if (!this.resizeHandlerAttached){

    // Ensure render is only triggered after resize events have stopped
    var debouncedResize = _.debounce(function(){

      // Show chart again.
      myself.placeholder().children().css('visibility','visible');

      // Change chart width
      myself.chartDefinition.width = myself.placeholder().width();
      myself.render( myself.query.lastResults() );
    }, 200);

    // Attach resize handler
    $(window).resize(function(){

      // Only trigger resize if the container has changed width
      if ( myself.chartDefinition.width != myself.placeholder().width()){

        // Temporarily hide chart so that overflow does not happen
        myself.placeholder().children().css('visibility','hidden');

        // Trigger the resize with debounce
        debouncedResize();
      }    
    });

    this.resizeHandlerAttached = true;
  } 
} 
 ,
  listeners: ['${p:yearParam}','${p:categoryParam}'],
  chartDefinition:  {
    dataAccessId: "dataBottom10",
    path: "/public/ptar/dashboard/pinjaman/default.cda",
    height: 400,
    extensionPoints: [["label_localProperty","labelLayoutInfo"],["label_textAlign",function(scene) {             var li = this.pvMark.labelLayoutInfo();             return (li.outside === li.atEnd) ? 'left'  : 'right';         }],["label_labelLayoutInfo",function (scene) {    var v = scene.getValue(),                   atEnd = v >= 0,                                                a_beg = 'left', a_end = 'right', a_len = 'width',                                                p = this.panel._layoutInfo.paddings,                                  r = this.panel.axes.ortho.scale.range(),                              rp = [r[0] - p[a_beg], r[1] + p[a_end]];                                     var barMark = this.sign.getAnchoredToMark(),                 barBeg  = barMark[a_beg](),                 rb      = [barBeg, barBeg + barMark[a_len]()],                              rbVis = [                     Math.max(rb[0], rp[0]),                     Math.min(rb[1], rp[1])                 ];                                   var tx = this.sign._evalBaseText(),                 tw = pv.Text.measureWidth(tx, this.pvMark.font()),                 tm = this.pvMark.textMargin(),                 tl = tw + 2*tm;                                   var outLen = Math.max(                     0,                      v >= 0                      ? (rp[1] - rbVis[1])                     : (rbVis[0] - rp[0])),                 outside = outLen >= tl,                 fits    = outside;                          if(!outside) {                 var insLen = rbVis[1] - rbVis[0];                             if(insLen > outLen)                     fits = (insLen >= tl);                 else                      outside = true;             }             outside = true;                          return {outside: outside, atEnd: atEnd, fits: fits}; }],["label_textMargin","10"],["yAxisLabel_font","12px \"Open Sans\""]],
    colors: ["#d62728"],
    animate: true,
    barOrthoSizeMin: 1.5,
    barSizeMax: 50,
    barSizeRatio: 0.9,
    barStackedMargin: 0,
    baseAxisFont: "13px",
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
    var s = scene.vars.series.value;
    var state = scene.vars.category.value;
    var v = scene.vars.value.value;
    
    //var state = scene.vars.category.value;
    
    var year = yearParam;
    //alert(year +'\n' + state);
  
  
    var drillDownurl = '/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard%3Apinjaman%3Amengikut_perpustakaan.wcdf/generatedContent';
//    var drilDownurl = 'pentaho/api/repos' ;
    window.location = drillDownurl + "?perpustakaan="+state + "&tahun="+ year;
    
} 
/*
unction sendParameter(scene)
{ 
    var url='/pentaho/api/repos/%3Apublic%3Aptar%3Adashboard2%3Apinjaman%3APinjaman%20mengikut%20kampus.wcdf/generatedContent'; 
    //var url = Dashboards.getWebAppPath() + '/content/pentaho-cdf-dd/Render?solution=Dashboards&path=%3Apublic%3Awork_tmp%3A&file=detail1.wcdf';
    var vars = scene.vars; 
    var c = vars.category.value; 
    var v = vars.value.value; 
    window.location=url+'?kampus='+c; 
} 
 */ ,
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
    legendFont: "12px sans-serif",
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
    valuesAnchor: "right",
    valuesFont: "10px sans-serif",
    valuesNormalized: false,
    valuesOverflow: "show",
    valuesVisible: true
  }
};

cgg.initParameter
("yearParam", "yearParam")
("categoryParam", "categoryParam")
;

cgg.render(render_chartBottom10);
