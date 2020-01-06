System.register(["../models/index", "../views/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, timer, NegotiationController, WeekDay;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegotiationController = (function () {
                function NegotiationController() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negociacoesView", true);
                    this._messageView = new index_2.MessageView("#mensagemView");
                    this._negotiationsView.update(this._negotiations);
                }
                NegotiationController.prototype._isBusinessDay = function (date) {
                    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
                };
                NegotiationController.prototype.add = function () {
                    var date = new Date(this._inputDate.val().toString());
                    if (!this._isBusinessDay(date)) {
                        this._messageView.update("Somente negociações em dias úteis");
                    }
                    var negotiation = new index_1.Negotiation(date, parseInt(this._inputAmount.val().toString()), parseFloat(this._inputValue.val().toString()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negociação adicionada com sucesso!");
                };
                NegotiationController.prototype.importData = function () {
                    var _this = this;
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch("http://localhost:8080/dados")
                        .then(function (res) { return isOk(res); })
                        .then(function (res) { return res.json(); })
                        .then(function (datas) {
                        datas
                            .map(function (data) { return new index_1.Negotiation(new Date(), data.vezes, data.montante); })
                            .forEach(function (negotitation) { return _this._negotiations.add(negotitation); });
                        _this._negotiationsView.update(_this._negotiations);
                    })
                        .catch(function (err) { return console.log(err.message); });
                };
                __decorate([
                    index_3.domInject("#data")
                ], NegotiationController.prototype, "_inputDate", void 0);
                __decorate([
                    index_3.domInject("#quantidade")
                ], NegotiationController.prototype, "_inputAmount", void 0);
                __decorate([
                    index_3.domInject("#valor")
                ], NegotiationController.prototype, "_inputValue", void 0);
                __decorate([
                    index_3.throttle()
                ], NegotiationController.prototype, "add", null);
                __decorate([
                    index_3.throttle()
                ], NegotiationController.prototype, "importData", null);
                return NegotiationController;
            }());
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDay) {
                WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
                WeekDay[WeekDay["Monday"] = 1] = "Monday";
                WeekDay[WeekDay["Thuesday"] = 2] = "Thuesday";
                WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
                WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
                WeekDay[WeekDay["Friday"] = 5] = "Friday";
                WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
