(window["webpackJsonp_progress_bars"] = window["webpackJsonp_progress_bars"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_progress_bars"] = window["webpackJsonp_progress_bars"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;




var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // new attributes
  layout: {
    type: "string",
    "default": "line"
  },
  wrapperAlign: {
    type: "string",
    "default": "center"
  },
  title: {
    type: "string",
    "default": __("Progress Bar", "progress-bar")
  },
  titleTag: {
    type: "string",
    "default": "div"
  },
  progress: {
    type: "number",
    "default": 50
  },
  displayProgress: {
    type: "boolean",
    "default": true
  },
  animationDuration: {
    type: "number",
    "default": 1500
  },
  titleColor: {
    type: "string"
  },
  counterColor: {
    type: "string"
  },
  progressColor: {
    type: "string",
    "default": "#000000"
  },
  isProgressGradient: {
    type: "boolean",
    "default": false
  },
  progressGradient: {
    type: "string"
  },
  showInline: {
    type: "boolean",
    "default": false
  },
  backgroundColor: {
    type: "string"
  },
  showStripe: {
    type: "boolean",
    "default": false
  },
  stripeAnimation: {
    type: "string",
    "default": "none"
  },
  strokeColor: {
    type: "string",
    "default": "#eaeaea"
  },
  prefix: {
    type: "string",
    "default": __("Prefix", "progress-bar")
  },
  suffix: {
    type: "string",
    "default": __("Postfix", "progress-bar")
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyAttributes"])(Object.values(_constants_typographyConstants__WEBPACK_IMPORTED_MODULE_0__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["PROGRESSBAR_WIDTH"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["PROGRESSBAR_HEIGHT"], {
  defaultRange: 12,
  noUnits: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["PROGRESSBAR_SIZE"], {
  defaultRange: 200,
  noUnits: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["STROKE_WIDTH"], {
  defaultRange: 12,
  noUnits: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BOX_HEIGHT"], {
  defaultRange: 200,
  noUnits: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeAttributes"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BOX_WIDTH"], {
  defaultRange: 140,
  noUnits: true
}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: LAYOUT, CONTAINER_CLASS, WRAPPER_CLASS, STRIPE_CLASS, PX_PERCENTAGE, PROGRESSBAR_WIDTH, PROGRESSBAR_HEIGHT, PROGRESSBAR_SIZE, STROKE_WIDTH, BOX_WIDTH, BOX_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT", function() { return LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_CLASS", function() { return CONTAINER_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAPPER_CLASS", function() { return WRAPPER_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_CLASS", function() { return STRIPE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PX_PERCENTAGE", function() { return PX_PERCENTAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESSBAR_WIDTH", function() { return PROGRESSBAR_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESSBAR_HEIGHT", function() { return PROGRESSBAR_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESSBAR_SIZE", function() { return PROGRESSBAR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STROKE_WIDTH", function() { return STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_WIDTH", function() { return BOX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_HEIGHT", function() { return BOX_HEIGHT; });
var __ = wp.i18n.__;
var LAYOUT = [{
  label: __("Line"),
  value: "line"
}, {
  label: __("Line Rainbow"),
  value: "line_rainbow"
}, {
  label: __("Circle"),
  value: "circle"
}, {
  label: __("Circle Fill"),
  value: "circle_fill"
}, {
  label: __("Half Circle"),
  value: "half_circle"
}, {
  label: __("Half Circle Fill"),
  value: "half_circle_fill"
}, {
  label: __("Box"),
  value: "box"
}];
var CONTAINER_CLASS = {
  line: "line",
  line_rainbow: "line",
  circle: "circle",
  circle_fill: "circle",
  half_circle: "circle",
  half_circle_fill: "circle",
  box: "box"
};
var WRAPPER_CLASS = {
  line: "eb-progressbar-line",
  line_rainbow: "eb-progressbar-line eb-progressbar-line-rainbow",
  circle: "eb-progressbar-circle",
  circle_fill: "eb-progressbar-circle eb-progressbar-circle-fill",
  half_circle: "eb-progressbar-half-circle",
  half_circle_fill: "eb-progressbar-half-circle eb-progressbar-half-circle-fill",
  box: "eb-progressbar-box"
};
var STRIPE_CLASS = {
  none: "eb-progressbar-line-stripe",
  normal: "eb-progressbar-line-stripe eb-progressbar-line-animate",
  reverse: "eb-progressbar-line-stripe eb-progressbar-line-animate-rtl"
};
var PX_PERCENTAGE = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}]; // responsive range controll

var PROGRESSBAR_WIDTH = "wrpWidth";
var PROGRESSBAR_HEIGHT = "wrpHeight";
var PROGRESSBAR_SIZE = "wrpSize";
var STROKE_WIDTH = "stkWidth";
var BOX_WIDTH = "boxWidth";
var BOX_HEIGHT = "boxHeight";

/***/ }),

/***/ "./src/constants/typographyConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/typographyConstants.js ***!
  \**********************************************/
/*! exports provided: typoPrefix_title, typoPrefix_counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_counter", function() { return typoPrefix_counter; });
var typoPrefix_title = "titleText";
var typoPrefix_counter = "counterText";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.editor.RichText;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    useBlockProps = _wp$blockEditor.useBlockProps;
var select = wp.data.select;
/**
 * Internal depenencies
 */






function Edit(props) {
  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var circle_half_left = useRef(null);
  var circle_half_right = useRef(null);
  var circle_pie = useRef(null);
  var line = useRef(null);
  var circle_half = useRef(null);
  var box = useRef(null);
  var blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      resOption = attributes.resOption,
      layout = attributes.layout,
      wrapperAlign = attributes.wrapperAlign,
      titleTag = attributes.titleTag,
      progress = attributes.progress,
      displayProgress = attributes.displayProgress,
      animationDuration = attributes.animationDuration,
      backgroundColor = attributes.backgroundColor,
      title = attributes.title,
      progressColor = attributes.progressColor,
      isProgressGradient = attributes.isProgressGradient,
      progressGradient = attributes.progressGradient,
      showStripe = attributes.showStripe,
      stripeAnimation = attributes.stripeAnimation,
      titleColor = attributes.titleColor,
      counterColor = attributes.counterColor,
      showInline = attributes.showInline,
      strokeColor = attributes.strokeColor,
      prefix = attributes.prefix,
      suffix = attributes.suffix;
  useEffect(function () {
    if (layout == "line" || layout === "line_rainbow") {
      line.current.style.width = "unset";
    } else if (layout === "box") {
      box.current.style.height = "unset";
    } else if (layout === "circle" || layout === "circle_fill") {
      circle_half_left.current.style.transform = "rotate(0deg)";
      circle_pie.current.style.clipPath = "";
      circle_half_right.current.style.visibility = "";
    } else if (layout === "half_circle" || layout === "half_circle_fill") {
      circle_half.current.style.transform = "rotate(0deg)";
      circle_half.current.style.transition = "none";
    }

    var id = "";

    var changeWidthEffect = function changeWidthEffect() {
      var i = 0;

      if (i == 0) {
        var ebChangeframe = function ebChangeframe() {
          if (layout === "circle" || layout === "circle_fill") {
            if (width > 180) {
              circle_pie.current.style.clipPath = "inset(0)";
              circle_half_right.current.style.visibility = "visible";
            } else {
              circle_pie.current.style.clipPath = "";
              circle_half_right.current.style.visibility = "";
            }
          }

          if (width >= value) {
            clearInterval(id);
            i = 0;
          } else {
            width++;

            if (layout == "line" || layout === "line_rainbow") {
              line.current.style.width = width + "%";
            } else if (layout === "box") {
              box.current.style.height = width + "%";
            }

            if (layout === "circle" || layout === "circle_fill") {
              circle_half_left.current.style.transform = "rotate(" + width + "deg)";
            } else if (layout === "half_circle" || layout === "half_circle_fill") {
              circle_half.current.style.transform = "rotate(" + width + "deg)";
            }
          }
        };

        i = 1;
        var width = 0;
        var value = progress;

        if (layout === "circle" || layout === "circle_fill") {
          value = progress * 3.6;
        } else if (layout === "half_circle" || layout === "half_circle_fill") {
          value = progress * 1.8;
        }

        id = setInterval(ebChangeframe, 10);
      }
    };

    var progressSetTimeout = setTimeout(changeWidthEffect, 500);
    return function () {
      clearInterval(id);
      clearTimeout(progressSetTimeout);
    };
  }, [layout, progress]); // progress bar width

  var _generateResponsiveRa = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["PROGRESSBAR_WIDTH"],
    property: "width",
    attributes: attributes
  }),
      progressBarWidthDesktop = _generateResponsiveRa.rangeStylesDesktop,
      progressBarWidthTab = _generateResponsiveRa.rangeStylesTab,
      progressBarWidthMobile = _generateResponsiveRa.rangeStylesMobile; // progress bar height


  var _generateResponsiveRa2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["PROGRESSBAR_HEIGHT"],
    property: "height",
    attributes: attributes,
    customUnit: "px"
  }),
      progressBarHeightDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      progressBarHeightTab = _generateResponsiveRa2.rangeStylesTab,
      progressBarHeightMobile = _generateResponsiveRa2.rangeStylesMobile; // stroke width


  var _generateResponsiveRa3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["STROKE_WIDTH"],
    property: "border-width",
    attributes: attributes,
    customUnit: "px"
  }),
      strokeWidthDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      strokeWidthTab = _generateResponsiveRa3.rangeStylesTab,
      strokeWidthMobile = _generateResponsiveRa3.rangeStylesMobile; // circle progressbar width


  var _generateResponsiveRa4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["PROGRESSBAR_SIZE"],
    property: "width",
    attributes: attributes,
    customUnit: "px"
  }),
      circleWidthDesktop = _generateResponsiveRa4.rangeStylesDesktop,
      circleWidthTab = _generateResponsiveRa4.rangeStylesTab,
      circleWidthMobile = _generateResponsiveRa4.rangeStylesMobile; // circle progressbar height


  var _generateResponsiveRa5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["PROGRESSBAR_SIZE"],
    property: "height",
    attributes: attributes,
    customUnit: "px"
  }),
      circleHeightDesktop = _generateResponsiveRa5.rangeStylesDesktop,
      circleHeightTab = _generateResponsiveRa5.rangeStylesTab,
      circleHeightMobile = _generateResponsiveRa5.rangeStylesMobile; // box progressbar height


  var _generateResponsiveRa6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["BOX_HEIGHT"],
    property: "height",
    attributes: attributes,
    customUnit: "px"
  }),
      boxHeightDesktop = _generateResponsiveRa6.rangeStylesDesktop,
      boxHeightTab = _generateResponsiveRa6.rangeStylesTab,
      boxHeightMobile = _generateResponsiveRa6.rangeStylesMobile; // box progressbar width


  var _generateResponsiveRa7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"])({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_2__["BOX_WIDTH"],
    property: "width",
    attributes: attributes,
    customUnit: "px"
  }),
      boxWidthDesktop = _generateResponsiveRa7.rangeStylesDesktop,
      boxWidthTab = _generateResponsiveRa7.rangeStylesTab,
      boxWidthMobile = _generateResponsiveRa7.rangeStylesMobile; // title typography


  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_3__["typoPrefix_title"]
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile; // counter typography


  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_3__["typoPrefix_counter"]
  }),
      counterTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      counterTypoStylesTab = _generateTypographySt2.typoStylesTab,
      counterTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var desktopStyles = "\n\t\t.".concat(blockId, " .eb-progressbar-line {\n\t\t\t").concat(progressBarHeightDesktop, "\n\t\t\tbackground-color: ").concat(strokeColor || "transparent", ";\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t\t").concat(circleHeightDesktop, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle-half {\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t\tborder-color: ").concat(progressColor, ";\n\t\t\ttransition: rotate 1500ms linear;\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightDesktop, "\n\t\t\t").concat(isProgressGradient ? "background: " + progressGradient : "background-color: " + progressColor, ";\n\t\t\ttransition-duration: ").concat(animationDuration, "ms;\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthDesktop, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesDesktop, "\n\t\t\tcolor: ").concat(titleColor, ";\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesDesktop, "\n\t\t\tcolor: ").concat(counterColor, ";\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\tbackground-color: ").concat(backgroundColor, ";\n\t\t\tborder-color: ").concat(strokeColor || "transparent", ";\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-half-circle {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t\theight: calc(").concat(circleWidthDesktop.replace(/\D/g, "") / 2, " * 1px);\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightDesktop, "\n\t\t\t").concat(boxWidthDesktop, "\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t\tbackground-color: ").concat(backgroundColor || "transparent", ";\n\t\t\tborder-color: ").concat(strokeColor || "transparent", ";\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-box-fill {\n\t\t\t").concat(isProgressGradient ? "background: " + progressGradient : "background-color: " + progressColor, ";\n\t\t\ttransition-duration: ").concat(animationDuration, "ms;\n\t\t}\n \t");
  var tabStyles = "\n\t\t.".concat(blockId, " .eb-progressbar-line, .").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthTab, "\n\t\t\t").concat(circleHeightTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\t").concat(strokeWidthTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthTab, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightTab, "\n\t\t\t").concat(boxWidthTab, "\n\t\t\t").concat(strokeWidthTab, "\n\t\t}\n\t");
  var mobileStyles = "\n\t\t.".concat(blockId, " .eb-progressbar-line, .").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthMobile, "\n\t\t\t").concat(circleHeightMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\t").concat(strokeWidthMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthMobile, "\n\t\t}\n\n\t\t.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightMobile, "\n\t\t\t").concat(boxWidthMobile, "\n\t\t\t").concat(strokeWidthMobile, "\n\t\t}\n\t");
  var inlineStyle = "";

  if (showInline) {
    inlineStyle = "\n\t\t\t.".concat(blockId, " .eb-progressbar-line-container {\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.").concat(blockId, " .eb-progressbar-line-container .eb-progressbar-title {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 9;\n\t\t\t}\n\n\t\t\t.").concat(blockId, " .eb-progressbar-line-container .eb-progressbar-line .eb-progressbar-count-wrap {\n\t\t\t\tbottom: 50% !important;\n\t\t\t\ttransform: translateY(50%) !important;\n\t\t\t}\n\t\t");
  } // all css styles for large screen width (desktop/laptop) in strings ⬇


  var desktopAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["isCssExists"])(desktopStyles) ? desktopStyles : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["isCssExists"])(inlineStyle) ? inlineStyle : " ", "\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["isCssExists"])(tabStyles) ? tabStyles : " ", "\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["isCssExists"])(mobileStyles) ? mobileStyles : " ", "\n\t")); // Set All Style in "blockMeta" Attribute

  useEffect(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating an unique id for each block's unique className by a random unique number

  useEffect(function () {
    var BLOCK_PREFIX = "eb-price-table";
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["duplicateBlockIdFix"])({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: select,
      clientId: clientId
    });
  }, []); // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["mimmikCssForPreviewBtnClick"])({
      domObj: document,
      select: select
    });
  }, []);
  var blockProps = useBlockProps({
    className: "eb-guten-block-main-parent-wrapper"
  });
  var stripeClass = showStripe ? " " + _constants__WEBPACK_IMPORTED_MODULE_2__["STRIPE_CLASS"][stripeAnimation] : "";
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
    value: wrapperAlign,
    onChange: function onChange(wrapperAlign) {
      return setAttributes({
        wrapperAlign: wrapperAlign
      });
    }
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t ".concat(desktopAllStyles, "\n \n\t\t\t\t /* mimmikcssStart */\n \n\t\t\t\t ").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t ").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n \n\t\t\t\t /* mimmikcssEnd */\n \n\t\t\t\t @media all and (max-width: 1024px) {\t\n \n\t\t\t\t\t /* tabcssStart */\t\t\t\n\t\t\t\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t /* tabcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t \n\t\t\t\t @media all and (max-width: 767px) {\n\t\t\t\t\t \n\t\t\t\t\t /* mobcssStart */\t\t\t\n\t\t\t\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t /* mobcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t ")), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-wrapper ".concat(blockId)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["CONTAINER_CLASS"][layout], "-container ").concat(wrapperAlign)
  }, (layout === "line" || layout === "line_rainbow") && title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar ".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["WRAPPER_CLASS"][layout]).concat(stripeClass)
  }, (layout === "circle" || layout === "circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-pie",
    ref: circle_pie
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-half-left eb-progressbar-circle-half",
    ref: circle_half_left
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-half-right eb-progressbar-circle-half",
    ref: circle_half_right
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-inner"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-inner-content"
  }, title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    className: "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    className: "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    className: "postfix"
  }, "%")))), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-pie"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-half",
    ref: circle_half
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-inner"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-circle-inner-content"
  }, /*#__PURE__*/React.createElement(attributes.titleTag, {
    className: "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    className: "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    className: "postfix"
  }, "%")))), (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%")), /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-line-fill",
    ref: line
  })), layout === "box" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-box-inner-content"
  }, /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%"))), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-box-fill",
    ref: box
  }))), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-half-circle-after"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-prefix-label"
  }, prefix), /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-postfix-label"
  }, suffix))))))];
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    title: "Progress"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-progress",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.315",
    y1: "4.167",
    x2: "12.315",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.8,45.771c1.027,1.637,2.24,3.162,3.606,4.536l1.424-1.408 c-1.261-1.269-2.381-2.678-3.329-4.188L9.8,45.771z",
    fill: "url(#SVGID_1__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.592",
    y1: "4.167",
    x2: "7.592",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M6.003,34.906c0.215,1.923,0.646,3.823,1.283,5.646l1.894-0.658 c-0.588-1.682-0.985-3.435-1.183-5.209L6.003,34.906z",
    fill: "url(#SVGID_2__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.586",
    y1: "4.167",
    x2: "7.586",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.173,24.127l-1.894-0.656C6.643,25.295,6.213,27.196,6,29.121l1.994,0.219 C8.19,27.563,8.587,25.81,9.173,24.127z",
    fill: "url(#SVGID_3__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.299",
    y1: "4.167",
    x2: "12.299",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M14.813,15.115l-1.426-1.406c-1.364,1.374-2.576,2.901-3.602,4.538l1.7,1.061 C12.433,17.796,13.552,16.385,14.813,15.115z",
    fill: "url(#SVGID_4__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.846",
    y1: "4.167",
    x2: "20.846",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23.789,9.403l-0.676-1.883c-1.821,0.65-3.574,1.509-5.211,2.551l1.079,1.686 C20.493,10.795,22.11,10.003,23.789,9.403z",
    fill: "url(#SVGID_5__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.869",
    y1: "4.167",
    x2: "20.869",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.924,53.942c1.64,1.04,3.395,1.896,5.215,2.546l0.676-1.883 c-1.68-0.6-3.3-1.39-4.813-2.351L17.924,53.942z",
    fill: "url(#SVGID_6__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "43.399",
    y1: "4.167",
    x2: "43.399",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31.921,6c-1.042,0-2.093,0.063-3.124,0.185l0.237,1.986C29.988,8.058,30.958,8,31.921,8 c13.274,0,24.073,10.767,24.073,24S45.195,56,31.921,56c-0.963,0-1.934-0.058-2.887-0.171l-0.237,1.986 C29.828,57.938,30.879,58,31.921,58C46.302,58,58,46.337,58,32S46.302,6,31.921,6z",
    fill: "url(#SVGID_7__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "31.921",
    y1: "20.667",
    x2: "31.921",
    y2: "45.235",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M27.908,41.937c-1.028,0-2.056-0.391-2.839-1.171l-7.606-7.583l2.837-2.828l7.606,7.583 l15.636-15.583l2.837,2.828l-15.63,15.583C29.965,41.546,28.937,41.937,27.908,41.937z",
    fill: "url(#SVGID_8__48178)"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/example.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;






