El ``fetch API es asíncrono por naturaleza`` y ``no tiene una opción para hacer solicitudes síncronas``. Toda llamada a fetch siempre será asíncrona.

```js
const http = new XMLHttpRequest(); // Crear un nuevo objeto XMLHttpRequest
http.open("GET", "https://ejemplo.com/obtener_datos", true); // Configurar la solicitud

// Definir una función que se ejecutará cuando el estado de la solicitud cambie
http.onreadystatechange = function() {
  // Verificar si la solicitud se ha completado (readyState == 4) y si la respuesta fue exitosa (status == 200)
  if (this.readyState == 4 && this.status == 200) {
    // Procesar la respuesta del servidor si es OK
    const datos = JSON.parse(this.responseText); // Convertir la respuesta a formato JSON
    console.log(datos); // Usar los datos recibidos
  }
};

http.send(); // Enviar la solicitud
```

1. ``const http = new XMLHttpRequest();``: Creas un nuevo objeto XMLHttpRequest que se usará para hacer la solicitud.
   
2. ``http.open("GET", "https://ejemplo.com/obtener_datos", true);``: Configuras la ``solicitud con el método GET ``y la ``URL del servicio web``. El tercer parámetro ``true indica que la solicitud es asíncrona``.
   
3.`` http.onreadystatechange = function() { ... };``: Defines una función que se ejecutará cada vez que cambie el estado de la solicitud. onreadystatechange es un evento que se dispara cuando cambia el readyState del XMLHttpRequest.
   
4. ``if (this.readyState == 4 && this.status == 200)``: Compruebas si la solicitud se ha completado (cuando readyState es 4) y si la respuesta del servidor fue exitosa (cuando status es 200).
   
   - ``this.readyState == 4``: Comprueba si la solicitud ha sido completada. Los posibles valores de readyState son:
        - ``0``: ``UNSENT`` - El objeto XMLHttpRequest ha sido ``creado, pero no se ha llamado al método open``.
        - ``1``: ``OPENED`` - ``open ha sido llamado``.
        - ``2``: ``HEADERS_RECEIVED`` - ``send ha sido llamado, y los encabezados y el estado están disponibles.``
        - ``3``: ``LOADING`` - La ``solicitud está en proceso de recibir el cuerpo de la respuesta``.
        - ``4``: ``DONE`` - ``La operación está completada.   ``
  - Codigos de estado principales:
    
    - ``200 OK``: La solicitud fue exitosa y la respuesta contiene los datos solicitados.
  
    - ``201 Created``: La solicitud fue exitosa y se creó un nuevo recurso.
  
    - ``400 Bad Request``: La solicitud tiene un error de sintaxis o de datos del cliente.
  
    - ``401 Unauthorized``: La solicitud requiere autenticación.
  
    - ``404 Not Found``: El recurso solicitado no se encontró en el servidor.
  
5. ``const datos = JSON.parse(this.responseText);``: Si la solicitud fue exitosa, ``conviertes la respuesta del servidor`` (que es un texto) ``en un objeto JSON utilizando JSON.parse()``.
   
6. ``console.log(datos);``: Procesas los datos recibidos (en este caso, simplemente los ``imprimes en la consola``).
   
7. ``http.send();``: ``Envío la solicitud``.