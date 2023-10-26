"use strict"; function mainmenu() { $(".main-menu li.dropdown ul").length && ($(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>'), $(".main-menu li.dropdown .dropdown-btn").on("click", function () { $(this).prev("ul").slideToggle(500) })) } function languageSwitcher() { $("#polyglot-language-options").length && $("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({ effect: "slide", animSpeed: 500, testMode: !0, onChange: function (e) { alert("The selected language is: " + e.selectedItem) } }) } function stickyHeader() { $(".stricky").length && ($(window).scrollTop() > 100 ? ($(".stricky").addClass("stricky-fixed"), $(".scroll-to-top").fadeIn(1500)) : 100 >= $(this).scrollTop() && ($(".stricky").removeClass("stricky-fixed"), $(".scroll-to-top").fadeOut(1500))) } function headerStyle() { if ($(".main-header").length) { var e = $(window).scrollTop(), t = $(".main-header"), a = $(".fixed-header .sticky-header"), s = $(".scroll-to-top"); e > 50 ? (t.addClass("fixed-header"), a.addClass("animated slideInDown"), s.fadeIn(300)) : (t.removeClass("fixed-header"), a.removeClass("animated slideInDown"), s.fadeOut(300)) } } function searchbox() { $(".seach-toggle").length && $(".seach-toggle").on("click", function () { $(this).toggleClass("active"), $(this).next(".search-box").toggleClass("now-visible") }) } function scrollToTop() { $(".scroll-to-target").length && $(".scroll-to-target").on("click", function () { var e = $(this).attr("data-target"); $("html, body").animate({ scrollTop: $(e).offset().top }, 1e3) }) } function prealoader() { $(".preloader").length && $(".preloader").fadeOut(500) } function CounterNumberChanger() { var e = $(".timer"); e.length && e.appear(function () { e.countTo() }) } function singleProductTab() { $(".tabs-box").length && $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) { e.preventDefault(); var t = $($(this).attr("data-tab")); if ($(t).is(":visible")) return !1; t.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), $(this).addClass("active-btn"), t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), $(t).fadeIn(300), $(t).addClass("active-tab") }) } function doctorTab() { $(".tabs-box").length && $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) { e.preventDefault(); var t = $($(this).attr("data-tab")); if ($(t).is(":visible")) return !1; t.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), $(this).addClass("active-btn"), t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), $(t).fadeIn(300), $(t).addClass("active-tab") }) } function priceFilter() { $(".price-ranger").length && ($(".price-ranger #slider-range").slider({ range: !0, min: 10, max: 200, values: [11, 99], slide: function (e, t) { $(".price-ranger .ranger-min-max-block .min").val("$" + t.values[0]), $(".price-ranger .ranger-min-max-block .max").val("$" + t.values[1]) } }), $(".price-ranger .ranger-min-max-block .min").val("$" + $(".price-ranger #slider-range").slider("values", 0)), $(".price-ranger .ranger-min-max-block .max").val("$" + $(".price-ranger #slider-range").slider("values", 1))) } function accordion() { $(".accordion-box").length && $(".accordion-box").on("click", ".accord-btn", function () { !0 !== $(this).hasClass("active") && $(".accordion .accord-btn").removeClass("active"), $(this).next(".accord-content").is(":visible") ? ($(this).removeClass("active"), $(this).next(".accord-content").slideUp(500)) : ($(this).addClass("active"), $(".accordion .accord-content").slideUp(500), $(this).next(".accord-content").slideDown(500)) }) } function cartTouchSpin() { $(".quantity-spinner").length && $("input.quantity-spinner").TouchSpin({ verticalbuttons: !0 }) } function datepicker() { $("#datepicker").length && $("#datepicker").datepicker() } function timepicker() { $('input[name="time"]').ptTimeSelect() } function tooltip() { $(".tool_tip").length && $(".tool_tip").tooltip(), $ } function projectMasonaryLayout() { $(".masonary-layout").length && $(".masonary-layout").isotope({ layoutMode: "masonry" }), $(".post-filter").length && $(".post-filter li").children("span").on("click", function () { var e = $(this), t = e.parent().attr("data-filter"); return $(".post-filter li").children("span").parent().removeClass("active"), e.parent().addClass("active"), $(".filter-layout").isotope({ filter: t, animationOptions: { duration: 500, easing: "linear", queue: !1 } }), !1 }), $(".post-filter.has-dynamic-filter-counter").length && $(".post-filter.has-dynamic-filter-counter").find("li").each(function () { var e = $(this).data("filter"); console.log(e); var t = $(".gallery-content").find(e).length; $(this).children("span").append('<span class="count"><b>' + t + "</b></span>") }) } function countDownTimer() { $(".time-countdown").length && $(".time-countdown").each(function () { var e = $(this), t = e.data("countdown-time"); e.countdown(t, function (e) { $(this).html("<h2>" + e.strftime("%D : %H : %M : %S") + "</h2>") }) }), $(".time-countdown-two").length && $(".time-countdown-two").each(function () { var e = $(this), t = e.data("countdown-time"); e.countdown(t, function (e) { $(this).html('<li> <div class="box"> <span class="days">' + e.strftime("%D") + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + e.strftime("%H") + '</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">' + e.strftime("%M") + '</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">' + e.strftime("%S") + '</span> <span class="timeRef clr-3">secs</span> </div> </li>') }) }) } function countryInfo() { $(".area_select").length && $(".area_select").change(function () { var e = $(this).val(); e ? ($(".state:not(#value" + e + ")").slideUp(), $("#value" + e).slideDown()) : $(".state").slideDown() }) } function selectDropdown() { if ($(".selectmenu").length) { $(".selectmenu").selectmenu(); var e = function (e, t) { $(this).trigger("change", t) }; $(".selectmenu").selectmenu({ change: e }) } } function servicesCarousel() { $(".services-carousel").length && $(".services-carousel").owlCarousel({ dots: !0, loop: !0, margin: 30, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 2 }, 1024: { items: 2 }, 1100: { items: 2 }, 1200: { items: 3 } } }) } function testimonialCarousel() { $(".testimonial-carousel").length && $(".testimonial-carousel").owlCarousel({ dots: !0, loop: !0, margin: 30, nav: !1, navText: ['<span class="icon-arrow left"><p>Prev</p></span>', '<span class="icon-arrow right"><p>Next</p></span>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1100: { items: 2 }, 1200: { items: 2 } } }) } function testimonialCarousel2() { $(".testimonial-carousel2").length && $(".testimonial-carousel2").owlCarousel({ dots: !0, loop: !0, margin: 0, nav: !0, navText: ['<span class="flaticon-back left"></span>', '<span class="flaticon-arrow right"></span>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1100: { items: 1 }, 1200: { items: 1 } } }) } function tabContentCarousel() { $(".tab-content-carousel").length && $(".tab-content-carousel").owlCarousel({ dots: !0, loop: !0, margin: 0, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1100: { items: 1 }, 1200: { items: 1 } } }) } function teamCarousel() { $(".team-carousel").length && $(".team-carousel").owlCarousel({ dots: !0, loop: !0, margin: 30, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 2 }, 1024: { items: 2 }, 1100: { items: 2 }, 1200: { items: 3 } } }) } function chooseCarousel() { $(".choose-carousel").length && $(".choose-carousel").owlCarousel({ dots: !0, loop: !0, margin: 30, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1100: { items: 1 }, 1200: { items: 1 } } }) } function chooseCarousel2() { $(".choose-carousel2").length && $(".choose-carousel2").owlCarousel({ dots: !1, loop: !0, margin: 30, nav: !0, navText: ['<span class="flaticon-back left"></span>', '<span class="flaticon-arrow right"></span>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 2 }, 800: { items: 2 }, 1024: { items: 3 }, 1100: { items: 3 }, 1200: { items: 4 } } }) } function specialitiesCarousel() { $(".specialities-carousel").length && $(".specialities-carousel").owlCarousel({ dots: !1, loop: !0, margin: 30, nav: !0, navText: ['<span class="flaticon-back left"></span>', '<span class="flaticon-arrow right"></span>'], autoplayHoverPause: !1, autoplay: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1100: { items: 1 }, 1200: { items: 1 } } }) } if ($(".accordion-holder").length && $(".accordion-holder .acc-btn").on("click", function () { !0 !== $(this).hasClass("active") && $(".accordion-holder .acc-btn").removeClass("active"), $(this).next(".acc-content").is(":visible") ? ($(this).removeClass("active"), $(this).next(".acc-content").slideUp(500)) : ($(this).addClass("active"), $(".accordion-holder .acc-content").slideUp(500), $(this).next(".acc-content").slideDown(500)) }), $(".progress-levels .progress-box .bar-fill").length && $(".progress-box .bar-fill").each(function () { $(".progress-box .bar-fill").appear(function () { var e = $(this).attr("data-percent"); $(this).css("height", e + "%") }) }, { accY: 0 }), $(".count-box").length && $(".count-box").appear(function () { var e = $(this), t = e.find(".count-text").attr("data-stop"), a = parseInt(e.find(".count-text").attr("data-speed"), 10); e.hasClass("counted") || (e.addClass("counted"), $({ countNum: e.find(".count-text").text() }).animate({ countNum: t }, { duration: a, easing: "linear", step: function () { e.find(".count-text").text(Math.floor(this.countNum)) }, complete: function () { e.find(".count-text").text(this.countNum) } })) }, { accY: 0 }), $(".works-tab-box").length && $(".works-tab-box .tab-buttons .p-tab-btn").on("click", function (e) { e.preventDefault(); var t = $($(this).attr("data-tab")); if ($(t).hasClass("actve-tab")) return !1; $(".works-tab-box .tab-buttons .p-tab-btn").removeClass("active-btn"), $(this).addClass("active-btn"), $(".works-tab-box .tab-content-box .single-tab-content").removeClass("active-tab"), $(t).addClass("active-tab") }), $(".single-vertical-carousel").length && $(".single-vertical-carousel").slick({ dots: !0, autoplay: !0, loop: !0, autoplaySpeed: 5e3, infinite: !0, responsive: !0, slidesToShow: 1, vertical: !0, slidesToScroll: 1, prevArrow: "<div class='prev-btn'><span class='fa fa-angle-up'></span></div>", nextArrow: "<div class='next-btn'><span class='fa fa-angle-down'></span></div>" }), $(".hidden-bar").length) { var e, t = $(".hidden-bar"), a = $(".hidden-bar-opener"), s = $(".hidden-bar-closer"), n = $(".nav-toggler"); $(".hidden-bar-wrapper").mCustomScrollbar(), a.on("click", function () { t.toggleClass("visible-sidebar"), n.toggleClass("open") }), s.on("click", function () { t.toggleClass("visible-sidebar"), n.toggleClass("open") }) } $(".single-team-slider .bxslider").length && $(".single-team-slider .bxslider").bxSlider({ nextSelector: ".single-team-slider #slider-next", prevSelector: ".single-team-slider #slider-prev", nextText: '<i class="fa fa-angle-right"></i>', prevText: '<i class="fa fa-angle-left"></i>', mode: "fade", auto: "true", speed: "7000", pagerCustom: ".single-team-slider .slider-pager .thumb-box" }), $(".lightbox-image").length && $(".lightbox-image").fancybox({ openEffect: "fade", closeEffect: "fade", helpers: { media: {} } }), $(".wow").length && new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }).init(), $("#contact-form").length && $("#contact-form").validate({ submitHandler: function (e) { var t = $(e).find('button[type="submit"]'), a = "#form-result"; $(a).remove(), t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'); var s = t.html(); t.html(t.prop("disabled", !0).data("loading-text")), $(e).ajaxSubmit({ dataType: "json", success: function (n) { n.status = "true", $(e).find(".form-control").val(""), t.prop("disabled", !1).html(s), $(a).html(n.message).fadeIn("slow"), setTimeout(function () { $(a).fadeOut("slow") }, 6e3) } }) } }), $("#add-comment-form").length && $("#add-comment-form").validate({ submitHandler: function (e) { var t = $(e).find('button[type="submit"]'), a = "#form-result"; $(a).remove(), t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'); var s = t.html(); t.html(t.prop("disabled", !0).data("loading-text")), $(e).ajaxSubmit({ dataType: "json", success: function (n) { n.status = "true", $(e).find(".form-control").val(""), t.prop("disabled", !1).html(s), $(a).html(n.message).fadeIn("slow"), setTimeout(function () { $(a).fadeOut("slow") }, 6e3) } }) } }), $("#appoinment-form").length && $("#appoinment-form").validate({ submitHandler: function (e) { var t = $(e).find('button[type="submit"]'), a = "#form-result"; $(a).remove(), t.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'); var s = t.html(); t.html(t.prop("disabled", !0).data("loading-text")), $(e).ajaxSubmit({ dataType: "json", success: function (n) { n.status = "true", $(e).find(".form-control").val(""), t.prop("disabled", !1).html(s), $(a).html(n.message).fadeIn("slow"), setTimeout(function () { $(a).fadeOut("slow") }, 6e3) } }) } }), jQuery(document).on("ready", function () { jQuery, mainmenu(), languageSwitcher(), searchbox(), scrollToTop(), CounterNumberChanger(), singleProductTab(), doctorTab(), priceFilter(), accordion(), cartTouchSpin(), selectDropdown(), datepicker(), timepicker(), tooltip(), countDownTimer(), projectMasonaryLayout(), countryInfo(), servicesCarousel(), testimonialCarousel(), testimonialCarousel2(), tabContentCarousel(), teamCarousel(), chooseCarousel(), chooseCarousel2(), specialitiesCarousel() }), jQuery(window).on("scroll", function () { jQuery, stickyHeader(), headerStyle() }), jQuery(window).on("load", function () { jQuery, prealoader() });