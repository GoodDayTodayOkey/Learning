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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SSR/server/createApp.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/App.tsx":
/*!*************************!*\
  !*** ./src/App/App.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar ErrorBoundary_1 = __webpack_require__(/*! ../Lessons/React/10.ErrorBoundary/ErrorBoundary */ \"./src/Lessons/React/10.ErrorBoundary/ErrorBoundary.tsx\");\nvar Parent_1 = __webpack_require__(/*! ../Lessons/React/15.RenderProps/Parent */ \"./src/Lessons/React/15.RenderProps/Parent.tsx\");\nvar Children_1 = __webpack_require__(/*! ../Lessons/React/15.RenderProps/Children */ \"./src/Lessons/React/15.RenderProps/Children.tsx\");\nvar ContactUs_1 = __webpack_require__(/*! ../Lessons/React/16.FinalForm/ContactUs */ \"./src/Lessons/React/16.FinalForm/ContactUs.tsx\");\nvar Name_1 = __webpack_require__(/*! ../Lessons/React/17.SSR/Name/Name */ \"./src/Lessons/React/17.SSR/Name/Name.tsx\");\nvar b = bem_cn_1.block('app');\nvar App = (function (_super) {\n    __extends(App, _super);\n    function App() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    App.prototype.render = function () {\n        var name = this.props.name;\n        return (React.createElement(\"div\", { className: b() },\n            React.createElement(React.StrictMode, null,\n                React.createElement(ErrorBoundary_1.default, null,\n                    React.createElement(\"div\", { id: 'menu' },\n                        React.createElement(Parent_1.default, { child: function (counter, onClick) { return React.createElement(Children_1.default, { counter: counter, onClick: onClick }); } }),\n                        React.createElement(ContactUs_1.default, null),\n                        React.createElement(Name_1.default, { name: name }))))));\n    };\n    return App;\n}(React.PureComponent));\nexports.default = App;\n\n\n//# sourceURL=webpack:///./src/App/App.tsx?");

/***/ }),

/***/ "./src/Lessons/React/10.ErrorBoundary/ErrorBoundary.tsx":
/*!**************************************************************!*\
  !*** ./src/Lessons/React/10.ErrorBoundary/ErrorBoundary.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('children');\nfunction logErrorToMyService(logError, logErrorInfo) {\n    console.log('logError', logError);\n    console.log('logErrorInfo', logErrorInfo);\n}\nvar ErrorBoundary = (function (_super) {\n    __extends(ErrorBoundary, _super);\n    function ErrorBoundary() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = { hasError: false, error: '' };\n        return _this;\n    }\n    ErrorBoundary.getDerivedStateFromError = function (error) {\n        console.log('error', error);\n        return { hasError: true };\n    };\n    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {\n        logErrorToMyService(error, errorInfo);\n    };\n    ErrorBoundary.prototype.render = function () {\n        var hasError = this.state.hasError;\n        if (hasError) {\n            return React.createElement(\"h1\", { className: b() }, \"\\u0411\\u043E\\u043A\\u0441 \\u043F\\u0435\\u0440\\u0435\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D!\");\n        }\n        return this.props.children;\n    };\n    return ErrorBoundary;\n}(React.PureComponent));\nexports.default = ErrorBoundary;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/10.ErrorBoundary/ErrorBoundary.tsx?");

/***/ }),

/***/ "./src/Lessons/React/15.RenderProps/Children.tsx":
/*!*******************************************************!*\
  !*** ./src/Lessons/React/15.RenderProps/Children.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('children');\nvar Children = (function (_super) {\n    __extends(Children, _super);\n    function Children() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Children.prototype.render = function () {\n        var _a = this.props, counter = _a.counter, onClick = _a.onClick;\n        return (React.createElement(\"div\", { className: b() },\n            \"\\u0414\\u043E\\u0447\\u0435\\u0440\\u043D\\u0438\\u0439 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \",\n            counter,\n            React.createElement(\"button\", { style: { display: 'block' }, onClick: onClick }, \"\\u0423\\u0432\\u0435\\u043B\\u0438\\u0447\\u0438\\u0442\\u044C \\u0441\\u0447\\u0435\\u0442\\u0447\\u0438\\u043A\")));\n    };\n    return Children;\n}(React.PureComponent));\nexports.default = Children;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/15.RenderProps/Children.tsx?");

/***/ }),

