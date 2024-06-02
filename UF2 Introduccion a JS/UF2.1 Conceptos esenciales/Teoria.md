## UF2.1: Conceptos esenciales

- [UF2.1: Conceptos esenciales](#uf21-conceptos-esenciales)
- [Variables](#variables)
  - [Nombre](#nombre)
- [Declaración](#declaración)
  - [Declaración (otras formas)](#declaración-otras-formas)
- [Tipos](#tipos)
  - [`Arrays` :](#arrays-)
- [Código en JS (Operadores)](#código-en-js-operadores)
    - [Operadores Aritméticos](#operadores-aritméticos)
- [Ejemplos](#ejemplos)
    - [Resto (%)](#resto-)
    - [Incremento(++)](#incremento)
    - [Decremento(--)](#decremento--)
    - [Negación Unaria (-)](#negación-unaria--)
    - [Unario positivo (+)](#unario-positivo-)
    - [Exponenciación (\*\*)](#exponenciación-)
  - [Operadores Lógicos](#operadores-lógicos)
- [Ejemplos](#ejemplos-1)
    - [AND Lógico (\&\&)](#and-lógico-)
    - [OR Lógico (||)](#or-lógico-)
    - [NOT Lógico (!)](#not-lógico-)
  - [Operadores de comparación](#operadores-de-comparación)
- [Ejemplos](#ejemplos-2)
  - [Igualdad (==)](#igualdad-)
  - [Desigualdad (!=)](#desigualdad-)
  - [Estrictamente iguales (===)](#estrictamente-iguales-)
  - [Estrictamente desiguales (!==)](#estrictamente-desiguales-)
  - [Mayor que (\>)](#mayor-que-)
  - [Mayor o igual que (\>=)](#mayor-o-igual-que-)
  - [Menor que (\<)](#menor-que-)
  - [Menor o igual que (\<=)](#menor-o-igual-que-)
- [Código en JS](#código-en-js)
  - [Control de flujo](#control-de-flujo)
    - [if, if-else](#if-if-else)
    - [switch](#switch)
    - [while](#while)
    - [do-while](#do-while)
    - [for, for-in.](#for-for-in)
    - [continue y break](#continue-y-break)
- [Herramientas para texto](#herramientas-para-texto)
  - [length](#length)
  - [`+` y ``concat()``](#-y-concat)
  - [Unión con variables numéricas, espacios, y separación de palabras](#unión-con-variables-numéricas-espacios-y-separación-de-palabras)
  - [``toUpperCase()`` y ``toLowerCase()``](#touppercase-y-tolowercase)
  - [charAt(x)](#charatx)
  - [``indexOf(x)`` y ``lastIndexOf(x)``](#indexofx-y-lastindexofx)
  - [substring(x, y)](#substringx-y)
  - [split(separador)](#splitseparador)
- [Herramientas para arrays](#herramientas-para-arrays)
  - [length](#length-1)
  - [concat()](#concat)
  - [join(separador)](#joinseparador)
  - [``pop()`` y ``push()``](#pop-y-push)
  - [``shift()`` y ``unshift()``](#shift-y-unshift)
  - [reverse()](#reverse)
- [Herramientas para números](#herramientas-para-números)
  - [NaN (not a number)](#nan-not-a-number)
  - [isNaN](#isnan)
  - [toFixed(digitos)](#tofixeddigitos)

<!-- ## Fundamentos
### Definición y primeros pasos
### ¿Qué podemos hacer con JS?
## Sintaxis
### Mayúsculas y separación de instrucciones
### Variables
#### Nombre
#### Declaración
##### Declaración (otras formas)
#### Tipos
##### arrays
### Operadores
#### Operadores Aritméticos
#### Operadores lógicos
#### Opereadores de Comparación
### Control de flujo
#### if, if-else
#### switch
#### while y do-while
#### for, y for-in
#### continue
#### break
### Herramientas útiles
#### Herramientas para texto
#### Herramientas para arrays
#### Herramientas para números
## Ámbitos
### Funciones y argumentos
### Definición -->

## Variables

### Nombre

El nombre puede contener:
- números
- letras
- caracter guion bajo (_)
- caracter dólar ($)


Normas
- No pueden empezar por un carácter numérico.
- No podemos utilizar caracteres raros como +, -, espacios, %...
- No podemos utilizar nombres reservados (while, for, return...).
- Siguen siendo sensibles a mayúsculas y minúsculas (la variable `Edad` y la variable `edad` son distintas).

## Declaración

Para declarar la variable antes de utilizarla se usa la palabra `var`.
- Declarar las variables no es necesario, pero es aconsejable.
- En algunos casos es importante declararlas, porque afecta al ámbito de las variables.

```js
//Declaración
var operando1
var operando2

//Declaración
var operando1,operando2

//Declaración y asignación
var operando1 = 23
var operando2 = 33
```

### Declaración (otras formas)
- `let`: Las variables son locales al bloque donde se están declarando.
- `const`: Declaramos constantes (que no cambian su valor a lo largo de la ejecución del programa).

## Tipos
Para saber el tipo de una variable podemos usar el operador `typeof`

```js
var x = 12345;
console.log(typeof x) // number
x = 'string';
console.log(typeof x) // string
x = {key: 'value' };
console.log(typeof x) // object
```

### `Arrays` :
```js
var animales = ["perro", "gato"];
animales.push("caballo");        //-> 3
animales.push("vaca", "conejo"); //-> 5
animales;
//- ["perro", "gato", "caballo", "vaca", "conejo"]
```

## Código en JS (Operadores)

#### Operadores Aritméticos

| Operador       | Descripción                                                                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resto (%)      | Operador binario correspondiente al módulo de una operación. Devuelve el resto de la división de dos operandos.                                                       |
| Incremento (++)| Operador unario. Incrementa en una unidad al operando. Si es usado antes del operando (++x) devuelve el valor del operando después de añadirle 1 y si se usa después del operando (x++) devuelve el valor de este antes de añadirle 1. |
| Decremento (--) | Operador unario. Resta una unidad al operando. Dependiendo de la posición con respecto al operando tiene el mismo comportamiento que el operador de incremento.       |
| Negación Unaria (-) | Operación unaria. Intenta convertir a número al operando y devuelve su forma negativa.                                                                             |
| Unario positivo (+) | Operación unaria. Intenta convertir a número al operando.                                                                                                          |
| Exponenciación (**) | Calcula la potencia de la base al valor del exponente. Es equivalente a base^exponente.                                                                            |

## Ejemplos

#### Resto (%)
```js
let a = 10;
let b = 3;
console.log(a % b); // Output: 1
```

#### Incremento(++)
```js
let x = 5;
console.log(++x); // Output: 6
console.log(x++); // Output: 6
console.log(x);   // Output: 7
```

#### Decremento(--)
```js
let y = 5;
console.log(--y); // Output: 4
console.log(y--); // Output: 4
console.log(y);   // Output: 3
```

#### Negación Unaria (-)
```js
let z = 5;
console.log(-z); // Output: -5
```

#### Unario positivo (+)
```js
let str = "123";
console.log(+str); // Output: 123 (como número)
```

#### Exponenciación (**)
```js
let base = 2;
let exponente = 3;
console.log(base ** exponente); // Output: 8
```

### Operadores Lógicos


| Operador       | Uso            | Descripción                                                                                                    |
|----------------|----------------|----------------------------------------------------------------------------------------------------------------|
| &&             | `expr1 && expr2` | Devuelve `expr1` si puede ser convertido a false; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos,`&&` devuelve `true` si ambos operadores son `true`, en caso contrario devuelve `false`                        |
| \|\|           | `expr1 \|\| expr2` | Devuelve `expr1` si puede ser convertido a true; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `\|\|` devuelve `true` si alguno de los operandos es `true`, o `false` si ambos son `false`.                         |
| !expr          | `!expr`          | Devuelve `false` si su operando puede ser convertido a `true`; en caso contrario, devuelve `true`.                |

## Ejemplos

#### AND Lógico (&&)
```js
let a = true;
let b = false;
console.log(a && b); // Output: false

let x = 5;
let y = 10;
console.log(x < 10 && y > 5); // Output: true
```

#### OR Lógico (||)
```js
let c = true;
let d = false;
console.log(c || d); // Output: true

let age = 20;
console.log(age < 18 || age > 65); // Output: false
```

#### NOT Lógico (!)
```js
let e = true;
console.log(!e); // Output: false

let f = 10;
console.log(!(f === 10)); // Output: false
```

### Operadores de comparación

| Operador       | Descripción                                                           |
|----------------|-----------------------------------------------------------------------|
| Igualdad (==)  | Devuelve `true` si ambos operandos son iguales.                        |
| Desigualdad (!=) | Devuelve `true` si los operandos no son iguales.                      |
| Estrictamente iguales (===) | Devuelve `true` si los operandos son iguales y tienen el mismo tipo. |
| Estrictamente desiguales (!==) | Devuelve `true` si los operandos no son iguales y/o no son del mismo tipo. |
| Mayor que (>)  | Devuelve `true` si el operando de la izquierda es mayor que el de la derecha. |
| Mayor o igual que (>=) | Devuelve `true` si el operando de la izquierda es mayor o igual que el de la derecha. |
| Menor que (<)  | Devuelve `true` si el operando de la izquierda es menor que el de la derecha. |
| Menor o igual que (<=) | Devuelve `true` si el operando de la izquierda es menor o igual que el de la derecha. |

## Ejemplos

### Igualdad (==)
```javascript
console.log(3 == var1);      // Output: devolviendo true
console.log("3" == var1);    // Output: devolviendo true
console.log(3 == "3");       // Output: devolviendo true
```
### Desigualdad (!=)
```js
console.log(var1 != 4);      // Output: devolviendo true
console.log(var2 != "3");    // Output: devolviendo true
```

### Estrictamente iguales (===)
```js
console.log(3 === var1);     // Output: devolviendo true
console.log(var1 !== "3");   // Output: devolviendo true
console.log(3 !== "3");      // Output: devolviendo true
```

### Estrictamente desiguales (!==)
```js
console.log(var1 !== "3");   // Output: devolviendo true
console.log(3 !== "3");      // Output: devolviendo true
```

### Mayor que (>)
```js
console.log("12" > 2);       // Output: devolviendo true
```

### Mayor o igual que (>=)
```js
console.log(var2 >= var1);   // Output: devolviendo true
console.log(var1 >= 3);      // Output: devolviendo true
```

### Menor que (<)
```js
console.log("2" < 12);       // Output: devolviendo true
```

### Menor o igual que (<=)
```js
console.log(var1 <= var2);   // Output: devolviendo true
console.log(var2 <= 5);      // Output: devolviendo true
```

## Código en JS

### Control de flujo
- Son instruciones de tipo "`si` se cumple esta `condición`, hazlo; `si no` se cumple,`haz` esto otro"

#### if, if-else
- Es la `estructura de contro más utilizada en JS` y en la mayoria de lengujes.
- Se utiliza para tomar `decisiones` en función de una condición.
- Su definición es:

```js
if(condicion){

}
```
- Si la condición se cumple se ejecutan todas las instruciones entre `{}`
- Si no se cumple la condicion entre `{}`. El programa continua ejecutando el resto del script

#### switch 
- Diseñado para manejar de forma sencilla `multiples condiciones` sobre la misma `variable`.
- Su definición es:
```js
switch(variable){
    case valor_1:...break;
    case valor_2:...break;
    case valor_3:...break;
    default:...break;
}
```

#### while
- Crea un ``bucle`` que ejecuta una sentencia especifica ``mientras`` cierta condición se evalúe como verdadera.
- Dicha condición es evaluada `antes` de ejecutar la sentencia.
- Su definición es:
```js
while(condición){
    Sentencia...
}
```
- Cuando la `condición` se evalúa(desde el primer momento) y el resultado es true, la ejecución continúa con la sentencia.

#### do-while
- Es muy similar al `bucle while`, salvo que en este caso ``siempre se ejecutan las instruciones`` del bucle al menos ``la primera vez``.
- Su definición es:
```js
do {
    Sentencia...
} while(condición)
```
- En este caso la condición se comprueba después de cada repetición.

#### for, for-in.
- Permite realizar bucles de forma sencilla.
- Mientras la `condición indicada` se siga cumpliendo, `repite` la ejecución de las intruciones definidas dentro del `for`.
- Después de cada repetición, actualiza el valor de las variables que se utilizan en la condición.
- Su definicion es:

  for(<span style="color:red;">inicializacion</span>;<span style="color:blue;">condición</span>;<span style="color:yellow;">actualización</span>){
```js
  Instruciones que se repiten...
}
```
#### continue y break
- `continue`: dentro de un buvle, interrumpe la iteración en curso, y hace que se continue con la siguiente.
- ``break``: interrumpe abruptamente la ejecucuón de un bucle, switch o bloque de código.

## Herramientas para texto
### length
- Propiedad que devuelve la longitud de un string.

```js
let texto = "Hola";
console.log(texto.length); // 4
```
### `+` y ``concat()``

- El operador + se usa para concatenar strings.
- El método concat() también se usa para concatenar strings.

```js
let texto1 = "Hola";
let texto2 = "Mundo";
console.log(texto1 + " " + texto2); // "Hola Mundo"
console.log(texto1.concat(" ", texto2)); // "Hola Mundo"
```
### Unión con variables numéricas, espacios, y separación de palabras
- Puedes combinar strings con variables numéricas y otros strings.

```js
let nombre = "Juan";
let edad = 25;
console.log(nombre + " tiene " + edad + " años."); // "Juan tiene 25 años."
```
### ``toUpperCase()`` y ``toLowerCase()``
- toUpperCase() convierte un string a mayúsculas.
- toLowerCase() convierte un string a minúsculas.

```js
let texto = "Hola Mundo";
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log(texto.toLowerCase()); // "hola mundo"
```

### charAt(x)
- Devuelve el carácter en la posición x de un string.

```js
let texto = "Hola";
console.log(texto.charAt(1)); // "o"
```

### ``indexOf(x)`` y ``lastIndexOf(x)``
- indexOf(x) devuelve la primera posición de x en el string.
- lastIndexOf(x) devuelve la última posición de x en el string.

```js
let texto = "Hola Mundo";
console.log(texto.indexOf("o")); // 1
console.log(texto.lastIndexOf("o")); // 9
```

### substring(x, y)
- Devuelve una parte del string desde la posición x hasta la posición y (no incluida).

```js
let texto = "Hola Mundo";
console.log(texto.substring(0, 4)); // "Hola"
```

### split(separador)
- Divide un string en un array de strings utilizando el separador especificado.

```js
let texto = "Hola Mundo";
let palabras = texto.split(" ");
console.log(palabras); // ["Hola", "Mundo"]
```
## Herramientas para arrays

### length
- Devuelve la cantidad de elementos en un array.

```js
const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
```

### concat()
- Combina dos o más arrays, devolviendo un nuevo array.

```js
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
```

### join(separador)
- Convierte los elementos de un array en una cadena, separados por el separador especificado.
```js
const array = ['apple', 'banana', 'orange'];
const joinedString = array.join(', ');
console.log(joinedString); // Output: "apple, banana, orange"
```

### ``pop()`` y ``push()``
- ``pop()`` elimina el último elemento de un array y lo devuelve.
- ``push()`` agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
  
```js
const array = [1, 2, 3];
const removedElement = array.pop();
console.log(removedElement); // Output: 3
array.push(4);
console.log(array); // Output: [1, 2, 4]
```

### ``shift()`` y ``unshift()``
- ``shift()`` elimina el primer elemento de un array y lo devuelve. 
- ``unshift()`` agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

```js
const array = [1, 2, 3];
const removedElement = array.shift();
console.log(removedElement); // Output: 1
array.unshift(0);
console.log(array); // Output: [0, 2, 3]
```

### reverse()
- Invierte el orden de los elementos en un array.
  
```js
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
```

## Herramientas para números

### NaN (not a number)
- NaN es un valor especial en JavaScript que representa "no es un número". 
- Se utiliza para indicar un resultado numérico que no es un número válido, como el resultado de una operación matemática inválida.

```js
var resultado = 10 / "hola";
console.log(resultado); // Mostrará NaN en la consola
```

### isNaN
- isNaN es una función en JavaScript que se utiliza para verificar si un valor no es un número. 
- Retorna true si el valor proporcionado no es un número, de lo contrario retorna false.

```js
var x = "Hola";
var y = 10;

console.log(isNaN(x)); // Mostrará true en la consola
console.log(isNaN(y)); // Mostrará false en la consola
```

### toFixed(digitos)
- toFixed es un método que se utiliza en números en JavaScript para especificar la cantidad de dígitos decimales que deben mostrarse después del punto decimal. 
- Retorna una cadena que representa el número con la cantidad especificada de dígitos decimales.

```js
var num = 10.3456;
var numRedondeado = num.toFixed(2);

console.log(numRedondeado); // Mostrará "10.35" en la consola
```