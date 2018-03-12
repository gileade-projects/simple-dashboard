/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_provider__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_provider__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__http_provider__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.title = '';
        this.axisX = {};
        this.axisY = [];
        this.dataSeries = {};
        this.labelField = {};
        this.field = {};
        this.fieldOne = {};
        this.fieldTwo = {};
        this.fieldThree = {};
        this.conditionalsFormatting = [];
        this.boardFontSize = 'SMALL';
        this.labelField.format = 'no_format';
        this.showValues = false;
        this.showLegend = true;
        this.showGridLineWidthAxisY = true;
        this.bands = new Array();
        this.pies = new Array();
    }
    return Configuration;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseHighChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__base_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);



var BaseHighChart = /** @class */ (function () {
    function BaseHighChart(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_1__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseHighChart.prototype.render = function () {
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration);
        window.Highcharts.chart(this.element, this.getHighChartConfiguration(this.configuration));
        this.handlingLastUpdate(this.element, this.configuration);
    };
    ;
    BaseHighChart.prototype.handlingLastUpdate = function (element, configuration) {
        if (!configuration.showlastUpdate || !configuration.lastUpdate)
            return;
        var container = element.getElementsByClassName('highcharts-container');
        if (container && container[0]) {
            var template = "\n            <div class=\"board-last-update\">\n            Atualizado " + __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(configuration.lastUpdate, 'datahora#dd/MM/yyyy HH:mm') + "\n            </div>\n        ";
            var child = document.createElement('div');
            child.className = 'last-update-container';
            child.innerHTML = template;
            container[0].appendChild(child);
        }
    };
    BaseHighChart.prototype.getPosition = function (column) {
        return this.recordset.columns.filter(function (column) { return column != null; }).indexOf(column);
    };
    BaseHighChart.prototype.getFontSize = function () {
        switch (this.configuration.boardFontSize) {
            case 'SMALL':
                return 11;
            case 'MEDIUM':
                return 18;
            case 'LARGE':
                return 25;
            default:
                return 11;
        }
    };
    return BaseHighChart;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__base_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);



var BaseCard = /** @class */ (function () {
    function BaseCard(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset || {};
        this.recordset.columns = this.recordset.columns || [];
        this.recordset.rows = this.recordset.rows || [];
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_1__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseCard.prototype.render = function () {
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration);
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    BaseCard.prototype.handlingLastUpdate = function (configuration) {
        if (!configuration.showlastUpdate || !configuration.lastUpdate)
            return '';
        return "\n      <div class=\"board-card-last-update\">\n        Atualizado " + __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(configuration.lastUpdate, 'datahora#dd/MM/yyyy HH:mm') + "\n      </div>\n    ";
    };
    BaseCard.prototype.getPosition = function (column) {
        return this.recordset.columns.filter(function (column) { return column != null; }).indexOf(column);
    };
    BaseCard.prototype.getFontSize = function () {
        switch (this.configuration.boardFontSize) {
            case 'SMALL':
                return 11;
            case 'MEDIUM':
                return 18;
            case 'LARGE':
                return 25;
            default:
                return 11;
        }
    };
    return BaseCard;
}());



/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.14 (2017-07-28)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){(function(b){function r(b,a){this.init(b,a)}var v=b.CenteredSeriesMixin,w=b.each,n=b.extend,h=b.merge,g=b.splat;n(r.prototype,{coll:"pane",init:function(b,a){this.chart=a;this.background=[];a.pane.push(this);this.setOptions(b)},setOptions:function(b){this.options=h(this.defaultOptions,this.chart.angular?{background:{}}:void 0,b)},render:function(){var b=this.options,a=this.options.background,c=this.chart.renderer;
this.group||(this.group=c.g("pane-group").attr({zIndex:b.zIndex||0}).add());this.updateCenter();if(a)for(a=g(a),b=Math.max(a.length,this.background.length||0),c=0;c<b;c++)a[c]&&this.axis?this.renderBackground(h(this.defaultBackgroundOptions,a[c]),c):this.background[c]&&(this.background[c]=this.background[c].destroy(),this.background.splice(c,1))},renderBackground:function(b,a){var c="animate";this.background[a]||(this.background[a]=this.chart.renderer.path().add(this.group),c="attr");this.background[a][c]({d:this.axis.getPlotBandPath(b.from,
b.to,b)}).attr({fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,"class":"highcharts-pane "+(b.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(b){this.center=(b||this.axis||{}).center=
v.getCenter.call(this)},update:function(b,a){h(!0,this.options,b);this.setOptions(this.options);this.render();w(this.chart.axes,function(c){c.pane===this&&(c.pane=null,c.update({},a))},this)}});b.Pane=r})(x);(function(b){var r=b.each,v=b.extend,w=b.map,n=b.merge,h=b.noop,g=b.pick,m=b.pInt,a=b.wrap,c,k,f=b.Axis.prototype;b=b.Tick.prototype;c={getOffset:h,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:h,setCategories:h,setTitle:h};k={defaultRadialGaugeOptions:{labels:{align:"center",
x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=
this.options=n(this.defaultOptions,this.defaultRadialOptions,a);a.plotBands||(a.plotBands=[])},getOffset:function(){f.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(a,c){a=this.center;var e=this.chart,d=g(c,a[2]/2-this.offset);this.isCircular||void 0!==c?c=this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],d,d,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}):(c=this.postTranslate(this.angleRad,d),c=["M",a[0]+e.plotLeft,a[1]+e.plotTop,"L",c.x,
c.y]);return c},setAxisTranslation:function(){f.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===g(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||
0},setAxisSize:function(){f.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*g(this.sector,1)/2)},getPosition:function(a,c){return this.postTranslate(this.isCircular?this.translate(a):this.angleRad,g(this.isCircular?c:this.translate(a),this.center[2]/2)-this.offset)},postTranslate:function(a,c){var e=this.chart,d=this.center;a=this.startAngleRad+a;return{x:e.plotLeft+
d[0]+Math.cos(a)*c,y:e.plotTop+d[1]+Math.sin(a)*c}},getPlotBandPath:function(a,c,p){var e=this.center,d=this.startAngleRad,k=e[2]/2,b=[g(p.outerRadius,"100%"),p.innerRadius,g(p.thickness,10)],f=Math.min(this.offset,0),t=/%$/,h,n=this.isCircular;"polygon"===this.options.gridLineInterpolation?e=this.getPlotLinePath(a).concat(this.getPlotLinePath(c,!0)):(a=Math.max(a,this.min),c=Math.min(c,this.max),n||(b[0]=this.translate(a),b[1]=this.translate(c)),b=w(b,function(a){t.test(a)&&(a=m(a,10)*k/100);return a}),
"circle"!==p.shape&&n?(a=d+this.translate(a),c=d+this.translate(c)):(a=-Math.PI/2,c=1.5*Math.PI,h=!0),b[0]-=f,b[2]-=f,e=this.chart.renderer.symbols.arc(this.left+e[0],this.top+e[1],b[0],b[0],{start:Math.min(a,c),end:Math.max(a,c),innerR:g(b[1],b[0]-b[2]),open:h}));return e},getPlotLinePath:function(a,c){var e=this,d=e.center,b=e.chart,k=e.getPosition(a),f,g,t;e.isCircular?t=["M",d[0]+b.plotLeft,d[1]+b.plotTop,"L",k.x,k.y]:"circle"===e.options.gridLineInterpolation?(a=e.translate(a))&&(t=e.getLinePath(0,
a)):(r(b.xAxis,function(a){a.pane===e.pane&&(f=a)}),t=[],a=e.translate(a),d=f.tickPositions,f.autoConnect&&(d=d.concat([d[0]])),c&&(d=[].concat(d).reverse()),r(d,function(c,e){g=f.getPosition(c,a);t.push(e?"L":"M",g.x,g.y)}));return t},getTitlePosition:function(){var a=this.center,c=this.chart,b=this.options.title;return{x:c.plotLeft+a[0]+(b.x||0),y:c.plotTop+a[1]-{high:.5,middle:.25,low:0}[b.align]*a[2]+(b.y||0)}}};a(f,"init",function(a,d,b){var e=d.angular,p=d.polar,f=b.isX,y=e&&f,h,t=d.options,
m=this.pane=d.pane[b.pane||0],r=m.options;if(e){if(v(this,y?c:k),h=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else p&&(v(this,k),this.defaultRadialOptions=(h=f)?this.defaultRadialXOptions:n(this.defaultYAxisOptions,this.defaultRadialYOptions));e||p?(this.isRadial=!0,d.inverted=!1,t.chart.zoomType=null):this.isRadial=!1;h&&(m.axis=this);a.call(this,d,b);y||!e&&!p||(a=this.options,this.angleRad=(a.angle||0)*Math.PI/180,this.startAngleRad=(r.startAngle-90)*Math.PI/180,this.endAngleRad=
(g(r.endAngle,r.startAngle+360)-90)*Math.PI/180,this.offset=a.offset||0,this.isCircular=h)});a(f,"autoLabelAlign",function(a){if(!this.isRadial)return a.apply(this,[].slice.call(arguments,1))});a(b,"getPosition",function(a,c,b,k,f){var e=this.axis;return e.getPosition?e.getPosition(b):a.call(this,c,b,k,f)});a(b,"getLabelPosition",function(a,c,b,k,f,q,y,h,t){var d=this.axis,e=q.y,p=20,l=q.align,u=(d.translate(this.pos)+d.startAngleRad+Math.PI/2)/Math.PI*180%360;d.isRadial?(a=d.getPosition(this.pos,
d.center[2]/2+g(q.distance,-25)),"auto"===q.rotation?k.attr({rotation:u}):null===e&&(e=d.chart.renderer.fontMetrics(k.styles.fontSize).b-k.getBBox().height/2),null===l&&(d.isCircular?(this.label.getBBox().width>d.len*d.tickInterval/(d.max-d.min)&&(p=0),l=u>p&&u<180-p?"left":u>180+p&&u<360-p?"right":"center"):l="center",k.attr({align:l})),a.x+=q.x,a.y+=e):a=a.call(this,c,b,k,f,q,y,h,t);return a});a(b,"getMarkPath",function(a,c,b,k,f,q,y){var d=this.axis;d.isRadial?(a=d.getPosition(this.pos,d.center[2]/
2+k),c=["M",c,b,"L",a.x,a.y]):c=a.call(this,c,b,k,f,q,y);return c})})(x);(function(b){var r=b.each,v=b.pick,w=b.defined,n=b.seriesType,h=b.seriesTypes,g=b.Series.prototype,m=b.Point.prototype;n("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}},
{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var c=this.chart,b=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=b.x-c.plotLeft;a.plotHigh=b.y-c.plotTop;a.plotLowX=a.plotX},translate:function(){var a=this,c=a.yAxis,b=!!a.modifyValue;h.area.prototype.translate.apply(a);r(a.points,function(k){var e=k.low,d=k.high,p=k.plotY;null===d||
null===e?(k.isNull=!0,k.plotY=null):(k.plotLow=p,k.plotHigh=c.translate(b?a.modifyValue(d,k):d,0,1,0,1),b&&(k.yBottom=k.plotHigh))});this.chart.polar&&r(this.points,function(c){a.highToXY(c);c.tooltipPos=[(c.plotHighX+c.plotLowX)/2,(c.plotHigh+c.plotLow)/2]})},getGraphPath:function(a){var c=[],b=[],f,e=h.area.prototype.getGraphPath,d,p,u;u=this.options;var l=this.chart.polar&&!1!==u.connectEnds,q=u.connectNulls,y=u.step;a=a||this.points;for(f=a.length;f--;)d=a[f],d.isNull||l||q||a[f+1]&&!a[f+1].isNull||
b.push({plotX:d.plotX,plotY:d.plotY,doCurve:!1}),p={polarPlotY:d.polarPlotY,rectPlotX:d.rectPlotX,yBottom:d.yBottom,plotX:v(d.plotHighX,d.plotX),plotY:d.plotHigh,isNull:d.isNull},b.push(p),c.push(p),d.isNull||l||q||a[f-1]&&!a[f-1].isNull||b.push({plotX:d.plotX,plotY:d.plotY,doCurve:!1});a=e.call(this,a);y&&(!0===y&&(y="left"),u.step={left:"right",center:"center",right:"left"}[y]);c=e.call(this,c);b=e.call(this,b);u.step=y;u=[].concat(a,c);this.chart.polar||"M"!==b[0]||(b[0]="L");this.graphPath=u;
this.areaPath=this.areaPath.concat(a,b);u.isArea=!0;u.xMap=a.xMap;this.areaPath.xMap=a.xMap;return u},drawDataLabels:function(){var a=this.data,c=a.length,b,f=[],e=this.options.dataLabels,d=e.align,p=e.verticalAlign,u=e.inside,l,q,y=this.chart.inverted;if(e.enabled||this._hasPointLabels){for(b=c;b--;)if(l=a[b])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.y=l.high,l._plotY=l.plotY,l.plotY=l.plotHigh,f[b]=l.dataLabel,l.dataLabel=l.dataLabelUpper,l.below=q,y?d||(e.align=q?"right":"left"):p||(e.verticalAlign=
q?"top":"bottom"),e.x=e.xHigh,e.y=e.yHigh;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments);for(b=c;b--;)if(l=a[b])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.dataLabelUpper=l.dataLabel,l.dataLabel=f[b],l.y=l.low,l.plotY=l._plotY,l.below=!q,y?d||(e.align=q?"left":"right"):p||(e.verticalAlign=q?"bottom":"top"),e.x=e.xLow,e.y=e.yLow;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments)}e.align=d;e.verticalAlign=p},alignDataLabel:function(){h.column.prototype.alignDataLabel.apply(this,
arguments)},drawPoints:function(){var a=this.points.length,c,b;g.drawPoints.apply(this,arguments);for(b=0;b<a;)c=this.points[b],c.lowerGraphic=c.graphic,c.graphic=c.upperGraphic,c._plotY=c.plotY,c._plotX=c.plotX,c.plotY=c.plotHigh,w(c.plotHighX)&&(c.plotX=c.plotHighX),b++;g.drawPoints.apply(this,arguments);for(b=0;b<a;)c=this.points[b],c.upperGraphic=c.graphic,c.graphic=c.lowerGraphic,c.plotY=c._plotY,c.plotX=c._plotX,b++},setStackedPoints:b.noop},{setState:function(){var a=this.state,c=this.series,
b=c.chart.polar;w(this.plotHigh)||(this.plotHigh=c.yAxis.toPixels(this.high,!0));w(this.plotLow)||(this.plotLow=this.plotY=c.yAxis.toPixels(this.low,!0));m.setState.apply(this,arguments);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;b&&(this.plotX=this.plotHighX);this.state=a;c.stateMarkerGraphic&&(c.lowerStateMarkerGraphic=c.stateMarkerGraphic,c.stateMarkerGraphic=c.upperStateMarkerGraphic);m.setState.apply(this,arguments);this.plotY=this.plotLow;this.graphic=this.lowerGraphic;b&&(this.plotX=
this.plotLowX);c.stateMarkerGraphic&&(c.upperStateMarkerGraphic=c.stateMarkerGraphic,c.stateMarkerGraphic=c.lowerStateMarkerGraphic)},haloPath:function(){var a=this.series.chart.polar,c;this.plotY=this.plotLow;a&&(this.plotX=this.plotLowX);c=m.haloPath.apply(this,arguments);this.plotY=this.plotHigh;a&&(this.plotX=this.plotHighX);return c=c.concat(m.haloPath.apply(this,arguments))},destroy:function(){this.upperGraphic&&(this.upperGraphic=this.upperGraphic.destroy());return m.destroy.apply(this,arguments)}})})(x);
(function(b){var r=b.seriesType;r("areasplinerange","arearange",null,{getPointSpline:b.seriesTypes.spline.prototype.getPointSpline})})(x);(function(b){var r=b.defaultPlotOptions,v=b.each,w=b.merge,n=b.noop,h=b.pick,g=b.seriesType,m=b.seriesTypes.column.prototype;g("columnrange","arearange",w(r.column,r.arearange,{lineWidth:1,pointRange:null,marker:null,states:{hover:{halo:!1}}}),{translate:function(){var a=this,c=a.yAxis,b=a.xAxis,f=b.startAngleRad,e,d=a.chart,p=a.xAxis.isRadial,u=Math.max(d.chartWidth,
d.chartHeight)+999,l;m.translate.apply(a);v(a.points,function(k){var q=k.shapeArgs,g=a.options.minPointLength,t,m;k.plotHigh=l=Math.min(Math.max(-u,c.translate(k.high,0,1,0,1)),u);k.plotLow=Math.min(Math.max(-u,k.plotY),u);m=l;t=h(k.rectPlotY,k.plotY)-l;Math.abs(t)<g?(g-=t,t+=g,m-=g/2):0>t&&(t*=-1,m-=t);p?(e=k.barX+f,k.shapeType="path",k.shapeArgs={d:a.polarArc(m+t,m,e,e+k.pointWidth)}):(q.height=t,q.y=m,k.tooltipPos=d.inverted?[c.len+c.pos-d.plotLeft-m-t/2,b.len+b.pos-d.plotTop-q.x-q.width/2,t]:
[b.left-d.plotLeft+q.x+q.width/2,c.pos-d.plotTop+m+t/2,t])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:n,getSymbol:n,crispCol:m.crispCol,drawPoints:m.drawPoints,drawTracker:m.drawTracker,getColumnMetrics:m.getColumnMetrics,animate:function(){return m.animate.apply(this,arguments)},polarArc:function(){return m.polarArc.apply(this,arguments)},pointAttribs:m.pointAttribs},{setState:m.pointClass.prototype.setState})})(x);(function(b){var r=b.each,v=b.isNumber,w=b.merge,n=b.pick,
h=b.pInt,g=b.Series,m=b.seriesType,a=b.TrackerMixin;m("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:b.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,f=a.center;this.generatePoints();r(this.points,function(c){var d=
w(b.dial,c.dial),e=h(n(d.radius,80))*f[2]/200,k=h(n(d.baseLength,70))*e/100,l=h(n(d.rearLength,10))*e/100,q=d.baseWidth||3,g=d.topWidth||1,m=b.overshoot,t=a.startAngleRad+a.translate(c.y,null,null,null,!0);v(m)?(m=m/180*Math.PI,t=Math.max(a.startAngleRad-m,Math.min(a.endAngleRad+m,t))):!1===b.wrap&&(t=Math.max(a.startAngleRad,Math.min(a.endAngleRad,t)));t=180*t/Math.PI;c.shapeType="path";c.shapeArgs={d:d.path||["M",-l,-q/2,"L",k,-q/2,e,-g/2,e,g/2,k,q/2,-l,q/2,"z"],translateX:f[0],translateY:f[1],
rotation:t};c.plotX=f[0];c.plotY=f[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,f=a.pivot,e=a.options,d=e.pivot,p=a.chart.renderer;r(a.points,function(c){var b=c.graphic,d=c.shapeArgs,k=d.d,f=w(e.dial,c.dial);b?(b.animate(d),d.d=k):(c.graphic=p[c.shapeType](d).attr({rotation:d.rotation,zIndex:1}).addClass("highcharts-dial").add(a.group),c.graphic.attr({stroke:f.borderColor||"none","stroke-width":f.borderWidth||0,fill:f.backgroundColor||"#000000"}))});f?f.animate({translateX:b[0],translateY:b[1]}):
(a.pivot=p.circle(0,0,n(d.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(b[0],b[1]).add(a.group),a.pivot.attr({"stroke-width":d.borderWidth||0,stroke:d.borderColor||"#cccccc",fill:d.backgroundColor||"#000000"}))},animate:function(a){var c=this;a||(r(c.points,function(a){var b=a.graphic;b&&(b.attr({rotation:180*c.yAxis.startAngleRad/Math.PI}),b.animate({rotation:a.shapeArgs.rotation},c.options.animation))}),c.animate=null)},render:function(){this.group=this.plotGroup("group","series",
this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);g.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,b){g.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();n(b,!0)&&this.chart.redraw()},drawTracker:a&&a.drawTrackerPoint},{setState:function(a){this.state=a}})})(x);(function(b){var r=b.each,v=b.noop,w=b.pick,n=b.seriesType,h=b.seriesTypes;n("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},
whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(b){return[b.low,b.q1,b.median,b.q3,b.high]},pointValKey:"high",pointAttribs:function(b){var h=this.options,a=b&&b.color||this.color;return{fill:b.fillColor||h.fillColor||a,stroke:h.lineColor||a,"stroke-width":h.lineWidth||0}},drawDataLabels:v,translate:function(){var b=this.yAxis,m=this.pointArrayMap;h.column.prototype.translate.apply(this);
r(this.points,function(a){r(m,function(c){null!==a[c]&&(a[c+"Plot"]=b.translate(a[c],0,1,0,1))})})},drawPoints:function(){var b=this,h=b.options,a=b.chart.renderer,c,k,f,e,d,p,u=0,l,q,y,n,t=!1!==b.doQuartiles,v,A=b.options.whiskerLength;r(b.points,function(g){var m=g.graphic,r=m?"animate":"attr",J=g.shapeArgs,x={},C={},H={},I=g.color||b.color;void 0!==g.plotY&&(l=J.width,q=Math.floor(J.x),y=q+l,n=Math.round(l/2),c=Math.floor(t?g.q1Plot:g.lowPlot),k=Math.floor(t?g.q3Plot:g.lowPlot),f=Math.floor(g.highPlot),
e=Math.floor(g.lowPlot),m||(g.graphic=m=a.g("point").add(b.group),g.stem=a.path().addClass("highcharts-boxplot-stem").add(m),A&&(g.whiskers=a.path().addClass("highcharts-boxplot-whisker").add(m)),t&&(g.box=a.path(void 0).addClass("highcharts-boxplot-box").add(m)),g.medianShape=a.path(void 0).addClass("highcharts-boxplot-median").add(m)),x.stroke=g.stemColor||h.stemColor||I,x["stroke-width"]=w(g.stemWidth,h.stemWidth,h.lineWidth),x.dashstyle=g.stemDashStyle||h.stemDashStyle,g.stem.attr(x),A&&(C.stroke=
g.whiskerColor||h.whiskerColor||I,C["stroke-width"]=w(g.whiskerWidth,h.whiskerWidth,h.lineWidth),g.whiskers.attr(C)),t&&(m=b.pointAttribs(g),g.box.attr(m)),H.stroke=g.medianColor||h.medianColor||I,H["stroke-width"]=w(g.medianWidth,h.medianWidth,h.lineWidth),g.medianShape.attr(H),p=g.stem.strokeWidth()%2/2,u=q+n+p,g.stem[r]({d:["M",u,k,"L",u,f,"M",u,c,"L",u,e]}),t&&(p=g.box.strokeWidth()%2/2,c=Math.floor(c)+p,k=Math.floor(k)+p,q+=p,y+=p,g.box[r]({d:["M",q,k,"L",q,c,"L",y,c,"L",y,k,"L",q,k,"z"]})),
A&&(p=g.whiskers.strokeWidth()%2/2,f+=p,e+=p,v=/%$/.test(A)?n*parseFloat(A)/100:A/2,g.whiskers[r]({d:["M",u-v,f,"L",u+v,f,"M",u-v,e,"L",u+v,e]})),d=Math.round(g.medianPlot),p=g.medianShape.strokeWidth()%2/2,d+=p,g.medianShape[r]({d:["M",q,d,"L",y,d]}))})},setStackedPoints:v})})(x);(function(b){var r=b.each,v=b.noop,w=b.seriesType,n=b.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(b){return[b.low,b.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:n.arearange?function(){var b=this.pointValKey;n.arearange.prototype.drawDataLabels.call(this);r(this.data,function(g){g.y=g[b]})}:v,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||n.column.prototype.getColumnMetrics.call(this)}})})(x);(function(b){var r=b.correctFloat,v=b.isNumber,w=b.pick,n=b.Point,h=b.Series,
g=b.seriesType,m=b.seriesTypes;g("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var a=this.options,c=this.yAxis,b,f,e,d,p,g,l,q,h,n,t=w(a.minPointLength,5),v=t/2,x=a.threshold,D=a.stacking,z;m.column.prototype.translate.apply(this);q=h=x;f=this.points;b=0;for(a=f.length;b<a;b++)e=f[b],l=this.processedYData[b],d=e.shapeArgs,p=D&&c.stacks[(this.negStacks&&l<x?"-":
"")+this.stackKey],z=this.getStackIndicator(z,e.x,this.index),n=p?p[e.x].points[z.key]:[0,l],e.isSum?e.y=r(l):e.isIntermediateSum&&(e.y=r(l-h)),g=Math.max(q,q+e.y)+n[0],d.y=c.translate(g,0,1,0,1),e.isSum?(d.y=c.translate(n[1],0,1,0,1),d.height=Math.min(c.translate(n[0],0,1,0,1),c.len)-d.y):e.isIntermediateSum?(d.y=c.translate(n[1],0,1,0,1),d.height=Math.min(c.translate(h,0,1,0,1),c.len)-d.y,h=n[1]):(d.height=0<l?c.translate(q,0,1,0,1)-d.y:c.translate(q,0,1,0,1)-c.translate(q-l,0,1,0,1),q+=p&&p[e.x]?
p[e.x].total:l),0>d.height&&(d.y+=d.height,d.height*=-1),e.plotY=d.y=Math.round(d.y)-this.borderWidth%2/2,d.height=Math.max(Math.round(d.height),.001),e.yBottom=d.y+d.height,d.height<=t&&!e.isNull?(d.height=t,d.y-=v,e.plotY=d.y,e.minPointLengthOffset=0>e.y?-v:v):e.minPointLengthOffset=0,d=e.plotY+(e.negative?d.height:0),this.chart.inverted?e.tooltipPos[0]=c.len-d:e.tooltipPos[1]=d},processData:function(a){var b=this.yData,k=this.options.data,f,e=b.length,d,p,g,l,q,n;p=d=g=l=this.options.threshold||
0;for(n=0;n<e;n++)q=b[n],f=k&&k[n]?k[n]:{},"sum"===q||f.isSum?b[n]=r(p):"intermediateSum"===q||f.isIntermediateSum?b[n]=r(d):(p+=q,d+=q),g=Math.min(p,g),l=Math.max(p,l);h.prototype.processData.call(this,a);this.options.stacking||(this.dataMin=g,this.dataMax=l)},toYData:function(a){return a.isSum?0===a.x?null:"sum":a.isIntermediateSum?0===a.x?null:"intermediateSum":a.y},pointAttribs:function(a,b){var c=this.options.upColor;c&&!a.options.color&&(a.color=0<a.y?c:null);a=m.column.prototype.pointAttribs.call(this,
a,b);delete a.dashstyle;return a},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var a=this.data,b=a.length,k=this.graph.strokeWidth()+this.borderWidth,k=Math.round(k)%2/2,f=this.yAxis.reversed,e=[],d,p,g;for(g=1;g<b;g++){p=a[g].shapeArgs;d=a[g-1].shapeArgs;p=["M",d.x+d.width,d.y+a[g-1].minPointLengthOffset+k,"L",p.x,d.y+a[g-1].minPointLengthOffset+k];if(0>a[g-1].y&&!f||0<a[g-1].y&&f)p[2]+=d.height,p[5]+=d.height;e=e.concat(p)}return e},drawGraph:function(){h.prototype.drawGraph.call(this);
this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var a=this.options,b,k;h.prototype.setStackedPoints.apply(this,arguments);b=this.stackedYData?this.stackedYData.length:0;for(k=1;k<b;k++)a.data[k].isSum||a.data[k].isIntermediateSum||(this.stackedYData[k]+=this.stackedYData[k-1])},getExtremes:function(){if(this.options.stacking)return h.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var a=n.prototype.getClassName.call(this);this.isSum?a+=" highcharts-sum":
this.isIntermediateSum&&(a+=" highcharts-intermediate-sum");return a},isValid:function(){return v(this.y,!0)||this.isSum||this.isIntermediateSum}})})(x);(function(b){var r=b.Series,v=b.seriesType,w=b.seriesTypes;v("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var b=r.prototype.getGraphPath.call(this),h=b.length+1;h--;)(h===b.length||"M"===b[h])&&0<h&&b.splice(h,
0,"z");return this.areaPath=b},drawGraph:function(){this.options.fillColor=this.color;w.area.prototype.drawGraph.call(this)},drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,drawTracker:r.prototype.drawTracker,setStackedPoints:b.noop})})(x);(function(b){var r=b.arrayMax,v=b.arrayMin,w=b.Axis,n=b.color,h=b.each,g=b.isNumber,m=b.noop,a=b.pick,c=b.pInt,k=b.Point,f=b.Series,e=b.seriesType,d=b.seriesTypes;e("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},
marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(b,c){var d=a(this.options.marker.fillOpacity,
.5);b=f.prototype.pointAttribs.call(this,b,c);1!==d&&(b.fill=n(b.fill).setOpacity(d).get("rgba"));return b},getRadii:function(a,b,c,d){var e,k,f,g=this.zData,p=[],l=this.options,q="width"!==l.sizeBy,h=l.zThreshold,u=b-a;k=0;for(e=g.length;k<e;k++)f=g[k],l.sizeByAbsoluteValue&&null!==f&&(f=Math.abs(f-h),b=Math.max(b-h,Math.abs(a-h)),a=0),null===f?f=null:f<a?f=c/2-1:(f=0<u?(f-a)/u:.5,q&&0<=f&&(f=Math.sqrt(f)),f=Math.ceil(c+f*(d-c))/2),p.push(f);this.radii=p},animate:function(a){var b=this.options.animation;
a||(h(this.points,function(a){var c=a.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:a.plotX,y:a.plotY,width:1,height:1}),c.animate(d,b))}),this.animate=null)},translate:function(){var a,c=this.data,e,f,k=this.radii;d.scatter.prototype.translate.call(this);for(a=c.length;a--;)e=c[a],f=k?k[a]:0,g(f)&&f>=this.minPxSize/2?(e.marker=b.extend(e.marker,{radius:f,width:2*f,height:2*f}),e.dlBox={x:e.plotX-f,y:e.plotY-f,width:2*f,height:2*f}):e.shapeArgs=e.plotY=e.dlBox=void 0},
alignDataLabel:d.column.prototype.alignDataLabel,buildKDTree:m,applyZones:m},{haloPath:function(a){return k.prototype.haloPath.call(this,0===a?0:(this.marker?this.marker.radius||0:0)+a)},ttBelow:!1});w.prototype.beforePadding=function(){var b=this,d=this.len,e=this.chart,f=0,k=d,n=this.isXAxis,m=n?"xData":"yData",w=this.min,x={},D=Math.min(e.plotWidth,e.plotHeight),z=Number.MAX_VALUE,E=-Number.MAX_VALUE,F=this.max-w,B=d/F,G=[];h(this.series,function(d){var f=d.options;!d.bubblePadding||!d.visible&&
e.options.chart.ignoreHiddenSeries||(b.allowZoomOutside=!0,G.push(d),n&&(h(["minSize","maxSize"],function(a){var b=f[a],d=/%$/.test(b),b=c(b);x[a]=d?D*b/100:b}),d.minPxSize=x.minSize,d.maxPxSize=Math.max(x.maxSize,x.minSize),d=d.zData,d.length&&(z=a(f.zMin,Math.min(z,Math.max(v(d),!1===f.displayNegative?f.zThreshold:-Number.MAX_VALUE))),E=a(f.zMax,Math.max(E,r(d))))))});h(G,function(a){var c=a[m],d=c.length,e;n&&a.getRadii(z,E,a.minPxSize,a.maxPxSize);if(0<F)for(;d--;)g(c[d])&&b.dataMin<=c[d]&&c[d]<=
b.dataMax&&(e=a.radii[d],f=Math.min((c[d]-w)*B-e,f),k=Math.max((c[d]-w)*B+e,k))});G.length&&0<F&&!this.isLog&&(k-=d,B*=(d+f-k)/d,h([["min","userMin",f],["max","userMax",k]],function(c){void 0===a(b.options[c[0]],b[c[1]])&&(b[c[0]]+=c[2]/B)}))}})(x);(function(b){function r(a,b){var c=this.chart,f=this.options.animation,e=this.group,d=this.markerGroup,g=this.xAxis.center,h=c.plotLeft,l=c.plotTop;c.polar?c.renderer.isSVG&&(!0===f&&(f={}),b?(a={translateX:g[0]+h,translateY:g[1]+l,scaleX:.001,scaleY:.001},
e.attr(a),d&&d.attr(a)):(a={translateX:h,translateY:l,scaleX:1,scaleY:1},e.animate(a,f),d&&d.animate(a,f),this.animate=null)):a.call(this,b)}var v=b.each,w=b.pick,n=b.seriesTypes,h=b.wrap,g=b.Series.prototype,m=b.Pointer.prototype;g.searchPointByAngle=function(a){var b=this.chart,k=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(a.chartX-k[0]-b.plotLeft,a.chartY-k[1]-b.plotTop)})};g.getConnectors=function(a,b,k,f){var c,d,g,h,l,n,m,r;d=f?1:0;c=0<=b&&b<=a.length-
1?b:0>b?a.length-1+b:0;b=0>c-1?a.length-(1+d):c-1;d=c+1>a.length-1?d:c+1;g=a[b];d=a[d];h=g.plotX;g=g.plotY;l=d.plotX;n=d.plotY;d=a[c].plotX;c=a[c].plotY;h=(1.5*d+h)/2.5;g=(1.5*c+g)/2.5;l=(1.5*d+l)/2.5;m=(1.5*c+n)/2.5;n=Math.sqrt(Math.pow(h-d,2)+Math.pow(g-c,2));r=Math.sqrt(Math.pow(l-d,2)+Math.pow(m-c,2));h=Math.atan2(g-c,h-d);m=Math.PI/2+(h+Math.atan2(m-c,l-d))/2;Math.abs(h-m)>Math.PI/2&&(m-=Math.PI);h=d+Math.cos(m)*n;g=c+Math.sin(m)*n;l=d+Math.cos(Math.PI+m)*r;m=c+Math.sin(Math.PI+m)*r;d={rightContX:l,
rightContY:m,leftContX:h,leftContY:g,plotX:d,plotY:c};k&&(d.prevPointCont=this.getConnectors(a,b,!1,f));return d};h(g,"buildKDTree",function(a){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");a.apply(this)});g.toXY=function(a){var b,g=this.chart,f=a.plotX;b=a.plotY;a.rectPlotX=f;a.rectPlotY=b;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-g.plotLeft;a.plotY=a.polarPlotY=b.y-g.plotTop;this.kdByAngle?(g=
(f/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>g&&(g+=360),a.clientX=g):a.clientX=a.plotX};n.spline&&(h(n.spline.prototype,"getPointSpline",function(a,b,g,f){this.chart.polar?f?(a=this.getConnectors(b,f,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",g.plotX,g.plotY]:a=a.call(this,b,g,f);return a}),n.areasplinerange&&(n.areasplinerange.prototype.getPointSpline=n.spline.prototype.getPointSpline));h(g,"translate",
function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])});h(g,"getGraphPath",function(a,b){var c=this,f,e,d;if(this.chart.polar){b=b||this.points;for(f=0;f<b.length;f++)if(!b[f].isNull){e=f;break}!1!==this.options.connectEnds&&void 0!==e&&(this.connectEnds=!0,b.splice(b.length,0,b[e]),d=!0);v(b,function(a){void 0===a.polarPlotY&&c.toXY(a)})}f=a.apply(this,[].slice.call(arguments,
1));d&&b.pop();return f});h(g,"animate",r);n.column&&(n=n.column.prototype,n.polarArc=function(a,b,g,f){var c=this.xAxis.center,d=this.yAxis.len;return this.chart.renderer.symbols.arc(c[0],c[1],d-b,null,{start:g,end:f,innerR:d-w(a,d)})},h(n,"animate",r),h(n,"translate",function(a){var b=this.xAxis,g=b.startAngleRad,f,e,d;this.preventPostTranslate=!0;a.call(this);if(b.isRadial)for(f=this.points,d=f.length;d--;)e=f[d],a=e.barX+g,e.shapeType="path",e.shapeArgs={d:this.polarArc(e.yBottom,e.plotY,a,a+
e.pointWidth)},this.toXY(e),e.tooltipPos=[e.plotX,e.plotY],e.ttBelow=e.plotY>b.center[1]}),h(n,"alignDataLabel",function(a,b,k,f,e,d){this.chart.polar?(a=b.rectPlotX/Math.PI*180,null===f.align&&(f.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===f.verticalAlign&&(f.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),g.alignDataLabel.call(this,b,k,f,e,d)):a.call(this,b,k,f,e,d)}));h(m,"getCoordinates",function(a,b){var c=this.chart,f={xAxis:[],yAxis:[]};c.polar?v(c.axes,function(a){var d=
a.isXAxis,e=a.center,g=b.chartX-e[0]-c.plotLeft,e=b.chartY-e[1]-c.plotTop;f[d?"xAxis":"yAxis"].push({axis:a,value:a.translate(d?Math.PI-Math.atan2(g,e):Math.sqrt(Math.pow(g,2)+Math.pow(e,2)),!0)})}):f=a.call(this,b);return f});h(b.Chart.prototype,"getAxes",function(a){this.pane||(this.pane=[]);v(b.splat(this.options.pane),function(a){new b.Pane(a,this)},this);a.call(this)});h(b.Chart.prototype,"drawChartBox",function(a){a.call(this);v(this.pane,function(a){a.render()})});h(b.Chart.prototype,"get",
function(a,c){return b.find(this.pane,function(a){return a.options.id===c})||a.call(this,c)})})(x)});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.14 (2017-07-28)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(M,S){"object"===typeof module&&module.exports?module.exports=M.document?S(M):S:M.Highcharts=S(M)})("undefined"!==typeof window?window:this,function(M){M=function(){var a=window,C=a.document,A=a.navigator&&a.navigator.userAgent||"",F=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,E=/(edge|msie|trident)/i.test(A)&&!window.opera,m=!F,f=/Firefox/.test(A),l=f&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.14",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:l,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:E,isWebKit:/AppleWebKit/.test(A),isFirefox:f,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,vml:m,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var C=[],A=a.charts,F=a.doc,E=a.win;a.error=function(m,f){m=a.isNumber(m)?"Highcharts error #"+
m+": www.highcharts.com/errors/"+m:m;if(f)throw Error(m);E.console&&console.log(m)};a.Fx=function(a,f,l){this.options=f;this.elem=a;this.prop=l};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],l=[],r=this.now,u=a.length,t;if(1===r)l=this.toD;else if(u===f.length&&1>r)for(;u--;)t=parseFloat(a[u]),l[u]=isNaN(t)?a[u]:r*parseFloat(f[u]-t)+t;else l=f;this.elem.attr("d",l,null,!0)},update:function(){var a=this.elem,f=this.prop,l=this.now,r=this.options.step;if(this[f+"Setter"])this[f+
"Setter"]();else a.attr?a.element&&a.attr(f,l,null,!0):a.style[f]=l+this.unit;r&&r.call(a,l,this)},run:function(a,f,l){var r=this,m=function(a){return m.stopped?!1:r.step(a)},t;this.startTime=+new Date;this.start=a;this.end=f;this.unit=l;this.now=this.start;this.pos=0;m.elem=this.elem;m.prop=this.prop;m()&&1===C.push(m)&&(m.timerId=setInterval(function(){for(t=0;t<C.length;t++)C[t]()||C.splice(t--,1);C.length||clearInterval(m.timerId)},13))},step:function(m){var f=+new Date,l,r=this.options,u=this.elem,
t=r.complete,g=r.duration,d=r.curAnim;u.attr&&!u.element?m=!1:m||f>=g+this.startTime?(this.now=this.end,this.pos=1,this.update(),l=d[this.prop]=!0,a.objectEach(d,function(a){!0!==a&&(l=!1)}),l&&t&&t.call(u),m=!1):(this.pos=r.easing((f-this.startTime)/g),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,f,l){function r(a){var c,e;for(n=a.length;n--;)c="M"===a[n]||"L"===a[n],e=/[a-zA-Z]/.test(a[n+3]),c&&e&&a.splice(n+1,0,a[n+1],a[n+2],a[n+1],a[n+2])}
function u(a,c){for(;a.length<v;){a[0]=c[v-a.length];var b=a.slice(0,e);[].splice.apply(a,[0,0].concat(b));D&&(b=a.slice(a.length-e),[].splice.apply(a,[a.length,0].concat(b)),n--)}a[0]="M"}function t(a,c){for(var q=(v-a.length)/e;0<q&&q--;)y=a.slice().splice(a.length/J-e,e*J),y[0]=c[v-e-q*e],b&&(y[e-6]=y[e-2],y[e-5]=y[e-1]),[].splice.apply(a,[a.length/J,0].concat(y)),D&&q--}f=f||"";var g,d=m.startX,k=m.endX,b=-1<f.indexOf("C"),e=b?7:3,v,y,n;f=f.split(" ");l=l.slice();var D=m.isArea,J=D?2:1,c;b&&(r(f),
r(l));if(d&&k){for(n=0;n<d.length;n++)if(d[n]===k[0]){g=n;break}else if(d[0]===k[k.length-d.length+n]){g=n;c=!0;break}void 0===g&&(f=[])}f.length&&a.isNumber(g)&&(v=l.length+g*J*e,c?(u(f,l),t(l,f)):(u(l,f),t(f,l)));return[f,l]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,f){var m;a||(a={});for(m in f)a[m]=f[m];return a};a.merge=function(){var m,f=arguments,l,r={},u=
function(f,g){"object"!==typeof f&&(f={});a.objectEach(g,function(d,k){!a.isObject(d,!0)||a.isClass(d)||a.isDOMElement(d)?f[k]=g[k]:f[k]=u(f[k]||{},d)});return f};!0===f[0]&&(r=f[1],f=Array.prototype.slice.call(f,2));l=f.length;for(m=0;m<l;m++)r=u(r,f[m]);return r};a.pInt=function(a,f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,
f){return!!m&&"object"===typeof m&&(!f||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var f=m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,f){for(var m=a.length;m--;)if(a[m]===f){a.splice(m,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,f,l){var r;a.isString(f)?a.defined(l)?
m.setAttribute(f,l):m&&m.getAttribute&&(r=m.getAttribute(f)):a.defined(f)&&a.isObject(f)&&a.objectEach(f,function(a,f){m.setAttribute(f,a)});return r};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,f,l){if(f)return setTimeout(a,f,l);a.call(0,l)};a.pick=function(){var a=arguments,f,l,r=a.length;for(f=0;f<r;f++)if(l=a[f],void 0!==l&&null!==l)return l};a.css=function(m,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+100*f.opacity+")");a.extend(m.style,
f)};a.createElement=function(m,f,l,r,u){m=F.createElement(m);var t=a.css;f&&a.extend(m,f);u&&t(m,{padding:0,border:"none",margin:0});l&&t(m,l);r&&r.appendChild(m);return m};a.extendClass=function(m,f){var l=function(){};l.prototype=new m;a.extend(l.prototype,f);return l};a.pad=function(a,f,l){return Array((f||2)+1-String(a).length).join(l||0)+a};a.relativeLength=function(a,f,l){return/%$/.test(a)?f*parseFloat(a)/100+(l||0):parseFloat(a)};a.wrap=function(a,f,l){var r=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),
f=arguments,g=this;g.proceed=function(){r.apply(g,arguments.length?arguments:f)};a.unshift(r);a=l.apply(this,a);g.proceed=null;return a}};a.getTZOffset=function(m){var f=a.Date;return 6E4*(f.hcGetTimezoneOffset&&f.hcGetTimezoneOffset(m)||f.hcTimezoneOffset||0)};a.dateFormat=function(m,f,l){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";m=a.pick(m,"%Y-%m-%d %H:%M:%S");var r=a.Date,u=new r(f-a.getTZOffset(f)),t=u[r.hcGetHours](),g=u[r.hcGetDay](),d=u[r.hcGetDate](),k=u[r.hcGetMonth](),
b=u[r.hcGetFullYear](),e=a.defaultOptions.lang,v=e.weekdays,y=e.shortWeekdays,n=a.pad,r=a.extend({a:y?y[g]:v[g].substr(0,3),A:v[g],d:n(d),e:n(d,2," "),w:g,b:e.shortMonths[k],B:e.months[k],m:n(k+1),y:b.toString().substr(2,2),Y:b,H:n(t),k:t,I:n(t%12||12),l:t%12||12,M:n(u[r.hcGetMinutes]()),p:12>t?"AM":"PM",P:12>t?"am":"pm",S:n(u.getSeconds()),L:n(Math.round(f%1E3),3)},a.dateFormats);a.objectEach(r,function(a,e){for(;-1!==m.indexOf("%"+e);)m=m.replace("%"+e,"function"===typeof a?a(f):a)});return l?m.substr(0,
1).toUpperCase()+m.substr(1):m};a.formatSingle=function(m,f){var l=/\.([0-9])/,r=a.defaultOptions.lang;/f$/.test(m)?(l=(l=m.match(l))?l[1]:-1,null!==f&&(f=a.numberFormat(f,l,r.decimalPoint,-1<m.indexOf(",")?r.thousandsSep:""))):f=a.dateFormat(m,f);return f};a.format=function(m,f){for(var l="{",r=!1,u,t,g,d,k=[],b;m;){l=m.indexOf(l);if(-1===l)break;u=m.slice(0,l);if(r){u=u.split(":");t=u.shift().split(".");d=t.length;b=f;for(g=0;g<d;g++)b=b[t[g]];u.length&&(b=a.formatSingle(u.join(":"),b));k.push(b)}else k.push(u);
m=m.slice(l+1);l=(r=!r)?"}":"{"}k.push(m);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,f,l,r,u){var t,g=m;l=a.pick(l,1);t=m/l;f||(f=u?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===r&&(1===l?f=a.grep(f,function(a){return 0===a%1}):.1>=l&&(f=[1/l])));for(r=0;r<f.length&&!(g=f[r],u&&g*l>=m||!u&&t<=(f[r]+(f[r+1]||f[r]))/2);r++);return g=a.correctFloat(g*l,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,f){var l=a.length,r,m;for(m=0;m<l;m++)a[m].safeI=m;a.sort(function(a,g){r=f(a,g);return 0===r?a.safeI-g.safeI:r});for(m=0;m<l;m++)delete a[m].safeI};a.arrayMin=function(a){for(var f=a.length,l=a[0];f--;)a[f]<l&&(l=a[f]);return l};a.arrayMax=function(a){for(var f=a.length,l=a[0];f--;)a[f]>l&&(l=a[f]);return l};a.destroyObjectProperties=function(m,f){a.objectEach(m,function(a,r){a&&a!==f&&a.destroy&&a.destroy();delete m[r]})};a.discardElement=function(m){var f=a.garbageBin;f||(f=a.createElement("div"));
m&&f.appendChild(m);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||14))};a.setAnimation=function(m,f){f.renderer.globalAnimation=a.pick(m,f.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,f,l,r){m=+m||0;f=+f;var u=a.defaultOptions.lang,t=(m.toString().split(".")[1]||"").split("e")[0].length,
g,d,k=m.toString().split("e");-1===f?f=Math.min(t,20):a.isNumber(f)||(f=2);d=(Math.abs(k[1]?k[0]:m)+Math.pow(10,-Math.max(f,t)-1)).toFixed(f);t=String(a.pInt(d));g=3<t.length?t.length%3:0;l=a.pick(l,u.decimalPoint);r=a.pick(r,u.thousandsSep);m=(0>m?"-":"")+(g?t.substr(0,g)+r:"");m+=t.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+r);f&&(m+=l+d.slice(-f));k[1]&&(m+="e"+k[1]);return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,f,l){if("width"===f)return Math.min(m.offsetWidth,
m.scrollWidth)-a.getStyle(m,"padding-left")-a.getStyle(m,"padding-right");if("height"===f)return Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom");if(m=E.getComputedStyle(m,void 0))m=m.getPropertyValue(f),a.pick(l,!0)&&(m=a.pInt(m));return m};a.inArray=function(a,f){return f.indexOf?f.indexOf(a):[].indexOf.call(f,a)};a.grep=function(a,f){return[].filter.call(a,f)};a.find=function(a,f){return[].find.call(a,f)};a.map=function(a,f){for(var l=[],r=0,m=
a.length;r<m;r++)l[r]=f.call(a[r],a[r],r,a);return l};a.offset=function(a){var f=F.documentElement;a=a.getBoundingClientRect();return{top:a.top+(E.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(E.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(a,f){for(var l=C.length;l--;)C[l].elem!==a||f&&f!==C[l].prop||(C[l].stopped=!0)};a.each=function(a,f,l){return Array.prototype.forEach.call(a,f,l)};a.objectEach=function(a,f,l){for(var r in a)a.hasOwnProperty(r)&&f.call(l,a[r],r,a)};
a.addEvent=function(m,f,l){function r(a){a.target=a.srcElement||E;l.call(m,a)}var u=m.hcEvents=m.hcEvents||{};m.addEventListener?m.addEventListener(f,l,!1):m.attachEvent&&(m.hcEventsIE||(m.hcEventsIE={}),l.hcGetKey||(l.hcGetKey=a.uniqueKey()),m.hcEventsIE[l.hcGetKey]=r,m.attachEvent("on"+f,r));u[f]||(u[f]=[]);u[f].push(l);return function(){a.removeEvent(m,f,l)}};a.removeEvent=function(m,f,l){function r(a,b){m.removeEventListener?m.removeEventListener(a,b,!1):m.attachEvent&&(b=m.hcEventsIE[b.hcGetKey],
m.detachEvent("on"+a,b))}function u(){var d,b;m.nodeName&&(f?(d={},d[f]=!0):d=g,a.objectEach(d,function(a,d){if(g[d])for(b=g[d].length;b--;)r(d,g[d][b])}))}var t,g=m.hcEvents,d;g&&(f?(t=g[f]||[],l?(d=a.inArray(l,t),-1<d&&(t.splice(d,1),g[f]=t),r(f,l)):(u(),g[f]=[])):(u(),m.hcEvents={}))};a.fireEvent=function(m,f,l,r){var u;u=m.hcEvents;var t,g;l=l||{};if(F.createEvent&&(m.dispatchEvent||m.fireEvent))u=F.createEvent("Events"),u.initEvent(f,!0,!0),a.extend(u,l),m.dispatchEvent?m.dispatchEvent(u):m.fireEvent(f,
u);else if(u)for(u=u[f]||[],t=u.length,l.target||a.extend(l,{preventDefault:function(){l.defaultPrevented=!0},target:m,type:f}),f=0;f<t;f++)(g=u[f])&&!1===g.call(m,l)&&l.preventDefault();r&&!l.defaultPrevented&&r(l)};a.animate=function(m,f,l){var r,u="",t,g,d;a.isObject(l)||(d=arguments,l={duration:d[2],easing:d[3],complete:d[4]});a.isNumber(l.duration)||(l.duration=400);l.easing="function"===typeof l.easing?l.easing:Math[l.easing]||Math.easeInOutSine;l.curAnim=a.merge(f);a.objectEach(f,function(d,
b){a.stop(m,b);g=new a.Fx(m,l,b);t=null;"d"===b?(g.paths=g.initPath(m,m.d,f.d),g.toD=f.d,r=0,t=1):m.attr?r=m.attr(b):(r=parseFloat(a.getStyle(m,b))||0,"opacity"!==b&&(u="px"));t||(t=d);t&&t.match&&t.match("px")&&(t=t.replace(/px/g,""));g.run(r,t,u)})};a.seriesType=function(m,f,l,r,u){var t=a.getOptions(),g=a.seriesTypes;t.plotOptions[m]=a.merge(t.plotOptions[f],l);g[m]=a.extendClass(g[f]||function(){},r);g[m].prototype.type=m;u&&(g[m].prototype.pointClass=a.extendClass(a.Point,u));return g[m]};a.uniqueKey=
function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+f++}}();E.jQuery&&(E.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});F&&!F.defaultView&&(a.getStyle=function(m,f){var l={width:"clientWidth",height:"clientHeight"}[f];if(m.style[f])return a.pInt(m.style[f]);"opacity"===f&&(f="filter");if(l)return m.style.zoom=
1,Math.max(m[l]-2*a.getStyle(m,"padding"),0);m=m.currentStyle[f.replace(/\-(\w)/g,function(a,f){return f.toUpperCase()})];"filter"===f&&(m=m.replace(/alpha\(opacity=([0-9]+)\)/,function(a,f){return f/100}));return""===m?1:a.pInt(m)});Array.prototype.forEach||(a.each=function(a,f,l){for(var r=0,m=a.length;r<m;r++)if(!1===f.call(l,a[r],r,a))return r});Array.prototype.indexOf||(a.inArray=function(a,f){var l,r=0;if(f)for(l=f.length;r<l;r++)if(f[r]===a)return r;return-1});Array.prototype.filter||(a.grep=
function(a,f){for(var l=[],r=0,m=a.length;r<m;r++)f(a[r],r)&&l.push(a[r]);return l});Array.prototype.find||(a.find=function(a,f){var l,r=a.length;for(l=0;l<r;l++)if(f(a[l],l))return a[l]})})(M);(function(a){var C=a.each,A=a.isNumber,F=a.map,E=a.merge,m=a.pInt;a.Color=function(f){if(!(this instanceof a.Color))return new a.Color(f);this.init(f)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[m(a[1]),
m(a[2]),m(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(f){var l,r,m,t;if((this.input=f=this.names[f&&f.toLowerCase?f.toLowerCase():""]||f)&&f.stops)this.stops=F(f.stops,function(g){return new a.Color(g[1])});else if(f&&"#"===f.charAt()&&(l=f.length,f=parseInt(f.substr(1),16),7===l?r=[(f&16711680)>>16,(f&65280)>>
8,f&255,1]:4===l&&(r=[(f&3840)>>4|(f&3840)>>8,(f&240)>>4|f&240,(f&15)<<4|f&15,1])),!r)for(m=this.parsers.length;m--&&!r;)t=this.parsers[m],(l=t.regex.exec(f))&&(r=t.parse(l));this.rgba=r||[]},get:function(a){var f=this.input,r=this.rgba,m;this.stops?(m=E(f),m.stops=[].concat(m.stops),C(this.stops,function(f,g){m.stops[g]=[m.stops[g][0],f.get(a)]})):m=r&&A(r[0])?"rgb"===a||!a&&1===r[3]?"rgb("+r[0]+","+r[1]+","+r[2]+")":"a"===a?r[3]:"rgba("+r.join(",")+")":f;return m},brighten:function(a){var f,r=this.rgba;
if(this.stops)C(this.stops,function(f){f.brighten(a)});else if(A(a)&&0!==a)for(f=0;3>f;f++)r[f]+=m(255*a),0>r[f]&&(r[f]=0),255<r[f]&&(r[f]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,l){var f,m;a.rgba.length?(f=this.rgba,a=a.rgba,m=1!==a[3]||1!==f[3],a=(m?"rgba(":"rgb(")+Math.round(a[0]+(f[0]-a[0])*(1-l))+","+Math.round(a[1]+(f[1]-a[1])*(1-l))+","+Math.round(a[2]+(f[2]-a[2])*(1-l))+(m?","+(a[3]+(f[3]-a[3])*(1-l)):"")+")"):a=a.input||"none";return a}};a.color=
function(f){return new a.Color(f)}})(M);(function(a){var C,A,F=a.addEvent,E=a.animate,m=a.attr,f=a.charts,l=a.color,r=a.css,u=a.createElement,t=a.defined,g=a.deg2rad,d=a.destroyObjectProperties,k=a.doc,b=a.each,e=a.extend,v=a.erase,y=a.grep,n=a.hasTouch,D=a.inArray,J=a.isArray,c=a.isFirefox,G=a.isMS,q=a.isObject,B=a.isString,K=a.isWebKit,p=a.merge,z=a.noop,I=a.objectEach,L=a.pick,h=a.pInt,w=a.removeEvent,P=a.stop,H=a.svg,O=a.SVG_NS,Q=a.symbolSizes,R=a.win;C=a.SVGElement=function(){return this};e(C.prototype,
{opacity:1,SVG_NS:O,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,h){this.element="span"===h?u(h):k.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(x,h,c){h=a.animObject(L(h,this.renderer.globalAnimation,!0));0!==h.duration?(c&&(h.complete=c),E(this,x,h)):(this.attr(x,null,c),h.step&&h.step.call(this));return this},colorGradient:function(x,h,c){var w=this.renderer,
e,q,N,d,n,g,k,H,G,v,z=[],f;x.radialGradient?q="radialGradient":x.linearGradient&&(q="linearGradient");q&&(N=x[q],n=w.gradients,k=x.stops,v=c.radialReference,J(N)&&(x[q]=N={x1:N[0],y1:N[1],x2:N[2],y2:N[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===q&&v&&!t(N.gradientUnits)&&(d=N,N=p(N,w.getRadialAttr(v,d),{gradientUnits:"userSpaceOnUse"})),I(N,function(a,x){"id"!==x&&z.push(x,a)}),I(k,function(a){z.push(a)}),z=z.join(","),n[z]?v=n[z].attr("id"):(N.id=v=a.uniqueKey(),n[z]=g=w.createElement(q).attr(N).add(w.defs),
g.radAttr=d,g.stops=[],b(k,function(x){0===x[1].indexOf("rgba")?(e=a.color(x[1]),H=e.get("rgb"),G=e.get("a")):(H=x[1],G=1);x=w.createElement("stop").attr({offset:x[0],"stop-color":H,"stop-opacity":G}).add(g);g.stops.push(x)})),f="url("+w.url+"#"+v+")",c.setAttribute(h,f),c.gradient=z,x.toString=function(){return f})},applyTextOutline:function(x){var h=this.element,c,w,p,e,q;-1!==x.indexOf("contrast")&&(x=x.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));x=x.split(" ");w=x[x.length-1];
if((p=x[0])&&"none"!==p&&a.svg){this.fakeTS=!0;x=[].slice.call(h.getElementsByTagName("tspan"));this.ySetter=this.xSetter;p=p.replace(/(^[\d\.]+)(.*?)$/g,function(a,x,h){return 2*x+h});for(q=x.length;q--;)c=x[q],"highcharts-text-outline"===c.getAttribute("class")&&v(x,h.removeChild(c));e=h.firstChild;b(x,function(a,x){0===x&&(a.setAttribute("x",h.getAttribute("x")),x=h.getAttribute("y"),a.setAttribute("y",x||0),null===x&&h.setAttribute("y",0));a=a.cloneNode(1);m(a,{"class":"highcharts-text-outline",
fill:w,stroke:w,"stroke-width":p,"stroke-linejoin":"round"});h.insertBefore(a,e)})}},attr:function(a,h,c,w){var x,p=this.element,e,q=this,b,N;"string"===typeof a&&void 0!==h&&(x=a,a={},a[x]=h);"string"===typeof a?q=(this[a+"Getter"]||this._defaultGetter).call(this,a,p):(I(a,function(x,h){b=!1;w||P(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&(e||(this.symbolAttr(a),e=!0),b=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);b||(N=this[h+"Setter"]||
this._defaultSetter,N.call(this,x,h,p),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&this.updateShadows(h,x,N))},this),this.afterSetters());c&&c();return q},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,c){for(var x=this.shadows,w=x.length;w--;)c.call(x[w],"height"===a?Math.max(h-(x[w].cutHeight||0),0):"d"===a?this.d:h,a,x[w])},addClass:function(a,h){var x=this.attr("class")||"";-1===x.indexOf(a)&&
(h||(a=(x+(x?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==D(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var x=this;b("x y r start end width height innerR anchorX anchorY".split(" "),function(h){x[h]=L(a[h],x[h])});x.attr({d:x.renderer.symbols[x.symbolName](x.x,x.y,x.width,x.height,x)})},clip:function(a){return this.attr("clip-path",a?"url("+
this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var x=this,c={},w;h=h||a.strokeWidth||0;w=Math.round(h)%2/2;a.x=Math.floor(a.x||x.x||0)+w;a.y=Math.floor(a.y||x.y||0)+w;a.width=Math.floor((a.width||x.width||0)-2*w);a.height=Math.floor((a.height||x.height||0)-2*w);t(a.strokeWidth)&&(a.strokeWidth=h);I(a,function(a,h){x[h]!==a&&(x[h]=c[h]=a)});return c},css:function(a){var x=this.styles,c={},w=this.element,p,q="",b,d=!x,n=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);
x&&I(a,function(a,h){a!==x[h]&&(c[h]=a,d=!0)});d&&(x&&(a=e(x,c)),p=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===w.nodeName.toLowerCase()&&h(a.width),this.styles=a,p&&!H&&this.renderer.forExport&&delete a.width,G&&!H?r(this.element,a):(b=function(a,x){return"-"+x.toLowerCase()},I(a,function(a,x){-1===D(x,n)&&(q+=x.replace(/([A-Z])/g,b)+":"+a+";")}),q&&m(w,"style",q)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));
return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var x=this,c=x.element;n&&"click"===a?(c.ontouchstart=function(a){x.touchEventFired=Date.now();a.preventDefault();h.call(c,a)},c.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(x.touchEventFired||0))&&h.call(c,a)}):c["on"+a]=h;return this},setRadialReference:function(a){var x=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;x&&x.radAttr&&x.animate(this.renderer.getRadialAttr(a,
x.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,c=this.scaleX,w=this.scaleY,p=this.inverted,e=this.rotation,q=this.element;p&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];p?a.push("rotate(90) scale(-1,1)"):e&&a.push("rotate("+e+" "+(q.getAttribute("x")||0)+" "+(q.getAttribute("y")||0)+")");(t(c)||
t(w))&&a.push("scale("+L(c,1)+" "+L(w,1)+")");a.length&&q.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,c){var x,w,p,e,q={};w=this.renderer;p=w.alignedObjects;var b,d;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!c||B(c))this.alignTo=x=c||"renderer",v(p,this),p.push(this),c=null}else a=this.alignOptions,h=this.alignByTranslate,x=this.alignTo;c=L(c,w[x],w);x=a.align;w=a.verticalAlign;p=(c.x||0)+(a.x||
0);e=(c.y||0)+(a.y||0);"right"===x?b=1:"center"===x&&(b=2);b&&(p+=(c.width-(a.width||0))/b);q[h?"translateX":"x"]=Math.round(p);"bottom"===w?d=1:"middle"===w&&(d=2);d&&(e+=(c.height-(a.height||0))/d);q[h?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](q);this.placed=!0;this.alignAttr=q;return this},getBBox:function(a,h){var x,c=this.renderer,w,p=this.element,q=this.styles,d,n=this.textStr,k,N=c.cache,H=c.cacheKeys,G;h=L(h,this.rotation);w=h*g;d=q&&q.fontSize;void 0!==n&&(G=n.toString(),
-1===G.indexOf("\x3c")&&(G=G.replace(/[0-9]/g,"0")),G+=["",h||0,d,q&&q.width,q&&q.textOverflow].join());G&&!a&&(x=N[G]);if(!x){if(p.namespaceURI===this.SVG_NS||c.forExport){try{(k=this.fakeTS&&function(a){b(p.querySelectorAll(".highcharts-text-outline"),function(x){x.style.display=a})})&&k("none"),x=p.getBBox?e({},p.getBBox()):{width:p.offsetWidth,height:p.offsetHeight},k&&k("")}catch(W){}if(!x||0>x.width)x={width:0,height:0}}else x=this.htmlGetBBox();c.isSVG&&(a=x.width,c=x.height,q&&"11px"===q.fontSize&&
17===Math.round(c)&&(x.height=c=14),h&&(x.width=Math.abs(c*Math.sin(w))+Math.abs(a*Math.cos(w)),x.height=Math.abs(c*Math.cos(w))+Math.abs(a*Math.sin(w))));if(G&&0<x.height){for(;250<H.length;)delete N[H.shift()];N[G]||H.push(G);N[G]=x}}return x},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var x=this;x.animate({opacity:0},{duration:a||150,complete:function(){x.attr({y:-9999})}})},add:function(a){var x=
this.renderer,h=this.element,c;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&x.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)c=this.zIndexSetter();c||(a?a.element:x.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var x=a.parentNode;x&&x.removeChild(a)},destroy:function(){var a=this,h=a.element||{},c=a.renderer.isSVG&&"SPAN"===h.nodeName&&a.parentGroup,w=h.ownerSVGElement;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=
h.point=null;P(a);a.clipPath&&w&&(b(w.querySelectorAll("[clip-path]"),function(x){-1<x.getAttribute("clip-path").indexOf(a.clipPath.element.id+")")&&x.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(w=0;w<a.stops.length;w++)a.stops[w]=a.stops[w].destroy();a.stops=null}a.safeRemoveChild(h);for(a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)h=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=h;a.alignTo&&v(a.renderer.alignedObjects,a);I(a,function(x,h){delete a[h]});
return null},shadow:function(a,h,c){var x=[],w,p,q=this.element,e,b,d,n;if(!a)this.destroyShadows();else if(!this.shadows){b=L(a.width,3);d=(a.opacity||.15)/b;n=this.parentInverted?"(-1,-1)":"("+L(a.offsetX,1)+", "+L(a.offsetY,1)+")";for(w=1;w<=b;w++)p=q.cloneNode(0),e=2*b+1-2*w,m(p,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":d*w,"stroke-width":e,transform:"translate"+n,fill:"none"}),c&&(m(p,"height",Math.max(m(p,"height")-e,0)),p.cutHeight=e),h?h.element.appendChild(p):q.parentNode.insertBefore(p,
q),x.push(p);this.shadows=x}return this},destroyShadows:function(){b(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=L(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==
a&&(c.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var x,c=this["stroke-width"];"inherit"===c&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(x=a.length;x--;)a[x]=h(a[x])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",
{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,c){this[h]=a;c.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=k.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(k.createTextNode(String(L(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,
h,c){"string"===typeof a?c.setAttribute(h,a):a&&this.colorGradient(a,h,c)},visibilitySetter:function(a,h,c){"inherit"===a?c.removeAttribute(h):this[h]!==a&&c.setAttribute(h,a);this[h]=a},zIndexSetter:function(a,c){var x=this.renderer,w=this.parentGroup,p=(w||x).element||x.box,q,e=this.element,b;q=this.added;var d;t(a)&&(e.zIndex=a,a=+a,this[c]===a&&(q=!1),this[c]=a);if(q){(a=this.zIndex)&&w&&(w.handleZ=!0);c=p.childNodes;for(d=0;d<c.length&&!b;d++)w=c[d],q=w.zIndex,w!==e&&(h(q)>a||!t(a)&&t(q)||0>
a&&!t(q)&&p!==x.box)&&(p.insertBefore(e,w),b=!0);b||p.appendChild(e)}return b},_defaultSetter:function(a,h,c){c.setAttribute(h,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=function(a,h){this[h]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,h,c){this[h]=a;this.stroke&&this["stroke-width"]?
(C.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(c.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=function(){this.init.apply(this,arguments)};e(A.prototype,{Element:C,SVG_NS:O,init:function(a,h,w,p,q,e){var x;p=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(p));x=p.element;a.appendChild(x);-1===a.innerHTML.indexOf("xmlns")&&
m(x,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=x;this.boxWrapper=p;this.alignedObjects=[];this.url=(c||K)&&k.getElementsByTagName("base").length?R.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 5.0.14"));this.defs=this.createElement("defs").add();this.allowHTML=e;this.forExport=q;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=
0;this.setSize(h,w,!1);var b;c&&a.getBoundingClientRect&&(h=function(){r(a,{left:0,top:0});b=a.getBoundingClientRect();r(a,{left:Math.ceil(b.left)-b.left+"px",top:Math.ceil(b.top)-b.top+"px"})},h(),this.unSubPixelFix=F(R,"resize",h))},getStyle:function(a){return this.style=e({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:z,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a,h){var c=a.getBBox(!0).width;!H&&this.forExport&&(c=this.measureSpanWidth(h.firstChild.data,
a.styles));return c},applyEllipsis:function(a,h,c,w){var x=a.rotation,p=c,q,e=0,b=c.length,d=function(a){h.removeChild(h.firstChild);a&&h.appendChild(k.createTextNode(a))},n;a.rotation=0;p=this.getSpanWidth(a,h);if(n=p>w){for(;e<=b;)q=Math.ceil((e+b)/2),p=c.substring(0,q)+"\u2026",d(p),p=this.getSpanWidth(a,h),e===b?e=b+1:p>w?b=q-1:e=q;0===b&&d("")}a.rotation=x;return n},buildText:function(a){var c=a.element,w=this,x=w.forExport,p=L(a.textStr,"").toString(),q=-1!==p.indexOf("\x3c"),e=c.childNodes,
d,n,g,G,v=m(c,"x"),z=a.styles,f=a.textWidth,I=z&&z.lineHeight,B=z&&z.textOutline,D=z&&"ellipsis"===z.textOverflow,l=z&&"nowrap"===z.whiteSpace,P=z&&z.fontSize,t,J,u=e.length,z=f&&!a.added&&this.box,K=function(a){var x;x=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:P||w.style.fontSize||12;return I?h(I):w.fontMetrics(x,a.getAttribute("style")?a:c).h};t=[p,D,l,I,B,P,f].join();if(t!==a.textCache){for(a.textCache=t;u--;)c.removeChild(e[u]);q||B||D||f||-1!==p.indexOf(" ")?(d=/<.*class="([^"]+)".*>/,
n=/<.*style="([^"]+)".*>/,g=/<.*href="([^"]+)".*>/,z&&z.appendChild(c),p=q?p.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[p],p=y(p,function(a){return""!==a}),b(p,function(h,p){var q,e=0;h=h.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");q=h.split("|||");b(q,function(h){if(""!==
h||1===q.length){var b={},z=k.createElementNS(w.SVG_NS,"tspan"),y,I;d.test(h)&&(y=h.match(d)[1],m(z,"class",y));n.test(h)&&(I=h.match(n)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),m(z,"style",I));g.test(h)&&!x&&(m(z,"onclick",'location.href\x3d"'+h.match(g)[1]+'"'),r(z,{cursor:"pointer"}));h=(h.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==h){z.appendChild(k.createTextNode(h));e?b.dx=0:p&&null!==v&&(b.x=v);m(z,b);c.appendChild(z);!e&&J&&(!H&&x&&r(z,{display:"block"}),
m(z,"dy",K(z)));if(f){b=h.replace(/([^\^])-/g,"$1- ").split(" ");y=1<q.length||p||1<b.length&&!l;var B=[],N,P=K(z),t=a.rotation;for(D&&(G=w.applyEllipsis(a,z,h,f));!D&&y&&(b.length||B.length);)a.rotation=0,N=w.getSpanWidth(a,z),h=N>f,void 0===G&&(G=h),h&&1!==b.length?(z.removeChild(z.firstChild),B.unshift(b.pop())):(b=B,B=[],b.length&&!l&&(z=k.createElementNS(O,"tspan"),m(z,{dy:P,x:v}),I&&m(z,"style",I),c.appendChild(z)),N>f&&(f=N)),b.length&&z.appendChild(k.createTextNode(b.join(" ").replace(/- /g,
"-")));a.rotation=t}e++}}});J=J||c.childNodes.length}),G&&a.attr("title",a.textStr),z&&z.removeChild(c),B&&a.applyTextOutline&&a.applyTextOutline(B)):c.appendChild(k.createTextNode(p.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=l(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,c,w,q,b,d,n,g){var x=this.label(a,h,c,g,null,null,null,null,"button"),k=0;x.attr(p({padding:8,r:2},q));var z,H,v,f;q=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,
style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},q);z=q.style;delete q.style;b=p(q,{fill:"#e6e6e6"},b);H=b.style;delete b.style;d=p(q,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);v=d.style;delete d.style;n=p(q,{style:{color:"#cccccc"}},n);f=n.style;delete n.style;F(x.element,G?"mouseover":"mouseenter",function(){3!==k&&x.setState(1)});F(x.element,G?"mouseout":"mouseleave",function(){3!==k&&x.setState(k)});x.setState=function(a){1!==a&&(x.state=k=a);x.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);x.attr([q,b,d,n][a||0]).css([z,H,v,f][a||0])};x.attr(q).css(e({cursor:"default"},z));return x.on("click",function(a){3!==k&&w.call(x,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};J(a)?h.d=a:q(a)&&e(h,a);return this.createElement("path").attr(h)},circle:function(a,h,c){a=q(a)?a:{x:a,y:h,r:c};h=this.createElement("circle");h.xSetter=
h.ySetter=function(a,h,c){c.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,c,w,p,b){q(a)?(w=a,h=w.y,c=w.r,a=w.x):w={innerR:w,start:p,end:b};a=this.symbol("arc",a,h,c,c,w);a.r=c;return a},rect:function(a,h,c,w,p,b){p=q(a)?a.r:p;var x=this.createElement("rect");a=q(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(c,0),height:Math.max(w,0)};void 0!==b&&(a.strokeWidth=b,a=x.crisp(a));a.fill="none";p&&(a.r=p);x.rSetter=function(a,h,c){m(c,{rx:a,ry:a})};return x.attr(a)},setSize:function(a,h,c){var w=
this.alignedObjects,p=w.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:L(c,!0)?void 0:0});p--;)w[p].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,c,w,p){var x={preserveAspectRatio:"none"};1<arguments.length&&e(x,{x:h,y:c,width:w,height:p});x=this.createElement("image").attr(x);x.element.setAttributeNS?
x.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):x.element.setAttribute("hc-svg-href",a);return x},symbol:function(a,h,c,w,p,q){var x=this,d,n=/^url\((.*?)\)$/,g=n.test(a),z=!g&&(this.symbols[a]?a:"circle"),G=z&&this.symbols[z],H=t(h)&&G&&G.call(this.symbols,Math.round(h),Math.round(c),w,p,q),v,y;G?(d=this.path(H),d.attr("fill","none"),e(d,{symbolName:z,x:h,y:c,width:w,height:p}),q&&e(d,q)):g&&(v=a.match(n)[1],d=this.image(v),d.imgwidth=L(Q[v]&&Q[v].width,q&&q.width),d.imgheight=
L(Q[v]&&Q[v].height,q&&q.height),y=function(){d.attr({width:d.width,height:d.height})},b(["width","height"],function(a){d[a+"Setter"]=function(a,h){var c={},w=this["img"+h],p="width"===h?"translateX":"translateY";this[h]=a;t(w)&&(this.element&&this.element.setAttribute(h,w),this.alignByTranslate||(c[p]=((this[h]||0)-w)/2,this.attr(c)))}}),t(h)&&d.attr({x:h,y:c}),d.isImg=!0,t(d.imgwidth)&&t(d.imgheight)?y():(d.attr({width:0,height:0}),u("img",{onload:function(){var a=f[x.chartIndex];0===this.width&&
(r(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));Q[v]={width:this.width,height:this.height};d.imgwidth=this.width;d.imgheight=this.height;d.element&&y();this.parentNode&&this.parentNode.removeChild(this);x.imgCount--;if(!x.imgCount&&a&&a.onload)a.onload()},src:v}),this.imgCount++));return d},symbols:{circle:function(a,h,c,w){return this.arc(a+c/2,h+w/2,c/2,w/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,c,w){return["M",a,h,"L",a+c,h,a+c,h+w,a,h+w,"Z"]},triangle:function(a,
h,c,w){return["M",a+c/2,h,"L",a+c,h+w,a,h+w,"Z"]},"triangle-down":function(a,h,c,w){return["M",a,h,"L",a+c,h,a+c/2,h+w,"Z"]},diamond:function(a,h,c,w){return["M",a+c/2,h,"L",a+c,h+w/2,a+c/2,h+w,a,h+w/2,"Z"]},arc:function(a,h,c,w,p){var q=p.start,b=p.r||c,x=p.r||w||c,e=p.end-.001;c=p.innerR;w=L(p.open,.001>Math.abs(p.end-p.start-2*Math.PI));var d=Math.cos(q),n=Math.sin(q),g=Math.cos(e),e=Math.sin(e);p=.001>p.end-q-Math.PI?0:1;b=["M",a+b*d,h+x*n,"A",b,x,0,p,1,a+b*g,h+x*e];t(c)&&b.push(w?"M":"L",a+c*
g,h+c*e,"A",c,c,0,p,0,a+c*d,h+c*n);b.push(w?"":"Z");return b},callout:function(a,h,c,w,p){var q=Math.min(p&&p.r||0,c,w),b=q+6,e=p&&p.anchorX;p=p&&p.anchorY;var d;d=["M",a+q,h,"L",a+c-q,h,"C",a+c,h,a+c,h,a+c,h+q,"L",a+c,h+w-q,"C",a+c,h+w,a+c,h+w,a+c-q,h+w,"L",a+q,h+w,"C",a,h+w,a,h+w,a,h+w-q,"L",a,h+q,"C",a,h,a,h,a+q,h];e&&e>c?p>h+b&&p<h+w-b?d.splice(13,3,"L",a+c,p-6,a+c+6,p,a+c,p+6,a+c,h+w-q):d.splice(13,3,"L",a+c,w/2,e,p,a+c,w/2,a+c,h+w-q):e&&0>e?p>h+b&&p<h+w-b?d.splice(33,3,"L",a,p+6,a-6,p,a,p-6,
a,h+q):d.splice(33,3,"L",a,w/2,e,p,a,w/2,a,h+q):p&&p>w&&e>a+b&&e<a+c-b?d.splice(23,3,"L",e+6,h+w,e,h+w+6,e-6,h+w,a+q,h+w):p&&0>p&&e>a+b&&e<a+c-b&&d.splice(3,3,"L",e-6,h,e,h-6,e+6,h,c-q,h);return d}},clipRect:function(h,c,w,p){var q=a.uniqueKey(),b=this.createElement("clipPath").attr({id:q}).add(this.defs);h=this.rect(h,c,w,p,0).add(b);h.id=q;h.clipPath=b;h.count=0;return h},text:function(a,h,c,w){var p=!H&&this.forExport,q={};if(w&&(this.allowHTML||!this.forExport))return this.html(a,h,c);q.x=Math.round(h||
0);c&&(q.y=Math.round(c));if(a||0===a)q.text=a;a=this.createElement("text").attr(q);p&&a.css({position:"absolute"});w||(a.xSetter=function(a,h,c){var w=c.getElementsByTagName("tspan"),p,q=c.getAttribute(h),b;for(b=0;b<w.length;b++)p=w[b],p.getAttribute(h)===q&&p.setAttribute(h,a);c.setAttribute(h,a)});return a},fontMetrics:function(a,c){a=a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?parseFloat(a)*(c?this.fontMetrics(null,c.parentNode).f:16):12;
c=24>a?a+3:Math.round(1.2*a);return{h:c,b:Math.round(.8*c),f:a}},rotCorr:function(a,h,c){var w=a;h&&c&&(w=Math.max(w*Math.cos(h*g),4));return{x:-a/3*Math.sin(h*g),y:w}},label:function(h,c,q,d,n,g,k,z,G){var x=this,H=x.g("button"!==G&&"label"),v=H.text=x.text("",0,0,k).attr({zIndex:1}),f,y,I=0,B=3,D=0,r,l,P,m,J,O={},L,u,N=/^url\((.*?)\)$/.test(d),K=N,U,T,Q,R;G&&H.addClass("highcharts-"+G);K=N;U=function(){return(L||0)%2/2};T=function(){var a=v.element.style,h={};y=(void 0===r||void 0===l||J)&&t(v.textStr)&&
v.getBBox();H.width=(r||y.width||0)+2*B+D;H.height=(l||y.height||0)+2*B;u=B+x.fontMetrics(a&&a.fontSize,v).b;K&&(f||(H.box=f=x.symbols[d]||N?x.symbol(d):x.rect(),f.addClass(("button"===G?"":"highcharts-label-box")+(G?" highcharts-"+G+"-box":"")),f.add(H),a=U(),h.x=a,h.y=(z?-u:0)+a),h.width=Math.round(H.width),h.height=Math.round(H.height),f.attr(e(h,O)),O={})};Q=function(){var a=D+B,h;h=z?0:u;t(r)&&y&&("center"===J||"right"===J)&&(a+={center:.5,right:1}[J]*(r-y.width));if(a!==v.x||h!==v.y)v.attr("x",
a),void 0!==h&&v.attr("y",h);v.x=a;v.y=h};R=function(a,h){f?f.attr(a,h):O[a]=h};H.onAdd=function(){v.add(H);H.attr({text:h||0===h?h:"",x:c,y:q});f&&t(n)&&H.attr({anchorX:n,anchorY:g})};H.widthSetter=function(h){r=a.isNumber(h)?h:null};H.heightSetter=function(a){l=a};H["text-alignSetter"]=function(a){J=a};H.paddingSetter=function(a){t(a)&&a!==B&&(B=H.padding=a,Q())};H.paddingLeftSetter=function(a){t(a)&&a!==D&&(D=a,Q())};H.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,y&&H.attr({x:P}))};
H.textSetter=function(a){void 0!==a&&v.textSetter(a);T();Q()};H["stroke-widthSetter"]=function(a,h){a&&(K=!0);L=this["stroke-width"]=a;R(h,a)};H.strokeSetter=H.fillSetter=H.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(K=!0),H[h]=a);R(h,a)};H.anchorXSetter=function(a,h){n=H.anchorX=a;R(h,Math.round(a)-U()-P)};H.anchorYSetter=function(a,h){g=H.anchorY=a;R(h,a-m)};H.xSetter=function(a){H.x=a;I&&(a-=I*((r||y.width)+2*B));P=Math.round(a);H.attr("translateX",P)};H.ySetter=function(a){m=H.y=Math.round(a);
H.attr("translateY",m)};var V=H.css;return e(H,{css:function(a){if(a){var h={};a=p(a);b(H.textProps,function(c){void 0!==a[c]&&(h[c]=a[c],delete a[c])});v.css(h)}return V.call(H,a)},getBBox:function(){return{width:y.width+2*B,height:y.height+2*B,x:y.x-B,y:y.y-B}},shadow:function(a){a&&(T(),f&&f.shadow(a));return H},destroy:function(){w(H.element,"mouseenter");w(H.element,"mouseleave");v&&(v=v.destroy());f&&(f=f.destroy());C.prototype.destroy.call(H);H=x=T=Q=R=null}})}});a.Renderer=A})(M);(function(a){var C=
a.attr,A=a.createElement,F=a.css,E=a.defined,m=a.each,f=a.extend,l=a.isFirefox,r=a.isMS,u=a.isWebKit,t=a.pInt,g=a.SVGRenderer,d=a.win,k=a.wrap;f(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=f(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position=
"absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,e=this.element,d=this.translateX||0,g=this.translateY||0,n=this.x||0,k=this.y||0,f=this.textAlign||"left",c={left:0,center:.5,right:1}[f],G=this.styles;F(e,{marginLeft:d,marginTop:g});this.shadows&&m(this.shadows,function(a){F(a,{marginLeft:d+1,marginTop:g+1})});this.inverted&&m(e.childNodes,function(c){a.invertChild(c,e)});if("SPAN"===e.tagName){var q=
this.rotation,B=t(this.textWidth),r=G&&G.whiteSpace,p=[q,f,e.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(G=a.fontMetrics(e.style.fontSize).b,E(q)&&this.setSpanRotation(q,c,G),F(e,{width:"",whiteSpace:r||"nowrap"}),e.offsetWidth>B&&/[ \-]/.test(e.textContent||e.innerText)&&F(e,{width:B+"px",display:"block",whiteSpace:r||"normal"}),this.getSpanCorrection(e.offsetWidth,G,c,q,f));F(e,{left:n+(this.xCorr||0)+"px",top:k+(this.yCorr||0)+"px"});u&&(G=e.offsetHeight);this.cTT=p}}else this.alignOnAdd=
!0},setSpanRotation:function(a,e,g){var b={},n=r?"-ms-transform":u?"-webkit-transform":l?"MozTransform":d.opera?"-o-transform":"";b[n]=b.transform="rotate("+a+"deg)";b[n+(l?"Origin":"-origin")]=b.transformOrigin=100*e+"% "+g+"px";F(this.element,b)},getSpanCorrection:function(a,e,d){this.xCorr=-a*d;this.yCorr=-e}});f(g.prototype,{html:function(a,e,d){var b=this.createElement("span"),n=b.element,g=b.renderer,v=g.isSVG,c=function(a,c){m(["opacity","visibility"],function(q){k(a,q+"Setter",function(a,
p,q,b){a.call(this,p,q,b);c[q]=p})})};b.textSetter=function(a){a!==n.innerHTML&&delete this.bBox;n.innerHTML=this.textStr=a;b.htmlUpdateTransform()};v&&c(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,c){"align"===c&&(c="textAlign");b[c]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(e),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});n.style.whiteSpace="nowrap";b.css=b.htmlCss;v&&(b.add=function(a){var q,
e=g.box.parentNode,d=[];if(this.parentGroup=a){if(q=a.div,!q){for(;a;)d.push(a),a=a.parentGroup;m(d.reverse(),function(a){var p,n=C(a.element,"class");n&&(n={className:n});q=a.div=a.div||A("div",n,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},q||e);p=q.style;f(a,{classSetter:function(a){this.element.setAttribute("class",a);q.className=a},on:function(){d[0].div&&b.on.apply({element:d[0].div},
arguments);return a},translateXSetter:function(c,h){p.left=c+"px";a[h]=c;a.doTransform=!0},translateYSetter:function(c,h){p.top=c+"px";a[h]=c;a.doTransform=!0}});c(a,p)})}}else q=e;q.appendChild(n);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(M);(function(a){var C,A,F=a.createElement,E=a.css,m=a.defined,f=a.deg2rad,l=a.discardElement,r=a.doc,u=a.each,t=a.erase,g=a.extend;C=a.extendClass;var d=a.isArray,k=a.isNumber,b=a.isObject,e=a.merge;A=a.noop;var v=a.pick,y=a.pInt,
n=a.SVGElement,D=a.SVGRenderer,J=a.win;a.svg||(A={docMode8:r&&8===r.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],e=["position: ","absolute",";"],d="div"===b;("shape"===b||d)&&e.push("left:0;top:0;width:1px;height:1px;");e.push("visibility: ",d?"hidden":"visible");c.push(' style\x3d"',e.join(""),'"/\x3e');b&&(c=d||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=F(c));this.renderer=a},add:function(a){var c=this.renderer,b=this.element,e=c.box,d=a&&a.inverted,
e=a?a.element||a:e;a&&(this.parentGroup=a);d&&c.invertChild(b,e);e.appendChild(b);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:n.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*f),q=Math.sin(a*f);E(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-q,", M21\x3d",q,", M22\x3d",
b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,q,e,d){var c=e?Math.cos(e*f):1,n=e?Math.sin(e*f):0,g=v(this.elemHeight,this.element.offsetHeight),k;this.xCorr=0>c&&-a;this.yCorr=0>n&&-g;k=0>c*n;this.xCorr+=n*b*(k?1-q:q);this.yCorr-=c*b*(e?k?q:1-q:1);d&&"left"!==d&&(this.xCorr-=a*q*(0>c?-1:1),e&&(this.yCorr-=g*q*(0>n?-1:1)),E(this.element,{textAlign:d}))},pathToVML:function(a){for(var c=a.length,b=[];c--;)k(a[c])?b[c]=Math.round(10*a[c])-5:"Z"===a[c]?b[c]="x":
(b[c]=a[c],!a.isArc||"wa"!==a[c]&&"at"!==a[c]||(b[c+5]===b[c+7]&&(b[c+7]+=a[c+7]>a[c+5]?1:-1),b[c+6]===b[c+8]&&(b[c+8]+=a[c+8]>a[c+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var c=this,b;a?(b=a.members,t(b,c),b.push(c),c.destroyClip=function(){t(b,c)},a=a.getCSS(c)):(c.destroyClip&&c.destroyClip(),a={clip:c.docMode8?"inherit":"rect(auto)"});return c.css(a)},css:n.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&l(a)},destroy:function(){this.destroyClip&&this.destroyClip();return n.prototype.destroy.apply(this)},
on:function(a,b){this.element["on"+a]=function(){var a=J.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=y(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,e){var c=[],q,p=this.element,d=this.renderer,n,g=p.style,h,w=p.path,k,H,f,D;w&&"string"!==typeof w.value&&(w="x");H=w;if(a){f=v(a.width,3);D=(a.opacity||.15)/f;for(q=1;3>=q;q++)k=2*f+1-2*q,e&&(H=this.cutOffPath(w.value,k+.5)),h=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',
k,'" filled\x3d"false" path\x3d"',H,'" coordsize\x3d"10 10" style\x3d"',p.style.cssText,'" /\x3e'],n=F(d.prepVML(h),null,{left:y(g.left)+v(a.offsetX,1),top:y(g.top)+v(a.offsetY,1)}),e&&(n.cutOff=k+1),h=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',D*q,'"/\x3e'],F(d.prepVML(h),null,null,n),b?b.element.appendChild(n):p.parentNode.insertBefore(n,p),c.push(n);this.shadows=c}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},
classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,e){(e.getElementsByTagName("stroke")[0]||F(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,e))[b]=a||"solid";this[b]=a},dSetter:function(a,b,e){var c=this.shadows;a=a||[];this.d=a.join&&a.join(" ");e.path=a=this.pathToVML(a);if(c)for(e=c.length;e--;)c[e].path=c[e].cutOff?this.cutOffPath(a,c[e].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,e){var c=e.nodeName;"SPAN"===c?e.style.color=a:"IMG"!==
c&&(e.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,e,b,this)))},"fill-opacitySetter":function(a,b,e){F(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,e)},opacitySetter:A,rotationSetter:function(a,b,e){e=e.style;this[b]=e[b]=a;e.left=-Math.round(Math.sin(a*f)+1)+"px";e.top=Math.round(Math.cos(a*f))+"px"},strokeSetter:function(a,b,e){this.setAttr("strokecolor",this.renderer.color(a,e,b,this))},"stroke-widthSetter":function(a,b,e){e.stroked=!!a;
this[b]=a;k(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,e){"inherit"===a&&(a="visible");this.shadows&&u(this.shadows,function(c){c.style[b]=a});"DIV"===e.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(e.style[b]=a?"visible":"hidden"),b="top");e.style[b]=a},xSetter:function(a,b,e){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):e.style[b]=a},zIndexSetter:function(a,
b,e){e.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=C(n,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,isIE8:-1<J.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,e){var c,d;this.alignedObjects=[];c=this.createElement("div").css({position:"relative"});d=c.element;a.appendChild(c.element);this.isVML=!0;this.box=d;this.boxWrapper=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,
e,!1);if(!r.namespaces.hcv){r.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{r.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(p){r.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,e,d,n){var c=this.createElement(),p=b(a);return g(c,{members:[],
count:0,left:(p?a.x:a)+1,top:(p?a.y:e)+1,width:(p?a.width:d)-1,height:(p?a.height:n)-1,getCSS:function(a){var c=a.element,b=c.nodeName,h=a.inverted,w=this.top-("shape"===b?c.offsetTop:0),p=this.left,c=p+this.width,e=w+this.height,w={clip:"rect("+Math.round(h?p:w)+"px,"+Math.round(h?e:c)+"px,"+Math.round(h?c:e)+"px,"+Math.round(h?w:p)+"px)"};!h&&a.docMode8&&"DIV"===b&&g(w,{width:c+"px",height:e+"px"});return w},updateClipping:function(){u(c.members,function(a){a.element&&a.css(c.getCSS(a))})}})},color:function(c,
b,e,d){var q=this,p,n=/^rgba/,g,k,h="none";c&&c.linearGradient?k="gradient":c&&c.radialGradient&&(k="pattern");if(k){var w,v,H=c.linearGradient||c.radialGradient,f,D,y,x,r,B="";c=c.stops;var l,G=[],m=function(){g=['\x3cfill colors\x3d"'+G.join(",")+'" opacity\x3d"',y,'" o:opacity2\x3d"',D,'" type\x3d"',k,'" ',B,'focus\x3d"100%" method\x3d"any" /\x3e'];F(q.prepVML(g),null,null,b)};f=c[0];l=c[c.length-1];0<f[0]&&c.unshift([0,f[1]]);1>l[0]&&c.push([1,l[1]]);u(c,function(h,c){n.test(h[1])?(p=a.color(h[1]),
w=p.get("rgb"),v=p.get("a")):(w=h[1],v=1);G.push(100*h[0]+"% "+w);c?(y=v,x=w):(D=v,r=w)});if("fill"===e)if("gradient"===k)e=H.x1||H[0]||0,c=H.y1||H[1]||0,f=H.x2||H[2]||0,H=H.y2||H[3]||0,B='angle\x3d"'+(90-180*Math.atan((H-c)/(f-e))/Math.PI)+'"',m();else{var h=H.r,t=2*h,J=2*h,A=H.cx,C=H.cy,E=b.radialReference,M,h=function(){E&&(M=d.getBBox(),A+=(E[0]-M.x)/M.width-.5,C+=(E[1]-M.y)/M.height-.5,t*=E[2]/M.width,J*=E[2]/M.height);B='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+t+","+
J+'" origin\x3d"0.5,0.5" position\x3d"'+A+","+C+'" color2\x3d"'+r+'" ';m()};d.added?h():d.onAdd=h;h=x}else h=w}else n.test(c)&&"IMG"!==b.tagName?(p=a.color(c),d[e+"-opacitySetter"](p.get("a"),e,b),h=p.get("rgb")):(h=b.getElementsByTagName(e),h.length&&(h[0].opacity=1,h[0].type="solid"),h=c);return h},prepVML:function(a){var c=this.isIE8;a=a.join("");c?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):
a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:D.prototype.html,path:function(a){var c={coordsize:"10 10"};d(a)?c.d=a:b(a)&&g(c,a);return this.createElement("shape").attr(c)},circle:function(a,e,d){var c=this.symbol("circle");b(a)&&(d=a.r,e=a.y,a=a.x);c.isCircle=!0;c.r=d;return c.attr({x:a,y:e})},g:function(a){var c;a&&(c={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(c)},
image:function(a,b,e,d,n){var c=this.createElement("img").attr({src:a});1<arguments.length&&c.attr({x:b,y:e,width:d,height:n});return c},createElement:function(a){return"rect"===a?this.symbol(a):D.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this;b=b.style;var e="IMG"===a.tagName&&a.style;E(a,{flip:"x",left:y(b.width)-(e?y(e.top):1),top:y(b.height)-(e?y(e.left):1),rotation:-90});u(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,e,d,n){var c=n.start,
q=n.end,g=n.r||e||d;e=n.innerR;d=Math.cos(c);var k=Math.sin(c),h=Math.cos(q),w=Math.sin(q);if(0===q-c)return["x"];c=["wa",a-g,b-g,a+g,b+g,a+g*d,b+g*k,a+g*h,b+g*w];n.open&&!e&&c.push("e","M",a,b);c.push("at",a-e,b-e,a+e,b+e,a+e*h,b+e*w,a+e*d,b+e*k,"x","e");c.isArc=!0;return c},circle:function(a,b,e,d,n){n&&m(n.r)&&(e=d=2*n.r);n&&n.isCircle&&(a-=e/2,b-=d/2);return["wa",a,b,a+e,b+d,a+e,b+d/2,a+e,b+d/2,"e"]},rect:function(a,b,e,d,n){return D.prototype.symbols[m(n)&&n.r?"callout":"square"].call(0,a,b,
e,d,n)}}},a.VMLRenderer=C=function(){this.init.apply(this,arguments)},C.prototype=e(D.prototype,A),a.Renderer=C);D.prototype.measureSpanWidth=function(a,b){var c=r.createElement("span");a=r.createTextNode(a);c.appendChild(a);E(c,b);this.box.appendChild(c);b=c.offsetWidth;l(c);return b}})(M);(function(a){function C(){var f=a.defaultOptions.global,l=r.moment;if(f.timezone){if(l)return function(a){return-l.tz(a,f.timezone).utcOffset()};a.error(25)}return f.useUTC&&f.getTimezoneOffset}function A(){var f=
a.defaultOptions.global,t,g=f.useUTC,d=g?"getUTC":"get",k=g?"setUTC":"set";a.Date=t=f.Date||r.Date;t.hcTimezoneOffset=g&&f.timezoneOffset;t.hcGetTimezoneOffset=C();t.hcMakeTime=function(a,e,d,k,n,f){var b;g?(b=t.UTC.apply(0,arguments),b+=m(b)):b=(new t(a,e,l(d,1),l(k,0),l(n,0),l(f,0))).getTime();return b};E("Minutes Hours Day Date Month FullYear".split(" "),function(a){t["hcGet"+a]=d+a});E("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){t["hcSet"+a]=k+a})}var F=a.color,
E=a.each,m=a.getTZOffset,f=a.merge,l=a.pick,r=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.14/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",
align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},
shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:F("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",
whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(r){a.defaultOptions=f(!0,a.defaultOptions,r);A();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;A()})(M);(function(a){var C=a.correctFloat,A=a.defined,F=a.destroyObjectProperties,E=a.isNumber,
m=a.merge,f=a.pick,l=a.deg2rad;a.Tick=function(a,f,l,g){this.axis=a;this.pos=f;this.type=l||"";this.isNewLabel=this.isNew=!0;l||g||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,l=a.options,t=a.chart,g=a.categories,d=a.names,k=this.pos,b=l.labels,e=a.tickPositions,v=k===e[0],y=k===e[e.length-1],d=g?f(g[k],d[k],k):k,g=this.label,e=e.info,n;a.isDatetimeAxis&&e&&(n=l.dateTimeLabelFormats[e.higherRanks[k]||e.unitName]);this.isFirst=v;this.isLast=y;l=a.labelFormatter.call({axis:a,
chart:t,isFirst:v,isLast:y,dateTimeLabelFormat:n,value:a.isLog?C(a.lin2log(d)):d,pos:k});A(g)?g&&g.attr({text:l}):(this.labelLength=(this.label=g=A(l)&&b.enabled?t.renderer.text(l,0,0,b.useHTML).css(m(b.style)).add(a.labelGroup):null)&&g.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var r=this.axis,m=a.x,g=r.chart.chartWidth,d=r.chart.spacing,k=f(r.labelLeft,Math.min(r.pos,d[3])),d=f(r.labelRight,
Math.max(r.pos+r.len,g-d[1])),b=this.label,e=this.rotation,v={left:0,center:.5,right:1}[r.labelAlign],y=b.getBBox().width,n=r.getSlotWidth(),D=n,J=1,c,G={};if(e)0>e&&m-v*y<k?c=Math.round(m/Math.cos(e*l)-k):0<e&&m+v*y>d&&(c=Math.round((g-m)/Math.cos(e*l)));else if(g=m+(1-v)*y,m-v*y<k?D=a.x+D*(1-v)-k:g>d&&(D=d-a.x+D*v,J=-1),D=Math.min(n,D),D<n&&"center"===r.labelAlign&&(a.x+=J*(n-D-v*(n-Math.min(y,D)))),y>D||r.autoRotation&&(b.styles||{}).width)c=D;c&&(G.width=c,(r.options.labels.style||{}).textOverflow||
(G.textOverflow="ellipsis"),b.css(G))},getPosition:function(a,f,l,g){var d=this.axis,k=d.chart,b=g&&k.oldChartHeight||k.chartHeight;return{x:a?d.translate(f+l,null,null,g)+d.transB:d.left+d.offset+(d.opposite?(g&&k.oldChartWidth||k.chartWidth)-d.right-d.left:0),y:a?b-d.bottom+d.offset-(d.opposite?d.height:0):b-d.translate(f+l,null,null,g)-d.transB}},getLabelPosition:function(a,f,m,g,d,k,b,e){var v=this.axis,y=v.transA,n=v.reversed,D=v.staggerLines,r=v.tickRotCorr||{x:0,y:0},c=d.y;A(c)||(c=0===v.side?
m.rotation?-8:-m.getBBox().height:2===v.side?r.y+8:Math.cos(m.rotation*l)*(r.y-m.getBBox(!1,0).height/2));a=a+d.x+r.x-(k&&g?k*y*(n?-1:1):0);f=f+c-(k&&!g?k*y*(n?1:-1):0);D&&(m=b/(e||1)%D,v.opposite&&(m=D-m-1),f+=v.labelOffset/D*m);return{x:a,y:Math.round(f)}},getMarkPath:function(a,f,l,g,d,k){return k.crispLine(["M",a,f,"L",a+(d?0:-l),f+(d?l:0)],g)},renderGridLine:function(a,f,l){var g=this.axis,d=g.options,k=this.gridLine,b={},e=this.pos,v=this.type,y=g.tickmarkOffset,n=g.chart.renderer,D=v?v+"Grid":
"grid",r=d[D+"LineWidth"],c=d[D+"LineColor"],d=d[D+"LineDashStyle"];k||(b.stroke=c,b["stroke-width"]=r,d&&(b.dashstyle=d),v||(b.zIndex=1),a&&(b.opacity=0),this.gridLine=k=n.path().attr(b).addClass("highcharts-"+(v?v+"-":"")+"grid-line").add(g.gridGroup));if(!a&&k&&(a=g.getPlotLinePath(e+y,k.strokeWidth()*l,a,!0)))k[this.isNew?"attr":"animate"]({d:a,opacity:f})},renderMark:function(a,l,m){var g=this.axis,d=g.options,k=g.chart.renderer,b=this.type,e=b?b+"Tick":"tick",v=g.tickSize(e),y=this.mark,n=!y,
D=a.x;a=a.y;var r=f(d[e+"Width"],!b&&g.isXAxis?1:0),d=d[e+"Color"];v&&(g.opposite&&(v[0]=-v[0]),n&&(this.mark=y=k.path().addClass("highcharts-"+(b?b+"-":"")+"tick").add(g.axisGroup),y.attr({stroke:d,"stroke-width":r})),y[n?"attr":"animate"]({d:this.getMarkPath(D,a,v[0],y.strokeWidth()*m,g.horiz,k),opacity:l}))},renderLabel:function(a,l,m,g){var d=this.axis,k=d.horiz,b=d.options,e=this.label,v=b.labels,y=v.step,n=d.tickmarkOffset,D=!0,r=a.x;a=a.y;e&&E(r)&&(e.xy=a=this.getLabelPosition(r,a,e,k,v,n,
g,y),this.isFirst&&!this.isLast&&!f(b.showFirstLabel,1)||this.isLast&&!this.isFirst&&!f(b.showLastLabel,1)?D=!1:!k||d.isRadial||v.step||v.rotation||l||0===m||this.handleOverflow(a),y&&g%y&&(D=!1),D&&E(a.y)?(a.opacity=m,e[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(e.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,l,m){var g=this.axis,d=g.horiz,k=this.getPosition(d,this.pos,g.tickmarkOffset,l),b=k.x,e=k.y,g=d&&b===g.pos+g.len||!d&&e===g.pos?-1:1;m=f(m,1);this.isActive=
!0;this.renderGridLine(l,m,g);this.renderMark(k,m,g);this.renderLabel(k,l,m,a)},destroy:function(){F(this,this.axis)}}})(M);var S=function(a){var C=a.addEvent,A=a.animObject,F=a.arrayMax,E=a.arrayMin,m=a.color,f=a.correctFloat,l=a.defaultOptions,r=a.defined,u=a.deg2rad,t=a.destroyObjectProperties,g=a.each,d=a.extend,k=a.fireEvent,b=a.format,e=a.getMagnitude,v=a.grep,y=a.inArray,n=a.isArray,D=a.isNumber,J=a.isString,c=a.merge,G=a.normalizeTickInterval,q=a.objectEach,B=a.pick,K=a.removeEvent,p=a.splat,
z=a.syncTimeout,I=a.Tick,L=function(){this.init.apply(this,arguments)};a.extend(L.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,
tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},
style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,c){var h=c.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!h:h;b.isXAxis=h;b.coll=b.coll||(h?
"xAxis":"yAxis");b.opposite=c.opposite;b.side=c.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(c);var w=this.options,e=w.type;b.labelFormatter=w.labels.formatter||b.defaultLabelFormatter;b.userOptions=c;b.minPixelPadding=0;b.reversed=w.reversed;b.visible=!1!==w.visible;b.zoomEnabled=!1!==w.zoomEnabled;b.hasNames="category"===e||!0===w.categories;b.categories=w.categories||b.hasNames;b.names=b.names||[];b.plotLinesAndBandsGroups={};b.isLog="logarithmic"===e;b.isDatetimeAxis="datetime"===
e;b.positiveValuesOnly=b.isLog&&!b.allowNegativeLog;b.isLinked=r(w.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands={};b.len=0;b.minRange=b.userMinRange=w.minRange||w.maxZoom;b.range=w.range;b.offset=w.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=B(w.crosshair,p(a.options.tooltip.crosshairs)[h?0:1],!1);c=b.options.events;-1===y(b,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,b):a.axes.push(b),a[b.coll].push(b));b.series=
b.series||[];a.inverted&&!b.isZAxis&&h&&void 0===b.reversed&&(b.reversed=!0);q(c,function(a,h){C(b,h,a)});b.lin2log=w.linearToLogConverter||b.lin2log;b.isLog&&(b.val2lin=b.log2lin,b.lin2val=b.lin2log)},setOptions:function(a){this.options=c(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],c(l[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,
c=this.value,e=h.categories,p=this.dateTimeLabelFormat,d=l.lang,n=d.numericSymbols,d=d.numericSymbolMagnitude||1E3,q=n&&n.length,x,g=h.options.labels.format,h=h.isLog?Math.abs(c):h.tickInterval;if(g)x=b(g,this);else if(e)x=c;else if(p)x=a.dateFormat(p,c);else if(q&&1E3<=h)for(;q--&&void 0===x;)e=Math.pow(d,q+1),h>=e&&0===10*c%e&&null!==n[q]&&0!==c&&(x=a.numberFormat(c/e,-1)+n[q]);void 0===x&&(x=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,-1,void 0,""));return x},getSeriesExtremes:function(){var a=
this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();g(a.series,function(h){if(h.visible||!b.options.chart.ignoreHiddenSeries){var c=h.options,w=c.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=w&&(w=null);if(a.isXAxis)c=h.xData,c.length&&(h=E(c),D(h)||h instanceof Date||(c=v(c,function(a){return D(a)}),h=E(c)),a.dataMin=Math.min(B(a.dataMin,c[0]),h),a.dataMax=Math.max(B(a.dataMax,c[0]),F(c)));else if(h.getExtremes(),
e=h.dataMax,h=h.dataMin,r(h)&&r(e)&&(a.dataMin=Math.min(B(a.dataMin,h),h),a.dataMax=Math.max(B(a.dataMax,e),e)),r(w)&&(a.threshold=w),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,e,p,d){var h=this.linkedParent||this,w=1,n=0,q=e?h.oldTransA:h.transA;e=e?h.oldMin:h.min;var g=h.minPixelPadding;p=(h.isOrdinal||h.isBroken||h.isLog&&p)&&h.lin2val;q||(q=h.transA);c&&(w*=-1,n=h.len);h.reversed&&(w*=-1,n-=w*(h.sector||h.len));b?(a=(a*w+n-g)/q+e,p&&(a=h.lin2val(a))):
(p&&(a=h.val2lin(a)),a=w*(a-e)*q+n+w*g+(D(d)?q*d:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,p){var h=this.chart,w=this.left,d=this.top,n,q,g=c&&h.oldChartHeight||h.chartHeight,k=c&&h.oldChartWidth||h.chartWidth,f;n=this.transB;var v=function(a,h,b){if(a<h||a>b)e?a=Math.min(Math.max(h,a),b):f=!0;return a};p=B(p,this.translate(a,
null,null,c));a=c=Math.round(p+n);n=q=Math.round(g-p-n);D(p)?this.horiz?(n=d,q=g-this.bottom,a=c=v(a,w,w+this.width)):(a=w,c=k-this.right,n=q=v(n,d,d+this.height)):f=!0;return f&&!e?null:h.renderer.crispLine(["M",a,n,"L",c,q],b||1)},getLinearTickPositions:function(a,b,c){var h,w=f(Math.floor(b/a)*a);c=f(Math.ceil(c/a)*a);var e=[];if(this.single)return[b];for(b=w;b<=c;){e.push(b);b=f(b+a);if(b===h)break;h=b}return e},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,e=a.minorTickInterval,
p=[],d=a.pointRangePadding||0,n=a.min-d,d=a.max+d,q=d-n;if(q&&q/e<a.len/3)if(a.isLog)g(this.paddedTicks,function(h,b,c){b&&p.push.apply(p,a.getLogTickPositions(e,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),n,d,b.startOfWeek));else for(b=n+(c[0]-n)%e;b<=d&&b!==p[0];b+=e)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,e,p,d,n,q,k,f,v;this.isXAxis&&
void 0===this.minRange&&!this.isLog&&(r(a.min)||r(a.max)?this.minRange=null:(g(this.series,function(a){k=a.xData;for(n=f=a.xIncrement?1:k.length-1;0<n;n--)if(q=k[n]-k[n-1],void 0===d||q<d)d=q}),this.minRange=Math.min(5*d,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,v=this.minRange,e=(v-c+b)/2,e=[b-e,B(a.min,b-e)],p&&(e[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=F(e),c=[b+v,B(a.max,b+v)],p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),
c=E(c),c-b<v&&(e[0]=c-v,e[1]=B(a.min,c-v),b=F(e)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:g(this.series,function(h){var b=h.closestPointRange,c=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&r(b)&&c&&(a=r(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=n(this.categories),b=h?this.categories:this.names,c=a.options.x,e;a.series.requireSorting=!1;r(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():y(a.name,b));-1===c?h||
(e=b.length):e=c;void 0!==e&&(this.names[e]=a.name);return e},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,g(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),h.generatePoints();g(h.points,function(b,c){var e;b.options&&(e=a.nameToX(b),void 0!==e&&e!==b.x&&(b.x=e,h.xData[c]=e))})}))},setAxisTranslation:function(a){var h=this,b=h.max-h.min,c=h.axisPointRange||0,e,p=0,d=0,n=h.linkedParent,q=!!h.categories,
k=h.transA,f=h.isXAxis;if(f||q||c)e=h.getClosest(),n?(p=n.minPointOffset,d=n.pointRangePadding):g(h.series,function(a){var b=q?1:f?B(a.options.pointRange,e,0):h.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,b);h.single||(p=Math.max(p,J(a)?0:b/2),d=Math.max(d,"on"===a?0:b))}),n=h.ordinalSlope&&e?h.ordinalSlope/e:1,h.minPointOffset=p*=n,h.pointRangePadding=d*=n,h.pointRange=Math.min(c,b),f&&(h.closestPointRange=e);a&&(h.oldTransA=k);h.translationSlope=h.transA=k=h.options.staticScale||h.len/
(b+d||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=k*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var b=this,c=b.chart,p=b.options,d=b.isLog,n=b.log2lin,q=b.isDatetimeAxis,x=b.isXAxis,v=b.isLinked,z=p.maxPadding,y=p.minPadding,l=p.tickInterval,I=p.tickPixelInterval,m=b.categories,J=b.threshold,t=b.softThreshold,L,u,K,A;q||m||v||this.getTickAmount();K=B(b.userMin,p.min);A=B(b.userMax,p.max);v?(b.linkedParent=c[b.coll][p.linkedTo],c=b.linkedParent.getExtremes(),
b.min=B(c.min,c.dataMin),b.max=B(c.max,c.dataMax),p.type!==b.linkedParent.options.type&&a.error(11,1)):(!t&&r(J)&&(b.dataMin>=J?(L=J,y=0):b.dataMax<=J&&(u=J,z=0)),b.min=B(K,L,b.dataMin),b.max=B(A,u,b.dataMax));d&&(b.positiveValuesOnly&&!h&&0>=Math.min(b.min,B(b.dataMin,b.min))&&a.error(10,1),b.min=f(n(b.min),15),b.max=f(n(b.max),15));b.range&&r(b.max)&&(b.userMin=b.min=K=Math.max(b.dataMin,b.minFromRange()),b.userMax=A=b.max,b.range=null);k(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(m||b.axisPointRange||b.usePercentage||v)&&r(b.min)&&r(b.max)&&(n=b.max-b.min)&&(!r(K)&&y&&(b.min-=n*y),!r(A)&&z&&(b.max+=n*z));D(p.softMin)&&(b.min=Math.min(b.min,p.softMin));D(p.softMax)&&(b.max=Math.max(b.max,p.softMax));D(p.floor)&&(b.min=Math.max(b.min,p.floor));D(p.ceiling)&&(b.max=Math.min(b.max,p.ceiling));t&&r(b.dataMin)&&(J=J||0,!r(K)&&b.min<J&&b.dataMin>=J?b.min=J:!r(A)&&b.max>J&&b.dataMax<=J&&(b.max=J));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:v&&!l&&I===b.linkedParent.options.tickPixelInterval?
l=b.linkedParent.tickInterval:B(l,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,m?1:(b.max-b.min)*I/Math.max(b.len,I));x&&!h&&g(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!l&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));h=B(p.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);
!l&&b.tickInterval<h&&(b.tickInterval=h);q||d||l||(b.tickInterval=G(b.tickInterval,null,e(b.tickInterval),B(p.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,e=a.tickPositioner,p=a.startOnTick,d=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval=
"auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&r(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,
this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=b=e);this.paddedTicks=b.slice(0);this.trimTicks(b,p,d);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||e||this.adjustTickAmount())},trimTicks:function(a,b,c){var h=a[0],e=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-p>a[0];)a.shift();if(c)this.max=e;else for(;this.max+p<a[a.length-
1];)a.pop();0===a.length&&r(h)&&a.push((e+h)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||g(this.chart[this.coll],function(h){var c=h.options,c=[h.horiz?c.left:c.top,c.width,c.height,c.pane].join();h.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!r(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=
2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(f(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());if(r(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,
b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;g(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||
(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,e,p){var h=this,n=h.chart;c=B(c,!0);g(h.series,function(a){delete a.kdTree});p=d(p,{min:a,max:b});k(h,"setExtremes",p,function(){h.userMin=a;h.userMax=b;h.eventArgs=p;c&&n.redraw(e)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,e=this.options,p=Math.min(h,B(e.min,h)),e=Math.max(c,B(e.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(r(h)&&(a<p&&(a=
p),a>e&&(a=e)),r(c)&&(b<p&&(b=p),b>e&&(b=e))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,e=c.offsets||[0,0,0,0],p=this.horiz,d=this.width=Math.round(a.relativeLength(B(c.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),n=this.height=Math.round(a.relativeLength(B(c.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),q=this.top=Math.round(a.relativeLength(B(c.top,b.plotTop+e[0]),b.plotHeight,b.plotTop)),
c=this.left=Math.round(a.relativeLength(B(c.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-n-q;this.right=b.chartWidth-d-c;this.len=Math.max(p?d:n,0);this.pos=p?c:q},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?f(b(this.min)):this.min,max:a?f(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=this.lin2log,c=b?h(this.min):this.min,b=b?h(this.max):this.max;
null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(B(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=B(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,
this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,e=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),d,n=a.rotation,q=this.labelMetrics(),k,f=Number.MAX_VALUE,v,z=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(v=!a.staggerLines&&!a.step&&(r(n)?[n]:p<B(a.autoRotationLimit,80)&&a.autoRotation))&&g(v,function(a){var b;if(a===n||a&&-90<=a&&90>=a)k=z(Math.abs(q.h/Math.sin(u*a))),b=k+Math.abs(a/360),b<f&&(f=b,d=a,e=k)}):
a.step||(e=z(q.h));this.autoRotation=v;this.labelRotation=B(d,n);return e},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/e||!b&&(p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,e=this.tickPositions,p=this.ticks,d=this.options.labels,n=this.horiz,q=this.getSlotWidth(),k=Math.max(1,
Math.round(q-2*(d.padding||5))),f={},v=this.labelMetrics(),z=d.style&&d.style.textOverflow,D,y=0,l,I;J(d.rotation)||(f.rotation=d.rotation||0);g(e,function(a){(a=p[a])&&a.labelLength>y&&(y=a.labelLength)});this.maxLabelLength=y;if(this.autoRotation)y>k&&y>v.h?f.rotation=this.labelRotation:this.labelRotation=0;else if(q&&(D={width:k+"px"},!z))for(D.textOverflow="clip",l=e.length;!n&&l--;)if(I=e[l],k=p[I].label)k.styles&&"ellipsis"===k.styles.textOverflow?k.css({textOverflow:"clip"}):p[I].labelLength>
q&&k.css({width:q+"px"}),k.getBBox().height>this.len/e.length-(v.h-v.f)&&(k.specCss={textOverflow:"ellipsis"});f.rotation&&(D={width:(y>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},z||(D.textOverflow="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))f.align=this.labelAlign;g(e,function(a){var b=(a=p[a])&&a.label;b&&(b.attr(f),D&&b.css(c(D,b.specCss)),delete b.specCss,a.rotation=f.rotation)});this.tickRotCorr=b.rotCorr(v.b,this.labelRotation||0,0!==this.side)},
hasData:function(){return this.hasVisibleSeries||r(this.min)&&r(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,c=this.horiz,h=this.opposite,e=this.options.title,p;this.axisTitle||((p=e.textAlign)||(p=(c?{low:"left",middle:"center",high:"right"}:{low:h?"right":"left",middle:"center",high:h?"left":"right"})[e.align]),this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:p}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),
this.axisTitle.isNew=!0);e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,e=a.options,p=a.tickPositions,d=a.ticks,n=a.horiz,k=a.side,f=b.inverted&&!a.isZAxis?[1,0,3,2][k]:k,v,z,D=0,y,l=0,I=e.title,m=e.labels,G=0,J=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][k],L=e.className,u=a.axisParent,K=this.tickSize("tick");
v=a.hasData();a.showAxis=z=v||B(e.showEmpty,!0);a.staggerLines=a.horiz&&m.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:e.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(L||"")).add(u),a.axisGroup=c.g("axis").attr({zIndex:e.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(L||"")).add(u),a.labelGroup=c.g("axis-labels").attr({zIndex:m.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(L||"")).add(u));v||a.isLinked?(g(p,function(b,
c){a.generateTick(b,c)}),a.renderUnsquish(),!1===m.reserveSpace||0!==k&&2!==k&&{1:"left",3:"right"}[k]!==a.labelAlign&&"center"!==a.labelAlign||g(p,function(a){G=Math.max(d[a].getLabelSize(),G)}),a.staggerLines&&(G*=a.staggerLines,a.labelOffset=G*(a.opposite?-1:1))):q(d,function(a,b){a.destroy();delete d[b]});I&&I.text&&!1!==I.enabled&&(a.addTitle(z),z&&!1!==I.reserveSpace&&(a.titleOffset=D=a.axisTitle.getBBox()[n?"height":"width"],y=I.offset,l=r(y)?0:B(I.margin,n?5:10)));a.renderLine();a.offset=
t*B(e.offset,J[k]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===k?-a.labelMetrics().h:2===k?a.tickRotCorr.y:0;l=Math.abs(G)+l;G&&(l=l-c+t*(n?B(m.y,a.tickRotCorr.y+8*t):m.x));a.axisTitleMargin=B(y,l);J[k]=Math.max(J[k],a.axisTitleMargin+D+t*a.offset,l,v&&p.length&&K?K[0]+t*a.offset:0);p=2*Math.floor(a.axisLine.strokeWidth()/2);0<e.offset&&(p-=2*e.offset);b[f]=Math.max(b[f]||p,p)},getLinePath:function(a){var b=this.chart,c=this.opposite,h=this.offset,e=this.horiz,p=this.left+(c?this.width:0)+h,h=b.chartHeight-
this.bottom-(c?this.height:0)+h;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:p,e?h:this.top,"L",e?b.chartWidth-this.right:p,e?h:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,e=this.len,p=this.options.title,
d=a?b:c,n=this.opposite,q=this.offset,k=p.x||0,g=p.y||0,f=this.axisTitle,v=this.chart.renderer.fontMetrics(p.style&&p.style.fontSize,f),f=Math.max(f.getBBox(null,0).height-v.h-1,0),e={low:d+(a?0:e),middle:d+e/2,high:d+(a?e:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(n?-1:1)*this.axisTitleMargin+[-f,f,v.f,-f][this.side];return{x:a?e+k:b+(n?this.width:0)+q+k,y:a?b+g-(n?this.height:0)+q:e+g}},renderMinorTick:function(a){var b=this.chart.hasRendered&&D(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new I(this,
a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,e=this.ticks,h=this.chart.hasRendered&&D(this.oldMin);if(!c||a>=this.min&&a<=this.max)e[a]||(e[a]=new I(this,a)),h&&e[a].isNew&&e[a].render(b,!0,.1),e[a].render(b)},render:function(){var b=this,c=b.chart,e=b.options,p=b.isLog,d=b.lin2log,n=b.isLinked,k=b.tickPositions,f=b.axisTitle,v=b.ticks,y=b.minorTicks,l=b.alternateBands,m=e.stackLabels,r=e.alternateGridColor,B=b.tickmarkOffset,
G=b.axisLine,J=b.showAxis,t=A(c.renderer.globalAnimation),L,u;b.labelEdge.length=0;b.overlap=!1;g([v,y,l],function(a){q(a,function(a){a.isActive=!1})});if(b.hasData()||n)b.minorTickInterval&&!b.categories&&g(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),k.length&&(g(k,function(a,c){b.renderTick(a,c)}),B&&(0===b.min||b.single)&&(v[-1]||(v[-1]=new I(b,-1,null,!0)),v[-1].render(-1))),r&&g(k,function(e,h){u=void 0!==k[h+1]?k[h+1]+B:b.max-B;0===h%2&&e<b.max&&u<=b.max+(c.polar?-B:B)&&(l[e]||
(l[e]=new a.PlotLineOrBand(b)),L=e+B,l[e].options={from:p?d(L):L,to:p?d(u):u,color:r},l[e].render(),l[e].isActive=!0)}),b._addedPlotLB||(g((e.plotLines||[]).concat(e.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);g([v,y,l],function(a){var b,e=[],h=t.duration;q(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,e.push(b))});z(function(){for(b=e.length;b--;)a[e[b]]&&!a[e[b]].isActive&&(a[e[b]].destroy(),delete a[e[b]])},a!==l&&c.hasRendered&&h?h:0)});G&&(G[G.isPlaced?
"animate":"attr"]({d:this.getLinePath(G.strokeWidth())}),G.isPlaced=!0,G[J?"show":"hide"](!0));f&&J&&(e=b.getTitlePosition(),D(e.y)?(f[f.isNew?"attr":"animate"](e),f.isNew=!1):(f.attr("y",-9999),f.isNew=!0));m&&m.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),g(this.plotLinesAndBands,function(a){a.render()}));g(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,
e=b.plotLinesAndBands,h;a||K(b);q(c,function(a,b){t(a);c[b]=null});g([b.ticks,b.minorTicks,b.alternateBands],function(a){t(a)});if(e)for(a=e.length;a--;)e[a].destroy();g("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(h in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[h]=b.plotLinesAndBandsGroups[h].destroy();q(b,function(a,c){-1===y(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var c,e=this.crosshair,
h=B(e.snap,!0),p,d=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(r(b)||!h)?(h?r(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),r(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:B(b.stackY,b.y)),null,null,null,p)||null),r(c)?(b=this.categories&&!this.isRadial,d||(this.cross=d=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:B(e.zIndex,2)}).add(),
d.attr({stroke:e.color||(b?m("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":B(e.width,1)}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})),d.show().attr({d:c}),b&&!e.width&&d.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=L}(M);(function(a){var C=a.Axis,A=a.Date,F=a.dateFormat,E=a.defaultOptions,m=a.defined,f=a.each,l=a.extend,r=a.getMagnitude,u=a.getTZOffset,t=a.normalizeTickInterval,
g=a.pick,d=a.timeUnits;C.prototype.getTimeTicks=function(a,b,e,v){var k=[],n={},D=E.global.useUTC,r,c=new A(b-Math.max(u(b),u(e))),G=A.hcMakeTime,q=a.unitRange,B=a.count,t,p;if(m(b)){c[A.hcSetMilliseconds](q>=d.second?0:B*Math.floor(c.getMilliseconds()/B));if(q>=d.second)c[A.hcSetSeconds](q>=d.minute?0:B*Math.floor(c.getSeconds()/B));if(q>=d.minute)c[A.hcSetMinutes](q>=d.hour?0:B*Math.floor(c[A.hcGetMinutes]()/B));if(q>=d.hour)c[A.hcSetHours](q>=d.day?0:B*Math.floor(c[A.hcGetHours]()/B));if(q>=d.day)c[A.hcSetDate](q>=
d.month?1:B*Math.floor(c[A.hcGetDate]()/B));q>=d.month&&(c[A.hcSetMonth](q>=d.year?0:B*Math.floor(c[A.hcGetMonth]()/B)),r=c[A.hcGetFullYear]());if(q>=d.year)c[A.hcSetFullYear](r-r%B);if(q===d.week)c[A.hcSetDate](c[A.hcGetDate]()-c[A.hcGetDay]()+g(v,1));r=c[A.hcGetFullYear]();v=c[A.hcGetMonth]();var z=c[A.hcGetDate](),I=c[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)p=(!D||!!A.hcGetTimezoneOffset)&&(e-b>4*d.month||u(b)!==u(e)),c=c.getTime(),t=u(c),c=new A(c+t);D=c.getTime();for(b=1;D<
e;)k.push(D),D=q===d.year?G(r+b*B,0):q===d.month?G(r,v+b*B):!p||q!==d.day&&q!==d.week?p&&q===d.hour?G(r,v,z,I+b*B,0,0,t)-t:D+q*B:G(r,v,z+b*B*(q===d.day?1:7)),b++;k.push(D);q<=d.hour&&1E4>k.length&&f(k,function(a){0===a%18E5&&"000000000"===F("%H%M%S%L",a)&&(n[a]="day")})}k.info=l(a,{higherRanks:n,totalRange:q*B});return k};C.prototype.normalizeTimeTickInterval=function(a,b){var e=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,
2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];b=e[e.length-1];var k=d[b[0]],g=b[1],n;for(n=0;n<e.length&&!(b=e[n],k=d[b[0]],g=b[1],e[n+1]&&a<=(k*g[g.length-1]+d[e[n+1][0]])/2);n++);k===d.year&&a<5*k&&(g=[1,2,5]);a=t(a/k,g,"year"===b[0]?Math.max(r(a/k),1):1);return{unitRange:k,count:a,unitName:b[0]}}})(M);(function(a){var C=a.Axis,A=a.getMagnitude,F=a.map,E=a.normalizeTickInterval,m=a.pick;C.prototype.getLogTickPositions=function(a,l,r,u){var f=this.options,g=this.len,
d=this.lin2log,k=this.log2lin,b=[];u||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),b=this.getLinearTickPositions(a,l,r);else if(.08<=a)for(var g=Math.floor(l),e,v,y,n,D,f=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];g<r+1&&!D;g++)for(v=f.length,e=0;e<v&&!D;e++)y=k(d(g)*f[e]),y>l&&(!u||n<=r)&&void 0!==n&&b.push(n),n>r&&(D=!0),n=y;else l=d(l),r=d(r),a=f[u?"minorTickInterval":"tickInterval"],a=m("auto"===a?null:a,this._minorAutoInterval,f.tickPixelInterval/(u?5:1)*(r-l)/((u?g/this.tickPositions.length:
g)||1)),a=E(a,null,A(a)),b=F(this.getLinearTickPositions(a,l,r),k),u||(this._minorAutoInterval=a/5);u||(this.tickInterval=a);return b};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)}})(M);(function(a,C){var A=a.arrayMax,F=a.arrayMin,E=a.defined,m=a.destroyObjectProperties,f=a.each,l=a.erase,r=a.merge,u=a.pick;a.PlotLineOrBand=function(a,g){this.axis=a;g&&(this.options=g,this.id=g.id)};a.PlotLineOrBand.prototype={render:function(){var f=
this,g=f.axis,d=g.horiz,k=f.options,b=k.label,e=f.label,v=k.to,l=k.from,n=k.value,D=E(l)&&E(v),m=E(n),c=f.svgElem,G=!c,q=[],B=k.color,K=u(k.zIndex,0),p=k.events,q={"class":"highcharts-plot-"+(D?"band ":"line ")+(k.className||"")},z={},I=g.chart.renderer,L=D?"bands":"lines",h=g.log2lin;g.isLog&&(l=h(l),v=h(v),n=h(n));m?(q={stroke:B,"stroke-width":k.width},k.dashStyle&&(q.dashstyle=k.dashStyle)):D&&(B&&(q.fill=B),k.borderWidth&&(q.stroke=k.borderColor,q["stroke-width"]=k.borderWidth));z.zIndex=K;L+=
"-"+K;(B=g.plotLinesAndBandsGroups[L])||(g.plotLinesAndBandsGroups[L]=B=I.g("plot-"+L).attr(z).add());G&&(f.svgElem=c=I.path().attr(q).add(B));if(m)q=g.getPlotLinePath(n,c.strokeWidth());else if(D)q=g.getPlotBandPath(l,v,k);else return;G&&q&&q.length?(c.attr({d:q}),p&&a.objectEach(p,function(a,b){c.on(b,function(a){p[b].apply(f,[a])})})):c&&(q?(c.show(),c.animate({d:q})):(c.hide(),e&&(f.label=e=e.destroy())));b&&E(b.text)&&q&&q.length&&0<g.width&&0<g.height&&!q.flat?(b=r({align:d&&D&&"center",x:d?
!D&&4:10,verticalAlign:!d&&D&&"middle",y:d?D?16:10:D?6:-4,rotation:d&&!D&&90},b),this.renderLabel(b,q,D,K)):e&&e.hide();return f},renderLabel:function(a,g,d,k){var b=this.label,e=this.axis.chart.renderer;b||(b={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},b.zIndex=k,this.label=b=e.text(a.text,0,0,a.useHTML).attr(b).add(),b.css(a.style));k=[g[1],g[4],d?g[6]:g[1]];g=[g[2],g[5],d?g[7]:g[2]];d=F(k);e=F(g);b.align(a,!1,{x:d,y:e,
width:A(k)-d,height:A(g)-e});b.show()},destroy:function(){l(this.axis.plotLinesAndBands,this);delete this.axis;m(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,g){var d=this.getPlotLinePath(g,null,null,!0),k=this.getPlotLinePath(a,null,null,!0),b=this.horiz,e=1;a=a<this.min&&g<this.min||a>this.max&&g>this.max;k&&d?(a&&(k.flat=k.toString()===d.toString(),e=0),k.push(b&&d[4]===k[4]?d[4]+e:d[4],b||d[5]!==k[5]?d[5]:d[5]+e,b&&d[1]===k[1]?d[1]+e:d[1],b||d[2]!==k[2]?d[2]:d[2]+e)):k=null;return k},
addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,g){var d=(new a.PlotLineOrBand(this,f)).render(),k=this.userOptions;d&&(g&&(k[g]=k[g]||[],k[g].push(f)),this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var g=this.plotLinesAndBands,d=this.options,k=this.userOptions,b=g.length;b--;)g[b].id===a&&g[b].destroy();f([d.plotLines||[],k.plotLines||[],d.plotBands||
[],k.plotBands||[]],function(e){for(b=e.length;b--;)e[b].id===a&&l(e,e[b])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(M,S);(function(a){var C=a.dateFormat,A=a.each,F=a.extend,E=a.format,m=a.isNumber,f=a.map,l=a.merge,r=a.pick,u=a.splat,t=a.syncTimeout,g=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,k){this.chart=a;this.options=k;this.crosshairs=[];this.now={x:0,y:0};
this.isHidden=!0;this.split=k.split&&!a.inverted;this.shared=k.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(d){var b=d&&d.tt;b&&(!b.isActive||a?d.tt=b.destroy():b.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,k=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,k.shape||"callout",null,null,k.useHTML,null,"tooltip").attr({padding:k.padding,r:k.borderRadius}),this.label.attr({fill:k.backgroundColor,"stroke-width":k.borderWidth}).css(k.style).shadow(k.shadow)),
this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();l(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,l(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,k,b,e){var d=this,g=d.now,n=!1!==d.options.animation&&!d.isHidden&&(1<Math.abs(a-g.x)||1<Math.abs(k-
g.y)),f=d.followPointer||1<d.len;F(g,{x:n?(2*g.x+a)/3:a,y:n?(g.y+k)/2:k,anchorX:f?void 0:n?(2*g.anchorX+b)/3:b,anchorY:f?void 0:n?(g.anchorY+e)/2:e});d.getLabel().attr(g);n&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){d&&d.move(a,k,b,e)},32))},hide:function(a){var d=this;clearTimeout(this.hideTimer);a=r(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=t(function(){d.getLabel()[a?"fadeOut":"hide"]();d.isHidden=!0},a))},getAnchor:function(a,k){var b,e=this.chart,
d=e.inverted,g=e.plotTop,n=e.plotLeft,l=0,m=0,c,r;a=u(a);b=a[0].tooltipPos;this.followPointer&&k&&(void 0===k.chartX&&(k=e.pointer.normalize(k)),b=[k.chartX-e.plotLeft,k.chartY-g]);b||(A(a,function(a){c=a.series.yAxis;r=a.series.xAxis;l+=a.plotX+(!d&&r?r.left-n:0);m+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!d&&c?c.top-g:0)}),l/=a.length,m/=a.length,b=[d?e.plotWidth-m:l,this.shared&&!d&&1<a.length&&k?k.chartY-g:d?e.plotHeight-l:m]);return f(b,Math.round)},getPosition:function(a,g,b){var e=this.chart,
d=this.distance,k={},n=b.h||0,f,l=["y",e.chartHeight,g,b.plotY+e.plotTop,e.plotTop,e.plotTop+e.plotHeight],c=["x",e.chartWidth,a,b.plotX+e.plotLeft,e.plotLeft,e.plotLeft+e.plotWidth],m=!this.followPointer&&r(b.ttBelow,!e.inverted===!!b.negative),q=function(a,b,c,e,p,q){var h=c<e-d,g=e+d+c<b,f=e-d-c;e+=d;if(m&&g)k[a]=e;else if(!m&&h)k[a]=f;else if(h)k[a]=Math.min(q-c,0>f-n?f:f-n);else if(g)k[a]=Math.max(p,e+n+c>b?e:e+n);else return!1},B=function(a,b,c,e){var h;e<d||e>b-d?h=!1:k[a]=e<c/2?1:e>b-c/2?
b-c-2:e-c/2;return h},t=function(a){var b=l;l=c;c=b;f=a},p=function(){!1!==q.apply(0,l)?!1!==B.apply(0,c)||f||(t(!0),p()):f?k.x=k.y=0:(t(!0),p())};(e.inverted||1<this.len)&&t();p();return k},defaultFormatter:function(a){var d=this.points||u(this),b;b=[a.tooltipFooterHeaderFormatter(d[0])];b=b.concat(a.bodyFormatter(d));b.push(a.tooltipFooterHeaderFormatter(d[0],!0));return b},refresh:function(a,g){var b,e=this.options,d,k=a,n,f={},l=[];b=e.formatter||this.defaultFormatter;var f=this.shared,c;e.enabled&&
(clearTimeout(this.hideTimer),this.followPointer=u(k)[0].series.tooltipOptions.followPointer,n=this.getAnchor(k,g),g=n[0],d=n[1],!f||k.series&&k.series.noSharedTooltip?f=k.getLabelConfig():(A(k,function(a){a.setState("hover");l.push(a.getLabelConfig())}),f={x:k[0].category,y:k[0].y},f.points=l,k=k[0]),this.len=l.length,f=b.call(f,this),c=k.series,this.distance=r(c.tooltipOptions.distance,16),!1===f?this.hide():(b=this.getLabel(),this.isHidden&&b.attr({opacity:1}).show(),this.split?this.renderSplit(f,
a):(e.style.width||b.css({width:this.chart.spacingBox.width}),b.attr({text:f&&f.join?f.join(""):f}),b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+r(k.colorIndex,c.colorIndex)),b.attr({stroke:e.borderColor||k.color||c.color||"#666666"}),this.updatePosition({plotX:g,plotY:d,negative:k.negative,ttBelow:k.ttBelow,h:n[2]||0})),this.isHidden=!1))},renderSplit:function(d,k){var b=this,e=[],g=this.chart,f=g.renderer,n=!0,l=this.options,m=0,c=this.getLabel();A(d.slice(0,k.length+1),
function(a,d){if(!1!==a){d=k[d-1]||{isHeader:!0,plotX:k[0].plotX};var q=d.series||b,v=q.tt,p=d.series||{},z="highcharts-color-"+r(d.colorIndex,p.colorIndex,"none");v||(q.tt=v=f.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+z).attr({padding:l.padding,r:l.borderRadius,fill:l.backgroundColor,stroke:l.borderColor||d.color||p.color||"#333333","stroke-width":l.borderWidth}).add(c));v.isActive=!0;v.attr({text:a});v.css(l.style).shadow(l.shadow);a=v.getBBox();p=a.width+v.strokeWidth();
d.isHeader?(m=a.height,p=Math.max(0,Math.min(d.plotX+g.plotLeft-p/2,g.chartWidth-p))):p=d.plotX+g.plotLeft-r(l.distance,16)-p;0>p&&(n=!1);a=(d.series&&d.series.yAxis&&d.series.yAxis.pos)+(d.plotY||0);a-=g.plotTop;e.push({target:d.isHeader?g.plotHeight+m:a,rank:d.isHeader?1:0,size:q.tt.getBBox().height+1,point:d,x:p,tt:v})}});this.cleanSplit();a.distribute(e,g.plotHeight+m);A(e,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:n||b.isHeader?a.x:b.plotX+
g.plotLeft+r(l.distance,16),y:a.pos+g.plotTop,anchorX:b.isHeader?b.plotX+g.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+g.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var d=this.chart,b=this.getLabel(),b=(this.options.positioner||this.getPosition).call(this,b.width,b.height,a);this.move(Math.round(b.x),Math.round(b.y||0),a.plotX+d.plotLeft,a.plotY+d.plotTop)},getDateFormat:function(a,k,b,e){var d=C("%m-%d %H:%M:%S.%L",k),f,n,l={millisecond:15,second:12,minute:9,hour:6,day:3},
m="millisecond";for(n in g){if(a===g.week&&+C("%w",k)===b&&"00:00:00.000"===d.substr(6)){n="week";break}if(g[n]>a){n=m;break}if(l[n]&&d.substr(l[n])!=="01-01 00:00:00.000".substr(l[n]))break;"week"!==n&&(m=n)}n&&(f=e[n]);return f},getXDateFormat:function(a,g,b){g=g.dateTimeLabelFormats;var e=b&&b.closestPointRange;return(e?this.getDateFormat(e,a.x,b.options.startOfWeek,g):g.day)||g.year},tooltipFooterHeaderFormatter:function(a,g){var b=g?"footer":"header";g=a.series;var e=g.tooltipOptions,d=e.xDateFormat,
k=g.xAxis,n=k&&"datetime"===k.options.type&&m(a.key),b=e[b+"Format"];n&&!d&&(d=this.getXDateFormat(a,e,k));n&&d&&(b=b.replace("{point.key}","{point.key:"+d+"}"));return E(b,{point:a,series:g})},bodyFormatter:function(a){return f(a,function(a){var b=a.series.tooltipOptions;return(b.pointFormatter||a.point.tooltipFormatter).call(a.point,b.pointFormat)})}}})(M);(function(a){var C=a.addEvent,A=a.attr,F=a.charts,E=a.color,m=a.css,f=a.defined,l=a.each,r=a.extend,u=a.find,t=a.fireEvent,g=a.isObject,d=a.offset,
k=a.pick,b=a.removeEvent,e=a.splat,v=a.Tooltip,y=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};v&&(a.tooltip=new v(a,b.tooltip),this.followTouchMove=k(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,e=b.options.chart,c=e.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(c=k(e.pinchType,c));
this.zoomX=a=/x/.test(c);this.zoomY=c=/y/.test(c);this.zoomHor=a&&!b||c&&b;this.zoomVert=c&&!b||a&&b;this.hasZoom=a||c},normalize:function(a,b){var e,c;a=a||y.event;a.target||(a.target=a.srcElement);c=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=d(this.chart.container));void 0===c.pageX?(e=Math.max(a.x,a.clientX-b.left),b=a.y):(e=c.pageX-b.left,b=c.pageY-b.top);return r(a,{chartX:Math.round(e),chartY:Math.round(b)})},getCoordinates:function(a){var b=
{xAxis:[],yAxis:[]};l(this.chart.axes,function(e){b[e.isXAxis?"xAxis":"yAxis"].push({axis:e,value:e.toValue(a[e.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,e){var c;l(a,function(a){var d=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(e,d);if((d=g(a,!0))&&!(d=!g(c,!0)))var d=c.distX-a.distX,n=c.dist-a.dist,k=(a.series.group&&a.series.group.zIndex)-(c.series.group&&c.series.group.zIndex),d=0<(0!==d&&b?d:0!==n?n:0!==k?k:c.series.index>
a.series.index?-1:1);d&&(c=a)});return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var e=a.series,c=e.xAxis,e=e.yAxis;if(c&&e)return b?{chartX:c.len+c.pos-a.clientX,chartY:e.len+e.pos-a.plotY}:{chartX:a.clientX+c.pos,chartY:a.plotY+e.pos}},getHoverData:function(b,e,d,c,f,q){var n,v=[];c=!(!c||!b);var p=e&&!e.stickyTracking?[e]:a.grep(d,function(a){return a.visible&&!(!f&&a.directTouch)&&k(a.options.enableMouseTracking,
!0)&&a.stickyTracking});e=(n=c?b:this.findNearestKDPoint(p,f,q))&&n.series;n&&(f&&!e.noSharedTooltip?(p=a.grep(d,function(a){return a.visible&&!(!f&&a.directTouch)&&k(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),l(p,function(a){a=u(a.points,function(a){return a.x===n.x});g(a)&&!a.isNull&&v.push(a)})):v.push(n));return{hoverPoint:n,hoverSeries:e,hoverPoints:v}},runPointActions:function(b,e){var d=this.chart,c=d.tooltip,g=c?c.shared:!1,n=e||d.hoverPoint,f=n&&n.series||d.hoverSeries,f=this.getHoverData(n,
f,d.series,!!e||f&&f.directTouch&&this.isDirectTouch,g,b),v,n=f.hoverPoint;v=f.hoverPoints;e=(f=f.hoverSeries)&&f.tooltipOptions.followPointer;g=g&&f&&!f.noSharedTooltip;if(n&&(n!==d.hoverPoint||c&&c.isHidden)){l(d.hoverPoints||[],function(b){-1===a.inArray(b,v)&&b.setState()});l(v||[],function(a){a.setState("hover")});if(d.hoverSeries!==f)f.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");n.firePointEvent("mouseOver");d.hoverPoints=v;d.hoverPoint=n;c&&c.refresh(g?v:n,b)}else e&&
c&&!c.isHidden&&(n=c.getAnchor([{}],b),c.updatePosition({plotX:n[0],plotY:n[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(d.container.ownerDocument,"mousemove",function(b){var c=F[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));l(d.axes,function(c){var e=k(c.crosshair.snap,!0),p=e?a.find(v,function(a){return a.series[c.coll]===c}):void 0;p||!e?c.drawCrosshair(b,p):c.hideCrosshair()})},reset:function(a,b){var d=this.chart,c=d.hoverSeries,g=d.hoverPoint,n=d.hoverPoints,f=d.tooltip,k=
f&&f.shared?n:g;a&&k&&l(e(k),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)f&&k&&(f.refresh(k),g&&(g.setState(g.state,!0),l(d.axes,function(a){a.crosshair&&a.drawCrosshair(null,g)})));else{if(g)g.onMouseOut();n&&l(n,function(a){a.setState()});if(c)c.onMouseOut();f&&f.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());l(d.axes,function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var e=this.chart,c;l(e.series,
function(d){c=a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(c),d.markerGroup&&(d.markerGroup.attr(c),d.markerGroup.clip(b?e.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(c))});e.clipRect.attr(b||e.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,e=b.options.chart,c=a.chartX,d=a.chartY,g=this.zoomHor,n=this.zoomVert,
f=b.plotLeft,p=b.plotTop,k=b.plotWidth,v=b.plotHeight,l,h=this.selectionMarker,w=this.mouseDownX,m=this.mouseDownY,r=e.panKey&&a[e.panKey+"Key"];h&&h.touch||(c<f?c=f:c>f+k&&(c=f+k),d<p?d=p:d>p+v&&(d=p+v),this.hasDragged=Math.sqrt(Math.pow(w-c,2)+Math.pow(m-d,2)),10<this.hasDragged&&(l=b.isInsidePlot(w-f,m-p),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!r&&!h&&(this.selectionMarker=h=b.renderer.rect(f,p,g?1:k,n?1:v,0).attr({fill:e.selectionMarkerFill||E("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",
zIndex:7}).add()),h&&g&&(c-=w,h.attr({width:Math.abs(c),x:(0<c?0:c)+w})),h&&n&&(c=d-m,h.attr({height:Math.abs(c),y:(0<c?0:c)+m})),l&&!h&&e.panning&&b.pan(a,e.panning)))},drop:function(a){var b=this,e=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},g=this.selectionMarker,n=g.attr?g.attr("x"):g.x,k=g.attr?g.attr("y"):g.y,p=g.attr?g.attr("width"):g.width,v=g.attr?g.attr("height"):g.height,I;if(this.hasDragged||c)l(e.axes,function(e){if(e.zoomEnabled&&f(e.min)&&
(c||b[{xAxis:"zoomX",yAxis:"zoomY"}[e.coll]])){var h=e.horiz,g="touchend"===a.type?e.minPixelPadding:0,q=e.toValue((h?n:k)+g),h=e.toValue((h?n+p:k+v)-g);d[e.coll].push({axis:e,min:Math.min(q,h),max:Math.max(q,h)});I=!0}}),I&&t(e,"selection",d,function(a){e.zoom(r(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}e&&(m(e.container,{cursor:e._cursor}),e.cancelClick=10<this.hasDragged,e.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=
[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){F[a.hoverChartIndex]&&F[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,e=this.chartPosition;a=this.normalize(a,e);!e||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var e=F[a.hoverChartIndex];e&&(b.relatedTarget||
b.toElement)&&(e.pointer.reset(),e.pointer.chartPosition=null)},onContainerMouseMove:function(b){var e=this.chart;f(a.hoverChartIndex)&&F[a.hoverChartIndex]&&F[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=e.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===e.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!e.isInsidePlot(b.chartX-e.plotLeft,b.chartY-e.plotTop)||e.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var e;a;){if(e=A(a,"class")){if(-1!==
e.indexOf(b))return!0;if(-1!==e.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,e=b.hoverPoint,c=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||(e&&this.inClass(a.target,
"highcharts-tracker")?(t(e.series,"click",r(a,{point:e})),b.hoverPoint&&e.firePointEvent("click",a)):(r(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-c,a.chartY-d)&&t(b,"click",a)))},setDOMEvents:function(){var b=this,e=b.chart.container,d=e.ownerDocument;e.onmousedown=function(a){b.onContainerMouseDown(a)};e.onmousemove=function(a){b.onContainerMouseMove(a)};e.onclick=function(a){b.onContainerClick(a)};C(e,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&C(d,"mouseup",b.onDocumentMouseUp);
a.hasTouch&&(e.ontouchstart=function(a){b.onContainerTouchStart(a)},e.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&C(d,"touchend",b.onDocumentTouchEnd))},destroy:function(){var e=this,d=this.chart.container.ownerDocument;e.unDocMouseMove&&e.unDocMouseMove();b(e.chart.container,"mouseleave",e.onContainerMouseLeave);a.chartCount||(b(d,"mouseup",e.onDocumentMouseUp),a.hasTouch&&b(d,"touchend",e.onDocumentTouchEnd));clearInterval(e.tooltipTimeout);a.objectEach(e,function(a,b){e[b]=
null})}}})(M);(function(a){var C=a.charts,A=a.each,F=a.extend,E=a.map,m=a.noop,f=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,f,m,t,g,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,m,t,g,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,f,m,t,g,d)},pinchTranslateDirection:function(a,f,m,t,g,d,k,b){var e=this.chart,v=a?"x":"y",l=a?"X":"Y",n="chart"+l,r=a?"width":"height",u=e["plot"+(a?"Left":"Top")],c,G,q=b||1,B=e.inverted,K=e.bounds[a?"h":"v"],p=1===f.length,z=f[0][n],I=m[0][n],
L=!p&&f[1][n],h=!p&&m[1][n],w;m=function(){!p&&20<Math.abs(z-L)&&(q=b||Math.abs(I-h)/Math.abs(z-L));G=(u-I)/q+z;c=e["plot"+(a?"Width":"Height")]/q};m();f=G;f<K.min?(f=K.min,w=!0):f+c>K.max&&(f=K.max-c,w=!0);w?(I-=.8*(I-k[v][0]),p||(h-=.8*(h-k[v][1])),m()):k[v]=[I,h];B||(d[v]=G-u,d[r]=c);d=B?1/q:q;g[r]=c;g[v]=f;t[B?a?"scaleY":"scaleX":"scale"+l]=q;t["translate"+l]=d*u+(I-d*z)},pinch:function(a){var l=this,u=l.chart,t=l.pinchDown,g=a.touches,d=g.length,k=l.lastValidTouch,b=l.hasZoom,e=l.selectionMarker,
v={},y=1===d&&(l.inClass(a.target,"highcharts-tracker")&&u.runTrackerClick||l.runChartClick),n={};1<d&&(l.initiated=!0);b&&l.initiated&&!y&&a.preventDefault();E(g,function(a){return l.normalize(a)});"touchstart"===a.type?(A(g,function(a,b){t[b]={chartX:a.chartX,chartY:a.chartY}}),k.x=[t[0].chartX,t[1]&&t[1].chartX],k.y=[t[0].chartY,t[1]&&t[1].chartY],A(u.axes,function(a){if(a.zoomEnabled){var b=u.bounds[a.horiz?"h":"v"],e=a.minPixelPadding,d=a.toPixels(f(a.options.min,a.dataMin)),g=a.toPixels(f(a.options.max,
a.dataMax)),k=Math.max(d,g);b.min=Math.min(a.pos,Math.min(d,g)-e);b.max=Math.max(a.pos+a.len,k+e)}}),l.res=!0):l.followTouchMove&&1===d?this.runPointActions(l.normalize(a)):t.length&&(e||(l.selectionMarker=e=F({destroy:m,touch:!0},u.plotBox)),l.pinchTranslate(t,g,v,e,n,k),l.hasPinched=b,l.scaleGroups(v,n),l.res&&(l.res=!1,this.reset(!1,0)))},touch:function(l,m){var r=this.chart,t,g;if(r.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=r.index;1===l.touches.length?
(l=this.normalize(l),(g=r.isInsidePlot(l.chartX-r.plotLeft,l.chartY-r.plotTop))&&!r.openMenu?(m&&this.runPointActions(l),"touchmove"===l.type&&(m=this.pinchDown,t=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-l.chartX,2)+Math.pow(m[0].chartY-l.chartY,2)):!1),f(t,!0)&&this.pinch(l)):m&&this.reset()):2===l.touches.length&&this.pinch(l)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){C[a.hoverChartIndex]&&
C[a.hoverChartIndex].pointer.drop(f)}})})(M);(function(a){var C=a.addEvent,A=a.charts,F=a.css,E=a.doc,m=a.extend,f=a.noop,l=a.Pointer,r=a.removeEvent,u=a.win,t=a.wrap;if(!a.hasTouch&&(u.PointerEvent||u.MSPointerEvent)){var g={},d=!!u.PointerEvent,k=function(){var b=[];b.item=function(a){return this[a]};a.objectEach(g,function(a){b.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return b},b=function(b,d,g,n){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||
(n(b),n=A[a.hoverChartIndex].pointer,n[d]({type:g,target:b.currentTarget,preventDefault:f,touches:k()}))};m(l.prototype,{onContainerPointerDown:function(a){b(a,"onContainerTouchStart","touchstart",function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){b(a,"onContainerTouchMove","touchmove",function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY};g[a.pointerId].target||(g[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){b(a,
"onDocumentTouchEnd","touchend",function(a){delete g[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(E,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});t(l.prototype,"init",function(a,b,d){a.call(this,b,d);this.hasZoom&&F(b.container,{"-ms-touch-action":"none","touch-action":"none"})});t(l.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});t(l.prototype,"destroy",function(a){this.batchMSEvents(r);a.call(this)})}})(M);(function(a){var C=a.addEvent,A=a.css,F=a.discardElement,E=a.defined,m=a.each,f=a.isFirefox,l=a.marginNames,r=a.merge,u=a.pick,t=a.setAnimation,g=a.stableSort,d=a.win,k=a.wrap;a.Legend=function(a,e){this.init(a,e)};a.Legend.prototype={init:function(a,e){this.chart=a;this.setOptions(e);e.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},
setOptions:function(a){var b=u(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=r(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=u(a.symbolWidth,16);this.pages=[]},update:function(a,e){var b=this.chart;this.setOptions(r(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;u(e,!0)&&b.redraw()},colorizeItem:function(a,e){a.legendGroup[e?"removeClass":
"addClass"]("highcharts-legend-item-hidden");var b=this.options,d=a.legendItem,g=a.legendLine,f=a.legendSymbol,k=this.itemHiddenStyle.color,b=e?b.itemStyle.color:k,c=e?a.color||k:k,l=a.options&&a.options.marker,q={fill:c};d&&d.css({fill:b,color:b});g&&g.attr({stroke:c});f&&(l&&f.isMarker&&(q=a.pointAttribs(),e||(q.stroke=q.fill=k)),f.attr(q))},positionItem:function(a){var b=this.options,d=b.symbolPadding,b=!b.rtl,g=a._legendItemPos,f=g[0],g=g[1],k=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?
f:this.legendWidth-f-2*d-4,g);k&&(k.x=f,k.y=g)},destroyItem:function(a){var b=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&F(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}m(this.getAllItems(),function(b){m(["legendItem","legendGroup"],a,b)});m("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,
d,g=this.clipHeight||this.legendHeight,f=this.titleHeight;b&&(d=b.translateY,m(this.allItems,function(e){var k=e.checkbox,c;k&&(c=d+f+k.y+(a||0)+3,A(k,{left:b.translateX+e.checkboxOffset+k.x-20+"px",top:c+"px",display:c>d-6&&c<d+g-6?"":"none"}))}))},renderTitle:function(){var a=this.options,e=this.padding,d=a.title,g=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,e-3,e-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),
g=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:g}));this.titleHeight=g},setText:function(b){var e=this.options;b.legendItem.attr({text:e.labelFormat?a.format(e.labelFormat,b):e.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,d=b.renderer,g=this.options,f="horizontal"===g.layout,k=this.symbolWidth,l=g.symbolPadding,c=this.itemStyle,m=this.itemHiddenStyle,q=this.padding,B=f?u(g.itemDistance,20):0,t=!g.rtl,p=g.width,z=g.itemMarginBottom||0,I=this.itemMarginTop,
L=a.legendItem,h=!a.series,w=!h&&a.series.drawLegendSymbol?a.series:a,P=w.options,H=this.createCheckboxForItem&&P&&P.showCheckbox,P=k+l+B+(H?20:0),O=g.useHTML,A=a.options.className;L||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+w.type+"-series highcharts-color-"+a.colorIndex+(A?" "+A:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=L=d.text("",t?k+l:-l,this.baseline||0,O).css(r(a.visible?c:m)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),
this.baseline||(k=c.fontSize,this.fontMetrics=d.fontMetrics(k,L),this.baseline=this.fontMetrics.f+3+I,L.attr("y",this.baseline)),this.symbolHeight=g.symbolHeight||this.fontMetrics.f,w.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,L,O),H&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);c.width||L.css({width:(g.itemWidth||g.width||b.spacingBox.width)-P});this.setText(a);d=L.getBBox();c=a.checkboxOffset=g.itemWidth||a.legendItemWidth||d.width+P;this.itemHeight=d=Math.round(a.legendItemHeight||
d.height||this.symbolHeight);f&&this.itemX-q+c>(p||b.spacingBox.width-2*q-g.x)&&(this.itemX=q,this.itemY+=I+this.lastLineHeight+z,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,c);this.lastItemY=I+this.itemY+z;this.lastLineHeight=Math.max(d,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=c:(this.itemY+=I+d+z,this.lastLineHeight=d);this.offsetWidth=p||Math.max((f?this.itemX-q-(a.checkbox?0:B):c)+q,this.offsetWidth)},getAllItems:function(){var a=[];m(this.chart.series,
function(b){var e=b&&b.options;b&&u(e.showInLegend,E(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===e.legendType?b.data:b)))});return a},adjustMargins:function(a,e){var b=this.chart,d=this.options,g=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);d.floating||m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,k){f.test(g)&&!E(a[k])&&(b[l[k]]=Math.max(b[l[k]],b.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*d[k%2?"x":"y"]+u(d.margin,
12)+e[k]))})},render:function(){var a=this,e=a.chart,d=e.renderer,f=a.group,k,l,t,c,u=a.box,q=a.options,B=a.padding;a.itemX=B;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;f||(a.group=f=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(f),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();k=a.getAllItems();g(k,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});q.reversed&&k.reverse();a.allItems=k;a.display=l=
!!k.length;a.lastLineHeight=0;m(k,function(b){a.renderItem(b)});t=(q.width||a.offsetWidth)+B;c=a.lastItemY+a.lastLineHeight+a.titleHeight;c=a.handleOverflow(c);c+=B;u||(a.box=u=d.rect().addClass("highcharts-legend-box").attr({r:q.borderRadius}).add(f),u.isNew=!0);u.attr({stroke:q.borderColor,"stroke-width":q.borderWidth||0,fill:q.backgroundColor||"none"}).shadow(q.shadow);0<t&&0<c&&(u[u.isNew?"attr":"animate"](u.crisp({x:0,y:0,width:t,height:c},u.strokeWidth())),u.isNew=!1);u[l?"show":"hide"]();a.legendWidth=
t;a.legendHeight=c;m(k,function(b){a.positionItem(b)});l&&f.align(r(q,{width:t,height:c}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,d=this.chart,g=d.renderer,f=this.options,k=f.y,l=this.padding,d=d.spacingBox.height+("top"===f.verticalAlign?-k:k)-l,k=f.maxHeight,c,r=this.clipRect,q=f.navigation,B=u(q.animation,!0),t=q.arrowSize||12,p=this.nav,z=this.pages,I,L=this.allItems,h=function(a){"number"===typeof a?r.attr({height:a}):r&&(b.clipRect=r.destroy(),
b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+l+"px,9999px,"+(l+a)+"px,0)":"auto")};"horizontal"!==f.layout||"middle"===f.verticalAlign||f.floating||(d/=2);k&&(d=Math.min(d,k));z.length=0;a>d&&!1!==q.enabled?(this.clipHeight=c=Math.max(d-20-this.titleHeight-l,0),this.currentPage=u(this.currentPage,1),this.fullHeight=a,m(L,function(a,b){var e=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=z.length;if(!d||e-z[d-1]>c&&(I||e)!==z[d-1])z.push(I||
e),d++;b===L.length-1&&e+a-z[d-1]>c&&z.push(e);e!==I&&(I=e)}),r||(r=b.clipRect=g.clipRect(0,l,9999,0),b.contentGroup.clip(r)),h(c),p||(this.nav=p=g.g().attr({zIndex:1}).add(this.group),this.up=g.symbol("triangle",0,0,t,t).on("click",function(){b.scroll(-1,B)}).add(p),this.pager=g.text("",15,10).addClass("highcharts-legend-navigation").css(q.style).add(p),this.down=g.symbol("triangle-down",0,0,t,t).on("click",function(){b.scroll(1,B)}).add(p)),b.scroll(0),a=d):p&&(h(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),
this.clipHeight=0);return a},scroll:function(a,e){var b=this.pages,d=b.length;a=this.currentPage+a;var g=this.clipHeight,f=this.options.navigation,k=this.pager,c=this.padding;a>d&&(a=d);0<a&&(void 0!==e&&t(e,this.chart),this.nav.attr({translateX:c,translateY:g+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),k.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":
"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?f.inactiveColor:f.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?f.inactiveColor:f.activeColor}).css({cursor:a===d?"default":"pointer"}),e=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:e}),this.currentPage=a,this.positionCheckboxes(e))}};a.LegendSymbolMixin={drawRectangle:function(a,e){var b=a.symbolHeight,d=a.options.squareSymbol;e.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-b)/
2:0,a.baseline-b+1,d?b:a.symbolWidth,b,u(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(e.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,g=a.symbolWidth,f=a.symbolHeight,k=f/2,l=this.chart.renderer,c=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var m;m={"stroke-width":b.lineWidth||0};b.dashStyle&&(m.dashstyle=b.dashStyle);this.legendLine=l.path(["M",0,a,"L",g,a]).addClass("highcharts-graph").attr(m).add(c);d&&!1!==d.enabled&&
(b=Math.min(u(d.radius,k),k),0===this.symbol.indexOf("url")&&(d=r(d,{width:f,height:f}),b=0),this.legendSymbol=d=l.symbol(this.symbol,g/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(c),d.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator.userAgent)||f)&&k(a.Legend.prototype,"positionItem",function(a,e){var b=this,d=function(){e._legendItemPos&&a.call(b,e)};d();setTimeout(d)})})(M);(function(a){var C=a.addEvent,A=a.animate,F=a.animObject,E=a.attr,m=a.doc,f=a.Axis,l=a.createElement,r=a.defaultOptions,
u=a.discardElement,t=a.charts,g=a.css,d=a.defined,k=a.each,b=a.extend,e=a.find,v=a.fireEvent,y=a.getStyle,n=a.grep,D=a.isNumber,J=a.isObject,c=a.isString,G=a.Legend,q=a.marginNames,B=a.merge,K=a.objectEach,p=a.Pointer,z=a.pick,I=a.pInt,L=a.removeEvent,h=a.seriesTypes,w=a.splat,P=a.svg,H=a.syncTimeout,O=a.win,Q=a.Renderer,R=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new R(a,b,c)};b(R.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(c(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var e,d,h=b.series,p=b.plotOptions||{};b.series=null;e=B(r,b);for(d in e.plotOptions)e.plotOptions[d].tooltip=p[d]&&B(p[d].tooltip)||void 0;e.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;e.series=b.series=h;this.userOptions=b;b=e.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=e;this.axes=[];this.series=
[];this.hasCartesianSeries=b.showAxes;var g=this;g.index=t.length;t.push(g);a.chartCount++;d&&K(d,function(a,b){C(g,b,a)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=g.symbolCounter=0;g.firstRender()},initSeries:function(b){var c=this.options.chart;(c=h[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,
b,c){var e=c?b:a;a=c?a:b;return 0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(c){var e=this.axes,d=this.series,h=this.pointer,p=this.legend,g=this.isDirtyLegend,f,q,l=this.hasCartesianSeries,n=this.isDirtyBox,z,m=this.renderer,x=m.isHidden(),w=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(c,this);x&&this.temporaryDisplay();this.layOutTitles();for(c=d.length;c--;)if(z=d[c],z.options.stacking&&(f=!0,z.isDirty)){q=!0;break}if(q)for(c=d.length;c--;)z=d[c],z.options.stacking&&
(z.isDirty=!0);k(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),g=!0);a.isDirtyData&&v(a,"updatedData")});g&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);f&&this.getStacks();l&&k(e,function(a){a.updateNames();a.setScale()});this.getMargins();l&&(k(e,function(a){a.isDirty&&(n=!0)}),k(e,function(a){var c=a.min+","+a.max;a.extKey!==c&&(a.extKey=c,w.push(function(){v(a,"afterSetExtremes",b(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(n||f)&&
a.redraw()}));n&&this.drawChartBox();v(this,"predraw");k(d,function(a){(n||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);m.draw();v(this,"redraw");v(this,"render");x&&this.temporaryDisplay(!0);k(w,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,h;c=e(this.axes,b)||e(this.series,b);for(h=0;!c&&h<d.length;h++)c=e(d[h].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=w(b.xAxis||
{}),b=b.yAxis=w(b.yAxis||{});k(c,function(a,b){a.index=b;a.isX=!0});k(b,function(a,b){a.index=b});c=c.concat(b);k(c,function(b){new f(a,b)})},getSelectedPoints:function(){var a=[];k(this.series,function(b){a=a.concat(n(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return n(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var e=this,d=e.options,h;h=d.title=B({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=
B({style:{color:"#666666"}},d.subtitle,b);k([["title",a,h],["subtitle",b,d]],function(a,b){var c=a[0],d=e[c],h=a[1];a=a[2];d&&h&&(e[c]=d=d.destroy());a&&a.text&&!d&&(e[c]=e.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),e[c].update=function(a){e.setTitle(!b&&a,b&&a)},e[c].css(a.style))});e.layOutTitles(c)},layOutTitles:function(a){var c=0,e,d=this.renderer,h=this.spacingBox;k(["title","subtitle"],function(a){var e=this[a],p=this.options[a];
a="title"===a?-3:p.verticalAlign?0:c+2;var g;e&&(g=p.style.fontSize,g=d.fontMetrics(g,e).b,e.css({width:(p.width||h.width+p.widthAdjust)+"px"}).align(b({y:a+g},p),!1,"spacingBox"),p.floating||p.verticalAlign||(c=Math.ceil(c+e.getBBox(p.useHTML).height)))},this);e=this.titleOffset!==c;this.titleOffset=c;!this.isDirtyBox&&e&&(this.isDirtyBox=e,this.hasRendered&&z(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,e=this.renderTo;d(c)||(this.containerWidth=
y(e,"width"));d(b)||(this.containerHeight=y(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(m.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){m.body.contains(c)||(c.hcOrigDetached=!0,m.body.appendChild(c));
if("none"===y(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===m.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var e,d=this.options,h=d.chart,p,g;e=this.renderTo;var f=a.uniqueKey(),k;e||
(this.renderTo=e=h.renderTo);c(e)&&(this.renderTo=e=m.getElementById(e));e||a.error(13,!0);p=I(E(e,"data-highcharts-chart"));D(p)&&t[p]&&t[p].hasRendered&&t[p].destroy();E(e,"data-highcharts-chart",this.index);e.innerHTML="";h.skipClone||e.offsetWidth||this.temporaryDisplay();this.getChartSize();p=this.chartWidth;g=this.chartHeight;k=b({position:"relative",overflow:"hidden",width:p+"px",height:g+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},h.style);
this.container=e=l("div",{id:f},k,e);this._cursor=e.style.cursor;this.renderer=new (a[h.renderer]||Q)(e,p,g,null,h.forExport,d.exporting&&d.exporting.allowHTML);this.setClassName(h.className);this.renderer.setStyle(h.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e&&!d(c[0])&&(this.plotTop=Math.max(this.plotTop,e+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&
(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&a.getOffset()});k(q,function(e,h){d(c[h])||(a[e]+=b[h])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,e=b.renderTo,h=d(c.width)&&d(c.height),p=c.width||y(e,"width"),c=c.height||y(e,"height"),
e=a?a.target:O;if(!h&&!b.isPrinting&&p&&c&&(e===O||e===m)){if(p!==b.containerWidth||c!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=H(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=p;b.containerHeight=c}},initReflow:function(){var a=this,b;b=C(O,"resize",function(b){a.reflow(b)});C(a,"destroy",b)},setSize:function(b,c,e){var d=this,h=d.renderer;d.isResizing+=1;a.setAnimation(e,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;void 0!==
b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=h.globalAnimation;(b?A:g)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},b);d.setChartSize(!0);h.setSize(d.chartWidth,d.chartHeight,e);k(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(e);d.oldChartHeight=null;v(d,"resize");H(function(){d&&v(d,"endResize",null,function(){--d.isResizing})},F(b).duration)},setChartSize:function(a){function b(a){a=
f[a]||0;return Math.max(m||a,a)/2}var c=this.inverted,e=this.renderer,d=this.chartWidth,h=this.chartHeight,p=this.options.chart,g=this.spacing,f=this.clipOffset,q,n,l,z,m;this.plotLeft=q=Math.round(this.plotLeft);this.plotTop=n=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(d-q-this.marginRight));this.plotHeight=z=Math.max(0,Math.round(h-n-this.marginBottom));this.plotSizeX=c?z:l;this.plotSizeY=c?l:z;this.plotBorderWidth=p.plotBorderWidth||0;this.spacingBox=e.spacingBox={x:g[3],y:g[0],
width:d-g[3]-g[1],height:h-g[0]-g[2]};this.plotBox=e.plotBox={x:q,y:n,width:l,height:z};m=2*Math.floor(this.plotBorderWidth/2);c=Math.ceil(b(3));e=Math.ceil(b(0));this.clipBox={x:c,y:e,width:Math.floor(this.plotSizeX-b(1)-c),height:Math.max(0,Math.floor(this.plotSizeY-b(2)-e))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var e=b[c],d=J(e)?e:[e,e,e,e];k(["Top","Right","Bottom","Left"],function(e,
h){a[c][h]=z(b[c+e],d[h])})});k(q,function(b,c){a[b]=z(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,e=this.chartHeight,d=this.chartBackground,h=this.plotBackground,p=this.plotBorder,g,f=this.plotBGImage,k=a.backgroundColor,q=a.plotBackgroundColor,l=a.plotBackgroundImage,n,z=this.plotLeft,m=this.plotTop,w=this.plotWidth,I=this.plotHeight,v=this.plotBox,r=this.clipRect,B=this.clipBox,y="animate";
d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),y="attr");g=a.borderWidth||0;n=g+(a.shadow?8:0);k={fill:k||"none"};if(g||d["stroke-width"])k.stroke=a.borderColor,k["stroke-width"]=g;d.attr(k).shadow(a.shadow);d[y]({x:n/2,y:n/2,width:c-n-g%2,height:e-n-g%2,r:a.borderRadius});y="animate";h||(y="attr",this.plotBackground=h=b.rect().addClass("highcharts-plot-background").add());h[y](v);h.attr({fill:q||"none"}).shadow(a.plotShadow);l&&(f?f.animate(v):this.plotBGImage=b.image(l,
z,m,w,I).add());r?r.animate({width:B.width,height:B.height}):this.clipRect=b.clipRect(B);y="animate";p||(y="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});p[y](p.crisp({x:z,y:m,width:w,height:I},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,e=a.options.series,d,p;k(["inverted","angular","polar"],function(g){c=h[b.type||b.defaultSeriesType];
p=b[g]||c&&c.prototype[g];for(d=e&&e.length;!p&&d--;)(c=h[e[d].type])&&c.prototype[g]&&(p=!0);a[g]=p})},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=0});k(b,function(b){var e=b.options.linkedTo;c(e)&&(e=":previous"===e?a.series[b.index-1]:a.get(e))&&e.linkedParent!==b&&(e.linkedSeries.push(b),b.linkedParent=e,b.visible=z(b.options.visible,e.options.visible,b.visible))})},renderSeries:function(){k(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,c=a.options.labels;c.items&&k(c.items,function(e){var d=b(c.style,e.style),h=I(d.left)+a.plotLeft,p=I(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(e.html,h,p).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,e,d,h;this.setTitle();this.legend=new G(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;e=this.plotHeight-=21;k(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<c/this.plotWidth;h=1.05<e/this.plotHeight;if(d||h)k(a,function(a){(a.horiz&&d||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(O.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,e=b.series,d=b.container,h,p=d&&d.parentNode;v(b,"destroy");b.renderer.forExport?a.erase(t,b):t[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
L(b);for(h=c.length;h--;)c[h]=c[h].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(h=e.length;h--;)e[h]=e[h].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",L(d),p&&u(d));K(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return P||O!=O.top||
"complete"===m.readyState?!0:(m.attachEvent("onreadystatechange",function(){m.detachEvent("onreadystatechange",a.firstRender);"complete"===m.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();v(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();k(b.series||[],function(b){a.initSeries(b)});a.linkSeries();v(a,"beforeRender");p&&(a.pointer=new p(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){k([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);v(this,"load");v(this,"render");d(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(M);(function(a){var C,A=a.each,F=a.extend,E=a.erase,m=a.fireEvent,f=a.format,l=a.isArray,r=a.isNumber,u=a.pick,t=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,d,f){this.series=a;this.color=a.color;this.applyOptions(d,
f);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=this.color||d[a.colorCounter],d=d.length,f=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):f=a.colorIndex;this.colorIndex=u(this.colorIndex,f);a.chart.pointCount++;return this},applyOptions:function(a,d){var g=this.series,b=g.options.pointValKey||g.pointValKey;a=C.prototype.optionsToObject.call(this,a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;b&&(this.y=
this[b]);this.isNull=u(this.isValid&&!this.isValid(),null===this.x||!r(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===d&&g.xAxis&&g.xAxis.hasNames&&(this.x=g.xAxis.nameToX(this));void 0===this.x&&g&&(this.x=void 0===d?g.autoIncrement(this):d);return this},optionsToObject:function(a){var d={},g=this.series,b=g.options.keys,e=b||g.pointArrayMap||["y"],f=e.length,m=0,n=0;if(r(a)||null===a)d[e[0]]=a;else if(l(a))for(!b&&a.length>f&&(g=typeof a[0],"string"===g?d.name=a[0]:"number"===
g&&(d.x=a[0]),m++);n<f;)b&&void 0===a[m]||(d[e[n]]=a[m]),m++,n++;else"object"===typeof a&&(d=a,a.dataLabels&&(g._hasPointLabels=!0),a.marker&&(g._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,d=a.zones,a=a.zoneAxis||"y",f=0,b;for(b=d[f];this[a]>=b.value;)b=d[++f];b&&b.color&&!this.options.color&&(this.color=b.color);return b},destroy:function(){var a=this.series.chart,d=a.hoverPoints,f;a.pointCount--;d&&(this.setState(),E(d,this),d.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)t(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],d,f=6;f--;)d=a[f],this[d]&&(this[d]=this[d].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,g=d.tooltipOptions,b=u(g.valueDecimals,""),
e=g.valuePrefix||"",l=g.valueSuffix||"";A(d.pointArrayMap||["y"],function(d){d="{point."+d;if(e||l)a=a.replace(d+"}",e+d+"}"+l);a=a.replace(d+"}",d+":,."+b+"f}")});return f(a,{point:this,series:this.series})},firePointEvent:function(a,d,f){var b=this,e=this.series.options;(e.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&this.importEvents();"click"===a&&e.allowPointSelect&&(f=function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});m(this,a,d,f)},visible:!0}})(M);
(function(a){var C=a.addEvent,A=a.animObject,F=a.arrayMax,E=a.arrayMin,m=a.correctFloat,f=a.Date,l=a.defaultOptions,r=a.defaultPlotOptions,u=a.defined,t=a.each,g=a.erase,d=a.extend,k=a.fireEvent,b=a.grep,e=a.isArray,v=a.isNumber,y=a.isString,n=a.merge,D=a.objectEach,J=a.pick,c=a.removeEvent,G=a.splat,q=a.SVGElement,B=a.syncTimeout,K=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,e,h=a.series,p;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();d(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;D(e,function(a,b){C(c,b,a)});if(e&&
e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();t(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);h.length&&(p=h[h.length-1]);c._i=J(p&&p._i,-1)+1;a.orderSeries(this.insert(h))},insert:function(a){var b=this.options.index,c;if(v(b)){for(c=a.length;c--;)if(b>=J(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return J(c,
a.length-1)},bindAxes:function(){var b=this,c=b.options,e=b.chart,d;t(b.axisTypes||[],function(h){t(e[h],function(a){d=a.options;if(c[h]===d.index||void 0!==c[h]&&c[h]===d.id||void 0===c[h]&&0===d.index)b.insert(a.series),b[h]=a,a.isDirty=!0});b[h]||b.optionalAxis===h||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,e=arguments,d=v(b)?function(e){var d="y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(e,
2))};t(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,b=J(b,a.pointStart,0);this.pointInterval=c=J(this.pointInterval,a.pointInterval,1);e&&(a=new f(b),"day"===e?a=+a[f.hcSetDate](a[f.hcGetDate]()+c):"month"===e?a=+a[f.hcSetMonth](a[f.hcGetMonth]()+c):"year"===e&&(a=+a[f.hcSetFullYear](a[f.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,e=c.plotOptions,d=(b.userOptions||{}).plotOptions||
{},p=e[this.type];this.userOptions=a;b=n(p,e.series,a);this.tooltipOptions=n(l.tooltip,l.plotOptions.series&&l.plotOptions.series.tooltip,l.plotOptions[this.type].tooltip,c.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=J(a.stickyTracking,d[this.type]&&d[this.type].stickyTracking,d.series&&d.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===p.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=
(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&u(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var e,d=this.chart,p=this.userOptions,f=a+"Index",g=a+"Counter",k=c?c.length:J(d.options.chart[a+"Count"],d[a+"Count"]);b||(e=J(p[f],p["_"+f]),u(e)||(d.series.length||
(d[g]=0),p["_"+f]=e=d[g]%k,d[g]+=1),c&&(b=c[e]));void 0!==e&&(this[f]=e);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||r[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(b,c,d,f){var h=this,p=h.points,g=p&&p.length||0,k,q=h.options,l=h.chart,n=null,m=h.xAxis,
z=q.turboThreshold,r=this.xData,B=this.yData,I=(k=h.pointArrayMap)&&k.length;b=b||[];k=b.length;c=J(c,!0);if(!1!==f&&k&&g===k&&!h.cropped&&!h.hasGroupedData&&h.visible)t(b,function(a,b){p[b].update&&a!==q.data[b]&&p[b].update(a,!1,null,!1)});else{h.xIncrement=null;h.colorCounter=0;t(this.parallelArrays,function(a){h[a+"Data"].length=0});if(z&&k>z){for(d=0;null===n&&d<k;)n=b[d],d++;if(v(n))for(d=0;d<k;d++)r[d]=this.autoIncrement(),B[d]=b[d];else if(e(n))if(I)for(d=0;d<k;d++)n=b[d],r[d]=n[0],B[d]=n.slice(1,
I+1);else for(d=0;d<k;d++)n=b[d],r[d]=n[0],B[d]=n[1];else a.error(12)}else for(d=0;d<k;d++)void 0!==b[d]&&(n={series:h},h.pointClass.prototype.applyOptions.apply(n,[b[d]]),h.updateParallelArrays(n,d));y(B[0])&&a.error(14,!0);h.data=[];h.options.data=h.userOptions.data=b;for(d=g;d--;)p[d]&&p[d].destroy&&p[d].destroy();m&&(m.minRange=m.userMinRange);h.isDirty=l.isDirtyBox=!0;h.isDirtyData=!!p;d=!1}"point"===q.legendType&&(this.processData(),this.generatePoints());c&&l.redraw(d)},processData:function(b){var c=
this.xData,e=this.yData,d=c.length,h;h=0;var p,f,g=this.xAxis,k,q=this.options;k=q.cropThreshold;var n=this.getExtremesFromAll||q.getExtremesFromAll,l=this.isCartesian,q=g&&g.val2lin,m=g&&g.isLog,v,r;if(l&&!this.isDirty&&!g.isDirty&&!this.yAxis.isDirty&&!b)return!1;g&&(b=g.getExtremes(),v=b.min,r=b.max);if(l&&this.sorted&&!n&&(!k||d>k||this.forceCrop))if(c[d-1]<v||c[0]>r)c=[],e=[];else if(c[0]<v||c[d-1]>r)h=this.cropData(this.xData,this.yData,v,r),c=h.xData,e=h.yData,h=h.start,p=!0;for(k=c.length||
1;--k;)d=m?q(c[k])-q(c[k-1]):c[k]-c[k-1],0<d&&(void 0===f||d<f)?f=d:0>d&&this.requireSorting&&a.error(15);this.cropped=p;this.cropStart=h;this.processedXData=c;this.processedYData=e;this.closestPointRange=f},cropData:function(a,b,c,e){var d=a.length,p=0,g=d,f=J(this.cropShoulder,1),k;for(k=0;k<d;k++)if(a[k]>=c){p=Math.max(0,k-f);break}for(c=k;c<d;c++)if(a[c]>e){g=c+f;break}return{xData:a.slice(p,g),yData:b.slice(p,g),start:p,end:g}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,
e,d=this.processedXData,g=this.processedYData,f=this.pointClass,k=d.length,q=this.cropStart||0,n,l=this.hasGroupedData,a=a.keys,m,v=[],r;c||l||(c=[],c.length=b.length,c=this.data=c);a&&l&&(this.options.keys=!1);for(r=0;r<k;r++)n=q+r,l?(m=(new f).init(this,[d[r]].concat(G(g[r]))),m.dataGroup=this.groupMap[r]):(m=c[n])||void 0===b[n]||(c[n]=m=(new f).init(this,b[n],d[r])),m&&(m.index=n,v[r]=m);this.options.keys=a;if(c&&(k!==(e=c.length)||l))for(r=0;r<e;r++)r!==q||l||(r+=k),c[r]&&(c[r].destroyElements(),
c[r].plotX=void 0);this.data=c;this.points=v},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,h=[],p=0;d=this.xAxis.getExtremes();var g=d.min,f=d.max,k,q,n,l;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<d;l++)if(q=c[l],n=a[l],k=(v(n,!0)||e(n))&&(!b.positiveValuesOnly||n.length||0<n),q=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l]||q)>=g&&(c[l]||q)<=f,k&&q)if(k=n.length)for(;k--;)null!==n[k]&&(h[p++]=n[k]);else h[p++]=n;this.dataMin=
E(h);this.dataMax=F(h)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,e=c.categories,d=this.yAxis,g=this.points,f=g.length,k=!!this.modifyValue,q=a.pointPlacement,n="between"===q||v(q),l=a.threshold,r=a.startFromThreshold?l:0,B,y,t,G,D=Number.MAX_VALUE;"between"===q&&(q=.5);v(q)&&(q*=J(a.pointRange||c.pointRange));for(a=0;a<f;a++){var K=g[a],A=K.x,C=K.y;y=K.low;var E=b&&d.stacks[(this.negStacks&&C<(r?0:l)?"-":"")+this.stackKey],
F;d.positiveValuesOnly&&null!==C&&0>=C&&(K.isNull=!0);K.plotX=B=m(Math.min(Math.max(-1E5,c.translate(A,0,0,0,1,q,"flags"===this.type)),1E5));b&&this.visible&&!K.isNull&&E&&E[A]&&(G=this.getStackIndicator(G,A,this.index),F=E[A],C=F.points[G.key],y=C[0],C=C[1],y===r&&G.key===E[A].base&&(y=J(l,d.min)),d.positiveValuesOnly&&0>=y&&(y=null),K.total=K.stackTotal=F.total,K.percentage=F.total&&K.y/F.total*100,K.stackY=C,F.setOffset(this.pointXOffset||0,this.barW||0));K.yBottom=u(y)?d.translate(y,0,1,0,1):
null;k&&(C=this.modifyValue(C,K));K.plotY=y="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,d.translate(C,0,1,0,1)),1E5):void 0;K.isInside=void 0!==y&&0<=y&&y<=d.len&&0<=B&&B<=c.len;K.clientX=n?m(c.translate(A,0,0,0,1,q)):B;K.negative=K.y<(l||0);K.category=e&&void 0!==e[K.x]?e[K.x]:K.x;K.isNull||(void 0!==t&&(D=Math.min(D,Math.abs(B-t))),t=B);K.zone=this.zones.length&&K.getZone()}this.closestPointRangePx=D},getValidPoints:function(a,c){var e=this.chart;return b(a||this.points||[],function(a){return c&&
!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,p=this.clipBox,g=p||b.clipBox,f=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(),k=b[f],q=b[f+"m"];k||(a&&(g.width=0,b[f+"m"]=q=e.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[f]=k=e.clipRect(g),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);!1!==c.clip&&
(this.group.clip(a||p?k:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=f);a||(k.count[this.index]&&(delete k.count[this.index],--k.count.length),0===k.count.length&&f&&b[f]&&(p||(b[f]=b[f].destroy()),b[f+"m"]&&(b[f+"m"]=b[f+"m"].destroy())))},animate:function(a){var b=this.chart,c=A(this.options.animation),e;a?this.setClip(c):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();
k(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,e,d,f,g=this.options.marker,k,q,n,l,m=this[this.specialGroup]||this.markerGroup,r=J(g.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++)d=a[e],c=d.plotY,f=d.graphic,k=d.marker||{},q=!!d.marker,n=r&&void 0===k.enabled||k.enabled,l=d.isInside,n&&v(c)&&null!==d.y?(c=J(k.symbol,this.symbol),d.hasImage=0===c.indexOf("url"),
n=this.markerAttribs(d,d.selected&&"select"),f?f[l?"show":"hide"](!0).animate(n):l&&(0<n.width||d.hasImage)&&(d.graphic=f=b.renderer.symbol(c,n.x,n.y,n.width,n.height,q?k:g).add(m)),f&&f.attr(this.pointAttribs(d,d.selected&&"select")),f&&f.addClass(d.getClassName(),!0)):f&&(d.graphic=f.destroy())},markerAttribs:function(a,b){var c=this.options.marker,e=a.marker||{},d=J(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],d=J(b&&b.radius,c&&c.radius,d+(c&&c.radiusPlus||0)));a.hasImage&&(d=
0);a={x:Math.floor(a.plotX)-d,y:a.plotY-d};d&&(a.width=a.height=2*d);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},f=this.color,g=e&&e.color,p=a&&a.color,e=J(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;f=g||a||p||f;a=d.fillColor||c.fillColor||f;f=d.lineColor||c.lineColor||f;b&&(c=c.states[b],b=d.states&&d.states[b]||{},e=J(b.lineWidth,c.lineWidth,e+J(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,f=b.lineColor||c.lineColor||
f);return{stroke:f,"stroke-width":e,fill:a}},destroy:function(){var a=this,b=a.chart,e=/AppleWebKit\/533/.test(K.navigator.userAgent),d,h,f=a.data||[],n,l;k(a,"destroy");c(a);t(a.axisTypes||[],function(b){(l=a[b])&&l.series&&(g(l.series,a),l.isDirty=l.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(h=f.length;h--;)(n=f[h])&&n.destroy&&n.destroy();a.points=null;clearTimeout(a.animationTimeout);D(a,function(a,b){a instanceof q&&!a.survive&&(d=e&&"group"===b?"hide":"destroy",a[d]())});
b.hoverSeries===a&&(b.hoverSeries=null);g(b.series,a);b.orderSeries();D(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var e=this,d=e.options,f=d.step,g,p=[],k=[],q;a=a||e.points;(g=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);!d.connectNulls||b||c||(a=this.getValidPoints(a));t(a,function(h,g){var n=h.plotX,l=h.plotY,m=a[g-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(q=!0);h.isNull&&!u(b)&&0<g?q=!d.connectNulls:h.isNull&&!b?q=!0:(0===g||q?g=["M",h.plotX,h.plotY]:e.getPointSpline?
g=e.getPointSpline(a,h,g):f?(g=1===f?["L",m.plotX,l]:2===f?["L",(m.plotX+n)/2,m.plotY,"L",(m.plotX+n)/2,l]:["L",n,m.plotY],g.push("L",n,l)):g=["L",n,l],k.push(h.x),f&&k.push(h.x),p.push.apply(p,g),q=!1)});p.xMap=k;return e.graphPath=p},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),e=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];t(this.zones,function(c,d){e.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+
(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});t(e,function(e,d){var h=e[0],f=a[h];f?(f.endX=c.xMap,f.animate({d:c})):c.length&&(a[h]=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group),f={stroke:e[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},e[3]?f.dashstyle=e[3]:"square"!==b.linecap&&(f["stroke-linecap"]=f["stroke-linejoin"]="round"),f=a[h].attr(f).shadow(2>d&&b.shadow));f&&(f.startX=c.xMap,f.isArea=c.isArea)})},applyZones:function(){var a=
this,b=this.chart,c=b.renderer,e=this.zones,d,f,g=this.clips||[],k,q=this.graph,n=this.area,l=Math.max(b.chartWidth,b.chartHeight),m=this[(this.zoneAxis||"y")+"Axis"],r,v,B=b.inverted,y,u,G,D,K=!1;e.length&&(q||n)&&m&&void 0!==m.min&&(v=m.reversed,y=m.horiz,q&&q.hide(),n&&n.hide(),r=m.getExtremes(),t(e,function(e,h){d=v?y?b.plotWidth:0:y?0:m.toPixels(r.min);d=Math.min(Math.max(J(f,d),0),l);f=Math.min(Math.max(Math.round(m.toPixels(J(e.value,r.max),!0)),0),l);K&&(d=f=m.toPixels(r.max));u=Math.abs(d-
f);G=Math.min(d,f);D=Math.max(d,f);m.isXAxis?(k={x:B?D:G,y:0,width:u,height:l},y||(k.x=b.plotHeight-k.x)):(k={x:0,y:B?D:G,width:l,height:u},y&&(k.y=b.plotWidth-k.y));B&&c.isVML&&(k=m.isXAxis?{x:0,y:v?G:D,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,height:b.chartHeight});g[h]?g[h].animate(k):(g[h]=c.clipRect(k),q&&a["zone-graph-"+h].clip(g[h]),n&&a["zone-area-"+h].clip(g[h]));K=e.value>r.max}),this.clips=g)},invertGroups:function(a){function b(){t(["group",
"markerGroup"],function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,e=c.chart,d;c.xAxis&&(d=C(e,"resize",b),C(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,e,d){var h=this[a],f=!h;f&&(this[a]=h=this.chart.renderer.g().attr({zIndex:e||.1}).add(d));h.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+
" "+(this.options.className||""),!0);h.attr({visibility:c})[f?"attr":"animate"](this.getPlotBox());return h},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,e=a.options,d=!!a.animate&&b.renderer.isSVG&&A(e.animation).duration,f=a.visible?"inherit":"hidden",g=e.zIndex,k=a.hasRendered,q=b.seriesGroup,n=b.inverted;c=a.plotGroup("group",
"series",f,g,q);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,q);d&&a.animate(!0);c.inverted=a.isCartesian?n:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(n);!1===e.clip||a.sharedClipKey||k||c.clip(b.clipRect);d&&a.animate();k||(a.animationTimeout=B(function(){a.afterAnimate()},d));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,
b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,d=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:J(e&&e.left,a.plotLeft),translateY:J(d&&d.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},
buildKDTree:function(){function a(c,e,d){var h,f;if(f=c&&c.length)return h=b.kdAxisArray[e%d],c.sort(function(a,b){return a[h]-b[h]}),f=Math.floor(f/2),{point:c[f],left:a(c.slice(0,f),e+1,d),right:a(c.slice(f+1),e+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,h,k){var p=b.point,q=e.kdAxisArray[h%
k],n,l,m=p;l=u(a[d])&&u(p[d])?Math.pow(a[d]-p[d],2):null;n=u(a[f])&&u(p[f])?Math.pow(a[f]-p[f],2):null;n=(l||0)+(n||0);p.dist=u(n)?Math.sqrt(n):Number.MAX_VALUE;p.distX=u(l)?Math.sqrt(l):Number.MAX_VALUE;q=a[q]-p[q];n=0>q?"left":"right";l=0>q?"right":"left";b[n]&&(n=c(a,b[n],h+1,k),m=n[g]<m[g]?n:p);b[l]&&Math.sqrt(q*q)<m[g]&&(a=c(a,b[l],h+1,k),m=a[g]<m[g]?a:m);return m}var e=this,d=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||
this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(M);(function(a){var C=a.Axis,A=a.Chart,F=a.correctFloat,E=a.defined,m=a.destroyObjectProperties,f=a.each,l=a.format,r=a.objectEach,u=a.pick,t=a.Series;a.StackItem=function(a,d,f,b,e){var g=a.chart.inverted;this.axis=a;this.isNegative=f;this.options=d;this.x=b;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:d.align||(g?f?"left":"right":"center"),verticalAlign:d.verticalAlign||
(g?"middle":f?"bottom":"top"),y:u(d.y,g?4:f?14:-6),x:u(d.x,g?f?-6:6:0)};this.textAlign=d.textAlign||(g?f?"right":"left":"center")};a.StackItem.prototype={destroy:function(){m(this,this.axis)},render:function(a){var d=this.options,f=d.format,f=f?l(f,this):d.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(f,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,
d){var f=this.axis,b=f.chart,e=f.translate(f.usePercentage?100:this.total,0,0,0,1),f=f.translate(0),f=Math.abs(e-f);a=b.xAxis[0].translate(this.x)+a;e=this.getStackBox(b,this,a,e,d,f);if(d=this.label)d.align(this.alignOptions,null,e),e=d.alignAttr,d[!1===this.options.crop||b.isInsidePlot(e.x,e.y)?"show":"hide"](!0)},getStackBox:function(a,d,f,b,e,l){var g=d.axis.reversed,k=a.inverted;a=a.plotHeight;d=d.isNegative&&!g||!d.isNegative&&g;return{x:k?d?b:b-l:f,y:k?a-f-e:d?a-b-l:a-b,width:k?l:e,height:k?
e:l}}};A.prototype.getStacks=function(){var a=this;f(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});f(a.series,function(d){!d.options.stacking||!0!==d.visible&&!1!==a.options.chart.ignoreHiddenSeries||(d.stackKey=d.type+u(d.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,d=u(this.options.reversedStacks,!0),f=a.length,b;if(!this.isXAxis){this.usePercentage=!1;for(b=f;b--;)a[d?b:f-b-1].setStackedPoints();if(this.usePercentage)for(b=0;b<f;b++)a[b].setPercentStacks()}};
C.prototype.renderStackTotals=function(){var a=this.chart,d=a.renderer,f=this.stacks,b=this.stackTotalGroup;b||(this.stackTotalGroup=b=d.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());b.translate(a.plotLeft,a.plotTop);r(f,function(a){r(a,function(a){a.render(b)})})};C.prototype.resetStacks=function(){var a=this,d=a.stacks;a.isXAxis||r(d,function(d){r(d,function(b,e){b.touched<a.stacksTouched?(b.destroy(),delete d[e]):(b.total=null,b.cum=null)})})};C.prototype.cleanStacks=function(){var a;
this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),r(a,function(a){r(a,function(a){a.cum=a.total})}))};t.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var f=this.processedXData,d=this.processedYData,k=[],b=d.length,e=this.options,l=e.threshold,m=e.startFromThreshold?l:0,n=e.stack,e=e.stacking,r=this.stackKey,t="-"+r,c=this.negStacks,G=this.yAxis,q=G.stacks,B=G.oldStacks,K,p,z,I,A,h,w;G.stacksTouched+=
1;for(A=0;A<b;A++)h=f[A],w=d[A],K=this.getStackIndicator(K,h,this.index),I=K.key,z=(p=c&&w<(m?0:l))?t:r,q[z]||(q[z]={}),q[z][h]||(B[z]&&B[z][h]?(q[z][h]=B[z][h],q[z][h].total=null):q[z][h]=new a.StackItem(G,G.options.stackLabels,p,h,n)),z=q[z][h],null!==w&&(z.points[I]=z.points[this.index]=[u(z.cum,m)],E(z.cum)||(z.base=I),z.touched=G.stacksTouched,0<K.index&&!1===this.singleStacks&&(z.points[I][0]=z.points[this.index+","+h+",0"][0])),"percent"===e?(p=p?r:t,c&&q[p]&&q[p][h]?(p=q[p][h],z.total=p.total=
Math.max(p.total,z.total)+Math.abs(w)||0):z.total=F(z.total+(Math.abs(w)||0))):z.total=F(z.total+(w||0)),z.cum=u(z.cum,m)+(w||0),null!==w&&(z.points[I].push(z.cum),k[A]=z.cum);"percent"===e&&(G.usePercentage=!0);this.stackedYData=k;G.oldStacks={}}};t.prototype.setPercentStacks=function(){var a=this,d=a.stackKey,k=a.yAxis.stacks,b=a.processedXData,e;f([d,"-"+d],function(d){for(var f=b.length,g,l;f--;)if(g=b[f],e=a.getStackIndicator(e,g,a.index,d),g=(l=k[d]&&k[d][g])&&l.points[e.key])l=l.total?100/
l.total:0,g[0]=F(g[0]*l),g[1]=F(g[1]*l),a.stackedYData[f]=g[1]})};t.prototype.getStackIndicator=function(a,d,f,b){!E(a)||a.x!==d||b&&a.key!==b?a={x:d,index:0,key:b}:a.index++;a.key=[f,d,a.index].join();return a}})(M);(function(a){var C=a.addEvent,A=a.animate,F=a.Axis,E=a.createElement,m=a.css,f=a.defined,l=a.each,r=a.erase,u=a.extend,t=a.fireEvent,g=a.inArray,d=a.isNumber,k=a.isObject,b=a.isArray,e=a.merge,v=a.objectEach,y=a.pick,n=a.Point,D=a.Series,J=a.seriesTypes,c=a.setAnimation,G=a.splat;u(a.Chart.prototype,
{addSeries:function(a,b,c){var e,d=this;a&&(b=y(b,!0),t(d,"addSeries",{options:a},function(){e=d.initSeries(a);d.isDirtyLegend=!0;d.linkSeries();b&&d.redraw(c)}));return e},addAxis:function(a,b,c,d){var f=b?"xAxis":"yAxis",g=this.options;a=e(a,{index:this[f].length,isX:b});b=new F(this,a);g[f]=G(g[f]||{});g[f].push(a);y(c,!0)&&this.redraw(d);return b},showLoading:function(a){var b=this,c=b.options,e=b.loadingDiv,d=c.loading,f=function(){e&&m(e,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+
"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,e),C(b,"redraw",f));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;m(e,u(d.style,{zIndex:10}));m(b.loadingSpan,d.labelStyle);b.loadingShown||(m(e,{opacity:0,display:""}),A(e,{opacity:d.style.opacity||.5},{duration:d.showDuration||0}));b.loadingShown=!0;f()},hideLoading:function(){var a=
this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){m(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),update:function(a,b,c){var k=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},q=a.chart,m,h,r=[];if(q){e(!0,k.options.chart,q);"className"in q&&k.setClassName(q.className);if("inverted"in q||"polar"in q)k.propFromSeries(),m=!0;"alignTicks"in q&&(m=!0);v(q,function(a,b){-1!==g("chart."+b,k.propsRequireUpdateSeries)&&(h=!0);-1!==g(b,k.propsRequireDirtyBox)&&
(k.isDirtyBox=!0)});"style"in q&&k.renderer.setStyle(q.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&e(!0,this.options.plotOptions,a.plotOptions);v(a,function(a,b){if(k[b]&&"function"===typeof k[b].update)k[b].update(a,!1);else if("function"===typeof k[n[b]])k[n[b]](a);"chart"!==b&&-1!==g(b,k.propsRequireUpdateSeries)&&(h=!0)});l("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(l(G(a[b]),function(a,e){(e=f(a.id)&&k.get(a.id)||k[b][e])&&e.coll===b&&(e.update(a,
!1),c&&(e.touched=!0));if(!e&&c)if("series"===b)k.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)k.addAxis(a,"xAxis"===b,!1).touched=!0}),c&&l(k[b],function(a){a.touched?delete a.touched:r.push(a)}))});l(r,function(a){a.remove(!1)});m&&l(k.axes,function(a){a.update({},!1)});h&&l(k.series,function(a){a.update({},!1)});a.loading&&e(!0,k.options.loading,a.loading);m=q&&q.width;q=q&&q.height;d(m)&&m!==k.chartWidth||d(q)&&q!==k.chartHeight?k.setSize(m,q):y(b,!0)&&k.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});u(n.prototype,{update:function(a,b,c,e){function d(){f.applyOptions(a);null===f.y&&h&&(f.graphic=h.destroy());k(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=h.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()));p=f.index;g.updateParallelArrays(f,p);q.data[p]=k(q.data[p],!0)||k(a,!0)?f.options:a;g.isDirty=g.isDirtyData=!0;!g.fixedBox&&g.hasCartesianSeries&&(l.isDirtyBox=!0);"point"===q.legendType&&(l.isDirtyLegend=!0);b&&l.redraw(c)}var f=
this,g=f.series,h=f.graphic,p,l=g.chart,q=g.options;b=y(b,!0);!1===e?d():f.firePointEvent("update",{options:a},d)},remove:function(a,b){this.series.removePoint(g(this,this.series.data),a,b)}});u(D.prototype,{addPoint:function(a,b,c,e){var d=this.options,f=this.data,g=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,k=d.data,p,l,q=this.xData,n,m;b=y(b,!0);p={series:this};this.pointClass.prototype.applyOptions.apply(p,[a]);m=p.x;n=q.length;if(this.requireSorting&&m<q[n-1])for(l=!0;n&&q[n-1]>m;)n--;
this.updateParallelArrays(p,"splice",n,0,0);this.updateParallelArrays(p,n);h&&p.name&&(h[m]=p.name);k.splice(n,0,a);l&&(this.data.splice(n,0,null),this.processData());"point"===d.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(p,"shift"),k.shift()));this.isDirtyData=this.isDirty=!0;b&&g.redraw(e)},removePoint:function(a,b,e){var d=this,f=d.data,g=f[a],k=d.points,h=d.chart,l=function(){k&&k.length===f.length&&k.splice(a,1);f.splice(a,1);
d.options.data.splice(a,1);d.updateParallelArrays(g||{series:d},"splice",a,1);g&&g.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};c(e,h);b=y(b,!0);g?g.firePointEvent("remove",null,l):l()},remove:function(a,b,c){function e(){d.destroy();f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();y(a,!0)&&f.redraw(b)}var d=this,f=d.chart;!1!==c?t(d,"remove",null,e):e()},update:function(a,b){var c=this,d=c.chart,f=c.userOptions,g=c.oldType||c.type,k=a.type||f.type||d.options.chart.type,h=J[g].prototype,n,
q=["group","markerGroup","dataLabelsGroup","navigatorSeries","baseSeries"],m=c.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);if(k&&k!==g||void 0!==a.zIndex)q.length=0;l(q,function(a){q[a]=c[a];delete c[a]});a=e(f,m,{index:c.index,pointStart:c.xData[0]},{data:c.options.data},a);c.remove(!1,null,!1);for(n in h)c[n]=void 0;u(c,J[k||g].prototype);l(q,function(a){c[a]=q[a]});c.init(d,a);c.oldType=g;d.linkSeries();y(b,!0)&&d.redraw(!1)}});
u(F.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=e(this.userOptions,a);this.destroy(!0);this.init(c,u(a,{events:void 0}));c.isDirtyBox=!0;y(b,!0)&&c.redraw()},remove:function(a){for(var c=this.chart,e=this.coll,d=this.series,f=d.length;f--;)d[f]&&d[f].remove(!1);r(c.axes,this);r(c[e],this);b(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];l(c[e],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=!0;y(a,!0)&&c.redraw()},
setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(M);(function(a){var C=a.color,A=a.each,F=a.map,E=a.pick,m=a.Series,f=a.seriesType;f("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var l=[],m=[],t=this.xAxis,g=this.yAxis,d=g.stacks[this.stackKey],k={},b=this.index,e=g.series,v=e.length,y,n=E(g.options.reversedStacks,!0)?1:-1,D;f=f||this.points;if(this.options.stacking){for(D=0;D<f.length;D++)k[f[D].x]=
f[D];a.objectEach(d,function(a,b){null!==a.total&&m.push(b)});m.sort(function(a,b){return a-b});y=F(e,function(){return this.visible});A(m,function(a,c){var e=0,f,r;if(k[a]&&!k[a].isNull)l.push(k[a]),A([-1,1],function(e){var g=1===e?"rightNull":"leftNull",l=0,q=d[m[c+e]];if(q)for(D=b;0<=D&&D<v;)f=q.points[D],f||(D===b?k[a][g]=!0:y[D]&&(r=d[a].points[D])&&(l-=r[1]-r[0])),D+=n;k[a][1===e?"rightCliff":"leftCliff"]=l});else{for(D=b;0<=D&&D<v;){if(f=d[a].points[D]){e=f[1];break}D+=n}e=g.translate(e,0,
1,0,1);l.push({isNull:!0,plotX:t.translate(a,0,0,0,1),x:a,plotY:e,yBottom:e})}})}return l},getGraphPath:function(a){var f=m.prototype.getGraphPath,l=this.options,t=l.stacking,g=this.yAxis,d,k,b=[],e=[],v=this.index,y,n=g.stacks[this.stackKey],D=l.threshold,A=g.getThreshold(l.threshold),c,l=l.connectNulls||"percent"===t,G=function(c,d,f){var k=a[c];c=t&&n[k.x].points[v];var l=k[f+"Null"]||0;f=k[f+"Cliff"]||0;var q,m,k=!0;f||l?(q=(l?c[0]:c[1])+f,m=c[0]+f,k=!!l):!t&&a[d]&&a[d].isNull&&(q=m=D);void 0!==
q&&(e.push({plotX:y,plotY:null===q?A:g.getThreshold(q),isNull:k,isCliff:!0}),b.push({plotX:y,plotY:null===m?A:g.getThreshold(m),doCurve:!1}))};a=a||this.points;t&&(a=this.getStackPoints(a));for(d=0;d<a.length;d++)if(k=a[d].isNull,y=E(a[d].rectPlotX,a[d].plotX),c=E(a[d].yBottom,A),!k||l)l||G(d,d-1,"left"),k&&!t&&l||(e.push(a[d]),b.push({x:d,plotX:y,plotY:c})),l||G(d,d+1,"right");d=f.call(this,e,!0,!0);b.reversed=!0;k=f.call(this,b,!0,!0);k.length&&(k[0]="L");k=d.concat(k);f=f.call(this,e,!1,l);k.xMap=
d.xMap;this.areaPath=k;return f},drawGraph:function(){this.areaPath=[];m.prototype.drawGraph.apply(this);var a=this,f=this.areaPath,u=this.options,t=[["area","highcharts-area",this.color,u.fillColor]];A(this.zones,function(f,d){t.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+f.className,f.color||a.color,f.fillColor||u.fillColor])});A(t,function(g){var d=g[0],k=a[d];k?(k.endX=f.xMap,k.animate({d:f})):(k=a[d]=a.chart.renderer.path(f).addClass(g[1]).attr({fill:E(g[3],C(g[2]).setOpacity(E(u.fillOpacity,
.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=f.xMap;k.shiftUnit=u.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,F,E){var m=F.plotX,f=F.plotY,l=a[E-1];E=a[E+1];var r,u,t,g;if(l&&!l.isNull&&!1!==l.doCurve&&!F.isCliff&&E&&!E.isNull&&!1!==E.doCurve&&!F.isCliff){a=l.plotY;t=E.plotX;E=E.plotY;var d=0;r=(1.5*m+l.plotX)/2.5;u=(1.5*f+a)/2.5;t=(1.5*m+t)/2.5;g=(1.5*f+E)/2.5;t!==r&&(d=
(g-u)*(t-m)/(t-r)+f-g);u+=d;g+=d;u>a&&u>f?(u=Math.max(a,f),g=2*f-u):u<a&&u<f&&(u=Math.min(a,f),g=2*f-u);g>E&&g>f?(g=Math.max(E,f),u=2*f-g):g<E&&g<f&&(g=Math.min(E,f),u=2*f-g);F.rightContX=t;F.rightContY=g}F=["C",C(l.rightContX,l.plotX),C(l.rightContY,l.plotY),C(r,m),C(u,f),m,f];l.rightContX=l.rightContY=null;return F}})})(M);(function(a){var C=a.seriesTypes.area.prototype,A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,
drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);(function(a){var C=a.animObject,A=a.color,F=a.each,E=a.extend,m=a.isNumber,f=a.merge,l=a.pick,r=a.Series,u=a.seriesType,t=a.svg;u("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},
softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){r.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&F(d.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,f=a.xAxis,b=a.yAxis,e=f.reversed,m,r={},n=0;!1===d.grouping?n=1:F(a.chart.series,function(c){var e=c.options,
d=c.yAxis,f;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||b.len!==d.len||b.pos!==d.pos||(e.stacking?(m=c.stackKey,void 0===r[m]&&(r[m]=n++),f=r[m]):!1!==e.grouping&&(f=n++),c.columnIndex=f)});var t=Math.min(Math.abs(f.transA)*(f.ordinalSlope||d.pointRange||f.closestPointRange||f.tickInterval||1),f.len),u=t*d.groupPadding,c=(t-2*u)/(n||1),d=Math.min(d.maxPointWidth||f.len,l(d.pointWidth,c*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(c-d)/2+(u+((a.columnIndex||0)+
(e?1:0))*c-t/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,d,f,b){var e=this.chart,g=this.borderWidth,k=-(g%2?.5:0),g=g%2?.5:1;e.inverted&&e.renderer.isVML&&(g+=1);this.options.crisp&&(f=Math.round(a+f)+k,a=Math.round(a)+k,f-=a);b=Math.round(d+b)+g;k=.5>=Math.abs(d)&&.5<b;d=Math.round(d)+g;b-=d;k&&b&&(--d,b+=1);return{x:a,y:d,width:f,height:b}},translate:function(){var a=this,d=a.chart,f=a.options,b=a.dense=2>a.closestPointRange*a.xAxis.transA,b=a.borderWidth=l(f.borderWidth,b?0:1),e=a.yAxis,
m=a.translatedThreshold=e.getThreshold(f.threshold),t=l(f.minPointLength,5),n=a.getColumnMetrics(),u=n.width,A=a.barW=Math.max(u,1+2*b),c=a.pointXOffset=n.offset;d.inverted&&(m-=.5);f.pointPadding&&(A=Math.ceil(A));r.prototype.translate.apply(a);F(a.points,function(b){var f=l(b.yBottom,m),g=999+Math.abs(f),g=Math.min(Math.max(-g,b.plotY),e.len+g),k=b.plotX+c,n=A,r=Math.min(g,f),v,y=Math.max(g,f)-r;Math.abs(y)<t&&t&&(y=t,v=!e.reversed&&!b.negative||e.reversed&&b.negative,r=Math.abs(r-m)>t?f-t:m-(v?
t:0));b.barX=k;b.pointWidth=u;b.tooltipPos=d.inverted?[e.len+e.pos-d.plotLeft-g,a.xAxis.len-k-n/2,y]:[k+n/2,g+e.pos-d.plotTop,y];b.shapeType="rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?[k,m,n,0]:[k,r,n,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var g=this.options,b,e=this.pointAttrToOptions||{};b=e.stroke||"borderColor";var l=e["stroke-width"]||
"borderWidth",m=a&&a.color||this.color,n=a[b]||g[b]||this.color||m,r=a[l]||g[l]||this[l]||0,e=g.dashStyle;a&&this.zones.length&&(m=a.getZone(),m=a.options.color||m&&m.color||this.color);d&&(a=f(g.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,m=a.color||void 0!==d&&A(m).brighten(a.brightness).get()||m,n=a[b]||n,r=a[l]||r,e=a.dashStyle||e);b={fill:m,stroke:n,"stroke-width":r};e&&(b.dashstyle=e);return b},drawPoints:function(){var a=this,d=this.chart,k=a.options,b=d.renderer,e=
k.animationLimit||250,l;F(a.points,function(g){var n=g.graphic;if(m(g.plotY)&&null!==g.y){l=g.shapeArgs;if(n)n[d.pointCount<e?"animate":"attr"](f(l));else g.graphic=n=b[g.shapeType](l).add(g.group||a.group);k.borderRadius&&n.attr({r:k.borderRadius});n.attr(a.pointAttribs(g,g.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);n.addClass(g.getClassName(),!0)}else n&&(g.graphic=n.destroy())})},animate:function(a){var d=this,f=this.yAxis,b=d.options,e=this.chart.inverted,g={};t&&(a?
(g.scaleY=.001,a=Math.min(f.pos+f.len,Math.max(f.pos,f.toPixels(b.threshold))),e?g.translateX=a-f.len:g.translateY=a,d.group.attr(g)):(g[e?"translateX":"translateY"]=f.pos,d.group.animate(g,E(C(d.options.animation),{step:function(a,b){d.group.attr({scaleY:Math.max(.001,b.pos)})}})),d.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&F(d.series,function(d){d.type===a.type&&(d.isDirty=!0)});r.prototype.remove.apply(a,arguments)}})})(M);(function(a){a=a.seriesType;a("bar","column",
null,{inverted:!0})})(M);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],
takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(M);(function(a){var C=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,E=this.chart,m=2*(a.slicedOffset||0),f=E.plotWidth-2*m,E=E.plotHeight-2*m,l=a.center,l=[C(l[0],"50%"),C(l[1],"50%"),a.size||"100%",a.innerSize||0],r=Math.min(f,E),u,t;for(u=0;4>u;++u)t=l[u],a=2>u||2===u&&/%$/.test(t),l[u]=A(t,[f,E,r,l[2]][u])+(a?m:0);l[3]>l[2]&&(l[3]=l[2]);return l}}})(M);
(function(a){var C=a.addEvent,A=a.defined,F=a.each,E=a.extend,m=a.inArray,f=a.noop,l=a.pick,r=a.Point,u=a.Series,t=a.seriesType,g=a.setAnimation;t("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,
shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var d=this,b=d.points,e=d.startAngleRad;a||(F(b,function(a){var b=a.graphic,f=a.shapeArgs;b&&(b.attr({r:a.startR||d.center[3]/2,start:e,end:e}),b.animate({r:f.r,start:f.start,end:f.end},d.options.animation))}),d.animate=null)},updateTotals:function(){var a,f=0,b=this.points,e=b.length,g,
l=this.options.ignoreHiddenPoint;for(a=0;a<e;a++)g=b[a],f+=l&&!g.visible?0:g.isNull?0:g.y;this.total=f;for(a=0;a<e;a++)g=b[a],g.percentage=0<f&&(g.visible||!l)?g.y/f*100:0,g.total=f},generatePoints:function(){u.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var d=0,b=this.options,e=b.slicedOffset,f=e+(b.borderWidth||0),g,n,m,r=b.startAngle||0,c=this.startAngleRad=Math.PI/180*(r-90),r=(this.endAngleRad=Math.PI/180*(l(b.endAngle,r+360)-90))-c,t=
this.points,q,B=b.dataLabels.distance,b=b.ignoreHiddenPoint,u,p=t.length,z;a||(this.center=a=this.getCenter());this.getX=function(b,c,e){m=Math.asin(Math.min((b-a[1])/(a[2]/2+e.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+e.labelDistance)};for(u=0;u<p;u++){z=t[u];z.labelDistance=l(z.options.dataLabels&&z.options.dataLabels.distance,B);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,z.labelDistance);g=c+d*r;if(!b||z.visible)d+=z.percentage/100;n=c+d*r;z.shapeType="arc";z.shapeArgs=
{x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*g)/1E3,end:Math.round(1E3*n)/1E3};m=(n+g)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);z.slicedTranslation={translateX:Math.round(Math.cos(m)*e),translateY:Math.round(Math.sin(m)*e)};n=Math.cos(m)*a[2]/2;q=Math.sin(m)*a[2]/2;z.tooltipPos=[a[0]+.7*n,a[1]+.7*q];z.half=m<-Math.PI/2||m>Math.PI/2?1:0;z.angle=m;g=Math.min(f,z.labelDistance/5);z.labelPos=[a[0]+n+Math.cos(m)*z.labelDistance,a[1]+q+Math.sin(m)*z.labelDistance,a[0]+n+Math.cos(m)*
g,a[1]+q+Math.sin(m)*g,a[0]+n,a[1]+q,0>z.labelDistance?"center":z.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,f=a.chart.renderer,b,e,g,l,n=a.options.shadow;n&&!a.shadowGroup&&(a.shadowGroup=f.g("shadow").add(a.group));F(a.points,function(d){if(!d.isNull){e=d.graphic;l=d.shapeArgs;b=d.getTranslate();var k=d.shadowGroup;n&&!k&&(k=d.shadowGroup=f.g("shadow").add(a.shadowGroup));k&&k.attr(b);g=a.pointAttribs(d,d.selected&&"select");e?e.setRadialReference(a.center).attr(g).animate(E(l,
b)):(d.graphic=e=f[d.shapeType](l).setRadialReference(a.center).attr(b).add(a.group),d.visible||e.attr({visibility:"hidden"}),e.attr(g).attr({"stroke-linejoin":"round"}).shadow(n,k));e.addClass(d.getClassName())}})},searchPoint:f,sortByAngle:function(a,f){a.sort(function(a,e){return void 0!==a.angle&&(e.angle-a.angle)*f})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:f},{init:function(){r.prototype.init.apply(this,arguments);var a=this,f;a.name=
l(a.name,"Slice");f=function(b){a.slice("select"===b.type)};C(a,"select",f);C(a,"unselect",f);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,f){var b=this,e=b.series,d=e.chart,g=e.options.ignoreHiddenPoint;f=l(f,g);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,e.options.data[m(b,e.data)]=b.options,F(["graphic","dataLabel","connector","shadowGroup"],function(e){if(b[e])b[e][a?"show":"hide"](!0)}),b.legendItem&&d.legend.colorizeItem(b,
a),a||"hover"!==b.state||b.setState(""),g&&(e.isDirty=!0),f&&d.redraw())},slice:function(a,f,b){var e=this.series;g(b,e.chart);l(f,!0);this.sliced=this.options.sliced=A(a)?a:!this.sliced;e.options.data[m(this,e.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var d=this.shapeArgs;return this.sliced||!this.visible?
[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:this.shapeArgs.r,start:d.start,end:d.end})}})})(M);(function(a){var C=a.addEvent,A=a.arrayMax,F=a.defined,E=a.each,m=a.extend,f=a.format,l=a.map,r=a.merge,u=a.noop,t=a.pick,g=a.relativeLength,d=a.Series,k=a.seriesTypes,b=a.stableSort;a.distribute=function(a,d){function e(a,b){return a.target-b.target}var f,g=!0,k=a,c=[],m;m=0;for(f=a.length;f--;)m+=a[f].size;if(m>d){b(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=f=0;m<=
d;)m+=a[f].size,f++;c=a.splice(f-1,a.length)}b(a,e);for(a=l(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(f=a.length;f--;)g=a[f],m=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,m-g.size/2),d-g.size);f=a.length;for(g=!1;f--;)0<f&&a[f-1].pos+a[f-1].size>a[f].pos&&(a[f-1].size+=a[f].size,a[f-1].targets=a[f-1].targets.concat(a[f].targets),a[f-1].pos+a[f-1].size>d&&(a[f-1].pos=d-a[f-1].size),a.splice(f,1),g=!0)}f=0;E(a,function(a){var b=0;E(a.targets,
function(){k[f].pos=a.pos+b;b+=k[f].size;f++})});k.push.apply(k,c);b(k,e)};d.prototype.drawDataLabels=function(){var b=this,d=b.options,g=d.dataLabels,k=b.points,l,m,c=b.hasRendered||0,u,q,B=t(g.defer,!!d.animation),A=b.chart.renderer;if(g.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(g),q=b.plotGroup("dataLabelsGroup","data-labels",B&&!c?"hidden":"visible",g.zIndex||6),B&&(q.attr({opacity:+c}),c||C(b,"afterAnimate",function(){b.visible&&q.show(!0);q[d.animation?"animate":"attr"]({opacity:1},
{duration:200})})),m=g,E(k,function(c){var e,k=c.dataLabel,n,h,p=c.connector,v=!k,B;l=c.dlOptions||c.options&&c.options.dataLabels;if(e=t(l&&l.enabled,m.enabled)&&null!==c.y)g=r(m,l),n=c.getLabelConfig(),u=g.format?f(g.format,n):g.formatter.call(n,g),B=g.style,n=g.rotation,B.color=t(g.color,B.color,b.color,"#000000"),"contrast"===B.color&&(c.contrastColor=A.getContrast(c.color||b.color),B.color=g.inside||0>t(c.labelDistance,g.distance)||d.stacking?c.contrastColor:"#000000"),d.cursor&&(B.cursor=d.cursor),
h={fill:g.backgroundColor,stroke:g.borderColor,"stroke-width":g.borderWidth,r:g.borderRadius||0,rotation:n,padding:g.padding,zIndex:1},a.objectEach(h,function(a,b){void 0===a&&delete h[b]});!k||e&&F(u)?e&&F(u)&&(k?h.text=u:(k=c.dataLabel=A[n?"text":"label"](u,0,-9999,g.shape,null,null,g.useHTML,null,"data-label"),k.addClass("highcharts-data-label-color-"+c.colorIndex+" "+(g.className||"")+(g.useHTML?"highcharts-tracker":""))),k.attr(h),k.css(B).shadow(g.shadow),k.added||k.add(q),b.alignDataLabel(c,
k,g,null,v)):(c.dataLabel=k=k.destroy(),p&&(c.connector=p.destroy()))})};d.prototype.alignDataLabel=function(a,b,d,f,g){var e=this.chart,c=e.inverted,k=t(a.plotX,-9999),l=t(a.plotY,-9999),n=b.getBBox(),r,p=d.rotation,v=d.align,u=this.visible&&(a.series.forceDL||e.isInsidePlot(k,Math.round(l),c)||f&&e.isInsidePlot(k,c?f.x+1:f.y+f.height-1,c)),y="justify"===t(d.overflow,"justify");if(u&&(r=d.style.fontSize,r=e.renderer.fontMetrics(r,b).b,f=m({x:c?this.yAxis.len-l:k,y:Math.round(c?this.xAxis.len-k:l),
width:0,height:0},f),m(d,{width:n.width,height:n.height}),p?(y=!1,k=e.renderer.rotCorr(r,p),k={x:f.x+d.x+f.width/2+k.x,y:f.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*f.height},b[g?"attr":"animate"](k).attr({align:v}),l=(p+720)%360,l=180<l&&360>l,"left"===v?k.y-=l?n.height:0:"center"===v?(k.x-=n.width/2,k.y-=n.height/2):"right"===v&&(k.x-=n.width,k.y-=l?0:n.height)):(b.align(d,null,f),k=b.alignAttr),y?a.isLabelJustified=this.justifyDataLabel(b,d,k,n,f,g):t(d.crop,!0)&&(u=e.isInsidePlot(k.x,
k.y)&&e.isInsidePlot(k.x+n.width,k.y+n.height)),d.shape&&!p))b[g?"attr":"animate"]({anchorX:c?e.plotWidth-a.plotY:a.plotX,anchorY:c?e.plotHeight-a.plotX:a.plotY});u||(b.attr({y:-9999}),b.placed=!1)};d.prototype.justifyDataLabel=function(a,b,d,f,g,k){var c=this.chart,e=b.align,l=b.verticalAlign,m,n,p=a.box?0:a.padding||0;m=d.x+p;0>m&&("right"===e?b.align="left":b.x=-m,n=!0);m=d.x+f.width-p;m>c.plotWidth&&("left"===e?b.align="right":b.x=c.plotWidth-m,n=!0);m=d.y+p;0>m&&("bottom"===l?b.verticalAlign=
"top":b.y=-m,n=!0);m=d.y+f.height-p;m>c.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=c.plotHeight-m,n=!0);n&&(a.placed=!k,a.align(b,null,g));return n};k.pie&&(k.pie.prototype.drawDataLabels=function(){var b=this,f=b.data,g,k=b.chart,l=b.options.dataLabels,m=t(l.connectorPadding,10),c=t(l.connectorWidth,1),r=k.plotWidth,q=k.plotHeight,u,C=b.center,p=C[2]/2,z=C[1],I,L,h,w,M=[[],[]],H,O,Q,R,x=[0,0,0,0];b.visible&&(l.enabled||b._hasPointLabels)&&(E(f,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(b),E(f,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),E(M,function(c,d){var e,f,n=c.length,v=[],u;if(n)for(b.sortByAngle(c,d-.5),0<b.maxLabelDistance&&(e=Math.max(0,z-p-b.maxLabelDistance),f=Math.min(z+p+b.maxLabelDistance,k.plotHeight),E(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,z-p-a.labelDistance),a.bottom=
Math.min(z+p+a.labelDistance,k.plotHeight),u=a.dataLabel.getBBox().height||21,a.positionsIndex=v.push({target:a.labelPos[1]-a.top+u/2,size:u,rank:a.y})-1)}),a.distribute(v,f+u-e)),R=0;R<n;R++)g=c[R],f=g.positionsIndex,h=g.labelPos,I=g.dataLabel,Q=!1===g.visible?"hidden":"inherit",e=h[1],v&&F(v[f])?void 0===v[f].pos?Q="hidden":(w=v[f].size,O=g.top+v[f].pos):O=e,delete g.positionIndex,H=l.justify?C[0]+(d?-1:1)*(p+g.labelDistance):b.getX(O<g.top+2||O>g.bottom-2?e:O,d,g),I._attr={visibility:Q,align:h[6]},
I._pos={x:H+l.x+({left:m,right:-m}[h[6]]||0),y:O+l.y-10},h.x=H,h.y=O,t(l.crop,!0)&&(L=I.getBBox().width,e=null,H-L<m?(e=Math.round(L-H+m),x[3]=Math.max(e,x[3])):H+L>r-m&&(e=Math.round(H+L-r+m),x[1]=Math.max(e,x[1])),0>O-w/2?x[0]=Math.max(Math.round(-O+w/2),x[0]):O+w/2>q&&(x[2]=Math.max(Math.round(O+w/2-q),x[2])),I.sideOverflow=e)}),0===A(x)||this.verifyDataLabelOverflow(x))&&(this.placeDataLabels(),c&&E(this.points,function(a){var e;u=a.connector;if((I=a.dataLabel)&&I._pos&&a.visible&&0<a.labelDistance){Q=
I._attr.visibility;if(e=!u)a.connector=u=k.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),u.attr({"stroke-width":c,stroke:l.connectorColor||a.color||"#666666"});u[e?"attr":"animate"]({d:b.connectorPath(a.labelPos)});u.attr("visibility",Q)}else u&&(a.connector=u.destroy())}))},k.pie.prototype.connectorPath=function(a){var b=a.x,d=a.y;return t(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),d,"C",b,d,2*a[2]-a[4],
2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),d,"L",a[2],a[3],"L",a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){E(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},k.pie.prototype.alignDataLabel=u,k.pie.prototype.verifyDataLabelOverflow=
function(a){var b=this.center,d=this.options,e=d.center,f=d.minSize||80,k,c=null!==d.size;c||(null!==e[0]?k=Math.max(b[2]-Math.max(a[1],a[3]),f):(k=Math.max(b[2]-a[1]-a[3],f),b[0]+=(a[3]-a[1])/2),null!==e[1]?k=Math.max(Math.min(k,b[2]-Math.max(a[0],a[2])),f):(k=Math.max(Math.min(k,b[2]-a[0]-a[2]),f),b[1]+=(a[0]-a[2])/2),k<b[2]?(b[2]=k,b[3]=Math.min(g(d.innerSize||0,k),k),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):c=!0);return c});k.column&&(k.column.prototype.alignDataLabel=function(a,
b,f,g,k){var e=this.chart.inverted,c=a.series,l=a.dlBox||a.shapeArgs,m=t(a.below,a.plotY>t(this.translatedThreshold,c.yAxis.len)),n=t(f.inside,!!this.options.stacking);l&&(g=r(l),0>g.y&&(g.height+=g.y,g.y=0),l=g.y+g.height-c.yAxis.len,0<l&&(g.height-=l),e&&(g={x:c.yAxis.len-g.y-g.height,y:c.xAxis.len-g.x-g.width,width:g.height,height:g.width}),n||(e?(g.x+=m?0:g.width,g.width=0):(g.y+=m?g.height:0,g.height=0)));f.align=t(f.align,!e||n?"center":m?"right":"left");f.verticalAlign=t(f.verticalAlign,e||
n?"middle":m?"top":"bottom");d.prototype.alignDataLabel.call(this,a,b,f,g,k);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(M);(function(a){var C=a.Chart,A=a.each,F=a.objectEach,E=a.pick,m=a.addEvent;C.prototype.callbacks.push(function(a){function f(){var f=[];A(a.yAxis||[],function(a){a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&F(a.stacks,function(a){F(a,function(a){f.push(a.label)})})});A(a.series||[],function(a){var l=a.options.dataLabels,g=a.dataLabelCollections||
["dataLabel"];(l.enabled||a._hasPointLabels)&&!l.allowOverlap&&a.visible&&A(g,function(d){A(a.points,function(a){a[d]&&(a[d].labelrank=E(a.labelrank,a.shapeArgs&&a.shapeArgs.height),f.push(a[d]))})})});a.hideOverlappingLabels(f)}f();m(a,"redraw",f)});C.prototype.hideOverlappingLabels=function(a){var f=a.length,m,u,t,g,d,k,b,e,v,y=function(a,b,d,c,e,f,g,k){return!(e>a+d||e+g<a||f>b+c||f+k<b)};for(u=0;u<f;u++)if(m=a[u])m.oldOpacity=m.opacity,m.newOpacity=1,m.width||(t=m.getBBox(),m.width=t.width,m.height=
t.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(u=0;u<f;u++)for(t=a[u],m=u+1;m<f;++m)if(g=a[m],t&&g&&t!==g&&t.placed&&g.placed&&0!==t.newOpacity&&0!==g.newOpacity&&(d=t.alignAttr,k=g.alignAttr,b=t.parentGroup,e=g.parentGroup,v=2*(t.box?0:t.padding||0),d=y(d.x+b.translateX,d.y+b.translateY,t.width-v,t.height-v,k.x+e.translateX,k.y+e.translateY,g.width-v,g.height-v)))(t.labelrank<g.labelrank?t:g).newOpacity=0;A(a,function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&
a.placed&&(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(M);(function(a){var C=a.addEvent,A=a.Chart,F=a.createElement,E=a.css,m=a.defaultOptions,f=a.defaultPlotOptions,l=a.each,r=a.extend,u=a.fireEvent,t=a.hasTouch,g=a.inArray,d=a.isObject,k=a.Legend,b=a.merge,e=a.pick,v=a.Point,y=a.Series,n=a.seriesTypes,D=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,d=function(a){var c=b.getPointFromEvent(a);
void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};l(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(l(a.trackerGroups,function(c){if(a[c]){a[c].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(t)a[c].on("touchstart",d);a.options.cursor&&a[c].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=
this,b=a.options,d=b.trackByArea,e=[].concat(d?a.areaPath:a.graphPath),f=e.length,g=a.chart,k=g.pointer,m=g.renderer,n=g.options.tooltip.snap,h=a.tracker,r,u=function(){if(g.hoverSeries!==a)a.onMouseOver()},v="rgba(192,192,192,"+(D?.0001:.002)+")";if(f&&!d)for(r=f+1;r--;)"M"===e[r]&&e.splice(r+1,0,e[r+1]-n,e[r+2],"L"),(r&&"M"===e[r]||r===f)&&e.splice(r,0,"L",e[r-2]+n,e[r-1]);h?h.attr({d:e}):a.graph&&(a.tracker=m.path(e).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:v,
fill:d?v:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*n),zIndex:2}).add(a.group),l([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",u).on("mouseout",function(a){k.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(t)a.on("touchstart",u)}))}};n.column&&(n.column.prototype.drawTracker=J.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=J.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=J.drawTrackerPoint);r(k.prototype,{setItemEvents:function(a,
d,e){var c=this,f=c.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(e?d:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);d.css(c.options.itemHoverStyle)}).on("mouseout",function(){d.css(b(a.visible?c.itemStyle:c.itemHiddenStyle));f.removeClass(g);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):u(a,"legendItemClick",b,c)})},
createCheckboxForItem:function(a){a.checkbox=F("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){u(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});m.legend.itemStyle.cursor="pointer";r(A.prototype,{showResetZoom:function(){var a=this,b=m.lang,d=a.options.chart.resetZoomButton,e=d.theme,f=e.states,g="chart"===d.relativeTo?null:"plotBox";this.resetZoomButton=
a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},e,f&&f.hover).attr({align:d.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,g)},zoomOut:function(){var a=this;u(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,f=!1,g;!a||a.resetSelection?(l(this.axes,function(a){b=a.zoom()}),c.initiated=!1):l(a.xAxis.concat(a.yAxis),function(a){var d=a.axis;c[d.isXAxis?"zoomX":"zoomY"]&&(b=d.zoom(a.min,
a.max),d.displayBtn&&(f=!0))});g=this.resetZoomButton;f&&!g?this.showResetZoom():!f&&d(g)&&(this.resetZoomButton=g.destroy());b&&this.redraw(e(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&l(d,function(a){a.setState()});l("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,h=b.toValue(g+
b.len-f,!0)-h,m=h<l,g=m?h:l,l=m?l:h,h=Math.min(k.dataMin,b.toValue(b.toPixels(k.min)-b.minPixelPadding)),m=Math.max(k.dataMax,b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n;n=h-g;0<n&&(l+=n,g=h);n=l-m;0<n&&(l=m,g-=n);b.series.length&&g!==k.min&&l!==k.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);E(c.container,{cursor:"move"})}});r(v.prototype,{select:function(a,b){var c=this,d=c.series,f=d.chart;a=e(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},
function(){c.selected=c.options.selected=a;d.options.data[g(c,d.data)]=c.options;c.setState(a&&"select");b||l(f.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[g(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");
l(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var c=this,d=b(c.series.options.point,c.options).events;c.events=d;a.objectEach(d,function(a,b){C(c,b,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,g=this.series,k=g.options.states[a]||{},l=f[g.type].marker&&g.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a]||{},h=!1===n.enabled,t=g.stateMarkerGraphic,u=
this.marker||{},v=g.chart,y=g.halo,A,C=l&&g.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===k.enabled||a&&(h||m&&!1===n.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){C&&(A=g.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(g.pointAttribs(this,a),e(v.options.chart.animation,k.animation)),A&&this.graphic.animate(A,e(v.options.chart.animation,
n.animation,l.animation)),t&&t.hide();else{if(a&&n){l=u.symbol||g.symbol;t&&t.currentSymbol!==l&&(t=t.destroy());if(t)t[b?"animate":"attr"]({x:A.x,y:A.y});else l&&(g.stateMarkerGraphic=t=v.renderer.symbol(l,A.x,A.y,A.width,A.height).add(g.markerGroup),t.currentSymbol=l);t&&t.attr(g.pointAttribs(this,a))}t&&(t[a&&v.isInsidePlot(c,d,v.inverted)?"show":"hide"](),t.element.point=this)}(c=k.halo)&&c.size?(y||(g.halo=y=v.renderer.path().add((this.graphic||t).parentGroup)),y[b?"animate":"attr"]({d:this.haloPath(c.size)}),
y.attr({"class":"highcharts-halo highcharts-color-"+e(this.colorIndex,g.colorIndex)}),y.point=this,y.attr(r({fill:this.color||g.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):y&&y.point&&y.point.haloPath&&y.animate({d:y.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});r(y.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&
u(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,d=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&u(this,"mouseOut");!d||this.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,f=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(l([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+
b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),d&&!d.dashstyle))for(g={"stroke-width":g},d.animate(g,e(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";l(["group",
"dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&l(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});l(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();u(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===
a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);u(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})})(M);(function(a){var C=a.Chart,A=a.each,F=a.inArray,E=a.isArray,m=a.isObject,f=a.pick,l=a.splat;C.prototype.setResponsive=function(f){var l=this.options.responsive,m=[],g=this.currentResponsive;l&&l.rules&&A(l.rules,function(d){void 0===d._id&&(d._id=a.uniqueKey());this.matchResponsiveRule(d,m,f)},this);var d=a.merge.apply(0,a.map(m,function(d){return a.find(l.rules,function(a){return a._id===
d}).chartOptions})),m=m.toString()||void 0;m!==(g&&g.ruleIds)&&(g&&this.update(g.undoOptions,f),m?(this.currentResponsive={ruleIds:m,mergedOptions:d,undoOptions:this.currentOptions(d)},this.update(d,f)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,l){var m=a.condition;(m.callback||function(){return this.chartWidth<=f(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=f(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=f(m.minWidth,0)&&this.chartHeight>=f(m.minHeight,0)}).call(this)&&
l.push(a._id)};C.prototype.currentOptions=function(f){function r(f,d,k,b){var e;a.objectEach(f,function(a,g){if(!b&&-1<F(g,["series","xAxis","yAxis"]))for(f[g]=l(f[g]),k[g]=[],e=0;e<f[g].length;e++)d[g][e]&&(k[g][e]={},r(a[e],d[g][e],k[g][e],b+1));else m(a)?(k[g]=E(a)?[]:{},r(a,d[g]||{},k[g],b+1)):k[g]=d[g]||null})}var t={};r(f,this.options,t,0);return t}})(M);return M});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.14 (2017-07-28)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,p=f.doc,B=f.Chart,x=f.addEvent,I=f.removeEvent,F=f.fireEvent,r=f.createElement,C=f.discardElement,v=f.css,n=f.merge,D=f.pick,h=f.each,G=f.objectEach,t=f.extend,J=f.isTouchDevice,E=f.win,H=E.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(H);/firefox/i.test(H);t(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:"printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{printChart:{textKey:"printChart",
onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};f.post=function(a,b,e){var c=r("form",n({method:"post",action:a,enctype:"multipart/form-data"},
e),{display:"none"},p.body);G(b,function(a,b){r("input",{type:"hidden",name:b,value:a},null,c)});c.submit();C(c)};t(B.prototype,{sanitizeSVG:function(a,b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,
"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,
"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},
getSVG:function(a){var b,e,c,w,m,g=n(this.options,a);p.createElementNS||(p.createElementNS=function(a,b){return p.createElement(b)});e=r("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;t(g.chart,{animation:!1,renderTo:e,forExport:!0,
renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){w=n(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});w.isInternal||g.series.push(w)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===
a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();C(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,
a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=p.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,u;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);F(a,"beforePrint");if(u=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);E.focus();
E.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&(a.style.display=e[b])});a.isPrinting=!1;u&&a.setSize.apply(a,d);F(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,w,m,g){var d=this,u=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],y=Math.max(w,m),z,A;l||(d[n]=l=r("div",{className:a},{position:"absolute",zIndex:1E3,padding:y+"px"},d.container),z=r("div",{className:"highcharts-menu"},null,l),v(z,t({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",
boxShadow:"3px 3px 10px #888"},u.menuStyle)),A=function(){v(l,{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(x(l,"mouseleave",function(){l.hideTimer=setTimeout(A,500)}),x(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),x(p,"mouseup",function(b){d.pointer.inClass(b.target,a)||A()})),h(b,function(a){"string"===typeof a&&(a=d.options.exporting.menuItemDefinitions[a]);if(f.isObject(a,!0)){var b;a.separator?b=r("hr",null,null,z):(b=r("div",{className:"highcharts-menu-item",
onclick:function(b){b&&b.stopPropagation();A();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,z),b.onmouseover=function(){v(this,u.menuItemHoverStyle)},b.onmouseout=function(){v(this,u.menuItemStyle)},v(b,t({cursor:"pointer"},u.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(z,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-w-y+"px":b.left=e-y+"px";c+m+d.exportMenuHeight>
q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-y+"px":b.top=c+m-y+"px";v(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,
m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=D(h.paddingLeft,25):c.text||t(h,{width:c.width,height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,
fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(t(c,{width:d.width,x:D(c.x,b.buttonOffset)}),!0,"spacingBox");b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&
(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null;C(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};B.prototype.renderExporting=function(){var a=this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();
c&&!1!==b.enabled&&(a.exportEvents=[],G(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);x(a,"destroy",a.destroyExport)};B.prototype.callbacks.push(function(a){a.renderExporting();x(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);D(c,!0)&&a.redraw()}}})})})(k)});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.14 (2017-07-28)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(p){"object"===typeof module&&module.exports?module.exports=p:p(Highcharts)})(function(p){(function(b){var h=b.Axis,r=b.Chart,k=b.color,n,d=b.each,w=b.extend,x=b.isNumber,l=b.Legend,g=b.LegendSymbolMixin,q=b.noop,u=b.merge,v=b.pick,t=b.wrap;n=b.ColorAxis=function(){this.init.apply(this,arguments)};w(n.prototype,h.prototype);w(n.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},
width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(h.prototype.keepProps),init:function(a,c){var e="vertical"!==a.options.legend.layout,f;this.coll="colorAxis";f=u(this.defaultColorAxisOptions,{side:e?2:1,reversed:!e},c,{opposite:!e,showEmpty:!1,title:null});h.prototype.init.call(this,a,f);c.dataClasses&&this.initDataClasses(c);
this.initStops();this.horiz=e;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var c=this.chart,e,f=0,m=c.options.chart.colorCount,b=this.options,y=a.dataClasses.length;this.dataClasses=e=[];this.legendItems=[];d(a.dataClasses,function(a,d){a=u(a);e.push(a);a.color||("category"===b.dataClassColor?(d=c.options.colors,m=d.length,a.color=d[f],a.colorIndex=f,f++,f===m&&(f=0)):a.color=k(b.minColor).tweenTo(k(b.maxColor),2>y?.5:d/(y-1)))})},setTickPositions:function(){if(!this.dataClasses)return h.prototype.setTickPositions.call(this)},
initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];d(this.stops,function(a){a.color=k(a[1])})},setOptions:function(a){h.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,c=this.chart,e=c.options.legend||{},f,m;a?(this.left=e=a.attr("x"),this.top=f=a.attr("y"),this.width=m=a.attr("width"),this.height=a=a.attr("height"),this.right=c.chartWidth-e-m,this.bottom=c.chartHeight-
f-a,this.len=this.horiz?m:a,this.pos=this.horiz?e:f):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,c){var e=this.stops,f,m,b=this.dataClasses,d,g;if(b)for(g=b.length;g--;){if(d=b[g],f=d.from,e=d.to,(void 0===f||a>=f)&&(void 0===e||a<=e)){m=d.color;c&&(c.dataClass=g,c.colorIndex=d.colorIndex);break}}else{a=this.normalizedValue(a);for(g=e.length;g--&&
!(a>e[g][0]););f=e[g]||e[g+1];e=e[g+1]||f;a=1-(e[0]-a)/(e[0]-f[0]||1);m=f.color.tweenTo(e.color,a)}return m},getOffset:function(){var a=this.legendGroup,c=this.chart.axisOffset[this.side];a&&(this.axisParent=a,h.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=c)},setLegendColor:function(){var a,c=this.reversed;a=c?1:0;c=c?0:1;a=this.horiz?[a,0,c,0]:[0,c,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],
y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,c){var e=a.padding,f=a.options,b=this.horiz,d=v(f.symbolWidth,b?this.defaultLegendLength:12),g=v(f.symbolHeight,b?12:this.defaultLegendLength),q=v(f.labelPadding,b?16:30),f=v(f.itemDistance,10);this.setLegendColor();c.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,d,g).attr({zIndex:1}).add(c.legendGroup);this.legendItemWidth=d+e+(b?f:q);this.legendItemHeight=g+e+(b?q:0)},setState:q,visible:!0,setVisible:q,getSeriesExtremes:function(){var a=
this.series,c=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;c--;)void 0!==a[c].valueMin&&(this.dataMin=Math.min(this.dataMin,a[c].valueMin),this.dataMax=Math.max(this.dataMax,a[c].valueMax))},drawCrosshair:function(a,c){var e=c&&c.plotX,b=c&&c.plotY,d,g=this.pos,q=this.len;c&&(d=this.toPixels(c[c.series.colorKey]),d<g?d=g-2:d>g+q&&(d=g+q+2),c.plotX=d,c.plotY=this.len-d,h.prototype.drawCrosshair.call(this,a,c),c.plotX=e,c.plotY=b,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),
this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,c,e,b,d){return x(d)?this.horiz?["M",d-4,this.top-6,"L",d+4,this.top-6,d,this.top,"Z"]:["M",this.left,d,"L",this.left-6,d+6,this.left-6,d-6,"Z"]:h.prototype.getPlotLinePath.call(this,a,c,e,b)},update:function(a,c){var e=this.chart,b=e.legend;d(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(d(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),e.isDirtyLegend=!0);e.options[this.coll]=
u(this.userOptions,a);h.prototype.update.call(this,a,c);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);h.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,c=this.chart,e=this.legendItems,f=c.options.legend,t=f.valueDecimals,h=f.valueSuffix||"",l;e.length||d(this.dataClasses,function(f,u){var m=!0,k=f.from,n=f.to;l="";void 0===k?l="\x3c ":void 0===n&&(l="\x3e ");void 0!==k&&(l+=b.numberFormat(k,
t)+h);void 0!==k&&void 0!==n&&(l+=" - ");void 0!==n&&(l+=b.numberFormat(n,t)+h);e.push(w({chart:c,name:l,options:{},drawLegendSymbol:g.drawRectangle,visible:!0,setState:q,isDataClass:!0,setVisible:function(){m=this.visible=!m;d(a.series,function(a){d(a.points,function(a){a.dataClass===u&&a.setVisible(m)})});c.legend.colorizeItem(this,m)}},f))});return e},name:""});d(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,k(this.start).tweenTo(k(this.end),this.pos),null,
!0)}});t(r.prototype,"getAxes",function(a){var c=this.options.colorAxis;a.call(this);this.colorAxis=[];c&&new n(this,c)});t(l.prototype,"getAllItems",function(a){var c=[],b=this.chart.colorAxis[0];b&&b.options&&(b.options.showInLegend&&(b.options.dataClasses?c=c.concat(b.getDataClassLegendSymbols()):c.push(b)),d(b.series,function(a){a.options.showInLegend=!1}));return c.concat(a.call(this))});t(l.prototype,"colorizeItem",function(a,c,b){a.call(this,c,b);b&&c.legendColor&&c.legendSymbol.attr({fill:c.legendColor})});
t(l.prototype,"update",function(a){a.apply(this,[].slice.call(arguments,1));this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},arguments[2])})})(p);(function(b){var h=b.defined,r=b.each,k=b.noop,n=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(b){var d=this,h=b?"show":"hide";r(["graphic","dataLabel"],function(b){if(d[b])d[b][h]()})},setState:function(d){b.Point.prototype.setState.call(this,d);this.graphic&&this.graphic.attr({zIndex:"hover"===
d?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:k,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:n.column.prototype.pointAttribs,translateColors:function(){var b=this,h=this.options.nullColor,k=this.colorAxis,l=this.colorKey;r(this.data,function(d){var g=d[l];if(g=d.options.color||(d.isNull?h:k&&void 0!==g?k.toColor(g,d):d.color||b.color))d.color=
g})},colorAttribs:function(b){var d={};h(b.color)&&(d[this.colorProp||"fill"]=b.color);return d}}})(p);(function(b){var h=b.colorPointMixin,r=b.each,k=b.merge,n=b.noop,d=b.pick,p=b.Series,x=b.seriesType,l=b.seriesTypes;x("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},
states:{normal:{animation:!0},hover:{halo:!1,brightness:.2}}},k(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;l.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=d(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,d=this.xAxis,h=this.yAxis,k=function(b,a,c){return Math.min(Math.max(a,b),c)};this.generatePoints();r(this.points,function(g){var a=
(b.colsize||1)/2,c=(b.rowsize||1)/2,e=k(Math.round(d.len-d.translate(g.x-a,0,1,0,1)),-d.len,2*d.len),a=k(Math.round(d.len-d.translate(g.x+a,0,1,0,1)),-d.len,2*d.len),f=k(Math.round(h.translate(g.y-c,0,1,0,1)),-h.len,2*h.len),c=k(Math.round(h.translate(g.y+c,0,1,0,1)),-h.len,2*h.len);g.plotX=g.clientX=(e+a)/2;g.plotY=(f+c)/2;g.shapeType="rect";g.shapeArgs={x:Math.min(e,a),y:Math.min(f,c),width:Math.abs(a-e),height:Math.abs(c-f)}});this.translateColors()},drawPoints:function(){l.column.prototype.drawPoints.call(this);
r(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:n,getBox:n,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:l.column.prototype.alignDataLabel,getExtremes:function(){p.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;p.prototype.getExtremes.call(this)}}),h)})(p)});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
 Highmaps JS v5.0.14 (2017-07-28)
 Highmaps as a plugin for Highcharts 4.1.x or Highstock 2.1.x (x being the patch version of this file)

 (c) 2011-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(w){"object"===typeof module&&module.exports?module.exports=w:w(Highcharts)})(function(w){(function(a){var h=a.Axis,p=a.each,f=a.pick;a=a.wrap;a(h.prototype,"getSeriesExtremes",function(a){var e=this.isXAxis,x,t,u=[],l;e&&p(this.series,function(a,b){a.useMapGeometry&&(u[b]=a.xData,a.xData=[])});a.call(this);e&&(x=f(this.dataMin,Number.MAX_VALUE),t=f(this.dataMax,-Number.MAX_VALUE),p(this.series,function(a,b){a.useMapGeometry&&(x=Math.min(x,f(a.minX,x)),t=Math.max(t,f(a.maxX,t)),a.xData=u[b],
l=!0)}),l&&(this.dataMin=x,this.dataMax=t))});a(h.prototype,"setAxisTranslation",function(a){var q=this.chart,e=q.plotWidth/q.plotHeight,q=q.xAxis[0],f;a.call(this);"yAxis"===this.coll&&void 0!==q.transA&&p(this.series,function(a){a.preserveAspectRatio&&(f=!0)});if(f&&(this.transA=q.transA=Math.min(this.transA,q.transA),a=e/((q.max-q.min)/(this.max-this.min)),a=1>a?this:q,e=(a.max-a.min)*a.transA,a.pixelPadding=a.len-e,a.minPixelPadding=a.pixelPadding/2,e=a.fixTo)){e=e[1]-a.toValue(e[0],!0);e*=a.transA;
if(Math.abs(e)>a.minPixelPadding||a.min===a.dataMin&&a.max===a.dataMax)e=0;a.minPixelPadding-=e}});a(h.prototype,"render",function(a){a.call(this);this.fixTo=null})})(w);(function(a){var h=a.Axis,p=a.Chart,f=a.color,e,q=a.each,x=a.extend,t=a.isNumber,u=a.Legend,l=a.LegendSymbolMixin,c=a.noop,b=a.merge,m=a.pick,r=a.wrap;e=a.ColorAxis=function(){this.init.apply(this,arguments)};x(e.prototype,h.prototype);x(e.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,
startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(h.prototype.keepProps),init:function(a,k){var d="vertical"!==a.options.legend.layout,g;this.coll="colorAxis";g=b(this.defaultColorAxisOptions,{side:d?2:1,reversed:!d},k,{opposite:!d,showEmpty:!1,title:null});
h.prototype.init.call(this,a,g);k.dataClasses&&this.initDataClasses(k);this.initStops();this.horiz=d;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var g=this.chart,d,n=0,v=g.options.chart.colorCount,c=this.options,m=a.dataClasses.length;this.dataClasses=d=[];this.legendItems=[];q(a.dataClasses,function(a,k){a=b(a);d.push(a);a.color||("category"===c.dataClassColor?(k=g.options.colors,v=k.length,a.color=k[n],a.colorIndex=n,n++,n===v&&(n=0)):a.color=f(c.minColor).tweenTo(f(c.maxColor),
2>m?.5:k/(m-1)))})},setTickPositions:function(){if(!this.dataClasses)return h.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];q(this.stops,function(a){a.color=f(a[1])})},setOptions:function(a){h.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,k=this.chart,d=k.options.legend||{},n,b;a?(this.left=d=a.attr("x"),this.top=n=a.attr("y"),
this.width=b=a.attr("width"),this.height=a=a.attr("height"),this.right=k.chartWidth-d-b,this.bottom=k.chartHeight-n-a,this.len=this.horiz?b:a,this.pos=this.horiz?d:n):this.len=(this.horiz?d.symbolWidth:d.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,k){var d=this.stops,n,g,b=this.dataClasses,c,m;if(b)for(m=b.length;m--;){if(c=b[m],n=c.from,d=c.to,(void 0===n||a>=n)&&(void 0===d||
a<=d)){g=c.color;k&&(k.dataClass=m,k.colorIndex=c.colorIndex);break}}else{a=this.normalizedValue(a);for(m=d.length;m--&&!(a>d[m][0]););n=d[m]||d[m+1];d=d[m+1]||n;a=1-(d[0]-a)/(d[0]-n[0]||1);g=n.color.tweenTo(d.color,a)}return g},getOffset:function(){var a=this.legendGroup,b=this.chart.axisOffset[this.side];a&&(this.axisParent=a,h.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=b)},setLegendColor:function(){var a,
b=this.reversed;a=b?1:0;b=b?0:1;a=this.horiz?[a,0,b,0]:[0,b,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,b){var d=a.padding,n=a.options,g=this.horiz,k=m(n.symbolWidth,g?this.defaultLegendLength:12),c=m(n.symbolHeight,g?12:this.defaultLegendLength),l=m(n.labelPadding,g?16:30),n=m(n.itemDistance,10);this.setLegendColor();b.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,k,c).attr({zIndex:1}).add(b.legendGroup);this.legendItemWidth=
k+d+(g?n:l);this.legendItemHeight=c+d+(g?l:0)},setState:c,visible:!0,setVisible:c,getSeriesExtremes:function(){var a=this.series,b=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;b--;)void 0!==a[b].valueMin&&(this.dataMin=Math.min(this.dataMin,a[b].valueMin),this.dataMax=Math.max(this.dataMax,a[b].valueMax))},drawCrosshair:function(a,b){var d=b&&b.plotX,n=b&&b.plotY,g,c=this.pos,k=this.len;b&&(g=this.toPixels(b[b.series.colorKey]),g<c?g=c-2:g>c+k&&(g=c+k+2),b.plotX=g,b.plotY=this.len-g,
h.prototype.drawCrosshair.call(this,a,b),b.plotX=d,b.plotY=n,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,b,d,n,c){return t(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:h.prototype.getPlotLinePath.call(this,a,b,d,n)},update:function(a,c){var d=this.chart,n=d.legend;q(this.series,function(a){a.isDirtyData=
!0});a.dataClasses&&n.allItems&&(q(n.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),d.isDirtyLegend=!0);d.options[this.coll]=b(this.userOptions,a);h.prototype.update.call(this,a,c);this.legendItem&&(this.setLegendColor(),n.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);h.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var b=this,k=this.chart,d=this.legendItems,n=k.options.legend,m=n.valueDecimals,r=n.valueSuffix||
"",e;d.length||q(this.dataClasses,function(n,g){var v=!0,y=n.from,f=n.to;e="";void 0===y?e="\x3c ":void 0===f&&(e="\x3e ");void 0!==y&&(e+=a.numberFormat(y,m)+r);void 0!==y&&void 0!==f&&(e+=" - ");void 0!==f&&(e+=a.numberFormat(f,m)+r);d.push(x({chart:k,name:e,options:{},drawLegendSymbol:l.drawRectangle,visible:!0,setState:c,isDataClass:!0,setVisible:function(){v=this.visible=!v;q(b.series,function(a){q(a.points,function(a){a.dataClass===g&&a.setVisible(v)})});k.legend.colorizeItem(this,v)}},n))});
return d},name:""});q(["fill","stroke"],function(b){a.Fx.prototype[b+"Setter"]=function(){this.elem.attr(b,f(this.start).tweenTo(f(this.end),this.pos),null,!0)}});r(p.prototype,"getAxes",function(a){var b=this.options.colorAxis;a.call(this);this.colorAxis=[];b&&new e(this,b)});r(u.prototype,"getAllItems",function(a){var b=[],d=this.chart.colorAxis[0];d&&d.options&&(d.options.showInLegend&&(d.options.dataClasses?b=b.concat(d.getDataClassLegendSymbols()):b.push(d)),q(d.series,function(a){a.options.showInLegend=
!1}));return b.concat(a.call(this))});r(u.prototype,"colorizeItem",function(a,b,d){a.call(this,b,d);d&&b.legendColor&&b.legendSymbol.attr({fill:b.legendColor})});r(u.prototype,"update",function(a){a.apply(this,[].slice.call(arguments,1));this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},arguments[2])})})(w);(function(a){var h=a.defined,p=a.each,f=a.noop,e=a.seriesTypes;a.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(a){var e=this,q=a?"show":"hide";p(["graphic",
"dataLabel"],function(a){if(e[a])e[a][q]()})},setState:function(e){a.Point.prototype.setState.call(this,e);this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}};a.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:f,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:e.column.prototype.pointAttribs,translateColors:function(){var a=this,e=this.options.nullColor,
f=this.colorAxis,h=this.colorKey;p(this.data,function(l){var c=l[h];if(c=l.options.color||(l.isNull?e:f&&void 0!==c?f.toColor(c,l):l.color||a.color))l.color=c})},colorAttribs:function(a){var e={};h(a.color)&&(e[this.colorProp||"fill"]=a.color);return e}}})(w);(function(a){function h(a){a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)}function p(a){this.init(a)}var f=a.addEvent,e=a.Chart,q=a.doc,x=a.each,t=a.extend,u=a.merge,l=a.pick,c=a.wrap;p.prototype.init=
function(a){this.chart=a;a.mapNavButtons=[]};p.prototype.update=function(b){var c=this.chart,e=c.options.mapNavigation,g,k,d,n,v,q=function(a){this.handler.call(c,a);h(a)},y=c.mapNavButtons;b&&(e=c.options.mapNavigation=u(c.options.mapNavigation,b));for(;y.length;)y.pop().destroy();l(e.enableButtons,e.enabled)&&!c.renderer.forExport&&a.objectEach(e.buttons,function(a,b){g=u(e.buttonOptions,a);k=g.theme;k.style=u(g.theme.style,g.style);n=(d=k.states)&&d.hover;v=d&&d.select;a=c.renderer.button(g.text,
0,0,q,k,n,v,0,"zoomIn"===b?"topbutton":"bottombutton").addClass("highcharts-map-navigation").attr({width:g.width,height:g.height,title:c.options.lang[b],padding:g.padding,zIndex:5}).add();a.handler=g.onclick;a.align(t(g,{width:a.width,height:2*a.height}),null,g.alignTo);f(a.element,"dblclick",h);y.push(a)});this.updateEvents(e)};p.prototype.updateEvents=function(a){var b=this.chart;l(a.enableDoubleClickZoom,a.enabled)||a.enableDoubleClickZoomTo?this.unbindDblClick=this.unbindDblClick||f(b.container,
"dblclick",function(a){b.pointer.onContainerDblClick(a)}):this.unbindDblClick&&(this.unbindDblClick=this.unbindDblClick());l(a.enableMouseWheelZoom,a.enabled)?this.unbindMouseWheel=this.unbindMouseWheel||f(b.container,void 0===q.onmousewheel?"DOMMouseScroll":"mousewheel",function(a){b.pointer.onContainerMouseWheel(a);h(a);return!1}):this.unbindMouseWheel&&(this.unbindMouseWheel=this.unbindMouseWheel())};t(e.prototype,{fitToBox:function(a,c){x([["x","width"],["y","height"]],function(b){var g=b[0];
b=b[1];a[g]+a[b]>c[g]+c[b]&&(a[b]>c[b]?(a[b]=c[b],a[g]=c[g]):a[g]=c[g]+c[b]-a[b]);a[b]>c[b]&&(a[b]=c[b]);a[g]<c[g]&&(a[g]=c[g])});return a},mapZoom:function(a,c,e,g,k){var d=this.xAxis[0],b=d.max-d.min,v=l(c,d.min+b/2),m=b*a,b=this.yAxis[0],q=b.max-b.min,f=l(e,b.min+q/2),q=q*a,v=this.fitToBox({x:v-m*(g?(g-d.pos)/d.len:.5),y:f-q*(k?(k-b.pos)/b.len:.5),width:m,height:q},{x:d.dataMin,y:b.dataMin,width:d.dataMax-d.dataMin,height:b.dataMax-b.dataMin}),m=v.x<=d.dataMin&&v.width>=d.dataMax-d.dataMin&&v.y<=
b.dataMin&&v.height>=b.dataMax-b.dataMin;g&&(d.fixTo=[g-d.pos,c]);k&&(b.fixTo=[k-b.pos,e]);void 0===a||m?(d.setExtremes(void 0,void 0,!1),b.setExtremes(void 0,void 0,!1)):(d.setExtremes(v.x,v.x+v.width,!1),b.setExtremes(v.y,v.y+v.height,!1));this.redraw()}});c(e.prototype,"render",function(a){this.mapNavigation=new p(this);this.mapNavigation.update();a.call(this)})})(w);(function(a){var h=a.extend,p=a.pick,f=a.Pointer;a=a.wrap;h(f.prototype,{onContainerDblClick:function(a){var e=this.chart;a=this.normalize(a);
e.options.mapNavigation.enableDoubleClickZoomTo?e.pointer.inClass(a.target,"highcharts-tracker")&&e.hoverPoint&&e.hoverPoint.zoomTo():e.isInsidePlot(a.chartX-e.plotLeft,a.chartY-e.plotTop)&&e.mapZoom(.5,e.xAxis[0].toValue(a.chartX),e.yAxis[0].toValue(a.chartY),a.chartX,a.chartY)},onContainerMouseWheel:function(a){var e=this.chart,f;a=this.normalize(a);f=a.detail||-(a.wheelDelta/120);e.isInsidePlot(a.chartX-e.plotLeft,a.chartY-e.plotTop)&&e.mapZoom(Math.pow(e.options.mapNavigation.mouseWheelSensitivity,
f),e.xAxis[0].toValue(a.chartX),e.yAxis[0].toValue(a.chartY),a.chartX,a.chartY)}});a(f.prototype,"zoomOption",function(a){var e=this.chart.options.mapNavigation;p(e.enableTouchZoom,e.enabled)&&(this.chart.options.chart.pinchType="xy");a.apply(this,[].slice.call(arguments,1))});a(f.prototype,"pinchTranslate",function(a,f,p,h,u,l,c){a.call(this,f,p,h,u,l,c);"map"===this.chart.options.chart.type&&this.hasZoom&&(a=h.scaleX>h.scaleY,this.pinchTranslateDirection(!a,f,p,h,u,l,c,a?h.scaleX:h.scaleY))})})(w);
(function(a){var h=a.colorPointMixin,p=a.each,f=a.extend,e=a.isNumber,q=a.map,x=a.merge,t=a.noop,u=a.pick,l=a.isArray,c=a.Point,b=a.Series,m=a.seriesType,r=a.seriesTypes,g=a.splat,k=void 0!==a.doc.documentElement.style.vectorEffect;m("map","scatter",{allAreas:!0,animation:!1,nullColor:"#f7f7f7",borderColor:"#cccccc",borderWidth:1,marker:null,stickyTracking:!1,joinBy:"hc-key",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},turboThreshold:0,
tooltip:{followPointer:!0,pointFormat:"{point.name}: {point.value}\x3cbr/\x3e"},states:{normal:{animation:!0},hover:{brightness:.2,halo:null},select:{color:"#cccccc"}}},x(a.colorSeriesMixin,{type:"map",getExtremesFromAll:!0,useMapGeometry:!0,forceDL:!0,searchPoint:t,directTouch:!0,preserveAspectRatio:!0,pointArrayMap:["value"],getBox:function(d){var b=Number.MAX_VALUE,c=-b,g=b,k=-b,l=b,m=b,f=this.xAxis,r=this.yAxis,q;p(d||[],function(d){if(d.path){"string"===typeof d.path&&(d.path=a.splitPath(d.path));
var n=d.path||[],v=n.length,f=!1,r=-b,y=b,h=-b,p=b,A=d.properties;if(!d._foundBox){for(;v--;)e(n[v])&&(f?(r=Math.max(r,n[v]),y=Math.min(y,n[v])):(h=Math.max(h,n[v]),p=Math.min(p,n[v])),f=!f);d._midX=y+(r-y)*u(d.middleX,A&&A["hc-middle-x"],.5);d._midY=p+(h-p)*u(d.middleY,A&&A["hc-middle-y"],.5);d._maxX=r;d._minX=y;d._maxY=h;d._minY=p;d.labelrank=u(d.labelrank,(r-y)*(h-p));d._foundBox=!0}c=Math.max(c,d._maxX);g=Math.min(g,d._minX);k=Math.max(k,d._maxY);l=Math.min(l,d._minY);m=Math.min(d._maxX-d._minX,
d._maxY-d._minY,m);q=!0}});q&&(this.minY=Math.min(l,u(this.minY,b)),this.maxY=Math.max(k,u(this.maxY,-b)),this.minX=Math.min(g,u(this.minX,b)),this.maxX=Math.max(c,u(this.maxX,-b)),f&&void 0===f.options.minRange&&(f.minRange=Math.min(5*m,(this.maxX-this.minX)/5,f.minRange||b)),r&&void 0===r.options.minRange&&(r.minRange=Math.min(5*m,(this.maxY-this.minY)/5,r.minRange||b)))},getExtremes:function(){b.prototype.getExtremes.call(this,this.valueData);this.chart.hasRendered&&this.isDirtyData&&this.getBox(this.options.data);
this.valueMin=this.dataMin;this.valueMax=this.dataMax;this.dataMin=this.minY;this.dataMax=this.maxY},translatePath:function(a){var d=!1,b=this.xAxis,c=this.yAxis,g=b.min,k=b.transA,b=b.minPixelPadding,l=c.min,m=c.transA,c=c.minPixelPadding,f,r=[];if(a)for(f=a.length;f--;)e(a[f])?(r[f]=d?(a[f]-g)*k+b:(a[f]-l)*m+c,d=!d):r[f]=a[f];return r},setData:function(d,c,k,m){var n=this.options,f=this.chart.options.chart,v=f&&f.map,r=n.mapData,h=n.joinBy,u=null===h,t=n.keys||this.pointArrayMap,B=[],w={},z=this.chart.mapTransforms;
!r&&v&&(r="string"===typeof v?a.maps[v]:v);u&&(h="_i");h=this.joinBy=g(h);h[1]||(h[1]=h[0]);d&&p(d,function(a,b){var c=0;if(e(a))d[b]={value:a};else if(l(a)){d[b]={};!n.keys&&a.length>t.length&&"string"===typeof a[0]&&(d[b]["hc-key"]=a[0],++c);for(var g=0;g<t.length;++g,++c)t[g]&&(d[b][t[g]]=a[c])}u&&(d[b]._i=b)});this.getBox(d);(this.chart.mapTransforms=z=f&&f.mapTransforms||r&&r["hc-transform"]||z)&&a.objectEach(z,function(a){a.rotation&&(a.cosAngle=Math.cos(a.rotation),a.sinAngle=Math.sin(a.rotation))});
if(r){"FeatureCollection"===r.type&&(this.mapTitle=r.title,r=a.geojson(r,this.type,this));this.mapData=r;this.mapMap={};for(z=0;z<r.length;z++)f=r[z],v=f.properties,f._i=z,h[0]&&v&&v[h[0]]&&(f[h[0]]=v[h[0]]),w[f[h[0]]]=f;this.mapMap=w;d&&h[1]&&p(d,function(a){w[a[h[1]]]&&B.push(w[a[h[1]]])});n.allAreas?(this.getBox(r),d=d||[],h[1]&&p(d,function(a){B.push(a[h[1]])}),B="|"+q(B,function(a){return a&&a[h[0]]}).join("|")+"|",p(r,function(a){h[0]&&-1!==B.indexOf("|"+a[h[0]]+"|")||(d.push(x(a,{value:null})),
m=!1)})):this.getBox(B)}b.prototype.setData.call(this,d,c,k,m)},drawGraph:t,drawDataLabels:t,doFullTranslate:function(){return this.isDirtyData||this.chart.isResizing||this.chart.renderer.isVML||!this.baseTrans},translate:function(){var a=this,b=a.xAxis,c=a.yAxis,g=a.doFullTranslate();a.generatePoints();p(a.data,function(d){d.plotX=b.toPixels(d._midX,!0);d.plotY=c.toPixels(d._midY,!0);g&&(d.shapeType="path",d.shapeArgs={d:a.translatePath(d.path)})});a.translateColors()},pointAttribs:function(a,b){a=
r.column.prototype.pointAttribs.call(this,a,b);k?a["vector-effect"]="non-scaling-stroke":a["stroke-width"]="inherit";return a},drawPoints:function(){var a=this,b=a.xAxis,c=a.yAxis,g=a.group,f=a.chart,e=f.renderer,l,m,h,q,u=this.baseTrans,t,x,z,w,G;a.transformGroup||(a.transformGroup=e.g().attr({scaleX:1,scaleY:1}).add(g),a.transformGroup.survive=!0);a.doFullTranslate()?(f.hasRendered&&p(a.points,function(b){b.shapeArgs&&(b.shapeArgs.fill=a.pointAttribs(b,b.state).fill)}),a.group=a.transformGroup,
r.column.prototype.drawPoints.apply(a),a.group=g,p(a.points,function(a){a.graphic&&(a.name&&a.graphic.addClass("highcharts-name-"+a.name.replace(/ /g,"-").toLowerCase()),a.properties&&a.properties["hc-key"]&&a.graphic.addClass("highcharts-key-"+a.properties["hc-key"].toLowerCase()))}),this.baseTrans={originX:b.min-b.minPixelPadding/b.transA,originY:c.min-c.minPixelPadding/c.transA+(c.reversed?0:c.len/c.transA),transAX:b.transA,transAY:c.transA},this.transformGroup.animate({translateX:0,translateY:0,
scaleX:1,scaleY:1})):(l=b.transA/u.transAX,m=c.transA/u.transAY,h=b.toPixels(u.originX,!0),q=c.toPixels(u.originY,!0),.99<l&&1.01>l&&.99<m&&1.01>m&&(m=l=1,h=Math.round(h),q=Math.round(q)),t=this.transformGroup,f.renderer.globalAnimation?(x=t.attr("translateX"),z=t.attr("translateY"),w=t.attr("scaleX"),G=t.attr("scaleY"),t.attr({animator:0}).animate({animator:1},{step:function(a,b){t.attr({translateX:x+(h-x)*b.pos,translateY:z+(q-z)*b.pos,scaleX:w+(l-w)*b.pos,scaleY:G+(m-G)*b.pos})}})):t.attr({translateX:h,
translateY:q,scaleX:l,scaleY:m}));k||a.group.element.setAttribute("stroke-width",a.options[a.pointAttrToOptions&&a.pointAttrToOptions["stroke-width"]||"borderWidth"]/(l||1));this.drawMapDataLabels()},drawMapDataLabels:function(){b.prototype.drawDataLabels.call(this);this.dataLabelsGroup&&this.dataLabelsGroup.clip(this.chart.clipRect)},render:function(){var a=this,c=b.prototype.render;a.chart.renderer.isVML&&3E3<a.data.length?setTimeout(function(){c.call(a)}):c.call(a)},animate:function(a){var b=this.options.animation,
d=this.group,c=this.xAxis,g=this.yAxis,k=c.pos,l=g.pos;this.chart.renderer.isSVG&&(!0===b&&(b={duration:1E3}),a?d.attr({translateX:k+c.len/2,translateY:l+g.len/2,scaleX:.001,scaleY:.001}):(d.animate({translateX:k,translateY:l,scaleX:1,scaleY:1},b),this.animate=null))},animateDrilldown:function(a){var b=this.chart.plotBox,d=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],c=d.bBox,g=this.chart.options.drilldown.animation;a||(a=Math.min(c.width/b.width,c.height/b.height),d.shapeArgs=
{scaleX:a,scaleY:a,translateX:c.x,translateY:c.y},p(this.points,function(a){a.graphic&&a.graphic.attr(d.shapeArgs).animate({scaleX:1,scaleY:1,translateX:0,translateY:0},g)}),this.animate=null)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,animateDrillupFrom:function(a){r.column.prototype.animateDrillupFrom.call(this,a)},animateDrillupTo:function(a){r.column.prototype.animateDrillupTo.call(this,a)}}),f({applyOptions:function(a,b){a=c.prototype.applyOptions.call(this,a,b);b=this.series;var d=
b.joinBy;b.mapData&&((d=void 0!==a[d[1]]&&b.mapMap[a[d[1]]])?(b.xyFromShape&&(a.x=d._midX,a.y=d._midY),f(a,d)):a.value=a.value||null);return a},onMouseOver:function(a){clearTimeout(this.colorInterval);if(null!==this.value||this.series.options.nullInteraction)c.prototype.onMouseOver.call(this,a);else this.series.onMouseOut(a)},zoomTo:function(){var a=this.series;a.xAxis.setExtremes(this._minX,this._maxX,!1);a.yAxis.setExtremes(this._minY,this._maxY,!1);a.chart.redraw()}},h))})(w);(function(a){var h=
a.seriesType,p=a.seriesTypes;h("mapline","map",{lineWidth:1,fillColor:"none"},{type:"mapline",colorProp:"stroke",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,e){a=p.map.prototype.pointAttribs.call(this,a,e);a.fill=this.options.fillColor;return a},drawLegendSymbol:p.line.prototype.drawLegendSymbol})})(w);(function(a){var h=a.merge,p=a.Point;a=a.seriesType;a("mappoint","scatter",{dataLabels:{enabled:!0,formatter:function(){return this.point.name},crop:!1,defer:!1,
overflow:!1,style:{color:"#000000"}}},{type:"mappoint",forceDL:!0},{applyOptions:function(a,e){a=void 0!==a.lat&&void 0!==a.lon?h(a,this.series.chart.fromLatLonToPoint(a)):a;return p.prototype.applyOptions.call(this,a,e)}})})(w);(function(a){var h=a.arrayMax,p=a.arrayMin,f=a.Axis,e=a.color,q=a.each,x=a.isNumber,t=a.noop,u=a.pick,l=a.pInt,c=a.Point,b=a.Series,m=a.seriesType,r=a.seriesTypes;m("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},
marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var d=u(this.options.marker.fillOpacity,
.5);a=b.prototype.pointAttribs.call(this,a,c);1!==d&&(a.fill=e(a.fill).setOpacity(d).get("rgba"));return a},getRadii:function(a,b,c,l){var d,g,k,e=this.zData,m=[],n=this.options,f="width"!==n.sizeBy,r=n.zThreshold,h=b-a;g=0;for(d=e.length;g<d;g++)k=e[g],n.sizeByAbsoluteValue&&null!==k&&(k=Math.abs(k-r),b=Math.max(b-r,Math.abs(a-r)),a=0),null===k?k=null:k<a?k=c/2-1:(k=0<h?(k-a)/h:.5,f&&0<=k&&(k=Math.sqrt(k)),k=Math.ceil(c+k*(l-c))/2),m.push(k);this.radii=m},animate:function(a){var b=this.options.animation;
a||(q(this.points,function(a){var c=a.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:a.plotX,y:a.plotY,width:1,height:1}),c.animate(d,b))}),this.animate=null)},translate:function(){var b,c=this.data,d,l,e=this.radii;r.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],l=e?e[b]:0,x(l)&&l>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:l,width:2*l,height:2*l}),d.dlBox={x:d.plotX-l,y:d.plotY-l,width:2*l,height:2*l}):d.shapeArgs=d.plotY=d.dlBox=void 0},
alignDataLabel:r.column.prototype.alignDataLabel,buildKDTree:t,applyZones:t},{haloPath:function(a){return c.prototype.haloPath.call(this,0===a?0:(this.marker?this.marker.radius||0:0)+a)},ttBelow:!1});f.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,e=0,m=b,f=this.isXAxis,r=f?"xData":"yData",t=this.min,w={},H=Math.min(c.plotWidth,c.plotHeight),A=Number.MAX_VALUE,D=-Number.MAX_VALUE,E=this.max-t,C=b/E,F=[];q(this.series,function(b){var d=b.options;!b.bubblePadding||!b.visible&&
c.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,F.push(b),f&&(q(["minSize","maxSize"],function(a){var b=d[a],c=/%$/.test(b),b=l(b);w[a]=c?H*b/100:b}),b.minPxSize=w.minSize,b.maxPxSize=Math.max(w.maxSize,w.minSize),b=b.zData,b.length&&(A=u(d.zMin,Math.min(A,Math.max(p(b),!1===d.displayNegative?d.zThreshold:-Number.MAX_VALUE))),D=u(d.zMax,Math.max(D,h(b))))))});q(F,function(b){var c=b[r],d=c.length,l;f&&b.getRadii(A,D,b.minPxSize,b.maxPxSize);if(0<E)for(;d--;)x(c[d])&&a.dataMin<=c[d]&&c[d]<=
a.dataMax&&(l=b.radii[d],e=Math.min((c[d]-t)*C-l,e),m=Math.max((c[d]-t)*C+l,m))});F.length&&0<E&&!this.isLog&&(m-=b,C*=(b+e-m)/b,q([["min","userMin",e],["max","userMax",m]],function(b){void 0===u(a.options[b[0]],a[b[1]])&&(a[b[0]]+=b[2]/C)}))}})(w);(function(a){var h=a.merge,p=a.Point,f=a.seriesType,e=a.seriesTypes;e.bubble&&f("mapbubble","bubble",{animationLimit:500,tooltip:{pointFormat:"{point.name}: {point.z}"}},{xyFromShape:!0,type:"mapbubble",pointArrayMap:["z"],getMapData:e.map.prototype.getMapData,
getBox:e.map.prototype.getBox,setData:e.map.prototype.setData},{applyOptions:function(a,f){return a&&void 0!==a.lat&&void 0!==a.lon?p.prototype.applyOptions.call(this,h(a,this.series.chart.fromLatLonToPoint(a)),f):e.map.prototype.pointClass.prototype.applyOptions.call(this,a,f)},ttBelow:!1})})(w);(function(a){var h=a.colorPointMixin,p=a.each,f=a.merge,e=a.noop,q=a.pick,w=a.Series,t=a.seriesType,u=a.seriesTypes;t("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},
inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{normal:{animation:!0},hover:{halo:!1,brightness:.2}}},f(a.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var a;u.scatter.prototype.init.apply(this,arguments);a=this.options;a.pointRange=q(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||
1},translate:function(){var a=this.options,c=this.xAxis,b=this.yAxis,e=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();p(this.points,function(l){var g=(a.colsize||1)/2,k=(a.rowsize||1)/2,d=e(Math.round(c.len-c.translate(l.x-g,0,1,0,1)),-c.len,2*c.len),g=e(Math.round(c.len-c.translate(l.x+g,0,1,0,1)),-c.len,2*c.len),m=e(Math.round(b.translate(l.y-k,0,1,0,1)),-b.len,2*b.len),k=e(Math.round(b.translate(l.y+k,0,1,0,1)),-b.len,2*b.len);l.plotX=l.clientX=(d+g)/2;l.plotY=(m+k)/2;
l.shapeType="rect";l.shapeArgs={x:Math.min(d,g),y:Math.min(m,k),width:Math.abs(g-d),height:Math.abs(k-m)}});this.translateColors()},drawPoints:function(){u.column.prototype.drawPoints.call(this);p(this.points,function(a){a.graphic.attr(this.colorAttribs(a))},this)},animate:e,getBox:e,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,alignDataLabel:u.column.prototype.alignDataLabel,getExtremes:function(){w.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;
w.prototype.getExtremes.call(this)}}),h)})(w);(function(a){function h(a,c){var b,e,l,g=!1,k=a.x,d=a.y;a=0;for(b=c.length-1;a<c.length;b=a++)e=c[a][1]>d,l=c[b][1]>d,e!==l&&k<(c[b][0]-c[a][0])*(d-c[a][1])/(c[b][1]-c[a][1])+c[a][0]&&(g=!g);return g}var p=a.Chart,f=a.each,e=a.extend,q=a.format,w=a.merge,t=a.win,u=a.wrap;p.prototype.transformFromLatLon=function(e,c){if(void 0===t.proj4)return a.error(21),{x:0,y:null};e=t.proj4(c.crs,[e.lon,e.lat]);var b=c.cosAngle||c.rotation&&Math.cos(c.rotation),m=c.sinAngle||
c.rotation&&Math.sin(c.rotation);e=c.rotation?[e[0]*b+e[1]*m,-e[0]*m+e[1]*b]:e;return{x:((e[0]-(c.xoffset||0))*(c.scale||1)+(c.xpan||0))*(c.jsonres||1)+(c.jsonmarginX||0),y:(((c.yoffset||0)-e[1])*(c.scale||1)+(c.ypan||0))*(c.jsonres||1)-(c.jsonmarginY||0)}};p.prototype.transformToLatLon=function(e,c){if(void 0===t.proj4)a.error(21);else{e={x:((e.x-(c.jsonmarginX||0))/(c.jsonres||1)-(c.xpan||0))/(c.scale||1)+(c.xoffset||0),y:((-e.y-(c.jsonmarginY||0))/(c.jsonres||1)+(c.ypan||0))/(c.scale||1)+(c.yoffset||
0)};var b=c.cosAngle||c.rotation&&Math.cos(c.rotation),m=c.sinAngle||c.rotation&&Math.sin(c.rotation);c=t.proj4(c.crs,"WGS84",c.rotation?{x:e.x*b+e.y*-m,y:e.x*m+e.y*b}:e);return{lat:c.y,lon:c.x}}};p.prototype.fromPointToLatLon=function(e){var c=this.mapTransforms,b;if(c){for(b in c)if(c.hasOwnProperty(b)&&c[b].hitZone&&h({x:e.x,y:-e.y},c[b].hitZone.coordinates[0]))return this.transformToLatLon(e,c[b]);return this.transformToLatLon(e,c["default"])}a.error(22)};p.prototype.fromLatLonToPoint=function(e){var c=
this.mapTransforms,b,m;if(!c)return a.error(22),{x:0,y:null};for(b in c)if(c.hasOwnProperty(b)&&c[b].hitZone&&(m=this.transformFromLatLon(e,c[b]),h({x:m.x,y:-m.y},c[b].hitZone.coordinates[0])))return m;return this.transformFromLatLon(e,c["default"])};a.geojson=function(a,c,b){var m=[],h=[],g=function(a){var b,c=a.length;h.push("M");for(b=0;b<c;b++)1===b&&h.push("L"),h.push(a[b][0],-a[b][1])};c=c||"map";f(a.features,function(a){var b=a.geometry,k=b.type,b=b.coordinates;a=a.properties;var l;h=[];"map"===
c||"mapbubble"===c?("Polygon"===k?(f(b,g),h.push("Z")):"MultiPolygon"===k&&(f(b,function(a){f(a,g)}),h.push("Z")),h.length&&(l={path:h})):"mapline"===c?("LineString"===k?g(b):"MultiLineString"===k&&f(b,g),h.length&&(l={path:h})):"mappoint"===c&&"Point"===k&&(l={x:b[0],y:-b[1]});l&&m.push(e(l,{name:a.name||a.NAME,properties:a}))});b&&a.copyrightShort&&(b.chart.mapCredits=q(b.chart.options.credits.mapText,{geojson:a}),b.chart.mapCreditsFull=q(b.chart.options.credits.mapTextFull,{geojson:a}));return m};
u(p.prototype,"addCredits",function(a,c){c=w(!0,this.options.credits,c);this.mapCredits&&(c.href=null);a.call(this,c);this.credits&&this.mapCreditsFull&&this.credits.attr({title:this.mapCreditsFull})})})(w);(function(a){function h(a,c,e,g,k,d,f,h){return["M",a+k,c,"L",a+e-d,c,"C",a+e-d/2,c,a+e,c+d/2,a+e,c+d,"L",a+e,c+g-f,"C",a+e,c+g-f/2,a+e-f/2,c+g,a+e-f,c+g,"L",a+h,c+g,"C",a+h/2,c+g,a,c+g-h/2,a,c+g-h,"L",a,c+k,"C",a,c+k/2,a+k/2,c,a+k,c,"Z"]}var p=a.Chart,f=a.defaultOptions,e=a.each,q=a.extend,w=
a.merge,t=a.pick,u=a.Renderer,l=a.SVGRenderer,c=a.VMLRenderer;q(f.lang,{zoomIn:"Zoom in",zoomOut:"Zoom out"});f.mapNavigation={buttonOptions:{alignTo:"plotBox",align:"left",verticalAlign:"top",x:0,width:18,height:18,padding:5,style:{fontSize:"15px",fontWeight:"bold"},theme:{"stroke-width":1,"text-align":"center"}},buttons:{zoomIn:{onclick:function(){this.mapZoom(.5)},text:"+",y:0},zoomOut:{onclick:function(){this.mapZoom(2)},text:"-",y:28}},mouseWheelSensitivity:1.1};a.splitPath=function(a){var b;
a=a.replace(/([A-Za-z])/g," $1 ");a=a.replace(/^\s*/,"").replace(/\s*$/,"");a=a.split(/[ ,]+/);for(b=0;b<a.length;b++)/[a-zA-Z]/.test(a[b])||(a[b]=parseFloat(a[b]));return a};a.maps={};l.prototype.symbols.topbutton=function(a,c,e,g,f){return h(a-1,c-1,e,g,f.r,f.r,0,0)};l.prototype.symbols.bottombutton=function(a,c,e,g,f){return h(a-1,c-1,e,g,0,0,f.r,f.r)};u===c&&e(["topbutton","bottombutton"],function(a){c.prototype.symbols[a]=l.prototype.symbols[a]});a.Map=a.mapChart=function(b,c,e){var g="string"===
typeof b||b.nodeName,f=arguments[g?1:0],d={endOnTick:!1,visible:!1,minPadding:0,maxPadding:0,startOnTick:!1},h,l=a.getOptions().credits;h=f.series;f.series=null;f=w({chart:{panning:"xy",type:"map"},credits:{mapText:t(l.mapText,' \u00a9 \x3ca href\x3d"{geojson.copyrightUrl}"\x3e{geojson.copyrightShort}\x3c/a\x3e'),mapTextFull:t(l.mapTextFull,"{geojson.copyright}")},tooltip:{followTouchMove:!1},xAxis:d,yAxis:w(d,{reversed:!0})},f,{chart:{inverted:!1,alignTicks:!1}});f.series=h;return g?new p(b,f,e):
new p(f,c)}})(w)});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
  Highcharts JS v5.0.14 (2017-07-28)
 Solid angular gauge module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l){"object"===typeof module&&module.exports?module.exports=l:l(Highcharts)})(function(l){(function(e){var l=e.pInt,u=e.pick,m=e.each,r=e.isNumber,w=e.wrap,v;w(e.Renderer.prototype.symbols,"arc",function(a,f,d,c,e,b){a=a(f,d,c,e,b);b.rounded&&(c=((b.r||c)-b.innerR)/2,b=["A",c,c,0,1,1,a[12],a[13]],a.splice.apply(a,[a.length-1,0].concat(["A",c,c,0,1,1,a[1],a[2]])),a.splice.apply(a,[11,3].concat(b)));return a});v={initDataClasses:function(a){var f=this.chart,d,c=0,t=this.options;this.dataClasses=
d=[];m(a.dataClasses,function(b,h){b=e.merge(b);d.push(b);b.color||("category"===t.dataClassColor?(h=f.options.colors,b.color=h[c++],c===h.length&&(c=0)):b.color=e.color(t.minColor).tweenTo(e.color(t.maxColor),h/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];m(this.stops,function(a){a.color=e.color(a[1])})},toColor:function(a,f){var d=this.stops,c,e,b=this.dataClasses,h,g;if(b)for(g=b.length;g--;){if(h=b[g],c=h.from,d=
h.to,(void 0===c||a>=c)&&(void 0===d||a<=d)){e=h.color;f&&(f.dataClass=g);break}}else{this.isLog&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(g=d.length;g--&&!(a>d[g][0]););c=d[g]||d[g+1];d=d[g+1]||c;a=1-(d[0]-a)/(d[0]-c[0]||1);e=c.color.tweenTo(d.color,a)}return e}};e.seriesType("solidgauge","gauge",{colorByPoint:!0},{translate:function(){var a=this.yAxis;e.extend(a,v);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);e.seriesTypes.gauge.prototype.translate.call(this)},
drawPoints:function(){var a=this,f=a.yAxis,d=f.center,c=a.options,t=a.chart.renderer,b=c.overshoot,h=r(b)?b/180*Math.PI:0,g;r(c.threshold)&&(g=f.startAngleRad+f.translate(c.threshold,null,null,null,!0));this.thresholdAngleRad=u(g,f.startAngleRad);m(a.points,function(b){var g=b.graphic,k=f.startAngleRad+f.translate(b.y,null,null,null,!0),m=l(u(b.options.radius,c.radius,100))*d[2]/200,n=l(u(b.options.innerRadius,c.innerRadius,60))*d[2]/200,p=f.toColor(b.y,b),q=Math.min(f.startAngleRad,f.endAngleRad),
r=Math.max(f.startAngleRad,f.endAngleRad);"none"===p&&(p=b.color||a.color||"none");"none"!==p&&(b.color=p);k=Math.max(q-h,Math.min(r+h,k));!1===c.wrap&&(k=Math.max(q,Math.min(r,k)));q=Math.min(k,a.thresholdAngleRad);k=Math.max(k,a.thresholdAngleRad);k-q>2*Math.PI&&(k=q+2*Math.PI);b.shapeArgs=n={x:d[0],y:d[1],r:m,innerR:n,start:q,end:k,rounded:c.rounded};b.startR=m;g?(b=n.d,g.animate(e.extend({fill:p},n)),b&&(n.d=b)):(b.graphic=t.arc(n).addClass(b.getClassName(),!0).attr({fill:p,"sweep-flag":0}).add(a.group),
"square"!==c.linecap&&b.graphic.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),b.graphic.attr({stroke:c.borderColor||"none","stroke-width":c.borderWidth||0}))})},animate:function(a){a||(this.startAngleRad=this.thresholdAngleRad,e.seriesTypes.pie.prototype.animate.call(this,a))}})})(l)});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);
/* unused harmony reexport Configuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_card_component__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__one_card_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__two_card_component__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__two_card_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__three_card_component__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__three_card_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__five_card_component__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__five_card_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__four_card_component__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__four_card_component__["a"]; });








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_feed_component__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_feed_component__["a"]; });



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);
/* unused harmony reexport Configuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_chart_component__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__bar_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_chart_component__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__line_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pie_chart_component__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__pie_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gaugev1_chart_component__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__gaugev1_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gaugev2_chart_component__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__gaugev2_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bar_line_chart_component__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__bar_line_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bar_line_pie_chart_component__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__bar_line_pie_chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__maps_maps_component__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__maps_maps_component__["a"]; });











/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_iframe_component__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_iframe_component__["a"]; });



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_image_component__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_image_component__["a"]; });



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_table_component__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__one_table_component__["a"]; });




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_text_component__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_text_component__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_youtube_component__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_youtube_component__["a"]; });



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    function scanTable($table) {
        var m = [];
        $table.children("tr").each(function (y, row) {
            $(row).children("td, th").each(function (x, cell) {
                var $cell = $(cell),
                    cspan = $cell.attr("colspan") | 0,
                    rspan = $cell.attr("rowspan") | 0,
                    tx,
                    ty;
                cspan = cspan ? cspan : 1;
                rspan = rspan ? rspan : 1;
                for (; m[y] && m[y][x]; ++x) {} //skip already occupied cells in current row
                for (tx = x; tx < x + cspan; ++tx) {
                    //mark matrix elements occupied by current cell with true
                    for (ty = y; ty < y + rspan; ++ty) {
                        if (!m[ty]) {
                            //fill missing rows
                            m[ty] = [];
                        }
                        m[ty][tx] = true;
                    }
                }
                var pos = { top: y, left: x };
                $cell.data("cellPos", pos);
            });
        });
    };

    $.fn.cellPos = function (rescan) {
        var $cell = this.first(),
            pos = $cell.data("cellPos");
        if (!pos || rescan) {
            var $table = $cell.closest("table, thead, tbody, tfoot");
            scanTable($table);
        }
        pos = $cell.data("cellPos");
        return pos;
    };

    $.fn.smartGrid = function (param) {
        return this.each(function () {
            SmartGrid.call(this);
        });

        function SmartGrid() {

            {
                var setCorner = function setCorner() {
                    var table = $(settings.table);

                    if (settings.head) {
                        if (settings.left > 0) {
                            var tr = table.find("thead tr");

                            tr.each(function (k, row) {
                                solverLeftColspan(row, function (cell) {
                                    $(cell).css("z-index", settings['z-index'] + 1);
                                });
                            });
                        }

                        if (settings.right > 0) {
                            var tr = table.find("thead tr");

                            tr.each(function (k, row) {
                                solveRightColspan(row, function (cell) {
                                    $(cell).css("z-index", settings['z-index'] + 1);
                                });
                            });
                        }
                    }

                    if (settings.foot) {
                        if (settings.left > 0) {
                            var tr = table.find("tfoot tr");

                            tr.each(function (k, row) {
                                solverLeftColspan(row, function (cell) {
                                    $(cell).css("z-index", settings['z-index']);
                                });
                            });
                        }

                        if (settings.right > 0) {
                            var tr = table.find("tfoot tr");

                            tr.each(function (k, row) {
                                solveRightColspan(row, function (cell) {
                                    $(cell).css("z-index", settings['z-index']);
                                });
                            });
                        }
                    }
                };

                var handlingFixed = function handlingFixed(parent, e) {
                    var scrollWidth = parent[0].scrollWidth;
                    var clientWidth = parent[0].clientWidth;
                    var scrollHeight = parent[0].scrollHeight;
                    var clientHeight = parent[0].clientHeight;
                    var top = parent.scrollTop();
                    var left = parent.scrollLeft();

                    if (settings.head) parent.find("thead tr > *").css("top", top);

                    if (settings.foot) parent.find("tfoot tr > *").css("bottom", scrollHeight - clientHeight - top);

                    if (settings.left > 0) {
                        settings.leftColumns.css("left", left);
                        if (settings.class) settings.leftColumns.addClass(settings.class);
                    }

                    if (settings.right > 0) {
                        settings.rightColumns.css("right", scrollWidth - clientWidth - left);
                        if (settings.class) settings.rightColumns.addClass(settings.class);
                    }
                };

                var setParent = function setParent() {
                    var parent = $(settings.parent);
                    var table = $(settings.table);
                    parent.css({
                        'overflow-x': 'auto',
                        'overflow-y': 'auto'
                    });

                    var lastMoment = 0;

                    $(parent).bind('touchmove', function (ev) {
                        handlingFixed(parent, ev);
                    });

                    parent.scroll(function (ev) {
                        ev.stopPropagation();ev.preventDefault();
                        handlingFixed(parent, ev);
                    });
                };

                // Set table head fixed


                var fixHead = function fixHead() {
                    var thead = $(settings.table).find("thead");
                    var tr = thead.find("tr");
                    var cells = thead.find("tr > *");
                    setBackground(cells);
                    cells.css({
                        'position': 'relative'
                    });
                };

                // Set table foot fixed


                var fixFoot = function fixFoot() {
                    var tfoot = $(settings.table).find("tfoot");
                    var tr = tfoot.find("tr");
                    var cells = tfoot.find("tr > *");

                    setBackground(cells);
                    cells.css({
                        'position': 'relative'
                    });
                };

                // Set table left column fixed


                var fixLeft = function fixLeft() {
                    var table = $(settings.table);
                    settings.leftColumns = $();
                    var tr = table.find("tr"),
                        count = 0;
                    tr.each(function (k, row) {
                        solverLeftColspan(row, function (cell) {
                            if (settings.top == undefined || count < settings.top * settings.left) settings.leftColumns = settings.leftColumns.add(cell);
                            if (cell[0] && cell[0].nodeName == 'TD') count++;
                        });
                    });
                    var column = settings.leftColumns;
                    column.each(function (k, cell) {
                        var cell = $(cell);
                        setBackground(cell);
                        cell.css({
                            'position': 'relative'
                        });
                    });
                };

                // Set table right column fixed


                var fixRight = function fixRight() {
                    var table = $(settings.table);

                    var fixColumn = settings.right;

                    settings.rightColumns = $();

                    var tr = table.find("tr");
                    tr.each(function (k, row) {
                        solveRightColspan(row, function (cell) {
                            settings.rightColumns = settings.rightColumns.add(cell);
                        });
                    });

                    var column = settings.rightColumns;

                    column.each(function (k, cell) {
                        var cell = $(cell);

                        setBackground(cell);
                        cell.css({
                            'position': 'relative'
                        });
                    });
                };

                // Set fixed cells backgrounds


                var setBackground = function setBackground(elements) {
                    elements.each(function (k, element) {
                        var element = $(element);
                        var parent = $(element).parent();
                        if (element[0].style.backgroundColor) return;

                        var elementBackground = element.css("background-color");
                        elementBackground = elementBackground == "transparent" || elementBackground == "rgba(0, 0, 0, 0)" ? null : elementBackground;

                        var parentBackground = parent.css("background-color");
                        parentBackground = parentBackground == "transparent" || parentBackground == "rgba(0, 0, 0, 0)" ? null : parentBackground;

                        var background = parentBackground ? parentBackground : "white";
                        background = elementBackground ? elementBackground : background;
                        // element.css("background-color", background);
                        element.css("touch-action", "manipulation");
                        // element.css("border-top", "1px solid rgba(168, 159, 159, 0.12)");
                        element.css("background-clip", "padding-box");
                    });
                };

                var solverLeftColspan = function solverLeftColspan(row, action) {
                    var fixColumn = settings.left;
                    var inc = 1;

                    for (var i = 1; i <= fixColumn; i = i + inc) {
                        var nth = inc > 1 ? i - 1 : i;

                        var cell = $(row).find("> *:nth-child(" + nth + ")");
                        var colspan = cell.prop("colspan");

                        if (cell.cellPos().left < fixColumn) {
                            action(cell);
                        }

                        inc = colspan;
                    }
                };

                var solveRightColspan = function solveRightColspan(row, action) {
                    var fixColumn = settings.right;
                    var inc = 1;

                    for (var i = 1; i <= fixColumn; i = i + inc) {
                        var nth = inc > 1 ? i - 1 : i;

                        var cell = $(row).find("> *:nth-last-child(" + nth + ")");
                        var colspan = cell.prop("colspan");

                        action(cell);

                        inc = colspan;
                    }
                };

                var defaults = {
                    head: true,
                    foot: false,
                    left: 0,
                    right: 0,
                    class: 'smart-grid-fixed',
                    'z-index': 0
                };

                var settings = $.extend({}, defaults, param);

                settings.table = this;
                settings.parent = $(settings.table).parent();
                setParent();

                if (settings.head == true) fixHead();

                if (settings.foot == true) fixFoot();

                if (settings.left > 0) fixLeft();

                if (settings.right > 0) fixRight();

                setCorner();

                $(settings.parent).trigger("scroll");

                window.onresize = function () {
                    return $(settings.parent).trigger("scroll");
                };
            }
        }
    };
})();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardFive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardFive = /** @class */ (function (_super) {
    __extends(CardFive, _super);
    function CardFive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFive.prototype.onInit = function () {
        this.card = {};
    };
    CardFive.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        this.card = Object.assign({}, configuration.field);
        if (configuration.field && configuration.field.name && recordset.rows && recordset.rows[0]) {
            var index = this.getPosition(configuration.field.name);
            this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(recordset.rows[0][index], configuration.field.format, configuration.field.formatPrecision);
        }
        if (configuration.field && configuration.field.icon && configuration.field.icon.value) {
            this.card.icon = configuration.field.icon.value;
        }
        if (configuration.field && configuration.field.color && configuration.field.color.value) {
            this.card.color = configuration.field.color.value;
        }
        if (configuration.field && configuration.field.fontColor && configuration.field.fontColor.value) {
            this.card.fontColor = configuration.field.fontColor.value;
        }
        if (configuration.field && configuration.field.iconColor && configuration.field.iconColor.value) {
            this.card.iconColor = configuration.field.iconColor.value;
        }
        if (configuration.field && configuration.field.name) {
            var index = this.getPosition(configuration.field.name);
            if (recordset.rows && recordset.rows[0]) {
                var cardValue = recordset.rows[0][index];
                this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(cardValue, configuration.field.format, configuration.field.formatPrecision);
                configuration.conditionalsFormatting.forEach(function (condition) {
                    var indexColumnCondition = configuration.data.columnsConditionalFormattings.indexOf(condition.field);
                    var row = configuration.data.rowsConditionalFormattings[0];
                    if (condition.compareOtherField) {
                        var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(condition.fieldCompare);
                        condition.value = row[indexColumnConditionCompare];
                    }
                    if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(condition.condition, row[indexColumnCondition], condition.value)) {
                        if (condition.icon && condition.icon.value) {
                            _this.card.icon = condition.icon.value;
                        }
                        if (condition.color && condition.color.value) {
                            _this.card.color = condition.color.value;
                        }
                    }
                });
            }
        }
    };
    CardFive.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n      <div class=\"board-card\" style=\"background-color: " + this.card.color + "\">\n        <div class=\"board-five\">\n          <div class=\"content\">\n            <div class=\"board-five-header\">\n              <span style=\"color: " + this.card.fontColor + "\">" + (this.card.title || '') + "</span>\n            </div>\n            <div class=\"board-five-body\">\n              <i style=\"color: " + this.card.iconColor + "\" class=\"" + (this.card.icon || '') + "\"></i>\n            </div>\n            <div class=\"board-five-footer\">\n              <span class=\"board-five-footer-value\" style=\"color: " + this.card.fontColor + "\">" + (this.card.value || '') + "</span>\n              <span style=\"color: " + this.card.fontColor + "\">" + (this.card.label || '') + "</span>\n            </div>\n          </div>\n          " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n        </div>\n      </div>\n    ";
        element.innerHTML = template;
    };
    return CardFive;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseCard */]));



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardFour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardFour = /** @class */ (function (_super) {
    __extends(CardFour, _super);
    function CardFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFour.prototype.onInit = function () {
        this.card = {};
    };
    CardFour.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        this.card = Object.assign({}, configuration.field);
        if (configuration.field && configuration.field.name && recordset.rows && recordset.rows[0]) {
            var index = this.getPosition(configuration.field.name);
            this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(recordset.rows[0][index], configuration.field.format, configuration.field.formatPrecision);
        }
        if (configuration.field && configuration.field.icon && configuration.field.icon.value) {
            this.card.icon = configuration.field.icon.value;
        }
        if (configuration.field && configuration.field.color && configuration.field.color.value) {
            this.card.color = configuration.field.color.value;
        }
        if (configuration.field && configuration.field.fontColor && configuration.field.fontColor.value) {
            this.card.fontColor = configuration.field.fontColor.value;
        }
        if (configuration.field && configuration.field.iconColor && configuration.field.iconColor.value) {
            this.card.iconColor = configuration.field.iconColor.value;
        }
        if (configuration.field && configuration.field.description) {
            this.card.description = configuration.field.description;
        }
        if (configuration.field && configuration.field.name) {
            var index = this.getPosition(configuration.field.name);
            if (recordset.rows && recordset.rows[0]) {
                var cardValue = recordset.rows[0][index];
                this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(cardValue, configuration.field.format, configuration.field.formatPrecision);
                console.log(configuration);
                configuration.conditionalsFormatting.forEach(function (condition) {
                    var indexColumnCondition = configuration.data.columnsConditionalFormattings.indexOf(condition.field);
                    var row = configuration.data.rowsConditionalFormattings[0];
                    if (condition.compareOtherField) {
                        var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(condition.fieldCompare);
                        condition.value = row[indexColumnConditionCompare];
                    }
                    if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(condition.condition, row[indexColumnCondition], condition.value)) {
                        if (condition.icon && condition.icon.value) {
                            _this.card.icon = condition.icon.value;
                        }
                        if (condition.color && condition.color.value) {
                            _this.card.color = condition.color.value;
                        }
                    }
                });
            }
        }
    };
    CardFour.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n      <div class=\"board-card\">\n        <div class=\"card-four\" style=\"background-color: " + this.card.color + "\">\n          <div class=\"content\">\n            <div class=\"card-four-icon\">\n              <div class=\"card-four-icon-center\" style=\"background-color: " + this.card.color + "; border-color: " + this.card.color + ";\">\n                  <i style=\"color: " + this.card.iconColor + "\" class=\"" + (this.card.icon || '') + "\"></i>\n              </div>\n            </div>\n            <div class=\"card-four-detail\">\n              <div class=\"card-four-detail-header\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.value || '') + "</span>\n              </div>\n              <div class=\"card-four-detail-body\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.label || '') + "</span>\n              </div>\n              <div class=\"card-four-detail-footer\">\n                <textarea disabled style=\"color: " + this.card.fontColor + "\">" + (this.card.description || '') + "</textarea>\n              </div>\n            </div>\n          </div>\n          " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n        </div>\n      </div>\n    ";
        element.innerHTML = template;
    };
    return CardFour;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseCard */]));



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardOne = /** @class */ (function (_super) {
    __extends(CardOne, _super);
    function CardOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardOne.prototype.onInit = function () {
        this.card = {};
    };
    CardOne.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        this.card = Object.assign({}, configuration.field);
        if (configuration.field && configuration.field.icon && configuration.field.icon.value) {
            this.card.icon = configuration.field.icon.value;
        }
        if (configuration.field && configuration.field.color && configuration.field.color.value) {
            this.card.color = configuration.field.color.value;
        }
        if (configuration.field && configuration.field.fontColor && configuration.field.fontColor.value) {
            this.card.fontColor = configuration.field.fontColor.value;
        }
        if (configuration.field && configuration.field.iconColor && configuration.field.iconColor.value) {
            this.card.iconColor = configuration.field.iconColor.value;
        }
        if (configuration.field && configuration.field.name) {
            var index = this.getPosition(configuration.field.name);
            if (recordset.rows && recordset.rows[0]) {
                var cardValue = recordset.rows[0][index];
                this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(cardValue, configuration.field.format, configuration.field.formatPrecision);
                configuration.conditionalsFormatting.forEach(function (condition) {
                    var indexColumnCondition = configuration.data.columnsConditionalFormattings.indexOf(condition.field);
                    var row = configuration.data.rowsConditionalFormattings[0];
                    if (condition.compareOtherField) {
                        var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(condition.fieldCompare);
                        condition.value = row[indexColumnConditionCompare];
                    }
                    if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(condition.condition, row[indexColumnCondition], condition.value)) {
                        if (condition.icon && condition.icon.value) {
                            _this.card.icon = condition.icon.value;
                        }
                        if (condition.color && condition.color.value) {
                            _this.card.color = condition.color.value;
                        }
                    }
                });
            }
        }
    };
    CardOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n      <div class=\"board-card\">\n        <div class=\"card-one\">\n          <div class=\"card-one-icon\" style=\"background-color: " + this.card.color + "\">\n            <i style=\"color: " + this.card.iconColor + "\" class=\"" + (this.card.icon || '') + "\"></i>\n          </div>\n          <div class=\"card-one-detail\">\n            <div class=\"card-one-detail-content\">\n              <div class=\"card-one-detail-header\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.title || '') + "</span>\n              </div>\n              <div class=\"card-one-detail-body\">\n                <div style=\"color: " + this.card.fontColor + "\">" + (this.card.value || '') + "</div>\n              </div>\n              <div class=\"card-one-detail-footer\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.label || '') + "</span>\n              </div>\n            </div>\n            " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n          </div>\n        </div>\n      </div>\n    ";
        element.innerHTML = template;
    };
    return CardOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseCard */]));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardThree = /** @class */ (function (_super) {
    __extends(CardThree, _super);
    function CardThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardThree.prototype.onInit = function () {
        this.card = {};
    };
    CardThree.prototype.processRecordSet = function (recordset, configuration) {
        this.card = Object.assign({}, configuration.field);
        if (configuration.color && configuration.color.value) {
            this.card.color = configuration.color.value;
        }
        if (configuration && configuration.icon && configuration.icon.value) {
            this.card.icon = configuration.icon.value;
        }
        if (configuration && configuration.fontColor && configuration.fontColor.value) {
            this.card.fontColor = configuration.fontColor.value;
        }
        if (configuration && configuration.iconColor && configuration.iconColor.value) {
            this.card.iconColor = configuration.iconColor.value;
        }
        this.applyFieldOne(configuration, recordset);
        this.applyFieldTwo(configuration, recordset);
        this.applyFieldThree(configuration, recordset);
    };
    CardThree.prototype.applyFieldOne = function (configuration, recordset) {
        var _this = this;
        if (configuration.fieldOne && configuration.fieldOne.name && recordset.rows && recordset.rows[0]) {
            var valueOne_1 = recordset.rows[0][this.getPosition(configuration.fieldOne.name)];
            this.card.fieldOne = Object.assign(configuration.fieldOne, { value: __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(valueOne_1, configuration.fieldOne.format, configuration.fieldOne.formatPrecision) });
            this.getConditionalsFormatting(configuration, configuration.fieldOne.name).forEach(function (data) {
                if (data.compareOtherField) {
                    var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(data.fieldCompare);
                    data.value = recordset.rows[0][indexColumnConditionCompare];
                }
                _this.applyConditionalsFormatting(data.condition, valueOne_1, data.value, data);
            });
        }
        else {
            this.card.fieldOne = Object.assign({}, configuration.fieldOne);
        }
    };
    CardThree.prototype.applyFieldTwo = function (configuration, recordset) {
        var _this = this;
        if (configuration.fieldTwo && configuration.fieldTwo.name && recordset.rows && recordset.rows[0]) {
            var valueTwo_1 = recordset.rows[0][this.getPosition(configuration.fieldTwo.name)];
            this.card.fieldTwo = Object.assign(configuration.fieldTwo, { value: __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(valueTwo_1, configuration.fieldTwo.format, configuration.fieldTwo.formatPrecision) });
            this.getConditionalsFormatting(configuration, configuration.fieldTwo.name).forEach(function (data) {
                if (data.compareOtherField) {
                    var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(data.fieldCompare);
                    data.value = recordset.rows[0][indexColumnConditionCompare];
                }
                _this.applyConditionalsFormatting(data.condition, valueTwo_1, data.value, data);
            });
        }
        else {
            this.card.fieldTwo = Object.assign({}, configuration.fieldTwo);
        }
    };
    CardThree.prototype.applyFieldThree = function (configuration, recordset) {
        var _this = this;
        if (configuration.fieldThree && configuration.fieldThree.name && recordset.rows && recordset.rows[0]) {
            var valueThree_1 = recordset.rows[0][this.getPosition(configuration.fieldThree.name)];
            this.card.fieldThree = Object.assign(configuration.fieldThree, { value: __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(valueThree_1, configuration.fieldThree.format, configuration.fieldThree.formatPrecision) });
            this.getConditionalsFormatting(configuration, configuration.fieldThree.name).forEach(function (data) {
                if (data.compareOtherField) {
                    var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(data.fieldCompare);
                    data.value = recordset.rows[0][indexColumnConditionCompare];
                }
                _this.applyConditionalsFormatting(data.condition, valueThree_1, data.value, data);
            });
        }
        else {
            this.card.fieldThree = Object.assign({}, configuration.fieldThree);
        }
    };
    CardThree.prototype.getConditionalsFormatting = function (configuration, field) {
        if (configuration.conditionalsFormatting) {
            return configuration.conditionalsFormatting.filter(function (data) { return data.field == field; });
        }
        return [];
    };
    CardThree.prototype.applyConditionalsFormatting = function (condition, value, conditionValue, data) {
        if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(condition, value, conditionValue)) {
            if (data.icon && data.icon.value) {
                this.card.icon = data.icon.value;
            }
            if (data.color && data.color.value) {
                this.card.color = data.color.value;
            }
        }
    };
    CardThree.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n      <div class=\"board-card\" style=\"background-color: " + this.card.color + "; border-color: " + this.card.color + ";\">\n        <div class=\"card-three\">\n          <div class=\"content\">\n            <div class=\"card-three-right\">\n              <div class=\"card-three-right-header\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldOne.label || '') + "</span>\n                <span class=\"value\" style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldOne.value || '') + "</span>\n              </div>\n              <div class=\"card-three-right-footer\">\n                <span style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldTwo.label || '') + "</span>\n                <span class=\"value\" style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldTwo.value || '') + "</span>\n              </div>\n            </div>\n            <div class=\"card-three-left\">\n              <div class=\"card-three-left-header\">\n                <i style=\"color: " + this.card.iconColor + "\" class=\"" + (this.card.icon || '') + "\"></i>\n              </div>\n              <div class=\"card-three-left-footer\">\n                  <span style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldThree.label || '') + "</span>\n                  <span class=\"value\" style=\"color: " + this.card.fontColor + "\">" + (this.card.fieldThree.value || '') + "</span>\n              </div>\n            </div>\n          </div>\n          " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n        </div>\n      </div>\n    ";
        element.innerHTML = template;
    };
    return CardThree;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseCard */]));



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardTwo = /** @class */ (function (_super) {
    __extends(CardTwo, _super);
    function CardTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardTwo.prototype.onInit = function () {
        this.card = {};
    };
    CardTwo.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        this.card = Object.assign({}, configuration.field);
        if (configuration.field && configuration.field.icon && configuration.field.icon.value) {
            this.card.icon = configuration.field.icon.value;
        }
        if (configuration.field && configuration.field.color && configuration.field.color.value) {
            this.card.color = configuration.field.color.value;
        }
        if (configuration.field && configuration.field.fontColor && configuration.field.fontColor.value) {
            this.card.fontColor = configuration.field.fontColor.value;
        }
        if (configuration.field && configuration.field.iconColor && configuration.field.iconColor.value) {
            this.card.iconColor = configuration.field.iconColor.value;
        }
        if (configuration.field && configuration.field.name) {
            var index = this.getPosition(configuration.field.name);
            if (recordset.rows && recordset.rows[0]) {
                var cardValue = recordset.rows[0][index];
                this.card.value = __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(cardValue, configuration.field.format, configuration.field.formatPrecision);
                configuration.conditionalsFormatting.forEach(function (condition) {
                    var indexColumnCondition = configuration.data.columnsConditionalFormattings.indexOf(condition.field);
                    var row = configuration.data.rowsConditionalFormattings[0];
                    if (condition.compareOtherField) {
                        var indexColumnConditionCompare = configuration.data.columnsConditionalFormattings.indexOf(condition.fieldCompare);
                        condition.value = row[indexColumnConditionCompare];
                    }
                    if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(condition.condition, row[indexColumnCondition], condition.value)) {
                        if (condition.icon && condition.icon.value) {
                            _this.card.icon = condition.icon.value;
                        }
                        if (condition.color && condition.color.value) {
                            _this.card.color = condition.color.value;
                        }
                    }
                });
            }
        }
    };
    CardTwo.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n    <div class=\"board-card\" style=\"background-color: " + this.card.color + "\">\n      <div class=\"card-two\">\n        <div class=\"content\">\n          <div class=\"card-two-detail\">\n            <div class=\"card-two-detail-header\">\n              <span style=\"color: " + this.card.fontColor + "\">" + (this.card.title || '') + "</span>\n            </div>\n            <div class=\"card-two-detail-body\">\n              <span style=\"color: " + this.card.fontColor + "\">" + (this.card.value || '') + "</span>\n            </div>\n            <div class=\"card-two-detail-footer\">\n              <span style=\"color: " + this.card.fontColor + "\">" + (this.card.label || '') + "</span>\n              </div>\n            </div>\n          <div class=\"card-two-icon\">\n            <i style=\"color: " + this.card.iconColor + "\" class=\"" + (this.card.icon || '') + "\"></i>\n          </div>\n        </div>\n        " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n      </div>      \n    </div>\n    ";
        element.innerHTML = template;
    };
    return CardTwo;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseCard */]));



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
var CommonProvider;
(function (CommonProvider) {
    function isConditionalFormatting(condition, compare, value) {
        if (value === void 0) { value = ''; }
        switch (condition) {
            case 'EQ':
                return value == compare;
            case 'GT':
                return Number(compare) > Number(value);
            case 'LT':
                return Number(compare) < Number(value);
            case 'GEQ':
                return Number(compare) >= Number(value);
            case 'LEQ':
                return Number(compare) <= Number(value);
            case 'NEQ':
                return value != compare;
            case 'CONTAINS':
                return compare.toString().indexOf(value.toString()) > 0;
        }
    }
    CommonProvider.isConditionalFormatting = isConditionalFormatting;
    function formatValue(value, format, precision) {
        var formattedValue = value;
        if ((!precision || precision) && precision == null) {
            // console.log('passei por aqui', precision)
            precision = 2;
        }
        if (formattedValue === undefined)
            formattedValue = 0;
        if (value == '----')
            return;
        switch (format) {
            case 'moeda':
                if (formattedValue.toString().indexOf('R$') === -1)
                    formattedValue = 'R$ ' + formatMoney(Number(formattedValue), precision, ',', '.');
                break;
            case 'moedaabbreviation':
                formattedValue = this.formatValueAbbreviation(value, precision);
                break;
            case 'percentual':
                if (formattedValue.toString().indexOf('%') === -1)
                    formattedValue = formatMoney(Number(formattedValue), precision, ',', '.') + '%';
                break;
            case 'decimal':
                if (formattedValue.toString().indexOf(',') === -1)
                    formattedValue = formatMoney(Number(formattedValue), precision, ',', '.');
                break;
            case 'data#dd/MM/yyyy':
                var date = new Date(value);
                var userTimezoneOffset = date.getTimezoneOffset() * 60000;
                value = new Date(date.getTime() + userTimezoneOffset);
                formattedValue = window.moment(value).format("DD/MM/YYYY");
                break;
            case 'datahora#dd/MM/yyyy HH:mm':
                if (Number(value) != NaN) {
                    value = Number(value);
                }
                value = window.moment(value).utc().milliseconds() ? window.moment(value) : window.moment(value).utc();
                formattedValue = value.format('DD/MM/YYYY HH:mm:ss');
                break;
            case 'hora#HH:mm':
                formattedValue = window.moment(value).format("HH:mm");
                break;
        }
        return formattedValue;
    }
    CommonProvider.formatValue = formatValue;
    function formatValueAbbreviation(value, precision) {
        if ((!precision || precision) && precision == null) {
            precision = 2;
        }
        var aux = value < 0 ? value * -1 : value;
        if (aux / 1000000000000 >= 1) {
            if (value.toString().indexOf('Tri') === -1)
                return (value / 1000000000000).toFixed(precision) + ' Tri';
        }
        else if (aux / 1000000000 >= 1) {
            if (value.toString().indexOf('Bi') === -1)
                return (value / 1000000000).toFixed(precision) + ' Bi';
        }
        else if (aux / 1000000 >= 1) {
            if (value.toString().indexOf('Mi') === -1)
                return (value / 1000000).toFixed(precision) + ' Mi';
        }
        else if (aux / 1000 >= 1) {
            if (value.toString().indexOf('K') === -1)
                return (value / 1000).toFixed(precision) + ' K';
        }
        return value;
    }
    CommonProvider.formatValueAbbreviation = formatValueAbbreviation;
    function formatMoney(v, c, d, t) {
        var j, n = v, i, s;
        c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "";
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }
    CommonProvider.formatMoney = formatMoney;
    ;
    function getColorsPaletteDefault(invertedColors) {
        var colors = [
            "rgb(244, 67, 54)",
            "rgb(233, 30, 99)",
            "rgb(156, 39, 176)",
            "rgb(103, 58, 183)",
            "rgb(63, 81, 181)",
            "rgb(33, 150, 243)",
            "rgb(3, 169, 244)",
            "rgb(0, 188, 212)",
            "rgb(0, 150, 136)",
            "rgb(76, 175, 80)",
            "rgb(139, 195, 74)",
            "rgb(205, 220, 57)",
            "rgb(255, 235, 59)",
            "rgb(255, 193, 7)",
            "rgb(255, 152, 0)",
            "rgb(255, 87, 34)",
            "rgb(121, 85, 72)",
            "rgb(158, 158, 158)",
            "rgb(96, 125, 139)"
        ];
        if (invertedColors) {
            colors.reverse();
        }
        return colors;
    }
    CommonProvider.getColorsPaletteDefault = getColorsPaletteDefault;
    function getColorByPaletteKey(key, invertedColors) {
        var colorsPalette = [
            {
                name: 'DEFAULT',
                key: 'DEFAULT',
                color: 'white',
                colors: [
                    "rgb(244, 67, 54)",
                    "rgb(233, 30, 99)",
                    "rgb(156, 39, 176)",
                    "rgb(103, 58, 183)",
                    "rgb(63, 81, 181)",
                    "rgb(33, 150, 243)",
                    "rgb(3, 169, 244)",
                    "rgb(0, 188, 212)",
                    "rgb(0, 150, 136)",
                    "rgb(76, 175, 80)",
                    "rgb(139, 195, 74)",
                    "rgb(205, 220, 57)",
                    "rgb(255, 235, 59)",
                    "rgb(255, 193, 7)",
                    "rgb(255, 152, 0)",
                    "rgb(255, 87, 34)",
                    "rgb(121, 85, 72)",
                    "rgb(158, 158, 158)",
                    "rgb(96, 125, 139)"
                ]
            },
            {
                name: 'RED',
                key: 'RED',
                color: 'rgb(244, 67, 54)',
                colors: [
                    'rgb(255, 235, 238)',
                    'rgb(255, 205, 210)',
                    'rgb(239, 154, 154)',
                    'rgb(229, 115, 115)',
                    'rgb(239, 83, 80)',
                    'rgb(244, 67, 54)',
                    'rgb(229, 57, 53)',
                    'rgb(211, 47, 47)',
                    'rgb(198, 40, 40)',
                    'rgb(183, 28, 28)',
                    'rgb(255, 138, 128)',
                    'rgb(255, 82, 82)',
                    'rgb(255, 23, 68)',
                    'rgb(213, 0, 0)'
                ]
            },
            {
                name: 'PINK',
                key: 'PINK',
                color: 'rgb(233, 30, 99)',
                colors: [
                    'rgb(252, 228, 236)',
                    'rgb(248, 187, 208)',
                    'rgb(244, 143, 177)',
                    'rgb(240, 98, 146)',
                    'rgb(236, 64, 122)',
                    'rgb(233, 30, 99)',
                    'rgb(216, 27, 96)',
                    'rgb(194, 24, 91)',
                    'rgb(173, 20, 87)',
                    'rgb(136, 14, 79)',
                    'rgb(255, 128, 171)',
                    'rgb(255, 64, 129)',
                    'rgb(245, 0, 87)',
                    'rgb(197, 17, 98)'
                ]
            },
            {
                name: 'PURPLE',
                key: 'PURPLE',
                color: 'rgb(156, 39, 176)',
                colors: [
                    'rgb(243, 229, 245)',
                    'rgb(225, 190, 231)',
                    'rgb(206, 147, 216)',
                    'rgb(186, 104, 200)',
                    'rgb(171, 71, 188)',
                    'rgb(156, 39, 176)',
                    'rgb(142, 36, 170)',
                    'rgb(123, 31, 162)',
                    'rgb(106, 27, 154)',
                    'rgb(74, 20, 140)',
                    'rgb(234, 128, 252)',
                    'rgb(224, 64, 251)',
                    'rgb(213, 0, 249)',
                    'rgb(170, 0, 255)'
                ]
            },
            {
                name: 'DEEP PURPLE',
                key: 'DEEP_PURPLE',
                color: 'rgb(103, 58, 183)',
                colors: [
                    'rgb(237, 231, 246)',
                    'rgb(209, 196, 233)',
                    'rgb(179, 157, 219)',
                    'rgb(149, 117, 205)',
                    'rgb(126, 87, 194)',
                    'rgb(103, 58, 183)',
                    'rgb(94, 53, 177)',
                    'rgb(81, 45, 168)',
                    'rgb(69, 39, 160)',
                    'rgb(49, 27, 146)',
                    'rgb(179, 136, 255)',
                    'rgb(124, 77, 255)',
                    'rgb(101, 31, 255)',
                    'rgb(98, 0, 234)'
                ]
            },
            {
                name: 'INDIGO',
                key: 'INDIGO',
                color: 'rgb(63, 81, 181)',
                colors: [
                    'rgb(232, 234, 246)',
                    'rgb(197, 202, 233)',
                    'rgb(159, 168, 218)',
                    'rgb(121, 134, 203)',
                    'rgb(92, 107, 192)',
                    'rgb(63, 81, 181)',
                    'rgb(57, 73, 171)',
                    'rgb(48, 63, 159)',
                    'rgb(40, 53, 147)',
                    'rgb(26, 35, 126)',
                    'rgb(140, 158, 255)',
                    'rgb(83, 109, 254)',
                    'rgb(61, 90, 254)',
                    'rgb(48, 79, 254)'
                ]
            },
            {
                name: 'BLUE',
                key: 'BLUE',
                color: 'rgb(33, 150, 243)',
                colors: [
                    'rgb(227, 242, 253)',
                    'rgb(187, 222, 251)',
                    'rgb(144, 202, 249)',
                    'rgb(100, 181, 246)',
                    'rgb(66, 165, 245)',
                    'rgb(33, 150, 243)',
                    'rgb(30, 136, 229)',
                    'rgb(25, 118, 210)',
                    'rgb(21, 101, 192)',
                    'rgb(13, 71, 161)',
                    'rgb(130, 177, 255)',
                    'rgb(68, 138, 255)',
                    'rgb(41, 121, 255)',
                    'rgb(41, 98, 255)'
                ]
            },
            {
                name: 'LIGHT BLUE',
                key: 'LIGHT_BLUE',
                color: 'rgb(3, 169, 244)',
                colors: [
                    'rgb(225, 245, 254)',
                    'rgb(179, 229, 252)',
                    'rgb(129, 212, 250)',
                    'rgb(79, 195, 247)',
                    'rgb(41, 182, 246)',
                    'rgb(3, 169, 244)',
                    'rgb(3, 155, 229)',
                    'rgb(2, 136, 209)',
                    'rgb(2, 119, 189)',
                    'rgb(1, 87, 155)',
                    'rgb(128, 216, 255)',
                    'rgb(64, 196, 255)',
                    'rgb(0, 176, 255)',
                    'rgb(0, 145, 234)'
                ]
            },
            {
                name: 'CYAN',
                key: 'CYAN',
                color: 'rgb(0, 188, 212)',
                colors: [
                    'rgb(224, 247, 250)',
                    'rgb(178, 235, 242)',
                    'rgb(128, 222, 234)',
                    'rgb(77, 208, 225)',
                    'rgb(38, 198, 218)',
                    'rgb(0, 188, 212)',
                    'rgb(0, 172, 193)',
                    'rgb(0, 151, 167)',
                    'rgb(0, 131, 143)',
                    'rgb(0, 96, 100)',
                    'rgb(132, 255, 255)',
                    'rgb(24, 255, 255)',
                    'rgb(0, 229, 255)',
                    'rgb(0, 184, 212)'
                ]
            },
            {
                name: 'TEAL',
                key: 'TEAL',
                color: 'rgb(0, 150, 136)',
                colors: [
                    'rgb(224, 242, 241)',
                    'rgb(178, 223, 219)',
                    'rgb(128, 203, 196)',
                    'rgb(77, 182, 172)',
                    'rgb(38, 166, 154)',
                    'rgb(0, 150, 136)',
                    'rgb(0, 137, 123)',
                    'rgb(0, 121, 107)',
                    'rgb(0, 105, 92)',
                    'rgb(0, 77, 64)',
                    'rgb(167, 255, 235)',
                    'rgb(100, 255, 218)',
                    'rgb(29, 233, 182)',
                    'rgb(0, 191, 165)'
                ]
            },
            {
                name: 'GREEN',
                key: 'GREEN',
                color: 'rgb(76, 175, 80)',
                colors: [
                    'rgb(232, 245, 233)',
                    'rgb(200, 230, 201)',
                    'rgb(165, 214, 167)',
                    'rgb(129, 199, 132)',
                    'rgb(102, 187, 106)',
                    'rgb(76, 175, 80)',
                    'rgb(67, 160, 71)',
                    'rgb(56, 142, 60)',
                    'rgb(46, 125, 50)',
                    'rgb(27, 94, 32)',
                    'rgb(185, 246, 202)',
                    'rgb(105, 240, 174)',
                    'rgb(0, 230, 118)',
                    'rgb(0, 200, 83)'
                ]
            },
            {
                name: 'LIGHT GREEN',
                key: 'LIGHT_GREEN',
                color: 'rgb(139, 195, 74)',
                colors: [
                    'rgb(241, 248, 233)',
                    'rgb(220, 237, 200)',
                    'rgb(197, 225, 165)',
                    'rgb(174, 213, 129)',
                    'rgb(156, 204, 101)',
                    'rgb(139, 195, 74)',
                    'rgb(124, 179, 66)',
                    'rgb(104, 159, 56)',
                    'rgb(85, 139, 47)',
                    'rgb(51, 105, 30)',
                    'rgb(204, 255, 144)',
                    'rgb(178, 255, 89)',
                    'rgb(118, 255, 3)',
                    'rgb(100, 221, 23)'
                ]
            },
            {
                name: 'LIME',
                key: 'LIME',
                color: 'rgb(205, 220, 57)',
                colors: [
                    'rgb(240, 244, 195)',
                    'rgb(230, 238, 156)',
                    'rgb(220, 231, 117)',
                    'rgb(212, 225, 87)',
                    'rgb(205, 220, 57)',
                    'rgb(192, 202, 51)',
                    'rgb(175, 180, 43)',
                    'rgb(158, 157, 36)',
                    'rgb(130, 119, 23)',
                    'rgb(244, 255, 129)',
                    'rgb(238, 255, 65)',
                    'rgb(198, 255, 0)',
                    'rgb(174, 234, 0)'
                ]
            },
            {
                name: 'YELLOW',
                key: 'YELLOW',
                color: 'rgb(255, 235, 59)',
                colors: [
                    'rgb(255, 253, 231)',
                    'rgb(255, 249, 196)',
                    'rgb(255, 245, 157)',
                    'rgb(255, 241, 118)',
                    'rgb(255, 238, 88)',
                    'rgb(255, 235, 59)',
                    'rgb(253, 216, 53)',
                    'rgb(251, 192, 45)',
                    'rgb(249, 168, 37)',
                    'rgb(245, 127, 23)',
                    'rgb(255, 255, 141)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 234, 0)',
                    'rgb(255, 214, 0)'
                ]
            },
            {
                name: 'AMBER',
                key: 'AMBER',
                color: 'rgb(255, 193, 7)',
                colors: [
                    'rgb(255, 248, 225)',
                    'rgb(255, 236, 179)',
                    'rgb(255, 224, 130)',
                    'rgb(255, 213, 79)',
                    'rgb(255, 202, 40)',
                    'rgb(255, 193, 7)',
                    'rgb(255, 179, 0)',
                    'rgb(255, 160, 0)',
                    'rgb(255, 143, 0)',
                    'rgb(255, 111, 0)',
                    'rgb(255, 229, 127)',
                    'rgb(255, 215, 64)',
                    'rgb(255, 196, 0)',
                    'rgb(255, 171, 0)'
                ]
            },
            {
                name: 'ORANGE',
                key: 'ORANGE',
                color: 'rgb(255, 152, 0)',
                colors: [
                    'rgb(255, 243, 224)',
                    'rgb(255, 224, 178)',
                    'rgb(255, 204, 128)',
                    'rgb(255, 183, 77)',
                    'rgb(255, 167, 38)',
                    'rgb(255, 152, 0)',
                    'rgb(251, 140, 0)',
                    'rgb(245, 124, 0)',
                    'rgb(239, 108, 0)',
                    'rgb(230, 81, 0)',
                    'rgb(255, 209, 128)',
                    'rgb(255, 171, 64)',
                    'rgb(255, 145, 0)',
                    'rgb(255, 109, 0)'
                ]
            },
            {
                name: 'DEEP ORANGE',
                key: 'DEEP_ORANGE',
                color: 'rgb(255, 87, 34)',
                colors: [
                    'rgb(251, 233, 231)',
                    'rgb(255, 204, 188)',
                    'rgb(255, 171, 145)',
                    'rgb(255, 138, 101)',
                    'rgb(255, 112, 67)',
                    'rgb(255, 87, 34)',
                    'rgb(244, 81, 30)',
                    'rgb(230, 74, 25)',
                    'rgb(216, 67, 21)',
                    'rgb(191, 54, 12)',
                    'rgb(255, 158, 128)',
                    'rgb(255, 110, 64)',
                    'rgb(255, 61, 0)',
                    'rgb(221, 44, 0)'
                ]
            },
            {
                name: 'BROWN',
                key: 'BROWN',
                color: 'rgb(121, 85, 72)',
                colors: [
                    'rgb(239, 235, 233)',
                    'rgb(215, 204, 200)',
                    'rgb(188, 170, 164)',
                    'rgb(161, 136, 127)',
                    'rgb(141, 110, 99)',
                    'rgb(121, 85, 72)',
                    'rgb(109, 76, 65)',
                    'rgb(93, 64, 55)',
                    'rgb(78, 52, 46)',
                    'rgb(62, 39, 35)'
                ]
            },
            {
                name: 'GREY',
                key: 'GREY',
                color: 'rgb(158, 158, 158)',
                colors: [
                    'rgb(224, 224, 224)',
                    'rgb(189, 189, 189)',
                    'rgb(158, 158, 158)',
                    'rgb(117, 117, 117)',
                    'rgb(97, 97, 97)',
                    'rgb(66, 66, 66)',
                    'rgb(33, 33, 33)'
                ]
            },
            {
                name: 'BLUE GREY',
                key: 'BLUE_GREY',
                color: 'rgb(96, 125, 139)',
                colors: [
                    'rgb(236, 239, 241)',
                    'rgb(207, 216, 220)',
                    'rgb(176, 190, 197)',
                    'rgb(144, 164, 174)',
                    'rgb(120, 144, 156)',
                    'rgb(96, 125, 139)',
                    'rgb(84, 110, 122)',
                    'rgb(69, 90, 100)',
                    'rgb(55, 71, 79)',
                    'rgb(38, 50, 56)'
                ]
            }
        ];
        var palette = colorsPalette.filter(function (data) { return data.key == key; });
        var colors = this.getColorsPaletteDefault(invertedColors);
        if (palette.length > 0) {
            colors = palette[0].colors;
            if (invertedColors) {
                colors.reverse();
            }
        }
        return colors;
    }
    CommonProvider.getColorByPaletteKey = getColorByPaletteKey;
})(CommonProvider || (CommonProvider = {}));


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
var Http;
(function (Http) {
    function handlingHeaders(xmlRequest, headers) {
        Object.keys(headers).forEach(function (key) {
            xmlRequest.setRequestHeader(key, headers[key]);
        });
    }
    function get(url, options) {
        var client = new XMLHttpRequest();
        if (options && options.headers)
            handlingHeaders(client, options.headers);
        client.open("GET", url, true);
        client.send();
        return new Promise(function (resp, rej) {
            client.onreadystatechange = function () {
                if (client.readyState == XMLHttpRequest.DONE) {
                    resp(JSON.parse(client.responseText));
                }
            };
            client.onerror = function () { return rej(JSON.parse(client.responseText)); };
        });
    }
    Http.get = get;
})(Http || (Http = {}));


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);

var BaseFeed = /** @class */ (function () {
    function BaseFeed(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseFeed.prototype.render = function () {
        var _this = this;
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration).then(function () {
            _this.generateTemplate(_this.element, _this.recordset, _this.configuration);
        });
    };
    ;
    return BaseFeed;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_style_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__feed_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FeedOne = /** @class */ (function (_super) {
    __extends(FeedOne, _super);
    function FeedOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeedOne.prototype.onInit = function () {
        this.feed = {};
        this.rows = [];
    };
    FeedOne.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        this.feed = Object.assign({}, configuration);
        return new Promise(function (resp, rej) {
            __WEBPACK_IMPORTED_MODULE_2__common_providers__["b" /* Http */].get('https://api.rss2json.com/v1/api.json?api_key=ujup0b0pmnaopbegaarakuwkszlawudfqgursdzi&rss_url='
                + encodeURIComponent(_this.feed.url))
                .then(function (respAPI) {
                _this.rows = respAPI.items;
                resp(_this.rows);
            });
        });
    };
    FeedOne.prototype.getFeedItens = function () {
        return this.rows.reduce(function (prev, next) {
            return prev += "\n                <div class=\"item\">\n                    <div class=\"dashboard-feed-item\">\n                        " + next.content + "\n                        <span class=\"clearfix\"></span>\n                    </div>\n                </div>\n            ";
        }, '');
    };
    FeedOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n            <div class=\"feed-container\">\n                <div class=\"feed-header\">\n                    <h3>" + (this.feed.title || '') + "</h3>\n                </div>\n                <div class=\"feed-body\">\n                    " + this.getFeedItens() + "\n                    <span class=\"clearfix\"></span>\n                </div>\n                <span class=\"clearfix\"></span>\n            </div>  \n        ";
        element.innerHTML = template;
    };
    return FeedOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFeed */]));



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarLinePie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BarLinePie = /** @class */ (function (_super) {
    __extends(BarLinePie, _super);
    function BarLinePie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarLinePie.prototype.onInit = function () {
        this.categories = new Array();
        this.series = new Array();
        this.regExpDate = new RegExp('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$|^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$');
        this.regExpDateTime = new RegExp('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]T[0-9]{2}.[0-9]{2}.[0-9]{2}Z$|^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}T[0-9]{2}.[0-9]{2}.[0-9]{2}Z');
        this.qtdPie = 1;
    };
    BarLinePie.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        console.log(configuration);
        if (!(configuration.axisX && configuration.axisX.name)) {
            return;
        }
        var indexAxisX = this.getPosition(configuration.axisX.name);
        var seriesColumnAxisY = [];
        configuration
            .axisY
            .forEach(function (objAxisY) {
            seriesColumnAxisY = [];
            if (objAxisY.type === 'column') {
                var indexColumnAxisY_1 = _this.getPosition(objAxisY.name);
                recordset
                    .rows
                    .forEach(function (row) {
                    var categorieValue = row[indexAxisX];
                    if (_this.regExpDate.test(categorieValue)) {
                        categorieValue = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(categorieValue, 'data#dd/MM/yyyy', 2);
                    }
                    else {
                        if (_this.regExpDateTime.test(categorieValue)) {
                            categorieValue = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(categorieValue, 'datahora#dd/MM/yyyy HH:mm', 2);
                        }
                    }
                    _this.addCategorie(categorieValue);
                    var value = row[indexColumnAxisY_1];
                    var color = _this.getConditionFormatColor(objAxisY.name, value, configuration, row) || _this.getConditionFormatColor(configuration.axisX.name, row[indexAxisX], configuration, row);
                    if (color) {
                        seriesColumnAxisY.push({ y: Number(value), color: color });
                    }
                    else {
                        seriesColumnAxisY.push(Number(value));
                    }
                });
            }
            var color = objAxisY.color && objAxisY.color.value ? objAxisY.color.value : '#ff0000';
            if (objAxisY.type === 'spline') {
                var indexLineAxisY_1 = _this.getPosition(objAxisY.name);
                var seriesLineAxisY_1 = [];
                recordset
                    .rows
                    .forEach(function (row) { return seriesLineAxisY_1.push(Number(row[indexLineAxisY_1])); });
                _this.addSerieSpline(objAxisY.label || objAxisY.name, seriesLineAxisY_1, _this.getConditionFormatColor(objAxisY.name, recordset.rows[recordset.rows.length - 1][indexLineAxisY_1], configuration, recordset.rows[recordset.rows.length - 1]) || color);
            }
            else if (objAxisY.type === 'column') {
                _this.addSerieColumn(objAxisY.label || objAxisY.name, seriesColumnAxisY, color);
            }
            else if (objAxisY.type === 'pie') {
                objAxisY.showValues = configuration ? configuration.dataLabelAxisY : true;
                var indexPieAxisY_1 = _this.getPosition(objAxisY.name);
                var indexPieLabelAxisY_1 = _this.getPosition(objAxisY.label);
                var seriesPieAxisY_1 = [];
                recordset
                    .rows
                    .forEach(function (row) {
                    seriesPieAxisY_1.push({
                        name: row[indexPieLabelAxisY_1],
                        y: Number(row[indexPieAxisY_1])
                    });
                });
                _this.addSeriePie(objAxisY.label || objAxisY.name, seriesPieAxisY_1, objAxisY, configuration);
            }
        });
        configuration.pies.forEach(function (pie) {
            if (pie.data) {
                var namePie = pie.name;
                var posLabel = _this.getPieLabelPosition(namePie, pie);
                var indexDataSeries_1 = _this.getPositionPie(pie.dataSeries.name, pie);
                var indexLabelField_1 = _this.getPositionPie(pie.labelField.name, pie);
                var seriesPieAxisY_2 = [];
                pie.data.rows
                    .forEach(function (row) {
                    seriesPieAxisY_2.push({
                        name: row[indexLabelField_1],
                        y: Number(row[indexDataSeries_1]),
                        color: _this.getConditionFormatLabelColorPie(row[indexLabelField_1], pie, row) || _this.getConditionFormatDataColorPie(row[indexDataSeries_1], pie, row)
                    });
                });
                pie.showValues = configuration ? configuration.dataLabelAxisY : true;
                _this.addSeriePie(pie.labelField.name, seriesPieAxisY_2, pie, configuration);
            }
        });
    };
    BarLinePie.prototype.getConditionFormatColor = function (column, value, configuration, row) {
        var _this = this;
        var result = undefined;
        configuration.conditionalsFormatting = configuration.conditionalsFormatting || [];
        configuration
            .conditionalsFormatting
            .filter(function (data) {
            return data.field && column && data.field.toLowerCase() === column.toLowerCase();
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                result = data.color.value;
            }
        });
        return result;
    };
    BarLinePie.prototype.addSeriePie = function (name, values, pie, configuration) {
        pie = pie || {};
        if (this.regExpDate.test(name)) {
            name = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(name, 'data#dd/MM/yyyy', 2);
        }
        else {
            if (this.regExpDateTime.test(name)) {
                name = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(name, 'datahora#dd/MM/yyyy HH:mm', 2);
            }
        }
        this.series.push({
            name: name,
            data: values,
            type: 'pie',
            yAxis: 1,
            dataLabels: {
                formatter: function () {
                    var mask = pie && pie.format ? pie.format : configuration.format;
                    return '<b>' + __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, mask, pie.formatPrecision || configuration.formatPrecision) + '</b>';
                },
                style: {
                    fontSize: this.getFontSize() + "px"
                },
                enabled: pie.showValues
            }, center: [this.qtdPie + '0%', '20%'], size: '40%',
            showInLegend: pie.showLegend,
        });
        this.qtdPie += 3;
    };
    BarLinePie.prototype.getPieLabelPosition = function (name, pie) {
        var position = undefined;
        if (pie.data) {
            pie.data.columns
                .forEach(function (data, index) {
                if (name && name.toLowerCase() === data.toLowerCase()) {
                    position = index;
                }
            });
        }
        return position;
    };
    BarLinePie.prototype.getPositionPie = function (column, pie) {
        var position = undefined;
        if (pie.data) {
            pie.data
                .columns
                .forEach(function (data, index) {
                if (column && column.toLowerCase() === data.toLowerCase()) {
                    position = index;
                }
            });
        }
        return position;
    };
    BarLinePie.prototype.getConditionFormatLabelColorPie = function (value, pie, row) {
        var _this = this;
        var color = undefined;
        pie.conditionalsFormatting = pie.conditionalsFormatting || [];
        pie.conditionalsFormatting
            .filter(function (data) {
            return data.field == pie.labelField.name;
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                color = data.color.value;
            }
        });
        return color;
    };
    BarLinePie.prototype.getConditionFormatDataColorPie = function (value, pie, row) {
        var _this = this;
        var color = undefined;
        pie.conditionalsFormatting = pie.conditionalsFormatting || [];
        pie.conditionalsFormatting
            .filter(function (data) {
            return data.field == pie.dataSeries.name;
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                color = data.color.value;
            }
        });
        return color;
    };
    BarLinePie.prototype.addCategorie = function (name) {
        this.categories.push(name);
    };
    BarLinePie.prototype.addSerieColumn = function (name, values, color) {
        this.titleY = name;
        this.series.push({
            name: name, data: values, color: color, type: 'column', yAxis: 1, dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                }
            }
        });
    };
    BarLinePie.prototype.addSerieSpline = function (name, values, color) {
        this.series.push({
            name: name,
            data: values,
            color: color,
            type: 'spline',
            yAxis: 1,
            dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                }
            }
        });
    };
    BarLinePie.prototype.getHighChartConfiguration = function (configuration) {
        return {
            chart: {
                zoomType: false,
                className: 'responsive-chart',
                spacingBottom: 50,
                spacingTop: 20
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: configuration ? configuration.showLegendAxisY : true,
                itemStyle: {
                    fontSize: this.getFontSize() + "px"
                }
            },
            xAxis: {
                categories: this.categories,
                title: {
                    text: configuration && configuration.axisX ? configuration.axisX.label : 'Titulo do eixo horizontal'
                },
                labels: {
                    formatter: function () {
                        var mask = configuration.axisX && configuration.axisX.format ? configuration.axisX.format : configuration.format;
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, mask, configuration.axisX.formatPrecision);
                    },
                    style: {
                        fontSize: this.getFontSize() + "px"
                    }
                }
            },
            tooltip: {
                enabled: configuration ? !configuration.dataLabelAxisY : false,
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                }
            },
            yAxis: [
                {
                    gridLineWidth: configuration ? configuration.showGridLineWidthAxisY ? 1 : 0 : 1,
                    title: {
                        text: ''
                    },
                    opposite: true
                },
                {
                    gridLineWidth: configuration ? configuration.showGridLineWidthAxisY ? 1 : 0 : 1,
                    title: {
                        text: configuration ? configuration.axisY.label : this.titleY,
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    },
                    labels: {
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, configuration.format, configuration.formatPrecision);
                        },
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    }
                }
            ],
            series: this.series,
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                        }
                    }
                },
                spline: {
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                        }
                    }
                }, pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: configuration.showValues ? true : false
                    },
                    showInLegend: configuration.showLegend
                }
            }
        };
    };
    return BarLinePie;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BarLine = /** @class */ (function (_super) {
    __extends(BarLine, _super);
    function BarLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarLine.prototype.onInit = function () {
        this.categories = new Array();
        this.series = new Array();
    };
    BarLine.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        var indexAxisX = this.getPosition(configuration.axisX.name);
        var indexColumnAxisY = this.getPosition(configuration.columnAxisY.name);
        var seriesColumnAxisY = [];
        recordset
            .rows
            .forEach(function (row) {
            var categorieValue = row[indexAxisX];
            categorieValue = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(categorieValue, configuration.axisX.format, configuration.axisX.formatPrecision);
            _this.addCategorie(categorieValue);
            var value = row[indexColumnAxisY];
            var color = _this.getConditionFormatColor(configuration.columnAxisY.name, value, configuration, row) || _this.getConditionFormatColor(configuration.axisX.name, row[indexAxisX], configuration, row);
            if (color) {
                seriesColumnAxisY.push({ y: Number(value), color: color });
            }
            else {
                seriesColumnAxisY.push(Number(value));
            }
        });
        this.addSerieColumn(configuration.columnAxisY.label, seriesColumnAxisY, configuration.columnAxisY.color.value);
        configuration.lineAxisY.forEach(function (axisY) {
            var indexLineAxisY = _this.getPosition(axisY.name);
            var seriesLineAxisY = [];
            recordset
                .rows
                .forEach(function (row) {
                seriesLineAxisY.push(Number(row[indexLineAxisY]));
            });
            var color = axisY.color && axisY.color.value ? axisY.color.value : '#ff0000';
            _this.addSerieSpline(axisY.name, seriesLineAxisY, color);
        });
    };
    BarLine.prototype.getConditionFormatColor = function (column, value, configuration, row) {
        var _this = this;
        var result = undefined;
        configuration
            .conditionalsFormatting
            .filter(function (data) {
            return column && data.field.toLowerCase() === column.toLowerCase();
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                result = data.color.value;
            }
        });
        return result;
    };
    BarLine.prototype.addCategorie = function (name) {
        this.categories.push(name);
    };
    BarLine.prototype.addSerieColumn = function (name, values, color) {
        this.titleY = name;
        this.series.push({ name: name, data: values, color: color, type: 'column', yAxis: 1, dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                }
            } });
    };
    BarLine.prototype.addSerieSpline = function (name, values, color) {
        this.series.push({ name: name, data: values, color: color, type: 'spline', yAxis: 1, dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                }
            } });
    };
    BarLine.prototype.getHighChartConfiguration = function (configuration) {
        return {
            chart: {
                zoomType: false,
                className: 'responsive-chart',
                spacingBottom: 50,
                spacingTop: 20
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: configuration ? configuration.showLegendAxisY : true,
                itemStyle: {
                    fontSize: this.getFontSize() + "px"
                }
            },
            xAxis: [
                {
                    categories: this.categories,
                    title: {
                        text: configuration && configuration.axisX ? configuration.axisX.label : 'Titulo eixo horizontal'
                    },
                    labels: {
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    }
                }
            ],
            tooltip: {
                enabled: configuration ? !configuration.dataLabelAxisY : false,
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, this.format, this.precision);
                }
            },
            yAxis: [
                {
                    gridLineWidth: configuration ? configuration.showGridLineWidthAxisY ? 1 : 0 : 1,
                    title: {
                        text: ''
                    },
                    opposite: true
                },
                {
                    gridLineWidth: configuration ? configuration.showGridLineWidthAxisY ? 1 : 0 : 1,
                    title: {
                        text: configuration ? configuration.columnAxisY.label : this.titleY,
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    },
                    labels: {
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, this.format, this.precision);
                        },
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    }
                }
            ],
            series: this.series,
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.precision);
                        }
                    }
                },
                spline: {
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.precision);
                        }
                    }
                }
            }
        };
    };
    return BarLine;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.onInit = function () {
        this.categories = new Array();
        this.series = new Array();
    };
    Bar.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        recordset.rows.forEach(function (row) {
            var categorieValue = row[_this.getPosition(configuration.axisX.name)];
            _this.addCategorie(categorieValue);
        });
        var indexAxisX = this.getPosition(configuration.axisX.name);
        if (configuration.dynamicColumns) {
            configuration.axisY = [];
            this.recordset.columns
                .filter(function (column) { return configuration.axisX.name != column; })
                .forEach(function (column) { return configuration.axisY.push({ name: column, label: column }); });
        }
        configuration.axisY.forEach(function (axisY) {
            if (axisY && axisY.name) {
                var indexAxisY_1 = _this.getPosition(axisY.name), values_1 = [];
                recordset.rows.forEach(function (row, index) {
                    var value = row[indexAxisY_1];
                    var color = _this.getConditionFormatColor(axisY.name, value, configuration, row) || _this.getConditionFormatColor(configuration.axisX.name, row[indexAxisX], configuration, row);
                    if (color) {
                        values_1.push({ y: Number(value), color: color });
                    }
                    else {
                        values_1.push(Number(value));
                    }
                });
                var color = axisY.color && axisY.color.value ? axisY.color.value : null;
                _this.addSerie(axisY.label ? axisY.label : axisY.name, values_1, color);
            }
        });
    };
    Bar.prototype.getConditionFormatColor = function (column, value, configuration, row) {
        var _this = this;
        var result = undefined;
        configuration.conditionalsFormatting = configuration.conditionalsFormatting || [];
        configuration
            .conditionalsFormatting
            .filter(function (data) {
            return data.field && data.field.toLowerCase() === column.toLowerCase();
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                result = data.color.value;
            }
        });
        return result;
    };
    Bar.prototype.getHighChartConfiguration = function (configuration) {
        console.log(configuration);
        var stacking = (!configuration.stacking || configuration.stacking === 'DISABLE') ? null : configuration.stacking.toLowerCase();
        return {
            colors: configuration.dynamicColumns && configuration.colorPalette ? __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorByPaletteKey(configuration.colorPalette, configuration.invertedColorPalette) : __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorsPaletteDefault(configuration.invertedColorPalette),
            chart: {
                type: 'column',
                zoomType: false,
                spacingBottom: 50,
                spacingTop: 20
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            title: {
                text: configuration.title && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            xAxis: {
                categories: this.categories,
                title: {
                    text: configuration ? configuration.axisX.label : 'Titulo do eixo horizontal'
                },
                labels: {
                    formatter: function () {
                        var mask = configuration.axisX && configuration.axisX.format ? configuration.axisX.format : configuration.format;
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, mask, configuration.axisX.formatPrecision);
                    },
                    style: {
                        fontSize: this.getFontSize() + "px"
                    }
                }
            },
            legend: {
                enabled: configuration ? configuration.showLegendAxisY : true,
                itemStyle: {
                    fontSize: this.getFontSize() + "px"
                }
            },
            tooltip: {
                enabled: configuration ? !configuration.dataLabelAxisY : false,
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                }
            },
            zAxis: {
                labels: {
                    style: {
                        fontSize: this.getFontSize() + "px"
                    }
                }
            },
            yAxis: {
                gridLineWidth: configuration ? configuration.showGridLineWidthAxisY ? 1 : 0 : 1,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, configuration.format, configuration.formatPrecision);
                    },
                    style: {
                        fontSize: this.getFontSize() + "px"
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: this.series,
            plotOptions: {
                column: {
                    stacking: stacking,
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                        }
                    }
                }
            }
        };
    };
    Bar.prototype.addCategorie = function (name) {
        this.categories.push(name);
    };
    Bar.prototype.addSerie = function (name, values, color) {
        var serie = {
            name: name,
            data: values,
            color: color,
            dataLabels: {}
        };
        if (!color) {
            delete serie.color;
        }
        this.series.push(serie);
    };
    return Bar;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseHighChartMaps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__base_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);



var BaseHighChartMaps = /** @class */ (function () {
    function BaseHighChartMaps(element, configuration) {
        this.element = element;
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_1__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseHighChartMaps.prototype.render = function () {
        this.onInit();
        window.Highcharts.mapChart(this.element, this.getHighChartConfiguration(this.configuration));
        this.handlingLastUpdate(this.element, this.configuration);
    };
    ;
    BaseHighChartMaps.prototype.handlingLastUpdate = function (element, configuration) {
        if (!configuration.showlastUpdate || !configuration.lastUpdate)
            return;
        var container = element.getElementsByClassName('highcharts-container');
        if (container && container[0]) {
            var template = "\n            <div class=\"board-last-update\">\n            Atualizado " + __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(configuration.lastUpdate, 'datahora#dd/MM/yyyy HH:mm') + "\n            </div>\n        ";
            var child = document.createElement('div');
            child.className = 'last-update-container';
            child.innerHTML = template;
            container[0].appendChild(child);
        }
    };
    BaseHighChartMaps.prototype.getFontSize = function () {
        switch (this.configuration.boardFontSize) {
            case 'SMALL':
                return 11;
            case 'MEDIUM':
                return 18;
            case 'LARGE':
                return 25;
            default:
                return 11;
        }
    };
    return BaseHighChartMaps;
}());



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeV1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GaugeV1 = /** @class */ (function (_super) {
    __extends(GaugeV1, _super);
    function GaugeV1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minimumValue = 0;
        _this.maximumValue = 0;
        return _this;
    }
    GaugeV1.prototype.onInit = function () {
        this.series = new Array();
    };
    GaugeV1.prototype.processRecordSet = function (recordset, configuration) {
        if (configuration.fixedValue) {
            this.minimumValue = configuration.minimumValue.value;
            this.maximumValue = configuration.maximumValue.value;
        }
        else {
            this.minimumValue = this.getData(configuration.minimumValue.name, recordset);
            this.maximumValue = this.getData(configuration.maximumValue.name, recordset);
        }
        this.addSerie(configuration.currentValue.label, this.getData(configuration.currentValue.name, recordset), configuration);
    };
    GaugeV1.prototype.getData = function (name, recordset) {
        var index = recordset.columns.indexOf(name);
        recordset.rows = recordset.rows || [];
        return recordset.rows[0] && recordset.rows[0][index] ? recordset.rows[0][index] : 0;
    };
    GaugeV1.prototype.addSerie = function (name, value, configuration) {
        this.series.push({
            name: name,
            data: [parseFloat(value)],
            dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                },
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.currentValue.format, configuration.currentValue.formatPrecision);
                }
            }
        });
    };
    GaugeV1.prototype.getHighChartConfiguration = function (configuration) {
        var _this = this;
        return {
            chart: {
                type: 'solidgauge',
                spacingBottom: 50,
                spacingTop: 20
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            tooltip: {
                enabled: false
            },
            yAxis: {
                stops: [
                    [0.1, configuration.beginningColor ? configuration.beginningColor : '#5cb85c'],
                    [0.5, configuration.middleColor ? configuration.middleColor : '#f0ad4e'],
                    [0.9, configuration.endColor ? configuration.endColor : '#d9534f'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 20,
                    style: {
                        fontSize: this.getFontSize() + "px"
                    },
                    formatter: function () {
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, configuration.currentValue.format, configuration.currentValue.formatPrecision);
                    }
                },
                min: this.minimumValue,
                max: this.maximumValue,
                tickPositioner: function () {
                    return [_this.minimumValue, _this.maximumValue];
                }
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: this.series
        };
    };
    return GaugeV1;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeV2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GaugeV2 = /** @class */ (function (_super) {
    __extends(GaugeV2, _super);
    function GaugeV2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minimumValue = 0;
        _this.maximumValue = 0;
        return _this;
    }
    GaugeV2.prototype.onInit = function () {
        this.series = new Array();
    };
    GaugeV2.prototype.processRecordSet = function (recordset, configuration) {
        if (configuration.fixedValue) {
            this.minimumValue = configuration.minimumValue.value;
            this.maximumValue = configuration.maximumValue.value;
        }
        else {
            this.minimumValue = this.getData(configuration.minimumValue.name, recordset);
            this.maximumValue = this.getData(configuration.maximumValue.name, recordset);
        }
        this.addSerie(configuration.currentValue.label, this.getData(configuration.currentValue.name, recordset), configuration);
    };
    GaugeV2.prototype.getData = function (name, recordset) {
        var index = recordset.columns.indexOf(name);
        recordset.rows = recordset.rows || [];
        return recordset.rows[0] && recordset.rows[0][index] ? recordset.rows[0][index] : 0;
    };
    GaugeV2.prototype.addSerie = function (name, value, configuration) {
        this.series.push({
            name: name,
            data: [parseFloat(value)],
            dataLabels: {
                style: {
                    fontSize: this.getFontSize() + "px"
                },
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.currentValue.format, configuration.currentValue.formatPrecision);
                }
            }
        });
    };
    GaugeV2.prototype.getHighChartConfiguration = function (configuration) {
        return {
            chart: {
                type: 'gauge',
                plotBackgroundColor: 'transparent',
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                backgroundColor: 'transparent',
                plotShadow: false,
                spacingLeft: 0,
                spacingRight: 0,
                spacingBottom: 50,
                spacingTop: 20
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                        outerRadius: '109%'
                    }]
            },
            yAxis: {
                min: this.minimumValue,
                max: this.maximumValue,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#000',
                tickPixelInterval: 30,
                tickWidth: 1,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#000',
                labels: {
                    step: 2,
                    style: {
                        fontSize: this.getFontSize() + "px"
                    },
                    //   formatter: function () {
                    //     return CommonProvider.formatValue(this.value, configuration.currentValue.format, configuration.currentValue.formatPrecision)
                    //   },
                    rotation: 'auto'
                },
                title: {
                    text: ''
                },
                plotBands: Object.assign([], configuration.bands) || [{ from: 0, to: 40, color: '#5cb85c' }, { from: 40, to: 70, color: '#f0ad4e' }, { from: 70, to: 100, color: '#d9534f' }]
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: this.series
        };
    };
    return GaugeV2;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.onInit = function () {
        this.categories = new Array();
        this.series = new Array();
    };
    Line.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        recordset.rows.forEach(function (row) {
            var categorieValue = row[_this.getPosition(configuration.axisX.name)];
            _this.addCategorie(categorieValue);
        });
        if (configuration.dynamicColumns) {
            configuration.axisY = [];
            this.recordset.columns
                .filter(function (column) { return configuration.axisX.name != column; })
                .forEach(function (column) { return configuration.axisY.push({ name: column, label: column }); });
        }
        configuration.axisY.forEach(function (axisY) {
            if (axisY && axisY.name) {
                var indexAxisY_1 = _this.getPosition(axisY.name), values_1 = [], colorAxisY_1 = undefined;
                recordset.rows.forEach(function (row, index) {
                    var value = row[indexAxisY_1];
                    values_1.push(Number(value));
                    if (index == recordset.rows.length - 1) {
                        colorAxisY_1 = _this.getConditionFormatDataColor(axisY.name, row[indexAxisY_1], configuration, row);
                    }
                });
                var color = colorAxisY_1 ? colorAxisY_1 : axisY.color ? axisY.color.value : undefined;
                _this.addSerie(axisY.label ? axisY.label : axisY.name, values_1, color);
            }
        });
    };
    Line.prototype.getConditionFormatDataColor = function (name, value, configuration, row) {
        var _this = this;
        var color = undefined;
        configuration
            .conditionalsFormatting
            .filter(function (data) {
            return data.field == name;
        })
            .forEach(function (data) {
            if (data.compareOtherField) {
                data.value = row[_this.getPosition(data.fieldCompare)];
            }
            if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value)) {
                color = data.color.value;
            }
        });
        return color;
    };
    Line.prototype.getHighChartConfiguration = function (configuration) {
        return {
            colors: configuration.dynamicColumns && configuration.colorPalette ? __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorByPaletteKey(configuration.colorPalette, configuration.invertedColorPalette) : __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorsPaletteDefault(configuration.invertedColorPalette),
            chart: {
                spacingBottom: 50,
                spacingTop: 20
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + "px"
                }
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: this.categories,
                title: {
                    text: configuration ? configuration.axisX.label : 'Titulo do eixo horizontal'
                },
                labels: {
                    formatter: function () {
                        var mask = configuration.axisX && configuration.axisX.format ? configuration.axisX.format : configuration.format;
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, mask, configuration.axisX.formatPrecision);
                    },
                    style: {
                        fontSize: this.getFontSize() + "px"
                    },
                }
            },
            legend: {
                itemStyle: {
                    fontSize: this.getFontSize() + "px"
                }
            },
            yAxis: {
                gridLineWidth: configuration.showGridLineWidthAxisY ? 1 : 0,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.value, configuration.format, configuration.formatPrecision);
                    },
                    style: {
                        fontSize: this.getFontSize() + "px"
                    }
                }
            },
            tooltip: {
                enabled: configuration ? !configuration.dataLabelAxisY : false,
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                }
            },
            exporting: {
                enabled: false
            },
            series: this.series,
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: configuration ? configuration.dataLabelAxisY : true,
                        formatter: function () {
                            return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                        },
                        style: {
                            fontSize: this.getFontSize() + "px"
                        }
                    },
                    showInLegend: configuration ? configuration.showLegendAxisY : true
                }
            },
            credits: {
                enabled: false
            }
        };
    };
    Line.prototype.addCategorie = function (name) {
        this.categories.push(name);
    };
    Line.prototype.addSerie = function (name, values, color) {
        this.series.push({
            name: name,
            data: values,
            color: color,
            dataLabels: {}
        });
    };
    return Line;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_maps__ = __webpack_require__(44);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Maps = /** @class */ (function (_super) {
    __extends(Maps, _super);
    function Maps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maps.prototype.onInit = function () {
        this.series = new Array();
    };
    Maps.prototype.getHighChartConfiguration = function (configuration) {
        return configuration;
    };
    return Maps;
}(__WEBPACK_IMPORTED_MODULE_0__base_maps__["a" /* BaseHighChartMaps */]));



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.prototype.onInit = function () {
        this.serie = {
            data: []
        };
    };
    Pie.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        if (configuration.dataSeries && configuration.dataSeries.name && configuration.labelField && configuration.labelField.name) {
            var indexDataSeries_1 = this.getPosition(configuration.dataSeries.name);
            var indexLabelField_1 = this.getPosition(configuration.labelField.name);
            if (recordset) {
                recordset.rows = recordset.rows || [];
            }
            recordset.rows.forEach(function (row) {
                _this.addSerie(row[indexLabelField_1], row[indexDataSeries_1], _this.getConditionFormatLabelColor(configuration, row[indexLabelField_1], row) || _this.getConditionFormatLabelColor(configuration, row[indexDataSeries_1], row), configuration);
            });
        }
    };
    Pie.prototype.getHighChartConfiguration = function (configuration) {
        return {
            colors: configuration.colorPalette ? __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorByPaletteKey(configuration.colorPalette, configuration.invertedColorPalette) : __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].getColorsPaletteDefault(configuration.invertedColorPalette),
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                zoomType: false,
                spacingBottom: 50,
                spacingTop: 20
            },
            lang: {
                noData: "Sem dados para apresentar"
            },
            title: {
                text: configuration && configuration.title ? configuration.title : '',
                style: {
                    fontSize: (this.getFontSize() + 7) + 'px'
                }
            },
            legend: {
                itemStyle: {
                    fontSize: this.getFontSize() + 'px'
                }
            },
            tooltip: {
                formatter: function () {
                    return __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision);
                },
                enabled: !configuration.showValues ? true : false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: configuration.showValues ? true : false,
                        formatter: function () {
                            return '<b>' + __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(this.y, configuration.format, configuration.formatPrecision) + '</b>';
                        },
                    },
                    showInLegend: configuration.showLegend
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [this.serie]
        };
    };
    Pie.prototype.addSerie = function (name, value, color, configuration) {
        var categorieValue = __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(name, configuration.labelField.format, configuration.labelField.formatPrecision);
        this.serie.data.push({ name: categorieValue, y: Number(value), color: color, dataLabels: {
                style: {
                    fontSize: this.getFontSize() + 'px'
                }
            } });
    };
    Pie.prototype.getConditionFormatLabelColor = function (configuration, value, row) {
        var _this = this;
        var color = undefined;
        if (configuration.hasOwnProperty('conditionalsFormatting')) {
            configuration.conditionalsFormatting.forEach(function (conditionalsFormatting) {
                if (conditionalsFormatting.compareOtherField) {
                    conditionalsFormatting.value = row[_this.getPosition(conditionalsFormatting.fieldCompare)];
                }
                if (__WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].isConditionalFormatting(conditionalsFormatting.condition, value, conditionalsFormatting.value)) {
                    color = conditionalsFormatting.color.value;
                }
            });
        }
        return color;
    };
    return Pie;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseHighChart */]));



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseIframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);

var BaseIframe = /** @class */ (function () {
    function BaseIframe(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseIframe.prototype.render = function () {
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration);
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    return BaseIframe;
}());



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iframe_style_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iframe_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__iframe_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IframeOne = /** @class */ (function (_super) {
    __extends(IframeOne, _super);
    function IframeOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IframeOne.prototype.onInit = function () {
        this.rows = [];
        this.columns = [];
    };
    IframeOne.prototype.processRecordSet = function (recordset, configuration) {
    };
    IframeOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n            <div class=\"iframe-container\">\n                <div class=\"iframe-header\">\n                    <h3>" + (configuration.title || '') + "</h3>\n                </div>\n                <div class=\"iframe-body\">\n                    " + configuration.code + "\n                </div>\n            </div>\n        ";
        element.innerHTML = template;
    };
    return IframeOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseIframe */]));



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);

var BaseImage = /** @class */ (function () {
    function BaseImage(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseImage.prototype.render = function () {
        this.onInit();
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    return BaseImage;
}());



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_style_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__image_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ImageOne = /** @class */ (function (_super) {
    __extends(ImageOne, _super);
    function ImageOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageOne.prototype.onInit = function () {
    };
    ImageOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n            <div class=\"image-container\">\n                <img src=\"" + configuration.url + "\"/>\n            </div>\n        ";
        element.innerHTML = template;
    };
    return ImageOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseImage */]));



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDashboard", function() { return SimpleDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_exporting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_exporting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_exporting__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_solid_gauge__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_solid_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_heatmap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_heatmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_heatmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__highcharts__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cards__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feed__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__youtube__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__iframe__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__text__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__image__ = __webpack_require__(15);














__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_exporting__(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map__(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_heatmap__(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
window.Highcharts = window.Highcharts || __WEBPACK_IMPORTED_MODULE_0_highcharts__;
window.Highcharts.theme = {
    colors: [
        "rgb(244, 67, 54)",
        "rgb(233, 30, 99)",
        "rgb(156, 39, 176)",
        "rgb(103, 58, 183)",
        "rgb(63, 81, 181)",
        "rgb(33, 150, 243)",
        "rgb(3, 169, 244)",
        "rgb(0, 188, 212)",
        "rgb(0, 150, 136)",
        "rgb(76, 175, 80)",
        "rgb(139, 195, 74)",
        "rgb(205, 220, 57)",
        "rgb(255, 235, 59)",
        "rgb(255, 193, 7)",
        "rgb(255, 152, 0)",
        "rgb(255, 87, 34)",
        "rgb(121, 85, 72)",
        "rgb(158, 158, 158)",
        "rgb(96, 125, 139)"
    ]
};
window.Highcharts.setOptions(window.Highcharts.theme);
window.mf = window.mf || {
    Chart: {
        Bar: __WEBPACK_IMPORTED_MODULE_6__highcharts__["a" /* Bar */],
        Line: __WEBPACK_IMPORTED_MODULE_6__highcharts__["b" /* Line */],
        Pie: __WEBPACK_IMPORTED_MODULE_6__highcharts__["c" /* Pie */],
        GaugeV1: __WEBPACK_IMPORTED_MODULE_6__highcharts__["d" /* GaugeV1 */],
        GaugeV2: __WEBPACK_IMPORTED_MODULE_6__highcharts__["e" /* GaugeV2 */],
        BarLine: __WEBPACK_IMPORTED_MODULE_6__highcharts__["f" /* BarLine */],
        BarLinePie: __WEBPACK_IMPORTED_MODULE_6__highcharts__["g" /* BarLinePie */],
        Maps: __WEBPACK_IMPORTED_MODULE_6__highcharts__["h" /* Maps */]
    },
    Card: {
        CardOne: __WEBPACK_IMPORTED_MODULE_7__cards__["a" /* CardOne */],
        CardTwo: __WEBPACK_IMPORTED_MODULE_7__cards__["b" /* CardTwo */],
        CardThree: __WEBPACK_IMPORTED_MODULE_7__cards__["c" /* CardThree */],
        CardFive: __WEBPACK_IMPORTED_MODULE_7__cards__["d" /* CardFive */],
        CardFour: __WEBPACK_IMPORTED_MODULE_7__cards__["e" /* CardFour */]
    },
    Feed: {
        FeedOne: __WEBPACK_IMPORTED_MODULE_8__feed__["a" /* FeedOne */]
    },
    Table: {
        TableOne: __WEBPACK_IMPORTED_MODULE_9__table__["a" /* TableOne */]
    },
    Youtube: {
        YoutubeOne: __WEBPACK_IMPORTED_MODULE_10__youtube__["a" /* YoutubeOne */]
    },
    Iframe: {
        IframeOne: __WEBPACK_IMPORTED_MODULE_11__iframe__["a" /* IframeOne */]
    },
    Text: {
        TextOne: __WEBPACK_IMPORTED_MODULE_12__text__["a" /* TextOne */]
    },
    Image: {
        ImageOne: __WEBPACK_IMPORTED_MODULE_13__image__["a" /* ImageOne */]
    }
};
var SimpleDashboard;
(function (SimpleDashboard) {
    function create() {
        return window.mf;
    }
    SimpleDashboard.create = create;
})(SimpleDashboard || (SimpleDashboard = {}));


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_providers__ = __webpack_require__(0);


var BaseTable = /** @class */ (function () {
    function BaseTable(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseTable.prototype.handlingLastUpdate = function (configuration) {
        if (!configuration.showlastUpdate || !configuration.lastUpdate)
            return '';
        return "\n            <div class=\"board-card-last-update\">\n                Atualizado " + __WEBPACK_IMPORTED_MODULE_1__common_providers__["a" /* CommonProvider */].formatValue(configuration.lastUpdate, 'datahora#dd/MM/yyyy HH:mm') + "\n            </div>\n        ";
    };
    BaseTable.prototype.render = function () {
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration);
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    return BaseTable;
}());



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_style_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__table_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_providers__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TableOne = /** @class */ (function (_super) {
    __extends(TableOne, _super);
    function TableOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableOne.prototype.onInit = function () {
        this.rows = [];
        this.columns = [];
        this.STRIPED_COLOR = '#F5F5F5';
    };
    TableOne.prototype.setStripedColor = function (color) {
        this.STRIPED_COLOR = color;
        _super.prototype.render.call(this);
    };
    TableOne.prototype.processRecordSet = function (recordset, configuration) {
        var _this = this;
        if (configuration.dynamicColumns && recordset && recordset.columns) {
            this.columns = recordset.columns.map(function (column) {
                return { name: column, label: column, operation: '' };
            });
        }
        else {
            configuration
                .columns
                .forEach(function (column, index) { return _this.columns[index] = column; });
        }
        this.columns = this.columns.sort(function (a, b) { return a.sequence - b.sequence; });
        this.rows = configuration.data ? configuration.data.rows : [];
    };
    TableOne.prototype.getTableHeader = function (recordset, configuration) {
        var _this = this;
        return this.columns.reduce(function (prev, next, index) {
            var columnType = configuration.data.types && configuration.data.types.length > 0 ?
                configuration.data.types[_this.getColumnIndex(next, recordset)] : 'String';
            return prev += "\n                <th style=\"" + (columnType == 'Number' ? 'text-align: right;' : 'text-align: left;') + "\">\n                    <strong>\n                        " + (next.label || next.name || '') + "\n                    </strong>\n                </th>\n            ";
        }, ' ');
    };
    TableOne.prototype.getColumnIndex = function (column, recordset) {
        var indexColumn = -1;
        recordset.columns.forEach(function (columnData, index) {
            if (column && columnData == column.name)
                indexColumn = index;
        });
        return indexColumn;
    };
    TableOne.prototype.getColumnConditionalsFormatting = function (nextRow, nextColumn, recordset, configuration) {
        var _this = this;
        var toReturn = '';
        configuration.conditionalsFormatting = configuration.conditionalsFormatting || [];
        configuration.conditionalsFormatting.filter(function (data) {
            return data && nextColumn && data.field == nextColumn.name && data.typeColor == 'COLUMN';
        }).forEach(function (data) {
            var value = nextRow[_this.getColumnIndex(nextColumn, recordset)];
            if (data.compareOtherField) {
                data.value = nextRow[_this.getColumnIndex({ name: data.fieldCompare }, recordset)];
            }
            if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value) && data.color && data.color.value) {
                toReturn += 'background-color: ' + data.color.value + ';';
            }
        });
        var columnType = configuration.data.types && configuration.data.types.length > 0 ?
            configuration.data.types[this.getColumnIndex(nextColumn, recordset)] : 'String';
        if (columnType == 'Number') {
            toReturn += 'text-align: right;';
        }
        return toReturn;
    };
    TableOne.prototype.getRowConditionalsFormatting = function (nextRow, indexRow, recordset, configuration) {
        var _this = this;
        var toReturn = '';
        configuration.conditionalsFormatting = configuration.conditionalsFormatting || [];
        configuration.conditionalsFormatting.filter(function (data) {
            return data && data.typeColor == 'LINE';
        }).forEach(function (data) {
            var value = nextRow[_this.getColumnIndex({ name: data.field }, recordset)];
            if (data.compareOtherField) {
                data.value = nextRow[_this.getColumnIndex({ name: data.fieldCompare }, recordset)];
            }
            if (__WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].isConditionalFormatting(data.condition, value, data.value) && data.color && data.color.value) {
                toReturn += 'background-color: ' + data.color.value + ';';
            }
        });
        if (toReturn == '' && (indexRow % 2) == 0) {
            toReturn = 'background: ' + this.STRIPED_COLOR + ';';
        }
        return toReturn;
    };
    TableOne.prototype.getTableBody = function (recordset, configuration) {
        var _this = this;
        return this.rows.reduce(function (prevRow, nextRow, indexRow) {
            return prevRow += "\n                <tr>\n                    " + _this.columns.reduce(function (prevColumn, nextColumn, indexColumn) {
                return prevColumn += "\n                            <td style=\"" + _this.getRowConditionalsFormatting(nextRow, indexRow, recordset, configuration) + _this.getColumnConditionalsFormatting(nextRow, nextColumn, recordset, configuration) + "\">\n                                " + _this.formatValue(indexColumn, nextRow[_this.getColumnIndex(nextColumn, recordset)]) + "\n                            </td>\n                        ";
            }, ' ') + "\n                </tr>\n            ";
        }, ' ');
    };
    TableOne.prototype.getColumnSum = function (column, recordset) {
        var _this = this;
        return this.rows.reduce(function (prev, next) {
            return prev + Number(next[_this.getColumnIndex(column, recordset)]);
        }, 0);
    };
    TableOne.prototype.getColumnFooterByOperation = function (column, recordset) {
        switch (column.operation) {
            case 'SUM':
                return this.getColumnSum(column, recordset);
            case 'AVG':
                var value = this.getColumnSum(column, recordset) / this.rows.length;
                return value.toFixed(2);
            case 'COUNT':
                return this.rows.length;
        }
    };
    TableOne.prototype.getTableFooter = function (recordset, configuration) {
        var _this = this;
        return this.columns.reduce(function (prev, next, index) {
            var value = '';
            if (next.operation) {
                value = _this.getColumnFooterByOperation(next, recordset);
                value = _this.formatValue(index, value);
            }
            return prev += "\n                <td style=\"text-align: right;\">\n                    " + value + "\n                </td>\n            ";
        }, ' ');
    };
    TableOne.prototype.formatValue = function (index, value) {
        if (value || value == 0) {
            this.columns[index].format = this.columns[index].format || '';
            if (!(this.columns[index].formatPrecision >= 0)) {
                this.columns[index].formatPrecision = 2;
            }
            return __WEBPACK_IMPORTED_MODULE_2__common_providers__["a" /* CommonProvider */].formatValue(value, this.columns[index].format, this.columns[index].formatPrecision);
        }
        return '';
    };
    TableOne.prototype.handlingSmartGrid = function (element) {
        if (!window.$ || !window.$.prototype.smartGrid)
            return;
        window.$(element.getElementsByTagName('table')[0]).smartGrid({
            head: true,
            foot: this.hasColumnsOperation(),
            left: 1
        });
    };
    TableOne.prototype.hasColumnsOperation = function () {
        return this.columns.filter(function (column) { return column.operation; }).length > 0;
    };
    TableOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n        " + (configuration.title ? "\n            <h6 class=\"table-title\">" + configuration.title + "</h6>  \n        " : "") + "\n        <div class=\"table-responsive simple-dashboard-table\">\n            <div class=\"content\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                        " + this.getTableHeader(recordset, configuration) + "\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + this.getTableBody(recordset, configuration) + "\n                    </tbody>\n                    " + (this.hasColumnsOperation() ? "\n                    <tfoot>\n                        <tr>\n                        " + this.getTableFooter(recordset, configuration) + "\n                        </tr>\n                    </tfoot>\n                    " : "") + "\n                </table>\n            </div>\n            " + _super.prototype.handlingLastUpdate.call(this, configuration) + "\n        </div>\n        ";
        element.innerHTML = template;
        this.handlingSmartGrid(element);
    };
    return TableOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseTable */]));



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);

var BaseText = /** @class */ (function () {
    function BaseText(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseText.prototype.render = function () {
        this.onInit();
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    return BaseText;
}());



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_style_scss__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__text_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(57);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TextOne = /** @class */ (function (_super) {
    __extends(TextOne, _super);
    function TextOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextOne.prototype.onInit = function () {
    };
    TextOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n            <div class=\"text-container\">\n                " + configuration.text + "\n            </div>\n        ";
        element.innerHTML = template;
    };
    return TextOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseText */]));



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseYoutube; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_configuration__ = __webpack_require__(1);

var BaseYoutube = /** @class */ (function () {
    function BaseYoutube(element, recordset, configuration) {
        this.element = element;
        this.recordset = recordset;
        if (this.recordset) {
            this.recordset.columns = this.recordset.columns || [];
            this.recordset.rows = this.recordset.rows || [];
        }
        this.configuration = Object.assign({}, new __WEBPACK_IMPORTED_MODULE_0__common_configuration__["a" /* Configuration */](), configuration);
        this.render();
    }
    BaseYoutube.prototype.render = function () {
        this.onInit();
        this.processRecordSet(this.recordset, this.configuration);
        this.generateTemplate(this.element, this.recordset, this.configuration);
    };
    ;
    return BaseYoutube;
}());



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__youtube_style_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__youtube_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__youtube_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(59);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var YoutubeOne = /** @class */ (function (_super) {
    __extends(YoutubeOne, _super);
    function YoutubeOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeOne.prototype.onInit = function () {
        this.rows = [];
        this.columns = [];
        this.KEY_YOUTUBE_API = 'AIzaSyC7E4dZ4EneRmSzVMs2qhyJYGoTK49FCYM';
        this.YOUTUBE_INFO_API = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&key=' + this.KEY_YOUTUBE_API + '&id=';
    };
    YoutubeOne.prototype.processRecordSet = function (recordset, configuration) {
        this.VIDEO_ID = this.getParamsURL(configuration.url)['v'];
        var autoPlay = configuration.startAutomatically ? 1 : 0;
        var URL_IFRAME = 'https://www.youtube.com/embed/' + this.VIDEO_ID;
        this.URL_IFRAME = URL_IFRAME + '?rel=0&amp;autoplay=' + autoPlay;
    };
    YoutubeOne.prototype.getParamsURL = function (url) {
        var vars = {}, hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    };
    YoutubeOne.prototype.generateTemplate = function (element, recordset, configuration) {
        var template = "\n            <div class=\"youtube-container\">\n                <iframe src=\"" + this.URL_IFRAME + "\" allowfullscreen frameborder=\"0\"></iframe>\n            </div>\n        ";
        element.innerHTML = template;
    };
    return YoutubeOne;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseYoutube */]));



/***/ })
/******/ ]);