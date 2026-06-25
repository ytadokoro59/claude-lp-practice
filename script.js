/* ==============================
   FAQ Accordion
============================== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

/* ==============================
   Smooth Scroll for CTA buttons
============================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 60;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ==============================
   Fade-in on scroll
============================== */
const fadeEls = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('is-visible'));
}

/* ==============================
   Form Submit (placeholder)
============================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit-btn');
    btn.textContent = '送信中...';
    btn.disabled = true;
    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align:center;padding:32px 0;color:#fff;">
          <div style="font-size:48px;margin-bottom:16px;">✓</div>
          <p style="font-size:18px;font-weight:700;margin-bottom:8px;">お申し込みありがとうございます</p>
          <p style="font-size:14px;opacity:0.8;line-height:1.8;">担当者より日程調整のご連絡をいたします。<br>しばらくお待ちください。</p>
        </div>`;
    }, 1000);
  });
}

/* ==============================
   Header shadow on scroll
============================== */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });
