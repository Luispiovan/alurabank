export function throttle(milisegundos: number = 500) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        let timer: NodeJS.Timeout;
        descriptor.value = function (...args: any[]) {
            if (event) event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);        
        }
        return descriptor;
    }
}