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

const skillsBackend = [
  'Node.js',
  'Express',
  'Next.js API Routes',
  'REST APIs',
  'Prisma ORM',
  'PostgreSQL',
  'SQLite',
  'NextAuth / OAuth',
  'JWT Authentication',
  'Telegram Bots (Telegraf)',
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

const skillsAutomation = [
  'n8n Workflow Automation',
  'LLM APIs (ChatGPT, Gemini)',
  'Prompt Engineering',
  'REST API Integration',
  'Cloud Functions',
  'Node.js Scripting',
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
renderSkills('skillsBackend', skillsBackend);
renderSkills('skillsTools', skillsTools);
renderSkills('skillsTesting', skillsTesting);
renderSkills('skillsAutomation', skillsAutomation);

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

// Engineering Mode
const COMPONENTS = [
  {
    target: '.hero', name: 'Hero',
    description: 'Photo card + intro with badge, name, subtitle and CTAs.',
    props: [
      ['name', 'string', '"Maksym Davidiuk"'],
      ['title', 'string', '"Full-Stack Developer"'],
      ['photoSrc', 'string', '"photo.jpg"'],
      ['actions', 'array', '3 buttons'],
    ],
    state: [['isVisible', 'boolean']],
    deps: 'IntersectionObserver',
    renders: 'section.hero > [PhotoCard, HeroContent]',
  },
  {
    target: '#about', name: 'AboutSection',
    description: '3-column panel grid with hover lift.',
    props: [
      ['panels', 'array', '3 items'],
      ['title', 'string', '"About Me"'],
    ],
    state: [['visiblePanels', 'array']],
    deps: 'IntersectionObserver',
    renders: 'section#about > Panels > [Panel × 3]',
  },
  {
    target: '#experience', name: 'Timeline',
    description: 'Vertical work history with company/period/role.',
    props: [
      ['jobs', 'array', '4 items'],
    ],
    state: [['currentJob', 'number']],
    deps: '—',
    renders: 'section#experience > [Job × 4]',
  },
  {
    target: '#skills', name: 'SkillsGrid',
    description: 'Three categorized skill clouds.',
    props: [
      ['categories', 'array', '3 groups'],
      ['skillsFrontend', 'array', '15 tags'],
      ['skillsBackend', 'array', '10 tags'],
      ['skillsTools', 'array', '9 tags'],
      ['skillsTesting', 'array', '5 tags'],
    ],
    state: [['rendered', 'boolean']],
    deps: '—',
    renders: 'section#skills > SkillsGrid > [Panel × 3]',
  },
  {
    target: '#projects', name: 'ProjectsGrid',
    description: 'Portfolio cards with tech stack and live links.',
    props: [
      ['projects', 'array', '16 items'],
      ['layout', 'string', '"grid"'],
    ],
    state: [['hoveredCard', 'number'], ['openDemo', 'string']],
    deps: '—',
    renders: 'section#projects > Projects > [Project × 16]',
  },
  {
    target: '#process', name: 'ProcessSteps',
    description: 'Four-step workflow: Understand → Design → Build → Ship.',
    props: [
      ['steps', 'array', '4 items'],
      ['numerals', 'string', '"一 二 三 四"'],
    ],
    state: [],
    deps: '—',
    renders: 'section#process > ol.process > [Step × 4]',
  },
  {
    target: '#education', name: 'EducationCards',
    description: 'Two-column education cards with linked coursework.',
    props: [
      ['institutions', 'array', '2 items'],
    ],
    state: [],
    deps: '—',
    renders: 'section#education > EduGrid > [Panel × 2]',
  },
  {
    target: '#contacts', name: 'ContactsBlock',
    description: 'Contact cards, status line and language tags.',
    props: [
      ['contacts', 'array', '3 items'],
      ['languages', 'array', '3 items'],
    ],
    state: [],
    deps: '—',
    renders: 'section#contacts > [Contacts, Status, Languages]',
  },
];

function colorType(t) {
  return `type-${t}`;
}

function buildDocs(c) {
  const props = c.props.map(([n, t, d]) =>
    `<div><span class="prop-name">${n}</span>: <span class="${colorType(t)}">${t}</span>` +
    (d ? ` <span class="default-val">= ${d}</span>` : '') + '</div>'
  ).join('');
  const state = c.state.length
    ? c.state.map(([n, t]) => `<div><span class="prop-name">${n}</span>: <span class="${colorType(t)}">${t}</span></div>`).join('')
    : '<div class="default-val">stateless</div>';
  return `
    <h4>&lt;${c.name} /&gt;</h4>
    <div>${c.description}</div>
    <div class="doc-section"><div class="doc-label">Props</div>${props}</div>
    <div class="doc-section"><div class="doc-label">State</div>${state}</div>
    <div class="doc-section"><div class="doc-label">Dependencies</div>${c.deps}</div>
    <div class="doc-section"><div class="doc-label">Renders</div>${c.renders}</div>
  `;
}

function injectOverlays() {
  COMPONENTS.forEach((c) => {
    const el = document.querySelector(c.target);
    if (!el || el.querySelector('.component-tag')) return;

    const tag = document.createElement('div');
    tag.className = 'component-tag';
    tag.textContent = `<${c.name} />`;
    el.appendChild(tag);

    const info = document.createElement('div');
    info.className = 'component-info';
    info.innerHTML = `ℹ<div class="component-docs">${buildDocs(c)}</div>`;
    el.appendChild(info);
  });

  // Footer counter
  const counts = COMPONENTS.reduce((acc, c) => {
    acc.props += c.props.length;
    acc.states += c.state.length;
    return acc;
  }, { props: 0, states: 0 });
  const footerP = document.querySelector('.footer p');
  if (footerP) {
    footerP.dataset.count = COMPONENTS.length;
    footerP.dataset.props = counts.props;
    footerP.dataset.states = counts.states;
    footerP.dataset.size = '32.6kb';
  }
}

function removeOverlays() {
  document.querySelectorAll('.component-tag, .component-info').forEach((el) => el.remove());
}

function buildTree() {
  const list = document.getElementById('componentTreeList');
  if (!list || list.children.length) return;
  COMPONENTS.forEach((c) => {
    const li = document.createElement('li');
    li.textContent = `<${c.name} />`;
    li.addEventListener('click', () => {
      const el = document.querySelector(c.target);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('is-highlighted');
      setTimeout(() => el.classList.remove('is-highlighted'), 1400);
    });
    list.appendChild(li);
  });
}

const modeToggle = document.getElementById('modeToggle');
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    // cross-fade between modes where the View Transitions API exists
    if (document.startViewTransition && !document.hidden) {
      // if the browser skips the animation it rejects these promises;
      // the mode still switches, so just swallow the rejections
      const transition = document.startViewTransition(switchMode);
      transition.ready.catch(() => {});
      transition.finished.catch(() => {});
    } else {
      switchMode();
    }
  });

  function switchMode() {
    const isOn = document.body.classList.toggle('engineering-mode');
    modeToggle.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    const icon = modeToggle.querySelector('.mode-toggle__icon');
    const label = modeToggle.querySelector('.mode-toggle__label');
    if (isOn) {
      icon.textContent = '🔧';
      label.textContent = 'Engineering Mode';
      buildTree();
      injectOverlays();
      // no free side margin for the tree on narrow screens: start it collapsed
      const tree = document.getElementById('componentTree');
      const narrow = window.innerWidth < 1640;
      tree.classList.toggle('is-collapsed', narrow);
      if (treeToggle) treeToggle.textContent = narrow ? '+' : '−';
    } else {
      icon.textContent = '🎨';
      label.textContent = 'Presentation Mode';
      removeOverlays();
    }
  }
}

const treeToggle = document.getElementById('treeToggle');
if (treeToggle) {
  treeToggle.addEventListener('click', () => {
    const tree = document.getElementById('componentTree');
    tree.classList.toggle('is-collapsed');
    treeToggle.textContent = tree.classList.contains('is-collapsed') ? '+' : '−';
  });
}

// Slide-out demo panels
document.querySelectorAll('.demo-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.demo);
    if (!panel) return;
    const isOpen = panel.classList.toggle('is-open');
    btn.classList.toggle('is-open', isOpen);
    btn.textContent = isOpen ? '▾ Hide Demo' : '▸ Show Demo';
  });
});


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

