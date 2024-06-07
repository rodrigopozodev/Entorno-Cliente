window.onload = function() {
    var temas = [
        { url: '/img/hojas.jpg', color: 'verde' },
        { url: '/img/rojo.jpg', color: 'rojo' },
        { url: '/img/cielo.jpg', color: 'azul' }
    ];

    // Generar un número aleatorio entre 0 y el número de temas disponibles
    var numeroAleatorio = Math.floor(Math.random() * temas.length);

    // Obtener el tema aleatorio y aplicar los cambios
    var temaAleatorio = temas[numeroAleatorio];
    cambiarTema(temaAleatorio.url, temaAleatorio.color);
}

function cambiarTema(urlImagen, color) {
    document.body.style.backgroundImage = `url('${urlImagen}')`;

    // Verificar si el elemento con ID 'titulo' existe
    var titulo = document.getElementById('titulo');
    if (titulo) {
        switch (color) {
            case 'verde':
                titulo.style.backgroundColor = '#004d2d';
                titulo.style.color = 'white';
                break;
            case 'rojo':
                titulo.style.backgroundColor = 'red';
                titulo.style.color = 'white';
                break;
            case 'azul':
                titulo.style.backgroundColor = 'rgb(0, 187, 255)';
                titulo.style.color = 'white';
                break;
            default:
                break;
        }
    
}
    // Cambiar las imágenes del swiper
    var imagenesSwiper = getImagenesSwiper(color);
    actualizarSwiper(imagenesSwiper);

    // Cambiar el color del botón de iniciar sesión según el tema
    cambiarColorBoton('loginBtn', color);

    // Cambiar el color del botón de cerrar sesión según el tema
    cambiarColorBoton('logoutBtn', color);

    // Cambiar el color del botón de subir arriba según el tema
    cambiarColorBoton('btnSubirArriba', color);
}

function getImagenesSwiper(color) {
    switch (color) {
        case 'verde':
            return ["/img/hojas.jpg", "/img/rojo.jpg", "/img/cielo.jpg"];
        case 'rojo':
            return ["/img/rojo.jpg", "/img/cielo.jpg", "/img/hojas.jpg"];
        case 'azul':
            return ["/img/cielo.jpg", "/img/hojas.jpg", "/img/rojo.jpg"];
        default:
            return [];
    }
}

function actualizarSwiper(imagenes) {
    var swiperSlides = document.querySelectorAll('.swiper-slide img');
    for (var i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].src = imagenes[i];
    }
}

// Función para cambiar el color del botón según el tema
function cambiarColorBoton(idBoton, color) {
    var boton = document.getElementById(idBoton);
    if (boton) {
        switch (color) {
            case 'verde':
                boton.style.backgroundColor = 'green';
                break;
            case 'rojo':
                boton.style.backgroundColor = 'red';
                break;
            case 'azul':
                boton.style.backgroundColor = 'rgb(0, 187, 255)';
                break;
            default:
                break;
        }

        // Aplicar efecto de zoom en el texto al pasar el mouse sobre el botón
        boton.style.color = 'white';
        boton.style.transition = 'transform 0.3s';
        boton.addEventListener('mouseover', function() {
            boton.style.transform = 'scale(1.1)';
        });
        boton.addEventListener('mouseout', function() {
            boton.style.transform = 'scale(1)';
        });
    }
}
