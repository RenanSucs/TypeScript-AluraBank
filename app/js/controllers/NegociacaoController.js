System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagensView = new index_1.MensagensView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    const t1 = performance.now();
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (data.getDay() == DiasDaSemana.Domingo || data.getDay() == DiasDaSemana.Sabado) {
                        this._mensagensView.update('Negociações podem ser feitas apenas em dias úteis!');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagensView.update('Negociação adicionada com sucesso');
                    const t2 = performance.now();
                    console.log(`o tempo do metodo adiciona foi de ${t2 - t1}`);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiasDaSemana) {
                DiasDaSemana[DiasDaSemana["Domingo"] = 0] = "Domingo";
                DiasDaSemana[DiasDaSemana["Segunda"] = 1] = "Segunda";
                DiasDaSemana[DiasDaSemana["Terca"] = 2] = "Terca";
                DiasDaSemana[DiasDaSemana["Quarta"] = 3] = "Quarta";
                DiasDaSemana[DiasDaSemana["Quinta"] = 4] = "Quinta";
                DiasDaSemana[DiasDaSemana["Sexta"] = 5] = "Sexta";
                DiasDaSemana[DiasDaSemana["Sabado"] = 6] = "Sabado";
            })(DiasDaSemana || (DiasDaSemana = {}));
        }
    };
});
