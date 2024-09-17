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
    let cardWidth = container.querySelector('.card').offsetWidth;

    // Somar margens apenas no desktop
    if (window.innerWidth >= 768) {
        cardWidth += 30; // 15px de cada lado no desktop
    }

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


// digitação automatica

const textElement = document.getElementById('text');
const text = textElement.textContent; // O texto original
textElement.textContent = ''; // Limpa o texto original

let index = 0;

function type() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajuste a velocidade da digitação aqui
    } else {
        // Após a digitação completa, limpar e reiniciar imediatamente
        setTimeout(() => {
            index = 0; // Resetar o índice
            textElement.textContent = ''; // Limpar o texto
            type(); // Começar imediatamente sem pausa
        }, 500); // Pausa curta antes de recomeçar (ajuste conforme necessário)
    }
}

type(); // Chama a função imediatamente



 //ativação de animações
 document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  

  //galeria
  function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(element) {
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = element.src;
}