/***/ "./src/Lessons/React/15.RenderProps/Parent.tsx":
/*!*****************************************************!*\
  !*** ./src/Lessons/React/15.RenderProps/Parent.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('parent');\nvar Parent = (function (_super) {\n    __extends(Parent, _super);\n    function Parent() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = { counter: 0 };\n        _this.onClick = function () {\n            var counter = _this.state.counter;\n            _this.setState({ counter: counter + 1 });\n        };\n        return _this;\n    }\n    Parent.prototype.render = function () {\n        var child = this.props.child;\n        var counter = this.state.counter;\n        return (React.createElement(React.Fragment, null, child(counter, this.onClick)));\n    };\n    return Parent;\n}(React.PureComponent));\nexports.default = Parent;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/15.RenderProps/Parent.tsx?");

/***/ }),

/***/ "./src/Lessons/React/16.FinalForm/Button/Button.tsx":
/*!**********************************************************!*\
  !*** ./src/Lessons/React/16.FinalForm/Button/Button.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('button');\nvar Button = function (props) {\n    var type = props.type, text = props.text, disabled = props.disabled, form = props.form;\n    return (React.createElement(\"button\", { className: b(), type: type, disabled: disabled, onClick: form && form.reset }, text));\n};\nexports.default = Button;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/16.FinalForm/Button/Button.tsx?");

/***/ }),

/***/ "./src/Lessons/React/16.FinalForm/ContactUs.tsx":
/*!******************************************************!*\
  !*** ./src/Lessons/React/16.FinalForm/ContactUs.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar react_final_form_1 = __webpack_require__(/*! react-final-form */ \"react-final-form\");\nvar final_form_1 = __webpack_require__(/*! final-form */ \"final-form\");\nvar TextInput_1 = __webpack_require__(/*! ./TextInput/TextInput */ \"./src/Lessons/React/16.FinalForm/TextInput/TextInput.tsx\");\nvar TextArea_1 = __webpack_require__(/*! ./TextArea/TextArea */ \"./src/Lessons/React/16.FinalForm/TextArea/TextArea.tsx\");\nvar RadioInput_1 = __webpack_require__(/*! ./RadioInput/RadioInput */ \"./src/Lessons/React/16.FinalForm/RadioInput/RadioInput.tsx\");\nvar Button_1 = __webpack_require__(/*! ./Button/Button */ \"./src/Lessons/React/16.FinalForm/Button/Button.tsx\");\nvar b = bem_cn_1.block('contact-us');\nvar required = function (value) { return (value ? undefined : 'Required'); };\nvar ContactUs = (function (_super) {\n    __extends(ContactUs, _super);\n    function ContactUs() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.onSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {\n            var _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4, new Promise(function (resolve) { return setTimeout(resolve, 0); })\n                            .then(function () { return console.log(JSON.stringify(values)); })];\n                    case 1:\n                        _b.sent();\n                        if (Object.keys(values).length !== 3) {\n                            return [2, (_a = {}, _a[final_form_1.FORM_ERROR] = 'Какое то из полей не заполнено', _a)];\n                        }\n                        return [2];\n                }\n            });\n        }); };\n        return _this;\n    }\n    ContactUs.prototype.render = function () {\n        return (React.createElement(react_final_form_1.Form, { onSubmit: this.onSubmit, validate: function (values) {\n                var name = values.name, sex = values.sex, message = values.message;\n                return {\n                    name: !/[\\w+]/.test(name) ? 'Присутсвуют недопустимые символы' : undefined,\n                    message: !/\\w+/.test(message) ? 'Поле не заполенено' : undefined,\n                };\n            } }, function (props) {\n            var handleSubmit = props.handleSubmit, pristine = props.pristine, form = props.form, submitError = props.submitError;\n            return (React.createElement(\"div\", { className: b() },\n                React.createElement(\"form\", { onSubmit: handleSubmit },\n                    React.createElement(react_final_form_1.Field, { name: \"name\", type: \"text\", placeholder: \"Victor\" }, function (props) {\n                        var meta = props.meta;\n                        return (React.createElement(\"div\", null,\n                            React.createElement(TextInput_1.default, __assign({}, props)),\n                            meta.error && meta.touched && React.createElement(\"span\", null, meta.error)));\n                    }),\n                    React.createElement(\"div\", { className: b('sex') }, ['male', 'female'].map(function (text, i) { return React.createElement(\"label\", { key: i },\n                        text,\n                        React.createElement(react_final_form_1.Field, { name: \"sex\", type: \"radio\", value: text, validate: required }, function (props) {\n                            var meta = props.meta;\n                            return (React.createElement(React.Fragment, null,\n                                React.createElement(RadioInput_1.default, __assign({}, props)),\n                                meta.error && meta.touched && React.createElement(\"span\", null, meta.error)));\n                        })); })),\n                    React.createElement(react_final_form_1.Field, { name: \"message\", rows: 5, cols: 20 }, function (props) {\n                        var meta = props.meta;\n                        return (React.createElement(\"div\", null,\n                            React.createElement(TextArea_1.default, __assign({}, props)),\n                            meta.error && meta.touched && React.createElement(\"span\", null, meta.error)));\n                    }),\n                    React.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (_a) {\n                        var values = _a.values;\n                        return (React.createElement(\"pre\", null,\n                            \"\\u0422\\u0435\\u043A\\u0443\\u0449\\u0438\\u0435 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u044F:\",\n                            React.createElement(\"div\", { className: b('values') }, JSON.stringify(values, null, 2))));\n                    }),\n                    React.createElement(\"div\", { className: b('button') },\n                        React.createElement(Button_1.default, { type: \"submit\", text: \"\\u041E\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C \\u0444\\u043E\\u0440\\u043C\\u0443\", disabled: pristine })),\n                    React.createElement(\"div\", { className: b('button') },\n                        React.createElement(Button_1.default, { type: \"reset\", text: \"\\u041E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C \\u0444\\u043E\\u0440\\u043C\\u0443\", form: form, disabled: pristine })),\n                    submitError && React.createElement(\"div\", { className: b('error') }, submitError))));\n        }));\n    };\n    return ContactUs;\n}(React.PureComponent));\nexports.default = ContactUs;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/16.FinalForm/ContactUs.tsx?");

