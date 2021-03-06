import { NegociacoesView, MensagensView  } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import {logarTempoDeExecucao } from '../helpers/decorators/index';
import { domInject, throttle } from '../helpers/decorators/index';
import {NegociacaoService } from '../Servicos/index';
//IMPORTA TUDO O QUE É SOLICITADO DE TS NO CONTROLLER. O RESPONSAVEL PELO CARREGAMENTO(LOADER) É O SYSTEM.JS QUE ESTÁ NO INDEX.HTML


export class NegociacaoController {
    
    //declarando sem JQuery

    //private _inputData: HTMLInputElement; //declarando tipo input
    //private _inputQuantidade: HTMLInputElement;//Alguns tipos: HTMLInputElement, HTMLTableElement, HTMLAnchorElement
    //private _inputValor: HTMLInputElement;


    //declarando com JQuery
    @domInject('#data')
    private _inputData: JQuery;
    
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagensView = new MensagensView('#mensagemView');

    private _Service = new NegociacaoService();

    constructor() {

        //this._inputData = <HTMLInputElement>document.querySelector('#data');//passando formato input para o querySelector
        //this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        //this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        
        //paramos de declarar no construtor para nao consumir memória e ser apenas chamado quando necessário com o dominject
        //this._inputData = $('#data');
        //this._inputQuantidade = $('#quantidade');
        //this._inputValor = $('#valor');
        //this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    @logarTempoDeExecucao()//decorator
    adiciona() {

        const t1 = performance.now();//teste de performance, vai ser substituido por um decorator

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(data.getDay() == DiasDaSemana.Domingo || data.getDay() == DiasDaSemana.Sabado){
            this._mensagensView.update('Negociações podem ser feitas apenas em dias úteis!');
            return
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val()));

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);  
        this._mensagensView.update('Negociação adicionada com sucesso');

        const t2 = performance.now(); //performance
        console.log(`o tempo do metodo adiciona foi de ${t2 - t1}`)
    }
    
    @throttle()//decorator responsavel por atrasar a requisição do ajax em meio segundo para evitar multiplos cliques no botao importar
    importaDados(){//fetch API para retornar dados da API

        function isOk(res: Response){//tipo resposta para o typescript ajudar no autocomplete "res.statusText"

            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }
        }
       
        this._Service
            .obterNegociacoes(isOk)
            .then(negociacoes => {
                negociacoes.forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao))
                
                    this._negociacoesView.update(this._negociacoes);
                });
    }
}

enum DiasDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

