## ¿Cuáles son los métodos que podemos usar para trabajar con JSON en JavaScript? <u>(``Para transformar un texto JSON a un objeto JS y viceversa``)</u>

- [ ] convertTo(JSON) 
- [ ] JSONify() 
- [x] stringify() 
- [x] parse() 
- [ ] convertTo(String) 

## ¿Cuál es la diferencia entre una ejecución síncrona y una asíncrona?

La síncrona hace una petición al servidor y espera hasta que recibe la respuesta, y la asíncrona hace la petición al servidor y sigue ejecutando sus cosas (no espera)

## ¿Qué objeto se utiliza para hacer peticiones asíncronas en JavaScript?

- [ ] HTTPAsyncConnection 
- [ ] AsyncRequest 
- [ ] ConnectAsync 
- [x] XMLHttpRequest 

## ¿Qué hace este código?
```js
$(".iconized li").each(function(index) {
    console.log("-"+index+": "+$(this).text());
    if (index%2 == 0) {
        $(this).css("color", "pink");
    }
});
/*$(".iconized li"): Esto selecciona todos los elementos <li> que están dentro de un elemento con la clase "iconized". En resumen, selecciona todos los elementos de lista que tienen esa clase.

.each(function(index) { ... }): Este método each() itera sobre cada uno de los elementos seleccionados y ejecuta una función para cada uno. La función recibe dos argumentos, el índice del elemento en la selección y el propio elemento.

console.log("-"+index+": "+$(this).text());: Aquí estamos imprimiendo por consola información sobre cada elemento. Concatenamos el índice del elemento con un guion y lo precedemos con el carácter "-", luego lo concatenamos con el texto del elemento usando $(this).text(). Esto imprimirá en la consola algo como "-0: Contenido del primer elemento", "-1: Contenido del segundo elemento", etc., mostrando el índice de cada elemento y su contenido.

if (index%2 == 0) { $(this).css("color", "pink"); }: Aquí se verifica si el índice del elemento es par (es decir, si index dividido por 2 tiene residuo 0). Si es par, cambia el color del texto del elemento actual ($(this)) a rosa utilizando $(this).css("color", "pink").

En resumen, el código itera sobre cada elemento de lista con la clase "iconized", imprime su índice y su texto por consola, y si el índice es par, cambia el color del texto del elemento a rosa.*/
```
- [x] Imprime por consola tantos números como iconos haya en la lista, y luego colorea de rosa sólo los iconos pares 
- [ ] Imprime por consola tantos números como elementos haya en la lista, y luego los colorea de rosa 
- [ ] Imprime por consola el contenido de los elementos de una lista, y luego colorea el texto de los elementos pares de rosa 
- [ ] Este código da un error al ejecutarlo. 

## ¿Qué sentencia equivale a colorear ``los elementos pares`` de una lista de color rosa?

- [x]  $(".iconized li:even").css("color", "pink"); 
- [ ]  $(".iconized li:even").hide(); 
- [ ]  $(".iconized li:nth-child(2)").css("color", "pink"); 
- [ ]  $(".iconized li:first").css("color", "pink"); 

## ¿Qué hace el siguiente código?

```js
$("button").toggleClass("btn btn-error");​
```
- [ ]  Añade las clases "btn" y "btn-error" a todos los botones del documento HTML. 
- [x]  Comprueba cada botón. Si tiene las clases "btn" y "btn-error", se las quita, y si no las tiene se las añade. 
- [ ]  El método no hace nada porque no existe 
- [ ]  Quita las clases "btn" y "btn-error" de todos los botones del documento HTML. 

## ¿Qué diferencia hay entre un atributo y una propiedad en jQuery?

- [x] Un atributo está siempre en el HTML y tiene el valor que tiene en el HTML. Una propiedad no siempre está en el HTML, y tiene el último valor que se le ha asignado por código. 
- [ ] jQuery no tiene atributos, sólo tiene propiedades. 
- [ ] Un atributo se puede acceder por código y una propiedad no. 
- [ ] No hay diferencia, son sinónimos. 

## ¿Qué hace este código?

```js
$(".users").on('click', function (event) {
    $("ul.lista_usuarios").empty();
}

/*$(".users"): Selecciona todos los elementos con la clase "users".

.on('click', function (event) { ... }): Asigna un evento de clic a todos los elementos seleccionados.

$("ul.lista_usuarios").empty();: Cuando se hace clic en cualquier elemento con la clase "users", se busca la lista con la clase "lista_usuarios" ($("ul.lista_usuarios")) y se vacía su contenido utilizando el método .empty(). Esto significa que todos los elementos hijos de la lista se eliminan, dejándola vacía.*/
```
- [ ] Crea una lista de usuarios cuando hacemos click en el elemento "users" 
- [ ] Borra el elemento con la clase "users" cuando hacemos click en el elemento con la clase "lista_usuarios" 
- [ ] Hace una llamada asíncrona a un servidor y cuando recibe la respuesta vacía la lista de usuarios 
- [x] Vacía el contenido de la lista con la clase "lista_usuarios" cuando hacemos click en el elemento con la clase "users" 

