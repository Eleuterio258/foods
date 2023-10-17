# Use uma imagem base com PHP e Nginx
FROM php:7.4-fpm

# Instale as dependências do sistema e extensões PHP necessárias
RUN apt-get update && apt-get install -y \
    nginx \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && apt-get clean

# Configurar o arquivo de configuração do Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar aplicação PHP para o diretório de trabalho
COPY ./app /var/www/html

# Iniciar serviços necessários
CMD service nginx start && php-fpm
