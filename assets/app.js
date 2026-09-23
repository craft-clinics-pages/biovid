document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.benefit-card, .ingredient-copy, .ritual-card, .faq-list').forEach((el) => {
    el.style.opacity = '0'; el.style.transform = 'translateY(18px)'; el.style.transition = 'opacity .7s ease, transform .7s ease'; observer.observe(el);
  });
  const style = document.createElement('style');
  style.textContent = '.is-visible{opacity:1!important;transform:none!important}';
  document.head.appendChild(style);
}
