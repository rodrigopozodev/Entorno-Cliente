# Cosas varias:
## length
- Cadenas de texto: length devuelve el número de caracteres.
- Arrays: length devuelve el número de elementos.
- Funciones: length devuelve el número de parámetros esperados

---
- ``document.getElementById("campo")``: Busca el elemento con el id "campo" en el documento DOM(HTML).
- ``.value``: Obtiene el valor actual del campo de texto.

# Validación de formularios
## Incorporar validación a un formulario
Para incorporar la validación a un formulario, podemos hacerlo así:
```html
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
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
```

- Si ``onsubmit devuelve true``, el ``formulario se envía`` como normalmente.
- Si ``onsubmit devuelve false``, el ``formulario no se envía``.
- Al definir el evento como ``onsubmit="return validacion()``", ``enviaremos el formulario si, y solamente si, todas las condiciones dentro`` de la ``función validacion() se cumplen``.
## Campo de texto obligatorio

Para forzar a que un campo de texto tenga valor, podemos usar esto:
```js
valor = document.getElementById("campo").value;
if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    return false;
}
```
### Explicación Paso a Paso

1. Obtener el Valor del Campo de Texto
```js
valor = document.getElementById("campo").value;
```

- ``document.getElementById("campo")``: Busca el elemento con el id "campo" en el documento DOM(HTML).
- ``.value``: Obtiene el valor actual del campo de texto.
  
2. Comprobar si el Campo de Texto Está Vacío o Tiene Solo Espacios
```js
if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    return false;
}
```
- ``valor == null``: Comprueba si el valor es null. Esto es raro en un campo de texto, pero es una buena práctica comprobarlo.
- ``valor.length == 0``: Comprueba si la longitud del valor es 0. Esto significa que el campo está vacío.
- ``/^\s+$/.test(valor)``: Comprueba si el valor es solo espacios en blanco usando una expresión regular.
  - ``/^\s+$/``: Es una expresión regular que:
    - ``^``: Indica el principio de la cadena.
    - ``\s``: Representa un espacio en blanco (puede ser un espacio, tabulación, salto de línea, etc.).
    - ``+``: Indica que el carácter anterior (en este caso, cualquier espacio en blanco) aparece una o más veces.
    - ``$``: Indica el final de la cadena.
  - ``.test(valor)``: Método que prueba si el valor cumple con el patrón de la expresión regular.

### Detalles Adicionales sobre Expresiones Regulares
- ``Expresiones Regulares``: Son patrones utilizados para encontrar coincidencias en cadenas de texto. En JavaScript, se definen entre barras (``/ /``).
  
- ``Métodos de las Cadenas``: Las cadenas en JavaScript son objetos y puedes llamar a métodos sobre ellas, como .``length`` y ``.test()`` para las expresiones regulares.

## Campo de texto con valor numérico
Para comprobar que un campo de texto tiene valor numérico, podemos usar esto:


```js
valor = document.getElementById("campo").value;
if( isNaN(valor) ) {
return false;
}
```
``isNaN()`` nos facilita mucho la vida: 

- si no puede ser un número, la condición no se cumple. Por ejemplo:
```js
isNaN(3); // false porque es un numero
isNaN("3"); // false porque es un numero
isNaN(3.3545); // false porque es un numero
isNaN(32323.345); // false porque es un numero
isNaN(+23.2); // false porque es un numero
isNaN("-23.2"); // false porque es un numero
isNaN("23a"); // true porque no es un numero
isNaN("23.43.54"); // true porque no es un numero
```

## Campo de texto con DNI
Comprobemos ahora que un campo tiene un DNI válido:
```js
valor = document.getElementById("campo").value;
if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
  return false;
}
```

Podemos ver que, de nuevo, la expresión nos marca el principio (^) y el final ($) del contenido.
Dentro tiene que tener:
- ``\d{8}`` : 8 números
- ``[A-Z]`` : una letra mayúscula
  
No vamos a hacer la comprobación de si la letra es correcta, sólo queremos saber si tiene 8 números y una letra.

