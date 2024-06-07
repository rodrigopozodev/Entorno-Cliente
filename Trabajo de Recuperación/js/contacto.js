// Script para manejar el envío del formulario
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Capturar los datos del formulario
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var genero = document.getElementById("genero");
    var edad = document.getElementById("edad");

    // Validaciones
    var errors = [];

    if (!nombre.value) {
        showError(nombre, "Por favor, ingrese su nombre.");
        errors.push("Por favor, ingrese su nombre.");
    } else {
        hideError(nombre);
    }

    if (!apellidos.value) {
        showError(apellidos, "Por favor, ingrese sus apellidos.");
        errors.push("Por favor, ingrese sus apellidos.");
    } else {
        hideError(apellidos);
    }

    if (!edad.value) {
        showError(edad, "Por favor, ingrese su edad.");
        errors.push("Por favor, ingrese su edad.");
    } else if (parseInt(edad.value) < 0 || isNaN(parseInt(edad.value))) {
        showError(edad, "La edad no puede ser negativa.");
        errors.push("La edad no puede ser negativa.");
    } else {
        hideError(edad);
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Por favor, ingrese un correo electrónico válido.");
        errors.push("Por favor, ingrese un correo electrónico válido.");
    } else {
        hideError(email);
    }

    var fechaNacimientoDate = new Date(fechaNacimiento.value);
    var fechaActual = new Date();
    var fechaMinima = new Date("1900-01-01");

    if (isNaN(fechaNacimientoDate)) {
        showError(fechaNacimiento, "Por favor, ingrese una fecha de nacimiento válida.");
        errors.push("Por favor, ingrese una fecha de nacimiento válida.");
    } else if (fechaNacimientoDate > fechaActual || fechaNacimientoDate < fechaMinima) {
        showError(fechaNacimiento, "La fecha de nacimiento no puede ser posterior a hoy, y no puede ser anterior a 1900.");
        errors.push("La fecha de nacimiento no puede ser posterior a hoy, y no puede ser anterior a 1900.");
    } else {
        hideError(fechaNacimiento);
    }

    // Mostrar errores si los hay
    if (errors.length > 0) {
        var errorDiv = document.getElementById("errorDiv");
        errorDiv.innerHTML = errors.join("<br>");
        errorDiv.style.display = "block";
        return; // Detener el envío del formulario si hay errores
    }

    // Ocultar el formulario y mostrar la cuadrícula de perfil con los datos capturados
    document.getElementById("formulario").classList.add("hidden");
    var perfilContainer = document.getElementById("perfilContainer");
    perfilContainer.style.display = "flex";
    perfilContainer.innerHTML = `
        <div id="perfilTitulo">Perfil</div>
        <div class="perfil-grid">
            <div><span class="info-titulo">Nombre:</span><span class="info-dato">${nombre.value}</span></div>
            <div><span class="info-titulo">Apellidos:</span><span class="info-dato">${apellidos.value}</span></div>
            <div><span class="info-titulo">Correo Electrónico:</span><span class="info-dato">${email.value}</span></div>
            <div><span class="info-titulo">Fecha de Nacimiento:</span><span class="info-dato">${fechaNacimiento.value}</span></div>
            <div><span class="info-titulo">Género:</span><span class="info-dato">${genero.value}</span></div>
            <div><span class="info-titulo">Edad:</span><span class="info-dato">${edad.value}</span></div>
        </div>
        <button id="editarPerfilBtn">Editar</button>
    `;

    // Agregar opción de edición
    document.getElementById("editarPerfilBtn").addEventListener("click", function() {
        // Mostrar el formulario de registro nuevamente con los datos del perfil llenando los campos
        document.getElementById("formulario").classList.remove("hidden");
        perfilContainer.style.display = "none";

        // Llenar los campos del formulario con los datos del perfil
        document.getElementById("nombre").value = nombre.value;
        document.getElementById("apellidos").value = apellidos.value;
        document.getElementById("email").value = email.value;
        document.getElementById("fechaNacimiento").value = fechaNacimiento.value;
        document.getElementById("genero").value = genero.value;
        document.getElementById("edad").value = edad.value;
    });
});

// Función para mostrar mensajes de error debajo de los campos del formulario
function showError(input, message) {
    var errorDiv = input.nextElementSibling;
    errorDiv.innerHTML = message;
    errorDiv.style.display = "block";
}

// Función para ocultar mensajes de error
function hideError(input) {
    var errorDiv = input.nextElementSibling;
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
}
