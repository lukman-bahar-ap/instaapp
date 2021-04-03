(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/assets.js
var assets = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/views/pages/home/component/viral-item.js
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



var viral_item_MenuItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MenuItem, _HTMLElement);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _super.apply(this, arguments);
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$_viral = this._viral,
          pictureId = _this$_viral.pictureId,
          name = _this$_viral.name,
          rating = _this$_viral.rating,
          category = _this$_viral.category,
          price = _this$_viral.price,
          description = _this$_viral.description;
      this.innerHTML = "\n          <img class=\"discover-item__thumbnail lazyload\"\n          data-src=\"".concat(pictureId || assets["default"].NOT_FOUND, "\"\n          alt=\"").concat(name, "\" crossorigin=\"anonymous\">\n          <div class=\"discover-item__card-img\"></div>  \n\n          <div class=\"discover-item__info\">\n              <p class=\"discover-item__rate\">\n              \u2B50\uFE0F ").concat(rating, "\n              </p>\n          </div>\n          \n          <div class=\"viral-item__content\">\n              <h3 class=\"discover-item__title\">\n                  <a href=\"#\" aria-label=\"").concat(name, " click to view content\">\n                      ").concat(name, "\n                  </a>\n              </h3>\n              <p class=\"viral-item__description\">\n                  <i class=\"material-icons\">fastfood</i> ").concat(category, " | \n                  <i class=\"material-icons pl-low\">monetization_on</i> ").concat(price, "\n              </p>\n              <p class=\"viral-item__description\">").concat(description, "</p>\n          </div>\n        ");
    }
  }, {
    key: "viral",
    set: function set(viral) {
      this._viral = viral;
      this.render();
    }
  }]);

  return MenuItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('viral-item', viral_item_MenuItem);
// CONCATENATED MODULE: ./src/scripts/views/pages/home/component/viral-list.js
function viral_list_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { viral_list_typeof = function _typeof(obj) { return typeof obj; }; } else { viral_list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return viral_list_typeof(obj); }

function viral_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function viral_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function viral_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) viral_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) viral_list_defineProperties(Constructor, staticProps); return Constructor; }

function viral_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) viral_list_setPrototypeOf(subClass, superClass); }

function viral_list_createSuper(Derived) { var hasNativeReflectConstruct = viral_list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = viral_list_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = viral_list_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return viral_list_possibleConstructorReturn(this, result); }; }

function viral_list_possibleConstructorReturn(self, call) { if (call && (viral_list_typeof(call) === "object" || typeof call === "function")) { return call; } return viral_list_assertThisInitialized(self); }

function viral_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function viral_list_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; viral_list_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !viral_list_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return viral_list_construct(Class, arguments, viral_list_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return viral_list_setPrototypeOf(Wrapper, Class); }; return viral_list_wrapNativeSuper(Class); }

function viral_list_construct(Parent, args, Class) { if (viral_list_isNativeReflectConstruct()) { viral_list_construct = Reflect.construct; } else { viral_list_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) viral_list_setPrototypeOf(instance, Class.prototype); return instance; }; } return viral_list_construct.apply(null, arguments); }

function viral_list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function viral_list_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function viral_list_setPrototypeOf(o, p) { viral_list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return viral_list_setPrototypeOf(o, p); }

function viral_list_getPrototypeOf(o) { viral_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return viral_list_getPrototypeOf(o); }



var ViralList = /*#__PURE__*/function (_HTMLElement) {
  viral_list_inherits(ViralList, _HTMLElement);

  var _super = viral_list_createSuper(ViralList);

  function ViralList() {
    viral_list_classCallCheck(this, ViralList);

    return _super.apply(this, arguments);
  }

  viral_list_createClass(ViralList, [{
    key: "renderError",
    value: function renderError(message) {
      this.innerHTML = "<h3>".concat(message, "</h3>");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.innerHTML = '';

      this._virals.forEach(function (viral) {
        var viralItemElement = document.createElement('viral-item');
        viralItemElement.viral = viral;
        viralItemElement.classList.add('viral-item');

        _this.appendChild(viralItemElement);
      });
    }
  }, {
    key: "virals",
    set: function set(virals) {
      this._virals = virals;
      this.render();
    }
  }]);

  return ViralList;
}( /*#__PURE__*/viral_list_wrapNativeSuper(HTMLElement));

