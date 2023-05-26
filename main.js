(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),s=n.n(u),c=new URL(n(868),n.b),d=new URL(n(88),n.b),l=i()(a());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@400,500,700,900&display=swap);"]);var f=s()(c),h=s()(d);l.push([t.id,"*,\n*::after,\n*::before {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n    min-width: 400px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url("+f+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100vh;\n}\n\n/* HEADER */\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2em;\n    user-select: none;\n}\n\ninput[type=search] {\n    padding: 10px;\n    min-width: 250px;\n    width: 30%;\n    border-radius: 20px;\n    border: 1px solid #3e3c57;\n    opacity: 0.8;\n    font-size: 16px;\n    background-image: url("+h+");\n    background-position: 10px 10px;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    user-select: none;\n}\n\ninput[type=search]:focus {\n    outline: none;\n\n}\n\ninput[type=search]:focus::placeholder {\n    color: transparent;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n}\n\nbutton {\n    display: none;\n}\n\n/* MAIN */\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2em 0;\n    width: 100%;\n}\n\n.current-weather {\n    min-width: 390px;\n    width: 45%;\n    min-height: 300px;\n    background-color: rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1em;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    color: #fff;\n    padding: 2em 3.5em;\n}\n\n.left,\n.right {\n    user-select: none;\n}\n\n#time {\n    font-size: 20px;\n    font-weight: 400;\n    letter-spacing: 1px;\n}\n\n#city {\n    font-size: 40px;\n    font-weight: 700;\n    padding: 15px 0;\n}\n\n#region,\n#country {\n    font-size: 20px;\n    font-style: italic;\n    font-weight: 200;\n    margin-bottom: 5px;\n}\n\n#day-summary {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    margin: 40px 0;\n}\n\nimg {\n    height: 75px;\n}\n\n#condition {\n    font-size: 20px;\n    font-weight: 300;\n    margin-bottom: 5px;\n}\n\n#temp {\n    font-size: 25px;\n    font-weight: 500;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    white-space: nowrap;\n    justify-content: space-evenly;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 15px;\n}\n\n.container-details {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.container-details>p {\n    font-size: 15px;\n    font-weight: 700;\n}\n\nspan {\n    font-weight: 300;\n    font-size: 25px;\n}\n\ni {\n    font-size: 35px;\n}\n\n.week-forecast {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.45);\n    width: 80%;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    padding: 20px;\n    user-select: none;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    color: #fff;\n}\n\n.day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.day-icon {\n    width: 50px;\n    height: 50px;\n}\n\n.day-name {\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    margin: 5px;\n}\n\n.max-temp {\n    font-size: 25px;\n    font-weight: 500;\n    margin: 5px;\n}\n\n.min-temp {\n    font-size: 17px;\n    font-weight: 200;\n    margin-top: 5px;\n}\n\n/* FOOTER */\n\nfooter {\n    user-select: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Raleway', 'Roboto', sans-serif;\n    font-size: 20px;\n    color: #fff;\n    gap: 10px;\n    padding: 1em 0 0.5em;\n    margin-top: 1em;\n    letter-spacing: 1px;\n}\n\n.fa-github {\n    font-size: 20px;\n    color: #fff;\n    transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n\n@media (max-width: 600px) {\n    .current-weather {\n        flex-direction: column;\n    }\n\n    .week-forecast {\n        width: 390px;\n        flex-direction: column;\n        justify-content: center;\n        gap: 1em;\n    }\n\n    .day {\n        flex-direction: row;\n        justify-content: space-between;\n        gap: 1em;\n        width: 300px;\n    }\n}",""]);const m=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var s=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},868:(t,e,n)=>{t.exports=n.p+"assets/background-5c31c91970f2aa9ddc42.jpg"},88:(t,e,n)=>{t.exports=n.p+"assets/search-fd6b3038e29da7f8074c.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function i(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var u=o(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var c=o(s);return n.getTime()>=u.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}var u={};function s(){return u}function c(t,n){var o,i,u,c,d,l,f,h;e(1,arguments);var m=s(),g=a(null!==(o=null!==(i=null!==(u=null!==(c=null==n?void 0:n.weekStartsOn)&&void 0!==c?c:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:m.weekStartsOn)&&void 0!==i?i:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=r(t),w=p.getUTCDay(),v=(w<g?7:0)+w-g;return p.setUTCDate(p.getUTCDate()-v),p.setUTCHours(0,0,0,0),p}function d(t,n){var o,i,u,d,l,f,h,m;e(1,arguments);var g=r(t),p=g.getUTCFullYear(),w=s(),v=a(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(h=w.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(p+1,0,v),y.setUTCHours(0,0,0,0);var b=c(y,n),x=new Date(0);x.setUTCFullYear(p,0,v),x.setUTCHours(0,0,0,0);var C=c(x,n);return g.getTime()>=b.getTime()?p+1:g.getTime()>=C.getTime()?p:p-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const f=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},m=function(t,e){return l(t.getUTCDate(),e.length)},g=function(t,e){return l(t.getUTCHours()%12||12,e.length)},p=function(t,e){return l(t.getUTCHours(),e.length)},w=function(t,e){return l(t.getUTCMinutes(),e.length)},v=function(t,e){return l(t.getUTCSeconds(),e.length)},y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var b={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(t,e)},Y:function(t,e,n,r){var a=d(t,r),o=a>0?a:1-a;return"YY"===e?l(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):l(o,e.length)},R:function(t,e){return l(i(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,o,i){var u=function(t,n){e(1,arguments);var o=r(t),i=c(o,n).getTime()-function(t,n){var r,o,i,u,l,f,h,m;e(1,arguments);var g=s(),p=a(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1),w=d(t,n),v=new Date(0);return v.setUTCFullYear(w,0,p),v.setUTCHours(0,0,0,0),c(v,n)}(o,n).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===n?o.ordinalNumber(u,{unit:"week"}):l(u,n.length)},I:function(t,n,a){var u=function(t){e(1,arguments);var n=r(t),a=o(n).getTime()-function(t){e(1,arguments);var n=i(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===n?a.ordinalNumber(u,{unit:"week"}):l(u,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):m(t,e)},D:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):l(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return l(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return l(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return l(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v(t,e)},S:function(t,e){return y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+T(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+T(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return l(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function x(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+l(o,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}const M=b;var k=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},D=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const S={p:D,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return k(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",k(a,e)).replace("{{time}}",D(o,e))}};var E=["D","DD"],U=["YY","YYYY"];function P(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const j={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const F={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}var q,L={ordinalNumber:(q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(q.matchPattern);if(!n)return null;var r=n[0],a=t.match(q.parsePattern);if(!a)return null;var o=q.valueCallback?q.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const R={code:"en-US",formatDistance:function(t,e,n){var r,a=W[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:j,formatRelative:function(t,e,n,r){return N[t]},localize:F,match:L,options:{weekStartsOn:0,firstWeekContainsDate:1}};var B=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H=/^'([^]*?)'?$/,A=/''/g,Q=/[a-zA-Z]/;function _(n,o,i){var u,c,d,l,f,h,m,g,p,w,v,y,b,x,C,T,k,D;e(2,arguments);var W=String(o),Y=s(),j=null!==(u=null!==(c=null==i?void 0:i.locale)&&void 0!==c?c:Y.locale)&&void 0!==u?u:R,N=a(null!==(d=null!==(l=null!==(f=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(m=i.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==f?f:Y.firstWeekContainsDate)&&void 0!==l?l:null===(p=Y.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==d?d:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=a(null!==(v=null!==(y=null!==(b=null!==(x=null==i?void 0:i.weekStartsOn)&&void 0!==x?x:null==i||null===(C=i.locale)||void 0===C||null===(T=C.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==b?b:Y.weekStartsOn)&&void 0!==y?y:null===(k=Y.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==v?v:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var F=r(n);if(!function(n){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(F))throw new RangeError("Invalid time value");var z=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(F),q=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var o=r(t).getTime(),i=a(n);return new Date(o+i)}(t,-a(n))}(F,z),L={firstWeekContainsDate:N,weekStartsOn:O,locale:j,_originalDate:F};return W.match(I).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,S[e])(t,j.formatLong):t})).join("").match(B).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(H))?r[1].replace(A,"'"):e;var u,s=M[a];if(s)return null!=i&&i.useAdditionalWeekYearTokens||(u=t,-1===U.indexOf(u))||P(t,o,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==E.indexOf(t)}(t)||P(t,o,String(n)),s(q,t,j.localize,L);if(a.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}class G{static city;static region;static country;static time;static weekForecast;static current;static async getData(t){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a511c52e142845de9da160517232305&q=${t}&days=8&aqi=no&alerts=no`,{mode:"cors"}),n=await e.json();e.ok?(this.city=await n.location.name,this.region=await n.location.region,this.country=await n.location.country,this.time=await _(new Date(n.location.localtime),"eeee, do MMM ''yy, h:mm aaa"),this.current=await n.current,this.weekForecast=await n.forecast.forecastday):alert("Location not found.")}static getCurrent(){const{current:t}=this,e=this.weekForecast[0].day.daily_chance_of_rain;return[t.condition.icon,t.condition.text,Math.round(t.temp_c),Math.round(t.feelslike_c),Math.round(e),Math.round(t.humidity),t.wind_kph]}static getForecast(t){const e=this.weekForecast[t];return[e.day.condition.icon,_(new Date(e.date),"eee"),Math.round(e.day.maxtemp_c),Math.round(e.day.mintemp_c)]}}class X{static getData(){const t=document.getElementById("input");t.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const n=t.value.trim();G.getData(n).then(X.displayCurrentWeather).then(X.displayForecast).catch((t=>{alert(t)})),t.value=""}}))}static displayCurrentWeather(){const[t,e,n,r,a,o,i]=G.getCurrent(),u=document.getElementById("time"),s=document.getElementById("city"),c=document.getElementById("region"),d=document.getElementById("country"),l=document.getElementById("icon"),f=document.getElementById("condition"),h=document.getElementById("temp"),m=document.getElementById("feels-like"),g=document.getElementById("chance-of-rain"),p=document.getElementById("humidity"),w=document.getElementById("wind");u.textContent=G.time,s.textContent=G.city,c.textContent=G.region,d.textContent=G.country,l.src=t,f.textContent=e,h.textContent=`${n} °C`,m.textContent=`${r} °C`,g.textContent=`${a}%`,p.textContent=`${o}%`,w.textContent=`${i} km/h`}static displayForecast(){const t=document.querySelector(".week-forecast");t.textContent="";for(let e=1;e<8;e++){const[n,r,a,o]=G.getForecast(e),i=document.createElement("div");i.classList.add("day");const u=document.createElement("img");u.classList.add("day-icon"),u.src=n;const s=document.createElement("p");s.classList.add("day-name"),s.textContent=r;const c=document.createElement("p");c.classList.add("max-temp"),c.textContent=`${a} °C`;const d=document.createElement("p");d.classList.add("min-temp"),d.textContent=`${o} °C`,i.appendChild(u),i.appendChild(s),i.appendChild(c),i.appendChild(d),t.appendChild(i)}}}var $=n(379),J=n.n($),Z=n(795),V=n.n(Z),K=n(569),tt=n.n(K),et=n(565),nt=n.n(et),rt=n(216),at=n.n(rt),ot=n(589),it=n.n(ot),ut=n(890),st={};st.styleTagTransform=it(),st.setAttributes=nt(),st.insert=tt().bind(null,"head"),st.domAPI=V(),st.insertStyleElement=at(),J()(ut.Z,st),ut.Z&&ut.Z.locals&&ut.Z.locals,window.onload=()=>{G.getData("London").then(X.displayCurrentWeather).then(X.displayForecast).catch((t=>{alert(t)}))},X.getData()})()})();