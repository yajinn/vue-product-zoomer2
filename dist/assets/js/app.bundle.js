(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ProductZoomer"] = factory();
	else
		root["ProductZoomer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/publish.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_drift_zoom_src_js_Drift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/drift-zoom/src/js/Drift.js */ "./src/assets/drift-zoom/src/js/Drift.js");
/* harmony import */ var _assets_svg_icons_arrow_down_s_fill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg-icons/arrow-down-s-fill.svg */ "./src/assets/svg-icons/arrow-down-s-fill.svg");
/* harmony import */ var _assets_svg_icons_arrow_down_s_fill_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_down_s_fill_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svg_icons_arrow_down_s_line_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg-icons/arrow-down-s-line.svg */ "./src/assets/svg-icons/arrow-down-s-line.svg");
/* harmony import */ var _assets_svg_icons_arrow_down_s_line_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_down_s_line_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_icons_arrow_left_s_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg-icons/arrow-left-s-fill.svg */ "./src/assets/svg-icons/arrow-left-s-fill.svg");
/* harmony import */ var _assets_svg_icons_arrow_left_s_fill_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_left_s_fill_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_icons_arrow_left_s_line_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/svg-icons/arrow-left-s-line.svg */ "./src/assets/svg-icons/arrow-left-s-line.svg");
/* harmony import */ var _assets_svg_icons_arrow_left_s_line_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_left_s_line_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_icons_arrow_right_s_fill_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/svg-icons/arrow-right-s-fill.svg */ "./src/assets/svg-icons/arrow-right-s-fill.svg");
/* harmony import */ var _assets_svg_icons_arrow_right_s_fill_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_right_s_fill_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_icons_arrow_right_s_line_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/svg-icons/arrow-right-s-line.svg */ "./src/assets/svg-icons/arrow-right-s-line.svg");
/* harmony import */ var _assets_svg_icons_arrow_right_s_line_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_right_s_line_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_icons_arrow_up_s_fill_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/svg-icons/arrow-up-s-fill.svg */ "./src/assets/svg-icons/arrow-up-s-fill.svg");
/* harmony import */ var _assets_svg_icons_arrow_up_s_fill_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_up_s_fill_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_svg_icons_arrow_up_s_line_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/svg-icons/arrow-up-s-line.svg */ "./src/assets/svg-icons/arrow-up-s-line.svg");
/* harmony import */ var _assets_svg_icons_arrow_up_s_line_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_icons_arrow_up_s_line_svg__WEBPACK_IMPORTED_MODULE_8__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










var actionName = function actionName(s) {
  return "scrollerAt" + (s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase());
};