/***/ }),

/***/ "./src/Lessons/React/16.FinalForm/RadioInput/RadioInput.tsx":
/*!******************************************************************!*\
  !*** ./src/Lessons/React/16.FinalForm/RadioInput/RadioInput.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('radioInput');\nvar TextArea = function (props) {\n    var input = props.input;\n    return React.createElement(\"input\", __assign({}, input, { className: b() }));\n};\nexports.default = TextArea;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/16.FinalForm/RadioInput/RadioInput.tsx?");

/***/ }),

/***/ "./src/Lessons/React/16.FinalForm/TextArea/TextArea.tsx":
/*!**************************************************************!*\
  !*** ./src/Lessons/React/16.FinalForm/TextArea/TextArea.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('textArea');\nvar TextArea = function (props) {\n    var cols = props.cols, rows = props.rows, input = props.input;\n    return React.createElement(\"textarea\", __assign({}, input, { cols: cols, rows: rows, className: b() }));\n};\nexports.default = TextArea;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/16.FinalForm/TextArea/TextArea.tsx?");

/***/ }),

/***/ "./src/Lessons/React/16.FinalForm/TextInput/TextInput.tsx":
/*!****************************************************************!*\
  !*** ./src/Lessons/React/16.FinalForm/TextInput/TextInput.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('textInput');\nvar TextInput = function (props) {\n    var input = props.input, placeholder = props.placeholder;\n    return React.createElement(\"input\", __assign({}, input, { placeholder: placeholder, className: b() }));\n};\nexports.default = TextInput;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/16.FinalForm/TextInput/TextInput.tsx?");

/***/ }),

/***/ "./src/Lessons/React/17.SSR/Name/Name.tsx":
/*!************************************************!*\
  !*** ./src/Lessons/React/17.SSR/Name/Name.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar bem_cn_1 = __webpack_require__(/*! bem-cn */ \"bem-cn\");\nvar b = bem_cn_1.block('meeting-jsx');\nvar Name = function (props) {\n    var name = props.name;\n    return React.createElement(\"div\", { className: b() },\n        \"\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442, \",\n        name);\n};\nexports.default = Name;\n\n\n//# sourceURL=webpack:///./src/Lessons/React/17.SSR/Name/Name.tsx?");

/***/ }),

/***/ "./src/SSR/server/createApp.tsx":
/*!**************************************!*\
  !*** ./src/SSR/server/createApp.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDomServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar App_1 = __webpack_require__(/*! ../../App/App */ \"./src/App/App.tsx\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar app = express();\napp.use(cors());\napp.get('*', function (req, res, next) {\n    var markup = ReactDomServer.renderToString(React.createElement(App_1.default, { name: \"Victor\" }));\n    res.set('content-type', 'text/html');\n    res.send(\"\\n  <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Webpack App</title>\\n        <script src='/main.bundle.js' defer ></script>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n      </body>\\n    </html>\\n  \");\n    res.end();\n});\napp.listen(3000, function () {\n    console.log('Server is listening on port 3000');\n});\n\n\n//# sourceURL=webpack:///./src/SSR/server/createApp.tsx?");

/***/ }),

/***/ "bem-cn":
/*!*************************!*\
  !*** external "bem-cn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bem-cn\");\n\n//# sourceURL=webpack:///external_%22bem-cn%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "final-form":
/*!*****************************!*\
  !*** external "final-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"final-form\");\n\n//# sourceURL=webpack:///external_%22final-form%22?");

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

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-final-form\");\n\n//# sourceURL=webpack:///external_%22react-final-form%22?");

/***/ })

/******/ });