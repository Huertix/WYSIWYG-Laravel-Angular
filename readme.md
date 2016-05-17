WYSIWYG APP:

Management of WYSIWYG projects.

LARAVEL + ANGULAR

Requirements :
    - php5
    - npm
    - bower
    - mysql
    - gulp



Steps:
    1º clone app:
        git clone https://github.com/Huertix/WYSIWYG-Laravel-Angular

    2º get into WYSIWYG-Laravel-Angular & sudo npm install

    3º composer install

    3º get into public & bower install

    4º create a database in you mysql, name example "raumbild"
        mysql -uroot -p123 -e "create database raumbild";

    5º open .env in root directory and configure with your data, example:
        DB_DATABASE=raumbild
        DB_USERNAME=root
        DB_PASSWORD=123

    6º php artisan migrate

    7º php artisan db:seed

    8º compile assets:
        gulp


    9º from root php -S localhost:4000 -t public


Seeded Users:
    'name' => 'David',
    'email' => 'me@raumbild.com',
    'password' => bcrypt('123')

    'name' => 'Mikel',
    'email' => 'other@raumbild.com',
    'password' => bcrypt('123')





