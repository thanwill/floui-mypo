import { Flow } from '~/interfaces/flow';
import FluxosController from '~/server/controllers/FlowController';
import { H3Event, createRouter, defineEventHandler, useBase } from 'h3';
import ambientes from '~/pages/ambientes.vue';

const fluxosController = new FluxosController("fluxos");

const router = createRouter();

router.get('/', defineEventHandler(fluxosController.getFluxos));

router.post('/', defineEventHandler(async (event: H3Event) => {
    try {
        const request = await readBody(event);
        console.log(request);
        const response = await fluxosController.createFluxo(request);
        console.log(response);
        return response;

    } catch (e) {
        console.log(e);
        throw e;
    }
}));

router.get('/', defineEventHandler((event: H3Event) => {
    const query = getQuery(event);

    if (query.ambiente) {
        const ambiente = query.ambiente as string;
        return fluxosController.getFluxoByAmbiente(ambiente);
    }

    if (query.empresa) {
        const empresa = query.empresa as string;
        return fluxosController.getFluxoByEmpresa(empresa);
    }

    if (query.search) {
        const search = query.search as string;
        return fluxosController.getFluxoByArquivo(search);
    }

    // se query não for ambiente ou empresa, retorna todos os fluxos
    return fluxosController.getFluxos();


}));

export default useBase('/api/v1/flow', router.handler);