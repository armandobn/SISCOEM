const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/login.js','public/js')
    .js('resources/js/registrarLogin.js','public/js')
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/docente_c.js', 'public/js')
    .js('resources/js/docente_rfc.js', 'public/js')
    .js('resources/js/docente_u.js', 'public/js')
    .js('resources/js/datosTabla.js', 'public/js')
    .js('resources/js/formatoCompatibilidad.js', 'public/js')
    .js('resources/js/listaChecable.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
