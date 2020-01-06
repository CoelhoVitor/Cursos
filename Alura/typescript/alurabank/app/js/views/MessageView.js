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
    var View_1, MessageView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MessageView = (function (_super) {
                __extends(MessageView, _super);
                function MessageView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MessageView.prototype.template = function (model) {
                    return "<p class=\"alert alert-info\">" + model + "</p>";
                };
                return MessageView;
            }(View_1.View));
            exports_1("MessageView", MessageView);
        }
    };
});
