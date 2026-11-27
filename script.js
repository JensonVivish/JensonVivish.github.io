var fc = e => {
    throw TypeError(e)
}
;
var ol = (e, t, n) => t.has(e) || fc("Cannot " + n);
var P = (e, t, n) => (ol(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , X = (e, t, n) => t.has(e) ? fc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (ol(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ne = (e, t, n) => (ol(e, t, "access private method"),
n);
var ui = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function mg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
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
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function pf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var hf = {
    exports: {}
}
  , ks = {}
  , mf = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zo = Symbol.for("react.element")
  , gg = Symbol.for("react.portal")
  , vg = Symbol.for("react.fragment")
  , yg = Symbol.for("react.strict_mode")
  , xg = Symbol.for("react.profiler")
  , wg = Symbol.for("react.provider")
  , Sg = Symbol.for("react.context")
  , Eg = Symbol.for("react.forward_ref")
  , Cg = Symbol.for("react.suspense")
  , bg = Symbol.for("react.memo")
  , kg = Symbol.for("react.lazy")
  , pc = Symbol.iterator;
function Ng(e) {
    return e === null || typeof e != "object" ? null : (e = pc && e[pc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var gf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , vf = Object.assign
  , yf = {};
function Qr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = yf,
    this.updater = n || gf
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function xf() {}
xf.prototype = Qr.prototype;
function Ya(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = yf,
    this.updater = n || gf
}
var qa = Ya.prototype = new xf;
qa.constructor = Ya;
vf(qa, Qr.prototype);
qa.isPureReactComponent = !0;
var hc = Array.isArray
  , wf = Object.prototype.hasOwnProperty
  , Xa = {
    current: null
}
  , Sf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ef(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            wf.call(t, r) && !Sf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Zo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Xa.current
    }
}
function Pg(e, t) {
    return {
        $$typeof: Zo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Za(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zo
}
function Tg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var mc = /\/+/g;
function il(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Tg("" + e.key) : t.toString(36)
}
function Mi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Zo:
            case gg:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + il(s, 0) : r,
        hc(o) ? (n = "",
        e != null && (n = e.replace(mc, "$&/") + "/"),
        Mi(o, t, n, "", function(u) {
            return u
        })) : o != null && (Za(o) && (o = Pg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(mc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    hc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + il(i, l);
            s += Mi(i, t, n, a, o)
        }
    else if (a = Ng(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + il(i, l++),
            s += Mi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ci(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Mi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function jg(e) {
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
var Ie = {
    current: null
}
  , _i = {
    transition: null
}
  , Rg = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: _i,
    ReactCurrentOwner: Xa
};
function Cf() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: ci,
    forEach: function(e, t, n) {
        ci(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ci(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ci(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Za(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = Qr;
G.Fragment = vg;
G.Profiler = xg;
G.PureComponent = Ya;
G.StrictMode = yg;
G.Suspense = Cg;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rg;
G.act = Cf;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Xa.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            wf.call(t, a) && !Sf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Zo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: Sg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: wg,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Ef;
G.createFactory = function(e) {
    var t = Ef.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: Eg,
        render: e
    }
}
;
G.isValidElement = Za;
G.lazy = function(e) {
    return {
        $$typeof: kg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: jg
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: bg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = _i.transition;
    _i.transition = {};
    try {
        e()
    } finally {
        _i.transition = t
    }
}
;
G.unstable_act = Cf;
G.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return Ie.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
}
;
G.useId = function() {
    return Ie.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return Ie.current.useRef(e)
}
;
G.useState = function(e) {
    return Ie.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return Ie.current.useTransition()
}
;
G.version = "18.3.1";
mf.exports = G;
var x = mf.exports;
const A = pf(x)
  , Ag = mg({
    __proto__: null,
    default: A
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Og = x
  , Mg = Symbol.for("react.element")
  , _g = Symbol.for("react.fragment")
  , Lg = Object.prototype.hasOwnProperty
  , Ig = Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Dg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function bf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Lg.call(t, r) && !Dg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Mg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ig.current
    }
}
ks.Fragment = _g;
ks.jsx = bf;
ks.jsxs = bf;
hf.exports = ks;
var p = hf.exports
  , kf = {
    exports: {}
}
  , et = {}
  , Nf = {
    exports: {}
}
  , Pf = {};
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
    function t(b, R) {
        var z = b.length;
        b.push(R);
        e: for (; 0 < z; ) {
            var L = z - 1 >>> 1
              , F = b[L];
            if (0 < o(F, R))
                b[L] = R,
                b[z] = F,
                z = L;
            else
                break e
        }
    }
    function n(b) {
        return b.length === 0 ? null : b[0]
    }
    function r(b) {
        if (b.length === 0)
            return null;
        var R = b[0]
          , z = b.pop();
        if (z !== R) {
            b[0] = z;
            e: for (var L = 0, F = b.length, Y = F >>> 1; L < Y; ) {
                var le = 2 * (L + 1) - 1
                  , We = b[le]
                  , Z = le + 1
                  , ut = b[Z];
                if (0 > o(We, z))
                    Z < F && 0 > o(ut, We) ? (b[L] = ut,
                    b[Z] = z,
                    L = Z) : (b[L] = We,
                    b[le] = z,
                    L = le);
                else if (Z < F && 0 > o(ut, z))
                    b[L] = ut,
                    b[Z] = z,
                    L = Z;
                else
                    break e
            }
        }
        return R
    }
    function o(b, R) {
        var z = b.sortIndex - R.sortIndex;
        return z !== 0 ? z : b.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , f = null
      , c = 3
      , y = !1
      , w = !1
      , g = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(b) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= b)
                r(u),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(u)
        }
    }
    function E(b) {
        if (g = !1,
        v(b),
        !w)
            if (n(a) !== null)
                w = !0,
                B(C);
            else {
                var R = n(u);
                R !== null && K(E, R.startTime - b)
            }
    }
    function C(b, R) {
        w = !1,
        g && (g = !1,
        m(T),
        T = -1),
        y = !0;
        var z = c;
        try {
            for (v(R),
            f = n(a); f !== null && (!(f.expirationTime > R) || b && !$()); ) {
                var L = f.callback;
                if (typeof L == "function") {
                    f.callback = null,
                    c = f.priorityLevel;
                    var F = L(f.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === n(a) && r(a),
                    v(R)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var Y = !0;
            else {
                var le = n(u);
                le !== null && K(E, le.startTime - R),
                Y = !1
            }
            return Y
        } finally {
            f = null,
            c = z,
            y = !1
        }
    }
    var k = !1
      , N = null
      , T = -1
      , I = 5
      , O = -1;
    function $() {
        return !(e.unstable_now() - O < I)
    }
    function D() {
        if (N !== null) {
            var b = e.unstable_now();
            O = b;
            var R = !0;
            try {
                R = N(!0, b)
            } finally {
                R ? W() : (k = !1,
                N = null)
            }
        } else
            k = !1
    }
    var W;
    if (typeof h == "function")
        W = function() {
            h(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , Q = M.port2;
        M.port1.onmessage = D,
        W = function() {
            Q.postMessage(null)
        }
    } else
        W = function() {
            S(D, 0)
        }
        ;
    function B(b) {
        N = b,
        k || (k = !0,
        W())
    }
    function K(b, R) {
        T = S(function() {
            b(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(b) {
        b.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || y || (w = !0,
        B(C))
    }
    ,
    e.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < b ? Math.floor(1e3 / b) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(b) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = c
        }
        var z = c;
        c = R;
        try {
            return b()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(b, R) {
        switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            b = 3
        }
        var z = c;
        c = b;
        try {
            return R()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(b, R, z) {
        var L = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? L + z : L) : z = L,
        b) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = z + F,
        b = {
            id: d++,
            callback: R,
            priorityLevel: b,
            startTime: z,
            expirationTime: F,
            sortIndex: -1
        },
        z > L ? (b.sortIndex = z,
        t(u, b),
        n(a) === null && b === n(u) && (g ? (m(T),
        T = -1) : g = !0,
        K(E, z - L))) : (b.sortIndex = F,
        t(a, b),
        w || y || (w = !0,
        B(C))),
        b
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(b) {
        var R = c;
        return function() {
            var z = c;
            c = R;
            try {
                return b.apply(this, arguments)
            } finally {
                c = z
            }
        }
    }
}
)(Pf);
Nf.exports = Pf;
var zg = Nf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg = x
  , Je = zg;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Tf = new Set
  , To = {};
function er(e, t) {
    Dr(e, t),
    Dr(e + "Capture", t)
}
function Dr(e, t) {
    for (To[e] = t,
    e = 0; e < t.length; e++)
        Tf.add(t[e])
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , zl = Object.prototype.hasOwnProperty
  , $g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , gc = {}
  , vc = {};
function Bg(e) {
    return zl.call(vc, e) ? !0 : zl.call(gc, e) ? !1 : $g.test(e) ? vc[e] = !0 : (gc[e] = !0,
    !1)
}
function Ug(e, t, n, r) {
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
function Vg(e, t, n, r) {
    if (t === null || typeof t > "u" || Ug(e, t, n, r))
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
function De(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new De(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new De(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new De(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new De(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new De(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new De(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new De(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new De(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new De(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ja = /[\-:]([a-z])/g;
function eu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ja, eu);
    Ce[t] = new De(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ja, eu);
    Ce[t] = new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ja, eu);
    Ce[t] = new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new De(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new De(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function tu(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vg(t, n, o, r) && (n = null),
    r || o === null ? Bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gt = Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , di = Symbol.for("react.element")
  , lr = Symbol.for("react.portal")
  , ar = Symbol.for("react.fragment")
  , nu = Symbol.for("react.strict_mode")
  , Fl = Symbol.for("react.profiler")
  , jf = Symbol.for("react.provider")
  , Rf = Symbol.for("react.context")
  , ru = Symbol.for("react.forward_ref")
  , $l = Symbol.for("react.suspense")
  , Bl = Symbol.for("react.suspense_list")
  , ou = Symbol.for("react.memo")
  , on = Symbol.for("react.lazy")
  , Af = Symbol.for("react.offscreen")
  , yc = Symbol.iterator;
function Jr(e) {
    return e === null || typeof e != "object" ? null : (e = yc && e[yc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, sl;
function uo(e) {
    if (sl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            sl = t && t[1] || ""
        }
    return `
` + sl + e
}
var ll = !1;
function al(e, t) {
    if (!e || ll)
        return "";
    ll = !0;
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
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        ll = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? uo(e) : ""
}
function Hg(e) {
    switch (e.tag) {
    case 5:
        return uo(e.type);
    case 16:
        return uo("Lazy");
    case 13:
        return uo("Suspense");
    case 19:
        return uo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = al(e.type, !1),
        e;
    case 11:
        return e = al(e.type.render, !1),
        e;
    case 1:
        return e = al(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ul(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ar:
        return "Fragment";
    case lr:
        return "Portal";
    case Fl:
        return "Profiler";
    case nu:
        return "StrictMode";
    case $l:
        return "Suspense";
    case Bl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Rf:
            return (e.displayName || "Context") + ".Consumer";
        case jf:
            return (e._context.displayName || "Context") + ".Provider";
        case ru:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ou:
            return t = e.displayName || null,
            t !== null ? t : Ul(e.type) || "Memo";
        case on:
            t = e._payload,
            e = e._init;
            try {
                return Ul(e(t))
            } catch {}
        }
    return null
}
function Wg(e) {
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
        return Ul(t);
    case 8:
        return t === nu ? "StrictMode" : "Mode";
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
function kn(e) {
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
function Of(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Qg(e) {
    var t = Of(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = Qg(e))
}
function Mf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Of(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Vl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function xc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = kn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function _f(e, t) {
    t = t.checked,
    t != null && tu(e, "checked", t, !1)
}
function Hl(e, t) {
    _f(e, t);
    var n = kn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wl(e, t.type, kn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wc(e, t, n) {
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
function Wl(e, t, n) {
    (t !== "number" || Gi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var co = Array.isArray;
function xr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + kn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Ql(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Sc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (co(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: kn(n)
    }
}
function Lf(e, t) {
    var n = kn(t.value)
      , r = kn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ec(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function If(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Kl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? If(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var pi, Df = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (pi = pi || document.createElement("div"),
        pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = pi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function jo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ho = {
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
  , Kg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function(e) {
    Kg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ho[t] = ho[e]
    })
});
function zf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ho.hasOwnProperty(e) && ho[e] ? ("" + t).trim() : t + "px"
}
function Ff(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = zf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Gg = ce({
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
function Gl(e, t) {
    if (t) {
        if (Gg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Yl(e, t) {
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
var ql = null;
function iu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Xl = null
  , wr = null
  , Sr = null;
function Cc(e) {
    if (e = ti(e)) {
        if (typeof Xl != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Rs(t),
        Xl(e.stateNode, e.type, t))
    }
}
function $f(e) {
    wr ? Sr ? Sr.push(e) : Sr = [e] : wr = e
}
function Bf() {
    if (wr) {
        var e = wr
          , t = Sr;
        if (Sr = wr = null,
        Cc(e),
        t)
            for (e = 0; e < t.length; e++)
                Cc(t[e])
    }
}
function Uf(e, t) {
    return e(t)
}
function Vf() {}
var ul = !1;
function Hf(e, t, n) {
    if (ul)
        return e(t, n);
    ul = !0;
    try {
        return Uf(e, t, n)
    } finally {
        ul = !1,
        (wr !== null || Sr !== null) && (Vf(),
        Bf())
    }
}
function Ro(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Rs(n);
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
        throw Error(j(231, t, typeof n));
    return n
}
var Zl = !1;
if (Ut)
    try {
        var eo = {};
        Object.defineProperty(eo, "passive", {
            get: function() {
                Zl = !0
            }
        }),
        window.addEventListener("test", eo, eo),
        window.removeEventListener("test", eo, eo)
    } catch {
        Zl = !1
    }
function Yg(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var mo = !1
  , Yi = null
  , qi = !1
  , Jl = null
  , qg = {
    onError: function(e) {
        mo = !0,
        Yi = e
    }
};
function Xg(e, t, n, r, o, i, s, l, a) {
    mo = !1,
    Yi = null,
    Yg.apply(qg, arguments)
}
function Zg(e, t, n, r, o, i, s, l, a) {
    if (Xg.apply(this, arguments),
    mo) {
        if (mo) {
            var u = Yi;
            mo = !1,
            Yi = null
        } else
            throw Error(j(198));
        qi || (qi = !0,
        Jl = u)
    }
}
function tr(e) {
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
function Wf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function bc(e) {
    if (tr(e) !== e)
        throw Error(j(188))
}
function Jg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = tr(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return bc(o),
                    e;
                if (i === r)
                    return bc(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function Qf(e) {
    return e = Jg(e),
    e !== null ? Kf(e) : null
}
function Kf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Kf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Gf = Je.unstable_scheduleCallback
  , kc = Je.unstable_cancelCallback
  , ev = Je.unstable_shouldYield
  , tv = Je.unstable_requestPaint
  , pe = Je.unstable_now
  , nv = Je.unstable_getCurrentPriorityLevel
  , su = Je.unstable_ImmediatePriority
  , Yf = Je.unstable_UserBlockingPriority
  , Xi = Je.unstable_NormalPriority
  , rv = Je.unstable_LowPriority
  , qf = Je.unstable_IdlePriority
  , Ns = null
  , Rt = null;
function ov(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
        try {
            Rt.onCommitFiberRoot(Ns, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var gt = Math.clz32 ? Math.clz32 : lv
  , iv = Math.log
  , sv = Math.LN2;
function lv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (iv(e) / sv | 0) | 0
}
var hi = 64
  , mi = 4194304;
function fo(e) {
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
function Zi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = fo(l) : (i &= s,
        i !== 0 && (r = fo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = fo(s) : i !== 0 && (r = fo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - gt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function av(e, t) {
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
function uv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - gt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = av(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function ea(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Xf() {
    var e = hi;
    return hi <<= 1,
    !(hi & 4194240) && (hi = 64),
    e
}
function cl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Jo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - gt(t),
    e[t] = n
}
function cv(e, t) {
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
        var o = 31 - gt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function lu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - gt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var J = 0;
function Zf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Jf, au, ep, tp, np, ta = !1, gi = [], vn = null, yn = null, xn = null, Ao = new Map, Oo = new Map, ln = [], dv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        vn = null;
        break;
    case "dragenter":
    case "dragleave":
        yn = null;
        break;
    case "mouseover":
    case "mouseout":
        xn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ao.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Oo.delete(t.pointerId)
    }
}
function to(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = ti(t),
    t !== null && au(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function fv(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return vn = to(vn, e, t, n, r, o),
        !0;
    case "dragenter":
        return yn = to(yn, e, t, n, r, o),
        !0;
    case "mouseover":
        return xn = to(xn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Ao.set(i, to(Ao.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Oo.set(i, to(Oo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function rp(e) {
    var t = Dn(e.target);
    if (t !== null) {
        var n = tr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Wf(n),
                t !== null) {
                    e.blockedOn = t,
                    np(e.priority, function() {
                        ep(n)
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
function Li(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ql = r,
            n.target.dispatchEvent(r),
            ql = null
        } else
            return t = ti(n),
            t !== null && au(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Pc(e, t, n) {
    Li(e) && n.delete(t)
}
function pv() {
    ta = !1,
    vn !== null && Li(vn) && (vn = null),
    yn !== null && Li(yn) && (yn = null),
    xn !== null && Li(xn) && (xn = null),
    Ao.forEach(Pc),
    Oo.forEach(Pc)
}
function no(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ta || (ta = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, pv)))
}
function Mo(e) {
    function t(o) {
        return no(o, e)
    }
    if (0 < gi.length) {
        no(gi[0], e);
        for (var n = 1; n < gi.length; n++) {
            var r = gi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (vn !== null && no(vn, e),
    yn !== null && no(yn, e),
    xn !== null && no(xn, e),
    Ao.forEach(t),
    Oo.forEach(t),
    n = 0; n < ln.length; n++)
        r = ln[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0],
    n.blockedOn === null); )
        rp(n),
        n.blockedOn === null && ln.shift()
}
var Er = Gt.ReactCurrentBatchConfig
  , Ji = !0;
function hv(e, t, n, r) {
    var o = J
      , i = Er.transition;
    Er.transition = null;
    try {
        J = 1,
        uu(e, t, n, r)
    } finally {
        J = o,
        Er.transition = i
    }
}
function mv(e, t, n, r) {
    var o = J
      , i = Er.transition;
    Er.transition = null;
    try {
        J = 4,
        uu(e, t, n, r)
    } finally {
        J = o,
        Er.transition = i
    }
}
function uu(e, t, n, r) {
    if (Ji) {
        var o = na(e, t, n, r);
        if (o === null)
            wl(e, t, r, es, n),
            Nc(e, r);
        else if (fv(o, e, t, n, r))
            r.stopPropagation();
        else if (Nc(e, r),
        t & 4 && -1 < dv.indexOf(e)) {
            for (; o !== null; ) {
                var i = ti(o);
                if (i !== null && Jf(i),
                i = na(e, t, n, r),
                i === null && wl(e, t, r, es, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            wl(e, t, r, null, n)
    }
}
var es = null;
function na(e, t, n, r) {
    if (es = null,
    e = iu(r),
    e = Dn(e),
    e !== null)
        if (t = tr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Wf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return es = e,
    null
}
function op(e) {
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
        switch (nv()) {
        case su:
            return 1;
        case Yf:
            return 4;
        case Xi:
        case rv:
            return 16;
        case qf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var hn = null
  , cu = null
  , Ii = null;
function ip() {
    if (Ii)
        return Ii;
    var e, t = cu, n = t.length, r, o = "value"in hn ? hn.value : hn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Ii = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Di(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function vi() {
    return !0
}
function Tc() {
    return !1
}
function tt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vi : Tc,
        this.isPropagationStopped = Tc,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = vi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = vi)
        },
        persist: function() {},
        isPersistent: vi
    }),
    t
}
var Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, du = tt(Kr), ei = ce({}, Kr, {
    view: 0,
    detail: 0
}), gv = tt(ei), dl, fl, ro, Ps = ce({}, ei, {
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
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ro && (ro && e.type === "mousemove" ? (dl = e.screenX - ro.screenX,
        fl = e.screenY - ro.screenY) : fl = dl = 0,
        ro = e),
        dl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : fl
    }
}), jc = tt(Ps), vv = ce({}, Ps, {
    dataTransfer: 0
}), yv = tt(vv), xv = ce({}, ei, {
    relatedTarget: 0
}), pl = tt(xv), wv = ce({}, Kr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Sv = tt(wv), Ev = ce({}, Kr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Cv = tt(Ev), bv = ce({}, Kr, {
    data: 0
}), Rc = tt(bv), kv = {
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
}, Nv = {
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
}, Pv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Tv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Pv[e]) ? !!t[e] : !1
}
function fu() {
    return Tv
}
var jv = ce({}, ei, {
    key: function(e) {
        if (e.key) {
            var t = kv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Di(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(e) {
        return e.type === "keypress" ? Di(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Rv = tt(jv)
  , Av = ce({}, Ps, {
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
  , Ac = tt(Av)
  , Ov = ce({}, ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
})
  , Mv = tt(Ov)
  , _v = ce({}, Kr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Lv = tt(_v)
  , Iv = ce({}, Ps, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Dv = tt(Iv)
  , zv = [9, 13, 27, 32]
  , pu = Ut && "CompositionEvent"in window
  , go = null;
Ut && "documentMode"in document && (go = document.documentMode);
var Fv = Ut && "TextEvent"in window && !go
  , sp = Ut && (!pu || go && 8 < go && 11 >= go)
  , Oc = " "
  , Mc = !1;
function lp(e, t) {
    switch (e) {
    case "keyup":
        return zv.indexOf(t.keyCode) !== -1;
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
function ap(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ur = !1;
function $v(e, t) {
    switch (e) {
    case "compositionend":
        return ap(t);
    case "keypress":
        return t.which !== 32 ? null : (Mc = !0,
        Oc);
    case "textInput":
        return e = t.data,
        e === Oc && Mc ? null : e;
    default:
        return null
    }
}
function Bv(e, t) {
    if (ur)
        return e === "compositionend" || !pu && lp(e, t) ? (e = ip(),
        Ii = cu = hn = null,
        ur = !1,
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
        return sp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Uv = {
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
function _c(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uv[e.type] : t === "textarea"
}
function up(e, t, n, r) {
    $f(r),
    t = ts(t, "onChange"),
    0 < t.length && (n = new du("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vo = null
  , _o = null;
function Vv(e) {
    wp(e, 0)
}
function Ts(e) {
    var t = fr(e);
    if (Mf(t))
        return e
}
function Hv(e, t) {
    if (e === "change")
        return t
}
var cp = !1;
if (Ut) {
    var hl;
    if (Ut) {
        var ml = "oninput"in document;
        if (!ml) {
            var Lc = document.createElement("div");
            Lc.setAttribute("oninput", "return;"),
            ml = typeof Lc.oninput == "function"
        }
        hl = ml
    } else
        hl = !1;
    cp = hl && (!document.documentMode || 9 < document.documentMode)
}
function Ic() {
    vo && (vo.detachEvent("onpropertychange", dp),
    _o = vo = null)
}
function dp(e) {
    if (e.propertyName === "value" && Ts(_o)) {
        var t = [];
        up(t, _o, e, iu(e)),
        Hf(Vv, t)
    }
}
function Wv(e, t, n) {
    e === "focusin" ? (Ic(),
    vo = t,
    _o = n,
    vo.attachEvent("onpropertychange", dp)) : e === "focusout" && Ic()
}
function Qv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ts(_o)
}
function Kv(e, t) {
    if (e === "click")
        return Ts(t)
}
function Gv(e, t) {
    if (e === "input" || e === "change")
        return Ts(t)
}
function Yv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : Yv;
function Lo(e, t) {
    if (yt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!zl.call(t, o) || !yt(e[o], t[o]))
            return !1
    }
    return !0
}
function Dc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function zc(e, t) {
    var n = Dc(e);
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
        n = Dc(n)
    }
}
function fp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function pp() {
    for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Gi(e.document)
    }
    return t
}
function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function qv(e) {
    var t = pp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fp(n.ownerDocument.documentElement, n)) {
        if (r !== null && hu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = zc(n, i);
                var s = zc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
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
var Xv = Ut && "documentMode"in document && 11 >= document.documentMode
  , cr = null
  , ra = null
  , yo = null
  , oa = !1;
function Fc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oa || cr == null || cr !== Gi(r) || (r = cr,
    "selectionStart"in r && hu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    yo && Lo(yo, r) || (yo = r,
    r = ts(ra, "onSelect"),
    0 < r.length && (t = new du("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = cr)))
}
function yi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var dr = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd")
}
  , gl = {}
  , hp = {};
Ut && (hp = document.createElement("div").style,
"AnimationEvent"in window || (delete dr.animationend.animation,
delete dr.animationiteration.animation,
delete dr.animationstart.animation),
"TransitionEvent"in window || delete dr.transitionend.transition);
function js(e) {
    if (gl[e])
        return gl[e];
    if (!dr[e])
        return e;
    var t = dr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in hp)
            return gl[e] = t[n];
    return e
}
var mp = js("animationend")
  , gp = js("animationiteration")
  , vp = js("animationstart")
  , yp = js("transitionend")
  , xp = new Map
  , $c = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function An(e, t) {
    xp.set(e, t),
    er(t, [e])
}
for (var vl = 0; vl < $c.length; vl++) {
    var yl = $c[vl]
      , Zv = yl.toLowerCase()
      , Jv = yl[0].toUpperCase() + yl.slice(1);
    An(Zv, "on" + Jv)
}
An(mp, "onAnimationEnd");
An(gp, "onAnimationIteration");
An(vp, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(yp, "onTransitionEnd");
Dr("onMouseEnter", ["mouseout", "mouseover"]);
Dr("onMouseLeave", ["mouseout", "mouseover"]);
Dr("onPointerEnter", ["pointerout", "pointerover"]);
Dr("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
function Bc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Zg(r, t, void 0, e),
    e.currentTarget = null
}
function wp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Bc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Bc(o, l, u),
                    i = a
                }
        }
    }
    if (qi)
        throw e = Jl,
        qi = !1,
        Jl = null,
        e
}
function oe(e, t) {
    var n = t[ua];
    n === void 0 && (n = t[ua] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Sp(t, e, 2, !1),
    n.add(r))
}
function xl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Sp(n, e, r, t)
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);
function Io(e) {
    if (!e[xi]) {
        e[xi] = !0,
        Tf.forEach(function(n) {
            n !== "selectionchange" && (ey.has(n) || xl(n, !1, e),
            xl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xi] || (t[xi] = !0,
        xl("selectionchange", !1, t))
    }
}
function Sp(e, t, n, r) {
    switch (op(t)) {
    case 1:
        var o = hv;
        break;
    case 4:
        o = mv;
        break;
    default:
        o = uu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function wl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Dn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Hf(function() {
        var u = i
          , d = iu(n)
          , f = [];
        e: {
            var c = xp.get(e);
            if (c !== void 0) {
                var y = du
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Di(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Rv;
                    break;
                case "focusin":
                    w = "focus",
                    y = pl;
                    break;
                case "focusout":
                    w = "blur",
                    y = pl;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = pl;
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
                    y = jc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = yv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Mv;
                    break;
                case mp:
                case gp:
                case vp:
                    y = Sv;
                    break;
                case yp:
                    y = Lv;
                    break;
                case "scroll":
                    y = gv;
                    break;
                case "wheel":
                    y = Dv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Cv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Ac
                }
                var g = (t & 4) !== 0
                  , S = !g && e === "scroll"
                  , m = g ? c !== null ? c + "Capture" : null : c;
                g = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var E = v.stateNode;
                    if (v.tag === 5 && E !== null && (v = E,
                    m !== null && (E = Ro(h, m),
                    E != null && g.push(Do(h, E, v)))),
                    S)
                        break;
                    h = h.return
                }
                0 < g.length && (c = new y(c,w,null,n,d),
                f.push({
                    event: c,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                c && n !== ql && (w = n.relatedTarget || n.fromElement) && (Dn(w) || w[Vt]))
                    break e;
                if ((y || c) && (c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window,
                y ? (w = n.relatedTarget || n.toElement,
                y = u,
                w = w ? Dn(w) : null,
                w !== null && (S = tr(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null,
                w = u),
                y !== w)) {
                    if (g = jc,
                    E = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Ac,
                    E = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    S = y == null ? c : fr(y),
                    v = w == null ? c : fr(w),
                    c = new g(E,h + "leave",y,n,d),
                    c.target = S,
                    c.relatedTarget = v,
                    E = null,
                    Dn(d) === u && (g = new g(m,h + "enter",w,n,d),
                    g.target = v,
                    g.relatedTarget = S,
                    E = g),
                    S = E,
                    y && w)
                        t: {
                            for (g = y,
                            m = w,
                            h = 0,
                            v = g; v; v = sr(v))
                                h++;
                            for (v = 0,
                            E = m; E; E = sr(E))
                                v++;
                            for (; 0 < h - v; )
                                g = sr(g),
                                h--;
                            for (; 0 < v - h; )
                                m = sr(m),
                                v--;
                            for (; h--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = sr(g),
                                m = sr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    y !== null && Uc(f, c, y, g, !1),
                    w !== null && S !== null && Uc(f, S, w, g, !0)
                }
            }
            e: {
                if (c = u ? fr(u) : window,
                y = c.nodeName && c.nodeName.toLowerCase(),
                y === "select" || y === "input" && c.type === "file")
                    var C = Hv;
                else if (_c(c))
                    if (cp)
                        C = Gv;
                    else {
                        C = Qv;
                        var k = Wv
                    }
                else
                    (y = c.nodeName) && y.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = Kv);
                if (C && (C = C(e, u))) {
                    up(f, C, n, d);
                    break e
                }
                k && k(e, c, u),
                e === "focusout" && (k = c._wrapperState) && k.controlled && c.type === "number" && Wl(c, "number", c.value)
            }
            switch (k = u ? fr(u) : window,
            e) {
            case "focusin":
                (_c(k) || k.contentEditable === "true") && (cr = k,
                ra = u,
                yo = null);
                break;
            case "focusout":
                yo = ra = cr = null;
                break;
            case "mousedown":
                oa = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                oa = !1,
                Fc(f, n, d);
                break;
            case "selectionchange":
                if (Xv)
                    break;
            case "keydown":
            case "keyup":
                Fc(f, n, d)
            }
            var N;
            if (pu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                ur ? lp(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (sp && n.locale !== "ko" && (ur || T !== "onCompositionStart" ? T === "onCompositionEnd" && ur && (N = ip()) : (hn = d,
            cu = "value"in hn ? hn.value : hn.textContent,
            ur = !0)),
            k = ts(u, T),
            0 < k.length && (T = new Rc(T,e,null,n,d),
            f.push({
                event: T,
                listeners: k
            }),
            N ? T.data = N : (N = ap(n),
            N !== null && (T.data = N)))),
            (N = Fv ? $v(e, n) : Bv(e, n)) && (u = ts(u, "onBeforeInput"),
            0 < u.length && (d = new Rc("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = N))
        }
        wp(f, t)
    })
}
function Do(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ts(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Ro(e, n),
        i != null && r.unshift(Do(e, i, o)),
        i = Ro(e, t),
        i != null && r.push(Do(e, i, o))),
        e = e.return
    }
    return r
}
function sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Uc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Ro(n, i),
        a != null && s.unshift(Do(n, a, l))) : o || (a = Ro(n, i),
        a != null && s.push(Do(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var ty = /\r\n?/g
  , ny = /\u0000|\uFFFD/g;
function Vc(e) {
    return (typeof e == "string" ? e : "" + e).replace(ty, `
`).replace(ny, "")
}
function wi(e, t, n) {
    if (t = Vc(t),
    Vc(e) !== t && n)
        throw Error(j(425))
}
function ns() {}
var ia = null
  , sa = null;
function la(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var aa = typeof setTimeout == "function" ? setTimeout : void 0
  , ry = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hc = typeof Promise == "function" ? Promise : void 0
  , oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hc < "u" ? function(e) {
    return Hc.resolve(null).then(e).catch(iy)
}
: aa;
function iy(e) {
    setTimeout(function() {
        throw e
    })
}
function Sl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Mo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Mo(t)
}
function wn(e) {
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
function Wc(e) {
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
var Gr = Math.random().toString(36).slice(2)
  , jt = "__reactFiber$" + Gr
  , zo = "__reactProps$" + Gr
  , Vt = "__reactContainer$" + Gr
  , ua = "__reactEvents$" + Gr
  , sy = "__reactListeners$" + Gr
  , ly = "__reactHandles$" + Gr;
function Dn(e) {
    var t = e[jt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Vt] || n[jt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Wc(e); e !== null; ) {
                    if (n = e[jt])
                        return n;
                    e = Wc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ti(e) {
    return e = e[jt] || e[Vt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Rs(e) {
    return e[zo] || null
}
var ca = []
  , pr = -1;
function On(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > pr || (e.current = ca[pr],
    ca[pr] = null,
    pr--)
}
function te(e, t) {
    pr++,
    ca[pr] = e.current,
    e.current = t
}
var Nn = {}
  , Ae = On(Nn)
  , $e = On(!1)
  , Kn = Nn;
function zr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Be(e) {
    return e = e.childContextTypes,
    e != null
}
function rs() {
    ie($e),
    ie(Ae)
}
function Qc(e, t, n) {
    if (Ae.current !== Nn)
        throw Error(j(168));
    te(Ae, t),
    te($e, n)
}
function Ep(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, Wg(e) || "Unknown", o));
    return ce({}, n, r)
}
function os(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn,
    Kn = Ae.current,
    te(Ae, e),
    te($e, $e.current),
    !0
}
function Kc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Ep(e, t, Kn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie($e),
    ie(Ae),
    te(Ae, e)) : ie($e),
    te($e, n)
}
var zt = null
  , As = !1
  , El = !1;
function Cp(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function ay(e) {
    As = !0,
    Cp(e)
}
function Mn() {
    if (!El && zt !== null) {
        El = !0;
        var e = 0
          , t = J;
        try {
            var n = zt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            As = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            Gf(su, Mn),
            o
        } finally {
            J = t,
            El = !1
        }
    }
    return null
}
var hr = []
  , mr = 0
  , is = null
  , ss = 0
  , rt = []
  , ot = 0
  , Gn = null
  , Ft = 1
  , $t = "";
function Ln(e, t) {
    hr[mr++] = ss,
    hr[mr++] = is,
    is = e,
    ss = t
}
function bp(e, t, n) {
    rt[ot++] = Ft,
    rt[ot++] = $t,
    rt[ot++] = Gn,
    Gn = e;
    var r = Ft;
    e = $t;
    var o = 32 - gt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - gt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Ft = 1 << 32 - gt(t) + o | n << o | r,
        $t = i + e
    } else
        Ft = 1 << i | n << o | r,
        $t = e
}
function mu(e) {
    e.return !== null && (Ln(e, 1),
    bp(e, 1, 0))
}
function gu(e) {
    for (; e === is; )
        is = hr[--mr],
        hr[mr] = null,
        ss = hr[--mr],
        hr[mr] = null;
    for (; e === Gn; )
        Gn = rt[--ot],
        rt[ot] = null,
        $t = rt[--ot],
        rt[ot] = null,
        Ft = rt[--ot],
        rt[ot] = null
}
var Xe = null
  , qe = null
  , se = !1
  , mt = null;
function kp(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Gc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = wn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Gn !== null ? {
            id: Ft,
            overflow: $t
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function da(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fa(e) {
    if (se) {
        var t = qe;
        if (t) {
            var n = t;
            if (!Gc(e, t)) {
                if (da(e))
                    throw Error(j(418));
                t = wn(n.nextSibling);
                var r = Xe;
                t && Gc(e, t) ? kp(r, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Xe = e)
            }
        } else {
            if (da(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Xe = e
        }
    }
}
function Yc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Si(e) {
    if (e !== Xe)
        return !1;
    if (!se)
        return Yc(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !la(e.type, e.memoizedProps)),
    t && (t = qe)) {
        if (da(e))
            throw Np(),
            Error(j(418));
        for (; t; )
            kp(e, t),
            t = wn(t.nextSibling)
    }
    if (Yc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = wn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else
        qe = Xe ? wn(e.stateNode.nextSibling) : null;
    return !0
}
function Np() {
    for (var e = qe; e; )
        e = wn(e.nextSibling)
}
function Fr() {
    qe = Xe = null,
    se = !1
}
function vu(e) {
    mt === null ? mt = [e] : mt.push(e)
}
var uy = Gt.ReactCurrentBatchConfig;
function oo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Ei(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function qc(e) {
    var t = e._init;
    return t(e._payload)
}
function Pp(e) {
    function t(m, h) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [h],
            m.flags |= 16) : v.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = bn(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < h ? (m.flags |= 2,
        h) : v) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, v, E) {
        return h === null || h.tag !== 6 ? (h = jl(v, m.mode, E),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function a(m, h, v, E) {
        var C = v.type;
        return C === ar ? d(m, h, v.props.children, E, v.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === on && qc(C) === h.type) ? (E = o(h, v.props),
        E.ref = oo(m, h, v),
        E.return = m,
        E) : (E = Hi(v.type, v.key, v.props, null, m.mode, E),
        E.ref = oo(m, h, v),
        E.return = m,
        E)
    }
    function u(m, h, v, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Rl(v, m.mode, E),
        h.return = m,
        h) : (h = o(h, v.children || []),
        h.return = m,
        h)
    }
    function d(m, h, v, E, C) {
        return h === null || h.tag !== 7 ? (h = Wn(v, m.mode, E, C),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function f(m, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = jl("" + h, m.mode, v),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case di:
                return v = Hi(h.type, h.key, h.props, null, m.mode, v),
                v.ref = oo(m, null, h),
                v.return = m,
                v;
            case lr:
                return h = Rl(h, m.mode, v),
                h.return = m,
                h;
            case on:
                var E = h._init;
                return f(m, E(h._payload), v)
            }
            if (co(h) || Jr(h))
                return h = Wn(h, m.mode, v, null),
                h.return = m,
                h;
            Ei(m, h)
        }
        return null
    }
    function c(m, h, v, E) {
        var C = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : l(m, h, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case di:
                return v.key === C ? a(m, h, v, E) : null;
            case lr:
                return v.key === C ? u(m, h, v, E) : null;
            case on:
                return C = v._init,
                c(m, h, C(v._payload), E)
            }
            if (co(v) || Jr(v))
                return C !== null ? null : d(m, h, v, E, null);
            Ei(m, v)
        }
        return null
    }
    function y(m, h, v, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return m = m.get(v) || null,
            l(h, m, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case di:
                return m = m.get(E.key === null ? v : E.key) || null,
                a(h, m, E, C);
            case lr:
                return m = m.get(E.key === null ? v : E.key) || null,
                u(h, m, E, C);
            case on:
                var k = E._init;
                return y(m, h, v, k(E._payload), C)
            }
            if (co(E) || Jr(E))
                return m = m.get(v) || null,
                d(h, m, E, C, null);
            Ei(h, E)
        }
        return null
    }
    function w(m, h, v, E) {
        for (var C = null, k = null, N = h, T = h = 0, I = null; N !== null && T < v.length; T++) {
            N.index > T ? (I = N,
            N = null) : I = N.sibling;
            var O = c(m, N, v[T], E);
            if (O === null) {
                N === null && (N = I);
                break
            }
            e && N && O.alternate === null && t(m, N),
            h = i(O, h, T),
            k === null ? C = O : k.sibling = O,
            k = O,
            N = I
        }
        if (T === v.length)
            return n(m, N),
            se && Ln(m, T),
            C;
        if (N === null) {
            for (; T < v.length; T++)
                N = f(m, v[T], E),
                N !== null && (h = i(N, h, T),
                k === null ? C = N : k.sibling = N,
                k = N);
            return se && Ln(m, T),
            C
        }
        for (N = r(m, N); T < v.length; T++)
            I = y(N, m, T, v[T], E),
            I !== null && (e && I.alternate !== null && N.delete(I.key === null ? T : I.key),
            h = i(I, h, T),
            k === null ? C = I : k.sibling = I,
            k = I);
        return e && N.forEach(function($) {
            return t(m, $)
        }),
        se && Ln(m, T),
        C
    }
    function g(m, h, v, E) {
        var C = Jr(v);
        if (typeof C != "function")
            throw Error(j(150));
        if (v = C.call(v),
        v == null)
            throw Error(j(151));
        for (var k = C = null, N = h, T = h = 0, I = null, O = v.next(); N !== null && !O.done; T++,
        O = v.next()) {
            N.index > T ? (I = N,
            N = null) : I = N.sibling;
            var $ = c(m, N, O.value, E);
            if ($ === null) {
                N === null && (N = I);
                break
            }
            e && N && $.alternate === null && t(m, N),
            h = i($, h, T),
            k === null ? C = $ : k.sibling = $,
            k = $,
            N = I
        }
        if (O.done)
            return n(m, N),
            se && Ln(m, T),
            C;
        if (N === null) {
            for (; !O.done; T++,
            O = v.next())
                O = f(m, O.value, E),
                O !== null && (h = i(O, h, T),
                k === null ? C = O : k.sibling = O,
                k = O);
            return se && Ln(m, T),
            C
        }
        for (N = r(m, N); !O.done; T++,
        O = v.next())
            O = y(N, m, T, O.value, E),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? T : O.key),
            h = i(O, h, T),
            k === null ? C = O : k.sibling = O,
            k = O);
        return e && N.forEach(function(D) {
            return t(m, D)
        }),
        se && Ln(m, T),
        C
    }
    function S(m, h, v, E) {
        if (typeof v == "object" && v !== null && v.type === ar && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case di:
                e: {
                    for (var C = v.key, k = h; k !== null; ) {
                        if (k.key === C) {
                            if (C = v.type,
                            C === ar) {
                                if (k.tag === 7) {
                                    n(m, k.sibling),
                                    h = o(k, v.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === on && qc(C) === k.type) {
                                n(m, k.sibling),
                                h = o(k, v.props),
                                h.ref = oo(m, k, v),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    v.type === ar ? (h = Wn(v.props.children, m.mode, E, v.key),
                    h.return = m,
                    m = h) : (E = Hi(v.type, v.key, v.props, null, m.mode, E),
                    E.ref = oo(m, h, v),
                    E.return = m,
                    m = E)
                }
                return s(m);
            case lr:
                e: {
                    for (k = v.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(m, h.sibling),
                                h = o(h, v.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Rl(v, m.mode, E),
                    h.return = m,
                    m = h
                }
                return s(m);
            case on:
                return k = v._init,
                S(m, h, k(v._payload), E)
            }
            if (co(v))
                return w(m, h, v, E);
            if (Jr(v))
                return g(m, h, v, E);
            Ei(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, v),
        h.return = m,
        m = h) : (n(m, h),
        h = jl(v, m.mode, E),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return S
}
var $r = Pp(!0)
  , Tp = Pp(!1)
  , ls = On(null)
  , as = null
  , gr = null
  , yu = null;
function xu() {
    yu = gr = as = null
}
function wu(e) {
    var t = ls.current;
    ie(ls),
    e._currentValue = t
}
function pa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Cr(e, t) {
    as = e,
    yu = gr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (yu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        gr === null) {
            if (as === null)
                throw Error(j(308));
            gr = e,
            as.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            gr = gr.next = e;
    return t
}
var zn = null;
function Su(e) {
    zn === null ? zn = [e] : zn.push(e)
}
function jp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Su(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Ht(e, r)
}
function Ht(e, t) {
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
var sn = !1;
function Eu(e) {
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
function Rp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Bt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Ht(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Su(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Ht(e, n)
}
function zi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        lu(e, n)
    }
}
function Xc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
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
function us(e, t, n, r) {
    var o = e.updateQueue;
    sn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        d = u = a = null,
        l = i;
        do {
            var c = l.lane
              , y = l.eventTime;
            if ((r & c) === c) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                      , g = l;
                    switch (c = t,
                    y = n,
                    g.tag) {
                    case 1:
                        if (w = g.payload,
                        typeof w == "function") {
                            f = w.call(y, f, c);
                            break e
                        }
                        f = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = g.payload,
                        c = typeof w == "function" ? w.call(y, f, c) : w,
                        c == null)
                            break e;
                        f = ce({}, f, c);
                        break e;
                    case 2:
                        sn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                c = o.effects,
                c === null ? o.effects = [l] : c.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: c,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = y,
                a = f) : d = d.next = y,
                s |= c;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                c = l,
                l = c.next,
                c.next = null,
                o.lastBaseUpdate = c,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        qn |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Zc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var ni = {}
  , At = On(ni)
  , Fo = On(ni)
  , $o = On(ni);
function Fn(e) {
    if (e === ni)
        throw Error(j(174));
    return e
}
function Cu(e, t) {
    switch (te($o, t),
    te(Fo, e),
    te(At, ni),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Kl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Kl(t, e)
    }
    ie(At),
    te(At, t)
}
function Br() {
    ie(At),
    ie(Fo),
    ie($o)
}
function Ap(e) {
    Fn($o.current);
    var t = Fn(At.current)
      , n = Kl(t, e.type);
    t !== n && (te(Fo, e),
    te(At, n))
}
function bu(e) {
    Fo.current === e && (ie(At),
    ie(Fo))
}
var ae = On(0);
function cs(e) {
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
var Cl = [];
function ku() {
    for (var e = 0; e < Cl.length; e++)
        Cl[e]._workInProgressVersionPrimary = null;
    Cl.length = 0
}
var Fi = Gt.ReactCurrentDispatcher
  , bl = Gt.ReactCurrentBatchConfig
  , Yn = 0
  , ue = null
  , me = null
  , ye = null
  , ds = !1
  , xo = !1
  , Bo = 0
  , cy = 0;
function Pe() {
    throw Error(j(321))
}
function Nu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n]))
            return !1;
    return !0
}
function Pu(e, t, n, r, o, i) {
    if (Yn = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Fi.current = e === null || e.memoizedState === null ? hy : my,
    e = n(r, o),
    xo) {
        i = 0;
        do {
            if (xo = !1,
            Bo = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            ye = me = null,
            t.updateQueue = null,
            Fi.current = gy,
            e = n(r, o)
        } while (xo)
    }
    if (Fi.current = fs,
    t = me !== null && me.next !== null,
    Yn = 0,
    ye = me = ue = null,
    ds = !1,
    t)
        throw Error(j(300));
    return e
}
function Tu() {
    var e = Bo !== 0;
    return Bo = 0,
    e
}
function kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e,
    ye
}
function at() {
    if (me === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = me.next;
    var t = ye === null ? ue.memoizedState : ye.next;
    if (t !== null)
        ye = t,
        me = e;
    else {
        if (e === null)
            throw Error(j(310));
        me = e,
        e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        },
        ye === null ? ue.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}
function Uo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function kl(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = me
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var d = u.lane;
            if ((Yn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                ue.lanes |= d,
                qn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        yt(r, t.memoizedState) || (Fe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            qn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Nl(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        yt(i, t.memoizedState) || (Fe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Op() {}
function Mp(e, t) {
    var n = ue
      , r = at()
      , o = t()
      , i = !yt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Fe = !0),
    r = r.queue,
    ju(Ip.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Vo(9, Lp.bind(null, n, r, o, t), void 0, null),
        xe === null)
            throw Error(j(349));
        Yn & 30 || _p(n, t, o)
    }
    return o
}
function _p(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Lp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Dp(t) && zp(e)
}
function Ip(e, t, n) {
    return n(function() {
        Dp(t) && zp(e)
    })
}
function Dp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}
function zp(e) {
    var t = Ht(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function Jc(e) {
    var t = kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Uo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = py.bind(null, ue, e),
    [t.memoizedState, e]
}
function Vo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Fp() {
    return at().memoizedState
}
function $i(e, t, n, r) {
    var o = kt();
    ue.flags |= e,
    o.memoizedState = Vo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Os(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
        var s = me.memoizedState;
        if (i = s.destroy,
        r !== null && Nu(r, s.deps)) {
            o.memoizedState = Vo(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = Vo(1 | t, n, i, r)
}
function ed(e, t) {
    return $i(8390656, 8, e, t)
}
function ju(e, t) {
    return Os(2048, 8, e, t)
}
function $p(e, t) {
    return Os(4, 2, e, t)
}
function Bp(e, t) {
    return Os(4, 4, e, t)
}
function Up(e, t) {
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
function Vp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Os(4, 4, Up.bind(null, t, e), n)
}
function Ru() {}
function Hp(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Wp(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Qp(e, t, n) {
    return Yn & 21 ? (yt(n, t) || (n = Xf(),
    ue.lanes |= n,
    qn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Fe = !0),
    e.memoizedState = n)
}
function dy(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = bl.transition;
    bl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        bl.transition = r
    }
}
function Kp() {
    return at().memoizedState
}
function fy(e, t, n) {
    var r = Cn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Gp(e))
        Yp(t, n);
    else if (n = jp(e, t, n, r),
    n !== null) {
        var o = Le();
        vt(n, e, r, o),
        qp(n, t, r)
    }
}
function py(e, t, n) {
    var r = Cn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Gp(e))
        Yp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                yt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    Su(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = jp(e, t, o, r),
        n !== null && (o = Le(),
        vt(n, e, r, o),
        qp(n, t, r))
    }
}
function Gp(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function Yp(e, t) {
    xo = ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function qp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        lu(e, n)
    }
}
var fs = {
    readContext: lt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1
}
  , hy = {
    readContext: lt,
    useCallback: function(e, t) {
        return kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: ed,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $i(4194308, 4, Up.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = kt();
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
        e = e.dispatch = fy.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Jc,
    useDebugValue: Ru,
    useDeferredValue: function(e) {
        return kt().memoizedState = e
    },
    useTransition: function() {
        var e = Jc(!1)
          , t = e[0];
        return e = dy.bind(null, e[1]),
        kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = kt();
        if (se) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            xe === null)
                throw Error(j(349));
            Yn & 30 || _p(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        ed(Ip.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Vo(9, Lp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = kt()
          , t = xe.identifierPrefix;
        if (se) {
            var n = $t
              , r = Ft;
            n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Bo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = cy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , my = {
    readContext: lt,
    useCallback: Hp,
    useContext: lt,
    useEffect: ju,
    useImperativeHandle: Vp,
    useInsertionEffect: $p,
    useLayoutEffect: Bp,
    useMemo: Wp,
    useReducer: kl,
    useRef: Fp,
    useState: function() {
        return kl(Uo)
    },
    useDebugValue: Ru,
    useDeferredValue: function(e) {
        var t = at();
        return Qp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = kl(Uo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Mp,
    useId: Kp,
    unstable_isNewReconciler: !1
}
  , gy = {
    readContext: lt,
    useCallback: Hp,
    useContext: lt,
    useEffect: ju,
    useImperativeHandle: Vp,
    useInsertionEffect: $p,
    useLayoutEffect: Bp,
    useMemo: Wp,
    useReducer: Nl,
    useRef: Fp,
    useState: function() {
        return Nl(Uo)
    },
    useDebugValue: Ru,
    useDeferredValue: function(e) {
        var t = at();
        return me === null ? t.memoizedState = e : Qp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = Nl(Uo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Mp,
    useId: Kp,
    unstable_isNewReconciler: !1
};
function dt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ha(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ms = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? tr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = Cn(e)
          , i = Bt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Sn(e, i, o),
        t !== null && (vt(t, e, o, r),
        zi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = Cn(e)
          , i = Bt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Sn(e, i, o),
        t !== null && (vt(t, e, o, r),
        zi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le()
          , r = Cn(e)
          , o = Bt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Sn(e, o, r),
        t !== null && (vt(t, e, r, n),
        zi(t, e, r))
    }
};
function td(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Lo(n, r) || !Lo(o, i) : !0
}
function Xp(e, t, n) {
    var r = !1
      , o = Nn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = Be(t) ? Kn : Ae.current,
    r = t.contextTypes,
    i = (r = r != null) ? zr(e, o) : Nn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ms,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function nd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ms.enqueueReplaceState(t, t.state, null)
}
function ma(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Eu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = Be(t) ? Kn : Ae.current,
    o.context = zr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ha(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ms.enqueueReplaceState(o, o.state, null),
    us(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ur(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Hg(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Pl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ga(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var vy = typeof WeakMap == "function" ? WeakMap : Map;
function Zp(e, t, n) {
    n = Bt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        hs || (hs = !0,
        Na = r),
        ga(e, t)
    }
    ,
    n
}
function Jp(e, t, n) {
    n = Bt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ga(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ga(e, t),
        typeof r != "function" && (En === null ? En = new Set([this]) : En.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function rd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new vy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ay.bind(null, e, t, n),
    t.then(e, e))
}
function od(e) {
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
function id(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1),
    t.tag = 2,
    Sn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var yy = Gt.ReactCurrentOwner
  , Fe = !1;
function Me(e, t, n, r) {
    t.child = e === null ? Tp(t, null, n, r) : $r(t, e.child, n, r)
}
function sd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Cr(t, o),
    r = Pu(e, t, n, r, i, o),
    n = Tu(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Wt(e, t, o)) : (se && n && mu(t),
    t.flags |= 1,
    Me(e, t, r, o),
    t.child)
}
function ld(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !zu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        eh(e, t, i, r, o)) : (e = Hi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Lo,
        n(s, r) && e.ref === t.ref)
            return Wt(e, t, o)
    }
    return t.flags |= 1,
    e = bn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function eh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Lo(i, r) && e.ref === t.ref)
            if (Fe = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Fe = !0);
            else
                return t.lanes = e.lanes,
                Wt(e, t, o)
    }
    return va(e, t, n, r, o)
}
function th(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            te(yr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                te(yr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            te(yr, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        te(yr, Ge),
        Ge |= r;
    return Me(e, t, o, n),
    t.child
}
function nh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function va(e, t, n, r, o) {
    var i = Be(n) ? Kn : Ae.current;
    return i = zr(t, i),
    Cr(t, o),
    n = Pu(e, t, n, r, i, o),
    r = Tu(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Wt(e, t, o)) : (se && r && mu(t),
    t.flags |= 1,
    Me(e, t, n, o),
    t.child)
}
function ad(e, t, n, r, o) {
    if (Be(n)) {
        var i = !0;
        os(t)
    } else
        i = !1;
    if (Cr(t, o),
    t.stateNode === null)
        Bi(e, t),
        Xp(t, n, r),
        ma(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Be(n) ? Kn : Ae.current,
        u = zr(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && nd(t, s, r, u),
        sn = !1;
        var c = t.memoizedState;
        s.state = c,
        us(t, r, s, o),
        a = t.memoizedState,
        l !== r || c !== a || $e.current || sn ? (typeof d == "function" && (ha(t, n, d, r),
        a = t.memoizedState),
        (l = sn || td(t, n, l, r, c, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Rp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : dt(t.type, l),
        s.props = u,
        f = t.pendingProps,
        c = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = lt(a) : (a = Be(n) ? Kn : Ae.current,
        a = zr(t, a));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || c !== a) && nd(t, s, r, a),
        sn = !1,
        c = t.memoizedState,
        s.state = c,
        us(t, r, s, o);
        var w = t.memoizedState;
        l !== f || c !== w || $e.current || sn ? (typeof y == "function" && (ha(t, n, y, r),
        w = t.memoizedState),
        (u = sn || td(t, n, u, r, c, w, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ya(e, t, n, r, i, o)
}
function ya(e, t, n, r, o, i) {
    nh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Kc(t, n, !1),
        Wt(e, t, i);
    r = t.stateNode,
    yy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = $r(t, e.child, null, i),
    t.child = $r(t, null, l, i)) : Me(e, t, l, i),
    t.memoizedState = r.state,
    o && Kc(t, n, !0),
    t.child
}
function rh(e) {
    var t = e.stateNode;
    t.pendingContext ? Qc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qc(e, t.context, !1),
    Cu(e, t.containerInfo)
}
function ud(e, t, n, r, o) {
    return Fr(),
    vu(o),
    t.flags |= 256,
    Me(e, t, n, r),
    t.child
}
var xa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function wa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function oh(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ae, o & 1),
    e === null)
        return fa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Is(s, r, 0, null),
        e = Wn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = wa(n),
        t.memoizedState = xa,
        e) : Au(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return xy(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = bn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = bn(l, i) : (i = Wn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? wa(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = xa,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = bn(i, {
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
function Au(e, t) {
    return t = Is({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ci(e, t, n, r) {
    return r !== null && vu(r),
    $r(t, e.child, null, n),
    e = Au(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function xy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Pl(Error(j(422))),
        Ci(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Is({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Wn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && $r(t, e.child, null, s),
        t.child.memoizedState = wa(s),
        t.memoizedState = xa,
        i);
    if (!(t.mode & 1))
        return Ci(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(j(419)),
        r = Pl(i, r, void 0),
        Ci(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Fe || l) {
        if (r = xe,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Ht(e, o),
            vt(r, e, o, -1))
        }
        return Du(),
        r = Pl(Error(j(421))),
        Ci(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Oy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    qe = wn(o.nextSibling),
    Xe = t,
    se = !0,
    mt = null,
    e !== null && (rt[ot++] = Ft,
    rt[ot++] = $t,
    rt[ot++] = Gn,
    Ft = e.id,
    $t = e.overflow,
    Gn = t),
    t = Au(t, r.children),
    t.flags |= 4096,
    t)
}
function cd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    pa(e.return, t, n)
}
function Tl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function ih(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Me(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && cd(e, n, t);
                else if (e.tag === 19)
                    cd(e, n, t);
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
    if (te(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && cs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Tl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && cs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Tl(t, !0, n, null, i);
            break;
        case "together":
            Tl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Bi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    qn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = bn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = bn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function wy(e, t, n) {
    switch (t.tag) {
    case 3:
        rh(t),
        Fr();
        break;
    case 5:
        Ap(t);
        break;
    case 1:
        Be(t.type) && os(t);
        break;
    case 4:
        Cu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        te(ls, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (te(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? oh(e, t, n) : (te(ae, ae.current & 1),
            e = Wt(e, t, n),
            e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ih(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        te(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        th(e, t, n)
    }
    return Wt(e, t, n)
}
var sh, Sa, lh, ah;
sh = function(e, t) {
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
Sa = function() {}
;
lh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Fn(At.current);
        var i = null;
        switch (n) {
        case "input":
            o = Vl(e, o),
            r = Vl(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Ql(e, o),
            r = Ql(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ns)
        }
        Gl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (To.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (To.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ah = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function io(e, t) {
    if (!se)
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
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Sy(e, t, n) {
    var r = t.pendingProps;
    switch (gu(t),
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
        return Te(t),
        null;
    case 1:
        return Be(t.type) && rs(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        Br(),
        ie($e),
        ie(Ae),
        ku(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        mt !== null && (ja(mt),
        mt = null))),
        Sa(e, t),
        Te(t),
        null;
    case 5:
        bu(t);
        var o = Fn($o.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            lh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Te(t),
                null
            }
            if (e = Fn(At.current),
            Si(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[jt] = t,
                r[zo] = i,
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
                    for (o = 0; o < po.length; o++)
                        oe(po[o], r);
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
                    xc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Sc(r, i),
                    oe("invalid", r)
                }
                Gl(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
                        o = ["children", "" + l]) : To.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    wc(r, i, !0);
                    break;
                case "textarea":
                    fi(r),
                    Ec(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ns)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = If(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[jt] = t,
                e[zo] = r,
                sh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Yl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < po.length; o++)
                            oe(po[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        xc(e, r),
                        o = Vl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Sc(e, r),
                        o = Ql(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Gl(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Ff(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Df(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && jo(e, a) : typeof a == "number" && jo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (To.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && tu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        wc(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        Ec(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + kn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? xr(e, !!r.multiple, i, !1) : r.defaultValue != null && xr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = ns)
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
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ah(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Fn($o.current),
            Fn(At.current),
            Si(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[jt] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[jt] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && qe !== null && t.mode & 1 && !(t.flags & 128))
                Np(),
                Fr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Si(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[jt] = t
                } else
                    Fr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                mt !== null && (ja(mt),
                mt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : Du())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return Br(),
        Sa(e, t),
        e === null && Io(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return wu(t.type._context),
        Te(t),
        null;
    case 17:
        return Be(t.type) && rs(),
        Te(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                io(i, !1);
            else {
                if (ve !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = cs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            io(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return te(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && pe() > Vr && (t.flags |= 128,
                r = !0,
                io(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = cs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    io(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
                        return Te(t),
                        null
                } else
                    2 * pe() - i.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    io(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = pe(),
        t.sibling = null,
        n = ae.current,
        te(ae, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Iu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Ey(e, t) {
    switch (gu(t),
    t.tag) {
    case 1:
        return Be(t.type) && rs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Br(),
        ie($e),
        ie(Ae),
        ku(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return bu(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Fr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Br(),
        null;
    case 10:
        return wu(t.type._context),
        null;
    case 22:
    case 23:
        return Iu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var bi = !1
  , Re = !1
  , Cy = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function vr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function Ea(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var dd = !1;
function by(e, t) {
    if (ia = Ji,
    e = pp(),
    hu(e)) {
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
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , c = null;
                    t: for (; ; ) {
                        for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            c = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (c === n && ++u === o && (l = s),
                            c === i && ++d === r && (a = s),
                            (y = f.nextSibling) !== null)
                                break;
                            f = c,
                            c = f.parentNode
                        }
                        f = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
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
    for (sa = {
        focusedElem: e,
        selectionRange: n
    },
    Ji = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var g = w.memoizedProps
                                  , S = w.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : dt(t.type, g), S);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (E) {
                    fe(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return w = dd,
    dd = !1,
    w
}
function wo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Ea(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function _s(e, t) {
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
function Ca(e) {
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
function uh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    uh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[jt],
    delete t[zo],
    delete t[ua],
    delete t[sy],
    delete t[ly])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function ch(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || ch(e.return))
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
function ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ns));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ba(e, t, n),
        e = e.sibling; e !== null; )
            ba(e, t, n),
            e = e.sibling
}
function ka(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ka(e, t, n),
        e = e.sibling; e !== null; )
            ka(e, t, n),
            e = e.sibling
}
var Se = null
  , ht = !1;
function en(e, t, n) {
    for (n = n.child; n !== null; )
        dh(e, t, n),
        n = n.sibling
}
function dh(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
        try {
            Rt.onCommitFiberUnmount(Ns, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Re || vr(n, t);
    case 6:
        var r = Se
          , o = ht;
        Se = null,
        en(e, t, n),
        Se = r,
        ht = o,
        Se !== null && (ht ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (ht ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? Sl(e.parentNode, n) : e.nodeType === 1 && Sl(e, n),
        Mo(e)) : Sl(Se, n.stateNode));
        break;
    case 4:
        r = Se,
        o = ht,
        Se = n.stateNode.containerInfo,
        ht = !0,
        en(e, t, n),
        Se = r,
        ht = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Ea(n, t, s),
                o = o.next
            } while (o !== r)
        }
        en(e, t, n);
        break;
    case 1:
        if (!Re && (vr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        en(e, t, n);
        break;
    case 21:
        en(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null,
        en(e, t, n),
        Re = r) : en(e, t, n);
        break;
    default:
        en(e, t, n)
    }
}
function pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Cy),
        t.forEach(function(r) {
            var o = My.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Se = l.stateNode,
                        ht = !1;
                        break e;
                    case 3:
                        Se = l.stateNode.containerInfo,
                        ht = !0;
                        break e;
                    case 4:
                        Se = l.stateNode.containerInfo,
                        ht = !0;
                        break e
                    }
                    l = l.return
                }
                if (Se === null)
                    throw Error(j(160));
                dh(i, s, o),
                Se = null,
                ht = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            fh(t, e),
            t = t.sibling
}
function fh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ct(t, e),
        bt(e),
        r & 4) {
            try {
                wo(3, e, e.return),
                _s(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                wo(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        ct(t, e),
        bt(e),
        r & 512 && n !== null && vr(n, n.return);
        break;
    case 5:
        if (ct(t, e),
        bt(e),
        r & 512 && n !== null && vr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                jo(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && _f(o, i),
                    Yl(l, s);
                    var u = Yl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s]
                          , f = a[s + 1];
                        d === "style" ? Ff(o, f) : d === "dangerouslySetInnerHTML" ? Df(o, f) : d === "children" ? jo(o, f) : tu(o, d, f, u)
                    }
                    switch (l) {
                    case "input":
                        Hl(o, i);
                        break;
                    case "textarea":
                        Lf(o, i);
                        break;
                    case "select":
                        var c = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? xr(o, !!i.multiple, y, !1) : c !== !!i.multiple && (i.defaultValue != null ? xr(o, !!i.multiple, i.defaultValue, !0) : xr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[zo] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (ct(t, e),
        bt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (ct(t, e),
        bt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Mo(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        ct(t, e),
        bt(e);
        break;
    case 13:
        ct(t, e),
        bt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (_u = pe())),
        r & 4 && pd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Re = (u = Re) || d,
        ct(t, e),
        Re = u) : ct(t, e),
        bt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (_ = e,
                d = e.child; d !== null; ) {
                    for (f = _ = d; _ !== null; ) {
                        switch (c = _,
                        y = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            wo(4, c, c.return);
                            break;
                        case 1:
                            vr(c, c.return);
                            var w = c.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = c,
                                n = c.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            vr(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                md(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = c,
                        _ = y) : md(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = zf("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        ct(t, e),
        bt(e),
        r & 4 && pd(e);
        break;
    case 21:
        break;
    default:
        ct(t, e),
        bt(e)
    }
}
function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ch(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (jo(o, ""),
                r.flags &= -33);
                var i = fd(e);
                ka(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = fd(e);
                ba(e, l, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ky(e, t, n) {
    _ = e,
    ph(e)
}
function ph(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var o = _
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || bi;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Re;
                l = bi;
                var u = Re;
                if (bi = s,
                (Re = a) && !u)
                    for (_ = o; _ !== null; )
                        s = _,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? gd(o) : a !== null ? (a.return = s,
                        _ = a) : gd(o);
                for (; i !== null; )
                    _ = i,
                    ph(i),
                    i = i.sibling;
                _ = o,
                bi = l,
                Re = u
            }
            hd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            _ = i) : hd(e)
    }
}
function hd(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || _s(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Zc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Zc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Mo(f)
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
                        throw Error(j(163))
                    }
                Re || t.flags & 512 && Ca(t)
            } catch (c) {
                fe(t, t.return, c)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function md(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function gd(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    _s(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        fe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    Ca(t)
                } catch (a) {
                    fe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Ca(t)
                } catch (a) {
                    fe(t, s, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            _ = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            _ = l;
            break
        }
        _ = t.return
    }
}
var Ny = Math.ceil
  , ps = Gt.ReactCurrentDispatcher
  , Ou = Gt.ReactCurrentOwner
  , st = Gt.ReactCurrentBatchConfig
  , q = 0
  , xe = null
  , he = null
  , Ee = 0
  , Ge = 0
  , yr = On(0)
  , ve = 0
  , Ho = null
  , qn = 0
  , Ls = 0
  , Mu = 0
  , So = null
  , ze = null
  , _u = 0
  , Vr = 1 / 0
  , Dt = null
  , hs = !1
  , Na = null
  , En = null
  , ki = !1
  , mn = null
  , ms = 0
  , Eo = 0
  , Pa = null
  , Ui = -1
  , Vi = 0;
function Le() {
    return q & 6 ? pe() : Ui !== -1 ? Ui : Ui = pe()
}
function Cn(e) {
    return e.mode & 1 ? q & 2 && Ee !== 0 ? Ee & -Ee : uy.transition !== null ? (Vi === 0 && (Vi = Xf()),
    Vi) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : op(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < Eo)
        throw Eo = 0,
        Pa = null,
        Error(j(185));
    Jo(e, n, r),
    (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (Ls |= n),
    ve === 4 && an(e, Ee)),
    Ue(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (Vr = pe() + 500,
    As && Mn()))
}
function Ue(e, t) {
    var n = e.callbackNode;
    uv(e, t);
    var r = Zi(e, e === xe ? Ee : 0);
    if (r === 0)
        n !== null && kc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && kc(n),
        t === 1)
            e.tag === 0 ? ay(vd.bind(null, e)) : Cp(vd.bind(null, e)),
            oy(function() {
                !(q & 6) && Mn()
            }),
            n = null;
        else {
            switch (Zf(r)) {
            case 1:
                n = su;
                break;
            case 4:
                n = Yf;
                break;
            case 16:
                n = Xi;
                break;
            case 536870912:
                n = qf;
                break;
            default:
                n = Xi
            }
            n = Sh(n, hh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function hh(e, t) {
    if (Ui = -1,
    Vi = 0,
    q & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
        return null;
    var r = Zi(e, e === xe ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = gs(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = gh();
        (xe !== e || Ee !== t) && (Dt = null,
        Vr = pe() + 500,
        Hn(e, t));
        do
            try {
                jy();
                break
            } catch (l) {
                mh(e, l)
            }
        while (!0);
        xu(),
        ps.current = i,
        q = o,
        he !== null ? t = 0 : (xe = null,
        Ee = 0,
        t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = ea(e),
        o !== 0 && (r = o,
        t = Ta(e, o))),
        t === 1)
            throw n = Ho,
            Hn(e, 0),
            an(e, r),
            Ue(e, pe()),
            n;
        if (t === 6)
            an(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Py(o) && (t = gs(e, r),
            t === 2 && (i = ea(e),
            i !== 0 && (r = i,
            t = Ta(e, i))),
            t === 1))
                throw n = Ho,
                Hn(e, 0),
                an(e, r),
                Ue(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                In(e, ze, Dt);
                break;
            case 3:
                if (an(e, r),
                (r & 130023424) === r && (t = _u + 500 - pe(),
                10 < t)) {
                    if (Zi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Le(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = aa(In.bind(null, e, ze, Dt), t);
                    break
                }
                In(e, ze, Dt);
                break;
            case 4:
                if (an(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - gt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ny(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = aa(In.bind(null, e, ze, Dt), r);
                    break
                }
                In(e, ze, Dt);
                break;
            case 5:
                In(e, ze, Dt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Ue(e, pe()),
    e.callbackNode === n ? hh.bind(null, e) : null
}
function Ta(e, t) {
    var n = So;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
    e = gs(e, t),
    e !== 2 && (t = ze,
    ze = n,
    t !== null && ja(t)),
    e
}
function ja(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}
function Py(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!yt(i(), o))
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
function an(e, t) {
    for (t &= ~Mu,
    t &= ~Ls,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - gt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function vd(e) {
    if (q & 6)
        throw Error(j(327));
    br();
    var t = Zi(e, 0);
    if (!(t & 1))
        return Ue(e, pe()),
        null;
    var n = gs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ea(e);
        r !== 0 && (t = r,
        n = Ta(e, r))
    }
    if (n === 1)
        throw n = Ho,
        Hn(e, 0),
        an(e, t),
        Ue(e, pe()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    In(e, ze, Dt),
    Ue(e, pe()),
    null
}
function Lu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Vr = pe() + 500,
        As && Mn())
    }
}
function Xn(e) {
    mn !== null && mn.tag === 0 && !(q & 6) && br();
    var t = q;
    q |= 1;
    var n = st.transition
      , r = J;
    try {
        if (st.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        st.transition = n,
        q = t,
        !(q & 6) && Mn()
    }
}
function Iu() {
    Ge = yr.current,
    ie(yr)
}
function Hn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    ry(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var r = n;
            switch (gu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && rs();
                break;
            case 3:
                Br(),
                ie($e),
                ie(Ae),
                ku();
                break;
            case 5:
                bu(r);
                break;
            case 4:
                Br();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                wu(r.type._context);
                break;
            case 22:
            case 23:
                Iu()
            }
            n = n.return
        }
    if (xe = e,
    he = e = bn(e.current, null),
    Ee = Ge = t,
    ve = 0,
    Ho = null,
    Mu = Ls = qn = 0,
    ze = So = null,
    zn !== null) {
        for (t = 0; t < zn.length; t++)
            if (n = zn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        zn = null
    }
    return e
}
function mh(e, t) {
    do {
        var n = he;
        try {
            if (xu(),
            Fi.current = fs,
            ds) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ds = !1
            }
            if (Yn = 0,
            ye = me = ue = null,
            xo = !1,
            Bo = 0,
            Ou.current = null,
            n === null || n.return === null) {
                ve = 1,
                Ho = t,
                he = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ee,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c ? (d.updateQueue = c.updateQueue,
                        d.memoizedState = c.memoizedState,
                        d.lanes = c.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = od(s);
                    if (y !== null) {
                        y.flags &= -257,
                        id(y, s, l, i, t),
                        y.mode & 1 && rd(i, u, t),
                        t = y,
                        a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            rd(i, u, t),
                            Du();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (se && l.mode & 1) {
                    var S = od(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        id(S, s, l, i, t),
                        vu(Ur(a, l));
                        break e
                    }
                }
                i = a = Ur(a, l),
                ve !== 4 && (ve = 2),
                So === null ? So = [i] : So.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = Zp(i, a, t);
                        Xc(i, m);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (En === null || !En.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var E = Jp(i, l, t);
                            Xc(i, E);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            yh(n)
        } catch (C) {
            t = C,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function gh() {
    var e = ps.current;
    return ps.current = fs,
    e === null ? fs : e
}
function Du() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    xe === null || !(qn & 268435455) && !(Ls & 268435455) || an(xe, Ee)
}
function gs(e, t) {
    var n = q;
    q |= 2;
    var r = gh();
    (xe !== e || Ee !== t) && (Dt = null,
    Hn(e, t));
    do
        try {
            Ty();
            break
        } catch (o) {
            mh(e, o)
        }
    while (!0);
    if (xu(),
    q = n,
    ps.current = r,
    he !== null)
        throw Error(j(261));
    return xe = null,
    Ee = 0,
    ve
}
function Ty() {
    for (; he !== null; )
        vh(he)
}
function jy() {
    for (; he !== null && !ev(); )
        vh(he)
}
function vh(e) {
    var t = wh(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? yh(e) : he = t,
    Ou.current = null
}
function yh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ey(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ve = 6,
                he = null;
                return
            }
        } else if (n = Sy(n, t, Ge),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}
function In(e, t, n) {
    var r = J
      , o = st.transition;
    try {
        st.transition = null,
        J = 1,
        Ry(e, t, n, r)
    } finally {
        st.transition = o,
        J = r
    }
    return null
}
function Ry(e, t, n, r) {
    do
        br();
    while (mn !== null);
    if (q & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (cv(e, i),
    e === xe && (he = xe = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ki || (ki = !0,
    Sh(Xi, function() {
        return br(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = st.transition,
        st.transition = null;
        var s = J;
        J = 1;
        var l = q;
        q |= 4,
        Ou.current = null,
        by(e, n),
        fh(n, e),
        qv(sa),
        Ji = !!ia,
        sa = ia = null,
        e.current = n,
        ky(n),
        tv(),
        q = l,
        J = s,
        st.transition = i
    } else
        e.current = n;
    if (ki && (ki = !1,
    mn = e,
    ms = o),
    i = e.pendingLanes,
    i === 0 && (En = null),
    ov(n.stateNode),
    Ue(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (hs)
        throw hs = !1,
        e = Na,
        Na = null,
        e;
    return ms & 1 && e.tag !== 0 && br(),
    i = e.pendingLanes,
    i & 1 ? e === Pa ? Eo++ : (Eo = 0,
    Pa = e) : Eo = 0,
    Mn(),
    null
}
function br() {
    if (mn !== null) {
        var e = Zf(ms)
          , t = st.transition
          , n = J;
        try {
            if (st.transition = null,
            J = 16 > e ? 16 : e,
            mn === null)
                var r = !1;
            else {
                if (e = mn,
                mn = null,
                ms = 0,
                q & 6)
                    throw Error(j(331));
                var o = q;
                for (q |= 4,
                _ = e.current; _ !== null; ) {
                    var i = _
                      , s = i.child;
                    if (_.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (_ = u; _ !== null; ) {
                                    var d = _;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        wo(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        _ = f;
                                    else
                                        for (; _ !== null; ) {
                                            d = _;
                                            var c = d.sibling
                                              , y = d.return;
                                            if (uh(d),
                                            d === u) {
                                                _ = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = y,
                                                _ = c;
                                                break
                                            }
                                            _ = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var g = w.child;
                                if (g !== null) {
                                    w.child = null;
                                    do {
                                        var S = g.sibling;
                                        g.sibling = null,
                                        g = S
                                    } while (g !== null)
                                }
                            }
                            _ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        _ = s;
                    else
                        e: for (; _ !== null; ) {
                            if (i = _,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    wo(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                _ = m;
                                break e
                            }
                            _ = i.return
                        }
                }
                var h = e.current;
                for (_ = h; _ !== null; ) {
                    s = _;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        _ = v;
                    else
                        e: for (s = h; _ !== null; ) {
                            if (l = _,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _s(9, l)
                                    }
                                } catch (C) {
                                    fe(l, l.return, C)
                                }
                            if (l === s) {
                                _ = null;
                                break e
                            }
                            var E = l.sibling;
                            if (E !== null) {
                                E.return = l.return,
                                _ = E;
                                break e
                            }
                            _ = l.return
                        }
                }
                if (q = o,
                Mn(),
                Rt && typeof Rt.onPostCommitFiberRoot == "function")
                    try {
                        Rt.onPostCommitFiberRoot(Ns, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            st.transition = t
        }
    }
    return !1
}
function yd(e, t, n) {
    t = Ur(n, t),
    t = Zp(e, t, 1),
    e = Sn(e, t, 1),
    t = Le(),
    e !== null && (Jo(e, 1, t),
    Ue(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        yd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
                    e = Ur(n, e),
                    e = Jp(t, e, 1),
                    t = Sn(t, e, 1),
                    e = Le(),
                    t !== null && (Jo(t, 1, e),
                    Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ay(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Le(),
    e.pingedLanes |= e.suspendedLanes & n,
    xe === e && (Ee & n) === n && (ve === 4 || ve === 3 && (Ee & 130023424) === Ee && 500 > pe() - _u ? Hn(e, 0) : Mu |= n),
    Ue(e, t)
}
function xh(e, t) {
    t === 0 && (e.mode & 1 ? (t = mi,
    mi <<= 1,
    !(mi & 130023424) && (mi = 4194304)) : t = 1);
    var n = Le();
    e = Ht(e, t),
    e !== null && (Jo(e, t, n),
    Ue(e, n))
}
function Oy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    xh(e, n)
}
function My(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    xh(e, n)
}
var wh;
wh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current)
            Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Fe = !1,
                wy(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else
        Fe = !1,
        se && t.flags & 1048576 && bp(t, ss, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Bi(e, t),
        e = t.pendingProps;
        var o = zr(t, Ae.current);
        Cr(t, n),
        o = Pu(null, t, r, e, o, n);
        var i = Tu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Be(r) ? (i = !0,
        os(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Eu(t),
        o.updater = Ms,
        t.stateNode = o,
        o._reactInternals = t,
        ma(t, r, e, n),
        t = ya(null, t, r, !0, i, n)) : (t.tag = 0,
        se && i && mu(t),
        Me(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Bi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Ly(r),
            e = dt(r, e),
            o) {
            case 0:
                t = va(null, t, r, e, n);
                break e;
            case 1:
                t = ad(null, t, r, e, n);
                break e;
            case 11:
                t = sd(null, t, r, e, n);
                break e;
            case 14:
                t = ld(null, t, r, dt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        va(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        ad(e, t, r, o, n);
    case 3:
        e: {
            if (rh(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Rp(e, t),
            us(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Ur(Error(j(423)), t),
                    t = ud(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Ur(Error(j(424)), t),
                    t = ud(e, t, r, n, o);
                    break e
                } else
                    for (qe = wn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    se = !0,
                    mt = null,
                    n = Tp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fr(),
                r === o) {
                    t = Wt(e, t, n);
                    break e
                }
                Me(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ap(t),
        e === null && fa(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        la(r, o) ? s = null : i !== null && la(r, i) && (t.flags |= 32),
        nh(e, t),
        Me(e, t, s, n),
        t.child;
    case 6:
        return e === null && fa(t),
        null;
    case 13:
        return oh(e, t, n);
    case 4:
        return Cu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = $r(t, null, r, n) : Me(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        sd(e, t, r, o, n);
    case 7:
        return Me(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            te(ls, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (yt(i.value, s)) {
                    if (i.children === o.children && !$e.current) {
                        t = Wt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Bt(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    pa(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            pa(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Me(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Cr(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Me(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = dt(r, t.pendingProps),
        o = dt(r.type, o),
        ld(e, t, r, o, n);
    case 15:
        return eh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        Bi(e, t),
        t.tag = 1,
        Be(r) ? (e = !0,
        os(t)) : e = !1,
        Cr(t, n),
        Xp(t, r, o),
        ma(t, r, o, n),
        ya(null, t, r, !0, e, n);
    case 19:
        return ih(e, t, n);
    case 22:
        return th(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Sh(e, t) {
    return Gf(e, t)
}
function _y(e, t, n, r) {
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
function it(e, t, n, r) {
    return new _y(e,t,n,r)
}
function zu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ly(e) {
    if (typeof e == "function")
        return zu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ru)
            return 11;
        if (e === ou)
            return 14
    }
    return 2
}
function bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
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
function Hi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        zu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case ar:
            return Wn(n.children, o, i, t);
        case nu:
            s = 8,
            o |= 8;
            break;
        case Fl:
            return e = it(12, n, t, o | 2),
            e.elementType = Fl,
            e.lanes = i,
            e;
        case $l:
            return e = it(13, n, t, o),
            e.elementType = $l,
            e.lanes = i,
            e;
        case Bl:
            return e = it(19, n, t, o),
            e.elementType = Bl,
            e.lanes = i,
            e;
        case Af:
            return Is(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case jf:
                    s = 10;
                    break e;
                case Rf:
                    s = 9;
                    break e;
                case ru:
                    s = 11;
                    break e;
                case ou:
                    s = 14;
                    break e;
                case on:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = it(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Wn(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Is(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = Af,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function jl(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function Rl(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Iy(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = cl(0),
    this.expirationTimes = cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = cl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Fu(e, t, n, r, o, i, s, l, a) {
    return e = new Iy(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Eu(i),
    e
}
function Dy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Eh(e) {
    if (!e)
        return Nn;
    e = e._reactInternals;
    e: {
        if (tr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Be(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n))
            return Ep(e, n, t)
    }
    return t
}
function Ch(e, t, n, r, o, i, s, l, a) {
    return e = Fu(n, r, !0, e, o, i, s, l, a),
    e.context = Eh(null),
    n = e.current,
    r = Le(),
    o = Cn(n),
    i = Bt(r, o),
    i.callback = t ?? null,
    Sn(n, i, o),
    e.current.lanes = o,
    Jo(e, o, r),
    Ue(e, r),
    e
}
function Ds(e, t, n, r) {
    var o = t.current
      , i = Le()
      , s = Cn(o);
    return n = Eh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Bt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Sn(o, t, s),
    e !== null && (vt(e, o, s, i),
    zi(e, o, s)),
    s
}
function vs(e) {
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
function xd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function $u(e, t) {
    xd(e, t),
    (e = e.alternate) && xd(e, t)
}
function zy() {
    return null
}
var bh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Bu(e) {
    this._internalRoot = e
}
zs.prototype.render = Bu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Ds(e, t, null, null)
}
;
zs.prototype.unmount = Bu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xn(function() {
            Ds(null, e, null, null)
        }),
        t[Vt] = null
    }
}
;
function zs(e) {
    this._internalRoot = e
}
zs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = tp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++)
            ;
        ln.splice(n, 0, e),
        n === 0 && rp(e)
    }
}
;
function Uu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Fs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wd() {}
function Fy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = vs(s);
                i.call(u)
            }
        }
        var s = Ch(t, r, e, 0, null, !1, !1, "", wd);
        return e._reactRootContainer = s,
        e[Vt] = s.current,
        Io(e.nodeType === 8 ? e.parentNode : e),
        Xn(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = vs(a);
            l.call(u)
        }
    }
    var a = Fu(e, 0, !1, null, null, !1, !1, "", wd);
    return e._reactRootContainer = a,
    e[Vt] = a.current,
    Io(e.nodeType === 8 ? e.parentNode : e),
    Xn(function() {
        Ds(t, a, n, r)
    }),
    a
}
function $s(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = vs(s);
                l.call(a)
            }
        }
        Ds(t, s, e, o)
    } else
        s = Fy(n, t, e, o, r);
    return vs(s)
}
Jf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = fo(t.pendingLanes);
            n !== 0 && (lu(t, n | 1),
            Ue(t, pe()),
            !(q & 6) && (Vr = pe() + 500,
            Mn()))
        }
        break;
    case 13:
        Xn(function() {
            var r = Ht(e, 1);
            if (r !== null) {
                var o = Le();
                vt(r, e, 1, o)
            }
        }),
        $u(e, 1)
    }
}
;
au = function(e) {
    if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
            var n = Le();
            vt(t, e, 134217728, n)
        }
        $u(e, 134217728)
    }
}
;
ep = function(e) {
    if (e.tag === 13) {
        var t = Cn(e)
          , n = Ht(e, t);
        if (n !== null) {
            var r = Le();
            vt(n, e, t, r)
        }
        $u(e, t)
    }
}
;
tp = function() {
    return J
}
;
np = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Xl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Hl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Rs(r);
                    if (!o)
                        throw Error(j(90));
                    Mf(r),
                    Hl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Lf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && xr(e, !!n.multiple, t, !1)
    }
}
;
Uf = Lu;
Vf = Xn;
var $y = {
    usingClientEntryPoint: !1,
    Events: [ti, fr, Rs, $f, Bf, Lu]
}
  , so = {
    findFiberByHostInstance: Dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , By = {
    bundleType: so.bundleType,
    version: so.version,
    rendererPackageName: so.rendererPackageName,
    rendererConfig: so.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Qf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: so.findFiberByHostInstance || zy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber)
        try {
            Ns = Ni.inject(By),
            Rt = Ni
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uu(t))
        throw Error(j(200));
    return Dy(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!Uu(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = bh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Fu(e, 1, !1, null, null, n, !1, r, o),
    e[Vt] = t.current,
    Io(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = Qf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return Xn(e)
}
;
et.hydrate = function(e, t, n) {
    if (!Fs(t))
        throw Error(j(200));
    return $s(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!Uu(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = bh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Ch(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Vt] = t.current,
    Io(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new zs(t)
}
;
et.render = function(e, t, n) {
    if (!Fs(t))
        throw Error(j(200));
    return $s(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!Fs(e))
        throw Error(j(40));
    return e._reactRootContainer ? (Xn(function() {
        $s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Vt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = Lu;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Fs(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return $s(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function kh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kh)
        } catch (e) {
            console.error(e)
        }
}
kh(),
kf.exports = et;
var ri = kf.exports;
const Nh = pf(ri);
var Ph, Sd = ri;
Ph = Sd.createRoot,
Sd.hydrateRoot;
const Uy = 1
  , Vy = 1e6;
let Al = 0;
function Hy() {
    return Al = (Al + 1) % Number.MAX_SAFE_INTEGER,
    Al.toString()
}
const Ol = new Map
  , Ed = e => {
    if (Ol.has(e))
        return;
    const t = setTimeout( () => {
        Ol.delete(e),
        Co({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Vy);
    Ol.set(e, t)
}
  , Wy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Uy)
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
            return n ? Ed(n) : e.toasts.forEach(r => {
                Ed(r.id)
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
  , Wi = [];
let Qi = {
    toasts: []
};
function Co(e) {
    Qi = Wy(Qi, e),
    Wi.forEach(t => {
        t(Qi)
    }
    )
}
function Qy({...e}) {
    const t = Hy()
      , n = o => Co({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Co({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Co({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Ky() {
    const [e,t] = x.useState(Qi);
    return x.useEffect( () => (Wi.push(t),
    () => {
        const n = Wi.indexOf(t);
        n > -1 && Wi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Qy,
        dismiss: n => Co({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ge(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Gy(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Th(...e) {
    return t => e.forEach(n => Gy(n, t))
}
function xt(...e) {
    return x.useCallback(Th(...e), e)
}
function Yy(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(f) {
            const {scope: c, children: y, ...w} = f
              , g = (c == null ? void 0 : c[e][a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return p.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        function d(f, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, qy(o, ...t)]
}
function qy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Wo = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = x.Children.toArray(n)
      , i = o.find(Xy);
    if (i) {
        const s = i.props.children
          , l = o.map(a => a === i ? x.Children.count(s) > 1 ? x.Children.only(null) : x.isValidElement(s) ? s.props.children : null : a);
        return p.jsx(Ra, {
            ...r,
            ref: t,
            children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null
        })
    }
    return p.jsx(Ra, {
        ...r,
        ref: t,
        children: n
    })
}
);
Wo.displayName = "Slot";
var Ra = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (x.isValidElement(n)) {
        const o = Jy(n);
        return x.cloneElement(n, {
            ...Zy(r, n.props),
            ref: t ? Th(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
}
);
Ra.displayName = "SlotClone";
var jh = ({children: e}) => p.jsx(p.Fragment, {
    children: e
});
function Xy(e) {
    return x.isValidElement(e) && e.type === jh
}
function Zy(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Jy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function e0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Yy(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: g} = y
          , S = A.useRef(null)
          , m = A.useRef(new Map).current;
        return p.jsx(o, {
            scope: w,
            itemMap: m,
            collectionRef: S,
            children: g
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = A.forwardRef( (y, w) => {
        const {scope: g, children: S} = y
          , m = i(l, g)
          , h = xt(w, m.collectionRef);
        return p.jsx(Wo, {
            ref: h,
            children: S
        })
    }
    );
    a.displayName = l;
    const u = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = A.forwardRef( (y, w) => {
        const {scope: g, children: S, ...m} = y
          , h = A.useRef(null)
          , v = xt(w, h)
          , E = i(u, g);
        return A.useEffect( () => (E.itemMap.set(h, {
            ref: h,
            ...m
        }),
        () => void E.itemMap.delete(h))),
        p.jsx(Wo, {
            [d]: "",
            ref: v,
            children: S
        })
    }
    );
    f.displayName = u;
    function c(y) {
        const w = i(e + "CollectionConsumer", y);
        return A.useCallback( () => {
            const S = w.collectionRef.current;
            if (!S)
                return [];
            const m = Array.from(S.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, C) => m.indexOf(E.ref.current) - m.indexOf(C.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: f
    }, c, r]
}
function Rh(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = f => {
            var m;
            const {scope: c, children: y, ...w} = f
              , g = ((m = c == null ? void 0 : c[e]) == null ? void 0 : m[a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return p.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(f, c) {
            var g;
            const y = ((g = c == null ? void 0 : c[e]) == null ? void 0 : g[a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, t0(o, ...t)]
}
function t0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var n0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , He = n0.reduce( (e, t) => {
    const n = x.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , l = i ? Wo : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(l, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Ah(e, t) {
    e && ri.flushSync( () => e.dispatchEvent(t))
}
function Ot(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function r0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
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
var o0 = "DismissableLayer", Aa = "dismissableLayer.update", i0 = "dismissableLayer.pointerDownOutside", s0 = "dismissableLayer.focusOutside", Cd, Oh = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Vu = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = x.useContext(Oh)
      , [d,f] = x.useState(null)
      , c = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = x.useState({})
      , w = xt(t, N => f(N))
      , g = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(S)
      , h = d ? g.indexOf(d) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = h >= m
      , C = a0(N => {
        const T = N.target
          , I = [...u.branches].some(O => O.contains(T));
        !E || I || (o == null || o(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c)
      , k = u0(N => {
        const T = N.target;
        [...u.branches].some(O => O.contains(T)) || (i == null || i(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c);
    return r0(N => {
        h === u.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && l && (N.preventDefault(),
        l()))
    }
    , c),
    x.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cd = c.body.style.pointerEvents,
            c.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            bd(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = Cd)
            }
    }
    , [d, c, n, u]),
    x.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        bd())
    }
    , [d, u]),
    x.useEffect( () => {
        const N = () => y({});
        return document.addEventListener(Aa, N),
        () => document.removeEventListener(Aa, N)
    }
    , []),
    p.jsx(He.div, {
        ...a,
        ref: w,
        style: {
            pointerEvents: v ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ge(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Vu.displayName = o0;
var l0 = "DismissableLayerBranch"
  , Mh = x.forwardRef( (e, t) => {
    const n = x.useContext(Oh)
      , r = x.useRef(null)
      , o = xt(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    p.jsx(He.div, {
        ...e,
        ref: o
    })
}
);
Mh.displayName = l0;
function a0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    _h(i0, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function u0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && _h(s0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function bd() {
    const e = new CustomEvent(Aa);
    document.dispatchEvent(e)
}
function _h(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Ah(o, i) : o.dispatchEvent(i)
}
var c0 = Vu
  , d0 = Mh
  , Zn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , f0 = "Portal"
  , Lh = x.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    Zn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Nh.createPortal(p.jsx(He.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Lh.displayName = f0;
function p0(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Hu = e => {
    const {present: t, children: n} = e
      , r = h0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = xt(r.ref, m0(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
Hu.displayName = "Presence";
function h0(e) {
    const [t,n] = x.useState()
      , r = x.useRef({})
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = p0(s, {
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
    return x.useEffect( () => {
        const u = Pi(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    Zn( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const c = i.current
              , y = Pi(u);
            e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Zn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = y => {
                const g = Pi(r.current).includes(y.animationName);
                if (y.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , c = y => {
                y.target === t && (i.current = Pi(r.current))
            }
            ;
            return t.addEventListener("animationstart", c),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", c),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function Pi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function m0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function g0({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = v0({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , l = Ot(n)
      , a = x.useCallback(u => {
        if (i) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && l(f)
        } else
            o(u)
    }
    , [i, e, o, l]);
    return [s, a]
}
function v0({defaultProp: e, onChange: t}) {
    const n = x.useState(e)
      , [r] = n
      , o = x.useRef(r)
      , i = Ot(t);
    return x.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var y0 = "VisuallyHidden"
  , Bs = x.forwardRef( (e, t) => p.jsx(He.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Bs.displayName = y0;
var x0 = Bs
  , Wu = "ToastProvider"
  , [Qu,w0,S0] = e0("Toast")
  , [Ih,yE] = Rh("Toast", [S0])
  , [E0,Us] = Ih(Wu)
  , Dh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = x.useState(null)
      , [u,d] = x.useState(0)
      , f = x.useRef(!1)
      , c = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Wu}\`. Expected non-empty \`string\`.`),
    p.jsx(Qu.Provider, {
        scope: t,
        children: p.jsx(E0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: x.useCallback( () => d(y => y + 1), []),
            onToastRemove: x.useCallback( () => d(y => y - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: c,
            children: s
        })
    })
}
;
Dh.displayName = Wu;
var zh = "ToastViewport"
  , C0 = ["F8"]
  , Oa = "toast.viewportPause"
  , Ma = "toast.viewportResume"
  , Fh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=C0, label: o="Notifications ({hotkey})", ...i} = e
      , s = Us(zh, n)
      , l = w0(n)
      , a = x.useRef(null)
      , u = x.useRef(null)
      , d = x.useRef(null)
      , f = x.useRef(null)
      , c = xt(t, f, s.onViewportChange)
      , y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = s.toastCount > 0;
    x.useEffect( () => {
        const S = m => {
            var v;
            r.length !== 0 && r.every(E => m[E] || m.code === E) && ((v = f.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    x.useEffect( () => {
        const S = a.current
          , m = f.current;
        if (w && S && m) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const k = new CustomEvent(Oa);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const k = new CustomEvent(Ma);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !1
                }
            }
              , E = k => {
                !S.contains(k.relatedTarget) && v()
            }
              , C = () => {
                S.contains(document.activeElement) || v()
            }
            ;
            return S.addEventListener("focusin", h),
            S.addEventListener("focusout", E),
            S.addEventListener("pointermove", h),
            S.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                S.removeEventListener("focusin", h),
                S.removeEventListener("focusout", E),
                S.removeEventListener("pointermove", h),
                S.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, s.isClosePausedRef]);
    const g = x.useCallback( ({tabbingDirection: S}) => {
        const h = l().map(v => {
            const E = v.ref.current
              , C = [E, ...I0(E)];
            return S === "forwards" ? C : C.reverse()
        }
        );
        return (S === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return x.useEffect( () => {
        const S = f.current;
        if (S) {
            const m = h => {
                var C, k, N;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const T = document.activeElement
                      , I = h.shiftKey;
                    if (h.target === S && I) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const D = g({
                        tabbingDirection: I ? "backwards" : "forwards"
                    })
                      , W = D.findIndex(M => M === T);
                    Ml(D.slice(W + 1)) ? h.preventDefault() : I ? (k = u.current) == null || k.focus() : (N = d.current) == null || N.focus()
                }
            }
            ;
            return S.addEventListener("keydown", m),
            () => S.removeEventListener("keydown", m)
        }
    }
    , [l, g]),
    p.jsxs(d0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && p.jsx(_a, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = g({
                    tabbingDirection: "forwards"
                });
                Ml(S)
            }
        }), p.jsx(Qu.Slot, {
            scope: n,
            children: p.jsx(He.ol, {
                tabIndex: -1,
                ...i,
                ref: c
            })
        }), w && p.jsx(_a, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const S = g({
                    tabbingDirection: "backwards"
                });
                Ml(S)
            }
        })]
    })
}
);
Fh.displayName = zh;
var $h = "ToastFocusProxy"
  , _a = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Us($h, n);
    return p.jsx(Bs, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
_a.displayName = $h;
var Vs = "Toast"
  , b0 = "toast.swipeStart"
  , k0 = "toast.swipeMove"
  , N0 = "toast.swipeCancel"
  , P0 = "toast.swipeEnd"
  , Bh = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l=!0,a] = g0({
        prop: r,
        defaultProp: o,
        onChange: i
    });
    return p.jsx(Hu, {
        present: n || l,
        children: p.jsx(R0, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: Ot(e.onPause),
            onResume: Ot(e.onResume),
            onSwipeStart: ge(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ge(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: ge(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ge(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                a(!1)
            }
            )
        })
    })
}
);
Bh.displayName = Vs;
var [T0,j0] = Ih(Vs, {
    onClose() {}
})
  , R0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: c, onSwipeEnd: y, ...w} = e
      , g = Us(Vs, n)
      , [S,m] = x.useState(null)
      , h = xt(t, M => m(M))
      , v = x.useRef(null)
      , E = x.useRef(null)
      , C = o || g.duration
      , k = x.useRef(0)
      , N = x.useRef(C)
      , T = x.useRef(0)
      , {onToastAdd: I, onToastRemove: O} = g
      , $ = Ot( () => {
        var Q;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
        s()
    }
    )
      , D = x.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(T.current),
        k.current = new Date().getTime(),
        T.current = window.setTimeout($, M))
    }
    , [$]);
    x.useEffect( () => {
        const M = g.viewport;
        if (M) {
            const Q = () => {
                D(N.current),
                u == null || u()
            }
              , B = () => {
                const K = new Date().getTime() - k.current;
                N.current = N.current - K,
                window.clearTimeout(T.current),
                a == null || a()
            }
            ;
            return M.addEventListener(Oa, B),
            M.addEventListener(Ma, Q),
            () => {
                M.removeEventListener(Oa, B),
                M.removeEventListener(Ma, Q)
            }
        }
    }
    , [g.viewport, C, a, u, D]),
    x.useEffect( () => {
        i && !g.isClosePausedRef.current && D(C)
    }
    , [i, C, g.isClosePausedRef, D]),
    x.useEffect( () => (I(),
    () => O()), [I, O]);
    const W = x.useMemo( () => S ? Gh(S) : null, [S]);
    return g.viewport ? p.jsxs(p.Fragment, {
        children: [W && p.jsx(A0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), p.jsx(T0, {
            scope: n,
            onClose: $,
            children: ri.createPortal(p.jsx(Qu.ItemSlot, {
                scope: n,
                children: p.jsx(c0, {
                    asChild: !0,
                    onEscapeKeyDown: ge(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: p.jsx(He.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...w,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ge(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ge(e.onPointerDown, M => {
                            M.button === 0 && (v.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: ge(e.onPointerMove, M => {
                            if (!v.current)
                                return;
                            const Q = M.clientX - v.current.x
                              , B = M.clientY - v.current.y
                              , K = !!E.current
                              , b = ["left", "right"].includes(g.swipeDirection)
                              , R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , z = b ? R(0, Q) : 0
                              , L = b ? 0 : R(0, B)
                              , F = M.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: z,
                                y: L
                            }
                              , le = {
                                originalEvent: M,
                                delta: Y
                            };
                            K ? (E.current = Y,
                            Ti(k0, f, le, {
                                discrete: !1
                            })) : kd(Y, g.swipeDirection, F) ? (E.current = Y,
                            Ti(b0, d, le, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(Q) > F || Math.abs(B) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: ge(e.onPointerUp, M => {
                            const Q = E.current
                              , B = M.target;
                            if (B.hasPointerCapture(M.pointerId) && B.releasePointerCapture(M.pointerId),
                            E.current = null,
                            v.current = null,
                            Q) {
                                const K = M.currentTarget
                                  , b = {
                                    originalEvent: M,
                                    delta: Q
                                };
                                kd(Q, g.swipeDirection, g.swipeThreshold) ? Ti(P0, y, b, {
                                    discrete: !0
                                }) : Ti(N0, c, b, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", R => R.preventDefault(), {
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
  , A0 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Us(Vs, t)
      , [i,s] = x.useState(!1)
      , [l,a] = x.useState(!1);
    return _0( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : p.jsx(Lh, {
        asChild: !0,
        children: p.jsx(Bs, {
            ...r,
            children: i && p.jsxs(p.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , O0 = "ToastTitle"
  , Uh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(He.div, {
        ...r,
        ref: t
    })
}
);
Uh.displayName = O0;
var M0 = "ToastDescription"
  , Vh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(He.div, {
        ...r,
        ref: t
    })
}
);
Vh.displayName = M0;
var Hh = "ToastAction"
  , Wh = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? p.jsx(Kh, {
        altText: n,
        asChild: !0,
        children: p.jsx(Ku, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Hh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Wh.displayName = Hh;
var Qh = "ToastClose"
  , Ku = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = j0(Qh, n);
    return p.jsx(Kh, {
        asChild: !0,
        children: p.jsx(He.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ge(e.onClick, o.onClose)
        })
    })
}
);
Ku.displayName = Qh;
var Kh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return p.jsx(He.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Gh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        L0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Gh(r))
        }
    }
    ),
    t
}
function Ti(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Ah(o, i) : o.dispatchEvent(i)
}
var kd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function _0(e= () => {}
) {
    const t = Ot(e);
    Zn( () => {
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
function L0(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function I0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Ml(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var D0 = Dh
  , Yh = Fh
  , qh = Bh
  , Xh = Uh
  , Zh = Vh
  , Jh = Wh
  , em = Ku;
function tm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = tm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function nm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = tm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Nd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Pd = nm
  , Gu = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Pd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const c = Nd(d) || Nd(f);
        return o[u][c]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[f,c] = d;
        return c === void 0 || (u[f] = c),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: c, ...y} = d;
        return Object.entries(y).every(w => {
            let[g,S] = w;
            return Array.isArray(S) ? S.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === S
        }
        ) ? [...u, f, c] : u
    }
    , []);
    return Pd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , rm = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var F0 = {
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
const $0 = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => x.createElement("svg", {
    ref: a,
    ...F0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: rm("lucide", o),
    ...l
}, [...s.map( ([u,d]) => x.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement($0, {
        ref: i,
        iconNode: t,
        className: rm(`lucide-${z0(e)}`, r),
        ...o
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
const B0 = be("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = be("Brain", [["path", {
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
const V0 = be("Calculator", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    key: "1nb95v"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "6",
    y2: "6",
    key: "x4nwl0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "14",
    y2: "18",
    key: "wjye3r"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}], ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = be("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = be("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = be("ExternalLink", [["path", {
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
const La = be("Github", [["path", {
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
const om = be("Globe", [["circle", {
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
const K0 = be("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = be("Lightbulb", [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = be("Linkedin", [["path", {
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
const Y0 = be("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = be("Send", [["path", {
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
const X0 = be("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = be("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = be("X", [["path", {
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
const ex = be("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Yu = "-"
  , tx = e => {
    const t = rx(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Yu);
            return l[0] === "" && l.length !== 1 && l.shift(),
            sm(l, t) || nx(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , sm = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? sm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Yu);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , Td = /^\[(.+)\]$/
  , nx = e => {
    if (Td.test(e)) {
        const t = Td.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , rx = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return ix(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Ia(s, r, i, t)
    }
    ),
    r
}
  , Ia = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : jd(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (ox(o)) {
                Ia(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Ia(s, jd(t, i), n, r)
        }
        )
    }
    )
}
  , jd = (e, t) => {
    let n = e;
    return t.split(Yu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , ox = e => e.isThemeGetter
  , ix = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , sx = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , lm = "!"
  , lx = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, d = 0, f;
        for (let S = 0; S < l.length; S++) {
            let m = l[S];
            if (u === 0) {
                if (m === o && (r || l.slice(S, S + i) === t)) {
                    a.push(l.slice(d, S)),
                    d = S + i;
                    continue
                }
                if (m === "/") {
                    f = S;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const c = a.length === 0 ? l : l.substring(d)
          , y = c.startsWith(lm)
          , w = y ? c.substring(1) : c
          , g = f && f > d ? f - d : void 0;
        return {
            modifiers: a,
            hasImportantModifier: y,
            baseClassName: w,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , ax = e => {
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
  , ux = e => ({
    cache: sx(e.cacheSize),
    parseClassName: lx(e),
    ...tx(e)
})
  , cx = /\s+/
  , dx = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(cx);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: d, hasImportantModifier: f, baseClassName: c, maybePostfixModifierPosition: y} = n(u);
        let w = !!y
          , g = r(w ? c.substring(0, y) : c);
        if (!g) {
            if (!w) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(c),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            w = !1
        }
        const S = ax(d).join(":")
          , m = f ? S + lm : S
          , h = m + g;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(g, w);
        for (let E = 0; E < v.length; ++E) {
            const C = v[E];
            i.push(m + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function fx() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = am(t)) && (r && (r += " "),
        r += n);
    return r
}
const am = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = am(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function px(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = ux(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const d = dx(a, n);
        return o(a, d),
        d
    }
    return function() {
        return i(fx.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , um = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , hx = /^\d+\/\d+$/
  , mx = new Set(["px", "full", "screen"])
  , gx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , vx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , yx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , xx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , wx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Lt = e => kr(e) || mx.has(e) || hx.test(e)
  , tn = e => Yr(e, "length", Tx)
  , kr = e => !!e && !Number.isNaN(Number(e))
  , _l = e => Yr(e, "number", kr)
  , lo = e => !!e && Number.isInteger(Number(e))
  , Sx = e => e.endsWith("%") && kr(e.slice(0, -1))
  , V = e => um.test(e)
  , nn = e => gx.test(e)
  , Ex = new Set(["length", "size", "percentage"])
  , Cx = e => Yr(e, Ex, cm)
  , bx = e => Yr(e, "position", cm)
  , kx = new Set(["image", "url"])
  , Nx = e => Yr(e, kx, Rx)
  , Px = e => Yr(e, "", jx)
  , ao = () => !0
  , Yr = (e, t, n) => {
    const r = um.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Tx = e => vx.test(e) && !yx.test(e)
  , cm = () => !1
  , jx = e => xx.test(e)
  , Rx = e => wx.test(e)
  , Ax = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , d = re("hueRotate")
      , f = re("invert")
      , c = re("gap")
      , y = re("gradientColorStops")
      , w = re("gradientColorStopPositions")
      , g = re("inset")
      , S = re("margin")
      , m = re("opacity")
      , h = re("padding")
      , v = re("saturate")
      , E = re("scale")
      , C = re("sepia")
      , k = re("skew")
      , N = re("space")
      , T = re("translate")
      , I = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", V, t]
      , D = () => [V, t]
      , W = () => ["", Lt, tn]
      , M = () => ["auto", kr, V]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , b = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", V]
      , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , L = () => [kr, V];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ao],
            spacing: [Lt, tn],
            blur: ["none", "", nn, V],
            brightness: L(),
            borderColor: [e],
            borderRadius: ["none", "", "full", nn, V],
            borderSpacing: D(),
            borderWidth: W(),
            contrast: L(),
            grayscale: R(),
            hueRotate: L(),
            invert: R(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Sx, tn],
            inset: $(),
            margin: $(),
            opacity: L(),
            padding: D(),
            saturate: L(),
            scale: L(),
            sepia: R(),
            skew: L(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", V]
            }],
            container: ["container"],
            columns: [{
                columns: [nn]
            }],
            "break-after": [{
                "break-after": z()
            }],
            "break-before": [{
                "break-before": z()
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
                object: [...Q(), V]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: I()
            }],
            "overscroll-x": [{
                "overscroll-x": I()
            }],
            "overscroll-y": [{
                "overscroll-y": I()
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
                z: ["auto", lo, V]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", V]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", lo, V]
            }],
            "grid-cols": [{
                "grid-cols": [ao]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", lo, V]
                }, V]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [ao]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [lo, V]
                }, V]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", V]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", V]
            }],
            gap: [{
                gap: [c]
            }],
            "gap-x": [{
                "gap-x": [c]
            }],
            "gap-y": [{
                "gap-y": [c]
            }],
            "justify-content": [{
                justify: ["normal", ...b()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...b(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...b(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
            }],
            "min-w": [{
                "min-w": [V, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [nn]
                }, nn]
            }],
            h: [{
                h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [V, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", nn, tn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _l]
            }],
            "font-family": [{
                font: [ao]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
            }],
            "line-clamp": [{
                "line-clamp": ["none", kr, _l]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, V]
            }],
            "list-image": [{
                "list-image": ["none", V]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", V]
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
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Lt, tn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Lt, V]
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
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
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
                content: ["none", V]
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
                bg: [...Q(), bx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Cx]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Nx]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [Lt, V]
            }],
            "outline-w": [{
                outline: [Lt, tn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Lt, tn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", nn, Px]
            }],
            "shadow-color": [{
                shadow: [ao]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
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
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", nn, V]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [v]
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
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
            }],
            duration: [{
                duration: L()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", V]
            }],
            delay: [{
                delay: L()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", V]
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
                rotate: [lo, V]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
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
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
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
                "will-change": ["auto", "scroll", "contents", "transform", V]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Lt, tn, _l]
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
  , Ox = px(Ax);
function ke(...e) {
    return Ox(nm(e))
}
const Mx = D0
  , dm = x.forwardRef( ({className: e, ...t}, n) => p.jsx(Yh, {
    ref: n,
    className: ke("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
dm.displayName = Yh.displayName;
const _x = Gu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
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
  , fm = x.forwardRef( ({className: e, variant: t, ...n}, r) => p.jsx(qh, {
    ref: r,
    className: ke(_x({
        variant: t
    }), e),
    ...n
}));
fm.displayName = qh.displayName;
const Lx = x.forwardRef( ({className: e, ...t}, n) => p.jsx(Jh, {
    ref: n,
    className: ke("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Lx.displayName = Jh.displayName;
const pm = x.forwardRef( ({className: e, ...t}, n) => p.jsx(em, {
    ref: n,
    className: ke("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: p.jsx(J0, {
        className: "h-4 w-4"
    })
}));
pm.displayName = em.displayName;
const hm = x.forwardRef( ({className: e, ...t}, n) => p.jsx(Xh, {
    ref: n,
    className: ke("text-sm font-semibold", e),
    ...t
}));
hm.displayName = Xh.displayName;
const mm = x.forwardRef( ({className: e, ...t}, n) => p.jsx(Zh, {
    ref: n,
    className: ke("text-sm opacity-90", e),
    ...t
}));
mm.displayName = Zh.displayName;
function Ix() {
    const {toasts: e} = Ky();
    return p.jsxs(Mx, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return p.jsxs(fm, {
                ...i,
                children: [p.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && p.jsx(hm, {
                        children: n
                    }), r && p.jsx(mm, {
                        children: r
                    })]
                }), o, p.jsx(pm, {})]
            }, t)
        }), p.jsx(dm, {})]
    })
}
var Rd = ["light", "dark"]
  , Dx = "(prefers-color-scheme: dark)"
  , zx = x.createContext(void 0)
  , Fx = {
    setTheme: e => {}
    ,
    themes: []
}
  , $x = () => {
    var e;
    return (e = x.useContext(zx)) != null ? e : Fx
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Rd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , c = (w, g=!1, S=!0) => {
        let m = s ? s[w] : w
          , h = g ? w + "|| ''" : `'${m}'`
          , v = "";
        return o && S && !g && Rd.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        n === "class" ? g || m ? v += `c.add(${h})` : v += "null" : m && (v += `d[s](n,${h})`),
        v
    }
      , y = e ? `!function(){${d}${c(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Dx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
}
);
var Bx = e => {
    switch (e) {
    case "success":
        return Hx;
    case "info":
        return Qx;
    case "warning":
        return Wx;
    case "error":
        return Kx;
    default:
        return null
    }
}
  , Ux = Array(12).fill(0)
  , Vx = ({visible: e}) => A.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, A.createElement("div", {
    className: "sonner-spinner"
}, Ux.map( (t, n) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , Hx = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Wx = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Qx = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Kx = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Gx = () => {
    let[e,t] = A.useState(document.hidden);
    return A.useEffect( () => {
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
  , Da = 1
  , Yx = class {
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
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Da++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
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
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async i => {
                if (Xx(i) && !i.ok) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let s = typeof t.success == "function" ? await t.success(i) : t.success
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(i) : t.error
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(n),
                n = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Da++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , Ke = new Yx
  , qx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Da++;
    return Ke.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Xx = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Zx = qx
  , Jx = () => Ke.toasts;
Object.assign(Zx, {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading
}, {
    getHistory: Jx
});
function e1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
e1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ji(e) {
    return e.label !== void 0
}
var t1 = 3
  , n1 = "32px"
  , r1 = 4e3
  , o1 = 356
  , i1 = 14
  , s1 = 20
  , l1 = 200;
function a1(...e) {
    return e.filter(Boolean).join(" ")
}
var u1 = e => {
    var t, n, r, o, i, s, l, a, u, d;
    let {invert: f, toast: c, unstyled: y, interacting: w, setHeights: g, visibleToasts: S, heights: m, index: h, toasts: v, expanded: E, removeToast: C, defaultRichColors: k, closeButton: N, style: T, cancelButtonStyle: I, actionButtonStyle: O, className: $="", descriptionClassName: D="", duration: W, position: M, gap: Q, loadingIcon: B, expandByDefault: K, classNames: b, icons: R, closeButtonAriaLabel: z="Close toast", pauseWhenPageIsHidden: L, cn: F} = e
      , [Y,le] = A.useState(!1)
      , [We,Z] = A.useState(!1)
      , [ut,Yt] = A.useState(!1)
      , [qt,Xt] = A.useState(!1)
      , [ii,nr] = A.useState(0)
      , [_n,Zr] = A.useState(0)
      , si = A.useRef(null)
      , Zt = A.useRef(null)
      , el = h === 0
      , tl = h + 1 <= S
      , we = c.type
      , rr = c.dismissible !== !1
      , ag = c.className || ""
      , ug = c.descriptionClassName || ""
      , li = A.useMemo( () => m.findIndex(U => U.toastId === c.id) || 0, [m, c.id])
      , cg = A.useMemo( () => {
        var U;
        return (U = c.closeButton) != null ? U : N
    }
    , [c.closeButton, N])
      , lc = A.useMemo( () => c.duration || W || r1, [c.duration, W])
      , nl = A.useRef(0)
      , or = A.useRef(0)
      , ac = A.useRef(0)
      , ir = A.useRef(null)
      , [uc,dg] = M.split("-")
      , cc = A.useMemo( () => m.reduce( (U, ne, ee) => ee >= li ? U : U + ne.height, 0), [m, li])
      , dc = Gx()
      , fg = c.invert || f
      , rl = we === "loading";
    or.current = A.useMemo( () => li * Q + cc, [li, cc]),
    A.useEffect( () => {
        le(!0)
    }
    , []),
    A.useLayoutEffect( () => {
        if (!Y)
            return;
        let U = Zt.current
          , ne = U.style.height;
        U.style.height = "auto";
        let ee = U.getBoundingClientRect().height;
        U.style.height = ne,
        Zr(ee),
        g(Et => Et.find(Ct => Ct.toastId === c.id) ? Et.map(Ct => Ct.toastId === c.id ? {
            ...Ct,
            height: ee
        } : Ct) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...Et])
    }
    , [Y, c.title, c.description, g, c.id]);
    let Jt = A.useCallback( () => {
        Z(!0),
        nr(or.current),
        g(U => U.filter(ne => ne.toastId !== c.id)),
        setTimeout( () => {
            C(c)
        }
        , l1)
    }
    , [c, C, g, or]);
    A.useEffect( () => {
        if (c.promise && we === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let U, ne = lc;
        return E || w || L && dc ? ( () => {
            if (ac.current < nl.current) {
                let ee = new Date().getTime() - nl.current;
                ne = ne - ee
            }
            ac.current = new Date().getTime()
        }
        )() : ne !== 1 / 0 && (nl.current = new Date().getTime(),
        U = setTimeout( () => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c),
            Jt()
        }
        , ne)),
        () => clearTimeout(U)
    }
    , [E, w, K, c, lc, Jt, c.promise, we, L, dc]),
    A.useEffect( () => {
        let U = Zt.current;
        if (U) {
            let ne = U.getBoundingClientRect().height;
            return Zr(ne),
            g(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]),
            () => g(ee => ee.filter(Et => Et.toastId !== c.id))
        }
    }
    , [g, c.id]),
    A.useEffect( () => {
        c.delete && Jt()
    }
    , [Jt, c.delete]);
    function pg() {
        return R != null && R.loading ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": we === "loading"
        }, R.loading) : B ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": we === "loading"
        }, B) : A.createElement(Vx, {
            visible: we === "loading"
        })
    }
    return A.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Zt,
        className: F($, ag, b == null ? void 0 : b.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, b == null ? void 0 : b.default, b == null ? void 0 : b[we], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[we]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : k,
        "data-styled": !(c.jsx || c.unstyled || y),
        "data-mounted": Y,
        "data-promise": !!c.promise,
        "data-removed": We,
        "data-visible": tl,
        "data-y-position": uc,
        "data-x-position": dg,
        "data-index": h,
        "data-front": el,
        "data-swiping": ut,
        "data-dismissible": rr,
        "data-type": we,
        "data-invert": fg,
        "data-swipe-out": qt,
        "data-expanded": !!(E || K && Y),
        style: {
            "--index": h,
            "--toasts-before": h,
            "--z-index": v.length - h,
            "--offset": `${We ? ii : or.current}px`,
            "--initial-height": K ? "auto" : `${_n}px`,
            ...T,
            ...c.style
        },
        onPointerDown: U => {
            rl || !rr || (si.current = new Date,
            nr(or.current),
            U.target.setPointerCapture(U.pointerId),
            U.target.tagName !== "BUTTON" && (Yt(!0),
            ir.current = {
                x: U.clientX,
                y: U.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var U, ne, ee, Et;
            if (qt || !rr)
                return;
            ir.current = null;
            let Ct = Number(((U = Zt.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , ai = new Date().getTime() - ((ne = si.current) == null ? void 0 : ne.getTime())
              , hg = Math.abs(Ct) / ai;
            if (Math.abs(Ct) >= s1 || hg > .11) {
                nr(or.current),
                (ee = c.onDismiss) == null || ee.call(c, c),
                Jt(),
                Xt(!0);
                return
            }
            (Et = Zt.current) == null || Et.style.setProperty("--swipe-amount", "0px"),
            Yt(!1)
        }
        ,
        onPointerMove: U => {
            var ne;
            if (!ir.current || !rr)
                return;
            let ee = U.clientY - ir.current.y
              , Et = U.clientX - ir.current.x
              , Ct = (uc === "top" ? Math.min : Math.max)(0, ee)
              , ai = U.pointerType === "touch" ? 10 : 2;
            Math.abs(Ct) > ai ? (ne = Zt.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(Et) > ai && (ir.current = null)
        }
    }, cg && !c.jsx ? A.createElement("button", {
        "aria-label": z,
        "data-disabled": rl,
        "data-close-button": !0,
        onClick: rl || !rr ? () => {}
        : () => {
            var U;
            Jt(),
            (U = c.onDismiss) == null || U.call(c, c)
        }
        ,
        className: F(b == null ? void 0 : b.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || A.isValidElement(c.title) ? c.jsx || c.title : A.createElement(A.Fragment, null, we || c.icon || c.promise ? A.createElement("div", {
        "data-icon": "",
        className: F(b == null ? void 0 : b.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || pg() : null, c.type !== "loading" ? c.icon || (R == null ? void 0 : R[we]) || Bx(we) : null) : null, A.createElement("div", {
        "data-content": "",
        className: F(b == null ? void 0 : b.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, A.createElement("div", {
        "data-title": "",
        className: F(b == null ? void 0 : b.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? A.createElement("div", {
        "data-description": "",
        className: F(D, ug, b == null ? void 0 : b.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), A.isValidElement(c.cancel) ? c.cancel : c.cancel && ji(c.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || I,
        onClick: U => {
            var ne, ee;
            ji(c.cancel) && rr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, U),
            Jt())
        }
        ,
        className: F(b == null ? void 0 : b.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, A.isValidElement(c.action) ? c.action : c.action && ji(c.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || O,
        onClick: U => {
            var ne, ee;
            ji(c.action) && (U.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, U),
            Jt()))
        }
        ,
        className: F(b == null ? void 0 : b.actionButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton)
    }, c.action.label) : null))
}
;
function Ad() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var c1 = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: i, className: s, offset: l, theme: a="light", richColors: u, duration: d, style: f, visibleToasts: c=t1, toastOptions: y, dir: w=Ad(), gap: g=i1, loadingIcon: S, icons: m, containerAriaLabel: h="Notifications", pauseWhenPageIsHidden: v, cn: E=a1} = e
      , [C,k] = A.useState([])
      , N = A.useMemo( () => Array.from(new Set([n].concat(C.filter(L => L.position).map(L => L.position)))), [C, n])
      , [T,I] = A.useState([])
      , [O,$] = A.useState(!1)
      , [D,W] = A.useState(!1)
      , [M,Q] = A.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , B = A.useRef(null)
      , K = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = A.useRef(null)
      , R = A.useRef(!1)
      , z = A.useCallback(L => {
        var F;
        (F = C.find(Y => Y.id === L.id)) != null && F.delete || Ke.dismiss(L.id),
        k(Y => Y.filter( ({id: le}) => le !== L.id))
    }
    , [C]);
    return A.useEffect( () => Ke.subscribe(L => {
        if (L.dismiss) {
            k(F => F.map(Y => Y.id === L.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            Nh.flushSync( () => {
                k(F => {
                    let Y = F.findIndex(le => le.id === L.id);
                    return Y !== -1 ? [...F.slice(0, Y), {
                        ...F[Y],
                        ...L
                    }, ...F.slice(Y + 1)] : [L, ...F]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: L}) => {
            Q(L ? "dark" : "light")
        }
        )
    }
    , [a]),
    A.useEffect( () => {
        C.length <= 1 && $(!1)
    }
    , [C]),
    A.useEffect( () => {
        let L = F => {
            var Y, le;
            r.every(We => F[We] || F.code === We) && ($(!0),
            (Y = B.current) == null || Y.focus()),
            F.code === "Escape" && (document.activeElement === B.current || (le = B.current) != null && le.contains(document.activeElement)) && $(!1)
        }
        ;
        return document.addEventListener("keydown", L),
        () => document.removeEventListener("keydown", L)
    }
    , [r]),
    A.useEffect( () => {
        if (B.current)
            return () => {
                b.current && (b.current.focus({
                    preventScroll: !0
                }),
                b.current = null,
                R.current = !1)
            }
    }
    , [B.current]),
    C.length ? A.createElement("section", {
        "aria-label": `${h} ${K}`,
        tabIndex: -1
    }, N.map( (L, F) => {
        var Y;
        let[le,We] = L.split("-");
        return A.createElement("ol", {
            key: L,
            dir: w === "auto" ? Ad() : w,
            tabIndex: -1,
            ref: B,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": M,
            "data-y-position": le,
            "data-x-position": We,
            style: {
                "--front-toast-height": `${((Y = T[0]) == null ? void 0 : Y.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || n1,
                "--width": `${o1}px`,
                "--gap": `${g}px`,
                ...f
            },
            onBlur: Z => {
                R.current && !Z.currentTarget.contains(Z.relatedTarget) && (R.current = !1,
                b.current && (b.current.focus({
                    preventScroll: !0
                }),
                b.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || R.current || (R.current = !0,
                b.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                D || $(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || W(!0)
            }
            ,
            onPointerUp: () => W(!1)
        }, C.filter(Z => !Z.position && F === 0 || Z.position === L).map( (Z, ut) => {
            var Yt, qt;
            return A.createElement(u1, {
                key: Z.id,
                icons: m,
                index: ut,
                toast: Z,
                defaultRichColors: u,
                duration: (Yt = y == null ? void 0 : y.duration) != null ? Yt : d,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (qt = y == null ? void 0 : y.closeButton) != null ? qt : i,
                interacting: D,
                position: L,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: z,
                toasts: C.filter(Xt => Xt.position == Z.position),
                heights: T.filter(Xt => Xt.position == Z.position),
                setHeights: I,
                expandByDefault: o,
                gap: g,
                loadingIcon: S,
                expanded: O,
                pauseWhenPageIsHidden: v,
                cn: E
            })
        }
        ))
    }
    )) : null
}
;
const d1 = ({...e}) => {
    const {theme: t="system"} = $x();
    return p.jsx(c1, {
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
  , f1 = ["top", "right", "bottom", "left"]
  , Pn = Math.min
  , Ye = Math.max
  , ys = Math.round
  , Ri = Math.floor
  , Tn = e => ({
    x: e,
    y: e
})
  , p1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , h1 = {
    start: "end",
    end: "start"
};
function za(e, t, n) {
    return Ye(e, Pn(t, n))
}
function Qt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kt(e) {
    return e.split("-")[0]
}
function qr(e) {
    return e.split("-")[1]
}
function qu(e) {
    return e === "x" ? "y" : "x"
}
function Xu(e) {
    return e === "y" ? "height" : "width"
}
function jn(e) {
    return ["top", "bottom"].includes(Kt(e)) ? "y" : "x"
}
function Zu(e) {
    return qu(jn(e))
}
function m1(e, t, n) {
    n === void 0 && (n = !1);
    const r = qr(e)
      , o = Zu(e)
      , i = Xu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = xs(s)),
    [s, xs(s)]
}
function g1(e) {
    const t = xs(e);
    return [Fa(e), t, Fa(t)]
}
function Fa(e) {
    return e.replace(/start|end/g, t => h1[t])
}
function v1(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function y1(e, t, n, r) {
    const o = qr(e);
    let i = v1(Kt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Fa)))),
    i
}
function xs(e) {
    return e.replace(/left|right|bottom|top/g, t => p1[t])
}
function x1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function gm(e) {
    return typeof e != "number" ? x1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ws(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Od(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = jn(t)
      , s = Zu(t)
      , l = Xu(s)
      , a = Kt(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , c = r[l] / 2 - o[l] / 2;
    let y;
    switch (a) {
    case "top":
        y = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        y = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        y = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        y = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        y = {
            x: r.x,
            y: r.y
        }
    }
    switch (qr(t)) {
    case "start":
        y[s] -= c * (n && u ? -1 : 1);
        break;
    case "end":
        y[s] += c * (n && u ? -1 : 1);
        break
    }
    return y
}
const w1 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = Od(u, r, a)
      , c = r
      , y = {}
      , w = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: S, fn: m} = l[g]
          , {x: h, y: v, data: E, reset: C} = await m({
            x: d,
            y: f,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: y,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = v ?? f,
        y = {
            ...y,
            [S]: {
                ...y[S],
                ...E
            }
        },
        C && w <= 50 && (w++,
        typeof C == "object" && (C.placement && (c = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = Od(u, c, a)),
        g = -1)
    }
    return {
        x: d,
        y: f,
        placement: c,
        strategy: o,
        middlewareData: y
    }
}
;
async function Qo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: c=!1, padding: y=0} = Qt(t, e)
      , w = gm(y)
      , S = l[c ? f === "floating" ? "reference" : "floating" : f]
      , m = ws(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , E = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = ws(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (m.top - C.top + w.top) / E.y,
        bottom: (C.bottom - m.bottom + w.bottom) / E.y,
        left: (m.left - C.left + w.left) / E.x,
        right: (C.right - m.right + w.right) / E.x
    }
}
const S1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: d=0} = Qt(e, t) || {};
        if (u == null)
            return {};
        const f = gm(d)
          , c = {
            x: n,
            y: r
        }
          , y = Zu(o)
          , w = Xu(y)
          , g = await s.getDimensions(u)
          , S = y === "y"
          , m = S ? "top" : "left"
          , h = S ? "bottom" : "right"
          , v = S ? "clientHeight" : "clientWidth"
          , E = i.reference[w] + i.reference[y] - c[y] - i.floating[w]
          , C = c[y] - i.reference[y]
          , k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let N = k ? k[v] : 0;
        (!N || !await (s.isElement == null ? void 0 : s.isElement(k))) && (N = l.floating[v] || i.floating[w]);
        const T = E / 2 - C / 2
          , I = N / 2 - g[w] / 2 - 1
          , O = Pn(f[m], I)
          , $ = Pn(f[h], I)
          , D = O
          , W = N - g[w] - $
          , M = N / 2 - g[w] / 2 + T
          , Q = za(D, M, W)
          , B = !a.arrow && qr(o) != null && M !== Q && i.reference[w] / 2 - (M < D ? O : $) - g[w] / 2 < 0
          , K = B ? M < D ? M - D : M - W : 0;
        return {
            [y]: c[y] + K,
            data: {
                [y]: Q,
                centerOffset: M - Q - K,
                ...B && {
                    alignmentOffset: K
                }
            },
            reset: B
        }
    }
})
  , E1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: c, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: g=!0, ...S} = Qt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = Kt(o)
              , h = jn(l)
              , v = Kt(l) === l
              , E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , C = c || (v || !g ? [xs(l)] : g1(l))
              , k = w !== "none";
            !c && k && C.push(...y1(l, g, w, E));
            const N = [l, ...C]
              , T = await Qo(t, S)
              , I = [];
            let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && I.push(T[m]),
            f) {
                const M = m1(o, s, E);
                I.push(T[M[0]], T[M[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: I
            }],
            !I.every(M => M <= 0)) {
                var $, D;
                const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , Q = N[M];
                if (Q)
                    return {
                        data: {
                            index: M,
                            overflows: O
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let B = (D = O.filter(K => K.overflows[0] <= 0).sort( (K, b) => K.overflows[1] - b.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!B)
                    switch (y) {
                    case "bestFit":
                        {
                            var W;
                            const K = (W = O.filter(b => {
                                if (k) {
                                    const R = jn(b.placement);
                                    return R === h || R === "y"
                                }
                                return !0
                            }
                            ).map(b => [b.placement, b.overflows.filter(R => R > 0).reduce( (R, z) => R + z, 0)]).sort( (b, R) => b[1] - R[1])[0]) == null ? void 0 : W[0];
                            K && (B = K);
                            break
                        }
                    case "initialPlacement":
                        B = l;
                        break
                    }
                if (o !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function Md(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function _d(e) {
    return f1.some(t => e[t] >= 0)
}
const C1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Qt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Qo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Md(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: _d(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Qo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Md(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: _d(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function b1(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Kt(n)
      , l = qr(n)
      , a = jn(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , d = i && a ? -1 : 1
      , f = Qt(t, e);
    let {mainAxis: c, crossAxis: y, alignmentAxis: w} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof w == "number" && (y = l === "end" ? w * -1 : w),
    a ? {
        x: y * d,
        y: c * u
    } : {
        x: c * u,
        y: y * d
    }
}
const k1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await b1(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , N1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: S => {
                    let {x: m, y: h} = S;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...a} = Qt(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await Qo(t, a)
              , f = jn(Kt(o))
              , c = qu(f);
            let y = u[c]
              , w = u[f];
            if (i) {
                const S = c === "y" ? "top" : "left"
                  , m = c === "y" ? "bottom" : "right"
                  , h = y + d[S]
                  , v = y - d[m];
                y = za(h, y, v)
            }
            if (s) {
                const S = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , h = w + d[S]
                  , v = w - d[m];
                w = za(h, w, v)
            }
            const g = l.fn({
                ...t,
                [c]: y,
                [f]: w
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [c]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , P1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Qt(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = jn(o)
              , c = qu(f);
            let y = d[c]
              , w = d[f];
            const g = Qt(l, t)
              , S = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const v = c === "y" ? "height" : "width"
                  , E = i.reference[c] - i.floating[v] + S.mainAxis
                  , C = i.reference[c] + i.reference[v] - S.mainAxis;
                y < E ? y = E : y > C && (y = C)
            }
            if (u) {
                var m, h;
                const v = c === "y" ? "width" : "height"
                  , E = ["top", "left"].includes(Kt(o))
                  , C = i.reference[f] - i.floating[v] + (E && ((m = s.offset) == null ? void 0 : m[f]) || 0) + (E ? 0 : S.crossAxis)
                  , k = i.reference[f] + i.reference[v] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) - (E ? S.crossAxis : 0);
                w < C ? w = C : w > k && (w = k)
            }
            return {
                [c]: y,
                [f]: w
            }
        }
    }
}
  , T1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Qt(e, t)
              , d = await Qo(t, u)
              , f = Kt(o)
              , c = qr(o)
              , y = jn(o) === "y"
              , {width: w, height: g} = i.floating;
            let S, m;
            f === "top" || f === "bottom" ? (S = f,
            m = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = f,
            S = c === "end" ? "top" : "bottom");
            const h = g - d.top - d.bottom
              , v = w - d.left - d.right
              , E = Pn(g - d[S], h)
              , C = Pn(w - d[m], v)
              , k = !t.middlewareData.shift;
            let N = E
              , T = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            k && !c) {
                const O = Ye(d.left, 0)
                  , $ = Ye(d.right, 0)
                  , D = Ye(d.top, 0)
                  , W = Ye(d.bottom, 0);
                y ? T = w - 2 * (O !== 0 || $ !== 0 ? O + $ : Ye(d.left, d.right)) : N = g - 2 * (D !== 0 || W !== 0 ? D + W : Ye(d.top, d.bottom))
            }
            await a({
                ...t,
                availableWidth: T,
                availableHeight: N
            });
            const I = await s.getDimensions(l.floating);
            return w !== I.width || g !== I.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Hs() {
    return typeof window < "u"
}
function Xr(e) {
    return vm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function _t(e) {
    var t;
    return (t = (vm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function vm(e) {
    return Hs() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function wt(e) {
    return Hs() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function Mt(e) {
    return Hs() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Ld(e) {
    return !Hs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
function oi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = St(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function j1(e) {
    return ["table", "td", "th"].includes(Xr(e))
}
function Ws(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Ju(e) {
    const t = ec()
      , n = wt(e) ? St(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function R1(e) {
    let t = Rn(e);
    for (; Mt(t) && !Hr(t); ) {
        if (Ju(t))
            return t;
        if (Ws(t))
            return null;
        t = Rn(t)
    }
    return null
}
function ec() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Hr(e) {
    return ["html", "body", "#document"].includes(Xr(e))
}
function St(e) {
    return Ze(e).getComputedStyle(e)
}
function Qs(e) {
    return wt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Rn(e) {
    if (Xr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Ld(e) && e.host || _t(e);
    return Ld(t) ? t.host : t
}
function ym(e) {
    const t = Rn(e);
    return Hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mt(t) && oi(t) ? t : ym(t)
}
function Ko(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = ym(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Ze(o);
    if (i) {
        const l = $a(s);
        return t.concat(s, s.visualViewport || [], oi(o) ? o : [], l && n ? Ko(l) : [])
    }
    return t.concat(o, Ko(o, [], n))
}
function $a(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function xm(e) {
    const t = St(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Mt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = ys(n) !== i || ys(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function tc(e) {
    return wt(e) ? e : e.contextElement
}
function Nr(e) {
    const t = tc(e);
    if (!Mt(t))
        return Tn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = xm(t);
    let s = (i ? ys(n.width) : n.width) / r
      , l = (i ? ys(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const A1 = Tn(0);
function wm(e) {
    const t = Ze(e);
    return !ec() || !t.visualViewport ? A1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function O1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function Jn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = tc(e);
    let s = Tn(1);
    t && (r ? wt(r) && (s = Nr(r)) : s = Nr(e));
    const l = O1(i, n, r) ? wm(i) : Tn(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , d = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const c = Ze(i)
          , y = r && wt(r) ? Ze(r) : r;
        let w = c
          , g = $a(w);
        for (; g && r && y !== w; ) {
            const S = Nr(g)
              , m = g.getBoundingClientRect()
              , h = St(g)
              , v = m.left + (g.clientLeft + parseFloat(h.paddingLeft)) * S.x
              , E = m.top + (g.clientTop + parseFloat(h.paddingTop)) * S.y;
            a *= S.x,
            u *= S.y,
            d *= S.x,
            f *= S.y,
            a += v,
            u += E,
            w = Ze(g),
            g = $a(w)
        }
    }
    return ws({
        width: d,
        height: f,
        x: a,
        y: u
    })
}
function M1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = _t(r)
      , l = t ? Ws(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Tn(1);
    const d = Tn(0)
      , f = Mt(r);
    if ((f || !f && !i) && ((Xr(r) !== "body" || oi(s)) && (a = Qs(r)),
    Mt(r))) {
        const c = Jn(r);
        u = Nr(r),
        d.x = c.x + r.clientLeft,
        d.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y
    }
}
function _1(e) {
    return Array.from(e.getClientRects())
}
function Ba(e, t) {
    const n = Qs(e).scrollLeft;
    return t ? t.left + n : Jn(_t(e)).left + n
}
function L1(e) {
    const t = _t(e)
      , n = Qs(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Ba(e);
    const l = -n.scrollTop;
    return St(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function I1(e, t) {
    const n = Ze(e)
      , r = _t(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = ec();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function D1(e, t) {
    const n = Jn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Mt(e) ? Nr(e) : Tn(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Id(e, t, n) {
    let r;
    if (t === "viewport")
        r = I1(e, n);
    else if (t === "document")
        r = L1(_t(e));
    else if (wt(t))
        r = D1(t, n);
    else {
        const o = wm(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ws(r)
}
function Sm(e, t) {
    const n = Rn(e);
    return n === t || !wt(n) || Hr(n) ? !1 : St(n).position === "fixed" || Sm(n, t)
}
function z1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ko(e, [], !1).filter(l => wt(l) && Xr(l) !== "body")
      , o = null;
    const i = St(e).position === "fixed";
    let s = i ? Rn(e) : e;
    for (; wt(s) && !Hr(s); ) {
        const l = St(s)
          , a = Ju(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || oi(s) && !a && Sm(e, s)) ? r = r.filter(d => d !== s) : o = l,
        s = Rn(s)
    }
    return t.set(e, r),
    r
}
function F1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? Ws(t) ? [] : z1(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, d) => {
        const f = Id(t, d, o);
        return u.top = Ye(f.top, u.top),
        u.right = Pn(f.right, u.right),
        u.bottom = Pn(f.bottom, u.bottom),
        u.left = Ye(f.left, u.left),
        u
    }
    , Id(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function $1(e) {
    const {width: t, height: n} = xm(e);
    return {
        width: t,
        height: n
    }
}
function B1(e, t, n) {
    const r = Mt(t)
      , o = _t(t)
      , i = n === "fixed"
      , s = Jn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Tn(0);
    if (r || !r && !i)
        if ((Xr(t) !== "body" || oi(o)) && (l = Qs(t)),
        r) {
            const y = Jn(t, !0, i, t);
            a.x = y.x + t.clientLeft,
            a.y = y.y + t.clientTop
        } else
            o && (a.x = Ba(o));
    let u = 0
      , d = 0;
    if (o && !r && !i) {
        const y = o.getBoundingClientRect();
        d = y.top + l.scrollTop,
        u = y.left + l.scrollLeft - Ba(o, y)
    }
    const f = s.left + l.scrollLeft - a.x - u
      , c = s.top + l.scrollTop - a.y - d;
    return {
        x: f,
        y: c,
        width: s.width,
        height: s.height
    }
}
function Ll(e) {
    return St(e).position === "static"
}
function Dd(e, t) {
    if (!Mt(e) || St(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return _t(e) === n && (n = n.ownerDocument.body),
    n
}
function Em(e, t) {
    const n = Ze(e);
    if (Ws(e))
        return n;
    if (!Mt(e)) {
        let o = Rn(e);
        for (; o && !Hr(o); ) {
            if (wt(o) && !Ll(o))
                return o;
            o = Rn(o)
        }
        return n
    }
    let r = Dd(e, t);
    for (; r && j1(r) && Ll(r); )
        r = Dd(r, t);
    return r && Hr(r) && Ll(r) && !Ju(r) ? n : r || R1(e) || n
}
const U1 = async function(e) {
    const t = this.getOffsetParent || Em
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: B1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function V1(e) {
    return St(e).direction === "rtl"
}
const H1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: M1,
    getDocumentElement: _t,
    getClippingRect: F1,
    getOffsetParent: Em,
    getElementRects: U1,
    getClientRects: _1,
    getDimensions: $1,
    getScale: Nr,
    isElement: wt,
    isRTL: V1
};
function W1(e, t) {
    let n = null, r;
    const o = _t(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: d, width: f, height: c} = e.getBoundingClientRect();
        if (l || t(),
        !f || !c)
            return;
        const y = Ri(d)
          , w = Ri(o.clientWidth - (u + f))
          , g = Ri(o.clientHeight - (d + c))
          , S = Ri(u)
          , h = {
            rootMargin: -y + "px " + -w + "px " + -g + "px " + -S + "px",
            threshold: Ye(0, Pn(1, a)) || 1
        };
        let v = !0;
        function E(C) {
            const k = C[0].intersectionRatio;
            if (k !== a) {
                if (!v)
                    return s();
                k ? s(!1, k) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,h)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function Q1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = tc(e)
      , d = o || i ? [...u ? Ko(u) : [], ...Ko(t)] : [];
    d.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const f = u && l ? W1(u, n) : null;
    let c = -1
      , y = null;
    s && (y = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === u && y && (y.unobserve(t),
        cancelAnimationFrame(c),
        c = requestAnimationFrame( () => {
            var v;
            (v = y) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && y.observe(u),
    y.observe(t));
    let w, g = a ? Jn(e) : null;
    a && S();
    function S() {
        const m = Jn(e);
        g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(),
        g = m,
        w = requestAnimationFrame(S)
    }
    return n(),
    () => {
        var m;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (m = y) == null || m.disconnect(),
        y = null,
        a && cancelAnimationFrame(w)
    }
}
const K1 = k1
  , G1 = N1
  , Y1 = E1
  , q1 = T1
  , X1 = C1
  , zd = S1
  , Z1 = P1
  , J1 = (e, t, n) => {
    const r = new Map
      , o = {
        platform: H1,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return w1(e, t, {
        ...o,
        platform: i
    })
}
;
var Ki = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ss(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ss(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ss(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Cm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Fd(e, t) {
    const n = Cm(e);
    return Math.round(t * n) / n
}
function Il(e) {
    const t = x.useRef(e);
    return Ki( () => {
        t.current = e
    }
    ),
    t
}
function ew(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [d,f] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [c,y] = x.useState(r);
    Ss(c, r) || y(r);
    const [w,g] = x.useState(null)
      , [S,m] = x.useState(null)
      , h = x.useCallback(b => {
        b !== k.current && (k.current = b,
        g(b))
    }
    , [])
      , v = x.useCallback(b => {
        b !== N.current && (N.current = b,
        m(b))
    }
    , [])
      , E = i || w
      , C = s || S
      , k = x.useRef(null)
      , N = x.useRef(null)
      , T = x.useRef(d)
      , I = a != null
      , O = Il(a)
      , $ = Il(o)
      , D = Il(u)
      , W = x.useCallback( () => {
        if (!k.current || !N.current)
            return;
        const b = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (b.platform = $.current),
        J1(k.current, N.current, b).then(R => {
            const z = {
                ...R,
                isPositioned: D.current !== !1
            };
            M.current && !Ss(T.current, z) && (T.current = z,
            ri.flushSync( () => {
                f(z)
            }
            ))
        }
        )
    }
    , [c, t, n, $, D]);
    Ki( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        f(b => ({
            ...b,
            isPositioned: !1
        })))
    }
    , [u]);
    const M = x.useRef(!1);
    Ki( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    Ki( () => {
        if (E && (k.current = E),
        C && (N.current = C),
        E && C) {
            if (O.current)
                return O.current(E, C, W);
            W()
        }
    }
    , [E, C, W, O, I]);
    const Q = x.useMemo( () => ({
        reference: k,
        floating: N,
        setReference: h,
        setFloating: v
    }), [h, v])
      , B = x.useMemo( () => ({
        reference: E,
        floating: C
    }), [E, C])
      , K = x.useMemo( () => {
        const b = {
            position: n,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return b;
        const R = Fd(B.floating, d.x)
          , z = Fd(B.floating, d.y);
        return l ? {
            ...b,
            transform: "translate(" + R + "px, " + z + "px)",
            ...Cm(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: z
        }
    }
    , [n, l, B.floating, d.x, d.y]);
    return x.useMemo( () => ({
        ...d,
        update: W,
        refs: Q,
        elements: B,
        floatingStyles: K
    }), [d, W, Q, B, K])
}
const tw = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? zd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? zd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , nw = (e, t) => ({
    ...K1(e),
    options: [e, t]
})
  , rw = (e, t) => ({
    ...G1(e),
    options: [e, t]
})
  , ow = (e, t) => ({
    ...Z1(e),
    options: [e, t]
})
  , iw = (e, t) => ({
    ...Y1(e),
    options: [e, t]
})
  , sw = (e, t) => ({
    ...q1(e),
    options: [e, t]
})
  , lw = (e, t) => ({
    ...X1(e),
    options: [e, t]
})
  , aw = (e, t) => ({
    ...tw(e),
    options: [e, t]
});
var uw = "Arrow"
  , bm = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return p.jsx(He.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : p.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
bm.displayName = uw;
var cw = bm;
function dw(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(f) {
            const {scope: c, children: y, ...w} = f
              , g = (c == null ? void 0 : c[e][a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return p.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        function d(f, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, fw(o, ...t)]
}
function fw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function pw(e) {
    const [t,n] = x.useState(void 0);
    return Zn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
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
var km = "Popper"
  , [Nm,Pm] = dw(km)
  , [xE,Tm] = Nm(km)
  , jm = "PopperAnchor"
  , Rm = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Tm(jm, n)
      , s = x.useRef(null)
      , l = xt(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : p.jsx(He.div, {
        ...o,
        ref: l
    })
}
);
Rm.displayName = jm;
var nc = "PopperContent"
  , [hw,mw] = Nm(nc)
  , Am = x.forwardRef( (e, t) => {
    var ut, Yt, qt, Xt, ii, nr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: c=!1, updatePositionStrategy: y="optimized", onPlaced: w, ...g} = e
      , S = Tm(nc, n)
      , [m,h] = x.useState(null)
      , v = xt(t, _n => h(_n))
      , [E,C] = x.useState(null)
      , k = pw(E)
      , N = (k == null ? void 0 : k.width) ?? 0
      , T = (k == null ? void 0 : k.height) ?? 0
      , I = r + (i !== "center" ? "-" + i : "")
      , O = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , D = $.length > 0
      , W = {
        padding: O,
        boundary: $.filter(vw),
        altBoundary: D
    }
      , {refs: M, floatingStyles: Q, placement: B, isPositioned: K, middlewareData: b} = ew({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (..._n) => Q1(..._n, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: S.anchor
        },
        middleware: [nw({
            mainAxis: o + T,
            alignmentAxis: s
        }), a && rw({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? ow() : void 0,
            ...W
        }), a && iw({
            ...W
        }), sw({
            ...W,
            apply: ({elements: _n, rects: Zr, availableWidth: si, availableHeight: Zt}) => {
                const {width: el, height: tl} = Zr.reference
                  , we = _n.floating.style;
                we.setProperty("--radix-popper-available-width", `${si}px`),
                we.setProperty("--radix-popper-available-height", `${Zt}px`),
                we.setProperty("--radix-popper-anchor-width", `${el}px`),
                we.setProperty("--radix-popper-anchor-height", `${tl}px`)
            }
        }), E && aw({
            element: E,
            padding: l
        }), yw({
            arrowWidth: N,
            arrowHeight: T
        }), c && lw({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [R,z] = _m(B)
      , L = Ot(w);
    Zn( () => {
        K && (L == null || L())
    }
    , [K, L]);
    const F = (ut = b.arrow) == null ? void 0 : ut.x
      , Y = (Yt = b.arrow) == null ? void 0 : Yt.y
      , le = ((qt = b.arrow) == null ? void 0 : qt.centerOffset) !== 0
      , [We,Z] = x.useState();
    return Zn( () => {
        m && Z(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    p.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: K ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: We,
            "--radix-popper-transform-origin": [(Xt = b.transformOrigin) == null ? void 0 : Xt.x, (ii = b.transformOrigin) == null ? void 0 : ii.y].join(" "),
            ...((nr = b.hide) == null ? void 0 : nr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: p.jsx(hw, {
            scope: n,
            placedSide: R,
            onArrowChange: C,
            arrowX: F,
            arrowY: Y,
            shouldHideArrow: le,
            children: p.jsx(He.div, {
                "data-side": R,
                "data-align": z,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
Am.displayName = nc;
var Om = "PopperArrow"
  , gw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Mm = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = mw(Om, r)
      , s = gw[i.placedSide];
    return p.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: p.jsx(cw, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Mm.displayName = Om;
function vw(e) {
    return e !== null
}
var yw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,d] = _m(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , c = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let w = ""
          , g = "";
        return u === "bottom" ? (w = s ? f : `${c}px`,
        g = `${-a}px`) : u === "top" ? (w = s ? f : `${c}px`,
        g = `${r.floating.height + a}px`) : u === "right" ? (w = `${-a}px`,
        g = s ? f : `${y}px`) : u === "left" && (w = `${r.floating.width + a}px`,
        g = s ? f : `${y}px`),
        {
            data: {
                x: w,
                y: g
            }
        }
    }
});
function _m(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var xw = Rm
  , ww = Am
  , Sw = Mm
  , [Ks,wE] = Rh("Tooltip", [Pm])
  , rc = Pm()
  , Lm = "TooltipProvider"
  , Ew = 700
  , $d = "tooltip.open"
  , [Cw,Im] = Ks(Lm)
  , Dm = e => {
    const {__scopeTooltip: t, delayDuration: n=Ew, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,l] = x.useState(!0)
      , a = x.useRef(!1)
      , u = x.useRef(0);
    return x.useEffect( () => {
        const d = u.current;
        return () => window.clearTimeout(d)
    }
    , []),
    p.jsx(Cw, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback(d => {
            a.current = d
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Dm.displayName = Lm;
var zm = "Tooltip"
  , [SE,Gs] = Ks(zm)
  , Ua = "TooltipTrigger"
  , bw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Gs(Ua, n)
      , i = Im(Ua, n)
      , s = rc(n)
      , l = x.useRef(null)
      , a = xt(t, l, o.onTriggerChange)
      , u = x.useRef(!1)
      , d = x.useRef(!1)
      , f = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    p.jsx(xw, {
        asChild: !0,
        ...s,
        children: p.jsx(He.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ge(e.onPointerMove, c => {
                c.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: ge(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: ge(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: ge(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ge(e.onBlur, o.onClose),
            onClick: ge(e.onClick, o.onClose)
        })
    })
}
);
bw.displayName = Ua;
var kw = "TooltipPortal"
  , [EE,Nw] = Ks(kw, {
    forceMount: void 0
})
  , Wr = "TooltipContent"
  , Fm = x.forwardRef( (e, t) => {
    const n = Nw(Wr, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Gs(Wr, e.__scopeTooltip);
    return p.jsx(Hu, {
        present: r || s.open,
        children: s.disableHoverableContent ? p.jsx($m, {
            side: o,
            ...i,
            ref: t
        }) : p.jsx(Pw, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Pw = x.forwardRef( (e, t) => {
    const n = Gs(Wr, e.__scopeTooltip)
      , r = Im(Wr, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = xt(t, o)
      , [s,l] = x.useState(null)
      , {trigger: a, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , c = x.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , y = x.useCallback( (w, g) => {
        const S = w.currentTarget
          , m = {
            x: w.clientX,
            y: w.clientY
        }
          , h = Aw(m, S.getBoundingClientRect())
          , v = Ow(m, h)
          , E = Mw(g.getBoundingClientRect())
          , C = Lw([...v, ...E]);
        l(C),
        f(!0)
    }
    , [f]);
    return x.useEffect( () => () => c(), [c]),
    x.useEffect( () => {
        if (a && d) {
            const w = S => y(S, d)
              , g = S => y(S, a);
            return a.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, d, y, c]),
    x.useEffect( () => {
        if (s) {
            const w = g => {
                const S = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (a == null ? void 0 : a.contains(S)) || (d == null ? void 0 : d.contains(S))
                  , v = !_w(m, s);
                h ? c() : v && (c(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [a, d, s, u, c]),
    p.jsx($m, {
        ...e,
        ref: i
    })
}
)
  , [Tw,jw] = Ks(zm, {
    isInside: !1
})
  , $m = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Gs(Wr, n)
      , u = rc(n)
      , {onClose: d} = a;
    return x.useEffect( () => (document.addEventListener($d, d),
    () => document.removeEventListener($d, d)), [d]),
    x.useEffect( () => {
        if (a.trigger) {
            const f = c => {
                const y = c.target;
                y != null && y.contains(a.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [a.trigger, d]),
    p.jsx(Vu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: p.jsxs(ww, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [p.jsx(jh, {
                children: r
            }), p.jsx(Tw, {
                scope: n,
                isInside: !0,
                children: p.jsx(x0, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Fm.displayName = Wr;
var Bm = "TooltipArrow"
  , Rw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = rc(n);
    return jw(Bm, n).isInside ? null : p.jsx(Sw, {
        ...o,
        ...r,
        ref: t
    })
}
);
Rw.displayName = Bm;
function Aw(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Ow(e, t, n=5) {
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
function Mw(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function _w(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x
          , a = t[i].y
          , u = t[s].x
          , d = t[s].y;
        a > r != d > r && n < (u - l) * (r - a) / (d - a) + l && (o = !o)
    }
    return o
}
function Lw(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Iw(t)
}
function Iw(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Dw = Dm
  , Um = Fm;
const zw = Dw
  , Fw = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => p.jsx(Um, {
    ref: r,
    sideOffset: t,
    className: ke("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Fw.displayName = Um.displayName;
var Ys = class {
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
  , qs = typeof window > "u" || "Deno"in globalThis;
function ft() {}
function $w(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Bw(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Uw(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Bd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ud(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== oc(s, t.options))
                return !1
        } else if (!Yo(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Vd(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Go(t.options.mutationKey) !== Go(i))
                return !1
        } else if (!Yo(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function oc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Go)(e)
}
function Go(e) {
    return JSON.stringify(e, (t, n) => Va(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Yo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Yo(e[n], t[n])) : !1
}
function Vm(e, t) {
    if (e === t)
        return e;
    const n = Hd(e) && Hd(t);
    if (n || Va(e) && Va(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const d = n ? u : i[u];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            a++) : (l[d] = Vm(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}
function Hd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Va(e) {
    if (!Wd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Wd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Wd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Hw(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Ww(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Vm(e, t) : t
}
function Qw(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Kw(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ic = Symbol();
function Hm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ic ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var $n, un, Tr, of, Gw = (of = class extends Ys {
    constructor() {
        super();
        X(this, $n);
        X(this, un);
        X(this, Tr);
        H(this, Tr, t => {
            if (!qs && window.addEventListener) {
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
        P(this, un) || this.setEventListener(P(this, Tr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, un)) == null || t.call(this),
        H(this, un, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Tr, t),
        (n = P(this, un)) == null || n.call(this),
        H(this, un, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, $n) !== t && (H(this, $n, t),
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
        return typeof P(this, $n) == "boolean" ? P(this, $n) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
$n = new WeakMap,
un = new WeakMap,
Tr = new WeakMap,
of), Wm = new Gw, jr, cn, Rr, sf, Yw = (sf = class extends Ys {
    constructor() {
        super();
        X(this, jr, !0);
        X(this, cn);
        X(this, Rr);
        H(this, Rr, t => {
            if (!qs && window.addEventListener) {
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
        P(this, cn) || this.setEventListener(P(this, Rr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, cn)) == null || t.call(this),
        H(this, cn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Rr, t),
        (n = P(this, cn)) == null || n.call(this),
        H(this, cn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, jr) !== t && (H(this, jr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, jr)
    }
}
,
jr = new WeakMap,
cn = new WeakMap,
Rr = new WeakMap,
sf), Es = new Yw;
function qw() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Xw(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Qm(e) {
    return (e ?? "online") === "online" ? Es.isOnline() : !0
}
var Km = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Dl(e) {
    return e instanceof Km
}
function Gm(e) {
    let t = !1, n = 0, r = !1, o;
    const i = qw()
      , s = g => {
        var S;
        r || (c(new Km(g)),
        (S = e.abort) == null || S.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Wm.isFocused() && (e.networkMode === "always" || Es.isOnline()) && e.canRun()
      , d = () => Qm(e.networkMode) && e.canRun()
      , f = g => {
        var S;
        r || (r = !0,
        (S = e.onSuccess) == null || S.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , c = g => {
        var S;
        r || (r = !0,
        (S = e.onError) == null || S.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , y = () => new Promise(g => {
        var S;
        o = m => {
            (r || u()) && g(m)
        }
        ,
        (S = e.onPause) == null || S.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let g;
        const S = n === 0 ? e.initialPromise : void 0;
        try {
            g = S ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(f).catch(m => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (qs ? 0 : 3)
              , v = e.retryDelay ?? Xw
              , E = typeof v == "function" ? v(n, m) : v
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !C) {
                c(m);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, m),
            Hw(E).then( () => u() ? void 0 : y()).then( () => {
                t ? c(m) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: d,
        start: () => (d() ? w() : y().then(w),
        i)
    }
}
function Zw() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var _e = Zw(), Bn, lf, Ym = (lf = class {
    constructor() {
        X(this, Bn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Bw(this.gcTime) && H(this, Bn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (qs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, Bn) && (clearTimeout(P(this, Bn)),
        H(this, Bn, void 0))
    }
}
,
Bn = new WeakMap,
lf), Ar, Or, nt, je, qo, Un, pt, It, af, Jw = (af = class extends Ym {
    constructor(t) {
        super();
        X(this, pt);
        X(this, Ar);
        X(this, Or);
        X(this, nt);
        X(this, je);
        X(this, qo);
        X(this, Un);
        H(this, Un, !1),
        H(this, qo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, nt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Ar, tS(this.options)),
        this.state = t.state ?? P(this, Ar),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, qo),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, nt).remove(this)
    }
    setData(t, n) {
        const r = Ww(this.state.data, t, this.options);
        return Ne(this, pt, It).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ne(this, pt, It).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, je)) == null ? void 0 : r.promise;
        return (o = P(this, je)) == null || o.cancel(t),
        n ? n.then(ft).catch(ft) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Ar))
    }
    isActive() {
        return this.observers.some(t => Vw(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ic || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Uw(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, je) && (P(this, Un) ? P(this, je).cancel({
            revert: !0
        }) : P(this, je).cancelRetry()),
        this.scheduleGc()),
        P(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, pt, It).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, je))
                return P(this, je).continueRetry(),
                P(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(c => c.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, Un, !0),
                r.signal)
            })
        }
          , i = () => {
            const f = Hm(this.options, n)
              , c = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(c),
            H(this, Un, !1),
            this.options.persister ? this.options.persister(f, c, this) : f(c)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(s),
        (a = this.options.behavior) == null || a.onFetch(s, this),
        H(this, Or, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && Ne(this, pt, It).call(this, {
            type: "fetch",
            meta: (d = s.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var c, y, w, g;
            Dl(f) && f.silent || Ne(this, pt, It).call(this, {
                type: "error",
                error: f
            }),
            Dl(f) || ((y = (c = P(this, nt).config).onError) == null || y.call(c, f, this),
            (g = (w = P(this, nt).config).onSettled) == null || g.call(w, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, je, Gm({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var c, y, w, g;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (S) {
                    l(S);
                    return
                }
                (y = (c = P(this, nt).config).onSuccess) == null || y.call(c, f, this),
                (g = (w = P(this, nt).config).onSettled) == null || g.call(w, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, c) => {
                Ne(this, pt, It).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: c
                })
            }
            ,
            onPause: () => {
                Ne(this, pt, It).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, pt, It).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        P(this, je).start()
    }
}
,
Ar = new WeakMap,
Or = new WeakMap,
nt = new WeakMap,
je = new WeakMap,
qo = new WeakMap,
Un = new WeakMap,
pt = new WeakSet,
It = function(t) {
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
                ...eS(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
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
            const o = t.error;
            return Dl(o) && o.revert && P(this, Or) ? {
                ...P(this, Or),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
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
    _e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, nt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
af);
function eS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Qm(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function tS(e) {
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
var Nt, uf, nS = (uf = class extends Ys {
    constructor(t={}) {
        super();
        X(this, Nt);
        this.config = t,
        H(this, Nt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? oc(o, n);
        let s = this.get(i);
        return s || (s = new Jw({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        P(this, Nt).has(t.queryHash) || (P(this, Nt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, Nt).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, Nt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, Nt).get(t)
    }
    getAll() {
        return [...P(this, Nt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ud(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Ud(t, r)) : n
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Nt = new WeakMap,
uf), Pt, Oe, Vn, Tt, rn, cf, rS = (cf = class extends Ym {
    constructor(t) {
        super();
        X(this, Tt);
        X(this, Pt);
        X(this, Oe);
        X(this, Vn);
        this.mutationId = t.mutationId,
        H(this, Oe, t.mutationCache),
        H(this, Pt, []),
        this.state = t.state || oS(),
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
        P(this, Pt).includes(t) || (P(this, Pt).push(t),
        this.clearGcTimeout(),
        P(this, Oe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Pt, P(this, Pt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Oe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Pt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Oe).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, Vn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, s, l, a, u, d, f, c, y, w, g, S, m, h, v, E, C, k, N;
        H(this, Vn, Gm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, I) => {
                Ne(this, Tt, rn).call(this, {
                    type: "failed",
                    failureCount: T,
                    error: I
                })
            }
            ,
            onPause: () => {
                Ne(this, Tt, rn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, Tt, rn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Oe).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !P(this, Vn).canStart();
        try {
            if (!n) {
                Ne(this, Tt, rn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((i = (o = P(this, Oe).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const I = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                I !== this.state.context && Ne(this, Tt, rn).call(this, {
                    type: "pending",
                    context: I,
                    variables: t,
                    isPaused: r
                })
            }
            const T = await P(this, Vn).start();
            return await ((u = (a = P(this, Oe).config).onSuccess) == null ? void 0 : u.call(a, T, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, T, t, this.state.context)),
            await ((y = (c = P(this, Oe).config).onSettled) == null ? void 0 : y.call(c, T, null, this.state.variables, this.state.context, this)),
            await ((g = (w = this.options).onSettled) == null ? void 0 : g.call(w, T, null, t, this.state.context)),
            Ne(this, Tt, rn).call(this, {
                type: "success",
                data: T
            }),
            T
        } catch (T) {
            try {
                throw await ((m = (S = P(this, Oe).config).onError) == null ? void 0 : m.call(S, T, t, this.state.context, this)),
                await ((v = (h = this.options).onError) == null ? void 0 : v.call(h, T, t, this.state.context)),
                await ((C = (E = P(this, Oe).config).onSettled) == null ? void 0 : C.call(E, void 0, T, this.state.variables, this.state.context, this)),
                await ((N = (k = this.options).onSettled) == null ? void 0 : N.call(k, void 0, T, t, this.state.context)),
                T
            } finally {
                Ne(this, Tt, rn).call(this, {
                    type: "error",
                    error: T
                })
            }
        } finally {
            P(this, Oe).runNext(this)
        }
    }
}
,
Pt = new WeakMap,
Oe = new WeakMap,
Vn = new WeakMap,
Tt = new WeakSet,
rn = function(t) {
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
    _e.batch( () => {
        P(this, Pt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, Oe).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
cf);
function oS() {
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
var Qe, Xo, df, iS = (df = class extends Ys {
    constructor(t={}) {
        super();
        X(this, Qe);
        X(this, Xo);
        this.config = t,
        H(this, Qe, new Map),
        H(this, Xo, Date.now())
    }
    build(t, n, r) {
        const o = new rS({
            mutationCache: this,
            mutationId: ++ui(this, Xo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Ai(t)
          , r = P(this, Qe).get(n) ?? [];
        r.push(t),
        P(this, Qe).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ai(t);
        if (P(this, Qe).has(n)) {
            const o = (r = P(this, Qe).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? P(this, Qe).delete(n) : P(this, Qe).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = P(this, Qe).get(Ai(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = P(this, Qe).get(Ai(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...P(this, Qe).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Vd(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Vd(t, n))
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch( () => Promise.all(t.map(n => n.continue().catch(ft))))
    }
}
,
Qe = new WeakMap,
Xo = new WeakMap,
df);
function Ai(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Qd(e) {
    return {
        onFetch: (t, n) => {
            var d, f, c, y, w;
            const r = t.options
              , o = (c = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : c.direction
              , i = ((y = t.state.data) == null ? void 0 : y.pages) || []
              , s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let g = !1;
                const S = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Hm(t.options, t.fetchOptions)
                  , h = async (v, E, C) => {
                    if (g)
                        return Promise.reject();
                    if (E == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = {
                        queryKey: t.queryKey,
                        pageParam: E,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    S(k);
                    const N = await m(k)
                      , {maxPages: T} = t.options
                      , I = C ? Kw : Qw;
                    return {
                        pages: I(v.pages, N, T),
                        pageParams: I(v.pageParams, E, T)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , E = v ? sS : Kd
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , k = E(r, C);
                    l = await h(C, k, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : Kd(r, l);
                        if (a > 0 && E == null)
                            break;
                        l = await h(l, E),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, S;
                return (S = (g = t.options).persister) == null ? void 0 : S.call(g, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Kd(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function sS(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, dn, fn, Mr, _r, pn, Lr, Ir, ff, lS = (ff = class {
    constructor(e={}) {
        X(this, de);
        X(this, dn);
        X(this, fn);
        X(this, Mr);
        X(this, _r);
        X(this, pn);
        X(this, Lr);
        X(this, Ir);
        H(this, de, e.queryCache || new nS),
        H(this, dn, e.mutationCache || new iS),
        H(this, fn, e.defaultOptions || {}),
        H(this, Mr, new Map),
        H(this, _r, new Map),
        H(this, pn, 0)
    }
    mount() {
        ui(this, pn)._++,
        P(this, pn) === 1 && (H(this, Lr, Wm.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onFocus())
        }
        )),
        H(this, Ir, Es.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ui(this, pn)._--,
        P(this, pn) === 0 && ((e = P(this, Lr)) == null || e.call(this),
        H(this, Lr, void 0),
        (t = P(this, Ir)) == null || t.call(this),
        H(this, Ir, void 0))
    }
    isFetching(e) {
        return P(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, dn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = P(this, de).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Bd(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return P(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = $w(t, i);
        if (s !== void 0)
            return P(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return _e.batch( () => P(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, de);
        _e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, de)
          , r = {
            type: "active",
            ...e
        };
        return _e.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = _e.batch( () => P(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(ft).catch(ft)
    }
    invalidateQueries(e={}, t={}) {
        return _e.batch( () => {
            if (P(this, de).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = _e.batch( () => P(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(ft)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(ft)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, de).build(this, t);
        return n.isStaleByTime(Bd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ft).catch(ft)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Qd(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ft).catch(ft)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Qd(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Es.isOnline() ? P(this, dn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, de)
    }
    getMutationCache() {
        return P(this, dn)
    }
    getDefaultOptions() {
        return P(this, fn)
    }
    setDefaultOptions(e) {
        H(this, fn, e)
    }
    setQueryDefaults(e, t) {
        P(this, Mr).set(Go(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, Mr).values()];
        let n = {};
        return t.forEach(r => {
            Yo(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, _r).set(Go(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, _r).values()];
        let n = {};
        return t.forEach(r => {
            Yo(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, fn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = oc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === ic && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, fn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, de).clear(),
        P(this, dn).clear()
    }
}
,
de = new WeakMap,
dn = new WeakMap,
fn = new WeakMap,
Mr = new WeakMap,
_r = new WeakMap,
pn = new WeakMap,
Lr = new WeakMap,
Ir = new WeakMap,
ff), aS = x.createContext(void 0), uS = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
p.jsx(aS.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Cs() {
    return Cs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Cs.apply(this, arguments)
}
var gn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(gn || (gn = {}));
const Gd = "popstate";
function cS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ha("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Xm(o)
    }
    return fS(t, n, null, e)
}
function Ve(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function qm(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function dS() {
    return Math.random().toString(36).substr(2, 8)
}
function Yd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ha(e, t, n, r) {
    return n === void 0 && (n = null),
    Cs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Xs(t) : t, {
        state: n,
        key: t && t.key || r || dS()
    })
}
function Xm(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Xs(e) {
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
function fS(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = gn.Pop
      , a = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(Cs({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        l = gn.Pop;
        let S = d()
          , m = S == null ? null : S - u;
        u = S,
        a && a({
            action: l,
            location: g.location,
            delta: m
        })
    }
    function c(S, m) {
        l = gn.Push;
        let h = Ha(g.location, S, m);
        u = d() + 1;
        let v = Yd(h, u)
          , E = g.createHref(h);
        try {
            s.pushState(v, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(E)
        }
        i && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function y(S, m) {
        l = gn.Replace;
        let h = Ha(g.location, S, m);
        u = d();
        let v = Yd(h, u)
          , E = g.createHref(h);
        s.replaceState(v, "", E),
        i && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function w(S) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof S == "string" ? S : Xm(S);
        return h = h.replace(/ $/, "%20"),
        Ve(m, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,m)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Gd, f),
            a = S,
            () => {
                o.removeEventListener(Gd, f),
                a = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: w,
        encodeLocation(S) {
            let m = w(S);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: c,
        replace: y,
        go(S) {
            return s.go(S)
        }
    };
    return g
}
var qd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(qd || (qd = {}));
function pS(e, t, n) {
    return n === void 0 && (n = "/"),
    hS(e, t, n, !1)
}
function hS(e, t, n, r) {
    let o = typeof t == "string" ? Xs(t) : t
      , i = eg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Zm(e);
    mS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = NS(i);
        l = bS(s[a], u, r)
    }
    return l
}
function Zm(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Ve(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Pr([r, a.relativePath])
          , d = n.concat(a);
        i.children && i.children.length > 0 && (Ve(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Zm(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: ES(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Jm(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Jm(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Jm(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function mS(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : CS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const gS = /^:[\w-]+$/
  , vS = 3
  , yS = 2
  , xS = 1
  , wS = 10
  , SS = -2
  , Xd = e => e === "*";
function ES(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Xd) && (r += SS),
    t && (r += yS),
    n.filter(o => !Xd(o)).reduce( (o, i) => o + (gS.test(i) ? vS : i === "" ? xS : wS), r)
}
function CS(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function bS(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , f = Zd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, d)
          , c = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Zd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Pr([i, f.pathname]),
            pathnameBase: PS(Pr([i, f.pathnameBase])),
            route: c
        }),
        f.pathnameBase !== "/" && (i = Pr([i, f.pathnameBase]))
    }
    return s
}
function Zd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = kS(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: c, isOptional: y} = d;
            if (c === "*") {
                let g = l[f] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[f];
            return y && !w ? u[c] = void 0 : u[c] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function kS(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qm(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function NS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return qm(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function eg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Pr = e => e.join("/").replace(/\/\/+/g, "/")
  , PS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function TS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const tg = ["post", "put", "patch", "delete"];
new Set(tg);
const jS = ["get", ...tg];
new Set(jS);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bs() {
    return bs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    bs.apply(this, arguments)
}
const RS = x.createContext(null)
  , AS = x.createContext(null)
  , ng = x.createContext(null)
  , Zs = x.createContext(null)
  , Js = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , rg = x.createContext(null);
function sc() {
    return x.useContext(Zs) != null
}
function og() {
    return sc() || Ve(!1),
    x.useContext(Zs).location
}
function OS(e, t) {
    return MS(e, t)
}
function MS(e, t, n, r) {
    sc() || Ve(!1);
    let {navigator: o} = x.useContext(ng)
      , {matches: i} = x.useContext(Js)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = og(), d;
    if (t) {
        var f;
        let S = typeof t == "string" ? Xs(t) : t;
        a === "/" || (f = S.pathname) != null && f.startsWith(a) || Ve(!1),
        d = S
    } else
        d = u;
    let c = d.pathname || "/"
      , y = c;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        y = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = pS(e, {
        pathname: y
    })
      , g = zS(w && w.map(S => Object.assign({}, S, {
        params: Object.assign({}, l, S.params),
        pathname: Pr([a, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? a : Pr([a, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), i, n, r);
    return t && g ? x.createElement(Zs.Provider, {
        value: {
            location: bs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: gn.Pop
        }
    }, g) : g
}
function _S() {
    let e = US()
      , t = TS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const LS = x.createElement(_S, null);
class IS extends x.Component {
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
        return this.state.error !== void 0 ? x.createElement(Js.Provider, {
            value: this.props.routeContext
        }, x.createElement(rg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function DS(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(RS);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Js.Provider, {
        value: t
    }, r)
}
function zS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || Ve(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: c, errors: y} = n
                  , w = f.route.loader && c[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                if (f.route.lazy || w) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, c) => {
        let y, w = !1, g = null, S = null;
        n && (y = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || LS,
        a && (u < 0 && c === 0 ? (w = !0,
        S = null) : u === c && (w = !0,
        S = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, c + 1))
          , h = () => {
            let v;
            return y ? v = g : w ? v = S : f.route.Component ? v = x.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = d,
            x.createElement(DS, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0) ? x.createElement(IS, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: y,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Wa = function(e) {
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
}(Wa || {});
function FS(e) {
    let t = x.useContext(AS);
    return t || Ve(!1),
    t
}
function $S(e) {
    let t = x.useContext(Js);
    return t || Ve(!1),
    t
}
function BS(e) {
    let t = $S()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ve(!1),
    n.route.id
}
function US() {
    var e;
    let t = x.useContext(rg)
      , n = FS(Wa.UseRouteError)
      , r = BS(Wa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Qa(e) {
    Ve(!1)
}
function VS(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=gn.Pop, navigator: i, static: s=!1, future: l} = e;
    sc() && Ve(!1);
    let a = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: bs({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = Xs(r));
    let {pathname: d="/", search: f="", hash: c="", state: y=null, key: w="default"} = r
      , g = x.useMemo( () => {
        let S = eg(d, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: c,
                state: y,
                key: w
            },
            navigationType: o
        }
    }
    , [a, d, f, c, y, w, o]);
    return g == null ? null : x.createElement(ng.Provider, {
        value: u
    }, x.createElement(Zs.Provider, {
        children: n,
        value: g
    }))
}
function HS(e) {
    let {children: t, location: n} = e;
    return OS(Ka(t), n)
}
new Promise( () => {}
);
function Ka(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, Ka(r.props.children, i));
            return
        }
        r.type !== Qa && Ve(!1),
        !r.props.index || !r.props.children || Ve(!1);
        let s = {
            id: r.props.id || i.join("-"),
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
        r.props.children && (s.children = Ka(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const WS = "6";
try {
    window.__reactRouterVersion = WS
} catch {}
const QS = "startTransition"
  , Jd = Ag[QS];
function KS(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = cS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = x.useCallback(f => {
        u && Jd ? Jd( () => a(f)) : a(f)
    }
    , [a, u]);
    return x.useLayoutEffect( () => s.listen(d), [s, d]),
    x.createElement(VS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var ef;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ef || (ef = {}));
var tf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(tf || (tf = {}));
const GS = {
    theme: "system",
    setTheme: () => null
}
  , ig = x.createContext(GS);
function YS({children: e, defaultTheme: t="system", storageKey: n="jenson-theme", ...r}) {
    const [o,i] = x.useState( () => localStorage.getItem(n) || t);
    x.useEffect( () => {
        const l = window.document.documentElement;
        if (l.classList.remove("light", "dark"),
        o === "system") {
            const a = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            l.classList.add(a);
            return
        }
        l.classList.add(o)
    }
    , [o]);
    const s = {
        theme: o,
        setTheme: l => {
            localStorage.setItem(n, l),
            i(l)
        }
    };
    return p.jsx(ig.Provider, {
        ...r,
        value: s,
        children: e
    })
}
const qS = () => {
    const e = x.useContext(ig);
    if (e === void 0)
        throw new Error("useTheme must be used within a ThemeProvider");
    return e
}
  , XS = Gu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
    , Qn = x.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? Wo : "button";
    return p.jsx(s, {
        className: ke(XS({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Qn.displayName = "Button";
function ZS() {
    const {theme: e, setTheme: t} = qS();
    return p.jsxs(Qn, {
        variant: "ghost",
        size: "icon",
        onClick: () => t(e === "light" ? "dark" : "light"),
        className: "hover:bg-accent/20 transition-colors",
        children: [p.jsx(Z0, {
            className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        }), p.jsx(Y0, {
            className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        }), p.jsx("span", {
            className: "sr-only",
            children: "Toggle theme"
        })]
    })
}
const JS = "icon.png"
  , nf = [{
    label: "Home",
    href: "#home"
}, {
    label: "About",
    href: "#about"
}, {
    label: "Projects",
    href: "#projects"
}, {
    label: "Skills",
    href: "#skills"
}, {
    label: "Vision",
    href: "#vision"
}, {
    label: "Contact",
    href: "#contact"
}];
function eE() {
    const [e,t] = x.useState("home")
      , [n,r] = x.useState(!1);
    x.useEffect( () => {
        const i = () => {
            r(window.scrollY > 50);
            const s = nf.map(a => a.href.slice(1))
              , l = window.scrollY + 100;
            for (const a of s) {
                const u = document.getElementById(a);
                if (u) {
                    const {offsetTop: d, offsetHeight: f} = u;
                    if (l >= d && l < d + f) {
                        t(a);
                        break
                    }
                }
            }
        }
        ;
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []);
    const o = i => {
        const s = document.querySelector(i);
        s && s.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return p.jsx("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"}`,
        children: p.jsx("div", {
            className: "container mx-auto px-6 py-4",
            children: p.jsxs("div", {
                className: "flex items-center justify-between",
                children: [p.jsx("button", {
                    onClick: () => o("#home"),
                    className: "flex items-center space-x-3 hover:opacity-80 transition-opacity",
                    children: p.jsx("img", {
                        src: JS,
                        alt: "Jenson Vivish",
                        className: "h-10 w-auto",
                        style: { borderRadius: "50px" }
                })
                }), p.jsx("div", {
                    className: "hidden md:flex items-center space-x-8",
                    children: nf.map(i => p.jsx("button", {
                        onClick: () => o(i.href),
                        className: `text-sm font-medium transition-colors hover:text-accent ${e === i.href.slice(1) ? "text-accent" : "text-foreground/80"}`,
                        children: i.label
                    }, i.href))
                }), p.jsx(ZS, {})]
            })
        })
    })
}
function tE() {
    const [e,t] = x.useState("")
      , n = "Innovator | Visionary | CEO, DigiforgeDynamics";
    x.useEffect( () => {
        let o = 0;
        const i = setInterval( () => {
            o <= n.length ? (t(n.slice(0, o)),
            o++) : clearInterval(i)
        }
        , 100);
        return () => clearInterval(i)
    }
    , []);
    const r = () => {
        const o = document.querySelector("#about");
        o && o.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return p.jsxs("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center relative overflow-hidden",
        children: [p.jsx("div", {
            className: "absolute inset-0 gradient-hero"
        }), p.jsxs("div", {
            className: "absolute inset-0 opacity-10",
            children: [p.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"
            }), p.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-emerald rounded-full blur-3xl animate-pulse delay-1000"
            })]
        }), p.jsx("div", {
            className: "container mx-auto px-6 text-center relative z-10",
            children: p.jsxs("div", {
                className: "animate-fade-in",
                children: [p.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold text-white mb-6",
                    children: "Jenson Vivish"
                }), p.jsx("div", {
                    className: "h-16 flex items-center justify-center mb-8",
                    children: p.jsxs("p", {
                        className: "text-xl md:text-2xl text-white/90 font-light min-h-[2rem]",
                        children: [e, p.jsx("span", {
                            className: "animate-pulse",
                            children: "|"
                        })]
                    })
                }), p.jsx("p", {
                    className: "text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed",
                    children: "Driving innovation at the intersection of technology and human potential. Building the future through ethical AI and transformative digital solutions."
                }), p.jsxs(Qn, {
                    onClick: r,
                    variant: "outline",
                    size: "lg",
                    className: "bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 ",
                    children: [p.jsx("span", {
                        className: "mr-2",
                        children: "Discover My Journey"
                    }), p.jsx(W0, {
                        className: "h-5 w-5"
                    })]
                })]
            })
        }), p.jsx("div", {
        })]
    })
}
function nE() {
    const [e,t] = x.useState(!1)
      , n = x.useRef(null);
    return x.useEffect( () => {
        const r = new IntersectionObserver( ([o]) => {
            o.isIntersecting && t(!0)
        }
        ,{
            threshold: .3
        });
        return n.current && r.observe(n.current),
        () => r.disconnect()
    }
    , []),
    p.jsx("section", {
        id: "about",
        ref: n,
        className: "py-20 bg-background",
        children: p.jsx("div", {
            className: "container mx-auto px-6",
            children: p.jsxs("div", {
                className: `transition-all duration-800 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "About Me"
                    }), p.jsx("div", {
                        className: "w-24 h-1 bg-accent mx-auto"
                    })]
                }), p.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: p.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-12 items-center",
                        children: [p.jsx("div", {
                            className: "flex justify-center",
                            children: p.jsxs("div", {
                                className: "relative",
                                children: [p.jsx("div", {
                                    className: "w-64 h-64 rounded-full bg-gradient-accent p-1",
                                    children: p.jsx("div", {
                                        className: "w-full h-full rounded-full bg-muted flex items-center justify-center",
                                        children: p.jsx("div", {
                                            className: "w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center",
                                            children: p.jsx("span", {
                                                className: "text-6xl font-bold text-accent",
                                                children: "JV"
                                            })
                                        })
                                    })
                                }), p.jsx("div", {
                                    className: "absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"
                                }), p.jsx("div", {
                                    className: "absolute -bottom-4 -left-4 w-6 h-6 bg-primary-emerald rounded-full animate-pulse delay-500"
                                })]
                            })
                        }), p.jsxs("div", {
                            className: "space-y-6",
                            children: [p.jsx("h3", {
                                className: "text-2xl font-semibold text-accent",
                                children: "Transforming Ideas into Digital Reality"
                            }), p.jsxs("div", {
                                className: "space-y-4 text-lg text-muted-foreground leading-relaxed",
                                children: [p.jsx("p", {
                                    children: "With a deep foundation in technology and an unwavering commitment to innovation, I lead DigiforgeDynamics in creating solutions that bridge the gap between cutting-edge technology and human-centered design."
                                }), p.jsx("p", {
                                    children: "My journey spans across AI development, hardware engineering, and educational technology, always with a focus on ethical implementation and sustainable growth. Every project is an opportunity to push boundaries while maintaining our core values of integrity and excellence."
                                }), p.jsx("p", {
                                    children: "As CEO, I believe in fostering a culture of continuous learning, collaborative innovation, and responsible technology development that serves both business objectives and societal advancement."
                                })]
                            }), p.jsxs("div", {
                                className: "grid grid-cols-3 gap-6 pt-8",
                                children: [p.jsxs("div", {
                                    className: "text-center",
                                    children: [p.jsx("div", {
                                        className: "text-3xl font-bold text-accent",
                                        children: "15+"
                                    }), p.jsx("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Projects Completed"
                                    })]
                                }), p.jsxs("div", {
                                    className: "text-center",
                                    children: [p.jsx("div", {
                                        className: "text-3xl font-bold text-accent",
                                        children: "5+"
                                    }), p.jsx("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Years Experience"
                                    })]
                                }), p.jsxs("div", {
                                    className: "text-center",
                                    children: [p.jsx("div", {
                                        className: "text-3xl font-bold text-accent",
                                        children: "1"
                                    }), p.jsx("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Innovative Vision"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    })
}
const bo = x.forwardRef( ({className: e, ...t}, n) => p.jsx("div", {
    ref: n,
    className: ke("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
bo.displayName = "Card";
const ko = x.forwardRef( ({className: e, ...t}, n) => p.jsx("div", {
    ref: n,
    className: ke("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ko.displayName = "CardHeader";
const No = x.forwardRef( ({className: e, ...t}, n) => p.jsx("h3", {
    ref: n,
    className: ke("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
No.displayName = "CardTitle";
const sg = x.forwardRef( ({className: e, ...t}, n) => p.jsx("p", {
    ref: n,
    className: ke("text-sm text-muted-foreground", e),
    ...t
}));
sg.displayName = "CardDescription";
const Po = x.forwardRef( ({className: e, ...t}, n) => p.jsx("div", {
    ref: n,
    className: ke("p-6 pt-0", e),
    ...t
}));
Po.displayName = "CardContent";
const rE = x.forwardRef( ({className: e, ...t}, n) => p.jsx("div", {
    ref: n,
    className: ke("flex items-center p-6 pt-0", e),
    ...t
}));
rE.displayName = "CardFooter";
const oE = [{
    title: "🔧 Hardware & Arduino Projects",
    icon: ex,
    projects: [{
        title: "Smart Digital Clock",
        description: "Arduino Nano + DS1302 RTC + TM1637 display for precise real-time clock functionality with customizable display modes.",
        tech: ["Arduino Nano", "DS1302 RTC", "TM1637", "C++"],
        featured: !0
    }, {
        title: "Emergency Assistance App",
        description: "Mobile-responsive emergency app with loading spinners, alert popups, and confirmation systems for quick assistance requests.",
        tech: ["HTML5", "CSS3", "JavaScript", "Progressive Web App"],
        featured: !1
    }]
}, {
    title: "🧠 AI & Automation Projects",
    icon: U0,
    projects: [{
        title: "NOVA – Personalized Voice Chatbot",
        description: "Advanced voice assistant using Python, Vosk STT, and LLaMA for natural conversation and personalized interactions.",
        tech: ["Python", "Vosk STT", "LLaMA", "Natural Language Processing"],
        featured: !0
    }, {
        title: "JARVIS Personal Assistant",
        description: "Comprehensive personal assistant with Vosk speech-to-text, pyttsx3 text-to-speech, and MySQL memory management.",
        tech: ["Python", "Vosk STT", "pyttsx3", "MySQL", "AI"],
        featured: !0
    }, {
        title: "Face Recognition System",
        description: "High-performance face recognition with real-time tracking using Deep SORT algorithm for enhanced security applications.",
        tech: ["Python", "OpenCV", "Deep SORT", "Computer Vision"],
        featured: !1
    }]
}, {
    title: "📚 Educational Platforms",
    icon: B0,
    projects: [{
        title: "EduTrack Academic Portal",
        description: "Comprehensive academic management system with Tkinter GUI, MySQL database, role-based access, and SHA-256 security.",
        tech: ["Python", "Tkinter", "MySQL", "SHA-256", "Role-based Access"],
        featured: !0
    }, {
        title: "Staff Training Portal",
        description: "Interactive training platform with Firebase authentication, Vimeo integration, collapsible chapters, and progress tracking.",
        tech: ["Firebase", "Vimeo API", "JavaScript", "Progress Tracking"],
        featured: !1
    }]
}, {
    title: "🧾 Business Automation",
    icon: V0,
    projects: [{
        title: "Invoice Automation System",
        description: "Local business solution with Python GUI, MySQL database, automated invoice generation, and comprehensive client management.",
        tech: ["Python", "MySQL", "GUI Development", "PDF Generation"],
        featured: !0
    }]
}];
function iE() {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState(null)
      , o = x.useRef(null);
    return x.useEffect( () => {
        const i = new IntersectionObserver( ([s]) => {
            s.isIntersecting && t(!0)
        }
        ,{
            threshold: .1
        });
        return o.current && i.observe(o.current),
        () => i.disconnect()
    }
    , []),
    p.jsx("section", {
        id: "projects",
        ref: o,
        className: "py-20 bg-muted/30",
        children: p.jsx("div", {
            className: "container mx-auto px-6",
            children: p.jsxs("div", {
                className: `transition-all duration-800 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "🚀 Featured Projects"
                    }), p.jsx("div", {
                        className: "w-24 h-1 bg-accent mx-auto mb-6"
                    }), p.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                        children: "Discover the innovative solutions and cutting-edge technologies that define my journey in transforming ideas into impactful digital experiences."
                    })]
                }), oE.map( (i, s) => p.jsxs("div", {
                    className: "mb-16",
                    children: [p.jsxs("div", {
                        className: "flex items-center mb-8",
                        children: [p.jsx(i.icon, {
                            className: "h-8 w-8 text-accent mr-4"
                        }), p.jsx("h3", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: i.title
                        })]
                    }), p.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: i.projects.map( (l, a) => p.jsxs(bo, {
                            className: `card-hover shadow-card transition-all duration-300 ${l.featured ? "md:col-span-2 lg:col-span-1" : ""} ${n === l.title ? "shadow-glow" : ""}`,
                            onMouseEnter: () => r(l.title),
                            onMouseLeave: () => r(null),
                            style: {
                                animationDelay: `${(s * 2 + a) * .1}s`
                            },
                            children: [p.jsxs(ko, {
                                children: [p.jsx("div", {
                                    className: "flex items-start justify-between",
                                    children: p.jsxs("div", {
                                        className: "flex-1",
                                        children: [p.jsx(No, {
                                            className: "text-xl mb-2 text-foreground",
                                            children: l.title
                                        }), l.featured && p.jsx("div", {
                                            className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-2",
                                            children: "⭐ Featured"
                                        })]
                                    })
                                }), p.jsx(sg, {
                                    className: "text-muted-foreground leading-relaxed",
                                    children: l.description
                                })]
                            }), p.jsxs(Po, {
                                children: [p.jsx("div", {
                                    className: "mb-4",
                                    children: p.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: l.tech.map(u => p.jsx("span", {
                                            className: "px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium",
                                            children: u
                                        }, u))
                                    })
                                }), p.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [p.jsxs(Qn, {
                                        variant: "default",
                                        size: "sm",
                                        className: "bg-accent hover:bg-accent/90 text-accent-foreground flex-1",
                                        children: [p.jsx(Q0, {
                                            className: "h-4 w-4 mr-2"
                                        }), "Learn More"]
                                    }), p.jsx(Qn, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "border-accent text-accent hover:bg-accent/10",
                                        children: p.jsx(La, {
                                            className: "h-4 w-4"
                                        })
                                    })]
                                })]
                            })]
                        }, l.title))
                    })]
                }, i.title)), p.jsx("div", {
                    className: "text-center mt-12",
                    children: p.jsxs(Qn, {
                        variant: "outline",
                        size: "lg",
                        className: "border-accent text-accent hover:bg-accent/10 px-8 py-3",
                        children: ["View All Projects on GitHub", p.jsx(La, {
                            className: "h-5 w-5 ml-2"
                        })]
                    })
                })]
            })
        })
    })
}
const sE = Gu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function rf({className: e, variant: t, ...n}) {
    return p.jsx("div", {
        className: ke(sE({
            variant: t
        }), e),
        ...n
    })
}
const Oi = [{
    name: "Python",
    level: 95,
    category: "Programming"
}, {
    name: "JavaScript",
    level: 90,
    category: "Programming"
}, {
    name: "MySQL",
    level: 85,
    category: "Database"
}, {
    name: "Firebase",
    level: 80,
    category: "Backend"
}, {
    name: "HTML/CSS",
    level: 92,
    category: "Frontend"
}, {
    name: "Arduino",
    level: 88,
    category: "Hardware"
}, {
    name: "ESP32",
    level: 85,
    category: "Hardware"
}, {
    name: "AI/ML",
    level: 83,
    category: "Artificial Intelligence"
}]
  , lE = ["Programming", "Database", "Backend", "Frontend", "Hardware", "Artificial Intelligence"];
function aE() {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState({})
      , o = x.useRef(null);
    x.useEffect( () => {
        const s = new IntersectionObserver( ([l]) => {
            l.isIntersecting && !e && (t(!0),
            Oi.forEach( (a, u) => {
                setTimeout( () => {
                    r(d => ({
                        ...d,
                        [a.name]: a.level
                    }))
                }
                , u * 150)
            }
            ))
        }
        ,{
            threshold: .3
        });
        return o.current && s.observe(o.current),
        () => s.disconnect()
    }
    , [e]);
    const i = () => {
        const u = 280 * Math.PI;
        return p.jsxs("div", {
            className: "relative flex items-center justify-center",
            children: [p.jsxs("svg", {
                width: 300,
                height: 300,
                className: "transform -rotate-90",
                children: [p.jsx("circle", {
                    cx: 300 / 2,
                    cy: 300 / 2,
                    r: 140,
                    stroke: "hsl(var(--muted))",
                    strokeWidth: 20,
                    fill: "transparent",
                    className: "opacity-30"
                }), Oi.map( (d, f) => {
                    const y = Oi.slice(0, f).reduce( (S, m) => S + (n[m.name] || 0), 0) / 800 * u
                      , w = (n[d.name] || 0) / 800 * u
                      , g = ["hsl(var(--accent))", "hsl(var(--primary-emerald))", "hsl(var(--primary-emerald-light))", "hsl(var(--primary))", "hsl(var(--secondary-foreground))", "hsl(var(--muted-foreground))", "hsl(var(--accent))", "hsl(var(--primary-emerald))"];
                    return p.jsx("circle", {
                        cx: 300 / 2,
                        cy: 300 / 2,
                        r: 140,
                        stroke: g[f % g.length],
                        strokeWidth: 18,
                        fill: "transparent",
                        strokeDasharray: `${w} ${u}`,
                        strokeDashoffset: -y,
                        className: "transition-all duration-1000 ease-out",
                        style: {
                            filter: `drop-shadow(0 0 8px ${g[f % g.length]}40)`
                        }
                    }, d.name)
                }
                )]
            }), p.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: p.jsxs("div", {
                    className: "text-center",
                    children: [p.jsx("div", {
                        className: "text-3xl font-bold text-accent",
                        children: "8+"
                    }), p.jsx("div", {
                        className: "text-sm text-muted-foreground",
                        children: "Core Skills"
                    })]
                })
            })]
        })
    }
    ;
    return p.jsx("section", {
        id: "skills",
        ref: o,
        className: "py-20 bg-background",
        children: p.jsx("div", {
            className: "container mx-auto px-6",
            children: p.jsxs("div", {
                className: `transition-all duration-800 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "Technical Skills"
                    }), p.jsx("div", {
                        className: "w-24 h-1 bg-accent mx-auto mb-6"
                    }), p.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                        children: "A comprehensive toolkit spanning full-stack development, AI/ML, hardware engineering, and emerging technologies to deliver innovative solutions."
                    })]
                }), p.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [p.jsxs("div", {
                        className: "space-y-8",
                        children: [p.jsxs("div", {
                            className: "mb-8",
                            children: [p.jsx("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Expertise Areas"
                            }), p.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: lE.map(s => p.jsx(rf, {
                                    variant: "outline",
                                    className: "border-accent text-accent hover:bg-accent/10 px-3 py-1",
                                    children: s
                                }, s))
                            })]
                        }), p.jsx("div", {
                            className: "space-y-6",
                            children: Oi.map( (s, l) => p.jsxs("div", {
                                className: "space-y-2",
                                style: {
                                    animationDelay: `${l * .1}s`
                                },
                                children: [p.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [p.jsx("span", {
                                        className: "font-medium text-foreground",
                                        children: s.name
                                    }), p.jsxs("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [n[s.name] || 0, "%"]
                                    })]
                                }), p.jsx("div", {
                                    className: "h-3 bg-muted rounded-full overflow-hidden",
                                    children: p.jsx("div", {
                                        className: "h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out shadow-glow",
                                        style: {
                                            width: `${n[s.name] || 0}%`,
                                            backgroundColor: "#10b77f",
                                            transitionDelay: `${l * 150}ms`
                                        }
                                    })
                                })]
                            }, s.name))
                        }), p.jsxs("div", {
                            className: "pt-6",
                            children: [p.jsx("h4", {
                                className: "font-semibold mb-3 text-accent",
                                children: "Additional Technologies"
                            }), p.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: ["React", "Node.js", "Git", "Docker", "Linux", "AWS", "TensorFlow", "OpenCV", "Raspberry Pi", "IoT"].map(s => p.jsx(rf, {
                                    variant: "secondary",
                                    className: "bg-muted hover:bg-accent/10 hover:text-accent transition-colors",
                                    children: s
                                }, s))
                            })]
                        })]
                    }), p.jsx("div", {
                        className: "flex justify-center",
                        children: p.jsxs("div", {
                            className: "relative",
                            children: [p.jsx(i, {}), p.jsx("div", {
                                className: "absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse"
                            }), p.jsx("div", {
                                className: "absolute -bottom-4 -left-4 w-6 h-6 bg-primary-emerald/20 rounded-full animate-pulse delay-500"
                            }), p.jsx("div", {
                                className: "absolute top-1/2 -left-8 w-4 h-4 bg-accent/30 rounded-full animate-pulse delay-1000"
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
const uE = [{
    icon: im,
    title: "Innovation with Purpose",
    description: "Developing cutting-edge technologies that solve real-world problems and enhance human capabilities."
}, {
    icon: K0,
    title: "Human-Centered Design",
    description: "Ensuring that every technological advancement serves to improve lives and foster meaningful connections."
}, {
    icon: X0,
    title: "Ethical AI Development",
    description: "Building AI systems that are transparent, fair, and aligned with human values and societal benefit."
}, {
    icon: om,
    title: "Sustainable Future",
    description: "Creating solutions that not only advance technology but also contribute to a more sustainable world."
}];
function cE() {
    const [e,t] = x.useState(!1)
      , n = x.useRef(null);
    return x.useEffect( () => {
        const r = new IntersectionObserver( ([o]) => {
            o.isIntersecting && t(!0)
        }
        ,{
            threshold: .3
        });
        return n.current && r.observe(n.current),
        () => r.disconnect()
    }
    , []),
    p.jsxs("section", {
        id: "vision",
        ref: n,
        className: "py-20 relative overflow-hidden",
        children: [p.jsxs("div", {
            className: "absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background",
            children: [p.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
            }), p.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-emerald/5 rounded-full blur-3xl animate-pulse delay-1000"
            })]
        }), p.jsx("div", {
            className: "container mx-auto px-6 relative z-10",
            children: p.jsxs("div", {
                className: `transition-all duration-800 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "Vision & Mission"
                    }), p.jsx("div", {
                        className: "w-24 h-1 bg-accent mx-auto mb-8"
                    })]
                }), p.jsx("div", {
                    className: "max-w-4xl mx-auto text-center mb-16",
                    children: p.jsxs("div", {
                        className: "relative p-8 rounded-2xl gradient-card shadow-elegant",
                        children: [p.jsx("div", {
                            className: "absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center",
                            children: p.jsx(im, {
                                className: "h-4 w-4 text-accent-foreground"
                            })
                        }), p.jsx("blockquote", {
                            className: "text-xl md:text-2xl leading-relaxed text-foreground font-light italic mb-6",
                            children: `"Technology should amplify human potential, not replace human connection. At DigiforgeDynamics, we're committed to building the future where artificial intelligence serves humanity's highest aspirations while preserving the values that make us uniquely human."`
                        }), p.jsx("cite", {
                            className: "text-accent font-semibold",
                            children: "— Jenson Vivish, CEO"
                        })]
                    })
                }), p.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto",
                    children: uE.map( (r, o) => p.jsx("div", {
                        className: `transition-all duration-700 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        style: {
                            transitionDelay: `${o * .15}s`
                        },
                        children: p.jsx("div", {
                            className: "group p-6 rounded-xl gradient-card shadow-card hover:shadow-glow transition-all duration-300 h-full",
                            children: p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx("div", {
                                    className: "flex-shrink-0",
                                    children: p.jsx("div", {
                                        className: "w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors",
                                        children: p.jsx(r.icon, {
                                            className: "h-6 w-6 text-accent"
                                        })
                                    })
                                }), p.jsxs("div", {
                                    className: "flex-1",
                                    children: [p.jsx("h3", {
                                        className: "text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors",
                                        children: r.title
                                    }), p.jsx("p", {
                                        className: "text-muted-foreground leading-relaxed",
                                        children: r.description
                                    })]
                                })]
                            })
                        })
                    }, r.title))
                }), p.jsx("div", {
                    className: "text-center mt-16",
                    children: p.jsxs("div", {
                        className: "inline-block p-6 rounded-xl bg-accent/5 border border-accent/20",
                        children: [p.jsx("h3", {
                            className: "text-2xl font-semibold mb-4 text-accent",
                            children: "Join the Journey"
                        }), p.jsx("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Together, we can shape a future where technology serves humanity's greatest ambitions while fostering innovation that benefits everyone."
                        })]
                    })
                })]
            })
        })]
    })
}
const Ga = x.forwardRef( ({className: e, type: t, ...n}, r) => p.jsx("input", {
    type: t,
    className: ke("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Ga.displayName = "Input";
const lg = x.forwardRef( ({className: e, ...t}, n) => p.jsx("textarea", {
    className: ke("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
lg.displayName = "Textarea";
function dE() {
    const [e,t] = x.useState({
        name: "",
        email: "",
        message: ""
    })
      , [n,r] = x.useState(!1)
      , [o,i] = x.useState(!1)
      , s = x.useRef(null);
    x.useEffect( () => {
        const d = new IntersectionObserver( ([f]) => {
            f.isIntersecting && i(!0)
        }
        ,{
            threshold: .3
        });
        return s.current && d.observe(s.current),
        () => d.disconnect()
    }
    , []);
    const l = d => {
        d.preventDefault(),
        setTimeout( () => {
            r(!0),
            setTimeout( () => {
                t({
                    name: "",
                    email: "",
                    message: ""
                }),
                r(!1)
            }
            , 3e3)
        }
        , 500)
    }
      , a = d => {
        t(f => ({
            ...f,
            [d.target.name]: d.target.value
        }))
    }
      , u = [{
        name: "GitHub",
        icon: La,
        url: "https://github.com/jensonvivish",
        color: "hover:text-gray-600 dark:hover:text-gray-300"
    }, {
        name: "LinkedIn",
        icon: G0,
        url: "https://linkedin.com/in/jensonvivish",
        color: "hover:text-blue-600"
    }, {
        name: "DigiforgeDynamics",
        icon: om,
        url: "https://digiforgedynamics.github.io",
        color: "hover:text-accent"
    }];
    return p.jsx("section", {
        id: "contact",
        ref: s,
        className: "py-20 bg-muted/30",
        children: p.jsx("div", {
            className: "container mx-auto px-6",
            children: p.jsxs("div", {
                className: `transition-all duration-800 ${o ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "Let's Connect"
                    }), p.jsx("div", {
                        className: "w-24 h-1 bg-accent mx-auto mb-6"
                    }), p.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                        children: "Ready to explore innovative solutions together? I'd love to hear about your vision and discuss how we can bring transformative ideas to life."
                    })]
                }), p.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: p.jsxs("div", {
                        className: "grid lg:grid-cols-2 gap-12",
                        children: [p.jsxs(bo, {
                            className: "shadow-card gradient-card",
                            children: [p.jsx(ko, {
                                children: p.jsx(No, {
                                    className: "text-2xl text-center",
                                    children: "Send a Message"
                                })
                            }), p.jsx(Po, {
                                children: n ? p.jsxs("div", {
                                    className: "text-center py-12",
                                    children: [p.jsx("div", {
                                        className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse",
                                        children: p.jsx(H0, {
                                            className: "h-8 w-8 text-green-600 dark:text-green-400"
                                        })
                                    }), p.jsx("h3", {
                                        className: "text-xl font-semibold text-green-600 dark:text-green-400 mb-2",
                                        children: "Message Sent Successfully!"
                                    }), p.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Thank you for reaching out. I'll get back to you as soon as possible."
                                    })]
                                }) : p.jsxs("form", {
                                    onSubmit: l,
                                    className: "space-y-6",
                                    children: [p.jsx("div", {
                                        children: p.jsx(Ga, {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Your Name",
                                            value: e.name,
                                            onChange: a,
                                            required: !0,
                                            className: "border-accent/20 focus:border-accent transition-colors"
                                        })
                                    }), p.jsx("div", {
                                        children: p.jsx(Ga, {
                                            type: "email",
                                            name: "email",
                                            placeholder: "Your Email",
                                            value: e.email,
                                            onChange: a,
                                            required: !0,
                                            className: "border-accent/20 focus:border-accent transition-colors"
                                        })
                                    }), p.jsx("div", {
                                        children: p.jsx(lg, {
                                            name: "message",
                                            placeholder: "Your Message",
                                            value: e.message,
                                            onChange: a,
                                            required: !0,
                                            rows: 5,
                                            className: "border-accent/20 focus:border-accent transition-colors resize-none"
                                        })
                                    }), p.jsxs(Qn, {
                                        type: "submit",
                                        className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3",
                                        size: "lg",
                                        children: [p.jsx(q0, {
                                            className: "h-5 w-5 mr-2"
                                        }), "Send Message"]
                                    })]
                                })
                            })]
                        }), p.jsxs("div", {
                            className: "space-y-8",
                            children: [p.jsxs(bo, {
                                className: "shadow-card gradient-card",
                                children: [p.jsx(ko, {
                                    children: p.jsx(No, {
                                        className: "text-2xl",
                                        children: "Get in Touch"
                                    })
                                }), p.jsxs(Po, {
                                    className: "space-y-6",
                                    children: [p.jsxs("div", {
                                        children: [p.jsx("h4", {
                                            className: "font-semibold text-accent mb-2",
                                            children: "Professional Inquiries"
                                        }), p.jsx("p", {
                                            className: "text-muted-foreground",
                                            children: "For business partnerships, consulting opportunities, or collaboration on innovative projects, I'm always open to meaningful conversations."
                                        })]
                                    }), p.jsxs("div", {
                                        children: [p.jsx("h4", {
                                            className: "font-semibold text-accent mb-2",
                                            children: "Technical Discussions"
                                        }), p.jsx("p", {
                                            className: "text-muted-foreground",
                                            children: "Interested in AI development, hardware engineering, or educational technology? Let's explore the possibilities together."
                                        })]
                                    }), p.jsxs("div", {
                                        children: [p.jsx("h4", {
                                            className: "font-semibold text-accent mb-2",
                                            children: "Response Time"
                                        }), p.jsx("p", {
                                            className: "text-muted-foreground",
                                            children: "I typically respond within 24-48 hours. For urgent matters, please mention it in your message."
                                        })]
                                    })]
                                })]
                            }), p.jsxs(bo, {
                                className: "shadow-card gradient-card",
                                children: [p.jsx(ko, {
                                    children: p.jsx(No, {
                                        className: "text-2xl",
                                        children: "Connect Online"
                                    })
                                }), p.jsx(Po, {
                                    children: p.jsx("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: u.map(d => p.jsxs("a", {
                                            href: d.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: `flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group ${d.color}`,
                                            children: [p.jsx("div", {
                                                className: "w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors",
                                                children: p.jsx(d.icon, {
                                                    className: "h-5 w-5"
                                                })
                                            }), p.jsxs("div", {
                                                children: [p.jsx("div", {
                                                    className: "font-medium",
                                                    children: d.name
                                                }), p.jsxs("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [d.name === "GitHub" && "View my repositories", d.name === "LinkedIn" && "Professional network", d.name === "DigiforgeDynamics" && "Company website"]
                                                })]
                                            })]
                                        }, d.name))
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    })
}
function fE() {
    return p.jsx("footer", {
        className: "bg-primary-midnight text-white py-8",
        children: p.jsx("div", {
            className: "container mx-auto px-6 text-center",
            children: p.jsxs("div", {
                className: "space-y-4",
                children: [p.jsx("p", {
                    className: "text-lg",
                    children: "© 2025 Jenson Vivish. All rights reserved."
                }), p.jsx("p", {
                    className: "text-accent font-medium",
                    children: "Powered by DigiforgeDynamics"
                })]
            })
        })
    })
}
const pE = () => p.jsxs("div", {
    className: "min-h-screen",
    children: [p.jsx(eE, {}), p.jsx(tE, {}), p.jsx(nE, {}), p.jsx(iE, {}), p.jsx(aE, {}), p.jsx(cE, {}), p.jsx(dE, {}), p.jsx(fE, {})]
})
  , hE = () => {
    const e = og();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    p.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: p.jsxs("div", {
            className: "text-center",
            children: [p.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), p.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), p.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , mE = new lS
  , gE = () => p.jsx(uS, {
    client: mE,
    children: p.jsx(YS, {
        defaultTheme: "dark",
        storageKey: "jenson-theme",
        children: p.jsxs(zw, {
            children: [p.jsx(Ix, {}), p.jsx(d1, {}), p.jsx(KS, {
                children: p.jsxs(HS, {
                    children: [p.jsx(Qa, {
                        path: "/",
                        element: p.jsx(pE, {})
                    }), p.jsx(Qa, {
                        path: "*",
                        element: p.jsx(hE, {})
                    })]
                })
            })]
        })
    })
});
Ph(document.getElementById("root")).render(p.jsx(gE, {}));
