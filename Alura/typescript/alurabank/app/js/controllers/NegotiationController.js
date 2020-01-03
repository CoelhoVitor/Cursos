System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegotiationController, WeekDay;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = (function () {
                function NegotiationController() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negociacoesView", true);
                    this._messageView = new index_2.MessageView("#mensagemView");
                    this._inputDate = $("#data");
                    this._inputAmount = $("#quantidade");
                    this._inputValue = $("#valor");
                    this._negotiationsView.update(this._negotiations);
                }
                NegotiationController.prototype._isBusinessDay = function (date) {
                    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
                };
                NegotiationController.prototype.add = function (event) {
                    var t1 = performance.now();
                    event.preventDefault();
                    var date = new Date(this._inputDate.val().toString());
                    if (!this._isBusinessDay(date)) {
                        this._messageView.update("Somente negociações em dias úteis");
                    }
                    var negotiation = new index_1.Negotiation(new Date(this._inputDate.val().toString()), parseInt(this._inputAmount.val().toString()), parseFloat(this._inputValue.val().toString()));
                    this._negotiations.toArray().forEach(function (negotiation) {
                        console.log(negotiation.date);
                        console.log(negotiation.amount);
                        console.log(negotiation.value);
                    });
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negociação adicionada com sucesso!");
                    var t2 = performance.now();
                    console.log("O tempo de execu\u00E7\u00E3o de add \u00E9 " + (t2 - t1) + "ms");
                };
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
