    //import View = Views.View; //para nao ter que ficar digitando Views.view
    import { View } from './View'
    
    export class MensagensView extends View<string> {

        template(modelo: string): string{
    
            return `<p class="alert alert-info">${modelo}</p>`
        }
    }


