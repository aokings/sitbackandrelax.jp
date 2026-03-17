# Frog Pixel Editor — エフェクトバックポート提案

Card Editor で得たエフェクト知見を Frog Pixel Editor に逆輸入する提案。

## 現状

| 項目 | Frog Editor | Card Editor |
|------|-------------|-------------|
| エフェクト数 | 3種（Gradient, Emboss, Scanlines） | 12種（+ 11種追加予定） |
| 適用単位 | 全体一括 | パーツ別 |
| 描画方式 | Canvas API（Gradient, Emboss） | Canvas API ハイブリッド |
| エフェクト適用先 | プレビューのみ | グリッド + プレビュー + エクスポート |

## 方針

カードエディタは中世ファンタジー特化なので、全23種をそのまま持ってくるのは過剰。
Frog Editor は**カエル表情 + 汎用ピクセルアート**なので、
**汎用的で「キャラクターに生命感を出す」エフェクトに絞る**。

---

## 改善1: パーツ別エフェクト（アーキテクチャ変更）

**最も重要な改善**。

現在のエフェクトは Body（val=1）にしか Gradient が効かない。
Eye, Mouth, Highlight, カスタムパーツは素の色で描画される。

Card Editor の `partEffects` 方式を導入すれば、
「目だけ光らせる」「口だけ色を変える」が可能になる。

```javascript
// Before: グローバル状態
fx = { gradient: true, emboss: true, embossStrength: 0.7, scanlines: false }

// After: パーツ別
partEffects = {
  1: { gradient: true, emboss: true, emboss_str: 70 },  // Body
  2: { blink: true, glow: true },                        // Eye
  3: {},                                                  // Mouth
  4: { sparkle: true }                                    // Highlight
}
```

UI変更: Effects パネルにパーツ選択チップを追加（Card Editor と同じ方式）。

---

## 改善2: 追加すべきエフェクト（厳選8種）

カエル表情 + 汎用ピクセルアートに価値があるものだけ厳選。

### Tier 1: カエルに直接効く（最優先）

#### Blink（まばたき）— エディタで設定 → アプリに反映
カエルが生きてるように見える一番のエフェクト。
**やりくりかぞくアプリ（Flutter）では既にまばたきが実装済み**。
Frog Editor でまばたきの設定を可視化・調整し、その設定をエクスポートできれば最高。

##### 現在のアプリ側実装（pixel_frog.dart）
```dart
// 間隔: 3〜6秒ランダム
final delay = Duration(milliseconds: 3000 + _random.nextInt(3000));
// 速度: 150ms で閉じて開く
_blinkController = AnimationController(duration: Duration(milliseconds: 150));
// 描画: 目の色を体色に lerp して「閉じる」表現
final eyeColor = Color.lerp(_eyeBlack, palette.base, blinkPhase)!;
```

##### Frog Editor での Blink 設定UI

```
☑ Blink（まばたき）
  間隔:  [===|=========] 3s ←→ 8s   （デフォルト: 3〜6s ランダム）
  速度:  [====|========] 80ms ←→ 300ms（デフォルト: 150ms）
  スタイル: ● 色変化（現行）  ○ 非表示  ○ 半閉じ
```

- **間隔**: minDelay / maxDelay（ランダム範囲の下限・上限）
- **速度**: blinkDuration（閉じる→開くの時間）
- **スタイル**:
  - 色変化（現行方式: 目の色→体色に lerp）
  - 非表示（opacity を 0 にする、より強い「パチッ」感）
  - 半閉じ（blinkPhase を 0.7 で止めて「とろん」とした眠い目）

##### エクスポート形式

Dart 配列のコメントヘッダーにエフェクト設定を埋め込む:
```dart
// 8x8
// 0=empty(#F5F5F5), 1=body(#4CAF50), 2=eye(#1A1A1A), 3=mouth(#333333), 4=hi(#E8F5E9)
// fx: {"2":{"blink":true,"blink_min":3000,"blink_max":6000,"blink_dur":150,"blink_style":"lerp"}}
static const _expression = [
  [0, 0, 1, 1, 0, 1, 1, 0],
  ...
];
```