customElements.define('viral-list', ViralList);
// CONCATENATED MODULE: ./src/scripts/views/pages/home/component/dashboard-card.js
function dashboard_card_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dashboard_card_typeof = function _typeof(obj) { return typeof obj; }; } else { dashboard_card_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dashboard_card_typeof(obj); }

function dashboard_card_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dashboard_card_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dashboard_card_createClass(Constructor, protoProps, staticProps) { if (protoProps) dashboard_card_defineProperties(Constructor.prototype, protoProps); if (staticProps) dashboard_card_defineProperties(Constructor, staticProps); return Constructor; }

function dashboard_card_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dashboard_card_setPrototypeOf(subClass, superClass); }

function dashboard_card_createSuper(Derived) { var hasNativeReflectConstruct = dashboard_card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dashboard_card_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dashboard_card_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dashboard_card_possibleConstructorReturn(this, result); }; }

function dashboard_card_possibleConstructorReturn(self, call) { if (call && (dashboard_card_typeof(call) === "object" || typeof call === "function")) { return call; } return dashboard_card_assertThisInitialized(self); }

function dashboard_card_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dashboard_card_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; dashboard_card_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !dashboard_card_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return dashboard_card_construct(Class, arguments, dashboard_card_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return dashboard_card_setPrototypeOf(Wrapper, Class); }; return dashboard_card_wrapNativeSuper(Class); }

function dashboard_card_construct(Parent, args, Class) { if (dashboard_card_isNativeReflectConstruct()) { dashboard_card_construct = Reflect.construct; } else { dashboard_card_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) dashboard_card_setPrototypeOf(instance, Class.prototype); return instance; }; } return dashboard_card_construct.apply(null, arguments); }

function dashboard_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function dashboard_card_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function dashboard_card_setPrototypeOf(o, p) { dashboard_card_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dashboard_card_setPrototypeOf(o, p); }

function dashboard_card_getPrototypeOf(o) { dashboard_card_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dashboard_card_getPrototypeOf(o); }



