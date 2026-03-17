# Frog Pixel Editor — Technical Specification

> このドキュメントはClaude（AI）が次回のセッションで素早く理解できるように書かれた仕様書です。

## 概要

8×8〜32×32 ピクセルアートエディタ。「やりくりカエル」の表情を描くために作られた。
- **URL**: https://sitbackandrelax.jp/frog-editor/
- **構成**: `index.html` 1ファイル完結（HTML + CSS + JS、約3400行）
- **外部依存**: Google Fonts（DM Sans, Outfit）、gif.js 0.2.0（CDN）
- **フレームワーク**: なし（Vanilla JS）
- **対応言語**: EN / JP（i18n辞書方式）

---

## アーキテクチャ

### グリッドシステム

```
INTERNAL = 32  (内部バッファサイズ、常に32×32)

baseW × baseH = 表示上の解像度（8, 16）
zoom = 1, 2, 4（倍率）
resW() = baseW * zoom, resH() = baseH * zoom（表示セル数）

例: 8×8モード zoom=1 → 8×8セル表示
例: 8×8モード zoom=4 → 32×32セル表示（1ベースピクセル = 1表示セル）
```

**重要**: `grid[32][32]` は Int8Array で、各セルにはセルタイプの **値（数値ID）** が入る。色ではない。

### セマンティックレイヤー（セルタイプ）

```javascript
0 = Empty（空）       → 描画しない
1 = Body（体）        → カエルの体
2 = Eye（目）         → 目
3 = Mouth（口）       → 口
4 = Highlight（ハイ） → ハイライト
5+ = ユーザー定義（最大12タイプまで）
```

色は `customColors` オブジェクトで管理:
```javascript
customColors = { 0: '#F5F5F5', 1: '#4CAF50', 2: '#1A1A1A', 3: '#333333', 4: '#E8F5E9' }
```

### カラーバリアント

3プリセット + カスタム: `green` / `pink` / `red` / `custom`
- Body(1)の色を変えると `palettes.custom` がHSLから自動生成される
- バリアントセレクターは**エフェクトパネル上部**にある（プレビューパネルは廃止済み）

---

## エフェクトシステム（パーツ別）

### partEffects 構造

```javascript
partEffects = {
  1: { gradient: true, gradient_str: 50, emboss: true, emboss_str: 60 },
  2: { blink: true, blink_str: 95, glow: false },
  3: { outline: true },
  // ...
}
```

各パーツが独立してエフェクトを持つ。`getPartFx(partVal)` でアクセス。

### エフェクト一覧

| id | カテゴリ | 説明 | アニメ |
|----|---------|------|--------|
| outline | basic | パーツ外周の縁取り | なし |
| gradient | basic | 上下グラデーション | なし |
| emboss | basic | 3Dタイル感（各セルに白/黒エッジ） | なし |
| blink | life | まばたき（体色でoverlay） | あり |
| glow | life | 内側から発光＋エッジ光 | あり |
| sparkle | decoration | キラキラ星（ランダム） | あり |
| ethereal | special | 半透明ゆらぎ | あり |
| holographic | special | 虹色ホログラム＋シャイン | あり |

### まばたきスライダー（blink_str）
- 0% → 6秒固定間隔（ゆったり）
- 50% → 4秒固定間隔（ふつう）
- 95〜100% → 1〜4秒ランダム（Flutterアプリの `3000 + random(3000)ms` と同等）

### アニメーションループ
- `startFxAnimLoop()` / `stopFxAnimLoop()` で管理（`fxAnimTime` を毎フレーム加算）
- `onFxChange()` を呼ぶと自動でループ開始/停止
- `_skipChipRebuild = true` でアニメ中のチップ再構築をスキップ（パフォーマンス最適化）

### デフォルトエフェクト（プリセット読み込み時）
Body(1)にエフェクトが未設定の場合、プリセット読み込みで自動適用:
```javascript
partEffects[1] = { gradient: true, gradient_str: 50, emboss: true, emboss_str: 60 }
```
→ 既にエフェクトが設定済みの場合は上書きしない。

---

## レンダリングフロー

```
render()
  ├─ renderGrid()         ← グリッドキャンバス（編集 + エフェクト表示）
  │    ├─ セル塗りつぶし（customColors参照）
  │    ├─ グリッド線
  │    ├─ applyAllCanvasEffects() ← パーツ別エフェクトを重ねる
  │    │    順序: gradient → emboss → outline → glow → blink → sparkle → ethereal → holographic
  │    ├─ renderPlacementOverlay() ← 配置モード時のオーバーレイ
  │    └─ 拡大グリッド線（zoom>1時）
  └─ renderPreview()      ← 隠しキャンバス（コード生成・エクスポート用）
       ├─ renderPreviewToCanvas(previewCanvas)
       ├─ renderPreviewToCanvas(prevMd)
       ├─ renderPreviewToCanvas(prevSm)
       └─ updateCodePreview()
```

