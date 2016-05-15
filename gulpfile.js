var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
        'app.js',
        'main.js'
    ], 'public/js/app.js');

    mix.scripts([
        'controllers/userController.js',
        'controllers/dashboardController.js',
        'controllers/navController.js'
    ], 'public/js/controllers.js');
    
    
    mix.copy('resources/images', 'public/images')
    .version('public/images');
});
