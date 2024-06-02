## UF4.3: jQuery – selectores propios, manejo de CSS

- [UF4.3: jQuery – selectores propios, manejo de CSS](#uf43-jquery--selectores-propios-manejo-de-css)
- [Selectores jQuery](#selectores-jquery)
  - [Introducción](#introducción)
    - [Ejemplos](#ejemplos)
  - [each() y this()](#each-y-this)
    - [Uso](#uso)
    - [Ejemplo](#ejemplo)
- [Manejo de CSS](#manejo-de-css)
  - [Introducción](#introducción-1)
  - [Estilos: css()](#estilos-css)
    - [Una sola propiedad CSS](#una-sola-propiedad-css)
    - [Valor = resultado de una función](#valor--resultado-de-una-función)
      - [Ejemplos](#ejemplos-1)
    - [Varias propiedades css](#varias-propiedades-css)
      - [Ejemplo](#ejemplo-1)
    - [Otras funciones](#otras-funciones)
      - [Width y height](#width-y-height)
    - [Manejando las clases CSS](#manejando-las-clases-css)
      - [Uso](#uso-1)
  - [Clases](#clases)
    - [.addClass()](#addclass)
      - [Estructura](#estructura)
        - [Ejemplo](#ejemplo-2)
    - [.removeClass()](#removeclass)
      - [Estructura](#estructura-1)
        - [Ejemplo](#ejemplo-3)
    - [.toggleClass()](#toggleclass)
      - [Estructura](#estructura-2)
        - [Ejemplo](#ejemplo-4)
    - [.hasClass()](#hasclass)
      - [Estructura y ejemplo](#estructura-y-ejemplo)
  - [Atributos](#atributos)
    - [Introducción](#introducción-2)
    - [Atributos y propiedades](#atributos-y-propiedades)
      - [Pautas para saber cuándo usar unos u otras](#pautas-para-saber-cuándo-usar-unos-u-otras)
    - [Métodos](#métodos)
      - [.attr()](#attr)
        - [Obtener y establecer atributos](#obtener-y-establecer-atributos)
      - [.removeAttr()](#removeattr)
        - [Eliminar atributos](#eliminar-atributos)
      - [.prop()](#prop)
        - [Obtener y establecer propiedades (ejemplos)](#obtener-y-establecer-propiedades-ejemplos)
      - [.removeProp()](#removeprop)
        - [Eliminar propiedades](#eliminar-propiedades)
  - [Modificando el DOM](#modificando-el-dom)
    - [Introducción](#introducción-3)
      - [.empty(), .html() y .text()](#empty-html-y-text)
        - [.empty()](#empty)
        - [.html()](#html)
        - [.text()](#text)
      - [.append(), .prepend()](#append-prepend)
        - [Uso](#uso-2)
        - [Ejemplo](#ejemplo-5)
      - [.appendTo(), .prependTo()](#appendto-prependto)
        - [Uso](#uso-3)
        - [Ejemplo](#ejemplo-6)
      - [.wrap(), .unwrap(), .wrapAll(), wrapInner()](#wrap-unwrap-wrapall-wrapinner)
        - [.wrap()](#wrap)
        - [.unwrap()](#unwrap)
        - [wrapAll()](#wrapall)
        - [wrapInner()](#wrapinner)
      - [.val()](#val)
        - [Sintaxis](#sintaxis)
        - [Ejemplos](#ejemplos-2)

## Selectores jQuery
### Introducción
JQuery puede utilizar también selectores propios
La forma de utilizarlos es igual que los selectores CSS
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
#### Ejemplos
- .eq(index) (cuando devuelve varios elementos, selecciona el del índice)
    - $("img").eq(0).hide();
- .has() (selecciona el elemento que tenga como hijos elementos que cumplan otro selector)
    - $("form").has("input[type='password']").hide();
- :contains() (selecciona el elemento con ese texto dentro)
    - $("tbody td:contains('A')").hide();
- :even / :odd (selecciona elementos pares / impares)
    - $("tbody tr:odd").hide();
- :input (selecciona todos los elementos de un formulario)
- :gt(index) / :lt(index) (selecciona un rango de entre los elementos seleccionados)
    - $("img:lt(3)").hide();
- .first() / .last() (selecciona el primer / el último elemento)
    - $("img").first().hide();

``Seleccionar distintos tipos de input en un formulario``
- :button, :file, :radio, :reset,
- :submit, :text, :checkbox
- :password, :image
    - Ejemplo: $(":password")
- :header(hX) (Seleccionar cabeceras (h1-h6) )
- :hidden / :visible (Selecciona elementos ocultos o visibles)
    - $("img:visible").hide(); / $("img:hidden").show();
- :parent (Selecciona elementos que tengan un hijo (una etiqueta o algo de contenido) )
    - $("#ejemplo:parent").hide();

### each() y this()
#### Uso
Cuando tenemos muchos elementos seleccionados y tenemos tareas ligeramente diferentes para cada uno de ellos.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/each%20y%20this.PNG)

#### Ejemplo
```js
$(function(){
    $("li").each(function(index){
        console.log("El elemento " + index + " contiene " + $(this).text());
        $(this).text("HOLA");
    })
});
```
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/ul.PNG)
## Manejo de CSS
### Introducción
Una de las mayores ventajas de jQuery es la facilidad que nos da tanto para obtener como para establecer los estilos de los diferentes elementos de mi página web.

Esto se hace fundamentalmente a través de la función .css().
- Esta función nos permite trabajar con una propiedad css o con varias.
### Estilos: css()
#### Una sola propiedad CSS
Para obtener el valor de una sola propiedad CSS (color, anchura...)
```js
$(function() {
    //Obtener el valor de una propiedad del PRIMER ELEMENTO que se obtiene del selector
    var valor =$("selector").css("propiedad");

    //Establecer el valor de una propiedad para TODOS los elementos seleccionados
    $("selector").css("propiedad", "valor");
});
```
#### Valor = resultado de una función
Si quiero ejecutar una función para cada uno de los elementos que se seleccionan a la hora de establecer un valor
```js
$(function() {
    //Establecer el valor de una propiedad para todos los elementos.
    //En index está la posición en la lista de elementos devueltos or el selector, y en value el antiguo valor
    $("selector").css( "propiedad", function(index, value){ 
        //$(this)
    });
});
```
##### Ejemplos

- ``var color = $("li").css("color")``
  - devuelve el color de texto del primer elemento de la lista
- ``$("img").css("width", "+=50");``
  - Incrementa en 50 pixeles la anchura de las imágenes (para decrementar se podría usar -=50)

#### Varias propiedades css
Para obtener varias propiedades, me las va a devolver en un vector:
```js
$(function () {
    //Obtener el valor de varias propiedades del PRIMER ELEMENTO que se obtiene del selector (array o vector)
    var props = $("selector").css(["propiedad1","propiedad2", ..., "propiedadN"]);
});
```
Recuerda que al obtener las propiedades se obtienen siempre del primer elemento que devuelve el
selector.

---

Para establecer varias propiedades, sin embargo, las estableceré en todos los elementos que coincidan con el selector, y utilizaré un objeto JS:
```js
$(function () {
    //Establecer el valor de varias propiedades para los elementos seleccionados
    $("selector").css({
        prop1: valor(o expresion),
        prop2: valor(o expresión),
        ...
        propn : valor(o expresión)
    });
});
```
##### Ejemplo
```js
$(function () {

    var colores = $(".iconized li").css(["color","background-color"]);

    $(".iconized li").eq(0).css({
        "color": "pink",
        "background-color":"#000"
    });
});
```
#### Otras funciones
##### Width y height
Para trabajar con la altura y anchura de los elementos tenemos los siguientes métodos:
- .width
    - $("selector").width();
    - $("selector").width(valor);
- .height
    - $("selector").height();
    - $("selector").height(valor);
#### Manejando las clases CSS
##### Uso
Si ya tenemos una hoja de estilos definida, podemos usar:
- las clases de esa hoja de estilos
- funciones jQuery
- cambiar la apariencia de nuestros elementos.

Hay varias funciones que manejan CSS, pero las más comunes son:

- ``.addClass()``
    - Añade una clase de mi hoja de estilos a los elementos seleccionados.
- ``.removeClass()``
    - Quita una clase de los elementos seleccionados
- ``.toggleClass()``
    - Si la clase está, la quita, y si no la pone
- ``.hasClass()``
    - Devuelve si el elemento seleccionado tiene esa clase

### Clases
####  .addClass()
#####  Estructura
```js
$(function () {
    //Le pasamos uno o varios nombre de clases a añadir a los elementos
    $("some_selector").addClass("clase1 clase2 clase3");

    //Le pasamos una función que se aplica a cada elemento (con una posición) y cuyo valor será el nombre de la clase que se añade ($(this))
    $("some_selector").addClass(function (index) {
        //...
        return "some_className";
    });
});
```
###### Ejemplo
```js
$(function () {

    $("button").addClass("btn btn-error");

    $("section").addClass(function (index) {
        return "section-" + index;
    });

});
```
#### .removeClass()
##### Estructura
```js
$(function () {
    //Le pasamos uno o varios nombre de clases a borrar de los elementos
    $("some_selector").removeClass("clase1 clase2 clase3");

    //Le pasamos una función que se aplica a cada elemento (con una posición) y cuyo valor será el nombre de la clase que se borra ($(this))
    $("some_selector").removeClass(function (index) {
        //...
        return "some_className";
    });
});
```
###### Ejemplo
```js
$(function () {

    $("button").removeClass("btn btn-error");

    $("section").removeClass(function (index) {
        return "section-" + index;
    });

});
```
#### .toggleClass()
##### Estructura
```js
$(function () {
    //Le pasamos uno o varios nombre de clases para alternar el estado
    $("some_selector").toggleClass("clase1 clase2 clase3");

    //Igual que el anterior pero el booleano nos dice si se añade o se quita
    $("some_selector").toggleClass("clase1 clase2 clase3", booleano);
});
```
```js
$(function () {
    //Le pasamos una función que se aplica a cada elemento (con una posición) y cuyo valor será el nombre de la clase cuyo estado se alterna ($(this))
    $("some_selector").toggleClass(function (index) {
        //...
        return "some_className";
    });

    //Igual pero con booleano que dice si se añade o se borra
    $("some_selector").toggleClass(function (index) {
        //...
        return "some_className";
    }, booleano);
});
```
###### Ejemplo
```js
$(function () {
    $("button").toggleClass("btn btn-error");

    $("button").toggleClass("btn btn-error", false);

    $("section").toggleClass(function (index) {
        return "section-" + index;
    });

});
```

#### .hasClass()
##### Estructura y ejemplo
```js
$(function () {
    //TRUE si CUALQUIERA de los elementos seleccionados tiene esa clase
    $("some_selector").hasClass("clase1");

    //Ejemplo
    $(".btn").hasClass("btn-error");
});
```
### Atributos
#### Introducción
Usando funciones de jQuery puedo consultar y modificar atributos y propiedades de los elementos de
mi página web.
#### Atributos y propiedades
``Atributos``:
- Nos dan información adicional sobre un elemento HTML,
- Tienen la forma **nombre=”valor”**.
- Cuando obtenemos el valor del atributo es algo así como el “valor o estado original”.
- Tienen que estar en el HTML

``Propiedades``:
- Son información de la instancia concreta de esas etiquetas dentro de un DOM determinado.
- Al obtenerlas nos dan el “valor o estado actual” de esa información.
- No es necesario que estén en el HTML

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/atributos%20y%20propiedades.PNG)

##### Pautas para saber cuándo usar unos u otras
- No usar versiones anteriores a jQuery 1.6
- Siempre que sea posible usar las funciones que hacen referencia a propiedades, aunque muchas veces nos vayan a dar resultados iguales.
  - Estas funciones representan el valor actual de la propiedad, no el que tenía en el HTML original.
-`` Usar .attr() sólo cuando sean atributos _custom_``, es decir, atributos que hayamos definido nosotros y
que no tengan propiedades asociadas.
    - Por ejemplo, para trabajar en un framework como Angular.
    - Para otros atributos usar la propiedad asociada.
- Tener en cuenta que los atributos son siempre cadenas de caracteres, pero que cuando hago una consulta a la ``propiedad`` me puede devolver ``otro tipo de datos``.

#### Métodos
``Atributos``
- .attr()
- .removeAttr()

``Propiedades``
- .prop()
- .removeProp()
##### .attr()
###### Obtener y establecer atributos
```js
$(function () {
    //Obtenemos el valor de un atributo del PRIMER ELEMENTO
    var valor = $("some_selector").attr("some_attribute");

    //Fijamos el valor de un atributo concreto en todos los elementos seleccionados.
    $("some_selector").attr("some_attribute", "new_value");
});
```
```js
$(function () {
    //Fijamos el valor de varios atributos a la vez en todos los elementos seleccionados.

    $("some_selector").attr({
        atr1: value1,
        atr2: value2,
        ...
        atrN: valueN
    });
});
```
##### .removeAttr()
###### Eliminar atributos
```js
$(function () {
    
    //Eliminar un atributo dado de los elementos seleccionados
    $("some_selector").removeAttr("some_attribute");

    //Ejemplo
    $("input").removeAttr("required");

});
```
##### .prop()
###### Obtener y establecer propiedades (ejemplos)
```js
$(function () {
    //Obtengo la dirección actual del primer enlace
    var url = $("a").prop("href");

    //Todos los enlaces se abrirán en una nueva ventana
    $("a").prop("target", "_blank");

    //Establezco dos propiedades a la vez para una imagen que tiene un id
    $("#miprofile").prop({
        alt: "Foto de mi cara",
        title: "Foto hecha por mí"
    });
});
```
##### .removeProp()
###### Eliminar propiedades
```js
$(function () {

    //Eliminar una propiedad dada de los elementos seleccionados
    $("some_selector").removeProp("some_attribute");

    //Ejemplo
    $("input").removeProp("required");

});
```
### Modificando el DOM
#### Introducción
Estas funciones( modifican esa estructura añadiendo, borrando o modificando elementos del árbol o su contenido.) las vamos a agrupar en:
- .``empty()``, ``.html()`` y ``.text()``
- .``append()``, ``.prepend()``, ``.appendTo()``, ``.prependTo()``
- ``.wrap()``, ``.unwrap()``, ``.wrapAll()``, ``.wrapInner()``
- ``.val()``
  - Me va a permitir poner contenido en campos de formulario
##### .empty(), .html() y .text()
###### .empty()
Borra todos los nodos hijos (y su contenido) de los elementos seleccionados.

Ejemplo:

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/empty.PNG)

###### .html()
Obtiene el contenido del primer elemento de los seleccionados (todo lo que va entre su apertura y su cierre).

```js
//content contiene todo lo que hay dentro de esa <li>.

//Posible etiquetas incluidas
var content = $("li").html();
```

###### .text()
El uso de la función ``.text()`` es totalmente análogo a .html() pero con la diferencia de que trata todo como ``texto`` y ``obvia las etiquetas``, quedándose sólo con el contenido textual de los elementos.

Modifica el contenido de todos los elementos seleccionados

```js
//Hace que el contenido de todas las listas sea un único elemento.

//Sustituye el contenido que tuviera
$("ul").html("<li>UNO</li>");

//Lo mismo pero usando una función que pone a nuestra disposición la posición dentro de los elementos seleccionados y el texto anterior.
$("ul").html(function (index, oldText) {
    return "<li>" + index + "</li>";
});
```

##### .append(), .prepend()
###### Uso
Las funciones .append() y .prepend() son análogas en su funcionamiento. 

Ambas sirven para añadir nuevos elementos HTML a nuestro DOM.

La diferencia principal es que:

- ``.append(“contenido”)`` añade ese contenido justo al final de los elementos seleccionados.
- ``.prepend(“contenido”)`` añade ese contenido justo al principio de los elementos seleccionados.

``Principio``: justo después de la etiqueta de inicio de los elementos seleccionados

``Final``: justo antes de la etiqueta de cierre de los elementos seleccionados.

###### Ejemplo
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/ejemplo.PNG)

##### .appendTo(), .prependTo()
###### Uso
Las funciones .appendTo() y .prependTo() funcionan de manera muy similar a las dos anteriores, pero tenemos un par de cambios:

- Donde antes estaba el contenido, ahora está el selector de los elementos en los cuales vamos a añadir contenido.
- Donde antes estaba el selector, ahora tengo el contenido.
###### Ejemplo
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/ejemplo%202.PNG)

##### .wrap(), .unwrap(), .wrapAll(), wrapInner()
###### .wrap()
Añade cierta estructura HTML alrededor de los elementos seleccionados. Tiene varias posibilidades:
```js
//Envuelve todos los article con una estructura
$("article").wrap("<div class="+article_outer+"></div>");

//Podemos usar una función que nos da la posición dentro de los elementos seleccionados
$("article").wrap(function (index) {
    return "<div class='article-" + index + "'></div>";
});
```
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/wrap.PNG)

###### .unwrap()
Hace justo lo contrario que .wrap(): Elimina el padre y saca el hijo a la altura del árbol que estaba el padre.
```js
//Deshacer el cambio anterior
$("article").unwrap();

//Si queremos comprobar que el padre cumpla condiciones
$("article").unwrap(".article_outer")
```

###### wrapAll()
es análogo a .wrap() pero sólo añade un elemento envolvente que cubre a todos los seleccionados. 
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/wrap%20all.PNG)
Debemos tener cuidado si hay elementos intrusos o diferentes entre ellos
###### wrapInner()
es análogo a .wrap() pero el elemento envolvente se añade no como padre sino al contenido de los seleccionados.
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.3%20jQuery%20-%20selectores,%20manejo%20CSS/img/wrap%203.PNG)

##### .val()
###### Sintaxis
La función ``.val()``, aunque no modifica el DOM, sí que modifica en cierta manera el contenido de la página al cambiar el valor de los elementos, normalmente de los elementos de los formularios.

Usando ``.val()`` podremos obtener y fijar el valor de los distintos campos de los formularios.

```js
//Para obtener el valor de un campo de formulario. El PRIMERO de los seleccionados
var valor = $("some_selector").val();

//Para fijar el valor para TODOS los campos seleccionados
$("some_selector").val("some_value");


//O usando una función. La posición, el valor actual y $(this) disponibles

//El valor de retorno será el valor del elemento seleccionado
$("some_selector").val(funcion(index, valor) {
    ...
});
```
###### Ejemplos
```js
//Obtengo el valor del primer input de tipo texto
var valor = $("input[type=text]").val();

//Todos los input de tipo text van a mostrar "Insert Value"
$("input[type=text]").val("Insert Value");

//Voy a añadir al valor que tenían -> y la posición de entre los seleccionados.
$("input[type=text]").val(function (index, valor) {
    $(this).val(valor + "->" + index);
});
```