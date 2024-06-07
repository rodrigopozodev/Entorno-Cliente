document.addEventListener("DOMContentLoaded", function() {
    var btnSubirArriba = document.getElementById("btnSubirArriba");

    // Agregar evento click al botón
    btnSubirArriba.addEventListener("click", function() {
        scrollToTop(1000); // Duración del desplazamiento en milisegundos (1000ms = 1s)
    });

    // Función para desplazarse suavemente al principio de la página
    function scrollToTop(duration) {
        // Obtener la posición actual del scroll
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        // Calcular la posición de desplazamiento
        var destination = 0;

        // Calcular la distancia total a desplazarse
        var distance = destination - start;

        // Función de animación
        function scrollAnimation(currentTime) {
            // Calcular el tiempo transcurrido
            var timeElapsed = currentTime - startTime;

            // Calcular el nuevo valor de desplazamiento en función del tiempo transcurrido
            var newPosition = easeInOutQuad(timeElapsed, start, distance, duration);

            // Desplazar la página a la nueva posición
            window.scrollTo(0, newPosition);

            // Continuar la animación si no se ha alcanzado la duración total
            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        // Función de aceleración/deceleración (easeInOut)
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        // Iniciar la animación
        requestAnimationFrame(scrollAnimation);
    }
});
