document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const userContainer = document.getElementById('userContainer');
    const loggedInUser = document.getElementById('loggedInUser');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginForm = document.getElementById('loginForm');
    const postContainer = document.getElementById('postContainer');

    // Verificar si el usuario está logueado
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        // Si el usuario está logueado, mostrar el nombre de usuario y el botón de cerrar sesión
        const username = localStorage.getItem('username');
        loggedInUser.textContent = username;
        userContainer.style.display = 'flex';
        loginForm.style.display = 'none'; // Ocultar el formulario de inicio de sesión
        // Mostrar contenido de los posts y el JSON
        showPosts();
        fetchPosts();
    } else {
        // Si el usuario no está logueado, ocultar el contenido de los posts y mostrar el formulario de inicio de sesión
        hidePosts();
        hideJson(); // Ocultar el JSON al cargar la página
        loginForm.style.display = 'block'; // Mostrar el formulario de inicio de sesión
    }

    // Event listener para cerrar sesión
    logoutBtn.addEventListener('click', function() {
        // Limpiar los datos de usuario guardados en el almacenamiento local
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');

        // Recargar la página para ocultar el JSON y mostrar el formulario de inicio de sesión
        location.reload();
    });

    // Event listener para el envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener los valores del formulario
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;

        // Verificar que se hayan ingresado el nombre de usuario y la contraseña
        if (username && password) {
            // Simular inicio de sesión exitoso y mostrar contenido de los posts
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('username', username);

            // Mostrar el nombre de usuario
            loggedInUser.textContent = username;
            userContainer.style.display = 'flex';
            loginForm.style.display = 'none'; // Ocultar el formulario de inicio de sesión

            // Mostrar contenido de los posts y el JSON
            showPosts();
            fetchPosts();
        } else {
            alert("Por favor, ingresa un nombre de usuario y contraseña.");
        }
    });

    // Función para mostrar contenido de los posts
    function showPosts() {
        postContainer.classList.remove('blurry'); // Remover la clase que aplica el desenfoque
    }

    // Función para ocultar contenido de los posts
    function hidePosts() {
        postContainer.classList.add('blurry'); // Aplicar la clase que aplica el desenfoque
    }

    // Función para ocultar el JSON
    function hideJson() {
        postContainer.classList.add('hidden'); // Ocultar el contenedor del JSON
    }

    // Función para cargar y mostrar contenido de los posts
    function fetchPosts() {
        fetch('../datos/posts.json')
            .then(response => response.json())
            .then(data => {
                postContainer.innerHTML = ''; // Limpiar contenido existente

                data.posts.forEach((post, index) => {
                    const postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.classList.add(`post${index + 1}`);

                    let postContent = `
                        <h2>${post.titulo}</h2>
                    `;

                    // Si hay un subtítulo, lo agregamos
                    if (post.subtitulo && (index !== 2 && index !== 3)) {
                        postContent += `<p>${post.subtitulo}</p>`;
                    }

                    // Si hay una imagen asociada al post, la agregamos después del título
                    if (post.imagen_id) {
                        postContent += `<img src="${post.imagen_id}" alt="${post.titulo}">`;
                    }

                    postContent += `
                        <p>${post.contenido}</p>
                    `;

                    // Si el post no es el tercero ni el cuarto, agregamos el botón "Leer más"
                    if (index !== 2 && index !== 3) {
                        postContent += `<button class="leer-mas-btn" data-contenido-extra="${post.contenido_extra}">Leer más</button>`;
                    }

                    postDiv.innerHTML = postContent;
                    postContainer.appendChild(postDiv);
                });

                // Mostrar el contenedor de posts
                postContainer.classList.remove('hidden');
            })
            .catch(error => console.error('Error al cargar los posts:', error));
    }
});
