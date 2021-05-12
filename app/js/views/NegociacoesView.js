"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacoesView = void 0;
const View_1 = require("./View");
class NegociacoesView extends View_1.View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        <tr>
                    `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}
exports.NegociacoesView = NegociacoesView;
