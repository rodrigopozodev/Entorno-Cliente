## UF3.4: Recursos útiles

- [UF3.4: Recursos útiles](#uf34-recursos-útiles)
- [Intervalos de tiempo](#intervalos-de-tiempo)
  - [Relojes y contadores](#relojes-y-contadores)
- [Calendario](#calendario)
  - [Introducción de fechas](#introducción-de-fechas)
- [Lightbox](#lightbox)

## Intervalos de tiempo
### Relojes y contadores
Para crear y mostrar un reloj con JavaScript, se debe utilizar el objeto interno Date() para crear fechas/horas y las utilidades que permiten definir contadores, para actualizar el reloj cada segundo.

El objeto Date() es una utilidad que proporciona JavaScript para crear fechas y horas. Una vez creado un objeto de tipo fecha, es posible manipularlo para obtener información o realizar cálculos con las fechas.

Para obtener la fecha y hora actuales, creamos un objeto Date() sin pasar ningún parámetro.

```js
var fechaHora = new Date();
document.getElementById("reloj").innerHTML = fechaHora;
```
Esto muestra un reloj estático en nuestra página, en la parte donde tenemos <div id="reloj"></div>
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.4%20Recursos%20útiles/img/1.PNG)

---
Para quedarnos sólo con las horas, minutos y segundos podemos usar los métodos getHours(), getMinutes() y getSeconds()

```js
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();

document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos
```

<u>``¿Qué pasa si son las 12 y 5? ¿Cómo se muestra? ¿Cómo lo arreglas?``

``¿Y si queremos mostrar las horas en formato de 24h?``</u>

---

Para completar el reloj, sólo falta que se actualice su valor cada segundo. Para conseguirlo, se deben utilizar unas funciones especiales de JavaScript que permiten ejecutar determinadas instrucciones cuando ha transcurrido un determinado espacio de tiempo.

La función setTimeout() permite ejecutar una función una vez que haya transcurrido un periodo de tiempo indicado.
```js
setTimeout(nombreFuncion, milisegundos);
```
<u>``Aplica esto a tu código. ¿Funciona como esperabas?``</u>

---
La función anterior nos muestra el contenido del reloj 1 segundo después de que se cargue la página, por lo que no es muy útil. Para ejecutar una función de forma periódica, se utiliza una función de JavaScript muy similar a setTimeout() que se denomina setInterval().

```js
setInterval(nombreFuncion, milisegundos);
```
La definición de esta función es idéntica a la función setTimeout(), pero ahora la función programada se ejecuta infinitas veces de forma periódica con un lapso de tiempo entre ejecuciones de tantos milisegundos como se hayan establecido.
## Calendario
### Introducción de fechas
La inserción de fechas suele ser un problema en formularios, por los diferentes formatos. Los métodos más utilizados son un cuadro de texto en el que se indica al usuario el formato específico que debe seguir, o un cuadro de texto para el día, una lista desplegable para el mes, y otro cuadro de texto para el año.

Para el usuario, lo más cómodo suele ser un calendario en el que pueda pinchar sobre el día que quiera elegir:
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.4%20Recursos%20útiles/img/calendario.PNG)
## Lightbox
