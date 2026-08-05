var xf = { exports: {} }, Ku = {};
var Kd;
function My() {
  if (Kd) return Ku;
  Kd = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(f, T, S) {
    var E = null;
    if (S !== void 0 && (E = "" + S), T.key !== void 0 && (E = "" + T.key), "key" in T) {
      S = {};
      for (var _ in T)
        _ !== "key" && (S[_] = T[_]);
    } else S = T;
    return T = S.ref, {
      $$typeof: o,
      type: f,
      key: E,
      ref: T !== void 0 ? T : null,
      props: S
    };
  }
  return Ku.Fragment = y, Ku.jsx = h, Ku.jsxs = h, Ku;
}
var Jd;
function _y() {
  return Jd || (Jd = 1, xf.exports = My()), xf.exports;
}
var Ft = _y(), Rf = { exports: {} }, Ju = {}, Bf = { exports: {} }, qf = {};
var wd;
function Dy() {
  return wd || (wd = 1, (function(o) {
    function y(O, j) {
      var w = O.length;
      O.push(j);
      t: for (; 0 < w; ) {
        var ct = w - 1 >>> 1, st = O[ct];
        if (0 < T(st, j))
          O[ct] = j, O[w] = st, w = ct;
        else break t;
      }
    }
    function h(O) {
      return O.length === 0 ? null : O[0];
    }
    function f(O) {
      if (O.length === 0) return null;
      var j = O[0], w = O.pop();
      if (w !== j) {
        O[0] = w;
        t: for (var ct = 0, st = O.length, d = st >>> 1; ct < d; ) {
          var U = 2 * (ct + 1) - 1, L = O[U], Z = U + 1, I = O[Z];
          if (0 > T(L, w))
            Z < st && 0 > T(I, L) ? (O[ct] = I, O[Z] = w, ct = Z) : (O[ct] = L, O[U] = w, ct = U);
          else if (Z < st && 0 > T(I, w))
            O[ct] = I, O[Z] = w, ct = Z;
          else break t;
        }
      }
      return j;
    }
    function T(O, j) {
      var w = O.sortIndex - j.sortIndex;
      return w !== 0 ? w : O.id - j.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      o.unstable_now = function() {
        return S.now();
      };
    } else {
      var E = Date, _ = E.now();
      o.unstable_now = function() {
        return E.now() - _;
      };
    }
    var g = [], r = [], R = 1, M = null, x = 3, Y = !1, C = !1, q = !1, G = !1, B = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function tt(O) {
      for (var j = h(r); j !== null; ) {
        if (j.callback === null) f(r);
        else if (j.startTime <= O)
          f(r), j.sortIndex = j.expirationTime, y(g, j);
        else break;
        j = h(r);
      }
    }
    function ot(O) {
      if (q = !1, tt(O), !C)
        if (h(g) !== null)
          C = !0, P || (P = !0, bt());
        else {
          var j = h(r);
          j !== null && _t(ot, j.startTime - O);
        }
    }
    var P = !1, X = -1, k = 5, at = -1;
    function Tt() {
      return G ? !0 : !(o.unstable_now() - at < k);
    }
    function ft() {
      if (G = !1, P) {
        var O = o.unstable_now();
        at = O;
        var j = !0;
        try {
          t: {
            C = !1, q && (q = !1, Q(X), X = -1), Y = !0;
            var w = x;
            try {
              l: {
                for (tt(O), M = h(g); M !== null && !(M.expirationTime > O && Tt()); ) {
                  var ct = M.callback;
                  if (typeof ct == "function") {
                    M.callback = null, x = M.priorityLevel;
                    var st = ct(
                      M.expirationTime <= O
                    );
                    if (O = o.unstable_now(), typeof st == "function") {
                      M.callback = st, tt(O), j = !0;
                      break l;
                    }
                    M === h(g) && f(g), tt(O);
                  } else f(g);
                  M = h(g);
                }
                if (M !== null) j = !0;
                else {
                  var d = h(r);
                  d !== null && _t(
                    ot,
                    d.startTime - O
                  ), j = !1;
                }
              }
              break t;
            } finally {
              M = null, x = w, Y = !1;
            }
            j = void 0;
          }
        } finally {
          j ? bt() : P = !1;
        }
      }
    }
    var bt;
    if (typeof V == "function")
      bt = function() {
        V(ft);
      };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), mt = wt.port2;
      wt.port1.onmessage = ft, bt = function() {
        mt.postMessage(null);
      };
    } else
      bt = function() {
        B(ft, 0);
      };
    function _t(O, j) {
      X = B(function() {
        O(o.unstable_now());
      }, j);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, o.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : k = 0 < O ? Math.floor(1e3 / O) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, o.unstable_next = function(O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = x;
      }
      var w = x;
      x = j;
      try {
        return O();
      } finally {
        x = w;
      }
    }, o.unstable_requestPaint = function() {
      G = !0;
    }, o.unstable_runWithPriority = function(O, j) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var w = x;
      x = O;
      try {
        return j();
      } finally {
        x = w;
      }
    }, o.unstable_scheduleCallback = function(O, j, w) {
      var ct = o.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ct + w : ct) : w = ct, O) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = w + st, O = {
        id: R++,
        callback: j,
        priorityLevel: O,
        startTime: w,
        expirationTime: st,
        sortIndex: -1
      }, w > ct ? (O.sortIndex = w, y(r, O), h(g) === null && O === h(r) && (q ? (Q(X), X = -1) : q = !0, _t(ot, w - ct))) : (O.sortIndex = st, y(g, O), C || Y || (C = !0, P || (P = !0, bt()))), O;
    }, o.unstable_shouldYield = Tt, o.unstable_wrapCallback = function(O) {
      var j = x;
      return function() {
        var w = x;
        x = j;
        try {
          return O.apply(this, arguments);
        } finally {
          x = w;
        }
      };
    };
  })(qf)), qf;
}
var Wd;
function Uy() {
  return Wd || (Wd = 1, Bf.exports = Dy()), Bf.exports;
}
var Yf = { exports: {} }, et = {};
var $d;
function Ny() {
  if ($d) return et;
  $d = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), r = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function Y(d) {
    return d === null || typeof d != "object" ? null : (d = x && d[x] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var C = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, q = Object.assign, G = {};
  function B(d, U, L) {
    this.props = d, this.context = U, this.refs = G, this.updater = L || C;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(d, U) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, U, "setState");
  }, B.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = B.prototype;
  function V(d, U, L) {
    this.props = d, this.context = U, this.refs = G, this.updater = L || C;
  }
  var tt = V.prototype = new Q();
  tt.constructor = V, q(tt, B.prototype), tt.isPureReactComponent = !0;
  var ot = Array.isArray;
  function P() {
  }
  var X = { H: null, A: null, T: null, S: null }, k = Object.prototype.hasOwnProperty;
  function at(d, U, L) {
    var Z = L.ref;
    return {
      $$typeof: o,
      type: d,
      key: U,
      ref: Z !== void 0 ? Z : null,
      props: L
    };
  }
  function Tt(d, U) {
    return at(d.type, U, d.props);
  }
  function ft(d) {
    return typeof d == "object" && d !== null && d.$$typeof === o;
  }
  function bt(d) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(L) {
      return U[L];
    });
  }
  var wt = /\/+/g;
  function mt(d, U) {
    return typeof d == "object" && d !== null && d.key != null ? bt("" + d.key) : U.toString(36);
  }
  function _t(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(P, P) : (d.status = "pending", d.then(
          function(U) {
            d.status === "pending" && (d.status = "fulfilled", d.value = U);
          },
          function(U) {
            d.status === "pending" && (d.status = "rejected", d.reason = U);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function O(d, U, L, Z, I) {
    var nt = typeof d;
    (nt === "undefined" || nt === "boolean") && (d = null);
    var lt = !1;
    if (d === null) lt = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case o:
            case y:
              lt = !0;
              break;
            case R:
              return lt = d._init, O(
                lt(d._payload),
                U,
                L,
                Z,
                I
              );
          }
      }
    if (lt)
      return I = I(d), lt = Z === "" ? "." + mt(d, 0) : Z, ot(I) ? (L = "", lt != null && (L = lt.replace(wt, "$&/") + "/"), O(I, U, L, "", function(kt) {
        return kt;
      })) : I != null && (ft(I) && (I = Tt(
        I,
        L + (I.key == null || d && d.key === I.key ? "" : ("" + I.key).replace(
          wt,
          "$&/"
        ) + "/") + lt
      )), U.push(I)), 1;
    lt = 0;
    var pt = Z === "" ? "." : Z + ":";
    if (ot(d))
      for (var Et = 0; Et < d.length; Et++)
        Z = d[Et], nt = pt + mt(Z, Et), lt += O(
          Z,
          U,
          L,
          nt,
          I
        );
    else if (Et = Y(d), typeof Et == "function")
      for (d = Et.call(d), Et = 0; !(Z = d.next()).done; )
        Z = Z.value, nt = pt + mt(Z, Et++), lt += O(
          Z,
          U,
          L,
          nt,
          I
        );
    else if (nt === "object") {
      if (typeof d.then == "function")
        return O(
          _t(d),
          U,
          L,
          Z,
          I
        );
      throw U = String(d), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return lt;
  }
  function j(d, U, L) {
    if (d == null) return d;
    var Z = [], I = 0;
    return O(d, Z, "", "", function(nt) {
      return U.call(L, nt, I++);
    }), Z;
  }
  function w(d) {
    if (d._status === -1) {
      var U = d._result;
      U = U(), U.then(
        function(L) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = L);
        },
        function(L) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = L);
        }
      ), d._status === -1 && (d._status = 0, d._result = U);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ct = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, st = {
    map: j,
    forEach: function(d, U, L) {
      j(
        d,
        function() {
          U.apply(this, arguments);
        },
        L
      );
    },
    count: function(d) {
      var U = 0;
      return j(d, function() {
        U++;
      }), U;
    },
    toArray: function(d) {
      return j(d, function(U) {
        return U;
      }) || [];
    },
    only: function(d) {
      if (!ft(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return et.Activity = M, et.Children = st, et.Component = B, et.Fragment = h, et.Profiler = T, et.PureComponent = V, et.StrictMode = f, et.Suspense = g, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return X.H.useMemoCache(d);
    }
  }, et.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(d, U, L) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var Z = q({}, d.props), I = d.key;
    if (U != null)
      for (nt in U.key !== void 0 && (I = "" + U.key), U)
        !k.call(U, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && U.ref === void 0 || (Z[nt] = U[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) Z.children = L;
    else if (1 < nt) {
      for (var lt = Array(nt), pt = 0; pt < nt; pt++)
        lt[pt] = arguments[pt + 2];
      Z.children = lt;
    }
    return at(d.type, I, Z);
  }, et.createContext = function(d) {
    return d = {
      $$typeof: E,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: S,
      _context: d
    }, d;
  }, et.createElement = function(d, U, L) {
    var Z, I = {}, nt = null;
    if (U != null)
      for (Z in U.key !== void 0 && (nt = "" + U.key), U)
        k.call(U, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (I[Z] = U[Z]);
    var lt = arguments.length - 2;
    if (lt === 1) I.children = L;
    else if (1 < lt) {
      for (var pt = Array(lt), Et = 0; Et < lt; Et++)
        pt[Et] = arguments[Et + 2];
      I.children = pt;
    }
    if (d && d.defaultProps)
      for (Z in lt = d.defaultProps, lt)
        I[Z] === void 0 && (I[Z] = lt[Z]);
    return at(d, nt, I);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(d) {
    return { $$typeof: _, render: d };
  }, et.isValidElement = ft, et.lazy = function(d) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: d },
      _init: w
    };
  }, et.memo = function(d, U) {
    return {
      $$typeof: r,
      type: d,
      compare: U === void 0 ? null : U
    };
  }, et.startTransition = function(d) {
    var U = X.T, L = {};
    X.T = L;
    try {
      var Z = d(), I = X.S;
      I !== null && I(L, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(P, ct);
    } catch (nt) {
      ct(nt);
    } finally {
      U !== null && L.types !== null && (U.types = L.types), X.T = U;
    }
  }, et.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, et.use = function(d) {
    return X.H.use(d);
  }, et.useActionState = function(d, U, L) {
    return X.H.useActionState(d, U, L);
  }, et.useCallback = function(d, U) {
    return X.H.useCallback(d, U);
  }, et.useContext = function(d) {
    return X.H.useContext(d);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(d, U) {
    return X.H.useDeferredValue(d, U);
  }, et.useEffect = function(d, U) {
    return X.H.useEffect(d, U);
  }, et.useEffectEvent = function(d) {
    return X.H.useEffectEvent(d);
  }, et.useId = function() {
    return X.H.useId();
  }, et.useImperativeHandle = function(d, U, L) {
    return X.H.useImperativeHandle(d, U, L);
  }, et.useInsertionEffect = function(d, U) {
    return X.H.useInsertionEffect(d, U);
  }, et.useLayoutEffect = function(d, U) {
    return X.H.useLayoutEffect(d, U);
  }, et.useMemo = function(d, U) {
    return X.H.useMemo(d, U);
  }, et.useOptimistic = function(d, U) {
    return X.H.useOptimistic(d, U);
  }, et.useReducer = function(d, U, L) {
    return X.H.useReducer(d, U, L);
  }, et.useRef = function(d) {
    return X.H.useRef(d);
  }, et.useState = function(d) {
    return X.H.useState(d);
  }, et.useSyncExternalStore = function(d, U, L) {
    return X.H.useSyncExternalStore(
      d,
      U,
      L
    );
  }, et.useTransition = function() {
    return X.H.useTransition();
  }, et.version = "19.2.8", et;
}
var Fd;
function Xf() {
  return Fd || (Fd = 1, Yf.exports = Ny()), Yf.exports;
}
var jf = { exports: {} }, il = {};
var kd;
function Hy() {
  if (kd) return il;
  kd = 1;
  var o = Xf();
  function y(g) {
    var r = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        r += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + g + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var f = {
    d: {
      f: h,
      r: function() {
        throw Error(y(522));
      },
      D: h,
      C: h,
      L: h,
      m: h,
      X: h,
      S: h,
      M: h
    },
    p: 0,
    findDOMNode: null
  }, T = /* @__PURE__ */ Symbol.for("react.portal");
  function S(g, r, R) {
    var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: M == null ? null : "" + M,
      children: g,
      containerInfo: r,
      implementation: R
    };
  }
  var E = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(g, r) {
    if (g === "font") return "";
    if (typeof r == "string")
      return r === "use-credentials" ? r : "";
  }
  return il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, il.createPortal = function(g, r) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
      throw Error(y(299));
    return S(g, r, null, R);
  }, il.flushSync = function(g) {
    var r = E.T, R = f.p;
    try {
      if (E.T = null, f.p = 2, g) return g();
    } finally {
      E.T = r, f.p = R, f.d.f();
    }
  }, il.preconnect = function(g, r) {
    typeof g == "string" && (r ? (r = r.crossOrigin, r = typeof r == "string" ? r === "use-credentials" ? r : "" : void 0) : r = null, f.d.C(g, r));
  }, il.prefetchDNS = function(g) {
    typeof g == "string" && f.d.D(g);
  }, il.preinit = function(g, r) {
    if (typeof g == "string" && r && typeof r.as == "string") {
      var R = r.as, M = _(R, r.crossOrigin), x = typeof r.integrity == "string" ? r.integrity : void 0, Y = typeof r.fetchPriority == "string" ? r.fetchPriority : void 0;
      R === "style" ? f.d.S(
        g,
        typeof r.precedence == "string" ? r.precedence : void 0,
        {
          crossOrigin: M,
          integrity: x,
          fetchPriority: Y
        }
      ) : R === "script" && f.d.X(g, {
        crossOrigin: M,
        integrity: x,
        fetchPriority: Y,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0
      });
    }
  }, il.preinitModule = function(g, r) {
    if (typeof g == "string")
      if (typeof r == "object" && r !== null) {
        if (r.as == null || r.as === "script") {
          var R = _(
            r.as,
            r.crossOrigin
          );
          f.d.M(g, {
            crossOrigin: R,
            integrity: typeof r.integrity == "string" ? r.integrity : void 0,
            nonce: typeof r.nonce == "string" ? r.nonce : void 0
          });
        }
      } else r == null && f.d.M(g);
  }, il.preload = function(g, r) {
    if (typeof g == "string" && typeof r == "object" && r !== null && typeof r.as == "string") {
      var R = r.as, M = _(R, r.crossOrigin);
      f.d.L(g, R, {
        crossOrigin: M,
        integrity: typeof r.integrity == "string" ? r.integrity : void 0,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0,
        type: typeof r.type == "string" ? r.type : void 0,
        fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0,
        referrerPolicy: typeof r.referrerPolicy == "string" ? r.referrerPolicy : void 0,
        imageSrcSet: typeof r.imageSrcSet == "string" ? r.imageSrcSet : void 0,
        imageSizes: typeof r.imageSizes == "string" ? r.imageSizes : void 0,
        media: typeof r.media == "string" ? r.media : void 0
      });
    }
  }, il.preloadModule = function(g, r) {
    if (typeof g == "string")
      if (r) {
        var R = _(r.as, r.crossOrigin);
        f.d.m(g, {
          as: typeof r.as == "string" && r.as !== "script" ? r.as : void 0,
          crossOrigin: R,
          integrity: typeof r.integrity == "string" ? r.integrity : void 0
        });
      } else f.d.m(g);
  }, il.requestFormReset = function(g) {
    f.d.r(g);
  }, il.unstable_batchedUpdates = function(g, r) {
    return g(r);
  }, il.useFormState = function(g, r, R) {
    return E.H.useFormState(g, r, R);
  }, il.useFormStatus = function() {
    return E.H.useHostTransitionStatus();
  }, il.version = "19.2.8", il;
}
var Id;
function Cy() {
  if (Id) return jf.exports;
  Id = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (y) {
        console.error(y);
      }
  }
  return o(), jf.exports = Hy(), jf.exports;
}
var Pd;
function xy() {
  if (Pd) return Ju;
  Pd = 1;
  var o = Uy(), y = Xf(), h = Cy();
  function f(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function S(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function E(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (S(t) !== t)
      throw Error(f(188));
  }
  function r(t) {
    var l = t.alternate;
    if (!l) {
      if (l = S(t), l === null) throw Error(f(188));
      return l !== t ? null : t;
    }
    for (var e = t, n = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var a = u.alternate;
      if (a === null) {
        if (n = u.return, n !== null) {
          e = n;
          continue;
        }
        break;
      }
      if (u.child === a.child) {
        for (a = u.child; a; ) {
          if (a === e) return g(u), t;
          if (a === n) return g(u), l;
          a = a.sibling;
        }
        throw Error(f(188));
      }
      if (e.return !== n.return) e = u, n = a;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            i = !0, e = u, n = a;
            break;
          }
          if (c === n) {
            i = !0, n = u, e = a;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = a.child; c; ) {
            if (c === e) {
              i = !0, e = a, n = u;
              break;
            }
            if (c === n) {
              i = !0, n = a, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (e.alternate !== n) throw Error(f(190));
    }
    if (e.tag !== 3) throw Error(f(188));
    return e.stateNode.current === e ? t : l;
  }
  function R(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = R(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var M = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ot = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), at = /* @__PURE__ */ Symbol.for("react.activity"), Tt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ft = Symbol.iterator;
  function bt(t) {
    return t === null || typeof t != "object" ? null : (t = ft && t[ft] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var wt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function mt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === wt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case q:
        return "Fragment";
      case B:
        return "Profiler";
      case G:
        return "StrictMode";
      case ot:
        return "Suspense";
      case P:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case tt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return l = t.displayName || null, l !== null ? l : mt(t.type) || "Memo";
        case k:
          l = t._payload, t = t._init;
          try {
            return mt(t(l));
          } catch {
          }
      }
    return null;
  }
  var _t = Array.isArray, O = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ct = [], st = -1;
  function d(t) {
    return { current: t };
  }
  function U(t) {
    0 > st || (t.current = ct[st], ct[st] = null, st--);
  }
  function L(t, l) {
    st++, ct[st] = t.current, t.current = l;
  }
  var Z = d(null), I = d(null), nt = d(null), lt = d(null);
  function pt(t, l) {
    switch (L(nt, l), L(I, t), L(Z, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? yd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = yd(l), t = hd(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    U(Z), L(Z, t);
  }
  function Et() {
    U(Z), U(I), U(nt);
  }
  function kt(t) {
    t.memoizedState !== null && L(lt, t);
    var l = Z.current, e = hd(l, t.type);
    l !== e && (L(I, t), L(Z, e));
  }
  function Dt(t) {
    I.current === t && (U(Z), U(I)), lt.current === t && (U(lt), Qu._currentValue = w);
  }
  var W, At;
  function Ut(t) {
    if (W === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        W = l && l[1] || "", At = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + W + t + At;
  }
  var Wt = !1;
  function sl(t, l) {
    if (!t || Wt) return "";
    Wt = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (A) {
                  var z = A;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (A) {
                  z = A;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                z = A;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (A) {
            if (A && z && typeof A.stack == "string")
              return [A.stack, z.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var a = n.DetermineComponentFrameRoot(), i = a[0], c = a[1];
      if (i && c) {
        var s = i.split(`
`), p = c.split(`
`);
        for (u = n = 0; n < s.length && !s[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; u < p.length && !p[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (n === s.length || u === p.length)
          for (n = s.length - 1, u = p.length - 1; 1 <= n && 0 <= u && s[n] !== p[u]; )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (s[n] !== p[u]) {
            if (n !== 1 || u !== 1)
              do
                if (n--, u--, 0 > u || s[n] !== p[u]) {
                  var D = `
` + s[n].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      Wt = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Ut(e) : "";
  }
  function ql(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ut(t.type);
      case 16:
        return Ut("Lazy");
      case 13:
        return t.child !== l && l !== null ? Ut("Suspense Fallback") : Ut("Suspense");
      case 19:
        return Ut("SuspenseList");
      case 0:
      case 15:
        return sl(t.type, !1);
      case 11:
        return sl(t.type.render, !1);
      case 1:
        return sl(t.type, !0);
      case 31:
        return Ut("Activity");
      default:
        return "";
    }
  }
  function Xl(t) {
    try {
      var l = "", e = null;
      do
        l += ql(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Ol = Object.prototype.hasOwnProperty, Yl = o.unstable_scheduleCallback, Fl = o.unstable_cancelCallback, $n = o.unstable_shouldYield, Fn = o.unstable_requestPaint, al = o.unstable_now, Pu = o.unstable_getCurrentPriorityLevel, ta = o.unstable_ImmediatePriority, kn = o.unstable_UserBlockingPriority, fn = o.unstable_NormalPriority, In = o.unstable_LowPriority, kl = o.unstable_IdlePriority, Pn = o.log, tu = o.unstable_setDisableYieldValue, Zl = null, cl = null;
  function Vl(t) {
    if (typeof Pn == "function" && tu(t), cl && typeof cl.setStrictMode == "function")
      try {
        cl.setStrictMode(Zl, t);
      } catch {
      }
  }
  var fl = Math.clz32 ? Math.clz32 : la, Si = Math.log, bi = Math.LN2;
  function la(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Si(t) / bi | 0) | 0;
  }
  var on = 256, Qe = 262144, Xe = 4194304;
  function Kl(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function sn(t, l, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0, a = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = n & 134217727;
    return c !== 0 ? (n = c & ~a, n !== 0 ? u = Kl(n) : (i &= c, i !== 0 ? u = Kl(i) : e || (e = c & ~t, e !== 0 && (u = Kl(e))))) : (c = n & ~a, c !== 0 ? u = Kl(c) : i !== 0 ? u = Kl(i) : e || (e = n & ~t, e !== 0 && (u = Kl(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & a) === 0 && (a = u & -u, e = l & -l, a >= e || a === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function ve(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function ea(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function na() {
    var t = Xe;
    return Xe <<= 1, (Xe & 62914560) === 0 && (Xe = 4194304), t;
  }
  function pi(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function lu(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function y0(t, l, e, n, u, a) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, p = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var D = 31 - fl(e), H = 1 << D;
      c[D] = 0, s[D] = -1;
      var z = p[D];
      if (z !== null)
        for (p[D] = null, D = 0; D < z.length; D++) {
          var A = z[D];
          A !== null && (A.lane &= -536870913);
        }
      e &= ~H;
    }
    n !== 0 && $f(t, n, 0), a !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= a & ~(i & ~l));
  }
  function $f(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var n = 31 - fl(l);
    t.entangledLanes |= l, t.entanglements[n] = t.entanglements[n] | 1073741824 | e & 261930;
  }
  function Ff(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var n = 31 - fl(e), u = 1 << n;
      u & l | t[n] & l && (t[n] |= l), e &= ~u;
    }
  }
  function kf(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : Ei(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function Ei(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function zi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function If() {
    var t = j.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : jd(t.type));
  }
  function Pf(t, l) {
    var e = j.p;
    try {
      return j.p = t, l();
    } finally {
      j.p = e;
    }
  }
  var ge = Math.random().toString(36).slice(2), tl = "__reactFiber$" + ge, rl = "__reactProps$" + ge, rn = "__reactContainer$" + ge, Ti = "__reactEvents$" + ge, h0 = "__reactListeners$" + ge, v0 = "__reactHandles$" + ge, to = "__reactResources$" + ge, eu = "__reactMarker$" + ge;
  function Ai(t) {
    delete t[tl], delete t[rl], delete t[Ti], delete t[h0], delete t[v0];
  }
  function dn(t) {
    var l = t[tl];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[rn] || e[tl]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = zd(t); t !== null; ) {
            if (e = t[tl]) return e;
            t = zd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function mn(t) {
    if (t = t[tl] || t[rn]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function nu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(f(33));
  }
  function yn(t) {
    var l = t[to];
    return l || (l = t[to] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function It(t) {
    t[eu] = !0;
  }
  var lo = /* @__PURE__ */ new Set(), eo = {};
  function Ze(t, l) {
    hn(t, l), hn(t + "Capture", l);
  }
  function hn(t, l) {
    for (eo[t] = l, t = 0; t < l.length; t++)
      lo.add(l[t]);
  }
  var g0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), no = {}, uo = {};
  function S0(t) {
    return Ol.call(uo, t) ? !0 : Ol.call(no, t) ? !1 : g0.test(t) ? uo[t] = !0 : (no[t] = !0, !1);
  }
  function ua(t, l, e) {
    if (S0(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var n = l.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function aa(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Il(t, l, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + n);
    }
  }
  function Ml(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ao(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function b0(t, l, e) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var u = n.get, a = n.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, a.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Oi(t) {
    if (!t._valueTracker) {
      var l = ao(t) ? "checked" : "value";
      t._valueTracker = b0(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function io(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), n = "";
    return t && (n = ao(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== e ? (l.setValue(t), !0) : !1;
  }
  function ia(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var p0 = /[\n"\\]/g;
  function _l(t) {
    return t.replace(
      p0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mi(t, l, e, n, u, a, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Ml(l)) : t.value !== "" + Ml(l) && (t.value = "" + Ml(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? _i(t, i, Ml(l)) : e != null ? _i(t, i, Ml(e)) : n != null && t.removeAttribute("value"), u == null && a != null && (t.defaultChecked = !!a), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + Ml(c) : t.removeAttribute("name");
  }
  function co(t, l, e, n, u, a, i, c) {
    if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (t.type = a), l != null || e != null) {
      if (!(a !== "submit" && a !== "reset" || l != null)) {
        Oi(t);
        return;
      }
      e = e != null ? "" + Ml(e) : "", l = l != null ? "" + Ml(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = c ? t.checked : !!n, t.defaultChecked = !!n, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Oi(t);
  }
  function _i(t, l, e) {
    l === "number" && ia(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function vn(t, l, e, n) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && n && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + Ml(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, n && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function fo(t, l, e) {
    if (l != null && (l = "" + Ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + Ml(e) : "";
  }
  function oo(t, l, e, n) {
    if (l == null) {
      if (n != null) {
        if (e != null) throw Error(f(92));
        if (_t(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        e = n;
      }
      e == null && (e = ""), l = e;
    }
    e = Ml(l), t.defaultValue = e, n = t.textContent, n === e && n !== "" && n !== null && (t.value = n), Oi(t);
  }
  function gn(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var E0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function so(t, l, e) {
    var n = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? n ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : n ? t.setProperty(l, e) : typeof e != "number" || e === 0 || E0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function ro(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(f(62));
    if (t = t.style, e != null) {
      for (var n in e)
        !e.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var u in l)
        n = l[u], l.hasOwnProperty(u) && e[u] !== n && so(t, u, n);
    } else
      for (var a in l)
        l.hasOwnProperty(a) && so(t, a, l[a]);
  }
  function Di(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var z0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), T0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ca(t) {
    return T0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Pl() {
  }
  var Ui = null;
  function Ni(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Sn = null, bn = null;
  function mo(t) {
    var l = mn(t);
    if (l && (t = l.stateNode)) {
      var e = t[rl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Mi(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + _l(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var n = e[l];
              if (n !== t && n.form === t.form) {
                var u = n[rl] || null;
                if (!u) throw Error(f(90));
                Mi(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              n = e[l], n.form === t.form && io(n);
          }
          break t;
        case "textarea":
          fo(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && vn(t, !!e.multiple, l, !1);
      }
    }
  }
  var Hi = !1;
  function yo(t, l, e) {
    if (Hi) return t(l, e);
    Hi = !0;
    try {
      var n = t(l);
      return n;
    } finally {
      if (Hi = !1, (Sn !== null || bn !== null) && (Wa(), Sn && (l = Sn, t = bn, bn = Sn = null, mo(l), t)))
        for (l = 0; l < t.length; l++) mo(t[l]);
    }
  }
  function uu(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var n = e[rl] || null;
    if (n === null) return null;
    e = n[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        f(231, l, typeof e)
      );
    return e;
  }
  var te = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ci = !1;
  if (te)
    try {
      var au = {};
      Object.defineProperty(au, "passive", {
        get: function() {
          Ci = !0;
        }
      }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
    } catch {
      Ci = !1;
    }
  var Se = null, xi = null, fa = null;
  function ho() {
    if (fa) return fa;
    var t, l = xi, e = l.length, n, u = "value" in Se ? Se.value : Se.textContent, a = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var i = e - t;
    for (n = 1; n <= i && l[e - n] === u[a - n]; n++) ;
    return fa = u.slice(t, 1 < n ? 1 - n : void 0);
  }
  function oa(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function sa() {
    return !0;
  }
  function vo() {
    return !1;
  }
  function dl(t) {
    function l(e, n, u, a, i) {
      this._reactName = e, this._targetInst = u, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(a) : a[c]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? sa : vo, this.isPropagationStopped = vo, this;
    }
    return M(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = sa);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = sa);
      },
      persist: function() {
      },
      isPersistent: sa
    }), l;
  }
  var Ve = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ra = dl(Ve), iu = M({}, Ve, { view: 0, detail: 0 }), A0 = dl(iu), Ri, Bi, cu, da = M({}, iu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== cu && (cu && t.type === "mousemove" ? (Ri = t.screenX - cu.screenX, Bi = t.screenY - cu.screenY) : Bi = Ri = 0, cu = t), Ri);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Bi;
    }
  }), go = dl(da), O0 = M({}, da, { dataTransfer: 0 }), M0 = dl(O0), _0 = M({}, iu, { relatedTarget: 0 }), qi = dl(_0), D0 = M({}, Ve, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U0 = dl(D0), N0 = M({}, Ve, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), H0 = dl(N0), C0 = M({}, Ve, { data: 0 }), So = dl(C0), x0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, R0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, B0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function q0(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = B0[t]) ? !!l[t] : !1;
  }
  function Yi() {
    return q0;
  }
  var Y0 = M({}, iu, {
    key: function(t) {
      if (t.key) {
        var l = x0[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = oa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? R0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yi,
    charCode: function(t) {
      return t.type === "keypress" ? oa(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? oa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), j0 = dl(Y0), G0 = M({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bo = dl(G0), L0 = M({}, iu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yi
  }), Q0 = dl(L0), X0 = M({}, Ve, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Z0 = dl(X0), V0 = M({}, da, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), K0 = dl(V0), J0 = M({}, Ve, {
    newState: 0,
    oldState: 0
  }), w0 = dl(J0), W0 = [9, 13, 27, 32], ji = te && "CompositionEvent" in window, fu = null;
  te && "documentMode" in document && (fu = document.documentMode);
  var $0 = te && "TextEvent" in window && !fu, po = te && (!ji || fu && 8 < fu && 11 >= fu), Eo = " ", zo = !1;
  function To(t, l) {
    switch (t) {
      case "keyup":
        return W0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ao(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var pn = !1;
  function F0(t, l) {
    switch (t) {
      case "compositionend":
        return Ao(l);
      case "keypress":
        return l.which !== 32 ? null : (zo = !0, Eo);
      case "textInput":
        return t = l.data, t === Eo && zo ? null : t;
      default:
        return null;
    }
  }
  function k0(t, l) {
    if (pn)
      return t === "compositionend" || !ji && To(t, l) ? (t = ho(), fa = xi = Se = null, pn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return po && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var I0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Oo(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!I0[t.type] : l === "textarea";
  }
  function Mo(t, l, e, n) {
    Sn ? bn ? bn.push(n) : bn = [n] : Sn = n, l = li(l, "onChange"), 0 < l.length && (e = new ra(
      "onChange",
      "change",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }));
  }
  var ou = null, su = null;
  function P0(t) {
    fd(t, 0);
  }
  function ma(t) {
    var l = nu(t);
    if (io(l)) return t;
  }
  function _o(t, l) {
    if (t === "change") return l;
  }
  var Do = !1;
  if (te) {
    var Gi;
    if (te) {
      var Li = "oninput" in document;
      if (!Li) {
        var Uo = document.createElement("div");
        Uo.setAttribute("oninput", "return;"), Li = typeof Uo.oninput == "function";
      }
      Gi = Li;
    } else Gi = !1;
    Do = Gi && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    ou && (ou.detachEvent("onpropertychange", Ho), su = ou = null);
  }
  function Ho(t) {
    if (t.propertyName === "value" && ma(su)) {
      var l = [];
      Mo(
        l,
        su,
        t,
        Ni(t)
      ), yo(P0, l);
    }
  }
  function tm(t, l, e) {
    t === "focusin" ? (No(), ou = l, su = e, ou.attachEvent("onpropertychange", Ho)) : t === "focusout" && No();
  }
  function lm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ma(su);
  }
  function em(t, l) {
    if (t === "click") return ma(l);
  }
  function nm(t, l) {
    if (t === "input" || t === "change")
      return ma(l);
  }
  function um(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Sl = typeof Object.is == "function" ? Object.is : um;
  function ru(t, l) {
    if (Sl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), n = Object.keys(l);
    if (e.length !== n.length) return !1;
    for (n = 0; n < e.length; n++) {
      var u = e[n];
      if (!Ol.call(l, u) || !Sl(t[u], l[u]))
        return !1;
    }
    return !0;
  }
  function Co(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function xo(t, l) {
    var e = Co(t);
    t = 0;
    for (var n; e; ) {
      if (e.nodeType === 3) {
        if (n = t + e.textContent.length, t <= l && n >= l)
          return { node: e, offset: l - t };
        t = n;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Co(e);
    }
  }
  function Ro(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ro(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Bo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = ia(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = ia(t.document);
    }
    return l;
  }
  function Qi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var am = te && "documentMode" in document && 11 >= document.documentMode, En = null, Xi = null, du = null, Zi = !1;
  function qo(t, l, e) {
    var n = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Zi || En == null || En !== ia(n) || (n = En, "selectionStart" in n && Qi(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), du && ru(du, n) || (du = n, n = li(Xi, "onSelect"), 0 < n.length && (l = new ra(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: n }), l.target = En)));
  }
  function Ke(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var zn = {
    animationend: Ke("Animation", "AnimationEnd"),
    animationiteration: Ke("Animation", "AnimationIteration"),
    animationstart: Ke("Animation", "AnimationStart"),
    transitionrun: Ke("Transition", "TransitionRun"),
    transitionstart: Ke("Transition", "TransitionStart"),
    transitioncancel: Ke("Transition", "TransitionCancel"),
    transitionend: Ke("Transition", "TransitionEnd")
  }, Vi = {}, Yo = {};
  te && (Yo = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);
  function Je(t) {
    if (Vi[t]) return Vi[t];
    if (!zn[t]) return t;
    var l = zn[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Yo)
        return Vi[t] = l[e];
    return t;
  }
  var jo = Je("animationend"), Go = Je("animationiteration"), Lo = Je("animationstart"), im = Je("transitionrun"), cm = Je("transitionstart"), fm = Je("transitioncancel"), Qo = Je("transitionend"), Xo = /* @__PURE__ */ new Map(), Ki = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ki.push("scrollEnd");
  function jl(t, l) {
    Xo.set(t, l), Ze(l, [t]);
  }
  var ya = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Dl = [], Tn = 0, Ji = 0;
  function ha() {
    for (var t = Tn, l = Ji = Tn = 0; l < t; ) {
      var e = Dl[l];
      Dl[l++] = null;
      var n = Dl[l];
      Dl[l++] = null;
      var u = Dl[l];
      Dl[l++] = null;
      var a = Dl[l];
      if (Dl[l++] = null, n !== null && u !== null) {
        var i = n.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), n.pending = u;
      }
      a !== 0 && Zo(e, u, a);
    }
  }
  function va(t, l, e, n) {
    Dl[Tn++] = t, Dl[Tn++] = l, Dl[Tn++] = e, Dl[Tn++] = n, Ji |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function wi(t, l, e, n) {
    return va(t, l, e, n), ga(t);
  }
  function we(t, l) {
    return va(t, null, null, l), ga(t);
  }
  function Zo(t, l, e) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e);
    for (var u = !1, a = t.return; a !== null; )
      a.childLanes |= e, n = a.alternate, n !== null && (n.childLanes |= e), a.tag === 22 && (t = a.stateNode, t === null || t._visibility & 1 || (u = !0)), t = a, a = a.return;
    return t.tag === 3 ? (a = t.stateNode, u && l !== null && (u = 31 - fl(e), t = a.hiddenUpdates, n = t[u], n === null ? t[u] = [l] : n.push(l), l.lane = e | 536870912), a) : null;
  }
  function ga(t) {
    if (50 < Ru)
      throw Ru = 0, ef = null, Error(f(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var An = {};
  function om(t, l, e, n) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bl(t, l, e, n) {
    return new om(t, l, e, n);
  }
  function Wi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function le(t, l) {
    var e = t.alternate;
    return e === null ? (e = bl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Vo(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Sa(t, l, e, n, u, a) {
    var i = 0;
    if (n = t, typeof t == "function") Wi(t) && (i = 1);
    else if (typeof t == "string")
      i = yy(
        t,
        e,
        Z.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case at:
          return t = bl(31, e, l, u), t.elementType = at, t.lanes = a, t;
        case q:
          return We(e.children, u, a, l);
        case G:
          i = 8, u |= 24;
          break;
        case B:
          return t = bl(12, e, l, u | 2), t.elementType = B, t.lanes = a, t;
        case ot:
          return t = bl(13, e, l, u), t.elementType = ot, t.lanes = a, t;
        case P:
          return t = bl(19, e, l, u), t.elementType = P, t.lanes = a, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case V:
                i = 10;
                break t;
              case Q:
                i = 9;
                break t;
              case tt:
                i = 11;
                break t;
              case X:
                i = 14;
                break t;
              case k:
                i = 16, n = null;
                break t;
            }
          i = 29, e = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return l = bl(i, e, l, u), l.elementType = t, l.type = n, l.lanes = a, l;
  }
  function We(t, l, e, n) {
    return t = bl(7, t, n, l), t.lanes = e, t;
  }
  function $i(t, l, e) {
    return t = bl(6, t, null, l), t.lanes = e, t;
  }
  function Ko(t) {
    var l = bl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Fi(t, l, e) {
    return l = bl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Jo = /* @__PURE__ */ new WeakMap();
  function Ul(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Jo.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Xl(l)
      }, Jo.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Xl(l)
    };
  }
  var On = [], Mn = 0, ba = null, mu = 0, Nl = [], Hl = 0, be = null, Jl = 1, wl = "";
  function ee(t, l) {
    On[Mn++] = mu, On[Mn++] = ba, ba = t, mu = l;
  }
  function wo(t, l, e) {
    Nl[Hl++] = Jl, Nl[Hl++] = wl, Nl[Hl++] = be, be = t;
    var n = Jl;
    t = wl;
    var u = 32 - fl(n) - 1;
    n &= ~(1 << u), e += 1;
    var a = 32 - fl(l) + u;
    if (30 < a) {
      var i = u - u % 5;
      a = (n & (1 << i) - 1).toString(32), n >>= i, u -= i, Jl = 1 << 32 - fl(l) + u | e << u | n, wl = a + t;
    } else
      Jl = 1 << a | e << u | n, wl = t;
  }
  function ki(t) {
    t.return !== null && (ee(t, 1), wo(t, 1, 0));
  }
  function Ii(t) {
    for (; t === ba; )
      ba = On[--Mn], On[Mn] = null, mu = On[--Mn], On[Mn] = null;
    for (; t === be; )
      be = Nl[--Hl], Nl[Hl] = null, wl = Nl[--Hl], Nl[Hl] = null, Jl = Nl[--Hl], Nl[Hl] = null;
  }
  function Wo(t, l) {
    Nl[Hl++] = Jl, Nl[Hl++] = wl, Nl[Hl++] = be, Jl = l.id, wl = l.overflow, be = t;
  }
  var ll = null, Rt = null, vt = !1, pe = null, Cl = !1, Pi = Error(f(519));
  function Ee(t) {
    var l = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw yu(Ul(l, t)), Pi;
  }
  function $o(t) {
    var l = t.stateNode, e = t.type, n = t.memoizedProps;
    switch (l[tl] = t, l[rl] = n, e) {
      case "dialog":
        dt("cancel", l), dt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < qu.length; e++)
          dt(qu[e], l);
        break;
      case "source":
        dt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", l), dt("load", l);
        break;
      case "details":
        dt("toggle", l);
        break;
      case "input":
        dt("invalid", l), co(
          l,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        dt("invalid", l);
        break;
      case "textarea":
        dt("invalid", l), oo(l, n.value, n.defaultValue, n.children);
    }
    e = n.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || n.suppressHydrationWarning === !0 || dd(l.textContent, e) ? (n.popover != null && (dt("beforetoggle", l), dt("toggle", l)), n.onScroll != null && dt("scroll", l), n.onScrollEnd != null && dt("scrollend", l), n.onClick != null && (l.onclick = Pl), l = !0) : l = !1, l || Ee(t, !0);
  }
  function Fo(t) {
    for (ll = t.return; ll; )
      switch (ll.tag) {
        case 5:
        case 31:
        case 13:
          Cl = !1;
          return;
        case 27:
        case 3:
          Cl = !0;
          return;
        default:
          ll = ll.return;
      }
  }
  function _n(t) {
    if (t !== ll) return !1;
    if (!vt) return Fo(t), vt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Sf(t.type, t.memoizedProps)), e = !e), e && Rt && Ee(t), Fo(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Rt = Ed(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Rt = Ed(t);
    } else
      l === 27 ? (l = Rt, Be(t.type) ? (t = Tf, Tf = null, Rt = t) : Rt = l) : Rt = ll ? Rl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function $e() {
    Rt = ll = null, vt = !1;
  }
  function tc() {
    var t = pe;
    return t !== null && (vl === null ? vl = t : vl.push.apply(
      vl,
      t
    ), pe = null), t;
  }
  function yu(t) {
    pe === null ? pe = [t] : pe.push(t);
  }
  var lc = d(null), Fe = null, ne = null;
  function ze(t, l, e) {
    L(lc, l._currentValue), l._currentValue = e;
  }
  function ue(t) {
    t._currentValue = lc.current, U(lc);
  }
  function ec(t, l, e) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function nc(t, l, e, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var a = u.dependencies;
      if (a !== null) {
        var i = u.child;
        a = a.firstContext;
        t: for (; a !== null; ) {
          var c = a;
          a = u;
          for (var s = 0; s < l.length; s++)
            if (c.context === l[s]) {
              a.lanes |= e, c = a.alternate, c !== null && (c.lanes |= e), ec(
                a.return,
                e,
                t
              ), n || (i = null);
              break t;
            }
          a = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(f(341));
        i.lanes |= e, a = i.alternate, a !== null && (a.lanes |= e), ec(i, e, t), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function Dn(t, l, e, n) {
    t = null;
    for (var u = l, a = !1; u !== null; ) {
      if (!a) {
        if ((u.flags & 524288) !== 0) a = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          Sl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (u === lt.current) {
        if (i = u.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Qu) : t = [Qu]);
      }
      u = u.return;
    }
    t !== null && nc(
      l,
      t,
      e,
      n
    ), l.flags |= 262144;
  }
  function pa(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Sl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ke(t) {
    Fe = t, ne = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function el(t) {
    return ko(Fe, t);
  }
  function Ea(t, l) {
    return Fe === null && ke(t), ko(t, l);
  }
  function ko(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, ne === null) {
      if (t === null) throw Error(f(308));
      ne = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else ne = ne.next = l;
    return e;
  }
  var sm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, rm = o.unstable_scheduleCallback, dm = o.unstable_NormalPriority, Zt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function uc() {
    return {
      controller: new sm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hu(t) {
    t.refCount--, t.refCount === 0 && rm(dm, function() {
      t.controller.abort();
    });
  }
  var vu = null, ac = 0, Un = 0, Nn = null;
  function mm(t, l) {
    if (vu === null) {
      var e = vu = [];
      ac = 0, Un = of(), Nn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          e.push(n);
        }
      };
    }
    return ac++, l.then(Io, Io), l;
  }
  function Io() {
    if (--ac === 0 && vu !== null) {
      Nn !== null && (Nn.status = "fulfilled");
      var t = vu;
      vu = null, Un = 0, Nn = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function ym(t, l) {
    var e = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (n.status = "rejected", n.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), n;
  }
  var Po = O.S;
  O.S = function(t, l) {
    qr = al(), typeof l == "object" && l !== null && typeof l.then == "function" && mm(t, l), Po !== null && Po(t, l);
  };
  var Ie = d(null);
  function ic() {
    var t = Ie.current;
    return t !== null ? t : xt.pooledCache;
  }
  function za(t, l) {
    l === null ? L(Ie, Ie.current) : L(Ie, l.pool);
  }
  function ts() {
    var t = ic();
    return t === null ? null : { parent: Zt._currentValue, pool: t };
  }
  var Hn = Error(f(460)), cc = Error(f(474)), Ta = Error(f(542)), Aa = { then: function() {
  } };
  function ls(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function es(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Pl, Pl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, us(t), t;
      default:
        if (typeof l.status == "string") l.then(Pl, Pl);
        else {
          if (t = xt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = l, t.status = "pending", t.then(
            function(n) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = n;
              }
            },
            function(n) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = n;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, us(t), t;
        }
        throw tn = l, Hn;
    }
  }
  function Pe(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (tn = e, Hn) : e;
    }
  }
  var tn = null;
  function ns() {
    if (tn === null) throw Error(f(459));
    var t = tn;
    return tn = null, t;
  }
  function us(t) {
    if (t === Hn || t === Ta)
      throw Error(f(483));
  }
  var Cn = null, gu = 0;
  function Oa(t) {
    var l = gu;
    return gu += 1, Cn === null && (Cn = []), es(Cn, t, l);
  }
  function Su(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Ma(t, l) {
    throw l.$$typeof === x ? Error(f(525)) : (t = Object.prototype.toString.call(l), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function as(t) {
    function l(v, m) {
      if (t) {
        var b = v.deletions;
        b === null ? (v.deletions = [m], v.flags |= 16) : b.push(m);
      }
    }
    function e(v, m) {
      if (!t) return null;
      for (; m !== null; )
        l(v, m), m = m.sibling;
      return null;
    }
    function n(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function u(v, m) {
      return v = le(v, m), v.index = 0, v.sibling = null, v;
    }
    function a(v, m, b) {
      return v.index = b, t ? (b = v.alternate, b !== null ? (b = b.index, b < m ? (v.flags |= 67108866, m) : b) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, m, b, N) {
      return m === null || m.tag !== 6 ? (m = $i(b, v.mode, N), m.return = v, m) : (m = u(m, b), m.return = v, m);
    }
    function s(v, m, b, N) {
      var $ = b.type;
      return $ === q ? D(
        v,
        m,
        b.props.children,
        N,
        b.key
      ) : m !== null && (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === k && Pe($) === m.type) ? (m = u(m, b.props), Su(m, b), m.return = v, m) : (m = Sa(
        b.type,
        b.key,
        b.props,
        null,
        v.mode,
        N
      ), Su(m, b), m.return = v, m);
    }
    function p(v, m, b, N) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = Fi(b, v.mode, N), m.return = v, m) : (m = u(m, b.children || []), m.return = v, m);
    }
    function D(v, m, b, N, $) {
      return m === null || m.tag !== 7 ? (m = We(
        b,
        v.mode,
        N,
        $
      ), m.return = v, m) : (m = u(m, b), m.return = v, m);
    }
    function H(v, m, b) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = $i(
          "" + m,
          v.mode,
          b
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Y:
            return b = Sa(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              b
            ), Su(b, m), b.return = v, b;
          case C:
            return m = Fi(
              m,
              v.mode,
              b
            ), m.return = v, m;
          case k:
            return m = Pe(m), H(v, m, b);
        }
        if (_t(m) || bt(m))
          return m = We(
            m,
            v.mode,
            b,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return H(v, Oa(m), b);
        if (m.$$typeof === V)
          return H(
            v,
            Ea(v, m),
            b
          );
        Ma(v, m);
      }
      return null;
    }
    function z(v, m, b, N) {
      var $ = m !== null ? m.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return $ !== null ? null : c(v, m, "" + b, N);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Y:
            return b.key === $ ? s(v, m, b, N) : null;
          case C:
            return b.key === $ ? p(v, m, b, N) : null;
          case k:
            return b = Pe(b), z(v, m, b, N);
        }
        if (_t(b) || bt(b))
          return $ !== null ? null : D(v, m, b, N, null);
        if (typeof b.then == "function")
          return z(
            v,
            m,
            Oa(b),
            N
          );
        if (b.$$typeof === V)
          return z(
            v,
            m,
            Ea(v, b),
            N
          );
        Ma(v, b);
      }
      return null;
    }
    function A(v, m, b, N, $) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return v = v.get(b) || null, c(m, v, "" + N, $);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Y:
            return v = v.get(
              N.key === null ? b : N.key
            ) || null, s(m, v, N, $);
          case C:
            return v = v.get(
              N.key === null ? b : N.key
            ) || null, p(m, v, N, $);
          case k:
            return N = Pe(N), A(
              v,
              m,
              b,
              N,
              $
            );
        }
        if (_t(N) || bt(N))
          return v = v.get(b) || null, D(m, v, N, $, null);
        if (typeof N.then == "function")
          return A(
            v,
            m,
            b,
            Oa(N),
            $
          );
        if (N.$$typeof === V)
          return A(
            v,
            m,
            b,
            Ea(m, N),
            $
          );
        Ma(m, N);
      }
      return null;
    }
    function K(v, m, b, N) {
      for (var $ = null, gt = null, J = m, it = m = 0, ht = null; J !== null && it < b.length; it++) {
        J.index > it ? (ht = J, J = null) : ht = J.sibling;
        var St = z(
          v,
          J,
          b[it],
          N
        );
        if (St === null) {
          J === null && (J = ht);
          break;
        }
        t && J && St.alternate === null && l(v, J), m = a(St, m, it), gt === null ? $ = St : gt.sibling = St, gt = St, J = ht;
      }
      if (it === b.length)
        return e(v, J), vt && ee(v, it), $;
      if (J === null) {
        for (; it < b.length; it++)
          J = H(v, b[it], N), J !== null && (m = a(
            J,
            m,
            it
          ), gt === null ? $ = J : gt.sibling = J, gt = J);
        return vt && ee(v, it), $;
      }
      for (J = n(J); it < b.length; it++)
        ht = A(
          J,
          v,
          it,
          b[it],
          N
        ), ht !== null && (t && ht.alternate !== null && J.delete(
          ht.key === null ? it : ht.key
        ), m = a(
          ht,
          m,
          it
        ), gt === null ? $ = ht : gt.sibling = ht, gt = ht);
      return t && J.forEach(function(Le) {
        return l(v, Le);
      }), vt && ee(v, it), $;
    }
    function F(v, m, b, N) {
      if (b == null) throw Error(f(151));
      for (var $ = null, gt = null, J = m, it = m = 0, ht = null, St = b.next(); J !== null && !St.done; it++, St = b.next()) {
        J.index > it ? (ht = J, J = null) : ht = J.sibling;
        var Le = z(v, J, St.value, N);
        if (Le === null) {
          J === null && (J = ht);
          break;
        }
        t && J && Le.alternate === null && l(v, J), m = a(Le, m, it), gt === null ? $ = Le : gt.sibling = Le, gt = Le, J = ht;
      }
      if (St.done)
        return e(v, J), vt && ee(v, it), $;
      if (J === null) {
        for (; !St.done; it++, St = b.next())
          St = H(v, St.value, N), St !== null && (m = a(St, m, it), gt === null ? $ = St : gt.sibling = St, gt = St);
        return vt && ee(v, it), $;
      }
      for (J = n(J); !St.done; it++, St = b.next())
        St = A(J, v, it, St.value, N), St !== null && (t && St.alternate !== null && J.delete(St.key === null ? it : St.key), m = a(St, m, it), gt === null ? $ = St : gt.sibling = St, gt = St);
      return t && J.forEach(function(Oy) {
        return l(v, Oy);
      }), vt && ee(v, it), $;
    }
    function Ct(v, m, b, N) {
      if (typeof b == "object" && b !== null && b.type === q && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Y:
            t: {
              for (var $ = b.key; m !== null; ) {
                if (m.key === $) {
                  if ($ = b.type, $ === q) {
                    if (m.tag === 7) {
                      e(
                        v,
                        m.sibling
                      ), N = u(
                        m,
                        b.props.children
                      ), N.return = v, v = N;
                      break t;
                    }
                  } else if (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === k && Pe($) === m.type) {
                    e(
                      v,
                      m.sibling
                    ), N = u(m, b.props), Su(N, b), N.return = v, v = N;
                    break t;
                  }
                  e(v, m);
                  break;
                } else l(v, m);
                m = m.sibling;
              }
              b.type === q ? (N = We(
                b.props.children,
                v.mode,
                N,
                b.key
              ), N.return = v, v = N) : (N = Sa(
                b.type,
                b.key,
                b.props,
                null,
                v.mode,
                N
              ), Su(N, b), N.return = v, v = N);
            }
            return i(v);
          case C:
            t: {
              for ($ = b.key; m !== null; ) {
                if (m.key === $)
                  if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                    e(
                      v,
                      m.sibling
                    ), N = u(m, b.children || []), N.return = v, v = N;
                    break t;
                  } else {
                    e(v, m);
                    break;
                  }
                else l(v, m);
                m = m.sibling;
              }
              N = Fi(b, v.mode, N), N.return = v, v = N;
            }
            return i(v);
          case k:
            return b = Pe(b), Ct(
              v,
              m,
              b,
              N
            );
        }
        if (_t(b))
          return K(
            v,
            m,
            b,
            N
          );
        if (bt(b)) {
          if ($ = bt(b), typeof $ != "function") throw Error(f(150));
          return b = $.call(b), F(
            v,
            m,
            b,
            N
          );
        }
        if (typeof b.then == "function")
          return Ct(
            v,
            m,
            Oa(b),
            N
          );
        if (b.$$typeof === V)
          return Ct(
            v,
            m,
            Ea(v, b),
            N
          );
        Ma(v, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, m !== null && m.tag === 6 ? (e(v, m.sibling), N = u(m, b), N.return = v, v = N) : (e(v, m), N = $i(b, v.mode, N), N.return = v, v = N), i(v)) : e(v, m);
    }
    return function(v, m, b, N) {
      try {
        gu = 0;
        var $ = Ct(
          v,
          m,
          b,
          N
        );
        return Cn = null, $;
      } catch (J) {
        if (J === Hn || J === Ta) throw J;
        var gt = bl(29, J, null, v.mode);
        return gt.lanes = N, gt.return = v, gt;
      }
    };
  }
  var ln = as(!0), is = as(!1), Te = !1;
  function fc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function oc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ae(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Oe(t, l, e) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (zt & 2) !== 0) {
      var u = n.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), n.pending = l, l = ga(t), Zo(t, null, e), l;
    }
    return va(t, n, l, e), ga(t);
  }
  function bu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, Ff(t, e);
    }
  }
  function sc(t, l) {
    var e = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, e === n)) {
      var u = null, a = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          a === null ? u = a = i : a = a.next = i, e = e.next;
        } while (e !== null);
        a === null ? u = a = l : a = a.next = l;
      } else u = a = l;
      e = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: a,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var rc = !1;
  function pu() {
    if (rc) {
      var t = Nn;
      if (t !== null) throw t;
    }
  }
  function Eu(t, l, e, n) {
    rc = !1;
    var u = t.updateQueue;
    Te = !1;
    var a = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, p = s.next;
      s.next = null, i === null ? a = p : i.next = p, i = s;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, c = D.lastBaseUpdate, c !== i && (c === null ? D.firstBaseUpdate = p : c.next = p, D.lastBaseUpdate = s));
    }
    if (a !== null) {
      var H = u.baseState;
      i = 0, D = p = s = null, c = a;
      do {
        var z = c.lane & -536870913, A = z !== c.lane;
        if (A ? (yt & z) === z : (n & z) === z) {
          z !== 0 && z === Un && (rc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var K = t, F = c;
            z = l;
            var Ct = e;
            switch (F.tag) {
              case 1:
                if (K = F.payload, typeof K == "function") {
                  H = K.call(Ct, H, z);
                  break t;
                }
                H = K;
                break t;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = F.payload, z = typeof K == "function" ? K.call(Ct, H, z) : K, z == null) break t;
                H = M({}, H, z);
                break t;
              case 2:
                Te = !0;
            }
          }
          z = c.callback, z !== null && (t.flags |= 64, A && (t.flags |= 8192), A = u.callbacks, A === null ? u.callbacks = [z] : A.push(z));
        } else
          A = {
            lane: z,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, D === null ? (p = D = A, s = H) : D = D.next = A, i |= z;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          A = c, c = A.next, A.next = null, u.lastBaseUpdate = A, u.shared.pending = null;
        }
      } while (!0);
      D === null && (s = H), u.baseState = s, u.firstBaseUpdate = p, u.lastBaseUpdate = D, a === null && (u.shared.lanes = 0), Ne |= i, t.lanes = i, t.memoizedState = H;
    }
  }
  function cs(t, l) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(l);
  }
  function fs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        cs(e[t], l);
  }
  var xn = d(null), _a = d(0);
  function os(t, l) {
    t = me, L(_a, t), L(xn, l), me = t | l.baseLanes;
  }
  function dc() {
    L(_a, me), L(xn, xn.current);
  }
  function mc() {
    me = _a.current, U(xn), U(_a);
  }
  var pl = d(null), xl = null;
  function Me(t) {
    var l = t.alternate;
    L(Qt, Qt.current & 1), L(pl, t), xl === null && (l === null || xn.current !== null || l.memoizedState !== null) && (xl = t);
  }
  function yc(t) {
    L(Qt, Qt.current), L(pl, t), xl === null && (xl = t);
  }
  function ss(t) {
    t.tag === 22 ? (L(Qt, Qt.current), L(pl, t), xl === null && (xl = t)) : _e();
  }
  function _e() {
    L(Qt, Qt.current), L(pl, pl.current);
  }
  function El(t) {
    U(pl), xl === t && (xl = null), U(Qt);
  }
  var Qt = d(0);
  function Da(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Ef(e) || zf(e)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var ae = 0, ut = null, Nt = null, Vt = null, Ua = !1, Rn = !1, en = !1, Na = 0, zu = 0, Bn = null, hm = 0;
  function Gt() {
    throw Error(f(321));
  }
  function hc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Sl(t[e], l[e])) return !1;
    return !0;
  }
  function vc(t, l, e, n, u, a) {
    return ae = a, ut = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, O.H = t === null || t.memoizedState === null ? ws : Hc, en = !1, a = e(n, u), en = !1, Rn && (a = ds(
      l,
      e,
      n,
      u
    )), rs(t), a;
  }
  function rs(t) {
    O.H = Ou;
    var l = Nt !== null && Nt.next !== null;
    if (ae = 0, Vt = Nt = ut = null, Ua = !1, zu = 0, Bn = null, l) throw Error(f(300));
    t === null || Kt || (t = t.dependencies, t !== null && pa(t) && (Kt = !0));
  }
  function ds(t, l, e, n) {
    ut = t;
    var u = 0;
    do {
      if (Rn && (Bn = null), zu = 0, Rn = !1, 25 <= u) throw Error(f(301));
      if (u += 1, Vt = Nt = null, t.updateQueue != null) {
        var a = t.updateQueue;
        a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
      }
      O.H = Ws, a = l(e, n);
    } while (Rn);
    return a;
  }
  function vm() {
    var t = O.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Tu(l) : l, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (ut.flags |= 1024), l;
  }
  function gc() {
    var t = Na !== 0;
    return Na = 0, t;
  }
  function Sc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function bc(t) {
    if (Ua) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Ua = !1;
    }
    ae = 0, Vt = Nt = ut = null, Rn = !1, zu = Na = 0, Bn = null;
  }
  function ol() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Vt === null ? ut.memoizedState = Vt = t : Vt = Vt.next = t, Vt;
  }
  function Xt() {
    if (Nt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var l = Vt === null ? ut.memoizedState : Vt.next;
    if (l !== null)
      Vt = l, Nt = t;
    else {
      if (t === null)
        throw ut.alternate === null ? Error(f(467)) : Error(f(310));
      Nt = t, t = {
        memoizedState: Nt.memoizedState,
        baseState: Nt.baseState,
        baseQueue: Nt.baseQueue,
        queue: Nt.queue,
        next: null
      }, Vt === null ? ut.memoizedState = Vt = t : Vt = Vt.next = t;
    }
    return Vt;
  }
  function Ha() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Tu(t) {
    var l = zu;
    return zu += 1, Bn === null && (Bn = []), t = es(Bn, t, l), l = ut, (Vt === null ? l.memoizedState : Vt.next) === null && (l = l.alternate, O.H = l === null || l.memoizedState === null ? ws : Hc), t;
  }
  function Ca(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Tu(t);
      if (t.$$typeof === V) return el(t);
    }
    throw Error(f(438, String(t)));
  }
  function pc(t) {
    var l = null, e = ut.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var n = ut.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
        data: n.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = Ha(), ut.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), n = 0; n < t; n++)
        e[n] = Tt;
    return l.index++, e;
  }
  function ie(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function xa(t) {
    var l = Xt();
    return Ec(l, Nt, t);
  }
  function Ec(t, l, e) {
    var n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var u = t.baseQueue, a = n.pending;
    if (a !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = a.next, a.next = i;
      }
      l.baseQueue = u = a, n.pending = null;
    }
    if (a = t.baseState, u === null) t.memoizedState = a;
    else {
      l = u.next;
      var c = i = null, s = null, p = l, D = !1;
      do {
        var H = p.lane & -536870913;
        if (H !== p.lane ? (yt & H) === H : (ae & H) === H) {
          var z = p.revertLane;
          if (z === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), H === Un && (D = !0);
          else if ((ae & z) === z) {
            p = p.next, z === Un && (D = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, s === null ? (c = s = H, i = a) : s = s.next = H, ut.lanes |= z, Ne |= z;
          H = p.action, en && e(a, H), a = p.hasEagerState ? p.eagerState : e(a, H);
        } else
          z = {
            lane: H,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, s === null ? (c = s = z, i = a) : s = s.next = z, ut.lanes |= H, Ne |= H;
        p = p.next;
      } while (p !== null && p !== l);
      if (s === null ? i = a : s.next = c, !Sl(a, t.memoizedState) && (Kt = !0, D && (e = Nn, e !== null)))
        throw e;
      t.memoizedState = a, t.baseState = i, t.baseQueue = s, n.lastRenderedState = a;
    }
    return u === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function zc(t) {
    var l = Xt(), e = l.queue;
    if (e === null) throw Error(f(311));
    e.lastRenderedReducer = t;
    var n = e.dispatch, u = e.pending, a = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        a = t(a, i.action), i = i.next;
      while (i !== u);
      Sl(a, l.memoizedState) || (Kt = !0), l.memoizedState = a, l.baseQueue === null && (l.baseState = a), e.lastRenderedState = a;
    }
    return [a, n];
  }
  function ms(t, l, e) {
    var n = ut, u = Xt(), a = vt;
    if (a) {
      if (e === void 0) throw Error(f(407));
      e = e();
    } else e = l();
    var i = !Sl(
      (Nt || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Kt = !0), u = u.queue, Oc(vs.bind(null, n, u, t), [
      t
    ]), u.getSnapshot !== l || i || Vt !== null && Vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, qn(
        9,
        { destroy: void 0 },
        hs.bind(
          null,
          n,
          u,
          e,
          l
        ),
        null
      ), xt === null) throw Error(f(349));
      a || (ae & 127) !== 0 || ys(n, l, e);
    }
    return e;
  }
  function ys(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = ut.updateQueue, l === null ? (l = Ha(), ut.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function hs(t, l, e, n) {
    l.value = e, l.getSnapshot = n, gs(l) && Ss(t);
  }
  function vs(t, l, e) {
    return e(function() {
      gs(l) && Ss(t);
    });
  }
  function gs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Sl(t, e);
    } catch {
      return !0;
    }
  }
  function Ss(t) {
    var l = we(t, 2);
    l !== null && gl(l, t, 2);
  }
  function Tc(t) {
    var l = ol();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), en) {
        Vl(!0);
        try {
          e();
        } finally {
          Vl(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ie,
      lastRenderedState: t
    }, l;
  }
  function bs(t, l, e, n) {
    return t.baseState = e, Ec(
      t,
      Nt,
      typeof n == "function" ? n : ie
    );
  }
  function gm(t, l, e, n, u) {
    if (qa(t)) throw Error(f(485));
    if (t = l.action, t !== null) {
      var a = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          a.listeners.push(i);
        }
      };
      O.T !== null ? e(!0) : a.isTransition = !1, n(a), e = l.pending, e === null ? (a.next = l.pending = a, ps(l, a)) : (a.next = e.next, l.pending = e.next = a);
    }
  }
  function ps(t, l) {
    var e = l.action, n = l.payload, u = t.state;
    if (l.isTransition) {
      var a = O.T, i = {};
      O.T = i;
      try {
        var c = e(u, n), s = O.S;
        s !== null && s(i, c), Es(t, l, c);
      } catch (p) {
        Ac(t, l, p);
      } finally {
        a !== null && i.types !== null && (a.types = i.types), O.T = a;
      }
    } else
      try {
        a = e(u, n), Es(t, l, a);
      } catch (p) {
        Ac(t, l, p);
      }
  }
  function Es(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(n) {
        zs(t, l, n);
      },
      function(n) {
        return Ac(t, l, n);
      }
    ) : zs(t, l, e);
  }
  function zs(t, l, e) {
    l.status = "fulfilled", l.value = e, Ts(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ps(t, e)));
  }
  function Ac(t, l, e) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = e, Ts(l), l = l.next;
      while (l !== n);
    }
    t.action = null;
  }
  function Ts(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function As(t, l) {
    return l;
  }
  function Os(t, l) {
    if (vt) {
      var e = xt.formState;
      if (e !== null) {
        t: {
          var n = ut;
          if (vt) {
            if (Rt) {
              l: {
                for (var u = Rt, a = Cl; u.nodeType !== 8; ) {
                  if (!a) {
                    u = null;
                    break l;
                  }
                  if (u = Rl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                a = u.data, u = a === "F!" || a === "F" ? u : null;
              }
              if (u) {
                Rt = Rl(
                  u.nextSibling
                ), n = u.data === "F!";
                break t;
              }
            }
            Ee(n);
          }
          n = !1;
        }
        n && (l = e[0]);
      }
    }
    return e = ol(), e.memoizedState = e.baseState = l, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: As,
      lastRenderedState: l
    }, e.queue = n, e = Vs.bind(
      null,
      ut,
      n
    ), n.dispatch = e, n = Tc(!1), a = Nc.bind(
      null,
      ut,
      !1,
      n.queue
    ), n = ol(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = u, e = gm.bind(
      null,
      ut,
      u,
      a,
      e
    ), u.dispatch = e, n.memoizedState = t, [l, e, !1];
  }
  function Ms(t) {
    var l = Xt();
    return _s(l, Nt, t);
  }
  function _s(t, l, e) {
    if (l = Ec(
      t,
      l,
      As
    )[0], t = xa(ie)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Tu(l);
      } catch (i) {
        throw i === Hn ? Ta : i;
      }
    else n = l;
    l = Xt();
    var u = l.queue, a = u.dispatch;
    return e !== l.memoizedState && (ut.flags |= 2048, qn(
      9,
      { destroy: void 0 },
      Sm.bind(null, u, e),
      null
    )), [n, a, t];
  }
  function Sm(t, l) {
    t.action = l;
  }
  function Ds(t) {
    var l = Xt(), e = Nt;
    if (e !== null)
      return _s(l, e, t);
    Xt(), l = l.memoizedState, e = Xt();
    var n = e.queue.dispatch;
    return e.memoizedState = t, [l, n, !1];
  }
  function qn(t, l, e, n) {
    return t = { tag: t, create: e, deps: n, inst: l, next: null }, l = ut.updateQueue, l === null && (l = Ha(), ut.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, l.lastEffect = t), t;
  }
  function Us() {
    return Xt().memoizedState;
  }
  function Ra(t, l, e, n) {
    var u = ol();
    ut.flags |= t, u.memoizedState = qn(
      1 | l,
      { destroy: void 0 },
      e,
      n === void 0 ? null : n
    );
  }
  function Ba(t, l, e, n) {
    var u = Xt();
    n = n === void 0 ? null : n;
    var a = u.memoizedState.inst;
    Nt !== null && n !== null && hc(n, Nt.memoizedState.deps) ? u.memoizedState = qn(l, a, e, n) : (ut.flags |= t, u.memoizedState = qn(
      1 | l,
      a,
      e,
      n
    ));
  }
  function Ns(t, l) {
    Ra(8390656, 8, t, l);
  }
  function Oc(t, l) {
    Ba(2048, 8, t, l);
  }
  function bm(t) {
    ut.flags |= 4;
    var l = ut.updateQueue;
    if (l === null)
      l = Ha(), ut.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Hs(t) {
    var l = Xt().memoizedState;
    return bm({ ref: l, nextImpl: t }), function() {
      if ((zt & 2) !== 0) throw Error(f(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Cs(t, l) {
    return Ba(4, 2, t, l);
  }
  function xs(t, l) {
    return Ba(4, 4, t, l);
  }
  function Rs(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Bs(t, l, e) {
    e = e != null ? e.concat([t]) : null, Ba(4, 4, Rs.bind(null, l, t), e);
  }
  function Mc() {
  }
  function qs(t, l) {
    var e = Xt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    return l !== null && hc(l, n[1]) ? n[0] : (e.memoizedState = [t, l], t);
  }
  function Ys(t, l) {
    var e = Xt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    if (l !== null && hc(l, n[1]))
      return n[0];
    if (n = t(), en) {
      Vl(!0);
      try {
        t();
      } finally {
        Vl(!1);
      }
    }
    return e.memoizedState = [n, l], n;
  }
  function _c(t, l, e) {
    return e === void 0 || (ae & 1073741824) !== 0 && (yt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = jr(), ut.lanes |= t, Ne |= t, e);
  }
  function js(t, l, e, n) {
    return Sl(e, l) ? e : xn.current !== null ? (t = _c(t, e, n), Sl(t, l) || (Kt = !0), t) : (ae & 42) === 0 || (ae & 1073741824) !== 0 && (yt & 261930) === 0 ? (Kt = !0, t.memoizedState = e) : (t = jr(), ut.lanes |= t, Ne |= t, l);
  }
  function Gs(t, l, e, n, u) {
    var a = j.p;
    j.p = a !== 0 && 8 > a ? a : 8;
    var i = O.T, c = {};
    O.T = c, Nc(t, !1, l, e);
    try {
      var s = u(), p = O.S;
      if (p !== null && p(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var D = ym(
          s,
          n
        );
        Au(
          t,
          l,
          D,
          Al(t)
        );
      } else
        Au(
          t,
          l,
          n,
          Al(t)
        );
    } catch (H) {
      Au(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: H },
        Al()
      );
    } finally {
      j.p = a, i !== null && c.types !== null && (i.types = c.types), O.T = i;
    }
  }
  function pm() {
  }
  function Dc(t, l, e, n) {
    if (t.tag !== 5) throw Error(f(476));
    var u = Ls(t).queue;
    Gs(
      t,
      u,
      l,
      w,
      e === null ? pm : function() {
        return Qs(t), e(n);
      }
    );
  }
  function Ls(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ie,
        lastRenderedState: w
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ie,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Qs(t) {
    var l = Ls(t);
    l.next === null && (l = t.alternate.memoizedState), Au(
      t,
      l.next.queue,
      {},
      Al()
    );
  }
  function Uc() {
    return el(Qu);
  }
  function Xs() {
    return Xt().memoizedState;
  }
  function Zs() {
    return Xt().memoizedState;
  }
  function Em(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Al();
          t = Ae(e);
          var n = Oe(l, t, e);
          n !== null && (gl(n, l, e), bu(n, l, e)), l = { cache: uc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function zm(t, l, e) {
    var n = Al();
    e = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qa(t) ? Ks(l, e) : (e = wi(t, l, e, n), e !== null && (gl(e, t, n), Js(e, l, n)));
  }
  function Vs(t, l, e) {
    var n = Al();
    Au(t, l, e, n);
  }
  function Au(t, l, e, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (qa(t)) Ks(l, u);
    else {
      var a = t.alternate;
      if (t.lanes === 0 && (a === null || a.lanes === 0) && (a = l.lastRenderedReducer, a !== null))
        try {
          var i = l.lastRenderedState, c = a(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, Sl(c, i))
            return va(t, l, u, 0), xt === null && ha(), !1;
        } catch {
        }
      if (e = wi(t, l, u, n), e !== null)
        return gl(e, t, n), Js(e, l, n), !0;
    }
    return !1;
  }
  function Nc(t, l, e, n) {
    if (n = {
      lane: 2,
      revertLane: of(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qa(t)) {
      if (l) throw Error(f(479));
    } else
      l = wi(
        t,
        e,
        n,
        2
      ), l !== null && gl(l, t, 2);
  }
  function qa(t) {
    var l = t.alternate;
    return t === ut || l !== null && l === ut;
  }
  function Ks(t, l) {
    Rn = Ua = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Js(t, l, e) {
    if ((e & 4194048) !== 0) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, Ff(t, e);
    }
  }
  var Ou = {
    readContext: el,
    use: Ca,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    useHostTransitionStatus: Gt,
    useFormState: Gt,
    useActionState: Gt,
    useOptimistic: Gt,
    useMemoCache: Gt,
    useCacheRefresh: Gt
  };
  Ou.useEffectEvent = Gt;
  var ws = {
    readContext: el,
    use: Ca,
    useCallback: function(t, l) {
      return ol().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: el,
    useEffect: Ns,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Ra(
        4194308,
        4,
        Rs.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Ra(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Ra(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = ol();
      l = l === void 0 ? null : l;
      var n = t();
      if (en) {
        Vl(!0);
        try {
          t();
        } finally {
          Vl(!1);
        }
      }
      return e.memoizedState = [n, l], n;
    },
    useReducer: function(t, l, e) {
      var n = ol();
      if (e !== void 0) {
        var u = e(l);
        if (en) {
          Vl(!0);
          try {
            e(l);
          } finally {
            Vl(!1);
          }
        }
      } else u = l;
      return n.memoizedState = n.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, n.queue = t, t = t.dispatch = zm.bind(
        null,
        ut,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var l = ol();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Tc(t);
      var l = t.queue, e = Vs.bind(null, ut, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, l) {
      var e = ol();
      return _c(e, t, l);
    },
    useTransition: function() {
      var t = Tc(!1);
      return t = Gs.bind(
        null,
        ut,
        t.queue,
        !0,
        !1
      ), ol().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var n = ut, u = ol();
      if (vt) {
        if (e === void 0)
          throw Error(f(407));
        e = e();
      } else {
        if (e = l(), xt === null)
          throw Error(f(349));
        (yt & 127) !== 0 || ys(n, l, e);
      }
      u.memoizedState = e;
      var a = { value: e, getSnapshot: l };
      return u.queue = a, Ns(vs.bind(null, n, a, t), [
        t
      ]), n.flags |= 2048, qn(
        9,
        { destroy: void 0 },
        hs.bind(
          null,
          n,
          a,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = ol(), l = xt.identifierPrefix;
      if (vt) {
        var e = wl, n = Jl;
        e = (n & ~(1 << 32 - fl(n) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = Na++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = hm++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Uc,
    useFormState: Os,
    useActionState: Os,
    useOptimistic: function(t) {
      var l = ol();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = Nc.bind(
        null,
        ut,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: pc,
    useCacheRefresh: function() {
      return ol().memoizedState = Em.bind(
        null,
        ut
      );
    },
    useEffectEvent: function(t) {
      var l = ol(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((zt & 2) !== 0)
          throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Hc = {
    readContext: el,
    use: Ca,
    useCallback: qs,
    useContext: el,
    useEffect: Oc,
    useImperativeHandle: Bs,
    useInsertionEffect: Cs,
    useLayoutEffect: xs,
    useMemo: Ys,
    useReducer: xa,
    useRef: Us,
    useState: function() {
      return xa(ie);
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, l) {
      var e = Xt();
      return js(
        e,
        Nt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = xa(ie)[0], l = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Tu(t),
        l
      ];
    },
    useSyncExternalStore: ms,
    useId: Xs,
    useHostTransitionStatus: Uc,
    useFormState: Ms,
    useActionState: Ms,
    useOptimistic: function(t, l) {
      var e = Xt();
      return bs(e, Nt, t, l);
    },
    useMemoCache: pc,
    useCacheRefresh: Zs
  };
  Hc.useEffectEvent = Hs;
  var Ws = {
    readContext: el,
    use: Ca,
    useCallback: qs,
    useContext: el,
    useEffect: Oc,
    useImperativeHandle: Bs,
    useInsertionEffect: Cs,
    useLayoutEffect: xs,
    useMemo: Ys,
    useReducer: zc,
    useRef: Us,
    useState: function() {
      return zc(ie);
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, l) {
      var e = Xt();
      return Nt === null ? _c(e, t, l) : js(
        e,
        Nt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = zc(ie)[0], l = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Tu(t),
        l
      ];
    },
    useSyncExternalStore: ms,
    useId: Xs,
    useHostTransitionStatus: Uc,
    useFormState: Ds,
    useActionState: Ds,
    useOptimistic: function(t, l) {
      var e = Xt();
      return Nt !== null ? bs(e, Nt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: pc,
    useCacheRefresh: Zs
  };
  Ws.useEffectEvent = Hs;
  function Cc(t, l, e, n) {
    l = t.memoizedState, e = e(n, l), e = e == null ? l : M({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var xc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var n = Al(), u = Ae(n);
      u.payload = l, e != null && (u.callback = e), l = Oe(t, u, n), l !== null && (gl(l, t, n), bu(l, t, n));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var n = Al(), u = Ae(n);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Oe(t, u, n), l !== null && (gl(l, t, n), bu(l, t, n));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Al(), n = Ae(e);
      n.tag = 2, l != null && (n.callback = l), l = Oe(t, n, e), l !== null && (gl(l, t, e), bu(l, t, e));
    }
  };
  function $s(t, l, e, n, u, a, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, a, i) : l.prototype && l.prototype.isPureReactComponent ? !ru(e, n) || !ru(u, a) : !0;
  }
  function Fs(t, l, e, n) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, n), l.state !== t && xc.enqueueReplaceState(l, l.state, null);
  }
  function nn(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var n in l)
        n !== "ref" && (e[n] = l[n]);
    }
    if (t = t.defaultProps) {
      e === l && (e = M({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function ks(t) {
    ya(t);
  }
  function Is(t) {
    console.error(t);
  }
  function Ps(t) {
    ya(t);
  }
  function Ya(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function tr(t, l, e) {
    try {
      var n = t.onCaughtError;
      n(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Rc(t, l, e) {
    return e = Ae(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Ya(t, l);
    }, e;
  }
  function lr(t) {
    return t = Ae(t), t.tag = 3, t;
  }
  function er(t, l, e, n) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var a = n.value;
      t.payload = function() {
        return u(a);
      }, t.callback = function() {
        tr(l, e, n);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      tr(l, e, n), typeof u != "function" && (He === null ? He = /* @__PURE__ */ new Set([this]) : He.add(this));
      var c = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Tm(t, l, e, n, u) {
    if (e.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = e.alternate, l !== null && Dn(
        l,
        e,
        u,
        !0
      ), e = pl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return xl === null ? $a() : e.alternate === null && Lt === 0 && (Lt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, n === Aa ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), af(t, n, u)), !1;
          case 22:
            return e.flags |= 65536, n === Aa ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : e.add(n)), af(t, n, u)), !1;
        }
        throw Error(f(435, e.tag));
      }
      return af(t, n, u), $a(), !1;
    }
    if (vt)
      return l = pl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, n !== Pi && (t = Error(f(422), { cause: n }), yu(Ul(t, e)))) : (n !== Pi && (l = Error(f(423), {
        cause: n
      }), yu(
        Ul(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, n = Ul(n, e), u = Rc(
        t.stateNode,
        n,
        u
      ), sc(t, u), Lt !== 4 && (Lt = 2)), !1;
    var a = Error(f(520), { cause: n });
    if (a = Ul(a, e), xu === null ? xu = [a] : xu.push(a), Lt !== 4 && (Lt = 2), l === null) return !0;
    n = Ul(n, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = Rc(e.stateNode, n, t), sc(e, t), !1;
        case 1:
          if (l = e.type, a = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (He === null || !He.has(a))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = lr(u), er(
              u,
              t,
              e,
              n
            ), sc(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Bc = Error(f(461)), Kt = !1;
  function nl(t, l, e, n) {
    l.child = t === null ? is(l, null, e, n) : ln(
      l,
      t.child,
      e,
      n
    );
  }
  function nr(t, l, e, n, u) {
    e = e.render;
    var a = l.ref;
    if ("ref" in n) {
      var i = {};
      for (var c in n)
        c !== "ref" && (i[c] = n[c]);
    } else i = n;
    return ke(l), n = vc(
      t,
      l,
      e,
      i,
      a,
      u
    ), c = gc(), t !== null && !Kt ? (Sc(t, l, u), ce(t, l, u)) : (vt && c && ki(l), l.flags |= 1, nl(t, l, n, u), l.child);
  }
  function ur(t, l, e, n, u) {
    if (t === null) {
      var a = e.type;
      return typeof a == "function" && !Wi(a) && a.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = a, ar(
        t,
        l,
        a,
        n,
        u
      )) : (t = Sa(
        e.type,
        null,
        n,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (a = t.child, !Zc(t, u)) {
      var i = a.memoizedProps;
      if (e = e.compare, e = e !== null ? e : ru, e(i, n) && t.ref === l.ref)
        return ce(t, l, u);
    }
    return l.flags |= 1, t = le(a, n), t.ref = l.ref, t.return = l, l.child = t;
  }
  function ar(t, l, e, n, u) {
    if (t !== null) {
      var a = t.memoizedProps;
      if (ru(a, n) && t.ref === l.ref)
        if (Kt = !1, l.pendingProps = n = a, Zc(t, u))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return l.lanes = t.lanes, ce(t, l, u);
    }
    return qc(
      t,
      l,
      e,
      n,
      u
    );
  }
  function ir(t, l, e, n) {
    var u = n.children, a = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = a !== null ? a.baseLanes | e : e, t !== null) {
          for (n = l.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          n = u & ~a;
        } else n = 0, l.child = null;
        return cr(
          t,
          l,
          a,
          e,
          n
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && za(
          l,
          a !== null ? a.cachePool : null
        ), a !== null ? os(l, a) : dc(), ss(l);
      else
        return n = l.lanes = 536870912, cr(
          t,
          l,
          a !== null ? a.baseLanes | e : e,
          e,
          n
        );
    } else
      a !== null ? (za(l, a.cachePool), os(l, a), _e(), l.memoizedState = null) : (t !== null && za(l, null), dc(), _e());
    return nl(t, l, u, e), l.child;
  }
  function Mu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function cr(t, l, e, n, u) {
    var a = ic();
    return a = a === null ? null : { parent: Zt._currentValue, pool: a }, l.memoizedState = {
      baseLanes: e,
      cachePool: a
    }, t !== null && za(l, null), dc(), ss(l), t !== null && Dn(t, l, n, !0), l.childLanes = u, null;
  }
  function ja(t, l) {
    return l = La(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function fr(t, l, e) {
    return ln(l, t.child, null, e), t = ja(l, l.pendingProps), t.flags |= 2, El(l), l.memoizedState = null, t;
  }
  function Am(t, l, e) {
    var n = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (vt) {
        if (n.mode === "hidden")
          return t = ja(l, n), l.lanes = 536870912, Mu(null, t);
        if (yc(l), (t = Rt) ? (t = pd(
          t,
          Cl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: be !== null ? { id: Jl, overflow: wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ko(t), e.return = l, l.child = e, ll = l, Rt = null)) : t = null, t === null) throw Ee(l);
        return l.lanes = 536870912, null;
      }
      return ja(l, n);
    }
    var a = t.memoizedState;
    if (a !== null) {
      var i = a.dehydrated;
      if (yc(l), u)
        if (l.flags & 256)
          l.flags &= -257, l = fr(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(f(558));
      else if (Kt || Dn(t, l, e, !1), u = (e & t.childLanes) !== 0, Kt || u) {
        if (n = xt, n !== null && (i = kf(n, e), i !== 0 && i !== a.retryLane))
          throw a.retryLane = i, we(t, i), gl(n, t, i), Bc;
        $a(), l = fr(
          t,
          l,
          e
        );
      } else
        t = a.treeContext, Rt = Rl(i.nextSibling), ll = l, vt = !0, pe = null, Cl = !1, t !== null && Wo(l, t), l = ja(l, n), l.flags |= 4096;
      return l;
    }
    return t = le(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ga(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(f(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function qc(t, l, e, n, u) {
    return ke(l), e = vc(
      t,
      l,
      e,
      n,
      void 0,
      u
    ), n = gc(), t !== null && !Kt ? (Sc(t, l, u), ce(t, l, u)) : (vt && n && ki(l), l.flags |= 1, nl(t, l, e, u), l.child);
  }
  function or(t, l, e, n, u, a) {
    return ke(l), l.updateQueue = null, e = ds(
      l,
      n,
      e,
      u
    ), rs(t), n = gc(), t !== null && !Kt ? (Sc(t, l, a), ce(t, l, a)) : (vt && n && ki(l), l.flags |= 1, nl(t, l, e, a), l.child);
  }
  function sr(t, l, e, n, u) {
    if (ke(l), l.stateNode === null) {
      var a = An, i = e.contextType;
      typeof i == "object" && i !== null && (a = el(i)), a = new e(n, a), l.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = xc, l.stateNode = a, a._reactInternals = l, a = l.stateNode, a.props = n, a.state = l.memoizedState, a.refs = {}, fc(l), i = e.contextType, a.context = typeof i == "object" && i !== null ? el(i) : An, a.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Cc(
        l,
        e,
        i,
        n
      ), a.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (i = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), i !== a.state && xc.enqueueReplaceState(a, a.state, null), Eu(l, n, a, u), pu(), a.state = l.memoizedState), typeof a.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (t === null) {
      a = l.stateNode;
      var c = l.memoizedProps, s = nn(e, c);
      a.props = s;
      var p = a.context, D = e.contextType;
      i = An, typeof D == "object" && D !== null && (i = el(D));
      var H = e.getDerivedStateFromProps;
      D = typeof H == "function" || typeof a.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, D || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c || p !== i) && Fs(
        l,
        a,
        n,
        i
      ), Te = !1;
      var z = l.memoizedState;
      a.state = z, Eu(l, n, a, u), pu(), p = l.memoizedState, c || z !== p || Te ? (typeof H == "function" && (Cc(
        l,
        e,
        H,
        n
      ), p = l.memoizedState), (s = Te || $s(
        l,
        e,
        s,
        n,
        z,
        p,
        i
      )) ? (D || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = p), a.props = n, a.state = p, a.context = i, n = s) : (typeof a.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      a = l.stateNode, oc(t, l), i = l.memoizedProps, D = nn(e, i), a.props = D, H = l.pendingProps, z = a.context, p = e.contextType, s = An, typeof p == "object" && p !== null && (s = el(p)), c = e.getDerivedStateFromProps, (p = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== H || z !== s) && Fs(
        l,
        a,
        n,
        s
      ), Te = !1, z = l.memoizedState, a.state = z, Eu(l, n, a, u), pu();
      var A = l.memoizedState;
      i !== H || z !== A || Te || t !== null && t.dependencies !== null && pa(t.dependencies) ? (typeof c == "function" && (Cc(
        l,
        e,
        c,
        n
      ), A = l.memoizedState), (D = Te || $s(
        l,
        e,
        D,
        n,
        z,
        A,
        s
      ) || t !== null && t.dependencies !== null && pa(t.dependencies)) ? (p || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, A, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(
        n,
        A,
        s
      )), typeof a.componentDidUpdate == "function" && (l.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (l.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = A), a.props = n, a.state = A, a.context = s, n = D) : (typeof a.componentDidUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (l.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && z === t.memoizedState || (l.flags |= 1024), n = !1);
    }
    return a = n, Ga(t, l), n = (l.flags & 128) !== 0, a || n ? (a = l.stateNode, e = n && typeof e.getDerivedStateFromError != "function" ? null : a.render(), l.flags |= 1, t !== null && n ? (l.child = ln(
      l,
      t.child,
      null,
      u
    ), l.child = ln(
      l,
      null,
      e,
      u
    )) : nl(t, l, e, u), l.memoizedState = a.state, t = l.child) : t = ce(
      t,
      l,
      u
    ), t;
  }
  function rr(t, l, e, n) {
    return $e(), l.flags |= 256, nl(t, l, e, n), l.child;
  }
  var Yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function jc(t) {
    return { baseLanes: t, cachePool: ts() };
  }
  function Gc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Tl), t;
  }
  function dr(t, l, e) {
    var n = l.pendingProps, u = !1, a = (l.flags & 128) !== 0, i;
    if ((i = a) || (i = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (vt) {
        if (u ? Me(l) : _e(), (t = Rt) ? (t = pd(
          t,
          Cl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: be !== null ? { id: Jl, overflow: wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ko(t), e.return = l, l.child = e, ll = l, Rt = null)) : t = null, t === null) throw Ee(l);
        return zf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var c = n.children;
      return n = n.fallback, u ? (_e(), u = l.mode, c = La(
        { mode: "hidden", children: c },
        u
      ), n = We(
        n,
        u,
        e,
        null
      ), c.return = l, n.return = l, c.sibling = n, l.child = c, n = l.child, n.memoizedState = jc(e), n.childLanes = Gc(
        t,
        i,
        e
      ), l.memoizedState = Yc, Mu(null, n)) : (Me(l), Lc(l, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (a)
        l.flags & 256 ? (Me(l), l.flags &= -257, l = Qc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (_e(), l.child = t.child, l.flags |= 128, l = null) : (_e(), c = n.fallback, u = l.mode, n = La(
          { mode: "visible", children: n.children },
          u
        ), c = We(
          c,
          u,
          e,
          null
        ), c.flags |= 2, n.return = l, c.return = l, n.sibling = c, l.child = n, ln(
          l,
          t.child,
          null,
          e
        ), n = l.child, n.memoizedState = jc(e), n.childLanes = Gc(
          t,
          i,
          e
        ), l.memoizedState = Yc, l = Mu(null, n));
      else if (Me(l), zf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var p = i.dgst;
        i = p, n = Error(f(419)), n.stack = "", n.digest = i, yu({ value: n, source: null, stack: null }), l = Qc(
          t,
          l,
          e
        );
      } else if (Kt || Dn(t, l, e, !1), i = (e & t.childLanes) !== 0, Kt || i) {
        if (i = xt, i !== null && (n = kf(i, e), n !== 0 && n !== s.retryLane))
          throw s.retryLane = n, we(t, n), gl(i, t, n), Bc;
        Ef(c) || $a(), l = Qc(
          t,
          l,
          e
        );
      } else
        Ef(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, Rt = Rl(
          c.nextSibling
        ), ll = l, vt = !0, pe = null, Cl = !1, t !== null && Wo(l, t), l = Lc(
          l,
          n.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (_e(), c = n.fallback, u = l.mode, s = t.child, p = s.sibling, n = le(s, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = s.subtreeFlags & 65011712, p !== null ? c = le(
      p,
      c
    ) : (c = We(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = l, n.return = l, n.sibling = c, l.child = n, Mu(null, n), n = l.child, c = t.child.memoizedState, c === null ? c = jc(e) : (u = c.cachePool, u !== null ? (s = Zt._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = ts(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), n.memoizedState = c, n.childLanes = Gc(
      t,
      i,
      e
    ), l.memoizedState = Yc, Mu(t.child, n)) : (Me(l), e = t.child, t = e.sibling, e = le(e, {
      mode: "visible",
      children: n.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Lc(t, l) {
    return l = La(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function La(t, l) {
    return t = bl(22, t, null, l), t.lanes = 0, t;
  }
  function Qc(t, l, e) {
    return ln(l, t.child, null, e), t = Lc(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function mr(t, l, e) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l), ec(t.return, l, e);
  }
  function Xc(t, l, e, n, u, a) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: e,
      tailMode: u,
      treeForkCount: a
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = e, i.tailMode = u, i.treeForkCount = a);
  }
  function yr(t, l, e) {
    var n = l.pendingProps, u = n.revealOrder, a = n.tail;
    n = n.children;
    var i = Qt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, L(Qt, i), nl(t, l, n, e), n = vt ? mu : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && mr(t, e, l);
        else if (t.tag === 19)
          mr(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          t = e.alternate, t !== null && Da(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), Xc(
          l,
          !1,
          u,
          e,
          a,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Da(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        Xc(
          l,
          !0,
          e,
          null,
          a,
          n
        );
        break;
      case "together":
        Xc(
          l,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function ce(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Ne |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Dn(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(f(153));
    if (l.child !== null) {
      for (t = l.child, e = le(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = le(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Zc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && pa(t)));
  }
  function Om(t, l, e) {
    switch (l.tag) {
      case 3:
        pt(l, l.stateNode.containerInfo), ze(l, Zt, t.memoizedState.cache), $e();
        break;
      case 27:
      case 5:
        kt(l);
        break;
      case 4:
        pt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ze(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, yc(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Me(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? dr(t, l, e) : (Me(l), t = ce(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        Me(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (n = (e & l.childLanes) !== 0, n || (Dn(
          t,
          l,
          e,
          !1
        ), n = (e & l.childLanes) !== 0), u) {
          if (n)
            return yr(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), L(Qt, Qt.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, ir(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        ze(l, Zt, t.memoizedState.cache);
    }
    return ce(t, l, e);
  }
  function hr(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Kt = !0;
      else {
        if (!Zc(t, e) && (l.flags & 128) === 0)
          return Kt = !1, Om(
            t,
            l,
            e
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, vt && (l.flags & 1048576) !== 0 && wo(l, mu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var n = l.pendingProps;
          if (t = Pe(l.elementType), l.type = t, typeof t == "function")
            Wi(t) ? (n = nn(t, n), l.tag = 1, l = sr(
              null,
              l,
              t,
              n,
              e
            )) : (l.tag = 0, l = qc(
              null,
              l,
              t,
              n,
              e
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === tt) {
                l.tag = 11, l = nr(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              } else if (u === X) {
                l.tag = 14, l = ur(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              }
            }
            throw l = mt(t) || t, Error(f(306, l, ""));
          }
        }
        return l;
      case 0:
        return qc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return n = l.type, u = nn(
          n,
          l.pendingProps
        ), sr(
          t,
          l,
          n,
          u,
          e
        );
      case 3:
        t: {
          if (pt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          n = l.pendingProps;
          var a = l.memoizedState;
          u = a.element, oc(t, l), Eu(l, n, null, e);
          var i = l.memoizedState;
          if (n = i.cache, ze(l, Zt, n), n !== a.cache && nc(
            l,
            [Zt],
            e,
            !0
          ), pu(), n = i.element, a.isDehydrated)
            if (a = {
              element: n,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = a, l.memoizedState = a, l.flags & 256) {
              l = rr(
                t,
                l,
                n,
                e
              );
              break t;
            } else if (n !== u) {
              u = Ul(
                Error(f(424)),
                l
              ), yu(u), l = rr(
                t,
                l,
                n,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Rt = Rl(t.firstChild), ll = l, vt = !0, pe = null, Cl = !0, e = is(
                l,
                null,
                n,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if ($e(), n === u) {
              l = ce(
                t,
                l,
                e
              );
              break t;
            }
            nl(t, l, n, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Ga(t, l), t === null ? (e = Md(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : vt || (e = l.type, t = l.pendingProps, n = ei(
          nt.current
        ).createElement(e), n[tl] = l, n[rl] = t, ul(n, e, t), It(n), l.stateNode = n) : l.memoizedState = Md(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return kt(l), t === null && vt && (n = l.stateNode = Td(
          l.type,
          l.pendingProps,
          nt.current
        ), ll = l, Cl = !0, u = Rt, Be(l.type) ? (Tf = u, Rt = Rl(n.firstChild)) : Rt = u), nl(
          t,
          l,
          l.pendingProps.children,
          e
        ), Ga(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && vt && ((u = n = Rt) && (n = ly(
          n,
          l.type,
          l.pendingProps,
          Cl
        ), n !== null ? (l.stateNode = n, ll = l, Rt = Rl(n.firstChild), Cl = !1, u = !0) : u = !1), u || Ee(l)), kt(l), u = l.type, a = l.pendingProps, i = t !== null ? t.memoizedProps : null, n = a.children, Sf(u, a) ? n = null : i !== null && Sf(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = vc(
          t,
          l,
          vm,
          null,
          null,
          e
        ), Qu._currentValue = u), Ga(t, l), nl(t, l, n, e), l.child;
      case 6:
        return t === null && vt && ((t = e = Rt) && (e = ey(
          e,
          l.pendingProps,
          Cl
        ), e !== null ? (l.stateNode = e, ll = l, Rt = null, t = !0) : t = !1), t || Ee(l)), null;
      case 13:
        return dr(t, l, e);
      case 4:
        return pt(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, t === null ? l.child = ln(
          l,
          null,
          n,
          e
        ) : nl(t, l, n, e), l.child;
      case 11:
        return nr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return nl(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return nl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return nl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return n = l.pendingProps, ze(l, l.type, n.value), nl(t, l, n.children, e), l.child;
      case 9:
        return u = l.type._context, n = l.pendingProps.children, ke(l), u = el(u), n = n(u), l.flags |= 1, nl(t, l, n, e), l.child;
      case 14:
        return ur(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return ar(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return yr(t, l, e);
      case 31:
        return Am(t, l, e);
      case 22:
        return ir(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ke(l), n = el(Zt), t === null ? (u = ic(), u === null && (u = xt, a = uc(), u.pooledCache = a, a.refCount++, a !== null && (u.pooledCacheLanes |= e), u = a), l.memoizedState = { parent: n, cache: u }, fc(l), ze(l, Zt, u)) : ((t.lanes & e) !== 0 && (oc(t, l), Eu(l, null, null, e), pu()), u = t.memoizedState, a = l.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ze(l, Zt, n)) : (n = a.cache, ze(l, Zt, n), n !== u.cache && nc(
          l,
          [Zt],
          e,
          !0
        ))), nl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(f(156, l.tag));
  }
  function fe(t) {
    t.flags |= 4;
  }
  function Vc(t, l, e, n, u) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Xr()) t.flags |= 8192;
        else
          throw tn = Aa, cc;
    } else t.flags &= -16777217;
  }
  function vr(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hd(l))
      if (Xr()) t.flags |= 8192;
      else
        throw tn = Aa, cc;
  }
  function Qa(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? na() : 536870912, t.lanes |= l, Ln |= l);
  }
  function _u(t, l) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function Bt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, n = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= n, t.childLanes = e, l;
  }
  function Mm(t, l, e) {
    var n = l.pendingProps;
    switch (Ii(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Bt(l), null;
      case 1:
        return Bt(l), null;
      case 3:
        return e = l.stateNode, n = null, t !== null && (n = t.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), ue(Zt), Et(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (_n(l) ? fe(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, tc())), Bt(l), null;
      case 26:
        var u = l.type, a = l.memoizedState;
        return t === null ? (fe(l), a !== null ? (Bt(l), vr(l, a)) : (Bt(l), Vc(
          l,
          u,
          null,
          n,
          e
        ))) : a ? a !== t.memoizedState ? (fe(l), Bt(l), vr(l, a)) : (Bt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== n && fe(l), Bt(l), Vc(
          l,
          u,
          t,
          n,
          e
        )), null;
      case 27:
        if (Dt(l), e = nt.current, u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && fe(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(f(166));
            return Bt(l), null;
          }
          t = Z.current, _n(l) ? $o(l) : (t = Td(u, n, e), l.stateNode = t, fe(l));
        }
        return Bt(l), null;
      case 5:
        if (Dt(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && fe(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(f(166));
            return Bt(l), null;
          }
          if (a = Z.current, _n(l))
            $o(l);
          else {
            var i = ei(
              nt.current
            );
            switch (a) {
              case 1:
                a = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                a = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    a = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    a = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    a = i.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(
                      a.firstChild
                    );
                    break;
                  case "select":
                    a = typeof n.is == "string" ? i.createElement("select", {
                      is: n.is
                    }) : i.createElement("select"), n.multiple ? a.multiple = !0 : n.size && (a.size = n.size);
                    break;
                  default:
                    a = typeof n.is == "string" ? i.createElement(u, { is: n.is }) : i.createElement(u);
                }
            }
            a[tl] = l, a[rl] = n;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                a.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = a;
            t: switch (ul(a, u, n), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && fe(l);
          }
        }
        return Bt(l), Vc(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== n && fe(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(f(166));
          if (t = nt.current, _n(l)) {
            if (t = l.stateNode, e = l.memoizedProps, n = null, u = ll, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            t[tl] = l, t = !!(t.nodeValue === e || n !== null && n.suppressHydrationWarning === !0 || dd(t.nodeValue, e)), t || Ee(l, !0);
          } else
            t = ei(t).createTextNode(
              n
            ), t[tl] = l, l.stateNode = t;
        }
        return Bt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (n = _n(l), e !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[tl] = l;
            } else
              $e(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Bt(l), t = !1;
          } else
            e = tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (El(l), l) : (El(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Bt(l), null;
      case 13:
        if (n = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = _n(l), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(f(317));
              u[tl] = l;
            } else
              $e(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Bt(l), u = !1;
          } else
            u = tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (El(l), l) : (El(l), null);
        }
        return El(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = n !== null, t = t !== null && t.memoizedState !== null, e && (n = l.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== u && (n.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Qa(l, l.updateQueue), Bt(l), null);
      case 4:
        return Et(), t === null && mf(l.stateNode.containerInfo), Bt(l), null;
      case 10:
        return ue(l.type), Bt(l), null;
      case 19:
        if (U(Qt), n = l.memoizedState, n === null) return Bt(l), null;
        if (u = (l.flags & 128) !== 0, a = n.rendering, a === null)
          if (u) _u(n, !1);
          else {
            if (Lt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (a = Da(t), a !== null) {
                  for (l.flags |= 128, _u(n, !1), t = a.updateQueue, l.updateQueue = t, Qa(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Vo(e, t), e = e.sibling;
                  return L(
                    Qt,
                    Qt.current & 1 | 2
                  ), vt && ee(l, n.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            n.tail !== null && al() > Ja && (l.flags |= 128, u = !0, _u(n, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Da(a), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, Qa(l, t), _u(n, !0), n.tail === null && n.tailMode === "hidden" && !a.alternate && !vt)
                return Bt(l), null;
            } else
              2 * al() - n.renderingStartTime > Ja && e !== 536870912 && (l.flags |= 128, u = !0, _u(n, !1), l.lanes = 4194304);
          n.isBackwards ? (a.sibling = l.child, l.child = a) : (t = n.last, t !== null ? t.sibling = a : l.child = a, n.last = a);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = al(), t.sibling = null, e = Qt.current, L(
          Qt,
          u ? e & 1 | 2 : e & 1
        ), vt && ee(l, n.treeForkCount), t) : (Bt(l), null);
      case 22:
      case 23:
        return El(l), mc(), n = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Bt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Bt(l), e = l.updateQueue, e !== null && Qa(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== e && (l.flags |= 2048), t !== null && U(Ie), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), ue(Zt), Bt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, l.tag));
  }
  function _m(t, l) {
    switch (Ii(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return ue(Zt), Et(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Dt(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (El(l), l.alternate === null)
            throw Error(f(340));
          $e();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (El(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(f(340));
          $e();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return U(Qt), null;
      case 4:
        return Et(), null;
      case 10:
        return ue(l.type), null;
      case 22:
      case 23:
        return El(l), mc(), t !== null && U(Ie), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return ue(Zt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gr(t, l) {
    switch (Ii(l), l.tag) {
      case 3:
        ue(Zt), Et();
        break;
      case 26:
      case 27:
      case 5:
        Dt(l);
        break;
      case 4:
        Et();
        break;
      case 31:
        l.memoizedState !== null && El(l);
        break;
      case 13:
        El(l);
        break;
      case 19:
        U(Qt);
        break;
      case 10:
        ue(l.type);
        break;
      case 22:
      case 23:
        El(l), mc(), t !== null && U(Ie);
        break;
      case 24:
        ue(Zt);
    }
  }
  function Du(t, l) {
    try {
      var e = l.updateQueue, n = e !== null ? e.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            n = void 0;
            var a = e.create, i = e.inst;
            n = a(), i.destroy = n;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      Mt(l, l.return, c);
    }
  }
  function De(t, l, e) {
    try {
      var n = l.updateQueue, u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        n = a;
        do {
          if ((n.tag & t) === t) {
            var i = n.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = l;
              var s = e, p = c;
              try {
                p();
              } catch (D) {
                Mt(
                  u,
                  s,
                  D
                );
              }
            }
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (D) {
      Mt(l, l.return, D);
    }
  }
  function Sr(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        fs(l, e);
      } catch (n) {
        Mt(t, t.return, n);
      }
    }
  }
  function br(t, l, e) {
    e.props = nn(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (n) {
      Mt(t, l, n);
    }
  }
  function Uu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(n) : e.current = n;
      }
    } catch (u) {
      Mt(t, l, u);
    }
  }
  function Wl(t, l) {
    var e = t.ref, n = t.refCleanup;
    if (e !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Mt(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          Mt(t, l, u);
        }
      else e.current = null;
  }
  function pr(t) {
    var l = t.type, e = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && n.focus();
          break t;
        case "img":
          e.src ? n.src = e.src : e.srcSet && (n.srcset = e.srcSet);
      }
    } catch (u) {
      Mt(t, t.return, u);
    }
  }
  function Kc(t, l, e) {
    try {
      var n = t.stateNode;
      $m(n, t.type, e, l), n[rl] = l;
    } catch (u) {
      Mt(t, t.return, u);
    }
  }
  function Er(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Be(t.type) || t.tag === 4;
  }
  function Jc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Er(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Be(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function wc(t, l, e) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Pl));
    else if (n !== 4 && (n === 27 && Be(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (wc(t, l, e), t = t.sibling; t !== null; )
        wc(t, l, e), t = t.sibling;
  }
  function Xa(t, l, e) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (n !== 4 && (n === 27 && Be(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Xa(t, l, e), t = t.sibling; t !== null; )
        Xa(t, l, e), t = t.sibling;
  }
  function zr(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var n = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      ul(l, n, e), l[tl] = t, l[rl] = e;
    } catch (a) {
      Mt(t, t.return, a);
    }
  }
  var oe = !1, Jt = !1, Wc = !1, Tr = typeof WeakSet == "function" ? WeakSet : Set, Pt = null;
  function Dm(t, l) {
    if (t = t.containerInfo, vf = oi, t = Bo(t), Qi(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var n = e.getSelection && e.getSelection();
          if (n && n.rangeCount !== 0) {
            e = n.anchorNode;
            var u = n.anchorOffset, a = n.focusNode;
            n = n.focusOffset;
            try {
              e.nodeType, a.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, s = -1, p = 0, D = 0, H = t, z = null;
            l: for (; ; ) {
              for (var A; H !== e || u !== 0 && H.nodeType !== 3 || (c = i + u), H !== a || n !== 0 && H.nodeType !== 3 || (s = i + n), H.nodeType === 3 && (i += H.nodeValue.length), (A = H.firstChild) !== null; )
                z = H, H = A;
              for (; ; ) {
                if (H === t) break l;
                if (z === e && ++p === u && (c = i), z === a && ++D === n && (s = i), (A = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = A;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (gf = { focusedElem: t, selectionRange: e }, oi = !1, Pt = l; Pt !== null; )
      if (l = Pt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, Pt = t;
      else
        for (; Pt !== null; ) {
          switch (l = Pt, a = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  u = t[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && a !== null) {
                t = void 0, e = l, u = a.memoizedProps, a = a.memoizedState, n = e.stateNode;
                try {
                  var K = nn(
                    e.type,
                    u
                  );
                  t = n.getSnapshotBeforeUpdate(
                    K,
                    a
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (F) {
                  Mt(
                    e,
                    e.return,
                    F
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  pf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      pf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Pt = t;
            break;
          }
          Pt = l.return;
        }
  }
  function Ar(t, l, e) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        re(t, e), n & 4 && Du(5, e);
        break;
      case 1:
        if (re(t, e), n & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              Mt(e, e.return, i);
            }
          else {
            var u = nn(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              Mt(
                e,
                e.return,
                i
              );
            }
          }
        n & 64 && Sr(e), n & 512 && Uu(e, e.return);
        break;
      case 3:
        if (re(t, e), n & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            fs(t, l);
          } catch (i) {
            Mt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && n & 4 && zr(e);
      case 26:
      case 5:
        re(t, e), l === null && n & 4 && pr(e), n & 512 && Uu(e, e.return);
        break;
      case 12:
        re(t, e);
        break;
      case 31:
        re(t, e), n & 4 && _r(t, e);
        break;
      case 13:
        re(t, e), n & 4 && Dr(t, e), n & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Ym.bind(
          null,
          e
        ), ny(t, e))));
        break;
      case 22:
        if (n = e.memoizedState !== null || oe, !n) {
          l = l !== null && l.memoizedState !== null || Jt, u = oe;
          var a = Jt;
          oe = n, (Jt = l) && !a ? de(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : re(t, e), oe = u, Jt = a;
        }
        break;
      case 30:
        break;
      default:
        re(t, e);
    }
  }
  function Or(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Or(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Ai(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Yt = null, ml = !1;
  function se(t, l, e) {
    for (e = e.child; e !== null; )
      Mr(t, l, e), e = e.sibling;
  }
  function Mr(t, l, e) {
    if (cl && typeof cl.onCommitFiberUnmount == "function")
      try {
        cl.onCommitFiberUnmount(Zl, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Jt || Wl(e, l), se(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Jt || Wl(e, l);
        var n = Yt, u = ml;
        Be(e.type) && (Yt = e.stateNode, ml = !1), se(
          t,
          l,
          e
        ), ju(e.stateNode), Yt = n, ml = u;
        break;
      case 5:
        Jt || Wl(e, l);
      case 6:
        if (n = Yt, u = ml, Yt = null, se(
          t,
          l,
          e
        ), Yt = n, ml = u, Yt !== null)
          if (ml)
            try {
              (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(e.stateNode);
            } catch (a) {
              Mt(
                e,
                l,
                a
              );
            }
          else
            try {
              Yt.removeChild(e.stateNode);
            } catch (a) {
              Mt(
                e,
                l,
                a
              );
            }
        break;
      case 18:
        Yt !== null && (ml ? (t = Yt, Sd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Wn(t)) : Sd(Yt, e.stateNode));
        break;
      case 4:
        n = Yt, u = ml, Yt = e.stateNode.containerInfo, ml = !0, se(
          t,
          l,
          e
        ), Yt = n, ml = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        De(2, e, l), Jt || De(4, e, l), se(
          t,
          l,
          e
        );
        break;
      case 1:
        Jt || (Wl(e, l), n = e.stateNode, typeof n.componentWillUnmount == "function" && br(
          e,
          l,
          n
        )), se(
          t,
          l,
          e
        );
        break;
      case 21:
        se(
          t,
          l,
          e
        );
        break;
      case 22:
        Jt = (n = Jt) || e.memoizedState !== null, se(
          t,
          l,
          e
        ), Jt = n;
        break;
      default:
        se(
          t,
          l,
          e
        );
    }
  }
  function _r(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Wn(t);
      } catch (e) {
        Mt(l, l.return, e);
      }
    }
  }
  function Dr(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Wn(t);
      } catch (e) {
        Mt(l, l.return, e);
      }
  }
  function Um(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Tr()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Tr()), l;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Za(t, l) {
    var e = Um(t);
    l.forEach(function(n) {
      if (!e.has(n)) {
        e.add(n);
        var u = jm.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function yl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var u = e[n], a = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Be(c.type)) {
                Yt = c.stateNode, ml = !1;
                break t;
              }
              break;
            case 5:
              Yt = c.stateNode, ml = !1;
              break t;
            case 3:
            case 4:
              Yt = c.stateNode.containerInfo, ml = !0;
              break t;
          }
          c = c.return;
        }
        if (Yt === null) throw Error(f(160));
        Mr(a, i, u), Yt = null, ml = !1, a = u.alternate, a !== null && (a.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Ur(l, t), l = l.sibling;
  }
  var Gl = null;
  function Ur(t, l) {
    var e = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yl(l, t), hl(t), n & 4 && (De(3, t, t.return), Du(3, t), De(5, t, t.return));
        break;
      case 1:
        yl(l, t), hl(t), n & 512 && (Jt || e === null || Wl(e, e.return)), n & 64 && oe && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? n : e.concat(n))));
        break;
      case 26:
        var u = Gl;
        if (yl(l, t), hl(t), n & 512 && (Jt || e === null || Wl(e, e.return)), n & 4) {
          var a = e !== null ? e.memoizedState : null;
          if (n = t.memoizedState, e === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (n) {
                    case "title":
                      a = u.getElementsByTagName("title")[0], (!a || a[eu] || a[tl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(n), u.head.insertBefore(
                        a,
                        u.querySelector("head > title")
                      )), ul(a, n, e), a[tl] = t, It(a), n = a;
                      break t;
                    case "link":
                      var i = Ud(
                        "link",
                        "href",
                        u
                      ).get(n + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (a = i[c], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      a = u.createElement(n), ul(a, n, e), u.head.appendChild(a);
                      break;
                    case "meta":
                      if (i = Ud(
                        "meta",
                        "content",
                        u
                      ).get(n + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (a = i[c], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      a = u.createElement(n), ul(a, n, e), u.head.appendChild(a);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  a[tl] = t, It(a), n = a;
                }
                t.stateNode = n;
              } else
                Nd(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Dd(
                u,
                n,
                t.memoizedProps
              );
          else
            a !== n ? (a === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : a.count--, n === null ? Nd(
              u,
              t.type,
              t.stateNode
            ) : Dd(
              u,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && Kc(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        yl(l, t), hl(t), n & 512 && (Jt || e === null || Wl(e, e.return)), e !== null && n & 4 && Kc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (yl(l, t), hl(t), n & 512 && (Jt || e === null || Wl(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            gn(u, "");
          } catch (K) {
            Mt(t, t.return, K);
          }
        }
        n & 4 && t.stateNode != null && (u = t.memoizedProps, Kc(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), n & 1024 && (Wc = !0);
        break;
      case 6:
        if (yl(l, t), hl(t), n & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          n = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = n;
          } catch (K) {
            Mt(t, t.return, K);
          }
        }
        break;
      case 3:
        if (ai = null, u = Gl, Gl = ni(l.containerInfo), yl(l, t), Gl = u, hl(t), n & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Wn(l.containerInfo);
          } catch (K) {
            Mt(t, t.return, K);
          }
        Wc && (Wc = !1, Nr(t));
        break;
      case 4:
        n = Gl, Gl = ni(
          t.stateNode.containerInfo
        ), yl(l, t), hl(t), Gl = n;
        break;
      case 12:
        yl(l, t), hl(t);
        break;
      case 31:
        yl(l, t), hl(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Za(t, n)));
        break;
      case 13:
        yl(l, t), hl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ka = al()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Za(t, n)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, p = oe, D = Jt;
        if (oe = p || u, Jt = D || s, yl(l, t), Jt = D, oe = p, hl(t), n & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || s || oe || Jt || un(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (a = s.stateNode, u)
                    i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var H = s.memoizedProps.style, z = H != null && H.hasOwnProperty("display") ? H.display : null;
                    c.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (K) {
                  Mt(s, s.return, K);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (K) {
                  Mt(s, s.return, K);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                s = l;
                try {
                  var A = s.stateNode;
                  u ? bd(A, !0) : bd(s.stateNode, !1);
                } catch (K) {
                  Mt(s, s.return, K);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (e = n.retryQueue, e !== null && (n.retryQueue = null, Za(t, e))));
        break;
      case 19:
        yl(l, t), hl(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Za(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yl(l, t), hl(t);
    }
  }
  function hl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, n = t.return; n !== null; ) {
          if (Er(n)) {
            e = n;
            break;
          }
          n = n.return;
        }
        if (e == null) throw Error(f(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, a = Jc(t);
            Xa(t, a, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (gn(i, ""), e.flags &= -33);
            var c = Jc(t);
            Xa(t, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, p = Jc(t);
            wc(
              t,
              p,
              s
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        Mt(t, t.return, D);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Nr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Nr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function re(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Ar(t, l.alternate, l), l = l.sibling;
  }
  function un(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          De(4, l, l.return), un(l);
          break;
        case 1:
          Wl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && br(
            l,
            l.return,
            e
          ), un(l);
          break;
        case 27:
          ju(l.stateNode);
        case 26:
        case 5:
          Wl(l, l.return), un(l);
          break;
        case 22:
          l.memoizedState === null && un(l);
          break;
        case 30:
          un(l);
          break;
        default:
          un(l);
      }
      t = t.sibling;
    }
  }
  function de(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var n = l.alternate, u = t, a = l, i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          de(
            u,
            a,
            e
          ), Du(4, a);
          break;
        case 1:
          if (de(
            u,
            a,
            e
          ), n = a, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (p) {
              Mt(n, n.return, p);
            }
          if (n = a, u = n.updateQueue, u !== null) {
            var c = n.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  cs(s[u], c);
            } catch (p) {
              Mt(n, n.return, p);
            }
          }
          e && i & 64 && Sr(a), Uu(a, a.return);
          break;
        case 27:
          zr(a);
        case 26:
        case 5:
          de(
            u,
            a,
            e
          ), e && n === null && i & 4 && pr(a), Uu(a, a.return);
          break;
        case 12:
          de(
            u,
            a,
            e
          );
          break;
        case 31:
          de(
            u,
            a,
            e
          ), e && i & 4 && _r(u, a);
          break;
        case 13:
          de(
            u,
            a,
            e
          ), e && i & 4 && Dr(u, a);
          break;
        case 22:
          a.memoizedState === null && de(
            u,
            a,
            e
          ), Uu(a, a.return);
          break;
        case 30:
          break;
        default:
          de(
            u,
            a,
            e
          );
      }
      l = l.sibling;
    }
  }
  function $c(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && hu(e));
  }
  function Fc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t));
  }
  function Ll(t, l, e, n) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Hr(
          t,
          l,
          e,
          n
        ), l = l.sibling;
  }
  function Hr(t, l, e, n) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ll(
          t,
          l,
          e,
          n
        ), u & 2048 && Du(9, l);
        break;
      case 1:
        Ll(
          t,
          l,
          e,
          n
        );
        break;
      case 3:
        Ll(
          t,
          l,
          e,
          n
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t)));
        break;
      case 12:
        if (u & 2048) {
          Ll(
            t,
            l,
            e,
            n
          ), t = l.stateNode;
          try {
            var a = l.memoizedProps, i = a.id, c = a.onPostCommit;
            typeof c == "function" && c(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (s) {
            Mt(l, l.return, s);
          }
        } else
          Ll(
            t,
            l,
            e,
            n
          );
        break;
      case 31:
        Ll(
          t,
          l,
          e,
          n
        );
        break;
      case 13:
        Ll(
          t,
          l,
          e,
          n
        );
        break;
      case 23:
        break;
      case 22:
        a = l.stateNode, i = l.alternate, l.memoizedState !== null ? a._visibility & 2 ? Ll(
          t,
          l,
          e,
          n
        ) : Nu(t, l) : a._visibility & 2 ? Ll(
          t,
          l,
          e,
          n
        ) : (a._visibility |= 2, Yn(
          t,
          l,
          e,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && $c(i, l);
        break;
      case 24:
        Ll(
          t,
          l,
          e,
          n
        ), u & 2048 && Fc(l.alternate, l);
        break;
      default:
        Ll(
          t,
          l,
          e,
          n
        );
    }
  }
  function Yn(t, l, e, n, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var a = t, i = l, c = e, s = n, p = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Yn(
            a,
            i,
            c,
            s,
            u
          ), Du(8, i);
          break;
        case 23:
          break;
        case 22:
          var D = i.stateNode;
          i.memoizedState !== null ? D._visibility & 2 ? Yn(
            a,
            i,
            c,
            s,
            u
          ) : Nu(
            a,
            i
          ) : (D._visibility |= 2, Yn(
            a,
            i,
            c,
            s,
            u
          )), u && p & 2048 && $c(
            i.alternate,
            i
          );
          break;
        case 24:
          Yn(
            a,
            i,
            c,
            s,
            u
          ), u && p & 2048 && Fc(i.alternate, i);
          break;
        default:
          Yn(
            a,
            i,
            c,
            s,
            u
          );
      }
      l = l.sibling;
    }
  }
  function Nu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, n = l, u = n.flags;
        switch (n.tag) {
          case 22:
            Nu(e, n), u & 2048 && $c(
              n.alternate,
              n
            );
            break;
          case 24:
            Nu(e, n), u & 2048 && Fc(n.alternate, n);
            break;
          default:
            Nu(e, n);
        }
        l = l.sibling;
      }
  }
  var Hu = 8192;
  function jn(t, l, e) {
    if (t.subtreeFlags & Hu)
      for (t = t.child; t !== null; )
        Cr(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Cr(t, l, e) {
    switch (t.tag) {
      case 26:
        jn(
          t,
          l,
          e
        ), t.flags & Hu && t.memoizedState !== null && hy(
          e,
          Gl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        jn(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var n = Gl;
        Gl = ni(t.stateNode.containerInfo), jn(
          t,
          l,
          e
        ), Gl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Hu, Hu = 16777216, jn(
          t,
          l,
          e
        ), Hu = n) : jn(
          t,
          l,
          e
        ));
        break;
      default:
        jn(
          t,
          l,
          e
        );
    }
  }
  function xr(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Cu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Pt = n, Br(
            n,
            t
          );
        }
      xr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Rr(t), t = t.sibling;
  }
  function Rr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Cu(t), t.flags & 2048 && De(9, t, t.return);
        break;
      case 3:
        Cu(t);
        break;
      case 12:
        Cu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Va(t)) : Cu(t);
        break;
      default:
        Cu(t);
    }
  }
  function Va(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Pt = n, Br(
            n,
            t
          );
        }
      xr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          De(8, l, l.return), Va(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Va(l));
          break;
        default:
          Va(l);
      }
      t = t.sibling;
    }
  }
  function Br(t, l) {
    for (; Pt !== null; ) {
      var e = Pt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          De(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var n = e.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          hu(e.memoizedState.cache);
      }
      if (n = e.child, n !== null) n.return = e, Pt = n;
      else
        t: for (e = t; Pt !== null; ) {
          n = Pt;
          var u = n.sibling, a = n.return;
          if (Or(n), n === e) {
            Pt = null;
            break t;
          }
          if (u !== null) {
            u.return = a, Pt = u;
            break t;
          }
          Pt = a;
        }
    }
  }
  var Nm = {
    getCacheForType: function(t) {
      var l = el(Zt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return el(Zt).controller.signal;
    }
  }, Hm = typeof WeakMap == "function" ? WeakMap : Map, zt = 0, xt = null, rt = null, yt = 0, Ot = 0, zl = null, Ue = !1, Gn = !1, kc = !1, me = 0, Lt = 0, Ne = 0, an = 0, Ic = 0, Tl = 0, Ln = 0, xu = null, vl = null, Pc = !1, Ka = 0, qr = 0, Ja = 1 / 0, wa = null, He = null, $t = 0, Ce = null, Qn = null, ye = 0, tf = 0, lf = null, Yr = null, Ru = 0, ef = null;
  function Al() {
    return (zt & 2) !== 0 && yt !== 0 ? yt & -yt : O.T !== null ? of() : If();
  }
  function jr() {
    if (Tl === 0)
      if ((yt & 536870912) === 0 || vt) {
        var t = Qe;
        Qe <<= 1, (Qe & 3932160) === 0 && (Qe = 262144), Tl = t;
      } else Tl = 536870912;
    return t = pl.current, t !== null && (t.flags |= 32), Tl;
  }
  function gl(t, l, e) {
    (t === xt && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (Xn(t, 0), xe(
      t,
      yt,
      Tl,
      !1
    )), lu(t, e), ((zt & 2) === 0 || t !== xt) && (t === xt && ((zt & 2) === 0 && (an |= e), Lt === 4 && xe(
      t,
      yt,
      Tl,
      !1
    )), $l(t));
  }
  function Gr(t, l, e) {
    if ((zt & 6) !== 0) throw Error(f(327));
    var n = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || ve(t, l), u = n ? Rm(t, l) : uf(t, l, !0), a = n;
    do {
      if (u === 0) {
        Gn && !n && xe(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, a && !Cm(e)) {
          u = uf(t, l, !1), a = !1;
          continue;
        }
        if (u === 2) {
          if (a = l, t.errorRecoveryDisabledLanes & a)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = xu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Xn(c, i).flags |= 256), i = uf(
                c,
                i,
                !1
              ), i !== 2) {
                if (kc && !s) {
                  c.errorRecoveryDisabledLanes |= a, an |= a, u = 4;
                  break t;
                }
                a = vl, vl = u, a !== null && (vl === null ? vl = a : vl.push.apply(
                  vl,
                  a
                ));
              }
              u = i;
            }
            if (a = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Xn(t, 0), xe(t, l, 0, !0);
          break;
        }
        t: {
          switch (n = t, a = u, a) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              xe(
                n,
                l,
                Tl,
                !Ue
              );
              break t;
            case 2:
              vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((l & 62914560) === l && (u = Ka + 300 - al(), 10 < u)) {
            if (xe(
              n,
              l,
              Tl,
              !Ue
            ), sn(n, 0, !0) !== 0) break t;
            ye = l, n.timeoutHandle = vd(
              Lr.bind(
                null,
                n,
                e,
                vl,
                wa,
                Pc,
                l,
                Tl,
                an,
                Ln,
                Ue,
                a,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          Lr(
            n,
            e,
            vl,
            wa,
            Pc,
            l,
            Tl,
            an,
            Ln,
            Ue,
            a,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $l(t);
  }
  function Lr(t, l, e, n, u, a, i, c, s, p, D, H, z, A) {
    if (t.timeoutHandle = -1, H = l.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Pl
      }, Cr(
        l,
        a,
        H
      );
      var K = (a & 62914560) === a ? Ka - al() : (a & 4194048) === a ? qr - al() : 0;
      if (K = vy(
        H,
        K
      ), K !== null) {
        ye = a, t.cancelPendingCommit = K(
          Wr.bind(
            null,
            t,
            l,
            a,
            e,
            n,
            u,
            i,
            c,
            s,
            D,
            H,
            null,
            z,
            A
          )
        ), xe(t, a, i, !p);
        return;
      }
    }
    Wr(
      t,
      l,
      a,
      e,
      n,
      u,
      i,
      c,
      s
    );
  }
  function Cm(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var n = 0; n < e.length; n++) {
          var u = e[n], a = u.getSnapshot;
          u = u.value;
          try {
            if (!Sl(a(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function xe(t, l, e, n) {
    l &= ~Ic, l &= ~an, t.suspendedLanes |= l, t.pingedLanes &= ~l, n && (t.warmLanes |= l), n = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var a = 31 - fl(u), i = 1 << a;
      n[a] = -1, u &= ~i;
    }
    e !== 0 && $f(t, e, l);
  }
  function Wa() {
    return (zt & 6) === 0 ? (Bu(0), !1) : !0;
  }
  function nf() {
    if (rt !== null) {
      if (Ot === 0)
        var t = rt.return;
      else
        t = rt, ne = Fe = null, bc(t), Cn = null, gu = 0, t = rt;
      for (; t !== null; )
        gr(t.alternate, t), t = t.return;
      rt = null;
    }
  }
  function Xn(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, Im(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ye = 0, nf(), xt = t, rt = e = le(t.current, null), yt = l, Ot = 0, zl = null, Ue = !1, Gn = ve(t, l), kc = !1, Ln = Tl = Ic = an = Ne = Lt = 0, vl = xu = null, Pc = !1, (l & 8) !== 0 && (l |= l & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= l; 0 < n; ) {
        var u = 31 - fl(n), a = 1 << u;
        l |= t[u], n &= ~a;
      }
    return me = l, ha(), e;
  }
  function Qr(t, l) {
    ut = null, O.H = Ou, l === Hn || l === Ta ? (l = ns(), Ot = 3) : l === cc ? (l = ns(), Ot = 4) : Ot = l === Bc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, zl = l, rt === null && (Lt = 1, Ya(
      t,
      Ul(l, t.current)
    ));
  }
  function Xr() {
    var t = pl.current;
    return t === null ? !0 : (yt & 4194048) === yt ? xl === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? t === xl : !1;
  }
  function Zr() {
    var t = O.H;
    return O.H = Ou, t === null ? Ou : t;
  }
  function Vr() {
    var t = O.A;
    return O.A = Nm, t;
  }
  function $a() {
    Lt = 4, Ue || (yt & 4194048) !== yt && pl.current !== null || (Gn = !0), (Ne & 134217727) === 0 && (an & 134217727) === 0 || xt === null || xe(
      xt,
      yt,
      Tl,
      !1
    );
  }
  function uf(t, l, e) {
    var n = zt;
    zt |= 2;
    var u = Zr(), a = Vr();
    (xt !== t || yt !== l) && (wa = null, Xn(t, l)), l = !1;
    var i = Lt;
    t: do
      try {
        if (Ot !== 0 && rt !== null) {
          var c = rt, s = zl;
          switch (Ot) {
            case 8:
              nf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pl.current === null && (l = !0);
              var p = Ot;
              if (Ot = 0, zl = null, Zn(t, c, s, p), e && Gn) {
                i = 0;
                break t;
              }
              break;
            default:
              p = Ot, Ot = 0, zl = null, Zn(t, c, s, p);
          }
        }
        xm(), i = Lt;
        break;
      } catch (D) {
        Qr(t, D);
      }
    while (!0);
    return l && t.shellSuspendCounter++, ne = Fe = null, zt = n, O.H = u, O.A = a, rt === null && (xt = null, yt = 0, ha()), i;
  }
  function xm() {
    for (; rt !== null; ) Kr(rt);
  }
  function Rm(t, l) {
    var e = zt;
    zt |= 2;
    var n = Zr(), u = Vr();
    xt !== t || yt !== l ? (wa = null, Ja = al() + 500, Xn(t, l)) : Gn = ve(
      t,
      l
    );
    t: do
      try {
        if (Ot !== 0 && rt !== null) {
          l = rt;
          var a = zl;
          l: switch (Ot) {
            case 1:
              Ot = 0, zl = null, Zn(t, l, a, 1);
              break;
            case 2:
            case 9:
              if (ls(a)) {
                Ot = 0, zl = null, Jr(l);
                break;
              }
              l = function() {
                Ot !== 2 && Ot !== 9 || xt !== t || (Ot = 7), $l(t);
              }, a.then(l, l);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              ls(a) ? (Ot = 0, zl = null, Jr(l)) : (Ot = 0, zl = null, Zn(t, l, a, 7));
              break;
            case 5:
              var i = null;
              switch (rt.tag) {
                case 26:
                  i = rt.memoizedState;
                case 5:
                case 27:
                  var c = rt;
                  if (i ? Hd(i) : c.stateNode.complete) {
                    Ot = 0, zl = null;
                    var s = c.sibling;
                    if (s !== null) rt = s;
                    else {
                      var p = c.return;
                      p !== null ? (rt = p, Fa(p)) : rt = null;
                    }
                    break l;
                  }
              }
              Ot = 0, zl = null, Zn(t, l, a, 5);
              break;
            case 6:
              Ot = 0, zl = null, Zn(t, l, a, 6);
              break;
            case 8:
              nf(), Lt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Bm();
        break;
      } catch (D) {
        Qr(t, D);
      }
    while (!0);
    return ne = Fe = null, O.H = n, O.A = u, zt = e, rt !== null ? 0 : (xt = null, yt = 0, ha(), Lt);
  }
  function Bm() {
    for (; rt !== null && !$n(); )
      Kr(rt);
  }
  function Kr(t) {
    var l = hr(t.alternate, t, me);
    t.memoizedProps = t.pendingProps, l === null ? Fa(t) : rt = l;
  }
  function Jr(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = or(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          yt
        );
        break;
      case 11:
        l = or(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          yt
        );
        break;
      case 5:
        bc(l);
      default:
        gr(e, l), l = rt = Vo(l, me), l = hr(e, l, me);
    }
    t.memoizedProps = t.pendingProps, l === null ? Fa(t) : rt = l;
  }
  function Zn(t, l, e, n) {
    ne = Fe = null, bc(l), Cn = null, gu = 0;
    var u = l.return;
    try {
      if (Tm(
        t,
        u,
        l,
        e,
        yt
      )) {
        Lt = 1, Ya(
          t,
          Ul(e, t.current)
        ), rt = null;
        return;
      }
    } catch (a) {
      if (u !== null) throw rt = u, a;
      Lt = 1, Ya(
        t,
        Ul(e, t.current)
      ), rt = null;
      return;
    }
    l.flags & 32768 ? (vt || n === 1 ? t = !0 : Gn || (yt & 536870912) !== 0 ? t = !1 : (Ue = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = pl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), wr(l, t)) : Fa(l);
  }
  function Fa(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        wr(
          l,
          Ue
        );
        return;
      }
      t = l.return;
      var e = Mm(
        l.alternate,
        l,
        me
      );
      if (e !== null) {
        rt = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        rt = l;
        return;
      }
      rt = l = t;
    } while (l !== null);
    Lt === 0 && (Lt = 5);
  }
  function wr(t, l) {
    do {
      var e = _m(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, rt = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        rt = t;
        return;
      }
      rt = t = e;
    } while (t !== null);
    Lt = 6, rt = null;
  }
  function Wr(t, l, e, n, u, a, i, c, s) {
    t.cancelPendingCommit = null;
    do
      ka();
    while ($t !== 0);
    if ((zt & 6) !== 0) throw Error(f(327));
    if (l !== null) {
      if (l === t.current) throw Error(f(177));
      if (a = l.lanes | l.childLanes, a |= Ji, y0(
        t,
        e,
        a,
        i,
        c,
        s
      ), t === xt && (rt = xt = null, yt = 0), Qn = l, Ce = t, ye = e, tf = a, lf = u, Yr = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Gm(fn, function() {
        return Pr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null, u = j.p, j.p = 2, i = zt, zt |= 4;
        try {
          Dm(t, l, e);
        } finally {
          zt = i, j.p = u, O.T = n;
        }
      }
      $t = 1, $r(), Fr(), kr();
    }
  }
  function $r() {
    if ($t === 1) {
      $t = 0;
      var t = Ce, l = Qn, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = O.T, O.T = null;
        var n = j.p;
        j.p = 2;
        var u = zt;
        zt |= 4;
        try {
          Ur(l, t);
          var a = gf, i = Bo(t.containerInfo), c = a.focusedElem, s = a.selectionRange;
          if (i !== c && c && c.ownerDocument && Ro(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && Qi(c)) {
              var p = s.start, D = s.end;
              if (D === void 0 && (D = p), "selectionStart" in c)
                c.selectionStart = p, c.selectionEnd = Math.min(
                  D,
                  c.value.length
                );
              else {
                var H = c.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var A = z.getSelection(), K = c.textContent.length, F = Math.min(s.start, K), Ct = s.end === void 0 ? F : Math.min(s.end, K);
                  !A.extend && F > Ct && (i = Ct, Ct = F, F = i);
                  var v = xo(
                    c,
                    F
                  ), m = xo(
                    c,
                    Ct
                  );
                  if (v && m && (A.rangeCount !== 1 || A.anchorNode !== v.node || A.anchorOffset !== v.offset || A.focusNode !== m.node || A.focusOffset !== m.offset)) {
                    var b = H.createRange();
                    b.setStart(v.node, v.offset), A.removeAllRanges(), F > Ct ? (A.addRange(b), A.extend(m.node, m.offset)) : (b.setEnd(m.node, m.offset), A.addRange(b));
                  }
                }
              }
            }
            for (H = [], A = c; A = A.parentNode; )
              A.nodeType === 1 && H.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < H.length; c++) {
              var N = H[c];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          oi = !!vf, gf = vf = null;
        } finally {
          zt = u, j.p = n, O.T = e;
        }
      }
      t.current = l, $t = 2;
    }
  }
  function Fr() {
    if ($t === 2) {
      $t = 0;
      var t = Ce, l = Qn, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = O.T, O.T = null;
        var n = j.p;
        j.p = 2;
        var u = zt;
        zt |= 4;
        try {
          Ar(t, l.alternate, l);
        } finally {
          zt = u, j.p = n, O.T = e;
        }
      }
      $t = 3;
    }
  }
  function kr() {
    if ($t === 4 || $t === 3) {
      $t = 0, Fn();
      var t = Ce, l = Qn, e = ye, n = Yr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? $t = 5 : ($t = 0, Qn = Ce = null, Ir(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (He = null), zi(e), l = l.stateNode, cl && typeof cl.onCommitFiberRoot == "function")
        try {
          cl.onCommitFiberRoot(
            Zl,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = O.T, u = j.p, j.p = 2, O.T = null;
        try {
          for (var a = t.onRecoverableError, i = 0; i < n.length; i++) {
            var c = n[i];
            a(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          O.T = l, j.p = u;
        }
      }
      (ye & 3) !== 0 && ka(), $l(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === ef ? Ru++ : (Ru = 0, ef = t) : Ru = 0, Bu(0);
    }
  }
  function Ir(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, hu(l)));
  }
  function ka() {
    return $r(), Fr(), kr(), Pr();
  }
  function Pr() {
    if ($t !== 5) return !1;
    var t = Ce, l = tf;
    tf = 0;
    var e = zi(ye), n = O.T, u = j.p;
    try {
      j.p = 32 > e ? 32 : e, O.T = null, e = lf, lf = null;
      var a = Ce, i = ye;
      if ($t = 0, Qn = Ce = null, ye = 0, (zt & 6) !== 0) throw Error(f(331));
      var c = zt;
      if (zt |= 4, Rr(a.current), Hr(
        a,
        a.current,
        i,
        e
      ), zt = c, Bu(0, !1), cl && typeof cl.onPostCommitFiberRoot == "function")
        try {
          cl.onPostCommitFiberRoot(Zl, a);
        } catch {
        }
      return !0;
    } finally {
      j.p = u, O.T = n, Ir(t, l);
    }
  }
  function td(t, l, e) {
    l = Ul(e, l), l = Rc(t.stateNode, l, 2), t = Oe(t, l, 2), t !== null && (lu(t, 2), $l(t));
  }
  function Mt(t, l, e) {
    if (t.tag === 3)
      td(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          td(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (He === null || !He.has(n))) {
            t = Ul(e, t), e = lr(2), n = Oe(l, e, 2), n !== null && (er(
              e,
              n,
              l,
              t
            ), lu(n, 2), $l(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function af(t, l, e) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Hm();
      var u = /* @__PURE__ */ new Set();
      n.set(l, u);
    } else
      u = n.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(l, u));
    u.has(e) || (kc = !0, u.add(e), t = qm.bind(null, t, l, e), l.then(t, t));
  }
  function qm(t, l, e) {
    var n = t.pingCache;
    n !== null && n.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, xt === t && (yt & e) === e && (Lt === 4 || Lt === 3 && (yt & 62914560) === yt && 300 > al() - Ka ? (zt & 2) === 0 && Xn(t, 0) : Ic |= e, Ln === yt && (Ln = 0)), $l(t);
  }
  function ld(t, l) {
    l === 0 && (l = na()), t = we(t, l), t !== null && (lu(t, l), $l(t));
  }
  function Ym(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), ld(t, e);
  }
  function jm(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    n !== null && n.delete(l), ld(t, e);
  }
  function Gm(t, l) {
    return Yl(t, l);
  }
  var Ia = null, Vn = null, cf = !1, Pa = !1, ff = !1, Re = 0;
  function $l(t) {
    t !== Vn && t.next === null && (Vn === null ? Ia = Vn = t : Vn = Vn.next = t), Pa = !0, cf || (cf = !0, Qm());
  }
  function Bu(t, l) {
    if (!ff && Pa) {
      ff = !0;
      do
        for (var e = !1, n = Ia; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var a = 0;
            else {
              var i = n.suspendedLanes, c = n.pingedLanes;
              a = (1 << 31 - fl(42 | t) + 1) - 1, a &= u & ~(i & ~c), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
            }
            a !== 0 && (e = !0, ad(n, a));
          } else
            a = yt, a = sn(
              n,
              n === xt ? a : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (a & 3) === 0 || ve(n, a) || (e = !0, ad(n, a));
          n = n.next;
        }
      while (e);
      ff = !1;
    }
  }
  function Lm() {
    ed();
  }
  function ed() {
    Pa = cf = !1;
    var t = 0;
    Re !== 0 && km() && (t = Re);
    for (var l = al(), e = null, n = Ia; n !== null; ) {
      var u = n.next, a = nd(n, l);
      a === 0 ? (n.next = null, e === null ? Ia = u : e.next = u, u === null && (Vn = e)) : (e = n, (t !== 0 || (a & 3) !== 0) && (Pa = !0)), n = u;
    }
    $t !== 0 && $t !== 5 || Bu(t), Re !== 0 && (Re = 0);
  }
  function nd(t, l) {
    for (var e = t.suspendedLanes, n = t.pingedLanes, u = t.expirationTimes, a = t.pendingLanes & -62914561; 0 < a; ) {
      var i = 31 - fl(a), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & n) !== 0) && (u[i] = ea(c, l)) : s <= l && (t.expiredLanes |= c), a &= ~c;
    }
    if (l = xt, e = yt, e = sn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, e === 0 || t === l && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Fl(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || ve(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (n !== null && Fl(n), zi(e)) {
        case 2:
        case 8:
          e = kn;
          break;
        case 32:
          e = fn;
          break;
        case 268435456:
          e = kl;
          break;
        default:
          e = fn;
      }
      return n = ud.bind(null, t), e = Yl(e, n), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return n !== null && n !== null && Fl(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function ud(t, l) {
    if ($t !== 0 && $t !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (ka() && t.callbackNode !== e)
      return null;
    var n = yt;
    return n = sn(
      t,
      t === xt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (Gr(t, n, l), nd(t, al()), t.callbackNode != null && t.callbackNode === e ? ud.bind(null, t) : null);
  }
  function ad(t, l) {
    if (ka()) return null;
    Gr(t, l, !0);
  }
  function Qm() {
    Pm(function() {
      (zt & 6) !== 0 ? Yl(
        ta,
        Lm
      ) : ed();
    });
  }
  function of() {
    if (Re === 0) {
      var t = Un;
      t === 0 && (t = on, on <<= 1, (on & 261888) === 0 && (on = 256)), Re = t;
    }
    return Re;
  }
  function id(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ca("" + t);
  }
  function cd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function Xm(t, l, e, n, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var a = id(
        (u[rl] || null).action
      ), i = n.submitter;
      i && (l = (l = i[rl] || null) ? id(l.formAction) : i.getAttribute("formAction"), l !== null && (a = l, i = null));
      var c = new ra(
        "action",
        "action",
        null,
        n,
        u
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Re !== 0) {
                  var s = i ? cd(u, i) : new FormData(u);
                  Dc(
                    e,
                    {
                      pending: !0,
                      data: s,
                      method: u.method,
                      action: a
                    },
                    null,
                    s
                  );
                }
              } else
                typeof a == "function" && (c.preventDefault(), s = i ? cd(u, i) : new FormData(u), Dc(
                  e,
                  {
                    pending: !0,
                    data: s,
                    method: u.method,
                    action: a
                  },
                  a,
                  s
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var sf = 0; sf < Ki.length; sf++) {
    var rf = Ki[sf], Zm = rf.toLowerCase(), Vm = rf[0].toUpperCase() + rf.slice(1);
    jl(
      Zm,
      "on" + Vm
    );
  }
  jl(jo, "onAnimationEnd"), jl(Go, "onAnimationIteration"), jl(Lo, "onAnimationStart"), jl("dblclick", "onDoubleClick"), jl("focusin", "onFocus"), jl("focusout", "onBlur"), jl(im, "onTransitionRun"), jl(cm, "onTransitionStart"), jl(fm, "onTransitionCancel"), jl(Qo, "onTransitionEnd"), hn("onMouseEnter", ["mouseout", "mouseover"]), hn("onMouseLeave", ["mouseout", "mouseover"]), hn("onPointerEnter", ["pointerout", "pointerover"]), hn("onPointerLeave", ["pointerout", "pointerover"]), Ze(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ze(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ze("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ze(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ze(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ze(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Km = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu)
  );
  function fd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var n = t[e], u = n.event;
      n = n.listeners;
      t: {
        var a = void 0;
        if (l)
          for (var i = n.length - 1; 0 <= i; i--) {
            var c = n[i], s = c.instance, p = c.currentTarget;
            if (c = c.listener, s !== a && u.isPropagationStopped())
              break t;
            a = c, u.currentTarget = p;
            try {
              a(u);
            } catch (D) {
              ya(D);
            }
            u.currentTarget = null, a = s;
          }
        else
          for (i = 0; i < n.length; i++) {
            if (c = n[i], s = c.instance, p = c.currentTarget, c = c.listener, s !== a && u.isPropagationStopped())
              break t;
            a = c, u.currentTarget = p;
            try {
              a(u);
            } catch (D) {
              ya(D);
            }
            u.currentTarget = null, a = s;
          }
      }
    }
  }
  function dt(t, l) {
    var e = l[Ti];
    e === void 0 && (e = l[Ti] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    e.has(n) || (od(l, t, 2, !1), e.add(n));
  }
  function df(t, l, e) {
    var n = 0;
    l && (n |= 4), od(
      e,
      t,
      n,
      l
    );
  }
  var ti = "_reactListening" + Math.random().toString(36).slice(2);
  function mf(t) {
    if (!t[ti]) {
      t[ti] = !0, lo.forEach(function(e) {
        e !== "selectionchange" && (Km.has(e) || df(e, !1, t), df(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[ti] || (l[ti] = !0, df("selectionchange", !1, l));
    }
  }
  function od(t, l, e, n) {
    switch (jd(l)) {
      case 2:
        var u = by;
        break;
      case 8:
        u = py;
        break;
      default:
        u = Df;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !Ci || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), n ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function yf(t, l, e, n, u) {
    var a = n;
    if ((l & 1) === 0 && (l & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var c = n.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = dn(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              n = a = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        n = n.return;
      }
    yo(function() {
      var p = a, D = Ni(e), H = [];
      t: {
        var z = Xo.get(t);
        if (z !== void 0) {
          var A = ra, K = t;
          switch (t) {
            case "keypress":
              if (oa(e) === 0) break t;
            case "keydown":
            case "keyup":
              A = j0;
              break;
            case "focusin":
              K = "focus", A = qi;
              break;
            case "focusout":
              K = "blur", A = qi;
              break;
            case "beforeblur":
            case "afterblur":
              A = qi;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = M0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Q0;
              break;
            case jo:
            case Go:
            case Lo:
              A = U0;
              break;
            case Qo:
              A = Z0;
              break;
            case "scroll":
            case "scrollend":
              A = A0;
              break;
            case "wheel":
              A = K0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = H0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = bo;
              break;
            case "toggle":
            case "beforetoggle":
              A = w0;
          }
          var F = (l & 4) !== 0, Ct = !F && (t === "scroll" || t === "scrollend"), v = F ? z !== null ? z + "Capture" : null : z;
          F = [];
          for (var m = p, b; m !== null; ) {
            var N = m;
            if (b = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || b === null || v === null || (N = uu(m, v), N != null && F.push(
              Yu(m, N, b)
            )), Ct) break;
            m = m.return;
          }
          0 < F.length && (z = new A(
            z,
            K,
            null,
            e,
            D
          ), H.push({ event: z, listeners: F }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", z && e !== Ui && (K = e.relatedTarget || e.fromElement) && (dn(K) || K[rn]))
            break t;
          if ((A || z) && (z = D.window === D ? D : (z = D.ownerDocument) ? z.defaultView || z.parentWindow : window, A ? (K = e.relatedTarget || e.toElement, A = p, K = K ? dn(K) : null, K !== null && (Ct = S(K), F = K.tag, K !== Ct || F !== 5 && F !== 27 && F !== 6) && (K = null)) : (A = null, K = p), A !== K)) {
            if (F = go, N = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (F = bo, N = "onPointerLeave", v = "onPointerEnter", m = "pointer"), Ct = A == null ? z : nu(A), b = K == null ? z : nu(K), z = new F(
              N,
              m + "leave",
              A,
              e,
              D
            ), z.target = Ct, z.relatedTarget = b, N = null, dn(D) === p && (F = new F(
              v,
              m + "enter",
              K,
              e,
              D
            ), F.target = b, F.relatedTarget = Ct, N = F), Ct = N, A && K)
              l: {
                for (F = Jm, v = A, m = K, b = 0, N = v; N; N = F(N))
                  b++;
                N = 0;
                for (var $ = m; $; $ = F($))
                  N++;
                for (; 0 < b - N; )
                  v = F(v), b--;
                for (; 0 < N - b; )
                  m = F(m), N--;
                for (; b--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    F = v;
                    break l;
                  }
                  v = F(v), m = F(m);
                }
                F = null;
              }
            else F = null;
            A !== null && sd(
              H,
              z,
              A,
              F,
              !1
            ), K !== null && Ct !== null && sd(
              H,
              Ct,
              K,
              F,
              !0
            );
          }
        }
        t: {
          if (z = p ? nu(p) : window, A = z.nodeName && z.nodeName.toLowerCase(), A === "select" || A === "input" && z.type === "file")
            var gt = _o;
          else if (Oo(z))
            if (Do)
              gt = nm;
            else {
              gt = lm;
              var J = tm;
            }
          else
            A = z.nodeName, !A || A.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? p && Di(p.elementType) && (gt = _o) : gt = em;
          if (gt && (gt = gt(t, p))) {
            Mo(
              H,
              gt,
              e,
              D
            );
            break t;
          }
          J && J(t, z, p), t === "focusout" && p && z.type === "number" && p.memoizedProps.value != null && _i(z, "number", z.value);
        }
        switch (J = p ? nu(p) : window, t) {
          case "focusin":
            (Oo(J) || J.contentEditable === "true") && (En = J, Xi = p, du = null);
            break;
          case "focusout":
            du = Xi = En = null;
            break;
          case "mousedown":
            Zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zi = !1, qo(H, e, D);
            break;
          case "selectionchange":
            if (am) break;
          case "keydown":
          case "keyup":
            qo(H, e, D);
        }
        var it;
        if (ji)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          pn ? To(t, e) && (ht = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (ht = "onCompositionStart");
        ht && (po && e.locale !== "ko" && (pn || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && pn && (it = ho()) : (Se = D, xi = "value" in Se ? Se.value : Se.textContent, pn = !0)), J = li(p, ht), 0 < J.length && (ht = new So(
          ht,
          t,
          null,
          e,
          D
        ), H.push({ event: ht, listeners: J }), it ? ht.data = it : (it = Ao(e), it !== null && (ht.data = it)))), (it = $0 ? F0(t, e) : k0(t, e)) && (ht = li(p, "onBeforeInput"), 0 < ht.length && (J = new So(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          D
        ), H.push({
          event: J,
          listeners: ht
        }), J.data = it)), Xm(
          H,
          t,
          p,
          e,
          D
        );
      }
      fd(H, l);
    });
  }
  function Yu(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function li(t, l) {
    for (var e = l + "Capture", n = []; t !== null; ) {
      var u = t, a = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || a === null || (u = uu(t, e), u != null && n.unshift(
        Yu(t, u, a)
      ), u = uu(t, l), u != null && n.push(
        Yu(t, u, a)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Jm(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sd(t, l, e, n, u) {
    for (var a = l._reactName, i = []; e !== null && e !== n; ) {
      var c = e, s = c.alternate, p = c.stateNode;
      if (c = c.tag, s !== null && s === n) break;
      c !== 5 && c !== 26 && c !== 27 || p === null || (s = p, u ? (p = uu(e, a), p != null && i.unshift(
        Yu(e, p, s)
      )) : u || (p = uu(e, a), p != null && i.push(
        Yu(e, p, s)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var wm = /\r\n?/g, Wm = /\u0000|\uFFFD/g;
  function rd(t) {
    return (typeof t == "string" ? t : "" + t).replace(wm, `
`).replace(Wm, "");
  }
  function dd(t, l) {
    return l = rd(l), rd(t) === l;
  }
  function Ht(t, l, e, n, u, a) {
    switch (e) {
      case "children":
        typeof n == "string" ? l === "body" || l === "textarea" && n === "" || gn(t, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && gn(t, "" + n);
        break;
      case "className":
        aa(t, "class", n);
        break;
      case "tabIndex":
        aa(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        aa(t, e, n);
        break;
      case "style":
        ro(t, n, a);
        break;
      case "data":
        if (l !== "object") {
          aa(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(e);
          break;
        }
        n = ca("" + n), t.setAttribute(e, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof a == "function" && (e === "formAction" ? (l !== "input" && Ht(t, l, "name", u.name, u, null), Ht(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Ht(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Ht(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Ht(t, l, "encType", u.encType, u, null), Ht(t, l, "method", u.method, u, null), Ht(t, l, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(e);
          break;
        }
        n = ca("" + n), t.setAttribute(e, n);
        break;
      case "onClick":
        n != null && (t.onclick = Pl);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (e = n.__html, e != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = ca("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, "" + n) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(e, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, n) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(e, n) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), ua(t, "popover", n);
        break;
      case "xlinkActuate":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        ua(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = z0.get(e) || e, ua(t, e, n));
    }
  }
  function hf(t, l, e, n, u, a) {
    switch (e) {
      case "style":
        ro(t, n, a);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (e = n.__html, e != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof n == "string" ? gn(t, n) : (typeof n == "number" || typeof n == "bigint") && gn(t, "" + n);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Pl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!eo.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), a = t[rl] || null, a = a != null ? a[e] : null, typeof a == "function" && t.removeEventListener(l, a, u), typeof n == "function")) {
              typeof a != "function" && a !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, n, u);
              break t;
            }
            e in t ? t[e] = n : n === !0 ? t.setAttribute(e, "") : ua(t, e, n);
          }
    }
  }
  function ul(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var n = !1, u = !1, a;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var i = e[a];
            if (i != null)
              switch (a) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, l));
                default:
                  Ht(t, l, a, i, e, null);
              }
          }
        u && Ht(t, l, "srcSet", e.srcSet, e, null), n && Ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        dt("invalid", t);
        var c = a = i = u = null, s = null, p = null;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var D = e[n];
            if (D != null)
              switch (n) {
                case "name":
                  u = D;
                  break;
                case "type":
                  i = D;
                  break;
                case "checked":
                  s = D;
                  break;
                case "defaultChecked":
                  p = D;
                  break;
                case "value":
                  a = D;
                  break;
                case "defaultValue":
                  c = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(f(137, l));
                  break;
                default:
                  Ht(t, l, n, D, e, null);
              }
          }
        co(
          t,
          a,
          c,
          s,
          p,
          i,
          u,
          !1
        );
        return;
      case "select":
        dt("invalid", t), n = i = a = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                n = c;
              default:
                Ht(t, l, u, c, e, null);
            }
        l = a, e = i, t.multiple = !!n, l != null ? vn(t, !!n, l, !1) : e != null && vn(t, !!n, e, !0);
        return;
      case "textarea":
        dt("invalid", t), a = u = n = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                a = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(f(91));
                break;
              default:
                Ht(t, l, i, c, e, null);
            }
        oo(t, n, u, a);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (n = e[s], n != null) && (s === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Ht(t, l, s, n, e, null));
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < qu.length; n++)
          dt(qu[n], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (p in e)
          if (e.hasOwnProperty(p) && (n = e[p], n != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, l));
              default:
                Ht(t, l, p, n, e, null);
            }
        return;
      default:
        if (Di(l)) {
          for (D in e)
            e.hasOwnProperty(D) && (n = e[D], n !== void 0 && hf(
              t,
              l,
              D,
              n,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (n = e[c], n != null && Ht(t, l, c, n, e, null));
  }
  function $m(t, l, e, n) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, a = null, i = null, c = null, s = null, p = null, D = null;
        for (A in e) {
          var H = e[A];
          if (e.hasOwnProperty(A) && H != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = H;
              default:
                n.hasOwnProperty(A) || Ht(t, l, A, null, n, H);
            }
        }
        for (var z in n) {
          var A = n[z];
          if (H = e[z], n.hasOwnProperty(z) && (A != null || H != null))
            switch (z) {
              case "type":
                a = A;
                break;
              case "name":
                u = A;
                break;
              case "checked":
                p = A;
                break;
              case "defaultChecked":
                D = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(f(137, l));
                break;
              default:
                A !== H && Ht(
                  t,
                  l,
                  z,
                  A,
                  n,
                  H
                );
            }
        }
        Mi(
          t,
          i,
          c,
          s,
          p,
          D,
          a,
          u
        );
        return;
      case "select":
        A = i = c = z = null;
        for (a in e)
          if (s = e[a], e.hasOwnProperty(a) && s != null)
            switch (a) {
              case "value":
                break;
              case "multiple":
                A = s;
              default:
                n.hasOwnProperty(a) || Ht(
                  t,
                  l,
                  a,
                  null,
                  n,
                  s
                );
            }
        for (u in n)
          if (a = n[u], s = e[u], n.hasOwnProperty(u) && (a != null || s != null))
            switch (u) {
              case "value":
                z = a;
                break;
              case "defaultValue":
                c = a;
                break;
              case "multiple":
                i = a;
              default:
                a !== s && Ht(
                  t,
                  l,
                  u,
                  a,
                  n,
                  s
                );
            }
        l = c, e = i, n = A, z != null ? vn(t, !!e, z, !1) : !!n != !!e && (l != null ? vn(t, !!e, l, !0) : vn(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        A = z = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !n.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, l, c, null, n, u);
            }
        for (i in n)
          if (u = n[i], a = e[i], n.hasOwnProperty(i) && (u != null || a != null))
            switch (i) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                A = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== a && Ht(t, l, i, u, n, a);
            }
        fo(t, z, A);
        return;
      case "option":
        for (var K in e)
          z = e[K], e.hasOwnProperty(K) && z != null && !n.hasOwnProperty(K) && (K === "selected" ? t.selected = !1 : Ht(
            t,
            l,
            K,
            null,
            n,
            z
          ));
        for (s in n)
          z = n[s], A = e[s], n.hasOwnProperty(s) && z !== A && (z != null || A != null) && (s === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : Ht(
            t,
            l,
            s,
            z,
            n,
            A
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in e)
          z = e[F], e.hasOwnProperty(F) && z != null && !n.hasOwnProperty(F) && Ht(t, l, F, null, n, z);
        for (p in n)
          if (z = n[p], A = e[p], n.hasOwnProperty(p) && z !== A && (z != null || A != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(f(137, l));
                break;
              default:
                Ht(
                  t,
                  l,
                  p,
                  z,
                  n,
                  A
                );
            }
        return;
      default:
        if (Di(l)) {
          for (var Ct in e)
            z = e[Ct], e.hasOwnProperty(Ct) && z !== void 0 && !n.hasOwnProperty(Ct) && hf(
              t,
              l,
              Ct,
              void 0,
              n,
              z
            );
          for (D in n)
            z = n[D], A = e[D], !n.hasOwnProperty(D) || z === A || z === void 0 && A === void 0 || hf(
              t,
              l,
              D,
              z,
              n,
              A
            );
          return;
        }
    }
    for (var v in e)
      z = e[v], e.hasOwnProperty(v) && z != null && !n.hasOwnProperty(v) && Ht(t, l, v, null, n, z);
    for (H in n)
      z = n[H], A = e[H], !n.hasOwnProperty(H) || z === A || z == null && A == null || Ht(t, l, H, z, n, A);
  }
  function md(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Fm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), n = 0; n < e.length; n++) {
        var u = e[n], a = u.transferSize, i = u.initiatorType, c = u.duration;
        if (a && c && md(i)) {
          for (i = 0, c = u.responseEnd, n += 1; n < e.length; n++) {
            var s = e[n], p = s.startTime;
            if (p > c) break;
            var D = s.transferSize, H = s.initiatorType;
            D && md(H) && (s = s.responseEnd, i += D * (s < c ? 1 : (c - p) / (s - p)));
          }
          if (--n, l += 8 * (a + i) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var vf = null, gf = null;
  function ei(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function yd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Sf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var bf = null;
  function km() {
    var t = window.event;
    return t && t.type === "popstate" ? t === bf ? !1 : (bf = t, !0) : (bf = null, !1);
  }
  var vd = typeof setTimeout == "function" ? setTimeout : void 0, Im = typeof clearTimeout == "function" ? clearTimeout : void 0, gd = typeof Promise == "function" ? Promise : void 0, Pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof gd < "u" ? function(t) {
    return gd.resolve(null).then(t).catch(ty);
  } : vd;
  function ty(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Be(t) {
    return t === "head";
  }
  function Sd(t, l) {
    var e = l, n = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (n === 0) {
            t.removeChild(u), Wn(l);
            return;
          }
          n--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          n++;
        else if (e === "html")
          ju(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, ju(e);
          for (var a = e.firstChild; a; ) {
            var i = a.nextSibling, c = a.nodeName;
            a[eu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && a.rel.toLowerCase() === "stylesheet" || e.removeChild(a), a = i;
          }
        } else
          e === "body" && ju(t.ownerDocument.body);
      e = u;
    } while (e);
    Wn(l);
  }
  function bd(t, l) {
    var e = t;
    t = 0;
    do {
      var n = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), n && n.nodeType === 8)
        if (e = n.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = n;
    } while (e);
  }
  function pf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          pf(e), Ai(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function ly(t, l, e, n) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[eu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (a = t.getAttribute("rel"), a === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (a !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (a = t.getAttribute("src"), (a !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && a && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var a = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === a)
          return t;
      } else return t;
      if (t = Rl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function ey(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Rl(t.nextSibling), t === null)) return null;
    return t;
  }
  function pd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Rl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ef(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function zf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function ny(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var n = function() {
        l(), e.removeEventListener("DOMContentLoaded", n);
      };
      e.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Rl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var Tf = null;
  function Ed(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Rl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function zd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Td(t, l, e) {
    switch (l = ei(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function ju(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Ai(t);
  }
  var Bl = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Set();
  function ni(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var he = j.d;
  j.d = {
    f: uy,
    r: ay,
    D: iy,
    C: cy,
    L: fy,
    m: oy,
    X: ry,
    S: sy,
    M: dy
  };
  function uy() {
    var t = he.f(), l = Wa();
    return t || l;
  }
  function ay(t) {
    var l = mn(t);
    l !== null && l.tag === 5 && l.type === "form" ? Qs(l) : he.r(t);
  }
  var Kn = typeof document > "u" ? null : document;
  function Od(t, l, e) {
    var n = Kn;
    if (n && typeof l == "string" && l) {
      var u = _l(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Ad.has(u) || (Ad.add(u), t = { rel: t, crossOrigin: e, href: l }, n.querySelector(u) === null && (l = n.createElement("link"), ul(l, "link", t), It(l), n.head.appendChild(l)));
    }
  }
  function iy(t) {
    he.D(t), Od("dns-prefetch", t, null);
  }
  function cy(t, l) {
    he.C(t, l), Od("preconnect", t, l);
  }
  function fy(t, l, e) {
    he.L(t, l, e);
    var n = Kn;
    if (n && t && l) {
      var u = 'link[rel="preload"][as="' + _l(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + _l(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + _l(
        e.imageSizes
      ) + '"]')) : u += '[href="' + _l(t) + '"]';
      var a = u;
      switch (l) {
        case "style":
          a = Jn(t);
          break;
        case "script":
          a = wn(t);
      }
      Bl.has(a) || (t = M(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Bl.set(a, t), n.querySelector(u) !== null || l === "style" && n.querySelector(Gu(a)) || l === "script" && n.querySelector(Lu(a)) || (l = n.createElement("link"), ul(l, "link", t), It(l), n.head.appendChild(l)));
    }
  }
  function oy(t, l) {
    he.m(t, l);
    var e = Kn;
    if (e && t) {
      var n = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + _l(n) + '"][href="' + _l(t) + '"]', a = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = wn(t);
      }
      if (!Bl.has(a) && (t = M({ rel: "modulepreload", href: t }, l), Bl.set(a, t), e.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Lu(a)))
              return;
        }
        n = e.createElement("link"), ul(n, "link", t), It(n), e.head.appendChild(n);
      }
    }
  }
  function sy(t, l, e) {
    he.S(t, l, e);
    var n = Kn;
    if (n && t) {
      var u = yn(n).hoistableStyles, a = Jn(t);
      l = l || "default";
      var i = u.get(a);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = n.querySelector(
          Gu(a)
        ))
          c.loading = 5;
        else {
          t = M(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Bl.get(a)) && Af(t, e);
          var s = i = n.createElement("link");
          It(s), ul(s, "link", t), s._p = new Promise(function(p, D) {
            s.onload = p, s.onerror = D;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, ui(i, l, n);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(a, i);
      }
    }
  }
  function ry(t, l) {
    he.X(t, l);
    var e = Kn;
    if (e && t) {
      var n = yn(e).hoistableScripts, u = wn(t), a = n.get(u);
      a || (a = e.querySelector(Lu(u)), a || (t = M({ src: t, async: !0 }, l), (l = Bl.get(u)) && Of(t, l), a = e.createElement("script"), It(a), ul(a, "link", t), e.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function dy(t, l) {
    he.M(t, l);
    var e = Kn;
    if (e && t) {
      var n = yn(e).hoistableScripts, u = wn(t), a = n.get(u);
      a || (a = e.querySelector(Lu(u)), a || (t = M({ src: t, async: !0, type: "module" }, l), (l = Bl.get(u)) && Of(t, l), a = e.createElement("script"), It(a), ul(a, "link", t), e.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function Md(t, l, e, n) {
    var u = (u = nt.current) ? ni(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Jn(e.href), e = yn(
          u
        ).hoistableStyles, n = e.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Jn(e.href);
          var a = yn(
            u
          ).hoistableStyles, i = a.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, a.set(t, i), (a = u.querySelector(
            Gu(t)
          )) && !a._p && (i.instance = a, i.state.loading = 5), Bl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Bl.set(t, e), a || my(
            u,
            t,
            e,
            i.state
          ))), l && n === null)
            throw Error(f(528, ""));
          return i;
        }
        if (l && n !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = wn(e), e = yn(
          u
        ).hoistableScripts, n = e.get(l), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Jn(t) {
    return 'href="' + _l(t) + '"';
  }
  function Gu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _d(t) {
    return M({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function my(t, l, e, n) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = t.createElement("link"), n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    }), ul(l, "link", e), It(l), t.head.appendChild(l));
  }
  function wn(t) {
    return '[src="' + _l(t) + '"]';
  }
  function Lu(t) {
    return "script[async]" + t;
  }
  function Dd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + _l(e.href) + '"]'
          );
          if (n)
            return l.instance = n, It(n), n;
          var u = M({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), It(n), ul(n, "style", u), ui(n, e.precedence, t), l.instance = n;
        case "stylesheet":
          u = Jn(e.href);
          var a = t.querySelector(
            Gu(u)
          );
          if (a)
            return l.state.loading |= 4, l.instance = a, It(a), a;
          n = _d(e), (u = Bl.get(u)) && Af(n, u), a = (t.ownerDocument || t).createElement("link"), It(a);
          var i = a;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), ul(a, "link", n), l.state.loading |= 4, ui(a, e.precedence, t), l.instance = a;
        case "script":
          return a = wn(e.src), (u = t.querySelector(
            Lu(a)
          )) ? (l.instance = u, It(u), u) : (n = e, (u = Bl.get(a)) && (n = M({}, e), Of(n, u)), t = t.ownerDocument || t, u = t.createElement("script"), It(u), ul(u, "link", n), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(f(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, ui(n, e.precedence, t));
    return l.instance;
  }
  function ui(t, l, e) {
    for (var n = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = n.length ? n[n.length - 1] : null, a = u, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c.dataset.precedence === l) a = c;
      else if (a !== u) break;
    }
    a ? a.parentNode.insertBefore(t, a.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Af(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Of(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var ai = null;
  function Ud(t, l, e) {
    if (ai === null) {
      var n = /* @__PURE__ */ new Map(), u = ai = /* @__PURE__ */ new Map();
      u.set(e, n);
    } else
      u = ai, n = u.get(e), n || (n = /* @__PURE__ */ new Map(), u.set(e, n));
    if (n.has(t)) return n;
    for (n.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var a = e[u];
      if (!(a[eu] || a[tl] || t === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = a.getAttribute(l) || "";
        i = t + i;
        var c = n.get(i);
        c ? c.push(a) : n.set(i, [a]);
      }
    }
    return n;
  }
  function Nd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function yy(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function Hd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function hy(t, l, e, n) {
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Jn(n.href), a = l.querySelector(
          Gu(u)
        );
        if (a) {
          l = a._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = ii.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = a, It(a);
          return;
        }
        a = l.ownerDocument || l, n = _d(n), (u = Bl.get(u)) && Af(n, u), a = a.createElement("link"), It(a);
        var i = a;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), ul(a, "link", n), e.instance = a;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = ii.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Mf = 0;
  function vy(t, l) {
    return t.stylesheets && t.count === 0 && fi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && fi(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Mf === 0 && (Mf = 62500 * Fm());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && fi(t, t.stylesheets), t.unsuspend)) {
            var a = t.unsuspend;
            t.unsuspend = null, a();
          }
        },
        (t.imgBytes > Mf ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(u);
      };
    } : null;
  }
  function ii() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) fi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ci = null;
  function fi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ci = /* @__PURE__ */ new Map(), l.forEach(gy, t), ci = null, ii.call(t));
  }
  function gy(t, l) {
    if (!(l.state.loading & 4)) {
      var e = ci.get(t);
      if (e) var n = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), ci.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), a = 0; a < u.length; a++) {
          var i = u[a];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), n = i);
        }
        n && e.set(null, n);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), a = e.get(i) || n, a === n && e.set(null, u), e.set(i, u), this.count++, n = ii.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), a ? a.parentNode.insertBefore(u, a.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Qu = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function Sy(t, l, e, n, u, a, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.hiddenUpdates = pi(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = a, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cd(t, l, e, n, u, a, i, c, s, p, D, H) {
    return t = new Sy(
      t,
      l,
      e,
      i,
      s,
      p,
      D,
      H,
      c
    ), l = 1, a === !0 && (l |= 24), a = bl(3, null, null, l), t.current = a, a.stateNode = t, l = uc(), l.refCount++, t.pooledCache = l, l.refCount++, a.memoizedState = {
      element: n,
      isDehydrated: e,
      cache: l
    }, fc(a), t;
  }
  function xd(t) {
    return t ? (t = An, t) : An;
  }
  function Rd(t, l, e, n, u, a) {
    u = xd(u), n.context === null ? n.context = u : n.pendingContext = u, n = Ae(l), n.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (n.callback = a), e = Oe(t, n, l), e !== null && (gl(e, t, l), bu(e, t, l));
  }
  function Bd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function _f(t, l) {
    Bd(t, l), (t = t.alternate) && Bd(t, l);
  }
  function qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = we(t, 67108864);
      l !== null && gl(l, t, 67108864), _f(t, 67108864);
    }
  }
  function Yd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Al();
      l = Ei(l);
      var e = we(t, l);
      e !== null && gl(e, t, l), _f(t, l);
    }
  }
  var oi = !0;
  function by(t, l, e, n) {
    var u = O.T;
    O.T = null;
    var a = j.p;
    try {
      j.p = 2, Df(t, l, e, n);
    } finally {
      j.p = a, O.T = u;
    }
  }
  function py(t, l, e, n) {
    var u = O.T;
    O.T = null;
    var a = j.p;
    try {
      j.p = 8, Df(t, l, e, n);
    } finally {
      j.p = a, O.T = u;
    }
  }
  function Df(t, l, e, n) {
    if (oi) {
      var u = Uf(n);
      if (u === null)
        yf(
          t,
          l,
          n,
          si,
          e
        ), Gd(t, n);
      else if (zy(
        u,
        t,
        l,
        e,
        n
      ))
        n.stopPropagation();
      else if (Gd(t, n), l & 4 && -1 < Ey.indexOf(t)) {
        for (; u !== null; ) {
          var a = mn(u);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                  var i = Kl(a.pendingLanes);
                  if (i !== 0) {
                    var c = a;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - fl(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    $l(a), (zt & 6) === 0 && (Ja = al() + 500, Bu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = we(a, 2), c !== null && gl(c, a, 2), Wa(), _f(a, 2);
            }
          if (a = Uf(n), a === null && yf(
            t,
            l,
            n,
            si,
            e
          ), a === u) break;
          u = a;
        }
        u !== null && n.stopPropagation();
      } else
        yf(
          t,
          l,
          n,
          null,
          e
        );
    }
  }
  function Uf(t) {
    return t = Ni(t), Nf(t);
  }
  var si = null;
  function Nf(t) {
    if (si = null, t = dn(t), t !== null) {
      var l = S(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = E(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = _(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return si = t, null;
  }
  function jd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pu()) {
          case ta:
            return 2;
          case kn:
            return 8;
          case fn:
          case In:
            return 32;
          case kl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hf = !1, qe = null, Ye = null, je = null, Xu = /* @__PURE__ */ new Map(), Zu = /* @__PURE__ */ new Map(), Ge = [], Ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        qe = null;
        break;
      case "dragenter":
      case "dragleave":
        Ye = null;
        break;
      case "mouseover":
      case "mouseout":
        je = null;
        break;
      case "pointerover":
      case "pointerout":
        Xu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zu.delete(l.pointerId);
    }
  }
  function Vu(t, l, e, n, u, a) {
    return t === null || t.nativeEvent !== a ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [u]
    }, l !== null && (l = mn(l), l !== null && qd(l)), t) : (t.eventSystemFlags |= n, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function zy(t, l, e, n, u) {
    switch (l) {
      case "focusin":
        return qe = Vu(
          qe,
          t,
          l,
          e,
          n,
          u
        ), !0;
      case "dragenter":
        return Ye = Vu(
          Ye,
          t,
          l,
          e,
          n,
          u
        ), !0;
      case "mouseover":
        return je = Vu(
          je,
          t,
          l,
          e,
          n,
          u
        ), !0;
      case "pointerover":
        var a = u.pointerId;
        return Xu.set(
          a,
          Vu(
            Xu.get(a) || null,
            t,
            l,
            e,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return a = u.pointerId, Zu.set(
          a,
          Vu(
            Zu.get(a) || null,
            t,
            l,
            e,
            n,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Ld(t) {
    var l = dn(t.target);
    if (l !== null) {
      var e = S(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = E(e), l !== null) {
            t.blockedOn = l, Pf(t.priority, function() {
              Yd(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = _(e), l !== null) {
            t.blockedOn = l, Pf(t.priority, function() {
              Yd(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ri(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Uf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var n = new e.constructor(
          e.type,
          e
        );
        Ui = n, e.target.dispatchEvent(n), Ui = null;
      } else
        return l = mn(e), l !== null && qd(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Qd(t, l, e) {
    ri(t) && e.delete(l);
  }
  function Ty() {
    Hf = !1, qe !== null && ri(qe) && (qe = null), Ye !== null && ri(Ye) && (Ye = null), je !== null && ri(je) && (je = null), Xu.forEach(Qd), Zu.forEach(Qd);
  }
  function di(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Hf || (Hf = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Ty
    )));
  }
  var mi = null;
  function Xd(t) {
    mi !== t && (mi = t, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        mi === t && (mi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], n = t[l + 1], u = t[l + 2];
          if (typeof n != "function") {
            if (Nf(n || e) === null)
              continue;
            break;
          }
          var a = mn(e);
          a !== null && (t.splice(l, 3), l -= 3, Dc(
            a,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: n
            },
            n,
            u
          ));
        }
      }
    ));
  }
  function Wn(t) {
    function l(s) {
      return di(s, t);
    }
    qe !== null && di(qe, t), Ye !== null && di(Ye, t), je !== null && di(je, t), Xu.forEach(l), Zu.forEach(l);
    for (var e = 0; e < Ge.length; e++) {
      var n = Ge[e];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Ge.length && (e = Ge[0], e.blockedOn === null); )
      Ld(e), e.blockedOn === null && Ge.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (n = 0; n < e.length; n += 3) {
        var u = e[n], a = e[n + 1], i = u[rl] || null;
        if (typeof a == "function")
          i || Xd(e);
        else if (i) {
          var c = null;
          if (a && a.hasAttribute("formAction")) {
            if (u = a, i = a[rl] || null)
              c = i.formAction;
            else if (Nf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[n + 1] = c : (e.splice(n, 3), n -= 3), Xd(e);
        }
      }
  }
  function Zd() {
    function t(a) {
      a.canIntercept && a.info === "react-transition" && a.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      u !== null && (u(), u = null), n || setTimeout(e, 20);
    }
    function e() {
      if (!n && !navigation.transition) {
        var a = navigation.currentEntry;
        a && a.url != null && navigation.navigate(a.url, {
          state: a.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function Cf(t) {
    this._internalRoot = t;
  }
  yi.prototype.render = Cf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(f(409));
    var e = l.current, n = Al();
    Rd(e, n, t, l, null, null);
  }, yi.prototype.unmount = Cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Rd(t.current, 2, null, t, null, null), Wa(), l[rn] = null;
    }
  };
  function yi(t) {
    this._internalRoot = t;
  }
  yi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = If();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ge.length && l !== 0 && l < Ge[e].priority; e++) ;
      Ge.splice(e, 0, t), e === 0 && Ld(t);
    }
  };
  var Vd = y.version;
  if (Vd !== "19.2.8")
    throw Error(
      f(
        527,
        Vd,
        "19.2.8"
      )
    );
  j.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = r(l), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Ay = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
      try {
        Zl = hi.inject(
          Ay
        ), cl = hi;
      } catch {
      }
  }
  return Ju.createRoot = function(t, l) {
    if (!T(t)) throw Error(f(299));
    var e = !1, n = "", u = ks, a = Is, i = Ps;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (a = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = Cd(
      t,
      1,
      !1,
      null,
      null,
      e,
      n,
      null,
      u,
      a,
      i,
      Zd
    ), t[rn] = l.current, mf(t), new Cf(l);
  }, Ju.hydrateRoot = function(t, l, e) {
    if (!T(t)) throw Error(f(299));
    var n = !1, u = "", a = ks, i = Is, c = Ps, s = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), l = Cd(
      t,
      1,
      !0,
      l,
      e ?? null,
      n,
      u,
      s,
      a,
      i,
      c,
      Zd
    ), l.context = xd(null), e = l.current, n = Al(), n = Ei(n), u = Ae(n), u.callback = null, Oe(e, u, n), e = n, l.current.lanes = e, lu(l, e), $l(l), t[rn] = l.current, mf(t), new yi(l);
  }, Ju.version = "19.2.8", Ju;
}
var t0;
function Ry() {
  if (t0) return Rf.exports;
  t0 = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (y) {
        console.error(y);
      }
  }
  return o(), Rf.exports = xy(), Rf.exports;
}
var By = Ry(), qt = Xf();
function qy(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function l0(o) {
  return qy(o) || Array.isArray(o);
}
function Yy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zf(o, y) {
  const h = Object.keys(o), f = Object.keys(y);
  if (h.length !== f.length) return !1;
  const T = JSON.stringify(Object.keys(o.breakpoints || {})), S = JSON.stringify(Object.keys(y.breakpoints || {}));
  return T !== S ? !1 : h.every((E) => {
    const _ = o[E], g = y[E];
    return typeof _ == "function" ? `${_}` == `${g}` : !l0(_) || !l0(g) ? _ === g : Zf(_, g);
  });
}
function e0(o) {
  return o.concat().sort((y, h) => y.name > h.name ? 1 : -1).map((y) => y.options);
}
function jy(o, y) {
  if (o.length !== y.length) return !1;
  const h = e0(o), f = e0(y);
  return h.every((T, S) => {
    const E = f[S];
    return Zf(T, E);
  });
}
function Vf(o) {
  return typeof o == "number";
}
function Lf(o) {
  return typeof o == "string";
}
function gi(o) {
  return typeof o == "boolean";
}
function n0(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function jt(o) {
  return Math.abs(o);
}
function Kf(o) {
  return Math.sign(o);
}
function Wu(o, y) {
  return jt(o - y);
}
function Gy(o, y) {
  if (o === 0 || y === 0 || jt(o) <= jt(y)) return 0;
  const h = Wu(jt(o), jt(y));
  return jt(h / o);
}
function Ly(o) {
  return Math.round(o * 100) / 100;
}
function $u(o) {
  return Fu(o).map(Number);
}
function Ql(o) {
  return o[Iu(o)];
}
function Iu(o) {
  return Math.max(0, o.length - 1);
}
function Jf(o, y) {
  return y === Iu(o);
}
function u0(o, y = 0) {
  return Array.from(Array(o), (h, f) => y + f);
}
function Fu(o) {
  return Object.keys(o);
}
function f0(o, y) {
  return [o, y].reduce((h, f) => (Fu(f).forEach((T) => {
    const S = h[T], E = f[T], _ = n0(S) && n0(E);
    h[T] = _ ? f0(S, E) : E;
  }), h), {});
}
function Qf(o, y) {
  return typeof y.MouseEvent < "u" && o instanceof y.MouseEvent;
}
function Qy(o, y) {
  const h = {
    start: f,
    center: T,
    end: S
  };
  function f() {
    return 0;
  }
  function T(g) {
    return S(g) / 2;
  }
  function S(g) {
    return y - g;
  }
  function E(g, r) {
    return Lf(o) ? h[o](g) : o(y, g, r);
  }
  return {
    measure: E
  };
}
function ku() {
  let o = [];
  function y(T, S, E, _ = {
    passive: !0
  }) {
    let g;
    if ("addEventListener" in T)
      T.addEventListener(S, E, _), g = () => T.removeEventListener(S, E, _);
    else {
      const r = T;
      r.addListener(E), g = () => r.removeListener(E);
    }
    return o.push(g), f;
  }
  function h() {
    o = o.filter((T) => T());
  }
  const f = {
    add: y,
    clear: h
  };
  return f;
}
function Xy(o, y, h, f) {
  const T = ku(), S = 1e3 / 60;
  let E = null, _ = 0, g = 0;
  function r() {
    T.add(o, "visibilitychange", () => {
      o.hidden && C();
    });
  }
  function R() {
    Y(), T.clear();
  }
  function M(G) {
    if (!g) return;
    E || (E = G, h(), h());
    const B = G - E;
    for (E = G, _ += B; _ >= S; )
      h(), _ -= S;
    const Q = _ / S;
    f(Q), g && (g = y.requestAnimationFrame(M));
  }
  function x() {
    g || (g = y.requestAnimationFrame(M));
  }
  function Y() {
    y.cancelAnimationFrame(g), E = null, _ = 0, g = 0;
  }
  function C() {
    E = null, _ = 0;
  }
  return {
    init: r,
    destroy: R,
    start: x,
    stop: Y,
    update: h,
    render: f
  };
}
function Zy(o, y) {
  const h = y === "rtl", f = o === "y", T = f ? "y" : "x", S = f ? "x" : "y", E = !f && h ? -1 : 1, _ = R(), g = M();
  function r(C) {
    const {
      height: q,
      width: G
    } = C;
    return f ? q : G;
  }
  function R() {
    return f ? "top" : h ? "right" : "left";
  }
  function M() {
    return f ? "bottom" : h ? "left" : "right";
  }
  function x(C) {
    return C * E;
  }
  return {
    scroll: T,
    cross: S,
    startEdge: _,
    endEdge: g,
    measureSize: r,
    direction: x
  };
}
function cn(o = 0, y = 0) {
  const h = jt(o - y);
  function f(r) {
    return r < o;
  }
  function T(r) {
    return r > y;
  }
  function S(r) {
    return f(r) || T(r);
  }
  function E(r) {
    return S(r) ? f(r) ? o : y : r;
  }
  function _(r) {
    return h ? r - h * Math.ceil((r - y) / h) : r;
  }
  return {
    length: h,
    max: y,
    min: o,
    constrain: E,
    reachedAny: S,
    reachedMax: T,
    reachedMin: f,
    removeOffset: _
  };
}
function o0(o, y, h) {
  const {
    constrain: f
  } = cn(0, o), T = o + 1;
  let S = E(y);
  function E(x) {
    return h ? jt((T + x) % T) : f(x);
  }
  function _() {
    return S;
  }
  function g(x) {
    return S = E(x), M;
  }
  function r(x) {
    return R().set(_() + x);
  }
  function R() {
    return o0(o, _(), h);
  }
  const M = {
    get: _,
    set: g,
    add: r,
    clone: R
  };
  return M;
}
function Vy(o, y, h, f, T, S, E, _, g, r, R, M, x, Y, C, q, G, B, Q) {
  const {
    cross: V,
    direction: tt
  } = o, ot = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, X = ku(), k = ku(), at = cn(50, 225).constrain(Y.measure(20)), Tt = {
    mouse: 300,
    touch: 400
  }, ft = {
    mouse: 500,
    touch: 600
  }, bt = C ? 43 : 25;
  let wt = !1, mt = 0, _t = 0, O = !1, j = !1, w = !1, ct = !1;
  function st(W) {
    if (!Q) return;
    function At(Wt) {
      (gi(Q) || Q(W, Wt)) && nt(Wt);
    }
    const Ut = y;
    X.add(Ut, "dragstart", (Wt) => Wt.preventDefault(), P).add(Ut, "touchmove", () => {
    }, P).add(Ut, "touchend", () => {
    }).add(Ut, "touchstart", At).add(Ut, "mousedown", At).add(Ut, "touchcancel", pt).add(Ut, "contextmenu", pt).add(Ut, "click", Et, !0);
  }
  function d() {
    X.clear(), k.clear();
  }
  function U() {
    const W = ct ? h : y;
    k.add(W, "touchmove", lt, P).add(W, "touchend", pt).add(W, "mousemove", lt, P).add(W, "mouseup", pt);
  }
  function L(W) {
    const At = W.nodeName || "";
    return ot.includes(At);
  }
  function Z() {
    return (C ? ft : Tt)[ct ? "mouse" : "touch"];
  }
  function I(W, At) {
    const Ut = M.add(Kf(W) * -1), Wt = R.byDistance(W, !C).distance;
    return C || jt(W) < at ? Wt : G && At ? Wt * 0.5 : R.byIndex(Ut.get(), 0).distance;
  }
  function nt(W) {
    const At = Qf(W, f);
    ct = At, w = C && At && !W.buttons && wt, wt = Wu(T.get(), E.get()) >= 2, !(At && W.button !== 0) && (L(W.target) || (O = !0, S.pointerDown(W), r.useFriction(0).useDuration(0), T.set(E), U(), mt = S.readPoint(W), _t = S.readPoint(W, V), x.emit("pointerDown")));
  }
  function lt(W) {
    if (!Qf(W, f) && W.touches.length >= 2) return pt(W);
    const Ut = S.readPoint(W), Wt = S.readPoint(W, V), sl = Wu(Ut, mt), ql = Wu(Wt, _t);
    if (!j && !ct && (!W.cancelable || (j = sl > ql, !j)))
      return pt(W);
    const Xl = S.pointerMove(W);
    sl > q && (w = !0), r.useFriction(0.3).useDuration(0.75), _.start(), T.add(tt(Xl)), W.preventDefault();
  }
  function pt(W) {
    const Ut = R.byDistance(0, !1).index !== M.get(), Wt = S.pointerUp(W) * Z(), sl = I(tt(Wt), Ut), ql = Gy(Wt, sl), Xl = bt - 10 * ql, Ol = B + ql / 50;
    j = !1, O = !1, k.clear(), r.useDuration(Xl).useFriction(Ol), g.distance(sl, !C), ct = !1, x.emit("pointerUp");
  }
  function Et(W) {
    w && (W.stopPropagation(), W.preventDefault(), w = !1);
  }
  function kt() {
    return O;
  }
  return {
    init: st,
    destroy: d,
    pointerDown: kt
  };
}
function Ky(o, y) {
  let f, T;
  function S(M) {
    return M.timeStamp;
  }
  function E(M, x) {
    const C = `client${(x || o.scroll) === "x" ? "X" : "Y"}`;
    return (Qf(M, y) ? M : M.touches[0])[C];
  }
  function _(M) {
    return f = M, T = M, E(M);
  }
  function g(M) {
    const x = E(M) - E(T), Y = S(M) - S(f) > 170;
    return T = M, Y && (f = M), x;
  }
  function r(M) {
    if (!f || !T) return 0;
    const x = E(T) - E(f), Y = S(M) - S(f), C = S(M) - S(T) > 170, q = x / Y;
    return Y && !C && jt(q) > 0.1 ? q : 0;
  }
  return {
    pointerDown: _,
    pointerMove: g,
    pointerUp: r,
    readPoint: E
  };
}
function Jy() {
  function o(h) {
    const {
      offsetTop: f,
      offsetLeft: T,
      offsetWidth: S,
      offsetHeight: E
    } = h;
    return {
      top: f,
      right: T + S,
      bottom: f + E,
      left: T,
      width: S,
      height: E
    };
  }
  return {
    measure: o
  };
}
function wy(o) {
  function y(f) {
    return o * (f / 100);
  }
  return {
    measure: y
  };
}
function Wy(o, y, h, f, T, S, E) {
  const _ = [o].concat(f);
  let g, r, R = [], M = !1;
  function x(G) {
    return T.measureSize(E.measure(G));
  }
  function Y(G) {
    if (!S) return;
    r = x(o), R = f.map(x);
    function B(Q) {
      for (const V of Q) {
        if (M) return;
        const tt = V.target === o, ot = f.indexOf(V.target), P = tt ? r : R[ot], X = x(tt ? o : f[ot]);
        if (jt(X - P) >= 0.5) {
          G.reInit(), y.emit("resize");
          break;
        }
      }
    }
    g = new ResizeObserver((Q) => {
      (gi(S) || S(G, Q)) && B(Q);
    }), h.requestAnimationFrame(() => {
      _.forEach((Q) => g.observe(Q));
    });
  }
  function C() {
    M = !0, g && g.disconnect();
  }
  return {
    init: Y,
    destroy: C
  };
}
function $y(o, y, h, f, T, S) {
  let E = 0, _ = 0, g = T, r = S, R = o.get(), M = 0;
  function x() {
    const P = f.get() - o.get(), X = !g;
    let k = 0;
    return X ? (E = 0, h.set(f), o.set(f), k = P) : (h.set(o), E += P / g, E *= r, R += E, o.add(E), k = R - M), _ = Kf(k), M = R, ot;
  }
  function Y() {
    const P = f.get() - y.get();
    return jt(P) < 1e-3;
  }
  function C() {
    return g;
  }
  function q() {
    return _;
  }
  function G() {
    return E;
  }
  function B() {
    return V(T);
  }
  function Q() {
    return tt(S);
  }
  function V(P) {
    return g = P, ot;
  }
  function tt(P) {
    return r = P, ot;
  }
  const ot = {
    direction: q,
    duration: C,
    velocity: G,
    seek: x,
    settled: Y,
    useBaseFriction: Q,
    useBaseDuration: B,
    useFriction: tt,
    useDuration: V
  };
  return ot;
}
function Fy(o, y, h, f, T) {
  const S = T.measure(10), E = T.measure(50), _ = cn(0.1, 0.99);
  let g = !1;
  function r() {
    return !(g || !o.reachedAny(h.get()) || !o.reachedAny(y.get()));
  }
  function R(Y) {
    if (!r()) return;
    const C = o.reachedMin(y.get()) ? "min" : "max", q = jt(o[C] - y.get()), G = h.get() - y.get(), B = _.constrain(q / E);
    h.subtract(G * B), !Y && jt(G) < S && (h.set(o.constrain(h.get())), f.useDuration(25).useBaseFriction());
  }
  function M(Y) {
    g = !Y;
  }
  return {
    shouldConstrain: r,
    constrain: R,
    toggleActive: M
  };
}
function ky(o, y, h, f, T) {
  const S = cn(-y + o, 0), E = M(), _ = R(), g = x();
  function r(C, q) {
    return Wu(C, q) <= 1;
  }
  function R() {
    const C = E[0], q = Ql(E), G = E.lastIndexOf(C), B = E.indexOf(q) + 1;
    return cn(G, B);
  }
  function M() {
    return h.map((C, q) => {
      const {
        min: G,
        max: B
      } = S, Q = S.constrain(C), V = !q, tt = Jf(h, q);
      return V ? B : tt || r(G, Q) ? G : r(B, Q) ? B : Q;
    }).map((C) => parseFloat(C.toFixed(3)));
  }
  function x() {
    if (y <= o + T) return [S.max];
    if (f === "keepSnaps") return E;
    const {
      min: C,
      max: q
    } = _;
    return E.slice(C, q);
  }
  return {
    snapsContained: g,
    scrollContainLimit: _
  };
}
function Iy(o, y, h) {
  const f = y[0], T = h ? f - o : Ql(y);
  return {
    limit: cn(T, f)
  };
}
function Py(o, y, h, f) {
  const S = y.min + 0.1, E = y.max + 0.1, {
    reachedMin: _,
    reachedMax: g
  } = cn(S, E);
  function r(x) {
    return x === 1 ? g(h.get()) : x === -1 ? _(h.get()) : !1;
  }
  function R(x) {
    if (!r(x)) return;
    const Y = o * (x * -1);
    f.forEach((C) => C.add(Y));
  }
  return {
    loop: R
  };
}
function th(o) {
  const {
    max: y,
    length: h
  } = o;
  function f(S) {
    const E = S - y;
    return h ? E / -h : 0;
  }
  return {
    get: f
  };
}
function lh(o, y, h, f, T) {
  const {
    startEdge: S,
    endEdge: E
  } = o, {
    groupSlides: _
  } = T, g = M().map(y.measure), r = x(), R = Y();
  function M() {
    return _(f).map((q) => Ql(q)[E] - q[0][S]).map(jt);
  }
  function x() {
    return f.map((q) => h[S] - q[S]).map((q) => -jt(q));
  }
  function Y() {
    return _(r).map((q) => q[0]).map((q, G) => q + g[G]);
  }
  return {
    snaps: r,
    snapsAligned: R
  };
}
function eh(o, y, h, f, T, S) {
  const {
    groupSlides: E
  } = T, {
    min: _,
    max: g
  } = f, r = R();
  function R() {
    const x = E(S), Y = !o || y === "keepSnaps";
    return h.length === 1 ? [S] : Y ? x : x.slice(_, g).map((C, q, G) => {
      const B = !q, Q = Jf(G, q);
      if (B) {
        const V = Ql(G[0]) + 1;
        return u0(V);
      }
      if (Q) {
        const V = Iu(S) - Ql(G)[0] + 1;
        return u0(V, Ql(G)[0]);
      }
      return C;
    });
  }
  return {
    slideRegistry: r
  };
}
function nh(o, y, h, f, T) {
  const {
    reachedAny: S,
    removeOffset: E,
    constrain: _
  } = f;
  function g(C) {
    return C.concat().sort((q, G) => jt(q) - jt(G))[0];
  }
  function r(C) {
    const q = o ? E(C) : _(C), G = y.map((Q, V) => ({
      diff: R(Q - q, 0),
      index: V
    })).sort((Q, V) => jt(Q.diff) - jt(V.diff)), {
      index: B
    } = G[0];
    return {
      index: B,
      distance: q
    };
  }
  function R(C, q) {
    const G = [C, C + h, C - h];
    if (!o) return C;
    if (!q) return g(G);
    const B = G.filter((Q) => Kf(Q) === q);
    return B.length ? g(B) : Ql(G) - h;
  }
  function M(C, q) {
    const G = y[C] - T.get(), B = R(G, q);
    return {
      index: C,
      distance: B
    };
  }
  function x(C, q) {
    const G = T.get() + C, {
      index: B,
      distance: Q
    } = r(G), V = !o && S(G);
    if (!q || V) return {
      index: B,
      distance: C
    };
    const tt = y[B] - Q, ot = C + R(tt, 0);
    return {
      index: B,
      distance: ot
    };
  }
  return {
    byDistance: x,
    byIndex: M,
    shortcut: R
  };
}
function uh(o, y, h, f, T, S, E) {
  function _(M) {
    const x = M.distance, Y = M.index !== y.get();
    S.add(x), x && (f.duration() ? o.start() : (o.update(), o.render(1), o.update())), Y && (h.set(y.get()), y.set(M.index), E.emit("select"));
  }
  function g(M, x) {
    const Y = T.byDistance(M, x);
    _(Y);
  }
  function r(M, x) {
    const Y = y.clone().set(M), C = T.byIndex(Y.get(), x);
    _(C);
  }
  return {
    distance: g,
    index: r
  };
}
function ah(o, y, h, f, T, S, E, _) {
  const g = {
    passive: !0,
    capture: !0
  };
  let r = 0;
  function R(Y) {
    if (!_) return;
    function C(q) {
      if ((/* @__PURE__ */ new Date()).getTime() - r > 10) return;
      E.emit("slideFocusStart"), o.scrollLeft = 0;
      const Q = h.findIndex((V) => V.includes(q));
      Vf(Q) && (T.useDuration(0), f.index(Q, 0), E.emit("slideFocus"));
    }
    S.add(document, "keydown", M, !1), y.forEach((q, G) => {
      S.add(q, "focus", (B) => {
        (gi(_) || _(Y, B)) && C(G);
      }, g);
    });
  }
  function M(Y) {
    Y.code === "Tab" && (r = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: R
  };
}
function wu(o) {
  let y = o;
  function h() {
    return y;
  }
  function f(g) {
    y = E(g);
  }
  function T(g) {
    y += E(g);
  }
  function S(g) {
    y -= E(g);
  }
  function E(g) {
    return Vf(g) ? g : g.get();
  }
  return {
    get: h,
    set: f,
    add: T,
    subtract: S
  };
}
function s0(o, y) {
  const h = o.scroll === "x" ? E : _, f = y.style;
  let T = null, S = !1;
  function E(x) {
    return `translate3d(${x}px,0px,0px)`;
  }
  function _(x) {
    return `translate3d(0px,${x}px,0px)`;
  }
  function g(x) {
    if (S) return;
    const Y = Ly(o.direction(x));
    Y !== T && (f.transform = h(Y), T = Y);
  }
  function r(x) {
    S = !x;
  }
  function R() {
    S || (f.transform = "", y.getAttribute("style") || y.removeAttribute("style"));
  }
  return {
    clear: R,
    to: g,
    toggleActive: r
  };
}
function ih(o, y, h, f, T, S, E, _, g) {
  const R = $u(T), M = $u(T).reverse(), x = B().concat(Q());
  function Y(X, k) {
    return X.reduce((at, Tt) => at - T[Tt], k);
  }
  function C(X, k) {
    return X.reduce((at, Tt) => Y(at, k) > 0 ? at.concat([Tt]) : at, []);
  }
  function q(X) {
    return S.map((k, at) => ({
      start: k - f[at] + 0.5 + X,
      end: k + y - 0.5 + X
    }));
  }
  function G(X, k, at) {
    const Tt = q(k);
    return X.map((ft) => {
      const bt = at ? 0 : -h, wt = at ? h : 0, mt = at ? "end" : "start", _t = Tt[ft][mt];
      return {
        index: ft,
        loopPoint: _t,
        slideLocation: wu(-1),
        translate: s0(o, g[ft]),
        target: () => _.get() > _t ? bt : wt
      };
    });
  }
  function B() {
    const X = E[0], k = C(M, X);
    return G(k, h, !1);
  }
  function Q() {
    const X = y - E[0] - 1, k = C(R, X);
    return G(k, -h, !0);
  }
  function V() {
    return x.every(({
      index: X
    }) => {
      const k = R.filter((at) => at !== X);
      return Y(k, y) <= 0.1;
    });
  }
  function tt() {
    x.forEach((X) => {
      const {
        target: k,
        translate: at,
        slideLocation: Tt
      } = X, ft = k();
      ft !== Tt.get() && (at.to(ft), Tt.set(ft));
    });
  }
  function ot() {
    x.forEach((X) => X.translate.clear());
  }
  return {
    canLoop: V,
    clear: ot,
    loop: tt,
    loopPoints: x
  };
}
function ch(o, y, h) {
  let f, T = !1;
  function S(g) {
    if (!h) return;
    function r(R) {
      for (const M of R)
        if (M.type === "childList") {
          g.reInit(), y.emit("slidesChanged");
          break;
        }
    }
    f = new MutationObserver((R) => {
      T || (gi(h) || h(g, R)) && r(R);
    }), f.observe(o, {
      childList: !0
    });
  }
  function E() {
    f && f.disconnect(), T = !0;
  }
  return {
    init: S,
    destroy: E
  };
}
function fh(o, y, h, f) {
  const T = {};
  let S = null, E = null, _, g = !1;
  function r() {
    _ = new IntersectionObserver((C) => {
      g || (C.forEach((q) => {
        const G = y.indexOf(q.target);
        T[G] = q;
      }), S = null, E = null, h.emit("slidesInView"));
    }, {
      root: o.parentElement,
      threshold: f
    }), y.forEach((C) => _.observe(C));
  }
  function R() {
    _ && _.disconnect(), g = !0;
  }
  function M(C) {
    return Fu(T).reduce((q, G) => {
      const B = parseInt(G), {
        isIntersecting: Q
      } = T[B];
      return (C && Q || !C && !Q) && q.push(B), q;
    }, []);
  }
  function x(C = !0) {
    if (C && S) return S;
    if (!C && E) return E;
    const q = M(C);
    return C && (S = q), C || (E = q), q;
  }
  return {
    init: r,
    destroy: R,
    get: x
  };
}
function oh(o, y, h, f, T, S) {
  const {
    measureSize: E,
    startEdge: _,
    endEdge: g
  } = o, r = h[0] && T, R = C(), M = q(), x = h.map(E), Y = G();
  function C() {
    if (!r) return 0;
    const Q = h[0];
    return jt(y[_] - Q[_]);
  }
  function q() {
    if (!r) return 0;
    const Q = S.getComputedStyle(Ql(f));
    return parseFloat(Q.getPropertyValue(`margin-${g}`));
  }
  function G() {
    return h.map((Q, V, tt) => {
      const ot = !V, P = Jf(tt, V);
      return ot ? x[V] + R : P ? x[V] + M : tt[V + 1][_] - Q[_];
    }).map(jt);
  }
  return {
    slideSizes: x,
    slideSizesWithGaps: Y,
    startGap: R,
    endGap: M
  };
}
function sh(o, y, h, f, T, S, E, _, g) {
  const {
    startEdge: r,
    endEdge: R,
    direction: M
  } = o, x = Vf(h);
  function Y(B, Q) {
    return $u(B).filter((V) => V % Q === 0).map((V) => B.slice(V, V + Q));
  }
  function C(B) {
    return B.length ? $u(B).reduce((Q, V, tt) => {
      const ot = Ql(Q) || 0, P = ot === 0, X = V === Iu(B), k = T[r] - S[ot][r], at = T[r] - S[V][R], Tt = !f && P ? M(E) : 0, ft = !f && X ? M(_) : 0, bt = jt(at - ft - (k + Tt));
      return tt && bt > y + g && Q.push(V), X && Q.push(B.length), Q;
    }, []).map((Q, V, tt) => {
      const ot = Math.max(tt[V - 1] || 0);
      return B.slice(ot, Q);
    }) : [];
  }
  function q(B) {
    return x ? Y(B, h) : C(B);
  }
  return {
    groupSlides: q
  };
}
function rh(o, y, h, f, T, S, E) {
  const {
    align: _,
    axis: g,
    direction: r,
    startIndex: R,
    loop: M,
    duration: x,
    dragFree: Y,
    dragThreshold: C,
    inViewThreshold: q,
    slidesToScroll: G,
    skipSnaps: B,
    containScroll: Q,
    watchResize: V,
    watchSlides: tt,
    watchDrag: ot,
    watchFocus: P
  } = S, X = 2, k = Jy(), at = k.measure(y), Tt = h.map(k.measure), ft = Zy(g, r), bt = ft.measureSize(at), wt = wy(bt), mt = Qy(_, bt), _t = !M && !!Q, O = M || !!Q, {
    slideSizes: j,
    slideSizesWithGaps: w,
    startGap: ct,
    endGap: st
  } = oh(ft, at, Tt, h, O, T), d = sh(ft, bt, G, M, at, Tt, ct, st, X), {
    snaps: U,
    snapsAligned: L
  } = lh(ft, mt, at, Tt, d), Z = -Ql(U) + Ql(w), {
    snapsContained: I,
    scrollContainLimit: nt
  } = ky(bt, Z, L, Q, X), lt = _t ? I : L, {
    limit: pt
  } = Iy(Z, lt, M), Et = o0(Iu(lt), R, M), kt = Et.clone(), Dt = $u(h), W = ({
    dragHandler: kl,
    scrollBody: Pn,
    scrollBounds: tu,
    options: {
      loop: Zl
    }
  }) => {
    Zl || tu.constrain(kl.pointerDown()), Pn.seek();
  }, At = ({
    scrollBody: kl,
    translate: Pn,
    location: tu,
    offsetLocation: Zl,
    previousLocation: cl,
    scrollLooper: Vl,
    slideLooper: fl,
    dragHandler: Si,
    animation: bi,
    eventHandler: la,
    scrollBounds: on,
    options: {
      loop: Qe
    }
  }, Xe) => {
    const Kl = kl.settled(), sn = !on.shouldConstrain(), ve = Qe ? Kl : Kl && sn, ea = ve && !Si.pointerDown();
    ea && bi.stop();
    const na = tu.get() * Xe + cl.get() * (1 - Xe);
    Zl.set(na), Qe && (Vl.loop(kl.direction()), fl.loop()), Pn.to(Zl.get()), ea && la.emit("settle"), ve || la.emit("scroll");
  }, Ut = Xy(f, T, () => W(In), (kl) => At(In, kl)), Wt = 0.68, sl = lt[Et.get()], ql = wu(sl), Xl = wu(sl), Ol = wu(sl), Yl = wu(sl), Fl = $y(ql, Ol, Xl, Yl, x, Wt), $n = nh(M, lt, Z, pt, Yl), Fn = uh(Ut, Et, kt, Fl, $n, Yl, E), al = th(pt), Pu = ku(), ta = fh(y, h, E, q), {
    slideRegistry: kn
  } = eh(_t, Q, lt, nt, d, Dt), fn = ah(o, h, kn, Fn, Fl, Pu, E, P), In = {
    ownerDocument: f,
    ownerWindow: T,
    eventHandler: E,
    containerRect: at,
    slideRects: Tt,
    animation: Ut,
    axis: ft,
    dragHandler: Vy(ft, o, f, T, Yl, Ky(ft, T), ql, Ut, Fn, Fl, $n, Et, E, wt, Y, C, B, Wt, ot),
    eventStore: Pu,
    percentOfView: wt,
    index: Et,
    indexPrevious: kt,
    limit: pt,
    location: ql,
    offsetLocation: Ol,
    previousLocation: Xl,
    options: S,
    resizeHandler: Wy(y, E, T, h, ft, V, k),
    scrollBody: Fl,
    scrollBounds: Fy(pt, Ol, Yl, Fl, wt),
    scrollLooper: Py(Z, pt, Ol, [ql, Ol, Xl, Yl]),
    scrollProgress: al,
    scrollSnapList: lt.map(al.get),
    scrollSnaps: lt,
    scrollTarget: $n,
    scrollTo: Fn,
    slideLooper: ih(ft, bt, Z, j, w, U, lt, Ol, h),
    slideFocus: fn,
    slidesHandler: ch(y, E, tt),
    slidesInView: ta,
    slideIndexes: Dt,
    slideRegistry: kn,
    slidesToScroll: d,
    target: Yl,
    translate: s0(ft, y)
  };
  return In;
}
function dh() {
  let o = {}, y;
  function h(r) {
    y = r;
  }
  function f(r) {
    return o[r] || [];
  }
  function T(r) {
    return f(r).forEach((R) => R(y, r)), g;
  }
  function S(r, R) {
    return o[r] = f(r).concat([R]), g;
  }
  function E(r, R) {
    return o[r] = f(r).filter((M) => M !== R), g;
  }
  function _() {
    o = {};
  }
  const g = {
    init: h,
    emit: T,
    off: E,
    on: S,
    clear: _
  };
  return g;
}
const mh = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function yh(o) {
  function y(S, E) {
    return f0(S, E || {});
  }
  function h(S) {
    const E = S.breakpoints || {}, _ = Fu(E).filter((g) => o.matchMedia(g).matches).map((g) => E[g]).reduce((g, r) => y(g, r), {});
    return y(S, _);
  }
  function f(S) {
    return S.map((E) => Fu(E.breakpoints || {})).reduce((E, _) => E.concat(_), []).map(o.matchMedia);
  }
  return {
    mergeOptions: y,
    optionsAtMedia: h,
    optionsMediaQueries: f
  };
}
function hh(o) {
  let y = [];
  function h(S, E) {
    return y = E.filter(({
      options: _
    }) => o.optionsAtMedia(_).active !== !1), y.forEach((_) => _.init(S, o)), E.reduce((_, g) => Object.assign(_, {
      [g.name]: g
    }), {});
  }
  function f() {
    y = y.filter((S) => S.destroy());
  }
  return {
    init: h,
    destroy: f
  };
}
function vi(o, y, h) {
  const f = o.ownerDocument, T = f.defaultView, S = yh(T), E = hh(S), _ = ku(), g = dh(), {
    mergeOptions: r,
    optionsAtMedia: R,
    optionsMediaQueries: M
  } = S, {
    on: x,
    off: Y,
    emit: C
  } = g, q = ft;
  let G = !1, B, Q = r(mh, vi.globalOptions), V = r(Q), tt = [], ot, P, X;
  function k() {
    const {
      container: Dt,
      slides: W
    } = V;
    P = (Lf(Dt) ? o.querySelector(Dt) : Dt) || o.children[0];
    const Ut = Lf(W) ? P.querySelectorAll(W) : W;
    X = [].slice.call(Ut || P.children);
  }
  function at(Dt) {
    const W = rh(o, P, X, f, T, Dt, g);
    if (Dt.loop && !W.slideLooper.canLoop()) {
      const At = Object.assign({}, Dt, {
        loop: !1
      });
      return at(At);
    }
    return W;
  }
  function Tt(Dt, W) {
    G || (Q = r(Q, Dt), V = R(Q), tt = W || tt, k(), B = at(V), M([Q, ...tt.map(({
      options: At
    }) => At)]).forEach((At) => _.add(At, "change", ft)), V.active && (B.translate.to(B.location.get()), B.animation.init(), B.slidesInView.init(), B.slideFocus.init(kt), B.eventHandler.init(kt), B.resizeHandler.init(kt), B.slidesHandler.init(kt), B.options.loop && B.slideLooper.loop(), P.offsetParent && X.length && B.dragHandler.init(kt), ot = E.init(kt, tt)));
  }
  function ft(Dt, W) {
    const At = d();
    bt(), Tt(r({
      startIndex: At
    }, Dt), W), g.emit("reInit");
  }
  function bt() {
    B.dragHandler.destroy(), B.eventStore.clear(), B.translate.clear(), B.slideLooper.clear(), B.resizeHandler.destroy(), B.slidesHandler.destroy(), B.slidesInView.destroy(), B.animation.destroy(), E.destroy(), _.clear();
  }
  function wt() {
    G || (G = !0, _.clear(), bt(), g.emit("destroy"), g.clear());
  }
  function mt(Dt, W, At) {
    !V.active || G || (B.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : V.duration), B.scrollTo.index(Dt, At || 0));
  }
  function _t(Dt) {
    const W = B.index.add(1).get();
    mt(W, Dt, -1);
  }
  function O(Dt) {
    const W = B.index.add(-1).get();
    mt(W, Dt, 1);
  }
  function j() {
    return B.index.add(1).get() !== d();
  }
  function w() {
    return B.index.add(-1).get() !== d();
  }
  function ct() {
    return B.scrollSnapList;
  }
  function st() {
    return B.scrollProgress.get(B.offsetLocation.get());
  }
  function d() {
    return B.index.get();
  }
  function U() {
    return B.indexPrevious.get();
  }
  function L() {
    return B.slidesInView.get();
  }
  function Z() {
    return B.slidesInView.get(!1);
  }
  function I() {
    return ot;
  }
  function nt() {
    return B;
  }
  function lt() {
    return o;
  }
  function pt() {
    return P;
  }
  function Et() {
    return X;
  }
  const kt = {
    canScrollNext: j,
    canScrollPrev: w,
    containerNode: pt,
    internalEngine: nt,
    destroy: wt,
    off: Y,
    on: x,
    emit: C,
    plugins: I,
    previousScrollSnap: U,
    reInit: q,
    rootNode: lt,
    scrollNext: _t,
    scrollPrev: O,
    scrollProgress: st,
    scrollSnapList: ct,
    scrollTo: mt,
    selectedScrollSnap: d,
    slideNodes: Et,
    slidesInView: L,
    slidesNotInView: Z
  };
  return Tt(y, h), setTimeout(() => g.emit("init"), 0), kt;
}
vi.globalOptions = void 0;
function wf(o = {}, y = []) {
  const h = qt.useRef(o), f = qt.useRef(y), [T, S] = qt.useState(), [E, _] = qt.useState(), g = qt.useCallback(() => {
    T && T.reInit(h.current, f.current);
  }, [T]);
  return qt.useEffect(() => {
    Zf(h.current, o) || (h.current = o, g());
  }, [o, g]), qt.useEffect(() => {
    jy(f.current, y) || (f.current = y, g());
  }, [y, g]), qt.useEffect(() => {
    if (Yy() && E) {
      vi.globalOptions = wf.globalOptions;
      const r = vi(E, h.current, f.current);
      return S(r), () => r.destroy();
    } else
      S(void 0);
  }, [E, S]), [_, T];
}
wf.globalOptions = void 0;
const vh = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function gh(o, y) {
  const h = o.scrollSnapList();
  return typeof y == "number" ? h.map(() => y) : y(h, o);
}
function Sh(o, y) {
  const h = o.rootNode();
  return y && y(h) || h;
}
function Wf(o = {}) {
  let y, h, f, T, S = null, E = 0, _ = !1, g = !1, r = !1, R = !1;
  function M(mt, _t) {
    h = mt;
    const {
      mergeOptions: O,
      optionsAtMedia: j
    } = _t, w = O(vh, Wf.globalOptions), ct = O(w, o);
    if (y = j(ct), h.scrollSnapList().length <= 1) return;
    R = y.jump, f = !1, T = gh(h, y.delay);
    const {
      eventStore: st,
      ownerDocument: d
    } = h.internalEngine(), U = !!h.internalEngine().options.watchDrag, L = Sh(h, y.rootNode);
    st.add(d, "visibilitychange", B), U && h.on("pointerDown", V), U && !y.stopOnInteraction && h.on("pointerUp", tt), y.stopOnMouseEnter && st.add(L, "mouseenter", ot), y.stopOnMouseEnter && !y.stopOnInteraction && st.add(L, "mouseleave", P), y.stopOnFocusIn && h.on("slideFocusStart", G), y.stopOnFocusIn && !y.stopOnInteraction && st.add(h.containerNode(), "focusout", q), y.playOnInit && q();
  }
  function x() {
    h.off("pointerDown", V).off("pointerUp", tt).off("slideFocusStart", G), G(), f = !0, _ = !1;
  }
  function Y() {
    const {
      ownerWindow: mt
    } = h.internalEngine();
    mt.clearTimeout(E), E = mt.setTimeout(ft, T[h.selectedScrollSnap()]), S = (/* @__PURE__ */ new Date()).getTime(), h.emit("autoplay:timerset");
  }
  function C() {
    const {
      ownerWindow: mt
    } = h.internalEngine();
    mt.clearTimeout(E), E = 0, S = null, h.emit("autoplay:timerstopped");
  }
  function q() {
    if (!f) {
      if (Q()) {
        r = !0;
        return;
      }
      _ || h.emit("autoplay:play"), Y(), _ = !0;
    }
  }
  function G() {
    f || (_ && h.emit("autoplay:stop"), C(), _ = !1);
  }
  function B() {
    if (Q())
      return r = _, G();
    r && q();
  }
  function Q() {
    const {
      ownerDocument: mt
    } = h.internalEngine();
    return mt.visibilityState === "hidden";
  }
  function V() {
    g || G();
  }
  function tt() {
    g || q();
  }
  function ot() {
    g = !0, G();
  }
  function P() {
    g = !1, q();
  }
  function X(mt) {
    typeof mt < "u" && (R = mt), q();
  }
  function k() {
    _ && G();
  }
  function at() {
    _ && q();
  }
  function Tt() {
    return _;
  }
  function ft() {
    const {
      index: mt
    } = h.internalEngine(), _t = mt.clone().add(1).get(), O = h.scrollSnapList().length - 1, j = y.stopOnLastSnap && _t === O;
    if (h.canScrollNext() ? h.scrollNext(R) : h.scrollTo(0, R), h.emit("autoplay:select"), j) return G();
    q();
  }
  function bt() {
    if (!S) return null;
    const mt = T[h.selectedScrollSnap()], _t = (/* @__PURE__ */ new Date()).getTime() - S;
    return mt - _t;
  }
  return {
    name: "autoplay",
    options: o,
    init: M,
    destroy: x,
    play: X,
    stop: k,
    reset: at,
    isPlaying: Tt,
    timeUntilNext: bt
  };
}
Wf.globalOptions = void 0;
const r0 = (...o) => o.filter((y, h, f) => !!y && y.trim() !== "" && f.indexOf(y) === h).join(" ").trim();
const bh = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const ph = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (y, h, f) => f ? f.toUpperCase() : h.toLowerCase()
);
const a0 = (o) => {
  const y = ph(o);
  return y.charAt(0).toUpperCase() + y.slice(1);
};
var Gf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Eh = (o) => {
  for (const y in o)
    if (y.startsWith("aria-") || y === "role" || y === "title")
      return !0;
  return !1;
}, zh = qt.createContext({}), Th = () => qt.useContext(zh), Ah = qt.forwardRef(
  ({ color: o, size: y, strokeWidth: h, absoluteStrokeWidth: f, className: T = "", children: S, iconNode: E, ..._ }, g) => {
    const {
      size: r = 24,
      strokeWidth: R = 2,
      absoluteStrokeWidth: M = !1,
      color: x = "currentColor",
      className: Y = ""
    } = Th() ?? {}, C = f ?? M ? Number(h ?? R) * 24 / Number(y ?? r) : h ?? R;
    return qt.createElement(
      "svg",
      {
        ref: g,
        ...Gf,
        width: y ?? r ?? Gf.width,
        height: y ?? r ?? Gf.height,
        stroke: o ?? x,
        strokeWidth: C,
        className: r0("lucide", Y, T),
        ...!S && !Eh(_) && { "aria-hidden": "true" },
        ..._
      },
      [
        ...E.map(([q, G]) => qt.createElement(q, G)),
        ...Array.isArray(S) ? S : [S]
      ]
    );
  }
);
const d0 = (o, y) => {
  const h = qt.forwardRef(
    ({ className: f, ...T }, S) => qt.createElement(Ah, {
      ref: S,
      iconNode: y,
      className: r0(
        `lucide-${bh(a0(o))}`,
        `lucide-${o}`,
        f
      ),
      ...T
    })
  );
  return h.displayName = a0(o), h;
};
const Oh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Mh = d0("chevron-left", Oh);
const _h = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Dh = d0("chevron-right", _h), Uh = (o) => typeof window.money == "function" ? window.money(o) : "R$ " + Number(o || 0).toLocaleString("pt-BR"), m0 = [
  { name: "Fone Bluetooth ANC Pro", brand: "AudioLab", price: 749, image: "images/fone.jpg", glyph: "🎧" },
  { name: "Smartphone Ultra 256GB", brand: "Nexon", price: 3299, image: "images/celular.jpg", glyph: "📱" },
  { name: "Bike Elétrica Urban 350W", brand: "VoltRide", price: 6490, image: "images/bike.jpg", glyph: "🚲" },
  { name: "Eau de Parfum Noir", brand: "Maison Lumière", price: 589, image: "images/perfume.jpg", glyph: "🧴" },
  { name: "Vinho Reserva Importado", brand: "Bodega Sur", price: 259, image: "images/vinho.jpg", glyph: "🍷" }
], i0 = 5;
function Nh(o) {
  const y = o.filter((T) => T.image).sort((T, S) => +!!S.bestseller - +!!T.bestseller).slice(0, i0), h = new Set(y.map((T) => (T.name || "").toLowerCase())), f = [...y];
  for (const T of m0) {
    if (f.length >= i0) break;
    h.has(T.name.toLowerCase()) || f.push(T);
  }
  return f;
}
function Hh() {
  const [o, y] = qt.useState(m0), h = qt.useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1,
    []
  ), f = qt.useMemo(
    () => h ? [] : [Wf({ delay: 5e3, stopOnInteraction: !1, stopOnMouseEnter: !0 })],
    [h]
  ), [T, S] = wf({ loop: !0, align: "center" }, f), [E, _] = qt.useState(0), [g, r] = qt.useState([]), R = qt.useCallback(() => S?.scrollPrev(), [S]), M = qt.useCallback(() => S?.scrollNext(), [S]), x = qt.useCallback((Y) => S?.scrollTo(Y), [S]);
  return qt.useEffect(() => {
    let Y = !0;
    return (async () => {
      try {
        const C = await window.Store?.products?.();
        Y && Array.isArray(C) && y(Nh(C));
      } catch {
      }
    })(), () => {
      Y = !1;
    };
  }, []), qt.useEffect(() => {
    if (!S) return;
    const Y = () => _(S.selectedScrollSnap());
    return r(S.scrollSnapList()), Y(), S.on("select", Y), S.on("reInit", () => {
      r(S.scrollSnapList()), Y();
    }), () => {
      S.off("select", Y);
    };
  }, [S, o]), /* @__PURE__ */ Ft.jsxs("div", { className: "hc-root", children: [
    /* @__PURE__ */ Ft.jsx("style", { children: Ch }),
    /* @__PURE__ */ Ft.jsx("div", { className: "hc-viewport", ref: T, children: /* @__PURE__ */ Ft.jsx("div", { className: "hc-container", children: o.map((Y, C) => /* @__PURE__ */ Ft.jsxs("div", { className: "hc-slide", children: [
      /* @__PURE__ */ Ft.jsx("div", { className: "hc-figure", children: Y.image ? /* @__PURE__ */ Ft.jsx("img", { className: "hc-img", src: Y.image, alt: Y.name, loading: C === 0 ? "eager" : "lazy" }) : /* @__PURE__ */ Ft.jsx("span", { className: "hc-emoji", role: "img", "aria-label": Y.name, children: Y.glyph || "📦" }) }),
      /* @__PURE__ */ Ft.jsxs("div", { className: "hc-meta", children: [
        Y.brand ? /* @__PURE__ */ Ft.jsx("span", { className: "hc-brand", children: Y.brand }) : null,
        /* @__PURE__ */ Ft.jsx("span", { className: "hc-name", children: Y.name }),
        /* @__PURE__ */ Ft.jsx("span", { className: "hc-price", children: Uh(Y.price) })
      ] })
    ] }, Y.id ?? Y.name + C)) }) }),
    /* @__PURE__ */ Ft.jsx("button", { className: "hc-arrow hc-prev", onClick: R, "aria-label": "Produto anterior", type: "button", children: /* @__PURE__ */ Ft.jsx(Mh, { size: 22, strokeWidth: 2.2 }) }),
    /* @__PURE__ */ Ft.jsx("button", { className: "hc-arrow hc-next", onClick: M, "aria-label": "Próximo produto", type: "button", children: /* @__PURE__ */ Ft.jsx(Dh, { size: 22, strokeWidth: 2.2 }) }),
    /* @__PURE__ */ Ft.jsx("div", { className: "hc-dots", children: g.map((Y, C) => /* @__PURE__ */ Ft.jsx(
      "button",
      {
        type: "button",
        className: "hc-dot" + (C === E ? " is-active" : ""),
        onClick: () => x(C),
        "aria-label": `Ir para o produto ${C + 1}`,
        "aria-current": C === E ? "true" : void 0
      },
      C
    )) })
  ] });
}
const Ch = `
.hc-root { position: absolute; inset: 0; overflow: hidden; border-radius: inherit;
  background: radial-gradient(120% 90% at 70% 15%, color-mix(in srgb, #b0121a 55%, transparent), transparent 60%),
              linear-gradient(160deg, #6b0d12, #2a0508 85%); }
.hc-viewport { overflow: hidden; height: 100%; }
.hc-container { display: flex; height: 100%; touch-action: pan-y pinch-zoom; }
.hc-slide { position: relative; flex: 0 0 100%; min-width: 0; height: 100%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 34px 30px 92px; box-sizing: border-box; }
.hc-figure { flex: 1 1 auto; width: 100%; display: grid; place-items: center; min-height: 0; }
.hc-img { max-width: 82%; max-height: 100%; width: auto; height: auto;
  object-fit: contain; filter: drop-shadow(0 20px 42px rgba(0,0,0,.5)); }
.hc-emoji { font-size: clamp(90px, 16vw, 150px); line-height: 1;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,.45)); }
.hc-meta { position: absolute; left: 22px; right: 22px; bottom: 62px; text-align: center;
  display: flex; flex-direction: column; gap: 3px; }
.hc-brand { font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
  color: color-mix(in srgb, var(--gold, #e8c07d) 85%, #fff); }
.hc-name { font-family: var(--serif, Georgia, serif); font-size: clamp(18px, 2.6vw, 24px);
  color: #fff; line-height: 1.15; }
.hc-price { font-family: var(--serif, Georgia, serif); font-size: 20px;
  color: var(--gold, #e8c07d); }

.hc-arrow { position: absolute; top: 46%; transform: translateY(-50%); z-index: 3;
  width: 42px; height: 42px; display: grid; place-items: center; cursor: pointer;
  color: #fff; border-radius: 999px; border: 1px solid rgba(255,255,255,.28);
  background: rgba(0,0,0,.32); backdrop-filter: blur(6px);
  transition: background .2s, border-color .2s, transform .2s; }
.hc-arrow:hover { background: rgba(0,0,0,.5); border-color: var(--gold, #e8c07d);
  color: var(--gold, #e8c07d); }
.hc-arrow:active { transform: translateY(-50%) scale(.94); }
.hc-prev { left: 14px; }
.hc-next { right: 14px; }

.hc-dots { position: absolute; left: 0; right: 0; bottom: 22px; z-index: 3;
  display: flex; justify-content: center; gap: 9px; }
.hc-dot { width: 8px; height: 8px; padding: 0; border-radius: 999px; cursor: pointer;
  border: 0; background: rgba(255,255,255,.4); transition: width .25s, background .25s; }
.hc-dot:hover { background: rgba(255,255,255,.7); }
.hc-dot.is-active { width: 22px; background: var(--gold, #e8c07d); }

@media (max-width: 560px) {
  .hc-arrow { width: 36px; height: 36px; }
  .hc-slide { padding: 26px 22px 84px; }
}
`, c0 = document.getElementById("heroCarousel");
c0 && By.createRoot(c0).render(/* @__PURE__ */ Ft.jsx(Hh, {}));
