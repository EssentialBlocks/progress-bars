/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// } from "../../../util/helpers";

var _window$EBProgressBar = window.EBProgressBarsControls,
  generateTypographyAttributes = _window$EBProgressBar.generateTypographyAttributes,
  generateResponsiveRangeAttributes = _window$EBProgressBar.generateResponsiveRangeAttributes,
  generateDimensionsAttributes = _window$EBProgressBar.generateDimensionsAttributes;
var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
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
    "default": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Progress Bar", "essential-blocks")
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
    type: "string",
    "default": "#4d4d4d"
  },
  counterColor: {
    type: "string",
    "default": "#4d4d4d"
  },
  progressColor: {
    type: "string",
    "default": "#7967ff"
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
    "default": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prefix", "essential-blocks")
  },
  suffix: {
    type: "string",
    "default": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Postfix", "essential-blocks")
  },
  prefixColor: {
    type: "string",
    "default": "#4d4d4d"
  }
}, generateTypographyAttributes(Object.values(_constants_typographyConstants__WEBPACK_IMPORTED_MODULE_1__))), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.PROGRESSBAR_WIDTH)), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.PROGRESSBAR_HEIGHT, {
  defaultRange: 12,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.PROGRESSBAR_SIZE, {
  defaultRange: 200,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.STROKE_WIDTH, {
  defaultRange: 12,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.BOX_HEIGHT, {
  defaultRange: 200,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.BOX_WIDTH, {
  defaultRange: 140,
  noUnits: true
})), generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.WRAPPER_MARGIN, {
  top: 0,
  right: 0,
  bottom: 25,
  left: 0,
  isLinked: false
})), generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_2__.TITLE_SPACE, {
  isLinked: false
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOX_HEIGHT": () => (/* binding */ BOX_HEIGHT),
/* harmony export */   "BOX_WIDTH": () => (/* binding */ BOX_WIDTH),
/* harmony export */   "CONTAINER_CLASS": () => (/* binding */ CONTAINER_CLASS),
/* harmony export */   "LAYOUT": () => (/* binding */ LAYOUT),
/* harmony export */   "PROGRESSBAR_HEIGHT": () => (/* binding */ PROGRESSBAR_HEIGHT),
/* harmony export */   "PROGRESSBAR_SIZE": () => (/* binding */ PROGRESSBAR_SIZE),
/* harmony export */   "PROGRESSBAR_WIDTH": () => (/* binding */ PROGRESSBAR_WIDTH),
/* harmony export */   "PX_PERCENTAGE": () => (/* binding */ PX_PERCENTAGE),
/* harmony export */   "STRIPE_CLASS": () => (/* binding */ STRIPE_CLASS),
/* harmony export */   "STROKE_WIDTH": () => (/* binding */ STROKE_WIDTH),
/* harmony export */   "TITLE_SPACE": () => (/* binding */ TITLE_SPACE),
/* harmony export */   "WRAPPER_CLASS": () => (/* binding */ WRAPPER_CLASS),
/* harmony export */   "WRAPPER_MARGIN": () => (/* binding */ WRAPPER_MARGIN)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var LAYOUT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line", "essential-blocks"),
  value: "line"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Rainbow", "essential-blocks"),
  value: "line_rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "essential-blocks"),
  value: "circle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle Fill", "essential-blocks"),
  value: "circle_fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Half Circle", "essential-blocks"),
  value: "half_circle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Half Circle Fill", "essential-blocks"),
  value: "half_circle_fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box", "essential-blocks"),
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
}];

// responsive range controll
var PROGRESSBAR_WIDTH = "wrpWidth";
var PROGRESSBAR_HEIGHT = "wrpHeight";
var PROGRESSBAR_SIZE = "wrpSize";
var STROKE_WIDTH = "stkWidth";
var BOX_WIDTH = "boxWidth";
var BOX_HEIGHT = "boxHeight";

// dimension control
var WRAPPER_MARGIN = "wrpMargin";
var TITLE_SPACE = "ttlSpace";

