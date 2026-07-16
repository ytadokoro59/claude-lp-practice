/* =========================================================
   ネズミ被害 相談ガイド LP - script.js
   A8リンク差し替え・CTAクリック計測
========================================================= */

// ▼▼▼ リンク差し替え箇所 ▼▼▼
// 現在はA8審査用の仮リンクとして公式ページURLを設定しています。
// A8提携承認後、広告運用前に必ずA8広告リンクへ差し替えてください。
// 公式ページURLのまま広告運用すると、A8成果計測の対象外になる可能性があります。
const A8_LINK = "https://roy-g.com/extermination/mouse/";
// ▲▲▲ ここまで ▲▲▲

document.addEventListener("DOMContentLoaded", function () {
  // フッターの年号を自動更新
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // すべてのCTAボタンにA8リンクを設定し、クリック計測を仕込む
  const ctaButtons = document.querySelectorAll("[data-cta]");

  ctaButtons.forEach(function (btn) {
    btn.setAttribute("href", A8_LINK);

    btn.addEventListener("click", function () {
      const position = btn.getAttribute("data-cta");

      // クリック計測ログ（開発確認用）
      console.log("affiliate_cta_click", { position: position });

      // GA4 / Google広告タグへの送信（gtagが読み込まれている場合のみ動作）
      if (typeof gtag === "function") {
        gtag("event", "affiliate_cta_click", {
          event_category: "affiliate",
          event_label: "a8_link_click",
          cta_position: position
        });
      }

      // ▼ Google広告コンバージョンタグへ接続する場合はここに追記 ▼
      // if (typeof gtag === "function") {
      //   gtag("event", "conversion", {
      //     send_to: "AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX"
      //   });
      // }
      // ▲▲▲ ここまで ▲▲▲
    });
  });

  // セルフチェックリストのチェック表示切り替え（送信機能なし、見た目のみ）
  const selfCheckItems = document.querySelectorAll(".check-list-box li");

  selfCheckItems.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("is-checked");
      const icon = item.querySelector(".check-icon");
      if (icon) {
        icon.textContent = item.classList.contains("is-checked") ? "☑" : "☐";
      }
    });
  });
});
