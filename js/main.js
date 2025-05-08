const cuchara = document.getElementById('cuchara');
const nombre = document.getElementById('nombre-restaurante');

// Estilos base
Object.assign(cuchara.style, {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%) rotate(90deg) scale(0.8)',
  transformOrigin: 'center center',
  height: 'auto',
  opacity: '0',
  pointerEvents: 'none',
  zIndex: '2',
  transition: 'transform 0.4s ease, opacity 0.3s ease'
});

// Hover: efecto de rotación + escala
nombre.addEventListener('mouseenter', () => {
  cuchara.style.opacity = '1';
  cuchara.style.transform = 'translateX(-50%) rotate(0deg) scale(1)';
});

nombre.addEventListener('mouseleave', () => {
  cuchara.style.opacity = '0';
  cuchara.style.transform = 'translateX(-50%) rotate(90deg) scale(0.8)';
});

// Función de tamaño responsive
function ajustarCucharaResponsive() {
  const ancho = window.innerWidth;

  if (ancho <= 576) {
    cuchara.style.width = '70px';
    cuchara.style.top = '-50px';
  } else if (ancho <= 768) {
    cuchara.style.width = '100px';
    cuchara.style.top = '-70px';
  } else {
    cuchara.style.width = '150px';
    cuchara.style.top = '-100px';
  }
}

// Ejecutar al cargar y al redimensionar
ajustarCucharaResponsive();
window.addEventListener('resize', ajustarCucharaResponsive);
