const autentication = false;
const routes = ['/ambientes', '/login', '/404'];

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path === '/admin' && !autentication) {
        return navigateTo('/login');
    }
    if(to.path === '/login' && autentication) {
        return navigateTo('/ambientes');
    }




});