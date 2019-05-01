class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //: Array<Negociacao> é a mesma coisa que = Negociacao []
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
