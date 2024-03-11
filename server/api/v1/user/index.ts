
import { H3Event, createRouter, defineEventHandler, useBase } from 'h3';
import UserController from '@/server/controllers/UserController';

const userController = new UserController;

const router = createRouter();

router.get('/', defineEventHandler(async (event: H3Event) => {
    return {
        status: 200,
        body: {
            message: "Hello, world!"
        }
    }
}) );

router.post('/', defineEventHandler(async (event: H3Event) => {
    try {
        const request = await readBody(event);
        console.log("request", request);
        const response = await userController.createUser(request.email, request.senha);
        return response;

    } catch (e) {
        console.log("error", e);
        throw e;
    }
}));

export default useBase('/api/v1/user', router.handler);


