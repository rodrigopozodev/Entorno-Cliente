## UF3.1: Manejo de ventanas

- [UF3.1: Manejo de ventanas](#uf31-manejo-de-ventanas)
- [Cómo manejar ventanas](#cómo-manejar-ventanas)
  - [Introducción](#introducción)
- [Interacción con el usuario](#interacción-con-el-usuario)
  - [Diálogo modal](#diálogo-modal)
  - [Pop-up o ventana emergente](#pop-up-o-ventana-emergente)
  - [Pop-over o Tooltip](#pop-over-o-tooltip)
  - [Lightbox](#lightbox)
- [Bootstrap](#bootstrap)
  - [Definición y ventajas](#definición-y-ventajas)
  - [Ventanas modales con Bootstrap](#ventanas-modales-con-bootstrap)
  - [Popups](#popups)
- [Ejemlos Popups y ventanas modales](#ejemlos-popups-y-ventanas-modales)


## Cómo manejar ventanas
### Introducción
Gracias al BOM (Browser Object Model)
podemos controlar la apertura de nuevas
ventanas, el tamaño, la posición...

Una de las propiedades del BOM es el objeto
``window``, que es el que nos va a servir para
trabajar con ventanas y pestañas nuevas.

Para esto usaremos los métodos:
- ``open()``
- ``close()``
- ``moveTo()``
- ``resizeTo()``

```js
function abrir() {
  miTab = window.open(" ", " ", " ");
  miTab.document.write("Esta es una ventana nueva");
}

function cerrar() {
  miTab.close();
}

function mover() {
  miVentana.moveTo(200, 300);
  miVentana.focus();
}

function size() {
  miVentana.resizeTo(600, 600);
  miVentana.focus();
}

```
## Interacción con el usuario
### Diálogo modal
También llamados ventanas modales o cuadros de diálogo,
son cuadros que aparecen sobre la página, bloqueando
todas las funciones para concentrar el foco en un área
específica que, habitualmente, requiere que el usuario
realice una acción.

Se activan ``cuando el usuario hace clic en algún texto o
presiona un botón``, y facilitan a los usuarios algunas acciones
(permitiendo que las hagan sin salir de la página).

![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/Dialogo%20modal.PNG)
### Pop-up o ventana emergente
Este tipo de ventanas se abren de forma automática,
sin que el usuario interactúe haciendo clic en la
interfaz. Pueden aparecer al cargar la página,
después de un periodo de tiempo o cuando se sitúa
el puntero en un punto determinado.

Al interrumpir la navegación, se utiliza para hacer
publicidad intrusiva, por lo que muchos navegadores
las bloquean.

También pueden ser utilizadas por los propios
sistemas operativos para presentar ciertos mensajes o
errores.

![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/ventana%20emergente.PNG)
### Pop-over o Tooltip
Son pequeños recuadros de información que
aparecen al posicionar el ratón sobre un elemento.

Son utilizados de forma general para ofrecer
información adicional sobre el elemento
seleccionado o para mostrar al usuario pequeños
mensajes de ayuda. También se les llama hovercard.

Pueden llevar sólo texto, o incluir un enlace a otra
página del sitio.

![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/pop-over.PNG)
### Lightbox
Son un tipo de ventanas modales que muestran
poca información en primer plano y oscurecen el
fondo que queda detrás, sin ningún tipo de acción o
enlaces.

Se pueden usar para mostrar imágenes en tamaño
completo, navegar una galería o ver un vídeo, sin
necesidad de cargar una página adicional.

Es un tipo de ventana muy usado, por ejemplo, en los
bancos de imágenes como Shutterstock

![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/lightbox.PNG)
## Bootstrap
### Definición y ventajas
Es un framework opensource desarrollado y liberado por Twitter que tiene como
objetivo facilitar el diseño web para que se ajuste a cualquier dispositivo y tamaño de pantalla..

Ventajas:

- Permite simplificar el proceso de maquetación, ya que puedes tener una web bien organizada de
forma visual rápidamente, y la curva de aprendizaje hace que su manejo sea asequible y rápido, si
ya sabes maquetar. Para ello, utiliza un grid system muy sencillo de configurar.

- Permite utilizar muchos elementos web, desde iconos, desplegables y demás elementos
combinando HTML5, CSS y Javascript, con quien se integra perfectamente junto a las principales
librerías JS. Además, permite usar Less para enriquecer aún más los estilos de la web.

- Cuenta con implementaciones externas para WordPress, Drupal y un largo etcétera.
### Ventanas modales con Bootstrap
Primero se obtienen las librerías que vamos a utilizar, que son jQuery y Bootstrap, tanto en la parte de JS como en
la de CSS (BootStrap posee un CSS propio mediante el cual tendremos mucho desarrollo preparado para
implementar directamente).
```js
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">

</script>
```

Después de cargar las librerías, tenemos que crear el código HTML de la ventana modal en sí.
```js
<div class="modal fade" id="miModal" tabindex="-1" role="dialog" arialabelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" arialabel="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Esto es un modal</h4>
      </div>
      <div class="modal-body">Texto del modal</div>
    </div>
  </div>
</div>
```

Para esto creamos un modal que estará oculto por defecto, y tenemos que decidir cuándo se mostrará. Por
ejemplo, podemos usar un botón de los que vienen predeterminados en la librería de Bootstrap.
```js
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal"

datatarget="#miModal">Abrir modal</button>
```
### Popups
Parámetros de open():
- URL de la nueva ventana
  
- Descripción de la nueva
ventana

- Propiedades: atributos que
describen cómo aparecerá
la nueva ventana

  - toolbar[=yes|no]: barra de herramientas.
  - statusbar[=yes|no]: barra de estado.
  - titlebar[=yes|no]: barra de título.
  - menubar[=yes|no]: barra de menús.
  - scrollbars[=yes|no]: barras de desplazamiento.
  - resizable[=yes|no]: si es redimensionable (Sólo IExplorer).
  - width=pixels: ancho de la ventana en píxels.
  - height=pixels: alto de la ventana en píxels.
  - top=pixels: distancia desde el borde superior de la pantalla al
borde superior de la ventana en píxels.
  - left=pixels: distancia en píxels desde el borde izquierdo de la
pantalla al borde izquierdo de la ventana.

## Ejemlos Popups y ventanas modales
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/ejemplo%201.PNG)
![Texto alternativo](/UF3%20Interaccion%20con%20el%20usuario/UF3.1%20Manejo%20de%20ventanas/img/ejemplo%202.PNG)