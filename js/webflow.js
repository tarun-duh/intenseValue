/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */



(() => {
    var Ly = Object.create;
    var Pn = Object.defineProperty;
    var Ny = Object.getOwnPropertyDescriptor;
    var Dy = Object.getOwnPropertyNames;
    var My = Object.getPrototypeOf,
        Fy = Object.prototype.hasOwnProperty;
    var ce = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        xe = (e, t) => {
            for (var n in t) Pn(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        oa = (e, t, n, r) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Dy(t)) !Fy.call(e, i) && i !== n && Pn(e, i, {
                    get: () => t[i],
                    enumerable: !(r = Ny(t, i)) || r.enumerable
                });
            return e
        };
    var re = (e, t, n) => (n = e != null ? Ly(My(e)) : {}, oa(t || !e || !e.__esModule ? Pn(n, "default", {
            value: e,
            enumerable: !0
        }) : n, e)),
        He = e => oa(Pn({}, "__esModule", {
            value: !0
        }), e);
    var aa = f(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let r = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = u.getPropertyValue("position"),
                        y = u.getPropertyValue("overflow"),
                        d = u.getPropertyValue("display");
                    (!l || l === "static") && (a.style.position = "relative"), y !== "hidden" && (a.style.overflow = "hidden"), (!d || d === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let y in l) u.getPropertyValue(y) !== l[y] && (a.style[y] = l[y])
                },
                o = function(a) {
                    let u = a.parentNode;
                    r(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let l = a[u].nodeName.toLowerCase();
                        if (l === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var sa = f(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(r) {
                Webflow.env("design") || ($("video").each(function() {
                    r && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    r ? n($(this)) : t($(this))
                }))
            }

            function t(r) {
                r.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function n(r) {
                r.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let r = window.matchMedia("(prefers-reduced-motion: reduce)");
                r.addEventListener("change", i => {
                    e(!i.matches)
                }), r.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            n(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Hr = f(() => {
        "use strict";
        window.tram = function(e) {
            function t(c, E) {
                var _ = new ge.Bare;
                return _.init(c, E)
            }

            function n(c) {
                return c.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }

            function r(c) {
                var E = parseInt(c.slice(1), 16),
                    _ = E >> 16 & 255,
                    b = E >> 8 & 255,
                    C = 255 & E;
                return [_, b, C]
            }

            function i(c, E, _) {
                return "#" + (1 << 24 | c << 16 | E << 8 | _).toString(16).slice(1)
            }

            function o() {}

            function s(c, E) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof E + "] " + E)
            }

            function a(c, E, _) {
                l("Units do not match [" + c + "]: " + E + ", " + _)
            }

            function u(c, E, _) {
                if (E !== void 0 && (_ = E), c === void 0) return _;
                var b = _;
                return Jt.test(c) || !gt.test(c) ? b = parseInt(c, 10) : gt.test(c) && (b = 1e3 * parseFloat(c)), 0 > b && (b = 0), b === b ? b : _
            }

            function l(c) {
                se.debug && window && window.console.warn(c)
            }

            function y(c) {
                for (var E = -1, _ = c ? c.length : 0, b = []; ++E < _;) {
                    var C = c[E];
                    C && b.push(C)
                }
                return b
            }
            var d = function(c, E, _) {
                    function b(Q) {
                        return typeof Q == "object"
                    }

                    function C(Q) {
                        return typeof Q == "function"
                    }

                    function R() {}

                    function z(Q, ue) {
                        function q() {
                            var Ie = new Z;
                            return C(Ie.init) && Ie.init.apply(Ie, arguments), Ie
                        }

                        function Z() {}
                        ue === _ && (ue = Q, Q = Object), q.Bare = Z;
                        var J, he = R[c] = Q[c],
                            Ue = Z[c] = q[c] = new R;
                        return Ue.constructor = q, q.mixin = function(Ie) {
                            return Z[c] = q[c] = z(q, Ie)[c], q
                        }, q.open = function(Ie) {
                            if (J = {}, C(Ie) ? J = Ie.call(q, Ue, he, q, Q) : b(Ie) && (J = Ie), b(J))
                                for (var en in J) E.call(J, en) && (Ue[en] = J[en]);
                            return C(Ue.init) || (Ue.init = Q), q
                        }, q.open(ue)
                    }
                    return z
                }("prototype", {}.hasOwnProperty),
                p = {
                    ease: ["ease", function(c, E, _, b) {
                        var C = (c /= b) * c,
                            R = C * c;
                        return E + _ * (-2.75 * R * C + 11 * C * C + -15.5 * R + 8 * C + .25 * c)
                    }],
                    "ease-in": ["ease-in", function(c, E, _, b) {
                        var C = (c /= b) * c,
                            R = C * c;
                        return E + _ * (-1 * R * C + 3 * C * C + -3 * R + 2 * C)
                    }],
                    "ease-out": ["ease-out", function(c, E, _, b) {
                        var C = (c /= b) * c,
                            R = C * c;
                        return E + _ * (.3 * R * C + -1.6 * C * C + 2.2 * R + -1.8 * C + 1.9 * c)
                    }],
                    "ease-in-out": ["ease-in-out", function(c, E, _, b) {
                        var C = (c /= b) * c,
                            R = C * c;
                        return E + _ * (2 * R * C + -5 * C * C + 2 * R + 2 * C)
                    }],
                    linear: ["linear", function(c, E, _, b) {
                        return _ * c / b + E
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, E, _, b) {
                        return _ * (c /= b) * c + E
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, E, _, b) {
                        return -_ * (c /= b) * (c - 2) + E
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, E, _, b) {
                        return (c /= b / 2) < 1 ? _ / 2 * c * c + E : -_ / 2 * (--c * (c - 2) - 1) + E
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, E, _, b) {
                        return _ * (c /= b) * c * c + E
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, E, _, b) {
                        return _ * ((c = c / b - 1) * c * c + 1) + E
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, E, _, b) {
                        return (c /= b / 2) < 1 ? _ / 2 * c * c * c + E : _ / 2 * ((c -= 2) * c * c + 2) + E
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, E, _, b) {
                        return _ * (c /= b) * c * c * c + E
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, E, _, b) {
                        return -_ * ((c = c / b - 1) * c * c * c - 1) + E
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, E, _, b) {
                        return (c /= b / 2) < 1 ? _ / 2 * c * c * c * c + E : -_ / 2 * ((c -= 2) * c * c * c - 2) + E
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, E, _, b) {
                        return _ * (c /= b) * c * c * c * c + E
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, E, _, b) {
                        return _ * ((c = c / b - 1) * c * c * c * c + 1) + E
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, E, _, b) {
                        return (c /= b / 2) < 1 ? _ / 2 * c * c * c * c * c + E : _ / 2 * ((c -= 2) * c * c * c * c + 2) + E
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, E, _, b) {
                        return -_ * Math.cos(c / b * (Math.PI / 2)) + _ + E
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, E, _, b) {
                        return _ * Math.sin(c / b * (Math.PI / 2)) + E
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, E, _, b) {
                        return -_ / 2 * (Math.cos(Math.PI * c / b) - 1) + E
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, E, _, b) {
                        return c === 0 ? E : _ * Math.pow(2, 10 * (c / b - 1)) + E
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, E, _, b) {
                        return c === b ? E + _ : _ * (-Math.pow(2, -10 * c / b) + 1) + E
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, E, _, b) {
                        return c === 0 ? E : c === b ? E + _ : (c /= b / 2) < 1 ? _ / 2 * Math.pow(2, 10 * (c - 1)) + E : _ / 2 * (-Math.pow(2, -10 * --c) + 2) + E
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, E, _, b) {
                        return -_ * (Math.sqrt(1 - (c /= b) * c) - 1) + E
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, E, _, b) {
                        return _ * Math.sqrt(1 - (c = c / b - 1) * c) + E
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, E, _, b) {
                        return (c /= b / 2) < 1 ? -_ / 2 * (Math.sqrt(1 - c * c) - 1) + E : _ / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + E
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, E, _, b, C) {
                        return C === void 0 && (C = 1.70158), _ * (c /= b) * c * ((C + 1) * c - C) + E
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, E, _, b, C) {
                        return C === void 0 && (C = 1.70158), _ * ((c = c / b - 1) * c * ((C + 1) * c + C) + 1) + E
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, E, _, b, C) {
                        return C === void 0 && (C = 1.70158), (c /= b / 2) < 1 ? _ / 2 * c * c * (((C *= 1.525) + 1) * c - C) + E : _ / 2 * ((c -= 2) * c * (((C *= 1.525) + 1) * c + C) + 2) + E
                    }]
                },
                v = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                T = document,
                I = window,
                S = "bkwld-tram",
                m = /[\-\.0-9]/g,
                x = /[A-Z]/,
                A = "number",
                N = /^(rgb|#)/,
                D = /(em|cm|mm|in|pt|pc|px)$/,
                P = /(em|cm|mm|in|pt|pc|px|%)$/,
                V = /(deg|rad|turn)$/,
                k = "unitless",
                B = /(all|none) 0s ease 0s/,
                H = /^(width|height)$/,
                F = " ",
                w = T.createElement("a"),
                g = ["Webkit", "Moz", "O", "ms"],
                O = ["-webkit-", "-moz-", "-o-", "-ms-"],
                L = function(c) {
                    if (c in w.style) return {
                        dom: c,
                        css: c
                    };
                    var E, _, b = "",
                        C = c.split("-");
                    for (E = 0; E < C.length; E++) b += C[E].charAt(0).toUpperCase() + C[E].slice(1);
                    for (E = 0; E < g.length; E++)
                        if (_ = g[E] + b, _ in w.style) return {
                            dom: _,
                            css: O[E] + c
                        }
                },
                M = t.support = {
                    bind: Function.prototype.bind,
                    transform: L("transform"),
                    transition: L("transition"),
                    backface: L("backface-visibility"),
                    timing: L("transition-timing-function")
                };
            if (M.transition) {
                var W = M.timing.dom;
                if (w.style[W] = p["ease-in-back"][0], !w.style[W])
                    for (var K in v) p[K][0] = v[K]
            }
            var ee = t.frame = function() {
                    var c = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                    return c && M.bind ? c.bind(I) : function(E) {
                        I.setTimeout(E, 16)
                    }
                }(),
                fe = t.now = function() {
                    var c = I.performance,
                        E = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return E && M.bind ? E.bind(c) : Date.now || function() {
                        return +new Date
                    }
                }(),
                Ne = d(function(c) {
                    function E(j, ne) {
                        var de = y(("" + j).split(F)),
                            ie = de[0];
                        ne = ne || {};
                        var Te = G[ie];
                        if (!Te) return l("Unsupported property: " + ie);
                        if (!ne.weak || !this.props[ie]) {
                            var Fe = Te[0],
                                Oe = this.props[ie];
                            return Oe || (Oe = this.props[ie] = new Fe.Bare), Oe.init(this.$el, de, Te, ne), Oe
                        }
                    }

                    function _(j, ne, de) {
                        if (j) {
                            var ie = typeof j;
                            if (ne || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ie == "number" && ne) return this.timer = new it({
                                duration: j,
                                context: this,
                                complete: R
                            }), void(this.active = !0);
                            if (ie == "string" && ne) {
                                switch (j) {
                                    case "hide":
                                        q.call(this);
                                        break;
                                    case "stop":
                                        z.call(this);
                                        break;
                                    case "redraw":
                                        Z.call(this);
                                        break;
                                    default:
                                        E.call(this, j, de && de[1])
                                }
                                return R.call(this)
                            }
                            if (ie == "function") return void j.call(this, this);
                            if (ie == "object") {
                                var Te = 0;
                                Ue.call(this, j, function(ye, Py) {
                                    ye.span > Te && (Te = ye.span), ye.stop(), ye.animate(Py)
                                }, function(ye) {
                                    "wait" in ye && (Te = u(ye.wait, 0))
                                }), he.call(this), Te > 0 && (this.timer = new it({
                                    duration: Te,
                                    context: this
                                }), this.active = !0, ne && (this.timer.complete = R));
                                var Fe = this,
                                    Oe = !1,
                                    Cn = {};
                                ee(function() {
                                    Ue.call(Fe, j, function(ye) {
                                        ye.active && (Oe = !0, Cn[ye.name] = ye.nextStyle)
                                    }), Oe && Fe.$el.css(Cn)
                                })
                            }
                        }
                    }

                    function b(j) {
                        j = u(j, 0), this.active ? this.queue.push({
                            options: j
                        }) : (this.timer = new it({
                            duration: j,
                            context: this,
                            complete: R
                        }), this.active = !0)
                    }

                    function C(j) {
                        return this.active ? (this.queue.push({
                            options: j,
                            args: arguments
                        }), void(this.timer.complete = R)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function R() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var j = this.queue.shift();
                            _.call(this, j.options, !0, j.args)
                        }
                    }

                    function z(j) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ne;
                        typeof j == "string" ? (ne = {}, ne[j] = 1) : ne = typeof j == "object" && j != null ? j : this.props, Ue.call(this, ne, Ie), he.call(this)
                    }

                    function Q(j) {
                        z.call(this, j), Ue.call(this, j, en, Ry)
                    }

                    function ue(j) {
                        typeof j != "string" && (j = "block"), this.el.style.display = j
                    }

                    function q() {
                        z.call(this), this.el.style.display = "none"
                    }

                    function Z() {
                        this.el.offsetHeight
                    }

                    function J() {
                        z.call(this), e.removeData(this.el, S), this.$el = this.el = null
                    }

                    function he() {
                        var j, ne, de = [];
                        this.upstream && de.push(this.upstream);
                        for (j in this.props) ne = this.props[j], ne.active && de.push(ne.string);
                        de = de.join(","), this.style !== de && (this.style = de, this.el.style[M.transition.dom] = de)
                    }

                    function Ue(j, ne, de) {
                        var ie, Te, Fe, Oe, Cn = ne !== Ie,
                            ye = {};
                        for (ie in j) Fe = j[ie], ie in le ? (ye.transform || (ye.transform = {}), ye.transform[ie] = Fe) : (x.test(ie) && (ie = n(ie)), ie in G ? ye[ie] = Fe : (Oe || (Oe = {}), Oe[ie] = Fe));
                        for (ie in ye) {
                            if (Fe = ye[ie], Te = this.props[ie], !Te) {
                                if (!Cn) continue;
                                Te = E.call(this, ie)
                            }
                            ne.call(this, Te, Fe)
                        }
                        de && Oe && de.call(this, Oe)
                    }

                    function Ie(j) {
                        j.stop()
                    }

                    function en(j, ne) {
                        j.set(ne)
                    }

                    function Ry(j) {
                        this.$el.css(j)
                    }

                    function Me(j, ne) {
                        c[j] = function() {
                            return this.children ? Cy.call(this, ne, arguments) : (this.el && ne.apply(this, arguments), this)
                        }
                    }

                    function Cy(j, ne) {
                        var de, ie = this.children.length;
                        for (de = 0; ie > de; de++) j.apply(this.children[de], ne);
                        return this
                    }
                    c.init = function(j) {
                        if (this.$el = e(j), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                            var ne = X(this.el, "transition");
                            ne && !B.test(ne) && (this.upstream = ne)
                        }
                        M.backface && se.hideBackface && h(this.el, M.backface.css, "hidden")
                    }, Me("add", E), Me("start", _), Me("wait", b), Me("then", C), Me("next", R), Me("stop", z), Me("set", Q), Me("show", ue), Me("hide", q), Me("redraw", Z), Me("destroy", J)
                }),
                ge = d(Ne, function(c) {
                    function E(_, b) {
                        var C = e.data(_, S) || e.data(_, S, new Ne.Bare);
                        return C.el || C.init(_), b ? C.start(b) : C
                    }
                    c.init = function(_, b) {
                        var C = e(_);
                        if (!C.length) return this;
                        if (C.length === 1) return E(C[0], b);
                        var R = [];
                        return C.each(function(z, Q) {
                            R.push(E(Q, b))
                        }), this.children = R, this
                    }
                }),
                Y = d(function(c) {
                    function E() {
                        var R = this.get();
                        this.update("auto");
                        var z = this.get();
                        return this.update(R), z
                    }

                    function _(R, z, Q) {
                        return z !== void 0 && (Q = z), R in p ? R : Q
                    }

                    function b(R) {
                        var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                        return (z ? i(z[1], z[2], z[3]) : R).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var C = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    c.init = function(R, z, Q, ue) {
                        this.$el = R, this.el = R[0];
                        var q = z[0];
                        Q[2] && (q = Q[2]), U[q] && (q = U[q]), this.name = q, this.type = Q[1], this.duration = u(z[1], this.duration, C.duration), this.ease = _(z[2], this.ease, C.ease), this.delay = u(z[3], this.delay, C.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = H.test(this.name), this.unit = ue.unit || this.unit || se.defaultUnit, this.angle = ue.angle || this.angle || se.defaultAngle, se.fallback || ue.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + F + this.duration + "ms" + (this.ease != "ease" ? F + p[this.ease][0] : "") + (this.delay ? F + this.delay + "ms" : ""))
                    }, c.set = function(R) {
                        R = this.convert(R, this.type), this.update(R), this.redraw()
                    }, c.transition = function(R) {
                        this.active = !0, R = this.convert(R, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), R == "auto" && (R = E.call(this))), this.nextStyle = R
                    }, c.fallback = function(R) {
                        var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        R = this.convert(R, this.type), this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)), R == "auto" && (R = E.call(this))), this.tween = new pt({
                            from: z,
                            to: R,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.get = function() {
                        return X(this.el, this.name)
                    }, c.update = function(R) {
                        h(this.el, this.name, R)
                    }, c.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, h(this.el, this.name, this.get()));
                        var R = this.tween;
                        R && R.context && R.destroy()
                    }, c.convert = function(R, z) {
                        if (R == "auto" && this.auto) return R;
                        var Q, ue = typeof R == "number",
                            q = typeof R == "string";
                        switch (z) {
                            case A:
                                if (ue) return R;
                                if (q && R.replace(m, "") === "") return +R;
                                Q = "number(unitless)";
                                break;
                            case N:
                                if (q) {
                                    if (R === "" && this.original) return this.original;
                                    if (z.test(R)) return R.charAt(0) == "#" && R.length == 7 ? R : b(R)
                                }
                                Q = "hex or rgb string";
                                break;
                            case D:
                                if (ue) return R + this.unit;
                                if (q && z.test(R)) return R;
                                Q = "number(px) or string(unit)";
                                break;
                            case P:
                                if (ue) return R + this.unit;
                                if (q && z.test(R)) return R;
                                Q = "number(px) or string(unit or %)";
                                break;
                            case V:
                                if (ue) return R + this.angle;
                                if (q && z.test(R)) return R;
                                Q = "number(deg) or string(angle)";
                                break;
                            case k:
                                if (ue || q && P.test(R)) return R;
                                Q = "number(unitless) or string(unit or %)"
                        }
                        return s(Q, R), R
                    }, c.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                te = d(Y, function(c, E) {
                    c.init = function() {
                        E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), N))
                    }
                }),
                Se = d(Y, function(c, E) {
                    c.init = function() {
                        E.init.apply(this, arguments), this.animate = this.fallback
                    }, c.get = function() {
                        return this.$el[this.name]()
                    }, c.update = function(_) {
                        this.$el[this.name](_)
                    }
                }),
                we = d(Y, function(c, E) {
                    function _(b, C) {
                        var R, z, Q, ue, q;
                        for (R in b) ue = le[R], Q = ue[0], z = ue[1] || R, q = this.convert(b[R], Q), C.call(this, z, q, Q)
                    }
                    c.init = function() {
                        E.init.apply(this, arguments), this.current || (this.current = {}, le.perspective && se.perspective && (this.current.perspective = se.perspective, h(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, c.set = function(b) {
                        _.call(this, b, function(C, R) {
                            this.current[C] = R
                        }), h(this.el, this.name, this.style(this.current)), this.redraw()
                    }, c.transition = function(b) {
                        var C = this.values(b);
                        this.tween = new Zt({
                            current: this.current,
                            values: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var R, z = {};
                        for (R in this.current) z[R] = R in C ? C[R] : this.current[R];
                        this.active = !0, this.nextStyle = this.style(z)
                    }, c.fallback = function(b) {
                        var C = this.values(b);
                        this.tween = new Zt({
                            current: this.current,
                            values: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.update = function() {
                        h(this.el, this.name, this.style(this.current))
                    }, c.style = function(b) {
                        var C, R = "";
                        for (C in b) R += C + "(" + b[C] + ") ";
                        return R
                    }, c.values = function(b) {
                        var C, R = {};
                        return _.call(this, b, function(z, Q, ue) {
                            R[z] = Q, this.current[z] === void 0 && (C = 0, ~z.indexOf("scale") && (C = 1), this.current[z] = this.convert(C, ue))
                        }), R
                    }
                }),
                pt = d(function(c) {
                    function E(q) {
                        Q.push(q) === 1 && ee(_)
                    }

                    function _() {
                        var q, Z, J, he = Q.length;
                        if (he)
                            for (ee(_), Z = fe(), q = he; q--;) J = Q[q], J && J.render(Z)
                    }

                    function b(q) {
                        var Z, J = e.inArray(q, Q);
                        J >= 0 && (Z = Q.slice(J + 1), Q.length = J, Z.length && (Q = Q.concat(Z)))
                    }

                    function C(q) {
                        return Math.round(q * ue) / ue
                    }

                    function R(q, Z, J) {
                        return i(q[0] + J * (Z[0] - q[0]), q[1] + J * (Z[1] - q[1]), q[2] + J * (Z[2] - q[2]))
                    }
                    var z = {
                        ease: p.ease[1],
                        from: 0,
                        to: 1
                    };
                    c.init = function(q) {
                        this.duration = q.duration || 0, this.delay = q.delay || 0;
                        var Z = q.ease || z.ease;
                        p[Z] && (Z = p[Z][1]), typeof Z != "function" && (Z = z.ease), this.ease = Z, this.update = q.update || o, this.complete = q.complete || o, this.context = q.context || this, this.name = q.name;
                        var J = q.from,
                            he = q.to;
                        J === void 0 && (J = z.from), he === void 0 && (he = z.to), this.unit = q.unit || "", typeof J == "number" && typeof he == "number" ? (this.begin = J, this.change = he - J) : this.format(he, J), this.value = this.begin + this.unit, this.start = fe(), q.autoplay !== !1 && this.play()
                    }, c.play = function() {
                        this.active || (this.start || (this.start = fe()), this.active = !0, E(this))
                    }, c.stop = function() {
                        this.active && (this.active = !1, b(this))
                    }, c.render = function(q) {
                        var Z, J = q - this.start;
                        if (this.delay) {
                            if (J <= this.delay) return;
                            J -= this.delay
                        }
                        if (J < this.duration) {
                            var he = this.ease(J, 0, 1, this.duration);
                            return Z = this.startRGB ? R(this.startRGB, this.endRGB, he) : C(this.begin + he * this.change), this.value = Z + this.unit, void this.update.call(this.context, this.value)
                        }
                        Z = this.endHex || this.begin + this.change, this.value = Z + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, c.format = function(q, Z) {
                        if (Z += "", q += "", q.charAt(0) == "#") return this.startRGB = r(Z), this.endRGB = r(q), this.endHex = q, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var J = Z.replace(m, ""),
                                he = q.replace(m, "");
                            J !== he && a("tween", Z, q), this.unit = J
                        }
                        Z = parseFloat(Z), q = parseFloat(q), this.begin = this.value = Z, this.change = q - Z
                    }, c.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var Q = [],
                        ue = 1e3
                }),
                it = d(pt, function(c) {
                    c.init = function(E) {
                        this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
                    }, c.render = function(E) {
                        var _ = E - this.start;
                        _ < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Zt = d(pt, function(c, E) {
                    c.init = function(_) {
                        this.context = _.context, this.update = _.update, this.tweens = [], this.current = _.current;
                        var b, C;
                        for (b in _.values) C = _.values[b], this.current[b] !== C && this.tweens.push(new pt({
                            name: b,
                            from: this.current[b],
                            to: C,
                            duration: _.duration,
                            delay: _.delay,
                            ease: _.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, c.render = function(_) {
                        var b, C, R = this.tweens.length,
                            z = !1;
                        for (b = R; b--;) C = this.tweens[b], C.context && (C.render(_), this.current[C.name] = C.value, z = !0);
                        return z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, c.destroy = function() {
                        if (E.destroy.call(this), this.tweens) {
                            var _, b = this.tweens.length;
                            for (_ = b; _--;) this.tweens[_].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                se = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !M.transition,
                    agentTests: []
                };
            t.fallback = function(c) {
                if (!M.transition) return se.fallback = !0;
                se.agentTests.push("(" + c + ")");
                var E = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = E.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
                return new pt(c)
            }, t.delay = function(c, E, _) {
                return new it({
                    complete: E,
                    duration: c,
                    context: _
                })
            }, e.fn.tram = function(c) {
                return t.call(null, this, c)
            };
            var h = e.style,
                X = e.css,
                U = {
                    transform: M.transform && M.transform.css
                },
                G = {
                    color: [te, N],
                    background: [te, N, "background-color"],
                    "outline-color": [te, N],
                    "border-color": [te, N],
                    "border-top-color": [te, N],
                    "border-right-color": [te, N],
                    "border-bottom-color": [te, N],
                    "border-left-color": [te, N],
                    "border-width": [Y, D],
                    "border-top-width": [Y, D],
                    "border-right-width": [Y, D],
                    "border-bottom-width": [Y, D],
                    "border-left-width": [Y, D],
                    "border-spacing": [Y, D],
                    "letter-spacing": [Y, D],
                    margin: [Y, D],
                    "margin-top": [Y, D],
                    "margin-right": [Y, D],
                    "margin-bottom": [Y, D],
                    "margin-left": [Y, D],
                    padding: [Y, D],
                    "padding-top": [Y, D],
                    "padding-right": [Y, D],
                    "padding-bottom": [Y, D],
                    "padding-left": [Y, D],
                    "outline-width": [Y, D],
                    opacity: [Y, A],
                    top: [Y, P],
                    right: [Y, P],
                    bottom: [Y, P],
                    left: [Y, P],
                    "font-size": [Y, P],
                    "text-indent": [Y, P],
                    "word-spacing": [Y, P],
                    width: [Y, P],
                    "min-width": [Y, P],
                    "max-width": [Y, P],
                    height: [Y, P],
                    "min-height": [Y, P],
                    "max-height": [Y, P],
                    "line-height": [Y, k],
                    "scroll-top": [Se, A, "scrollTop"],
                    "scroll-left": [Se, A, "scrollLeft"]
                },
                le = {};
            M.transform && (G.transform = [we], le = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }), M.transform && M.backface && (le.z = [P, "translateZ"], le.rotateZ = [V], le.scaleZ = [A], le.perspective = [D]);
            var Jt = /ms/,
                gt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ca = f((sF, ua) => {
        "use strict";
        var qy = window.$,
            Xy = Hr() && qy.tram;
        ua.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                n = Array.prototype,
                r = Object.prototype,
                i = Function.prototype,
                o = n.push,
                s = n.slice,
                a = n.concat,
                u = r.toString,
                l = r.hasOwnProperty,
                y = n.forEach,
                d = n.map,
                p = n.reduce,
                v = n.reduceRight,
                T = n.filter,
                I = n.every,
                S = n.some,
                m = n.indexOf,
                x = n.lastIndexOf,
                A = Array.isArray,
                N = Object.keys,
                D = i.bind,
                P = e.each = e.forEach = function(g, O, L) {
                    if (g == null) return g;
                    if (y && g.forEach === y) g.forEach(O, L);
                    else if (g.length === +g.length) {
                        for (var M = 0, W = g.length; M < W; M++)
                            if (O.call(L, g[M], M, g) === t) return
                    } else
                        for (var K = e.keys(g), M = 0, W = K.length; M < W; M++)
                            if (O.call(L, g[K[M]], K[M], g) === t) return;
                    return g
                };
            e.map = e.collect = function(g, O, L) {
                var M = [];
                return g == null ? M : d && g.map === d ? g.map(O, L) : (P(g, function(W, K, ee) {
                    M.push(O.call(L, W, K, ee))
                }), M)
            }, e.find = e.detect = function(g, O, L) {
                var M;
                return V(g, function(W, K, ee) {
                    if (O.call(L, W, K, ee)) return M = W, !0
                }), M
            }, e.filter = e.select = function(g, O, L) {
                var M = [];
                return g == null ? M : T && g.filter === T ? g.filter(O, L) : (P(g, function(W, K, ee) {
                    O.call(L, W, K, ee) && M.push(W)
                }), M)
            };
            var V = e.some = e.any = function(g, O, L) {
                O || (O = e.identity);
                var M = !1;
                return g == null ? M : S && g.some === S ? g.some(O, L) : (P(g, function(W, K, ee) {
                    if (M || (M = O.call(L, W, K, ee))) return t
                }), !!M)
            };
            e.contains = e.include = function(g, O) {
                return g == null ? !1 : m && g.indexOf === m ? g.indexOf(O) != -1 : V(g, function(L) {
                    return L === O
                })
            }, e.delay = function(g, O) {
                var L = s.call(arguments, 2);
                return setTimeout(function() {
                    return g.apply(null, L)
                }, O)
            }, e.defer = function(g) {
                return e.delay.apply(e, [g, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(g) {
                var O, L, M;
                return function() {
                    O || (O = !0, L = arguments, M = this, Xy.frame(function() {
                        O = !1, g.apply(M, L)
                    }))
                }
            }, e.debounce = function(g, O, L) {
                var M, W, K, ee, fe, Ne = function() {
                    var ge = e.now() - ee;
                    ge < O ? M = setTimeout(Ne, O - ge) : (M = null, L || (fe = g.apply(K, W), K = W = null))
                };
                return function() {
                    K = this, W = arguments, ee = e.now();
                    var ge = L && !M;
                    return M || (M = setTimeout(Ne, O)), ge && (fe = g.apply(K, W), K = W = null), fe
                }
            }, e.defaults = function(g) {
                if (!e.isObject(g)) return g;
                for (var O = 1, L = arguments.length; O < L; O++) {
                    var M = arguments[O];
                    for (var W in M) g[W] === void 0 && (g[W] = M[W])
                }
                return g
            }, e.keys = function(g) {
                if (!e.isObject(g)) return [];
                if (N) return N(g);
                var O = [];
                for (var L in g) e.has(g, L) && O.push(L);
                return O
            }, e.has = function(g, O) {
                return l.call(g, O)
            }, e.isObject = function(g) {
                return g === Object(g)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var k = /(.)^/,
                B = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                H = /\\|'|\r|\n|\u2028|\u2029/g,
                F = function(g) {
                    return "\\" + B[g]
                },
                w = /^\s*(\w|\$)+\s*$/;
            return e.template = function(g, O, L) {
                !O && L && (O = L), O = e.defaults({}, O, e.templateSettings);
                var M = RegExp([(O.escape || k).source, (O.interpolate || k).source, (O.evaluate || k).source].join("|") + "|$", "g"),
                    W = 0,
                    K = "__p+='";
                g.replace(M, function(ge, Y, te, Se, we) {
                    return K += g.slice(W, we).replace(H, F), W = we + ge.length, Y ? K += `'+
((__t=(` + Y + `))==null?'':_.escape(__t))+
'` : te ? K += `'+
((__t=(` + te + `))==null?'':__t)+
'` : Se && (K += `';
` + Se + `
__p+='`), ge
                }), K += `';
`;
                var ee = O.variable;
                if (ee) {
                    if (!w.test(ee)) throw new Error("variable is not a bare identifier: " + ee)
                } else K = `with(obj||{}){
` + K + `}
`, ee = "obj";
                K = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + K + `return __p;
`;
                var fe;
                try {
                    fe = new Function(O.variable || "obj", "_", K)
                } catch (ge) {
                    throw ge.source = K, ge
                }
                var Ne = function(ge) {
                    return fe.call(this, ge, e)
                };
                return Ne.source = "function(" + ee + `){
` + K + "}", Ne
            }, e
        }()
    });
    var ze = f((uF, Ea) => {
        "use strict";
        var oe = {},
            bt = {},
            At = [],
            zr = window.Webflow || [],
            ot = window.jQuery,
            Xe = ot(window),
            Gy = ot(document),
            We = ot.isFunction,
            qe = oe._ = ca(),
            fa = oe.tram = Hr() && ot.tram,
            Nn = !1,
            Kr = !1;
        fa.config.hideBackface = !1;
        fa.config.keepInherited = !0;
        oe.define = function(e, t, n) {
            bt[e] && pa(bt[e]);
            var r = bt[e] = t(ot, qe, n) || {};
            return da(r), r
        };
        oe.require = function(e) {
            return bt[e]
        };

        function da(e) {
            oe.env() && (We(e.design) && Xe.on("__wf_design", e.design), We(e.preview) && Xe.on("__wf_preview", e.preview)), We(e.destroy) && Xe.on("__wf_destroy", e.destroy), e.ready && We(e.ready) && Vy(e)
        }

        function Vy(e) {
            if (Nn) {
                e.ready();
                return
            }
            qe.contains(At, e.ready) || At.push(e.ready)
        }

        function pa(e) {
            We(e.design) && Xe.off("__wf_design", e.design), We(e.preview) && Xe.off("__wf_preview", e.preview), We(e.destroy) && Xe.off("__wf_destroy", e.destroy), e.ready && We(e.ready) && ky(e)
        }

        function ky(e) {
            At = qe.filter(At, function(t) {
                return t !== e.ready
            })
        }
        oe.push = function(e) {
            if (Nn) {
                We(e) && e();
                return
            }
            zr.push(e)
        };
        oe.env = function(e) {
            var t = window.__wf_design,
                n = typeof t < "u";
            if (!e) return n;
            if (e === "design") return n && t;
            if (e === "preview") return n && !t;
            if (e === "slug") return n && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Ln = navigator.userAgent.toLowerCase(),
            ga = oe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            By = oe.env.chrome = /chrome/.test(Ln) && /Google/.test(navigator.vendor) && parseInt(Ln.match(/chrome\/(\d+)\./)[1], 10),
            Uy = oe.env.ios = /(ipod|iphone|ipad)/.test(Ln);
        oe.env.safari = /safari/.test(Ln) && !By && !Uy;
        var Wr;
        ga && Gy.on("touchstart mousedown", function(e) {
            Wr = e.target
        });
        oe.validClick = ga ? function(e) {
            return e === Wr || ot.contains(e, Wr)
        } : function() {
            return !0
        };
        var ha = "resize.webflow orientationchange.webflow load.webflow",
            Hy = "scroll.webflow " + ha;
        oe.resize = jr(Xe, ha);
        oe.scroll = jr(Xe, Hy);
        oe.redraw = jr();

        function jr(e, t) {
            var n = [],
                r = {};
            return r.up = qe.throttle(function(i) {
                qe.each(n, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, r.up), r.on = function(i) {
                typeof i == "function" && (qe.contains(n, i) || n.push(i))
            }, r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = qe.filter(n, function(o) {
                    return o !== i
                })
            }, r
        }
        oe.location = function(e) {
            window.location = e
        };
        oe.env() && (oe.location = function() {});
        oe.ready = function() {
            Nn = !0, Kr ? Wy() : qe.each(At, la), qe.each(zr, la), oe.resize.up()
        };

        function la(e) {
            We(e) && e()
        }

        function Wy() {
            Kr = !1, qe.each(bt, da)
        }
        var ht;
        oe.load = function(e) {
            ht.then(e)
        };

        function ya() {
            ht && (ht.reject(), Xe.off("load", ht.resolve)), ht = new ot.Deferred, Xe.on("load", ht.resolve)
        }
        oe.destroy = function(e) {
            e = e || {}, Kr = !0, Xe.triggerHandler("__wf_destroy"), e.domready != null && (Nn = e.domready), qe.each(bt, pa), oe.resize.off(), oe.scroll.off(), oe.redraw.off(), At = [], zr = [], ht.state() === "pending" && ya()
        };
        ot(oe.ready);
        ya();
        Ea.exports = window.Webflow = oe
    });
    var _a = f((cF, ma) => {
        "use strict";
        var va = ze();
        va.define("brand", ma.exports = function(e) {
            var t = {},
                n = document,
                r = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var v = r.attr("data-wf-status"),
                    T = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && s.hostname !== T && (v = !0), v && !a && (l = l || d(), p(), setTimeout(p, 500), e(n).off(u, y).on(u, y))
            };

            function y() {
                var v = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", v ? "display: none !important;" : "")
            }

            function d() {
                var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return v.append(T, I), v[0]
            }

            function p() {
                var v = i.children(o),
                    T = v.length && v.get(0) === l,
                    I = va.env("editor");
                if (T) {
                    I && v.remove();
                    return
                }
                v.length && v.remove(), I || i.append(l)
            }
            return t
        })
    });
    var Ta = f((lF, Ia) => {
        "use strict";
        var zy = ze();
        zy.define("focus-visible", Ia.exports = function() {
            function e(n) {
                var r = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var N = A.type,
                        D = A.tagName;
                    return !!(D === "INPUT" && s[N] && !A.readOnly || D === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function l(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function y(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function d(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (a(n.activeElement) && l(n.activeElement), r = !0)
                }

                function p() {
                    r = !1
                }

                function v(A) {
                    a(A.target) && (r || u(A.target)) && l(A.target)
                }

                function T(A) {
                    a(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), y(A.target))
                }

                function I() {
                    document.visibilityState === "hidden" && (i && (r = !0), S())
                }

                function S() {
                    document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
                }

                function m() {
                    document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
                }

                function x(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (r = !1, m())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", p, !0), document.addEventListener("pointerdown", p, !0), document.addEventListener("touchstart", p, !0), document.addEventListener("visibilitychange", I, !0), S(), n.addEventListener("focus", v, !0), n.addEventListener("blur", T, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Sa = f((fF, Aa) => {
        "use strict";
        var ba = ze();
        ba.define("focus", Aa.exports = function() {
            var e = [],
                t = !1;

            function n(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function r(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                r(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ba.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        })
    });
    var xa = f((dF, Oa) => {
        "use strict";
        var Yr = window.jQuery,
            Ke = {},
            Dn = [],
            wa = ".w-ix",
            Mn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Yr(t).triggerHandler(Ke.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Yr(t).triggerHandler(Ke.types.OUTRO))
                }
            };
        Ke.triggers = {};
        Ke.types = {
            INTRO: "w-ix-intro" + wa,
            OUTRO: "w-ix-outro" + wa
        };
        Ke.init = function() {
            for (var e = Dn.length, t = 0; t < e; t++) {
                var n = Dn[t];
                n[0](0, n[1])
            }
            Dn = [], Yr.extend(Ke.triggers, Mn)
        };
        Ke.async = function() {
            for (var e in Mn) {
                var t = Mn[e];
                Mn.hasOwnProperty(e) && (Ke.triggers[e] = function(n, r) {
                    Dn.push([t, r])
                })
            }
        };
        Ke.async();
        Oa.exports = Ke
    });
    var qn = f((pF, Pa) => {
        "use strict";
        var Qr = xa();

        function Ra(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
        }
        var Ky = window.jQuery,
            Fn = {},
            Ca = ".w-ix",
            jy = {
                reset: function(e, t) {
                    Qr.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Qr.triggers.intro(e, t), Ra(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Qr.triggers.outro(e, t), Ra(t, "COMPONENT_INACTIVE")
                }
            };
        Fn.triggers = {};
        Fn.types = {
            INTRO: "w-ix-intro" + Ca,
            OUTRO: "w-ix-outro" + Ca
        };
        Ky.extend(Fn.triggers, jy);
        Pa.exports = Fn
    });
    var $r = f((gF, La) => {
        var Yy = typeof global == "object" && global && global.Object === Object && global;
        La.exports = Yy
    });
    var Ge = f((hF, Na) => {
        var Qy = $r(),
            $y = typeof self == "object" && self && self.Object === Object && self,
            Zy = Qy || $y || Function("return this")();
        Na.exports = Zy
    });
    var St = f((yF, Da) => {
        var Jy = Ge(),
            eE = Jy.Symbol;
        Da.exports = eE
    });
    var Xa = f((EF, qa) => {
        var Ma = St(),
            Fa = Object.prototype,
            tE = Fa.hasOwnProperty,
            nE = Fa.toString,
            tn = Ma ? Ma.toStringTag : void 0;

        function rE(e) {
            var t = tE.call(e, tn),
                n = e[tn];
            try {
                e[tn] = void 0;
                var r = !0
            } catch {}
            var i = nE.call(e);
            return r && (t ? e[tn] = n : delete e[tn]), i
        }
        qa.exports = rE
    });
    var Va = f((vF, Ga) => {
        var iE = Object.prototype,
            oE = iE.toString;

        function aE(e) {
            return oE.call(e)
        }
        Ga.exports = aE
    });
    var at = f((mF, Ua) => {
        var ka = St(),
            sE = Xa(),
            uE = Va(),
            cE = "[object Null]",
            lE = "[object Undefined]",
            Ba = ka ? ka.toStringTag : void 0;

        function fE(e) {
            return e == null ? e === void 0 ? lE : cE : Ba && Ba in Object(e) ? sE(e) : uE(e)
        }
        Ua.exports = fE
    });
    var Zr = f((_F, Ha) => {
        function dE(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        Ha.exports = dE
    });
    var Jr = f((IF, Wa) => {
        var pE = Zr(),
            gE = pE(Object.getPrototypeOf, Object);
        Wa.exports = gE
    });
    var Je = f((TF, za) => {
        function hE(e) {
            return e != null && typeof e == "object"
        }
        za.exports = hE
    });
    var ei = f((bF, ja) => {
        var yE = at(),
            EE = Jr(),
            vE = Je(),
            mE = "[object Object]",
            _E = Function.prototype,
            IE = Object.prototype,
            Ka = _E.toString,
            TE = IE.hasOwnProperty,
            bE = Ka.call(Object);

        function AE(e) {
            if (!vE(e) || yE(e) != mE) return !1;
            var t = EE(e);
            if (t === null) return !0;
            var n = TE.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && Ka.call(n) == bE
        }
        ja.exports = AE
    });
    var Ya = f(ti => {
        "use strict";
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.default = SE;

        function SE(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }
    });
    var Qa = f((ri, ni) => {
        "use strict";
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        var wE = Ya(),
            OE = xE(wE);

        function xE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var wt;
        typeof self < "u" ? wt = self : typeof window < "u" ? wt = window : typeof global < "u" ? wt = global : typeof ni < "u" ? wt = ni : wt = Function("return this")();
        var RE = (0, OE.default)(wt);
        ri.default = RE
    });
    var ii = f(nn => {
        "use strict";
        nn.__esModule = !0;
        nn.ActionTypes = void 0;
        nn.default = es;
        var CE = ei(),
            PE = Ja(CE),
            LE = Qa(),
            $a = Ja(LE);

        function Ja(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Za = nn.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function es(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
                if (typeof n != "function") throw new Error("Expected the enhancer to be a function.");
                return n(es)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function l() {
                a === s && (a = s.slice())
            }

            function y() {
                return o
            }

            function d(I) {
                if (typeof I != "function") throw new Error("Expected listener to be a function.");
                var S = !0;
                return l(), a.push(I),
                    function() {
                        if (S) {
                            S = !1, l();
                            var x = a.indexOf(I);
                            a.splice(x, 1)
                        }
                    }
            }

            function p(I) {
                if (!(0, PE.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, I)
                } finally {
                    u = !1
                }
                for (var S = s = a, m = 0; m < S.length; m++) S[m]();
                return I
            }

            function v(I) {
                if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
                i = I, p({
                    type: Za.INIT
                })
            }

            function T() {
                var I, S = d;
                return I = {
                    subscribe: function(x) {
                        if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            x.next && x.next(y())
                        }
                        A();
                        var N = S(A);
                        return {
                            unsubscribe: N
                        }
                    }
                }, I[$a.default] = function() {
                    return this
                }, I
            }
            return p({
                type: Za.INIT
            }), r = {
                dispatch: p,
                subscribe: d,
                getState: y,
                replaceReducer: v
            }, r[$a.default] = T, r
        }
    });
    var ai = f(oi => {
        "use strict";
        oi.__esModule = !0;
        oi.default = NE;

        function NE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var rs = f(si => {
        "use strict";
        si.__esModule = !0;
        si.default = XE;
        var ts = ii(),
            DE = ei(),
            OF = ns(DE),
            ME = ai(),
            xF = ns(ME);

        function ns(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function FE(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function qE(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, {
                        type: ts.ActionTypes.INIT
                    });
                if (typeof r > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ts.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function XE(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1) var s;
            var a;
            try {
                qE(n)
            } catch (u) {
                a = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    y = arguments[1];
                if (a) throw a;
                if (!1) var d;
                for (var p = !1, v = {}, T = 0; T < o.length; T++) {
                    var I = o[T],
                        S = n[I],
                        m = l[I],
                        x = S(m, y);
                    if (typeof x > "u") {
                        var A = FE(I, y);
                        throw new Error(A)
                    }
                    v[I] = x, p = p || x !== m
                }
                return p ? v : l
            }
        }
    });
    var os = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = GE;

        function is(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function GE(e, t) {
            if (typeof e == "function") return is(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i],
                    s = e[o];
                typeof s == "function" && (r[o] = is(s, t))
            }
            return r
        }
    });
    var li = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = VE;

        function VE() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var r = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, r.apply(void 0, arguments))
            }
        }
    });
    var as = f(fi => {
        "use strict";
        fi.__esModule = !0;
        var kE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        fi.default = WE;
        var BE = li(),
            UE = HE(BE);

        function HE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function WE() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(r) {
                return function(i, o, s) {
                    var a = r(i, o, s),
                        u = a.dispatch,
                        l = [],
                        y = {
                            getState: a.getState,
                            dispatch: function(p) {
                                return u(p)
                            }
                        };
                    return l = t.map(function(d) {
                        return d(y)
                    }), u = UE.default.apply(void 0, l)(a.dispatch), kE({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var di = f(De => {
        "use strict";
        De.__esModule = !0;
        De.compose = De.applyMiddleware = De.bindActionCreators = De.combineReducers = De.createStore = void 0;
        var zE = ii(),
            KE = Ot(zE),
            jE = rs(),
            YE = Ot(jE),
            QE = os(),
            $E = Ot(QE),
            ZE = as(),
            JE = Ot(ZE),
            ev = li(),
            tv = Ot(ev),
            nv = ai(),
            NF = Ot(nv);

        function Ot(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        De.createStore = KE.default;
        De.combineReducers = YE.default;
        De.bindActionCreators = $E.default;
        De.applyMiddleware = JE.default;
        De.compose = tv.default
    });
    var Ve, pi, je, rv, iv, Xn, ov, gi = ce(() => {
        "use strict";
        Ve = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, pi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, rv = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, iv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Xn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, ov = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Re, av, Gn = ce(() => {
        "use strict";
        Re = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, av = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var sv, ss = ce(() => {
        "use strict";
        sv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var uv, cv, lv, fv, dv, pv, gv, hi, us = ce(() => {
        "use strict";
        Gn();
        ({
            TRANSFORM_MOVE: uv,
            TRANSFORM_SCALE: cv,
            TRANSFORM_ROTATE: lv,
            TRANSFORM_SKEW: fv,
            STYLE_SIZE: dv,
            STYLE_FILTER: pv,
            STYLE_FONT_VARIATION: gv
        } = Re), hi = {
            [uv]: !0,
            [cv]: !0,
            [lv]: !0,
            [fv]: !0,
            [dv]: !0,
            [pv]: !0,
            [gv]: !0
        }
    });
    var Ee = {};
    xe(Ee, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Pv,
        IX2_ANIMATION_FRAME_CHANGED: () => Sv,
        IX2_CLEAR_REQUESTED: () => Tv,
        IX2_ELEMENT_STATE_CHANGED: () => Cv,
        IX2_EVENT_LISTENER_ADDED: () => bv,
        IX2_EVENT_STATE_CHANGED: () => Av,
        IX2_INSTANCE_ADDED: () => Ov,
        IX2_INSTANCE_REMOVED: () => Rv,
        IX2_INSTANCE_STARTED: () => xv,
        IX2_MEDIA_QUERIES_DEFINED: () => Nv,
        IX2_PARAMETER_CHANGED: () => wv,
        IX2_PLAYBACK_REQUESTED: () => _v,
        IX2_PREVIEW_REQUESTED: () => mv,
        IX2_RAW_DATA_IMPORTED: () => hv,
        IX2_SESSION_INITIALIZED: () => yv,
        IX2_SESSION_STARTED: () => Ev,
        IX2_SESSION_STOPPED: () => vv,
        IX2_STOP_REQUESTED: () => Iv,
        IX2_TEST_FRAME_RENDERED: () => Dv,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Lv
    });
    var hv, yv, Ev, vv, mv, _v, Iv, Tv, bv, Av, Sv, wv, Ov, xv, Rv, Cv, Pv, Lv, Nv, Dv, cs = ce(() => {
        "use strict";
        hv = "IX2_RAW_DATA_IMPORTED", yv = "IX2_SESSION_INITIALIZED", Ev = "IX2_SESSION_STARTED", vv = "IX2_SESSION_STOPPED", mv = "IX2_PREVIEW_REQUESTED", _v = "IX2_PLAYBACK_REQUESTED", Iv = "IX2_STOP_REQUESTED", Tv = "IX2_CLEAR_REQUESTED", bv = "IX2_EVENT_LISTENER_ADDED", Av = "IX2_EVENT_STATE_CHANGED", Sv = "IX2_ANIMATION_FRAME_CHANGED", wv = "IX2_PARAMETER_CHANGED", Ov = "IX2_INSTANCE_ADDED", xv = "IX2_INSTANCE_STARTED", Rv = "IX2_INSTANCE_REMOVED", Cv = "IX2_ELEMENT_STATE_CHANGED", Pv = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Lv = "IX2_VIEWPORT_WIDTH_CHANGED", Nv = "IX2_MEDIA_QUERIES_DEFINED", Dv = "IX2_TEST_FRAME_RENDERED"
    });
    var _e = {};
    xe(_e, {
        ABSTRACT_NODE: () => Lm,
        AUTO: () => Im,
        BACKGROUND: () => hm,
        BACKGROUND_COLOR: () => gm,
        BAR_DELIMITER: () => Am,
        BORDER_COLOR: () => ym,
        BOUNDARY_SELECTOR: () => Gv,
        CHILDREN: () => Sm,
        COLON_DELIMITER: () => bm,
        COLOR: () => Em,
        COMMA_DELIMITER: () => Tm,
        CONFIG_UNIT: () => Kv,
        CONFIG_VALUE: () => Uv,
        CONFIG_X_UNIT: () => Hv,
        CONFIG_X_VALUE: () => Vv,
        CONFIG_Y_UNIT: () => Wv,
        CONFIG_Y_VALUE: () => kv,
        CONFIG_Z_UNIT: () => zv,
        CONFIG_Z_VALUE: () => Bv,
        DISPLAY: () => vm,
        FILTER: () => lm,
        FLEX: () => mm,
        FONT_VARIATION_SETTINGS: () => fm,
        HEIGHT: () => pm,
        HTML_ELEMENT: () => Cm,
        IMMEDIATE_CHILDREN: () => wm,
        IX2_ID_DELIMITER: () => Mv,
        OPACITY: () => cm,
        PARENT: () => xm,
        PLAIN_OBJECT: () => Pm,
        PRESERVE_3D: () => Rm,
        RENDER_GENERAL: () => Dm,
        RENDER_PLUGIN: () => Fm,
        RENDER_STYLE: () => Mm,
        RENDER_TRANSFORM: () => Nm,
        ROTATE_X: () => rm,
        ROTATE_Y: () => im,
        ROTATE_Z: () => om,
        SCALE_3D: () => nm,
        SCALE_X: () => Jv,
        SCALE_Y: () => em,
        SCALE_Z: () => tm,
        SIBLINGS: () => Om,
        SKEW: () => am,
        SKEW_X: () => sm,
        SKEW_Y: () => um,
        TRANSFORM: () => jv,
        TRANSLATE_3D: () => Zv,
        TRANSLATE_X: () => Yv,
        TRANSLATE_Y: () => Qv,
        TRANSLATE_Z: () => $v,
        WF_PAGE: () => Fv,
        WIDTH: () => dm,
        WILL_CHANGE: () => _m,
        W_MOD_IX: () => Xv,
        W_MOD_JS: () => qv
    });
    var Mv, Fv, qv, Xv, Gv, Vv, kv, Bv, Uv, Hv, Wv, zv, Kv, jv, Yv, Qv, $v, Zv, Jv, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, ym, Em, vm, mm, _m, Im, Tm, bm, Am, Sm, wm, Om, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, ls = ce(() => {
        "use strict";
        Mv = "|", Fv = "data-wf-page", qv = "w-mod-js", Xv = "w-mod-ix", Gv = ".w-dyn-item", Vv = "xValue", kv = "yValue", Bv = "zValue", Uv = "value", Hv = "xUnit", Wv = "yUnit", zv = "zUnit", Kv = "unit", jv = "transform", Yv = "translateX", Qv = "translateY", $v = "translateZ", Zv = "translate3d", Jv = "scaleX", em = "scaleY", tm = "scaleZ", nm = "scale3d", rm = "rotateX", im = "rotateY", om = "rotateZ", am = "skew", sm = "skewX", um = "skewY", cm = "opacity", lm = "filter", fm = "font-variation-settings", dm = "width", pm = "height", gm = "backgroundColor", hm = "background", ym = "borderColor", Em = "color", vm = "display", mm = "flex", _m = "willChange", Im = "AUTO", Tm = ",", bm = ":", Am = "|", Sm = "CHILDREN", wm = "IMMEDIATE_CHILDREN", Om = "SIBLINGS", xm = "PARENT", Rm = "preserve-3d", Cm = "HTML_ELEMENT", Pm = "PLAIN_OBJECT", Lm = "ABSTRACT_NODE", Nm = "RENDER_TRANSFORM", Dm = "RENDER_GENERAL", Mm = "RENDER_STYLE", Fm = "RENDER_PLUGIN"
    });
    var fs = {};
    xe(fs, {
        ActionAppliesTo: () => av,
        ActionTypeConsts: () => Re,
        EventAppliesTo: () => pi,
        EventBasedOn: () => je,
        EventContinuousMouseAxes: () => rv,
        EventLimitAffectedElements: () => iv,
        EventTypeConsts: () => Ve,
        IX2EngineActionTypes: () => Ee,
        IX2EngineConstants: () => _e,
        InteractionTypeConsts: () => sv,
        QuickEffectDirectionConsts: () => ov,
        QuickEffectIds: () => Xn,
        ReducedMotionTypes: () => hi
    });
    var Ce = ce(() => {
        "use strict";
        gi();
        Gn();
        ss();
        us();
        cs();
        ls();
        Gn();
        gi()
    });
    var qm, ds, ps = ce(() => {
        "use strict";
        Ce();
        ({
            IX2_RAW_DATA_IMPORTED: qm
        } = Ee), ds = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case qm:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var xt = f(pe => {
        "use strict";
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        var Xm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        pe.clone = kn;
        pe.addLast = ys;
        pe.addFirst = Es;
        pe.removeLast = vs;
        pe.removeFirst = ms;
        pe.insert = _s;
        pe.removeAt = Is;
        pe.replaceAt = Ts;
        pe.getIn = Bn;
        pe.set = Un;
        pe.setIn = Hn;
        pe.update = As;
        pe.updateIn = Ss;
        pe.merge = ws;
        pe.mergeDeep = Os;
        pe.mergeIn = xs;
        pe.omit = Rs;
        pe.addDefaults = Cs;
        var gs = "INVALID_ARGS";

        function hs(e) {
            throw new Error(e)
        }

        function yi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Gm = {}.hasOwnProperty;

        function kn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = yi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }

        function Pe(e, t, n) {
            var r = n;
            r == null && hs(gs);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l != null) {
                    var y = yi(l);
                    if (y.length)
                        for (var d = 0; d <= y.length; d++) {
                            var p = y[d];
                            if (!(e && r[p] !== void 0)) {
                                var v = l[p];
                                t && Vn(r[p]) && Vn(v) && (v = Pe(e, t, r[p], v)), !(v === void 0 || v === r[p]) && (i || (i = !0, r = kn(r)), r[p] = v)
                            }
                        }
                }
            }
            return r
        }

        function Vn(e) {
            var t = typeof e > "u" ? "undefined" : Xm(e);
            return e != null && (t === "object" || t === "function")
        }

        function ys(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Es(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function vs(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function ms(e) {
            return e.length ? e.slice(1) : e
        }

        function _s(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }

        function Is(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ts(e, t, n) {
            if (e[t] === n) return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
            return i[t] = n, i
        }

        function Bn(e, t) {
            if (!Array.isArray(t) && hs(gs), e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n ? .[i], n === void 0) return n
                }
                return n
            }
        }

        function Un(e, t, n) {
            var r = typeof t == "number" ? [] : {},
                i = e ? ? r;
            if (i[t] === n) return i;
            var o = kn(i);
            return o[t] = n, o
        }

        function bs(e, t, n, r) {
            var i = void 0,
                o = t[r];
            if (r === t.length - 1) i = n;
            else {
                var s = Vn(e) && Vn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = bs(s, t, n, r + 1)
            }
            return Un(e, o, i)
        }

        function Hn(e, t, n) {
            return t.length ? bs(e, t, n, 0) : n
        }

        function As(e, t, n) {
            var r = e ? .[t],
                i = n(r);
            return Un(e, t, i)
        }

        function Ss(e, t, n) {
            var r = Bn(e, t),
                i = n(r);
            return Hn(e, t, i)
        }

        function ws(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !1, !1, e, t, n, r, i, o].concat(a)) : Pe(!1, !1, e, t, n, r, i, o)
        }

        function Os(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !1, !0, e, t, n, r, i, o].concat(a)) : Pe(!1, !0, e, t, n, r, i, o)
        }

        function xs(e, t, n, r, i, o, s) {
            var a = Bn(e, t);
            a == null && (a = {});
            for (var u = void 0, l = arguments.length, y = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) y[d - 7] = arguments[d];
            return y.length ? u = Pe.call.apply(Pe, [null, !1, !1, a, n, r, i, o, s].concat(y)) : u = Pe(!1, !1, a, n, r, i, o, s), Hn(e, t, u)
        }

        function Rs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (Gm.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r) return e;
            for (var o = {}, s = yi(e), a = 0; a < s.length; a++) {
                var u = s[a];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Cs(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Pe.call.apply(Pe, [null, !0, !1, e, t, n, r, i, o].concat(a)) : Pe(!0, !1, e, t, n, r, i, o)
        }
        var Vm = {
            clone: kn,
            addLast: ys,
            addFirst: Es,
            removeLast: vs,
            removeFirst: ms,
            insert: _s,
            removeAt: Is,
            replaceAt: Ts,
            getIn: Bn,
            set: Un,
            setIn: Hn,
            update: As,
            updateIn: Ss,
            merge: ws,
            mergeDeep: Os,
            mergeIn: xs,
            omit: Rs,
            addDefaults: Cs
        };
        pe.default = Vm
    });
    var Ls, km, Bm, Um, Hm, Wm, Ps, Ns, Ds = ce(() => {
        "use strict";
        Ce();
        Ls = re(xt()), {
            IX2_PREVIEW_REQUESTED: km,
            IX2_PLAYBACK_REQUESTED: Bm,
            IX2_STOP_REQUESTED: Um,
            IX2_CLEAR_REQUESTED: Hm
        } = Ee, Wm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Ps = Object.create(null, {
            [km]: {
                value: "preview"
            },
            [Bm]: {
                value: "playback"
            },
            [Um]: {
                value: "stop"
            },
            [Hm]: {
                value: "clear"
            }
        }), Ns = (e = Wm, t) => {
            if (t.type in Ps) {
                let n = [Ps[t.type]];
                return (0, Ls.setIn)(e, [n], { ...t.payload
                })
            }
            return e
        }
    });
    var be, zm, Km, jm, Ym, Qm, $m, Zm, Jm, e_, t_, Ms, n_, Fs, qs = ce(() => {
        "use strict";
        Ce();
        be = re(xt()), {
            IX2_SESSION_INITIALIZED: zm,
            IX2_SESSION_STARTED: Km,
            IX2_TEST_FRAME_RENDERED: jm,
            IX2_SESSION_STOPPED: Ym,
            IX2_EVENT_LISTENER_ADDED: Qm,
            IX2_EVENT_STATE_CHANGED: $m,
            IX2_ANIMATION_FRAME_CHANGED: Zm,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Jm,
            IX2_VIEWPORT_WIDTH_CHANGED: e_,
            IX2_MEDIA_QUERIES_DEFINED: t_
        } = Ee, Ms = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, n_ = 20, Fs = (e = Ms, t) => {
            switch (t.type) {
                case zm:
                    {
                        let {
                            hasBoundaryNodes: n,
                            reducedMotion: r
                        } = t.payload;
                        return (0, be.merge)(e, {
                            hasBoundaryNodes: n,
                            reducedMotion: r
                        })
                    }
                case Km:
                    return (0, be.set)(e, "active", !0);
                case jm:
                    {
                        let {
                            payload: {
                                step: n = n_
                            }
                        } = t;
                        return (0, be.set)(e, "tick", e.tick + n)
                    }
                case Ym:
                    return Ms;
                case Zm:
                    {
                        let {
                            payload: {
                                now: n
                            }
                        } = t;
                        return (0, be.set)(e, "tick", n)
                    }
                case Qm:
                    {
                        let n = (0, be.addLast)(e.eventListeners, t.payload);
                        return (0, be.set)(e, "eventListeners", n)
                    }
                case $m:
                    {
                        let {
                            stateKey: n,
                            newState: r
                        } = t.payload;
                        return (0, be.setIn)(e, ["eventState", n], r)
                    }
                case Jm:
                    {
                        let {
                            actionListId: n,
                            isPlaying: r
                        } = t.payload;
                        return (0, be.setIn)(e, ["playbackState", n], r)
                    }
                case e_:
                    {
                        let {
                            width: n,
                            mediaQueries: r
                        } = t.payload,
                        i = r.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: l
                            } = r[s];
                            if (n >= u && n <= l) {
                                o = a;
                                break
                            }
                        }
                        return (0, be.merge)(e, {
                            viewportWidth: n,
                            mediaQueryKey: o
                        })
                    }
                case t_:
                    return (0, be.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Gs = f((JF, Xs) => {
        function r_() {
            this.__data__ = [], this.size = 0
        }
        Xs.exports = r_
    });
    var Wn = f((e2, Vs) => {
        function i_(e, t) {
            return e === t || e !== e && t !== t
        }
        Vs.exports = i_
    });
    var rn = f((t2, ks) => {
        var o_ = Wn();

        function a_(e, t) {
            for (var n = e.length; n--;)
                if (o_(e[n][0], t)) return n;
            return -1
        }
        ks.exports = a_
    });
    var Us = f((n2, Bs) => {
        var s_ = rn(),
            u_ = Array.prototype,
            c_ = u_.splice;

        function l_(e) {
            var t = this.__data__,
                n = s_(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : c_.call(t, n, 1), --this.size, !0
        }
        Bs.exports = l_
    });
    var Ws = f((r2, Hs) => {
        var f_ = rn();

        function d_(e) {
            var t = this.__data__,
                n = f_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        Hs.exports = d_
    });
    var Ks = f((i2, zs) => {
        var p_ = rn();

        function g_(e) {
            return p_(this.__data__, e) > -1
        }
        zs.exports = g_
    });
    var Ys = f((o2, js) => {
        var h_ = rn();

        function y_(e, t) {
            var n = this.__data__,
                r = h_(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }
        js.exports = y_
    });
    var on = f((a2, Qs) => {
        var E_ = Gs(),
            v_ = Us(),
            m_ = Ws(),
            __ = Ks(),
            I_ = Ys();

        function Rt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Rt.prototype.clear = E_;
        Rt.prototype.delete = v_;
        Rt.prototype.get = m_;
        Rt.prototype.has = __;
        Rt.prototype.set = I_;
        Qs.exports = Rt
    });
    var Zs = f((s2, $s) => {
        var T_ = on();

        function b_() {
            this.__data__ = new T_, this.size = 0
        }
        $s.exports = b_
    });
    var eu = f((u2, Js) => {
        function A_(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
        Js.exports = A_
    });
    var nu = f((c2, tu) => {
        function S_(e) {
            return this.__data__.get(e)
        }
        tu.exports = S_
    });
    var iu = f((l2, ru) => {
        function w_(e) {
            return this.__data__.has(e)
        }
        ru.exports = w_
    });
    var Ye = f((f2, ou) => {
        function O_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        ou.exports = O_
    });
    var Ei = f((d2, au) => {
        var x_ = at(),
            R_ = Ye(),
            C_ = "[object AsyncFunction]",
            P_ = "[object Function]",
            L_ = "[object GeneratorFunction]",
            N_ = "[object Proxy]";

        function D_(e) {
            if (!R_(e)) return !1;
            var t = x_(e);
            return t == P_ || t == L_ || t == C_ || t == N_
        }
        au.exports = D_
    });
    var uu = f((p2, su) => {
        var M_ = Ge(),
            F_ = M_["__core-js_shared__"];
        su.exports = F_
    });
    var fu = f((g2, lu) => {
        var vi = uu(),
            cu = function() {
                var e = /[^.]+$/.exec(vi && vi.keys && vi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function q_(e) {
            return !!cu && cu in e
        }
        lu.exports = q_
    });
    var mi = f((h2, du) => {
        var X_ = Function.prototype,
            G_ = X_.toString;

        function V_(e) {
            if (e != null) {
                try {
                    return G_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        du.exports = V_
    });
    var gu = f((y2, pu) => {
        var k_ = Ei(),
            B_ = fu(),
            U_ = Ye(),
            H_ = mi(),
            W_ = /[\\^$.*+?()[\]{}|]/g,
            z_ = /^\[object .+?Constructor\]$/,
            K_ = Function.prototype,
            j_ = Object.prototype,
            Y_ = K_.toString,
            Q_ = j_.hasOwnProperty,
            $_ = RegExp("^" + Y_.call(Q_).replace(W_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Z_(e) {
            if (!U_(e) || B_(e)) return !1;
            var t = k_(e) ? $_ : z_;
            return t.test(H_(e))
        }
        pu.exports = Z_
    });
    var yu = f((E2, hu) => {
        function J_(e, t) {
            return e ? .[t]
        }
        hu.exports = J_
    });
    var st = f((v2, Eu) => {
        var eI = gu(),
            tI = yu();

        function nI(e, t) {
            var n = tI(e, t);
            return eI(n) ? n : void 0
        }
        Eu.exports = nI
    });
    var zn = f((m2, vu) => {
        var rI = st(),
            iI = Ge(),
            oI = rI(iI, "Map");
        vu.exports = oI
    });
    var an = f((_2, mu) => {
        var aI = st(),
            sI = aI(Object, "create");
        mu.exports = sI
    });
    var Tu = f((I2, Iu) => {
        var _u = an();

        function uI() {
            this.__data__ = _u ? _u(null) : {}, this.size = 0
        }
        Iu.exports = uI
    });
    var Au = f((T2, bu) => {
        function cI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        bu.exports = cI
    });
    var wu = f((b2, Su) => {
        var lI = an(),
            fI = "__lodash_hash_undefined__",
            dI = Object.prototype,
            pI = dI.hasOwnProperty;

        function gI(e) {
            var t = this.__data__;
            if (lI) {
                var n = t[e];
                return n === fI ? void 0 : n
            }
            return pI.call(t, e) ? t[e] : void 0
        }
        Su.exports = gI
    });
    var xu = f((A2, Ou) => {
        var hI = an(),
            yI = Object.prototype,
            EI = yI.hasOwnProperty;

        function vI(e) {
            var t = this.__data__;
            return hI ? t[e] !== void 0 : EI.call(t, e)
        }
        Ou.exports = vI
    });
    var Cu = f((S2, Ru) => {
        var mI = an(),
            _I = "__lodash_hash_undefined__";

        function II(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = mI && t === void 0 ? _I : t, this
        }
        Ru.exports = II
    });
    var Lu = f((w2, Pu) => {
        var TI = Tu(),
            bI = Au(),
            AI = wu(),
            SI = xu(),
            wI = Cu();

        function Ct(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Ct.prototype.clear = TI;
        Ct.prototype.delete = bI;
        Ct.prototype.get = AI;
        Ct.prototype.has = SI;
        Ct.prototype.set = wI;
        Pu.exports = Ct
    });
    var Mu = f((O2, Du) => {
        var Nu = Lu(),
            OI = on(),
            xI = zn();

        function RI() {
            this.size = 0, this.__data__ = {
                hash: new Nu,
                map: new(xI || OI),
                string: new Nu
            }
        }
        Du.exports = RI
    });
    var qu = f((x2, Fu) => {
        function CI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Fu.exports = CI
    });
    var sn = f((R2, Xu) => {
        var PI = qu();

        function LI(e, t) {
            var n = e.__data__;
            return PI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        Xu.exports = LI
    });
    var Vu = f((C2, Gu) => {
        var NI = sn();

        function DI(e) {
            var t = NI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Gu.exports = DI
    });
    var Bu = f((P2, ku) => {
        var MI = sn();

        function FI(e) {
            return MI(this, e).get(e)
        }
        ku.exports = FI
    });
    var Hu = f((L2, Uu) => {
        var qI = sn();

        function XI(e) {
            return qI(this, e).has(e)
        }
        Uu.exports = XI
    });
    var zu = f((N2, Wu) => {
        var GI = sn();

        function VI(e, t) {
            var n = GI(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }
        Wu.exports = VI
    });
    var Kn = f((D2, Ku) => {
        var kI = Mu(),
            BI = Vu(),
            UI = Bu(),
            HI = Hu(),
            WI = zu();

        function Pt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Pt.prototype.clear = kI;
        Pt.prototype.delete = BI;
        Pt.prototype.get = UI;
        Pt.prototype.has = HI;
        Pt.prototype.set = WI;
        Ku.exports = Pt
    });
    var Yu = f((M2, ju) => {
        var zI = on(),
            KI = zn(),
            jI = Kn(),
            YI = 200;

        function QI(e, t) {
            var n = this.__data__;
            if (n instanceof zI) {
                var r = n.__data__;
                if (!KI || r.length < YI - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new jI(r)
            }
            return n.set(e, t), this.size = n.size, this
        }
        ju.exports = QI
    });
    var _i = f((F2, Qu) => {
        var $I = on(),
            ZI = Zs(),
            JI = eu(),
            eT = nu(),
            tT = iu(),
            nT = Yu();

        function Lt(e) {
            var t = this.__data__ = new $I(e);
            this.size = t.size
        }
        Lt.prototype.clear = ZI;
        Lt.prototype.delete = JI;
        Lt.prototype.get = eT;
        Lt.prototype.has = tT;
        Lt.prototype.set = nT;
        Qu.exports = Lt
    });
    var Zu = f((q2, $u) => {
        var rT = "__lodash_hash_undefined__";

        function iT(e) {
            return this.__data__.set(e, rT), this
        }
        $u.exports = iT
    });
    var ec = f((X2, Ju) => {
        function oT(e) {
            return this.__data__.has(e)
        }
        Ju.exports = oT
    });
    var nc = f((G2, tc) => {
        var aT = Kn(),
            sT = Zu(),
            uT = ec();

        function jn(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.__data__ = new aT; ++t < n;) this.add(e[t])
        }
        jn.prototype.add = jn.prototype.push = sT;
        jn.prototype.has = uT;
        tc.exports = jn
    });
    var ic = f((V2, rc) => {
        function cT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        rc.exports = cT
    });
    var ac = f((k2, oc) => {
        function lT(e, t) {
            return e.has(t)
        }
        oc.exports = lT
    });
    var Ii = f((B2, sc) => {
        var fT = nc(),
            dT = ic(),
            pT = ac(),
            gT = 1,
            hT = 2;

        function yT(e, t, n, r, i, o) {
            var s = n & gT,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var l = o.get(e),
                y = o.get(t);
            if (l && y) return l == t && y == e;
            var d = -1,
                p = !0,
                v = n & hT ? new fT : void 0;
            for (o.set(e, t), o.set(t, e); ++d < a;) {
                var T = e[d],
                    I = t[d];
                if (r) var S = s ? r(I, T, d, t, e, o) : r(T, I, d, e, t, o);
                if (S !== void 0) {
                    if (S) continue;
                    p = !1;
                    break
                }
                if (v) {
                    if (!dT(t, function(m, x) {
                            if (!pT(v, x) && (T === m || i(T, m, n, r, o))) return v.push(x)
                        })) {
                        p = !1;
                        break
                    }
                } else if (!(T === I || i(T, I, n, r, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }
        sc.exports = yT
    });
    var cc = f((U2, uc) => {
        var ET = Ge(),
            vT = ET.Uint8Array;
        uc.exports = vT
    });
    var fc = f((H2, lc) => {
        function mT(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }), n
        }
        lc.exports = mT
    });
    var pc = f((W2, dc) => {
        function _T(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }), n
        }
        dc.exports = _T
    });
    var vc = f((z2, Ec) => {
        var gc = St(),
            hc = cc(),
            IT = Wn(),
            TT = Ii(),
            bT = fc(),
            AT = pc(),
            ST = 1,
            wT = 2,
            OT = "[object Boolean]",
            xT = "[object Date]",
            RT = "[object Error]",
            CT = "[object Map]",
            PT = "[object Number]",
            LT = "[object RegExp]",
            NT = "[object Set]",
            DT = "[object String]",
            MT = "[object Symbol]",
            FT = "[object ArrayBuffer]",
            qT = "[object DataView]",
            yc = gc ? gc.prototype : void 0,
            Ti = yc ? yc.valueOf : void 0;

        function XT(e, t, n, r, i, o, s) {
            switch (n) {
                case qT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case FT:
                    return !(e.byteLength != t.byteLength || !o(new hc(e), new hc(t)));
                case OT:
                case xT:
                case PT:
                    return IT(+e, +t);
                case RT:
                    return e.name == t.name && e.message == t.message;
                case LT:
                case DT:
                    return e == t + "";
                case CT:
                    var a = bT;
                case NT:
                    var u = r & ST;
                    if (a || (a = AT), e.size != t.size && !u) return !1;
                    var l = s.get(e);
                    if (l) return l == t;
                    r |= wT, s.set(e, t);
                    var y = TT(a(e), a(t), r, i, o, s);
                    return s.delete(e), y;
                case MT:
                    if (Ti) return Ti.call(e) == Ti.call(t)
            }
            return !1
        }
        Ec.exports = XT
    });
    var Yn = f((K2, mc) => {
        function GT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
        mc.exports = GT
    });
    var ve = f((j2, _c) => {
        var VT = Array.isArray;
        _c.exports = VT
    });
    var bi = f((Y2, Ic) => {
        var kT = Yn(),
            BT = ve();

        function UT(e, t, n) {
            var r = t(e);
            return BT(e) ? r : kT(r, n(e))
        }
        Ic.exports = UT
    });
    var bc = f((Q2, Tc) => {
        function HT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s, n, e) && (o[i++] = s)
            }
            return o
        }
        Tc.exports = HT
    });
    var Ai = f(($2, Ac) => {
        function WT() {
            return []
        }
        Ac.exports = WT
    });
    var Si = f((Z2, wc) => {
        var zT = bc(),
            KT = Ai(),
            jT = Object.prototype,
            YT = jT.propertyIsEnumerable,
            Sc = Object.getOwnPropertySymbols,
            QT = Sc ? function(e) {
                return e == null ? [] : (e = Object(e), zT(Sc(e), function(t) {
                    return YT.call(e, t)
                }))
            } : KT;
        wc.exports = QT
    });
    var xc = f((J2, Oc) => {
        function $T(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        Oc.exports = $T
    });
    var Cc = f((e1, Rc) => {
        var ZT = at(),
            JT = Je(),
            eb = "[object Arguments]";

        function tb(e) {
            return JT(e) && ZT(e) == eb
        }
        Rc.exports = tb
    });
    var un = f((t1, Nc) => {
        var Pc = Cc(),
            nb = Je(),
            Lc = Object.prototype,
            rb = Lc.hasOwnProperty,
            ib = Lc.propertyIsEnumerable,
            ob = Pc(function() {
                return arguments
            }()) ? Pc : function(e) {
                return nb(e) && rb.call(e, "callee") && !ib.call(e, "callee")
            };
        Nc.exports = ob
    });
    var Mc = f((n1, Dc) => {
        function ab() {
            return !1
        }
        Dc.exports = ab
    });
    var Qn = f((cn, Nt) => {
        var sb = Ge(),
            ub = Mc(),
            Xc = typeof cn == "object" && cn && !cn.nodeType && cn,
            Fc = Xc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
            cb = Fc && Fc.exports === Xc,
            qc = cb ? sb.Buffer : void 0,
            lb = qc ? qc.isBuffer : void 0,
            fb = lb || ub;
        Nt.exports = fb
    });
    var $n = f((r1, Gc) => {
        var db = 9007199254740991,
            pb = /^(?:0|[1-9]\d*)$/;

        function gb(e, t) {
            var n = typeof e;
            return t = t ? ? db, !!t && (n == "number" || n != "symbol" && pb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Gc.exports = gb
    });
    var Zn = f((i1, Vc) => {
        var hb = 9007199254740991;

        function yb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hb
        }
        Vc.exports = yb
    });
    var Bc = f((o1, kc) => {
        var Eb = at(),
            vb = Zn(),
            mb = Je(),
            _b = "[object Arguments]",
            Ib = "[object Array]",
            Tb = "[object Boolean]",
            bb = "[object Date]",
            Ab = "[object Error]",
            Sb = "[object Function]",
            wb = "[object Map]",
            Ob = "[object Number]",
            xb = "[object Object]",
            Rb = "[object RegExp]",
            Cb = "[object Set]",
            Pb = "[object String]",
            Lb = "[object WeakMap]",
            Nb = "[object ArrayBuffer]",
            Db = "[object DataView]",
            Mb = "[object Float32Array]",
            Fb = "[object Float64Array]",
            qb = "[object Int8Array]",
            Xb = "[object Int16Array]",
            Gb = "[object Int32Array]",
            Vb = "[object Uint8Array]",
            kb = "[object Uint8ClampedArray]",
            Bb = "[object Uint16Array]",
            Ub = "[object Uint32Array]",
            ae = {};
        ae[Mb] = ae[Fb] = ae[qb] = ae[Xb] = ae[Gb] = ae[Vb] = ae[kb] = ae[Bb] = ae[Ub] = !0;
        ae[_b] = ae[Ib] = ae[Nb] = ae[Tb] = ae[Db] = ae[bb] = ae[Ab] = ae[Sb] = ae[wb] = ae[Ob] = ae[xb] = ae[Rb] = ae[Cb] = ae[Pb] = ae[Lb] = !1;

        function Hb(e) {
            return mb(e) && vb(e.length) && !!ae[Eb(e)]
        }
        kc.exports = Hb
    });
    var Hc = f((a1, Uc) => {
        function Wb(e) {
            return function(t) {
                return e(t)
            }
        }
        Uc.exports = Wb
    });
    var zc = f((ln, Dt) => {
        var zb = $r(),
            Wc = typeof ln == "object" && ln && !ln.nodeType && ln,
            fn = Wc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
            Kb = fn && fn.exports === Wc,
            wi = Kb && zb.process,
            jb = function() {
                try {
                    var e = fn && fn.require && fn.require("util").types;
                    return e || wi && wi.binding && wi.binding("util")
                } catch {}
            }();
        Dt.exports = jb
    });
    var Jn = f((s1, Yc) => {
        var Yb = Bc(),
            Qb = Hc(),
            Kc = zc(),
            jc = Kc && Kc.isTypedArray,
            $b = jc ? Qb(jc) : Yb;
        Yc.exports = $b
    });
    var Oi = f((u1, Qc) => {
        var Zb = xc(),
            Jb = un(),
            eA = ve(),
            tA = Qn(),
            nA = $n(),
            rA = Jn(),
            iA = Object.prototype,
            oA = iA.hasOwnProperty;

        function aA(e, t) {
            var n = eA(e),
                r = !n && Jb(e),
                i = !n && !r && tA(e),
                o = !n && !r && !i && rA(e),
                s = n || r || i || o,
                a = s ? Zb(e.length, String) : [],
                u = a.length;
            for (var l in e)(t || oA.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || nA(l, u))) && a.push(l);
            return a
        }
        Qc.exports = aA
    });
    var er = f((c1, $c) => {
        var sA = Object.prototype;

        function uA(e) {
            var t = e && e.constructor,
                n = typeof t == "function" && t.prototype || sA;
            return e === n
        }
        $c.exports = uA
    });
    var Jc = f((l1, Zc) => {
        var cA = Zr(),
            lA = cA(Object.keys, Object);
        Zc.exports = lA
    });
    var tr = f((f1, el) => {
        var fA = er(),
            dA = Jc(),
            pA = Object.prototype,
            gA = pA.hasOwnProperty;

        function hA(e) {
            if (!fA(e)) return dA(e);
            var t = [];
            for (var n in Object(e)) gA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        el.exports = hA
    });
    var yt = f((d1, tl) => {
        var yA = Ei(),
            EA = Zn();

        function vA(e) {
            return e != null && EA(e.length) && !yA(e)
        }
        tl.exports = vA
    });
    var dn = f((p1, nl) => {
        var mA = Oi(),
            _A = tr(),
            IA = yt();

        function TA(e) {
            return IA(e) ? mA(e) : _A(e)
        }
        nl.exports = TA
    });
    var il = f((g1, rl) => {
        var bA = bi(),
            AA = Si(),
            SA = dn();

        function wA(e) {
            return bA(e, SA, AA)
        }
        rl.exports = wA
    });
    var sl = f((h1, al) => {
        var ol = il(),
            OA = 1,
            xA = Object.prototype,
            RA = xA.hasOwnProperty;

        function CA(e, t, n, r, i, o) {
            var s = n & OA,
                a = ol(e),
                u = a.length,
                l = ol(t),
                y = l.length;
            if (u != y && !s) return !1;
            for (var d = u; d--;) {
                var p = a[d];
                if (!(s ? p in t : RA.call(t, p))) return !1
            }
            var v = o.get(e),
                T = o.get(t);
            if (v && T) return v == t && T == e;
            var I = !0;
            o.set(e, t), o.set(t, e);
            for (var S = s; ++d < u;) {
                p = a[d];
                var m = e[p],
                    x = t[p];
                if (r) var A = s ? r(x, m, p, t, e, o) : r(m, x, p, e, t, o);
                if (!(A === void 0 ? m === x || i(m, x, n, r, o) : A)) {
                    I = !1;
                    break
                }
                S || (S = p == "constructor")
            }
            if (I && !S) {
                var N = e.constructor,
                    D = t.constructor;
                N != D && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof D == "function" && D instanceof D) && (I = !1)
            }
            return o.delete(e), o.delete(t), I
        }
        al.exports = CA
    });
    var cl = f((y1, ul) => {
        var PA = st(),
            LA = Ge(),
            NA = PA(LA, "DataView");
        ul.exports = NA
    });
    var fl = f((E1, ll) => {
        var DA = st(),
            MA = Ge(),
            FA = DA(MA, "Promise");
        ll.exports = FA
    });
    var pl = f((v1, dl) => {
        var qA = st(),
            XA = Ge(),
            GA = qA(XA, "Set");
        dl.exports = GA
    });
    var xi = f((m1, gl) => {
        var VA = st(),
            kA = Ge(),
            BA = VA(kA, "WeakMap");
        gl.exports = BA
    });
    var nr = f((_1, Il) => {
        var Ri = cl(),
            Ci = zn(),
            Pi = fl(),
            Li = pl(),
            Ni = xi(),
            _l = at(),
            Mt = mi(),
            hl = "[object Map]",
            UA = "[object Object]",
            yl = "[object Promise]",
            El = "[object Set]",
            vl = "[object WeakMap]",
            ml = "[object DataView]",
            HA = Mt(Ri),
            WA = Mt(Ci),
            zA = Mt(Pi),
            KA = Mt(Li),
            jA = Mt(Ni),
            Et = _l;
        (Ri && Et(new Ri(new ArrayBuffer(1))) != ml || Ci && Et(new Ci) != hl || Pi && Et(Pi.resolve()) != yl || Li && Et(new Li) != El || Ni && Et(new Ni) != vl) && (Et = function(e) {
            var t = _l(e),
                n = t == UA ? e.constructor : void 0,
                r = n ? Mt(n) : "";
            if (r) switch (r) {
                case HA:
                    return ml;
                case WA:
                    return hl;
                case zA:
                    return yl;
                case KA:
                    return El;
                case jA:
                    return vl
            }
            return t
        });
        Il.exports = Et
    });
    var Rl = f((I1, xl) => {
        var Di = _i(),
            YA = Ii(),
            QA = vc(),
            $A = sl(),
            Tl = nr(),
            bl = ve(),
            Al = Qn(),
            ZA = Jn(),
            JA = 1,
            Sl = "[object Arguments]",
            wl = "[object Array]",
            rr = "[object Object]",
            e0 = Object.prototype,
            Ol = e0.hasOwnProperty;

        function t0(e, t, n, r, i, o) {
            var s = bl(e),
                a = bl(t),
                u = s ? wl : Tl(e),
                l = a ? wl : Tl(t);
            u = u == Sl ? rr : u, l = l == Sl ? rr : l;
            var y = u == rr,
                d = l == rr,
                p = u == l;
            if (p && Al(e)) {
                if (!Al(t)) return !1;
                s = !0, y = !1
            }
            if (p && !y) return o || (o = new Di), s || ZA(e) ? YA(e, t, n, r, i, o) : QA(e, t, u, n, r, i, o);
            if (!(n & JA)) {
                var v = y && Ol.call(e, "__wrapped__"),
                    T = d && Ol.call(t, "__wrapped__");
                if (v || T) {
                    var I = v ? e.value() : e,
                        S = T ? t.value() : t;
                    return o || (o = new Di), i(I, S, n, r, o)
                }
            }
            return p ? (o || (o = new Di), $A(e, t, n, r, i, o)) : !1
        }
        xl.exports = t0
    });
    var Mi = f((T1, Ll) => {
        var n0 = Rl(),
            Cl = Je();

        function Pl(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Cl(e) && !Cl(t) ? e !== e && t !== t : n0(e, t, n, r, Pl, i)
        }
        Ll.exports = Pl
    });
    var Dl = f((b1, Nl) => {
        var r0 = _i(),
            i0 = Mi(),
            o0 = 1,
            a0 = 2;

        function s0(e, t, n, r) {
            var i = n.length,
                o = i,
                s = !r;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = n[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = n[i];
                var u = a[0],
                    l = e[u],
                    y = a[1];
                if (s && a[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var d = new r0;
                    if (r) var p = r(l, y, u, e, t, d);
                    if (!(p === void 0 ? i0(y, l, o0 | a0, r, d) : p)) return !1
                }
            }
            return !0
        }
        Nl.exports = s0
    });
    var Fi = f((A1, Ml) => {
        var u0 = Ye();

        function c0(e) {
            return e === e && !u0(e)
        }
        Ml.exports = c0
    });
    var ql = f((S1, Fl) => {
        var l0 = Fi(),
            f0 = dn();

        function d0(e) {
            for (var t = f0(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, l0(i)]
            }
            return t
        }
        Fl.exports = d0
    });
    var qi = f((w1, Xl) => {
        function p0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        Xl.exports = p0
    });
    var Vl = f((O1, Gl) => {
        var g0 = Dl(),
            h0 = ql(),
            y0 = qi();

        function E0(e) {
            var t = h0(e);
            return t.length == 1 && t[0][2] ? y0(t[0][0], t[0][1]) : function(n) {
                return n === e || g0(n, e, t)
            }
        }
        Gl.exports = E0
    });
    var pn = f((x1, kl) => {
        var v0 = at(),
            m0 = Je(),
            _0 = "[object Symbol]";

        function I0(e) {
            return typeof e == "symbol" || m0(e) && v0(e) == _0
        }
        kl.exports = I0
    });
    var ir = f((R1, Bl) => {
        var T0 = ve(),
            b0 = pn(),
            A0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            S0 = /^\w*$/;

        function w0(e, t) {
            if (T0(e)) return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || b0(e) ? !0 : S0.test(e) || !A0.test(e) || t != null && e in Object(t)
        }
        Bl.exports = w0
    });
    var Wl = f((C1, Hl) => {
        var Ul = Kn(),
            O0 = "Expected a function";

        function Xi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(O0);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, r);
                return n.cache = o.set(i, s) || o, s
            };
            return n.cache = new(Xi.Cache || Ul), n
        }
        Xi.Cache = Ul;
        Hl.exports = Xi
    });
    var Kl = f((P1, zl) => {
        var x0 = Wl(),
            R0 = 500;

        function C0(e) {
            var t = x0(e, function(r) {
                    return n.size === R0 && n.clear(), r
                }),
                n = t.cache;
            return t
        }
        zl.exports = C0
    });
    var Yl = f((L1, jl) => {
        var P0 = Kl(),
            L0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            N0 = /\\(\\)?/g,
            D0 = P0(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(L0, function(n, r, i, o) {
                    t.push(i ? o.replace(N0, "$1") : r || n)
                }), t
            });
        jl.exports = D0
    });
    var Gi = f((N1, Ql) => {
        function M0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
        Ql.exports = M0
    });
    var nf = f((D1, tf) => {
        var $l = St(),
            F0 = Gi(),
            q0 = ve(),
            X0 = pn(),
            G0 = 1 / 0,
            Zl = $l ? $l.prototype : void 0,
            Jl = Zl ? Zl.toString : void 0;

        function ef(e) {
            if (typeof e == "string") return e;
            if (q0(e)) return F0(e, ef) + "";
            if (X0(e)) return Jl ? Jl.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -G0 ? "-0" : t
        }
        tf.exports = ef
    });
    var of = f((M1, rf) => {
        var V0 = nf();

        function k0(e) {
            return e == null ? "" : V0(e)
        }
        rf.exports = k0
    });
    var gn = f((F1, af) => {
        var B0 = ve(),
            U0 = ir(),
            H0 = Yl(),
            W0 = of ();

        function z0(e, t) {
            return B0(e) ? e : U0(e, t) ? [e] : H0(W0(e))
        }
        af.exports = z0
    });
    var Ft = f((q1, sf) => {
        var K0 = pn(),
            j0 = 1 / 0;

        function Y0(e) {
            if (typeof e == "string" || K0(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -j0 ? "-0" : t
        }
        sf.exports = Y0
    });
    var or = f((X1, uf) => {
        var Q0 = gn(),
            $0 = Ft();

        function Z0(e, t) {
            t = Q0(t, e);
            for (var n = 0, r = t.length; e != null && n < r;) e = e[$0(t[n++])];
            return n && n == r ? e : void 0
        }
        uf.exports = Z0
    });
    var ar = f((G1, cf) => {
        var J0 = or();

        function eS(e, t, n) {
            var r = e == null ? void 0 : J0(e, t);
            return r === void 0 ? n : r
        }
        cf.exports = eS
    });
    var ff = f((V1, lf) => {
        function tS(e, t) {
            return e != null && t in Object(e)
        }
        lf.exports = tS
    });
    var pf = f((k1, df) => {
        var nS = gn(),
            rS = un(),
            iS = ve(),
            oS = $n(),
            aS = Zn(),
            sS = Ft();

        function uS(e, t, n) {
            t = nS(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i;) {
                var s = sS(t[r]);
                if (!(o = e != null && n(e, s))) break;
                e = e[s]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && aS(i) && oS(s, i) && (iS(e) || rS(e)))
        }
        df.exports = uS
    });
    var hf = f((B1, gf) => {
        var cS = ff(),
            lS = pf();

        function fS(e, t) {
            return e != null && lS(e, t, cS)
        }
        gf.exports = fS
    });
    var Ef = f((U1, yf) => {
        var dS = Mi(),
            pS = ar(),
            gS = hf(),
            hS = ir(),
            yS = Fi(),
            ES = qi(),
            vS = Ft(),
            mS = 1,
            _S = 2;

        function IS(e, t) {
            return hS(e) && yS(t) ? ES(vS(e), t) : function(n) {
                var r = pS(n, e);
                return r === void 0 && r === t ? gS(n, e) : dS(t, r, mS | _S)
            }
        }
        yf.exports = IS
    });
    var sr = f((H1, vf) => {
        function TS(e) {
            return e
        }
        vf.exports = TS
    });
    var Vi = f((W1, mf) => {
        function bS(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        mf.exports = bS
    });
    var If = f((z1, _f) => {
        var AS = or();

        function SS(e) {
            return function(t) {
                return AS(t, e)
            }
        }
        _f.exports = SS
    });
    var bf = f((K1, Tf) => {
        var wS = Vi(),
            OS = If(),
            xS = ir(),
            RS = Ft();

        function CS(e) {
            return xS(e) ? wS(RS(e)) : OS(e)
        }
        Tf.exports = CS
    });
    var ut = f((j1, Af) => {
        var PS = Vl(),
            LS = Ef(),
            NS = sr(),
            DS = ve(),
            MS = bf();

        function FS(e) {
            return typeof e == "function" ? e : e == null ? NS : typeof e == "object" ? DS(e) ? LS(e[0], e[1]) : PS(e) : MS(e)
        }
        Af.exports = FS
    });
    var ki = f((Y1, Sf) => {
        var qS = ut(),
            XS = yt(),
            GS = dn();

        function VS(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!XS(t)) {
                    var o = qS(n, 3);
                    t = GS(t), n = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, n, r);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Sf.exports = VS
    });
    var Bi = f((Q1, wf) => {
        function kS(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        wf.exports = kS
    });
    var xf = f(($1, Of) => {
        var BS = /\s/;

        function US(e) {
            for (var t = e.length; t-- && BS.test(e.charAt(t)););
            return t
        }
        Of.exports = US
    });
    var Cf = f((Z1, Rf) => {
        var HS = xf(),
            WS = /^\s+/;

        function zS(e) {
            return e && e.slice(0, HS(e) + 1).replace(WS, "")
        }
        Rf.exports = zS
    });
    var ur = f((J1, Nf) => {
        var KS = Cf(),
            Pf = Ye(),
            jS = pn(),
            Lf = 0 / 0,
            YS = /^[-+]0x[0-9a-f]+$/i,
            QS = /^0b[01]+$/i,
            $S = /^0o[0-7]+$/i,
            ZS = parseInt;

        function JS(e) {
            if (typeof e == "number") return e;
            if (jS(e)) return Lf;
            if (Pf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Pf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = KS(e);
            var n = QS.test(e);
            return n || $S.test(e) ? ZS(e.slice(2), n ? 2 : 8) : YS.test(e) ? Lf : +e
        }
        Nf.exports = JS
    });
    var Ff = f((eq, Mf) => {
        var ew = ur(),
            Df = 1 / 0,
            tw = 17976931348623157e292;

        function nw(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = ew(e), e === Df || e === -Df) {
                var t = e < 0 ? -1 : 1;
                return t * tw
            }
            return e === e ? e : 0
        }
        Mf.exports = nw
    });
    var Ui = f((tq, qf) => {
        var rw = Ff();

        function iw(e) {
            var t = rw(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        qf.exports = iw
    });
    var Gf = f((nq, Xf) => {
        var ow = Bi(),
            aw = ut(),
            sw = Ui(),
            uw = Math.max;

        function cw(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = n == null ? 0 : sw(n);
            return i < 0 && (i = uw(r + i, 0)), ow(e, aw(t, 3), i)
        }
        Xf.exports = cw
    });
    var Hi = f((rq, Vf) => {
        var lw = ki(),
            fw = Gf(),
            dw = lw(fw);
        Vf.exports = dw
    });
    var Uf = {};
    xe(Uf, {
        ELEMENT_MATCHES: () => pw,
        FLEX_PREFIXED: () => Wi,
        IS_BROWSER_ENV: () => ke,
        TRANSFORM_PREFIXED: () => ct,
        TRANSFORM_STYLE_PREFIXED: () => lr,
        withBrowser: () => cr
    });
    var Bf, ke, cr, pw, Wi, ct, kf, lr, fr = ce(() => {
        "use strict";
        Bf = re(Hi()), ke = typeof window < "u", cr = (e, t) => ke ? e() : t, pw = cr(() => (0, Bf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Wi = cr(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                n = "";
            try {
                let {
                    length: r
                } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return n
            } catch {
                return n
            }
        }, "flex"), ct = cr(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    n = "Transform",
                    {
                        length: r
                    } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), kf = ct.split("transform")[0], lr = kf ? kf + "TransformStyle" : "transformStyle"
    });
    var zi = f((iq, jf) => {
        var gw = 4,
            hw = .001,
            yw = 1e-7,
            Ew = 10,
            hn = 11,
            dr = 1 / (hn - 1),
            vw = typeof Float32Array == "function";

        function Hf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Wf(e, t) {
            return 3 * t - 6 * e
        }

        function zf(e) {
            return 3 * e
        }

        function pr(e, t, n) {
            return ((Hf(t, n) * e + Wf(t, n)) * e + zf(t)) * e
        }

        function Kf(e, t, n) {
            return 3 * Hf(t, n) * e * e + 2 * Wf(t, n) * e + zf(t)
        }

        function mw(e, t, n, r, i) {
            var o, s, a = 0;
            do s = t + (n - t) / 2, o = pr(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > yw && ++a < Ew);
            return s
        }

        function _w(e, t, n, r) {
            for (var i = 0; i < gw; ++i) {
                var o = Kf(t, n, r);
                if (o === 0) return t;
                var s = pr(t, n, r) - e;
                t -= s / o
            }
            return t
        }
        jf.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = vw ? new Float32Array(hn) : new Array(hn);
            if (t !== n || r !== i)
                for (var s = 0; s < hn; ++s) o[s] = pr(s * dr, t, r);

            function a(u) {
                for (var l = 0, y = 1, d = hn - 1; y !== d && o[y] <= u; ++y) l += dr;
                --y;
                var p = (u - o[y]) / (o[y + 1] - o[y]),
                    v = l + p * dr,
                    T = Kf(v, t, r);
                return T >= hw ? _w(u, v, t, r) : T === 0 ? v : mw(u, l, l + dr, t, r)
            }
            return function(l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : pr(a(l), n, i)
            }
        }
    });
    var En = {};
    xe(En, {
        bounce: () => nO,
        bouncePast: () => rO,
        ease: () => Iw,
        easeIn: () => Tw,
        easeInOut: () => Aw,
        easeOut: () => bw,
        inBack: () => Kw,
        inCirc: () => Uw,
        inCubic: () => xw,
        inElastic: () => Qw,
        inExpo: () => Vw,
        inOutBack: () => Yw,
        inOutCirc: () => Ww,
        inOutCubic: () => Cw,
        inOutElastic: () => Zw,
        inOutExpo: () => Bw,
        inOutQuad: () => Ow,
        inOutQuart: () => Nw,
        inOutQuint: () => Fw,
        inOutSine: () => Gw,
        inQuad: () => Sw,
        inQuart: () => Pw,
        inQuint: () => Dw,
        inSine: () => qw,
        outBack: () => jw,
        outBounce: () => zw,
        outCirc: () => Hw,
        outCubic: () => Rw,
        outElastic: () => $w,
        outExpo: () => kw,
        outQuad: () => ww,
        outQuart: () => Lw,
        outQuint: () => Mw,
        outSine: () => Xw,
        swingFrom: () => eO,
        swingFromTo: () => Jw,
        swingTo: () => tO
    });

    function Sw(e) {
        return Math.pow(e, 2)
    }

    function ww(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function Ow(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function xw(e) {
        return Math.pow(e, 3)
    }

    function Rw(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Cw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Pw(e) {
        return Math.pow(e, 4)
    }

    function Lw(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Nw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Dw(e) {
        return Math.pow(e, 5)
    }

    function Mw(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Fw(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function qw(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Xw(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Gw(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Vw(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function kw(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Bw(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Uw(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Hw(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Ww(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function zw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Kw(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }

    function jw(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Yw(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Qw(e) {
        let t = et,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }

    function $w(e) {
        let t = et,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }

    function Zw(e) {
        let t = et,
            n = 0,
            r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }

    function Jw(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function eO(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }

    function tO(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function nO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function rO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var yn, et, Iw, Tw, bw, Aw, Ki = ce(() => {
        "use strict";
        yn = re(zi()), et = 1.70158, Iw = (0, yn.default)(.25, .1, .25, 1), Tw = (0, yn.default)(.42, 0, 1, 1), bw = (0, yn.default)(0, 0, .58, 1), Aw = (0, yn.default)(.42, 0, .58, 1)
    });
    var Qf = {};
    xe(Qf, {
        applyEasing: () => oO,
        createBezierEasing: () => iO,
        optimizeFloat: () => vn
    });

    function vn(e, t = 5, n = 10) {
        let r = Math.pow(n, t),
            i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function iO(e) {
        return (0, Yf.default)(...e)
    }

    function oO(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : vn(n ? t > 0 ? n(t) : t : t > 0 && e && En[e] ? En[e](t) : t)
    }
    var Yf, ji = ce(() => {
        "use strict";
        Ki();
        Yf = re(zi())
    });
    var Jf = {};
    xe(Jf, {
        createElementState: () => Zf,
        ixElements: () => mO,
        mergeActionState: () => Yi
    });

    function Zf(e, t, n, r, i) {
        let o = n === aO ? (0, qt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, qt.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }

    function Yi(e, t, n, r, i) {
        let o = IO(i);
        return (0, qt.mergeIn)(e, [t, vO, n], r, o)
    }

    function IO(e) {
        let {
            config: t
        } = e;
        return _O.reduce((n, r) => {
            let i = r[0],
                o = r[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (n[o] = a), n
        }, {})
    }
    var qt, aq, aO, sq, sO, uO, cO, lO, fO, dO, pO, gO, hO, yO, EO, $f, vO, mO, _O, ed = ce(() => {
        "use strict";
        qt = re(xt());
        Ce();
        ({
            HTML_ELEMENT: aq,
            PLAIN_OBJECT: aO,
            ABSTRACT_NODE: sq,
            CONFIG_X_VALUE: sO,
            CONFIG_Y_VALUE: uO,
            CONFIG_Z_VALUE: cO,
            CONFIG_VALUE: lO,
            CONFIG_X_UNIT: fO,
            CONFIG_Y_UNIT: dO,
            CONFIG_Z_UNIT: pO,
            CONFIG_UNIT: gO
        } = _e), {
            IX2_SESSION_STOPPED: hO,
            IX2_INSTANCE_ADDED: yO,
            IX2_ELEMENT_STATE_CHANGED: EO
        } = Ee, $f = {}, vO = "refState", mO = (e = $f, t = {}) => {
            switch (t.type) {
                case hO:
                    return $f;
                case yO:
                    {
                        let {
                            elementId: n,
                            element: r,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, qt.getIn)(u, [n, r]) !== r && (u = Zf(u, r, s, n, o)),
                        Yi(u, n, a, i, o)
                    }
                case EO:
                    {
                        let {
                            elementId: n,
                            actionTypeId: r,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Yi(e, n, r, i, o)
                    }
                default:
                    return e
            }
        };
        _O = [
            [sO, fO],
            [uO, dO],
            [cO, pO],
            [lO, gO]
        ]
    });
    var td = f(Qi => {
        "use strict";
        Object.defineProperty(Qi, "__esModule", {
            value: !0
        });

        function TO(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        TO(Qi, {
            clearPlugin: function() {
                return RO
            },
            createPluginInstance: function() {
                return OO
            },
            getPluginConfig: function() {
                return bO
            },
            getPluginDestination: function() {
                return wO
            },
            getPluginDuration: function() {
                return AO
            },
            getPluginOrigin: function() {
                return SO
            },
            renderPlugin: function() {
                return xO
            }
        });
        var bO = e => e.value,
            AO = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let n = parseFloat(e.getAttribute("data-duration"));
                return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            SO = e => e || {
                value: 0
            },
            wO = e => ({
                value: e.value
            }),
            OO = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            xO = (e, t, n) => {
                if (!e) return;
                let r = t[n.actionTypeId].value / 100;
                e.goToFrame(e.frames * r)
            },
            RO = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var rd = f($i => {
        "use strict";
        Object.defineProperty($i, "__esModule", {
            value: !0
        });

        function CO(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        CO($i, {
            clearPlugin: function() {
                return VO
            },
            createPluginInstance: function() {
                return XO
            },
            getPluginConfig: function() {
                return DO
            },
            getPluginDestination: function() {
                return qO
            },
            getPluginDuration: function() {
                return MO
            },
            getPluginOrigin: function() {
                return FO
            },
            renderPlugin: function() {
                return GO
            }
        });
        var PO = e => document.querySelector(`[data-w-id="${e}"]`),
            LO = () => window.Webflow.require("spline"),
            NO = (e, t) => e.filter(n => !t.includes(n)),
            DO = (e, t) => e.value[t],
            MO = () => null,
            nd = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            FO = (e, t) => {
                let n = t.config.value,
                    r = Object.keys(n);
                if (e) {
                    let o = Object.keys(e),
                        s = NO(r, o);
                    return s.length ? s.reduce((u, l) => (u[l] = nd[l], u), e) : e
                }
                return r.reduce((o, s) => (o[s] = nd[s], o), {})
            },
            qO = e => e.value,
            XO = (e, t) => {
                let n = t ? .config ? .target ? .pluginElement;
                return n ? PO(n) : null
            },
            GO = (e, t, n) => {
                let r = LO(),
                    i = r.getInstance(e),
                    o = n.config.target.objectId,
                    s = a => {
                        if (!a) throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && a.findObjectById(o);
                        if (!u) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                    };
                i ? s(i.spline) : r.setLoadHandler(e, s)
            },
            VO = () => null
    });
    var Ji = f(Zi => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", {
            value: !0
        });
        Object.defineProperty(Zi, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return kO
            }
        });
        var id = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function kO(e) {
            let t, n, r, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof id[o] == "string" ? id[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), n = parseInt(u[1] + u[1], 16), r = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), n = parseInt(u.substring(2, 4), 16), r = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * d - 1)) * y,
                    v = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    T = d - p / 2,
                    I, S, m;
                l >= 0 && l < 60 ? (I = p, S = v, m = 0) : l >= 60 && l < 120 ? (I = v, S = p, m = 0) : l >= 120 && l < 180 ? (I = 0, S = p, m = v) : l >= 180 && l < 240 ? (I = 0, S = v, m = p) : l >= 240 && l < 300 ? (I = v, S = 0, m = p) : (I = p, S = 0, m = v), t = Math.round((I + T) * 255), n = Math.round((S + T) * 255), r = Math.round((m + T) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * d - 1)) * y,
                    v = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    T = d - p / 2,
                    I, S, m;
                l >= 0 && l < 60 ? (I = p, S = v, m = 0) : l >= 60 && l < 120 ? (I = v, S = p, m = 0) : l >= 120 && l < 180 ? (I = 0, S = p, m = v) : l >= 180 && l < 240 ? (I = 0, S = v, m = p) : l >= 240 && l < 300 ? (I = v, S = 0, m = p) : (I = p, S = 0, m = v), t = Math.round((I + T) * 255), n = Math.round((S + T) * 255), r = Math.round((m + T) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    });
    var od = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });

        function BO(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        BO(eo, {
            clearPlugin: function() {
                return QO
            },
            createPluginInstance: function() {
                return jO
            },
            getPluginConfig: function() {
                return HO
            },
            getPluginDestination: function() {
                return KO
            },
            getPluginDuration: function() {
                return WO
            },
            getPluginOrigin: function() {
                return zO
            },
            renderPlugin: function() {
                return YO
            }
        });
        var UO = Ji(),
            HO = (e, t) => e.value[t],
            WO = () => null,
            zO = (e, t) => {
                if (e) return e;
                let n = t.config.value,
                    r = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(r);
                if (n.size != null) return {
                    size: parseInt(i, 10)
                };
                if (n.red != null && n.green != null && n.blue != null) return (0, UO.normalizeColor)(i)
            },
            KO = e => e.value,
            jO = () => null,
            YO = (e, t, n) => {
                let r = n.config.target.objectId,
                    i = n.config.value.unit,
                    {
                        PLUGIN_VARIABLE: o
                    } = t,
                    {
                        size: s,
                        red: a,
                        green: u,
                        blue: l,
                        alpha: y
                    } = o,
                    d;
                s != null && (d = s + i), a != null && l != null && u != null && y != null && (d = `rgba(${a}, ${u}, ${l}, ${y})`), d != null && document.documentElement.style.setProperty(r, d)
            },
            QO = (e, t) => {
                let n = t.config.target.objectId;
                document.documentElement.style.removeProperty(n)
            }
    });
    var sd = f(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        Object.defineProperty(ro, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return ex
            }
        });
        var to = (Ce(), He(fs)),
            $O = no(td()),
            ZO = no(rd()),
            JO = no(od());

        function ad(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (ad = function(r) {
                return r ? n : t
            })(e)
        }

        function no(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = ad(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
        var ex = new Map([
            [to.ActionTypeConsts.PLUGIN_LOTTIE, { ...$O
            }],
            [to.ActionTypeConsts.PLUGIN_SPLINE, { ...ZO
            }],
            [to.ActionTypeConsts.PLUGIN_VARIABLE, { ...JO
            }]
        ])
    });
    var ud = {};
    xe(ud, {
        clearPlugin: () => co,
        createPluginInstance: () => nx,
        getPluginConfig: () => oo,
        getPluginDestination: () => so,
        getPluginDuration: () => tx,
        getPluginOrigin: () => ao,
        isPluginType: () => vt,
        renderPlugin: () => uo
    });

    function vt(e) {
        return io.pluginMethodMap.has(e)
    }
    var io, mt, oo, ao, tx, so, nx, uo, co, lo = ce(() => {
        "use strict";
        fr();
        io = re(sd());
        mt = e => t => {
            if (!ke) return () => null;
            let n = io.pluginMethodMap.get(t);
            if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }, oo = mt("getPluginConfig"), ao = mt("getPluginOrigin"), tx = mt("getPluginDuration"), so = mt("getPluginDestination"), nx = mt("createPluginInstance"), uo = mt("renderPlugin"), co = mt("clearPlugin")
    });
    var ld = f((gq, cd) => {
        function rx(e, t) {
            return e == null || e !== e ? t : e
        }
        cd.exports = rx
    });
    var dd = f((hq, fd) => {
        function ix(e, t, n, r) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
            return n
        }
        fd.exports = ix
    });
    var gd = f((yq, pd) => {
        function ox(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), s = r(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (n(o[u], u, o) === !1) break
                }
                return t
            }
        }
        pd.exports = ox
    });
    var yd = f((Eq, hd) => {
        var ax = gd(),
            sx = ax();
        hd.exports = sx
    });
    var fo = f((vq, Ed) => {
        var ux = yd(),
            cx = dn();

        function lx(e, t) {
            return e && ux(e, t, cx)
        }
        Ed.exports = lx
    });
    var md = f((mq, vd) => {
        var fx = yt();

        function dx(e, t) {
            return function(n, r) {
                if (n == null) return n;
                if (!fx(n)) return e(n, r);
                for (var i = n.length, o = t ? i : -1, s = Object(n);
                    (t ? o-- : ++o < i) && r(s[o], o, s) !== !1;);
                return n
            }
        }
        vd.exports = dx
    });
    var po = f((_q, _d) => {
        var px = fo(),
            gx = md(),
            hx = gx(px);
        _d.exports = hx
    });
    var Td = f((Iq, Id) => {
        function yx(e, t, n, r, i) {
            return i(e, function(o, s, a) {
                n = r ? (r = !1, o) : t(n, o, s, a)
            }), n
        }
        Id.exports = yx
    });
    var Ad = f((Tq, bd) => {
        var Ex = dd(),
            vx = po(),
            mx = ut(),
            _x = Td(),
            Ix = ve();

        function Tx(e, t, n) {
            var r = Ix(e) ? Ex : _x,
                i = arguments.length < 3;
            return r(e, mx(t, 4), n, i, vx)
        }
        bd.exports = Tx
    });
    var wd = f((bq, Sd) => {
        var bx = Bi(),
            Ax = ut(),
            Sx = Ui(),
            wx = Math.max,
            Ox = Math.min;

        function xx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = r - 1;
            return n !== void 0 && (i = Sx(n), i = n < 0 ? wx(r + i, 0) : Ox(i, r - 1)), bx(e, Ax(t, 3), i, !0)
        }
        Sd.exports = xx
    });
    var xd = f((Aq, Od) => {
        var Rx = ki(),
            Cx = wd(),
            Px = Rx(Cx);
        Od.exports = Px
    });

    function Rd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function Lx(e, t) {
        if (Rd(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !Rd(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    var go, Cd = ce(() => {
        "use strict";
        go = Lx
    });
    var jd = {};
    xe(jd, {
        cleanupHTMLElement: () => RR,
        clearAllStyles: () => xR,
        clearObjectCache: () => Yx,
        getActionListProgress: () => PR,
        getAffectedElements: () => mo,
        getComputedStyle: () => rR,
        getDestinationValues: () => lR,
        getElementId: () => Jx,
        getInstanceId: () => $x,
        getInstanceOrigin: () => aR,
        getItemConfigByKey: () => cR,
        getMaxDurationItemIndex: () => Kd,
        getNamespacedParameterId: () => DR,
        getRenderType: () => Hd,
        getStyleProp: () => fR,
        mediaQueriesEqual: () => FR,
        observeStore: () => nR,
        reduceListToGroup: () => LR,
        reifyState: () => eR,
        renderHTMLElement: () => dR,
        shallowEqual: () => go,
        shouldAllowMediaQuery: () => MR,
        shouldNamespaceEventParameter: () => NR,
        stringifyTarget: () => qR
    });

    function Yx() {
        gr.clear()
    }

    function $x() {
        return "i" + Qx++
    }

    function Jx(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t) return r.id
        }
        return "e" + Zx++
    }

    function eR({
        events: e,
        actionLists: t,
        site: n
    } = {}) {
        let r = (0, vr.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = n && n.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function nR({
        store: e,
        select: t,
        onChange: n,
        comparator: r = tR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                s();
                return
            }
            r(l, a) || (a = l, n(a, e))
        }
        return s
    }

    function Nd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function mo({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: r,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((w, g) => w.concat(mo({
            config: {
                target: g
            },
            event: t,
            eventTarget: n,
            elementRoot: r,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: y,
            matchSelector: d,
            elementContains: p,
            isSiblingNode: v
        } = i, {
            target: T
        } = e;
        if (!T) return [];
        let {
            id: I,
            objectId: S,
            selector: m,
            selectorGuids: x,
            appliesTo: A,
            useEventTarget: N
        } = Nd(T);
        if (S) return [gr.has(S) ? gr.get(S) : gr.set(S, {}).get(S)];
        if (A === pi.PAGE) {
            let w = s(I);
            return w ? [w] : []
        }
        let P = (t ? .action ? .config ? .affectedElements ? ? {})[I || m] || {},
            V = !!(P.id || P.selector),
            k, B, H, F = t && a(Nd(t.target));
        if (V ? (k = P.limitAffectedElements, B = F, H = a(P)) : B = H = a({
                id: I,
                selector: m,
                selectorGuids: x
            }), t && N) {
            let w = n && (H || N === !0) ? [n] : u(F);
            if (H) {
                if (N === zx) return u(H).filter(g => w.some(O => p(g, O)));
                if (N === Pd) return u(H).filter(g => w.some(O => p(O, g)));
                if (N === Ld) return u(H).filter(g => w.some(O => v(O, g)))
            }
            return w
        }
        return B == null || H == null ? [] : ke && r ? u(H).filter(w => r.contains(w)) : k === Pd ? u(B, H) : k === Wx ? l(u(B)).filter(d(H)) : k === Ld ? y(u(B)).filter(d(H)) : u(H)
    }

    function rR({
        element: e,
        actionItem: t
    }) {
        if (!ke) return {};
        let {
            actionTypeId: n
        } = t;
        switch (n) {
            case Bt:
            case Ut:
            case Ht:
            case Wt:
            case _r:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function aR(e, t = {}, n = {}, r, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = r;
        if (vt(s)) return ao(s)(t[s], r);
        switch (r.actionTypeId) {
            case Gt:
            case Vt:
            case kt:
            case Tn:
                return t[r.actionTypeId] || _o[r.actionTypeId];
            case bn:
                return iR(t[r.actionTypeId], r.config.filters);
            case An:
                return oR(t[r.actionTypeId], r.config.fontVariations);
            case kd:
                return {
                    value: (0, tt.default)(parseFloat(o(e, yr)), 1)
                };
            case Bt:
                {
                    let a = o(e, Qe),
                        u = o(e, $e),
                        l, y;
                    return r.config.widthUnit === lt ? l = Dd.test(a) ? parseFloat(a) : parseFloat(n.width) : l = (0, tt.default)(parseFloat(a), parseFloat(n.width)),
                    r.config.heightUnit === lt ? y = Dd.test(u) ? parseFloat(u) : parseFloat(n.height) : y = (0, tt.default)(parseFloat(u), parseFloat(n.height)),
                    {
                        widthValue: l,
                        heightValue: y
                    }
                }
            case Ut:
            case Ht:
            case Wt:
                return SR({
                    element: e,
                    actionTypeId: r.actionTypeId,
                    computedStyle: n,
                    getStyle: o
                });
            case _r:
                return {
                    value: (0, tt.default)(o(e, Er), n.display)
                };
            case jx:
                return t[r.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function lR({
        element: e,
        actionItem: t,
        elementApi: n
    }) {
        if (vt(t.actionTypeId)) return so(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Gt:
            case Vt:
            case kt:
            case Tn:
                {
                    let {
                        xValue: r,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: r,
                        yValue: i,
                        zValue: o
                    }
                }
            case Bt:
                {
                    let {
                        getStyle: r,
                        setStyle: i,
                        getProperty: o
                    } = n,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!ke) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (s === lt) {
                        let y = r(e, Qe);
                        i(e, Qe, ""), u = o(e, "offsetWidth"), i(e, Qe, y)
                    }
                    if (a === lt) {
                        let y = r(e, $e);
                        i(e, $e, ""), l = o(e, "offsetHeight"), i(e, $e, y)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case Ut:
            case Ht:
            case Wt:
                {
                    let {
                        rValue: r,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = n, l = u(e, a), y = (0, qd.normalizeColor)(l);
                        return {
                            rValue: y.red,
                            gValue: y.green,
                            bValue: y.blue,
                            aValue: y.alpha
                        }
                    }
                    return {
                        rValue: r,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case bn:
                return t.config.filters.reduce(sR, {});
            case An:
                return t.config.fontVariations.reduce(uR, {});
            default:
                {
                    let {
                        value: r
                    } = t.config;
                    return {
                        value: r
                    }
                }
        }
    }

    function Hd(e) {
        if (/^TRANSFORM_/.test(e)) return Gd;
        if (/^STYLE_/.test(e)) return Eo;
        if (/^GENERAL_/.test(e)) return yo;
        if (/^PLUGIN_/.test(e)) return Vd
    }

    function fR(e, t) {
        return e === Eo ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function dR(e, t, n, r, i, o, s, a, u) {
        switch (a) {
            case Gd:
                return ER(e, t, n, i, s);
            case Eo:
                return wR(e, t, n, i, o, s);
            case yo:
                return OR(e, i, s);
            case Vd:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (vt(l)) return uo(l)(u, t, i)
                }
        }
    }

    function ER(e, t, n, r, i) {
        let o = yR.map(a => {
                let u = _o[a],
                    {
                        xValue: l = u.xValue,
                        yValue: y = u.yValue,
                        zValue: d = u.zValue,
                        xUnit: p = "",
                        yUnit: v = "",
                        zUnit: T = ""
                    } = t[a] || {};
                switch (a) {
                    case Gt:
                        return `${Mx}(${l}${p}, ${y}${v}, ${d}${T})`;
                    case Vt:
                        return `${Fx}(${l}${p}, ${y}${v}, ${d}${T})`;
                    case kt:
                        return `${qx}(${l}${p}) ${Xx}(${y}${v}) ${Gx}(${d}${T})`;
                    case Tn:
                        return `${Vx}(${l}${p}, ${y}${v})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        _t(e, ct, i), s(e, ct, o), _R(r, n) && s(e, lr, kx)
    }

    function vR(e, t, n, r) {
        let i = (0, vr.default)(t, (s, a, u) => `${s} ${u}(${a}${hR(u,n)})`, ""),
            {
                setStyle: o
            } = r;
        _t(e, mn, r), o(e, mn, i)
    }

    function mR(e, t, n, r) {
        let i = (0, vr.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = r;
        _t(e, _n, r), o(e, _n, i)
    }

    function _R({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: n,
        zValue: r
    }) {
        return e === Gt && r !== void 0 || e === Vt && r !== void 0 || e === kt && (t !== void 0 || n !== void 0)
    }

    function AR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }

    function SR({
        element: e,
        actionTypeId: t,
        computedStyle: n,
        getStyle: r
    }) {
        let i = vo[t],
            o = r(e, i),
            s = TR.test(o) ? o : n[i],
            a = AR(bR, s).split(In);
        return {
            rValue: (0, tt.default)(parseInt(a[0], 10), 255),
            gValue: (0, tt.default)(parseInt(a[1], 10), 255),
            bValue: (0, tt.default)(parseInt(a[2], 10), 255),
            aValue: (0, tt.default)(parseFloat(a[3]), 1)
        }
    }

    function wR(e, t, n, r, i, o) {
        let {
            setStyle: s
        } = o;
        switch (r.actionTypeId) {
            case Bt:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = r.config,
                    {
                        widthValue: l,
                        heightValue: y
                    } = n;l !== void 0 && (a === lt && (a = "px"), _t(e, Qe, o), s(e, Qe, l + a)),
                    y !== void 0 && (u === lt && (u = "px"), _t(e, $e, o), s(e, $e, y + u));
                    break
                }
            case bn:
                {
                    vR(e, n, r.config, o);
                    break
                }
            case An:
                {
                    mR(e, n, r.config, o);
                    break
                }
            case Ut:
            case Ht:
            case Wt:
                {
                    let a = vo[r.actionTypeId],
                        u = Math.round(n.rValue),
                        l = Math.round(n.gValue),
                        y = Math.round(n.bValue),
                        d = n.aValue;_t(e, a, o),
                    s(e, a, d >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${d})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = r.config;_t(e, i, o),
                    s(e, i, n.value + a);
                    break
                }
        }
    }

    function OR(e, t, n) {
        let {
            setStyle: r
        } = n;
        switch (t.actionTypeId) {
            case _r:
                {
                    let {
                        value: i
                    } = t.config;i === Bx && ke ? r(e, Er, Wi) : r(e, Er, i);
                    return
                }
        }
    }

    function _t(e, t, n) {
        if (!ke) return;
        let r = Ud[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, s = i(e, Xt);
        if (!s) {
            o(e, Xt, r);
            return
        }
        let a = s.split(In).map(Bd);
        a.indexOf(r) === -1 && o(e, Xt, a.concat(r).join(In))
    }

    function Wd(e, t, n) {
        if (!ke) return;
        let r = Ud[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, s = i(e, Xt);
        !s || s.indexOf(r) === -1 || o(e, Xt, s.split(In).map(Bd).filter(a => a !== r).join(In))
    }

    function xR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: n
        } = e.getState(), {
            events: r = {},
            actionLists: i = {}
        } = n;
        Object.keys(r).forEach(o => {
            let s = r[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                l = i[u];
            l && Md({
                actionList: l,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Md({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Md({
        actionList: e = {},
        event: t,
        elementApi: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e;
        r && r.forEach(o => {
            Fd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Fd({
                    actionGroup: a,
                    event: t,
                    elementApi: n
                })
            })
        })
    }

    function Fd({
        actionGroup: e,
        event: t,
        elementApi: n
    }) {
        let {
            actionItems: r
        } = e;
        r.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            vt(o) ? a = u => co(o)(u, i) : a = zd({
                effect: CR,
                actionTypeId: o,
                elementApi: n
            }), mo({
                config: s,
                event: t,
                elementApi: n
            }).forEach(a)
        })
    }

    function RR(e, t, n) {
        let {
            setStyle: r,
            getStyle: i
        } = n, {
            actionTypeId: o
        } = t;
        if (o === Bt) {
            let {
                config: s
            } = t;
            s.widthUnit === lt && r(e, Qe, ""), s.heightUnit === lt && r(e, $e, "")
        }
        i(e, Xt) && zd({
            effect: Wd,
            actionTypeId: o,
            elementApi: n
        })(e)
    }

    function CR(e, t, n) {
        let {
            setStyle: r
        } = n;
        Wd(e, t, n), r(e, t, ""), t === ct && r(e, lr, "")
    }

    function Kd(e) {
        let t = 0,
            n = 0;
        return e.forEach((r, i) => {
            let {
                config: o
            } = r, s = o.delay + o.duration;
            s >= t && (t = s, n = i)
        }), n
    }

    function PR(e, t) {
        let {
            actionItemGroups: n,
            useFirstGroupAsInitialState: r
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return n.forEach((u, l) => {
            if (r && l === 0) return;
            let {
                actionItems: y
            } = u, d = y[Kd(y)], {
                config: p,
                actionTypeId: v
            } = d;
            i.id === d.id && (a = s + o);
            let T = Hd(v) === yo ? 0 : p.duration;
            s += p.delay + T
        }), s > 0 ? vn(a / s) : 0
    }

    function LR({
        actionList: e,
        actionItemId: t,
        rawData: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, mr.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return r && r.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: l
            }) => l.some(s))
        }), (0, mr.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function NR(e, {
        basedOn: t
    }) {
        return e === Ve.SCROLLING_IN_VIEW && (t === je.ELEMENT || t == null) || e === Ve.MOUSE_MOVE && t === je.ELEMENT
    }

    function DR(e, t) {
        return e + Kx + t
    }

    function MR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function FR(e, t) {
        return go(e && e.sort(), t && t.sort())
    }

    function qR(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + ho + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: n = "",
            useEventTarget: r = ""
        } = e;
        return t + ho + n + ho + r
    }
    var tt, vr, hr, mr, qd, Nx, Dx, Mx, Fx, qx, Xx, Gx, Vx, kx, Bx, yr, mn, _n, Qe, $e, Xd, Ux, Hx, Pd, Wx, Ld, zx, Er, Xt, lt, In, Kx, ho, Gd, yo, Eo, Vd, Gt, Vt, kt, Tn, kd, bn, An, Bt, Ut, Ht, Wt, _r, jx, Bd, vo, Ud, gr, Qx, Zx, tR, Dd, iR, oR, sR, uR, cR, _o, pR, gR, hR, yR, IR, TR, bR, zd, Yd = ce(() => {
        "use strict";
        tt = re(ld()), vr = re(Ad()), hr = re(xd()), mr = re(xt());
        Ce();
        Cd();
        ji();
        qd = re(Ji());
        lo();
        fr();
        ({
            BACKGROUND: Nx,
            TRANSFORM: Dx,
            TRANSLATE_3D: Mx,
            SCALE_3D: Fx,
            ROTATE_X: qx,
            ROTATE_Y: Xx,
            ROTATE_Z: Gx,
            SKEW: Vx,
            PRESERVE_3D: kx,
            FLEX: Bx,
            OPACITY: yr,
            FILTER: mn,
            FONT_VARIATION_SETTINGS: _n,
            WIDTH: Qe,
            HEIGHT: $e,
            BACKGROUND_COLOR: Xd,
            BORDER_COLOR: Ux,
            COLOR: Hx,
            CHILDREN: Pd,
            IMMEDIATE_CHILDREN: Wx,
            SIBLINGS: Ld,
            PARENT: zx,
            DISPLAY: Er,
            WILL_CHANGE: Xt,
            AUTO: lt,
            COMMA_DELIMITER: In,
            COLON_DELIMITER: Kx,
            BAR_DELIMITER: ho,
            RENDER_TRANSFORM: Gd,
            RENDER_GENERAL: yo,
            RENDER_STYLE: Eo,
            RENDER_PLUGIN: Vd
        } = _e), {
            TRANSFORM_MOVE: Gt,
            TRANSFORM_SCALE: Vt,
            TRANSFORM_ROTATE: kt,
            TRANSFORM_SKEW: Tn,
            STYLE_OPACITY: kd,
            STYLE_FILTER: bn,
            STYLE_FONT_VARIATION: An,
            STYLE_SIZE: Bt,
            STYLE_BACKGROUND_COLOR: Ut,
            STYLE_BORDER: Ht,
            STYLE_TEXT_COLOR: Wt,
            GENERAL_DISPLAY: _r,
            OBJECT_VALUE: jx
        } = Re, Bd = e => e.trim(), vo = Object.freeze({
            [Ut]: Xd,
            [Ht]: Ux,
            [Wt]: Hx
        }), Ud = Object.freeze({
            [ct]: Dx,
            [Xd]: Nx,
            [yr]: yr,
            [mn]: mn,
            [Qe]: Qe,
            [$e]: $e,
            [_n]: _n
        }), gr = new Map;
        Qx = 1;
        Zx = 1;
        tR = (e, t) => e === t;
        Dd = /px/, iR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = pR[r.type]), n), e || {}), oR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = gR[r.type] || r.defaultValue || 0), n), e || {});
        sR = (e, t) => (t && (e[t.type] = t.value || 0), e), uR = (e, t) => (t && (e[t.type] = t.value || 0), e), cR = (e, t, n) => {
            if (vt(e)) return oo(e)(n, t);
            switch (e) {
                case bn:
                    {
                        let r = (0, hr.default)(n.filters, ({
                            type: i
                        }) => i === t);
                        return r ? r.value : 0
                    }
                case An:
                    {
                        let r = (0, hr.default)(n.fontVariations, ({
                            type: i
                        }) => i === t);
                        return r ? r.value : 0
                    }
                default:
                    return n[t]
            }
        };
        _o = {
            [Gt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Vt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Tn]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, pR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), gR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), hR = (e, t) => {
            let n = (0, hr.default)(t.filters, ({
                type: r
            }) => r === e);
            if (n && n.unit) return n.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, yR = Object.keys(_o);
        IR = "\\(([^)]+)\\)", TR = /^rgb/, bR = RegExp(`rgba?${IR}`);
        zd = ({
            effect: e,
            actionTypeId: t,
            elementApi: n
        }) => r => {
            switch (t) {
                case Gt:
                case Vt:
                case kt:
                case Tn:
                    e(r, ct, n);
                    break;
                case bn:
                    e(r, mn, n);
                    break;
                case An:
                    e(r, _n, n);
                    break;
                case kd:
                    e(r, yr, n);
                    break;
                case Bt:
                    e(r, Qe, n), e(r, $e, n);
                    break;
                case Ut:
                case Ht:
                case Wt:
                    e(r, vo[t], n);
                    break;
                case _r:
                    e(r, Er, n);
                    break
            }
        }
    });
    var It = f(Io => {
        "use strict";
        Object.defineProperty(Io, "__esModule", {
            value: !0
        });

        function XR(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        XR(Io, {
            IX2BrowserSupport: function() {
                return GR
            },
            IX2EasingUtils: function() {
                return kR
            },
            IX2Easings: function() {
                return VR
            },
            IX2ElementsReducer: function() {
                return BR
            },
            IX2VanillaPlugins: function() {
                return UR
            },
            IX2VanillaUtils: function() {
                return HR
            }
        });
        var GR = zt((fr(), He(Uf))),
            VR = zt((Ki(), He(En))),
            kR = zt((ji(), He(Qf))),
            BR = zt((ed(), He(Jf))),
            UR = zt((lo(), He(ud))),
            HR = zt((Yd(), He(jd)));

        function Qd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (Qd = function(r) {
                return r ? n : t
            })(e)
        }

        function zt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = Qd(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
    });
    var Tr, nt, WR, zR, KR, jR, YR, QR, Ir, $d, $R, ZR, To, JR, eC, tC, nC, Zd, Jd = ce(() => {
        "use strict";
        Ce();
        Tr = re(It()), nt = re(xt()), {
            IX2_RAW_DATA_IMPORTED: WR,
            IX2_SESSION_STOPPED: zR,
            IX2_INSTANCE_ADDED: KR,
            IX2_INSTANCE_STARTED: jR,
            IX2_INSTANCE_REMOVED: YR,
            IX2_ANIMATION_FRAME_CHANGED: QR
        } = Ee, {
            optimizeFloat: Ir,
            applyEasing: $d,
            createBezierEasing: $R
        } = Tr.IX2EasingUtils, {
            RENDER_GENERAL: ZR
        } = _e, {
            getItemConfigByKey: To,
            getRenderType: JR,
            getStyleProp: eC
        } = Tr.IX2VanillaUtils, tC = (e, t) => {
            let {
                position: n,
                parameterId: r,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: y,
                skipToValue: d
            } = e, {
                parameters: p
            } = t.payload, v = Math.max(1 - s, .01), T = p[r];
            T == null && (v = 1, T = a);
            let I = Math.max(T, 0) || 0,
                S = Ir(I - n),
                m = y ? d : Ir(n + S * v),
                x = m * 100;
            if (m === n && e.current) return e;
            let A, N, D, P;
            for (let k = 0, {
                    length: B
                } = i; k < B; k++) {
                let {
                    keyframe: H,
                    actionItems: F
                } = i[k];
                if (k === 0 && (A = F[0]), x >= H) {
                    A = F[0];
                    let w = i[k + 1],
                        g = w && x !== H;
                    N = g ? w.actionItems[0] : null, g && (D = H / 100, P = (w.keyframe - H) / 100)
                }
            }
            let V = {};
            if (A && !N)
                for (let k = 0, {
                        length: B
                    } = o; k < B; k++) {
                    let H = o[k];
                    V[H] = To(u, H, A.config)
                } else if (A && N && D !== void 0 && P !== void 0) {
                    let k = (m - D) / P,
                        B = A.config.easing,
                        H = $d(B, k, l);
                    for (let F = 0, {
                            length: w
                        } = o; F < w; F++) {
                        let g = o[F],
                            O = To(u, g, A.config),
                            W = (To(u, g, N.config) - O) * H + O;
                        V[g] = W
                    }
                }
            return (0, nt.merge)(e, {
                position: m,
                current: V
            })
        }, nC = (e, t) => {
            let {
                active: n,
                origin: r,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: l,
                destinationKeys: y,
                pluginDuration: d,
                instanceDelay: p,
                customEasingFn: v,
                skipMotion: T
            } = e, I = u.config.easing, {
                duration: S,
                delay: m
            } = u.config;
            d != null && (S = d), m = p ? ? m, s === ZR ? S = 0 : (o || T) && (S = m = 0);
            let {
                now: x
            } = t.payload;
            if (n && r) {
                let A = x - (i + m);
                if (a) {
                    let k = x - i,
                        B = S + m,
                        H = Ir(Math.min(Math.max(0, k / B), 1));
                    e = (0, nt.set)(e, "verboseTimeElapsed", B * H)
                }
                if (A < 0) return e;
                let N = Ir(Math.min(Math.max(0, A / S), 1)),
                    D = $d(I, N, v),
                    P = {},
                    V = null;
                return y.length && (V = y.reduce((k, B) => {
                    let H = l[B],
                        F = parseFloat(r[B]) || 0,
                        g = (parseFloat(H) - F) * D + F;
                    return k[B] = g, k
                }, {})), P.current = V, P.position = N, N === 1 && (P.active = !1, P.complete = !0), (0, nt.merge)(e, P)
            }
            return e
        }, Zd = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case WR:
                    return t.payload.ixInstances || Object.freeze({});
                case zR:
                    return Object.freeze({});
                case KR:
                    {
                        let {
                            instanceId: n,
                            elementId: r,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: y,
                            origin: d,
                            destination: p,
                            immediate: v,
                            verbose: T,
                            continuous: I,
                            parameterId: S,
                            actionGroups: m,
                            smoothing: x,
                            restingValue: A,
                            pluginInstance: N,
                            pluginDuration: D,
                            instanceDelay: P,
                            skipMotion: V,
                            skipToValue: k
                        } = t.payload,
                        {
                            actionTypeId: B
                        } = i,
                        H = JR(B),
                        F = eC(H, B),
                        w = Object.keys(p).filter(O => p[O] != null && typeof p[O] != "string"),
                        {
                            easing: g
                        } = i.config;
                        return (0, nt.set)(e, n, {
                            id: n,
                            elementId: r,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: d,
                            destination: p,
                            destinationKeys: w,
                            immediate: v,
                            verbose: T,
                            current: null,
                            actionItem: i,
                            actionTypeId: B,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            renderType: H,
                            isCarrier: y,
                            styleProp: F,
                            continuous: I,
                            parameterId: S,
                            actionGroups: m,
                            smoothing: x,
                            restingValue: A,
                            pluginInstance: N,
                            pluginDuration: D,
                            instanceDelay: P,
                            skipMotion: V,
                            skipToValue: k,
                            customEasingFn: Array.isArray(g) && g.length === 4 ? $R(g) : void 0
                        })
                    }
                case jR:
                    {
                        let {
                            instanceId: n,
                            time: r
                        } = t.payload;
                        return (0, nt.mergeIn)(e, [n], {
                            active: !0,
                            complete: !1,
                            start: r
                        })
                    }
                case YR:
                    {
                        let {
                            instanceId: n
                        } = t.payload;
                        if (!e[n]) return e;
                        let r = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== n && (r[a] = e[a])
                        }
                        return r
                    }
                case QR:
                    {
                        let n = e,
                            r = Object.keys(e),
                            {
                                length: i
                            } = r;
                        for (let o = 0; o < i; o++) {
                            let s = r[o],
                                a = e[s],
                                u = a.continuous ? tC : nC;
                            n = (0, nt.set)(n, s, u(a, t))
                        }
                        return n
                    }
                default:
                    return e
            }
        }
    });
    var rC, iC, oC, ep, tp = ce(() => {
        "use strict";
        Ce();
        ({
            IX2_RAW_DATA_IMPORTED: rC,
            IX2_SESSION_STOPPED: iC,
            IX2_PARAMETER_CHANGED: oC
        } = Ee), ep = (e = {}, t) => {
            switch (t.type) {
                case rC:
                    return t.payload.ixParameters || {};
                case iC:
                    return {};
                case oC:
                    {
                        let {
                            key: n,
                            value: r
                        } = t.payload;
                        return e[n] = r,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var ip = {};
    xe(ip, {
        default: () => sC
    });
    var np, rp, aC, sC, op = ce(() => {
        "use strict";
        np = re(di());
        ps();
        Ds();
        qs();
        rp = re(It());
        Jd();
        tp();
        ({
            ixElements: aC
        } = rp.IX2ElementsReducer), sC = (0, np.combineReducers)({
            ixData: ds,
            ixRequest: Ns,
            ixSession: Fs,
            ixElements: aC,
            ixInstances: Zd,
            ixParameters: ep
        })
    });
    var sp = f((Bq, ap) => {
        var uC = at(),
            cC = ve(),
            lC = Je(),
            fC = "[object String]";

        function dC(e) {
            return typeof e == "string" || !cC(e) && lC(e) && uC(e) == fC
        }
        ap.exports = dC
    });
    var cp = f((Uq, up) => {
        var pC = Vi(),
            gC = pC("length");
        up.exports = gC
    });
    var fp = f((Hq, lp) => {
        var hC = "\\ud800-\\udfff",
            yC = "\\u0300-\\u036f",
            EC = "\\ufe20-\\ufe2f",
            vC = "\\u20d0-\\u20ff",
            mC = yC + EC + vC,
            _C = "\\ufe0e\\ufe0f",
            IC = "\\u200d",
            TC = RegExp("[" + IC + hC + mC + _C + "]");

        function bC(e) {
            return TC.test(e)
        }
        lp.exports = bC
    });
    var _p = f((Wq, mp) => {
        var pp = "\\ud800-\\udfff",
            AC = "\\u0300-\\u036f",
            SC = "\\ufe20-\\ufe2f",
            wC = "\\u20d0-\\u20ff",
            OC = AC + SC + wC,
            xC = "\\ufe0e\\ufe0f",
            RC = "[" + pp + "]",
            bo = "[" + OC + "]",
            Ao = "\\ud83c[\\udffb-\\udfff]",
            CC = "(?:" + bo + "|" + Ao + ")",
            gp = "[^" + pp + "]",
            hp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            yp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            PC = "\\u200d",
            Ep = CC + "?",
            vp = "[" + xC + "]?",
            LC = "(?:" + PC + "(?:" + [gp, hp, yp].join("|") + ")" + vp + Ep + ")*",
            NC = vp + Ep + LC,
            DC = "(?:" + [gp + bo + "?", bo, hp, yp, RC].join("|") + ")",
            dp = RegExp(Ao + "(?=" + Ao + ")|" + DC + NC, "g");

        function MC(e) {
            for (var t = dp.lastIndex = 0; dp.test(e);) ++t;
            return t
        }
        mp.exports = MC
    });
    var Tp = f((zq, Ip) => {
        var FC = cp(),
            qC = fp(),
            XC = _p();

        function GC(e) {
            return qC(e) ? XC(e) : FC(e)
        }
        Ip.exports = GC
    });
    var Ap = f((Kq, bp) => {
        var VC = tr(),
            kC = nr(),
            BC = yt(),
            UC = sp(),
            HC = Tp(),
            WC = "[object Map]",
            zC = "[object Set]";

        function KC(e) {
            if (e == null) return 0;
            if (BC(e)) return UC(e) ? HC(e) : e.length;
            var t = kC(e);
            return t == WC || t == zC ? e.size : VC(e).length
        }
        bp.exports = KC
    });
    var wp = f((jq, Sp) => {
        var jC = "Expected a function";

        function YC(e) {
            if (typeof e != "function") throw new TypeError(jC);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Sp.exports = YC
    });
    var So = f((Yq, Op) => {
        var QC = st(),
            $C = function() {
                try {
                    var e = QC(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Op.exports = $C
    });
    var wo = f((Qq, Rp) => {
        var xp = So();

        function ZC(e, t, n) {
            t == "__proto__" && xp ? xp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        Rp.exports = ZC
    });
    var Pp = f(($q, Cp) => {
        var JC = wo(),
            eP = Wn(),
            tP = Object.prototype,
            nP = tP.hasOwnProperty;

        function rP(e, t, n) {
            var r = e[t];
            (!(nP.call(e, t) && eP(r, n)) || n === void 0 && !(t in e)) && JC(e, t, n)
        }
        Cp.exports = rP
    });
    var Dp = f((Zq, Np) => {
        var iP = Pp(),
            oP = gn(),
            aP = $n(),
            Lp = Ye(),
            sP = Ft();

        function uP(e, t, n, r) {
            if (!Lp(e)) return e;
            t = oP(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = sP(t[i]),
                    l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var y = a[u];
                    l = r ? r(y, u, a) : void 0, l === void 0 && (l = Lp(y) ? y : aP(t[i + 1]) ? [] : {})
                }
                iP(a, u, l), a = a[u]
            }
            return e
        }
        Np.exports = uP
    });
    var Fp = f((Jq, Mp) => {
        var cP = or(),
            lP = Dp(),
            fP = gn();

        function dP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i;) {
                var s = t[r],
                    a = cP(e, s);
                n(a, s) && lP(o, fP(s, e), a)
            }
            return o
        }
        Mp.exports = dP
    });
    var Xp = f((eX, qp) => {
        var pP = Yn(),
            gP = Jr(),
            hP = Si(),
            yP = Ai(),
            EP = Object.getOwnPropertySymbols,
            vP = EP ? function(e) {
                for (var t = []; e;) pP(t, hP(e)), e = gP(e);
                return t
            } : yP;
        qp.exports = vP
    });
    var Vp = f((tX, Gp) => {
        function mP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e)) t.push(n);
            return t
        }
        Gp.exports = mP
    });
    var Bp = f((nX, kp) => {
        var _P = Ye(),
            IP = er(),
            TP = Vp(),
            bP = Object.prototype,
            AP = bP.hasOwnProperty;

        function SP(e) {
            if (!_P(e)) return TP(e);
            var t = IP(e),
                n = [];
            for (var r in e) r == "constructor" && (t || !AP.call(e, r)) || n.push(r);
            return n
        }
        kp.exports = SP
    });
    var Hp = f((rX, Up) => {
        var wP = Oi(),
            OP = Bp(),
            xP = yt();

        function RP(e) {
            return xP(e) ? wP(e, !0) : OP(e)
        }
        Up.exports = RP
    });
    var zp = f((iX, Wp) => {
        var CP = bi(),
            PP = Xp(),
            LP = Hp();

        function NP(e) {
            return CP(e, LP, PP)
        }
        Wp.exports = NP
    });
    var jp = f((oX, Kp) => {
        var DP = Gi(),
            MP = ut(),
            FP = Fp(),
            qP = zp();

        function XP(e, t) {
            if (e == null) return {};
            var n = DP(qP(e), function(r) {
                return [r]
            });
            return t = MP(t), FP(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        Kp.exports = XP
    });
    var Qp = f((aX, Yp) => {
        var GP = ut(),
            VP = wp(),
            kP = jp();

        function BP(e, t) {
            return kP(e, VP(GP(t)))
        }
        Yp.exports = BP
    });
    var Zp = f((sX, $p) => {
        var UP = tr(),
            HP = nr(),
            WP = un(),
            zP = ve(),
            KP = yt(),
            jP = Qn(),
            YP = er(),
            QP = Jn(),
            $P = "[object Map]",
            ZP = "[object Set]",
            JP = Object.prototype,
            eL = JP.hasOwnProperty;

        function tL(e) {
            if (e == null) return !0;
            if (KP(e) && (zP(e) || typeof e == "string" || typeof e.splice == "function" || jP(e) || QP(e) || WP(e))) return !e.length;
            var t = HP(e);
            if (t == $P || t == ZP) return !e.size;
            if (YP(e)) return !UP(e).length;
            for (var n in e)
                if (eL.call(e, n)) return !1;
            return !0
        }
        $p.exports = tL
    });
    var eg = f((uX, Jp) => {
        var nL = wo(),
            rL = fo(),
            iL = ut();

        function oL(e, t) {
            var n = {};
            return t = iL(t, 3), rL(e, function(r, i, o) {
                nL(n, i, t(r, i, o))
            }), n
        }
        Jp.exports = oL
    });
    var ng = f((cX, tg) => {
        function aL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }
        tg.exports = aL
    });
    var ig = f((lX, rg) => {
        var sL = sr();

        function uL(e) {
            return typeof e == "function" ? e : sL
        }
        rg.exports = uL
    });
    var ag = f((fX, og) => {
        var cL = ng(),
            lL = po(),
            fL = ig(),
            dL = ve();

        function pL(e, t) {
            var n = dL(e) ? cL : lL;
            return n(e, fL(t))
        }
        og.exports = pL
    });
    var ug = f((dX, sg) => {
        var gL = Ge(),
            hL = function() {
                return gL.Date.now()
            };
        sg.exports = hL
    });
    var fg = f((pX, lg) => {
        var yL = Ye(),
            Oo = ug(),
            cg = ur(),
            EL = "Expected a function",
            vL = Math.max,
            mL = Math.min;

        function _L(e, t, n) {
            var r, i, o, s, a, u, l = 0,
                y = !1,
                d = !1,
                p = !0;
            if (typeof e != "function") throw new TypeError(EL);
            t = cg(t) || 0, yL(n) && (y = !!n.leading, d = "maxWait" in n, o = d ? vL(cg(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

            function v(P) {
                var V = r,
                    k = i;
                return r = i = void 0, l = P, s = e.apply(k, V), s
            }

            function T(P) {
                return l = P, a = setTimeout(m, t), y ? v(P) : s
            }

            function I(P) {
                var V = P - u,
                    k = P - l,
                    B = t - V;
                return d ? mL(B, o - k) : B
            }

            function S(P) {
                var V = P - u,
                    k = P - l;
                return u === void 0 || V >= t || V < 0 || d && k >= o
            }

            function m() {
                var P = Oo();
                if (S(P)) return x(P);
                a = setTimeout(m, I(P))
            }

            function x(P) {
                return a = void 0, p && r ? v(P) : (r = i = void 0, s)
            }

            function A() {
                a !== void 0 && clearTimeout(a), l = 0, r = u = i = a = void 0
            }

            function N() {
                return a === void 0 ? s : x(Oo())
            }

            function D() {
                var P = Oo(),
                    V = S(P);
                if (r = arguments, i = this, u = P, V) {
                    if (a === void 0) return T(u);
                    if (d) return clearTimeout(a), a = setTimeout(m, t), v(u)
                }
                return a === void 0 && (a = setTimeout(m, t)), s
            }
            return D.cancel = A, D.flush = N, D
        }
        lg.exports = _L
    });
    var pg = f((gX, dg) => {
        var IL = fg(),
            TL = Ye(),
            bL = "Expected a function";

        function AL(e, t, n) {
            var r = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(bL);
            return TL(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), IL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        dg.exports = AL
    });
    var hg = {};
    xe(hg, {
        actionListPlaybackChanged: () => jt,
        animationFrameChanged: () => Ar,
        clearRequested: () => YL,
        elementStateChanged: () => Mo,
        eventListenerAdded: () => br,
        eventStateChanged: () => Lo,
        instanceAdded: () => No,
        instanceRemoved: () => Do,
        instanceStarted: () => Sr,
        mediaQueriesDefined: () => qo,
        parameterChanged: () => Kt,
        playbackRequested: () => KL,
        previewRequested: () => zL,
        rawDataImported: () => xo,
        sessionInitialized: () => Ro,
        sessionStarted: () => Co,
        sessionStopped: () => Po,
        stopRequested: () => jL,
        testFrameRendered: () => QL,
        viewportWidthChanged: () => Fo
    });
    var gg, SL, wL, OL, xL, RL, CL, PL, LL, NL, DL, ML, FL, qL, XL, GL, VL, kL, BL, UL, HL, WL, xo, Ro, Co, Po, zL, KL, jL, YL, br, QL, Lo, Ar, Kt, No, Sr, Do, Mo, jt, Fo, qo, wr = ce(() => {
        "use strict";
        Ce();
        gg = re(It()), {
            IX2_RAW_DATA_IMPORTED: SL,
            IX2_SESSION_INITIALIZED: wL,
            IX2_SESSION_STARTED: OL,
            IX2_SESSION_STOPPED: xL,
            IX2_PREVIEW_REQUESTED: RL,
            IX2_PLAYBACK_REQUESTED: CL,
            IX2_STOP_REQUESTED: PL,
            IX2_CLEAR_REQUESTED: LL,
            IX2_EVENT_LISTENER_ADDED: NL,
            IX2_TEST_FRAME_RENDERED: DL,
            IX2_EVENT_STATE_CHANGED: ML,
            IX2_ANIMATION_FRAME_CHANGED: FL,
            IX2_PARAMETER_CHANGED: qL,
            IX2_INSTANCE_ADDED: XL,
            IX2_INSTANCE_STARTED: GL,
            IX2_INSTANCE_REMOVED: VL,
            IX2_ELEMENT_STATE_CHANGED: kL,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: BL,
            IX2_VIEWPORT_WIDTH_CHANGED: UL,
            IX2_MEDIA_QUERIES_DEFINED: HL
        } = Ee, {
            reifyState: WL
        } = gg.IX2VanillaUtils, xo = e => ({
            type: SL,
            payload: { ...WL(e)
            }
        }), Ro = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: wL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Co = () => ({
            type: OL
        }), Po = () => ({
            type: xL
        }), zL = ({
            rawData: e,
            defer: t
        }) => ({
            type: RL,
            payload: {
                defer: t,
                rawData: e
            }
        }), KL = ({
            actionTypeId: e = Re.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: r,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: CL,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: s,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), jL = e => ({
            type: PL,
            payload: {
                actionListId: e
            }
        }), YL = () => ({
            type: LL
        }), br = (e, t) => ({
            type: NL,
            payload: {
                target: e,
                listenerParams: t
            }
        }), QL = (e = 1) => ({
            type: DL,
            payload: {
                step: e
            }
        }), Lo = (e, t) => ({
            type: ML,
            payload: {
                stateKey: e,
                newState: t
            }
        }), Ar = (e, t) => ({
            type: FL,
            payload: {
                now: e,
                parameters: t
            }
        }), Kt = (e, t) => ({
            type: qL,
            payload: {
                key: e,
                value: t
            }
        }), No = e => ({
            type: XL,
            payload: { ...e
            }
        }), Sr = (e, t) => ({
            type: GL,
            payload: {
                instanceId: e,
                time: t
            }
        }), Do = e => ({
            type: VL,
            payload: {
                instanceId: e
            }
        }), Mo = (e, t, n, r) => ({
            type: kL,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }), jt = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: BL,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Fo = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: UL,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), qo = () => ({
            type: HL
        })
    });
    var Ae = {};
    xe(Ae, {
        elementContains: () => Vo,
        getChildElements: () => aN,
        getClosestElement: () => Sn,
        getProperty: () => tN,
        getQuerySelector: () => Go,
        getRefType: () => ko,
        getSiblingElements: () => sN,
        getStyle: () => eN,
        getValidDocument: () => rN,
        isSiblingNode: () => oN,
        matchSelector: () => nN,
        queryDocument: () => iN,
        setStyle: () => JL
    });

    function JL(e, t, n) {
        e.style[t] = n
    }

    function eN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function tN(e, t) {
        return e[t]
    }

    function nN(e) {
        return t => t[Xo](e)
    }

    function Go({
        id: e,
        selector: t
    }) {
        if (e) {
            let n = e;
            if (e.indexOf(yg) !== -1) {
                let r = e.split(yg),
                    i = r[0];
                if (n = r[1], i !== document.documentElement.getAttribute(vg)) return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }

    function rN(e) {
        return e == null || e === document.documentElement.getAttribute(vg) ? document : null
    }

    function iN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Vo(e, t) {
        return e.contains(t)
    }

    function oN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function aN(e) {
        let t = [];
        for (let n = 0, {
                length: r
            } = e || []; n < r; n++) {
            let {
                children: i
            } = e[n], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function sN(e = []) {
        let t = [],
            n = [];
        for (let r = 0, {
                length: i
            } = e; r < i; r++) {
            let {
                parentNode: o
            } = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) continue;
            n.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function ko(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? $L : ZL : null
    }
    var Eg, Xo, yg, $L, ZL, vg, Sn, mg = ce(() => {
        "use strict";
        Eg = re(It());
        Ce();
        ({
            ELEMENT_MATCHES: Xo
        } = Eg.IX2BrowserSupport), {
            IX2_ID_DELIMITER: yg,
            HTML_ELEMENT: $L,
            PLAIN_OBJECT: ZL,
            WF_PAGE: vg
        } = _e;
        Sn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
                if (n[Xo] && n[Xo](t)) return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    });
    var Bo = f((EX, Ig) => {
        var uN = Ye(),
            _g = Object.create,
            cN = function() {
                function e() {}
                return function(t) {
                    if (!uN(t)) return {};
                    if (_g) return _g(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        Ig.exports = cN
    });
    var Or = f((vX, Tg) => {
        function lN() {}
        Tg.exports = lN
    });
    var Rr = f((mX, bg) => {
        var fN = Bo(),
            dN = Or();

        function xr(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        xr.prototype = fN(dN.prototype);
        xr.prototype.constructor = xr;
        bg.exports = xr
    });
    var Og = f((_X, wg) => {
        var Ag = St(),
            pN = un(),
            gN = ve(),
            Sg = Ag ? Ag.isConcatSpreadable : void 0;

        function hN(e) {
            return gN(e) || pN(e) || !!(Sg && e && e[Sg])
        }
        wg.exports = hN
    });
    var Cg = f((IX, Rg) => {
        var yN = Yn(),
            EN = Og();

        function xg(e, t, n, r, i) {
            var o = -1,
                s = e.length;
            for (n || (n = EN), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && n(a) ? t > 1 ? xg(a, t - 1, n, r, i) : yN(i, a) : r || (i[i.length] = a)
            }
            return i
        }
        Rg.exports = xg
    });
    var Lg = f((TX, Pg) => {
        var vN = Cg();

        function mN(e) {
            var t = e == null ? 0 : e.length;
            return t ? vN(e, 1) : []
        }
        Pg.exports = mN
    });
    var Dg = f((bX, Ng) => {
        function _N(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Ng.exports = _N
    });
    var qg = f((AX, Fg) => {
        var IN = Dg(),
            Mg = Math.max;

        function TN(e, t, n) {
            return t = Mg(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, i = -1, o = Mg(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
                    return a[t] = n(s), IN(e, this, a)
                }
        }
        Fg.exports = TN
    });
    var Gg = f((SX, Xg) => {
        function bN(e) {
            return function() {
                return e
            }
        }
        Xg.exports = bN
    });
    var Bg = f((wX, kg) => {
        var AN = Gg(),
            Vg = So(),
            SN = sr(),
            wN = Vg ? function(e, t) {
                return Vg(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: AN(t),
                    writable: !0
                })
            } : SN;
        kg.exports = wN
    });
    var Hg = f((OX, Ug) => {
        var ON = 800,
            xN = 16,
            RN = Date.now;

        function CN(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = RN(),
                    i = xN - (r - n);
                if (n = r, i > 0) {
                    if (++t >= ON) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Ug.exports = CN
    });
    var zg = f((xX, Wg) => {
        var PN = Bg(),
            LN = Hg(),
            NN = LN(PN);
        Wg.exports = NN
    });
    var jg = f((RX, Kg) => {
        var DN = Lg(),
            MN = qg(),
            FN = zg();

        function qN(e) {
            return FN(MN(e, void 0, DN), e + "")
        }
        Kg.exports = qN
    });
    var $g = f((CX, Qg) => {
        var Yg = xi(),
            XN = Yg && new Yg;
        Qg.exports = XN
    });
    var Jg = f((PX, Zg) => {
        function GN() {}
        Zg.exports = GN
    });
    var Uo = f((LX, th) => {
        var eh = $g(),
            VN = Jg(),
            kN = eh ? function(e) {
                return eh.get(e)
            } : VN;
        th.exports = kN
    });
    var rh = f((NX, nh) => {
        var BN = {};
        nh.exports = BN
    });
    var Ho = f((DX, oh) => {
        var ih = rh(),
            UN = Object.prototype,
            HN = UN.hasOwnProperty;

        function WN(e) {
            for (var t = e.name + "", n = ih[t], r = HN.call(ih, t) ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        oh.exports = WN
    });
    var Pr = f((MX, ah) => {
        var zN = Bo(),
            KN = Or(),
            jN = 4294967295;

        function Cr(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = jN, this.__views__ = []
        }
        Cr.prototype = zN(KN.prototype);
        Cr.prototype.constructor = Cr;
        ah.exports = Cr
    });
    var uh = f((FX, sh) => {
        function YN(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        sh.exports = YN
    });
    var lh = f((qX, ch) => {
        var QN = Pr(),
            $N = Rr(),
            ZN = uh();

        function JN(e) {
            if (e instanceof QN) return e.clone();
            var t = new $N(e.__wrapped__, e.__chain__);
            return t.__actions__ = ZN(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        ch.exports = JN
    });
    var ph = f((XX, dh) => {
        var eD = Pr(),
            fh = Rr(),
            tD = Or(),
            nD = ve(),
            rD = Je(),
            iD = lh(),
            oD = Object.prototype,
            aD = oD.hasOwnProperty;

        function Lr(e) {
            if (rD(e) && !nD(e) && !(e instanceof eD)) {
                if (e instanceof fh) return e;
                if (aD.call(e, "__wrapped__")) return iD(e)
            }
            return new fh(e)
        }
        Lr.prototype = tD.prototype;
        Lr.prototype.constructor = Lr;
        dh.exports = Lr
    });
    var hh = f((GX, gh) => {
        var sD = Pr(),
            uD = Uo(),
            cD = Ho(),
            lD = ph();

        function fD(e) {
            var t = cD(e),
                n = lD[t];
            if (typeof n != "function" || !(t in sD.prototype)) return !1;
            if (e === n) return !0;
            var r = uD(n);
            return !!r && e === r[0]
        }
        gh.exports = fD
    });
    var mh = f((VX, vh) => {
        var yh = Rr(),
            dD = jg(),
            pD = Uo(),
            Wo = Ho(),
            gD = ve(),
            Eh = hh(),
            hD = "Expected a function",
            yD = 8,
            ED = 32,
            vD = 128,
            mD = 256;

        function _D(e) {
            return dD(function(t) {
                var n = t.length,
                    r = n,
                    i = yh.prototype.thru;
                for (e && t.reverse(); r--;) {
                    var o = t[r];
                    if (typeof o != "function") throw new TypeError(hD);
                    if (i && !s && Wo(o) == "wrapper") var s = new yh([], !0)
                }
                for (r = s ? r : n; ++r < n;) {
                    o = t[r];
                    var a = Wo(o),
                        u = a == "wrapper" ? pD(o) : void 0;
                    u && Eh(u[0]) && u[1] == (vD | yD | ED | mD) && !u[4].length && u[9] == 1 ? s = s[Wo(u[0])].apply(s, u[3]) : s = o.length == 1 && Eh(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var l = arguments,
                        y = l[0];
                    if (s && l.length == 1 && gD(y)) return s.plant(y).value();
                    for (var d = 0, p = n ? t[d].apply(this, l) : y; ++d < n;) p = t[d].call(this, p);
                    return p
                }
            })
        }
        vh.exports = _D
    });
    var Ih = f((kX, _h) => {
        var ID = mh(),
            TD = ID();
        _h.exports = TD
    });
    var bh = f((BX, Th) => {
        function bD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Th.exports = bD
    });
    var Sh = f((UX, Ah) => {
        var AD = bh(),
            zo = ur();

        function SD(e, t, n) {
            return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = zo(n), n = n === n ? n : 0), t !== void 0 && (t = zo(t), t = t === t ? t : 0), AD(zo(e), t, n)
        }
        Ah.exports = SD
    });
    var Dh, Mh, Fh, qh, wD, OD, xD, RD, CD, PD, LD, ND, DD, MD, FD, qD, XD, GD, VD, Xh, Gh, kD, BD, UD, Vh, HD, WD, kh, zD, Ko, Bh, wh, Oh, Uh, On, KD, Ze, Hh, jD, Le, Be, xn, Wh, jo, xh, Yo, YD, wn, QD, $D, ZD, zh, Rh, JD, Ch, eM, tM, nM, Ph, Nr, Dr, Lh, Nh, Kh, jh = ce(() => {
        "use strict";
        Dh = re(Ih()), Mh = re(ar()), Fh = re(Sh());
        Ce();
        Qo();
        wr();
        qh = re(It()), {
            MOUSE_CLICK: wD,
            MOUSE_SECOND_CLICK: OD,
            MOUSE_DOWN: xD,
            MOUSE_UP: RD,
            MOUSE_OVER: CD,
            MOUSE_OUT: PD,
            DROPDOWN_CLOSE: LD,
            DROPDOWN_OPEN: ND,
            SLIDER_ACTIVE: DD,
            SLIDER_INACTIVE: MD,
            TAB_ACTIVE: FD,
            TAB_INACTIVE: qD,
            NAVBAR_CLOSE: XD,
            NAVBAR_OPEN: GD,
            MOUSE_MOVE: VD,
            PAGE_SCROLL_DOWN: Xh,
            SCROLL_INTO_VIEW: Gh,
            SCROLL_OUT_OF_VIEW: kD,
            PAGE_SCROLL_UP: BD,
            SCROLLING_IN_VIEW: UD,
            PAGE_FINISH: Vh,
            ECOMMERCE_CART_CLOSE: HD,
            ECOMMERCE_CART_OPEN: WD,
            PAGE_START: kh,
            PAGE_SCROLL: zD
        } = Ve, Ko = "COMPONENT_ACTIVE", Bh = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: wh
        } = _e, {
            getNamespacedParameterId: Oh
        } = qh.IX2VanillaUtils, Uh = e => t => typeof t == "object" && e(t) ? !0 : t, On = Uh(({
            element: e,
            nativeEvent: t
        }) => e === t.target), KD = Uh(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), Ze = (0, Dh.default)([On, KD]), Hh = (e, t) => {
            if (t) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: r
                } = n, i = r[t];
                if (i && !YD[i.eventTypeId]) return i
            }
            return null
        }, jD = ({
            store: e,
            event: t
        }) => {
            let {
                action: n
            } = t, {
                autoStopEventId: r
            } = n.config;
            return !!Hh(e, r)
        }, Le = ({
            store: e,
            event: t,
            element: n,
            eventStateKey: r
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, l = Hh(e, u);
            return l && Yt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + wh + r.split(wh)[1],
                actionListId: (0, Mh.default)(l, "action.config.actionListId")
            }), Yt({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: r,
                actionListId: a
            }), Rn({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: r,
                actionListId: a
            }), i
        }, Be = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r, xn = {
            handler: Be(Ze, Le)
        }, Wh = { ...xn,
            types: [Ko, Bh].join(" ")
        }, jo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], xh = "mouseover mouseout", Yo = {
            types: jo
        }, YD = {
            PAGE_START: kh,
            PAGE_FINISH: Vh
        }, wn = (() => {
            let e = window.pageXOffset !== void 0,
                n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0, Fh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), QD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), $D = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: n,
                target: r,
                relatedTarget: i
            } = t, o = e.contains(r);
            if (n === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(n === "mouseout" && o && s)
        }, ZD = e => {
            let {
                element: t,
                event: {
                    config: n
                }
            } = e, {
                clientWidth: r,
                clientHeight: i
            } = wn(), o = n.scrollOffsetValue, u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return QD(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }, zh = e => (t, n) => {
            let {
                type: r
            } = t.nativeEvent, i = [Ko, Bh].indexOf(r) !== -1 ? r === Ko : n.isActive, o = { ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }, Rh = e => (t, n) => {
            let r = {
                elementHovered: $D(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }, JD = e => (t, n) => {
            let r = { ...n,
                elementVisible: ZD(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }, Ch = e => (t, n = {}) => {
            let {
                stiffScrollTop: r,
                scrollHeight: i,
                innerHeight: o
            } = wn(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = s, y = l === "PX", d = i - o, p = Number((r / d).toFixed(2));
            if (n && n.percentTop === p) return n;
            let v = (y ? u : o * (u || 0) / 100) / d,
                T, I, S = 0;
            n && (T = p > n.percentTop, I = n.scrollingDown !== T, S = I ? p : n.anchorTop);
            let m = a === Xh ? p >= S + v : p <= S - v,
                x = { ...n,
                    percentTop: p,
                    inBounds: m,
                    anchorTop: S,
                    scrollingDown: T
                };
            return n && m && (I || x.inBounds !== n.inBounds) && e(t, x) || x
        }, eM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, tM = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t), r
        }, nM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t), r
        }, Ph = e => (t, n = {
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }, Nr = (e = !0) => ({ ...Wh,
            handler: Be(e ? Ze : On, zh((t, n) => n.isActive ? xn.handler(t, n) : n))
        }), Dr = (e = !0) => ({ ...Wh,
            handler: Be(e ? Ze : On, zh((t, n) => n.isActive ? n : xn.handler(t, n)))
        }), Lh = { ...Yo,
            handler: JD((e, t) => {
                let {
                    elementVisible: n
                } = t, {
                    event: r,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === Gh === n ? (Le(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Nh = .05, Kh = {
            [DD]: Nr(),
            [MD]: Dr(),
            [ND]: Nr(),
            [LD]: Dr(),
            [GD]: Nr(!1),
            [XD]: Dr(!1),
            [FD]: Nr(),
            [qD]: Dr(),
            [WD]: {
                types: "ecommerce-cart-open",
                handler: Be(Ze, Le)
            },
            [HD]: {
                types: "ecommerce-cart-close",
                handler: Be(Ze, Le)
            },
            [wD]: {
                types: "click",
                handler: Be(Ze, Ph((e, {
                    clickCount: t
                }) => {
                    jD(e) ? t === 1 && Le(e) : Le(e)
                }))
            },
            [OD]: {
                types: "click",
                handler: Be(Ze, Ph((e, {
                    clickCount: t
                }) => {
                    t === 2 && Le(e)
                }))
            },
            [xD]: { ...xn,
                types: "mousedown"
            },
            [RD]: { ...xn,
                types: "mouseup"
            },
            [CD]: {
                types: xh,
                handler: Be(Ze, Rh((e, t) => {
                    t.elementHovered && Le(e)
                }))
            },
            [PD]: {
                types: xh,
                handler: Be(Ze, Rh((e, t) => {
                    t.elementHovered || Le(e)
                }))
            },
            [VD]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: n,
                    nativeEvent: r,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: y = 0
                    } = n, {
                        clientX: d = o.clientX,
                        clientY: p = o.clientY,
                        pageX: v = o.pageX,
                        pageY: T = o.pageY
                    } = r, I = a === "X_AXIS", S = r.type === "mouseout", m = y / 100, x = u, A = !1;
                    switch (s) {
                        case je.VIEWPORT:
                            {
                                m = I ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case je.PAGE:
                            {
                                let {
                                    scrollLeft: N,
                                    scrollTop: D,
                                    scrollWidth: P,
                                    scrollHeight: V
                                } = wn();m = I ? Math.min(N + v, P) / P : Math.min(D + T, V) / V;
                                break
                            }
                        case je.ELEMENT:
                        default:
                            {
                                x = Oh(i, u);
                                let N = r.type.indexOf("mouse") === 0;
                                if (N && Ze({
                                        element: t,
                                        nativeEvent: r
                                    }) !== !0) break;
                                let D = t.getBoundingClientRect(),
                                    {
                                        left: P,
                                        top: V,
                                        width: k,
                                        height: B
                                    } = D;
                                if (!N && !eM({
                                        left: d,
                                        top: p
                                    }, D)) break;A = !0,
                                m = I ? (d - P) / k : (p - V) / B;
                                break
                            }
                    }
                    return S && (m > 1 - Nh || m < Nh) && (m = Math.round(m)), (s !== je.ELEMENT || A || A !== o.elementHovered) && (m = l ? 1 - m : m, e.dispatch(Kt(x, m))), {
                        elementHovered: A,
                        clientX: d,
                        clientY: p,
                        pageX: v,
                        pageY: T
                    }
                }
            },
            [zD]: {
                types: jo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: n,
                        reverse: r
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = wn(), a = i / (o - s);
                    a = r ? 1 - a : a, e.dispatch(Kt(n, a))
                }
            },
            [UD]: {
                types: jo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: n,
                    eventStateKey: r
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: l
                    } = wn(), {
                        basedOn: y,
                        selectedAxis: d,
                        continuousParameterGroupId: p,
                        startsEntering: v,
                        startsExiting: T,
                        addEndOffset: I,
                        addStartOffset: S,
                        addOffsetValue: m = 0,
                        endOffsetValue: x = 0
                    } = n, A = d === "X_AXIS";
                    if (y === je.VIEWPORT) {
                        let N = A ? o / a : s / u;
                        return N !== i.scrollPercent && t.dispatch(Kt(p, N)), {
                            scrollPercent: N
                        }
                    } else {
                        let N = Oh(r, p),
                            D = e.getBoundingClientRect(),
                            P = (S ? m : 0) / 100,
                            V = (I ? x : 0) / 100;
                        P = v ? P : 1 - P, V = T ? V : 1 - V;
                        let k = D.top + Math.min(D.height * P, l),
                            H = D.top + D.height * V - k,
                            F = Math.min(l + H, u),
                            g = Math.min(Math.max(0, l - k), F) / F;
                        return g !== i.scrollPercent && t.dispatch(Kt(N, g)), {
                            scrollPercent: g
                        }
                    }
                }
            },
            [Gh]: Lh,
            [kD]: Lh,
            [Xh]: { ...Yo,
                handler: Ch((e, t) => {
                    t.scrollingDown && Le(e)
                })
            },
            [BD]: { ...Yo,
                handler: Ch((e, t) => {
                    t.scrollingDown || Le(e)
                })
            },
            [Vh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Be(On, tM(Le))
            },
            [kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Be(On, nM(Le))
            }
        }
    });
    var fy = {};
    xe(fy, {
        observeRequests: () => TM,
        startActionGroup: () => Rn,
        startEngine: () => Vr,
        stopActionGroup: () => Yt,
        stopAllActionGroups: () => uy,
        stopEngine: () => kr
    });

    function TM(e) {
        Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: SM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: wM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: OM
        }), Tt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: xM
        })
    }

    function bM(e) {
        Tt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                kr(e), iy({
                    store: e,
                    elementApi: Ae
                }), Vr({
                    store: e,
                    allowEvents: !0
                }), oy()
            }
        })
    }

    function AM(e, t) {
        let n = Tt({
            store: e,
            select: ({
                ixSession: r
            }) => r.tick,
            onChange: r => {
                t(r), n()
            }
        })
    }

    function SM({
        rawData: e,
        defer: t
    }, n) {
        let r = () => {
            Vr({
                store: n,
                rawData: e,
                allowEvents: !0
            }), oy()
        };
        t ? setTimeout(r, 0) : r()
    }

    function oy() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function wM(e, t) {
        let {
            actionTypeId: n,
            actionListId: r,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: y
        } = e;
        if (r && i && y && a) {
            let d = y.actionLists[r];
            d && (y = fM({
                actionList: d,
                actionItemId: i,
                rawData: y
            }))
        }
        if (Vr({
                store: t,
                rawData: y,
                allowEvents: s,
                testManual: u
            }), r && n === Re.GENERAL_START_ACTION || $o(n)) {
            Yt({
                store: t,
                actionListId: r
            }), sy({
                store: t,
                actionListId: r,
                eventId: o
            });
            let d = Rn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: a,
                verbose: l
            });
            l && d && t.dispatch(jt({
                actionListId: r,
                isPlaying: !a
            }))
        }
    }

    function OM({
        actionListId: e
    }, t) {
        e ? Yt({
            store: t,
            actionListId: e
        }) : uy({
            store: t
        }), kr(t)
    }

    function xM(e, t) {
        kr(t), iy({
            store: t,
            elementApi: Ae
        })
    }

    function Vr({
        store: e,
        rawData: t,
        allowEvents: n,
        testManual: r
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(xo(t)), i.active || (e.dispatch(Ro({
            hasBoundaryNodes: !!document.querySelector(Fr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), n && (DM(e), RM(), e.getState().ixSession.hasDefinedMediaQueries && bM(e)), e.dispatch(Co()), CM(e, r))
    }

    function RM() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(Yh) === -1 && (e.className += ` ${Yh}`)
    }

    function CM(e, t) {
        let n = r => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(Ar(r, o)), t ? AM(e, n) : requestAnimationFrame(n))
        };
        n(window.performance.now())
    }

    function kr(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: n
            } = t;
            n.forEach(PM), hM(), e.dispatch(Po())
        }
    }

    function PM({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function LM({
        store: e,
        eventStateKey: t,
        eventTarget: n,
        eventId: r,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: y
        } = e.getState(), {
            events: d
        } = l, p = d[r], {
            eventTypeId: v
        } = p, T = {}, I = {}, S = [], {
            continuousActionGroups: m
        } = s, {
            id: x
        } = s;
        dM(v, i) && (x = pM(t, x));
        let A = y.hasBoundaryNodes && n ? Sn(n, Fr) : null;
        m.forEach(N => {
            let {
                keyframe: D,
                actionItems: P
            } = N;
            P.forEach(V => {
                let {
                    actionTypeId: k
                } = V, {
                    target: B
                } = V.config;
                if (!B) return;
                let H = B.boundaryMode ? A : null,
                    F = yM(B) + Zo + k;
                if (I[F] = NM(I[F], D, V), !T[F]) {
                    T[F] = !0;
                    let {
                        config: w
                    } = V;
                    qr({
                        config: w,
                        event: p,
                        eventTarget: n,
                        elementRoot: H,
                        elementApi: Ae
                    }).forEach(g => {
                        S.push({
                            element: g,
                            key: F
                        })
                    })
                }
            })
        }), S.forEach(({
            element: N,
            key: D
        }) => {
            let P = I[D],
                V = (0, rt.default)(P, "[0].actionItems[0]", {}),
                {
                    actionTypeId: k
                } = V,
                B = Gr(k) ? ea(k)(N, V) : null,
                H = Jo({
                    element: N,
                    actionItem: V,
                    elementApi: Ae
                }, B);
            ta({
                store: e,
                element: N,
                eventId: r,
                actionListId: o,
                actionItem: V,
                destination: H,
                continuous: !0,
                parameterId: x,
                actionGroups: P,
                smoothing: a,
                restingValue: u,
                pluginInstance: B
            })
        })
    }

    function NM(e = [], t, n) {
        let r = [...e],
            i;
        return r.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = r.length, r.push({
            keyframe: t,
            actionItems: []
        })), r[i].actionItems.push(n), r
    }

    function DM(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: n
        } = t;
        ay(e), (0, Qt.default)(n, (i, o) => {
            let s = Kh[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            VM({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: r
        } = e.getState();
        r.eventListeners.length && FM(e)
    }

    function FM(e) {
        let t = () => {
            ay(e)
        };
        MM.forEach(n => {
            window.addEventListener(n, t), e.dispatch(br(window, [n, t]))
        }), t()
    }

    function ay(e) {
        let {
            ixSession: t,
            ixData: n
        } = e.getState(), r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = n;
            e.dispatch(Fo({
                width: r,
                mediaQueries: i
            }))
        }
    }

    function VM({
        logic: e,
        store: t,
        events: n
    }) {
        kM(n);
        let {
            types: r,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = qM(n, GM);
        if (!(0, Zh.default)(a)) return;
        (0, Qt.default)(a, (d, p) => {
            let v = n[p],
                {
                    action: T,
                    id: I,
                    mediaQueries: S = o.mediaQueryKeys
                } = v,
                {
                    actionListId: m
                } = T.config;
            EM(S, o.mediaQueryKeys) || t.dispatch(qo()), T.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(A => {
                let {
                    continuousParameterGroupId: N
                } = A, D = (0, rt.default)(s, `${m}.continuousParameterGroups`, []), P = (0, $h.default)(D, ({
                    id: B
                }) => B === N), V = (A.smoothing || 0) / 100, k = (A.restingState || 0) / 100;
                P && d.forEach((B, H) => {
                    let F = I + Zo + H;
                    LM({
                        store: t,
                        eventStateKey: F,
                        eventTarget: B,
                        eventId: I,
                        eventConfig: A,
                        actionListId: m,
                        parameterGroup: P,
                        smoothing: V,
                        restingValue: k
                    })
                })
            }), (T.actionTypeId === Re.GENERAL_START_ACTION || $o(T.actionTypeId)) && sy({
                store: t,
                actionListId: m,
                eventId: I
            })
        });
        let u = d => {
                let {
                    ixSession: p
                } = t.getState();
                XM(a, (v, T, I) => {
                    let S = n[T],
                        m = p.eventState[I],
                        {
                            action: x,
                            mediaQueries: A = o.mediaQueryKeys
                        } = S;
                    if (!Xr(A, p.mediaQueryKey)) return;
                    let N = (D = {}) => {
                        let P = i({
                            store: t,
                            element: v,
                            event: S,
                            eventConfig: D,
                            nativeEvent: d,
                            eventStateKey: I
                        }, m);
                        vM(P, m) || t.dispatch(Lo(I, P))
                    };
                    x.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(N) : N()
                })
            },
            l = (0, ny.default)(u, IM),
            y = ({
                target: d = document,
                types: p,
                throttle: v
            }) => {
                p.split(" ").filter(Boolean).forEach(T => {
                    let I = v ? l : u;
                    d.addEventListener(T, I), t.dispatch(br(d, [T, I]))
                })
            };
        Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e)
    }

    function kM(e) {
        if (!_M) return;
        let t = {},
            n = "";
        for (let r in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[r], s = Go(o);
            t[s] || (i === Ve.MOUSE_CLICK || i === Ve.MOUSE_SECOND_CLICK) && (t[s] = !0, n += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n, document.body.appendChild(r)
        }
    }

    function sy({
        store: e,
        actionListId: t,
        eventId: n
    }) {
        let {
            ixData: r,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = r, a = s[n], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, rt.default)(u, "actionItemGroups[0].actionItems", []),
                y = (0, rt.default)(a, "mediaQueries", r.mediaQueryKeys);
            if (!Xr(y, i.mediaQueryKey)) return;
            l.forEach(d => {
                let {
                    config: p,
                    actionTypeId: v
                } = d, T = p ? .target ? .useEventTarget === !0 && p ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : p, I = qr({
                    config: T,
                    event: a,
                    elementApi: Ae
                }), S = Gr(v);
                I.forEach(m => {
                    let x = S ? ea(v)(m, d) : null;
                    ta({
                        destination: Jo({
                            element: m,
                            actionItem: d,
                            elementApi: Ae
                        }, x),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: x
                    })
                })
            })
        }
    }

    function uy({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, Qt.default)(t, n => {
            if (!n.continuous) {
                let {
                    actionListId: r,
                    verbose: i
                } = n;
                na(n, e), i && e.dispatch(jt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        })
    }

    function Yt({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && n ? Sn(n, Fr) : null;
        (0, Qt.default)(o, u => {
            let l = (0, rt.default)(u, "actionItem.config.target.boundaryMode"),
                y = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && y) {
                if (a && l && !Vo(a, u.element)) return;
                na(u, e), u.verbose && e.dispatch(jt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Rn({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: y
        } = u, d = y[t] || {}, {
            mediaQueries: p = u.mediaQueryKeys
        } = d, v = (0, rt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: T,
            useFirstGroupAsInitialState: I
        } = v;
        if (!T || !T.length) return !1;
        o >= T.length && (0, rt.default)(d, "config.loop") && (o = 0), o === 0 && I && o++;
        let m = (o === 0 || o === 1 && I) && $o(d.action ? .actionTypeId) ? d.config.delay : void 0,
            x = (0, rt.default)(T, [o, "actionItems"], []);
        if (!x.length || !Xr(p, l.mediaQueryKey)) return !1;
        let A = l.hasBoundaryNodes && n ? Sn(n, Fr) : null,
            N = uM(x),
            D = !1;
        return x.forEach((P, V) => {
            let {
                config: k,
                actionTypeId: B
            } = P, H = Gr(B), {
                target: F
            } = k;
            if (!F) return;
            let w = F.boundaryMode ? A : null;
            qr({
                config: k,
                event: d,
                eventTarget: n,
                elementRoot: w,
                elementApi: Ae
            }).forEach((O, L) => {
                let M = H ? ea(B)(O, P) : null,
                    W = H ? mM(B)(O, P) : null;
                D = !0;
                let K = N === V && L === 0,
                    ee = cM({
                        element: O,
                        actionItem: P
                    }),
                    fe = Jo({
                        element: O,
                        actionItem: P,
                        elementApi: Ae
                    }, M);
                ta({
                    store: e,
                    element: O,
                    actionItem: P,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: K,
                    computedStyle: ee,
                    destination: fe,
                    immediate: s,
                    verbose: a,
                    pluginInstance: M,
                    pluginDuration: W,
                    instanceDelay: m
                })
            })
        }), D
    }

    function ta(e) {
        let {
            store: t,
            computedStyle: n,
            ...r
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: l,
            eventId: y
        } = r, d = !u, p = aM(), {
            ixElements: v,
            ixSession: T,
            ixData: I
        } = t.getState(), S = oM(v, i), {
            refState: m
        } = v[S] || {}, x = ko(i), A = T.reducedMotion && hi[o.actionTypeId], N;
        if (A && u) switch (I.events[y] ? .eventTypeId) {
            case Ve.MOUSE_MOVE:
            case Ve.MOUSE_MOVE_IN_VIEWPORT:
                N = l;
                break;
            default:
                N = .5;
                break
        }
        let D = lM(i, m, n, o, Ae, a);
        if (t.dispatch(No({
                instanceId: p,
                elementId: S,
                origin: D,
                refType: x,
                skipMotion: A,
                skipToValue: N,
                ...r
            })), cy(document.body, "ix2-animation-started", p), s) {
            BM(t, p);
            return
        }
        Tt({
            store: t,
            select: ({
                ixInstances: P
            }) => P[p],
            onChange: ly
        }), d && t.dispatch(Sr(p, T.tick))
    }

    function na(e, t) {
        cy(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: n,
            actionItem: r
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[n] || {};
        s === ry && gM(o, r, Ae), t.dispatch(Do(e.id))
    }

    function cy(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function BM(e, t) {
        let {
            ixParameters: n
        } = e.getState();
        e.dispatch(Sr(t, 0)), e.dispatch(Ar(performance.now(), n));
        let {
            ixInstances: r
        } = e.getState();
        ly(r[t], e)
    }

    function ly(e, t) {
        let {
            active: n,
            continuous: r,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: l,
            groupIndex: y,
            eventId: d,
            eventTarget: p,
            eventStateKey: v,
            actionListId: T,
            isCarrier: I,
            styleProp: S,
            verbose: m,
            pluginInstance: x
        } = e, {
            ixData: A,
            ixSession: N
        } = t.getState(), {
            events: D
        } = A, P = D && D[d] ? D[d] : {}, {
            mediaQueries: V = A.mediaQueryKeys
        } = P;
        if (Xr(V, N.mediaQueryKey) && (r || n || i)) {
            if (l || u === iM && i) {
                t.dispatch(Mo(o, a, l, s));
                let {
                    ixElements: k
                } = t.getState(), {
                    ref: B,
                    refType: H,
                    refState: F
                } = k[o] || {}, w = F && F[a];
                (H === ry || Gr(a)) && sM(B, F, w, d, s, S, Ae, u, x)
            }
            if (i) {
                if (I) {
                    let k = Rn({
                        store: t,
                        eventId: d,
                        eventTarget: p,
                        eventStateKey: v,
                        actionListId: T,
                        groupIndex: y + 1,
                        verbose: m
                    });
                    m && !k && t.dispatch(jt({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                na(e, t)
            }
        }
    }
    var $h, rt, Zh, Jh, ey, ty, Qt, ny, Mr, rM, $o, Zo, Fr, ry, iM, Yh, qr, oM, Jo, Tt, aM, sM, iy, uM, cM, lM, fM, dM, pM, Xr, gM, hM, yM, EM, vM, Gr, ea, mM, Qh, _M, IM, MM, qM, XM, GM, Qo = ce(() => {
        "use strict";
        $h = re(Hi()), rt = re(ar()), Zh = re(Ap()), Jh = re(Qp()), ey = re(Zp()), ty = re(eg()), Qt = re(ag()), ny = re(pg());
        Ce();
        Mr = re(It());
        wr();
        mg();
        jh();
        rM = Object.keys(Xn), $o = e => rM.includes(e), {
            COLON_DELIMITER: Zo,
            BOUNDARY_SELECTOR: Fr,
            HTML_ELEMENT: ry,
            RENDER_GENERAL: iM,
            W_MOD_IX: Yh
        } = _e, {
            getAffectedElements: qr,
            getElementId: oM,
            getDestinationValues: Jo,
            observeStore: Tt,
            getInstanceId: aM,
            renderHTMLElement: sM,
            clearAllStyles: iy,
            getMaxDurationItemIndex: uM,
            getComputedStyle: cM,
            getInstanceOrigin: lM,
            reduceListToGroup: fM,
            shouldNamespaceEventParameter: dM,
            getNamespacedParameterId: pM,
            shouldAllowMediaQuery: Xr,
            cleanupHTMLElement: gM,
            clearObjectCache: hM,
            stringifyTarget: yM,
            mediaQueriesEqual: EM,
            shallowEqual: vM
        } = Mr.IX2VanillaUtils, {
            isPluginType: Gr,
            createPluginInstance: ea,
            getPluginDuration: mM
        } = Mr.IX2VanillaPlugins, Qh = navigator.userAgent, _M = Qh.match(/iPad/i) || Qh.match(/iPhone/), IM = 12;
        MM = ["resize", "orientationchange"];
        qM = (e, t) => (0, Jh.default)((0, ty.default)(e, t), ey.default), XM = (e, t) => {
            (0, Qt.default)(e, (n, r) => {
                n.forEach((i, o) => {
                    let s = r + Zo + o;
                    t(i, r, s)
                })
            })
        }, GM = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return qr({
                config: t,
                elementApi: Ae
            })
        }
    });
    var gy = f(ia => {
        "use strict";
        Object.defineProperty(ia, "__esModule", {
            value: !0
        });

        function UM(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        UM(ia, {
            actions: function() {
                return zM
            },
            destroy: function() {
                return py
            },
            init: function() {
                return QM
            },
            setEnv: function() {
                return YM
            },
            store: function() {
                return Br
            }
        });
        var HM = di(),
            WM = KM((op(), He(ip))),
            ra = (Qo(), He(fy)),
            zM = jM((wr(), He(hg)));

        function KM(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function dy(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (dy = function(r) {
                return r ? n : t
            })(e)
        }

        function jM(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = dy(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
        var Br = (0, HM.createStore)(WM.default);

        function YM(e) {
            e() && (0, ra.observeRequests)(Br)
        }

        function QM(e) {
            py(), (0, ra.startEngine)({
                store: Br,
                rawData: e,
                allowEvents: !0
            })
        }

        function py() {
            (0, ra.stopEngine)(Br)
        }
    });
    var vy = f((JX, Ey) => {
        "use strict";
        var hy = ze(),
            yy = gy();
        yy.setEnv(hy.env);
        hy.define("ix2", Ey.exports = function() {
            return yy
        })
    });
    var _y = f((eG, my) => {
        "use strict";
        var $t = ze();
        $t.define("links", my.exports = function(e, t) {
            var n = {},
                r = e(window),
                i, o = $t.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                y = /\/$/,
                d, p;
            n.ready = n.design = n.preview = v;

            function v() {
                i = o && $t.env("design"), p = $t.env("slug") || s.pathname || "", $t.scroll.off(I), d = [];
                for (var m = document.links, x = 0; x < m.length; ++x) T(m[x]);
                d.length && ($t.scroll.on(I), I())
            }

            function T(m) {
                if (!m.getAttribute("hreflang")) {
                    var x = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (a.href = x, !(x.indexOf(":") >= 0)) {
                        var A = e(m);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var N = e(a.hash);
                            N.length && d.push({
                                link: A,
                                sec: N,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var D = a.href === s.href || x === p || l.test(x) && y.test(p);
                            S(A, u, D)
                        }
                    }
                }
            }

            function I() {
                var m = r.scrollTop(),
                    x = r.height();
                t.each(d, function(A) {
                    if (!A.link.attr("hreflang")) {
                        var N = A.link,
                            D = A.sec,
                            P = D.offset().top,
                            V = D.outerHeight(),
                            k = x * .5,
                            B = D.is(":visible") && P + V - k >= m && P + k <= m + x;
                        A.active !== B && (A.active = B, S(N, u, B))
                    }
                })
            }

            function S(m, x, A) {
                var N = m.hasClass(x);
                A && N || !A && !N || (A ? m.addClass(x) : m.removeClass(x))
            }
            return n
        })
    });
    var Ty = f((tG, Iy) => {
        "use strict";
        var Ur = ze();
        Ur.define("scroll", Iy.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                n = window.location,
                r = T() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(w) {
                    window.setTimeout(w, 15)
                },
                u = Ur.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                y = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
                p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                v = document.createElement("style");
            v.appendChild(document.createTextNode(p));

            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;

            function S(w) {
                return I.test(w.hash) && w.host + w.pathname === n.host + n.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function A(w, g) {
                var O;
                switch (g) {
                    case "add":
                        O = w.attr("tabindex"), O ? w.attr("data-wf-tabindex-swap", O) : w.attr("tabindex", "-1");
                        break;
                    case "remove":
                        O = w.attr("data-wf-tabindex-swap"), O ? (w.attr("tabindex", O), w.removeAttr("data-wf-tabindex-swap")) : w.removeAttr("tabindex");
                        break
                }
                w.toggleClass("wf-force-outline-none", g === "add")
            }

            function N(w) {
                var g = w.currentTarget;
                if (!(Ur.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var O = S(g) ? g.hash : "";
                    if (O !== "") {
                        var L = e(O);
                        L.length && (w && (w.preventDefault(), w.stopPropagation()), D(O, w), window.setTimeout(function() {
                            P(L, function() {
                                A(L, "add"), L.get(0).focus({
                                    preventScroll: !0
                                }), A(L, "remove")
                            })
                        }, w ? 0 : 300))
                    }
                }
            }

            function D(w) {
                if (n.hash !== w && r && r.pushState && !(Ur.env.chrome && n.protocol === "file:")) {
                    var g = r.state && r.state.hash;
                    g !== w && r.pushState({
                        hash: w
                    }, "", w)
                }
            }

            function P(w, g) {
                var O = i.scrollTop(),
                    L = V(w);
                if (O !== L) {
                    var M = k(w, O, L),
                        W = Date.now(),
                        K = function() {
                            var ee = Date.now() - W;
                            window.scroll(0, B(O, L, ee, M)), ee <= M ? a(K) : typeof g == "function" && g()
                        };
                    a(K)
                }
            }

            function V(w) {
                var g = e(l),
                    O = g.css("position") === "fixed" ? g.outerHeight() : 0,
                    L = w.offset().top - O;
                if (w.data("scroll") === "mid") {
                    var M = i.height() - O,
                        W = w.outerHeight();
                    W < M && (L -= Math.round((M - W) / 2))
                }
                return L
            }

            function k(w, g, O) {
                if (x()) return 0;
                var L = 1;
                return s.add(w).each(function(M, W) {
                    var K = parseFloat(W.getAttribute("data-scroll-time"));
                    !isNaN(K) && K >= 0 && (L = K)
                }), (472.143 * Math.log(Math.abs(g - O) + 125) - 2e3) * L
            }

            function B(w, g, O, L) {
                return O > L ? g : w + (g - w) * H(O / L)
            }

            function H(w) {
                return w < .5 ? 4 * w * w * w : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1
            }

            function F() {
                var {
                    WF_CLICK_EMPTY: w,
                    WF_CLICK_SCROLL: g
                } = t;
                o.on(g, d, N), o.on(w, y, function(O) {
                    O.preventDefault()
                }), document.head.insertBefore(v, document.head.firstChild)
            }
            return {
                ready: F
            }
        })
    });
    var Ay = f((nG, by) => {
        "use strict";
        var $M = ze();
        $M.define("touch", by.exports = function(e) {
            var t = {},
                n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new r(o) : null
            };

            function r(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, y;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", p, !1), o.addEventListener("touchend", v, !1), o.addEventListener("touchcancel", T, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", p, !1), o.addEventListener("mouseup", v, !1), o.addEventListener("mouseout", T, !1);

                function d(S) {
                    var m = S.touches;
                    m && m.length > 1 || (s = !0, m ? (a = !0, l = m[0].clientX) : l = S.clientX, y = l)
                }

                function p(S) {
                    if (s) {
                        if (a && S.type === "mousemove") {
                            S.preventDefault(), S.stopPropagation();
                            return
                        }
                        var m = S.touches,
                            x = m ? m[0].clientX : S.clientX,
                            A = x - y;
                        y = x, Math.abs(A) > u && n && String(n()) === "" && (i("swipe", S, {
                            direction: A > 0 ? "right" : "left"
                        }), T())
                    }
                }

                function v(S) {
                    if (s && (s = !1, a && S.type === "mouseup")) {
                        S.preventDefault(), S.stopPropagation(), a = !1;
                        return
                    }
                }

                function T() {
                    s = !1
                }

                function I() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", p, !1), o.removeEventListener("touchend", v, !1), o.removeEventListener("touchcancel", T, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", p, !1), o.removeEventListener("mouseup", v, !1), o.removeEventListener("mouseout", T, !1), o = null
                }
                this.destroy = I
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var wy = f((rG, Sy) => {
        "use strict";
        var ft = ze(),
            ZM = qn(),
            me = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        ft.define("navbar", Sy.exports = function(e, t) {
            var n = {},
                r = e.tram,
                i = e(window),
                o = e(document),
                s = t.debounce,
                a, u, l, y, d = ft.env(),
                p = '<div class="w-nav-overlay" data-wf-ignore />',
                v = ".w-nav",
                T = "w--open",
                I = "w--nav-dropdown-open",
                S = "w--nav-dropdown-toggle-open",
                m = "w--nav-dropdown-list-open",
                x = "w--nav-link-open",
                A = ZM.triggers,
                N = e();
            n.ready = n.design = n.preview = D, n.destroy = function() {
                N = e(), P(), u && u.length && u.each(H)
            };

            function D() {
                l = d && ft.env("design"), y = ft.env("editor"), a = e(document.body), u = o.find(v), u.length && (u.each(B), P(), V())
            }

            function P() {
                ft.resize.off(k)
            }

            function V() {
                ft.resize.on(k)
            }

            function k() {
                u.each(Y)
            }

            function B(h, X) {
                var U = e(X),
                    G = e.data(X, v);
                G || (G = e.data(X, v, {
                    open: !1,
                    el: U,
                    config: {},
                    selectedIdx: -1
                })), G.menu = U.find(".w-nav-menu"), G.links = G.menu.find(".w-nav-link"), G.dropdowns = G.menu.find(".w-dropdown"), G.dropdownToggle = G.menu.find(".w-dropdown-toggle"), G.dropdownList = G.menu.find(".w-dropdown-list"), G.button = U.find(".w-nav-button"), G.container = U.find(".w-container"), G.overlayContainerId = "w-nav-overlay-" + h, G.outside = Ne(G);
                var le = U.find(".w-nav-brand");
                le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"), G.button.attr("style", "-webkit-user-select: text;"), G.button.attr("aria-label") == null && G.button.attr("aria-label", "menu"), G.button.attr("role", "button"), G.button.attr("tabindex", "0"), G.button.attr("aria-controls", G.overlayContainerId), G.button.attr("aria-haspopup", "menu"), G.button.attr("aria-expanded", "false"), G.el.off(v), G.button.off(v), G.menu.off(v), g(G), l ? (F(G), G.el.on("setting" + v, O(G))) : (w(G), G.button.on("click" + v, ee(G)), G.menu.on("click" + v, "a", fe(G)), G.button.on("keydown" + v, L(G)), G.el.on("keydown" + v, M(G))), Y(h, X)
            }

            function H(h, X) {
                var U = e.data(X, v);
                U && (F(U), e.removeData(X, v))
            }

            function F(h) {
                h.overlay && (se(h, !0), h.overlay.remove(), h.overlay = null)
            }

            function w(h) {
                h.overlay || (h.overlay = e(p).appendTo(h.el), h.overlay.attr("id", h.overlayContainerId), h.parent = h.menu.parent(), se(h, !0))
            }

            function g(h) {
                var X = {},
                    U = h.config || {},
                    G = X.animation = h.el.attr("data-animation") || "default";
                X.animOver = /^over/.test(G), X.animDirect = /left$/.test(G) ? -1 : 1, U.animation !== G && h.open && t.defer(K, h), X.easing = h.el.attr("data-easing") || "ease", X.easing2 = h.el.attr("data-easing2") || "ease";
                var le = h.el.attr("data-duration");
                X.duration = le != null ? Number(le) : 400, X.docHeight = h.el.attr("data-doc-height"), h.config = X
            }

            function O(h) {
                return function(X, U) {
                    U = U || {};
                    var G = i.width();
                    g(h), U.open === !0 && it(h, !0), U.open === !1 && se(h, !0), h.open && t.defer(function() {
                        G !== i.width() && K(h)
                    })
                }
            }

            function L(h) {
                return function(X) {
                    switch (X.keyCode) {
                        case me.SPACE:
                        case me.ENTER:
                            return ee(h)(), X.preventDefault(), X.stopPropagation();
                        case me.ESCAPE:
                            return se(h), X.preventDefault(), X.stopPropagation();
                        case me.ARROW_RIGHT:
                        case me.ARROW_DOWN:
                        case me.HOME:
                        case me.END:
                            return h.open ? (X.keyCode === me.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, W(h), X.preventDefault(), X.stopPropagation()) : (X.preventDefault(), X.stopPropagation())
                    }
                }
            }

            function M(h) {
                return function(X) {
                    if (h.open) switch (h.selectedIdx = h.links.index(document.activeElement), X.keyCode) {
                        case me.HOME:
                        case me.END:
                            return X.keyCode === me.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, W(h), X.preventDefault(), X.stopPropagation();
                        case me.ESCAPE:
                            return se(h), h.button.focus(), X.preventDefault(), X.stopPropagation();
                        case me.ARROW_LEFT:
                        case me.ARROW_UP:
                            return h.selectedIdx = Math.max(-1, h.selectedIdx - 1), W(h), X.preventDefault(), X.stopPropagation();
                        case me.ARROW_RIGHT:
                        case me.ARROW_DOWN:
                            return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1), W(h), X.preventDefault(), X.stopPropagation()
                    }
                }
            }

            function W(h) {
                if (h.links[h.selectedIdx]) {
                    var X = h.links[h.selectedIdx];
                    X.focus(), fe(X)
                }
            }

            function K(h) {
                h.open && (se(h, !0), it(h, !0))
            }

            function ee(h) {
                return s(function() {
                    h.open ? se(h) : it(h)
                })
            }

            function fe(h) {
                return function(X) {
                    var U = e(this),
                        G = U.attr("href");
                    if (!ft.validClick(X.currentTarget)) {
                        X.preventDefault();
                        return
                    }
                    G && G.indexOf("#") === 0 && h.open && se(h)
                }
            }

            function Ne(h) {
                return h.outside && o.off("click" + v, h.outside),
                    function(X) {
                        var U = e(X.target);
                        y && U.closest(".w-editor-bem-EditorOverlay").length || ge(h, U)
                    }
            }
            var ge = s(function(h, X) {
                if (h.open) {
                    var U = X.closest(".w-nav-menu");
                    h.menu.is(U) || se(h)
                }
            });

            function Y(h, X) {
                var U = e.data(X, v),
                    G = U.collapsed = U.button.css("display") !== "none";
                if (U.open && !G && !l && se(U, !0), U.container.length) {
                    var le = Se(U);
                    U.links.each(le), U.dropdowns.each(le)
                }
                U.open && Zt(U)
            }
            var te = "max-width";

            function Se(h) {
                var X = h.container.css(te);
                return X === "none" && (X = ""),
                    function(U, G) {
                        G = e(G), G.css(te, ""), G.css(te) === "none" && G.css(te, X)
                    }
            }

            function we(h, X) {
                X.setAttribute("data-nav-menu-open", "")
            }

            function pt(h, X) {
                X.removeAttribute("data-nav-menu-open")
            }

            function it(h, X) {
                if (h.open) return;
                h.open = !0, h.menu.each(we), h.links.addClass(x), h.dropdowns.addClass(I), h.dropdownToggle.addClass(S), h.dropdownList.addClass(m), h.button.addClass(T);
                var U = h.config,
                    G = U.animation;
                (G === "none" || !r.support.transform || U.duration <= 0) && (X = !0);
                var le = Zt(h),
                    Jt = h.menu.outerHeight(!0),
                    gt = h.menu.outerWidth(!0),
                    c = h.el.height(),
                    E = h.el[0];
                if (Y(0, E), A.intro(0, E), ft.redraw.up(), l || o.on("click" + v, h.outside), X) {
                    C();
                    return
                }
                var _ = "transform " + U.duration + "ms " + U.easing;
                if (h.overlay && (N = h.menu.prev(), h.overlay.show().append(h.menu)), U.animOver) {
                    r(h.menu).add(_).set({
                        x: U.animDirect * gt,
                        height: le
                    }).start({
                        x: 0
                    }).then(C), h.overlay && h.overlay.width(gt);
                    return
                }
                var b = c + Jt;
                r(h.menu).add(_).set({
                    y: -b
                }).start({
                    y: 0
                }).then(C);

                function C() {
                    h.button.attr("aria-expanded", "true")
                }
            }

            function Zt(h) {
                var X = h.config,
                    U = X.docHeight ? o.height() : a.height();
                return X.animOver ? h.menu.height(U) : h.el.css("position") !== "fixed" && (U -= h.el.outerHeight(!0)), h.overlay && h.overlay.height(U), U
            }

            function se(h, X) {
                if (!h.open) return;
                h.open = !1, h.button.removeClass(T);
                var U = h.config;
                if ((U.animation === "none" || !r.support.transform || U.duration <= 0) && (X = !0), A.outro(0, h.el[0]), o.off("click" + v, h.outside), X) {
                    r(h.menu).stop(), E();
                    return
                }
                var G = "transform " + U.duration + "ms " + U.easing2,
                    le = h.menu.outerHeight(!0),
                    Jt = h.menu.outerWidth(!0),
                    gt = h.el.height();
                if (U.animOver) {
                    r(h.menu).add(G).start({
                        x: Jt * U.animDirect
                    }).then(E);
                    return
                }
                var c = gt + le;
                r(h.menu).add(G).start({
                    y: -c
                }).then(E);

                function E() {
                    h.menu.height(""), r(h.menu).set({
                        x: 0,
                        y: 0
                    }), h.menu.each(pt), h.links.removeClass(x), h.dropdowns.removeClass(I), h.dropdownToggle.removeClass(S), h.dropdownList.removeClass(m), h.overlay && h.overlay.children().length && (N.length ? h.menu.insertAfter(N) : h.menu.prependTo(h.parent), h.overlay.attr("style", "").hide()), h.el.triggerHandler("w-close"), h.button.attr("aria-expanded", "false")
                }
            }
            return n
        })
    });
    var xy = f((iG, Oy) => {
        "use strict";
        var dt = ze(),
            JM = qn();
        dt.define("tabs", Oy.exports = function(e) {
            var t = {},
                n = e.tram,
                r = e(document),
                i, o, s = dt.env,
                a = s.safari,
                u = s(),
                l = "data-w-tab",
                y = "data-w-pane",
                d = ".w-tabs",
                p = "w--current",
                v = "w--tab-active",
                T = JM.triggers,
                I = !1;
            t.ready = t.design = t.preview = S, t.redraw = function() {
                I = !0, S(), I = !1
            }, t.destroy = function() {
                i = r.find(d), i.length && (i.each(A), m())
            };

            function S() {
                o = u && dt.env("design"), i = r.find(d), i.length && (i.each(N), dt.env("preview") && !I && i.each(A), m(), x())
            }

            function m() {
                dt.redraw.off(t.redraw)
            }

            function x() {
                dt.redraw.on(t.redraw)
            }

            function A(F, w) {
                var g = e.data(w, d);
                g && (g.links && g.links.each(T.reset), g.panes && g.panes.each(T.reset))
            }

            function N(F, w) {
                var g = d.substr(1) + "-" + F,
                    O = e(w),
                    L = e.data(w, d);
                if (L || (L = e.data(w, d, {
                        el: O,
                        config: {}
                    })), L.current = null, L.tabIdentifier = g + "-" + l, L.paneIdentifier = g + "-" + y, L.menu = O.children(".w-tab-menu"), L.links = L.menu.children(".w-tab-link"), L.content = O.children(".w-tab-content"), L.panes = L.content.children(".w-tab-pane"), L.el.off(d), L.links.off(d), L.menu.attr("role", "tablist"), L.links.attr("tabindex", "-1"), D(L), !o) {
                    L.links.on("click" + d, V(L)), L.links.on("keydown" + d, k(L));
                    var M = L.links.filter("." + p),
                        W = M.attr(l);
                    W && B(L, {
                        tab: W,
                        immediate: !0
                    })
                }
            }

            function D(F) {
                var w = {};
                w.easing = F.el.attr("data-easing") || "ease";
                var g = parseInt(F.el.attr("data-duration-in"), 10);
                g = w.intro = g === g ? g : 0;
                var O = parseInt(F.el.attr("data-duration-out"), 10);
                O = w.outro = O === O ? O : 0, w.immediate = !g && !O, F.config = w
            }

            function P(F) {
                var w = F.current;
                return Array.prototype.findIndex.call(F.links, g => g.getAttribute(l) === w, null)
            }

            function V(F) {
                return function(w) {
                    w.preventDefault();
                    var g = w.currentTarget.getAttribute(l);
                    g && B(F, {
                        tab: g
                    })
                }
            }

            function k(F) {
                return function(w) {
                    var g = P(F),
                        O = w.key,
                        L = {
                            ArrowLeft: g - 1,
                            ArrowUp: g - 1,
                            ArrowRight: g + 1,
                            ArrowDown: g + 1,
                            End: F.links.length - 1,
                            Home: 0
                        };
                    if (O in L) {
                        w.preventDefault();
                        var M = L[O];
                        M === -1 && (M = F.links.length - 1), M === F.links.length && (M = 0);
                        var W = F.links[M],
                            K = W.getAttribute(l);
                        K && B(F, {
                            tab: K
                        })
                    }
                }
            }

            function B(F, w) {
                w = w || {};
                var g = F.config,
                    O = g.easing,
                    L = w.tab;
                if (L !== F.current) {
                    F.current = L;
                    var M;
                    F.links.each(function(Y, te) {
                        var Se = e(te);
                        if (w.immediate || g.immediate) {
                            var we = F.panes[Y];
                            te.id || (te.id = F.tabIdentifier + "-" + Y), we.id || (we.id = F.paneIdentifier + "-" + Y), te.href = "#" + we.id, te.setAttribute("role", "tab"), te.setAttribute("aria-controls", we.id), te.setAttribute("aria-selected", "false"), we.setAttribute("role", "tabpanel"), we.setAttribute("aria-labelledby", te.id)
                        }
                        te.getAttribute(l) === L ? (M = te, Se.addClass(p).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(T.intro)) : Se.hasClass(p) && Se.removeClass(p).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(T.outro)
                    });
                    var W = [],
                        K = [];
                    F.panes.each(function(Y, te) {
                        var Se = e(te);
                        te.getAttribute(l) === L ? W.push(te) : Se.hasClass(v) && K.push(te)
                    });
                    var ee = e(W),
                        fe = e(K);
                    if (w.immediate || g.immediate) {
                        ee.addClass(v).each(T.intro), fe.removeClass(v), I || dt.redraw.up();
                        return
                    } else {
                        var Ne = window.scrollX,
                            ge = window.scrollY;
                        M.focus(), window.scrollTo(Ne, ge)
                    }
                    fe.length && g.outro ? (fe.each(T.outro), n(fe).add("opacity " + g.outro + "ms " + O, {
                        fallback: a
                    }).start({
                        opacity: 0
                    }).then(() => H(g, fe, ee))) : H(g, fe, ee)
                }
            }

            function H(F, w, g) {
                if (w.removeClass(v).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), g.addClass(v).each(T.intro), dt.redraw.up(), !F.intro) return n(g).set({
                    opacity: 1
                });
                n(g).set({
                    opacity: 0
                }).redraw().add("opacity " + F.intro + "ms " + F.easing, {
                    fallback: a
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    aa();
    sa();
    _a();
    Ta();
    Sa();
    qn();
    vy();
    _y();
    Ty();
    Ay();
    wy();
    xy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446317330
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446317330
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316922
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446315522
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef085d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef085d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1698076444408
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef090e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef090e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1698886152547
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef085c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef085c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1626130887231
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-528"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446294536
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0904",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0904",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446315522
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0860",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0860",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1698076456587
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0904",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0904",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446294539
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316922
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".tabs-container---brix-2",
                "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tabs-container---brix-2",
                "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1626130830417
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698880163953
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-332"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".tabs-container---brix",
                "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tabs-container---brix",
                "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1626130830417
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698880163953
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1698076468482
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef090e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef090e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b298431",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b298431",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1641922757723
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b298426",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b298426",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1641922731330
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b29843c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d86143b3-cdb0-7ca0-c6ee-cab44b29843c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1700058427080
        },
        "e-251": {
            "id": "e-251",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625181330349
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a501",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a501",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625182218549
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625125522687
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a53d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a53d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625183469535
        },
        "e-257": {
            "id": "e-257",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a51f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a51f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625183162737
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a55e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a55e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625183741882
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d56f0a33-6e87-c2d5-68ef-552b7cf4a4c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1700531029705
        },
        "e-972": {
            "id": "e-972",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-973"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef089a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef089a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407159996
        },
        "e-973": {
            "id": "e-973",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-972"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef089a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef089a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407159996
        },
        "e-974": {
            "id": "e-974",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-975"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407222585
        },
        "e-975": {
            "id": "e-975",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-974"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef0890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef0890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407222585
        },
        "e-976": {
            "id": "e-976",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-977"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407395108
        },
        "e-977": {
            "id": "e-977",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-976"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407395108
        },
        "e-978": {
            "id": "e-978",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-979"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407493334
        },
        "e-979": {
            "id": "e-979",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-978"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "85107c16-8bf0-db28-b300-eba0acef08b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "85107c16-8bf0-db28-b300-eba0acef08b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707407493334
        },
        "e-1092": {
            "id": "e-1092",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1093"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1708549172204
        },
        "e-1305": {
            "id": "e-1305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1306"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65ef9dfcc021092758be163f|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1710202367470
        },
        "e-1653": {
            "id": "e-1653",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1654"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6606c97ecc80fd382b285663|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1711720831672
        },
        "e-1814": {
            "id": "e-1814",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1815"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1711740388343
        },
        "e-2205": {
            "id": "e-2205",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265d36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265d36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2206": {
            "id": "e-2206",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265c78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265c78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2207": {
            "id": "e-2207",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2208": {
            "id": "e-2208",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2209": {
            "id": "e-2209",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265d15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265d15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2210": {
            "id": "e-2210",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cf7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265cf7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2211": {
            "id": "e-2211",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265c9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efc7|a5f90d18-8e91-10de-f628-4bb759265c9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454763532
        },
        "e-2216": {
            "id": "e-2216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2217": {
            "id": "e-2217",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae772",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae772",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2218": {
            "id": "e-2218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2219": {
            "id": "e-2219",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2220": {
            "id": "e-2220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae80f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae80f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2221": {
            "id": "e-2221",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae7f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2222": {
            "id": "e-2222",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae797",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65e8a0d81cbe92204ff1efcd|75541a2b-053e-98e6-206c-b421854ae797",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454888792
        },
        "e-2225": {
            "id": "e-2225",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e7027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e7027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2226": {
            "id": "e-2226",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6f69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6f69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2227": {
            "id": "e-2227",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2228": {
            "id": "e-2228",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2229": {
            "id": "e-2229",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e7006",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e7006",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2230": {
            "id": "e-2230",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fe8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6fe8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2231": {
            "id": "e-2231",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6f8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ef9dfcc021092758be163f|673cbc0b-ef43-bade-0c4e-4c97615e6f8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717454957774
        },
        "e-2232": {
            "id": "e-2232",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2233": {
            "id": "e-2233",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4ea9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4ea9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2234": {
            "id": "e-2234",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2235": {
            "id": "e-2235",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2236": {
            "id": "e-2236",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2237": {
            "id": "e-2237",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2238": {
            "id": "e-2238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4ece",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "660715e2d4c1cd55c1c38694|aa7b67b2-bdb3-49f4-b0f1-2bdac75f4ece",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455018492
        },
        "e-2241": {
            "id": "e-2241",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff221",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff221",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2242": {
            "id": "e-2242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff163",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff163",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2243": {
            "id": "e-2243",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2244": {
            "id": "e-2244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2245": {
            "id": "e-2245",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff200",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff200",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2246": {
            "id": "e-2246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff1e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2247": {
            "id": "e-2247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff188",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6606c97ecc80fd382b285663|18d98ed5-977e-9b19-4764-c424f1dff188",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717455112409
        },
        "e-2248": {
            "id": "e-2248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-2249"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66607da56f7a40e678441a2c|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1717599653554
        },
        "e-2252": {
            "id": "e-2252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2253"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66607da56f7a40e678441a2c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717599653554
        },
        "e-2258": {
            "id": "e-2258",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2259": {
            "id": "e-2259",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae772",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae772",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2260": {
            "id": "e-2260",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2261": {
            "id": "e-2261",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2262": {
            "id": "e-2262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae80f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae80f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2263": {
            "id": "e-2263",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae7f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2264": {
            "id": "e-2264",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae797",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66607da56f7a40e678441a2c|75541a2b-053e-98e6-206c-b421854ae797",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1717599653554
        },
        "e-2265": {
            "id": "e-2265",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-2266"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66706713c0f4a03b3ac8fe15|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66706713c0f4a03b3ac8fe15|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1718642452314
        },
        "e-2282": {
            "id": "e-2282",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-2283"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66748e0224f01a3ce793822e|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1718914562740
        },
        "e-2290": {
            "id": "e-2290",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|7b684437-810a-7075-41cb-c79ab1bf5321",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|7b684437-810a-7075-41cb-c79ab1bf5321",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714377768356
        },
        "e-2294": {
            "id": "e-2294",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|7b684437-810a-7075-41cb-c79ab1bf5321",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|7b684437-810a-7075-41cb-c79ab1bf5321",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714377768348
        },
        "e-2347": {
            "id": "e-2347",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1720026215545
        },
        "e-2349": {
            "id": "e-2349",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2350"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1720026225471
        },
        "e-2371": {
            "id": "e-2371",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2372": {
            "id": "e-2372",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2371"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2373": {
            "id": "e-2373",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2374"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2374": {
            "id": "e-2374",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2373"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2375": {
            "id": "e-2375",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2376"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2376": {
            "id": "e-2376",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2375"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2377": {
            "id": "e-2377",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2378"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2378": {
            "id": "e-2378",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2377"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2379": {
            "id": "e-2379",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2380"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2380": {
            "id": "e-2380",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2379"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2381": {
            "id": "e-2381",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2382"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2382": {
            "id": "e-2382",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2381"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2383": {
            "id": "e-2383",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2384"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2384": {
            "id": "e-2384",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2383"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2385": {
            "id": "e-2385",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2386"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2386": {
            "id": "e-2386",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2385"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2387": {
            "id": "e-2387",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2388"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2388": {
            "id": "e-2388",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2387"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2389": {
            "id": "e-2389",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2390": {
            "id": "e-2390",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2389"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721052032086
        },
        "e-2393": {
            "id": "e-2393",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2394"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|d803e7ca-2dc8-b512-a00f-b5bcc9b22c22",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|d803e7ca-2dc8-b512-a00f-b5bcc9b22c22",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721053725644
        },
        "e-2399": {
            "id": "e-2399",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2400"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0076",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|67199041-8ff3-9315-0129-6489c16a0076",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721053756515
        },
        "e-2401": {
            "id": "e-2401",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2402"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd31de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd31de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721053781395
        },
        "e-2403": {
            "id": "e-2403",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2404"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668413a9dcea0b2a1bac363d|94207ff6-1407-5091-827e-f7e6d5323e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668413a9dcea0b2a1bac363d|94207ff6-1407-5091-827e-f7e6d5323e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721054847342
        },
        "e-2404": {
            "id": "e-2404",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2403"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668413a9dcea0b2a1bac363d|94207ff6-1407-5091-827e-f7e6d5323e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668413a9dcea0b2a1bac363d|94207ff6-1407-5091-827e-f7e6d5323e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721054847342
        },
        "e-2405": {
            "id": "e-2405",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2406"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd319d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd319d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721233443957
        },
        "e-2407": {
            "id": "e-2407",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2408"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|0fc0bd95-c077-f9e6-117f-9852e8633945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|0fc0bd95-c077-f9e6-117f-9852e8633945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721233472128
        },
        "e-2409": {
            "id": "e-2409",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2410"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668410205b97167bdd1d3a1e|0faa1371-404c-cc3c-d739-87e4a8c2bbac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668410205b97167bdd1d3a1e|0faa1371-404c-cc3c-d739-87e4a8c2bbac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721233771040
        },
        "e-2411": {
            "id": "e-2411",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2412"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668412b4784b7641250f01a3|d8ce5acb-3c66-1dca-f611-53765e20627e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668412b4784b7641250f01a3|d8ce5acb-3c66-1dca-f611-53765e20627e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721314808037
        },
        "e-2412": {
            "id": "e-2412",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2411"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "668412b4784b7641250f01a3|d8ce5acb-3c66-1dca-f611-53765e20627e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "668412b4784b7641250f01a3|d8ce5acb-3c66-1dca-f611-53765e20627e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721314808037
        },
        "e-2423": {
            "id": "e-2423",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2424"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2424": {
            "id": "e-2424",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2423"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2425": {
            "id": "e-2425",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2426"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2426": {
            "id": "e-2426",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2425"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2427": {
            "id": "e-2427",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2428"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2428": {
            "id": "e-2428",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2427"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|dacdf9b9-b4de-5a08-04a4-8719f6b363f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092010366
        },
        "e-2429": {
            "id": "e-2429",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2430"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|f47cbb94-980d-be31-ca3b-f897528c71c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|f47cbb94-980d-be31-ca3b-f897528c71c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092062994
        },
        "e-2430": {
            "id": "e-2430",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2429"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|f47cbb94-980d-be31-ca3b-f897528c71c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|f47cbb94-980d-be31-ca3b-f897528c71c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092062994
        },
        "e-2431": {
            "id": "e-2431",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2432"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|21315fcd-db17-2984-117a-7a5710ba2362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|21315fcd-db17-2984-117a-7a5710ba2362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092135693
        },
        "e-2432": {
            "id": "e-2432",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2431"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|21315fcd-db17-2984-117a-7a5710ba2362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|21315fcd-db17-2984-117a-7a5710ba2362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092135693
        },
        "e-2433": {
            "id": "e-2433",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2434"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|eb9c3253-7159-e5cb-3b98-2d3cb1466450",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|eb9c3253-7159-e5cb-3b98-2d3cb1466450",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092143917
        },
        "e-2434": {
            "id": "e-2434",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2433"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|eb9c3253-7159-e5cb-3b98-2d3cb1466450",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|eb9c3253-7159-e5cb-3b98-2d3cb1466450",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092143917
        },
        "e-2435": {
            "id": "e-2435",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2436"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|1e14323f-f48f-e1cd-a331-1afcf0557630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|1e14323f-f48f-e1cd-a331-1afcf0557630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092177630
        },
        "e-2436": {
            "id": "e-2436",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2435"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|1e14323f-f48f-e1cd-a331-1afcf0557630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|1e14323f-f48f-e1cd-a331-1afcf0557630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092177630
        },
        "e-2437": {
            "id": "e-2437",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2438"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|d3af38bf-1185-0058-450e-8c3c20a16bba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|d3af38bf-1185-0058-450e-8c3c20a16bba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092186664
        },
        "e-2438": {
            "id": "e-2438",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2437"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|d3af38bf-1185-0058-450e-8c3c20a16bba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|d3af38bf-1185-0058-450e-8c3c20a16bba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092186664
        },
        "e-2439": {
            "id": "e-2439",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2440"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|9d252bb0-9f27-c3ee-0e0b-15e580d9d1ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|9d252bb0-9f27-c3ee-0e0b-15e580d9d1ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092195457
        },
        "e-2440": {
            "id": "e-2440",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2439"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|9d252bb0-9f27-c3ee-0e0b-15e580d9d1ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|9d252bb0-9f27-c3ee-0e0b-15e580d9d1ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092195457
        },
        "e-2441": {
            "id": "e-2441",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2442"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|0c59c025-0e82-bf1f-c6d6-077b63b2d019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|0c59c025-0e82-bf1f-c6d6-077b63b2d019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092216816
        },
        "e-2442": {
            "id": "e-2442",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2441"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|0c59c025-0e82-bf1f-c6d6-077b63b2d019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|0c59c025-0e82-bf1f-c6d6-077b63b2d019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092216816
        },
        "e-2443": {
            "id": "e-2443",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2444"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|a7ce5b0e-3683-a08b-0396-638d5741a724",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|a7ce5b0e-3683-a08b-0396-638d5741a724",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092226398
        },
        "e-2444": {
            "id": "e-2444",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2443"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|a7ce5b0e-3683-a08b-0396-638d5741a724",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|a7ce5b0e-3683-a08b-0396-638d5741a724",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092226398
        },
        "e-2445": {
            "id": "e-2445",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2446"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2446": {
            "id": "e-2446",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2445"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2447": {
            "id": "e-2447",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2448"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2448": {
            "id": "e-2448",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2447"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e918",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2449": {
            "id": "e-2449",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2450"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e925",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e925",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2450": {
            "id": "e-2450",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2449"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e925",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e925",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2451": {
            "id": "e-2451",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2452"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e92f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e92f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2452": {
            "id": "e-2452",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2451"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e92f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e92f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2453": {
            "id": "e-2453",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2454"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e944",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e944",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2454": {
            "id": "e-2454",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2453"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e944",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e944",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2455": {
            "id": "e-2455",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2456"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e951",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e951",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2456": {
            "id": "e-2456",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2455"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e951",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e951",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2457": {
            "id": "e-2457",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2458"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e95e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e95e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2458": {
            "id": "e-2458",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2457"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e95e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66748e0224f01a3ce793822e|2659487e-1ca3-7039-89d6-b55b6249e95e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722092239688
        },
        "e-2459": {
            "id": "e-2459",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-2460"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|5f509935-03d9-9694-f5a7-dc68a14d5be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1723577666032
        },
        "e-2476": {
            "id": "e-2476",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2477"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579479974
        },
        "e-2478": {
            "id": "e-2478",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2479"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579479974
        },
        "e-2480": {
            "id": "e-2480",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2481"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|4cd5a796-b947-655e-1360-f1353794dd7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579479974
        },
        "e-2484": {
            "id": "e-2484",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2485"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2485": {
            "id": "e-2485",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2484"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2486": {
            "id": "e-2486",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2487"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08730",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08730",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579772155
        },
        "e-2488": {
            "id": "e-2488",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2489"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08731",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08731",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579772155
        },
        "e-2490": {
            "id": "e-2490",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2491"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0873d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0873d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2491": {
            "id": "e-2491",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2490"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0873d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0873d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2492": {
            "id": "e-2492",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2493"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08734",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08734",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579772155
        },
        "e-2494": {
            "id": "e-2494",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2495"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2495": {
            "id": "e-2495",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2494"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08799",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2496": {
            "id": "e-2496",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2497"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2497": {
            "id": "e-2497",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2496"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2498": {
            "id": "e-2498",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2499"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0874d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0874d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2499": {
            "id": "e-2499",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2498"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0874d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0874d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2502": {
            "id": "e-2502",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2503"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2503": {
            "id": "e-2503",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2502"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2504": {
            "id": "e-2504",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2505"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08737",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08737",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723579772155
        },
        "e-2506": {
            "id": "e-2506",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2507"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2507": {
            "id": "e-2507",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2506"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2508": {
            "id": "e-2508",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2509"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2509": {
            "id": "e-2509",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2508"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd087b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2510": {
            "id": "e-2510",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2511"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0878f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0878f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2511": {
            "id": "e-2511",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2510"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0878f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd0878f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2514": {
            "id": "e-2514",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2515"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08764",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08764",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2515": {
            "id": "e-2515",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2514"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08764",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66bbb541db8a7362d4a3d394|af8b3ced-b283-21d7-91f9-14badcd08764",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723579772155
        },
        "e-2516": {
            "id": "e-2516",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2517"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2518": {
            "id": "e-2518",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2519"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2520": {
            "id": "e-2520",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2521"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2521": {
            "id": "e-2521",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2520"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a007d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2522": {
            "id": "e-2522",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2523"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2523": {
            "id": "e-2523",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2522"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0088",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2524": {
            "id": "e-2524",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2525"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2525": {
            "id": "e-2525",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2524"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0093",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2526": {
            "id": "e-2526",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2527"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2527": {
            "id": "e-2527",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2526"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a009e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2528": {
            "id": "e-2528",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2529"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2529": {
            "id": "e-2529",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2528"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2530": {
            "id": "e-2530",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2531"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2531": {
            "id": "e-2531",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2530"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2532": {
            "id": "e-2532",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2533"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2533": {
            "id": "e-2533",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2532"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2534": {
            "id": "e-2534",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2535"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2535": {
            "id": "e-2535",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2534"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2536": {
            "id": "e-2536",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2537"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2537": {
            "id": "e-2537",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2536"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2538": {
            "id": "e-2538",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2539"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2539": {
            "id": "e-2539",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2538"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a00e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2542": {
            "id": "e-2542",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2543"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0076",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|67199041-8ff3-9315-0129-6489c16a0076",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2544": {
            "id": "e-2544",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2545"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd31de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd31de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2546": {
            "id": "e-2546",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2547"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd319d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd319d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2548": {
            "id": "e-2548",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2549"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|0fc0bd95-c077-f9e6-117f-9852e8633945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|0fc0bd95-c077-f9e6-117f-9852e8633945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2550": {
            "id": "e-2550",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2551"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|0faa1371-404c-cc3c-d739-87e4a8c2bbac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|0faa1371-404c-cc3c-d739-87e4a8c2bbac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723750674255
        },
        "e-2552": {
            "id": "e-2552",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2553"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|f52c85cb-5836-a42e-e06d-bf3f9e81ea54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|f52c85cb-5836-a42e-e06d-bf3f9e81ea54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723824225192
        },
        "e-2554": {
            "id": "e-2554",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2555"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|a13f27b5-5845-8e75-cc50-5e7042ef42dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|a13f27b5-5845-8e75-cc50-5e7042ef42dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723824314702
        },
        "e-2556": {
            "id": "e-2556",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2557"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|3ff3dea5-c182-b82c-44a6-df14f93bd68d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|3ff3dea5-c182-b82c-44a6-df14f93bd68d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723824406819
        },
        "e-2557": {
            "id": "e-2557",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2556"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66be59117c0743981720d9f9|3ff3dea5-c182-b82c-44a6-df14f93bd68d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66be59117c0743981720d9f9|3ff3dea5-c182-b82c-44a6-df14f93bd68d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1723824406819
        }
    },
    "actionLists": {
        "a-3": {
            "id": "a-3",
            "title": "2. Close FAQ Accordion",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626114382035
        },
        "a-12": {
            "id": "a-12",
            "title": "2. Open FAQ Accordion",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626114382035
        },
        "a-19": {
            "id": "a-19",
            "title": "Timeline Animation",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-19-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-19-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-19-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-19-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-37": {
            "id": "a-37",
            "title": "Timeline Animation 3",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-37-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-37-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-37-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-38": {
            "id": "a-38",
            "title": "Timeline Animation 4",
            "continuousParameterGroups": [{
                "id": "a-38-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-38-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-38-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-38-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-38-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-38-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-38-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-39": {
            "id": "a-39",
            "title": "Timeline Animation 5",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-39-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-39-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-39-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-40": {
            "id": "a-40",
            "title": "Timeline Animation 6",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-40-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-40-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-40-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-40-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-41": {
            "id": "a-41",
            "title": "Timeline Animation 7",
            "continuousParameterGroups": [{
                "id": "a-41-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 57,
                    "actionItems": [{
                        "id": "a-41-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-41-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 0.25,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-41-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_circle",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-41-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_right",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-41-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline_left",
                                "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625115912519
        },
        "a-42": {
            "id": "a-42",
            "title": "SHow contet",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 1900000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "66607da56f7a40e678441a2c|542903f4-64f3-3ede-1288-667ab8ec67d5"
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "66607da56f7a40e678441a2c|18d8008d-93f8-b6ee-6d28-7a572545d9af"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717600005114
        },
        "a-44": {
            "id": "a-44",
            "title": "FAQ 11 accordion [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["685d6f1f-3ae0-5205-b489-453d3bacbbb6"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq11_icon-wrapper",
                            "selectorGuids": ["685d6f1f-3ae0-5205-b489-453d3bacbbbc"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1628385361827
        },
        "a-43": {
            "id": "a-43",
            "title": "FAQ 11 accordion [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["685d6f1f-3ae0-5205-b489-453d3bacbbb6"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["685d6f1f-3ae0-5205-b489-453d3bacbbb6"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-43-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq11_icon-wrapper",
                            "selectorGuids": ["685d6f1f-3ae0-5205-b489-453d3bacbbbc"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1628385361827
        },
        "a-45": {
            "id": "a-45",
            "title": "Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-21",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 370,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 370,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-45-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "668410205b97167bdd1d3a1e|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1719587966006
        },
        "a-46": {
            "id": "a-46",
            "title": "Corner Images Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-image.left",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9ed4"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-image.left",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9ed4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-image.right",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9eca"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-image.right",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9eca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-image.left",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9ed4"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-image.right",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9eca"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-image.left",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9ed4"]
                        },
                        "value": 0.6,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".side-image.right",
                            "selectorGuids": ["17a962a7-6220-5563-ed13-432c28ea9eb8", "17a962a7-6220-5563-ed13-432c28ea9eca"]
                        },
                        "value": 0.6,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1719588323132
        },
        "a-48": {
            "id": "a-48",
            "title": "View Opacity 1.2s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "665b73129387617f4ef9f653|2526e67e-b4b7-b2a6-0de1-257852ae22a1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 50,
                        "easing": "ease",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "665b73129387617f4ef9f653|2526e67e-b4b7-b2a6-0de1-257852ae22a1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1679277102937
        },
        "a-49": {
            "id": "a-49",
            "title": "2. Open FAQ Accordion 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-49-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-49-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-49-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626114382035
        },
        "a-50": {
            "id": "a-50",
            "title": "2. Close FAQ Accordion 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-50-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix-2",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-50-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-item-title---brix",
                            "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626114382035
        },
        "a-51": {
            "id": "a-51",
            "title": "Page Load 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|cf1baa64-4957-cb85-605f-084b23cdd1fc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd318c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 370,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 370,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|a808c9f4-9848-321b-0c6d-bcacaebd3194"
                        },
                        "value": 0.3,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "66be59117c0743981720d9f9|bda34697-4b66-2a72-e12b-0df96f270189"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1719587966006
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});