"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(milisegundos = 500) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let timer;
        descriptor.value = function (...args) {
            if (event)
                event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
        };
        return descriptor;
    };
}
exports.throttle = throttle;
