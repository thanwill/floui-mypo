<template>
    <div id="app">
        <Headers />
        <NuxtPage /> <!-- This is the component that will be replaced by the page content -->
    </div>
</template>

<script setup>
useHead({
    title: 'Floui iPO',
    meta: [
        { hid: 'description', name: 'description', content: 'Gerencie seus projetos Floui com integração aos apps de equipe como Trello, Miro, Slack, WhatsApp e mais.' }
    ],
    htmlAttrs: {
        lang: 'pt-BR'
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/vento.png' }
    ]
})
useCookie({
    key: 'theme',
    value: 'dark',
    options: {
        expires: 7
    }
})

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>