## UF4.2: jQuery

- [UF4.2: jQuery](#uf42-jquery)
- [Introducción](#introducción)
  - [Características](#características)
  - [Desventajas](#desventajas)
  - [Entorno de trabajo](#entorno-de-trabajo)
- [Instalación](#instalación)
- [Primeros pasos](#primeros-pasos)
  - [Para empezar a usarlo](#para-empezar-a-usarlo)
  - [Selectores](#selectores)
- [Selectores CSS3](#selectores-css3)
  - [Selectores CSS más usados](#selectores-css-más-usados)
  - [Selectores CSS](#selectores-css)
  - [Selectores CSS más usados](#selectores-css-más-usados-1)

## Introducción
``JQuery``es una librería de JavaScript que nos permite:
- manipular documentos HTML
- gestionar eventos
- hacer animaciones CSS
- implementar AJAX de una forma mucho más simple que con JavaScript sin añadidos (también llamado ``VanillaJS``).
### Características
- Manipulación del DOM
- Selectores avanzados (no sólo los de CSS)
- Gestión de eventos
- Efectos y animaciones
- AJAX
- Parseado JSON
- Es extensible (plugins)
- Compatible para navegadores
### Desventajas
- La ``API de JS está estandarizada`` en los navegadores así que ``jQuery no es tan necesario``.
 
- El ``rendimiento no es óptimo``, puesto que ``no tiene un DOM virtual`` como por ejemplo React y Angular.

- Algunas herramientas han dejado esta tecnología de lado en sus nuevas versiones (como gitHub y Bootstrap 5).

- Cuando el ``proyecto es grande``, la ``sintaxis`` se puede volver bastante ``compleja`` (aunque para cosas
como prototipos funcionales de páginas es mucho más sencillo que para la aplicación web completa, por ejemplo)

- Hay ``nuevos frameworks`` (React, Angular, Vue) que están ganando peso frente a jQuery.

A pesar de esto, sigue siendo muy usado (se estima que más del 70% de páginas actualmente e- Internet utilizan jQuery)
### Entorno de trabajo
- Firefox, GIT, VSCode
- Extensiones VSCode
    - Auto Close Tag
    - Auto Rename Tag
    - LiveServer
    - HTML CSS Support
    - Intellisense for CSS Class Names
    - Eslint
    - jQuery Code Snippets

## Instalación
Hay dos tipos de instalación
- Local
- Remota
## Primeros pasos
### Para empezar a usarlo
Los ``objetos jQuery`` están entre los paréntesis de la expresión ``$()``
```js
$(document).ready(function(){
    //código a ejecutar cuando el DOM está
    //listo para recibir instrucciones.
});
```
Esto tendría una funcionalidad parecida a meter nuestro código en window.onload() en JS:
- JS espera a que toda la página (window) esté cargada para hacer cosas.
- jQuery espera a que el documento (document) esté listo para ser manipulado.

### Selectores
Para modificar o reaccionar a los eventos que ocurran sobre los elementos de la página web necesitamos selectores

jQuery puede utilizar tanto los selectores de CSS3 como los suyos propios.

```js
$(document).ready(function(){

    $("selector").acción(...);
});
```
```js
$(document).ready(function(){

    $("selector").evento(...);

});
```
## Selectores CSS3

### Selectores CSS más usados
- "*"
- etiqueta
- #id
- .clase
- elemento1 elemento2
- elemento1, elemento2
- elemento1 > elemento2
- elemento1 + elemento2
- elemento1 ~ elemento2
- [attr] [attr=”value”] (|~*^..)

### Selectores CSS
Si el selector devuelve más de un elemento, para poder seleccionar sobre qué elemento queremos trabajar.

```js
$(document).ready(function(){

    $("selector").eq(indice).acción(...);

});
```
Con esto, asumiendo que los índices empiezan en 0, podemos elegir sobre qué elemento queremos trabajar.


### Selectores CSS más usados
- :hover
- :visited
- :first-of-type / :first-child
- :last-of-type / :last-child
- :nth-child() / :nth-of-type()
- :required
- ::after (:after)
- ::before (:before)
- ::first-letter / ::first-line
