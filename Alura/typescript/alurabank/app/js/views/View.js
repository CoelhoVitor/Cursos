var View = /** @class */ (function () {
    function View(selector) {
        this._element = document.querySelector(selector);
    }
    View.prototype.update = function (model) {
        this._element.innerHTML = this.template(model);
    };
    View.prototype.template = function (model) {
        throw new Error("Você deve implementar o método template");
    };
    return View;
}());
