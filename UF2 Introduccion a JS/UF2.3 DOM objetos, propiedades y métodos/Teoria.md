## UF2.3: DOM – Objetos, propiedades y métodos
   
- [Funciones en JS](#funciones-en-js)
- [DOM](#dom-1)
  - [Acceso a los nodos – otras formas](#acceso-a-los-nodos--otras-formas-1)
  - [Crear y eliminar nodos](#crear-y-eliminar-nodos-1)
    - [Para crear:](#para-crear)
    - [Para eliminar:](#para-eliminar)
- [Manipular nodos DOM](#manipular-nodos-dom-1)
  - [Utilidades](#utilidades-1)
- [BOM](#bom-1)
  - [Objeto Window](#objeto-window-1)
  - [Objeto Window - navegadores](#objeto-window---navegadores-1)
    - [Internet Explorer](#internet-explorer)
    - [Navegadores de la familia Mozilla, Safari y Opera](#navegadores-de-la-familia-mozilla-safari-y-opera)
  - [Objeto Document](#objeto-document-1)
    - [Propiedades:](#propiedades)
  - [Objeto Document - Elementos](#objeto-document---elementos-1)
  - [Objeto Location](#objeto-location-1)
    - [Propiedades:](#propiedades-1)
  - [Objeto Navigator](#objeto-navigator-1)
    - [Propiedades:](#propiedades-2)
  - [Objeto Screen](#objeto-screen-1)
    - [Propiedades:](#propiedades-3)


## Funciones
### Antes de meternos en harina...
## DOM
### Definición
### Nodos
#### Acceso a los nodos
#### Acceso a los nodos (cont)
#### Acceso a los nodos – otras formas
#### Crear y eliminar nodos
### Manipular nodos DOM
#### Utilidades 
## BOM
### Definición
### Objeto Window
#### Objeto Window - navegadores
### Objeto Document
#### Objeto Document - elementos
### Objeto Location
### Objeto Navigator
### Objeto Screen

# Funciones en JS
Una función es una serie de instrucciones que se agrupan y pueden ejecutarse desde cualquier otra parte del código, es decir, un bloque de código que se aísla del resto para poder ser ejecutado una o varias veces desde otro punto del código.

- Para escribir una función en Javascript existen dos opciones, pero la forma más común es:
```js
function nombreFuncion("argumentos") { .... }
```
```js
function calcular_ventas (unidades_a, unidades_b, unidades_c) {
return unidades_a * 79 + unidades_b * 129 + unidades_c * 699;
}
```
# DOM
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

# BOM
## Objeto Window
- Representa la ventana completa del navegador. 
- Podemos 
  - mover 
  - redimensionar 
  - manipular 
- laventana actual del navegador, además de abrir y cerrar ventanas.
- Todos los objetos heredan de este.
- ``Métodos``: (provocan errores, así que se está empezando a restringir su uso).
  
  - moveBy(x, y): 
    - Desplaza la posición de la ventana x píxeles hacia la derecha e y píxeles hacia abajo.
    - Desplazamientos negativos: para mover la ventana hacia la izquierda o hacia arriba.
  
  - moveTo(x, y): 
      - Desplaza la ventana del navegador hasta que la esquina superior izquierda se encuentre en la posición (x, y) de la pantalla del usuario. 
      - Desplazamientos negativos: parte de la ventana no se visualiza en la pantalla.
  
  - resizeBy(x, y): 
    - Redimensiona la ventana del navegador de forma que su nueva anchura sea igual a (anchura_anterior + x) y su nueva altura sea igual a (altura_anterior + y). 
    - Valores negativos: reducen la anchura y/o altura de la ventana.
  
  - resizeTo(x, y): 
    - Redimensiona la ventana del navegador hasta que su anchura sea igual a x y su altura sea igual a y.
    - No permite valores negativos.

## Objeto Window - navegadores

Como no hay un estándar para el BOM, cada navegador implementa su propio método:

### Internet Explorer
- `window.screenLeft` y `window.screenTop`: coordenadas de la posición de la ventana.
- `document.body.offsetWidth` y `document.body.offsetHeight`: tamaño del área visible de la página (sin barra de estado ni menús).
- No permite obtener el tamaño de la página entera.

### Navegadores de la familia Mozilla, Safari y Opera
- `window.screenX` y `window.screenY`: posición de la ventana.
- `window.innerWidth` y `window.innerHeight`: tamaño de la zona visible.
- `window.outerWidth` y `window.outerHeight`: tamaño total de la ventana.

## Objeto Document

Para obtener información sobre la propia página HTML

### Propiedades:
- `lastModified`: Fecha de la última modificación de la página.
- `referrer`: URL desde la que se accedió a la página.
- `title`: Define el texto de la etiqueta `<title>`.
- `URL`: Define la URL de la página actual del navegador.
```js
/* modificar el título de la página */
document.title = "Nuevo titulo";

/* llevar al usuario a otra página diferente */
document.URL = "http://pagina_nueva.html";
```

## Objeto Document - Elementos

Este objeto también contiene varios arrays con información sobre algunos elementos de la página. Se puede acceder a los elementos de cada array por su índice (como siempre) o por su nombre de elemento en la página HTML.

- `anchors`: array con todas las anclas de la página (`<a name="nombre_ancla"></a>`)
- `applets`: array con todos los applets de la página (`<applet>`)
- `embeds`: array con todos los elementos incrustados (`<embed>`)
- `forms`: array con todos los formularios de la página
- `images`: array con todas las imágenes de la página
- `links`: array con todos los enlaces de la página (`<a href="enlace.html"> </a>`)

## Objeto Location

Representa la URL de la página HTML que se muestra en la ventana del navegador.

### Propiedades:

- `hash`: contenido de la URL que se encuentra después del signo # (enlaces de las anclas).
- `host`: nombre del servidor.
- `hostname`: la mayoría de las veces coincide con `host` (a veces se eliminan las www del principio).
- `href`: URL completa de la página actual (es la propiedad más usada, porque permite obtener o establecer la dirección de la página que se muestra en el navegador).
- `pathname`: contenido que se encuentra después del `host`.
- `port`: si se especifica en la URL, es el puerto accedido.
- `protocol`: protocolo (todo lo que se encuentra antes de las dos barras inclinadas //).
- `search`: todo lo que se encuentra tras el símbolo '?', es decir, la consulta o query string.

## Objeto Navigator

Permite obtener información sobre el propio navegador (en Internet Explorer: objeto `clientInformation`). Con esto, detectamos tipo y versión del navegador para las aplicaciones con código diferente para cada navegador.

### Propiedades:
- `appCodeName`
- `appName`
- `appMinorVersion`
- `appVersion`
- `browserLanguage`
- `cookieEnabled`
- `cpuClass`
- `javaEnabled`
- `language`
- `mimeTypes`
- `onLine`
- `oscpu`
- `platform`
- `plugins`
- `preference()`
- `product`
- `productSub`
- `securityPolicy`
- `systemLanguage`
- `userAgent`
- `userLanguage`
- `userProfile`

## Objeto Screen

Permite obtener información sobre la pantalla del usuario (ej: resolución del monitor).

### Propiedades:
- **`availHeight`**: altura de pantalla disponible para las ventanas.
- **`availWidth`**: anchura de pantalla disponible para las ventanas.
- **`colorDepth`**: es la profundidad de color de la pantalla (32 bits, normalmente).
- **`height` y `width`**: altura y anchura total de la pantalla en píxeles.
