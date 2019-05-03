class NegociacaoController {
    
    //declarando sem JQuery

    //private _inputData: HTMLInputElement; //declarando tipo input
    //private _inputQuantidade: HTMLInputElement;//Alguns tipos: HTMLInputElement, HTMLTableElement, HTMLAnchorElement
    //private _inputValor: HTMLInputElement;


    //declarando com JQuery
    private _inputData: JQuery; 
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new Views.NegociacoesView('#negociacoesView');
    private _mensagensView = new Views.MensagensView('#mensagemView')

    constructor() {

        //this._inputData = <HTMLInputElement>document.querySelector('#data');//passando formato input para o querySelector
        //this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        //this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val()));

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);  
        this._mensagensView.update('Negociação adicionada com sucesso');
    }
}