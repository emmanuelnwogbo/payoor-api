"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _product = _interopRequireDefault(require("../../models/product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bestsellers = _express["default"].Router();

//notion secret_O9lBNQBv4iQlO0Txk54KWOiGnONMlzkHJhqBvUz75qh

var bestsellersArray = [{
  _id: '1',
  itemname: 'Delicious Pasta',
  description: 'Homemade pasta with a rich tomato sauce and fresh basil.',
  price: 29.99,
  category: 'Italian Cuisine',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287086/photo-1692958211324-147c95a9878b_bjqhh0.avif'
}, {
  _id: '2',
  itemname: 'Gourmet Chocolate Treat',
  description: 'Handcrafted premium dark chocolate with assorted nuts and fruits.',
  price: 39.99,
  category: 'Artisanal Chocolates',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287342/joseph-gonzalez-fdlZBWIP0aM-unsplash_qz3a8b.jpg'
}, {
  _id: '3',
  itemname: 'Organic Vegetable Basket',
  description: 'A selection of farm-fresh organic vegetables for a healthy meal.',
  price: 49.99,
  category: 'Farm-to-Table Produce',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287272/nadine-primeau--ftWfohtjNw-unsplash_ena1aq.jpg'
}, {
  _id: '4',
  itemname: 'Spicy Hot Sauce Collection',
  description: 'A curated set of flavorful hot sauces from around the world.',
  price: 19.99,
  category: 'Global Spices',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287078/dose-juice-ocnsb17U6FE-unsplash_qgaok8.jpg'
}, {
  _id: '5',
  itemname: 'Exotic Fruit Medley',
  description: 'A mix of exotic fruits, perfect for a refreshing tropical treat.',
  price: 59.99,
  category: 'Tropical Fruits',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287079/lily-banse--YHSwy6uqvk-unsplash_gcorfa.jpg'
}, {
  _id: '6',
  itemname: 'Artisanal Cheese Platter',
  description: 'A selection of fine cheeses accompanied by gourmet crackers.',
  price: 79.99,
  category: 'Cheese Pairings',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287072/engin-akyurt-h8utDXjJuDg-unsplash_yb1hcv.jpg'
}, {
  _id: '7',
  itemname: 'Luxury Coffee Blend',
  description: 'Premium coffee beans sourced from high-altitude plantations.',
  price: 89.99,
  category: 'Gourmet Coffee',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287078/taylor-kiser-EvoIiaIVRzU-unsplash_bukhch.jpg'
}, {
  _id: '8',
  itemname: 'Rare Herbal Tea Collection',
  description: 'A collection of rare and aromatic herbal teas for a soothing experience.',
  price: 99.99,
  category: 'Herbal Infusions',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287074/nadine-primeau--ftWfohtjNw-unsplash_1_nmmyqt.jpg'
}, {
  _id: '9',
  itemname: 'Artisan Bread Basket',
  description: 'Handcrafted artisanal bread varieties for the perfect meal accompaniment.',
  price: 69.99,
  category: 'Bakery Delights',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287074/nadine-primeau--ftWfohtjNw-unsplash_1_nmmyqt.jpg'
}, {
  _id: '10',
  itemname: 'Premium Olive Oil Set',
  description: 'A set of premium extra virgin olive oils for culinary excellence.',
  price: 129.99,
  category: 'Gourmet Oils',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287074/photo-1683543124235-400a2b31cc73_wjqngx.avif'
}, {
  _id: '11',
  itemname: 'Mouthwatering Sushi Platter',
  description: 'A delightful assortment of fresh sushi rolls for a sushi lover.',
  price: 25.99,
  category: 'Japanese Cuisine',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287059/photo-1692958211304-9dd21cf7b510_pocyuv.avif'
}, {
  _id: '12',
  itemname: 'Crispy Gourmet Salad',
  description: 'A crunchy and flavorful gourmet salad with mixed greens and toppings.',
  price: 34.99,
  category: 'Salads & Greens',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287073/photo-1692954838409-f0415fe14add_tirbez.avif'
}, {
  _id: '13',
  itemname: 'Homey Chicken Pot Pie',
  description: 'Classic comfort food with a flaky crust and savory chicken filling.',
  price: 45.99,
  category: 'Comfort Classics',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287072/engin-akyurt-h8utDXjJuDg-unsplash_yb1hcv.jpg'
}, {
  _id: '14',
  itemname: 'Wholesome Smoothie Bowl',
  description: 'A nutritious and vibrant smoothie bowl with a variety of fresh fruits.',
  price: 15.99,
  category: 'Smoothie Bowls',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287072/nadine-primeau-Juvw-a-RvvI-unsplash_ht3iub.jpg'
}, {
  _id: '15',
  itemname: 'Decadent Chocolate Fondue',
  description: 'Indulge in a decadent chocolate fondue experience with assorted dippables.',
  price: 55.99,
  category: 'Dessert Delights',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287071/engin-akyurt-7fvhk53kEEA-unsplash_jy8xpy.jpg'
}, {
  _id: '16',
  itemname: 'Flavorful Taco Fiesta',
  description: 'A vibrant taco feast with a variety of fillings and toppings.',
  price: 74.99,
  category: 'Mexican Cuisine',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287069/engin-akyurt-JYJBEw8yipk-unsplash_rjaici.jpg'
}, {
  _id: '17',
  itemname: 'Charming Cupcake Collection',
  description: 'An assortment of charming cupcakes with delightful flavors and decorations.',
  price: 84.99,
  category: 'Sweet Treats',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287064/photo-1691657915691-7cf4cd48e376_mdmx76.avif'
}, {
  _id: '18',
  itemname: 'Savor the Moment Coffee Set',
  description: 'Experience a moment of bliss with a curated coffee set from around the world.',
  price: 94.99,
  category: 'Specialty Coffee',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287065/photo-1683536904936-21ad226fce74_qjb8zi.avif'
}, {
  _id: '19',
  itemname: 'Artisanal Pizza Perfection',
  description: 'Enjoy artisanal pizza perfection with premium toppings and a crispy crust.',
  price: 64.99,
  category: 'Pizza Paradise',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287063/photo-1675501342249-bdaaeb27c5cf_yxu7l2.avif'
}, {
  _id: '20',
  itemname: 'Sustainable Seafood Feast',
  description: 'Indulge in a sustainable seafood feast with the freshest catches of the day.',
  price: 109.99,
  category: 'Seafood Extravaganza',
  imageUrl: 'https://res.cloudinary.com/dqmgqhman/image/upload/c_thumb,w_200,g_face/v1705287060/photo-1692958208966-9e7bbf3cd12f_urgtmd.avif'
}];
bestsellers.get('/bestsellers/products', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            res.status(200).send({
              items: bestsellersArray
            });
          } catch (error) {}
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
bestsellers.get('/products/notion', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = exports["default"] = bestsellers;