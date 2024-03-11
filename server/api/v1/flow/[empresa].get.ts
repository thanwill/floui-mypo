import { Flow } from "~/interfaces/flow"


export default defineEventHandler((event) => {


    async function getFluxos(empresa: string): Promise<Object> {
        let data: Flow[] = [
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
                "cliente": "roge",
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
        let payload = {};
        const requestEmpresa = event.context.params?.empresa;

        if (requestEmpresa) {
            data = data.filter((flow) => flow.cliente === requestEmpresa)


            if (data.length === 0) {

                payload = {
                    status: 404,
                    message: `Nenhum fluxo encontrado para a empresa ${requestEmpresa}.`,
                    data: data
                }
            } else {
                payload = {
                    status: 200,
                    message: `${data.length} fluxos encontrados para a empresa ${requestEmpresa}.`,
                    data: data
                }

            }
        }

        return payload
    }


})