## UF4.4: jQuery – eventos, AJAX

- [UF4.4: jQuery – eventos, AJAX](#uf44-jquery--eventos-ajax)
- [Eventos en jQuery](#eventos-en-jquery)
  - [Introducción](#introducción)
  - [Event bubbling](#event-bubbling)
  - [Capturas de eventos](#capturas-de-eventos)
    - [Asociación directa (y función .on())](#asociación-directa-y-función-on)
    - [Asociación delegada (y función .on())](#asociación-delegada-y-función-on)
    - [Funciones generales: .one()](#funciones-generales-one)
      - [Ejemplo](#ejemplo)
    - [Funciones con nombres](#funciones-con-nombres)
  - [Eventos con nombre](#eventos-con-nombre)
  - [El objeto Event](#el-objeto-event)
- [Eventos de ratón y teclado](#eventos-de-ratón-y-teclado)
  - [Eventos de teclado](#eventos-de-teclado)
  - [Eventos de ratón](#eventos-de-ratón)
  - [Propiedades de Event](#propiedades-de-event)
- [Funciones avanzadas](#funciones-avanzadas)
  - [Control de propagación de eventos](#control-de-propagación-de-eventos)
    - [Ejemplo:](#ejemplo-1)
  - [Conectar / desconectar handlers](#conectar--desconectar-handlers)
- [Funciones avanzadas](#funciones-avanzadas-1)
  - [Conectar / desconectar handlers](#conectar--desconectar-handlers-1)
  - [Simular eventos](#simular-eventos)
    - [Crear mis propios eventos](#crear-mis-propios-eventos)
- [AJAX](#ajax)
  - [Cómo usar AJAX con jQuery](#cómo-usar-ajax-con-jquery)
  - [Estructura general](#estructura-general)
  - [Estructura general](#estructura-general-1)

## Eventos en jQuery
### Introducción
Usaremos jQuery para capturar eventos y responder a los mismos, entendiendo como evento cualquier cosa que sucede en nuestra página web.
### Event bubbling
La propagación de eventos en HTML se denomina "event bubbling"

Un evento que ocurre sobre un elemento se encapsula y se propaga hacia arriba (hacia su etiqueta padre, y luego al padre de éste, y así) hasta que encuentran un manejador que lo gestione. 

Si lo encuentran, lo ejecutan, y siguen su camino hacia arriba del DOM.

Todos los eventos funcionan así, a menos que nosotros evitemos este funcionamiento de alguna manera (que veremos luego).

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/eventos.PNG)
### Capturas de eventos
Puedo hacer dos tipos de capturas:
- ``Asociación directa``:
  - cuando el evento sucede en el elemento actual o en sus hijos.
- ``Asociación delegada``:
  - cuando el evento sucede en hijos que cumplen con un selector.

Puedo utilizar además dos tipos de funciones:
- Función ``de carácter general``
  - .on(), .one()
- Función ``de evento con nombre``
  - .click(), .keypress(), .hover(), .scroll()...
#### Asociación directa (y función .on())
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/asociacion%20directa.PNG)
#### Asociación delegada (y función .on())
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/delegada.PNG)
#### Funciones generales: .one()
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/generales.PNG)
##### Ejemplo
```js
$(function () {

  var numVeces = 0;
  
  //Con asociación directa
  $("li#ejemplo").on("click mouseenter", function (event) {
    $(this).html("Número de clicks:"+(++numVeces));
  });

  //Con asociación delegada
  $("li#ejemplo").on("click mouseenter","li#ejemplo", function (event) {
    $(this).html("Número de clicks:"+(++numVeces));
  });

});
```

#### Funciones con nombres
![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/delegada%202.PNG)
### Eventos con nombre
- .change()
- .hover() 
- .mouseenter() 
- .resize()
- .click() 
- .keypress() 
- .mouseleave() 
- .scroll()
- .dblclick() 
- .keydown() 
- .mousemove() 
- .select()
- .focus() 
- .keyup() 
- .mouseout() 
- .submit()
- .focusout() 
- .mousedown() 
- .mouseover()

### El objeto Event
Tiene muchas propiedades y métodos, pero las más comúnmente usadas son:
- e.currentTarget
- e.preventDefault()
- e.type
- e.delegatedTarget 
- e.stopPropagation() 
- e.which
- e.pageX 
- e.Target 
- e.metaKey
- e.pageY 
- e.timeStamp

## Eventos de ratón y teclado
### Eventos de teclado
Eventos:
- ``.keydown()``: cuando presiono la tecla
  - Incluye "special keys" (cursores, escape, tabuladores...)
  - Case insensitive
- ``.keyup()``: cuando libero la tecla
- ``.keypress()``: cuando presiono la tecla
  - No incluye "special keys"
  - Case sensitive (sensible a mayúsculas)

### Eventos de ratón
Eventos:
- .mousedown(): presiono un botón estando dentro del elemento
- .mouseup(): libero un botón del ratón tras hacer click
- .mouseenter(): el ratón entra en un elemento (IE)
- .mouseleave(): el ratón sale de un elemento (IE)
- .mouseover(): el ratón entra en un elemento (o en cualquiera de sus hijos)
- .mouseout(): el ratón sale de un elemento (o de cualquiera de sus hijos)
- .mousemove(): muevo el ratón dentro de un elemento
- .click(): click sencillo en un elemento
- .dblclick(): doble click en un elemento

### Propiedades de Event
- e.pageX: posición del ratón con respecto al lado izquierdo del documento.
- e.pageY: posición del ratón con respecto al lado superior del documento.
- e.which: código de la tecla o del botón del ratón
  - 1: izquierda; 2: centro; 3: derecha
- e.type: Nombre del evento que se ha producido
- e.metakey(): Windows key o Command key (true o false)

## Funciones avanzadas
### Control de propagación de eventos
Desde el objeto Event puedo controlar la propagación de los eventos que se generan en mi página:
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/1.PNG)
#### Ejemplo:
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/2.PNG)
### Conectar / desconectar handlers
Igual que he conectado los handlers con .on(), los puedo desconectar con .off().
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/3.PNG)


Para desconectar un handler hecho con asociación delegada, tiene que tener la misma definición
que cuando lo conectamos.
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/4.PNG)
## Funciones avanzadas
### Conectar / desconectar handlers
El problema de los handlers creados con .on() es que no se aplican a elementos nuevos.
- Si creamos elementos nuevos por código, éstos no tienen el handler asociado.
- Para solucionar esto: asociación delegada al padre

![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/0.PNG)

### Simular eventos
Puedo simular eventos en mi página. Si lanzamos un evento nosotros, reacciona con el comportamiento por defecto, no importa si se lo hemos bloqueado o no.
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/5.PNG)

Para que nuestro evento simulado tenga el mismo comportamiento que los handlers que hemos
definido, usamos .triggerHandler()
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/6.PNG)

#### Crear mis propios eventos
Puedo simular eventos en mi página con:
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/7.PNG)

## AJAX
### Cómo usar AJAX con jQuery
Para facilitarnos la vida, en lugar de trabajar con el objeto XMLHttpRequest, podemos utilizar las herramientas que jQuery nos proporciona.

Las más comunes son éstas (aunque hay muchas más):
- $.ajax() / $jQuery.ajax(): General. Con esta llamada podemos hacer todas las demás
- $.ajaxgetJSON() / $jQuery.getJSON(): para hacer peticiones JSON
- $.ajaxSetup / $jQuery.ajaxSetup(): para configurar las llamadas asíncronas previamente.
- $.ajaxget() / $jQuery.ajaxget(): peticiones GET
- $.ajaxpost() / $jQuery.post(): peticiones POST

### Estructura general
![Texto importado](/UF4%20Comunicacion%20Asincrona/UF4.4%20jQuery%20-%20Eventos,%20AJAX/img/8.PNG)

Settings es un objeto jSON que tiene multitud de propiedades y funciones que se ejecutarán dependiendo del valor de retorno de la petición o de si la petición ha podido realizarse.

### Estructura general
```js
{
async: true,
contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
data: ....... (argumentos para la petición / url query / json)
dataType: “xml” / “html” / “json” ...
error: function(jqXHR,textStatus, error)
header: .....(argumentos de la cabecera / json)
method: “get” (or “post”)
statusCode: lista de funciones dependiendo del estado (objeto json)
success: function(data, textStatus, jqXHR)
complete: function(jqXHR)
}
```