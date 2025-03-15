const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.getElementById('tarjeta');

// Función para voltear la tarjeta al hacer click click
verDetallesButton.addEventListener('click', () => {
    tarjeta.style.transform = 'rotateY(180deg)';
});

// Función para volver a la cara frontal al hacer click
volverButton.addEventListener('click', () => {
    tarjeta.style.transform = 'rotateY(0deg)';
});
