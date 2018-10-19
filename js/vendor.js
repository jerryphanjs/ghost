!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length"in t && t.length
          , i = at.type(t);
        return "function" !== i && !at.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function n(t, e, i) {
        if (at.isFunction(e))
            return at.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
        if (e.nodeType)
            return at.grep(t, function(t) {
                return t === e !== i
            });
        if ("string" == typeof e) {
            if (_t.test(e))
                return at.filter(e, t, i);
            e = at.filter(e, t)
        }
        return at.grep(t, function(t) {
            return at.inArray(t, e) > -1 !== i
        })
    }
    function r(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);return t
    }
    function s() {
        K.addEventListener ? (K.removeEventListener("DOMContentLoaded", a),
        t.removeEventListener("load", a)) : (K.detachEvent("onreadystatechange", a),
        t.detachEvent("onload", a))
    }
    function a() {
        (K.addEventListener || "load" === t.event.type || "complete" === K.readyState) && (s(),
        at.ready())
    }
    function o(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Ct, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Pt.test(i) ? at.parseJSON(i) : i)
                } catch (t) {}
                at.data(t, e, i)
            } else
                i = void 0
        }
        return i
    }
    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !at.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, i, n) {
        if (St(t)) {
            var r, s, a = at.expando, o = t.nodeType, l = o ? at.cache : t, c = o ? t[a] : t[a] && a;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)
                return c || (c = o ? t[a] = $.pop() || at.guid++ : a),
                l[c] || (l[c] = o ? {} : {
                    toJSON: at.noop
                }),
                "object" != typeof e && "function" != typeof e || (n ? l[c] = at.extend(l[c], e) : l[c].data = at.extend(l[c].data, e)),
                s = l[c],
                n || (s.data || (s.data = {}),
                s = s.data),
                void 0 !== i && (s[at.camelCase(e)] = i),
                "string" == typeof e ? null == (r = s[e]) && (r = s[at.camelCase(e)]) : r = s,
                r
        }
    }
    function h(t, e, i) {
        if (St(t)) {
            var n, r, s = t.nodeType, a = s ? at.cache : t, o = s ? t[at.expando] : at.expando;
            if (a[o]) {
                if (e && (n = i ? a[o] : a[o].data)) {
                    at.isArray(e) ? e = e.concat(at.map(e, at.camelCase)) : e in n ? e = [e] : (e = at.camelCase(e),
                    e = e in n ? [e] : e.split(" ")),
                    r = e.length;
                    for (; r--; )
                        delete n[e[r]];
                    if (i ? !l(n) : !at.isEmptyObject(n))
                        return
                }
                (i || (delete a[o].data,
                l(a[o]))) && (s ? at.cleanData([t], !0) : st.deleteExpando || a != a.window ? delete a[o] : a[o] = void 0)
            }
        }
    }
    function u(t, e, i, n) {
        var r, s = 1, a = 20, o = n ? function() {
            return n.cur()
        }
        : function() {
            return at.css(t, e, "")
        }
        , l = o(), c = i && i[3] || (at.cssNumber[e] ? "" : "px"), h = (at.cssNumber[e] || "px" !== c && +l) && kt.exec(at.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3],
            i = i || [],
            h = +l || 1;
            do {
                s = s || ".5",
                h /= s,
                at.style(t, e, h + c)
            } while (s !== (s = o() / l) && 1 !== s && --a)
        }
        return i && (h = +h || +l || 0,
        r = i[1] ? h + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = c,
        n.start = h,
        n.end = r)),
        r
    }
    function p(t) {
        var e = jt.split("|")
          , i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length; )
                i.createElement(e.pop());
        return i
    }
    function d(t, e) {
        var i, n, r = 0, s = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [],
            i = t.childNodes || t; null != (n = i[r]); r++)
                !e || at.nodeName(n, e) ? s.push(n) : at.merge(s, d(n, e));
        return void 0 === e || e && at.nodeName(t, e) ? at.merge([t], s) : s
    }
    function f(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)
            at._data(i, "globalEval", !e || at._data(e[n], "globalEval"))
    }
    function m(t) {
        At.test(t.type) && (t.defaultChecked = t.checked)
    }
    function _(t, e, i, n, r) {
        for (var s, a, o, l, c, h, u, _ = t.length, g = p(e), v = [], y = 0; _ > y; y++)
            if ((a = t[y]) || 0 === a)
                if ("object" === at.type(a))
                    at.merge(v, a.nodeType ? [a] : a);
                else if (It.test(a)) {
                    for (l = l || g.appendChild(e.createElement("div")),
                    c = (Lt.exec(a) || ["", ""])[1].toLowerCase(),
                    u = zt[c] || zt._default,
                    l.innerHTML = u[1] + at.htmlPrefilter(a) + u[2],
                    s = u[0]; s--; )
                        l = l.lastChild;
                    if (!st.leadingWhitespace && Nt.test(a) && v.push(e.createTextNode(Nt.exec(a)[0])),
                    !st.tbody)
                        for (s = (a = "table" !== c || Bt.test(a) ? "<table>" !== u[1] || Bt.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; s--; )
                            at.nodeName(h = a.childNodes[s], "tbody") && !h.childNodes.length && a.removeChild(h);
                    for (at.merge(v, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = g.lastChild
                } else
                    v.push(e.createTextNode(a));
        for (l && g.removeChild(l),
        st.appendChecked || at.grep(d(v, "input"), m),
        y = 0; a = v[y++]; )
            if (n && at.inArray(a, n) > -1)
                r && r.push(a);
            else if (o = at.contains(a.ownerDocument, a),
            l = d(g.appendChild(a), "script"),
            o && f(l),
            i)
                for (s = 0; a = l[s++]; )
                    Rt.test(a.type || "") && i.push(a);
        return l = null,
        g
    }
    function g() {
        return !0
    }
    function v() {
        return !1
    }
    function y() {
        try {
            return K.activeElement
        } catch (t) {}
    }
    function w(t, e, i, n, r, s) {
        var a, o;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i,
            i = void 0);
            for (o in e)
                w(t, o, i, n, e[o], s);
            return t
        }
        if (null == n && null == r ? (r = i,
        n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
        n = void 0) : (r = n,
        n = i,
        i = void 0)),
        !1 === r)
            r = v;
        else if (!r)
            return t;
        return 1 === s && (a = r,
        r = function(t) {
            return at().off(t),
            a.apply(this, arguments)
        }
        ,
        r.guid = a.guid || (a.guid = at.guid++)),
        t.each(function() {
            at.event.add(this, e, r, n, i)
        })
    }
    function x(t, e) {
        return at.nodeName(t, "table") && at.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== at.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function T(t) {
        var e = $t.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function S(t, e) {
        if (1 === e.nodeType && at.hasData(t)) {
            var i, n, r, s = at._data(t), a = at._data(e, s), o = s.events;
            if (o) {
                delete a.handle,
                a.events = {};
                for (i in o)
                    for (n = 0,
                    r = o[i].length; r > n; n++)
                        at.event.add(e, i, o[i][n])
            }
            a.data && (a.data = at.extend({}, a.data))
        }
    }
    function P(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(),
            !st.noCloneEvent && e[at.expando]) {
                r = at._data(e);
                for (n in r.events)
                    at.removeEvent(e, n, r.handle);
                e.removeAttribute(at.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text,
            T(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML),
            st.html5Clone && t.innerHTML && !at.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
            e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }
    function C(t, e, i, n) {
        e = J.apply([], e);
        var r, s, a, o, l, c, h = 0, u = t.length, p = u - 1, f = e[0], m = at.isFunction(f);
        if (m || u > 1 && "string" == typeof f && !st.checkClone && Gt.test(f))
            return t.each(function(r) {
                var s = t.eq(r);
                m && (e[0] = f.call(this, r, s.html())),
                C(s, e, i, n)
            });
        if (u && (c = _(e, t[0].ownerDocument, !1, t, n),
        r = c.firstChild,
        1 === c.childNodes.length && (c = r),
        r || n)) {
            for (a = (o = at.map(d(c, "script"), b)).length; u > h; h++)
                s = c,
                h !== p && (s = at.clone(s, !0, !0),
                a && at.merge(o, d(s, "script"))),
                i.call(t[h], s, h);
            if (a)
                for (l = o[o.length - 1].ownerDocument,
                at.map(o, T),
                h = 0; a > h; h++)
                    s = o[h],
                    Rt.test(s.type || "") && !at._data(s, "globalEval") && at.contains(l, s) && (s.src ? at._evalUrl && at._evalUrl(s.src) : at.globalEval((s.text || s.textContent || s.innerHTML || "").replace(Kt, "")));
            c = r = null
        }
        return t
    }
    function E(t, e, i) {
        for (var n, r = e ? at.filter(e, t) : t, s = 0; null != (n = r[s]); s++)
            i || 1 !== n.nodeType || at.cleanData(d(n)),
            n.parentNode && (i && at.contains(n.ownerDocument, n) && f(d(n, "script")),
            n.parentNode.removeChild(n));
        return t
    }
    function k(t, e) {
        var i = at(e.createElement(t)).appendTo(e.body)
          , n = at.css(i[0], "display");
        return i.detach(),
        n
    }
    function D(t) {
        var e = K
          , i = te[t];
        return i || ("none" !== (i = k(t, e)) && i || (Jt = (Jt || at("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        (e = (Jt[0].contentWindow || Jt[0].contentDocument).document).write(),
        e.close(),
        i = k(t, e),
        Jt.detach()),
        te[t] = i),
        i
    }
    function O(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function M(t) {
        if (t in me)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = fe.length; i--; )
            if ((t = fe[i] + e)in me)
                return t
    }
    function A(t, e) {
        for (var i, n, r, s = [], a = 0, o = t.length; o > a; a++)
            (n = t[a]).style && (s[a] = at._data(n, "olddisplay"),
            i = n.style.display,
            e ? (s[a] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && Ot(n) && (s[a] = at._data(n, "olddisplay", D(n.nodeName)))) : (r = Ot(n),
            (i && "none" !== i || !r) && at._data(n, "olddisplay", r ? i : at.css(n, "display"))));
        for (a = 0; o > a; a++)
            (n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[a] || "" : "none"));
        return t
    }
    function L(t, e, i) {
        var n = ue.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function R(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > s; s += 2)
            "margin" === i && (a += at.css(t, i + Dt[s], !0, r)),
            n ? ("content" === i && (a -= at.css(t, "padding" + Dt[s], !0, r)),
            "margin" !== i && (a -= at.css(t, "border" + Dt[s] + "Width", !0, r))) : (a += at.css(t, "padding" + Dt[s], !0, r),
            "padding" !== i && (a += at.css(t, "border" + Dt[s] + "Width", !0, r)));
        return a
    }
    function N(t, e, i) {
        var n = !0
          , r = "width" === e ? t.offsetWidth : t.offsetHeight
          , s = se(t)
          , a = st.boxSizing && "border-box" === at.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if ((0 > (r = ae(t, e, s)) || null == r) && (r = t.style[e]),
            ie.test(r))
                return r;
            n = a && (st.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + R(t, e, i || (a ? "border" : "content"), n, s) + "px"
    }
    function j(t, e, i, n, r) {
        return new j.prototype.init(t,e,i,n,r)
    }
    function z() {
        return t.setTimeout(function() {
            _e = void 0
        }),
        _e = at.now()
    }
    function I(t, e) {
        var i, n = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            i = Dt[r],
            n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function B(t, e, i) {
        for (var n, r = (H.tweeners[e] || []).concat(H.tweeners["*"]), s = 0, a = r.length; a > s; s++)
            if (n = r[s].call(i, e, t))
                return n
    }
    function H(t, e, i) {
        var n, r, s = 0, a = H.prefilters.length, o = at.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = _e || z(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, a = c.tweens.length; a > s; s++)
                c.tweens[s].run(n);
            return o.notifyWith(t, [c, n, i]),
            1 > n && a ? i : (o.resolveWith(t, [c]),
            !1)
        }, c = o.promise({
            elem: t,
            props: at.extend({}, e),
            opts: at.extend(!0, {
                specialEasing: {},
                easing: at.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: _e || z(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = at.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0
                  , n = e ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n > i; i++)
                    c.tweens[i].run(1);
                return e ? (o.notifyWith(t, [c, 1, 0]),
                o.resolveWith(t, [c, e])) : o.rejectWith(t, [c, e]),
                this
            }
        }), h = c.props;
        for (function(t, e) {
            var i, n, r, s, a;
            for (i in t)
                if (n = at.camelCase(i),
                r = e[n],
                s = t[i],
                at.isArray(s) && (r = s[1],
                s = t[i] = s[0]),
                i !== n && (t[n] = s,
                delete t[i]),
                (a = at.cssHooks[n]) && "expand"in a) {
                    s = a.expand(s),
                    delete t[n];
                    for (i in s)
                        i in t || (t[i] = s[i],
                        e[i] = r)
                } else
                    e[n] = r
        }(h, c.opts.specialEasing); a > s; s++)
            if (n = H.prefilters[s].call(c, t, h, c.opts))
                return at.isFunction(n.stop) && (at._queueHooks(c.elem, c.opts.queue).stop = at.proxy(n.stop, n)),
                n;
        return at.map(h, B, c),
        at.isFunction(c.opts.start) && c.opts.start.call(t, c),
        at.fx.timer(at.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function U(t) {
        return at.attr(t, "class") || ""
    }
    function F(t) {
        return function(e, i) {
            "string" != typeof e && (i = e,
            e = "*");
            var n, r = 0, s = e.toLowerCase().match(xt) || [];
            if (at.isFunction(i))
                for (; n = s[r++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                    (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function X(t, e, i, n) {
        function r(o) {
            var l;
            return s[o] = !0,
            at.each(t[o] || [], function(t, o) {
                var c = o(e, i, n);
                return "string" != typeof c || a || s[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                r(c),
                !1)
            }),
            l
        }
        var s = {}
          , a = t === Fe;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }
    function q(t, e) {
        var i, n, r = at.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && at.extend(!0, t, i),
        t
    }
    function Q(t) {
        return t.style && t.style.display || at.css(t, "display")
    }
    function Y(t, e, i, n) {
        var r;
        if (at.isArray(e))
            at.each(e, function(e, r) {
                i || We.test(t) ? n(t, r) : Y(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
        else if (i || "object" !== at.type(e))
            n(t, e);
        else
            for (r in e)
                Y(t + "[" + r + "]", e[r], i, n)
    }
    function W() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function G(t) {
        return at.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var $ = []
      , K = t.document
      , Z = $.slice
      , J = $.concat
      , tt = $.push
      , et = $.indexOf
      , it = {}
      , nt = it.toString
      , rt = it.hasOwnProperty
      , st = {}
      , at = function(t, e) {
        return new at.fn.init(t,e)
    }
      , ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , lt = /^-ms-/
      , ct = /-([\da-z])/gi
      , ht = function(t, e) {
        return e.toUpperCase()
    };
    at.fn = at.prototype = {
        jquery: "1.12.4",
        constructor: at,
        selector: "",
        length: 0,
        toArray: function() {
            return Z.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Z.call(this)
        },
        pushStack: function(t) {
            var e = at.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return at.each(this, t)
        },
        map: function(t) {
            return this.pushStack(at.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: tt,
        sort: $.sort,
        splice: $.splice
    },
    at.extend = at.fn.extend = function() {
        var t, e, i, n, r, s, a = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[o] || {},
        o++),
        "object" == typeof a || at.isFunction(a) || (a = {}),
        o === l && (a = this,
        o--); l > o; o++)
            if (null != (r = arguments[o]))
                for (n in r)
                    t = a[n],
                    i = r[n],
                    a !== i && (c && i && (at.isPlainObject(i) || (e = at.isArray(i))) ? (e ? (e = !1,
                    s = t && at.isArray(t) ? t : []) : s = t && at.isPlainObject(t) ? t : {},
                    a[n] = at.extend(c, s, i)) : void 0 !== i && (a[n] = i));
        return a
    }
    ,
    at.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === at.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === at.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !at.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== at.type(t) || t.nodeType || at.isWindow(t))
                return !1;
            try {
                if (t.constructor && !rt.call(t, "constructor") && !rt.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            if (!st.ownFirst)
                for (e in t)
                    return rt.call(t, e);
            for (e in t)
                ;
            return void 0 === e || rt.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? it[nt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && at.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(lt, "ms-").replace(ct, ht)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; n > r && !1 !== e.call(t[r], r, t[r]); r++)
                    ;
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? at.merge(n, "string" == typeof t ? [t] : t) : tt.call(n, t)),
            n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (et)
                    return et.call(e, t, i);
                for (n = e.length,
                i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t)
                        return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; )
                t[r++] = e[n++];
            if (i != i)
                for (; void 0 !== e[n]; )
                    t[r++] = e[n++];
            return t.length = r,
            t
        },
        grep: function(t, e, i) {
            for (var n = [], r = 0, s = t.length, a = !i; s > r; r++)
                !e(t[r], r) !== a && n.push(t[r]);
            return n
        },
        map: function(t, e, n) {
            var r, s, a = 0, o = [];
            if (i(t))
                for (r = t.length; r > a; a++)
                    null != (s = e(t[a], a, n)) && o.push(s);
            else
                for (a in t)
                    null != (s = e(t[a], a, n)) && o.push(s);
            return J.apply([], o)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (r = t[e],
            e = t,
            t = r),
            at.isFunction(t) ? (i = Z.call(arguments, 2),
            n = function() {
                return t.apply(e || this, i.concat(Z.call(arguments)))
            }
            ,
            n.guid = t.guid = t.guid || at.guid++,
            n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: st
    }),
    "function" == typeof Symbol && (at.fn[Symbol.iterator] = $[Symbol.iterator]),
    at.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        it["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function(t) {
        function e(t, e, i, n) {
            var r, s, a, o, l, c, u, d, f = e && e.ownerDocument, m = e ? e.nodeType : 9;
            if (i = i || [],
            "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                return i;
            if (!n && ((e ? e.ownerDocument || e : I) !== O && D(e),
            e = e || O,
            A)) {
                if (11 !== m && (c = mt.exec(t)))
                    if (r = c[1]) {
                        if (9 === m) {
                            if (!(a = e.getElementById(r)))
                                return i;
                            if (a.id === r)
                                return i.push(a),
                                i
                        } else if (f && (a = f.getElementById(r)) && j(e, a) && a.id === r)
                            return i.push(a),
                            i
                    } else {
                        if (c[2])
                            return $.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((r = c[3]) && y.getElementsByClassName && e.getElementsByClassName)
                            return $.apply(i, e.getElementsByClassName(r)),
                            i
                    }
                if (y.qsa && !X[t + " "] && (!L || !L.test(t))) {
                    if (1 !== m)
                        f = e,
                        d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((o = e.getAttribute("id")) ? o = o.replace(gt, "\\$&") : e.setAttribute("id", o = z),
                        s = (u = T(t)).length,
                        l = ht.test(o) ? "#" + o : "[id='" + o + "']"; s--; )
                            u[s] = l + " " + p(u[s]);
                        d = u.join(","),
                        f = _t.test(t) && h(e.parentNode) || e
                    }
                    if (d)
                        try {
                            return $.apply(i, f.querySelectorAll(d)),
                            i
                        } catch (t) {} finally {
                            o === z && e.removeAttribute("id")
                        }
                }
            }
            return P(t.replace(st, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[z] = !0,
            t
        }
        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--; )
                w.attrHandle[i[n]] = e
        }
        function a(t, e) {
            var i = e && t
              , n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function o(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function c(t) {
            return n(function(e) {
                return e = +e,
                n(function(i, n) {
                    for (var r, s = t([], i.length, e), a = s.length; a--; )
                        i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }
        function h(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function u() {}
        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)
                n += t[e].value;
            return n
        }
        function d(t, e, i) {
            var n = e.dir
              , r = i && "parentNode" === n
              , s = H++;
            return e.first ? function(e, i, s) {
                for (; e = e[n]; )
                    if (1 === e.nodeType || r)
                        return t(e, i, s)
            }
            : function(e, i, a) {
                var o, l, c, h = [B, s];
                if (a) {
                    for (; e = e[n]; )
                        if ((1 === e.nodeType || r) && t(e, i, a))
                            return !0
                } else
                    for (; e = e[n]; )
                        if (1 === e.nodeType || r) {
                            if (c = e[z] || (e[z] = {}),
                            l = c[e.uniqueID] || (c[e.uniqueID] = {}),
                            (o = l[n]) && o[0] === B && o[1] === s)
                                return h[2] = o[2];
                            if (l[n] = h,
                            h[2] = t(e, i, a))
                                return !0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--; )
                    if (!t[r](e, i, n))
                        return !1;
                return !0
            }
            : t[0]
        }
        function m(t, e, i, n, r) {
            for (var s, a = [], o = 0, l = t.length, c = null != e; l > o; o++)
                (s = t[o]) && (i && !i(s, n, r) || (a.push(s),
                c && e.push(o)));
            return a
        }
        function _(t, i, r, s, a, o) {
            return s && !s[z] && (s = _(s)),
            a && !a[z] && (a = _(a, o)),
            n(function(n, o, l, c) {
                var h, u, p, d = [], f = [], _ = o.length, g = n || function(t, i, n) {
                    for (var r = 0, s = i.length; s > r; r++)
                        e(t, i[r], n);
                    return n
                }(i || "*", l.nodeType ? [l] : l, []), v = !t || !n && i ? g : m(g, d, t, l, c), y = r ? a || (n ? t : _ || s) ? [] : o : v;
                if (r && r(v, y, l, c),
                s)
                    for (h = m(y, f),
                    s(h, [], l, c),
                    u = h.length; u--; )
                        (p = h[u]) && (y[f[u]] = !(v[f[u]] = p));
                if (n) {
                    if (a || t) {
                        if (a) {
                            for (h = [],
                            u = y.length; u--; )
                                (p = y[u]) && h.push(v[u] = p);
                            a(null, y = [], h, c)
                        }
                        for (u = y.length; u--; )
                            (p = y[u]) && (h = a ? Z(n, p) : d[u]) > -1 && (n[h] = !(o[h] = p))
                    }
                } else
                    y = m(y === o ? y.splice(_, y.length) : y),
                    a ? a(null, o, y, c) : $.apply(o, y)
            })
        }
        function g(t) {
            for (var e, i, n, r = t.length, s = w.relative[t[0].type], a = s || w.relative[" "], o = s ? 1 : 0, l = d(function(t) {
                return t === e
            }, a, !0), c = d(function(t) {
                return Z(e, t) > -1
            }, a, !0), h = [function(t, i, n) {
                var r = !s && (n || i !== C) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                return e = null,
                r
            }
            ]; r > o; o++)
                if (i = w.relative[t[o].type])
                    h = [d(f(h), i)];
                else {
                    if ((i = w.filter[t[o].type].apply(null, t[o].matches))[z]) {
                        for (n = ++o; r > n && !w.relative[t[n].type]; n++)
                            ;
                        return _(o > 1 && f(h), o > 1 && p(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(st, "$1"), i, n > o && g(t.slice(o, n)), r > n && g(t = t.slice(n)), r > n && p(t))
                    }
                    h.push(i)
                }
            return f(h)
        }
        var v, y, w, x, b, T, S, P, C, E, k, D, O, M, A, L, R, N, j, z = "sizzle" + 1 * new Date, I = t.document, B = 0, H = 0, U = i(), F = i(), X = i(), q = function(t, e) {
            return t === e && (k = !0),
            0
        }, Q = 1 << 31, Y = {}.hasOwnProperty, W = [], V = W.pop, G = W.push, $ = W.push, K = W.slice, Z = function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e)
                    return i;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", rt = new RegExp(tt + "+","g"), st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$","g"), at = new RegExp("^" + tt + "*," + tt + "*"), ot = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]","g"), ct = new RegExp(nt), ht = new RegExp("^" + et + "$"), ut = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + nt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)","i")
        }, pt = /^(?:input|select|textarea|button)$/i, dt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _t = /[+~]/, gt = /'|\\/g, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)","ig"), yt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, wt = function() {
            D()
        };
        try {
            $.apply(W = K.call(I.childNodes), I.childNodes),
            W[I.childNodes.length].nodeType
        } catch (t) {
            $ = {
                apply: W.length ? function(t, e) {
                    G.apply(t, K.call(e))
                }
                : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }
            }
        }
        y = e.support = {},
        b = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        D = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : I;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n,
            M = O.documentElement,
            A = !b(O),
            (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)),
            y.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            y.getElementsByTagName = r(function(t) {
                return t.appendChild(O.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            y.getElementsByClassName = ft.test(O.getElementsByClassName),
            y.getById = r(function(t) {
                return M.appendChild(t).id = z,
                !O.getElementsByName || !O.getElementsByName(z).length
            }),
            y.getById ? (w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && A) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }
            ,
            w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }
            ),
            w.find.TAG = y.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var i, n = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }
            ,
            w.find.CLASS = y.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && A ? e.getElementsByClassName(t) : void 0
            }
            ,
            R = [],
            L = [],
            (y.qsa = ft.test(O.querySelectorAll)) && (r(function(t) {
                M.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || L.push("\\[" + tt + "*(?:value|" + J + ")"),
                t.querySelectorAll("[id~=" + z + "-]").length || L.push("~="),
                t.querySelectorAll(":checked").length || L.push(":checked"),
                t.querySelectorAll("a#" + z + "+*").length || L.push(".#.+[+~]")
            }),
            r(function(t) {
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && L.push("name" + tt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                L.push(",.*:")
            })),
            (y.matchesSelector = ft.test(N = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                y.disconnectedMatch = N.call(t, "div"),
                N.call(t, "[s!='']:x"),
                R.push("!=", nt)
            }),
            L = L.length && new RegExp(L.join("|")),
            R = R.length && new RegExp(R.join("|")),
            e = ft.test(M.compareDocumentPosition),
            j = e || ft.test(M.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t
                  , n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            q = e ? function(t, e) {
                if (t === e)
                    return k = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !y.sortDetached && e.compareDocumentPosition(t) === i ? t === O || t.ownerDocument === I && j(I, t) ? -1 : e === O || e.ownerDocument === I && j(I, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return k = !0,
                    0;
                var i, n = 0, r = t.parentNode, s = e.parentNode, o = [t], l = [e];
                if (!r || !s)
                    return t === O ? -1 : e === O ? 1 : r ? -1 : s ? 1 : E ? Z(E, t) - Z(E, e) : 0;
                if (r === s)
                    return a(t, e);
                for (i = t; i = i.parentNode; )
                    o.unshift(i);
                for (i = e; i = i.parentNode; )
                    l.unshift(i);
                for (; o[n] === l[n]; )
                    n++;
                return n ? a(o[n], l[n]) : o[n] === I ? -1 : l[n] === I ? 1 : 0
            }
            ,
            O) : O
        }
        ,
        e.matches = function(t, i) {
            return e(t, null, null, i)
        }
        ,
        e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== O && D(t),
            i = i.replace(lt, "='$1']"),
            y.matchesSelector && A && !X[i + " "] && (!R || !R.test(i)) && (!L || !L.test(i)))
                try {
                    var n = N.call(t, i);
                    if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {}
            return e(i, O, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && D(t),
            j(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && D(t);
            var i = w.attrHandle[e.toLowerCase()]
              , n = i && Y.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !A) : void 0;
            return void 0 !== n ? n : y.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, i = [], n = 0, r = 0;
            if (k = !y.detectDuplicates,
            E = !y.sortStable && t.slice(0),
            t.sort(q),
            k) {
                for (; e = t[r++]; )
                    e === t[r] && (n = i.push(r));
                for (; n--; )
                    t.splice(i[n], 1)
            }
            return E = null,
            t
        }
        ,
        x = e.getText = function(t) {
            var e, i = "", n = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += x(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += x(e);
            return i
        }
        ,
        (w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ut,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(vt, yt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                    t[2] = i.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(vt, yt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && U(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : !i || (s += "",
                        "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3)
                      , a = "last" !== t.slice(-4)
                      , o = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, i, l) {
                        var c, h, u, p, d, f, m = s !== a ? "nextSibling" : "previousSibling", _ = e.parentNode, g = o && e.nodeName.toLowerCase(), v = !l && !o, y = !1;
                        if (_) {
                            if (s) {
                                for (; m; ) {
                                    for (p = e; p = p[m]; )
                                        if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                            return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? _.firstChild : _.lastChild],
                            a && v) {
                                for (y = (d = (c = (h = (u = (p = _)[z] || (p[z] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === B && c[1]) && c[2],
                                p = d && _.childNodes[d]; p = ++d && p && p[m] || (y = d = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++y && p === e) {
                                        h[t] = [B, d, y];
                                        break
                                    }
                            } else if (v && (p = e,
                            u = p[z] || (p[z] = {}),
                            h = u[p.uniqueID] || (u[p.uniqueID] = {}),
                            c = h[t] || [],
                            d = c[0] === B && c[1],
                            y = d),
                            !1 === y)
                                for (; (p = ++d && p && p[m] || (y = d = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++y || (v && (u = p[z] || (p[z] = {}),
                                h = u[p.uniqueID] || (u[p.uniqueID] = {}),
                                h[t] = [B, y]),
                                p !== e)); )
                                    ;
                            return (y -= r) === n || y % n == 0 && y / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[z] ? s(i) : s.length > 1 ? (r = [t, t, "", i],
                    w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), a = r.length; a--; )
                            n = Z(t, r[a]),
                            t[n] = !(e[n] = r[a])
                    }) : function(t) {
                        return s(t, 0, r)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = []
                      , i = []
                      , r = S(t.replace(st, "$1"));
                    return r[z] ? n(function(t, e, i, n) {
                        for (var s, a = r(t, null, n, []), o = t.length; o--; )
                            (s = a[o]) && (t[o] = !(e[o] = s))
                    }) : function(t, n, s) {
                        return e[0] = t,
                        r(e, null, s, i),
                        e[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(vt, yt),
                    function(e) {
                        return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(vt, yt).toLowerCase(),
                    function(e) {
                        var i;
                        do {
                            if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return dt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2)
                        t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2)
                        t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; )
                        t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (v in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[v] = o(v);
        for (v in {
            submit: !0,
            reset: !0
        })
            w.pseudos[v] = l(v);
        return u.prototype = w.filters = w.pseudos,
        w.setFilters = new u,
        T = e.tokenize = function(t, i) {
            var n, r, s, a, o, l, c, h = F[t + " "];
            if (h)
                return i ? 0 : h.slice(0);
            for (o = t,
            l = [],
            c = w.preFilter; o; ) {
                n && !(r = at.exec(o)) || (r && (o = o.slice(r[0].length) || o),
                l.push(s = [])),
                n = !1,
                (r = ot.exec(o)) && (n = r.shift(),
                s.push({
                    value: n,
                    type: r[0].replace(st, " ")
                }),
                o = o.slice(n.length));
                for (a in w.filter)
                    !(r = ut[a].exec(o)) || c[a] && !(r = c[a](r)) || (n = r.shift(),
                    s.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    o = o.slice(n.length));
                if (!n)
                    break
            }
            return i ? o.length : o ? e.error(t) : F(t, l).slice(0)
        }
        ,
        S = e.compile = function(t, i) {
            var r, s = [], a = [], o = X[t + " "];
            if (!o) {
                for (i || (i = T(t)),
                r = i.length; r--; )
                    (o = g(i[r]))[z] ? s.push(o) : a.push(o);
                (o = X(t, function(t, i) {
                    var r = i.length > 0
                      , s = t.length > 0
                      , a = function(n, a, o, l, c) {
                        var h, u, p, d = 0, f = "0", _ = n && [], g = [], v = C, y = n || s && w.find.TAG("*", c), x = B += null == v ? 1 : Math.random() || .1, b = y.length;
                        for (c && (C = a === O || a || c); f !== b && null != (h = y[f]); f++) {
                            if (s && h) {
                                for (u = 0,
                                a || h.ownerDocument === O || (D(h),
                                o = !A); p = t[u++]; )
                                    if (p(h, a || O, o)) {
                                        l.push(h);
                                        break
                                    }
                                c && (B = x)
                            }
                            r && ((h = !p && h) && d--,
                            n && _.push(h))
                        }
                        if (d += f,
                        r && f !== d) {
                            for (u = 0; p = i[u++]; )
                                p(_, g, a, o);
                            if (n) {
                                if (d > 0)
                                    for (; f--; )
                                        _[f] || g[f] || (g[f] = V.call(l));
                                g = m(g)
                            }
                            $.apply(l, g),
                            c && !n && g.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (B = x,
                        C = v),
                        _
                    };
                    return r ? n(a) : a
                }(a, s))).selector = t
            }
            return o
        }
        ,
        P = e.select = function(t, e, i, n) {
            var r, s, a, o, l, c = "function" == typeof t && t, u = !n && T(t = c.selector || t);
            if (i = i || [],
            1 === u.length) {
                if ((s = u[0] = u[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && y.getById && 9 === e.nodeType && A && w.relative[s[1].type]) {
                    if (!(e = (w.find.ID(a.matches[0].replace(vt, yt), e) || [])[0]))
                        return i;
                    c && (e = e.parentNode),
                    t = t.slice(s.shift().value.length)
                }
                for (r = ut.needsContext.test(t) ? 0 : s.length; r-- && (a = s[r],
                !w.relative[o = a.type]); )
                    if ((l = w.find[o]) && (n = l(a.matches[0].replace(vt, yt), _t.test(s[0].type) && h(e.parentNode) || e))) {
                        if (s.splice(r, 1),
                        !(t = n.length && p(s)))
                            return $.apply(i, n),
                            i;
                        break
                    }
            }
            return (c || S(t, u))(n, e, !A, i, !e || _t.test(t) && h(e.parentNode) || e),
            i
        }
        ,
        y.sortStable = z.split("").sort(q).join("") === z,
        y.detectDuplicates = !!k,
        D(),
        y.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        y.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(J, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }),
        e
    }(t);
    at.find = ut,
    at.expr = ut.selectors,
    at.expr[":"] = at.expr.pseudos,
    at.uniqueSort = at.unique = ut.uniqueSort,
    at.text = ut.getText,
    at.isXMLDoc = ut.isXML,
    at.contains = ut.contains;
    var pt = function(t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && at(t).is(i))
                    break;
                n.push(t)
            }
        return n
    }
      , dt = function(t, e) {
        for (var i = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && i.push(t);
        return i
    }
      , ft = at.expr.match.needsContext
      , mt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , _t = /^.[^:#\[\.,]*$/;
    at.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? at.find.matchesSelector(n, t) ? [n] : [] : at.find.matches(t, at.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    at.fn.extend({
        find: function(t) {
            var e, i = [], n = this, r = n.length;
            if ("string" != typeof t)
                return this.pushStack(at(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (at.contains(n[e], this))
                            return !0
                }));
            for (e = 0; r > e; e++)
                at.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? at.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t : t,
            i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ft.test(t) ? at(t) : t || [], !1).length
        }
    });
    var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (at.fn.init = function(t, e, i) {
        var n, r;
        if (!t)
            return this;
        if (i = i || gt,
        "string" == typeof t) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : vt.exec(t)) || !n[1] && e)
                return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof at ? e[0] : e,
                at.merge(this, at.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)),
                mt.test(n[1]) && at.isPlainObject(e))
                    for (n in e)
                        at.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if ((r = K.getElementById(n[2])) && r.parentNode) {
                if (r.id !== n[2])
                    return gt.find(t);
                this.length = 1,
                this[0] = r
            }
            return this.context = K,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : at.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(at) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        at.makeArray(t, this))
    }
    ).prototype = at.fn,
    gt = at(K);
    var yt = /^(?:parents|prev(?:Until|All))/
      , wt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    at.fn.extend({
        has: function(t) {
            var e, i = at(t, this), n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (at.contains(this, i[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], a = ft.test(t) || "string" != typeof t ? at(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && at.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? at.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? at.inArray(this[0], at(t)) : at.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(at.uniqueSort(at.merge(this.get(), at(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    at.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return pt(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return pt(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return pt(t, "nextSibling")
        },
        prevAll: function(t) {
            return pt(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return pt(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return pt(t, "previousSibling", i)
        },
        siblings: function(t) {
            return dt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return dt(t.firstChild)
        },
        contents: function(t) {
            return at.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : at.merge([], t.childNodes)
        }
    }, function(t, e) {
        at.fn[t] = function(i, n) {
            var r = at.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (r = at.filter(n, r)),
            this.length > 1 && (wt[t] || (r = at.uniqueSort(r)),
            yt.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var xt = /\S+/g;
    at.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return at.each(t.match(xt) || [], function(t, i) {
                e[i] = !0
            }),
            e
        }(t) : at.extend({}, t);
        var e, i, n, r, s = [], a = [], o = -1, l = function() {
            for (r = t.once,
            n = e = !0; a.length; o = -1)
                for (i = a.shift(); ++o < s.length; )
                    !1 === s[o].apply(i[0], i[1]) && t.stopOnFalse && (o = s.length,
                    i = !1);
            t.memory || (i = !1),
            e = !1,
            r && (s = i ? [] : "")
        }, c = {
            add: function() {
                return s && (i && !e && (o = s.length - 1,
                a.push(i)),
                function e(i) {
                    at.each(i, function(i, n) {
                        at.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== at.type(n) && e(n)
                    })
                }(arguments),
                i && !e && l()),
                this
            },
            remove: function() {
                return at.each(arguments, function(t, e) {
                    for (var i; (i = at.inArray(e, s, i)) > -1; )
                        s.splice(i, 1),
                        o >= i && o--
                }),
                this
            },
            has: function(t) {
                return t ? at.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = a = [],
                s = i = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = !0,
                i || c.disable(),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(t, i) {
                return r || (i = i || [],
                i = [t, i.slice ? i.slice() : i],
                a.push(i),
                e || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return c
    }
    ,
    at.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", at.Callbacks("once memory"), "resolved"], ["reject", "fail", at.Callbacks("once memory"), "rejected"], ["notify", "progress", at.Callbacks("memory")]]
              , i = "pending"
              , n = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return at.Deferred(function(i) {
                        at.each(e, function(e, s) {
                            var a = at.isFunction(t[e]) && t[e];
                            r[s[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && at.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? at.extend(t, n) : n
                }
            }
              , r = {};
            return n.pipe = n.then,
            at.each(e, function(t, s) {
                var a = s[2]
                  , o = s[3];
                n[s[1]] = a.add,
                o && a.add(function() {
                    i = o
                }, e[1 ^ t][2].disable, e[2][2].lock),
                r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments),
                    this
                }
                ,
                r[s[0] + "With"] = a.fireWith
            }),
            n.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, i, n, r = 0, s = Z.call(arguments), a = s.length, o = 1 !== a || t && at.isFunction(t.promise) ? a : 0, l = 1 === o ? t : at.Deferred(), c = function(t, i, n) {
                return function(r) {
                    i[t] = this,
                    n[t] = arguments.length > 1 ? Z.call(arguments) : r,
                    n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                }
            };
            if (a > 1)
                for (e = new Array(a),
                i = new Array(a),
                n = new Array(a); a > r; r++)
                    s[r] && at.isFunction(s[r].promise) ? s[r].promise().progress(c(r, i, e)).done(c(r, n, s)).fail(l.reject) : --o;
            return o || l.resolveWith(n, s),
            l.promise()
        }
    });
    var bt;
    at.fn.ready = function(t) {
        return at.ready.promise().done(t),
        this
    }
    ,
    at.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? at.readyWait++ : at.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --at.readyWait : at.isReady) || (at.isReady = !0,
            !0 !== t && --at.readyWait > 0 || (bt.resolveWith(K, [at]),
            at.fn.triggerHandler && (at(K).triggerHandler("ready"),
            at(K).off("ready"))))
        }
    }),
    at.ready.promise = function(e) {
        if (!bt)
            if (bt = at.Deferred(),
            "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll)
                t.setTimeout(at.ready);
            else if (K.addEventListener)
                K.addEventListener("DOMContentLoaded", a),
                t.addEventListener("load", a);
            else {
                K.attachEvent("onreadystatechange", a),
                t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && K.documentElement
                } catch (t) {}
                i && i.doScroll && function e() {
                    if (!at.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (i) {
                            return t.setTimeout(e, 50)
                        }
                        s(),
                        at.ready()
                    }
                }()
            }
        return bt.promise(e)
    }
    ,
    at.ready.promise();
    var Tt;
    for (Tt in at(st))
        break;
    st.ownFirst = "0" === Tt,
    st.inlineBlockNeedsLayout = !1,
    at(function() {
        var t, e, i, n;
        (i = K.getElementsByTagName("body")[0]) && i.style && (e = K.createElement("div"),
        n = K.createElement("div"),
        n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        i.appendChild(n).appendChild(e),
        void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        st.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
        t && (i.style.zoom = 1)),
        i.removeChild(n))
    }),
    function() {
        var t = K.createElement("div");
        st.deleteExpando = !0;
        try {
            delete t.test
        } catch (t) {
            st.deleteExpando = !1
        }
        t = null
    }();
    var St = function(t) {
        var e = at.noData[(t.nodeName + " ").toLowerCase()]
          , i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }
      , Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ct = /([A-Z])/g;
    at.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? at.cache[t[at.expando]] : t[at.expando]) && !l(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return h(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return h(t, e, !0)
        }
    }),
    at.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0], a = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = at.data(s),
                1 === s.nodeType && !at._data(s, "parsedAttrs"))) {
                    for (i = a.length; i--; )
                        a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = at.camelCase(n.slice(5)),
                        o(s, n, r[n]));
                    at._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                at.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                at.data(this, t, e)
            }) : s ? o(s, t, at.data(s, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                at.removeData(this, t)
            })
        }
    }),
    at.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue",
            n = at._data(t, e),
            i && (!n || at.isArray(i) ? n = at._data(t, e, at.makeArray(i)) : n.push(i)),
            n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = at.queue(t, e)
              , n = i.length
              , r = i.shift()
              , s = at._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(),
            n--),
            r && ("fx" === e && i.unshift("inprogress"),
            delete s.stop,
            r.call(t, function() {
                at.dequeue(t, e)
            }, s)),
            !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return at._data(t, i) || at._data(t, i, {
                empty: at.Callbacks("once memory").add(function() {
                    at._removeData(t, e + "queue"),
                    at._removeData(t, i)
                })
            })
        }
    }),
    at.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            i--),
            arguments.length < i ? at.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = at.queue(this, t, e);
                at._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && at.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                at.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1, r = at.Deferred(), s = this, a = this.length, o = function() {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (i = at._data(s[a], t + "queueHooks")) && i.empty && (n++,
                i.empty.add(o));
            return o(),
            r.promise(e)
        }
    }),
    function() {
        var t;
        st.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t = !1;
            var e, i, n;
            return (i = K.getElementsByTagName("body")[0]) && i.style ? (e = K.createElement("div"),
            n = K.createElement("div"),
            n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            i.appendChild(n).appendChild(e),
            void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            e.appendChild(K.createElement("div")).style.width = "5px",
            t = 3 !== e.offsetWidth),
            i.removeChild(n),
            t) : void 0
        }
    }();
    var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , kt = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$","i")
      , Dt = ["Top", "Right", "Bottom", "Left"]
      , Ot = function(t, e) {
        return t = e || t,
        "none" === at.css(t, "display") || !at.contains(t.ownerDocument, t)
    }
      , Mt = function(t, e, i, n, r, s, a) {
        var o = 0
          , l = t.length
          , c = null == i;
        if ("object" === at.type(i)) {
            r = !0;
            for (o in i)
                Mt(t, e, o, i[o], !0, s, a)
        } else if (void 0 !== n && (r = !0,
        at.isFunction(n) || (a = !0),
        c && (a ? (e.call(t, n),
        e = null) : (c = e,
        e = function(t, e, i) {
            return c.call(at(t), i)
        }
        )),
        e))
            for (; l > o; o++)
                e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
        return r ? t : c ? e.call(t) : l ? e(t[0], i) : s
    }
      , At = /^(?:checkbox|radio)$/i
      , Lt = /<([\w:-]+)/
      , Rt = /^$|\/(?:java|ecma)script/i
      , Nt = /^\s+/
      , jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var t = K.createElement("div")
          , e = K.createDocumentFragment()
          , i = K.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        st.leadingWhitespace = 3 === t.firstChild.nodeType,
        st.tbody = !t.getElementsByTagName("tbody").length,
        st.htmlSerialize = !!t.getElementsByTagName("link").length,
        st.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML,
        i.type = "checkbox",
        i.checked = !0,
        e.appendChild(i),
        st.appendChecked = i.checked,
        t.innerHTML = "<textarea>x</textarea>",
        st.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        (i = K.createElement("input")).setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        t.appendChild(i),
        st.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        st.noCloneEvent = !!t.addEventListener,
        t[at.expando] = 1,
        st.attributes = !t.getAttribute(at.expando)
    }();
    var zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: st.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    zt.optgroup = zt.option,
    zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead,
    zt.th = zt.td;
    var It = /<|&#?\w+;/
      , Bt = /<tbody/i;
    !function() {
        var e, i, n = K.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            i = "on" + e,
            (st[e] = i in t) || (n.setAttribute(i, "t"),
            st[e] = !1 === n.attributes[i].expando);
        n = null
    }();
    var Ht = /^(?:input|select|textarea)$/i
      , Ut = /^key/
      , Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Xt = /^(?:focusinfocus|focusoutblur)$/
      , qt = /^([^.]*)(?:\.(.+)|)/;
    at.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, a, o, l, c, h, u, p, d, f, m, _ = at._data(t);
            if (_) {
                for (i.handler && (l = i,
                i = l.handler,
                r = l.selector),
                i.guid || (i.guid = at.guid++),
                (a = _.events) || (a = _.events = {}),
                (h = _.handle) || (h = _.handle = function(t) {
                    return void 0 === at || t && at.event.triggered === t.type ? void 0 : at.event.dispatch.apply(h.elem, arguments)
                }
                ,
                h.elem = t),
                o = (e = (e || "").match(xt) || [""]).length; o--; )
                    s = qt.exec(e[o]) || [],
                    d = m = s[1],
                    f = (s[2] || "").split(".").sort(),
                    d && (c = at.event.special[d] || {},
                    d = (r ? c.delegateType : c.bindType) || d,
                    c = at.event.special[d] || {},
                    u = at.extend({
                        type: d,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && at.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l),
                    (p = a[d]) || (p = a[d] = [],
                    p.delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, n, f, h) || (t.addEventListener ? t.addEventListener(d, h, !1) : t.attachEvent && t.attachEvent("on" + d, h))),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    at.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, r) {
            var s, a, o, l, c, h, u, p, d, f, m, _ = at.hasData(t) && at._data(t);
            if (_ && (h = _.events)) {
                for (c = (e = (e || "").match(xt) || [""]).length; c--; )
                    if (o = qt.exec(e[c]) || [],
                    d = m = o[1],
                    f = (o[2] || "").split(".").sort(),
                    d) {
                        for (u = at.event.special[d] || {},
                        p = h[d = (n ? u.delegateType : u.bindType) || d] || [],
                        o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = s = p.length; s--; )
                            a = p[s],
                            !r && m !== a.origType || i && i.guid !== a.guid || o && !o.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (p.splice(s, 1),
                            a.selector && p.delegateCount--,
                            u.remove && u.remove.call(t, a));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, _.handle) || at.removeEvent(t, d, _.handle),
                        delete h[d])
                    } else
                        for (d in h)
                            at.event.remove(t, d + e[c], i, n, !0);
                at.isEmptyObject(h) && (delete _.handle,
                at._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var s, a, o, l, c, h, u, p = [n || K], d = rt.call(e, "type") ? e.type : e, f = rt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = h = n = n || K,
            3 !== n.nodeType && 8 !== n.nodeType && !Xt.test(d + at.event.triggered) && (d.indexOf(".") > -1 && (f = d.split("."),
            d = f.shift(),
            f.sort()),
            a = d.indexOf(":") < 0 && "on" + d,
            e = e[at.expando] ? e : new at.Event(d,"object" == typeof e && e),
            e.isTrigger = r ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            i = null == i ? [e] : at.makeArray(i, [e]),
            c = at.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, i))) {
                if (!r && !c.noBubble && !at.isWindow(n)) {
                    for (l = c.delegateType || d,
                    Xt.test(l + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        h = o;
                    h === (n.ownerDocument || K) && p.push(h.defaultView || h.parentWindow || t)
                }
                for (u = 0; (o = p[u++]) && !e.isPropagationStopped(); )
                    e.type = u > 1 ? l : c.bindType || d,
                    (s = (at._data(o, "events") || {})[e.type] && at._data(o, "handle")) && s.apply(o, i),
                    (s = a && o[a]) && s.apply && St(o) && (e.result = s.apply(o, i),
                    !1 === e.result && e.preventDefault());
                if (e.type = d,
                !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), i)) && St(n) && a && n[d] && !at.isWindow(n)) {
                    (h = n[a]) && (n[a] = null),
                    at.event.triggered = d;
                    try {
                        n[d]()
                    } catch (t) {}
                    at.event.triggered = void 0,
                    h && (n[a] = h)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = at.event.fix(t);
            var e, i, n, r, s, a = [], o = Z.call(arguments), l = (at._data(this, "events") || {})[t.type] || [], c = at.event.special[t.type] || {};
            if (o[0] = t,
            t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (a = at.event.handlers.call(this, t, l),
                e = 0; (r = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem,
                    i = 0; (s = r.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s,
                        t.data = s.data,
                        void 0 !== (n = ((at.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (t.result = n) && (t.preventDefault(),
                        t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, a = [], o = e.delegateCount, l = t.target;
            if (o && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (n = [],
                        i = 0; o > i; i++)
                            s = e[i],
                            r = s.selector + " ",
                            void 0 === n[r] && (n[r] = s.needsContext ? at(r, this).index(l) > -1 : at.find(r, this, null, [l]).length),
                            n[r] && n.push(s);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return o < e.length && a.push({
                elem: this,
                handlers: e.slice(o)
            }),
            a
        },
        fix: function(t) {
            if (t[at.expando])
                return t;
            var e, i, n, r = t.type, s = t, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ft.test(r) ? this.mouseHooks : Ut.test(r) ? this.keyHooks : {}),
            n = a.props ? this.props.concat(a.props) : this.props,
            t = new at.Event(s),
            e = n.length; e--; )
                i = n[e],
                t[i] = s[i];
            return t.target || (t.target = s.srcElement || K),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, s = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K,
                r = n.documentElement,
                i = n.body,
                t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a),
                t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== y() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === y() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return at.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return at.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i) {
            var n = at.extend(new at.Event, i, {
                type: t,
                isSimulated: !0
            });
            at.event.trigger(n, null, e),
            n.isDefaultPrevented() && i.preventDefault()
        }
    },
    at.removeEvent = K.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }
    : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (void 0 === t[n] && (t[n] = null),
        t.detachEvent(n, i))
    }
    ,
    at.Event = function(t, e) {
        return this instanceof at.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? g : v) : this.type = t,
        e && at.extend(this, e),
        this.timeStamp = t && t.timeStamp || at.now(),
        void (this[at.expando] = !0)) : new at.Event(t,e)
    }
    ,
    at.Event.prototype = {
        constructor: at.Event,
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = g,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = g,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = g,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    at.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        at.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget, r = t.handleObj;
                return n && (n === this || at.contains(this, n)) || (t.type = r.origType,
                i = r.handler.apply(this, arguments),
                t.type = e),
                i
            }
        }
    }),
    st.submit || (at.event.special.submit = {
        setup: function() {
            return !at.nodeName(this, "form") && void at.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , i = at.nodeName(e, "input") || at.nodeName(e, "button") ? at.prop(e, "form") : void 0;
                i && !at._data(i, "submit") && (at.event.add(i, "submit._submit", function(t) {
                    t._submitBubble = !0
                }),
                at._data(i, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble,
            this.parentNode && !t.isTrigger && at.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !at.nodeName(this, "form") && void at.event.remove(this, "._submit")
        }
    }),
    st.change || (at.event.special.change = {
        setup: function() {
            return Ht.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (at.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }),
            at.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                at.event.simulate("change", this, t)
            })),
            !1) : void at.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ht.test(e.nodeName) && !at._data(e, "change") && (at.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || at.event.simulate("change", this.parentNode, t)
                }),
                at._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return at.event.remove(this, "._change"),
            !Ht.test(this.nodeName)
        }
    }),
    st.focusin || at.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            at.event.simulate(e, t.target, at.event.fix(t))
        };
        at.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , r = at._data(n, e);
                r || n.addEventListener(t, i, !0),
                at._data(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , r = at._data(n, e) - 1;
                r ? at._data(n, e, r) : (n.removeEventListener(t, i, !0),
                at._removeData(n, e))
            }
        }
    }),
    at.fn.extend({
        on: function(t, e, i, n) {
            return w(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return w(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj,
                at(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e,
            e = void 0),
            !1 === i && (i = v),
            this.each(function() {
                at.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                at.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? at.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Qt = / jQuery\d+="(?:null|\d+)"/g
      , Yt = new RegExp("<(?:" + jt + ")[\\s/>]","i")
      , Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Vt = /<script|<style|<link/i
      , Gt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , $t = /^true\/(.*)/
      , Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Zt = p(K).appendChild(K.createElement("div"));
    at.extend({
        htmlPrefilter: function(t) {
            return t.replace(Wt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, r, s, a, o, l = at.contains(t.ownerDocument, t);
            if (st.html5Clone || at.isXMLDoc(t) || !Yt.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Zt.innerHTML = t.outerHTML,
            Zt.removeChild(s = Zt.firstChild)),
            !(st.noCloneEvent && st.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || at.isXMLDoc(t)))
                for (n = d(s),
                o = d(t),
                a = 0; null != (r = o[a]); ++a)
                    n[a] && P(r, n[a]);
            if (e)
                if (i)
                    for (o = o || d(t),
                    n = n || d(s),
                    a = 0; null != (r = o[a]); a++)
                        S(r, n[a]);
                else
                    S(t, s);
            return (n = d(s, "script")).length > 0 && f(n, !l && d(t, "script")),
            n = o = r = null,
            s
        },
        cleanData: function(t, e) {
            for (var i, n, r, s, a = 0, o = at.expando, l = at.cache, c = st.attributes, h = at.event.special; null != (i = t[a]); a++)
                if ((e || St(i)) && (r = i[o],
                s = r && l[r])) {
                    if (s.events)
                        for (n in s.events)
                            h[n] ? at.event.remove(i, n) : at.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r],
                    c || void 0 === i.removeAttribute ? i[o] = void 0 : i.removeAttribute(o),
                    $.push(r))
                }
        }
    }),
    at.fn.extend({
        domManip: C,
        detach: function(t) {
            return E(this, t, !0)
        },
        remove: function(t) {
            return E(this, t)
        },
        text: function(t) {
            return Mt(this, function(t) {
                return void 0 === t ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return C(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    x(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return C(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return C(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return C(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && at.cleanData(d(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && at.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return at.clone(this, t, e)
            })
        },
        html: function(t) {
            return Mt(this, function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Qt, "") : void 0;
                if ("string" == typeof t && !Vt.test(t) && (st.htmlSerialize || !Yt.test(t)) && (st.leadingWhitespace || !Nt.test(t)) && !zt[(Lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = at.htmlPrefilter(t);
                    try {
                        for (; n > i; i++)
                            1 === (e = this[i] || {}).nodeType && (at.cleanData(d(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return C(this, arguments, function(e) {
                var i = this.parentNode;
                at.inArray(this, t) < 0 && (at.cleanData(d(this)),
                i && i.replaceChild(e, this))
            }, t)
        }
    }),
    at.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        at.fn[t] = function(t) {
            for (var i, n = 0, r = [], s = at(t), a = s.length - 1; a >= n; n++)
                i = n === a ? this : this.clone(!0),
                at(s[n])[e](i),
                tt.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Jt, te = {
        HTML: "block",
        BODY: "block"
    }, ee = /^margin/, ie = new RegExp("^(" + Et + ")(?!px)[a-z%]+$","i"), ne = function(t, e, i, n) {
        var r, s, a = {};
        for (s in e)
            a[s] = t.style[s],
            t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e)
            t.style[s] = a[s];
        return r
    }, re = K.documentElement;
    !function() {
        function e() {
            var e, h, u = K.documentElement;
            u.appendChild(l),
            c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            i = r = o = !1,
            n = a = !0,
            t.getComputedStyle && (h = t.getComputedStyle(c),
            i = "1%" !== (h || {}).top,
            o = "2px" === (h || {}).marginLeft,
            r = "4px" === (h || {
                width: "4px"
            }).width,
            c.style.marginRight = "50%",
            n = "4px" === (h || {
                marginRight: "4px"
            }).marginRight,
            e = c.appendChild(K.createElement("div")),
            e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            c.style.width = "1px",
            a = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
            c.removeChild(e)),
            c.style.display = "none",
            (s = 0 === c.getClientRects().length) && (c.style.display = "",
            c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            c.childNodes[0].style.borderCollapse = "separate",
            e = c.getElementsByTagName("td"),
            e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (s = 0 === e[0].offsetHeight) && (e[0].style.display = "",
            e[1].style.display = "none",
            s = 0 === e[0].offsetHeight)),
            u.removeChild(l)
        }
        var i, n, r, s, a, o, l = K.createElement("div"), c = K.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5",
        st.opacity = "0.5" === c.style.opacity,
        st.cssFloat = !!c.style.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        st.clearCloneStyle = "content-box" === c.style.backgroundClip,
        (l = K.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        c.innerHTML = "",
        l.appendChild(c),
        st.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing,
        at.extend(st, {
            reliableHiddenOffsets: function() {
                return null == i && e(),
                s
            },
            boxSizingReliable: function() {
                return null == i && e(),
                r
            },
            pixelMarginRight: function() {
                return null == i && e(),
                n
            },
            pixelPosition: function() {
                return null == i && e(),
                i
            },
            reliableMarginRight: function() {
                return null == i && e(),
                a
            },
            reliableMarginLeft: function() {
                return null == i && e(),
                o
            }
        }))
    }();
    var se, ae, oe = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (se = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t),
        i.getComputedStyle(e)
    }
    ,
    ae = function(t, e, i) {
        var n, r, s, a, o = t.style;
        return i = i || se(t),
        "" !== (a = i ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== a || at.contains(t.ownerDocument, t) || (a = at.style(t, e)),
        i && !st.pixelMarginRight() && ie.test(a) && ee.test(e) && (n = o.width,
        r = o.minWidth,
        s = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = a,
        a = i.width,
        o.width = n,
        o.minWidth = r,
        o.maxWidth = s),
        void 0 === a ? a : a + ""
    }
    ) : re.currentStyle && (se = function(t) {
        return t.currentStyle
    }
    ,
    ae = function(t, e, i) {
        var n, r, s, a, o = t.style;
        return i = i || se(t),
        null == (a = i ? i[e] : void 0) && o && o[e] && (a = o[e]),
        ie.test(a) && !oe.test(e) && (n = o.left,
        r = t.runtimeStyle,
        (s = r && r.left) && (r.left = t.currentStyle.left),
        o.left = "fontSize" === e ? "1em" : a,
        a = o.pixelLeft + "px",
        o.left = n,
        s && (r.left = s)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var le = /alpha\([^)]*\)/i
      , ce = /opacity\s*=\s*([^)]*)/i
      , he = /^(none|table(?!-c[ea]).+)/
      , ue = new RegExp("^(" + Et + ")(.*)$","i")
      , pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , de = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , fe = ["Webkit", "O", "Moz", "ms"]
      , me = K.createElement("div").style;
    at.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ae(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: st.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, o = at.camelCase(e), l = t.style;
                if (e = at.cssProps[o] || (at.cssProps[o] = M(o) || o),
                a = at.cssHooks[e] || at.cssHooks[o],
                void 0 === i)
                    return a && "get"in a && void 0 !== (r = a.get(t, !1, n)) ? r : l[e];
                if ("string" === (s = typeof i) && (r = kt.exec(i)) && r[1] && (i = u(t, e, r),
                s = "number"),
                null != i && i == i && ("number" === s && (i += r && r[3] || (at.cssNumber[o] ? "" : "px")),
                st.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                !(a && "set"in a && void 0 === (i = a.set(t, i, n)))))
                    try {
                        l[e] = i
                    } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var r, s, a, o = at.camelCase(e);
            return e = at.cssProps[o] || (at.cssProps[o] = M(o) || o),
            (a = at.cssHooks[e] || at.cssHooks[o]) && "get"in a && (s = a.get(t, !0, i)),
            void 0 === s && (s = ae(t, e, n)),
            "normal" === s && e in de && (s = de[e]),
            "" === i || i ? (r = parseFloat(s),
            !0 === i || isFinite(r) ? r || 0 : s) : s
        }
    }),
    at.each(["height", "width"], function(t, e) {
        at.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? he.test(at.css(t, "display")) && 0 === t.offsetWidth ? ne(t, pe, function() {
                    return N(t, e, n)
                }) : N(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && se(t);
                return L(0, i, n ? R(t, e, n, st.boxSizing && "border-box" === at.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    st.opacity || (at.cssHooks.opacity = {
        get: function(t, e) {
            return ce.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style
              , n = t.currentStyle
              , r = at.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , s = n && n.filter || i.filter || "";
            i.zoom = 1,
            (e >= 1 || "" === e) && "" === at.trim(s.replace(le, "")) && i.removeAttribute && (i.removeAttribute("filter"),
            "" === e || n && !n.filter) || (i.filter = le.test(s) ? s.replace(le, r) : s + " " + r)
        }
    }),
    at.cssHooks.marginRight = O(st.reliableMarginRight, function(t, e) {
        return e ? ne(t, {
            display: "inline-block"
        }, ae, [t, "marginRight"]) : void 0
    }),
    at.cssHooks.marginLeft = O(st.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(ae(t, "marginLeft")) || (at.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - ne(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    at.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        at.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                    r[t + Dt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        },
        ee.test(t) || (at.cssHooks[t + e].set = L)
    }),
    at.fn.extend({
        css: function(t, e) {
            return Mt(this, function(t, e, i) {
                var n, r, s = {}, a = 0;
                if (at.isArray(e)) {
                    for (n = se(t),
                    r = e.length; r > a; a++)
                        s[e[a]] = at.css(t, e[a], !1, n);
                    return s
                }
                return void 0 !== i ? at.style(t, e, i) : at.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ot(this) ? at(this).show() : at(this).hide()
            })
        }
    }),
    at.Tween = j,
    (j.prototype = {
        constructor: j,
        init: function(t, e, i, n, r, s) {
            this.elem = t,
            this.prop = i,
            this.easing = r || at.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = s || (at.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = j.propHooks[this.prop];
            return this.options.duration ? this.pos = e = at.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : j.propHooks._default.set(this),
            this
        }
    }).init.prototype = j.prototype,
    (j.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = at.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                at.fx.step[t.prop] ? at.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[at.cssProps[t.prop]] && !at.cssHooks[t.prop] ? t.elem[t.prop] = t.now : at.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = j.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    at.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    at.fx = j.prototype.init,
    at.fx.step = {};
    var _e, ge, ve = /^(?:toggle|show|hide)$/, ye = /queueHooks$/;
    at.Animation = at.extend(H, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return u(i.elem, t, kt.exec(e), i),
                i
            }
            ]
        },
        tweener: function(t, e) {
            at.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(xt);
            for (var i, n = 0, r = t.length; r > n; n++)
                i = t[n],
                H.tweeners[i] = H.tweeners[i] || [],
                H.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n, r, s, a, o, l, c, h = this, u = {}, p = t.style, d = t.nodeType && Ot(t), f = at._data(t, "fxshow");
            i.queue || (null == (o = at._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
            l = o.empty.fire,
            o.empty.fire = function() {
                o.unqueued || l()
            }
            ),
            o.unqueued++,
            h.always(function() {
                h.always(function() {
                    o.unqueued--,
                    at.queue(t, "fx").length || o.empty.fire()
                })
            })),
            1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY],
            "inline" === ("none" === (c = at.css(t, "display")) ? at._data(t, "olddisplay") || D(t.nodeName) : c) && "none" === at.css(t, "float") && (st.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            i.overflow && (p.overflow = "hidden",
            st.shrinkWrapBlocks() || h.always(function() {
                p.overflow = i.overflow[0],
                p.overflowX = i.overflow[1],
                p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n],
                ve.exec(r)) {
                    if (delete e[n],
                    s = s || "toggle" === r,
                    r === (d ? "hide" : "show")) {
                        if ("show" !== r || !f || void 0 === f[n])
                            continue;
                        d = !0
                    }
                    u[n] = f && f[n] || at.style(t, n)
                } else
                    c = void 0;
            if (at.isEmptyObject(u))
                "inline" === ("none" === c ? D(t.nodeName) : c) && (p.display = c);
            else {
                f ? "hidden"in f && (d = f.hidden) : f = at._data(t, "fxshow", {}),
                s && (f.hidden = !d),
                d ? at(t).show() : h.done(function() {
                    at(t).hide()
                }),
                h.done(function() {
                    var e;
                    at._removeData(t, "fxshow");
                    for (e in u)
                        at.style(t, e, u[e])
                });
                for (n in u)
                    a = B(d ? f[n] : 0, n, h),
                    n in f || (f[n] = a.start,
                    d && (a.end = a.start,
                    a.start = "width" === n || "height" === n ? 1 : 0))
            }
        }
        ],
        prefilter: function(t, e) {
            e ? H.prefilters.unshift(t) : H.prefilters.push(t)
        }
    }),
    at.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? at.extend({}, t) : {
            complete: i || !i && e || at.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !at.isFunction(e) && e
        };
        return n.duration = at.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in at.fx.speeds ? at.fx.speeds[n.duration] : at.fx.speeds._default,
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            at.isFunction(n.old) && n.old.call(this),
            n.queue && at.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    at.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var r = at.isEmptyObject(t)
              , s = at.speed(e, i, n)
              , a = function() {
                var e = H(this, at.extend({}, t), s);
                (r || at._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , r = null != t && t + "queueHooks"
                  , s = at.timers
                  , a = at._data(this);
                if (r)
                    a[r] && a[r].stop && n(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && ye.test(r) && n(a[r]);
                for (r = s.length; r--; )
                    s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i),
                    e = !1,
                    s.splice(r, 1));
                !e && i || at.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, i = at._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = at.timers, a = n ? n.length : 0;
                for (i.finish = !0,
                at.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = s.length; e--; )
                    s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                    s.splice(e, 1));
                for (e = 0; a > e; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    at.each(["toggle", "show", "hide"], function(t, e) {
        var i = at.fn[e];
        at.fn[e] = function(t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(I(e, !0), t, n, r)
        }
    }),
    at.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        at.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    at.timers = [],
    at.fx.tick = function() {
        var t, e = at.timers, i = 0;
        for (_e = at.now(); i < e.length; i++)
            (t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || at.fx.stop(),
        _e = void 0
    }
    ,
    at.fx.timer = function(t) {
        at.timers.push(t),
        t() ? at.fx.start() : at.timers.pop()
    }
    ,
    at.fx.interval = 13,
    at.fx.start = function() {
        ge || (ge = t.setInterval(at.fx.tick, at.fx.interval))
    }
    ,
    at.fx.stop = function() {
        t.clearInterval(ge),
        ge = null
    }
    ,
    at.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    at.fn.delay = function(e, i) {
        return e = at.fx ? at.fx.speeds[e] || e : e,
        i = i || "fx",
        this.queue(i, function(i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var t, e = K.createElement("input"), i = K.createElement("div"), n = K.createElement("select"), r = n.appendChild(K.createElement("option"));
        (i = K.createElement("div")).setAttribute("className", "t"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = i.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        i.appendChild(e),
        (t = i.getElementsByTagName("a")[0]).style.cssText = "top:1px",
        st.getSetAttribute = "t" !== i.className,
        st.style = /top/.test(t.getAttribute("style")),
        st.hrefNormalized = "/a" === t.getAttribute("href"),
        st.checkOn = !!e.value,
        st.optSelected = r.selected,
        st.enctype = !!K.createElement("form").enctype,
        n.disabled = !0,
        st.optDisabled = !r.disabled,
        (e = K.createElement("input")).setAttribute("value", ""),
        st.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        st.radioValue = "t" === e.value
    }();
    var we = /\r/g
      , xe = /[\x20\t\r\n\f]+/g;
    at.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = at.isFunction(t),
            this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? t.call(this, i, at(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : at.isArray(r) && (r = at.map(r, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = at.valHooks[r.type] || at.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(we, "") : null == i ? "" : i : void 0
        }
    }),
    at.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = at.find.attr(t, "value");
                    return null != e ? e : at.trim(at.text(t)).replace(xe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
                        if (((i = n[l]).selected || l === r) && (st.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !at.nodeName(i.parentNode, "optgroup"))) {
                            if (e = at(i).val(),
                            s)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = at.makeArray(e), a = r.length; a--; )
                        if (n = r[a],
                        at.inArray(at.valHooks.option.get(n), s) > -1)
                            try {
                                n.selected = i = !0
                            } catch (t) {
                                n.scrollHeight
                            }
                        else
                            n.selected = !1;
                    return i || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    at.each(["radio", "checkbox"], function() {
        at.valHooks[this] = {
            set: function(t, e) {
                return at.isArray(e) ? t.checked = at.inArray(at(t).val(), e) > -1 : void 0
            }
        },
        st.checkOn || (at.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var be, Te, Se = at.expr.attrHandle, Pe = /^(?:checked|selected)$/i, Ce = st.getSetAttribute, Ee = st.input;
    at.fn.extend({
        attr: function(t, e) {
            return Mt(this, at.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                at.removeAttr(this, t)
            })
        }
    }),
    at.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === t.getAttribute ? at.prop(t, e, i) : (1 === s && at.isXMLDoc(t) || (e = e.toLowerCase(),
                r = at.attrHooks[e] || (at.expr.match.bool.test(e) ? Te : be)),
                void 0 !== i ? null === i ? void at.removeAttr(t, e) : r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                i) : r && "get"in r && null !== (n = r.get(t, e)) ? n : null == (n = at.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!st.radioValue && "radio" === e && at.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, r = 0, s = e && e.match(xt);
            if (s && 1 === t.nodeType)
                for (; i = s[r++]; )
                    n = at.propFix[i] || i,
                    at.expr.match.bool.test(i) ? Ee && Ce || !Pe.test(i) ? t[n] = !1 : t[at.camelCase("default-" + i)] = t[n] = !1 : at.attr(t, i, ""),
                    t.removeAttribute(Ce ? i : n)
        }
    }),
    Te = {
        set: function(t, e, i) {
            return !1 === e ? at.removeAttr(t, i) : Ee && Ce || !Pe.test(i) ? t.setAttribute(!Ce && at.propFix[i] || i, i) : t[at.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    at.each(at.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Se[e] || at.find.attr;
        Ee && Ce || !Pe.test(e) ? Se[e] = function(t, e, n) {
            var r, s;
            return n || (s = Se[e],
            Se[e] = r,
            r = null != i(t, e, n) ? e.toLowerCase() : null,
            Se[e] = s),
            r
        }
        : Se[e] = function(t, e, i) {
            return i ? void 0 : t[at.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Ee && Ce || (at.attrHooks.value = {
        set: function(t, e, i) {
            return at.nodeName(t, "input") ? void (t.defaultValue = e) : be && be.set(t, e, i)
        }
    }),
    Ce || (be = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
            n.value = e += "",
            "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    },
    Se.id = Se.name = Se.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }
    ,
    at.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: be.set
    },
    at.attrHooks.contenteditable = {
        set: function(t, e, i) {
            be.set(t, "" !== e && e, i)
        }
    },
    at.each(["width", "height"], function(t, e) {
        at.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"),
                i) : void 0
            }
        }
    })),
    st.style || (at.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ke = /^(?:input|select|textarea|button|object)$/i
      , De = /^(?:a|area)$/i;
    at.fn.extend({
        prop: function(t, e) {
            return Mt(this, at.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = at.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (t) {}
            })
        }
    }),
    at.extend({
        prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && at.isXMLDoc(t) || (e = at.propFix[e] || e,
                r = at.propHooks[e]),
                void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get"in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = at.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ke.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    st.hrefNormalized || at.each(["href", "src"], function(t, e) {
        at.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    st.optSelected || (at.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        at.propFix[this.toLowerCase()] = this
    }),
    st.enctype || (at.propFix.enctype = "encoding");
    var Oe = /[\t\r\n\f]/g;
    at.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, a, o, l = 0;
            if (at.isFunction(t))
                return this.each(function(e) {
                    at(this).addClass(t.call(this, e, U(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; i = this[l++]; )
                    if (r = U(i),
                    n = 1 === i.nodeType && (" " + r + " ").replace(Oe, " ")) {
                        for (a = 0; s = e[a++]; )
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (o = at.trim(n)) && at.attr(i, "class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, a, o, l = 0;
            if (at.isFunction(t))
                return this.each(function(e) {
                    at(this).removeClass(t.call(this, e, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; i = this[l++]; )
                    if (r = U(i),
                    n = 1 === i.nodeType && (" " + r + " ").replace(Oe, " ")) {
                        for (a = 0; s = e[a++]; )
                            for (; n.indexOf(" " + s + " ") > -1; )
                                n = n.replace(" " + s + " ", " ");
                        r !== (o = at.trim(n)) && at.attr(i, "class", o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : at.isFunction(t) ? this.each(function(i) {
                at(this).toggleClass(t.call(this, i, U(this), e), e)
            }) : this.each(function() {
                var e, n, r, s;
                if ("string" === i)
                    for (n = 0,
                    r = at(this),
                    s = t.match(xt) || []; e = s[n++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    void 0 !== t && "boolean" !== i || ((e = U(this)) && at._data(this, "__className__", e),
                    at.attr(this, "class", e || !1 === t ? "" : at._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++]; )
                if (1 === i.nodeType && (" " + U(i) + " ").replace(Oe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        at.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }),
    at.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Me = t.location
      , Ae = at.now()
      , Le = /\?/
      , Re = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    at.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var i, n = null, r = at.trim(e + "");
        return r && !at.trim(r.replace(Re, function(t, e, r, s) {
            return i && e && (n = 0),
            0 === n ? t : (i = r || e,
            n += !s - !r,
            "")
        })) ? Function("return " + r)() : at.error("Invalid JSON: " + e)
    }
    ,
    at.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (n = new t.DOMParser,
            i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"),
            i.async = "false",
            i.loadXML(e))
        } catch (t) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + e),
        i
    }
    ;
    var Ne = /#.*$/
      , je = /([?&])_=[^&]*/
      , ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Ie = /^(?:GET|HEAD)$/
      , Be = /^\/\//
      , He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ue = {}
      , Fe = {}
      , Xe = "*/".concat("*")
      , qe = Me.href
      , Qe = He.exec(qe.toLowerCase()) || [];
    at.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qe,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Qe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": at.parseJSON,
                "text xml": at.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? q(q(t, at.ajaxSettings), e) : q(at.ajaxSettings, t)
        },
        ajaxPrefilter: F(Ue),
        ajaxTransport: F(Fe),
        ajax: function(e, i) {
            function n(e, i, n, r) {
                var s, u, v, y, x, T = i;
                2 !== w && (w = 2,
                l && t.clearTimeout(l),
                h = void 0,
                o = r || "",
                b.readyState = e > 0 ? 4 : 0,
                s = e >= 200 && 300 > e || 304 === e,
                n && (y = function(t, e, i) {
                    for (var n, r, s, a, o = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                        for (a in o)
                            if (o[a] && o[a].test(r)) {
                                l.unshift(a);
                                break
                            }
                    if (l[0]in i)
                        s = l[0];
                    else {
                        for (a in i) {
                            if (!l[0] || t.converters[a + " " + l[0]]) {
                                s = a;
                                break
                            }
                            n || (n = a)
                        }
                        s = s || n
                    }
                    return s ? (s !== l[0] && l.unshift(s),
                    i[s]) : void 0
                }(p, b, n)),
                y = function(t, e, i, n) {
                    var r, s, a, o, l, c = {}, h = t.dataTypes.slice();
                    if (h[1])
                        for (a in t.converters)
                            c[a.toLowerCase()] = t.converters[a];
                    for (s = h.shift(); s; )
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e),
                        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = s,
                        s = h.shift())
                            if ("*" === s)
                                s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(a = c[l + " " + s] || c["* " + s]))
                                    for (r in c)
                                        if ((o = r.split(" "))[1] === s && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                            !0 === a ? a = c[r] : !0 !== c[r] && (s = o[0],
                                            h.unshift(o[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && t.throws)
                                        e = a(e);
                                    else
                                        try {
                                            e = a(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: a ? t : "No conversion from " + l + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, y, b, s),
                s ? (p.ifModified && ((x = b.getResponseHeader("Last-Modified")) && (at.lastModified[a] = x),
                (x = b.getResponseHeader("etag")) && (at.etag[a] = x)),
                204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                u = y.data,
                v = y.error,
                s = !v)) : (v = T,
                !e && T || (T = "error",
                0 > e && (e = 0))),
                b.status = e,
                b.statusText = (i || T) + "",
                s ? m.resolveWith(d, [u, T, b]) : m.rejectWith(d, [b, T, v]),
                b.statusCode(g),
                g = void 0,
                c && f.trigger(s ? "ajaxSuccess" : "ajaxError", [b, p, s ? u : v]),
                _.fireWith(d, [b, T]),
                c && (f.trigger("ajaxComplete", [b, p]),
                --at.active || at.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e,
            e = void 0),
            i = i || {};
            var r, s, a, o, l, c, h, u, p = at.ajaxSetup({}, i), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? at(d) : at.event, m = at.Deferred(), _ = at.Callbacks("once memory"), g = p.statusCode || {}, v = {}, y = {}, w = 0, x = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!u)
                            for (u = {}; e = ze.exec(o); )
                                u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? o : null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return w || (t = y[i] = y[i] || t,
                    v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return w || (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > w)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            b.always(t[b.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return h && h.abort(e),
                    n(0, e),
                    this
                }
            };
            if (m.promise(b).complete = _.add,
            b.success = b.done,
            b.error = b.fail,
            p.url = ((e || p.url || qe) + "").replace(Ne, "").replace(Be, Qe[1] + "//"),
            p.type = i.method || i.type || p.method || p.type,
            p.dataTypes = at.trim(p.dataType || "*").toLowerCase().match(xt) || [""],
            null == p.crossDomain && (r = He.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === Qe[1] && r[2] === Qe[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Qe[3] || ("http:" === Qe[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = at.param(p.data, p.traditional)),
            X(Ue, p, i, b),
            2 === w)
                return b;
            (c = at.event && p.global) && 0 == at.active++ && at.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ie.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (Le.test(a) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = je.test(a) ? a.replace(je, "$1_=" + Ae++) : a + (Le.test(a) ? "&" : "?") + "_=" + Ae++)),
            p.ifModified && (at.lastModified[a] && b.setRequestHeader("If-Modified-Since", at.lastModified[a]),
            at.etag[a] && b.setRequestHeader("If-None-Match", at.etag[a])),
            (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && b.setRequestHeader("Content-Type", p.contentType),
            b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : p.accepts["*"]);
            for (s in p.headers)
                b.setRequestHeader(s, p.headers[s]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, b, p) || 2 === w))
                return b.abort();
            x = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            })
                b[s](p[s]);
            if (h = X(Fe, p, i, b)) {
                if (b.readyState = 1,
                c && f.trigger("ajaxSend", [b, p]),
                2 === w)
                    return b;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    b.abort("timeout")
                }, p.timeout));
                try {
                    w = 1,
                    h.send(v, n)
                } catch (t) {
                    if (!(2 > w))
                        throw t;
                    n(-1, t)
                }
            } else
                n(-1, "No Transport");
            return b
        },
        getJSON: function(t, e, i) {
            return at.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return at.get(t, void 0, e, "script")
        }
    }),
    at.each(["get", "post"], function(t, e) {
        at[e] = function(t, i, n, r) {
            return at.isFunction(i) && (r = r || n,
            n = i,
            i = void 0),
            at.ajax(at.extend({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            }, at.isPlainObject(t) && t))
        }
    }),
    at._evalUrl = function(t) {
        return at.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    at.fn.extend({
        wrapAll: function(t) {
            if (at.isFunction(t))
                return this.each(function(e) {
                    at(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = at(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return at.isFunction(t) ? this.each(function(e) {
                at(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = at(this)
                  , i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = at.isFunction(t);
            return this.each(function(i) {
                at(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    at.expr.filters.hidden = function(t) {
        return st.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
            if (!at.contains(t.ownerDocument || K, t))
                return !0;
            for (; t && 1 === t.nodeType; ) {
                if ("none" === Q(t) || "hidden" === t.type)
                    return !0;
                t = t.parentNode
            }
            return !1
        }(t)
    }
    ,
    at.expr.filters.visible = function(t) {
        return !at.expr.filters.hidden(t)
    }
    ;
    var Ye = /%20/g
      , We = /\[\]$/
      , Ve = /\r?\n/g
      , Ge = /^(?:submit|button|image|reset|file)$/i
      , $e = /^(?:input|select|textarea|keygen)/i;
    at.param = function(t, e) {
        var i, n = [], r = function(t, e) {
            e = at.isFunction(e) ? e() : null == e ? "" : e,
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = at.ajaxSettings && at.ajaxSettings.traditional),
        at.isArray(t) || t.jquery && !at.isPlainObject(t))
            at.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (i in t)
                Y(i, t[i], e, r);
        return n.join("&").replace(Ye, "+")
    }
    ,
    at.fn.extend({
        serialize: function() {
            return at.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = at.prop(this, "elements");
                return t ? at.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !at(this).is(":disabled") && $e.test(this.nodeName) && !Ge.test(t) && (this.checked || !At.test(t))
            }).map(function(t, e) {
                var i = at(this).val();
                return null == i ? null : at.isArray(i) ? at.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ve, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ve, "\r\n")
                }
            }).get()
        }
    }),
    at.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? V() : K.documentMode > 8 ? W() : /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
    }
    : W;
    var Ke = 0
      , Ze = {}
      , Je = at.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ze)
            Ze[t](void 0, !0)
    }),
    st.cors = !!Je && "withCredentials"in Je,
    (Je = st.ajax = !!Je) && at.ajaxTransport(function(e) {
        if (!e.crossDomain || st.cors) {
            var i;
            return {
                send: function(n, r) {
                    var s, a = e.xhr(), o = ++Ke;
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (s in e.xhrFields)
                            a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (s in n)
                        void 0 !== n[s] && a.setRequestHeader(s, n[s] + "");
                    a.send(e.hasContent && e.data || null),
                    i = function(t, n) {
                        var s, l, c;
                        if (i && (n || 4 === a.readyState))
                            if (delete Ze[o],
                            i = void 0,
                            a.onreadystatechange = at.noop,
                            n)
                                4 !== a.readyState && a.abort();
                            else {
                                c = {},
                                s = a.status,
                                "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (t) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && r(s, l, c, a.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === a.readyState ? t.setTimeout(i) : a.onreadystatechange = Ze[o] = i : i()
                },
                abort: function() {
                    i && i(void 0, !0)
                }
            }
        }
    }),
    at.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return at.globalEval(t),
                t
            }
        }
    }),
    at.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    at.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = K.head || at("head")[0] || K.documentElement;
            return {
                send: function(n, r) {
                    (e = K.createElement("script")).async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null,
                        i || r(200, "success"))
                    }
                    ,
                    i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ti = []
      , ei = /(=)\?(?=&|$)|\?\?/;
    at.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ti.pop() || at.expando + "_" + Ae++;
            return this[t] = !0,
            t
        }
    }),
    at.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, a, o = !1 !== e.jsonp && (ei.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = at.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        o ? e[o] = e[o].replace(ei, "$1" + r) : !1 !== e.jsonp && (e.url += (Le.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
        e.converters["script json"] = function() {
            return a || at.error(r + " was not called"),
            a[0]
        }
        ,
        e.dataTypes[0] = "json",
        s = t[r],
        t[r] = function() {
            a = arguments
        }
        ,
        n.always(function() {
            void 0 === s ? at(t).removeProp(r) : t[r] = s,
            e[r] && (e.jsonpCallback = i.jsonpCallback,
            ti.push(r)),
            a && at.isFunction(s) && s(a[0]),
            a = s = void 0
        }),
        "script") : void 0
    }),
    at.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (i = e,
        e = !1),
        e = e || K;
        var n = mt.exec(t)
          , r = !i && [];
        return n ? [e.createElement(n[1])] : (n = _([t], e, r),
        r && r.length && at(r).remove(),
        at.merge([], n.childNodes))
    }
    ;
    var ii = at.fn.load;
    at.fn.load = function(t, e, i) {
        if ("string" != typeof t && ii)
            return ii.apply(this, arguments);
        var n, r, s, a = this, o = t.indexOf(" ");
        return o > -1 && (n = at.trim(t.slice(o, t.length)),
        t = t.slice(0, o)),
        at.isFunction(e) ? (i = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        a.length > 0 && at.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments,
            a.html(n ? at("<div>").append(at.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(this, s || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        at.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    at.expr.filters.animated = function(t) {
        return at.grep(at.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    at.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, a, o, l, c = at.css(t, "position"), h = at(t), u = {};
            "static" === c && (t.style.position = "relative"),
            o = h.offset(),
            s = at.css(t, "top"),
            l = at.css(t, "left"),
            ("absolute" === c || "fixed" === c) && at.inArray("auto", [s, l]) > -1 ? (n = h.position(),
            a = n.top,
            r = n.left) : (a = parseFloat(s) || 0,
            r = parseFloat(l) || 0),
            at.isFunction(e) && (e = e.call(t, i, at.extend({}, o))),
            null != e.top && (u.top = e.top - o.top + a),
            null != e.left && (u.left = e.left - o.left + r),
            "using"in e ? e.using.call(t, u) : h.css(u)
        }
    },
    at.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    at.offset.setOffset(this, t, e)
                });
            var e, i, n = {
                top: 0,
                left: 0
            }, r = this[0], s = r && r.ownerDocument;
            return s ? (e = s.documentElement,
            at.contains(e, r) ? (void 0 !== r.getBoundingClientRect && (n = r.getBoundingClientRect()),
            i = G(s),
            {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                }, n = this[0];
                return "fixed" === at.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                at.nodeName(t[0], "html") || (i = t.offset()),
                i.top += at.css(t[0], "borderTopWidth", !0),
                i.left += at.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - at.css(n, "marginTop", !0),
                    left: e.left - i.left - at.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !at.nodeName(t, "html") && "static" === at.css(t, "position"); )
                    t = t.offsetParent;
                return t || re
            })
        }
    }),
    at.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        at.fn[t] = function(n) {
            return Mt(this, function(t, n, r) {
                var s = G(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void (s ? s.scrollTo(i ? at(s).scrollLeft() : r, i ? r : at(s).scrollTop()) : t[n] = r)
            }, t, n, arguments.length, null)
        }
    }),
    at.each(["top", "left"], function(t, e) {
        at.cssHooks[e] = O(st.pixelPosition, function(t, i) {
            return i ? (i = ae(t, e),
            ie.test(i) ? at(t).position()[e] + "px" : i) : void 0
        })
    }),
    at.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        at.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            at.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n)
                  , a = i || (!0 === n || !0 === r ? "margin" : "border");
                return Mt(this, function(e, i, n) {
                    var r;
                    return at.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? at.css(e, i, a) : at.style(e, i, n, a)
                }, e, s ? n : void 0, s, null)
            }
        })
    }),
    at.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }),
    at.fn.size = function() {
        return this.length
    }
    ,
    at.fn.andSelf = at.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return at
    });
    var ni = t.jQuery
      , ri = t.$;
    return at.noConflict = function(e) {
        return t.$ === at && (t.$ = ri),
        e && t.jQuery === at && (t.jQuery = ni),
        at
    }
    ,
    e || (t.jQuery = t.$ = at),
    at
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , r = function(t, e, i) {
            var n, r, s = t.cycle;
            for (n in s)
                r = s[n],
                t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }
          , s = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._repeat && this._uncache(!0),
            this.render = s.prototype.render
        }
          , a = i._internals
          , o = a.isSelector
          , l = a.isArray
          , c = s.prototype = i.to({}, .1, {})
          , h = [];
        s.version = "1.20.3",
        c.constructor = s,
        c.kill()._gc = !1,
        s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf,
        s.getTweensOf = i.getTweensOf,
        s.lagSmoothing = i.lagSmoothing,
        s.ticker = i.ticker,
        s.render = i.render,
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        c.updateTo = function(t, e) {
            var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t)
                this.vars[n] = t[n];
            if (this._initted || s)
                if (e)
                    this._initted = !1,
                    s && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var a = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(a, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                this._time > 0 || s)
                    for (var o, l = 1 / (1 - r), c = this._firstPT; c; )
                        o = c.s + c.c,
                        c.c *= l,
                        c.s = o - c.c,
                        c = c._next;
            return this
        }
        ,
        c.render = function(t, e, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, s, o, l, c, h, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, _ = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (r = !0,
            s = "onComplete",
            n = n || this._timeline.autoRemoveChildren),
            0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0),
            (0 > y || 0 >= t && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (n = !0,
            y > 1e-10 && (s = "onReverseComplete")),
            this._rawPrevTime = p = !e || t || y === t ? t : 1e-10)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== _ || 0 === v && y > 0) && (s = "onReverseComplete",
            r = this._reversed),
            0 > t && (this._active = !1,
            0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0),
            this._rawPrevTime = p = !e || t || y === t ? t : 1e-10)),
            this._initted || (n = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (l = v + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && t >= _ && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time,
            (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease,
            this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d,this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)),
            this.ratio = d ? 1 - d.getRatio((v - this._time) / v) : 0)),
            this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
            this._easeType && !d ? (c = this._time / v,
            h = this._easeType,
            u = this._easePower,
            (1 === h || 3 === h && c >= .5) && (c = 1 - c),
            3 === h && (c *= 2),
            1 === u ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c),
            1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : d || (this.ratio = this._ease.getRatio(this._time / v))),
            m !== this._time || n || g !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = m,
                        this._totalTime = _,
                        this._rawPrevTime = y,
                        this._cycle = g,
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0),
                0 === _ && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, n),
                e || (this._totalTime !== _ || s) && this._callback("onUpdate")),
                this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                s && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n),
                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== p && (this._rawPrevTime = 0))
            } else
                _ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        s.to = function(t, e, i) {
            return new s(t,e,i)
        }
        ,
        s.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new s(t,e,i)
        }
        ,
        s.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new s(t,e,n)
        }
        ,
        s.staggerTo = s.allTo = function(t, e, a, c, u, p, d) {
            c = c || 0;
            var f, m, _, g, v = 0, y = [], w = function() {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                u.apply(d || a.callbackScope || this, p || h)
            }, x = a.cycle, b = a.startAt && a.startAt.cycle;
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t),
            o(t) && (t = n(t))),
            t = t || [],
            0 > c && ((t = n(t)).reverse(),
            c *= -1),
            f = t.length - 1,
            _ = 0; f >= _; _++) {
                m = {};
                for (g in a)
                    m[g] = a[g];
                if (x && (r(m, t, _),
                null != m.duration && (e = m.duration,
                delete m.duration)),
                b) {
                    b = m.startAt = {};
                    for (g in a.startAt)
                        b[g] = a.startAt[g];
                    r(m.startAt, t, _)
                }
                m.delay = v + (m.delay || 0),
                _ === f && u && (m.onComplete = w),
                y[_] = new s(t[_],e,m),
                v += c
            }
            return y
        }
        ,
        s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            s.staggerTo(t, e, i, n, r, a, o)
        }
        ,
        s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            s.staggerTo(t, e, n, r, a, o, l)
        }
        ,
        s.delayedCall = function(t, e, i, n, r) {
            return new s(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        s.set = function(t, e) {
            return new s(t,0,e)
        }
        ,
        s.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var u = function(t, e) {
            for (var n = [], r = 0, s = t._first; s; )
                s instanceof i ? n[r++] = s : (e && (n[r++] = s),
                n = n.concat(u(s, e)),
                r = n.length),
                s = s._next;
            return n
        }
          , p = s.getAllTweens = function(e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
        }
        ;
        s.killAll = function(t, i, n, r) {
            null == i && (i = !0),
            null == n && (n = !0);
            var s, a, o, l = p(0 != r), c = l.length, h = i && n && r;
            for (o = 0; c > o; o++)
                a = l[o],
                (h || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        s.killChildTweensOf = function(t, e) {
            if (null != t) {
                var r, c, h, u, p, d = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                o(t) && (t = n(t)),
                l(t))
                    for (u = t.length; --u > -1; )
                        s.killChildTweensOf(t[u], e);
                else {
                    r = [];
                    for (h in d)
                        for (c = d[h].target.parentNode; c; )
                            c === t && (r = r.concat(d[h].tweens)),
                            c = c.parentNode;
                    for (p = r.length,
                    u = 0; p > u; u++)
                        e && r[u].totalTime(r[u].totalDuration()),
                        r[u]._enabled(!1, !1)
                }
            }
        }
        ;
        var d = function(t, i, n, r) {
            i = !1 !== i,
            n = !1 !== n;
            for (var s, a, o = p(r = !1 !== r), l = i && n && r, c = o.length; --c > -1; )
                a = o[c],
                (l || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(t)
        };
        return s.pauseAll = function(t, e, i) {
            d(!0, t, e, i)
        }
        ,
        s.resumeAll = function(t, e, i) {
            d(!1, t, e, i)
        }
        ,
        s.globalTimeScale = function(e) {
            var n = t._rootTimeline
              , r = i.ticker.time;
            return arguments.length ? (e = e || 1e-10,
            n._startTime = r - (r - n._startTime) * n._timeScale / e,
            n = t._rootFramesTimeline,
            r = i.ticker.frame,
            n._startTime = r - (r - n._startTime) * n._timeScale / e,
            n._timeScale = t._rootTimeline._timeScale = e,
            e) : n._timeScale
        }
        ,
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        c.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        c.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        s
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r)
                i = r[n],
                o(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , r = i._internals
          , s = n._internals = {}
          , a = r.isSelector
          , o = r.isArray
          , l = r.lazyTweens
          , c = r.lazyRender
          , h = _gsScope._gsDefine.globals
          , u = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , p = function(t, e, i) {
            var n, r, s = t.cycle;
            for (n in s)
                r = s[n],
                t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }
          , d = s.pauseCallback = function() {}
          , f = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , m = n.prototype = new e;
        return n.version = "1.20.3",
        m.constructor = n,
        m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
        m.to = function(t, e, n, r) {
            var s = n.repeat && h.TweenMax || i;
            return e ? this.add(new s(t,e,n), r) : this.set(t, n, r)
        }
        ,
        m.from = function(t, e, n, r) {
            return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
        }
        ,
        m.fromTo = function(t, e, n, r, s) {
            var a = r.repeat && h.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }
        ,
        m.staggerTo = function(t, e, r, s, o, l, c, h) {
            var d, m, _ = new n({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
            }), g = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            a(t = t || []) && (t = f(t)),
            0 > (s = s || 0) && ((t = f(t)).reverse(),
            s *= -1),
            m = 0; m < t.length; m++)
                (d = u(r)).startAt && (d.startAt = u(d.startAt),
                d.startAt.cycle && p(d.startAt, t, m)),
                g && (p(d, t, m),
                null != d.duration && (e = d.duration,
                delete d.duration)),
                _.to(t[m], e, d, m * s);
            return this.add(_, o)
        }
        ,
        m.staggerFrom = function(t, e, i, n, r, s, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, r, s, a, o)
        }
        ,
        m.staggerFromTo = function(t, e, i, n, r, s, a, o, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, r, s, a, o, l)
        }
        ,
        m.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }
        ,
        m.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t,0,e), n)
        }
        ,
        n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, a, o, l = new n(t), c = l._timeline;
            for (null == e && (e = !0),
            c._remove(l, !0),
            l._startTime = 0,
            l._rawPrevTime = l._time = l._totalTime = c._time,
            a = c._first; a; )
                o = a._next,
                e && a instanceof i && a.target === a.vars.onComplete || (0 > (s = a._startTime - a._delay) && (r = 1),
                l.add(a, s)),
                a = o;
            return c.add(l, 0),
            r && l.totalDuration(),
            l
        }
        ,
        m.add = function(r, s, a, l) {
            var c, h, u, p, d, f;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)),
            !(r instanceof t)) {
                if (r instanceof Array || r && r.push && o(r)) {
                    for (a = a || "normal",
                    l = l || 0,
                    c = s,
                    h = r.length,
                    u = 0; h > u; u++)
                        o(p = r[u]) && (p = new n({
                            tweens: p
                        })),
                        this.add(p, c),
                        "string" != typeof p && "function" != typeof p && ("sequence" === a ? c = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())),
                        c += l;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, s);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s),
            r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = this,
                f = d.rawTime() > r._startTime; d._timeline; )
                    f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1),
                    d = d._timeline;
            return this
        }
        ,
        m.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && o(e)) {
                for (var n = e.length; --n > -1; )
                    this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            return this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        m.insert = m.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        m.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        m.addPause = function(t, e, n, r) {
            var s = i.delayedCall(0, d, n, r || this);
            return s.vars.onComplete = s.vars.onReverseComplete = e,
            s.data = "isPause",
            this._hasPause = !0,
            this.add(s, t)
        }
        ,
        m.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        m._parseTimeOrLabel = function(e, i, n, r) {
            var s, a;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && o(r)))
                for (a = r.length; --a > -1; )
                    r[a]instanceof t && r[a].timeline === this && this.remove(r[a]);
            if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = s);
            else {
                if (-1 === (a = e.indexOf("=")))
                    return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)),
                e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : s
            }
            return Number(e) + i
        }
        ,
        m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        m.stop = function() {
            return this.paused(!0)
        }
        ,
        m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, a, o, h, u, p = this._time, d = this._dirty ? this.totalDuration() : this._totalDuration, f = this._startTime, m = this._timeScale, _ = this._paused;
            if (p !== this._time && (t += this._time - p),
            t >= d - 1e-7 && t >= 0)
                this._totalTime = this._time = d,
                this._reversed || this._hasPausedChild() || (r = !0,
                a = "onComplete",
                o = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (o = !0,
                this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                t = d + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0,
                (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                r = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (o = r = !0,
                    a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (o = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (o = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p)
                        for (n = this._first; n && n._startTime <= t && !h; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !h; )
                            n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n),
                            n = n._prev;
                    h && (this._time = t = h._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || o || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0),
                0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                (u = this._time) >= p)
                    for (n = this._first; n && (s = n._next,
                    u === this._time && (!this._paused || _)); )
                        (n._active || n._startTime <= u && !n._paused && !n._gc) && (h === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = s;
                else
                    for (n = this._last; n && (s = n._prev,
                    u === this._time && (!this._paused || _)); ) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (h === n) {
                                for (h = n._prev; h && h.endTime() > this._time; )
                                    h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i),
                                    h = h._prev;
                                h = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (l.length && c(),
                this._callback("onUpdate"))),
                a && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (l.length && c(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[a] && this._callback(a)))
            }
        }
        ,
        m._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        m.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], a = this._first, o = 0; a; )
                a._startTime < r || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== n && (s[o++] = a),
                !1 !== t && (s = s.concat(a.getChildren(!0, e, n)),
                o = s.length))),
                a = a._next;
            return s
        }
        ,
        m.getTweensOf = function(t, e) {
            var n, r, s = this._gc, a = [], o = 0;
            for (s && this._enabled(!0, !0),
            r = (n = i.getTweensOf(t)).length; --r > -1; )
                (n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
            return s && this._enabled(!1, !0),
            a
        }
        ,
        m.recent = function() {
            return this._recent
        }
        ,
        m._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (n in s)
                    s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }
        ,
        m._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(t, e) && (r = !0);
            return r
        }
        ,
        m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        m.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        m._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        m.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            r
        }
        ,
        m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                        e = r._prev,
                        r._dirty && r.totalDuration(),
                        r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1,
                        this.add(r, r._startTime - r._delay),
                        this._calculatingDuration = 0) : s = r._startTime,
                        r._startTime < 0 && !r._paused && (n -= r._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale,
                        this._time -= r._startTime,
                        this._totalTime -= r._startTime,
                        this._rawPrevTime -= r._startTime),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        s = 0),
                        (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i),
                        r = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }
        ,
        m.paused = function(e) {
            if (!e)
                for (var i = this._first, n = this._time; i; )
                    i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        m.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        m.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }
        ,
        n
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , r = e._internals
          , s = r.lazyTweens
          , a = r.lazyRender
          , o = _gsScope._gsDefine.globals
          , l = new i(null,null,1,0)
          , c = n.prototype = new t;
        return c.constructor = n,
        c.kill()._gc = !1,
        n.version = "1.20.3",
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        c.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }
        ,
        c.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }
        ,
        c.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        c.tweenTo = function(t, i) {
            i = i || {};
            var n, r, s, a = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, c = i.repeat && o.TweenMax || e;
            for (r in i)
                a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
            s = new c(this,n,a),
            a.onStart = function() {
                s.target.paused(!0),
                s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
            }
            ,
            s
        }
        ,
        c.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, l, c, h, u, p, d = this._time, f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._duration, _ = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, w = this._paused, x = this._cycle;
            if (d !== this._time && (t += this._time - d),
            t >= f - 1e-7 && t >= 0)
                this._locked || (this._totalTime = f,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (r = !0,
                l = "onComplete",
                c = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || 0 > y || 1e-10 === y) && y !== t && this._first && (c = !0,
                y > 1e-10 && (l = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m,
                t = m + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== d || 0 === m && 1e-10 !== y && (y > 0 || 0 > t && y >= 0) && !this._locked) && (l = "onReverseComplete",
                r = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0,
                    l = "onReverseComplete") : y >= 0 && this._first && (c = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (c = !0)
                }
            else if (0 === m && 0 > y && (c = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (h = m + this._repeatDelay,
            this._cycle = this._totalTime / h >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / h && t >= _ && this._cycle--,
            this._time = this._totalTime - this._cycle * h,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time),
            this._time > m ? (this._time = m,
            t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
            this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= d || this._repeat && x !== this._cycle)
                    for (n = this._first; n && n._startTime <= t && !u; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n),
                        n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !u; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n),
                        n = n._prev;
                u && u._startTime < m && (this._time = t = u._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== x && !this._locked) {
                var b = this._yoyo && 0 != (1 & x)
                  , T = b === (this._yoyo && 0 != (1 & this._cycle))
                  , S = this._totalTime
                  , P = this._cycle
                  , C = this._rawPrevTime
                  , E = this._time;
                if (this._totalTime = x * m,
                this._cycle < x ? b = !b : this._totalTime += m,
                this._time = d,
                this._rawPrevTime = 0 === m ? y - 1e-4 : y,
                this._cycle = x,
                this._locked = !0,
                d = b ? 0 : m,
                this.render(d, e, 0 === m),
                e || this._gc || this.vars.onRepeat && (this._cycle = P,
                this._locked = !1,
                this._callback("onRepeat")),
                d !== this._time)
                    return;
                if (T && (this._cycle = x,
                this._locked = !0,
                d = b ? m + 1e-4 : -1e-4,
                this.render(d, !0, !1)),
                this._locked = !1,
                this._paused && !w)
                    return;
                this._time = E,
                this._totalTime = S,
                this._cycle = P,
                this._rawPrevTime = C
            }
            if (this._time !== d && this._first || i || c || u) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0),
                0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                (p = this._time) >= d)
                    for (n = this._first; n && (o = n._next,
                    p === this._time && (!this._paused || w)); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = o;
                else
                    for (n = this._last; n && (o = n._prev,
                    p === this._time && (!this._paused || w)); ) {
                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                            if (u === n) {
                                for (u = n._prev; u && u.endTime() > this._time; )
                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                    u = u._prev;
                                u = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = o
                    }
                this._onUpdate && (e || (s.length && a(),
                this._callback("onUpdate"))),
                l && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (s.length && a(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[l] && this._callback(l)))
            } else
                _ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        c.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, r, s = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
            for (n = 0; l > n; n++)
                (r = a[n]).isActive() && (s[o++] = r);
            return s
        }
        ,
        c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        c.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        c.invalidate = function() {
            return this._locked = !1,
            t.prototype.invalidate.call(this)
        }
        ,
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }
        ,
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }
        ,
        c.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }, !0),
    function() {
        var t = 180 / Math.PI
          , e = []
          , i = []
          , n = []
          , r = {}
          , s = _gsScope._gsDefine.globals
          , a = function(t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = n,
            this.da = n - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , o = function(t, e, i, n) {
            var r = {
                a: t
            }
              , s = {}
              , a = {}
              , o = {
                c: n
            }
              , l = (t + e) / 2
              , c = (e + i) / 2
              , h = (i + n) / 2
              , u = (l + c) / 2
              , p = (c + h) / 2
              , d = (p - u) / 8;
            return r.b = l + (t - l) / 4,
            s.b = u + d,
            r.c = s.a = (r.b + s.b) / 2,
            s.c = a.a = (u + p) / 2,
            a.b = p - d,
            o.b = h + (n - h) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, s, a, o]
        }
          , l = function(t, r, s, a, l) {
            var c, h, u, p, d, f, m, _, g, v, y, w, x, b = t.length - 1, T = 0, S = t[0].a;
            for (c = 0; b > c; c++)
                d = t[T],
                h = d.a,
                u = d.d,
                p = t[T + 1].d,
                l ? (y = e[c],
                w = i[c],
                x = (w + y) * r * .25 / (a ? .5 : n[c] || .5),
                f = u - (u - h) * (a ? .5 * r : 0 !== y ? x / y : 0),
                m = u + (p - u) * (a ? .5 * r : 0 !== w ? x / w : 0),
                _ = u - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = u - (u - h) * r * .5,
                m = u + (p - u) * r * .5,
                _ = u - (f + m) / 2),
                f += _,
                m += _,
                d.c = g = f,
                d.b = 0 !== c ? S : S = d.a + .6 * (d.c - d.a),
                d.da = u - h,
                d.ca = g - h,
                d.ba = S - h,
                s ? (v = o(h, S, g, u),
                t.splice(T, 1, v[0], v[1], v[2], v[3]),
                T += 4) : T++,
                S = m;
            (d = t[T]).b = S,
            d.c = S + .4 * (d.d - S),
            d.da = d.d - d.a,
            d.ca = d.c - d.a,
            d.ba = S - d.a,
            s && (v = o(d.a, S, d.c, d.d),
            t.splice(T, 1, v[0], v[1], v[2], v[3]))
        }
          , c = function(t, n, r, s) {
            var o, l, c, h, u, p, d = [];
            if (s)
                for (t = [s].concat(t),
                l = t.length; --l > -1; )
                    "string" == typeof (p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
            if (0 > (o = t.length - 2))
                return d[0] = new a(t[0][n],0,0,t[0][n]),
                d;
            for (l = 0; o > l; l++)
                c = t[l][n],
                h = t[l + 1][n],
                d[l] = new a(c,0,0,h),
                r && (u = t[l + 2][n],
                e[l] = (e[l] || 0) + (h - c) * (h - c),
                i[l] = (i[l] || 0) + (u - h) * (u - h));
            return d[l] = new a(t[l][n],0,0,t[l + 1][n]),
            d
        }
          , h = function(t, s, a, o, h, u) {
            var p, d, f, m, _, g, v, y, w = {}, x = [], b = u || t[0];
            h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            null == s && (s = 1);
            for (d in t[0])
                x.push(d);
            if (t.length > 1) {
                for (y = t[t.length - 1],
                v = !0,
                p = x.length; --p > -1; )
                    if (d = x[p],
                    Math.abs(b[d] - y[d]) > .05) {
                        v = !1;
                        break
                    }
                v && (t = t.concat(),
                u && t.unshift(u),
                t.push(t[1]),
                u = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0,
            p = x.length; --p > -1; )
                d = x[p],
                r[d] = -1 !== h.indexOf("," + d + ","),
                w[d] = c(t, d, r[d], u);
            for (p = e.length; --p > -1; )
                e[p] = Math.sqrt(e[p]),
                i[p] = Math.sqrt(i[p]);
            if (!o) {
                for (p = x.length; --p > -1; )
                    if (r[d])
                        for (f = w[x[p]],
                        g = f.length - 1,
                        m = 0; g > m; m++)
                            _ = f[m + 1].da / i[m] + f[m].da / e[m] || 0,
                            n[m] = (n[m] || 0) + _ * _;
                for (p = n.length; --p > -1; )
                    n[p] = Math.sqrt(n[p])
            }
            for (p = x.length,
            m = a ? 4 : 1; --p > -1; )
                d = x[p],
                f = w[d],
                l(f, s, a, o, r[d]),
                v && (f.splice(0, m),
                f.splice(f.length - m, m));
            return w
        }
          , u = function(t, e, i) {
            for (var n, r, s, a, o, l, c, h, u, p, d, f = 1 / i, m = t.length; --m > -1; )
                for (p = t[m],
                s = p.a,
                a = p.d - s,
                o = p.c - s,
                l = p.b - s,
                n = r = 0,
                h = 1; i >= h; h++)
                    c = f * h,
                    u = 1 - c,
                    n = r - (r = (c * c * a + 3 * u * (c * o + u * l)) * c),
                    d = m * i + h - 1,
                    e[d] = (e[d] || 0) + n * n
        }
          , p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._mod = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, l, c = e.values || [], p = {}, d = c[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null;
                for (n in d)
                    this._props.push(n);
                for (s = this._props.length; --s > -1; )
                    n = this._props[s],
                    this._overwriteProps.push(n),
                    r = this._func[n] = "function" == typeof t[n],
                    p[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                    l || p[n] !== c[0][n] && (l = p);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(c, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                    var n, r, s, o, l, c, h, u, p, d, f, m = {}, _ = "cubic" === (e = e || "soft") ? 3 : 2, g = "soft" === e, v = [];
                    if (g && i && (t = [i].concat(t)),
                    null == t || t.length < _ + 1)
                        throw "invalid Bezier data";
                    for (p in t[0])
                        v.push(p);
                    for (c = v.length; --c > -1; ) {
                        for (m[p = v[c]] = l = [],
                        d = 0,
                        u = t.length,
                        h = 0; u > h; h++)
                            n = null == i ? t[h][p] : "string" == typeof (f = t[h][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                            g && h > 1 && u - 1 > h && (l[d++] = (n + l[d - 2]) / 2),
                            l[d++] = n;
                        for (u = d - _ + 1,
                        d = 0,
                        h = 0; u > h; h += _)
                            n = l[h],
                            r = l[h + 1],
                            s = l[h + 2],
                            o = 2 === _ ? 0 : l[h + 3],
                            l[d++] = f = 3 === _ ? new a(n,r,s,o) : new a(n,(2 * r + n) / 3,(2 * r + s) / 3,s);
                        l.length = d
                    }
                    return m
                }(c, e.type, p),
                this._segCount = this._beziers[n].length,
                this._timeRes) {
                    var m = function(t, e) {
                        var i, n, r, s, a = [], o = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, p = [], d = [];
                        for (i in t)
                            u(t[i], a, e);
                        for (r = a.length,
                        n = 0; r > n; n++)
                            l += Math.sqrt(a[n]),
                            s = n % e,
                            d[s] = l,
                            s === h && (c += l,
                            s = n / e >> 0,
                            p[s] = d,
                            o[s] = c,
                            l = 0,
                            d = []);
                        return {
                            length: c,
                            lengths: o,
                            segments: p
                        }
                    }(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [],
                    f[0]instanceof Array || (this._autoRotate = f = [f]),
                    s = f.length; --s > -1; ) {
                        for (o = 0; 3 > o; o++)
                            n = f[s][o],
                            this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = f[s][2],
                        this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                        this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, n, r, s, a, o, l, c, h, u, p = this._segCount, d = this._func, f = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    r = this._li,
                    e > this._l2 && p - 1 > r) {
                        for (c = p - 1; c > r && (this._l2 = h[++r]) <= e; )
                            ;
                        this._l1 = h[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = h[--r]) >= e; )
                            ;
                        0 === r && e < this._l1 ? this._l1 = 0 : r++,
                        this._l2 = h[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r,
                    e -= this._l1,
                    r = this._si,
                    e > this._s2 && r < u.length - 1) {
                        for (c = u.length - 1; c > r && (this._s2 = u[++r]) <= e; )
                            ;
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (e < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && e < this._s1 ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                    o = (e - i * (1 / p)) * p;
                for (n = 1 - o,
                r = this._props.length; --r > -1; )
                    s = this._props[r],
                    a = this._beziers[s][i],
                    l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a,
                    this._mod[s] && (l = this._mod[s](l, f)),
                    d[s] ? f[s](l) : f[s] = l;
                if (this._autoRotate) {
                    var _, g, v, y, w, x, b, T = this._autoRotate;
                    for (r = T.length; --r > -1; )
                        s = T[r][2],
                        x = T[r][3] || 0,
                        b = !0 === T[r][4] ? 1 : t,
                        a = this._beziers[T[r][0]],
                        _ = this._beziers[T[r][1]],
                        a && _ && (a = a[i],
                        _ = _[i],
                        g = a.a + (a.b - a.a) * o,
                        y = a.b + (a.c - a.b) * o,
                        g += (y - g) * o,
                        y += (a.c + (a.d - a.c) * o - y) * o,
                        v = _.a + (_.b - _.a) * o,
                        w = _.b + (_.c - _.b) * o,
                        v += (w - v) * o,
                        w += (_.c + (_.d - _.c) * o - w) * o,
                        l = m ? Math.atan2(w - v, y - g) * b + x : this._initialRotations[r],
                        this._mod[s] && (l = this._mod[s](l, f)),
                        d[s] ? f[s](l) : f[s] = l)
                }
            }
        })
          , d = p.prototype;
        p.bezierThrough = h,
        p.cubicToQuadratic = o,
        p._autoCSS = !0,
        p.quadraticToCubic = function(t, e, i) {
            return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        p._cssRegister = function() {
            var t = s.CSSPlugin;
            if (t) {
                var e = t._internals
                  , i = e._parseToProxy
                  , n = e._setPluginRatio
                  , r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, s, a, o, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new p;
                        var c, h, u, d = e.values, f = d.length - 1, m = [], _ = {};
                        if (0 > f)
                            return o;
                        for (c = 0; f >= c; c++)
                            u = i(t, d[c], a, o, l, f !== c),
                            m[c] = u.end;
                        for (h in e)
                            _[h] = e[h];
                        return _.values = m,
                        o = new r(t,"bezier",0,0,u.pt,2),
                        o.data = u,
                        o.plugin = l,
                        o.setRatio = n,
                        0 === _.autoRotate && (_.autoRotate = !0),
                        !_.autoRotate || _.autoRotate instanceof Array || (c = !0 === _.autoRotate ? 0 : Number(_.autoRotate),
                        _.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x && [["x", "y", "rotation", c, !1]]),
                        _.autoRotate && (a._transform || a._enableTransforms(!1),
                        u.autoRotate = a._target._gsTransform,
                        u.proxy.rotation = u.autoRotate.rotation || 0,
                        a._overwriteProps.push("rotation")),
                        l._onInitTween(u.proxy, _, a._tween),
                        o
                    }
                })
            }
        }
        ,
        d._mod = function(t) {
            for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
                (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        }
        ,
        d._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = n.length; --i > -1; )
                        n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; --i > -1; )
                    t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, r, s, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, c = a.prototype = new t("css");
        c.constructor = a,
        a.version = "1.20.3",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        a.defaultSmoothOrigin = !0,
        c = "px",
        a.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var h, u, p, d, f, m, _, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, P = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, E = /([A-Z])/g, k = /-([a-z])/gi, D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function(t, e) {
            return e.toUpperCase()
        }, M = /(?:Left|Right|Width)/i, A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, R = /,(?=[^\)]*(?:\(|$))/gi, N = /[\s,\(]/i, j = Math.PI / 180, z = 180 / Math.PI, I = {}, B = {
            style: {}
        }, H = _gsScope.document || {
            createElement: function() {
                return B
            }
        }, U = function(t, e) {
            return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
        }, F = U("div"), X = U("img"), q = a._internals = {
            _specialProps: l
        }, Q = (_gsScope.navigator || {}).userAgent || "", Y = function() {
            var t = Q.indexOf("Android")
              , e = U("a");
            return p = -1 !== Q.indexOf("Safari") && -1 === Q.indexOf("Chrome") && (-1 === t || parseFloat(Q.substr(t + 8, 2)) > 3),
            f = p && parseFloat(Q.substr(Q.indexOf("Version/") + 8, 2)) < 6,
            d = -1 !== Q.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q)) && (m = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), W = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, V = function(t) {
            _gsScope.console && console.log(t)
        }, G = "", $ = "", K = function(t, e) {
            var i, n, r = (e = e || F).style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === r[i[n] + t]; )
                ;
            return n >= 0 ? ($ = 3 === n ? "ms" : i[n],
            G = "-" + $.toLowerCase() + "-",
            $ + t) : null
        }, Z = H.defaultView ? H.defaultView.getComputedStyle : function() {}
        , J = a.getStyle = function(t, e, i, n, r) {
            var s;
            return Y || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || Z(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]),
            null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(t)
        }
        , tt = q.convertToPixels = function(t, i, n, r, s) {
            if ("px" === r || !r && "lineHeight" !== i)
                return n;
            if ("auto" === r || !n)
                return 0;
            var o, l, c, h = M.test(i), u = t, p = F.style, d = 0 > n, f = 1 === n;
            if (d && (n = -n),
            f && (n *= 100),
            "lineHeight" !== i || r)
                if ("%" === r && -1 !== i.indexOf("border"))
                    o = n / 100 * (h ? t.clientWidth : t.clientHeight);
                else {
                    if (p.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;",
                    "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                        p[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                    else {
                        if (u = t.parentNode || H.body,
                        -1 !== J(u, "display").indexOf("flex") && (p.position = "absolute"),
                        l = u._gsCache,
                        c = e.ticker.frame,
                        l && h && l.time === c)
                            return l.width * n / 100;
                        p[h ? "width" : "height"] = n + r
                    }
                    u.appendChild(F),
                    o = parseFloat(F[h ? "offsetWidth" : "offsetHeight"]),
                    u.removeChild(F),
                    h && "%" === r && !1 !== a.cacheWidths && (l = u._gsCache = u._gsCache || {},
                    l.time = c,
                    l.width = o / n * 100),
                    0 !== o || s || (o = tt(t, i, n, r, !0))
                }
            else
                l = Z(t).lineHeight,
                t.style.lineHeight = n,
                o = parseFloat(Z(t).lineHeight),
                t.style.lineHeight = l;
            return f && (o /= 100),
            d ? -o : o
        }
        , et = q.calculateOffset = function(t, e, i) {
            if ("absolute" !== J(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , r = J(t, "margin" + n, i);
            return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(b, "")) || 0)
        }
        , it = function(t, e) {
            var i, n, r, s = {};
            if (e = e || Z(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        (-1 === (r = e[i]).indexOf("-transform") || Dt === r) && (s[r.replace(k, O)] = e.getPropertyValue(r));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || kt === i) && (s[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === s[i] && (s[i.replace(k, O)] = e[i]);
            return Y || (s.opacity = W(t)),
            n = Ft(t, e, !1),
            s.rotation = n.rotation,
            s.skewX = n.skewX,
            s.scaleX = n.scaleX,
            s.scaleY = n.scaleY,
            s.x = n.x,
            s.y = n.y,
            Mt && (s.z = n.z,
            s.rotationX = n.rotationX,
            s.rotationY = n.rotationY,
            s.scaleZ = n.scaleZ),
            s.filters && delete s.filters,
            s
        }, nt = function(t, e, i, n, r) {
            var s, a, o, l = {}, c = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(x, "") ? s : 0 : et(t, a),
                void 0 !== c[a] && (o = new vt(c,a,c[a],o)));
            if (n)
                for (a in n)
                    "className" !== a && (l[a] = n[a]);
            return {
                difs: l,
                firstMPT: o
            }
        }, rt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || Z(t))[e] || 0;
            if (t.getCTM && Bt(t))
                return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = rt[e]
              , s = r.length;
            for (i = i || Z(t, null); --s > -1; )
                n -= parseFloat(J(t, "padding" + r[s], i, !0)) || 0,
                n -= parseFloat(J(t, "border" + r[s] + "Width", i, !0)) || 0;
            return n
        }, ot = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
            if (n.length > 3 && !e) {
                for (n = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < n.length; i++)
                    t.push(ot(n[i]));
                return t.join(",")
            }
            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"),
            ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
            t = r + " " + s + (n.length > 2 ? " " + n[2] : ""),
            e && (e.oxp = -1 !== r.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === r.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(r.replace(x, "")),
            e.oy = parseFloat(s.replace(x, "")),
            e.v = t),
            e || t
        }, lt = function(t, e) {
            return "function" == typeof t && (t = t(g, _)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, ct = function(t, e) {
            return "function" == typeof t && (t = t(g, _)),
            null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ht = function(t, e, i, n) {
            var r, s, a, o, l;
            return "function" == typeof t && (t = t(g, _)),
            null == t ? o = e : "number" == typeof t ? o = t : (r = 360,
            s = t.split("_"),
            l = "=" === t.charAt(1),
            a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e),
            s.length && (n && (n[i] = e + a),
            -1 !== t.indexOf("short") && (a %= r) != a % (r / 2) && (a = 0 > a ? a + r : a - r),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)),
            o = e + a),
            1e-6 > o && o > -1e-6 && (o = 0),
            o
        }, ut = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, pt = function(t, e, i) {
            return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, dt = a.parseColor = function(t, e) {
            var i, n, r, s, a, o, l, c, h, u, p;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    ut[t])
                        i = ut[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (n = t.charAt(1),
                        r = t.charAt(2),
                        s = t.charAt(3),
                        t = "#" + n + n + r + r + s + s),
                        t = parseInt(t.substr(1), 16),
                        i = [t >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = p = t.match(v),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(y)
                        } else
                            a = Number(i[0]) % 360 / 360,
                            o = Number(i[1]) / 100,
                            l = Number(i[2]) / 100,
                            r = .5 >= l ? l * (o + 1) : l + o - l * o,
                            n = 2 * l - r,
                            i.length > 3 && (i[3] = Number(i[3])),
                            i[0] = pt(a + 1 / 3, n, r),
                            i[1] = pt(a, n, r),
                            i[2] = pt(a - 1 / 3, n, r);
                    else
                        i = t.match(v) || ut.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = ut.black;
            return e && !p && (n = i[0] / 255,
            r = i[1] / 255,
            s = i[2] / 255,
            c = Math.max(n, r, s),
            h = Math.min(n, r, s),
            l = (c + h) / 2,
            c === h ? a = o = 0 : (u = c - h,
            o = l > .5 ? u / (2 - c - h) : u / (c + h),
            a = c === n ? (r - s) / u + (s > r ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4,
            a *= 60),
            i[0] = a + .5 | 0,
            i[1] = 100 * o + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , ft = function(t, e) {
            var i, n, r, s = t.match(mt) || [], a = 0, o = "";
            if (!s.length)
                return t;
            for (i = 0; i < s.length; i++)
                n = s[i],
                r = t.substr(a, t.indexOf(n, a) - a),
                a += r.length + n.length,
                3 === (n = dt(n, e)).length && n.push(1),
                o += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return o + t.substr(a)
        }, mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in ut)
            mt += "|" + c + "\\b";
        mt = new RegExp(mt + ")","gi"),
        a.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = ft(t[0], e),
            t[1] = ft(t[1], e)),
            mt.lastIndex = 0
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var _t = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var r, s = e ? (t.match(mt) || [""])[0] : "", a = t.split(s).join("").match(w) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", c = -1 !== t.indexOf(" ") ? " " : ",", h = a.length, u = h > 0 ? a[0].replace(v, "") : "";
            return h ? r = e ? function(t) {
                var e, p, d, f;
                if ("number" == typeof t)
                    t += u;
                else if (n && R.test(t)) {
                    for (f = t.replace(R, "|").split("|"),
                    d = 0; d < f.length; d++)
                        f[d] = r(f[d]);
                    return f.join(",")
                }
                if (e = (t.match(mt) || [s])[0],
                p = t.split(e).join("").match(w) || [],
                d = p.length,
                h > d--)
                    for (; ++d < h; )
                        p[d] = i ? p[(d - 1) / 2 | 0] : a[d];
                return o + p.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, s, p;
                if ("number" == typeof t)
                    t += u;
                else if (n && R.test(t)) {
                    for (s = t.replace(R, "|").split("|"),
                    p = 0; p < s.length; p++)
                        s[p] = r(s[p]);
                    return s.join(",")
                }
                if (e = t.match(w) || [],
                p = e.length,
                h > p--)
                    for (; ++p < h; )
                        e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                return o + e.join(c) + l
            }
            : function(t) {
                return t
            }
        }
          , gt = function(t) {
            return t = t.split(","),
            function(e, i, n, r, s, a, o) {
                var l, c = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++)
                    o[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return r.parse(e, o, s, a)
            }
        }
          , vt = (q._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s, a = this.data, o = a.proxy, l = a.firstMPT; l; )
                e = o[l.v],
                l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation),
            1 === t || 0 === t)
                for (l = a.firstMPT,
                s = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            n = 1; n < i.l; n++)
                                r += i["xn" + n] + i["xs" + (n + 1)];
                            i[s] = r
                        }
                    } else
                        i[s] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, n, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , yt = (q._parseToProxy = function(t, e, i, n, r, s) {
            var a, o, l, c, h, u = n, p = {}, d = {}, f = i._transform, m = I;
            for (i._transform = null,
            I = e,
            n = h = i.parse(t, e, n, r),
            I = m,
            s && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); n && n !== u; ) {
                if (n.type <= 1 && (o = n.p,
                d[o] = n.s + n.c,
                p[o] = n.s,
                s || (c = new vt(n,"s",o,c,n.r),
                n.c = 0),
                1 === n.type))
                    for (a = n.l; --a > 0; )
                        l = "xn" + a,
                        o = n.p + "_" + l,
                        d[o] = n.data[l],
                        p[o] = n[l],
                        s || (c = new vt(n,l,o,c,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: p,
                end: d,
                firstMPT: c,
                pt: h
            }
        }
        ,
        q.CSSPropTween = function(t, e, n, r, a, o, l, c, h, u, p) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = r,
            this.n = l || e,
            t instanceof yt || s.push(this.n),
            this.r = c,
            this.type = o || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === u ? n : u,
            this.e = void 0 === p ? n + r : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , wt = function(t, e, i, n, r, s) {
            var a = new yt(t,e,i,n - i,r,-1,s);
            return a.b = i,
            a.e = a.xs0 = n,
            a
        }
          , xt = a.parseComplex = function(t, e, i, n, r, s, o, l, c, u) {
            i = i || s || "",
            "function" == typeof n && (n = n(g, _)),
            o = new yt(t,e,0,0,o,u ? 2 : 1,null,!1,l,i,n),
            n += "",
            r && mt.test(n + i) && (n = [i, n],
            a.colorStringFilter(n),
            i = n[0],
            n = n[1]);
            var p, d, f, m, w, x, b, T, S, P, C, E, k, D = i.split(", ").join(",").split(" "), O = n.split(", ").join(",").split(" "), M = D.length, A = !1 !== h;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (D = D.join(" ").replace(R, ", ").split(" "),
            O = O.join(" ").replace(R, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "),
            O = O.join(" ").split(",").join(", ").split(" ")),
            M = D.length),
            M !== O.length && (D = (s || "").split(" "),
            M = D.length),
            o.plugin = c,
            o.setRatio = u,
            mt.lastIndex = 0,
            p = 0; M > p; p++)
                if (m = D[p],
                w = O[p],
                (T = parseFloat(m)) || 0 === T)
                    o.appendXtra("", T, lt(w, T), w.replace(y, ""), A && -1 !== w.indexOf("px"), !0);
                else if (r && mt.test(m))
                    E = w.indexOf(")") + 1,
                    E = ")" + (E ? w.substr(E) : ""),
                    k = -1 !== w.indexOf("hsl") && Y,
                    P = w,
                    m = dt(m, k),
                    w = dt(w, k),
                    (S = m.length + w.length > 6) && !Y && 0 === w[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                    o.e = o.e.split(O[p]).join("transparent")) : (Y || (S = !1),
                    k ? o.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], lt(w[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(w[1], m[1]), "%,", !1).appendXtra("", m[2], lt(w[2], m[2]), S ? "%," : "%" + E, !1) : o.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], w[0] - m[0], ",", !0, !0).appendXtra("", m[1], w[1] - m[1], ",", !0).appendXtra("", m[2], w[2] - m[2], S ? "," : E, !0),
                    S && (m = m.length < 4 ? 1 : m[3],
                    o.appendXtra("", m, (w.length < 4 ? 1 : w[3]) - m, E, !1))),
                    mt.lastIndex = 0;
                else if (x = m.match(v)) {
                    if (!(b = w.match(y)) || b.length !== x.length)
                        return o;
                    for (f = 0,
                    d = 0; d < x.length; d++)
                        C = x[d],
                        P = m.indexOf(C, f),
                        o.appendXtra(m.substr(f, P - f), Number(C), lt(b[d], C), "", A && "px" === m.substr(P + C.length, 2), 0 === d),
                        f = P + C.length;
                    o["xs" + o.l] += m.substr(f)
                } else
                    o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + w : w;
            if (-1 !== n.indexOf("=") && o.data) {
                for (E = o.xs0 + o.data.s,
                p = 1; p < o.l; p++)
                    E += o["xs" + p] + o.data["xn" + p];
                o.e = E + o["xs" + p]
            }
            return o.l || (o.type = -1,
            o.xs0 = o.e),
            o.xfirst || o
        }
          , bt = 9;
        for ((c = yt.prototype).l = c.pr = 0; --bt > 0; )
            c["xn" + bt] = 0,
            c["xs" + bt] = "";
        c.xs0 = "",
        c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
        c.appendXtra = function(t, e, i, n, r, s) {
            var a = this.l;
            return this["xs" + a] += s && (a || this["xs" + a]) ? " " + t : t || "",
            i || 0 === a || this.plugin ? (this.l++,
            this.type = this.setRatio ? 2 : 1,
            this["xs" + this.l] = n || "",
            a > 0 ? (this.data["xn" + a] = e + i,
            this.rxp["xn" + a] = r,
            this["xn" + a] = e,
            this.plugin || (this.xfirst = new yt(this,"xn" + a,e,i,this.xfirst || this,0,this.n,r,this.pr),
            this.xfirst.xs0 = 0),
            this) : (this.data = {
                s: e + i
            },
            this.rxp = {},
            this.s = e,
            this.c = i,
            this.r = r,
            this)) : (this["xs" + a] += e + (n || ""),
            this)
        }
        ;
        var Tt = function(t, e) {
            e = e || {},
            this.p = e.prefix ? K(t) || t : t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , St = q._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, r = t.split(","), s = e.defaultValue;
            for (i = i || [s],
            n = 0; n < r.length; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || s,
                new Tt(r[n],e)
        }
          , Pt = q._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                St(t, {
                    parser: function(t, i, n, r, s, a, c) {
                        var h = o.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[n].parse(t, i, n, r, s, a, c)) : (V("Error: " + e + " js file not loaded."),
                        s)
                    }
                })
            }
        }
        ;
        (c = Tt.prototype).parseComplex = function(t, e, i, n, r, s) {
            var a, o, l, c, h, u, p = this.keyword;
            if (this.multi && (R.test(i) || R.test(e) ? (o = e.replace(R, "|").split("|"),
            l = i.replace(R, "|").split("|")) : p && (o = [e],
            l = [i])),
            l) {
                for (c = l.length > o.length ? l.length : o.length,
                a = 0; c > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = l[a] = l[a] || this.dflt,
                    p && (h = e.indexOf(p),
                    u = i.indexOf(p),
                    h !== u && (-1 === u ? o[a] = o[a].split(p).join("") : -1 === h && (o[a] += " " + p)));
                e = o.join(", "),
                i = l.join(", ")
            }
            return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }
        ,
        c.parse = function(t, e, i, n, s, a, o) {
            return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            St(t, {
                parser: function(t, n, r, s, a, o, l) {
                    var c = new yt(t,r,0,0,a,2,r,!1,i);
                    return c.plugin = o,
                    c.setRatio = e(t, n, s._tween, r),
                    c
                },
                priority: i
            })
        }
        ,
        a.useSVGTransformAttr = !0;
        var Ct, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), kt = K("transform"), Dt = G + "transform", Ot = K("transformOrigin"), Mt = null !== K("perspective"), At = q.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === a.defaultForce3D || !Mt) && (a.defaultForce3D || "auto")
        }
        , Lt = _gsScope.SVGElement, Rt = function(t, e, i) {
            var n, r = H.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
            for (n in i)
                r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r),
            r
        }, Nt = H.documentElement || {}, jt = function() {
            var t, e, i, n = m || /Android/i.test(Q) && !_gsScope.chrome;
            return H.createElementNS && !n && (t = Rt("svg", Nt),
            e = Rt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }),
            i = e.getBoundingClientRect().width,
            e.style[Ot] = "50% 50%",
            e.style[kt] = "scaleX(0.5)",
            n = i === e.getBoundingClientRect().width && !(d && Mt),
            Nt.removeChild(t)),
            n
        }(), zt = function(t, e, i, n, r, s) {
            var o, l, c, h, u, p, d, f, m, _, g, v, y, w, x = t._gsTransform, b = Ut(t, !0);
            x && (y = x.xOrigin,
            w = x.yOrigin),
            (!n || (o = n.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            e = ot(e).split(" "),
            o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]),
            i.xOrigin = h = parseFloat(o[0]),
            i.yOrigin = u = parseFloat(o[1]),
            n && b !== Ht && (p = b[0],
            d = b[1],
            f = b[2],
            m = b[3],
            _ = b[4],
            g = b[5],
            (v = p * m - d * f) && (l = h * (m / v) + u * (-f / v) + (f * g - m * _) / v,
            c = h * (-d / v) + u * (p / v) - (p * g - d * _) / v,
            h = i.xOrigin = o[0] = l,
            u = i.yOrigin = o[1] = c)),
            x && (s && (i.xOffset = x.xOffset,
            i.yOffset = x.yOffset,
            x = i),
            r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = h - y,
            c = u - w,
            x.xOffset += l * b[0] + c * b[2] - l,
            x.yOffset += l * b[1] + c * b[3] - c) : x.xOffset = x.yOffset = 0),
            s || t.setAttribute("data-svg-origin", o.join(" "))
        }, It = function(t) {
            var e, i = U("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, s = this.style.cssText;
            if (Nt.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    e = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = It
                } catch (t) {}
            else
                this._originalGetBBox && (e = this._originalGetBBox());
            return r ? n.insertBefore(this, r) : n.appendChild(this),
            Nt.removeChild(i),
            this.style.cssText = s,
            e
        }, Bt = function(t) {
            return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return It.call(t, !0)
                }
            }(t))
        }, Ht = [1, 0, 0, 1, 0, 0], Ut = function(t, e) {
            var i, n, r, s, a, o, l = t._gsTransform || new At, c = t.style;
            if (kt ? n = J(t, Dt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A),
            n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
            i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            !kt || !(o = !Z(t) || "none" === Z(t).display) && t.parentNode || (o && (s = c.display,
            c.display = "block"),
            t.parentNode || (a = 1,
            Nt.appendChild(t)),
            n = J(t, Dt, null, !0),
            i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            s ? c.display = s : o && Yt(c, "display"),
            a && Nt.removeChild(t)),
            (l.svg || t.getCTM && Bt(t)) && (i && -1 !== (c[kt] + "").indexOf("matrix") && (n = c[kt],
            i = 0),
            r = t.getAttribute("transform"),
            i && r && (-1 !== r.indexOf("matrix") ? (n = r,
            i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return Ht;
            for (r = (n || "").match(v) || [],
            bt = r.length; --bt > -1; )
                s = Number(r[bt]),
                r[bt] = (a = s - (s |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + s : s;
            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }, Ft = q.getTransform = function(t, i, n, r) {
            if (t._gsTransform && n && !r)
                return t._gsTransform;
            var s, o, l, c, h, u, p = n ? t._gsTransform || new At : new At, d = p.scaleX < 0, f = Mt ? parseFloat(J(t, Ot, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0, m = parseFloat(a.defaultTransformPerspective) || 0;
            if (p.svg = !(!t.getCTM || !Bt(t)),
            p.svg && (zt(t, J(t, Ot, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")),
            Ct = a.useSVGTransformAttr || jt),
            (s = Ut(t)) !== Ht) {
                if (16 === s.length) {
                    var _, g, v, y, w, x = s[0], b = s[1], T = s[2], S = s[3], P = s[4], C = s[5], E = s[6], k = s[7], D = s[8], O = s[9], M = s[10], A = s[12], L = s[13], R = s[14], N = s[11], j = Math.atan2(E, M);
                    p.zOrigin && (R = -p.zOrigin,
                    A = D * R - s[12],
                    L = O * R - s[13],
                    R = M * R + p.zOrigin - s[14]),
                    p.rotationX = j * z,
                    j && (y = Math.cos(-j),
                    w = Math.sin(-j),
                    _ = P * y + D * w,
                    g = C * y + O * w,
                    v = E * y + M * w,
                    D = P * -w + D * y,
                    O = C * -w + O * y,
                    M = E * -w + M * y,
                    N = k * -w + N * y,
                    P = _,
                    C = g,
                    E = v),
                    j = Math.atan2(-T, M),
                    p.rotationY = j * z,
                    j && (y = Math.cos(-j),
                    w = Math.sin(-j),
                    _ = x * y - D * w,
                    g = b * y - O * w,
                    v = T * y - M * w,
                    O = b * w + O * y,
                    M = T * w + M * y,
                    N = S * w + N * y,
                    x = _,
                    b = g,
                    T = v),
                    j = Math.atan2(b, x),
                    p.rotation = j * z,
                    j && (y = Math.cos(j),
                    w = Math.sin(j),
                    _ = x * y + b * w,
                    g = P * y + C * w,
                    v = D * y + O * w,
                    b = b * y - x * w,
                    C = C * y - P * w,
                    O = O * y - D * w,
                    x = _,
                    P = g,
                    D = v),
                    p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0,
                    p.rotationY = 180 - p.rotationY),
                    j = Math.atan2(P, C),
                    p.scaleX = (1e5 * Math.sqrt(x * x + b * b + T * T) + .5 | 0) / 1e5,
                    p.scaleY = (1e5 * Math.sqrt(C * C + E * E) + .5 | 0) / 1e5,
                    p.scaleZ = (1e5 * Math.sqrt(D * D + O * O + M * M) + .5 | 0) / 1e5,
                    x /= p.scaleX,
                    P /= p.scaleY,
                    b /= p.scaleX,
                    C /= p.scaleY,
                    Math.abs(j) > 2e-5 ? (p.skewX = j * z,
                    P = 0,
                    "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(j))) : p.skewX = 0,
                    p.perspective = N ? 1 / (0 > N ? -N : N) : 0,
                    p.x = A,
                    p.y = L,
                    p.z = R,
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * x - p.yOrigin * P),
                    p.y -= p.yOrigin - (p.yOrigin * b - p.xOrigin * C))
                } else if (!Mt || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                    var I = s.length >= 6
                      , B = I ? s[0] : 1
                      , H = s[1] || 0
                      , U = s[2] || 0
                      , F = I ? s[3] : 1;
                    p.x = s[4] || 0,
                    p.y = s[5] || 0,
                    l = Math.sqrt(B * B + H * H),
                    c = Math.sqrt(F * F + U * U),
                    h = B || H ? Math.atan2(H, B) * z : p.rotation || 0,
                    u = U || F ? Math.atan2(U, F) * z + h : p.skewX || 0,
                    p.scaleX = l,
                    p.scaleY = c,
                    p.rotation = h,
                    p.skewX = u,
                    Mt && (p.rotationX = p.rotationY = p.z = 0,
                    p.perspective = m,
                    p.scaleZ = 1),
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * U),
                    p.y -= p.yOrigin - (p.xOrigin * H + p.yOrigin * F))
                }
                Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1,
                p.skewX += p.rotation <= 0 ? 180 : -180,
                p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1,
                p.skewX += p.skewX <= 0 ? 180 : -180)),
                p.zOrigin = f;
                for (o in p)
                    p[o] < 2e-5 && p[o] > -2e-5 && (p[o] = 0)
            }
            return n && (t._gsTransform = p,
            p.svg && (Ct && t.style[kt] ? e.delayedCall(.001, function() {
                Yt(t.style, kt)
            }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() {
                t.removeAttribute("transform")
            }))),
            p
        }
        , Xt = function(t) {
            var e, i, n = this.data, r = -n.rotation * j, s = r + n.skewX * j, a = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5, c = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5, h = this.t.style, u = this.t.currentStyle;
            if (u) {
                i = o,
                o = -l,
                l = -i,
                e = u.filter,
                h.filter = "";
                var p, d, f = this.t.offsetWidth, _ = this.t.offsetHeight, g = "absolute" !== u.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + c, y = n.x + f * n.xPercent / 100, w = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2,
                d = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2,
                y += p - (p * a + d * o),
                w += d - (p * l + d * c)),
                g ? (p = f / 2,
                d = _ / 2,
                v += ", Dx=" + (p - (p * a + d * o) + y) + ", Dy=" + (d - (p * l + d * c) + w) + ")") : v += ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(L, v) : h.filter = v + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === o && 0 === l && 1 === c && (g && -1 === v.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")),
                !g) {
                    var x, S, P, C = 8 > m ? 1 : -1;
                    for (p = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((f - ((0 > a ? -a : a) * f + (0 > o ? -o : o) * _)) / 2 + y),
                    n.ieOffsetY = Math.round((_ - ((0 > c ? -c : c) * _ + (0 > l ? -l : l) * f)) / 2 + w),
                    bt = 0; 4 > bt; bt++)
                        S = st[bt],
                        x = u[S],
                        i = -1 !== x.indexOf("px") ? parseFloat(x) : tt(this.t, S, parseFloat(x), x.replace(b, "")) || 0,
                        P = i !== n[S] ? 2 > bt ? -n.ieOffsetX : -n.ieOffsetY : 2 > bt ? p - n.ieOffsetX : d - n.ieOffsetY,
                        h[S] = (n[S] = Math.round(i - P * (0 === bt || 2 === bt ? 1 : C))) + "px"
                }
            }
        }, qt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
            var e, i, n, r, s, a, o, l, c, h, u, p, f, m, _, g, v, y, w, x, b, T = this.data, S = this.t.style, P = T.rotation, C = T.rotationX, E = T.rotationY, k = T.scaleX, D = T.scaleY, O = T.scaleZ, M = T.x, A = T.y, L = T.z, R = T.svg, N = T.perspective, z = T.force3D, I = T.skewY, B = T.skewX;
            if (I && (B += I,
            P += I),
            !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || L || N || E || C || 1 !== O) || Ct && R || !Mt)
                P || B || R ? (P *= j,
                x = B * j,
                b = 1e5,
                i = Math.cos(P) * k,
                s = Math.sin(P) * k,
                n = Math.sin(P - x) * -D,
                a = Math.cos(P - x) * D,
                x && "simple" === T.skewType && (e = Math.tan(x - I * j),
                e = Math.sqrt(1 + e * e),
                n *= e,
                a *= e,
                I && (e = Math.tan(I * j),
                e = Math.sqrt(1 + e * e),
                i *= e,
                s *= e)),
                R && (M += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset,
                A += T.yOrigin - (T.xOrigin * s + T.yOrigin * a) + T.yOffset,
                Ct && (T.xPercent || T.yPercent) && (_ = this.t.getBBox(),
                M += .01 * T.xPercent * _.width,
                A += .01 * T.yPercent * _.height),
                (_ = 1e-6) > M && M > -_ && (M = 0),
                _ > A && A > -_ && (A = 0)),
                w = (i * b | 0) / b + "," + (s * b | 0) / b + "," + (n * b | 0) / b + "," + (a * b | 0) / b + "," + M + "," + A + ")",
                R && Ct ? this.t.setAttribute("transform", "matrix(" + w) : S[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + w) : S[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + D + "," + M + "," + A + ")";
            else {
                if (d && ((_ = 1e-4) > k && k > -_ && (k = O = 2e-5),
                _ > D && D > -_ && (D = O = 2e-5),
                !N || T.z || T.rotationX || T.rotationY || (N = 0)),
                P || B)
                    P *= j,
                    g = i = Math.cos(P),
                    v = s = Math.sin(P),
                    B && (P -= B * j,
                    g = Math.cos(P),
                    v = Math.sin(P),
                    "simple" === T.skewType && (e = Math.tan((B - I) * j),
                    e = Math.sqrt(1 + e * e),
                    g *= e,
                    v *= e,
                    T.skewY && (e = Math.tan(I * j),
                    e = Math.sqrt(1 + e * e),
                    i *= e,
                    s *= e))),
                    n = -v,
                    a = g;
                else {
                    if (!(E || C || 1 !== O || N || R))
                        return void (S[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + A + "px," + L + "px)" + (1 !== k || 1 !== D ? " scale(" + k + "," + D + ")" : ""));
                    i = a = 1,
                    n = s = 0
                }
                h = 1,
                r = o = l = c = u = p = 0,
                f = N ? -1 / N : 0,
                m = T.zOrigin,
                _ = 1e-6,
                ",",
                "0",
                (P = E * j) && (g = Math.cos(P),
                v = Math.sin(P),
                l = -v,
                u = f * -v,
                r = i * v,
                o = s * v,
                h = g,
                f *= g,
                i *= g,
                s *= g),
                (P = C * j) && (g = Math.cos(P),
                v = Math.sin(P),
                e = n * g + r * v,
                y = a * g + o * v,
                c = h * v,
                p = f * v,
                r = n * -v + r * g,
                o = a * -v + o * g,
                h *= g,
                f *= g,
                n = e,
                a = y),
                1 !== O && (r *= O,
                o *= O,
                h *= O,
                f *= O),
                1 !== D && (n *= D,
                a *= D,
                c *= D,
                p *= D),
                1 !== k && (i *= k,
                s *= k,
                l *= k,
                u *= k),
                (m || R) && (m && (M += r * -m,
                A += o * -m,
                L += h * -m + m),
                R && (M += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset,
                A += T.yOrigin - (T.xOrigin * s + T.yOrigin * a) + T.yOffset),
                _ > M && M > -_ && (M = "0"),
                _ > A && A > -_ && (A = "0"),
                _ > L && L > -_ && (L = 0)),
                w = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(",
                w += (_ > i && i > -_ ? "0" : i) + "," + (_ > s && s > -_ ? "0" : s) + "," + (_ > l && l > -_ ? "0" : l),
                w += "," + (_ > u && u > -_ ? "0" : u) + "," + (_ > n && n > -_ ? "0" : n) + "," + (_ > a && a > -_ ? "0" : a),
                C || E || 1 !== O ? (w += "," + (_ > c && c > -_ ? "0" : c) + "," + (_ > p && p > -_ ? "0" : p) + "," + (_ > r && r > -_ ? "0" : r),
                w += "," + (_ > o && o > -_ ? "0" : o) + "," + (_ > h && h > -_ ? "0" : h) + "," + (_ > f && f > -_ ? "0" : f) + ",") : w += ",0,0,0,0,1,0,",
                w += M + "," + A + "," + L + "," + (N ? 1 + -L / N : 1) + ")",
                S[kt] = w
            }
        }
        ;
        (c = At.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
        c.scaleX = c.scaleY = c.scaleZ = 1,
        St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, s, o, l) {
                if (n._lastParsedTransform === l)
                    return s;
                n._lastParsedTransform = l;
                var c, h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[i] && (c = l[i],
                l[i] = e),
                h && (l.scale = h(g, t));
                var u, p, d, f, m, v, y, w, x, b = t._gsTransform, T = t.style, S = Et.length, P = l, C = {}, E = "transformOrigin", k = Ft(t, r, !0, P.parseTransform), D = P.transform && ("function" == typeof P.transform ? P.transform(g, _) : P.transform);
                if (k.skewType = P.skewType || k.skewType || a.defaultSkewType,
                n._transform = k,
                D && "string" == typeof D && kt)
                    p = F.style,
                    p[kt] = D,
                    p.display = "block",
                    p.position = "absolute",
                    H.body.appendChild(F),
                    u = Ft(F, null, !1),
                    "simple" === k.skewType && (u.scaleY *= Math.cos(u.skewX * j)),
                    k.svg && (v = k.xOrigin,
                    y = k.yOrigin,
                    u.x -= k.xOffset,
                    u.y -= k.yOffset,
                    (P.transformOrigin || P.svgOrigin) && (D = {},
                    zt(t, ot(P.transformOrigin), D, P.svgOrigin, P.smoothOrigin, !0),
                    v = D.xOrigin,
                    y = D.yOrigin,
                    u.x -= D.xOffset - k.xOffset,
                    u.y -= D.yOffset - k.yOffset),
                    (v || y) && (w = Ut(F, !0),
                    u.x -= v - (v * w[0] + y * w[2]),
                    u.y -= y - (v * w[1] + y * w[3]))),
                    H.body.removeChild(F),
                    u.perspective || (u.perspective = k.perspective),
                    null != P.xPercent && (u.xPercent = ct(P.xPercent, k.xPercent)),
                    null != P.yPercent && (u.yPercent = ct(P.yPercent, k.yPercent));
                else if ("object" == typeof P) {
                    if (u = {
                        scaleX: ct(null != P.scaleX ? P.scaleX : P.scale, k.scaleX),
                        scaleY: ct(null != P.scaleY ? P.scaleY : P.scale, k.scaleY),
                        scaleZ: ct(P.scaleZ, k.scaleZ),
                        x: ct(P.x, k.x),
                        y: ct(P.y, k.y),
                        z: ct(P.z, k.z),
                        xPercent: ct(P.xPercent, k.xPercent),
                        yPercent: ct(P.yPercent, k.yPercent),
                        perspective: ct(P.transformPerspective, k.perspective)
                    },
                    null != (m = P.directionalRotation))
                        if ("object" == typeof m)
                            for (p in m)
                                P[p] = m[p];
                        else
                            P.rotation = m;
                    "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0,
                    u.xPercent = ct(P.x, k.xPercent)),
                    "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0,
                    u.yPercent = ct(P.y, k.yPercent)),
                    u.rotation = ht("rotation"in P ? P.rotation : "shortRotation"in P ? P.shortRotation + "_short" : "rotationZ"in P ? P.rotationZ : k.rotation, k.rotation, "rotation", C),
                    Mt && (u.rotationX = ht("rotationX"in P ? P.rotationX : "shortRotationX"in P ? P.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", C),
                    u.rotationY = ht("rotationY"in P ? P.rotationY : "shortRotationY"in P ? P.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", C)),
                    u.skewX = ht(P.skewX, k.skewX),
                    u.skewY = ht(P.skewY, k.skewY)
                }
                for (Mt && null != P.force3D && (k.force3D = P.force3D,
                f = !0),
                (d = k.force3D || k.z || k.rotationX || k.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == P.scale || (u.scaleZ = 1); --S > -1; )
                    x = Et[S],
                    ((D = u[x] - k[x]) > 1e-6 || -1e-6 > D || null != P[x] || null != I[x]) && (f = !0,
                    s = new yt(k,x,k[x],D,s),
                    x in C && (s.e = C[x]),
                    s.xs0 = 0,
                    s.plugin = o,
                    n._overwriteProps.push(s.n));
                return D = P.transformOrigin,
                k.svg && (D || P.svgOrigin) && (v = k.xOffset,
                y = k.yOffset,
                zt(t, ot(D), u, P.svgOrigin, P.smoothOrigin),
                s = wt(k, "xOrigin", (b ? k : u).xOrigin, u.xOrigin, s, E),
                s = wt(k, "yOrigin", (b ? k : u).yOrigin, u.yOrigin, s, E),
                (v !== k.xOffset || y !== k.yOffset) && (s = wt(k, "xOffset", b ? v : k.xOffset, k.xOffset, s, E),
                s = wt(k, "yOffset", b ? y : k.yOffset, k.yOffset, s, E)),
                D = "0px 0px"),
                (D || Mt && d && k.zOrigin) && (kt ? (f = !0,
                x = Ot,
                D = (D || J(t, x, r, !1, "50% 50%")) + "",
                s = new yt(T,x,0,0,s,-1,E),
                s.b = T[x],
                s.plugin = o,
                Mt ? (p = k.zOrigin,
                D = D.split(" "),
                k.zOrigin = (D.length > 2 && (0 === p || "0px" !== D[2]) ? parseFloat(D[2]) : p) || 0,
                s.xs0 = s.e = D[0] + " " + (D[1] || "50%") + " 0px",
                s = new yt(k,"zOrigin",0,0,s,-1,s.n),
                s.b = p,
                s.xs0 = s.e = k.zOrigin) : s.xs0 = s.e = D) : ot(D + "", k)),
                f && (n._transformType = k.svg && Ct || !d && 3 !== this._transformType ? 2 : 3),
                c && (l[i] = c),
                h && (l.scale = h),
                s
            },
            prefix: !0
        }),
        St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, a, o) {
                e = this.format(e);
                var l, c, h, u, p, d, f, m, _, g, v, y, w, x, b, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (_ = parseFloat(t.offsetWidth),
                g = parseFloat(t.offsetHeight),
                l = e.split(" "),
                c = 0; c < S.length; c++)
                    this.p.indexOf("border") && (S[c] = K(S[c])),
                    -1 !== (p = u = J(t, S[c], r, !1, "0px")).indexOf(" ") && (u = p.split(" "),
                    p = u[0],
                    u = u[1]),
                    d = h = l[c],
                    f = parseFloat(p),
                    y = p.substr((f + "").length),
                    (w = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10),
                    d = d.substr(2),
                    m *= parseFloat(d),
                    v = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d),
                    v = d.substr((m + "").length)),
                    "" === v && (v = n[i] || y),
                    v !== y && (x = tt(t, "borderLeft", f, y),
                    b = tt(t, "borderTop", f, y),
                    "%" === v ? (p = x / _ * 100 + "%",
                    u = b / g * 100 + "%") : "em" === v ? (T = tt(t, "borderLeft", 1, "em"),
                    p = x / T + "em",
                    u = b / T + "em") : (p = x + "px",
                    u = b + "px"),
                    w && (d = parseFloat(p) + m + v,
                    h = parseFloat(u) + m + v)),
                    a = xt(P, S[c], p + " " + u, d + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: _t("0px 0px 0px 0px", !1, !0)
        }),
        St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, s, a) {
                return xt(t.style, i, this.format(J(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
            },
            prefix: !0,
            formatter: _t("0px 0px", !1, !0)
        }),
        St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, s, a) {
                var o, l, c, h, u, p, d = "background-position", f = r || Z(t, null), _ = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = J(t, "backgroundImage").replace(D, "")) && "none" !== p) {
                    for (o = _.split(" "),
                    l = g.split(" "),
                    X.setAttribute("src", p),
                    c = 2; --c > -1; )
                        _ = o[c],
                        (h = -1 !== _.indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - X.width : t.offsetHeight - X.height,
                        o[c] = h ? parseFloat(_) / 100 * u + "px" : parseFloat(_) / u * 100 + "%");
                    _ = o.join(" ")
                }
                return this.parseComplex(t.style, _, g, s, a)
            },
            formatter: ot
        }),
        St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return t += "",
                ot(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }),
        St("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        St("transformStyle", {
            prefix: !0
        }),
        St("backfaceVisibility", {
            prefix: !0
        }),
        St("userSelect", {
            prefix: !0
        }),
        St("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        St("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, s, a) {
                var o, l, c;
                return 9 > m ? (l = t.currentStyle,
                c = 8 > m ? " " : ",",
                o = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
                e = this.format(e).split(",").join(c)) : (o = this.format(J(t, this.p, r, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, s, a)
            }
        }),
        St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        St("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
                return r
            }
        }),
        St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, s, a) {
                var o = J(t, "borderTopWidth", r, !1, "0px")
                  , l = this.format(e).split(" ")
                  , c = l[0].replace(b, "");
                return "px" !== c && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, c) + c),
                this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
            }
        }),
        St("borderWidth", {
            parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r, s) {
                var a = t.style
                  , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
                return new yt(a,o,0,0,r,-1,i,!1,0,a[o],e)
            }
        });
        var Qt = function(t) {
            var e, i = this.t, n = i.filter || J(this.data, "filter") || "", r = this.s + this.c * t | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !J(this.data, "filter")) : (i.filter = n.replace(P, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
            -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
        };
        St("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, s, a) {
                var o = parseFloat(J(t, "opacity", r, !1, "1"))
                  , l = t.style
                  , c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                c && 1 === o && "hidden" === J(t, "visibility", r) && 0 !== e && (o = 0),
                Y ? s = new yt(l,"opacity",o,e - o,s) : (s = new yt(l,"opacity",100 * o,100 * (e - o),s),
                s.xn1 = c ? 1 : 0,
                l.zoom = 1,
                s.type = 2,
                s.b = "alpha(opacity=" + s.s + ")",
                s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                s.data = t,
                s.plugin = a,
                s.setRatio = Qt),
                c && (s = new yt(l,"visibility",0,0,s,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                s.xs0 = "inherit",
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(i)),
                s
            }
        });
        var Yt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Wt = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Yt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        St("className", {
            parser: function(t, e, n, s, a, o, l) {
                var c, h, u, p, d, f = t.getAttribute("class") || "", m = t.style.cssText;
                if (a = s._classNamePT = new yt(t,n,0,0,a,2),
                a.setRatio = Wt,
                a.pr = -11,
                i = !0,
                a.b = f,
                h = it(t, r),
                u = t._gsClassPT) {
                    for (p = {},
                    d = u.data; d; )
                        p[d.p] = 1,
                        d = d._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", a.e),
                c = nt(t, h, it(t), l, p),
                t.setAttribute("class", f),
                a.data = c.firstMPT,
                t.style.cssText = m,
                a = a.xfirst = s.parse(t, c.difs, a, o)
            }
        });
        var Vt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s, a = this.t.style, o = l.transform.parse;
                if ("all" === this.e)
                    a.cssText = "",
                    r = !0;
                else
                    for (e = this.e.split(" ").join("").split(","),
                    n = e.length; --n > -1; )
                        i = e[n],
                        l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p),
                        Yt(a, i);
                r && (Yt(a, kt),
                (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (St("clearProps", {
            parser: function(t, e, n, r, s) {
                return s = new yt(t,n,0,0,s,2),
                s.setRatio = Vt,
                s.e = e,
                s.pr = -10,
                s.data = r._tween,
                i = !0,
                s
            }
        }),
        c = "bezier,throwProps,physicsProps,physics2D".split(","),
        bt = c.length; bt--; )
            Pt(c[bt]);
        (c = a.prototype)._firstPT = c._lastParsedTransform = c._transform = null,
        c._onInitTween = function(t, e, o, c) {
            if (!t.nodeType)
                return !1;
            this._target = _ = t,
            this._tween = o,
            this._vars = e,
            g = c,
            h = e.autoRound,
            i = !1,
            n = e.suffixMap || a.suffixMap,
            r = Z(t, ""),
            s = this._overwriteProps;
            var d, m, v, y, w, x, b, T, P, C = t.style;
            if (u && "" === C.zIndex && ("auto" === (d = J(t, "zIndex", r)) || "" === d) && this._addLazySet(C, "zIndex", 0),
            "string" == typeof e && (y = C.cssText,
            d = it(t, r),
            C.cssText = y + ";" + e,
            d = nt(t, d, it(t)).difs,
            !Y && S.test(e) && (d.opacity = parseFloat(RegExp.$1)),
            e = d,
            C.cssText = y),
            e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null),
            this._transformType) {
                for (P = 3 === this._transformType,
                kt ? p && (u = !0,
                "" === C.zIndex && ("auto" === (b = J(t, "zIndex", r)) || "" === b) && this._addLazySet(C, "zIndex", 0),
                f && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : C.zoom = 1,
                v = m; v && v._next; )
                    v = v._next;
                T = new yt(t,"transform",0,0,null,2),
                this._linkCSSP(T, null, v),
                T.setRatio = kt ? qt : Xt,
                T.data = this._transform || Ft(t, r, !0),
                T.tween = o,
                T.pr = -1,
                s.pop()
            }
            if (i) {
                for (; m; ) {
                    for (x = m._next,
                    v = y; v && v.pr > m.pr; )
                        v = v._next;
                    (m._prev = v ? v._prev : w) ? m._prev._next = m : y = m,
                    (m._next = v) ? v._prev = m : w = m,
                    m = x
                }
                this._firstPT = y
            }
            return !0
        }
        ,
        c.parse = function(t, e, i, s) {
            var a, o, c, u, p, d, f, m, v, y, w = t.style;
            for (a in e) {
                if ("function" == typeof (d = e[a]) && (d = d(g, _)),
                o = l[a])
                    i = o.parse(t, d, a, this, i, s, e);
                else {
                    if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", Z(t).getPropertyValue(a) + "", d + "", a, !1, a);
                        continue
                    }
                    p = J(t, a, r) + "",
                    v = "string" == typeof d,
                    "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && C.test(d) ? (v || (d = dt(d),
                    d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"),
                    i = xt(w, a, p, d, !0, "transparent", i, 0, s)) : v && N.test(d) ? i = xt(w, a, p, d, !0, null, i, 0, s) : (c = parseFloat(p),
                    f = c || 0 === c ? p.substr((c + "").length) : "",
                    ("" === p || "auto" === p) && ("width" === a || "height" === a ? (c = at(t, a, r),
                    f = "px") : "left" === a || "top" === a ? (c = et(t, a, r),
                    f = "px") : (c = "opacity" !== a ? 0 : 1,
                    f = "")),
                    (y = v && "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10),
                    d = d.substr(2),
                    u *= parseFloat(d),
                    m = d.replace(b, "")) : (u = parseFloat(d),
                    m = v ? d.replace(b, "") : ""),
                    "" === m && (m = a in n ? n[a] : f),
                    d = u || 0 === u ? (y ? u + c : u) + m : e[a],
                    f !== m && ("" !== m || "lineHeight" === a) && (u || 0 === u) && c && (c = tt(t, a, c, f),
                    "%" === m ? (c /= tt(t, a, 100, "%") / 100,
                    !0 !== e.strictUnits && (p = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= tt(t, a, 1, m) : "px" !== m && (u = tt(t, a, u, m),
                    m = "px"),
                    y && (u || 0 === u) && (d = u + c + m)),
                    y && (u += c),
                    !c && 0 !== c || !u && 0 !== u ? void 0 !== w[a] && (d || d + "" != "NaN" && null != d) ? (i = new yt(w,a,u || c || 0,0,i,-1,a,!1,0,p,d),
                    i.xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : p) : V("invalid " + a + " tween value: " + e[a]) : (i = new yt(w,a,c,u - c,i,0,a,!1 !== h && ("px" === m || "zIndex" === a),0,p,d),
                    i.xs0 = m))
                }
                s && i && !i.plugin && (i.plugin = s)
            }
            return i
        }
        ,
        c.setRatio = function(t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l))
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; ) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (e = Math.round(r.s + r.c),
                            r.type) {
                                if (1 === r.type) {
                                    for (n = r.l,
                                    i = r.xs0 + e + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            } else
                                r.t[r.p] = e + r.xs0;
                        else
                            r.t[r.p] = r.e;
                    else
                        r.setRatio(t);
                    r = r._next
                }
        }
        ,
        c._enableTransforms = function(t) {
            this._transform = this._transform || Ft(this._target, r, !0),
            this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Gt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(t, e, i) {
            var n = this._firstPT = new yt(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Gt,
            n.data = this
        }
        ,
        c._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        c._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                e = e._next
        }
        ,
        c._kill = function(e) {
            var i, n, r, s = e;
            if (e.autoAlpha || e.alpha) {
                s = {};
                for (n in e)
                    s[n] = e[n];
                s.opacity = 1,
                s.autoAlpha && (s.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            i = this._firstPT; i; )
                i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e),
                n = i.plugin),
                i = i._next;
            return t.prototype._kill.call(this, s)
        }
        ;
        var $t = function(t, e, i) {
            var n, r, s, a;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    $t(t[r], e, i);
            else
                for (n = t.childNodes,
                r = n.length; --r > -1; )
                    s = n[r],
                    a = s.type,
                    s.style && (e.push(it(s)),
                    i && i.push(s)),
                    1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || $t(s, e, i)
        };
        return a.cascadeTo = function(t, i, n) {
            var r, s, a, o, l = e.to(t, i, n), c = [l], h = [], u = [], p = [], d = e._internals.reservedProps;
            for (t = l._targets || l.target,
            $t(t, h, p),
            l.render(i, !0, !0),
            $t(t, u),
            l.render(0, !0, !0),
            l._enabled(!0),
            r = p.length; --r > -1; )
                if ((s = nt(p[r], h[r], u[r])).firstMPT) {
                    s = s.difs;
                    for (a in n)
                        d[a] && (s[a] = n[a]);
                    o = {};
                    for (a in s)
                        o[a] = h[r][a];
                    c.push(e.fromTo(p[r], i, o, s))
                }
            return c
        }
        ,
        t.activate([a]),
        a
    }, !0),
    function() {
        var t = function(t) {
            for (; t; )
                t.f || t.blob || (t.m = Math.round),
                t = t._next
        }
          , e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        }).prototype;
        e._onInitAllProps = function() {
            for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = s.length, o = {}, l = r._propLookup.roundProps; --a > -1; )
                o[s[a]] = Math.round;
            for (a = s.length; --a > -1; )
                for (e = s[a],
                i = r._firstPT; i; )
                    n = i._next,
                    i.pg ? i.t._mod(o) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c),
                    n && (n._prev = i._prev),
                    i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n),
                    i._next = i._prev = null,
                    r._propLookup[e] = l)),
                    i = n;
            return !1
        }
        ,
        e._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, i, n) {
            var r, s;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (r in e)
                "function" == typeof (s = e[r]) && (s = s(n, t)),
                this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r),
                this._overwriteProps.push(r);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var r, s, a, o, l, c, h = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (r in e)
                "useRadians" !== r && ("function" == typeof (o = e[r]) && (o = o(n, t)),
                c = (o + "").split("_"),
                s = c[0],
                a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0,
                l = o - a,
                c.length && (-1 !== (s = c.join("_")).indexOf("short") && (l %= h) != l % (h / 2) && (l = 0 > l ? l + h : l - h),
                -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)),
                (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, a, a + l, r),
                this._overwriteProps.push(r)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, l = s._class, c = function(e, i) {
            var n = l("easing." + e, function() {}, !0)
              , r = n.prototype = new t;
            return r.constructor = n,
            r.getRatio = i,
            n
        }, h = t.register || function() {}
        , u = function(t, e, i, n, r) {
            var s = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(s, t),
            s
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, d = function(e, i) {
            var n = l("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = n.prototype = new t;
            return r.constructor = n,
            r.getRatio = i,
            r.config = function(t) {
                return new n(t)
            }
            ,
            n
        }, f = u("Back", d("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), d("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), d("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), _ = m.prototype = new t;
        return _.constructor = m,
        _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        _.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = l("easing.SteppedEase", function(t, e) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + (e ? 0 : 1),
            this._p3 = e ? 1 : 0
        }, !0),
        _ = e.prototype = new t,
        _.constructor = e,
        _.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            ((this._p2 * t | 0) + this._p3) * this._p1
        }
        ,
        _.config = e.config = function(t, i) {
            return new e(t,i)
        }
        ,
        i = l("easing.RoughEase", function(e) {
            for (var i, n, r, s, a, o, l = (e = e || {}).taper || "none", c = [], h = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1; )
                i = f ? Math.random() : 1 / u * d,
                n = _ ? _.getRatio(i) : i,
                "none" === l ? r = g : "out" === l ? (s = 1 - i,
                r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i,
                r = s * s * .5 * g) : (s = 2 * (1 - i),
                r = s * s * .5 * g),
                f ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r,
                m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                c[h++] = {
                    x: i,
                    y: n
                };
            for (c.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new p(1,1,null),
            d = u; --d > -1; )
                a = c[d],
                o = new p(a.x,a.y,o);
            this._prev = new p(0,0,0 !== o.t ? o : o.next)
        }, !0),
        _ = i.prototype = new t,
        _.constructor = i,
        _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        _.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", c("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), c("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), c("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", c("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), c("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), c("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || n) / (1 > t ? t : 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            }, !0)
              , s = r.prototype = new t;
            return s.constructor = r,
            s.getRatio = i,
            s.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), n("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        u("Expo", c("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), c("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), c("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", c("SineOut", function(t) {
            return Math.sin(t * o)
        }), c("SineIn", function(t) {
            return 1 - Math.cos(t * o)
        }), c("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        h(r.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        f
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = {}
      , n = t.document
      , r = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!r.TweenLite) {
        var s, a, o, l, c, h = function(t) {
            var e, i = t.split("."), n = r;
            for (e = 0; e < i.length; e++)
                n[i[e]] = n = n[i[e]] || {};
            return n
        }, u = h("com.greensock"), p = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, d = function() {}, f = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), m = {}, _ = function(n, s, a, o) {
            this.sc = m[n] ? m[n].sc : [],
            m[n] = this,
            this.gsClass = null,
            this.func = a;
            var l = [];
            this.check = function(c) {
                for (var u, p, d, f, g = s.length, v = g; --g > -1; )
                    (u = m[s[g]] || new _(s[g],[])).gsClass ? (l[g] = u.gsClass,
                    v--) : c && u.sc.push(this);
                if (0 === v && a) {
                    if (p = ("com.greensock." + n).split("."),
                    d = p.pop(),
                    f = h(p.join("."))[d] = this.gsClass = a.apply(a, l),
                    o)
                        if (r[d] = i[d] = f,
                        "undefined" != typeof module && module.exports)
                            if (n === e) {
                                module.exports = i[e] = f;
                                for (g in i)
                                    f[g] = i[g]
                            } else
                                i[e] && (i[e][d] = f);
                        else
                            "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return f
                            });
                    for (g = 0; g < this.sc.length; g++)
                        this.sc[g].check()
                }
            }
            ,
            this.check(!0)
        }, g = t._gsDefine = function(t, e, i, n) {
            return new _(t,e,i,n)
        }
        , v = u._class = function(t, e, i) {
            return e = e || function() {}
            ,
            g(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        g.globals = r;
        var y = [0, 0, 1, 1]
          , w = v("easing.Ease", function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? y.concat(e) : y
        }, !0)
          , x = w.map = {}
          , b = w.register = function(t, e, i, n) {
            for (var r, s, a, o, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
                for (s = l[c],
                r = n ? v("easing." + s, null, !0) : u.easing[s] || {},
                a = h.length; --a > -1; )
                    o = h[a],
                    x[s + "." + o] = x[o + s] = r[o] = t.getRatio ? t : t[o] || new t
        }
        ;
        for ((o = w.prototype)._calcEnd = !1,
        o.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }
        ,
        a = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1; )
            o = s[a] + ",Power" + a,
            b(new w(null,null,1,a), o, "easeOut", !0),
            b(new w(null,null,2,a), o, "easeIn" + (0 === a ? ",easeNone" : "")),
            b(new w(null,null,3,a), o, "easeInOut");
        x.linear = u.easing.Linear.easeIn,
        x.swing = u.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        (o = T.prototype).addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, a, o = this._listeners[t], h = 0;
            for (this !== l || c || l.wake(),
            null == o && (this._listeners[t] = o = []),
            a = o.length; --a > -1; )
                (s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === h && s.pr < r && (h = a + 1);
            o.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            })
        }
        ,
        o.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        o.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for ((e = r.length) > 1 && (r = r.slice(0)),
                i = this._eventTarget; --e > -1; )
                    (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var S = t.requestAnimationFrame
          , P = t.cancelAnimationFrame
          , C = Date.now || function() {
            return (new Date).getTime()
        }
          , E = C();
        for (a = (s = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !S; )
            S = t[s[a] + "RequestAnimationFrame"],
            P = t[s[a] + "CancelAnimationFrame"] || t[s[a] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, r, s, a, o, h = this, u = C(), p = !(!1 === e || !S) && "auto", f = 500, m = 33, _ = function(t) {
                var e, n, l = C() - E;
                l > f && (u += l - m),
                E += l,
                h.time = (E - u) / 1e3,
                e = h.time - o,
                (!i || e > 0 || !0 === t) && (h.frame++,
                o += e + (e >= a ? .004 : a - e),
                n = !0),
                !0 !== t && (s = r(_)),
                n && h.dispatchEvent("tick")
            };
            T.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                _(!0)
            }
            ,
            h.lagSmoothing = function(t, e) {
                return arguments.length ? (f = t || 1e10,
                void (m = Math.min(e, f, 0))) : 1e10 > f
            }
            ,
            h.sleep = function() {
                null != s && (p && P ? P(s) : clearTimeout(s),
                r = d,
                s = null,
                h === l && (c = !1))
            }
            ,
            h.wake = function(t) {
                null !== s ? h.sleep() : t ? u += -E + (E = C()) : h.frame > 10 && (E = C() - f + 5),
                r = 0 === i ? d : p && S ? S : function(t) {
                    return setTimeout(t, 1e3 * (o - h.time) + 1 | 0)
                }
                ,
                h === l && (c = !0),
                _(2)
            }
            ,
            h.fps = function(t) {
                return arguments.length ? (i = t,
                a = 1 / (i || 60),
                o = this.time + a,
                void h.wake()) : i
            }
            ,
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(),
                p = t,
                void h.fps(i)) : p
            }
            ,
            h.fps(t),
            setTimeout(function() {
                "auto" === p && h.frame < 5 && "hidden" !== n.visibilityState && h.useRAF(!1)
            }, 1500)
        }),
        (o = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
        var k = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            W) {
                c || l.wake();
                var i = this.vars.useFrames ? Y : W;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        l = k.ticker = new u.Ticker,
        (o = k.prototype)._dirty = o._gc = o._initted = o._paused = !1,
        o._totalTime = o._time = 0,
        o._rawPrevTime = -1,
        o._next = o._last = o._onUpdate = o._timeline = o.timeline = null,
        o._paused = !1;
        var D = function() {
            c && C() - E > 2e3 && ("hidden" !== n.visibilityState || !l.lagSmoothing()) && l.wake();
            var t = setTimeout(D, 2e3);
            t.unref && t.unref()
        };
        D(),
        o.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        o.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        o.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        o.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        o.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        o.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        o.render = function(t, e, i) {}
        ,
        o.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        o.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }
        ,
        o._enabled = function(t, e) {
            return c || l.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        o._kill = function(t, e) {
            return this._enabled(!1, !1)
        }
        ,
        o.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        o._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        o._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        o._callback = function(t) {
            var e = this.vars
              , i = e[t]
              , n = e[t + "Params"]
              , r = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
            case 0:
                i.call(r);
                break;
            case 1:
                i.call(r, n[0]);
                break;
            case 2:
                i.call(r, n[0], n[1]);
                break;
            default:
                i.apply(r, n)
            }
        }
        ,
        o.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e,
                r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                r[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        o.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        o.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        o.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        o.totalTime = function(t, e, i) {
            if (c || l.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , r = this._timeline;
                    if (t > n && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                    r._dirty || this._uncache(!1),
                    r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                            r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (L.length && G(),
                this.render(t, e, !1),
                L.length && G())
            }
            return this
        }
        ,
        o.progress = o.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }
        ,
        o.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        o.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        o.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            var e, i;
            for (t = t || 1e-10,
            this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime(),
            this._startTime = i - (i - this._startTime) * this._timeScale / t),
            this._timeScale = t,
            i = this.timeline; i && i.timeline; )
                i._dirty = !0,
                i.totalDuration(),
                i = i.timeline;
            return this
        }
        ,
        o.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        o.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (c || t || l.wake(),
            e = n.rawTime(),
            i = e - this._pauseTime,
            !t && n.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
            this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var O = v("core.SimpleTimeline", function(t) {
            k.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (o = O.prototype = new k).constructor = O,
        o.kill()._gc = !1,
        o._first = o._last = o._recent = null,
        o._sortChildren = !1,
        o.add = o.insert = function(t, e, i, n) {
            var r, s;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            r = this._last,
            this._sortChildren)
                for (s = t._startTime; r && r._startTime > s; )
                    r = r._prev;
            return r ? (t._next = r._next,
            r._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = r,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        o._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        o.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                n = r._next,
                (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                r = n
        }
        ,
        o.rawTime = function() {
            return c || l.wake(),
            this._totalTime
        }
        ;
        var M = v("TweenLite", function(e, i, n) {
            if (k.call(this, i, n),
            this.render = M.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : M.selector(e) || e;
            var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? Q[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l],
            (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                for (this._targets = a = p(e),
                this._propLookup = [],
                this._siblings = [],
                r = 0; r < a.length; r++)
                    (s = a[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1),
                    this._targets = a = a.concat(p(s))) : (this._siblings[r] = $(s, this, !1),
                    1 === l && this._siblings[r].length > 1 && Z(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = a[r--] = M.selector(s)) && a.splice(r + 1, 1) : a.splice(r--, 1);
            else
                this._propLookup = {},
                this._siblings = $(e, this, !1),
                1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , A = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        };
        (o = M.prototype = new k).constructor = M,
        o.kill()._gc = !1,
        o.ratio = 0,
        o._firstPT = o._targets = o._overwrittenProps = o._startAt = null,
        o._notifyPluginsOfEnabled = o._lazy = !1,
        M.version = "1.20.3",
        M.defaultEase = o._ease = new w(null,null,1,1),
        M.defaultOverwrite = "auto",
        M.ticker = l,
        M.autoSleep = 120,
        M.lagSmoothing = function(t, e) {
            l.lagSmoothing(t, e)
        }
        ,
        M.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i,
            i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var L = []
          , R = {}
          , N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , j = /[\+-]=-?[\.\d]/
          , z = function(t) {
            for (var e, i = this._firstPT; i; )
                e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
          , I = function(t, e, i, n) {
            var r, s, a, o, l, c, h, u = [], p = 0, d = "", f = 0;
            for (u.start = t,
            u.end = e,
            t = u[0] = t + "",
            e = u[1] = e + "",
            i && (i(u),
            t = u[0],
            e = u[1]),
            u.length = 0,
            r = t.match(N) || [],
            s = e.match(N) || [],
            n && (n._next = null,
            n.blob = 1,
            u._firstPT = u._applyPT = n),
            l = s.length,
            o = 0; l > o; o++)
                h = s[o],
                c = e.substr(p, e.indexOf(h, p) - p),
                d += c || !o ? c : ",",
                p += c.length,
                f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1),
                h === r[o] || r.length <= o ? d += h : (d && (u.push(d),
                d = ""),
                a = parseFloat(r[o]),
                u.push(a),
                u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - a) || 0,
                    f: 0,
                    m: f && 4 > f ? Math.round : 0
                }),
                p += h.length;
            return (d += e.substr(p)) && u.push(d),
            u.setRatio = z,
            j.test(e) && (u.end = null),
            u
        }
          , B = function(t, e, i, n, r, s, a, o, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var c, h = typeof t[e], u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e], d = "string" == typeof n && "=" === n.charAt(1), f = {
                t: t,
                p: e,
                s: p,
                f: "function" === h,
                pg: 0,
                n: r || e,
                m: s ? "function" == typeof s ? s : Math.round : 0,
                pr: 0,
                c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
            };
            return ("number" != typeof p || "number" != typeof n && !d) && (a || isNaN(p) || !d && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (f.fp = a,
            c = I(p, d ? parseFloat(f.s) + f.c : n, o || M.defaultStringFilter, f),
            f = {
                t: c,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0,
                m: 0
            }) : (f.s = parseFloat(p),
            d || (f.c = parseFloat(n) - f.s || 0))),
            f.c ? ((f._next = this._firstPT) && (f._next._prev = f),
            this._firstPT = f,
            f) : void 0
        }
          , H = M._internals = {
            isArray: f,
            isSelector: A,
            lazyTweens: L,
            blobDif: I
        }
          , U = M._plugins = {}
          , F = H.tweenLookup = {}
          , X = 0
          , q = H.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
        }
          , Q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , Y = k._rootFramesTimeline = new O
          , W = k._rootTimeline = new O
          , V = 30
          , G = H.lazyRender = function() {
            var t, e = L.length;
            for (R = {}; --e > -1; )
                (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            L.length = 0
        }
        ;
        W._startTime = l.time,
        Y._startTime = l.frame,
        W._active = Y._active = !0,
        setTimeout(G, 1),
        k._updateRoot = M.render = function() {
            var t, e, i;
            if (L.length && G(),
            W.render((l.time - W._startTime) * W._timeScale, !1, !1),
            Y.render((l.frame - Y._startTime) * Y._timeScale, !1, !1),
            L.length && G(),
            l.frame >= V) {
                V = l.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in F) {
                    for (t = (e = F[i].tweens).length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if ((!(i = W._first) || i._paused) && M.autoSleep && !Y._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || l.sleep()
                }
            }
        }
        ,
        l.addEventListener("tick", k._updateRoot);
        var $ = function(t, e, i) {
            var n, r, s = t._gsTweenID;
            if (F[s || (t._gsTweenID = s = "t" + X++)] || (F[s] = {
                target: t,
                tweens: []
            }),
            e && (n = F[s].tweens,
            n[r = n.length] = e,
            i))
                for (; --r > -1; )
                    n[r] === e && n.splice(r, 1);
            return F[s].tweens
        }
          , K = function(t, e, i, n) {
            var r, s, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, n)),
            (a = M.onOverwrite) && (s = a(t, e, i, n)),
            !1 !== r && !1 !== s
        }
          , Z = function(t, e, i, n, r) {
            var s, a, o, l;
            if (1 === n || n >= 4) {
                for (l = r.length,
                s = 0; l > s; s++)
                    if ((o = r[s]) !== e)
                        o._gc || o._kill(null, t, e) && (a = !0);
                    else if (5 === n)
                        break;
                return a
            }
            var c, h = e._startTime + 1e-10, u = [], p = 0, d = 0 === e._duration;
            for (s = r.length; --s > -1; )
                (o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (c = c || J(e, 0, d),
                0 === J(o, c, d) && (u[p++] = o)) : o._startTime <= h && o._startTime + o.totalDuration() / o._timeScale > h && ((d || !o._initted) && h - o._startTime <= 2e-10 || (u[p++] = o)));
            for (s = p; --s > -1; )
                if (o = u[s],
                2 === n && o._kill(i, t, e) && (a = !0),
                2 !== n || !o._firstPT && o._initted) {
                    if (2 !== n && !K(o, e))
                        continue;
                    o._enabled(!1, !1) && (a = !0)
                }
            return a
        }
          , J = function(t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                if (s += n._startTime,
                r *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return (s /= r) > e ? s - e : i && s === e || !t._initted && 2e-10 > s - e ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
        };
        o._init = function() {
            var t, e, i, n, r, s, a = this.vars, o = this._overwrittenProps, l = this._duration, c = !!a.immediateRender, h = a.ease;
            if (a.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                r = {};
                for (n in a.startAt)
                    r[n] = a.startAt[n];
                if (r.data = "isStart",
                r.overwrite = !1,
                r.immediateRender = !0,
                r.lazy = c && !1 !== a.lazy,
                r.startAt = r.delay = null,
                r.onUpdate = a.onUpdate,
                r.onUpdateParams = a.onUpdateParams,
                r.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
                this._startAt = M.to(this.target, 0, r),
                c)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== l)
                        return
            } else if (a.runBackwards && 0 !== l)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    0 !== this._time && (c = !1),
                    i = {};
                    for (n in a)
                        q[n] && "autoCSS" !== n || (i[n] = a[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = c && !1 !== a.lazy,
                    i.immediateRender = c,
                    this._startAt = M.to(this.target, 0, i),
                    c) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h,a.easeParams) : x[h] || M.defaultEase : M.defaultEase,
            a.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, a.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (s = this._targets.length,
                t = 0; s > t; t++)
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            a.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = a.onUpdate,
            this._initted = !0
        }
        ,
        o._initProps = function(e, i, n, r, s) {
            var a, o, l, c, h, u;
            if (null == e)
                return !1;
            R[e._gsTweenID] && G(),
            this.vars.css || e.style && e !== t && e.nodeType && U.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, e);
            for (a in this.vars)
                if (u = this.vars[a],
                q[a])
                    u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                else if (U[a] && (c = new U[a])._onInitTween(e, this.vars[a], this, s)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: c,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: c._priority,
                        m: 0
                    },
                    o = c._overwriteProps.length; --o > -1; )
                        i[c._overwriteProps[o]] = this._firstPT;
                    (c._priority || c._onInitAllProps) && (l = !0),
                    (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    h._next && (h._next._prev = h)
                } else
                    i[a] = B.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, s);
            return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && Z(e, this, i, this._overwrite, n) ? (this._kill(i, e),
            this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0),
            l)
        }
        ,
        o.render = function(t, e, i) {
            var n, r, s, a, o = this._time, l = this._duration, c = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                r = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 > c || 0 >= t && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0,
                c > 1e-10 && (r = "onReverseComplete")),
                this._rawPrevTime = a = !e || t || c === t ? t : 1e-10);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && c > 0) && (r = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = a = !e || t || c === t ? t : 1e-10)),
                (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var h = t / l
                  , u = this._easeType
                  , p = this._easePower;
                (1 === u || 3 === u && h >= .5) && (h = 1 - h),
                3 === u && (h *= 2),
                1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h),
                this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o,
                        this._rawPrevTime = c,
                        L.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                    s = s._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i),
                e || (this._time !== o || n || i) && this._callback("onUpdate")),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this._callback(r),
                0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0))
            }
        }
        ,
        o._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var n, r, s, a, o, l, c, h, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || A(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            o = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    o = this._propLookup,
                    r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (c = t || o,
                    h = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill),
                    i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (s in c)
                            o[s] && (u || (u = []),
                            u.push(s));
                        if ((u || !t) && !K(this, i, e, u))
                            return !1
                    }
                    for (s in c)
                        (a = o[s]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                        l = !0),
                        a.pg && a.t._kill(c) && (l = !0),
                        a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        a._next = a._prev = null),
                        delete o[s]),
                        h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        o.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            k.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -1e-10,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        o._enabled = function(t, e) {
            if (c || l.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = $(n[i], this, !0);
                else
                    this._siblings = $(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        M.to = function(t, e, i) {
            return new M(t,e,i)
        }
        ,
        M.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new M(t,e,i)
        }
        ,
        M.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new M(t,e,n)
        }
        ,
        M.delayedCall = function(t, e, i, n, r) {
            return new M(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        M.set = function(t, e) {
            return new M(t,0,e)
        }
        ,
        M.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : M.selector(t) || t;
            var i, n, r, s;
            if ((f(t) || A(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; --i > -1; )
                    n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (s = n[i],
                    r = i; --r > -1; )
                        s === n[r] && n.splice(i, 1)
            } else if (t._gsTweenID)
                for (n = $(t).concat(),
                i = n.length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        }
        ,
        M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = M.getTweensOf(t, e), r = n.length; --r > -1; )
                n[r]._kill(i, t)
        }
        ;
        var tt = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = tt.prototype
        }, !0);
        if (o = tt.prototype,
        tt.version = "1.19.0",
        tt.API = 2,
        o._firstPT = null,
        o._addTween = B,
        o.setRatio = z,
        o._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        o._mod = o._roundProps = function(t) {
            for (var e, i = this._firstPT; i; )
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                i = i._next
        }
        ,
        M._onPluginEvent = function(t, e) {
            var i, n, r, s, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o; ) {
                    for (a = o._next,
                    n = r; n && n.pr > o.pr; )
                        n = n._next;
                    (o._prev = n ? n._prev : s) ? o._prev._next = o : r = o,
                    (o._next = n) ? n._prev = o : s = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        tt.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === tt.API && (U[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        g.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                tt.call(this, i, n),
                this._overwriteProps = r || []
            }, !0 === t.global), o = a.prototype = new tt(i);
            o.constructor = a,
            a.API = t.API;
            for (e in s)
                "function" == typeof t[e] && (o[s[e]] = t[e]);
            return a.version = t.version,
            tt.activate([a]),
            a
        }
        ,
        s = t._gsQueue) {
            for (a = 0; a < s.length; a++)
                s[a]();
            for (o in m)
                m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
        }
        c = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = (_gsScope.document || {}).documentElement
      , e = _gsScope
      , i = function(i, n) {
        var r = "x" === n ? "Width" : "Height"
          , s = "scroll" + r
          , a = "client" + r
          , o = document.body;
        return i === e || i === t || i === o ? Math.max(t[s], o[s]) - (e["inner" + r] || t[a] || o[a]) : i[s] - i["offset" + r]
    }
      , n = function(i, n) {
        var r = "scroll" + ("x" === n ? "Left" : "Top");
        return i === e && (null != i.pageXOffset ? r = "page" + n.toUpperCase() + "Offset" : i = null != t[r] ? t : document.body),
        function() {
            return i[r]
        }
    }
      , r = function(i, r) {
        var s = function(t) {
            return "string" == typeof t && (t = TweenLite.selector(t)),
            t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]),
            t === e || t.nodeType && t.style ? t : null
        }(i).getBoundingClientRect()
          , a = !r || r === e || r === document.body
          , o = (a ? t : r).getBoundingClientRect()
          , l = {
            x: s.left - o.left,
            y: s.top - o.top
        };
        return !a && r && (l.x += n(r, "x")(),
        l.y += n(r, "y")()),
        l
    }
      , s = function(t, e, n) {
        var s = typeof t;
        return isNaN(t) ? "number" === s || "string" === s && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), r(t, e)[n]) : parseFloat(t)
    }
      , a = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        global: !0,
        version: "1.9.0",
        init: function(t, i, r) {
            return this._wdw = t === e,
            this._target = t,
            this._tween = r,
            "object" != typeof i ? "string" == typeof (i = {
                y: i
            }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = {
                y: i,
                x: i
            }),
            this.vars = i,
            this._autoKill = !1 !== i.autoKill,
            this.getX = n(t, "x"),
            this.getY = n(t, "y"),
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != i.x ? (this._addTween(this, "x", this.x, s(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0),
            this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != i.y ? (this._addTween(this, "y", this.y, s(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0),
            this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            var n = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , r = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , s = r - this.yPrev
              , o = n - this.xPrev
              , l = a.autoKillThreshold;
            this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill && (!this.skipX && (o > l || -l > o) && n < i(this._target, "x") && (this.skipX = !0),
            !this.skipY && (s > l || -l > s) && r < i(this._target, "y") && (this.skipY = !0),
            this.skipX && this.skipY && (this._tween.kill(),
            this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , o = a.prototype;
    a.max = i,
    a.getOffset = r,
    a.buildGetter = n,
    a.autoKillThreshold = 7,
    o._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"),
    module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}(),
function() {
    "use strict";
    function t(t) {
        t.fn.swiper = function(e) {
            var n;
            return t(this).each(function() {
                var t = new i(this,e);
                n || (n = t)
            }),
            n
        }
    }
    var e, i = function(t, n) {
        function r(t) {
            return Math.floor(t)
        }
        function s() {
            y.autoplayTimeoutId = setTimeout(function() {
                y.params.loop ? (y.fixLoop(),
                y._slideNext(),
                y.emit("onAutoplay", y)) : y.isEnd ? n.autoplayStopOnLast ? y.stopAutoplay() : (y._slideTo(0),
                y.emit("onAutoplay", y)) : (y._slideNext(),
                y.emit("onAutoplay", y))
            }, y.params.autoplay)
        }
        function a(t, i) {
            var n = e(t.target);
            if (!n.is(i))
                if ("string" == typeof i)
                    n = n.parents(i);
                else if (i.nodeType) {
                    var r;
                    return n.parents().each(function(t, e) {
                        e === i && (r = i)
                    }),
                    r ? i : void 0
                }
            if (0 !== n.length)
                return n[0]
        }
        function o(t, e) {
            e = e || {};
            var i = new (window.MutationObserver || window.WebkitMutationObserver)(function(t) {
                t.forEach(function(t) {
                    y.onResize(!0),
                    y.emit("onObserverUpdate", y, t)
                })
            }
            );
            i.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData
            }),
            y.observers.push(i)
        }
        function l(t) {
            t.originalEvent && (t = t.originalEvent);
            var e = t.keyCode || t.charCode;
            if (!y.params.allowSwipeToNext && (y.isHorizontal() && 39 === e || !y.isHorizontal() && 40 === e))
                return !1;
            if (!y.params.allowSwipeToPrev && (y.isHorizontal() && 37 === e || !y.isHorizontal() && 38 === e))
                return !1;
            if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === e || 39 === e || 38 === e || 40 === e) {
                    var i = !1;
                    if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length)
                        return;
                    var n = window.pageXOffset
                      , r = window.pageYOffset
                      , s = window.innerWidth
                      , a = window.innerHeight
                      , o = y.container.offset();
                    y.rtl && (o.left = o.left - y.container[0].scrollLeft);
                    for (var l = [[o.left, o.top], [o.left + y.width, o.top], [o.left, o.top + y.height], [o.left + y.width, o.top + y.height]], c = 0; c < l.length; c++) {
                        var h = l[c];
                        h[0] >= n && h[0] <= n + s && h[1] >= r && h[1] <= r + a && (i = !0)
                    }
                    if (!i)
                        return
                }
                y.isHorizontal() ? ((37 === e || 39 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1),
                (39 === e && !y.rtl || 37 === e && y.rtl) && y.slideNext(),
                (37 === e && !y.rtl || 39 === e && y.rtl) && y.slidePrev()) : ((38 === e || 40 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1),
                40 === e && y.slideNext(),
                38 === e && y.slidePrev())
            }
        }
        function c(t) {
            t.originalEvent && (t = t.originalEvent);
            var e = y.mousewheel.event
              , i = 0
              , n = y.rtl ? -1 : 1;
            if ("mousewheel" === e)
                if (y.params.mousewheelForceToAxis)
                    if (y.isHorizontal()) {
                        if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY)))
                            return;
                        i = t.wheelDeltaX * n
                    } else {
                        if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX)))
                            return;
                        i = t.wheelDeltaY
                    }
                else
                    i = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? -t.wheelDeltaX * n : -t.wheelDeltaY;
            else if ("DOMMouseScroll" === e)
                i = -t.detail;
            else if ("wheel" === e)
                if (y.params.mousewheelForceToAxis)
                    if (y.isHorizontal()) {
                        if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY)))
                            return;
                        i = -t.deltaX * n
                    } else {
                        if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX)))
                            return;
                        i = -t.deltaY
                    }
                else
                    i = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX * n : -t.deltaY;
            if (0 !== i) {
                if (y.params.mousewheelInvert && (i = -i),
                y.params.freeMode) {
                    var r = y.getWrapperTranslate() + i * y.params.mousewheelSensitivity
                      , s = y.isBeginning
                      , a = y.isEnd;
                    if (r >= y.minTranslate() && (r = y.minTranslate()),
                    r <= y.maxTranslate() && (r = y.maxTranslate()),
                    y.setWrapperTransition(0),
                    y.setWrapperTranslate(r),
                    y.updateProgress(),
                    y.updateActiveIndex(),
                    (!s && y.isBeginning || !a && y.isEnd) && y.updateClasses(),
                    y.params.freeModeSticky ? (clearTimeout(y.mousewheel.timeout),
                    y.mousewheel.timeout = setTimeout(function() {
                        y.slideReset()
                    }, 300)) : y.params.lazyLoading && y.lazy && y.lazy.load(),
                    0 === r || r === y.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - y.mousewheel.lastScrollTime > 60)
                        if (0 > i)
                            if (y.isEnd && !y.params.loop || y.animating) {
                                if (y.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                y.slideNext();
                        else if (y.isBeginning && !y.params.loop || y.animating) {
                            if (y.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            y.slidePrev();
                    y.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return y.params.autoplay && y.stopAutoplay(),
                t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
            }
        }
        function h(t, i) {
            t = e(t);
            var n, r, s, a = y.rtl ? -1 : 1;
            n = t.attr("data-swiper-parallax") || "0",
            r = t.attr("data-swiper-parallax-x"),
            s = t.attr("data-swiper-parallax-y"),
            r || s ? (r = r || "0",
            s = s || "0") : y.isHorizontal() ? (r = n,
            s = "0") : (s = n,
            r = "0"),
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * a + "%" : r * i * a + "px",
            s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i + "%" : s * i + "px",
            t.transform("translate3d(" + r + ", " + s + ",0px)")
        }
        function u(t) {
            return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t),
            t
        }
        if (!(this instanceof i))
            return new i(t,n);
        var p = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , d = n && n.virtualTranslate;
        n = n || {};
        var f = {};
        for (var m in n)
            if ("object" != typeof n[m] || null === n[m] || n[m].nodeType || n[m] === window || n[m] === document || "undefined" != typeof Dom7 && n[m]instanceof Dom7 || "undefined" != typeof jQuery && n[m]instanceof jQuery)
                f[m] = n[m];
            else {
                f[m] = {};
                for (var _ in n[m])
                    f[m][_] = n[m][_]
            }
        for (var g in p)
            if (void 0 === n[g])
                n[g] = p[g];
            else if ("object" == typeof n[g])
                for (var v in p[g])
                    void 0 === n[g][v] && (n[g][v] = p[g][v]);
        var y = this;
        if (y.params = n,
        y.originalParams = f,
        y.classNames = [],
        void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7),
        (void 0 !== e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (y.$ = e,
        y.currentBreakpoint = void 0,
        y.getActiveBreakpoint = function() {
            if (!y.params.breakpoints)
                return !1;
            var t, e = !1, i = [];
            for (t in y.params.breakpoints)
                y.params.breakpoints.hasOwnProperty(t) && i.push(t);
            i.sort(function(t, e) {
                return parseInt(t, 10) > parseInt(e, 10)
            });
            for (var n = 0; n < i.length; n++)
                (t = i[n]) >= window.innerWidth && !e && (e = t);
            return e || "max"
        }
        ,
        y.setBreakpoint = function() {
            var t = y.getActiveBreakpoint();
            if (t && y.currentBreakpoint !== t) {
                var e = t in y.params.breakpoints ? y.params.breakpoints[t] : y.originalParams
                  , i = y.params.loop && e.slidesPerView !== y.params.slidesPerView;
                for (var n in e)
                    y.params[n] = e[n];
                y.currentBreakpoint = t,
                i && y.destroyLoop && y.reLoop(!0)
            }
        }
        ,
        y.params.breakpoints && y.setBreakpoint(),
        y.container = e(t),
        0 !== y.container.length)) {
            if (y.container.length > 1) {
                var w = [];
                return y.container.each(function() {
                    w.push(new i(this,n))
                }),
                w
            }
            y.container[0].swiper = y,
            y.container.data("swiper", y),
            y.classNames.push("swiper-container-" + y.params.direction),
            y.params.freeMode && y.classNames.push("swiper-container-free-mode"),
            y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"),
            y.params.slidesPerColumn = 1),
            y.params.autoHeight && y.classNames.push("swiper-container-autoheight"),
            (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0),
            ["cube", "coverflow", "flip"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0,
            y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"),
            "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect),
            "cube" === y.params.effect && (y.params.resistanceRatio = 0,
            y.params.slidesPerView = 1,
            y.params.slidesPerColumn = 1,
            y.params.slidesPerGroup = 1,
            y.params.centeredSlides = !1,
            y.params.spaceBetween = 0,
            y.params.virtualTranslate = !0,
            y.params.setWrapperSize = !1),
            ("fade" === y.params.effect || "flip" === y.params.effect) && (y.params.slidesPerView = 1,
            y.params.slidesPerColumn = 1,
            y.params.slidesPerGroup = 1,
            y.params.watchSlidesProgress = !0,
            y.params.spaceBetween = 0,
            y.params.setWrapperSize = !1,
            void 0 === d && (y.params.virtualTranslate = !0)),
            y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1),
            y.wrapper = y.container.children("." + y.params.wrapperClass),
            y.params.pagination && (y.paginationContainer = e(y.params.pagination),
            y.params.uniqueNavElements && "string" == typeof y.params.pagination && y.paginationContainer.length > 1 && 1 === y.container.find(y.params.pagination).length && (y.paginationContainer = y.container.find(y.params.pagination)),
            "bullets" === y.params.paginationType && y.params.paginationClickable ? y.paginationContainer.addClass("swiper-pagination-clickable") : y.params.paginationClickable = !1,
            y.paginationContainer.addClass("swiper-pagination-" + y.params.paginationType)),
            (y.params.nextButton || y.params.prevButton) && (y.params.nextButton && (y.nextButton = e(y.params.nextButton),
            y.params.uniqueNavElements && "string" == typeof y.params.nextButton && y.nextButton.length > 1 && 1 === y.container.find(y.params.nextButton).length && (y.nextButton = y.container.find(y.params.nextButton))),
            y.params.prevButton && (y.prevButton = e(y.params.prevButton),
            y.params.uniqueNavElements && "string" == typeof y.params.prevButton && y.prevButton.length > 1 && 1 === y.container.find(y.params.prevButton).length && (y.prevButton = y.container.find(y.params.prevButton)))),
            y.isHorizontal = function() {
                return "horizontal" === y.params.direction
            }
            ,
            y.rtl = y.isHorizontal() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")),
            y.rtl && y.classNames.push("swiper-container-rtl"),
            y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")),
            y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"),
            y.device.android && y.classNames.push("swiper-container-android"),
            y.container.addClass(y.classNames.join(" ")),
            y.translate = 0,
            y.progress = 0,
            y.velocity = 0,
            y.lockSwipeToNext = function() {
                y.params.allowSwipeToNext = !1
            }
            ,
            y.lockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !1
            }
            ,
            y.lockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1
            }
            ,
            y.unlockSwipeToNext = function() {
                y.params.allowSwipeToNext = !0
            }
            ,
            y.unlockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !0
            }
            ,
            y.unlockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0
            }
            ,
            y.params.grabCursor && (y.container[0].style.cursor = "move",
            y.container[0].style.cursor = "-webkit-grab",
            y.container[0].style.cursor = "-moz-grab",
            y.container[0].style.cursor = "grab"),
            y.imagesToLoad = [],
            y.imagesLoaded = 0,
            y.loadImage = function(t, e, i, n, r) {
                function s() {
                    r && r()
                }
                var a;
                t.complete && n ? s() : e ? (a = new window.Image,
                a.onload = s,
                a.onerror = s,
                i && (a.srcset = i),
                e && (a.src = e)) : s()
            }
            ,
            y.preloadImages = function() {
                function t() {
                    void 0 !== y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++,
                    y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(),
                    y.emit("onImagesReady", y)))
                }
                y.imagesToLoad = y.container.find("img");
                for (var e = 0; e < y.imagesToLoad.length; e++)
                    y.loadImage(y.imagesToLoad[e], y.imagesToLoad[e].currentSrc || y.imagesToLoad[e].getAttribute("src"), y.imagesToLoad[e].srcset || y.imagesToLoad[e].getAttribute("srcset"), !0, t)
            }
            ,
            y.autoplayTimeoutId = void 0,
            y.autoplaying = !1,
            y.autoplayPaused = !1,
            y.startAutoplay = function() {
                return void 0 === y.autoplayTimeoutId && (!!y.params.autoplay && (!y.autoplaying && (y.autoplaying = !0,
                y.emit("onAutoplayStart", y),
                void s())))
            }
            ,
            y.stopAutoplay = function(t) {
                y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId),
                y.autoplaying = !1,
                y.autoplayTimeoutId = void 0,
                y.emit("onAutoplayStop", y))
            }
            ,
            y.pauseAutoplay = function(t) {
                y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId),
                y.autoplayPaused = !0,
                0 === t ? (y.autoplayPaused = !1,
                s()) : y.wrapper.transitionEnd(function() {
                    y && (y.autoplayPaused = !1,
                    y.autoplaying ? s() : y.stopAutoplay())
                }))
            }
            ,
            y.minTranslate = function() {
                return -y.snapGrid[0]
            }
            ,
            y.maxTranslate = function() {
                return -y.snapGrid[y.snapGrid.length - 1]
            }
            ,
            y.updateAutoHeight = function() {
                var t = y.slides.eq(y.activeIndex)[0];
                if (void 0 !== t) {
                    var e = t.offsetHeight;
                    e && y.wrapper.css("height", e + "px")
                }
            }
            ,
            y.updateContainerSize = function() {
                var t, e;
                t = void 0 !== y.params.width ? y.params.width : y.container[0].clientWidth,
                e = void 0 !== y.params.height ? y.params.height : y.container[0].clientHeight,
                0 === t && y.isHorizontal() || 0 === e && !y.isHorizontal() || (t = t - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10),
                e = e - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10),
                y.width = t,
                y.height = e,
                y.size = y.isHorizontal() ? y.width : y.height)
            }
            ,
            y.updateSlidesSize = function() {
                y.slides = y.wrapper.children("." + y.params.slideClass),
                y.snapGrid = [],
                y.slidesGrid = [],
                y.slidesSizesGrid = [];
                var t, e = y.params.spaceBetween, i = -y.params.slidesOffsetBefore, n = 0, s = 0;
                if (void 0 !== y.size) {
                    "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * y.size),
                    y.virtualSize = -e,
                    y.rtl ? y.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : y.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var a;
                    y.params.slidesPerColumn > 1 && (a = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn,
                    "auto" !== y.params.slidesPerView && "row" === y.params.slidesPerColumnFill && (a = Math.max(a, y.params.slidesPerView * y.params.slidesPerColumn)));
                    var o, l = y.params.slidesPerColumn, c = a / l, h = c - (y.params.slidesPerColumn * c - y.slides.length);
                    for (t = 0; t < y.slides.length; t++) {
                        o = 0;
                        var u = y.slides.eq(t);
                        if (y.params.slidesPerColumn > 1) {
                            var p, d, f;
                            "column" === y.params.slidesPerColumnFill ? (d = Math.floor(t / l),
                            f = t - d * l,
                            (d > h || d === h && f === l - 1) && ++f >= l && (f = 0,
                            d++),
                            p = d + f * a / l,
                            u.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : (f = Math.floor(t / c),
                            d = t - f * c),
                            u.css({
                                "margin-top": 0 !== f && y.params.spaceBetween && y.params.spaceBetween + "px"
                            }).attr("data-swiper-column", d).attr("data-swiper-row", f)
                        }
                        "none" !== u.css("display") && ("auto" === y.params.slidesPerView ? (o = y.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                        y.params.roundLengths && (o = r(o))) : (o = (y.size - (y.params.slidesPerView - 1) * e) / y.params.slidesPerView,
                        y.params.roundLengths && (o = r(o)),
                        y.isHorizontal() ? y.slides[t].style.width = o + "px" : y.slides[t].style.height = o + "px"),
                        y.slides[t].swiperSlideSize = o,
                        y.slidesSizesGrid.push(o),
                        y.params.centeredSlides ? (i = i + o / 2 + n / 2 + e,
                        0 === t && (i = i - y.size / 2 - e),
                        Math.abs(i) < .001 && (i = 0),
                        s % y.params.slidesPerGroup == 0 && y.snapGrid.push(i),
                        y.slidesGrid.push(i)) : (s % y.params.slidesPerGroup == 0 && y.snapGrid.push(i),
                        y.slidesGrid.push(i),
                        i = i + o + e),
                        y.virtualSize += o + e,
                        n = o,
                        s++)
                    }
                    y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
                    var m;
                    if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({
                        width: y.virtualSize + y.params.spaceBetween + "px"
                    }),
                    (!y.support.flexbox || y.params.setWrapperSize) && (y.isHorizontal() ? y.wrapper.css({
                        width: y.virtualSize + y.params.spaceBetween + "px"
                    }) : y.wrapper.css({
                        height: y.virtualSize + y.params.spaceBetween + "px"
                    })),
                    y.params.slidesPerColumn > 1 && (y.virtualSize = (o + y.params.spaceBetween) * a,
                    y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween,
                    y.wrapper.css({
                        width: y.virtualSize + y.params.spaceBetween + "px"
                    }),
                    y.params.centeredSlides)) {
                        for (m = [],
                        t = 0; t < y.snapGrid.length; t++)
                            y.snapGrid[t] < y.virtualSize + y.snapGrid[0] && m.push(y.snapGrid[t]);
                        y.snapGrid = m
                    }
                    if (!y.params.centeredSlides) {
                        for (m = [],
                        t = 0; t < y.snapGrid.length; t++)
                            y.snapGrid[t] <= y.virtualSize - y.size && m.push(y.snapGrid[t]);
                        y.snapGrid = m,
                        Math.floor(y.virtualSize - y.size) - Math.floor(y.snapGrid[y.snapGrid.length - 1]) > 1 && y.snapGrid.push(y.virtualSize - y.size)
                    }
                    0 === y.snapGrid.length && (y.snapGrid = [0]),
                    0 !== y.params.spaceBetween && (y.isHorizontal() ? y.rtl ? y.slides.css({
                        marginLeft: e + "px"
                    }) : y.slides.css({
                        marginRight: e + "px"
                    }) : y.slides.css({
                        marginBottom: e + "px"
                    })),
                    y.params.watchSlidesProgress && y.updateSlidesOffset()
                }
            }
            ,
            y.updateSlidesOffset = function() {
                for (var t = 0; t < y.slides.length; t++)
                    y.slides[t].swiperSlideOffset = y.isHorizontal() ? y.slides[t].offsetLeft : y.slides[t].offsetTop
            }
            ,
            y.updateSlidesProgress = function(t) {
                if (void 0 === t && (t = y.translate || 0),
                0 !== y.slides.length) {
                    void 0 === y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
                    var e = -t;
                    y.rtl && (e = t),
                    y.slides.removeClass(y.params.slideVisibleClass);
                    for (var i = 0; i < y.slides.length; i++) {
                        var n = y.slides[i]
                          , r = (e - n.swiperSlideOffset) / (n.swiperSlideSize + y.params.spaceBetween);
                        if (y.params.watchSlidesVisibility) {
                            var s = -(e - n.swiperSlideOffset)
                              , a = s + y.slidesSizesGrid[i];
                            (s >= 0 && s < y.size || a > 0 && a <= y.size || 0 >= s && a >= y.size) && y.slides.eq(i).addClass(y.params.slideVisibleClass)
                        }
                        n.progress = y.rtl ? -r : r
                    }
                }
            }
            ,
            y.updateProgress = function(t) {
                void 0 === t && (t = y.translate || 0);
                var e = y.maxTranslate() - y.minTranslate()
                  , i = y.isBeginning
                  , n = y.isEnd;
                0 === e ? (y.progress = 0,
                y.isBeginning = y.isEnd = !0) : (y.progress = (t - y.minTranslate()) / e,
                y.isBeginning = y.progress <= 0,
                y.isEnd = y.progress >= 1),
                y.isBeginning && !i && y.emit("onReachBeginning", y),
                y.isEnd && !n && y.emit("onReachEnd", y),
                y.params.watchSlidesProgress && y.updateSlidesProgress(t),
                y.emit("onProgress", y, y.progress)
            }
            ,
            y.updateActiveIndex = function() {
                var t, e, i, n = y.rtl ? y.translate : -y.translate;
                for (e = 0; e < y.slidesGrid.length; e++)
                    void 0 !== y.slidesGrid[e + 1] ? n >= y.slidesGrid[e] && n < y.slidesGrid[e + 1] - (y.slidesGrid[e + 1] - y.slidesGrid[e]) / 2 ? t = e : n >= y.slidesGrid[e] && n < y.slidesGrid[e + 1] && (t = e + 1) : n >= y.slidesGrid[e] && (t = e);
                (0 > t || void 0 === t) && (t = 0),
                (i = Math.floor(t / y.params.slidesPerGroup)) >= y.snapGrid.length && (i = y.snapGrid.length - 1),
                t !== y.activeIndex && (y.snapIndex = i,
                y.previousIndex = y.activeIndex,
                y.activeIndex = t,
                y.updateClasses())
            }
            ,
            y.updateClasses = function() {
                y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);
                var t = y.slides.eq(y.activeIndex);
                t.addClass(y.params.slideActiveClass);
                var i = t.next("." + y.params.slideClass).addClass(y.params.slideNextClass);
                y.params.loop && 0 === i.length && y.slides.eq(0).addClass(y.params.slideNextClass);
                var n = t.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass);
                if (y.params.loop && 0 === n.length && y.slides.eq(-1).addClass(y.params.slidePrevClass),
                y.paginationContainer && y.paginationContainer.length > 0) {
                    var r, s = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length;
                    if (y.params.loop ? ((r = Math.ceil((y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup)) > y.slides.length - 1 - 2 * y.loopedSlides && (r -= y.slides.length - 2 * y.loopedSlides),
                    r > s - 1 && (r -= s),
                    0 > r && "bullets" !== y.params.paginationType && (r = s + r)) : r = void 0 !== y.snapIndex ? y.snapIndex : y.activeIndex || 0,
                    "bullets" === y.params.paginationType && y.bullets && y.bullets.length > 0 && (y.bullets.removeClass(y.params.bulletActiveClass),
                    y.paginationContainer.length > 1 ? y.bullets.each(function() {
                        e(this).index() === r && e(this).addClass(y.params.bulletActiveClass)
                    }) : y.bullets.eq(r).addClass(y.params.bulletActiveClass)),
                    "fraction" === y.params.paginationType && (y.paginationContainer.find("." + y.params.paginationCurrentClass).text(r + 1),
                    y.paginationContainer.find("." + y.params.paginationTotalClass).text(s)),
                    "progress" === y.params.paginationType) {
                        var a = (r + 1) / s
                          , o = a
                          , l = 1;
                        y.isHorizontal() || (l = a,
                        o = 1),
                        y.paginationContainer.find("." + y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(y.params.speed)
                    }
                    "custom" === y.params.paginationType && y.params.paginationCustomRender && (y.paginationContainer.html(y.params.paginationCustomRender(y, r + 1, s)),
                    y.emit("onPaginationRendered", y, y.paginationContainer[0]))
                }
                y.params.loop || (y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.isBeginning ? (y.prevButton.addClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.disable(y.prevButton)) : (y.prevButton.removeClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.enable(y.prevButton))),
                y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.isEnd ? (y.nextButton.addClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.disable(y.nextButton)) : (y.nextButton.removeClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.enable(y.nextButton))))
            }
            ,
            y.updatePagination = function() {
                if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
                    var t = "";
                    if ("bullets" === y.params.paginationType) {
                        for (var e = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, i = 0; e > i; i++)
                            t += y.params.paginationBulletRender ? y.params.paginationBulletRender(i, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
                        y.paginationContainer.html(t),
                        y.bullets = y.paginationContainer.find("." + y.params.bulletClass),
                        y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination()
                    }
                    "fraction" === y.params.paginationType && (t = y.params.paginationFractionRender ? y.params.paginationFractionRender(y, y.params.paginationCurrentClass, y.params.paginationTotalClass) : '<span class="' + y.params.paginationCurrentClass + '"></span> / <span class="' + y.params.paginationTotalClass + '"></span>',
                    y.paginationContainer.html(t)),
                    "progress" === y.params.paginationType && (t = y.params.paginationProgressRender ? y.params.paginationProgressRender(y, y.params.paginationProgressbarClass) : '<span class="' + y.params.paginationProgressbarClass + '"></span>',
                    y.paginationContainer.html(t)),
                    "custom" !== y.params.paginationType && y.emit("onPaginationRendered", y, y.paginationContainer[0])
                }
            }
            ,
            y.update = function(t) {
                function e() {
                    i = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()),
                    y.setWrapperTranslate(i),
                    y.updateActiveIndex(),
                    y.updateClasses()
                }
                if (y.updateContainerSize(),
                y.updateSlidesSize(),
                y.updateProgress(),
                y.updatePagination(),
                y.updateClasses(),
                y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
                t) {
                    var i;
                    y.controller && y.controller.spline && (y.controller.spline = void 0),
                    y.params.freeMode ? (e(),
                    y.params.autoHeight && y.updateAutoHeight()) : (("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0)) || e()
                } else
                    y.params.autoHeight && y.updateAutoHeight()
            }
            ,
            y.onResize = function(t) {
                y.params.breakpoints && y.setBreakpoint();
                var e = y.params.allowSwipeToPrev
                  , i = y.params.allowSwipeToNext;
                y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0,
                y.updateContainerSize(),
                y.updateSlidesSize(),
                ("auto" === y.params.slidesPerView || y.params.freeMode || t) && y.updatePagination(),
                y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
                y.controller && y.controller.spline && (y.controller.spline = void 0);
                var n = !1;
                if (y.params.freeMode) {
                    var r = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
                    y.setWrapperTranslate(r),
                    y.updateActiveIndex(),
                    y.updateClasses(),
                    y.params.autoHeight && y.updateAutoHeight()
                } else
                    y.updateClasses(),
                    n = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);
                y.params.lazyLoading && !n && y.lazy && y.lazy.load(),
                y.params.allowSwipeToPrev = e,
                y.params.allowSwipeToNext = i
            }
            ;
            var x = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? x = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            y.touchEvents = {
                start: y.support.touch || !y.params.simulateTouch ? "touchstart" : x[0],
                move: y.support.touch || !y.params.simulateTouch ? "touchmove" : x[1],
                end: y.support.touch || !y.params.simulateTouch ? "touchend" : x[2]
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction),
            y.initEvents = function(t) {
                var e = t ? "off" : "on"
                  , i = t ? "removeEventListener" : "addEventListener"
                  , r = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0]
                  , s = y.support.touch ? r : document
                  , a = !!y.params.nested;
                y.browser.ie ? (r[i](y.touchEvents.start, y.onTouchStart, !1),
                s[i](y.touchEvents.move, y.onTouchMove, a),
                s[i](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (r[i](y.touchEvents.start, y.onTouchStart, !1),
                r[i](y.touchEvents.move, y.onTouchMove, a),
                r[i](y.touchEvents.end, y.onTouchEnd, !1)),
                !n.simulateTouch || y.device.ios || y.device.android || (r[i]("mousedown", y.onTouchStart, !1),
                document[i]("mousemove", y.onTouchMove, a),
                document[i]("mouseup", y.onTouchEnd, !1))),
                window[i]("resize", y.onResize),
                y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.nextButton[e]("click", y.onClickNext),
                y.params.a11y && y.a11y && y.nextButton[e]("keydown", y.a11y.onEnterKey)),
                y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.prevButton[e]("click", y.onClickPrev),
                y.params.a11y && y.a11y && y.prevButton[e]("keydown", y.a11y.onEnterKey)),
                y.params.pagination && y.params.paginationClickable && (y.paginationContainer[e]("click", "." + y.params.bulletClass, y.onClickIndex),
                y.params.a11y && y.a11y && y.paginationContainer[e]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)),
                (y.params.preventClicks || y.params.preventClicksPropagation) && r[i]("click", y.preventClicks, !0)
            }
            ,
            y.attachEvents = function() {
                y.initEvents()
            }
            ,
            y.detachEvents = function() {
                y.initEvents(!0)
            }
            ,
            y.allowClick = !0,
            y.preventClicks = function(t) {
                y.allowClick || (y.params.preventClicks && t.preventDefault(),
                y.params.preventClicksPropagation && y.animating && (t.stopPropagation(),
                t.stopImmediatePropagation()))
            }
            ,
            y.onClickNext = function(t) {
                t.preventDefault(),
                (!y.isEnd || y.params.loop) && y.slideNext()
            }
            ,
            y.onClickPrev = function(t) {
                t.preventDefault(),
                (!y.isBeginning || y.params.loop) && y.slidePrev()
            }
            ,
            y.onClickIndex = function(t) {
                t.preventDefault();
                var i = e(this).index() * y.params.slidesPerGroup;
                y.params.loop && (i += y.loopedSlides),
                y.slideTo(i)
            }
            ,
            y.updateClickedSlide = function(t) {
                var i = a(t, "." + y.params.slideClass)
                  , n = !1;
                if (i)
                    for (var r = 0; r < y.slides.length; r++)
                        y.slides[r] === i && (n = !0);
                if (!i || !n)
                    return y.clickedSlide = void 0,
                    void (y.clickedIndex = void 0);
                if (y.clickedSlide = i,
                y.clickedIndex = e(i).index(),
                y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
                    var s, o = y.clickedIndex;
                    if (y.params.loop) {
                        if (y.animating)
                            return;
                        s = e(y.clickedSlide).attr("data-swiper-slide-index"),
                        y.params.centeredSlides ? o < y.loopedSlides - y.params.slidesPerView / 2 || o > y.slides.length - y.loopedSlides + y.params.slidesPerView / 2 ? (y.fixLoop(),
                        o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(),
                        setTimeout(function() {
                            y.slideTo(o)
                        }, 0)) : y.slideTo(o) : o > y.slides.length - y.params.slidesPerView ? (y.fixLoop(),
                        o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(),
                        setTimeout(function() {
                            y.slideTo(o)
                        }, 0)) : y.slideTo(o)
                    } else
                        y.slideTo(o)
                }
            }
            ;
            var b, T, S, P, C, E, k, D, O, M, A = "input, select, textarea, button", L = Date.now(), R = [];
            y.animating = !1,
            y.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var N, j;
            if (y.onTouchStart = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                (N = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                    if (y.params.noSwiping && a(t, "." + y.params.noSwipingClass))
                        return void (y.allowClick = !0);
                    if (!y.params.swipeHandler || a(t, y.params.swipeHandler)) {
                        var i = y.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX
                          , n = y.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                        if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && i <= y.params.iOSEdgeSwipeThreshold)) {
                            if (b = !0,
                            T = !1,
                            S = !0,
                            C = void 0,
                            j = void 0,
                            y.touches.startX = i,
                            y.touches.startY = n,
                            P = Date.now(),
                            y.allowClick = !0,
                            y.updateContainerSize(),
                            y.swipeDirection = void 0,
                            y.params.threshold > 0 && (D = !1),
                            "touchstart" !== t.type) {
                                var r = !0;
                                e(t.target).is(A) && (r = !1),
                                document.activeElement && e(document.activeElement).is(A) && document.activeElement.blur(),
                                r && t.preventDefault()
                            }
                            y.emit("onTouchStart", y, t)
                        }
                    }
                }
            }
            ,
            y.onTouchMove = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                !N || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return y.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (y.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (y.params.onlyExternal)
                        return y.allowClick = !1,
                        void (b && (y.touches.startX = y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        y.touches.startY = y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        P = Date.now()));
                    if (N && document.activeElement && t.target === document.activeElement && e(t.target).is(A))
                        return T = !0,
                        void (y.allowClick = !1);
                    if (S && y.emit("onTouchMove", y, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) {
                        if (y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        void 0 === C) {
                            var i = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;
                            C = y.isHorizontal() ? i > y.params.touchAngle : 90 - i > y.params.touchAngle
                        }
                        if (C && y.emit("onTouchMoveOpposite", y, t),
                        void 0 === j && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (j = !0),
                        b) {
                            if (C)
                                return void (b = !1);
                            if (j || !y.browser.ieTouch) {
                                y.allowClick = !1,
                                y.emit("onSliderMove", y, t),
                                t.preventDefault(),
                                y.params.touchMoveStopPropagation && !y.params.nested && t.stopPropagation(),
                                T || (n.loop && y.fixLoop(),
                                k = y.getWrapperTranslate(),
                                y.setWrapperTransition(0),
                                y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()),
                                M = !1,
                                y.params.grabCursor && (y.container[0].style.cursor = "move",
                                y.container[0].style.cursor = "-webkit-grabbing",
                                y.container[0].style.cursor = "-moz-grabbin",
                                y.container[0].style.cursor = "grabbing")),
                                T = !0;
                                var r = y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                                r *= y.params.touchRatio,
                                y.rtl && (r = -r),
                                y.swipeDirection = r > 0 ? "prev" : "next",
                                E = r + k;
                                var s = !0;
                                if (r > 0 && E > y.minTranslate() ? (s = !1,
                                y.params.resistance && (E = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + k + r, y.params.resistanceRatio))) : 0 > r && E < y.maxTranslate() && (s = !1,
                                y.params.resistance && (E = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - k - r, y.params.resistanceRatio))),
                                s && (t.preventedByNestedSwiper = !0),
                                !y.params.allowSwipeToNext && "next" === y.swipeDirection && k > E && (E = k),
                                !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && E > k && (E = k),
                                y.params.followFinger) {
                                    if (y.params.threshold > 0) {
                                        if (!(Math.abs(r) > y.params.threshold || D))
                                            return void (E = k);
                                        if (!D)
                                            return D = !0,
                                            y.touches.startX = y.touches.currentX,
                                            y.touches.startY = y.touches.currentY,
                                            E = k,
                                            void (y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY)
                                    }
                                    (y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(),
                                    y.params.freeMode && (0 === R.length && R.push({
                                        position: y.touches[y.isHorizontal() ? "startX" : "startY"],
                                        time: P
                                    }),
                                    R.push({
                                        position: y.touches[y.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    y.updateProgress(E),
                                    y.setWrapperTranslate(E)
                                }
                            }
                        }
                    }
                }
            }
            ,
            y.onTouchEnd = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                S && y.emit("onTouchEnd", y, t),
                S = !1,
                b) {
                    y.params.grabCursor && T && b && (y.container[0].style.cursor = "move",
                    y.container[0].style.cursor = "-webkit-grab",
                    y.container[0].style.cursor = "-moz-grab",
                    y.container[0].style.cursor = "grab");
                    var i = Date.now()
                      , n = i - P;
                    if (y.allowClick && (y.updateClickedSlide(t),
                    y.emit("onTap", y, t),
                    300 > n && i - L > 300 && (O && clearTimeout(O),
                    O = setTimeout(function() {
                        y && (y.params.paginationHide && y.paginationContainer.length > 0 && !e(t.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass),
                        y.emit("onClick", y, t))
                    }, 300)),
                    300 > n && 300 > i - L && (O && clearTimeout(O),
                    y.emit("onDoubleTap", y, t))),
                    L = Date.now(),
                    setTimeout(function() {
                        y && (y.allowClick = !0)
                    }, 0),
                    !b || !T || !y.swipeDirection || 0 === y.touches.diff || E === k)
                        return void (b = T = !1);
                    b = T = !1;
                    var r;
                    if (r = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -E,
                    y.params.freeMode) {
                        if (r < -y.minTranslate())
                            return void y.slideTo(y.activeIndex);
                        if (r > -y.maxTranslate())
                            return void (y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1) : y.slideTo(y.slides.length - 1));
                        if (y.params.freeModeMomentum) {
                            if (R.length > 1) {
                                var s = R.pop()
                                  , a = R.pop()
                                  , o = s.position - a.position
                                  , l = s.time - a.time;
                                y.velocity = o / l,
                                y.velocity = y.velocity / 2,
                                Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - s.time > 300) && (y.velocity = 0)
                            } else
                                y.velocity = 0;
                            R.length = 0;
                            var c = 1e3 * y.params.freeModeMomentumRatio
                              , h = y.velocity * c
                              , u = y.translate + h;
                            y.rtl && (u = -u);
                            var p, d = !1, f = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
                            if (u < y.maxTranslate())
                                y.params.freeModeMomentumBounce ? (u + y.maxTranslate() < -f && (u = y.maxTranslate() - f),
                                p = y.maxTranslate(),
                                d = !0,
                                M = !0) : u = y.maxTranslate();
                            else if (u > y.minTranslate())
                                y.params.freeModeMomentumBounce ? (u - y.minTranslate() > f && (u = y.minTranslate() + f),
                                p = y.minTranslate(),
                                d = !0,
                                M = !0) : u = y.minTranslate();
                            else if (y.params.freeModeSticky) {
                                var m, _ = 0;
                                for (_ = 0; _ < y.snapGrid.length; _ += 1)
                                    if (y.snapGrid[_] > -u) {
                                        m = _;
                                        break
                                    }
                                u = Math.abs(y.snapGrid[m] - u) < Math.abs(y.snapGrid[m - 1] - u) || "next" === y.swipeDirection ? y.snapGrid[m] : y.snapGrid[m - 1],
                                y.rtl || (u = -u)
                            }
                            if (0 !== y.velocity)
                                c = y.rtl ? Math.abs((-u - y.translate) / y.velocity) : Math.abs((u - y.translate) / y.velocity);
                            else if (y.params.freeModeSticky)
                                return void y.slideReset();
                            y.params.freeModeMomentumBounce && d ? (y.updateProgress(p),
                            y.setWrapperTransition(c),
                            y.setWrapperTranslate(u),
                            y.onTransitionStart(),
                            y.animating = !0,
                            y.wrapper.transitionEnd(function() {
                                y && M && (y.emit("onMomentumBounce", y),
                                y.setWrapperTransition(y.params.speed),
                                y.setWrapperTranslate(p),
                                y.wrapper.transitionEnd(function() {
                                    y && y.onTransitionEnd()
                                }))
                            })) : y.velocity ? (y.updateProgress(u),
                            y.setWrapperTransition(c),
                            y.setWrapperTranslate(u),
                            y.onTransitionStart(),
                            y.animating || (y.animating = !0,
                            y.wrapper.transitionEnd(function() {
                                y && y.onTransitionEnd()
                            }))) : y.updateProgress(u),
                            y.updateActiveIndex()
                        }
                        return void ((!y.params.freeModeMomentum || n >= y.params.longSwipesMs) && (y.updateProgress(),
                        y.updateActiveIndex()))
                    }
                    var g, v = 0, w = y.slidesSizesGrid[0];
                    for (g = 0; g < y.slidesGrid.length; g += y.params.slidesPerGroup)
                        void 0 !== y.slidesGrid[g + y.params.slidesPerGroup] ? r >= y.slidesGrid[g] && r < y.slidesGrid[g + y.params.slidesPerGroup] && (v = g,
                        w = y.slidesGrid[g + y.params.slidesPerGroup] - y.slidesGrid[g]) : r >= y.slidesGrid[g] && (v = g,
                        w = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
                    var x = (r - y.slidesGrid[v]) / w;
                    if (n > y.params.longSwipesMs) {
                        if (!y.params.longSwipes)
                            return void y.slideTo(y.activeIndex);
                        "next" === y.swipeDirection && (x >= y.params.longSwipesRatio ? y.slideTo(v + y.params.slidesPerGroup) : y.slideTo(v)),
                        "prev" === y.swipeDirection && (x > 1 - y.params.longSwipesRatio ? y.slideTo(v + y.params.slidesPerGroup) : y.slideTo(v))
                    } else {
                        if (!y.params.shortSwipes)
                            return void y.slideTo(y.activeIndex);
                        "next" === y.swipeDirection && y.slideTo(v + y.params.slidesPerGroup),
                        "prev" === y.swipeDirection && y.slideTo(v)
                    }
                }
            }
            ,
            y._slideTo = function(t, e) {
                return y.slideTo(t, e, !0, !0)
            }
            ,
            y.slideTo = function(t, e, i, n) {
                void 0 === i && (i = !0),
                void 0 === t && (t = 0),
                0 > t && (t = 0),
                y.snapIndex = Math.floor(t / y.params.slidesPerGroup),
                y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
                var r = -y.snapGrid[y.snapIndex];
                y.params.autoplay && y.autoplaying && (n || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(e) : y.stopAutoplay()),
                y.updateProgress(r);
                for (var s = 0; s < y.slidesGrid.length; s++)
                    -Math.floor(100 * r) >= Math.floor(100 * y.slidesGrid[s]) && (t = s);
                return !(!y.params.allowSwipeToNext && r < y.translate && r < y.minTranslate()) && (!(!y.params.allowSwipeToPrev && r > y.translate && r > y.maxTranslate() && (y.activeIndex || 0) !== t) && (void 0 === e && (e = y.params.speed),
                y.previousIndex = y.activeIndex || 0,
                y.activeIndex = t,
                y.rtl && -r === y.translate || !y.rtl && r === y.translate ? (y.params.autoHeight && y.updateAutoHeight(),
                y.updateClasses(),
                "slide" !== y.params.effect && y.setWrapperTranslate(r),
                !1) : (y.updateClasses(),
                y.onTransitionStart(i),
                0 === e ? (y.setWrapperTranslate(r),
                y.setWrapperTransition(0),
                y.onTransitionEnd(i)) : (y.setWrapperTranslate(r),
                y.setWrapperTransition(e),
                y.animating || (y.animating = !0,
                y.wrapper.transitionEnd(function() {
                    y && y.onTransitionEnd(i)
                }))),
                !0)))
            }
            ,
            y.onTransitionStart = function(t) {
                void 0 === t && (t = !0),
                y.params.autoHeight && y.updateAutoHeight(),
                y.lazy && y.lazy.onTransitionStart(),
                t && (y.emit("onTransitionStart", y),
                y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeStart", y),
                y.activeIndex > y.previousIndex ? y.emit("onSlideNextStart", y) : y.emit("onSlidePrevStart", y)))
            }
            ,
            y.onTransitionEnd = function(t) {
                y.animating = !1,
                y.setWrapperTransition(0),
                void 0 === t && (t = !0),
                y.lazy && y.lazy.onTransitionEnd(),
                t && (y.emit("onTransitionEnd", y),
                y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeEnd", y),
                y.activeIndex > y.previousIndex ? y.emit("onSlideNextEnd", y) : y.emit("onSlidePrevEnd", y))),
                y.params.hashnav && y.hashnav && y.hashnav.setHash()
            }
            ,
            y.slideNext = function(t, e, i) {
                return y.params.loop ? !y.animating && (y.fixLoop(),
                y.container[0].clientLeft,
                y.slideTo(y.activeIndex + y.params.slidesPerGroup, e, t, i)) : y.slideTo(y.activeIndex + y.params.slidesPerGroup, e, t, i)
            }
            ,
            y._slideNext = function(t) {
                return y.slideNext(!0, t, !0)
            }
            ,
            y.slidePrev = function(t, e, i) {
                return y.params.loop ? !y.animating && (y.fixLoop(),
                y.container[0].clientLeft,
                y.slideTo(y.activeIndex - 1, e, t, i)) : y.slideTo(y.activeIndex - 1, e, t, i)
            }
            ,
            y._slidePrev = function(t) {
                return y.slidePrev(!0, t, !0)
            }
            ,
            y.slideReset = function(t, e, i) {
                return y.slideTo(y.activeIndex, e, t)
            }
            ,
            y.setWrapperTransition = function(t, e) {
                y.wrapper.transition(t),
                "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(t),
                y.params.parallax && y.parallax && y.parallax.setTransition(t),
                y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(t),
                y.params.control && y.controller && y.controller.setTransition(t, e),
                y.emit("onSetTransition", y, t)
            }
            ,
            y.setWrapperTranslate = function(t, e, i) {
                var n = 0
                  , s = 0;
                y.isHorizontal() ? n = y.rtl ? -t : t : s = t,
                y.params.roundLengths && (n = r(n),
                s = r(s)),
                y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform("translate3d(" + n + "px, " + s + "px, 0px)") : y.wrapper.transform("translate(" + n + "px, " + s + "px)")),
                y.translate = y.isHorizontal() ? n : s;
                var a = y.maxTranslate() - y.minTranslate();
                (0 === a ? 0 : (t - y.minTranslate()) / a) !== y.progress && y.updateProgress(t),
                e && y.updateActiveIndex(),
                "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate),
                y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate),
                y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate),
                y.params.control && y.controller && y.controller.setTranslate(y.translate, i),
                y.emit("onSetTranslate", y, y.translate)
            }
            ,
            y.getTranslate = function(t, e) {
                var i, n, r, s;
                return void 0 === e && (e = "x"),
                y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (r = window.getComputedStyle(t, null),
                window.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function(t) {
                    return t.replace(",", ".")
                }).join(", ")),
                s = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                i = s.toString().split(",")),
                "x" === e && (n = window.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === e && (n = window.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                y.rtl && n && (n = -n),
                n || 0)
            }
            ,
            y.getWrapperTranslate = function(t) {
                return void 0 === t && (t = y.isHorizontal() ? "x" : "y"),
                y.getTranslate(y.wrapper[0], t)
            }
            ,
            y.observers = [],
            y.initObservers = function() {
                if (y.params.observeParents)
                    for (var t = y.container.parents(), e = 0; e < t.length; e++)
                        o(t[e]);
                o(y.container[0], {
                    childList: !1
                }),
                o(y.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            y.disconnectObservers = function() {
                for (var t = 0; t < y.observers.length; t++)
                    y.observers[t].disconnect();
                y.observers = []
            }
            ,
            y.createLoop = function() {
                y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();
                var t = y.wrapper.children("." + y.params.slideClass);
                "auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = t.length),
                y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10),
                y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides,
                y.loopedSlides > t.length && (y.loopedSlides = t.length);
                var i, n = [], r = [];
                for (t.each(function(i, s) {
                    var a = e(this);
                    i < y.loopedSlides && r.push(s),
                    i < t.length && i >= t.length - y.loopedSlides && n.push(s),
                    a.attr("data-swiper-slide-index", i)
                }),
                i = 0; i < r.length; i++)
                    y.wrapper.append(e(r[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
                for (i = n.length - 1; i >= 0; i--)
                    y.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass))
            }
            ,
            y.destroyLoop = function() {
                y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(),
                y.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            y.reLoop = function(t) {
                var e = y.activeIndex - y.loopedSlides;
                y.destroyLoop(),
                y.createLoop(),
                y.updateSlidesSize(),
                t && y.slideTo(e + y.loopedSlides, 0, !1)
            }
            ,
            y.fixLoop = function() {
                var t;
                y.activeIndex < y.loopedSlides ? (t = y.slides.length - 3 * y.loopedSlides + y.activeIndex,
                t += y.loopedSlides,
                y.slideTo(t, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (t = -y.slides.length + y.activeIndex + y.loopedSlides,
                t += y.loopedSlides,
                y.slideTo(t, 0, !1, !0))
            }
            ,
            y.appendSlide = function(t) {
                if (y.params.loop && y.destroyLoop(),
                "object" == typeof t && t.length)
                    for (var e = 0; e < t.length; e++)
                        t[e] && y.wrapper.append(t[e]);
                else
                    y.wrapper.append(t);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0)
            }
            ,
            y.prependSlide = function(t) {
                y.params.loop && y.destroyLoop();
                var e = y.activeIndex + 1;
                if ("object" == typeof t && t.length) {
                    for (var i = 0; i < t.length; i++)
                        t[i] && y.wrapper.prepend(t[i]);
                    e = y.activeIndex + t.length
                } else
                    y.wrapper.prepend(t);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0),
                y.slideTo(e, 0, !1)
            }
            ,
            y.removeSlide = function(t) {
                y.params.loop && (y.destroyLoop(),
                y.slides = y.wrapper.children("." + y.params.slideClass));
                var e, i = y.activeIndex;
                if ("object" == typeof t && t.length) {
                    for (var n = 0; n < t.length; n++)
                        e = t[n],
                        y.slides[e] && y.slides.eq(e).remove(),
                        i > e && i--;
                    i = Math.max(i, 0)
                } else
                    e = t,
                    y.slides[e] && y.slides.eq(e).remove(),
                    i > e && i--,
                    i = Math.max(i, 0);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0),
                y.params.loop ? y.slideTo(i + y.loopedSlides, 0, !1) : y.slideTo(i, 0, !1)
            }
            ,
            y.removeAllSlides = function() {
                for (var t = [], e = 0; e < y.slides.length; e++)
                    t.push(e);
                y.removeSlide(t)
            }
            ,
            y.effects = {
                fade: {
                    setTranslate: function() {
                        for (var t = 0; t < y.slides.length; t++) {
                            var e = y.slides.eq(t)
                              , i = -e[0].swiperSlideOffset;
                            y.params.virtualTranslate || (i -= y.translate);
                            var n = 0;
                            y.isHorizontal() || (n = i,
                            i = 0);
                            var r = y.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                            e.css({
                                opacity: r
                            }).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                        }
                    },
                    setTransition: function(t) {
                        if (y.slides.transition(t),
                        y.params.virtualTranslate && 0 !== t) {
                            var e = !1;
                            y.slides.transitionEnd(function() {
                                if (!e && y) {
                                    e = !0,
                                    y.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                                        y.wrapper.trigger(t[i])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t = 0; t < y.slides.length; t++) {
                            var i = y.slides.eq(t)
                              , n = i[0].progress;
                            y.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                            var r = -180 * n
                              , s = 0
                              , a = -i[0].swiperSlideOffset
                              , o = 0;
                            if (y.isHorizontal() ? y.rtl && (r = -r) : (o = a,
                            a = 0,
                            s = -r,
                            r = 0),
                            i[0].style.zIndex = -Math.abs(Math.round(n)) + y.slides.length,
                            y.params.flip.slideShadows) {
                                var l = y.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                  , c = y.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'),
                                i.append(l)),
                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                i.append(c)),
                                l.length && (l[0].style.opacity = Math.max(-n, 0)),
                                c.length && (c[0].style.opacity = Math.max(n, 0))
                            }
                            i.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + s + "deg) rotateY(" + r + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        y.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            y.slides.eq(y.activeIndex).transitionEnd(function() {
                                if (!i && y && e(this).hasClass(y.params.slideActiveClass)) {
                                    i = !0,
                                    y.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++)
                                        y.wrapper.trigger(t[n])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, i = 0;
                        y.params.cube.shadow && (y.isHorizontal() ? (0 === (t = y.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
                        y.wrapper.append(t)),
                        t.css({
                            height: y.width + "px"
                        })) : 0 === (t = y.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
                        y.container.append(t)));
                        for (var n = 0; n < y.slides.length; n++) {
                            var r = y.slides.eq(n)
                              , s = 90 * n
                              , a = Math.floor(s / 360);
                            y.rtl && (s = -s,
                            a = Math.floor(-s / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1)
                              , l = 0
                              , c = 0
                              , h = 0;
                            n % 4 == 0 ? (l = 4 * -a * y.size,
                            h = 0) : (n - 1) % 4 == 0 ? (l = 0,
                            h = 4 * -a * y.size) : (n - 2) % 4 == 0 ? (l = y.size + 4 * a * y.size,
                            h = y.size) : (n - 3) % 4 == 0 && (l = -y.size,
                            h = 3 * y.size + 4 * y.size * a),
                            y.rtl && (l = -l),
                            y.isHorizontal() || (c = l,
                            l = 0);
                            var u = "rotateX(" + (y.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (y.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + h + "px)";
                            if (1 >= o && o > -1 && (i = 90 * n + 90 * o,
                            y.rtl && (i = 90 * -n - 90 * o)),
                            r.transform(u),
                            y.params.cube.slideShadows) {
                                var p = y.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                                  , d = y.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'),
                                r.append(p)),
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                r.append(d)),
                                p.length && (p[0].style.opacity = Math.max(-o, 0)),
                                d.length && (d[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (y.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "transform-origin": "50% 50% -" + y.size / 2 + "px"
                        }),
                        y.params.cube.shadow)
                            if (y.isHorizontal())
                                t.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");
                            else {
                                var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90)
                                  , m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2)
                                  , _ = y.params.cube.shadowScale
                                  , g = y.params.cube.shadowScale / m
                                  , v = y.params.cube.shadowOffset;
                                t.transform("scale3d(" + _ + ", 1, " + g + ") translate3d(0px, " + (y.height / 2 + v) + "px, " + -y.height / 2 / g + "px) rotateX(-90deg)")
                            }
                        var w = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;
                        y.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (y.isHorizontal() ? 0 : i) + "deg) rotateY(" + (y.isHorizontal() ? -i : 0) + "deg)")
                    },
                    setTransition: function(t) {
                        y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        y.params.cube.shadow && !y.isHorizontal() && y.container.find(".swiper-cube-shadow").transition(t)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var t = y.translate, i = y.isHorizontal() ? -t + y.width / 2 : -t + y.height / 2, n = y.isHorizontal() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, r = y.params.coverflow.depth, s = 0, a = y.slides.length; a > s; s++) {
                            var o = y.slides.eq(s)
                              , l = y.slidesSizesGrid[s]
                              , c = (i - o[0].swiperSlideOffset - l / 2) / l * y.params.coverflow.modifier
                              , h = y.isHorizontal() ? n * c : 0
                              , u = y.isHorizontal() ? 0 : n * c
                              , p = -r * Math.abs(c)
                              , d = y.isHorizontal() ? 0 : y.params.coverflow.stretch * c
                              , f = y.isHorizontal() ? y.params.coverflow.stretch * c : 0;
                            Math.abs(f) < .001 && (f = 0),
                            Math.abs(d) < .001 && (d = 0),
                            Math.abs(p) < .001 && (p = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(u) < .001 && (u = 0);
                            var m = "translate3d(" + f + "px," + d + "px," + p + "px)  rotateX(" + u + "deg) rotateY(" + h + "deg)";
                            if (o.transform(m),
                            o[0].style.zIndex = 1 - Math.abs(Math.round(c)),
                            y.params.coverflow.slideShadows) {
                                var _ = y.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                  , g = y.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === _.length && (_ = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'),
                                o.append(_)),
                                0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                o.append(g)),
                                _.length && (_[0].style.opacity = c > 0 ? c : 0),
                                g.length && (g[0].style.opacity = -c > 0 ? -c : 0)
                            }
                        }
                        if (y.browser.ie) {
                            y.wrapper[0].style.perspectiveOrigin = i + "px 50%"
                        }
                    },
                    setTransition: function(t) {
                        y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                    }
                }
            },
            y.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if (void 0 !== t && (void 0 === i && (i = !0),
                    0 !== y.slides.length)) {
                        var n = y.slides.eq(t)
                          , r = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        !n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (r = r.add(n[0])),
                        0 !== r.length && r.each(function() {
                            var t = e(this);
                            t.addClass("swiper-lazy-loading");
                            var r = t.attr("data-background")
                              , s = t.attr("data-src")
                              , a = t.attr("data-srcset");
                            y.loadImage(t[0], s || r, a, !1, function() {
                                if (r ? (t.css("background-image", 'url("' + r + '")'),
                                t.removeAttr("data-background")) : (a && (t.attr("srcset", a),
                                t.removeAttr("data-srcset")),
                                s && (t.attr("src", s),
                                t.removeAttr("data-src"))),
                                t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),
                                n.find(".swiper-lazy-preloader, .preloader").remove(),
                                y.params.loop && i) {
                                    var e = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(y.params.slideDuplicateClass)) {
                                        var o = y.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + y.params.slideDuplicateClass + ")");
                                        y.lazy.loadImageInSlide(o.index(), !1)
                                    } else {
                                        var l = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        y.lazy.loadImageInSlide(l.index(), !1)
                                    }
                                }
                                y.emit("onLazyImageReady", y, n[0], t[0])
                            }),
                            y.emit("onLazyImageLoad", y, n[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t;
                    if (y.params.watchSlidesVisibility)
                        y.wrapper.children("." + y.params.slideVisibleClass).each(function() {
                            y.lazy.loadImageInSlide(e(this).index())
                        });
                    else if (y.params.slidesPerView > 1)
                        for (t = y.activeIndex; t < y.activeIndex + y.params.slidesPerView; t++)
                            y.slides[t] && y.lazy.loadImageInSlide(t);
                    else
                        y.lazy.loadImageInSlide(y.activeIndex);
                    if (y.params.lazyLoadingInPrevNext)
                        if (y.params.slidesPerView > 1 || y.params.lazyLoadingInPrevNextAmount && y.params.lazyLoadingInPrevNextAmount > 1) {
                            var i = y.params.lazyLoadingInPrevNextAmount
                              , n = y.params.slidesPerView
                              , r = Math.min(y.activeIndex + n + Math.max(i, n), y.slides.length)
                              , s = Math.max(y.activeIndex - Math.max(n, i), 0);
                            for (t = y.activeIndex + y.params.slidesPerView; r > t; t++)
                                y.slides[t] && y.lazy.loadImageInSlide(t);
                            for (t = s; t < y.activeIndex; t++)
                                y.slides[t] && y.lazy.loadImageInSlide(t)
                        } else {
                            var a = y.wrapper.children("." + y.params.slideNextClass);
                            a.length > 0 && y.lazy.loadImageInSlide(a.index());
                            var o = y.wrapper.children("." + y.params.slidePrevClass);
                            o.length > 0 && y.lazy.loadImageInSlide(o.index())
                        }
                },
                onTransitionStart: function() {
                    y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load()
                },
                onTransitionEnd: function() {
                    y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load()
                }
            },
            y.scrollbar = {
                isTouched: !1,
                setDragPosition: function(t) {
                    var e = y.scrollbar
                      , i = (y.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - e.track.offset()[y.isHorizontal() ? "left" : "top"] - e.dragSize / 2
                      , n = -y.minTranslate() * e.moveDivider
                      , r = -y.maxTranslate() * e.moveDivider;
                    n > i ? i = n : i > r && (i = r),
                    i = -i / e.moveDivider,
                    y.updateProgress(i),
                    y.setWrapperTranslate(i, !0)
                },
                dragStart: function(t) {
                    var e = y.scrollbar;
                    e.isTouched = !0,
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.setDragPosition(t),
                    clearTimeout(e.dragTimeout),
                    e.track.transition(0),
                    y.params.scrollbarHide && e.track.css("opacity", 1),
                    y.wrapper.transition(100),
                    e.drag.transition(100),
                    y.emit("onScrollbarDragStart", y)
                },
                dragMove: function(t) {
                    var e = y.scrollbar;
                    e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    e.setDragPosition(t),
                    y.wrapper.transition(0),
                    e.track.transition(0),
                    e.drag.transition(0),
                    y.emit("onScrollbarDragMove", y))
                },
                dragEnd: function(t) {
                    var e = y.scrollbar;
                    e.isTouched && (e.isTouched = !1,
                    y.params.scrollbarHide && (clearTimeout(e.dragTimeout),
                    e.dragTimeout = setTimeout(function() {
                        e.track.css("opacity", 0),
                        e.track.transition(400)
                    }, 1e3)),
                    y.emit("onScrollbarDragEnd", y),
                    y.params.scrollbarSnapOnRelease && y.slideReset())
                },
                enableDraggable: function() {
                    var t = y.scrollbar
                      , i = y.support.touch ? t.track : document;
                    e(t.track).on(y.touchEvents.start, t.dragStart),
                    e(i).on(y.touchEvents.move, t.dragMove),
                    e(i).on(y.touchEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = y.scrollbar
                      , i = y.support.touch ? t.track : document;
                    e(t.track).off(y.touchEvents.start, t.dragStart),
                    e(i).off(y.touchEvents.move, t.dragMove),
                    e(i).off(y.touchEvents.end, t.dragEnd)
                },
                set: function() {
                    if (y.params.scrollbar) {
                        var t = y.scrollbar;
                        t.track = e(y.params.scrollbar),
                        y.params.uniqueNavElements && "string" == typeof y.params.scrollbar && t.track.length > 1 && 1 === y.container.find(y.params.scrollbar).length && (t.track = y.container.find(y.params.scrollbar)),
                        t.drag = t.track.find(".swiper-scrollbar-drag"),
                        0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                        t.track.append(t.drag)),
                        t.drag[0].style.width = "",
                        t.drag[0].style.height = "",
                        t.trackSize = y.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
                        t.divider = y.size / y.virtualSize,
                        t.moveDivider = t.divider * (t.trackSize / y.size),
                        t.dragSize = t.trackSize * t.divider,
                        y.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px",
                        t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "",
                        y.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (y.params.scrollbar) {
                        var t, e = y.scrollbar, i = (y.translate,
                        e.dragSize);
                        t = (e.trackSize - e.dragSize) * y.progress,
                        y.rtl && y.isHorizontal() ? (t = -t) > 0 ? (i = e.dragSize - t,
                        t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t) : 0 > t ? (i = e.dragSize + t,
                        t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t),
                        y.isHorizontal() ? (y.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"),
                        e.drag[0].style.width = i + "px") : (y.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"),
                        e.drag[0].style.height = i + "px"),
                        y.params.scrollbarHide && (clearTimeout(e.timeout),
                        e.track[0].style.opacity = 1,
                        e.timeout = setTimeout(function() {
                            e.track[0].style.opacity = 0,
                            e.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(t) {
                    y.params.scrollbar && y.scrollbar.drag.transition(t)
                }
            },
            y.controller = {
                LinearSpline: function(t, e) {
                    this.x = t,
                    this.y = e,
                    this.lastIndex = t.length - 1;
                    var i, n;
                    this.x.length,
                    this.interpolate = function(t) {
                        return t ? (n = r(this.x, t),
                        i = n - 1,
                        (t - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                    }
                    ;
                    var r = function() {
                        var t, e, i;
                        return function(n, r) {
                            for (e = -1,
                            t = n.length; t - e > 1; )
                                n[i = t + e >> 1] <= r ? e = i : t = i;
                            return t
                        }
                    }()
                },
                getInterpolateFunction: function(t) {
                    y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid,t.slidesGrid) : new y.controller.LinearSpline(y.snapGrid,t.snapGrid))
                },
                setTranslate: function(t, e) {
                    function n(e) {
                        t = e.rtl && "horizontal" === e.params.direction ? -y.translate : y.translate,
                        "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(e),
                        s = -y.controller.spline.interpolate(-t)),
                        s && "container" !== y.params.controlBy || (r = (e.maxTranslate() - e.minTranslate()) / (y.maxTranslate() - y.minTranslate()),
                        s = (t - y.minTranslate()) * r + e.minTranslate()),
                        y.params.controlInverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setWrapperTranslate(s, !1, y),
                        e.updateActiveIndex()
                    }
                    var r, s, a = y.params.control;
                    if (y.isArray(a))
                        for (var o = 0; o < a.length; o++)
                            a[o] !== e && a[o]instanceof i && n(a[o]);
                    else
                        a instanceof i && e !== a && n(a)
                },
                setTransition: function(t, e) {
                    function n(e) {
                        e.setWrapperTransition(t, y),
                        0 !== t && (e.onTransitionStart(),
                        e.wrapper.transitionEnd(function() {
                            s && (e.params.loop && "slide" === y.params.controlBy && e.fixLoop(),
                            e.onTransitionEnd())
                        }))
                    }
                    var r, s = y.params.control;
                    if (y.isArray(s))
                        for (r = 0; r < s.length; r++)
                            s[r] !== e && s[r]instanceof i && n(s[r]);
                    else
                        s instanceof i && e !== s && n(s)
                }
            },
            y.hashnav = {
                init: function() {
                    if (y.params.hashnav) {
                        y.hashnav.initialized = !0;
                        var t = document.location.hash.replace("#", "");
                        if (t)
                            for (var e = 0, i = y.slides.length; i > e; e++) {
                                var n = y.slides.eq(e);
                                if (n.attr("data-hash") === t && !n.hasClass(y.params.slideDuplicateClass)) {
                                    var r = n.index();
                                    y.slideTo(r, 0, y.params.runCallbacksOnInit, !0)
                                }
                            }
                    }
                },
                setHash: function() {
                    y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "")
                }
            },
            y.disableKeyboardControl = function() {
                y.params.keyboardControl = !1,
                e(document).off("keydown", l)
            }
            ,
            y.enableKeyboardControl = function() {
                y.params.keyboardControl = !0,
                e(document).on("keydown", l)
            }
            ,
            y.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            y.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"),
                    y.mousewheel.event = "wheel"
                } catch (t) {
                    (window.WheelEvent || y.container[0] && "wheel"in y.container[0]) && (y.mousewheel.event = "wheel")
                }
                !y.mousewheel.event && window.WheelEvent,
                y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"),
                y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll")
            }
            y.disableMousewheelControl = function() {
                return !!y.mousewheel.event && (y.container.off(y.mousewheel.event, c),
                !0)
            }
            ,
            y.enableMousewheelControl = function() {
                return !!y.mousewheel.event && (y.container.on(y.mousewheel.event, c),
                !0)
            }
            ,
            y.parallax = {
                setTranslate: function() {
                    y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        h(this, y.progress)
                    }),
                    y.slides.each(function() {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            h(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = y.params.speed),
                    y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = e(this)
                          , n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (n = 0),
                        i.transition(n)
                    })
                }
            },
            y._plugins = [];
            for (var z in y.plugins) {
                var I = y.plugins[z](y, y.params[z]);
                I && y._plugins.push(I)
            }
            return y.callPlugins = function(t) {
                for (var e = 0; e < y._plugins.length; e++)
                    t in y._plugins[e] && y._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            y.emitterEventListeners = {},
            y.emit = function(t) {
                y.params[t] && y.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var e;
                if (y.emitterEventListeners[t])
                    for (e = 0; e < y.emitterEventListeners[t].length; e++)
                        y.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                y.callPlugins && y.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            y.on = function(t, e) {
                return t = u(t),
                y.emitterEventListeners[t] || (y.emitterEventListeners[t] = []),
                y.emitterEventListeners[t].push(e),
                y
            }
            ,
            y.off = function(t, e) {
                var i;
                if (t = u(t),
                void 0 === e)
                    return y.emitterEventListeners[t] = [],
                    y;
                if (y.emitterEventListeners[t] && 0 !== y.emitterEventListeners[t].length) {
                    for (i = 0; i < y.emitterEventListeners[t].length; i++)
                        y.emitterEventListeners[t][i] === e && y.emitterEventListeners[t].splice(i, 1);
                    return y
                }
            }
            ,
            y.once = function(t, e) {
                t = u(t);
                var i = function() {
                    e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    y.off(t, i)
                };
                return y.on(t, i),
                y
            }
            ,
            y.a11y = {
                makeFocusable: function(t) {
                    return t.attr("tabIndex", "0"),
                    t
                },
                addRole: function(t, e) {
                    return t.attr("role", e),
                    t
                },
                addLabel: function(t, e) {
                    return t.attr("aria-label", e),
                    t
                },
                disable: function(t) {
                    return t.attr("aria-disabled", !0),
                    t
                },
                enable: function(t) {
                    return t.attr("aria-disabled", !1),
                    t
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (e(t.target).is(y.params.nextButton) ? (y.onClickNext(t),
                    y.isEnd ? y.a11y.notify(y.params.lastSlideMessage) : y.a11y.notify(y.params.nextSlideMessage)) : e(t.target).is(y.params.prevButton) && (y.onClickPrev(t),
                    y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage) : y.a11y.notify(y.params.prevSlideMessage)),
                    e(t.target).is("." + y.params.bulletClass) && e(t.target)[0].click())
                },
                liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(t) {
                    var e = y.a11y.liveRegion;
                    0 !== e.length && (e.html(""),
                    e.html(t))
                },
                init: function() {
                    y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.a11y.makeFocusable(y.nextButton),
                    y.a11y.addRole(y.nextButton, "button"),
                    y.a11y.addLabel(y.nextButton, y.params.nextSlideMessage)),
                    y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.a11y.makeFocusable(y.prevButton),
                    y.a11y.addRole(y.prevButton, "button"),
                    y.a11y.addLabel(y.prevButton, y.params.prevSlideMessage)),
                    e(y.container).append(y.a11y.liveRegion)
                },
                initPagination: function() {
                    y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function() {
                        var t = e(this);
                        y.a11y.makeFocusable(t),
                        y.a11y.addRole(t, "button"),
                        y.a11y.addLabel(t, y.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove()
                }
            },
            y.init = function() {
                y.params.loop && y.createLoop(),
                y.updateContainerSize(),
                y.updateSlidesSize(),
                y.updatePagination(),
                y.params.scrollbar && y.scrollbar && (y.scrollbar.set(),
                y.params.scrollbarDraggable && y.scrollbar.enableDraggable()),
                "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(),
                y.effects[y.params.effect].setTranslate()),
                y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit),
                0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(),
                y.lazy && y.params.lazyLoading && (y.lazy.load(),
                y.lazy.initialImageLoaded = !0))),
                y.attachEvents(),
                y.params.observer && y.support.observer && y.initObservers(),
                y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(),
                y.params.autoplay && y.startAutoplay(),
                y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(),
                y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(),
                y.params.hashnav && y.hashnav && y.hashnav.init(),
                y.params.a11y && y.a11y && y.a11y.init(),
                y.emit("onInit", y)
            }
            ,
            y.cleanupStyles = function() {
                y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),
                y.wrapper.removeAttr("style"),
                y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass),
                y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass),
                y.params.prevButton && e(y.params.prevButton).removeClass(y.params.buttonDisabledClass),
                y.params.nextButton && e(y.params.nextButton).removeClass(y.params.buttonDisabledClass),
                y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"),
                y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style"))
            }
            ,
            y.destroy = function(t, e) {
                y.detachEvents(),
                y.stopAutoplay(),
                y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(),
                y.params.loop && y.destroyLoop(),
                e && y.cleanupStyles(),
                y.disconnectObservers(),
                y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(),
                y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(),
                y.params.a11y && y.a11y && y.a11y.destroy(),
                y.emit("onDestroy"),
                !1 !== t && (y = null)
            }
            ,
            y.init(),
            y
        }
    };
    i.prototype = {
        isSafari: function() {
            var t = navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(t) {
            return "[object Array]" === Object.prototype.toString.apply(t)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var t = navigator.userAgent
              , e = t.match(/(Android);?[\s\/]+([\d.]+)?/)
              , i = t.match(/(iPad).*OS\s([\d_]+)/)
              , n = t.match(/(iPod)(.*OS\s([\d_]+))?/)
              , r = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: i || r || n,
                android: e
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var t = document.createElement("div").style;
                return "webkitPerspective"in t || "MozPerspective"in t || "OPerspective"in t || "MsPerspective"in t || "perspective"in t
            }(),
            flexbox: function() {
                for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                    if (e[i]in t)
                        return !0
            }(),
            observer: "MutationObserver"in window || "WebkitMutationObserver"in window
        },
        plugins: {}
    };
    for (var n = ["jQuery", "Zepto", "Dom7"], r = 0; r < n.length; r++)
        window[n[r]] && t(window[n[r]]);
    var s;
    (s = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd"in s.fn || (s.fn.transitionEnd = function(t) {
        function e(s) {
            if (s.target === this)
                for (t.call(this, s),
                i = 0; i < n.length; i++)
                    r.off(n[i], e)
        }
        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
        if (t)
            for (i = 0; i < n.length; i++)
                r.on(n[i], e);
        return this
    }
    ),
    "transform"in s.fn || (s.fn.transform = function(t) {
        for (var e = 0; e < this.length; e++) {
            var i = this[e].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
        }
        return this
    }
    ),
    "transition"in s.fn || (s.fn.transition = function(t) {
        "string" != typeof t && (t += "ms");
        for (var e = 0; e < this.length; e++) {
            var i = this[e].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
        }
        return this
    }
    )),
    window.Swiper = i
}(),
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , r = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        }
          , s = i._internals
          , a = s.isSelector
          , o = s.isArray
          , l = r.prototype = i.to({}, .1, {})
          , c = [];
        r.version = "1.15.0",
        l.constructor = r,
        l.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        l.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        l.updateTo = function(t, e) {
            var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t)
                this.vars[n] = t[n];
            if (this._initted || s)
                if (e)
                    this._initted = !1,
                    s && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var a = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(a, !0, !1)
                } else if (this._time > 0 || s) {
                    this._initted = !1,
                    this._init();
                    for (var o, l = 1 / (1 - r), c = this._firstPT; c; )
                        o = c.s + c.c,
                        c.c *= l,
                        c.s = o - c.c,
                        c = c._next
                }
            return this
        }
        ,
        l.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, a, o, l, h, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, m = this._totalTime, _ = this._cycle, g = this._duration, v = this._rawPrevTime;
            if (t >= d ? (this._totalTime = d,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            r = "onComplete"),
            0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (0 === t || 0 > v || 1e-10 === v) && v !== t && (i = !0,
            v > 1e-10 && (r = "onReverseComplete")),
            this._rawPrevTime = p = !e || t || v === t ? t : 1e-10)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== m || 0 === g && v > 0 && 1e-10 !== v) && (r = "onReverseComplete",
            n = this._reversed),
            0 > t && (this._active = !1,
            0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0),
            this._rawPrevTime = p = !e || t || v === t ? t : 1e-10)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (o = g + this._repeatDelay,
            this._cycle = this._totalTime / o >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--,
            this._time = this._totalTime - this._cycle * o,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time),
            this._time > g ? this._time = g : 0 > this._time && (this._time = 0)),
            this._easeType ? (l = this._time / g,
            h = this._easeType,
            u = this._easePower,
            (1 === h || 3 === h && l >= .5) && (l = 1 - l),
            3 === h && (l *= 2),
            1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l),
            this.ratio = 1 === h ? 1 - l : 2 === h ? l : .5 > this._time / g ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)),
            f !== this._time || i || _ !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = f,
                        this._totalTime = m,
                        this._rawPrevTime = v,
                        this._cycle = _,
                        s.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0),
                0 === m && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))),
                a = this._firstPT; a; )
                    a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                    a = a._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)),
                this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c),
                0 === g && 1e-10 === this._rawPrevTime && 1e-10 !== p && (this._rawPrevTime = 0))
            } else
                m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new r(t,e,n)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, s, l, h, u, p) {
            l = l || 0;
            var d, f, m, _, g = s.delay || 0, v = [], y = function() {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments),
                h.apply(p || this, u || c)
            };
            for (o(t) || ("string" == typeof t && (t = i.selector(t) || t),
            a(t) && (t = n(t))),
            t = t || [],
            0 > l && ((t = n(t)).reverse(),
            l *= -1),
            d = t.length - 1,
            m = 0; d >= m; m++) {
                f = {};
                for (_ in s)
                    f[_] = s[_];
                f.delay = g,
                m === d && h && (f.onComplete = y),
                v[m] = new r(t[m],e,f),
                g += l
            }
            return v
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, n, s, a, o)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, n, s, a, o, l)
        }
        ,
        r.delayedCall = function(t, e, i, n, s) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var h = function(t, e) {
            for (var n = [], r = 0, s = t._first; s; )
                s instanceof i ? n[r++] = s : (e && (n[r++] = s),
                n = n.concat(h(s, e)),
                r = n.length),
                s = s._next;
            return n
        }
          , u = r.getAllTweens = function(e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, n, r) {
            null == i && (i = !0),
            null == n && (n = !0);
            var s, a, o, l = u(0 != r), c = l.length, h = i && n && r;
            for (o = 0; c > o; o++)
                a = l[o],
                (h || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var l, c, h, u, p, d = s.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                a(t) && (t = n(t)),
                o(t))
                    for (u = t.length; --u > -1; )
                        r.killChildTweensOf(t[u], e);
                else {
                    l = [];
                    for (h in d)
                        for (c = d[h].target.parentNode; c; )
                            c === t && (l = l.concat(d[h].tweens)),
                            c = c.parentNode;
                    for (p = l.length,
                    u = 0; p > u; u++)
                        e && l[u].totalTime(l[u].totalDuration()),
                        l[u]._enabled(!1, !1)
                }
            }
        }
        ;
        var p = function(t, i, n, r) {
            i = !1 !== i,
            n = !1 !== n;
            for (var s, a, o = u(r = !1 !== r), l = i && n && r, c = o.length; --c > -1; )
                a = o[c],
                (l || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            p(!1, t, e, i)
        }
        ,
        r.globalTimeScale = function(e) {
            var n = t._rootTimeline
              , r = i.ticker.time;
            return arguments.length ? (e = e || 1e-10,
            n._startTime = r - (r - n._startTime) * n._timeScale / e,
            n = t._rootFramesTimeline,
            r = i.ticker.frame,
            n._startTime = r - (r - n._startTime) * n._timeScale / e,
            n._timeScale = t._rootTimeline._timeScale = e,
            e) : n._timeScale
        }
        ,
        l.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        l.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        l.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        l.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        l.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        l.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        l.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        l.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r)
                i = r[n],
                a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , r = i._internals
          , s = r.isSelector
          , a = r.isArray
          , o = r.lazyTweens
          , l = r.lazyRender
          , c = []
          , h = _gsScope._gsDefine.globals
          , u = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , p = function(t, e, i, n) {
            var r = t._timeline
              , s = r._totalTime;
            !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime),
            e && e.apply(n || r, i || c),
            this._forcingPlayhead && r.seek(s))
        }
          , d = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , f = n.prototype = new e;
        return n.version = "1.15.0",
        f.constructor = n,
        f.kill()._gc = f._forcingPlayhead = !1,
        f.to = function(t, e, n, r) {
            var s = n.repeat && h.TweenMax || i;
            return e ? this.add(new s(t,e,n), r) : this.set(t, n, r)
        }
        ,
        f.from = function(t, e, n, r) {
            return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
        }
        ,
        f.fromTo = function(t, e, n, r, s) {
            var a = r.repeat && h.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }
        ,
        f.staggerTo = function(t, e, r, a, o, l, c, h) {
            var p, f = new n({
                onComplete: l,
                onCompleteParams: c,
                onCompleteScope: h,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t),
            s(t = t || []) && (t = d(t)),
            0 > (a = a || 0) && ((t = d(t)).reverse(),
            a *= -1),
            p = 0; t.length > p; p++)
                r.startAt && (r.startAt = u(r.startAt)),
                f.to(t[p], e, u(r), p * a);
            return this.add(f, o)
        }
        ,
        f.staggerFrom = function(t, e, i, n, r, s, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, r, s, a, o)
        }
        ,
        f.staggerFromTo = function(t, e, i, n, r, s, a, o, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, r, s, a, o, l)
        }
        ,
        f.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }
        ,
        f.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t,0,e), n)
        }
        ,
        n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, a = new n(t), o = a._timeline;
            for (null == e && (e = !0),
            o._remove(a, !0),
            a._startTime = 0,
            a._rawPrevTime = a._time = a._totalTime = o._time,
            r = o._first; r; )
                s = r._next,
                e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                r = s;
            return o.add(a, 0),
            a
        }
        ,
        f.add = function(r, s, o, l) {
            var c, h, u, p, d, f;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)),
            !(r instanceof t)) {
                if (r instanceof Array || r && r.push && a(r)) {
                    for (o = o || "normal",
                    l = l || 0,
                    c = s,
                    h = r.length,
                    u = 0; h > u; u++)
                        a(p = r[u]) && (p = new n({
                            tweens: p
                        })),
                        this.add(p, c),
                        "string" != typeof p && "function" != typeof p && ("sequence" === o ? c = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())),
                        c += l;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, s);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = this,
                f = d.rawTime() > r._startTime; d._timeline; )
                    f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1),
                    d = d._timeline;
            return this
        }
        ,
        f.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array || e && e.push && a(e)) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        f._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        f.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        f.insert = f.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        f.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        f.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        f.addPause = function(t, e, n, r) {
            var s = i.delayedCall(0, p, ["{self}", e, n, r], this);
            return s.data = "isPause",
            this.add(s, t)
        }
        ,
        f.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        f.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        f._parseTimeOrLabel = function(e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && a(r)))
                for (s = r.length; --s > -1; )
                    r[s]instanceof t && r[s].timeline === this && this.remove(r[s]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (-1 === (s = e.indexOf("=")))
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)),
                e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }
        ,
        f.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        f.stop = function() {
            return this.paused(!0)
        }
        ,
        f.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        f.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        f.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, a, h, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, f = this._timeScale, m = this._paused;
            if (t >= u ? (this._totalTime = this._time = u,
            this._reversed || this._hasPausedChild() || (r = !0,
            a = "onComplete",
            0 === this._duration && (0 === t || 0 > this._rawPrevTime || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0,
            this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
            t = u + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0,
            (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
            r = this._reversed),
            0 > t ? (this._active = !1,
            this._rawPrevTime >= 0 && this._first && (h = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
            t = 0,
            this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t,
            this._time !== p && this._first || i || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0),
                0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)),
                this._time >= p)
                    for (n = this._first; n && (s = n._next,
                    !this._paused || m); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = s;
                else
                    for (n = this._last; n && (s = n._prev,
                    !this._paused || m); )
                        (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = s;
                this._onUpdate && (e || (o.length && l(),
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))),
                a && (this._gc || (d === this._startTime || f !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (o.length && l(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || c)))
            }
        }
        ,
        f._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        f.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], a = this._first, o = 0; a; )
                r > a._startTime || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== n && (s[o++] = a),
                !1 !== t && (s = s.concat(a.getChildren(!0, e, n)),
                o = s.length))),
                a = a._next;
            return s
        }
        ,
        f.getTweensOf = function(t, e) {
            var n, r, s = this._gc, a = [], o = 0;
            for (s && this._enabled(!0, !0),
            r = (n = i.getTweensOf(t)).length; --r > -1; )
                (n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
            return s && this._enabled(!1, !0),
            a
        }
        ,
        f.recent = function() {
            return this._recent
        }
        ,
        f._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        f.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (n in s)
                    s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }
        ,
        f._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(t, e) && (r = !0);
            return r
        }
        ,
        f.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        f.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        f._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        f.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        f.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        f.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                        e = r._prev,
                        r._dirty && r.totalDuration(),
                        r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime,
                        0 > r._startTime && !r._paused && (n -= r._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        s = 0),
                        (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i),
                        r = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        }
        ,
        f.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        f.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        n
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , r = []
          , s = e._internals
          , a = s.lazyTweens
          , o = s.lazyRender
          , l = new i(null,null,1,0)
          , c = n.prototype = new t;
        return c.constructor = n,
        c.kill()._gc = !1,
        n.version = "1.15.0",
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        c.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }
        ,
        c.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }
        ,
        c.tweenTo = function(t, i) {
            var n, s, a, o = {
                ease: l,
                overwrite: (i = i || {}).delay ? 2 : 1,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            a = new e(this,n,o),
            o.onStart = function() {
                a.target.paused(!0),
                a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
            }
            ,
            a
        }
        ,
        c.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, l, c, h, u, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, f = this._time, m = this._totalTime, _ = this._startTime, g = this._timeScale, v = this._rawPrevTime, y = this._paused, w = this._cycle;
            if (t >= p ? (this._locked || (this._totalTime = p,
            this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (s = !0,
            c = "onComplete",
            0 === this._duration && (0 === t || 0 > v || 1e-10 === v) && v !== t && this._first && (h = !0,
            v > 1e-10 && (c = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10,
            this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d,
            t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0),
            this._time = 0,
            (0 !== f || 0 === d && 1e-10 !== v && (v > 0 || 0 > t && v >= 0) && !this._locked) && (c = "onReverseComplete",
            s = this._reversed),
            0 > t ? (this._active = !1,
            v >= 0 && this._first && (h = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10,
            t = 0,
            this._initted || (h = !0))) : (0 === d && 0 > v && (h = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (u = d + this._repeatDelay,
            this._cycle = this._totalTime / u >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--,
            this._time = this._totalTime - this._cycle * u,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
            this._time > d ? (this._time = d,
            t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))),
            this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 != (1 & w)
                  , b = x === (this._yoyo && 0 != (1 & this._cycle))
                  , T = this._totalTime
                  , S = this._cycle
                  , P = this._rawPrevTime
                  , C = this._time;
                if (this._totalTime = w * d,
                w > this._cycle ? x = !x : this._totalTime += d,
                this._time = f,
                this._rawPrevTime = 0 === d ? v - 1e-4 : v,
                this._cycle = w,
                this._locked = !0,
                f = x ? 0 : d,
                this.render(f, e, 0 === d),
                e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r),
                b && (f = x ? d + 1e-4 : -1e-4,
                this.render(f, !0, !1)),
                this._locked = !1,
                this._paused && !y)
                    return;
                this._time = C,
                this._totalTime = T,
                this._cycle = S,
                this._rawPrevTime = P
            }
            if (this._time !== f && this._first || i || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0),
                0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)),
                this._time >= f)
                    for (n = this._first; n && (l = n._next,
                    !this._paused || y); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                else
                    for (n = this._last; n && (l = n._prev,
                    !this._paused || y); )
                        (n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                this._onUpdate && (e || (a.length && o(),
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))),
                c && (this._locked || this._gc || (_ === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (a.length && o(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || r)))
            } else
                m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))
        }
        ,
        c.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, r, s = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
            for (n = 0; l > n; n++)
                (r = a[n]).isActive() && (s[o++] = r);
            return s
        }
        ,
        c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }
        ,
        c.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        c.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }, !0),
    function() {
        var t = 180 / Math.PI
          , e = []
          , i = []
          , n = []
          , r = {}
          , s = _gsScope._gsDefine.globals
          , a = function(t, e, i, n) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = n,
            this.da = n - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , o = function(t, e, i, n) {
            var r = {
                a: t
            }
              , s = {}
              , a = {}
              , o = {
                c: n
            }
              , l = (t + e) / 2
              , c = (e + i) / 2
              , h = (i + n) / 2
              , u = (l + c) / 2
              , p = (c + h) / 2
              , d = (p - u) / 8;
            return r.b = l + (t - l) / 4,
            s.b = u + d,
            r.c = s.a = (r.b + s.b) / 2,
            s.c = a.a = (u + p) / 2,
            a.b = p - d,
            o.b = h + (n - h) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, s, a, o]
        }
          , l = function(t, r, s, a, l) {
            var c, h, u, p, d, f, m, _, g, v, y, w, x, b = t.length - 1, T = 0, S = t[0].a;
            for (c = 0; b > c; c++)
                d = t[T],
                h = d.a,
                u = d.d,
                p = t[T + 1].d,
                l ? (y = e[c],
                w = i[c],
                x = .25 * (w + y) * r / (a ? .5 : n[c] || .5),
                f = u - (u - h) * (a ? .5 * r : 0 !== y ? x / y : 0),
                m = u + (p - u) * (a ? .5 * r : 0 !== w ? x / w : 0),
                _ = u - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = u - .5 * (u - h) * r,
                m = u + .5 * (p - u) * r,
                _ = u - (f + m) / 2),
                f += _,
                m += _,
                d.c = g = f,
                d.b = 0 !== c ? S : S = d.a + .6 * (d.c - d.a),
                d.da = u - h,
                d.ca = g - h,
                d.ba = S - h,
                s ? (v = o(h, S, g, u),
                t.splice(T, 1, v[0], v[1], v[2], v[3]),
                T += 4) : T++,
                S = m;
            (d = t[T]).b = S,
            d.c = S + .4 * (d.d - S),
            d.da = d.d - d.a,
            d.ca = d.c - d.a,
            d.ba = S - d.a,
            s && (v = o(d.a, S, d.c, d.d),
            t.splice(T, 1, v[0], v[1], v[2], v[3]))
        }
          , c = function(t, n, r, s) {
            var o, l, c, h, u, p, d = [];
            if (s)
                for (t = [s].concat(t),
                l = t.length; --l > -1; )
                    "string" == typeof (p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
            if (0 > (o = t.length - 2))
                return d[0] = new a(t[0][n],0,0,t[-1 > o ? 0 : 1][n]),
                d;
            for (l = 0; o > l; l++)
                c = t[l][n],
                h = t[l + 1][n],
                d[l] = new a(c,0,0,h),
                r && (u = t[l + 2][n],
                e[l] = (e[l] || 0) + (h - c) * (h - c),
                i[l] = (i[l] || 0) + (u - h) * (u - h));
            return d[l] = new a(t[l][n],0,0,t[l + 1][n]),
            d
        }
          , h = function(t, s, a, o, h, u) {
            var p, d, f, m, _, g, v, y, w = {}, x = [], b = u || t[0];
            h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            null == s && (s = 1);
            for (d in t[0])
                x.push(d);
            if (t.length > 1) {
                for (y = t[t.length - 1],
                v = !0,
                p = x.length; --p > -1; )
                    if (d = x[p],
                    Math.abs(b[d] - y[d]) > .05) {
                        v = !1;
                        break
                    }
                v && (t = t.concat(),
                u && t.unshift(u),
                t.push(t[1]),
                u = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0,
            p = x.length; --p > -1; )
                d = x[p],
                r[d] = -1 !== h.indexOf("," + d + ","),
                w[d] = c(t, d, r[d], u);
            for (p = e.length; --p > -1; )
                e[p] = Math.sqrt(e[p]),
                i[p] = Math.sqrt(i[p]);
            if (!o) {
                for (p = x.length; --p > -1; )
                    if (r[d])
                        for (f = w[x[p]],
                        g = f.length - 1,
                        m = 0; g > m; m++)
                            _ = f[m + 1].da / i[m] + f[m].da / e[m],
                            n[m] = (n[m] || 0) + _ * _;
                for (p = n.length; --p > -1; )
                    n[p] = Math.sqrt(n[p])
            }
            for (p = x.length,
            m = a ? 4 : 1; --p > -1; )
                d = x[p],
                f = w[d],
                l(f, s, a, o, r[d]),
                v && (f.splice(0, m),
                f.splice(f.length - m, m));
            return w
        }
          , u = function(t, e, i) {
            for (var n, r, s, a, o, l, c, h, u, p, d, f = 1 / i, m = t.length; --m > -1; )
                for (p = t[m],
                s = p.a,
                a = p.d - s,
                o = p.c - s,
                l = p.b - s,
                n = r = 0,
                h = 1; i >= h; h++)
                    c = f * h,
                    u = 1 - c,
                    n = r - (r = (c * c * a + 3 * u * (c * o + u * l)) * c),
                    d = m * i + h - 1,
                    e[d] = (e[d] || 0) + n * n
        }
          , p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, l, c = e.values || [], p = {}, d = c[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null;
                for (n in d)
                    this._props.push(n);
                for (s = this._props.length; --s > -1; )
                    n = this._props[s],
                    this._overwriteProps.push(n),
                    r = this._func[n] = "function" == typeof t[n],
                    p[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                    l || p[n] !== c[0][n] && (l = p);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(c, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                    var n, r, s, o, l, c, h, u, p, d, f, m = {}, _ = "cubic" === (e = e || "soft") ? 3 : 2, g = "soft" === e, v = [];
                    if (g && i && (t = [i].concat(t)),
                    null == t || _ + 1 > t.length)
                        throw "invalid Bezier data";
                    for (p in t[0])
                        v.push(p);
                    for (c = v.length; --c > -1; ) {
                        for (m[p = v[c]] = l = [],
                        d = 0,
                        u = t.length,
                        h = 0; u > h; h++)
                            n = null == i ? t[h][p] : "string" == typeof (f = t[h][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                            g && h > 1 && u - 1 > h && (l[d++] = (n + l[d - 2]) / 2),
                            l[d++] = n;
                        for (u = d - _ + 1,
                        d = 0,
                        h = 0; u > h; h += _)
                            n = l[h],
                            r = l[h + 1],
                            s = l[h + 2],
                            o = 2 === _ ? 0 : l[h + 3],
                            l[d++] = f = 3 === _ ? new a(n,r,s,o) : new a(n,(2 * r + n) / 3,(2 * r + s) / 3,s);
                        l.length = d
                    }
                    return m
                }(c, e.type, p),
                this._segCount = this._beziers[n].length,
                this._timeRes) {
                    var m = function(t, e) {
                        var i, n, r, s, a = [], o = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, p = [], d = [];
                        for (i in t)
                            u(t[i], a, e);
                        for (r = a.length,
                        n = 0; r > n; n++)
                            l += Math.sqrt(a[n]),
                            s = n % e,
                            d[s] = l,
                            s === h && (c += l,
                            s = n / e >> 0,
                            p[s] = d,
                            o[s] = c,
                            l = 0,
                            d = []);
                        return {
                            length: c,
                            lengths: o,
                            segments: p
                        }
                    }(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [],
                    f[0]instanceof Array || (this._autoRotate = f = [f]),
                    s = f.length; --s > -1; ) {
                        for (o = 0; 3 > o; o++)
                            n = f[s][o],
                            this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = f[s][2],
                        this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, n, r, s, a, o, l, c, h, u, p = this._segCount, d = this._func, f = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    r = this._li,
                    e > this._l2 && p - 1 > r) {
                        for (c = p - 1; c > r && e >= (this._l2 = h[++r]); )
                            ;
                        this._l1 = h[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = h[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++,
                        this._l2 = h[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r,
                    e -= this._l1,
                    r = this._si,
                    e > this._s2 && u.length - 1 > r) {
                        for (c = u.length - 1; c > r && e >= (this._s2 = u[++r]); )
                            ;
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                    o = (e - i * (1 / p)) * p;
                for (n = 1 - o,
                r = this._props.length; --r > -1; )
                    s = this._props[r],
                    a = this._beziers[s][i],
                    l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a,
                    this._round[s] && (l = Math.round(l)),
                    d[s] ? f[s](l) : f[s] = l;
                if (this._autoRotate) {
                    var _, g, v, y, w, x, b, T = this._autoRotate;
                    for (r = T.length; --r > -1; )
                        s = T[r][2],
                        x = T[r][3] || 0,
                        b = !0 === T[r][4] ? 1 : t,
                        a = this._beziers[T[r][0]],
                        _ = this._beziers[T[r][1]],
                        a && _ && (a = a[i],
                        _ = _[i],
                        g = a.a + (a.b - a.a) * o,
                        y = a.b + (a.c - a.b) * o,
                        g += (y - g) * o,
                        y += (a.c + (a.d - a.c) * o - y) * o,
                        v = _.a + (_.b - _.a) * o,
                        w = _.b + (_.c - _.b) * o,
                        v += (w - v) * o,
                        w += (_.c + (_.d - _.c) * o - w) * o,
                        l = m ? Math.atan2(w - v, y - g) * b + x : this._initialRotations[r],
                        d[s] ? f[s](l) : f[s] = l)
                }
            }
        })
          , d = p.prototype;
        p.bezierThrough = h,
        p.cubicToQuadratic = o,
        p._autoCSS = !0,
        p.quadraticToCubic = function(t, e, i) {
            return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        p._cssRegister = function() {
            var t = s.CSSPlugin;
            if (t) {
                var e = t._internals
                  , i = e._parseToProxy
                  , n = e._setPluginRatio
                  , r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, s, a, o, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new p;
                        var c, h, u, d = e.values, f = d.length - 1, m = [], _ = {};
                        if (0 > f)
                            return o;
                        for (c = 0; f >= c; c++)
                            u = i(t, d[c], a, o, l, f !== c),
                            m[c] = u.end;
                        for (h in e)
                            _[h] = e[h];
                        return _.values = m,
                        o = new r(t,"bezier",0,0,u.pt,2),
                        o.data = u,
                        o.plugin = l,
                        o.setRatio = n,
                        0 === _.autoRotate && (_.autoRotate = !0),
                        !_.autoRotate || _.autoRotate instanceof Array || (c = !0 === _.autoRotate ? 0 : Number(_.autoRotate),
                        _.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x && [["x", "y", "rotation", c, !1]]),
                        _.autoRotate && (a._transform || a._enableTransforms(!1),
                        u.autoRotate = a._target._gsTransform),
                        l._onInitTween(u.proxy, _, a._tween),
                        o
                    }
                })
            }
        }
        ,
        d._roundProps = function(t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1; )
                (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }
        ,
        d._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = n.length; --i > -1; )
                        n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, r, s, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, c = a.prototype = new t("css");
        c.constructor = a,
        a.version = "1.15.0",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        c = "px",
        a.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var h, u, p, d, f, m, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, b = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, P = /([A-Z])/g, C = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function(t, e) {
            return e.toUpperCase()
        }, D = /(?:Left|Right|Width)/i, O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, A = /,(?=[^\)]*(?:\(|$))/gi, L = Math.PI / 180, R = 180 / Math.PI, N = {}, j = document, z = function(t) {
            return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
        }, I = z("div"), B = z("img"), H = a._internals = {
            _specialProps: l
        }, U = navigator.userAgent, F = function() {
            var t = U.indexOf("Android")
              , e = z("a");
            return p = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === t || Number(U.substr(t + 8, 1)) > 3),
            f = p && 6 > Number(U.substr(U.indexOf("Version/") + 8, 1)),
            d = -1 !== U.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (m = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), X = function(t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, q = function(t) {
            window.console && console.log(t)
        }, Q = "", Y = "", W = function(t, e) {
            var i, n, r = (e = e || I).style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === r[i[n] + t]; )
                ;
            return n >= 0 ? (Y = 3 === n ? "ms" : i[n],
            Q = "-" + Y.toLowerCase() + "-",
            Y + t) : null
        }, V = j.defaultView ? j.defaultView.getComputedStyle : function() {}
        , G = a.getStyle = function(t, e, i, n, r) {
            var s;
            return F || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || V(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]),
            null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : X(t)
        }
        , $ = H.convertToPixels = function(t, i, n, r, s) {
            if ("px" === r || !r)
                return n;
            if ("auto" === r || !n)
                return 0;
            var o, l, c, h = D.test(i), u = t, p = I.style, d = 0 > n;
            if (d && (n = -n),
            "%" === r && -1 !== i.indexOf("border"))
                o = n / 100 * (h ? t.clientWidth : t.clientHeight);
            else {
                if (p.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;",
                "%" !== r && u.appendChild)
                    p[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                else {
                    if (u = t.parentNode || j.body,
                    l = u._gsCache,
                    c = e.ticker.frame,
                    l && h && l.time === c)
                        return l.width * n / 100;
                    p[h ? "width" : "height"] = n + r
                }
                u.appendChild(I),
                o = parseFloat(I[h ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(I),
                h && "%" === r && !1 !== a.cacheWidths && (l = u._gsCache = u._gsCache || {},
                l.time = c,
                l.width = o / n * 100),
                0 !== o || s || (o = $(t, i, n, r, !0))
            }
            return d ? -o : o
        }
        , K = H.calculateOffset = function(t, e, i) {
            if ("absolute" !== G(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , r = G(t, "margin" + n, i);
            return t["offset" + n] - ($(t, e, parseFloat(r), r.replace(w, "")) || 0)
        }
        , Z = function(t, e) {
            var i, n, r = {};
            if (e = e || V(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        r[e[i].replace(C, k)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === r[i] && (r[i.replace(C, k)] = e[i]);
            return F || (r.opacity = X(t)),
            n = At(t, e, !1),
            r.rotation = n.rotation,
            r.skewX = n.skewX,
            r.scaleX = n.scaleX,
            r.scaleY = n.scaleY,
            r.x = n.x,
            r.y = n.y,
            Pt && (r.z = n.z,
            r.rotationX = n.rotationX,
            r.rotationY = n.rotationY,
            r.scaleZ = n.scaleZ),
            r.filters && delete r.filters,
            r
        }, J = function(t, e, i, n, r) {
            var s, a, o, l = {}, c = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(y, "") ? s : 0 : K(t, a),
                void 0 !== c[a] && (o = new dt(c,a,c[a],o)));
            if (n)
                for (a in n)
                    "className" !== a && (l[a] = n[a]);
            return {
                difs: l,
                firstMPT: o
            }
        }, tt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, et = ["marginLeft", "marginRight", "marginTop", "marginBottom"], it = function(t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = tt[e]
              , s = r.length;
            for (i = i || V(t, null); --s > -1; )
                n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0,
                n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0;
            return n
        }, nt = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" ")
              , n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            e && (e.oxp = -1 !== n.indexOf("%"),
            e.oyp = -1 !== r.indexOf("%"),
            e.oxr = "=" === n.charAt(1),
            e.oyr = "=" === r.charAt(1),
            e.ox = parseFloat(n.replace(y, "")),
            e.oy = parseFloat(r.replace(y, ""))),
            n + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, rt = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, st = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, at = function(t, e, i, n) {
            var r, s, a, o;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360,
            s = t.split("_"),
            a = Number(s[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : R) - ("=" === t.charAt(1) ? 0 : e),
            s.length && (n && (n[i] = e + a),
            -1 !== t.indexOf("short") && (a %= r) != a % (r / 2) && (a = 0 > a ? a + r : a - r),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)),
            o = e + a),
            1e-6 > o && o > -1e-6 && (o = 0),
            o
        }, ot = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, lt = function(t, e, i) {
            return 0 | 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, ct = a.parseColor = function(t) {
            var e, i, n, r, s, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
            ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1),
            i = t.charAt(2),
            n = t.charAt(3),
            t = "#" + e + e + i + i + n + n),
            t = parseInt(t.substr(1), 16),
            [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(_),
            r = Number(t[0]) % 360 / 360,
            s = Number(t[1]) / 100,
            a = Number(t[2]) / 100,
            i = .5 >= a ? a * (s + 1) : a + s - a * s,
            e = 2 * a - i,
            t.length > 3 && (t[3] = Number(t[3])),
            t[0] = lt(r + 1 / 3, e, i),
            t[1] = lt(r, e, i),
            t[2] = lt(r - 1 / 3, e, i),
            t) : (t = t.match(_) || ot.transparent,
            t[0] = Number(t[0]),
            t[1] = Number(t[1]),
            t[2] = Number(t[2]),
            t.length > 3 && (t[3] = Number(t[3])),
            t)) : ot.black
        }
        , ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (c in ot)
            ht += "|" + c + "\\b";
        ht = RegExp(ht + ")", "gi");
        var ut = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var r, s = e ? (t.match(ht) || [""])[0] : "", a = t.split(s).join("").match(v) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", c = -1 !== t.indexOf(" ") ? " " : ",", h = a.length, u = h > 0 ? a[0].replace(_, "") : "";
            return h ? r = e ? function(t) {
                var e, p, d, f;
                if ("number" == typeof t)
                    t += u;
                else if (n && A.test(t)) {
                    for (f = t.replace(A, "|").split("|"),
                    d = 0; f.length > d; d++)
                        f[d] = r(f[d]);
                    return f.join(",")
                }
                if (e = (t.match(ht) || [s])[0],
                p = t.split(e).join("").match(v) || [],
                d = p.length,
                h > d--)
                    for (; h > ++d; )
                        p[d] = i ? p[0 | (d - 1) / 2] : a[d];
                return o + p.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, s, p;
                if ("number" == typeof t)
                    t += u;
                else if (n && A.test(t)) {
                    for (s = t.replace(A, "|").split("|"),
                    p = 0; s.length > p; p++)
                        s[p] = r(s[p]);
                    return s.join(",")
                }
                if (e = t.match(v) || [],
                p = e.length,
                h > p--)
                    for (; h > ++p; )
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(c) + l
            }
            : function(t) {
                return t
            }
        }
          , pt = function(t) {
            return t = t.split(","),
            function(e, i, n, r, s, a, o) {
                var l, c = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++)
                    o[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return r.parse(e, o, s, a)
            }
        }
          , dt = (H._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s = this.data, a = s.proxy, o = s.firstMPT; o; )
                e = a[o.v],
                o.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                o.t[o.p] = e,
                o = o._next;
            if (s.autoRotate && (s.autoRotate.rotation = a.rotation),
            1 === t)
                for (o = s.firstMPT; o; ) {
                    if ((i = o.t).type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            n = 1; i.l > n; n++)
                                r += i["xn" + n] + i["xs" + (n + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }
        ,
        function(t, e, i, n, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , ft = (H._parseToProxy = function(t, e, i, n, r, s) {
            var a, o, l, c, h, u = n, p = {}, d = {}, f = i._transform, m = N;
            for (i._transform = null,
            N = e,
            n = h = i.parse(t, e, n, r),
            N = m,
            s && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); n && n !== u; ) {
                if (1 >= n.type && (o = n.p,
                d[o] = n.s + n.c,
                p[o] = n.s,
                s || (c = new dt(n,"s",o,c,n.r),
                n.c = 0),
                1 === n.type))
                    for (a = n.l; --a > 0; )
                        l = "xn" + a,
                        o = n.p + "_" + l,
                        d[o] = n.data[l],
                        p[o] = n[l],
                        s || (c = new dt(n,l,o,c,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: p,
                end: d,
                firstMPT: c,
                pt: h
            }
        }
        ,
        H.CSSPropTween = function(t, e, n, r, a, o, l, c, h, u, p) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = r,
            this.n = l || e,
            t instanceof ft || s.push(this.n),
            this.r = c,
            this.type = o || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === u ? n : u,
            this.e = void 0 === p ? n + r : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , mt = a.parseComplex = function(t, e, i, n, r, s, a, o, l, c) {
            i = i || s || "",
            a = new ft(t,e,0,0,a,c ? 2 : 1,null,!1,o,i,n),
            n += "";
            var u, p, d, f, m, v, y, w, x, b, T, P, C = i.split(", ").join(",").split(" "), E = n.split(", ").join(",").split(" "), k = C.length, D = !1 !== h;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(A, ", ").split(" "),
            E = E.join(" ").replace(A, ", ").split(" "),
            k = C.length),
            k !== E.length && (C = (s || "").split(" "),
            k = C.length),
            a.plugin = l,
            a.setRatio = c,
            u = 0; k > u; u++)
                if (f = C[u],
                m = E[u],
                (w = parseFloat(f)) || 0 === w)
                    a.appendXtra("", w, rt(m, w), m.replace(g, ""), D && -1 !== m.indexOf("px"), !0);
                else if (r && ("#" === f.charAt(0) || ot[f] || S.test(f)))
                    P = "," === m.charAt(m.length - 1) ? ")," : ")",
                    f = ct(f),
                    m = ct(m),
                    (x = f.length + m.length > 6) && !F && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(E[u]).join("transparent")) : (F || (x = !1),
                    a.appendXtra(x ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], x ? "," : P, !0),
                    x && (f = 4 > f.length ? 1 : f[3],
                    a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, P, !1)));
                else if (v = f.match(_)) {
                    if (!(y = m.match(g)) || y.length !== v.length)
                        return a;
                    for (d = 0,
                    p = 0; v.length > p; p++)
                        T = v[p],
                        b = f.indexOf(T, d),
                        a.appendXtra(f.substr(d, b - d), Number(T), rt(y[p], T), "", D && "px" === f.substr(b + T.length, 2), 0 === p),
                        d = b + T.length;
                    a["xs" + a.l] += f.substr(d)
                } else
                    a["xs" + a.l] += a.l ? " " + f : f;
            if (-1 !== n.indexOf("=") && a.data) {
                for (P = a.xs0 + a.data.s,
                u = 1; a.l > u; u++)
                    P += a["xs" + u] + a.data["xn" + u];
                a.e = P + a["xs" + u]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , _t = 9;
        for ((c = ft.prototype).l = c.pr = 0; --_t > 0; )
            c["xn" + _t] = 0,
            c["xs" + _t] = "";
        c.xs0 = "",
        c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
        c.appendXtra = function(t, e, i, n, r, s) {
            var a = this.l;
            return this["xs" + a] += s && a ? " " + t : t || "",
            i || 0 === a || this.plugin ? (this.l++,
            this.type = this.setRatio ? 2 : 1,
            this["xs" + this.l] = n || "",
            a > 0 ? (this.data["xn" + a] = e + i,
            this.rxp["xn" + a] = r,
            this["xn" + a] = e,
            this.plugin || (this.xfirst = new ft(this,"xn" + a,e,i,this.xfirst || this,0,this.n,r,this.pr),
            this.xfirst.xs0 = 0),
            this) : (this.data = {
                s: e + i
            },
            this.rxp = {},
            this.s = e,
            this.c = i,
            this.r = r,
            this)) : (this["xs" + a] += e + (n || ""),
            this)
        }
        ;
        var gt = function(t, e) {
            e = e || {},
            this.p = e.prefix ? W(t) || t : t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , vt = H._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, r = t.split(","), s = e.defaultValue;
            for (i = i || [s],
            n = 0; r.length > n; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || s,
                new gt(r[n],e)
        }
          , yt = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                vt(t, {
                    parser: function(t, i, n, r, s, a, c) {
                        var h = o.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[n].parse(t, i, n, r, s, a, c)) : (q("Error: " + e + " js file not loaded."),
                        s)
                    }
                })
            }
        };
        (c = gt.prototype).parseComplex = function(t, e, i, n, r, s) {
            var a, o, l, c, h, u, p = this.keyword;
            if (this.multi && (A.test(i) || A.test(e) ? (o = e.replace(A, "|").split("|"),
            l = i.replace(A, "|").split("|")) : p && (o = [e],
            l = [i])),
            l) {
                for (c = l.length > o.length ? l.length : o.length,
                a = 0; c > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = l[a] = l[a] || this.dflt,
                    p && (h = e.indexOf(p),
                    u = i.indexOf(p),
                    h !== u && (i = -1 === u ? l : o,
                    i[a] += " " + p));
                e = o.join(", "),
                i = l.join(", ")
            }
            return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }
        ,
        c.parse = function(t, e, i, n, s, a) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            vt(t, {
                parser: function(t, n, r, s, a, o) {
                    var l = new ft(t,r,0,0,a,2,r,!1,i);
                    return l.plugin = o,
                    l.setRatio = e(t, n, s._tween, r),
                    l
                },
                priority: i
            })
        }
        ;
        var wt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), bt = W("transform"), Tt = Q + "transform", St = W("transformOrigin"), Pt = null !== W("perspective"), Ct = H.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === a.defaultForce3D || !Pt) && (a.defaultForce3D || "auto")
        }
        , Et = window.SVGElement, kt = function(t, e, i) {
            var n, r = j.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
            for (n in i)
                r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r),
            r
        }, Dt = document.documentElement, Ot = function() {
            var t, e, i, n = m || /Android/i.test(U) && !window.chrome;
            return j.createElementNS && !n && (t = kt("svg", Dt),
            e = kt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }),
            i = e.getBoundingClientRect().width,
            e.style[St] = "50% 50%",
            e.style[bt] = "scaleX(0.5)",
            n = i === e.getBoundingClientRect().width,
            Dt.removeChild(t)),
            n
        }(), Mt = function(t, e, i) {
            var n = t.getBBox();
            e = nt(e).split(" "),
            i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x,
            i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
        }, At = H.getTransform = function(t, e, i, n) {
            if (t._gsTransform && i && !n)
                return t._gsTransform;
            var s, o, l, c, h, u, p, d, f, m, _ = i ? t._gsTransform || new Ct : new Ct, g = 0 > _.scaleX, v = Pt ? parseFloat(G(t, St, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0, y = parseFloat(a.defaultTransformPerspective) || 0;
            if (bt ? o = G(t, Tt, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O),
            o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), _.x || 0, _.y || 0].join(",") : ""),
            s = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o,
            _.svg = !!(Et && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)),
            _.svg && (Mt(t, G(t, St, r, !1, "50% 50%") + "", _),
            wt = a.useSVGTransformAttr || Ot,
            l = t.getAttribute("transform"),
            s && l && -1 !== l.indexOf("matrix") && (o = l,
            s = 0)),
            !s) {
                for (c = (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; --c > -1; )
                    h = Number(l[c]),
                    l[c] = (u = h - (h |= 0)) ? (0 | 1e5 * u + (0 > u ? -.5 : .5)) / 1e5 + h : h;
                if (16 === l.length) {
                    var w = l[8]
                      , x = l[9]
                      , b = l[10]
                      , T = l[12]
                      , S = l[13]
                      , P = l[14];
                    _.zOrigin && (P = -_.zOrigin,
                    T = w * P - l[12],
                    S = x * P - l[13],
                    P = b * P + _.zOrigin - l[14]);
                    var C, E, k, D, M, A = l[0], L = l[1], N = l[2], j = l[3], z = l[4], I = l[5], B = l[6], H = l[7], U = l[11], F = Math.atan2(L, I);
                    _.rotation = F * R,
                    F && (D = Math.cos(-F),
                    M = Math.sin(-F),
                    A = A * D + z * M,
                    E = L * D + I * M,
                    I = L * -M + I * D,
                    B = N * -M + B * D,
                    L = E),
                    F = Math.atan2(w, A),
                    _.rotationY = F * R,
                    F && (D = Math.cos(-F),
                    M = Math.sin(-F),
                    C = A * D - w * M,
                    E = L * D - x * M,
                    k = N * D - b * M,
                    x = L * M + x * D,
                    b = N * M + b * D,
                    U = j * M + U * D,
                    A = C,
                    L = E,
                    N = k),
                    F = Math.atan2(B, b),
                    _.rotationX = F * R,
                    F && (D = Math.cos(-F),
                    M = Math.sin(-F),
                    C = z * D + w * M,
                    E = I * D + x * M,
                    k = B * D + b * M,
                    w = z * -M + w * D,
                    x = I * -M + x * D,
                    b = B * -M + b * D,
                    U = H * -M + U * D,
                    z = C,
                    I = E,
                    B = k),
                    _.scaleX = (0 | 1e5 * Math.sqrt(A * A + L * L) + .5) / 1e5,
                    _.scaleY = (0 | 1e5 * Math.sqrt(I * I + x * x) + .5) / 1e5,
                    _.scaleZ = (0 | 1e5 * Math.sqrt(B * B + b * b) + .5) / 1e5,
                    _.skewX = 0,
                    _.perspective = U ? 1 / (0 > U ? -U : U) : 0,
                    _.x = T,
                    _.y = S,
                    _.z = P
                } else if (!(Pt && !n && l.length && _.x === l[4] && _.y === l[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === G(t, "display", e))) {
                    var X = l.length >= 6
                      , q = X ? l[0] : 1
                      , Q = l[1] || 0
                      , Y = l[2] || 0
                      , W = X ? l[3] : 1;
                    _.x = l[4] || 0,
                    _.y = l[5] || 0,
                    p = Math.sqrt(q * q + Q * Q),
                    d = Math.sqrt(W * W + Y * Y),
                    f = q || Q ? Math.atan2(Q, q) * R : _.rotation || 0,
                    m = Y || W ? Math.atan2(Y, W) * R + f : _.skewX || 0,
                    Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1,
                    m += 0 >= f ? 180 : -180,
                    f += 0 >= f ? 180 : -180) : (d *= -1,
                    m += 0 >= m ? 180 : -180)),
                    _.scaleX = p,
                    _.scaleY = d,
                    _.rotation = f,
                    _.skewX = m,
                    Pt && (_.rotationX = _.rotationY = _.z = 0,
                    _.perspective = y,
                    _.scaleZ = 1)
                }
                _.zOrigin = v;
                for (c in _)
                    2e-5 > _[c] && _[c] > -2e-5 && (_[c] = 0)
            }
            return i && (t._gsTransform = _),
            _
        }
        , Lt = function(t) {
            var e, i, n = this.data, r = -n.rotation * L, s = r + n.skewX * L, a = (0 | Math.cos(r) * n.scaleX * 1e5) / 1e5, o = (0 | Math.sin(r) * n.scaleX * 1e5) / 1e5, l = (0 | Math.sin(s) * -n.scaleY * 1e5) / 1e5, c = (0 | Math.cos(s) * n.scaleY * 1e5) / 1e5, h = this.t.style, u = this.t.currentStyle;
            if (u) {
                i = o,
                o = -l,
                l = -i,
                e = u.filter,
                h.filter = "";
                var p, d, f = this.t.offsetWidth, _ = this.t.offsetHeight, g = "absolute" !== u.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + c, y = n.x + f * n.xPercent / 100, b = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? .01 * f * n.ox : n.ox) - f / 2,
                d = (n.oyp ? .01 * _ * n.oy : n.oy) - _ / 2,
                y += p - (p * a + d * o),
                b += d - (p * l + d * c)),
                g ? (p = f / 2,
                d = _ / 2,
                v += ", Dx=" + (p - (p * a + d * o) + y) + ", Dy=" + (d - (p * l + d * c) + b) + ")") : v += ", sizingMethod='auto expand')",
                h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, v) : v + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === o && 0 === l && 1 === c && (g && -1 === v.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")),
                !g) {
                    var T, S, P, C = 8 > m ? 1 : -1;
                    for (p = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((f - ((0 > a ? -a : a) * f + (0 > o ? -o : o) * _)) / 2 + y),
                    n.ieOffsetY = Math.round((_ - ((0 > c ? -c : c) * _ + (0 > l ? -l : l) * f)) / 2 + b),
                    _t = 0; 4 > _t; _t++)
                        S = et[_t],
                        T = u[S],
                        i = -1 !== T.indexOf("px") ? parseFloat(T) : $(this.t, S, parseFloat(T), T.replace(w, "")) || 0,
                        P = i !== n[S] ? 2 > _t ? -n.ieOffsetX : -n.ieOffsetY : 2 > _t ? p - n.ieOffsetX : d - n.ieOffsetY,
                        h[S] = (n[S] = Math.round(i - P * (0 === _t || 2 === _t ? 1 : C))) + "px"
                }
            }
        }, Rt = H.set3DTransformRatio = function(t) {
            var e, i, n, r, s, a, o, l, c, h, u, p, f, m, _, g, v, y, w, x, b, T, S, P = this.data, C = this.t.style, E = P.rotation * L, k = P.scaleX, D = P.scaleY, O = P.scaleZ, M = P.x, A = P.y, R = P.z, N = P.perspective;
            if (1 !== t && 0 !== t || "auto" !== P.force3D || P.rotationY || P.rotationX || 1 !== O || N || R) {
                if (d) {
                    1e-4 > k && k > -1e-4 && (k = O = 2e-5),
                    1e-4 > D && D > -1e-4 && (D = O = 2e-5),
                    !N || P.z || P.rotationX || P.rotationY || (N = 0)
                }
                if (E || P.skewX)
                    v = Math.cos(E),
                    y = Math.sin(E),
                    e = v,
                    s = y,
                    P.skewX && (E -= P.skewX * L,
                    v = Math.cos(E),
                    y = Math.sin(E),
                    "simple" === P.skewType && (w = Math.tan(P.skewX * L),
                    w = Math.sqrt(1 + w * w),
                    v *= w,
                    y *= w)),
                    i = -y,
                    a = v;
                else {
                    if (!(P.rotationY || P.rotationX || 1 !== O || N || P.svg))
                        return void (C[bt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + A + "px," + R + "px)" + (1 !== k || 1 !== D ? " scale(" + k + "," + D + ")" : ""));
                    e = a = 1,
                    i = s = 0
                }
                u = 1,
                n = r = o = l = c = h = p = f = m = 0,
                _ = N ? -1 / N : 0,
                g = P.zOrigin,
                1e5,
                ",",
                (E = P.rotationY * L) && (v = Math.cos(E),
                y = Math.sin(E),
                c = u * -y,
                f = _ * -y,
                n = e * y,
                o = s * y,
                u *= v,
                _ *= v,
                e *= v,
                s *= v),
                (E = P.rotationX * L) && (v = Math.cos(E),
                y = Math.sin(E),
                w = i * v + n * y,
                x = a * v + o * y,
                b = h * v + u * y,
                T = m * v + _ * y,
                n = i * -y + n * v,
                o = a * -y + o * v,
                u = h * -y + u * v,
                _ = m * -y + _ * v,
                i = w,
                a = x,
                h = b,
                m = T),
                1 !== O && (n *= O,
                o *= O,
                u *= O,
                _ *= O),
                1 !== D && (i *= D,
                a *= D,
                h *= D,
                m *= D),
                1 !== k && (e *= k,
                s *= k,
                c *= k,
                f *= k),
                g && (p -= g,
                r = n * p,
                l = o * p,
                p = u * p + g),
                P.svg && (r += P.xOrigin - (P.xOrigin * e + P.yOrigin * i),
                l += P.yOrigin - (P.xOrigin * s + P.yOrigin * a)),
                r = (w = (r += M) - (r |= 0)) ? (0 | 1e5 * w + (0 > w ? -.5 : .5)) / 1e5 + r : r,
                l = (w = (l += A) - (l |= 0)) ? (0 | 1e5 * w + (0 > w ? -.5 : .5)) / 1e5 + l : l,
                p = (w = (p += R) - (p |= 0)) ? (0 | 1e5 * w + (0 > w ? -.5 : .5)) / 1e5 + p : p,
                S = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(",
                S += (0 | 1e5 * e) / 1e5 + "," + (0 | 1e5 * s) / 1e5 + "," + (0 | 1e5 * c) / 1e5,
                S += "," + (0 | 1e5 * f) / 1e5 + "," + (0 | 1e5 * i) / 1e5 + "," + (0 | 1e5 * a) / 1e5,
                S += "," + (0 | 1e5 * h) / 1e5 + "," + (0 | 1e5 * m) / 1e5 + "," + (0 | 1e5 * n) / 1e5,
                S += "," + (0 | 1e5 * o) / 1e5 + "," + (0 | 1e5 * u) / 1e5 + "," + (0 | 1e5 * _) / 1e5,
                S += "," + r + "," + l + "," + p + "," + (N ? 1 + -p / N : 1) + ")",
                C[bt] = S
            } else
                Nt.call(this, t)
        }
        , Nt = H.set2DTransformRatio = function(t) {
            var e, i, n, r, s, a, o, l, c, h, u, p = this.data, d = this.t, f = d.style, m = p.x, _ = p.y;
            return !(p.rotationX || p.rotationY || p.z || !0 === p.force3D || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && wt || !Pt ? (r = p.scaleX,
            s = p.scaleY,
            void (p.rotation || p.skewX || p.svg ? (e = p.rotation * L,
            i = e - p.skewX * L,
            n = 1e5,
            a = Math.cos(e) * r,
            o = Math.sin(e) * r,
            l = Math.sin(i) * -s,
            c = Math.cos(i) * s,
            p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * l),
            _ += p.yOrigin - (p.xOrigin * o + p.yOrigin * c),
            (u = 1e-6) > m && m > -u && (m = 0),
            u > _ && _ > -u && (_ = 0)),
            h = (0 | a * n) / n + "," + (0 | o * n) / n + "," + (0 | l * n) / n + "," + (0 | c * n) / n + "," + m + "," + _ + ")",
            p.svg && wt ? d.setAttribute("transform", "matrix(" + h) : f[bt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + h) : f[bt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + m + "," + _ + ")")) : (this.setRatio = Rt,
            void Rt.call(this, t))
        }
        ;
        (c = Ct.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = 0,
        c.scaleX = c.scaleY = c.scaleZ = 1,
        vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(t, e, i, n, s, o, l) {
                if (n._lastParsedTransform === l)
                    return s;
                n._lastParsedTransform = l;
                var c, h, u, p, d, f, m, _ = n._transform = At(t, r, !0, l.parseTransform), g = t.style, v = xt.length, y = l, w = {};
                if ("string" == typeof y.transform && bt)
                    u = I.style,
                    u[bt] = y.transform,
                    u.display = "block",
                    u.position = "absolute",
                    j.body.appendChild(I),
                    c = At(I, null, !1),
                    j.body.removeChild(I);
                else if ("object" == typeof y) {
                    if (c = {
                        scaleX: st(null != y.scaleX ? y.scaleX : y.scale, _.scaleX),
                        scaleY: st(null != y.scaleY ? y.scaleY : y.scale, _.scaleY),
                        scaleZ: st(y.scaleZ, _.scaleZ),
                        x: st(y.x, _.x),
                        y: st(y.y, _.y),
                        z: st(y.z, _.z),
                        xPercent: st(y.xPercent, _.xPercent),
                        yPercent: st(y.yPercent, _.yPercent),
                        perspective: st(y.transformPerspective, _.perspective)
                    },
                    null != (m = y.directionalRotation))
                        if ("object" == typeof m)
                            for (u in m)
                                y[u] = m[u];
                        else
                            y.rotation = m;
                    "string" == typeof y.x && -1 !== y.x.indexOf("%") && (c.x = 0,
                    c.xPercent = st(y.x, _.xPercent)),
                    "string" == typeof y.y && -1 !== y.y.indexOf("%") && (c.y = 0,
                    c.yPercent = st(y.y, _.yPercent)),
                    c.rotation = at("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : _.rotation, _.rotation, "rotation", w),
                    Pt && (c.rotationX = at("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", w),
                    c.rotationY = at("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", w)),
                    c.skewX = null == y.skewX ? _.skewX : at(y.skewX, _.skewX),
                    c.skewY = null == y.skewY ? _.skewY : at(y.skewY, _.skewY),
                    (h = c.skewY - _.skewY) && (c.skewX += h,
                    c.rotation += h)
                }
                for (Pt && null != y.force3D && (_.force3D = y.force3D,
                f = !0),
                _.skewType = y.skewType || _.skewType || a.defaultSkewType,
                (d = _.force3D || _.z || _.rotationX || _.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == y.scale || (c.scaleZ = 1); --v > -1; )
                    i = xt[v],
                    ((p = c[i] - _[i]) > 1e-6 || -1e-6 > p || null != y[i] || null != N[i]) && (f = !0,
                    s = new ft(_,i,_[i],p,s),
                    i in w && (s.e = w[i]),
                    s.xs0 = 0,
                    s.plugin = o,
                    n._overwriteProps.push(s.n));
                return (p = y.transformOrigin) && _.svg && (Mt(t, p, c),
                s = new ft(_,"xOrigin",_.xOrigin,c.xOrigin - _.xOrigin,s,-1,"transformOrigin"),
                s.b = _.xOrigin,
                s.e = s.xs0 = c.xOrigin,
                s = new ft(_,"yOrigin",_.yOrigin,c.yOrigin - _.yOrigin,s,-1,"transformOrigin"),
                s.b = _.yOrigin,
                s.e = s.xs0 = c.yOrigin,
                p = "0px 0px"),
                (p || Pt && d && _.zOrigin) && (bt ? (f = !0,
                i = St,
                p = (p || G(t, i, r, !1, "50% 50%")) + "",
                s = new ft(g,i,0,0,s,-1,"transformOrigin"),
                s.b = g[i],
                s.plugin = o,
                Pt ? (u = _.zOrigin,
                p = p.split(" "),
                _.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0,
                s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px",
                s = new ft(_,"zOrigin",0,0,s,-1,s.n),
                s.b = u,
                s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = p) : nt(p + "", _)),
                f && (n._transformType = _.svg && wt || !d && 3 !== this._transformType ? 2 : 3),
                s
            },
            prefix: !0
        }),
        vt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        vt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, a) {
                e = this.format(e);
                var o, l, c, h, u, p, d, f, m, _, g, v, y, w, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                for (m = parseFloat(t.offsetWidth),
                _ = parseFloat(t.offsetHeight),
                o = e.split(" "),
                l = 0; T.length > l; l++)
                    this.p.indexOf("border") && (T[l] = W(T[l])),
                    -1 !== (u = h = G(t, T[l], r, !1, "0px")).indexOf(" ") && (h = u.split(" "),
                    u = h[0],
                    h = h[1]),
                    p = c = o[l],
                    d = parseFloat(u),
                    v = u.substr((d + "").length),
                    (y = "=" === p.charAt(1)) ? (f = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    f *= parseFloat(p),
                    g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p),
                    g = p.substr((f + "").length)),
                    "" === g && (g = n[i] || v),
                    g !== v && (w = $(t, "borderLeft", d, v),
                    x = $(t, "borderTop", d, v),
                    "%" === g ? (u = w / m * 100 + "%",
                    h = x / _ * 100 + "%") : "em" === g ? (b = $(t, "borderLeft", 1, "em"),
                    u = w / b + "em",
                    h = x / b + "em") : (u = w + "px",
                    h = x + "px"),
                    y && (p = parseFloat(u) + f + g,
                    c = parseFloat(h) + f + g)),
                    a = mt(S, T[l], u + " " + h, p + " " + c, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: ut("0px 0px 0px 0px", !1, !0)
        }),
        vt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, s, a) {
                var o, l, c, h, u, p, d = "background-position", f = r || V(t, null), _ = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(E, "")) && "none" !== p) {
                    for (o = _.split(" "),
                    l = g.split(" "),
                    B.setAttribute("src", p),
                    c = 2; --c > -1; )
                        _ = o[c],
                        (h = -1 !== _.indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - B.width : t.offsetHeight - B.height,
                        o[c] = h ? parseFloat(_) / 100 * u + "px" : parseFloat(_) / u * 100 + "%");
                    _ = o.join(" ")
                }
                return this.parseComplex(t.style, _, g, s, a)
            },
            formatter: nt
        }),
        vt("backgroundSize", {
            defaultValue: "0 0",
            formatter: nt
        }),
        vt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        vt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        vt("transformStyle", {
            prefix: !0
        }),
        vt("backfaceVisibility", {
            prefix: !0
        }),
        vt("userSelect", {
            prefix: !0
        }),
        vt("margin", {
            parser: pt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        vt("padding", {
            parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        vt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, s, a) {
                var o, l, c;
                return 9 > m ? (l = t.currentStyle,
                c = 8 > m ? " " : ",",
                o = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
                e = this.format(e).split(",").join(c)) : (o = this.format(G(t, this.p, r, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, s, a)
            }
        }),
        vt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        vt("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
                return r
            }
        }),
        vt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, s, a) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
            }
        }),
        vt("borderWidth", {
            parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        vt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r) {
                var s = t.style
                  , a = "cssFloat"in s ? "cssFloat" : "styleFloat";
                return new ft(s,a,0,0,r,-1,i,!1,0,s[a],e)
            }
        });
        var jt = function(t) {
            var e, i = this.t, n = i.filter || G(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !G(this.data, "filter")) : (i.filter = n.replace(T, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
            -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
        };
        vt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, s, a) {
                var o = parseFloat(G(t, "opacity", r, !1, "1"))
                  , l = t.style
                  , c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                c && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0),
                F ? s = new ft(l,"opacity",o,e - o,s) : (s = new ft(l,"opacity",100 * o,100 * (e - o),s),
                s.xn1 = c ? 1 : 0,
                l.zoom = 1,
                s.type = 2,
                s.b = "alpha(opacity=" + s.s + ")",
                s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                s.data = t,
                s.plugin = a,
                s.setRatio = jt),
                c && (s = new ft(l,"visibility",0,0,s,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                s.xs0 = "inherit",
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(i)),
                s
            }
        });
        var zt = function(t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)),
            t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , It = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : zt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        vt("className", {
            parser: function(t, e, n, s, a, o, l) {
                var c, h, u, p, d, f = t.getAttribute("class") || "", m = t.style.cssText;
                if (a = s._classNamePT = new ft(t,n,0,0,a,2),
                a.setRatio = It,
                a.pr = -11,
                i = !0,
                a.b = f,
                h = Z(t, r),
                u = t._gsClassPT) {
                    for (p = {},
                    d = u.data; d; )
                        p[d.p] = 1,
                        d = d._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                s._tween._duration && (t.setAttribute("class", a.e),
                c = J(t, h, Z(t), l, p),
                t.setAttribute("class", f),
                a.data = c.firstMPT,
                t.style.cssText = m,
                a = a.xfirst = s.parse(t, c.difs, a, o)),
                a
            }
        });
        var Bt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s = this.t.style, a = l.transform.parse;
                if ("all" === this.e)
                    s.cssText = "",
                    r = !0;
                else
                    for (e = this.e.split(" ").join("").split(","),
                    n = e.length; --n > -1; )
                        i = e[n],
                        l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? St : l[i].p),
                        zt(s, i);
                r && (zt(s, bt),
                this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (vt("clearProps", {
            parser: function(t, e, n, r, s) {
                return s = new ft(t,n,0,0,s,2),
                s.setRatio = Bt,
                s.e = e,
                s.pr = -10,
                s.data = r._tween,
                i = !0,
                s
            }
        }),
        c = "bezier,throwProps,physicsProps,physics2D".split(","),
        _t = c.length; _t--; )
            yt(c[_t]);
        (c = a.prototype)._firstPT = c._lastParsedTransform = c._transform = null,
        c._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            h = e.autoRound,
            i = !1,
            n = e.suffixMap || a.suffixMap,
            r = V(t, ""),
            s = this._overwriteProps;
            var l, c, d, m, _, g, v, y, w, x = t.style;
            if (u && "" === x.zIndex && ("auto" === (l = G(t, "zIndex", r)) || "" === l) && this._addLazySet(x, "zIndex", 0),
            "string" == typeof e && (m = x.cssText,
            l = Z(t, r),
            x.cssText = m + ";" + e,
            l = J(t, l, Z(t)).difs,
            !F && b.test(e) && (l.opacity = parseFloat(RegExp.$1)),
            e = l,
            x.cssText = m),
            this._firstPT = c = this.parse(t, e, null),
            this._transformType) {
                for (w = 3 === this._transformType,
                bt ? p && (u = !0,
                "" === x.zIndex && ("auto" === (v = G(t, "zIndex", r)) || "" === v) && this._addLazySet(x, "zIndex", 0),
                f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : x.zoom = 1,
                d = c; d && d._next; )
                    d = d._next;
                y = new ft(t,"transform",0,0,null,2),
                this._linkCSSP(y, null, d),
                y.setRatio = w && Pt ? Rt : bt ? Nt : Lt,
                y.data = this._transform || At(t, r, !0),
                s.pop()
            }
            if (i) {
                for (; c; ) {
                    for (g = c._next,
                    d = m; d && d.pr > c.pr; )
                        d = d._next;
                    (c._prev = d ? d._prev : _) ? c._prev._next = c : m = c,
                    (c._next = d) ? d._prev = c : _ = c,
                    c = g
                }
                this._firstPT = m
            }
            return !0
        }
        ,
        c.parse = function(t, e, i, s) {
            var a, o, c, u, p, d, f, m, _, g, v = t.style;
            for (a in e)
                d = e[a],
                (o = l[a]) ? i = o.parse(t, d, a, this, i, s, e) : (p = G(t, a, r) + "",
                _ = "string" == typeof d,
                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || _ && S.test(d) ? (_ || (d = ct(d),
                d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"),
                i = mt(v, a, p, d, !0, "transparent", i, 0, s)) : !_ || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = parseFloat(p),
                f = c || 0 === c ? p.substr((c + "").length) : "",
                ("" === p || "auto" === p) && ("width" === a || "height" === a ? (c = it(t, a, r),
                f = "px") : "left" === a || "top" === a ? (c = K(t, a, r),
                f = "px") : (c = "opacity" !== a ? 0 : 1,
                f = "")),
                (g = _ && "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10),
                d = d.substr(2),
                u *= parseFloat(d),
                m = d.replace(w, "")) : (u = parseFloat(d),
                m = _ ? d.substr((u + "").length) || "" : ""),
                "" === m && (m = a in n ? n[a] : f),
                d = u || 0 === u ? (g ? u + c : u) + m : e[a],
                f !== m && "" !== m && (u || 0 === u) && c && (c = $(t, a, c, f),
                "%" === m ? (c /= $(t, a, 100, "%") / 100,
                !0 !== e.strictUnits && (p = c + "%")) : "em" === m ? c /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m),
                m = "px"),
                g && (u || 0 === u) && (d = u + c + m)),
                g && (u += c),
                !c && 0 !== c || !u && 0 !== u ? void 0 !== v[a] && (d || "NaN" != d + "" && null != d) ? (i = new ft(v,a,u || c || 0,0,i,-1,a,!1,0,p,d),
                i.xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new ft(v,a,c,u - c,i,0,a,!1 !== h && ("px" === m || "zIndex" === a),0,p,d),
                i.xs0 = m)) : i = mt(v, a, p, d, !0, null, i, 0, s)),
                s && i && !i.plugin && (i.plugin = s);
            return i
        }
        ,
        c.setRatio = function(t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l))
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    n = 1; r.l > n; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
                    r = r._next
        }
        ,
        c._enableTransforms = function(t) {
            this._transform = this._transform || At(this._target, r, !0),
            this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Ht = function() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(t, e, i) {
            var n = this._firstPT = new ft(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Ht,
            n.data = this
        }
        ,
        c._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        c._kill = function(e) {
            var i, n, r, s = e;
            if (e.autoAlpha || e.alpha) {
                s = {};
                for (n in e)
                    s[n] = e[n];
                s.opacity = 1,
                s.autoAlpha && (s.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, s)
        }
        ;
        var Ut = function(t, e, i) {
            var n, r, s, a;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    Ut(t[r], e, i);
            else
                for (n = t.childNodes,
                r = n.length; --r > -1; )
                    s = n[r],
                    a = s.type,
                    s.style && (e.push(Z(s)),
                    i && i.push(s)),
                    1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Ut(s, e, i)
        };
        return a.cascadeTo = function(t, i, n) {
            var r, s, a, o = e.to(t, i, n), l = [o], c = [], h = [], u = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target,
            Ut(t, c, u),
            o.render(i, !0),
            Ut(t, h),
            o.render(0, !0),
            o._enabled(!0),
            r = u.length; --r > -1; )
                if ((s = J(u[r], c[r], h[r])).firstMPT) {
                    s = s.difs;
                    for (a in n)
                        p[a] && (s[a] = n[a]);
                    l.push(e.to(u[r], i, s))
                }
            return l
        }
        ,
        t.activate([a]),
        a
    }, !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        }).prototype;
        t._onInitAllProps = function() {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, a = {}, o = n._propLookup.roundProps; --s > -1; )
                a[r[s]] = 1;
            for (s = r.length; --s > -1; )
                for (t = r[s],
                e = n._firstPT; e; )
                    i = e._next,
                    e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c),
                    i && (i._prev = e._prev),
                    e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i),
                    e._next = e._prev = null,
                    n._propLookup[t] = o),
                    e = i;
            return !1
        }
        ,
        t._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function(t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute)
                return !1;
            this._target = t,
            this._proxy = {},
            this._start = {},
            this._end = {};
            for (i in e)
                this._start[i] = this._proxy[i] = n = t.getAttribute(i),
                r = this._addTween(this._proxy, i, parseFloat(n), e[i], i),
                this._end[i] = r ? r.s + r.c : e[i],
                this._overwriteProps.push(i);
            return !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1; )
                e = i[n],
                this._target.setAttribute(e, r[e] + "")
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, n, r, s, a, o, l = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"),
                n = o[0],
                r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0,
                a = s - r,
                o.length && (-1 !== (n = o.join("_")).indexOf("short") && (a %= l) != a % (l / 2) && (a = 0 > a ? a + l : a - l),
                -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)),
                (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, l = s._class, c = function(e, i) {
            var n = l("easing." + e, function() {}, !0)
              , r = n.prototype = new t;
            return r.constructor = n,
            r.getRatio = i,
            n
        }, h = t.register || function() {}
        , u = function(t, e, i, n) {
            var r = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(r, t),
            r
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, d = function(e, i) {
            var n = l("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = n.prototype = new t;
            return r.constructor = n,
            r.getRatio = i,
            r.config = function(t) {
                return new n(t)
            }
            ,
            n
        }, f = u("Back", d("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), d("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), d("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), _ = m.prototype = new t;
        return _.constructor = m,
        _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        _.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = l("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0),
        _ = e.prototype = new t,
        _.constructor = e,
        _.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        _.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = l("easing.RoughEase", function(e) {
            for (var i, n, r, s, a, o, l = (e = e || {}).taper || "none", c = [], h = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1; )
                i = f ? Math.random() : 1 / u * d,
                n = _ ? _.getRatio(i) : i,
                "none" === l ? r = g : "out" === l ? (s = 1 - i,
                r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i,
                r = .5 * s * s * g) : (s = 2 * (1 - i),
                r = .5 * s * s * g),
                f ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r,
                m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                c[h++] = {
                    x: i,
                    y: n
                };
            for (c.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new p(1,1,null),
            d = u; --d > -1; )
                a = c[d],
                o = new p(a.x,a.y,o);
            this._prev = new p(0,0,0 !== o.t ? o : o.next)
        }, !0),
        _ = i.prototype = new t,
        _.constructor = i,
        _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        _.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", c("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), c("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), c("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", c("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), c("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), c("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || n,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0)
              , s = r.prototype = new t;
            return s.constructor = r,
            s.getRatio = i,
            s.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)
        }, .3), n("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)),
        u("Expo", c("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), c("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), c("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", c("SineOut", function(t) {
            return Math.sin(t * o)
        }), c("SineIn", function(t) {
            return 1 - Math.cos(t * o)
        }), c("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        h(r.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        f
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, a, o, l = function(t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++)
                r[n[e]] = r = r[n[e]] || {};
            return r
        }, c = l("com.greensock"), h = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, u = function() {}, p = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), d = {}, f = function(e, n, r, s) {
            this.sc = d[e] ? d[e].sc : [],
            d[e] = this,
            this.gsClass = null,
            this.func = r;
            var a = [];
            this.check = function(o) {
                for (var c, h, u, p, m = n.length, _ = m; --m > -1; )
                    (c = d[n[m]] || new f(n[m],[])).gsClass ? (a[m] = c.gsClass,
                    _--) : o && c.sc.push(this);
                if (0 === _ && r)
                    for (h = ("com.greensock." + e).split("."),
                    u = h.pop(),
                    p = l(h.join("."))[u] = this.gsClass = r.apply(r, a),
                    s && (i[u] = p,
                    "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                        return p
                    }) : "TweenMax" === e && "undefined" != typeof module && module.exports && (module.exports = p)),
                    m = 0; this.sc.length > m; m++)
                        this.sc[m].check()
            }
            ,
            this.check(!0)
        }, m = t._gsDefine = function(t, e, i, n) {
            return new f(t,e,i,n)
        }
        , _ = c._class = function(t, e, i) {
            return e = e || function() {}
            ,
            m(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        m.globals = i;
        var g = [0, 0, 1, 1]
          , v = []
          , y = _("easing.Ease", function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? g.concat(e) : g
        }, !0)
          , w = y.map = {}
          , x = y.register = function(t, e, i, n) {
            for (var r, s, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (s = l[h],
                r = n ? _("easing." + s, null, !0) : c.easing[s] || {},
                a = u.length; --a > -1; )
                    o = u[a],
                    w[s + "." + o] = w[o + s] = r[o] = t.getRatio ? t : t[o] || new t
        }
        ;
        for ((s = y.prototype)._calcEnd = !1,
        s.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }
        ,
        r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1; )
            s = n[r] + ",Power" + r,
            x(new y(null,null,1,r), s, "easeOut", !0),
            x(new y(null,null,2,r), s, "easeIn" + (0 === r ? ",easeNone" : "")),
            x(new y(null,null,3,r), s, "easeInOut");
        w.linear = c.easing.Linear.easeIn,
        w.swing = c.easing.Quad.easeInOut;
        var b = _("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        (s = b.prototype).addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, l, c = this._listeners[t], h = 0;
            for (null == c && (this._listeners[t] = c = []),
            l = c.length; --l > -1; )
                (s = c[l]).c === e && s.s === i ? c.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
            c.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            }),
            this !== a || o || a.wake()
        }
        ,
        s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length,
                i = this._eventTarget; --e > -1; )
                    (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var T = t.requestAnimationFrame
          , S = t.cancelAnimationFrame
          , P = Date.now || function() {
            return (new Date).getTime()
        }
          , C = P();
        for (r = (n = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !T; )
            T = t[n[r] + "RequestAnimationFrame"],
            S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        _("Ticker", function(t, e) {
            var i, n, r, s, l, c = this, h = P(), p = !1 !== e && T, d = 500, f = 33, m = function(t) {
                var e, a, o = P() - C;
                o > d && (h += o - f),
                C += o,
                c.time = (C - h) / 1e3,
                e = c.time - l,
                (!i || e > 0 || !0 === t) && (c.frame++,
                l += e + (e >= s ? .004 : s - e),
                a = !0),
                !0 !== t && (r = n(m)),
                a && c.dispatchEvent("tick")
            };
            b.call(c),
            c.time = c.frame = 0,
            c.tick = function() {
                m(!0)
            }
            ,
            c.lagSmoothing = function(t, e) {
                d = t || 1e10,
                f = Math.min(e, d, 0)
            }
            ,
            c.sleep = function() {
                null != r && (p && S ? S(r) : clearTimeout(r),
                n = u,
                r = null,
                c === a && (o = !1))
            }
            ,
            c.wake = function() {
                null !== r ? c.sleep() : c.frame > 10 && (C = P() - d + 5),
                n = 0 === i ? u : p && T ? T : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                }
                ,
                c === a && (o = !0),
                m(2)
            }
            ,
            c.fps = function(t) {
                return arguments.length ? (i = t,
                s = 1 / (i || 60),
                l = this.time + s,
                void c.wake()) : i
            }
            ,
            c.useRAF = function(t) {
                return arguments.length ? (c.sleep(),
                p = t,
                void c.fps(i)) : p
            }
            ,
            c.fps(t),
            setTimeout(function() {
                p && (!r || 5 > c.frame) && c.useRAF(!1)
            }, 1500)
        }),
        (s = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var E = _("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            U) {
                o || a.wake();
                var i = this.vars.useFrames ? H : U;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = E.ticker = new c.Ticker,
        (s = E.prototype)._dirty = s._gc = s._initted = s._paused = !1,
        s._totalTime = s._time = 0,
        s._rawPrevTime = -1,
        s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
        s._paused = !1;
        var k = function() {
            o && P() - C > 2e3 && a.wake(),
            setTimeout(k, 2e3)
        };
        k(),
        s.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        s.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        s.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        s.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        s.render = function() {}
        ,
        s.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        s.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }
        ,
        s._enabled = function(t, e) {
            return o || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        s._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        s.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e,
                r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                r[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        s.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        s.totalTime = function(t, e, i) {
            if (o || a.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , r = this._timeline;
                    if (t > n && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                    r._dirty || this._uncache(!1),
                    r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                            r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1),
                A.length && F())
            }
            return this
        }
        ,
        s.progress = s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }
        ,
        s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        s.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || 1e-10,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        s.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline
                  , i = e.rawTime()
                  , n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n,
                this._uncache(!1)),
                this._pauseTime = t ? i : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var D = _("core.SimpleTimeline", function(t) {
            E.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (s = D.prototype = new E).constructor = D,
        s.kill()._gc = !1,
        s._first = s._last = s._recent = null,
        s._sortChildren = !1,
        s.add = s.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (n = t._startTime; i && i._startTime > n; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                n = r._next,
                (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                r = n
        }
        ,
        s.rawTime = function() {
            return o || a.wake(),
            this._totalTime
        }
        ;
        var O = _("TweenLite", function(e, i, n) {
            if (E.call(this, i, n),
            this.render = O.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : O.selector(e) || e;
            var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? B[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l],
            (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = a = h(e),
                this._propLookup = [],
                this._siblings = [],
                r = 0; a.length > r; r++)
                    (s = a[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1),
                    this._targets = a = a.concat(h(s))) : (this._siblings[r] = X(s, this, !1),
                    1 === l && this._siblings[r].length > 1 && Q(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = a[r--] = O.selector(s)) && a.splice(r + 1, 1) : a.splice(r--, 1);
            else
                this._propLookup = {},
                this._siblings = X(e, this, !1),
                1 === l && this._siblings.length > 1 && Q(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10,
            this.render(-this._delay))
        }, !0)
          , M = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        };
        (s = O.prototype = new E).constructor = O,
        s.kill()._gc = !1,
        s.ratio = 0,
        s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
        s._notifyPluginsOfEnabled = s._lazy = !1,
        O.version = "1.15.0",
        O.defaultEase = s._ease = new y(null,null,1,1),
        O.defaultOverwrite = "auto",
        O.ticker = a,
        O.autoSleep = !0,
        O.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }
        ,
        O.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (O.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var A = []
          , L = {}
          , R = O._internals = {
            isArray: p,
            isSelector: M,
            lazyTweens: A
        }
          , N = O._plugins = {}
          , j = R.tweenLookup = {}
          , z = 0
          , I = R.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }
          , B = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , H = E._rootFramesTimeline = new D
          , U = E._rootTimeline = new D
          , F = R.lazyRender = function() {
            var t, e = A.length;
            for (L = {}; --e > -1; )
                (t = A[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            A.length = 0
        }
        ;
        U._startTime = a.time,
        H._startTime = a.frame,
        U._active = H._active = !0,
        setTimeout(F, 1),
        E._updateRoot = O.render = function() {
            var t, e, i;
            if (A.length && F(),
            U.render((a.time - U._startTime) * U._timeScale, !1, !1),
            H.render((a.frame - H._startTime) * H._timeScale, !1, !1),
            A.length && F(),
            !(a.frame % 120)) {
                for (i in j) {
                    for (t = (e = j[i].tweens).length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete j[i]
                }
                if ((!(i = U._first) || i._paused) && O.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || a.sleep()
                }
            }
        }
        ,
        a.addEventListener("tick", E._updateRoot);
        var X = function(t, e, i) {
            var n, r, s = t._gsTweenID;
            if (j[s || (t._gsTweenID = s = "t" + z++)] || (j[s] = {
                target: t,
                tweens: []
            }),
            e && (n = j[s].tweens,
            n[r = n.length] = e,
            i))
                for (; --r > -1; )
                    n[r] === e && n.splice(r, 1);
            return j[s].tweens
        }
          , q = function(t, e, i, n) {
            var r, s, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, n)),
            (a = O.onOverwrite) && (s = a(t, e, i, n)),
            !1 !== r && !1 !== s
        }
          , Q = function(t, e, i, n, r) {
            var s, a, o, l;
            if (1 === n || n >= 4) {
                for (l = r.length,
                s = 0; l > s; s++)
                    if ((o = r[s]) !== e)
                        o._gc || q(o, e) && o._enabled(!1, !1) && (a = !0);
                    else if (5 === n)
                        break;
                return a
            }
            var c, h = e._startTime + 1e-10, u = [], p = 0, d = 0 === e._duration;
            for (s = r.length; --s > -1; )
                (o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (c = c || Y(e, 0, d),
                0 === Y(o, c, d) && (u[p++] = o)) : h >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > h && ((d || !o._initted) && 2e-10 >= h - o._startTime || (u[p++] = o)));
            for (s = p; --s > -1; )
                if (o = u[s],
                2 === n && o._kill(i, t, e) && (a = !0),
                2 !== n || !o._firstPT && o._initted) {
                    if (2 !== n && !q(o, e))
                        continue;
                    o._enabled(!1, !1) && (a = !0)
                }
            return a
        }
          , Y = function(t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                if (s += n._startTime,
                r *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return (s /= r) > e ? s - e : i && s === e || !t._initted && 2e-10 > s - e ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
        };
        s._init = function() {
            var t, e, i, n, r, s = this.vars, a = this._overwrittenProps, o = this._duration, l = !!s.immediateRender, c = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                r = {};
                for (n in s.startAt)
                    r[n] = s.startAt[n];
                if (r.overwrite = !1,
                r.immediateRender = !0,
                r.lazy = l && !1 !== s.lazy,
                r.startAt = r.delay = null,
                this._startAt = O.to(this.target, 0, r),
                l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== o)
                        return
            } else if (s.runBackwards && 0 !== o)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    0 !== this._time && (l = !1),
                    i = {};
                    for (n in s)
                        I[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = l && !1 !== s.lazy,
                    i.immediateRender = l,
                    this._startAt = O.to(this.target, 0, i),
                    l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof y ? c : "function" == typeof c ? new y(c,s.easeParams) : w[c] || O.defaultEase : O.defaultEase,
            s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && O._onPluginEvent("_onInitAllProps", this),
            a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            s.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = s.onUpdate,
            this._initted = !0
        }
        ,
        s._initProps = function(e, i, n, r) {
            var s, a, o, l, c, h;
            if (null == e)
                return !1;
            L[e._gsTweenID] && F(),
            this.vars.css || e.style && e !== t && e.nodeType && N.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    I[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, e);
            for (s in this.vars) {
                if (h = this.vars[s],
                I[s])
                    h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (N[s] && (l = new N[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: l._priority
                    },
                    a = l._overwriteProps.length; --a > -1; )
                        i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[s] = c = {
                        _next: this._firstPT,
                        t: e,
                        p: s,
                        f: "function" == typeof e[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    },
                    c.s = c.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]),
                    c.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - c.s || 0;
                c && c._next && (c._next._prev = c)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Q(e, this, i, this._overwrite, n) ? (this._kill(i, e),
            this._initProps(e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0),
            o)
        }
        ,
        s.render = function(t, e, i) {
            var n, r, s, a, o = this._time, l = this._duration, c = this._rawPrevTime;
            if (t >= l)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                r = "onComplete"),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > c || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0,
                c > 1e-10 && (r = "onReverseComplete")),
                this._rawPrevTime = a = !e || t || c === t ? t : 1e-10);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && c > 0 && 1e-10 !== c) && (r = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = a = !e || t || c === t ? t : 1e-10)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var h = t / l
                  , u = this._easeType
                  , p = this._easePower;
                (1 === u || 3 === u && h >= .5) && (h = 1 - h),
                3 === u && (h *= 2),
                1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h),
                this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o,
                        this._rawPrevTime = c,
                        A.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))),
                s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                    s = s._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || (this._time !== o || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v),
                0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0))
            }
        }
        ,
        s._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var n, r, s, a, o, l, c, h, u;
            if ((p(e) || M(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n]) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            o = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    o = this._propLookup,
                    r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (c = t || o,
                    h = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill),
                    i && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (s in c)
                            o[s] && (u || (u = []),
                            u.push(s));
                        if (!q(this, i, e, u))
                            return !1
                    }
                    for (s in c)
                        (a = o[s]) && (a.pg && a.t._kill(c) && (l = !0),
                        a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        a._next = a._prev = null),
                        delete o[s]),
                        h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        s.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            E.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -1e-10,
            this.render(-this._delay)),
            this
        }
        ,
        s._enabled = function(t, e) {
            if (o || a.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = X(n[i], this, !0);
                else
                    this._siblings = X(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        O.to = function(t, e, i) {
            return new O(t,e,i)
        }
        ,
        O.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new O(t,e,i)
        }
        ,
        O.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new O(t,e,n)
        }
        ,
        O.delayedCall = function(t, e, i, n, r) {
            return new O(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        O.set = function(t, e) {
            return new O(t,0,e)
        }
        ,
        O.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; --i > -1; )
                    n = n.concat(O.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (s = n[i],
                    r = i; --r > -1; )
                        s === n[r] && n.splice(i, 1)
            } else
                for (n = X(t).concat(),
                i = n.length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = O.getTweensOf(t, e), r = n.length; --r > -1; )
                n[r]._kill(i, t)
        }
        ;
        var W = _("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = W.prototype
        }, !0);
        if (s = W.prototype,
        W.version = "1.10.1",
        W.API = 2,
        s._firstPT = null,
        s._addTween = function(t, e, i, n, r, s) {
            var a, o;
            return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: s
            },
            o._next && (o._next._prev = o),
            o) : void 0
        }
        ,
        s.setRatio = function(t) {
            for (var e, i = this._firstPT; i; )
                e = i.c * t + i.s,
                i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
        ,
        s._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        s._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        O._onPluginEvent = function(t, e) {
            var i, n, r, s, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o; ) {
                    for (a = o._next,
                    n = r; n && n.pr > o.pr; )
                        n = n._next;
                    (o._prev = n ? n._prev : s) ? o._prev._next = o : r = o,
                    (o._next = n) ? n._prev = o : s = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        W.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === W.API && (N[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        m.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, a = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                W.call(this, i, n),
                this._overwriteProps = r || []
            }, !0 === t.global), o = a.prototype = new W(i);
            o.constructor = a,
            a.API = t.API;
            for (e in s)
                "function" == typeof t[e] && (o[s[e]] = t[e]);
            return a.version = t.version,
            W.activate([a]),
            a
        }
        ,
        n = t._gsQueue) {
            for (r = 0; n.length > r; r++)
                n[r]();
            for (s in d)
                d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
new function(window, document, undefined, $) {
    "use strict";
    var MODULE;
    !function(t) {
        !function(t) {
            t.NAME = "pjax",
            t.NAMESPACE = jQuery
        }(t.DEF || (t.DEF = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            t[t.blank = 0] = "blank",
            t[t.initiate = 1] = "initiate",
            t[t.open = 2] = "open",
            t[t.pause = 3] = "pause",
            t[t.lock = 4] = "lock",
            t[t.seal = 5] = "seal",
            t[t.error = 6] = "error",
            t[t.crash = 7] = "crash",
            t[t.terminate = 8] = "terminate",
            t[t.close = 9] = "close"
        }(t.State || (t.State = {})),
        t.State,
        t.EVENT = {
            PJAX: t.DEF.NAME.toLowerCase(),
            CLICK: "click",
            SUBMIT: "submit",
            POPSTATE: "popstate",
            SCROLL: "scroll"
        }
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        t.MODEL || (t.MODEL = {})
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            t.APP || (t.APP = {})
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                t.DATA || (t.DATA = {})
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        function e(t, i) {
            if (!Object.freeze || t === t.window || "ownerDocument"in t)
                return t;
            if (!Object.isFrozen(t) && Object.freeze(t),
            !i)
                return t;
            for (var n in t) {
                var r = t[n];
                ~"object,function".indexOf(typeof r) && r && e(r, i)
            }
            return t
        }
        function i(t, e) {
            if (!Object.seal || t === t.window || "ownerDocument"in t)
                return t;
            if (!Object.isSealed(t) && Object.seal(t),
            !e)
                return t;
            for (var n in t) {
                var r = t[n];
                ~"object,function".indexOf(typeof r) && r && i(r, e)
            }
            return t
        }
        t.MIXIN = function(t, e) {
            for (var i = t.prototype, n = (e = e.reverse()).length; n--; ) {
                var r = e[n].prototype;
                for (var s in r)
                    "constructor" !== s && i[s] && r.hasOwnProperty(s) && (i[s] = r[s])
            }
        }
        ,
        t.UUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16).toUpperCase()
            })
        }
        ,
        t.FREEZE = e,
        t.SEAL = i
    }(MODULE || (MODULE = {}));
    var MODULE;
    MODULE || (MODULE = {});
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function() {
                function e(e) {
                    this.NAME = t.DEF.NAME,
                    this.NAMESPACE = t.DEF.NAMESPACE,
                    this.UUID = t.UUID(),
                    this.state_ = t.State.blank,
                    this.state_ = e
                }
                return e.prototype.MAIN = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                    return this.main_.apply(this, [t].concat(e))
                }
                ,
                e.prototype.main_ = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                    return t
                }
                ,
                e
            }();
            e.Template = i
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function() {
                return function(e) {
                    this.UUID = t.UUID(),
                    this.state_ = t.State.blank,
                    this.state_ = e
                }
            }();
            e.Template = i
        }(t.VIEW || (t.VIEW = {}))
    }(MODULE || (MODULE = {}));
    var __extends = this && this.__extends || function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
        new i)
    }
    , MODULE;
    !function(t) {
        !function(e) {
            var i = function(e) {
                function i(i, n, r, s) {
                    var a = this;
                    e.call(this, t.State.initiate),
                    this.model_ = i,
                    this.controller_ = n,
                    this.context_ = r,
                    this.handlers = {
                        click: function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e - 0] = arguments[e];
                            a.controller_.click(t)
                        },
                        submit: function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e - 0] = arguments[e];
                            a.controller_.submit(t)
                        },
                        popstate: function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e - 0] = arguments[e];
                            a.controller_.popstate(t)
                        },
                        scroll: function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e - 0] = arguments[e];
                            a.controller_.scroll(t)
                        }
                    },
                    t.FREEZE(this),
                    this.observe_(s)
                }
                return __extends(i, e),
                i.prototype.observe_ = function(t) {
                    return this.release_(t),
                    t.link && this.context_.delegate(t.link, t.nss.event.click, this.handlers.click),
                    t.form && this.context_.delegate(t.form, t.nss.event.submit, this.handlers.submit),
                    jQuery(window).bind(t.nss.event.popstate, this.handlers.popstate),
                    t.database.active && t.fix.scroll && jQuery(window).bind(t.nss.event.scroll, this.handlers.scroll),
                    this
                }
                ,
                i.prototype.release_ = function(t) {
                    return t.link && this.context_.undelegate(t.link, t.nss.event.click),
                    t.form && this.context_.undelegate(t.form, t.nss.event.submit),
                    jQuery(window).unbind(t.nss.event.popstate),
                    t.database.active && t.fix.scroll && jQuery(window).unbind(t.nss.event.scroll),
                    this
                }
                ,
                i
            }(e.Template);
            e.Main = i
        }(t.VIEW || (t.VIEW = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        t.View = t.VIEW.Main
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function() {
                function e() {
                    t.FREEZE(this)
                }
                return e.prototype.enable = function() {
                    return t.Model.singleton().enable(),
                    this
                }
                ,
                e.prototype.disable = function() {
                    return t.Model.singleton().disable(),
                    this
                }
                ,
                e.prototype.click = function(e, i) {
                    var n;
                    switch (typeof e) {
                    case "undefined":
                        n = jQuery(this).filter("a").first().clone();
                        break;
                    case "object":
                        n = jQuery(e).clone();
                        break;
                    case "string":
                        i = jQuery.extend(!0, {}, i, {
                            href: e
                        }),
                        n = jQuery("<a/>", i);
                        break;
                    default:
                        return this
                    }
                    var r = t.Model.singleton().configure(n[0]);
                    return r && n.first().one(r.nss.event.click, function() {
                        for (var e = [], i = 0; i < arguments.length; i++)
                            e[i - 0] = arguments[i];
                        return t.Controller.singleton().click(e)
                    }).click(),
                    this
                }
                ,
                e.prototype.submit = function(e, i, n) {
                    var r, s, a, o = document.createDocumentFragment();
                    switch (typeof e) {
                    case "undefined":
                        r = jQuery(this).filter("form").first().clone();
                        break;
                    case "object":
                        r = jQuery(e).clone();
                        break;
                    case "string":
                        i = jQuery.extend(!0, {}, i, {
                            action: e
                        }),
                        s = n instanceof Array && Array || n instanceof Object && Object || undefined;
                        for (var l in n) {
                            switch (s) {
                            case Object:
                                if (!Object.prototype.hasOwnProperty.call(n, l))
                                    continue;
                                a = jQuery("<textarea/>", {
                                    name: l
                                }).val(n[l]);
                                break;
                            case Array:
                                n[l].attrs = n[l].attrs || {},
                                n[l].attrs.name = n[l].name || n[l].attrs.name,
                                n[l].attrs.type = n[l].type || n[l].attrs.type,
                                a = jQuery("<" + n[l].tag + "/>", n[l].attrs).val(n[l].value);
                                break;
                            default:
                                continue
                            }
                            o.appendChild(a[0])
                        }
                        r = jQuery("<form/>", i).append(o);
                        break;
                    default:
                        return this
                    }
                    var c = t.Model.singleton().configure(r[0]);
                    return c && r.first().one(c.nss.event.submit, function() {
                        for (var e = [], i = 0; i < arguments.length; i++)
                            e[i - 0] = arguments[i];
                        return t.Controller.singleton().submit(e)
                    }).submit(),
                    this
                }
                ,
                e.prototype.getCache = function(e) {
                    void 0 === e && (e = window.location.href);
                    var i = t.Model.singleton().getCache(e);
                    return i && (i = {
                        data: i.data,
                        textStatus: i.textStatus,
                        jqXHR: i.jqXHR,
                        expires: i.expires
                    }),
                    i
                }
                ,
                e.prototype.setCache = function(e, i, n, r) {
                    switch (void 0 === e && (e = window.location.href),
                    arguments.length) {
                    case 0:
                        return this.setCache(e, document.documentElement.outerHTML);
                    case 1:
                        return this.setCache(e, null);
                    case 2:
                    case 3:
                    case 4:
                    default:
                        t.Model.singleton().setCache(e, i, n, r)
                    }
                    return this
                }
                ,
                e.prototype.removeCache = function(e) {
                    return void 0 === e && (e = window.location.href),
                    t.Model.singleton().removeCache(e),
                    this
                }
                ,
                e.prototype.clearCache = function() {
                    return t.Model.singleton().clearCache(),
                    this
                }
                ,
                e.prototype.follow = function(e, i, n, r) {
                    if (!t.Model.singleton().isDeferrable)
                        return !1;
                    var s = e.currentTarget;
                    return i.follow = !0,
                    i.host = n || "",
                    isFinite(e.timeStamp) && (i.timeStamp = r || e.timeStamp),
                    t.Model.singleton().setPageXHR(i),
                    jQuery.when(i).done(function() {
                        !t.Model.singleton().getCache(s.href) && t.Model.singleton().isOperatable(e) && t.Model.singleton().setCache(s.href, undefined, undefined, i)
                    }),
                    jQuery[t.DEF.NAME].click(s.href),
                    !0
                }
                ,
                e.prototype.bypass = function() {
                    return t.Model.singleton().bypass()
                }
                ,
                e.prototype.host = function() {
                    return t.Model.singleton().host()
                }
                ,
                e
            }();
            e.Functions = i
        }(t.CONTROLLER || (t.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function() {
                return function() {
                    t.FREEZE(this)
                }
            }();
            e.Methods = i
        }(t.CONTROLLER || (t.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function() {
                function e(e, i) {
                    this.UUID = t.UUID(),
                    this.state_ = t.State.blank,
                    this.PROPERTIES = [],
                    this.state_ = i
                }
                return e.prototype.EXTEND = function(e) {
                    return e instanceof t.DEF.NAMESPACE ? (e instanceof jQuery && (e = e.add()),
                    this.REGISTER_FUNCTION(e),
                    this.REGISTER_METHOD(e)) : (e !== this.EXTENSION && (e = this.EXTENSION),
                    this.REGISTER_FUNCTION(e)),
                    this.UPDATE_PROPERTIES(e),
                    e
                }
                ,
                e.prototype.REGISTER = function(e) {
                    var i = this;
                    this.EXTENSION = this.EXTENSION || function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n - 0] = arguments[n];
                        return t = [i.EXTEND(this)].concat(t),
                        (t = i.EXEC.apply(i, t))instanceof Array ? e.MAIN.apply(e, t) : t
                    }
                    ,
                    this.EXTEND(this.EXTENSION),
                    window[t.DEF.NAMESPACE] = window[t.DEF.NAMESPACE] || {},
                    t.DEF.NAMESPACE.prototype ? t.DEF.NAMESPACE[t.DEF.NAME] = t.DEF.NAMESPACE.prototype[t.DEF.NAME] = this.EXTENSION : t.DEF.NAMESPACE[t.DEF.NAME] = this.EXTENSION
                }
                ,
                e.prototype.EXEC = function() {
                    return this.exec_.apply(this, arguments)
                }
                ,
                e.prototype.exec_ = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                    return [t].concat(e)
                }
                ,
                e.prototype.REGISTER_FUNCTION = function(t) {
                    var e = this.FUNCTIONS;
                    for (var i in e)
                        "constructor" !== i && (t[i] = e[i]);
                    return t
                }
                ,
                e.prototype.REGISTER_METHOD = function(t) {
                    var e = this.METHODS;
                    for (var i in e)
                        "constructor" !== i && (t[i] = e[i]);
                    return t
                }
                ,
                e.prototype.UPDATE_PROPERTIES = function(t) {
                    var e, i, n, r = this.PROPERTIES;
                    for (e = 0,
                    i = r.length; i > e; e++)
                        "constructor" !== e && (n = r[e],
                        t[n] && (t[n] = t[n]()));
                    return t
                }
                ,
                e
            }();
            e.Template = i
        }(t.CONTROLLER || (t.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function(i) {
                function n(n) {
                    i.call(this, n, t.State.initiate),
                    this.model_ = n,
                    this.FUNCTIONS = new e.Functions,
                    this.METHODS = new e.Methods,
                    this.REGISTER(n),
                    t.FREEZE(this)
                }
                return __extends(n, i),
                n.prototype.exec_ = function(t) {
                    var e = [].slice.call(arguments, 1, 2);
                    switch (typeof e[0]) {
                    case "undefined":
                    case "object":
                        break;
                    default:
                        return t
                    }
                    return [t].concat(e)
                }
                ,
                n.prototype.view = function(e, i) {
                    return new t.View(this.model_,this,e,i)
                }
                ,
                n.prototype.click = function(t) {
                    this.model_.click.apply(this.model_, t)
                }
                ,
                n.prototype.submit = function(t) {
                    this.model_.submit.apply(this.model_, t)
                }
                ,
                n.prototype.popstate = function(t) {
                    this.model_.popstate.apply(this.model_, t)
                }
                ,
                n.prototype.scroll = function(t) {
                    this.model_.scroll.apply(this.model_, t)
                }
                ,
                n
            }(e.Template);
            e.Main = i;
            var n = function() {
                function e(n) {
                    void 0 === n && (n = t.Model.singleton()),
                    e.instance_ = e.instance_ || new i(n)
                }
                return e.singleton = function() {
                    return e.instance_
                }
                ,
                e.prototype.singleton = function() {
                    return e.singleton()
                }
                ,
                e
            }();
            e.Singleton = n
        }(t.CONTROLLER || (t.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        t.Controller = t.CONTROLLER.Singleton
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            var e = function() {
                function t(t, e) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = 0),
                    this.list_ = [],
                    this.config_ = {
                        mode: 1,
                        size: 0
                    },
                    this.table_ = {},
                    this.option_ = {},
                    this.config_.mode = t || this.config_.mode,
                    this.config_.size = e || this.config_.size
                }
                return t.prototype.define = function(t, e, i) {
                    void 0 === e && (e = this.config_.mode),
                    void 0 === i && (i = this.config_.size),
                    this.option_[t] = {
                        mode: e,
                        size: i
                    },
                    this.table_[t] = []
                }
                ,
                t.prototype.reserve = function(t, e) {
                    switch (typeof t) {
                    case "string":
                        !this.option_[t] && this.define(t);
                        var i = this.option_[t]
                          , n = this.table_[t]
                          , r = [].slice.call(arguments, 2);
                        break;
                    case "function":
                        e = t,
                        t = undefined;
                        i = this.config_,
                        n = this.list_,
                        r = [].slice.call(arguments, 1);
                        break;
                    default:
                        return
                    }
                    if ("function" == typeof e) {
                        n[i.mode > 0 ? "push" : "unshift"]([e, r.shift(), r])
                    }
                }
                ,
                t.prototype.digest = function(t, e) {
                    switch (typeof t) {
                    case "string":
                        !this.option_[t] && this.define(t),
                        e = e || 0;
                        var i = this.option_[t];
                        if (!(n = this.table_[t]))
                            return;
                        break;
                    case "number":
                    case "undefined":
                        e = t || 0,
                        t = undefined;
                        i = this.config_;
                        var n = this.list_;
                        break;
                    default:
                        return
                    }
                    n.length > i.size && i.size && (i.mode > 0 ? n.splice(0, n.length - i.size) : n.splice(n.length - i.size, n.length));
                    var r;
                    for (e = e || -1; r = e-- && n.pop(); )
                        r.shift().apply(r.shift() || window, r.shift() || []);
                    if (undefined === t) {
                        var s = this.table_;
                        for (var a in s)
                            this.digest(a, e)
                    }
                }
                ,
                t.prototype.clear = function(t) {
                    switch (typeof t) {
                    case "string":
                        !this.option_[t] && this.define(t),
                        this.table_[t].splice(0, this.table_[t].length);
                        break;
                    default:
                        var e = this.table_;
                        for (var i in e)
                            this.clear(i)
                    }
                }
                ,
                t
            }();
            t.Task = e
        }(t.LIBRARY || (t.LIBRARY = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    !function(t) {
                        !function(t) {
                            var e = function() {
                                function t(t) {
                                    this.task_ = t,
                                    this.labels_ = {
                                        done: "done",
                                        fail: "fail",
                                        always: "always"
                                    }
                                }
                                return t.prototype.done = function(t) {
                                    return this.task_.reserve(this.labels_.done, t),
                                    this
                                }
                                ,
                                t.prototype.fail = function(t) {
                                    return this.task_.reserve(this.labels_.fail, t),
                                    this
                                }
                                ,
                                t.prototype.always = function(t) {
                                    return this.task_.reserve(this.labels_.always, t),
                                    this
                                }
                                ,
                                t.prototype.resolve = function() {
                                    return this.task_.clear(this.labels_.fail),
                                    this.task_.digest(this.labels_.done),
                                    this.task_.digest(this.labels_.always),
                                    this
                                }
                                ,
                                t.prototype.reject = function() {
                                    return this.task_.clear(this.labels_.done),
                                    this.task_.digest(this.labels_.fail),
                                    this.task_.digest(this.labels_.always),
                                    this
                                }
                                ,
                                t
                            }();
                            t.Task = e;
                            var i = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e
                            }(e);
                            t.TaskUp = i;
                            var n = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e.prototype.done = function(t) {
                                    return this
                                }
                                ,
                                e.prototype.fail = function(t) {
                                    return this
                                }
                                ,
                                e.prototype.always = function(t) {
                                    return this
                                }
                                ,
                                e.prototype.resolve = function() {
                                    return this
                                }
                                ,
                                e
                            }(e);
                            t.TaskDown = n
                        }(t.STATEFUL || (t.STATEFUL = {}))
                    }(t.DB || (t.DB = {}))
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        var i = function() {
                            function i(e, i, n) {
                                var r = this;
                                this.origin_ = e,
                                this.connect_ = i,
                                this.extend_ = n,
                                this.state_ = function() {
                                    return r.origin_.state()
                                }
                                ,
                                this.task_ = new t.LIBRARY.Task,
                                this.cache_ = {
                                    stateful: {}
                                }
                            }
                            return i.prototype.stateful_ = function() {
                                var i = this
                                  , n = function(t, e) {
                                    return i.cache_.stateful[i.state_()] = i.cache_.stateful[i.state_()] || new t(i.origin_,i.connect_,i.extend_,i.task_,e)
                                };
                                switch (this.state_()) {
                                case t.State.blank:
                                    return n(e.STATE.Blank, !0);
                                case t.State.initiate:
                                    return n(e.STATE.Initiate, !0);
                                case t.State.open:
                                    return n(e.STATE.Open, !0);
                                case t.State.close:
                                    return n(e.STATE.Close, !0);
                                case t.State.terminate:
                                    return n(e.STATE.Terminate, !0);
                                case t.State.error:
                                    return n(e.STATE.Error, !1);
                                default:
                                    return n(e.STATE.Except, !1)
                                }
                            }
                            ,
                            i.prototype.open = function() {
                                return this.stateful_().open()
                            }
                            ,
                            i.prototype.resolve = function() {
                                return this.stateful_().resolve()
                            }
                            ,
                            i.prototype.reject = function() {
                                return this.stateful_().reject()
                            }
                            ,
                            i
                        }();
                        e.Stateful = i
                    }(e.DB || (e.DB = {}))
                }(e.DATA || (e.DATA = {}))
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    !function(t) {
                        !function(e) {
                            var i = function() {
                                function e(e, i, n, r, s) {
                                    this.origin = e,
                                    this.connect = i,
                                    this.extend = n,
                                    this.task = s ? new t.STATEFUL.TaskUp(r) : new t.STATEFUL.TaskDown(r)
                                }
                                return e.prototype.open = function() {
                                    return this.task
                                }
                                ,
                                e.prototype.resolve = function() {}
                                ,
                                e.prototype.reject = function() {
                                    this.task.reject()
                                }
                                ,
                                e
                            }();
                            e.Default = i;
                            var n = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e.prototype.open = function() {
                                    return this.connect(),
                                    this.task
                                }
                                ,
                                e.prototype.resolve = function() {
                                    this.open()
                                }
                                ,
                                e.prototype.reject = function() {
                                    this.task.reject()
                                }
                                ,
                                e
                            }(i);
                            e.Blank = n;
                            var r = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e.prototype.open = function() {
                                    return this.task
                                }
                                ,
                                e.prototype.resolve = function() {}
                                ,
                                e.prototype.reject = function() {
                                    this.task.reject()
                                }
                                ,
                                e
                            }(i);
                            e.Initiate = r;
                            var s = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e.prototype.open = function() {
                                    var t = this;
                                    return this.extend(),
                                    setTimeout(function() {
                                        return t.origin.resolve()
                                    }, 1),
                                    this.task
                                }
                                ,
                                e.prototype.resolve = function() {
                                    this.task.resolve()
                                }
                                ,
                                e.prototype.reject = function() {
                                    this.task.reject()
                                }
                                ,
                                e
                            }(i);
                            e.Open = s;
                            var a = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e.prototype.open = function() {
                                    return this.connect(),
                                    this.task
                                }
                                ,
                                e.prototype.resolve = function() {
                                    this.open()
                                }
                                ,
                                e.prototype.reject = function() {
                                    this.task.reject()
                                }
                                ,
                                e
                            }(i);
                            e.Close = a;
                            var o = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e
                            }(i);
                            e.Terminate = o;
                            var l = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e
                            }(i);
                            e.Error = l;
                            var c = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return __extends(e, t),
                                e
                            }(i);
                            e.Except = c
                        }(t.STATE || (t.STATE = {}))
                    }(t.DB || (t.DB = {}))
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    var e = function() {
                        function t(t) {
                            this.DB = t,
                            this.autoIncrement = !1,
                            this.indexes = [],
                            this.size = 100,
                            this.buffer = {},
                            this.diff = {}
                        }
                        return t.prototype.accessStore = function(t, e) {
                            var i = this;
                            void 0 === e && (e = "readwrite");
                            try {
                                var n = this.DB.database()
                                  , r = n && n.transaction(this.name, e).objectStore(this.name)
                            } catch (t) {}
                            r ? t(r) : this.DB.open().done(function() {
                                return i.accessStore(t)
                            })
                        }
                        ,
                        t.prototype.accessCount = function() {
                            var t = "string" == typeof arguments[0] && arguments[0]
                              , e = arguments[t ? 1 : 0];
                            this.accessStore(function(i) {
                                (t ? i.index(t).count() : i.count()).onsuccess = function() {
                                    e.apply(this, [].slice.call(arguments, 1).concat(this.result))
                                }
                            })
                        }
                        ,
                        t.prototype.accessRecord = function(t, e, i) {
                            this.accessStore(function(i) {
                                i.get(t).onsuccess = e
                            }, i)
                        }
                        ,
                        t.prototype.accessCursor = function(t, e, i, n) {
                            this.accessStore(function(r) {
                                (i && e ? r.index(t).openCursor(e, i) : e ? r.index(t).openCursor(e) : r.openCursor()).onsuccess = n
                            })
                        }
                        ,
                        t.prototype.accessAll = function(t, e, i, n) {
                            "function" == typeof t && (n = t,
                            t = null,
                            e = null,
                            i = null),
                            this.accessCursor(t, e, i, n)
                        }
                        ,
                        t.prototype.get = function(t, e) {
                            var i = this;
                            this.accessRecord(t, function(t) {
                                i.setBuffer(t.target.result),
                                e(t)
                            })
                        }
                        ,
                        t.prototype.set = function(t, e) {
                            var i = this;
                            t = jQuery.extend(!0, {}, t),
                            this.setBuffer(t, e),
                            this.accessRecord(t[this.keyPath], function(n) {
                                n.target.source.put(e ? jQuery.extend(!0, {}, n.target.result, t) : t),
                                i.autoIncrement || delete i.diff[t[i.keyPath]]
                            })
                        }
                        ,
                        t.prototype.remove = function(t) {
                            this.removeBuffer(t),
                            this.accessStore(function(e) {
                                e.delete(t)
                            })
                        }
                        ,
                        t.prototype.clear = function() {
                            this.clearBuffer(),
                            this.accessStore(function(t) {
                                t.clear()
                            })
                        }
                        ,
                        t.prototype.clean = function() {
                            var t = this;
                            if (this.size && this.indexes.length) {
                                var e = this.indexes[0].name
                                  , i = this.size;
                                this.accessCount(e, function(n) {
                                    i >= n || (i = n - i,
                                    t.accessCursor(e, t.DB.IDBKeyRange.upperBound(1 / 0), "next", function(e) {
                                        if (e.target.result && i--) {
                                            var n = e.target.result;
                                            delete t.diff[n.primaryKey],
                                            n.delete(),
                                            n.continue()
                                        }
                                    }))
                                })
                            }
                        }
                        ,
                        t.prototype.loadBuffer = function(t) {
                            function e() {
                                if (!this.result)
                                    return t && t();
                                var e = this.result;
                                i[e.primaryKey] = e.value,
                                e.continue()
                            }
                            if (!this.autoIncrement) {
                                var i = this.buffer;
                                this.indexes.length ? this.DB.IDBKeyRange && this.accessAll(this.indexes[0].name, this.DB.IDBKeyRange.upperBound(1 / 0), "prev", e) : this.accessAll(e)
                            }
                        }
                        ,
                        t.prototype.saveBuffer = function(t) {
                            var e = this;
                            this.autoIncrement || this.accessStore(function(i) {
                                for (var n in e.diff)
                                    i.put(e.diff[n]);
                                t && t()
                            })
                        }
                        ,
                        t.prototype.getBuffers = function() {
                            return this.buffer
                        }
                        ,
                        t.prototype.setBuffers = function(t, e) {
                            for (var i in t)
                                this.setBuffer(t[i], e);
                            return this.buffer
                        }
                        ,
                        t.prototype.getBuffer = function(t) {
                            return this.autoIncrement ? void 0 : this.buffer[t]
                        }
                        ,
                        t.prototype.setBuffer = function(t, e) {
                            if (!this.autoIncrement) {
                                if (!t)
                                    return t;
                                var i = t[this.keyPath];
                                return this.buffer[i] = e ? jQuery.extend(!0, {}, this.buffer[i], t) : t,
                                this.diff[i] = this.buffer[i],
                                this.buffer[i]
                            }
                        }
                        ,
                        t.prototype.removeBuffer = function(t) {
                            if (!this.autoIncrement) {
                                var e = this.buffer[t];
                                return delete this.buffer[t],
                                delete this.diff[t],
                                e
                            }
                        }
                        ,
                        t.prototype.clearBuffer = function() {
                            if (!this.autoIncrement) {
                                for (var t in this.buffer)
                                    delete this.buffer[t];
                                for (var t in this.diff)
                                    delete this.diff[t]
                            }
                        }
                        ,
                        t
                    }();
                    t.Store = e
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    !function(e) {
                        var i = function(t) {
                            function e() {
                                t.apply(this, arguments),
                                this.name = "meta",
                                this.keyPath = "key",
                                this.autoIncrement = !1,
                                this.size = 0
                            }
                            return __extends(e, t),
                            e
                        }(t.Store);
                        e.Meta = i
                    }(t.STORE || (t.STORE = {}))
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    !function(e) {
                        var i = function(t) {
                            function e() {
                                t.apply(this, arguments),
                                this.name = "history",
                                this.keyPath = "url",
                                this.autoIncrement = !1,
                                this.indexes = [{
                                    name: "date",
                                    keyPath: "date",
                                    option: {
                                        unique: !1
                                    }
                                }],
                                this.size = 300
                            }
                            return __extends(e, t),
                            e
                        }(t.Store);
                        e.History = i
                    }(t.STORE || (t.STORE = {}))
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    !function(e) {
                        var i = function(t) {
                            function e() {
                                t.apply(this, arguments),
                                this.name = "server",
                                this.keyPath = "host",
                                this.autoIncrement = !1,
                                this.indexes = [{
                                    name: "score",
                                    keyPath: "score",
                                    option: {
                                        unique: !1
                                    }
                                }],
                                this.size = 100
                            }
                            return __extends(e, t),
                            e
                        }(t.Store);
                        e.Server = i
                    }(t.STORE || (t.STORE = {}))
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                !function(e) {
                    var i = function() {
                        function i() {
                            var i = this;
                            this.IDBFactory = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB,
                            this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange,
                            this.name = t.DEF.NAME,
                            this.version = 10,
                            this.refresh = 10,
                            this.upgrade = 0,
                            this.revision = 0,
                            this.state_ = t.State.blank,
                            this.stateful = new e.DB.Stateful(this,function() {
                                return i.connect()
                            }
                            ,function() {
                                return i.extend()
                            }
                            ),
                            this.age = 1e4,
                            this.expires = 0,
                            this.timer = 0,
                            this.stores = {
                                meta: new e.STORE.Meta(this),
                                history: new e.STORE.History(this),
                                server: new e.STORE.Server(this)
                            },
                            this.meta = {
                                version: {
                                    key: "version",
                                    value: undefined
                                },
                                update: {
                                    key: "update",
                                    value: undefined
                                },
                                revision: {
                                    key: "revision",
                                    value: undefined
                                }
                            }
                        }
                        return i.prototype.state = function() {
                            return this.state_
                        }
                        ,
                        i.prototype.extend = function() {
                            var t = this;
                            this.expires = (new Date).getTime() + this.age,
                            clearTimeout(this.timer),
                            this.timer = setTimeout(function() {
                                return t.check()
                            }, this.age)
                        }
                        ,
                        i.prototype.check = function() {
                            !this.age || (new Date).getTime() <= this.expires || t.State.open === this.state() && this.close()
                        }
                        ,
                        i.prototype.database = function() {
                            return this.extend(),
                            this.database_
                        }
                        ,
                        i.prototype.configure = function(t, e) {
                            this.revision = t,
                            this.refresh = e
                        }
                        ,
                        i.prototype.up = function() {
                            this.state_ = t.State.blank,
                            this.open()
                        }
                        ,
                        i.prototype.down = function() {
                            this.reject(),
                            this.close(),
                            this.state_ = t.State.error
                        }
                        ,
                        i.prototype.open = function() {
                            return !this.IDBFactory && this.down(),
                            this.stateful.open()
                        }
                        ,
                        i.prototype.close = function() {
                            this.database_ && this.database_.close && this.database_.close(),
                            this.state_ = t.State.close
                        }
                        ,
                        i.prototype.resolve = function() {
                            this.stateful.resolve()
                        }
                        ,
                        i.prototype.reject = function() {
                            this.stateful.reject()
                        }
                        ,
                        i.prototype.connect = function() {
                            this.create()
                        }
                        ,
                        i.prototype.create = function() {
                            var e = this;
                            try {
                                this.close(),
                                this.state_ = t.State.initiate;
                                var i = this.IDBFactory.open(this.name, this.upgrade ? this.version : 1)
                                  , n = function() {
                                    e.verify(function() {
                                        e.state_ = t.State.open,
                                        e.resolve(),
                                        e.extend()
                                    })
                                };
                                if ("done" === i.readyState)
                                    this.database_ = i.result,
                                    this.database() ? n() : this.format();
                                else {
                                    var r = setTimeout(function() {
                                        return e.down()
                                    }, 3e3);
                                    i.onblocked = function() {
                                        clearTimeout(r),
                                        e.database_ = i.result,
                                        e.close(),
                                        setTimeout(function() {
                                            return e.open()
                                        }, 1e3)
                                    }
                                    ,
                                    i.onupgradeneeded = function() {
                                        clearTimeout(r),
                                        e.database_ = i.result,
                                        e.createStores()
                                    }
                                    ,
                                    i.onsuccess = function() {
                                        clearTimeout(r),
                                        e.database_ = i.result,
                                        n()
                                    }
                                    ,
                                    i.onerror = function() {
                                        clearTimeout(r),
                                        e.database_ = i.result,
                                        e.down()
                                    }
                                }
                            } catch (t) {
                                this.down()
                            }
                        }
                        ,
                        i.prototype.destroy = function(e, i) {
                            var n = this;
                            try {
                                this.close(),
                                this.state_ = t.State.terminate;
                                var r = this.IDBFactory.deleteDatabase(this.name);
                                r && (r.onsuccess = e,
                                r.onerror = i),
                                setTimeout(function() {
                                    return t.State.terminate === n.state() && n.down()
                                }, 3e3)
                            } catch (t) {
                                this.down()
                            }
                        }
                        ,
                        i.prototype.format = function() {
                            var t = this;
                            this.destroy(function() {
                                return t.up()
                            }, function() {
                                return t.down()
                            })
                        }
                        ,
                        i.prototype.verify = function(t) {
                            var e = this
                              , i = this.database()
                              , n = this.version
                              , r = this.revision
                              , s = this.meta
                              , a = this.stores.meta
                              , o = function() {
                                return e.format()
                            };
                            if (i.objectStoreNames.length === Object.keys(this.stores).length) {
                                for (var l in this.stores) {
                                    var c = i.transaction(this.stores[l].name, "readonly").objectStore(this.stores[l].name);
                                    switch (!1) {
                                    case c.keyPath === this.stores[l].keyPath:
                                    case c.indexNames.length === this.stores[l].indexes.length:
                                        return void o()
                                    }
                                }
                                var h = !1;
                                a.get(s.version.key, function(t) {
                                    if (!h) {
                                        var i = t.target.result;
                                        !i || e.upgrade ? a.set(a.setBuffer({
                                            key: s.version.key,
                                            value: n
                                        })) : i.value > n ? (h = !0,
                                        e.down()) : i.value < n && (h = !0,
                                        o())
                                    }
                                }),
                                a.get(s.revision.key, function(t) {
                                    if (!h) {
                                        var i = t.target.result;
                                        i ? i.value > r ? (h = !0,
                                        e.down()) : i.value < r && (h = !0,
                                        o()) : a.set(a.setBuffer({
                                            key: s.revision.key,
                                            value: r
                                        }))
                                    }
                                }),
                                a.get(s.update.key, function(i) {
                                    if (!h) {
                                        var n = i.target.result
                                          , r = Math.floor((new Date).getTime() / 864e5);
                                        n && e.refresh ? n.value > r ? t() : n.value <= r && o() : (a.set(a.setBuffer({
                                            key: s.update.key,
                                            value: r + e.refresh
                                        })),
                                        t())
                                    }
                                })
                            } else
                                o()
                        }
                        ,
                        i.prototype.createStores = function() {
                            this.destroyStores();
                            var t = this.database();
                            for (var e in this.stores)
                                for (var i, n = this.stores[e], r = t.createObjectStore(n.name, {
                                    keyPath: n.keyPath,
                                    autoIncrement: n.autoIncrement
                                }), s = 0, a = n.indexes; i = a[s]; s++)
                                    r.createIndex(i.name, i.keyPath, i.option)
                        }
                        ,
                        i.prototype.destroyStores = function() {
                            for (var t = this.database(), e = t.objectStoreNames ? t.objectStoreNames.length : 0; e--; )
                                t.deleteObjectStore(t.objectStoreNames[e])
                        }
                        ,
                        i
                    }();
                    e.Database = i
                }(e.DATA || (e.DATA = {}))
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    var e = function() {
                        function t(t) {
                            this.age_ = t
                        }
                        return t.prototype.getCookie = function(t) {
                            if (t && window.navigator.cookieEnabled) {
                                var e = new RegExp("(?:^|; )(" + encodeURIComponent(t) + "=[^;]*)")
                                  , i = (document.cookie.match(e) || []).pop();
                                return i && decodeURIComponent(i.split("=").pop())
                            }
                        }
                        ,
                        t.prototype.setCookie = function(t, e, i) {
                            return void 0 === i && (i = {}),
                            t && window.navigator.cookieEnabled ? (i.age = i.age || this.age_,
                            document.cookie = [encodeURIComponent(t) + "=" + encodeURIComponent(e), i.age ? "; expires=" + new Date((new Date).getTime() + 1e3 * i.age).toUTCString() : "", i.path ? "; path=" + i.path : "; path=/", i.secure ? "; secure" : ""].join(""),
                            this.getCookie(t)) : void 0
                        }
                        ,
                        t
                    }();
                    t.Cookie = e
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                !function(t) {
                    var e = function() {
                        return function() {
                            this.DB = new t.Database,
                            this.Cookie = new t.Cookie(864e3)
                        }
                    }();
                    t.Main = e
                }(t.DATA || (t.DATA = {}))
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            var e = function() {
                function t() {}
                return t.trim = function(t) {
                    if ((t = "string" == typeof t ? t : String(0 === t && t.toString() || "")).trim)
                        t = t.trim();
                    else if (t = t.replace(/^[\s\uFEFF\xA0]+/, "")) {
                        var e = /[\s\uFEFF\xA0]/
                          , i = t.length
                          , n = i % 8;
                        t: {
                            for (; n--; )
                                if (!e.test(t.charAt(--i)))
                                    break t;
                            for (; i; ) {
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t;
                                if (!e.test(t.charAt(--i)))
                                    break t
                            }
                        }
                        t = t.substring(0, i + 1)
                    }
                    return t
                }
                ,
                t.repeat = function(t, e) {
                    switch (t instanceof Array ? "array" : typeof t) {
                    case "string":
                        var i = t;
                        return Array(e + 1).join(i);
                    case "array":
                        var n = t.length;
                        if (300 > e) {
                            var r = Array(e);
                            this.duff(-e, function(e) {
                                return r[e] = t[e % n]
                            })
                        } else {
                            for (r = t.slice(); 2 * r.length <= e; )
                                r = r.concat(r);
                            r = r.concat(r.slice(0, e - r.length))
                        }
                        return r
                    }
                }
                ,
                t.fire = function(t, e, i, n) {
                    return void 0 === e && (e = window),
                    void 0 === i && (i = []),
                    "function" == typeof t ? n ? setTimeout(function() {
                        t.apply(e || window, i)
                    }, 0) : t.apply(e || window, i) : t
                }
                ,
                t.duff = function(t, e) {
                    if (0 > t) {
                        for (var i = (n = -t) % 8; i--; )
                            e(--n);
                        for (; n; )
                            e(--n),
                            e(--n),
                            e(--n),
                            e(--n),
                            e(--n),
                            e(--n),
                            e(--n),
                            e(--n)
                    } else {
                        for (var n = 0, r = (i = t % 8,
                        t / 8 ^ 0); i--; )
                            e(n++);
                        for (; r--; )
                            e(n++),
                            e(n++),
                            e(n++),
                            e(n++),
                            e(n++),
                            e(n++),
                            e(n++),
                            e(n++)
                    }
                }
                ,
                t.duffEx = function(t, e) {
                    if (0 > t) {
                        var i = (n = -t) % 8;
                        t: {
                            for (; i--; )
                                if (!1 === e(--n))
                                    break t;
                            for (; n; ) {
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t;
                                if (!1 === e(--n))
                                    break t
                            }
                        }
                    } else {
                        var n = 0
                          , r = (i = t % 8,
                        t / 8 ^ 0);
                        t: {
                            for (; i--; )
                                if (!1 === e(n++))
                                    break t;
                            for (; r--; ) {
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t;
                                if (!1 === e(n++))
                                    break t
                            }
                        }
                    }
                }
                ,
                t.normalizeUrl = function(t, e) {
                    void 0 === e && (e = !0);
                    var i;
                    return i = this.trim(t),
                    i = /^([^:\/?#]+):\/\/[^\/?#.]+\.[^\/?#]+/i.test(i) ? i : function(t, e) {
                        return e.href = t,
                        e.href
                    }(i, document.createElement("a")),
                    i = encodeURI(decodeURI(i)),
                    i = i.replace(/["`^|\\<>{}\[\]\s].*/, ""),
                    i = e ? this.justifyPercentEncodingUrlCase_(t, i) : i
                }
                ,
                t.canonicalizeUrl = function(t) {
                    var e = this.normalizeUrl(t, !1);
                    return e = e.replace(/(?:%\w{2})+/g, function(t) {
                        return t.toUpperCase()
                    })
                }
                ,
                t.compareUrl = function(t, e) {
                    return t = this.canonicalizeUrl(t),
                    e = this.canonicalizeUrl(e),
                    t === e
                }
                ,
                t.justifyPercentEncodingUrlCase_ = function(t, e) {
                    return t === e ? e : e.replace(/(?:%\w{2})+/g, function(e) {
                        var i = ~t.indexOf(e.toUpperCase()) || ~t.indexOf(e.toLowerCase());
                        return i ? t.substr(~i, e.length) : e
                    })
                }
                ,
                t
            }();
            t.Utility = e
        }(t.LIBRARY || (t.LIBRARY = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                var i = function() {
                    function i(i) {
                        this.model_ = i,
                        this.data_ = new e.DATA.Main,
                        this.stores_ = this.data_.DB.stores,
                        this.util_ = t.LIBRARY.Utility
                    }
                    return i.prototype.getCookie = function(t) {
                        return this.data_.Cookie.getCookie(t)
                    }
                    ,
                    i.prototype.setCookie = function(t, e, i) {
                        return this.data_.Cookie.setCookie(t, e, i)
                    }
                    ,
                    i.prototype.connect = function(t) {
                        t.database.active ? (this.data_.DB.configure(t.database.revision, t.database.refresh),
                        this.data_.DB.up(),
                        this.saveTitle(),
                        this.saveScrollPosition()) : this.data_.DB.down()
                    }
                    ,
                    i.prototype.loadBuffers = function() {
                        for (var t in this.stores_)
                            this.stores_[t].loadBuffer()
                    }
                    ,
                    i.prototype.saveBuffers = function() {
                        for (var t in this.stores_)
                            this.stores_[t].saveBuffer()
                    }
                    ,
                    i.prototype.getHistoryBuffer = function(t) {
                        return this.stores_.history.getBuffer(this.model_.convertUrlToKey(t, !0))
                    }
                    ,
                    i.prototype.loadTitle = function() {
                        var t = this
                          , e = this.model_.convertUrlToKey(window.location.href, !0)
                          , i = this.stores_.history.getBuffer(e);
                        i && "string" == typeof i.title ? document.title = i.title : this.stores_.history.get(e, function(n) {
                            (i = n.target.result) && i.title && t.model_.compareKeyByUrl(e, t.util_.canonicalizeUrl(window.location.href)) && (document.title = i.title)
                        })
                    }
                    ,
                    i.prototype.saveTitle = function(t, e) {
                        void 0 === t && (t = window.location.href),
                        void 0 === e && (e = document.title);
                        var i = {
                            url: this.model_.convertUrlToKey(t, !0),
                            title: e,
                            date: (new Date).getTime(),
                            scrollX: undefined,
                            scrollY: undefined,
                            host: undefined,
                            expires: undefined
                        };
                        this.stores_.history.set(i, !0),
                        this.stores_.history.clean()
                    }
                    ,
                    i.prototype.loadScrollPosition = function() {
                        function t(t, e) {
                            "number" == typeof t && "number" == typeof e && window.scrollTo(parseInt(Number(t) + "", 10), parseInt(Number(e) + "", 10))
                        }
                        var e = this
                          , i = this.model_.convertUrlToKey(window.location.href, !0)
                          , n = this.stores_.history.getBuffer(i);
                        n && "number" == typeof n.scrollX ? t(n.scrollX, n.scrollY) : this.stores_.history.get(i, function(r) {
                            (n = r.target.result) && "number" == typeof n.scrollX && e.model_.compareKeyByUrl(i, e.util_.canonicalizeUrl(window.location.href)) && t(n.scrollX, n.scrollY)
                        })
                    }
                    ,
                    i.prototype.saveScrollPosition = function(t, e, i) {
                        void 0 === t && (t = window.location.href),
                        void 0 === e && (e = jQuery(window).scrollLeft()),
                        void 0 === i && (i = jQuery(window).scrollTop());
                        var n = {
                            url: this.model_.convertUrlToKey(t, !0),
                            scrollX: e,
                            scrollY: i,
                            date: (new Date).getTime(),
                            title: undefined,
                            host: undefined,
                            expires: undefined
                        };
                        this.stores_.history.set(n, !0)
                    }
                    ,
                    i.prototype.loadExpires = function() {}
                    ,
                    i.prototype.saveExpires = function(t, e, i) {
                        var n = {
                            url: this.model_.convertUrlToKey(t, !0),
                            host: e || "",
                            expires: i,
                            title: undefined,
                            scrollX: undefined,
                            scrollY: undefined,
                            date: undefined
                        };
                        this.stores_.history.set(n, !0)
                    }
                    ,
                    i.prototype.getServerBuffers = function() {
                        return this.stores_.server.getBuffers()
                    }
                    ,
                    i.prototype.getServerBuffer = function(t) {
                        var e = this.model_.convertUrlToKey(t, !0).split("//").pop().split("/").shift();
                        return e = this.model_.compareKeyByUrl("http://" + e, "http://" + window.location.host) ? "" : e,
                        this.stores_.server.getBuffer(e)
                    }
                    ,
                    i.prototype.loadServer = function() {}
                    ,
                    i.prototype.saveServer = function(t, e, i, n, r) {
                        t = t.split("//").pop().split("/").shift();
                        var s = {
                            host: t = this.model_.compareKeyByUrl("http://" + t, "http://" + window.location.host) ? "" : t,
                            time: Math.max(i, 1),
                            score: n,
                            state: r,
                            expires: e
                        };
                        this.stores_.server.set(s, !0),
                        this.stores_.server.clean()
                    }
                    ,
                    i.prototype.removeServer = function(t) {
                        this.stores_.server.remove(t),
                        this.stores_.server.clean()
                    }
                    ,
                    i
                }();
                e.Data = i
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                var i = function() {
                    function e(e) {
                        this.data_ = e,
                        this.util_ = t.LIBRARY.Utility,
                        this.force_ = !1,
                        this._host = "",
                        this.parallel_ = 4
                    }
                    return e.prototype.host_ = function(t, e) {
                        return e && (this._host = e.balance.active ? this.sanitize(t, e).split("//").pop().split("/").shift() || "" : ""),
                        this._host
                    }
                    ,
                    e.prototype.host = function() {
                        return this.host_()
                    }
                    ,
                    e.prototype.sanitize = function(t, e) {
                        if (!e)
                            return "";
                        var i;
                        switch (t && typeof t) {
                        case "string":
                            i = t;
                            break;
                        case "object":
                            var n = t;
                            i = 4 === n.readyState && n.getResponseHeader(e.balance.server.header) || n.host
                        }
                        return i = i || "",
                        !/[\/?#"`^|\\<>{}\[\]\s]/.test(i) && jQuery.grep(e.balance.bounds, function(t) {
                            return "" === i || "*" === t || i === t || "." === t.charAt(0) && t === i.slice(-t.length)
                        }).length && i || ""
                    }
                    ,
                    e.prototype.enable = function(t) {
                        return t.balance.active && t.balance.client.support.browser.test(window.navigator.userAgent) ? (this.data_.setCookie(t.balance.client.cookie.balance, "1"),
                        void (t.balance.client.support.redirect.test(window.navigator.userAgent) && this.data_.setCookie(t.balance.client.cookie.redirect, "1"))) : void this.disable(t)
                    }
                    ,
                    e.prototype.disable = function(t) {
                        this.data_.getCookie(t.balance.client.cookie.balance) && this.data_.setCookie(t.balance.client.cookie.balance, "0"),
                        this.data_.getCookie(t.balance.client.cookie.redirect) && this.data_.setCookie(t.balance.client.cookie.redirect, "0"),
                        this.changeServer("", t)
                    }
                    ,
                    e.prototype.score = function(t, e) {
                        return Math.max(Math.round(e / t * 1e3), 0)
                    }
                    ,
                    e.prototype.changeServer = function(t, e) {
                        return e.balance.active ? (this.host_(t, e),
                        this.data_.setCookie(e.balance.client.cookie.host, t)) : this.host_("", e),
                        this.host()
                    }
                    ,
                    e.prototype.chooseServers_ = function(t) {
                        var e = this
                          , i = t.balance.server.respite
                          , n = t.balance.weight
                          , r = t.ajax.timeout
                          , s = t.balance.client.hosts.slice();
                        s = this.force_ ? jQuery.grep(s, function(t) {
                            return !!t
                        }) : s,
                        function() {
                            var i = e.data_.getCookie(t.balance.client.cookie.host);
                            (!e.force_ || i) && (i === e.sanitize(i, t) ? !~jQuery.inArray(i, s) && s.unshift(i) : e.data_.setCookie(t.balance.client.cookie.host, ""))
                        }();
                        var a = this.data_.getServerBuffers()
                          , o = {};
                        jQuery.each(Object.keys(a), function(i, n) {
                            var r = a[n];
                            ~jQuery.inArray(r.host, s) && s.splice(jQuery.inArray(r.host, s), 1),
                            (!e.force_ || r.host) && (r.host === e.sanitize(r.host, t) && r.expires > (new Date).getTime() ? o[r.score] = r : e.data_.removeServer(r.host))
                        });
                        var l, c = Object.keys(o).sort(function(t, e) {
                            return +e - +t
                        }), h = [];
                        for (jQuery.each(c, function(a) {
                            var u = o[c[a]]
                              , p = u.host
                              , d = u.time
                              , f = u.score
                              , m = u.state;
                            if (~jQuery.inArray(p, s) && s.splice(jQuery.inArray(p, s), 1),
                            !(m + i >= (new Date).getTime())) {
                                switch (m && e.data_.removeServer(u.host),
                                !0) {
                                case h.length >= t.balance.random && 0 < h.length:
                                    return !1;
                                case n && !p && !!Math.floor(Math.random() * n):
                                case r && d >= r:
                                case h.length >= Math.min(Math.floor(c.length / 2), 3) && l && d >= l.time + 500 && r && d >= 2 * r / 3:
                                case h.length >= Math.min(Math.floor(c.length / 2), 3) && l && f <= l.score / 2:
                                    return
                                }
                                l = l || u,
                                h.push(p)
                            }
                        }); s.length; )
                            h.push(s.splice(Math.floor(Math.random() * s.length), 1).shift());
                        return h
                    }
                    ,
                    e.prototype.chooseServerFromCache_ = function(t) {
                        var e = this
                          , i = []
                          , n = this.data_.getHistoryBuffer(t.destLocation.href);
                        switch (!0) {
                        case !n:
                            break;
                        case n.host !== this.sanitize(n.host, t):
                            this.data_.saveExpires(n.url, "", 0);
                        case !n.expires:
                        case n.expires < (new Date).getTime():
                        case this.force_ && !n.host:
                            break;
                        default:
                            i = jQuery.map(this.data_.getServerBuffers(), function(t) {
                                return t.host === n.host ? t.state >= (new Date).getTime() ? void e.data_.saveExpires(n.url, n.host, 0) : t.host : void 0
                            })
                        }
                        return i.length ? i.pop() || " " : ""
                    }
                    ,
                    e.prototype.chooseServerFromScore_ = function(t) {
                        var e = this.chooseServers_(t);
                        return e.slice(Math.floor(Math.random() * Math.min(e.length, 6))).shift() || " "
                    }
                    ,
                    e.prototype.chooseServer = function(t) {
                        return t.balance.active ? this.util_.trim(this.chooseServerFromCache_(t) || this.chooseServerFromScore_(t)) : ""
                    }
                    ,
                    e.prototype.bypass = function(t) {
                        var e = this;
                        this.force_ = !0;
                        var i = jQuery.Deferred();
                        if (!t || !t.balance.active)
                            return i.reject();
                        for (var n = this.parallel_, r = this.chooseServers_(t), s = jQuery.extend({}, t.ajax, t.balance.option.ajax), a = 0, o = (r = jQuery.grep(r, function(t) {
                            return !!t
                        })).length, l = function(n) {
                            var c = e
                              , h = (new Date).getTime();
                            "pending" === i.state() && jQuery.ajax(jQuery.extend({}, s, {
                                url: c.util_.normalizeUrl(window.location.protocol + "//" + n + window.location.pathname.replace(/^\/?/, "/") + window.location.search),
                                xhr: t.balance.option.callbacks.ajax.xhr ? function() {
                                    var e;
                                    return e = c.util_.fire(t.balance.option.callbacks.ajax.xhr, this, [event, t]),
                                    e = "object" == typeof e ? e : jQuery.ajaxSettings.xhr()
                                }
                                : undefined,
                                beforeSend: t.balance.option.callbacks.ajax.beforeSend || t.server.header ? function(e, i) {
                                    t.server.header && e.setRequestHeader(t.nss.requestHeader, "true"),
                                    "object" == typeof t.server.header && (e.setRequestHeader(t.nss.requestHeader, "true"),
                                    t.server.header.area && e.setRequestHeader(t.nss.requestHeader + "-Area", this.app_.chooseArea(t.area, document, document)),
                                    t.server.header.head && e.setRequestHeader(t.nss.requestHeader + "-Head", t.load.head),
                                    t.server.header.css && e.setRequestHeader(t.nss.requestHeader + "-CSS", t.load.css.toString()),
                                    t.server.header.script && e.setRequestHeader(t.nss.requestHeader + "-Script", t.load.script.toString())),
                                    c.util_.fire(t.balance.option.callbacks.ajax.beforeSend, this, [event, t, e, i])
                                }
                                : undefined,
                                dataFilter: t.balance.option.callbacks.ajax.dataFilter ? function(e, i) {
                                    return c.util_.fire(t.balance.option.callbacks.ajax.dataFilter, this, [event, t, e, i]) || e
                                }
                                : undefined,
                                success: function(e, i, r) {
                                    h = (new Date).getTime() - h;
                                    var s = c.data_.getServerBuffer(this.url)
                                      , a = c.score(h, r.responseText.length);
                                    h = s && !s.state && s.time ? Math.round((s.time + h) / 2) : h,
                                    a = s && !s.state && s.score ? Math.round((s.score + a) / 2) : a,
                                    c.data_.saveServer(n, (new Date).getTime() + t.balance.server.expires, h, a, 0),
                                    n = c.sanitize(r, t) || n,
                                    c.util_.fire(t.balance.option.ajax.success, this, arguments)
                                },
                                error: function(e) {
                                    c.data_.saveServer(n, (new Date).getTime() + t.balance.server.expires, 0, 0, (new Date).getTime()),
                                    n = null,
                                    c.util_.fire(t.balance.option.ajax.error, this, arguments)
                                },
                                complete: function() {
                                    c.util_.fire(t.balance.option.ajax.complete, this, arguments),
                                    ++a,
                                    i.notify(a, o, n),
                                    n ? (c.host_(n, t),
                                    r.splice(0, r.length),
                                    i.resolve(n)) : !c.host() && r.length ? l(r.shift()) : i.reject()
                                }
                            }))
                        }; n-- && r.length; )
                            l(r.shift());
                        return i
                    }
                    ,
                    e
                }();
                e.Balancer = i
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                var e = function() {
                    function t(t, e, n, r, s, a) {
                        this.data_ = t ? {
                            url: t,
                            data: e,
                            textStatus: n,
                            jqXHR: r,
                            host: s,
                            bind: a
                        } : {
                            url: undefined,
                            data: undefined,
                            textStatus: undefined,
                            jqXHR: undefined,
                            host: undefined,
                            bind: undefined
                        },
                        this.data = new i(this.data_)
                    }
                    return t.prototype.state = function(t) {
                        var e = t ? t.cache.expires.min : undefined
                          , i = t ? t.cache.expires.max : undefined;
                        switch (!1) {
                        case this.data.jqXHR() && 200 == +this.data.jqXHR().status:
                        case this.data.expires(e, i) >= (new Date).getTime():
                            return !1;
                        default:
                            return !0
                        }
                    }
                    ,
                    t
                }();
                t.PageRecord = e;
                var i = function() {
                    function t(t) {
                        this.data_ = t
                    }
                    return t.prototype.url = function() {
                        return this.data_.url
                    }
                    ,
                    t.prototype.data = function() {
                        return this.data_.data
                    }
                    ,
                    t.prototype.textStatus = function() {
                        return this.data_.textStatus
                    }
                    ,
                    t.prototype.jqXHR = function() {
                        return this.data_.jqXHR
                    }
                    ,
                    t.prototype.bind = function() {
                        return this.data_.bind
                    }
                    ,
                    t.prototype.host = function() {
                        return this.data_.host
                    }
                    ,
                    t.prototype.expires = function(t, e) {
                        if (!this.jqXHR() && !this.data())
                            return 0;
                        var i, n = this.jqXHR();
                        switch (n && (n.timeStamp = n.timeStamp || new Date(n.getResponseHeader("Date")).getTime() || (new Date).getTime()),
                        !0) {
                        case !n:
                        case /no-store|no-cache/.test(n.getResponseHeader("Cache-Control")):
                            i = 0;
                            break;
                        case !!n.getResponseHeader("Cache-Control") && !!~n.getResponseHeader("Cache-Control").indexOf("max-age="):
                            i = new Date(n.getResponseHeader("Date") || new Date(n.timeStamp).toString()).getTime() + 1e3 * +n.getResponseHeader("Cache-Control").match(/max-age=(\d*)/).pop();
                            break;
                        case !!n.getResponseHeader("Expires"):
                            i = new Date(n.getResponseHeader("Expires")).getTime();
                            break;
                        default:
                            i = 0
                        }
                        return (undefined !== t || undefined !== e) && (i = "number" == typeof t ? Math.max(t + (new Date).getTime(), i) : i,
                        i = "number" == typeof e ? Math.min(e + (new Date).getTime(), i) : i),
                        i = Math.max(i, 0) || 0
                    }
                    ,
                    t
                }();
                t.PageRecordData = i
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                var e = function() {
                    function t() {}
                    return t.prototype.chooseArea = function(t, e, i, n) {
                        void 0 === n && (n = !0);
                        var r = "string" == typeof t ? [t] : t;
                        t: for (var s = 0; s < r.length; s++) {
                            for (var a = r[s], o = a.match(/(?:[^,\(\[]+|\(.*?\)|\[.*?\])+/g) || [a], l = o.length; l--; ) {
                                var c = o[l];
                                switch (!0) {
                                case 0 === jQuery(c, e).length:
                                case jQuery(c, e).length !== jQuery(c, i).length:
                                    continue t
                                }
                            }
                            return a
                        }
                        return ""
                    }
                    ,
                    t.prototype.dispatchEvent = function(t, e, i, n) {
                        var r = document.createEvent("HTMLEvents");
                        r.initEvent(e, i, n),
                        t.dispatchEvent(r)
                    }
                    ,
                    t
                }();
                t.PageUtility = e
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                var i = function() {
                    function e(e, i, n, r, s, a, o) {
                        this.model_ = e,
                        this.page_ = i,
                        this.balancer_ = n,
                        this.setting_ = r,
                        this.event_ = s,
                        this.success_ = a,
                        this.failure_ = o,
                        this.util_ = t.LIBRARY.Utility,
                        this.binds_ = [],
                        this.jsons_ = [],
                        this.main_()
                    }
                    return e.prototype.main_ = function() {
                        function e(t, e, i) {
                            return n.call(this, [].slice.call(arguments), undefined)
                        }
                        function i(t, e) {
                            return s.apply(this, arguments)
                        }
                        function n(t, e, i) {
                            void 0 === i && (i = []),
                            arguments.length && arguments[0] && (a.data_ = t[0],
                            a.textStatus_ = t[1],
                            a.jqXHR_ = t[2],
                            a.binds_ = i.every(function(t) {
                                return !!t && "object" == typeof t
                            }) ? i : [i[2]],
                            a.util_.fire(o.callbacks.ajax.success, this[0] || this, [l, o, a.data_, a.textStatus_, a.jqXHR_]))
                        }
                        function r(t, e, i) {
                            arguments.length && arguments[0] && (a.jqXHR_ = t,
                            a.textStatus_ = e,
                            a.errorThrown_ = i,
                            a.binds_ = [],
                            a.util_.fire(o.callbacks.ajax.error, this[0] || this, [l, o, a.jqXHR_, a.textStatus_, a.errorThrown_]))
                        }
                        function s() {
                            arguments.length && arguments[0] && (a.util_.fire(o.callbacks.ajax.complete, this[0] || this, [l, o, a.jqXHR_, a.textStatus_]),
                            a.model_.setPageXHR(null),
                            a.model_.setDataXHR(null),
                            200 == +a.jqXHR_.status && a.binds_.every(function(t) {
                                return 200 == +t.status
                            }) ? (a.binds_.forEach(function(t, e) {
                                return a.binds_[e].responseJSON = a.binds_[e].responseJSON || a.jsons_[e]
                            }),
                            a.model_.setCache(o.destLocation.href, p && p.data || null, a.textStatus_, a.jqXHR_),
                            a.success_(o, l, a.data_, a.textStatus_, a.jqXHR_, a.host_, a.binds_)) : a.failure_(o, l, a.data_, a.textStatus_, a.jqXHR_, a.host_, a.binds_))
                        }
                        var a = this
                          , o = this.setting_
                          , l = this.event_ = jQuery.extend(!0, {}, this.event_)
                          , c = this.util_.fire(o.wait, o, [l, o, o.origLocation.cloneNode(), o.destLocation.cloneNode()])
                          , h = o.speedcheck
                          , u = this.model_.speed;
                        h && (u.fire = l.timeStamp),
                        h && u.time.splice(0, 100, 0),
                        h && u.name.splice(0, 100, "pjax(" + u.time.slice(-1) + ")");
                        var p;
                        switch (o.cache[l.type.toLowerCase()] && l.type.toLowerCase()) {
                        case t.EVENT.CLICK:
                            p = this.model_.getCache(o.destLocation.href);
                            break;
                        case t.EVENT.SUBMIT:
                            p = o.cache[l.currentTarget.method.toLowerCase()] ? this.model_.getCache(o.destLocation.href) : p;
                            break;
                        case t.EVENT.POPSTATE:
                            p = this.model_.getCache(o.destLocation.href)
                        }
                        var d = this.model_.getPageXHR();
                        if (!(d && d.readyState < 4 && d.location && this.model_.comparePageByUrl(d.location.href, o.destLocation.href)))
                            if (this.dispatchEvent(document, o.nss.event.pjax.fetch, !1, !1),
                            p && p.jqXHR && 200 == +p.jqXHR.status)
                                if (h && u.name.splice(0, 1, "cache(" + u.time.slice(-1) + ")"),
                                this.host_ = this.model_.host(),
                                this.model_.setDataXHR(this.bind_(this.util_.fire(o.bind, o, [l, o, o.origLocation.cloneNode(), o.destLocation.cloneNode()]))),
                                d = p.jqXHR,
                                d.location = d.location || o.destLocation.cloneNode(),
                                this.model_.setPageXHR(d),
                                this.page_.loadtime = 0,
                                this.host_ = this.balancer_.sanitize(p.host, o),
                                this.data_ = p.jqXHR.responseText,
                                this.textStatus_ = p.textStatus,
                                this.jqXHR_ = p.jqXHR,
                                this.model_.isDeferrable) {
                                    var f = this.wait_(c);
                                    this.page_.setWait(f),
                                    jQuery.when(jQuery.Deferred().resolve(this.data_, this.textStatus_, this.jqXHR_), f, jQuery.when.apply(null, this.model_.getDataXHR())).done(n).fail(r).always(s)
                                } else {
                                    var m = jQuery.extend({}, jQuery.ajaxSettings, o.ajax);
                                    m = m.context || m,
                                    e.call(m, this.data_, this.textStatus_, this.jqXHR_),
                                    i.call(m, this.jqXHR_, this.textStatus_)
                                }
                            else if (d && d.follow && !~"error abort timeout parsererror".indexOf(d.statusText)) {
                                h && u.time.splice(0, 1, d.timeStamp - u.fire),
                                h && u.name.splice(0, 1, "preload(" + u.time.slice(-1) + ")"),
                                h && u.time.push(u.now() - u.fire),
                                h && u.name.push("continue(" + u.time.slice(-1) + ")"),
                                this.host_ = this.model_.host(),
                                this.model_.setDataXHR(this.bind_(this.util_.fire(o.bind, o, [l, o, o.origLocation.cloneNode(), o.destLocation.cloneNode()]))),
                                d.location = o.destLocation.cloneNode(),
                                this.model_.setPageXHR(d),
                                this.host_ = this.model_.host(),
                                this.page_.loadtime = d.timeStamp;
                                f = this.wait_(c);
                                this.page_.setWait(f),
                                delete d.timeStamp,
                                jQuery.when(d, f, jQuery.when.apply(null, this.model_.getDataXHR())).done(n).fail(r).always(s)
                            } else {
                                this.page_.loadtime = l.timeStamp;
                                var _ = {};
                                this.host_ = this.model_.host(),
                                this.model_.setDataXHR(this.bind_(this.util_.fire(o.bind, o, [l, o, o.origLocation.cloneNode(), o.destLocation.cloneNode()])));
                                var g = this.balance_(o.destLocation.href);
                                switch (_.url = o.server.query ? [g.protocol, "//", g.host, g.pathname.replace(/^\/?/, "/"), g.search.replace(/&*$/, "&" + o.server.query).replace(/^\??&/, "?").replace(/(\?|&)$/, ""), g.hash].join("") : g.href,
                                l.type.toLowerCase()) {
                                case t.EVENT.CLICK:
                                    _.type = "GET";
                                    break;
                                case t.EVENT.SUBMIT:
                                    switch (_.type = l.currentTarget.method.toUpperCase(),
                                    _.type) {
                                    case "POST":
                                        jQuery(l.currentTarget).has(":file").length ? "function" == typeof FormData && (_.data = (new FormData)(l.currentTarget),
                                        _.contentType = !1,
                                        _.processData = !1) : _.data = jQuery(l.currentTarget).serializeArray()
                                    }
                                    break;
                                case t.EVENT.POPSTATE:
                                    _.type = "GET"
                                }
                                if (_ = jQuery.extend({}, o.ajax, _, {
                                    xhr: o.callbacks.ajax.xhr ? function() {
                                        var t;
                                        return t = a.util_.fire(o.callbacks.ajax.xhr, this, [l, o]),
                                        t = "object" == typeof t ? t : jQuery.ajaxSettings.xhr()
                                    }
                                    : undefined,
                                    beforeSend: o.callbacks.ajax.beforeSend || o.server.header ? function(t, e) {
                                        o.server.header && t.setRequestHeader(o.nss.requestHeader, "true"),
                                        "object" == typeof o.server.header && (t.setRequestHeader(o.nss.requestHeader, "true"),
                                        o.server.header.area && t.setRequestHeader(o.nss.requestHeader + "-Area", this.app_.chooseArea(o.area, document, document)),
                                        o.server.header.head && t.setRequestHeader(o.nss.requestHeader + "-Head", o.load.head),
                                        o.server.header.css && t.setRequestHeader(o.nss.requestHeader + "-CSS", o.load.css.toString()),
                                        o.server.header.script && t.setRequestHeader(o.nss.requestHeader + "-Script", o.load.script.toString())),
                                        a.util_.fire(o.callbacks.ajax.beforeSend, this, [l, o, t, e])
                                    }
                                    : undefined,
                                    dataFilter: o.callbacks.ajax.dataFilter ? function(t, e) {
                                        return a.util_.fire(o.callbacks.ajax.dataFilter, this, [l, o, t, e]) || t
                                    }
                                    : undefined,
                                    success: this.model_.isDeferrable ? null : e,
                                    error: this.model_.isDeferrable ? null : function(t, e, i) {
                                        return r.apply(this, arguments)
                                    }
                                    ,
                                    complete: this.model_.isDeferrable ? null : i
                                }),
                                d = jQuery.ajax(_),
                                d.location = o.destLocation.cloneNode(),
                                this.model_.setPageXHR(d),
                                !this.model_.isDeferrable)
                                    return;
                                f = this.wait_(c);
                                this.page_.setWait(f),
                                jQuery.when(this.model_.getPageXHR(), f, jQuery.when.apply(null, this.model_.getDataXHR())).done(n).fail(r).always(s)
                            }
                    }
                    ,
                    e.prototype.balance_ = function(t) {
                        var e = (this.setting_,
                        document.createElement("a"));
                        return e.href = t,
                        e.host = this.host_ || e.host,
                        e
                    }
                    ,
                    e.prototype.bind_ = function(t) {
                        var e = this;
                        return (t || []).map(function(t) {
                            return t.url = e.util_.canonicalizeUrl(t.url),
                            t.url.indexOf("//") > -1 ? t : (t.url = e.balance_(t.url).href,
                            t)
                        }).map(jQuery.ajax).map(function(t, i) {
                            return t.done(function(t, n, r) {
                                var s = t;
                                switch (r.getResponseHeader("Content-Type").split("/").pop()) {
                                case "json":
                                    if (r.responseJSON)
                                        break;
                                    if (e.jsons_[i])
                                        for (var a in s)
                                            e.jsons_[i][a] = s[a];
                                    else
                                        e.jsons_[i] = s
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.wait_ = function(t) {
                        var e = jQuery.Deferred();
                        return t ? (setTimeout(function() {
                            e.resolve()
                        }, t),
                        e) : e.resolve()
                    }
                    ,
                    e.prototype.chooseArea = function(t, e, i) {}
                    ,
                    e.prototype.dispatchEvent = function(t, e, i, n) {}
                    ,
                    e
                }();
                e.PageFetch = i
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            !function(t) {
                var e = function() {
                    function e(e, i, n, r) {
                        this.Record_ = e,
                        this.model_ = i,
                        this.balancer_ = n,
                        this.page_ = r,
                        this.hash_ = function(t) {
                            return t.nss.url
                        }
                        ,
                        this.table_ = {},
                        this.order_ = [],
                        this.fetch_ = t.PageFetch
                    }
                    return e.prototype.fetchRecord = function(t, e, i, n) {
                        this.getRecord(t).state(t),
                        this.pullRecord(t, e, i, n)
                    }
                    ,
                    e.prototype.pullRecord = function(t, e, i, n) {
                        var r = this;
                        new this.fetch_(this.model_,this.page_,this.balancer_,t,e,function(t, e, n, s, a, o, l) {
                            var c = r.setRecord(t, r.getRecord(t).data.data() || "", s, a, o, l);
                            i(c, t, e)
                        }
                        ,function(t, e, i, s, a, o, l) {
                            var c = r.setRecord(t, r.getRecord(t).data.data() || "", s, a, o, l);
                            n(c, t, e)
                        }
                        )
                    }
                    ,
                    e.prototype.getRecord = function(t) {
                        return this.table_[this.hash_(t)] = this.table_[this.hash_(t)] || new this.Record_
                    }
                    ,
                    e.prototype.setRecord = function(t, e, i, n, r, s) {
                        return this.cleanRecords_(t),
                        this.addOrder_(t),
                        this.table_[this.hash_(t)] = new this.Record_(t.nss.url,e,i,n,r,s)
                    }
                    ,
                    e.prototype.removeRecord = function(t) {
                        return this.removeOrder_(t),
                        this.table_[this.hash_(t)] = new this.Record_
                    }
                    ,
                    e.prototype.clearRecord = function() {
                        this.order_.splice(0, this.order_.length);
                        for (var t in this.table_)
                            delete this.table_[t]
                    }
                    ,
                    e.prototype.cleanRecords_ = function(t) {
                        if (t.cache.limit)
                            for (; this.order_.length >= t.cache.limit; )
                                this.removeRecord(this.order_.pop())
                    }
                    ,
                    e.prototype.addOrder_ = function(t) {
                        this.removeOrder_(t),
                        this.order_.unshift(t)
                    }
                    ,
                    e.prototype.removeOrder_ = function(t) {
                        for (var e = this.order_.length; e--; )
                            this.order_[e].nss.url === t.nss.url && this.order_.splice(e, 1)
                    }
                    ,
                    e
                }();
                t.PageProvider = e
            }(t.APP || (t.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                var i = function() {
                    function e(e, i, n, r, s, a, o) {
                        this.model_ = e,
                        this.page_ = i,
                        this.data_ = n,
                        this.balancer_ = r,
                        this.setting_ = s,
                        this.event_ = a,
                        this.record_ = o,
                        this.util_ = t.LIBRARY.Utility,
                        this.loadwaits_ = [],
                        this.main_()
                    }
                    return e.prototype.main_ = function() {
                        var e = this.record_
                          , i = this.setting_
                          , n = this.event_
                          , r = i.speedcheck
                          , s = this.model_.speed;
                        if (r && s.time.push(s.now() - s.fire),
                        r && s.name.push("fetch(" + s.time.slice(-1) + ")"),
                        ++this.page_.count,
                        this.page_.loadtime = this.page_.loadtime && (new Date).getTime() - this.page_.loadtime,
                        i.cache.mix && t.EVENT.POPSTATE !== n.type.toLowerCase() && (new Date).getTime() - n.timeStamp <= i.cache.mix)
                            return this.model_.fallback(n);
                        try {
                            if (this.page_.landing = null,
                            !~(e.data.jqXHR().getResponseHeader("Content-Type") || "").toLowerCase().search(i.contentType))
                                throw new Error("throw: content-type mismatch");
                            if (this.srcTitle_ = jQuery(e.data.jqXHR().responseText.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i).pop()).text(),
                            this.dstTitle_ = document.title,
                            this.redirect_(),
                            this.blur_(),
                            this.dispatchEvent(window, i.nss.event.pjax.unload, !1, !1),
                            this.url_(),
                            !this.model_.comparePageByUrl(i.destLocation.href, window.location.href))
                                throw new Error("throw: location mismatch");
                            this.document_()
                        } catch (t) {
                            if (!t)
                                return;
                            this.model_.getCache(window.location.href) && this.model_.removeCache(i.destLocation.href),
                            this.model_.fallback(n)
                        }
                    }
                    ,
                    e.prototype.isRegister_ = function(e, i) {
                        if (e.destLocation.href === e.origLocation.href)
                            return !1;
                        switch (i.type.toLowerCase()) {
                        case t.EVENT.CLICK:
                        case t.EVENT.SUBMIT:
                            return !0;
                        case t.EVENT.POPSTATE:
                            return !1
                        }
                    }
                    ,
                    e.prototype.isReplace_ = function(e, i) {
                        switch (i.type.toLowerCase()) {
                        case t.EVENT.CLICK:
                        case t.EVENT.SUBMIT:
                            return jQuery(i.currentTarget).is(e.replace);
                        case t.EVENT.POPSTATE:
                            return !1
                        }
                    }
                    ,
                    e.prototype.isCacheUsable_ = function(e, i) {
                        switch (!0) {
                        case !i.cache.click && !i.cache.submit && !i.cache.popstate:
                        case t.EVENT.SUBMIT === e.type.toLowerCase() && !i.cache[e.currentTarget.method.toLowerCase()]:
                            return !1;
                        default:
                            return !0
                        }
                    }
                    ,
                    e.prototype.redirect_ = function() {
                        var e = this
                          , i = this.setting_
                          , n = this.event_
                          , r = (jQuery('head meta[http-equiv="Refresh"][content*="URL="]').attr("content") || "").match(/\w+:\/\/[^;\s"']+|$/i).shift();
                        if (r && !this.model_.comparePageByUrl(i.destLocation.href, r)) {
                            var s = i.destLocation.cloneNode();
                            if (s.href = r,
                            !1 !== this.util_.fire(i.callbacks.update.redirect.before, i, [n, i, s.cloneNode(), i.origLocation.cloneNode(), i.destLocation.cloneNode()])) {
                                switch (!0) {
                                case !i.redirect:
                                case s.protocol !== i.destLocation.protocol:
                                case s.host !== i.destLocation.host:
                                case t.EVENT.SUBMIT === n.type.toLowerCase() && "GET" !== n.currentTarget.method.toUpperCase():
                                    switch (n.type.toLowerCase()) {
                                    case t.EVENT.CLICK:
                                    case t.EVENT.SUBMIT:
                                        window.location.assign(s.href);
                                        break;
                                    case t.EVENT.POPSTATE:
                                        window.location.replace(s.href)
                                    }
                                    throw !1;
                                default:
                                    switch (jQuery[t.DEF.NAME].enable(),
                                    n.type.toLowerCase()) {
                                    case t.EVENT.CLICK:
                                    case t.EVENT.SUBMIT:
                                        setTimeout(function() {
                                            return jQuery[t.DEF.NAME].click(s.href)
                                        }, 0);
                                        break;
                                    case t.EVENT.POPSTATE:
                                        window.history.replaceState(window.history.state, this.srcTitle_, s.href),
                                        this.isRegister_(i, n) && i.fix.location && !this.util_.compareUrl(i.destLocation.href, window.location.href) && (jQuery[t.DEF.NAME].disable(),
                                        window.history.back(),
                                        window.history.forward(),
                                        jQuery[t.DEF.NAME].enable()),
                                        setTimeout(function() {
                                            return e.dispatchEvent(window, t.EVENT.POPSTATE, !1, !1)
                                        }, 0)
                                    }
                                    throw !1
                                }
                                this.util_.fire(i.callbacks.update.redirect.after, i, [n, i, s.cloneNode(), i.origLocation.cloneNode(), i.destLocation.cloneNode()])
                            }
                        }
                    }
                    ,
                    e.prototype.blur_ = function() {
                        var t = this.setting_
                          , e = this.event_;
                        !1 !== this.util_.fire(t.callbacks.update.blur.before, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) && (jQuery(document.activeElement).not("body").blur(),
                        this.util_.fire(t.callbacks.update.blur.after, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]))
                    }
                    ,
                    e.prototype.url_ = function() {
                        var e = this.setting_
                          , i = this.event_;
                        this.model_.location.href = e.destLocation.href,
                        !1 !== this.util_.fire(e.callbacks.update.url.before, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]) && (this.isReplace_(e, i) ? (window.history.replaceState(this.util_.fire(e.state, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]), this.srcTitle_, e.destLocation.href),
                        e.fix.location && !this.util_.compareUrl(e.destLocation.href, window.location.href) && window.location.replace(e.destLocation.href)) : this.isRegister_(e, i) && (window.history.pushState(this.util_.fire(e.state, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]), ~window.navigator.userAgent.toLowerCase().indexOf("opera") ? this.dstTitle_ : this.srcTitle_, e.destLocation.href),
                        e.fix.location && !this.util_.compareUrl(e.destLocation.href, window.location.href) && (jQuery[t.DEF.NAME].disable(),
                        window.history.back(),
                        window.history.forward(),
                        jQuery[t.DEF.NAME].enable())),
                        this.util_.fire(e.callbacks.update.url.after, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]))
                    }
                    ,
                    e.prototype.document_ = function() {
                        var e = this
                          , i = this.setting_
                          , n = this.event_;
                        if (i.load.script && !this.page_.loadedScripts[""]) {
                            var r = this.page_.loadedScripts;
                            r[""] = !0,
                            jQuery("script").each(function() {
                                this.src && (r[this.src] = !i.load.reload || !jQuery(this).is(i.load.reload))
                            })
                        }
                        this.srcDocument_ = this.page_.parser.parse(this.record_.data.jqXHR().responseText, i.destLocation.href),
                        this.dstDocument_ = document;
                        var s = i.speedcheck
                          , a = this.model_.speed;
                        if (s && a.time.push(a.now() - a.fire),
                        s && a.name.push("parse(" + a.time.slice(-1) + ")"),
                        this.area_ = this.chooseArea(i.area, this.srcDocument_, this.dstDocument_),
                        !this.area_)
                            throw new Error("throw: area notfound");
                        this.areas_ = this.area_.match(/(?:[^,]+?|\(.*?\)|\[.*?\])+/g),
                        this.overwriteDocumentByCache_(),
                        i.fix.noscript && this.escapeNoscript_(this.srcDocument_),
                        i.fix.reference && this.fixReference_(i.origLocation.href, this.dstDocument_),
                        this.rewrite_(),
                        this.title_(),
                        i.fix.history && this.data_.saveTitle(),
                        this.data_.saveExpires(this.record_.data.url(), this.record_.data.host(), this.record_.data.expires()),
                        this.head_(),
                        s && a.time.push(a.now() - a.fire),
                        s && a.name.push("head(" + a.time.slice(-1) + ")"),
                        this.content_(),
                        this.focus_(),
                        this.dispatchEvent(document, i.nss.event.pjax.DOMContentLoaded, !1, !1),
                        s && a.time.push(a.now() - a.fire),
                        s && a.name.push("content(" + a.time.slice(-1) + ")"),
                        this.balance_(),
                        this.css_('link[rel~="stylesheet"], style'),
                        jQuery(window).one(t.DEF.NAME + ":rendering", function(r) {
                            r.preventDefault(),
                            r.stopImmediatePropagation();
                            var o = function(t) {
                                return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.dispatchEvent(document, i.nss.event.pjax.ready, !1, !1),
                                jQuery(e.area_).each(function(t, e) {
                                    return jQuery(e).width()
                                }),
                                jQuery.when ? jQuery.Deferred().resolve() : t()) : void 0
                            }
                              , l = function(r) {
                                return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.util_.fire(i.callback, i, [n, i]),
                                setTimeout(function() {
                                    switch (n.type.toLowerCase()) {
                                    case t.EVENT.CLICK:
                                    case t.EVENT.SUBMIT:
                                        e.model_.overlay(i) || e.scrollByHash_(i) || e.scroll_(!0);
                                        break;
                                    case t.EVENT.POPSTATE:
                                        e.model_.overlay(i) || e.scroll_(!0)
                                    }
                                }, 100),
                                e.dispatchEvent(document, i.nss.event.pjax.render, !1, !1),
                                s && a.time.push(a.now() - a.fire),
                                s && a.name.push("render(" + a.time.slice(-1) + ")"),
                                jQuery.when ? jQuery.when.apply(jQuery, e.loadwaits_) : r()) : void 0
                            }
                              , c = function() {
                                return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.dispatchEvent(window, i.nss.event.pjax.load, !1, !1),
                                s && a.time.push(a.now() - a.fire),
                                s && a.name.push("load(" + a.time.slice(-1) + ")"),
                                s && console.log(a.time),
                                s && console.log(a.name),
                                e.script_("[src][defer]"),
                                jQuery.when && jQuery.Deferred().resolve()) : jQuery.when && jQuery.Deferred().reject()
                            };
                            if (e.scroll_(!1),
                            100 > e.page_.loadtime && i.reset.type.match(n.type.toLowerCase()) && !jQuery('form[method][method!="GET"]').length)
                                switch (!1) {
                                case e.page_.count < i.reset.count || !i.reset.count:
                                case (new Date).getTime() < i.reset.time + e.page_.time || !i.reset.time:
                                    throw new Error("throw: reset")
                                }
                            var h = e.script_(":not([defer]), :not([src])");
                            if (jQuery.when) {
                                var u = jQuery.Deferred().pipe ? "pipe" : "then";
                                jQuery.when.apply(jQuery, h)[u](function() {
                                    return o()
                                })[u](function() {
                                    return l()
                                })[u](function() {
                                    return c()
                                })
                            } else
                                o(function() {
                                    return l(function() {
                                        return c()
                                    })
                                })
                        }).trigger(t.DEF.NAME + ":rendering")
                    }
                    ,
                    e.prototype.overwriteDocumentByCache_ = function() {
                        var t = this.setting_
                          , e = this.event_
                          , i = this.model_.getCache(t.destLocation.href);
                        if (this.isCacheUsable_(e, t) && i && i.data) {
                            var n = t.fix.noscript ? this.restoreNoscript_(i.data) : i.data
                              , r = this.page_.parser.parse(n, t.destLocation.href)
                              , s = this.srcDocument_;
                            s.title = r.title;
                            for (var a, o, l = 0; this.areas_[l]; l++) {
                                if (a = jQuery(this.areas_[l], r).clone(),
                                o = jQuery(this.areas_[l], s),
                                !a.length || !o.length || a.length !== o.length)
                                    throw new Error("throw: area mismatch");
                                for (var c = 0; a[c]; c++)
                                    o[c].parentNode.replaceChild(a[c], o[c])
                            }
                        }
                    }
                    ,
                    e.prototype.rewrite_ = function() {
                        var t = this.setting_
                          , e = this.event_;
                        t.rewrite && !1 !== this.util_.fire(t.callbacks.update.rewrite.before, t, [e, t, this.srcDocument_, this.dstDocument_]) && (this.util_.fire(t.rewrite, t, [this.srcDocument_, this.area_, this.record_.data.host(), this.record_.data.bind().map(function(t) {
                            if (!t)
                                return {};
                            switch (t.getResponseHeader("Content-Type").split("/").pop()) {
                            case "json":
                                return t.responseJSON
                            }
                        })]),
                        this.util_.fire(t.callbacks.update.rewrite.before, t, [e, t, this.srcDocument_, this.dstDocument_]))
                    }
                    ,
                    e.prototype.title_ = function() {
                        var t = this.setting_
                          , e = this.event_;
                        !1 !== this.util_.fire(t.callbacks.update.title.before, t, [e, t, this.srcDocument_.title, this.dstDocument_.title]) && (this.dstDocument_.title = this.srcDocument_.title,
                        this.util_.fire(t.callbacks.update.title.after, t, [e, t, this.srcDocument_.title, this.dstDocument_.title]))
                    }
                    ,
                    e.prototype.head_ = function() {
                        var t = this.setting_
                          , e = this.event_
                          , i = this.srcDocument_
                          , n = this.dstDocument_;
                        if (t.load.head && !1 !== this.util_.fire(t.callbacks.update.head.before, t, [e, t, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")])) {
                            for (var r, s = "base, meta, link", a = jQuery(i.head).children(s).filter(t.load.head).not(t.load.ignore).not('link[rel~="stylesheet"], style, script'), o = jQuery(n.head).children(s).filter(t.load.head).not(t.load.ignore).not('link[rel~="stylesheet"], style, script'), l = jQuery(), c = o, h = 0; r = a[h]; h++) {
                                for (var u = 0; c[u]; u++)
                                    if (c[u].tagName === r.tagName && c[u].outerHTML === r.outerHTML) {
                                        if (l.length) {
                                            var p = o[o.index(c[u]) - 1];
                                            p ? jQuery(p).after(l.clone()) : c.eq(u).before(l.clone()),
                                            l = jQuery()
                                        }
                                        c = c.not(c[u]),
                                        r = null;
                                        break
                                    }
                                l = l.add(r)
                            }
                            jQuery("title", n).before(l.clone()),
                            c.remove(),
                            this.util_.fire(t.callbacks.update.head.after, t, [e, t, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")])
                        }
                    }
                    ,
                    e.prototype.content_ = function() {
                        function t() {
                            if (jQuery.Deferred) {
                                var t = jQuery.Deferred();
                                switch (this.tagName.toLowerCase()) {
                                case "img":
                                    jQuery(this).one("load error abort", t.resolve);
                                    break;
                                case "iframe":
                                case "frame":
                                    jQuery(this).one("load", t.resolve)
                                }
                                return t
                            }
                        }
                        var e = this
                          , i = this.setting_
                          , n = this.event_
                          , r = this.srcDocument_
                          , s = this.dstDocument_;
                        if (!1 !== this.util_.fire(i.callbacks.update.content.before, i, [n, i, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()])) {
                            jQuery(this.area_).children("." + i.nss.elem + "-check").remove();
                            for (var a, o, l = 0; this.areas_[l]; l++) {
                                if (a = jQuery(this.areas_[l], r),
                                o = jQuery(this.areas_[l], s),
                                !a.length || !o.length || a.length !== o.length)
                                    throw new Error("throw: area mismatch");
                                (a = a.map(function(t, e) {
                                    return document.importNode(e, !0)
                                })).find("script").each(function(t, i) {
                                    return e.escapeScript_(i)
                                }),
                                this.loadwaits_ = this.loadwaits_.concat(a.find("img, iframe, frame").map(t).get());
                                for (var c = 0; a[c]; c++)
                                    o[c].parentNode.replaceChild(a[c], o[c]),
                                    document.body === a[c] && (jQuery.each(a[c].attributes, function(t, e) {
                                        return o[c].removeAttribute(e.name)
                                    }),
                                    jQuery.each(a[c].attributes, function(t, e) {
                                        return o[c].setAttribute(e.name, e.value)
                                    }));
                                (o = jQuery(this.areas_[l], s)).find("script").each(function(t, i) {
                                    return e.restoreScript_(i)
                                })
                            }
                            this.util_.fire(i.callbacks.update.content.after, i, [n, i, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()])
                        }
                    }
                    ,
                    e.prototype.focus_ = function() {
                        var t = this.setting_
                          , e = this.event_;
                        !1 !== this.util_.fire(t.callbacks.update.focus.before, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) && (jQuery("body, input[autofocus], textarea[autofocus]").last().not(document.activeElement).focus(),
                        this.util_.fire(t.callbacks.update.focus.after, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]))
                    }
                    ,
                    e.prototype.balance_ = function() {
                        var t = this
                          , e = this.setting_
                          , i = this.event_;
                        !e.balance.active || this.page_.loadtime < 100 || [this.record_.data.jqXHR()].concat(this.record_.data.bind()).forEach(function(n) {
                            var r = t.balancer_.sanitize(n, e) || t.record_.data.host() || ""
                              , s = t.page_.loadtime
                              , a = t.balancer_.score(s, n.responseText.length);
                            if (!1 !== t.util_.fire(e.callbacks.update.balance.before, e, [i, e, r, t.page_.loadtime, n.responseText.length])) {
                                var o = t.data_.getServerBuffer(e.destLocation.href);
                                a = t.balancer_.score(s, n.responseText.length);
                                s = o && !o.state && o.time ? Math.round((o.time + s) / 2) : s,
                                a = o && !o.state && o.score ? Math.round((o.score + a) / 2) : a,
                                t.data_.saveServer(r, (new Date).getTime() + e.balance.server.expires, s, a, 0),
                                t.balancer_.changeServer(t.balancer_.chooseServer(e), e),
                                t.util_.fire(e.callbacks.update.balance.after, e, [i, e, r, t.page_.loadtime, n.responseText.length])
                            }
                        })
                    }
                    ,
                    e.prototype.css_ = function(t) {
                        function e() {
                            return jQuery.contains(s.head, this)
                        }
                        function i() {
                            return jQuery.contains(s.body, this)
                        }
                        var n = this.setting_
                          , r = this.event_
                          , s = this.srcDocument_
                          , a = this.dstDocument_;
                        if (n.load.css) {
                            var o = "link, style"
                              , l = jQuery(o, s).filter(t).not(jQuery("noscript", s).find(o))
                              , c = jQuery(o, a).filter(t).not(jQuery("noscript", s).find(o))
                              , h = jQuery()
                              , u = c;
                            if (!1 !== this.util_.fire(n.callbacks.update.css.before, n, [r, n, l.get(), c.get()])) {
                                c = (l = l.not(n.load.ignore)).not(n.load.ignore);
                                for (var p, d = 0; p = l[d]; d++) {
                                    for (var f, m = 0; u[m]; m++) {
                                        switch (p.tagName.toLowerCase()) {
                                        case "link":
                                            f = p.href === u[m].href;
                                            break;
                                        case "style":
                                            f = this.util_.trim(p.innerHTML) === this.util_.trim(u[m].innerHTML)
                                        }
                                        if (f) {
                                            if (h.length) {
                                                if (jQuery.contains(a.body, u[m]) && h.first().parents("head").length)
                                                    jQuery(a.head).append(h.filter(e).clone()),
                                                    u.eq(m).before(h.filter(i).clone());
                                                else {
                                                    var _ = c[c.index(u[m]) - 1];
                                                    _ ? jQuery(_).after(h.clone()) : u.eq(m).before(h.clone())
                                                }
                                                h = jQuery()
                                            }
                                            u = u.not(u[m]),
                                            m -= Number(!!m),
                                            p = null;
                                            break
                                        }
                                    }
                                    h = h.add(p)
                                }
                                if (jQuery(a.head).append(h.filter(e).clone()),
                                jQuery(a.body).append(h.filter(i).clone()),
                                u.remove(),
                                c = jQuery(o, a).filter(t).not(jQuery("noscript", s).find(o)),
                                !1 !== this.util_.fire(n.callbacks.update.css.after, n, [r, n, l.get(), c.get()])) {
                                    var g = n.speedcheck
                                      , v = this.model_.speed;
                                    g && v.time.push(v.now() - v.fire),
                                    g && v.name.push("css(" + v.time.slice(-1) + ")")
                                }
                            }
                        }
                    }
                    ,
                    e.prototype.script_ = function(t) {
                        var e = this
                          , i = this.setting_
                          , n = this.event_
                          , r = this.srcDocument_
                          , s = this.dstDocument_
                          , a = []
                          , o = [];
                        if (!i.load.script)
                            return a;
                        var l = "script"
                          , c = jQuery(l, r).filter(t).not(jQuery("noscript", r).find(l))
                          , h = jQuery(l, s).filter(t).not(jQuery("noscript", s).find(l))
                          , u = this.page_.loadedScripts
                          , p = /^$|(?:application|text)\/(?:java|ecma)script/i
                          , d = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        if (!1 === this.util_.fire(i.callbacks.update.script.before, i, [n, i, c.get(), h.get()]))
                            return a;
                        c = c.not(i.load.ignore);
                        for (var f, m = function(t, n) {
                            if (!e.model_.comparePageByUrl(i.destLocation.href, window.location.href))
                                return !1;
                            t.src && (u[t.src] = !i.load.reload || !jQuery(t).is(i.load.reload));
                            try {
                                if (e.model_.isDeferrable) {
                                    if ("string" != typeof n)
                                        throw n;
                                    eval.call(window, n)
                                } else
                                    t.hasAttribute("src") ? jQuery.ajax(jQuery.extend(!0, {}, i.ajax, i.load.ajax, {
                                        url: t.src,
                                        dataType: "script",
                                        async: !1,
                                        global: !1,
                                        success: function() {
                                            return null
                                        },
                                        error: function(t) {
                                            throw t
                                        }
                                    })) : eval.call(window, (t.text || t.textContent || t.innerHTML || "").replace(d, ""));
                                try {
                                    t.hasAttribute("src") && e.dispatchEvent(t, "load", !1, !1)
                                } catch (t) {}
                            } catch (n) {
                                try {
                                    t.hasAttribute("src") && e.dispatchEvent(t, "error", !1, !1)
                                } catch (t) {}
                                if (!0 === i.load.error)
                                    throw n;
                                e.util_.fire(i.load.error, i, [n, t])
                            }
                        }, _ = 0; f = c[_]; _++)
                            if (p.test(f.type || "") && (f.hasAttribute("src") ? !u[f.src] : this.util_.trim(f.innerHTML))) {
                                var g = jQuery(f).parent(i.load.log)[0];
                                if (g && !jQuery(f).parents(this.area_).length) {
                                    var v = jQuery(g.id || g.tagName, s)[0]
                                      , y = f.cloneNode(!0);
                                    this.escapeScript_(y),
                                    v.appendChild(y),
                                    this.restoreScript_(y)
                                }
                                !function(t) {
                                    var n = e.model_.isDeferrable && jQuery.Deferred();
                                    t.hasAttribute("src") && t.getAttribute("src") ? (u[t.src] = !i.load.reload || !jQuery(t).is(i.load.reload),
                                    t.hasAttribute("async") ? jQuery.ajax(jQuery.extend({}, i.ajax, i.load.ajax, {
                                        url: t.src,
                                        dataType: "script",
                                        async: !0,
                                        global: !1,
                                        success: function() {
                                            return e.dispatchEvent(t, "load", !1, !1)
                                        },
                                        error: function() {
                                            return e.dispatchEvent(t, "error", !1, !1)
                                        }
                                    })) : n ? (jQuery.ajax(jQuery.extend({}, i.ajax, i.load.ajax, {
                                        url: t.src,
                                        dataType: "text",
                                        async: !0,
                                        global: !1,
                                        success: function(e) {
                                            return n.resolve([t, e])
                                        },
                                        error: function(e) {
                                            return n.resolve([t, e])
                                        }
                                    })),
                                    a.push(n)) : o.push(t)) : t.hasAttribute("src") || (n ? a.push(n.resolve([t, (t.text || t.textContent || t.innerHTML || "").replace(d, "")])) : o.push(t))
                                }(f)
                            }
                        try {
                            this.model_.isDeferrable ? jQuery.when.apply(jQuery, a).always(function() {
                                for (var t = [], i = 0; i < arguments.length; i++)
                                    t[i - 0] = arguments[i];
                                return jQuery.each(t, function(t, i) {
                                    return m.apply(e, i)
                                })
                            }) : jQuery.each(o, function(t, e) {
                                return m(e)
                            })
                        } catch (t) {
                            throw setTimeout(function() {
                                return e.model_.fallback(n)
                            }, 1),
                            t
                        }
                        if (h = jQuery(l, s).filter(t).not(jQuery("noscript", s).find(l)),
                        !1 === this.util_.fire(i.callbacks.update.script.after, i, [n, i, c.get(), h.get()]))
                            return a;
                        var w = i.speedcheck
                          , x = this.model_.speed;
                        return w && x.time.push(x.now() - x.fire),
                        w && x.name.push("script(" + x.time.slice(-1) + ")"),
                        a
                    }
                    ,
                    e.prototype.scroll_ = function(e) {
                        var i = this.setting_
                          , n = this.event_;
                        if (!1 !== this.util_.fire(i.callbacks.update.scroll.before, i, [n, i])) {
                            var r, s;
                            switch (n.type.toLowerCase()) {
                            case t.EVENT.CLICK:
                            case t.EVENT.SUBMIT:
                                r = !1 === (r = (r = e && "function" == typeof i.scrollLeft ? this.util_.fire(i.scrollLeft, i, [n, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]) : i.scrollLeft) >= 0 ? r : 0) || null === r ? jQuery(window).scrollLeft() : parseInt(Number(r) + "", 10),
                                s = !1 === (s = (s = e && "function" == typeof i.scrollTop ? this.util_.fire(i.scrollTop, i, [n, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]) : i.scrollTop) >= 0 ? s : 0) || null === s ? jQuery(window).scrollTop() : parseInt(Number(s) + "", 10),
                                window.scrollTo(r, s);
                                break;
                            case t.EVENT.POPSTATE:
                                e && i.fix.scroll && this.data_.loadScrollPosition()
                            }
                            e && this.data_.saveScrollPosition(),
                            this.util_.fire(i.callbacks.update.scroll.after, i, [n, i])
                        }
                    }
                    ,
                    e.prototype.scrollByHash_ = function(t) {
                        var e = t.destLocation.hash.replace(/^#/, "");
                        if (!e)
                            return !1;
                        var i = jQuery("#" + e + ", [name~=" + e + "]").first();
                        return !!i.length && (isFinite(i.offset().top) && window.scrollTo(jQuery(window).scrollLeft(), parseInt(Number(i.offset().top) + "", 10)),
                        this.data_.saveScrollPosition(),
                        !0)
                    }
                    ,
                    e.prototype.fixReference_ = function(t, e) {
                        var i, n = t.replace(/[^\/]+$/, ""), r = e.URL.replace(/[^\/]+$/, ""), s = n.split("/").length, a = r.split("/").length, o = /^.+?\w\//, l = this.util_.repeat("../", Math.abs(s - a));
                        switch (!0) {
                        case s === a:
                            i = 0;
                            break;
                        case a > s:
                            i = 1;
                            break;
                        case s > a:
                            i = -1
                        }
                        jQuery("[href], [src]", e).not(['[href^="/"]', '[href^= "http:"]', '[href^= "https:"]', '[src^= "/"]', '[src^= "http:"]', '[src^= "https:"]'].join(",")).each(function(t, e) {
                            var n;
                            switch (!0) {
                            case "href"in e:
                                n = "href";
                                break;
                            case "src"in e:
                                n = "src";
                                break;
                            default:
                                return
                            }
                            switch (i) {
                            case 0:
                                break;
                            case 1:
                                e[n] = l + e.getAttribute(n);
                                break;
                            case -1:
                                e[n] = e.getAttribute(n).replace(l, "")
                            }
                            e.setAttribute(n, e[n].replace(o, "/"))
                        })
                    }
                    ,
                    e.prototype.escapeNoscript_ = function(t) {
                        jQuery("noscript", t).children().parent().each(function() {
                            jQuery(this).text(this.innerHTML)
                        })
                    }
                    ,
                    e.prototype.restoreNoscript_ = function(t) {
                        var e = jQuery("<span/>");
                        return t.replace(/(<noscript>)([^<>]+?)(<\/noscript>)/gim, function(t, i, n, r) {
                            return i + e.html(n).text() + r
                        })
                    }
                    ,
                    e.prototype.escapeScript_ = function(t) {
                        jQuery.data(t, "source", t.src),
                        jQuery.data(t, "code", t.innerHTML),
                        t.removeAttribute("src"),
                        t.innerHTML = ""
                    }
                    ,
                    e.prototype.restoreScript_ = function(t) {
                        undefined !== jQuery.data(t, "code") && (t.innerHTML = " ",
                        jQuery.data(t, "source") ? (t.src = jQuery.data(t, "source"),
                        jQuery.removeData(t, "source")) : t.removeAttribute("src"),
                        t.innerHTML = jQuery.data(t, "code"),
                        jQuery.removeData(t, "code"))
                    }
                    ,
                    e.prototype.chooseArea = function(t, e, i) {}
                    ,
                    e.prototype.dispatchEvent = function(t, e, i, n) {}
                    ,
                    e
                }();
                e.PageUpdate = i
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                var i = function() {
                    function e() {
                        this.util_ = t.LIBRARY.Utility,
                        this.sandbox_cache_ = {}
                    }
                    return e.prototype.sandbox_ = function(t) {
                        var e = this;
                        return void 0 === t && (t = window.location.href),
                        t = this.util_.canonicalizeUrl(t).split("#").shift(),
                        this.sandbox_cache_[t] && "object" == typeof this.sandbox_cache_[t].document && this.sandbox_cache_[t].document.URL === t || jQuery('<iframe srcdoc="<!DOCTYPE html>" sandbox="allow-same-origin"></iframe>').appendTo("body").each(function(i, n) {
                            e.sandbox_cache_[t] = n.contentWindow,
                            e.sandbox_cache_[t].document.open(),
                            e.sandbox_cache_[t].document.close()
                        }).remove(),
                        this.sandbox_cache_[t]
                    }
                    ,
                    e.prototype.test_ = function(t) {
                        try {
                            var e = this.parse('<html lang="en" class="html"><head><title>&amp;</title><link href="/"><noscript><style>/**/</style></noscript></head><body><noscript>noscript</noscript><a href="/"></a></body></html>', window.location.href, t);
                            switch (!1) {
                            case !!e:
                            case e.URL && decodeURI(e.URL) === decodeURI(window.location.href):
                            case "&" === e.title:
                            case !!e.querySelector('html.html[lang="en"]'):
                            case !!e.querySelector("head>link").href:
                            case !!e.querySelector("head>noscript").innerHTML:
                            case !!e.querySelector("body>noscript").innerHTML:
                            case !!e.querySelector("body>a").href:
                                throw !0
                            }
                            return t
                        } catch (t) {}
                    }
                    ,
                    e.prototype.parse = function(t, e, i) {
                        void 0 === e && (e = ""),
                        void 0 === i && (i = this.mode_),
                        t += ~t.search(/<title[\s>]/i) ? "" : "<title></title>";
                        var n;
                        switch (i) {
                        case "dom":
                            n = (new window.DOMParser).parseFromString(t, "text/html");
                            break;
                        case "doc":
                            if ("object" != typeof (n = document.implementation.createHTMLDocument("")).activeElement || !n.activeElement)
                                break;
                            "function" == typeof window.DOMParser && (n.title = (new window.DOMParser).parseFromString(t.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i), "text/html").title),
                            n.open(),
                            n.write(t),
                            n.close(),
                            n.title !== n.querySelector("title").textContent && (n.title = n.querySelector("title").textContent);
                            break;
                        case "manipulate":
                            n = function(t, e) {
                                (s = document.createElement("div")).innerHTML = e.match(/<html(?:\s.*?[^\\])?>|$/i).shift().replace(/html/i, "div") || "<div>";
                                for (var i, n = s.firstChild.attributes, r = 0; i = n[r]; r++)
                                    t.documentElement.setAttribute(i.name, i.value);
                                var s;
                                for ((s = document.createElement("html")).innerHTML = e.replace(/^.*?<html(?:\s.*?[^\\])?>/im, ""),
                                t.documentElement.removeChild(t.head),
                                t.documentElement.removeChild(t.body); s.childNodes.length; )
                                    t.documentElement.appendChild(s.childNodes[0]);
                                return t
                            }(document.implementation.createHTMLDocument(""), t);
                            break;
                        case null:
                            n = null;
                            break;
                        default:
                            switch (/webkit|firefox|trident|$/i.exec(window.navigator.userAgent).shift().toLowerCase()) {
                            case "webkit":
                                this.mode_ = this.test_("doc") || this.test_("dom") || this.test_("manipulate");
                                break;
                            case "firefox":
                                this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate");
                                break;
                            case "trident":
                                this.mode_ = this.test_("manipulate") || this.test_("dom") || this.test_("doc");
                                break;
                            default:
                                this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate")
                            }
                            n = this.mode_ && this.parse(t, e)
                        }
                        return n
                    }
                    ,
                    e
                }();
                e.PageParser = i;
                var n = function() {
                    function t() {
                        t.instance_ = t.instance_ || new i
                    }
                    return t.prototype.singleton_ = function() {
                        return t.instance_
                    }
                    ,
                    t.prototype.parse = function(t, e) {
                        return this.singleton_().parse(t, e)
                    }
                    ,
                    t
                }();
                e.PageParserSingleton = n
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            !function(e) {
                t.MIXIN(e.PageFetch, [e.PageUtility]),
                t.MIXIN(e.PageUpdate, [e.PageUtility]);
                var i = function() {
                    function i(i, n, r) {
                        var s = this;
                        this.model_ = i,
                        this.data_ = n,
                        this.balancer_ = r,
                        this.util_ = t.LIBRARY.Utility,
                        this.parser = new e.PageParserSingleton,
                        this.provider = new e.PageProvider(e.PageRecord,this.model_,this.balancer_,this),
                        this.landing = this.util_.normalizeUrl(window.location.href),
                        this.loadedScripts = {},
                        this.dataXHR = [],
                        this.loadtime = 0,
                        this.count = 0,
                        this.time = (new Date).getTime(),
                        setTimeout(function() {
                            return s.parser.parse("") || s.model_.disable()
                        }, 100)
                    }
                    return i.prototype.transfer = function(e, i) {
                        switch (i.type.toLowerCase()) {
                        case t.EVENT.CLICK:
                        case t.EVENT.SUBMIT:
                            this.data_.saveTitle(),
                            this.data_.saveScrollPosition();
                            break;
                        case t.EVENT.POPSTATE:
                            this.data_.saveTitle(e.origLocation.href, document.title),
                            e.fix.history && this.data_.loadTitle()
                        }
                        (e = jQuery.extend(!0, {}, e)).origLocation = e.origLocation.cloneNode(),
                        e.destLocation = e.destLocation.cloneNode(),
                        e = t.FREEZE(e),
                        this.fetch_(e, i)
                    }
                    ,
                    i.prototype.getWait = function() {
                        return this.wait_
                    }
                    ,
                    i.prototype.setWait = function(t) {
                        return this.wait_ && this.wait_.state && "pending" === this.wait_.state() && this.wait_.reject(),
                        this.wait_ = t
                    }
                    ,
                    i.prototype.fetch_ = function(t, e) {
                        var i = this;
                        this.provider.fetchRecord(t, e, function(t, e, n) {
                            return i.success_(t, e, n)
                        }, function(t, e, n) {
                            return i.failure_(t, e, n)
                        })
                    }
                    ,
                    i.prototype.success_ = function(t, i, n) {
                        new e.PageUpdate(this.model_,this,this.data_,this.balancer_,i,n,t)
                    }
                    ,
                    i.prototype.failure_ = function(t, e, i) {
                        var n = this;
                        e.fallback && "abort" !== t.data.textStatus() && (this.data_.saveExpires(e.destLocation.href, "", 0),
                        e.balance.active && (this.data_.saveServer(t.data.host(), (new Date).getTime() + e.balance.server.expires, 0, 0, (new Date).getTime()),
                        this.balancer_.changeServer(this.balancer_.chooseServer(e), e)),
                        setTimeout(function() {
                            return n.model_.fallback(i)
                        }, 100))
                    }
                    ,
                    i.prototype.chooseArea = function(t, e, i) {}
                    ,
                    i.prototype.dispatchEvent = function(t, e, i, n) {}
                    ,
                    i
                }();
                e.Page = i
            }(e.APP || (e.APP = {}))
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(MODULE) {
        var MODEL;
        !function(MODEL) {
            var APP;
            !function(APP) {
                MODULE.MIXIN(APP.Page, [APP.PageUtility]);
                var Main = function() {
                    function Main(t, e) {
                        this.model_ = t,
                        this.controller_ = e,
                        this.util_ = MODULE.LIBRARY.Utility,
                        this.settings_ = {},
                        this.data = new APP.Data(this.model_),
                        this.balancer = new APP.Balancer(this.data),
                        this.page = new APP.Page(this.model_,this.data,this.balancer)
                    }
                    return Main.prototype.initialize = function(t, e) {
                        var i = this;
                        this.controller_.view(t, e),
                        this.balancer.enable(e),
                        this.balancer.changeServer(this.balancer.chooseServer(e), e),
                        this.data.loadBuffers(),
                        setTimeout(function() {
                            return i.page.landing = null
                        }, 1500)
                    }
                    ,
                    Main.prototype.configure = function(destination) {
                        var _this = this
                          , event = destination.preventDefault ? destination : null;
                        switch (event && "object" == typeof event && event.type.toLowerCase()) {
                        case MODULE.EVENT.CLICK:
                        case MODULE.EVENT.SUBMIT:
                            return this.configure(event.currentTarget);
                        case MODULE.EVENT.POPSTATE:
                            return this.configure(window.location)
                        }
                        var url;
                        switch (!0) {
                        case "string" == typeof destination:
                            url = destination;
                            break;
                        case "href"in destination && "string" == typeof destination.href:
                            url = this.util_.normalizeUrl(destination.href);
                            break;
                        case "href"in destination && "object" == typeof destination.href:
                            url = this.util_.normalizeUrl(destination.href.baseVal);
                            break;
                        case "action"in destination:
                            switch (url = this.util_.normalizeUrl(destination.action.replace(/[?#].*/, "")),
                            destination.method.toUpperCase()) {
                            case "GET":
                                url += "?" + jQuery(destination).serialize()
                            }
                            break;
                        default:
                            url = this.model_.location.href,
                            this.option_ = destination
                        }
                        var index = [this.util_.canonicalizeUrl(this.model_.location.href).slice(0, 2048), this.util_.canonicalizeUrl(url).slice(0, 2048)].join(" ");
                        if (!this.option_)
                            return null;
                        if (index in this.settings_)
                            return this.settings_[index];
                        var origLocation = this.model_.location.cloneNode()
                          , destLocation = this.model_.location.cloneNode();
                        origLocation.href = this.util_.canonicalizeUrl(origLocation.href),
                        destLocation.href = this.util_.canonicalizeUrl(url);
                        var scope = this.scope_(this.option_, origLocation.href, destLocation.href) || null, initial = {
                            area: "body",
                            link: "a:not([target])",
                            filter: function() {
                                var t = document.createElement("a");
                                return t.href = "string" == typeof this.href ? this.href : this.href.baseVal,
                                /^https?:/.test(t.href) && /\/[^.]*$|\.(html?|php)$/.test(t.pathname.replace(/^\/?/, "/"))
                            },
                            form: null,
                            replace: null,
                            bind: null,
                            rewrite: null,
                            scope: null,
                            state: null,
                            scrollTop: 0,
                            scrollLeft: 0,
                            ajax: {
                                dataType: "text"
                            },
                            contentType: "text/html",
                            redirect: !0,
                            cache: {
                                click: !1,
                                submit: !1,
                                popstate: !1,
                                get: !0,
                                post: !0,
                                mix: 0,
                                limit: 100,
                                expires: {
                                    max: null,
                                    min: 3e5
                                }
                            },
                            buffer: {
                                limit: 30,
                                delay: 500
                            },
                            load: {
                                head: "",
                                css: !1,
                                script: !1,
                                ignore: '[src*="jquery.js"], [src*="jquery.min.js"], [href^="chrome-extension://"]',
                                reload: "",
                                log: "head, body",
                                error: !0,
                                ajax: {
                                    dataType: "script",
                                    cache: !0
                                }
                            },
                            balance: {
                                active: !1,
                                bounds: ["*"],
                                weight: 1,
                                random: 0,
                                option: {
                                    server: {
                                        header: !1
                                    },
                                    ajax: {
                                        crossDomain: !0
                                    },
                                    callbacks: {
                                        ajax: {
                                            beforeSend: null
                                        }
                                    }
                                },
                                client: {
                                    hosts: [],
                                    support: {
                                        browser: /msie|trident.+ rv:|chrome|firefox|safari/i,
                                        redirect: /chrome|firefox|safari/i
                                    },
                                    cookie: {
                                        balance: "balanceable",
                                        redirect: "redirectable",
                                        host: "host"
                                    }
                                },
                                server: {
                                    header: "X-Ajax-Host",
                                    respite: 6e5,
                                    expires: 864e6
                                }
                            },
                            wait: 0,
                            fallback: !0,
                            reset: {
                                type: "",
                                count: 100,
                                time: 108e5
                            },
                            fix: {
                                location: !0,
                                history: !0,
                                scroll: !0,
                                noscript: !0,
                                reference: !0
                            },
                            database: {
                                active: !0,
                                revision: 0,
                                refresh: 10
                            },
                            server: {
                                query: null,
                                header: !0
                            },
                            overlay: "",
                            callback: null,
                            callbacks: {
                                ajax: {},
                                update: {
                                    redirect: {},
                                    blur: {},
                                    url: {},
                                    rewrite: {},
                                    title: {},
                                    head: {},
                                    content: {},
                                    focus: {},
                                    scroll: {},
                                    css: {},
                                    script: {},
                                    balance: {}
                                }
                            },
                            data: undefined
                        }, force = {
                            uid: MODULE.UUID(),
                            ns: "",
                            nss: undefined,
                            speedcheck: undefined,
                            origLocation: origLocation,
                            destLocation: destLocation,
                            scroll: {
                                queue: []
                            },
                            option: this.option_
                        }, compute = function() {
                            setting.ns = setting.ns ? setting.ns.split(".").sort().join(".") : "";
                            var nsArray = [MODULE.DEF.NAME].concat(setting.ns ? setting.ns.split(".") : [])
                              , query = setting.server.query;
                            switch (query && typeof query) {
                            case "string":
                                query = eval("({" + query.toString().match(/[^?=&]+=[^&]*/g).join("&").replace(/"/g, '\\"').replace(/([^?=&]+)=([^&]*)/g, '"$1": "$2"').replace(/&/g, ",") + "})");
                            case "object":
                                query = jQuery.param(query);
                                break;
                            default:
                                query = ""
                            }
                            return {
                                uid: undefined,
                                ns: undefined,
                                origLocation: undefined,
                                destLocation: undefined,
                                scroll: undefined,
                                option: undefined,
                                speedcheck: undefined,
                                nss: {
                                    array: nsArray,
                                    name: nsArray.join("."),
                                    data: nsArray[0],
                                    url: _this.model_.convertUrlToKey(setting.destLocation.href, !0),
                                    event: {
                                        pjax: {
                                            fetch: [MODULE.EVENT.PJAX, "fetch"].join(":"),
                                            unload: [MODULE.EVENT.PJAX, "unload"].join(":"),
                                            DOMContentLoaded: [MODULE.EVENT.PJAX, "DOMContentLoaded"].join(":"),
                                            ready: [MODULE.EVENT.PJAX, "ready"].join(":"),
                                            render: [MODULE.EVENT.PJAX, "render"].join(":"),
                                            load: [MODULE.EVENT.PJAX, "load"].join(":")
                                        },
                                        click: [MODULE.EVENT.CLICK].concat(nsArray.join(":")).join("."),
                                        submit: [MODULE.EVENT.SUBMIT].concat(nsArray.join(":")).join("."),
                                        popstate: [MODULE.EVENT.POPSTATE].concat(nsArray.join(":")).join("."),
                                        scroll: [MODULE.EVENT.SCROLL].concat(nsArray.join(":")).join(".")
                                    },
                                    elem: nsArray.join("-"),
                                    requestHeader: ["X", nsArray[0].replace(/^\w/, function(t) {
                                        return t.toUpperCase()
                                    })].join("-")
                                },
                                fix: /android|iphone os|like mac os x/i.test(window.navigator.userAgent) ? undefined : {
                                    location: !1
                                },
                                contentType: setting.contentType.replace(/\s*[,;]\s*/g, "|").toLowerCase(),
                                database: {
                                    refresh: Math.min(setting.database.refresh, 30)
                                },
                                reset: {
                                    type: (setting.reset.type || "").toLowerCase()
                                },
                                server: {
                                    query: query
                                },
                                timeStamp: (new Date).getTime()
                            }
                        }, setting;
                        return setting = jQuery.extend(!0, initial, scope || this.option_),
                        setting = jQuery.extend(!0, setting, setting.balance.active && setting.balance.option, force),
                        setting = jQuery.extend(!0, setting, compute()),
                        scope ? (MODULE.FREEZE(setting, !0),
                        this.settings_[index] = setting,
                        setting) : (this.settings_[index] = null,
                        null)
                    }
                    ,
                    Main.prototype.scope_ = function(t, e, i) {
                        if (!(t = jQuery.extend(!0, {}, t)).scope)
                            return t;
                        var n, r, s, a, o, l, c = t.scope;
                        n = this.model_.convertUrlToKey(e, !0).match(/.+?\w(\/.*)/).pop(),
                        r = this.model_.convertUrlToKey(i, !0).match(/.+?\w(\/.*)/).pop();
                        for (var h = (s = n.split("/")).length; h--; )
                            if (a = s.slice(0, h + 1).join("/"),
                            (a += "/" === n.charAt(a.length) ? "/" : "") && a in c) {
                                var u;
                                if (c[a]instanceof Array ? (o = "",
                                u = c[a]) : (o = c[a],
                                u = c[o]),
                                u) {
                                    u = u.concat();
                                    var p, d, f, m = [];
                                    f = l = p = d = undefined;
                                    for (var _, g = 0; _ = u[g]; g++) {
                                        if ("#" === _.charAt(0)) {
                                            if (~jQuery.inArray(_, m) || !(_.length > 1)) {
                                                o = "";
                                                continue
                                            }
                                            m.push(_),
                                            o = _.slice(1),
                                            [].splice.apply(u, [g, 1].concat(c[o], "#")),
                                            _ = u[g]
                                        }
                                        if ("inherit" === _)
                                            f = !0;
                                        else if ("string" == typeof _) {
                                            var v = "!" === _.charAt(0)
                                              , y = "*" === (_ = v ? _.slice(1) : _).charAt(0);
                                            _ = y ? _.slice(1) : _,
                                            (y ? ~n.search(_) : ~n.indexOf(_)) && (v ? p = !1 : (p = !0,
                                            l = c["$" + o] || c["$" + _] || undefined)),
                                            (y ? ~r.search(_) : ~r.indexOf(_)) && (v ? d = !1 : (d = !0,
                                            l = c["$" + o] || c["$" + _] || undefined))
                                        }
                                        if (!1 === p || !1 === d)
                                            return null
                                    }
                                    if (p && d)
                                        return jQuery.extend(!0, t, l);
                                    if (!f)
                                        break
                                }
                            }
                        return undefined
                    }
                    ,
                    Main
                }();
                APP.Main = Main
            }(APP = MODEL.APP || (MODEL.APP = {}))
        }(MODEL = MODULE.MODEL || (MODULE.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(t) {
            t.App = t.APP.Main
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        !function(e) {
            var i = function(i) {
                function n() {
                    i.call(this, t.State.initiate),
                    this.controller_ = new t.Controller(this).singleton(),
                    this.app_ = new e.App(this,this.controller_),
                    this.util_ = t.LIBRARY.Utility,
                    this.isDeferrable = !!jQuery.when && "1.006" <= jQuery().jquery.match(/\d[\d.]+\d/).pop().replace(/\.(\d+)/g, ".00$1").replace(/0*(\d{3})/g, "$1"),
                    this.location = document.createElement("a"),
                    this.queue_ = []
                }
                return __extends(n, i),
                n.prototype.host = function() {
                    return this.app_.balancer.host()
                }
                ,
                n.prototype.state = function() {
                    return this.state_
                }
                ,
                n.prototype.main_ = function(e, i) {
                    var n = this;
                    switch (typeof i) {
                    case "object":
                        e = e instanceof t.DEF.NAMESPACE ? e : jQuery(document)[t.DEF.NAME](),
                        t.FREEZE(i, !0);
                        break;
                    default:
                        return e
                    }
                    if (!window.history || !window.history.pushState || !window.history.replaceState)
                        return e;
                    this.location.href = this.util_.normalizeUrl(window.location.href);
                    var r = this.app_.configure(i);
                    return r ? (this.app_.data.connect(r),
                    this.speed = {
                        fire: 0,
                        time: [],
                        name: [],
                        now: function() {
                            return (new Date).getTime()
                        }
                    },
                    jQuery(function() {
                        n.app_.initialize(e, r),
                        n.state_ = n.state() === t.State.initiate ? t.State.open : n.state(),
                        n.overlay(r, !0)
                    }),
                    e) : e
                }
                ,
                n.prototype.convertUrlToKey = function(t, e) {
                    return t = e ? this.util_.canonicalizeUrl(t) : t,
                    this.util_.trim(t).split("#").shift()
                }
                ,
                n.prototype.compareKeyByUrl = function(t, e) {
                    return t = this.convertUrlToKey(t, !0),
                    e = this.convertUrlToKey(e, !0),
                    t === e
                }
                ,
                n.prototype.comparePageByUrl = function(t, e) {
                    return t = this.convertUrlToKey(t, !0),
                    e = this.convertUrlToKey(e, !0),
                    t === e
                }
                ,
                n.prototype.configure = function(t) {
                    return this.app_.configure(t)
                }
                ,
                n.prototype.isOperatable = function(e) {
                    if (t.State.open !== this.state())
                        return !1;
                    if (e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
                        return !1;
                    var i;
                    switch (e.type.toLowerCase()) {
                    case t.EVENT.CLICK:
                        if ((i = this.app_.configure(e.currentTarget)) && !jQuery(e.currentTarget).filter(i.filter).length)
                            return !1;
                        break;
                    case t.EVENT.SUBMIT:
                        i = this.app_.configure(e.currentTarget);
                        break;
                    case t.EVENT.POPSTATE:
                        i = this.app_.configure(window.location)
                    }
                    if (!i)
                        return !1;
                    if (i.origLocation.protocol !== i.destLocation.protocol || i.origLocation.host !== i.destLocation.host)
                        return !1;
                    switch (e.type.toLowerCase()) {
                    case t.EVENT.CLICK:
                        if (this.comparePageByUrl(i.origLocation.href, i.destLocation.href) && i.destLocation.hash)
                            return !1;
                        break;
                    case t.EVENT.SUBMIT:
                        break;
                    case t.EVENT.POPSTATE:
                        if (this.comparePageByUrl(i.origLocation.href, i.destLocation.href))
                            return !1
                    }
                    return !!this.app_.page.chooseArea(i.area, document, document)
                }
                ,
                n.prototype.getPageXHR = function() {
                    return this.app_.page.pageXHR
                }
                ,
                n.prototype.setPageXHR = function(t) {
                    return this.app_.page.pageXHR && this.app_.page.pageXHR.readyState < 4 && this.app_.page.pageXHR !== t && this.app_.page.pageXHR.abort(),
                    this.app_.page.pageXHR = t
                }
                ,
                n.prototype.getDataXHR = function() {
                    return this.app_.page.dataXHR
                }
                ,
                n.prototype.setDataXHR = function(t) {
                    t = t || [];
                    var e = this.app_.page.dataXHR;
                    return this.app_.page.dataXHR = Array.apply(null, Array(Math.max(t.length, this.app_.page.dataXHR.length))).map(function(i, n) {
                        return function(i) {
                            switch (!0) {
                            case i >= e.length:
                            case 4 === e[i].readyState:
                            case e.indexOf(t[i]) > -1:
                                return t[i]
                            }
                            return e[i].abort(),
                            t[i]
                        }(n)
                    }).filter(function(t) {
                        return !!t
                    })
                }
                ,
                n.prototype.click = function(e) {
                    e.timeStamp = (new Date).getTime();
                    var i = e.currentTarget
                      , n = (jQuery(i),
                    this.app_.configure(i));
                    switch (this.location.href = this.util_.normalizeUrl(window.location.href),
                    !0) {
                    case !n:
                    case e.isDefaultPrevented():
                    case this.state() !== t.State.open:
                        break;
                    case this.isOperatable(e):
                        this.app_.page.transfer(n, e),
                        e.preventDefault();
                        break;
                    case this.isHashChange(n) && this.overlay(n):
                        e.preventDefault(),
                        window.history.pushState(null, document.title, n.destLocation.href);
                        break;
                    case !e.originalEvent && !jQuery(document).has(i).length:
                        this.fallback(e)
                    }
                }
                ,
                n.prototype.submit = function(e) {
                    e.timeStamp = (new Date).getTime();
                    var i = e.currentTarget
                      , n = (jQuery(i),
                    this.app_.configure(i));
                    switch (this.location.href = this.util_.normalizeUrl(window.location.href),
                    !0) {
                    case !n:
                    case e.isDefaultPrevented():
                    case this.state() !== t.State.open:
                        break;
                    case this.isOperatable(e):
                        this.app_.page.transfer(n, e),
                        e.preventDefault();
                        break;
                    case !e.originalEvent && !jQuery(document).has(i).length:
                        this.fallback(e)
                    }
                }
                ,
                n.prototype.popstate = function(e) {
                    if (!this.app_.page.landing || !this.util_.compareUrl(this.app_.page.landing, window.location.href)) {
                        e.timeStamp = (new Date).getTime();
                        var i = this.app_.configure(window.location);
                        switch (!0) {
                        case !i:
                            !this.comparePageByUrl(this.location.href, window.location.href) && this.fallback(e);
                            break;
                        case this.state() !== t.State.open:
                            break;
                        case this.isOperatable(e):
                            this.app_.page.transfer(i, e);
                            break;
                        case this.isHashChange(i) && this.overlay(i):
                            break;
                        case !this.comparePageByUrl(i.origLocation.href, window.location.href):
                            this.fallback(e)
                        }
                        this.location.href = this.util_.normalizeUrl(window.location.href)
                    }
                }
                ,
                n.prototype.scroll = function(t, e) {
                    for (var i, n = this; i = this.queue_.shift(); )
                        clearTimeout(i);
                    i = setTimeout(function() {
                        for (; i = n.queue_.shift(); )
                            clearTimeout(i);
                        n.compareKeyByUrl(window.location.href, n.location.href) && n.app_.data.saveScrollPosition()
                    }, 300),
                    this.queue_.push(i)
                }
                ,
                n.prototype.fallback = function(t) {
                    var e = this.configure(t);
                    switch (!0) {
                    case e && !e.fallback:
                    case e && !1 === this.util_.fire(e.fallback, e, [t, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]):
                        break;
                    default:
                        this.movePageNormally_(t)
                    }
                }
                ,
                n.prototype.movePageNormally_ = function(e) {
                    switch (e.type.toLowerCase()) {
                    case t.EVENT.CLICK:
                        "string" == typeof e.currentTarget.href ? window.location.assign(e.currentTarget.href) : window.location.assign(e.currentTarget.href.baseVal);
                        break;
                    case t.EVENT.SUBMIT:
                        switch (e.currentTarget.method.toUpperCase()) {
                        case "GET":
                            window.location.assign(e.currentTarget.action.replace(/[?#].*/, "") + "?" + jQuery(e.currentTarget).serialize());
                            break;
                        case "POST":
                            window.location.assign(e.currentTarget.action)
                        }
                        break;
                    case t.EVENT.POPSTATE:
                        window.location.reload()
                    }
                }
                ,
                n.prototype.isHashChange = function(t) {
                    return !!t && t.origLocation.href.replace(/#.*/, "") === t.destLocation.href.replace(/#.*/, "") && t.origLocation.hash !== t.destLocation.hash
                }
                ,
                n.prototype.overlay = function(t, e) {
                    var i = this
                      , n = t.destLocation.hash.replace(/^#/, "");
                    if (!n || !t.overlay)
                        return !1;
                    var r = jQuery("#" + n + ", [name~=" + n + "]");
                    if (r = r.add(r.nextUntil(":header")),
                    !(r = r.filter(t.overlay).add(r.find(t.overlay)).first()).length)
                        return !1;
                    this.isHashChange(t) && (this.app_.data.loadScrollPosition(),
                    setTimeout(function() {
                        return i.app_.data.loadScrollPosition()
                    }, 1));
                    var s = jQuery("<div>");
                    return r = r.clone(!0),
                    s.addClass(t.nss.elem + "-overlay").css({
                        background: "rgba(255, 255, 255, 0.8)",
                        display: "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }).append(r.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto"
                    }).show()),
                    s.bind("click", s, function(t) {
                        t.target === t.currentTarget && (window.history.pushState(window.history.state, document.title, window.location.href.replace(/#.*/, "")),
                        i.location.href = i.util_.normalizeUrl(window.location.href),
                        jQuery(t.data).fadeOut("fast", function() {
                            return jQuery(t.data).remove()
                        }))
                    }),
                    s.appendTo("body").fadeIn(e ? 0 : 100),
                    jQuery(window).one("popstate", s, function(t) {
                        setTimeout(function() {
                            return i.app_.data.loadScrollPosition()
                        }, 1),
                        jQuery(t.data).fadeOut("fast", function() {
                            return jQuery(t.data).remove()
                        })
                    }),
                    /trident/i.test(window.navigator.userAgent) && r.width(r.width()),
                    this.app_.data.saveScrollPosition(),
                    !0
                }
                ,
                n.prototype.enable = function() {
                    this.state_ = t.State.open
                }
                ,
                n.prototype.disable = function() {
                    this.state_ = t.State.pause
                }
                ,
                n.prototype.getCache = function(t) {
                    var e = this.configure(this.convertUrlToKey(t));
                    if (e) {
                        var i = this.app_.page.provider.getRecord(e);
                        return i.state(e) || i.data.data() ? {
                            data: i.data.data(),
                            textStatus: i.data.textStatus(),
                            jqXHR: i.data.jqXHR(),
                            expires: i.data.expires(),
                            host: i.data.host()
                        } : void this.removeCache(t)
                    }
                }
                ,
                n.prototype.setCache = function(t, e, i, n) {
                    var r = this.configure(this.convertUrlToKey(t));
                    if (r) {
                        var s = this.app_.page.provider.getRecord(r);
                        this.app_.page.provider.setRecord(r, e || "", i || s.data.textStatus(), n || s.data.jqXHR(), this.app_.balancer.sanitize(n, r) || s.data.host() || "", null)
                    }
                }
                ,
                n.prototype.removeCache = function(t) {
                    var e = this.configure(this.convertUrlToKey(t));
                    e && this.app_.page.provider.removeRecord(e)
                }
                ,
                n.prototype.clearCache = function() {
                    this.app_.page.provider.clearRecord()
                }
                ,
                n.prototype.bypass = function() {
                    return this.app_.balancer.bypass(this.app_.configure(window.location))
                }
                ,
                n
            }(e.Template);
            e.Main = i;
            var n = function() {
                function t() {
                    t.instance_ = t.instance_ || new i
                }
                return t.singleton = function() {
                    return t.instance_
                }
                ,
                t.prototype.singleton = function() {
                    return t.singleton()
                }
                ,
                t
            }();
            e.Singleton = n
        }(t.MODEL || (t.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function(t) {
        t.Model = t.MODEL.Singleton
    }(MODULE || (MODULE = {}));
    var Module = function() {
        return function() {
            new MODULE.Model
        }
    }();
    new Module
}
(window,window.document,void 0,jQuery),
function(t) {
    var e = {}
      , n = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    t.fn.bxSlider = function(r) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                t(this).bxSlider(r)
            }),
            this;
        var s = {}
          , a = this;
        e.el = this;
        var o = t(window).width()
          , l = t(window).height()
          , c = function() {
            s.settings = t.extend({}, n, r),
            s.settings.slideWidth = parseInt(s.settings.slideWidth),
            s.children = a.children(s.settings.slideSelector),
            s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length),
            s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length),
            s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)),
            s.active = {
                index: s.settings.startSlide
            },
            s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1,
            s.carousel && (s.settings.preloadImages = "all"),
            s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin,
            s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin,
            s.working = !1,
            s.controls = {},
            s.interval = null,
            s.animProp = "vertical" == s.settings.mode ? "top" : "left",
            s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                var t = document.createElement("div")
                  , e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var i in e)
                    if (void 0 !== t.style[e[i]])
                        return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(),
                        s.animProp = "-" + s.cssPrefix + "-transform",
                        !0;
                return !1
            }(),
            "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides),
            a.data("origStyle", a.attr("style")),
            a.children(s.settings.slideSelector).each(function() {
                t(this).data("origStyle", t(this).attr("style"))
            }),
            h()
        }
          , h = function() {
            a.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),
            s.viewport = a.parent(),
            s.loader = t('<div class="bx-loading" />'),
            s.viewport.prepend(s.loader),
            a.css({
                width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
                position: "relative"
            }),
            s.usingCSS && s.settings.easing ? a.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"),
            _(),
            s.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            }),
            s.viewport.parent().css({
                maxWidth: f()
            }),
            s.settings.pager || s.viewport.parent().css({
                margin: "0 auto 0px"
            }),
            s.children.css({
                float: "horizontal" == s.settings.mode ? "left" : "none",
                listStyle: "none",
                position: "relative"
            }),
            s.children.css("width", m()),
            "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin),
            "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin),
            "fade" == s.settings.mode && (s.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }),
            s.children.eq(s.settings.startSlide).css({
                zIndex: s.settings.slideZIndex,
                display: "block"
            })),
            s.controls.el = t('<div class="bx-controls" />'),
            s.settings.captions && P(),
            s.active.last = s.settings.startSlide == g() - 1,
            s.settings.video && a.fitVids();
            var e = s.children.eq(s.settings.startSlide);
            "all" == s.settings.preloadImages && (e = s.children),
            s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && b(),
            s.settings.controls && T(),
            s.settings.auto && s.settings.autoControls && S(),
            (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)),
            u(e, p)
        }
          , u = function(e, i) {
            var n = e.find("img, iframe").length;
            if (0 != n) {
                var r = 0;
                e.find("img, iframe").each(function() {
                    t(this).one("load", function() {
                        ++r == n && i()
                    }).each(function() {
                        this.complete && t(this).load()
                    })
                })
            } else
                i()
        }
          , p = function() {
            if (s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                var e = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides
                  , i = s.children.slice(0, e).clone().addClass("bx-clone")
                  , n = s.children.slice(-e).clone().addClass("bx-clone");
                a.append(i).prepend(n)
            }
            s.loader.remove(),
            y(),
            "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0),
            s.viewport.height(d()),
            a.redrawSlider(),
            s.settings.onSliderLoad(s.active.index),
            s.initialized = !0,
            s.settings.responsive && t(window).bind("resize", F),
            s.settings.auto && s.settings.autoStart && N(),
            s.settings.ticker && j(),
            s.settings.pager && M(s.settings.startSlide),
            s.settings.controls && R(),
            s.settings.touchEnabled && !s.settings.ticker && I()
        }
          , d = function() {
            var e = 0
              , n = t();
            if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                if (s.carousel) {
                    var r = 1 == s.settings.moveSlides ? s.active.index : s.active.index * v();
                    for (n = s.children.eq(r),
                    i = 1; i <= s.settings.maxSlides - 1; i++)
                        n = r + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(r + i))
                } else
                    n = s.children.eq(s.active.index);
            else
                n = s.children;
            return "vertical" == s.settings.mode ? (n.each(function() {
                e += t(this).outerHeight()
            }),
            s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                return t(this).outerHeight(!1)
            }).get()),
            e
        }
          , f = function() {
            var t = "100%";
            return s.settings.slideWidth > 0 && (t = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth),
            t
        }
          , m = function() {
            var t = s.settings.slideWidth
              , e = s.viewport.width();
            return 0 == s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" == s.settings.mode ? t = e : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (e > s.maxThreshold || e < s.minThreshold && (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)),
            t
        }
          , _ = function() {
            var t = 1;
            if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
                if (s.viewport.width() < s.minThreshold)
                    t = s.settings.minSlides;
                else if (s.viewport.width() > s.maxThreshold)
                    t = s.settings.maxSlides;
                else {
                    var e = s.children.first().width();
                    t = Math.floor(s.viewport.width() / e)
                }
            else
                "vertical" == s.settings.mode && (t = s.settings.minSlides);
            return t
        }
          , g = function() {
            var t = 0;
            if (s.settings.moveSlides > 0)
                if (s.settings.infiniteLoop)
                    t = s.children.length / v();
                else
                    for (var e = 0, i = 0; e < s.children.length; )
                        ++t,
                        e = i + _(),
                        i += s.settings.moveSlides <= _() ? s.settings.moveSlides : _();
            else
                t = Math.ceil(s.children.length / _());
            return t
        }
          , v = function() {
            return s.settings.moveSlides > 0 && s.settings.moveSlides <= _() ? s.settings.moveSlides : _()
        }
          , y = function() {
            if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                if ("horizontal" == s.settings.mode) {
                    var t = s.children.last()
                      , e = t.position();
                    w(-(e.left - (s.viewport.width() - t.width())), "reset", 0)
                } else if ("vertical" == s.settings.mode) {
                    var i = s.children.length - s.settings.minSlides;
                    e = s.children.eq(i).position();
                    w(-e.top, "reset", 0)
                }
            } else {
                e = s.children.eq(s.active.index * v()).position();
                s.active.index == g() - 1 && (s.active.last = !0),
                void 0 != e && ("horizontal" == s.settings.mode ? w(-e.left, "reset", 0) : "vertical" == s.settings.mode && w(-e.top, "reset", 0))
            }
        }
          , w = function(t, e, i, n) {
            if (s.usingCSS) {
                var r = "vertical" == s.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                a.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"),
                "slide" == e ? (a.css(s.animProp, r),
                a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    A()
                })) : "reset" == e ? a.css(s.animProp, r) : "ticker" == e && (a.css("-" + s.cssPrefix + "-transition-timing-function", "linear"),
                a.css(s.animProp, r),
                a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    w(n.resetValue, "reset", 0),
                    z()
                }))
            } else {
                var o = {};
                o[s.animProp] = t,
                "slide" == e ? a.animate(o, i, s.settings.easing, function() {
                    A()
                }) : "reset" == e ? a.css(s.animProp, t) : "ticker" == e && a.animate(o, speed, "linear", function() {
                    w(n.resetValue, "reset", 0),
                    z()
                })
            }
        }
          , x = function() {
            for (var e = "", i = g(), n = 0; i > n; n++) {
                var r = "";
                s.settings.buildPager && t.isFunction(s.settings.buildPager) ? (r = s.settings.buildPager(n),
                s.pagerEl.addClass("bx-custom-pager")) : (r = n + 1,
                s.pagerEl.addClass("bx-default-pager")),
                e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + r + "</a></div>"
            }
            s.pagerEl.html(e)
        }
          , b = function() {
            s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'),
            s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl),
            x()),
            s.pagerEl.on("click", "a", O)
        }
          , T = function() {
            s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"),
            s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"),
            s.controls.next.bind("click", C),
            s.controls.prev.bind("click", E),
            s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next),
            s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev),
            s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'),
            s.controls.directionEl.append(s.controls.prev).append(s.controls.next),
            s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
        }
          , S = function() {
            s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"),
            s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"),
            s.controls.autoEl = t('<div class="bx-controls-auto" />'),
            s.controls.autoEl.on("click", ".bx-start", k),
            s.controls.autoEl.on("click", ".bx-stop", D),
            s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop),
            s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),
            L(s.settings.autoStart ? "stop" : "start")
        }
          , P = function() {
            s.children.each(function() {
                var e = t(this).find("img:first").attr("title");
                void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
            })
        }
          , C = function(t) {
            s.settings.auto && a.stopAuto(),
            a.goToNextSlide(),
            t.preventDefault()
        }
          , E = function(t) {
            s.settings.auto && a.stopAuto(),
            a.goToPrevSlide(),
            t.preventDefault()
        }
          , k = function(t) {
            a.startAuto(),
            t.preventDefault()
        }
          , D = function(t) {
            a.stopAuto(),
            t.preventDefault()
        }
          , O = function(e) {
            s.settings.auto && a.stopAuto();
            var i = t(e.currentTarget)
              , n = parseInt(i.attr("data-slide-index"));
            n != s.active.index && a.goToSlide(n),
            e.preventDefault()
        }
          , M = function(e) {
            var i = s.children.length;
            return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)),
            void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"),
            void s.pagerEl.each(function(i, n) {
                t(n).find("a").eq(e).addClass("active")
            }))
        }
          , A = function() {
            if (s.settings.infiniteLoop) {
                var t = "";
                0 == s.active.index ? t = s.children.eq(0).position() : s.active.index == g() - 1 && s.carousel ? t = s.children.eq((g() - 1) * v()).position() : s.active.index == s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()),
                t && ("horizontal" == s.settings.mode ? w(-t.left, "reset", 0) : "vertical" == s.settings.mode && w(-t.top, "reset", 0))
            }
            s.working = !1,
            s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
        }
          , L = function(t) {
            s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"),
            s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
        }
          , R = function() {
            1 == g() ? (s.controls.prev.addClass("disabled"),
            s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"),
            s.controls.next.removeClass("disabled")) : s.active.index == g() - 1 ? (s.controls.next.addClass("disabled"),
            s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"),
            s.controls.next.removeClass("disabled")))
        }
          , N = function() {
            s.settings.autoDelay > 0 ? setTimeout(a.startAuto, s.settings.autoDelay) : a.startAuto(),
            s.settings.autoHover && a.hover(function() {
                s.interval && (a.stopAuto(!0),
                s.autoPaused = !0)
            }, function() {
                s.autoPaused && (a.startAuto(!0),
                s.autoPaused = null)
            })
        }
          , j = function() {
            var e = 0;
            if ("next" == s.settings.autoDirection)
                a.append(s.children.clone().addClass("bx-clone"));
            else {
                a.prepend(s.children.clone().addClass("bx-clone"));
                var i = s.children.first().position();
                e = "horizontal" == s.settings.mode ? -i.left : -i.top
            }
            w(e, "reset", 0),
            s.settings.pager = !1,
            s.settings.controls = !1,
            s.settings.autoControls = !1,
            s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                a.stop()
            }, function() {
                var e = 0;
                s.children.each(function() {
                    e += "horizontal" == s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                });
                var i = s.settings.speed / e
                  , n = "horizontal" == s.settings.mode ? "left" : "top"
                  , r = i * (e - Math.abs(parseInt(a.css(n))));
                z(r)
            }),
            z()
        }
          , z = function(t) {
            speed = t || s.settings.speed;
            var e = {
                left: 0,
                top: 0
            }
              , i = {
                left: 0,
                top: 0
            };
            "next" == s.settings.autoDirection ? e = a.find(".bx-clone").first().position() : i = s.children.first().position();
            var n = "horizontal" == s.settings.mode ? -e.left : -e.top
              , r = {
                resetValue: "horizontal" == s.settings.mode ? -i.left : -i.top
            };
            w(n, "ticker", speed, r)
        }
          , I = function() {
            s.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            },
            s.viewport.bind("touchstart", B)
        }
          , B = function(t) {
            if (s.working)
                t.preventDefault();
            else {
                s.touch.originalPos = a.position();
                var e = t.originalEvent;
                s.touch.start.x = e.changedTouches[0].pageX,
                s.touch.start.y = e.changedTouches[0].pageY,
                s.viewport.bind("touchmove", H),
                s.viewport.bind("touchend", U)
            }
        }
          , H = function(t) {
            var e = t.originalEvent
              , i = Math.abs(e.changedTouches[0].pageX - s.touch.start.x)
              , n = Math.abs(e.changedTouches[0].pageY - s.touch.start.y);
            if (3 * i > n && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * n > i && s.settings.preventDefaultSwipeY && t.preventDefault(),
            "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                var r = 0;
                if ("horizontal" == s.settings.mode) {
                    var a = e.changedTouches[0].pageX - s.touch.start.x;
                    r = s.touch.originalPos.left + a
                } else {
                    a = e.changedTouches[0].pageY - s.touch.start.y;
                    r = s.touch.originalPos.top + a
                }
                w(r, "reset", 0)
            }
        }
          , U = function(t) {
            s.viewport.unbind("touchmove", H);
            var e = t.originalEvent
              , i = 0;
            if (s.touch.end.x = e.changedTouches[0].pageX,
            s.touch.end.y = e.changedTouches[0].pageY,
            "fade" == s.settings.mode) {
                (n = Math.abs(s.touch.start.x - s.touch.end.x)) >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(),
                a.stopAuto())
            } else {
                var n = 0;
                "horizontal" == s.settings.mode ? (n = s.touch.end.x - s.touch.start.x,
                i = s.touch.originalPos.left) : (n = s.touch.end.y - s.touch.start.y,
                i = s.touch.originalPos.top),
                !s.settings.infiniteLoop && (0 == s.active.index && n > 0 || s.active.last && 0 > n) ? w(i, "reset", 200) : Math.abs(n) >= s.settings.swipeThreshold ? (0 > n ? a.goToNextSlide() : a.goToPrevSlide(),
                a.stopAuto()) : w(i, "reset", 200)
            }
            s.viewport.unbind("touchend", U)
        }
          , F = function() {
            var e = t(window).width()
              , i = t(window).height();
            (o != e || l != i) && (o = e,
            l = i,
            a.redrawSlider(),
            s.settings.onSliderResize.call(a, s.active.index))
        };
        return a.goToSlide = function(e, i) {
            if (!s.working && s.active.index != e)
                if (s.working = !0,
                s.oldIndex = s.active.index,
                s.active.index = 0 > e ? g() - 1 : e >= g() ? 0 : e,
                s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index),
                "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index),
                s.active.last = s.active.index >= g() - 1,
                s.settings.pager && M(s.active.index),
                s.settings.controls && R(),
                "fade" == s.settings.mode)
                    s.settings.adaptiveHeight && s.viewport.height() != d() && s.viewport.animate({
                        height: d()
                    }, s.settings.adaptiveHeightSpeed),
                    s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }),
                    s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                        t(this).css("zIndex", s.settings.slideZIndex),
                        A()
                    });
                else {
                    s.settings.adaptiveHeight && s.viewport.height() != d() && s.viewport.animate({
                        height: d()
                    }, s.settings.adaptiveHeightSpeed);
                    var n = 0
                      , r = {
                        left: 0,
                        top: 0
                    };
                    if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                        if ("horizontal" == s.settings.mode) {
                            r = (l = s.children.eq(s.children.length - 1)).position(),
                            n = s.viewport.width() - l.outerWidth()
                        } else {
                            var o = s.children.length - s.settings.minSlides;
                            r = s.children.eq(o).position()
                        }
                    else if (s.carousel && s.active.last && "prev" == i) {
                        var l, c = 1 == s.settings.moveSlides ? s.settings.maxSlides - v() : (g() - 1) * v() - (s.children.length - s.settings.maxSlides);
                        r = (l = a.children(".bx-clone").eq(c)).position()
                    } else if ("next" == i && 0 == s.active.index)
                        r = a.find("> .bx-clone").eq(s.settings.maxSlides).position(),
                        s.active.last = !1;
                    else if (e >= 0) {
                        var h = e * v();
                        r = s.children.eq(h).position()
                    }
                    if (void 0 !== r) {
                        var u = "horizontal" == s.settings.mode ? -(r.left - n) : -r.top;
                        w(u, "slide", s.settings.speed)
                    }
                }
        }
        ,
        a.goToNextSlide = function() {
            if (s.settings.infiniteLoop || !s.active.last) {
                var t = parseInt(s.active.index) + 1;
                a.goToSlide(t, "next")
            }
        }
        ,
        a.goToPrevSlide = function() {
            if (s.settings.infiniteLoop || 0 != s.active.index) {
                var t = parseInt(s.active.index) - 1;
                a.goToSlide(t, "prev")
            }
        }
        ,
        a.startAuto = function(t) {
            s.interval || (s.interval = setInterval(function() {
                "next" == s.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
            }, s.settings.pause),
            s.settings.autoControls && 1 != t && L("stop"))
        }
        ,
        a.stopAuto = function(t) {
            s.interval && (clearInterval(s.interval),
            s.interval = null,
            s.settings.autoControls && 1 != t && L("start"))
        }
        ,
        a.getCurrentSlide = function() {
            return s.active.index
        }
        ,
        a.getCurrentSlideElement = function() {
            return s.children.eq(s.active.index)
        }
        ,
        a.getSlideCount = function() {
            return s.children.length
        }
        ,
        a.redrawSlider = function() {
            s.children.add(a.find(".bx-clone")).outerWidth(m()),
            s.viewport.css("height", d()),
            s.settings.ticker || y(),
            s.active.last && (s.active.index = g() - 1),
            s.active.index >= g() && (s.active.last = !0),
            s.settings.pager && !s.settings.pagerCustom && (x(),
            M(s.active.index))
        }
        ,
        a.destroySlider = function() {
            s.initialized && (s.initialized = !1,
            t(".bx-clone", this).remove(),
            s.children.each(function() {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }),
            void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"),
            t(this).unwrap().unwrap(),
            s.controls.el && s.controls.el.remove(),
            s.controls.next && s.controls.next.remove(),
            s.controls.prev && s.controls.prev.remove(),
            s.pagerEl && s.settings.controls && s.pagerEl.remove(),
            t(".bx-caption", this).remove(),
            s.controls.autoEl && s.controls.autoEl.remove(),
            clearInterval(s.interval),
            s.settings.responsive && t(window).unbind("resize", F))
        }
        ,
        a.reloadSlider = function(t) {
            void 0 != t && (r = t),
            a.destroySlider(),
            c()
        }
        ,
        c(),
        this
    }
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    var e = 0
      , i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var n, r, s;
            for (s = 0; null != (r = i[s]); s++)
                try {
                    (n = t._data(r, "events")) && n.remove && t(r).triggerHandler("remove")
                } catch (t) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, n) {
        var r, s, a, o, l = {}, c = e.split(".")[0];
        return e = e.split(".")[1],
        r = c + "-" + e,
        n || (n = i,
        i = t.Widget),
        t.expr[":"][r.toLowerCase()] = function(e) {
            return !!t.data(e, r)
        }
        ,
        t[c] = t[c] || {},
        s = t[c][e],
        a = t[c][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new a(t,e)
        }
        ,
        t.extend(a, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }),
        o = new i,
        o.options = t.widget.extend({}, o.options),
        t.each(n, function(e, n) {
            return t.isFunction(n) ? void (l[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                }
                  , r = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super, s = this._superApply;
                    return this._super = t,
                    this._superApply = r,
                    e = n.apply(this, arguments),
                    this._super = i,
                    this._superApply = s,
                    e
                }
            }()) : void (l[e] = n)
        }),
        a.prototype = t.widget.extend(o, {
            widgetEventPrefix: s ? o.widgetEventPrefix || e : e
        }, l, {
            constructor: a,
            namespace: c,
            widgetName: e,
            widgetFullName: r
        }),
        s ? (t.each(s._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto)
        }),
        delete s._childConstructors) : i._childConstructors.push(a),
        t.widget.bridge(e, a),
        a
    }
    ,
    t.widget.extend = function(e) {
        for (var n, r, s = i.call(arguments, 1), a = 0, o = s.length; o > a; a++)
            for (n in s[a])
                r = s[a][n],
                s[a].hasOwnProperty(n) && void 0 !== r && (e[n] = t.isPlainObject(r) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], r) : t.widget.extend({}, r) : r);
        return e
    }
    ,
    t.widget.bridge = function(e, n) {
        var r = n.prototype.widgetFullName || e;
        t.fn[e] = function(s) {
            var a = "string" == typeof s
              , o = i.call(arguments, 1)
              , l = this;
            return s = !a && o.length ? t.widget.extend.apply(null, [s].concat(o)) : s,
            a ? this.each(function() {
                var i, n = t.data(this, r);
                return "instance" === s ? (l = n,
                !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, o)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
            }) : this.each(function() {
                var e = t.data(this, r);
                e ? (e.option(s || {}),
                e._init && e._init()) : t.data(this, r, new n(s,this))
            }),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, n) {
            n = t(n || this.defaultElement || this)[0],
            this.element = t(n),
            this.uuid = e++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            n !== this && (t.data(n, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }),
            this.document = t(n.style ? n.ownerDocument : n.document || n),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, r, s, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {},
                n = e.split("."),
                e = n.shift(),
                n.length) {
                    for (r = a[e] = t.widget.extend({}, this.options[e]),
                    s = 0; n.length - 1 > s; s++)
                        r[n[s]] = r[n[s]] || {},
                        r = r[n[s]];
                    if (e = n.pop(),
                    1 === arguments.length)
                        return void 0 === r[e] ? null : r[e];
                    r[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
            e && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, i, n) {
            var r, s = this;
            "boolean" != typeof e && (n = i,
            i = e,
            e = !1),
            n ? (i = r = t(i),
            this.bindings = this.bindings.add(i)) : (n = i,
            i = this.element,
            r = this.widget()),
            t.each(n, function(n, a) {
                function o() {
                    return e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : void 0
                }
                "string" != typeof a && (o.guid = a.guid = a.guid || o.guid || t.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/)
                  , c = l[1] + s.eventNamespace
                  , h = l[2];
                h ? r.delegate(h, c, o) : i.bind(c, o)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(i).undelegate(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var r, s, a = this.options[e];
            if (n = n || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            s = i.originalEvent)
                for (r in s)
                    r in i || (i[r] = s[r]);
            return this.element.trigger(i, n),
            !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, r, s) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, o = r ? !0 === r || "number" == typeof r ? i : r.effect || i : e;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }),
            a = !t.isEmptyObject(r),
            r.complete = s,
            r.delay && n.delay(r.delay),
            a && t.effects && t.effects.effect[o] ? n[e](r) : o !== e && n[o] ? n[o](r.duration, r.easing, s) : n.queue(function(i) {
                t(this)[e](),
                s && s.call(n[0]),
                i()
            })
        }
    }),
    t.widget
}),
function(t) {
    "use strict";
    t.widget("aerolab.midnight", {
        options: {
            headerClass: "midnightHeader",
            innerClass: "midnightInner",
            defaultClass: "default",
            classPrefix: ""
        },
        _headers: {},
        _headerInfo: {
            top: 0,
            height: 0
        },
        _$sections: [],
        _sections: [],
        _scrollTop: 0,
        _documentHeight: 0,
        _transformMode: !1,
        refresh: function() {
            this._headerInfo = {
                top: 0,
                height: this.element.outerHeight()
            },
            this._$sections = t("[data-midnight]"),
            this._sections = [],
            this._setupHeaders(),
            this.recalculate()
        },
        _create: function() {
            var e = this;
            this._scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            this._documentHeight = t(document).height(),
            this._headers = {},
            this._transformMode = this._getSupportedTransform(),
            this.refresh(),
            setInterval(function() {
                e._recalculateSections()
            }, 1e3),
            e.recalculate(),
            t(window).resize(function() {
                e.recalculate()
            }),
            this._updateHeadersLoop()
        },
        recalculate: function() {
            this._recalculateSections(),
            this._updateHeaderHeight(),
            this._recalculateHeaders(),
            this._updateHeaders()
        },
        _getSupportedTransform: function() {
            for (var t = ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], e = 0; e < t.length; e++)
                if (void 0 !== document.createElement("div").style[t[e]])
                    return t[e];
            return !1
        },
        _getContainerHeight: function() {
            var e = this.element.find("> ." + this.options.headerClass)
              , i = 0
              , n = 0
              , r = this;
            return e.length ? e.each(function() {
                var e = t(this)
                  , s = e.find("> ." + r.options.innerClass);
                s.length ? (s.css("bottom", "auto").css("overflow", "auto"),
                n = s.outerHeight(),
                s.css("bottom", "0")) : (e.css("bottom", "auto"),
                n = e.outerHeight(),
                e.css("bottom", "0")),
                i = n > i ? n : i
            }) : i = n = this.element.outerHeight(),
            i
        },
        _setupHeaders: function() {
            var e = this;
            this._headers[this.options.defaultClass] = {},
            this._$sections.each(function() {
                var i = t(this).data("midnight");
                "string" == typeof i && "" !== (i = i.trim()) && (e._headers[i] = {})
            }),
            this.element.css("padding-top"),
            this.element.css("padding-right"),
            this.element.css("padding-bottom"),
            this.element.css("padding-left"),
            this.element.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                overflow: "hidden"
            }),
            this._updateHeaderHeight();
            (i = this.element.find("> ." + this.options.headerClass)).length ? i.filter("." + this.options.defaultClass).length || i.filter("." + this.options.headerClass + ":first").clone(!0, !0).attr("class", this.options.headerClass + " " + this.options.defaultClass) : this.element.wrapInner('<div class="' + this.options.headerClass + " " + this.options.defaultClass + '"></div>');
            var i, n = (i = this.element.find("> ." + this.options.headerClass)).filter("." + this.options.defaultClass).clone(!0, !0);
            for (var r in this._headers)
                if (this._headers.hasOwnProperty(r) && void 0 === this._headers[r].element) {
                    var s = i.filter("." + r);
                    s.length ? this._headers[r].element = s : this._headers[r].element = n.clone(!0, !0).removeClass(this.options.defaultClass).addClass(r).appendTo(this.element);
                    var a = {
                        position: "absolute",
                        overflow: "hidden",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    };
                    this._headers[r].element.css(a),
                    !1 !== this._transformMode && this._headers[r].element.css(this._transformMode, "translateZ(0)"),
                    this._headers[r].element.find("> ." + this.options.innerClass).length || this._headers[r].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'),
                    this._headers[r].inner = this._headers[r].element.find("> ." + this.options.innerClass),
                    this._headers[r].inner.css(a),
                    !1 !== this._transformMode && this._headers[r].inner.css(this._transformMode, "translateZ(0)"),
                    this._headers[r].from = "",
                    this._headers[r].progress = 0
                }
            i.each(function() {
                var i = t(this)
                  , n = !1;
                for (var r in e._headers)
                    e._headers.hasOwnProperty(r) && i.hasClass(r) && (n = !0);
                i.find("> ." + e.options.innerClass).length || i.wrapInner('<div class="' + e.options.innerClass + '"></div>'),
                n ? i.show() : i.hide()
            })
        },
        _recalculateHeaders: function() {
            this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            this._scrollTop = Math.max(this._scrollTop, 0),
            this._scrollTop = Math.min(this._scrollTop, this._documentHeight);
            var t = this._headerInfo.height
              , e = this._scrollTop + this._headerInfo.top
              , i = e + t;
            if ("function" == typeof window.getComputedStyle) {
                var n = window.getComputedStyle(this.element[0], null)
                  , r = 0
                  , s = 0;
                if (!1 !== this._transformMode && "string" == typeof n.transform) {
                    var a = n.transform.match(/(-?[0-9\.]+)/g);
                    null !== a && a.length >= 6 && !isNaN(parseFloat(a[5])) && (s = parseFloat(a[5]))
                }
                n.top.indexOf("px") >= 0 && !isNaN(parseFloat(n.top)) && (r = parseFloat(n.top)),
                e += r + s,
                i += r + s
            }
            for (var o in this._headers)
                this._headers.hasOwnProperty(o) && (this._headers[o].from = "",
                this._headers[o].progress = 0);
            for (var l = 0; l < this._sections.length; l++)
                i >= this._sections[l].start && e <= this._sections[l].end && (this._headers[this._sections[l].className].visible = !0,
                e >= this._sections[l].start && i <= this._sections[l].end ? (this._headers[this._sections[l].className].from = "top",
                this._headers[this._sections[l].className].progress += 1) : i > this._sections[l].end && e < this._sections[l].end ? (this._headers[this._sections[l].className].from = "top",
                this._headers[this._sections[l].className].progress = 1 - (i - this._sections[l].end) / t) : i > this._sections[l].start && e < this._sections[l].start && ("top" === this._headers[this._sections[l].className].from ? this._headers[this._sections[l].className].progress += (i - this._sections[l].start) / t : (this._headers[this._sections[l].className].from = "bottom",
                this._headers[this._sections[l].className].progress = (i - this._sections[l].start) / t)))
        },
        _updateHeaders: function() {
            if (void 0 !== this._headers[this.options.defaultClass]) {
                var t = 0
                  , e = "";
                for (var i in this._headers)
                    this._headers.hasOwnProperty(i) && "" !== !this._headers[i].from && (t += this._headers[i].progress,
                    e = i);
                1 > t && ("" === this._headers[this.options.defaultClass].from ? (this._headers[this.options.defaultClass].from = "top" === this._headers[e].from ? "bottom" : "top",
                this._headers[this.options.defaultClass].progress = 1 - t) : this._headers[this.options.defaultClass].progress += 1 - t);
                for (var n in this._headers)
                    if (this._headers.hasOwnProperty(n) && "" !== !this._headers[n].from) {
                        var r = 100 * (1 - this._headers[n].progress);
                        r >= 100 && (r = 110),
                        -100 >= r && (r = -110),
                        "top" === this._headers[n].from ? !1 !== this._transformMode ? (this._headers[n].element[0].style[this._transformMode] = "translateY(-" + r + "%) translateZ(0)",
                        this._headers[n].inner[0].style[this._transformMode] = "translateY(+" + r + "%) translateZ(0)") : (this._headers[n].element[0].style.top = "-" + r + "%",
                        this._headers[n].inner[0].style.top = "+" + r + "%") : !1 !== this._transformMode ? (this._headers[n].element[0].style[this._transformMode] = "translateY(+" + r + "%) translateZ(0)",
                        this._headers[n].inner[0].style[this._transformMode] = "translateY(-" + r + "%) translateZ(0)") : (this._headers[n].element[0].style.top = "+" + r + "%",
                        this._headers[n].inner[0].style.top = "-" + r + "%")
                    }
            }
        },
        _recalculateSections: function() {
            this._documentHeight = t(document).height(),
            this._sections = [];
            for (var e = 0; e < this._$sections.length; e++) {
                var i = t(this._$sections[e]);
                this._sections.push({
                    element: i,
                    className: i.data("midnight"),
                    start: i.offset().top,
                    end: i.offset().top + i.outerHeight()
                })
            }
        },
        _updateHeaderHeight: function() {
            this._headerInfo.height = this._getContainerHeight(),
            this.element.css("height", this._headerInfo.height + "px")
        },
        _updateHeadersLoop: function() {
            var t = this;
            this._requestAnimationFrame(function() {
                t._updateHeadersLoop()
            }),
            this._recalculateHeaders(),
            this._updateHeaders()
        },
        _requestAnimationFrame: function(t) {
            var e = e || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
            ;
            e(t)
        }
    })
}(jQuery);
