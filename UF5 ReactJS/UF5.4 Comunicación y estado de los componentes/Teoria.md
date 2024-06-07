## UF5.4: Comunicación y estado

- [UF5.4: Comunicación y estado](#uf54-comunicación-y-estado)
- [Propiedades](#propiedades)
  - [Funciones puras](#funciones-puras)
  - [Funciones vs. Clases](#funciones-vs-clases)
  - [Desestructuración](#desestructuración)
- [Gestión del estado](#gestión-del-estado)
  - [Introducción](#introducción)
  - [Hooks: useState](#hooks-usestate)
  - [Hooks: useState. Funcional vs Claseç](#hooks-usestate-funcional-vs-claseç)
  - [Estado delegado](#estado-delegado)
- [Ciclo de vida](#ciclo-de-vida)
  - [General: componentes stateful y stateless](#general-componentes-stateful-y-stateless)
  - [Componentes de clase](#componentes-de-clase)
  - [Componentes funcionales](#componentes-funcionales)

## Propiedades
### Funciones puras
Son aquellas cuyo valor de respuesta depende sólo de los parámetros de entrada (Es decir, que no hay factores adicionales que puedan afectar al valor de retorno).

- Vamos a intentar que nuestros componentes sean lo
más parecidos a una función pura. 
- Es decir, que la vista dependa únicamente de las props de entrada.

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/funciones%20puras%201.PNG)
![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/funciones%20puras%202.PNG)
### Funciones vs. Clases

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/funciones%20vs%20clases.PNG)
### Desestructuración
![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/desestructuracion.PNG)
## Gestión del estado
### Introducción
Si las props condicionan al componente desde fuera, el estado se gestiona de manera exclusivamente interna.

Puede afectar también al renderizado del componente. 

React sólo lanza un render nuevo del componente:
- Cuando cambian las props (pasamos props distintas al componente).
- Cuando cambia el estado, que esto puede ocurrir:
    - Por interacción con el JSX
    - Por lógica interna.

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/intro.PNG)

### Hooks: useState
``UseState``: la forma que React ofrece para controlar el estado de un componente funcional.

``Hooks``: plantean alternativas para funcionalidades que antes sólo estaban disponibles en los componentes de
clase.

Estructura de useState:
- Param 1: variable donde se va a almacenar el contenido del estado
- Param 2: función que establece la variable declarada en el primer parámetro
```jsx
[value, setValue] = useState(defaultValue)
```
### Hooks: useState. Funcional vs Claseç
![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/Captura.PNG)

---
### Estado delegado
A veces nos interesa delegar la gestión del estado al padre del componente.

**React no permite compartir datos de estado entre componentes hermanos**.

- la única forma de ``compartir datos`` mediante
propiedades es ``de padres a hijos``.

- Por tanto, para compartir datos es conveniente
gestionar el estado lo más arriba posible, sin perder la
encapsulación.

    - Podemos gestionar el estado compartido en el padre, que delega ocasionalmente en los hijos mediante props.

    - Los hijos se convierten en componentes presentacionales (eq. a una función pura) Estado delegado.
  
![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/estado%20delegado.PNG)

Los `callbacks`sirven para modificar el estado por parte de los hijos 

Dentro de las props que podemos pasar a los
componentes hijos podemos incluir funciones que ellos
pueden llamar cada vez que quieran cambiar su
estado.

El padre, al recibir esta llamada, modificará el estado
de acuerdo a la información que le pasen los hijos.

Así conseguimos:
- Más componentes presentacionales
- Un estado compartido.

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/estado%20delegado%202.PNG)

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/estado%20delegado%203.PNG)

## Ciclo de vida
### General: componentes stateful y stateless
``Mounted``: montado, inicio del ciclo.

``Unmounted``: desmontado, final del ciclo.

Cosas que pueden pasar:
- Recibe props
- Cambia su estado
### Componentes de clase
``ComponentDidMount()``
- Se lanza después del montado y del primer
renderizado.
- Aquí ponemos lógica de inicialización que
requiere que los elementos ya estén pintados.

``Render()``
- Se ejecutará después de haber recibido nuevas
props y después de un cambio de estado

``ComponentWillUnmount()``

``Component DidUpdate()``

``ShouldComponentUpdate()``
- ¿Vale la pena renderizar?

``GetDerivedStateFromProps()``
- Actualización del estado interno según props

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/componentes%20de%20clase.PNG)

### Componentes funcionales
El hook ``useEffect()``

En esta función que useEffect() recibe como
parámetro meteremos lógica que vamos a ejecutar
como respuesta a diferentes eventos:

- Un componente se puede renderizar incluso cientos de veces
- Habrá lógicas que sólo nos interese ejecutar en un momento concreto (al principio, cuando pase algo específico, antes de destruirlo...)
- Poner una lógica muy pesada para cada vez que se renderiza es, en general, mala idea.

![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/1.PNG)
![autoimport](/UF5%20ReactJS/UF5.4%20Comunicación%20y%20estado%20de%20los%20componentes/img/2.PNG)
