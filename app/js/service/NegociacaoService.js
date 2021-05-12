"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacaoService = void 0;
const index_1 = require("../models/index");
class NegociacaoService {
    obterNegociacoes(handler) {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados) => dados.map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante)))
            .catch(err => {
            console.log(err.message);
            throw new Error('Não foi possível importar as negociações');
        });
    }
}
exports.NegociacaoService = NegociacaoService;
