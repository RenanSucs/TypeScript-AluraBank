class NegociacaoController {

    private _inputData: HTMLInputElement; //declarando tipo input
    private _inputQuantidade: HTMLInputElement;//Alguns tipos: HTMLInputElement, HTMLTableElement, HTMLAnchorElement
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes;

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data');//passando formato input para o querySelector
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value));

        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().length = 0;
        this._negociacoes.paraArray().forEach(negociacao => {

            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        })
    }
}