registerBlockType("progress-bars/progress-bar-block", {
  title: __("Progress Bars", "progress-bars"),
  description: __("Make your website interactive with stunning progress bar", "progress-bars"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _util_faIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/faIcons */ "./util/faIcons.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/responsive-range-control */ "./util/responsive-range-control/index.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _util_border_shadow_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/border-shadow-control */ "./util/border-shadow-control/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var useEffect = wp.element.useEffect;
var InspectorControls = wp.blockEditor.InspectorControls;
var select = wp.data.select;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl,
    NumberControl = _wp$components.NumberControl,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    TabPanel = _wp$components.TabPanel;













var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
      layout = attributes.layout,
      wrapperAlign = attributes.wrapperAlign,
      title = attributes.title,
      titleTag = attributes.titleTag,
      progress = attributes.progress,
      displayProgress = attributes.displayProgress,
      animationDuration = attributes.animationDuration,
      titleColor = attributes.titleColor,
      counterColor = attributes.counterColor,
      progressColor = attributes.progressColor,
      isProgressGradient = attributes.isProgressGradient,
      progressGradient = attributes.progressGradient,
      showInline = attributes.showInline,
      backgroundColor = attributes.backgroundColor,
      showStripe = attributes.showStripe,
      stripeAnimation = attributes.stripeAnimation,
      strokeColor = attributes.strokeColor,
      prefix = attributes.prefix,
      suffix = attributes.suffix; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["mimmikCssForResBtns"])({
      domObj: document,
      resOption: resOption
    });
  }, [resOption]); // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

  useEffect(function () {
    var cleanUp = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["mimmikCssOnPreviewBtnClickWhileBlockSelected"])({
      domObj: document,
      select: select,
      setAttributes: setAttributes
    });
    return function () {
      cleanUp();
    };
  }, []);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  return /*#__PURE__*/React.createElement(InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Styles",
      className: "eb-tab styles"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls " + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Layout")
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Layout", "progress-bars"),
      value: layout,
      options: _constants__WEBPACK_IMPORTED_MODULE_9__["LAYOUT"],
      onChange: function onChange(newLayout) {
        return setAttributes({
          layout: newLayout
        });
      }
    }), layout === "line" && /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Inline", "progress-bar"),
      checked: showInline,
      onChange: function onChange() {
        setAttributes({
          showInline: !showInline
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(TextControl, {
      label: __("Title", "progress-bars"),
      value: title,
      onChange: function onChange(newTitle) {
        return setAttributes({
          title: newTitle
        });
      }
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Title HTML Tag", "progress-bars"),
      value: titleTag,
      options: [{
        label: "H1",
        value: "h1"
      }, {
        label: "H2",
        value: "h2"
      }, {
        label: "H3",
        value: "h3"
      }, {
        label: "H4",
        value: "h4"
      }, {
        label: "H5",
        value: "h5"
      }, {
        label: "H6",
        value: "h6"
      }, {
        label: "div",
        value: "div"
      }, {
        label: "span",
        value: "span"
      }, {
        label: "p",
        value: "p"
      }],
      onChange: function onChange(newTitleTag) {
        return setAttributes({
          titleTag: newTitleTag
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
      label: __("Counter Value", "progress-bar"),
      value: progress,
      onChange: function onChange(progress) {
        return setAttributes({
          progress: progress
        });
      },
      step: 1,
      min: 0,
      max: 100
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Counter?", "progress-bar"),
      checked: displayProgress,
      onChange: function onChange() {
        setAttributes({
          displayProgress: !displayProgress
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
      label: __("Animation Duration", "progress-bar"),
      value: animationDuration,
      onChange: function onChange(newAnimationDuration) {
        return setAttributes({
          animationDuration: newAnimationDuration
        });
      },
      step: 100,
      min: 1000,
      max: 10000
    }), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(TextControl, {
      label: __("Prefix", "progress-bars"),
      value: prefix,
      onChange: function onChange(newPrefix) {
        return setAttributes({
          prefix: newPrefix
        });
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __("Suffix", "progress-bars"),
      value: suffix,
      onChange: function onChange(newSuffix) {
        return setAttributes({
          suffix: newSuffix
        });
      }
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __("General", "progress-bar")
    }, (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Width", "pregress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["PROGRESSBAR_WIDTH"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_9__["PX_PERCENTAGE"],
      min: 100,
      max: 1000,
      step: 1
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Height", "progress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["PROGRESSBAR_HEIGHT"],
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Background Color", "progress-bar"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    }), layout !== "line_rainbow" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Fill Color", "progress-bar"))), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Fill Gradient", "progress-bar"),
      checked: isProgressGradient,
      onChange: function onChange() {
        setAttributes({
          isProgressGradient: !isProgressGradient
        });
      }
    }), isProgressGradient || /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Color", "progress-bar"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), isProgressGradient && /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: __("Gradient Color", "progress-bar"),
      color: progressGradient,
      onChange: function onChange(progressGradient) {
        return setAttributes({
          progressGradient: progressGradient
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Stripe", "progress-bar"),
      checked: showStripe,
      onChange: function onChange() {
        setAttributes({
          showStripe: !showStripe
        });
      }
    }), showStripe && /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Stripe Animation", "progress-bars"),
      value: stripeAnimation,
      options: [{
        label: "Left To Right",
        value: "normal"
      }, {
        label: "Right To Left",
        value: "reverse"
      }, {
        label: "Disabled",
        value: "none"
      }],
      onChange: function onChange(stripeAnimation) {
        return setAttributes({
          stripeAnimation: stripeAnimation
        });
      }
    }))), (layout === "circle" || layout === "circle_fill" || layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Size", "progress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["PROGRESSBAR_SIZE"],
      resRequiredProps: resRequiredProps,
      min: 50,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Background Color", "progress-bar"),
      color: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Fill Color", "progress-bar"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Stroke Width", "progress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["STROKE_WIDTH"],
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Stroke Color", "progress-bar"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    })), layout === "box" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Width", "pregress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["BOX_WIDTH"],
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Height", "progress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["BOX_HEIGHT"],
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Background Color", "progress-bar"),
      color: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      }
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Fill Color", "progress-bar"))), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Fill Gradient", "progress-bar"),
      checked: isProgressGradient,
      onChange: function onChange() {
        setAttributes({
          isProgressGradient: !isProgressGradient
        });
      }
    }), isProgressGradient || /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Color", "progress-bar"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), isProgressGradient && /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: __("Gradient Color", "progress-bar"),
      color: progressGradient,
      onChange: function onChange(progressGradient) {
        return setAttributes({
          progressGradient: progressGradient
        });
      }
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: __("Stroke Width", "progress-bar"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_9__["STROKE_WIDTH"],
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Stroke Color", "progress-bar"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    }))), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Typography", "progress-bar")
    }, /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Title"),
      typographyPrefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_10__["typoPrefix_title"],
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Title Color"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Counter"),
      typographyPrefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_10__["typoPrefix_counter"],
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Counter Color"),
      color: counterColor,
      onChange: function onChange(counterColor) {
        return setAttributes({
          counterColor: counterColor
        });
      }
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/**
 * WordPress dependencies
 */
