// Seletor dos elementos
const carousel = document.querySelector('.carousel');
const images = document.querySelector('.carousel-images');

// Lógica do carrossel
let counter = 0;
const imageWidth = carousel.clientWidth;
let autoSlideInterval;

// Clonagem das imagens para criar um efeito contínuo
const firstClone = images.firstElementChild.cloneNode(true);
const lastClone = images.lastElementChild.cloneNode(true);

images.appendChild(firstClone);
images.insertBefore(lastClone, images.firstElementChild);

// Atualiza a largura total após a clonagem
const totalImages = images.children.length;

// Função para avançar para a próxima imagem
function nextSlide() {
  counter++;
  images.style.transition = 'transform 0.4s ease-in-out';
  images.style.transform = `translateX(${-imageWidth * counter}px)`;
}

// Função para retroceder para a imagem anterior
function prevSlide() {
  counter--;
  images.style.transition = 'transform 0.4s ease-in-out';
  images.style.transform = `translateX(${-imageWidth * counter}px)`;
}

// Função para iniciar a rotação automática
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 2000); // Intervalo de 2 segundos
}

// Event listeners para avançar e retroceder as imagens
carousel.addEventListener('transitionend', () => {
  if (counter >= totalImages - 1) {
    counter = 1;
    images.style.transition = 'none';
    images.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
  if (counter <= 0) {
    counter = totalImages - 2;
    images.style.transition = 'none';
    images.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
});

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

carousel.addEventListener('mouseleave', () => {
  startAutoSlide();
});

// Inicia a rotação automática quando a página carrega
startAutoSlide();


let ul = document.querySelector('nav .ul');

function openMenu(){
  ul.classList.add('open');
}

function closeMenu(){
  ul.classList.remove('open');
}