## UF5.1: Fundamentos

- [UF5.1: Fundamentos](#uf51-fundamentos)
- [Introducción](#introducción)
  - [Frameworks cliente](#frameworks-cliente)
- [Sistemas de diseño](#sistemas-de-diseño)
  - [Introducción](#introducción-1)
  - [Encapsulación](#encapsulación)
    - [Definiciones](#definiciones)
  - [Atomic Design](#atomic-design)
    - [Definiciones](#definiciones-1)
    - [Aplicado a React](#aplicado-a-react)
- [JavaScript moderno](#javascript-moderno)
  - [Identificadores](#identificadores)
  - [Arrow functions(funciones flecha)](#arrow-functionsfunciones-flecha)
  - [String literals / templates](#string-literals--templates)
  - [Destructuración](#destructuración)
- [Anatomía de React](#anatomía-de-react)
  - [Reconciliación vs Renderización](#reconciliación-vs-renderización)
  - [Reconciliación](#reconciliación)
  - [Renderización](#renderización)
- [Ecosistema de React](#ecosistema-de-react)
  - [Librerías independientes](#librerías-independientes)
  - [Tipo de estructura](#tipo-de-estructura)

## Introducción
### Frameworks cliente
- ``Conjunto de plantillas`` para crear ciertas características de una aplicación.
  - Se ``crean funciones`` a partir de la ``estructura existente``
- Un ``framework de JS`` es una ``colección de bibliotecas``
- Ejemplos:
  - React.js
  - Vue
  - Ember.js
  - Next.js
  - Angular

## Sistemas de diseño
### Introducción
- Las ``interfaces de usuario`` tienen una ``combinación`` de estos ``tres factores``:
  - ``Estructura``: **relación** entre las **partes de esta interfaz**
  - ``Comportamiento``: cómo operamos con la interfaz
  - ``Apariencia``: estética, usabilidad, la capa de  pintura de la interfaz.
- En una interfaz digital esto se traduce en:
    - ``Layout``: **disposición de los elementos en la interfaz**(dónde se colocan, en qué orden...).
    - ``Lógica``: **código**. Es el que **recoge los inputs**.
    - ``Estilos``: tipo de letra, color, tamaño, espaciados...
---
### Encapsulación
#### Definiciones
Nuestra ``unidad lógica`` es el ``COMPONENTE``.

- ``Estructura Horizontal``.
  
- El ``COMPONENTE`` esta ``dividido en tres partes``:
  - **lógica**
  - **estilos**
  - **layout**

- Nuestra ``página`` va a ser una ``colección de
componentes enlazados entre ellos``, que **cada uno ofrece una funcionalidad**.

- Todo es un componente, y vamos metiendo unos dentro de otros, anidándolos, para poder proyectarlos en pantalla.
   
- Esta estructura es, al final, un árbol, como a la estructura del DOM.
---
### Atomic Design
#### Definiciones
Este concepto lleva un poco más allá esto de encapsular funcionalidades.

Entiende el elemento mínimo con funcionalidad como un átomo, y a partir de ahí, las
combinaciones de elementos van tomando otros nombres

- ``Atomo``: Funcionalidad mínima
- ``Mólecula``: Combinación de átomos que aportan una funcionalidad concreta al usuario
- ``Organismo``: Combinación de moléculas que conforman una sección del documento con un sentido.
- ``Plantilla``:Estructura preparada para ser instanciada en diferentes páginas 
- ``Página``: Plantilla instanciada con información específica.
---
#### Aplicado a React
- ``Componentes``(**componentes presentacionales**):
  - Piezas más esenciales.
  - Gestionan la presentación.
- ``Contenedores``:
  - Agrupación de componentes con más lógica de datos.
  - **Gestionan** el ``estado y la manipulación de los datos``.
- ``Página``:
  - Conjunto de contenedores para dar lugar a una visualización de una pantalla completa. 
  - **Gestionan** las ``rutas``.
---
## JavaScript moderno
### Identificadores
- ``Var``: 
  - **Identificador tradicional**. 
  - área de actuación un poco difusa.
- ``Let``:
  - **Identificador más reciente**.
  - sólo existe dentro del entorno en que se declara, tiene que declararse antes de usarse
- ``Const``:
  - Variables de ``sólo lectura``.
---
### Arrow functions(funciones flecha)
```js
//si la función solo tiene una línea y esa línea es un return, no hacen falta llaves
const double = a => a * 2;

const sum = (a, b) => a + b;

const factorial = a => {
    if (a <= 1){
        return 1;
    }
    return a * factorial (a-1);
}
```
### String literals / templates
```js
const libs = ["React", "Vue", "Angular"];

//los String declarados con acento abierto en lugar de comillas son especiales, son de tipo template.
console.log(`Este tema va sobre ${libs[0]}`);

//esto significa que podemos incluir dentro de él expresiones que se van a evaluar como si estuvieran fuera de un String, y el resultado es lo que se va a incluir.

const l = libs.length;

console.log(`
    ${l > 1 ? `These ${l} libraries` : "This library"}:
    ${libs.join(", ")}...
`);
```
### Destructuración
```js
//DESTRUCTURACIÓN

//recogemos el valor que nos pasan por parámetro y extraerle los atributos que se llaman name y surname(esperando que sea un objeto)
const user = {
    name: "Sara",
    surname: "Villanueva",
    courses: ["Programación", "BBDD", "Despliegue Apps Web", "Entorno Cliente"]
};

const getFullName = ({ name, surname }) => `El usuario se llama ${name} ${surname}.`;
console.log("getFullName: ", getFullName(user));
```
```js
//los tres puntos implican que la variable que va detrás se va a extender (spread) le estamos diciendo que coloque todos los atributos que este objeto posee como si los hubiéramos copiado y pegado
const newUser = {
    ...user,
    name: "Ana"
}
console.log("newUser: ", newUser);
```
```js
//DESTRUCTURACIÓN EN PARÁMETROS

//esta variable tendrá como parámetro un "spread" de nums, que se va a llenar con un array que tiene como elementos todos los parámetros que se le pasen a la función, sean los que sean.

const suma = (...nums) =>
    nums.reduce( (total, num) => total + num, 0);

//reduce es una función de array que los recorre y va acumulando la suma en la variable total.

console.log("suma: ", sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
```
---
## Anatomía de React
### Reconciliación vs Renderización
``Reconciliación``:Prepara los datos.

``Renderización``:Los pinta.

---
### Reconciliación
La ``manera normal`` **que tiene el** ``navegador`` de ``manejar los cambios en el DOM`` es básicamente ``repintar el árbol entero``. 
- Costoso si tenemos árboles muy grandes.

**Por cada evento que pase en el DOM**, **la app** va a ``marcar los nodos`` que sean ``potencialmente modificables`` ``(dirty nodes)``, y se los va a **pasar al virtual DOM**. 

- Éste se encarga de ``localizar los puntos diferentes entre el renderizado anterior y el siguiente (Diffing)``, y **mandárselos al DOM** para que la renderización siguiente contenga esos cambios.
---
### Renderización
- Separa la funcionalidad en dos partes.
  - ``ReactDOM``:
    - adaptador enfocado al DOM (navegadores).
    - Podría sustituirse por otra pieza especializada para otro tipo de dispositivos.
  - ``React``:
    - Lógica
    - Tratamiento de virtualDOM
    - Captura de eventos...

- Otro adaptador por ejemplo sería ``React Native``:
  - React Native:
    - Aprovecha todas las funcionalidades de React.(todas las optimizaciones del Virtual DOM)
    - En vez de aplicarlas a un DOM las mandamos a un puente que las traduce a componentes de SO de dispositivos móviles.
   - ``React``:
     - Lógica
     - Tratamiento de virtualDOM
     - Captura de eventos...
   
- También tendríamos otro ejemplo en ``React VR``:
  - ``React VR``:
    - Siguiendo el mismo sistema, podemos aplicarlo a  sistemas de Realidad Virtual
  - ``React``:
     - Lógica
     - Tratamiento de virtualDOM
     - Captura de eventos...

<u>**El punto de entrada para el desarrollador es único en todos los casos:**</u>
- ``Developer``:(One entry point)
  - Conocer el core de React nos da una herramienta muy potente para poder trabajar en diferentes entornos.

## Ecosistema de React
### Librerías independientes
- ``Redux``:
  - Gestión del estado:
    - Para tratar los datos de forma centralizada.
- ``formik``:
  - formularios
- ``Jest``:
  - Tests.
- ``Parcel``:
  - Empaquetado
- ``React Router``:
  - Router:
    - Para gestionar el routing a través de distintas páginas
- ``React Dom``:
  - Render:
    - Para pintar el resultado de las transformaciones que React produce

### Tipo de estructura
- Estructura modular 
  - Tiene un núcleo, y luego librerías que
podemos añadir a nuestro sistema
- Deja en manos del desarrollador las decisiones de qué
módulos usar
- Similar a la filosofía UNIX

Otros frameworks 
- Filosofía de paquete cerrado
  - Lo ofrecen todo junto, y el desarrollador lo tiene disponible desde el principio(no tiene que decidir qué usar). 
- Similar a la filosofía OSx o Windows