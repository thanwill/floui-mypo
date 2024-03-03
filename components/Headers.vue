<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/assets/Floui.png" alt="Logo" width="200" height="auto"
                        class="d-inline-block align-text-top">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Ambientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Integrações</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Perfil
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Conta</a></li>
                                <li><a class="dropdown-item" href="#">Documentação</a></li>
                                <li><a class="dropdown-item" href="#">Suporte</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>