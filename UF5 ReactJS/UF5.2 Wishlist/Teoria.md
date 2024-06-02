## UF5.2: App desde 0 - Wishlist

- [UF5.2: App desde 0 - Wishlist](#uf52-app-desde-0---wishlist)
- [Dependencias](#dependencias)
  - [Estructura](#estructura)
  - [Pasos](#pasos)
- [Empaquetado (Bundling)](#empaquetado-bundling)
  - [Introducción](#introducción)
  - [parcel](#parcel)
  - [Scripts](#scripts)
  - [Flujo de empaquetado](#flujo-de-empaquetado)
  - [Empezamos con React](#empezamos-con-react)
- [Estilo de código](#estilo-de-código)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Linting](#linting)
    - [Etapas de linting](#etapas-de-linting)
    - [Lint-staged y Husky](#lint-staged-y-husky)
  - [Formato](#formato)
    - [Lint-staged y Husky](#lint-staged-y-husky-1)

## Dependencias
### Estructura
Cualquier aplicación tiene esta estructura:
- ``Entorno``
    - base sobre la que se ejecuta todo nuestro código.
- ``Código de nuestra aplicación``
  - Contiene la lógica de negocio que queremos ofrecer.
- ``Dependencias``
  - Aportan funcionalidad de carácter general (librerías).
- ``Gestor de dependencias``

### Pasos
1. Instalamos NodeJS  
2. Comprobamos la versión de NPM (``npm -v``)
3. Creamos un nuevo directorio y entramos en él(`mkdir wishlist && cd whislist`)
4. Empezamos un nuevo proyecto(``npm init``)

---
## Empaquetado (Bundling)
### Introducción
El bundling es cómo podemos empaquetar este proyecto para poder ejecutar todo el código en el navegador.
### parcel
Alternativa que surgió basada en la tendencia **zero-config**, defendiendo la capacidad de trabajar con los valores por defecto para lo más utilizado en el día a día
- **save-dev**: lo estamos guardando como dependencia necesaria para el desarrollo, no como dependencia final
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/parcel.PNG)
### Scripts
Sirven para realizar tareas en nuestro flujo de desarrollo que vamos a repetir muchas veces, y nos interesa definirlas una sola vez.

Por ejemplo ``start``. Su misión es:
- lanzar parcel, atacar a index.html, y procesar lo que haya hasta que tenga algo apropiado para el navegador.
![Texto alternativo](/UF5%20ReactJS/UF5.2%20Wishlist/img/Start.PNG)
### Flujo de empaquetado
Es un proceso a partir de un mismo punto de entrada, parcel:
1. recoge todas las relaciones que necesita nuestra app,
2. las empaqueta, y
3. las envía a una carpeta **dist/**

De ahí es de donde el navegador coge lo que muestra.
### Empezamos con React
![Texto alternativo](/UF5%20ReactJS/UF5.2%20Wishlist/img/ReactDOM.PNG)


## Estilo de código
### Estructura de carpetas
Vamos a partir de nuestra carpeta base, la carpeta del proyecto.
- Lo más normal es que en esta carpeta esté el package.json como punto de referencia, que es el que nos marca el punto de entrada de nuestra app
- En el raíz están los ficheros de configuración extra, si necesitamos.
- Después tenemos una división en dos carpetas,
    - **src**, que es el código que escribimos nosotros
    - **dist**, es el espejo de este source, el resultado de la compilación y lo que va a ver el navegador. No lo vamos a ver desde el desarrollo.
    - puede estar la carpeta de dependencias, **node-modules**.
![Texto alternativo](/UF5%20ReactJS/UF5.2%20Wishlist/img/Estructura%20de%20carpetas.PNG)
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/Tipos%20de%20estructura%20de%20carpetas.PNG)
### Linting
Revisa el código que hemos implementado y nos avisa en caso de que existan fallos que pueden desencadenar
errores en ejecución o simplemente errores de estructura (aparecen como warnings o info).

La pieza que se encarga de esto, y dado que estamos hablando de JS, es ESLINT
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/Linting%20%201º.PNG)
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/Linting%20%202º.PNG)
#### Etapas de linting
- ``Desarrollo``: editor (VSCode), que es la manera
más inmediata de darnos cuenta de los problemas
- ``Integración``: en el commit (Husky), podemos
configurar que se lance el linting antes de subir al repositorio.
- ``Despliegue``: con Jenkins (servidor de automatización que se encarga de distintos aspectos del despliegue para facilitar integración continua y entrega continua, o CI/CD)
#### Lint-staged y Husky
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/lint.PNG)
### Formato
Herramientas que garantizan uniformidad en el formato
del código (número de tabulaciones por ej), y que se
ejecutan en el guardado.
- ``Prettier``
- ``editorconfig``
#### Lint-staged y Husky
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/prettier.PNG)
![alt text](/UF5%20ReactJS/UF5.2%20Wishlist/img/prettier%202.PNG)


