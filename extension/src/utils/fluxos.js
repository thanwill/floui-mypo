export class Fluxos {


    static conectores(nodes: any[]) {

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

            if (nodesList === null) {
                throw new Error("Nenhum elemento encontrado com o ID 'nodesList'");
            }

            // Agora você pode usar nodesList com segurança
            const option = document.createElement('option');

            if (option === null) {
                throw new Error("Nenhum elemento encontrado com o ID 'nodesList'");
            }

            option.value = type;
            option.textContent = type;
            nodesList.appendChild(option);

            /*
            reenderiza todos o types de nodes no html   <option value="Edge">
            <div class="mb-3">
                <label for="node" class="form-label">Aplicar filtro</label>
                <input class="form-control" list="nodesList" id="node"
                    placeholder="Pesquisar conectores...">
                <datalist id="nodesList"></datalist>
            </div>
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

}