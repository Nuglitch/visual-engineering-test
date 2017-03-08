Prueba Front End Mobile Biometrics
====

## El reto

La prueba consiste en realizar una pequeña aplicación de cliente que muestre un carro de la compra con una lista de artículos y un botón comprar.

Cada artículo de la lista tendrá una imagen del artículo, un nombre del artículo, precio y unidades. También habrá un botón para eliminarlo del carro (un icono de una cruz en la parte derecha del elemento). Cuando se pulse el botón de borrar de cada artículo, el elemento se desplazará horizontalmente hacia la derecha con una animación de 300 ms que terminará cuando se haya desplazado fuera de la ventana (en ese momento se elimina el elemento).

Los artículos pueden estar sin estoc. Cuando haya algún artículo sin estoc se marcará con un estilo distinto el elemento que contiene el artículo sin estoc y el botón de comprar estará deshabilitado (pero visible). Para poder comprar, el usuario tendrá que eliminar los artículos sin estoc. Si la cesta está vacía tampoco se puede comprar y el botón comprar estará deshabilitado.

Cuando todos los artículos tengan estoc el botón de comprar estará habilitado. Cuando se pulse el botón de comprar se mostrará una vista de confirmación contenida en la misma página (no navegación por url tradicional). La vista de confirmación mostrará un mensaje de confirmación y un botón para reiniciar la aplicación.

Los elementos del carro están en el propio html de index.html. Falta la maquetación de estilos. Se hará con SASS y se compilarán a css.

La lista del carro de la compra estará controlada por un módulo de javascript AMD. La vista de confirmación estará controlada por otro módulo javascript AMD. Los dos módulos tendrán un método init() con opciones de configuración (). Se gestionarán e inicializarán a través de requirejs desde el html principal.

Deberá haber test unitarios para todas las funcionalidades y módulos. Los estilos se realizarán con sass y se compilarán a css con grunt.

La prueba puntuará según si los módulos están correctamente formados, se cumple con las funcionalidades descritas, el sass y css está bien formado, los test se ejecutan correctamente.

Una vez se haya completado todos los objetivos anteriormente descritos, para obtener un extra en la puntuación de la prueba se propone que al pulsar sobre el botón de reiniciar la aplicación se muestre de nuevo el carrito y se rehaga la lista de artículos del carrito recuperando los datos del servidor por ajax y renderizando cada elemento a través de un sistema de templating de cliente (se recomienda utilizar handlebars). La petición para recuperar los elementos del carrito es un GET a "/items". Se pasa la url como parámetro de configuración del módulo del carrito.


![Captura de pantalla 2014-08-04 a la(s) 17.26.02.png](https://bitbucket.org/repo/7ndb5z/images/2053606156-Captura%20de%20pantalla%202014-08-04%20a%20la%28s%29%2017.26.02.png)

## Dependencias:

* [node.js](http://nodejs.org/download/)
* `$ npm install bower -g` - [bower](http://bower.io/) to download frontend dependencies
* `$ npm install grunt-cli -g` [grunt](http://gruntjs.com/) to build the project

Instalación y ejecución:

`$ git clone https://bitbucket.org/visualengineering/mobbio-frontend-test.git`  
`$ cd mobbio-frontend-test`  
`$ npm install`  
`$ bower install`  
`$ node server` or `$ npm start`  

ir a `http://localhost:3000` con tu navegador.



## Tests y Compilación

Ejecuta grunt:
```
$ grunt
```
para compilar los SASS y ejecutar los test.

Si sólo quieres ejecutar los test:
```
$ grunt test
```

Si sólo quieres compilar el SASS:
```
$ grunt compile
```

Hay dos test de ejemplo en la carpeta test/modules



## Estructura del Proyecto

El esqueleto se ha montado sobre node.js y el framework express. No tienes que preocuparte ni tocar nada de eso.

Los ficheros importantes del proyecto son:

```
├── bower.json                # fichero bower.json
├── jshint.json
├── Gruntfile.js              # Gruntfile.js
├── package.json              # fichero package.json
├── server.js                 # servidor node.js
├── public
│   ├── js
│   │   ├── main.js           # fichero main de requirejs
│   │   ├── modules
│   │   │   |── shop-cart.js    # módulo para controlar la cesta
|	|	|	|-- confirmation.js # módulo para controlar la confirmación
│   └── css           			# aquí se compilarán los ficheros css. No tienes que tocar nada aquí
│   |   └── base.css
|	|-- images
|	|-- sass 					#aquí pondremos los ficheros de estilo SASS para que se compilen
|		|-- base.scss
├── routes
│   └── index.js              # rutas para node.js
├── test
│   ├── karma.conf.js         # fichero de configuración de karma
│   ├── test-main.js          # fichero de configuración de karma-requirejs
│   ├── modules
│   │   └── confirmation.spec.js    # ejemplo de test unitario para el módulo de confirmación
│   │   └── shop-cart.spec.js    # ejemplo de test unitario para el módulo de la cesta
└── views
    ├── index.html            # main view

```

# Resultado

Tienes que enviarnos tu código comprimido en zip. No puedes hacer ninguna subida al repositorio

# Licencia

No se permite Copiar, compartir ni publicar.

Copyright 2014 Mobile Biometrics