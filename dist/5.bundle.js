(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var API_HELPER = {
  option: function option(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API_KEY
      },
      body: JSON.stringify(data)
    };
  },
  check: function check(response) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var responseJson;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(response.status === 200)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return response.json();

            case 3:
              responseJson = _context.sent;
              return _context.abrupt("return", responseJson);

            case 5:
              return _context.abrupt("return", response.status);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (API_HELPER);

/***/ })

}]);