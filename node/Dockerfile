# Use uma imagem base do Node.js
FROM node:14-alpine

# Crie um diretório de trabalho para a aplicação
WORKDIR /app

# Copie os arquivos de aplicação para o contêiner
COPY ./app .

# Instale as dependências
RUN npm install

# Exponha a porta que a aplicação irá usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
