/* =========================================================
   コウモリ被害 相談ガイド LP - script.js
   A8リンク差し替え・CTAクリック計測・症状チェック連動
========================================================= */

// ▼▼▼ リンク差し替え箇所 ▼▼▼
// 現在はA8審査用の仮リンクとして公式の害獣駆除ページURLを設定しています。
// （公式にはコウモリ専用ページがないため害獣駆除トップを使用）
// A8提携承認後、広告運用前に必ずA8広告リンクへ差し替えてください。
// 公式ページURLのまま広告運用すると、A8成果計測の対象外になります。
const A8_LINK = "https://roy-g.com/extermination/";
// ▲▲▲ ここまで ▲▲▲

// ▼ Google広告コンバージョンID（運用開始時に設定） ▼
const GADS_CONVERSION = "";
// ▲▲▲ ここまで ▲▲▲

document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== CTAボタン: A8リンク設定＋クリック計測 =====
  const ctaButtons = document.querySelectorAll("[data-cta]");

  ctaButtons.forEach(function (btn) {
    btn.setAttribute("href", A8_LINK);
    btn.setAttribute("rel", "nofollow sponsored");

    btn.addEventListener("click", function () {
      const position = btn.getAttribute("data-cta");

      console.log("affiliate_cta_click", { position: position });

      if (typeof gtag === "function") {
        gtag("event", "affiliate_cta_click", {
          event_category: "affiliate",
          event_label: "a8_link_click",
          cta_position: position
        });

        if (GADS_CONVERSION) {
          gtag("event", "conversion", { send_to: GADS_CONVERSION });
        }
      }
    });
  });

  // ===== 症状チェックリスト: タップ切替＋件数連動メッセージ =====
  const symptomItems = document.querySelectorAll("#symptom-list li");
  const resultBox = document.getElementById("check-result");
  const resultText = resultBox ? resultBox.querySelector(".check-result-text") : null;
  const symptomCta = document.getElementById("symptom-cta");

  function updateResult() {
    const count = document.querySelectorAll("#symptom-list li.is-checked").length;
    if (!resultText) return;

    if (count === 0) {
      resultBox.className = "check-result";
      resultText.textContent = "気になる項目をタップするとチェックできます";
      if (symptomCta) symptomCta.textContent = "症状を無料で調査してもらう";
    } else if (count === 1) {
      resultBox.className = "check-result is-warn";
      resultText.textContent = "1件チェック：コウモリがいる可能性があります。早めの確認がおすすめです";
      if (symptomCta) symptomCta.textContent = "この症状を無料で調査してもらう";
    } else {
      resultBox.className = "check-result is-alert";
      resultText.textContent = count + "件チェック：ねぐらにされている可能性が高い状態です。群れが増える前の相談をおすすめします";
      if (symptomCta) symptomCta.textContent = "今すぐ無料調査を申し込む";
    }

    if (typeof gtag === "function") {
      gtag("event", "symptom_check", { checked_count: count });
    }
  }

  symptomItems.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("is-checked");
      const icon = item.querySelector(".check-icon");
      if (icon) {
        icon.textContent = item.classList.contains("is-checked") ? "☑" : "☐";
      }
      updateResult();
    });
  });
});
