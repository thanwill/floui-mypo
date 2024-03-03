<template>
    <div>
        <div class="container-fluid">
            <div class="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
                <div class="row">
                <div class="col-12">
                    <h1>Login</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">                    
                    <p class="text-secondary mt-4 mb-4 ">Seja bem-vindo ao sistema de gerenciamento de projetos Floui. Para acessar o sistema, por favor, faça login.</p>                    
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label
                                ">Endereço de email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Nós nunca compartilharemos seu email com ninguém.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check
                                -label" for="exampleCheck1">Check me out</label>

                        </div>
                        <button type="submit" class="btn btn-primary justify-content-center ">Submit</button>
                    </form>                    
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped></style>