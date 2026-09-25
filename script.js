(() => {
  'use strict';

  const config = window.WEE_SPACE_CONFIG;
  if (!config) {
    console.error('Configurazione Wee Space non disponibile.');
    return;
  }

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const checkIcon = '<svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

  function configureFormLinks() {
    document.querySelectorAll('[data-form-link]').forEach((link) => {
      link.href = config.site.formUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Richiedi una visita: si apre il modulo esterno in una nuova scheda');
      link.title = 'Si apre il modulo esterno in una nuova scheda';
    });
  }

  function renderPricing() {
    const grid = document.getElementById('pricing-grid');
    if (!grid) return;

    grid.innerHTML = config.plans.map((plan) => `
      <article class="pricing-card${plan.featured ? ' featured' : ''}" aria-labelledby="${escapeHtml(plan.id)}-title">
        <div class="pricing-header">
          <span class="discount-badge">${escapeHtml(plan.discountLabel)}</span>
          <h3 id="${escapeHtml(plan.id)}-title" class="pricing-name">${escapeHtml(plan.name)}</h3>
          <p class="pricing-desc">${escapeHtml(plan.description)}</p>
          <div class="pricing-price" aria-label="Prezzo ${escapeHtml(plan.price)} al mese, da ${escapeHtml(plan.originalPrice)}">
            <span class="price-original" aria-hidden="true">${escapeHtml(plan.originalPrice)}</span>
            <span class="price-amount">${escapeHtml(plan.price)}</span>
            <span class="price-period">/mese</span>
          </div>
        </div>
        <p class="availability"><strong>${escapeHtml(plan.availability)} disponibili</strong></p>
        <ul class="pricing-features">
          ${plan.features.map((feature) => `<li class="pricing-feature">${checkIcon}<span>${escapeHtml(feature)}</span></li>`).join('')}
        </ul>
        <a class="btn ${plan.featured ? 'btn-pricing-featured' : 'btn-pricing'}" data-form-link>Richiedi una visita</a>
      </article>
    `).join('');
  }

  function renderTestimonial() {
    const slot = document.getElementById('testimonial-slot');
    const testimonial = config.testimonial;
    if (!slot || !testimonial) return;
    slot.hidden = false;
    slot.innerHTML = `<div class="testimonial-card"><blockquote>“${escapeHtml(testimonial.quote)}”</blockquote><cite>— ${escapeHtml(testimonial.author)}</cite></div>`;
  }

  function configureMapLink() {
    const mapLink = document.getElementById('maps-link');
    if (!mapLink) return;
    mapLink.href = config.site.mapUrl;
    mapLink.setAttribute('aria-label', `Apri indicazioni per ${config.site.address} in Google Maps, nuova scheda`);
  }

  function configureInternalLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.setAttribute('tabindex', '-1');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        window.history.pushState(null, '', anchor.getAttribute('href'));
        target.focus({ preventScroll: true });
      });
    });
  }

  function setupRevealAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.feature-card, .workspace-preview, .pricing-card, .amenity-card, .gallery-item, .contact-card');
    elements.forEach((element) => {
      element.classList.add('reveal-ready');
    });
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    elements.forEach((element) => observer.observe(element));
  }

  function setupParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('particles-canvas');
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const isSmallScreen = window.matchMedia('(max-width: 700px)').matches;
    const particleCount = isSmallScreen ? 25 : 48;
    let frameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.4 + 0.5,
        speedX: (Math.random() - 0.5) * 0.22,
        speedY: (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.28 + 0.1
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x = (particle.x + particle.speedX + canvas.width) % canvas.width;
        particle.y = (particle.y + particle.speedY + canvas.height) % canvas.height;
        context.fillStyle = `rgba(69, 142, 255, ${particle.opacity})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      if (!document.hidden) frameId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!frameId && !document.hidden) frameId = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = undefined;
    };

    resize();
    start();
    window.addEventListener('resize', () => { resize(); });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }

  function init() {
    renderPricing();
    configureFormLinks();
    configureMapLink();
    renderTestimonial();
    configureInternalLinks();
    setupRevealAnimations();
    setupParticles();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
