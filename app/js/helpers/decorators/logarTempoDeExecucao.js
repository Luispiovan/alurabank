"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let unidade = 'ms';
            let divisor = 1;
            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            console.log('-----------------------------------');
            console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do metodo ${propertyKey} eh ${JSON.stringify(retorno)}`);
            console.log(`O metodo ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
