import {Negociacao} from './Negociacao'
export class Negociacoes{

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{//void nao aceita return no método que adiciona, caso tente dar return, o typescript avisa o erro

        this._negociacoes.push(negociacao);
    }
            //: Array<Negociacao> é a mesma coisa que = Negociacao []
    paraArray(): Negociacao[] {//indico que o método adiciona vai retornar um array de negociacao, consigo apenas retornar este array neste método

        return [].concat(this._negociacoes);
    }
}