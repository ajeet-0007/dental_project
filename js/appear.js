!function ($) { $.fn.appear = function (b, a) { var c = $.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, a); return this.each(function () { var a = $(this); if (a.appeared = !1, !b) { a.trigger("appear", c.data); return } var f = $(window), d = function () { if (!a.is(":visible")) { a.appeared = !1; return } var b = f.scrollLeft(), d = f.scrollTop(), e = a.offset(), g = e.left, h = e.top, i = c.accX, j = c.accY, k = a.height(), l = f.height(), m = a.width(), n = f.width(); h + k + j >= d && h <= d + l + j && g + m + i >= b && g <= b + n + i ? a.appeared || a.trigger("appear", c.data) : a.appeared = !1 }, e = function () { if (a.appeared = !0, c.one) { f.unbind("scroll", d); var e = $.inArray(d, $.fn.appear.checks); e >= 0 && $.fn.appear.checks.splice(e, 1) } b.apply(this, arguments) }; c.one ? a.one("appear", c.data, e) : a.bind("appear", c.data, e), f.scroll(d), $.fn.appear.checks.push(d), d() }) }, $.extend($.fn.appear, { checks: [], timeout: null, checkAll: function () { var a = $.fn.appear.checks.length; if (a > 0) for (; a--;) $.fn.appear.checks[a]() }, run: function () { $.fn.appear.timeout && clearTimeout($.fn.appear.timeout), $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20) } }), $.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (c, a) { var b = $.fn[a]; b && ($.fn[a] = function () { var a = b.apply(this, arguments); return $.fn.appear.run(), a }) }) }(jQuery)