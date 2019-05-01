class MensagensView extends View {

    update(modelo: string){

        this._elemento.innerHTML = this.template(modelo)
    }

    template(modelo: string){

        return `<p class="alert alert-info">${modelo}</p>`
    }
}