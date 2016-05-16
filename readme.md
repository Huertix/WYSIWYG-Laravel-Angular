1º Install laravel -> composer create-project laravel/laravel [projectname]

2º npm install

3º Install angular depens. with bower in /public  ->
    bower init
    bower install angular --save
    bower install angular-route --save
    bower install angular-cookies --save
    bower install angular-wysiwyg --save

4º git init & setup .gitignore & first commit

5º define layout.blade.php

6º define header and footer. added by includes

7º update gulpfile and add logo.png

...

10º migrations ->
    php artisan make:migration create_project_table --create=projects
    php artisan make:migration add_modified_data_to_projects_table --table=projects
    php artisan migrate

11º seed ->
    php artisan make:seeder UsersTableSeeder
        public function run()
        {
            DB::table('users')->insert([
                'name' => 'xxxx',
                'email' => 'xxxx@xxxx.com',
                'password' => bcrypt('123'),
            ]);
        }

    php artisan make:seeder ProjectsTableSeeder
        public function run()
        {
            DB::table('projects')->insert([
                'name' => 'Proyect 1',
                'body' => '<p>This is the default proyect</p>',
                'owner_id' => '1',
                'modified_at' => Carbon::now()
            ]);
        }


    php artisan db:seed
    php artisan db:seed --class=ProjectsTableSeeder



