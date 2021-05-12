"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociacao = void 0;
class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        console.log('Impressão');
        console.log(`Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}`);
    }
    ehIgual(negociacao) {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear()
            && this.quantidade == negociacao.quantidade
            && this.valor == negociacao.valor
            && this.volume == negociacao.volume;
    }
}
exports.Negociacao = Negociacao;
