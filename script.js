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
    document.getElementById("body").style.height = "140vh";
    document.getElementById("news").style.display = "none";
    document.getElementById("trending").style.display = "none"
    document.getElementById("happening_now").style.display = "none"
    var x = document.getElementById("header");
    x.classList.add("header_open");
    var z = document.getElementById("footer");
    z.classList.remove("footer_mobile");
    z.classList.add("footer_open");
}