# lumen-vue-cli

Want to use lumen but all the advantages of vue-cli even with hot reloading?
Here you go! A lumen scaffolding with built-in vue-cli.

This project is a basic lumen `8.0` app,
created using the [laravel/lumen](https://github.com/laravel/lumen) scaffolding.
On top Vue 3 is installed using vue-cli-service `~4.5.0` with `babel`, `eslint`, `vue-router` and `vue-axios`.

## Install

Please verify the requirements for [lumen 8](https://lumen.laravel.com/docs/8.x/installation#installation)
and [vue-cli](https://lumen.laravel.com/docs/8.x/installation#installation) first.

Install via composer:
```
composer create-project --prefer-dist rufusmaiwald/lumen-vue-cli site
```
*`site` is the dir name where the new project will be created in.*

After installation download all npm dependencies:
```
npm install
```

## Getting Started

#### Source files
The typical vue-cli `src` directory was just moved to `./resources/js/vue`. So you can just use it as usual.
Assets in `./resources/js/vue/assets` will be automatically resolved with `@/asset.img`.

#### Static files
As vue-cli is now building your compiled source code and assets in your `./public` directory,
dont put files in there.
All static files that you want to have in the `./public` directory are copied over
from `./resources/static` on running `npm run build`.
*You might remember this behaviour from the vue-cli `static` folder.*

#### Build application
Using `npm run build` your vue-app will be compiled in the public folder and all static files will be copied over.
Thats it! Your app is ready to be served from `./public`.

#### Development
lumen-vue-cli uses the vue devServer proxy to allow all backend routes
to be available from the frontend **only** via XHR/fetch requests.
Learn more about devServer proxy [here](composer create-project --prefer-dist laravel/lumen blog).
Just run `php artisan serve` and `npm run serve` and voila, your app should be up on `https://localhost:8080`.
> Using the vue-cli devServer, all vue front-end requests get not routed through lumen and associated middlewares.
> To test this behaviour just build the front-end using `npm run build` and run the lumen app using `php artisan serve`

#### Views
`./resources/js/vue/index.html` will be copied on build to `./resources/views/app.blade.php`.
Just include the template in your route to return your vue app.


### Customize Vue-Cli configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
