const fs = require('fs');

// Lê o arquivo JSON
const data = fs.readFileSync('./reference.json', 'utf-8');

// Converte o JSON em um objeto JavaScript
const obj = JSON.parse(data);
console.log(obj);

// Cria um array para armazenar os tipos
const types = [];

// Itera sobre o objeto
for (let key in obj) {
  // Se o objeto tem uma propriedade 'type', adiciona ao array
  if (obj[key].hasOwnProperty('type')) {
    types.push(obj[key].type);
  }
}

// Imprime os tipos
console.log(types);