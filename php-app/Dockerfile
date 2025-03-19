# Use the official PHP image with Apache
FROM php:apache

# Copy custom Apache configuration
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

# Enable Apache rewrite module (if needed)
RUN a2enmod rewrite

# Set the working directory to the PHP app
WORKDIR /var/www/html

# Copy your PHP app into the container
COPY . /var/www/html/

# Expose port 80 (optional, since it's already in docker-compose.yml)
EXPOSE 80
