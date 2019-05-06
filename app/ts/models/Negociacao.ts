export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}
                //declara como privada e define o tipo da variavel: Date, number, string

    get volume(){

        return this.quantidade * this.valor;
    }
}