function imgLoad() {
    var e = $("img.retina-img");
    e.each(function(t) {
        var n = $(e[t]);
        if (window.devicePixelRatio > 1) {
            var o = n.attr("data-src"),
                i = o.lastIndexOf("."),
                r = o.slice(0, i) + "@2x." + o.slice(i + 1);
            n.attr("src", r)
        } else {
            var o = n.attr("data-src");
            n.attr("src", o)
        }
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function o(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, o) {
            return !!t.call(e, o, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : we.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, o) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready()
    }

    function d() {
        this.expando = he.expando + d.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(je, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
                try {
                    n = p(n)
                } catch (e) {}
                He.set(e, t, n)
            } else n = void 0;
        return n
    }

    function v(e, t, n, o) {
        var i, r = 1,
            a = 20,
            s = o ? function() {
                return o.cur()
            } : function() {
                return he.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== c && +l) && Re.exec(he.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, he.style(e, t, u + c)
            } while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = c, o.start = u, o.end = i)), i
    }

    function g(e) {
        var t, n = e.ownerDocument,
            o = e.nodeName,
            i = Pe[o];
        return i || (t = n.body.appendChild(n.createElement(o)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Pe[o] = i, i)
    }

    function m(e, t) {
        for (var n, o, i = [], r = 0, a = e.length; r < a; r++) o = e[r], o.style && (n = o.style.display, t ? ("none" === n && (i[r] = Oe.get(o, "display") || null, i[r] || (o.style.display = "")), "" === o.style.display && Fe(o) && (i[r] = g(o))) : "none" !== n && (i[r] = "none", Oe.set(o, "display", n)));
        for (r = 0; r < a; r++) null != i[r] && (e[r].style.display = i[r]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, o = e.length; n < o; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
    }

    function b(e, t, n, o, i) {
        for (var r, a, s, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === he.type(r)) he.merge(d, r.nodeType ? [r] : r);
                else if (Ue.test(r)) {
            for (a = a || f.appendChild(t.createElement("div")), s = ($e.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[s] || Ve._default, a.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
            he.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
        } else d.push(t.createTextNode(r));
        for (f.textContent = "", p = 0; r = d[p++];)
            if (o && he.inArray(r, o) > -1) i && i.push(r);
            else if (c = he.contains(r.ownerDocument, r), a = y(f.appendChild(r), "script"), c && x(a), n)
            for (u = 0; r = a[u++];) We.test(r.type || "") && n.push(r);
        return f
    }

    function w() {
        return !0
    }

    function S() {
        return !1
    }

    function C() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function T(e, t, n, o, i, r) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (o = o || n, n = void 0);
            for (s in t) T(e, s, n, o, t[s], r);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = S;
        else if (!i) return e;
        return 1 === r && (a = i, i = function(e) {
            return he().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, i, o, n)
        })
    }

    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function E(e) {
        var t = Ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function L(e, t) {
        var n, o, i, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (Oe.hasData(e) && (r = Oe.access(e), a = Oe.set(t, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (i in c)
                    for (n = 0, o = c[i].length; n < o; n++) he.event.add(t, i, c[i][n])
            }
            He.hasData(e) && (s = He.access(e), l = he.extend({}, s), He.set(t, l))
        }
    }

    function I(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function D(e, t, o, i) {
        t = re.apply([], t);
        var r, a, s, l, c, u, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            v = he.isFunction(h);
        if (v || d > 1 && "string" == typeof h && !pe.checkClone && Qe.test(h)) return e.each(function(n) {
            var r = e.eq(n);
            v && (t[0] = h.call(this, n, r.html())), D(r, t, o, i)
        });
        if (d && (r = b(t, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (s = he.map(y(r, "script"), A), l = s.length; f < d; f++) c = r, f !== p && (c = he.clone(c, !0, !0), l && he.merge(s, y(c, "script"))), o.call(e[f], c, f);
            if (l)
                for (u = s[s.length - 1].ownerDocument, he.map(s, E), f = 0; f < l; f++) c = s[f], We.test(c.type || "") && !Oe.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(Je, ""), u))
        }
        return e
    }

    function O(e, t, n) {
        for (var o, i = t ? he.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || he.cleanData(y(o)), o.parentNode && (n && he.contains(o.ownerDocument, o) && x(y(o, "script")), o.parentNode.removeChild(o));
        return e
    }

    function H(e, t, n) {
        var o, i, r, a, s = e.style;
        return n = n || nt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && tt.test(a) && et.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in lt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
            if ((e = st[n] + t) in lt) return e
    }

    function M(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = j(e) || e), t
    }

    function R(e, t, n) {
        var o = Re.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function q(e, t, n, o, i) {
        var r, a = 0;
        for (r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + qe[r], !0, i)), o ? ("content" === n && (a -= he.css(e, "padding" + qe[r], !0, i)), "margin" !== n && (a -= he.css(e, "border" + qe[r] + "Width", !0, i))) : (a += he.css(e, "padding" + qe[r], !0, i), "padding" !== n && (a += he.css(e, "border" + qe[r] + "Width", !0, i)));
        return a
    }

    function F(e, t, n) {
        var o, i = nt(e),
            r = H(e, t, i),
            a = "border-box" === he.css(e, "boxSizing", !1, i);
        return tt.test(r) ? r : (o = a && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + q(e, t, n || (a ? "border" : "content"), o, i) + "px")
    }

    function B(e, t, n, o, i) {
        return new B.prototype.init(e, t, n, o, i)
    }

    function P() {
        ut && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(P) : e.setTimeout(P, he.fx.interval), he.fx.tick())
    }

    function z() {
        return e.setTimeout(function() {
            ct = void 0
        }), ct = he.now()
    }

    function $(e, t) {
        var n, o = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n = qe[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function W(e, t, n) {
        for (var o, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), r = 0, a = i.length; r < a; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function V(e, t, n) {
        var o, i, r, a, s, l, c, u, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            v = e.nodeType && Fe(e),
            g = Oe.get(e, "fxshow");
        n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (o in t)
            if (i = t[o], ft.test(i)) {
                if (delete t[o], r = r || "toggle" === i, i === (v ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[o]) continue;
                    v = !0
                }
                p[o] = g && g[o] || he.style(e, o)
            }
        if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = Oe.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (m([e], !0), c = e.style.display || c, u = he.css(e, "display"), m([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (d.done(function() {
                h.display = c
            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (o in p) l || (g ? "hidden" in g && (v = g.hidden) : g = Oe.access(e, "fxshow", {
                display: c
            }), r && (g.hidden = !v), v && m([e], !0), d.done(function() {
                v || m([e]), Oe.remove(e, "fxshow");
                for (o in p) he.style(e, o, p[o])
            })), l = W(v ? g[o] : 0, o, d), o in g || (g[o] = l.start, v && (l.end = l.start, l.start = 0))
        }
    }

    function U(e, t) {
        var n, o, i, r, a;
        for (n in e)
            if (o = he.camelCase(n), i = t[o], r = e[n], Array.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (a = he.cssHooks[o]) && "expand" in a) {
                r = a.expand(r), delete e[o];
                for (n in r) n in e || (e[n] = r[n], t[n] = i)
            } else t[o] = i
    }

    function X(e, t, n) {
        var o, i, r = 0,
            a = X.prefilters.length,
            s = he.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = ct || z(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, r = 1 - o, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ct || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var o = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(o), o
                },
                stop: function(t) {
                    var n = 0,
                        o = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < o; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (U(u, c.opts.specialEasing); r < a; r++)
            if (o = X.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(o.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(o.stop, o)), o;
        return he.map(u, W, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function Y(e) {
        return (e.match(Ae) || []).join(" ")
    }

    function _(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function G(e, t, n, o) {
        var i;
        if (Array.isArray(t)) he.each(t, function(t, i) {
            n || wt.test(e) ? o(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
        });
        else if (n || "object" !== he.type(t)) o(e, t);
        else
            for (i in t) G(e + "[" + i + "]", t[i], n, o)
    }

    function Z(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o, i = 0,
                r = t.toLowerCase().match(Ae) || [];
            if (he.isFunction(n))
                for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }

    function Q(e, t, n, o) {
        function i(s) {
            var l;
            return r[s] = !0, he.each(e[s] || [], function(e, s) {
                var c = s(t, n, o);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), l
        }
        var r = {},
            a = e === Lt;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }

    function K(e, t) {
        var n, o, i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && he.extend(!0, e, o), e
    }

    function J(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (i in s)
                if (s[i] && s[i].test(o)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    r = i;
                    break
                }
                a || (a = i)
            }
            r = r || a
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function ee(e, t, n, o) {
        var i, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (i in c)
                    if (s = i.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0], u.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        oe = Object.getPrototypeOf,
        ie = te.slice,
        re = te.concat,
        ae = te.push,
        se = te.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        fe = ue.toString,
        de = fe.call(Object),
        pe = {},
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        ve = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: "3.2.1",
        constructor: he,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: te.sort,
        splice: te.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, o, i, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], o = e[t], a !== o && (c && o && (he.isPlainObject(o) || (i = Array.isArray(o))) ? (i ? (i = !1, r = n && Array.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, r, o)) : void 0 !== o && (a[t] = o));
        return a
    }, he.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ce.call(e)) && (!(t = oe(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && fe.call(n) === de)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ve)
        },
        each: function(e, t) {
            var n, i = 0;
            if (o(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n; o++) e[i++] = t[o];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, a = !n; i < r; i++) !t(e[i], i) !== a && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var i, r, a = 0,
                s = [];
            if (o(e))
                for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, o, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return o = ie.call(arguments, 2), i = function() {
                return e.apply(t || this, o.concat(ie.call(arguments)))
            }, i.guid = e.guid = e.guid || he.guid++, i
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = te[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, n, o) {
            var i, r, a, s, l, u, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!o && ((t ? t.ownerDocument || t : B) !== O && D(t), t = t || O, N)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && q(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n
                    }
                if (b.qsa && !V[e + " "] && (!j || !j.test(e))) {
                    if (1 !== h) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = F), u = T(e), r = u.length; r--;) u[r] = "#" + s + " " + f(u[r]);
                        d = u.join(","), p = ge.test(e) && c(t.parentNode) || t
                    }
                    if (d) try {
                        return Z.apply(n, p.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        s === F && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(re, "$1"), t, n, o)
        }

        function n() {
            function e(n, o) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
            var t = [];
            return e
        }

        function o(e) {
            return e[F] = !0, e
        }

        function i(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) w.attrHandle[n[o]] = t
        }

        function a(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return o(function(t) {
                return t = +t, o(function(n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function f(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o
        }

        function d(e, t, n) {
            var o = t.dir,
                i = t.next,
                r = i || o,
                a = n && "parentNode" === r,
                s = z++;
            return t.first ? function(t, n, i) {
                for (; t = t[o];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var c, u, f, d = [P, s];
                if (l) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || a)
                            if (f = t[F] || (t[F] = {}), u = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[o] || t;
                            else {
                                if ((c = u[r]) && c[0] === P && c[1] === s) return d[2] = c[2];
                                if (u[r] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, o) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, o)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, o) {
            for (var i = 0, r = n.length; i < r; i++) t(e, n[i], o);
            return o
        }

        function v(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, o, i) || (a.push(r), c && t.push(s)));
            return a
        }

        function g(e, t, n, i, r, a) {
            return i && !i[F] && (i = g(i)), r && !r[F] && (r = g(r, a)), o(function(o, a, s, l) {
                var c, u, f, d = [],
                    p = [],
                    g = a.length,
                    m = o || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? m : v(m, d, e, s, l),
                    x = n ? r || (o ? e : g || i) ? [] : a : y;
                if (n && n(y, x, s, l), i)
                    for (c = v(x, p), i(c, [], s, l), u = c.length; u--;)(f = c[u]) && (x[p[u]] = !(y[p[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = x.length; u--;)(f = x[u]) && c.push(y[u] = f);
                            r(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(f = x[u]) && (c = r ? K(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
                    }
                } else x = v(x === a ? x.splice(g, x.length) : x), r ? r(null, a, x, l) : Z.apply(a, x)
            })
        }

        function m(e) {
            for (var t, n, o, i = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = d(function(e) {
                    return e === t
                }, a, !0), c = d(function(e) {
                    return K(t, e) > -1
                }, a, !0), u = [function(e, n, o) {
                    var i = !r && (o || n !== E) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
                    return t = null, i
                }]; s < i; s++)
                if (n = w.relative[e[s].type]) u = [d(p(u), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                        for (o = ++s; o < i && !w.relative[e[o].type]; o++);
                        return g(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), n, s < o && m(e.slice(s, o)), o < i && m(e = e.slice(o)), o < i && f(e))
                    }
                    u.push(n)
                }
            return p(u)
        }

        function y(e, n) {
            var i = n.length > 0,
                r = e.length > 0,
                a = function(o, a, s, l, c) {
                    var u, f, d, p = 0,
                        h = "0",
                        g = o && [],
                        m = [],
                        y = E,
                        x = o || r && w.find.TAG("*", c),
                        b = P += null == y ? 1 : Math.random() || .1,
                        S = x.length;
                    for (c && (E = a === O || a || c); h !== S && null != (u = x[h]); h++) {
                        if (r && u) {
                            for (f = 0, a || u.ownerDocument === O || (D(u), s = !N); d = e[f++];)
                                if (d(u, a || O, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (P = b)
                        }
                        i && ((u = !d && u) && p--, o && g.push(u))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(g, m, a, s);
                        if (o) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = _.call(l));
                            m = v(m)
                        }
                        Z.apply(l, m), c && !o && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (P = b, E = y), g
                };
            return i ? o(a) : a
        }
        var x, b, w, S, C, T, k, A, E, L, I, D, O, H, N, j, M, R, q, F = "sizzle" + 1 * new Date,
            B = e.document,
            P = 0,
            z = 0,
            $ = n(),
            W = n(),
            V = n(),
            U = function(e, t) {
                return e === t && (I = !0), 0
            },
            X = {}.hasOwnProperty,
            Y = [],
            _ = Y.pop,
            G = Y.push,
            Z = Y.push,
            Q = Y.slice,
            K = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(oe),
            ue = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var o = "0x" + t - 65536;
                return o !== o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                D()
            },
            Se = d(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Z.apply(Y = Q.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Y.length ? function(e, t) {
                    G.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function(e) {
            var t, n, o = e ? e.ownerDocument || e : B;
            return o !== O && 9 === o.nodeType && o.documentElement ? (O = o, H = O.documentElement, N = !C(O), B !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(O.getElementsByClassName), b.getById = i(function(e) {
                return H.appendChild(e).id = F, !O.getElementsByName || !O.getElementsByName(F).length
            }), b.getById ? (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n, o, i, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (i = t.getElementsByName(e), o = 0; r = i[o++];)
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, o = [],
                    i = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && N) return t.getElementsByClassName(e)
            }, M = [], j = [], (b.qsa = he.test(O.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (b.matchesSelector = he.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), M.push("!=", oe)
            }), j = j.length && new RegExp(j.join("|")), M = M.length && new RegExp(M.join("|")), t = he.test(H.compareDocumentPosition), q = t || he.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return I = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === B && q(B, e) ? -1 : t === O || t.ownerDocument === B && q(B, t) ? 1 : L ? K(L, e) - K(L, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return I = !0, 0;
                var n, o = 0,
                    i = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !r) return e === O ? -1 : t === O ? 1 : i ? -1 : r ? 1 : L ? K(L, e) - K(L, t) : 0;
                if (i === r) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[o] === l[o];) o++;
                return o ? a(s[o], l[o]) : s[o] === B ? -1 : l[o] === B ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && D(e), n = n.replace(le, "='$1']"), b.matchesSelector && N && !V[n + " "] && (!M || !M.test(n)) && (!j || !j.test(n))) try {
                var o = R.call(e, n);
                if (o || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
            } catch (e) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && D(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && D(e);
            var n = w.attrHandle[t.toLowerCase()],
                o = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== o ? o : b.attributes || !N ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, t.escape = function(e) {
            return (e + "").replace(xe, be)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                o = 0,
                i = 0;
            if (I = !b.detectDuplicates, L = !b.sortStable && e.slice(0), e.sort(U), I) {
                for (; t = e[i++];) t === e[i] && (o = n.push(i));
                for (; o--;) e.splice(n[o], 1)
            }
            return L = null, e
        }, S = t.getText = function(e) {
            var t, n = "",
                o = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[o++];) n += S(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: fe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, o) {
                    return function(i) {
                        var r = t.attr(i, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(ie, " ") + " ").indexOf(o) > -1 : "|=" === n && (r === o || r.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === o && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, f, d, p, h, v = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            x = !1;
                        if (g) {
                            if (r) {
                                for (; v;) {
                                    for (d = t; d = d[v];)
                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (d = g, f = d[F] || (d[F] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[v] || (x = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++x && d === t) {
                                        u[e] = [P, p, x];
                                        break
                                    }
                            } else if (y && (d = t, f = d[F] || (d[F] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p), !1 === x)
                                for (;
                                    (d = ++p && d && d[v] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[F] || (d[F] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), u[e] = [P, x]), d !== t)););
                            return (x -= i) === o || x % o == 0 && x / o >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[F] ? r(n) : r.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, t) {
                        for (var o, i = r(e, n), a = i.length; a--;) o = K(e, i[a]), e[o] = !(t[o] = i[a])
                    }) : function(e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(re, "$1"));
                    return i[F] ? o(function(e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, o, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: o(function(e) {
                    return e = e.replace(me, ye),
                        function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: o(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; --o >= 0;) e.push(o);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, T = t.tokenize = function(e, n) {
            var o, i, r, a, s, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                o && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])), o = !1, (i = se.exec(s)) && (o = i.shift(), r.push({
                    value: o,
                    type: i[0].replace(re, " ")
                }), s = s.slice(o.length));
                for (a in w.filter) !(i = fe[a].exec(s)) || c[a] && !(i = c[a](i)) || (o = i.shift(), r.push({
                    value: o,
                    type: a,
                    matches: i
                }), s = s.slice(o.length));
                if (!o) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, o = [],
                i = [],
                r = V[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = m(t[n]), r[F] ? o.push(r) : i.push(r);
                r = V(e, y(i, o)), r.selector = e
            }
            return r
        }, A = t.select = function(e, t, n, o) {
            var i, r, a, s, l, u = "function" == typeof e && e,
                d = !o && T(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && N && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (o = l(a.matches[0].replace(me, ye), ge.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(i, 1), !(e = o.length && f(r))) return Z.apply(n, o), n;
                        break
                    }
            }
            return (u || k(e, d))(o, t, !N, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = F.split("").sort(U).join("") === F, b.detectDuplicates = !!I, D(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(J, function(e, t, n) {
            var o;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), t
    }(e);
    he.find = ge, he.expr = ge.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ge.uniqueSort, he.text = ge.getText, he.isXMLDoc = ge.isXML, he.contains = ge.contains, he.escapeSelector = ge.escape;
    var me = function(e, t, n) {
            for (var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    o.push(e)
                }
            return o
        },
        ye = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        xe = he.expr.match.needsContext,
        be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        we = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? he.find.matchesSelector(o, e) ? [o] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t, n, o = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < o; t++) he.find(e, i[t], n);
            return o > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Se, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || Se, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), be.test(o[1]) && he.isPlainObject(t))
                    for (o in t) he.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return i = ne.getElementById(o[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Se = he(ne);
    var Te = /^(?:parents|prev(?:Until|All))/,
        ke = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, o = 0,
                i = this.length,
                r = [],
                a = "string" != typeof e && he(e);
            if (!xe.test(e))
                for (; o < i; o++)
                    for (n = this[o]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return me(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return me(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return me(e, "nextSibling")
        },
        prevAll: function(e) {
            return me(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return me(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return me(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ye((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ye(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function(e, t) {
        he.fn[e] = function(n, o) {
            var i = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = he.filter(o, i)), this.length > 1 && (ke[e] || he.uniqueSort(i), Te.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, o, i, r = [],
            a = [],
            l = -1,
            c = function() {
                for (i = i || e.once, o = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, i && (r = n ? [] : "")
            },
            u = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1, a.push(n)), function t(n) {
                        he.each(n, function(n, o) {
                            he.isFunction(o) ? e.unique && u.has(o) || r.push(o) : o && o.length && "string" !== he.type(o) && t(o)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? he.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return i = a = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return i = a = [], n || t || (r = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return u
    }, he.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                i = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, o) {
                                var i = he.isFunction(e[o[4]]) && e[o[4]];
                                r[o[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, o, i) {
                        function r(t, n, o, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = o.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, r(a, n, l, i), r(a, n, c, i)) : (a++, f.call(e, r(a, n, l, i), r(a, n, c, i), r(a, n, l, n.notifyWith))) : (o !== l && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    d = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (o !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return he.Deferred(function(e) {
                            n[0][3].add(r(0, e, he.isFunction(i) ? i : l, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : l)), n[2][3].add(r(0, e, he.isFunction(o) ? o : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, i) : i
                    }
                },
                r = {};
            return he.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    o = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                o = Array(n),
                i = ie.call(arguments),
                r = he.Deferred(),
                a = function(e) {
                    return function(n) {
                        o[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(o, i)
                    }
                };
            if (t <= 1 && (u(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(i[n] && i[n].then))) return r.then();
            for (; n--;) u(i[n], a(n), r.reject);
            return r.promise()
        }
    });
    var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ee.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Le = he.Deferred();
    he.fn.ready = function(e) {
        return Le.then(e).catch(function(e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Le.resolveWith(ne, [he]))
        }
    }), he.ready.then = Le.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(he.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Ie = function(e, t, n, o, i, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === he.type(n)) {
                i = !0;
                for (s in n) Ie(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== o && (i = !0, he.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(he(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        De = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n;
            else
                for (o in t) i[he.camelCase(o)] = t[o];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in o ? [t] : t.match(Ae) || []), n = t.length;
                    for (; n--;) delete o[t[n]]
                }(void 0 === t || he.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Oe = new d,
        He = new d,
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return He.hasData(e) || Oe.hasData(e)
        },
        data: function(e, t, n) {
            return He.access(e, t, n)
        },
        removeData: function(e, t) {
            He.remove(e, t)
        },
        _data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Oe.remove(e, t)
        }
    }), he.fn.extend({
        data: function(e, t) {
            var n, o, i, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = He.get(r), 1 === r.nodeType && !Oe.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = he.camelCase(o.slice(5)), h(r, o, i[o])));
                    Oe.set(r, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                He.set(this, e)
            }) : Ie(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = He.get(r, e))) return n;
                    if (void 0 !== (n = h(r, e))) return n
                } else this.each(function() {
                    He.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e)
            })
        }
    }), he.extend({
        queue: function(e, t, n) {
            var o;
            if (e) return t = (t || "fx") + "queue", o = Oe.get(e, t), n && (!o || Array.isArray(n) ? o = Oe.access(e, t, he.makeArray(n)) : o.push(n)), o || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = he._queueHooks(e, t),
                a = function() {
                    he.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, a, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Oe.get(e, n) || Oe.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Oe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, o = 1,
                i = he.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Oe.get(r[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        Be = function(e, t, n, o) {
            var i, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            i = n.apply(e, o || []);
            for (r in t) e.style[r] = a[r];
            return i
        },
        Pe = {};
    he.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        $e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ue = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Xe = ne.documentElement,
        Ye = /^key/,
        _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r, a, s, l, c, u, f, d, p, h, v, g = Oe.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, i = r.selector), i && he.find.matchesSelector(Xe, i), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ae) || [""], c = t.length; c--;) s = Ge.exec(t[c]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, u = he.extend({
                    type: p,
                    origType: v,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && he.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, o, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), he.event.global[p] = !0)
        },
        remove: function(e, t, n, o, i) {
            var r, a, s, l, c, u, f, d, p, h, v, g = Oe.hasData(e) && Oe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(Ae) || [""], c = t.length; c--;)
                    if (s = Ge.exec(t[c]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = he.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) u = d[r], !i && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || he.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) he.event.remove(e, p + t[c], n, o, !0);
                he.isEmptyObject(l) && Oe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, o, i, r, a, s = he.event.fix(e),
                l = new Array(arguments.length),
                c = (Oe.get(this, "events") || {})[s.type] || [],
                u = he.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, c), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (o = ((he.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) o = t[n], i = o.selector + " ", void 0 === a[i] && (a[i] = o.needsContext ? he(i, this).index(c) > -1 : he.find(i, this, null, [c]).length), a[i] && r.push(o);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function(e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, o = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === o || he.contains(o, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function(e, t, n, o) {
            return T(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return T(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, he(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<script|<style|<link/i,
        Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ke = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var o, i, r, a, s = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = y(s), r = y(e), o = 0, i = r.length; o < i; o++) I(r[o], a[o]);
            if (t)
                if (n)
                    for (r = r || y(e), a = a || y(s), o = 0, i = r.length; o < i; o++) L(r[o], a[o]);
                else L(e, s);
            return a = y(s, "script"), a.length > 0 && x(a, !l && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, o, i = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (De(n)) {
                    if (t = n[Oe.expando]) {
                        if (t.events)
                            for (o in t.events) i[o] ? he.event.remove(n, o) : he.removeEvent(n, o, t.handle);
                        n[Oe.expando] = void 0
                    }
                    n[He.expando] && (n[He.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) {
            return O(this, e, !0)
        },
        remove: function(e) {
            return O(this, e)
        },
        text: function(e) {
            return Ie(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ie(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ve[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, o = [], i = he(e), r = i.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), he(i[a])[t](n), ae.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var et = /^margin/,
        tt = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
        nt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Xe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, o = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Xe.removeChild(a), s = null
            }
        }
        var n, o, i, r, a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), o
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), r
            }
        }))
    }();
    var ot = /^(none|table(?!-c[ea]).+)/,
        it = /^--/,
        rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        at = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        st = ["Webkit", "Moz", "ms"],
        lt = ne.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = H(e, "opacity");
                        return "" === n ? "1" : n
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
            float: "cssFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = he.camelCase(t),
                    l = it.test(t),
                    c = e.style;
                if (l || (t = M(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : c[t];
                r = typeof n, "string" === r && (i = Re.exec(n)) && i[1] && (n = v(e, t, i), r = "number"), null != n && n === n && ("number" === r && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, o) {
            var i, r, a, s = he.camelCase(t);
            return it.test(t) || (t = M(s)), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = H(e, t, o)), "normal" === i && t in at && (i = at[t]), "" === n || n ? (r = parseFloat(i), !0 === n || isFinite(r) ? r || 0 : i) : i
        }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, o) {
                if (n) return !ot.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, o) : Be(e, rt, function() {
                    return F(e, t, o)
                })
            },
            set: function(e, n, o) {
                var i, r = o && nt(e),
                    a = o && q(e, t, o, "border-box" === he.css(e, "boxSizing", !1, r), r);
                return a && (i = Re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), R(e, n, a)
            }
        }
    }), he.cssHooks.marginLeft = N(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) i[e + qe[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, et.test(e) || (he.cssHooks[e + t].set = R)
    }), he.fn.extend({
        css: function(e, t) {
            return Ie(this, function(e, t, n) {
                var o, i, r = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (o = nt(e), i = t.length; a < i; a++) r[t[a]] = he.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = B.prototype.init, he.fx.step = {};
    var ct, ut, ft = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;
    he.Animation = he.extend(X, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return v(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, o = 0, i = e.length; o < i; o++) n = e[o], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
            },
            prefilters: [V],
            prefilter: function(e, t) {
                t ? X.prefilters.unshift(e) : X.prefilters.push(e)
            }
        }), he.speed = function(e, t, n) {
            var o = e && "object" == typeof e ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in he.fx.speeds ? o.duration = he.fx.speeds[o.duration] : o.duration = he.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                he.isFunction(o.old) && o.old.call(this), o.queue && he.dequeue(this, o.queue)
            }, o
        }, he.fn.extend({
            fadeTo: function(e, t, n, o) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, o)
            },
            animate: function(e, t, n, o) {
                var i = he.isEmptyObject(e),
                    r = he.speed(t, n, o),
                    a = function() {
                        var t = X(this, he.extend({}, e), r);
                        (i || Oe.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, t, n) {
                var o = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        r = he.timers,
                        a = Oe.get(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && dt.test(i) && o(a[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Oe.get(this),
                        o = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        r = he.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, o, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, o, i)
            }
        }), he.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, n, o) {
                return this.animate(t, e, n, o)
            }
        }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (ct = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), ct = void 0
        }, he.fx.timer = function(e) {
            he.timers.push(e), he.fx.start()
        }, he.fx.interval = 13, he.fx.start = function() {
            ut || (ut = !0, P())
        }, he.fx.stop = function() {
            ut = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, o) {
                var i = e.setTimeout(n, t);
                o.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var pt, ht = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Ie(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = he.find.attr(e, t), null == o ? void 0 : o))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o = 0,
                i = t && t.match(Ae);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || he.find.attr;
        ht[t] = function(e, t, o) {
            var i, r, a = t.toLowerCase();
            return o || (r = ht[a], ht[a] = i, i = null != n(e, t, o) ? a : null, ht[a] = r), i
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Ie(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function(e) {
            var t, n, o, i, r, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, _(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (i = _(n), o = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (a = 0; r = t[a++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        s = Y(o), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, o, i, r, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, _(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (i = _(n), o = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (a = 0; r = t[a++];)
                            for (; o.indexOf(" " + r + " ") > -1;) o = o.replace(" " + r + " ", " ");
                        s = Y(o), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, _(this), t), t)
            }) : this.each(function() {
                var t, o, i, r;
                if ("string" === n)
                    for (o = 0, i = he(this), r = e.match(Ae) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = _(this), t && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Oe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
                if (1 === n.nodeType && (" " + Y(_(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    he.fn.extend({
        val: function(e) {
            var t, n, o, i = this[0]; {
                if (arguments.length) return o = he.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = o ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
            }
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : Y(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, o, r = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        c = s ? a + 1 : r.length;
                    for (o = a < 0 ? c : s ? a : 0; o < c; o++)
                        if (n = r[o], (n.selected || o === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = he.makeArray(t), a = i.length; a--;) o = i[a], (o.selected = he.inArray(he.valHooks.option.get(o), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, o, i) {
            var r, a, s, l, c, u, f, d = [o || ne],
                p = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = o = o || ne, 3 !== o.nodeType && 8 !== o.nodeType && !mt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!i && !f.noBubble && !he.isWindow(o)) {
                    for (l = f.delegateType || p, mt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (o.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = d[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : f.bindType || p, u = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && De(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !De(o) || c && he.isFunction(o[p]) && !he.isWindow(o) && (s = o[c], s && (o[c] = null), he.event.triggered = p, o[p](), he.event.triggered = void 0, s && (o[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var o = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(o, null, t)
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var o = this.ownerDocument || this,
                    i = Oe.access(o, t);
                i || o.addEventListener(e, n, !0), Oe.access(o, t, (i || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this,
                    i = Oe.access(o, t) - 1;
                i ? Oe.access(o, t, i) : (o.removeEventListener(e, n, !0), Oe.remove(o, t))
            }
        }
    });
    var yt = e.location,
        xt = he.now(),
        bt = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var wt = /\[\]$/,
        St = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, o = [],
            i = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) G(n, e[n], t, i);
        return o.join("&")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    });
    var Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        At = /^(?:GET|HEAD)$/,
        Et = {},
        Lt = {},
        It = "*/".concat("*"),
        Dt = ne.createElement("a");
    Dt.href = yt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: kt.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
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
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e)
        },
        ajaxPrefilter: Z(Et),
        ajaxTransport: Z(Lt),
        ajax: function(t, n) {
            function o(t, n, o, s) {
                var c, d, p, b, w, S = n;
                u || (u = !0, l && e.clearTimeout(l), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, o && (b = J(h, C, o)), b = ee(h, b, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (he.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (he.etag[r] = w)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, d = b.data, p = b.error, c = !p)) : (p = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || S) + "", c ? m.resolveWith(v, [d, S, C]) : m.rejectWith(v, [C, S, p]), C.statusCode(x), x = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]), y.fireWith(v, [C, S]), f && (g.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, r, a, s, l, c, u, f, d, p, h = he.ajaxSetup({}, n),
                v = h.context || h,
                g = h.context && (v.nodeType || v.jquery) ? he(v) : he.event,
                m = he.Deferred(),
                y = he.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                S = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Tt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return i && i.abort(t), o(0, t), this
                    }
                };
            if (m.promise(C), h.url = ((t || h.url || yt.href) + "").replace(/^\/\//, yt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
                c = ne.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Dt.protocol + "//" + Dt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Et, h, n, C), u) return C;
            f = he.event && h.global, f && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !At.test(h.type), r = h.url.replace(/#.*$/, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(/%20/g, "+")) : (p = h.url.slice(r.length), h.data && (r += (bt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(/([?&])_=[^&]*/, "$1"), p = (bt.test(r) ? "&" : "?") + "_=" + xt++ + p), h.url = r + p), h.ifModified && (he.lastModified[r] && C.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && C.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(v, C, h) || u)) return C.abort();
            if (S = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Lt, h, n, C)) {
                if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), u) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, i.send(b, o)
                } catch (e) {
                    if (u) throw e;
                    o(-1, e)
                }
            } else o(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, t) {
        he[t] = function(e, n, o, i) {
            return he.isFunction(n) && (i = i || o, o = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ot = {
            0: 200,
            1223: 204
        },
        Ht = he.ajaxSettings.xhr();
    pe.cors = !!Ht && "withCredentials" in Ht, pe.ajax = Ht = !!Ht, he.ajaxTransport(function(t) {
        var n, o;
        if (pe.cors || Ht && !t.crossDomain) return {
            send: function(i, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = o = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ot[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), o = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && o()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(o, i) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Nt = [],
        jt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || he.expando + "_" + xt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(t, n, o) {
        var i, r, a, s = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(jt, "$1" + i) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || he.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function() {
            a = arguments
        }, o.always(function() {
            void 0 === r ? he(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, Nt.push(i)), a && he.isFunction(r) && r(a[0]), a = r = void 0
        }), "script"
    }), pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var o, i, r;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), o = t.createElement("base"), o.href = ne.location.href, t.head.appendChild(o)) : t = ne), i = be.exec(e), r = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, r), r && r.length && he(r).remove(), he.merge([], i.childNodes))
    }, he.fn.load = function(e, t, n) {
        var o, i, r, a = this,
            s = e.indexOf(" ");
        return s > -1 && (o = Y(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(o ? he("<div>").append(he.parseHTML(e)).find(o) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, a, s, l, c, u = he.css(e, "position"),
                f = he(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = f.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (o = f.position(), a = o.top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, o, i, r = this[0];
            if (r) return r.getClientRects().length ? (o = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: o.top + i.pageYOffset - n.clientTop,
                left: o.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (o = e.offset()), o = {
                    top: o.top + he.css(e[0], "borderTopWidth", !0),
                    left: o.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - o.top - he.css(n, "marginTop", !0),
                    left: t.left - o.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Xe
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(o) {
            return Ie(this, function(e, o, i) {
                var r;
                if (he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === i) return r ? r[t] : e[o];
                r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i
            }, e, o, arguments.length)
        }
    }), he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = N(pe.pixelPosition, function(e, n) {
            if (n) return n = H(e, t), tt.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, o) {
            he.fn[o] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return Ie(this, function(t, n, i) {
                    var r;
                    return he.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function(e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Mt = e.jQuery,
        Rt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Rt), t && e.jQuery === he && (e.jQuery = Mt), he
    }, t || (e.jQuery = e.$ = he), he
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return t(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, t, n, o, i) {
    "use strict";
    var r = "fullpage-wrapper",
        a = "." + r,
        s = "fp-scrollable",
        l = "." + s,
        c = "fp-responsive",
        u = "fp-notransition",
        f = "fp-destroyed",
        d = "fp-enabled",
        p = "fp-viewing",
        h = "active",
        v = "." + h,
        g = "fp-completely",
        m = "." + g,
        y = "fp-section",
        x = "." + y,
        b = x + v,
        w = x + ":first",
        S = x + ":last",
        C = "fp-tableCell",
        T = "." + C,
        k = "fp-nav",
        A = "#" + k,
        E = "fp-tooltip",
        L = "." + E,
        I = "fp-slide",
        D = "." + I,
        O = D + v,
        H = "fp-slides",
        N = "." + H,
        j = "fp-slidesContainer",
        M = "." + j,
        R = "fp-table",
        q = "fp-slidesNav",
        F = "." + q,
        B = F + " a",
        P = "fp-controlArrow",
        z = "." + P,
        $ = "fp-prev",
        W = "." + $,
        V = P + " " + $,
        U = z + W,
        X = "fp-next",
        Y = P + " " + X,
        _ = z + "." + X,
        G = e(t),
        Z = e(n),
        Q = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function(s) {
        function l(t, n) {
            t || Xt(0), Qt("autoScrolling", t, n);
            var o = e(b);
            s.autoScrolling && !s.scrollBar ? (en.css({
                overflow: "hidden",
                height: "100%"
            }), P(An.recordHistory, "internal"), fn.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && Xt(o.position().top)) : (en.css({
                overflow: "visible",
                height: "initial"
            }), P(!1, "internal"), fn.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), o.length && en.scrollTop(o.position().top))
        }

        function P(e, t) {
            Qt("recordHistory", e, t)
        }

        function W(e, t) {
            Qt("scrollingSpeed", e, t)
        }

        function X(e, t) {
            Qt("fitToSection", e, t)
        }

        function J(e) {
            s.lockAnchors = e
        }

        function ee(e) {
            e ? (Bt(), Pt()) : (Ft(), zt())
        }

        function te(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                _t(t, n, "m")
            })) : t ? (ee(!0), $t()) : (ee(!1), Wt())
        }

        function ne(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                _t(t, n, "k")
            })) : s.keyboardScrolling = t
        }

        function oe() {
            var t = e(b).prev(x);
            t.length || !s.loopTop && !s.continuousVertical || (t = e(x).last()), t.length && Pe(t, null, !0)
        }

        function ie() {
            var t = e(b).next(x);
            t.length || !s.loopBottom && !s.continuousVertical || (t = e(x).first()), t.length && Pe(t, null, !1)
        }

        function re(e, t) {
            W(0, "internal"), ae(e, t), W(An.scrollingSpeed, "internal")
        }

        function ae(e, t) {
            var n = Lt(e);
            void 0 !== t ? Dt(e, t) : n.length > 0 && Pe(n)
        }

        function se(e) {
            qe("right", e)
        }

        function le(e) {
            qe("left", e)
        }

        function ce(t) {
            if (!fn.hasClass(f)) {
                pn = !0, dn = G.height(), e(x).each(function() {
                    var t = e(this).find(N),
                        n = e(this).find(D);
                    s.verticalCentered && e(this).find(T).css("height", At(e(this)) + "px"), e(this).css("height", dn + "px"), s.scrollOverflow && (n.length ? n.each(function() {
                        Tt(e(this))
                    }) : Tt(e(this))), n.length > 1 && ft(t, t.find(O))
                });
                var n = e(b),
                    o = n.index(x);
                o && re(o + 1), pn = !1, e.isFunction(s.afterResize) && t && s.afterResize.call(fn), e.isFunction(s.afterReBuild) && !t && s.afterReBuild.call(fn)
            }
        }

        function ue(t) {
            var n = tn.hasClass(c);
            t ? n || (l(!1, "internal"), X(!1, "internal"), e(A).hide(), tn.addClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(fn, t)) : n && (l(An.autoScrolling, "internal"), X(An.autoScrolling, "internal"), e(A).show(), tn.removeClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(fn, t))
        }

        function fe() {
            var t = fn.find(s.sectionSelector);
            s.anchors.length || (s.anchors = t.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), s.navigationTooltips.length || (s.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function de() {
            fn.css({
                height: "100%",
                position: "relative"
            }), fn.addClass(r), e("html").addClass(d), dn = G.height(), fn.removeClass(f), ge(), e(x).each(function(t) {
                var n = e(this),
                    o = n.find(D),
                    i = o.length;
                he(n, t), ve(n, t), i > 0 ? pe(n, o, i) : s.verticalCentered && kt(n)
            }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(tn), s.navigation && ye(), be(), s.scrollOverflow ? ("complete" === n.readyState && xe(), G.on("load", xe)) : Ce()
        }

        function pe(t, n, o) {
            var i = 100 * o,
                r = 100 / o;
            n.wrapAll('<div class="' + j + '" />'), n.parent().wrap('<div class="' + H + '" />'), t.find(M).css("width", i + "%"), o > 1 && (s.controlArrows && me(t), s.slidesNavigation && Ht(t, o)), n.each(function(t) {
                e(this).css("width", r + "%"), s.verticalCentered && kt(e(this))
            });
            var a = t.find(O);
            a.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== a.index()) ? Ut(a, "internal") : n.eq(0).addClass(h)
        }

        function he(t, n) {
            n || 0 !== e(b).length || t.addClass(h), sn = e(b), t.css("height", dn + "px"), s.paddingTop && t.css("padding-top", s.paddingTop), s.paddingBottom && t.css("padding-bottom", s.paddingBottom), void 0 !== s.sectionsColor[n] && t.css("background-color", s.sectionsColor[n]), void 0 !== s.anchors[n] && t.attr("data-anchor", s.anchors[n])
        }

        function ve(t, n) {
            void 0 !== s.anchors[n] && t.hasClass(h) && wt(s.anchors[n], n), s.menu && s.css3 && e(s.menu).closest(a).length && e(s.menu).appendTo(tn)
        }

        function ge() {
            fn.find(s.sectionSelector).addClass(y), fn.find(s.slideSelector).addClass(I)
        }

        function me(e) {
            e.find(N).after('<div class="' + V + '"></div><div class="' + Y + '"></div>'), "#fff" != s.controlArrowColor && (e.find(_).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(U).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(U).hide()
        }

        function ye() {
            tn.append('<div id="' + k + '"><ul></ul></div>');
            var t = e(A);
            t.addClass(function() {
                return s.showActiveTooltip ? "fp-show-active " + s.navigationPosition : s.navigationPosition
            });
            for (var n = 0; n < e(x).length; n++) {
                var o = "";
                s.anchors.length && (o = s.anchors[n]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    r = s.navigationTooltips[n];
                void 0 !== r && "" !== r && (i += '<div class="' + E + " " + s.navigationPosition + '">' + r + "</div>"), i += "</li>", t.find("ul").append(i)
            }
            e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(b).index(x)).find("a").addClass(h)
        }

        function xe() {
            e(x).each(function() {
                var t = e(this).find(D);
                t.length ? t.each(function() {
                    Tt(e(this))
                }) : Tt(e(this))
            }), Ce()
        }

        function be() {
            fn.find('iframe[src*="youtube.com/embed/"]').each(function() {
                we(e(this), "enablejsapi=1")
            })
        }

        function we(e, t) {
            var n = e.attr("src");
            e.attr("src", n + Se(n) + t)
        }

        function Se(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Ce() {
            var t = e(b);
            t.addClass(g), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(t), Ye(t), _e(t), s.scrollOverflowHandler.afterLoad(), Te() && e.isFunction(s.afterLoad) && s.afterLoad.call(t, t.data("anchor"), t.index(x) + 1), e.isFunction(s.afterRender) && s.afterRender.call(fn)
        }

        function Te() {
            var e = t.location.hash.replace("#", "").split("/"),
                n = Lt(decodeURIComponent(e[0]));
            return !n.length || n.length && n.index() === sn.index()
        }

        function ke() {
            var t;
            if (!s.autoScrolling || s.scrollBar) {
                var o = G.scrollTop(),
                    i = Le(o),
                    r = 0,
                    a = o + G.height() / 2,
                    l = tn.height() - G.height() === o,
                    c = n.querySelectorAll(x);
                if (l) r = c.length - 1;
                else if (o)
                    for (var u = 0; u < c.length; ++u) {
                        var f = c[u];
                        f.offsetTop <= a && (r = u)
                    } else r = 0;
                if (Ee(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), t = e(c).eq(r), !t.hasClass(h)) {
                    En = !0;
                    var d, p, v = e(b),
                        m = v.index(x) + 1,
                        y = St(t),
                        w = t.data("anchor"),
                        S = t.index(x) + 1,
                        C = t.find(O);
                    C.length && (p = C.data("anchor"), d = C.index()), vn && (t.addClass(h).siblings().removeClass(h), e.isFunction(s.onLeave) && s.onLeave.call(v, m, S, y), e.isFunction(s.afterLoad) && s.afterLoad.call(t, w, S), Ze(v), Ye(t), _e(t), wt(w, S - 1), s.anchors.length && (on = w), Nt(d, p, w, S)), clearTimeout(wn), wn = setTimeout(function() {
                        En = !1
                    }, 100)
                }
                s.fitToSection && (clearTimeout(Sn), Sn = setTimeout(function() {
                    s.fitToSection && Ae()
                }, s.fitToSectionDelay))
            }
        }

        function Ae() {
            vn && (pn = !0, Pe(e(b)), pn = !1)
        }

        function Ee(t) {
            var n = e(b).position().top,
                o = n + G.height();
            return "up" == t ? o >= G.scrollTop() + G.height() : n <= G.scrollTop()
        }

        function Le(e) {
            var t = e > Ln ? "down" : "up";
            return Ln = e, jn = e, t
        }

        function Ie(e, t) {
            if (mn.m[e]) {
                var n = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ie : oe;
                if (t.length > 0) {
                    if (!s.scrollOverflowHandler.isScrolled(n, t)) return !0;
                    o()
                } else o()
            }
        }

        function De(e) {
            var t = e.originalEvent;
            !He(e.target) && s.autoScrolling && Ne(t) && e.preventDefault()
        }

        function Oe(t) {
            var n = t.originalEvent,
                i = e(n.target).closest(x);
            if (!He(t.target) && Ne(n)) {
                s.autoScrolling && t.preventDefault();
                var r = s.scrollOverflowHandler.scrollable(i),
                    a = Vt(n);
                On = a.y, Hn = a.x, i.find(N).length && o.abs(Dn - Hn) > o.abs(In - On) ? !ln && o.abs(Dn - Hn) > G.outerWidth() / 100 * s.touchSensitivity && (Dn > Hn ? mn.m.right && se(i) : mn.m.left && le(i)) : s.autoScrolling && vn && o.abs(In - On) > G.height() / 100 * s.touchSensitivity && (In > On ? Ie("down", r) : On > In && Ie("up", r))
            }
        }

        function He(t, n) {
            n = n || 0;
            var o = e(t).parent();
            return !!(n < s.normalScrollElementTouchThreshold && o.is(s.normalScrollElements)) || n != s.normalScrollElementTouchThreshold && He(o, ++n)
        }

        function Ne(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function je(e) {
            var t = e.originalEvent;
            if (s.fitToSection && en.stop(), Ne(t)) {
                var n = Vt(t);
                In = n.y, Dn = n.x
            }
        }

        function Me(e, t) {
            for (var n = 0, i = e.slice(o.max(e.length - t, 1)), r = 0; r < i.length; r++) n += i[r];
            return o.ceil(n / t)
        }

        function Re(n) {
            var i = (new Date).getTime(),
                r = e(m).hasClass("fp-normal-scroll");
            if (s.autoScrolling && !an && !r) {
                n = n || t.event;
                var a = n.wheelDelta || -n.deltaY || -n.detail,
                    l = o.max(-1, o.min(1, a)),
                    c = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                    u = o.abs(n.wheelDeltaX) < o.abs(n.wheelDelta) || o.abs(n.deltaX) < o.abs(n.deltaY) || !c;
                gn.length > 149 && gn.shift(), gn.push(o.abs(a)), s.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var f = e(b),
                    d = s.scrollOverflowHandler.scrollable(f),
                    p = i - Nn;
                return Nn = i, p > 200 && (gn = []), vn && Me(gn, 10) >= Me(gn, 70) && u && (0 > l ? Ie("down", d) : Ie("up", d)), !1
            }
            s.fitToSection && en.stop()
        }

        function qe(t, n) {
            var o = void 0 === n ? e(b) : n,
                i = o.find(N),
                r = i.find(D).length;
            if (!(!i.length || ln || 2 > r)) {
                var a = i.find(O),
                    l = null;
                if (l = "left" === t ? a.prev(D) : a.next(D), !l.length) {
                    if (!s.loopHorizontal) return;
                    l = "left" === t ? a.siblings(":last") : a.siblings(":first")
                }
                ln = !0, ft(i, l, t)
            }
        }

        function Fe() {
            e(O).each(function() {
                Ut(e(this), "internal")
            })
        }

        function Be(e) {
            var t = e.position(),
                n = t.top,
                o = t.top > jn,
                i = n - dn + e.outerHeight(),
                r = s.bigSectionsDestination;
            return e.outerHeight() > dn ? (!o && !r || "bottom" === r) && (n = i) : (o || pn && e.is(":last-child")) && (n = i), jn = n, n
        }

        function Pe(t, n, o) {
            if (void 0 !== t) {
                var i, r, a = Be(t),
                    l = {
                        element: t,
                        callback: n,
                        isMovementUp: o,
                        dtop: a,
                        yMovement: St(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(x),
                        activeSlide: t.find(O),
                        activeSection: e(b),
                        leavingSection: e(b).index(x) + 1,
                        localIsResizing: pn
                    };
                l.activeSection.is(t) && !pn || s.scrollBar && G.scrollTop() === l.dtop && !t.hasClass("fp-auto-height") || (l.activeSlide.length && (i = l.activeSlide.data("anchor"), r = l.activeSlide.index()), s.autoScrolling && s.continuousVertical && void 0 !== l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = We(l)), (!e.isFunction(s.onLeave) || l.localIsResizing || !1 !== s.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement)) && (l.localIsResizing || Ze(l.activeSection), s.scrollOverflowHandler.beforeLeave(), t.addClass(h).siblings().removeClass(h), Ye(t), s.scrollOverflowHandler.onLeave(), vn = !1, Nt(r, i, l.anchorLink, l.sectionIndex), ze(l), on = l.anchorLink, wt(l.anchorLink, l.sectionIndex)))
            }
        }

        function ze(t) {
            if (s.css3 && s.autoScrolling && !s.scrollBar) Et("translate3d(0px, -" + o.round(t.dtop) + "px, 0px)", !0), s.scrollingSpeed ? (clearTimeout(xn), xn = setTimeout(function() {
                Ue(t)
            }, s.scrollingSpeed)) : Ue(t);
            else {
                var n = $e(t);
                e(n.element).animate(n.options, s.scrollingSpeed, s.easing).promise().done(function() {
                    s.scrollBar ? setTimeout(function() {
                        Ue(t)
                    }, 30) : Ue(t)
                })
            }
        }

        function $e(e) {
            var t = {};
            return s.autoScrolling && !s.scrollBar ? (t.options = {
                top: -e.dtop
            }, t.element = a) : (t.options = {
                scrollTop: e.dtop
            }, t.element = "html, body"), t
        }

        function We(t) {
            return t.isMovementUp ? e(b).before(t.activeSection.nextAll(x)) : e(b).after(t.activeSection.prevAll(x).get().reverse()), Xt(e(b).position().top), Fe(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = St(t.element), t
        }

        function Ve(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(w).before(t.wrapAroundElements) : e(S).after(t.wrapAroundElements), Xt(e(b).position().top), Fe())
        }

        function Ue(t) {
            Ve(t), e.isFunction(s.afterLoad) && !t.localIsResizing && s.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), s.scrollOverflowHandler.afterLoad(), t.localIsResizing || _e(t.element), t.element.addClass(g).siblings().removeClass(g), vn = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function Xe(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t)
        }

        function Ye(t) {
            if (s.lazyLoading) {
                var n;
                Qe(t).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    n = e(this), e.each(["src", "srcset"], function(e, t) {
                        var o = n.attr("data-" + t);
                        void 0 !== o && o && Xe(n, t)
                    }), n.is("source") && n.closest("video").get(0).load()
                })
            }
        }

        function _e(t) {
            var n = Qe(t);
            n.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && Ge(t), t.onload = function() {
                    t.hasAttribute("data-autoplay") && Ge(t)
                }
            })
        }

        function Ge(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function Ze(t) {
            var n = Qe(t);
            n.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function Qe(t) {
            var n = t.find(O);
            return n.length && (t = e(n)), t
        }

        function Ke() {
            var e = t.location.hash.replace("#", "").split("/"),
                n = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            n && (s.animateAnchor ? Dt(n, o) : re(n, o))
        }

        function Je() {
            if (!En && !s.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"),
                    n = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = void 0 === on,
                    r = void 0 === on && void 0 === o && !ln;
                n.length && (n && n !== on && !i || r || !ln && rn != o) && Dt(n, o)
            }
        }

        function et(t) {
            clearTimeout(Cn);
            var n = e(":focus");
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) {
                var o = t.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && t.preventDefault(), an = t.ctrlKey, Cn = setTimeout(function() {
                    ct(t)
                }, 150)
            }
        }

        function tt() {
            e(this).prev().trigger("click")
        }

        function nt(e) {
            hn && (an = e.ctrlKey)
        }

        function ot(e) {
            2 == e.which && (Mn = e.pageY, fn.on("mousemove", ut))
        }

        function it(e) {
            2 == e.which && fn.off("mousemove")
        }

        function rt() {
            var t = e(this).closest(x);
            e(this).hasClass($) ? mn.m.left && le(t) : mn.m.right && se(t)
        }

        function at() {
            hn = !1, an = !1
        }

        function st(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            Pe(e(x).eq(n))
        }

        function lt(t) {
            t.preventDefault();
            var n = e(this).closest(x).find(N);
            ft(n, n.find(D).eq(e(this).closest("li").index()))
        }

        function ct(t) {
            var n = t.shiftKey;
            if (vn || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                case 38:
                case 33:
                    mn.k.up && oe();
                    break;
                case 32:
                    if (n && mn.k.up) {
                        oe();
                        break
                    }
                case 40:
                case 34:
                    mn.k.down && ie();
                    break;
                case 36:
                    mn.k.up && ae(1);
                    break;
                case 35:
                    mn.k.down && ae(e(x).length);
                    break;
                case 37:
                    mn.k.left && le();
                    break;
                case 39:
                    mn.k.right && se();
                    break;
                default:
                    return
            }
        }

        function ut(e) {
            vn && (e.pageY < Mn && mn.m.up ? oe() : e.pageY > Mn && mn.m.down && ie()), Mn = e.pageY
        }

        function ft(t, n, o) {
            var i = t.closest(x),
                r = {
                    slides: t,
                    destiny: n,
                    direction: o,
                    destinyPos: n.position(),
                    slideIndex: n.index(),
                    section: i,
                    sectionIndex: i.index(x),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(F),
                    slideAnchor: Mt(n),
                    prevSlide: i.find(O),
                    prevSlideIndex: i.find(O).index(),
                    localIsResizing: pn
                };
            return r.xMovement = Ct(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (vn = !1), s.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(s.onSlideLeave) && !1 === s.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) ? void(ln = !1) : (n.addClass(h).siblings().removeClass(h), r.localIsResizing || (Ze(r.prevSlide), Ye(n)), !s.loopHorizontal && s.controlArrows && (i.find(U).toggle(0 !== r.slideIndex), i.find(_).toggle(!n.is(":last-child"))), i.hasClass(h) && !r.localIsResizing && Nt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), void pt(t, r, !0))
        }

        function dt(t) {
            ht(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), vn = !0, _e(t.destiny)), ln = !1
        }

        function pt(e, t, n) {
            var i = t.destinyPos;
            if (s.css3) {
                var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                mt(e.find(M)).css(Yt(r)), bn = setTimeout(function() {
                    n && dt(t)
                }, s.scrollingSpeed, s.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, s.scrollingSpeed, s.easing, function() {
                n && dt(t)
            })
        }

        function ht(e, t) {
            e.find(v).removeClass(h), e.find("li").eq(t).find("a").addClass(h)
        }

        function vt() {
            if (gt(), cn) {
                var t = e(n.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var i = G.height();
                    o.abs(i - Rn) > 20 * o.max(Rn, i) / 100 && (ce(!0), Rn = i)
                }
            } else clearTimeout(yn), yn = setTimeout(function() {
                ce(!0)
            }, 350)
        }

        function gt() {
            var e = s.responsive || s.responsiveWidth,
                t = s.responsiveHeight,
                n = e && G.outerWidth() < e,
                o = t && G.height() < t;
            e && t ? ue(n || o) : e ? ue(n) : t && ue(o)
        }

        function mt(e) {
            var t = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
            return e.removeClass(u), e.css({
                "-webkit-transition": t,
                transition: t
            })
        }

        function yt(e) {
            return e.addClass(u)
        }

        function xt(t, n) {
            s.navigation && (e(A).find(v).removeClass(h), t ? e(A).find('a[href="#' + t + '"]').addClass(h) : e(A).find("li").eq(n).find("a").addClass(h))
        }

        function bt(t) {
            s.menu && (e(s.menu).find(v).removeClass(h), e(s.menu).find('[data-menuanchor="' + t + '"]').addClass(h))
        }

        function wt(e, t) {
            bt(e), xt(e, t)
        }

        function St(t) {
            var n = e(b).index(x),
                o = t.index(x);
            return n == o ? "none" : n > o ? "up" : "down"
        }

        function Ct(e, t) {
            return e == t ? "none" : e > t ? "left" : "right"
        }

        function Tt(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var t, n = s.scrollOverflowHandler,
                    o = n.wrapContent(),
                    i = e.closest(x),
                    r = n.scrollable(e);
                r.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, s.verticalCentered && (t = e.find(T).get(0).scrollHeight));
                var a = dn - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                t > a ? r.length ? n.update(e, a) : (s.verticalCentered ? e.find(T).wrapInner(o) : e.wrapInner(o), n.create(e, a)) : n.remove(e), e.css("overflow", "")
            }
        }

        function kt(e) {
            e.hasClass(R) || e.addClass(R).wrapInner('<div class="' + C + '" style="height:' + At(e) + 'px;" />')
        }

        function At(e) {
            var t = dn;
            if (s.paddingTop || s.paddingBottom) {
                var n = e;
                n.hasClass(y) || (n = e.closest(x));
                var o = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                t = dn - o
            }
            return t
        }

        function Et(e, t) {
            t ? mt(fn) : yt(fn), fn.css(Yt(e)), setTimeout(function() {
                fn.removeClass(u)
            }, 10)
        }

        function Lt(t) {
            if (!t) return [];
            var n = fn.find(x + '[data-anchor="' + t + '"]');
            return n.length || (n = e(x).eq(t - 1)), n
        }

        function It(e, t) {
            var n = t.find(N),
                o = n.find(D + '[data-anchor="' + e + '"]');
            return o.length || (o = n.find(D).eq(e)), o
        }

        function Dt(e, t) {
            var n = Lt(e);
            n.length && (void 0 === t && (t = 0), e === on || n.hasClass(h) ? Ot(n, t) : Pe(n, function() {
                Ot(n, t)
            }))
        }

        function Ot(e, t) {
            if (void 0 !== t) {
                var n = e.find(N),
                    o = It(t, e);
                o.length && ft(n, o)
            }
        }

        function Ht(e, t) {
            e.append('<div class="' + q + '"><ul></ul></div>');
            var n = e.find(F);
            n.addClass(s.slidesNavPosition);
            for (var o = 0; t > o; o++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(h)
        }

        function Nt(e, t, n, o) {
            var i = "";
            s.anchors.length && !s.lockAnchors && (e ? (void 0 !== n && (i = n), void 0 === t && (t = e), rn = t, jt(i + "/" + t)) : void 0 !== e ? (rn = t, jt(n)) : jt(n)), Rt()
        }

        function jt(e) {
            if (s.recordHistory) location.hash = e;
            else if (cn || un) t.history.replaceState(i, i, "#" + e);
            else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }

        function Mt(e) {
            var t = e.data("anchor"),
                n = e.index();
            return void 0 === t && (t = n), t
        }

        function Rt() {
            var t = e(b),
                n = t.find(O),
                o = Mt(t),
                i = Mt(n),
                r = String(o);
            n.length && (r = r + "-" + i), r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
            tn[0].className = tn[0].className.replace(a, ""), tn.addClass(p + "-" + r)
        }

        function qt() {
            var e, o = n.createElement("p"),
                r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            n.body.insertBefore(o, null);
            for (var a in r) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(r[a]));
            return n.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Ft() {
            n.addEventListener ? (n.removeEventListener("mousewheel", Re, !1), n.removeEventListener("wheel", Re, !1), n.removeEventListener("MozMousePixelScroll", Re, !1)) : n.detachEvent("onmousewheel", Re)
        }

        function Bt() {
            var e, o = "";
            t.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? n[e](o + "MozMousePixelScroll", Re, !1) : n[e](o + r, Re, !1)
        }

        function Pt() {
            fn.on("mousedown", ot).on("mouseup", it)
        }

        function zt() {
            fn.off("mousedown", ot).off("mouseup", it)
        }

        function $t() {
            (cn || un) && (s.autoScrolling && tn.off(kn.touchmove).on(kn.touchmove, De), e(a).off(kn.touchstart).on(kn.touchstart, je).off(kn.touchmove).on(kn.touchmove, Oe))
        }

        function Wt() {
            (cn || un) && e(a).off(kn.touchstart).off(kn.touchmove)
        }

        function Vt(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, un && Ne(e) && s.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function Ut(e, t) {
            W(0, "internal"), void 0 !== t && (pn = !0), ft(e.closest(N), e), void 0 !== t && (pn = !1), W(An.scrollingSpeed, "internal")
        }

        function Xt(e) {
            var t = o.round(e);
            s.css3 && s.autoScrolling && !s.scrollBar ? Et("translate3d(0px, -" + t + "px, 0px)", !1) : s.autoScrolling && !s.scrollBar ? fn.css("top", -t) : en.scrollTop(t)
        }

        function Yt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function _t(e, t, n) {
            switch (t) {
                case "up":
                    mn[n].up = e;
                    break;
                case "down":
                    mn[n].down = e;
                    break;
                case "left":
                    mn[n].left = e;
                    break;
                case "right":
                    mn[n].right = e;
                    break;
                case "all":
                    "m" == n ? te(e) : ne(e)
            }
        }

        function Gt(t) {
            l(!1, "internal"), te(!1), ne(!1), fn.addClass(f), clearTimeout(bn), clearTimeout(xn), clearTimeout(yn), clearTimeout(wn), clearTimeout(Sn), G.off("scroll", ke).off("hashchange", Je).off("resize", vt), Z.off("click touchstart", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click touchstart", B).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(x).off("click touchstart", z), clearTimeout(bn), clearTimeout(xn), t && Zt()
        }

        function Zt() {
            Xt(0), fn.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                Xe(e(this), "src")
            }), fn.find("img[data-srcset]").each(function() {
                Xe(e(this), "srcset")
            }), e(A + ", " + F + ", " + z).remove(), e(x).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(D).css({
                width: ""
            }), fn.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), en.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(d), tn.removeClass(c), e.each(tn.get(0).className.split(/\s+/), function(e, t) {
                0 === t.indexOf(p) && tn.removeClass(t)
            }), e(x + ", " + D).each(function() {
                s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(R + " " + h)
            }), yt(fn), fn.find(T + ", " + M + ", " + N).each(function() {
                e(this).replaceWith(this.childNodes)
            }), fn.css({
                "-webkit-transition": "none",
                transition: "none"
            }), en.scrollTop(0);
            var t = [y, I, j];
            e.each(t, function(t, n) {
                e("." + n).removeClass(n)
            })
        }

        function Qt(e, t, n) {
            s[e] = t, "internal" !== n && (An[e] = t)
        }

        function Kt() {
            var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(d) ? void Jt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, Jt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && Jt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !s.continuousVertical || !s.scrollBar && s.autoScrolling || (s.continuousVertical = !1, Jt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(t, function(e, t) {
                s[t] && Jt("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
            }), void e.each(s.anchors, function(t, n) {
                var o = Z.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                    }),
                    i = Z.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                    });
                (i.length || o.length) && (Jt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && Jt("error", '"' + n + '" is is being used by another element `id` property'), o.length && Jt("error", '"' + n + '" is is being used by another element `name` property'))
            }))
        }

        function Jt(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }
        if (e("html").hasClass(d)) return void Kt();
        var en = e("html, body"),
            tn = e("body"),
            nn = e.fn.fullpage;
        s = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: K,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, s);
        var on, rn, an, sn, ln = !1,
            cn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            un = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            fn = e(this),
            dn = G.height(),
            pn = !1,
            hn = !0,
            vn = !0,
            gn = [],
            mn = {};
        mn.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, mn.k = e.extend(!0, {}, mn.m);
        var yn, xn, bn, wn, Sn, Cn, Tn = function() {
                return t.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }(),
            kn = {
                touchmove: "ontouchmove" in t ? "touchmove" : Tn.move,
                touchstart: "ontouchstart" in t ? "touchstart" : Tn.down
            },
            An = e.extend(!0, {}, s);
        Kt(), Q.click = un, Q = e.extend(Q, s.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function(e, t, n, o, i) {
                return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
            }
        }), e(this).length && (nn.setAutoScrolling = l, nn.setRecordHistory = P, nn.setScrollingSpeed = W, nn.setFitToSection = X, nn.setLockAnchors = J, nn.setMouseWheelScrolling = ee, nn.setAllowScrolling = te, nn.setKeyboardScrolling = ne, nn.moveSectionUp = oe, nn.moveSectionDown = ie, nn.silentMoveTo = re, nn.moveTo = ae, nn.moveSlideRight = se, nn.moveSlideLeft = le, nn.fitToSection = Ae, nn.reBuild = ce, nn.setResponsive = ue, nn.destroy = Gt, function() {
            s.css3 && (s.css3 = qt()), s.scrollBar = s.scrollBar || s.hybrid, fe(), de(), te(!0), l(s.autoScrolling, "internal"), gt(), Rt(), "complete" === n.readyState && Ke(), G.on("load", Ke)
        }(), function() {
            G.on("scroll", ke).on("hashchange", Je).blur(at).resize(vt), Z.keydown(et).keyup(nt).on("click touchstart", A + " a", st).on("click touchstart", B, lt).on("click", L, tt), e(x).on("click touchstart", z, rt), s.normalScrollElements && (Z.on("mouseenter", s.normalScrollElements, function() {
                ee(!1)
            }), Z.on("mouseleave", s.normalScrollElements, function() {
                ee(!0)
            }))
        }());
        var En = !1,
            Ln = 0,
            In = 0,
            Dn = 0,
            On = 0,
            Hn = 0,
            Nn = (new Date).getTime(),
            jn = 0,
            Mn = 0,
            Rn = dn
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var K = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(t) {
            e(b).find(l).each(function() {
                var n = e(this).data("iscrollInstance");
                void 0 !== n && n && (t ? n.wheelOn() : n.wheelOff())
            })
        },
        onLeave: function() {
            K.toggleWheel(!1)
        },
        beforeLeave: function() {
            K.onLeave()
        },
        afterLoad: function() {
            K.toggleWheel(!0)
        },
        create: function(t, n) {
            var o = t.find(l);
            o.height(n), o.each(function() {
                var t = e(this),
                    n = t.data("iscrollInstance");
                n && e.each(K.iScrollInstances, function() {
                    e(this).destroy()
                }), n = new IScroll(t.get(0), Q), K.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
            })
        },
        isScrolled: function(e, t) {
            var n = t.data("iscrollInstance");
            return !n || ("top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
        },
        scrollable: function(e) {
            return e.find(N).length ? e.find(O).find(l) : e.find(l)
        },
        scrollHeight: function(e) {
            return e.find(l).children().first().get(0).scrollHeight
        },
        remove: function(e) {
            var t = e.find(l);
            if (t.length) {
                t.data("iscrollInstance").destroy(), t.data("iscrollInstance", null)
            }
            e.find(l).children().first().children().first().unwrap().unwrap()
        },
        update: function(t, n) {
            clearTimeout(K.refreshId), K.refreshId = setTimeout(function() {
                e.each(K.iScrollInstances, function() {
                    e(this).get(0).refresh()
                })
            }, 150), t.find(l).css("height", n + "px").parent().css("height", n + "px")
        },
        wrapContent: function() {
            return '<div class="' + s + '"><div class="fp-scroller"></div></div>'
        }
    }
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return t(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, t, n, o, i) {
    "use strict";
    var r = "fullpage-wrapper",
        a = "." + r,
        s = "fp-scrollable",
        l = "." + s,
        c = "fp-responsive",
        u = "fp-notransition",
        f = "fp-destroyed",
        d = "fp-enabled",
        p = "fp-viewing",
        h = "active",
        v = "." + h,
        g = "fp-completely",
        m = "." + g,
        y = "fp-section",
        x = "." + y,
        b = x + v,
        w = x + ":first",
        S = x + ":last",
        C = "fp-tableCell",
        T = "." + C,
        k = "fp-nav",
        A = "#" + k,
        E = "fp-tooltip",
        L = "." + E,
        I = "fp-slide",
        D = "." + I,
        O = D + v,
        H = "fp-slides",
        N = "." + H,
        j = "fp-slidesContainer",
        M = "." + j,
        R = "fp-table",
        q = "fp-slidesNav",
        F = "." + q,
        B = F + " a",
        P = "fp-controlArrow",
        z = "." + P,
        $ = "fp-prev",
        W = "." + $,
        V = P + " " + $,
        U = z + W,
        X = "fp-next",
        Y = P + " " + X,
        _ = z + "." + X,
        G = e(t),
        Z = e(n),
        Q = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function(s) {
        function l(t, n) {
            t || tn(0), dn("autoScrolling", t, n);
            var o = e(b);
            s.autoScrolling && !s.scrollBar ? (vn.css({
                overflow: "hidden",
                height: "100%"
            }), P(Pn.recordHistory, "internal"), kn.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && tn(o.position().top)) : (vn.css({
                overflow: "visible",
                height: "initial"
            }), P(!1, "internal"), kn.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), sn(kn), o.length && vn.scrollTop(o.position().top)), kn.trigger("setAutoScrolling", [t])
        }

        function P(e, t) {
            dn("recordHistory", e, t)
        }

        function W(e, t) {
            "internal" !== t && s.fadingEffect && mn.fadingEffect && mn.fadingEffect.update(e), dn("scrollingSpeed", e, t)
        }

        function X(e, t) {
            dn("fitToSection", e, t)
        }

        function J(e) {
            s.lockAnchors = e
        }

        function ee(e) {
            e ? (Yt(), _t()) : (Xt(), Gt())
        }

        function te(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                on(t, n, "m")
            })) : t ? (ee(!0), Zt()) : (ee(!1), Qt())
        }

        function ne(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                on(t, n, "k")
            })) : s.keyboardScrolling = t
        }

        function oe() {
            var t = e(b).prev(x);
            t.length || !s.loopTop && !s.continuousVertical || (t = e(x).last()), t.length && We(t, null, !0)
        }

        function ie() {
            var t = e(b).next(x);
            t.length || !s.loopBottom && !s.continuousVertical || (t = e(x).first()), t.length && We(t, null, !1)
        }

        function re(e, t) {
            W(0, "internal"), ae(e, t), W(Pn.scrollingSpeed, "internal")
        }

        function ae(e, t) {
            var n = Rt(e);
            void 0 !== t ? Ft(e, t) : n.length > 0 && We(n)
        }

        function se(e) {
            Pe("right", e)
        }

        function le(e) {
            Pe("left", e)
        }

        function ce(t) {
            if (!kn.hasClass(f)) {
                En = !0, An = G.height(), e(x).each(function() {
                    var t = e(this).find(N),
                        n = e(this).find(D);
                    s.verticalCentered && e(this).find(T).css("height", jt(e(this)) + "px"), e(this).css("height", ge(e(this)) + "px"), s.scrollOverflow && (n.length ? n.each(function() {
                        Ht(e(this))
                    }) : Ht(e(this))), n.length > 1 && yt(t, t.find(O))
                });
                var n = e(b),
                    o = n.index(x);
                o && re(o + 1), En = !1, e.isFunction(s.afterResize) && t && s.afterResize.call(kn), e.isFunction(s.afterReBuild) && !t && s.afterReBuild.call(kn)
            }
        }

        function ue(t) {
            var n = gn.hasClass(c);
            t ? n || (l(!1, "internal"), X(!1, "internal"), e(A).hide(), gn.addClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(kn, t), s.responsiveSlides && mn.responsiveSlides && mn.responsiveSlides.toSections(), kn.trigger("afterResponsive", [t])) : n && (l(Pn.autoScrolling, "internal"), X(Pn.autoScrolling, "internal"), e(A).show(), gn.removeClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(kn, t), s.responsiveSlides && mn.responsiveSlides && mn.responsiveSlides.toSlides(), kn.trigger("afterResponsive", [t]))
        }

        function fe() {
            return {
                options: s,
                internals: {
                    canScroll: In,
                    isScrollAllowed: On,
                    getDestinationPosition: $e,
                    isTouch: Tn,
                    c: it,
                    getXmovement: Ot,
                    removeAnimation: At,
                    getTransforms: nn,
                    lazyLoad: Ze,
                    addAnimation: kt,
                    performHorizontalMove: wt,
                    landscapeScroll: yt,
                    silentLandscapeScroll: en,
                    keepSlidesPosition: ze,
                    silentScroll: tn,
                    styleSlides: ve,
                    scrollHandler: Le,
                    getEventsPage: Jt,
                    getMSPointer: Kt,
                    isReallyTouch: Re,
                    checkParentForNormalScrollElement: Me,
                    usingExtension: ln,
                    toggleControlArrows: xt
                }
            }
        }

        function de(e) {
            var n = "fp_" + e + "Extension";
            zn[e] = s[e + "Key"], mn[e] = void 0 !== t[n] ? new t[n] : null, mn[e] && mn[e].c(e)
        }

        function pe() {
            var t = kn.find(s.sectionSelector);
            s.anchors.length || (s.anchors = t.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), s.navigationTooltips.length || (s.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function he() {
            kn.css({
                height: "100%",
                position: "relative"
            }), kn.addClass(r), e("html").addClass(d), An = G.height(), kn.removeClass(f), xe(), cn("parallax", "init"), e(x).each(function(t) {
                var n = e(this),
                    o = n.find(D),
                    i = o.length;
                me(n, t), ye(n, t), i > 0 ? ve(n, o, i) : s.verticalCentered && Nt(n)
            }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(gn), s.navigation && we(), Ce(), s.fadingEffect && mn.fadingEffect && mn.fadingEffect.apply(), s.scrollOverflow ? ("complete" === n.readyState && Se(), G.on("load", Se)) : Ae()
        }

        function ve(t, n, o) {
            var i = 100 * o,
                r = 100 / o;
            n.wrapAll('<div class="' + j + '" />'), n.parent().wrap('<div class="' + H + '" />'), t.find(M).css("width", i + "%"), o > 1 && (s.controlArrows && be(t), s.slidesNavigation && Pt(t, o)), n.each(function(t) {
                e(this).css("width", r + "%"), s.verticalCentered && Nt(e(this))
            });
            var a = t.find(O);
            a.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== a.index()) ? en(a, "internal") : n.eq(0).addClass(h)
        }

        function ge(e) {
            return s.offsetSections && mn.offsetSections ? mn.offsetSections.getWindowHeight(e) : An
        }

        function me(t, n) {
            n || 0 !== e(b).length || t.addClass(h), wn = e(b), t.css("height", ge(t) + "px"), s.paddingTop && t.css("padding-top", s.paddingTop), s.paddingBottom && t.css("padding-bottom", s.paddingBottom), void 0 !== s.sectionsColor[n] && t.css("background-color", s.sectionsColor[n]), void 0 !== s.anchors[n] && t.attr("data-anchor", s.anchors[n])
        }

        function ye(t, n) {
            void 0 !== s.anchors[n] && t.hasClass(h) && It(s.anchors[n], n), s.menu && s.css3 && e(s.menu).closest(a).length && e(s.menu).appendTo(gn)
        }

        function xe() {
            kn.find(s.sectionSelector).addClass(y), kn.find(s.slideSelector).addClass(I)
        }

        function be(e) {
            e.find(N).after('<div class="' + V + '"></div><div class="' + Y + '"></div>'), "#fff" != s.controlArrowColor && (e.find(_).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(U).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(U).hide()
        }

        function we() {
            gn.append('<div id="' + k + '"><ul></ul></div>');
            var t = e(A);
            t.addClass(function() {
                return s.showActiveTooltip ? "fp-show-active " + s.navigationPosition : s.navigationPosition
            });
            for (var n = 0; n < e(x).length; n++) {
                var o = "";
                s.anchors.length && (o = s.anchors[n]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    r = s.navigationTooltips[n];
                void 0 !== r && "" !== r && (i += '<div class="' + E + " " + s.navigationPosition + '">' + r + "</div>"), i += "</li>", t.find("ul").append(i)
            }
            e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(b).index(x)).find("a").addClass(h)
        }

        function Se() {
            e(x).each(function() {
                var t = e(this).find(D);
                t.length ? t.each(function() {
                    Ht(e(this))
                }) : Ht(e(this))
            }), Ae()
        }

        function Ce() {
            kn.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Te(e(this), "enablejsapi=1")
            })
        }

        function Te(e, t) {
            var n = e.attr("src");
            e.attr("src", n + ke(n) + t)
        }

        function ke(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Ae() {
            var t = e(b);
            t.addClass(g), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(t), Ze(t), Qe(t), s.scrollOverflowHandler.afterLoad(), Ee() && e.isFunction(s.afterLoad) && s.afterLoad.call(t, t.data("anchor"), t.index(x) + 1), e.isFunction(s.afterRender) && s.afterRender.call(kn)
        }

        function Ee() {
            var e = t.location.hash.replace("#", "").split("/"),
                n = Rt(decodeURIComponent(e[0]));
            return !n.length || n.length && n.index() === wn.index()
        }

        function Le() {
            Gn || (requestAnimationFrame(Ie), Gn = !0)
        }

        function Ie() {
            kn.trigger("onScroll");
            var t;
            if ((!s.autoScrolling || s.scrollBar || ln("dragAndMove")) && !fn()) {
                var i = ln("dragAndMove") ? o.abs(mn.dragAndMove.getCurrentScroll()) : G.scrollTop(),
                    r = (Oe(i), 0),
                    a = i + G.height() / 2,
                    l = ln("dragAndMove") ? mn.dragAndMove.getDocumentHeight() : gn.height() - G.height(),
                    c = l === i,
                    u = n.querySelectorAll(x);
                if (c) r = u.length - 1;
                else if (i)
                    for (var f = 0; f < u.length; ++f) {
                        var d = u[f];
                        d.offsetTop <= a && (r = f)
                    } else r = 0;
                if (t = e(u).eq(r), !t.hasClass(h)) {
                    $n = !0;
                    var p, v, g = e(b),
                        m = g.index(x) + 1,
                        y = Dt(t),
                        w = t.data("anchor"),
                        S = t.index(x) + 1,
                        C = t.find(O);
                    C.length && (v = C.data("anchor"), p = C.index()), In && (t.addClass(h).siblings().removeClass(h), cn("parallax", "afterLoad"), e.isFunction(s.onLeave) && s.onLeave.call(g, m, S, y), e.isFunction(s.afterLoad) && s.afterLoad.call(t, w, S), s.resetSliders && mn.resetSliders && mn.resetSliders.apply({
                        localIsResizing: En,
                        leavingSection: m
                    }), Je(g), Ze(t), Qe(t), It(w, S - 1), s.anchors.length && (yn = w), zt(p, v, w, S)), clearTimeout(Mn), Mn = setTimeout(function() {
                        $n = !1
                    }, 100)
                }
                s.fitToSection && (clearTimeout(Rn), Rn = setTimeout(function() {
                    s.fitToSection && De()
                }, s.fitToSectionDelay))
            }
            Gn = !1
        }

        function De() {
            In && (En = !0, We(e(b)), En = !1)
        }

        function Oe(e) {
            var t = e > Wn ? "down" : "up";
            return Wn = e, Zn = e, t
        }

        function He(e, t) {
            if (On.m[e]) {
                var n = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ie : oe;
                if (mn.scrollHorizontally && (o = mn.scrollHorizontally.getScrollSection(e, o)), t.length > 0) {
                    if (!s.scrollOverflowHandler.isScrolled(n, t)) return !0;
                    o()
                } else o()
            }
        }

        function Ne(e) {
            var t = e.originalEvent;
            !Me(e.target) && s.autoScrolling && Re(t) && e.preventDefault()
        }

        function je(t) {
            var n = t.originalEvent,
                i = e(n.target).closest(x);
            if (!Me(t.target) && Re(n)) {
                s.autoScrolling && t.preventDefault();
                var r = s.scrollOverflowHandler.scrollable(i),
                    a = Jt(n);
                Xn = a.y, Yn = a.x, i.find(N).length && o.abs(Un - Yn) > o.abs(Vn - Xn) ? !Sn && o.abs(Un - Yn) > G.outerWidth() / 100 * s.touchSensitivity && (Un > Yn ? On.m.right && se(i) : On.m.left && le(i)) : s.autoScrolling && In && o.abs(Vn - Xn) > G.height() / 100 * s.touchSensitivity && (Vn > Xn ? He("down", r) : Xn > Vn && He("up", r))
            }
        }

        function Me(t, n) {
            n = n || 0;
            var o = e(t).parent();
            return !!(n < s.normalScrollElementTouchThreshold && o.is(s.normalScrollElements)) || n != s.normalScrollElementTouchThreshold && Me(o, ++n)
        }

        function Re(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function qe(e) {
            var t = e.originalEvent;
            if (s.fitToSection && vn.stop(), Re(t)) {
                var n = Jt(t);
                Vn = n.y, Un = n.x
            }
        }

        function Fe(e, t) {
            for (var n = 0, i = e.slice(o.max(e.length - t, 1)), r = 0; r < i.length; r++) n += i[r];
            return o.ceil(n / t)
        }

        function Be(n) {
            var i = (new Date).getTime(),
                r = e(m).hasClass("fp-normal-scroll");
            if (s.autoScrolling && !bn && !r) {
                n = n || t.event;
                var a = n.wheelDelta || -n.deltaY || -n.detail,
                    l = o.max(-1, o.min(1, a)),
                    c = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                    u = o.abs(n.wheelDeltaX) < o.abs(n.wheelDelta) || o.abs(n.deltaX) < o.abs(n.deltaY) || !c;
                Dn.length > 149 && Dn.shift(), Dn.push(o.abs(a)), s.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var f = e(b),
                    d = s.scrollOverflowHandler.scrollable(f),
                    p = i - _n;
                return _n = i, p > 200 && (Dn = []), In && !un() && Fe(Dn, 10) >= Fe(Dn, 70) && u && (l < 0 ? He("down", d) : He("up", d)), !1
            }
            s.fitToSection && vn.stop()
        }

        function Pe(t, n) {
            var o = void 0 === n ? e(b) : n,
                i = o.find(N);
            if (!(!i.length || un() || Sn || i.find(D).length < 2)) {
                var r = i.find(O),
                    a = null;
                if (a = "left" === t ? r.prev(D) : r.next(D), !a.length) {
                    if (!s.loopHorizontal) return;
                    a = "left" === t ? r.siblings(":last") : r.siblings(":first")
                }
                Sn = !0, yt(i, a, t)
            }
        }

        function ze() {
            e(O).each(function() {
                en(e(this), "internal")
            })
        }

        function $e(e) {
            var t = e.position(),
                n = t.top,
                o = ln("dragAndMove") && mn.dragAndMove.isGrabbing ? mn.dragAndMove.isScrollingDown() : t.top > Zn,
                i = n - An + e.outerHeight(),
                r = s.bigSectionsDestination;
            return e.outerHeight() > An ? (o || r) && "bottom" !== r || (n = i) : (o || En && e.is(":last-child")) && (n = i),
                s.offsetSections && mn.offsetSections && (n = mn.offsetSections.getSectionPosition(o, n, e)), Zn = n, n
        }

        function We(t, n, o) {
            if (void 0 !== t && t.length) {
                var i, r, a = $e(t),
                    l = {
                        element: t,
                        callback: n,
                        isMovementUp: o,
                        dtop: a,
                        yMovement: Dt(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(x),
                        activeSlide: t.find(O),
                        activeSection: e(b),
                        leavingSection: e(b).index(x) + 1,
                        localIsResizing: En
                    };
                l.activeSection.is(t) && !En || s.scrollBar && G.scrollTop() === l.dtop && !t.hasClass("fp-auto-height") || (l.activeSlide.length && (i = l.activeSlide.data("anchor"), r = l.activeSlide.index()), cn("parallax", "apply", l), s.autoScrolling && s.continuousVertical && void 0 !== l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Xe(l)), e.isFunction(s.onLeave) && !l.localIsResizing && !1 === s.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) || (ln("scrollOverflowReset") && mn.scrollOverflowReset.setPrevious(l.activeSection), l.localIsResizing || Je(l.activeSection), s.scrollOverflowHandler.beforeLeave(), t.addClass(h).siblings().removeClass(h), Ze(t), s.scrollOverflowHandler.onLeave(), In = !1, zt(r, i, l.anchorLink, l.sectionIndex), Ve(l), yn = l.anchorLink, It(l.anchorLink, l.sectionIndex)))
            }
        }

        function Ve(t) {
            if (s.css3 && s.autoScrolling && !s.scrollBar) Mt("translate3d(0px, -" + o.round(t.dtop) + "px, 0px)", !0), s.scrollingSpeed ? (clearTimeout(Nn), Nn = setTimeout(function() {
                _e(t)
            }, s.scrollingSpeed)) : _e(t);
            else {
                var n = Ue(t);
                e(n.element).animate(n.options, s.scrollingSpeed, s.easing).promise().done(function() {
                    s.scrollBar ? setTimeout(function() {
                        _e(t)
                    }, 30) : _e(t)
                })
            }
        }

        function Ue(e) {
            var t = {};
            return s.autoScrolling && !s.scrollBar ? (t.options = {
                top: -e.dtop
            }, t.element = a) : (t.options = {
                scrollTop: e.dtop
            }, t.element = "html, body"), t
        }

        function Xe(t) {
            return t.isMovementUp ? t.activeSection.before(t.activeSection.nextAll(x)) : t.activeSection.after(t.activeSection.prevAll(x).get().reverse()), tn(e(b).position().top), ze(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = Dt(t.element), t.leavingSection = t.activeSection.index(x) + 1, t.sectionIndex = t.element.index(x), e(a).trigger("onContinuousVertical", [t]), t
        }

        function Ye(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(w).before(t.wrapAroundElements) : e(S).after(t.wrapAroundElements), tn(e(b).position().top), ze(), t.sectionIndex = t.element.index(x), t.leavingSection = t.activeSection.index(x) + 1)
        }

        function _e(t) {
            Ye(t), e.isFunction(s.afterLoad) && !t.localIsResizing && s.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), s.scrollOverflowHandler.afterLoad(), cn("parallax", "afterLoad"), ln("scrollOverflowReset") && mn.scrollOverflowReset.reset(), s.resetSliders && mn.resetSliders && mn.resetSliders.apply(t), t.localIsResizing || Qe(t.element), t.element.addClass(g).siblings().removeClass(g), In = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function Ge(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t)
        }

        function Ze(t) {
            if (s.lazyLoading) {
                var n;
                et(t).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    n = e(this), e.each(["src", "srcset"], function(e, t) {
                        var o = n.attr("data-" + t);
                        void 0 !== o && o && Ge(n, t)
                    }), n.is("source") && n.closest("video").get(0).load()
                })
            }
        }

        function Qe(t) {
            var n = et(t);
            n.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && Ke(t), t.onload = function() {
                    t.hasAttribute("data-autoplay") && Ke(t)
                }
            })
        }

        function Ke(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function Je(t) {
            var n = et(t);
            n.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function et(t) {
            var n = t.find(O);
            return n.length && (t = e(n)), t
        }

        function tt(e) {
            function t(e) {
                var t, o, r, a, s, l, c, u = "",
                    f = 0;
                for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length;) a = i.indexOf(e.charAt(f++)), s = i.indexOf(e.charAt(f++)), l = i.indexOf(e.charAt(f++)), c = i.indexOf(e.charAt(f++)), t = a << 2 | s >> 4, o = (15 & s) << 4 | l >> 2, r = (3 & l) << 6 | c, u += String.fromCharCode(t), 64 != l && (u += String.fromCharCode(o)), 64 != c && (u += String.fromCharCode(r));
                return u = n(u)
            }

            function n(e) {
                for (var t, n = "", o = 0, i = 0, r = 0; o < e.length;) i = e.charCodeAt(o), i < 128 ? (n += String.fromCharCode(i), o++) : i > 191 && i < 224 ? (r = e.charCodeAt(o + 1), n += String.fromCharCode((31 & i) << 6 | 63 & r), o += 2) : (r = e.charCodeAt(o + 1), t = e.charCodeAt(o + 2), n += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & t), o += 3);
                return n
            }

            function o(e) {
                return e.slice(3).slice(0, -3)
            }
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return function(e) {
                return e
            }(function(e) {
                var n = e.split("_");
                if (n.length > 1) {
                    var i = n[1];
                    return e.replace(o(n[1]), "").split("_")[0] + "_" + t(i.slice(3).slice(0, -3))
                }
                return o(e)
            }(t(e)))
        }

        function nt() {
            if (n.domain.length) {
                for (var e = n.domain.replace(/^(www\.)/, "").split("."); e.length > 2;) e.shift();
                return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
            }
            return ""
        }

        function ot(e) {
            var t = nt(),
                n = ["localhost", "127.0.0.1", "jshell.net", "UDdDQU5ZNlNN"],
                o = n[0],
                i = n[1],
                r = n[2],
                a = tt(n[3]),
                s = [o, i, r].indexOf(t) < 0 && 0 !== t.length,
                l = void 0 !== zn[e] && zn[e].length;
            if (!l && s) return !1;
            var c = l ? tt(zn[e]) : "";
            c = c.split("_");
            var u = c.length > 1 && c[1].indexOf(e, c[1].length - e.length) > -1;
            return !(c[0].indexOf(t, c[0].length - t.length) < 0 && s && a != c[0]) && u || !s
        }

        function it(e) {
            if (ln(e) && mn[e]) {
                var t = tt("MTIzPGRpdiBzdHlsZT0iei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkOyB0b3A6IDIwcHg7IGxlZnQ6MjBweDsgYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDdweCAxNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsiPjxhIGhyZWY9Imh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvZXh0ZW5zaW9ucy8iIHN0eWxlPSJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ij5VbmxpY2Vuc2VkIGZ1bGxQYWdlLmpzIEV4dGVuc2lvbjwvYT48L2Rpdj4xMjM="),
                    n = o.random() < .5;
                if (!ot(e)) {
                    var i, r = function() {
                        i = n ? gn.find("div").first() : gn.find("div").last(), "9999999" !== i.css("z-index") && (n ? gn.prepend(t) : gn.append(t))
                    };
                    r(), setInterval(r, 2e3)
                }
            }
        }

        function rt() {
            var e = t.location.hash.replace("#", "").split("/"),
                n = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            n && (s.animateAnchor ? Ft(n, o) : re(n, o))
        }

        function at() {
            if (!$n && !s.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"),
                    n = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = void 0 === yn,
                    r = void 0 === yn && void 0 === o && !Sn;
                n.length && (n && n !== yn && !i || r || !Sn && xn != o) && Ft(n, o)
            }
        }

        function st(t) {
            clearTimeout(qn);
            var n = e(":focus");
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) {
                var o = t.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && t.preventDefault(), bn = t.ctrlKey, qn = setTimeout(function() {
                    gt(t)
                }, 150)
            }
        }

        function lt() {
            e(this).prev().trigger("click")
        }

        function ct(e) {
            Ln && (bn = e.ctrlKey)
        }

        function ut(e) {
            2 == e.which && (Qn = e.pageY, kn.on("mousemove", mt))
        }

        function ft(e) {
            2 == e.which && kn.off("mousemove")
        }

        function dt() {
            var t = e(this).closest(x);
            e(this).hasClass($) ? On.m.left && le(t) : On.m.right && se(t)
        }

        function pt() {
            Ln = !1, bn = !1
        }

        function ht(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            We(e(x).eq(n))
        }

        function vt(t) {
            t.preventDefault();
            var n = e(this).closest(x).find(N);
            yt(n, n.find(D).eq(e(this).closest("li").index()))
        }

        function gt(t) {
            var n = t.shiftKey;
            if (In || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                case 38:
                case 33:
                    On.k.up && oe();
                    break;
                case 32:
                    if (n && On.k.up) {
                        oe();
                        break
                    }
                case 40:
                case 34:
                    On.k.down && ie();
                    break;
                case 36:
                    On.k.up && ae(1);
                    break;
                case 35:
                    On.k.down && ae(e(x).length);
                    break;
                case 37:
                    On.k.left && le();
                    break;
                case 39:
                    On.k.right && se();
                    break;
                default:
                    return
            }
        }

        function mt(e) {
            In && (e.pageY < Qn && On.m.up ? oe() : e.pageY > Qn && On.m.down && ie()), Qn = e.pageY
        }

        function yt(t, n, o) {
            var i = t.closest(x),
                r = {
                    slides: t,
                    destiny: n,
                    direction: o,
                    destinyPos: n.position(),
                    slideIndex: n.index(),
                    section: i,
                    sectionIndex: i.index(x),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(F),
                    slideAnchor: Wt(n),
                    prevSlide: i.find(O),
                    prevSlideIndex: i.find(O).index(),
                    localIsResizing: En
                };
            return r.xMovement = Ot(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (In = !1), cn("parallax", "applyHorizontal", r), s.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(s.onSlideLeave) && !1 === s.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) ? void(Sn = !1) : (n.addClass(h).siblings().removeClass(h), r.localIsResizing || (Je(r.prevSlide), Ze(n)), xt(r), i.hasClass(h) && !r.localIsResizing && zt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), mn.continuousHorizontal && mn.continuousHorizontal.apply(r), fn() ? bt(r) : wt(t, r, !0), void(s.interlockedSlides && mn.interlockedSlides && mn.interlockedSlides.apply(r)))
        }

        function xt(e) {
            !s.loopHorizontal && s.controlArrows && (e.section.find(U).toggle(0 !== e.slideIndex), e.section.find(_).toggle(!e.destiny.is(":last-child")))
        }

        function bt(t) {
            mn.continuousHorizontal && mn.continuousHorizontal.afterSlideLoads(t), St(t.slidesNav, t.slideIndex), t.localIsResizing || (cn("parallax", "afterSlideLoads"), e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), In = !0, Qe(t.destiny)), Sn = !1, mn.interlockedSlides && mn.interlockedSlides.apply(t)
        }

        function wt(e, t, n) {
            var i = t.destinyPos;
            if (s.css3) {
                var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                kt(e.find(M)).css(nn(r)), jn = setTimeout(function() {
                    n && bt(t)
                }, s.scrollingSpeed, s.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, s.scrollingSpeed, s.easing, function() {
                n && bt(t)
            })
        }

        function St(e, t) {
            e.find(v).removeClass(h), e.find("li").eq(t).find("a").addClass(h)
        }

        function Ct() {
            if (kn.trigger("onResize"), Tt(), Cn) {
                var t = e(n.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var i = G.height();
                    o.abs(i - Kn) > 20 * o.max(Kn, i) / 100 && (ce(!0), Kn = i)
                }
            } else clearTimeout(Hn), Hn = setTimeout(function() {
                ce(!0)
            }, 350)
        }

        function Tt() {
            var e = s.responsive || s.responsiveWidth,
                t = s.responsiveHeight,
                n = e && G.outerWidth() < e,
                o = t && G.height() < t;
            e && t ? ue(n || o) : e ? ue(n) : t && ue(o)
        }

        function kt(e) {
            var t = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
            return e.removeClass(u), e.css({
                "-webkit-transition": t,
                transition: t
            })
        }

        function At(e) {
            return e.addClass(u)
        }

        function Et(t, n) {
            s.navigation && (e(A).find(v).removeClass(h), t ? e(A).find('a[href="#' + t + '"]').addClass(h) : e(A).find("li").eq(n).find("a").addClass(h))
        }

        function Lt(t) {
            s.menu && (e(s.menu).find(v).removeClass(h), e(s.menu).find('[data-menuanchor="' + t + '"]').addClass(h))
        }

        function It(e, t) {
            Lt(e), Et(e, t)
        }

        function Dt(t) {
            var n = e(b).index(x),
                o = t.index(x);
            return n == o ? "none" : n > o ? "up" : "down"
        }

        function Ot(e, t) {
            return e == t ? "none" : e > t ? "left" : "right"
        }

        function Ht(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var t, n = s.scrollOverflowHandler,
                    o = n.wrapContent(),
                    i = e.closest(x),
                    r = n.scrollable(e);
                r.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, s.verticalCentered && (t = e.find(T).get(0).scrollHeight));
                var a = jt(i);
                t > a ? r.length ? n.update(e, a) : (s.verticalCentered ? e.find(T).wrapInner(o) : e.wrapInner(o), n.create(e, a, s.scrollOverflowOptions)) : n.remove(e), e.css("overflow", "")
            }
        }

        function Nt(e) {
            e.hasClass(R) || e.addClass(R).wrapInner('<div class="' + C + '" style="height:' + jt(e) + 'px;" />')
        }

        function jt(e) {
            var t = ge(e);
            if (s.paddingTop || s.paddingBottom) {
                var n = e;
                n.hasClass(y) || (n = e.closest(x));
                var o = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                t = An - o
            }
            return t
        }

        function Mt(e, t) {
            t ? kt(kn) : At(kn), kn.css(nn(e)), setTimeout(function() {
                kn.removeClass(u)
            }, 10)
        }

        function Rt(t) {
            if (!t) return [];
            var n = kn.find(x + '[data-anchor="' + t + '"]');
            return n.length || (n = e(x).eq(t - 1)), n
        }

        function qt(e, t) {
            var n = t.find(N),
                o = n.find(D + '[data-anchor="' + e + '"]');
            return o.length || (o = n.find(D).eq(e)), o
        }

        function Ft(e, t) {
            var n = Rt(e);
            n.length && (void 0 === t && (t = 0), e === yn || n.hasClass(h) ? Bt(n, t) : We(n, function() {
                Bt(n, t)
            }))
        }

        function Bt(e, t) {
            if (void 0 !== t) {
                var n = e.find(N),
                    o = qt(t, e);
                o.length && yt(n, o)
            }
        }

        function Pt(e, t) {
            e.append('<div class="' + q + '"><ul></ul></div>');
            var n = e.find(F);
            n.addClass(s.slidesNavPosition);
            for (var o = 0; o < t; o++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(h)
        }

        function zt(e, t, n, o) {
            var i = "";
            s.anchors.length && !s.lockAnchors && (e ? (void 0 !== n && (i = n), void 0 === t && (t = e), xn = t, $t(i + "/" + t)) : void 0 !== e ? (xn = t, $t(n)) : $t(n)), Vt()
        }

        function $t(e) {
            if (s.recordHistory) location.hash = e;
            else if (Cn || Tn) t.history.replaceState(i, i, "#" + e);
            else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }

        function Wt(e) {
            var t = e.data("anchor"),
                n = e.index();
            return void 0 === t && (t = n), t
        }

        function Vt() {
            var t = e(b),
                n = t.find(O),
                o = Wt(t),
                i = Wt(n),
                r = String(o);
            n.length && (r = r + "-" + i), r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
            gn[0].className = gn[0].className.replace(a, ""), gn.addClass(p + "-" + r)
        }

        function Ut() {
            var e, o = n.createElement("p"),
                r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            n.body.insertBefore(o, null);
            for (var a in r) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(r[a]));
            return n.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Xt() {
            n.addEventListener ? (n.removeEventListener("mousewheel", Be, !1), n.removeEventListener("wheel", Be, !1), n.removeEventListener("MozMousePixelScroll", Be, !1)) : n.detachEvent("onmousewheel", Be)
        }

        function Yt() {
            var e, o = "";
            t.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? n[e](o + "MozMousePixelScroll", Be, !1) : n[e](o + r, Be, !1)
        }

        function _t() {
            kn.on("mousedown", ut).on("mouseup", ft)
        }

        function Gt() {
            kn.off("mousedown", ut).off("mouseup", ft)
        }

        function Zt() {
            (Cn || Tn) && (s.autoScrolling && gn.off(Bn.touchmove).on(Bn.touchmove, Ne), e(a).off(Bn.touchstart).on(Bn.touchstart, qe).off(Bn.touchmove).on(Bn.touchmove, je))
        }

        function Qt() {
            (Cn || Tn) && e(a).off(Bn.touchstart).off(Bn.touchmove)
        }

        function Kt() {
            return t.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Jt(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Tn && Re(e) && s.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function en(e, t) {
            W(0, "internal"), void 0 !== t && (En = !0), yt(e.closest(N), e), void 0 !== t && (En = !1), W(Pn.scrollingSpeed, "internal")
        }

        function tn(e) {
            var t = o.round(e);
            s.css3 && s.autoScrolling && !s.scrollBar ? Mt("translate3d(0px, -" + t + "px, 0px)", !1) : s.autoScrolling && !s.scrollBar ? kn.css("top", -t) : vn.scrollTop(t)
        }

        function nn(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function on(e, t, n) {
            switch (t) {
                case "up":
                    On[n].up = e;
                    break;
                case "down":
                    On[n].down = e;
                    break;
                case "left":
                    On[n].left = e;
                    break;
                case "right":
                    On[n].right = e;
                    break;
                case "all":
                    "m" == n ? te(e) : ne(e)
            }
        }

        function rn(t) {
            kn.trigger("destroy", [t]), l(!1, "internal"), te(!1), ne(!1), kn.addClass(f), clearTimeout(jn), clearTimeout(Nn), clearTimeout(Hn), clearTimeout(Mn), clearTimeout(Rn), G.off("scroll", Le).off("hashchange", at).off("resize", Ct), Z.off("click touchstart", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click touchstart", B).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(x).off("click touchstart", z), ln("dragAndMove") && mn.dragAndMove.destroy(), clearTimeout(jn), clearTimeout(Nn), t && an()
        }

        function an() {
            tn(0), kn.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                Ge(e(this), "src")
            }), kn.find("img[data-srcset]").each(function() {
                Ge(e(this), "srcset")
            }), e(A + ", " + F + ", " + z).remove(), e(x).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(D).css({
                width: ""
            }), kn.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), vn.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(d), gn.removeClass(c), e.each(gn.get(0).className.split(/\s+/), function(e, t) {
                0 === t.indexOf(p) && gn.removeClass(t)
            }), e(x + ", " + D).each(function() {
                s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(R + " " + h)
            }), sn(kn), kn.find(T + ", " + M + ", " + N).each(function() {
                e(this).replaceWith(this.childNodes)
            }), vn.scrollTop(0);
            var t = [y, I, j];
            e.each(t, function(t, n) {
                e("." + n).removeClass(n)
            })
        }

        function sn(e) {
            return e.css({
                "-webkit-transition": "none",
                transition: "none"
            })
        }

        function ln(e) {
            return null !== s[e] && "object" == typeof s[e] ? s[e].enabled && mn[e] : s[e] && mn[e]
        }

        function cn(e, t, n) {
            var o = Array.isArray(n) ? n.join(", ") : n;
            ln(e) && mn[e][t](o)
        }

        function un() {
            return ln("dragAndMove") && mn.dragAndMove.isAnimating
        }

        function fn() {
            return ln("dragAndMove") && mn.dragAndMove.isGrabbing
        }

        function dn(e, t, n) {
            s[e] = t, "internal" !== n && (Pn[e] = t)
        }

        function pn() {
            return e("html").hasClass(d) ? void hn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, hn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && hn("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !s.continuousVertical || !s.scrollBar && s.autoScrolling || (s.continuousVertical = !1, hn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void e.each(s.anchors, function(t, n) {
                var o = Z.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                    }),
                    i = Z.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                    });
                (i.length || o.length) && (hn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && hn("error", '"' + n + '" is is being used by another element `id` property'), o.length && hn("error", '"' + n + '" is is being used by another element `name` property'))
            }))
        }

        function hn(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }
        if (e("html").hasClass(d)) return void pn();
        var vn = e("html, body"),
            gn = e("body"),
            mn = e.fn.fullpage;
        s = e.extend(!0, {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: K,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, s);
        var yn, xn, bn, wn, Sn = !1,
            Cn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            Tn = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            kn = e(this),
            An = G.height(),
            En = !1,
            Ln = !0,
            In = !0,
            Dn = [],
            On = {};
        On.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, On.k = e.extend(!0, {}, On.m);
        var Hn, Nn, jn, Mn, Rn, qn, Fn = Kt(),
            Bn = {
                touchmove: "ontouchmove" in t ? "touchmove" : Fn.move,
                touchstart: "ontouchstart" in t ? "touchstart" : Fn.down
            },
            Pn = e.extend(!0, {}, s),
            zn = {};
        pn(), Q.click = Tn, s.scrollOverflowOptions = e.extend(Q, s.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function(e, t, n, o, i) {
                return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
            }
        }), e(this).length && (mn.setAutoScrolling = l, mn.setRecordHistory = P, mn.setScrollingSpeed = W, mn.setFitToSection = X, mn.setLockAnchors = J, mn.setMouseWheelScrolling = ee, mn.setAllowScrolling = te, mn.setKeyboardScrolling = ne, mn.moveSectionUp = oe, mn.moveSectionDown = ie, mn.silentMoveTo = re, mn.moveTo = ae, mn.moveSlideRight = se, mn.moveSlideLeft = le, mn.fitToSection = De, mn.reBuild = ce, mn.setResponsive = ue, mn.getFullpageData = fe, mn.destroy = rn, mn.landscapeScroll = yt, de("continuousHorizontal"), de("scrollHorizontally"), de("resetSliders"), de("interlockedSlides"), de("responsiveSlides"), de("fadingEffect"), de("dragAndMove"), de("offsetSections"), de("scrollOverflowReset"), de("parallax"), ln("dragAndMove") && mn.dragAndMove.init(), function() {
            s.css3 && (s.css3 = Ut()), s.scrollBar = s.scrollBar || s.hybrid, pe(), he(), te(!0), l(s.autoScrolling, "internal"), Tt(), Vt(), "complete" === n.readyState && rt(), G.on("load", rt)
        }(), function() {
            G.on("scroll", Le).on("hashchange", at).blur(pt).resize(Ct), Z.keydown(st).keyup(ct).on("click touchstart", A + " a", ht).on("click touchstart", B, vt).on("click", L, lt), e(x).on("click touchstart", z, dt), s.normalScrollElements && (Z.on("mouseenter", s.normalScrollElements, function() {
                ee(!1)
            }), Z.on("mouseleave", s.normalScrollElements, function() {
                ee(!0)
            }))
        }(), ln("dragAndMove") && mn.dragAndMove.turnOffTouch());
        var $n = !1,
            Wn = 0,
            Vn = 0,
            Un = 0,
            Xn = 0,
            Yn = 0;
        ! function() {
            var e = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
            t.requestAnimationFrame = e
        }();
        var _n = (new Date).getTime(),
            Gn = !1,
            Zn = 0,
            Qn = 0,
            Kn = An
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var K = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(t) {
            e(b).find(l).each(function() {
                var n = e(this).data("iscrollInstance");
                void 0 !== n && n && (t ? n.wheelOn() : n.wheelOff())
            })
        },
        onLeave: function() {
            K.toggleWheel(!1)
        },
        beforeLeave: function() {
            K.onLeave()
        },
        afterLoad: function() {
            K.toggleWheel(!0)
        },
        create: function(t, n, o) {
            var i = t.find(l);
            i.height(n), i.each(function() {
                var t = e(this),
                    n = t.data("iscrollInstance");
                n && e.each(K.iScrollInstances, function() {
                    e(this).destroy()
                }), n = new IScroll(t.get(0), o), n.on("scrollEnd", function() {
                    this.fp_isAtTop = this.y > -30, this.fp_isAtEnd = this.y - this.maxScrollY < 30
                }), K.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
            })
        },
        isScrolled: function(e, t) {
            var n = t.data("iscrollInstance");
            return !n || ("top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
        },
        scrollable: function(e) {
            return e.find(N).length ? e.find(O).find(l) : e.find(l)
        },
        scrollHeight: function(e) {
            return e.find(l).children().first().get(0).scrollHeight
        },
        remove: function(e) {
            var t = e.find(l);
            if (t.length) {
                var n = t.data("iscrollInstance");
                n && n.destroy(), t.data("iscrollInstance", null)
            }
            e.find(l).children().first().children().first().unwrap().unwrap()
        },
        update: function(t, n) {
            clearTimeout(K.refreshId), K.refreshId = setTimeout(function() {
                e.each(K.iScrollInstances, function() {
                    e(this).get(0).refresh()
                })
            }, 150), t.find(l).css("height", n + "px").parent().css("height", n + "px")
        },
        wrapContent: function() {
            return '<div class="' + s + '"><div class="fp-scroller"></div></div>'
        }
    }
}), $(window).on("load", function() {
    var e = $("#page-preloader"),
        t = $("body");
    e.delay(350).fadeOut("slow"), t.removeClass("overflow"), imgLoad()
}), $(document).ready(function() {
    $("#fullpage").fullpage({
        responsiveWidth: 980,
        scrollingSpeed: 1e3,
        fitToSection: !1,
        lazyLoading: !1,
        scrollBar: !0,
        afterLoad: function(e, t) {
            function n() {
                $("#contact").addClass("show")
            }
            var o = $(".section");
            $(o[o.length - 1]);
            $(o).find(".mask").removeClass("active"), $(o[t - 1]).addClass("shown"), $(o[t - 1]).find("aside"), $(o[t - 1]).hasClass("fp-auto-height") && ($(o[t - 2]).find(".mask").addClass("active"), $(o[t]).find(".mask").addClass("active")), $(o[t - 1]).find(".left-block").length && $(this).find(".left-block svg").addClass("show animated flipInY"), $(o[o.length - 1]).hasClass("active") && setTimeout(n, 500), $(o[t]) !== o.length - 1 && $("#contact").removeClass("show")
        }
    }), $("a#menu-button").click(function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $("#menu-container").toggleClass("show")
    }), $(".main-menu a, #footer-menu a").click(function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return 0 != $(t).length && ($("html, body").animate({
            scrollTop: $(t).offset().top
        }, 800), $("a#menu-button").removeClass("open"), $("#menu-wrap").removeClass("show"), $("#menu-container").removeClass("show")), !1
    }), $(".menu-logo a").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1e3), $("a#menu-button").removeClass("open"), $("#menu-wrap").removeClass("show"), $("#menu-container").removeClass("show")
    }), $(".button-down").click(function(e) {
        e.preventDefault();
        var t = $("#news").offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 500)
    }), $("#logo").click(function() {
        $(".menu-logo a").trigger("click")
    }), $("aside .section-title").click(function() {
        $(this).siblings(".aside-content").toggleClass("mobile-show")
    }), $(document).keyup(function(e) {
        27 === e.keyCode && $("#menu-container").hasClass("show") && ($("#menu-container").removeClass("show"), $("#menu-wrap").removeClass("show"), $("#menu-button").removeClass("open"))
    }), $("video").controls = !1
});
