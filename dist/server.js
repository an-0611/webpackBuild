!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=(n(4),n(2)),a=n(1),i=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.helmet,n=e.appHtml;return o.a.createElement("html",{lang:"zh-TW"},o.a.createElement("head",null,t.title.toComponent(),t.meta.toComponent(),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge"})),o.a.createElement("body",{id:"body"},o.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("script",{type:"text/javascript",src:"vendors~bundle.js"}),o.a.createElement("script",{type:"text/javascript",src:"bundle.js"})))}}])&&u(n.prototype,r),c&&u(n,c),t}(r.Component),b=n(3),m=n.n(b);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(){var e=S(["\n    background: white;\n    border: 1px solid black;\n  "]);return j=function(){return e},e}function E(){var e=S(["\n  color: ",";\n  text-align: center;\n  opaciy: 1;\n  ",";\n"]);return E=function(){return e},e}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}console.log(1+2);var w=m.a.div(E(),(function(e){return e.primary?"green":"red"}),(function(e){return e.primary&&Object(b.css)(j())})),_=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=h(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?O(r):o).state={value:666},n.callValue=n.callValue.bind(O(n)),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"callValue",value:function(){alert(this.state.value)}},{key:"render",value:function(){var e=this;return o.a.createElement(w,{prefetch:!0},o.a.createElement(i.a,null,o.a.createElement("title",null,"React Helmet SSR"),o.a.createElement("meta",{name:"description",content:"description ssr"})),o.a.createElement("div",{className:"app"},"webpack 4 環境建制"),o.a.createElement(w,{primary:!0},o.a.createElement("div",null,"test123"),o.a.createElement("button",{onClick:function(){e.callValue()}},"callValue")))}}])&&v(n.prototype,r),c&&v(n,c),t}(r.Component),x=n(5),P=x(),T=process.env.PORT||8080;if(process.env.PORT)try{P.get("/",(function(e,t){try{var n=a.Helmet.renderStatic(),r=Object(c.renderToString)(o.a.createElement(_,null));t.send("<!doctype html>\n".concat(Object(c.renderToStaticMarkup)(o.a.createElement(y,{helmet:n,appHtml:r}))))}catch(e){console.log(e)}})),P.listen(T,(function(e){e?console.error(e):console.log("伺服器已啟動在 port %s",T)}))}catch(e){console.log(e)}else{console.log("本機伺服器啟動");try{P.get("/",(function(e,t){try{P.use("/",x.static("dist"));var n=a.Helmet.renderStatic(),r=Object(c.renderToString)(o.a.createElement(_,null));t.send("<!doctype html>\n".concat(Object(c.renderToStaticMarkup)(o.a.createElement(y,{helmet:n,appHtml:r}))))}catch(e){console.log(e)}})),P.listen(T,"0.0.0.0",(function(e){e?console.error(e):console.log("伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看",T,"0.0.0.0",T)}))}catch(e){console.log("serverErrorCatch: ",e)}}}]);