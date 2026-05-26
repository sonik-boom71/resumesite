const skillsFrontend = [
  'React 18',
  'React Router',
  'React Hooks',
  'TypeScript (Advanced)',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3 / SCSS',
  'BEM Methodology',
  'Context API',
  'Responsive Design',
  'Mobile-first',
  'ARIA & Accessibility',
  'Animations & Transitions',
  'Form Validation',
  'Local Storage',
];

const skillsTools = [
  'Git & GitHub',
  'Vite',
  'Parcel',
  'npm',
  'ESLint',
  'Prettier',
  'Stylelint',
  'GitHub Pages',
  'VS Code',
];

const skillsTesting = [
  'Cypress (E2E)',
  'Jest (Unit)',
  'Manual Browser Testing',
  'Performance Optimization',
  'Accessibility Standards',
];

function renderSkills(ids, list) {
  const container = document.getElementById(ids);
  if (!container) return;
  list.forEach((item) => {
    const tag = document.createElement('span');
    tag.className = 'skill';
    tag.textContent = item;
    container.append(tag);
  });
}

renderSkills('skillsFrontend', skillsFrontend);
renderSkills('skillsTools', skillsTools);
renderSkills('skillsTesting', skillsTesting);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Konami Code: ↑↑↓↓←→←→BA
const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

let konamiBuffer = [];

document.addEventListener('keydown', (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  konamiBuffer.push(key);

  if (konamiBuffer.length > KONAMI.length) {
    konamiBuffer.shift();
  }

  if (konamiBuffer.length === KONAMI.length &&
      konamiBuffer.every((k, i) => k === KONAMI[i])) {
    triggerKonami();
    konamiBuffer = [];
  }
});

function triggerKonami() {
  if (document.body.classList.contains('konami-active')) return;

  document.body.classList.add('konami-active');

  const message = document.createElement('div');
  message.className = 'konami-message';
  message.innerHTML = '<span>You found me!</span><span class="konami-emoji">🎮</span>';
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.classList.remove('konami-active');
    message.classList.add('fade-out');
    setTimeout(() => message.remove(), 600);
  }, 3000);
}

