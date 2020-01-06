System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiations = (function () {
                function Negotiations() {
                    this._negotiations = [];
                }
                Negotiations.prototype.add = function (negotiation) {
                    this._negotiations.push(negotiation);
                };
                Negotiations.prototype.toArray = function () {
                    return [].concat(this._negotiations);
                };
                return Negotiations;
            }());
            exports_1("Negotiations", Negotiations);
        }
    };
});
