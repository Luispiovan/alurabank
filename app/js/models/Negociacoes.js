"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociacoes = void 0;
class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
    paraTexto() {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}
exports.Negociacoes = Negociacoes;