var useBlockProps = wp.blockEditor.useBlockProps;


var save = function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      layout = attributes.layout,
      wrapperAlign = attributes.wrapperAlign,
      titleTag = attributes.titleTag,
      progress = attributes.progress,
      displayProgress = attributes.displayProgress,
      animationDuration = attributes.animationDuration,
      title = attributes.title,
      showStripe = attributes.showStripe,
      stripeAnimation = attributes.stripeAnimation,
      prefix = attributes.prefix,
      suffix = attributes.suffix;
  var stripeClass = showStripe ? " " + _constants__WEBPACK_IMPORTED_MODULE_0__["STRIPE_CLASS"][stripeAnimation] : "";
  return /*#__PURE__*/React.createElement("div", useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-wrapper ".concat(blockId)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["CONTAINER_CLASS"][layout], "-container ").concat(wrapperAlign)
  }, (layout === "line" || layout === "line_rainbow") && title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["WRAPPER_CLASS"][layout]).concat(stripeClass),
    "data-layout": layout,
    "data-count": progress,
    "data-duration": animationDuration
  }, (layout === "circle" || layout === "circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-pie"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-half-left eb-progressbar-circle-half"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-half-right eb-progressbar-circle-half"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-inner"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-inner-content"
  }, title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%")))), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-pie"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-half"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-inner"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-circle-inner-content"
  }, /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%")))), (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%")), /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-line-fill"
  })), layout === "box" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-box-inner-content"
  }, /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), displayProgress && /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-count"
  }, progress), /*#__PURE__*/React.createElement("span", {
    "class": "postfix"
  }, "%"))), /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-box-fill"
  }))), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "class": "eb-progressbar-half-circle-after"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-prefix-label"
  }, prefix), /*#__PURE__*/React.createElement("span", {
    "class": "eb-progressbar-postfix-label"
  }, suffix))))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./util/background-control/bgControl.js":
/*!**********************************************!*\
  !*** ./util/background-control/bgControl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bgControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup;
/**
 * Internal dependencies
 */






function bgControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noMainBgi = _ref.noMainBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var bg_hoverType = attributes["".concat(controlName, "bg_hoverType")],
      bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImageID = attributes["hov_".concat(controlName, "bgImageID")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: bg_hoverType === value,
      isSecondary: bg_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "bg_hoverType"), value));
      }
    }, label);
  }))), bg_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))))), backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), bg_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: hov_backgroundType === value,
      isSecondary: hov_backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), hov_backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: hov_backgroundColor,
    onChange: function onChange(hov_backgroundColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundColor"), hov_backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes39;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes39 = {}, _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageID"), id), _setAttributes39));
    },
    type: "image",
    value: hov_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgPos"), hov_bgImgPos));
    }
  })), hov_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosXUnit"), hov_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosX,
    min: 0,
    max: hov_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosX"), hov_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosYUnit"), hov_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosY,
    min: 0,
    max: hov_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosY"), hov_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgRepeat"), hov_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundSize"), hov_backgroundSize));
    }
  })), hov_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSizeUnit"), hov_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgCustomSize,
    min: 0,
    max: hov_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSize"), hov_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgPos"), hov_TABbgImgPos));
    }
  })), hov_TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), hov_TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosX,
    min: 0,
    max: hov_TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosX"), hov_TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), hov_TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosY,
    min: 0,
    max: hov_TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosY"), hov_TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgRepeat"), hov_TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "backgroundSize"), hov_TABbackgroundSize));
    }
  })), hov_TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), hov_TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgCustomSize,
    min: 0,
    max: hov_TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSize"), hov_TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgPos"), hov_MOBbgImgPos));
    }
  })), hov_MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), hov_MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosX,
    min: 0,
    max: hov_MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosX"), hov_MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), hov_MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosY,
    min: 0,
    max: hov_MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosY"), hov_MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgRepeat"), hov_MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "backgroundSize"), hov_MOBbackgroundSize));
    }
  })), hov_MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), hov_MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgCustomSize,
    min: 0,
    max: hov_MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSize"), hov_MOBbgImgCustomSize));
    }
  }))))))), hov_backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_gradientColor,
    onChange: function onChange(hov_gradientColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "gradientColor"), hov_gradientColor));
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Background Transition"),
    value: bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bg_transition"), bg_transition));
    }
  })));
}

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _overlayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlayControl */ "./util/background-control/overlayControl.js");
/* harmony import */ var _bgControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgControl */ "./util/background-control/bgControl.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
/**
 * Internal dependencies
 */



function BackgroundControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      _ref$noOverlay = _ref.noOverlay,
      noOverlay = _ref$noOverlay === void 0 ? false : _ref$noOverlay,
      _ref$noMainBgi = _ref.noMainBgi,
      noMainBgi = _ref$noMainBgi === void 0 ? false : _ref$noMainBgi,
      _ref$noOverlayBgi = _ref.noOverlayBgi,
      noOverlayBgi = _ref$noOverlayBgi === void 0 ? false : _ref$noOverlayBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var isBgOverlay = attributes["".concat(controlName, "isBgOverlay")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_bgControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noMainBgi: noMainBgi
  }), noOverlay === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Enable Overlay"),
    checked: isBgOverlay,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "isBgOverlay"), !isBgOverlay));
    }
  }), isBgOverlay && /*#__PURE__*/React.createElement(_overlayControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noOverlayBgi: noOverlayBgi
  })));
}

/***/ }),

/***/ "./util/background-control/overlayControl.js":
/*!***************************************************!*\
  !*** ./util/background-control/overlayControl.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return overlayControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl;
/**
 * Internal dependencies
 */







function overlayControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noOverlayBgi = _ref.noOverlayBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var ovl_hoverType = attributes["".concat(controlName, "ovl_hoverType")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImageID = attributes["".concat(controlName, "ovl_bgImageID")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImageID = attributes["hov_".concat(controlName, "ovl_bgImageID")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Overlay")
  }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: ovl_hoverType === value,
      isSecondary: ovl_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_hoverType"), value));
      }
    }, label);
  }))), ovl_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: overlayType === value,
      isSecondary: overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: overlayColor,
    onChange: function onChange(overlayColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayColor"), overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: ovl_bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgPos"), ovl_bgImgPos));
    }
  })), ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosX,
    min: 0,
    max: ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosX"), ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosY,
    min: 0,
    max: ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosY"), ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgRepeat"), ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_backgroundSize"), ovl_backgroundSize));
    }
  })), ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgCustomSize,
    min: 0,
    max: ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSize"), ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgPos"), TABovl_bgImgPos));
    }
  })), TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosX,
    min: 0,
    max: TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosY,
    min: 0,
    max: TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgRepeat"), TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_backgroundSize"), TABovl_backgroundSize));
    }
  })), TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgCustomSize,
    min: 0,
    max: TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSize"), TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgPos"), MOBovl_bgImgPos));
    }
  })), MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosX,
    min: 0,
    max: MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosY,
    min: 0,
    max: MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgRepeat"), MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_backgroundSize"), MOBovl_backgroundSize));
    }
  })), MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgCustomSize,
    min: 0,
    max: MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSize"), MOBovl_bgImgCustomSize));
    }
  }))))))), overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: overlayGradient,
    onChange: function onChange(overlayGradient) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayGradient"), overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: ovl_opacity,
    onChange: function onChange(ovl_opacity) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacity"), ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("Multiply"),
      value: "multiply"
    }, {
      label: __("Screen"),
      value: "screen"
    }, {
      label: __("Overlay"),
      value: "overlay"
    }, {
      label: __("Darken"),
      value: "darken"
    }, {
      label: __("Lighten"),
      value: "lighten"
    }, {
      label: __("Color Dodge"),
      value: "color-dodge"
    }, {
      label: __("Saturation"),
      value: "saturation"
    }, {
      label: __("Color"),
      value: "color"
    }, {
      label: __("Luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(ovl_blendMode) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_blendMode"), ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_allowFilters"), !ovl_allowFilters));
    }
  }), ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: ovl_fltrBlur,
    onChange: function onChange(ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBlur"), ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: ovl_fltrBrightness,
    onChange: function onChange(ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBrightness"), ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: ovl_fltrContrast,
    onChange: function onChange(ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrContrast"), ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: ovl_fltrSaturation,
    onChange: function onChange(ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrSaturation"), ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: ovl_fltrHue,
    onChange: function onChange(ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrHue"), ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }))), ovl_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: hov_overlayType === value,
      isSecondary: hov_overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), hov_overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: hov_overlayColor,
    onChange: function onChange(hov_overlayColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayColor"), hov_overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes47;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes47 = {}, _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageID"), id), _setAttributes47));
    },
    type: "image",
    value: hov_ovl_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgPos"), hov_ovl_bgImgPos));
    }
  })), hov_ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosX,
    min: 0,
    max: hov_ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), hov_ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosY,
    min: 0,
    max: hov_ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), hov_ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgRepeat"), hov_ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_backgroundSize"), hov_ovl_backgroundSize));
    }
  })), hov_ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgCustomSize,
    min: 0,
    max: hov_ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSize"), hov_ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgPos"), hov_TABovl_bgImgPos));
    }
  })), hov_TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosX,
    min: 0,
    max: hov_TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), hov_TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosY,
    min: 0,
    max: hov_TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), hov_TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), hov_TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_backgroundSize"), hov_TABovl_backgroundSize));
    }
  })), hov_TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgCustomSize,
    min: 0,
    max: hov_TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), hov_TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgPos"), hov_MOBovl_bgImgPos));
    }
  })), hov_MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosX,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), hov_MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosY,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), hov_MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), hov_MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_backgroundSize"), hov_MOBovl_backgroundSize));
    }
  })), hov_MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgCustomSize,
    min: 0,
    max: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), hov_MOBovl_bgImgCustomSize));
    }
  }))))))), hov_overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_overlayGradient,
    onChange: function onChange(hov_overlayGradient) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayGradient"), hov_overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Overlay Transition"),
    value: ovl_bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(ovl_bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bg_transition"), ovl_bg_transition));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), undefined));
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: hov_ovl_opacity,
    onChange: function onChange(hov_ovl_opacity) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), hov_ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  })), hov_ovl_opacity && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity Transition"),
    value: ovl_opacityTransition,
    onChange: function onChange(ovl_opacityTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacityTransition"), ovl_opacityTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: hov_ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("multiply"),
      value: "multiply"
    }, {
      label: __("screen"),
      value: "screen"
    }, {
      label: __("overlay"),
      value: "overlay"
    }, {
      label: __("darken"),
      value: "darken"
    }, {
      label: __("lighten"),
      value: "lighten"
    }, {
      label: __("color-dodge"),
      value: "Color Dodge"
    }, {
      label: __("saturation"),
      value: "saturation"
    }, {
      label: __("color"),
      value: "color"
    }, {
      label: __("luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(hov_ovl_blendMode) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_blendMode"), hov_ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: hov_ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_allowFilters"), !hov_ovl_allowFilters));
    }
  }), hov_ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: hov_ovl_fltrBlur,
    onChange: function onChange(hov_ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBlur"), hov_ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: hov_ovl_fltrBrightness,
    onChange: function onChange(hov_ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBrightness"), hov_ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: hov_ovl_fltrContrast,
    onChange: function onChange(hov_ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrContrast"), hov_ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: hov_ovl_fltrSaturation,
    onChange: function onChange(hov_ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrSaturation"), hov_ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: hov_ovl_fltrHue,
    onChange: function onChange(hov_ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrHue"), hov_ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Css Filters Transition"),
    value: ovl_filtersTransition,
    onChange: function onChange(ovl_filtersTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_filtersTransition"), ovl_filtersTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))));
}

/***/ }),

/***/ "./util/border-shadow-control/index.js":
/*!*********************************************!*\
  !*** ./util/border-shadow-control/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderShadowControl; });
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography-control-v2/Icon */ "./util/typography-control-v2/Icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    SelectControl = _wp$components.SelectControl,
    Dropdown = _wp$components.Dropdown;
/**
 * Internal dependencies
 */





function BorderShadowControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowType = attributes["".concat(controlName, "shadowType")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      hOffset = attributes["".concat(controlName, "hOffset")],
      vOffset = attributes["".concat(controlName, "vOffset")],
      blur = attributes["".concat(controlName, "blur")],
      spread = attributes["".concat(controlName, "spread")],
      hoverShadowColor = attributes["".concat(controlName, "hoverShadowColor")],
      hoverHOffset = attributes["".concat(controlName, "hoverHOffset")],
      hoverVOffset = attributes["".concat(controlName, "hoverVOffset")],
      hoverBlur = attributes["".concat(controlName, "hoverBlur")],
      hoverSpread = attributes["".concat(controlName, "hoverSpread")],
      inset = attributes["".concat(controlName, "inset")],
      BorderType = attributes["".concat(controlName, "BorderType")],
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      HborderColor = attributes["".concat(controlName, "HborderColor")],
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, noBorder !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-infobox-border-hover-ptions"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-infobox-border-hover-ptions"
  }, [{
    label: "Normal",
    value: "normal"
  }, {
    label: "Hover",
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: BorderType !== value,
      isPrimary: BorderType === value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "BorderType"), value));
      }
    }, label);
  }))), BorderType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(borderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderStyle"), borderStyle));
    }
  }), borderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderColor"), borderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Bdr_"),
    baseLabel: "Border Width"
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Rds_"),
    baseLabel: "Border Radius"
  })), BorderType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: HborderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(HborderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderStyle"), HborderStyle));
    }
  }), HborderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: HborderColor,
    onChange: function onChange(HborderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderColor"), HborderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HBdr_"),
    baseLabel: "Border Width"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Transition"),
    value: borderTransition,
    onChange: function onChange(borderTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderTransition"), borderTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HRds_"),
    baseLabel: "Border Radius"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius Transition"),
    value: radiusTransition,
    onChange: function onChange(radiusTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "radiusTransition"), radiusTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))), noShadow !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Box Shadow"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, /*#__PURE__*/React.createElement(BaseControl, {
        id: "eb-infobox-shadow-hover-ptions"
      }, /*#__PURE__*/React.createElement(ButtonGroup, {
        id: "eb-infobox-shadow-hover-ptions"
      }, [{
        label: "Normal",
        value: "normal"
      }, {
        label: "Hover",
        value: "hover"
      }].map(function (_ref4) {
        var value = _ref4.value,
            label = _ref4.label;
        return /*#__PURE__*/React.createElement(Button, {
          isLarge: true,
          isSecondary: shadowType !== value,
          isPrimary: shadowType === value,
          onClick: function onClick() {
            return setAttributes(_defineProperty({}, "".concat(controlName, "shadowType"), value));
          }
        }, label);
      }))), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Inset"),
        checked: inset,
        onChange: function onChange() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "inset"), !inset));
        }
      }), shadowType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowColor"), shadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hOffset,
        onChange: function onChange(hOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), hOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: vOffset,
        onChange: function onChange(vOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), vOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: blur,
        onChange: function onChange(blur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), blur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: spread,
        onChange: function onChange(spread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), spread));
        },
        min: 0,
        max: 20
      }))), shadowType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Hover Shadow Color"),
        color: hoverShadowColor,
        onChange: function onChange(hoverShadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverShadowColor"), hoverShadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hoverHOffset,
        onChange: function onChange(hoverHOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), hoverHOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: hoverVOffset,
        onChange: function onChange(hoverVOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), hoverVOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: hoverBlur,
        onChange: function onChange(hoverBlur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), hoverBlur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: hoverSpread,
        onChange: function onChange(hoverSpread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), hoverSpread));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Transition"),
        value: shadowTransition,
        onChange: function onChange(shadowTransition) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowTransition"), shadowTransition));
        },
        step: 0.01,
        min: 0,
        max: 5
      }))));
    }
  }))));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;
var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    onChange(bgColor);
  }, [bgColor]);
  useEffect(function () {
    // console.log("----color-useEffect-fired", { color, bgColor });
    setBgColor(color);
  }, []); // console.log({ color, bgColor });

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: bgColor || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var dispatch = wp.data.dispatch;

function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = useState({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      setAttributes = neededProps.setAttributes,
      dimensionIsLinked = neededProps.dimensionIsLinked,
      controlName = neededProps.controlName;

  var _useState3 = useState(dimensionIsLinked),
      _useState4 = _slicedToArray(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _defineProperty({}, name, value));
      });
    }
  };

  useEffect(function () {
    onChange(dimensions);
  }, [dimensions]);
  useEffect(function () {
    setAttributes(_defineProperty({}, "".concat(controlName, "isLinked"), isLinked));
    var value = dimensions.top;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    }
  }, [isLinked]); // console.log({ isLinked, dimensions });

  return /*#__PURE__*/React.createElement("div", {
    className: "dimention-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "withResWrapperInDimension"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dimention-label"
  }, baseLabel), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), /*#__PURE__*/React.createElement("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionIsLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    setAttributes: setAttributes,
    dimensionIsLinked: dimensionIsLinked,
    controlName: controlName
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _defineProperty(_setAttributes2, "".concat(controlName, "Top"), top), _defineProperty(_setAttributes2, "".concat(controlName, "Right"), right), _defineProperty(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "TAB".concat(controlName, "Top"), top), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Right"), right), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _defineProperty(_setAttributes6, "MOB".concat(controlName, "Top"), top), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Right"), right), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

/***/ }),

