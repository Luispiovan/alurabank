"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemView = void 0;
const View_1 = require("./View");
class MensagemView extends View_1.View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
exports.MensagemView = MensagemView;
