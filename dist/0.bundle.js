(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var open = _ref.open,
        close = _ref.close,
        drawer = _ref.drawer,
        hero = _ref.hero,
        content = _ref.content;
    open.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    close.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
    hero.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerInitiator);

/***/ })

}]);