System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../Servicos/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
                index_4 = index_3_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagensView = new index_1.MensagensView('#mensagemView');
                    this._Service = new index_5.NegociacaoService();
                }
                adiciona() {
                    const t1 = performance.now();
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
                importaDados() {
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    this._Service
                        .obterNegociacoes(isOk)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
            };
            __decorate([
                index_4.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_4.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_4.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_4.throttle(),
                index_3.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_4.throttle()
            ], NegociacaoController.prototype, "importaDados", null);
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
