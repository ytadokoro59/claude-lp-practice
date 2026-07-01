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
   Form Submit (AJAX → 成功時に自社 thanks.html へ遷移)
   ※ Formspree標準サンクスページには飛ばさず、CV計測用の thanks.html へ遷移
============================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // --- バリデーション ---
    // お名前・希望教室・第1希望日は HTML の required でブラウザが先に検証する。
    // ここではブラウザで検証できない項目を追加チェックする。

    // 1) メールアドレスまたは電話番号のどちらか一方は必須
    const email = form.querySelector('#email');
    const tel = form.querySelector('#tel');
    if (!email.value.trim() && !tel.value.trim()) {
      alert('メールアドレスまたは電話番号の、どちらか一方をご入力ください。');
      email.focus();
      return;
    }

    // 2) 第1希望の時間帯を1つ以上選択（チェックボックスのため必須チェックを補完）
    const firstTime = form.querySelectorAll('input[name="first_choice_time[]"]:checked');
    if (firstTime.length === 0) {
      alert('第1希望の時間帯を1つ以上お選びください。');
      return;
    }

    // --- 送信 ---
    const btn = form.querySelector('.form-submit-btn');
    const originalLabel = btn ? btn.textContent : '';
    if (btn) {
      btn.textContent = '送信中...';
      btn.disabled = true; // 二重送信防止
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        // 成功 → 自社サンクスページ（CV計測地点）へ遷移
        window.location.href = 'thanks.html';
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (err) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
      if (btn) {
        btn.textContent = originalLabel;
        btn.disabled = false;
      }
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