/***/ }),

/***/ "./src/constants/typographyConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/typographyConstants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_counter": () => (/* binding */ typoPrefix_counter),
/* harmony export */   "typoPrefix_prefix": () => (/* binding */ typoPrefix_prefix),
/* harmony export */   "typoPrefix_title": () => (/* binding */ typoPrefix_title)
/* harmony export */ });
var typoPrefix_title = "titleText";
var typoPrefix_counter = "counterText";
var typoPrefix_prefix = "prefixText";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * WordPress dependencies
 */



var deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref) {
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
    var stripeClass = showStripe ? " " + _constants__WEBPACK_IMPORTED_MODULE_2__.STRIPE_CLASS[stripeAnimation] : "";
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-progressbar-wrapper ".concat(blockId)
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-progressbar-".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.CONTAINER_CLASS[layout], "-container ").concat(wrapperAlign)
    }, (layout === "line" || layout === "line_rainbow") && title && /*#__PURE__*/React.createElement(attributes.titleTag, {
      "class": "eb-progressbar-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "eb-progressbar ".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.WRAPPER_CLASS[layout]).concat(stripeClass),
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
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/**
 * WordPress dependencies
 */





/**
 * Internal depenencies
 */




var _window$EBProgressBar = window.EBProgressBarsControls,
  duplicateBlockIdFix = _window$EBProgressBar.duplicateBlockIdFix,
  softMinifyCssStrings = _window$EBProgressBar.softMinifyCssStrings,
  generateTypographyStyles = _window$EBProgressBar.generateTypographyStyles,
  generateResponsiveRangeStyles = _window$EBProgressBar.generateResponsiveRangeStyles,
  generateDimensionsControlStyles = _window$EBProgressBar.generateDimensionsControlStyles;
function Edit(props) {
  var isSelected = props.isSelected,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId;
  var circle_half_left = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var circle_half_right = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var circle_pie = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var line = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var circle_half = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var box = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
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
    suffix = attributes.suffix,
    prefixColor = attributes.prefixColor,
    classHook = attributes.classHook;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  }, [layout, progress, animationDuration]);

  // wrapper margin
  var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.WRAPPER_MARGIN,
      styleFor: "margin",
      attributes: attributes
    }),
    wrapperMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrapperMarginTab = _generateDimensionsCo.dimensionStylesTab,
    wrapperMarginMobile = _generateDimensionsCo.dimensionStylesMobile;

  // progress bar width
  var _generateResponsiveRa = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_WIDTH,
      property: "width",
      attributes: attributes
    }),
    progressBarWidthDesktop = _generateResponsiveRa.rangeStylesDesktop,
    progressBarWidthTab = _generateResponsiveRa.rangeStylesTab,
    progressBarWidthMobile = _generateResponsiveRa.rangeStylesMobile;

  // progress bar height
  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_HEIGHT,
      property: "height",
      attributes: attributes,
      customUnit: "px"
    }),
    progressBarHeightDesktop = _generateResponsiveRa2.rangeStylesDesktop,
    progressBarHeightTab = _generateResponsiveRa2.rangeStylesTab,
    progressBarHeightMobile = _generateResponsiveRa2.rangeStylesMobile;

  // stroke width
  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.STROKE_WIDTH,
      property: "border-width",
      attributes: attributes,
      customUnit: "px"
    }),
    strokeWidthDesktop = _generateResponsiveRa3.rangeStylesDesktop,
    strokeWidthTab = _generateResponsiveRa3.rangeStylesTab,
    strokeWidthMobile = _generateResponsiveRa3.rangeStylesMobile;

  // circle progressbar width
  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_SIZE,
      property: "width",
      attributes: attributes,
      customUnit: "px"
    }),
    circleWidthDesktop = _generateResponsiveRa4.rangeStylesDesktop,
    circleWidthTab = _generateResponsiveRa4.rangeStylesTab,
    circleWidthMobile = _generateResponsiveRa4.rangeStylesMobile;

  // circle progressbar height
  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_SIZE,
      property: "height",
      attributes: attributes,
      customUnit: "px"
    }),
    circleHeightDesktop = _generateResponsiveRa5.rangeStylesDesktop,
    circleHeightTab = _generateResponsiveRa5.rangeStylesTab,
    circleHeightMobile = _generateResponsiveRa5.rangeStylesMobile;

  // box progressbar height
  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BOX_HEIGHT,
      property: "height",
      attributes: attributes,
      customUnit: "px"
    }),
    boxHeightDesktop = _generateResponsiveRa6.rangeStylesDesktop,
    boxHeightTab = _generateResponsiveRa6.rangeStylesTab,
    boxHeightMobile = _generateResponsiveRa6.rangeStylesMobile;

  // box progressbar width
  var _generateResponsiveRa7 = generateResponsiveRangeStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BOX_WIDTH,
      property: "width",
      attributes: attributes,
      customUnit: "px"
    }),
    boxWidthDesktop = _generateResponsiveRa7.rangeStylesDesktop,
    boxWidthTab = _generateResponsiveRa7.rangeStylesTab,
    boxWidthMobile = _generateResponsiveRa7.rangeStylesMobile;

  // title typography
  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_title
    }),
    titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    titleTypoStylesTab = _generateTypographySt.typoStylesTab,
    titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  // title margin
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TITLE_SPACE,
      styleFor: "margin",
      attributes: attributes
    }),
    titleMarginDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    titleMarginTab = _generateDimensionsCo2.dimensionStylesTab,
    titleMarginMobile = _generateDimensionsCo2.dimensionStylesMobile;

  // counter typography
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_counter
    }),
    counterTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    counterTypoStylesTab = _generateTypographySt2.typoStylesTab,
    counterTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  // prefix & suffix typography
  var _generateTypographySt3 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_prefix
    }),
    prefixTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
    prefixTypoStylesTab = _generateTypographySt3.typoStylesTab,
    prefixTypoStylesMobile = _generateTypographySt3.typoStylesMobile;
  var halfCircleHeightTab = circleWidthTab || circleWidthDesktop;
  var halfCircleHeightMobile = circleWidthMobile || circleWidthDesktop;
  var desktopStyles = "\n\t\t.eb-progressbar-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginDesktop, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line {\n\t\t\t").concat(progressBarHeightDesktop, "\n\t\t\t").concat(strokeColor ? "background-color: ".concat(strokeColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t\t").concat(circleHeightDesktop, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner-content {\n\t\t\tpadding: ").concat(strokeWidthDesktop.replace(/\D/g, ""), "px;\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-half {\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t\t").concat(progressColor ? "border-color: ".concat(progressColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-fill .eb-progressbar-circle-half,\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle-fill .eb-progressbar-circle-half {\n\t\t\t").concat(progressColor ? "background-color: ".concat(progressColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightDesktop, "\n\t\t\t").concat(layout === "line" && isProgressGradient ? progressGradient ? "background-image: ".concat(progressGradient, ";") : "" : progressColor ? "background-color: ".concat(progressColor, ";") : "", ";\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthDesktop, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesDesktop, "\n\t\t\t").concat(titleMarginDesktop, "\n\t\t\t").concat(titleColor ? "color: ".concat(titleColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesDesktop, "\n\t\t\t").concat(counterColor ? "color: ".concat(counterColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\t").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : "", "\n\t\t\t").concat(strokeColor ? "border-color: ".concat(strokeColor, ";") : "", "\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t\t").concat(prefixTypoStylesDesktop, "\n\t\t\t").concat(prefixColor ? "color: ".concat(prefixColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle {\n\t\t\t").concat(circleWidthDesktop, "\n\t\t\theight: calc(").concat(circleWidthDesktop.replace(/\D/g, "") / 2, " * 1px);\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightDesktop, "\n\t\t\t").concat(boxWidthDesktop, "\n\t\t\t").concat(strokeWidthDesktop, "\n\t\t\t").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : "", "\n\t\t\t").concat(strokeColor ? "border-color: ".concat(strokeColor, ";") : "", "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-box-fill {\n\t\t\t").concat(isProgressGradient ? progressGradient ? "background-image: ".concat(progressGradient, ";") : "" : progressColor ? "background-color: ".concat(progressColor, ";") : "", ";\n\t\t}\n \t");
  var tabStyles = "\n\t\t.eb-progressbar-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line, .eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthTab, "\n\t\t\t").concat(circleHeightTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner-content {\n\t\t\tpadding: ").concat(strokeWidthTab.replace(/\D/g, ""), "px;\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesTab, "\n\t\t\t").concat(titleMarginTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-half {\n\t\t\t").concat(strokeWidthTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\t").concat(strokeWidthTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthTab, "\n\t\t\t").concat(prefixTypoStylesTab, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle {\n\t\t\t").concat(circleWidthTab, "\n\t\t\theight: calc(").concat(halfCircleHeightTab.replace(/\D/g, "") / 2, " * 1px);\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightTab, "\n\t\t\t").concat(boxWidthTab, "\n\t\t\t").concat(strokeWidthTab, "\n\t\t}\n\t");
  var mobileStyles = "\n\t\t.eb-progressbar-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line, .eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-fill {\n\t\t\t").concat(progressBarHeightMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle {\n\t\t\t").concat(circleWidthMobile, "\n\t\t\t").concat(circleHeightMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-container {\n\t\t\t").concat(progressBarWidthMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner-content {\n\t\t\tpadding: ").concat(strokeWidthMobile.replace(/\D/g, ""), "px;\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-title {\n\t\t\t").concat(titleTypoStylesMobile, "\n\t\t\t").concat(titleMarginMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-count-wrap {\n\t\t\t").concat(counterTypoStylesMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-half {\n\t\t\t").concat(strokeWidthMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-circle-inner {\n\t\t\t").concat(strokeWidthMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle-after {\n\t\t\t").concat(circleWidthMobile, "\n\t\t\t").concat(prefixTypoStylesMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-box {\n\t\t\t").concat(boxHeightMobile, "\n\t\t\t").concat(boxWidthMobile, "\n\t\t\t").concat(strokeWidthMobile, "\n\t\t}\n\n\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-half-circle {\n\t\t\t").concat(circleWidthMobile, "\n\t\t\theight: calc(").concat(halfCircleHeightMobile.replace(/\D/g, "") / 2, " * 1px);\n\t\t}\n\t");
  var inlineStyle = "";
  if (showInline) {
    inlineStyle = "\n\t\t\t.eb-progressbar-wrapper.".concat(blockId, " .eb-progressbar-line-container {\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-container .eb-progressbar-title {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 9;\n\t\t\t}\n\n\t\t\t.eb-progressbar-wrapper.").concat(blockId, " .eb-progressbar-line-container .eb-progressbar-line .eb-progressbar-count-wrap {\n\t\t\t\tbottom: 50% !important;\n\t\t\t\ttransform: translateY(50%) !important;\n\t\t\t}\n\t\t");
  }

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  var desktopAllStyles = softMinifyCssStrings("\n\t\t".concat(desktopStyles, "\n\t\t").concat(inlineStyle, "\n\t"));

  // all css styles for Tab in strings ⬇
  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(tabStyles, "\n\t"));

  // all css styles for Mobile in strings ⬇
  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(mobileStyles, "\n\t"));
  // Set All Style in "blockMeta" Attribute
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  }, [attributes]);

  // this useEffect is for creating an unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-progressbar";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId: clientId
    });
  }, []);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  var stripeClass = showStripe ? " " + _constants__WEBPACK_IMPORTED_MODULE_6__.STRIPE_CLASS[stripeAnimation] : "";
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], props), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: wrapperAlign,
    onChange: function onChange(wrapperAlign) {
      return setAttributes({
        wrapperAlign: wrapperAlign
      });
    }
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t ".concat(desktopAllStyles, "\n\n\t\t\t\t /* mimmikcssStart */\n\n\t\t\t\t ").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t ").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t /* mimmikcssEnd */\n\n\t\t\t\t @media all and (max-width: 1024px) {\n\n\t\t\t\t\t /* tabcssStart */\n\t\t\t\t\t ").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t /* tabcssEnd */\n\n\t\t\t\t }\n\n\t\t\t\t @media all and (max-width: 767px) {\n\n\t\t\t\t\t /* mobcssStart */\n\t\t\t\t\t ").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t /* mobcssEnd */\n\n\t\t\t\t }\n\t\t\t\t ")), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-wrapper ".concat(blockId)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.CONTAINER_CLASS[layout], "-container ").concat(wrapperAlign)
  }, (layout === "line" || layout === "line_rainbow") && title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar ".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.WRAPPER_CLASS[layout]).concat(stripeClass)
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
  }, suffix))))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var example = {
  attributes: {
    title: "Progress"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressbarIcon": () => (/* binding */ ProgressbarIcon)
/* harmony export */ });
var ProgressbarIcon = function ProgressbarIcon() {
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
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * WordPress dependeincies
 */


/**
 * Internal dependencies
 */








var _EBProgressBarsContro = EBProgressBarsControls,
  ebConditionalRegisterBlockType = _EBProgressBarsContro.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__.ProgressbarIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("progress", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bar", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb essential", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyConstants */ "./src/constants/typographyConstants.js");
/**
 * WordPress dependencies
 */






var _window$EBProgressBar = window.EBProgressBarsControls,
  ColorControl = _window$EBProgressBar.ColorControl,
  ResponsiveRangeController = _window$EBProgressBar.ResponsiveRangeController,
  ResponsiveDimensionsControl = _window$EBProgressBar.ResponsiveDimensionsControl,
  TypographyDropdown = _window$EBProgressBar.TypographyDropdown,
  GradientColorControl = _window$EBProgressBar.GradientColorControl,
  AdvancedControls = _window$EBProgressBar.AdvancedControls;


var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
    layout = attributes.layout,
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
    suffix = attributes.suffix,
    prefixColor = attributes.prefixColor;
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "essential-blocks"),
      className: "eb-tab general"
    }, {
      name: "styles",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style", "essential-blocks"),
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advanced", "essential-blocks"),
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls " + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout", "essential-blocks"),
      value: layout,
      options: _constants__WEBPACK_IMPORTED_MODULE_6__.LAYOUT,
      onChange: function onChange(newLayout) {
        return setAttributes({
          layout: newLayout
        });
      }
    }), (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Inline", "essential-blocks"),
      checked: showInline,
      onChange: function onChange() {
        setAttributes({
          showInline: !showInline
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks"),
      value: title,
      onChange: function onChange(newTitle) {
        return setAttributes({
          title: newTitle
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title HTML Tag", "essential-blocks"),
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
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Counter Value", "essential-blocks"),
      value: progress,
      onChange: function onChange(progress) {
        return setAttributes({
          progress: progress
        });
      },
      step: 1,
      min: 0,
      max: 100
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Counter?", "progress-bar"),
      checked: displayProgress,
      onChange: function onChange() {
        setAttributes({
          displayProgress: !displayProgress
        });
      }
    }), (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Stripe", "essential-blocks"),
      checked: showStripe,
      onChange: function onChange() {
        setAttributes({
          showStripe: !showStripe
        });
      }
    }), showStripe && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stripe Animation", "essential-blocks"),
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
    })), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prefix", "essential-blocks"),
      value: prefix,
      onChange: function onChange(newPrefix) {
        return setAttributes({
          prefix: newPrefix
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suffix", "essential-blocks"),
      value: suffix,
      onChange: function onChange(newSuffix) {
        return setAttributes({
          suffix: newSuffix
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings", "essential-blocks"),
      initialOpen: false
    }, (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_WIDTH,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_6__.PX_PERCENTAGE,
      min: 100,
      max: 1000,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_HEIGHT,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    })), (layout === "circle" || layout === "circle_fill" || layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.PROGRESSBAR_SIZE,
      resRequiredProps: resRequiredProps,
      min: 50,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stroke Width", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.STROKE_WIDTH,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    })), layout === "box" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BOX_WIDTH,
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.BOX_HEIGHT,
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 500,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stroke Width", "essential-blocks"),
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.STROKE_WIDTH,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1,
      noUnits: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation Duration", "essential-blocks"),
      value: animationDuration,
      onChange: function onChange(newAnimationDuration) {
        return setAttributes({
          animationDuration: newAnimationDuration
        });
      },
      step: 100,
      min: 1000,
      max: 10000
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "essential-blocks")
    }, (layout === "line" || layout === "line_rainbow") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    }), layout !== "line_rainbow" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill Color", "essential-blocks"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Fill Gradient", "essential-blocks"),
      checked: isProgressGradient,
      onChange: function onChange() {
        setAttributes({
          isProgressGradient: !isProgressGradient
        });
      }
    }), isProgressGradient || /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), isProgressGradient && /*#__PURE__*/React.createElement(GradientColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Color", "essential-blocks"),
      gradientColor: progressGradient,
      onChange: function onChange(progressGradient) {
        return setAttributes({
          progressGradient: progressGradient
        });
      }
    }))), (layout === "circle" || layout === "circle_fill" || layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill Color", "essential-blocks"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stroke Color", "essential-blocks"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    })), layout === "box" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: backgroundColor,
      onChange: function onChange(backgroundColor) {
        return setAttributes({
          backgroundColor: backgroundColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill Color", "essential-blocks"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Fill Gradient", "essential-blocks"),
      checked: isProgressGradient,
      onChange: function onChange() {
        setAttributes({
          isProgressGradient: !isProgressGradient
        });
      }
    }), isProgressGradient || /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: progressColor,
      onChange: function onChange(progressColor) {
        return setAttributes({
          progressColor: progressColor
        });
      }
    }), isProgressGradient && /*#__PURE__*/React.createElement(GradientColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Color", "essential-blocks"),
      gradientColor: progressGradient,
      onChange: function onChange(progressGradient) {
        return setAttributes({
          progressGradient: progressGradient
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stroke Color", "essential-blocks"),
      color: strokeColor,
      onChange: function onChange(strokeColor) {
        return setAttributes({
          strokeColor: strokeColor
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_title,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.TITLE_SPACE,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space", "essential-blocks")
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Counter", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_counter,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: counterColor,
      onChange: function onChange(counterColor) {
        return setAttributes({
          counterColor: counterColor
        });
      }
    })), (layout === "half_circle" || layout === "half_circle_fill") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prefix & Suffix", "progress-bar"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_prefix,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: prefixColor,
      onChange: function onChange(prefixColor) {
        return setAttributes({
          prefixColor: prefixColor
        });
      }
    })))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants__WEBPACK_IMPORTED_MODULE_6__.WRAPPER_MARGIN
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/**
 * WordPress dependencies
 */


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
    suffix = attributes.suffix,
    classHook = attributes.classHook;
  var stripeClass = showStripe ? " " + _constants__WEBPACK_IMPORTED_MODULE_1__.STRIPE_CLASS[stripeAnimation] : "";
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-wrapper ".concat(blockId)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar-".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_CLASS[layout], "-container ").concat(wrapperAlign)
  }, (layout === "line" || layout === "line_rainbow") && title && /*#__PURE__*/React.createElement(attributes.titleTag, {
    "class": "eb-progressbar-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eb-progressbar ".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_CLASS[layout]).concat(stripeClass),
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
  }, suffix)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"progress-bars/progress-bar-block","title":"Progress Bar","category":"widgets","keywords":["progress","bars","skill"],"description":"Make your website interactive with stunning progress bar","textdomain":"progress-bars","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"./style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkprogress_bars"] = globalThis["webpackChunkprogress_bars"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map