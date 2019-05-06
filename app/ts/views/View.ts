//namespace Views{ //namespace uma forma de acessar todas as VIEWS através de Views.
                 //precisa dar export nas classes para elas serem acessadas através do namespace Views
          
   export abstract class View <T> {//abstract não deixa instanciar a classe
        //<T> indica que recebe algum valor que será passado nas classes filhas "Negociacoes"(NegociacoesView) e "string"(MensagensView)
        protected _elemento: JQuery;
        private _escapar:boolean;
    
        constructor(seletor: string, escapar: boolean = false){
    
            this._elemento = $(seletor);
            this._escapar = escapar;
        }
    
        update(modelo: T){
            let template = this.template(modelo);
            if(this._escapar){
                template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            }

            this._elemento.html(template)
        }
    
        abstract template(modelo: T):string; //código apenas compila quando implementa template nas classes filhas
    
    }


