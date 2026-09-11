const mobileMenu = document.querySelector<HTMLDetailsElement>('header details');

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.removeAttribute('open'));
});
