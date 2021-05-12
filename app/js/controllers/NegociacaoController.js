"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacaoController = void 0;
const index_1 = require("../views/index");
const index_2 = require("../models/index");
const index_3 = require("../helpers/decorators/index");
const index_4 = require("../service/index");
const index_5 = require("../helpers/index");
class NegociacaoController {
    constructor() {
        this._negociacoes = new index_2.Negociacoes();
        this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
        this._mensagemView = new index_1.MensagemView('#mensagemView');
        this._service = new index_4.NegociacaoService();
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        let data = new Date(this._inputData.val().toString().replace(/-/g, ','));
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociação em dias úteis, por favor!');
            return;
        }
        const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val().toString()), parseFloat(this._inputValor.val().toString()));
        this._negociacoes.adiciona(negociacao);
        index_5.imprime(negociacao, this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    _ehDiaUtil(data) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    importaDados() {
        this._service
            .obterNegociacoes(res => {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error(res.statusText);
            }
        })
            .then(negociacoesParaImportar => {
            const negociacoesJaImportadas = this._negociacoes.paraArray();
            negociacoesParaImportar.filter(negociacao => !negociacoesJaImportadas
                .some(jaImportada => negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        });
    }
}
__decorate([
    index_3.domInject('#data')
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    index_3.domInject('#quantidade')
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    index_3.domInject('#valor')
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    index_3.throttle()
], NegociacaoController.prototype, "adiciona", null);
__decorate([
    index_3.throttle()
], NegociacaoController.prototype, "importaDados", null);
exports.NegociacaoController = NegociacaoController;
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
