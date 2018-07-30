# VUE-WidgetJS
> A vueJS widget component to create ticketing research widget in Javascript

## Project setup

```
1. *Install all depedencies before starting developement*

yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
### Developement rules

1. Add override options
  * src folder
    ```
    In the assets folder you have to add new files of the override folder to add new options in javascript and design in sass.
    ```
  * main.js file
    ```
    Import you overrride javascript file and add it to the new Vue component, in the props -> opts.
    * If you have to widget make an array of options *
    ```
  * WidgetWrapper.vue file
    ```
    Create a WidgetComponent and bind the options of your website.
    * bind test to true if you're using an url test. *
    * bind dev to true if you've troubles with CORS and cross domain during developement (localhost issues)*
    ```
2. Widget developement
    * ./components
      ```
      You can add tabs for a multiple widgets services
      ```

### Compiles and minifies for production
```
yarn run build
  It launch lint and unit test before create a index.html file in ./dist folder

yarn run build-widget
  It launch lint and unit test before create a special index.html file in ./dist folder who mixed html css and js in one single file
**Dont worry about this -> Error: ENOENT: no such file or directory ** 
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
Dont forget to create unit test if you have to modify or create new function in the widget
```

### Run your end-to-end tests
```
yarn run test:e2e
Not created yet
```

### Contribute

Make it evolve if it necessary 

### Author 

Christophe BLOT - contact contact@begincreation.fr