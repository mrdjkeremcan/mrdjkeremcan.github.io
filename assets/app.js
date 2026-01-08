(function () {
  const btn = document.querySelector('[data-hamburger]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('show');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('show'));
  });
})();