**重要**: プレビューカードは廃止。グリッドキャンバス上に直接エフェクトが表示される。
隠し canvas 要素（previewCanvas, prevMd, prevSm）はDOMに残存し、エクスポート処理で使用。

---

## UI構造

```
ヘッダー [← Home]                      [EN | JP]
タイトル: "Frog Pixel Editor" 🐸(アニメ)

┌─ 左カラム ──────────────┐  ┌─ 右カラム ──────────────┐
│ 解像度: [8×8][16×16][32×32] │  │ エフェクト ▲              │
│ パレット: [空][体][目][口][ハイ][+]│  │  カラー: ● ● ●           │
│ グリッドキャンバス（エフェクト表示）│  │  [体★][目][口]           │
│ [コマを保存][クリア][Undo][Redo] │  │  縁取り       ○          │
│                             │  │  グラデーション ●──── ●   │
│ プリセット ▲                 │  │  エンボス       ●──── ●   │
│  ふつう びっくり ...           │  │  まばたき      ○          │
│                             │  │  ...                      │
│ 保存したコマ (N) [全コマコピー] │  ├───────────────────────────┤
│  #1 #2 #3...                │  │ エクスポート ▲             │
│  ◀▶ Edit Del               │  │  PNG/Dart/GIF/Import       │
└──────────────────────────┘  └───────────────────────────┘
```

---

## データ構造

### スナップショット（保存コマ）

```javascript
{
  grid8: Array[8][8],            // 8×8ダウンサンプル
  gridBase: Array[baseH][baseW], // ベース解像度
  gridFull: Int8Array[32][32],   // 内部グリッド完全コピー（ロスレス復元用）
  bw: number, bh: number,        // 保存時の解像度
  partEffects: { ... }           // エフェクト設定も保存・復元される
}
```

`editSnapshot(idx)` でフレーム編集時、`partEffects` も完全復元される。

### Dartエクスポート形式

```dart
// 8x8
// 0=empty(#F5F5F5), 1=body(#4CAF50), 2=eye(#1A1A1A), 3=mouth(#333333), 4=hi(#E8F5E9)
static const _expression = [
  [0, 0, 1, 1, 0, 1, 1, 0],
  ...
];
```

2行目のコメントにセマンティック情報（タイプ名＋色）。インポート時にカラーマッピングを復元。

---

## 主要機能

### エディタ操作
- **ブラシ描画**: タッチ/マウスドラッグで塗る（同色タップで消去）
- **Undo/Redo**: 最大50段、グリッド + partEffects のセット保存
- **解像度切り替え**: 8×8 / 16×16 / 32×32（ボタン1長押しでサブメニュー: 16×8, 8×16）
- **プリセット配置**: 8×8以外の解像度では配置モード（ドラッグで位置調整→タップで確定）

### エクスポート/インポート
- **PNG**: canvasからdataURLでダウンロード（エフェクト含む）
- **Dart配列コピー**: セマンティック情報付き
- **GIFアニメーション**: gif.js使用、256×256固定サイズ
  - Worker CORSエラー対策: CDNからfetch → Blob URL化
- **Dart配列インポート**: 複数フレーム対応、カラーマッピング復元

---

## 今後の計画（Wave 4）

`brain_fx_backport.md` に詳細あり。

| 内容 | 概要 |
|------|------|
| PNGエクスポートへのエフェクト反映 | 現在はエフェクトなしでPNG出力 |
| Dart配列への `fx:` 設定埋め込み | `// fx: {"2":{"blink":true,...}}` |
| GIFへのアニメエフェクト反映 | blink/sparkle付きGIF |
| Flutter PixelFrog の `fx:` 読み込み | 表情ごとにまばたきパラメータ変更可能に |

---

## Flutter連携（やりくりかぞく）

`pixel_frog.dart` に既存のまばたき実装あり:
```dart
final delay = Duration(milliseconds: 3000 + _random.nextInt(3000));
_blinkController = AnimationController(duration: Duration(milliseconds: 150));
```
Frog Editor の `blink_str=95〜100%` がこの設定と同等。

---

## 注意事項

- gif.js の Worker は CDN CORS 制約あり → Blob URL で回避済み（`_gifWorkerBlobUrl`）
- localStorage は使用していない（リロードでデータ消失）
- `grid` は参照型なので undo/redo は `Int8Array.from()` でディープコピー必須
- `CELL_TYPES` はミュータブル配列。カスタムタイプ追加/削除で変化する
- `buildFxPartChips()` は `render()` 内で呼ばれる。`buildFxControls()` は別途手動で呼ぶ必要あり
