!function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){"use strict";var i=function(){function t(t){this.selector=t,this.pluginName="boomzoom",this.getElement()}return t.prototype.getElement=function(){return this.element=document.querySelectorAll(this.selector),this.elementLength},t.prototype.zoom=function(t){for(var e=0,i=this.element.length,r=t.restore;e<i;e++){var o=this.element[e];r&&this.restoreSizes(o);var n=this.calculateSizes(o,t.zoom);this.setSizes(o,{width:n.width,height:n.height})}return this.element},t.prototype.restore=function(){for(var t=0,e=this.element.length;t<e;t++)this.restoreSizes(this.element[t]);return this.element},t.prototype.restoreSizes=function(t){this.setSizes(t,{width:"",height:""})},t.prototype.setSizes=function(t,e){t.style.width=e.width?e.width+"px":"",t.style.height=e.height?e.height+"px":""},t.prototype.calculateSizes=function(t,e){return{width:t.offsetWidth*e,height:t.offsetHeight*e}},t.prototype.setPluginData=function(t){t.setAttribute(this.getPluginDataAttribute(),"true")},t.prototype.removePluginData=function(t){t.removeAttribute(this.getPluginDataAttribute())},t.prototype.isPluginData=function(){var t;return t=!!this.element[0].getAttribute(this.getPluginDataAttribute())},t.prototype.getPluginDataAttribute=function(){return"data-"+this.pluginName},t}();e.BoomZoom=i}]);
//# sourceMappingURL=boomzoom.js.map