``Parser XML``:
- Carga en memoria una representación en árbol del DOM de la página

``AJAX``:
- Asynchronous JavaScript And XML.
- Combina XHTML/HTML + CSS, DOM, XMLHttpRequest, y XML.

# DOM
- Document: Nodo raíz del que derivan todos los demás nodos del árbol.
- Element: Representa la etiqueta XHTML, y es el único nodo que puede tener atributos y del que pueden derivar otros nodos.
- Attr: Este tipo de nodo representa cada uno de los atributos de las etiquetas XHTML.
- Text: Contiene el texto encerrado en una etiqueta XHTML.
- Comment: Representa los comentarios incluidos en la página XHTML.

La transformación de las etiquetas XHTML habituales genera dos nodos:
- el primero es el nodo de tipo Elemento (la propia
etiqueta XHTML)
- el segundo es un nodo de tipo Texto, que contiene
el texto encerrado por esa etiqueta XHTML. 

## Acceder al nodo por
- Acceder al nodo por ``id``: ``getElementById(id)``
- Acceder al nodo por la ``etiqueta``:``getElementsByTagName(nombreEtiqueta)``
- Acceder al nodo por el ``nombre``:``getElementsByName(nombre)``
- Acceder al nodo por el ``nombre de la clase``:``getElementsByClassName(nombreClase)``
- Acceder al nodo por el ``selector CSS``:``querySelectorAll()``

## Acceso a los nodos – otras formas
- ``document.anchors``: cuenta las anclas (enlaces con nombre) que hay en el DOM.
- ``document.body``: captura todo el body en una cadena.
- ``document.documentElement``: captura el head y el body en una cadena.
- `` document.forms``: captura los formularios en un array.
- ``document.images``: captura las imágenes del DOM en un array.
- ``document.links``: captura los links del DOM en un array.
- ``document.scripts``: captura los scripts en un array.
- ``document.title``: captura el título del documento HTML.

## Crear y eliminar nodos

### Para crear:
1. `createElement(etiqueta)`: crea un nodo de tipo Element que representa al elemento XHTML cuya etiqueta se pasa como parámetro.
2. `createTextNode(contenido)`: crea un nodo de tipo Text que almacena el contenido textual de los elementos XHTML.
3. `nodoPadre.appendChild(nodoHijo)`: añade un nodo como hijo de otro nodo, es decir, se añade el nodo Text como hijo del nodo Element y, a continuación, se añade el nodo Element como hijo de algún nodo de la página.

### Para eliminar:
- `removeChild(nodoABorrar)`: requiere como parámetro el nodo que se va a eliminar, y se ejecuta desde el elemento padre del nodo que se quiere eliminar.

# Manipular nodos DOM
## Utilidades
- `document.getElementById(id)`: Retorna el nodo según su id; si no encuentra, retorna `undefined`.
- `document.createElement(tag)`: Crea un nodo de tipo elemento según la etiqueta que hayamos ingresado.
- `document.createTextNode(texto)`: Crea un nodo de tipo texto con el texto que hemos ingresado, bien por teclado o mediante variable.
- `nodo.hasChildNodes()`: Retorna `true` si el nodo tiene nodo/s hijos; de lo contrario, retorna `false`.
- `<nodo>.parentNode()`: Retorna el nodo padre del nodo actual.
- `nodo.appendChild(nodo)`: Agrega un nodo hijo al nodo actual.
- `nodo.removeChild(nodo)`: Elimina el nodo recibido por un parámetro del nodo actual.
- `nodo.removeAttribute(atributo)`: Elimina el atributo ingresado del nodo actual.
- `nodo.setAttribute(atributo, valor)`: Asigna atributo al nodo actual.
- `nodo.childNodes`: Retorna un array con todos los nodos hijos del nodo actual.

---

El evento onload es uno de los más utilizados, ya que las funciones que permiten acceder y manipular
los nodos del árbol ``DOM`` solamente están disponibles cuando la página se ha cargado por completo.

---
``Propiedades``:
- Son información de la instancia concreta de esas etiquetas dentro de un DOM determinado.

---

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


---  

### Empezamos con React
![Texto alternativo](/UF5%20ReactJS/UF5.2%20Wishlist/img/ReactDOM.PNG)