Flutter 側の PixelFrog ウィジェットがインポート時にこの `fx:` コメントを読み、
`_scheduleBlink` のパラメータを動的に設定する。

##### Flutter 側の変更（pixel_frog.dart）

```dart
// Before: ハードコーディング
final delay = Duration(milliseconds: 3000 + _random.nextInt(3000));
_blinkController = AnimationController(duration: Duration(milliseconds: 150));

// After: エフェクト設定から読む
final blinkMin = effectConfig?['blink_min'] ?? 3000;
final blinkMax = effectConfig?['blink_max'] ?? 6000;
final blinkDur = effectConfig?['blink_dur'] ?? 150;
final delay = Duration(milliseconds: blinkMin + _random.nextInt(blinkMax - blinkMin));
_blinkController = AnimationController(duration: Duration(milliseconds: blinkDur));
```

**これにより、表情ごとに違うまばたきパターンを設定できる:**
- ふつう: 3〜6秒、150ms（現行通り）
- ねむい: 2〜3秒、300ms（ゆっくり頻繁にとろーん）
- びっくり: 5〜8秒、80ms（稀に超高速パチッ）
- かなしい: 4〜7秒、200ms（少しゆっくり）

#### Glow（発光）
目が光るカエル。ハロウィン表情、怒り表情、魔法カエルに。
Body の Highlight パーツにも使える（頬紅が光る、星が光る等）。

```
対象: Eye, Highlight, カスタムパーツ
実装: Card Editor の B4 仕様をそのまま流用
パラメータ: 明るさ（Strength スライダー）
```

#### Sparkle（キラキラ）
嬉しい表情、びっくり表情に。目の周りや体にキラキラ。
Card Editor で既に実装済みの `applyCanvasSparkle` をそのまま持ってこれる。

```
対象: 全パーツ（特に Eye, Highlight）
実装: Card Editor の applyCanvasSparkle をコピー
パラメータ: 量・明るさ（Strength スライダー）
```

### Tier 2: 表現の幅が広がる

#### Outline（縁取り）
カエルを背景から浮き立たせる。
特にアプリ内で背景色の上にカエルを配置する時に効果的。
ピクセルアート全般でも最も汎用的なエフェクト。

```
対象: 全パーツ
実装: Card Editor の B1 仕様を流用
パラメータ: 色（デフォルト: ベースカラーの暗い版）
```

#### Ethereal（半透明/ゆらぎ）
眠い表情のぼんやり感。おばけカエル。透明カエル。
子どもの想像力を刺激する表現。

```
対象: 全パーツ（特に Body）
実装: Card Editor の B2 仕様を流用
パラメータ: 透明度（Strength スライダー）
```

#### Holographic（虹色）
楽しい・派手な表情に。子ども向けツールとして「わー綺麗！」感。
Card Editor で既に実装済み。

```
対象: 全パーツ
実装: Card Editor の applyCanvasHolographic をコピー
パラメータ: 虹色の強さ
```

### Tier 3: あると嬉しい

#### Frost（氷/冷たさ）
寒がりカエル。冬テーマの表情に。

#### Flame（炎）
怒りカエル。熱血カエル。

---

## 改善3: プレビューと編集の融合 + 32×32プレビュー問題の解決

### 現状の問題

1. **グリッド（左）= 編集する場所、エフェクト無し**
   **プレビュー（右）= 見る場所、エフェクト有り**
   → エフェクトを変えた結果をグリッド上で直感的に確認できない

2. **32×32 がプレビューに表示されない**
   `renderPreview()` は `exportAtBase()` を呼び、常に baseW×baseH（8×8）にダウンサンプルして描画。
   zoom=4（32×32）で追加した細かいディテール（サブピクセルの表現差）がプレビューで完全に失われる。

   ```javascript
   // exportAtBase() — 常に 8×8 に縮小
   return Array.from({length: baseH}, (_, r) =>
     Array.from({length: baseW}, (_, c) => grid[r * bh][c * bw]));
   ```

### 解決策: グリッド上にエフェクトを直接描画（Card Editor 方式）

Card Editor は既にこの方式を採用済み。`renderGrid()` 内でセル描画後に
`applyCanvasGradient`, `applyCanvasEmboss` 等の後処理パスを実行。

