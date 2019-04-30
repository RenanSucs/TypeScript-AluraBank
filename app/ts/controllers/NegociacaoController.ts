class NegociacaoController {

    private _inputData: HTMLInputElement; //declarando tipo input
    private _inputQuantidade: HTMLInputElement;//Alguns tipos: HTMLInputElement, HTMLTableElement, HTMLAnchorElement
    private _inputValor: HTMLInputElement;

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data');//passando formato input para o querySelector
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.value, 
            this._inputQuantidade.value, 
            this._inputValor.value);

        console.log(negociacao);
    }
}