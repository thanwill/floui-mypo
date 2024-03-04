<template>
    <div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" placeholder="Adicione um cliente" id="clientName" required >
            <label for="clientName">Cliente</label>
        </div>
        <div class="mt-3">
            <label for="formFileMultiple" class="form-label">Adicionar vários arquivos</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple @change="handleFileSelect">
        </div>
    </div>
</template>

<script setup>


const handleFileSelect = (event) => {
    const files = event.target.files;
    const arquivosSelecionados = [];
    const cliente = document.getElementById('clientName').value;

    const promises = Array.from(files).map((file) => {
        return new Promise((resolve, reject) => {
            if (file.type === 'application/json') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const json = JSON.parse(e.target.result);
                        const coreLoggerNodes = json.nodes.filter(node => node.type === 'core_logger');

                        const ambiente = file.name.split('-')[0];

                        const fluxo = {
                            arquivo: ambiente,
                            cliente: cliente,
                            nodes: coreLoggerNodes
                        }

                        if (coreLoggerNodes.length > 0) {
                            arquivosSelecionados.push(fluxo);
                        } else {
                            console.log('Nenhum nó de logger encontrado:', file.name);
                        }
                        resolve();
                    } catch (error) {
                        console.error('Erro ao analisar o arquivo JSON:', error);
                        reject(error);
                    }
                };
                reader.readAsText(file);
            } else {
                console.log('O arquivo não é um JSON válido:', file.name);
                resolve();
            }
        });
    });

    Promise.all(promises).then(() => {
        localStorage.setItem('arquivosSelecionados', JSON.stringify(arquivosSelecionados));
    });
}

</script>

<style lang="scss" scoped></style>