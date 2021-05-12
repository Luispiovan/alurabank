"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprime = void 0;
function imprime(...objetos) {
    objetos.forEach(objeto => objeto.paraTexto());
}
exports.imprime = imprime;
