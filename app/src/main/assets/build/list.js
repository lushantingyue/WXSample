// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/9e204ba362ee6349d84d5a6e5bb3eedb', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/9e204ba362ee6349d84d5a6e5bb3eedb',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {},
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": function () {return this.intervalValue},
	        "autoPlay": function () {return this.isAutoPlay}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "slider-pages"
	          ],
	          "repeat": function () {return this.itemList},
	          "events": {
	            "click": "goWeexSite"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": function () {return this.pictureUrl}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "events": {
	        "click": "goWeexSite"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://oimagea4.ydstatic.com/image?id=6222330229718661748&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "立春:二月春风似剪刀! 你家那里怎么样?"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://oimageb1.ydstatic.com/image?id=-302388789351507758&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "林语堂:不为天地之道, 而成为自由且快乐的人"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": "http://oimageb2.ydstatic.com/image?id=-2969761961392390105&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "[搞事情] 继艾玛出演美女与野兽后, 花木兰将由白人扮演"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "marginTop": 10,
	    "marginLeft": 10,
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 200,
	    "height": 200
	  },
	  "title": {
	    "textAlign": "center",
	    "flex": 1,
	    "color": "#808080",
	    "fontSize": 36
	  },
	  "slider": {
	    "margin": 18,
	    "width": 714,
	    "height": 230
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 714,
	    "height": 200
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        intervalValue: "3000",
	        isShowIndicators: "true",
	        isAutoPlay: "true",
	        itemList: [{ title: '立春:二月春风似剪刀! 你家那里怎么样?', pictureUrl: 'http://oimagea4.ydstatic.com/image?id=6222330229718661748&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER' }, { title: '林语堂:不为天地之道, 而成为自由且快乐的人', pictureUrl: 'http://oimageb1.ydstatic.com/image?id=-302388789351507758&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER' }, { title: '[搞事情] 继艾玛出演美女与野兽后, 花木兰将由白人扮演', pictureUrl: 'http://oimageb2.ydstatic.com/image?id=-2969761961392390105&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER' }]
	    }}

	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);