var dashboard_card_dashboardCard = /*#__PURE__*/function (_HTMLElement) {
  dashboard_card_inherits(dashboardCard, _HTMLElement);

  var _super = dashboard_card_createSuper(dashboardCard);

  function dashboardCard() {
    dashboard_card_classCallCheck(this, dashboardCard);

    return _super.apply(this, arguments);
  }

  dashboard_card_createClass(dashboardCard, [{
    key: "init",
    value: function init() {
      this.querySelector('#ShowAll').addEventListener('click', this._clickShowAll);
      this.querySelector('#ShowMaxtRate').addEventListener('click', this._clickShowMaxtRate);
      this.querySelector('#ShowAverage').addEventListener('click', this._clickShowAverage);
      this.querySelector('#ShowFavorite').addEventListener('click', this._clickShowFavorite);
      this.querySelector('#ShowAllCity').addEventListener('click', this._clickShowAll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$_dashboard = this._dashboard,
          countResto = _this$_dashboard.countResto,
          popularResto = _this$_dashboard.popularResto,
          avgRate = _this$_dashboard.avgRate,
          countFav = _this$_dashboard.countFav,
          countCity = _this$_dashboard.countCity;
      this.innerHTML = "\n            <h2 class=\"category__title\">Dashboard</h2>\n            <div class=\"card-horizontal\">\n                <button type=\"button\" class=\"category-item bg-gradient-primary\" \n                    id=\"ShowAll\" \n                    title=\"All Discovery\"\n                    aria-label=\"Click to show all discovery restaurant\">\n\n                        <img src=\"".concat(assets["default"].CIRCLE, "\" class=\"card-img-absolute\" alt=\"\">\n                        <div class=\"category__content\">\n                            Show <i class=\"material-icons\">fastfood</i>\n                        </div>\n                        <div class=\"category__value\">").concat(countResto, "</div>\n                        <div class=\"category__content\">All<br>Restaurant</div>\n\n                </button>\n                <button type=\"button\" class=\"category-item bg-gradient-secondary\" \n                    id=\"ShowMaxtRate\" \n                    title=\"Popular Resto\"\n                    aria-label=\"Click to show popular restaurant\">\n\n                        <img src=\"").concat(assets["default"].CIRCLE, "\" class=\"card-img-absolute\" alt=\"\">\n                        <div class=\"category__content\">\n                            Higgest <i class=\"material-icons\">star</i>\n                        </div>\n                        <div class=\"category__value\">").concat(popularResto, "</div>\n                        <div class=\"category__content\">Popular<br>Rate</div>\n\n                </button>\n                <button type=\"button\" class=\"category-item bg-gradient-third\" \n                    id=\"ShowAverage\" \n                    title=\"Show Higgest Rate Resto\"\n                    aria-label=\"Click to show restaurant by average rate\">\n\n                        <img src=\"").concat(assets["default"].CIRCLE, "\" class=\"card-img-absolute\" alt=\"\">\n                        <div class=\"category__content\">\n                            Average <i class=\"material-icons\">star</i>\n                        </div>\n                        <div class=\"category__value\">").concat(avgRate, "</div>\n                        <div class=\"category__content\">Rate<br>Resto</div>\n\n                </button>\n                <button type=\"button\" class=\"category-item bg-gradient-fourth\" \n                    id=\"ShowFavorite\"\n                    title=\"Show List Favorite\"\n                    aria-label=\"Click to show your favorite\">\n\n                        <img src=\"").concat(assets["default"].CIRCLE, "\" class=\"card-img-absolute\" alt=\"\">\n                        <div class=\"category__content\">\n                            Saved <i class=\"material-icons\">local_cafe</i>\n                        </div>\n                        <div class=\"category__value\">").concat(countFav, "</div>\n                        <div class=\"category__content\">Your<br>Favorite</div>\n\n                </button>\n                <button type=\"button\" class=\"category-item bg-gradient-fiveth\" \n                    id=\"ShowAllCity\" \n                    title=\"All City\"\n                    aria-label=\"Click to show all restaurant from count by city\">\n\n                        <img src=\"").concat(assets["default"].CIRCLE, "\" class=\"card-img-absolute\" alt=\"\">\n                        <div class=\"category__content\">\n                            Discover <i class=\"material-icons\">fastfood</i>\n                        </div>\n                        <div class=\"category__value\">").concat(countCity, "</div>\n                        <div class=\"category__content\">City in<br>Indonesia</div>\n\n                </button>\n            </div>\n        ");
      this.init();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickShowAll = event.AllResto;
      this._clickShowMaxtRate = event.MaxRate;
      this._clickShowAverage = event.ListAvg;
      this._clickShowFavorite = event.ListFavorite;
      this._dashboard = event.data;
      this.render();
    }
  }, {
    key: "setDataDashboard",
    set: function set(dashboard) {
      this._dashboard = dashboard;
      this.render();
    }
  }]);

  return dashboardCard;
}( /*#__PURE__*/dashboard_card_wrapNativeSuper(HTMLElement));

customElements.define('dashboard-card', dashboard_card_dashboardCard);
// EXTERNAL MODULE: ./src/scripts/views/components/search-bar.js
var search_bar = __webpack_require__(16);

// EXTERNAL MODULE: ./src/scripts/views/components/resto-list.js + 1 modules
var resto_list = __webpack_require__(17);

// EXTERNAL MODULE: ./src/scripts/data/resto-source.js + 1 modules
var resto_source = __webpack_require__(18);

// CONCATENATED MODULE: ./src/scripts/views/pages/home/utility/dashboard.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Dashboard = {
  calculate: function calculate(data, countFavorite) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var dashboardValue;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _this._count(data);
              _context.next = 3;
              return _this._maxRate(data);

            case 3:
              _context.t1 = _context.sent;
              _context.next = 6;
              return _this._avgRateResto(data);

            case 6:
              _context.t2 = _context.sent;
              _context.t3 = countFavorite;
              _context.t4 = _this._countCities(data);
              dashboardValue = {
                countResto: _context.t0,
                popularResto: _context.t1,
                avgRate: _context.t2,
                countFav: _context.t3,
                countCity: _context.t4
              };
              return _context.abrupt("return", dashboardValue);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _count: function _count(results) {
    return results.length;
  },
  _countCities: function _countCities(results) {
    //  from [1, 2, 3, 3, 3, 5] to [1, 2, 3, 5]
    var distinc = _toConsumableArray(new Set(results.map(function (resto) {
      return resto.city;
    })));

    return distinc.length;
  },
  _maxRate: function _maxRate(results) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var ratingResto;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return results.map(function (resto) {
                return resto.rating;
              });

            case 2:
              ratingResto = _context2.sent;
              return _context2.abrupt("return", Math.max.apply(null, ratingResto));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _avgRateResto: function _avgRateResto(results) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var ratingResto, avg;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return results.map(function (resto) {
                return resto.rating;
              });

            case 2:
              ratingResto = _context3.sent;
              _context3.next = 5;
              return ratingResto.reduce(function (a, b) {
                return a + b;
              }, 1);

            case 5:
              _context3.t0 = _context3.sent;
              _context3.t1 = ratingResto.length;
              avg = _context3.t0 / _context3.t1;
              return _context3.abrupt("return", avg.toFixed(1));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  showAvgData: function showAvgData(results, key) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var keyword, range, filter;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              keyword = Math.round(key);
              range = keyword + 1;
              filter = results.filter(function (resto) {
                return resto.rating > keyword && resto.rating < range;
              });
              return _context4.abrupt("return", filter);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  showMaxData: function showMaxData(results, key) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var filter;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              filter = results.filter(function (resto) {
                return resto.rating === key;
              });
              return _context5.abrupt("return", filter);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ var utility_dashboard = (Dashboard);
// EXTERNAL MODULE: ./src/scripts/data/favorite-resto-idb.js + 2 modules
var favorite_resto_idb = __webpack_require__(14);

// EXTERNAL MODULE: ./src/scripts/data/viral-source.js
var viral_source = __webpack_require__(19);

// CONCATENATED MODULE: ./src/scripts/views/pages/home/home.js
function home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function home_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var Home = {
  init: function init() {
    var _this = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.dashboardElement = document.querySelector('dashboard-card');
              _this.searchElement = document.querySelector('search-bar');
              _this.restoListElement = document.querySelector('resto-list');
              _this.mainContent = document.querySelector('#main-content');
              _this.viralListElement = document.querySelector('viral-list');
              _this.searchElement.headerTitle = 'Discover Cafe and Resto';
              _context.next = 8;
              return favorite_resto_idb["a" /* default */].getCount();

            case 8:
              _this.countFavorite = _context.sent;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  render: function render() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", "\n    <section class=\"content\">\n        <dashboard-card></dashboard-card>\n    </section>\n    <section class=\"content latest\">\n        <search-bar></search-bar>\n        <resto-list class=\"posts\">\n        <div class=\"card-skeleton\"></div>\n        <div class=\"card-skeleton\"></div>\n        <div class=\"card-skeleton\"></div>\n        </resto-list>\n    </section> \n    <section class=\"content\">            \n        <h2 class=\"viral__title\"><i class=\"material-icons\">poll</i> Viral Top 3</h2>\n        <viral-list class=\"posts\">\n          <div class=\"card-skeleton\"></div>\n        </viral-list>\n    </section>\n      ");

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  afterRender: function afterRender() {
    var _this2 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var searchResto, dataViral;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this2.init();

            case 2:
              _context3.next = 4;
              return _this2.isLoaded();

            case 4:
              searchResto = function searchResto() {
                return _this2.discoverSearch(_this2.restoListElement, _this2.searchElement.value);
              };

              _this2.searchElement.clickEvent = searchResto;
              _context3.next = 8;
              return viral_source["a" /* default */].list();

            case 8:
              dataViral = _context3.sent;
              _this2.viralListElement.virals = dataViral;

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  loadDataResto: function loadDataResto(data) {
    var _this3 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var dashboardData, getListAllResto;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this3.dashboardCalculate(data);

            case 2:
              dashboardData = _context4.sent;

              getListAllResto = function getListAllResto() {
                return _this3.showRestoToList(data, 'Problem loaded data, try again later');
              };

              _this3.dashboardElement.setDataDashboard = dashboardData;

              _this3.dasboardButton({
                dashboardData: dashboardData,
                data: data,
                getListAllResto: getListAllResto
              });

              getListAllResto();

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  dasboardButton: function dasboardButton(_ref) {
    var _this4 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var dashboardData, data, getListAllResto, getFavorite, getMaxRate, getListAvg, parseToButtonDashboard;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              dashboardData = _ref.dashboardData, data = _ref.data, getListAllResto = _ref.getListAllResto;

              getFavorite = /*#__PURE__*/function () {
                var _ref2 = home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this4.getFavoriteFromDb(_this4.restoListElement);

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function getFavorite() {
                  return _ref2.apply(this, arguments);
                };
              }();

              getMaxRate = /*#__PURE__*/function () {
                var _ref3 = home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var listFiltered;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return utility_dashboard.showMaxData(data, dashboardData.popularResto);

                        case 2:
                          listFiltered = _context6.sent;

                          _this4.showRestoToList(listFiltered, 'sorry, no data loaded. try again later');

                        case 4:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function getMaxRate() {
                  return _ref3.apply(this, arguments);
                };
              }();

              getListAvg = /*#__PURE__*/function () {
                var _ref4 = home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  var listFiltered;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return utility_dashboard.showAvgData(data, dashboardData.avgRate);

                        case 2:
                          listFiltered = _context7.sent;

                          _this4.showRestoToList(listFiltered, 'sorry, no data loaded. try again later');

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function getListAvg() {
                  return _ref4.apply(this, arguments);
                };
              }();

              parseToButtonDashboard = {
                data: dashboardData,
                AllResto: getListAllResto,
                MaxRate: getMaxRate,
                ListAvg: getListAvg,
                ListFavorite: getFavorite
              };
              _this4.dashboardElement.clickEvent = parseToButtonDashboard;

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  loadImg: function loadImg() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 0)).then(function (module) {
                return module["default"];
              }).then(function (IMG) {
                return IMG;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  isLoaded: function isLoaded() {
    var _this5 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      var listData, IMG;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _this5.discoverResto();

            case 2:
              listData = _context10.sent;

              if (!listData) {
                _context10.next = 7;
                break;
              }

              _this5.loadDataResto(listData);

              _context10.next = 11;
              break;

            case 7:
              _context10.next = 9;
              return _this5.loadImg();

            case 9:
              IMG = _context10.sent;
              _this5.mainContent.innerHTML = "<img width=\"100%\" src=\"".concat(IMG.NOT_FOUND, "\" alt=\"connection error, try again later\">");

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  },
  discoverResto: function discoverResto() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var data;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return resto_source["a" /* default */].list();

            case 3:
              data = _context11.sent;
              return _context11.abrupt("return", data);

            case 7:
              _context11.prev = 7;
              _context11.t0 = _context11["catch"](0);
              return _context11.abrupt("return", false);

            case 10:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 7]]);
    }))();
  },
  showRestoToList: function showRestoToList(data, error) {
    var _this6 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              try {
                _this6.restoListElement.restoes = data;
              } catch (_unused2) {
                _this6.restoListElement.renderError(error);
              }

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  },
  dashboardCalculate: function dashboardCalculate(data) {
    var _this7 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
      var dashboard;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return utility_dashboard.calculate(data, _this7.countFavorite);

            case 2:
              dashboard = _context13.sent;
              return _context13.abrupt("return", dashboard);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }))();
  },
  discoverSearch: function discoverSearch(_list, keyword) {
    var _this8 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
      var data;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              _context14.next = 3;
              return resto_source["a" /* default */].search(keyword);

            case 3:
              data = _context14.sent;

              _this8.showRestoToList(data, "sorry, ".concat(keyword, " not found"));

              _context14.next = 10;
              break;

            case 7:
              _context14.prev = 7;
              _context14.t0 = _context14["catch"](0);

              _this8._list.renderError(_context14.t0);

            case 10:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[0, 7]]);
    }))();
  },
  getFavoriteFromDb: function getFavoriteFromDb(list) {
    var _this9 = this;

    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
      var data;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _this9._list = list;
              _context15.next = 3;
              return favorite_resto_idb["a" /* default */].getAllRestoes();

            case 3:
              data = _context15.sent;

              if (data.length > 0) {
                _this9._list.restoes = data;
              } else {
                _this9._list.renderError('no favorite restaurant saved');
              }

            case 5:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }))();
  }
};
/* harmony default export */ var home = __webpack_exports__["a"] = (Home);

/***/ })

}]);