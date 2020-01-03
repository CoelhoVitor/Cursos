System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var View_1, NegotiationsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = (function (_super) {
                __extends(NegotiationsView, _super);
                function NegotiationsView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NegotiationsView.prototype.template = function (model) {
                    return "\n      <table class=\"table table-hover table-bordered\">\n        <thead>\n          <tr>\n            <th>DATA</th>\n            <th>QUANTIDADE</th>\n            <th>VALOR</th>\n            <th>VOLUME</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          " + model
                        .toArray()
                        .map(function (negotiation) {
                        return "\n              <tr>\n                <td>" + negotiation.date.toLocaleDateString("pt-Br", {
                            timeZone: "UTC"
                        }) + "</td>\n                <td>" + negotiation.amount + "</td>\n                <td>" + negotiation.value + "</td>\n                <td>" + negotiation.volume + "</td>\n              </tr>\n              ";
                    })
                        .join("") + "\n        </tbody>\n\n        <tfoot></tfoot>\n      </table>\n      <script>alert(\"oi\");</script>\n    ";
                };
                return NegotiationsView;
            }(View_1.View));
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
