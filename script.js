const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'SQL',
  'Node.js',
  'Angular',
  'Адаптивна верстка',
  'Базова робота з Git',
  'Самонавчання',
  'Швидке освоєння нових тем',
];

const skillsList = document.getElementById('skillsList');

skills.forEach((item) => {
  const tag = document.createElement('span');
  tag.className = 'skill';
  tag.textContent = item;
  skillsList.append(tag);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});