function showMenu() {
    var x = document.getElementById("menu");
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden");
    }
}
function hideMenu() {
    var x = document.getElementById("menu");
    if (!(x.classList.contains("hidden"))) {
        x.classList.add("hidden");
    }
}

function showMenu_moblie() {
    var p = document.getElementById("body");
    p.classList.add("menu_opened");
    p.classList.add("menu_vh");
    var k = document.getElementById("close_menu");
    k.classList.remove("noneDisplay");
    document.getElementById("news").style.display = "none";
    document.getElementById("trending").style.display = "none";
    document.getElementById("happening_now").style.display = "none";
    var x = document.getElementById("header");
    x.classList.remove("header");
    x.classList.add("header_mobile");
    var z = document.getElementById("footer");
    z.classList.remove("footer_mobile");
    z.classList.add("footer_open");
    document.getElementById("openmenu_btn").style.display = "none";
    document.getElementById("nav_mobile").style.display = "unset";
    document.getElementById("icon1").style.display = "unset";
    document.getElementById("icon2").style.display = "unset";
    document.getElementById("icon3").style.display = "unset";
    document.getElementById("icon4").style.display = "unset";
    document.getElementById("icon5").style.display = "unset";
    document.getElementById("nav_with_pp").style.flexdirection = "column";
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    var r = document.getElementById("body");
    if ((r.classList.contains("menu_opened"))||(r.classList.contains("menu_opened_post"))) {
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            var p = document.getElementById("body");
            if (p.classList.contains("menu_opened")) {
                closeMenu();
            }
            if (p.classList.contains("menu_opened_post")) {
                closeMenu_post();
            }
        }
    }
};

function closeMenu() {
    var p = document.getElementById("body");
    p.classList.remove("menu_opened");
    p.classList.remove("menu_vh");
    var k = document.getElementById("close_menu");
    k.classList.add("noneDisplay");
    document.getElementById("news").style.display = "unset";
    document.getElementById("trending").style.display = "unset";
    document.getElementById("happening_now").style.display = "unset";
    var x = document.getElementById("header");
    x.classList.add("header");
    x.classList.remove("header_mobile");
    var z = document.getElementById("footer");
    z.classList.remove("footer_open");
    z.classList.add("footer_mobile");
    document.getElementById("openmenu_btn").style.display = "unset";
    document.getElementById("nav_mobile").style.display = "none";
    document.getElementById("icon1").style.display = "none";
    document.getElementById("icon2").style.display = "none";
    document.getElementById("icon3").style.display = "none";
    document.getElementById("icon4").style.display = "none";
    document.getElementById("icon5").style.display = "none";
    document.getElementById("nav_with_pp").style.flexdirection = "row";
}

function showMenu_moblie_post() {
    var p = document.getElementById("body");
    p.classList.add("menu_opened_post")
    var k = document.getElementById("close_menu");
    k.classList.remove("noneDisplay");
    document.getElementById("body").style.height = "100vh";
    document.getElementById("article_header").style.display = "none";
    document.getElementById("post_content").style.display = "none";
    var x = document.getElementById("header");
    x.classList.remove("header");
    x.classList.add("header_mobile");
    
    var z = document.getElementById("footer");
    z.classList.remove("footer_mobile");
    z.classList.add("footer_open");
    document.getElementById("openmenu_btn").style.display = "none";

    document.getElementById("nav_mobile").style.display = "unset";

    document.getElementById("icon1").style.display = "unset";
    document.getElementById("icon2").style.display = "unset";
    document.getElementById("icon3").style.display = "unset";
    document.getElementById("icon4").style.display = "unset";
    document.getElementById("icon5").style.display = "unset";
    document.getElementById("nav_with_pp").style.flexdirection = "column";
}

function closeMenu_post() {
    var p = document.getElementById("body");
    p.classList.remove("menu_opened_post");
    var k = document.getElementById("close_menu");
    k.classList.add("noneDisplay");
    document.getElementById("body").style.height = "";
    document.getElementById("article_header").style.display = "unset";
    document.getElementById("post_content").style.display = "unset";
    var x = document.getElementById("header");
    x.classList.add("header");
    x.classList.remove("header_mobile");

    var z = document.getElementById("footer");
    z.classList.remove("footer_open");
    z.classList.add("footer_mobile");
    document.getElementById("openmenu_btn").style.display = "unset";

    document.getElementById("nav_mobile").style.display = "none";

    document.getElementById("icon1").style.display = "none";
    document.getElementById("icon2").style.display = "none";
    document.getElementById("icon3").style.display = "none";
    document.getElementById("icon4").style.display = "none";
    document.getElementById("icon5").style.display = "none";
    document.getElementById("nav_with_pp").style.flexdirection = "row";
}