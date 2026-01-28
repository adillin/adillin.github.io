// Active nav + smooth scroll on click + highlight on scroll
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.banner a, .nav a'));
  const sections = links
    .map(a => a.getAttribute('href'))
    .filter(h => h && h.startsWith('#'))
    .map(h => document.querySelector(h));

  function setActive() {
    const fromTop = window.scrollY + 120;
    let current = 'home';
    for (const s of sections) {
      if (!s) continue;
      if (s.offsetTop <= fromTop) current = s.id || current;
    }
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({behavior:'smooth', block:'start'});
          history.replaceState(null, '', href);
          setTimeout(setActive, 300);
        }
      }
    });
  });

  window.addEventListener('scroll', setActive, {passive:true});
  setActive();
});