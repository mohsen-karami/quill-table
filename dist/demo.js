/*! For license information please see demo.js.LICENSE.txt */
!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e(require('quill')))
        : 'function' == typeof define && define.amd
        ? define(['quill'], e)
        : 'object' == typeof exports
        ? (exports.TableModule = e(require('quill')))
        : (t.TableModule = e(t.Quill));
})(self, (t) =>
    (() => {
        var e = {
                4257: function (t, e) {
                    var r, n;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        void 0 ===
                            (n =
                                'function' ==
                                typeof (r = function (t) {
                                    'use strict';
                                    Object.defineProperty(t, '__esModule', { value: !0 }),
                                        (t.blotName = void 0),
                                        (t.blotName = {
                                            contain: 'contain',
                                            tableWrapper: 'tableWrapper',
                                            table: 'table',
                                            tableColGroup: 'colgroup',
                                            tableCol: 'col',
                                            tableBody: 'tbody',
                                            tableRow: 'tr',
                                            tableCell: 'td',
                                            tableCellInner: 'tableCellInner',
                                        });
                                })
                                    ? r.apply(e, [e])
                                    : r) || (t.exports = n);
                },
                580: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(t, o(n.key), n);
                                }
                            }
                            function o(t) {
                                var e = (function (t, e) {
                                    if ('object' !== a(t) || null === t) return t;
                                    var r = t[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(t, e || 'default');
                                        if ('object' !== a(n)) return n;
                                        throw new TypeError('@@toPrimitive must return a primitive value.');
                                    }
                                    return ('string' === e ? String : Number)(t);
                                })(t, 'string');
                                return 'symbol' === a(e) ? e : String(e);
                            }
                            function i() {
                                return (
                                    (i =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = s(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    i.apply(this, arguments)
                                );
                            }
                            function l(t, e) {
                                return (
                                    (l = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    l(t, e)
                                );
                            }
                            function u(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = s(t);
                                    if (e) {
                                        var o = s(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function s(t) {
                                return (
                                    (s = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    s(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var c,
                                f = ((c = e), (e = c && c.__esModule ? c : { default: c })).default.import(
                                    'blots/container'
                                ),
                                p = e.default.import('parchment'),
                                d = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && l(t, e);
                                    })(f, t);
                                    var e,
                                        r,
                                        a,
                                        c = u(f);
                                    function f() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, f),
                                            c.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = f),
                                        (r = [
                                            {
                                                key: 'insertBefore',
                                                value: function (t, e) {
                                                    t.statics.blotName == this.statics.blotName
                                                        ? i(s(f.prototype), 'insertBefore', this).call(
                                                              this,
                                                              t.children.head,
                                                              e
                                                          )
                                                        : i(s(f.prototype), 'insertBefore', this).call(this, t, e);
                                                },
                                            },
                                            {
                                                key: 'formats',
                                                value: function () {
                                                    return (function (t, e, r) {
                                                        return (
                                                            (e = o(e)) in t
                                                                ? Object.defineProperty(t, e, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (t[e] = r),
                                                            t
                                                        );
                                                    })({}, this.statics.blotName, this.statics.formats(this.domNode));
                                                },
                                            },
                                            {
                                                key: 'replace',
                                                value: function (t) {
                                                    if (t.statics.blotName !== this.statics.blotName) {
                                                        var e = p.create(this.statics.defaultChild);
                                                        t.moveChildren(e), this.appendChild(e);
                                                    }
                                                    null != t.parent &&
                                                        i(s(f.prototype), 'replace', this).call(this, t);
                                                },
                                            },
                                        ]),
                                        (a = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    return i(s(f), 'create', this).call(this, 'contain');
                                                },
                                            },
                                        ]),
                                        r && n(e.prototype, r),
                                        a && n(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        f
                                    );
                                })(f);
                            (d.blotName = r.blotName.contain),
                                (d.tagName = 'contain'),
                                (d.scope = p.Scope.BLOCK_BLOT),
                                (d.defaultChild = 'block'),
                                (t.default = d);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                9196: function (t, e, r) {
                    var n, o, i;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [r(7436), r(4175), r(5579)]),
                        void 0 ===
                            (i =
                                'function' ==
                                typeof (n = function (t, e, r) {
                                    'use strict';
                                    function n(t) {
                                        return t && t.__esModule ? t : { default: t };
                                    }
                                    function o(t) {
                                        return (
                                            (o =
                                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                                    ? function (t) {
                                                          return typeof t;
                                                      }
                                                    : function (t) {
                                                          return t &&
                                                              'function' == typeof Symbol &&
                                                              t.constructor === Symbol &&
                                                              t !== Symbol.prototype
                                                              ? 'symbol'
                                                              : typeof t;
                                                      }),
                                            o(t)
                                        );
                                    }
                                    function i(t, e, r) {
                                        return (
                                            (e = (function (t) {
                                                var e = (function (t, e) {
                                                    if ('object' !== o(t) || null === t) return t;
                                                    var r = t[Symbol.toPrimitive];
                                                    if (void 0 !== r) {
                                                        var n = r.call(t, e || 'default');
                                                        if ('object' !== o(n)) return n;
                                                        throw new TypeError(
                                                            '@@toPrimitive must return a primitive value.'
                                                        );
                                                    }
                                                    return ('string' === e ? String : Number)(t);
                                                })(t, 'string');
                                                return 'symbol' === o(e) ? e : String(e);
                                            })(e)) in t
                                                ? Object.defineProperty(t, e, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = r),
                                            t
                                        );
                                    }
                                    (t = n(t)),
                                        (e = n(e)),
                                        (r = n(r)),
                                        t.default.register(
                                            i({}, 'modules/'.concat(r.default.moduleName), r.default),
                                            !0
                                        );
                                    var a = new t.default('#editor', {
                                        theme: 'snow',
                                        modules: i(
                                            {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline', 'strike'],
                                                    ['blockquote', 'code-block'],
                                                    [{ header: 1 }, { header: 2 }],
                                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                                    [{ script: 'sub' }, { script: 'super' }],
                                                    [{ indent: '-1' }, { indent: '+1' }],
                                                    [{ direction: 'rtl' }],
                                                    [{ size: ['small', !1, 'large', 'huge'] }],
                                                    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
                                                    [{ color: [] }, { background: [] }],
                                                    [{ font: [] }],
                                                    [{ align: [] }],
                                                    ['clean'],
                                                    ['image', 'video'],
                                                    ['table'],
                                                ],
                                            },
                                            ''.concat(r.default.moduleName),
                                            {
                                                tableToolTip: { tipHeight: 12, disableToolNames: [] },
                                                operationMenu: {},
                                                selection: { primaryColor: '#0589f3' },
                                            }
                                        ),
                                    });
                                    a.setContents(new e.default());
                                    var l = document.getElementsByClassName('contentDisplay')[0];
                                    document.getElementsByClassName('getContent')[0].onclick = function () {
                                        var t = a.getContents();
                                        console.log(t),
                                            (l.innerHTML = ''),
                                            t.map(function (t) {
                                                var e = document.createElement('li');
                                                (e.innerText = JSON.stringify(t)), l.appendChild(e);
                                            });
                                    };
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = i);
                },
                1883: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function o() {
                                return (
                                    (o =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = u(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    o.apply(this, arguments)
                                );
                            }
                            function i(t, e) {
                                return (
                                    (i = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    i(t, e)
                                );
                            }
                            function l(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = u(t);
                                    if (e) {
                                        var o = u(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function u(t) {
                                return (
                                    (u = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    u(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var s,
                                c = ((s = e), (e = s && s.__esModule ? s : { default: s })).default.import(
                                    'blots/container'
                                ),
                                f = e.default.import('parchment'),
                                p = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && i(t, e);
                                    })(c, t);
                                    var e,
                                        r,
                                        a,
                                        s = l(c);
                                    function c() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, c),
                                            s.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = c),
                                        (r = [
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    o(u(c.prototype), 'optimize', this).call(this);
                                                    var t = this.next;
                                                    null != t &&
                                                        t.prev === this &&
                                                        t.statics.blotName === this.statics.blotName &&
                                                        t.domNode.tagName === this.domNode.tagName &&
                                                        (t.moveChildren(this), t.remove());
                                                },
                                            },
                                            {
                                                key: 'deleteAt',
                                                value: function (t, e) {
                                                    o(u(c.prototype), 'deleteAt', this).call(this, t, e),
                                                        this.parent.remove();
                                                },
                                            },
                                        ]) && n(e.prototype, r),
                                        a && n(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        c
                                    );
                                })(c);
                            (p.blotName = r.blotName.tableBody),
                                (p.tagName = 'tbody'),
                                (p.scope = f.Scope.BLOCK_BLOT),
                                (t.default = p);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                7014: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function o() {
                                return (
                                    (o =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = u(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    o.apply(this, arguments)
                                );
                            }
                            function i(t, e) {
                                return (
                                    (i = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    i(t, e)
                                );
                            }
                            function l(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = u(t);
                                    if (e) {
                                        var o = u(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function u(t) {
                                return (
                                    (u = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    u(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var s,
                                c = ((s = e), (e = s && s.__esModule ? s : { default: s })).default.import('parchment'),
                                f = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && i(t, e);
                                    })(c, t);
                                    var e,
                                        r,
                                        a,
                                        s = l(c);
                                    function c() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, c),
                                            s.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = c),
                                        (a = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = t.rowId,
                                                        r = t.colId,
                                                        n = t.rowspan,
                                                        i = t.colspan,
                                                        a = o(u(c), 'create', this).call(this);
                                                    return (
                                                        (a.dataset.rowId = e),
                                                        (a.dataset.colId = r),
                                                        a.setAttribute('rowspan', n || 1),
                                                        a.setAttribute('colspan', i || 1),
                                                        a
                                                    );
                                                },
                                            },
                                        ]),
                                        (r = [
                                            {
                                                key: 'rowId',
                                                get: function () {
                                                    return this.domNode.dataset.rowId;
                                                },
                                            },
                                            {
                                                key: 'colId',
                                                get: function () {
                                                    return this.domNode.dataset.colId;
                                                },
                                            },
                                            {
                                                key: 'rowspan',
                                                get: function () {
                                                    return Number(this.domNode.getAttribute('rowspan'));
                                                },
                                                set: function (t) {
                                                    this.domNode.setAttribute('rowspan', t);
                                                },
                                            },
                                            {
                                                key: 'colspan',
                                                get: function () {
                                                    return Number(this.domNode.getAttribute('colspan'));
                                                },
                                                set: function (t) {
                                                    this.domNode.setAttribute('colspan', t);
                                                },
                                            },
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    o(u(c.prototype), 'optimize', this).call(this);
                                                    var t = this.domNode.dataset,
                                                        e = t.colId,
                                                        r = t.rowId,
                                                        n = this.next;
                                                    null != n &&
                                                        n.prev === this &&
                                                        n.statics.blotName === this.statics.blotName &&
                                                        n.domNode.dataset.rowId === r &&
                                                        n.domNode.dataset.colId === e &&
                                                        (n.moveChildren(this), n.remove());
                                                },
                                            },
                                            {
                                                key: 'deleteAt',
                                                value: function (t, e) {
                                                    o(u(c.prototype), 'deleteAt', this).call(this, t, e),
                                                        this.parent.remove();
                                                },
                                            },
                                        ]) && n(e.prototype, r),
                                        a && n(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        c
                                    );
                                })(e.default.import('blots/container'));
                            (f.blotName = r.blotName.tableCell),
                                (f.tagName = 'td'),
                                (f.className = 'ql-table-cell'),
                                (f.scope = c.Scope.BLOCK_BLOT),
                                (t.default = f);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                3684: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(580), r(4257)]),
                        (n = function (t, e, r, n) {
                            'use strict';
                            function o(t) {
                                return t && t.__esModule ? t : { default: t };
                            }
                            function i(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(t, l(n.key), n);
                                }
                            }
                            function l(t) {
                                var e = (function (t, e) {
                                    if ('object' !== a(t) || null === t) return t;
                                    var r = t[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(t, e || 'default');
                                        if ('object' !== a(n)) return n;
                                        throw new TypeError('@@toPrimitive must return a primitive value.');
                                    }
                                    return ('string' === e ? String : Number)(t);
                                })(t, 'string');
                                return 'symbol' === a(e) ? e : String(e);
                            }
                            function u() {
                                return (
                                    (u =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = f(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    u.apply(this, arguments)
                                );
                            }
                            function s(t, e) {
                                return (
                                    (s = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    s(t, e)
                                );
                            }
                            function c(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = f(t);
                                    if (e) {
                                        var o = f(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function f(t) {
                                return (
                                    (f = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    f(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }),
                                (t.default = void 0),
                                (e = o(e)),
                                (r = o(r));
                            var p = e.default.import('parchment'),
                                d = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && s(t, e);
                                    })(d, t);
                                    var e,
                                        r,
                                        o,
                                        a = c(d);
                                    function d() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, d),
                                            a.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = d),
                                        (o = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = t.tableId,
                                                        r = t.rowId,
                                                        n = t.colId,
                                                        o = t.rowspan,
                                                        i = t.colspan,
                                                        a = t.style,
                                                        l = u(f(d), 'create', this).call(this);
                                                    return (
                                                        (l.dataset.tableId = e),
                                                        (l.dataset.rowId = r),
                                                        (l.dataset.colId = n),
                                                        (l.dataset.rowspan = o || 1),
                                                        (l.dataset.colspan = i || 1),
                                                        l.setAttribute('style', a),
                                                        l
                                                    );
                                                },
                                            },
                                        ]),
                                        (r = [
                                            {
                                                key: 'formats',
                                                value: function () {
                                                    var t,
                                                        e,
                                                        r,
                                                        n = this.domNode.dataset,
                                                        o = n.tableId,
                                                        i = n.rowId,
                                                        a = n.colId,
                                                        u = n.rowspan,
                                                        s = n.colspan;
                                                    return (
                                                        (t = {}),
                                                        (e = this.statics.blotName),
                                                        (r = {
                                                            tableId: o,
                                                            rowId: i,
                                                            colId: a,
                                                            rowspan: u,
                                                            colspan: s,
                                                            style: this.domNode.getAttribute('style'),
                                                        }),
                                                        (e = l(e)) in t
                                                            ? Object.defineProperty(t, e, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (t[e] = r),
                                                        t
                                                    );
                                                },
                                            },
                                            {
                                                key: 'rowId',
                                                get: function () {
                                                    return this.domNode.dataset.rowId;
                                                },
                                            },
                                            {
                                                key: 'colId',
                                                get: function () {
                                                    return this.domNode.dataset.colId;
                                                },
                                            },
                                            {
                                                key: 'rowspan',
                                                get: function () {
                                                    return Number(this.domNode.dataset.rowspan);
                                                },
                                                set: function (t) {
                                                    this.parent && (this.parent.rowspan = t),
                                                        (this.domNode.dataset.rowspan = t);
                                                },
                                            },
                                            {
                                                key: 'colspan',
                                                get: function () {
                                                    return Number(this.domNode.dataset.colspan);
                                                },
                                                set: function (t) {
                                                    this.parent && (this.parent.colspan = t),
                                                        (this.domNode.dataset.colspan = t);
                                                },
                                            },
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    u(f(d.prototype), 'optimize', this).call(this);
                                                    var t = this.parent,
                                                        e = this.domNode.dataset,
                                                        r = e.tableId,
                                                        o = e.colId,
                                                        i = e.rowId,
                                                        a = e.rowspan,
                                                        l = e.colspan;
                                                    if (null != t && t.statics.blotName != n.blotName.tableCell) {
                                                        var s = p.create('block');
                                                        this.parent.insertBefore(s, this.next);
                                                        var c = p.create(n.blotName.tableWrapper, r),
                                                            h = p.create(n.blotName.table, r),
                                                            y = p.create(n.blotName.tableBody),
                                                            b = p.create(n.blotName.tableRow, i),
                                                            m = p.create(n.blotName.tableCell, {
                                                                tableId: r,
                                                                rowId: i,
                                                                colId: o,
                                                                rowspan: a,
                                                                colspan: l,
                                                            });
                                                        m.appendChild(this),
                                                            b.appendChild(m),
                                                            y.appendChild(b),
                                                            h.appendChild(y),
                                                            c.appendChild(h),
                                                            c.replace(s);
                                                    }
                                                    var v = this.next;
                                                    null != v &&
                                                        v.prev === this &&
                                                        v.statics.blotName === this.statics.blotName &&
                                                        v.domNode.dataset.rowId === i &&
                                                        v.domNode.dataset.colId === o &&
                                                        (v.moveChildren(this), v.remove());
                                                },
                                            },
                                            {
                                                key: 'deleteAt',
                                                value: function (t, e) {
                                                    u(f(d.prototype), 'deleteAt', this).call(this, t, e),
                                                        this.parent.remove();
                                                },
                                            },
                                        ]) && i(e.prototype, r),
                                        o && i(e, o),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        d
                                    );
                                })(r.default);
                            (d.blotName = n.blotName.tableCellInner),
                                (d.tagName = 'p'),
                                (d.className = 'ql-table-cell-inner'),
                                (d.scope = p.Scope.BLOCK_BLOT),
                                (t.default = d);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                939: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(t, o(n.key), n);
                                }
                            }
                            function o(t) {
                                var e = (function (t, e) {
                                    if ('object' !== a(t) || null === t) return t;
                                    var r = t[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(t, e || 'default');
                                        if ('object' !== a(n)) return n;
                                        throw new TypeError('@@toPrimitive must return a primitive value.');
                                    }
                                    return ('string' === e ? String : Number)(t);
                                })(t, 'string');
                                return 'symbol' === a(e) ? e : String(e);
                            }
                            function i() {
                                return (
                                    (i =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = s(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    i.apply(this, arguments)
                                );
                            }
                            function l(t, e) {
                                return (
                                    (l = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    l(t, e)
                                );
                            }
                            function u(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = s(t);
                                    if (e) {
                                        var o = s(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function s(t) {
                                return (
                                    (s = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    s(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var c,
                                f = ((c = e), (e = c && c.__esModule ? c : { default: c })).default.import('parchment'),
                                p = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && l(t, e);
                                    })(d, t);
                                    var e,
                                        a,
                                        c,
                                        p = u(d);
                                    function d() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, d),
                                            p.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = d),
                                        (a = [
                                            {
                                                key: 'width',
                                                get: function () {
                                                    return Number(this.domNode.getAttribute('width'));
                                                },
                                                set: function (t) {
                                                    return this.domNode.setAttribute('width', t);
                                                },
                                            },
                                            {
                                                key: 'colId',
                                                get: function () {
                                                    return this.domNode.dataset.colId;
                                                },
                                            },
                                            {
                                                key: 'formats',
                                                value: function () {
                                                    var t = this.domNode.dataset,
                                                        e = t.tableId,
                                                        r = t.colId;
                                                    return (function (t, e, r) {
                                                        return (
                                                            (e = o(e)) in t
                                                                ? Object.defineProperty(t, e, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (t[e] = r),
                                                            t
                                                        );
                                                    })({}, this.statics.blotName, {
                                                        tableId: e,
                                                        colId: r,
                                                        width: this.domNode.getAttribute('width'),
                                                    });
                                                },
                                            },
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    i(s(d.prototype), 'optimize', this).call(this);
                                                    var t = this.parent;
                                                    if (null != t && t.statics.blotName != r.blotName.tableColGroup) {
                                                        var e = f.create('block');
                                                        this.parent.insertBefore(e, this.next);
                                                        var n = f.create(
                                                                r.blotName.tableWrapper,
                                                                this.domNode.dataset.tableId
                                                            ),
                                                            o = f.create(
                                                                r.blotName.table,
                                                                this.domNode.dataset.tableId
                                                            ),
                                                            a = f.create(r.blotName.tableColGroup);
                                                        a.appendChild(this),
                                                            o.appendChild(a),
                                                            n.appendChild(o),
                                                            n.replace(e);
                                                    }
                                                    var l = this.next,
                                                        u = this.domNode.dataset,
                                                        c = u.tableId,
                                                        p = u.colId;
                                                    null != l &&
                                                        l.statics.blotName === this.statics.blotName &&
                                                        l.domNode.tagName === this.domNode.tagName &&
                                                        l.domNode.dataset.tableId === c &&
                                                        l.domNode.dataset.colId === p &&
                                                        (l.moveChildren(this), l.remove());
                                                },
                                            },
                                            {
                                                key: 'html',
                                                value: function () {
                                                    return this.domNode.outerHTML;
                                                },
                                            },
                                        ]),
                                        (c = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = t.width,
                                                        r = t.tableId,
                                                        n = t.colId,
                                                        o = i(s(d), 'create', this).call(this);
                                                    return (
                                                        o.setAttribute('width', e),
                                                        (o.dataset.tableId = r),
                                                        (o.dataset.colId = n),
                                                        o
                                                    );
                                                },
                                            },
                                        ]),
                                        a && n(e.prototype, a),
                                        c && n(e, c),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        d
                                    );
                                })(e.default.import('blots/block'));
                            (p.blotName = r.blotName.tableCol),
                                (p.tagName = 'col'),
                                (p.scope = f.Scope.BLOCK_BLOT),
                                (t.default = p);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                6504: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function o() {
                                return (
                                    (o =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = u(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    o.apply(this, arguments)
                                );
                            }
                            function i(t, e) {
                                return (
                                    (i = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    i(t, e)
                                );
                            }
                            function l(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = u(t);
                                    if (e) {
                                        var o = u(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function u(t) {
                                return (
                                    (u = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    u(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var s,
                                c = ((s = e), (e = s && s.__esModule ? s : { default: s })).default.import(
                                    'blots/container'
                                ),
                                f = e.default.import('parchment'),
                                p = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && i(t, e);
                                    })(c, t);
                                    var e,
                                        r,
                                        a,
                                        s = l(c);
                                    function c() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, c),
                                            s.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = c),
                                        (r = [
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    o(u(c.prototype), 'optimize', this).call(this);
                                                    var t = this.next;
                                                    null != t &&
                                                        t.prev === this &&
                                                        t.statics.blotName === this.statics.blotName &&
                                                        t.domNode.tagName === this.domNode.tagName &&
                                                        (t.moveChildren(this), t.remove());
                                                },
                                            },
                                            {
                                                key: 'findCol',
                                                value: function (t) {
                                                    for (
                                                        var e, r = this.children.iterator(), n = 0;
                                                        (e = r()) && n !== t;

                                                    )
                                                        n++;
                                                    return e;
                                                },
                                            },
                                        ]) && n(e.prototype, r),
                                        a && n(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        c
                                    );
                                })(c);
                            (p.blotName = r.blotName.tableColGroup),
                                (p.tagName = 'colgroup'),
                                (p.scope = f.Scope.BLOCK_BLOT),
                                (t.default = p);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                603: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257), r(1644), r(939)]),
                        (n = function (t, e, r, n, o) {
                            'use strict';
                            function i(t) {
                                return t && t.__esModule ? t : { default: t };
                            }
                            function l(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function u() {
                                return (
                                    (u =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = f(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    u.apply(this, arguments)
                                );
                            }
                            function s(t, e) {
                                return (
                                    (s = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    s(t, e)
                                );
                            }
                            function c(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = f(t);
                                    if (e) {
                                        var o = f(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function f(t) {
                                return (
                                    (f = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    f(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }),
                                (t.default = void 0),
                                (e = i(e)),
                                (n = i(n)),
                                (o = i(o));
                            var p = e.default.import('blots/container'),
                                d = e.default.import('parchment'),
                                h = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && s(t, e);
                                    })(d, t);
                                    var e,
                                        i,
                                        a,
                                        p = c(d);
                                    function d(t, e) {
                                        var r;
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, d),
                                            (r = p.call(this, t, e)).formatTableWidth(),
                                            r
                                        );
                                    }
                                    return (
                                        (e = d),
                                        (a = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = u(f(d), 'create', this).call(this);
                                                    return (
                                                        (e.dataset.tableId = t),
                                                        e.classList.add('ql-table'),
                                                        e.setAttribute('cellpadding', 0),
                                                        e.setAttribute('cellspacing', 0),
                                                        e
                                                    );
                                                },
                                            },
                                        ]),
                                        (i = [
                                            {
                                                key: 'computedCorrectWidth',
                                                value: function (t) {
                                                    var e = this;
                                                    setTimeout(function () {
                                                        var r = e.children.head,
                                                            n = r.children.length;
                                                        r.children.map(function (e) {
                                                            e.width = t / n;
                                                        }),
                                                            e.colWidthFillTable();
                                                    }, 0);
                                                },
                                            },
                                            {
                                                key: 'colWidthFillTable',
                                                value: function () {
                                                    var t = this.children.head;
                                                    if (t && t.statics.blotName === r.blotName.tableColGroup) {
                                                        var e = t.children.reduce(function (t, e) {
                                                            return e.width + t;
                                                        }, 0);
                                                        return (this.domNode.style.width = e + 'px'), e;
                                                    }
                                                },
                                            },
                                            {
                                                key: 'formatTableWidth',
                                                value: function () {
                                                    var t = this;
                                                    setTimeout(function () {
                                                        var e = getComputedStyle(t.domNode).width;
                                                        if (e) {
                                                            var r = t.colWidthFillTable(),
                                                                n = parseInt(e);
                                                            n > r &&
                                                                ((t.domNode.style.width = n + 'px'),
                                                                t.computedCorrectWidth(n));
                                                        }
                                                    }, 0);
                                                },
                                            },
                                            {
                                                key: 'tableId',
                                                get: function () {
                                                    return this.domNode.dataset.tableId;
                                                },
                                            },
                                            {
                                                key: 'getRows',
                                                value: function () {
                                                    return this.descendants(n.default);
                                                },
                                            },
                                            {
                                                key: 'getRowIds',
                                                value: function () {
                                                    return this.getRows().map(function (t) {
                                                        return t.rowId;
                                                    });
                                                },
                                            },
                                            {
                                                key: 'getCols',
                                                value: function () {
                                                    return this.descendants(o.default);
                                                },
                                            },
                                            {
                                                key: 'getColIds',
                                                value: function () {
                                                    return this.getCols().map(function (t) {
                                                        return t.colId;
                                                    });
                                                },
                                            },
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    u(f(d.prototype), 'optimize', this).call(this);
                                                    var t = this.next;
                                                    null != t &&
                                                        t.prev === this &&
                                                        t.statics.blotName === this.statics.blotName &&
                                                        t.domNode.tagName === this.domNode.tagName &&
                                                        t.domNode.dataset.tableId === this.domNode.dataset.tableId &&
                                                        (t.moveChildren(this), t.remove());
                                                },
                                            },
                                        ]) && l(e.prototype, i),
                                        a && l(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        d
                                    );
                                })(p);
                            (h.blotName = r.blotName.table),
                                (h.tagName = 'table'),
                                (h.scope = d.Scope.BLOCK_BLOT),
                                (t.default = h);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                1644: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257), r(3684)]),
                        (n = function (t, e, r, n) {
                            'use strict';
                            function o(t) {
                                return t && t.__esModule ? t : { default: t };
                            }
                            function i(t, e) {
                                return (
                                    (function (t) {
                                        if (Array.isArray(t)) return t;
                                    })(t) ||
                                    (function (t, e) {
                                        var r =
                                            null == t
                                                ? null
                                                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                                                  t['@@iterator'];
                                        if (null != r) {
                                            var n,
                                                o,
                                                i,
                                                a,
                                                l = [],
                                                u = !0,
                                                s = !1;
                                            try {
                                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                                    if (Object(r) !== r) return;
                                                    u = !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(u = (n = i.call(r)).done) &&
                                                        (l.push(n.value), l.length !== e);
                                                        u = !0
                                                    );
                                            } catch (t) {
                                                (s = !0), (o = t);
                                            } finally {
                                                try {
                                                    if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
                                                        return;
                                                } finally {
                                                    if (s) throw o;
                                                }
                                            }
                                            return l;
                                        }
                                    })(t, e) ||
                                    (function (t, e) {
                                        if (t) {
                                            if ('string' == typeof t) return l(t, e);
                                            var r = Object.prototype.toString.call(t).slice(8, -1);
                                            return (
                                                'Object' === r && t.constructor && (r = t.constructor.name),
                                                'Map' === r || 'Set' === r
                                                    ? Array.from(t)
                                                    : 'Arguments' === r ||
                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                    ? l(t, e)
                                                    : void 0
                                            );
                                        }
                                    })(t, e) ||
                                    (function () {
                                        throw new TypeError(
                                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                        );
                                    })()
                                );
                            }
                            function l(t, e) {
                                (null == e || e > t.length) && (e = t.length);
                                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                                return n;
                            }
                            function u(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function s() {
                                return (
                                    (s =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = p(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    s.apply(this, arguments)
                                );
                            }
                            function c(t, e) {
                                return (
                                    (c = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    c(t, e)
                                );
                            }
                            function f(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = p(t);
                                    if (e) {
                                        var o = p(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function p(t) {
                                return (
                                    (p = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    p(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }),
                                (t.default = void 0),
                                (e = o(e)),
                                (n = o(n));
                            var d = e.default.import('blots/container'),
                                h = e.default.import('parchment'),
                                y = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && c(t, e);
                                    })(l, t);
                                    var e,
                                        r,
                                        o,
                                        a = f(l);
                                    function l() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, l),
                                            a.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = l),
                                        (o = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = s(p(l), 'create', this).call(this);
                                                    return (e.dataset.rowId = t), e;
                                                },
                                            },
                                        ]),
                                        (r = [
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    s(p(l.prototype), 'optimize', this).call(this);
                                                    var t = this.next;
                                                    null != t &&
                                                        t.prev === this &&
                                                        t.statics.blotName === this.statics.blotName &&
                                                        t.domNode.dataset.rowId === this.domNode.dataset.rowId &&
                                                        (t.moveChildren(this), t.remove());
                                                },
                                            },
                                            {
                                                key: 'rowId',
                                                get: function () {
                                                    return this.domNode.dataset.rowId;
                                                },
                                            },
                                            {
                                                key: 'foreachCellInner',
                                                value: function (t) {
                                                    for (
                                                        var e, r = this.children.iterator(), o = 0;
                                                        (e = r()) && !t(i(e.descendants(n.default), 1)[0], o++);

                                                    );
                                                },
                                            },
                                            {
                                                key: 'deleteAt',
                                                value: function (t, e) {
                                                    var r;
                                                    s(p(l.prototype), 'deleteAt', this).call(this, t, e),
                                                        (null === (r = this.prev) ||
                                                        void 0 === r ||
                                                        null === (r = r.statics) ||
                                                        void 0 === r
                                                            ? void 0
                                                            : r.blotName) === this.statics.blotName &&
                                                            this.prev.deleteAt(t, e);
                                                },
                                            },
                                        ]) && u(e.prototype, r),
                                        o && u(e, o),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        l
                                    );
                                })(d);
                            (y.blotName = r.blotName.tableRow),
                                (y.tagName = 'tr'),
                                (y.className = 'ql-table-row'),
                                (y.scope = h.Scope.BLOCK_BLOT),
                                (t.default = y);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                1520: function (t, e, r) {
                    var n, o, i;
                    function a(t) {
                        return (
                            (a =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              'function' == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? 'symbol'
                                              : typeof t;
                                      }),
                            a(t)
                        );
                    }
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(4257)]),
                        (n = function (t, e, r) {
                            'use strict';
                            function n(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(
                                            t,
                                            ((o = n.key),
                                            (i = void 0),
                                            (i = (function (t, e) {
                                                if ('object' !== a(t) || null === t) return t;
                                                var r = t[Symbol.toPrimitive];
                                                if (void 0 !== r) {
                                                    var n = r.call(t, e || 'default');
                                                    if ('object' !== a(n)) return n;
                                                    throw new TypeError('@@toPrimitive must return a primitive value.');
                                                }
                                                return ('string' === e ? String : Number)(t);
                                            })(o, 'string')),
                                            'symbol' === a(i) ? i : String(i)),
                                            n
                                        );
                                }
                                var o, i;
                            }
                            function o() {
                                return (
                                    (o =
                                        'undefined' != typeof Reflect && Reflect.get
                                            ? Reflect.get.bind()
                                            : function (t, e, r) {
                                                  var n = (function (t, e) {
                                                      for (
                                                          ;
                                                          !Object.prototype.hasOwnProperty.call(t, e) &&
                                                          null !== (t = u(t));

                                                      );
                                                      return t;
                                                  })(t, e);
                                                  if (n) {
                                                      var o = Object.getOwnPropertyDescriptor(n, e);
                                                      return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                                                  }
                                              }),
                                    o.apply(this, arguments)
                                );
                            }
                            function i(t, e) {
                                return (
                                    (i = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    i(t, e)
                                );
                            }
                            function l(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = u(t);
                                    if (e) {
                                        var o = u(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === a(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return (function (t) {
                                            if (void 0 === t)
                                                throw new ReferenceError(
                                                    "this hasn't been initialised - super() hasn't been called"
                                                );
                                            return t;
                                        })(t);
                                    })(this, r);
                                };
                            }
                            function u(t) {
                                return (
                                    (u = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    u(t)
                                );
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                            var s,
                                c = ((s = e), (e = s && s.__esModule ? s : { default: s })).default.import(
                                    'blots/container'
                                ),
                                f = e.default.import('parchment'),
                                p = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && i(t, e);
                                    })(c, t);
                                    var e,
                                        r,
                                        a,
                                        s = l(c);
                                    function c() {
                                        return (
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, c),
                                            s.apply(this, arguments)
                                        );
                                    }
                                    return (
                                        (e = c),
                                        (a = [
                                            {
                                                key: 'create',
                                                value: function (t) {
                                                    var e = o(u(c), 'create', this).call(this);
                                                    return (
                                                        (e.dataset.tableId = t),
                                                        e.addEventListener(
                                                            'dragstart',
                                                            function (t) {
                                                                t.preventDefault(), t.stopPropagation();
                                                            },
                                                            !0
                                                        ),
                                                        (e.ondrop = function (t) {
                                                            t.preventDefault();
                                                        }),
                                                        (e.ondragover = function (t) {
                                                            t.preventDefault(), (t.dataTransfer.dropEffect = 'none');
                                                        }),
                                                        e
                                                    );
                                                },
                                            },
                                        ]),
                                        (r = [
                                            {
                                                key: 'tableId',
                                                get: function () {
                                                    return this.domNode.dataset.tableId;
                                                },
                                            },
                                            {
                                                key: 'insertBefore',
                                                value: function (t, e) {
                                                    t.statics.blotName == this.statics.blotName
                                                        ? o(u(c.prototype), 'insertBefore', this).call(
                                                              this,
                                                              t.children.head,
                                                              e
                                                          )
                                                        : this.statics.allowedChildren.find(function (e) {
                                                              return e.blotName === t.statics.blotName;
                                                          })
                                                        ? o(u(c.prototype), 'insertBefore', this).call(this, t, e)
                                                        : e
                                                        ? this.prev
                                                            ? this.prev.insertBefore(t, null)
                                                            : this.parent.insertBefore(t, this)
                                                        : this.next
                                                        ? this.next.insertBefore(t, e)
                                                        : this.parent.appendChild(t);
                                                },
                                            },
                                            {
                                                key: 'optimize',
                                                value: function () {
                                                    o(u(c.prototype), 'optimize', this).call(this);
                                                    var t = this.next;
                                                    null != t &&
                                                        t.prev === this &&
                                                        t.statics.blotName === this.statics.blotName &&
                                                        t.domNode.tagName === this.domNode.tagName &&
                                                        t.domNode.dataset.tableId === this.domNode.dataset.tableId &&
                                                        (t.moveChildren(this), t.remove());
                                                },
                                            },
                                            {
                                                key: 'deleteAt',
                                                value: function (t, e) {
                                                    var r;
                                                    o(u(c.prototype), 'deleteAt', this).call(this, t, e),
                                                        null ===
                                                            (r = document.querySelector(
                                                                '.ql-table-tooltip[data-table-id="'.concat(
                                                                    this.tableId,
                                                                    '"]'
                                                                )
                                                            )) ||
                                                            void 0 === r ||
                                                            null === (r = r.classList) ||
                                                            void 0 === r ||
                                                            r.add('ql-hidden');
                                                },
                                            },
                                        ]) && n(e.prototype, r),
                                        a && n(e, a),
                                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                                        c
                                    );
                                })(c);
                            (p.blotName = r.blotName.tableWrapper),
                                (p.tagName = 'p'),
                                (p.className = 'ql-table-wrapper'),
                                (p.scope = f.Scope.BLOCK_BLOT),
                                (t.default = p);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                5579: function (t, e, r) {
                    var n, o, i;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [
                            e,
                            r(7436),
                            r(5937),
                            r(6318),
                            r(8838),
                            r(580),
                            r(7014),
                            r(1644),
                            r(603),
                            r(1520),
                            r(1883),
                            r(6504),
                            r(939),
                            r(3684),
                            r(8903),
                            r(863),
                            r(9801),
                            r(4257),
                        ]),
                        (n = function (t, e, r, n, o, i, a, l, u, s, c, f, p, d, h, y, b, m) {
                            'use strict';
                            var v;
                            function g(t) {
                                return t && t.__esModule ? t : { default: t };
                            }
                            function w(t) {
                                return (
                                    (w =
                                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                            ? function (t) {
                                                  return typeof t;
                                              }
                                            : function (t) {
                                                  return t &&
                                                      'function' == typeof Symbol &&
                                                      t.constructor === Symbol &&
                                                      t !== Symbol.prototype
                                                      ? 'symbol'
                                                      : typeof t;
                                              }),
                                    w(t)
                                );
                            }
                            function O(t, e) {
                                return (
                                    (function (t) {
                                        if (Array.isArray(t)) return t;
                                    })(t) ||
                                    (function (t, e) {
                                        var r =
                                            null == t
                                                ? null
                                                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                                                  t['@@iterator'];
                                        if (null != r) {
                                            var n,
                                                o,
                                                i,
                                                a,
                                                l = [],
                                                u = !0,
                                                s = !1;
                                            try {
                                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                                    if (Object(r) !== r) return;
                                                    u = !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(u = (n = i.call(r)).done) &&
                                                        (l.push(n.value), l.length !== e);
                                                        u = !0
                                                    );
                                            } catch (t) {
                                                (s = !0), (o = t);
                                            } finally {
                                                try {
                                                    if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
                                                        return;
                                                } finally {
                                                    if (s) throw o;
                                                }
                                            }
                                            return l;
                                        }
                                    })(t, e) ||
                                    _(t, e) ||
                                    (function () {
                                        throw new TypeError(
                                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                        );
                                    })()
                                );
                            }
                            function N(t) {
                                return (
                                    (function (t) {
                                        if (Array.isArray(t)) return x(t);
                                    })(t) ||
                                    (function (t) {
                                        if (
                                            ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                                            null != t['@@iterator']
                                        )
                                            return Array.from(t);
                                    })(t) ||
                                    _(t) ||
                                    (function () {
                                        throw new TypeError(
                                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                        );
                                    })()
                                );
                            }
                            function _(t, e) {
                                if (t) {
                                    if ('string' == typeof t) return x(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    return (
                                        'Object' === r && t.constructor && (r = t.constructor.name),
                                        'Map' === r || 'Set' === r
                                            ? Array.from(t)
                                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                            ? x(t, e)
                                            : void 0
                                    );
                                }
                            }
                            function x(t, e) {
                                (null == e || e > t.length) && (e = t.length);
                                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                                return n;
                            }
                            function j(t) {
                                throw new TypeError('"' + t + '" is read-only');
                            }
                            function E() {
                                E = function () {
                                    return e;
                                };
                                var t,
                                    e = {},
                                    r = Object.prototype,
                                    n = r.hasOwnProperty,
                                    o =
                                        Object.defineProperty ||
                                        function (t, e, r) {
                                            t[e] = r.value;
                                        },
                                    i = 'function' == typeof Symbol ? Symbol : {},
                                    a = i.iterator || '@@iterator',
                                    l = i.asyncIterator || '@@asyncIterator',
                                    u = i.toStringTag || '@@toStringTag';
                                function s(t, e, r) {
                                    return (
                                        Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        }),
                                        t[e]
                                    );
                                }
                                try {
                                    s({}, '');
                                } catch (t) {
                                    s = function (t, e, r) {
                                        return (t[e] = r);
                                    };
                                }
                                function c(t, e, r, n) {
                                    var i = e && e.prototype instanceof m ? e : m,
                                        a = Object.create(i.prototype),
                                        l = new C(n || []);
                                    return o(a, '_invoke', { value: S(t, r, l) }), a;
                                }
                                function f(t, e, r) {
                                    try {
                                        return { type: 'normal', arg: t.call(e, r) };
                                    } catch (t) {
                                        return { type: 'throw', arg: t };
                                    }
                                }
                                e.wrap = c;
                                var p = 'suspendedStart',
                                    d = 'suspendedYield',
                                    h = 'executing',
                                    y = 'completed',
                                    b = {};
                                function m() {}
                                function v() {}
                                function g() {}
                                var O = {};
                                s(O, a, function () {
                                    return this;
                                });
                                var N = Object.getPrototypeOf,
                                    _ = N && N(N(L([])));
                                _ && _ !== r && n.call(_, a) && (O = _);
                                var x = (g.prototype = m.prototype = Object.create(O));
                                function j(t) {
                                    ['next', 'throw', 'return'].forEach(function (e) {
                                        s(t, e, function (t) {
                                            return this._invoke(e, t);
                                        });
                                    });
                                }
                                function T(t, e) {
                                    function r(o, i, a, l) {
                                        var u = f(t[o], t, i);
                                        if ('throw' !== u.type) {
                                            var s = u.arg,
                                                c = s.value;
                                            return c && 'object' == w(c) && n.call(c, '__await')
                                                ? e.resolve(c.__await).then(
                                                      function (t) {
                                                          r('next', t, a, l);
                                                      },
                                                      function (t) {
                                                          r('throw', t, a, l);
                                                      }
                                                  )
                                                : e.resolve(c).then(
                                                      function (t) {
                                                          (s.value = t), a(s);
                                                      },
                                                      function (t) {
                                                          return r('throw', t, a, l);
                                                      }
                                                  );
                                        }
                                        l(u.arg);
                                    }
                                    var i;
                                    o(this, '_invoke', {
                                        value: function (t, n) {
                                            function o() {
                                                return new e(function (e, o) {
                                                    r(t, n, e, o);
                                                });
                                            }
                                            return (i = i ? i.then(o, o) : o());
                                        },
                                    });
                                }
                                function S(e, r, n) {
                                    var o = p;
                                    return function (i, a) {
                                        if (o === h) throw new Error('Generator is already running');
                                        if (o === y) {
                                            if ('throw' === i) throw a;
                                            return { value: t, done: !0 };
                                        }
                                        for (n.method = i, n.arg = a; ; ) {
                                            var l = n.delegate;
                                            if (l) {
                                                var u = P(l, n);
                                                if (u) {
                                                    if (u === b) continue;
                                                    return u;
                                                }
                                            }
                                            if ('next' === n.method) n.sent = n._sent = n.arg;
                                            else if ('throw' === n.method) {
                                                if (o === p) throw ((o = y), n.arg);
                                                n.dispatchException(n.arg);
                                            } else 'return' === n.method && n.abrupt('return', n.arg);
                                            o = h;
                                            var s = f(e, r, n);
                                            if ('normal' === s.type) {
                                                if (((o = n.done ? y : d), s.arg === b)) continue;
                                                return { value: s.arg, done: n.done };
                                            }
                                            'throw' === s.type && ((o = y), (n.method = 'throw'), (n.arg = s.arg));
                                        }
                                    };
                                }
                                function P(e, r) {
                                    var n = r.method,
                                        o = e.iterator[n];
                                    if (o === t)
                                        return (
                                            (r.delegate = null),
                                            ('throw' === n &&
                                                e.iterator.return &&
                                                ((r.method = 'return'), (r.arg = t), P(e, r), 'throw' === r.method)) ||
                                                ('return' !== n &&
                                                    ((r.method = 'throw'),
                                                    (r.arg = new TypeError(
                                                        "The iterator does not provide a '" + n + "' method"
                                                    )))),
                                            b
                                        );
                                    var i = f(o, e.iterator, r.arg);
                                    if ('throw' === i.type)
                                        return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), b;
                                    var a = i.arg;
                                    return a
                                        ? a.done
                                            ? ((r[e.resultName] = a.value),
                                              (r.next = e.nextLoc),
                                              'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                                              (r.delegate = null),
                                              b)
                                            : a
                                        : ((r.method = 'throw'),
                                          (r.arg = new TypeError('iterator result is not an object')),
                                          (r.delegate = null),
                                          b);
                                }
                                function A(t) {
                                    var e = { tryLoc: t[0] };
                                    1 in t && (e.catchLoc = t[1]),
                                        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                                        this.tryEntries.push(e);
                                }
                                function I(t) {
                                    var e = t.completion || {};
                                    (e.type = 'normal'), delete e.arg, (t.completion = e);
                                }
                                function C(t) {
                                    (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(A, this), this.reset(!0);
                                }
                                function L(e) {
                                    if (e || '' === e) {
                                        var r = e[a];
                                        if (r) return r.call(e);
                                        if ('function' == typeof e.next) return e;
                                        if (!isNaN(e.length)) {
                                            var o = -1,
                                                i = function r() {
                                                    for (; ++o < e.length; )
                                                        if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                                                    return (r.value = t), (r.done = !0), r;
                                                };
                                            return (i.next = i);
                                        }
                                    }
                                    throw new TypeError(w(e) + ' is not iterable');
                                }
                                return (
                                    (v.prototype = g),
                                    o(x, 'constructor', { value: g, configurable: !0 }),
                                    o(g, 'constructor', { value: v, configurable: !0 }),
                                    (v.displayName = s(g, u, 'GeneratorFunction')),
                                    (e.isGeneratorFunction = function (t) {
                                        var e = 'function' == typeof t && t.constructor;
                                        return !!e && (e === v || 'GeneratorFunction' === (e.displayName || e.name));
                                    }),
                                    (e.mark = function (t) {
                                        return (
                                            Object.setPrototypeOf
                                                ? Object.setPrototypeOf(t, g)
                                                : ((t.__proto__ = g), s(t, u, 'GeneratorFunction')),
                                            (t.prototype = Object.create(x)),
                                            t
                                        );
                                    }),
                                    (e.awrap = function (t) {
                                        return { __await: t };
                                    }),
                                    j(T.prototype),
                                    s(T.prototype, l, function () {
                                        return this;
                                    }),
                                    (e.AsyncIterator = T),
                                    (e.async = function (t, r, n, o, i) {
                                        void 0 === i && (i = Promise);
                                        var a = new T(c(t, r, n, o), i);
                                        return e.isGeneratorFunction(r)
                                            ? a
                                            : a.next().then(function (t) {
                                                  return t.done ? t.value : a.next();
                                              });
                                    }),
                                    j(x),
                                    s(x, u, 'Generator'),
                                    s(x, a, function () {
                                        return this;
                                    }),
                                    s(x, 'toString', function () {
                                        return '[object Generator]';
                                    }),
                                    (e.keys = function (t) {
                                        var e = Object(t),
                                            r = [];
                                        for (var n in e) r.push(n);
                                        return (
                                            r.reverse(),
                                            function t() {
                                                for (; r.length; ) {
                                                    var n = r.pop();
                                                    if (n in e) return (t.value = n), (t.done = !1), t;
                                                }
                                                return (t.done = !0), t;
                                            }
                                        );
                                    }),
                                    (e.values = L),
                                    (C.prototype = {
                                        constructor: C,
                                        reset: function (e) {
                                            if (
                                                ((this.prev = 0),
                                                (this.next = 0),
                                                (this.sent = this._sent = t),
                                                (this.done = !1),
                                                (this.delegate = null),
                                                (this.method = 'next'),
                                                (this.arg = t),
                                                this.tryEntries.forEach(I),
                                                !e)
                                            )
                                                for (var r in this)
                                                    't' === r.charAt(0) &&
                                                        n.call(this, r) &&
                                                        !isNaN(+r.slice(1)) &&
                                                        (this[r] = t);
                                        },
                                        stop: function () {
                                            this.done = !0;
                                            var t = this.tryEntries[0].completion;
                                            if ('throw' === t.type) throw t.arg;
                                            return this.rval;
                                        },
                                        dispatchException: function (e) {
                                            if (this.done) throw e;
                                            var r = this;
                                            function o(n, o) {
                                                return (
                                                    (l.type = 'throw'),
                                                    (l.arg = e),
                                                    (r.next = n),
                                                    o && ((r.method = 'next'), (r.arg = t)),
                                                    !!o
                                                );
                                            }
                                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                                var a = this.tryEntries[i],
                                                    l = a.completion;
                                                if ('root' === a.tryLoc) return o('end');
                                                if (a.tryLoc <= this.prev) {
                                                    var u = n.call(a, 'catchLoc'),
                                                        s = n.call(a, 'finallyLoc');
                                                    if (u && s) {
                                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                                    } else if (u) {
                                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                                    } else {
                                                        if (!s)
                                                            throw new Error('try statement without catch or finally');
                                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                                    }
                                                }
                                            }
                                        },
                                        abrupt: function (t, e) {
                                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                                var o = this.tryEntries[r];
                                                if (
                                                    o.tryLoc <= this.prev &&
                                                    n.call(o, 'finallyLoc') &&
                                                    this.prev < o.finallyLoc
                                                ) {
                                                    var i = o;
                                                    break;
                                                }
                                            }
                                            i &&
                                                ('break' === t || 'continue' === t) &&
                                                i.tryLoc <= e &&
                                                e <= i.finallyLoc &&
                                                (i = null);
                                            var a = i ? i.completion : {};
                                            return (
                                                (a.type = t),
                                                (a.arg = e),
                                                i
                                                    ? ((this.method = 'next'), (this.next = i.finallyLoc), b)
                                                    : this.complete(a)
                                            );
                                        },
                                        complete: function (t, e) {
                                            if ('throw' === t.type) throw t.arg;
                                            return (
                                                'break' === t.type || 'continue' === t.type
                                                    ? (this.next = t.arg)
                                                    : 'return' === t.type
                                                    ? ((this.rval = this.arg = t.arg),
                                                      (this.method = 'return'),
                                                      (this.next = 'end'))
                                                    : 'normal' === t.type && e && (this.next = e),
                                                b
                                            );
                                        },
                                        finish: function (t) {
                                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                                var r = this.tryEntries[e];
                                                if (r.finallyLoc === t)
                                                    return this.complete(r.completion, r.afterLoc), I(r), b;
                                            }
                                        },
                                        catch: function (t) {
                                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                                var r = this.tryEntries[e];
                                                if (r.tryLoc === t) {
                                                    var n = r.completion;
                                                    if ('throw' === n.type) {
                                                        var o = n.arg;
                                                        I(r);
                                                    }
                                                    return o;
                                                }
                                            }
                                            throw new Error('illegal catch attempt');
                                        },
                                        delegateYield: function (e, r, n) {
                                            return (
                                                (this.delegate = { iterator: L(e), resultName: r, nextLoc: n }),
                                                'next' === this.method && (this.arg = t),
                                                b
                                            );
                                        },
                                    }),
                                    e
                                );
                            }
                            function T(t, e, r, n, o, i, a) {
                                try {
                                    var l = t[i](a),
                                        u = l.value;
                                } catch (t) {
                                    return void r(t);
                                }
                                l.done ? e(u) : Promise.resolve(u).then(n, o);
                            }
                            function S(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    (n.enumerable = n.enumerable || !1),
                                        (n.configurable = !0),
                                        'value' in n && (n.writable = !0),
                                        Object.defineProperty(t, k(n.key), n);
                                }
                            }
                            function P(t, e) {
                                return (
                                    (P = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (t, e) {
                                              return (t.__proto__ = e), t;
                                          }),
                                    P(t, e)
                                );
                            }
                            function A(t) {
                                var e = (function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ('function' == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {})
                                            ),
                                            !0
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                                return function () {
                                    var r,
                                        n = C(t);
                                    if (e) {
                                        var o = C(this).constructor;
                                        r = Reflect.construct(n, arguments, o);
                                    } else r = n.apply(this, arguments);
                                    return (function (t, e) {
                                        if (e && ('object' === w(e) || 'function' == typeof e)) return e;
                                        if (void 0 !== e)
                                            throw new TypeError(
                                                'Derived constructors may only return object or undefined'
                                            );
                                        return I(t);
                                    })(this, r);
                                };
                            }
                            function I(t) {
                                if (void 0 === t)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return t;
                            }
                            function C(t) {
                                return (
                                    (C = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (t) {
                                              return t.__proto__ || Object.getPrototypeOf(t);
                                          }),
                                    C(t)
                                );
                            }
                            function L(t, e, r) {
                                return (
                                    (e = k(e)) in t
                                        ? Object.defineProperty(t, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = r),
                                    t
                                );
                            }
                            function k(t) {
                                var e = (function (t, e) {
                                    if ('object' !== w(t) || null === t) return t;
                                    var r = t[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(t, e || 'default');
                                        if ('object' !== w(n)) return n;
                                        throw new TypeError('@@toPrimitive must return a primitive value.');
                                    }
                                    return ('string' === e ? String : Number)(t);
                                })(t, 'string');
                                return 'symbol' === w(e) ? e : String(e);
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }),
                                (t.tableCantInsert = t.isForbidInTableBlot = t.isForbidInTable = t.default = void 0),
                                (e = g(e)),
                                (r = g(r)),
                                (n = g(n)),
                                (o = g(o)),
                                (i = g(i)),
                                (a = g(a)),
                                (l = g(l)),
                                (u = g(u)),
                                (s = g(s)),
                                (c = g(c)),
                                (f = g(f)),
                                (p = g(p)),
                                (d = g(d)),
                                (y = g(y)),
                                (b = g(b));
                            var R = e.default.import('parchment'),
                                B = e.default.import('delta'),
                                M = e.default.import('blots/block/embed'),
                                D = e.default.import('blots/block'),
                                q = e.default.import('blots/container'),
                                F = e.default.import('ui/icons');
                            (i.default.allowedChildren = [D, M, q]),
                                (s.default.allowedChildren = [u.default]),
                                (u.default.allowedChildren = [c.default, f.default]),
                                (u.default.requiredContainer = s.default),
                                (c.default.allowedChildren = [l.default]),
                                (c.default.requiredContainer = u.default),
                                (f.default.allowedChildren = [p.default]),
                                (f.default.requiredContainer = u.default),
                                (l.default.allowedChildren = [a.default]),
                                (l.default.requiredContainer = c.default),
                                (a.default.allowedChildren = [D, M, q]),
                                (a.default.allowedChildren = [d.default]),
                                (d.default.defaultChild = 'block'),
                                (d.default.allowedChildren = [D, M, q]),
                                e.default.register(
                                    (L((v = {}), 'formats/'.concat(i.default.blotName), i.default),
                                    L(v, 'formats/'.concat(d.default.blotName), d.default),
                                    L(v, 'formats/'.concat(a.default.blotName), a.default),
                                    L(v, 'formats/'.concat(l.default.blotName), l.default),
                                    L(v, 'formats/'.concat(c.default.blotName), c.default),
                                    L(v, 'formats/'.concat(u.default.blotName), u.default),
                                    L(v, 'formats/'.concat(s.default.blotName), s.default),
                                    L(v, 'formats/'.concat(f.default.blotName), f.default),
                                    L(v, 'formats/'.concat(p.default.blotName), p.default),
                                    v),
                                    !0
                                );
                            var U = (function (t) {
                                    !(function (t, e) {
                                        if ('function' != typeof e && null !== e)
                                            throw new TypeError('Super expression must either be null or a function');
                                        (t.prototype = Object.create(e && e.prototype, {
                                            constructor: { value: t, writable: !0, configurable: !0 },
                                        })),
                                            Object.defineProperty(t, 'prototype', { writable: !1 }),
                                            e && P(t, e);
                                    })(c, t);
                                    var r,
                                        i,
                                        a,
                                        l,
                                        u,
                                        s = A(c);
                                    function c(t, e) {
                                        var r;
                                        (function (t, e) {
                                            if (!(t instanceof e))
                                                throw new TypeError('Cannot call a class as a function');
                                        })(this, c),
                                            ((r = s.call(this, t, e)).quill = t),
                                            (r.options = e),
                                            (r.tableBtn = null),
                                            (r.tableInsertSelectCloseHandler = null);
                                        var n = r.quill.getModule('toolbar');
                                        return (
                                            n && n.addHandler(c.toolName, r.handleSelectDisplay.bind(I(r))),
                                            r.pasteTableHandler(),
                                            r.quill.root.addEventListener(
                                                'click',
                                                function (n) {
                                                    var o,
                                                        i = n.path || (n.composedPath && n.composedPath());
                                                    if (i && !(i.length <= 0)) {
                                                        var a =
                                                            null ===
                                                                (o = i.filter(function (t) {
                                                                    return (
                                                                        t.tagName &&
                                                                        'TABLE' === t.tagName.toUpperCase() &&
                                                                        t.classList.contains('ql-table')
                                                                    );
                                                                })) || void 0 === o
                                                                ? void 0
                                                                : o[0];
                                                        if (a) {
                                                            if (r.table === a) return;
                                                            r.table && r.hideTableTools(),
                                                                r.showTableTools(a, t, e.selection);
                                                        } else r.table && r.hideTableTools();
                                                    }
                                                },
                                                !1
                                            ),
                                            r.quill.root.addEventListener('contextmenu', function (n) {
                                                var i;
                                                if (!r.table) return !0;
                                                n.preventDefault();
                                                var a = n.path || (n.composedPath && n.composedPath());
                                                if (a && !(a.length <= 0)) {
                                                    var l = a.filter(function (t) {
                                                        return (
                                                            t.tagName &&
                                                            'TABLE' === t.tagName.toUpperCase() &&
                                                            t.classList.contains('ql-table')
                                                        );
                                                    })[0];
                                                    if (
                                                        l &&
                                                        null !== (i = r.tableSelection) &&
                                                        void 0 !== i &&
                                                        null !== (i = i.selectedTds) &&
                                                        void 0 !== i &&
                                                        i.length
                                                    ) {
                                                        r.tableOperationMenu &&
                                                            (r.tableOperationMenu = r.tableOperationMenu.destroy());
                                                        var u = a.filter(function (t) {
                                                                return (
                                                                    t.tagName &&
                                                                    'TR' === t.tagName.toUpperCase() &&
                                                                    t.getAttribute('data-row-id')
                                                                );
                                                            })[0],
                                                            s = a.filter(function (t) {
                                                                return (
                                                                    t.tagName &&
                                                                    'TD' === t.tagName.toUpperCase() &&
                                                                    t.getAttribute('data-row-id')
                                                                );
                                                            })[0];
                                                        r.tableOperationMenu = new o.default(
                                                            { table: l, row: u, cell: s, left: n.pageX, top: n.pageY },
                                                            t,
                                                            e.operationMenu
                                                        );
                                                    }
                                                }
                                            }),
                                            (r.quill.theme.tableToolTip = new y.default(
                                                r.quill,
                                                r.options.tableToolTip
                                            )),
                                            r
                                        );
                                    }
                                    return (
                                        (r = c),
                                        (i = [
                                            {
                                                key: 'showTableTools',
                                                value: function (t, e, r) {
                                                    (this.table = t), (this.tableSelection = new n.default(t, e, r));
                                                },
                                            },
                                            {
                                                key: 'hideTableTools',
                                                value: function () {
                                                    this.tableSelection && this.tableSelection.destroy(),
                                                        this.tableOperationMenu && this.tableOperationMenu.destroy(),
                                                        (this.tableSelection = null),
                                                        (this.tableOperationMenu = null),
                                                        (this.table = null);
                                                },
                                            },
                                            {
                                                key: 'pasteTableHandler',
                                                value: function () {
                                                    var t = (0, h.randomId)(),
                                                        e = (0, h.randomId)(),
                                                        r = [],
                                                        n = !1,
                                                        o = 0;
                                                    this.quill.clipboard.addMatcher(m.blotName.table, function (e, i) {
                                                        var a = Array.from(e.getElementsByTagName('tr')).reduce(
                                                                function (t, e) {
                                                                    var r = Array.from(
                                                                        e.getElementsByTagName('td')
                                                                    ).map(function (t) {
                                                                        return t.getBoundingClientRect().width;
                                                                    });
                                                                    return r.length < t.length
                                                                        ? t
                                                                        : r
                                                                              .map(function (e, r) {
                                                                                  var n;
                                                                                  return Math.max(
                                                                                      e,
                                                                                      null !== (n = t[r]) &&
                                                                                          void 0 !== n
                                                                                          ? n
                                                                                          : 0
                                                                                  );
                                                                              })
                                                                              .concat(t.slice(r.length));
                                                                },
                                                                []
                                                            ),
                                                            l = new B();
                                                        return (
                                                            r.map(function (e, r) {
                                                                var n;
                                                                l.insert(
                                                                    '\n',
                                                                    L({}, m.blotName.tableCol, {
                                                                        colId: e,
                                                                        tableId: t,
                                                                        width:
                                                                            null !== (n = a[r]) && void 0 !== n
                                                                                ? n
                                                                                : 150,
                                                                    })
                                                                );
                                                            }),
                                                            (t = (0, h.randomId)()),
                                                            (r = []),
                                                            (n = !1),
                                                            (o = 0),
                                                            l.concat(i)
                                                        );
                                                    }),
                                                        this.quill.clipboard.addMatcher(
                                                            m.blotName.tableRow,
                                                            function (t, r) {
                                                                return (e = (0, h.randomId)()), (n = !0), r;
                                                            }
                                                        ),
                                                        this.quill.clipboard.addMatcher(
                                                            m.blotName.tableCell,
                                                            function (i, a) {
                                                                return (
                                                                    n || r.push((0, h.randomId)()),
                                                                    (o += 1),
                                                                    a.compose(
                                                                        new B().retain(
                                                                            a.length(),
                                                                            L({}, m.blotName.tableCell, {
                                                                                tableId: t,
                                                                                rowId: e,
                                                                                colId: r[(o - 1) % r.length],
                                                                                rowspan: i.getAttribute('rowspan'),
                                                                                colspan: i.getAttribute('colspan'),
                                                                                style: i.getAttribute('style'),
                                                                            })
                                                                        )
                                                                    )
                                                                );
                                                            }
                                                        );
                                                },
                                            },
                                            {
                                                key: 'handleSelectDisplay',
                                                value:
                                                    ((l = E().mark(function t() {
                                                        var e, r, n;
                                                        return E().wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch ((t.prev = t.next)) {
                                                                        case 0:
                                                                            if (
                                                                                (this.quill.focus(),
                                                                                (this.range =
                                                                                    this.quill.getSelection()),
                                                                                !this.options.size)
                                                                            ) {
                                                                                t.next = 11;
                                                                                break;
                                                                            }
                                                                            return (t.next = 5), this.options.size();
                                                                        case 5:
                                                                            (e = t.sent),
                                                                                (r = e.row),
                                                                                (n = e.col),
                                                                                this.insertTable(r, n),
                                                                                (t.next = 12);
                                                                            break;
                                                                        case 11:
                                                                            this.createSelect();
                                                                        case 12:
                                                                        case 'end':
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t,
                                                            this
                                                        );
                                                    })),
                                                    (u = function () {
                                                        var t = this,
                                                            e = arguments;
                                                        return new Promise(function (r, n) {
                                                            var o = l.apply(t, e);
                                                            function i(t) {
                                                                T(o, r, n, i, a, 'next', t);
                                                            }
                                                            function a(t) {
                                                                T(o, r, n, i, a, 'throw', t);
                                                            }
                                                            i(void 0);
                                                        });
                                                    }),
                                                    function () {
                                                        return u.apply(this, arguments);
                                                    }),
                                            },
                                            {
                                                key: 'createSelect',
                                                value: function () {
                                                    var t = this.insertTable.bind(this);
                                                    (0, h.showTableCreator)().then(function (e) {
                                                        var r = e.row,
                                                            n = e.col;
                                                        t(r, n);
                                                    });
                                                },
                                            },
                                            {
                                                key: 'closeSelecte',
                                                value: function (t) {
                                                    var e = this,
                                                        r = ((t.composedPath && t.composedPath()) || t.path).findIndex(
                                                            function (t) {
                                                                return t === e.tableBtn;
                                                            }
                                                        );
                                                    (r > 2 || -1 === r) &&
                                                        (this.tableBtn.classList.remove('ql-expanded'),
                                                        (this.tableBtn.dataset.active = !1),
                                                        window.removeEventListener(
                                                            'click',
                                                            this.tableInsertSelectCloseHandler
                                                        ));
                                                },
                                            },
                                            {
                                                key: 'insertTable',
                                                value: function (t, r) {
                                                    var n = this;
                                                    if (t >= 100 || r >= 100)
                                                        throw new Error('Both rows and columns must be less than 100.');
                                                    var o = this.range;
                                                    if (null != o) {
                                                        var i = this.quill.getLeaf(o.index)[0];
                                                        if (G(i))
                                                            throw new Error(
                                                                'Not supported nesting of ' +
                                                                    i.type +
                                                                    ' type object within a table.'
                                                            );
                                                        setTimeout(function () {
                                                            var i = new B().retain(o.index);
                                                            i.insert('\n');
                                                            var a = (0, h.randomId)(),
                                                                l = new Array(r).fill(0).map(function () {
                                                                    return (0, h.randomId)();
                                                                }),
                                                                u = getComputedStyle(n.quill.root),
                                                                s = u.width,
                                                                c = u.paddingLeft,
                                                                f = u.paddingRight;
                                                            (s = parseInt(s)),
                                                                (c = parseInt(c)),
                                                                (f = parseInt(f)),
                                                                (i = new Array(r).fill('\n').reduce(function (t, e, n) {
                                                                    return (
                                                                        t.insert(
                                                                            e,
                                                                            L({}, m.blotName.tableCol, {
                                                                                width: Math.floor((s - c - f - 1) / r),
                                                                                tableId: a,
                                                                                colId: l[n],
                                                                            })
                                                                        ),
                                                                        t
                                                                    );
                                                                }, i)),
                                                                (i = new Array(t).fill(0).reduce(function (t) {
                                                                    var e = (0, h.randomId)();
                                                                    return new Array(r)
                                                                        .fill('\n')
                                                                        .reduce(function (t, r, n) {
                                                                            return (
                                                                                t.insert(
                                                                                    r,
                                                                                    L({}, m.blotName.tableCellInner, {
                                                                                        tableId: a,
                                                                                        rowId: e,
                                                                                        colId: l[n],
                                                                                        rowspan: 1,
                                                                                        colspan: 1,
                                                                                    })
                                                                                ),
                                                                                t
                                                                            );
                                                                        }, t);
                                                                }, i)),
                                                                n.quill.updateContents(i, e.default.sources.USER),
                                                                n.quill.setSelection(
                                                                    o.index + r + r * t + 1,
                                                                    e.default.sources.API
                                                                ),
                                                                n.quill.focus();
                                                        }, 0);
                                                    }
                                                },
                                            },
                                            {
                                                key: 'findTable',
                                                value: function (t) {
                                                    for (
                                                        var e = t;
                                                        e.statics.blotName !== m.blotName.table && null !== e;

                                                    )
                                                        e = e.parent;
                                                    return e;
                                                },
                                            },
                                            {
                                                key: 'appendRow',
                                                value: function (t) {
                                                    var r = this.tableSelection.selectedTds;
                                                    if (r.length) {
                                                        var n = this.findTable(r[0]),
                                                            o = r[t ? r.length - 1 : 0],
                                                            i = e.default.find(o.domNode.parentNode.parentNode);
                                                        if (t) for (var a = o.rowspan; a > 1; ) (i = i.next), (a -= 1);
                                                        var l = n.getColIds(),
                                                            u = new Set(l),
                                                            s = t ? i : i.prev,
                                                            c = new Array(),
                                                            f = 0;
                                                        for (s || (u.clear(), (c = l)); u.size && ((f += 1), s); )
                                                            s.foreachCellInner(function (t) {
                                                                if (u.has(t.colId)) {
                                                                    var e,
                                                                        r = [t.colId];
                                                                    if (t.colspan > 1) {
                                                                        var n = l.findIndex(function (e) {
                                                                            return e === t.colId;
                                                                        });
                                                                        -1 === n && j('index'),
                                                                            (r = l.slice(n, n + t.colspan));
                                                                    }
                                                                    t.rowspan > f
                                                                        ? (t.rowspan += 1)
                                                                        : (e = c).push.apply(e, N(r)),
                                                                        r.map(function (t) {
                                                                            return u.delete(t);
                                                                        });
                                                                }
                                                            }),
                                                                (s = s.prev);
                                                        for (
                                                            var p = n.tableId,
                                                                d = (0, h.randomId)(),
                                                                y = R.create(m.blotName.tableRow, d),
                                                                b = new Set(c),
                                                                v = 0;
                                                            v < l.length && b.size;
                                                            v++
                                                        )
                                                            if (b.has(l[v])) {
                                                                var g = R.create(m.blotName.tableCell, {
                                                                        rowId: d,
                                                                        colId: l[v],
                                                                        rowspan: 1,
                                                                        colspan: 1,
                                                                    }),
                                                                    w = R.create(m.blotName.tableCellInner, {
                                                                        tableId: p,
                                                                        rowId: d,
                                                                        colId: l[v],
                                                                        rowspan: 1,
                                                                        colspan: 1,
                                                                    }),
                                                                    O = R.create('block');
                                                                O.appendChild(R.create('break')),
                                                                    w.appendChild(O),
                                                                    g.appendChild(w),
                                                                    y.appendChild(g),
                                                                    b.delete(l[v]);
                                                            }
                                                        i.parent.insertBefore(y, t ? i.next : i);
                                                    }
                                                },
                                            },
                                            {
                                                key: 'removeRow',
                                                value: function () {
                                                    if (this.tableSelection.selectedTds.length) {
                                                        var t = this.tableSelection.selectedTds,
                                                            r = t.reduce(
                                                                function (t, e) {
                                                                    return (
                                                                        t[0].has(e.rowId) ||
                                                                            (t[0].add(e.rowId),
                                                                            t[1].push(e.parent.parent)),
                                                                        t
                                                                    );
                                                                },
                                                                [new Set(), []]
                                                            ),
                                                            n = O(r, 2),
                                                            o = n[0],
                                                            i = n[1];
                                                        o = Array.from(o);
                                                        var a = new Map();
                                                        i.map(function (t) {
                                                            t.foreachCellInner(function (t) {
                                                                var e = o.findIndex(function (e) {
                                                                    return e === t.rowId;
                                                                });
                                                                t.rowspan > o.length - e &&
                                                                    a.set(t.colId, {
                                                                        cell: t,
                                                                        rowspan: t.rowspan - o.length + e,
                                                                    });
                                                            }),
                                                                t.remove();
                                                        });
                                                        var l = this.findTable(t[0]),
                                                            u = l.tableId;
                                                        if (a.size)
                                                            for (
                                                                var s = i[i.length - 1].next,
                                                                    c = l.getColIds(),
                                                                    f = null,
                                                                    p = 0;
                                                                p < c.length;

                                                            ) {
                                                                var d = s.domNode.querySelector(
                                                                    'td[data-col-id="'.concat(c[p], '"]')
                                                                );
                                                                if (d) {
                                                                    var h = e.default.find(d);
                                                                    (p += h.colspan), (f = h.next);
                                                                } else {
                                                                    var y = a.get(c[p]),
                                                                        b = y.cell,
                                                                        v = y.rowspan,
                                                                        g = R.create(m.blotName.tableCell, {
                                                                            rowId: s.rowId,
                                                                            colId: c[p],
                                                                            rowspan: v,
                                                                            colspan: b.colspan,
                                                                        }),
                                                                        w = R.create(m.blotName.tableCellInner, {
                                                                            tableId: u,
                                                                            rowId: s.rowId,
                                                                            colId: c[p],
                                                                            rowspan: v,
                                                                            colspan: b.colspan,
                                                                        });
                                                                    b.moveChildren(w),
                                                                        g.appendChild(w),
                                                                        s.insertBefore(g, f),
                                                                        (p += b.colspan);
                                                                }
                                                            }
                                                    }
                                                },
                                            },
                                            {
                                                key: 'appendCol',
                                                value: function (t) {
                                                    if (this.tableSelection.selectedTds.length) {
                                                        var e,
                                                            r = this.tableSelection.selectedTds,
                                                            n = this.findTable(r[0]),
                                                            o = n.getCols(),
                                                            i = n.getColIds(),
                                                            a = n.getRows(),
                                                            l = (0, h.randomId)();
                                                        if (t) {
                                                            var u = r[r.length - 1],
                                                                s = i.findIndex(function (t) {
                                                                    return t === u.colId;
                                                                });
                                                            e = i[s + u.colspan - 1];
                                                        } else e = r[0].colId;
                                                        var c = o.findIndex(function (r) {
                                                            if (r.colId === e) {
                                                                var o = R.create(m.blotName.tableCol, {
                                                                    width: 160,
                                                                    tableId: n.tableId,
                                                                    colId: l,
                                                                });
                                                                r.parent.insertBefore(o, t ? r.next : r);
                                                            }
                                                            return r.colId === e;
                                                        });
                                                        n.formatTableWidth();
                                                        var f = t ? e : i[c - 1],
                                                            p = t ? c : c - 1;
                                                        a.map(function (t) {
                                                            var e = !1,
                                                                r = null;
                                                            if (
                                                                (t.foreachCellInner(function (t) {
                                                                    var n = i.findIndex(function (e) {
                                                                        return e === t.colId;
                                                                    });
                                                                    return (
                                                                        t.colspan + n > p && (r = t.parent.next),
                                                                        1 !== t.colspan && t.colspan + n > p
                                                                            ? ((t.colspan += 1), (e = !0), !0)
                                                                            : t.colId === f || void 0
                                                                    );
                                                                }),
                                                                !e)
                                                            ) {
                                                                var o = R.create(m.blotName.tableCell, {
                                                                        rowId: t.rowId,
                                                                        colId: l,
                                                                        rowspan: 1,
                                                                        colspan: 1,
                                                                    }),
                                                                    a = R.create(m.blotName.tableCellInner, {
                                                                        tableId: n.tableId,
                                                                        rowId: t.rowId,
                                                                        colId: l,
                                                                        rowspan: 1,
                                                                        colspan: 1,
                                                                    });
                                                                o.appendChild(a), t.insertBefore(o, r);
                                                            }
                                                        });
                                                    }
                                                },
                                            },
                                            {
                                                key: 'removeCol',
                                                value: function () {
                                                    if (this.tableSelection.selectedTds.length) {
                                                        var t = this.tableSelection.selectedTds,
                                                            e = this.findTable(this.tableSelection.selectedTds[0]),
                                                            r = e.getColIds(),
                                                            n = t.reduce(
                                                                function (t, e) {
                                                                    var n = r.findIndex(function (t) {
                                                                        return t === e.colId;
                                                                    });
                                                                    return [
                                                                        Math.min(t[0], n),
                                                                        Math.max(t[1], n + e.colspan - 1),
                                                                    ];
                                                                },
                                                                [1 / 0, -1 / 0]
                                                            ),
                                                            o = O(n, 2),
                                                            i = o[0],
                                                            a = o[1];
                                                        console.log(i, a),
                                                            e.getRows().map(function (t) {
                                                                var e = 0;
                                                                t.foreachCellInner(function (t) {
                                                                    if (e > a) return !0;
                                                                    var r = t.colspan;
                                                                    e + r - 1 > a
                                                                        ? (console.log('1', a - Math.max(e, i) + 1),
                                                                          (t.colspan -= a - Math.max(e, i) + 1))
                                                                        : e < i && e + r - 1 >= i
                                                                        ? (console.log('2', e + r - i),
                                                                          (t.colspan -= e + r - i))
                                                                        : e >= i && (console.log('rmo'), t.remove()),
                                                                        (e += r);
                                                                });
                                                            });
                                                        for (
                                                            var l = e.getCols(), u = 0;
                                                            u < l.length &&
                                                            (u >= i && u <= a && l[u].remove(), !(u > a));
                                                            u++
                                                        );
                                                        e.formatTableWidth();
                                                    }
                                                },
                                            },
                                            {
                                                key: 'removeTable',
                                                value: function () {
                                                    var t = this.tableSelection.selectedTds;
                                                    t.length && this.findTable(t[0]).remove();
                                                },
                                            },
                                            {
                                                key: 'mergeCells',
                                                value: function () {
                                                    if (this.tableSelection.selectedTds.length) {
                                                        var t = this.tableSelection.selectedTds,
                                                            e = t.reduce(
                                                                function (t, e) {
                                                                    var r = e.colId;
                                                                    t[0][r] || (t[0][r] = 0), (t[0][r] += e.rowspan);
                                                                    var n = e.rowId;
                                                                    return (
                                                                        t[1][n] || (t[1][n] = 0),
                                                                        (t[1][n] += e.colspan),
                                                                        t
                                                                    );
                                                                },
                                                                [{}, {}]
                                                            ),
                                                            r = Math.max.apply(Math, N(Object.values(e[0]))),
                                                            n = Math.max.apply(Math, N(Object.values(e[1]))),
                                                            o = t[0].clone();
                                                        t[0].parent.appendChild(o), (o.colspan = n), (o.rowspan = r);
                                                        for (var i = 0; i < t.length; i++)
                                                            t[i].moveChildren(o), t[i].remove();
                                                        var a = this.findTable(t[0]);
                                                        if (
                                                            (a.getColIds().length === n && (o.rowspan = 1),
                                                            a.getRowIds().length <= r)
                                                        ) {
                                                            for (
                                                                var l = a.descendants(p.default),
                                                                    u = o.colspan - 1,
                                                                    s = null,
                                                                    c = 0;
                                                                c < l.length && !(u <= 0);
                                                                c++
                                                            )
                                                                null !== s &&
                                                                    ((l[s].width += l[c].width),
                                                                    l[c].remove(),
                                                                    (u -= 1)),
                                                                    l[c].colId === o.colId && (s = c);
                                                            o.colspan = 1;
                                                        }
                                                    }
                                                },
                                            },
                                        ]),
                                        i && S(r.prototype, i),
                                        a && S(r, a),
                                        Object.defineProperty(r, 'prototype', { writable: !1 }),
                                        c
                                    );
                                })(r.default),
                                H = (t.tableCantInsert = [m.blotName.tableCell]),
                                z = (t.isForbidInTableBlot = function (t) {
                                    return H.includes(t.statics.blotName);
                                }),
                                G = (t.isForbidInTable = function t(e) {
                                    return !(!e || !e.parent) && (!!z(e.parent) || t(e.parent));
                                });
                            (U.moduleName = 'table'),
                                (U.toolName = 'table'),
                                (F[U.toolName] = b.default),
                                (t.default = U);
                        }),
                        void 0 === (i = n.apply(e, o)) || (t.exports = i);
                },
                8838: function (t, e, r) {
                    var n, o, i;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(8903)]),
                        void 0 ===
                            (i =
                                'function' ==
                                typeof (n = function (t, e) {
                                    'use strict';
                                    function r(t) {
                                        return (
                                            (r =
                                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                                    ? function (t) {
                                                          return typeof t;
                                                      }
                                                    : function (t) {
                                                          return t &&
                                                              'function' == typeof Symbol &&
                                                              t.constructor === Symbol &&
                                                              t !== Symbol.prototype
                                                              ? 'symbol'
                                                              : typeof t;
                                                      }),
                                            r(t)
                                        );
                                    }
                                    function n(t, e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var o = e[n];
                                            (o.enumerable = o.enumerable || !1),
                                                (o.configurable = !0),
                                                'value' in o && (o.writable = !0),
                                                Object.defineProperty(
                                                    t,
                                                    ((i = o.key),
                                                    (a = void 0),
                                                    (a = (function (t, e) {
                                                        if ('object' !== r(t) || null === t) return t;
                                                        var n = t[Symbol.toPrimitive];
                                                        if (void 0 !== n) {
                                                            var o = n.call(t, e || 'default');
                                                            if ('object' !== r(o)) return o;
                                                            throw new TypeError(
                                                                '@@toPrimitive must return a primitive value.'
                                                            );
                                                        }
                                                        return ('string' === e ? String : Number)(t);
                                                    })(i, 'string')),
                                                    'symbol' === r(a) ? a : String(a)),
                                                    o
                                                );
                                        }
                                        var i, a;
                                    }
                                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                                    var o = {
                                        insertColumnLeft: {
                                            text: '在左侧插入一列',
                                            handler: function () {
                                                this.quill.getModule('table').appendCol(),
                                                    (this.quill.theme.tableToolTip.curTableId = null),
                                                    this.quill.theme.tableToolTip.hide();
                                            },
                                        },
                                        insertColumnRight: {
                                            text: '在右侧插入一列',
                                            handler: function () {
                                                this.quill.getModule('table').appendCol(!0),
                                                    (this.quill.theme.tableToolTip.curTableId = null),
                                                    this.quill.theme.tableToolTip.hide();
                                            },
                                        },
                                        insertRowTop: {
                                            text: '在上方插入一行',
                                            handler: function () {
                                                this.quill.getModule('table').appendRow();
                                            },
                                        },
                                        insertRowBottom: {
                                            text: '在下方插入一行',
                                            handler: function () {
                                                this.quill.getModule('table').appendRow(!0);
                                            },
                                        },
                                        removeCol: {
                                            text: '删除所在列',
                                            handler: function () {
                                                this.quill.getModule('table').removeCol(),
                                                    (this.quill.theme.tableToolTip.curTableId = null),
                                                    this.quill.theme.tableToolTip.hide();
                                            },
                                        },
                                        removeRow: {
                                            text: '删除所在行',
                                            handler: function () {
                                                this.quill.getModule('table').removeRow();
                                            },
                                        },
                                        removeTable: {
                                            text: '删除表格',
                                            handler: function () {
                                                this.quill.getModule('table').removeTable(),
                                                    this.quill.theme.tableToolTip.hide();
                                            },
                                        },
                                        mergeCell: {
                                            text: '合并单元格',
                                            handler: function () {
                                                this.quill.getModule('table').mergeCells(),
                                                    this.quill.theme.tableToolTip.hide(),
                                                    this.tableSelection.clearSelection();
                                            },
                                        },
                                    };
                                    t.default = (function () {
                                        function t(e, r, n) {
                                            !(function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, t);
                                            var o = r.getModule('table');
                                            (this.tableSelection = o.tableSelection),
                                                (this.table = e.table),
                                                (this.quill = r),
                                                (this.options = n),
                                                (this.menuItems = {}),
                                                this.optionsMerge(),
                                                (this.boundary = this.tableSelection.boundary),
                                                (this.selectedTds = this.tableSelection.selectedTds),
                                                (this.destroyHandler = this.destroy.bind(this)),
                                                this.menuInitial(e),
                                                this.mount(),
                                                document.addEventListener('click', this.destroyHandler, !1);
                                        }
                                        return (
                                            (r = t),
                                            (i = [
                                                {
                                                    key: 'optionsMerge',
                                                    value: function () {
                                                        var t, e, r, n;
                                                        this.options.replaceItems
                                                            ? (this.menuItems =
                                                                  null !==
                                                                      (t =
                                                                          null === (e = this.options) || void 0 === e
                                                                              ? void 0
                                                                              : e.items) && void 0 !== t
                                                                      ? t
                                                                      : {})
                                                            : (this.menuItems = Object.assign(
                                                                  {},
                                                                  o,
                                                                  null !==
                                                                      (r =
                                                                          null === (n = this.options) || void 0 === n
                                                                              ? void 0
                                                                              : n.items) && void 0 !== r
                                                                      ? r
                                                                      : {}
                                                              ));
                                                    },
                                                },
                                                {
                                                    key: 'mount',
                                                    value: function () {
                                                        document.body.appendChild(this.domNode);
                                                    },
                                                },
                                                {
                                                    key: 'menuInitial',
                                                    value: function (t) {
                                                        t.table, t.row, t.cell;
                                                        var r = t.left,
                                                            n = t.top;
                                                        (this.domNode = document.createElement('div')),
                                                            this.domNode.classList.add('ql-table-operation-menu');
                                                        var i,
                                                            a,
                                                            l,
                                                            u = {
                                                                position: 'absolute',
                                                                'min-height': ''.concat(150, 'px'),
                                                                width: ''.concat(200, 'px'),
                                                            },
                                                            s = window,
                                                            c = s.innerWidth,
                                                            f = s.innerHeight;
                                                        for (var p in (r > c - 200
                                                            ? (u.right = ''.concat(c - r, 'px'))
                                                            : (u.left = ''.concat(r, 'px')),
                                                        n > f - 150
                                                            ? (u.bottom = ''.concat(f - n, 'px'))
                                                            : (u.top = ''.concat(n, 'px')),
                                                        (0, e.css)(this.domNode, u),
                                                        this.menuItems))
                                                            this.menuItems[p] &&
                                                                (this.menuItems[p].subTitle &&
                                                                    this.domNode.appendChild(
                                                                        ((a = this.menuItems[p].subTitle),
                                                                        (l = void 0),
                                                                        (l =
                                                                            document.createElement(
                                                                                'div'
                                                                            )).classList.add(
                                                                            'ql-table-operation-menu-subtitle'
                                                                        ),
                                                                        (l.innerText = a),
                                                                        l)
                                                                    ),
                                                                this.domNode.appendChild(
                                                                    this.menuItemCreator(
                                                                        Object.assign({}, o[p], this.menuItems[p])
                                                                    )
                                                                ),
                                                                ([
                                                                    'insertRowBottom',
                                                                    'removeTable',
                                                                    'mergeCell',
                                                                ].indexOf(p) > -1 ||
                                                                    this.menuItems[p].groupEnd) &&
                                                                    this.domNode.appendChild(
                                                                        ((i = void 0),
                                                                        (i =
                                                                            document.createElement(
                                                                                'div'
                                                                            )).classList.add(
                                                                            'ql-table-operation-menu-dividing'
                                                                        ),
                                                                        i)
                                                                    ));
                                                    },
                                                },
                                                {
                                                    key: 'destroy',
                                                    value: function () {
                                                        return (
                                                            this.domNode.remove(),
                                                            document.removeEventListener(
                                                                'click',
                                                                this.destroyHandler,
                                                                !1
                                                            ),
                                                            null
                                                        );
                                                    },
                                                },
                                                {
                                                    key: 'menuItemCreator',
                                                    value: function (t) {
                                                        var e = t.text,
                                                            r = t.iconSrc,
                                                            n = t.handler,
                                                            o = document.createElement('div');
                                                        if ((o.classList.add('ql-table-operation-menu-item'), r)) {
                                                            var i = document.createElement('span');
                                                            i.classList.add('ql-table-operation-menu-icon'),
                                                                (i.innerHTML = r),
                                                                o.appendChild(i);
                                                        }
                                                        var a = document.createElement('span');
                                                        return (
                                                            a.classList.add('ql-table-operation-menu-text'),
                                                            (a.innerText = e),
                                                            o.appendChild(a),
                                                            o.addEventListener('click', n.bind(this), !1),
                                                            o
                                                        );
                                                    },
                                                },
                                            ]) && n(r.prototype, i),
                                            a && n(r, a),
                                            Object.defineProperty(r, 'prototype', { writable: !1 }),
                                            t
                                        );
                                        var r, i, a;
                                    })();
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = i);
                },
                6318: function (t, e, r) {
                    var n, o, i;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(7436), r(7014), r(8903), r(3684)]),
                        void 0 ===
                            (i =
                                'function' ==
                                typeof (n = function (t, e, r, n, o) {
                                    'use strict';
                                    function i(t) {
                                        return t && t.__esModule ? t : { default: t };
                                    }
                                    function a(t) {
                                        return (
                                            (a =
                                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                                    ? function (t) {
                                                          return typeof t;
                                                      }
                                                    : function (t) {
                                                          return t &&
                                                              'function' == typeof Symbol &&
                                                              t.constructor === Symbol &&
                                                              t !== Symbol.prototype
                                                              ? 'symbol'
                                                              : typeof t;
                                                      }),
                                            a(t)
                                        );
                                    }
                                    function l(t, e) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return t;
                                            })(t) ||
                                            (function (t, e) {
                                                var r =
                                                    null == t
                                                        ? null
                                                        : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                                                          t['@@iterator'];
                                                if (null != r) {
                                                    var n,
                                                        o,
                                                        i,
                                                        a,
                                                        l = [],
                                                        u = !0,
                                                        s = !1;
                                                    try {
                                                        if (((i = (r = r.call(t)).next), 0 === e)) {
                                                            if (Object(r) !== r) return;
                                                            u = !1;
                                                        } else
                                                            for (
                                                                ;
                                                                !(u = (n = i.call(r)).done) &&
                                                                (l.push(n.value), l.length !== e);
                                                                u = !0
                                                            );
                                                    } catch (t) {
                                                        (s = !0), (o = t);
                                                    } finally {
                                                        try {
                                                            if (
                                                                !u &&
                                                                null != r.return &&
                                                                ((a = r.return()), Object(a) !== a)
                                                            )
                                                                return;
                                                        } finally {
                                                            if (s) throw o;
                                                        }
                                                    }
                                                    return l;
                                                }
                                            })(t, e) ||
                                            (function (t, e) {
                                                if (t) {
                                                    if ('string' == typeof t) return u(t, e);
                                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                                    return (
                                                        'Object' === r && t.constructor && (r = t.constructor.name),
                                                        'Map' === r || 'Set' === r
                                                            ? Array.from(t)
                                                            : 'Arguments' === r ||
                                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                            ? u(t, e)
                                                            : void 0
                                                    );
                                                }
                                            })(t, e) ||
                                            (function () {
                                                throw new TypeError(
                                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                );
                                            })()
                                        );
                                    }
                                    function u(t, e) {
                                        (null == e || e > t.length) && (e = t.length);
                                        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                                        return n;
                                    }
                                    function s(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            (n.enumerable = n.enumerable || !1),
                                                (n.configurable = !0),
                                                'value' in n && (n.writable = !0),
                                                Object.defineProperty(
                                                    t,
                                                    ((o = n.key),
                                                    (i = void 0),
                                                    (i = (function (t, e) {
                                                        if ('object' !== a(t) || null === t) return t;
                                                        var r = t[Symbol.toPrimitive];
                                                        if (void 0 !== r) {
                                                            var n = r.call(t, e || 'default');
                                                            if ('object' !== a(n)) return n;
                                                            throw new TypeError(
                                                                '@@toPrimitive must return a primitive value.'
                                                            );
                                                        }
                                                        return ('string' === e ? String : Number)(t);
                                                    })(o, 'string')),
                                                    'symbol' === a(i) ? i : String(i)),
                                                    n
                                                );
                                        }
                                        var o, i;
                                    }
                                    Object.defineProperty(t, '__esModule', { value: !0 }),
                                        (t.default = void 0),
                                        (e = i(e)),
                                        (r = i(r)),
                                        (o = i(o));
                                    var c = '#0589f3';
                                    t.default = (function () {
                                        function t(e, r, n) {
                                            if (
                                                ((function (t, e) {
                                                    if (!(t instanceof e))
                                                        throw new TypeError('Cannot call a class as a function');
                                                })(this, t),
                                                !e)
                                            )
                                                return null;
                                            (this.table = e),
                                                (this.quill = r),
                                                (this.options = n),
                                                this.optionsMerge(),
                                                (this.boundary = {}),
                                                (this.selectedTds = []),
                                                (this.dragging = !1),
                                                (this.selectingHandler = this.mouseDownHandler.bind(this)),
                                                (this.clearSelectionHandler = this.clearSelection.bind(this)),
                                                (this.cellSelect = null),
                                                (this.scrollHandler = []),
                                                this.helpLinesInitial(),
                                                this.quill.root.addEventListener(
                                                    'mousedown',
                                                    this.selectingHandler,
                                                    !1
                                                ),
                                                this.quill.on('text-change', this.clearSelectionHandler);
                                        }
                                        return (
                                            (i = t),
                                            (a = [
                                                {
                                                    key: 'optionsMerge',
                                                    value: function () {
                                                        var t;
                                                        (null === (t = this.options) || void 0 === t
                                                            ? void 0
                                                            : t.primaryColor) && (c = this.options.primaryColor);
                                                    },
                                                },
                                                {
                                                    key: 'addScrollEvent',
                                                    value: function (t, e) {
                                                        t.addEventListener('scroll', e),
                                                            this.scrollHandler.push([t, e]);
                                                    },
                                                },
                                                {
                                                    key: 'clearScrollEvent',
                                                    value: function () {
                                                        for (var t = 0; t < this.scrollHandler.length; t++) {
                                                            var e = l(this.scrollHandler[t], 2),
                                                                r = e[0],
                                                                n = e[1];
                                                            r.removeEventListener('scroll', n);
                                                        }
                                                        this.scrollHandler = [];
                                                    },
                                                },
                                                {
                                                    key: 'helpLinesInitial',
                                                    value: function () {
                                                        var t = this.quill.root.parentNode;
                                                        (this.cellSelect = document.createElement('div')),
                                                            this.cellSelect.classList.add('ql-table-selection_line'),
                                                            (0, n.css)(this.cellSelect, { 'border-color': c }),
                                                            t.appendChild(this.cellSelect);
                                                    },
                                                },
                                                {
                                                    key: 'mouseDownHandler',
                                                    value: function (t) {
                                                        var e = this;
                                                        if (0 === t.button && t.target.closest('.ql-table')) {
                                                            var r = t.target.closest('.ql-table').dataset.tableId,
                                                                o = function (t) {
                                                                    if (
                                                                        0 === t.button &&
                                                                        t.target.closest('.ql-table') &&
                                                                        t.target.closest('.ql-table').dataset
                                                                            .tableId === r
                                                                    ) {
                                                                        var o = t.target.closest('td[data-row-id]'),
                                                                            l = (0, n.getRelativeRect)(
                                                                                o.getBoundingClientRect(),
                                                                                e.quill.root.parentNode
                                                                            );
                                                                        (e.boundary = (0, n.computeBoundaryFromRects)(
                                                                            a,
                                                                            l
                                                                        )),
                                                                            e.correctBoundary(),
                                                                            (e.selectedTds = e.computeSelectedTds()),
                                                                            e.repositionHelpLines(),
                                                                            i !== o && e.quill.blur();
                                                                    }
                                                                };
                                                            document.body.addEventListener('mousemove', o, !1),
                                                                document.body.addEventListener(
                                                                    'mouseup',
                                                                    function t(r) {
                                                                        document.body.removeEventListener(
                                                                            'mousemove',
                                                                            o,
                                                                            !1
                                                                        ),
                                                                            document.body.removeEventListener(
                                                                                'mouseup',
                                                                                t,
                                                                                !1
                                                                            ),
                                                                            (e.dragging = !1);
                                                                    },
                                                                    !1
                                                                );
                                                            var i = t.target.closest('td[data-row-id]'),
                                                                a = (0, n.getRelativeRect)(
                                                                    i.getBoundingClientRect(),
                                                                    this.quill.root.parentNode
                                                                );
                                                            (this.dragging = !0),
                                                                (this.boundary = (0, n.computeBoundaryFromRects)(a, a)),
                                                                this.correctBoundary(),
                                                                (this.selectedTds = this.computeSelectedTds()),
                                                                this.repositionHelpLines(),
                                                                this.addScrollEvent(this.table.parentNode, function () {
                                                                    e.repositionHelpLines();
                                                                });
                                                        }
                                                    },
                                                },
                                                {
                                                    key: 'computeSelectedTds',
                                                    value: function () {
                                                        var t = this;
                                                        return e.default
                                                            .find(this.table)
                                                            .descendants(o.default)
                                                            .reduce(function (e, r) {
                                                                var o = (0, n.getRelativeRect)(
                                                                        r.domNode.getBoundingClientRect(),
                                                                        t.quill.root.parentNode
                                                                    ),
                                                                    i = o.x,
                                                                    a = o.y,
                                                                    l = o.width,
                                                                    u = o.height;
                                                                return (
                                                                    i + 2 >= t.boundary.x &&
                                                                        i - 2 + l <= t.boundary.x1 &&
                                                                        a + 2 >= t.boundary.y &&
                                                                        a - 2 + u <= t.boundary.y1 &&
                                                                        e.push(r),
                                                                    e
                                                                );
                                                            }, []);
                                                    },
                                                },
                                                {
                                                    key: 'correctBoundary',
                                                    value: function () {
                                                        var t = this;
                                                        e.default
                                                            .find(this.table)
                                                            .descendants(r.default)
                                                            .forEach(function (e) {
                                                                var r = (0, n.getRelativeRect)(
                                                                        e.domNode.getBoundingClientRect(),
                                                                        t.quill.root.parentNode
                                                                    ),
                                                                    o = r.x,
                                                                    i = r.y,
                                                                    a = r.width,
                                                                    l = r.height;
                                                                ((o + 2 >= t.boundary.x && o + 2 <= t.boundary.x1) ||
                                                                    (o - 2 + a >= t.boundary.x &&
                                                                        o - 2 + a <= t.boundary.x1)) &&
                                                                    ((i + 2 >= t.boundary.y &&
                                                                        i + 2 <= t.boundary.y1) ||
                                                                        (i - 2 + l >= t.boundary.y &&
                                                                            i - 2 + l <= t.boundary.y1)) &&
                                                                    (t.boundary = (0, n.computeBoundaryFromRects)(
                                                                        t.boundary,
                                                                        { x: o, y: i, width: a, height: l }
                                                                    ));
                                                            }),
                                                            (this.scrollX = this.table.parentNode.scrollLeft);
                                                    },
                                                },
                                                {
                                                    key: 'repositionHelpLines',
                                                    value: function () {
                                                        var t = this.table.parentNode.scrollLeft,
                                                            e = this.quill.root.parentNode.scrollTop;
                                                        (0, n.css)(this.cellSelect, {
                                                            display: 'block',
                                                            left: ''.concat(
                                                                this.boundary.x + (this.scrollX - t) - 1,
                                                                'px'
                                                            ),
                                                            top: ''.concat(2 * e + this.boundary.y, 'px'),
                                                            width: ''.concat(this.boundary.width + 1, 'px'),
                                                            height: ''.concat(this.boundary.height + 1, 'px'),
                                                        });
                                                    },
                                                },
                                                {
                                                    key: 'clearSelection',
                                                    value: function () {
                                                        (this.boundary = {}),
                                                            (this.selectedTds = []),
                                                            (0, n.css)(this.cellSelect, { display: 'none' }),
                                                            this.clearScrollEvent();
                                                    },
                                                },
                                                {
                                                    key: 'destroy',
                                                    value: function () {
                                                        return (
                                                            this.cellSelect.remove(),
                                                            (this.cellSelect = null),
                                                            this.clearScrollEvent(),
                                                            this.quill.root.removeEventListener(
                                                                'mousedown',
                                                                this.selectingHandler,
                                                                !1
                                                            ),
                                                            this.quill.off('text-change', this.clearSelectionHandler),
                                                            null
                                                        );
                                                    },
                                                },
                                            ]) && s(i.prototype, a),
                                            u && s(i, u),
                                            Object.defineProperty(i, 'prototype', { writable: !1 }),
                                            t
                                        );
                                        var i, a, u;
                                    })();
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = i);
                },
                863: function (t, e, r) {
                    var n, o, i;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (o = [e, r(835), r(7514), r(1520), r(8903), r(4257)]),
                        void 0 ===
                            (i =
                                'function' ==
                                typeof (n = function (t, e, r, n, o, i) {
                                    'use strict';
                                    function a(t) {
                                        return t && t.__esModule ? t : { default: t };
                                    }
                                    function l(t) {
                                        return (
                                            (l =
                                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                                    ? function (t) {
                                                          return typeof t;
                                                      }
                                                    : function (t) {
                                                          return t &&
                                                              'function' == typeof Symbol &&
                                                              t.constructor === Symbol &&
                                                              t !== Symbol.prototype
                                                              ? 'symbol'
                                                              : typeof t;
                                                      }),
                                            l(t)
                                        );
                                    }
                                    function u(t, e) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return t;
                                            })(t) ||
                                            (function (t, e) {
                                                var r =
                                                    null == t
                                                        ? null
                                                        : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                                                          t['@@iterator'];
                                                if (null != r) {
                                                    var n,
                                                        o,
                                                        i,
                                                        a,
                                                        l = [],
                                                        u = !0,
                                                        s = !1;
                                                    try {
                                                        if (((i = (r = r.call(t)).next), 0 === e)) {
                                                            if (Object(r) !== r) return;
                                                            u = !1;
                                                        } else
                                                            for (
                                                                ;
                                                                !(u = (n = i.call(r)).done) &&
                                                                (l.push(n.value), l.length !== e);
                                                                u = !0
                                                            );
                                                    } catch (t) {
                                                        (s = !0), (o = t);
                                                    } finally {
                                                        try {
                                                            if (
                                                                !u &&
                                                                null != r.return &&
                                                                ((a = r.return()), Object(a) !== a)
                                                            )
                                                                return;
                                                        } finally {
                                                            if (s) throw o;
                                                        }
                                                    }
                                                    return l;
                                                }
                                            })(t, e) ||
                                            c(t, e) ||
                                            (function () {
                                                throw new TypeError(
                                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                );
                                            })()
                                        );
                                    }
                                    function s(t) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return f(t);
                                            })(t) ||
                                            (function (t) {
                                                if (
                                                    ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                                                    null != t['@@iterator']
                                                )
                                                    return Array.from(t);
                                            })(t) ||
                                            c(t) ||
                                            (function () {
                                                throw new TypeError(
                                                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                );
                                            })()
                                        );
                                    }
                                    function c(t, e) {
                                        if (t) {
                                            if ('string' == typeof t) return f(t, e);
                                            var r = Object.prototype.toString.call(t).slice(8, -1);
                                            return (
                                                'Object' === r && t.constructor && (r = t.constructor.name),
                                                'Map' === r || 'Set' === r
                                                    ? Array.from(t)
                                                    : 'Arguments' === r ||
                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                    ? f(t, e)
                                                    : void 0
                                            );
                                        }
                                    }
                                    function f(t, e) {
                                        (null == e || e > t.length) && (e = t.length);
                                        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                                        return n;
                                    }
                                    function p(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            (n.enumerable = n.enumerable || !1),
                                                (n.configurable = !0),
                                                'value' in n && (n.writable = !0),
                                                Object.defineProperty(
                                                    t,
                                                    ((o = n.key),
                                                    (i = void 0),
                                                    (i = (function (t, e) {
                                                        if ('object' !== l(t) || null === t) return t;
                                                        var r = t[Symbol.toPrimitive];
                                                        if (void 0 !== r) {
                                                            var n = r.call(t, e || 'default');
                                                            if ('object' !== l(n)) return n;
                                                            throw new TypeError(
                                                                '@@toPrimitive must return a primitive value.'
                                                            );
                                                        }
                                                        return ('string' === e ? String : Number)(t);
                                                    })(o, 'string')),
                                                    'symbol' === l(i) ? i : String(i)),
                                                    n
                                                );
                                        }
                                        var o, i;
                                    }
                                    Object.defineProperty(t, '__esModule', { value: !0 }),
                                        (t.default = void 0),
                                        (e = a(e)),
                                        (n = a(n));
                                    var d = 12;
                                    (t.default = (function () {
                                        function t(e, r) {
                                            var n = this;
                                            (function (t, e) {
                                                if (!(t instanceof e))
                                                    throw new TypeError('Cannot call a class as a function');
                                            })(this, t),
                                                (this.quill = e),
                                                (this.options = r),
                                                this.optionsMerge(),
                                                (this.boundsContainer = document.body),
                                                (this.tableWrapper = null),
                                                (this.table = null),
                                                (this.curTableId = ''),
                                                (this.focusTableChange = !1),
                                                (this.tableCols = []),
                                                (this.scrollHandler = []),
                                                (this.tableDisableToolHandlers = {}),
                                                (this.root = e.addContainer('ql-table-tooltip')),
                                                (this.root.style.height = d + 'px'),
                                                new ResizeObserver(function (t) {
                                                    n.hide(), (n.curTableId = '');
                                                }).observe(this.quill.root),
                                                this.hide(),
                                                this.listen();
                                        }
                                        return (
                                            (a = t),
                                            (l = [
                                                {
                                                    key: 'optionsMerge',
                                                    value: function () {
                                                        var e, r;
                                                        (null === (e = this.options) || void 0 === e
                                                            ? void 0
                                                            : e.tipHeight) && (d = this.options.tipHeight),
                                                            (t.disableToolNames = Array.from(
                                                                new Set(
                                                                    [].concat(
                                                                        s(t.disableToolNames),
                                                                        s(
                                                                            (null === (r = this.options) || void 0 === r
                                                                                ? void 0
                                                                                : r.disableToolNames) || []
                                                                        )
                                                                    )
                                                                )
                                                            ));
                                                    },
                                                },
                                                {
                                                    key: 'listen',
                                                    value: function () {
                                                        var t = this;
                                                        this.quill.on(
                                                            e.default.events.SELECTION_CHANGE,
                                                            function (e, o, a) {
                                                                if (null != e) {
                                                                    if (0 === e.length) {
                                                                        var l = u(
                                                                                t.quill.scroll.descendant(
                                                                                    n.default,
                                                                                    e.index
                                                                                ),
                                                                                2
                                                                            ),
                                                                            s = l[0],
                                                                            c = l[1];
                                                                        if (null !== s) {
                                                                            var f;
                                                                            t.disableFromTable(),
                                                                                (t.tableWrapper = s),
                                                                                (t.table = s.children.head);
                                                                            for (
                                                                                var p = s.children.tail;
                                                                                p &&
                                                                                p.statics.blotName !==
                                                                                    i.blotName.tableBody;

                                                                            ) {
                                                                                var d;
                                                                                p =
                                                                                    null === (d = p.children) ||
                                                                                    void 0 === d
                                                                                        ? void 0
                                                                                        : d.tail;
                                                                            }
                                                                            var h =
                                                                                null === (f = s.children.head) ||
                                                                                void 0 === f ||
                                                                                null === (f = f.children) ||
                                                                                void 0 === f
                                                                                    ? void 0
                                                                                    : f.head;
                                                                            h.statics.blotName ===
                                                                                i.blotName.tableColGroup &&
                                                                            h.children.length
                                                                                ? (t.tableCols = h.children.map(
                                                                                      function (t) {
                                                                                          return t;
                                                                                      }
                                                                                  ))
                                                                                : (t.tableCols = []);
                                                                            var y = s.children.head.tableId;
                                                                            return (
                                                                                t.curTableId !== y &&
                                                                                    (t.clearScrollEvent(),
                                                                                    (t.focusTableChange = !0),
                                                                                    t.addScrollEvent(
                                                                                        t.tableWrapper.domNode,
                                                                                        t.scrollSync.bind(
                                                                                            t,
                                                                                            t.tableWrapper.domNode
                                                                                        )
                                                                                    )),
                                                                                (t.curTableId = y),
                                                                                (t.tableRange = new r.Range(
                                                                                    e.index - c,
                                                                                    s.length()
                                                                                )),
                                                                                t.show(),
                                                                                void t.position(
                                                                                    t.quill.getBounds(t.tableRange)
                                                                                )
                                                                            );
                                                                        }
                                                                        delete t.tableRange;
                                                                    }
                                                                    t.hide();
                                                                }
                                                            }
                                                        );
                                                    },
                                                },
                                                {
                                                    key: 'disableFromTable',
                                                    value: function () {
                                                        this.toggleDisableToolbarTools('add');
                                                        var e = this.quill.getModule('toolbar');
                                                        if (!e.disableByTable) {
                                                            e.disableByTable = !0;
                                                            var r,
                                                                n = (function (t, e) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            t[Symbol.iterator]) ||
                                                                        t['@@iterator'];
                                                                    if (!r) {
                                                                        if (
                                                                            Array.isArray(t) ||
                                                                            (r = c(t)) ||
                                                                            (e && t && 'number' == typeof t.length)
                                                                        ) {
                                                                            r && (t = r);
                                                                            var n = 0,
                                                                                o = function () {};
                                                                            return {
                                                                                s: o,
                                                                                n: function () {
                                                                                    return n >= t.length
                                                                                        ? { done: !0 }
                                                                                        : { done: !1, value: t[n++] };
                                                                                },
                                                                                e: function (t) {
                                                                                    throw t;
                                                                                },
                                                                                f: o,
                                                                            };
                                                                        }
                                                                        throw new TypeError(
                                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                                        );
                                                                    }
                                                                    var i,
                                                                        a = !0,
                                                                        l = !1;
                                                                    return {
                                                                        s: function () {
                                                                            r = r.call(t);
                                                                        },
                                                                        n: function () {
                                                                            var t = r.next();
                                                                            return (a = t.done), t;
                                                                        },
                                                                        e: function (t) {
                                                                            (l = !0), (i = t);
                                                                        },
                                                                        f: function () {
                                                                            try {
                                                                                a || null == r.return || r.return();
                                                                            } finally {
                                                                                if (l) throw i;
                                                                            }
                                                                        },
                                                                    };
                                                                })(t.disableToolNames);
                                                            try {
                                                                for (n.s(); !(r = n.n()).done; ) {
                                                                    var o = r.value;
                                                                    (this.tableDisableToolHandlers[o] = e.handlers[o]),
                                                                        (e.handlers[o] = function () {});
                                                                }
                                                            } catch (t) {
                                                                n.e(t);
                                                            } finally {
                                                                n.f();
                                                            }
                                                        }
                                                    },
                                                },
                                                {
                                                    key: 'enableFromTable',
                                                    value: function () {
                                                        this.toggleDisableToolbarTools('remove');
                                                        var t = this.quill.getModule('toolbar');
                                                        for (var e in this.tableDisableToolHandlers)
                                                            t.handlers[e] = this.tableDisableToolHandlers[e];
                                                        (this.tableDisableToolHandlers = {}), (t.disableByTable = !1);
                                                    },
                                                },
                                                {
                                                    key: 'toggleDisableToolbarTools',
                                                    value: function (e) {
                                                        this.quill.getModule('toolbar').controls.map(function (r) {
                                                            var n = u(r, 2),
                                                                o = n[0],
                                                                i = n[1];
                                                            t.disableToolNames.includes(o) &&
                                                                ('select' === i.tagName.toLowerCase()
                                                                    ? document
                                                                          .querySelector(
                                                                              '.ql-select.'.concat(i.className)
                                                                          )
                                                                          .classList[e]('ql-disabled-table')
                                                                    : i.classList[e]('ql-disabled-table'));
                                                        });
                                                    },
                                                },
                                                {
                                                    key: 'scrollSync',
                                                    value: function (t, e) {
                                                        this.root.scrollLeft = t.scrollLeft;
                                                    },
                                                },
                                                {
                                                    key: 'addScrollEvent',
                                                    value: function (t, e) {
                                                        t.addEventListener('scroll', e),
                                                            this.scrollHandler.push([t, e]);
                                                    },
                                                },
                                                {
                                                    key: 'clearScrollEvent',
                                                    value: function () {
                                                        for (var t = 0; t < this.scrollHandler.length; t++) {
                                                            var e = u(this.scrollHandler[t], 2),
                                                                r = e[0],
                                                                n = e[1];
                                                            r.removeEventListener('scroll', n);
                                                        }
                                                        this.scrollHandler = [];
                                                    },
                                                },
                                                {
                                                    key: 'position',
                                                    value: function (t) {
                                                        (0, o.css)(this.root, {
                                                            top: ''.concat(
                                                                t.top + this.quill.container.scrollTop - d,
                                                                'px'
                                                            ),
                                                            left: ''.concat(16, 'px'),
                                                        });
                                                    },
                                                },
                                                {
                                                    key: 'show',
                                                    value: function () {
                                                        var t = this;
                                                        if (this.tableCols.length) {
                                                            if (this.focusTableChange) {
                                                                var e =
                                                                    this.tableWrapper.domNode.getBoundingClientRect();
                                                                (this.root.dataset.tableId = this.tableWrapper.tableId),
                                                                    (this.root.innerHTML = s(this.tableCols)
                                                                        .map(function (t) {
                                                                            return '<div class="ql-table-col-header" style="width: '
                                                                                .concat(
                                                                                    t.width,
                                                                                    'px">\n            \t\t\t<div class="ql-table-col-separator" style="height: '
                                                                                )
                                                                                .concat(
                                                                                    e.height + d - 3,
                                                                                    'px"></div>\n            \t\t</div>'
                                                                                );
                                                                        })
                                                                        .join('')),
                                                                    (this.focusTableChange = !1),
                                                                    this.bindDrag();
                                                            }
                                                            setTimeout(function () {
                                                                t.scrollSync(t.tableWrapper.domNode);
                                                            }, 0),
                                                                this.root.classList.remove('ql-hidden');
                                                        }
                                                    },
                                                },
                                                {
                                                    key: 'hide',
                                                    value: function () {
                                                        this.root.classList.add('ql-hidden'), this.enableFromTable();
                                                    },
                                                },
                                                {
                                                    key: 'bindDrag',
                                                    value: function () {
                                                        var t = this,
                                                            e = null,
                                                            r = -1,
                                                            n = Array.from(
                                                                this.root.getElementsByClassName('ql-table-col-header')
                                                            ),
                                                            i = Array.from(
                                                                this.root.getElementsByClassName(
                                                                    'ql-table-col-separator'
                                                                )
                                                            ),
                                                            a = function (t) {
                                                                var o = n[r].getBoundingClientRect(),
                                                                    i = t.pageX;
                                                                t.pageX - o.left < 26 && (i = o.left + 26),
                                                                    (i = Math.floor(i)),
                                                                    (e.style.left = i + 'px'),
                                                                    (e.dataset.w = i - o.left);
                                                            },
                                                            l = function o(i) {
                                                                var l = parseInt(e.dataset.w);
                                                                (t.table.domNode.style.width =
                                                                    parseFloat(t.table.domNode.style.width) -
                                                                    parseFloat(n[r].style.width) +
                                                                    l +
                                                                    'px'),
                                                                    (n[r].style.width = l + 'px'),
                                                                    (t.tableCols[r].width = l),
                                                                    document.body.removeChild(e),
                                                                    (e = null),
                                                                    (r = -1),
                                                                    document.removeEventListener('mouseup', o),
                                                                    document.removeEventListener('mousemove', a);
                                                            },
                                                            u = function (n, i) {
                                                                document.addEventListener('mouseup', l),
                                                                    document.addEventListener('mousemove', a),
                                                                    (r = n);
                                                                var u = t.tableWrapper.domNode.getBoundingClientRect(),
                                                                    s = document.createElement('div');
                                                                s.classList.add('ql-table-drag-line'),
                                                                    (0, o.css)(s, {
                                                                        top: ''.concat(u.y - d, 'px'),
                                                                        left: ''.concat(i.pageX, 'px'),
                                                                        height: ''.concat(u.height + d, 'px'),
                                                                    }),
                                                                    document.body.appendChild(s),
                                                                    e && document.body.removeChild(e),
                                                                    (e = s);
                                                            };
                                                        i.map(function (e, r) {
                                                            e.addEventListener('mousedown', u.bind(t, r)),
                                                                e.addEventListener('dragstart', function (t) {
                                                                    t.preventDefault();
                                                                });
                                                        });
                                                    },
                                                },
                                            ]) && p(a.prototype, l),
                                            f && p(a, f),
                                            Object.defineProperty(a, 'prototype', { writable: !1 }),
                                            t
                                        );
                                        var a, l, f;
                                    })()).disableToolNames = ['table'];
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = i);
                },
                8903: function (t, e) {
                    var r, n;
                    'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
                        (r = function (t) {
                            'use strict';
                            function e(t) {
                                return (
                                    (e =
                                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                            ? function (t) {
                                                  return typeof t;
                                              }
                                            : function (t) {
                                                  return t &&
                                                      'function' == typeof Symbol &&
                                                      t.constructor === Symbol &&
                                                      t !== Symbol.prototype
                                                      ? 'symbol'
                                                      : typeof t;
                                              }),
                                    e(t)
                                );
                            }
                            function r() {
                                r = function () {
                                    return n;
                                };
                                var t,
                                    n = {},
                                    o = Object.prototype,
                                    i = o.hasOwnProperty,
                                    a =
                                        Object.defineProperty ||
                                        function (t, e, r) {
                                            t[e] = r.value;
                                        },
                                    l = 'function' == typeof Symbol ? Symbol : {},
                                    u = l.iterator || '@@iterator',
                                    s = l.asyncIterator || '@@asyncIterator',
                                    c = l.toStringTag || '@@toStringTag';
                                function f(t, e, r) {
                                    return (
                                        Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        }),
                                        t[e]
                                    );
                                }
                                try {
                                    f({}, '');
                                } catch (t) {
                                    f = function (t, e, r) {
                                        return (t[e] = r);
                                    };
                                }
                                function p(t, e, r, n) {
                                    var o = e && e.prototype instanceof g ? e : g,
                                        i = Object.create(o.prototype),
                                        l = new C(n || []);
                                    return a(i, '_invoke', { value: S(t, r, l) }), i;
                                }
                                function d(t, e, r) {
                                    try {
                                        return { type: 'normal', arg: t.call(e, r) };
                                    } catch (t) {
                                        return { type: 'throw', arg: t };
                                    }
                                }
                                n.wrap = p;
                                var h = 'suspendedStart',
                                    y = 'suspendedYield',
                                    b = 'executing',
                                    m = 'completed',
                                    v = {};
                                function g() {}
                                function w() {}
                                function O() {}
                                var N = {};
                                f(N, u, function () {
                                    return this;
                                });
                                var _ = Object.getPrototypeOf,
                                    x = _ && _(_(L([])));
                                x && x !== o && i.call(x, u) && (N = x);
                                var j = (O.prototype = g.prototype = Object.create(N));
                                function E(t) {
                                    ['next', 'throw', 'return'].forEach(function (e) {
                                        f(t, e, function (t) {
                                            return this._invoke(e, t);
                                        });
                                    });
                                }
                                function T(t, r) {
                                    function n(o, a, l, u) {
                                        var s = d(t[o], t, a);
                                        if ('throw' !== s.type) {
                                            var c = s.arg,
                                                f = c.value;
                                            return f && 'object' == e(f) && i.call(f, '__await')
                                                ? r.resolve(f.__await).then(
                                                      function (t) {
                                                          n('next', t, l, u);
                                                      },
                                                      function (t) {
                                                          n('throw', t, l, u);
                                                      }
                                                  )
                                                : r.resolve(f).then(
                                                      function (t) {
                                                          (c.value = t), l(c);
                                                      },
                                                      function (t) {
                                                          return n('throw', t, l, u);
                                                      }
                                                  );
                                        }
                                        u(s.arg);
                                    }
                                    var o;
                                    a(this, '_invoke', {
                                        value: function (t, e) {
                                            function i() {
                                                return new r(function (r, o) {
                                                    n(t, e, r, o);
                                                });
                                            }
                                            return (o = o ? o.then(i, i) : i());
                                        },
                                    });
                                }
                                function S(e, r, n) {
                                    var o = h;
                                    return function (i, a) {
                                        if (o === b) throw new Error('Generator is already running');
                                        if (o === m) {
                                            if ('throw' === i) throw a;
                                            return { value: t, done: !0 };
                                        }
                                        for (n.method = i, n.arg = a; ; ) {
                                            var l = n.delegate;
                                            if (l) {
                                                var u = P(l, n);
                                                if (u) {
                                                    if (u === v) continue;
                                                    return u;
                                                }
                                            }
                                            if ('next' === n.method) n.sent = n._sent = n.arg;
                                            else if ('throw' === n.method) {
                                                if (o === h) throw ((o = m), n.arg);
                                                n.dispatchException(n.arg);
                                            } else 'return' === n.method && n.abrupt('return', n.arg);
                                            o = b;
                                            var s = d(e, r, n);
                                            if ('normal' === s.type) {
                                                if (((o = n.done ? m : y), s.arg === v)) continue;
                                                return { value: s.arg, done: n.done };
                                            }
                                            'throw' === s.type && ((o = m), (n.method = 'throw'), (n.arg = s.arg));
                                        }
                                    };
                                }
                                function P(e, r) {
                                    var n = r.method,
                                        o = e.iterator[n];
                                    if (o === t)
                                        return (
                                            (r.delegate = null),
                                            ('throw' === n &&
                                                e.iterator.return &&
                                                ((r.method = 'return'), (r.arg = t), P(e, r), 'throw' === r.method)) ||
                                                ('return' !== n &&
                                                    ((r.method = 'throw'),
                                                    (r.arg = new TypeError(
                                                        "The iterator does not provide a '" + n + "' method"
                                                    )))),
                                            v
                                        );
                                    var i = d(o, e.iterator, r.arg);
                                    if ('throw' === i.type)
                                        return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v;
                                    var a = i.arg;
                                    return a
                                        ? a.done
                                            ? ((r[e.resultName] = a.value),
                                              (r.next = e.nextLoc),
                                              'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                                              (r.delegate = null),
                                              v)
                                            : a
                                        : ((r.method = 'throw'),
                                          (r.arg = new TypeError('iterator result is not an object')),
                                          (r.delegate = null),
                                          v);
                                }
                                function A(t) {
                                    var e = { tryLoc: t[0] };
                                    1 in t && (e.catchLoc = t[1]),
                                        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                                        this.tryEntries.push(e);
                                }
                                function I(t) {
                                    var e = t.completion || {};
                                    (e.type = 'normal'), delete e.arg, (t.completion = e);
                                }
                                function C(t) {
                                    (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(A, this), this.reset(!0);
                                }
                                function L(r) {
                                    if (r || '' === r) {
                                        var n = r[u];
                                        if (n) return n.call(r);
                                        if ('function' == typeof r.next) return r;
                                        if (!isNaN(r.length)) {
                                            var o = -1,
                                                a = function e() {
                                                    for (; ++o < r.length; )
                                                        if (i.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
                                                    return (e.value = t), (e.done = !0), e;
                                                };
                                            return (a.next = a);
                                        }
                                    }
                                    throw new TypeError(e(r) + ' is not iterable');
                                }
                                return (
                                    (w.prototype = O),
                                    a(j, 'constructor', { value: O, configurable: !0 }),
                                    a(O, 'constructor', { value: w, configurable: !0 }),
                                    (w.displayName = f(O, c, 'GeneratorFunction')),
                                    (n.isGeneratorFunction = function (t) {
                                        var e = 'function' == typeof t && t.constructor;
                                        return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name));
                                    }),
                                    (n.mark = function (t) {
                                        return (
                                            Object.setPrototypeOf
                                                ? Object.setPrototypeOf(t, O)
                                                : ((t.__proto__ = O), f(t, c, 'GeneratorFunction')),
                                            (t.prototype = Object.create(j)),
                                            t
                                        );
                                    }),
                                    (n.awrap = function (t) {
                                        return { __await: t };
                                    }),
                                    E(T.prototype),
                                    f(T.prototype, s, function () {
                                        return this;
                                    }),
                                    (n.AsyncIterator = T),
                                    (n.async = function (t, e, r, o, i) {
                                        void 0 === i && (i = Promise);
                                        var a = new T(p(t, e, r, o), i);
                                        return n.isGeneratorFunction(e)
                                            ? a
                                            : a.next().then(function (t) {
                                                  return t.done ? t.value : a.next();
                                              });
                                    }),
                                    E(j),
                                    f(j, c, 'Generator'),
                                    f(j, u, function () {
                                        return this;
                                    }),
                                    f(j, 'toString', function () {
                                        return '[object Generator]';
                                    }),
                                    (n.keys = function (t) {
                                        var e = Object(t),
                                            r = [];
                                        for (var n in e) r.push(n);
                                        return (
                                            r.reverse(),
                                            function t() {
                                                for (; r.length; ) {
                                                    var n = r.pop();
                                                    if (n in e) return (t.value = n), (t.done = !1), t;
                                                }
                                                return (t.done = !0), t;
                                            }
                                        );
                                    }),
                                    (n.values = L),
                                    (C.prototype = {
                                        constructor: C,
                                        reset: function (e) {
                                            if (
                                                ((this.prev = 0),
                                                (this.next = 0),
                                                (this.sent = this._sent = t),
                                                (this.done = !1),
                                                (this.delegate = null),
                                                (this.method = 'next'),
                                                (this.arg = t),
                                                this.tryEntries.forEach(I),
                                                !e)
                                            )
                                                for (var r in this)
                                                    't' === r.charAt(0) &&
                                                        i.call(this, r) &&
                                                        !isNaN(+r.slice(1)) &&
                                                        (this[r] = t);
                                        },
                                        stop: function () {
                                            this.done = !0;
                                            var t = this.tryEntries[0].completion;
                                            if ('throw' === t.type) throw t.arg;
                                            return this.rval;
                                        },
                                        dispatchException: function (e) {
                                            if (this.done) throw e;
                                            var r = this;
                                            function n(n, o) {
                                                return (
                                                    (l.type = 'throw'),
                                                    (l.arg = e),
                                                    (r.next = n),
                                                    o && ((r.method = 'next'), (r.arg = t)),
                                                    !!o
                                                );
                                            }
                                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                                var a = this.tryEntries[o],
                                                    l = a.completion;
                                                if ('root' === a.tryLoc) return n('end');
                                                if (a.tryLoc <= this.prev) {
                                                    var u = i.call(a, 'catchLoc'),
                                                        s = i.call(a, 'finallyLoc');
                                                    if (u && s) {
                                                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                                    } else if (u) {
                                                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                                    } else {
                                                        if (!s)
                                                            throw new Error('try statement without catch or finally');
                                                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                                    }
                                                }
                                            }
                                        },
                                        abrupt: function (t, e) {
                                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                                var n = this.tryEntries[r];
                                                if (
                                                    n.tryLoc <= this.prev &&
                                                    i.call(n, 'finallyLoc') &&
                                                    this.prev < n.finallyLoc
                                                ) {
                                                    var o = n;
                                                    break;
                                                }
                                            }
                                            o &&
                                                ('break' === t || 'continue' === t) &&
                                                o.tryLoc <= e &&
                                                e <= o.finallyLoc &&
                                                (o = null);
                                            var a = o ? o.completion : {};
                                            return (
                                                (a.type = t),
                                                (a.arg = e),
                                                o
                                                    ? ((this.method = 'next'), (this.next = o.finallyLoc), v)
                                                    : this.complete(a)
                                            );
                                        },
                                        complete: function (t, e) {
                                            if ('throw' === t.type) throw t.arg;
                                            return (
                                                'break' === t.type || 'continue' === t.type
                                                    ? (this.next = t.arg)
                                                    : 'return' === t.type
                                                    ? ((this.rval = this.arg = t.arg),
                                                      (this.method = 'return'),
                                                      (this.next = 'end'))
                                                    : 'normal' === t.type && e && (this.next = e),
                                                v
                                            );
                                        },
                                        finish: function (t) {
                                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                                var r = this.tryEntries[e];
                                                if (r.finallyLoc === t)
                                                    return this.complete(r.completion, r.afterLoc), I(r), v;
                                            }
                                        },
                                        catch: function (t) {
                                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                                var r = this.tryEntries[e];
                                                if (r.tryLoc === t) {
                                                    var n = r.completion;
                                                    if ('throw' === n.type) {
                                                        var o = n.arg;
                                                        I(r);
                                                    }
                                                    return o;
                                                }
                                            }
                                            throw new Error('illegal catch attempt');
                                        },
                                        delegateYield: function (e, r, n) {
                                            return (
                                                (this.delegate = { iterator: L(e), resultName: r, nextLoc: n }),
                                                'next' === this.method && (this.arg = t),
                                                v
                                            );
                                        },
                                    }),
                                    n
                                );
                            }
                            function n(t, e, r, n, o, i, a) {
                                try {
                                    var l = t[i](a),
                                        u = l.value;
                                } catch (t) {
                                    return void r(t);
                                }
                                l.done ? e(u) : Promise.resolve(u).then(n, o);
                            }
                            function o(t) {
                                return function () {
                                    var e = this,
                                        r = arguments;
                                    return new Promise(function (o, i) {
                                        var a = t.apply(e, r);
                                        function l(t) {
                                            n(a, o, i, l, u, 'next', t);
                                        }
                                        function u(t) {
                                            n(a, o, i, l, u, 'throw', t);
                                        }
                                        l(void 0);
                                    });
                                };
                            }
                            Object.defineProperty(t, '__esModule', { value: !0 }),
                                (t.computeBoundaryFromRects = function (t, e) {
                                    var r = Math.min(t.x, e.x, t.x + t.width - 1, e.x + e.width - 1),
                                        n = Math.max(t.x, e.x, t.x + t.width - 1, e.x + e.width - 1),
                                        o = Math.min(t.y, e.y, t.y + t.height - 1, e.y + e.height - 1),
                                        i = Math.max(t.y, e.y, t.y + t.height - 1, e.y + e.height - 1);
                                    return { x: r, x1: n, y: o, y1: i, width: n - r, height: i - o };
                                }),
                                (t.createInputItem = void 0),
                                (t.css = function (t, r) {
                                    if ('object' === e(r)) for (var n in r) t.style[n] = r[n];
                                }),
                                (t.dialog = void 0),
                                (t.getRelativeRect = function (t, e) {
                                    var r = e.getBoundingClientRect();
                                    return {
                                        x: t.x - r.x - e.scrollLeft,
                                        y: t.y - r.y - e.scrollTop,
                                        x1: t.x - r.x - e.scrollLeft + t.width,
                                        y1: t.y - r.y - e.scrollTop + t.height,
                                        width: t.width,
                                        height: t.height,
                                    };
                                }),
                                (t.showTableCreator = t.randomId = void 0),
                                (t.randomId = function () {
                                    return Math.random().toString(36).slice(2);
                                });
                            var i = 8e3,
                                a = (t.dialog = function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        e = t.child,
                                        r = t.target,
                                        n = void 0 === r ? document.body : r,
                                        o = t.beforeClose,
                                        a = void 0 === o ? function () {} : o,
                                        l = n,
                                        u = document.createElement('div');
                                    u.classList.add('dialog'), (u.style.zIndex = i);
                                    var s = document.createElement('div');
                                    if ((s.classList.add('dialog_overlay'), u.appendChild(s), e)) {
                                        var c = document.createElement('div');
                                        c.classList.add('dialog_content'),
                                            c.appendChild(e),
                                            s.appendChild(c),
                                            (c.onclick = function (t) {
                                                t.stopPropagation();
                                            });
                                    }
                                    var f = getComputedStyle(l).overflow;
                                    (l.style.overflow = 'hidden'), l.appendChild(u);
                                    var p = function () {
                                        a(), u.remove(), (l.style.overflow = f);
                                    };
                                    return (u.onclick = p), (i += 1), { dialog: u, close: p };
                                }),
                                l = (t.createInputItem = function (t, e) {
                                    e.type || (e.type = 'text'), e.value || (e.value = '');
                                    var r = document.createElement('div');
                                    if ((r.classList.add('input_item'), t)) {
                                        var n = document.createElement('span');
                                        n.classList.add('input_label'), (n.innerText = t), r.appendChild(n);
                                    }
                                    var o = document.createElement('div');
                                    o.classList.add('input_input');
                                    var i = document.createElement('input');
                                    for (var a in e) i.setAttribute(a, e[a]);
                                    return (
                                        (e.max || e.min) &&
                                            i.addEventListener('blur', function () {
                                                e.max && e.max <= i.value && (i.value = e.max),
                                                    e.min && e.min >= i.value && (i.value = e.min);
                                            }),
                                        o.appendChild(i),
                                        r.appendChild(o),
                                        (i.onfocus = function () {
                                            o.classList.add('focus');
                                        }),
                                        (i.onblur = function () {
                                            o.classList.remove('focus');
                                        }),
                                        {
                                            item: r,
                                            input: i,
                                            errorTip: function t(e) {
                                                if (o.classList.contains('error'))
                                                    o.querySelector('.error_tip').innerText = e;
                                                else {
                                                    var r = document.createElement('span');
                                                    r.classList.add('error_tip'), (r.innerText = e), o.appendChild(r);
                                                }
                                                return (
                                                    o.classList.add('error'),
                                                    {
                                                        removeError: function () {
                                                            o.classList.remove('error'), t.remove();
                                                        },
                                                    }
                                                );
                                            },
                                        }
                                    );
                                });
                            t.showTableCreator = (function () {
                                var t = o(
                                    r().mark(function t() {
                                        var e,
                                            n,
                                            i,
                                            u,
                                            s,
                                            c,
                                            f,
                                            p,
                                            d,
                                            h,
                                            y,
                                            b,
                                            m,
                                            v,
                                            g,
                                            w = arguments;
                                        return r().wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (e = w.length > 0 && void 0 !== w[0] ? w[0] : 3),
                                                            (n = w.length > 1 && void 0 !== w[1] ? w[1] : 3),
                                                            (i = document.createElement('div')).classList.add(
                                                                'create_box'
                                                            ),
                                                            (u = document.createElement('div')).classList.add(
                                                                'create_input_content'
                                                            ),
                                                            (s = l('row', { type: 'number', value: e, max: 99 })),
                                                            (c = s.item),
                                                            (f = s.input),
                                                            (p = s.errorTip),
                                                            (d = l('col', { type: 'number', value: n, max: 99 })),
                                                            (h = d.item),
                                                            (y = d.input),
                                                            (b = d.errorTip),
                                                            u.appendChild(c),
                                                            u.appendChild(h),
                                                            i.appendChild(u),
                                                            (m = document.createElement('div')).classList.add(
                                                                'create_control'
                                                            ),
                                                            (v = document.createElement('button')).classList.add(
                                                                'create_control_btn',
                                                                'confirm'
                                                            ),
                                                            (v.innerText = 'Confirm'),
                                                            (g = document.createElement('button')).classList.add(
                                                                'create_control_btn',
                                                                'cancel'
                                                            ),
                                                            (g.innerText = 'Cancel'),
                                                            m.appendChild(v),
                                                            m.appendChild(g),
                                                            i.appendChild(m),
                                                            t.abrupt(
                                                                'return',
                                                                new Promise(function (t, e) {
                                                                    var n = a({ child: i, beforeClose: e }).close;
                                                                    (v.onclick = o(
                                                                        r().mark(function e() {
                                                                            var o, i;
                                                                            return r().wrap(function (e) {
                                                                                for (;;)
                                                                                    switch ((e.prev = e.next)) {
                                                                                        case 0:
                                                                                            if (
                                                                                                ((o = Number(f.value)),
                                                                                                (i = Number(y.value)),
                                                                                                !(isNaN(o) || o <= 0))
                                                                                            ) {
                                                                                                e.next = 4;
                                                                                                break;
                                                                                            }
                                                                                            return e.abrupt(
                                                                                                'return',
                                                                                                p('Invalid number')
                                                                                            );
                                                                                        case 4:
                                                                                            if (!(isNaN(i) || i <= 0)) {
                                                                                                e.next = 6;
                                                                                                break;
                                                                                            }
                                                                                            return e.abrupt(
                                                                                                'return',
                                                                                                b('Invalid number')
                                                                                            );
                                                                                        case 6:
                                                                                            t({ row: o, col: i }), n();
                                                                                        case 8:
                                                                                        case 'end':
                                                                                            return e.stop();
                                                                                    }
                                                                            }, e);
                                                                        })
                                                                    )),
                                                                        (g.onclick = function () {
                                                                            n();
                                                                        });
                                                                })
                                                            )
                                                        );
                                                    case 23:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                );
                                return function () {
                                    return t.apply(this, arguments);
                                };
                            })();
                        }),
                        void 0 === (n = r.apply(e, [e])) || (t.exports = n);
                },
                1924: (t, e, r) => {
                    'use strict';
                    var n = r(210),
                        o = r(5559),
                        i = o(n('String.prototype.indexOf'));
                    t.exports = function (t, e) {
                        var r = n(t, !!e);
                        return 'function' == typeof r && i(t, '.prototype.') > -1 ? o(r) : r;
                    };
                },
                5559: (t, e, r) => {
                    'use strict';
                    var n = r(8612),
                        o = r(210),
                        i = r(7771),
                        a = o('%TypeError%'),
                        l = o('%Function.prototype.apply%'),
                        u = o('%Function.prototype.call%'),
                        s = o('%Reflect.apply%', !0) || n.call(u, l),
                        c = o('%Object.defineProperty%', !0),
                        f = o('%Math.max%');
                    if (c)
                        try {
                            c({}, 'a', { value: 1 });
                        } catch (t) {
                            c = null;
                        }
                    t.exports = function (t) {
                        if ('function' != typeof t) throw new a('a function is required');
                        var e = s(n, u, arguments);
                        return i(e, 1 + f(0, t.length - (arguments.length - 1)), !0);
                    };
                    var p = function () {
                        return s(n, l, arguments);
                    };
                    c ? c(t.exports, 'apply', { value: p }) : (t.exports.apply = p);
                },
                6313: (t) => {
                    var e = (function () {
                        'use strict';
                        function t(t, e) {
                            return null != e && t instanceof e;
                        }
                        var e, r, n;
                        try {
                            e = Map;
                        } catch (t) {
                            e = function () {};
                        }
                        try {
                            r = Set;
                        } catch (t) {
                            r = function () {};
                        }
                        try {
                            n = Promise;
                        } catch (t) {
                            n = function () {};
                        }
                        function o(i, l, u, s, c) {
                            'object' == typeof l &&
                                ((u = l.depth), (s = l.prototype), (c = l.includeNonEnumerable), (l = l.circular));
                            var f = [],
                                p = [],
                                d = 'undefined' != typeof Buffer;
                            return (
                                void 0 === l && (l = !0),
                                void 0 === u && (u = 1 / 0),
                                (function i(u, h) {
                                    if (null === u) return null;
                                    if (0 === h) return u;
                                    var y, b;
                                    if ('object' != typeof u) return u;
                                    if (t(u, e)) y = new e();
                                    else if (t(u, r)) y = new r();
                                    else if (t(u, n))
                                        y = new n(function (t, e) {
                                            u.then(
                                                function (e) {
                                                    t(i(e, h - 1));
                                                },
                                                function (t) {
                                                    e(i(t, h - 1));
                                                }
                                            );
                                        });
                                    else if (o.__isArray(u)) y = [];
                                    else if (o.__isRegExp(u))
                                        (y = new RegExp(u.source, a(u))), u.lastIndex && (y.lastIndex = u.lastIndex);
                                    else if (o.__isDate(u)) y = new Date(u.getTime());
                                    else {
                                        if (d && Buffer.isBuffer(u))
                                            return (
                                                (y = Buffer.allocUnsafe
                                                    ? Buffer.allocUnsafe(u.length)
                                                    : new Buffer(u.length)),
                                                u.copy(y),
                                                y
                                            );
                                        t(u, Error)
                                            ? (y = Object.create(u))
                                            : void 0 === s
                                            ? ((b = Object.getPrototypeOf(u)), (y = Object.create(b)))
                                            : ((y = Object.create(s)), (b = s));
                                    }
                                    if (l) {
                                        var m = f.indexOf(u);
                                        if (-1 != m) return p[m];
                                        f.push(u), p.push(y);
                                    }
                                    for (var v in (t(u, e) &&
                                        u.forEach(function (t, e) {
                                            var r = i(e, h - 1),
                                                n = i(t, h - 1);
                                            y.set(r, n);
                                        }),
                                    t(u, r) &&
                                        u.forEach(function (t) {
                                            var e = i(t, h - 1);
                                            y.add(e);
                                        }),
                                    u)) {
                                        var g;
                                        b && (g = Object.getOwnPropertyDescriptor(b, v)),
                                            (g && null == g.set) || (y[v] = i(u[v], h - 1));
                                    }
                                    if (Object.getOwnPropertySymbols) {
                                        var w = Object.getOwnPropertySymbols(u);
                                        for (v = 0; v < w.length; v++) {
                                            var O = w[v];
                                            (!(_ = Object.getOwnPropertyDescriptor(u, O)) || _.enumerable || c) &&
                                                ((y[O] = i(u[O], h - 1)),
                                                _.enumerable || Object.defineProperty(y, O, { enumerable: !1 }));
                                        }
                                    }
                                    if (c) {
                                        var N = Object.getOwnPropertyNames(u);
                                        for (v = 0; v < N.length; v++) {
                                            var _,
                                                x = N[v];
                                            ((_ = Object.getOwnPropertyDescriptor(u, x)) && _.enumerable) ||
                                                ((y[x] = i(u[x], h - 1)),
                                                Object.defineProperty(y, x, { enumerable: !1 }));
                                        }
                                    }
                                    return y;
                                })(i, u)
                            );
                        }
                        function i(t) {
                            return Object.prototype.toString.call(t);
                        }
                        function a(t) {
                            var e = '';
                            return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), e;
                        }
                        return (
                            (o.clonePrototype = function (t) {
                                if (null === t) return null;
                                var e = function () {};
                                return (e.prototype = t), new e();
                            }),
                            (o.__objToStr = i),
                            (o.__isDate = function (t) {
                                return 'object' == typeof t && '[object Date]' === i(t);
                            }),
                            (o.__isArray = function (t) {
                                return 'object' == typeof t && '[object Array]' === i(t);
                            }),
                            (o.__isRegExp = function (t) {
                                return 'object' == typeof t && '[object RegExp]' === i(t);
                            }),
                            (o.__getRegExpFlags = a),
                            o
                        );
                    })();
                    t.exports && (t.exports = e);
                },
                251: (t, e, r) => {
                    var n = r(2215),
                        o = r(2584),
                        i = r(609),
                        a = r(8420),
                        l = r(2847),
                        u = r(8923),
                        s = Date.prototype.getTime;
                    function c(t) {
                        return null == t;
                    }
                    function f(t) {
                        return !(
                            !t ||
                            'object' != typeof t ||
                            'number' != typeof t.length ||
                            'function' != typeof t.copy ||
                            'function' != typeof t.slice ||
                            (t.length > 0 && 'number' != typeof t[0])
                        );
                    }
                    t.exports = function t(e, r, p) {
                        var d = p || {};
                        return (
                            !!(d.strict ? i(e, r) : e === r) ||
                            (!e || !r || ('object' != typeof e && 'object' != typeof r)
                                ? d.strict
                                    ? i(e, r)
                                    : e == r
                                : (function (e, r, i) {
                                      var p, d;
                                      if (typeof e != typeof r) return !1;
                                      if (c(e) || c(r)) return !1;
                                      if (e.prototype !== r.prototype) return !1;
                                      if (o(e) !== o(r)) return !1;
                                      var h = a(e),
                                          y = a(r);
                                      if (h !== y) return !1;
                                      if (h || y) return e.source === r.source && l(e) === l(r);
                                      if (u(e) && u(r)) return s.call(e) === s.call(r);
                                      var b = f(e),
                                          m = f(r);
                                      if (b !== m) return !1;
                                      if (b || m) {
                                          if (e.length !== r.length) return !1;
                                          for (p = 0; p < e.length; p++) if (e[p] !== r[p]) return !1;
                                          return !0;
                                      }
                                      if (typeof e != typeof r) return !1;
                                      try {
                                          var v = n(e),
                                              g = n(r);
                                      } catch (t) {
                                          return !1;
                                      }
                                      if (v.length !== g.length) return !1;
                                      for (v.sort(), g.sort(), p = v.length - 1; p >= 0; p--)
                                          if (v[p] != g[p]) return !1;
                                      for (p = v.length - 1; p >= 0; p--) if (!t(e[(d = v[p])], r[d], i)) return !1;
                                      return !0;
                                  })(e, r, d))
                        );
                    };
                },
                2296: (t, e, r) => {
                    'use strict';
                    var n = r(1044)(),
                        o = r(210),
                        i = n && o('%Object.defineProperty%', !0);
                    if (i)
                        try {
                            i({}, 'a', { value: 1 });
                        } catch (t) {
                            i = !1;
                        }
                    var a = o('%SyntaxError%'),
                        l = o('%TypeError%'),
                        u = r(7296);
                    t.exports = function (t, e, r) {
                        if (!t || ('object' != typeof t && 'function' != typeof t))
                            throw new l('`obj` must be an object or a function`');
                        if ('string' != typeof e && 'symbol' != typeof e)
                            throw new l('`property` must be a string or a symbol`');
                        if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3])
                            throw new l('`nonEnumerable`, if provided, must be a boolean or null');
                        if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4])
                            throw new l('`nonWritable`, if provided, must be a boolean or null');
                        if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5])
                            throw new l('`nonConfigurable`, if provided, must be a boolean or null');
                        if (arguments.length > 6 && 'boolean' != typeof arguments[6])
                            throw new l('`loose`, if provided, must be a boolean');
                        var n = arguments.length > 3 ? arguments[3] : null,
                            o = arguments.length > 4 ? arguments[4] : null,
                            s = arguments.length > 5 ? arguments[5] : null,
                            c = arguments.length > 6 && arguments[6],
                            f = !!u && u(t, e);
                        if (i)
                            i(t, e, {
                                configurable: null === s && f ? f.configurable : !s,
                                enumerable: null === n && f ? f.enumerable : !n,
                                value: r,
                                writable: null === o && f ? f.writable : !o,
                            });
                        else {
                            if (!c && (n || o || s))
                                throw new a(
                                    'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
                                );
                            t[e] = r;
                        }
                    };
                },
                4289: (t, e, r) => {
                    'use strict';
                    var n = r(2215),
                        o = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
                        i = Object.prototype.toString,
                        a = Array.prototype.concat,
                        l = r(2296),
                        u = r(1044)(),
                        s = function (t, e, r, n) {
                            if (e in t)
                                if (!0 === n) {
                                    if (t[e] === r) return;
                                } else if ('function' != typeof (o = n) || '[object Function]' !== i.call(o) || !n())
                                    return;
                            var o;
                            u ? l(t, e, r, !0) : l(t, e, r);
                        },
                        c = function (t, e) {
                            var r = arguments.length > 2 ? arguments[2] : {},
                                i = n(e);
                            o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
                            for (var l = 0; l < i.length; l += 1) s(t, i[l], e[i[l]], r[i[l]]);
                        };
                    (c.supportsDescriptors = !!u), (t.exports = c);
                },
                6729: (t) => {
                    'use strict';
                    var e = Object.prototype.hasOwnProperty,
                        r = '~';
                    function n() {}
                    function o(t, e, r) {
                        (this.fn = t), (this.context = e), (this.once = r || !1);
                    }
                    function i() {
                        (this._events = new n()), (this._eventsCount = 0);
                    }
                    Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
                        (i.prototype.eventNames = function () {
                            var t,
                                n,
                                o = [];
                            if (0 === this._eventsCount) return o;
                            for (n in (t = this._events)) e.call(t, n) && o.push(r ? n.slice(1) : n);
                            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
                        }),
                        (i.prototype.listeners = function (t, e) {
                            var n = r ? r + t : t,
                                o = this._events[n];
                            if (e) return !!o;
                            if (!o) return [];
                            if (o.fn) return [o.fn];
                            for (var i = 0, a = o.length, l = new Array(a); i < a; i++) l[i] = o[i].fn;
                            return l;
                        }),
                        (i.prototype.emit = function (t, e, n, o, i, a) {
                            var l = r ? r + t : t;
                            if (!this._events[l]) return !1;
                            var u,
                                s,
                                c = this._events[l],
                                f = arguments.length;
                            if (c.fn) {
                                switch ((c.once && this.removeListener(t, c.fn, void 0, !0), f)) {
                                    case 1:
                                        return c.fn.call(c.context), !0;
                                    case 2:
                                        return c.fn.call(c.context, e), !0;
                                    case 3:
                                        return c.fn.call(c.context, e, n), !0;
                                    case 4:
                                        return c.fn.call(c.context, e, n, o), !0;
                                    case 5:
                                        return c.fn.call(c.context, e, n, o, i), !0;
                                    case 6:
                                        return c.fn.call(c.context, e, n, o, i, a), !0;
                                }
                                for (s = 1, u = new Array(f - 1); s < f; s++) u[s - 1] = arguments[s];
                                c.fn.apply(c.context, u);
                            } else {
                                var p,
                                    d = c.length;
                                for (s = 0; s < d; s++)
                                    switch ((c[s].once && this.removeListener(t, c[s].fn, void 0, !0), f)) {
                                        case 1:
                                            c[s].fn.call(c[s].context);
                                            break;
                                        case 2:
                                            c[s].fn.call(c[s].context, e);
                                            break;
                                        case 3:
                                            c[s].fn.call(c[s].context, e, n);
                                            break;
                                        case 4:
                                            c[s].fn.call(c[s].context, e, n, o);
                                            break;
                                        default:
                                            if (!u)
                                                for (p = 1, u = new Array(f - 1); p < f; p++) u[p - 1] = arguments[p];
                                            c[s].fn.apply(c[s].context, u);
                                    }
                            }
                            return !0;
                        }),
                        (i.prototype.on = function (t, e, n) {
                            var i = new o(e, n || this),
                                a = r ? r + t : t;
                            return (
                                this._events[a]
                                    ? this._events[a].fn
                                        ? (this._events[a] = [this._events[a], i])
                                        : this._events[a].push(i)
                                    : ((this._events[a] = i), this._eventsCount++),
                                this
                            );
                        }),
                        (i.prototype.once = function (t, e, n) {
                            var i = new o(e, n || this, !0),
                                a = r ? r + t : t;
                            return (
                                this._events[a]
                                    ? this._events[a].fn
                                        ? (this._events[a] = [this._events[a], i])
                                        : this._events[a].push(i)
                                    : ((this._events[a] = i), this._eventsCount++),
                                this
                            );
                        }),
                        (i.prototype.removeListener = function (t, e, o, i) {
                            var a = r ? r + t : t;
                            if (!this._events[a]) return this;
                            if (!e)
                                return (
                                    0 == --this._eventsCount ? (this._events = new n()) : delete this._events[a], this
                                );
                            var l = this._events[a];
                            if (l.fn)
                                l.fn !== e ||
                                    (i && !l.once) ||
                                    (o && l.context !== o) ||
                                    (0 == --this._eventsCount ? (this._events = new n()) : delete this._events[a]);
                            else {
                                for (var u = 0, s = [], c = l.length; u < c; u++)
                                    (l[u].fn !== e || (i && !l[u].once) || (o && l[u].context !== o)) && s.push(l[u]);
                                s.length
                                    ? (this._events[a] = 1 === s.length ? s[0] : s)
                                    : 0 == --this._eventsCount
                                    ? (this._events = new n())
                                    : delete this._events[a];
                            }
                            return this;
                        }),
                        (i.prototype.removeAllListeners = function (t) {
                            var e;
                            return (
                                t
                                    ? ((e = r ? r + t : t),
                                      this._events[e] &&
                                          (0 == --this._eventsCount
                                              ? (this._events = new n())
                                              : delete this._events[e]))
                                    : ((this._events = new n()), (this._eventsCount = 0)),
                                this
                            );
                        }),
                        (i.prototype.off = i.prototype.removeListener),
                        (i.prototype.addListener = i.prototype.on),
                        (i.prototype.setMaxListeners = function () {
                            return this;
                        }),
                        (i.prefixed = r),
                        (i.EventEmitter = i),
                        (t.exports = i);
                },
                4470: (t) => {
                    'use strict';
                    var e = Object.prototype.hasOwnProperty,
                        r = Object.prototype.toString,
                        n = Object.defineProperty,
                        o = Object.getOwnPropertyDescriptor,
                        i = function (t) {
                            return 'function' == typeof Array.isArray
                                ? Array.isArray(t)
                                : '[object Array]' === r.call(t);
                        },
                        a = function (t) {
                            if (!t || '[object Object]' !== r.call(t)) return !1;
                            var n,
                                o = e.call(t, 'constructor'),
                                i =
                                    t.constructor &&
                                    t.constructor.prototype &&
                                    e.call(t.constructor.prototype, 'isPrototypeOf');
                            if (t.constructor && !o && !i) return !1;
                            for (n in t);
                            return void 0 === n || e.call(t, n);
                        },
                        l = function (t, e) {
                            n && '__proto__' === e.name
                                ? n(t, e.name, { enumerable: !0, configurable: !0, value: e.newValue, writable: !0 })
                                : (t[e.name] = e.newValue);
                        },
                        u = function (t, r) {
                            if ('__proto__' === r) {
                                if (!e.call(t, r)) return;
                                if (o) return o(t, r).value;
                            }
                            return t[r];
                        };
                    t.exports = function t() {
                        var e,
                            r,
                            n,
                            o,
                            s,
                            c,
                            f = arguments[0],
                            p = 1,
                            d = arguments.length,
                            h = !1;
                        for (
                            'boolean' == typeof f && ((h = f), (f = arguments[1] || {}), (p = 2)),
                                (null == f || ('object' != typeof f && 'function' != typeof f)) && (f = {});
                            p < d;
                            ++p
                        )
                            if (null != (e = arguments[p]))
                                for (r in e)
                                    (n = u(f, r)),
                                        f !== (o = u(e, r)) &&
                                            (h && o && (a(o) || (s = i(o)))
                                                ? (s ? ((s = !1), (c = n && i(n) ? n : [])) : (c = n && a(n) ? n : {}),
                                                  l(f, { name: r, newValue: t(h, c, o) }))
                                                : void 0 !== o && l(f, { name: r, newValue: o }));
                        return f;
                    };
                },
                7529: (t) => {
                    var e = -1,
                        r = 1,
                        n = 0;
                    function o(t, s, f) {
                        if (t == s) return t ? [[n, t]] : [];
                        (f < 0 || t.length < f) && (f = null);
                        var p = a(t, s),
                            d = t.substring(0, p);
                        p = l((t = t.substring(p)), (s = s.substring(p)));
                        var h = t.substring(t.length - p),
                            y = (function (t, u) {
                                var s;
                                if (!t) return [[r, u]];
                                if (!u) return [[e, t]];
                                var c = t.length > u.length ? t : u,
                                    f = t.length > u.length ? u : t,
                                    p = c.indexOf(f);
                                if (-1 != p)
                                    return (
                                        (s = [
                                            [r, c.substring(0, p)],
                                            [n, f],
                                            [r, c.substring(p + f.length)],
                                        ]),
                                        t.length > u.length && (s[0][0] = s[2][0] = e),
                                        s
                                    );
                                if (1 == f.length)
                                    return [
                                        [e, t],
                                        [r, u],
                                    ];
                                var d = (function (t, e) {
                                    var r = t.length > e.length ? t : e,
                                        n = t.length > e.length ? e : t;
                                    if (r.length < 4 || 2 * n.length < r.length) return null;
                                    function o(t, e, r) {
                                        for (
                                            var n,
                                                o,
                                                i,
                                                u,
                                                s = t.substring(r, r + Math.floor(t.length / 4)),
                                                c = -1,
                                                f = '';
                                            -1 != (c = e.indexOf(s, c + 1));

                                        ) {
                                            var p = a(t.substring(r), e.substring(c)),
                                                d = l(t.substring(0, r), e.substring(0, c));
                                            f.length < d + p &&
                                                ((f = e.substring(c - d, c) + e.substring(c, c + p)),
                                                (n = t.substring(0, r - d)),
                                                (o = t.substring(r + p)),
                                                (i = e.substring(0, c - d)),
                                                (u = e.substring(c + p)));
                                        }
                                        return 2 * f.length >= t.length ? [n, o, i, u, f] : null;
                                    }
                                    var i,
                                        u,
                                        s,
                                        c,
                                        f,
                                        p = o(r, n, Math.ceil(r.length / 4)),
                                        d = o(r, n, Math.ceil(r.length / 2));
                                    return p || d
                                        ? ((i = d ? (p && p[4].length > d[4].length ? p : d) : p),
                                          t.length > e.length
                                              ? ((u = i[0]), (s = i[1]), (c = i[2]), (f = i[3]))
                                              : ((c = i[0]), (f = i[1]), (u = i[2]), (s = i[3])),
                                          [u, s, c, f, i[4]])
                                        : null;
                                })(t, u);
                                if (d) {
                                    var h = d[0],
                                        y = d[1],
                                        b = d[2],
                                        m = d[3],
                                        v = d[4],
                                        g = o(h, b),
                                        w = o(y, m);
                                    return g.concat([[n, v]], w);
                                }
                                return (function (t, n) {
                                    for (
                                        var o = t.length,
                                            a = n.length,
                                            l = Math.ceil((o + a) / 2),
                                            u = l,
                                            s = 2 * l,
                                            c = new Array(s),
                                            f = new Array(s),
                                            p = 0;
                                        p < s;
                                        p++
                                    )
                                        (c[p] = -1), (f[p] = -1);
                                    (c[u + 1] = 0), (f[u + 1] = 0);
                                    for (var d = o - a, h = d % 2 != 0, y = 0, b = 0, m = 0, v = 0, g = 0; g < l; g++) {
                                        for (var w = -g + y; w <= g - b; w += 2) {
                                            for (
                                                var O = u + w,
                                                    N =
                                                        (T =
                                                            w == -g || (w != g && c[O - 1] < c[O + 1])
                                                                ? c[O + 1]
                                                                : c[O - 1] + 1) - w;
                                                T < o && N < a && t.charAt(T) == n.charAt(N);

                                            )
                                                T++, N++;
                                            if (((c[O] = T), T > o)) b += 2;
                                            else if (N > a) y += 2;
                                            else if (
                                                h &&
                                                (j = u + d - w) >= 0 &&
                                                j < s &&
                                                -1 != f[j] &&
                                                T >= (x = o - f[j])
                                            )
                                                return i(t, n, T, N);
                                        }
                                        for (var _ = -g + m; _ <= g - v; _ += 2) {
                                            for (
                                                var x,
                                                    j = u + _,
                                                    E =
                                                        (x =
                                                            _ == -g || (_ != g && f[j - 1] < f[j + 1])
                                                                ? f[j + 1]
                                                                : f[j - 1] + 1) - _;
                                                x < o && E < a && t.charAt(o - x - 1) == n.charAt(a - E - 1);

                                            )
                                                x++, E++;
                                            if (((f[j] = x), x > o)) v += 2;
                                            else if (E > a) m += 2;
                                            else if (!h) {
                                                var T;
                                                if ((O = u + d - _) >= 0 && O < s && -1 != c[O])
                                                    if (((N = u + (T = c[O]) - O), T >= (x = o - x)))
                                                        return i(t, n, T, N);
                                            }
                                        }
                                    }
                                    return [
                                        [e, t],
                                        [r, n],
                                    ];
                                })(t, u);
                            })((t = t.substring(0, t.length - p)), (s = s.substring(0, s.length - p)));
                        return (
                            d && y.unshift([n, d]),
                            h && y.push([n, h]),
                            u(y),
                            null != f &&
                                (y = (function (t, r) {
                                    var o = (function (t, r) {
                                            if (0 === r) return [n, t];
                                            for (var o = 0, i = 0; i < t.length; i++) {
                                                var a = t[i];
                                                if (a[0] === e || a[0] === n) {
                                                    var l = o + a[1].length;
                                                    if (r === l) return [i + 1, t];
                                                    if (r < l) {
                                                        t = t.slice();
                                                        var u = r - o,
                                                            s = [a[0], a[1].slice(0, u)],
                                                            c = [a[0], a[1].slice(u)];
                                                        return t.splice(i, 1, s, c), [i + 1, t];
                                                    }
                                                    o = l;
                                                }
                                            }
                                            throw new Error('cursor_pos is out of bounds!');
                                        })(t, r),
                                        i = o[1],
                                        a = o[0],
                                        l = i[a],
                                        u = i[a + 1];
                                    if (null == l) return t;
                                    if (l[0] !== n) return t;
                                    if (null != u && l[1] + u[1] === u[1] + l[1])
                                        return i.splice(a, 2, u, l), c(i, a, 2);
                                    if (null != u && 0 === u[1].indexOf(l[1])) {
                                        i.splice(a, 2, [u[0], l[1]], [0, l[1]]);
                                        var s = u[1].slice(l[1].length);
                                        return s.length > 0 && i.splice(a + 2, 0, [u[0], s]), c(i, a, 3);
                                    }
                                    return t;
                                })(y, f)),
                            (function (t) {
                                for (
                                    var o = !1,
                                        i = function (t) {
                                            return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343;
                                        },
                                        a = 2;
                                    a < t.length;
                                    a += 1
                                )
                                    t[a - 2][0] === n &&
                                        (l = t[a - 2][1]).charCodeAt(l.length - 1) >= 55296 &&
                                        l.charCodeAt(l.length - 1) <= 56319 &&
                                        t[a - 1][0] === e &&
                                        i(t[a - 1][1]) &&
                                        t[a][0] === r &&
                                        i(t[a][1]) &&
                                        ((o = !0),
                                        (t[a - 1][1] = t[a - 2][1].slice(-1) + t[a - 1][1]),
                                        (t[a][1] = t[a - 2][1].slice(-1) + t[a][1]),
                                        (t[a - 2][1] = t[a - 2][1].slice(0, -1)));
                                var l;
                                if (!o) return t;
                                var u = [];
                                for (a = 0; a < t.length; a += 1) t[a][1].length > 0 && u.push(t[a]);
                                return u;
                            })(y)
                        );
                    }
                    function i(t, e, r, n) {
                        var i = t.substring(0, r),
                            a = e.substring(0, n),
                            l = t.substring(r),
                            u = e.substring(n),
                            s = o(i, a),
                            c = o(l, u);
                        return s.concat(c);
                    }
                    function a(t, e) {
                        if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                        for (var r = 0, n = Math.min(t.length, e.length), o = n, i = 0; r < o; )
                            t.substring(i, o) == e.substring(i, o) ? (i = r = o) : (n = o),
                                (o = Math.floor((n - r) / 2 + r));
                        return o;
                    }
                    function l(t, e) {
                        if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                        for (var r = 0, n = Math.min(t.length, e.length), o = n, i = 0; r < o; )
                            t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i)
                                ? (i = r = o)
                                : (n = o),
                                (o = Math.floor((n - r) / 2 + r));
                        return o;
                    }
                    function u(t) {
                        t.push([n, '']);
                        for (var o, i = 0, s = 0, c = 0, f = '', p = ''; i < t.length; )
                            switch (t[i][0]) {
                                case r:
                                    c++, (p += t[i][1]), i++;
                                    break;
                                case e:
                                    s++, (f += t[i][1]), i++;
                                    break;
                                case n:
                                    s + c > 1
                                        ? (0 !== s &&
                                              0 !== c &&
                                              (0 !== (o = a(p, f)) &&
                                                  (i - s - c > 0 && t[i - s - c - 1][0] == n
                                                      ? (t[i - s - c - 1][1] += p.substring(0, o))
                                                      : (t.splice(0, 0, [n, p.substring(0, o)]), i++),
                                                  (p = p.substring(o)),
                                                  (f = f.substring(o))),
                                              0 !== (o = l(p, f)) &&
                                                  ((t[i][1] = p.substring(p.length - o) + t[i][1]),
                                                  (p = p.substring(0, p.length - o)),
                                                  (f = f.substring(0, f.length - o)))),
                                          0 === s
                                              ? t.splice(i - c, s + c, [r, p])
                                              : 0 === c
                                              ? t.splice(i - s, s + c, [e, f])
                                              : t.splice(i - s - c, s + c, [e, f], [r, p]),
                                          (i = i - s - c + (s ? 1 : 0) + (c ? 1 : 0) + 1))
                                        : 0 !== i && t[i - 1][0] == n
                                        ? ((t[i - 1][1] += t[i][1]), t.splice(i, 1))
                                        : i++,
                                        (c = 0),
                                        (s = 0),
                                        (f = ''),
                                        (p = '');
                            }
                        '' === t[t.length - 1][1] && t.pop();
                        var d = !1;
                        for (i = 1; i < t.length - 1; )
                            t[i - 1][0] == n &&
                                t[i + 1][0] == n &&
                                (t[i][1].substring(t[i][1].length - t[i - 1][1].length) == t[i - 1][1]
                                    ? ((t[i][1] =
                                          t[i - 1][1] + t[i][1].substring(0, t[i][1].length - t[i - 1][1].length)),
                                      (t[i + 1][1] = t[i - 1][1] + t[i + 1][1]),
                                      t.splice(i - 1, 1),
                                      (d = !0))
                                    : t[i][1].substring(0, t[i + 1][1].length) == t[i + 1][1] &&
                                      ((t[i - 1][1] += t[i + 1][1]),
                                      (t[i][1] = t[i][1].substring(t[i + 1][1].length) + t[i + 1][1]),
                                      t.splice(i + 1, 1),
                                      (d = !0))),
                                i++;
                        d && u(t);
                    }
                    var s = o;
                    function c(t, e, r) {
                        for (var n = e + r - 1; n >= 0 && n >= e - 1; n--)
                            if (n + 1 < t.length) {
                                var o = t[n],
                                    i = t[n + 1];
                                o[0] === i[1] && t.splice(n, 2, [o[0], o[1] + i[1]]);
                            }
                        return t;
                    }
                    (s.INSERT = r), (s.DELETE = e), (s.EQUAL = n), (t.exports = s);
                },
                7648: (t) => {
                    'use strict';
                    var e = Object.prototype.toString,
                        r = Math.max,
                        n = function (t, e) {
                            for (var r = [], n = 0; n < t.length; n += 1) r[n] = t[n];
                            for (var o = 0; o < e.length; o += 1) r[o + t.length] = e[o];
                            return r;
                        };
                    t.exports = function (t) {
                        var o = this;
                        if ('function' != typeof o || '[object Function]' !== e.apply(o))
                            throw new TypeError('Function.prototype.bind called on incompatible ' + o);
                        for (
                            var i,
                                a = (function (t, e) {
                                    for (var r = [], n = 1, o = 0; n < t.length; n += 1, o += 1) r[o] = t[n];
                                    return r;
                                })(arguments),
                                l = r(0, o.length - a.length),
                                u = [],
                                s = 0;
                            s < l;
                            s++
                        )
                            u[s] = '$' + s;
                        if (
                            ((i = Function(
                                'binder',
                                'return function (' +
                                    (function (t, e) {
                                        for (var r = '', n = 0; n < t.length; n += 1)
                                            (r += t[n]), n + 1 < t.length && (r += ',');
                                        return r;
                                    })(u) +
                                    '){ return binder.apply(this,arguments); }'
                            )(function () {
                                if (this instanceof i) {
                                    var e = o.apply(this, n(a, arguments));
                                    return Object(e) === e ? e : this;
                                }
                                return o.apply(t, n(a, arguments));
                            })),
                            o.prototype)
                        ) {
                            var c = function () {};
                            (c.prototype = o.prototype), (i.prototype = new c()), (c.prototype = null);
                        }
                        return i;
                    };
                },
                8612: (t, e, r) => {
                    'use strict';
                    var n = r(7648);
                    t.exports = Function.prototype.bind || n;
                },
                5972: (t) => {
                    'use strict';
                    var e = function () {
                            return 'string' == typeof function () {}.name;
                        },
                        r = Object.getOwnPropertyDescriptor;
                    if (r)
                        try {
                            r([], 'length');
                        } catch (t) {
                            r = null;
                        }
                    e.functionsHaveConfigurableNames = function () {
                        if (!e() || !r) return !1;
                        var t = r(function () {}, 'name');
                        return !!t && !!t.configurable;
                    };
                    var n = Function.prototype.bind;
                    (e.boundFunctionsHaveNames = function () {
                        return e() && 'function' == typeof n && '' !== function () {}.bind().name;
                    }),
                        (t.exports = e);
                },
                210: (t, e, r) => {
                    'use strict';
                    var n,
                        o = SyntaxError,
                        i = Function,
                        a = TypeError,
                        l = function (t) {
                            try {
                                return i('"use strict"; return (' + t + ').constructor;')();
                            } catch (t) {}
                        },
                        u = Object.getOwnPropertyDescriptor;
                    if (u)
                        try {
                            u({}, '');
                        } catch (t) {
                            u = null;
                        }
                    var s = function () {
                            throw new a();
                        },
                        c = u
                            ? (function () {
                                  try {
                                      return s;
                                  } catch (t) {
                                      try {
                                          return u(arguments, 'callee').get;
                                      } catch (t) {
                                          return s;
                                      }
                                  }
                              })()
                            : s,
                        f = r(1405)(),
                        p = r(8185)(),
                        d =
                            Object.getPrototypeOf ||
                            (p
                                ? function (t) {
                                      return t.__proto__;
                                  }
                                : null),
                        h = {},
                        y = 'undefined' != typeof Uint8Array && d ? d(Uint8Array) : n,
                        b = {
                            '%AggregateError%': 'undefined' == typeof AggregateError ? n : AggregateError,
                            '%Array%': Array,
                            '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
                            '%ArrayIteratorPrototype%': f && d ? d([][Symbol.iterator]()) : n,
                            '%AsyncFromSyncIteratorPrototype%': n,
                            '%AsyncFunction%': h,
                            '%AsyncGenerator%': h,
                            '%AsyncGeneratorFunction%': h,
                            '%AsyncIteratorPrototype%': h,
                            '%Atomics%': 'undefined' == typeof Atomics ? n : Atomics,
                            '%BigInt%': 'undefined' == typeof BigInt ? n : BigInt,
                            '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? n : BigInt64Array,
                            '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? n : BigUint64Array,
                            '%Boolean%': Boolean,
                            '%DataView%': 'undefined' == typeof DataView ? n : DataView,
                            '%Date%': Date,
                            '%decodeURI%': decodeURI,
                            '%decodeURIComponent%': decodeURIComponent,
                            '%encodeURI%': encodeURI,
                            '%encodeURIComponent%': encodeURIComponent,
                            '%Error%': Error,
                            '%eval%': eval,
                            '%EvalError%': EvalError,
                            '%Float32Array%': 'undefined' == typeof Float32Array ? n : Float32Array,
                            '%Float64Array%': 'undefined' == typeof Float64Array ? n : Float64Array,
                            '%FinalizationRegistry%':
                                'undefined' == typeof FinalizationRegistry ? n : FinalizationRegistry,
                            '%Function%': i,
                            '%GeneratorFunction%': h,
                            '%Int8Array%': 'undefined' == typeof Int8Array ? n : Int8Array,
                            '%Int16Array%': 'undefined' == typeof Int16Array ? n : Int16Array,
                            '%Int32Array%': 'undefined' == typeof Int32Array ? n : Int32Array,
                            '%isFinite%': isFinite,
                            '%isNaN%': isNaN,
                            '%IteratorPrototype%': f && d ? d(d([][Symbol.iterator]())) : n,
                            '%JSON%': 'object' == typeof JSON ? JSON : n,
                            '%Map%': 'undefined' == typeof Map ? n : Map,
                            '%MapIteratorPrototype%':
                                'undefined' != typeof Map && f && d ? d(new Map()[Symbol.iterator]()) : n,
                            '%Math%': Math,
                            '%Number%': Number,
                            '%Object%': Object,
                            '%parseFloat%': parseFloat,
                            '%parseInt%': parseInt,
                            '%Promise%': 'undefined' == typeof Promise ? n : Promise,
                            '%Proxy%': 'undefined' == typeof Proxy ? n : Proxy,
                            '%RangeError%': RangeError,
                            '%ReferenceError%': ReferenceError,
                            '%Reflect%': 'undefined' == typeof Reflect ? n : Reflect,
                            '%RegExp%': RegExp,
                            '%Set%': 'undefined' == typeof Set ? n : Set,
                            '%SetIteratorPrototype%':
                                'undefined' != typeof Set && f && d ? d(new Set()[Symbol.iterator]()) : n,
                            '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                            '%String%': String,
                            '%StringIteratorPrototype%': f && d ? d(''[Symbol.iterator]()) : n,
                            '%Symbol%': f ? Symbol : n,
                            '%SyntaxError%': o,
                            '%ThrowTypeError%': c,
                            '%TypedArray%': y,
                            '%TypeError%': a,
                            '%Uint8Array%': 'undefined' == typeof Uint8Array ? n : Uint8Array,
                            '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                            '%Uint16Array%': 'undefined' == typeof Uint16Array ? n : Uint16Array,
                            '%Uint32Array%': 'undefined' == typeof Uint32Array ? n : Uint32Array,
                            '%URIError%': URIError,
                            '%WeakMap%': 'undefined' == typeof WeakMap ? n : WeakMap,
                            '%WeakRef%': 'undefined' == typeof WeakRef ? n : WeakRef,
                            '%WeakSet%': 'undefined' == typeof WeakSet ? n : WeakSet,
                        };
                    if (d)
                        try {
                            null.error;
                        } catch (t) {
                            var m = d(d(t));
                            b['%Error.prototype%'] = m;
                        }
                    var v = function t(e) {
                            var r;
                            if ('%AsyncFunction%' === e) r = l('async function () {}');
                            else if ('%GeneratorFunction%' === e) r = l('function* () {}');
                            else if ('%AsyncGeneratorFunction%' === e) r = l('async function* () {}');
                            else if ('%AsyncGenerator%' === e) {
                                var n = t('%AsyncGeneratorFunction%');
                                n && (r = n.prototype);
                            } else if ('%AsyncIteratorPrototype%' === e) {
                                var o = t('%AsyncGenerator%');
                                o && d && (r = d(o.prototype));
                            }
                            return (b[e] = r), r;
                        },
                        g = {
                            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
                            '%ArrayPrototype%': ['Array', 'prototype'],
                            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
                            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
                            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
                            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
                            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
                            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
                            '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
                            '%BooleanPrototype%': ['Boolean', 'prototype'],
                            '%DataViewPrototype%': ['DataView', 'prototype'],
                            '%DatePrototype%': ['Date', 'prototype'],
                            '%ErrorPrototype%': ['Error', 'prototype'],
                            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
                            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
                            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
                            '%FunctionPrototype%': ['Function', 'prototype'],
                            '%Generator%': ['GeneratorFunction', 'prototype'],
                            '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
                            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
                            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
                            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
                            '%JSONParse%': ['JSON', 'parse'],
                            '%JSONStringify%': ['JSON', 'stringify'],
                            '%MapPrototype%': ['Map', 'prototype'],
                            '%NumberPrototype%': ['Number', 'prototype'],
                            '%ObjectPrototype%': ['Object', 'prototype'],
                            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
                            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
                            '%PromisePrototype%': ['Promise', 'prototype'],
                            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
                            '%Promise_all%': ['Promise', 'all'],
                            '%Promise_reject%': ['Promise', 'reject'],
                            '%Promise_resolve%': ['Promise', 'resolve'],
                            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
                            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
                            '%RegExpPrototype%': ['RegExp', 'prototype'],
                            '%SetPrototype%': ['Set', 'prototype'],
                            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
                            '%StringPrototype%': ['String', 'prototype'],
                            '%SymbolPrototype%': ['Symbol', 'prototype'],
                            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
                            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
                            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
                            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
                            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
                            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
                            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
                            '%URIErrorPrototype%': ['URIError', 'prototype'],
                            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
                            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
                        },
                        w = r(8612),
                        O = r(8824),
                        N = w.call(Function.call, Array.prototype.concat),
                        _ = w.call(Function.apply, Array.prototype.splice),
                        x = w.call(Function.call, String.prototype.replace),
                        j = w.call(Function.call, String.prototype.slice),
                        E = w.call(Function.call, RegExp.prototype.exec),
                        T =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        S = /\\(\\)?/g,
                        P = function (t, e) {
                            var r,
                                n = t;
                            if ((O(g, n) && (n = '%' + (r = g[n])[0] + '%'), O(b, n))) {
                                var i = b[n];
                                if ((i === h && (i = v(n)), void 0 === i && !e))
                                    throw new a(
                                        'intrinsic ' + t + ' exists, but is not available. Please file an issue!'
                                    );
                                return { alias: r, name: n, value: i };
                            }
                            throw new o('intrinsic ' + t + ' does not exist!');
                        };
                    t.exports = function (t, e) {
                        if ('string' != typeof t || 0 === t.length)
                            throw new a('intrinsic name must be a non-empty string');
                        if (arguments.length > 1 && 'boolean' != typeof e)
                            throw new a('"allowMissing" argument must be a boolean');
                        if (null === E(/^%?[^%]*%?$/, t))
                            throw new o(
                                '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
                            );
                        var r = (function (t) {
                                var e = j(t, 0, 1),
                                    r = j(t, -1);
                                if ('%' === e && '%' !== r)
                                    throw new o('invalid intrinsic syntax, expected closing `%`');
                                if ('%' === r && '%' !== e)
                                    throw new o('invalid intrinsic syntax, expected opening `%`');
                                var n = [];
                                return (
                                    x(t, T, function (t, e, r, o) {
                                        n[n.length] = r ? x(o, S, '$1') : e || t;
                                    }),
                                    n
                                );
                            })(t),
                            n = r.length > 0 ? r[0] : '',
                            i = P('%' + n + '%', e),
                            l = i.name,
                            s = i.value,
                            c = !1,
                            f = i.alias;
                        f && ((n = f[0]), _(r, N([0, 1], f)));
                        for (var p = 1, d = !0; p < r.length; p += 1) {
                            var h = r[p],
                                y = j(h, 0, 1),
                                m = j(h, -1);
                            if (('"' === y || "'" === y || '`' === y || '"' === m || "'" === m || '`' === m) && y !== m)
                                throw new o('property names with quotes must have matching quotes');
                            if ((('constructor' !== h && d) || (c = !0), O(b, (l = '%' + (n += '.' + h) + '%'))))
                                s = b[l];
                            else if (null != s) {
                                if (!(h in s)) {
                                    if (!e)
                                        throw new a(
                                            'base intrinsic for ' + t + ' exists, but the property is not available.'
                                        );
                                    return;
                                }
                                if (u && p + 1 >= r.length) {
                                    var v = u(s, h);
                                    s = (d = !!v) && 'get' in v && !('originalValue' in v.get) ? v.get : s[h];
                                } else (d = O(s, h)), (s = s[h]);
                                d && !c && (b[l] = s);
                            }
                        }
                        return s;
                    };
                },
                7296: (t, e, r) => {
                    'use strict';
                    var n = r(210)('%Object.getOwnPropertyDescriptor%', !0);
                    if (n)
                        try {
                            n([], 'length');
                        } catch (t) {
                            n = null;
                        }
                    t.exports = n;
                },
                1044: (t, e, r) => {
                    'use strict';
                    var n = r(210)('%Object.defineProperty%', !0),
                        o = function () {
                            if (n)
                                try {
                                    return n({}, 'a', { value: 1 }), !0;
                                } catch (t) {
                                    return !1;
                                }
                            return !1;
                        };
                    (o.hasArrayLengthDefineBug = function () {
                        if (!o()) return null;
                        try {
                            return 1 !== n([], 'length', { value: 1 }).length;
                        } catch (t) {
                            return !0;
                        }
                    }),
                        (t.exports = o);
                },
                8185: (t) => {
                    'use strict';
                    var e = { foo: {} },
                        r = Object;
                    t.exports = function () {
                        return { __proto__: e }.foo === e.foo && !({ __proto__: null } instanceof r);
                    };
                },
                1405: (t, e, r) => {
                    'use strict';
                    var n = 'undefined' != typeof Symbol && Symbol,
                        o = r(5419);
                    t.exports = function () {
                        return (
                            'function' == typeof n &&
                            'function' == typeof Symbol &&
                            'symbol' == typeof n('foo') &&
                            'symbol' == typeof Symbol('bar') &&
                            o()
                        );
                    };
                },
                5419: (t) => {
                    'use strict';
                    t.exports = function () {
                        if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
                        if ('symbol' == typeof Symbol.iterator) return !0;
                        var t = {},
                            e = Symbol('test'),
                            r = Object(e);
                        if ('string' == typeof e) return !1;
                        if ('[object Symbol]' !== Object.prototype.toString.call(e)) return !1;
                        if ('[object Symbol]' !== Object.prototype.toString.call(r)) return !1;
                        for (e in ((t[e] = 42), t)) return !1;
                        if ('function' == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                        if (
                            'function' == typeof Object.getOwnPropertyNames &&
                            0 !== Object.getOwnPropertyNames(t).length
                        )
                            return !1;
                        var n = Object.getOwnPropertySymbols(t);
                        if (1 !== n.length || n[0] !== e) return !1;
                        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                        if ('function' == typeof Object.getOwnPropertyDescriptor) {
                            var o = Object.getOwnPropertyDescriptor(t, e);
                            if (42 !== o.value || !0 !== o.enumerable) return !1;
                        }
                        return !0;
                    };
                },
                6410: (t, e, r) => {
                    'use strict';
                    var n = r(5419);
                    t.exports = function () {
                        return n() && !!Symbol.toStringTag;
                    };
                },
                8824: (t, e, r) => {
                    'use strict';
                    var n = Function.prototype.call,
                        o = Object.prototype.hasOwnProperty,
                        i = r(8612);
                    t.exports = i.call(n, o);
                },
                9801: (t, e, r) => {
                    'use strict';
                    r.r(e), r.d(e, { default: () => n });
                    const n =
                        '<svg viewBox="0 0 24 24"><path class="ql-stroke" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm0 5h18M10 3v18"/></svg>';
                },
                2584: (t, e, r) => {
                    'use strict';
                    var n = r(6410)(),
                        o = r(1924)('Object.prototype.toString'),
                        i = function (t) {
                            return (
                                !(n && t && 'object' == typeof t && Symbol.toStringTag in t) &&
                                '[object Arguments]' === o(t)
                            );
                        },
                        a = function (t) {
                            return (
                                !!i(t) ||
                                (null !== t &&
                                    'object' == typeof t &&
                                    'number' == typeof t.length &&
                                    t.length >= 0 &&
                                    '[object Array]' !== o(t) &&
                                    '[object Function]' === o(t.callee))
                            );
                        },
                        l = (function () {
                            return i(arguments);
                        })();
                    (i.isLegacyArguments = a), (t.exports = l ? i : a);
                },
                8923: (t, e, r) => {
                    'use strict';
                    var n = Date.prototype.getDay,
                        o = Object.prototype.toString,
                        i = r(6410)();
                    t.exports = function (t) {
                        return (
                            'object' == typeof t &&
                            null !== t &&
                            (i
                                ? (function (t) {
                                      try {
                                          return n.call(t), !0;
                                      } catch (t) {
                                          return !1;
                                      }
                                  })(t)
                                : '[object Date]' === o.call(t))
                        );
                    };
                },
                8420: (t, e, r) => {
                    'use strict';
                    var n,
                        o,
                        i,
                        a,
                        l = r(1924),
                        u = r(6410)();
                    if (u) {
                        (n = l('Object.prototype.hasOwnProperty')), (o = l('RegExp.prototype.exec')), (i = {});
                        var s = function () {
                            throw i;
                        };
                        (a = { toString: s, valueOf: s }),
                            'symbol' == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = s);
                    }
                    var c = l('Object.prototype.toString'),
                        f = Object.getOwnPropertyDescriptor;
                    t.exports = u
                        ? function (t) {
                              if (!t || 'object' != typeof t) return !1;
                              var e = f(t, 'lastIndex');
                              if (!e || !n(e, 'value')) return !1;
                              try {
                                  o(t, a);
                              } catch (t) {
                                  return t === i;
                              }
                          }
                        : function (t) {
                              return (
                                  !(!t || ('object' != typeof t && 'function' != typeof t)) &&
                                  '[object RegExp]' === c(t)
                              );
                          };
                },
                4244: (t) => {
                    'use strict';
                    var e = function (t) {
                        return t != t;
                    };
                    t.exports = function (t, r) {
                        return 0 === t && 0 === r ? 1 / t == 1 / r : t === r || !(!e(t) || !e(r));
                    };
                },
                609: (t, e, r) => {
                    'use strict';
                    var n = r(4289),
                        o = r(5559),
                        i = r(4244),
                        a = r(5624),
                        l = r(2281),
                        u = o(a(), Object);
                    n(u, { getPolyfill: a, implementation: i, shim: l }), (t.exports = u);
                },
                5624: (t, e, r) => {
                    'use strict';
                    var n = r(4244);
                    t.exports = function () {
                        return 'function' == typeof Object.is ? Object.is : n;
                    };
                },
                2281: (t, e, r) => {
                    'use strict';
                    var n = r(5624),
                        o = r(4289);
                    t.exports = function () {
                        var t = n();
                        return (
                            o(
                                Object,
                                { is: t },
                                {
                                    is: function () {
                                        return Object.is !== t;
                                    },
                                }
                            ),
                            t
                        );
                    };
                },
                8987: (t, e, r) => {
                    'use strict';
                    var n;
                    if (!Object.keys) {
                        var o = Object.prototype.hasOwnProperty,
                            i = Object.prototype.toString,
                            a = r(1414),
                            l = Object.prototype.propertyIsEnumerable,
                            u = !l.call({ toString: null }, 'toString'),
                            s = l.call(function () {}, 'prototype'),
                            c = [
                                'toString',
                                'toLocaleString',
                                'valueOf',
                                'hasOwnProperty',
                                'isPrototypeOf',
                                'propertyIsEnumerable',
                                'constructor',
                            ],
                            f = function (t) {
                                var e = t.constructor;
                                return e && e.prototype === t;
                            },
                            p = {
                                $applicationCache: !0,
                                $console: !0,
                                $external: !0,
                                $frame: !0,
                                $frameElement: !0,
                                $frames: !0,
                                $innerHeight: !0,
                                $innerWidth: !0,
                                $onmozfullscreenchange: !0,
                                $onmozfullscreenerror: !0,
                                $outerHeight: !0,
                                $outerWidth: !0,
                                $pageXOffset: !0,
                                $pageYOffset: !0,
                                $parent: !0,
                                $scrollLeft: !0,
                                $scrollTop: !0,
                                $scrollX: !0,
                                $scrollY: !0,
                                $self: !0,
                                $webkitIndexedDB: !0,
                                $webkitStorageInfo: !0,
                                $window: !0,
                            },
                            d = (function () {
                                if ('undefined' == typeof window) return !1;
                                for (var t in window)
                                    try {
                                        if (
                                            !p['$' + t] &&
                                            o.call(window, t) &&
                                            null !== window[t] &&
                                            'object' == typeof window[t]
                                        )
                                            try {
                                                f(window[t]);
                                            } catch (t) {
                                                return !0;
                                            }
                                    } catch (t) {
                                        return !0;
                                    }
                                return !1;
                            })();
                        n = function (t) {
                            var e = null !== t && 'object' == typeof t,
                                r = '[object Function]' === i.call(t),
                                n = a(t),
                                l = e && '[object String]' === i.call(t),
                                p = [];
                            if (!e && !r && !n) throw new TypeError('Object.keys called on a non-object');
                            var h = s && r;
                            if (l && t.length > 0 && !o.call(t, 0))
                                for (var y = 0; y < t.length; ++y) p.push(String(y));
                            if (n && t.length > 0) for (var b = 0; b < t.length; ++b) p.push(String(b));
                            else for (var m in t) (h && 'prototype' === m) || !o.call(t, m) || p.push(String(m));
                            if (u)
                                for (
                                    var v = (function (t) {
                                            if ('undefined' == typeof window || !d) return f(t);
                                            try {
                                                return f(t);
                                            } catch (t) {
                                                return !1;
                                            }
                                        })(t),
                                        g = 0;
                                    g < c.length;
                                    ++g
                                )
                                    (v && 'constructor' === c[g]) || !o.call(t, c[g]) || p.push(c[g]);
                            return p;
                        };
                    }
                    t.exports = n;
                },
                2215: (t, e, r) => {
                    'use strict';
                    var n = Array.prototype.slice,
                        o = r(1414),
                        i = Object.keys,
                        a = i
                            ? function (t) {
                                  return i(t);
                              }
                            : r(8987),
                        l = Object.keys;
                    (a.shim = function () {
                        if (Object.keys) {
                            var t = (function () {
                                var t = Object.keys(arguments);
                                return t && t.length === arguments.length;
                            })(1, 2);
                            t ||
                                (Object.keys = function (t) {
                                    return o(t) ? l(n.call(t)) : l(t);
                                });
                        } else Object.keys = a;
                        return Object.keys || a;
                    }),
                        (t.exports = a);
                },
                1414: (t) => {
                    'use strict';
                    var e = Object.prototype.toString;
                    t.exports = function (t) {
                        var r = e.call(t),
                            n = '[object Arguments]' === r;
                        return (
                            n ||
                                (n =
                                    '[object Array]' !== r &&
                                    null !== t &&
                                    'object' == typeof t &&
                                    'number' == typeof t.length &&
                                    t.length >= 0 &&
                                    '[object Function]' === e.call(t.callee)),
                            n
                        );
                    };
                },
                347: function (t) {
                    var e;
                    'undefined' != typeof self && self,
                        (e = function () {
                            return (function (t) {
                                var e = {};
                                function r(n) {
                                    if (e[n]) return e[n].exports;
                                    var o = (e[n] = { i: n, l: !1, exports: {} });
                                    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
                                }
                                return (
                                    (r.m = t),
                                    (r.c = e),
                                    (r.d = function (t, e, n) {
                                        r.o(t, e) ||
                                            Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
                                    }),
                                    (r.n = function (t) {
                                        var e =
                                            t && t.__esModule
                                                ? function () {
                                                      return t.default;
                                                  }
                                                : function () {
                                                      return t;
                                                  };
                                        return r.d(e, 'a', e), e;
                                    }),
                                    (r.o = function (t, e) {
                                        return Object.prototype.hasOwnProperty.call(t, e);
                                    }),
                                    (r.p = ''),
                                    r((r.s = 9))
                                );
                            })([
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = (function (t) {
                                        function e(e) {
                                            var r = this;
                                            return (
                                                (e = '[Parchment] ' + e),
                                                ((r = t.call(this, e) || this).message = e),
                                                (r.name = r.constructor.name),
                                                r
                                            );
                                        }
                                        return o(e, t), e;
                                    })(Error);
                                    e.ParchmentError = i;
                                    var a,
                                        l = {},
                                        u = {},
                                        s = {},
                                        c = {};
                                    function f(t, e) {
                                        var r;
                                        if ((void 0 === e && (e = a.ANY), 'string' == typeof t)) r = c[t] || l[t];
                                        else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) r = c.text;
                                        else if ('number' == typeof t)
                                            t & a.LEVEL & a.BLOCK
                                                ? (r = c.block)
                                                : t & a.LEVEL & a.INLINE && (r = c.inline);
                                        else if (t instanceof HTMLElement) {
                                            var n = (t.getAttribute('class') || '').split(/\s+/);
                                            for (var o in n) if ((r = u[n[o]])) break;
                                            r = r || s[t.tagName];
                                        }
                                        return null == r
                                            ? null
                                            : e & a.LEVEL & r.scope && e & a.TYPE & r.scope
                                            ? r
                                            : null;
                                    }
                                    (e.DATA_KEY = '__blot'),
                                        (function (t) {
                                            (t[(t.TYPE = 3)] = 'TYPE'),
                                                (t[(t.LEVEL = 12)] = 'LEVEL'),
                                                (t[(t.ATTRIBUTE = 13)] = 'ATTRIBUTE'),
                                                (t[(t.BLOT = 14)] = 'BLOT'),
                                                (t[(t.INLINE = 7)] = 'INLINE'),
                                                (t[(t.BLOCK = 11)] = 'BLOCK'),
                                                (t[(t.BLOCK_BLOT = 10)] = 'BLOCK_BLOT'),
                                                (t[(t.INLINE_BLOT = 6)] = 'INLINE_BLOT'),
                                                (t[(t.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE'),
                                                (t[(t.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE'),
                                                (t[(t.ANY = 15)] = 'ANY');
                                        })((a = e.Scope || (e.Scope = {}))),
                                        (e.create = function (t, e) {
                                            var r = f(t);
                                            if (null == r) throw new i('Unable to create ' + t + ' blot');
                                            var n = r,
                                                o =
                                                    t instanceof Node || t.nodeType === Node.TEXT_NODE
                                                        ? t
                                                        : n.create(e);
                                            return new n(o, e);
                                        }),
                                        (e.find = function t(r, n) {
                                            return (
                                                void 0 === n && (n = !1),
                                                null == r
                                                    ? null
                                                    : null != r[e.DATA_KEY]
                                                    ? r[e.DATA_KEY].blot
                                                    : n
                                                    ? t(r.parentNode, n)
                                                    : null
                                            );
                                        }),
                                        (e.query = f),
                                        (e.register = function t() {
                                            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                            if (e.length > 1)
                                                return e.map(function (e) {
                                                    return t(e);
                                                });
                                            var n = e[0];
                                            if ('string' != typeof n.blotName && 'string' != typeof n.attrName)
                                                throw new i('Invalid definition');
                                            if ('abstract' === n.blotName)
                                                throw new i('Cannot register abstract class');
                                            return (
                                                (c[n.blotName || n.attrName] = n),
                                                'string' == typeof n.keyName
                                                    ? (l[n.keyName] = n)
                                                    : (null != n.className && (u[n.className] = n),
                                                      null != n.tagName &&
                                                          (Array.isArray(n.tagName)
                                                              ? (n.tagName = n.tagName.map(function (t) {
                                                                    return t.toUpperCase();
                                                                }))
                                                              : (n.tagName = n.tagName.toUpperCase()),
                                                          (Array.isArray(n.tagName) ? n.tagName : [n.tagName]).forEach(
                                                              function (t) {
                                                                  (null != s[t] && null != n.className) || (s[t] = n);
                                                              }
                                                          ))),
                                                n
                                            );
                                        });
                                },
                                function (t, e, r) {
                                    'use strict';
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var n = r(0),
                                        o = (function () {
                                            function t(t, e, r) {
                                                void 0 === r && (r = {}), (this.attrName = t), (this.keyName = e);
                                                var o = n.Scope.TYPE & n.Scope.ATTRIBUTE;
                                                null != r.scope
                                                    ? (this.scope = (r.scope & n.Scope.LEVEL) | o)
                                                    : (this.scope = n.Scope.ATTRIBUTE),
                                                    null != r.whitelist && (this.whitelist = r.whitelist);
                                            }
                                            return (
                                                (t.keys = function (t) {
                                                    return [].map.call(t.attributes, function (t) {
                                                        return t.name;
                                                    });
                                                }),
                                                (t.prototype.add = function (t, e) {
                                                    return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
                                                }),
                                                (t.prototype.canAdd = function (t, e) {
                                                    return (
                                                        null !=
                                                            n.query(t, n.Scope.BLOT & (this.scope | n.Scope.TYPE)) &&
                                                        (null == this.whitelist ||
                                                            ('string' == typeof e
                                                                ? this.whitelist.indexOf(e.replace(/["']/g, '')) > -1
                                                                : this.whitelist.indexOf(e) > -1))
                                                    );
                                                }),
                                                (t.prototype.remove = function (t) {
                                                    t.removeAttribute(this.keyName);
                                                }),
                                                (t.prototype.value = function (t) {
                                                    var e = t.getAttribute(this.keyName);
                                                    return this.canAdd(t, e) && e ? e : '';
                                                }),
                                                t
                                            );
                                        })();
                                    e.default = o;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(11),
                                        a = r(5),
                                        l = r(0),
                                        u = (function (t) {
                                            function e(e) {
                                                var r = t.call(this, e) || this;
                                                return r.build(), r;
                                            }
                                            return (
                                                o(e, t),
                                                (e.prototype.appendChild = function (t) {
                                                    this.insertBefore(t);
                                                }),
                                                (e.prototype.attach = function () {
                                                    t.prototype.attach.call(this),
                                                        this.children.forEach(function (t) {
                                                            t.attach();
                                                        });
                                                }),
                                                (e.prototype.build = function () {
                                                    var t = this;
                                                    (this.children = new i.default()),
                                                        [].slice
                                                            .call(this.domNode.childNodes)
                                                            .reverse()
                                                            .forEach(function (e) {
                                                                try {
                                                                    var r = s(e);
                                                                    t.insertBefore(r, t.children.head || void 0);
                                                                } catch (t) {
                                                                    if (t instanceof l.ParchmentError) return;
                                                                    throw t;
                                                                }
                                                            });
                                                }),
                                                (e.prototype.deleteAt = function (t, e) {
                                                    if (0 === t && e === this.length()) return this.remove();
                                                    this.children.forEachAt(t, e, function (t, e, r) {
                                                        t.deleteAt(e, r);
                                                    });
                                                }),
                                                (e.prototype.descendant = function (t, r) {
                                                    var n = this.children.find(r),
                                                        o = n[0],
                                                        i = n[1];
                                                    return (null == t.blotName && t(o)) ||
                                                        (null != t.blotName && o instanceof t)
                                                        ? [o, i]
                                                        : o instanceof e
                                                        ? o.descendant(t, i)
                                                        : [null, -1];
                                                }),
                                                (e.prototype.descendants = function (t, r, n) {
                                                    void 0 === r && (r = 0), void 0 === n && (n = Number.MAX_VALUE);
                                                    var o = [],
                                                        i = n;
                                                    return (
                                                        this.children.forEachAt(r, n, function (r, n, a) {
                                                            ((null == t.blotName && t(r)) ||
                                                                (null != t.blotName && r instanceof t)) &&
                                                                o.push(r),
                                                                r instanceof e &&
                                                                    (o = o.concat(r.descendants(t, n, i))),
                                                                (i -= a);
                                                        }),
                                                        o
                                                    );
                                                }),
                                                (e.prototype.detach = function () {
                                                    this.children.forEach(function (t) {
                                                        t.detach();
                                                    }),
                                                        t.prototype.detach.call(this);
                                                }),
                                                (e.prototype.formatAt = function (t, e, r, n) {
                                                    this.children.forEachAt(t, e, function (t, e, o) {
                                                        t.formatAt(e, o, r, n);
                                                    });
                                                }),
                                                (e.prototype.insertAt = function (t, e, r) {
                                                    var n = this.children.find(t),
                                                        o = n[0],
                                                        i = n[1];
                                                    if (o) o.insertAt(i, e, r);
                                                    else {
                                                        var a = null == r ? l.create('text', e) : l.create(e, r);
                                                        this.appendChild(a);
                                                    }
                                                }),
                                                (e.prototype.insertBefore = function (t, e) {
                                                    if (
                                                        null != this.statics.allowedChildren &&
                                                        !this.statics.allowedChildren.some(function (e) {
                                                            return t instanceof e;
                                                        })
                                                    )
                                                        throw new l.ParchmentError(
                                                            'Cannot insert ' +
                                                                t.statics.blotName +
                                                                ' into ' +
                                                                this.statics.blotName
                                                        );
                                                    t.insertInto(this, e);
                                                }),
                                                (e.prototype.length = function () {
                                                    return this.children.reduce(function (t, e) {
                                                        return t + e.length();
                                                    }, 0);
                                                }),
                                                (e.prototype.moveChildren = function (t, e) {
                                                    this.children.forEach(function (r) {
                                                        t.insertBefore(r, e);
                                                    });
                                                }),
                                                (e.prototype.optimize = function (e) {
                                                    if (
                                                        (t.prototype.optimize.call(this, e), 0 === this.children.length)
                                                    )
                                                        if (null != this.statics.defaultChild) {
                                                            var r = l.create(this.statics.defaultChild);
                                                            this.appendChild(r), r.optimize(e);
                                                        } else this.remove();
                                                }),
                                                (e.prototype.path = function (t, r) {
                                                    void 0 === r && (r = !1);
                                                    var n = this.children.find(t, r),
                                                        o = n[0],
                                                        i = n[1],
                                                        a = [[this, t]];
                                                    return o instanceof e
                                                        ? a.concat(o.path(i, r))
                                                        : (null != o && a.push([o, i]), a);
                                                }),
                                                (e.prototype.removeChild = function (t) {
                                                    this.children.remove(t);
                                                }),
                                                (e.prototype.replace = function (r) {
                                                    r instanceof e && r.moveChildren(this),
                                                        t.prototype.replace.call(this, r);
                                                }),
                                                (e.prototype.split = function (t, e) {
                                                    if ((void 0 === e && (e = !1), !e)) {
                                                        if (0 === t) return this;
                                                        if (t === this.length()) return this.next;
                                                    }
                                                    var r = this.clone();
                                                    return (
                                                        this.parent.insertBefore(r, this.next),
                                                        this.children.forEachAt(t, this.length(), function (t, n, o) {
                                                            (t = t.split(n, e)), r.appendChild(t);
                                                        }),
                                                        r
                                                    );
                                                }),
                                                (e.prototype.unwrap = function () {
                                                    this.moveChildren(this.parent, this.next), this.remove();
                                                }),
                                                (e.prototype.update = function (t, e) {
                                                    var r = this,
                                                        n = [],
                                                        o = [];
                                                    t.forEach(function (t) {
                                                        t.target === r.domNode &&
                                                            'childList' === t.type &&
                                                            (n.push.apply(n, t.addedNodes),
                                                            o.push.apply(o, t.removedNodes));
                                                    }),
                                                        o.forEach(function (t) {
                                                            if (
                                                                !(
                                                                    null != t.parentNode &&
                                                                    'IFRAME' !== t.tagName &&
                                                                    document.body.compareDocumentPosition(t) &
                                                                        Node.DOCUMENT_POSITION_CONTAINED_BY
                                                                )
                                                            ) {
                                                                var e = l.find(t);
                                                                null != e &&
                                                                    ((null != e.domNode.parentNode &&
                                                                        e.domNode.parentNode !== r.domNode) ||
                                                                        e.detach());
                                                            }
                                                        }),
                                                        n
                                                            .filter(function (t) {
                                                                return t.parentNode == r.domNode;
                                                            })
                                                            .sort(function (t, e) {
                                                                return t === e
                                                                    ? 0
                                                                    : t.compareDocumentPosition(e) &
                                                                      Node.DOCUMENT_POSITION_FOLLOWING
                                                                    ? 1
                                                                    : -1;
                                                            })
                                                            .forEach(function (t) {
                                                                var e = null;
                                                                null != t.nextSibling && (e = l.find(t.nextSibling));
                                                                var n = s(t);
                                                                (n.next == e && null != n.next) ||
                                                                    (null != n.parent && n.parent.removeChild(r),
                                                                    r.insertBefore(n, e || void 0));
                                                            });
                                                }),
                                                e
                                            );
                                        })(a.default);
                                    function s(t) {
                                        var e = l.find(t);
                                        if (null == e)
                                            try {
                                                e = l.create(t);
                                            } catch (r) {
                                                (e = l.create(l.Scope.INLINE)),
                                                    [].slice.call(t.childNodes).forEach(function (t) {
                                                        e.domNode.appendChild(t);
                                                    }),
                                                    t.parentNode && t.parentNode.replaceChild(e.domNode, t),
                                                    e.attach();
                                            }
                                        return e;
                                    }
                                    e.default = u;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(1),
                                        a = r(6),
                                        l = r(2),
                                        u = r(0),
                                        s = (function (t) {
                                            function e(e) {
                                                var r = t.call(this, e) || this;
                                                return (r.attributes = new a.default(r.domNode)), r;
                                            }
                                            return (
                                                o(e, t),
                                                (e.formats = function (t) {
                                                    return (
                                                        'string' == typeof this.tagName ||
                                                        (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                                                    );
                                                }),
                                                (e.prototype.format = function (t, e) {
                                                    var r = u.query(t);
                                                    r instanceof i.default
                                                        ? this.attributes.attribute(r, e)
                                                        : e &&
                                                          (null == r ||
                                                              (t === this.statics.blotName &&
                                                                  this.formats()[t] === e) ||
                                                              this.replaceWith(t, e));
                                                }),
                                                (e.prototype.formats = function () {
                                                    var t = this.attributes.values(),
                                                        e = this.statics.formats(this.domNode);
                                                    return null != e && (t[this.statics.blotName] = e), t;
                                                }),
                                                (e.prototype.replaceWith = function (e, r) {
                                                    var n = t.prototype.replaceWith.call(this, e, r);
                                                    return this.attributes.copy(n), n;
                                                }),
                                                (e.prototype.update = function (e, r) {
                                                    var n = this;
                                                    t.prototype.update.call(this, e, r),
                                                        e.some(function (t) {
                                                            return t.target === n.domNode && 'attributes' === t.type;
                                                        }) && this.attributes.build();
                                                }),
                                                (e.prototype.wrap = function (r, n) {
                                                    var o = t.prototype.wrap.call(this, r, n);
                                                    return (
                                                        o instanceof e &&
                                                            o.statics.scope === this.statics.scope &&
                                                            this.attributes.move(o),
                                                        o
                                                    );
                                                }),
                                                e
                                            );
                                        })(l.default);
                                    e.default = s;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(5),
                                        a = r(0),
                                        l = (function (t) {
                                            function e() {
                                                return (null !== t && t.apply(this, arguments)) || this;
                                            }
                                            return (
                                                o(e, t),
                                                (e.value = function (t) {
                                                    return !0;
                                                }),
                                                (e.prototype.index = function (t, e) {
                                                    return this.domNode === t ||
                                                        this.domNode.compareDocumentPosition(t) &
                                                            Node.DOCUMENT_POSITION_CONTAINED_BY
                                                        ? Math.min(e, 1)
                                                        : -1;
                                                }),
                                                (e.prototype.position = function (t, e) {
                                                    var r = [].indexOf.call(
                                                        this.parent.domNode.childNodes,
                                                        this.domNode
                                                    );
                                                    return t > 0 && (r += 1), [this.parent.domNode, r];
                                                }),
                                                (e.prototype.value = function () {
                                                    return (
                                                        ((t = {})[this.statics.blotName] =
                                                            this.statics.value(this.domNode) || !0),
                                                        t
                                                    );
                                                    var t;
                                                }),
                                                (e.scope = a.Scope.INLINE_BLOT),
                                                e
                                            );
                                        })(i.default);
                                    e.default = l;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var n = r(0),
                                        o = (function () {
                                            function t(t) {
                                                (this.domNode = t), (this.domNode[n.DATA_KEY] = { blot: this });
                                            }
                                            return (
                                                Object.defineProperty(t.prototype, 'statics', {
                                                    get: function () {
                                                        return this.constructor;
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                }),
                                                (t.create = function (t) {
                                                    if (null == this.tagName)
                                                        throw new n.ParchmentError('Blot definition missing tagName');
                                                    var e;
                                                    return (
                                                        Array.isArray(this.tagName)
                                                            ? ('string' == typeof t &&
                                                                  ((t = t.toUpperCase()),
                                                                  parseInt(t).toString() === t && (t = parseInt(t))),
                                                              (e =
                                                                  'number' == typeof t
                                                                      ? document.createElement(this.tagName[t - 1])
                                                                      : this.tagName.indexOf(t) > -1
                                                                      ? document.createElement(t)
                                                                      : document.createElement(this.tagName[0])))
                                                            : (e = document.createElement(this.tagName)),
                                                        this.className && e.classList.add(this.className),
                                                        e
                                                    );
                                                }),
                                                (t.prototype.attach = function () {
                                                    null != this.parent && (this.scroll = this.parent.scroll);
                                                }),
                                                (t.prototype.clone = function () {
                                                    var t = this.domNode.cloneNode(!1);
                                                    return n.create(t);
                                                }),
                                                (t.prototype.detach = function () {
                                                    null != this.parent && this.parent.removeChild(this),
                                                        delete this.domNode[n.DATA_KEY];
                                                }),
                                                (t.prototype.deleteAt = function (t, e) {
                                                    this.isolate(t, e).remove();
                                                }),
                                                (t.prototype.formatAt = function (t, e, r, o) {
                                                    var i = this.isolate(t, e);
                                                    if (null != n.query(r, n.Scope.BLOT) && o) i.wrap(r, o);
                                                    else if (null != n.query(r, n.Scope.ATTRIBUTE)) {
                                                        var a = n.create(this.statics.scope);
                                                        i.wrap(a), a.format(r, o);
                                                    }
                                                }),
                                                (t.prototype.insertAt = function (t, e, r) {
                                                    var o = null == r ? n.create('text', e) : n.create(e, r),
                                                        i = this.split(t);
                                                    this.parent.insertBefore(o, i);
                                                }),
                                                (t.prototype.insertInto = function (t, e) {
                                                    void 0 === e && (e = null),
                                                        null != this.parent && this.parent.children.remove(this);
                                                    var r = null;
                                                    t.children.insertBefore(this, e),
                                                        null != e && (r = e.domNode),
                                                        (this.domNode.parentNode == t.domNode &&
                                                            this.domNode.nextSibling == r) ||
                                                            t.domNode.insertBefore(this.domNode, r),
                                                        (this.parent = t),
                                                        this.attach();
                                                }),
                                                (t.prototype.isolate = function (t, e) {
                                                    var r = this.split(t);
                                                    return r.split(e), r;
                                                }),
                                                (t.prototype.length = function () {
                                                    return 1;
                                                }),
                                                (t.prototype.offset = function (t) {
                                                    return (
                                                        void 0 === t && (t = this.parent),
                                                        null == this.parent || this == t
                                                            ? 0
                                                            : this.parent.children.offset(this) + this.parent.offset(t)
                                                    );
                                                }),
                                                (t.prototype.optimize = function (t) {
                                                    null != this.domNode[n.DATA_KEY] &&
                                                        delete this.domNode[n.DATA_KEY].mutations;
                                                }),
                                                (t.prototype.remove = function () {
                                                    null != this.domNode.parentNode &&
                                                        this.domNode.parentNode.removeChild(this.domNode),
                                                        this.detach();
                                                }),
                                                (t.prototype.replace = function (t) {
                                                    null != t.parent &&
                                                        (t.parent.insertBefore(this, t.next), t.remove());
                                                }),
                                                (t.prototype.replaceWith = function (t, e) {
                                                    var r = 'string' == typeof t ? n.create(t, e) : t;
                                                    return r.replace(this), r;
                                                }),
                                                (t.prototype.split = function (t, e) {
                                                    return 0 === t ? this : this.next;
                                                }),
                                                (t.prototype.update = function (t, e) {}),
                                                (t.prototype.wrap = function (t, e) {
                                                    var r = 'string' == typeof t ? n.create(t, e) : t;
                                                    return (
                                                        null != this.parent && this.parent.insertBefore(r, this.next),
                                                        r.appendChild(this),
                                                        r
                                                    );
                                                }),
                                                (t.blotName = 'abstract'),
                                                t
                                            );
                                        })();
                                    e.default = o;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var n = r(1),
                                        o = r(7),
                                        i = r(8),
                                        a = r(0),
                                        l = (function () {
                                            function t(t) {
                                                (this.attributes = {}), (this.domNode = t), this.build();
                                            }
                                            return (
                                                (t.prototype.attribute = function (t, e) {
                                                    e
                                                        ? t.add(this.domNode, e) &&
                                                          (null != t.value(this.domNode)
                                                              ? (this.attributes[t.attrName] = t)
                                                              : delete this.attributes[t.attrName])
                                                        : (t.remove(this.domNode), delete this.attributes[t.attrName]);
                                                }),
                                                (t.prototype.build = function () {
                                                    var t = this;
                                                    this.attributes = {};
                                                    var e = n.default.keys(this.domNode),
                                                        r = o.default.keys(this.domNode),
                                                        l = i.default.keys(this.domNode);
                                                    e.concat(r)
                                                        .concat(l)
                                                        .forEach(function (e) {
                                                            var r = a.query(e, a.Scope.ATTRIBUTE);
                                                            r instanceof n.default && (t.attributes[r.attrName] = r);
                                                        });
                                                }),
                                                (t.prototype.copy = function (t) {
                                                    var e = this;
                                                    Object.keys(this.attributes).forEach(function (r) {
                                                        var n = e.attributes[r].value(e.domNode);
                                                        t.format(r, n);
                                                    });
                                                }),
                                                (t.prototype.move = function (t) {
                                                    var e = this;
                                                    this.copy(t),
                                                        Object.keys(this.attributes).forEach(function (t) {
                                                            e.attributes[t].remove(e.domNode);
                                                        }),
                                                        (this.attributes = {});
                                                }),
                                                (t.prototype.values = function () {
                                                    var t = this;
                                                    return Object.keys(this.attributes).reduce(function (e, r) {
                                                        return (e[r] = t.attributes[r].value(t.domNode)), e;
                                                    }, {});
                                                }),
                                                t
                                            );
                                        })();
                                    e.default = l;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    function i(t, e) {
                                        return (t.getAttribute('class') || '').split(/\s+/).filter(function (t) {
                                            return 0 === t.indexOf(e + '-');
                                        });
                                    }
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var a = (function (t) {
                                        function e() {
                                            return (null !== t && t.apply(this, arguments)) || this;
                                        }
                                        return (
                                            o(e, t),
                                            (e.keys = function (t) {
                                                return (t.getAttribute('class') || '').split(/\s+/).map(function (t) {
                                                    return t.split('-').slice(0, -1).join('-');
                                                });
                                            }),
                                            (e.prototype.add = function (t, e) {
                                                return (
                                                    !!this.canAdd(t, e) &&
                                                    (this.remove(t), t.classList.add(this.keyName + '-' + e), !0)
                                                );
                                            }),
                                            (e.prototype.remove = function (t) {
                                                i(t, this.keyName).forEach(function (e) {
                                                    t.classList.remove(e);
                                                }),
                                                    0 === t.classList.length && t.removeAttribute('class');
                                            }),
                                            (e.prototype.value = function (t) {
                                                var e = (i(t, this.keyName)[0] || '').slice(this.keyName.length + 1);
                                                return this.canAdd(t, e) ? e : '';
                                            }),
                                            e
                                        );
                                    })(r(1).default);
                                    e.default = a;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    function i(t) {
                                        var e = t.split('-'),
                                            r = e
                                                .slice(1)
                                                .map(function (t) {
                                                    return t[0].toUpperCase() + t.slice(1);
                                                })
                                                .join('');
                                        return e[0] + r;
                                    }
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var a = (function (t) {
                                        function e() {
                                            return (null !== t && t.apply(this, arguments)) || this;
                                        }
                                        return (
                                            o(e, t),
                                            (e.keys = function (t) {
                                                return (t.getAttribute('style') || '').split(';').map(function (t) {
                                                    return t.split(':')[0].trim();
                                                });
                                            }),
                                            (e.prototype.add = function (t, e) {
                                                return !!this.canAdd(t, e) && ((t.style[i(this.keyName)] = e), !0);
                                            }),
                                            (e.prototype.remove = function (t) {
                                                (t.style[i(this.keyName)] = ''),
                                                    t.getAttribute('style') || t.removeAttribute('style');
                                            }),
                                            (e.prototype.value = function (t) {
                                                var e = t.style[i(this.keyName)];
                                                return this.canAdd(t, e) ? e : '';
                                            }),
                                            e
                                        );
                                    })(r(1).default);
                                    e.default = a;
                                },
                                function (t, e, r) {
                                    t.exports = r(10);
                                },
                                function (t, e, r) {
                                    'use strict';
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var n = r(2),
                                        o = r(3),
                                        i = r(4),
                                        a = r(12),
                                        l = r(13),
                                        u = r(14),
                                        s = r(15),
                                        c = r(16),
                                        f = r(1),
                                        p = r(7),
                                        d = r(8),
                                        h = r(6),
                                        y = r(0),
                                        b = {
                                            Scope: y.Scope,
                                            create: y.create,
                                            find: y.find,
                                            query: y.query,
                                            register: y.register,
                                            Container: n.default,
                                            Format: o.default,
                                            Leaf: i.default,
                                            Embed: s.default,
                                            Scroll: a.default,
                                            Block: u.default,
                                            Inline: l.default,
                                            Text: c.default,
                                            Attributor: {
                                                Attribute: f.default,
                                                Class: p.default,
                                                Style: d.default,
                                                Store: h.default,
                                            },
                                        };
                                    e.default = b;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var n = (function () {
                                        function t() {
                                            (this.head = this.tail = null), (this.length = 0);
                                        }
                                        return (
                                            (t.prototype.append = function () {
                                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                                this.insertBefore(t[0], null),
                                                    t.length > 1 && this.append.apply(this, t.slice(1));
                                            }),
                                            (t.prototype.contains = function (t) {
                                                for (var e, r = this.iterator(); (e = r()); ) if (e === t) return !0;
                                                return !1;
                                            }),
                                            (t.prototype.insertBefore = function (t, e) {
                                                t &&
                                                    ((t.next = e),
                                                    null != e
                                                        ? ((t.prev = e.prev),
                                                          null != e.prev && (e.prev.next = t),
                                                          (e.prev = t),
                                                          e === this.head && (this.head = t))
                                                        : null != this.tail
                                                        ? ((this.tail.next = t), (t.prev = this.tail), (this.tail = t))
                                                        : ((t.prev = null), (this.head = this.tail = t)),
                                                    (this.length += 1));
                                            }),
                                            (t.prototype.offset = function (t) {
                                                for (var e = 0, r = this.head; null != r; ) {
                                                    if (r === t) return e;
                                                    (e += r.length()), (r = r.next);
                                                }
                                                return -1;
                                            }),
                                            (t.prototype.remove = function (t) {
                                                this.contains(t) &&
                                                    (null != t.prev && (t.prev.next = t.next),
                                                    null != t.next && (t.next.prev = t.prev),
                                                    t === this.head && (this.head = t.next),
                                                    t === this.tail && (this.tail = t.prev),
                                                    (this.length -= 1));
                                            }),
                                            (t.prototype.iterator = function (t) {
                                                return (
                                                    void 0 === t && (t = this.head),
                                                    function () {
                                                        var e = t;
                                                        return null != t && (t = t.next), e;
                                                    }
                                                );
                                            }),
                                            (t.prototype.find = function (t, e) {
                                                void 0 === e && (e = !1);
                                                for (var r, n = this.iterator(); (r = n()); ) {
                                                    var o = r.length();
                                                    if (
                                                        t < o ||
                                                        (e && t === o && (null == r.next || 0 !== r.next.length()))
                                                    )
                                                        return [r, t];
                                                    t -= o;
                                                }
                                                return [null, 0];
                                            }),
                                            (t.prototype.forEach = function (t) {
                                                for (var e, r = this.iterator(); (e = r()); ) t(e);
                                            }),
                                            (t.prototype.forEachAt = function (t, e, r) {
                                                if (!(e <= 0))
                                                    for (
                                                        var n,
                                                            o = this.find(t),
                                                            i = o[0],
                                                            a = t - o[1],
                                                            l = this.iterator(i);
                                                        (n = l()) && a < t + e;

                                                    ) {
                                                        var u = n.length();
                                                        t > a
                                                            ? r(n, t - a, Math.min(e, a + u - t))
                                                            : r(n, 0, Math.min(u, t + e - a)),
                                                            (a += u);
                                                    }
                                            }),
                                            (t.prototype.map = function (t) {
                                                return this.reduce(function (e, r) {
                                                    return e.push(t(r)), e;
                                                }, []);
                                            }),
                                            (t.prototype.reduce = function (t, e) {
                                                for (var r, n = this.iterator(); (r = n()); ) e = t(e, r);
                                                return e;
                                            }),
                                            t
                                        );
                                    })();
                                    e.default = n;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(2),
                                        a = r(0),
                                        l = {
                                            attributes: !0,
                                            characterData: !0,
                                            characterDataOldValue: !0,
                                            childList: !0,
                                            subtree: !0,
                                        },
                                        u = (function (t) {
                                            function e(e) {
                                                var r = t.call(this, e) || this;
                                                return (
                                                    (r.scroll = r),
                                                    (r.observer = new MutationObserver(function (t) {
                                                        r.update(t);
                                                    })),
                                                    r.observer.observe(r.domNode, l),
                                                    r.attach(),
                                                    r
                                                );
                                            }
                                            return (
                                                o(e, t),
                                                (e.prototype.detach = function () {
                                                    t.prototype.detach.call(this), this.observer.disconnect();
                                                }),
                                                (e.prototype.deleteAt = function (e, r) {
                                                    this.update(),
                                                        0 === e && r === this.length()
                                                            ? this.children.forEach(function (t) {
                                                                  t.remove();
                                                              })
                                                            : t.prototype.deleteAt.call(this, e, r);
                                                }),
                                                (e.prototype.formatAt = function (e, r, n, o) {
                                                    this.update(), t.prototype.formatAt.call(this, e, r, n, o);
                                                }),
                                                (e.prototype.insertAt = function (e, r, n) {
                                                    this.update(), t.prototype.insertAt.call(this, e, r, n);
                                                }),
                                                (e.prototype.optimize = function (e, r) {
                                                    var n = this;
                                                    void 0 === e && (e = []),
                                                        void 0 === r && (r = {}),
                                                        t.prototype.optimize.call(this, r);
                                                    for (
                                                        var o = [].slice.call(this.observer.takeRecords());
                                                        o.length > 0;

                                                    )
                                                        e.push(o.pop());
                                                    for (
                                                        var l = function (t, e) {
                                                                void 0 === e && (e = !0),
                                                                    null != t &&
                                                                        t !== n &&
                                                                        null != t.domNode.parentNode &&
                                                                        (null == t.domNode[a.DATA_KEY].mutations &&
                                                                            (t.domNode[a.DATA_KEY].mutations = []),
                                                                        e && l(t.parent));
                                                            },
                                                            u = function (t) {
                                                                null != t.domNode[a.DATA_KEY] &&
                                                                    null != t.domNode[a.DATA_KEY].mutations &&
                                                                    (t instanceof i.default && t.children.forEach(u),
                                                                    t.optimize(r));
                                                            },
                                                            s = e,
                                                            c = 0;
                                                        s.length > 0;
                                                        c += 1
                                                    ) {
                                                        if (c >= 100)
                                                            throw new Error(
                                                                '[Parchment] Maximum optimize iterations reached'
                                                            );
                                                        for (
                                                            s.forEach(function (t) {
                                                                var e = a.find(t.target, !0);
                                                                null != e &&
                                                                    (e.domNode === t.target &&
                                                                        ('childList' === t.type
                                                                            ? (l(a.find(t.previousSibling, !1)),
                                                                              [].forEach.call(
                                                                                  t.addedNodes,
                                                                                  function (t) {
                                                                                      var e = a.find(t, !1);
                                                                                      l(e, !1),
                                                                                          e instanceof i.default &&
                                                                                              e.children.forEach(
                                                                                                  function (t) {
                                                                                                      l(t, !1);
                                                                                                  }
                                                                                              );
                                                                                  }
                                                                              ))
                                                                            : 'attributes' === t.type && l(e.prev)),
                                                                    l(e));
                                                            }),
                                                                this.children.forEach(u),
                                                                o = (s = [].slice.call(
                                                                    this.observer.takeRecords()
                                                                )).slice();
                                                            o.length > 0;

                                                        )
                                                            e.push(o.pop());
                                                    }
                                                }),
                                                (e.prototype.update = function (e, r) {
                                                    var n = this;
                                                    void 0 === r && (r = {}),
                                                        (e = e || this.observer.takeRecords())
                                                            .map(function (t) {
                                                                var e = a.find(t.target, !0);
                                                                return null == e
                                                                    ? null
                                                                    : null == e.domNode[a.DATA_KEY].mutations
                                                                    ? ((e.domNode[a.DATA_KEY].mutations = [t]), e)
                                                                    : (e.domNode[a.DATA_KEY].mutations.push(t), null);
                                                            })
                                                            .forEach(function (t) {
                                                                null != t &&
                                                                    t !== n &&
                                                                    null != t.domNode[a.DATA_KEY] &&
                                                                    t.update(t.domNode[a.DATA_KEY].mutations || [], r);
                                                            }),
                                                        null != this.domNode[a.DATA_KEY].mutations &&
                                                            t.prototype.update.call(
                                                                this,
                                                                this.domNode[a.DATA_KEY].mutations,
                                                                r
                                                            ),
                                                        this.optimize(e, r);
                                                }),
                                                (e.blotName = 'scroll'),
                                                (e.defaultChild = 'block'),
                                                (e.scope = a.Scope.BLOCK_BLOT),
                                                (e.tagName = 'DIV'),
                                                e
                                            );
                                        })(i.default);
                                    e.default = u;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(3),
                                        a = r(0),
                                        l = (function (t) {
                                            function e() {
                                                return (null !== t && t.apply(this, arguments)) || this;
                                            }
                                            return (
                                                o(e, t),
                                                (e.formats = function (r) {
                                                    if (r.tagName !== e.tagName) return t.formats.call(this, r);
                                                }),
                                                (e.prototype.format = function (r, n) {
                                                    var o = this;
                                                    r !== this.statics.blotName || n
                                                        ? t.prototype.format.call(this, r, n)
                                                        : (this.children.forEach(function (t) {
                                                              t instanceof i.default || (t = t.wrap(e.blotName, !0)),
                                                                  o.attributes.copy(t);
                                                          }),
                                                          this.unwrap());
                                                }),
                                                (e.prototype.formatAt = function (e, r, n, o) {
                                                    null != this.formats()[n] || a.query(n, a.Scope.ATTRIBUTE)
                                                        ? this.isolate(e, r).format(n, o)
                                                        : t.prototype.formatAt.call(this, e, r, n, o);
                                                }),
                                                (e.prototype.optimize = function (r) {
                                                    t.prototype.optimize.call(this, r);
                                                    var n = this.formats();
                                                    if (0 === Object.keys(n).length) return this.unwrap();
                                                    var o = this.next;
                                                    o instanceof e &&
                                                        o.prev === this &&
                                                        (function (t, e) {
                                                            if (Object.keys(t).length !== Object.keys(e).length)
                                                                return !1;
                                                            for (var r in t) if (t[r] !== e[r]) return !1;
                                                            return !0;
                                                        })(n, o.formats()) &&
                                                        (o.moveChildren(this), o.remove());
                                                }),
                                                (e.blotName = 'inline'),
                                                (e.scope = a.Scope.INLINE_BLOT),
                                                (e.tagName = 'SPAN'),
                                                e
                                            );
                                        })(i.default);
                                    e.default = l;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(3),
                                        a = r(0),
                                        l = (function (t) {
                                            function e() {
                                                return (null !== t && t.apply(this, arguments)) || this;
                                            }
                                            return (
                                                o(e, t),
                                                (e.formats = function (r) {
                                                    var n = a.query(e.blotName).tagName;
                                                    if (r.tagName !== n) return t.formats.call(this, r);
                                                }),
                                                (e.prototype.format = function (r, n) {
                                                    null != a.query(r, a.Scope.BLOCK) &&
                                                        (r !== this.statics.blotName || n
                                                            ? t.prototype.format.call(this, r, n)
                                                            : this.replaceWith(e.blotName));
                                                }),
                                                (e.prototype.formatAt = function (e, r, n, o) {
                                                    null != a.query(n, a.Scope.BLOCK)
                                                        ? this.format(n, o)
                                                        : t.prototype.formatAt.call(this, e, r, n, o);
                                                }),
                                                (e.prototype.insertAt = function (e, r, n) {
                                                    if (null == n || null != a.query(r, a.Scope.INLINE))
                                                        t.prototype.insertAt.call(this, e, r, n);
                                                    else {
                                                        var o = this.split(e),
                                                            i = a.create(r, n);
                                                        o.parent.insertBefore(i, o);
                                                    }
                                                }),
                                                (e.prototype.update = function (e, r) {
                                                    navigator.userAgent.match(/Trident/)
                                                        ? this.build()
                                                        : t.prototype.update.call(this, e, r);
                                                }),
                                                (e.blotName = 'block'),
                                                (e.scope = a.Scope.BLOCK_BLOT),
                                                (e.tagName = 'P'),
                                                e
                                            );
                                        })(i.default);
                                    e.default = l;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = (function (t) {
                                        function e() {
                                            return (null !== t && t.apply(this, arguments)) || this;
                                        }
                                        return (
                                            o(e, t),
                                            (e.formats = function (t) {}),
                                            (e.prototype.format = function (e, r) {
                                                t.prototype.formatAt.call(this, 0, this.length(), e, r);
                                            }),
                                            (e.prototype.formatAt = function (e, r, n, o) {
                                                0 === e && r === this.length()
                                                    ? this.format(n, o)
                                                    : t.prototype.formatAt.call(this, e, r, n, o);
                                            }),
                                            (e.prototype.formats = function () {
                                                return this.statics.formats(this.domNode);
                                            }),
                                            e
                                        );
                                    })(r(4).default);
                                    e.default = i;
                                },
                                function (t, e, r) {
                                    'use strict';
                                    var n,
                                        o =
                                            (this && this.__extends) ||
                                            ((n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (t, e) {
                                                        t.__proto__ = e;
                                                    }) ||
                                                function (t, e) {
                                                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                                                }),
                                            function (t, e) {
                                                function r() {
                                                    this.constructor = t;
                                                }
                                                n(t, e),
                                                    (t.prototype =
                                                        null === e
                                                            ? Object.create(e)
                                                            : ((r.prototype = e.prototype), new r()));
                                            });
                                    Object.defineProperty(e, '__esModule', { value: !0 });
                                    var i = r(4),
                                        a = r(0),
                                        l = (function (t) {
                                            function e(e) {
                                                var r = t.call(this, e) || this;
                                                return (r.text = r.statics.value(r.domNode)), r;
                                            }
                                            return (
                                                o(e, t),
                                                (e.create = function (t) {
                                                    return document.createTextNode(t);
                                                }),
                                                (e.value = function (t) {
                                                    var e = t.data;
                                                    return e.normalize && (e = e.normalize()), e;
                                                }),
                                                (e.prototype.deleteAt = function (t, e) {
                                                    this.domNode.data = this.text =
                                                        this.text.slice(0, t) + this.text.slice(t + e);
                                                }),
                                                (e.prototype.index = function (t, e) {
                                                    return this.domNode === t ? e : -1;
                                                }),
                                                (e.prototype.insertAt = function (e, r, n) {
                                                    null == n
                                                        ? ((this.text = this.text.slice(0, e) + r + this.text.slice(e)),
                                                          (this.domNode.data = this.text))
                                                        : t.prototype.insertAt.call(this, e, r, n);
                                                }),
                                                (e.prototype.length = function () {
                                                    return this.text.length;
                                                }),
                                                (e.prototype.optimize = function (r) {
                                                    t.prototype.optimize.call(this, r),
                                                        (this.text = this.statics.value(this.domNode)),
                                                        0 === this.text.length
                                                            ? this.remove()
                                                            : this.next instanceof e &&
                                                              this.next.prev === this &&
                                                              (this.insertAt(this.length(), this.next.value()),
                                                              this.next.remove());
                                                }),
                                                (e.prototype.position = function (t, e) {
                                                    return void 0 === e && (e = !1), [this.domNode, t];
                                                }),
                                                (e.prototype.split = function (t, e) {
                                                    if ((void 0 === e && (e = !1), !e)) {
                                                        if (0 === t) return this;
                                                        if (t === this.length()) return this.next;
                                                    }
                                                    var r = a.create(this.domNode.splitText(t));
                                                    return (
                                                        this.parent.insertBefore(r, this.next),
                                                        (this.text = this.statics.value(this.domNode)),
                                                        r
                                                    );
                                                }),
                                                (e.prototype.update = function (t, e) {
                                                    var r = this;
                                                    t.some(function (t) {
                                                        return 'characterData' === t.type && t.target === r.domNode;
                                                    }) && (this.text = this.statics.value(this.domNode));
                                                }),
                                                (e.prototype.value = function () {
                                                    return this.text;
                                                }),
                                                (e.blotName = 'text'),
                                                (e.scope = a.Scope.INLINE_BLOT),
                                                e
                                            );
                                        })(i.default);
                                    e.default = l;
                                },
                            ]);
                        }),
                        (t.exports = e());
                },
                4175: (t, e, r) => {
                    var n = r(7529),
                        o = r(251),
                        i = r(4470),
                        a = r(6910),
                        l = String.fromCharCode(0),
                        u = function (t) {
                            Array.isArray(t)
                                ? (this.ops = t)
                                : null != t && Array.isArray(t.ops)
                                ? (this.ops = t.ops)
                                : (this.ops = []);
                        };
                    (u.prototype.insert = function (t, e) {
                        var r = {};
                        return 0 === t.length
                            ? this
                            : ((r.insert = t),
                              null != e && 'object' == typeof e && Object.keys(e).length > 0 && (r.attributes = e),
                              this.push(r));
                    }),
                        (u.prototype.delete = function (t) {
                            return t <= 0 ? this : this.push({ delete: t });
                        }),
                        (u.prototype.retain = function (t, e) {
                            if (t <= 0) return this;
                            var r = { retain: t };
                            return (
                                null != e && 'object' == typeof e && Object.keys(e).length > 0 && (r.attributes = e),
                                this.push(r)
                            );
                        }),
                        (u.prototype.push = function (t) {
                            var e = this.ops.length,
                                r = this.ops[e - 1];
                            if (((t = i(!0, {}, t)), 'object' == typeof r)) {
                                if ('number' == typeof t.delete && 'number' == typeof r.delete)
                                    return (this.ops[e - 1] = { delete: r.delete + t.delete }), this;
                                if (
                                    'number' == typeof r.delete &&
                                    null != t.insert &&
                                    ((e -= 1), 'object' != typeof (r = this.ops[e - 1]))
                                )
                                    return this.ops.unshift(t), this;
                                if (o(t.attributes, r.attributes)) {
                                    if ('string' == typeof t.insert && 'string' == typeof r.insert)
                                        return (
                                            (this.ops[e - 1] = { insert: r.insert + t.insert }),
                                            'object' == typeof t.attributes &&
                                                (this.ops[e - 1].attributes = t.attributes),
                                            this
                                        );
                                    if ('number' == typeof t.retain && 'number' == typeof r.retain)
                                        return (
                                            (this.ops[e - 1] = { retain: r.retain + t.retain }),
                                            'object' == typeof t.attributes &&
                                                (this.ops[e - 1].attributes = t.attributes),
                                            this
                                        );
                                }
                            }
                            return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this;
                        }),
                        (u.prototype.chop = function () {
                            var t = this.ops[this.ops.length - 1];
                            return t && t.retain && !t.attributes && this.ops.pop(), this;
                        }),
                        (u.prototype.filter = function (t) {
                            return this.ops.filter(t);
                        }),
                        (u.prototype.forEach = function (t) {
                            this.ops.forEach(t);
                        }),
                        (u.prototype.map = function (t) {
                            return this.ops.map(t);
                        }),
                        (u.prototype.partition = function (t) {
                            var e = [],
                                r = [];
                            return (
                                this.forEach(function (n) {
                                    (t(n) ? e : r).push(n);
                                }),
                                [e, r]
                            );
                        }),
                        (u.prototype.reduce = function (t, e) {
                            return this.ops.reduce(t, e);
                        }),
                        (u.prototype.changeLength = function () {
                            return this.reduce(function (t, e) {
                                return e.insert ? t + a.length(e) : e.delete ? t - e.delete : t;
                            }, 0);
                        }),
                        (u.prototype.length = function () {
                            return this.reduce(function (t, e) {
                                return t + a.length(e);
                            }, 0);
                        }),
                        (u.prototype.slice = function (t, e) {
                            (t = t || 0), 'number' != typeof e && (e = 1 / 0);
                            for (var r = [], n = a.iterator(this.ops), o = 0; o < e && n.hasNext(); ) {
                                var i;
                                o < t ? (i = n.next(t - o)) : ((i = n.next(e - o)), r.push(i)), (o += a.length(i));
                            }
                            return new u(r);
                        }),
                        (u.prototype.compose = function (t) {
                            var e = a.iterator(this.ops),
                                r = a.iterator(t.ops),
                                n = [],
                                i = r.peek();
                            if (null != i && 'number' == typeof i.retain && null == i.attributes) {
                                for (var l = i.retain; 'insert' === e.peekType() && e.peekLength() <= l; )
                                    (l -= e.peekLength()), n.push(e.next());
                                i.retain - l > 0 && r.next(i.retain - l);
                            }
                            for (var s = new u(n); e.hasNext() || r.hasNext(); )
                                if ('insert' === r.peekType()) s.push(r.next());
                                else if ('delete' === e.peekType()) s.push(e.next());
                                else {
                                    var c = Math.min(e.peekLength(), r.peekLength()),
                                        f = e.next(c),
                                        p = r.next(c);
                                    if ('number' == typeof p.retain) {
                                        var d = {};
                                        'number' == typeof f.retain ? (d.retain = c) : (d.insert = f.insert);
                                        var h = a.attributes.compose(
                                            f.attributes,
                                            p.attributes,
                                            'number' == typeof f.retain
                                        );
                                        if (
                                            (h && (d.attributes = h),
                                            s.push(d),
                                            !r.hasNext() && o(s.ops[s.ops.length - 1], d))
                                        ) {
                                            var y = new u(e.rest());
                                            return s.concat(y).chop();
                                        }
                                    } else 'number' == typeof p.delete && 'number' == typeof f.retain && s.push(p);
                                }
                            return s.chop();
                        }),
                        (u.prototype.concat = function (t) {
                            var e = new u(this.ops.slice());
                            return t.ops.length > 0 && (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))), e;
                        }),
                        (u.prototype.diff = function (t, e) {
                            if (this.ops === t.ops) return new u();
                            var r = [this, t].map(function (e) {
                                    return e
                                        .map(function (r) {
                                            if (null != r.insert) return 'string' == typeof r.insert ? r.insert : l;
                                            throw new Error(
                                                'diff() called ' + (e === t ? 'on' : 'with') + ' non-document'
                                            );
                                        })
                                        .join('');
                                }),
                                i = new u(),
                                s = n(r[0], r[1], e),
                                c = a.iterator(this.ops),
                                f = a.iterator(t.ops);
                            return (
                                s.forEach(function (t) {
                                    for (var e = t[1].length; e > 0; ) {
                                        var r = 0;
                                        switch (t[0]) {
                                            case n.INSERT:
                                                (r = Math.min(f.peekLength(), e)), i.push(f.next(r));
                                                break;
                                            case n.DELETE:
                                                (r = Math.min(e, c.peekLength())), c.next(r), i.delete(r);
                                                break;
                                            case n.EQUAL:
                                                r = Math.min(c.peekLength(), f.peekLength(), e);
                                                var l = c.next(r),
                                                    u = f.next(r);
                                                o(l.insert, u.insert)
                                                    ? i.retain(r, a.attributes.diff(l.attributes, u.attributes))
                                                    : i.push(u).delete(r);
                                        }
                                        e -= r;
                                    }
                                }),
                                i.chop()
                            );
                        }),
                        (u.prototype.eachLine = function (t, e) {
                            e = e || '\n';
                            for (var r = a.iterator(this.ops), n = new u(), o = 0; r.hasNext(); ) {
                                if ('insert' !== r.peekType()) return;
                                var i = r.peek(),
                                    l = a.length(i) - r.peekLength(),
                                    s = 'string' == typeof i.insert ? i.insert.indexOf(e, l) - l : -1;
                                if (s < 0) n.push(r.next());
                                else if (s > 0) n.push(r.next(s));
                                else {
                                    if (!1 === t(n, r.next(1).attributes || {}, o)) return;
                                    (o += 1), (n = new u());
                                }
                            }
                            n.length() > 0 && t(n, {}, o);
                        }),
                        (u.prototype.transform = function (t, e) {
                            if (((e = !!e), 'number' == typeof t)) return this.transformPosition(t, e);
                            for (
                                var r = a.iterator(this.ops), n = a.iterator(t.ops), o = new u();
                                r.hasNext() || n.hasNext();

                            )
                                if ('insert' !== r.peekType() || (!e && 'insert' === n.peekType()))
                                    if ('insert' === n.peekType()) o.push(n.next());
                                    else {
                                        var i = Math.min(r.peekLength(), n.peekLength()),
                                            l = r.next(i),
                                            s = n.next(i);
                                        if (l.delete) continue;
                                        s.delete
                                            ? o.push(s)
                                            : o.retain(i, a.attributes.transform(l.attributes, s.attributes, e));
                                    }
                                else o.retain(a.length(r.next()));
                            return o.chop();
                        }),
                        (u.prototype.transformPosition = function (t, e) {
                            e = !!e;
                            for (var r = a.iterator(this.ops), n = 0; r.hasNext() && n <= t; ) {
                                var o = r.peekLength(),
                                    i = r.peekType();
                                r.next(),
                                    'delete' !== i
                                        ? ('insert' === i && (n < t || !e) && (t += o), (n += o))
                                        : (t -= Math.min(o, t - n));
                            }
                            return t;
                        }),
                        (t.exports = u);
                },
                6910: (t, e, r) => {
                    var n = r(251),
                        o = r(4470),
                        i = {
                            attributes: {
                                compose: function (t, e, r) {
                                    'object' != typeof t && (t = {}), 'object' != typeof e && (e = {});
                                    var n = o(!0, {}, e);
                                    for (var i in (r ||
                                        (n = Object.keys(n).reduce(function (t, e) {
                                            return null != n[e] && (t[e] = n[e]), t;
                                        }, {})),
                                    t))
                                        void 0 !== t[i] && void 0 === e[i] && (n[i] = t[i]);
                                    return Object.keys(n).length > 0 ? n : void 0;
                                },
                                diff: function (t, e) {
                                    'object' != typeof t && (t = {}), 'object' != typeof e && (e = {});
                                    var r = Object.keys(t)
                                        .concat(Object.keys(e))
                                        .reduce(function (r, o) {
                                            return n(t[o], e[o]) || (r[o] = void 0 === e[o] ? null : e[o]), r;
                                        }, {});
                                    return Object.keys(r).length > 0 ? r : void 0;
                                },
                                transform: function (t, e, r) {
                                    if ('object' != typeof t) return e;
                                    if ('object' == typeof e) {
                                        if (!r) return e;
                                        var n = Object.keys(e).reduce(function (r, n) {
                                            return void 0 === t[n] && (r[n] = e[n]), r;
                                        }, {});
                                        return Object.keys(n).length > 0 ? n : void 0;
                                    }
                                },
                            },
                            iterator: function (t) {
                                return new a(t);
                            },
                            length: function (t) {
                                return 'number' == typeof t.delete
                                    ? t.delete
                                    : 'number' == typeof t.retain
                                    ? t.retain
                                    : 'string' == typeof t.insert
                                    ? t.insert.length
                                    : 1;
                            },
                        };
                    function a(t) {
                        (this.ops = t), (this.index = 0), (this.offset = 0);
                    }
                    (a.prototype.hasNext = function () {
                        return this.peekLength() < 1 / 0;
                    }),
                        (a.prototype.next = function (t) {
                            t || (t = 1 / 0);
                            var e = this.ops[this.index];
                            if (e) {
                                var r = this.offset,
                                    n = i.length(e);
                                if (
                                    (t >= n - r
                                        ? ((t = n - r), (this.index += 1), (this.offset = 0))
                                        : (this.offset += t),
                                    'number' == typeof e.delete)
                                )
                                    return { delete: t };
                                var o = {};
                                return (
                                    e.attributes && (o.attributes = e.attributes),
                                    'number' == typeof e.retain
                                        ? (o.retain = t)
                                        : 'string' == typeof e.insert
                                        ? (o.insert = e.insert.substr(r, t))
                                        : (o.insert = e.insert),
                                    o
                                );
                            }
                            return { retain: 1 / 0 };
                        }),
                        (a.prototype.peek = function () {
                            return this.ops[this.index];
                        }),
                        (a.prototype.peekLength = function () {
                            return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0;
                        }),
                        (a.prototype.peekType = function () {
                            return this.ops[this.index]
                                ? 'number' == typeof this.ops[this.index].delete
                                    ? 'delete'
                                    : 'number' == typeof this.ops[this.index].retain
                                    ? 'retain'
                                    : 'insert'
                                : 'retain';
                        }),
                        (a.prototype.rest = function () {
                            if (this.hasNext()) {
                                if (0 === this.offset) return this.ops.slice(this.index);
                                var t = this.offset,
                                    e = this.index,
                                    r = this.next(),
                                    n = this.ops.slice(this.index);
                                return (this.offset = t), (this.index = e), [r].concat(n);
                            }
                            return [];
                        }),
                        (t.exports = i);
                },
                835: (t, e, r) => {
                    'use strict';
                    r.r(e), r.d(e, { default: () => l });
                    var n = r(6729),
                        o = r.n(n);
                    let i = (0, r(369).Z)('quill:events');
                    ['selectionchange', 'mousedown', 'mouseup', 'click'].forEach(function (t) {
                        document.addEventListener(t, (...t) => {
                            [].slice.call(document.querySelectorAll('.ql-container')).forEach((e) => {
                                e.__quill && e.__quill.emitter && e.__quill.emitter.handleDOM(...t);
                            });
                        });
                    });
                    class a extends o() {
                        constructor() {
                            super(), (this.listeners = {}), this.on('error', i.error);
                        }
                        emit() {
                            i.log.apply(i, arguments), super.emit.apply(this, arguments);
                        }
                        handleDOM(t, ...e) {
                            (this.listeners[t.type] || []).forEach(function ({ node: r, handler: n }) {
                                (t.target === r || r.contains(t.target)) && n(t, ...e);
                            });
                        }
                        listenDOM(t, e, r) {
                            this.listeners[t] || (this.listeners[t] = []),
                                this.listeners[t].push({ node: e, handler: r });
                        }
                    }
                    (a.events = {
                        EDITOR_CHANGE: 'editor-change',
                        SCROLL_BEFORE_UPDATE: 'scroll-before-update',
                        SCROLL_OPTIMIZE: 'scroll-optimize',
                        SCROLL_UPDATE: 'scroll-update',
                        SELECTION_CHANGE: 'selection-change',
                        TEXT_CHANGE: 'text-change',
                    }),
                        (a.sources = { API: 'api', SILENT: 'silent', USER: 'user' });
                    const l = a;
                },
                369: (t, e, r) => {
                    'use strict';
                    r.d(e, { Z: () => l });
                    let n = ['error', 'warn', 'log', 'info'],
                        o = 'warn';
                    function i(t, ...e) {
                        n.indexOf(t) <= n.indexOf(o) && console[t](...e);
                    }
                    function a(t) {
                        return n.reduce(function (e, r) {
                            return (e[r] = i.bind(console, r, t)), e;
                        }, {});
                    }
                    i.level = a.level = function (t) {
                        o = t;
                    };
                    const l = a;
                },
                5937: (t, e, r) => {
                    'use strict';
                    r.r(e), r.d(e, { default: () => o });
                    class n {
                        constructor(t, e = {}) {
                            (this.quill = t), (this.options = e);
                        }
                    }
                    n.DEFAULTS = {};
                    const o = n;
                },
                7514: (t, e, r) => {
                    'use strict';
                    r.r(e), r.d(e, { Range: () => f, default: () => p });
                    var n = r(347),
                        o = r.n(n),
                        i = r(6313),
                        a = r.n(i),
                        l = r(251),
                        u = r.n(l),
                        s = r(835);
                    let c = (0, r(369).Z)('quill:selection');
                    class f {
                        constructor(t, e = 0) {
                            (this.index = t), (this.length = e);
                        }
                    }
                    class p {
                        constructor(t, e) {
                            (this.emitter = e),
                                (this.scroll = t),
                                (this.composing = !1),
                                (this.mouseDown = !1),
                                (this.root = this.scroll.domNode),
                                (this.cursor = o().create('cursor', this)),
                                (this.lastRange = this.savedRange = new f(0, 0)),
                                this.handleComposition(),
                                this.handleDragging(),
                                this.emitter.listenDOM('selectionchange', document, () => {
                                    this.mouseDown || setTimeout(this.update.bind(this, s.default.sources.USER), 1);
                                }),
                                this.emitter.on(s.default.events.EDITOR_CHANGE, (t, e) => {
                                    t === s.default.events.TEXT_CHANGE &&
                                        e.length() > 0 &&
                                        this.update(s.default.sources.SILENT);
                                }),
                                this.emitter.on(s.default.events.SCROLL_BEFORE_UPDATE, () => {
                                    if (!this.hasFocus()) return;
                                    let t = this.getNativeRange();
                                    null != t &&
                                        t.start.node !== this.cursor.textNode &&
                                        this.emitter.once(s.default.events.SCROLL_UPDATE, () => {
                                            try {
                                                this.setNativeRange(
                                                    t.start.node,
                                                    t.start.offset,
                                                    t.end.node,
                                                    t.end.offset
                                                );
                                            } catch (t) {}
                                        });
                                }),
                                this.emitter.on(s.default.events.SCROLL_OPTIMIZE, (t, e) => {
                                    if (e.range) {
                                        const { startNode: t, startOffset: r, endNode: n, endOffset: o } = e.range;
                                        this.setNativeRange(t, r, n, o);
                                    }
                                }),
                                this.update(s.default.sources.SILENT);
                        }
                        handleComposition() {
                            this.root.addEventListener('compositionstart', () => {
                                this.composing = !0;
                            }),
                                this.root.addEventListener('compositionend', () => {
                                    if (((this.composing = !1), this.cursor.parent)) {
                                        const t = this.cursor.restore();
                                        if (!t) return;
                                        setTimeout(() => {
                                            this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
                                        }, 1);
                                    }
                                });
                        }
                        handleDragging() {
                            this.emitter.listenDOM('mousedown', document.body, () => {
                                this.mouseDown = !0;
                            }),
                                this.emitter.listenDOM('mouseup', document.body, () => {
                                    (this.mouseDown = !1), this.update(s.default.sources.USER);
                                });
                        }
                        focus() {
                            this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
                        }
                        format(t, e) {
                            if (null != this.scroll.whitelist && !this.scroll.whitelist[t]) return;
                            this.scroll.update();
                            let r = this.getNativeRange();
                            if (null != r && r.native.collapsed && !o().query(t, o().Scope.BLOCK)) {
                                if (r.start.node !== this.cursor.textNode) {
                                    let t = o().find(r.start.node, !1);
                                    if (null == t) return;
                                    if (t instanceof o().Leaf) {
                                        let e = t.split(r.start.offset);
                                        t.parent.insertBefore(this.cursor, e);
                                    } else t.insertBefore(this.cursor, r.start.node);
                                    this.cursor.attach();
                                }
                                this.cursor.format(t, e),
                                    this.scroll.optimize(),
                                    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length),
                                    this.update();
                            }
                        }
                        getBounds(t, e = 0) {
                            let r = this.scroll.length();
                            (t = Math.min(t, r - 1)), (e = Math.min(t + e, r - 1) - t);
                            let n,
                                [o, i] = this.scroll.leaf(t);
                            if (null == o) return null;
                            [n, i] = o.position(i, !0);
                            let a = document.createRange();
                            if (e > 0)
                                return (
                                    a.setStart(n, i),
                                    ([o, i] = this.scroll.leaf(t + e)),
                                    null == o
                                        ? null
                                        : (([n, i] = o.position(i, !0)), a.setEnd(n, i), a.getBoundingClientRect())
                                );
                            {
                                let t,
                                    e = 'left';
                                return (
                                    n instanceof Text
                                        ? (i < n.data.length
                                              ? (a.setStart(n, i), a.setEnd(n, i + 1))
                                              : (a.setStart(n, i - 1), a.setEnd(n, i), (e = 'right')),
                                          (t = a.getBoundingClientRect()))
                                        : ((t = o.domNode.getBoundingClientRect()), i > 0 && (e = 'right')),
                                    {
                                        bottom: t.top + t.height,
                                        height: t.height,
                                        left: t[e],
                                        right: t[e],
                                        top: t.top,
                                        width: 0,
                                    }
                                );
                            }
                        }
                        getNativeRange() {
                            let t = document.getSelection();
                            if (null == t || t.rangeCount <= 0) return null;
                            let e = t.getRangeAt(0);
                            if (null == e) return null;
                            let r = this.normalizeNative(e);
                            return c.info('getNativeRange', r), r;
                        }
                        getRange() {
                            let t = this.getNativeRange();
                            return null == t ? [null, null] : [this.normalizedToRange(t), t];
                        }
                        hasFocus() {
                            return document.activeElement === this.root;
                        }
                        normalizedToRange(t) {
                            let e = [[t.start.node, t.start.offset]];
                            t.native.collapsed || e.push([t.end.node, t.end.offset]);
                            let r = e.map((t) => {
                                    let [e, r] = t,
                                        n = o().find(e, !0),
                                        i = n.offset(this.scroll);
                                    return 0 === r
                                        ? i
                                        : n instanceof o().Container
                                        ? i + n.length()
                                        : i + n.index(e, r);
                                }),
                                n = Math.min(Math.max(...r), this.scroll.length() - 1),
                                i = Math.min(n, ...r);
                            return new f(i, n - i);
                        }
                        normalizeNative(t) {
                            if (!d(this.root, t.startContainer) || (!t.collapsed && !d(this.root, t.endContainer)))
                                return null;
                            let e = {
                                start: { node: t.startContainer, offset: t.startOffset },
                                end: { node: t.endContainer, offset: t.endOffset },
                                native: t,
                            };
                            return (
                                [e.start, e.end].forEach(function (t) {
                                    let e = t.node,
                                        r = t.offset;
                                    for (; !(e instanceof Text) && e.childNodes.length > 0; )
                                        if (e.childNodes.length > r) (e = e.childNodes[r]), (r = 0);
                                        else {
                                            if (e.childNodes.length !== r) break;
                                            (e = e.lastChild),
                                                (r = e instanceof Text ? e.data.length : e.childNodes.length + 1);
                                        }
                                    (t.node = e), (t.offset = r);
                                }),
                                e
                            );
                        }
                        rangeToNative(t) {
                            let e = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                r = [],
                                n = this.scroll.length();
                            return (
                                e.forEach((t, e) => {
                                    t = Math.min(n - 1, t);
                                    let o,
                                        [i, a] = this.scroll.leaf(t);
                                    ([o, a] = i.position(a, 0 !== e)), r.push(o, a);
                                }),
                                r.length < 2 && (r = r.concat(r)),
                                r
                            );
                        }
                        scrollIntoView(t) {
                            let e = this.lastRange;
                            if (null == e) return;
                            let r = this.getBounds(e.index, e.length);
                            if (null == r) return;
                            let n = this.scroll.length() - 1,
                                [o] = this.scroll.line(Math.min(e.index, n)),
                                i = o;
                            if (
                                (e.length > 0 && ([i] = this.scroll.line(Math.min(e.index + e.length, n))),
                                null == o || null == i)
                            )
                                return;
                            let a = t.getBoundingClientRect();
                            r.top < a.top
                                ? (t.scrollTop -= a.top - r.top)
                                : r.bottom > a.bottom && (t.scrollTop += r.bottom - a.bottom);
                        }
                        setNativeRange(t, e, r = t, n = e, o = !1) {
                            if (
                                (c.info('setNativeRange', t, e, r, n),
                                null != t &&
                                    (null == this.root.parentNode || null == t.parentNode || null == r.parentNode))
                            )
                                return;
                            let i = document.getSelection();
                            if (null != i)
                                if (null != t) {
                                    this.hasFocus() || this.root.focus();
                                    let a = (this.getNativeRange() || {}).native;
                                    if (
                                        null == a ||
                                        o ||
                                        t !== a.startContainer ||
                                        e !== a.startOffset ||
                                        r !== a.endContainer ||
                                        n !== a.endOffset
                                    ) {
                                        'BR' == t.tagName &&
                                            ((e = [].indexOf.call(t.parentNode.childNodes, t)), (t = t.parentNode)),
                                            'BR' == r.tagName &&
                                                ((n = [].indexOf.call(r.parentNode.childNodes, r)), (r = r.parentNode));
                                        let o = document.createRange();
                                        o.setStart(t, e), o.setEnd(r, n), i.removeAllRanges(), i.addRange(o);
                                    }
                                } else i.removeAllRanges(), this.root.blur(), document.body.focus();
                        }
                        setRange(t, e = !1, r = s.default.sources.API) {
                            if (('string' == typeof e && ((r = e), (e = !1)), c.info('setRange', t), null != t)) {
                                let r = this.rangeToNative(t);
                                this.setNativeRange(...r, e);
                            } else this.setNativeRange(null);
                            this.update(r);
                        }
                        update(t = s.default.sources.USER) {
                            let e = this.lastRange,
                                [r, n] = this.getRange();
                            if (
                                ((this.lastRange = r),
                                null != this.lastRange && (this.savedRange = this.lastRange),
                                !u()(e, this.lastRange))
                            ) {
                                !this.composing &&
                                    null != n &&
                                    n.native.collapsed &&
                                    n.start.node !== this.cursor.textNode &&
                                    this.cursor.restore();
                                let r = [s.default.events.SELECTION_CHANGE, a()(this.lastRange), a()(e), t];
                                this.emitter.emit(s.default.events.EDITOR_CHANGE, ...r),
                                    t !== s.default.sources.SILENT && this.emitter.emit(...r);
                            }
                        }
                    }
                    function d(t, e) {
                        try {
                            e.parentNode;
                        } catch (t) {
                            return !1;
                        }
                        return e instanceof Text && (e = e.parentNode), t.contains(e);
                    }
                },
                3697: (t, e, r) => {
                    'use strict';
                    var n = r(8052),
                        o = Object,
                        i = TypeError;
                    t.exports = n(
                        function () {
                            if (null != this && this !== o(this))
                                throw new i('RegExp.prototype.flags getter called on non-object');
                            var t = '';
                            return (
                                this.hasIndices && (t += 'd'),
                                this.global && (t += 'g'),
                                this.ignoreCase && (t += 'i'),
                                this.multiline && (t += 'm'),
                                this.dotAll && (t += 's'),
                                this.unicode && (t += 'u'),
                                this.unicodeSets && (t += 'v'),
                                this.sticky && (t += 'y'),
                                t
                            );
                        },
                        'get flags',
                        !0
                    );
                },
                2847: (t, e, r) => {
                    'use strict';
                    var n = r(4289),
                        o = r(5559),
                        i = r(3697),
                        a = r(1721),
                        l = r(2753),
                        u = o(a());
                    n(u, { getPolyfill: a, implementation: i, shim: l }), (t.exports = u);
                },
                1721: (t, e, r) => {
                    'use strict';
                    var n = r(3697),
                        o = r(4289).supportsDescriptors,
                        i = Object.getOwnPropertyDescriptor;
                    t.exports = function () {
                        if (o && 'gim' === /a/gim.flags) {
                            var t = i(RegExp.prototype, 'flags');
                            if (
                                t &&
                                'function' == typeof t.get &&
                                'boolean' == typeof RegExp.prototype.dotAll &&
                                'boolean' == typeof RegExp.prototype.hasIndices
                            ) {
                                var e = '',
                                    r = {};
                                if (
                                    (Object.defineProperty(r, 'hasIndices', {
                                        get: function () {
                                            e += 'd';
                                        },
                                    }),
                                    Object.defineProperty(r, 'sticky', {
                                        get: function () {
                                            e += 'y';
                                        },
                                    }),
                                    'dy' === e)
                                )
                                    return t.get;
                            }
                        }
                        return n;
                    };
                },
                2753: (t, e, r) => {
                    'use strict';
                    var n = r(4289).supportsDescriptors,
                        o = r(1721),
                        i = Object.getOwnPropertyDescriptor,
                        a = Object.defineProperty,
                        l = TypeError,
                        u = Object.getPrototypeOf,
                        s = /a/;
                    t.exports = function () {
                        if (!n || !u)
                            throw new l(
                                'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
                            );
                        var t = o(),
                            e = u(s),
                            r = i(e, 'flags');
                        return (r && r.get === t) || a(e, 'flags', { configurable: !0, enumerable: !1, get: t }), t;
                    };
                },
                7771: (t, e, r) => {
                    'use strict';
                    var n = r(210),
                        o = r(2296),
                        i = r(1044)(),
                        a = r(7296),
                        l = n('%TypeError%'),
                        u = n('%Math.floor%');
                    t.exports = function (t, e) {
                        if ('function' != typeof t) throw new l('`fn` is not a function');
                        if ('number' != typeof e || e < 0 || e > 4294967295 || u(e) !== e)
                            throw new l('`length` must be a positive 32-bit integer');
                        var r = arguments.length > 2 && !!arguments[2],
                            n = !0,
                            s = !0;
                        if ('length' in t && a) {
                            var c = a(t, 'length');
                            c && !c.configurable && (n = !1), c && !c.writable && (s = !1);
                        }
                        return (n || s || !r) && (i ? o(t, 'length', e, !0, !0) : o(t, 'length', e)), t;
                    };
                },
                8052: (t, e, r) => {
                    'use strict';
                    var n = r(2296),
                        o = r(1044)(),
                        i = r(5972).functionsHaveConfigurableNames(),
                        a = TypeError;
                    t.exports = function (t, e) {
                        if ('function' != typeof t) throw new a('`fn` is not a function');
                        return (
                            (arguments.length > 2 && !!arguments[2] && !i) ||
                                (o ? n(t, 'name', e, !0, !0) : n(t, 'name', e)),
                            t
                        );
                    };
                },
                7436: (e) => {
                    'use strict';
                    e.exports = t;
                },
            },
            r = {};
        function n(t) {
            var o = r[t];
            if (void 0 !== o) return o.exports;
            var i = (r[t] = { exports: {} });
            return e[t].call(i.exports, i, i.exports, n), i.exports;
        }
        (n.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return n.d(e, { a: e }), e;
        }),
            (n.d = (t, e) => {
                for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
            }),
            (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (n.r = (t) => {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            });
        var o = n(9196);
        return o.default;
    })()
);