/***/ "./util/faIcons.js":
/*!*************************!*\
  !*** ./util/faIcons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var faIcons = ["fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fas fa-address-book", "far fa-address-book", "fas fa-address-card", "far fa-address-card", "fas fa-adjust", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fab fa-amazon", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fab fa-amilia", "fas fa-anchor", "fab fa-android", "fab fa-angellist", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fas fa-archive", "fas fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "far fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fab fa-asymmetrik", "fas fa-at", "fab fa-audible", "fas fa-audio-description", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fab fa-bandcamp", "fas fa-barcode", "fas fa-bars", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fab fa-behance", "fab fa-behance-square", "fas fa-bell", "far fa-bell", "fas fa-bell-slash", "far fa-bell-slash", "fas fa-bicycle", "fab fa-bimobject", "fas fa-binoculars", "fas fa-birthday-cake", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fas fa-blind", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-book", "fas fa-bookmark", "far fa-bookmark", "fas fa-braille", "fas fa-briefcase", "fab fa-btc", "fas fa-bug", "fas fa-building", "far fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fab fa-buromobelexperte", "fas fa-bus", "fab fa-buysellads", "fas fa-calculator", "fas fa-calendar", "far fa-calendar", "fas fa-calendar-alt", "far fa-calendar-alt", "fas fa-calendar-check", "far fa-calendar-check", "fas fa-calendar-minus", "far fa-calendar-minus", "fas fa-calendar-plus", "far fa-calendar-plus", "fas fa-calendar-times", "far fa-calendar-times", "fas fa-camera", "fas fa-camera-retro", "fas fa-car", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "far fa-caret-square-down", "fas fa-caret-square-left", "far fa-caret-square-left", "fas fa-caret-square-right", "far fa-caret-square-right", "fas fa-caret-square-up", "far fa-caret-square-up", "fas fa-caret-up", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fas fa-certificate", "fas fa-chart-area", "fas fa-chart-bar", "far fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "far fa-check-circle", "fas fa-check-square", "far fa-check-square", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fab fa-chrome", "fas fa-circle", "far fa-circle", "fas fa-circle-notch", "fas fa-clipboard", "far fa-clipboard", "fas fa-clock", "far fa-clock", "fas fa-clone", "far fa-clone", "fas fa-closed-captioning", "far fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-upload-alt", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fas fa-code", "fas fa-code-branch", "fab fa-codepen", "fab fa-codiepie", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-columns", "fas fa-comment", "far fa-comment", "fas fa-comment-alt", "far fa-comment-alt", "fas fa-comments", "far fa-comments", "fas fa-compass", "far fa-compass", "fas fa-compress", "fab fa-connectdevelop", "fab fa-contao", "fas fa-copy", "far fa-copy", "fas fa-copyright", "far fa-copyright", "fab fa-cpanel", "fab fa-creative-commons", "fas fa-credit-card", "far fa-credit-card", "fas fa-crop", "fas fa-crosshairs", "fab fa-css3", "fab fa-css3-alt", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-dashcube", "fas fa-database", "fas fa-deaf", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fas fa-desktop", "fab fa-deviantart", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fas fa-dollar-sign", "fas fa-dot-circle", "far fa-dot-circle", "fas fa-download", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-edge", "fas fa-edit", "far fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fab fa-ember", "fab fa-empire", "fas fa-envelope", "far fa-envelope", "fas fa-envelope-open", "far fa-envelope-open", "fas fa-envelope-square", "fab fa-envira", "fas fa-eraser", "fab fa-erlang", "fab fa-etsy", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fab fa-expeditedssl", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "far fa-eye-slash", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "far fa-file", "fas fa-file-alt", "far fa-file-alt", "fas fa-file-archive", "far fa-file-archive", "fas fa-file-audio", "far fa-file-audio", "fas fa-file-code", "far fa-file-code", "fas fa-file-excel", "far fa-file-excel", "fas fa-file-image", "far fa-file-image", "fas fa-file-pdf", "far fa-file-pdf", "fas fa-file-powerpoint", "far fa-file-powerpoint", "fas fa-file-video", "far fa-file-video", "fas fa-file-word", "far fa-file-word", "fas fa-film", "fas fa-filter", "fas fa-fire", "fas fa-fire-extinguisher", "fab fa-firefox", "fab fa-first-order", "fab fa-firstdraft", "fas fa-flag", "far fa-flag", "fas fa-flag-checkered", "fas fa-flask", "fab fa-flickr", "fab fa-fly", "fas fa-folder", "far fa-folder", "fas fa-folder-open", "far fa-folder-open", "fas fa-font", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fas fa-forward", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fas fa-frown", "far fa-frown", "fas fa-futbol", "far fa-futbol", "fas fa-gamepad", "fas fa-gavel", "fas fa-gem", "far fa-gem", "fas fa-genderless", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fas fa-gift", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fas fa-glass-martini", "fab fa-glide", "fab fa-glide-g", "fas fa-globe", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fas fa-graduation-cap", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fas fa-h-square", "fab fa-hacker-news", "fab fa-hacker-news-square", "fas fa-hand-lizard", "far fa-hand-lizard", "fas fa-hand-paper", "far fa-hand-paper", "fas fa-hand-peace", "far fa-hand-peace", "fas fa-hand-point-down", "far fa-hand-point-down", "fas fa-hand-point-left", "far fa-hand-point-left", "fas fa-hand-point-right", "far fa-hand-point-right", "fas fa-hand-point-up", "far fa-hand-point-up", "fas fa-hand-pointer", "far fa-hand-pointer", "fas fa-hand-rock", "far fa-hand-rock", "fas fa-hand-scissors", "far fa-hand-scissors", "fas fa-hand-spock", "far fa-hand-spock", "fas fa-handshake", "far fa-handshake", "fas fa-hashtag", "fas fa-hdd", "far fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-heart", "far fa-heart", "fas fa-heartbeat", "fab fa-hire-a-helper", "fas fa-history", "fas fa-home", "fab fa-hooli", "fas fa-hospital", "far fa-hospital", "fab fa-hotjar", "fas fa-hourglass", "far fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fas fa-i-cursor", "fas fa-id-badge", "far fa-id-badge", "fas fa-id-card", "far fa-id-card", "fas fa-image", "far fa-image", "fas fa-images", "far fa-images", "fab fa-imdb", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-info", "fas fa-info-circle", "fab fa-instagram", "fab fa-internet-explorer", "fab fa-ioxhost", "fas fa-italic", "fab fa-itunes", "fab fa-itunes-note", "fab fa-jenkins", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fas fa-key", "fas fa-keyboard", "far fa-keyboard", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fas fa-language", "fas fa-laptop", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fas fa-leaf", "fab fa-leanpub", "fas fa-lemon", "far fa-lemon", "fab fa-less", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "far fa-life-ring", "fas fa-lightbulb", "far fa-lightbulb", "fab fa-line", "fas fa-link", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "far fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fab fa-lyft", "fab fa-magento", "fas fa-magic", "fas fa-magnet", "fas fa-male", "fas fa-map", "far fa-map", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fas fa-medkit", "fab fa-medrt", "fab fa-meetup", "fas fa-meh", "far fa-meh", "fas fa-mercury", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-slash", "fab fa-microsoft", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "far fa-minus-square", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fas fa-mobile", "fas fa-mobile-alt", "fab fa-modx", "fab fa-monero", "fas fa-money-bill-alt", "far fa-money-bill-alt", "fas fa-moon", "far fa-moon", "fas fa-motorcycle", "fas fa-mouse-pointer", "fas fa-music", "fab fa-napster", "fas fa-neuter", "fas fa-newspaper", "far fa-newspaper", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fas fa-object-group", "far fa-object-group", "fas fa-object-ungroup", "far fa-object-ungroup", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fas fa-outdent", "fab fa-page4", "fab fa-pagelines", "fas fa-paint-brush", "fab fa-palfed", "fas fa-paper-plane", "far fa-paper-plane", "fas fa-paperclip", "fas fa-paragraph", "fas fa-paste", "fab fa-patreon", "fas fa-pause", "fas fa-pause-circle", "far fa-pause-circle", "fas fa-paw", "fab fa-paypal", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-percent", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fas fa-phone", "fas fa-phone-square", "fas fa-phone-volume", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fas fa-plane", "fas fa-play", "fas fa-play-circle", "far fa-play-circle", "fab fa-playstation", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "far fa-plus-square", "fas fa-podcast", "fas fa-pound-sign", "fas fa-power-off", "fas fa-print", "fab fa-product-hunt", "fab fa-pushed", "fas fa-puzzle-piece", "fab fa-python", "fab fa-qq", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "far fa-question-circle", "fab fa-quora", "fas fa-quote-left", "fas fa-quote-right", "fas fa-random", "fab fa-ravelry", "fab fa-react", "fab fa-rebel", "fas fa-recycle", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "far fa-registered", "fab fa-rendact", "fab fa-renren", "fas fa-reply", "fas fa-reply-all", "fab fa-replyd", "fab fa-resolving", "fas fa-retweet", "fas fa-road", "fas fa-rocket", "fab fa-rocketchat", "fab fa-rockrms", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-rupee-sign", "fab fa-safari", "fab fa-sass", "fas fa-save", "far fa-save", "fab fa-schlix", "fab fa-scribd", "fas fa-search", "fas fa-search-minus", "fas fa-search-plus", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fas fa-server", "fab fa-servicestack", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "far fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fab fa-shirtsinbulk", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fab fa-simplybuilt", "fab fa-sistrix", "fas fa-sitemap", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fas fa-sliders-h", "fab fa-slideshare", "fas fa-smile", "far fa-smile", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fas fa-snowflake", "far fa-snowflake", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fab fa-soundcloud", "fas fa-space-shuttle", "fab fa-speakap", "fas fa-spinner", "fab fa-spotify", "fas fa-square", "far fa-square", "fab fa-stack-exchange", "fab fa-stack-overflow", "fas fa-star", "far fa-star", "fas fa-star-half", "far fa-star-half", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fab fa-sticker-mule", "fas fa-sticky-note", "far fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "far fa-stop-circle", "fab fa-strava", "fas fa-street-view", "fas fa-strikethrough", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-sun", "far fa-sun", "fab fa-superpowers", "fas fa-superscript", "fab fa-supple", "fas fa-sync", "fas fa-sync-alt", "fas fa-table", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tasks", "fas fa-taxi", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fab fa-themeisle", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "far fa-thumbs-down", "fas fa-thumbs-up", "far fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "far fa-times-circle", "fas fa-tint", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-trademark", "fas fa-train", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "far fa-trash-alt", "fas fa-tree", "fab fa-trello", "fab fa-tripadvisor", "fas fa-trophy", "fas fa-truck", "fas fa-tty", "fab fa-tumblr", "fab fa-tumblr-square", "fas fa-tv", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-uikit", "fas fa-umbrella", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fab fa-uniregistry", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fab fa-untappd", "fas fa-upload", "fab fa-usb", "fas fa-user", "far fa-user", "fas fa-user-circle", "far fa-user-circle", "fas fa-user-md", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-times", "fas fa-users", "fab fa-ussunnah", "fas fa-utensil-spoon", "fas fa-utensils", "fab fa-vaadin", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fas fa-video", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fas fa-volume-down", "fas fa-volume-off", "fas fa-volume-up", "fab fa-vuejs", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fas fa-wheelchair", "fab fa-whmcs", "fas fa-wifi", "fab fa-wikipedia-w", "fas fa-window-close", "far fa-window-close", "fas fa-window-maximize", "far fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "far fa-window-restore", "fab fa-windows", "fas fa-won-sign", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fas fa-wrench", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yelp", "fas fa-yen-sign", "fab fa-yoast", "fab fa-youtube"];
/* harmony default export */ __webpack_exports__["default"] = (faIcons);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Parses the gradient color string
var parseGradientColor = function parseGradientColor() {
  var gradientColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "linear-gradient(45deg,#7967ff,#c277f2)";
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      _ref2 = _slicedToArray(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _slicedToArray(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["0", "100"];

    var _ref6 = _slicedToArray(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || ["circle"])[0];
    var pcents = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["50", "50", "18", "82"];
    radialX = pcents[0];
    radialY = pcents[1];
    colorOnePosition = pcents[2];
    colorTwoPosition = pcents[3];
  }

  return {
    gradientType: gradientType,
    angle: angle,
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: colorOnePosition,
    colorTwoPosition: colorTwoPosition,
    radialShape: radialShape,
    radialX: radialX,
    radialY: radialY
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
/**
 * Internal dependencies
 */
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";




var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var _ref$gradientColor = _ref.gradientColor,
      gradientColor = _ref$gradientColor === void 0 ? "linear-gradient(45deg,#000000cc,#00000088)" : _ref$gradientColor,
      onChange = _ref.onChange;

  var _useState = useState("linear"),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = useState("transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = useState("transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = useState(100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = useState("ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = useState(50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = useState(50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  useEffect(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_2__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  useEffect(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "First Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorOne || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "Second Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorTwo || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
}; // GradientColorControl.propTypes = {
//   gradientColor: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/backgroundHelpers.js":
/*!*******************************************!*\
  !*** ./util/helpers/backgroundHelpers.js ***!
  \*******************************************/
/*! exports provided: generateBackgroundAttributes, generateBackgroundControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate Background control's attributes
var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _objectSpread2, _objectSpread3, _mainBgiAttrs, _ovlWithoutBgiAttrs, _ovlBgiAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultGradient = defaults.isBgDefaultGradient,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#00000000,#00000000)" : _defaults$defaultBgGr,
      _defaults$noOverlay = defaults.noOverlay,
      noOverlay = _defaults$noOverlay === void 0 ? false : _defaults$noOverlay,
      _defaults$noMainBgi = defaults.noMainBgi,
      noMainBgi = _defaults$noMainBgi === void 0 ? false : _defaults$noMainBgi,
      _defaults$noOverlayBg = defaults.noOverlayBgi,
      noOverlayBgi = _defaults$noOverlayBg === void 0 ? false : _defaults$noOverlayBg;
  var bgColorAttr = defaultFillColor ? _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    "default": defaultFillColor
  }) : _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });

  var mainWithoutBgiAttrs = _objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "bg_hoverType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "bg_transition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_objectSpread2, "".concat(controlName, "backgroundType"), {
    type: "string",
    "default": isBgDefaultGradient === true ? "gradient" : "classic"
  }), _objectSpread2), bgColorAttr), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "".concat(controlName, "gradientColor"), {
    type: "string",
    "default": defaultBgGradient
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "backgroundType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "backgroundColor"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "gradientColor"), {
    type: "string"
  }), _objectSpread3));

  var mainBgiAttrs = (_mainBgiAttrs = {}, _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _mainBgiAttrs);
  var ovlWithoutBgiAttrs = (_ovlWithoutBgiAttrs = {}, _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "isBgOverlay"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_bg_transition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_filtersTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_opacityTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_hoverType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayGradient"), {
    type: "string",
    "default": "linear-gradient(45deg,#000000cc,#00000099)"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_opacity"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrBrightness"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrContrast"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrSaturation"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrBlur"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrHue"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayGradient"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_opacity"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrBrightness"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrContrast"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrSaturation"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrBlur"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrHue"), {
    type: "number"
  }), _ovlWithoutBgiAttrs);
  var ovlBgiAttrs = (_ovlBgiAttrs = {}, _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _ovlBgiAttrs);
  var result = noOverlay === true ? noMainBgi === true ? _objectSpread({}, mainWithoutBgiAttrs) : _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs) : noOverlayBgi === true && noMainBgi === true ? _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === true && noMainBgi === false ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === false && noMainBgi === true ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs) : _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs); // console.log({ result });

  return result;
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref3) {
  var controlName = _ref3.controlName,
      attributes = _ref3.attributes,
      _ref3$noOverlay = _ref3.noOverlay,
      noOverlay = _ref3$noOverlay === void 0 ? false : _ref3$noOverlay,
      _ref3$noMainBgi = _ref3.noMainBgi,
      noMainBgi = _ref3$noMainBgi === void 0 ? false : _ref3$noMainBgi,
      _ref3$noOverlayBgi = _ref3.noOverlayBgi,
      noOverlayBgi = _ref3$noOverlayBgi === void 0 ? false : _ref3$noOverlayBgi;
  var bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")],
      isBgOverlay = attributes["".concat(controlName, "isBgOverlay")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  var backgroundStylesDesktop = "\n      background-image: ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n  \n      ").concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n  \n          ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n          \n         \n          ") : " ", "\n\n      ").concat(isBgOverlay ? "\n            z-index: 2;\n            position: relative;\n          " : " ", "\t\n    \n      ").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n  \n    ");
  var hoverBackgroundStylesDesktop = "\n  \n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL || hov_backgroundType === "gradient" && hov_gradientColor ? "\n        background-image: ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "url(\"".concat(hov_bgImageURL, "\")") : hov_backgroundType === "gradient" && hov_gradientColor ? hov_gradientColor : "none", ";    \n        ") : " ", "\n  \n   \n  \n    ").concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_backgroundSize && hov_backgroundSize !== "custom" ? "background-size: ".concat(hov_backgroundSize, ";") : hov_backgroundSize === "custom" ? "background-size: ".concat(hov_bgImgCustomSize).concat(hov_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_bgImgPos && hov_bgImgPos !== "custom" ? "background-position: ".concat(hov_bgImgPos, ";") : hov_bgImgPos === "custom" ? "background-position: ".concat(hov_bgImgcustomPosX).concat(hov_bgImgcustomPosXUnit, " ").concat(hov_bgImgcustomPosY).concat(hov_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_bgImgAttachment ? "background-attachment: ".concat(hov_bgImgAttachment, ";") : " ", "\n  \n        ").concat(hov_bgImgRepeat ? "background-repeat: ".concat(hov_bgImgRepeat, ";") : " ", "\n        \n        ") : " ", "\n  \n        ").concat(hov_backgroundColor ? "background-color: ".concat(hov_backgroundColor, ";") : " ", "\n  \n  ");
  var backgroundStylesTab = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesTab = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_TABbackgroundSize && hov_TABbackgroundSize !== "custom" ? "background-size: ".concat(hov_TABbackgroundSize, ";") : hov_TABbackgroundSize === "custom" ? "background-size: ".concat(hov_TABbgImgCustomSize).concat(hov_TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABbgImgPos && hov_TABbgImgPos !== "custom" ? "background-position: ".concat(hov_TABbgImgPos, ";") : hov_TABbgImgPos === "custom" ? "background-position: ".concat(hov_TABbgImgcustomPosX).concat(hov_TABbgImgcustomPosXUnit, " ").concat(hov_TABbgImgcustomPosY).concat(hov_TABbgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABbgImgRepeat ? "background-repeat: ".concat(hov_TABbgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n        ") : " ", "\n  \n  ");
  var backgroundStylesMobile = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n  \n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesMobile = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_MOBbackgroundSize && hov_MOBbackgroundSize !== "custom" ? "background-size: ".concat(hov_MOBbackgroundSize, ";") : hov_MOBbackgroundSize === "custom" ? "background-size: ".concat(hov_MOBbgImgCustomSize).concat(hov_MOBbgImgCustomSizeUnit, " auto;") : " ", "\n    \n        ").concat(hov_MOBbgImgPos && hov_MOBbgImgPos !== "custom" ? "background-position: ".concat(hov_MOBbgImgPos, ";") : hov_MOBbgImgPos === "custom" ? "background-position: ".concat(hov_MOBbgImgcustomPosX).concat(hov_MOBbgImgcustomPosXUnit, " ").concat(hov_MOBbgImgcustomPosY).concat(hov_MOBbgImgcustomPosYUnit, ";") : " ", "\n    \n        ").concat(hov_MOBbgImgRepeat ? "background-repeat: ".concat(hov_MOBbgImgRepeat, ";") : " ", "\n    \n        ") : " ", "\n    \n    "); // console.log({ ovl_blendMode });

  var overlayStylesDesktop = "\n    \n      ".concat(noOverlay === false && isBgOverlay ? "\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            left: 0;\n            z-index: 0;\n            background-image: ".concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "url(\"".concat(ovl_bgImageURL, "\")") : overlayType === "gradient" ? overlayGradient : "none", ";\n            ").concat(overlayColor ? "background-color: ".concat(overlayColor, ";") : " ", "\n            ").concat(ovl_opacity || ovl_opacity === 0 ? "opacity: ".concat(ovl_opacity, ";") : " ", "\n            ").concat(ovl_blendMode ? "mix-blend-mode: ".concat(ovl_blendMode, ";") : " ", "\n            ").concat(ovl_allowFilters ? "filter: brightness( ".concat(ovl_fltrBrightness, "% ) contrast( ").concat(ovl_fltrContrast, "% ) saturate( ").concat(ovl_fltrSaturation, "% ) blur( ").concat(ovl_fltrBlur, "px ) hue-rotate( \n              ").concat(ovl_fltrHue, "deg );") : " ", "\n  \n        ").concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "\n            ".concat(ovl_backgroundSize && ovl_backgroundSize !== "custom" ? "background-size: ".concat(ovl_backgroundSize, ";") : ovl_backgroundSize === "custom" ? "background-size: ".concat(ovl_bgImgCustomSize).concat(ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n            ").concat(ovl_bgImgPos && ovl_bgImgPos !== "custom" ? "background-position: ".concat(ovl_bgImgPos, ";") : ovl_bgImgPos === "custom" ? "background-position: ".concat(ovl_bgImgcustomPosX).concat(ovl_bgImgcustomPosXUnit, " ").concat(ovl_bgImgcustomPosY).concat(ovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n            ").concat(ovl_bgImgAttachment ? "background-attachment: ".concat(ovl_bgImgAttachment, ";") : " ", "\n  \n            ").concat(ovl_bgImgRepeat ? "background-repeat: ".concat(ovl_bgImgRepeat, ";") : " ", "\n            \n            ") : " ", "\n  \n        ") : " ", "\n    \n    \n    ");
  var hoverOverlayStylesDesktop = "\n    \n    ".concat(noOverlay === false && isBgOverlay ? "\n        ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL || hov_overlayType === "gradient" && hov_overlayGradient ? "\n          background-image: ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "url(\"".concat(hov_ovl_bgImageURL, "\")") : hov_overlayType === "gradient" && hov_overlayGradient ? hov_overlayGradient : "none", ";\n          ") : " ", "\n  \n        ").concat(hov_overlayColor ? "background-color: ".concat(hov_overlayColor, ";") : " ", "\n        ").concat(hov_ovl_opacity || hov_ovl_opacity === 0 ? "opacity: ".concat(hov_ovl_opacity, ";") : " ", "\n        ").concat(hov_ovl_blendMode ? "mix-blend-mode: ".concat(hov_ovl_blendMode, ";") : " ", "\n        ").concat(hov_ovl_allowFilters ? "filter: brightness( ".concat(hov_ovl_fltrBrightness, "% ) contrast( ").concat(hov_ovl_fltrContrast, "% ) saturate( ").concat(hov_ovl_fltrSaturation, "% ) blur( ").concat(hov_ovl_fltrBlur, "px ) hue-rotate( \n          ").concat(hov_ovl_fltrHue, "deg );") : " ", "\n    \n      ").concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n          ".concat(hov_ovl_backgroundSize && hov_ovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_ovl_backgroundSize, ";") : hov_ovl_backgroundSize === "custom" ? "background-size: ".concat(hov_ovl_bgImgCustomSize).concat(hov_ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n    \n          ").concat(hov_ovl_bgImgPos && hov_ovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_ovl_bgImgPos, ";") : hov_ovl_bgImgPos === "custom" ? "background-position: ".concat(hov_ovl_bgImgcustomPosX).concat(hov_ovl_bgImgcustomPosXUnit, " ").concat(hov_ovl_bgImgcustomPosY).concat(hov_ovl_bgImgcustomPosYUnit, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgAttachment ? "background-attachment: ".concat(hov_ovl_bgImgAttachment, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgRepeat ? "background-repeat: ".concat(hov_ovl_bgImgRepeat, ";") : " ", "\n          \n          ") : " ", "\n    \n      ") : " ", "\n    \n    \n    ");
  var overlayStylesTab = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(TABovl_backgroundSize && TABovl_backgroundSize !== "custom" ? "background-size: ".concat(TABovl_backgroundSize, ";") : TABovl_backgroundSize === "custom" ? "background-size: ".concat(TABovl_bgImgCustomSize).concat(TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABovl_bgImgPos && TABovl_bgImgPos !== "custom" ? "background-position: ".concat(TABovl_bgImgPos, ";") : TABovl_bgImgPos === "custom" ? "background-position: ".concat(TABovl_bgImgcustomPosX).concat(TABovl_bgImgcustomPosXUnit, " ").concat(TABovl_bgImgcustomPosY).concat(TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABovl_bgImgRepeat ? "background-repeat: ".concat(TABovl_bgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesTab = "\n  ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n      ".concat(hov_TABovl_backgroundSize && hov_TABovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_TABovl_backgroundSize, ";") : hov_TABovl_backgroundSize === "custom" ? "background-size: ".concat(hov_TABovl_bgImgCustomSize).concat(hov_TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABovl_bgImgPos && hov_TABovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_TABovl_bgImgPos, ";") : hov_TABovl_bgImgPos === "custom" ? "background-position: ".concat(hov_TABovl_bgImgcustomPosX).concat(hov_TABovl_bgImgcustomPosXUnit, " ").concat(hov_TABovl_bgImgcustomPosY).concat(hov_TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABovl_bgImgRepeat ? "background-repeat: ".concat(hov_TABovl_bgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n      ") : " ", "\n  \n  ");
  var overlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(MOBovl_backgroundSize && MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(MOBovl_backgroundSize, ";") : MOBovl_backgroundSize === "custom" ? "background-size: ".concat(MOBovl_bgImgCustomSize).concat(MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(MOBovl_bgImgPos && MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(MOBovl_bgImgPos, ";") : MOBovl_bgImgPos === "custom" ? "background-position: ".concat(MOBovl_bgImgcustomPosX).concat(MOBovl_bgImgcustomPosXUnit, " ").concat(MOBovl_bgImgcustomPosY).concat(MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(MOBovl_bgImgRepeat ? "background-repeat: ".concat(MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n        ".concat(hov_MOBovl_backgroundSize && hov_MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_MOBovl_backgroundSize, ";") : hov_MOBovl_backgroundSize === "custom" ? "background-size: ".concat(hov_MOBovl_bgImgCustomSize).concat(hov_MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgPos && hov_MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_MOBovl_bgImgPos, ";") : hov_MOBovl_bgImgPos === "custom" ? "background-position: ".concat(hov_MOBovl_bgImgcustomPosX).concat(hov_MOBovl_bgImgcustomPosXUnit, " ").concat(hov_MOBovl_bgImgcustomPosY).concat(hov_MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgRepeat ? "background-repeat: ".concat(hov_MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var bgTransitionStyle = "background ".concat(bg_transition || 0, "s");
  var ovlTransitionStyle = "background ".concat(ovl_bg_transition || 0, "s, opacity ").concat(ovl_opacityTransition || 0, "s, filter ").concat(ovl_filtersTransition || 0, "s");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    hoverBackgroundStylesDesktop: hoverBackgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    hoverBackgroundStylesTab: hoverBackgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    hoverBackgroundStylesMobile: hoverBackgroundStylesMobile,
    overlayStylesDesktop: overlayStylesDesktop,
    hoverOverlayStylesDesktop: hoverOverlayStylesDesktop,
    overlayStylesTab: overlayStylesTab,
    hoverOverlayStylesTab: hoverOverlayStylesTab,
    overlayStylesMobile: overlayStylesMobile,
    hoverOverlayStylesMobile: hoverOverlayStylesMobile,
    bgTransitionStyle: bgTransitionStyle,
    ovlTransitionStyle: ovlTransitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/borderShadowHelpers.js":
/*!*********************************************!*\
  !*** ./util/helpers/borderShadowHelpers.js ***!
  \*********************************************/
/*! exports provided: generateBorderShadowAttributes, generateBorderShadowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread2, _shdAttrs, _transitionAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults,
      _defaults$noBorder = defaults.noBorder,
      noBorder = _defaults$noBorder === void 0 ? false : _defaults$noBorder,
      _defaults$noShadow = defaults.noShadow,
      noShadow = _defaults$noShadow === void 0 ? false : _defaults$noShadow;

  var bdrAttrs = _objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "BorderType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderStyle"), {
    type: "string",
    "default": "none"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderStyle"), {
    type: "string",
    "default": "none"
  }), _objectSpread2), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Bdr_"), bdrDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Rds_"), rdsDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HBdr_"))), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HRds_")));

  var shdAttrs = (_shdAttrs = {}, _defineProperty(_shdAttrs, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "blur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "spread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "inset"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    "default": false
  }), _shdAttrs);
  var transitionAttrs = (_transitionAttrs = {}, _defineProperty(_transitionAttrs, "".concat(controlName, "borderTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "radiusTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "shadowTransition"), {
    type: "number",
    "default": 0.5
  }), _transitionAttrs);

  if (noBorder === true) {
    return _objectSpread(_objectSpread({}, shdAttrs), transitionAttrs);
  } else if (noShadow === true) {
    return _objectSpread(_objectSpread({}, bdrAttrs), transitionAttrs);
  } else {
    return _objectSpread(_objectSpread(_objectSpread({}, bdrAttrs), shdAttrs), transitionAttrs);
  } // const result = {
  //   // Border Shadow attributes ⬇
  //   // border attributes ⬇
  //   [`${controlName}BorderType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}borderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}borderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   [`${controlName}HborderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}HborderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   // shadow attributes  ⬇
  //   [`${controlName}hOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}vOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}blur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}spread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}shadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}inset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}shadowType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}hoverHOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverVOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverBlur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverSpread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverShadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}hoverInset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}borderTransition`]: {
  //     type: "string",
  //     default: "500",
  //   },
  //   ...generateDimensionsAttributes(`${controlName}Bdr_`, bdrDefaults),
  //   ...generateDimensionsAttributes(`${controlName}Rds_`, rdsDefaults),
  //   ...generateDimensionsAttributes(`${controlName}HBdr_`),
  //   ...generateDimensionsAttributes(`${controlName}HRds_`),
  // };
  // console.log("---generateBorderShadowAttributes:", { result });
  // return result;

}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref) {
  var controlName = _ref.controlName,
      attributes = _ref.attributes,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var borderStylesDesktop = "";
  var borderStylesTab = "";
  var borderStylesMobile = "";
  var radiusStylesDesktop = "";
  var radiusStylesTab = "";
  var radiusStylesMobile = "";
  var HborderStylesDesktop = "";
  var HborderStylesTab = "";
  var HborderStylesMobile = "";
  var HradiusStylesDesktop = "";
  var HradiusStylesTab = "";
  var HradiusStylesMobile = "";

  if (noBorder !== true) {
    var _generateDimensionsCo = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Bdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
        F_borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
        F_borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

    var _generateDimensionsCo2 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Rds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
        F_radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
        F_radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

    var _generateDimensionsCo3 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HBdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_HborderStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
        F_HborderStylesTab = _generateDimensionsCo3.dimensionStylesTab,
        F_HborderStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

    var _generateDimensionsCo4 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HRds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_HradiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
        F_HradiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
        F_HradiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

    borderStylesDesktop = F_borderStylesDesktop;
    borderStylesTab = F_borderStylesTab;
    borderStylesMobile = F_borderStylesMobile;
    radiusStylesDesktop = F_radiusStylesDesktop;
    radiusStylesTab = F_radiusStylesTab;
    radiusStylesMobile = F_radiusStylesMobile;
    HborderStylesDesktop = F_HborderStylesDesktop;
    HborderStylesTab = F_HborderStylesTab;
    HborderStylesMobile = F_HborderStylesMobile;
    HradiusStylesDesktop = F_HradiusStylesDesktop;
    HradiusStylesTab = F_HradiusStylesTab;
    HradiusStylesMobile = F_HradiusStylesMobile;
  } // const {
  //   dimensionStylesDesktop: borderStylesDesktop,
  //   dimensionStylesTab: borderStylesTab,
  //   dimensionStylesMobile: borderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Bdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: radiusStylesDesktop,
  //   dimensionStylesTab: radiusStylesTab,
  //   dimensionStylesMobile: radiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Rds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HborderStylesDesktop,
  //   dimensionStylesTab: HborderStylesTab,
  //   dimensionStylesMobile: HborderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HBdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HradiusStylesDesktop,
  //   dimensionStylesTab: HradiusStylesTab,
  //   dimensionStylesMobile: HradiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HRds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });


  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      _attributes$ = attributes["".concat(controlName, "borderColor")],
      borderColor = _attributes$ === void 0 ? "#333333" : _attributes$,
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      _attributes$2 = attributes["".concat(controlName, "HborderColor")],
      HborderColor = _attributes$2 === void 0 ? borderColor : _attributes$2,
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$3 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$3 === void 0 ? 0 : _attributes$3,
      _attributes$4 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "blur")],
      blur = _attributes$5 === void 0 ? 0 : _attributes$5,
      _attributes$6 = attributes["".concat(controlName, "spread")],
      spread = _attributes$6 === void 0 ? 0 : _attributes$6,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$7 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$7 === void 0 ? shadowColor : _attributes$7,
      _attributes$8 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$8 === void 0 ? hOffset : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$9 === void 0 ? vOffset : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$10 === void 0 ? blur : _attributes$10,
      _attributes$11 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$11 === void 0 ? spread : _attributes$11,
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  var styesDesktop = "  \n      ".concat(noBorder !== true ? "\n          ".concat(radiusStylesDesktop, "\n          ").concat(borderStyle !== "none" && borderColor ? "\n              ".concat(borderStylesDesktop, "\n              border-color: ").concat(borderColor, ";\n              border-style: ").concat(borderStyle, ";\n              ") : " ", "\n          ") : " ", "\n    \n      ").concat(noShadow !== true ? shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " " : " ", "\n  \n  \n    ");
  var styesTab = "  \n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesTab : " ", "\n        ").concat(radiusStylesTab, "\n        ") : " ", "\n      \n    ");
  var styesMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesMobile : " ", "\n        ").concat(radiusStylesMobile, "\n        ") : " ", "\n    ");
  var stylesHoverDesktop = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? "\n              ".concat(HborderColor !== borderColor ? "border-color: ".concat(HborderColor, ";") : " ", " \n              ").concat(HborderStyle !== borderStyle ? "border-style: ".concat(HborderStyle, ";") : " ", "\n              ").concat(HborderStylesDesktop, "\n            ") : " ", "\n  \n        ").concat(HradiusStylesDesktop, "    \n        ") : " ", "   \n     \n    ").concat(noShadow !== true ? hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " " : " ", "\n  \n    ");
  var stylesHoverTab = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesTab : " ", "\n        ").concat(HradiusStylesTab, "  \n        ") : " ", "\n    ");
  var stylesHoverMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesMobile : " ", "\n        ").concat(HradiusStylesMobile, "\n        ") : " ", "\n     \n    ");
  var transitionStyle = "\n  border ".concat(borderTransition || 0, "s, border-radius ").concat(radiusTransition || 0, "s, box-shadow ").concat(shadowTransition || 0, "s\n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHoverDesktop: stylesHoverDesktop,
    stylesHoverTab: stylesHoverTab,
    stylesHoverMobile: stylesHoverMobile,
    transitionStyle: transitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/dimensionHelpers.js":
/*!******************************************!*\
  !*** ./util/helpers/dimensionHelpers.js ***!
  \******************************************/
/*! exports provided: generateDimensionsAttributes, generateDimensionsControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread2, _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left,
      _defaults$isLinked = defaults.isLinked,
      isLinked = _defaults$isLinked === void 0 ? true : _defaults$isLinked;
  var desktopTop = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(top) ? _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string",
    "default": "".concat(top)
  }) : _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(right) ? _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string",
    "default": "".concat(right)
  }) : _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(bottom) ? _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string",
    "default": "".concat(bottom)
  }) : _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(left) ? _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string",
    "default": "".concat(left)
  }) : _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "isLinked"), {
    type: "boolean",
    "default": isLinked
  }), _defineProperty(_objectSpread2, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _objectSpread2), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread3));
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref9) {
  var controlName = _ref9.controlName,
      styleFor = _ref9.styleFor,
      attributes = _ref9.attributes;
  var isLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (isLinked === true) {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; ") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } else {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; z-index:999;") : " ", "\n            ").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } // console.log({
  //   dimensionStylesDesktop,
  //   // dimensionStylesTab,
  //   // dimensionStylesMobile,
  // });


  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/flipboxHelpers.js":
/*!****************************************!*\
  !*** ./util/helpers/flipboxHelpers.js ***!
  \****************************************/
/*! exports provided: getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
// Return flilp value based on type
var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};

/***/ }),

/***/ "./util/helpers/funcsForUseEffect.js":
/*!*******************************************!*\
  !*** ./util/helpers/funcsForUseEffect.js ***!
  \*******************************************/
/*! exports provided: mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return mimmikCssForResBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return mimmikCssForPreviewBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return mimmikCssOnPreviewBtnClickWhileBlockSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return duplicateBlockIdFix; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
// function to mimmik css when clicking the responsive buttons in the inspector panel
var mimmikCssForResBtns = function mimmikCssForResBtns(_ref) {
  var _ref$isForPreviewButt = _ref.isForPreviewButton,
      isForPreviewButton = _ref$isForPreviewButt === void 0 ? false : _ref$isForPreviewButt,
      domObj = _ref.domObj,
      resOption = _ref.resOption;
  var allEbBlocksWrapper;

  if (isForPreviewButton) {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper > style");
  } else {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style");
  }

  if (allEbBlocksWrapper.length < 1) return;
  allEbBlocksWrapper.forEach(function (styleTag) {
    var cssStrings = styleTag.textContent;
    var minCss = cssStrings.replace(/\s+/g, " "); // console.log({ minCss });

    var regexCssMimmikSpace = /(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i;
    var newCssStrings = " ";

    if (resOption === "Tablet") {
      var tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1]; // console.log({ tabCssStrings });

      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(tabCssStrings, " $3"));
    } else if (resOption === "Mobile") {
      var _tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      var mobCssStrings = (minCss.match( // /(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
      /mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i) || [, " "])[1]; // console.log({ tabCssStrings, mobCssStrings });

      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(_tabCssStrings, " ").concat(mobCssStrings, " $3"));
    } else {
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1  $3");
    }

    styleTag.textContent = newCssStrings;
  });
}; //
// IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button

var mimmikCssForPreviewBtnClick = function mimmikCssForPreviewBtnClick(_ref2) {
  var domObj = _ref2.domObj,
      select = _ref2.select;
  var bodyClasses = domObj.body.className;
  if (/eb\-mimmik\-added/i.test(bodyClasses)) return;
  domObj.body.classList.add("eb-mimmik-added");
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");
  wpResBtnsWrap.addEventListener("click", function (e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType(); // console.log("---mimmikCssForPreviewBtnClick", { resOption });


        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
      }, 0);
    }
  });
}; // IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

var mimmikCssOnPreviewBtnClickWhileBlockSelected = function mimmikCssOnPreviewBtnClickWhileBlockSelected(_ref3) {
  var domObj = _ref3.domObj,
      select = _ref3.select,
      setAttributes = _ref3.setAttributes;
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");

  var handleCLick = function handleCLick(e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType(); // console.log("---resoption from setTimeout", { resOption });


        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
        setAttributes({
          resOption: resOption
        });
      }, 0);
    }
  };

  wpResBtnsWrap.addEventListener("click", handleCLick);
  return function () {
    wpResBtnsWrap.removeEventListener("click", handleCLick);
  };
}; //
// this function is for creating a unique blockId for each block's unique className

var duplicateBlockIdFix = function duplicateBlockIdFix(_ref4) {
  var BLOCK_PREFIX = _ref4.BLOCK_PREFIX,
      blockId = _ref4.blockId,
      setAttributes = _ref4.setAttributes,
      select = _ref4.select,
      clientId = _ref4.clientId;
  var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
  /**
   * Define and Generate Unique Block ID
   */

  if (!blockId) {
    setAttributes({
      blockId: unique_id
    });
  }
  /**
   * Assign New Unique ID when duplicate BlockId found
   * Mostly happens when User Duplicate a Block
   */


  var all_blocks = select("core/block-editor").getBlocks(); // console.log({ all_blocks });

  var duplicateFound = false;

  var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
    if (duplicateFound) return;

    var _iterator = _createForOfIteratorHelper(blocks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var innerBlocks = item.innerBlocks;

        if (item.attributes.blockId === blockId) {
          if (item.clientId !== clientId) {
            setAttributes({
              blockId: unique_id
            }); // console.log("found a duplicate");

            duplicateFound = true;
            return;
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        } else if (innerBlocks.length > 0) {
          fixDuplicateBlockId(innerBlocks);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  fixDuplicateBlockId(all_blocks);
};

/***/ }),

/***/ "./util/helpers/handlingPreviewBtnsHelpers.js":
/*!****************************************************!*\
  !*** ./util/helpers/handlingPreviewBtnsHelpers.js ***!
  \****************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
//
// These following 3 functions to handle the resBtns click
// function 1: to handle desktop button click
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setPreviewDeviceType = _ref.setPreviewDeviceType,
      setAttributes = _ref.setAttributes;
  setAttributes({
    resOption: "Desktop"
  });
  setPreviewDeviceType("Desktop");
}; // function 2: to handle Tab button click

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setPreviewDeviceType = _ref2.setPreviewDeviceType,
      setAttributes = _ref2.setAttributes;
  setAttributes({
    resOption: "Tablet"
  });
  setPreviewDeviceType("Tablet");
}; // function 3: to handle Mobile button click

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setPreviewDeviceType = _ref3.setPreviewDeviceType,
      setAttributes = _ref3.setAttributes;
  setAttributes({
    resOption: "Mobile"
  });
  setPreviewDeviceType("Mobile");
};

/***/ }),

/***/ "./util/helpers/hasVal.js":
/*!********************************!*\
  !*** ./util/helpers/hasVal.js ***!
  \********************************/
/*! exports provided: hasVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
};

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: generateBackgroundControlStyles, generateBackgroundAttributes, generateTypographyAttributes, generateTypographyStyles, generateDimensionsAttributes, generateDimensionsControlStyles, generateBorderShadowAttributes, generateBorderShadowStyles, generateResponsiveRangeStyles, generateResponsiveRangeAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick, mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix, getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundHelpers */ "./util/helpers/backgroundHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundControlStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundAttributes"]; });

