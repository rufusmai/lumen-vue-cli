# lumen-vue-app

This project is a basic lumen 5.8 app that contains a built in vue.js app (built with vue-cli 3.7.0).

Use the `./routes/web.php` to add more php backend sites. All other traffic will be redirected to the vue app.

### Important directory changes

Vue files are located in `./resources/js/vue`

The "public" folder from vue is located in `./resources/static`. All static assets will be moved to the `./public` folder after `npm run build`

### Project setup
```
npm install
composer install
```

### Compiles and hot-reloads for development
```
npm run serve (Vue.js development server)
php -S localhost:8000 -t public (PHP development server)
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize Vue configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
