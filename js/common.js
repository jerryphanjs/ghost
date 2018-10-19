function init() {
    setsize(),
    currentPage(),
    cover(),
    customDelay(),
    clipInit(),
    swiper(),
    initMap(),
    initDashTxt(),
    windowWidth < 780 && (slider(),
    $(".sp_navbtn").midnight()),
    scT = $(window).scrollTop(),
    scB = scT + windowHeight,
    viewIn(),
    initFeatureSlider(),
    readBtnClick()
}
function loaded() {
    $html.addClass("is_loaded")
}
function setsize() {
    if (windowHeight = $(window).height(),
    windowWidth = $(window).width(),
    windowWidth < 780)
        is_sp = !0,
        is_pc = !1,
        $(".mainvisual").css({
            height: ""
        }),
        $(".feature_slider").length && $(".top.feature .feature_slider").height("");
    else if (is_sp = !1,
    is_pc = !0,
    $(".mainvisual").css({
        height: windowHeight - 110
    }),
    $(".top.product").css({
        height: windowHeight
    }),
    $(".feature_slider").length) {
        var e = .6 * $(".top.feature .feature_slider").width() * .5625;
        $(".top.feature .feature_slider").height(e)
    }
}
function cover() {
    $(".cover").each(function(e, t) {
        var i = $(t).data("src");
        $(t).css({
            "background-image": "url(" + i + ")"
        })
    })
}
function currentPage() {
    var e = $(".pageCkeck").data("page");
    $("#navi li").removeClass("now"),
    $("#navi ." + e).addClass("now"),
    "shop" === e || "news" === e || "notfound" === e ? $("#navi a.logo use, .sp_logo use").addClass("white").removeClass("red") : $("#navi a.logo use, .sp_logo use").removeClass("white").addClass("red")
}
function viewIn() {
    $(".plx").each(function(e, t) {
        if ($(t).is(".in"))
            return !0;
        $(t).offset().top < scB - 100 && ($(t).addClass("in"),
        $(".clipbox", $(t)).each(function(e, t) {
            clipFire($(t))
        }),
        showDashTxt($(t)))
    })
}
function initDashTxt() {
    $(".js-septx").each(function() {
        var e = $(this)
          , t = $(this).text().split("");
        e.empty();
        for (var i = 0; i < t.length; i++)
            e.append('<span class="char">' + t[i] + "</span>");
        TweenLite.set($(".js-septx .char"), {
            opacity: 0,
            y: -30,
            x: 0
        })
    }),
    $(".js-dash_line").each(function() {
        for (var e = $(this), t = $(this).outerWidth() / 10, i = 0; i < t; i++)
            e.append('<span class="dash"></span>');
        TweenLite.set($(".js-dash_line .dash"), {
            opacity: 0,
            y: 0,
            x: -50,
            scale: 1
        })
    })
}
function showDashTxt(e) {
    $(".js-dash_line_ttl", e).each(function() {
        TweenMax.staggerTo($(".js-septx .char", e), 1.5, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Elastic.easeOut,
            delay: .1
        }, .075),
        TweenMax.staggerTo($(".dash", e), 1.8, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            ease: Power1.easeIn,
            onComplete: function() {
                $(".dash", e).addClass("ready")
            }
        }, .03)
    })
}
function customDelay() {
    $(".plx-el").each(function(e, t) {
        var i = $(t).data("delay");
        $(t).css({
            "transition-delay": 100 * i + "ms"
        })
    })
}
function swiper() {
    new Swiper(".history .swiper-container",{
        scrollbar: ".swiper-scrollbar",
        scrollbarHide: !1,
        slidesPerView: "auto",
        spaceBetween: 45,
        grabCursor: !0,
        mousewheelControl: !0,
        freeMode: !0,
        breakpoints: {
            1024: {
                slidesPerView: "auto",
                slidesPerView: 2
            },
            780: {
                slidesPerView: 1,
                spaceBetween: 0,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                freeMode: !1
            }
        }
    })
}
function slider() {
    $(".top.product ul").bxSlider({
        controls: !1,
        pager: !0
    })
}
function clipInit() {
    $(".clipbox").each(function(e, t) {
        $(t).parent().outerWidth();
        var i = $(t).parent().outerHeight();
        TweenMax.set($(t), {
            clip: "rect( 0, 0, " + i + "px, 0)"
        })
    })
}
function clipFire(e) {
    var t = e.parent().outerWidth()
      , i = e.parent().outerHeight();
    TweenMax.to(e, 1, {
        clip: "rect( 0, " + t + "px, " + i + "px, 0)",
        opacity: 1,
        y: 0,
        ease: Power4.easeInOut,
        onComplete: function() {
            e.css({
                clip: "initial"
            })
        }
    }).delay(.1)
}
function bgTranslate() {
    is_pc && $(".bgplx-el").each(function(e, t) {
        var i = $(t).children(".background")
          , a = $(t).offset().top
          , o = $(t).height()
          , n = o - i.height()
          , s = (scT - a) / (2 * windowHeight - o) * n;
        TweenMax.to(i, 1, {
            y: s,
            ease: Power2.easeOut
        })
    })
}
function initFeatureSlider() {
    if ($("#feature_slider"))
        new Swiper(".feature_container",{
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            pagination: ".swiper-pagination",
            speed: 500,
            spaceBetween: 140,
            loop: !0,
            paginationClickable: !0,
            longSwipesMs: 1e3
        })
}
function readBtnClick() {
    $(document).off("click.readbtn").on("click.readbtn", ".read_btn_wrap.horizontal", function(e) {
        var t = $(this);
        if (!t.hasClass("is_open")) {
            t.addClass("is_open");
            var i = t.next().attr("data-height");
            TweenLite.to(t, 1, {
                height: 0,
                autoAlpha: 0,
                ease: Power4.easeInOut
            }),
            TweenLite.to(t.next(), 1, {
                autoAlpha: 1,
                height: i,
                ease: Power4.easeInOut
            })
        }
    }),
    $(".height_zero").each(function(e, t) {
        var i = $(this)
          , a = i.height() > 340 ? i.height() : 340;
        i.attr({
            "data-height": a
        }),
        TweenLite.set(i, {
            height: 0
        })
    })
}
function initMap() {
    $(".map").each(function(e, t) {
        setMaps($(t))
    })
}
function setMaps(e) {
    var t, i = e.data("pin"), a = e.data("lat"), o = e.data("lng"), n = e.data("url"), s = new google.maps.LatLng(a,o);
    if (is_sp)
        l = {
            zoom: 15,
            zoomControl: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            navigationControl: !1,
            mapTypeControl: !1,
            scrollwheel: !1,
            streetViewControl: !1,
            draggable: !1,
            center: s,
            mapTypeId: "mymap"
        };
    else
        var l = {
            zoom: 15,
            zoomControl: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            navigationControl: !1,
            mapTypeControl: !1,
            scrollwheel: !1,
            streetViewControl: !1,
            draggable: !0,
            center: s,
            mapTypeId: "mymap"
        };
    var r = {
        url: i,
        scaledSize: new google.maps.Size(80,90)
    };
    t = new google.maps.Map(document.getElementById("drawmap"),l);
    var d = new google.maps.StyledMapType([{
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#e4002b"
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f2f2f2"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: -100
        }, {
            lightness: 45
        }]
    }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
            visibility: "simplified"
        }, {
            color: "#ff6a6a"
        }, {
            lightness: "0"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ee3123"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ee3123"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ee3123"
        }, {
            lightness: "62"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{
            lightness: "75"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit.line",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "transit.station.bus",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "transit.station.rail",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "transit.station.rail",
        elementType: "labels.icon",
        stylers: [{
            weight: "0.01"
        }, {
            hue: "#ff0028"
        }, {
            lightness: "0"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }, {
            color: "#80e4d8"
        }, {
            lightness: "25"
        }, {
            saturation: "-23"
        }]
    }],{
        name: "maps"
    });
    t.mapTypes.set("mymap", d);
    var c = {
        position: s,
        map: t,
        icon: r
    }
      , p = new google.maps.Marker(c);
    google.maps.event.addListener(p, "click", function() {
        window.open().location.href = n
    })
}
function loadYT() {
    var e = document.createElement("script");
    e.src = "//www.youtube.com/iframe_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}
function onYouTubeIframeAPIReady() {
    initVid()
}
function initVid() {
    player = new YT.Player("player",{
        height: "1080",
        width: "1920",
        videoId: "gpp8DHQBJLM",
        playerVars: {
            rel: 0,
            showinfo: 0,
            wmode: "transparent",
            iv_load_policy: 3,
            vq: "hd1080"
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}
function onPlayerReady(e) {}
function onPlayerStateChange(e) {
    $(".videoplay").addClass("started");
    var t = player.getPlayerState();
    t == YT.PlayerState.PLAYING && $html.addClass("vid_play"),
    t == YT.PlayerState.PAUSED && $html.removeClass("vid_play"),
    t == YT.PlayerState.ENDED && (player.stopVideo(),
    closeVideo())
}
function closeVideo() {
    is_video = !1,
    player.pauseVideo(),
    $html.addClass("is_video_leave").removeClass("is_video_enter vid_play"),
    clearTimeout(closeTimeout),
    closeTimeout = setTimeout(function() {
        is_video = !0,
        $html.removeClass("is_video_leave")
    }, 1e3)
}
function getUA() {
    var e = window.navigator.userAgent.toLowerCase()
      , t = window.navigator.appVersion.toLowerCase();
    return e.indexOf("msie") > -1 ? t.indexOf("msie 7.0") > -1 ? "ie ieold" : t.indexOf("msie 8.0") > -1 ? "ie ieold" : t.indexOf("msie 9.0") > -1 ? "ie ie9" : t.indexOf("msie 10.0") > -1 ? "ie ie10" : "ie ieold" : t.indexOf("trident/7.0") > -1 ? "ie ie11" : -1 != e.indexOf("edge") ? "ie edge" : e.indexOf("firefox") > -1 ? "firefox" : e.indexOf("opera") > -1 ? "opera" : e.indexOf("chrome") > -1 ? "chrome" : e.indexOf("safari") > -1 ? "safari" : void 0
}
$(function() {
    $window = $(window),
    $document = $(document),
    $html = $("html"),
    $body = $("body"),
    $html.addClass(getUA()),
    init(),
    $(window).on({
        load: function() {
            loaded(),
            loadYT()
        },
        resize: function() {
            setsize()
        },
        scroll: function() {
            scT = $(window).scrollTop(),
            scB = scT + windowHeight,
            viewIn(),
            bgTranslate()
        }
    })
}),
$.pjax({
    wait: 400,
    area: ".ajaxContent, .sp_navbtn, .lang_switch .lang_name, .bogo-language-switcher, #navi",
    load: {
        head: "base, meta, link",
        css: !0,
        script: !1
    },
    cache: {
        click: !0,
        popstate: !0
    },
    callback: function(e, t) {
        ga("send", "pageview", window.location.pathname.replace(/^\/?/, "/") + window.location.search)
    }
}),
$(document).on("pjax:fetch", function() {
    $(".ham, .mask, #navi").removeClass("open"),
    $html.removeClass("is_loaded is_video_enter vid_play"),
    TweenMax.to(window, 1, {
        scrollTo: {
            y: 0,
            autoKill: !1,
            ease: Circ.easeInOut
        }
    })
}),
$(document).on("pjax:ready", function() {
    TweenMax.fromTo($(".ajaxContent_outer"), .8, {
        opacity: 0,
        y: -30
    }, {
        opacity: 1,
        y: 0,
        ease: Circ.easeInOut
    }),
    init()
}),
$(window).on("pjax:load", function() {
    loaded(),
    initVid(),
    initMap()
}),
$(document).on("click touchstart", ".ham , .click , .mask", function(e) {
    e.preventDefault(),
    $(".ham , .mask , #navi").toggleClass("open"),
    $("body").toggleClass("noscroll")
}),
$(document).on("click touchstart", "#navi a", function(e) {
    $("body").removeClass("noscroll")
});
var is_sp = !1
  , is_pc = !0;
$(document).on("click", 'a[href^="#"]', function(e) {
    e.preventDefault();
    var t = $(this).attr("href")
      , i = $("#" === t || "" === t ? window : t);
    if (void 0 !== i.offset()) {
        var a = i.offset().top;
        return TweenLite.to(window, .5, {
            scrollTo: {
                y: a - 45,
                autoKill: !1,
                ease: Power4.easeOut
            }
        }),
        !1
    }
}),
$(document).on({
    mouseenter: function() {
        if (is_pc) {
            $(this).find(".sbtn_in div").removeClass("reset leave").addClass("enter")
        }
    },
    mouseleave: function() {
        if (is_pc) {
            var e = $(this);
            e.find(".sbtn_in div").removeClass("reset enter").addClass("leave"),
            setTimeout(function() {
                e.find(".sbtn_in div").removeClass("leave").addClass("reset")
            }, 150)
        }
    }
}, ".sbtn");
var player, closeTimeout, is_video = !0;
$(document).on("click", ".videoplay", function(e) {
    e.preventDefault(),
    is_video && $html.removeClass("is_video_leave").addClass("is_video_enter"),
    is_pc && is_video && setTimeout(function() {
        player.playVideo()
    }, 400)
}),
$(document).on("click", ".close-video", function(e) {
    e.preventDefault(),
    closeVideo()
});
