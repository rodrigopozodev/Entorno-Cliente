## UF3.3: Validación de formularios

- [UF3.3: Validación de formularios](#uf33-validación-de-formularios)
- [Incorporar validación a formulario](#incorporar-validación-a-formulario)
  - [Introducción](#introducción)
  - [Incorporar validación a un formulario](#incorporar-validación-a-un-formulario)
  - [Campo de texto obligatorio](#campo-de-texto-obligatorio)
  - [Campo de texto con valor numérico](#campo-de-texto-con-valor-numérico)
  - [Campo de texto con DNI](#campo-de-texto-con-dni)
  - [Campo de texto con número de teléfono](#campo-de-texto-con-número-de-teléfono)
  - [Campo de texto con número de teléfono](#campo-de-texto-con-número-de-teléfono-1)
  - [Campo de texto con email](#campo-de-texto-con-email)
  - [Fecha](#fecha)
  - [Selección de opción en lista](#selección-de-opción-en-lista)
  - [Checkbox](#checkbox)
  - [RadioButton](#radiobutton)

## Incorporar validación a formulario
### Introducción
Antes de enviar un formulario al servidor, se recomienda validar mediante JavaScript los datos
insertados por el usuario. De esta forma, si el usuario ha cometido algún error al rellenar el formulario, se
le puede notificar de forma instantánea, sin necesidad de esperar la respuesta del servidor. Esto
mejora la experiencia de usuario y ayuda a reducir la carga de procesamiento del servidor.

Aunque existen tantas posibles comprobaciones como elementos de formulario diferentes, algunas
comprobaciones son muy habituales: que se rellene un campo obligatorio, que se seleccione el valor
de una lista desplegable, que la dirección de email indicada sea correcta, que la fecha introducida
sea lógica, que se haya introducido un número donde así se requiere, etc.

### Incorporar validación a un formulario
Para incorporar la validación a un formulario, podemos hacerlo así:

```js
<form action="" method="" id="" name="" onsubmit="return validacion()">
  <!-- código del formulario -->
</form>
```

Y el esquema de la función validacion() sería:
```js
function validacion() {
      if (condicion que debe cumplir el primer campo del formulario) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe tener un valor de...');
        return false;
      }
      else if (condicion que debe cumplir el segundo campo del formulario) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe tener un valor de...');
        return false;
      }
      //....
      else if (condicion que debe cumplir el último campo del formulario) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe tener un valor de...');
        return false;
      }
      // Si el script ha llegado a este punto, todas las      condiciones
      // se han cumplido, por lo que se devuelve el valor true
      return true;
}
```
Esta forma utiliza el comportamiento del evento onsubmit de JavaScript, que cambia su comportamiento en función del valor que se devuelve (como, por ejemplo, onkeypress).

- Si onsubmit devuelve true, el formulario se envía como normalmente.
- Si onsubmit devuelve false, el formulario no se envía.

Al definir el evento como ``onsubmit="return validacion()"``, enviaremos el formulario si, y solamente si,
todas las condiciones dentro de la función ``validacion()`` se cumplen. Por eso, en esta función tienen
que hacerse todas las comprobaciones necesarias del formulario.

La notificación de errores depende del diseño de la aplicación. En este ejemplo, se muestran con un
alert(). Las aplicaciones web mejor diseñadas marcan el campo que tiene el error en rojo, y
muestran el mensaje al lado del elemento que contiene los errores, además de añadir un mensaje de
error general.

### Campo de texto obligatorio
Para forzar a que un campo de texto tenga valor, podemos usar esto:
```js
valor = document.getElementById("campo").value;

if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}
```
Con esto comprobamos:
- Si dentro tiene un valor (es decir, que no es null)
- Si el valor tiene longitud (longitud != 0)
- Si no es solamente una cadena de espacios. Esta comprobación se hace con una expresión regular.
  - En JavaScript también son consideradas objetos, y se pueden llamar a métodos sobre ellas.
  - Van entre / /
  - Esta detecta que entre el principio (^) y el final ($) de la cadena hay uno o más (+) espacios (\s)

### Campo de texto con valor numérico 
Para comprobar que un campo de texto tiene valor numérico, podemos usar esto:


```js
valor = document.getElementById("campo").value;
if( isNaN(valor) ) {
return false;
}
```
``isNaN()`` nos facilita mucho la vida: si no puede ser un número, la condición no se cumple. Por ejemplo:
```js
isNaN(3); // false
isNaN("3"); // false
isNaN(3.3545); // false
isNaN(32323.345); // false
isNaN(+23.2); // false
isNaN("-23.2"); // false
isNaN("23a"); // true
isNaN("23.43.54"); // true
```
### Campo de texto con DNI
Comprobemos ahora que un campo tiene un DNI válido:
```js
valor = document.getElementById("campo").value;
if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
  return false;
}
```

Podemos ver que, de nuevo, la expresión nos marca el principio (^) y el final ($) del contenido.
Dentro tiene que tener:
- \d{8} : 8 números
- [A-Z] : una letra mayúscula
  
No vamos a hacer la comprobación de si la letra es correcta, sólo queremos saber si tiene 8 números y una letra.

- Si quisiéramos comprobar si tiene la letra al principio, sería ``/^[A-Z]\d{8}$/``
- Si quisiéramos comprobar si tiene diez números y dos letras, sería ``/^\d{10}[A-Z]{2}$/``

### Campo de texto con número de teléfono
Para comprobar un campo con un teléfono válido, haríamos:
```js
valor = document.getElementById("campo").value;
if( !(/^\d{9}$/.test(valor)) ) {
  return false;
}

```
Podemos ver que, de nuevo, la expresión nos marca el principio (^) y el final ($) del contenido, y después se
incluye \d{9} para indicar que esperamos 9 números seguidos.

### Campo de texto con número de teléfono
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.3%20Validación%20de%20formularios/img/numero.PNG)

### Campo de texto con email
Para comprobar que un campo de texto tiene un email válido, usamos de nuevo expresiones regulares:
```js
valor = document.getElementById("campo").value;
if( !( /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor) ) ) {
  return false;
}

```
Ej: ``sara.villanueva@live.uem.es``
- \w+ hace referencia a uno o más caracteres alfanuméricos (``sara``)
- ([-+.']\w+)* : puede haber un guión, un +, un punto o una comilla seguido de uno o más caracteres
alfanuméricos. El asterisco nos dice que este grupo de caracteres es opcional (0 o más). (``.villanueva``)
- Luego está la @
- \w+ ([-.]\w+)* : un carácter o más, que puede estar seguido de guión o punto y al menos otro carácter (o
puede que no. (``live.uem``)
- Un punto, y al menos dos caracteres (con punto o guion) (``.es``)

### Fecha
Asumiendo que tenemos campo de año, mes y día, comprobaríamos la fecha de esta forma:
```js
Fecha
var anyo = document.getElementById("anyo").value;
var mes = document.getElementById("mes").value;
var dia = document.getElementById("dia").value;

valor = new Date(anyo, mes, dia);

if( !isNaN(valor) ) {
  return false;
}
```
Hay que recordar que el mes va de
0 (Enero) a 11 (Diciembre).

Si la función Date(anyo, mes, dia)
no puede construir correctamente
una fecha con esos datos, entonces
este trozo de código devolverá
false.

### Selección de opción en lista
Podemos comprobar si una lista tiene una opción seleccionada con:
```js
indice = document.getElementById("opciones").selectedIndex;
if( indice == null || indice == 0 ) {
  return false;
}
```
En este caso, el índice 0 debería estar ocupado
por la selección por defecto, así:

```js
<select id="opciones" name="opciones">
  <option value="">- Selecciona un valor -</option>
  <option value="1">Primer valor</option>
  <option value="2">Segundo valor</option>
  <option value="3">Tercer valor</option>
</select>
```

### Checkbox

Es muy sencillo comprobar si un checkbox ha sido
seleccionado:
```js
elemento = document.getElementById("campo");
if( !elemento.checked ) {
  return false;
}
```
Si queremos comprobarlos todos haríamos un bucle:
```js
formulario = document.getElementById("formulario");

for(var i=0; i<formulario.elements.length; i++) {
  var elemento = formulario.elements[i];

  if(elemento.type == "checkbox") {
    if(!elemento.checked) {
      return false;
    }
  }
}
```

### RadioButton
Para comprobar si un radiobutton de un
determinado grupo ha sido seleccionado,
recorreremos todos los radiobutton de ese
grupo y comprobaremos elemento por
elemento si ha sido seleccionado. Al
encontrar el primer elemento seleccionado
se sale del bucle.

```js
opciones = document.getElementsByName("opciones");

var seleccionado = false;
for(var i=0; i<opciones.length; i++) {
  if(opciones[i].checked) {
      seleccionado = true;
      break;
  }
}

if(!seleccionado) {
  return false;
}
```