# GAT-WidgetJS
> A vueJS widget component to create ticketing research widget in Javascript

## Project setup

```
1. *Install all depedencies before starting developement*
2. **Warning** *If the GAT front use bootstrap 4+ you must have to install the vue-datepicker in depencies and not devDependencie*

yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
### Developement rules

1. Add a client
  * src folder
    ```
    In the assets folder you have to add new files of the current client to add new options in javascript and design in sass.
    ```
  * main.js file
    ```
    Import you client javascript file and add it to the new Vue component, in the props -> opts.
    * If you have to widget make an array of options *
    ```
  * WidgetWrapper.vue file
    ```
    Create a WidgetComponent and bind the options of your client.
    * bind test to true if you're using a GAT url test. *
    * bind dev to true if you've troubles with CORS and cross domain.*

    By default it's Bootstrap 3.3.7 who's using.
    ```
2. Widget developement
    * ./components
      ```
      One for Bootstrap v4+ and one v3 for Bootstrap v3.3.7
      ```

### Compiles and minifies for production
```
yarn run build

It launch lint and unit test before create a special index.html file in ./dist folder
**Dont worry about this -> Error: ENOENT: no such file or directory ** 
After the build done go check the index.html created and copy then paste in the module code in GAT
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
```

### Contribute

Make it evolve if it necessary 

### Author 

Christophe BLOT - contact christophe.blot@vivaticket.com