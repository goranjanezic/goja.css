Node.prototype.$ = function (selectors) {
    return this.querySelector(selectors);
}

Node.prototype.$$ = function (selectors) {
    return this.querySelectorAll(selectors);
}

function $(selectors) {
    return document.$(selectors);
}

function $$(selectors) {
    return document.$$(selectors);
}