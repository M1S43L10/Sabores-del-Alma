const nombre = document.getElementById('nombre-restaurante');

const cuchara = document.createElement('img');
cuchara.src = 'img/cuchara.png'; // asegúrate de tener esta imagen
cuchara.alt = 'Cuchara decorativa';
cuchara.style.position = 'absolute';
cuchara.style.top = '-40px';
cuchara.style.left = '50%';
cuchara.style.transform = 'translateX(-50%)';
cuchara.style.height = '40px';
cuchara.style.opacity = '0';
cuchara.style.transition = 'opacity 0.3s ease';

nombre.style.display = 'inline-block';
nombre.appendChild(cuchara);

nombre.addEventListener('mouseenter', () => {
    cuchara.style.opacity = '1';
});

nombre.addEventListener('mouseleave', () => {
    cuchara.style.opacity = '0';
});

