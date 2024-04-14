chrome.action.onClicked.addListener((tab) => {
    // emite um evento para a aba atual
    chrome.tabs.sendMessage(tab.id || 0, { action: 'toggle' });
});
// Função: cria um painel lateral para a extensão com o comportamento de abrir ao clicar em um botão
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => {
    console.error('Failed to set panel behavior:', error);
});
export {};
