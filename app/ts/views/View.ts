//namespace Views{ //namespace uma forma de acessar todas as VIEWS através de Views.
                 //precisa dar export nas classes para elas serem acessadas através do namespace Views
          
   export abstract class View <T> {//abstract não deixa instanciar a classe
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


