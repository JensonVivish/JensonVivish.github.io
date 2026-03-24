var bh = e => {
    throw TypeError(e)
}
;
var Yl = (e, t, n) => t.has(e) || bh("Cannot " + n);
var M = (e, t, n) => (Yl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ee = (e, t, n) => t.has(e) ? bh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , G = (e, t, n, r) => (Yl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Oe = (e, t, n) => (Yl(e, t, "access private method"),
n);
var To = (e, t, n, r) => ({
    set _(i) {
        G(e, t, i, n)
    },
    get _() {
        return M(e, t, r)
    }
});
function eS(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function iy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var sy = {
    exports: {}
}
  , ll = {}
  , oy = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo = Symbol.for("react.element")
  , tS = Symbol.for("react.portal")
  , nS = Symbol.for("react.fragment")
  , rS = Symbol.for("react.strict_mode")
  , iS = Symbol.for("react.profiler")
  , sS = Symbol.for("react.provider")
  , oS = Symbol.for("react.context")
  , aS = Symbol.for("react.forward_ref")
  , lS = Symbol.for("react.suspense")
  , uS = Symbol.for("react.memo")
  , cS = Symbol.for("react.lazy")
  , Ph = Symbol.iterator;
function dS(e) {
    return e === null || typeof e != "object" ? null : (e = Ph && e[Ph] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ay = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ly = Object.assign
  , uy = {};
function $i(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = uy,
    this.updater = n || ay
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
$i.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function cy() {}
cy.prototype = $i.prototype;
function Ad(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = uy,
    this.updater = n || ay
}
var Rd = Ad.prototype = new cy;
Rd.constructor = Ad;
ly(Rd, $i.prototype);
Rd.isPureReactComponent = !0;
var kh = Array.isArray
  , dy = Object.prototype.hasOwnProperty
  , Md = {
    current: null
}
  , fy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function hy(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            dy.call(t, r) && !fy.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: oo,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Md.current
    }
}
function fS(e, t) {
    return {
        $$typeof: oo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Nd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oo
}
function hS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ah = /\/+/g;
function Ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hS("" + e.key) : t.toString(36)
}
function ea(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oo:
            case tS:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + Ql(o, 0) : r,
        kh(i) ? (n = "",
        e != null && (n = e.replace(Ah, "$&/") + "/"),
        ea(i, t, n, "", function(u) {
            return u
        })) : i != null && (Nd(i) && (i = fS(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Ah, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    kh(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Ql(s, a);
            o += ea(s, t, n, l, i)
        }
    else if (l = dS(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Ql(s, a++),
            o += ea(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function bo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ea(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function pS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ge = {
    current: null
}
  , ta = {
    transition: null
}
  , mS = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: ta,
    ReactCurrentOwner: Md
};
function py() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: bo,
    forEach: function(e, t, n) {
        bo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return bo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return bo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Nd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = $i;
X.Fragment = nS;
X.Profiler = iS;
X.PureComponent = Ad;
X.StrictMode = rS;
X.Suspense = lS;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mS;
X.act = py;
X.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ly({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Md.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            dy.call(t, l) && !fy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: oo,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: oS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: sS,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = hy;
X.createFactory = function(e) {
    var t = hy.bind(null, e);
    return t.type = e,
    t
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: aS,
        render: e
    }
}
;
X.isValidElement = Nd;
X.lazy = function(e) {
    return {
        $$typeof: cS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: pS
    }
}
;
X.memo = function(e, t) {
    return {
        $$typeof: uS,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
X.startTransition = function(e) {
    var t = ta.transition;
    ta.transition = {};
    try {
        e()
    } finally {
        ta.transition = t
    }
}
;
X.unstable_act = py;
X.useCallback = function(e, t) {
    return Ge.current.useCallback(e, t)
}
;
X.useContext = function(e) {
    return Ge.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return Ge.current.useDeferredValue(e)
}
;
X.useEffect = function(e, t) {
    return Ge.current.useEffect(e, t)
}
;
X.useId = function() {
    return Ge.current.useId()
}
;
X.useImperativeHandle = function(e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
}
;
X.useInsertionEffect = function(e, t) {
    return Ge.current.useInsertionEffect(e, t)
}
;
X.useLayoutEffect = function(e, t) {
    return Ge.current.useLayoutEffect(e, t)
}
;
X.useMemo = function(e, t) {
    return Ge.current.useMemo(e, t)
}
;
X.useReducer = function(e, t, n) {
    return Ge.current.useReducer(e, t, n)
}
;
X.useRef = function(e) {
    return Ge.current.useRef(e)
}
;
X.useState = function(e) {
    return Ge.current.useState(e)
}
;
X.useSyncExternalStore = function(e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
}
;
X.useTransition = function() {
    return Ge.current.useTransition()
}
;
X.version = "18.3.1";
oy.exports = X;
var w = oy.exports;
const L = iy(w)
  , my = eS({
    __proto__: null,
    default: L
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gS = w
  , yS = Symbol.for("react.element")
  , vS = Symbol.for("react.fragment")
  , xS = Object.prototype.hasOwnProperty
  , wS = gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , SS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function gy(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        xS.call(t, r) && !SS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: yS,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: wS.current
    }
}
ll.Fragment = vS;
ll.jsx = gy;
ll.jsxs = gy;
sy.exports = ll;
var S = sy.exports
  , yy = {
    exports: {}
}
  , dt = {}
  , vy = {
    exports: {}
}
  , xy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, R) {
        var I = k.length;
        k.push(R);
        e: for (; 0 < I; ) {
            var $ = I - 1 >>> 1
              , B = k[$];
            if (0 < i(B, R))
                k[$] = R,
                k[I] = B,
                I = $;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var R = k[0]
          , I = k.pop();
        if (I !== R) {
            k[0] = I;
            e: for (var $ = 0, B = k.length, Q = B >>> 1; $ < Q; ) {
                var q = 2 * ($ + 1) - 1
                  , xe = k[q]
                  , Le = q + 1
                  , te = k[Le];
                if (0 > i(xe, I))
                    Le < B && 0 > i(te, xe) ? (k[$] = te,
                    k[Le] = I,
                    $ = Le) : (k[$] = xe,
                    k[q] = I,
                    $ = q);
                else if (Le < B && 0 > i(te, I))
                    k[$] = te,
                    k[Le] = I,
                    $ = Le;
                else
                    break e
            }
        }
        return R
    }
    function i(k, R) {
        var I = k.sortIndex - R.sortIndex;
        return I !== 0 ? I : k.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , v = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(k) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= k)
                r(u),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = n(u)
        }
    }
    function E(k) {
        if (g = !1,
        y(k),
        !v)
            if (n(l) !== null)
                v = !0,
                z(C);
            else {
                var R = n(u);
                R !== null && H(E, R.startTime - k)
            }
    }
    function C(k, R) {
        v = !1,
        g && (g = !1,
        m(P),
        P = -1),
        h = !0;
        var I = f;
        try {
            for (y(R),
            d = n(l); d !== null && (!(d.expirationTime > R) || k && !V()); ) {
                var $ = d.callback;
                if (typeof $ == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var B = $(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof B == "function" ? d.callback = B : d === n(l) && r(l),
                    y(R)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var q = n(u);
                q !== null && H(E, q.startTime - R),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            f = I,
            h = !1
        }
    }
    var T = !1
      , b = null
      , P = -1
      , N = 5
      , A = -1;
    function V() {
        return !(e.unstable_now() - A < N)
    }
    function j() {
        if (b !== null) {
            var k = e.unstable_now();
            A = k;
            var R = !0;
            try {
                R = b(!0, k)
            } finally {
                R ? U() : (T = !1,
                b = null)
            }
        } else
            T = !1
    }
    var U;
    if (typeof p == "function")
        U = function() {
            p(j)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
          , W = O.port2;
        O.port1.onmessage = j,
        U = function() {
            W.postMessage(null)
        }
    } else
        U = function() {
            x(j, 0)
        }
        ;
    function z(k) {
        b = k,
        T || (T = !0,
        U())
    }
    function H(k, R) {
        P = x(function() {
            k(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || h || (v = !0,
        z(C))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var I = f;
        f = R;
        try {
            return k()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, R) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var I = f;
        f = k;
        try {
            return R()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, R, I) {
        var $ = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? $ + I : $) : I = $,
        k) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = I + B,
        k = {
            id: c++,
            callback: R,
            priorityLevel: k,
            startTime: I,
            expirationTime: B,
            sortIndex: -1
        },
        I > $ ? (k.sortIndex = I,
        t(u, k),
        n(l) === null && k === n(u) && (g ? (m(P),
        P = -1) : g = !0,
        H(E, I - $))) : (k.sortIndex = B,
        t(l, k),
        v || h || (v = !0,
        z(C))),
        k
    }
    ,
    e.unstable_shouldYield = V,
    e.unstable_wrapCallback = function(k) {
        var R = f;
        return function() {
            var I = f;
            f = R;
            try {
                return k.apply(this, arguments)
            } finally {
                f = I
            }
        }
    }
}
)(xy);
vy.exports = xy;
var ES = vy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CS = w
  , ct = ES;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var wy = new Set
  , Ls = {};
function Br(e, t) {
    Ni(e, t),
    Ni(e + "Capture", t)
}
function Ni(e, t) {
    for (Ls[e] = t,
    e = 0; e < t.length; e++)
        wy.add(t[e])
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ku = Object.prototype.hasOwnProperty
  , TS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Rh = {}
  , Mh = {};
function bS(e) {
    return Ku.call(Mh, e) ? !0 : Ku.call(Rh, e) ? !1 : TS.test(e) ? Mh[e] = !0 : (Rh[e] = !0,
    !1)
}
function PS(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function kS(e, t, n, r) {
    if (t === null || typeof t > "u" || PS(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Ye(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Ye(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Ye(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Ye(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Ye(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Ye(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Dd = /[\-:]([a-z])/g;
function Ld(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Dd, Ld);
    De[t] = new Ye(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Dd, Ld);
    De[t] = new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Dd, Ld);
    De[t] = new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Od(e, t, n, r) {
    var i = De.hasOwnProperty(t) ? De[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kS(t, n, i, r) && (n = null),
    r || i === null ? bS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Sn = CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Po = Symbol.for("react.element")
  , Jr = Symbol.for("react.portal")
  , ei = Symbol.for("react.fragment")
  , jd = Symbol.for("react.strict_mode")
  , Gu = Symbol.for("react.profiler")
  , Sy = Symbol.for("react.provider")
  , Ey = Symbol.for("react.context")
  , Id = Symbol.for("react.forward_ref")
  , Yu = Symbol.for("react.suspense")
  , Qu = Symbol.for("react.suspense_list")
  , Vd = Symbol.for("react.memo")
  , On = Symbol.for("react.lazy")
  , Cy = Symbol.for("react.offscreen")
  , Nh = Symbol.iterator;
function es(e) {
    return e === null || typeof e != "object" ? null : (e = Nh && e[Nh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, Xl;
function ds(e) {
    if (Xl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Xl = t && t[1] || ""
        }
    return `
` + Xl + e
}
var ql = !1;
function Zl(e, t) {
    if (!e || ql)
        return "";
    ql = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        ql = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ds(e) : ""
}
function AS(e) {
    switch (e.tag) {
    case 5:
        return ds(e.type);
    case 16:
        return ds("Lazy");
    case 13:
        return ds("Suspense");
    case 19:
        return ds("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Zl(e.type, !1),
        e;
    case 11:
        return e = Zl(e.type.render, !1),
        e;
    case 1:
        return e = Zl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Xu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ei:
        return "Fragment";
    case Jr:
        return "Portal";
    case Gu:
        return "Profiler";
    case jd:
        return "StrictMode";
    case Yu:
        return "Suspense";
    case Qu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ey:
            return (e.displayName || "Context") + ".Consumer";
        case Sy:
            return (e._context.displayName || "Context") + ".Provider";
        case Id:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Vd:
            return t = e.displayName || null,
            t !== null ? t : Xu(e.type) || "Memo";
        case On:
            t = e._payload,
            e = e._init;
            try {
                return Xu(e(t))
            } catch {}
        }
    return null
}
function RS(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Xu(t);
    case 8:
        return t === jd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function tr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ty(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function MS(e) {
    var t = Ty(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ko(e) {
    e._valueTracker || (e._valueTracker = MS(e))
}
function by(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ty(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ea(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function qu(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Dh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = tr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Py(e, t) {
    t = t.checked,
    t != null && Od(e, "checked", t, !1)
}
function Zu(e, t) {
    Py(e, t);
    var n = tr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ju(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ju(e, t.type, tr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Lh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ju(e, t, n) {
    (t !== "number" || Ea(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fs = Array.isArray;
function pi(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + tr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ec(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Oh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (fs(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: tr(n)
    }
}
function ky(e, t) {
    var n = tr(t.value)
      , r = tr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function jh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ay(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function tc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ay(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ao, Ry = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ao = Ao || document.createElement("div"),
        Ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ao.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Os(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ys = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , NS = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(e) {
    NS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ys[t] = ys[e]
    })
});
function My(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ys.hasOwnProperty(e) && ys[e] ? ("" + t).trim() : t + "px"
}
function Ny(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = My(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var DS = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function nc(e, t) {
    if (t) {
        if (DS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function rc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var ic = null;
function Fd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var sc = null
  , mi = null
  , gi = null;
function Ih(e) {
    if (e = uo(e)) {
        if (typeof sc != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = hl(t),
        sc(e.stateNode, e.type, t))
    }
}
function Dy(e) {
    mi ? gi ? gi.push(e) : gi = [e] : mi = e
}
function Ly() {
    if (mi) {
        var e = mi
          , t = gi;
        if (gi = mi = null,
        Ih(e),
        t)
            for (e = 0; e < t.length; e++)
                Ih(t[e])
    }
}
function Oy(e, t) {
    return e(t)
}
function jy() {}
var Jl = !1;
function Iy(e, t, n) {
    if (Jl)
        return e(t, n);
    Jl = !0;
    try {
        return Oy(e, t, n)
    } finally {
        Jl = !1,
        (mi !== null || gi !== null) && (jy(),
        Ly())
    }
}
function js(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = hl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var oc = !1;
if (mn)
    try {
        var ts = {};
        Object.defineProperty(ts, "passive", {
            get: function() {
                oc = !0
            }
        }),
        window.addEventListener("test", ts, ts),
        window.removeEventListener("test", ts, ts)
    } catch {
        oc = !1
    }
function LS(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var vs = !1
  , Ca = null
  , Ta = !1
  , ac = null
  , OS = {
    onError: function(e) {
        vs = !0,
        Ca = e
    }
};
function jS(e, t, n, r, i, s, o, a, l) {
    vs = !1,
    Ca = null,
    LS.apply(OS, arguments)
}
function IS(e, t, n, r, i, s, o, a, l) {
    if (jS.apply(this, arguments),
    vs) {
        if (vs) {
            var u = Ca;
            vs = !1,
            Ca = null
        } else
            throw Error(D(198));
        Ta || (Ta = !0,
        ac = u)
    }
}
function $r(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Vy(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Vh(e) {
    if ($r(e) !== e)
        throw Error(D(188))
}
function VS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = $r(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Vh(i),
                    e;
                if (s === r)
                    return Vh(i),
                    t;
                s = s.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function Fy(e) {
    return e = VS(e),
    e !== null ? _y(e) : null
}
function _y(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = _y(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var zy = ct.unstable_scheduleCallback
  , Fh = ct.unstable_cancelCallback
  , FS = ct.unstable_shouldYield
  , _S = ct.unstable_requestPaint
  , ye = ct.unstable_now
  , zS = ct.unstable_getCurrentPriorityLevel
  , _d = ct.unstable_ImmediatePriority
  , By = ct.unstable_UserBlockingPriority
  , ba = ct.unstable_NormalPriority
  , BS = ct.unstable_LowPriority
  , $y = ct.unstable_IdlePriority
  , ul = null
  , en = null;
function $S(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
        try {
            en.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : HS
  , US = Math.log
  , WS = Math.LN2;
function HS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (US(e) / WS | 0) | 0
}
var Ro = 64
  , Mo = 4194304;
function hs(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Pa(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = hs(a) : (s &= o,
        s !== 0 && (r = hs(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = hs(o) : s !== 0 && (r = hs(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Vt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function KS(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function GS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Vt(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = KS(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function lc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Uy() {
    var e = Ro;
    return Ro <<= 1,
    !(Ro & 4194240) && (Ro = 64),
    e
}
function eu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ao(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Vt(t),
    e[t] = n
}
function YS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Vt(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function zd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Vt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var ne = 0;
function Wy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Hy, Bd, Ky, Gy, Yy, uc = !1, No = [], Gn = null, Yn = null, Qn = null, Is = new Map, Vs = new Map, In = [], QS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _h(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Gn = null;
        break;
    case "dragenter":
    case "dragleave":
        Yn = null;
        break;
    case "mouseover":
    case "mouseout":
        Qn = null;
        break;
    case "pointerover":
    case "pointerout":
        Is.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Vs.delete(t.pointerId)
    }
}
function ns(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = uo(t),
    t !== null && Bd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function XS(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Gn = ns(Gn, e, t, n, r, i),
        !0;
    case "dragenter":
        return Yn = ns(Yn, e, t, n, r, i),
        !0;
    case "mouseover":
        return Qn = ns(Qn, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Is.set(s, ns(Is.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Vs.set(s, ns(Vs.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Qy(e) {
    var t = wr(e.target);
    if (t !== null) {
        var n = $r(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Vy(n),
                t !== null) {
                    e.blockedOn = t,
                    Yy(e.priority, function() {
                        Ky(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function na(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = cc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ic = r,
            n.target.dispatchEvent(r),
            ic = null
        } else
            return t = uo(n),
            t !== null && Bd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function zh(e, t, n) {
    na(e) && n.delete(t)
}
function qS() {
    uc = !1,
    Gn !== null && na(Gn) && (Gn = null),
    Yn !== null && na(Yn) && (Yn = null),
    Qn !== null && na(Qn) && (Qn = null),
    Is.forEach(zh),
    Vs.forEach(zh)
}
function rs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    uc || (uc = !0,
    ct.unstable_scheduleCallback(ct.unstable_NormalPriority, qS)))
}
function Fs(e) {
    function t(i) {
        return rs(i, e)
    }
    if (0 < No.length) {
        rs(No[0], e);
        for (var n = 1; n < No.length; n++) {
            var r = No[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Gn !== null && rs(Gn, e),
    Yn !== null && rs(Yn, e),
    Qn !== null && rs(Qn, e),
    Is.forEach(t),
    Vs.forEach(t),
    n = 0; n < In.length; n++)
        r = In[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && (n = In[0],
    n.blockedOn === null); )
        Qy(n),
        n.blockedOn === null && In.shift()
}
var yi = Sn.ReactCurrentBatchConfig
  , ka = !0;
function ZS(e, t, n, r) {
    var i = ne
      , s = yi.transition;
    yi.transition = null;
    try {
        ne = 1,
        $d(e, t, n, r)
    } finally {
        ne = i,
        yi.transition = s
    }
}
function JS(e, t, n, r) {
    var i = ne
      , s = yi.transition;
    yi.transition = null;
    try {
        ne = 4,
        $d(e, t, n, r)
    } finally {
        ne = i,
        yi.transition = s
    }
}
function $d(e, t, n, r) {
    if (ka) {
        var i = cc(e, t, n, r);
        if (i === null)
            cu(e, t, r, Aa, n),
            _h(e, r);
        else if (XS(i, e, t, n, r))
            r.stopPropagation();
        else if (_h(e, r),
        t & 4 && -1 < QS.indexOf(e)) {
            for (; i !== null; ) {
                var s = uo(i);
                if (s !== null && Hy(s),
                s = cc(e, t, n, r),
                s === null && cu(e, t, r, Aa, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            cu(e, t, r, null, n)
    }
}
var Aa = null;
function cc(e, t, n, r) {
    if (Aa = null,
    e = Fd(r),
    e = wr(e),
    e !== null)
        if (t = $r(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Vy(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Aa = e,
    null
}
function Xy(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (zS()) {
        case _d:
            return 1;
        case By:
            return 4;
        case ba:
        case BS:
            return 16;
        case $y:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Un = null
  , Ud = null
  , ra = null;
function qy() {
    if (ra)
        return ra;
    var e, t = Ud, n = t.length, r, i = "value"in Un ? Un.value : Un.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return ra = i.slice(e, 1 < r ? 1 - r : void 0)
}
function ia(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Do() {
    return !0
}
function Bh() {
    return !1
}
function ft(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Do : Bh,
        this.isPropagationStopped = Bh,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Do)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Do)
        },
        persist: function() {},
        isPersistent: Do
    }),
    t
}
var Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Wd = ft(Ui), lo = pe({}, Ui, {
    view: 0,
    detail: 0
}), eE = ft(lo), tu, nu, is, cl = pe({}, lo, {
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
    getModifierState: Hd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== is && (is && e.type === "mousemove" ? (tu = e.screenX - is.screenX,
        nu = e.screenY - is.screenY) : nu = tu = 0,
        is = e),
        tu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : nu
    }
}), $h = ft(cl), tE = pe({}, cl, {
    dataTransfer: 0
}), nE = ft(tE), rE = pe({}, lo, {
    relatedTarget: 0
}), ru = ft(rE), iE = pe({}, Ui, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), sE = ft(iE), oE = pe({}, Ui, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), aE = ft(oE), lE = pe({}, Ui, {
    data: 0
}), Uh = ft(lE), uE = {
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
}, cE = {
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
}, dE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function fE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dE[e]) ? !!t[e] : !1
}
function Hd() {
    return fE
}
var hE = pe({}, lo, {
    key: function(e) {
        if (e.key) {
            var t = uE[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ia(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cE[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hd,
    charCode: function(e) {
        return e.type === "keypress" ? ia(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ia(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , pE = ft(hE)
  , mE = pe({}, cl, {
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
})
  , Wh = ft(mE)
  , gE = pe({}, lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hd
})
  , yE = ft(gE)
  , vE = pe({}, Ui, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , xE = ft(vE)
  , wE = pe({}, cl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , SE = ft(wE)
  , EE = [9, 13, 27, 32]
  , Kd = mn && "CompositionEvent"in window
  , xs = null;
mn && "documentMode"in document && (xs = document.documentMode);
var CE = mn && "TextEvent"in window && !xs
  , Zy = mn && (!Kd || xs && 8 < xs && 11 >= xs)
  , Hh = " "
  , Kh = !1;
function Jy(e, t) {
    switch (e) {
    case "keyup":
        return EE.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ev(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ti = !1;
function TE(e, t) {
    switch (e) {
    case "compositionend":
        return ev(t);
    case "keypress":
        return t.which !== 32 ? null : (Kh = !0,
        Hh);
    case "textInput":
        return e = t.data,
        e === Hh && Kh ? null : e;
    default:
        return null
    }
}
function bE(e, t) {
    if (ti)
        return e === "compositionend" || !Kd && Jy(e, t) ? (e = qy(),
        ra = Ud = Un = null,
        ti = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Zy && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var PE = {
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
function Gh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!PE[e.type] : t === "textarea"
}
function tv(e, t, n, r) {
    Dy(r),
    t = Ra(t, "onChange"),
    0 < t.length && (n = new Wd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ws = null
  , _s = null;
function kE(e) {
    fv(e, 0)
}
function dl(e) {
    var t = ii(e);
    if (by(t))
        return e
}
function AE(e, t) {
    if (e === "change")
        return t
}
var nv = !1;
if (mn) {
    var iu;
    if (mn) {
        var su = "oninput"in document;
        if (!su) {
            var Yh = document.createElement("div");
            Yh.setAttribute("oninput", "return;"),
            su = typeof Yh.oninput == "function"
        }
        iu = su
    } else
        iu = !1;
    nv = iu && (!document.documentMode || 9 < document.documentMode)
}
function Qh() {
    ws && (ws.detachEvent("onpropertychange", rv),
    _s = ws = null)
}
function rv(e) {
    if (e.propertyName === "value" && dl(_s)) {
        var t = [];
        tv(t, _s, e, Fd(e)),
        Iy(kE, t)
    }
}
function RE(e, t, n) {
    e === "focusin" ? (Qh(),
    ws = t,
    _s = n,
    ws.attachEvent("onpropertychange", rv)) : e === "focusout" && Qh()
}
function ME(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return dl(_s)
}
function NE(e, t) {
    if (e === "click")
        return dl(t)
}
function DE(e, t) {
    if (e === "input" || e === "change")
        return dl(t)
}
function LE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var zt = typeof Object.is == "function" ? Object.is : LE;
function zs(e, t) {
    if (zt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ku.call(t, i) || !zt(e[i], t[i]))
            return !1
    }
    return !0
}
function Xh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function qh(e, t) {
    var n = Xh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Xh(n)
    }
}
function iv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? iv(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function sv() {
    for (var e = window, t = Ea(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ea(e.document)
    }
    return t
}
function Gd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function OE(e) {
    var t = sv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && iv(n.ownerDocument.documentElement, n)) {
        if (r !== null && Gd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = qh(n, s);
                var o = qh(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var jE = mn && "documentMode"in document && 11 >= document.documentMode
  , ni = null
  , dc = null
  , Ss = null
  , fc = !1;
function Zh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fc || ni == null || ni !== Ea(r) || (r = ni,
    "selectionStart"in r && Gd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ss && zs(Ss, r) || (Ss = r,
    r = Ra(dc, "onSelect"),
    0 < r.length && (t = new Wd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ni)))
}
function Lo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ri = {
    animationend: Lo("Animation", "AnimationEnd"),
    animationiteration: Lo("Animation", "AnimationIteration"),
    animationstart: Lo("Animation", "AnimationStart"),
    transitionend: Lo("Transition", "TransitionEnd")
}
  , ou = {}
  , ov = {};
mn && (ov = document.createElement("div").style,
"AnimationEvent"in window || (delete ri.animationend.animation,
delete ri.animationiteration.animation,
delete ri.animationstart.animation),
"TransitionEvent"in window || delete ri.transitionend.transition);
function fl(e) {
    if (ou[e])
        return ou[e];
    if (!ri[e])
        return e;
    var t = ri[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ov)
            return ou[e] = t[n];
    return e
}
var av = fl("animationend")
  , lv = fl("animationiteration")
  , uv = fl("animationstart")
  , cv = fl("transitionend")
  , dv = new Map
  , Jh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ur(e, t) {
    dv.set(e, t),
    Br(t, [e])
}
for (var au = 0; au < Jh.length; au++) {
    var lu = Jh[au]
      , IE = lu.toLowerCase()
      , VE = lu[0].toUpperCase() + lu.slice(1);
    ur(IE, "on" + VE)
}
ur(av, "onAnimationEnd");
ur(lv, "onAnimationIteration");
ur(uv, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(cv, "onTransitionEnd");
Ni("onMouseEnter", ["mouseout", "mouseover"]);
Ni("onMouseLeave", ["mouseout", "mouseover"]);
Ni("onPointerEnter", ["pointerout", "pointerover"]);
Ni("onPointerLeave", ["pointerout", "pointerover"]);
Br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , FE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
function ep(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    IS(r, t, void 0, e),
    e.currentTarget = null
}
function fv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    ep(i, a, u),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    ep(i, a, u),
                    s = l
                }
        }
    }
    if (Ta)
        throw e = ac,
        Ta = !1,
        ac = null,
        e
}
function oe(e, t) {
    var n = t[yc];
    n === void 0 && (n = t[yc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (hv(t, e, 2, !1),
    n.add(r))
}
function uu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    hv(n, e, r, t)
}
var Oo = "_reactListening" + Math.random().toString(36).slice(2);
function Bs(e) {
    if (!e[Oo]) {
        e[Oo] = !0,
        wy.forEach(function(n) {
            n !== "selectionchange" && (FE.has(n) || uu(n, !1, e),
            uu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Oo] || (t[Oo] = !0,
        uu("selectionchange", !1, t))
    }
}
function hv(e, t, n, r) {
    switch (Xy(t)) {
    case 1:
        var i = ZS;
        break;
    case 4:
        i = JS;
        break;
    default:
        i = $d
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !oc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function cu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = wr(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Iy(function() {
        var u = s
          , c = Fd(n)
          , d = [];
        e: {
            var f = dv.get(e);
            if (f !== void 0) {
                var h = Wd
                  , v = e;
                switch (e) {
                case "keypress":
                    if (ia(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = pE;
                    break;
                case "focusin":
                    v = "focus",
                    h = ru;
                    break;
                case "focusout":
                    v = "blur",
                    h = ru;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = ru;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = $h;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = nE;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = yE;
                    break;
                case av:
                case lv:
                case uv:
                    h = sE;
                    break;
                case cv:
                    h = xE;
                    break;
                case "scroll":
                    h = eE;
                    break;
                case "wheel":
                    h = SE;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = aE;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Wh
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , m = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var E = y.stateNode;
                    if (y.tag === 5 && E !== null && (y = E,
                    m !== null && (E = js(p, m),
                    E != null && g.push($s(p, E, y)))),
                    x)
                        break;
                    p = p.return
                }
                0 < g.length && (f = new h(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== ic && (v = n.relatedTarget || n.fromElement) && (wr(v) || v[gn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (v = n.relatedTarget || n.toElement,
                h = u,
                v = v ? wr(v) : null,
                v !== null && (x = $r(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null,
                v = u),
                h !== v)) {
                    if (g = $h,
                    E = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Wh,
                    E = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    x = h == null ? f : ii(h),
                    y = v == null ? f : ii(v),
                    f = new g(E,p + "leave",h,n,c),
                    f.target = x,
                    f.relatedTarget = y,
                    E = null,
                    wr(c) === u && (g = new g(m,p + "enter",v,n,c),
                    g.target = y,
                    g.relatedTarget = x,
                    E = g),
                    x = E,
                    h && v)
                        t: {
                            for (g = h,
                            m = v,
                            p = 0,
                            y = g; y; y = Xr(y))
                                p++;
                            for (y = 0,
                            E = m; E; E = Xr(E))
                                y++;
                            for (; 0 < p - y; )
                                g = Xr(g),
                                p--;
                            for (; 0 < y - p; )
                                m = Xr(m),
                                y--;
                            for (; p--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = Xr(g),
                                m = Xr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && tp(d, f, h, g, !1),
                    v !== null && x !== null && tp(d, x, v, g, !0)
                }
            }
            e: {
                if (f = u ? ii(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = AE;
                else if (Gh(f))
                    if (nv)
                        C = DE;
                    else {
                        C = ME;
                        var T = RE
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = NE);
                if (C && (C = C(e, u))) {
                    tv(d, C, n, c);
                    break e
                }
                T && T(e, f, u),
                e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && Ju(f, "number", f.value)
            }
            switch (T = u ? ii(u) : window,
            e) {
            case "focusin":
                (Gh(T) || T.contentEditable === "true") && (ni = T,
                dc = u,
                Ss = null);
                break;
            case "focusout":
                Ss = dc = ni = null;
                break;
            case "mousedown":
                fc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                fc = !1,
                Zh(d, n, c);
                break;
            case "selectionchange":
                if (jE)
                    break;
            case "keydown":
            case "keyup":
                Zh(d, n, c)
            }
            var b;
            if (Kd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                ti ? Jy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Zy && n.locale !== "ko" && (ti || P !== "onCompositionStart" ? P === "onCompositionEnd" && ti && (b = qy()) : (Un = c,
            Ud = "value"in Un ? Un.value : Un.textContent,
            ti = !0)),
            T = Ra(u, P),
            0 < T.length && (P = new Uh(P,e,null,n,c),
            d.push({
                event: P,
                listeners: T
            }),
            b ? P.data = b : (b = ev(n),
            b !== null && (P.data = b)))),
            (b = CE ? TE(e, n) : bE(e, n)) && (u = Ra(u, "onBeforeInput"),
            0 < u.length && (c = new Uh("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = b))
        }
        fv(d, t)
    })
}
function $s(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ra(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = js(e, n),
        s != null && r.unshift($s(e, s, i)),
        s = js(e, t),
        s != null && r.push($s(e, s, i))),
        e = e.return
    }
    return r
}
function Xr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function tp(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = js(n, s),
        l != null && o.unshift($s(n, l, a))) : i || (l = js(n, s),
        l != null && o.push($s(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var _E = /\r\n?/g
  , zE = /\u0000|\uFFFD/g;
function np(e) {
    return (typeof e == "string" ? e : "" + e).replace(_E, `
`).replace(zE, "")
}
function jo(e, t, n) {
    if (t = np(t),
    np(e) !== t && n)
        throw Error(D(425))
}
function Ma() {}
var hc = null
  , pc = null;
function mc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gc = typeof setTimeout == "function" ? setTimeout : void 0
  , BE = typeof clearTimeout == "function" ? clearTimeout : void 0
  , rp = typeof Promise == "function" ? Promise : void 0
  , $E = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp < "u" ? function(e) {
    return rp.resolve(null).then(e).catch(UE)
}
: gc;
function UE(e) {
    setTimeout(function() {
        throw e
    })
}
function du(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Fs(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Fs(t)
}
function Xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ip(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wi = Math.random().toString(36).slice(2)
  , Zt = "__reactFiber$" + Wi
  , Us = "__reactProps$" + Wi
  , gn = "__reactContainer$" + Wi
  , yc = "__reactEvents$" + Wi
  , WE = "__reactListeners$" + Wi
  , HE = "__reactHandles$" + Wi;
function wr(e) {
    var t = e[Zt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[gn] || n[Zt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ip(e); e !== null; ) {
                    if (n = e[Zt])
                        return n;
                    e = ip(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function uo(e) {
    return e = e[Zt] || e[gn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ii(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function hl(e) {
    return e[Us] || null
}
var vc = []
  , si = -1;
function cr(e) {
    return {
        current: e
    }
}
function le(e) {
    0 > si || (e.current = vc[si],
    vc[si] = null,
    si--)
}
function ie(e, t) {
    si++,
    vc[si] = e.current,
    e.current = t
}
var nr = {}
  , _e = cr(nr)
  , Ze = cr(!1)
  , jr = nr;
function Di(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return nr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Je(e) {
    return e = e.childContextTypes,
    e != null
}
function Na() {
    le(Ze),
    le(_e)
}
function sp(e, t, n) {
    if (_e.current !== nr)
        throw Error(D(168));
    ie(_e, t),
    ie(Ze, n)
}
function pv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(D(108, RS(e) || "Unknown", i));
    return pe({}, n, r)
}
function Da(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nr,
    jr = _e.current,
    ie(_e, e),
    ie(Ze, Ze.current),
    !0
}
function op(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = pv(e, t, jr),
    r.__reactInternalMemoizedMergedChildContext = e,
    le(Ze),
    le(_e),
    ie(_e, e)) : le(Ze),
    ie(Ze, n)
}
var cn = null
  , pl = !1
  , fu = !1;
function mv(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function KE(e) {
    pl = !0,
    mv(e)
}
function dr() {
    if (!fu && cn !== null) {
        fu = !0;
        var e = 0
          , t = ne;
        try {
            var n = cn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            cn = null,
            pl = !1
        } catch (i) {
            throw cn !== null && (cn = cn.slice(e + 1)),
            zy(_d, dr),
            i
        } finally {
            ne = t,
            fu = !1
        }
    }
    return null
}
var oi = []
  , ai = 0
  , La = null
  , Oa = 0
  , mt = []
  , gt = 0
  , Ir = null
  , fn = 1
  , hn = "";
function yr(e, t) {
    oi[ai++] = Oa,
    oi[ai++] = La,
    La = e,
    Oa = t
}
function gv(e, t, n) {
    mt[gt++] = fn,
    mt[gt++] = hn,
    mt[gt++] = Ir,
    Ir = e;
    var r = fn;
    e = hn;
    var i = 32 - Vt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Vt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        fn = 1 << 32 - Vt(t) + i | n << i | r,
        hn = s + e
    } else
        fn = 1 << s | n << i | r,
        hn = e
}
function Yd(e) {
    e.return !== null && (yr(e, 1),
    gv(e, 1, 0))
}
function Qd(e) {
    for (; e === La; )
        La = oi[--ai],
        oi[ai] = null,
        Oa = oi[--ai],
        oi[ai] = null;
    for (; e === Ir; )
        Ir = mt[--gt],
        mt[gt] = null,
        hn = mt[--gt],
        mt[gt] = null,
        fn = mt[--gt],
        mt[gt] = null
}
var lt = null
  , at = null
  , ce = !1
  , jt = null;
function yv(e, t) {
    var n = yt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ap(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        at = Xn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        at = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Ir !== null ? {
            id: fn,
            overflow: hn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = yt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        lt = e,
        at = null,
        !0) : !1;
    default:
        return !1
    }
}
function xc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wc(e) {
    if (ce) {
        var t = at;
        if (t) {
            var n = t;
            if (!ap(e, t)) {
                if (xc(e))
                    throw Error(D(418));
                t = Xn(n.nextSibling);
                var r = lt;
                t && ap(e, t) ? yv(r, n) : (e.flags = e.flags & -4097 | 2,
                ce = !1,
                lt = e)
            }
        } else {
            if (xc(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            ce = !1,
            lt = e
        }
    }
}
function lp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    lt = e
}
function Io(e) {
    if (e !== lt)
        return !1;
    if (!ce)
        return lp(e),
        ce = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !mc(e.type, e.memoizedProps)),
    t && (t = at)) {
        if (xc(e))
            throw vv(),
            Error(D(418));
        for (; t; )
            yv(e, t),
            t = Xn(t.nextSibling)
    }
    if (lp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            at = Xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            at = null
        }
    } else
        at = lt ? Xn(e.stateNode.nextSibling) : null;
    return !0
}
function vv() {
    for (var e = at; e; )
        e = Xn(e.nextSibling)
}
function Li() {
    at = lt = null,
    ce = !1
}
function Xd(e) {
    jt === null ? jt = [e] : jt.push(e)
}
var GE = Sn.ReactCurrentBatchConfig;
function ss(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Vo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function up(e) {
    var t = e._init;
    return t(e._payload)
}
function xv(e) {
    function t(m, p) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [p],
            m.flags |= 16) : y.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = er(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, y) {
        return m.index = y,
        e ? (y = m.alternate,
        y !== null ? (y = y.index,
        y < p ? (m.flags |= 2,
        p) : y) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, y, E) {
        return p === null || p.tag !== 6 ? (p = xu(y, m.mode, E),
        p.return = m,
        p) : (p = i(p, y),
        p.return = m,
        p)
    }
    function l(m, p, y, E) {
        var C = y.type;
        return C === ei ? c(m, p, y.props.children, E, y.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && up(C) === p.type) ? (E = i(p, y.props),
        E.ref = ss(m, p, y),
        E.return = m,
        E) : (E = da(y.type, y.key, y.props, null, m.mode, E),
        E.ref = ss(m, p, y),
        E.return = m,
        E)
    }
    function u(m, p, y, E) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = wu(y, m.mode, E),
        p.return = m,
        p) : (p = i(p, y.children || []),
        p.return = m,
        p)
    }
    function c(m, p, y, E, C) {
        return p === null || p.tag !== 7 ? (p = Dr(y, m.mode, E, C),
        p.return = m,
        p) : (p = i(p, y),
        p.return = m,
        p)
    }
    function d(m, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = xu("" + p, m.mode, y),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Po:
                return y = da(p.type, p.key, p.props, null, m.mode, y),
                y.ref = ss(m, null, p),
                y.return = m,
                y;
            case Jr:
                return p = wu(p, m.mode, y),
                p.return = m,
                p;
            case On:
                var E = p._init;
                return d(m, E(p._payload), y)
            }
            if (fs(p) || es(p))
                return p = Dr(p, m.mode, y, null),
                p.return = m,
                p;
            Vo(m, p)
        }
        return null
    }
    function f(m, p, y, E) {
        var C = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return C !== null ? null : a(m, p, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Po:
                return y.key === C ? l(m, p, y, E) : null;
            case Jr:
                return y.key === C ? u(m, p, y, E) : null;
            case On:
                return C = y._init,
                f(m, p, C(y._payload), E)
            }
            if (fs(y) || es(y))
                return C !== null ? null : c(m, p, y, E, null);
            Vo(m, y)
        }
        return null
    }
    function h(m, p, y, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return m = m.get(y) || null,
            a(p, m, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case Po:
                return m = m.get(E.key === null ? y : E.key) || null,
                l(p, m, E, C);
            case Jr:
                return m = m.get(E.key === null ? y : E.key) || null,
                u(p, m, E, C);
            case On:
                var T = E._init;
                return h(m, p, y, T(E._payload), C)
            }
            if (fs(E) || es(E))
                return m = m.get(y) || null,
                c(p, m, E, C, null);
            Vo(p, E)
        }
        return null
    }
    function v(m, p, y, E) {
        for (var C = null, T = null, b = p, P = p = 0, N = null; b !== null && P < y.length; P++) {
            b.index > P ? (N = b,
            b = null) : N = b.sibling;
            var A = f(m, b, y[P], E);
            if (A === null) {
                b === null && (b = N);
                break
            }
            e && b && A.alternate === null && t(m, b),
            p = s(A, p, P),
            T === null ? C = A : T.sibling = A,
            T = A,
            b = N
        }
        if (P === y.length)
            return n(m, b),
            ce && yr(m, P),
            C;
        if (b === null) {
            for (; P < y.length; P++)
                b = d(m, y[P], E),
                b !== null && (p = s(b, p, P),
                T === null ? C = b : T.sibling = b,
                T = b);
            return ce && yr(m, P),
            C
        }
        for (b = r(m, b); P < y.length; P++)
            N = h(b, m, P, y[P], E),
            N !== null && (e && N.alternate !== null && b.delete(N.key === null ? P : N.key),
            p = s(N, p, P),
            T === null ? C = N : T.sibling = N,
            T = N);
        return e && b.forEach(function(V) {
            return t(m, V)
        }),
        ce && yr(m, P),
        C
    }
    function g(m, p, y, E) {
        var C = es(y);
        if (typeof C != "function")
            throw Error(D(150));
        if (y = C.call(y),
        y == null)
            throw Error(D(151));
        for (var T = C = null, b = p, P = p = 0, N = null, A = y.next(); b !== null && !A.done; P++,
        A = y.next()) {
            b.index > P ? (N = b,
            b = null) : N = b.sibling;
            var V = f(m, b, A.value, E);
            if (V === null) {
                b === null && (b = N);
                break
            }
            e && b && V.alternate === null && t(m, b),
            p = s(V, p, P),
            T === null ? C = V : T.sibling = V,
            T = V,
            b = N
        }
        if (A.done)
            return n(m, b),
            ce && yr(m, P),
            C;
        if (b === null) {
            for (; !A.done; P++,
            A = y.next())
                A = d(m, A.value, E),
                A !== null && (p = s(A, p, P),
                T === null ? C = A : T.sibling = A,
                T = A);
            return ce && yr(m, P),
            C
        }
        for (b = r(m, b); !A.done; P++,
        A = y.next())
            A = h(b, m, P, A.value, E),
            A !== null && (e && A.alternate !== null && b.delete(A.key === null ? P : A.key),
            p = s(A, p, P),
            T === null ? C = A : T.sibling = A,
            T = A);
        return e && b.forEach(function(j) {
            return t(m, j)
        }),
        ce && yr(m, P),
        C
    }
    function x(m, p, y, E) {
        if (typeof y == "object" && y !== null && y.type === ei && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Po:
                e: {
                    for (var C = y.key, T = p; T !== null; ) {
                        if (T.key === C) {
                            if (C = y.type,
                            C === ei) {
                                if (T.tag === 7) {
                                    n(m, T.sibling),
                                    p = i(T, y.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && up(C) === T.type) {
                                n(m, T.sibling),
                                p = i(T, y.props),
                                p.ref = ss(m, T, y),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, T);
                            break
                        } else
                            t(m, T);
                        T = T.sibling
                    }
                    y.type === ei ? (p = Dr(y.props.children, m.mode, E, y.key),
                    p.return = m,
                    m = p) : (E = da(y.type, y.key, y.props, null, m.mode, E),
                    E.ref = ss(m, p, y),
                    E.return = m,
                    m = E)
                }
                return o(m);
            case Jr:
                e: {
                    for (T = y.key; p !== null; ) {
                        if (p.key === T)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(m, p.sibling),
                                p = i(p, y.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = wu(y, m.mode, E),
                    p.return = m,
                    m = p
                }
                return o(m);
            case On:
                return T = y._init,
                x(m, p, T(y._payload), E)
            }
            if (fs(y))
                return v(m, p, y, E);
            if (es(y))
                return g(m, p, y, E);
            Vo(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, y),
        p.return = m,
        m = p) : (n(m, p),
        p = xu(y, m.mode, E),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return x
}
var Oi = xv(!0)
  , wv = xv(!1)
  , ja = cr(null)
  , Ia = null
  , li = null
  , qd = null;
function Zd() {
    qd = li = Ia = null
}
function Jd(e) {
    var t = ja.current;
    le(ja),
    e._currentValue = t
}
function Sc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function vi(e, t) {
    Ia = e,
    qd = li = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0),
    e.firstContext = null)
}
function wt(e) {
    var t = e._currentValue;
    if (qd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        li === null) {
            if (Ia === null)
                throw Error(D(308));
            li = e,
            Ia.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            li = li.next = e;
    return t
}
var Sr = null;
function ef(e) {
    Sr === null ? Sr = [e] : Sr.push(e)
}
function Sv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ef(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    yn(e, r)
}
function yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var jn = !1;
function tf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ev(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function pn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    J & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        yn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ef(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    yn(e, n)
}
function sa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        zd(e, n)
    }
}
function cp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Va(e, t, n, r) {
    var i = e.updateQueue;
    jn = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? s = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                      , g = a;
                    switch (f = t,
                    h = n,
                    g.tag) {
                    case 1:
                        if (v = g.payload,
                        typeof v == "function") {
                            d = v.call(h, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = g.payload,
                        f = typeof v == "function" ? v.call(h, d, f) : v,
                        f == null)
                            break e;
                        d = pe({}, d, f);
                        break e;
                    case 2:
                        jn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Fr |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function dp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(D(191, i));
                i.call(r)
            }
        }
}
var co = {}
  , tn = cr(co)
  , Ws = cr(co)
  , Hs = cr(co);
function Er(e) {
    if (e === co)
        throw Error(D(174));
    return e
}
function nf(e, t) {
    switch (ie(Hs, t),
    ie(Ws, e),
    ie(tn, co),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : tc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = tc(t, e)
    }
    le(tn),
    ie(tn, t)
}
function ji() {
    le(tn),
    le(Ws),
    le(Hs)
}
function Cv(e) {
    Er(Hs.current);
    var t = Er(tn.current)
      , n = tc(t, e.type);
    t !== n && (ie(Ws, e),
    ie(tn, n))
}
function rf(e) {
    Ws.current === e && (le(tn),
    le(Ws))
}
var fe = cr(0);
function Fa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var hu = [];
function sf() {
    for (var e = 0; e < hu.length; e++)
        hu[e]._workInProgressVersionPrimary = null;
    hu.length = 0
}
var oa = Sn.ReactCurrentDispatcher
  , pu = Sn.ReactCurrentBatchConfig
  , Vr = 0
  , he = null
  , Ce = null
  , Ae = null
  , _a = !1
  , Es = !1
  , Ks = 0
  , YE = 0;
function je() {
    throw Error(D(321))
}
function of(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!zt(e[n], t[n]))
            return !1;
    return !0
}
function af(e, t, n, r, i, s) {
    if (Vr = s,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    oa.current = e === null || e.memoizedState === null ? ZE : JE,
    e = n(r, i),
    Es) {
        s = 0;
        do {
            if (Es = !1,
            Ks = 0,
            25 <= s)
                throw Error(D(301));
            s += 1,
            Ae = Ce = null,
            t.updateQueue = null,
            oa.current = eC,
            e = n(r, i)
        } while (Es)
    }
    if (oa.current = za,
    t = Ce !== null && Ce.next !== null,
    Vr = 0,
    Ae = Ce = he = null,
    _a = !1,
    t)
        throw Error(D(300));
    return e
}
function lf() {
    var e = Ks !== 0;
    return Ks = 0,
    e
}
function Kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ae === null ? he.memoizedState = Ae = e : Ae = Ae.next = e,
    Ae
}
function St() {
    if (Ce === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ce.next;
    var t = Ae === null ? he.memoizedState : Ae.next;
    if (t !== null)
        Ae = t,
        Ce = e;
    else {
        if (e === null)
            throw Error(D(310));
        Ce = e,
        e = {
            memoizedState: Ce.memoizedState,
            baseState: Ce.baseState,
            baseQueue: Ce.baseQueue,
            queue: Ce.queue,
            next: null
        },
        Ae === null ? he.memoizedState = Ae = e : Ae = Ae.next = e
    }
    return Ae
}
function Gs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function mu(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Ce
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((Vr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                he.lanes |= c,
                Fr |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a,
        zt(r, t.memoizedState) || (qe = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            he.lanes |= s,
            Fr |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function gu(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        zt(s, t.memoizedState) || (qe = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Tv() {}
function bv(e, t) {
    var n = he
      , r = St()
      , i = t()
      , s = !zt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    qe = !0),
    r = r.queue,
    uf(Av.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Ae !== null && Ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ys(9, kv.bind(null, n, r, i, t), void 0, null),
        Re === null)
            throw Error(D(349));
        Vr & 30 || Pv(n, t, i)
    }
    return i
}
function Pv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function kv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Rv(t) && Mv(e)
}
function Av(e, t, n) {
    return n(function() {
        Rv(t) && Mv(e)
    })
}
function Rv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !zt(e, n)
    } catch {
        return !0
    }
}
function Mv(e) {
    var t = yn(e, 1);
    t !== null && Ft(t, e, 1, -1)
}
function fp(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = qE.bind(null, he, e),
    [t.memoizedState, e]
}
function Ys(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Nv() {
    return St().memoizedState
}
function aa(e, t, n, r) {
    var i = Kt();
    he.flags |= e,
    i.memoizedState = Ys(1 | t, n, void 0, r === void 0 ? null : r)
}
function ml(e, t, n, r) {
    var i = St();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ce !== null) {
        var o = Ce.memoizedState;
        if (s = o.destroy,
        r !== null && of(r, o.deps)) {
            i.memoizedState = Ys(t, n, s, r);
            return
        }
    }
    he.flags |= e,
    i.memoizedState = Ys(1 | t, n, s, r)
}
function hp(e, t) {
    return aa(8390656, 8, e, t)
}
function uf(e, t) {
    return ml(2048, 8, e, t)
}
function Dv(e, t) {
    return ml(4, 2, e, t)
}
function Lv(e, t) {
    return ml(4, 4, e, t)
}
function Ov(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function jv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ml(4, 4, Ov.bind(null, t, e), n)
}
function cf() {}
function Iv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && of(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Vv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && of(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Fv(e, t, n) {
    return Vr & 21 ? (zt(n, t) || (n = Uy(),
    he.lanes |= n,
    Fr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    qe = !0),
    e.memoizedState = n)
}
function QE(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = pu.transition;
    pu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        pu.transition = r
    }
}
function _v() {
    return St().memoizedState
}
function XE(e, t, n) {
    var r = Jn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    zv(e))
        Bv(t, n);
    else if (n = Sv(e, t, n, r),
    n !== null) {
        var i = He();
        Ft(n, e, r, i),
        $v(n, t, r)
    }
}
function qE(e, t, n) {
    var r = Jn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (zv(e))
        Bv(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                zt(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    ef(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Sv(e, t, i, r),
        n !== null && (i = He(),
        Ft(n, e, r, i),
        $v(n, t, r))
    }
}
function zv(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function Bv(e, t) {
    Es = _a = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function $v(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        zd(e, n)
    }
}
var za = {
    readContext: wt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1
}
  , ZE = {
    readContext: wt,
    useCallback: function(e, t) {
        return Kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: wt,
    useEffect: hp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        aa(4194308, 4, Ov.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return aa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return aa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Kt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = XE.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: fp,
    useDebugValue: cf,
    useDeferredValue: function(e) {
        return Kt().memoizedState = e
    },
    useTransition: function() {
        var e = fp(!1)
          , t = e[0];
        return e = QE.bind(null, e[1]),
        Kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , i = Kt();
        if (ce) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            Re === null)
                throw Error(D(349));
            Vr & 30 || Pv(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        hp(Av.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ys(9, kv.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Kt()
          , t = Re.identifierPrefix;
        if (ce) {
            var n = hn
              , r = fn;
            n = (r & ~(1 << 32 - Vt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ks++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = YE++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , JE = {
    readContext: wt,
    useCallback: Iv,
    useContext: wt,
    useEffect: uf,
    useImperativeHandle: jv,
    useInsertionEffect: Dv,
    useLayoutEffect: Lv,
    useMemo: Vv,
    useReducer: mu,
    useRef: Nv,
    useState: function() {
        return mu(Gs)
    },
    useDebugValue: cf,
    useDeferredValue: function(e) {
        var t = St();
        return Fv(t, Ce.memoizedState, e)
    },
    useTransition: function() {
        var e = mu(Gs)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Tv,
    useSyncExternalStore: bv,
    useId: _v,
    unstable_isNewReconciler: !1
}
  , eC = {
    readContext: wt,
    useCallback: Iv,
    useContext: wt,
    useEffect: uf,
    useImperativeHandle: jv,
    useInsertionEffect: Dv,
    useLayoutEffect: Lv,
    useMemo: Vv,
    useReducer: gu,
    useRef: Nv,
    useState: function() {
        return gu(Gs)
    },
    useDebugValue: cf,
    useDeferredValue: function(e) {
        var t = St();
        return Ce === null ? t.memoizedState = e : Fv(t, Ce.memoizedState, e)
    },
    useTransition: function() {
        var e = gu(Gs)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Tv,
    useSyncExternalStore: bv,
    useId: _v,
    unstable_isNewReconciler: !1
};
function Mt(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ec(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var gl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? $r(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = He()
          , i = Jn(e)
          , s = pn(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = qn(e, s, i),
        t !== null && (Ft(t, e, i, r),
        sa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = He()
          , i = Jn(e)
          , s = pn(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = qn(e, s, i),
        t !== null && (Ft(t, e, i, r),
        sa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = He()
          , r = Jn(e)
          , i = pn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = qn(e, i, r),
        t !== null && (Ft(t, e, r, n),
        sa(t, e, r))
    }
};
function pp(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !zs(n, r) || !zs(i, s) : !0
}
function Uv(e, t, n) {
    var r = !1
      , i = nr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = wt(s) : (i = Je(t) ? jr : _e.current,
    r = t.contextTypes,
    s = (r = r != null) ? Di(e, i) : nr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = gl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function mp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null)
}
function Cc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    tf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = wt(s) : (s = Je(t) ? jr : _e.current,
    i.context = Di(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Ec(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && gl.enqueueReplaceState(i, i.state, null),
    Va(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ii(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += AS(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function yu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Tc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var tC = typeof WeakMap == "function" ? WeakMap : Map;
function Wv(e, t, n) {
    n = pn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        $a || ($a = !0,
        Oc = r),
        Tc(e, t)
    }
    ,
    n
}
function Hv(e, t, n) {
    n = pn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Tc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Tc(e, t),
        typeof r != "function" && (Zn === null ? Zn = new Set([this]) : Zn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function gp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new tC;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = mC.bind(null, e, t, n),
    t.then(e, e))
}
function yp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function vp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1),
    t.tag = 2,
    qn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var nC = Sn.ReactCurrentOwner
  , qe = !1;
function Be(e, t, n, r) {
    t.child = e === null ? wv(t, null, n, r) : Oi(t, e.child, n, r)
}
function xp(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return vi(t, i),
    r = af(e, t, n, r, s, i),
    n = lf(),
    e !== null && !qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    vn(e, t, i)) : (ce && n && Yd(t),
    t.flags |= 1,
    Be(e, t, r, i),
    t.child)
}
function wp(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !vf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Kv(e, t, s, r, i)) : (e = da(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : zs,
        n(o, r) && e.ref === t.ref)
            return vn(e, t, i)
    }
    return t.flags |= 1,
    e = er(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Kv(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (zs(s, r) && e.ref === t.ref)
            if (qe = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (qe = !0);
            else
                return t.lanes = e.lanes,
                vn(e, t, i)
    }
    return bc(e, t, n, r, i)
}
function Gv(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(ci, st),
            st |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(ci, st),
                st |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ie(ci, st),
            st |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(ci, st),
        st |= r;
    return Be(e, t, i, n),
    t.child
}
function Yv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function bc(e, t, n, r, i) {
    var s = Je(n) ? jr : _e.current;
    return s = Di(t, s),
    vi(t, i),
    n = af(e, t, n, r, s, i),
    r = lf(),
    e !== null && !qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    vn(e, t, i)) : (ce && r && Yd(t),
    t.flags |= 1,
    Be(e, t, n, i),
    t.child)
}
function Sp(e, t, n, r, i) {
    if (Je(n)) {
        var s = !0;
        Da(t)
    } else
        s = !1;
    if (vi(t, i),
    t.stateNode === null)
        la(e, t),
        Uv(t, n, r),
        Cc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = wt(u) : (u = Je(n) ? jr : _e.current,
        u = Di(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && mp(t, o, r, u),
        jn = !1;
        var f = t.memoizedState;
        o.state = f,
        Va(t, r, o, i),
        l = t.memoizedState,
        a !== r || f !== l || Ze.current || jn ? (typeof c == "function" && (Ec(t, n, c, r),
        l = t.memoizedState),
        (a = jn || pp(t, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Ev(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Mt(t.type, a),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = wt(l) : (l = Je(n) ? jr : _e.current,
        l = Di(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && mp(t, o, r, l),
        jn = !1,
        f = t.memoizedState,
        o.state = f,
        Va(t, r, o, i);
        var v = t.memoizedState;
        a !== d || f !== v || Ze.current || jn ? (typeof h == "function" && (Ec(t, n, h, r),
        v = t.memoizedState),
        (u = jn || pp(t, n, u, r, f, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Pc(e, t, n, r, s, i)
}
function Pc(e, t, n, r, i, s) {
    Yv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && op(t, n, !1),
        vn(e, t, s);
    r = t.stateNode,
    nC.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Oi(t, e.child, null, s),
    t.child = Oi(t, null, a, s)) : Be(e, t, a, s),
    t.memoizedState = r.state,
    i && op(t, n, !0),
    t.child
}
function Qv(e) {
    var t = e.stateNode;
    t.pendingContext ? sp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sp(e, t.context, !1),
    nf(e, t.containerInfo)
}
function Ep(e, t, n, r, i) {
    return Li(),
    Xd(i),
    t.flags |= 256,
    Be(e, t, n, r),
    t.child
}
var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ac(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Xv(e, t, n) {
    var r = t.pendingProps, i = fe.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(fe, i & 1),
    e === null)
        return wc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = xl(o, r, 0, null),
        e = Dr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Ac(n),
        t.memoizedState = kc,
        e) : df(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return rC(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = er(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = er(a, s) : (s = Dr(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Ac(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = kc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = er(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function df(e, t) {
    return t = xl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Fo(e, t, n, r) {
    return r !== null && Xd(r),
    Oi(t, e.child, null, n),
    e = df(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function rC(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = yu(Error(D(422))),
        Fo(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = xl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Dr(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Oi(t, e.child, null, o),
        t.child.memoizedState = Ac(o),
        t.memoizedState = kc,
        s);
    if (!(t.mode & 1))
        return Fo(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(D(419)),
        r = yu(s, r, void 0),
        Fo(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    qe || a) {
        if (r = Re,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            yn(e, i),
            Ft(r, e, i, -1))
        }
        return yf(),
        r = yu(Error(D(421))),
        Fo(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = gC.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    at = Xn(i.nextSibling),
    lt = t,
    ce = !0,
    jt = null,
    e !== null && (mt[gt++] = fn,
    mt[gt++] = hn,
    mt[gt++] = Ir,
    fn = e.id,
    hn = e.overflow,
    Ir = t),
    t = df(t, r.children),
    t.flags |= 4096,
    t)
}
function Cp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Sc(e.return, t, n)
}
function vu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function qv(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Be(e, t, r.children, n),
    r = fe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Cp(e, n, t);
                else if (e.tag === 19)
                    Cp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(fe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Fa(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            vu(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Fa(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            vu(t, !0, n, null, s);
            break;
        case "together":
            vu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function la(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Fr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = er(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = er(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function iC(e, t, n) {
    switch (t.tag) {
    case 3:
        Qv(t),
        Li();
        break;
    case 5:
        Cv(t);
        break;
    case 1:
        Je(t.type) && Da(t);
        break;
    case 4:
        nf(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ie(ja, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(fe, fe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Xv(e, t, n) : (ie(fe, fe.current & 1),
            e = vn(e, t, n),
            e !== null ? e.sibling : null);
        ie(fe, fe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return qv(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ie(fe, fe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Gv(e, t, n)
    }
    return vn(e, t, n)
}
var Zv, Rc, Jv, e0;
Zv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Rc = function() {}
;
Jv = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Er(tn.current);
        var s = null;
        switch (n) {
        case "input":
            i = qu(e, i),
            r = qu(e, r),
            s = [];
            break;
        case "select":
            i = pe({}, i, {
                value: void 0
            }),
            r = pe({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = ec(e, i),
            r = ec(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ma)
        }
        nc(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ls.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ls.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
e0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function os(e, t) {
    if (!ce)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function sC(e, t, n) {
    var r = t.pendingProps;
    switch (Qd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ie(t),
        null;
    case 1:
        return Je(t.type) && Na(),
        Ie(t),
        null;
    case 3:
        return r = t.stateNode,
        ji(),
        le(Ze),
        le(_e),
        sf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        jt !== null && (Vc(jt),
        jt = null))),
        Rc(e, t),
        Ie(t),
        null;
    case 5:
        rf(t);
        var i = Er(Hs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Jv(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return Ie(t),
                null
            }
            if (e = Er(tn.current),
            Io(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Zt] = t,
                r[Us] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ps.length; i++)
                        oe(ps[i], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Dh(r, s),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Oh(r, s),
                    oe("invalid", r)
                }
                nc(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && jo(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && jo(r.textContent, a, e),
                        i = ["children", "" + a]) : Ls.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    ko(r),
                    Lh(r, s, !0);
                    break;
                case "textarea":
                    ko(r),
                    jh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Ma)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ay(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Zt] = t,
                e[Us] = r,
                Zv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = rc(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ps.length; i++)
                            oe(ps[i], e);
                        i = r;
                        break;
                    case "source":
                        oe("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        i = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Dh(e, r),
                        i = qu(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = pe({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Oh(e, r),
                        i = ec(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    nc(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Ny(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ry(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Os(e, l) : typeof l == "number" && Os(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ls.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && Od(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        ko(e),
                        Lh(e, r, !1);
                        break;
                    case "textarea":
                        ko(e),
                        jh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + tr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? pi(e, !!r.multiple, s, !1) : r.defaultValue != null && pi(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Ma)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            e0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Er(Hs.current),
            Er(tn.current),
            Io(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Zt] = t,
                (s = r.nodeValue !== n) && (e = lt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        jo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && jo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Zt] = t,
                t.stateNode = r
        }
        return Ie(t),
        null;
    case 13:
        if (le(fe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ce && at !== null && t.mode & 1 && !(t.flags & 128))
                vv(),
                Li(),
                t.flags |= 98560,
                s = !1;
            else if (s = Io(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(D(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(D(317));
                    s[Zt] = t
                } else
                    Li(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ie(t),
                s = !1
            } else
                jt !== null && (Vc(jt),
                jt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || fe.current & 1 ? be === 0 && (be = 3) : yf())),
        t.updateQueue !== null && (t.flags |= 4),
        Ie(t),
        null);
    case 4:
        return ji(),
        Rc(e, t),
        e === null && Bs(t.stateNode.containerInfo),
        Ie(t),
        null;
    case 10:
        return Jd(t.type._context),
        Ie(t),
        null;
    case 17:
        return Je(t.type) && Na(),
        Ie(t),
        null;
    case 19:
        if (le(fe),
        s = t.memoizedState,
        s === null)
            return Ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                os(s, !1);
            else {
                if (be !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Fa(e),
                        o !== null) {
                            for (t.flags |= 128,
                            os(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(fe, fe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ye() > Vi && (t.flags |= 128,
                r = !0,
                os(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Fa(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    os(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !ce)
                        return Ie(t),
                        null
                } else
                    2 * ye() - s.renderingStartTime > Vi && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    os(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ye(),
        t.sibling = null,
        n = fe.current,
        ie(fe, r ? n & 1 | 2 : n & 1),
        t) : (Ie(t),
        null);
    case 22:
    case 23:
        return gf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? st & 1073741824 && (Ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function oC(e, t) {
    switch (Qd(t),
    t.tag) {
    case 1:
        return Je(t.type) && Na(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ji(),
        le(Ze),
        le(_e),
        sf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return rf(t),
        null;
    case 13:
        if (le(fe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Li()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return le(fe),
        null;
    case 4:
        return ji(),
        null;
    case 10:
        return Jd(t.type._context),
        null;
    case 22:
    case 23:
        return gf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _o = !1
  , Fe = !1
  , aC = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function ui(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(e, t, r)
            }
        else
            n.current = null
}
function Mc(e, t, n) {
    try {
        n()
    } catch (r) {
        ge(e, t, r)
    }
}
var Tp = !1;
function lC(e, t) {
    if (hc = ka,
    e = sv(),
    Gd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = o),
                            f === s && ++c === r && (l = o),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (pc = {
        focusedElem: e,
        selectionRange: n
    },
    ka = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps
                                  , x = v.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Mt(t.type, g), x);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (E) {
                    ge(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return v = Tp,
    Tp = !1,
    v
}
function Cs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Mc(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function yl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Nc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function t0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    t0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Zt],
    delete t[Us],
    delete t[yc],
    delete t[WE],
    delete t[HE])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function n0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function bp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || n0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Dc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ma));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Dc(e, t, n),
        e = e.sibling; e !== null; )
            Dc(e, t, n),
            e = e.sibling
}
function Lc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Lc(e, t, n),
        e = e.sibling; e !== null; )
            Lc(e, t, n),
            e = e.sibling
}
var Me = null
  , Ot = !1;
function An(e, t, n) {
    for (n = n.child; n !== null; )
        r0(e, t, n),
        n = n.sibling
}
function r0(e, t, n) {
    if (en && typeof en.onCommitFiberUnmount == "function")
        try {
            en.onCommitFiberUnmount(ul, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Fe || ui(n, t);
    case 6:
        var r = Me
          , i = Ot;
        Me = null,
        An(e, t, n),
        Me = r,
        Ot = i,
        Me !== null && (Ot ? (e = Me,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
    case 18:
        Me !== null && (Ot ? (e = Me,
        n = n.stateNode,
        e.nodeType === 8 ? du(e.parentNode, n) : e.nodeType === 1 && du(e, n),
        Fs(e)) : du(Me, n.stateNode));
        break;
    case 4:
        r = Me,
        i = Ot,
        Me = n.stateNode.containerInfo,
        Ot = !0,
        An(e, t, n),
        Me = r,
        Ot = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Fe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Mc(n, t, o),
                i = i.next
            } while (i !== r)
        }
        An(e, t, n);
        break;
    case 1:
        if (!Fe && (ui(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ge(n, t, a)
            }
        An(e, t, n);
        break;
    case 21:
        An(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null,
        An(e, t, n),
        Fe = r) : An(e, t, n);
        break;
    default:
        An(e, t, n)
    }
}
function Pp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new aC),
        t.forEach(function(r) {
            var i = yC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Me = a.stateNode,
                        Ot = !1;
                        break e;
                    case 3:
                        Me = a.stateNode.containerInfo,
                        Ot = !0;
                        break e;
                    case 4:
                        Me = a.stateNode.containerInfo,
                        Ot = !0;
                        break e
                    }
                    a = a.return
                }
                if (Me === null)
                    throw Error(D(160));
                r0(s, o, i),
                Me = null,
                Ot = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                ge(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            i0(t, e),
            t = t.sibling
}
function i0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pt(t, e),
        Ht(e),
        r & 4) {
            try {
                Cs(3, e, e.return),
                yl(3, e)
            } catch (g) {
                ge(e, e.return, g)
            }
            try {
                Cs(5, e, e.return)
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 1:
        Pt(t, e),
        Ht(e),
        r & 512 && n !== null && ui(n, n.return);
        break;
    case 5:
        if (Pt(t, e),
        Ht(e),
        r & 512 && n !== null && ui(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Os(i, "")
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Py(i, s),
                    rc(a, o);
                    var u = rc(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? Ny(i, d) : c === "dangerouslySetInnerHTML" ? Ry(i, d) : c === "children" ? Os(i, d) : Od(i, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Zu(i, s);
                        break;
                    case "textarea":
                        ky(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? pi(i, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? pi(i, !!s.multiple, s.defaultValue, !0) : pi(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Us] = s
                } catch (g) {
                    ge(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Pt(t, e),
        Ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Pt(t, e),
        Ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fs(t.containerInfo)
            } catch (g) {
                ge(e, e.return, g)
            }
        break;
    case 4:
        Pt(t, e),
        Ht(e);
        break;
    case 13:
        Pt(t, e),
        Ht(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (pf = ye())),
        r & 4 && Pp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Fe = (u = Fe) || c,
        Pt(t, e),
        Fe = u) : Pt(t, e),
        Ht(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (F = e,
                c = e.child; c !== null; ) {
                    for (d = F = c; F !== null; ) {
                        switch (f = F,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Cs(4, f, f.return);
                            break;
                        case 1:
                            ui(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (g) {
                                    ge(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            ui(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Ap(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        F = h) : Ap(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = My("display", o))
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Pt(t, e),
        Ht(e),
        r & 4 && Pp(e);
        break;
    case 21:
        break;
    default:
        Pt(t, e),
        Ht(e)
    }
}
function Ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (n0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Os(i, ""),
                r.flags &= -33);
                var s = bp(e);
                Lc(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = bp(e);
                Dc(e, a, o);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            ge(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function uC(e, t, n) {
    F = e,
    s0(e)
}
function s0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || _o;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Fe;
                a = _o;
                var u = Fe;
                if (_o = o,
                (Fe = l) && !u)
                    for (F = i; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Rp(i) : l !== null ? (l.return = o,
                        F = l) : Rp(i);
                for (; s !== null; )
                    F = s,
                    s0(s),
                    s = s.sibling;
                F = i,
                _o = a,
                Fe = u
            }
            kp(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            F = s) : kp(e)
    }
}
function kp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || yl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && dp(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            dp(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Fs(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(D(163))
                    }
                Fe || t.flags & 512 && Nc(t)
            } catch (f) {
                ge(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Ap(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Rp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    yl(4, t)
                } catch (l) {
                    ge(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ge(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    Nc(t)
                } catch (l) {
                    ge(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Nc(t)
                } catch (l) {
                    ge(t, o, l)
                }
            }
        } catch (l) {
            ge(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var cC = Math.ceil
  , Ba = Sn.ReactCurrentDispatcher
  , ff = Sn.ReactCurrentOwner
  , xt = Sn.ReactCurrentBatchConfig
  , J = 0
  , Re = null
  , Se = null
  , Ne = 0
  , st = 0
  , ci = cr(0)
  , be = 0
  , Qs = null
  , Fr = 0
  , vl = 0
  , hf = 0
  , Ts = null
  , Xe = null
  , pf = 0
  , Vi = 1 / 0
  , un = null
  , $a = !1
  , Oc = null
  , Zn = null
  , zo = !1
  , Wn = null
  , Ua = 0
  , bs = 0
  , jc = null
  , ua = -1
  , ca = 0;
function He() {
    return J & 6 ? ye() : ua !== -1 ? ua : ua = ye()
}
function Jn(e) {
    return e.mode & 1 ? J & 2 && Ne !== 0 ? Ne & -Ne : GE.transition !== null ? (ca === 0 && (ca = Uy()),
    ca) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Xy(e.type)),
    e) : 1
}
function Ft(e, t, n, r) {
    if (50 < bs)
        throw bs = 0,
        jc = null,
        Error(D(185));
    ao(e, n, r),
    (!(J & 2) || e !== Re) && (e === Re && (!(J & 2) && (vl |= n),
    be === 4 && Vn(e, Ne)),
    et(e, r),
    n === 1 && J === 0 && !(t.mode & 1) && (Vi = ye() + 500,
    pl && dr()))
}
function et(e, t) {
    var n = e.callbackNode;
    GS(e, t);
    var r = Pa(e, e === Re ? Ne : 0);
    if (r === 0)
        n !== null && Fh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Fh(n),
        t === 1)
            e.tag === 0 ? KE(Mp.bind(null, e)) : mv(Mp.bind(null, e)),
            $E(function() {
                !(J & 6) && dr()
            }),
            n = null;
        else {
            switch (Wy(r)) {
            case 1:
                n = _d;
                break;
            case 4:
                n = By;
                break;
            case 16:
                n = ba;
                break;
            case 536870912:
                n = $y;
                break;
            default:
                n = ba
            }
            n = h0(n, o0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function o0(e, t) {
    if (ua = -1,
    ca = 0,
    J & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (xi() && e.callbackNode !== n)
        return null;
    var r = Pa(e, e === Re ? Ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Wa(e, r);
    else {
        t = r;
        var i = J;
        J |= 2;
        var s = l0();
        (Re !== e || Ne !== t) && (un = null,
        Vi = ye() + 500,
        Nr(e, t));
        do
            try {
                hC();
                break
            } catch (a) {
                a0(e, a)
            }
        while (!0);
        Zd(),
        Ba.current = s,
        J = i,
        Se !== null ? t = 0 : (Re = null,
        Ne = 0,
        t = be)
    }
    if (t !== 0) {
        if (t === 2 && (i = lc(e),
        i !== 0 && (r = i,
        t = Ic(e, i))),
        t === 1)
            throw n = Qs,
            Nr(e, 0),
            Vn(e, r),
            et(e, ye()),
            n;
        if (t === 6)
            Vn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !dC(i) && (t = Wa(e, r),
            t === 2 && (s = lc(e),
            s !== 0 && (r = s,
            t = Ic(e, s))),
            t === 1))
                throw n = Qs,
                Nr(e, 0),
                Vn(e, r),
                et(e, ye()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                vr(e, Xe, un);
                break;
            case 3:
                if (Vn(e, r),
                (r & 130023424) === r && (t = pf + 500 - ye(),
                10 < t)) {
                    if (Pa(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        He(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = gc(vr.bind(null, e, Xe, un), t);
                    break
                }
                vr(e, Xe, un);
                break;
            case 4:
                if (Vn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Vt(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = gc(vr.bind(null, e, Xe, un), r);
                    break
                }
                vr(e, Xe, un);
                break;
            case 5:
                vr(e, Xe, un);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return et(e, ye()),
    e.callbackNode === n ? o0.bind(null, e) : null
}
function Ic(e, t) {
    var n = Ts;
    return e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256),
    e = Wa(e, t),
    e !== 2 && (t = Xe,
    Xe = n,
    t !== null && Vc(t)),
    e
}
function Vc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}
function dC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!zt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Vn(e, t) {
    for (t &= ~hf,
    t &= ~vl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Vt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Mp(e) {
    if (J & 6)
        throw Error(D(327));
    xi();
    var t = Pa(e, 0);
    if (!(t & 1))
        return et(e, ye()),
        null;
    var n = Wa(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = lc(e);
        r !== 0 && (t = r,
        n = Ic(e, r))
    }
    if (n === 1)
        throw n = Qs,
        Nr(e, 0),
        Vn(e, t),
        et(e, ye()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    vr(e, Xe, un),
    et(e, ye()),
    null
}
function mf(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
        J === 0 && (Vi = ye() + 500,
        pl && dr())
    }
}
function _r(e) {
    Wn !== null && Wn.tag === 0 && !(J & 6) && xi();
    var t = J;
    J |= 1;
    var n = xt.transition
      , r = ne;
    try {
        if (xt.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        xt.transition = n,
        J = t,
        !(J & 6) && dr()
    }
}
function gf() {
    st = ci.current,
    le(ci)
}
function Nr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    BE(n)),
    Se !== null)
        for (n = Se.return; n !== null; ) {
            var r = n;
            switch (Qd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Na();
                break;
            case 3:
                ji(),
                le(Ze),
                le(_e),
                sf();
                break;
            case 5:
                rf(r);
                break;
            case 4:
                ji();
                break;
            case 13:
                le(fe);
                break;
            case 19:
                le(fe);
                break;
            case 10:
                Jd(r.type._context);
                break;
            case 22:
            case 23:
                gf()
            }
            n = n.return
        }
    if (Re = e,
    Se = e = er(e.current, null),
    Ne = st = t,
    be = 0,
    Qs = null,
    hf = vl = Fr = 0,
    Xe = Ts = null,
    Sr !== null) {
        for (t = 0; t < Sr.length; t++)
            if (n = Sr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Sr = null
    }
    return e
}
function a0(e, t) {
    do {
        var n = Se;
        try {
            if (Zd(),
            oa.current = za,
            _a) {
                for (var r = he.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                _a = !1
            }
            if (Vr = 0,
            Ae = Ce = he = null,
            Es = !1,
            Ks = 0,
            ff.current = null,
            n === null || n.return === null) {
                be = 1,
                Qs = t,
                Se = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Ne,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = yp(o);
                    if (h !== null) {
                        h.flags &= -257,
                        vp(h, o, a, s, t),
                        h.mode & 1 && gp(s, u, t),
                        t = h,
                        l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            gp(s, u, t),
                            yf();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (ce && a.mode & 1) {
                    var x = yp(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        vp(x, o, a, s, t),
                        Xd(Ii(l, a));
                        break e
                    }
                }
                s = l = Ii(l, a),
                be !== 4 && (be = 2),
                Ts === null ? Ts = [s] : Ts.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = Wv(s, l, t);
                        cp(s, m);
                        break e;
                    case 1:
                        a = l;
                        var p = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Zn === null || !Zn.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var E = Hv(s, a, t);
                            cp(s, E);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            c0(n)
        } catch (C) {
            t = C,
            Se === n && n !== null && (Se = n = n.return);
            continue
        }
        break
    } while (!0)
}
function l0() {
    var e = Ba.current;
    return Ba.current = za,
    e === null ? za : e
}
function yf() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
    Re === null || !(Fr & 268435455) && !(vl & 268435455) || Vn(Re, Ne)
}
function Wa(e, t) {
    var n = J;
    J |= 2;
    var r = l0();
    (Re !== e || Ne !== t) && (un = null,
    Nr(e, t));
    do
        try {
            fC();
            break
        } catch (i) {
            a0(e, i)
        }
    while (!0);
    if (Zd(),
    J = n,
    Ba.current = r,
    Se !== null)
        throw Error(D(261));
    return Re = null,
    Ne = 0,
    be
}
function fC() {
    for (; Se !== null; )
        u0(Se)
}
function hC() {
    for (; Se !== null && !FS(); )
        u0(Se)
}
function u0(e) {
    var t = f0(e.alternate, e, st);
    e.memoizedProps = e.pendingProps,
    t === null ? c0(e) : Se = t,
    ff.current = null
}
function c0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = oC(n, t),
            n !== null) {
                n.flags &= 32767,
                Se = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                be = 6,
                Se = null;
                return
            }
        } else if (n = sC(n, t, st),
        n !== null) {
            Se = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Se = t;
            return
        }
        Se = t = e
    } while (t !== null);
    be === 0 && (be = 5)
}
function vr(e, t, n) {
    var r = ne
      , i = xt.transition;
    try {
        xt.transition = null,
        ne = 1,
        pC(e, t, n, r)
    } finally {
        xt.transition = i,
        ne = r
    }
    return null
}
function pC(e, t, n, r) {
    do
        xi();
    while (Wn !== null);
    if (J & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (YS(e, s),
    e === Re && (Se = Re = null,
    Ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zo || (zo = !0,
    h0(ba, function() {
        return xi(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = xt.transition,
        xt.transition = null;
        var o = ne;
        ne = 1;
        var a = J;
        J |= 4,
        ff.current = null,
        lC(e, n),
        i0(n, e),
        OE(pc),
        ka = !!hc,
        pc = hc = null,
        e.current = n,
        uC(n),
        _S(),
        J = a,
        ne = o,
        xt.transition = s
    } else
        e.current = n;
    if (zo && (zo = !1,
    Wn = e,
    Ua = i),
    s = e.pendingLanes,
    s === 0 && (Zn = null),
    $S(n.stateNode),
    et(e, ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if ($a)
        throw $a = !1,
        e = Oc,
        Oc = null,
        e;
    return Ua & 1 && e.tag !== 0 && xi(),
    s = e.pendingLanes,
    s & 1 ? e === jc ? bs++ : (bs = 0,
    jc = e) : bs = 0,
    dr(),
    null
}
function xi() {
    if (Wn !== null) {
        var e = Wy(Ua)
          , t = xt.transition
          , n = ne;
        try {
            if (xt.transition = null,
            ne = 16 > e ? 16 : e,
            Wn === null)
                var r = !1;
            else {
                if (e = Wn,
                Wn = null,
                Ua = 0,
                J & 6)
                    throw Error(D(331));
                var i = J;
                for (J |= 4,
                F = e.current; F !== null; ) {
                    var s = F
                      , o = s.child;
                    if (F.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null; ) {
                                    var c = F;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cs(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        F = d;
                                    else
                                        for (; F !== null; ) {
                                            c = F;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (t0(c),
                                            c === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                F = f;
                                                break
                                            }
                                            F = h
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        F = o;
                    else
                        e: for (; F !== null; ) {
                            if (s = F,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cs(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                F = m;
                                break e
                            }
                            F = s.return
                        }
                }
                var p = e.current;
                for (F = p; F !== null; ) {
                    o = F;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        F = y;
                    else
                        e: for (o = p; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yl(9, a)
                                    }
                                } catch (C) {
                                    ge(a, a.return, C)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                E.return = a.return,
                                F = E;
                                break e
                            }
                            F = a.return
                        }
                }
                if (J = i,
                dr(),
                en && typeof en.onPostCommitFiberRoot == "function")
                    try {
                        en.onPostCommitFiberRoot(ul, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            xt.transition = t
        }
    }
    return !1
}
function Np(e, t, n) {
    t = Ii(n, t),
    t = Wv(e, t, 1),
    e = qn(e, t, 1),
    t = He(),
    e !== null && (ao(e, 1, t),
    et(e, t))
}
function ge(e, t, n) {
    if (e.tag === 3)
        Np(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Np(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zn === null || !Zn.has(r))) {
                    e = Ii(n, e),
                    e = Hv(t, e, 1),
                    t = qn(t, e, 1),
                    e = He(),
                    t !== null && (ao(t, 1, e),
                    et(t, e));
                    break
                }
            }
            t = t.return
        }
}
function mC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = He(),
    e.pingedLanes |= e.suspendedLanes & n,
    Re === e && (Ne & n) === n && (be === 4 || be === 3 && (Ne & 130023424) === Ne && 500 > ye() - pf ? Nr(e, 0) : hf |= n),
    et(e, t)
}
function d0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mo,
    Mo <<= 1,
    !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
    var n = He();
    e = yn(e, t),
    e !== null && (ao(e, t, n),
    et(e, n))
}
function gC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    d0(e, n)
}
function yC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    d0(e, n)
}
var f0;
f0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return qe = !1,
                iC(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else
        qe = !1,
        ce && t.flags & 1048576 && gv(t, Oa, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        la(e, t),
        e = t.pendingProps;
        var i = Di(t, _e.current);
        vi(t, n),
        i = af(null, t, r, e, i, n);
        var s = lf();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Je(r) ? (s = !0,
        Da(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        tf(t),
        i.updater = gl,
        t.stateNode = i,
        i._reactInternals = t,
        Cc(t, r, e, n),
        t = Pc(null, t, r, !0, s, n)) : (t.tag = 0,
        ce && s && Yd(t),
        Be(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (la(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = xC(r),
            e = Mt(r, e),
            i) {
            case 0:
                t = bc(null, t, r, e, n);
                break e;
            case 1:
                t = Sp(null, t, r, e, n);
                break e;
            case 11:
                t = xp(null, t, r, e, n);
                break e;
            case 14:
                t = wp(null, t, r, Mt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        bc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        Sp(e, t, r, i, n);
    case 3:
        e: {
            if (Qv(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Ev(e, t),
            Va(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = Ii(Error(D(423)), t),
                    t = Ep(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Ii(Error(D(424)), t),
                    t = Ep(e, t, r, n, i);
                    break e
                } else
                    for (at = Xn(t.stateNode.containerInfo.firstChild),
                    lt = t,
                    ce = !0,
                    jt = null,
                    n = wv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Li(),
                r === i) {
                    t = vn(e, t, n);
                    break e
                }
                Be(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Cv(t),
        e === null && wc(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        mc(r, i) ? o = null : s !== null && mc(r, s) && (t.flags |= 32),
        Yv(e, t),
        Be(e, t, o, n),
        t.child;
    case 6:
        return e === null && wc(t),
        null;
    case 13:
        return Xv(e, t, n);
    case 4:
        return nf(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Oi(t, null, r, n) : Be(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        xp(e, t, r, i, n);
    case 7:
        return Be(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            ie(ja, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (zt(s.value, o)) {
                    if (s.children === i.children && !Ze.current) {
                        t = vn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = pn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    Sc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(D(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Sc(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Be(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        vi(t, n),
        i = wt(i),
        r = r(i),
        t.flags |= 1,
        Be(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Mt(r, t.pendingProps),
        i = Mt(r.type, i),
        wp(e, t, r, i, n);
    case 15:
        return Kv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        la(e, t),
        t.tag = 1,
        Je(r) ? (e = !0,
        Da(t)) : e = !1,
        vi(t, n),
        Uv(t, r, i),
        Cc(t, r, i, n),
        Pc(null, t, r, !0, e, n);
    case 19:
        return qv(e, t, n);
    case 22:
        return Gv(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function h0(e, t) {
    return zy(e, t)
}
function vC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function yt(e, t, n, r) {
    return new vC(e,t,n,r)
}
function vf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function xC(e) {
    if (typeof e == "function")
        return vf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Id)
            return 11;
        if (e === Vd)
            return 14
    }
    return 2
}
function er(e, t) {
    var n = e.alternate;
    return n === null ? (n = yt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function da(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        vf(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case ei:
            return Dr(n.children, i, s, t);
        case jd:
            o = 8,
            i |= 8;
            break;
        case Gu:
            return e = yt(12, n, t, i | 2),
            e.elementType = Gu,
            e.lanes = s,
            e;
        case Yu:
            return e = yt(13, n, t, i),
            e.elementType = Yu,
            e.lanes = s,
            e;
        case Qu:
            return e = yt(19, n, t, i),
            e.elementType = Qu,
            e.lanes = s,
            e;
        case Cy:
            return xl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Sy:
                    o = 10;
                    break e;
                case Ey:
                    o = 9;
                    break e;
                case Id:
                    o = 11;
                    break e;
                case Vd:
                    o = 14;
                    break e;
                case On:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = yt(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Dr(e, t, n, r) {
    return e = yt(7, e, r, t),
    e.lanes = n,
    e
}
function xl(e, t, n, r) {
    return e = yt(22, e, r, t),
    e.elementType = Cy,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function xu(e, t, n) {
    return e = yt(6, e, null, t),
    e.lanes = n,
    e
}
function wu(e, t, n) {
    return t = yt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function wC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = eu(0),
    this.expirationTimes = eu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = eu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function xf(e, t, n, r, i, s, o, a, l) {
    return e = new wC(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = yt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    tf(s),
    e
}
function SC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Jr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function p0(e) {
    if (!e)
        return nr;
    e = e._reactInternals;
    e: {
        if ($r(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Je(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n))
            return pv(e, n, t)
    }
    return t
}
function m0(e, t, n, r, i, s, o, a, l) {
    return e = xf(n, r, !0, e, i, s, o, a, l),
    e.context = p0(null),
    n = e.current,
    r = He(),
    i = Jn(n),
    s = pn(r, i),
    s.callback = t ?? null,
    qn(n, s, i),
    e.current.lanes = i,
    ao(e, i, r),
    et(e, r),
    e
}
function wl(e, t, n, r) {
    var i = t.current
      , s = He()
      , o = Jn(i);
    return n = p0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = pn(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = qn(i, t, o),
    e !== null && (Ft(e, i, o, s),
    sa(e, i, o)),
    o
}
function Ha(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Dp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wf(e, t) {
    Dp(e, t),
    (e = e.alternate) && Dp(e, t)
}
function EC() {
    return null
}
var g0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Sf(e) {
    this._internalRoot = e
}
Sl.prototype.render = Sf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    wl(e, t, null, null)
}
;
Sl.prototype.unmount = Sf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        _r(function() {
            wl(null, e, null, null)
        }),
        t[gn] = null
    }
}
;
function Sl(e) {
    this._internalRoot = e
}
Sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Gy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++)
            ;
        In.splice(n, 0, e),
        n === 0 && Qy(e)
    }
}
;
function Ef(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function El(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Lp() {}
function CC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ha(o);
                s.call(u)
            }
        }
        var o = m0(t, r, e, 0, null, !1, !1, "", Lp);
        return e._reactRootContainer = o,
        e[gn] = o.current,
        Bs(e.nodeType === 8 ? e.parentNode : e),
        _r(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ha(l);
            a.call(u)
        }
    }
    var l = xf(e, 0, !1, null, null, !1, !1, "", Lp);
    return e._reactRootContainer = l,
    e[gn] = l.current,
    Bs(e.nodeType === 8 ? e.parentNode : e),
    _r(function() {
        wl(t, l, n, r)
    }),
    l
}
function Cl(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ha(o);
                a.call(l)
            }
        }
        wl(t, o, e, i)
    } else
        o = CC(n, t, e, i, r);
    return Ha(o)
}
Hy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = hs(t.pendingLanes);
            n !== 0 && (zd(t, n | 1),
            et(t, ye()),
            !(J & 6) && (Vi = ye() + 500,
            dr()))
        }
        break;
    case 13:
        _r(function() {
            var r = yn(e, 1);
            if (r !== null) {
                var i = He();
                Ft(r, e, 1, i)
            }
        }),
        wf(e, 1)
    }
}
;
Bd = function(e) {
    if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
            var n = He();
            Ft(t, e, 134217728, n)
        }
        wf(e, 134217728)
    }
}
;
Ky = function(e) {
    if (e.tag === 13) {
        var t = Jn(e)
          , n = yn(e, t);
        if (n !== null) {
            var r = He();
            Ft(n, e, t, r)
        }
        wf(e, t)
    }
}
;
Gy = function() {
    return ne
}
;
Yy = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
sc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Zu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = hl(r);
                    if (!i)
                        throw Error(D(90));
                    by(r),
                    Zu(r, i)
                }
            }
        }
        break;
    case "textarea":
        ky(e, n);
        break;
    case "select":
        t = n.value,
        t != null && pi(e, !!n.multiple, t, !1)
    }
}
;
Oy = mf;
jy = _r;
var TC = {
    usingClientEntryPoint: !1,
    Events: [uo, ii, hl, Dy, Ly, mf]
}
  , as = {
    findFiberByHostInstance: wr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , bC = {
    bundleType: as.bundleType,
    version: as.version,
    rendererPackageName: as.rendererPackageName,
    rendererConfig: as.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Fy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: as.findFiberByHostInstance || EC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bo.isDisabled && Bo.supportsFiber)
        try {
            ul = Bo.inject(bC),
            en = Bo
        } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TC;
dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ef(t))
        throw Error(D(200));
    return SC(e, t, null, n)
}
;
dt.createRoot = function(e, t) {
    if (!Ef(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , i = g0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = xf(e, 1, !1, null, null, n, !1, r, i),
    e[gn] = t.current,
    Bs(e.nodeType === 8 ? e.parentNode : e),
    new Sf(t)
}
;
dt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = Fy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
dt.flushSync = function(e) {
    return _r(e)
}
;
dt.hydrate = function(e, t, n) {
    if (!El(t))
        throw Error(D(200));
    return Cl(null, e, t, !0, n)
}
;
dt.hydrateRoot = function(e, t, n) {
    if (!Ef(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = g0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = m0(t, null, e, 1, n ?? null, i, !1, s, o),
    e[gn] = t.current,
    Bs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Sl(t)
}
;
dt.render = function(e, t, n) {
    if (!El(t))
        throw Error(D(200));
    return Cl(null, e, t, !1, n)
}
;
dt.unmountComponentAtNode = function(e) {
    if (!El(e))
        throw Error(D(40));
    return e._reactRootContainer ? (_r(function() {
        Cl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[gn] = null
        })
    }),
    !0) : !1
}
;
dt.unstable_batchedUpdates = mf;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!El(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return Cl(e, t, n, !1, r)
}
;
dt.version = "18.3.1-next-f1338f8080-20240426";
function y0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)
        } catch (e) {
            console.error(e)
        }
}
y0(),
yy.exports = dt;
var fo = yy.exports;
const v0 = iy(fo);
var x0, Op = fo;
x0 = Op.createRoot,
Op.hydrateRoot;
var Tl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , bl = typeof window > "u" || "Deno"in globalThis;
function Nt() {}
function PC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kC(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function AC(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Fc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function RC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function jp(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Cf(o, t.options))
                return !1
        } else if (!qs(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}
function Ip(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Xs(t.options.mutationKey) !== Xs(s))
                return !1
        } else if (!qs(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Cf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Xs)(e)
}
function Xs(e) {
    return JSON.stringify(e, (t, n) => _c(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function qs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => qs(e[n], t[n])) : !1
}
function w0(e, t) {
    if (e === t)
        return e;
    const n = Vp(e) && Vp(t);
    if (n || _c(e) && _c(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = w0(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === o && u === i ? e : a
    }
    return t
}
function Vp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function _c(e) {
    if (!Fp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Fp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Fp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function MC(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function NC(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? w0(e, t) : t
}
function DC(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function LC(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Tf = Symbol();
function S0(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Tf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var br, Fn, Ci, Xg, OC = (Xg = class extends Tl {
    constructor() {
        super();
        ee(this, br);
        ee(this, Fn);
        ee(this, Ci);
        G(this, Ci, t => {
            if (!bl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        M(this, Fn) || this.setEventListener(M(this, Ci))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = M(this, Fn)) == null || t.call(this),
        G(this, Fn, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Ci, t),
        (n = M(this, Fn)) == null || n.call(this),
        G(this, Fn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        M(this, br) !== t && (G(this, br, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof M(this, br) == "boolean" ? M(this, br) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
br = new WeakMap,
Fn = new WeakMap,
Ci = new WeakMap,
Xg), E0 = new OC, Ti, _n, bi, qg, jC = (qg = class extends Tl {
    constructor() {
        super();
        ee(this, Ti, !0);
        ee(this, _n);
        ee(this, bi);
        G(this, bi, t => {
            if (!bl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        M(this, _n) || this.setEventListener(M(this, bi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = M(this, _n)) == null || t.call(this),
        G(this, _n, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, bi, t),
        (n = M(this, _n)) == null || n.call(this),
        G(this, _n, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        M(this, Ti) !== t && (G(this, Ti, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return M(this, Ti)
    }
}
,
Ti = new WeakMap,
_n = new WeakMap,
bi = new WeakMap,
qg), Ka = new jC;
function IC() {
    let e, t;
    const n = new Promise( (i, s) => {
        e = i,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function VC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function C0(e) {
    return (e ?? "online") === "online" ? Ka.isOnline() : !0
}
var T0 = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Su(e) {
    return e instanceof T0
}
function b0(e) {
    let t = !1, n = 0, r = !1, i;
    const s = IC()
      , o = g => {
        var x;
        r || (f(new T0(g)),
        (x = e.abort) == null || x.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => E0.isFocused() && (e.networkMode === "always" || Ka.isOnline()) && e.canRun()
      , c = () => C0(e.networkMode) && e.canRun()
      , d = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        s.resolve(g))
    }
      , f = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        s.reject(g))
    }
      , h = () => new Promise(g => {
        var x;
        i = m => {
            (r || u()) && g(m)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        i = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , v = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var T;
            if (r)
                return;
            const p = e.retry ?? (bl ? 0 : 3)
              , y = e.retryDelay ?? VC
              , E = typeof y == "function" ? y(n, m) : y
              , C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
            if (t || !C) {
                f(m);
                return
            }
            n++,
            (T = e.onFail) == null || T.call(e, n, m),
            MC(E).then( () => u() ? void 0 : h()).then( () => {
                t ? f(m) : v()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v),
        s)
    }
}
var FC = e => setTimeout(e, 0);
function _C() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = FC;
    const s = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var $e = _C(), Pr, Zg, P0 = (Zg = class {
    constructor() {
        ee(this, Pr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        kC(this.gcTime) && G(this, Pr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (bl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        M(this, Pr) && (clearTimeout(M(this, Pr)),
        G(this, Pr, void 0))
    }
}
,
Pr = new WeakMap,
Zg), Pi, kr, pt, Ar, Ve, io, Rr, Dt, ln, Jg, zC = (Jg = class extends P0 {
    constructor(t) {
        super();
        ee(this, Dt);
        ee(this, Pi);
        ee(this, kr);
        ee(this, pt);
        ee(this, Ar);
        ee(this, Ve);
        ee(this, io);
        ee(this, Rr);
        G(this, Rr, !1),
        G(this, io, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        G(this, Ar, t.client),
        G(this, pt, M(this, Ar).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        G(this, Pi, $C(this.options)),
        this.state = t.state ?? M(this, Pi),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = M(this, Ve)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...M(this, io),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && M(this, pt).remove(this)
    }
    setData(t, n) {
        const r = NC(this.state.data, t, this.options);
        return Oe(this, Dt, ln).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Oe(this, Dt, ln).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = M(this, Ve)) == null ? void 0 : r.promise;
        return (i = M(this, Ve)) == null || i.cancel(t),
        n ? n.then(Nt).catch(Nt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(M(this, Pi))
    }
    isActive() {
        return this.observers.some(t => RC(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Tf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Fc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !AC(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = M(this, Ve)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = M(this, Ve)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        M(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (M(this, Ve) && (M(this, Rr) ? M(this, Ve).cancel({
            revert: !0
        }) : M(this, Ve).cancelRetry()),
        this.scheduleGc()),
        M(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Oe(this, Dt, ln).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (M(this, Ve))
                return M(this, Ve).continueRetry(),
                M(this, Ve).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (G(this, Rr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = S0(this.options, n)
              , v = ( () => {
                const g = {
                    client: M(this, Ar),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(g),
                g
            }
            )();
            return G(this, Rr, !1),
            this.options.persister ? this.options.persister(f, v, this) : f(v)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: M(this, Ar),
                state: this.state,
                fetchFn: s
            };
            return i(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        G(this, kr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Oe(this, Dt, ln).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, v, g, x;
            Su(f) && f.silent || Oe(this, Dt, ln).call(this, {
                type: "error",
                error: f
            }),
            Su(f) || ((v = (h = M(this, pt).config).onError) == null || v.call(h, f, this),
            (x = (g = M(this, pt).config).onSettled) == null || x.call(g, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return G(this, Ve, b0({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, v, g, x;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (m) {
                    l(m);
                    return
                }
                (v = (h = M(this, pt).config).onSuccess) == null || v.call(h, f, this),
                (x = (g = M(this, pt).config).onSettled) == null || x.call(g, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Oe(this, Dt, ln).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Oe(this, Dt, ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Oe(this, Dt, ln).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        M(this, Ve).start()
    }
}
,
Pi = new WeakMap,
kr = new WeakMap,
pt = new WeakMap,
Ar = new WeakMap,
Ve = new WeakMap,
io = new WeakMap,
Rr = new WeakMap,
Dt = new WeakSet,
ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...BC(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return G(this, kr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return Su(i) && i.revert && M(this, kr) ? {
                ...M(this, kr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        M(this, pt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Jg);
function BC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: C0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function $C(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Yt, ey, UC = (ey = class extends Tl {
    constructor(t={}) {
        super();
        ee(this, Yt);
        this.config = t,
        G(this, Yt, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , s = n.queryHash ?? Cf(i, n);
        let o = this.get(s);
        return o || (o = new zC({
            client: t,
            queryKey: i,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(o)),
        o
    }
    add(t) {
        M(this, Yt).has(t.queryHash) || (M(this, Yt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = M(this, Yt).get(t.queryHash);
        n && (t.destroy(),
        n === t && M(this, Yt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return M(this, Yt).get(t)
    }
    getAll() {
        return [...M(this, Yt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => jp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => jp(t, r)) : n
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Yt = new WeakMap,
ey), Qt, ze, Mr, Xt, Nn, ty, WC = (ty = class extends P0 {
    constructor(t) {
        super();
        ee(this, Xt);
        ee(this, Qt);
        ee(this, ze);
        ee(this, Mr);
        this.mutationId = t.mutationId,
        G(this, ze, t.mutationCache),
        G(this, Qt, []),
        this.state = t.state || HC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        M(this, Qt).includes(t) || (M(this, Qt).push(t),
        this.clearGcTimeout(),
        M(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        G(this, Qt, M(this, Qt).filter(n => n !== t)),
        this.scheduleGc(),
        M(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        M(this, Qt).length || (this.state.status === "pending" ? this.scheduleGc() : M(this, ze).remove(this))
    }
    continue() {
        var t;
        return ((t = M(this, Mr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, a, l, u, c, d, f, h, v, g, x, m, p, y, E, C, T, b, P;
        const n = () => {
            Oe(this, Xt, Nn).call(this, {
                type: "continue"
            })
        }
        ;
        G(this, Mr, b0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, A) => {
                Oe(this, Xt, Nn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: A
                })
            }
            ,
            onPause: () => {
                Oe(this, Xt, Nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => M(this, ze).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !M(this, Mr).canStart();
        try {
            if (r)
                n();
            else {
                Oe(this, Xt, Nn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((o = (s = M(this, ze).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const A = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                A !== this.state.context && Oe(this, Xt, Nn).call(this, {
                    type: "pending",
                    context: A,
                    variables: t,
                    isPaused: i
                })
            }
            const N = await M(this, Mr).start();
            return await ((c = (u = M(this, ze).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
            await ((v = (h = M(this, ze).config).onSettled) == null ? void 0 : v.call(h, N, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, N, null, t, this.state.context)),
            Oe(this, Xt, Nn).call(this, {
                type: "success",
                data: N
            }),
            N
        } catch (N) {
            try {
                throw await ((p = (m = M(this, ze).config).onError) == null ? void 0 : p.call(m, N, t, this.state.context, this)),
                await ((E = (y = this.options).onError) == null ? void 0 : E.call(y, N, t, this.state.context)),
                await ((T = (C = M(this, ze).config).onSettled) == null ? void 0 : T.call(C, void 0, N, this.state.variables, this.state.context, this)),
                await ((P = (b = this.options).onSettled) == null ? void 0 : P.call(b, void 0, N, t, this.state.context)),
                N
            } finally {
                Oe(this, Xt, Nn).call(this, {
                    type: "error",
                    error: N
                })
            }
        } finally {
            M(this, ze).runNext(this)
        }
    }
}
,
Qt = new WeakMap,
ze = new WeakMap,
Mr = new WeakMap,
Xt = new WeakSet,
Nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        M(this, Qt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        M(this, ze).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ty);
function HC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var dn, Lt, so, ny, KC = (ny = class extends Tl {
    constructor(t={}) {
        super();
        ee(this, dn);
        ee(this, Lt);
        ee(this, so);
        this.config = t,
        G(this, dn, new Set),
        G(this, Lt, new Map),
        G(this, so, 0)
    }
    build(t, n, r) {
        const i = new WC({
            mutationCache: this,
            mutationId: ++To(this, so)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        M(this, dn).add(t);
        const n = $o(t);
        if (typeof n == "string") {
            const r = M(this, Lt).get(n);
            r ? r.push(t) : M(this, Lt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (M(this, dn).delete(t)) {
            const n = $o(t);
            if (typeof n == "string") {
                const r = M(this, Lt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && M(this, Lt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = $o(t);
        if (typeof n == "string") {
            const r = M(this, Lt).get(n)
              , i = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = $o(t);
        if (typeof n == "string") {
            const i = (r = M(this, Lt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        $e.batch( () => {
            M(this, dn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            M(this, dn).clear(),
            M(this, Lt).clear()
        }
        )
    }
    getAll() {
        return Array.from(M(this, dn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ip(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Ip(t, n))
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return $e.batch( () => Promise.all(t.map(n => n.continue().catch(Nt))))
    }
}
,
dn = new WeakMap,
Lt = new WeakMap,
so = new WeakMap,
ny);
function $o(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function _p(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options
              , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , o = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = S0(t.options, t.fetchOptions)
                  , p = async (y, E, C) => {
                    if (g)
                        return Promise.reject();
                    if (E == null && y.pages.length)
                        return Promise.resolve(y);
                    const b = ( () => {
                        const V = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(V),
                        V
                    }
                    )()
                      , P = await m(b)
                      , {maxPages: N} = t.options
                      , A = C ? LC : DC;
                    return {
                        pages: A(y.pages, P, N),
                        pageParams: A(y.pageParams, E, N)
                    }
                }
                ;
                if (i && s.length) {
                    const y = i === "backward"
                      , E = y ? GC : zp
                      , C = {
                        pages: s,
                        pageParams: o
                    }
                      , T = E(r, C);
                    a = await p(C, T, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const E = l === 0 ? o[0] ?? r.initialPageParam : zp(r, a);
                        if (l > 0 && E == null)
                            break;
                        a = await p(a, E),
                        l++
                    } while (l < y)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function zp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function GC(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, zn, Bn, ki, Ai, $n, Ri, Mi, ry, YC = (ry = class {
    constructor(e={}) {
        ee(this, me);
        ee(this, zn);
        ee(this, Bn);
        ee(this, ki);
        ee(this, Ai);
        ee(this, $n);
        ee(this, Ri);
        ee(this, Mi);
        G(this, me, e.queryCache || new UC),
        G(this, zn, e.mutationCache || new KC),
        G(this, Bn, e.defaultOptions || {}),
        G(this, ki, new Map),
        G(this, Ai, new Map),
        G(this, $n, 0)
    }
    mount() {
        To(this, $n)._++,
        M(this, $n) === 1 && (G(this, Ri, E0.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            M(this, me).onFocus())
        }
        )),
        G(this, Mi, Ka.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            M(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        To(this, $n)._--,
        M(this, $n) === 0 && ((e = M(this, Ri)) == null || e.call(this),
        G(this, Ri, void 0),
        (t = M(this, Mi)) == null || t.call(this),
        G(this, Mi, void 0))
    }
    isFetching(e) {
        return M(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return M(this, zn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = M(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = M(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Fc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return M(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = M(this, me).get(r.queryHash)
          , s = i == null ? void 0 : i.state.data
          , o = PC(t, s);
        if (o !== void 0)
            return M(this, me).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return $e.batch( () => M(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = M(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = M(this, me);
        $e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = M(this, me);
        return $e.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = $e.batch( () => M(this, me).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Nt).catch(Nt)
    }
    invalidateQueries(e, t={}) {
        return $e.batch( () => (M(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = $e.batch( () => M(this, me).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let s = i.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Nt)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Nt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = M(this, me).build(this, t);
        return n.isStaleByTime(Fc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = _p(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = _p(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ka.isOnline() ? M(this, zn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return M(this, me)
    }
    getMutationCache() {
        return M(this, zn)
    }
    getDefaultOptions() {
        return M(this, Bn)
    }
    setDefaultOptions(e) {
        G(this, Bn, e)
    }
    setQueryDefaults(e, t) {
        M(this, ki).set(Xs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...M(this, ki).values()]
          , n = {};
        return t.forEach(r => {
            qs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        M(this, Ai).set(Xs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...M(this, Ai).values()]
          , n = {};
        return t.forEach(r => {
            qs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...M(this, Bn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Cf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Tf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...M(this, Bn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        M(this, me).clear(),
        M(this, zn).clear()
    }
}
,
me = new WeakMap,
zn = new WeakMap,
Bn = new WeakMap,
ki = new WeakMap,
Ai = new WeakMap,
$n = new WeakMap,
Ri = new WeakMap,
Mi = new WeakMap,
ry), QC = w.createContext(void 0), XC = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
S.jsx(QC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ga() {
    return Ga = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ga.apply(this, arguments)
}
var Hn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Hn || (Hn = {}));
const Bp = "popstate";
function qC(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return zc("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : A0(i)
    }
    return JC(t, n, null, e)
}
function rt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function k0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function ZC() {
    return Math.random().toString(36).substr(2, 8)
}
function $p(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function zc(e, t, n, r) {
    return n === void 0 && (n = null),
    Ga({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Pl(t) : t, {
        state: n,
        key: t && t.key || r || ZC()
    })
}
function A0(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Pl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function JC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Hn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(Ga({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Hn.Pop;
        let x = c()
          , m = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: g.location,
            delta: m
        })
    }
    function f(x, m) {
        a = Hn.Push;
        let p = zc(g.location, x, m);
        u = c() + 1;
        let y = $p(p, u)
          , E = g.createHref(p);
        try {
            o.pushState(y, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            i.location.assign(E)
        }
        s && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(x, m) {
        a = Hn.Replace;
        let p = zc(g.location, x, m);
        u = c();
        let y = $p(p, u)
          , E = g.createHref(p);
        o.replaceState(y, "", E),
        s && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }
    function v(x) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof x == "string" ? x : A0(x);
        return p = p.replace(/ $/, "%20"),
        rt(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Bp, d),
            l = x,
            () => {
                i.removeEventListener(Bp, d),
                l = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: v,
        encodeLocation(x) {
            let m = v(x);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: h,
        go(x) {
            return o.go(x)
        }
    };
    return g
}
var Up;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Up || (Up = {}));
function eT(e, t, n) {
    return n === void 0 && (n = "/"),
    tT(e, t, n, !1)
}
function tT(e, t, n, r) {
    let i = typeof t == "string" ? Pl(t) : t
      , s = N0(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = R0(e);
    nT(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = hT(s);
        a = dT(o[l], u, r)
    }
    return a
}
function R0(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (rt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = wi([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (rt(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        R0(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: uT(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of M0(s.path))
                i(s, o, l)
    }
    ),
    t
}
function M0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = M0(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function nT(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : cT(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const rT = /^:[\w-]+$/
  , iT = 3
  , sT = 2
  , oT = 1
  , aT = 10
  , lT = -2
  , Wp = e => e === "*";
function uT(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Wp) && (r += lT),
    t && (r += sT),
    n.filter(i => !Wp(i)).reduce( (i, s) => i + (rT.test(s) ? iT : s === "" ? oT : aT), r)
}
function cT(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function dT(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = Hp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Hp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(i, d.params),
        o.push({
            params: i,
            pathname: wi([s, d.pathname]),
            pathnameBase: pT(wi([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = wi([s, d.pathnameBase]))
    }
    return o
}
function Hp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = fT(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let g = a[d] || "";
                o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function fT(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    k0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function hT(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return k0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function N0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const wi = e => e.join("/").replace(/\/\/+/g, "/")
  , pT = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function mT(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const D0 = ["post", "put", "patch", "delete"];
new Set(D0);
const gT = ["get", ...D0];
new Set(gT);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ya() {
    return Ya = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ya.apply(this, arguments)
}
const yT = w.createContext(null)
  , vT = w.createContext(null)
  , L0 = w.createContext(null)
  , kl = w.createContext(null)
  , Al = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , O0 = w.createContext(null);
function bf() {
    return w.useContext(kl) != null
}
function j0() {
    return bf() || rt(!1),
    w.useContext(kl).location
}
function xT(e, t) {
    return wT(e, t)
}
function wT(e, t, n, r) {
    bf() || rt(!1);
    let {navigator: i} = w.useContext(L0)
      , {matches: s} = w.useContext(Al)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = j0(), c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Pl(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || rt(!1),
        c = x
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = eT(e, {
        pathname: h
    })
      , g = bT(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: wi([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : wi([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), s, n, r);
    return t && g ? w.createElement(kl.Provider, {
        value: {
            location: Ya({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Hn.Pop
        }
    }, g) : g
}
function ST() {
    let e = RT()
      , t = mT(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const ET = w.createElement(ST, null);
class CT extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Al.Provider, {
            value: this.props.routeContext
        }, w.createElement(O0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function TT(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = w.useContext(yT);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Al.Provider, {
        value: t
    }, r)
}
function bT(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || rt(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, d, f) => {
        let h, v = !1, g = null, x = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        g = d.route.errorElement || ET,
        l && (u < 0 && f === 0 ? (v = !0,
        x = null) : u === f && (v = !0,
        x = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1))
          , p = () => {
            let y;
            return h ? y = g : v ? y = x : d.route.Component ? y = w.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c,
            w.createElement(TT, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? w.createElement(CT, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Bc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Bc || {});
function PT(e) {
    let t = w.useContext(vT);
    return t || rt(!1),
    t
}
function kT(e) {
    let t = w.useContext(Al);
    return t || rt(!1),
    t
}
function AT(e) {
    let t = kT()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || rt(!1),
    n.route.id
}
function RT() {
    var e;
    let t = w.useContext(O0)
      , n = PT(Bc.UseRouteError)
      , r = AT(Bc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function MT(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function $c(e) {
    rt(!1)
}
function NT(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Hn.Pop, navigator: s, static: o=!1, future: a} = e;
    bf() && rt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Ya({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = Pl(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: v="default"} = r
      , g = w.useMemo( () => {
        let x = N0(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: f,
                state: h,
                key: v
            },
            navigationType: i
        }
    }
    , [l, c, d, f, h, v, i]);
    return g == null ? null : w.createElement(L0.Provider, {
        value: u
    }, w.createElement(kl.Provider, {
        children: n,
        value: g
    }))
}
function DT(e) {
    let {children: t, location: n} = e;
    return xT(Uc(t), n)
}
new Promise( () => {}
);
function Uc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, Uc(r.props.children, s));
            return
        }
        r.type !== $c && rt(!1),
        !r.props.index || !r.props.children || rt(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Uc(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const LT = "6";
try {
    window.__reactRouterVersion = LT
} catch {}
const OT = "startTransition"
  , Kp = my[OT];
function jT(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = w.useRef();
    s.current == null && (s.current = qC({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = w.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(d => {
        u && Kp ? Kp( () => l(d)) : l(d)
    }
    , [l, u]);
    return w.useLayoutEffect( () => o.listen(c), [o, c]),
    w.useEffect( () => MT(r), [r]),
    w.createElement(NT, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
var Gp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Gp || (Gp = {}));
var Yp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Yp || (Yp = {}));
var Qp = ["light", "dark"]
  , IT = "(prefers-color-scheme: dark)"
  , VT = w.createContext(void 0)
  , FT = {
    setTheme: e => {}
    ,
    themes: []
}
  , _T = () => {
    var e;
    return (e = w.useContext(VT)) != null ? e : FT
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: s, value: o, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = i ? Qp.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (v, g=!1, x=!0) => {
        let m = o ? o[v] : v
          , p = g ? v + "|| ''" : `'${m}'`
          , y = "";
        return i && x && !g && Qp.includes(v) && (y += `d.style.colorScheme = '${v}';`),
        n === "class" ? g || m ? y += `c.add(${p})` : y += "null" : m && (y += `d[s](n,${p})`),
        y
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${IT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var zT = e => {
    switch (e) {
    case "success":
        return UT;
    case "info":
        return HT;
    case "warning":
        return WT;
    case "error":
        return KT;
    default:
        return null
    }
}
  , BT = Array(12).fill(0)
  , $T = ({visible: e, className: t}) => L.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, L.createElement("div", {
    className: "sonner-spinner"
}, BT.map( (n, r) => L.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , UT = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , WT = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , HT = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , KT = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , GT = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, L.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), L.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , YT = () => {
    let[e,t] = L.useState(document.hidden);
    return L.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Wc = 1
  , QT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Wc++
              , s = this.toasts.find(a => a.id === i)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            s ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, s, o = r.then(async l => {
                if (s = ["resolve", l],
                L.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (qT(l) && !l.ok) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Wc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Qe = new QT
  , XT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wc++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , qT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , ZT = XT
  , JT = () => Qe.toasts
  , eb = () => Qe.getActiveToasts()
  , tb = Object.assign(ZT, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: JT,
    getToasts: eb
});
function nb(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
nb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Uo(e) {
    return e.label !== void 0
}
var rb = 3
  , ib = "32px"
  , sb = "16px"
  , Xp = 4e3
  , ob = 356
  , ab = 14
  , lb = 20
  , ub = 200;
function kt(...e) {
    return e.filter(Boolean).join(" ")
}
function cb(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var db = e => {
    var t, n, r, i, s, o, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: v, interacting: g, setHeights: x, visibleToasts: m, heights: p, index: y, toasts: E, expanded: C, removeToast: T, defaultRichColors: b, closeButton: P, style: N, cancelButtonStyle: A, actionButtonStyle: V, className: j="", descriptionClassName: U="", duration: O, position: W, gap: z, loadingIcon: H, expandByDefault: k, classNames: R, icons: I, closeButtonAriaLabel: $="Close toast", pauseWhenPageIsHidden: B} = e
      , [Q,q] = L.useState(null)
      , [xe,Le] = L.useState(null)
      , [te,Wr] = L.useState(!1)
      , [En,hr] = L.useState(!1)
      , [Cn,Hr] = L.useState(!1)
      , [Tn,So] = L.useState(!1)
      , [Wl,Eo] = L.useState(!1)
      , [Hl,Zi] = L.useState(0)
      , [Kr,xh] = L.useState(0)
      , Ji = L.useRef(h.duration || O || Xp)
      , wh = L.useRef(null)
      , pr = L.useRef(null)
      , H1 = y === 0
      , K1 = y + 1 <= m
      , ht = h.type
      , Gr = h.dismissible !== !1
      , G1 = h.className || ""
      , Y1 = h.descriptionClassName || ""
      , Co = L.useMemo( () => p.findIndex(K => K.toastId === h.id) || 0, [p, h.id])
      , Q1 = L.useMemo( () => {
        var K;
        return (K = h.closeButton) != null ? K : P
    }
    , [h.closeButton, P])
      , Sh = L.useMemo( () => h.duration || O || Xp, [h.duration, O])
      , Kl = L.useRef(0)
      , Yr = L.useRef(0)
      , Eh = L.useRef(0)
      , Qr = L.useRef(null)
      , [X1,q1] = W.split("-")
      , Ch = L.useMemo( () => p.reduce( (K, re, ue) => ue >= Co ? K : K + re.height, 0), [p, Co])
      , Th = YT()
      , Z1 = h.invert || f
      , Gl = ht === "loading";
    Yr.current = L.useMemo( () => Co * z + Ch, [Co, Ch]),
    L.useEffect( () => {
        Ji.current = Sh
    }
    , [Sh]),
    L.useEffect( () => {
        Wr(!0)
    }
    , []),
    L.useEffect( () => {
        let K = pr.current;
        if (K) {
            let re = K.getBoundingClientRect().height;
            return xh(re),
            x(ue => [{
                toastId: h.id,
                height: re,
                position: h.position
            }, ...ue]),
            () => x(ue => ue.filter(Ct => Ct.toastId !== h.id))
        }
    }
    , [x, h.id]),
    L.useLayoutEffect( () => {
        if (!te)
            return;
        let K = pr.current
          , re = K.style.height;
        K.style.height = "auto";
        let ue = K.getBoundingClientRect().height;
        K.style.height = re,
        xh(ue),
        x(Ct => Ct.find(Tt => Tt.toastId === h.id) ? Ct.map(Tt => Tt.toastId === h.id ? {
            ...Tt,
            height: ue
        } : Tt) : [{
            toastId: h.id,
            height: ue,
            position: h.position
        }, ...Ct])
    }
    , [te, h.title, h.description, x, h.id]);
    let bn = L.useCallback( () => {
        hr(!0),
        Zi(Yr.current),
        x(K => K.filter(re => re.toastId !== h.id)),
        setTimeout( () => {
            T(h)
        }
        , ub)
    }
    , [h, T, x, Yr]);
    L.useEffect( () => {
        if (h.promise && ht === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let K;
        return C || g || B && Th ? ( () => {
            if (Eh.current < Kl.current) {
                let re = new Date().getTime() - Kl.current;
                Ji.current = Ji.current - re
            }
            Eh.current = new Date().getTime()
        }
        )() : Ji.current !== 1 / 0 && (Kl.current = new Date().getTime(),
        K = setTimeout( () => {
            var re;
            (re = h.onAutoClose) == null || re.call(h, h),
            bn()
        }
        , Ji.current)),
        () => clearTimeout(K)
    }
    , [C, g, h, ht, B, Th, bn]),
    L.useEffect( () => {
        h.delete && bn()
    }
    , [bn, h.delete]);
    function J1() {
        var K, re, ue;
        return I != null && I.loading ? L.createElement("div", {
            className: kt(R == null ? void 0 : R.loader, (K = h == null ? void 0 : h.classNames) == null ? void 0 : K.loader, "sonner-loader"),
            "data-visible": ht === "loading"
        }, I.loading) : H ? L.createElement("div", {
            className: kt(R == null ? void 0 : R.loader, (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ht === "loading"
        }, H) : L.createElement($T, {
            className: kt(R == null ? void 0 : R.loader, (ue = h == null ? void 0 : h.classNames) == null ? void 0 : ue.loader),
            visible: ht === "loading"
        })
    }
    return L.createElement("li", {
        tabIndex: 0,
        ref: pr,
        className: kt(j, G1, R == null ? void 0 : R.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[ht], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ht]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : b,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": te,
        "data-promise": !!h.promise,
        "data-swiped": Wl,
        "data-removed": En,
        "data-visible": K1,
        "data-y-position": X1,
        "data-x-position": q1,
        "data-index": y,
        "data-front": H1,
        "data-swiping": Cn,
        "data-dismissible": Gr,
        "data-type": ht,
        "data-invert": Z1,
        "data-swipe-out": Tn,
        "data-swipe-direction": xe,
        "data-expanded": !!(C || k && te),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": E.length - y,
            "--offset": `${En ? Hl : Yr.current}px`,
            "--initial-height": k ? "auto" : `${Kr}px`,
            ...N,
            ...h.style
        },
        onDragEnd: () => {
            Hr(!1),
            q(null),
            Qr.current = null
        }
        ,
        onPointerDown: K => {
            Gl || !Gr || (wh.current = new Date,
            Zi(Yr.current),
            K.target.setPointerCapture(K.pointerId),
            K.target.tagName !== "BUTTON" && (Hr(!0),
            Qr.current = {
                x: K.clientX,
                y: K.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var K, re, ue, Ct;
            if (Tn || !Gr)
                return;
            Qr.current = null;
            let Tt = Number(((K = pr.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Pn = Number(((re = pr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , mr = new Date().getTime() - ((ue = wh.current) == null ? void 0 : ue.getTime())
              , bt = Q === "x" ? Tt : Pn
              , kn = Math.abs(bt) / mr;
            if (Math.abs(bt) >= lb || kn > .11) {
                Zi(Yr.current),
                (Ct = h.onDismiss) == null || Ct.call(h, h),
                Le(Q === "x" ? Tt > 0 ? "right" : "left" : Pn > 0 ? "down" : "up"),
                bn(),
                So(!0),
                Eo(!1);
                return
            }
            Hr(!1),
            q(null)
        }
        ,
        onPointerMove: K => {
            var re, ue, Ct, Tt;
            if (!Qr.current || !Gr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let Pn = K.clientY - Qr.current.y
              , mr = K.clientX - Qr.current.x
              , bt = (ue = e.swipeDirections) != null ? ue : cb(W);
            !Q && (Math.abs(mr) > 1 || Math.abs(Pn) > 1) && q(Math.abs(mr) > Math.abs(Pn) ? "x" : "y");
            let kn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (bt.includes("top") || bt.includes("bottom")) && (bt.includes("top") && Pn < 0 || bt.includes("bottom") && Pn > 0) && (kn.y = Pn) : Q === "x" && (bt.includes("left") || bt.includes("right")) && (bt.includes("left") && mr < 0 || bt.includes("right") && mr > 0) && (kn.x = mr),
            (Math.abs(kn.x) > 0 || Math.abs(kn.y) > 0) && Eo(!0),
            (Ct = pr.current) == null || Ct.style.setProperty("--swipe-amount-x", `${kn.x}px`),
            (Tt = pr.current) == null || Tt.style.setProperty("--swipe-amount-y", `${kn.y}px`)
        }
    }, Q1 && !h.jsx ? L.createElement("button", {
        "aria-label": $,
        "data-disabled": Gl,
        "data-close-button": !0,
        onClick: Gl || !Gr ? () => {}
        : () => {
            var K;
            bn(),
            (K = h.onDismiss) == null || K.call(h, h)
        }
        ,
        className: kt(R == null ? void 0 : R.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (s = I == null ? void 0 : I.close) != null ? s : GT) : null, h.jsx || w.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : L.createElement(L.Fragment, null, ht || h.icon || h.promise ? L.createElement("div", {
        "data-icon": "",
        className: kt(R == null ? void 0 : R.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || J1() : null, h.type !== "loading" ? h.icon || (I == null ? void 0 : I[ht]) || zT(ht) : null) : null, L.createElement("div", {
        "data-content": "",
        className: kt(R == null ? void 0 : R.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, L.createElement("div", {
        "data-title": "",
        className: kt(R == null ? void 0 : R.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? L.createElement("div", {
        "data-description": "",
        className: kt(U, Y1, R == null ? void 0 : R.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), w.isValidElement(h.cancel) ? h.cancel : h.cancel && Uo(h.cancel) ? L.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || A,
        onClick: K => {
            var re, ue;
            Uo(h.cancel) && Gr && ((ue = (re = h.cancel).onClick) == null || ue.call(re, K),
            bn())
        }
        ,
        className: kt(R == null ? void 0 : R.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, w.isValidElement(h.action) ? h.action : h.action && Uo(h.action) ? L.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || V,
        onClick: K => {
            var re, ue;
            Uo(h.action) && ((ue = (re = h.action).onClick) == null || ue.call(re, K),
            !K.defaultPrevented && bn())
        }
        ,
        className: kt(R == null ? void 0 : R.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function qp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function fb(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let s = i === 1
          , o = s ? "--mobile-offset" : "--offset"
          , a = s ? sb : ib;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${o}-${u}`] = a : n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var hb = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: v=rb, toastOptions: g, dir: x=qp(), gap: m=ab, loadingIcon: p, icons: y, containerAriaLabel: E="Notifications", pauseWhenPageIsHidden: C} = e
      , [T,b] = L.useState([])
      , P = L.useMemo( () => Array.from(new Set([r].concat(T.filter(B => B.position).map(B => B.position)))), [T, r])
      , [N,A] = L.useState([])
      , [V,j] = L.useState(!1)
      , [U,O] = L.useState(!1)
      , [W,z] = L.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , H = L.useRef(null)
      , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = L.useRef(null)
      , I = L.useRef(!1)
      , $ = L.useCallback(B => {
        b(Q => {
            var q;
            return (q = Q.find(xe => xe.id === B.id)) != null && q.delete || Qe.dismiss(B.id),
            Q.filter( ({id: xe}) => xe !== B.id)
        }
        )
    }
    , []);
    return L.useEffect( () => Qe.subscribe(B => {
        if (B.dismiss) {
            b(Q => Q.map(q => q.id === B.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            v0.flushSync( () => {
                b(Q => {
                    let q = Q.findIndex(xe => xe.id === B.id);
                    return q !== -1 ? [...Q.slice(0, q), {
                        ...Q[q],
                        ...B
                    }, ...Q.slice(q + 1)] : [B, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    L.useEffect( () => {
        if (c !== "system") {
            z(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Q}) => {
                z(Q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: q}) => {
                try {
                    z(q ? "dark" : "light")
                } catch (xe) {
                    console.error(xe)
                }
            }
            )
        }
    }
    , [c]),
    L.useEffect( () => {
        T.length <= 1 && j(!1)
    }
    , [T]),
    L.useEffect( () => {
        let B = Q => {
            var q, xe;
            i.every(Le => Q[Le] || Q.code === Le) && (j(!0),
            (q = H.current) == null || q.focus()),
            Q.code === "Escape" && (document.activeElement === H.current || (xe = H.current) != null && xe.contains(document.activeElement)) && j(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [i]),
    L.useEffect( () => {
        if (H.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                I.current = !1)
            }
    }
    , [H.current]),
    L.createElement("section", {
        ref: t,
        "aria-label": `${E} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (B, Q) => {
        var q;
        let[xe,Le] = B.split("-");
        return T.length ? L.createElement("ol", {
            key: B,
            dir: x === "auto" ? qp() : x,
            tabIndex: -1,
            ref: H,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": W,
            "data-y-position": xe,
            "data-lifted": V && T.length > 1 && !s,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((q = N[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${ob}px`,
                "--gap": `${m}px`,
                ...h,
                ...fb(l, u)
            },
            onBlur: te => {
                I.current && !te.currentTarget.contains(te.relatedTarget) && (I.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || I.current || (I.current = !0,
                R.current = te.relatedTarget)
            }
            ,
            onMouseEnter: () => j(!0),
            onMouseMove: () => j(!0),
            onMouseLeave: () => {
                U || j(!1)
            }
            ,
            onDragEnd: () => j(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || O(!0)
            }
            ,
            onPointerUp: () => O(!1)
        }, T.filter(te => !te.position && Q === 0 || te.position === B).map( (te, Wr) => {
            var En, hr;
            return L.createElement(db, {
                key: te.id,
                icons: y,
                index: Wr,
                toast: te,
                defaultRichColors: d,
                duration: (En = g == null ? void 0 : g.duration) != null ? En : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: v,
                closeButton: (hr = g == null ? void 0 : g.closeButton) != null ? hr : o,
                interacting: U,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: $,
                toasts: T.filter(Cn => Cn.position == te.position),
                heights: N.filter(Cn => Cn.position == te.position),
                setHeights: A,
                expandByDefault: s,
                gap: m,
                loadingIcon: p,
                expanded: V,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const pb = ({...e}) => {
    const {theme: t="system"} = _T();
    return S.jsx(hb, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , mb = 1
  , gb = 1e6;
let Eu = 0;
function yb() {
    return Eu = (Eu + 1) % Number.MAX_SAFE_INTEGER,
    Eu.toString()
}
const Cu = new Map
  , Zp = e => {
    if (Cu.has(e))
        return;
    const t = setTimeout( () => {
        Cu.delete(e),
        Ps({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , gb);
    Cu.set(e, t)
}
  , vb = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, mb)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Zp(n) : e.toasts.forEach(r => {
                Zp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , fa = [];
let ha = {
    toasts: []
};
function Ps(e) {
    ha = vb(ha, e),
    fa.forEach(t => {
        t(ha)
    }
    )
}
function xb({...e}) {
    const t = yb()
      , n = i => Ps({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => Ps({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ps({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function wb() {
    const [e,t] = w.useState(ha);
    return w.useEffect( () => (fa.push(t),
    () => {
        const n = fa.indexOf(t);
        n > -1 && fa.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: xb,
        dismiss: n => Ps({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Te(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function Jp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function I0(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Jp(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Jp(e[i], null)
                }
            }
    }
}
function Bt(...e) {
    return w.useCallback(I0(...e), e)
}
function Rl(e, t=[]) {
    let n = [];
    function r(s, o) {
        const a = w.createContext(o)
          , l = n.length;
        n = [...n, o];
        const u = d => {
            var m;
            const {scope: f, children: h, ...v} = d
              , g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a
              , x = w.useMemo( () => v, Object.values(v));
            return S.jsx(g.Provider, {
                value: x,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , v = w.useContext(h);
            if (v)
                return v;
            if (o !== void 0)
                return o;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const i = () => {
        const s = n.map(o => w.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, Sb(i, ...t)]
}
function Sb(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(s) {
            const o = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Hc(e) {
    const t = Eb(e)
      , n = w.forwardRef( (r, i) => {
        const {children: s, ...o} = r
          , a = w.Children.toArray(s)
          , l = a.find(Tb);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
            return S.jsx(t, {
                ...o,
                ref: i,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return S.jsx(t, {
            ...o,
            ref: i,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function Eb(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: i, ...s} = n;
        if (w.isValidElement(i)) {
            const o = Pb(i)
              , a = bb(s, i.props);
            return i.type !== w.Fragment && (a.ref = r ? I0(r, o) : o),
            w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var V0 = Symbol("radix.slottable");
function Cb(e) {
    const t = ({children: n}) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = V0,
    t
}
function Tb(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === V0
}
function bb(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
            const l = s(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Pb(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function kb(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Rl(t)
      , [i,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = g => {
        const {scope: x, children: m} = g
          , p = L.useRef(null)
          , y = L.useRef(new Map).current;
        return S.jsx(i, {
            scope: x,
            itemMap: y,
            collectionRef: p,
            children: m
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = Hc(a)
      , u = L.forwardRef( (g, x) => {
        const {scope: m, children: p} = g
          , y = s(a, m)
          , E = Bt(x, y.collectionRef);
        return S.jsx(l, {
            ref: E,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = Hc(c)
      , h = L.forwardRef( (g, x) => {
        const {scope: m, children: p, ...y} = g
          , E = L.useRef(null)
          , C = Bt(x, E)
          , T = s(c, m);
        return L.useEffect( () => (T.itemMap.set(E, {
            ref: E,
            ...y
        }),
        () => void T.itemMap.delete(E))),
        S.jsx(f, {
            [d]: "",
            ref: C,
            children: p
        })
    }
    );
    h.displayName = c;
    function v(g) {
        const x = s(e + "CollectionConsumer", g);
        return L.useCallback( () => {
            const p = x.collectionRef.current;
            if (!p)
                return [];
            const y = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort( (T, b) => y.indexOf(T.ref.current) - y.indexOf(b.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var Ab = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , it = Ab.reduce( (e, t) => {
    const n = Hc(`Primitive.${t}`)
      , r = w.forwardRef( (i, s) => {
        const {asChild: o, ...a} = i
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function F0(e, t) {
    e && fo.flushSync( () => e.dispatchEvent(t))
}
function rr(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Rb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e);
    w.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Mb = "DismissableLayer", Kc = "dismissableLayer.update", Nb = "dismissableLayer.pointerDownOutside", Db = "dismissableLayer.focusOutside", em, _0 = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Pf = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = w.useContext(_0)
      , [c,d] = w.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = w.useState({})
      , v = Bt(t, b => d(b))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(x)
      , p = c ? g.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = p >= m
      , C = Ob(b => {
        const P = b.target
          , N = [...u.branches].some(A => A.contains(P));
        !E || N || (i == null || i(b),
        o == null || o(b),
        b.defaultPrevented || a == null || a())
    }
    , f)
      , T = jb(b => {
        const P = b.target;
        [...u.branches].some(A => A.contains(P)) || (s == null || s(b),
        o == null || o(b),
        b.defaultPrevented || a == null || a())
    }
    , f);
    return Rb(b => {
        p === u.layers.size - 1 && (r == null || r(b),
        !b.defaultPrevented && a && (b.preventDefault(),
        a()))
    }
    , f),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (em = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            tm(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = em)
            }
    }
    , [c, f, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        tm())
    }
    , [c, u]),
    w.useEffect( () => {
        const b = () => h({});
        return document.addEventListener(Kc, b),
        () => document.removeEventListener(Kc, b)
    }
    , []),
    S.jsx(it.div, {
        ...l,
        ref: v,
        style: {
            pointerEvents: y ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Te(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Te(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Pf.displayName = Mb;
var Lb = "DismissableLayerBranch"
  , z0 = w.forwardRef( (e, t) => {
    const n = w.useContext(_0)
      , r = w.useRef(null)
      , i = Bt(t, r);
    return w.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    S.jsx(it.div, {
        ...e,
        ref: i
    })
}
);
z0.displayName = Lb;
function Ob(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e)
      , r = w.useRef(!1)
      , i = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    B0(Nb, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function jb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const i = s => {
            s.target && !r.current && B0(Db, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function tm() {
    const e = new CustomEvent(Kc);
    document.dispatchEvent(e)
}
function B0(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? F0(i, s) : i.dispatchEvent(s)
}
var Ib = Pf
  , Vb = z0
  , ir = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , Fb = "Portal"
  , $0 = w.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,s] = w.useState(!1);
    ir( () => s(!0), []);
    const o = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? v0.createPortal(S.jsx(it.div, {
        ...r,
        ref: t
    }), o) : null
}
);
$0.displayName = Fb;
function _b(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var kf = e => {
    const {present: t, children: n} = e
      , r = zb(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , s = Bt(r.ref, Bb(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: s
    }) : null
}
;
kf.displayName = "Presence";
function zb(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , i = w.useRef(e)
      , s = w.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = _b(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = Wo(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    ir( () => {
        const u = r.current
          , c = i.current;
        if (c !== e) {
            const f = s.current
              , h = Wo(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    ir( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const g = Wo(r.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"),
                !i.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = Wo(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Wo(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Bb(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var $b = my[" useInsertionEffect ".trim().toString()] || ir;
function Ub({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,s,o] = Wb({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const f = Hb(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f))
        } else
            s(c)
    }
    , [a, e, s, o]);
    return [l, u]
}
function Wb({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , i = w.useRef(n)
      , s = w.useRef(t);
    return $b( () => {
        s.current = t
    }
    , [t]),
    w.useEffect( () => {
        var o;
        i.current !== n && ((o = s.current) == null || o.call(s, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, s]
}
function Hb(e) {
    return typeof e == "function"
}
var Kb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Gb = "VisuallyHidden"
  , Ml = w.forwardRef( (e, t) => S.jsx(it.span, {
    ...e,
    ref: t,
    style: {
        ...Kb,
        ...e.style
    }
}));
Ml.displayName = Gb;
var Yb = Ml
  , Af = "ToastProvider"
  , [Rf,Qb,Xb] = kb("Toast")
  , [U0,GL] = Rl("Toast", [Xb])
  , [qb,Nl] = U0(Af)
  , W0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: s=50, children: o} = e
      , [a,l] = w.useState(null)
      , [u,c] = w.useState(0)
      , d = w.useRef(!1)
      , f = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Af}\`. Expected non-empty \`string\`.`),
    S.jsx(Rf.Provider, {
        scope: t,
        children: S.jsx(qb, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: w.useCallback( () => c(h => h + 1), []),
            onToastRemove: w.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
W0.displayName = Af;
var H0 = "ToastViewport"
  , Zb = ["F8"]
  , Gc = "toast.viewportPause"
  , Yc = "toast.viewportResume"
  , K0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Zb, label: i="Notifications ({hotkey})", ...s} = e
      , o = Nl(H0, n)
      , a = Qb(n)
      , l = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , d = w.useRef(null)
      , f = Bt(t, d, o.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , v = o.toastCount > 0;
    w.useEffect( () => {
        const x = m => {
            var y;
            r.length !== 0 && r.every(E => m[E] || m.code === E) && ((y = d.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = l.current
          , m = d.current;
        if (v && x && m) {
            const p = () => {
                if (!o.isClosePausedRef.current) {
                    const T = new CustomEvent(Gc);
                    m.dispatchEvent(T),
                    o.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (o.isClosePausedRef.current) {
                    const T = new CustomEvent(Yc);
                    m.dispatchEvent(T),
                    o.isClosePausedRef.current = !1
                }
            }
              , E = T => {
                !x.contains(T.relatedTarget) && y()
            }
              , C = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", p),
            x.addEventListener("focusout", E),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", E),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [v, o.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: x}) => {
        const p = a().map(y => {
            const E = y.ref.current
              , C = [E, ...dP(E)];
            return x === "forwards" ? C : C.reverse()
        }
        );
        return (x === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return w.useEffect( () => {
        const x = d.current;
        if (x) {
            const m = p => {
                var C, T, b;
                const y = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !y) {
                    const P = document.activeElement
                      , N = p.shiftKey;
                    if (p.target === x && N) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const j = g({
                        tabbingDirection: N ? "backwards" : "forwards"
                    })
                      , U = j.findIndex(O => O === P);
                    Tu(j.slice(U + 1)) ? p.preventDefault() : N ? (T = u.current) == null || T.focus() : (b = c.current) == null || b.focus()
                }
            }
            ;
            return x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
        }
    }
    , [a, g]),
    S.jsxs(Vb, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: v ? void 0 : "none"
        },
        children: [v && S.jsx(Qc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                Tu(x)
            }
        }), S.jsx(Rf.Slot, {
            scope: n,
            children: S.jsx(it.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), v && S.jsx(Qc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                Tu(x)
            }
        })]
    })
}
);
K0.displayName = H0;
var G0 = "ToastFocusProxy"
  , Qc = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , s = Nl(G0, n);
    return S.jsx(Ml, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Qc.displayName = G0;
var ho = "Toast"
  , Jb = "toast.swipeStart"
  , eP = "toast.swipeMove"
  , tP = "toast.swipeCancel"
  , nP = "toast.swipeEnd"
  , Y0 = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o} = e
      , [a,l] = Ub({
        prop: r,
        defaultProp: i ?? !0,
        onChange: s,
        caller: ho
    });
    return S.jsx(kf, {
        present: n || a,
        children: S.jsx(sP, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: rr(e.onPause),
            onResume: rr(e.onResume),
            onSwipeStart: Te(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Te(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Te(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Te(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
Y0.displayName = ho;
var [rP,iP] = U0(ho, {
    onClose() {}
})
  , sP = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: s, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...v} = e
      , g = Nl(ho, n)
      , [x,m] = w.useState(null)
      , p = Bt(t, O => m(O))
      , y = w.useRef(null)
      , E = w.useRef(null)
      , C = i || g.duration
      , T = w.useRef(0)
      , b = w.useRef(C)
      , P = w.useRef(0)
      , {onToastAdd: N, onToastRemove: A} = g
      , V = rr( () => {
        var W;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((W = g.viewport) == null || W.focus()),
        o()
    }
    )
      , j = w.useCallback(O => {
        !O || O === 1 / 0 || (window.clearTimeout(P.current),
        T.current = new Date().getTime(),
        P.current = window.setTimeout(V, O))
    }
    , [V]);
    w.useEffect( () => {
        const O = g.viewport;
        if (O) {
            const W = () => {
                j(b.current),
                u == null || u()
            }
              , z = () => {
                const H = new Date().getTime() - T.current;
                b.current = b.current - H,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return O.addEventListener(Gc, z),
            O.addEventListener(Yc, W),
            () => {
                O.removeEventListener(Gc, z),
                O.removeEventListener(Yc, W)
            }
        }
    }
    , [g.viewport, C, l, u, j]),
    w.useEffect( () => {
        s && !g.isClosePausedRef.current && j(C)
    }
    , [s, C, g.isClosePausedRef, j]),
    w.useEffect( () => (N(),
    () => A()), [N, A]);
    const U = w.useMemo( () => x ? tx(x) : null, [x]);
    return g.viewport ? S.jsxs(S.Fragment, {
        children: [U && S.jsx(oP, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), S.jsx(rP, {
            scope: n,
            onClose: V,
            children: fo.createPortal(S.jsx(Rf.ItemSlot, {
                scope: n,
                children: S.jsx(Ib, {
                    asChild: !0,
                    onEscapeKeyDown: Te(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || V(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: S.jsx(it.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...v,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Te(e.onKeyDown, O => {
                            O.key === "Escape" && (a == null || a(O.nativeEvent),
                            O.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            V()))
                        }
                        ),
                        onPointerDown: Te(e.onPointerDown, O => {
                            O.button === 0 && (y.current = {
                                x: O.clientX,
                                y: O.clientY
                            })
                        }
                        ),
                        onPointerMove: Te(e.onPointerMove, O => {
                            if (!y.current)
                                return;
                            const W = O.clientX - y.current.x
                              , z = O.clientY - y.current.y
                              , H = !!E.current
                              , k = ["left", "right"].includes(g.swipeDirection)
                              , R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , I = k ? R(0, W) : 0
                              , $ = k ? 0 : R(0, z)
                              , B = O.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: I,
                                y: $
                            }
                              , q = {
                                originalEvent: O,
                                delta: Q
                            };
                            H ? (E.current = Q,
                            Ho(eP, d, q, {
                                discrete: !1
                            })) : nm(Q, g.swipeDirection, B) ? (E.current = Q,
                            Ho(Jb, c, q, {
                                discrete: !1
                            }),
                            O.target.setPointerCapture(O.pointerId)) : (Math.abs(W) > B || Math.abs(z) > B) && (y.current = null)
                        }
                        ),
                        onPointerUp: Te(e.onPointerUp, O => {
                            const W = E.current
                              , z = O.target;
                            if (z.hasPointerCapture(O.pointerId) && z.releasePointerCapture(O.pointerId),
                            E.current = null,
                            y.current = null,
                            W) {
                                const H = O.currentTarget
                                  , k = {
                                    originalEvent: O,
                                    delta: W
                                };
                                nm(W, g.swipeDirection, g.swipeThreshold) ? Ho(nP, h, k, {
                                    discrete: !0
                                }) : Ho(tP, f, k, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , oP = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = Nl(ho, t)
      , [s,o] = w.useState(!1)
      , [a,l] = w.useState(!1);
    return uP( () => o(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : S.jsx($0, {
        asChild: !0,
        children: S.jsx(Ml, {
            ...r,
            children: s && S.jsxs(S.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , aP = "ToastTitle"
  , Q0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(it.div, {
        ...r,
        ref: t
    })
}
);
Q0.displayName = aP;
var lP = "ToastDescription"
  , X0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(it.div, {
        ...r,
        ref: t
    })
}
);
X0.displayName = lP;
var q0 = "ToastAction"
  , Z0 = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? S.jsx(ex, {
        altText: n,
        asChild: !0,
        children: S.jsx(Mf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${q0}\`. Expected non-empty \`string\`.`),
    null)
}
);
Z0.displayName = q0;
var J0 = "ToastClose"
  , Mf = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = iP(J0, n);
    return S.jsx(ex, {
        asChild: !0,
        children: S.jsx(it.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Te(e.onClick, i.onClose)
        })
    })
}
);
Mf.displayName = J0;
var ex = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return S.jsx(it.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function tx(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        cP(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (s) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...tx(r))
        }
    }
    ),
    t
}
function Ho(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? F0(i, s) : i.dispatchEvent(s)
}
var nm = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , s = r > i;
    return t === "left" || t === "right" ? s && r > n : !s && i > n
}
;
function uP(e= () => {}
) {
    const t = rr(e);
    ir( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function cP(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function dP(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var fP = W0
  , nx = K0
  , rx = Y0
  , ix = Q0
  , sx = X0
  , ox = Z0
  , ax = Mf;
function lx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = lx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function ux() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = lx(e)) && (r && (r += " "),
        r += t);
    return r
}
const rm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , im = ux
  , hP = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return im(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: s} = t
      , o = Object.keys(i).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = rm(c) || rm(d);
        return i[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(v => {
            let[g,x] = v;
            return Array.isArray(x) ? x.includes({
                ...s,
                ...a
            }[g]) : {
                ...s,
                ...a
            }[g] === x
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return im(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pP = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , cx = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mP = {
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
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gP = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...a}, l) => w.createElement("svg", {
    ref: l,
    ...mP,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: cx("lucide", i),
    ...a
}, [...o.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (e, t) => {
    const n = w.forwardRef( ({className: r, ...i}, s) => w.createElement(gP, {
        ref: s,
        iconNode: t,
        className: cx(`lucide-${pP(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yP = ve("ArrowDown", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vP = ve("ArrowUpRight", [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xP = ve("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wP = ve("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SP = ve("CodeXml", [["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
}], ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
}], ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EP = ve("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = ve("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = ve("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = ve("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CP = ve("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = ve("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = ve("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = ve("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kP = ve("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = ve("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AP = ve("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RP = ve("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = ve("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NP = ve("Wrench", [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = ve("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = ve("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Nf = "-"
  , LP = e => {
    const t = jP(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(Nf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            mx(a, t) || OP(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , mx = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? mx(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const s = e.join(Nf);
    return (o = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : o.classGroupId
}
  , sm = /^\[(.+)\]$/
  , OP = e => {
    if (sm.test(e)) {
        const t = sm.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , jP = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return VP(Object.entries(e.classGroups), n).forEach( ([s,o]) => {
        qc(o, r, s, t)
    }
    ),
    r
}
  , qc = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const s = i === "" ? t : om(t, i);
            s.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (IP(i)) {
                qc(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([s,o]) => {
            qc(o, om(t, s), n, r)
        }
        )
    }
    )
}
  , om = (e, t) => {
    let n = e;
    return t.split(Nf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , IP = e => e.isThemeGetter
  , VP = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([o,a]) => [t + o, a])) : s);
    return [n, i]
}
) : e
  , FP = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (s, o) => {
        n.set(s, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let o = n.get(s);
            if (o !== void 0)
                return o;
            if ((o = r.get(s)) !== void 0)
                return i(s, o),
                o
        },
        set(s, o) {
            n.has(s) ? n.set(s, o) : i(s, o)
        }
    }
}
  , gx = "!"
  , _P = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , s = t.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let x = 0; x < a.length; x++) {
            let m = a[x];
            if (u === 0) {
                if (m === i && (r || a.slice(x, x + s) === t)) {
                    l.push(a.slice(c, x)),
                    c = x + s;
                    continue
                }
                if (m === "/") {
                    d = x;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(gx)
          , v = h ? f.substring(1) : f
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: v,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , zP = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , BP = e => ({
    cache: FP(e.cacheSize),
    parseClassName: _P(e),
    ...LP(e)
})
  , $P = /\s+/
  , UP = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , s = []
      , o = e.trim().split($P);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let v = !!h
          , g = r(v ? f.substring(0, h) : f);
        if (!g) {
            if (!v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = r(f),
            !g) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            v = !1
        }
        const x = zP(c).join(":")
          , m = d ? x + gx : x
          , p = m + g;
        if (s.includes(p))
            continue;
        s.push(p);
        const y = i(g, v);
        for (let E = 0; E < y.length; ++E) {
            const C = y[E];
            s.push(m + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function WP() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = yx(t)) && (r && (r += " "),
        r += n);
    return r
}
const yx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = yx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function HP(e, ...t) {
    let n, r, i, s = o;
    function o(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = BP(u),
        r = n.cache.get,
        i = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = UP(l, n);
        return i(l, c),
        c
    }
    return function() {
        return s(WP.apply(null, arguments))
    }
}
const se = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , vx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , KP = /^\d+\/\d+$/
  , GP = new Set(["px", "full", "screen"])
  , YP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , QP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , XP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , qP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , ZP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , an = e => Si(e) || GP.has(e) || KP.test(e)
  , Rn = e => Hi(e, "length", ok)
  , Si = e => !!e && !Number.isNaN(Number(e))
  , bu = e => Hi(e, "number", Si)
  , ls = e => !!e && Number.isInteger(Number(e))
  , JP = e => e.endsWith("%") && Si(e.slice(0, -1))
  , Y = e => vx.test(e)
  , Mn = e => YP.test(e)
  , ek = new Set(["length", "size", "percentage"])
  , tk = e => Hi(e, ek, xx)
  , nk = e => Hi(e, "position", xx)
  , rk = new Set(["image", "url"])
  , ik = e => Hi(e, rk, lk)
  , sk = e => Hi(e, "", ak)
  , us = () => !0
  , Hi = (e, t, n) => {
    const r = vx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , ok = e => QP.test(e) && !XP.test(e)
  , xx = () => !1
  , ak = e => qP.test(e)
  , lk = e => ZP.test(e)
  , uk = () => {
    const e = se("colors")
      , t = se("spacing")
      , n = se("blur")
      , r = se("brightness")
      , i = se("borderColor")
      , s = se("borderRadius")
      , o = se("borderSpacing")
      , a = se("borderWidth")
      , l = se("contrast")
      , u = se("grayscale")
      , c = se("hueRotate")
      , d = se("invert")
      , f = se("gap")
      , h = se("gradientColorStops")
      , v = se("gradientColorStopPositions")
      , g = se("inset")
      , x = se("margin")
      , m = se("opacity")
      , p = se("padding")
      , y = se("saturate")
      , E = se("scale")
      , C = se("sepia")
      , T = se("skew")
      , b = se("space")
      , P = se("translate")
      , N = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , V = () => ["auto", Y, t]
      , j = () => [Y, t]
      , U = () => ["", an, Rn]
      , O = () => ["auto", Si, Y]
      , W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", Y]
      , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , $ = () => [Si, Y];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [us],
            spacing: [an, Rn],
            blur: ["none", "", Mn, Y],
            brightness: $(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Mn, Y],
            borderSpacing: j(),
            borderWidth: U(),
            contrast: $(),
            grayscale: R(),
            hueRotate: $(),
            invert: R(),
            gap: j(),
            gradientColorStops: [e],
            gradientColorStopPositions: [JP, Rn],
            inset: V(),
            margin: V(),
            opacity: $(),
            padding: j(),
            saturate: $(),
            scale: $(),
            sepia: R(),
            skew: $(),
            space: j(),
            translate: j()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Y]
            }],
            container: ["container"],
            columns: [{
                columns: [Mn]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...W(), Y]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: N()
            }],
            "overscroll-x": [{
                "overscroll-x": N()
            }],
            "overscroll-y": [{
                "overscroll-y": N()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ls, Y]
            }],
            basis: [{
                basis: V()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Y]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", ls, Y]
            }],
            "grid-cols": [{
                "grid-cols": [us]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ls, Y]
                }, Y]
            }],
            "col-start": [{
                "col-start": O()
            }],
            "col-end": [{
                "col-end": O()
            }],
            "grid-rows": [{
                "grid-rows": [us]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ls, Y]
                }, Y]
            }],
            "row-start": [{
                "row-start": O()
            }],
            "row-end": [{
                "row-end": O()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Y]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Y]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [b]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [b]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t]
            }],
            "min-w": [{
                "min-w": [Y, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Y, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Mn]
                }, Mn]
            }],
            h: [{
                h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Y, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Mn, Rn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bu]
            }],
            "font-family": [{
                font: [us]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Si, bu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, Y]
            }],
            "list-image": [{
                "list-image": ["none", Y]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Y]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", an, Rn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", an, Y]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: j()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Y]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...W(), nk]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", tk]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, ik]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [an, Y]
            }],
            "outline-w": [{
                outline: [an, Rn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [an, Rn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Mn, sk]
            }],
            "shadow-color": [{
                shadow: [us]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Mn, Y]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
            }],
            duration: [{
                duration: $()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Y]
            }],
            delay: [{
                delay: $()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Y]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [E]
            }],
            "scale-x": [{
                "scale-x": [E]
            }],
            "scale-y": [{
                "scale-y": [E]
            }],
            rotate: [{
                rotate: [ls, Y]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": j()
            }],
            "scroll-mx": [{
                "scroll-mx": j()
            }],
            "scroll-my": [{
                "scroll-my": j()
            }],
            "scroll-ms": [{
                "scroll-ms": j()
            }],
            "scroll-me": [{
                "scroll-me": j()
            }],
            "scroll-mt": [{
                "scroll-mt": j()
            }],
            "scroll-mr": [{
                "scroll-mr": j()
            }],
            "scroll-mb": [{
                "scroll-mb": j()
            }],
            "scroll-ml": [{
                "scroll-ml": j()
            }],
            "scroll-p": [{
                "scroll-p": j()
            }],
            "scroll-px": [{
                "scroll-px": j()
            }],
            "scroll-py": [{
                "scroll-py": j()
            }],
            "scroll-ps": [{
                "scroll-ps": j()
            }],
            "scroll-pe": [{
                "scroll-pe": j()
            }],
            "scroll-pt": [{
                "scroll-pt": j()
            }],
            "scroll-pr": [{
                "scroll-pr": j()
            }],
            "scroll-pb": [{
                "scroll-pb": j()
            }],
            "scroll-pl": [{
                "scroll-pl": j()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Y]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [an, Rn, bu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , ck = HP(uk);
function Ur(...e) {
    return ck(ux(e))
}
const dk = fP
  , wx = w.forwardRef( ({className: e, ...t}, n) => S.jsx(nx, {
    ref: n,
    className: Ur("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
wx.displayName = nx.displayName;
const fk = hP("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Sx = w.forwardRef( ({className: e, variant: t, ...n}, r) => S.jsx(rx, {
    ref: r,
    className: Ur(fk({
        variant: t
    }), e),
    ...n
}));
Sx.displayName = rx.displayName;
const hk = w.forwardRef( ({className: e, ...t}, n) => S.jsx(ox, {
    ref: n,
    className: Ur("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
hk.displayName = ox.displayName;
const Ex = w.forwardRef( ({className: e, ...t}, n) => S.jsx(ax, {
    ref: n,
    className: Ur("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(px, {
        className: "h-4 w-4"
    })
}));
Ex.displayName = ax.displayName;
const Cx = w.forwardRef( ({className: e, ...t}, n) => S.jsx(ix, {
    ref: n,
    className: Ur("text-sm font-semibold", e),
    ...t
}));
Cx.displayName = ix.displayName;
const Tx = w.forwardRef( ({className: e, ...t}, n) => S.jsx(sx, {
    ref: n,
    className: Ur("text-sm opacity-90", e),
    ...t
}));
Tx.displayName = sx.displayName;
function pk() {
    const {toasts: e} = wb();
    return S.jsxs(dk, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...s}) {
            return S.jsxs(Sx, {
                ...s,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(Cx, {
                        children: n
                    }), r && S.jsx(Tx, {
                        children: r
                    })]
                }), i, S.jsx(Ex, {})]
            }, t)
        }), S.jsx(wx, {})]
    })
}
const mk = ["top", "right", "bottom", "left"]
  , sr = Math.min
  , ot = Math.max
  , Qa = Math.round
  , Ko = Math.floor
  , nn = e => ({
    x: e,
    y: e
})
  , gk = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , yk = {
    start: "end",
    end: "start"
};
function Zc(e, t, n) {
    return ot(e, sr(t, n))
}
function xn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function wn(e) {
    return e.split("-")[0]
}
function Ki(e) {
    return e.split("-")[1]
}
function Df(e) {
    return e === "x" ? "y" : "x"
}
function Lf(e) {
    return e === "y" ? "height" : "width"
}
const vk = new Set(["top", "bottom"]);
function Jt(e) {
    return vk.has(wn(e)) ? "y" : "x"
}
function Of(e) {
    return Df(Jt(e))
}
function xk(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ki(e)
      , i = Of(e)
      , s = Lf(i);
    let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (o = Xa(o)),
    [o, Xa(o)]
}
function wk(e) {
    const t = Xa(e);
    return [Jc(e), t, Jc(t)]
}
function Jc(e) {
    return e.replace(/start|end/g, t => yk[t])
}
const am = ["left", "right"]
  , lm = ["right", "left"]
  , Sk = ["top", "bottom"]
  , Ek = ["bottom", "top"];
function Ck(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? lm : am : t ? am : lm;
    case "left":
    case "right":
        return t ? Sk : Ek;
    default:
        return []
    }
}
function Tk(e, t, n, r) {
    const i = Ki(e);
    let s = Ck(wn(e), n === "start", r);
    return i && (s = s.map(o => o + "-" + i),
    t && (s = s.concat(s.map(Jc)))),
    s
}
function Xa(e) {
    return e.replace(/left|right|bottom|top/g, t => gk[t])
}
function bk(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function bx(e) {
    return typeof e != "number" ? bk(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function qa(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function um(e, t, n) {
    let {reference: r, floating: i} = e;
    const s = Jt(t)
      , o = Of(t)
      , a = Lf(o)
      , l = wn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , d = r.y + r.height / 2 - i.height / 2
      , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (Ki(t)) {
    case "start":
        h[o] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[o] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const Pk = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: s=[], platform: o} = n
      , a = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: d} = um(u, r, l)
      , f = r
      , h = {}
      , v = 0;
    for (let g = 0; g < a.length; g++) {
        const {name: x, fn: m} = a[g]
          , {x: p, y, data: E, reset: C} = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        d = y ?? d,
        h = {
            ...h,
            [x]: {
                ...h[x],
                ...E
            }
        },
        C && v <= 50 && (v++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : C.rects),
        {x: c, y: d} = um(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
;
async function Zs(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: s, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = xn(t, e)
      , v = bx(h)
      , x = a[f ? d === "floating" ? "reference" : "floating" : d]
      , m = qa(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = d === "floating" ? {
        x: r,
        y: i,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , E = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = qa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: y,
        strategy: l
    }) : p);
    return {
        top: (m.top - C.top + v.top) / E.y,
        bottom: (C.bottom - m.bottom + v.bottom) / E.y,
        left: (m.left - C.left + v.left) / E.x,
        right: (C.right - m.right + v.right) / E.x
    }
}
const kk = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = xn(e, t) || {};
        if (u == null)
            return {};
        const d = bx(c)
          , f = {
            x: n,
            y: r
        }
          , h = Of(i)
          , v = Lf(h)
          , g = await o.getDimensions(u)
          , x = h === "y"
          , m = x ? "top" : "left"
          , p = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , E = s.reference[v] + s.reference[h] - f[h] - s.floating[v]
          , C = f[h] - s.reference[h]
          , T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let b = T ? T[y] : 0;
        (!b || !await (o.isElement == null ? void 0 : o.isElement(T))) && (b = a.floating[y] || s.floating[v]);
        const P = E / 2 - C / 2
          , N = b / 2 - g[v] / 2 - 1
          , A = sr(d[m], N)
          , V = sr(d[p], N)
          , j = A
          , U = b - g[v] - V
          , O = b / 2 - g[v] / 2 + P
          , W = Zc(j, O, U)
          , z = !l.arrow && Ki(i) != null && O !== W && s.reference[v] / 2 - (O < j ? A : V) - g[v] / 2 < 0
          , H = z ? O < j ? O - j : O - U : 0;
        return {
            [h]: f[h] + H,
            data: {
                [h]: W,
                centerOffset: O - W - H,
                ...z && {
                    alignmentOffset: H
                }
            },
            reset: z
        }
    }
})
  , Ak = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: g=!0, ...x} = xn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const m = wn(i)
              , p = Jt(a)
              , y = wn(a) === a
              , E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (y || !g ? [Xa(a)] : wk(a))
              , T = v !== "none";
            !f && T && C.push(...Tk(a, g, v, E));
            const b = [a, ...C]
              , P = await Zs(t, x)
              , N = [];
            let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && N.push(P[m]),
            d) {
                const O = xk(i, o, E);
                N.push(P[O[0]], P[O[1]])
            }
            if (A = [...A, {
                placement: i,
                overflows: N
            }],
            !N.every(O => O <= 0)) {
                var V, j;
                const O = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1
                  , W = b[O];
                if (W && (!(d === "alignment" ? p !== Jt(W) : !1) || A.every(k => k.overflows[0] > 0 && Jt(k.placement) === p)))
                    return {
                        data: {
                            index: O,
                            overflows: A
                        },
                        reset: {
                            placement: W
                        }
                    };
                let z = (j = A.filter(H => H.overflows[0] <= 0).sort( (H, k) => H.overflows[1] - k.overflows[1])[0]) == null ? void 0 : j.placement;
                if (!z)
                    switch (h) {
                    case "bestFit":
                        {
                            var U;
                            const H = (U = A.filter(k => {
                                if (T) {
                                    const R = Jt(k.placement);
                                    return R === p || R === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(R => R > 0).reduce( (R, I) => R + I, 0)]).sort( (k, R) => k[1] - R[1])[0]) == null ? void 0 : U[0];
                            H && (z = H);
                            break
                        }
                    case "initialPlacement":
                        z = a;
                        break
                    }
                if (i !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function cm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function dm(e) {
    return mk.some(t => e[t] >= 0)
}
const Rk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = xn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Zs(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , o = cm(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: dm(o)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Zs(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , o = cm(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: dm(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Px = new Set(["left", "top"]);
async function Mk(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = wn(n)
      , a = Ki(n)
      , l = Jt(n) === "y"
      , u = Px.has(o) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = xn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: v} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const Nk = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: s, placement: o, middlewareData: a} = t
              , l = await Mk(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , Dk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: a={
                fn: x => {
                    let {x: m, y: p} = x;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...l} = xn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zs(t, l)
              , d = Jt(wn(i))
              , f = Df(d);
            let h = u[f]
              , v = u[d];
            if (s) {
                const x = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , p = h + c[x]
                  , y = h - c[m];
                h = Zc(p, h, y)
            }
            if (o) {
                const x = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , p = v + c[x]
                  , y = v - c[m];
                v = Zc(p, v, y)
            }
            const g = a.fn({
                ...t,
                [f]: h,
                [d]: v
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [f]: s,
                        [d]: o
                    }
                }
            }
        }
    }
}
  , Lk = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: s, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = xn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = Jt(i)
              , f = Df(d);
            let h = c[f]
              , v = c[d];
            const g = xn(a, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , E = s.reference[f] - s.floating[y] + x.mainAxis
                  , C = s.reference[f] + s.reference[y] - x.mainAxis;
                h < E ? h = E : h > C && (h = C)
            }
            if (u) {
                var m, p;
                const y = f === "y" ? "width" : "height"
                  , E = Px.has(wn(i))
                  , C = s.reference[d] - s.floating[y] + (E && ((m = o.offset) == null ? void 0 : m[d]) || 0) + (E ? 0 : x.crossAxis)
                  , T = s.reference[d] + s.reference[y] + (E ? 0 : ((p = o.offset) == null ? void 0 : p[d]) || 0) - (E ? x.crossAxis : 0);
                v < C ? v = C : v > T && (v = T)
            }
            return {
                [f]: h,
                [d]: v
            }
        }
    }
}
  , Ok = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: s, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = xn(e, t)
              , c = await Zs(t, u)
              , d = wn(i)
              , f = Ki(i)
              , h = Jt(i) === "y"
              , {width: v, height: g} = s.floating;
            let x, m;
            d === "top" || d === "bottom" ? (x = d,
            m = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            x = f === "end" ? "top" : "bottom");
            const p = g - c.top - c.bottom
              , y = v - c.left - c.right
              , E = sr(g - c[x], p)
              , C = sr(v - c[m], y)
              , T = !t.middlewareData.shift;
            let b = E
              , P = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = p),
            T && !f) {
                const A = ot(c.left, 0)
                  , V = ot(c.right, 0)
                  , j = ot(c.top, 0)
                  , U = ot(c.bottom, 0);
                h ? P = v - 2 * (A !== 0 || V !== 0 ? A + V : ot(c.left, c.right)) : b = g - 2 * (j !== 0 || U !== 0 ? j + U : ot(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: b
            });
            const N = await o.getDimensions(a.floating);
            return v !== N.width || g !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Dl() {
    return typeof window < "u"
}
function Gi(e) {
    return kx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ut(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function on(e) {
    var t;
    return (t = (kx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function kx(e) {
    return Dl() ? e instanceof Node || e instanceof ut(e).Node : !1
}
function $t(e) {
    return Dl() ? e instanceof Element || e instanceof ut(e).Element : !1
}
function sn(e) {
    return Dl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1
}
function fm(e) {
    return !Dl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot
}
const jk = new Set(["inline", "contents"]);
function po(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Ut(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !jk.has(i)
}
const Ik = new Set(["table", "td", "th"]);
function Vk(e) {
    return Ik.has(Gi(e))
}
const Fk = [":popover-open", ":modal"];
function Ll(e) {
    return Fk.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const _k = ["transform", "translate", "scale", "rotate", "perspective"]
  , zk = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Bk = ["paint", "layout", "strict", "content"];
function jf(e) {
    const t = If()
      , n = $t(e) ? Ut(e) : e;
    return _k.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || zk.some(r => (n.willChange || "").includes(r)) || Bk.some(r => (n.contain || "").includes(r))
}
function $k(e) {
    let t = or(e);
    for (; sn(t) && !Fi(t); ) {
        if (jf(t))
            return t;
        if (Ll(t))
            return null;
        t = or(t)
    }
    return null
}
function If() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Uk = new Set(["html", "body", "#document"]);
function Fi(e) {
    return Uk.has(Gi(e))
}
function Ut(e) {
    return ut(e).getComputedStyle(e)
}
function Ol(e) {
    return $t(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function or(e) {
    if (Gi(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || fm(e) && e.host || on(e);
    return fm(t) ? t.host : t
}
function Ax(e) {
    const t = or(e);
    return Fi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : sn(t) && po(t) ? t : Ax(t)
}
function Js(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = Ax(e)
      , s = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = ut(i);
    if (s) {
        const a = ed(o);
        return t.concat(o, o.visualViewport || [], po(i) ? i : [], a && n ? Js(a) : [])
    }
    return t.concat(i, Js(i, [], n))
}
function ed(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Rx(e) {
    const t = Ut(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = sn(e)
      , s = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , a = Qa(n) !== s || Qa(r) !== o;
    return a && (n = s,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function Vf(e) {
    return $t(e) ? e : e.contextElement
}
function Ei(e) {
    const t = Vf(e);
    if (!sn(t))
        return nn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: s} = Rx(t);
    let o = (s ? Qa(n.width) : n.width) / r
      , a = (s ? Qa(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const Wk = nn(0);
function Mx(e) {
    const t = ut(e);
    return !If() || !t.visualViewport ? Wk : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Hk(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== ut(e) ? !1 : t
}
function zr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , s = Vf(e);
    let o = nn(1);
    t && (r ? $t(r) && (o = Ei(r)) : o = Ei(e));
    const a = Hk(s, n, r) ? Mx(s) : nn(0);
    let l = (i.left + a.x) / o.x
      , u = (i.top + a.y) / o.y
      , c = i.width / o.x
      , d = i.height / o.y;
    if (s) {
        const f = ut(s)
          , h = r && $t(r) ? ut(r) : r;
        let v = f
          , g = ed(v);
        for (; g && r && h !== v; ) {
            const x = Ei(g)
              , m = g.getBoundingClientRect()
              , p = Ut(g)
              , y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x
              , E = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            c *= x.x,
            d *= x.y,
            l += y,
            u += E,
            v = ut(g),
            g = ed(v)
        }
    }
    return qa({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Ff(e, t) {
    const n = Ol(e).scrollLeft;
    return t ? t.left + n : zr(on(e)).left + n
}
function Nx(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , i = r.left + t.scrollLeft - (n ? 0 : Ff(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: i,
        y: s
    }
}
function Kk(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const s = i === "fixed"
      , o = on(r)
      , a = t ? Ll(t.floating) : !1;
    if (r === o || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = nn(1);
    const c = nn(0)
      , d = sn(r);
    if ((d || !d && !s) && ((Gi(r) !== "body" || po(o)) && (l = Ol(r)),
    sn(r))) {
        const h = zr(r);
        u = Ei(r),
        c.x = h.x + r.clientLeft,
        c.y = h.y + r.clientTop
    }
    const f = o && !d && !s ? Nx(o, l, !0) : nn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function Gk(e) {
    return Array.from(e.getClientRects())
}
function Yk(e) {
    const t = on(e)
      , n = Ol(e)
      , r = e.ownerDocument.body
      , i = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + Ff(e);
    const a = -n.scrollTop;
    return Ut(r).direction === "rtl" && (o += ot(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: s,
        x: o,
        y: a
    }
}
function Qk(e, t) {
    const n = ut(e)
      , r = on(e)
      , i = n.visualViewport;
    let s = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        s = i.width,
        o = i.height;
        const u = If();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a,
        y: l
    }
}
const Xk = new Set(["absolute", "fixed"]);
function qk(e, t) {
    const n = zr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , s = sn(e) ? Ei(e) : nn(1)
      , o = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = i * s.x
      , u = r * s.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function hm(e, t, n) {
    let r;
    if (t === "viewport")
        r = Qk(e, n);
    else if (t === "document")
        r = Yk(on(e));
    else if ($t(t))
        r = qk(t, n);
    else {
        const i = Mx(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return qa(r)
}
function Dx(e, t) {
    const n = or(e);
    return n === t || !$t(n) || Fi(n) ? !1 : Ut(n).position === "fixed" || Dx(n, t)
}
function Zk(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Js(e, [], !1).filter(a => $t(a) && Gi(a) !== "body")
      , i = null;
    const s = Ut(e).position === "fixed";
    let o = s ? or(e) : e;
    for (; $t(o) && !Fi(o); ) {
        const a = Ut(o)
          , l = jf(o);
        !l && a.position === "fixed" && (i = null),
        (s ? !l && !i : !l && a.position === "static" && !!i && Xk.has(i.position) || po(o) && !l && Dx(e, o)) ? r = r.filter(c => c !== o) : i = a,
        o = or(o)
    }
    return t.set(e, r),
    r
}
function Jk(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const o = [...n === "clippingAncestors" ? Ll(t) ? [] : Zk(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const d = hm(t, c, i);
        return u.top = ot(d.top, u.top),
        u.right = sr(d.right, u.right),
        u.bottom = sr(d.bottom, u.bottom),
        u.left = ot(d.left, u.left),
        u
    }
    , hm(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function e2(e) {
    const {width: t, height: n} = Rx(e);
    return {
        width: t,
        height: n
    }
}
function t2(e, t, n) {
    const r = sn(t)
      , i = on(t)
      , s = n === "fixed"
      , o = zr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = nn(0);
    function u() {
        l.x = Ff(i)
    }
    if (r || !r && !s)
        if ((Gi(t) !== "body" || po(i)) && (a = Ol(t)),
        r) {
            const h = zr(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            i && u();
    s && !r && i && u();
    const c = i && !r && !s ? Nx(i, a) : nn(0)
      , d = o.left + a.scrollLeft - l.x - c.x
      , f = o.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: o.width,
        height: o.height
    }
}
function Pu(e) {
    return Ut(e).position === "static"
}
function pm(e, t) {
    if (!sn(e) || Ut(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return on(e) === n && (n = n.ownerDocument.body),
    n
}
function Lx(e, t) {
    const n = ut(e);
    if (Ll(e))
        return n;
    if (!sn(e)) {
        let i = or(e);
        for (; i && !Fi(i); ) {
            if ($t(i) && !Pu(i))
                return i;
            i = or(i)
        }
        return n
    }
    let r = pm(e, t);
    for (; r && Vk(r) && Pu(r); )
        r = pm(r, t);
    return r && Fi(r) && Pu(r) && !jf(r) ? n : r || $k(e) || n
}
const n2 = async function(e) {
    const t = this.getOffsetParent || Lx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: t2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function r2(e) {
    return Ut(e).direction === "rtl"
}
const i2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Kk,
    getDocumentElement: on,
    getClippingRect: Jk,
    getOffsetParent: Lx,
    getElementRects: n2,
    getClientRects: Gk,
    getDimensions: e2,
    getScale: Ei,
    isElement: $t,
    isRTL: r2
};
function Ox(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function s2(e, t) {
    let n = null, r;
    const i = on(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: h} = u;
        if (a || t(),
        !f || !h)
            return;
        const v = Ko(d)
          , g = Ko(i.clientWidth - (c + f))
          , x = Ko(i.clientHeight - (d + h))
          , m = Ko(c)
          , y = {
            rootMargin: -v + "px " + -g + "px " + -x + "px " + -m + "px",
            threshold: ot(0, sr(1, l)) || 1
        };
        let E = !0;
        function C(T) {
            const b = T[0].intersectionRatio;
            if (b !== l) {
                if (!E)
                    return o();
                b ? o(!1, b) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            b === 1 && !Ox(u, e.getBoundingClientRect()) && o(),
            E = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...y,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,y)
        }
        n.observe(e)
    }
    return o(!0),
    s
}
function o2(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Vf(e)
      , c = i || s ? [...u ? Js(u) : [], ...Js(t)] : [];
    c.forEach(m => {
        i && m.addEventListener("scroll", n, {
            passive: !0
        }),
        s && m.addEventListener("resize", n)
    }
    );
    const d = u && a ? s2(u, n) : null;
    let f = -1
      , h = null;
    o && (h = new ResizeObserver(m => {
        let[p] = m;
        p && p.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var y;
            (y = h) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let v, g = l ? zr(e) : null;
    l && x();
    function x() {
        const m = zr(e);
        g && !Ox(g, m) && n(),
        g = m,
        v = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var m;
        c.forEach(p => {
            i && p.removeEventListener("scroll", n),
            s && p.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        h = null,
        l && cancelAnimationFrame(v)
    }
}
const a2 = Nk
  , l2 = Dk
  , u2 = Ak
  , c2 = Ok
  , d2 = Rk
  , mm = kk
  , f2 = Lk
  , h2 = (e, t, n) => {
    const r = new Map
      , i = {
        platform: i2,
        ...n
    }
      , s = {
        ...i.platform,
        _c: r
    };
    return Pk(e, t, {
        ...i,
        platform: s
    })
}
;
var p2 = typeof document < "u"
  , m2 = function() {}
  , pa = p2 ? w.useLayoutEffect : m2;
function Za(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Za(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = i[r];
            if (!(s === "_owner" && e.$$typeof) && !Za(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function jx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function gm(e, t) {
    const n = jx(e);
    return Math.round(t * n) / n
}
function ku(e) {
    const t = w.useRef(e);
    return pa( () => {
        t.current = e
    }
    ),
    t
}
function g2(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: s, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = w.useState(r);
    Za(f, r) || h(r);
    const [v,g] = w.useState(null)
      , [x,m] = w.useState(null)
      , p = w.useCallback(k => {
        k !== T.current && (T.current = k,
        g(k))
    }
    , [])
      , y = w.useCallback(k => {
        k !== b.current && (b.current = k,
        m(k))
    }
    , [])
      , E = s || v
      , C = o || x
      , T = w.useRef(null)
      , b = w.useRef(null)
      , P = w.useRef(c)
      , N = l != null
      , A = ku(l)
      , V = ku(i)
      , j = ku(u)
      , U = w.useCallback( () => {
        if (!T.current || !b.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        V.current && (k.platform = V.current),
        h2(T.current, b.current, k).then(R => {
            const I = {
                ...R,
                isPositioned: j.current !== !1
            };
            O.current && !Za(P.current, I) && (P.current = I,
            fo.flushSync( () => {
                d(I)
            }
            ))
        }
        )
    }
    , [f, t, n, V, j]);
    pa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const O = w.useRef(!1);
    pa( () => (O.current = !0,
    () => {
        O.current = !1
    }
    ), []),
    pa( () => {
        if (E && (T.current = E),
        C && (b.current = C),
        E && C) {
            if (A.current)
                return A.current(E, C, U);
            U()
        }
    }
    , [E, C, U, A, N]);
    const W = w.useMemo( () => ({
        reference: T,
        floating: b,
        setReference: p,
        setFloating: y
    }), [p, y])
      , z = w.useMemo( () => ({
        reference: E,
        floating: C
    }), [E, C])
      , H = w.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return k;
        const R = gm(z.floating, c.x)
          , I = gm(z.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + R + "px, " + I + "px)",
            ...jx(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: I
        }
    }
    , [n, a, z.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: U,
        refs: W,
        elements: z,
        floatingStyles: H
    }), [c, U, W, z, H])
}
const y2 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? mm({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? mm({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , v2 = (e, t) => ({
    ...a2(e),
    options: [e, t]
})
  , x2 = (e, t) => ({
    ...l2(e),
    options: [e, t]
})
  , w2 = (e, t) => ({
    ...f2(e),
    options: [e, t]
})
  , S2 = (e, t) => ({
    ...u2(e),
    options: [e, t]
})
  , E2 = (e, t) => ({
    ...c2(e),
    options: [e, t]
})
  , C2 = (e, t) => ({
    ...d2(e),
    options: [e, t]
})
  , T2 = (e, t) => ({
    ...y2(e),
    options: [e, t]
});
var b2 = "Arrow"
  , Ix = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...s} = e;
    return S.jsx(it.svg, {
        ...s,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Ix.displayName = b2;
var P2 = Ix;
function k2(e) {
    const [t,n] = w.useState(void 0);
    return ir( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const s = i[0];
                let o, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Vx = "Popper"
  , [Fx,_x] = Rl(Vx)
  , [YL,zx] = Fx(Vx)
  , Bx = "PopperAnchor"
  , $x = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , s = zx(Bx, n)
      , o = w.useRef(null)
      , a = Bt(t, o);
    return w.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : S.jsx(it.div, {
        ...i,
        ref: a
    })
}
);
$x.displayName = Bx;
var _f = "PopperContent"
  , [A2,R2] = Fx(_f)
  , Ux = w.forwardRef( (e, t) => {
    var te, Wr, En, hr, Cn, Hr;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: s="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: v, ...g} = e
      , x = zx(_f, n)
      , [m,p] = w.useState(null)
      , y = Bt(t, Tn => p(Tn))
      , [E,C] = w.useState(null)
      , T = k2(E)
      , b = (T == null ? void 0 : T.width) ?? 0
      , P = (T == null ? void 0 : T.height) ?? 0
      , N = r + (s !== "center" ? "-" + s : "")
      , A = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , V = Array.isArray(u) ? u : [u]
      , j = V.length > 0
      , U = {
        padding: A,
        boundary: V.filter(N2),
        altBoundary: j
    }
      , {refs: O, floatingStyles: W, placement: z, isPositioned: H, middlewareData: k} = g2({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Tn) => o2(...Tn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [v2({
            mainAxis: i + P,
            alignmentAxis: o
        }), l && x2({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? w2() : void 0,
            ...U
        }), l && S2({
            ...U
        }), E2({
            ...U,
            apply: ({elements: Tn, rects: So, availableWidth: Wl, availableHeight: Eo}) => {
                const {width: Hl, height: Zi} = So.reference
                  , Kr = Tn.floating.style;
                Kr.setProperty("--radix-popper-available-width", `${Wl}px`),
                Kr.setProperty("--radix-popper-available-height", `${Eo}px`),
                Kr.setProperty("--radix-popper-anchor-width", `${Hl}px`),
                Kr.setProperty("--radix-popper-anchor-height", `${Zi}px`)
            }
        }), E && T2({
            element: E,
            padding: a
        }), D2({
            arrowWidth: b,
            arrowHeight: P
        }), f && C2({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [R,I] = Kx(z)
      , $ = rr(v);
    ir( () => {
        H && ($ == null || $())
    }
    , [H, $]);
    const B = (te = k.arrow) == null ? void 0 : te.x
      , Q = (Wr = k.arrow) == null ? void 0 : Wr.y
      , q = ((En = k.arrow) == null ? void 0 : En.centerOffset) !== 0
      , [xe,Le] = w.useState();
    return ir( () => {
        m && Le(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    S.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...W,
            transform: H ? W.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: xe,
            "--radix-popper-transform-origin": [(hr = k.transformOrigin) == null ? void 0 : hr.x, (Cn = k.transformOrigin) == null ? void 0 : Cn.y].join(" "),
            ...((Hr = k.hide) == null ? void 0 : Hr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(A2, {
            scope: n,
            placedSide: R,
            onArrowChange: C,
            arrowX: B,
            arrowY: Q,
            shouldHideArrow: q,
            children: S.jsx(it.div, {
                "data-side": R,
                "data-align": I,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
Ux.displayName = _f;
var Wx = "PopperArrow"
  , M2 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Hx = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , s = R2(Wx, r)
      , o = M2[s.placedSide];
    return S.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: S.jsx(P2, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
Hx.displayName = Wx;
function N2(e) {
    return e !== null
}
var D2 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, p;
        const {placement: n, rects: r, middlewareData: i} = t
          , o = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,c] = Kx(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((m = i.arrow) == null ? void 0 : m.x) ?? 0) + a / 2
          , h = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let v = ""
          , g = "";
        return u === "bottom" ? (v = o ? d : `${f}px`,
        g = `${-l}px`) : u === "top" ? (v = o ? d : `${f}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`,
        g = o ? d : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`,
        g = o ? d : `${h}px`),
        {
            data: {
                x: v,
                y: g
            }
        }
    }
});
function Kx(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var L2 = $x
  , O2 = Ux
  , j2 = Hx
  , [jl,QL] = Rl("Tooltip", [_x])
  , zf = _x()
  , Gx = "TooltipProvider"
  , I2 = 700
  , ym = "tooltip.open"
  , [V2,Yx] = jl(Gx)
  , Qx = e => {
    const {__scopeTooltip: t, delayDuration: n=I2, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: s} = e
      , o = w.useRef(!0)
      , a = w.useRef(!1)
      , l = w.useRef(0);
    return w.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    S.jsx(V2, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: i,
        children: s
    })
}
;
Qx.displayName = Gx;
var Xx = "Tooltip"
  , [XL,Il] = jl(Xx)
  , td = "TooltipTrigger"
  , F2 = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Il(td, n)
      , s = Yx(td, n)
      , o = zf(n)
      , a = w.useRef(null)
      , l = Bt(t, a, i.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , d = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    S.jsx(L2, {
        asChild: !0,
        ...o,
        children: S.jsx(it.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Te(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Te(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Te(e.onPointerDown, () => {
                i.open && i.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Te(e.onFocus, () => {
                u.current || i.onOpen()
            }
            ),
            onBlur: Te(e.onBlur, i.onClose),
            onClick: Te(e.onClick, i.onClose)
        })
    })
}
);
F2.displayName = td;
var _2 = "TooltipPortal"
  , [qL,z2] = jl(_2, {
    forceMount: void 0
})
  , _i = "TooltipContent"
  , qx = w.forwardRef( (e, t) => {
    const n = z2(_i, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...s} = e
      , o = Il(_i, e.__scopeTooltip);
    return S.jsx(kf, {
        present: r || o.open,
        children: o.disableHoverableContent ? S.jsx(Zx, {
            side: i,
            ...s,
            ref: t
        }) : S.jsx(B2, {
            side: i,
            ...s,
            ref: t
        })
    })
}
)
  , B2 = w.forwardRef( (e, t) => {
    const n = Il(_i, e.__scopeTooltip)
      , r = Yx(_i, e.__scopeTooltip)
      , i = w.useRef(null)
      , s = Bt(t, i)
      , [o,a] = w.useState(null)
      , {trigger: l, onClose: u} = n
      , c = i.current
      , {onPointerInTransitChange: d} = r
      , f = w.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = w.useCallback( (v, g) => {
        const x = v.currentTarget
          , m = {
            x: v.clientX,
            y: v.clientY
        }
          , p = K2(m, x.getBoundingClientRect())
          , y = G2(m, p)
          , E = Y2(g.getBoundingClientRect())
          , C = X2([...y, ...E]);
        a(C),
        d(!0)
    }
    , [d]);
    return w.useEffect( () => () => f(), [f]),
    w.useEffect( () => {
        if (l && c) {
            const v = x => h(x, c)
              , g = x => h(x, l);
            return l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, h, f]),
    w.useEffect( () => {
        if (o) {
            const v = g => {
                const x = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , y = !Q2(m, o);
                p ? f() : y && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
        }
    }
    , [l, c, o, u, f]),
    S.jsx(Zx, {
        ...e,
        ref: s
    })
}
)
  , [$2,U2] = jl(Xx, {
    isInside: !1
})
  , W2 = Cb("TooltipContent")
  , Zx = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: s, onPointerDownOutside: o, ...a} = e
      , l = Il(_i, n)
      , u = zf(n)
      , {onClose: c} = l;
    return w.useEffect( () => (document.addEventListener(ym, c),
    () => document.removeEventListener(ym, c)), [c]),
    w.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    S.jsx(Pf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(O2, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(W2, {
                children: r
            }), S.jsx($2, {
                scope: n,
                isInside: !0,
                children: S.jsx(Yb, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
qx.displayName = _i;
var Jx = "TooltipArrow"
  , H2 = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = zf(n);
    return U2(Jx, n).isInside ? null : S.jsx(j2, {
        ...i,
        ...r,
        ref: t
    })
}
);
H2.displayName = Jx;
function K2(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, s)) {
    case s:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function G2(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Y2(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function Q2(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
        const a = t[s]
          , l = t[o]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function X2(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    q2(t)
}
function q2(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , o = t[t.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , o = n[n.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Z2 = Qx
  , ew = qx;
const J2 = Z2
  , eA = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => S.jsx(ew, {
    ref: r,
    sideOffset: t,
    className: Ur("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
eA.displayName = ew.displayName;
const Bf = w.createContext({});
function Yi(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const tA = typeof window < "u"
  , Vl = tA ? w.useLayoutEffect : w.useEffect
  , Fl = w.createContext(null);
function $f(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ja(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const Wt = (e, t, n) => n > t ? t : n < e ? e : n;
let _l = () => {}
  , ar = () => {}
;
const lr = {}
  , tw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function nw(e) {
    return typeof e == "object" && e !== null
}
const rw = e => /^0[^.\s]+$/u.test(e);
function iw(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const tt = e => e
  , nA = (e, t) => n => t(e(n))
  , mo = (...e) => e.reduce(nA)
  , zi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Uf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return $f(this.subscriptions, t),
        () => Ja(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const nt = e => e * 1e3
  , vt = e => e / 1e3;
function Wf(e, t) {
    return t ? e * (1e3 / t) : 0
}
const sw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , rA = 1e-7
  , iA = 12;
function sA(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = sw(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > rA && ++a < iA);
    return o
}
function go(e, t, n, r) {
    if (e === t && n === r)
        return tt;
    const i = s => sA(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : sw(i(s), t, r)
}
const ow = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , aw = e => t => 1 - e(1 - t)
  , lw = go(.33, 1.53, .69, .99)
  , Hf = aw(lw)
  , uw = ow(Hf)
  , cw = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Hf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Kf = e => 1 - Math.sin(Math.acos(e))
  , dw = aw(Kf)
  , fw = ow(Kf)
  , oA = go(.42, 0, 1, 1)
  , aA = go(0, 0, .58, 1)
  , hw = go(.42, 0, .58, 1)
  , lA = e => Array.isArray(e) && typeof e[0] != "number"
  , pw = e => Array.isArray(e) && typeof e[0] == "number"
  , vm = {
    linear: tt,
    easeIn: oA,
    easeInOut: hw,
    easeOut: aA,
    circIn: Kf,
    circInOut: fw,
    circOut: dw,
    backIn: Hf,
    backInOut: uw,
    backOut: lw,
    anticipate: cw
}
  , uA = e => typeof e == "string"
  , xm = e => {
    if (pw(e)) {
        ar(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return go(t, n, r, i)
    } else if (uA(e))
        return ar(vm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        vm[e];
    return e
}
  , Go = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , wm = {
    value: null,
    addProjectionMetrics: null
};
function cA(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        o.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const g = h && i ? n : r;
            return f && o.add(d),
            g.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            o.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            i) {
                s = !0;
                return
            }
            i = !0;
            const f = n;
            n = r,
            r = f,
            n.forEach(u),
            t && wm.value && wm.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const dA = 40;
function mw(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Go.reduce( (y, E) => (y[E] = cA(s, t ? E : void 0),
    y), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v} = o
      , g = () => {
        const y = lr.useManualTiming
          , E = y ? i.timestamp : performance.now();
        n = !1,
        y || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(E - i.timestamp, dA), 1)),
        i.timestamp = E,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Go.reduce( (y, E) => {
            const C = o[E];
            return y[E] = (T, b=!1, P=!1) => (n || x(),
            C.schedule(T, b, P)),
            y
        }
        , {}),
        cancel: y => {
            for (let E = 0; E < Go.length; E++)
                o[Go[E]].cancel(y)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: Z, cancel: Et, state: ke, steps: Au} = mw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : tt, !0);
let ma;
function fA() {
    ma = void 0
}
const Ue = {
    now: () => (ma === void 0 && Ue.set(ke.isProcessing || lr.useManualTiming ? ke.timestamp : performance.now()),
    ma),
    set: e => {
        ma = e,
        queueMicrotask(fA)
    }
}
  , gw = e => t => typeof t == "string" && t.startsWith(e)
  , yw = gw("--")
  , hA = gw("var(--")
  , Gf = e => hA(e) ? pA.test(e.split("/*")[0].trim()) : !1
  , pA = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Sm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Qi = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , eo = {
    ...Qi,
    transform: e => Wt(0, 1, e)
}
  , Yo = {
    ...Qi,
    default: 1
}
  , ks = e => Math.round(e * 1e5) / 1e5
  , Yf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function mA(e) {
    return e == null
}
const gA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Qf = (e, t) => n => !!(typeof n == "string" && gA.test(n) && n.startsWith(e) || t && !mA(n) && Object.prototype.hasOwnProperty.call(n, t))
  , vw = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(Yf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , yA = e => Wt(0, 255, e)
  , Ru = {
    ...Qi,
    transform: e => Math.round(yA(e))
}
  , Cr = {
    test: Qf("rgb", "red"),
    parse: vw("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Ru.transform(e) + ", " + Ru.transform(t) + ", " + Ru.transform(n) + ", " + ks(eo.transform(r)) + ")"
};
function vA(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const nd = {
    test: Qf("#"),
    parse: vA,
    transform: Cr.transform
}
  , yo = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Dn = yo("deg")
  , rn = yo("%")
  , _ = yo("px")
  , xA = yo("vh")
  , wA = yo("vw")
  , Em = {
    ...rn,
    parse: e => rn.parse(e) / 100,
    transform: e => rn.transform(e * 100)
}
  , di = {
    test: Qf("hsl", "hue"),
    parse: vw("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + rn.transform(ks(t)) + ", " + rn.transform(ks(n)) + ", " + ks(eo.transform(r)) + ")"
}
  , we = {
    test: e => Cr.test(e) || nd.test(e) || di.test(e),
    parse: e => Cr.test(e) ? Cr.parse(e) : di.test(e) ? di.parse(e) : nd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Cr.transform(e) : di.transform(e),
    getAnimatableNone: e => {
        const t = we.parse(e);
        return t.alpha = 0,
        we.transform(t)
    }
}
  , SA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function EA(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Yf)) == null ? void 0 : t.length) || 0) + (((n = e.match(SA)) == null ? void 0 : n.length) || 0) > 0
}
const xw = "number"
  , ww = "color"
  , CA = "var"
  , TA = "var("
  , Cm = "${}"
  , bA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Bi(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(bA, l => (we.test(l) ? (r.color.push(s),
    i.push(ww),
    n.push(we.parse(l))) : l.startsWith(TA) ? (r.var.push(s),
    i.push(CA),
    n.push(l)) : (r.number.push(s),
    i.push(xw),
    n.push(parseFloat(l))),
    ++s,
    Cm)).split(Cm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function PA(e) {
    return Bi(e).values
}
function Sw({split: e, types: t}) {
    const n = e.length;
    return r => {
        let i = "";
        for (let s = 0; s < n; s++)
            if (i += e[s],
            r[s] !== void 0) {
                const o = t[s];
                o === xw ? i += ks(r[s]) : o === ww ? i += we.transform(r[s]) : i += r[s]
            }
        return i
    }
}
function kA(e) {
    return Sw(Bi(e))
}
const AA = e => typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e
  , RA = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : AA(e);
function MA(e) {
    const t = Bi(e);
    return Sw(t)(t.values.map( (r, i) => RA(r, t.split[i])))
}
const _t = {
    test: EA,
    parse: PA,
    createTransformer: kA,
    getAnimatableNone: MA
};
function Mu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function NA({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Mu(l, a, e + 1 / 3),
        s = Mu(l, a, e),
        o = Mu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function el(e, t) {
    return n => n > 0 ? t : e
}
const ae = (e, t, n) => e + (t - e) * n
  , Nu = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , DA = [nd, Cr, di]
  , LA = e => DA.find(t => t.test(e));
function Tm(e) {
    const t = LA(e);
    if (_l(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === di && (n = NA(n)),
    n
}
const bm = (e, t) => {
    const n = Tm(e)
      , r = Tm(t);
    if (!n || !r)
        return el(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Nu(n.red, r.red, s),
    i.green = Nu(n.green, r.green, s),
    i.blue = Nu(n.blue, r.blue, s),
    i.alpha = ae(n.alpha, r.alpha, s),
    Cr.transform(i))
}
  , rd = new Set(["none", "hidden"]);
function OA(e, t) {
    return rd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function jA(e, t) {
    return n => ae(e, t, n)
}
function Xf(e) {
    return typeof e == "number" ? jA : typeof e == "string" ? Gf(e) ? el : we.test(e) ? bm : FA : Array.isArray(e) ? Ew : typeof e == "object" ? we.test(e) ? bm : IA : el
}
function Ew(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Xf(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function IA(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Xf(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function VA(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const FA = (e, t) => {
    const n = _t.createTransformer(t)
      , r = Bi(e)
      , i = Bi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? rd.has(e) && !i.values.length || rd.has(t) && !r.values.length ? OA(e, t) : mo(Ew(VA(r, i), i.values), n) : (_l(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    el(e, t))
}
;
function Cw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ae(e, t, n) : Xf(e)(e, t)
}
const _A = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => Z.update(t, n),
        stop: () => Et(t),
        now: () => ke.isProcessing ? ke.timestamp : Ue.now()
    }
}
  , Tw = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , tl = 2e4;
function qf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < tl; )
        t += n,
        r = e.next(t);
    return t >= tl ? 1 / 0 : t
}
function zA(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(qf(r), tl);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: vt(i)
    }
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function id(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const BA = 12;
function $A(e, t, n) {
    let r = n;
    for (let i = 1; i < BA; i++)
        r = r - e(r) / t(r);
    return r
}
const Du = .001;
function UA({duration: e=de.duration, bounce: t=de.bounce, velocity: n=de.velocity, mass: r=de.mass}) {
    let i, s;
    _l(e <= nt(de.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - t;
    o = Wt(de.minDamping, de.maxDamping, o),
    e = Wt(de.minDuration, de.maxDuration, vt(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , f = c - n
          , h = id(u, o)
          , v = Math.exp(-d);
        return Du - f / h * v
    }
    ,
    s = u => {
        const d = u * o * e
          , f = d * n + n
          , h = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , g = id(Math.pow(u, 2), o);
        return (-i(u) + Du > 0 ? -1 : 1) * ((f - h) * v) / g
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Du + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = $A(i, s, a);
    if (e = nt(e),
    isNaN(l))
        return {
            stiffness: de.stiffness,
            damping: de.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const WA = ["duration", "bounce"]
  , HA = ["stiffness", "damping", "mass"];
function Pm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function KA(e) {
    let t = {
        velocity: de.velocity,
        stiffness: de.stiffness,
        damping: de.damping,
        mass: de.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Pm(e, HA) && Pm(e, WA))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * Wt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: de.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = UA({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: de.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function nl(e=de.visualDuration, t=de.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = KA({
        ...n,
        velocity: -vt(n.velocity || 0)
    })
      , v = f || 0
      , g = u / (2 * Math.sqrt(l * c))
      , x = o - s
      , m = vt(Math.sqrt(l / c))
      , p = Math.abs(x) < 5;
    r || (r = p ? de.restSpeed.granular : de.restSpeed.default),
    i || (i = p ? de.restDelta.granular : de.restDelta.default);
    let y, E, C, T, b, P;
    if (g < 1)
        C = id(m, g),
        T = (v + g * m * x) / C,
        y = A => {
            const V = Math.exp(-g * m * A);
            return o - V * (T * Math.sin(C * A) + x * Math.cos(C * A))
        }
        ,
        b = g * m * T + x * C,
        P = g * m * x - T * C,
        E = A => Math.exp(-g * m * A) * (b * Math.sin(C * A) + P * Math.cos(C * A));
    else if (g === 1) {
        y = V => o - Math.exp(-m * V) * (x + (v + m * x) * V);
        const A = v + m * x;
        E = V => Math.exp(-m * V) * (m * A * V - v)
    } else {
        const A = m * Math.sqrt(g * g - 1);
        y = O => {
            const W = Math.exp(-g * m * O)
              , z = Math.min(A * O, 300);
            return o - W * ((v + g * m * x) * Math.sinh(z) + A * x * Math.cosh(z)) / A
        }
        ;
        const V = (v + g * m * x) / A
          , j = g * m * V - x * A
          , U = g * m * x - V * A;
        E = O => {
            const W = Math.exp(-g * m * O)
              , z = Math.min(A * O, 300);
            return W * (j * Math.sinh(z) + U * Math.cosh(z))
        }
    }
    const N = {
        calculatedDuration: h && d || null,
        velocity: A => nt(E(A)),
        next: A => {
            if (!h && g < 1) {
                const j = Math.exp(-g * m * A)
                  , U = Math.sin(C * A)
                  , O = Math.cos(C * A)
                  , W = o - j * (T * U + x * O)
                  , z = nt(j * (b * U + P * O));
                return a.done = Math.abs(z) <= r && Math.abs(o - W) <= i,
                a.value = a.done ? o : W,
                a
            }
            const V = y(A);
            if (h)
                a.done = A >= d;
            else {
                const j = nt(E(A));
                a.done = Math.abs(j) <= r && Math.abs(o - V) <= i
            }
            return a.value = a.done ? o : V,
            a
        }
        ,
        toString: () => {
            const A = Math.min(qf(N), tl)
              , V = Tw(j => N.next(A * j).value, A, 30);
            return A + "ms " + V
        }
        ,
        toTransition: () => {}
    };
    return N
}
nl.applyToOptions = e => {
    const t = zA(e, 100, nl);
    return e.ease = t.ease,
    e.duration = nt(t.duration),
    e.type = "keyframes",
    e
}
;
const GA = 5;
function bw(e, t, n) {
    const r = Math.max(t - GA, 0);
    return Wf(n - e(r), t - r)
}
function sd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , v = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let g = n * t;
    const x = d + g
      , m = o === void 0 ? x : o(x);
    m !== x && (g = m - d);
    const p = P => -g * Math.exp(-P / r)
      , y = P => m + p(P)
      , E = P => {
        const N = p(P)
          , A = y(P);
        f.done = Math.abs(N) <= u,
        f.value = f.done ? m : A
    }
    ;
    let C, T;
    const b = P => {
        h(f.value) && (C = P,
        T = nl({
            keyframes: [f.value, v(f.value)],
            velocity: bw(y, P, f.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return b(0),
    {
        calculatedDuration: null,
        next: P => {
            let N = !1;
            return !T && C === void 0 && (N = !0,
            E(P),
            b(P)),
            C !== void 0 && P >= C ? T.next(P - C) : (!N && E(P),
            f)
        }
    }
}
function YA(e, t, n) {
    const r = []
      , i = n || lr.mix || Cw
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || tt : t;
            a = mo(l, a)
        }
        r.push(a)
    }
    return r
}
function Zf(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (ar(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = YA(t, r, i)
      , l = a.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = zi(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(Wt(e[0], e[s - 1], c)) : u
}
function QA(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = zi(0, t, r);
        e.push(ae(n, 1, i))
    }
}
function Pw(e) {
    const t = [0];
    return QA(t, e.length - 1),
    t
}
function XA(e, t) {
    return e.map(n => n * t)
}
function qA(e, t) {
    return e.map( () => t || hw).splice(0, e.length - 1)
}
function As({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = lA(r) ? r.map(xm) : xm(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = XA(n && n.length === t.length ? n : Pw(t), e)
      , a = Zf(o, t, {
        ease: Array.isArray(i) ? i : qA(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const ZA = e => e !== null;
function zl(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(ZA)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const JA = {
    decay: sd,
    inertia: sd,
    tween: As,
    keyframes: As,
    spring: nl
};
function kw(e) {
    typeof e.type == "string" && (e.type = JA[e.type])
}
class Jf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const eR = e => e / 100;
class to extends Jf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== Ue.now() && this.tick(Ue.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        kw(t);
        const {type: n=As, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || As;
        l !== As && typeof a[0] != "number" && (this.mixKeyframes = mo(eR, Cw(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = qf(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , p = this.playbackSpeed >= 0 ? m < 0 : m > i;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
          , E = r;
        if (d) {
            const P = Math.min(this.currentTime, i) / a;
            let N = Math.floor(P)
              , A = P % 1;
            !A && P >= 1 && (A = 1),
            A === 1 && N--,
            N = Math.min(N, d + 1),
            !!(N % 2) && (f === "reverse" ? (A = 1 - A,
            h && (A -= h / a)) : f === "mirror" && (E = o)),
            y = Wt(0, 1, A) * a
        }
        let C;
        p ? (this.delayState.value = c[0],
        C = this.delayState) : C = E.next(y),
        s && !p && (C.value = s(C.value));
        let {done: T} = C;
        !p && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return b && v !== sd && (C.value = zl(c, this.options, x, this.speed)),
        g && g(C.value),
        b && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return vt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + vt(t)
    }
    get time() {
        return vt(this.currentTime)
    }
    set time(t) {
        t = nt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = t,
        this.tick(t))
    }
    getGeneratorVelocity() {
        const t = this.currentTime;
        if (t <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(t);
        const n = this.generator.next(t).value;
        return bw(r => this.generator.next(r).value, t, n)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        n && this.driver && this.updateTime(Ue.now()),
        this.playbackSpeed = t,
        n && this.driver && (this.time = vt(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=_A, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Ue.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function tR(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Tr = e => e * 180 / Math.PI
  , od = e => {
    const t = Tr(Math.atan2(e[1], e[0]));
    return ad(t)
}
  , nR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: od,
    rotateZ: od,
    skewX: e => Tr(Math.atan(e[1])),
    skewY: e => Tr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , ad = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , km = od
  , Am = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Rm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , rR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Am,
    scaleY: Rm,
    scale: e => (Am(e) + Rm(e)) / 2,
    rotateX: e => ad(Tr(Math.atan2(e[6], e[5]))),
    rotateY: e => ad(Tr(Math.atan2(-e[2], e[0]))),
    rotateZ: km,
    rotate: km,
    skewX: e => Tr(Math.atan(e[4])),
    skewY: e => Tr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ld(e) {
    return e.includes("scale") ? 1 : 0
}
function ud(e, t) {
    if (!e || e === "none")
        return ld(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = rR,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = nR,
        i = a
    }
    if (!i)
        return ld(t);
    const s = r[t]
      , o = i[1].split(",").map(sR);
    return typeof s == "function" ? s(o) : o[s]
}
const iR = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return ud(n, t)
}
;
function sR(e) {
    return parseFloat(e.trim())
}
const Xi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , qi = new Set(Xi)
  , Mm = e => e === Qi || e === _
  , oR = new Set(["x", "y", "z"])
  , aR = Xi.filter(e => !oR.has(e));
function lR(e) {
    const t = [];
    return aR.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Kn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0", boxSizing: r}) => {
        const i = e.max - e.min;
        return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n)
    }
    ,
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0", boxSizing: r}) => {
        const i = e.max - e.min;
        return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n)
    }
    ,
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => ud(t, "x"),
    y: (e, {transform: t}) => ud(t, "y")
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Lr = new Set;
let cd = !1
  , dd = !1
  , fd = !1;
function Aw() {
    if (dd) {
        const e = Array.from(Lr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = lR(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    dd = !1,
    cd = !1,
    Lr.forEach(e => e.complete(fd)),
    Lr.clear()
}
function Rw() {
    Lr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (dd = !0)
    }
    )
}
function uR() {
    fd = !0,
    Rw(),
    Aw(),
    fd = !1
}
class eh {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Lr.add(this),
        cd || (cd = !0,
        Z.read(Rw),
        Z.resolveKeyframes(Aw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        tR(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Lr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Lr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const cR = e => e.startsWith("--");
function Mw(e, t, n) {
    cR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const dR = {};
function th(e, t) {
    const n = iw(e);
    return () => dR[t] ?? n()
}
const nh = th( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Nw = th( () => window.ViewTimeline !== void 0, "viewTimeline")
  , Dw = th( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , ms = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Nm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ms([0, .65, .55, 1]),
    circOut: ms([.55, 0, 1, .45]),
    backIn: ms([.31, .01, .66, -.59]),
    backOut: ms([.33, 1.53, .69, .99])
};
function Lw(e, t) {
    if (e)
        return typeof e == "function" ? Dw() ? Tw(e, t) : "ease-out" : pw(e) ? ms(e) : Array.isArray(e) ? e.map(n => Lw(n, t) || Nm.easeOut) : Nm[e]
}
function fR(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = Lw(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function Ow(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function hR({type: e, ...t}) {
    return Ow(e) && Dw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class jw extends Jf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        ar(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = hR(t);
        this.animation = fR(n, r, i, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = zl(i, this.options, a, this.speed);
                this.updateMotionValue && this.updateMotionValue(c),
                Mw(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return vt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + vt(t)
    }
    get time() {
        return vt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        const n = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = nt(t),
        n && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, rangeStart: n, rangeEnd: r, observe: i}) {
        var s;
        return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && nh() ? (this.animation.timeline = t,
        n && (this.animation.rangeStart = n),
        r && (this.animation.rangeEnd = r),
        tt) : i(this)
    }
}
const Iw = {
    anticipate: cw,
    backInOut: uw,
    circInOut: fw
};
function pR(e) {
    return e in Iw
}
function mR(e) {
    typeof e.ease == "string" && pR(e.ease) && (e.ease = Iw[e.ease])
}
const Lu = 10;
class gR extends jw {
    constructor(t) {
        mR(t),
        kw(t),
        super(t),
        t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new to({
            ...o,
            autoplay: !1
        })
          , l = Math.max(Lu, Ue.now() - this.startTime)
          , u = Wt(0, Lu, l - Lu)
          , c = a.sample(l).value
          , {name: d} = this.options;
        s && d && Mw(s, d, c),
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
        a.stop()
    }
}
const Dm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_t.test(e) || e === "0") && !e.startsWith("url("));
function yR(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function vR(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Dm(i, t)
      , a = Dm(s, t);
    return _l(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"),
    !o || !a ? !1 : yR(e) || (n === "spring" || Ow(n)) && r
}
function hd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const Vw = new Set(["opacity", "clipPath", "filter", "transform"])
  , xR = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function wR(e) {
    for (let t = 0; t < e.length; t++)
        if (typeof e[t] == "string" && xR.test(e[t]))
            return !0;
    return !1
}
const SR = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , ER = iw( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function CR(e) {
    var d;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o, keyframes: a} = e;
    if (!(((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: u, transformTemplate: c} = t.owner.getProps();
    return ER() && n && (Vw.has(n) || SR.has(n) && wR(a)) && (n !== "transform" || !c) && !u && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const TR = 40;
class bR extends Jf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var v;
        super(),
        this.stop = () => {
            var g, x;
            this._animation && (this._animation.stop(),
            (g = this.stopTimeline) == null || g.call(this)),
            (x = this.keyframeResolver) == null || x.cancel()
        }
        ,
        this.createdAt = Ue.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || eh;
        this.keyframeResolver = new h(a, (g, x, m) => this.onKeyframesResolved(g, x, f, !m),l,u,c),
        (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var m, p;
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = Ue.now();
        let d = !0;
        vR(t, s, o, a) || (d = !1,
        (lr.instantAnimations || !l) && (c == null || c(zl(t, r, n))),
        t[0] = t[t.length - 1],
        hd(r),
        r.repeat = 0);
        const h = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > TR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , v = d && !u && CR(h)
          , g = (p = (m = h.motionValue) == null ? void 0 : m.owner) == null ? void 0 : p.current;
        let x;
        if (v)
            try {
                x = new gR({
                    ...h,
                    element: g
                })
            } catch {
                x = new to(h)
            }
        else
            x = new to(h);
        x.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(tt),
        this.pendingTimeline && (this.stopTimeline = x.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = x
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        uR()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function Fw(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
const PR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function kR(e) {
    const t = PR.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const AR = 4;
function _w(e, t, n=1) {
    ar(n <= AR, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = kR(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return tw(o) ? parseFloat(o) : o
    }
    return Gf(i) ? _w(i, t, n + 1) : i
}
const RR = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , MR = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , NR = {
    type: "keyframes",
    duration: .8
}
  , DR = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , LR = (e, {keyframes: t}) => t.length > 2 ? NR : qi.has(e) ? e.startsWith("scale") ? MR(t[1]) : RR : DR;
function zw(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function rh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? zw(n, e) : n
}
const OR = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function jR(e) {
    for (const t in e)
        if (!OR.has(t))
            return !0;
    return !1
}
const ih = (e, t, n, r={}, i, s) => o => {
    const a = rh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - nt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    jR(a) || Object.assign(c, LR(e, c)),
    c.duration && (c.duration = nt(c.duration)),
    c.repeatDelay && (c.repeatDelay = nt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (hd(c),
    c.delay === 0 && (d = !0)),
    (lr.instantAnimations || lr.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
    hd(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = zl(c.keyframes, a);
        if (f !== void 0) {
            Z.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new to(c) : new bR(c)
}
;
function Lm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function sh(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Lm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Lm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Or(e, t, n) {
    const r = e.getProps();
    return sh(r, t, n !== void 0 ? n : r.custom, e)
}
const Bw = new Set(["width", "height", "top", "left", "right", "bottom", ...Xi])
  , Om = 30
  , IR = e => !isNaN(parseFloat(e))
  , Rs = {
    current: void 0
};
class VR {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = Ue.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Ue.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = IR(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Uf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            Z.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return Rs.current && Rs.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Ue.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Om)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Om);
        return Wf(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function It(e, t) {
    return new VR(e,t)
}
const pd = e => Array.isArray(e);
function FR(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, It(n))
}
function _R(e) {
    return pd(e) ? e[e.length - 1] || 0 : e
}
function zR(e, t) {
    const n = Or(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = _R(s[o]);
        FR(e, o, a)
    }
}
const Pe = e => !!(e && e.getVelocity);
function BR(e) {
    return !!(Pe(e) && e.add)
}
function md(e, t) {
    const n = e.getValue("willChange");
    if (BR(n))
        return n.add(t);
    if (!n && lr.WillChange) {
        const r = new lr.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function oh(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const $R = "framerAppearId"
  , $w = "data-" + oh($R);
function Uw(e) {
    return e.props[$w]
}
function UR({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Ww(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s, transitionEnd: o, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? zw(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , v = a[f];
        if (v === void 0 || d && UR(d, f))
            continue;
        const g = {
            delay: n,
            ...rh(s || {}, f)
        }
          , x = h.get();
        if (x !== void 0 && !h.isAnimating() && !Array.isArray(v) && v === x && !g.velocity) {
            Z.update( () => h.set(v));
            continue
        }
        let m = !1;
        if (window.MotionHandoffAnimation) {
            const E = Uw(e);
            if (E) {
                const C = window.MotionHandoffAnimation(E, f, Z);
                C !== null && (g.startTime = C,
                m = !0)
            }
        }
        md(e, f);
        const p = u ?? e.shouldReduceMotion;
        h.start(ih(f, h, v, p && Bw.has(f) ? {
            type: !1
        } : g, e, m));
        const y = h.animation;
        y && c.push(y)
    }
    if (o) {
        const f = () => Z.update( () => {
            o && zR(e, o)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function gd(e, t, n={}) {
    var l;
    const r = Or(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(Ww(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
        return WR(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function WR(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(gd(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + Fw(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function HR(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => gd(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = gd(e, t, n);
    else {
        const i = typeof t == "function" ? Or(e, t, n.custom) : t;
        r = Promise.all(Ww(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const KR = {
    test: e => e === "auto",
    parse: e => e
}
  , Hw = e => t => t.test(e)
  , Kw = [Qi, _, rn, Dn, wA, xA, KR]
  , jm = e => Kw.find(Hw(e));
function GR(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || rw(e) : !0
}
const YR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function QR(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Yf) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = YR.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const XR = /\b([a-z-]*)\(.*?\)/gu
  , yd = {
    ..._t,
    getAnimatableNone: e => {
        const t = e.match(XR);
        return t ? t.map(QR).join(" ") : e
    }
}
  , vd = {
    ..._t,
    getAnimatableNone: e => {
        const t = _t.parse(e);
        return _t.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Im = {
    ...Qi,
    transform: Math.round
}
  , qR = {
    rotate: Dn,
    rotateX: Dn,
    rotateY: Dn,
    rotateZ: Dn,
    scale: Yo,
    scaleX: Yo,
    scaleY: Yo,
    scaleZ: Yo,
    skew: Dn,
    skewX: Dn,
    skewY: Dn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: eo,
    originX: Em,
    originY: Em,
    originZ: _
}
  , ah = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...qR,
    zIndex: Im,
    fillOpacity: eo,
    strokeOpacity: eo,
    numOctaves: Im
}
  , ZR = {
    ...ah,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: yd,
    WebkitFilter: yd,
    mask: vd,
    WebkitMask: vd
}
  , Gw = e => ZR[e]
  , JR = new Set([yd, vd]);
function Yw(e, t) {
    let n = Gw(e);
    return JR.has(n) || (n = _t),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const eM = new Set(["auto", "none", "0"]);
function tM(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !eM.has(s) && Bi(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = Yw(n, i)
}
class nM extends eh {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Gf(d))) {
                const f = _w(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Bw.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = jm(i)
          , a = jm(s)
          , l = Sm(i)
          , u = Sm(s);
        if (l !== u && Kn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== a)
            if (Mm(o) && Mm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Kn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || GR(t[i])) && r.push(i);
        r.length && tM(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Kn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = Kn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function lh(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const Qw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Ms(e) {
    return nw(e) && "offsetHeight"in e && !("ownerSVGElement"in e)
}
const {schedule: uh, cancel: ZL} = mw(queueMicrotask, !1)
  , Rt = {
    x: !1,
    y: !1
};
function Xw() {
    return Rt.x || Rt.y
}
function rM(e) {
    return e === "x" || e === "y" ? Rt[e] ? null : (Rt[e] = !0,
    () => {
        Rt[e] = !1
    }
    ) : Rt.x || Rt.y ? null : (Rt.x = Rt.y = !0,
    () => {
        Rt.x = Rt.y = !1
    }
    )
}
function qw(e, t) {
    const n = lh(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function iM(e) {
    return !(e.pointerType === "touch" || Xw())
}
function sM(e, t, n={}) {
    const [r,i,s] = qw(e, n);
    return r.forEach(o => {
        let a = !1, l = !1, u;
        const c = () => {
            o.removeEventListener("pointerleave", v)
        }
          , d = x => {
            u && (u(x),
            u = void 0),
            c()
        }
          , f = x => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(x))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i)
        }
          , v = x => {
            if (x.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(x)
            }
        }
          , g = x => {
            if (!iM(x))
                return;
            l = !1;
            const m = t(o, x);
            typeof m == "function" && (u = m,
            o.addEventListener("pointerleave", v, i))
        }
        ;
        o.addEventListener("pointerenter", g, i),
        o.addEventListener("pointerdown", h, i)
    }
    ),
    s
}
const Zw = (e, t) => t ? e === t ? !0 : Zw(e, t.parentElement) : !1
  , ch = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , oM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function aM(e) {
    return oM.has(e.tagName) || e.isContentEditable === !0
}
const lM = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function uM(e) {
    return lM.has(e.tagName) || e.isContentEditable === !0
}
const ga = new WeakSet;
function Vm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ou(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const cM = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Vm( () => {
        if (ga.has(n))
            return;
        Ou(n, "down");
        const i = Vm( () => {
            Ou(n, "up")
        }
        )
          , s = () => Ou(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Fm(e) {
    return ch(e) && !Xw()
}
const _m = new WeakSet;
function dM(e, t, n={}) {
    const [r,i,s] = qw(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!Fm(a) || _m.has(a))
            return;
        ga.add(l),
        n.stopPropagation && _m.add(a);
        const u = t(l, a)
          , c = (h, v) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ga.has(l) && ga.delete(l),
            Fm(h) && typeof u == "function" && u(h, {
                success: v
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || Zw(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Ms(a) && (a.addEventListener("focus", u => cM(u, i)),
        !aM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function dh(e) {
    return nw(e) && "ownerSVGElement"in e
}
const ya = new WeakMap;
let Ln;
const Jw = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : dh(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , fM = Jw("inline", "width", "offsetWidth")
  , hM = Jw("block", "height", "offsetHeight");
function pM({target: e, borderBoxSize: t}) {
    var n;
    (n = ya.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return fM(e, t)
            },
            get height() {
                return hM(e, t)
            }
        })
    }
    )
}
function mM(e) {
    e.forEach(pM)
}
function gM() {
    typeof ResizeObserver > "u" || (Ln = new ResizeObserver(mM))
}
function yM(e, t) {
    Ln || gM();
    const n = lh(e);
    return n.forEach(r => {
        let i = ya.get(r);
        i || (i = new Set,
        ya.set(r, i)),
        i.add(t),
        Ln == null || Ln.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = ya.get(r);
            i == null || i.delete(t),
            i != null && i.size || Ln == null || Ln.unobserve(r)
        }
        )
    }
}
const va = new Set;
let fi;
function vM() {
    fi = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        va.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", fi)
}
function xM(e) {
    return va.add(e),
    fi || vM(),
    () => {
        va.delete(e),
        !va.size && typeof fi == "function" && (window.removeEventListener("resize", fi),
        fi = void 0)
    }
}
function xd(e, t) {
    return typeof e == "function" ? xM(e) : yM(e, t)
}
function e1(e, t) {
    let n;
    const r = () => {
        const {currentTime: i} = t
          , o = (i === null ? 0 : i.value) / 100;
        n !== o && e(o),
        n = o
    }
    ;
    return Z.preUpdate(r, !0),
    () => Et(r)
}
function wM(e) {
    return dh(e) && e.tagName === "svg"
}
function SM(...e) {
    const t = !Array.isArray(e[0])
      , n = t ? 0 : -1
      , r = e[0 + n]
      , i = e[1 + n]
      , s = e[2 + n]
      , o = e[3 + n]
      , a = Zf(i, s, o);
    return t ? a(r) : a
}
function EM(e, t, n={}) {
    const r = e.get();
    let i = null, s = r, o;
    const a = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0
      , l = () => {
        i && (i.stop(),
        i = null),
        e.animation = void 0
    }
      , u = () => {
        const d = zm(e.get())
          , f = zm(s);
        if (d === f) {
            l();
            return
        }
        const h = i ? i.getGeneratorVelocity() : e.getVelocity();
        l(),
        i = new to({
            keyframes: [d, f],
            velocity: h,
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...n,
            onUpdate: o
        })
    }
      , c = () => {
        var d;
        u(),
        e.animation = i ?? void 0,
        (d = e.events.animationStart) == null || d.notify(),
        i == null || i.then( () => {
            var f;
            e.animation = void 0,
            (f = e.events.animationComplete) == null || f.notify()
        }
        )
    }
    ;
    if (e.attach( (d, f) => {
        s = d,
        o = h => f(ju(h, a)),
        Z.postRender(c)
    }
    , l),
    Pe(t)) {
        let d = n.skipInitialAnimation === !0;
        const f = t.on("change", v => {
            d ? (d = !1,
            e.jump(ju(v, a), !1)) : e.set(ju(v, a))
        }
        )
          , h = e.on("destroy", f);
        return () => {
            f(),
            h()
        }
    }
    return l
}
function ju(e, t) {
    return t ? e + t : e
}
function zm(e) {
    return typeof e == "number" ? e : parseFloat(e)
}
const CM = [...Kw, we, _t]
  , TM = e => CM.find(Hw(e))
  , Bm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , hi = () => ({
    x: Bm(),
    y: Bm()
})
  , $m = () => ({
    min: 0,
    max: 0
})
  , Ee = () => ({
    x: $m(),
    y: $m()
})
  , bM = new WeakMap;
function Bl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function no(e) {
    return typeof e == "string" || Array.isArray(e)
}
const fh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , hh = ["initial", ...fh];
function $l(e) {
    return Bl(e.animate) || hh.some(t => no(e[t]))
}
function t1(e) {
    return !!($l(e) || e.variants)
}
function PM(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Pe(i))
            e.addValue(r, i);
        else if (Pe(s))
            e.addValue(r, It(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, It(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const wd = {
    current: null
}
  , n1 = {
    current: !1
}
  , kM = typeof window < "u";
function AM() {
    if (n1.current = !0,
    !!kM)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => wd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            wd.current = !1
}
const Um = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let rl = {};
function r1(e) {
    rl = e
}
function RM() {
    return rl
}
class MM {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: s, blockInitialAnimation: o, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = eh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = Ue.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            Z.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = $l(n),
        this.isVariantNode = t1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Pe(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        bM.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (n1.current || AM(),
        this.shouldReduceMotion = wd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        Et(this.notifyUpdate),
        Et(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && Vw.has(t) && this.current instanceof HTMLElement) {
            const {factory: o, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new jw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: nt(c)
            })
              , f = o(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = qi.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && Z.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in rl) {
            const n = rl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Um.length; r++) {
            const i = Um[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = PM(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = It(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (tw(r) || rw(r)) ? r = parseFloat(r) : !TM(r) && _t.test(n) && (r = Yw(t, n)),
        this.setBaseTarget(t, Pe(r) ? r.get() : r)),
        Pe(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = sh(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Pe(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Uf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        uh.render(this.render)
    }
}
class i1 extends MM {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = nM
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Pe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class fr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function s1({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function NM({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function DM(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Iu(e) {
    return e === void 0 || e === 1
}
function Sd({scale: e, scaleX: t, scaleY: n}) {
    return !Iu(e) || !Iu(t) || !Iu(n)
}
function xr(e) {
    return Sd(e) || o1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function o1(e) {
    return Wm(e.x) || Wm(e.y)
}
function Wm(e) {
    return e && e !== "0%"
}
function il(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Hm(e, t, n, r, i) {
    return i !== void 0 && (e = il(e, i, r)),
    il(e, n, r) + t
}
function Ed(e, t=0, n=1, r, i) {
    e.min = Hm(e.min, t, n, r, i),
    e.max = Hm(e.max, t, n, r, i)
}
function a1(e, {x: t, y: n}) {
    Ed(e.x, t.translate, t.scale, t.originPoint),
    Ed(e.y, n.translate, n.scale, n.originPoint)
}
const Km = .999999999999
  , Gm = 1.0000000000001;
function LM(e, t, n, r=!1) {
    var a;
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const {visualElement: u} = s.options;
        u && u.props.style && u.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && (qt(e.x, -s.scroll.offset.x),
        qt(e.y, -s.scroll.offset.y)),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        a1(e, o)),
        r && xr(s.latestValues) && xa(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox))
    }
    t.x < Gm && t.x > Km && (t.x = 1),
    t.y < Gm && t.y > Km && (t.y = 1)
}
function qt(e, t) {
    e.min += t,
    e.max += t
}
function Ym(e, t, n, r, i=.5) {
    const s = ae(e.min, e.max, i);
    Ed(e, t, n, s, r)
}
function Qm(e, t) {
    return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e
}
function xa(e, t, n) {
    const r = n ?? e;
    Ym(e.x, Qm(t.x, r.x), t.scaleX, t.scale, t.originX),
    Ym(e.y, Qm(t.y, r.y), t.scaleY, t.scale, t.originY)
}
function l1(e, t) {
    return s1(DM(e.getBoundingClientRect(), t))
}
function OM(e, t, n) {
    const r = l1(e, n)
      , {scroll: i} = t;
    return i && (qt(r.x, i.offset.x),
    qt(r.y, i.offset.y)),
    r
}
const jM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , IM = Xi.length;
function VM(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < IM; s++) {
        const o = Xi[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (o.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = o.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = Qw(a, ah[o]);
            if (!l) {
                i = !1;
                const c = jM[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function ph(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (qi.has(l)) {
            o = !0;
            continue
        } else if (yw(l)) {
            i[l] = u;
            continue
        } else {
            const c = Qw(u, ah[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (o || n ? r.transform = VM(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function u1(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function Xm(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const cs = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Xm(e, t.target.x)
          , r = Xm(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , FM = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = _t.parse(e);
        if (i.length > 5)
            return r;
        const s = _t.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const u = ae(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
}
  , Cd = {
    borderRadius: {
        ...cs,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: cs,
    borderTopRightRadius: cs,
    borderBottomLeftRadius: cs,
    borderBottomRightRadius: cs,
    boxShadow: FM
};
function c1(e, {layout: t, layoutId: n}) {
    return qi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Cd[e] || e === "opacity")
}
function mh(e, t, n) {
    var o;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (Pe(r[a]) || i && Pe(i[a]) || c1(a, e) || ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function _M(e) {
    return window.getComputedStyle(e)
}
class zM extends i1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = u1
    }
    readValueFromInstance(t, n) {
        var r;
        if (qi.has(n))
            return (r = this.projection) != null && r.isProjecting ? ld(n) : iR(t, n);
        {
            const i = _M(t)
              , s = (yw(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return l1(t, n)
    }
    build(t, n, r) {
        ph(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return mh(t, n, r)
    }
}
const BM = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , $M = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function UM(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? BM : $M;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const WM = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function d1(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, u, c) {
    if (ph(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of WM)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && UM(d, i, s, o, !1)
}
const f1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , h1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function HM(e, t, n, r) {
    u1(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(f1.has(i) ? i : oh(i), t.attrs[i])
}
function p1(e, t, n) {
    const r = mh(e, t, n);
    for (const i in e)
        if (Pe(e[i]) || Pe(t[i])) {
            const s = Xi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
class KM extends i1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ee
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (qi.has(n)) {
            const r = Gw(n);
            return r && r.default || 0
        }
        return n = f1.has(n) ? n : oh(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return p1(t, n, r)
    }
    build(t, n, r) {
        d1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        HM(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = h1(t.tagName),
        super.mount(t)
    }
}
const GM = hh.length;
function m1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? m1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < GM; n++) {
        const r = hh[n]
          , i = e.props[r];
        (no(i) || i === !1) && (t[r] = i)
    }
    return t
}
function g1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const YM = [...fh].reverse()
  , QM = fh.length;
function XM(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => HR(e, n, r)))
}
function qM(e) {
    let t = XM(e)
      , n = qm()
      , r = !0
      , i = !1;
    const s = u => (c, d) => {
        var h;
        const f = Or(e, d, u === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {transition: v, transitionEnd: g, ...x} = f;
            c = {
                ...c,
                ...x,
                ...g
            }
        }
        return c
    }
    ;
    function o(u) {
        t = u(e)
    }
    function a(u) {
        const {props: c} = e
          , d = m1(e.parent) || {}
          , f = []
          , h = new Set;
        let v = {}
          , g = 1 / 0;
        for (let m = 0; m < QM; m++) {
            const p = YM[m]
              , y = n[p]
              , E = c[p] !== void 0 ? c[p] : d[p]
              , C = no(E)
              , T = p === u ? y.isActive : null;
            T === !1 && (g = m);
            let b = E === d[p] && E !== c[p] && C;
            if (b && (r || i) && e.manuallyAnimateOnMount && (b = !1),
            y.protectedKeys = {
                ...v
            },
            !y.isActive && T === null || !E && !y.prevProp || Bl(E) || typeof E == "boolean")
                continue;
            if (p === "exit" && y.isActive && T !== !0) {
                y.prevResolvedValues && (v = {
                    ...v,
                    ...y.prevResolvedValues
                });
                continue
            }
            const P = ZM(y.prevProp, E);
            let N = P || p === u && y.isActive && !b && C || m > g && C
              , A = !1;
            const V = Array.isArray(E) ? E : [E];
            let j = V.reduce(s(p), {});
            T === !1 && (j = {});
            const {prevResolvedValues: U={}} = y
              , O = {
                ...U,
                ...j
            }
              , W = k => {
                N = !0,
                h.has(k) && (A = !0,
                h.delete(k)),
                y.needsAnimating[k] = !0;
                const R = e.getValue(k);
                R && (R.liveStyle = !1)
            }
            ;
            for (const k in O) {
                const R = j[k]
                  , I = U[k];
                if (v.hasOwnProperty(k))
                    continue;
                let $ = !1;
                pd(R) && pd(I) ? $ = !g1(R, I) : $ = R !== I,
                $ ? R != null ? W(k) : h.add(k) : R !== void 0 && h.has(k) ? W(k) : y.protectedKeys[k] = !0
            }
            y.prevProp = E,
            y.prevResolvedValues = j,
            y.isActive && (v = {
                ...v,
                ...j
            }),
            (r || i) && e.blockInitialAnimation && (N = !1);
            const z = b && P;
            N && (!z || A) && f.push(...V.map(k => {
                const R = {
                    type: p
                };
                if (typeof k == "string" && (r || i) && !z && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: I} = e
                      , $ = Or(I, k);
                    if (I.enteringChildren && $) {
                        const {delayChildren: B} = $.transition || {};
                        R.delay = Fw(I.enteringChildren, e, B)
                    }
                }
                return {
                    animation: k,
                    options: R
                }
            }
            ))
        }
        if (h.size) {
            const m = {};
            if (typeof c.initial != "boolean") {
                const p = Or(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                p && p.transition && (m.transition = p.transition)
            }
            h.forEach(p => {
                const y = e.getBaseTarget(p)
                  , E = e.getValue(p);
                E && (E.liveStyle = !0),
                m[p] = y ?? null
            }
            ),
            f.push({
                animation: m
            })
        }
        let x = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        i = !1,
        x ? t(f) : Promise.resolve()
    }
    function l(u, c) {
        var f;
        if (n[u].isActive === c)
            return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var v;
            return (v = h.animationState) == null ? void 0 : v.setActive(u, c)
        }
        ),
        n[u].isActive = c;
        const d = a(u);
        for (const h in n)
            n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = qm(),
            i = !0
        }
    }
}
function ZM(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !g1(t, e) : !1
}
function gr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function qm() {
    return {
        animate: gr(!0),
        whileInView: gr(),
        whileHover: gr(),
        whileTap: gr(),
        whileDrag: gr(),
        whileFocus: gr(),
        exit: gr()
    }
}
function Td(e, t) {
    e.min = t.min,
    e.max = t.max
}
function At(e, t) {
    Td(e.x, t.x),
    Td(e.y, t.y)
}
function Zm(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const y1 = 1e-4
  , JM = 1 - y1
  , eN = 1 + y1
  , v1 = .01
  , tN = 0 - v1
  , nN = 0 + v1;
function We(e) {
    return e.max - e.min
}
function rN(e, t, n) {
    return Math.abs(e - t) <= n
}
function Jm(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = ae(t.min, t.max, e.origin),
    e.scale = We(n) / We(t),
    e.translate = ae(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= JM && e.scale <= eN || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= tN && e.translate <= nN || isNaN(e.translate)) && (e.translate = 0)
}
function Ns(e, t, n, r) {
    Jm(e.x, t.x, n.x, r ? r.originX : void 0),
    Jm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function eg(e, t, n, r=0) {
    const i = r ? ae(n.min, n.max, r) : n.min;
    e.min = i + t.min,
    e.max = e.min + We(t)
}
function iN(e, t, n, r) {
    eg(e.x, t.x, n.x, r == null ? void 0 : r.x),
    eg(e.y, t.y, n.y, r == null ? void 0 : r.y)
}
function tg(e, t, n, r=0) {
    const i = r ? ae(n.min, n.max, r) : n.min;
    e.min = t.min - i,
    e.max = e.min + We(t)
}
function sl(e, t, n, r) {
    tg(e.x, t.x, n.x, r == null ? void 0 : r.x),
    tg(e.y, t.y, n.y, r == null ? void 0 : r.y)
}
function ng(e, t, n, r, i) {
    return e -= t,
    e = il(e, 1 / n, r),
    i !== void 0 && (e = il(e, 1 / i, r)),
    e
}
function sN(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (rn.test(t) && (t = parseFloat(t),
    t = ae(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = ae(s.min, s.max, r);
    e === s && (a -= t),
    e.min = ng(e.min, t, n, a, i),
    e.max = ng(e.max, t, n, a, i)
}
function rg(e, t, [n,r,i], s, o) {
    sN(e, t[n], t[r], t[i], t.scale, s, o)
}
const oN = ["x", "scaleX", "originX"]
  , aN = ["y", "scaleY", "originY"];
function ig(e, t, n, r) {
    rg(e.x, t, oN, n ? n.x : void 0, r ? r.x : void 0),
    rg(e.y, t, aN, n ? n.y : void 0, r ? r.y : void 0)
}
function sg(e) {
    return e.translate === 0 && e.scale === 1
}
function x1(e) {
    return sg(e.x) && sg(e.y)
}
function og(e, t) {
    return e.min === t.min && e.max === t.max
}
function lN(e, t) {
    return og(e.x, t.x) && og(e.y, t.y)
}
function ag(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function w1(e, t) {
    return ag(e.x, t.x) && ag(e.y, t.y)
}
function lg(e) {
    return We(e.x) / We(e.y)
}
function ug(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Gt(e) {
    return [e("x"), e("y")]
}
function uN(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const S1 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , cN = S1.length
  , cg = e => typeof e == "string" ? parseFloat(e) : e
  , dg = e => typeof e == "number" || _.test(e);
function dN(e, t, n, r, i, s) {
    i ? (e.opacity = ae(0, n.opacity ?? 1, fN(r)),
    e.opacityExit = ae(t.opacity ?? 1, 0, hN(r))) : s && (e.opacity = ae(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < cN; o++) {
        const a = S1[o];
        let l = fg(t, a)
          , u = fg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || dg(l) === dg(u) ? (e[a] = Math.max(ae(cg(l), cg(u), r), 0),
        (rn.test(u) || rn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r))
}
function fg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const fN = E1(0, .5, dw)
  , hN = E1(.5, .95, tt);
function E1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(zi(e, t, r))
}
function pN(e, t, n) {
    const r = Pe(e) ? e : It(e);
    return r.start(ih("", r, t, n)),
    r.animation
}
function ro(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const mN = (e, t) => e.depth - t.depth;
class gN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        $f(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ja(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(mN),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function yN(e, t) {
    const n = Ue.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (Et(r),
        e(s - t))
    }
    ;
    return Z.setup(r, !0),
    () => Et(r)
}
function wa(e) {
    return Pe(e) ? e.get() : e
}
class vN {
    constructor() {
        this.members = []
    }
    add(t) {
        $f(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            (!i || i.isConnected === !1) && !r.snapshot && (Ja(this.members, r),
            r.unmount())
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Ja(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        var n;
        for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
            const i = this.members[r];
            if (i.isPresent !== !1 && ((n = i.instance) == null ? void 0 : n.isConnected) !== !1)
                return this.promote(i),
                !0
        }
        return !1
    }
    promote(t, n) {
        var i;
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.updateSnapshot(),
            t.scheduleRender();
            const {layoutDependency: s} = r.options
              , {layoutDependency: o} = t.options;
            (s === void 0 || s !== o) && (t.resumeFrom = r,
            n && (r.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
            t.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            var n, r, i, s, o;
            (r = (n = t.options).onExitComplete) == null || r.call(n),
            (o = (i = t.resumingFrom) == null ? void 0 : (s = i.options).onExitComplete) == null || o.call(s)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => t.instance && t.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var t;
        (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0)
    }
}
const Sa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Vu = ["", "X", "Y", "Z"]
  , xN = 1e3;
let wN = 0;
function Fu(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function C1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Uw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Z, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && C1(r)
}
function T1({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = wN++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(CN),
                this.nodes.forEach(RN),
                this.nodes.forEach(MN),
                this.nodes.forEach(TN)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new gN)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Uf),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = dh(o) && !wM(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                Z.read( () => {
                    d = window.innerWidth
                }
                ),
                e(o, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = yN(f, 250),
                    Sa.hasAnimatedSinceResize && (Sa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(mg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || jN
                  , {onLayoutAnimationStart: g, onLayoutAnimationComplete: x} = u.getProps()
                  , m = !this.targetLayout || !w1(this.targetLayout, h)
                  , p = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || p || d && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...rh(v, "layout"),
                        onPlay: g,
                        onComplete: x
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(c, p)
                } else
                    d || mg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Et(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(NN),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && C1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0),
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const l = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                l && this.nodes.forEach(PN),
                this.nodes.forEach(hg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(pg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(kN),
            this.nodes.forEach(AN),
            this.nodes.forEach(SN),
            this.nodes.forEach(EN)) : this.nodes.forEach(pg),
            this.clearAllSnapshots();
            const a = Ue.now();
            ke.delta = Wt(0, 1e3 / 60, a - ke.timestamp),
            ke.timestamp = a,
            ke.isProcessing = !0,
            Au.update.process(ke),
            Au.preRender.process(ke),
            Au.render.process(ke),
            ke.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            uh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(bN),
            this.sharedNodes.forEach(DN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Z.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !We(this.snapshot.measuredBox.x) && !We(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = Ee()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !x1(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || xr(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            IN(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return Ee();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(VN))) {
                const {scroll: c} = this.root;
                c && (qt(a.x, c.offset.x),
                qt(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Ee();
            if (At(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && At(a, o),
                qt(a.x, d.offset.x),
                qt(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1, l) {
            var c, d;
            const u = l || Ee();
            At(u, o);
            for (let f = 0; f < this.path.length; f++) {
                const h = this.path[f];
                !a && h.options.layoutScroll && h.scroll && h !== h.root && (qt(u.x, -h.scroll.offset.x),
                qt(u.y, -h.scroll.offset.y)),
                xr(h.latestValues) && xa(u, h.latestValues, (c = h.layout) == null ? void 0 : c.layoutBox)
            }
            return xr(this.latestValues) && xa(u, this.latestValues, (d = this.layout) == null ? void 0 : d.layoutBox),
            u
        }
        removeTransform(o) {
            var l;
            const a = Ee();
            At(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!xr(c.latestValues))
                    continue;
                let d;
                c.instance && (Sd(c.latestValues) && c.updateSnapshot(),
                d = Ee(),
                At(d, c.measurePageBox())),
                ig(a, c.latestValues, (l = c.snapshot) == null ? void 0 : l.layoutBox, d)
            }
            return xr(this.latestValues) && ig(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ke.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = ke.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ee(),
            this.targetWithTransforms = Ee()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            iN(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : At(this.target, this.layout.layoutBox),
            a1(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Sd(this.parent.latestValues) || o1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ee(),
            this.relativeTargetOrigin = Ee(),
            sl(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0),
            At(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === ke.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            At(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            LM(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = Ee());
            const {target: h} = o;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Zm(this.prevProjectionDelta.x, this.projectionDelta.x),
            Zm(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ns(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !ug(this.projectionDelta.x, this.prevProjectionDelta.x) || !ug(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = hi(),
            this.projectionDelta = hi(),
            this.projectionDeltaWithTransform = hi()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = hi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Ee()
              , h = l ? l.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , g = h !== v
              , x = this.getStack()
              , m = !x || x.members.length <= 1
              , p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(ON));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = E => {
                const C = E / 1e3;
                gg(d.x, o.x, C),
                gg(d.y, o.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (sl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                LN(this.relativeTarget, this.relativeTargetOrigin, f, C),
                y && lN(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = Ee()),
                At(y, this.relativeTarget)),
                g && (this.animationValues = c,
                dN(c, u, this.latestValues, C, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (Et(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Z.update( () => {
                Sa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = It(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = pN(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        o.onUpdate && o.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xN),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && b1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ee();
                    const d = We(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = We(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                At(a, l),
                xa(a, c),
                Ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new vN),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Fu("z", o, u, this.animationValues);
            for (let c = 0; c < Vu.length; c++)
                Fu(`rotate${Vu[c]}`, o, u, this.animationValues),
                Fu(`skew${Vu[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = wa(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = wa(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !xr(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = uN(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            o.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in Cd) {
                if (c[v] === void 0)
                    continue;
                const {correct: g, applyTo: x, isCSSVariable: m} = Cd[v]
                  , p = d === "none" ? c[v] : g(c[v], u);
                if (x) {
                    const y = x.length;
                    for (let E = 0; E < y; E++)
                        o[x[E]] = p
                } else
                    m ? this.options.visualElement.renderState.vars[v] = p : o[v] = p
            }
            this.options.layoutId && (o.pointerEvents = u === this ? wa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(hg),
            this.root.sharedNodes.clear()
        }
    }
}
function SN(e) {
    e.updateLayout()
}
function EN(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        if (s === "size")
            Gt(d => {
                const f = o ? t.measuredBox[d] : t.layoutBox[d]
                  , h = We(f);
                f.min = r[d].min,
                f.max = f.min + h
            }
            );
        else if (s === "x" || s === "y") {
            const d = s === "x" ? "y" : "x";
            Td(o ? t.measuredBox[d] : t.layoutBox[d], r[d])
        } else
            b1(s, t.layoutBox, r) && Gt(d => {
                const f = o ? t.measuredBox[d] : t.layoutBox[d]
                  , h = We(r[d]);
                f.max = f.min + h,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                e.relativeTarget[d].max = e.relativeTarget[d].min + h)
            }
            );
        const a = hi();
        Ns(a, r, t.layoutBox);
        const l = hi();
        o ? Ns(l, e.applyTransform(i, !0), t.measuredBox) : Ns(l, r, t.layoutBox);
        const u = !x1(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const v = e.options.layoutAnchor || void 0
                      , g = Ee();
                    sl(g, t.layoutBox, f.layoutBox, v);
                    const x = Ee();
                    sl(x, r, h.layoutBox, v),
                    w1(g, x) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function CN(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function TN(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function bN(e) {
    e.clearSnapshot()
}
function hg(e) {
    e.clearMeasurements()
}
function PN(e) {
    e.isLayoutDirty = !0,
    e.updateLayout()
}
function pg(e) {
    e.isLayoutDirty = !1
}
function kN(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout,
    e.isLayoutDirty = !0)
}
function AN(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function mg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function RN(e) {
    e.resolveTargetDelta()
}
function MN(e) {
    e.calcProjection()
}
function NN(e) {
    e.resetSkewAndRotation()
}
function DN(e) {
    e.removeLeadSnapshot()
}
function gg(e, t, n) {
    e.translate = ae(t.translate, 0, n),
    e.scale = ae(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function yg(e, t, n, r) {
    e.min = ae(t.min, n.min, r),
    e.max = ae(t.max, n.max, r)
}
function LN(e, t, n, r) {
    yg(e.x, t.x, n.x, r),
    yg(e.y, t.y, n.y, r)
}
function ON(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const jN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , vg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , xg = vg("applewebkit/") && !vg("chrome/") ? Math.round : tt;
function wg(e) {
    e.min = xg(e.min),
    e.max = xg(e.max)
}
function IN(e) {
    wg(e.x),
    wg(e.y)
}
function b1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !rN(lg(t), lg(n), .2)
}
function VN(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const FN = T1({
    attachResizeListener: (e, t) => ro(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , _u = {
    current: void 0
}
  , P1 = T1({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!_u.current) {
            const e = new FN({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            _u.current = e
        }
        return _u.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , vo = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function Sg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function _N(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Sg(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Sg(e[i], null)
                }
            }
    }
}
function zN(...e) {
    return w.useCallback(_N(...e), e)
}
class BN extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (Ms(n) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , i = Ms(r) && r.offsetWidth || 0
              , s = Ms(r) && r.offsetHeight || 0
              , o = getComputedStyle(n)
              , a = this.props.sizeRef.current;
            a.height = parseFloat(o.height),
            a.width = parseFloat(o.width),
            a.top = n.offsetTop,
            a.left = n.offsetLeft,
            a.right = i - a.width - a.left,
            a.bottom = s - a.height - a.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function $N({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: s}) {
    var f;
    const o = w.useId()
      , a = w.useRef(null)
      , l = w.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = w.useContext(vo)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = zN(a, c);
    return w.useInsertionEffect( () => {
        const {width: h, height: v, top: g, left: x, right: m, bottom: p} = l.current;
        if (t || s === !1 || !a.current || !h || !v)
            return;
        const y = n === "left" ? `left: ${x}` : `right: ${m}`
          , E = r === "bottom" ? `bottom: ${p}` : `top: ${g}`;
        a.current.dataset.motionPopId = o;
        const C = document.createElement("style");
        u && (C.nonce = u);
        const T = i ?? document.head;
        return T.appendChild(C),
        C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${E}px !important;
          }
        `),
        () => {
            var b;
            (b = a.current) == null || b.removeAttribute("data-motion-pop-id"),
            T.contains(C) && T.removeChild(C)
        }
    }
    , [t]),
    S.jsx(BN, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: s,
        children: s === !1 ? e : w.cloneElement(e, {
            ref: d
        })
    })
}
const UN = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: u}) => {
    const c = Yi(WN)
      , d = w.useId();
    let f = !0
      , h = w.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: v => {
            c.set(v, !0);
            for (const g of c.values())
                if (!g)
                    return;
            r && r()
        }
        ,
        register: v => (c.set(v, !1),
        () => c.delete(v))
    }), [n, c, r]);
    return s && f && (h = {
        ...h
    }),
    w.useMemo( () => {
        c.forEach( (v, g) => c.set(g, !1))
    }
    , [n]),
    w.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = S.jsx($N, {
        pop: o === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    S.jsx(Fl.Provider, {
        value: h,
        children: e
    })
}
;
function WN() {
    return new Map
}
function k1(e=!0) {
    const t = w.useContext(Fl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = w.useId();
    w.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = w.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Qo = e => e.key || "";
function Eg(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const HN = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = k1(o)
      , f = w.useMemo( () => Eg(e), [e])
      , h = o && !c ? [] : f.map(Qo)
      , v = w.useRef(!0)
      , g = w.useRef(f)
      , x = Yi( () => new Map)
      , m = w.useRef(new Set)
      , [p,y] = w.useState(f)
      , [E,C] = w.useState(f);
    Vl( () => {
        v.current = !1,
        g.current = f;
        for (let P = 0; P < E.length; P++) {
            const N = Qo(E[P]);
            h.includes(N) ? (x.delete(N),
            m.current.delete(N)) : x.get(N) !== !0 && x.set(N, !1)
        }
    }
    , [E, h.length, h.join("-")]);
    const T = [];
    if (f !== p) {
        let P = [...f];
        for (let N = 0; N < E.length; N++) {
            const A = E[N]
              , V = Qo(A);
            h.includes(V) || (P.splice(N, 0, A),
            T.push(A))
        }
        return s === "wait" && T.length && (P = T),
        C(Eg(P)),
        y(f),
        null
    }
    const {forceRender: b} = w.useContext(Bf);
    return S.jsx(S.Fragment, {
        children: E.map(P => {
            const N = Qo(P)
              , A = o && !c ? !1 : f === E || h.includes(N)
              , V = () => {
                if (m.current.has(N))
                    return;
                if (x.has(N))
                    m.current.add(N),
                    x.set(N, !0);
                else
                    return;
                let j = !0;
                x.forEach(U => {
                    U || (j = !1)
                }
                ),
                j && (b == null || b(),
                C(g.current),
                o && (d == null || d()),
                r && r())
            }
            ;
            return S.jsx(UN, {
                isPresent: A,
                initial: !v.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: u,
                onExitComplete: A ? void 0 : V,
                anchorX: a,
                anchorY: l,
                children: P
            }, N)
        }
        )
    })
}
  , A1 = w.createContext({
    strict: !1
})
  , Cg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Tg = !1;
function KN() {
    if (Tg)
        return;
    const e = {};
    for (const t in Cg)
        e[t] = {
            isEnabled: n => Cg[t].some(r => !!n[r])
        };
    r1(e),
    Tg = !0
}
function R1() {
    return KN(),
    RM()
}
function GN(e) {
    const t = R1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    r1(t)
}
const YN = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function ol(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || YN.has(e)
}
let M1 = e => !ol(e);
function QN(e) {
    typeof e == "function" && (M1 = t => t.startsWith("on") ? !ol(t) : e(t))
}
try {
    QN(require("@emotion/is-prop-valid").default)
} catch {}
function XN(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || Pe(e[i]) || (M1(i) || n === !0 && ol(i) || !t && !ol(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Ul = w.createContext({});
function qN(e, t) {
    if ($l(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || no(n) ? n : void 0,
            animate: no(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function ZN(e) {
    const {initial: t, animate: n} = qN(e, w.useContext(Ul));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [bg(t), bg(n)])
}
function bg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const gh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function N1(e, t, n) {
    for (const r in t)
        !Pe(t[r]) && !c1(r, n) && (e[r] = t[r])
}
function JN({transformTemplate: e}, t) {
    return w.useMemo( () => {
        const n = gh();
        return ph(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function eD(e, t) {
    const n = e.style || {}
      , r = {};
    return N1(r, n, e),
    Object.assign(r, JN(e, t)),
    r
}
function tD(e, t) {
    const n = {}
      , r = eD(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const D1 = () => ({
    ...gh(),
    attrs: {}
});
function nD(e, t, n, r) {
    const i = w.useMemo( () => {
        const s = D1();
        return d1(s, t, h1(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        N1(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const rD = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function yh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(rD.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function iD(e, t, n, {latestValues: r}, i, s=!1, o) {
    const l = (o ?? yh(e) ? nD : tD)(t, r, i, e)
      , u = XN(t, typeof e == "string", s)
      , c = e !== w.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = w.useMemo( () => Pe(d) ? d.get() : d, [d]);
    return w.createElement(e, {
        ...c,
        children: f
    })
}
function sD({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: oD(n, r, i, e),
        renderState: t()
    }
}
function oD(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = wa(s[f]);
    let {initial: o, animate: a} = e;
    const l = $l(e)
      , u = t1(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !Bl(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = sh(e, f[h]);
            if (v) {
                const {transitionEnd: g, transition: x, ...m} = v;
                for (const p in m) {
                    let y = m[p];
                    if (Array.isArray(y)) {
                        const E = c ? y.length - 1 : 0;
                        y = y[E]
                    }
                    y !== null && (i[p] = y)
                }
                for (const p in g)
                    i[p] = g[p]
            }
        }
    }
    return i
}
const L1 = e => (t, n) => {
    const r = w.useContext(Ul)
      , i = w.useContext(Fl)
      , s = () => sD(e, t, r, i);
    return n ? s() : Yi(s)
}
  , aD = L1({
    scrapeMotionValuesFromProps: mh,
    createRenderState: gh
})
  , lD = L1({
    scrapeMotionValuesFromProps: p1,
    createRenderState: D1
})
  , uD = Symbol.for("motionComponentSymbol");
function cD(e, t, n) {
    const r = w.useRef(n);
    w.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = w.useRef(null);
    return w.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s));
        const o = r.current;
        if (typeof o == "function")
            if (s) {
                const l = o(s);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : o(s);
        else
            o && (o.current = s);
        t && (s ? t.mount(s) : t.unmount())
    }
    , [t])
}
const O1 = w.createContext({});
function Zr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function dD(e, t, n, r, i, s) {
    var y, E;
    const {visualElement: o} = w.useContext(Ul)
      , a = w.useContext(A1)
      , l = w.useContext(Fl)
      , u = w.useContext(vo)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = w.useRef(null)
      , h = w.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: s
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
      , g = w.useContext(O1);
    v && !v.projection && i && (v.type === "html" || v.type === "svg") && fD(f.current, n, i, g);
    const x = w.useRef(!1);
    w.useInsertionEffect( () => {
        v && x.current && v.update(n, l)
    }
    );
    const m = n[$w]
      , p = w.useRef(!!m && typeof window < "u" && !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) && ((E = window.MotionHasOptimisedAnimation) == null ? void 0 : E.call(window, m)));
    return Vl( () => {
        h.current = !0,
        v && (x.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        p.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        v && (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, m)
        }
        ),
        p.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function fD(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutAnchor: c, layoutCrossfade: d} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : j1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && Zr(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: c
    })
}
function j1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : j1(e.parent)
}
function zu(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && GN(r);
    const s = n ? n === "svg" : yh(e)
      , o = s ? lD : aD;
    function a(u, c) {
        let d;
        const f = {
            ...w.useContext(vo),
            ...u,
            layoutId: hD(u)
        }
          , {isStatic: h} = f
          , v = ZN(u)
          , g = o(u, h);
        if (!h && typeof window < "u") {
            pD();
            const x = mD(f);
            d = x.MeasureLayout,
            v.visualElement = dD(e, g, f, i, x.ProjectionNode, s)
        }
        return S.jsxs(Ul.Provider, {
            value: v,
            children: [d && v.visualElement ? S.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, iD(e, u, cD(g, v.visualElement, c), g, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = w.forwardRef(a);
    return l[uD] = e,
    l
}
function hD({layoutId: e}) {
    const t = w.useContext(Bf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function pD(e, t) {
    w.useContext(A1).strict
}
function mD(e) {
    const t = R1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function gD(e, t) {
    if (typeof Proxy > "u")
        return zu;
    const n = new Map
      , r = (s, o) => zu(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, zu(o, void 0, e, t)),
        n.get(o))
    })
}
const yD = (e, t) => t.isSVG ?? yh(e) ? new KM(t) : new zM(t,{
    allowProjection: e !== w.Fragment
});
class vD extends fr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = qM(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Bl(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let xD = 0;
class wD extends fr {
    constructor() {
        super(...arguments),
        this.id = xD++,
        this.isExitComplete = !1
    }
    update() {
        var s;
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        if (t && r === !1) {
            if (this.isExitComplete) {
                const {initial: o, custom: a} = this.node.getProps();
                if (typeof o == "string") {
                    const l = Or(this.node, o, a);
                    if (l) {
                        const {transition: u, transitionEnd: c, ...d} = l;
                        for (const f in d)
                            (s = this.node.getValue(f)) == null || s.jump(d[f])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            this.isExitComplete = !0,
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const SD = {
    animation: {
        Feature: vD
    },
    exit: {
        Feature: wD
    }
};
function xo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const ED = e => t => ch(t) && e(t, xo(t));
function Ds(e, t, n, r) {
    return ro(e, t, ED(n), r)
}
const I1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Pg = (e, t) => Math.abs(e - t);
function CD(e, t) {
    const n = Pg(e.x, t.x)
      , r = Pg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const kg = new Set(["auto", "scroll"]);
class V1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Xo(this.lastRawMoveEventInfo, this.transformPagePoint));
            const h = Bu(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , g = CD(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !g)
                return;
            const {point: x} = h
              , {timestamp: m} = ke;
            this.history.push({
                ...x,
                timestamp: m
            });
            const {onStart: p, onMove: y} = this.handlers;
            v || (p && p(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, v) => {
            this.lastMoveEvent = h,
            this.lastRawMoveEventInfo = v,
            this.lastMoveEventInfo = Xo(v, this.transformPagePoint),
            Z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, v) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: m} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const p = Bu(h.type === "pointercancel" ? this.lastMoveEventInfo : Xo(v, this.transformPagePoint), this.history);
            this.startEvent && g && g(h, p),
            x && x(h, p)
        }
        ,
        !ch(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const l = xo(t)
          , u = Xo(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = ke;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Bu(u, this.history)),
        this.removeListeners = mo(Ds(this.contextWindow, "pointermove", this.handlePointerMove), Ds(this.contextWindow, "pointerup", this.handlePointerUp), Ds(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (kg.has(r.overflowX) || kg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, i),
        Z.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Et(this.updatePoint)
    }
}
function Xo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ag(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Bu({point: e}, t) {
    return {
        point: e,
        delta: Ag(e, F1(t)),
        offset: Ag(e, TD(t)),
        velocity: bD(t, .1)
    }
}
function TD(e) {
    return e[0]
}
function F1(e) {
    return e[e.length - 1]
}
function bD(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = F1(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > nt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > nt(t) * 2 && (r = e[1]);
    const s = vt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function PD(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? ae(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
    e
}
function Rg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function kD(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Rg(e.x, n, i),
        y: Rg(e.y, t, r)
    }
}
function Mg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function AD(e, t) {
    return {
        x: Mg(e.x, t.x),
        y: Mg(e.y, t.y)
    }
}
function RD(e, t) {
    let n = .5;
    const r = We(e)
      , i = We(t);
    return i > r ? n = zi(t.min, t.max - r, e.min) : r > i && (n = zi(e.min, e.max - i, t.min)),
    Wt(0, 1, n)
}
function MD(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const bd = .35;
function ND(e=bd) {
    return e === !1 ? e = 0 : e === !0 && (e = bd),
    {
        x: Ng(e, "left", "right"),
        y: Ng(e, "top", "bottom")
    }
}
function Ng(e, t, n) {
    return {
        min: Dg(e, t),
        max: Dg(e, n)
    }
}
function Dg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const DD = new WeakMap;
class LD {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ee(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = d => {
            n && this.snapToCursor(xo(d).point),
            this.stopAnimation()
        }
          , o = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: g} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = rM(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Gt(m => {
                let p = this.getAxisMotionValue(m).get() || 0;
                if (rn.test(p)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const E = y.layout.layoutBox[m];
                        E && (p = We(E) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[m] = p
            }
            ),
            g && Z.update( () => g(d, f), !1, !0),
            md(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: m} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = jD(m),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, m),
            this.updateAxis("y", f.point, m),
            this.visualElement.render(),
            x && Z.update( () => x(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new V1(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: I1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && Z.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !qo(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = PD(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && Zr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = kD(r.layoutBox, t) : this.constraints = !1,
        this.elastic = ND(n),
        i !== this.constraints && !Zr(t) && r && this.constraints && !this.hasMutatedConstraints && Gt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = MD(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Zr(t))
            return !1;
        const r = t.current;
        ar(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = OM(r, i.root, this.visualElement.getTransformPagePoint());
        let o = AD(i.layout.layoutBox, s);
        if (n) {
            const a = n(NM(o));
            this.hasMutatedConstraints = !!a,
            a && (o = s1(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Gt(c => {
            if (!qo(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            (o === !0 || o === c) && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return md(this.visualElement, t),
        r.start(ih(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Gt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Gt(n => {
            const {drag: r} = this.getProps();
            if (!qo(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - ae(o, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Zr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Gt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = RD({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Gt(o => {
            if (!qo(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(ae(l, u, i[o]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        DD.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ds(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && uM(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: u} = this.getProps();
            Zr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = OD(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        Z.read(i);
        const a = ro(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Gt(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            o(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=bd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Lg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function OD(e, t, n) {
    const r = xd(e, Lg(n))
      , i = xd(t, Lg(n));
    return () => {
        r(),
        i()
    }
}
function qo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function jD(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class ID extends fr {
    constructor(t) {
        super(t),
        this.removeGroupControls = tt,
        this.removeListeners = tt,
        this.controls = new LD(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || tt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const $u = e => (t, n) => {
    e && Z.update( () => e(t, n), !1, !0)
}
;
class VD extends fr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = tt
    }
    onPointerDown(t) {
        this.session = new V1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: I1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: $u(t),
            onStart: $u(n),
            onMove: $u(r),
            onEnd: (s, o) => {
                delete this.session,
                i && Z.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ds(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Uu = !1;
class FD extends w.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Uu && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Sa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        t.layoutDependency !== n && o.setOptions({
            ...o.options,
            layoutDependency: n
        }),
        Uu = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || Z.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: t, layoutAnchor: n} = this.props
          , {projection: r} = t;
        r && (r.options.layoutAnchor = n,
        r.root.didUpdate(),
        uh.postRender( () => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Uu = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function _1(e) {
    const [t,n] = k1()
      , r = w.useContext(Bf);
    return S.jsx(FD, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(O1),
        isPresent: t,
        safeToRemove: n
    })
}
const _D = {
    pan: {
        Feature: VD
    },
    drag: {
        Feature: ID,
        ProjectionNode: P1,
        MeasureLayout: _1
    }
};
function Og(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && Z.postRender( () => s(t, xo(t)))
}
class zD extends fr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = sM(t, (n, r) => (Og(this.node, r, "Start"),
        i => Og(this.node, i, "End"))))
    }
    unmount() {}
}
class BD extends fr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = mo(ro(this.node.current, "focus", () => this.onFocus()), ro(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function jg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && Z.postRender( () => s(t, xo(t)))
}
class $D extends fr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = dM(t, (i, s) => (jg(this.node, s, "Start"),
        (o, {success: a}) => jg(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const Pd = new WeakMap
  , Wu = new WeakMap
  , UD = e => {
    const t = Pd.get(e.target);
    t && t(e)
}
  , WD = e => {
    e.forEach(UD)
}
;
function HD({root: e, ...t}) {
    const n = e || document;
    Wu.has(n) || Wu.set(n, {});
    const r = Wu.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(WD,{
        root: e,
        ...t
    })),
    r[i]
}
function KD(e, t, n) {
    const r = HD(t);
    return Pd.set(e, n),
    r.observe(e),
    () => {
        Pd.delete(e),
        r.unobserve(e)
    }
}
const GD = {
    some: 0,
    all: 1
};
class YD extends fr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        var l;
        (l = this.stopObserver) == null || l.call(this);
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : GD[i]
        }
          , a = u => {
            const {isIntersecting: c} = u;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: d, onViewportLeave: f} = this.node.getProps()
              , h = c ? d : f;
            h && h(u)
        }
        ;
        this.stopObserver = KD(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(QD(t, n)) && this.startObserver()
    }
    unmount() {
        var t;
        (t = this.stopObserver) == null || t.call(this),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function QD({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const XD = {
    inView: {
        Feature: YD
    },
    tap: {
        Feature: $D
    },
    focus: {
        Feature: BD
    },
    hover: {
        Feature: zD
    }
}
  , qD = {
    layout: {
        ProjectionNode: P1,
        MeasureLayout: _1
    }
}
  , ZD = {
    ...SD,
    ...XD,
    ..._D,
    ...qD
}
  , Ke = gD(ZD, yD);
function al(e) {
    return typeof window > "u" ? !1 : e ? Nw() : nh()
}
const JD = 50
  , Ig = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , eL = () => ({
    time: 0,
    x: Ig(),
    y: Ig()
})
  , tL = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Vg(e, t, n, r) {
    const i = n[t]
      , {length: s, position: o} = tL[t]
      , a = i.current
      , l = n.time;
    i.current = Math.abs(e[`scroll${o}`]),
    i.scrollLength = e[`scroll${s}`] - e[`client${s}`],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = zi(0, i.scrollLength, i.current);
    const u = r - l;
    i.velocity = u > JD ? 0 : Wf(i.current - a, u)
}
function nL(e, t, n) {
    Vg(e, "x", t, n),
    Vg(e, "y", t, n),
    t.time = n
}
function rL(e, t) {
    const n = {
        x: 0,
        y: 0
    };
    let r = e;
    for (; r && r !== t; )
        if (Ms(r))
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            const i = r.getBoundingClientRect();
            r = r.parentElement;
            const s = r.getBoundingClientRect();
            n.x += i.left - s.left,
            n.y += i.top - s.top
        } else if (r instanceof SVGGraphicsElement) {
            const {x: i, y: s} = r.getBBox();
            n.x += i,
            n.y += s;
            let o = null
              , a = r.parentNode;
            for (; !o; )
                a.tagName === "svg" && (o = a),
                a = r.parentNode;
            r = o
        } else
            break;
    return n
}
const kd = {
    start: 0,
    center: .5,
    end: 1
};
function Fg(e, t, n=0) {
    let r = 0;
    if (e in kd && (e = kd[e]),
    typeof e == "string") {
        const i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e),
    n + r
}
const iL = [0, 0];
function sL(e, t, n, r) {
    let i = Array.isArray(e) ? e : iL
      , s = 0
      , o = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, kd[e] ? e : "0"]),
    s = Fg(i[0], n, r),
    o = Fg(i[1], t),
    s - o
}
const gs = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , oL = {
    x: 0,
    y: 0
};
function aL(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function lL(e, t, n) {
    const {offset: r=gs.All} = n
      , {target: i=e, axis: s="y"} = n
      , o = s === "y" ? "height" : "width"
      , a = i !== e ? rL(i, e) : oL
      , l = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : aL(i)
      , u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[s].offset.length = 0;
    let c = !t[s].interpolate;
    const d = r.length;
    for (let f = 0; f < d; f++) {
        const h = sL(r[f], u[o], l[o], a[s]);
        !c && h !== t[s].interpolatorOffsets[f] && (c = !0),
        t[s].offset[f] = h
    }
    c && (t[s].interpolate = Zf(t[s].offset, Pw(r), {
        clamp: !1
    }),
    t[s].interpolatorOffsets = [...t[s].offset]),
    t[s].progress = Wt(0, 1, t[s].interpolate(t[s].current))
}
function uL(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r !== e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function cL(e, t, n, r={}) {
    return {
        measure: i => {
            uL(e, r.target, n),
            nL(e, n, i),
            (r.offset || r.target) && lL(e, n, r)
        }
        ,
        notify: () => t(n)
    }
}
const qr = new WeakMap
  , _g = new WeakMap
  , Hu = new WeakMap
  , zg = new WeakMap
  , Zo = new WeakMap
  , Bg = e => e === document.scrollingElement ? window : e;
function z1(e, {container: t=document.scrollingElement, trackContentSize: n=!1, ...r}={}) {
    if (!t)
        return tt;
    let i = Hu.get(t);
    i || (i = new Set,
    Hu.set(t, i));
    const s = eL()
      , o = cL(t, e, s, r);
    if (i.add(o),
    !qr.has(t)) {
        const l = () => {
            for (const f of i)
                f.measure(ke.timestamp);
            Z.preUpdate(u)
        }
          , u = () => {
            for (const f of i)
                f.notify()
        }
          , c = () => Z.read(l);
        qr.set(t, c);
        const d = Bg(t);
        window.addEventListener("resize", c),
        t !== document.documentElement && _g.set(t, xd(t, c)),
        d.addEventListener("scroll", c),
        c()
    }
    if (n && !Zo.has(t)) {
        const l = qr.get(t)
          , u = {
            width: t.scrollWidth,
            height: t.scrollHeight
        };
        zg.set(t, u);
        const c = () => {
            const f = t.scrollWidth
              , h = t.scrollHeight;
            (u.width !== f || u.height !== h) && (l(),
            u.width = f,
            u.height = h)
        }
          , d = Z.read(c, !0);
        Zo.set(t, d)
    }
    const a = qr.get(t);
    return Z.read(a, !1, !0),
    () => {
        var d;
        Et(a);
        const l = Hu.get(t);
        if (!l || (l.delete(o),
        l.size))
            return;
        const u = qr.get(t);
        qr.delete(t),
        u && (Bg(t).removeEventListener("scroll", u),
        (d = _g.get(t)) == null || d(),
        window.removeEventListener("resize", u));
        const c = Zo.get(t);
        c && (Et(c),
        Zo.delete(t)),
        zg.delete(t)
    }
}
const dL = [[gs.Enter, "entry"], [gs.Exit, "exit"], [gs.Any, "cover"], [gs.All, "contain"]]
  , $g = {
    start: 0,
    end: 1
};
function fL(e) {
    const t = e.trim().split(/\s+/);
    if (t.length !== 2)
        return;
    const n = $g[t[0]]
      , r = $g[t[1]];
    if (!(n === void 0 || r === void 0))
        return [n, r]
}
function hL(e) {
    if (e.length !== 2)
        return;
    const t = [];
    for (const n of e)
        if (Array.isArray(n))
            t.push(n);
        else if (typeof n == "string") {
            const r = fL(n);
            if (!r)
                return;
            t.push(r)
        } else
            return;
    return t
}
function pL(e, t) {
    const n = hL(e);
    if (!n)
        return !1;
    for (let r = 0; r < 2; r++) {
        const i = n[r]
          , s = t[r];
        if (i[0] !== s[0] || i[1] !== s[1])
            return !1
    }
    return !0
}
function vh(e) {
    if (!e)
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    for (const [t,n] of dL)
        if (pL(e, t))
            return {
                rangeStart: `${n} 0%`,
                rangeEnd: `${n} 100%`
            }
}
const Ug = new Map;
function Wg(e) {
    const t = {
        value: 0
    }
      , n = z1(r => {
        t.value = r[e.axis].progress * 100
    }
    , e);
    return {
        currentTime: t,
        cancel: n
    }
}
function B1({source: e, container: t, ...n}) {
    const {axis: r} = n;
    e && (t = e);
    let i = Ug.get(t);
    i || (i = new Map,
    Ug.set(t, i));
    const s = n.target ?? "self";
    let o = i.get(s);
    o || (o = {},
    i.set(s, o));
    const a = r + (n.offset ?? []).join(",");
    return o[a] || (n.target && al(n.target) ? vh(n.offset) ? o[a] = new ViewTimeline({
        subject: n.target,
        axis: r
    }) : o[a] = Wg({
        container: t,
        ...n
    }) : al() ? o[a] = new ScrollTimeline({
        source: t,
        axis: r
    }) : o[a] = Wg({
        container: t,
        ...n
    })),
    o[a]
}
function mL(e, t) {
    const n = B1(t)
      , r = t.target ? vh(t.offset) : void 0
      , i = t.target ? al(t.target) && !!r : al();
    return e.attachTimeline({
        timeline: i ? n : void 0,
        ...r && i && {
            rangeStart: r.rangeStart,
            rangeEnd: r.rangeEnd
        },
        observe: s => (s.pause(),
        e1(o => {
            s.time = s.iterationDuration * o
        }
        , n))
    })
}
function gL(e) {
    return e.length === 2
}
function yL(e, t) {
    return gL(e) ? z1(n => {
        e(n[t.axis].progress, n)
    }
    , t) : e1(e, B1(t))
}
function $1(e, {axis: t="y", container: n=document.scrollingElement, ...r}={}) {
    if (!n)
        return tt;
    const i = {
        axis: t,
        container: n,
        ...r
    };
    return typeof e == "function" ? yL(e, i) : mL(e, i)
}
const vL = () => ({
    scrollX: It(0),
    scrollY: It(0),
    scrollXProgress: It(0),
    scrollYProgress: It(0)
})
  , Jo = e => e ? !e.current : !1;
function Hg(e, t, n, r) {
    return {
        factory: i => $1(i, {
            ...t,
            axis: e,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (r == null ? void 0 : r.current) || void 0
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: i => i,
        duration: 1
    }
}
function xL(e, t) {
    return typeof window > "u" ? !1 : e ? Nw() && !!vh(t) : nh()
}
function wL({container: e, target: t, ...n}={}) {
    const r = Yi(vL);
    xL(t, n.offset) && (r.scrollXProgress.accelerate = Hg("x", n, e, t),
    r.scrollYProgress.accelerate = Hg("y", n, e, t));
    const i = w.useRef(null)
      , s = w.useRef(!1)
      , o = w.useCallback( () => (i.current = $1( (a, {x: l, y: u}) => {
        r.scrollX.set(l.current),
        r.scrollXProgress.set(l.progress),
        r.scrollY.set(u.current),
        r.scrollYProgress.set(u.progress)
    }
    , {
        ...n,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    }),
    () => {
        var a;
        (a = i.current) == null || a.call(i)
    }
    ), [e, t, JSON.stringify(n.offset)]);
    return Vl( () => {
        if (s.current = !1,
        Jo(e) || Jo(t)) {
            s.current = !0;
            return
        } else
            return o()
    }
    , [o]),
    w.useEffect( () => {
        if (s.current)
            return ar(!Jo(e), "Container ref is defined but not hydrated", "use-scroll-ref"),
            ar(!Jo(t), "Target ref is defined but not hydrated", "use-scroll-ref"),
            o()
    }
    , [o]),
    r
}
function U1(e) {
    const t = Yi( () => It(e))
      , {isStatic: n} = w.useContext(vo);
    if (n) {
        const [,r] = w.useState(e);
        w.useEffect( () => t.on("change", r), [])
    }
    return t
}
function W1(e, t) {
    const n = U1(t())
      , r = () => n.set(t());
    return r(),
    Vl( () => {
        const i = () => Z.preRender(r, !1, !0)
          , s = e.map(o => o.on("change", i));
        return () => {
            s.forEach(o => o()),
            Et(r)
        }
    }
    ),
    n
}
function SL(e) {
    Rs.current = [],
    e();
    const t = W1(Rs.current, e);
    return Rs.current = void 0,
    t
}
function EL(e, t, n, r) {
    if (typeof e == "function")
        return SL(e);
    const s = SM(t, n, r)
      , o = Array.isArray(e) ? Kg(e, s) : Kg([e], ([l]) => s(l))
      , a = Array.isArray(e) ? void 0 : e.accelerate;
    return a && !a.isTransformed && typeof t != "function" && Array.isArray(n) && (r == null ? void 0 : r.clamp) !== !1 && (o.accelerate = {
        ...a,
        times: t,
        keyframes: n,
        isTransformed: !0
    }),
    o
}
function Kg(e, t) {
    const n = Yi( () => []);
    return W1(e, () => {
        n.length = 0;
        const r = e.length;
        for (let i = 0; i < r; i++)
            n[i] = e[i].get();
        return t(n)
    }
    )
}
function CL(e, t={}) {
    const {isStatic: n} = w.useContext(vo)
      , r = () => Pe(e) ? e.get() : e;
    if (n)
        return EL(r);
    const i = U1(r());
    return w.useInsertionEffect( () => EM(i, e, t), [i, JSON.stringify(t)]),
    i
}
function TL(e, t={}) {
    return CL(e, {
        type: "spring",
        ...t
    })
}
const bL = {
    some: 0,
    all: 1
};
function PL(e, t, {root: n, margin: r, amount: i="some"}={}) {
    const s = lh(e)
      , o = new WeakMap
      , a = u => {
        u.forEach(c => {
            const d = o.get(c.target);
            if (c.isIntersecting !== !!d)
                if (c.isIntersecting) {
                    const f = t(c.target, c);
                    typeof f == "function" ? o.set(c.target, f) : l.unobserve(c.target)
                } else
                    typeof d == "function" && (d(c),
                    o.delete(c.target))
        }
        )
    }
      , l = new IntersectionObserver(a,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : bL[i]
    });
    return s.forEach(u => l.observe(u)),
    () => l.disconnect()
}
function wo(e, {root: t, margin: n, amount: r, once: i=!1, initial: s=!1}={}) {
    const [o,a] = w.useState(s);
    return w.useEffect( () => {
        if (!e.current || i && o)
            return;
        const l = () => (a(!0),
        i ? void 0 : () => a(!1))
          , u = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return PL(e.current, l, u)
    }
    , [t, e, n, i, r]),
    o
}
const kL = () => {
    const {scrollYProgress: e} = wL()
      , t = TL(e, {
        stiffness: 100,
        damping: 30,
        restDelta: .001
    });
    return S.jsx(Ke.div, {
        className: "fixed top-0 left-0 right-0 h-[3px] z-50 origin-left",
        style: {
            scaleX: t,
            background: "linear-gradient(90deg, hsl(175 80% 50%), hsl(150 70% 45%))"
        }
    })
}
  , Gg = [{
    label: "About",
    href: "#about"
}, {
    label: "Skills",
    href: "#skills"
}, {
    label: "Projects",
    href: "#projects"
}, {
    label: "Leadership",
    href: "#experience"
}, {
    label: "Contact",
    href: "#contact"
}]
  , AL = () => {
    const [e,t] = w.useState(!1)
      , [n,r] = w.useState(!1);
    return w.useEffect( () => {
        const i = () => t(window.scrollY > 50);
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []),
    S.jsxs(Ke.nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${e ? "glass py-3" : "py-5 bg-transparent"}`,
        children: [S.jsxs("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between",
            children: [S.jsxs("a", {
                href: "#",
                className: "flex items-center gap-2.5 group",
                children: [S.jsx("span", {
                    className: "font-bold text-base gradient-text",
                    children: "Jenson Vivish"
                }), S.jsx("span", {
                    className: "hidden sm:inline text-[10px] font-mono text-muted-foreground tracking-wider uppercase border border-border rounded px-1.5 py-0.5",
                    children: "CEO"
                })]
            }), S.jsx("div", {
                className: "hidden md:flex items-center gap-8",
                children: Gg.map(i => S.jsx("a", {
                    href: i.href,
                    className: "text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                    children: i.label
                }, i.href))
            }), S.jsx("button", {
                onClick: () => r(!n),
                className: "md:hidden text-foreground hover:text-primary transition-colors",
                children: n ? S.jsx(px, {
                    size: 22
                }) : S.jsx(PP, {
                    size: 22
                })
            })]
        }), S.jsx(HN, {
            children: n && S.jsx(Ke.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden",
                children: S.jsx("div", {
                    className: "flex flex-col py-4 px-6 gap-4",
                    children: Gg.map(i => S.jsx("a", {
                        href: i.href,
                        onClick: () => r(!1),
                        className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                        children: i.label
                    }, i.href))
                })
            })
        })]
    })
}
  , Yg = ["Visionary Leader", "Tech Innovator", "Cybersecurity Strategist"]
  , RL = () => {
    const [e,t] = w.useState(0)
      , [n,r] = w.useState("")
      , [i,s] = w.useState(!1);
    return w.useEffect( () => {
        const o = Yg[e]
          , a = setTimeout( () => {
            i ? (r(o.substring(0, n.length - 1)),
            n.length === 0 && (s(!1),
            t(l => (l + 1) % Yg.length))) : (r(o.substring(0, n.length + 1)),
            n.length + 1 === o.length && setTimeout( () => s(!0), 1500))
        }
        , i ? 40 : 80);
        return () => clearTimeout(a)
    }
    , [n, i, e]),
    S.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [S.jsx("div", {
            className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]",
            style: {
                background: "hsl(175 80% 50%)"
            }
        }), S.jsx("div", {
            className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px]",
            style: {
                background: "hsl(150 70% 45%)"
            }
        }), S.jsx("div", {
            className: "absolute inset-0 opacity-[0.03]",
            style: {
                backgroundImage: "linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }
        }), S.jsxs("div", {
            className: "section-container text-center relative z-10",
            children: [S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-4 tracking-widest uppercase",
                    children: "Founder & CEO — DigiforgeDynamics"
                }), S.jsxs("h1", {
                    className: "text-4xl sm:text-6xl lg:text-7xl font-bold mb-6",
                    children: [S.jsx("span", {
                        className: "text-foreground",
                        children: "I'm "
                    }), S.jsx("span", {
                        className: "gradient-text text-glow",
                        children: "Jenson Vivish"
                    })]
                }), S.jsx("div", {
                    className: "h-10 flex items-center justify-center mb-8",
                    children: S.jsxs("span", {
                        className: "font-mono text-lg sm:text-xl text-muted-foreground",
                        children: [n, S.jsx("span", {
                            className: "inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse"
                        })]
                    })
                }), S.jsx("p", {
                    className: "text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-base sm:text-lg",
                    children: "Building the future of digital innovation — leading DigiforgeDynamics to empower creators and businesses through secure, intelligent, and scalable technology solutions."
                }), S.jsxs("div", {
                    className: "flex flex-wrap items-center justify-center gap-4",
                    children: [S.jsx("a", {
                        href: "#projects",
                        className: "glass-hover px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 gradient-border text-foreground hover:text-primary transition-colors",
                        children: "View Portfolio"
                    }), S.jsxs("a", {
                        href: "#contact",
                        className: "px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 text-primary-foreground transition-all duration-300 hover:scale-105",
                        style: {
                            background: "linear-gradient(135deg, hsl(175 80% 50%), hsl(150 70% 45%))"
                        },
                        children: [S.jsx(hx, {
                            size: 16
                        }), " Get In Touch"]
                    }), S.jsxs("a", {
                        href: "https://digiforgedynamics.netlify.app/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "glass-hover px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                        children: [S.jsx(Xc, {
                            size: 16
                        }), " DigiforgeDynamics"]
                    })]
                })]
            }), S.jsx(Ke.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5
                },
                className: "absolute bottom-10 left-1/2 -translate-x-1/2",
                children: S.jsx("a", {
                    href: "#about",
                    className: "text-muted-foreground hover:text-primary transition-colors animate-float block",
                    children: S.jsx(yP, {
                        size: 20
                    })
                })
            })]
        })]
    })
}
  , ML = [{
    icon: wP,
    label: "CEO & Founder"
}, {
    icon: AP,
    label: "Cybersecurity"
}, {
    icon: xP,
    label: "AI & Innovation"
}, {
    icon: SP,
    label: "Full-Stack Dev"
}, {
    icon: kP,
    label: "Product Strategy"
}, {
    icon: MP,
    label: "Team Leadership"
}]
  , NL = () => {
    const e = w.useRef(null)
      , t = wo(e, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "about",
        className: "relative",
        children: [S.jsx("div", {
            className: "glow-line"
        }), S.jsx("div", {
            className: "section-container",
            ref: e,
            children: S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-2 tracking-widest uppercase",
                    children: "About"
                }), S.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-8 gradient-text inline-block",
                    children: "The Vision Behind the Brand"
                }), S.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-10 items-start",
                    children: [S.jsxs("div", {
                        className: "space-y-5",
                        children: [S.jsxs("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: ["As the Founder & CEO of ", S.jsx("a", {
                                href: "https://digiforgedynamics.netlify.app/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-primary hover:underline font-medium",
                                children: "DigiforgeDynamics"
                            }), ", I lead a mission to democratize digital innovation — providing creators, businesses, and institutions with the tools, platforms, and technology they need to thrive in a digital-first world."]
                        }), S.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: "With deep expertise spanning cybersecurity, artificial intelligence, and full-stack development, I architect solutions that are not only cutting-edge but fundamentally secure and scalable. From AI-powered assistants to enterprise training platforms, every project I lead is driven by impact."
                        }), S.jsx("div", {
                            className: "glass p-4 rounded-lg border-l-2",
                            style: {
                                borderLeftColor: "hsl(175 80% 50%)"
                            },
                            children: S.jsx("p", {
                                className: "text-sm text-foreground italic",
                                children: '"My mission is to build technology that empowers people, strengthens security, and transforms industries at scale."'
                            })
                        })]
                    }), S.jsx("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: ML.map( (n, r) => S.jsxs(Ke.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: t ? {
                                opacity: 1,
                                scale: 1
                            } : {},
                            transition: {
                                duration: .5,
                                delay: .2 + r * .1
                            },
                            className: "glass-hover p-4 rounded-xl flex flex-col items-center gap-3 text-center",
                            children: [S.jsx(n.icon, {
                                className: "w-6 h-6 text-primary"
                            }), S.jsx("span", {
                                className: "text-xs font-medium text-foreground",
                                children: n.label
                            })]
                        }, n.label))
                    })]
                })]
            })
        })]
    })
}
  , DL = [{
    icon: EP,
    title: "Programming",
    skills: [{
        name: "JavaScript",
        level: 85
    }, {
        name: "Python",
        level: 80
    }]
}, {
    icon: fx,
    title: "Web Development",
    skills: [{
        name: "HTML & CSS",
        level: 90
    }, {
        name: "Firebase",
        level: 70
    }]
}, {
    icon: NP,
    title: "Tools & Tech",
    skills: [{
        name: "Arduino",
        level: 75
    }, {
        name: "MySQL",
        level: 70
    }, {
        name: "Vosk / AI-ML",
        level: 65
    }]
}, {
    icon: TP,
    title: "Concepts",
    skills: [{
        name: "Cybersecurity",
        level: 85
    }, {
        name: "Automation",
        level: 80
    }, {
        name: "System Design",
        level: 75
    }]
}]
  , LL = () => {
    const e = w.useRef(null)
      , t = wo(e, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "skills",
        className: "relative",
        children: [S.jsx("div", {
            className: "glow-line"
        }), S.jsx("div", {
            className: "section-container",
            ref: e,
            children: S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-2 tracking-widest uppercase",
                    children: "Skills"
                }), S.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-10 gradient-text inline-block",
                    children: "Technical Arsenal"
                }), S.jsx("div", {
                    className: "grid sm:grid-cols-2 gap-6",
                    children: DL.map( (n, r) => S.jsxs(Ke.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: t ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .5,
                            delay: r * .15
                        },
                        className: "glass-hover p-6 rounded-xl",
                        children: [S.jsxs("div", {
                            className: "flex items-center gap-3 mb-5",
                            children: [S.jsx(n.icon, {
                                className: "w-5 h-5 text-primary"
                            }), S.jsx("h3", {
                                className: "font-semibold text-foreground",
                                children: n.title
                            })]
                        }), S.jsx("div", {
                            className: "space-y-4",
                            children: n.skills.map(i => S.jsxs("div", {
                                children: [S.jsxs("div", {
                                    className: "flex justify-between text-sm mb-1",
                                    children: [S.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: i.name
                                    }), S.jsxs("span", {
                                        className: "font-mono text-primary text-xs",
                                        children: [i.level, "%"]
                                    })]
                                }), S.jsx("div", {
                                    className: "skill-bar",
                                    children: S.jsx(Ke.div, {
                                        className: "skill-bar-fill",
                                        initial: {
                                            width: 0
                                        },
                                        animate: t ? {
                                            width: `${i.level}%`
                                        } : {
                                            width: 0
                                        },
                                        transition: {
                                            duration: 1.2,
                                            delay: r * .15 + .3
                                        }
                                    })
                                })]
                            }, i.name))
                        })]
                    }, n.title))
                })]
            })
        })]
    })
}
  , Qg = [{
    title: "DigiforgeDynamics Official Website",
    description: "The flagship company website — showcasing services, brand identity, and digital offerings with a premium, modern design.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    category: "Web",
    link: "https://digiforgedynamics.netlify.app/"
}, {
    title: "Staff Training Portal",
    description: "An enterprise-grade web and mobile training platform enabling organizations to onboard, certify, and upskill staff at scale.",
    tech: ["React", "Firebase", "CSS"],
    category: "Web"
}, {
    title: "Emergency Assistance Web App",
    description: "A rapid-response platform connecting users with emergency services and critical resources in real-time.",
    tech: ["JavaScript", "Firebase", "Geolocation API"],
    category: "Web"
}, {
    title: "Smart Digital Clock",
    description: "A precision IoT device built with Arduino Nano, DS1302 RTC module, and TM1637 display for reliable timekeeping.",
    tech: ["Arduino", "C++", "DS1302", "TM1637"],
    category: "IoT"
}, {
    title: "Face Recognition System",
    description: "An intelligent recognition system leveraging Deep SORT optimization for real-time multi-face tracking and identification.",
    tech: ["Python", "OpenCV", "Deep SORT", "AI/ML"],
    category: "AI"
}, {
    title: "Personal JARVIS AI Assistant",
    description: "An offline voice-controlled AI assistant built with Vosk for speech recognition, capable of automation and intelligent responses.",
    tech: ["Python", "Vosk", "pyttsx3", "Automation"],
    category: "AI"
}, {
    title: "Digiforge Academy",
    description: "A scalable online learning platform offering structured courses for aspiring developers and tech professionals worldwide.",
    tech: ["React", "Firebase", "CSS"],
    category: "Web",
    inProgress: !0
}]
  , OL = ["All", "Web", "AI", "IoT"]
  , jL = () => {
    const [e,t] = w.useState("All")
      , n = w.useRef(null)
      , r = wo(n, {
        once: !0,
        margin: "-100px"
    })
      , i = e === "All" ? Qg : Qg.filter(s => s.category === e);
    return S.jsxs("section", {
        id: "projects",
        className: "relative",
        children: [S.jsx("div", {
            className: "glow-line"
        }), S.jsx("div", {
            className: "section-container",
            ref: n,
            children: S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: r ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-2 tracking-widest uppercase",
                    children: "Portfolio"
                }), S.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-6 gradient-text inline-block",
                    children: "Ventures & Projects"
                }), S.jsx("div", {
                    className: "flex gap-3 mb-10 flex-wrap",
                    children: OL.map(s => S.jsx("button", {
                        onClick: () => t(s),
                        className: `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${e === s ? "text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`,
                        style: e === s ? {
                            background: "linear-gradient(135deg, hsl(175 80% 50%), hsl(150 70% 45%))"
                        } : {},
                        children: s
                    }, s))
                }), S.jsx("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: i.map( (s, o) => S.jsxs(Ke.div, {
                        layout: !0,
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 20
                        },
                        transition: {
                            duration: .4,
                            delay: o * .08
                        },
                        className: "glass-hover p-6 rounded-xl group relative overflow-hidden",
                        children: [s.inProgress && S.jsx("span", {
                            className: "absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-primary-foreground",
                            style: {
                                background: "linear-gradient(135deg, hsl(175 80% 50%), hsl(150 70% 45%))"
                            },
                            children: "In Progress"
                        }), S.jsxs("div", {
                            className: "mb-4",
                            children: [S.jsx("h3", {
                                className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 pr-16",
                                children: s.title
                            }), S.jsx("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: s.description
                            })]
                        }), S.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: s.tech.map(a => S.jsx("span", {
                                className: "px-2 py-0.5 text-[11px] font-mono rounded-md bg-muted text-muted-foreground",
                                children: a
                            }, a))
                        }), S.jsxs("div", {
                            className: "flex gap-3 text-muted-foreground",
                            children: [S.jsx("a", {
                                href: "#",
                                className: "hover:text-primary transition-colors",
                                children: S.jsx(dx, {
                                    size: 16
                                })
                            }), s.link ? S.jsx("a", {
                                href: s.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-primary transition-colors",
                                children: S.jsx(Xc, {
                                    size: 16
                                })
                            }) : S.jsx("a", {
                                href: "#",
                                className: "hover:text-primary transition-colors",
                                children: S.jsx(Xc, {
                                    size: 16
                                })
                            })]
                        }), S.jsx(vP, {
                            className: "absolute bottom-4 right-4 w-5 h-5 text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        })]
                    }, s.title))
                })]
            })
        })]
    })
}
  , IL = [{
    title: "Founded DigiforgeDynamics",
    description: "Established and scaled a digital services company — building the brand, platform, and client-facing products from the ground up.",
    period: "2024 – Present"
}, {
    title: "Led AI Product Development",
    description: "Directed the engineering of an offline JARVIS-style voice assistant and a real-time face recognition pipeline with Deep SORT optimization.",
    period: "2024"
}, {
    title: "Launched Staff Training Portal",
    description: "Oversaw the design and deployment of a comprehensive web & mobile training platform used for organizational onboarding and upskilling.",
    period: "2024"
}, {
    title: "Emergency Response Platform",
    description: "Spearheaded the creation of a real-time emergency assistance web app connecting users with critical resources and services.",
    period: "2024"
}, {
    title: "Architecting Digiforge Academy",
    description: "Leading the development of a scalable online learning platform to educate the next generation of developers and tech professionals.",
    period: "2025 – Ongoing"
}]
  , VL = () => {
    const e = w.useRef(null)
      , t = wo(e, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "experience",
        className: "relative",
        children: [S.jsx("div", {
            className: "glow-line"
        }), S.jsx("div", {
            className: "section-container",
            ref: e,
            children: S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-2 tracking-widest uppercase",
                    children: "Leadership"
                }), S.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-10 gradient-text inline-block",
                    children: "Milestones & Impact"
                }), S.jsxs("div", {
                    className: "relative",
                    children: [S.jsx("div", {
                        className: "absolute left-[15px] top-0 bottom-0 w-[2px]",
                        style: {
                            background: "linear-gradient(180deg, hsl(175 80% 50%), hsl(150 70% 45%), transparent)"
                        }
                    }), S.jsx("div", {
                        className: "space-y-8",
                        children: IL.map( (n, r) => S.jsxs(Ke.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            animate: t ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: .5,
                                delay: r * .15
                            },
                            className: "flex gap-5 relative",
                            children: [S.jsx("div", {
                                className: "flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center mt-1 z-10 animate-pulse-glow",
                                children: S.jsx(DP, {
                                    className: "w-3.5 h-3.5 text-primary"
                                })
                            }), S.jsxs("div", {
                                className: "glass-hover p-5 rounded-xl flex-1",
                                children: [S.jsxs("div", {
                                    className: "flex items-start justify-between flex-wrap gap-2 mb-2",
                                    children: [S.jsx("h3", {
                                        className: "font-semibold text-foreground",
                                        children: n.title
                                    }), S.jsx("span", {
                                        className: "font-mono text-xs text-primary",
                                        children: n.period
                                    })]
                                }), S.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: n.description
                                })]
                            })]
                        }, n.title))
                    })]
                })]
            })
        })]
    })
}
  , FL = [{
    icon: dx,
    label: "GitHub",
    href: "https://github.com/JensonVivish"
}, {
    icon: CP,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jensonvivish"
}, {
    icon: RP,
    label: "X (Twitter)",
    href: "https://x.com/JensonVivish"
}, {
    icon: bP,
    label: "Email",
    href: "mailto:jensonvivish@gmail.com"
}, {
    icon: fx,
    label: "DigiforgeDynamics",
    href: "https://digiforgedynamics.netlify.app/"
}]
  , _L = () => {
    const e = w.useRef(null)
      , t = wo(e, {
        once: !0,
        margin: "-100px"
    })
      , [n,r] = w.useState({
        name: "",
        email: "",
        message: ""
    })
      , i = s => {
        s.preventDefault(),
        tb.success("Message sent! I'll get back to you soon."),
        r({
            name: "",
            email: "",
            message: ""
        })
    }
    ;
    return S.jsxs("section", {
        id: "contact",
        className: "relative",
        children: [S.jsx("div", {
            className: "glow-line"
        }), S.jsx("div", {
            className: "section-container",
            ref: e,
            children: S.jsxs(Ke.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsx("p", {
                    className: "font-mono text-sm text-primary mb-2 tracking-widest uppercase",
                    children: "Contact"
                }), S.jsx("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-10 gradient-text inline-block",
                    children: "Let's Connect"
                }), S.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-10",
                    children: [S.jsxs("form", {
                        onSubmit: i,
                        className: "space-y-5",
                        children: [S.jsx("div", {
                            children: S.jsx("input", {
                                type: "text",
                                placeholder: "Your Name",
                                value: n.name,
                                onChange: s => r({
                                    ...n,
                                    name: s.target.value
                                }),
                                required: !0,
                                className: "w-full glass px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                            })
                        }), S.jsx("div", {
                            children: S.jsx("input", {
                                type: "email",
                                placeholder: "Your Email",
                                value: n.email,
                                onChange: s => r({
                                    ...n,
                                    email: s.target.value
                                }),
                                required: !0,
                                className: "w-full glass px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                            })
                        }), S.jsx("div", {
                            children: S.jsx("textarea", {
                                placeholder: "Your Message",
                                rows: 5,
                                value: n.message,
                                onChange: s => r({
                                    ...n,
                                    message: s.target.value
                                }),
                                required: !0,
                                className: "w-full glass px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary bg-transparent resize-none"
                            })
                        }), S.jsxs("button", {
                            type: "submit",
                            className: "px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 text-primary-foreground transition-all duration-300 hover:scale-105",
                            style: {
                                background: "linear-gradient(135deg, hsl(175 80% 50%), hsl(150 70% 45%))"
                            },
                            children: [S.jsx(hx, {
                                size: 16
                            }), " Send Message"]
                        })]
                    }), S.jsxs("div", {
                        className: "flex flex-col justify-center",
                        children: [S.jsx("p", {
                            className: "text-muted-foreground mb-8 leading-relaxed",
                            children: "Whether it's a partnership opportunity, a collaboration, or a bold new idea — I'm always open to meaningful conversations. Let's build something extraordinary together."
                        }), S.jsx("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: FL.map(s => S.jsxs("a", {
                                href: s.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "glass-hover p-4 rounded-xl flex items-center gap-3 group",
                                children: [S.jsx(s.icon, {
                                    className: "w-5 h-5 text-primary"
                                }), S.jsx("span", {
                                    className: "text-sm text-muted-foreground group-hover:text-foreground transition-colors",
                                    children: s.label
                                })]
                            }, s.label))
                        })]
                    })]
                })]
            })
        })]
    })
}
  , zL = () => S.jsxs("footer", {
    className: "relative",
    children: [S.jsx("div", {
        className: "glow-line"
    }), S.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4",
        children: [S.jsxs("div", {
            className: "flex items-center gap-3",
            children: [S.jsx("span", {
                className: "font-bold text-sm gradient-text",
                children: "Jenson Vivish"
            }), S.jsx("span", {
                className: "text-muted-foreground text-xs",
                children: "·"
            }), S.jsx("a", {
                href: "https://digiforgedynamics.netlify.app/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs text-muted-foreground hover:text-primary transition-colors",
                children: "DigiforgeDynamics"
            })]
        }), S.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: "© 2026 Jenson Vivish. All rights reserved."
        })]
    })]
})
  , BL = () => {
    const e = w.useRef(null);
    return w.useEffect( () => {
        const t = e.current;
        if (!t)
            return;
        const n = t.getContext("2d");
        if (!n)
            return;
        let r;
        const i = []
          , s = () => {
            t.width = window.innerWidth,
            t.height = window.innerHeight
        }
        ;
        s(),
        window.addEventListener("resize", s);
        for (let a = 0; a < 60; a++)
            i.push({
                x: Math.random() * t.width,
                y: Math.random() * t.height,
                vx: (Math.random() - .5) * .3,
                vy: (Math.random() - .5) * .3,
                size: Math.random() * 2 + .5,
                opacity: Math.random() * .4 + .1
            });
        const o = () => {
            n.clearRect(0, 0, t.width, t.height),
            i.forEach(a => {
                a.x += a.vx,
                a.y += a.vy,
                (a.x < 0 || a.x > t.width) && (a.vx *= -1),
                (a.y < 0 || a.y > t.height) && (a.vy *= -1),
                n.beginPath(),
                n.arc(a.x, a.y, a.size, 0, Math.PI * 2),
                n.fillStyle = `hsla(175, 80%, 50%, ${a.opacity})`,
                n.fill()
            }
            );
            for (let a = 0; a < i.length; a++)
                for (let l = a + 1; l < i.length; l++) {
                    const u = i[a].x - i[l].x
                      , c = i[a].y - i[l].y
                      , d = Math.sqrt(u * u + c * c);
                    d < 150 && (n.beginPath(),
                    n.moveTo(i[a].x, i[a].y),
                    n.lineTo(i[l].x, i[l].y),
                    n.strokeStyle = `hsla(175, 80%, 50%, ${.06 * (1 - d / 150)})`,
                    n.lineWidth = .5,
                    n.stroke())
                }
            r = requestAnimationFrame(o)
        }
        ;
        return o(),
        () => {
            cancelAnimationFrame(r),
            window.removeEventListener("resize", s)
        }
    }
    , []),
    S.jsx("canvas", {
        ref: e,
        className: "fixed inset-0 pointer-events-none z-0"
    })
}
  , $L = () => S.jsxs("div", {
    className: "relative min-h-screen bg-background text-foreground overflow-x-hidden",
    children: [S.jsx(BL, {}), S.jsx(kL, {}), S.jsx(AL, {}), S.jsxs("main", {
        className: "relative z-10",
        children: [S.jsx(RL, {}), S.jsx(NL, {}), S.jsx(LL, {}), S.jsx(jL, {}), S.jsx(VL, {}), S.jsx(_L, {})]
    }), S.jsx(zL, {})]
})
  , UL = () => {
    const e = j0();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: S.jsxs("div", {
            className: "text-center",
            children: [S.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), S.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), S.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , WL = new YC
  , HL = () => S.jsx(XC, {
    client: WL,
    children: S.jsxs(J2, {
        children: [S.jsx(pk, {}), S.jsx(pb, {}), S.jsx(jT, {
            children: S.jsxs(DT, {
                children: [S.jsx($c, {
                    path: "/",
                    element: S.jsx($L, {})
                }), S.jsx($c, {
                    path: "*",
                    element: S.jsx(UL, {})
                })]
            })
        })]
    })
});
x0(document.getElementById("root")).render(S.jsx(HL, {}));