var getCaculatedPanePosition = function getCaculatedPanePosition() {
  var paneStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "pane";
  var rect = arguments.length > 1 ? arguments[1] : undefined;
  var PanePosition = arguments.length > 2 ? arguments[2] : undefined;
  var caculatedPosition = "";

  if (PanePosition === "left") {
    caculatedPosition = "width:" + rect.width + "px;height:" + rect.height + "px;left:" + (paneStyle === "container" ? 0 : 0 - rect.width - window.scrollX - 5) + "px;";
  } else if (PanePosition === "right") {
    caculatedPosition = "width:" + rect.width + "px;height:" + rect.height + "px;left:" + (paneStyle === "container" ? 0 : rect.width + window.scrollX + 5) + "px;";
  }

  return caculatedPosition;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductZoomer",
  props: {
    baseZoomerOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    baseImages: {
      type: Object,
      required: true,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      previewImg: {},
      previewLargeImg: {},
      thumbs: [],
      normal_size: [],
      large_size: [],
      choosedThumb: {},
      drift: null,
      options: {
        zoomFactor: 4,
        pane: "container",
        hoverDelay: 300,
        namespace: "container-zoomer",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },
  computed: {
    base_container_div: function base_container_div() {
      return document.querySelector("." + this.options.namespace + "-base-container");
    },
    pane_container_id: function pane_container_id() {
      return this.options.namespace + "-pane-container";
    },
    preview_img: function preview_img() {
      return "." + this.options.namespace + "-base-container .preview-box";
    },
    scroller_icon_first: function scroller_icon_first() {
      if (["top", "bottom"].includes(this.options.scroller_position)) {
        if (this.options.scroller_button_style === 'line') {
          return _assets_svg_icons_arrow_left_s_line_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
        } else {
          return _assets_svg_icons_arrow_left_s_fill_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
        }
      } else if (["left", "right"].includes(this.options.scroller_position)) {
        if (this.options.scroller_button_style === 'line') {
          return _assets_svg_icons_arrow_up_s_line_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
        } else {
          return _assets_svg_icons_arrow_up_s_fill_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
        }
      }
    },
    scroller_icon_second: function scroller_icon_second() {
      if (["top", "bottom"].includes(this.options.scroller_position)) {
        if (this.options.scroller_button_style === 'line') {
          return _assets_svg_icons_arrow_right_s_line_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
        } else {
          return _assets_svg_icons_arrow_right_s_fill_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
        }
      } else if (["left", "right"].includes(this.options.scroller_position)) {
        if (this.options.scroller_button_style === 'line') {
          return _assets_svg_icons_arrow_down_s_line_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
        } else {
          return _assets_svg_icons_arrow_down_s_fill_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!["left", "right", "top", "bottom"].includes(this.options.scroller_position)) {
      throw "scroller_position is invalid";
    }

    if (!["fill", "line"].includes(this.options.scroller_button_style)) {
      throw "scroller_button_style is invalid";
    }

    if (!["left", "right"].includes(this.options.zoomer_pane_position)) {
      throw "zoomer_pane_position is invalid";
    }

    window.addEventListener("load", function () {
      _this[actionName(_this.options.scroller_position)]();

      _this.options.injectBaseStyles = true;

      if (_this.options.pane === "container-round") {
        _this.options.inlinePane = true;
      } else {
        _this.options.inlinePane = false;
        _this.options.paneContainer = document.getElementById(_this.pane_container_id);
        var rect = document.querySelector("." + _this.options.namespace + "-base-container").getBoundingClientRect();
        document.getElementById(_this.pane_container_id).setAttribute("style", getCaculatedPanePosition(_this.options.pane, rect, _this.options.zoomer_pane_position));
      }

      _this.drift = new _assets_drift_zoom_src_js_Drift_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector(_this.preview_img), _this.options);
    });
  },
  watch: {
    choosedThumb: function choosedThumb(thumb) {
      var matchNormalImg = this.normal_size.find(function (img) {
        return img.id === thumb.id;
      });
      var matchLargeImg = this.large_size.find(function (img) {
        return img.id === thumb.id;
      });
      this.previewLargeImg = Object.assign({}, matchLargeImg);
      this.previewImg = Object.assign({}, matchNormalImg);

      if (this.drift !== null) {
        this.drift.setZoomImageURL(matchLargeImg.url);
      }
    }
  },
  created: function created() {
    if (Object.keys(this.baseImages).length > 0) {
      for (var key in this.baseImages) {
        if (this.baseImages.hasOwnProperty(key)) {
          this[key] = this.baseImages[key];
        }
      }
    }

    if (this.normal_size.length === 0) {
      throw "Product Zoomer Need Normal Size Image At Least!!!";
    }

    if (this.thumbs.length === 0) {
      this.thumbs = Object.assign([], this.normal_size);
    } else {
      this.choosedThumb = this.thumbs[0];
    }

    if (this.large_size.length === 0) {
      this.large_size = Object.assign([], this.normal_size);
    }

    if (Object.keys(this.baseZoomerOptions).length > 0) {
      for (var _key in this.baseZoomerOptions) {
        if (this.baseZoomerOptions.hasOwnProperty(_key)) {
          var element = this.baseZoomerOptions[_key];
          this.options[_key] = element;
        }
      }
    }

    if (this.options.pane === "container-round" || this.options.pane === "container") {
      this.options.hoverBoundingBox = false;
    } else {
      this.options.hoverBoundingBox = true;
    }
  },
  methods: {
    moveThumbs: function moveThumbs(direction) {
      var len = this.thumbs.length;

      if (direction === "backward") {
        var moveThumb = this.thumbs.splice(len - 1, 1);
        this.thumbs = [moveThumb[0]].concat(_toConsumableArray(this.thumbs));
      } else {
        var _moveThumb = this.thumbs.splice(0, 1);

        this.thumbs = [].concat(_toConsumableArray(this.thumbs), [_moveThumb[0]]);
      }
    },
    chooseThumb: function chooseThumb(thumb, event) {
      var eventType = event.type;

      if (eventType === "mouseover") {
        if (this.options.move_by_click !== true) {
          this.choosedThumb = thumb;
        }
      } else {
        this.choosedThumb = thumb;
      }
    },
    scrollerAtBottom: function scrollerAtBottom() {
      var scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      var previewImg = document.querySelector("." + this.options.namespace + "-base-container " + ".preview-box");
      var thumbList = document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list");
      var thumbListHeight = thumbList.children[1].naturalHeight * (previewImg.naturalWidth / thumbList.children[1].naturalWidth) / (scrollerItemsCount - 1);
      document.querySelector("." + this.options.namespace + "-base-container").setAttribute("style", "height:" + (previewImg.naturalHeight + thumbListHeight + 2) + "px;width:" + previewImg.naturalHeight + "px;position:relative");
      document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list").setAttribute("style", "width:" + previewImg.naturalWidth + "px;height:" + thumbListHeight + "px;grid-template-columns:calc(100%/" + scrollerItemsCount + "/2) repeat(" + (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;");
    },
    scrollerAtTop: function scrollerAtTop() {
      var scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      var previewImg = document.querySelector("." + this.options.namespace + "-base-container " + ".preview-box");
      var thumbList = document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list");
      var thumbListHeight = thumbList.children[1].naturalHeight * (previewImg.naturalWidth / thumbList.children[1].naturalWidth) / (scrollerItemsCount - 1);
      document.querySelector("." + this.options.namespace + "-base-container").setAttribute("style", "height:" + (previewImg.naturalHeight + thumbListHeight + 2) + // 2px for grid gap
      "px;width:" + previewImg.naturalHeight + "px;position:relative");
      document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list").setAttribute("style", "width:" + previewImg.naturalWidth + "px;height:" + thumbListHeight + "px;grid-template-columns:calc(100%/" + scrollerItemsCount + "/2) repeat(" + (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;");
    },
    scrollerAtRight: function scrollerAtRight() {
      var scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      var previewImg = document.querySelector("." + this.options.namespace + "-base-container " + ".preview-box");
      var thumbList = document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list");
      var thumbListWidth = thumbList.children[1].naturalWidth * (previewImg.naturalHeight / thumbList.children[1].naturalHeight) / (scrollerItemsCount - 1);
      document.querySelector("." + this.options.namespace + "-base-container").setAttribute("style", "width:" + (previewImg.naturalWidth + thumbListWidth + 2) + "px;position:relative");
      document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list").setAttribute("style", "height:" + previewImg.naturalHeight + "px;width:" + thumbListWidth + "px;grid-template-rows:calc(100%/" + scrollerItemsCount + "/2) repeat(" + (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;");
    },
    scrollerAtLeft: function scrollerAtLeft() {
      var scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      var previewImg = document.querySelector("." + this.options.namespace + "-base-container " + ".preview-box");
      var thumbList = document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list");
      var thumbListWidth = thumbList.children[1].naturalWidth * (previewImg.naturalHeight / thumbList.children[1].naturalHeight) / (scrollerItemsCount - 1);
      document.querySelector("." + this.options.namespace + "-base-container").setAttribute("style", "width:" + (previewImg.naturalWidth + thumbListWidth + 2) + // 2px for grid gap
      "px;position:relative");
      document.querySelector("." + this.options.namespace + "-base-container " + ".thumb-list").setAttribute("style", "height:" + previewImg.naturalHeight + "px;width:" + thumbListWidth + "px;grid-template-rows:calc(100%/" + scrollerItemsCount + "/2) repeat(" + (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../assets/drift-zoom/src/css/drift-basic.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./src/assets/drift-zoom/src/css/drift-basic.css"), "");

// Module
exports.push([module.i, "\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.scroller-at-top[data-v-1b48a352] {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: 1fr;\n  align-items: center;\n}\n.scroller-at-top .preview-box[data-v-1b48a352] {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n.scroller-at-top .thumb-list[data-v-1b48a352] {\n  display: grid;\n  align-items: center;\n  grid-column-gap: 0.2em;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  visibility: hidden;\n}\n.scroller-at-bottom[data-v-1b48a352] {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: 1fr;\n  align-items: center;\n}\n.scroller-at-bottom .preview-box[data-v-1b48a352] {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n.scroller-at-bottom .thumb-list[data-v-1b48a352] {\n  display: grid;\n  align-items: center;\n  grid-column-gap: 0.2em;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  visibility: hidden;\n}\n.scroller-at-left[data-v-1b48a352] {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: 1fr;\n}\n.scroller-at-left .preview-box[data-v-1b48a352] {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n.scroller-at-left .thumb-list[data-v-1b48a352] {\n  display: grid;\n  grid-row-gap: 0.2em;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  visibility: hidden;\n  justify-items: center;\n}\n.scroller-at-right[data-v-1b48a352] {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: 1fr;\n}\n.scroller-at-right .preview-box[data-v-1b48a352] {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n.scroller-at-right .thumb-list[data-v-1b48a352] {\n  display: grid;\n  grid-row-gap: 0.2em;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  visibility: hidden;\n  justify-items: center;\n}\n.scroller-at-right .thumb-list .responsive-image[data-v-1b48a352],\n.scroller-at-left .thumb-list .responsive-image[data-v-1b48a352] {\n  width: auto;\n  height: 100%;\n}\n.scroller-at-top .thumb-list .responsive-image[data-v-1b48a352],\n.scroller-at-bottom .thumb-list .responsive-image[data-v-1b48a352] {\n  height: auto;\n  width: 100%;\n}\n.zoomer-control[data-v-1b48a352] {\n  cursor: pointer;\n}\n.choosed-thumb[data-v-1b48a352] {\n  border-radius: 0px;\n}\n.pane-container[data-v-1b48a352] {\n  display: none;\n  position: absolute;\n  z-index: 10000;\n  pointer-events: none;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./src/assets/drift-zoom/src/css/drift-basic.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./src/assets/drift-zoom/src/css/drift-basic.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@keyframes drift-fadeZoomIn {\n0% {\n    transform: scale(1.5);\n    opacity: 0;\n}\n100% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes drift-fadeZoomOut {\n0% {\n    transform: scale(1);\n    opacity: 1;\n}\n15% {\n    transform: scale(1.1);\n    opacity: 1;\n}\n100% {\n    transform: scale(0.5);\n    opacity: 0;\n}\n}\n@keyframes drift-loader-rotate {\n0% {\n    transform: translate(-50%, -50%) rotate(0);\n}\n50% {\n    transform: translate(-50%, -50%) rotate(-180deg);\n}\n100% {\n    transform: translate(-50%, -50%) rotate(-360deg);\n}\n}\n@keyframes drift-loader-before {\n0% {\n    transform: scale(1);\n}\n10% {\n    transform: scale(1.2) translateX(6px);\n}\n25% {\n    transform: scale(1.3) translateX(8px);\n}\n40% {\n    transform: scale(1.2) translateX(6px);\n}\n50% {\n    transform: scale(1);\n}\n60% {\n    transform: scale(0.8) translateX(6px);\n}\n75% {\n    transform: scale(0.7) translateX(8px);\n}\n90% {\n    transform: scale(0.8) translateX(6px);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes drift-loader-after {\n0% {\n    transform: scale(1);\n}\n10% {\n    transform: scale(1.2) translateX(-6px);\n}\n25% {\n    transform: scale(1.3) translateX(-8px);\n}\n40% {\n    transform: scale(1.2) translateX(-6px);\n}\n50% {\n    transform: scale(1);\n}\n60% {\n    transform: scale(0.8) translateX(-6px);\n}\n75% {\n    transform: scale(0.7) translateX(-8px);\n}\n90% {\n    transform: scale(0.8) translateX(-6px);\n}\n100% {\n    transform: scale(1);\n}\n}\n@-webkit-keyframes drift-fadeZoomIn {\n0% {\n    -webkit-transform: scale(1.5);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n    opacity: 1;\n}\n}\n@-webkit-keyframes drift-fadeZoomOut {\n0% {\n    -webkit-transform: scale(1);\n    opacity: 1;\n}\n15% {\n    -webkit-transform: scale(1.1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.5);\n    opacity: 0;\n}\n}\n@-webkit-keyframes drift-loader-rotate {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0);\n}\n50% {\n    -webkit-transform: translate(-50%, -50%) rotate(-180deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(-360deg);\n}\n}\n@-webkit-keyframes drift-loader-before {\n0% {\n    -webkit-transform: scale(1);\n}\n10% {\n    -webkit-transform: scale(1.2) translateX(6px);\n}\n25% {\n    -webkit-transform: scale(1.3) translateX(8px);\n}\n40% {\n    -webkit-transform: scale(1.2) translateX(6px);\n}\n50% {\n    -webkit-transform: scale(1);\n}\n60% {\n    -webkit-transform: scale(0.8) translateX(6px);\n}\n75% {\n    -webkit-transform: scale(0.7) translateX(8px);\n}\n90% {\n    -webkit-transform: scale(0.8) translateX(6px);\n}\n100% {\n    -webkit-transform: scale(1);\n}\n}\n@-webkit-keyframes drift-loader-after {\n0% {\n    -webkit-transform: scale(1);\n}\n10% {\n    -webkit-transform: scale(1.2) translateX(-6px);\n}\n25% {\n    -webkit-transform: scale(1.3) translateX(-8px);\n}\n40% {\n    -webkit-transform: scale(1.2) translateX(-6px);\n}\n50% {\n    -webkit-transform: scale(1);\n}\n60% {\n    -webkit-transform: scale(0.8) translateX(-6px);\n}\n75% {\n    -webkit-transform: scale(0.7) translateX(-8px);\n}\n90% {\n    -webkit-transform: scale(0.8) translateX(-6px);\n}\n100% {\n    -webkit-transform: scale(1);\n}\n}\n.drift-zoom-pane {\n  background: rgba(0, 0, 0, 0.5);\n  /* This is required because of a bug that causes border-radius to not\n  work with child elements in certain cases. */\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n}\n.drift-zoom-pane.drift-opening {\n  animation: drift-fadeZoomIn 180ms ease-out;\n  -webkit-animation: drift-fadeZoomIn 180ms ease-out;\n}\n.drift-zoom-pane.drift-closing {\n  animation: drift-fadeZoomOut 210ms ease-in;\n  -webkit-animation: drift-fadeZoomOut 210ms ease-in;\n}\n.drift-zoom-pane.drift-inline {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);\n}\n.drift-loading .drift-zoom-pane-loader {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  width: 66px;\n  height: 20px;\n  animation: drift-loader-rotate 1800ms infinite linear;\n  -webkit-animation: drift-loader-rotate 1800ms infinite linear;\n}\n.drift-zoom-pane-loader:before,\n.drift-zoom-pane-loader:after {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.9);\n}\n.drift-zoom-pane-loader:before {\n  left: 0;\n  animation: drift-loader-before 1800ms infinite linear;\n  -webkit-animation: drift-loader-before 1800ms infinite linear;\n}\n.drift-zoom-pane-loader:after {\n  right: 0;\n  animation: drift-loader-after 1800ms infinite linear;\n  -webkit-animation: drift-loader-after 1800ms infinite linear;\n  animation-delay: -900ms;\n  -webkit-animation-delay: -900ms;\n}\n.drift-bounding-box {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.options.namespace + '-base-container scroller-at-' + _vm.options.scroller_position},[_c('img',{staticClass:"responsive-image preview-box",attrs:{"src":_vm.previewImg.url,"data-zoom":_vm.previewLargeImg.url,"draggable":"false"}}),_vm._v(" "),_c('div',{staticClass:"thumb-list"},[_c('img',{staticClass:"zoomer-control responsive-image",attrs:{"src":_vm.scroller_icon_first,"alt":"move thumb icon"},on:{"click":function($event){return _vm.moveThumbs('backward')}}}),_vm._v(" "),_vm._l((_vm.thumbs),function(thumb,key){return _c('img',{directives:[{name:"show",rawName:"v-show",value:(key < _vm.options.scroll_items),expression:"key < options.scroll_items"}],key:key,staticClass:"responsive-image",class:{'choosed-thumb': thumb.id === _vm.choosedThumb.id},style:({'boxShadow' : thumb.id === _vm.choosedThumb.id ? '0px 0px 0px 2px ' + _vm.options.choosed_thumb_border_color : ''}),attrs:{"draggable":"false","src":thumb.url},on:{"mouseover":function($event){return _vm.chooseThumb(thumb, $event)},"click":function($event){return _vm.chooseThumb(thumb, $event)}}})}),_vm._v(" "),_c('img',{staticClass:"zoomer-control responsive-image",attrs:{"src":_vm.scroller_icon_second,"alt":"move thumb icon"},on:{"click":function($event){return _vm.moveThumbs('forward')}}})],2),_vm._v(" "),_c('div',{staticClass:"pane-container",attrs:{"id":_vm.pane_container_id}})])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4f185cd4", content, true, {});

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("44deb5fe", content, true, {});

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/assets/drift-zoom/src/js/BoundingBox.js":
/*!*****************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/BoundingBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoundingBox; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./src/assets/drift-zoom/src/js/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./src/assets/drift-zoom/src/js/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var __instance = function () {
  var instance;
  return function (newInstance) {
    if (newInstance) {
      instance = newInstance;
    }

    return instance;
  };
}();

var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox(options) {
    _classCallCheck(this, BoundingBox);

    if (__instance()) {
      return __instance();
    }

    this.isShowing = false;
    var _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$containerEl = options.containerEl,
        containerEl = _options$containerEl === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containerEl;
    this.settings = {
      namespace: namespace,
      zoomFactor: zoomFactor,
      containerEl: containerEl
    };
    this.openClasses = this._buildClasses('open');

    this._buildElement();

    __instance(this);
  }

  _createClass(BoundingBox, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = this.el ? this.el : document.createElement('div');
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this._buildClasses('bounding-box'));
    }
  }, {
    key: "show",
    value: function show(zoomPaneWidth, zoomPaneHeight) {
      this.isShowing = true;
      document.querySelector('body').appendChild(this.el);
      var style = this.el.style;
      style.width = "".concat(Math.round(zoomPaneWidth / this.settings.zoomFactor), "px");
      style.height = "".concat(Math.round(zoomPaneHeight / this.settings.zoomFactor), "px");
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openClasses);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isShowing) {
        document.querySelector('body').removeChild(this.el);
      }

      this.isShowing = false;
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
    }
  }, {
    key: "setPosition",
    value: function setPosition(movementPercentageOffsetX, movementPercentageOffsetY, triggerRect) {
      var pageXOffset = window.pageXOffset;
      var pageYOffset = window.pageYOffset;
      var inlineLeft = triggerRect.left + movementPercentageOffsetX * triggerRect.width - this.el.clientWidth / 2 + pageXOffset;
      var inlineTop = triggerRect.top + movementPercentageOffsetY * triggerRect.height - this.el.clientHeight / 2 + pageYOffset;

      if (inlineLeft < triggerRect.left + pageXOffset) {
        inlineLeft = triggerRect.left + pageXOffset;
      } else if (inlineLeft + this.el.clientWidth > triggerRect.left + triggerRect.width + pageXOffset) {
        inlineLeft = triggerRect.left + triggerRect.width - this.el.clientWidth + pageXOffset;
      }

      if (inlineTop < triggerRect.top + pageYOffset) {
        inlineTop = triggerRect.top + pageYOffset;
      } else if (inlineTop + this.el.clientHeight > triggerRect.top + triggerRect.height + pageYOffset) {
        inlineTop = triggerRect.top + triggerRect.height - this.el.clientHeight + pageYOffset;
      }

      this.el.style.left = "".concat(inlineLeft, "px");
      this.el.style.top = "".concat(inlineTop, "px");
    }
  }]);

  return BoundingBox;
}();



/***/ }),

/***/ "./src/assets/drift-zoom/src/js/Drift.js":
/*!***********************************************!*\
  !*** ./src/assets/drift-zoom/src/js/Drift.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drift; });
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom */ "./src/assets/drift-zoom/src/js/util/dom.js");
/* harmony import */ var _injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectBaseStylesheet */ "./src/assets/drift-zoom/src/js/injectBaseStylesheet.js");
/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trigger */ "./src/assets/drift-zoom/src/js/Trigger.js");
/* harmony import */ var _ZoomPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZoomPane */ "./src/assets/drift-zoom/src/js/ZoomPane.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Drift = /*#__PURE__*/function () {
  function Drift(triggerEl) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drift);

    this.destroy = function () {
      _this.trigger._unbindEvents();
    };

    this.triggerEl = triggerEl;

    if (!Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(this.triggerEl)) {
      throw new TypeError('`new Drift` requires a DOM element as its first argument.');
    } // A bit unexpected if you haven't seen this pattern before.
    // Based on the pattern here:
    // https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-defaults-destructured-and-restructured


    var _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$showWhitespa = options.showWhitespaceAtEdges,
        showWhitespaceAtEdges = _options$showWhitespa === void 0 ? false : _options$showWhitespa,
        _options$containInlin = options.containInline,
        containInline = _options$containInlin === void 0 ? false : _options$containInlin,
        _options$inlineOffset = options.inlineOffsetX,
        inlineOffsetX = _options$inlineOffset === void 0 ? 0 : _options$inlineOffset,
        _options$inlineOffset2 = options.inlineOffsetY,
        inlineOffsetY = _options$inlineOffset2 === void 0 ? 0 : _options$inlineOffset2,
        _options$inlineContai = options.inlineContainer,
        inlineContainer = _options$inlineContai === void 0 ? document.body : _options$inlineContai,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === void 0 ? 'data-zoom' : _options$sourceAttrib,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? 3 : _options$zoomFactor,
        _options$paneContaine = options.paneContainer,
        paneContainer = _options$paneContaine === void 0 ? document.body : _options$paneContaine,
        _options$inlinePane = options.inlinePane,
        inlinePane = _options$inlinePane === void 0 ? 375 : _options$inlinePane,
        _options$handleTouch = options.handleTouch,
        handleTouch = _options$handleTouch === void 0 ? true : _options$handleTouch,
        _options$onShow = options.onShow,
        onShow = _options$onShow === void 0 ? null : _options$onShow,
        _options$onHide = options.onHide,
        onHide = _options$onHide === void 0 ? null : _options$onHide,
        _options$injectBaseSt = options.injectBaseStyles,
        injectBaseStyles = _options$injectBaseSt === void 0 ? true : _options$injectBaseSt,
        _options$hoverDelay = options.hoverDelay,
        hoverDelay = _options$hoverDelay === void 0 ? 0 : _options$hoverDelay,
        _options$touchDelay = options.touchDelay,
        touchDelay = _options$touchDelay === void 0 ? 0 : _options$touchDelay,
        _options$hoverBoundin = options.hoverBoundingBox,
        hoverBoundingBox = _options$hoverBoundin === void 0 ? false : _options$hoverBoundin,
        _options$touchBoundin = options.touchBoundingBox,
        touchBoundingBox = _options$touchBoundin === void 0 ? false : _options$touchBoundin;

    if (inlinePane !== true && !Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(paneContainer)) {
      throw new TypeError('`paneContainer` must be a DOM element when `inlinePane !== true`');
    }

    if (!Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(inlineContainer)) {
      throw new TypeError('`inlineContainer` must be a DOM element');
    }

    this.settings = {
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer,
      sourceAttribute: sourceAttribute,
      zoomFactor: zoomFactor,
      paneContainer: paneContainer,
      inlinePane: inlinePane,
      handleTouch: handleTouch,
      onShow: onShow,
      onHide: onHide,
      injectBaseStyles: injectBaseStyles,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox
    };

    if (this.settings.injectBaseStyles) {
      Object(_injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    this._buildZoomPane();

    this._buildTrigger();
  }

  _createClass(Drift, [{
    key: "isShowing",
    get: function get() {
      return this.zoomPane.isShowing;
    }
  }, {
    key: "zoomFactor",
    get: function get() {
      return this.settings.zoomFactor;
    },
    set: function set(zf) {
      this.settings.zoomFactor = zf;
      this.zoomPane.settings.zoomFactor = zf;
    }
  }, {
    key: "_buildZoomPane",
    value: function _buildZoomPane() {
      this.zoomPane = new _ZoomPane__WEBPACK_IMPORTED_MODULE_3__["default"]({
        container: this.settings.paneContainer,
        zoomFactor: this.settings.zoomFactor,
        showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
        containInline: this.settings.containInline,
        inline: this.settings.inlinePane,
        namespace: this.settings.namespace,
        inlineOffsetX: this.settings.inlineOffsetX,
        inlineOffsetY: this.settings.inlineOffsetY,
        inlineContainer: this.settings.inlineContainer
      });
    }
  }, {
    key: "_buildTrigger",
    value: function _buildTrigger() {
      this.trigger = new _Trigger__WEBPACK_IMPORTED_MODULE_2__["default"]({
        el: this.triggerEl,
        zoomPane: this.zoomPane,
        handleTouch: this.settings.handleTouch,
        onShow: this.settings.onShow,
        onHide: this.settings.onHide,
        sourceAttribute: this.settings.sourceAttribute,
        hoverDelay: this.settings.hoverDelay,
        touchDelay: this.settings.touchDelay,
        hoverBoundingBox: this.settings.hoverBoundingBox,
        touchBoundingBox: this.settings.touchBoundingBox,
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor
      });
    }
  }, {
    key: "setZoomImageURL",
    value: function setZoomImageURL(imageURL) {
      this.zoomPane._setImageURL(imageURL);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.trigger.enabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.trigger.enabled = true;
    }
  }]);

  return Drift;
}();



/***/ }),

/***/ "./src/assets/drift-zoom/src/js/Trigger.js":
/*!*************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/Trigger.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./src/assets/drift-zoom/src/js/util/throwIfMissing.js");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./src/assets/drift-zoom/src/js/BoundingBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Trigger = /*#__PURE__*/function () {
  function Trigger() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Trigger);

    this._handleEntry = function (e) {
      e.preventDefault();
      _this._lastMovement = e;

      if (e.type == 'mouseenter' && _this.settings.hoverDelay) {
        _this.entryTimeout = setTimeout(_this._show, _this.settings.hoverDelay);
      } else if (_this.settings.touchDelay) {
        _this.entryTimeout = setTimeout(_this._show, _this.settings.touchDelay);
      } else {
        _this._show();
      }
    };

    this._show = function () {
      if (!_this.enabled) {
        return;
      }

      var onShow = _this.settings.onShow;

      if (onShow && typeof onShow === 'function') {
        onShow();
      }

      _this.settings.zoomPane.show(_this.settings.el.getAttribute(_this.settings.sourceAttribute), _this.settings.el.clientWidth, _this.settings.el.clientHeight);

      if (_this._lastMovement) {
        var touchActivated = _this._lastMovement.touches;

        if (touchActivated && _this.settings.touchBoundingBox || !touchActivated && _this.settings.hoverBoundingBox) {
          _this.boundingBox.show(_this.settings.zoomPane.el.clientWidth, _this.settings.zoomPane.el.clientHeight);
        }
      }

      _this._handleMovement();
    };

    this._hide = function (e) {
      e.preventDefault();
      _this._lastMovement = null;

      if (_this.entryTimeout) {
        clearTimeout(_this.entryTimeout);
      }

      if (_this.boundingBox) {
        _this.boundingBox.hide();
      }

      var onHide = _this.settings.onHide;

      if (onHide && typeof onHide === 'function') {
        onHide();
      }

      _this.settings.zoomPane.hide();
    };

    this._handleMovement = function (e) {
      if (e) {
        e.preventDefault();
        _this._lastMovement = e;
      } else if (_this._lastMovement) {
        e = _this._lastMovement;
      } else {
        return;
      }

      var movementX, movementY;

      if (e.touches) {
        var firstTouch = e.touches[0];
        movementX = firstTouch.clientX;
        movementY = firstTouch.clientY;
      } else {
        movementX = e.clientX;
        movementY = e.clientY;
      }

      var el = _this.settings.el;
      var rect = el.getBoundingClientRect();
      var offsetX = movementX - rect.left;
      var offsetY = movementY - rect.top;
      var percentageOffsetX = offsetX / _this.settings.el.clientWidth;
      var percentageOffsetY = offsetY / _this.settings.el.clientHeight;

      if (_this.boundingBox) {
        _this.boundingBox.setPosition(percentageOffsetX, percentageOffsetY, rect);
      }

      _this.settings.zoomPane.setPosition(percentageOffsetX, percentageOffsetY, rect);
    };

    var _options$el = options.el,
        _el = _options$el === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$el,
        _options$zoomPane = options.zoomPane,
        zoomPane = _options$zoomPane === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomPane,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$sourceAttrib,
        _options$handleTouch = options.handleTouch,
        handleTouch = _options$handleTouch === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$handleTouch,
        _options$onShow = options.onShow,
        _onShow = _options$onShow === void 0 ? null : _options$onShow,
        _options$onHide = options.onHide,
        _onHide = _options$onHide === void 0 ? null : _options$onHide,
        _options$hoverDelay = options.hoverDelay,
        hoverDelay = _options$hoverDelay === void 0 ? 0 : _options$hoverDelay,
        _options$touchDelay = options.touchDelay,
        touchDelay = _options$touchDelay === void 0 ? 0 : _options$touchDelay,
        _options$hoverBoundin = options.hoverBoundingBox,
        hoverBoundingBox = _options$hoverBoundin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$hoverBoundin,
        _options$touchBoundin = options.touchBoundingBox,
        touchBoundingBox = _options$touchBoundin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$touchBoundin,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor;

    this.settings = {
      el: _el,
      zoomPane: zoomPane,
      sourceAttribute: sourceAttribute,
      handleTouch: handleTouch,
      onShow: _onShow,
      onHide: _onHide,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox,
      namespace: namespace,
      zoomFactor: zoomFactor
    };

    if (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) {
      this.boundingBox = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["default"]({
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor,
        containerEl: this.settings.el.offsetParent
      });
    }

    this.enabled = true;

    this._bindEvents();
  }

  _createClass(Trigger, [{
    key: "isShowing",
    get: function get() {
      return this.settings.zoomPane.isShowing;
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.settings.el.addEventListener('mouseenter', this._handleEntry, false);
      this.settings.el.addEventListener('mouseleave', this._hide, false);
      this.settings.el.addEventListener('mousemove', this._handleMovement, false);

      if (this.settings.handleTouch) {
        this.settings.el.addEventListener('touchstart', this._handleEntry, false);
        this.settings.el.addEventListener('touchend', this._hide, false);
        this.settings.el.addEventListener('touchmove', this._handleMovement, false);
      }
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.settings.el.removeEventListener('mouseenter', this._handleEntry, false);
      this.settings.el.removeEventListener('mouseleave', this._hide, false);
      this.settings.el.removeEventListener('mousemove', this._handleMovement, false);

      if (this.settings.handleTouch) {
        this.settings.el.removeEventListener('touchstart', this._handleEntry, false);
        this.settings.el.removeEventListener('touchend', this._hide, false);
        this.settings.el.removeEventListener('touchmove', this._handleMovement, false);
      }
    }
  }]);

  return Trigger;
}();



