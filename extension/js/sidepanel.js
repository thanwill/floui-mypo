

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error))

async function getTabId() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab
}

function alerta(message) {
    const div = document.querySelector('.message');
    /*
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
     */

    const alert = document.createElement('div');
    alert.className = 'alert alert-warning alert-dismissible fade show mt-4';
    alert.role = 'alert';
    alert.innerHTML = `
      <strong>Ops!</strong> ${message}.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    div.appendChild(alert);
}

async function listarTipos(nodes) {

    const div = document.querySelector('.tipos');

    const groupedByType = nodes.reduce((acc, node) => {
        if (!acc[node.type]) {
            acc[node.type] = [];
        }
        acc[node.type].push(node);
        return acc;
    }, {});

    for (const [type, nodes] of Object.entries(groupedByType)) {

        let element = document.querySelector('#tipos');
        let nodesList = document.getElementById('nodesList')

        /*
        reenderiza todos o types de nodes no html   <option value="Edge">
        */

        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        nodesList.appendChild(option);

        let datalist = document.getElementById('nodesList');
        let input = document.querySelector('input[list="nodesList"]'); // Substitua por seu seletor de input real

        // Adicione um ouvinte de evento ao input
        input.addEventListener('change', function () {
            let typeSelecionado = this.value;

           

            // Agora você tem o tipo selecionado pelo cliente
            // Você pode usar isso para filtrar os nós e exibir apenas os nós desse tipo

            if (typeSelecionado === type) {
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item';
                accordionItem.innerHTML = `
        <h2 class="accordion-header" id="heading${type}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${type}" aria-expanded="false" aria-controls="collapse${type}">
            <span class="badge text-bg-secondary me-2">${nodes.length}</span>
            ${type}
          </button>
        </h2>
        <div id="collapse${type}" class="accordion-collapse collapse" aria-labelledby="heading${type}" data-bs-parent="#tipos">
          <div class="accordion-body">
            <div class="list-group" >
              ${nodes.map(node => `
                  <a class="list-group-item d-flex justify-content-between align-items-center" id="${node.uid}">
                    ${node.type == "core_http_in" ? node.data.method : node.data.description}
                    <span class="badge text-bg-primary rounded-pill">${node.uid}</span>
                  </a>
                `).join('')
                    }
            </div>
          </div>
        </div>
      `;

                element.appendChild(accordionItem);
            }

        });




    }

    return Promise.resolve({
        success: true,
        group: groupedByType

    });

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

        listarTipos(flow.nodes)
            .then(() => {
                const elementos = document.querySelectorAll('.list-group-item');
                elementos.forEach(function (el) {
                    el.addEventListener('click', function () {
                        active(el);
                    });
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