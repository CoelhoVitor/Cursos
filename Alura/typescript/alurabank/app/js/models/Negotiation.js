System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiation = (function () {
                function Negotiation(_date, _amount, _value) {
                    this._date = _date;
                    this._amount = _amount;
                    this._value = _value;
                }
                Object.defineProperty(Negotiation.prototype, "date", {
                    get: function () {
                        return this._date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Negotiation.prototype, "amount", {
                    get: function () {
                        return this._amount;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Negotiation.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Negotiation.prototype, "volume", {
                    get: function () {
                        return this._amount * this._value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Negotiation;
            }());
            exports_1("Negotiation", Negotiation);
        }
    };
});
