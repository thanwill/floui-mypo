export class Fluxos {

  static getReference(exemple) {
    const reference = {
      'core_http_in': 'HTTP In',
      'core_http_out': 'HTTP Out',
      'core_condition': 'Condition',
      'core_split_message': 'Split Message',
      'data_json_schema_validator': 'JSON Schema Validator',
      'service_magento_customer_create': 'Magento Customer Create',
      'service_magento_company_create': 'Magento Company Create',
      'core_message_change': 'Message Change',
      'data_transform_values': 'Transform Values',
      'core_logger': 'Logger',
      'core_http_out': 'HTTP Out',
      'core_queue_publisher': 'Queue Publisher',
      'core_queue_consumer': 'Queue Consumer',
      'core_delay': 'Delay',
      'data_json': 'JSON',
      'core_function': 'Function Javascript',
      'core_split_message': 'Split Message',
      'service_internal_db_entity_list': 'Floui Database',
      'service_magento_customer_list': 'Magento Customer List',
      'core_template': 'Template',
      'core_joint': 'Joint',
      'service_generic_rest_api': 'Generic REST API',
      'core_debugger': 'Debugger'
    };

    return reference[exemple];
  }

  static groupNodesByType(nodes) {
    return nodes.reduce((acc, node) => {
      if (!acc[node.type]) {
        acc[node.type] = [];
      }
      acc[node.type].push(node);
      return acc;
    }, {});
  }

  static createOptionElement() {
    return document.createElement('option');
  }

  static getNodesListElement() {
    const nodesList = document.getElementById('nodesList');
    if (nodesList === null) {
      throw new Error("Nenhum elemento encontrado com o ID 'nodesList'");
    }
    return nodesList;
  }

  static createAccordionItem(type, nodes) {
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
    return accordionItem;
  }

  static handleInputChange(type, nodes, element) {
    return function () {
      let typeSelecionado = this.value;

      if (typeSelecionado === type) {
        const accordionItem = Fluxos.createAccordionItem(type, nodes);
        element.appendChild(accordionItem);
      }
    }
  }

  static createSelectElement(types, nodes) {
    const select = document.createElement('select');
    select.className = 'form-select';
    select.addEventListener('change', Fluxos.handleInputChange(types, nodes, Fluxos.getNodesListElement()));
    select.innerHTML = `
      <option value="">Selecione um tipo</option>
      ${types.map(type => {
        const option = Fluxos.createOptionElement();
        option.value = type;
        option.textContent = type;
        return option.outerHTML;
      }).join('')
      }
    `;
    return select;
  }

  static createAccordionElement() {
    const accordion = document.createElement('div');
    accordion.id = 'tipos';
    accordion.className = 'accordion';
    return accordion;
  }

}