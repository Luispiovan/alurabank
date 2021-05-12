import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, NegociacaoParcial, Negociacoes } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { HandlerFunction, NegociacaoService } from '../service/index';
import { error } from 'jquery';
import { imprime } from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    private _negociacaoService = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(): void {

        let data = new Date(this._inputData.val().toString().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Dia solicitado indisponível, escolha somente dias úteis!')
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val().toString()),
            parseFloat(this._inputValor.val().toString())
        );

        this._negociacoes.adiciona(negociacao);
        imprime(negociacao, this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

    }

    @throttle()
    importaDados() {

        const isOK: HandlerFunction = (res: Response) => {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error(res.statusText);
            }
        }
        
        this._negociacaoService.obterNegociacoes(isOK)
        .then(negociacao => {
            negociacao.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        });
    }

    private _ehDiaUtil(_data: Date): boolean {
        return _data.getDay() != DiaDaSemana.Sabado && _data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}