- Si quisiéramos comprobar si tiene la ``letra al principio``, sería ``/^[A-Z]\d{8}$/``
- Si quisiéramos comprobar si tiene ``diez números y dos letras``, sería ``/^\d{10}[A-Z]{2}$/``
## Campo de texto con número de teléfono
Para comprobar un campo con un teléfono válido, haríamos:
```js
valor = document.getElementById("campo").value;
if( !(/^\d{9}$/.test(valor)) ) {
  return false;
}

```
Podemos ver que, de nuevo, la expresión nos marca el principio (``^``) y el final (``$``) del contenido, y después se
incluye ``\d{9}`` para ``indicar que esperamos 9 números seguidos`` .

![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.3%20Validación%20de%20formularios/img/numero.PNG)

## Campo de texto con email
Para comprobar que un campo de texto tiene un email válido, usamos de nuevo expresiones regulares:
```js
valor = document.getElementById("campo").value;
if( !( /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor) ) ) {
  return false;
}
```
Ej: ``sara.villanueva@live.uem.es``
- ``\w+`` hace referencia a uno o más caracteres alfanuméricos (``sara``)
- ``([-+.']\w+)*`` : puede haber un guión, un +, un punto o una comilla seguido de uno o más caracteres
alfanuméricos. El asterisco nos dice que este grupo de caracteres es opcional (``0 o más``). (``.villanueva``)
- Luego está la ``@``
- ``\w+ ([-.]\w+)*`` : un carácter o más, que puede estar seguido de guión o punto y al menos otro carácter o
puede que no. (``live.uem``)
- ``\.\w+``: Un punto, y al menos dos caracteres (con punto o guion) (``.es``)

## Fecha
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

Si la función ``Date(anyo, mes, dia)``
no puede construir correctamente
una fecha con esos datos, entonces
este trozo de código devolverá
false.

``isNaN(valor)``: La función isNaN (Not-a-Number) comprueba si el valor pasado no es un número. En este caso, se usa para verificar si la fecha creada es válida. Si valor no es un número (lo cual sucede si la fecha es inválida), isNaN(valor) devolverá true.

``!isNaN(valor)``: 
- La negación ``!`` invierte el resultado. Así que si la ``fecha es válida devolvera false`` y ``si es invalida devolvera true
``

## Selección de opción en lista
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

## Checkbox

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

-  ``elemento.checked``: Esta propiedad devuelve true si el checkbox está marcado (seleccionado), y false si no lo está.
  
- ``!elemento.checked``: Se utiliza el operador de negación (``!``) para invertir el valor de`` elemento.   checked``. 
  - Esto significa que la ``condición se cumple`` si el ``checkbox NO está seleccionado``.
  - Si el ``checkbox NO está seleccionado``, la función ``retorna true``, lo que generalmente indica que la ``validación ha fallado``

## RadioButton
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

``document.getElementsByName("opciones")``: Esta función busca todos los elementos del DOM que tienen el atributo name establecido en "opciones". 

- Estos serían todos los radiobuttons que pertenecen al mismo grupo, ya que comparten el mismo nombre.

Dentro del bucle, se verifica si el radiobutton actual está seleccionado (checked es true).
```js
if(opciones[i].checked) {
```
- ``opciones[i].checked``: Esta propiedad devuelve true si el radiobutton actual está seleccionado.

Si se encuentra al menos un radiobutton seleccionado, se actualiza la variable seleccionado a true y se sale del bucle utilizando break.

```js
seleccionado = true;
break;
```

Fuera del bucle, se verifica si al menos un radiobutton ha sido seleccionado. Si seleccionado es false, significa que ningún radiobutton ha sido seleccionado y la función retornará false.
```js
if(!seleccionado) {
    return false;
}
```

En resumen, este código recorre todos los radiobuttons de un grupo específico y verifica si al menos uno de ellos ha sido seleccionado. Si ningún radiobutton ha sido seleccionado, la función retorna false, lo que generalmente indica que la validación ha fallado.