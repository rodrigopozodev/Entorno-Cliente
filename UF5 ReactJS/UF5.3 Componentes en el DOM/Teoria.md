## UF5.3: Componentes en el DOM

- [UF5.3: Componentes en el DOM](#uf53-componentes-en-el-dom)
- [Componentes](#componentes)
  - [Declaración funcional](#declaración-funcional)
  - [Declaración mediante clases](#declaración-mediante-clases)
- [JSX](#jsx)
  - [Definición](#definición)
  - [Expresiones](#expresiones)
  - [Fragmentos: \<React.Fragment\>, \<\>](#fragmentos-reactfragment-)
- [Estilizado](#estilizado)
  - [CSS](#css)
  - [Encapsulación](#encapsulación)
    - [Encapsulación. Ejemplo](#encapsulación-ejemplo)
- [Renderizado dinámico](#renderizado-dinámico)
  - [Condicionales](#condicionales)
  - [Switch](#switch)
  - [Bucles](#bucles)

## Componentes
### Declaración funcional
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/declaracion%20funcional.PNG)
### Declaración mediante clases
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/declaracion%20mediante%20clases.PNG)
## JSX
### Definición
- Es una extensión de JavaScript (JavaScript XML) 
- Se pensó para generar vistas dinámicas de manera más sencilla. 
- Se parece mucho a HTML, pero no lo es:
    - class (HTML) -> className (JSX)
    - Nomenclatura camelCase: tabindex -> tabIndex;onclick -> onClick...
    - Estrictamente obligatorio cerrar los elementos.
    - Para incluir expresiones externas se usan llaves.

![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/jsx%20=%20html.PNG)

---
### Expresiones

![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/Expresiones%201.PNG)
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/Expresiones%202.PNG)
### Fragmentos: <React.Fragment>, <>
- Un fragmento es un componente JSX que nunca se va a convertir en un HTML. 
  - Útil cuando tenemos que englobar varios elementos JSX

- Todo componente JSX debe devolver siempre un elemento.
  -  Puede ser una entidad que contenga otras, pero tiene que devolver un solo elemento.
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/React%20fragment.PNG)


## Estilizado
### CSS
La única peculiaridad es que las clases, en lugar de incluirse en el documento con class, en JSX se utiliza classname.
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/css.PNG)
### Encapsulación
Aunque lo incluyamos en un componente, así lo estamos incluyendo en el global del documento.

Para solucionar esto hay varias estrategias, como BEM: Block Element Modificator. Esta estrategia se basa en la nomenclatura de las clases, de la siguiente forma:

![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/encapsulacion.PNG)

Con esto sólo tenemos que preocuparnos de que los nombres de los bloques sean diferentes.
#### Encapsulación. Ejemplo
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/encapsulacion%202.PNG)

## Renderizado dinámico
### Condicionales
Si un componente es una función, dentro de este componente podemos meter cualquier estructura que queramos (por ejemplo, un condicional).
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/renderizado%20dinamico.PNG)
### Switch
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/switch.PNG)
### Bucles
Herramientas interesantes:
- ``.map()``: recorre el array sobre el que lo llamamos, pero modificando los elementos que contiene.
  - Modificación: depende de la función que se le pase como primer parámetro a map.
  - Podemos cambiar elementos JS (datos) a elementos JSX (vistas).
- ``.filter()``: selecciona elementos que cumplen una condición.

**Vamos a crear una lista con elementos de un array**.
- Cada elemento tiene que tener su clave (key) única, para que
React identifique qué partes hay que actualizar.
- Se recomienda que esta clave no sea el índice del array, sino que sea representativa del objeto.
![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/bucles%201.PNG)  ![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/bucles%202.PNG)

Vamos a combinar renderizado condicional con
renderizado iterativo haciendo una lista de los
platos vegetarianos.

![alt text](/UF5%20ReactJS/UF5.3%20Componentes%20en%20el%20DOM/img/bucles%203.PNG)