# Use an official PHP runtime as a base image
FROM php:7.4-apache

WORKDIR /var/www/html
COPY app/ /var/www/html/
EXPOSE 80

# CMD to start Apache when the container is run
CMD ["apache2-foreground"]
