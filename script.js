// Scroll doux pour les ancres internes + boutons data-scroll
document.querySelectorAll('a[href^="#"], button[data-scroll]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const href = el.getAttribute('href');
    const dataScroll = el.getAttribute('data-scroll');
    const targetId = (href && href.startsWith('#')) ? href.slice(1) : (dataScroll ? dataScroll.replace('#', '') : null);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});
