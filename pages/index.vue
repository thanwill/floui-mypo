<template>
    <div>
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/assets/Floui.png" alt="Logo" width="200" height="auto"
                            class="d-inline-block align-text-top">
                    </a>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Ambientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Perfil</a>
                        </li>
                    </ul>
                </div>
                <nav class="navbar fixed-bottom bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Fixed bottom</a>
                    </div>
                </nav>
            </nav>
            <main class="container-fluid mt-5 col-sm-10 offset-sm-1">
                <div class="row">
                    <section class="col-md-4 col-lg-3 mb-3">
                        <h2 class="text-start mb-3 text-body-secondary">
                            <i class="bi bi-filter"></i>
                            Filtros
                        </h2>
                        <article>

                        </article>
                    </section>
                    <aside class="col-sm-12 col-md-8 col-lg-6 offset-lg-1 mb-3">
                        <h2 class="text-start mb-3">Fluxos</h2>
                        <div>
                            <FlowSearch @search="searchFlows" @addFlow="addFlow" />
                            <FlowList :filters="filters" :searchName="search" :flowData="flows" />
                        </div>
                    </aside>
                </div>
            </main>

            <ModalComponent id="addFlowModal" title="Crie um novo ambiente"
                body="Selecione seus fluxos e relacione-os a um cliente do Floui." />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// adiciona cores na estrutura para identificar os elementos

* {
    padding: 10px;
}

body {
    background-color: pink;

}

main {
    background-color: #f8faf9
}

aside {
    background-color: rgb(255, 205, 192);
}

section {
    background-color: rgb(193, 192, 255);
}
</style>