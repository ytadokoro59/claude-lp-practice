(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  const STORAGE_KEYS = {
    phoneClick: 'pier_kokubunji_phone_click_fired',
    formStart: 'pier_kokubunji_form_start_fired',
    contactIntent: 'pier_kokubunji_contact_intent_fired',
    formSubmitted: 'pier_kokubunji_form_submitted',
    leadFired: 'pier_kokubunji_lead_fired'
  };

  function storageGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      // sessionStorageが利用できない環境でも
      // ユーザー操作を妨げない
    }
  }

  function storageRemove(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      // 何もしない
    }
  }

  function pushEventOnce(storageKey, eventName, parameters) {
    if (storageGet(storageKey) === '1') {
      return false;
    }

    storageSet(storageKey, '1');

    window.dataLayer.push(Object.assign({
      event: eventName,
      page_path: window.location.pathname
    }, parameters || {}));

    return true;
  }

  function pushContactIntentOnce(contactMethod) {
    pushEventOnce(
      STORAGE_KEYS.contactIntent,
      'meta_contact_intent',
      {
        contact_method: contactMethod,
        content_name: 'パソコン教室ピア 国分寺教室'
      }
    );
  }

  // 電話番号リンクのクリック
  document.addEventListener('click', function (event) {
    const phoneLink = event.target.closest('a[href^="tel:"]');

    if (!phoneLink) {
      return;
    }

    pushEventOnce(
      STORAGE_KEYS.phoneClick,
      'meta_phone_click',
      {
        contact_method: 'phone_click',
        content_name: 'パソコン教室ピア 国分寺教室'
      }
    );

    pushContactIntentOnce('phone_click');
  }, true);

  // フォームへの最初の有効入力
  const contactSection = document.querySelector('#contact');
  const contactForm = contactSection
    ? contactSection.querySelector('form')
    : null;

  function hasMeaningfulValue(field) {
    if (!field || field.disabled) {
      return false;
    }

    if (
      field.type === 'hidden' ||
      field.type === 'submit' ||
      field.type === 'button' ||
      field.type === 'file'
    ) {
      return false;
    }

    if (field.type === 'checkbox' || field.type === 'radio') {
      return field.checked;
    }

    return String(field.value || '').trim().length > 0;
  }

  function handleFormStart(event) {
    const field = event.target;

    if (!field.matches('input, select, textarea')) {
      return;
    }

    if (!hasMeaningfulValue(field)) {
      return;
    }

    pushEventOnce(
      STORAGE_KEYS.formStart,
      'meta_form_start',
      {
        contact_method: 'form_start',
        content_name: 'パソコン教室ピア 国分寺教室'
      }
    );

    pushContactIntentOnce('form_start');
  }

  if (contactForm) {
    contactForm.addEventListener('input', handleFormStart, true);
    contactForm.addEventListener('change', handleFormStart, true);
  }

  // thanksページで送信成功イベントを送る
  // 本番(Apache)は /kokubunji/thanks.html、クリーンURL環境は /kokubunji/thanks の
  // どちらでも判定できるようにする（送信するpage_pathは仕様どおり固定）
  if (/\/kokubunji\/thanks(\.html)?$/.test(window.location.pathname)) {
    const wasSubmitted =
      storageGet(STORAGE_KEYS.formSubmitted) === '1';

    const alreadyFired =
      storageGet(STORAGE_KEYS.leadFired) === '1';

    if (wasSubmitted && !alreadyFired) {
      storageSet(STORAGE_KEYS.leadFired, '1');
      storageRemove(STORAGE_KEYS.formSubmitted);

      window.dataLayer.push({
        event: 'meta_lead',
        lead_type: 'free_trial_request',
        content_name: 'パソコン教室ピア 国分寺教室 無料体験',
        page_path: '/kokubunji/thanks.html'
      });
    }
  }
})();
