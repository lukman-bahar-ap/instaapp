(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UrlParser);

/***/ })

}]);