class MensagensView{

    private _elemento: Element;

    constructor(seletor: string){

        this._elemento = document.querySelector(seletor);
    }

    update(modelo: string){

        this._elemento.innerHTML = this.template(modelo)
    }

    template(modelo: string){

        return `<p class="alert alert-info">${modelo}</p>`
    }
}