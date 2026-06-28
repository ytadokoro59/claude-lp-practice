# 話し方教室アナグラム LP制作 引き継ぎメモ

## 目的

このプロジェクトは「話し方教室アナグラム」のLP制作です。

目的は、国分寺・八王子・立川エリア周辺で、対面マンツーマンの話し方レッスンを検討している人に向けて、45分無料体験の申し込みを獲得することです。

講師は現役司会者・インタビューライターの阿部 恭子さんです。

主な訴求は以下です。

- 人前で話すのが苦手な方へ
- 現役司会者が教える話し方教室
- 対面マンツーマン
- 国分寺・八王子・立川エリア対応
- 45分無料体験
- 発声だけでなく、声・表情・目線・話の組み立て・本番想定練習まで対応

## 公開URL

GitHub Pagesで関係者確認用URLを発行済みです。

公開URL：
https://ytadokoro59.github.io/hanashikata-lp/

GitHubリポジトリ：
ytadokoro59/hanashikata-lp

ブランチ：
main

## 現在のファイル構成

GitHub Pages用に以下の構成で公開中です。

- index.html
- style.css
- script.js
- images/
- handoff.md
- .gitignore

images内の主なファイル：

- images/instructor-hero.jpg（PC版KV用の横長画像）
- images/instructor-hero-sp.jpg（スマホ版KV用の縦長画像）
- images/logo-anagram.png（ヘッダーロゴ）

差し替え待ちの画像（プレースホルダーあり）：

- images/instructor-profile.jpg（講師プロフィール写真）
- images/local-event-mc.jpg（司会中・活動中の写真）
- images/lesson-scene.jpg（レッスン風景）
- images/trial-lesson.jpg（無料体験・相談風景）
- images/speech-structure-board.jpg（話の組み立て説明写真）
- images/empathy-nervous.jpg（緊張する人物・共感写真）
- images/classroom-kokubunji.jpg（国分寺教室写真）
- images/classroom-hachioji.jpg（八王子教室写真）
- images/voice-01.jpg / voice-02.jpg / voice-03.jpg（お客様の声アバター）

## KVの現状と重要ルール

PC版KVとスマホ版KVは別画像で管理します。

PC版：
images/instructor-hero.jpg

スマホ版：
images/instructor-hero-sp.jpg

KVコピーは変更しません。

```
人前で話すのが苦手な方へ
現役司会者が教える話し方教室
```

CTAは「無料で45分体験する」で統一しています。

CSS切り替え：
- スマホ 〜679px：instructor-hero-sp.jpg / center center
- PC 680px〜：instructor-hero.jpg / 58% center

## LPの構成（セクション順）

1. Hero（KV・差別化サブコピー・無料体験バッジ・CTA）
2. お悩みチェック（チェックリスト・共感）→ CTA
3. 選ばれる理由（差別化）
4. レッスンの特徴（SVGアイコン4カード）
5. 他の講座との違い（比較表）→ CTA
6. こんな方におすすめ（ターゲット4カード）
7. 5ステップ（レッスン流れ）
8. 45分無料体験（体験内容）
9. お客様の声（仮テキスト3件）
10. コース・料金
11. 月4時間コース詳細（4回セッション内容）
12. 講師紹介（阿部 恭子）
13. 会場情報（国分寺教室・八王子教室）
14. よくある質問（FAQ）
15. 経営者・管理職・地域団体の方へ
16. 申込の流れ
17. 申込フォーム → CTA（最後）
18. フッター

## 最新の確定情報

### 講師

- 名前：阿部 恭子
- 肩書き：現役司会者・インタビューライター
- 実績：経営者、落語家、アスリート、著名人など1,200名以上のインタビューライティング
- 活動：音楽フェス、自治体主催イベント、BtoBイベントでの司会
- 強み：「伝える力」「聴く力」「言葉にする力」を活かした1対1サポート

### 料金（正式名称・第3版更新済み）

| コース | 料金 | 形態 |
|--------|------|------|
| 無料体験レッスン | 0円（45分） | 無料 |
| はじめてプラン【月4時間】 | 26,400円（税込）※税抜24,000円 | 月額・おすすめ |
| 徹底プラン【月8時間】 | 44,880円（税込）※税抜40,800円 | 月額（折りたたみ） |
| ライトプラン【月2時間】 | 14,300円（税込）※税抜13,000円 | 月額（折りたたみ） |
| 単発集中プラン【1回90分】 | 11,000円（税込）※税抜10,000円 | 単発・直前対策向け |
| 単発プラン【1回60分】 | 7,700円（税込）※税抜7,000円 | 単発・入門向け |

