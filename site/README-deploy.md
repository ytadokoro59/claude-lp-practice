# 公開用フォルダ（site/）

Netlifyへこのフォルダごとドラッグ&ドロップすればそのまま公開できます。

## 構成
- /            … トップページ（サイト案内・運営者情報）
- /privacy/    … プライバシーポリシー
- /nezumi/     … ネズミ被害LP
- /koumori/    … コウモリ被害LP

## 公開前チェックリスト
1. [ ] トップページの「お問い合わせメールアドレス」を実際のアドレスに差し替え（index.html内のコメント参照）
2. [ ] 写真素材を組み込む（assets/photos/ に配置してClaudeに依頼）
3. [ ] Netlifyにデプロイ → 独自ドメインを接続
4. [ ] A8「広告掲載URL管理」に /nezumi/ と /koumori/ のURLを提出
5. [ ] ROY提携承認後、各LPの script.js 内 A8_LINK をA8広告リンクに差し替えて再デプロイ
6. [ ] GA4測定ID・Google広告CVタグを設定（各index.htmlのコメント欄とscript.jsのGADS_CONVERSION）

## 運用ルール
- 作業用マスターは nezumi-lp/ と koumori-lp/（site/ 内は公開用コピー）
- マスターを編集したら Claude に「site/ に同期して」と依頼
