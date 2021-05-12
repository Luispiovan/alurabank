"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const index_1 = require("../helpers/decorators/index");
class View {
    constructor(seletor, escapar = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
    update(model) {
        let _template = this.template(model);
        if (this._escapar)
            _template = _template.replace(`/<script>[\s\S]*?</script>/g`, '');
        this._elemento.html(_template);
    }
}
__decorate([
    index_1.logarTempoDeExecucao(true)
], View.prototype, "update", null);
exports.View = View;
