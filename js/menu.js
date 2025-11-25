const menu = $("#main-menu");
const btn = $("#btn-menu");
const mql = window.matchMedia("(width < 1024px)");
const attr = "open";

mql.addEventListener("change", screenTest);
btn.addEventListener("click", showHideMenu);
window.addEventListener("load", onWindowLoad);
window.addEventListener("scroll", onWindowScroll);

function onWindowLoad() {
    screenTest(mql);
}

function onWindowScroll() {
    if (menu.hasAttribute(attr)) {
        window.scrollTo(0, 0);
    }
}

function screenTest(e) {
    if (e.matches) {
        btn.style.display = "block";
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