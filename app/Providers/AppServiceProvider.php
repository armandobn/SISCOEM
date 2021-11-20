<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //Ruta apunta en donde se encuentra el index para funcionar
        /*$this->app->bind('path.public', function(){
            return '/home2/simdirne/siscoem.ddns.net/public';
        });*/
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
