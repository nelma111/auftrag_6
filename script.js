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