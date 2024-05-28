/*Animacion INTRO*/
  const mainBefore = document.querySelector('main::before');

  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    mainBefore.appendChild(star);
  }

  