/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoHelpers */ "./util/helpers/typoHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyStyles"]; });

/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"]; });

/* harmony import */ var _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borderShadowHelpers */ "./util/helpers/borderShadowHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowStyles"]; });

/* harmony import */ var _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveRangeHelpers */ "./util/helpers/responsiveRangeHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"]; });

/* harmony import */ var _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miniHelperFuncs */ "./util/helpers/miniHelperFuncs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["textInsideForEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["generateRandomNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["hardMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["isCssExists"]; });

/* harmony import */ var _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlingPreviewBtnsHelpers */ "./util/helpers/handlingPreviewBtnsHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleDesktopBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleTabBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleMobileBtnClick"]; });

/* harmony import */ var _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcsForUseEffect */ "./util/helpers/funcsForUseEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForResBtns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForPreviewBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssOnPreviewBtnClickWhileBlockSelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["duplicateBlockIdFix"]; });

/* harmony import */ var _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flipboxHelpers */ "./util/helpers/flipboxHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getFlipTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getButtonClasses"]; });









 //
// // unused function
// export const getBackgroundImage = (type, gradientValue, imageURL) => {
//   switch (type) {
//     case "fill":
//       return "none";
//     case "gradient":
//       return gradientValue;
//     case "image":
//       if (imageURL) {
//         return `url(${imageURL})`;
//       }
//       return "none";
//   }
// };