#### 変更内容

**A. グリッドにエフェクトを重ねる（renderGrid 改修）**

現在の `renderGrid()` はセルの色を `fillRect` で描画して終わり。
Card Editor と同様に、セル描画完了後にエフェクトオーバーレイパスを追加:

```javascript
function renderGrid() {
  // ... 既存のセル描画ループ ...

  // ★ 追加: エフェクトを格子線の下に描画
  // パーツ別エフェクト（改善1導入後）
  CELL_TYPES.forEach(ct => {
    if (ct.value === 0) return;
    applyCanvasGradient(gridCtx, ct.value, grid, resW(), resH(), cellPx, cellPx, 0, 0);
    applyCanvasEmboss(gridCtx, ct.value, grid, resW(), resH(), cellPx, cellPx, 0, 0);
    applyCanvasSparkle(gridCtx, ct.value, grid, resW(), resH(), cellPx, cellPx, 0, 0, fxAnimTime);
    // ... etc
  });

  // ... 既存の格子線描画 ...
}
```

**B. プレビューを「実解像度」で描画**

`renderPreview()` で `exportAtBase()` を使うのをやめ、
実際のグリッド `grid[INTERNAL][INTERNAL]` を直接描画する。
これで zoom=4（32×32）のディテールがプレビューにも反映される。

```javascript
function renderPreview() {
  const rw = resW(), rh = resH();
  const bw = blockW(), bh = blockH();
  // 実解像度でのグリッドデータを生成（zoomレベルを反映）
  const gridData = Array.from({length: rh}, (_, r) =>
    Array.from({length: rw}, (_, c) => grid[r * bh][c * bw]));

  renderPreviewToCanvas(document.getElementById('previewCanvas'), gridData, null, rw, rh);
  renderPreviewToCanvas(document.getElementById('prevMd'), gridData, null, rw, rh);
  renderPreviewToCanvas(document.getElementById('prevSm'), gridData, null, rw, rh);
}
```

**C. 右カラムのプレビューの役割変更**

プレビューの役割は「エフェクト確認」から「最終出力サイズの確認」に変更:
- L (240px): 実際に使われるサイズに近い表示
- M (80px): アプリ内の中サイズ表示のシミュレーション
- S (40px): アプリ内の小サイズ表示のシミュレーション

エフェクトはグリッド上で直接確認できるので、プレビューは純粋に
「このサイズで見た時にちゃんと見えるか？」の確認用になる。

**D. updatePreviewSizes の修正**

```javascript
function updatePreviewSizes() {
  const rw = resW(), rh = resH(); // ★ baseW/baseH ではなく実解像度を使う
  const maxDim = 240;
  const aspect = rw / rh;
  // ... 以下同じ
}
```

### 影響範囲

| 関数 | 変更内容 |
|------|---------|
| `renderGrid()` | エフェクトオーバーレイパスを追加 |
| `renderPreview()` | `exportAtBase()` → 実解像度グリッドデータに変更 |
| `renderPreviewToCanvas()` | エフェクトも描画するように拡張 |
| `updatePreviewSizes()` | `baseW/baseH` → `resW()/resH()` に変更 |
| `exportAtBase()` | Dart エクスポート用として残す（8×8 出力は引き続き必要） |

---

## 改善4: Gradient / Emboss の品質向上（Card Editor 知見の適用）

Card Editor で実装済みの Canvas API ベースの描画に合わせる。

### Gradient
現在: Body（val=1）にのみ `createLinearGradient` でパレットの light→dark を適用。
改善: パーツ別に適用可能に。各パーツの customColors を基準に light/dark を自動計算。

### Emboss
現在: `strokeStyle` + `lineWidth` で各セルの辺に白/黒ライン。
改善: Card Editor の `applyCanvasEmboss`（パーツ境界のみにエッジを描画する方式）に統一。
内部の同一パーツ間にはエッジを描かない → よりクリーンな3D感。

---

## 改善5: エフェクトをエクスポートに反映するオプション

現在: エフェクトはプレビュー表示のみ。PNGエクスポートにも反映されない。
改善: PNGエクスポート時に「エフェクト付きで出力」オプションを追加。

```
[PNG Download]  ☑ Include effects
```

GIFアニメーションエクスポートでは Blink や Sparkle のアニメーションも反映されると強力。
（GIF の各フレームで fxAnimTime を進めて描画）

---

## 改善6: エフェクトのカテゴリ分けUI

8種に増えるなら、フラットなリストではなく Card Editor 同様にカテゴリ分け:

```
── 基本 ──
☑ Outline  ☑ Gradient  ☑ Emboss [===70%]  □ Scanlines

── 生命感 ──
□ Blink  □ Glow  □ Sparkle

── 演出 ──
□ Ethereal  □ Holographic  □ Frost  □ Flame
```

---

## やりくりかぞくアプリへの波及効果

Frog Editor でエフェクト設定をエクスポートし、Flutter 側で読み込む連携。
**まばたきについては既にアプリ側に実装あり**（pixel_frog.dart）。
エディタ側で設定を追加することで、表情ごとにパラメータを変えられるようになる。

### エクスポート形式（Dart 配列コメント拡張）

```dart
// 8x8
// 0=empty(#F5F5F5), 1=body(#4CAF50), 2=eye(#1A1A1A), 3=mouth(#333333), 4=hi(#E8F5E9)
// fx: {"2":{"blink":true,"blink_min":3000,"blink_max":6000,"blink_dur":150,"blink_style":"lerp","glow":true},"4":{"sparkle":true}}
static const _expression = [
  [0, 0, 1, 1, 0, 1, 1, 0],
  ...
];
```

### Flutter 側の変更ポイント

1. **Dart インポート時**: `fx:` コメント行をパースして `Map<int, Map<String, dynamic>>` に変換
2. **_scheduleBlink**: ハードコーディングのパラメータを fx 設定で上書き
3. **新エフェクト（Glow, Sparkle）**: CustomPainter に Canvas API で描画追加
4. **後方互換**: `fx:` コメントが無い場合は現行のデフォルト値で動作（壊れない）

---

## 実装優先度

### Wave 1: 基盤（これが無いと何も始まらない）

| # | 内容 | 工数 | インパクト |
|---|------|------|----------|
| 1 | パーツ別エフェクトのアーキテクチャ導入 | 中 | 極大（全ての前提） |
| 2 | プレビュー/編集融合 + 32×32プレビュー修正 | 中 | 極大（長年のバグ修正 + UX刷新） |

### Wave 2: カエルが生きる

| # | 内容 | 工数 | インパクト |
|---|------|------|----------|
| 3 | Blink（まばたき設定UI + プレビュー） | 小 | 大（カエルに生命感） |
| 4 | Outline | 小 | 大（見た目の基礎品質UP） |
| 5 | Gradient / Emboss の品質向上 | 小 | 中（Canvas API ネイティブ化） |

### Wave 3: 表現力の拡充

| # | 内容 | 工数 | インパクト |
|---|------|------|----------|
| 6 | Glow（目の発光） | 小 | 中 |
| 7 | Sparkle（Card Editor からコピー） | 小 | 中（嬉しい表情に） |
| 8 | Ethereal（おばけカエル） | 中 | 小 |
| 9 | Holographic（Card Editor からコピー） | 小 | 小（子どもウケ） |

### Wave 4: エクスポート連携（やりくりかぞくアプリとの橋渡し）

| # | 内容 | 工数 | インパクト |
|---|------|------|----------|
| 10 | PNGエクスポートへのエフェクト反映 | 小 | 中 |
| 11 | Dart エクスポートへの fx: 設定埋め込み | 小 | 大（アプリ連携の起点） |
| 12 | GIFエクスポートへのアニメエフェクト反映 | 中 | 中（Blink付きGIF!） |
| 13 | Flutter PixelFrog ウィジェットの fx: 読み込み対応 | 中 | 大（表情ごとのまばたき設定がアプリに反映） |

**最優先: Wave 1（基盤2つ）→ Wave 2（Blink + Outline）**
Wave 4 まで到達すると、エディタ → エクスポート → アプリ表示 の完全パイプラインが完成する。
