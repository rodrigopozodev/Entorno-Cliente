## UF3.2: Formularios

- [UF3.2: Formularios](#uf32-formularios)
- [Eventos](#eventos)
  - [Introducción](#introducción)
  - [Tipos de eventos](#tipos-de-eventos)
- [Manejadores de eventos](#manejadores-de-eventos)
  - [Tipos](#tipos)
  - [Manejadores como atributos XHTML](#manejadores-como-atributos-xhtml)
  - [Manejadores y variable this](#manejadores-y-variable-this)
  - [Manejadores como funciones externas](#manejadores-como-funciones-externas)
  - [Manejadores semánticos](#manejadores-semánticos)
- [Objeto Event](#objeto-event)
  - [Qué es](#qué-es)
  - [Obtener el objeto event](#obtener-el-objeto-event)
  - [Información sobre el evento](#información-sobre-el-evento)
- [Formularios](#formularios)
  - [Introducción](#introducción-1)
  - [Propiedades básicas](#propiedades-básicas)
    - [elementos](#elementos)
    - [eventos](#eventos-1)
- [Utilidades básicas](#utilidades-básicas)
  - [Obtener valor: texto y textarea](#obtener-valor-texto-y-textarea)
  - [Obtener valor: radiobutton](#obtener-valor-radiobutton)
  - [Obtener valor: checkbox](#obtener-valor-checkbox)
  - [Obtener valor: select](#obtener-valor-select)
  - [Establecer el foco en un elemento](#establecer-el-foco-en-un-elemento)
  - [Evitar envío duplicado de formulario](#evitar-envío-duplicado-de-formulario)
  - [Limitar tamaño máximo de caracteres de un textarea](#limitar-tamaño-máximo-de-caracteres-de-un-textarea)

## Eventos
### Introducción
Las aplicaciones web creadas con JavaScript pueden utilizar el modelo de ``programación basada en
eventos``.

En este tipo de programación, los scripts se dedican a esperar a que el usuario "haga algo" (que pulse
una tecla, que mueva el ratón, que cierre la ventana del navegador). A continuación, el script
responde a la acción del usuario, procesando esa información y generando un resultado.

Los eventos hacen posible que los usuarios transmitan información a los programas. JavaScript define
numerosos eventos que permiten una interacción completa entre el usuario y las páginas/aplicaciones
web.

- La pulsación de una tecla constituye un evento, así como pinchar o mover el ratón, seleccionar un elemento
de un formulario, redimensionar la ventana del navegador, etc.

JavaScript permite asignar una ``función`` a cada uno de los eventos. De esta forma, cuando se produce
cualquier evento, JavaScript ejecuta su función asociada. Este tipo de funciones se denominan "event
handlers" en inglés y suelen traducirse por "manejadores de eventos".
### Tipos de eventos
En este modelo, cada elemento o etiqueta XHTML define su propia lista de posibles eventos que se le
pueden asignar. Un mismo tipo de evento (por ejemplo, pinchar el botón izquierdo del ratón) puede
estar definido para varios elementos XHTML diferentes y un mismo elemento XHTML puede tener
asociados varios eventos diferentes.

El nombre de cada evento se construye mediante el prefijo on, seguido del nombre en inglés de la
acción asociada al evento. Así, el evento de pinchar un elemento con el ratón se
denomina onclick y el evento asociado a la acción de mover el ratón se denomina onmousemove.

En la plataforma tenéis una tabla con los eventos más importantes definidos por JavaScript.

Los más utilizados son:
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.2%20Formularios/img/eventos.PNG)

Algunos eventos (onclick, onkeydown, onkeypress, onreset, onsubmit) permiten evitar la "acción
por defecto" de ese evento. Más adelante lo veremos en detalle.

Las acciones típicas que realiza un usuario en una página web pueden dar lugar a una sucesión de
eventos.

- Al pulsar por ejemplo sobre un botón de tipo ``<input type="submit">`` se desencadenan los
eventos onmousedown, onclick, onmouseup y onsubmit de forma consecutiva.

## Manejadores de eventos
### Tipos
Un evento de JavaScript por sí mismo carece de utilidad. Para que los eventos resulten útiles, se deben
asociar funciones o código JavaScript a cada evento. De esta forma, cuando se produce un evento
se ejecuta el código indicado, por lo que la aplicación puede responder ante cualquier evento que
se produzca durante su ejecución.

Las funciones o código JavaScript que se definen para cada evento se denominan "manejador de
eventos" (event handler) y como JavaScript es un lenguaje muy flexible, existen varias formas
diferentes de indicar los manejadores:

- Manejadores como atributos de los elementos XHTML.

- Manejadores como funciones JavaScript externas.

- Manejadores "semánticos".
### Manejadores como atributos XHTML
Se trata del método más sencillo y a la vez menos profesional de indicar el código JavaScript que se
debe ejecutar cuando se produzca un evento. En este caso, el código se incluye en un atributo del
propio elemento XHTML. En el siguiente ejemplo, se quiere mostrar un mensaje cuando el usuario
pinche con el ratón sobre un botón:
```html
<input type="button" value="Pínchame y verás" onclick="alert('Gracias por pinchar');" />
```

En este método, se definen atributos XHTML con el mismo nombre que los eventos que se quieren
manejar.
- El ejemplo anterior sólo quiere controlar el evento de pinchar con el ratón, cuyo nombre es onclick.
Así, el elemento XHTML para el que se quiere definir este evento debe incluir un atributo llamado
onclick.


El contenido del atributo es una cadena de texto que contiene todas las instrucciones JavaScript que
se ejecutan cuando se produce el evento.
- En este caso, el código JavaScript es muy sencillo (alert('Gracias por pinchar');), ya que
solamente se trata de mostrar un mensaje.


En este otro ejemplo, cuando el usuario pincha sobre el elemento ``<div>`` se muestra un mensaje y
cuando el usuario pasa el ratón por encima del elemento, se muestra otro mensaje:
```html
<div
onclick="alert('Has pinchado con el ratón');"
onmouseover="alert('Acabas de pasar el ratón por encima');">
Puedes pinchar sobre este elemento o simplemente pasar el ratón por encima
</div>
```


Este otro ejemplo incluye una de las instrucciones más utilizadas en las aplicaciones JavaScript más
antiguas:
```html
<body onload="alert('La página se ha cargado completamente');">
  ...
</body>
```
El mensaje anterior se muestra después de que la página se haya cargado completamente, es decir,
después de que se haya descargado su código HTML, sus imágenes y cualquier otro objeto incluido en
la página.

El evento onload es uno de los más utilizados, ya que las funciones que permiten acceder y manipular
los nodos del árbol DOM solamente están disponibles cuando la página se ha cargado por completo.

### Manejadores y variable this
En los eventos, se puede utilizar la variable this para referirse al elemento XHTML que ha provocado el
evento.

Por ejemplo: dado este ``<div>``
```html
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver">
Sección de contenidos...
</div>
```
Queremos que el comportamiento sea el siguiente:
- Cuando el usuario pasa el ratón por encima del ``<div>``, el color del borde se muestra de color
negro.
- Cuando el ratón sale del ``<div>``, se vuelve a mostrar el borde con el color gris claro original.

Sin la variable this esto quedaría así:
```html
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
  onmouseover="document.getElementById('contenidos').style.borderColor='black';"
  onmouseout="document.getElementById('contenidos').style.borderColor='silver';">
    Sección de contenidos...
</div>
```

Sin embargo, podemos tener en cuenta que dentro del código de un evento JavaScript crea
automáticamente la variable this, y que esta variable hace referencia al elemento XHTML que ha
provocado el evento. Así, el ejemplo anterior se puede reescribir de la siguiente manera
```html
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
onmouseover="this.style.borderColor='black';"
onmouseout="this.style.borderColor='silver';">
Sección de contenidos...
</div>
```
El código anterior es mucho más compacto, más fácil de leer y de escribir, y funciona aunque se
modifique el valor del atributo id del ``<div>``

### Manejadores como funciones externas
La definición de los manejadores de eventos en los atributos XHTML es el método más sencillo, pero
menos aconsejable de tratar con los eventos en JavaScript. Si se realizan aplicaciones complejas,
como por ejemplo la validación de un formulario, es aconsejable agrupar todo el código JavaScript
en una función externa y llamar a esta función desde el elemento XHTML.

Siguiendo con el ejemplo anterior que muestra un mensaje al pinchar sobre un botón, con una función
externa puede transformarse en:
```js 
function muestraMensaje() {
alert('Gracias por pinchar');
}
<input type="button" value="Pinchame y verás" onclick="muestraMensaje()" />

```
Con esta técnica extraemos todas las instrucciones y las agrupamos en una función externa. Una vez
que definimos la función, en el atributo del elemento XHTML se incluye el nombre de la función, para
indicar que es la función que se ejecuta cuando se produce el evento.

El principal inconveniente de este método es que en las funciones externas no se puede utilizar la
variable this de la misma manera que antes, y hay que pasarla como parámetro.

Por ejemplo:

Esta función JS, que nos cambia el
borde de color...
```js
function resalta(elemento) {
  switch(elemento.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
      elemento.style.borderColor = 'black';
      break;
    case 'black':
    case 'black black black black':
    case '#000000':
      elemento.style.borderColor = 'silver';
      break;
  }
}
```

La utilizaríamos así:
```html
<div style="width:150px; height:60px; border:thin solid silver"
onmouseover="resalta(this)" onmouseout="resalta(this)">
Sección de contenidos...
</div>
```
La complejidad del ejemplo se produce sobre todo por la forma en la que los distintos navegadores
almacenan el valor de la propiedad borderColor:
- Firefox almacena (en caso de que los cuatro bordes coincidan en color) el valor black
- Internet Explorer lo almacena como black black black black
- Opera almacena su representación hexadecimal #000000.


### Manejadores semánticos
El problema de los dos métodos que acabamos de ver es que ``ensucian`` el XHTML de la página.

- Una de las buenas prácticas básicas en el diseño de páginas y aplicaciones web es la
separación de los contenidos (XHTML) y su aspecto o presentación (CSS).

  - Siempre que sea posible, también se recomienda separar los contenidos (XHTML) y su comportamiento o
programación (JavaScript).

- Mezclar el código JavaScript con los elementos XHTML solamente contribuye a complicar el
código fuente de la página, a dificultar la modificación y mantenimiento de la página y a
reducir la semántica del documento final producido.

Existe un método alternativo para definir los manejadores de eventos de JavaScript. Es una evolución
del método de las funciones externas, ya que se basa en ``utilizar las propiedades DOM`` de los
elementos XHTML para asignar todas las funciones externas que actúan de manejadores de eventos.

El ejemplo del botón en el que hacemos click se convierte en:
```js
// Función externa
function muestraMensaje() {
  alert('Gracias por pinchar');
}

// Asignar la función externa al elemento
document.getElementById("pinchable").onclick = muestraMensaje;

// Elemento XHTML
<input id="pinchable" type="button" value="Pinchame y verás" />
```

La técnica de los manejadores semánticos consiste en:
1. Asignar un identificador único al elemento XHTML mediante el atributo id.
2. Crear una función de JavaScript encargada de manejar el evento.
3. Asignar la función externa al evento correspondiente en el elemento deseado.
   
El último paso es la clave de esta técnica.

-  Primero se obtiene el elemento al que se desea asociar la función externa
-  Luego se utiliza una propiedad del elemento con el mismo nombre que el evento que se quiere
manejar. En este caso, la propiedad es onclick
-  Por último, se asigna la función externa mediante su nombre sin paréntesis.
   - Lo más importante (y la causa más común de errores) es indicar solamente el nombre de la función,
es decir, prescindir de los paréntesis al asignar la función. Si se añaden los paréntesis, en realidad se
está ejecutando la función y guardando el valor devuelto en la propiedad onclick de elemento.

La gran ventaja de este método es que el código XHTML resultante es muy "limpio", ya que no se
mezcla con el código JavaScript. Además, dentro de las funciones externas asignadas sí que se puede
utilizar la variable this para referirse al elemento que provoca el evento.

El único inconveniente de este método es que la página se debe cargar completamente antes de
que se puedan utilizar las funciones DOM que asignan los manejadores a los elementos XHTML. Una de
las formas más sencillas de asegurar que cierto código se va a ejecutar después de que la página se
cargue por completo es utilizar el evento onload:
```js
window.onload = function() {
document.getElementById("pinchable").onclick = muestraMensaje;
}
```

En el siguiente ejemplo, se añaden eventos a los elementos de tipo input=text de un formulario complejo:
```js
function resalta() {
// Código JavaScript
}

window.onload = function () {
  var formulario = document.getElementById("formulario");
  var camposInput = formulario.getElementsByTagName("input");

  for (var i = 0; i < camposInput.length; i++) {
    if (camposInput[i].type == "text") {
      camposInput[i].onclick = resalta;
    }
  }
}
```
## Objeto Event
### Qué es
Normalmente, los manejadores de eventos requieren información adicional para procesar sus tareas.

- Si una función se encarga de procesar el evento onclick, quizás necesite saber en que posición
estaba el ratón en el momento de pinchar el botón.

Lo más habitual es que queramos conocer información adicional sobre los eventos asociados al
teclado (por ej: saber la tecla que se ha pulsado para diferenciar las teclas normales de las teclas
especiales (ENTER, tabulador, Alt, Ctrl...) )

JavaScript permite obtener información sobre el ratón y el teclado mediante un objeto especial
llamado event. El problema es que los navegadores tratan la información sobre los eventos de forma
muy distinta:
- Internet Explorer: el objeto event forma parte del objeto window
- el resto de navegadores: el objeto event es el único argumento que tienen las funciones
manejadoras de eventos.

### Obtener el objeto event
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/1.PNG)
### Información sobre el evento
La propiedad type indica el tipo de evento producido, lo que es útil cuando una misma función se
utiliza para manejar varios eventos:
```js
var tipo = evento.type;
```
```js
function resalta(elEvento) {
  var evento = elEvento || window.event;

  switch (evento.type) {
    case 'mouseover':
      this.style.borderColor = 'red';
      console.log("red")
      break;
    case 'mouseout':
      this.style.borderColor = 'silver';
      console.log("silver")
      break;
  }
}
```
## Formularios
### Introducción
Una de las principales razones por las que se inventó el lenguaje de programación JavaScript fue la
necesidad de validar los datos de los formularios directamente en el navegador del usuario. De esta
forma, se evitaba recargar la página cuando el usuario cometía errores al rellenar los formularios.

No obstante, la aparición de las aplicaciones AJAX ha relevado al tratamiento de formularios como la
principal actividad de JavaScript. Ahora, el principal uso de JavaScript es el de las comunicaciones
asíncronas con los servidores y el de la manipulación dinámica de las aplicaciones.

De todas formas, el manejo de los formularios sigue siendo un requerimiento imprescindible para
cualquier programador de JavaScript.
### Propiedades básicas
Cuando se carga una página web, el navegador crea automáticamente un array llamado forms que
contiene la referencia a todos los formularios de la página.

Para acceder a él:
```js
document.forms[0];
```
Además del array de formularios, el navegador crea automáticamente un array llamado elements
por cada uno de los formularios de la página. Cada array elements contiene la referencia a todos los
elementos (cuadros de texto, botones, listas desplegables, etc.) de ese formulario.

Para acceder a este array:
```js
document.forms[0].elements[0];
```
El problema de esto es que si cambia el orden de los formularios nuestro código deja de funcionar. Por
tanto, lo que deberíamos hacer es acceder al formulario por su atributo name o su atributo id.

El problema de esto es que si cambia el orden de los formularios nuestro código deja de funcionar. Por
tanto, lo que deberíamos hacer es acceder al formulario por su atributo name o su atributo id.
Podemos usar las funciones del DOM de acceso a nodos, y también el objeto document nos permite
acceder directamente a un elemento por su nombre:
```js
var formularioPrincipal = document.formulario;
var primerElemento = document.formulario.elemento;

<form name="formulario">
<input type="text" name="elemento" />
</form>
```

#### elementos
Cada elemento dispone de las siguientes propiedades:

``type``: tipo de elemento que se trata.
- Elementos de tipo ``<input>`` (text, button, checkbox, etc.): valor de su atributo type.
- ``Listas desplegables`` normales ``(elemento <select>)``: select-one.
- ``Listas`` que permiten seleccionar ``varios elementos`` a la vez: select-multiple.
- Elementos de tipo ``<textarea>``: textarea.
  
``form``: referencia directa al formulario al que pertenece el elemento.
- para acceder al formulario de un elemento: ``document.getElementById("id_del_elemento").form``
  
``name``: obtiene el valor del atributo name de XHTML (sólo lectura)

``value``: permite leer y modificar el valor del atributo value de XHTML.
- ``Campos de texto`` ``(<input type="text"> y <textarea>)``: obtiene el texto que ha escrito el usuario.
- ``Botones``: texto que se muestra en el botón.

#### eventos
Los eventos más utilizados en un formulario son:
- ``onclick``: cuando se pincha con el ratón sobre un elemento.
  - Normalmente se utiliza con cualquiera de los tipos de botones que permite definir XHTML 
    - ``<input type="button">`` 
    - ``<input type="submit">`` 
    - ``<input type="image">``
  
``onchange``: cuando el usuario cambia el valor de un elemento de texto. 

  - ``<textarea>``
  - ``<input type="text">``
  
    - También se produce cuando el usuario selecciona una opción en una lista desplegable 
      - ``<select>``.
    - Sin embargo, el evento sólo se produce si después de realizar el cambio, el usuario pasa al siguiente
campo del formulario, lo que técnicamente se conoce como que "el otro campo de formulario ha
perdido el foco".
- ``onfocus``: cuando el usuario selecciona un elemento del formulario.
- ``onblur``: cuando el usuario ha deseleccionado un elemento por haber seleccionado otro elemento
del formulario.
  - Técnicamente, se dice que el elemento anterior "ha perdido el foco".

## Utilidades básicas
### Obtener valor: texto y textarea
Se obtiene y se establece directamente con la propiedad value.
```js
<input type="text" id="texto" />
var valor = document.getElementById("texto").value;

<textarea id="parrafo"></textarea>
var valor = document.getElementById("parrafo").value;
```
### Obtener valor: radiobutton
Queremos saber cuál de los radiobuttons está seleccionado:
```js
<input type="radio" value="si" name="pregunta" id="pregunta_si"/> SI
<input type="radio" value="no" name="pregunta" id="pregunta_no"/> NO
<input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc"/> NS/NC

var elementos = document.getElementsByName("pregunta");

for(var i=0; i<elementos.length; i++) {
  alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
}
```
### Obtener valor: checkbox
Queremos saber cuál de los checkbox está seleccionado, y ahora hay que comprobarlos de forma
independiente:
```js
<input type="checkbox" value="condiciones" name="condiciones" id="condiciones"/> He leído y acepto las condiciones
<input type="checkbox" value="privacidad" name="privacidad" id="privacidad"/> He leído la política de privacidad

var elemento = document.getElementById("condiciones");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);

elemento = document.getElementById("privacidad");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
```
### Obtener valor: select
Esto es más complicado. Si tenemos este select:
```js
<select id="opciones" name="opciones">
  <option value="1">Primer valor</option>
  <option value="2">Segundo valor</option>
  <option value="3">Tercer valor</option>
  <option value="4">Cuarto valor</option>
</select>
```
Lo que se requiere es obtener el valor del atributo value de la opción ``<option>`` seleccionada por el
usuario.

Para obtener el valor seleccionado, deben utilizarse las siguientes propiedades:
``options``
- Es un array creado automáticamente por el navegador para cada lista desplegable y que
contiene la referencia a todas las opciones de esa lista.
- primera opción de una lista: ``document.getElementById("id_de_la_lista").options[0]``

``selectedIndex``
- Cuando el usuario selecciona una opción, el navegador actualiza automáticamente el valor de
esta propiedad, que guarda el índice de la opción seleccionada.
- El índice hace referencia al array options de cada lista.
```js
// Obtener la referencia a la lista
var lista = document.getElementById("opciones");

// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;

alert("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
```

Podemos abreviar esto como:
```js
// Obtener la referencia a la lista
var lista = document.getElementById("opciones");

// Obtener el valor de la opción seleccionada
var valorSeleccionado = lista.options[lista.selectedIndex].value;

// Obtener el texto que muestra la opción seleccionada
var valorSeleccionado = lista.options[lista.selectedIndex].text;

alert("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
```
### Establecer el foco en un elemento
Al pulsar repetidamente la tecla TABULADOR sobre una página web, los diferentes elementos (enlaces,
imágenes, campos de formulario, etc.) van obteniendo el foco del navegador (el elemento
seleccionado cada vez suele mostrar un pequeño borde punteado).

Si en una página web el formulario es el elemento más importante (en una página de búsqueda o en
una página con un formulario para registrarse), se considera una buena práctica de usabilidad el
asignar automáticamente el foco al primer elemento del formulario cuando se carga la página.

Para asignar el foco a un elemento de XHTML, se utiliza la función focus()
```js
document.getElementById("primero").focus();

<form id="formulario" action="#">
  <input type="text" id="primero" />
</form>
```

Para establecer el foco en el primer elemento del primer formulario de una página, haremos:
```js
//hay al menos un formulario
if (document.forms.length > 0) {
  //en el primer formulario hay elementos
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var campo = document.forms[0].elements[i];
    //el elemento no está oculto
    if (campo.type != "hidden") {
      campo.focus();
      //si lo encontramos salimos del for
      break;
    }
  }
}
```
### Evitar envío duplicado de formulario
Una buena práctica en el diseño de aplicaciones web suele ser la de deshabilitar el botón de envío
después de la primera pulsación.
```js
<form id="formulario" action="#">
...
<input type="button" value="Enviar"
onclick="this.disabled=true; this.value='Enviando...'; this.form.submit()" />
</form>
```

Cuando se pulsa sobre el botón de envío del formulario, se produce el evento onclick sobre el botón y
por tanto, se ejecutan las instrucciones JavaScript contenidas en el atributo onclick:

1. Se deshabilita el botón (this.disabled = true;). Esta es la única instrucción necesaria si sólo se
quiere deshabilitar un botón.

2. A continuación, se cambia el mensaje que muestra el botón. De "Enviar" se pasa a "Enviando..."
   
3. Por último, se envía el formulario (this.form.submit())

El botón del ejemplo anterior está definido mediante un botón de tipo ``<input type="button" />``, ya que el
código JavaScript mostrado no funciona correctamente con un botón de tipo ``<input type="submit" />``. Si se
utiliza un botón de tipo submit, el botón se deshabilita antes de enviar el formulario y por tanto el formulario
acaba sin enviarse.

### Limitar tamaño máximo de caracteres de un textarea

Con algunos eventos (como onkeypress, onclick y onsubmit) se puede evitar su comportamiento
normal si se devuelve el valor false.

Ej:
```html
<textarea onkeypress="return true;"></textarea>
```
el usuario puede escribir cualquier carácter: el evento onkeypress devuelve true y la tecla pulsada se transforma
en un carácter dentro del textarea.
```html
<textarea onkeypress="return false;"></textarea>
```
Como el valor devuelto por el evento onkeypress es false, el navegador no ejecuta el comportamiento por
defecto del evento: la tecla presionada no se transforma en ningún carácter dentro del textarea.
```js
function limita(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}

<textarea id="texto" onkeypress="return limita(100);"></textarea>
```