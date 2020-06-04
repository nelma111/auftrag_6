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
    document.getElementById("body").style.height = "100vh";
    document.getElementById("news").style.display = "none";
    document.getElementById("trending").style.display = "none";
    document.getElementById("happening_now").style.display = "none";
    var x = document.getElementById("header");
    x.classList.remove("header");
    x.classList.add("header_mobile")
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