/***/ }),

/***/ "./util/helpers/miniHelperFuncs.js":
/*!*****************************************!*\
  !*** ./util/helpers/miniHelperFuncs.js ***!
  \*****************************************/
/*! exports provided: textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown in the number-counter block
var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  // console.log({ cssString });
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    // console.log({ match, g1, offset, string });
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
};

/***/ }),

/***/ "./util/helpers/responsiveRangeHelpers.js":
/*!************************************************!*\
  !*** ./util/helpers/responsiveRangeHelpers.js ***!
  \************************************************/
/*! exports provided: generateResponsiveRangeAttributes, generateResponsiveRangeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate responsive range controller attributes for multiple range control based on the array of prefix
var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _ref3, _objectSpread2;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultRange = defaults.defaultRange,
      noUnits = defaults.noUnits;
  var desktop = defaultRange ? _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number",
    "default": defaultRange
  }) : _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number"
  });
  var units = noUnits === true ? {} : (_ref3 = {}, _defineProperty(_ref3, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ref3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ref3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _ref3);
  return _objectSpread(_objectSpread({}, desktop), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "TAB".concat(controlName, "Range"), {
    type: "number"
  }), _defineProperty(_objectSpread2, "MOB".concat(controlName, "Range"), {
    type: "number"
  }), _objectSpread2), units);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref4) {
  var controlName = _ref4.controlName,
      property = _ref4.property,
      attributes = _ref4.attributes,
      customUnit = _ref4.customUnit;
  // console.log({ controlName, property, attributes, customUnit });
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;

  if (!customUnit) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
  } else {
    desktopSizeUnit = TABsizeUnit = MOBsizeUnit = customUnit;
  }

  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var rangeStylesDesktop = desktopRange || desktopRange === 0 ? property + ":" + desktopRange + (customUnit || desktopSizeUnit) + ";" : "";
  var rangeStylesTab = TABrange || TABrange === 0 ? property + ":" + TABrange + (customUnit || TABsizeUnit) + ";" : "";
  var rangeStylesMobile = MOBrange || MOBrange === 0 ? property + ":" + MOBrange + (customUnit || MOBsizeUnit) + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/typoHelpers.js":
/*!*************************************!*\
  !*** ./util/helpers/typoHelpers.js ***!
  \*************************************/
