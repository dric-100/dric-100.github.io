
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  if (ham) ham.onclick = () => document.querySelector('.menu').classList.toggle('active');

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  if (slides.length) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000);
  }

  if (localStorage.getItem('theme') === 'true') document.body.classList.add('dark');

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.onclick = () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark'));
    };
  }

  let size = parseInt(localStorage.getItem('font') || '16', 10);
  document.documentElement.style.fontSize = `${size}px`;

  const fontPlus = document.getElementById('fontPlus');
  const fontMinus = document.getElementById('fontMinus');

  if (fontPlus) {
    fontPlus.onclick = () => {
      size += 2;
      document.documentElement.style.fontSize = `${size}px`;
      localStorage.setItem('font', size);
    };
  }
  if (fontMinus) {
    fontMinus.onclick = () => {
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