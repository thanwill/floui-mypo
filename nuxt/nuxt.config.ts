// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  modules: [
    "nuxt-bootstrap-icons"
  ],
  css: ['bootstrap/dist/css/bootstrap.min.css'], 
  build: {
    transpile: ['vue-bootstrap-icons']
  },
  components: true,
})

