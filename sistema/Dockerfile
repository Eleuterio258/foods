# Use an official PHP runtime as a base image
FROM php:7.4-apache

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy the current directory contents into the container at /var/www/html
COPY app/ /var/www/html/

# Install additional PHP extensions if needed
# RUN docker-php-ext-install extension_name

# Enable Apache modules if needed
# RUN a2enmod mod_name

# Set up Apache configuration if necessary
# COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Expose port 80 for web traffic
EXPOSE 80

# CMD to start Apache when the container is run
CMD ["apache2-foreground"]
