module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1587527349009, function(require, module, exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t,e,n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function o(t,n){return"number"==typeof t?t:"string"==typeof t?t:n?e.string:e.number}function i(t,e){return"string"==typeof t?t.split("?")[e?1:0]||"":t}function a(t){return/^https/.test(t)}function s(){return void 0!==window.performance&&("function"==typeof(t=window.Performance)&&/native code/.test(t.toString()))&&"function"==typeof performance.clearResourceTimings&&"function"==typeof performance.getEntriesByType&&"function"==typeof performance.now;var t}!function(t){t.INFO_ALL="-1",t.API_RESPONSE="1",t.INFO="2",t.ERROR="4",t.PROMISE_ERROR="8",t.AJAX_ERROR="16",t.SCRIPT_ERROR="32",t.IMAGE_ERROR="64",t.CSS_ERROR="128",t.CONSOLE_ERROR="256",t.MEDIA_ERROR="512",t.RET_ERROR="1024",t.REPORT="2048"}(t||(t={})),function(t){t[t.number=-1]="number",t.string=""}(e||(e={}));var u=["application/octet-stream","application/xhtml+xml","application/xml","application/pdf","application/pkcs12","application/javascript","application/ecmascript","application/vnd.mspowerpoint","application/ogg","text/html","text/css","text/javascript","image","audio","video"];function c(t){return u.some((function(e){return-1!==t.indexOf(e)}))}var f=["ret","retcode","code"],d=function(t,e){try{"string"==typeof t&&(t=JSON.parse(t)),e&&e.ret&&(f=f.concat(e.ret));var n=Object.getOwnPropertyNames(t).filter((function(t){return-1!==f.indexOf(t.toLowerCase())}));return n.length?""+t[n[0]]:"unknown"}catch(t){return"unknown"}},p=function(t){try{return(JSON.stringify(t,(e=[],n=[],function(t,r){if(r instanceof Error)return"Error.message【 "+r.message+" 】;  Error.stack【 "+r.stack+" 】";if("object"==typeof r&&null!==r){var o=e.indexOf(r);if(-1!==o)return"[Circular "+n[o]+"]";e.push(r),n.push(t||"root")}return r}),4)||"undefined").replace(/"/gim,"")}catch(t){return"error happen when aegis stringify: \n "+t.message+" \n "+t.stack}var e,n},l=function(){function t(t){this.type="xhr",this.data=t}return Object.defineProperty(t.prototype,"sourceURL",{get:function(){return this.data.responseURL},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return Number(this.data.status)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headers",{get:function(){var t=this.data.getAllResponseHeaders().split("\n"),e={};return t.forEach((function(t){if(t){var n=t.split(": "),r=n[0],o=n[1].trim();e[r]=o}})),e},enumerable:!0,configurable:!0}),t}(),h=function(){function t(t,e){this.type="fetch",this.data=t||{},this.data.response=e}return Object.defineProperty(t.prototype,"sourceURL",{get:function(){return this.data.url},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"status",{get:function(){return Number(this.data.status)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headers",{get:function(){var t={};return this.data.headers.forEach((function(e,n){t[n]=e})),t},enumerable:!0,configurable:!0}),t}(),g=function(){m.push(this._normalLogPipeline),function(){if(x)return;x=!0;var e=window.onerror;window.onerror=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];n[4]&&v({msg:n[4],level:t.ERROR}),e&&e.call.apply(e,r([window],n))},window.addEventListener("unhandledrejection",(function(e){v({msg:"PROMISE_ERROR: "+(e&&p(e.reason)),level:t.PROMISE_ERROR})})),window.document.addEventListener("error",(function(e){if(e&&e.target&&e.srcElement){var n=e.target||e.srcElement,r=n.src||n.href,o=n.tagName;if(r&&o){var i={msg:o+" load fail: "+r,level:t.INFO};switch(o.toLowerCase()){case"script":i.level=t.SCRIPT_ERROR;break;case"link":i.level=t.CSS_ERROR;break;case"audio":case"video":i.level=t.MEDIA_ERROR;break;default:return}v(i)}}}),!0);var n=window.XMLHttpRequest.prototype,o=n.open,i=n.send;n.open=function(){return this.aegisMethod&&this.aegisUrl||(this.aegisMethod=arguments[0],this.aegisUrl=arguments[1]),o.apply(this,arguments)},n.send=function(){return!this.__sendByAegis&&this.addEventListener("loadend",(function(){this.aegisTimeout?v({msg:"AJAX_ERROR: request timeout. status: "+this.status+". \n url: "+this.aegisUrl,level:t.AJAX_ERROR}):0===this.status?v({msg:"AJAX_ERROR: request failed. status: "+this.status+". \n url: "+this.aegisUrl,level:t.AJAX_ERROR}):this.status>=400&&v({msg:"AJAX_ERROR: request error. status: "+this.status+". \n url: "+this.aegisUrl,level:t.AJAX_ERROR})})),!this.__sendByAegis&&this.addEventListener("timeout",(function(){this.aegisTimeout=!0})),i.apply(this,arguments)}}()},m=[];function v(t){m.forEach((function(e){e(t)}))}var x=!1;var y=!1,w=["img","css","script","link","audio","radio"],R=[],E=function(){s()&&this.config.reportAssetSpeed&&(R.push(this._speedLogPipeline),y||(y=!0,setInterval(S,this.config.delay),performance.onresourcetimingbufferfull=function(){b=0,performance.clearResourceTimings()},window.document.addEventListener("error",(function(t){if(t&&t.target&&t.srcElement){var n=t.target||t.srcElement,r=n.src||n.href;if(r)O({url:i(r),status:400,method:"get",type:"static",isHttps:a(r),urlQuery:i(r,!0),x5ContentType:e.string,x5HttpStatusCode:e.number,x5ImgDecodeStatus:e.number,x5ErrorCode:e.number,x5LoadFromLocalCache:e.number,x5ContentLength:e.number,domainLookup:e.number,connectTime:e.number})}}),!0)))};function O(t){R.forEach((function(e){e(t)}))}var b=0;function S(){var t=performance.getEntriesByType("resource"),e=t.slice(b);b=t.length;for(var n=0,r=e.length;n<r;n++){var o=e[n];-1!==w.indexOf(o.initiatorType)&&O(L(o))}}function L(t){return{url:i(t.name),method:"get",duration:Number(t.duration.toFixed(2)),status:200,type:"static",isHttps:a(t.name),urlQuery:i(t.name,!0),x5ContentType:o(t.x5ContentType,!0),x5HttpStatusCode:o(t.x5HttpStatusCode),x5ImgDecodeStatus:o(t.x5ImgDecodeStatus),x5ErrorCode:o(t.x5ErrorCode),x5LoadFromLocalCache:void 0===t.x5LoadFromLocalCache?e.number:0|t.x5LoadFromLocalCache,x5ContentLength:t.encodedBodySize||o(t.x5ContentLength),domainLookup:o(t.domainLookupEnd-t.domainLookupStart),connectTime:o(t.connectEnd-t.connectStart)}}var _,A=[];function T(t,e){var n=[];for(var r in t)n.push(r+"="+t[r]);A.forEach((function(t){t({url:e.config.performanceUrl+"?"+n.join("&")})})),A.length=0}var C=function(){var t,e,n,r,o=this;if(s())if(A.push(this.send),_)T(_,this);else try{t=function(t){var e=performance.timing,n=e.loadEventStart-e.domInteractive;n<0&&(n=1070),T(_={dnsLookup:e.domainLookupEnd-e.domainLookupStart,tcp:e.connectEnd-e.connectStart,ssl:0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart,ttfb:e.responseStart-e.requestStart,contentDownload:e.responseEnd-e.responseStart,domParse:e.domInteractive-e.domLoading,resourceDownload:n,firstScreenTiming:Math.floor(t)},o)},e=["script","style","link","br"],n=[],(r=new MutationObserver((function(t){var r={roots:[],rootsDomNum:[],time:performance.now()};t.forEach((function(t){t&&t.addedNodes&&t.addedNodes.forEach&&t.addedNodes.forEach((function(t){1!==t.nodeType||-1!==e.indexOf(t.nodeName.toLocaleLowerCase())||function t(e,n){return!(!e||e===document.documentElement)&&(-1!==n.indexOf(e)||t(e.parentElement,n))}(t,r.roots)||(r.roots.push(t),r.rootsDomNum.push(function t(e){var n=0;if(e&&1===e.nodeType){n++;var r=e.children;if(r&&r.length)for(var o=0;o<r.length;o++)n+=t(r[o])}return n}(t)||0))}))})),r.roots.length&&n.push(r)}))).observe(document,{childList:!0,subtree:!0}),setTimeout((function(){r.disconnect();var e=0,o=0,i=!1;n.forEach((function(t){for(var n=0;n<t.roots.length;n++)t.rootsDomNum[n]>e&&I(t.roots[n])&&(e=t.rootsDomNum[n],o=t.time)}));var a=0;window.performance.getEntriesByType("resource").forEach((function(t){"img"===t.initiatorType&&t.responseEnd>a&&(a=t.responseEnd),"img"===t.initiatorType&&(t.fetchStart<o||t.startTime<o)&&t.responseEnd>o&&(i=!0,o=t.responseEnd)})),0===o&&(o=a),t&&t(i?o:o+25)}),3e3)}catch(t){}};function I(t){if(!t||!t.getBoundingClientRect)return!1;var e=t.getBoundingClientRect(),n=window.innerHeight,r=window.innerWidth;return e.left>=0&&e.left<r&&e.top>=0&&e.top<n}var P=!1,k=function(){var n,r,o,s;this.config.reportApiSpeed&&(N.push(this._speedLogPipeline),D.push(this._normalLogPipeline),P||(P=!0,function(n){if("function"!=typeof window.fetch)return;var r=window.fetch;window.fetch=function(o,s){var u=Date.now();return r(o,s).then((function(r){try{var f=r.headers?r.headers.get("content-type"):"";if(r.ok&&"string"==typeof f&&c(f))q({url:i(r.url),isHttps:a(r.url),method:s&&s.method||"get",duration:Date.now()-u,type:"static",status:r.status,urlQuery:i(r.url,!0),x5ContentType:e.string,x5HttpStatusCode:e.number,x5ImgDecodeStatus:e.number,x5ErrorCode:e.number,x5LoadFromLocalCache:e.number,x5ContentLength:e.number,domainLookup:e.number,connectTime:e.number});else r.clone().text().then((function(e){H({msg:o+" "+e,level:t.API_RESPONSE});var c=d(e,n.api);q({url:i(r.url),isHttps:a(r.url),method:s&&s.method||"get",duration:Date.now()-u,type:"fetch",ret:c||"unknown",status:r.status,payload:new h(r,e)}),"0"!==c&&"unknown"!==c&&H({msg:"request url: "+o+" \n response: "+e,level:t.RET_ERROR})}))}catch(t){}return r})).catch((function(t){throw q({url:i(o),isHttps:a(o),method:s&&s.method||"get",duration:Date.now()-u,type:"fetch",status:600}),t}))}}(this.config),n=this.config,r=window.XMLHttpRequest.prototype,o=r.open,s=r.send,r.open=function(){return this.aegisMethod&&this.aegisUrl||(this.aegisMethod=arguments[0],this.aegisUrl=arguments[1]),o.apply(this,arguments)},r.send=function(){var r=Date.now(),o=0;return!this.__sendByAegis&&this.addEventListener("loadend",(function(){var s=this.aegisUrl;if(s){o=Date.now()-r;var u={url:i(s),isHttps:a(s),status:this.status,method:this.aegisMethod||"get",type:"fetch",duration:o,payload:new l(this)},f=this.getResponseHeader("content-type");if(this.status>=400||"string"!=typeof f||!c(f))try{H({msg:"req url: "+s+" \nres time: "+o+" \nres data: "+this.response,level:t.API_RESPONSE}),u.ret=d(this.response,n.api),"0"!==u.ret&&"unknown"!==u.ret&&H({msg:"request url: "+s+" \n response: "+this.response,level:t.RET_ERROR})}catch(t){u.ret="unknown"}else u.type="static",delete u.ret,Object.assign(u,{urlQuery:i(s,!0),x5ContentType:e.string,x5HttpStatusCode:e.number,x5ImgDecodeStatus:e.number,x5ErrorCode:e.number,x5LoadFromLocalCache:e.number,x5ContentLength:e.number,domainLookup:e.number,connectTime:e.number});q(u)}})),s.apply(this,arguments)}))},N=[];function q(t){N.forEach((function(e){e(t)}))}var D=[];function H(t){D.forEach((function(e){e(t)}))}var j=function(){var t=this;!function(t){try{var e=window.localStorage.getItem("AEGIS_ID");e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})),window.localStorage.setItem("AEGIS_ID",e)),t&&t(e||"")}catch(e){t&&t("")}}((function(e){t.bean.aid=e}))};var M=function(t){this.config.tjg&&function(t){if(X)return;X=!0,function(t){if("function"!=typeof window.fetch)return;var e=window.fetch;window.fetch=function(n,r){return B(n)&&("object"==typeof r&&r?r.headers?r.headers instanceof Headers&&r.headers.append("X-Tjg-Json-Span-Context",J(t)):r.headers=new Headers({"X-Tjg-Json-Span-Context":J(t)}):r={headers:new Headers({"X-Tjg-Json-Span-Context":J(t)})}),e(n,r)}}(t),function(t){if(!window.XMLHttpRequest)return;var e=window.XMLHttpRequest.prototype.send,n=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(){return!this.__sendByAegis&&B(arguments[1])&&(this.useTjg=!0),n.apply(this,arguments)},window.XMLHttpRequest.prototype.send=function(){return this.useTjg&&this.setRequestHeader("X-Tjg-Json-Span-Context",J(t)),e.apply(this,arguments)}}(t)}(t)},X=!1;function J(t){return window.btoa&&window.btoa(JSON.stringify({ids:{trace_id:{high:F(),low:F()},span_id:F(),parent_id:0,flag:2},baggages:{aegis_session_id:t._sessionID}}))}function F(){return parseInt(new Array(53).fill(1).map((function(){return Math.random()>.5?1:0})).join(""),2)}function B(t){var e=document.createElement("a");return e.href=t,location.origin===e.origin}var U,G,Q,z=function(){this.config.reportAssetSpeed&&(this.extendBean("platform",function(){var t=U.other;/\bAndroid\s*([^;]+)/.test(W)?t=U.android:/\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(W)&&(t=U.ios);return t}()),this.extendBean("x5Type",function(){var t=G.other;if(W.indexOf("tbs")>=0){var e=W.match(/tbs\/([\d\.]+)/);t=e&&e[1]&&parseInt(e[1],10)>=36541?G.newX5:G.oldX5}return t}()),this.extendBean("netType",Q.unknown),function t(e){var n=e.config;var r=K;"function"==typeof n.getNetworkType&&(r=n.getNetworkType);r((function(n){Q[n]||(n=Q.unknown),e.extendBean("netType",n),setTimeout((function(){t(e)}),3e3)}))}(this))},W=navigator.userAgent;function K(t){var e,n=navigator.connection&&navigator.connection.type?navigator.connection.type:"unknown";t((e=n,(e=String(e).toLowerCase()).indexOf("2g")>=0?Q.net2g:e.indexOf("3g")>=0?Q.net3g:e.indexOf("4g")>=0?Q.net4g:e.indexOf("5g")>=0?Q.net5g:e.indexOf("6g")>=0?Q.net6g:e.indexOf("wifi")>=0?Q.wifi:Q.unknown))}!function(t){t[t.android=1]="android",t[t.ios=2]="ios",t[t.other=100]="other"}(U||(U={})),function(t){t[t.oldX5=1]="oldX5",t[t.newX5=2]="newX5",t[t.other=3]="other"}(G||(G={})),function(t){t[t.unknown=100]="unknown",t[t.wifi=1]="wifi",t[t.net2g=2]="net2g",t[t.net3g=3]="net3g",t[t.net4g=4]="net4g",t[t.net5g=5]="net5g",t[t.net6g=6]="net6g"}(Q||(Q={}));var V=function(){var t=this;!function(t){var e=wx||qq;try{var n=e.getStorageSync("AEGIS_ID");n||(n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})),e.setStorageSync("AEGIS_ID",n)),t&&t(n||"")}catch(e){t&&t("")}}((function(e){t.bean.aid=e}))};var Y=!1,Z=function(){this.config.reportApiSpeed&&($.push(this._speedLogPipeline),tt.push(this._normalLogPipeline),Y||(Y=!0,function(){var e=wx||qq,r=e.request,o=function(e){var o=Date.now();return r(n(n({},e),{success:function(n){try{var r={method:e.method||"get",url:i(e.url),duration:Date.now()-o,status:0,isHttps:a(e.url),type:"fetch"};r.ret=d(n.data),s=r,$.forEach((function(t){t(s)})),function(t){tt.forEach((function(e){e(t)}))}({msg:"req url: "+r.url+" \nres time: "+r.duration+" \nres data: "+JSON.stringify(n.data),level:t.API_RESPONSE})}catch(t){}finally{e.success&&e.success(n)}var s}}))};try{Object.defineProperty(e,"request",{get:function(){return o}})}catch(t){console.warn("无法重定义`request`，无法进行CGI测速，错误详情：",t)}}()))},$=[];var tt=[];var et=function(){nt.push(this._normalLogPipeline),function(){if(rt)return;rt=!0,(wx||qq).onError((function(e){var n;e&&(n={msg:e,level:t.ERROR},nt.forEach((function(t){t(n)})))}))}()},nt=[];var rt=!1;function ot(t){return function(e,n){if("number"!=typeof t&&(t=1),Math.random()<t)return n(e)}}function it(t,e){var n;void 0===t&&(t=0);var r=[];return function(o,i){if(r.push(o),e&&r.length>=e)return i(r.splice(0,r.length)),void(n&&clearTimeout(n));n&&clearTimeout(n),n=setTimeout((function(){n=null,i(r.splice(0,r.length))}),t)}}var at=function(t,e){return Array.isArray(t)?e(t.map((function(t){return{msg:"string"==typeof t.msg?t.msg:p(t.msg),level:t.level}}))):e({msg:"string"==typeof t.msg?t.msg:p(t.msg),level:t.level})};function st(e){var n=!1,r=!1;setTimeout((function(){e.send({url:e.config.whiteListUrl||""},(function(t){try{0===(t=JSON.parse(t)||{}).retcode&&(n=t.result.is_in_white_list)}catch(t){}r=!0}),(function(){r=!0}))}),50);var o=[];return function(e,i){if(n)i(e.concat(o.splice(0)).map((function(e){return e.level===t.INFO_ALL&&(e.level=t.INFO),e})));else{var a=e.filter((function(e){if(e.level!==t.INFO&&e.level!==t.API_RESPONSE)return e.level===t.INFO_ALL&&(e.level=t.INFO),!0;r||(o.push(e),o.length>=200&&(o.length=200))}));a.length&&i(a)}}}function ut(){var t={};return function(e,n){if(Array.isArray(e)){var r=e.filter((function(e){var n=!t[e.url];return t[e.url]=!0,n}));r.length&&n(r)}else!t[e.url]&&n(e),t[e.url]=!0}}var ct=function(){};function ft(t){if(!t||!t.reduce||!t.length)throw new TypeError("createPipeline 方法需要传入至少有一个 pipe 的数组");return 1===t.length?function(e,n){t[0](e,n||ct)}:t.reduce((function(t,e){return function(n,r){return void 0===r&&(r=ct),t(n,(function(t){return e&&e(t,r)}))}}))}if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'aid', { enumerable: true, configurable: true, get: function() { return j; } });Object.defineProperty(exports, 'assetSpeed', { enumerable: true, configurable: true, get: function() { return E; } });Object.defineProperty(exports, 'cgiSpeed', { enumerable: true, configurable: true, get: function() { return k; } });Object.defineProperty(exports, 'createPipeline', { enumerable: true, configurable: true, get: function() { return ft; } });Object.defineProperty(exports, 'createRandomSamplePipe', { enumerable: true, configurable: true, get: function() { return ot; } });Object.defineProperty(exports, 'createSpeedRepeatLimitPipe', { enumerable: true, configurable: true, get: function() { return ut; } });Object.defineProperty(exports, 'createThrottlePipe', { enumerable: true, configurable: true, get: function() { return it; } });Object.defineProperty(exports, 'createWhitelistPipe', { enumerable: true, configurable: true, get: function() { return st; } });Object.defineProperty(exports, 'device', { enumerable: true, configurable: true, get: function() { return z; } });Object.defineProperty(exports, 'formatNormalLogPipe', { enumerable: true, configurable: true, get: function() { return at; } });Object.defineProperty(exports, 'mpAid', { enumerable: true, configurable: true, get: function() { return V; } });Object.defineProperty(exports, 'mpCgiSpeed', { enumerable: true, configurable: true, get: function() { return Z; } });Object.defineProperty(exports, 'mpOnError', { enumerable: true, configurable: true, get: function() { return et; } });Object.defineProperty(exports, 'onError', { enumerable: true, configurable: true, get: function() { return g; } });Object.defineProperty(exports, 'pagePerformance', { enumerable: true, configurable: true, get: function() { return C; } });Object.defineProperty(exports, 'stringifyPlus', { enumerable: true, configurable: true, get: function() { return p; } });Object.defineProperty(exports, 'tjg', { enumerable: true, configurable: true, get: function() { return M; } });Object.defineProperty(exports, 'tryToGetRetCode', { enumerable: true, configurable: true, get: function() { return d; } });
//# sourceMappingURL=aegisplugins.min.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1587527349009);
})()
//# sourceMappingURL=index.js.map