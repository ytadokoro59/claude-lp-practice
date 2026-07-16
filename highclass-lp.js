/* ============================================================
   BRIEDGE HIGHCLASS LP — JAVASCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* --- Header scroll effect --- */
  const header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Scroll reveal --- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* --- FAQ accordion --- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close all
      faqItems.forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      // open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 68;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* --- Logo fallback: show text if SVG fails to load --- */
  const logoImg = document.querySelector('.header-logo img');
  const logoText = document.querySelector('.header-logo .header-logo-text');
  if (logoImg && logoText) {
    logoImg.addEventListener('error', () => {
      logoImg.style.display = 'none';
      logoText.style.display = 'flex';
    });
    // If already errored (cached)
    if (!logoImg.complete || logoImg.naturalWidth === 0) {
      logoImg.style.display = 'none';
      logoText.style.display = 'flex';
    }
  }

})();
