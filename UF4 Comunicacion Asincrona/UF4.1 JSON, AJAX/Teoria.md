## UF4.1: JSON, AJAX

- [UF4.1: JSON, AJAX](#uf41-json-ajax)
- [JSON](#json)
  - [Introducción](#introducción)
  - [Objeto JSON](#objeto-json)
  - [Estructura](#estructura)
  - [Usos prácticos](#usos-prácticos)
- [AJAX](#ajax)
  - [Introducción](#introducción-1)
- [Comunicación síncrona y asíncrona](#comunicación-síncrona-y-asíncrona)
  - [Ejecución síncrona](#ejecución-síncrona)
  - [Ejecución asíncrona](#ejecución-asíncrona)
- [XMLHttpRequest](#xmlhttprequest)
  - [Cómo hacer peticiones asíncronas en JS](#cómo-hacer-peticiones-asíncronas-en-js)
  - [Comentarios](#comentarios)
  - [Fetch WEB API](#fetch-web-api)

## JSON
### Introducción
- ``JSON`` significa ``JavaScript Object Notation``
- Una notación de datos basada en JavaScript que se utiliza comúnmente en el ámbito web y móvil como formato de intercambio de datos entre un cliente y un servidor.
  - Se basa en pares de clave - valor.
  - Los datos se pueden estructurar de forma jerárquica.

Aunque JavaScript está en su nombre, ``JavaScript y JSON`` ``son cosas diferentes``, aunque el uno esté basado en el otro.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.1%20JSON,%20AJAX/img/json.PNG)
### Objeto JSON
Es un objeto estático en JavaScrip

Nos permite trabajar con esta notación de
forma nativa, sin necesidad de librerías externas

Todas las propiedades y métodos del objeto JSON son estáticos
- no podemos instanciarlo
- Tiene dos métodos estáticos:
  - ``parse()``: 
    - Transforma un texto JSON a un objeto JSON dentro de JavaScript. 
    - Este método nos va a devolver un objeto con propiedades que se corresponden justo con la estructura del JSON que hemos transformado.
  - ``stringify()``: 
    - Toma un objeto JavaScript como argumento y lo transforma en un texto JSON (hace la operación contraria a parse() ).

### Estructura
Características:
- ``NaN`` y ``undefined`` ``no son compatibles`` con
JSON.
- Tipos de datos válidos: 
  - boolean 
  - null
  - objeto
  - array
  - number
  - String.
- Empieza y termina con llaves, porque JSON es un objeto JavaScript.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.1%20JSON,%20AJAX/img/json%202.PNG)
### Usos prácticos
Ampliamente utilizado en el contexto web y móvil como formato de intercambio de datos entre un cliente y un servidor. 
- páginas web 
- aplicaciones móviles 
- servicios en la nube
- API de terceras partes que ofrecen sus servicios para integrarse con otras aplicaciones web

Todo en la web se mueve con JSON como notación y formato de datos.
## AJAX
### Introducción
AJAX (Asynchronous JavaScript and XML)

Es una combinación de tecnologías aplicadas al entorno
web, incluyendo HTML, CSS, JavaScript y XML
- Era la notación de datos que se utilizaba antes,
aunque actualmente se utiliza JSON

Con AJAX, una página web puede actualizar su contenido en segundo plano, sin recargar la página ni navegar a diferentes páginas.
- Este es el modelo que utilizan las PWA (Progressive Web Apps) y las SPA (Single Page Apps).
- Este modelo se basa en la programación asíncrona
  - Las operaciones se ejecutan en segundo plano
  - El programa no espera a que se complete la operación actual antes de continuar con la siguiente operación.
## Comunicación síncrona y asíncrona
### Ejecución síncrona
La sincronía en JavaScript se refiere a cómo se ejecutan las operaciones en una aplicación JavaScript.

Cuando se ejecuta una operación de manera sincrónica, el programa espera hasta que la operación actual se complete antes de continuar con la siguiente operación.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.1%20JSON,%20AJAX/img/sincronia.PNG)
### Ejecución asíncrona
Permite ejecutar operaciones sin bloquear el hilo principal de la aplicación.

El programa no espera a que se complete la operación actual

El cliente delega en AJAX la gestión de la respuesta del servidor, cosa que se realiza en segundo plano.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.1%20JSON,%20AJAX/img/asincronia.PNG)

## XMLHttpRequest
### Cómo hacer peticiones asíncronas en JS
Para trabajar con asincronía se utiliza el
objeto XMLHttpRequest de JS  
-  Este objeto ``realiza solicitudes HTTP o HTTPS`` desde un navegador web a un servidor web.

-  Permite obtener datos de un servidor y ``actualizar una página web sin tener que cargarla completamente``.

![Texto alternativo](/UF4%20Comunicacion%20Asincrona/UF4.1%20JSON,%20AJAX/img/àjax.PNG)

### Comentarios
1) Primero ``creamos el objeto``.
   
2) Luego ``abrimos la conexión`` enviando una petición.
   - Esta petición es de tipo GET, y va hacia la URL indicada. El tercer parámetro es el que indica que la petición es asíncrona (si es true, que es su valor por defecto).

3) ``Establecemos el evento que queremos monitorizar``, que es el evento que registra cuando la petición ha sido completada: ``onreadystatechange``
   - Cuando ``readyState es 4``, es que la ``solicitud`` se ha ``completad``o.
   - Cuando el ``código de estado (status) es 200``, la ``solicitud`` se ha ``completado correctamente``.
  
4) Por último, ``enviamos la petición``.

### Fetch WEB API
``XMLHttpRequest está cayendo en desuso`` en favor de ``Fetch WEB API, que es más nuevo y flexible. ``

``XMLHttpRequest`` sirve para:
- ``Obtener datos del servidor`` 
  - (de usuario, de producto... que se pueden utilizar para recargar la información de la página sin recargar la página completa).
- ``Enviar datos al servidor`` 
  - (para envío de formularios, comentarios...)
- ``Integrar APIs de terceros`` 
  - (para obtener los datos en tiempo real desde esos servicios)
- ``Carga y descarga de archivos``
- ``Validación de formularios`` 
  - (para comprobar la disponibilidad del nombre de usuario, por ejemplo)