/***/ }),

/***/ "./src/assets/drift-zoom/src/js/ZoomPane.js":
/*!**************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/ZoomPane.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomPane; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./src/assets/drift-zoom/src/js/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./src/assets/drift-zoom/src/js/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // All officially-supported browsers have this, but it's easy to
// account for, just in case.

var divStyle = document.createElement('div').style;
var HAS_ANIMATION = typeof document === 'undefined' ? false : 'animation' in divStyle || 'webkitAnimation' in divStyle;

var __instance = function () {
  var instance;
  return function (newInstance) {
    if (newInstance) {
      instance = newInstance;
    }

    return instance;
  };
}();

var ZoomPane = /*#__PURE__*/function () {
  function ZoomPane() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ZoomPane);

    this._completeShow = function () {
      _this.el.removeEventListener('animationend', _this._completeShow, false);

      _this.el.removeEventListener('webkitAnimationEnd', _this._completeShow, false);

      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(_this.el, _this.openingClasses);
    };

    this._completeHide = function () {
      _this.el.removeEventListener('animationend', _this._completeHide, false);

      _this.el.removeEventListener('webkitAnimationEnd', _this._completeHide, false);

      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(_this.el, _this.openClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(_this.el, _this.closingClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(_this.el, _this.inlineClasses);

      _this.el.setAttribute('style', ''); // The window could have been resized above or below `inline`
      // limits since the ZoomPane was shown. Because of this, we
      // can't rely on `this._isInline` here.


      if (_this.el.parentElement === _this.settings.container) {
        _this.settings.container.removeChild(_this.el);
      } else if (_this.el.parentElement === _this.settings.inlineContainer) {
        _this.settings.inlineContainer.removeChild(_this.el);
      }

      if (_this.settings.inline !== true) {
        _this.settings.container.style.display = 'none';
      }
    };

    this._handleLoad = function () {
      _this.imgEl.removeEventListener('load', _this._handleLoad, false);

      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(_this.el, _this.loadingClasses);
    };

    this.isShowing = false;
    var _options$container = options.container,
        container = _options$container === void 0 ? null : _options$container,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$inline = options.inline,
        inline = _options$inline === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$inline,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$showWhitespa = options.showWhitespaceAtEdges,
        showWhitespaceAtEdges = _options$showWhitespa === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$showWhitespa,
        _options$containInlin = options.containInline,
        containInline = _options$containInlin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containInlin,
        _options$inlineOffset = options.inlineOffsetX,
        inlineOffsetX = _options$inlineOffset === void 0 ? 0 : _options$inlineOffset,
        _options$inlineOffset2 = options.inlineOffsetY,
        inlineOffsetY = _options$inlineOffset2 === void 0 ? 0 : _options$inlineOffset2,
        _options$inlineContai = options.inlineContainer,
        inlineContainer = _options$inlineContai === void 0 ? document.body : _options$inlineContai;
    this.settings = {
      container: container,
      zoomFactor: zoomFactor,
      inline: inline,
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer
    };
    this.openClasses = this._buildClasses('open');
    this.openingClasses = this._buildClasses('opening');
    this.closingClasses = this._buildClasses('closing');
    this.inlineClasses = this._buildClasses('inline');
    this.loadingClasses = this._buildClasses('loading');

    this._buildElement();

    __instance(this);
  }

  _createClass(ZoomPane, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement('div');
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this._buildClasses('zoom-pane'));
      var loaderEl = document.createElement('div');
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(loaderEl, this._buildClasses('zoom-pane-loader'));
      this.el.appendChild(loaderEl);
      this.imgEl = document.createElement('img');
      this.el.appendChild(this.imgEl);
    }
  }, {
    key: "_setImageURL",
    value: function _setImageURL(imageURL) {
      this.imgEl.setAttribute('src', imageURL);
    }
  }, {
    key: "_setImageSize",
    value: function _setImageSize(triggerWidth, triggerHeight) {
      this.imgEl.style.width = "".concat(triggerWidth * this.settings.zoomFactor, "px");
      this.imgEl.style.height = "".concat(triggerHeight * this.settings.zoomFactor, "px");
    } // `percentageOffsetX` and `percentageOffsetY` must be percentages
    // expressed as floats between `0' and `1`.

  }, {
    key: "setPosition",
    value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
      var left = -(this.imgEl.clientWidth * percentageOffsetX - this.el.clientWidth / 2);
      var top = -(this.imgEl.clientHeight * percentageOffsetY - this.el.clientHeight / 2);
      var maxLeft = -(this.imgEl.clientWidth - this.el.clientWidth);
      var maxTop = -(this.imgEl.clientHeight - this.el.clientHeight);

      if (this.el.parentElement === this.settings.inlineContainer) {
        // This may be needed in the future to deal with browser event
        // inconsistencies, but it's difficult to tell for sure.
        // let scrollX = isTouch ? 0 : window.scrollX;
        // let scrollY = isTouch ? 0 : window.scrollY;
        var scrollX = window.pageXOffset;
        var scrollY = window.pageYOffset;
        var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - this.el.clientWidth / 2 + this.settings.inlineOffsetX + scrollX;
        var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - this.el.clientHeight / 2 + this.settings.inlineOffsetY + scrollY;

        if (this.settings.containInline) {
          if (inlineLeft < triggerRect.left + scrollX) {
            inlineLeft = triggerRect.left + scrollX;
          } else if (inlineLeft + this.el.clientWidth > triggerRect.left + triggerRect.width + scrollX) {
            inlineLeft = triggerRect.left + triggerRect.width - this.el.clientWidth + scrollX;
          }

          if (inlineTop < triggerRect.top + scrollY) {
            inlineTop = triggerRect.top + scrollY;
          } else if (inlineTop + this.el.clientHeight > triggerRect.top + triggerRect.height + scrollY) {
            inlineTop = triggerRect.top + triggerRect.height - this.el.clientHeight + scrollY;
          }
        }

        this.el.style.left = "".concat(inlineLeft, "px");
        this.el.style.top = "".concat(inlineTop, "px");
      }

      if (!this.settings.showWhitespaceAtEdges) {
        if (left > 0) {
          left = 0;
        } else if (left < maxLeft) {
          left = maxLeft;
        }

        if (top > 0) {
          top = 0;
        } else if (top < maxTop) {
          top = maxTop;
        }
      }

      this.imgEl.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");
      this.imgEl.style.webkitTransform = "translate(".concat(left, "px, ").concat(top, "px)");
    }
  }, {
    key: "_isInline",
    get: function get() {
      var inline = this.settings.inline;
      return inline === true || typeof inline === 'number' && window.innerWidth <= inline;
    }
  }, {
    key: "_removeListenersAndResetClasses",
    value: function _removeListenersAndResetClasses() {
      this.el.removeEventListener('animationend', this._completeShow, false);
      this.el.removeEventListener('animationend', this._completeHide, false);
      this.el.removeEventListener('webkitAnimationEnd', this._completeShow, false);
      this.el.removeEventListener('webkitAnimationEnd', this._completeHide, false);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.closingClasses);
    }
  }, {
    key: "show",
    value: function show(imageURL, triggerWidth, triggerHeight) {
      this._removeListenersAndResetClasses();

      this.isShowing = true;
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.loadingClasses);
      this.imgEl.addEventListener('load', this._handleLoad, false);

      this._setImageURL(imageURL);

      this._setImageSize(triggerWidth, triggerHeight);

      if (this._isInline) {
        this._showInline();
      } else {
        this._showInContainer();
      }

      if (HAS_ANIMATION) {
        this.el.addEventListener('animationend', this._completeShow, false);
        this.el.addEventListener('webkitAnimationEnd', this._completeShow, false);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openingClasses);
      }
    }
  }, {
    key: "_showInline",
    value: function _showInline() {
      this.settings.inlineContainer.appendChild(this.el);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.inlineClasses);
    }
  }, {
    key: "_showInContainer",
    value: function _showInContainer() {
      this.settings.container.style.display = 'block';
      this.settings.container.appendChild(this.el);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._removeListenersAndResetClasses();

      this.isShowing = false;

      if (HAS_ANIMATION) {
        this.el.addEventListener('animationend', this._completeHide, false);
        this.el.addEventListener('webkitAnimationEnd', this._completeHide, false);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.closingClasses);
      } else {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.inlineClasses);
      }
    }
  }]);

  return ZoomPane;
}();



