 // Menu lateral
 document.querySelectorAll('.menu-lateral a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  });

  document.querySelector('.imenu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.add('open');
    document.querySelector('.imenu').style.opacity = '1';
  });

  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.remove('open');
    document.querySelector('.imenu').style.opacity = '1';
  });


 //

 let currentScrollPosition = 0;
const container = document.querySelector('.slideshow-container');
let isAnimating = false; // Variável para evitar múltiplos cliques rápidos

function plusSlides(n) {
    if (isAnimating) return; // Evita múltiplos cliques/deslizes rápidos
    isAnimating = true;

    const containerWidth = container.offsetWidth;
    const cardWidth = container.querySelector('.card').offsetWidth + 20; // Inclui a margem

    // Ajusta a posição de scroll
    currentScrollPosition += n * cardWidth;

    // Limita o scroll para não ultrapassar o começo ou o fim
    if (currentScrollPosition < 0) {
        currentScrollPosition = 0;
    } else if (currentScrollPosition > (container.scrollWidth - containerWidth)) {
        currentScrollPosition = container.scrollWidth - containerWidth;
    }

    container.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth' // Animação suave ao deslizar
    });

    // Desativa a animação até que a transição termine (500ms)
    setTimeout(() => {
        isAnimating = false;
    }, 500); // Controla o intervalo entre cliques/deslizes
}

// Controle de deslizar para mobile
let startX = 0;
let isSwiping = false; // Para controlar múltiplos deslizes rápidos

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

container.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;

    let endX = e.touches[0].clientX;
    if (startX > endX + 50) {
        plusSlides(1); // Deslizar para esquerda
        isSwiping = false; // Bloqueia até o próximo deslizar
    } else if (startX < endX - 50) {
        plusSlides(-1); // Deslizar para direita
        isSwiping = false; // Bloqueia até o próximo deslizar
    }
});

container.addEventListener('touchend', () => {
    isSwiping = false; // Permite novos deslizes
});
