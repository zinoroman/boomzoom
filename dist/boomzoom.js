!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){"use strict";var i=function(){function t(t){this.selector=t,this.pluginName="boomzoom",this.getElement()}return t.prototype.getElement=function(){return this.element=document.querySelectorAll(this.selector),this.elementLength=this.element.length,this.elementLength},t.prototype.zoom=function(t){var e=0;for(this.isRestoreNeed(t.restore)&&this.restore(),e;e<this.elementLength;e++){var i=this.element[e],n=this.calculateElementNewSizes(i,t.zoom);this.setElementSizes(i,{width:n.width+"px",height:n.height+"px"}),this.setPluginData(i)}return this.element},t.prototype.restore=function(){var t=0;for(t;t<this.elementLength;t++){var e=this.element[t];this.setElementSizes(e,{width:"",height:""}),this.removePluginData(e)}return this.element},t.prototype.isRestoreNeed=function(t){return!(!t||!this.isPluginData())},t.prototype.setElementSizes=function(t,e){return t.style.width=e.width,t.style.height=e.height,t},t.prototype.calculateElementNewSizes=function(t,e){return{width:t.offsetWidth*e,height:t.offsetHeight*e}},t.prototype.setPluginData=function(t){t.setAttribute("data-"+this.pluginName,"true")},t.prototype.removePluginData=function(t){t.removeAttribute("data-"+this.pluginName)},t.prototype.isPluginData=function(){return!!this.element[0].getAttribute("data-"+this.pluginName)},t}();e.BoomZoom=i}]);
//# sourceMappingURL=boomzoom.js.map