/*! exports provided: generateTypographyAttributes, generateTypographyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _defineProperty(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {}); //
  // console.log({ typoAttrs });

  return typoAttrs;
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref) {
  var prefixConstant = _ref.prefixConstant,
      defaultFontSize = _ref.defaultFontSize,
      attributes = _ref.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n              ".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n              ").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n              ").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n              ").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesTab = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesMobile = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n          ");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
};

/***/ }),

/***/ "./util/image-avatar/index.js":
/*!************************************!*\
  !*** ./util/image-avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;

var ImageAvatar = function ImageAvatar(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-range-controller-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/responsive-range-control/index.js":
/*!************************************************!*\
  !*** ./util/responsive-range-control/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive-btn */ "./util/responsive-range-control/responsive-btn.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var RangeControl = wp.components.RangeControl;



var ResponsiveRangeController = function ResponsiveRangeController(_ref) {
  var baseLabel = _ref.baseLabel,
      controlName = _ref.controlName,
      resRequiredProps = _ref.resRequiredProps,
      units = _ref.units,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      noUnits = _ref.noUnits;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;
  var defaultUnits;
  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];

  if (!noUnits) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
    defaultUnits = [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }];
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "responsiveRangeControllerWrapper"
  }, noUnits ? /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: desktopSizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(desktopSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), desktopSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: desktopSizeUnit === "em" ? 0.1 : step,
    min: desktopSizeUnit === "px" ? min : 0,
    max: desktopSizeUnit === "px" ? max : 100
  }))), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(TABsizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: TABsizeUnit === "em" ? 0.1 : step,
    min: TABsizeUnit === "px" ? min : 0,
    max: TABsizeUnit === "px" ? max : 100
  }))), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(MOBsizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: MOBsizeUnit === "em" ? 0.1 : step,
    min: MOBsizeUnit === "px" ? min : 0,
    max: MOBsizeUnit === "px" ? max : 100
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRangeController);

/***/ }),

/***/ "./util/responsive-range-control/responsive-btn.js":
/*!*********************************************************!*\
  !*** ./util/responsive-range-control/responsive-btn.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResBtns; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dispatch = wp.data.dispatch;

function WithResBtns(_ref) {
  var children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label,
      controlName = _ref.controlName,
      onReset = _ref.onReset;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption,
      objAttributes = resRequiredProps.objAttributes;

  onReset = function onReset() {
    resOption == "Desktop" ? setAttributes(_defineProperty({}, "".concat(controlName, "Range"), objAttributes["".concat(controlName, "Range")]["default"])) : "";
    resOption == "Tablet" ? setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), objAttributes["TAB".concat(controlName, "Range")]["default"])) : "";
    resOption == "Mobile" ? setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), objAttributes["MOB".concat(controlName, "Range")]["default"])) : "";
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "responsive-btn-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-component-wrapper"
  }, children, /*#__PURE__*/React.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/React.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
}

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = useState(defaultSelected || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  useEffect(function () {
    onChange(selected.value);
  }, [selected]);
  useEffect(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return /*#__PURE__*/React.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/React.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/FontPicker.js":
/*!**************************************************!*\
  !*** ./util/typography-control-v2/FontPicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
var _excluded = ["label", "value", "help", "instanceId", "onChange", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control-v2/Icon.js":
/*!********************************************!*\
  !*** ./util/typography-control-v2/Icon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TypographyIcon = function TypographyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyIcon);

/***/ }),

/***/ "./util/typography-control-v2/WithResButtons.js":
/*!******************************************************!*\
  !*** ./util/typography-control-v2/WithResButtons.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "resIcons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: FONTS, sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: __("Default"),
  value: ""
}, {
  label: __("100"),
  value: "100"
}, {
  label: __("200"),
  value: "200"
}, {
  label: __("300"),
  value: "300"
}, {
  label: __("400"),
  value: "400"
}, {
  label: __("500"),
  value: "500"
}, {
  label: __("600"),
  value: "600"
}, {
  label: __("700"),
  value: "700"
}, {
  label: __("800"),
  value: "800"
}, {
  label: __("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: __("Default"),
  value: ""
}, {
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: __("Default"),
  value: ""
}, {
  label: __("None"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-control */ "./util/typography-control-v2/unit-control.js");
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control-v2/FontPicker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./util/typography-control-v2/Icon.js");
/* harmony import */ var _WithResButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WithResButtons */ "./util/typography-control-v2/WithResButtons.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;






function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_FontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forFontSize",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLetterSpacing",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLineHeight",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/typography-control-v2/unit-control.js":
/*!****************************************************!*\
  !*** ./util/typography-control-v2/unit-control.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/withResButtons/index.js":
/*!**************************************!*\
  !*** ./util/withResButtons/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(label ? "resBtns" : "resIcons")
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: "5px"
    },
    className: "resLabel"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map