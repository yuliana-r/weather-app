(()=>{var t={890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),s=n(667),u=n.n(s),c=new URL(n(868),n.b),d=new URL(n(88),n.b),l=o()(a());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@400,500,700,900&display=swap);"]);var f=u()(c),h=u()(d);l.push([t.id,"*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n    min-width: 400px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url("+f+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100vh;\n}\n\n/* HEADER */\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2em 2em 0;\n    user-select: none;\n}\n\ninput[type=search] {\n    padding: 10px;\n    min-width: 250px;\n    width: 30%;\n    border-radius: 20px;\n    border: 1px solid #3e3c57;\n    opacity: 0.8;\n    font-size: 16px;\n    background-image: url("+h+");\n    background-position: 10px 10px;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    user-select: none;\n}\n\ninput[type=search]:focus {\n    outline: none;\n\n}\n\ninput[type=search]:focus::placeholder {\n    color: transparent;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\nbutton {\n    display: none;\n}\n\n/* MAIN */\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2em 0;\n    width: 100%;\n}\n\n.current-weather {\n    min-width: 390px;\n    width: 40%;\n    min-height: 300px;\n    background-color: rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 2em;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    color: #fff;\n    padding: 2em 3.5em;\n}\n\n.left,\n.right {\n    user-select: none;\n}\n\n#time {\n    font-size: 18px;\n    font-weight: 400;\n    letter-spacing: 1px;\n}\n\n#city {\n    font-size: 40px;\n    font-weight: 700;\n    padding: 15px 0;\n}\n\n#region,\n#country {\n    font-size: 20px;\n    font-style: italic;\n    font-weight: 200;\n    margin-bottom: 5px;\n}\n\n#day-summary {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    margin: 40px 0;\n}\n\nimg {\n    height: 75px;\n}\n\n#condition {\n    font-size: 20px;\n    font-weight: 300;\n    margin-bottom: 5px;\n}\n\n#temp {\n    font-size: 25px;\n    font-weight: 500;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    white-space: nowrap;\n    justify-content: space-evenly;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 15px;\n}\n\n.container-details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.container-details>p {\n    font-size: 15px;\n    font-weight: 700;\n}\n\nspan {\n    font-weight: 300;\n    font-size: 25px;\n}\n\ni {\n    font-size: 35px;\n}\n\n.week-forecast {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.45);\n    width: 65%;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    padding: 20px;\n    user-select: none;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    color: #fff;\n    gap: 2em;\n}\n\n.day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.day-icon {\n    width: 50px;\n    height: 50px;\n}\n\n.day-name {\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin: 5px;\n}\n\n.max-temp {\n    font-size: 25px;\n    font-weight: 500;\n    margin: 5px;\n}\n\n.min-temp {\n    font-size: 17px;\n    font-weight: 200;\n    margin-top: 5px;\n}\n\n/* FOOTER */\n\nfooter {\n    user-select: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    font-size: 20px;\n    color: #fff;\n    gap: 10px;\n    padding: 1em 0 0.5em;\n    margin-top: 1em;\n    letter-spacing: 1px;\n}\n\n.fa-github {\n    font-size: 20px;\n    color: #fff;\n    transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n\n@media (max-width: 600px) {\n    .current-weather {\n        flex-direction: column;\n    }\n\n    .week-forecast {\n        width: 390px;\n        flex-direction: column;\n        justify-content: center;\n        gap: 1em;\n        padding: 0.5em;\n    }\n\n    .day {\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        width: 300px;\n    }\n\n    .day-name {\n        width: 50px;\n        margin-left: 0;\n    }\n\n    .max-temp {\n        width: 65px;\n    }\n\n    .min-temp {\n        width: 55px;\n    }\n\n    .max-temp,\n    .min-temp {\n        margin-right: 0;\n        text-align: right;\n    }\n\n    #time {\n        font-size: 16px;\n    }\n}\n\n@media (max-width: 1100px) {\n    .day {\n        flex: 20%;\n    }\n\n    .current-weather {\n        width: 70%;\n    }\n}",""]);const m=l},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(o[u]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var f=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}o.push(l)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var s=n(i[o]);e[s].references--}for(var u=r(t,a),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},3:(t,e,n)=>{var r={"./clear-day.png":269,"./clear-night.png":816,"./cloudy.png":554,"./fog.png":688,"./hail.png":849,"./partly-cloudy-day.png":635,"./partly-cloudy-night.png":172,"./rain-snow-showers-day.png":404,"./rain-snow-showers-night.png":165,"./rain-snow.png":641,"./rain.png":563,"./showers-day.png":341,"./showers-night.png":298,"./sleet.png":826,"./snow-showers-day.png":191,"./snow-showers-night.png":753,"./snow.png":787,"./thunder-rain.png":709,"./thunder-showers-day.png":829,"./thunder-showers-night.png":381,"./thunder.png":364,"./wind.png":278};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=3},868:(t,e,n)=>{"use strict";t.exports=n.p+"assets/background-5c31c91970f2aa9ddc42.jpg"},269:(t,e,n)=>{"use strict";t.exports=n.p+"assets/clear-day-2d2c4c1e0cea2ea94d9e.png"},816:(t,e,n)=>{"use strict";t.exports=n.p+"assets/clear-night-8b657d6b2a4c7f55c95f.png"},554:(t,e,n)=>{"use strict";t.exports=n.p+"assets/cloudy-3a22010cc574b8ec3467.png"},688:(t,e,n)=>{"use strict";t.exports=n.p+"assets/fog-bec51c6b905e71a69c73.png"},849:(t,e,n)=>{"use strict";t.exports=n.p+"assets/hail-22bc6a62d61cd4e61b23.png"},635:(t,e,n)=>{"use strict";t.exports=n.p+"assets/partly-cloudy-day-e2cb38f56ab3f72e93c0.png"},172:(t,e,n)=>{"use strict";t.exports=n.p+"assets/partly-cloudy-night-e406783465c1e058592a.png"},404:(t,e,n)=>{"use strict";t.exports=n.p+"assets/rain-snow-showers-day-03570f8770afb4578ef1.png"},165:(t,e,n)=>{"use strict";t.exports=n.p+"assets/rain-snow-showers-night-b56363b154ab1b8cabbf.png"},641:(t,e,n)=>{"use strict";t.exports=n.p+"assets/rain-snow-038d450ab94c9555c80b.png"},563:(t,e,n)=>{"use strict";t.exports=n.p+"assets/rain-6966c27e67c496174de7.png"},341:(t,e,n)=>{"use strict";t.exports=n.p+"assets/showers-day-f4024ece0d1611677487.png"},298:(t,e,n)=>{"use strict";t.exports=n.p+"assets/showers-night-9c2b00d012491c137b95.png"},826:(t,e,n)=>{"use strict";t.exports=n.p+"assets/sleet-7308695c26f29c07e780.png"},191:(t,e,n)=>{"use strict";t.exports=n.p+"assets/snow-showers-day-bd8534b598bd67f042f8.png"},753:(t,e,n)=>{"use strict";t.exports=n.p+"assets/snow-showers-night-144ff406034d20032dae.png"},787:(t,e,n)=>{"use strict";t.exports=n.p+"assets/snow-9ea730ccdd3c70265097.png"},709:(t,e,n)=>{"use strict";t.exports=n.p+"assets/thunder-rain-28c16fdbc81fa954c34d.png"},829:(t,e,n)=>{"use strict";t.exports=n.p+"assets/thunder-showers-day-4ecb49ae0e8456fffe83.png"},381:(t,e,n)=>{"use strict";t.exports=n.p+"assets/thunder-showers-night-b11d5ba572c6b2d69aec.png"},364:(t,e,n)=>{"use strict";t.exports=n.p+"assets/thunder-bbaf7afabd2579a73577.png"},278:(t,e,n)=>{"use strict";t.exports=n.p+"assets/wind-1fe081956dbbfe6cc56a.png"},88:(t,e,n)=>{"use strict";t.exports=n.p+"assets/search-fd6b3038e29da7f8074c.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function i(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),i=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function o(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var s=i(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=i(u);return n.getTime()>=s.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}var s={};function u(){return s}function c(t,n){var i,o,s,c,d,l,f,h;e(1,arguments);var m=u(),g=a(null!==(i=null!==(o=null!==(s=null!==(c=null==n?void 0:n.weekStartsOn)&&void 0!==c?c:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:m.weekStartsOn)&&void 0!==o?o:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=r(t),w=p.getUTCDay(),y=(w<g?7:0)+w-g;return p.setUTCDate(p.getUTCDate()-y),p.setUTCHours(0,0,0,0),p}function d(t,n){var i,o,s,d,l,f,h,m;e(1,arguments);var g=r(t),p=g.getUTCFullYear(),w=u(),y=a(null!==(i=null!==(o=null!==(s=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==s?s:w.firstWeekContainsDate)&&void 0!==o?o:null===(h=w.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(p+1,0,y),v.setUTCHours(0,0,0,0);var b=c(v,n),x=new Date(0);x.setUTCFullYear(p,0,y),x.setUTCHours(0,0,0,0);var C=c(x,n);return g.getTime()>=b.getTime()?p+1:g.getTime()>=C.getTime()?p:p-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const f=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},m=function(t,e){return l(t.getUTCDate(),e.length)},g=function(t,e){return l(t.getUTCHours()%12||12,e.length)},p=function(t,e){return l(t.getUTCHours(),e.length)},w=function(t,e){return l(t.getUTCMinutes(),e.length)},y=function(t,e){return l(t.getUTCSeconds(),e.length)},v=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var b={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(t,e)},Y:function(t,e,n,r){var a=d(t,r),i=a>0?a:1-a;return"YY"===e?l(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):l(i,e.length)},R:function(t,e){return l(o(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,i,o){var s=function(t,n){e(1,arguments);var i=r(t),o=c(i,n).getTime()-function(t,n){var r,i,o,s,l,f,h,m;e(1,arguments);var g=u(),p=a(null!==(r=null!==(i=null!==(o=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1),w=d(t,n),y=new Date(0);return y.setUTCFullYear(w,0,p),y.setUTCHours(0,0,0,0),c(y,n)}(i,n).getTime();return Math.round(o/6048e5)+1}(t,o);return"wo"===n?i.ordinalNumber(s,{unit:"week"}):l(s,n.length)},I:function(t,n,a){var s=function(t){e(1,arguments);var n=r(t),a=i(n).getTime()-function(t){e(1,arguments);var n=o(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),i(r)}(n).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===n?a.ordinalNumber(s,{unit:"week"}):l(s,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):m(t,e)},D:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=a-n.getTime();return Math.floor(i/864e5)+1}(t);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):l(i,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return l(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return l(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return l(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y(t,e)},S:function(t,e){return v(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+T(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+T(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return l(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function x(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+l(i,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}const M=b;var k=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},D=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const S={p:D,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return k(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",k(a,e)).replace("{{time}}",D(i,e))}};var E=["D","DD"],U=["YY","YYYY"];function P(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function O(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const j={date:O({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:O({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:O({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Y(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const F={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return o=t.valueCallback?t.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(s.length)}}}var L,q={ordinalNumber:(L={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(L.matchPattern);if(!n)return null;var r=n[0],a=t.match(L.parsePattern);if(!a)return null;var i=L.valueCallback?L.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const R={code:"en-US",formatDistance:function(t,e,n){var r,a=W[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:j,formatRelative:function(t,e,n,r){return N[t]},localize:F,match:q,options:{weekStartsOn:0,firstWeekContainsDate:1}};var H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,I=/''/g,Q=/[a-zA-Z]/;function $(n,i,o){var s,c,d,l,f,h,m,g,p,w,y,v,b,x,C,T,k,D;e(2,arguments);var W=String(i),O=u(),j=null!==(s=null!==(c=null==o?void 0:o.locale)&&void 0!==c?c:O.locale)&&void 0!==s?s:R,N=a(null!==(d=null!==(l=null!==(f=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(m=o.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==f?f:O.firstWeekContainsDate)&&void 0!==l?l:null===(p=O.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==d?d:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=a(null!==(y=null!==(v=null!==(b=null!==(x=null==o?void 0:o.weekStartsOn)&&void 0!==x?x:null==o||null===(C=o.locale)||void 0===C||null===(T=C.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==b?b:O.weekStartsOn)&&void 0!==v?v:null===(k=O.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==y?y:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var F=r(n);if(!function(n){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(F))throw new RangeError("Invalid time value");var z=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(F),L=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var i=r(t).getTime(),o=a(n);return new Date(i+o)}(t,-a(n))}(F,z),q={firstWeekContainsDate:N,weekStartsOn:Y,locale:j,_originalDate:F};return W.match(A).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,S[e])(t,j.formatLong):t})).join("").match(H).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(B))?r[1].replace(I,"'"):e;var s,u=M[a];if(u)return null!=o&&o.useAdditionalWeekYearTokens||(s=t,-1===U.indexOf(s))||P(t,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==E.indexOf(t)}(t)||P(t,i,String(n)),u(L,t,j.localize,q);if(a.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}class G{static city;static country;static time;static weekForecast;static current;static async getData(t){const e=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}/next7days?unitGroup=metric&include=days%2Ccurrent&iconSet=icons2&key=MLRZJ663MCNFCJ4UZHHPBGXWK&contentType=json`,{mode:"cors"}),n=await e.json();if(e.ok){const t=await n.resolvedAddress.indexOf(",");this.city=await n.resolvedAddress.slice(0,t),this.country=await n.resolvedAddress.slice(t+2),this.time=await $(new Date(`${n.days[0].datetime} ${n.currentConditions.datetime}`),"eeee, do MMM ''yy, h:mm aaa"),this.current=await n.currentConditions,this.weekForecast=await n.days}else alert("Location not found.")}static getCurrent(){const{current:t}=this,{weekForecast:e}=this;return[t.icon,t.conditions,Math.round(t.temp),Math.round(t.feelslike),Math.round(e[0].precipprob),Math.round(t.humidity),t.windspeed]}static getForecast(t){const e=this.weekForecast[t];return[e.icon,$(new Date(e.datetime),"eee"),Math.round(e.tempmax),Math.round(e.tempmin)]}}class X{static getData(){const t=document.getElementById("input");t.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const n=t.value.trim();G.getData(n).then(X.displayCurrentWeather).then(X.displayForecast).catch((t=>{alert(t)})),t.value=""}}))}static displayCurrentWeather(){const[t,e,r,a,i,o,s]=G.getCurrent(),u=document.getElementById("time"),c=document.getElementById("city"),d=document.getElementById("country"),l=document.getElementById("icon"),f=document.getElementById("condition"),h=document.getElementById("temp"),m=document.getElementById("feels-like"),g=document.getElementById("chance-of-rain"),p=document.getElementById("humidity"),w=document.getElementById("wind"),y=n(3)(`./${t}.png`);u.innerHTML=`Last updated: <br>${G.time}`,c.textContent=G.city,d.textContent=G.country,l.src=y,f.textContent=e,h.textContent=`${r} °C`,m.textContent=`${a} °C`,g.textContent=`${i}%`,p.textContent=`${o}%`,w.textContent=`${s} km/h`}static displayForecast(){const t=document.querySelector(".week-forecast");t.textContent="";for(let e=1;e<8;e++){const[r,a,i,o]=G.getForecast(e),s=document.createElement("div");s.classList.add("day");const u=document.createElement("img");u.classList.add("day-icon");const c=n(3)(`./${r}.png`);u.src=c;const d=document.createElement("p");d.classList.add("day-name"),d.textContent=a;const l=document.createElement("p");l.classList.add("max-temp"),l.textContent=`${i} °C`;const f=document.createElement("p");f.classList.add("min-temp"),f.textContent=`${o} °C`,s.appendChild(u),s.appendChild(d),s.appendChild(l),s.appendChild(f),t.appendChild(s)}}}var _=n(379),J=n.n(_),Z=n(795),V=n.n(Z),K=n(569),tt=n.n(K),et=n(565),nt=n.n(et),rt=n(216),at=n.n(rt),it=n(589),ot=n.n(it),st=n(890),ut={};ut.styleTagTransform=ot(),ut.setAttributes=nt(),ut.insert=tt().bind(null,"head"),ut.domAPI=V(),ut.insertStyleElement=at(),J()(st.Z,ut),st.Z&&st.Z.locals&&st.Z.locals,window.onload=()=>{G.getData("London").then(X.displayCurrentWeather).then(X.displayForecast).catch((t=>{alert(t)}))},X.getData()})()})();