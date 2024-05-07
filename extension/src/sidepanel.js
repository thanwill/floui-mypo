import Utils from "./utils";

document.addEventListener('DOMContentLoaded', async () => {

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    tab = await getTabId();

    if (!tab.url.includes('ws.floui.io')) {
        //https://app.floui.io/
        const message = `A extensão só funciona no ambiente de desenvolvimento do floui.io.<br><br>Acesse: <a href="https://app.floui.io/" target="_blank">app.floui.io</a> e tente novamente`;
        alert(message)
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
            Utils.alert(message)
        })
        .catch((error) => {
            const message = `Erro ao carregar o fluxo: ${error}`;
            alert(message)
        });
});