/***/ }),

/***/ "./src/assets/drift-zoom/src/js/injectBaseStylesheet.js":
/*!**************************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/injectBaseStylesheet.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectBaseStylesheet; });
var RULES = "\n@keyframes noop {\n  0% { zoom: 1; }\n}\n\n@-webkit-keyframes noop {\n  0% { zoom: 1; }\n}\n\n.drift-zoom-pane.drift-open {\n  display: block;\n}\n\n.drift-zoom-pane.drift-opening, .drift-zoom-pane.drift-closing {\n  animation: noop 1ms;\n  -webkit-animation: noop 1ms;\n}\n\n.drift-zoom-pane {\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.drift-zoom-pane-loader {\n  display: none;\n}\n\n.drift-zoom-pane img {\n  position: absolute;\n  display: block;\n  max-width: none;\n  max-height: none;\n}\n\n.drift-bounding-box {\n  position: absolute;\n  pointer-events: none;\n}\n";
function injectBaseStylesheet() {
  if (document.querySelector('.drift-base-styles')) {
    return;
  }

  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.classList.add('drift-base-styles');
  styleEl.appendChild(document.createTextNode(RULES));
  var head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}

/***/ }),

/***/ "./src/assets/drift-zoom/src/js/util/dom.js":
/*!**************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/util/dom.js ***!
  \**************************************************/
