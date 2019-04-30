class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number){}
                //declara como privada e define o tipo da variavel: Date, number, string
    get data(){

        return this._data;
    }

    get quantidade(){

        return this._quantidade;
    }

    get valor(){

        return this._valor;
    }

    get volume(){

        return this.quantidade * this._valor;
    }
}