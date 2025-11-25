const menu = $("#main-menu");
const btn = $("#btn-menu");
const mql = window.matchMedia("(width < 1024px)");
const attr = "open";

mql.addEventListener("change", screenTest);
btn.addEventListener("click", showHideMenu);
window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
    screenTest(mql);
}

function screenTest(e) {
    if (e.matches) {
        btn.style.display = "";
    } else {
        btn.style.display = "none";
        menu.removeAttribute(attr, "");
    }
}

function showHideMenu() {
    let sp = btn.$("span");

    if (!menu.hasAttribute(attr)) {
        menu.setAttribute(attr, "");
    }
    else {
        menu.removeAttribute(attr, "");
    }
}