LP上の表示：
- メイン表示（3カード）：無料体験・はじめてプラン・単発集中プラン・単発プラン
- 折りたたみ表示：徹底プラン・ライトプラン

### 教室情報

国分寺教室：
〒185-0012
東京都国分寺市本町2丁目2-10
赤尾ビル 3F
パソコン教室ピア 国分寺教室内

八王子教室：
〒192-0084
東京都八王子市三崎町5-16
ファモス八王子地下1階
パソコン教室 八王子教室内

### 受付時間

10:00〜21:00

### フォーム仕様

必須項目：
1. お名前
2. 連絡先メールアドレス（電話番号は任意）
3. 希望教室（国分寺教室 / 八王子教室 / その他エリア相談）
4. 第1希望日（input type="date"）
5. 時間帯（第1希望）（チェックボックス複数選択可）
6. 第2希望日（input type="date"）
7. 時間帯（第2希望）（チェックボックス複数選択可）

時間帯の選択肢：
- 10:00–12:00
- 12:00–15:00
- 15:00–18:00
- 18:00–21:00

任意項目：話し方で困っていること / 練習したい場面 / 希望コース / LINE希望 / メッセージ

## GitHub Pages設定

- Source: Deploy from a branch
- Branch: main
- Folder: / root

パスはすべて相対パスで指定済み。

## 直近のGit作業

最新コミット（071d8f3）：
Improve ad readiness pricing form UX and design polish（第3版 広告出稿前改善）

その前（df218ef）：
Update handoff memo with latest LP status

その前（6656af4）：
Update pricing instructor profile classroom info and form dates

## 現時点で残っている要確認・仮置き情報

以下は未確定のまま残っています。確定次第、index.html を修正してください。

| 項目 | 現状 | 対応 |
|------|------|------|
| LINEリンク | `https://lin.ee/XXXXXXXX`（全箇所） | 正式URLへ差し替え |
| フォーム送信先 | `action="#"` のまま | Formspree等の設定が必要 |
| お支払い方法 | 「現金・振込（要確認）」 | 確定後に修正 |
| キャンセル規定 | 「○%」「レッスン○日前まで」など未確定 | 確定後に修正 |
| 国分寺教室 最寄駅・アクセス | 「要確認」 | 確定後に修正 |
| 八王子教室 最寄駅・アクセス | 「要確認」 | 確定後に修正 |
| 講師プロフィール写真 | プレースホルダー | images/instructor-profile.jpg を用意 |
| 司会中写真 | プレースホルダー | images/local-event-mc.jpg を用意 |
| お客様の声3件 | 仮テキスト（明記済み） | 実際の声に差し替え |
| 受講者アバター写真 | プレースホルダー | images/voice-01〜03.jpg を用意 |
| プライバシーポリシーリンク | `href="#"` | ページ作成後に設定 |
| 特定商取引法表記リンク | `href="#"` | ページ作成後に設定 |

## 次回再開時にまず確認すること

1. git status を確認

```bash
git status
```

2. リモート確認

```bash
git remote -v
```

3. 最新のmainを取得

```bash
git pull origin main
```

4. GitHub Pagesの表示確認
https://ytadokoro59.github.io/hanashikata-lp/

5. 次の優先対応

以下を順番に進めてください：
- LINEリンクを正式URLに差し替え
- フォーム送信先（Formspree等）を設定
- 国分寺・八王子教室の最寄駅・アクセス情報を追記
- キャンセル規定の数字を確定して修正
- 講師写真・司会中写真を差し替え

## 表示確認時の注意

GitHub Pagesは反映まで数十秒〜数分かかる場合があります。
ブラウザキャッシュが残ることがあるため、確認時はスーパーリロードしてください。

- Windows： Ctrl + F5
- Mac： Command + Shift + R

## 次回Claude Codeに依頼する場合の最初の指示

以下のように依頼するとよいです。

---

このプロジェクトは「話し方教室アナグラム」のLPです。
GitHub Pagesで以下に公開しています。

https://ytadokoro59.github.io/hanashikata-lp/

まずこの handoff.md を読み、現在のファイル構成・Git状態・公開ページの表示を確認してください。

PC版KVとスマホ版KVは別画像で管理しています。
- PC版： images/instructor-hero.jpg
- スマホ版： images/instructor-hero-sp.jpg

作業前に必ず `git status` と `git pull origin main` を確認してください。

---
