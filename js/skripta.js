document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger-dugme');
  if (ham) ham.onclick = () => document.querySelector('.meni').classList.toggle('aktivno');

  const slajdovi = document.querySelectorAll('.slajd');
  let trenutniSlajd = 0;
  if (slajdovi.length) {
    setInterval(() => {
      slajdovi[trenutniSlajd].classList.remove('aktivno');
      trenutniSlajd = (trenutniSlajd + 1) % slajdovi.length;
      slajdovi[trenutniSlajd].classList.add('aktivno');
    }, 3000);
  }

  if (localStorage.getItem('tema') === 'true') document.body.classList.add('tamno');

  const temaDugme = document.getElementById('temaDugme');
  if (temaDugme) {
    temaDugme.onclick = () => {
      document.body.classList.toggle('tamno');
      localStorage.setItem('tema', document.body.classList.contains('tamno'));
    };
  }

  let fontVelicina = parseInt(localStorage.getItem('font') || '16', 10);
  document.documentElement.style.fontSize = `${fontVelicina}px`;

  const fontUvecaj = document.getElementById('fontUvecaj');
  const fontUmanji = document.getElementById('fontUmanji');

  if (fontUvecaj) {
    fontUvecaj.onclick = () => {
      fontVelicina += 2;
      document.documentElement.style.fontSize = `${fontVelicina}px`;
      localStorage.setItem('font', fontVelicina);
    };
  }
  if (fontUmanji) {
    fontUmanji.onclick = () => {
      fontVelicina -= 2;
      document.documentElement.style.fontSize = `${fontVelicina}px`;
      localStorage.setItem('font', fontVelicina);
    };
  }

  const pozadina = document.getElementById("pozadinaParallax");
    window.addEventListener("scroll", () => {
        const offset = window.pageYOffset;
        pozadina.style.backgroundPositionY = `${offset * 0.9}px`;
    });
});