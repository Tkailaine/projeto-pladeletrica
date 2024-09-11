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

function plusSlides(n) {
    const containerWidth = container.offsetWidth;
    const cardWidth = container.querySelector('.card').offsetWidth + 20; // Inclui a margem entre os cards

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
        behavior: 'smooth'
    });
}

// Controle de deslizar para mobile
let startX = 0;

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        plusSlides(1); // Deslizar para esquerda
    } else if (startX < endX - 50) {
        plusSlides(-1); // Deslizar para direita
    }
});
