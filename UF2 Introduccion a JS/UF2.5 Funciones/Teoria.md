## UF2.5: Funciones

- [UF2.5: Funciones](#uf25-funciones)
- [Introducción](#introducción)
- [Funciones anónimas](#funciones-anónimas)
- [Funciones flecha](#funciones-flecha)
- [Funciones recursivas](#funciones-recursivas)

<!-- ## Introducción
## Funciones anónimas
## Funciones flecha
## Funciones recursivas -->

## Introducción
Como ya sabéis, una función es un trozo de código que se dedica a ejecutar una tarea, y que puede ser llamado por código externo.
- En JavaScript las funciones son objetos (de tipo Function): se pueden manipular y tienen propiedades, como cualquier objeto.
- 
Sus componentes son:
- Nombre (que se puede omitir)
- Parámetros (hasta 255)
- Instrucciones (entre {} )
```js
/* Declarando la función 'myFunc' */
function myFunc(elobjeto) {
elobjeto.marca = "Toyota";
}

/* Declarando la variable 'mycar' */
var mycar = {
marca: "Honda",
modelo: "Accord",
año: 1998,
};

window.alert(mycar.marca);/* Mostrando 'Honda' */
myFunc(mycar);/* Paso objeto 'mycar' a la función */
window.alert(mycar.marca);/* Muestra 'Toyota' */

```

## Funciones anónimas
Igual que las anteriores, pero no tienen nombre.

Se pueden asociar a una variable (por tanto, el nombre de la función es el nombre de la variable)
```js
* Función anónima */
var sayHello = function (name = 'world'){
return `Hello ${name}`;
}

console.log (sayHello());
/* Hello world */

console.log(sayHello('Sara'));
/* Hello Sara */

```

## Funciones flecha
- Tampoco tienen nombre.

- Tienen una sintaxis muy reducida.

- Pueden tener body (es decir, código entre llaves) o no tenerlo.

- Podemos usar this (el objeto global de nuestra app) desde dentro de ellas.
```js
/* Función flecha sin body*/
var sayHello = (name = 'world') => `Hello ${name}`;

/* Función flecha con body */
var sayBye = (name) => {
return "Bye "+name;
}

console.log (sayHello());
/* Hello world */

console.log(sayBye('Sara'));
/* Bye Sara */

```

## Funciones recursivas
Una función recursiva es una función que se llama a sí misma.

- La hemos visto en el pasado (para
hacer por ejemplo un factorial).

- El requisito principal de una función
recursiva es que tenga bien clara la
condición de parada (para evitar
recursión infinita).

Esto nos puede venir bien para
situaciones en las que queramos
recorrer, por ejemplo, un árbol de
nodos.

```js
* Función que recorre un árbol de nodos */
function recorrerArbol(nodo) {
//si hemos llegado al final, paramos
if (nodo == null){
return;
}

//si no, hacemos algo con el nodo
//(en este caso imprimimos nombre y contenido)
console.log("- "+ nodo.nodeName + ": "+(nodo.innerText||""));

//obtenemos los hijos de ese nodo
let nodosHijos = nodo.childNodes;

//por cada hijo, llamamos a esta misma función de nuevo
for (var i = 0; i < nodosHijos.length; i++) {
recorrerArbol(nodosHijos[i]);
  }
}

//hacemos la primera llamada
recorrerArbol(document.getRootNode());
```