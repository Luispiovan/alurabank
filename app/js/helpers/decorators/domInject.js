"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domInject = void 0;
function domInject(seletor) {
    return function (target, key) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log('-----------------------------------');
                console.log(`Buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
exports.domInject = domInject;
