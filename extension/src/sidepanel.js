async function alerta(message: string) {
  const divElement = document.querySelector('.message');
  if (divElement === null) {
    throw new Error("Nenhum elemento encontrado com o seletor '.message'");
  }
  const div: Element = divElement;
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

document.addEventListener('DOMContentLoaded', async () => {

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  tab = await getTabId();

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
  })
    .then((result) => {
      const { flow } = result[0].result;
      const message = `O fluxo ${flow} foi carregado com sucesso!`;
      alerta(message)
    })
    .catch((error) => {
      const message = `Erro ao carregar o fluxo: ${error}`;
      alerta(message)
    });
} );