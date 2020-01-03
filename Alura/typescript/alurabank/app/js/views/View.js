System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = (function () {
                function View(selector, escape) {
                    if (escape === void 0) { escape = false; }
                    this._element = $(selector);
                    this._escape = escape;
                }
                View.prototype.update = function (model) {
                    var template = this.template(model);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, "");
                    }
                    this._element.html(template);
                };
                return View;
            }());
            exports_1("View", View);
        }
    };
});
