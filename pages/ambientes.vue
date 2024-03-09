<template>
    <main>
        <main class="col-sm-12 col-md-12 pt-3">
            <div class="row">
                <section class="col-sm-12 col-md-4 offset-md-1 col-lg-3 mb-3">
                    <h3 class="text-start text-body-secondary">
                        <i class="bi bi-filter"></i>
                        Filtros
                    </h3>
                    <article>
                        <div>
                            <label for="exampleDataList" class="form-label">Pesquisa por ambiente</label>
                            <input class="form-control" list="datalistOptions" id="exampleDataList"
                                placeholder="Escreva para pesquisar...">
                            <datalist id="datalistOptions">
                                <option v-for="ambiente in ambientes" :key="ambiente" :value="ambiente" />
                            </datalist>
                        </div>
                        <hr>
                        <div class="list-group">
                            <button v-for="(cliente, index) in clients" :key="index" type="button"
                                class="list-group-item list-group-item-action">
                                {{ cliente.nome }}
                            </button>
                        </div>
                        <LoggersAdd />
                    </article>
                </section>
                <aside class="col-sm-12 col-md-7 col-lg-7">
                    <h2 class="text-start">Fluxos</h2>
                    <div class="">
                        <nav class="navbar bg-body-tertiary ">
                            <div class="container-fluid">
                                <form class="d-flex " role="search">
                                    <input class="form-control" type="search" placeholder="Pesquisar"
                                        aria-label="Search">
                                </form>
                                <div class="justify-content-center">
                                    <button type="button" class="btn btn-outline-secondary me-3">Limpar</button>
                                    <button type="button" class="btn btn-outline-success"
                                        @click="addCity">Adicionar</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="aside">
                        <div class="accordion accordion-flush" id="accordionFlows" v-for="(flow, index) in flows"
                            :key="index">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#' + index" aria-expanded="false" :aria-controls="index">
                                        <span class="badge rounded-pill me-3"
                                            :class="{ 'text-bg-danger': flow.ambiente !== 'staging', 'text-bg-success': flow.ambiente === 'staging' }">
                                            {{ flow.ambiente }}
                                        </span>
                                        {{ flow.arquivo }}
                                    </button>
                                </h2>
                                <div :id="index" class="accordion-collapse collapse" data-bs-parent="#accordionFlows">
                                    <div class="accordion-body">
                                        <div v-if="flow.loggers.length > 0">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">uid</th>
                                                        <th scope="col">label</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(logger, index) in flow.loggers" :key="index">
                                                    <tr>
                                                        <th scope="row">{{ index + 1 }}</th>
                                                        <td>{{ logger.uid }}</td>
                                                        <td class="text-start">
                                                            {{ logger.label ? logger.label : 'Sem rótulo' }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div v-else>
                                            <p class="">Nenhum logger encontrado</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </aside>
            </div>
        </main>
        <div class="b-example-divider"></div>
    </main>
</template>

<script setup lang="ts">

import type { Flow } from '~/interfaces/flow'


const ambientes = ["production", "staging", "homolog", "development"];

const clients = [
    { nome: "rogê", contagem: 10 },
    { nome: "fokus fit", contagem: 20 },
    { nome: "fashion4all", contagem: 30 },
    { nome: "ajinomoto", contagem: 20 }
];

const flows: Flow[] = [
    {
        "ambiente": "production",
        "arquivo": "production-fokusfit-insero-de-pedidos-v3",
        "cliente": "fokusfit",
        "loggers": [
            {
                "label": "Pedido completo",
                "type": "core_logger",
                "uid": "t1b3nmxxa"
            },
            {
                "label": "Erro ao consultar pedido",
                "type": "core_logger",
                "uid": "cv7aljnox"
            },
            {
                "label": "Novo pedido cadastrado no ERP",
                "type": "core_logger",
                "uid": "n6ka4vpmk"
            },
            {
                "label": "Falha no cadastro de novo pedido no ERP",
                "type": "core_logger",
                "uid": "9zwslhqfq"
            },
            {
                "label": "Falha de comunicação no cadastro de novo pedido na Wake Commerce",
                "type": "core_logger",
                "uid": "qoux6ryhb"
            },
            {
                "label": "Cliente não foi criado no erp",
                "type": "core_logger",
                "uid": "21byaocyz"
            },
            {
                "label": "SUCESSO - criar pedido - criou o pedido",
                "type": "core_logger",
                "uid": "21iydqb6h"
            },
            {
                "label": "",
                "type": "core_logger",
                "uid": "xt3r30lio"
            },
            {
                "label": "Item do pedido já foi criado",
                "type": "core_logger",
                "uid": "uz50ji93t"
            },
            {
                "label": "Item do pedido já foi criado",
                "type": "core_logger",
                "uid": "89gus5jx4"
            }
        ]
    },
    {
        "ambiente": "production",
        "arquivo": "production-atualizao-de-estoques",
        "cliente": "fokusfit",
        "loggers": [
            {
                "label": "productionuto não localizado na wake",
                "type": "core_logger",
                "uid": "tluxg30t2"
            },
            {
                "label": "Erro ao atualizar estoque",
                "type": "core_logger",
                "uid": "otztkv1fd"
            },
            {
                "label": "Erro ao atualizar estoque (Conectividade)",
                "type": "core_logger",
                "uid": "6f56d6yw5"
            },
            {
                "label": "Estoque atualizado com sucesso",
                "type": "core_logger",
                "uid": "fabaac4en"
            },
            {
                "label": "Fim do fluxo",
                "type": "core_logger",
                "uid": "pqsg2v2gu"
            },
            {
                "label": "productionuto sem numeração",
                "type": "core_logger",
                "uid": "vkd9tr2yo"
            },
            {
                "label": "",
                "type": "core_logger",
                "uid": "u4vbwh6y2"
            }
        ]
    },
    {
        "ambiente": "production",
        "arquivo": "production-atualizao-de-produtos",
        "cliente": "fokusfit",
        "loggers": [
            {
                "label": "productionuto não cadastrado na wake",
                "type": "core_logger",
                "uid": "imc4068nn"
            },
            {
                "label": "productionuto com erro de comunicação",
                "type": "core_logger",
                "uid": "envr8irj8"
            },
            {
                "label": "productionuto com erro de integração",
                "type": "core_logger",
                "uid": "208ux6441"
            },
            {
                "label": "productionuto atualizado com sucesso",
                "type": "core_logger",
                "uid": "mx7ys4s19"
            },
            {
                "label": "Inicio da fase 2",
                "type": "core_logger",
                "uid": "hd1dxyu9j"
            },
            {
                "label": "Fim da fase 2",
                "type": "core_logger",
                "uid": "5wucsbxlj"
            }
        ]
    },
    {
        "ambiente": "production",
        "arquivo": "production-fluxo-para-novos-produtos-",
        "cliente": "fokusfit",
        "loggers": [
            {
                "label": "productionuto ignorado na integração de novos produtos",
                "type": "core_logger",
                "uid": "behaqw8vk"
            },
            {
                "label": "",
                "type": "core_logger",
                "uid": "o5jmi2wod"
            },
            {
                "label": "",
                "type": "core_logger",
                "uid": "40rj9b6v6"
            },
            {
                "label": "productionuto sem preço de venda",
                "type": "core_logger",
                "uid": "7x7mz6k4b"
            },
            {
                "label": "productionuto sem categoria",
                "type": "core_logger",
                "uid": "ly19dz1kc"
            },
            {
                "label": "comunicação no cadastro de novo productionuto na Wake Commerce",
                "type": "core_logger",
                "uid": "ye8q5u6r2"
            },
            {
                "label": "Novo productionuto cadastrado na Wake Commerce",
                "type": "core_logger",
                "uid": "gimvz7ivi"
            },
            {
                "label": "Falha no cadastro de novo productionuto na Wake Commerce",
                "type": "core_logger",
                "uid": "b0j2yh8sz"
            },
            {
                "label": "Falha de comunicação no cadastro de novo productionuto na Wake Commerce",
                "type": "core_logger",
                "uid": "5z1a4xtug"
            },
            {
                "label": "productionuto não tem códigoTG",
                "type": "core_logger",
                "uid": "8fvcrhum3"
            },
            {
                "label": "ClassificaçãoABC diferente de F",
                "type": "core_logger",
                "uid": "jdfnlrt18"
            },
            {
                "label": "productionuto ja cadastrado na wake",
                "type": "core_logger",
                "uid": "td50iyz64"
            },
            {
                "label": "productionuto ja cadastrado na wake",
                "type": "core_logger",
                "uid": "lrqv90ife"
            },
            {
                "label": "Erro ao cadastrar productionuto",
                "type": "core_logger",
                "uid": "s9npsfxr3"
            },
            {
                "label": "Log template_productionuct",
                "type": "core_logger",
                "uid": "iph8m99rw"
            }
        ]
    },
    {
        "ambiente": "production",
        "arquivo": "production-atualizao-de-pedidos-",
        "cliente": "fokusfit",
        "loggers": [
            {
                "label": "Pedido faturado sem nota fiscal",
                "type": "core_logger",
                "uid": "1e9670z8g"
            },
            {
                "label": "Pedido atualizado na Wake Commerce",
                "type": "core_logger",
                "uid": "kr49ccc2h"
            },
            {
                "label": "Falha de atualização do pedido na Wake Commerce",
                "type": "core_logger",
                "uid": "n78qdawui"
            },
            {
                "label": "Falha de comunicação para atualizar o pedido na Wake Commerce",
                "type": "core_logger",
                "uid": "yt1sda833"
            },
            {
                "label": "Pedido  encontrado no floui",
                "type": "core_logger",
                "uid": "xf14s934w"
            },
            {
                "label": "Fim do fluxo",
                "type": "core_logger",
                "uid": "bz8gu0gfz"
            },
            {
                "label": "Erro - Cigam - Pedido com controle não tratado",
                "type": "core_logger",
                "uid": "19zeh0qkh"
            }
        ]
    }
]


</script>

<style lang="scss" scoped>
// adiciona cores na estrutura para identificar os elementos

* {
    padding: 10px;
}

body {
    background-color: pink;

}

.aside {
    background-color: #fff;
    min-height: 50vh;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

section {
    background-color: #fff;
}
</style>~/interfaces/flow