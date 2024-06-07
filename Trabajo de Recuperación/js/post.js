document.addEventListener('DOMContentLoaded', function() {
  // Event listener para el botón "Leer más"
  document.getElementById('postContainer').addEventListener('click', (event) => {
      if (event.target.classList.contains('leer-mas-btn')) {
          const contenidoExtra = event.target.dataset.contenidoExtra;
          const postDiv = event.target.closest('.post');
          const contenidoExtraDiv = document.createElement('div');
          contenidoExtraDiv.classList.add('contenido-extra');
          contenidoExtraDiv.innerHTML = contenidoExtra;
          postDiv.appendChild(contenidoExtraDiv);
          event.target.style.display = 'none'; // Ocultar el botón "Leer más"
      }
  });
});
