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
