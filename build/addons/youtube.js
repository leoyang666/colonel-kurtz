module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(19),i=n(1);n(41);var s={defaultContent:function(){return{video_id:""}},render:function(){return i.createElement(o,r({onChange:this.setContent},this.state.content))}};t.exports=s},1:function(t){t.exports=require("react")},4:function(t,e,n){"use strict";var r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),s=i.createClass({displayName:"Field",getDefaultProps:function(){return{type:"text"}},render:function(){var t=this.props,e=t.label,n=t.name,s=t.type,a=r(t,["label","name","type"]);return i.createElement("div",{className:"col-img-field"},i.createElement("label",{className:"col-img-label",htmlFor:n||this.props.id},e),i.createElement("input",o({className:"col-img-input",type:s},a,{name:n||this.props.id})))}});t.exports=s},19:function(t,e,n){"use strict";var r=n(4),o=n(20),i=n(1),s=i.PropTypes,a=i.createClass({displayName:"Editor",propTypes:{src:s.string,onChange:s.func.isRequired},render:function(){var t=this.props.video_id;return i.createElement("div",{className:"col-youtube"},i.createElement(o,{video_id:t}),i.createElement("fieldset",{className:"col-youtube-fieldset"},i.createElement(r,{label:"YouTube Video ID",value:t,name:"youtube_video_id",onChange:this._onChange})))},_onChange:function(t){this.props.onChange({video_id:t.currentTarget.value})}});t.exports=a},20:function(t,e,n){"use strict";var r=n(1),o="https://www.youtube.com/embed/",i=r.createClass({displayName:"Player",render:function(){var t=this.props.video_id;return t?r.createElement("div",{className:"col-youtube-player"},r.createElement("iframe",{className:"col-youtube-frame",src:o+t,frameBorder:"0",allowFullScreen:!0})):null}});t.exports=i},41:function(){}});
//# sourceMappingURL=youtube.js.map