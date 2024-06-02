## UF2.4: Objetos y métodos propios

- [UF2.4: Objetos y métodos propios](#uf24-objetos-y-métodos-propios)
- [Objetos en JS](#objetos-en-js)
  - [Creación](#creación)
  - [Propiedades](#propiedades)
  - [Prueba de propiedad existente: in](#prueba-de-propiedad-existente-in)
  - [Recorriendo propiedades](#recorriendo-propiedades)
  - [Arrays](#arrays)
- [Métodos](#métodos)
  - [Declaración](#declaración)
  - [Métodos de la clase Objetct](#métodos-de-la-clase-objetct)
  - [toString()](#tostring)
  - [Sobreescribir toString()](#sobreescribir-tostring)
- [Clases en JavaScript](#clases-en-javascript)
  - [Definición (recordando)](#definición-recordando)
  - [Constructores y palabra clave this](#constructores-y-palabra-clave-this)


<!-- ## Objetos propios
### Creación
### Propiedades
#### Prueba de propiedad existente: in
#### Recorriendo propiedades
### Arrays
## Métodos
### Declaración
### Métodos de la clase Object
### toString()
### Sobreescribir toString()    
## Clases
### Definición 
### Constructores y palabra clave this -->

## Objetos en JS
### Creación
- En JS tenemos un tipo de dato llamado `objeto`
- Es una variable especial que puede tener varias variables en su interior.
  - Así podemos organizar múltiples variables de la misma temática en el interior de un objeto.
- Se puede declarar como los objetos en java:
```js
const objeto = new Object();
```
- Pero esto no se suele hacer.
- Siempre que es posible, se prefiere usar la notación literal:
```js
const objeto = {};
```
- Con esto se crea un objeto vacío. 
- Para crear un objeto con variables dentro (propiedades) se haría de la siguiente forma:
```js
const player = {
name: "John Cena",
life: 100,
totalLife: 300
};
```
### Propiedades
Una vez tengamos un objeto, podemos acceder a sus propiedades de dos formas diferentes: 
- ``notación con puntos ``
- ``notación con corchetes``
```js
// Notación con puntos (preferida)
console.log(player.name); // Muestra "John Cena"
console.log(player.life); // Muestra 100
// Notación con corchetes
console.log(player["name"]); // Muestra "John Cena"
console.log(player["life"]); // Muestra 100
```
- Hay ``ciertos casos`` en los que ``sólo`` se puede utilizar la ``notación con corchetes``, como por ejemplo cuando se utilizan ``espacios en el nombre`` de la propiedad.

- También podemos añadir propiedades al objeto después de haberlo creado. Por ejemplo:
```js
// FORMA 1: A través de notación con puntos
const player = {};
player.name = "John Cena";
player.life = 100;
player.totalLife = 300;
// FORMA 2: A través de notación con corchetes
const player = {};
player["name"] = "John Cena";
player["life"] = 100;
player["totalLife"] = 300;
```

- Y las podemos borrar:
```js
delete player.power;
```
- También podemos nombrar propiedades con más de una palabra:
```js
const player = {
name: "John Cena",
life: 100,
totalLife: 300,
"is ko": false,
};
alert(player["is ko"]); //false
```

- Con los corchetes también podemos obtener el nombre de la propiedad desde el resultado de una expresión, en vez de una cadena literal. Por ejemplo, a través de una variable:
```js
let key = prompt ("¿Qué te gustaría saber acerca del jugador?", "name");
alert(player2[key]);
```
- Y también las podemos calcular:
```js
let fruta = prompt("¿Qué fruta comprar?", "manzana");
let carro = {
[fruta]: 5, // El nombre de la propiedad se obtiene de la variable fruta
};
alert(carro.manzana ); // 5 si fruta es="manzana"
```

### Prueba de propiedad existente: in
Cuando intentamos acceder a una propiedad de un objeto que no existe, JS no da error, sino que devuelve undefined.

Podemos saber si la propiedad existe o no haciendo una comparación como:
```js
let user = {};
alert( user.noSuchProperty === undefined ); // true, "no existe tal propiedad"
```
Para saber si la propiedad realmente existe, tenemos un operador especial: in
```js
let user = { name: "John", age: 30 };
alert("age" in user); // muestra "true", porque user.age sí existe
alert("blabla" in user); // muestra "false", porque user.blabla no existe
```
El nombre de la propiedad va a la izquierda entre comillas. Si no tiene comillas, significa que es una variable.

- Si el nombre de la propiedad (a la izquierda) no tiene comillas, significa que es una variable:
```js
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, la propiedad "age" sí existe dentro del objeto
```

- Necesitamos este operador porque, aunque la mayoría de las veces comparar con undefined funciona bien, hay un caso en que no: cuando el objeto tiene una propiedad que almacena undefined.
```js
let obj = {
test: undefined
};
alert( obj.test ); // es undefined. ¿Eso es que no existe la propiedad?
alert( "test" in obj ); //es true, ¡La propiedad sí existe!
```

### Recorriendo propiedades
Para recorrer propiedades de un objeto (o posiciones de un array, por ejemplo), usamos el bucle for...in
```js
let user = {
name: "John",
age: 30,
isAdmin: true
};

for (let key in user) {
// claves
alert( key ); // name, age, isAdmin
// valores de las claves
alert( user[key] ); // John, 30, true
}
```

### Arrays
¡Recuerda que los arrays también pueden
contener objetos!
```js
let coches = [
{
"color": "morado",
"tipo": "minivan",
"capacidad": 7
},
{
"color": "rojo",
"tipo": "camioneta",
"capacidad": 5
},
{
//...
},
//...
]

```
Estos arrays se pueden recorrer con varias
estructuras que ya conocemos, y manipular
con métodos similares a los de las
Collections en Java como push() o
pop() (que ya vimos en sesiones anteriores)

## Métodos
### Declaración
Si dentro de una variable del objeto metemos una función (o una variable que contiene una función), entonces tenemos un método de un objeto.
```js
const player2 = {
name: "The Rock",
talk: function() {return "Hola";}
};

player2.name; //propiedad, devuelve "The Rock"
player2.talk(); //función, se ejecuta y devuelve "Hola"
```

### Métodos de la clase Objetct
Al crear una variable de un determinado tipo de dato, la variable será siempre también de tipo Object, ya que todas las variables heredan de Object. 

Por lo tanto, nuestra variable tendrá:
- Los métodos que implementemos nosotros personalmente
- Los métodos heredados de su propio tipo de dato
- Los métodos heredados del tipo Object
```js
const number = 42.5;
number.toString(); // Devuelve "42.5" (Método de variables de tipo Object)
number.toLocaleString(); // Devuelve "42,5" (Método de variables de tipo Object)
number.toFixed(3); // Devuelve "42.500" (Método de variables de tipo Number)
```

### toString()
Como en Java, todos los objetos heredan de la clase Object, así que pueden usar los métodos de esta clase.Uno de esos métodos es toString(). Aunque no lo implementemos de forma explícita, podemos llamarlo para obtener una representación del objeto en una cadena de texto.
```js
const objeto = {};
objeto.toString(); // Devuelve "[object Object]"
// (representación textual de un objeto genérico)
```
También puede usarse con otros tipos de dato 
```js
(number, boolean o regexp)
const number = 42; // Tipo Number
number.toString(); // Devuelve "42"

const booleano = true; // Tipo Boolean
booleano.toString(); // Devuelve "true"

const regexp = /.+/; // Tipo RegExp
regexp.toString(); // Devuelve "/.+/"
```

### Sobreescribir toString()
Como en Java, podemos sobreescribir el método toString() en nuestros objetos para que, cuando lo llamemos, represente el objeto en un String como nosotros queramos.
```js
const player = {
name: "John Cena", //Nombre
life: 300, //vida
power: 100, //potencia del golpe
toString: function(){
return `${this.name}\n-Vida: ${this.life}\n-Potencia de golpe:${this.power}`;
  }
};
console.log("Mi jugador es " + player);
```

## Clases en JavaScript
### Definición (recordando)
Para organizar nuestro código de forma más comprensible podemos crear clases. Tradicionalmente, JavaScript no las soportaba de forma nativa, pero en 2015 se introdujeron para facilitar el trabajo a los equipos de desarrollo.
- La sintaxis es muy parecida a Java
```js
class Animal {
// Propiedades
name = "Garfield";
type = "cat";
// Métodos
hablar() {
return "Odio los lunes."
}
}
```

### Constructores y palabra clave this
Un constructor es un método especial que sirve para crear un objeto de una clase. Para declararlo, en JavaScript se utiliza la palabra constructor.
```js
class Animal {
name; // Propiedad (variable de clase sin valor definido)
constructor(name) {
this.name = name; // Hacemos referencia a la propiedad name del objeto instanciado
}
}
```
Como en Java, la palabra clave this hace referencia al objeto instanciado.

Hay que tener mucho cuidado con this en JavaScript, y asegurarnos de que tiene el valor que creemos que tiene.
- La sintaxis menos restrictiva hace que podamos tener funciones y variables que no están dentro
de objetos.
- Si usamos this fuera de un objeto, nos devolverá una referencia al objeto Window, que es el contexto general donde se ejecutan las clases JavaScript. 
```js
function prueba() {
return this;
}

prueba(); // devuelve this, que en este caso es Window
const object = { prueba } // Metemos la función dentro del objeto
object.prueba() === object; // true (ahora this se refiere al objeto)
```
