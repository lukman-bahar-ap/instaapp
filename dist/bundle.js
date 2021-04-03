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
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([12,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IMG = {
  LOGO_LARGE: '/img/logo.png',
  LOGO_WEBP: '/img/logo.webp',
  LOGO_SMALL: '/img/logo-small.png',
  NOT_FOUND: '/img/not-found.jpg',
  CIRCLE: '/img/circle.svg'
};
/* harmony default export */ __webpack_exports__["default"] = (IMG);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(7);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*{padding:0;margin:0;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}body,html{margin:0;padding:0;width:100%;height:100%}body{font-family:\"Montserrat\",sans-serif;font-display:swap;font-size:12px}.material-icons{vertical-align:middle;font-display:swap}h1{font-size:x-large;font-weight:800}h2{font-weight:600}h3{font-weight:400}.skip-link{position:absolute;top:-44px;left:0;background-color:#900;color:#fff;padding:8px;z-index:99;min-width:44px;min-height:44px}.skip-link:focus{top:0}header{margin:0 auto;width:100%;justify-content:center;z-index:9}.header__appbar{height:56px;line-height:56px;margin:0 auto;width:100%;justify-content:center;z-index:9}.appbar{position:fixed;display:flex;top:0;transition:.4s;background-color:#ffbd3b;z-index:9;width:100%;max-width:1200px;box-shadow:0 2px 4px 2px rgba(0,0,0,.2);border-radius:0 0 15px 15px}.center-text{text-align:center}.pr-low{padding-right:8px}.pl-low{padding-left:8px}.header__inner{height:52px;display:inline-block}.header__button{padding:16px;color:#3d2314;background-color:transparent;border:none;cursor:pointer;min-height:44px;min-width:44px}@media screen and (min-width: 499px){.header__button{display:none}.header__inner{margin-left:36px}}.logo{margin-top:10px;width:180px;height:auto}@media only screen and (min-width: 600px){.logo{width:190px;margin-left:32px}}.bg-gradient-primary{background:linear-gradient(to right, #f8efd4, #edc988)}.bg-gradient-secondary{background:linear-gradient(to right, #fae2b2, #ffbd3b)}.bg-gradient-third{background:linear-gradient(to right, #ffbf96, #fd92af)}.bg-gradient-fourth{background:linear-gradient(to right, #ffd5cd, #f9813a)}.bg-gradient-fiveth{background:linear-gradient(to right, #cee397, #8bcdcd)}.nav{width:100%;margin-right:8px 36px}@media only screen and (max-width: 499px){.nav{width:160px}}@media screen and (min-width: 500px)and (max-width: 900px){.nav{margin-right:48px}}@media only screen and (min-width: 901px)and (max-width: 1247px){.nav{margin-right:56px}}@media only screen and (min-width: 1248px){.nav{max-width:896px}}.nav__list{width:100%;padding:0;margin:0;text-align:right}@media screen and (min-width: 800px){.nav__list{margin:0 auto}}.nav__item{box-sizing:border-box;display:inline-block;text-align:center;line-height:24px;min-height:44px;font-weight:900;font-size:16px;margin:10px 8px}.nav__item .material-icons{margin:0 8px 0 8px}.nav a{display:inline-flex;padding:10px 10px 8px 10px;min-width:44px;min-height:44px;text-decoration:none;color:#161616}.nav a:hover,.nav a:active,.nav a:focus{text-decoration:none;cursor:pointer;color:#000;background-color:#ffe05d !important;border-radius:15%}@media screen and (max-width: 499px){.nav{z-index:10;background:linear-gradient(to bottom, #fae2b2, #ffbd3b);width:80%;min-height:300px;position:absolute;border-bottom-right-radius:99%;-webkit-transform:translate(-270px, -270px);transform:translate(-270px, -270px);transition:transform .3s ease}.open{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.nav__item{display:list-item;list-style:none;width:100%;text-align:left}}.hero{display:flex;justify-content:center;align-items:center;z-index:2}.hero__banner{height:380px;text-align:center;margin-top:8px;overflow:hidden;background:-webkit-linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2-small.jpg\");background:linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2-small.jpg\");background-size:cover;background-position:center;border-radius:0 0 20px 20px}@media screen and (min-width: 480px){.hero__banner{background:-webkit-linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2-large.jpg\");background:linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2-large.jpg\");background-size:cover;background-position:center}}@media screen and (min-width: 801px){.hero__banner{background:-webkit-linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2.jpg\");background:linear-gradient(rgba(22, 22, 22, 0.8), rgba(128, 116, 76, 0.7)),url(\"/img/heroes/hero-image_2.jpg\");background-size:cover;background-position:center}}@media screen and (min-width: 501px)and (max-width: 900px){.hero__banner{height:300px}}@media screen and (max-width: 500px){.hero__banner{height:250px}}.hero__inner{padding-top:16px;margin:0 auto;max-width:800px}.hero__title{color:#fff;font-size:36px}.hero__tagline{color:#fff;margin-top:16px;font-size:24px}main{width:100%;margin:0 auto;z-index:1}@media screen and (min-width: 1200px){main,header{max-width:1200px}}.content{padding:16px 32px 0 32px}@media screen and (max-width: 500px){.content{padding:16px 16px 0 16px}}.card-skeleton{width:280px;height:340px}.card-skeleton:empty::after{content:\"\";display:block;width:100%;height:100%;border-radius:6px;box-shadow:0 10px 45px rgba(0,0,0,.1);background-image:linear-gradient(90deg, rgba(211, 211, 211, 0) 0, rgba(211, 211, 211, 0.8) 50%, rgba(211, 211, 211, 0) 100%),linear-gradient(white 32px, transparent 0),linear-gradient(white 16px, transparent 0),linear-gradient(white 16px, transparent 0),radial-gradient(circle 16px at center, white 99%, transparent 0),linear-gradient(white 40px, transparent 0),linear-gradient(lightgrey 340px, transparent 0);background-size:200px calc($card-height - $footer-height),200px 32px,230px 16px,180px 16px,32px 32px,100% 40px,100% 100%;background-position:-150% 0,24px 180px,24px 242px,24px 265px,24px 24px,0 calc($card-height - $footer-height),0 0;background-repeat:no-repeat;animation:loading 1.5s infinite}@keyframes loading{to{background-position:350% 0,24px 180px,24px 242px,24px 265px,24px 24px,0 calc($card-height - $footer-height),0 0}}.latest{width:100%;margin:16px auto}@media screen and (min-width: 900px){.latest{margin:32px auto}}.card-horizontal{width:100%;height:140px;white-space:nowrap;position:relative;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none;text-align:center;align-self:center}.card-horizontal::-webkit-scrollbar{display:none}.card-horizontal button{width:120px;height:100%;margin:0 4px;display:inline-block;border:0;border-radius:10px;scroll-behavior:unset;word-wrap:break-word;position:relative;cursor:pointer}.card-horizontal button:hover,.card-horizontal button:focus{color:#646464 !important}.card-horizontal button .card-img-absolute{position:absolute;top:0;right:0;height:100%}.card-horizontal .category__content{padding:8px 0 8px 0}.category__title{font-size:19px;vertical-align:bottom;align-self:center;padding:8px 0 16px}.card-horizontal .category__value{font-size:32px;font-weight:600}@media screen and (min-width: 500px){.card-horizontal{margin-top:24px}.category__title{font-size:24px}.show-mobile-only{display:none !important}}@media screen and (min-width: 700px){.card-horizontal button{width:130px}.category__title{font-size:24px;text-align:center}}@media screen and (min-width: 900px){.card-horizontal button{width:180px}}@media screen and (min-width: 1200px){.card-horizontal button{width:200px}}.category-item{text-align:center;justify-self:center;overflow-wrap:break-word;display:contents}.category-item h3{padding:8px 8px 8px 8px}.category-item .material-icons{font-size:14px}.category-item a{padding:8px 0 8px 0;text-decoration:none;color:#646464 !important}.category-item a:hover{cursor:pointer;color:#fff}.filter__content{width:100%}@media screen and (min-width: 900px){.filter__content{padding-left:80px}}.filter__title{font-size:19px;vertical-align:bottom;align-self:center;padding-bottom:16px}@media screen and (min-width: 500px){.filter__title,.viral__title{font-size:24px}}@media screen and (min-width: 900px){.filter{display:grid;grid-template-columns:1fr 1fr}.filter__title{font-size:32px;text-align:left;padding-bottom:0}.detail__title{font-size:24px}.detail__title .material-icons{font-size:32px}}.search-container{display:flex}.search-container>input{font-family:\"Montserrat\",sans-serif;font-size:14px;font-weight:bolder;width:90%;outline:0;height:44px;line-height:44px;padding:0 16px;background-color:rgba(255,255,255,.8);color:#212121;border:1px solid #646464 !important;border-right:unset;border-radius:5px 0 0 5px}.search-container>input:focus{outline:0;border:1px solid rgba(141,141,141,.3);background-color:#fff}.search-container>input:focus::placeholder{font-weight:bolder}.search-container>input::placeholder{color:#777;font-size:14px;font-weight:normal}@media screen and (max-width: 550px){.search-container{flex-direction:inherit}}.search__button{outline:0;background:none;background-color:rgba(38,50,56,.8);min-height:44px;width:10%;min-width:54px;text-align:center;line-height:44px;border:0;color:#fff;font-size:16px;text-rendering:auto;text-shadow:0 1px 1px rgba(0,0,0,.2);-webkit-transition:background-color .4s ease;transition:background-color .4s ease;-webkit-border-radius:0 4px 4px 0;border-radius:0 5px 5px 0}.search__button:hover,.search__button:focus{opacity:.8;background-color:#ff9642 !important}.post-filter{background-color:#b85a0d;padding:32px 32px 32px 32px;margin:10px 0 0 10px;border-radius:10px}.horizontal-scroll{overflow-x:auto;white-space:nowrap;height:100px}.horizontal-scroll .post-filter{display:inline;color:0;text-align:center;padding:14px;width:300px;height:150px;margin:20px 10px;text-decoration:none}.horizontal-scroll .post-filter:hover{background-color:#777}.posts{display:grid;grid-template-columns:1fr;gap:16px;margin:32px 0}@media screen and (min-width: 700px){.posts{grid-template-columns:1fr 1fr;grid-column-gap:10px}.show-mobile-tab-only{display:none !important}.show-tab-only{display:none !important}}@media screen and (min-width: 499px)and (max-width: 700px){.hide-tab-only{display:none !important}}@media screen and (max-width: 700px){.show-desktop-only{display:none !important}}@media screen and (min-width: 900px){.posts{grid-template-columns:repeat(3, 1fr)}}@media screen and (min-width: 1600px){.posts{grid-template-columns:repeat(4, 1fr)}}.discover-item{width:100%;border-radius:10px;overflow:hidden;position:relative}.discover-item__content{padding:8px 8px 0 8px;background-color:#fff;position:relative;text-align:center;margin:30% 16px 16px 16px;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}@media screen and (max-width: 500px){.show-tab-only{display:none !important}}.discover-item__card-img{position:absolute;width:100%;height:250px;border-radius:10px;box-shadow:0 0 4px 0 rgba(0,0,0,.2);background:-webkit-linear-gradient(rgba(22, 22, 22, 0.6), rgba(128, 116, 76, 0.1));background:linear-gradient(rgba(22, 22, 22, 0.6), rgba(128, 116, 76, 0.1))}.discover-item__thumbnail{position:absolute;width:100%;height:250px;object-fit:cover;object-position:center;border-radius:10px}@media screen and (min-width: 500px)and (max-width: 699px){.discover-item__content{margin:25% 16px 16px 16px}}.discover-item__info{width:fit-content;background-color:#fff;padding:6px 8px 6px 8px;margin:16px;align-items:center;border-radius:10px;overflow:hidden;opacity:.8}.discover-item__rate{font-size:12px;font-weight:bolder;text-transform:uppercase;color:#000}.discover-item__rate .material-icons{font-size:14px}.discover-item__title{font-size:16px;transition:.3s opacity;font-weight:600;border-bottom:1px solid #eee}.discover-item__title:hover{opacity:.5}.discover-item__title a{text-decoration:none;color:#646464 !important;min-height:44px;padding-top:8px;display:inherit}.discover-item__description{margin-top:16px;font-size:14px;line-height:1.5em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.discover-item__readmore{text-transform:uppercase;padding:16px 24px 16px 24px;cursor:pointer;color:#000;align-items:center;border:none;background-color:#ffe05d !important;transition:opacity .3s;margin:16px 0;font-variant-caps:all-petite-caps;border-radius:10px;min-height:44px}.discover-item__readmore:hover,.discover-item__readmore:focus{right:0;background-color:#ffe05d !important;opacity:.5}.viral-item{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:100%;border-radius:10px;overflow:hidden;position:relative}.viral-item__thumbnail{position:absolute;width:100%;height:250px;object-fit:cover;object-position:center;border-radius:10px}.viral__title{font-size:24px;color:#3d2314;font-weight:bolder;vertical-align:bottom;align-self:center;padding-bottom:8px;border-bottom:1px solid #eee}.viral__title .material-icons{font-size:32px}.viral-item__content{padding:8px 16px;background-color:#fff;color:#000;position:relative;margin-top:35%;border-radius:25px 25px 0 0}.viral-item__description{margin-top:16px;font-size:14px;line-height:1.5em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media screen and (min-width: 900px){.viral__title{font-size:32px}.viral__title .material-icons{font-size:40px}}.detail-item{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:100%;border-radius:10px;overflow:hidden;position:relative;margin-bottom:8px}.detail-item__card-img{position:absolute;width:100%;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}@media screen and (min-width: 650px)and (max-width: 899px){.detail-item{width:450px}}@media screen and (min-width: 900px){.detail-item{width:600px}}.detail__title{color:#000;font-weight:bolder;align-self:center;margin-bottom:8px}.detail-resto__name{font-size:16px;font-weight:600;margin:8px 0 8px 0}.detail-item__category{background-color:#ff7100 !important;padding:4px;border-radius:4px;font-size:9px;margin-right:4px}.detail-item__information{margin-bottom:8px}.detail-item__information .material-icons,.review__card .material-icons{font-size:14px}.detail__information{padding:8px 16px;background-color:#fff;position:relative;margin-top:59%;height:59%;border-radius:25px 25px 0 0}.detail-item__poster{width:100%;object-fit:cover;object-position:center;border-radius:10px}.detail__menu ul{padding-left:16px}.detail__menu li{padding:4px;overflow-wrap:break-word}.detail__menu h4{margin:16px 0 8px 0}.detail__menu h4 .material-icons{font-size:14px}@media screen and (min-width: 500px){.detail__title{font-size:20px}.detail__information{margin-top:50%}}.resto{width:100%;display:grid;grid-template-columns:1fr;gap:18px 16px}.detail__menu{grid-template-columns:1fr;gap:0 8px}@media screen and (min-width: 1024px){.detail__menu{display:grid;grid-template-columns:1fr 1fr}}.resto .resto__description{width:100%;overflow:hidden;position:relative;padding:16px;margin-bottom:16px;box-shadow:0 2px 8px 0 rgba(0,0,0,.2);border-radius:10px}.resto .resto__poster{width:100%;max-width:600px;border-radius:10px}.detail__header{font-size:16px;color:#646464 !important;font-weight:bolder;vertical-align:bottom;align-self:center;padding-bottom:8px;border-bottom:1px solid #eee;margin:16px 0 16px 0}.discover-item__description .material-icons{font-size:14px}.detail-item__content{padding:8px 16px;background-color:#fff;position:relative;margin-top:35%;border-radius:25px 25px 0 0}@media screen and (min-width: 500px){.detail__header{font-size:19px}}@media screen and (min-width: 900px){.detail__header{font-size:24px}}@media screen and (min-width: 650px){.resto{grid-template-columns:auto 1fr}.resto .review__card{grid-column-start:1;grid-column-end:3}.resto .resto__description{grid-column-start:1;grid-column-end:3}}.review__form{margin:16px 0 32px 0}.review-container{margin:8px;max-width:600px;display:grid}.review-container label{margin:4px;font-size:14px;font-weight:bolder;display:inline}.review-container>input,.review-container>textarea{font-family:\"Montserrat\",sans-serif;font-size:14px;font-weight:bolder;width:90%;outline:0;min-height:44px;padding:4px 16px;background-color:rgba(255,255,255,.8);color:#212121;border:1px solid #646464 !important;border-right:unset;border-radius:5px}.review-container>input:focus,.review-container>textarea:focus{outline:0;border:1px solid rgba(141,141,141,.3);background-color:#fff}.review-container>input:focus::placeholder,.review-container>textarea:focus::placeholder{font-weight:bolder}.review-container>input::placeholder,.review-container>textarea::placeholder{color:#777;font-size:14px;font-weight:normal}.review__button{outline:0;background:none;background-color:rgba(38,50,56,.8);min-height:44px;width:100px;min-width:54px;padding:0 8px 0 8px;text-align:center;line-height:44px;border:0;color:#fff;font-size:16px;text-rendering:auto;text-shadow:0 1px 1px rgba(0,0,0,.2);-webkit-transition:background-color .4s ease;transition:background-color .4s ease;-webkit-border-radius:0 4px 4px 0;border-radius:5px}.review__button:hover{opacity:.8;background-color:#ff9642 !important}.review__button:focus{opacity:.8;background-color:#ff9642 !important}.review__card{width:100%;overflow:hidden;position:relative;padding:16px;margin-bottom:16px;box-shadow:0 0 4px 0 rgba(0,0,0,.2);border-radius:5px}.review-name{font-weight:bolder}.review-body{padding-top:8px}.review-date{font-style:italic;padding-top:8px;color:#646464 !important;font-size:10px}.detail__title a{min-height:48px;border-radius:25px}.back-button{height:48px;min-width:46px;padding:16px 6px 8px 8px;color:#000;text-decoration:none}.preload-container{width:100%;text-align:center;align-items:center}.lds-ripple{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple div{position:absolute;border:4px solid #ff9642 !important;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple div:nth-child(2){animation-delay:-0.5s}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0;left:0;width:72px;height:72px;opacity:0}}.like{font-size:18px;position:fixed;bottom:16px;right:16px;background-color:#ffe05d !important;color:#ff7100 !important;border:0;border-radius:50%;width:55px;height:55px;cursor:pointer;display:flex;align-items:center;justify-content:center}@media only screen and (min-width: 1200px){.like{bottom:32px;right:32px}}#toast{visibility:hidden;width:fit-content;height:50px;margin:auto;background-color:#ffe05d !important;text-align:center;border-radius:15px;position:fixed;display:flex;z-index:99;left:0;right:0;bottom:60px;font-size:17px;white-space:nowrap;padding:16px}#toast #img{min-height:50px;box-sizing:border-box}#toast #desc{padding-left:16px;color:#000;overflow:hidden;white-space:nowrap}#toast.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}footer{background:url(\"/img/footer-background.png\") repeat;width:100%;height:100px;margin-top:32px}footer p{text-align:center;font-weight:bolder;color:#070707;padding:60px 0 0 0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeroElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HeroElement, _HTMLElement);

  var _super = _createSuper(HeroElement);

  function HeroElement() {
    _classCallCheck(this, HeroElement);

    return _super.apply(this, arguments);
  }

  _createClass(HeroElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            <div class=\"hero hero__banner\">\n                <div class=\"hero__inner\">\n                    <h1 class=\"hero__title\">Are You Food Hunter?</h1>\n                    <p class=\"hero__tagline\">Get experience now</p>\n                </div>\n            </div>\n        ";
    }
  }]);

  return HeroElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('hero-elm', HeroElement);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FooterElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FooterElement, _HTMLElement);

  var _super = _createSuper(FooterElement);

  function FooterElement() {
    _classCallCheck(this, FooterElement);

    return _super.apply(this, arguments);
  }

  _createClass(FooterElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            <footer>\n                <div><p>Lukman Bahar AP - Copyright \xA9 2020 - diresto</p></div>\n            </footer>\n        ";
    }
  }]);

  return FooterElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('footer-elm', FooterElement);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(5);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(6);

