"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./controllers/index");
const controller = new index_1.NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));
