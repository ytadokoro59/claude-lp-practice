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
   Form Submit (通常POST → Formspree → thanks.html へリダイレクト)
   ※ submit時はバリデーションのみJSで実行し、OKなら通常送信させる
============================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    // お名前・希望教室・第1希望日はHTMLのrequiredでブラウザが先に検証するため、
    // ここではブラウザで検証できない項目のみを追加チェックする。

    // 1) メールアドレスまたは電話番号のどちらか一方は必須
    const email = form.querySelector('#email');
    const tel = form.querySelector('#tel');
    if (!email.value.trim() && !tel.value.trim()) {
      e.preventDefault();
      alert('メールアドレスまたは電話番号の、どちらか一方をご入力ください。');
      email.focus();
      return;
    }

    // 2) 第1希望の時間帯を1つ以上選択（チェックボックスのため必須チェックを補完）
    const firstTime = form.querySelectorAll('input[name="first_choice_time[]"]:checked');
    if (firstTime.length === 0) {
      e.preventDefault();
      alert('第1希望の時間帯を1つ以上お選びください。');
      return;
    }

    // バリデーションOK → 通常POSTでFormspreeへ送信し、_next(thanks.html)へリダイレクト
    const btn = form.querySelector('.form-submit-btn');
    if (btn) {
      btn.textContent = '送信中...';
      btn.disabled = true;
    }
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
