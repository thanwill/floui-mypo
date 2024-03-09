import FluxosController from '@/server/controllers/fluxosController';
import { Request, Response } from 'express';

export default defineEventHandler(async () => {

    return {
        async getFluxos(req: Request, res: Response) {
            const fluxos = await FluxosController.getFluxos();
            res.status(fluxos.status).json(fluxos);
        }
    }
});