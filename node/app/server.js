// Importando o módulo http do Node.js
const http = require('http');

// Criando um servidor HTTP
const server = http.createServer((req, res) => {
    // Configurando o cabeçalho de resposta com o tipo de conteúdo
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Enviando uma resposta para o cliente
    res.end('Hello, World!\n');
});

// Ouvindo na porta 3000 e no endereço 'localhost'
const PORT = 3000;
const HOST = 'localhost';

// Iniciando o servidor
server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
});
