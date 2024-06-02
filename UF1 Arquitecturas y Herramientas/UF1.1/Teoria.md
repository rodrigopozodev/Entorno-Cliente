## UF1.1: Mecanismos de ejecución de código en un navegador

- [UF1.1: Mecanismos de ejecución de código en un navegador](#uf11-mecanismos-de-ejecución-de-código-en-un-navegador)
- [Modelos de programación en entornos cliente-servidor](#modelos-de-programación-en-entornos-cliente-servidor)
  - [Entorno de cliente-servidor](#entorno-de-cliente-servidor)
- [Características de la arquitectura cliente-servidor](#características-de-la-arquitectura-cliente-servidor)
- [Navegadores](#navegadores)
  - [Funciones](#funciones)
  - [Elementos comunes](#elementos-comunes)
- [Desarrollo web](#desarrollo-web)
  - [¿Qué es?](#qué-es)
  - [Modelo de programación](#modelo-de-programación)

## Modelos de programación en entornos cliente-servidor
### Entorno de cliente-servidor
Al ``desarrollar aplicaciones web``, tenemos ``dos elementos``:
- El ``cliente``: solicita la información.
- El ``servidor``: responde a esa solicitud.

Las ``funcionalidades se agrupan en capas``:
- ``Capa de presentación``: la que ve el usuario.
- ``Capa de negocio``: recoge las peticiones del usuario y envía las respuestas
apropiadas. Está tanto en el cliente como en el servidor.
- ``Capa de persistencia``: capa de datos.

Al ``elegir modelo de programación`` hay que ``tener en cuenta``:
- El ``tamaño`` de los ``componentes``.
- La ``naturaleza del servicio ofrecido``
- El ``reparto de funciones`` entre ``cliente y servidor``.

``Tipos de servidores``:
- De ficheros
- De BBDD
- De transacciones
- De aplicaciones web

## Características de la arquitectura cliente-servidor
- ``Protocolos asimétricos``:
  - Solicitudes activas de clientes, respuestas pasivas de servidores.  
- ``Encapsulación de servicios``:
  - Gestión independiente del servidor.
- ``Integridad``:
  - Centralización de código y datos.
- ``Intercambios basados en mensajes``:
  - Procesos débilmente acoplados.
- ``Modularidad y diseño extensible``:
  - Tolerancia a fallos y ajuste de servidores.
- ``Independencia de la plataforma``:
  - Software compatible con diferentes sistemas.
- ``Código reutilizable``:
  - Servicios aplicables en múltiples servidores.
- ``Escalabilidad``:
  - ``Horizontal``: Añadir o eliminar estaciones clientes
  - ``Vertical``: Añadir servidores o mejorar los existentes.
- ``Separación de funcionalidad``:
  - Procesos distribuidos por máquina.
- ``Recursos compartidos``:
  - Acceso gestionado por el servidor.
## Navegadores
### Funciones
El navegador es el software más utilizado de todos los que tenemos disponibles.
- ``Código abierto``: Chrome (Google), Firefox (Mozilla),
- ``Código abierto sólo en parte``: Safari (Apple), Opera (Opera)
- ``Software propietario``: Edge e Internet Explorer (Microsoft)

Función principal
- Solicitar al servidor los recursos elegidos por el usuario y mostrarlos.
    - ``Recursos``: documentos HTML, imágenes y otros archivos
    - Se ``solicitan por su URI`` (Uniform Resource Identifier, id del recurso en la red).
    - Cómo nuestro ``navegador interpreta y muestra los recursos`` es algo que depende de una serie de especificaciones establecidas por el Consorcio W3C (World Wide Web Consortium).

### Elementos comunes
``Interfaz de usuario``:
- Incluye la barra de direcciones, botón de avance/retroceso, menú de marcadores...

``Motor de búsqueda``:
- Coordina la interfaz y el motor de renderización.

``Motor de renderización``:
- Muestra el contenido en la pantalla. De forma predeterminada puede mostrar imágenes y
documentos HTML y XML.

- Los motores más comunes son:
    - Gecko (Firefox, Mozilla Suite y otros)
    - Trident (IExplorer para Windows)
    - WebKit (Chrome, Safari, Opera)
    - Tasman(IExplorer para Mac)

``Módulo de red y comunicaciones``:
- Implementa los protocolos de transferencia de ficheros y documentos (HTTP, FTP)
- Identifica el tipo del recurso obtenido (texto, audio, vídeo...)
- Identifica la codificación de los datos obtenidos

``Servidor de la interfaz``:
- Permite presentar widgets básicos con una interfaz genérica.

``Intérprete de JavaScript``:
- Analiza y ejecuta código JavaScript.
- Dependiendo del navegador puede haber intérpretes de otros lenguajes (applets de Java, AJAX...)

``Parser XML``:
- Carga en memoria una representación en árbol del DOM de la página

``Componente de visualización``:
- Ofrece primitivas de dibujo y posicionamiento en una ventana, widgets predefinidos y fuentes tipográficas (relacionados con la visualización del SO) (estilos de página).

``Persistencia de datos``:
- Almacén de diferentes tipos de datos (historial de navegación, mantenimiento de sesiones de usuario, administración de certificados, cookies...)
## Desarrollo web
### ¿Qué es?
La web:
- Es un ``espacio de información formado por servidores interconectados``.
- ``Creada por Tim Berners-Lee y Robert Cailliau`` como proyecto del CERN en ``1989``.
  - Se autorizó su uso libre y gratuito el 30 de abril de 1993.

La creación y organización del contenido es el aspecto más importante del diseño web. A esto lo llamamos ``arquitectura de la información``.

``El desarrollo web implica trabajar en el`` ``contenido ``(forma y organización), lo ``visual`` (plantillas), lo ``tecnológico`` (elementos interactivos) y la ``distribución`` (velocidad y fiabilidad a la hora de distribuirse en internet) de un sitio web.
### Modelo de programación
Los sitios web hoy en día están basados en el modelo de ``programación cliente-servidor``.

``Lado del servidor`` (server-side):
- Hardware y software del servidor.
- Tecnologías incrustadas (Java, PHP, Perl...).
- Servidores de BBDD.

``Lado del cliente`` (client-side):
- Navegadores
- HTML, CSS, JavaScript, controles ActiveX

``Red``:
- Conectividad