import Fluxos from './fluxos';



async function getTabId() {
    
    return tab
}

function active(element) {
    const elementos = document.querySelectorAll('.list-group-item');
    elementos.forEach(function (el) {
        if (el !== element) {
            el.classList.remove('active');
        }
    });

    // Se o elemento já tem a classe 'active', remova-a
    // Se não, adicione-a
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');

    }
}

document.addEventListener('DOMContentLoaded', async () => {

    const tab = await getTabId();

    if (!tab.url.includes('ws.floui.io')) {
        //https://app.floui.io/
        const message = `A extensão só funciona no ambiente de desenvolvimento do floui.io.<br><br>Acesse: <a href="https://app.floui.io/" target="_blank">app.floui.io</a> e tente novamente`;
        alerta(message)
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            return { flow: document.querySelector('input[type="hidden"]')?.value }
        }
    }).then((result) => {

        const flow = JSON.parse(result[0].result.flow)

        Fluxos.conectores

        listarTipos(flow.nodes)
            .then(() => {
                const elementos = document.querySelectorAll('.list-group-item');
                elementos.forEach(function (el) {
                    el.addEventListener('click', active(el));
                });
            })
            .catch((error) => {
                alerta(`Erro ao listar os tipos: ${error}`)
                console.error(error)
            })

    }).catch((error) => {
        alerta(`Erro ao buscar os loggers: ${error}`)
        console.error(error)
    })

})