// EXTERNAL MODULE: ./src/scripts/globals/assets.js
var assets = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/views/components/app-bar.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var app_bar_AppBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AppBar, _HTMLElement);

  var _super = _createSuper(AppBar);

  function AppBar() {
    _classCallCheck(this, AppBar);

    return _super.apply(this, arguments);
  }

  _createClass(AppBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            <div class=\"appbar\" id=\"appbar\">\n                <button id=\"drawer-open\" class=\"header__button\" aria-label=\"navigation menu\">\n                    <i class=\"material-icons\">menu</i>\n                </button>\n                <div class=\"header__inner\">\n                    <picture>\n                        <source type=\"image/webp\" srcset=\"".concat(assets["default"].LOGO_WEBP, "\">\n                        <source type=\"image/jpeg\" srcset=\"").concat(assets["default"].LOGO_LARGE, "\">\n                            <img src=\"").concat(assets["default"].LOGO_LARGE, "\"\n                            srcset=\"").concat(assets["default"].LOGO_SMALL, " 480w, ").concat(assets["default"].LOGO_LARGE, " 1080w\"\n                            sizes=\"(max-width: 600px) 480px, 1080px\"\n                            width=\"190px\" height=\"39px\"\n                            class=\"logo lazyload\" alt=\"logo diresto\">\n                    </picture>\n                </div>\n                <nav id=\"drawer\" class=\"nav\">\n                    <ul class=\"nav__list\" aria-label=\"navigation menu\">\n                        <li class=\"nav__item show-mobile-only center-text\">\n                            <button id=\"drawer-close\" class=\"header__button\" \n                            aria-label=\"close navigation menu\" accesskey=\"c\">\n                                <i class=\"material-icons\">north_west</i>\n                            </button>\n                        </li>\n                        <li class=\"nav__item\">\n                            <a href=\"#/home\" aria-label=\"Home page\" accesskey=\"h\">\n                                <i class=\"material-icons show-mobile-tab-only\">fastfood</i>\n                                <div class=\"hide-tab-only\">Home</div>\n                            </a>\n                        </li>\n                        <li class=\"nav__item\">\n                            <a href=\"#/fav\" aria-label=\"access to favorite page\" accesskey=\"f\">\n                                <i class=\"material-icons show-mobile-tab-only\">favorite</i>\n                                <div class=\"hide-tab-only\">Favorite</div>\n                            </a>\n                        </li>\n                        <li class=\"nav__item\">\n                            <a href=\"https://www.linkedin.com/in/lukman-bahar-agung-p-aaa9276b/\" \n                            target=\"_blank\" rel=\"noopener\" aria-label=\"acces to about us page\"\n                            accesskey=\"a\">\n                            <i class=\"material-icons show-mobile-tab-only\">account_circle</i>\n                                <div class=\"hide-tab-only\">About Us</div>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>    \n        ");
    }
  }]);

  return AppBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('app-bar', app_bar_AppBar);
