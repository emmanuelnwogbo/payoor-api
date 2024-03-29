"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("multer"));
var _product = _interopRequireDefault(require("../../models/product"));
var _recipestep = _interopRequireDefault(require("../../models/recipestep"));
var _s3uploadimage = _interopRequireDefault(require("../../imageservice/s3uploadimage"));
var _getStringFromObjectId = _interopRequireDefault(require("../../utilities/getStringFromObjectId"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var products = (0, _express["default"])();
var storage = _multer["default"].memoryStorage();
var upload = (0, _multer["default"])({
  storage: storage
});
products.get('/products/inventory/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var category, productslist;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          category = req.query.category;
          if (!(category && category !== 'all')) {
            _context.next = 8;
            break;
          }
          _context.next = 5;
          return _product["default"].find({
            category: category
          });
        case 5:
          productslist = _context.sent;
          _context.next = 11;
          break;
        case 8:
          _context.next = 10;
          return _product["default"].find();
        case 10:
          productslist = _context.sent;
        case 11:
          res.status(200).send({
            items: _toConsumableArray(productslist)
          });
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error('Internal Server Error:', _context.t0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context.t0.message
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
products.post('/product/inventory/create', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, itemname, description, price, category, stockQuantity, imageUrl, bestseller, productItem, savedProduct;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, itemname = _req$body.itemname, description = _req$body.description, price = _req$body.price, category = _req$body.category, stockQuantity = _req$body.stockQuantity, imageUrl = _req$body.imageUrl, bestseller = _req$body.bestseller;
          productItem = new _product["default"]({
            itemname: itemname,
            description: description,
            price: price,
            category: category,
            stockQuantity: stockQuantity,
            imageUrl: imageUrl,
            bestseller: bestseller
          });
          productItem.itemname = "item payoor_id ".concat(productItem._id);
          _context2.next = 6;
          return productItem.save();
        case 6:
          savedProduct = _context2.sent;
          res.status(201).send({
            item: savedProduct
          });
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('Internal Server Error:', _context2.t0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context2.t0.message
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
products.put('/product/inventory/update', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$query, productid, itemattribute, value, updateBody, productToUpdate;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$query = req.query, productid = _req$query.productid, itemattribute = _req$query.itemattribute;
          value = req.body.value;
          updateBody = {};
          updateBody[itemattribute] = value;
          _context3.next = 7;
          return _product["default"].findByIdAndUpdate(productid, updateBody, {
            "new": true,
            runValidators: true
          });
        case 7:
          productToUpdate = _context3.sent;
          if (productToUpdate) {
            _context3.next = 11;
            break;
          }
          res.status(404).send({
            message: 'No product found with the given ID'
          });
          return _context3.abrupt("return");
        case 11:
          res.status(200).send({
            item: productToUpdate
          });
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.error('Internal Server Error:', _context3.t0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context3.t0.message
          });
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
products.post('/product/inventory/imageupload', upload.single('file'), /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var productid, file, imageUrl, productToUpdate;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          productid = req.query.productid;
          file = req.file;
          _context4.next = 5;
          return (0, _s3uploadimage["default"])(file);
        case 5:
          imageUrl = _context4.sent;
          _context4.next = 8;
          return _product["default"].findByIdAndUpdate(productid, {
            imageUrl: imageUrl
          }, {
            "new": true,
            runValidators: true
          });
        case 8:
          productToUpdate = _context4.sent;
          if (productToUpdate) {
            _context4.next = 12;
            break;
          }
          res.status(404).send({
            message: 'No product found with the given ID'
          });
          return _context4.abrupt("return");
        case 12:
          res.status(200).send({
            item: productToUpdate
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context4.t0.message
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
products["delete"]('/product/inventory/delete', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var productid, deletedDoc;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          productid = req.query.productid;
          _context5.next = 4;
          return _product["default"].findOneAndDelete({
            _id: productid
          });
        case 4:
          deletedDoc = _context5.sent;
          if (deletedDoc) {
            res.status(200).send({
              message: 'Item deleted successfully'
            });
          } else {
            res.status(404).send({
              message: 'Item not found'
            });
          }
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context5.t0.message
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
products.post('/product/inventory/addingredient', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$query2, ingredient, recipe, recipeitem, ingredientitem, ingredients, productToUpdate;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$query2 = req.query, ingredient = _req$query2.ingredient, recipe = _req$query2.recipe;
          _context6.next = 4;
          return _product["default"].findOne({
            _id: recipe
          });
        case 4:
          recipeitem = _context6.sent;
          _context6.next = 7;
          return _product["default"].findOne({
            _id: ingredient
          });
        case 7:
          ingredientitem = _context6.sent;
          ingredients = [].concat(_toConsumableArray(recipeitem.ingredients), [(0, _getStringFromObjectId["default"])(ingredientitem._id)]);
          _context6.next = 11;
          return _product["default"].findByIdAndUpdate(recipeitem._id, {
            ingredients: ingredients
          }, {
            "new": true,
            runValidators: true
          });
        case 11:
          productToUpdate = _context6.sent;
          if (productToUpdate) {
            _context6.next = 15;
            break;
          }
          res.status(404).send({
            message: 'No product found with the given ID'
          });
          return _context6.abrupt("return");
        case 15:
          res.status(200).send({
            item: productToUpdate
          });
          _context6.next = 21;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context6.t0.message
          });
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
products.post('/product/inventory/removeingredient', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$query3, ingredient, recipe, recipeitem, ingredientitem, ingredients, productToUpdate;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$query3 = req.query, ingredient = _req$query3.ingredient, recipe = _req$query3.recipe;
          _context7.next = 4;
          return _product["default"].findOne({
            _id: recipe
          });
        case 4:
          recipeitem = _context7.sent;
          _context7.next = 7;
          return _product["default"].findOne({
            _id: ingredient
          });
        case 7:
          ingredientitem = _context7.sent;
          ingredients = recipeitem.ingredients.filter(function (ingritem) {
            return ingritem !== (0, _getStringFromObjectId["default"])(ingredientitem._id);
          });
          _context7.next = 11;
          return _product["default"].findByIdAndUpdate(recipeitem._id, {
            ingredients: ingredients
          }, {
            "new": true,
            runValidators: true
          });
        case 11:
          productToUpdate = _context7.sent;
          if (productToUpdate) {
            _context7.next = 15;
            break;
          }
          res.status(404).send({
            message: 'No product found with the given ID'
          });
          return _context7.abrupt("return");
        case 15:
          res.status(200).send({
            item: productToUpdate
          });
          _context7.next = 21;
          break;
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context7.t0.message
          });
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 18]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
products.get('/product/inventory/ingredients', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var recipe, recipeitem, ingredients, items, _iterator, _step, ingredient, product;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          recipe = req.query.recipe;
          _context8.next = 4;
          return _product["default"].findOne({
            _id: recipe
          });
        case 4:
          recipeitem = _context8.sent;
          ingredients = recipeitem.ingredients;
          items = [];
          _iterator = _createForOfIteratorHelper(ingredients);
          _context8.prev = 8;
          _iterator.s();
        case 10:
          if ((_step = _iterator.n()).done) {
            _context8.next = 18;
            break;
          }
          ingredient = _step.value;
          _context8.next = 14;
          return _product["default"].findOne({
            _id: ingredient
          });
        case 14:
          product = _context8.sent;
          if (product) {
            items.push(product);
          }
        case 16:
          _context8.next = 10;
          break;
        case 18:
          _context8.next = 23;
          break;
        case 20:
          _context8.prev = 20;
          _context8.t0 = _context8["catch"](8);
          _iterator.e(_context8.t0);
        case 23:
          _context8.prev = 23;
          _iterator.f();
          return _context8.finish(23);
        case 26:
          res.status(200).send({
            item: items,
            ingredientsids: ingredients
          });
          _context8.next = 32;
          break;
        case 29:
          _context8.prev = 29;
          _context8.t1 = _context8["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context8.t1.message
          });
        case 32:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 29], [8, 20, 23, 26]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
products.post('/product/inventory/create/ingredientstep', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var recipe, recipeitem, recipestep, recipestepdoc, steps, productToUpdate;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          recipe = req.query.recipe;
          _context9.next = 4;
          return _product["default"].findOne({
            _id: recipe
          });
        case 4:
          recipeitem = _context9.sent;
          if (!recipeitem) {
            _context9.next = 18;
            break;
          }
          recipestep = new _recipestep["default"]({
            recipe: recipe
          });
          _context9.next = 9;
          return recipestep.save();
        case 9:
          recipestepdoc = _context9.sent;
          steps = [].concat(_toConsumableArray(recipeitem.steps), [recipestepdoc._id.toString()]);
          _context9.next = 13;
          return _product["default"].findByIdAndUpdate(recipeitem._id, {
            steps: steps
          }, {
            "new": true,
            runValidators: true
          });
        case 13:
          productToUpdate = _context9.sent;
          if (productToUpdate) {
            _context9.next = 17;
            break;
          }
          res.status(404).send({
            message: 'Failed to update the product'
          });
          return _context9.abrupt("return");
        case 17:
          res.status(200).send({
            item: productToUpdate
          });
        case 18:
          _context9.next = 23;
          break;
        case 20:
          _context9.prev = 20;
          _context9.t0 = _context9["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context9.t0.message
          });
        case 23:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 20]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
products.get('/product/inventory/get/ingredientsteps', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var recipe, recipeitem, recipesteps;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          recipe = req.query.recipe;
          _context10.next = 4;
          return _product["default"].findOne({
            _id: recipe
          });
        case 4:
          recipeitem = _context10.sent;
          if (!recipeitem) {
            _context10.next = 10;
            break;
          }
          _context10.next = 8;
          return _recipestep["default"].find({
            recipe: recipe
          });
        case 8:
          recipesteps = _context10.sent;
          res.status(200).send({
            item: recipesteps
          });
        case 10:
          _context10.next = 15;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context10.t0.message
          });
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
products["delete"]('/product/inventory/delete/ingredientstep', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$query4, recipestep, recipe, recipestepitem, recipeitem, steps, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$query4 = req.query, recipestep = _req$query4.recipestep, recipe = _req$query4.recipe;
          _context11.next = 4;
          return _recipestep["default"].findOne({
            _id: recipestep
          });
        case 4:
          recipestepitem = _context11.sent;
          _context11.next = 7;
          return _product["default"].findOne({
            _id: recipe
          });
        case 7:
          recipeitem = _context11.sent;
          steps = recipeitem.steps;
          steps = steps.filter(function (step) {
            return step !== recipestepitem._id.toString();
          });
          recipeitem.steps = steps;
          _context11.next = 13;
          return recipeitem.save();
        case 13:
          _context11.next = 15;
          return _recipestep["default"].deleteOne({
            _id: recipestep
          });
        case 15:
          result = _context11.sent;
          if (result.deletedCount === 0) {
            res.status(500).send({
              message: 'Internal Server Error',
              error: error.message
            });
          } else {
            res.status(200).send({
              message: 'item deleted'
            });
          }
          _context11.next = 22;
          break;
        case 19:
          _context11.prev = 19;
          _context11.t0 = _context11["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context11.t0.message
          });
        case 22:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 19]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
products.put('/product/inventory/update/ingredientstep', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var recipestep, recipeStepToUpdate;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          recipestep = req.query.recipestep;
          _context12.next = 4;
          return _recipestep["default"].findByIdAndUpdate(recipestep, _objectSpread({}, req.body), {
            "new": true,
            runValidators: true
          });
        case 4:
          recipeStepToUpdate = _context12.sent;
          if (recipeStepToUpdate) {
            _context12.next = 8;
            break;
          }
          res.status(404).send({
            message: 'Failed to update the recipe step'
          });
          return _context12.abrupt("return");
        case 8:
          res.status(200).send({
            item: recipeStepToUpdate
          });
          _context12.next = 14;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context12.t0.message
          });
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 11]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());
products.post('/product/inventory/imageupload/ingredientstep', upload.single('file'), /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var recipestep, file, imageUrl, recipeStepToUpdate;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          recipestep = req.query.recipestep;
          file = req.file;
          _context13.next = 5;
          return (0, _s3uploadimage["default"])(file);
        case 5:
          imageUrl = _context13.sent;
          _context13.next = 8;
          return _recipestep["default"].findByIdAndUpdate(recipestep, {
            imageUrl: imageUrl
          }, {
            "new": true,
            runValidators: true
          });
        case 8:
          recipeStepToUpdate = _context13.sent;
          if (recipeStepToUpdate) {
            _context13.next = 12;
            break;
          }
          res.status(404).send({
            message: 'No recipe step found with the given ID'
          });
          return _context13.abrupt("return");
        case 12:
          res.status(201).send({
            item: recipeStepToUpdate
          });
          _context13.next = 18;
          break;
        case 15:
          _context13.prev = 15;
          _context13.t0 = _context13["catch"](0);
          res.status(500).send({
            message: 'Internal Server Error',
            error: _context13.t0.message
          });
        case 18:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 15]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

//const result = await RecipeStep.deleteMany({});
var _default = exports["default"] = products;