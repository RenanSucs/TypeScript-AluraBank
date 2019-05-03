abstract class View <T> {//abstract não deixa instanciar a classe
    //<T> indica que recebe algum valor que será passado nas classes filhas "Negociacoes"(NegociacoesView) e "string"(MensagensView)
    protected _elemento: JQuery;

    constructor(seletor: string){

        this._elemento = $(seletor);
    }

    update(modelo: T){

        this._elemento.html(this.template(modelo))
    }

    abstract template(modelo: T):string; //código apenas compila quando implementa template nas classes filhas

}