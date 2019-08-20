
// MOBILE HEADER
var mobile_menu_open = false;

function clickMobileMenuBar() {

    var mobile_menu_bar = document.getElementById("mobile-menu-bar");
    var body = document.getElementById("body");

    if (!mobile_menu_open) {
        mobile_menu_bar.classList.add("link-hover");
        mobile_menu_bar.classList.add("exit");

        body.classList.add("mobile-menu-open");
        mobile_menu_open = true;
        document.addEventListener("click", function() {
            clickMobileMenuBar();
        });
    } else {
        mobile_menu_bar.classList.remove("link-hover");
        mobile_menu_bar.classList.remove("exit");

        body.classList.remove("mobile-menu-open");
        mobile_menu_open = false;
    }
}

//menu mouse over

function menuMouseHover(element) {
    element.classList.add("link-hover");
}

function menuMouseOut(element) {
    element.classList.remove("link-hover");
}

//scroll to
function scrollto(to) {
    if (document.getElementById(to) == null)
        return ;
    $('html, body').animate({
        scrollTop: $("#" + to).offset().top - 55
    }, 1000);
    window.location.hash = "#" + to;
}

var lastscrollY = 0;
var ticking = false;

function scrollEventListener(position_scroll) {

    if (position_scroll == 0) {
        var element = document.getElementById("go-to-top");

        element.classList.remove("visible");
    } else {
        var element = document.getElementById("go-to-top");
        
        element.classList.add("visible");
    }

    if (position_scroll == 0) {
        var element = document.getElementById("header");
        
        element.classList.remove("sticky-fixed");
        element.classList.remove("sticky-above");

        element.style.backgroundColor = "rgba(255, 255, 255, 0)";
        element.style.boxShadow = "rgba(255, 255, 255, 0) 0px 0px 40px 0px";
        element.style.paddingBottom = "50px";
        element.style.paddingTop = "50px";

        var menu = document.getElementById("menu-column");
        var mobile_menu = document.getElementById("mobile-menu-bar");
        
        menu.classList.add("menu-skin-light");
        menu.classList.remove("menu-skin-main");
        mobile_menu.classList.add("menu-skin-light");
        mobile_menu.classList.remove("menu-skin-main");

    } else {
        var element = document.getElementById("header");

        element.classList.add("sticky-fixed");
        element.classList.add("sticky-above");

        element.style.backgroundColor = "rgb(255, 255, 255)";
        element.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 0px 40px 0px";
        element.style.paddingBottom = "15px";
        element.style.paddingTop = "15px";

        var menu = document.getElementById("menu-column");
        var mobile_menu = document.getElementById("mobile-menu-bar");

        menu.classList.add("menu-skin-main");
        menu.classList.remove("menu-skin-light");
        mobile_menu.classList.remove("menu-skin-light");
        mobile_menu.classList.add("menu-skin-main");
    }
}

window.addEventListener('scroll', function(e) {
    lastscrollY = window.scrollY;
    if (!ticking) {
    window.requestAnimationFrame(function() {
        scrollEventListener(lastscrollY);
        ticking = false;
    });
    }
    ticking = true;
});

//on load page with #xxx
window.onload = function() {
    if (window.location.hash != "") {
        setTimeout( function() {
            scrollto(window.location.hash.substring(1));
        }, 100);
    }
}