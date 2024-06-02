// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.request');
    const activityDiv = document.querySelector('.activity');

    button.addEventListener('click', () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                activityDiv.textContent = data.slip.advice;
            })
            .catch(error => {
                console.error('Error fetching advice:', error);
                activityDiv.textContent = 'No se pudo obtener un consejo. Inténtalo de nuevo más tarde.';
            });
    });
});
