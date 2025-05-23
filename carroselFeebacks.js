  let indiceAtual = 0;
  const slides = document.querySelectorAll('.slide-feedback');

  function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === indice);
    });
  }

  function mudarSlide(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) {
      indiceAtual = slides.length - 1;
    } else if (indiceAtual >= slides.length) {
      indiceAtual = 0;
    }
    mostrarSlide(indiceAtual);
  }

  // Mostra o primeiro slide ao carregar
  mostrarSlide(indiceAtual);