/*! exports provided: isDOMElement, addClasses, removeClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMElement", function() { return isDOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return removeClasses; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object';
function isDOMElement(obj) {
  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && _typeof(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
}
function addClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.add(className);
  });
}
function removeClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.remove(className);
  });
}

/***/ }),

/***/ "./src/assets/drift-zoom/src/js/util/throwIfMissing.js":
/*!*************************************************************!*\
  !*** ./src/assets/drift-zoom/src/js/util/throwIfMissing.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throwIfMissing; });
function throwIfMissing() {
  throw new Error('Missing parameter');
}

/***/ }),

/***/ "./src/assets/svg-icons/arrow-down-s-fill.svg":
/*!****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-down-s-fill.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMiAxNmwtNi02aDEyeiIvPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-down-s-line.svg":
/*!****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-down-s-line.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-left-s-fill.svg":
/*!****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-left-s-fill.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik04IDEybDYtNnYxMnoiLz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./src/assets/svg-icons/arrow-left-s-line.svg":
/*!****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-left-s-line.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMC44MjggMTJsNC45NSA0Ljk1LTEuNDE0IDEuNDE0TDggMTJsNi4zNjQtNi4zNjQgMS40MTQgMS40MTR6Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-right-s-fill.svg":
/*!*****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-right-s-fill.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNiAxMmwtNiA2VjZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-right-s-line.svg":
/*!*****************************************************!*\
  !*** ./src/assets/svg-icons/arrow-right-s-line.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMy4xNzIgMTJsLTQuOTUtNC45NSAxLjQxNC0xLjQxNEwxNiAxMmwtNi4zNjQgNi4zNjQtMS40MTQtMS40MTR6Ii8+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-up-s-fill.svg":
/*!**************************************************!*\
  !*** ./src/assets/svg-icons/arrow-up-s-fill.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMiA4bDYgNkg2eiIvPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./src/assets/svg-icons/arrow-up-s-line.svg":
/*!**************************************************!*\
  !*** ./src/assets/svg-icons/arrow-up-s-line.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMiAxMC44MjhsLTQuOTUgNC45NS0xLjQxNC0xLjQxNEwxMiA4bDYuMzY0IDYuMzY0LTEuNDE0IDEuNDE0eiIvPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./src/components/ProductZoomer.vue":
/*!******************************************!*\
  !*** ./src/components/ProductZoomer.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true& */ "./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true&");
/* harmony import */ var _ProductZoomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductZoomer.vue?vue&type=script&lang=js& */ "./src/components/ProductZoomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductZoomer.vue?vue&type=style&index=0&lang=css& */ "./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& */ "./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ProductZoomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b48a352",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ProductZoomer.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/ProductZoomer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=style&index=1&id=1b48a352&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_style_index_1_id_1b48a352_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProductZoomer.vue?vue&type=template&id=1b48a352&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductZoomer_vue_vue_type_template_id_1b48a352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/publish.js":
/*!************************!*\
  !*** ./src/publish.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ProductZoomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProductZoomer */ "./src/components/ProductZoomer.vue");

var ProductZoomer = {
  install: function install(Vue, options) {
    Vue.component(_components_ProductZoomer__WEBPACK_IMPORTED_MODULE_0__["default"].name, _components_ProductZoomer__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProductZoomer);

/***/ })

/******/ });
});