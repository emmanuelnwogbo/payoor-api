"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _resend = require("resend");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var resend = new _resend.Resend("".concat(process.env.RESEND_API_KEY));
function send(_x) {
  return _send.apply(this, arguments);
}
function _send() {
  _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var email, firstname, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, firstname = _ref.firstname;
          _context.prev = 1;
          _context.next = 4;
          return resend.emails.send({
            from: "Payoor <hello@waitlist.payoor.shop>",
            to: ["".concat(email)],
            subject: "Welcome",
            html: "\n      \n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Welcome to Payoor</title>\n          <style>\n              /* Define the embedded font */\n              @font-face {\n                  font-family: 'Inter';\n                  src: url(data:font/woff2;base64,BASE64_ENCODED_INTER_FONT_DATA_HERE) format('woff2');\n                  /* Add additional font formats here for broader compatibility */\n              }\n              @font-face {\n                  font-family: 'Poppins';\n                  src: url(data:font/woff2;base64,BASE64_ENCODED_POPPINS_FONT_DATA_HERE) format('woff2');\n                  /* Add additional font formats here for broader compatibility */\n              }\n      \n              body {\n                  font-family: 'Inter', Arial, sans-serif;\n                  background-color: #f5f5f5;\n                  margin: 0;\n                  padding: 0;\n              }\n              .container {\n                  max-width: 600px;\n                  margin: 0 auto;\n                  background-color: #ffffff;\n                  color: #000; /* Added text color */\n                  font-family: 'Inter', Arial, sans-serif; /* Changed font-family */\n                  font-size: 10px; /* Added font size */\n                  font-style: normal; /* Added font style */\n                  font-weight: 300; /* Added font weight */\n                  line-height:  20px/* Added line-height */\n              }\n      \n              h1 {\n                  color: #249B48;\n              }\n      \n              p {\n                  font-size: 14px;\n                  color: #333;\n              }\n      \n              ol {\n                  padding-left: 20px;\n              }\n      \n              li {\n                  font-size: 13px;\n                  color: #333;\n                  margin-bottom: 20px;\n              }\n              span.payoor {\n                  color: #249B48; /* Added text color */\n                  font-family: 'Inter'; /* Added font family */\n                  font-size: 16px; /* Added font size */\n                  font-style: normal; /* Added font style */\n                  font-weight: 300; /* Added font weight */\n                  line-height:  20px/* Added line-height */\n              }\n      \n              a {\n                  text-decoration: none;\n                  color: #249B48;\n                  border-radius: 5px;\n                  display: inline-block;\n              }\n      \n              .signature {\n                  font-weight: bold;\n              }\n      \n              .regard {\n                  margin-top: 30px;\n              }\n      \n              .logo-area {\n                  background: #249B48;\n                  padding: 10px 10px;\n                  display: flex;\n                  justify-content: space-between;\n                  height: 30px;\n                  overflow: hidden;\n              }\n      \n              .logo {\n                  height: 170px;\n                  width: 170px;\n                  transform: translateY(-40px) translateX(-69px);\n                  overflow: hidden;\n              }\n      \n              .logo-image {\n                  object-fit: contain;\n                  height: 100%;\n                  width: 100%;\n              }\n      \n              .content {\n                  padding: 30px 30px;\n              }\n          </style>\n          <!-- Add the Google Fonts link -->\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Poppins:wght@100;200;300;400;500;600&display=swap\">\n      </head>\n      <body>\n          <div class=\"container\">\n              <div class=\"logo-area\">\n                  <figure class=\"logo\">\n                      <img src=\"https://payoor.s3.amazonaws.com/payoor+logo2+1+(1).png\" class=\"logo-image\"/>\n                  </figure>\n                  <div></div>\n              </div>\n             \n              <div class=\"content\">\n                  <p>Dear ".concat(firstname, ",</p>\n      \n                  <p>Welcome to <span class=\"payoor\">Payoor</span>, where grocery shopping and \u201Cmarket runs\u201D is about to become your new favorite pastime! We're thrilled to have you on board and can't wait to revolutionize the way you experience food.</p>\n          \n                  <p>Ever find yourself juggling bags of groceries and foodstuff, wondering if you forgot the milk or onions? Or maybe you're tired of choosing between spending hours in the market or shelling out for overpriced takeouts from restaurants? We get it. We know the struggle - the endless hours lost in crowded markets, the logistics headache, and let's not even talk about the soaring food prices! We've been there, too. That's why we created <span class=\"payoor\">Payoor</span> - to make your life a whole lot easier.</p>\n          \n                  <p>Here's what you can look forward to:</p>\n          \n                  <ol>\n                      <li>Effortless Shopping, No Market Madness: Say farewell to the chaos of traditional markets. With <span class=\"payoor\">Payoor</span>, you can browse, select, and order your groceries from the comfort of your own space, leaving you with more time for the things you love.</li>\n                      <li>Recipe Wizardry: Not sure what to cook? No worries! We've got a treasure trove of recipes tailored to your taste buds. From kitchen novices to seasoned pros, we've got recipes that'll make your taste buds dance!</li>\n                      <li>Groceries + Ingredients Delivered to Your Doorstep: Imagine a world where the ingredients you need for that delicious meal arrive at your doorstep, properly cleaned and ready to become a masterpiece. With <span class=\"payoor\">Payoor</span>, it's a reality.</li>\n                      <li>Automatic Restocking: Running low on essentials? We've got your back. Our intelligent system keeps track of your frequently purchased items and can even remind you when it's time for a restock.</li>\n                      <li>Savings Galore: Enjoy exclusive deals, discounts, and special offers just for being a part of the <span class=\"payoor\">Payoor</span> family. Your wallet will thank you!</li>\n                      <li>Your Tastes, Your Rules: Gluten-free, organic, or just really, lactose intolerant? Tell us what you love (and what you don't!) - from organic produce to gluten-free options, we've got something for everyone.</li>\n                  </ol>\n          \n                  <p>We're not just a service, we're a promise - to make your life simpler, your meals tastier, and your wallet happier. With <span class=\"payoor\">Payoor</span>, you're not just a customer, you're family.</p>\n          \n                  <p>Stay tuned for updates and exciting news about our launch. And if you have any questions or just want to chat about food, we're all ears! Send an email to <a href=\"mailto:hello@payoor.shop\">hello@payoor.shop</a></p>\n          \n                  \n          \n                  <section class=\"regard\">\n                      <p>To delicious days ahead!</p>\n                  </section>\n          \n                  <section class=\"regard\">\n                      <p>Warm regards,</p>\n                  </section>\n          \n                  <section class=\"regard\">\n                      <p>Samson Adebayo</p>\n                      <p>Co-Founder, Payoor</p>\n                  </section>\n          \n                  <section class=\"regard\">\n                      <p>P.S. Remember, Every meal deserves a great backstory!</p>\n                  </section>\n              </div>\n      \n          </div>\n      </body>\n      </html>\n      ")
          });
        case 4:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          throw new Error('email sending failed, try again');
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _send.apply(this, arguments);
}
var _default = exports["default"] = send;