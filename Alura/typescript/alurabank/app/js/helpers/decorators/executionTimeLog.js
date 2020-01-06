System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function executionTimeLog(seconds) {
        if (seconds === void 0) { seconds = false; }
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var unity = "ms";
                var divider = 1;
                if (seconds) {
                    unity = "s";
                    divider = 1000;
                }
                console.log("-----------------------");
                console.log("Par\u00E2metros do m\u00E9todo " + propertyKey + ": " + JSON.stringify(args));
                var t1 = performance.now();
                var ret = originalMethod.apply(this, args);
                console.log("Resultado do m\u00E9todo: " + JSON.stringify(ret));
                var t2 = performance.now();
                console.log(propertyKey + " demorou " + (t2 - t1) / divider + " " + unity);
                console.log("-----------------------");
                return ret;
            };
            return descriptor;
        };
    }
    exports_1("executionTimeLog", executionTimeLog);
    return {
        setters: [],
        execute: function () {
        }
    };
});
