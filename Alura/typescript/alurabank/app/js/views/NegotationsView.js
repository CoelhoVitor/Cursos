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
var NegotiationsView = /** @class */ (function (_super) {
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
            .join("") + "\n        </tbody>\n\n        <tfoot></tfoot>\n      </table>\n    ";
    };
    return NegotiationsView;
}(View));
