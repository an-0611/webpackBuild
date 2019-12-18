!function(modules) {
    function webpackJsonpCallback(data) {
        for (var moduleId, chunkId, chunkIds = data[0], moreModules = data[1], executeModules = data[2], i = 0, resolves = []; i < chunkIds.length; i++) chunkId = chunkIds[i], 
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId] && resolves.push(installedChunks[chunkId][0]), 
        installedChunks[chunkId] = 0;
        for (moduleId in moreModules) Object.prototype.hasOwnProperty.call(moreModules, moduleId) && (modules[moduleId] = moreModules[moduleId]);
        for (parentJsonpFunction && parentJsonpFunction(data); resolves.length; ) resolves.shift()();
        return deferredModules.push.apply(deferredModules, executeModules || []), checkDeferredModules();
    }
    function checkDeferredModules() {
        for (var result, i = 0; i < deferredModules.length; i++) {
            for (var deferredModule = deferredModules[i], fulfilled = !0, j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                0 !== installedChunks[depId] && (fulfilled = !1);
            }
            fulfilled && (deferredModules.splice(i--, 1), result = __webpack_require__(__webpack_require__.s = deferredModule[0]));
        }
        return result;
    }
    var installedModules = {}, installedChunks = {
        0: 0
    }, deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "";
    var jsonpArray = window.webpackJsonp = window.webpackJsonp || [], oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback, jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ 27, 1 ]), checkDeferredModules();
}({
    27: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var react = __webpack_require__(0), react_default = __webpack_require__.n(react), react_dom = __webpack_require__(8), Helmet = __webpack_require__(9), Helmet_default = __webpack_require__.n(Helmet), styled_components_browser_esm = __webpack_require__(2);
        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            })(obj);
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _getPrototypeOf(o) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
        }
        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _setPrototypeOf(o, p) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                return o.__proto__ = p, o;
            })(o, p);
        }
        function _templateObject2() {
            var data = _taggedTemplateLiteral([ "\n    background: white;\n    border: 1px solid black;\n  " ]);
            return _templateObject2 = function() {
                return data;
            }, data;
        }
        function _templateObject() {
            var data = _taggedTemplateLiteral([ "\n  color: ", ";\n  text-align: center;\n  opaciy: 1;\n  ", ";\n" ]);
            return _templateObject = function() {
                return data;
            }, data;
        }
        function _taggedTemplateLiteral(strings, raw) {
            return raw = raw || strings.slice(0), Object.freeze(Object.defineProperties(strings, {
                raw: {
                    value: Object.freeze(raw)
                }
            }));
        }
        console.log(1 + 2);
        var Container = styled_components_browser_esm.b.div(_templateObject(), function(props) {
            return props.primary ? "green" : "red";
        }, function(props) {
            return props.primary && Object(styled_components_browser_esm.a)(_templateObject2());
        }), app = function() {
            function App(props) {
                var _this, self, call;
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, App), self = this, (_this = !(call = _getPrototypeOf(App).call(this, props)) || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call).state = {
                    value: 666
                }, _this.callValue = _this.callValue.bind(_assertThisInitialized(_this)), _this;
            }
            var Constructor, protoProps, staticProps;
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && _setPrototypeOf(subClass, superClass);
            }(App, react["Component"]), Constructor = App, (protoProps = [ {
                key: "callValue",
                value: function() {
                    alert(this.state.value);
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this;
                    return react_default.a.createElement(Container, {
                        prefetch: !0
                    }, react_default.a.createElement(Helmet_default.a, null, react_default.a.createElement("title", null, "helmet test"), react_default.a.createElement("meta", {
                        name: "description",
                        content: "desc ssr test"
                    })), react_default.a.createElement("div", {
                        className: "app"
                    }, "webpack 4 環境建制"), react_default.a.createElement(Container, {
                        primary: !0
                    }, react_default.a.createElement("div", null, "test"), react_default.a.createElement("button", {
                        onClick: function() {
                            _this2.callValue();
                        }
                    }, "callValue")));
                }
            } ]) && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), 
            App;
        }(), component = react_default.a.createElement(app, null);
        Object(react_dom.hydrate)(component, document.getElementById("app"));
    }
});