// EXTERNAL MODULE: ./src/scripts/views/components/hero-elm.js
var hero_elm = __webpack_require__(10);

// EXTERNAL MODULE: ./src/scripts/views/components/footer-elm.js
var footer_elm = __webpack_require__(11);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js');
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// CONCATENATED MODULE: ./src/scripts/views/app.js
function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(_ref) {
    var open = _ref.open,
        close = _ref.close,
        drawer = _ref.drawer,
        hero = _ref.hero,
        content = _ref.content;

    app_classCallCheck(this, App);

    this._open = open;
    this._close = close;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  app_createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      var _this = this;

      __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 25)).then(function (module) {
        return module["default"];
      }).then(function (DrawerInitiator) {
        DrawerInitiator.init({
          open: _this._open,
          close: _this._close,
          drawer: _this._drawer,
          hero: _this._hero,
          content: _this._content
        });
      });
    }
  }, {
    key: "transactionPage",
    value: function () {
      var _transactionPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return page.render();

              case 2:
                this._content.innerHTML = _context.sent;
                _context.next = 5;
                return page.afterRender();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function transactionPage(_x) {
        return _transactionPage.apply(this, arguments);
      }

      return transactionPage;
    }()
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var _UrlParser, url;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 15)).then(function (module) {
                  return module["default"];
                }).then(function (UrlParser) {
                  return UrlParser;
                });

              case 2:
                _UrlParser = _context2.sent;
                url = _UrlParser.parseActiveUrlWithCombiner();
                Promise.all(/* import() */[__webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 26)).then(function (module) {
                  return module["default"];
                }).then(function (Routes) {
                  var page = Routes[url];

                  _this2.transactionPage(page);
                })["catch"](function (error) {
                  return new Error(error);
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ var app = (App);
// CONCATENATED MODULE: ./src/scripts/index.js









var drawer = document.querySelector('#drawer');
var scripts_app = new app({
  open: document.querySelector('#drawer-open'),
  close: document.querySelector('#drawer-close'),
  drawer: drawer,
  hero: document.querySelector('.hero'),
  content: document.querySelector('#main-content')
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
});
window.addEventListener('hashchange', function (event) {
  __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 25)).then(function (module) {
    return module["default"];
  }).then(function (DrawerInitiator) {
    return DrawerInitiator._closeDrawer(event, drawer);
  })["catch"](function (error) {
    return new Error(error);
  });
  scripts_app.renderPage();
});
window.addEventListener('DOMContentLoaded', sw_register);

/***/ })
/******/ ]);