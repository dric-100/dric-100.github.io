
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger-dugme');
  if (ham) ham.onclick = () => document.querySelector('.meni').classList.toggle('aktivno');

  const slides = document.querySelectorAll('.slajd');
  let currentSlide = 0;
  if (slides.length) {
    setInterval(() => {
      slides[currentSlide].classList.remove('aktivno');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('aktivno');
    }, 3000);
  }

  if (localStorage.getItem('theme') === 'true') document.body.classList.add('dark');

  const temaDugme = document.getElementById('temaDugme');
  if (temaDugme) {
    temaDugme.onclick = () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark'));
    };
  }

  let size = parseInt(localStorage.getItem('font') || '16', 10);
  document.documentElement.style.fontSize = `${size}px`;

  const fontUvecaj = document.getElementById('fontUvecaj');
  const fontUmanji = document.getElementById('fontUmanji');

  if (fontUvecaj) {
    fontUvecaj.onclick = () => {
      size += 2;
      document.documentElement.style.fontSize = `${size}px`;
      localStorage.setItem('font', size);
    };
  }
  if (fontUmanji) {
    fontUmanji.onclick = () => {
      size -= 2;
      document.documentElement.style.fontSize = `${size}px`;
      localStorage.setItem('font', size);
    };
  }

  const forma = document.getElementById('kontaktForma');
  if (forma) {
    forma.addEventListener('submit', (e) => {
      const ime = document.getElementById('ime').value;
      if (ime.length < 2) {
        alert('Ime mora imati najmanje 2 karaktera');
        e.preventDefault();
      }
    });
  }

  const hero = document.getElementById("heroParallax");
    window.addEventListener("scroll", () => {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = `${offset * 0.3}px`;
    });
});