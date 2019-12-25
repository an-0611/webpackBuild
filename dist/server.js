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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/html */ \"./src/html.js\");\n/* harmony import */ var _src_components_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/app */ \"./src/components/app.js\");\n\n // const config = require('./webpack.config.js')\n// __dirname：總是返回被執行的js所在文件夾的絕對路徑\n// __filename：總是返回被執行的js的絕對路徑\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\nvar port = process.env.PORT || 8080; // 用docker 時換成8080,  webpack output記得改   \n// const host = process.env.PORT ? null : '0.0.0.0';\n\n\n // how to set server.js to read es6  // 把server 拉到跟entry ./src/index.js 同一層 // dockerfile && package.json server.js's router also need to change\n\n // 使用 import 需先編譯打包至dist 開啟的server 路徑也改成 ./dist/server.js\n\n\n\nif (process.env.PORT) {\n  try {\n    app.get('/', function (req, res) {\n      try {\n        app.use('/', express[\"static\"]('dist'));\n        var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"].renderStatic();\n        var appHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)); // var bundles = [];\n\n        res.send(\"<!doctype html>\\n\".concat(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToStaticMarkup\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          helmet: helmet,\n          appHtml: appHtml\n        }))));\n      } catch (err) {\n        console.log(err);\n      }\n    });\n    app.listen(port, function (error) {\n      if (error) {\n        console.error(error);\n      } else {\n        console.log('伺服器已啟動在 port %s', port);\n      }\n    });\n  } catch (err) {\n    console.log(err);\n  }\n} else {\n  console.log('本機伺服器啟動');\n  var host = '0.0.0.0'; // app.use(path, router) router 代表一個由express.Router()創建的對象 可定義多個路由規則\n  // app.get() // 當只有一個規則時 用app.get()直接回掉function 即可\n  // const compiler = webpack(config);\n  // app.use(webpackDevMiddleware(compiler, { // app.use() =< 此方法是宣告使用一個路由，變數 index 就是引入 routers 資料夾裡的 index.route 檔案，該路徑詳細內容就在該文件中編輯。\n  //   noInfo: true,\n  //   publicPath: config.output.publicPath\n  // })) \n  // app.use(webpackHotMiddleware(compiler))\n  // app.get('/', function(req, res) {\n  //   // res.sendFile(__dirname + './dist/index.html')\n  //   res.sendFile(__dirname + '/index.html')\n  // })\n\n  try {\n    // app.use('/', express.static('dist')); // 放外面 css 就失效 ssr 也跟著壞 路徑改成只抓css? stylecomponent class 還在但失效\n    // app.use(express.static('dist')); // 有用middleware 使用app.use 反之 app.get\n    app.get('/', function (req, res) {\n      // step2\n      try {\n        app.use('/', express[\"static\"]('dist')); // step3 // 完成server 渲染<Html> , 需要把client side 靜態資源復原 (client.bundle.js || css) 取代<Html內容> 但事件消失 hydrate 也沒用\n        // 把client side 資源載進來 bundle.js server side render 才吃得到伺服器第一次渲染資料 但放在裡面後 css 會失效 (不確定是不是stylecomponent問題) css 改成由html.js 引入\n        // res.send is only on express server 只能調用一次 // 用於本機測試server 無論dev or production // 上傳至heroku or aws 會走上面 process.env.PORT的code\n\n        var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"].renderStatic();\n        var appHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)); // 提供給 express.static 函數的路徑，是相對於您從中啟動 node 程序的目錄。如果您是從另一個目錄執行 Express 應用程式，保險作法是使用您想提供之目錄的絕對路徑\n        // https://expressjs.com/zh-tw/starter/static-files.html\n        // renderToStaticMarku 可能造成換閃一下 // https://www.jishuwen.com/d/2BoD/zh-tw\n\n        res.send(\"<!doctype html>\\n\".concat(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToStaticMarkup\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          helmet: helmet,\n          appHtml: appHtml // 資料已經帶進去但server side 尚未render // test express router\n          // https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/\n          // https://github.com/jakoblind/universal-react-server-bundle\n          // https://medium.com/@slashtu/react-loadable-ssr-and-code-splitting-ede5b31baf35\n\n        }))));\n      } catch (err) {\n        console.log(err);\n      }\n    });\n    app.listen(port, host, function (error) {\n      if (error) {\n        console.error(error);\n      } else {\n        console.log('伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看', port, host, port);\n      }\n    });\n  } catch (err) {\n    console.log('serverErrorCatch: ', err);\n  }\n} // can reference \n// https://iter01.com/11212.html\n// https://github.com/jakoblind/universal-react-server-bundle/blob/master/server.js\n// !!!\n// https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/\n// webpack build from 0 to 1\n// https://segmentfault.com/a/1190000015490721\n// React Loadable\n// https://medium.com/@slashtu/react-loadable-ssr-and-code-splitting-ede5b31baf35\n// React-Webpack4-Babel-setup(github repo)\n// https://github.com/BusiRaja/React-Webpack4-Babel-Setup\n// most compeleted CICD (contain docker aws nodejs github circleCI...)\n// https://blog.amowu.com/2015/04/devops-continuous-integration-delivery-docker-circleci-aws-beanstalk.html\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\nfunction add(a, b) {\n  return a + b;\n}\nfunction subtract(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/index */ \"./src/common/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    background: white;\\n    border: 1px solid black;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  color: \", \";\\n  text-align: center;\\n  opaciy: 1;\\n  \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nconsole.log(Object(_common_index__WEBPACK_IMPORTED_MODULE_3__[\"add\"])(1, 2));\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (props) {\n  return props.primary ? 'green' : 'red';\n}, function (props) {\n  return props.primary && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject2());\n}); // https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      value: 666\n    };\n    _this.callValue = _this.callValue.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"callValue\",\n    value: function callValue() {\n      alert(this.state.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {\n        prefetch: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React Helmet SSR\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"description ssr\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"app\"\n      }, \"webpack 4 \\u74B0\\u5883\\u5EFA\\u5236\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {\n        primary: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"test123\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.callValue();\n        }\n      }, \"callValue\"))) // npm run git -- \"\" && postgit\n      // npm run git -- \"update css module\" && postgit\n      // 測試 build 好的檔案 'test': npm run build && mocha --compilers js:babel-core/register\n      // docker deploy => npm run build && docker-compose up -d https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/188625/\n      // dockerfile setting https://www.jinnsblog.com/2018/12/docker-dockerfile-guide.html\n      ;\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Html =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Html, _Component);\n\n  function Html() {\n    _classCallCheck(this, Html);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Html).apply(this, arguments));\n  }\n\n  _createClass(Html, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          helmet = _this$props.helmet,\n          appHtml = _this$props.appHtml;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n        lang: \"zh-TW\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, helmet.title.toComponent(), helmet.meta.toComponent(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        httpEquiv: \"x-ua-compatible\",\n        content: \"IE=edge\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", {\n        id: \"body\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"app\",\n        dangerouslySetInnerHTML: {\n          __html: appHtml\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n        type: \"text/javascript\",\n        src: \"vendors~bundle.js\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n        type: \"text/javascript\",\n        src: \"bundle.js\"\n      })));\n    }\n  }]);\n\n  return Html;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Html);\n\n//# sourceURL=webpack:///./src/html.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ })

/******/ });