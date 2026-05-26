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

// Live Code Sandbox
const DEFAULT_CODE = {
  html: `<div class="card">
  <h1>Hello, world!</h1>
  <p>Edit me and watch the preview update.</p>
  <button id="btn">Click me</button>
</div>`,
  css: `body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #facc15, #f59e0b);
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
}
.card {
  background: white;
  padding: 28px 36px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  text-align: center;
}
button {
  background: #0f172a;
  color: white;
  border: 0;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}
button:hover { background: #334155; }`,
  js: `let count = 0;
document.getElementById('btn').addEventListener('click', () => {
  count++;
  document.getElementById('btn').textContent = 'Clicked ' + count + 'x';
});`,
};

const editors = {
  html: document.getElementById('editorHtml'),
  css: document.getElementById('editorCss'),
  js: document.getElementById('editorJs'),
};

const preview = document.getElementById('sandboxPreview');
const resetBtn = document.getElementById('sandboxReset');

if (editors.html && editors.css && editors.js && preview) {
  editors.html.value = DEFAULT_CODE.html;
  editors.css.value = DEFAULT_CODE.css;
  editors.js.value = DEFAULT_CODE.js;

  function renderPreview() {
    const html = editors.html.value;
    const css = editors.css.value;
    const js = editors.js.value;
    const doc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${css}</style></head><body>${html}<script>try{${js}}catch(e){document.body.insertAdjacentHTML('beforeend','<pre style=\\'color:red;padding:10px;font-family:monospace\\'>'+e.message+'</pre>')}<\/script></body></html>`;
    preview.srcdoc = doc;
  }

  let renderTimer;
  function debouncedRender() {
    clearTimeout(renderTimer);
    renderTimer = setTimeout(renderPreview, 250);
  }

  Object.values(editors).forEach((editor) => {
    editor.addEventListener('input', debouncedRender);
  });

  document.querySelectorAll('.sandbox__tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.sandbox__tab').forEach((t) => t.classList.remove('is-active'));
      document.querySelectorAll('.sandbox__editor').forEach((e) => e.classList.remove('is-active'));
      tab.classList.add('is-active');
      editors[target].classList.add('is-active');
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      editors.html.value = DEFAULT_CODE.html;
      editors.css.value = DEFAULT_CODE.css;
      editors.js.value = DEFAULT_CODE.js;
      renderPreview();
    });
  }

  renderPreview();
}

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

