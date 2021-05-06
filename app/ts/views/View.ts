export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {
        let _template = this.template(model);
        if (this._escapar) 
            _template = _template.replace(`/<script>[\s\S]*?</script>/g`, '');   
        this._elemento.html(_template);
    }

    abstract template(model: T): string;

}
