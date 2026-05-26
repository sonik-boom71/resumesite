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
  html: `<div class="show">
  <h1>Supernatural <span>Cast</span></h1>
  <p class="tag">15 seasons · 327 episodes · 2005–2020</p>

  <ul class="cast" id="cast">
    <li data-role="Sam Winchester">Jared Padalecki</li>
    <li data-role="Dean Winchester">Jensen Ackles</li>
    <li data-role="Castiel">Misha Collins</li>
    <li data-role="Crowley">Mark Sheppard</li>
    <li data-role="Bobby Singer">Jim Beaver</li>
    <li data-role="Jack Kline">Alexander Calvert</li>
    <li data-role="Rowena">Ruth Connell</li>
    <li data-role="Lucifer">Mark Pellegrino</li>
  </ul>

  <p class="hint">↑ hover an actor to see the role</p>
</div>`,
  css: `body {
  font-family: 'Georgia', serif;
  background:
    radial-gradient(circle at 20% 10%, rgba(120, 30, 30, 0.35), transparent 50%),
    radial-gradient(circle at 80% 90%, rgba(40, 50, 90, 0.35), transparent 55%),
    #0a0a0f;
  color: #e5e7eb;
  min-height: 100vh;
  margin: 0;
  padding: 32px 24px;
  display: flex;
  justify-content: center;
}
.show {
  max-width: 520px;
  width: 100%;
}
h1 {
  font-size: 32px;
  margin: 0 0 4px;
  letter-spacing: 0.02em;
}
h1 span {
  color: #b91c1c;
  font-style: italic;
}
.tag {
  color: #9ca3af;
  font-size: 13px;
  margin: 0 0 22px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.cast {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}
.cast li {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-left: 3px solid #b91c1c;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.25s;
  font-size: 16px;
}
.cast li:hover {
  background: rgba(185, 28, 28, 0.18);
  transform: translateX(6px);
}
.cast li::after {
  content: ' — ' attr(data-role);
  color: #9ca3af;
  font-style: italic;
  font-size: 14px;
  opacity: 0;
  transition: 0.25s;
}
.cast li:hover::after { opacity: 1; }
.hint {
  margin-top: 18px;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
  text-align: center;
}`,
  js: `// Add a click counter to each actor
document.querySelectorAll('#cast li').forEach((item) => {
  let clicks = 0;
  item.addEventListener('click', () => {
    clicks++;
    const original = item.textContent.split(' (')[0];
    item.textContent = original + ' (' + clicks + ')';
  });
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

