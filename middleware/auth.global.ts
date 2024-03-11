const autentication = false;

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path === '/' && !autentication) {
        return navigateTo('/login');
    }
    if(to.path === '/login' && autentication) {
        return navigateTo('/ambientes');
    }
});