## UF1.2: Tecnologías y lenguajes en entorno cliente

- [UF1.2: Tecnologías y lenguajes en entorno cliente](#uf12-tecnologías-y-lenguajes-en-entorno-cliente)
- [Arquitectura cliente-servidor](#arquitectura-cliente-servidor)
  - [Definición](#definición)
  - [Proceso:](#proceso)
  - [Características](#características)
  - [Cliente vs Middleware](#cliente-vs-middleware)
- [Lenguajes y tecnologías en entorno cliente](#lenguajes-y-tecnologías-en-entorno-cliente)
  - [Ejecutados en el navegador](#ejecutados-en-el-navegador)
- [Características de los lenguajes](#características-de-los-lenguajes)
  - [Interacción con el servidor](#interacción-con-el-servidor)
  - [JS: orientado a dar soluciones](#js-orientado-a-dar-soluciones)
- [Compatibilidad](#compatibilidad)
  - [Funcionalidades y características](#funcionalidades-y-características)
- [Herramientas de validación](#herramientas-de-validación)
  - [Cross-browser testing](#cross-browser-testing)

## Arquitectura cliente-servidor
### Definición
Es un proceso cooperativo de información en el que los clientes finales obtienen acceso a la información de forma transparente en entornos multiplataforma.
### Proceso:
1. El cliente solicita una información al servidor.
2. El servidor recibe la petición del cliente.
3. El servidor procesa dicha solicitud.
4. El servidor envía el resultado obtenido al cliente.
5. El cliente recibe el resultado y lo procesa.

![Texto alternativo](/UF1%20Arquitecturas%20y%20Herramientas/UF1.2/img/Captura.PNG)
### Características
- El servidor proporciona servicios y el cliente los utiliza.
- Independencia de la plataforma hardware y del software que se emplee.
- Recursos compartidos, ya que muchos clientes utilizan los mismos servidores.
- Sistemas débilmente acoplados e interacción basada en el envío de mensajes.
- Escalabilidad horizontal (añadir clientes) y vertical (ampliar potencia de los
- servidores).
- Encapsulamiento de servicios, ya que la implementación de un servicio es transparente al cliente. Datos y programas centralizados en servidores que facilitan su integridad y mantenimiento.

### Cliente vs Middleware
``Cliente``: proceso que reclama servicios de otro.
- Administra la interfaz e interactúa con el usuario.
- Procesa lógica de la aplicación y hace validaciones locales.
- Genera peticiones de BBDD y recibe/formatea las respuestas del servidor.

``Middleware``: módulo intermedio que actúa como conductor entre sistemas. Su función es:
- independizar servidores y clientes.
- facilitar la relación entre ellos.
- evitar dependencias de tecnología propietaria.
## Lenguajes y tecnologías en entorno cliente
### Ejecutados en el navegador
``HTML``:
- No es compilado, sino interpretado a medida que se avanza en el documento.

``XML``:
- Objetivo: describir datos para su transferencia eficiente (no mostrarlos)

``XHTML``:
- Adaptación de HTML a XML.

``CSS``:
- Objetivo: separar contenido y formato.

``JavaScript(JS)``:
- Scripting (interpretado), orientado a objetos.
- Especificaciones ECMAScript e ISO/IEC 16262

``Applets Java``:
- Programas en Java que forman parte de una web.
- Ejecutados por el navegador con la ``JVM``.

``AJAX``:
- Asynchronous JavaScript And XML.
- Combina XHTML/HTML + CSS, DOM, XMLHttpRequest, y XML.
## Características de los lenguajes
### Interacción con el servidor
Por mucho que programemos el cliente, esto no es un reemplazo del lado del servidor.

- Ciertos lenguajes (JS) no pueden crear ficheros en el servidor por sí mismos, pero sí pueden preparar datos para su envío.
  
- No todos los clientes web ejecutan lenguajes en el lado del servidor (por estar bloqueados o ser incompatibles).
  
- La integración cliente-servidor ha surgido gracias a AJAX y su proceso asíncrono.

### JS: orientado a dar soluciones
Los lenguajes de desarrollo en cliente están orientados a dar soluciones:

- Conseguir que nuestra página web ``reaccione a la interacción del usuario`` con elementos de la misma.
  
- Distribuir pequeños grupos de datos y proporcionar una ``interfaz amigable`` para esos datos en respuesta a interacciones del usuario.
  
- ``Controlar múltiples ventanas`` o marcos de navegación, plugins o applets Java basados en las elecciones que ha hecho el usuario en el documento HTML.
  
- ``Preprocesar datos`` en el cliente antes de enviarlos al servidor.

- Solicitar ficheros del servidor y ``enviar solicitudes de lectura/escritura`` a los lenguajes de servidor.
## Compatibilidad
La página web se muestra de forma muy similar en todos los
navegadores que cumplen los estándares de la W3C.
### Funcionalidades y características
- El script se ejecuta en un espacio seguro de ejecución donde sólo se pueden realizar tareas relacionadas con la web.
- Política de mismo origen: el script de una web no tiene acceso a información enviada desde otra.
- Un script no puede modificar o acceder a algunos elementos de la configuración del navegador.

El motor de ejecución (o intérprete) de JavaScript ejecuta código JS en el
navegador.

- Están implementados por los navegadores web (ej: SpiderMonkey, de Mozilla).
## Herramientas de validación
### Cross-browser testing
Para desarrollar sitios web que se visualizan igual en cualquier navegador hay que
tener en cuenta los siguientes factores:

- ``Navegador web``: la versión del navegador, la configuración...
- ``Sistema Operativo``.
- ``Resolución de pantalla``.