## Dado este código: 
```js
$("#especial img").click(function (event) {
    if ($(this).attr("src") == "./img/especial.png") {
        $("#picture img").css({
            height: "+=20px",
            width: "+=20px"
        });
    } else {
        $("#picture img").css({
            height: "-=20px",
            width: "-=20px"
        });
    }
});
```

¿De qué forma hemos asociado el elemento con el manejador del evento "click"?

- [ ] Asociación delegada 
- [x] Asociación directa

## ¿Qué hace el código de la pregunta anterior?
El código aumenta el tamaño de una imagen en el elemento con id "picture" si se hace clic en una imagen específica con la ruta "./img/especial.png" dentro del elemento con id "especial"; de lo contrario, reduce el tamaño de la imagen en "picture".

## Asocia estos conceptos de Atomic Design a su implementación con React:

- Organismo: ``Componente contenedor`` 

- Molécula: ``Componente contenedor``

- Página: ``Página``

- Átomo: ``Componente final`` 

## ¿Qué es el bundling?

- [x] Empaquetado del proyecto para poder mostrarlo en el navegador 
- [ ] Revisión del código y aviso en caso de fallos 
- [ ] Conversión de una app web de diseño tradicional (estilos, estructuras, lógica) a atomic design (componentes encapsulados) 
- [ ] Framework que proporciona un sistema de vinculación de datos reactiva 

## Marca todas las etapas del ciclo de vida de una aplicación web en las que se pueda ejecutar linting:

- [x] Desarrollo 
- [x] Integración 
- [x] Despliegue 
- [ ] Distribución 
- [ ] Planificación 
- [ ] Devolución 

## Hay dos formas de declarar un componente en React:
- como una ``función`` (la más actual)
- como una ``clase``.

## Dado este componente:
```js
const meals = [
        {name: 'Ensalada', veggie: true},
        {name: 'Hamburgesa', veggie: false},
        {name: 'Falafel', veggie: true},
        {name: 'Caldereta', veggie: false}
    ];

        const MealsList = () => (
        <h2>Lista de comidas</h2>
        <ul>
            {   
                meals.map(
                    ({name, veggie}) => veggie? null: <li key=  {name}> {name}</li>
                )
            }
        </ul>
    );
```
### ¿Qué tipo de componente es MealsList?
- [x] Componente stateless / sin estado 
- [ ] Componente stateful / con estado 

### Si incluyéramos
```js
<MealsList></MealsList>
```
En nuestra app React, ¿qué veríamos por pantalla?

- [x] Sólo los platos con carne 
- [ ] Sólo los platos vegetarianos 
- [ ] Todos los platos 
- [ ] Una lista con cuatro elementos con el texto "null" 

## La verdad es que la pregunta anterior es un poco trampa: no se vería nada porque hay un error en el código.

### ¿Qué error es?
- El error en el código es que el componente MealsList no envuelve sus elementos JSX en un contenedor único, lo que causa un error de sintaxis. 
### ¿Cómo lo arreglarías?
- Esto se puede solucionar envolviendo los elementos JSX en un elemento, por ejemplo, un div.

## Dado el siguiente código:

```js
const NotaDelAlumno = ({nota}) =>
    (nota == 10 && <span>Sobresaliente</span>) ||
    (nota < 10 && nota >=8 && <span>Notable</span>) ||
    (nota < 8 && nota >=6 && <span>Bien</span>) ||
    (nota<6 && nota >=5 && <span>Suficiente</span>) ||
    <span>Suspenso</span>;
```

### ¿Qué estructura podríamos utilizar, en lugar de los operadores && y ||, para obtener el mismo resultado?
- switch 

### Si queremos incluir este componente en nuestra aplicación React, para ver la nota en texto de alguien que ha sacado, por ejemplo, un 8.5, ¿qué código escribirías en tu JSX?

```js
<NotaDelAlumno nota={8.5}></NotaDelAlumno> 
```
## Marca todos los métodos que puedan ser parte del ciclo de vida de un componente de React


- [x] componentDidMount() 
- [x] render() 
- [x] componentWillUnmount() 
- [x] componentDidUpdate() 
- [x] shouldComponentUpdate() 
- [x] getDerivedStateFromProps() 

## ¿Para qué sirve el método filter()?


- [x] Para filtrar el contenido de un array de acuerdo a una condición 
- [ ] Para filtrar los componentes React antes de renderizarlos 
- [ ] Para filtrar los paquetes que usamos en una aplicación React antes de mostrarla 
- [ ] Para filtrar el código y descartar las líneas redundantes. 