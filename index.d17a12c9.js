!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=l||f||Function("return this")(),s=Object.prototype.toString,v=Math.max,d=Math.min,g=function(){return p.Date.now()};function y(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=a.test(t);return l||u.test(t)?c(t.slice(2),l?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,a,u,c,l=0,f=!1,p=!1,s=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(t){var e=o,r=i;return o=i=void 0,l=t,a=n.apply(r,e)}function h(n){return l=n,u=setTimeout(O,t),f?m(n):a}function j(n){var e=n-c;return void 0===c||e>=t||e<0||p&&n-l>=r}function O(){var n=g();if(j(n))return T(n);u=setTimeout(O,function(n){var e=t-(n-c);return p?d(e,r-(n-l)):e}(n))}function T(n){return u=void 0,s&&o?m(n):(o=i=void 0,a)}function w(){var n=g(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===u)return h(c);if(p)return u=setTimeout(O,t),m(c)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,y(e)&&(f=!!e.leading,r=(p="maxWait"in e)?v(b(e.maxWait)||0,t):r,s="trailing"in e?!!e.trailing:s),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},w.flush=function(){return void 0===u?a:T(g())},w};var m=document.querySelector("#search-box"),h=n(e)((function(n){var t=n.target.value.trim();""!==t&&(e=t,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flag,languages\n")).then((function(n){if(!n)throw new Error(n.status);return n.json()}))).then(j);var e}),300);function j(n){!function(n){var t="",e=document.querySelector(".country-list");if(n.length<=10){for(var o=0;o<n.length;o++){var i=n[0].capital[0],r=n[0].population,a=n[0].name.official,u=Object.values(n[0].languages)[0],c=n[0].flag;t+="<li>\n        <h3>Country:".concat(a,"</h3>\n        <p>Flag:").concat(c,"</p>\n        <p>Capital:").concat(i,"</p>\n        <p>Population:").concat(r,"</p>\n        <p>Languages:").concat(u,"</p>\n      </li>\n    </ul>")}e.innerHTML=t}}(n),function(n){var t="",e=document.querySelector(".country-list");if(1===n.length){var o=n[0].capital[0],i=n[0].population,r=n[0].name.official,a=Object.values(n[0].languages)[0],u=n[0].flag;console.log(o),console.log(i),console.log(r),console.log(a),console.log(u);for(var c=0;c<n.length;c++)t+="<li>\n        <h3>Country:".concat(r,"</h3>\n        <p>Flag:").concat(u,"</p>\n        <p>Capital:").concat(o,"</p>\n        <p>Population:").concat(i,"</p>\n        <p>Languages:").concat(a,"</p>\n      </li>\n    </ul>");e.innerHTML=t}}(n)}m.addEventListener("input",h)}();
//# sourceMappingURL=index.d17a12c9.js.map
