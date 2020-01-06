System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(miliseconds) {
        if (miliseconds === void 0) { miliseconds = 500; }
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value;
            var timer = 0;
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                timer = setTimeout(function () { return originalMethod.apply(_this, args); }, miliseconds);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
