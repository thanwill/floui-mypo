/*
background.js: Este é o script de background da sua extensão. Ele é executado em segundo plano e tem acesso a todas as APIs do Chrome. Ele é usado para gerenciar eventos de nível global e manter o estado global da extensão. Por exemplo, ele pode ouvir eventos como a instalação da extensão, uma atualização da extensão, ou o fechamento e abertura do navegador.
*/

// 
chrome.runtime.onInstalled.addListener(function() {

    chrome.runtime.sendMessage({installed: true});

});