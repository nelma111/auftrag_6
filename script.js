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
    p.classList.add("menu_opened")

    document.getElementById("body").style.height = "100vh";
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
    if (r.classList.contains("menu_opened")) {
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            cloceMenu();
        }
    }
};

function cloceMenu() {
    var p = document.getElementById("body");
    p.classList.remove("menu_opened")
    document.getElementById("body").style.height = "530vh";
    document.getElementById("news").style.display = "unset";
    document.getElementById("trending").style.display = "unset";
    document.getElementById("happening_now").style.display = "unset";
    var x = document.getElementById("header");
    x.classList.add("header");
    x.classList.remove("header_mobile");

    var z = document.getElementById("footer");
    z.classList.add("footer_mobile");
    z.classList.remove("footer_open");
    document.getElementById("openmenu_btn").style.display = "unset";

    document.getElementById("nav_mobile").style.display = "none";

    document.getElementById("icon1").style.display = "none";
    document.getElementById("icon2").style.display = "none";
    document.getElementById("icon3").style.display = "none";
    document.getElementById("icon4").style.display = "none";
    document.getElementById("icon5").style.display = "none";
    document.getElementById("nav_with_pp").style.flexdirection = "row";
}