# Índice

- [Índice](#índice)
  - [Array](#array)
    - [Declaración](#declaración)
  - [Metodos útiles](#metodos-útiles)
    - [concat(array/valores):](#concatarrayvalores)
    - [unshift(valor), push(valor):](#unshiftvalor-pushvalor)
    - [shift(), pop():](#shift-pop)
    - [join(separador):](#joinseparador)
    - [slice(indice1, indice2):](#sliceindice1-indice2)
    - [splice(indice, numero):](#spliceindice-numero)
    - [reverse():](#reverse)
    - [sort():](#sort)
    - [indexOf(valor\[, indice\]), lastIndexOf(valor\[, indice\]):](#indexofvalor-indice-lastindexofvalor-indice)
- [Date](#date)
  - [Definición](#definición)
  - [Métodos útiles](#métodos-útiles)
    - [getTime() y setTime()](#gettime-y-settime)
    - [getMonth() y setMonth()](#getmonth-y-setmonth)
    - [getFullYear() y setFullYear()](#getfullyear-y-setfullyear)
    - [getYear() y setYear()](#getyear-y-setyear)
    - [getDate() y setDate()](#getdate-y-setdate)
    - [getDay()](#getday)
    - [getHours() y setHours()](#gethours-y-sethours)
    - [getMinutes() y setMinutes()](#getminutes-y-setminutes)
    - [getSeconds() y setSeconds()](#getseconds-y-setseconds)
    - [getMilliseconds() y setMilliseconds()](#getmilliseconds-y-setmilliseconds)
    - [Date.parse():](#dateparse)
    - [toString()](#tostring)
    - [toDateString()](#todatestring)
    - [toTimeString()](#totimestring)
    - [toLocaleString()](#tolocalestring)
    - [toLocaleDateString()](#tolocaledatestring)
    - [toLocaleTimeString()](#tolocaletimestring)
    - [toJSON()](#tojson)
    - [toISOString()](#toisostring)
    - [toUTCString()](#toutcstring)
- [String](#string)
  - [Definición](#definición-1)
  - [Métodos útiles](#métodos-útiles-1)
    - [length](#length)
    - [charAt(indice)](#charatindice)
    - [indexOf(string)](#indexofstring)
    - [lastIndexOf(string)](#lastindexofstring)
    - [replace(regex, string)](#replaceregex-string)
    - [search(regex)](#searchregex)
    - [split(string)](#splitstring)
    - [slice(indice1\[, indice2\])](#sliceindice1-indice2-1)
    - [substr(indice\[, longitud\])](#substrindice-longitud)
    - [substring(indice1\[, indice2\])](#substringindice1-indice2)
    - [toLowerCase()](#tolowercase)
    - [toUpperCase()](#touppercase)
    - [trim()](#trim)
- [Math](#math)
  - [Constantes y métodos](#constantes-y-métodos)
    - [Constante PI](#constante-pi)
    - [Métodos Trigonométricos](#métodos-trigonométricos)
    - [Métodos Inversos Trigonométricos](#métodos-inversos-trigonométricos)
    - [Métodos de Máximo y Mínimo](#métodos-de-máximo-y-mínimo)
    - [Método sqrt(x)](#método-sqrtx)
    - [Método pow(x, y)](#método-powx-y)
    - [Método round(x)](#método-roundx)
    - [Método random()](#método-random)


## Array
### Declaración
- JS permite definir los arrays de forma abreviada o de la forma tradicional en esta clase.
- Para ello debemos instanciar la clase Array() con un argumento numérico (el número de elementos
que tiene) de la forma:
```js
var arrayDePrueba = new Array(3);
```
- Los elementos pueden ser de distinto tipo, y podemos incluirlos al instanciar el array o después:
```js
// Comando 1
var arrayDePrueba2 = new Array(2, "usuario", true, 45.34);
console.log(arrayDePrueba2); // Resultado: [2, "usuario", true, 45.34]

// Comando 2
var arrayDePrueba3 = [""];
console.log(arrayDePrueba3); // Resultado: [""]

// Comando 3
var arrayDePrueba4 = new Array();
arrayDePrueba4[0] = "posicion0";
arrayDePrueba4[1] = 1123;
arrayDePrueba4[2] = false;
console.log(arrayDePrueba4); // Resultado: ["posicion0", 1123, false]

```

## Metodos útiles

### concat(array/valores): 
- Junta los dos arrays y devuelve el resultado.

```js
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var resultado = array1.concat(array2);
console.log(resultado); // Resultado: [1, 2, 3, 4, 5, 6]
```
### unshift(valor), push(valor): 
- `unshift`Añade un valor al principio y devuelve la longitud, respectivamente.
- `push` Añade al final del array, y devuelve la longitud, respectivamente.

```js
var array = [1, 2, 3];
console.log(array.unshift(0)); // Resultado: 4
console.log(array); // Resultado: [0, 1, 2, 3]

console.log(array.push(4)); // Resultado: 5
console.log(array); // Resultado: [0, 1, 2, 3, 4]
```

### shift(), pop(): 
- `shift` Elimina un valor al principio del array.
- `pop` Elimina un valor final del array.
```js
var array = [0, 1, 2, 3, 4];
console.log(array.shift()); // Resultado: 0
console.log(array); // Resultado: [1, 2, 3, 4]

console.log(array.pop()); // Resultado: 4
console.log(array); // Resultado: [1, 2, 3]
```

### join(separador): 
- Crea un string con los elementos del array.
```js
var array = [1, 2, 3];
console.log(array.join(', ')); // Resultado: "1, 2, 3"
```

### slice(indice1, indice2): 
- Extrae una sección del array.
- Devuelve una copia superficial de una porción de un array, empezando desde el índice inicial hasta el índice final sin incluirlo
```js
var array = [1, 2, 3, 4, 5];
console.log(array.slice(1, 3)); // Resultado: [2, 3]
```

### splice(indice, numero): 
- Elimina elementos del array.
```js
var array = [1, 2, 3, 4, 5];
array.splice(1, 2);
console.log(array); // Resultado: [1, 4, 5]
```

### reverse(): 
- Invierte el orden de los elementos.
```js
var array = [1, 2, 3];
array.reverse();
console.log(array); // Resultado: [3, 2, 1]
```

### sort(): 
- Ordena los elementos.
```js
var array = [3, 1, 2];
array.sort();
console.log(array); // Resultado: [1, 2, 3]
```

### indexOf(valor[, indice]), lastIndexOf(valor[, indice]): 
- `indexOf` Devuelve el índice de la primera aparición del número
- `lastIndexOf` Devuelve el índice de la última aparición del número
```js
var array = [1, 2, 3, 4, 2];
console.log(array.indexOf(2)); // Resultado: 1
console.log(array.lastIndexOf(2)); // Resultado: 4
```

# Date
## Definición
- Esta clase nos permite representar y manipular valores de tipo fecha.
```js
// Crear un objeto Date con la fecha y hora actuales
var hoy = new Date();
console.log(hoy); // Muestra la fecha y hora actuales
```
```js
/* Crear un objeto Date con la fecha representada por el número de milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC (epoch time)*/
var fecha = new Date(0);
console.log(fecha); // Muestra "Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)"
```
```js
/* Crear un objeto Date con la fecha representada por 10 billones (10^13) de milisegundos
desde el epoch time (1 de enero de 1970, 00:00:00 UTC)*/
var fecha2 = new Date(10000000000000);
console.log(fecha2); // Muestra "Sat Nov 20 2286 17:46:40 GMT+0000 (UTC)"
```
```js
/*Crear un objeto Date con una fecha específica (28 de septiembre de 2023)
Nota: Los meses en JavaScript son base 0 (0 = enero, 8 = septiembre)*/
var fecha3 = new Date(2023, 8, 28);
console.log(fecha3); // Muestra "Thu Sep 28 2023 00:00:00 GMT+0000 (UTC)"
```
```js
// Crear un objeto Date con una fecha y hora específicas (28 de septiembre de 2023, 12:15:23)
var fecha4 = new Date(2023, 8, 28, 12, 15, 23);
console.log(fecha4); // Muestra "Thu Sep 28 2023 12:15:23 GMT+0000 (UTC)"
```
## Métodos útiles

### getTime() y setTime()
```js
let date = new Date();

// Obtener el tiempo en milisegundos desde el 1 de enero de 1970
console.log(date.getTime()); // Ejemplo de salida: 1629787023000

// Establecer el tiempo en milisegundos desde el 1 de enero de 1970
date.setTime(1629787023000);
console.log(date); // Ejemplo de salida: Wed Aug 25 2021 21:10:23 GMT+0200 (Central European Summer Time)
```

### getMonth() y setMonth()
```js
let date = new Date();

// Obtener el mes (0 = enero, 11 = diciembre)
console.log(date.getMonth()); // Ejemplo de salida: 4 (si el mes es mayo)

// Establecer el mes a noviembre (11)
date.setMonth(11);
console.log(date.getMonth()); // Ejemplo de salida: 11
```

### getFullYear() y setFullYear()
```js
let date = new Date();

// Obtener el año
console.log(date.getFullYear()); // Ejemplo de salida: 2024

// Establecer el año a 2025
date.setFullYear(2025);
console.log(date.getFullYear()); // Ejemplo de salida: 2025
```

### getYear() y setYear()
- Nota: getYear() es obsoleto y se recomienda usar getFullYear(). Aquí se incluye solo por completitud.

```js
let date = new Date();

// Obtener el año en formato de dos cifras (obsoleto)
console.log(date.getYear()); // Ejemplo de salida: 124 (año 2024)

// Establecer el año a 2025 en formato de dos cifras (obsoleto)
date.setYear(125);
console.log(date.getYear()); // Ejemplo de salida: 125 (año 2025)
```

### getDate() y setDate()
```js
let date = new Date();

// Obtener el día del mes
console.log(date.getDate()); // Ejemplo de salida: 20 (si es el día 20)

// Establecer el día del mes a 15
date.setDate(15);
console.log(date.getDate()); // Ejemplo de salida: 15
```

### getDay()
- Nota: No hay un método setDay() porque getDay() solo devuelve el día de la semana (0-6). Para cambiar el día de la semana, se debe usar setDate().

```js
let date = new Date();

// Obtener el día de la semana (0 = domingo, 6 = sábado)
console.log(date.getDay()); // Ejemplo de salida: 1 (si es lunes)

// Establecer el día de la semana ajustando el día del mes
date.setDate(date.getDate() + (6 - date.getDay())); // Mover al próximo sábado
console.log(date.getDay()); // Ejemplo de salida: 6 (sábado)
```

### getHours() y setHours()
```js
let date = new Date();

// Obtener la hora
console.log(date.getHours()); // Ejemplo de salida: 14 (si son las 2 PM)

// Establecer la hora a las 10 AM
date.setHours(10);
console.log(date.getHours()); // Ejemplo de salida: 10
```

### getMinutes() y setMinutes()
```js
let date = new Date();

// Obtener los minutos
console.log(date.getMinutes()); // Ejemplo de salida: 30

// Establecer los minutos a 45
date.setMinutes(45);
console.log(date.getMinutes()); // Ejemplo de salida: 45
```

### getSeconds() y setSeconds()
```js
let date = new Date();

// Obtener los segundos
console.log(date.getSeconds()); // Ejemplo de salida: 15

// Establecer los segundos a 30
date.setSeconds(30);
console.log(date.getSeconds()); // Ejemplo de salida: 30
```

### getMilliseconds() y setMilliseconds()
```js
let date = new Date();

// Obtener los milisegundos
console.log(date.getMilliseconds()); // Ejemplo de salida: 500

// Establecer los milisegundos a 250
date.setMilliseconds(250);
console.log(date.getMilliseconds()); // Ejemplo de salida: 250
```
### Date.parse():
- En JavaScript se utiliza para analizar una cadena de texto que representa una fecha y convertirla en el número de milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC (época Unix).
- Esto puede ser útil cuando necesitas trabajar con fechas y horas de una manera más manejable dentro de tu código, ya que una vez que tienes la fecha en milisegundos, puedes crear un objeto Date completamente funcional a partir de esa información.
- Sintaxis:
```js
Date.parse(dateString)
```
- Ejemplo
```js
// Cadena que representa una fecha
const fechaCadena = "2024-05-21T15:30:00Z";

// Convertir la cadena a milisegundos desde el 1 de enero de 1970, 00:00:00 UTC
const milisegundos = Date.parse(fechaCadena);

console.log(milisegundos); // Imprime los milisegundos

// Crear un objeto Date usando los milisegundos
const fechaObjeto = new Date(milisegundos);

console.log(fechaObjeto); // Imprime el objeto Date
```

### toString()
- Devuelve una cadena que representa la fecha y la hora en el formato predeterminado para el sistema.
```js
var fecha = new Date();
console.log(fecha.toString());
// Ejemplo de salida: "Tue May 21 2024 14:37:22 GMT+0000 (Coordinated Universal Time)"
```
### toDateString()  
- Devuelve solo la parte de la fecha en una cadena.
```js
var fecha = new Date();
console.log(fecha.toDateString());
// Ejemplo de salida: "Tue May 21 2024"
```

### toTimeString()
- Devuelve solo la parte de la hora en una cadena.
```js
var fecha = new Date();
console.log(fecha.toTimeString());
// Ejemplo de salida: "14:37:22 GMT+0000 (Coordinated Universal Time)"

```

### toLocaleString()
- Devuelve una cadena que representa la fecha y la hora de acuerdo con el formato de la configuración regional del sistema.
```js
var fecha = new Date();
console.log(fecha.toLocaleString());
// Ejemplo de salida: "21/05/2024, 14:37:22" (puede variar según la configuración regional)

```

### toLocaleDateString()
-  Devuelve una cadena que representa solo la fecha de acuerdo con el formato de la configuración regional del sistema.
```js
var fecha = new Date();
console.log(fecha.toLocaleDateString());
// Ejemplo de salida: "21/05/2024" (puede variar según la configuración regional)

```

### toLocaleTimeString()
- Devuelve una cadena que representa solo la hora de acuerdo con el formato de la configuración regional del sistema.
```js
var fecha = new Date();
console.log(fecha.toLocaleTimeString());
// Ejemplo de salida: "14:37:22" (puede variar según la configuración regional)

```

### toJSON()
-  Devuelve una cadena que representa la fecha y la hora en el formato ISO 8601, que es útil para la serialización JSON.
```js
var fecha = new Date();
console.log(fecha.toJSON());
// Ejemplo de salida: "2024-05-21T14:37:22.123Z"

```

### toISOString()
- Devuelve una cadena que representa la fecha y la hora en el formato ISO 8601.
```js
var fecha = new Date();
console.log(fecha.toISOString());
// Ejemplo de salida: "2024-05-21T14:37:22.123Z"

```

### toUTCString()
- Devuelve una cadena que representa la fecha y la hora en el formato UTC (Coordinated Universal Time).
```js
var fecha = new Date();
console.log(fecha.toUTCString());
// Ejemplo de salida: "Tue, 21 May 2024 14:37:22 GMT"

```

# String

## Definición
- Cadenas de texto. 
- Podemos usar el tipo primitivo o el objeto de tipo String indistintamente, porque funcionan igual. 
- Se pueden instanciar de la siguiente forma:
```js
var a = 'hola'; //tipo primitivo
var b = new String ('Hola'); //objeto de tipo String

```
## Métodos útiles

### length
- Obtiene la longitud de la cadena de texto.
```js
var texto = "Hola Mundo";
var longitud = texto.length;
console.log("Longitud del texto:", longitud); // Salida: 10
```

### charAt(indice)
-  Devuelve el carácter en la posición indicada.
```js
var texto = "Hola Mundo";
var caracter = texto.charAt(0);
console.log("Primer carácter:", caracter); // Salida: "H"

```

### indexOf(string)
- Devuelve la posición de la primera ocurrencia de un string dentro de otro, o -1 si no lo encuentra.
```js
var texto = "Hola Mundo";
var posicion = texto.indexOf("Mundo");
console.log("Posición de 'Mundo':", posicion); // Salida: 5

```

### lastIndexOf(string)
- Devuelve la posición de la última ocurrencia de un string dentro de otro, o -1 si no lo encuentra.
```js
var texto = "Hola Mundo, Mundo Feliz";
var ultimaPosicion = texto.lastIndexOf("Mundo");
console.log("Última posición de 'Mundo':", ultimaPosicion); // Salida: 12

```

### replace(regex, string)
- Busca y reemplaza un string por otro, trabajando con expresiones regulares.
```js
var texto = "Hola Mundo";
var nuevoTexto = texto.replace("Mundo", "Planeta");
console.log("Nuevo texto:", nuevoTexto); // Salida: "Hola Planeta"

```

### search(regex)
- Busca un texto dentro del string; si lo encuentra devuelve el índice, si no, devuelve -1, trabajando con expresiones regulares.

```js
var texto = "Hola Mundo";
var indice = texto.search("Mundo");
console.log("Índice de 'Mundo':", indice); // Salida: 5

```

### split(string)
- Divide un string en un array de substrings usando un separador especificado.
```js
var texto = "Hola, cómo estás?";
var partes = texto.split(" ");
console.log(partes);
// Ejemplo de salida: ["Hola,", "cómo", "estás?"]

```

### slice(indice1[, indice2])
-  Devuelve una parte del string desde indice1 hasta (pero sin incluir) indice2. indice2 es opcional.
```js
var texto = "JavaScript";
var parte = texto.slice(1, 4);
console.log(parte);
// Ejemplo de salida: "ava"

```
### substr(indice[, longitud])
- Devuelve una parte del string comenzando desde indice con una longitud especificada.
```js
var texto = "JavaScript";
var parte = texto.substr(1, 4);
console.log(parte);
// Ejemplo de salida: "avaS"

```
### substring(indice1[, indice2])
- Devuelve una parte del string desde indice1 hasta indice2. indice2 es opcional y si se omite, incluye hasta el final del string.
```js
var texto = "JavaScript";
var parte = texto.substring(1, 4);
console.log(parte);
// Ejemplo de salida: "ava"

```
### toLowerCase()
- Devuelve el string con todas las letras convertidas a minúsculas.
```js
var texto = "JavaScript";
var minusculas = texto.toLowerCase();
console.log(minusculas);
// Ejemplo de salida: "javascript"

```
### toUpperCase()
- Devuelve el string con todas las letras convertidas a mayúsculas.
```js
var texto = "JavaScript";
var mayusculas = texto.toUpperCase();
console.log(mayusculas);
// Ejemplo de salida: "JAVASCRIPT"

```
### trim()
- Elimina los espacios en blanco al inicio y al final del string.
```js
var texto = "   JavaScript   ";
var textoLimpio = texto.trim();
console.log(textoLimpio);
// Ejemplo de salida: "JavaScript"

```

# Math
## Constantes y métodos
Esta clase nos proporciona constantes y métodos matemáticos.

### Constante PI
- Representa el número PI (aproximadamente 3.14159).
```js
console.log(Math.PI);
// Ejemplo de salida: 3.141592653589793

```

### Métodos Trigonométricos
- Calculan funciones trigonométricas básicas.

- ``sin(x)``: Calcula el seno de x (donde x está en radianes).
- ``cos(x)``: Calcula el coseno de x (donde x está en radianes).
- ``tan(x)``: Calcula la tangente de x (donde x está en radianes).
```js
var angulo = Math.PI / 4; // 45 grados en radianes
console.log(Math.sin(angulo)); // Ejemplo de salida: 0.7071067811865475
console.log(Math.cos(angulo)); // Ejemplo de salida: 0.7071067811865475
console.log(Math.tan(angulo)); // Ejemplo de salida: 0.9999999999999999

```
### Métodos Inversos Trigonométricos
- Calculan los arcos de las funciones trigonométricas (resultados en radianes).

- ``asin(x)``: Calcula el arcoseno de x.
- ``acos(x)``: Calcula el arcocoseno de x.
- ``atan(x)``: Calcula el arcotangente de x.
```js
var valor = 0.5;
console.log(Math.asin(valor)); // Ejemplo de salida: 0.5235987755982989 (30 grados en radianes)
console.log(Math.acos(valor)); // Ejemplo de salida: 1.0471975511965979 (60 grados en radianes)
console.log(Math.atan(valor)); // Ejemplo de salida: 0.4636476090008061 (26.565 grados en radianes)

```
### Métodos de Máximo y Mínimo
- Encuentran el mayor o menor valor en una lista de números.

- ``max([x[,y[,...]]])``: Devuelve el valor máximo.
- ``min([x[,y[,...]]])``: Devuelve el valor mínimo.
```js
console.log(Math.max(1, 2, 3, 4, 5)); // Ejemplo de salida: 5
console.log(Math.min(1, 2, 3, 4, 5)); // Ejemplo de salida: 1
```
### Método sqrt(x)
- Calcula la raíz cuadrada de x.
```js
console.log(Math.sqrt(16)); // Ejemplo de salida: 4

```
### Método pow(x, y)
- Calcula x elevado a la potencia de y.
```js
console.log(Math.pow(2, 3)); // Ejemplo de salida: 8

```
### Método round(x)
- Redondea x al entero más cercano.
```js
console.log(Math.round(4.7)); // Ejemplo de salida: 5
console.log(Math.round(4.4)); // Ejemplo de salida: 4

```
### Método random()
- Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
```js
console.log(Math.random());
// Ejemplo de salida: un número aleatorio entre 0 y 1, como 0.123456789

```