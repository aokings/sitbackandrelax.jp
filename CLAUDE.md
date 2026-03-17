# sitbackandrelax.jp — Operational CLAUDE

## 概要
Masaruのポートフォリオサイト。ボードゲームとデジタルツールを紹介する。
- URL: https://sitbackandrelax.jp
- ホスティング: GitHub Pages（CNAME: sitbackandrelax.jp）
- GitHub: aokings/sitbackandrelax.jp（public）

## サイト構成
```
sitbackandrelax.jp/
  index.html              # トップページ（EN/JP 切り替え対応）
  pfff/                   # pfff! カードゲーム
    index.html            # ゲーム紹介ページ
    game.html             # ゲームプレイページ
    rules/                # ルール説明
    archives/             # アーカイブ
  frog-editor/            # Frog Pixel Editor（ピクセルアートツール）
    index.html            # エディタ本体（HTML+CSS+JS 1ファイル完結、約3100行）
    about.html            # 使い方ガイド（EN/JP対応、サイトからリンク）
    SPEC.md               # 技術仕様書（Claude向け、次セッション用）
  card-editor/            # Frog Card Editor（Wind & Gate カード用ピクセルアートエディタ）
    index.html            # エディタ本体（HTML+CSS+JS 1ファイル完結、約1700行）
                          # ソース元: aokings/frog-card-editor リポジトリの src/index.html をコピー
```

## デザイン仕様
- フォント: DM Sans（本文）、Outfit（見出し）
- 配色: オフホワイト(#f2f0ed)、テキスト(#1a1a1a)、アクセント(#e94560)
- スタイル: ミニマル、温かみのあるモダンデザイン
- レスポンシブ対応（480pxブレークポイント）

## 技術スタック
- 静的HTML/CSS/JS（フレームワークなし）
- GitHub Pages でホスティング
- デプロイ: mainブランチにpushで自動反映

## 関連プロジェクト（Masaruの他のプロジェクト）
- **こども銀行（やりくりかぞく）** — 子ども向けおこづかい管理アプリ
  - ローカル: `/Users/masaru/Developer/こども銀行/kodomobank/`
  - GitHub: aokings/kodomobank（private）
  - 本番URL: yrkr.ai
  - 技術: Flutter web + Supabase
  - 「やりくりカエル（PixelFrog）」は Frog Pixel Editor と関連あり
- **pfff!** — 4人用戦略カードゲーム
  - GitHub: aokings/pfff（private）

## User Profile (Masaru)
- 非エンジニア（楽譜の読めない指揮者タイプ）
- Claude Codeをメイン開発ツールとして使用
- 技術用語を避けた平易な説明を好む
- ベストな判断で進めてほしい（選択肢を並べない）
