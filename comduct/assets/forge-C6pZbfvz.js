import{W as Zt,A as On,S as Qt,P as en,E as tn,z as Rn,C as nn,H as jn,D as St,r as Bn,l as qe,M as Fe,B as Ze,t as qn,F as pt,V as De,J as Dn,R as Wn,K as Gn,G as Qe,O as Vn,w as Un,m as _n,u as Jn}from"./render-voxel-CjFacDZD.js";import{P as Ee,e as zt}from"./prefab-CaEyAM_B.js";import{r as on,E as Kn,c as an,a as ut,f as Tt,b as Pt,d as et,B as sn,e as Yn}from"./forge-edit-CffY6cQY.js";import{a as Xn}from"./touch-input-D1HYJrcI.js";import{r as Ht,i as Zn,b as tt,a as Qn}from"./tool-shelf-BcMkQAke.js";import{M as Ct}from"./dungeon-C-N4OV9J.js";import{D as xn,b as eo}from"./creator-auth-erio8f_q.js";import{o as At}from"./studio-CrCfk4Go.js";import{t as i,b as Ft,g as It,c as nt}from"./i18n-WI9UQT1N.js";import{d as ln,t as rn,T as We,a as dn,l as cn,b as to,c as ft,e as ht,P as pn,p as un,f as fn,g as ot}from"./tables-3Ch_nF30.js";import{T as yn}from"./tables-doc-BQ8MJfXy.js";import"./voxmodel-DIWseshL.js";import"./schemas-BBGxizon.js";import"./preload-helper-Dp1pzeXC.js";import"./monster-oRuueH1-.js";const no=`<!-- ============================================================
     §studio W1 — 鍛冶場パネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 forge.html body の単一実体（二重持ちゼロ）：スタジオも旧 forge.html（stub）も
     この1枚を mount する。中身は §18 P2〜M2 の従来 markup そのまま。
     唯一の改変＝#app の高さ 100vh→100%（host の中で生きる＝standalone では
     html/body の height:100% 連鎖で従来と同寸）。
     ============================================================ -->
<style>
  /* ============================================================
     §18 クリエイター P2（DESIGN-creator §8）
     ・第一要件＝迷わず描ける：現在筆が常に見える・ドラッグ塗り・右クリック消し・
       矩形/塗りつぶし・undo/redo・hover ヒント・カメラ操作の明示・空グリッド誘導
     ・描画＝render-voxel（buildPrefabPreview/buildSample/buildActorBody）＝
       サムネも盤もゲームと同一実体（ドリフト無し）
     ・左＝パレット＋メタ＋solvability／中＝3D 編集面／右＝ライブラリ（truth/future）
     ・§tool-i18n：UI 文字列は data-i18n / t()（tool.* キー・6言語）。ja は原文と同文。
     ============================================================ */
  :root {
    --bg: #12161f; --panel: #1a2130; --line: #2b3547;
    --text: #e8edf5; --muted: #8b96a8; --accent: #5b9bff; --tint: #223048;
    --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e; --erase: #e06a5a;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--bg); color: var(--text); font: 14px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  /* §M4 モード（部屋/街）＝forge 1枚の中のタブ（DESIGN-maker §3「新ページを乱造しない」） */
  #forgeroot { display: flex; flex-direction: column; height: 100%; }
  #fmodes { display: flex; gap: 6px; align-items: center; padding: 6px 10px; border-bottom: 1px solid var(--line); background: var(--panel); flex: 0 0 auto; }
  #fmodes .cap { color: var(--muted); font-size: 10px; }
  #app { display: flex; flex: 1; min-height: 0; }
  /* §M0 full-touch（DESIGN-tools-mobile §1-d/§2）：狭幅＝上チップ行・盤最大・下 hotbar・シート召喚。
     パネル（#topbar/#side/#loop）は JS がシートへ移動する＝DOM は同一実体（リスナ/i18n 無傷）。 */
  #side { width: 300px; min-width: 260px; border-right: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 9px; }
  #side > * { flex: 0 0 auto; } /* overflow 付きの子（モンスター一覧）が flex-shrink で潰れない */
  #side h1 { font-size: 15px; }
  .sub { color: var(--muted); font-size: 11px; }
  #side h2, #loop h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin-top: 3px; }
  button, select, input[type="text"], input[type="number"] { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  input[type="text"], input[type="number"] { cursor: text; }
  button:hover { border-color: var(--accent); }
  button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  button:disabled { opacity: 0.45; cursor: not-allowed; }
  /* パレット＝サムネ付きの筆グリッド。選択中は青枠＋名前が主張＝「いま何の筆か」を常時可視化 */
  .pal { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .pal .swatch { position: relative; border: 2px solid var(--line); border-radius: 8px; background: var(--panel); cursor: pointer; padding: 0 0 2px; text-align: center; }
  .pal .swatch:hover { border-color: #4a648f; }
  .pal .swatch.on { border-color: var(--accent); background: var(--tint); box-shadow: 0 0 0 1px var(--accent); }
  .pal .swatch img { width: 100%; aspect-ratio: 1; display: block; border-radius: 6px 6px 0 0; background: #0d1117; }
  .pal .swatch .nm { font-size: 10px; line-height: 1.25; padding: 1px 2px 0; overflow-wrap: anywhere; }
  .pal .swatch .kbd { position: absolute; top: 2px; left: 4px; font-size: 9px; color: var(--muted); font-family: ui-monospace, Menlo, monospace; background: rgba(13,17,23,0.7); border-radius: 3px; padding: 0 3px; }
  .pal .swatch .glyph { width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-size: 26px; background: #0d1117; border-radius: 6px 6px 0 0; }
  .pal.mons { max-height: 168px; overflow-y: auto; }
  #palopts { display: none; gap: 5px; align-items: center; flex-wrap: wrap; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; font-size: 11px; }
  #palopts.show { display: flex; }
  #palopts .chip { width: 22px; height: 22px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; }
  #palopts .chip.on { border-color: #fff; box-shadow: 0 0 0 1px var(--accent); }
  .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; }
  .kv .lbl { color: var(--muted); font-size: 11px; min-width: 3.2em; }
  .kv input[type="text"] { flex: 1; min-width: 0; }
  .kv input.num { width: 3.6em; }
  /* solvability 判定パネル */
  #solv { display: flex; flex-direction: column; gap: 3px; font-size: 11px; }
  #solv .s-ok { color: var(--ok); } #solv .s-warn { color: var(--warn); } #solv .s-err { color: var(--err); }
  /* 中央＝ステージ */
  #stagewrap { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  #topbar { display: flex; align-items: center; gap: 8px; padding: 7px 12px; border-bottom: 1px solid var(--line); background: var(--panel); flex-wrap: wrap; }
  #nowtool { display: flex; align-items: center; gap: 7px; background: var(--tint); border: 1px solid var(--accent); border-radius: 8px; padding: 3px 10px 3px 4px; font-size: 12px; }
  #nowtool img { width: 26px; height: 26px; border-radius: 5px; background: #0d1117; }
  #nowtool b { color: #cfe3ff; }
  .tgroup { display: flex; gap: 4px; align-items: center; }
  .tgroup .cap { color: var(--muted); font-size: 10px; margin-right: 2px; }
  /* §tool-i18n：6言語ピッカー（ゲームの ☰ と同じ #langmode 流儀） */
  .langpick { margin-left: auto; display: inline-flex; align-items: center; gap: 4px; font-size: 12px; }
  #langmode { max-width: 11em; }
  #stage { flex: 1; position: relative; min-height: 0; }
  #stage canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  /* 空グリッドの誘導（最初の1筆で消える） */
  #guide { position: absolute; left: 50%; top: 14%; transform: translateX(-50%); background: rgba(18,22,31,0.88); border: 1px solid var(--accent); border-radius: 12px; padding: 12px 18px; font-size: 13px; line-height: 1.9; pointer-events: none; z-index: 5; box-shadow: 0 6px 24px rgba(0,0,0,0.45); max-width: min(92%, 560px); }
  #guide b { color: #cfe3ff; }
  #foot { border-top: 1px solid var(--line); background: var(--panel); padding: 7px 12px; font-size: 12px; color: var(--muted); display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
  #hoverhint { color: #cfe3ff; min-width: 16em; }
  #msg { color: var(--ok); }
  #legend { margin-left: auto; font-size: 11px; }
  #legend b { color: var(--text); font-weight: 600; }
  /* 右＝ライブラリ */
  #loop { width: 310px; min-width: 260px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  .card.sel { border-color: var(--accent); }
  .card .id { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .card .who { font-size: 10px; color: var(--warn); }
  .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .card img.pv { width: 64px; height: 64px; border-radius: 6px; background: #0d1117; float: right; }
  .card .head { display: flex; gap: 8px; align-items: flex-start; }
  .card .head .info { flex: 1; min-width: 0; }
  .live { font-size: 11px; color: var(--muted); }
  .live b { color: var(--ok); }
  details.hist summary { cursor: pointer; font-size: 11px; color: var(--muted); }
  /* ⭐2段確認（決定⑥）：promote タップ→確認バー→確定。PC/モバイル共通 */
  .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid var(--warn); border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  .confirmbar span { color: var(--warn); }
  /* ── M0 モバイル部品（デスクトップでは非表示） ───────────────────────── */
  #mchips, #hotbar, .sheet, #veil, #mtoast { display: none; }
  #mchips { gap: 6px; align-items: center; padding: 6px 8px; border-bottom: 1px solid var(--line); background: var(--panel); overflow-x: auto; flex: 0 0 auto; }
  #mchips button { min-height: 44px; min-width: 44px; font-size: 14px; flex: 0 0 auto; }
  #mchips .mchip.ok { color: var(--ok); border-color: var(--ok); }
  #mchips .mchip.warn { color: var(--warn); border-color: var(--warn); }
  #mchips .mchip.err { color: var(--err); border-color: var(--err); font-weight: 700; }
  #mchips button.on { background: var(--tint); border-color: var(--accent); }
  .mnow { display: inline-flex; align-items: center; gap: 5px; background: var(--tint); border: 1px solid var(--accent); border-radius: 8px; padding: 3px 8px 3px 4px; font-size: 12px; flex: 0 0 auto; max-width: 34vw; }
  .mnow img { width: 30px; height: 30px; border-radius: 5px; background: #0d1117; }
  .mnow b { color: #cfe3ff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  #hotbar { gap: 6px; align-items: stretch; padding: 6px 8px calc(6px + env(safe-area-inset-bottom)); border-top: 1px solid var(--line); background: var(--panel); overflow-x: auto; flex: 0 0 auto; }
  #hotbar .hshape { display: flex; gap: 4px; align-items: stretch; padding-right: 6px; border-right: 1px solid var(--line); }
  #hotbar .hshape button, #hotbar > button { min-width: 44px; min-height: 52px; font-size: 12px; flex: 0 0 auto; }
  #hrecent { display: flex; gap: 6px; }
  .hswatch { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px; min-width: 54px; border: 2px solid var(--line); border-radius: 8px; background: var(--panel); padding: 2px 3px; }
  .hswatch.on { border-color: var(--accent); background: var(--tint); box-shadow: 0 0 0 1px var(--accent); }
  .hswatch img, .hswatch .glyph { width: 32px; height: 32px; border-radius: 5px; background: #0d1117; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .hswatch .nm { font-size: 9px; max-width: 62px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  #mtoast { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); background: rgba(18, 22, 31, 0.92); border: 1px solid var(--line); border-radius: 8px; padding: 6px 12px; font-size: 12px; z-index: 6; max-width: 92%; }
  #veil { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 29; }
  .sheet { position: fixed; left: 0; right: 0; bottom: 0; z-index: 30; background: var(--bg); border-top: 1px solid var(--accent); border-radius: 14px 14px 0 0; max-height: 78vh; max-height: 78dvh; flex-direction: column; box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.5); }
  .sheet .sheethead { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--line); flex: 0 0 auto; }
  .sheet .sheethead b { color: #cfe3ff; }
  .sheet .sheethead button { min-width: 44px; min-height: 38px; }
  .sheet .sheetbody { overflow-y: auto; min-height: 0; }
  .sheet #side { width: auto; min-width: 0; border-right: none; }
  .sheet #loop { width: auto; min-width: 0; border-left: none; }
  .sheet #topbar { border-bottom: 1px solid var(--line); }
  #mlegend { display: none; position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%); background: rgba(18, 22, 31, 0.85); border: 1px solid var(--line); border-radius: 8px; padding: 5px 10px; font-size: 10.5px; color: var(--muted); pointer-events: none; z-index: 5; max-width: 94%; text-align: center; }
  @media (max-width: 900px) {
    #mchips, #hotbar { display: flex; }
    #mchips { padding-top: calc(6px + env(safe-area-inset-top)); } /* notch 側（viewport-fit=cover） */
    #foot { display: none; }
    #guide[style*="block"] ~ #mlegend { display: block; }
    #stage { touch-action: none; }
    #stage canvas { touch-action: none; }
  }
  /* ── §M4 街モード（A1+F9）：左=道具/詳細/リンタ・中=広場盤（22×14）・右=会話/棚 ── */
  #townapp { display: none; flex: 1; min-height: 0; }
  #townapp.on { display: flex; }
  #tside { width: 300px; min-width: 260px; border-right: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 9px; }
  #tside h1 { font-size: 15px; }
  #tside h2, #tloop h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin-top: 3px; }
  #tmain { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  #thead { display: flex; gap: 8px; align-items: center; padding: 7px 12px; border-bottom: 1px solid var(--line); background: var(--panel); flex-wrap: wrap; }
  #tgridwrap { flex: 1; overflow: auto; padding: 14px; min-height: 0; }
  #tgrid { display: grid; grid-template-columns: repeat(22, 30px); grid-auto-rows: 30px; gap: 1px; width: max-content; background: #0d1117; border: 1px solid var(--line); border-radius: 8px; padding: 3px; }
  .tc { position: relative; background: #1c2432; border-radius: 3px; display: flex; align-items: center; justify-content: center; font-size: 15px; line-height: 1; cursor: pointer; user-select: none; }
  .tc:hover { outline: 1px solid var(--accent); z-index: 2; }
  .tc.road { background: #33392b; }
  .tc.bld { font-size: 12px; }
  .tc.sel { outline: 2px solid var(--accent); z-index: 3; }
  .tc .npcdot { position: absolute; right: 2px; top: 2px; width: 7px; height: 7px; border-radius: 50%; border: 1px solid #0d1017; }
  .tc .door { position: absolute; font-size: 10px; left: 1px; bottom: 0; }
  #tfoot { border-top: 1px solid var(--line); background: var(--panel); padding: 7px 12px; font-size: 12px; color: var(--muted); display: flex; gap: 14px; flex-wrap: wrap; }
  #tmsg { color: var(--ok); }
  #tloop { width: 330px; min-width: 280px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  #tpal { display: flex; flex-wrap: wrap; gap: 5px; }
  #tpal button { font-size: 12px; }
  #tpalopts { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; font-size: 11px; }
  #tpalopts .chip { width: 22px; height: 22px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; }
  #tpalopts .chip.on { border-color: #fff; box-shadow: 0 0 0 1px var(--accent); }
  #tdetail, #tlint { display: flex; flex-direction: column; gap: 5px; font-size: 12px; }
  #tlint .warn { color: var(--warn); } #tlint .ok { color: var(--ok); }
  #tdetail textarea, #tdlg textarea { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 8px; font: inherit; font-size: 12px; min-height: 3.2em; resize: vertical; }
  #tdlg { display: none; flex-direction: column; gap: 8px; background: var(--panel); border: 1px solid var(--accent); border-radius: 10px; padding: 10px; }
  #tdlg.on { display: flex; }
  #tdlg .node { background: #232c3e; border: 1px solid var(--line); border-radius: 8px; padding: 7px; display: flex; flex-direction: column; gap: 5px; font-size: 12px; }
  #tdlg .node .nid { font-family: ui-monospace, Menlo, monospace; color: var(--muted); font-size: 10px; }
  #tdlg .chrow { display: flex; gap: 4px; align-items: center; }
  #tdlg .chrow input[type="text"] { flex: 1; min-width: 0; }
  #tpv { background: #101722; border: 1px solid var(--line); border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 6px; font-size: 12px; }
  #tpv .pvsay { color: #cfe3ff; }
  #tpv .pvend { color: var(--muted); }
  @media (max-width: 900px) {
    #townapp.on { flex-direction: column; overflow-y: auto; }
    #tside, #tloop { width: auto; min-width: 0; border: none; border-bottom: 1px solid var(--line); }
    #tmain { min-height: 300px; flex: 0 0 auto; }
    #tgridwrap { overflow-x: auto; }
  }
  /* ── §M3 pin/演出モード（A3）：左=pin 台帳/リンタ・中=出現プレビュー＋下見・右=棚 ── */
  #pinapp { display: none; flex: 1; min-height: 0; }
  #pinapp.on { display: flex; }
  #pside { width: 320px; min-width: 280px; border-right: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 9px; }
  #pside h1 { font-size: 15px; }
  #pside h2, #ploop h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin-top: 3px; }
  #ppins { display: flex; flex-direction: column; gap: 8px; }
  .pincard { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 5px; font-size: 12px; cursor: pointer; }
  .pincard.sel { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .pincard .row { display: flex; gap: 6px; align-items: center; }
  .pincard .row select { flex: 1; min-width: 0; }
  .pincard textarea { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 8px; font: inherit; font-size: 12px; min-height: 2.4em; resize: vertical; }
  #plint { display: flex; flex-direction: column; gap: 4px; font-size: 11px; }
  #plint .warn { color: var(--warn); } #plint .ok { color: var(--ok); }
  #pmain { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  #phead { display: flex; gap: 8px; align-items: center; padding: 7px 12px; border-bottom: 1px solid var(--line); background: var(--panel); flex-wrap: wrap; }
  #pthemes { display: flex; gap: 5px; align-items: center; }
  #pthemes .chip { width: 22px; height: 22px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; }
  #pthemes .chip.on { border-color: #fff; box-shadow: 0 0 0 1px var(--accent); }
  #pbody { flex: 1; overflow: auto; padding: 12px; display: flex; gap: 16px; flex-wrap: wrap; align-content: flex-start; }
  #ppv { display: flex; flex-direction: column; gap: 2px; min-width: 280px; }
  .pvrow { display: flex; gap: 6px; align-items: center; font-size: 12px; padding: 2px 6px; border-radius: 5px; }
  .pvrow.hit { background: var(--tint); }
  .pvrow .d { color: var(--muted); font-family: ui-monospace, Menlo, monospace; min-width: 2.6em; }
  .pvrow .none { color: #3a4356; }
  .pbadge { border: 1px solid var(--accent); border-radius: 6px; background: var(--panel); font-size: 11px; padding: 2px 7px; }
  .pbadge.sel { background: var(--tint); box-shadow: 0 0 0 1px var(--accent); }
  #ppf { display: flex; flex-direction: column; gap: 6px; min-width: 200px; }
  .pfgrid { display: grid; grid-auto-rows: 18px; gap: 1px; background: #0d1117; border: 1px solid var(--line); border-radius: 6px; padding: 3px; width: max-content; }
  .pfgrid .pc { border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 10px; line-height: 1; color: #dfe7f2; }
  .pfgrid .pc.port { outline: 1px solid var(--ok); }
  #pfoot { border-top: 1px solid var(--line); background: var(--panel); padding: 7px 12px; font-size: 12px; color: var(--muted); display: flex; gap: 14px; flex-wrap: wrap; }
  #pmsg { color: var(--ok); }
  #ploop { width: 330px; min-width: 280px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  @media (max-width: 900px) {
    #pinapp.on { flex-direction: column; overflow-y: auto; }
    #pside, #ploop { width: auto; min-width: 0; border: none; border-bottom: 1px solid var(--line); }
    #pmain { min-height: 300px; flex: 0 0 auto; }
  }
</style>
<div id="forgeroot">
<div id="fmodes">
  <span class="cap" data-i18n="tool.forge.modeCap">モード</span>
  <button id="modeRoom" class="on" data-i18n="tool.forge.modeRoom">🧱 部屋</button>
  <button id="modeTown" data-i18n="tool.forge.modeTown">🏘 街</button>
  <button id="modePin" data-i18n="tool.forge.modePin">📌 pin/演出</button>
</div>
<div id="app">
  <div id="side">
    <h1><span data-i18n="tool.forge.h1">鍛冶場</span> <span class="sub" data-i18n="tool.forge.h1sub">構造エディタ P2</span></h1>
    <div class="sub" data-i18n-html="tool.forge.intro">描く→<b>提案（future）</b>を保存→<b>⭐promote</b> で truth へ→生成がスタンプ→実機で歩ける。盤もサムネもゲームと同一実体で描画。</div>
    <h2 data-i18n="tool.forge.palTerrain">地形の筆</h2>
    <div class="pal" id="palTerrain"></div>
    <div id="palopts"></div>
    <h2 data-i18n="tool.forge.palProps">置物の筆</h2>
    <div class="pal" id="palProps"></div>
    <h2 data-i18n="tool.forge.palMisc">接続口・消しゴム</h2>
    <div class="pal" id="palMisc"></div>
    <h2><span data-i18n="tool.forge.palMons">モンスター</span> <span class="sub" data-i18n="tool.forge.palMonsSub">（生成が読む＝実機で湧く。おまかせ=深度で選ばれる）</span></h2>
    <div class="pal mons" id="palSpawns"></div>
    <h2 data-i18n="tool.forge.prefabHead">プレハブ</h2>
    <div class="kv"><span class="lbl">id</span><input type="text" id="pid" /></div>
    <div class="kv"><span class="lbl" data-i18n="tool.common.name">名前</span><input type="text" id="pname" /></div>
    <div class="kv"><span class="lbl" data-i18n="tool.common.size">大きさ</span>
      <input type="number" id="pw" class="num" min="2" max="18" /> ×
      <input type="number" id="pd" class="num" min="2" max="14" />
      <button id="applySize" data-i18n="tool.forge.applySize">寸法を変える</button>
    </div>
    <div class="kv"><span class="lbl" data-i18n="tool.forge.depth">深度</span><input type="text" id="pdepth" style="width:5em" />
      <span class="lbl" data-i18n="tool.forge.weight">重み</span><input type="number" id="pweight" class="num" min="1" max="9" /></div>
    <div class="kv"><span class="lbl">tags</span><input type="text" id="ptags" placeholder="room arena shrine …" /></div>
    <div class="kv sub"><label><input type="checkbox" id="cPorts" /> <span data-i18n="tool.forge.cPorts">port 相互到達を生成に要求</span></label></div>
    <div class="kv sub"><label><input type="checkbox" id="cHaz" /> <span data-i18n="tool.forge.cHaz">hazard は迂回可能（宣言）</span></label></div>
    <h2 data-i18n="tool.forge.solvHead">solvability（promote 前の判定）</h2>
    <div id="solv"></div>
    <button class="big" id="save" data-i18n="tool.forge.save">🔨 提案として保存（future）</button>
    <div class="sub" id="savenote" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</div>
  </div>
  <div id="stagewrap">
    <div id="topbar">
      <div id="nowtool"><img id="nowimg" alt="" /><span><span data-i18n="tool.common.nowBrush">いまの筆：</span><b id="nowname">床</b><span class="sub" id="nowshape">（筆）</span></span></div>
      <div class="tgroup"><span class="cap" data-i18n="tool.common.shapeCap">かたち</span>
        <button id="shBrush" class="on" data-i18n-title="tool.forge.shBrushTitle" title="1マスずつ塗る（ドラッグ可）"><span data-i18n="tool.common.shape.brush">筆</span> <span class="sub">B</span></button>
        <button id="shRect" data-i18n-title="tool.forge.shRectTitle" title="対角にドラッグして長方形に敷く"><span data-i18n="tool.common.shape.rect">矩形</span> <span class="sub">R</span></button>
        <button id="shFill" data-i18n-title="tool.forge.shFillTitle" title="同じ素材の続く範囲をまとめて塗る"><span data-i18n="tool.common.shape.fill">塗りつぶし</span> <span class="sub">F</span></button>
      </div>
      <div class="tgroup"><span class="cap" data-i18n="tool.common.undoCap">やり直し</span>
        <button id="undo" title="⌘Z / Ctrl+Z" data-i18n="tool.common.undo">↶ 戻す</button>
        <button id="redo" title="⌘⇧Z / Ctrl+Y" data-i18n="tool.common.redo">↷ 進む</button>
      </div>
      <div class="tgroup"><span class="cap" data-i18n="tool.forge.camCap">カメラ</span>
        <button id="camL" data-i18n-title="tool.forge.camL" title="左へ回す（←）">⟲</button>
        <button id="camR" data-i18n-title="tool.forge.camR" title="右へ回す（→）">⟳</button>
        <button id="camIn" data-i18n-title="tool.forge.camIn" title="寄る（ホイール↑）">＋</button>
        <button id="camOut" data-i18n-title="tool.forge.camOut" title="引く（ホイール↓）">−</button>
      </div>
      <div class="tgroup">
        <button id="newpf" data-i18n="tool.common.new" data-i18n-title="tool.forge.newTitle" title="いまの寸法で空のプレハブから">新規</button>
        <button id="help" data-i18n-title="tool.common.helpTitle" title="操作の説明をもう一度出す">？</button>
      </div>
      <span class="langpick worldpick">🗺<select id="worldmode" title="World / ワールド"></select></span>
      <span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span>
    </div>
    <div id="mchips">
      <button id="mSolv" class="mchip ok" data-i18n-title="tool.forge.mSolvTitle" title="生成に耐えるか（タップで詳細）">✓</button>
      <span class="mnow"><img id="mNowImg" alt="" /><b id="mNowName">床</b></span>
      <button id="mUndo" title="undo">↶</button>
      <button id="mRedo" title="redo">↷</button>
      <button id="mFit" data-i18n-title="tool.forge.mFit" title="全体が見える距離に戻す">⛶</button>
      <button id="mReach" data-i18n-title="tool.forge.mReach" title="接続口から届かない床を薄赤で示す">🟥</button>
      <button id="mSave" data-i18n="tool.forge.mSaveShort" data-i18n-title="tool.forge.mSolvTitle" title="生成に耐えるか（タップで詳細）">🔨 保存</button>
      <button id="mMenu" data-i18n-title="tool.forge.mMenu" title="道具と保存">☰</button>
      <button id="mShelf" data-i18n-title="tool.forge.mShelf" title="棚（future / truth）">📚</button>
    </div>
    <div id="stage">
      <div id="guide" data-i18n-html="tool.forge.guide">
        <b>① 左のパレットで筆を選ぶ</b>（いまの筆は左上に常時表示）<br />
        <b>② 盤を左クリック/ドラッグ</b>＝塗る　<b>右クリック</b>＝消す<br />
        <b>③ 背景をドラッグ</b>＝回す　<b>ホイール</b>＝寄る<br />
        描けたら左下の <b>🔨 保存</b> → 右の一覧で <b>⭐promote</b> → 実機に出る
      </div>
      <div id="mlegend" data-i18n="tool.forge.mLegend">1本指=描く｜2本指=回す・寄る｜2本指タップ=戻す・3本指タップ=進む｜長押し=マス調べ</div>
      <div id="mtoast"></div>
    </div>
    <div id="foot">
      <span id="hoverhint">—</span>
      <span id="msg"></span>
      <span id="legend" data-i18n-html="tool.forge.legend"><b>左ドラッグ</b>=塗る｜<b>右クリック</b>=消す｜<b>背景ドラッグ/Space+ドラッグ</b>=回す｜<b>ホイール</b>=寄る｜<b>⌘Z</b>=戻す</span>
    </div>
    <div id="hotbar">
      <div class="hshape">
        <button id="mShB" class="on" data-i18n="tool.common.shape.brush">筆</button>
        <button id="mShR" data-i18n="tool.common.shape.rect">矩形</button>
        <button id="mShF" data-i18n="tool.common.shape.fill">塗りつぶし</button>
      </div>
      <div id="hrecent"></div>
      <button id="hMore" data-i18n-title="tool.forge.mPalette" title="パレットをすべて見る">…</button>
    </div>
  </div>
  <div id="loop">
    <h2><span data-i18n="tool.common.futureHead">提案（future）</span><span class="live" id="live">·</span></h2>
    <div id="proposals"></div>
    <h2 data-i18n="tool.forge.truthHead">truth ライブラリ（data/prefabs/）</h2>
    <div id="truth"></div>
    <div class="sub" data-i18n="tool.common.watchNote">ファイル変更は watch（150ms debounce＋内容署名 dedupe）で自動反映＝AI がファイルで future を書いてもここに現れる。編集中の盤は reload されない（状態保持）。</div>
  </div>
</div>
<!-- §M4 街モード（A1+F9）：街レイアウト＋NPC設置＋会話 authoring。truth＝tables.town（cosmetic） -->
<div id="townapp">
  <div id="tside">
    <h1><span data-i18n="tool.town.h1">街モード</span> <span class="sub" data-i18n="tool.town.h1sub">A1+F9・広場 22×14</span></h1>
    <div class="sub" data-i18n-html="tool.town.intro">建物・門・NPC を置き、台詞と分岐会話を書く→<b>提案（future）</b>→<b>⭐promote</b> で truth へ。NPC/会話は cosmetic＝実機の乱数・状態遷移は1粒も変えない。</div>
    <h2 data-i18n="tool.town.palHead">道具</h2>
    <div id="tpal"></div>
    <div id="tpalopts"></div>
    <h2 data-i18n="tool.town.detailHead">選択中</h2>
    <div id="tdetail"><div class="sub" data-i18n="tool.town.detailIdle">盤のマスをタップ＝道具を使う／既にある物をタップ＝選択</div></div>
    <h2 data-i18n="tool.town.lintHead">街リンタ</h2>
    <div id="tlint"></div>
    <div class="kv"><input type="text" id="tlabel" data-i18n-ph="tool.town.saveLabelPh" placeholder="提案ラベル（例：夜市の街）" /></div>
    <button class="big" id="tsave" data-i18n="tool.town.save">🏘 提案として保存（future）</button>
    <div class="sub" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</div>
  </div>
  <div id="tmain">
    <div id="thead">
      <span class="sub" data-i18n="tool.town.nameLabel">街の名</span><input type="text" id="tname" style="width:11em" />
      <button id="tload" data-i18n="tool.town.loadTruth">⟳ truth を読み込む</button>
      <span class="live" id="tlive">·</span>
    </div>
    <div id="tgridwrap"><div id="tgrid"></div></div>
    <div id="tfoot"><span id="thover">—</span><span id="tmsg"></span></div>
  </div>
  <div id="tloop">
    <div id="tdlg">
      <h2><span id="tdlghead" data-i18n="tool.town.dlgHeadIdle">会話</span> <button id="tdlgclose" style="float:right" data-i18n="tool.town.dlgClose">✕ 閉じる</button></h2>
      <div id="tdlgnodes"></div>
      <button id="tdlgaddnode" data-i18n="tool.town.addNode">＋ノード</button>
      <h2 data-i18n="tool.town.pvHead">▶ 通し読み（プレビュー）</h2>
      <div class="kv"><span class="lbl">flags</span><input type="text" id="tpvflags" data-i18n-ph="tool.town.pvFlagsPh" placeholder="ruin-gate, …" /></div>
      <div class="kv"><span class="lbl">items</span><input type="text" id="tpvitems" placeholder="breturn, …" /></div>
      <div id="tpv"></div>
    </div>
    <h2><span data-i18n="tool.town.futureHead">提案（future）</span><span class="live" id="tplive">·</span></h2>
    <div id="tprops"></div>
    <h2 data-i18n="tool.town.truthHead">truth（tables.town）</h2>
    <div id="ttruth"></div>
  </div>
</div>
<!-- §M3 pin/演出モード（A3）：固定部屋（prefab）＋出現ルール＋入場口上。truth＝tables.pins（生成に効く＝欄なし時は現行バイト同値の柵） -->
<div id="pinapp">
  <div id="pside">
    <h1><span data-i18n="tool.pin.h1">pin/演出モード</span> <span class="sub" data-i18n="tool.pin.h1sub">A3・固定部屋</span></h1>
    <div class="sub" data-i18n-html="tool.pin.intro">プレハブに「この深度で<b>必ず</b>」の pin を打つ→<b>提案（future）</b>→<b>⭐promote</b> で truth へ。pin 欄なし＝生成は現行と厳密同一（乱数を1粒も動かさない）。</div>
    <h2 data-i18n="tool.pin.listHead">pin 一覧</h2>
    <div id="ppins"></div>
    <button id="paddpin" data-i18n="tool.pin.add">＋ pin を打つ</button>
    <h2 data-i18n="tool.pin.lintHead">pin リンタ</h2>
    <div id="plint"></div>
    <div class="kv"><input type="text" id="plabel" data-i18n-ph="tool.pin.saveLabelPh" placeholder="提案ラベル（例：5Fの祠は必ず）" /></div>
    <button class="big" id="psave" data-i18n="tool.pin.save">📌 提案として保存（future）</button>
    <div class="sub" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</div>
  </div>
  <div id="pmain">
    <div id="phead">
      <span class="sub" data-i18n="tool.pin.pvHead">出現プレビュー（1〜24F）＝生成と同じ読み</span>
      <div id="pthemes"></div>
      <button id="pload" data-i18n="tool.pin.loadTruth">⟳ truth を読み込む</button>
      <span class="live" id="plive">·</span>
    </div>
    <div id="pbody">
      <div id="ppv"></div>
      <div id="ppf"></div>
    </div>
    <div id="pfoot"><span id="pmsg"></span></div>
  </div>
  <div id="ploop">
    <h2><span data-i18n="tool.pin.futureHead">提案（future）</span><span class="live" id="pplive">·</span></h2>
    <div id="pprops"></div>
    <h2 data-i18n="tool.pin.truthHead">truth（tables.pins）</h2>
    <div id="ptruth"></div>
  </div>
</div>
</div>
<!-- M0 モバイル：シート召喚（パネル DOM は JS がここへ移動＝同一実体・リスナ無傷） -->
<div id="veil"></div>
<div id="sheetSide" class="sheet">
  <div class="sheethead"><b data-i18n="tool.forge.mMenu">道具と保存</b><button class="shclose">✕</button></div>
  <div class="sheetbody" id="sheetSideBody"></div>
</div>
<div id="sheetLoop" class="sheet">
  <div class="sheethead"><b data-i18n="tool.forge.mShelf">棚（future / truth）</b><button class="shclose">✕</button></div>
  <div class="sheetbody" id="sheetLoopBody"></div>
</div>
`,x=A=>A.replace(/[&<>"]/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[j]),hn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),oo=A=>A===xn?"comduct":A.replace("/","--"),Ge={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},ao={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},mn={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},vn={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},io=["human","elf","dwarf","gnome","halffoot"],so=["talker","guide","shop","equip","craft","heal","recruit"];function lo(A,j){const{wapi:U,postJson:ve}=j.api,a=s=>A.querySelector(`#${s}`);function S(s,n=!1){const f=a("tmsg");f.textContent=s,f.style.color=n?"#ffd166":"#7fd17f",window.setTimeout(()=>{f.textContent===s&&(f.textContent="")},5e3)}let u=ln(),B="select",G="shop",ie=3,p=2,$="plain",g=null,q=null,se=null,F=null,re=!1,de="";const ne="cdForgeTownM4";function z(){try{sessionStorage.setItem(ne,JSON.stringify({v:1,world:j.world(),plan:u,tool:B,dirty:re,label:a("tlabel").value}))}catch{}}function oe(){try{const s=sessionStorage.getItem(ne);if(!s)return!1;const n=JSON.parse(s);return n.v!==1||n.world!==j.world()?!1:(u=We.parse(n.plan),B=n.tool??"select",re=!!n.dirty,n.label&&(a("tlabel").value=n.label),!0)}catch{return!1}}function I(){re=!0}function xe(s,n){u=s,n!=null&&n.markDirty&&I(),O(),z()}async function J(){var s,n,f,c;try{const h=await fetch(U("/api/tables/truth"));if(h.ok){const r=(f=(n=(s=(await h.json()).docs)==null?void 0:s[0])==null?void 0:n.tables)==null?void 0:f.town;if(r!==void 0)return{p:We.parse(r),src:"truth"}}}catch{}try{const h=await fetch(U(`/packs/${oo(j.world())}.json`));if(h.ok){const r=(c=(await h.json()).tables)==null?void 0:c.town;if(r!==void 0)return{p:We.parse(r),src:"pack"}}}catch{}return null}async function ee(s=!1){if(re&&!s)return;let n=null;try{n=await J()}catch(f){S(i("tool.town.zodFail",{msg:f.message}),!0);return}n?(de=i("tool.town.truthMeta",{src:n.src,b:n.p.buildings.length,n:n.p.npcs.length,d:Object.keys(n.p.dialogs).length}),re=!1,g=null,se=null,xe(n.p)):(de=i("tool.town.truthNew"),re=!1,xe(ln())),Ce()}const fe=a("tgrid");function he(s,n){let f="tc",c="",h=`${s},${n}`,r=!1;u.decos.some(y=>y.x===s&&y.y===n&&y.kind==="road")&&(f+=" road");const H=u.buildings.findIndex(y=>s>=y.x&&s<y.x+y.w&&n>=y.y&&n<y.y+y.d),Q=[...u.decos].reverse().find(y=>y.x===s&&y.y===n&&y.kind!=="road"),me=u.holes.findIndex(y=>y.x===s&&y.y===n),_=u.npcs.find(y=>y.x===s&&y.y===n);if(H>=0){const y=u.buildings[H];return f+=" bld",c=s===y.x+(y.w>>1)&&n===y.y+(y.d>>1)?Ge[y.facility]:"",h=`${i(`fac.${y.facility}`)} (${y.facility})`,r=(g==null?void 0:g.kind)==="building"&&g.i===H,{cls:f+(r?" sel":""),html:`<span style="position:absolute;inset:0;background:${ao[y.facility]};border-radius:3px"></span><span style="position:relative">${c}</span>`,title:h,selHit:r}}if(Q){c=mn[Q.kind]??"",h=i(`tool.town.tool.${Q.kind==="road"?"road":Q.kind}`);const y=u.decos.lastIndexOf(Q);r=(g==null?void 0:g.kind)==="deco"&&g.i===y}if(me>=0){const y=u.holes[me];c=`<b style="color:${vn[y.element??"plain"]}">▼</b>`,h=y.element?i(`elem.${y.element}`):i("tool.town.holePlain"),r=(g==null?void 0:g.kind)==="hole"&&g.i===me}return u.buildings.find(y=>y.door.x===s&&y.door.y===n)&&(c+='<span class="door">🚪</span>'),_&&(c=`🧍<span class="npcdot" style="background:${_.color}"></span>`,h=`${_.name}（${_.id}）`,r=(g==null?void 0:g.kind)==="npc"&&g.id===_.id),{cls:f+(r?" sel":""),html:c,title:h,selHit:r}}function ge(){let s="";for(let n=0;n<ft;n++)for(let f=0;f<ht;f++){const c=he(f,n);s+=`<div class="${c.cls}" data-x="${f}" data-y="${n}" title="${x(c.title)}">${c.html}</div>`}fe.innerHTML=s}fe.addEventListener("click",s=>{const n=s.target.closest(".tc");n&&Pe(Number(n.dataset.x),Number(n.dataset.y))}),fe.addEventListener("pointermove",s=>{const n=s.target.closest(".tc");a("thover").textContent=n?`(${n.dataset.x},${n.dataset.y}) ${n.title}`:"—"});const Ve=()=>{for(let s=1;;s++){const n=`npc-${s}`;if(!u.npcs.some(f=>f.id===n))return n}};function ke(s,n){const f=u.npcs.find(r=>r.x===s&&r.y===n);if(f)return{kind:"npc",id:f.id};const c=u.buildings.findIndex(r=>s>=r.x&&s<r.x+r.w&&n>=r.y&&n<r.y+r.d);if(c>=0)return{kind:"building",i:c};const h=u.holes.findIndex(r=>r.x===s&&r.y===n);if(h>=0)return{kind:"hole",i:h};for(let r=u.decos.length-1;r>=0;r--)if(u.decos[r].x===s&&u.decos[r].y===n)return{kind:"deco",i:r};return null}function Pe(s,n){if(q!=null){const h=u.buildings[q];h&&(h.door={x:s,y:n},S(i("tool.town.doorPlaced"))),q=null,I(),O(),z();return}if(B==="select"){g=ke(s,n),O();return}if(B==="erase"){const h=ke(s,n);if((h==null?void 0:h.kind)==="npc")u.npcs=u.npcs.filter(r=>r.id!==h.id);else if((h==null?void 0:h.kind)==="building")u.buildings.splice(h.i,1);else if((h==null?void 0:h.kind)==="hole")u.holes.splice(h.i,1);else if((h==null?void 0:h.kind)==="deco")u.decos.splice(h.i,1);else return;g=null,S(i("tool.town.erased")),I(),O(),z();return}if(B==="npc"){const h=u.npcs.find(E=>E.x===s&&E.y===n);if(h){g={kind:"npc",id:h.id},O();return}if(u.npcs.length>=16){S(i("tool.town.npcFull"),!0);return}const r=Ve();u.npcs.push({id:r,name:`NPC${u.npcs.length+1}`,x:s,y:n,race:"human",color:"#e0c060",role:"talker",facing:"s"}),g={kind:"npc",id:r},S(i("tool.town.npcAdded",{name:r})),I(),O(),z();return}if(B==="building"){if(u.buildings.length>=8){S(i("tool.town.bldFull"),!0);return}const h=Math.min(s,ht-ie),r=Math.min(n,ft-p),E={x:Math.min(h+(ie>>1),ht-1),y:Math.min(r+p,ft-1)};u.buildings.push({x:h,y:r,w:ie,d:p,facility:G,door:E}),g={kind:"building",i:u.buildings.length-1},S(i("tool.town.placed",{what:i(`fac.${G}`)})),I(),O(),z();return}if(B==="hole"){const h=$==="plain"?null:$,r=u.holes.findIndex(E=>E.x===s&&E.y===n);if(r>=0)u.holes[r].element=h;else if(u.holes.length>=6){S(i("tool.town.holeFull"),!0);return}else u.holes.push({x:s,y:n,element:h});S(i("tool.town.placed",{what:"▼"})),I(),O(),z();return}const f=B.slice(5),c=u.decos.findIndex(h=>h.x===s&&h.y===n&&h.kind===f);c>=0?u.decos.splice(c,1):u.decos.push({x:s,y:n,kind:f}),I(),O(),z()}const $e=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],D=s=>i(`tool.town.tool.${s.startsWith("deco-")?s.slice(5):s}`);function te(){const s=a("tpal");s.innerHTML="";for(const n of $e){const f=document.createElement("button");f.className=B===n?"on":"",f.textContent=D(n),f.addEventListener("click",()=>{B=n,q=null,te(),X(),z()}),s.appendChild(f)}}function X(){const s=a("tpalopts");if(s.innerHTML="",s.style.display=B==="building"||B==="hole"?"flex":"none",B==="building"){const n=document.createElement("select");n.innerHTML=Object.keys(Ge).map(h=>`<option value="${h}"${h===G?" selected":""}>${Ge[h]} ${x(i(`fac.${h}`))}</option>`).join(""),n.addEventListener("change",()=>{G=n.value});const f=(h,r,E)=>{const H=document.createElement("input");return H.type="number",H.min="1",H.max=String(E),H.value=String(h),H.className="num",H.style.width="3em",H.addEventListener("change",()=>r(Math.max(1,Math.min(E,Number(H.value)||1)))),H},c=document.createElement("span");c.textContent=i("tool.town.sizeLabel"),s.append(n,c,f(ie,h=>{ie=h},8),document.createTextNode("×"),f(p,h=>{p=h},6))}else if(B==="hole"){const n=document.createElement("span");n.textContent=i("tool.town.holeElem"),s.appendChild(n);for(const f of["fire","ice","earth","poison","holy","plain"]){const c=document.createElement("button");c.className="chip"+(f===$?" on":""),c.style.background=vn[f],c.title=f==="plain"?i("tool.town.holePlain"):i(`elem.${f}`),c.addEventListener("click",()=>{$=f,X()}),s.appendChild(c)}}}const d=a("tdetail");function l(){if(q=q,!g){d.innerHTML=`<div class="sub">${x(i("tool.town.detailIdle"))}</div>`;return}if(g.kind==="npc")return w(g.id);if(g.kind==="building")return b(g.i);if(g.kind==="hole"){const n=u.holes[g.i];if(!n)return g=null,l();d.innerHTML=`<div><b>▼ ${x(n.element?i(`elem.${n.element}`):i("tool.town.holePlain"))}</b>（${n.x},${n.y}）</div>
        <div class="row"><button id="tdel" type="button">${x(i("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{u.holes.splice(g.i,1),g=null,I(),O(),z()});return}const s=u.decos[g.i];if(!s)return g=null,l();d.innerHTML=`<div><b>${mn[s.kind]||"·"} ${x(i(`tool.town.tool.${s.kind}`))}</b>（${s.x},${s.y}）</div>
      <div class="row"><button id="tdel" type="button">${x(i("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{u.decos.splice(g.i,1),g=null,I(),O(),z()})}function b(s){const n=u.buildings[s];if(!n)return g=null,l();d.innerHTML=`
      <div><b>${Ge[n.facility]} ${x(i(`fac.${n.facility}`))}</b>（${n.x},${n.y}・${n.w}×${n.d}）</div>
      <div class="kv"><span class="lbl">${x(i("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(Ge).map(f=>`<option value="${f}"${n.facility===f?" selected":""}>${Ge[f]} ${x(i(`fac.${f}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${x(i("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${n.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${n.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${q===s?' class="on"':""}>${x(i("tool.town.doorSet"))}</button></div>
      <div class="sub">${x(i("tool.town.doorHint"))}（🚪 ${n.door.x},${n.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${x(i("tool.town.delete"))}</button></div>`,a("tbfac").addEventListener("change",()=>{n.facility=a("tbfac").value,I(),O(),z()}),a("tbw").addEventListener("change",()=>{n.w=Math.max(1,Math.min(8,Number(a("tbw").value)||n.w)),n.x=Math.min(n.x,ht-n.w),I(),O(),z()}),a("tbd").addEventListener("change",()=>{n.d=Math.max(1,Math.min(6,Number(a("tbd").value)||n.d)),n.y=Math.min(n.y,ft-n.d),I(),O(),z()}),a("tbdoor").addEventListener("click",()=>{q=q===s?null:s,l()}),a("tdel").addEventListener("click",()=>{u.buildings.splice(s,1),g=null,q=null,I(),O(),z()})}function w(s){const n=u.npcs.find(c=>c.id===s);if(!n)return g=null,l();const f=(n.lines??[]).map(c=>c.text).join(`
`);d.innerHTML=`
      <div><b>🧍 ${x(n.name)}</b> <span class="sub">${x(n.id)}（${n.x},${n.y}）</span></div>
      <div class="kv"><span class="lbl">${x(i("tool.town.npcName"))}</span><input id="tnname" type="text" value="${x(n.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${x(i("tool.town.race"))}</span><select id="tnrace">
        ${io.map(c=>`<option value="${c}"${n.race===c?" selected":""}>${x(i(`tool.town.race.${c}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${x(n.color)}" title="${x(i("tool.town.color"))}" /></div>
      <div class="kv"><span class="lbl">${x(i("tool.town.role"))}</span><select id="tnrole">
        ${so.map(c=>`<option value="${c}"${n.role===c?" selected":""}>${x(c==="talker"?i("tool.town.role.talker"):c==="guide"?i("tool.town.role.guide"):i(`fac.${c}`))}</option>`).join("")}
      </select>
      <span class="lbl">${x(i("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(c=>`<option value="${c}"${(n.facing??"s")===c?" selected":""}>${c}</option>`).join("")}
      </select></div>
      <div class="sub">${x(i("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${x(f)}</textarea>
      <div class="row"><button id="tndlg" type="button">${x(i("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${n.dialog?x(n.dialog):x(i("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${x(i("tool.town.delete"))}</button></div>`,a("tnname").addEventListener("change",()=>{n.name=a("tnname").value.trim()||n.name,I(),O(),z()}),a("tnrace").addEventListener("change",()=>{n.race=a("tnrace").value,I(),z()}),a("tncolor").addEventListener("change",()=>{n.color=a("tncolor").value,I(),O(),z()}),a("tnrole").addEventListener("change",()=>{n.role=a("tnrole").value,I(),z()}),a("tnface").addEventListener("change",()=>{n.facing=a("tnface").value,I(),z()}),a("tnlines").addEventListener("change",()=>{const c=a("tnlines").value.split(`
`).map(r=>r.trim()).filter(Boolean).slice(0,8),h=n.lines??[];n.lines=c.length?c.map((r,E)=>{var H,Q;return{text:r,...((H=h[E])==null?void 0:H.text)===r&&((Q=h[E])!=null&&Q.texts)?{texts:h[E].texts}:{}}}):void 0,I(),K(),z()}),a("tndlg").addEventListener("click",()=>{W(n)}),a("tdel").addEventListener("click",()=>{u.npcs=u.npcs.filter(c=>c.id!==s),g=null,se&&!u.npcs.some(c=>c.dialog===se)&&M(),I(),O(),z()})}function W(s){if(!s.dialog){const n=`dlg-${s.id}`;s.dialog=n,u.dialogs[n]||(u.dialogs[n]={id:n,nodes:[{id:"root",say:"……"}]}),I()}se=s.dialog,F=null,O(),z()}function M(){se=null,F=null,Z()}a("tdlgclose").addEventListener("click",M);const C=()=>se?u.dialogs[se]??null:null,k=s=>{for(let n=1;;n++){const f=`n${n}`;if(!s.nodes.some(c=>c.id===f))return f}};function Z(){const s=a("tdlg"),n=C();if(s.classList.toggle("on",!!n),!n)return;a("tdlghead").textContent=i("tool.town.dlgHead",{id:n.id});const f=a("tdlgnodes");f.innerHTML="",n.nodes.forEach((c,h)=>{var me,_,He,y;const r=document.createElement("div");r.className="node";const E=P=>`<option value=""${P===null?" selected":""}>${x(i("tool.town.choiceEnd"))}</option>`+n.nodes.map(Y=>`<option value="${x(Y.id)}"${P===Y.id?" selected":""}>→ ${x(Y.id)}</option>`).join("");r.innerHTML=`
        <div class="nid">#${x(c.id)}${h===0?" "+x(i("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${x(c.say)}</textarea>
        <div class="chrow sub"><span>${x(i("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${x(((me=c.when)==null?void 0:me.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${x(((_=c.when)==null?void 0:_.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${x(((He=c.when)==null?void 0:He.item)??"")}" /></div>
        ${(c.choices??[]).map((P,Y)=>`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${Y}" value="${x(P.text)}" />
          <select data-act="cgoto" data-ci="${Y}">${E(P.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${Y}">✕</button></div>`).join("")}
        ${(c.choices??[]).length<4?`<button type="button" data-act="caddc">${x(i("tool.town.addChoice"))}</button>`:""}`;const H=()=>{I(),K(),z()};r.querySelector('[data-act="say"]').addEventListener("change",P=>{c.say=P.target.value||c.say,H()});const Q=(P,Y)=>{const ce={...c.when??{}};Y.trim()?ce[P]=Y.trim():delete ce[P],c.when=Object.keys(ce).length?ce:void 0,H()};r.querySelector('[data-act="wflag"]').addEventListener("change",P=>Q("flag",P.target.value)),r.querySelector('[data-act="wnot"]').addEventListener("change",P=>Q("notFlag",P.target.value)),r.querySelector('[data-act="witem"]').addEventListener("change",P=>Q("item",P.target.value)),r.querySelector('[data-act="delnode"]').addEventListener("click",()=>{n.nodes.splice(h,1),n.nodes.length||n.nodes.push({id:"root",say:"……"});for(const P of n.nodes)for(const Y of P.choices??[])Y.goto===c.id&&(Y.goto=null);I(),Z(),K(),z()});for(const P of Array.from(r.querySelectorAll('[data-act="ctext"]')))P.addEventListener("change",()=>{const Y=c.choices[Number(P.dataset.ci)];Y.text=P.value||Y.text,H()});for(const P of Array.from(r.querySelectorAll('[data-act="cgoto"]')))P.addEventListener("change",()=>{c.choices[Number(P.dataset.ci)].goto=P.value===""?null:P.value,H()});for(const P of Array.from(r.querySelectorAll('[data-act="cdel"]')))P.addEventListener("click",()=>{c.choices.splice(Number(P.dataset.ci),1),c.choices.length||(c.choices=void 0),I(),Z(),K(),z()});(y=r.querySelector('[data-act="caddc"]'))==null||y.addEventListener("click",()=>{c.choices=[...c.choices??[],{text:"…",goto:null}],I(),Z(),z()}),f.appendChild(r)}),L()}a("tdlgaddnode").addEventListener("click",()=>{const s=C();!s||s.nodes.length>=32||(s.nodes.push({id:k(s),say:"……"}),I(),Z(),z())});const ye=()=>({flags:new Set(a("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(a("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});function L(){var h;const s=a("tpv"),n=C();if(!n){s.innerHTML="";return}const f=It();let c=`<div class="row"><button type="button" data-act="pvstart">${x(i("tool.town.pvRestart"))}</button></div>`;if(F==="end")c+=`<div class="pvend">${x(i("tool.town.pvEnd"))}</div>`;else if(F!==null){const r=dn(n,F);if(!r)return F=null,L();c+=`<div class="pvsay">🗨 ${x(cn(r.say,r.says,f))}</div>`,(h=r.choices)!=null&&h.length?c+=r.choices.map((E,H)=>`<button type="button" data-act="pvc" data-ci="${H}">${x(cn(E.text,E.texts,f))}</button>`).join(""):c+=`<div class="pvend">${x(i("tool.town.pvEnd"))}</div>`}s.innerHTML=c,s.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{const r=to(n,ye());F=r?r.id:"end",L()});for(const r of Array.from(s.querySelectorAll('[data-act="pvc"]')))r.addEventListener("click",()=>{var Q;const E=F!==null&&F!=="end"?dn(n,F):null,H=(Q=E==null?void 0:E.choices)==null?void 0:Q[Number(r.dataset.ci)];F=(H==null?void 0:H.goto)??"end",L()})}a("tpvflags").addEventListener("change",L),a("tpvitems").addEventListener("change",L);function K(){const s=a("tlint"),n=rn(u);s.innerHTML=n.length?n.map(f=>`<div class="warn">⚠ ${x(i(f.key,f.params))}</div>`).join(""):`<div class="ok">${x(i("tool.town.lint.ok"))}</div>`}async function N(){try{const s=await(await fetch(U("/api/tables/proposals"))).json();Ht(a("tprops"),s.proposals??[],{tag:()=>i("tool.town.capTag"),onView:n=>{Se(n)},onPromote:n=>{it(n)},onArchive:n=>{ze(n)}}),a("tplive").textContent="· live",a("tlive").textContent="· live"}catch{a("tprops").innerHTML=`<div class="live">${x(i("tool.town.noApi"))}</div>`,a("tplive").textContent=i("tool.common.devOff"),a("tlive").textContent=i("tool.common.devOff")}Ce()}function Ce(){var n;const s=a("ttruth");s.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${x(de)}</span>
      <div class="row"><button type="button" data-act="truth-load">${x(i("tool.town.loadTruth"))}</button></div></div>`,(n=s.querySelector('[data-act="truth-load"]'))==null||n.addEventListener("click",()=>{re=!1,ee(!0).then(()=>S(i("tool.town.loaded")))})}async function Se(s){var n,f;try{const c=await(await fetch(U(`/api/tables/proposal?id=${encodeURIComponent(s)}`))).json(),h=(f=(n=c.docs)==null?void 0:n[0])==null?void 0:f.tables.town;if(h===void 0)throw new Error(i("tool.town.propNoTown"));const r=We.parse(h);g=null,se=null,re=!0,xe(r),S(i("tool.town.loadedProp",{name:c.docs[0].name}))}catch(c){S(c.message,!0)}}async function it(s){try{await ve(U("/api/tables/promote"),{proposalId:s}),S(i("tool.town.promoted")),re=!1,N(),ee(!0)}catch(n){S(n.message,!0)}}async function ze(s){try{await ve(U("/api/tables/archive"),{proposalId:s}),S(i("tool.town.archived")),N()}catch(n){S(n.message,!0)}}async function Le(){var h,r;let s;try{u.name=a("tname").value.trim()||u.name,s=We.parse(u)}catch(E){S(i("tool.town.zodFail",{msg:E.message.slice(0,200)}),!0);return}const n=a("tlabel").value.trim()||s.name;let f={};try{const E=await fetch(U("/api/tables/truth"));E.ok&&(f=((r=(h=(await E.json()).docs)==null?void 0:h[0])==null?void 0:r.tables)??{})}catch{}const c={formatVersion:yn,id:"tables",name:n,tables:{...f,town:s},createdAt:hn(),updatedAt:hn()};try{await ve(U("/api/tables/proposal"),{tables:c,label:n,createdBy:"user"}),S(i("tool.town.saved",{name:n})),N()}catch(E){S(i("tool.town.saveFail",{msg:E.message}),!0)}}a("tsave").addEventListener("click",()=>{Le()}),a("tload").addEventListener("click",()=>{re=!1,ee(!0).then(()=>S(i("tool.town.loaded")))}),a("tlabel").addEventListener("input",z),a("tname").addEventListener("change",()=>{u.name=a("tname").value.trim()||u.name,I(),z()});function O(){a("tname").value=u.name,ge(),te(),X(),l(),Z(),K()}const Ue=j.events.on("tables",()=>{N(),ee()}),mt=At(()=>{Ft(A.querySelector("#townapp")),O(),N()});return window.cdForgeTown={plan:()=>u,setPlan:s=>xe(We.parse(s),{markDirty:!0}),tool:s=>{B=s,te(),X()},click:(s,n)=>Pe(s,n),select:(s,n)=>(g=ke(s,n),O(),g),openDialog:s=>{const n=u.npcs.find(f=>f.id===s);return n&&W(n),(n==null?void 0:n.dialog)??null},lint:()=>rn(u),save:()=>Le(),promote:s=>it(s),refresh:()=>N(),reload:(s=!0)=>ee(s),dirty:()=>re},oe()?(O(),N()):ee(!0).then(()=>{N()}),{setVisible(s){a("townapp").classList.toggle("on",s),s&&O()},dispose(){Ue(),mt(),z(),delete window.cdForgeTown}}}const V=A=>A.replace(/[&<>"]/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[j]),bn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),gn=A=>A===xn?"comduct":A.replace("/","--"),wn=["fire","ice","earth","poison","holy"],Nt={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"},ro=24;function co(A,j){const{wapi:U,postJson:ve}=j.api,a=d=>A.querySelector(`#${d}`);function S(d,l=!1){const b=a("pmsg");b.textContent=d,b.style.color=l?"#ffd166":"#7fd17f",window.setTimeout(()=>{b.textContent===d&&(b.textContent="")},5e3)}let u=[],B=[],G=-1,ie="any",p=!1,$="";const g="cdForgePinM3";function q(){try{sessionStorage.setItem(g,JSON.stringify({v:1,world:j.world(),pins:u,dirty:p,label:a("plabel").value}))}catch{}}function se(){try{const d=sessionStorage.getItem(g);if(!d)return!1;const l=JSON.parse(d);return l.v!==1||l.world!==j.world()||!Array.isArray(l.pins)?!1:(u=l.pins,p=!!l.dirty,l.label&&(a("plabel").value=l.label),!0)}catch{return!1}}function F(){p=!0}async function re(){try{const d=await fetch(U("/api/forge/truth"));if(d.ok){B=((await d.json()).prefabs??[]).flatMap(b=>{try{return[Ee.parse(b)]}catch{return[]}});return}}catch{}try{const d=await fetch(U(`/packs/${gn(j.world())}.json`));d.ok&&(B=((await d.json()).prefabs??[]).flatMap(b=>{try{return[Ee.parse(b)]}catch{return[]}}))}catch{}}async function de(){var d,l,b,w;try{const W=await fetch(U("/api/tables/truth"));if(W.ok){const M=(b=(l=(d=(await W.json()).docs)==null?void 0:d[0])==null?void 0:l.tables)==null?void 0:b.pins;if(M!==void 0)return{p:ot.parse(M),src:"truth"}}}catch{}try{const W=await fetch(U(`/packs/${gn(j.world())}.json`));if(W.ok){const M=(w=(await W.json()).tables)==null?void 0:w.pins;if(M!==void 0)return{p:ot.parse(M),src:"pack"}}}catch{}return null}async function ne(d=!1){if(p&&!d)return;let l=null;try{l=await de()}catch(b){S(i("tool.pin.zodFail",{msg:b.message.slice(0,200)}),!0);return}l?($=i("tool.pin.truthMeta",{src:l.src,n:l.p.length}),p=!1,G=l.p.length?0:-1,u=l.p):($=i("tool.pin.truthNew"),p=!1,u=[],G=-1),D(),q(),ge()}const z=d=>{var b;const l=B.find(w=>w.id===d);return l?((b=l.names)==null?void 0:b[It()])??l.name:d};function oe(d){const l=B.filter(w=>!w.meta.tags.includes("town")&&!w.meta.tags.includes("town-interior")),b=l.map(w=>`<option value="${V(w.id)}"${w.id===d?" selected":""}>${V(z(w.id))}（${w.size.w}×${w.size.d}）</option>`);return d&&!l.some(w=>w.id===d)&&b.unshift(`<option value="${V(d)}" selected>⚠ ${V(d)}</option>`),b.join("")}function I(){const d=a("ppins");d.innerHTML="",u.length||(d.innerHTML=`<div class="sub">${V(i("tool.pin.empty"))}</div>`),u.forEach((l,b)=>{var Z,ye;const w=document.createElement("div");w.className="pincard"+(b===G?" sel":"");const W=["always","depths","once"].map(L=>`<option value="${L}"${l.rule===L?" selected":""}>${V(i(`tool.pin.rule.${L}`))}</option>`).join(""),M=[`<option value=""${l.theme?"":" selected"}>${V(i("tool.pin.themeAny"))}</option>`].concat(wn.map(L=>`<option value="${L}"${l.theme===L?" selected":""}>${V(i(`elem.${L}`))}</option>`)).join("");w.innerHTML=`
        <div class="row"><b>📌 ${b+1}</b>
          <select data-act="prefab">${oe(l.prefab)}</select>
          <button type="button" data-act="del" title="${V(i("tool.pin.delete"))}">🗑</button></div>
        <div class="kv"><span class="lbl">${V(i("tool.pin.ruleLabel"))}</span><select data-act="rule">${W}</select></div>
        <div class="kv" data-show="depths"><span class="lbl">${V(i("tool.pin.depthsLabel"))}</span>
          <input type="text" data-act="depths" placeholder="${V(i("tool.pin.depthsPh"))}" value="${V((l.depths??[]).join(", "))}" /></div>
        <div class="kv" data-show="range"><span class="lbl">${V(i("tool.pin.rangeLabel"))}</span>
          <input type="number" class="num" data-act="r0" min="1" max="99" value="${((Z=l.range)==null?void 0:Z[0])??1}" /> −
          <input type="number" class="num" data-act="r1" min="1" max="99" value="${((ye=l.range)==null?void 0:ye[1])??99}" /></div>
        <div class="kv"><span class="lbl">${V(i("tool.pin.themeLabel"))}</span><select data-act="theme">${M}</select></div>
        <div class="sub">${V(i("tool.pin.introLabel"))}</div>
        <textarea data-act="intro" placeholder="${V(i("tool.pin.introPh"))}">${V(l.intro??"")}</textarea>`,w.querySelector('[data-show="depths"]').style.display=l.rule==="depths"?"flex":"none",w.querySelector('[data-show="range"]').style.display=l.rule==="depths"?"none":"flex";const C=()=>{F(),D(),q()};w.addEventListener("click",()=>{G!==b&&(G=b,D())}),w.querySelector('[data-act="prefab"]').addEventListener("change",L=>{l.prefab=L.target.value,C()}),w.querySelector('[data-act="rule"]').addEventListener("change",L=>{var K;l.rule=L.target.value,l.rule==="depths"?(delete l.range,l.depths=(K=l.depths)!=null&&K.length?l.depths:[5]):(delete l.depths,l.range=l.range??[1,99]),C()}),w.querySelector('[data-act="depths"]').addEventListener("change",L=>{const K=L.target.value.split(/[\s,、]+/).map(N=>Number(N)).filter(N=>Number.isInteger(N)&&N>=1&&N<=99);l.depths=[...new Set(K)].sort((N,Ce)=>N-Ce),C()});const k=(L,K)=>{const N=l.range??[1,99];N[L]=Math.max(1,Math.min(99,K||N[L])),N[0]>N[1]&&(N[L===0?1:0]=N[L]),l.range=N,C()};w.querySelector('[data-act="r0"]').addEventListener("change",L=>k(0,Number(L.target.value))),w.querySelector('[data-act="r1"]').addEventListener("change",L=>k(1,Number(L.target.value))),w.querySelector('[data-act="theme"]').addEventListener("change",L=>{const K=L.target.value;K?l.theme=K:delete l.theme,C()}),w.querySelector('[data-act="intro"]').addEventListener("change",L=>{const K=L.target.value.trim();K!==(l.intro??"")&&delete l.intros,K?l.intro=K.slice(0,200):(delete l.intro,delete l.intros),F(),q()}),w.querySelector('[data-act="del"]').addEventListener("click",L=>{L.stopPropagation(),u.splice(b,1),G>=u.length&&(G=u.length-1),F(),D(),q()}),d.appendChild(w)}),a("paddpin").disabled=u.length>=pn}a("paddpin").addEventListener("click",()=>{if(u.length>=pn){S(i("tool.pin.full"),!0);return}const d=B.find(l=>!l.meta.tags.includes("town")&&!l.meta.tags.includes("town-interior"));u.push({prefab:(d==null?void 0:d.id)??"prefab-id",rule:"depths",depths:[5]}),G=u.length-1,F(),D(),q()});function xe(){const d=a("plint"),l=un(u,B.map(b=>({id:b.id,w:b.size.w,d:b.size.d})));for(const b of u){const w=B.find(W=>W.id===b.prefab);w&&(w.meta.tags.includes("town")||w.meta.tags.includes("town-interior"))&&l.push({level:"warn",key:"tool.pin.lint.townTag",params:{id:b.prefab}})}d.innerHTML=l.length?l.map(b=>`<div class="warn">⚠ ${V(i(b.key,b.params))}</div>`).join(""):`<div class="ok">${V(i("tool.pin.lint.ok"))}</div>`}function J(){const d=a("ppv"),l=ie==="any"?null:ie;let b="";for(let w=1;w<=ro;w++){const W=fn(u,w,l),M=W.map(C=>{const k=u.indexOf(C),Z=C.theme?Nt[C.theme]:"#5b9bff";return`<button type="button" class="pbadge${k===G?" sel":""}" data-i="${k}" style="border-color:${Z}">${V(z(C.prefab))}${C.intro?" 💬":""}</button>`}).join("");b+=`<div class="pvrow${W.length?" hit":""}"><span class="d">${w}F</span>${M||`<span class="none">${V(i("tool.pin.pvNone"))}</span>`}</div>`}d.innerHTML=b;for(const w of Array.from(d.querySelectorAll(".pbadge")))w.addEventListener("click",()=>{G=Number(w.dataset.i),D()})}function ee(){const d=a("pthemes");d.innerHTML=`<span class="sub">${V(i("tool.pin.pvTheme"))}</span>`;for(const l of["any",...wn]){const b=document.createElement("button");b.className="chip"+(ie===l?" on":""),b.style.background=l==="any"?"#9aa4b5":Nt[l],b.title=l==="any"?i("tool.pin.themeAny"):i(`elem.${l}`),b.addEventListener("click",()=>{ie=l,J(),ee()}),d.appendChild(b)}}function fe(){const d=a("ppf"),l=u[G],b=l?B.find(M=>M.id===l.prefab):void 0;if(!b){d.innerHTML=`<div class="sub">${V(i("tool.pin.pfNone"))}</div>`;return}const w=(M,C)=>{const k=b.props.find(Z=>Z.x===M&&Z.y===C);return k?k.kind.startsWith("chest")?"📦":k.kind.startsWith("shrine")?"⛲":k.kind.startsWith("portal")?"◎":k.kind==="item"?"✦":k.kind==="trap"?"✖":"·":null};let W="";for(let M=0;M<b.size.d;M++)for(let C=0;C<b.size.w;C++){const k=b.cells[M][C];let Z=k.kind==="wall"?k.breakable?"#5e4a33":k.pillar||k.low?"#4a5468":"#3a4356":"#223048";k.kind==="floor"&&k.floorFeat==="water"&&(Z="#2b4a6f"),k.kind==="floor"&&k.floorFeat==="slip"&&(Z="#9fc4d8"),k.kind==="floor"&&k.hazard&&(Z=Nt[k.hazard.element]??Z);const ye=b.ports.some(N=>N.x===C&&N.y===M),K=b.spawns.find(N=>N.x===C&&N.y===M)?"🧍":w(C,M)??(ye?"○":(k.height??0)>0?String(k.height):"");W+=`<div class="pc${ye?" port":""}" style="background:${Z}">${K}</div>`}d.innerHTML=`<div class="sub"><b>${V(z(b.id))}</b>（${b.size.w}×${b.size.d}・depth ${b.meta.depthRange[0]}-${b.meta.depthRange[1]}）</div>
      <div class="pfgrid" style="grid-template-columns:repeat(${b.size.w}, 18px)">${W}</div>`}async function he(){try{const d=await(await fetch(U("/api/tables/proposals"))).json();Ht(a("pprops"),d.proposals??[],{tag:()=>i("tool.pin.capTag"),onView:l=>{Ve(l)},onPromote:l=>{ke(l)},onArchive:l=>{Pe(l)}}),a("pplive").textContent="· live",a("plive").textContent="· live"}catch{a("pprops").innerHTML=`<div class="live">${V(i("tool.pin.noApi"))}</div>`,a("pplive").textContent=i("tool.common.devOff"),a("plive").textContent=i("tool.common.devOff")}ge()}function ge(){var l;const d=a("ptruth");d.innerHTML=`<div class="card"><b>tables.pins</b><span class="id">${V($)}</span>
      <div class="row"><button type="button" data-act="truth-load">${V(i("tool.pin.loadTruth"))}</button></div></div>`,(l=d.querySelector('[data-act="truth-load"]'))==null||l.addEventListener("click",()=>{p=!1,ne(!0).then(()=>S(i("tool.pin.loaded")))})}async function Ve(d){var l,b;try{const w=await(await fetch(U(`/api/tables/proposal?id=${encodeURIComponent(d)}`))).json(),W=(b=(l=w.docs)==null?void 0:l[0])==null?void 0:b.tables.pins;if(W===void 0)throw new Error(i("tool.pin.propNoPins"));const M=ot.parse(W);p=!0,u=M,G=M.length?0:-1,D(),q(),S(i("tool.pin.loadedProp",{name:w.docs[0].name}))}catch(w){S(w.message,!0)}}async function ke(d){try{await ve(U("/api/tables/promote"),{proposalId:d}),S(i("tool.pin.promoted")),p=!1,he(),ne(!0)}catch(l){S(l.message,!0)}}async function Pe(d){try{await ve(U("/api/tables/archive"),{proposalId:d}),S(i("tool.pin.archived")),he()}catch(l){S(l.message,!0)}}async function $e(){var M,C;let d=[];try{u.length&&(d=ot.parse(u))}catch(k){S(i("tool.pin.zodFail",{msg:k.message.slice(0,200)}),!0);return}const l=a("plabel").value.trim()||i("tool.pin.capTag");let b={};try{const k=await fetch(U("/api/tables/truth"));k.ok&&(b=((C=(M=(await k.json()).docs)==null?void 0:M[0])==null?void 0:C.tables)??{})}catch{}const w={...b};delete w.pins,d.length&&(w.pins=d);const W={formatVersion:yn,id:"tables",name:l,tables:w,createdAt:bn(),updatedAt:bn()};try{await ve(U("/api/tables/proposal"),{tables:W,label:l,createdBy:"user"}),S(i("tool.pin.saved",{name:l})),he()}catch(k){S(i("tool.pin.saveFail",{msg:k.message}),!0)}}a("psave").addEventListener("click",()=>{$e()}),a("pload").addEventListener("click",()=>{p=!1,ne(!0).then(()=>S(i("tool.pin.loaded")))}),a("plabel").addEventListener("input",q);function D(){I(),xe(),ee(),J(),fe()}const te=j.events.on("tables",()=>{he(),ne()}),X=At(()=>{Ft(A.querySelector("#pinapp")),D(),he()});return window.cdForgePin={pins:()=>u,setPins:d=>{u=d?ot.parse(d):[],G=u.length?0:-1,F(),D(),q()},addPin:()=>{a("paddpin").click()},select:d=>{G=d,D()},preview:(d,l)=>fn(u,d,l??null).map(b=>b.prefab),lint:()=>un(u,B.map(d=>({id:d.id,w:d.size.w,d:d.size.d}))),prefabs:()=>B.map(d=>d.id),save:()=>$e(),promote:d=>ke(d),refresh:()=>he(),reload:(d=!0)=>ne(d),dirty:()=>p},re().then(()=>{se()?(D(),he()):ne(!0).then(()=>{he()})}),{setVisible(d){a("pinapp").classList.toggle("on",d),d&&D()},dispose(){te(),X(),q(),delete window.cdForgePin}}}const ae=A=>i(`tool.forge.brush.${A}`),po=A=>{var j;return((j=A.names)==null?void 0:j[It()])??A.name};function at(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const So={id:"forge",async mount(A,j){const{wapi:U,postJson:ve}=j.api;A.innerHTML=no,Ft(A);const a=e=>A.querySelector(`#${e}`),S=lo(A,j),u=co(A,j);let B="room";function G(e){B=e,a("app").style.display=e==="room"?"flex":"none",S.setVisible(e==="town"),u.setVisible(e==="pin"),a("modeRoom").classList.toggle("on",e==="room"),a("modeTown").classList.toggle("on",e==="town"),a("modePin").classList.toggle("on",e==="pin");try{sessionStorage.setItem("cdForgeModeM4",e)}catch{}}a("modeRoom").addEventListener("click",()=>G("room")),a("modeTown").addEventListener("click",()=>G("town")),a("modePin").addEventListener("click",()=>G("pin"));const ie="plain";let p=zt("first-keep","はじまりの砦",7,6,at()),$="floor",g="brush",q="fire",se=6,F,re=null;const de=new Kn,ne=()=>({element:q,power:se,monType:F}),z="cdForgeP2";function oe(){try{sessionStorage.setItem(z,JSON.stringify({v:1,pf:p,brush:$,shape:g,hazardElement:q,hazardPower:se,spawnType:F??null,cam:{yaw:D,pitch:te,dist:X}}))}catch{}}function I(){var e;try{const t=sessionStorage.getItem(z);if(!t)return!1;const o=JSON.parse(t);return o.v!==1||!((e=o.pf)!=null&&e.size)||!Array.isArray(o.pf.cells)?!1:(p=o.pf,$=o.brush??"floor",g=o.shape??"brush",q=o.hazardElement??"fire",se=o.hazardPower??6,F=o.spawnType??void 0,o.cam&&(D=o.cam.yaw,te=o.cam.pitch,X=o.cam.dist),!0)}catch{return!1}}const xe=a("stage"),J=new Zt({antialias:!0});J.toneMapping=On,J.toneMappingExposure=1.22,J.setPixelRatio(Math.min(devicePixelRatio,2)),xe.appendChild(J.domElement);const ee=new Qt,fe=new en(42,1,.05,200),he=tn[ie],ge=Rn(he);ee.background=new nn(he.bg);const Ve=new jn(ge.hemiSky,ge.hemiGround,Math.max(.5,ge.hemiI)),ke=new St(ge.sunCol,Math.max(.8,ge.sunI));ke.position.set(3,4.2,2.4);const Pe=new St(ge.fillCol,.35);Pe.position.set(-2.6,1.4,-1.8),ee.add(Ve,ke,Pe);const $e=new Bn(document.createElement("div"),()=>{});let D=0,te=.72,X=9;const d=new De(3,0,2.5);function l(){d.set((p.size.w-1)/2,.3,(p.size.d-1)/2),X=Math.max(p.size.w,p.size.d)*1.35+2}function b(){const e=xe.clientWidth,t=xe.clientHeight;J.setSize(e,t),fe.aspect=e/t,fe.updateProjectionMatrix()}j.own(window,"resize",b);let w=null,W=null;function M(){w&&ee.remove(w),W&&ee.remove(W),w=$e.buildPrefabPreview(ie,p),W=new Qe;for(const e of p.spawns)W.add(N(e));ee.add(w,W),ye()}let C=!1,k=null;const Z=new qe({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function ye(){if(k&&(ee.remove(k),k=null),!C)return;k=new Qe;const e=p.ports.length?Yn(p,p.ports[0],!1):new Set;for(let t=0;t<p.size.d;t++)for(let o=0;o<p.size.w;o++){const m=p.cells[t][o];if(m.kind!=="floor"||m.floorFeat==="water"||e.has(`${o},${t}`))continue;const v=new Fe(new Ze(.96,.06,.96),Z);v.position.set(o,(m.height??0)*pt+.34,t),k.add(v)}ee.add(k)}function L(e){const t=e?Ct.find(o=>o.name===e):null;return{kind:"monster",name:e??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:t==null?void 0:t.size,heads:t==null?void 0:t.heads,element:t==null?void 0:t.element}}function K(e){const{geo:t,spots:o}=Un(e),m=new Qe;m.add(new Fe(t,_n()));for(const v of o){const T=new Fe(new Ze(1,1,1),new qe({color:v.c}));T.position.set(v.x,v.y,v.z),T.scale.set(v.sx,v.sy,v.sz),m.add(T)}return m}function N(e){var v,T;const t=new Qe,o=new Fe(new Ze(.94,.05,.94),new qe({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(o.position.y=.03,t.add(o),e.monType&&Ct.some(R=>R.name===e.monType)){const R=L(e.monType),Ae=K(R),ue=((R.size??1)-1)/2;Ae.position.set(ue,0,ue),t.add(Ae)}else{const R=new Fe(new Vn(.3),new qe({color:11702236}));R.position.y=.62,t.add(R)}const m=(((T=(v=p.cells[e.y])==null?void 0:v[e.x])==null?void 0:T.height)??0)*pt;return t.position.set(e.x,m,e.y),t}const Ce=new qe({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),Se=new Fe(new Ze(1,1,1),Ce);Se.visible=!1,ee.add(Se);const it=new qe({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),ze=new Fe(new Ze(1,1,1),it);ze.visible=!1,ee.add(ze);function Le(e,t){var m,v;if(!e){Se.visible=!1;return}const o=(((v=(m=p.cells[e.y])==null?void 0:m[e.x])==null?void 0:v.height)??0)*pt;Se.visible=!0,Se.scale.set(1.04,.14,1.04),Se.position.set(e.x,o+.4,e.y),Ce.color.setHex(t||$==="erase"?14707290:6003711)}function O(e,t){if(!e||!t){ze.visible=!1;return}const o=Math.min(e.x,t.x),m=Math.max(e.x,t.x),v=Math.min(e.y,t.y),T=Math.max(e.y,t.y);ze.visible=!0,ze.scale.set(m-o+1.04,.3,T-v+1.04),ze.position.set((o+m)/2,.3,(v+T)/2)}const Ue=new Wn,mt=new Gn(new De(0,1,0),0);function Ne(e,t){const o=J.domElement.getBoundingClientRect(),m=new Dn((e-o.left)/o.width*2-1,-((t-o.top)/o.height*2-1));Ue.setFromCamera(m,fe);const v=(ue,Be)=>ue>=0&&Be>=0&&ue<p.size.w&&Be<p.size.d;if(w){const ue=Ue.intersectObject(w,!0);for(const Be of ue){const Et=Be.point.clone();Be.face&&Et.addScaledVector(Be.face.normal,-.05);const Yt=Math.round(Et.x),Xt=Math.round(Et.z);if(v(Yt,Xt))return{x:Yt,y:Xt}}}const T=new De;if(!Ue.ray.intersectPlane(mt,T))return null;const R=Math.round(T.x),Ae=Math.round(T.z);return v(R,Ae)?{x:R,y:Ae}:null}const s=a("msg");let n=0;function f(e,t=!1){s.textContent=e,s.style.color=t?"#ffd166":"#7fd17f",clearTimeout(n);const o=A.querySelector("#mtoast");o&&bt.matches&&(o.textContent=e,o.style.display="block",o.style.borderColor=t?"#ffd166":"#2b3547"),n=window.setTimeout(()=>{s.textContent="",o&&(o.style.display="none")},4500)}function c(e){a("guide").style.display=e?"block":"none"}a("help").addEventListener("click",()=>c(!0));function h(e){e&&(M(),c(!1))}function r(){de.commit(p)&&(H(),je(),oe())}function E(e,t){p=e,Re(),l(),M(),r(),t&&f(t)}function H(){a("undo").disabled=!de.canUndo(),a("redo").disabled=!de.canRedo();const e=A.querySelector("#mUndo");e&&(e.disabled=!de.canUndo(),a("mRedo").disabled=!de.canRedo())}function Q(){const e=de.undo();e&&(p=e,Re(),M(),H(),je(),oe(),f(i("tool.common.undone")))}function me(){const e=de.redo();e&&(p=e,Re(),M(),H(),je(),oe(),f(i("tool.common.redone")))}a("undo").addEventListener("click",Q),a("redo").addEventListener("click",me);let _="none",He=!1,y=0,P=0,Y=new Set,ce=null,pe=null,le=null;function Ot(e,t,o){const m=`${t},${o}`;Y.has(m)||(Y.add(m),h(ut(p,e,t,o,ne())),e==="port"&&!(t===0||o===0||t===p.size.w-1||o===p.size.d-1)&&f(i("tool.forge.portEdgeOnly"),!0))}function _e(e,t){if(ce&&(ce.x!==t.x||ce.y!==t.y)){let{x:o,y:m}=ce;const v=Math.max(Math.abs(t.x-o),Math.abs(t.y-m));for(let T=1;T<=v;T++)Ot(e,Math.round(o+(t.x-o)*(T/v)),Math.round(m+(t.y-m)*(T/v)))}else Ot(e,t.x,t.y);ce=t}J.domElement.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;J.domElement.setPointerCapture(e.pointerId),y=e.clientX,P=e.clientY;const t=Ne(e.clientX,e.clientY);if(e.button===2){t?(_="erase",Y=new Set,ce=null,_e("erase",t)):_="orbit";return}if(e.button===1||He||!t){_="orbit";return}if(e.button===0){if(g==="rect"){_="rect",pe=t,le=t,O(pe,le);return}if(g==="fill"){h(Tt(p,$,t.x,t.y,ne())),r();return}_="paint",Y=new Set,ce=null,_e($,t)}});let vt=null;J.domElement.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const t=Ne(e.clientX,e.clientY);vt=t,lt(t),Le(t,_==="erase"),_==="orbit"?(D+=(e.clientX-y)*.008,te=Math.min(1.4,Math.max(.15,te+(e.clientY-P)*.006))):(_==="paint"||_==="erase")&&t?_e(_==="erase"?"erase":$,t):_==="rect"&&t&&(le=t,O(pe,le)),y=e.clientX,P=e.clientY}),J.domElement.addEventListener("pointerup",e=>{e.pointerType!=="touch"&&(_==="rect"&&pe&&le?(h(Pt(p,$,pe.x,pe.y,le.x,le.y,ne())),r()):_==="paint"||_==="erase"?r():_==="orbit"&&oe(),_="none",pe=le=null,ce=null,O(null,null))}),J.domElement.addEventListener("pointerleave",()=>{Le(null,!1),lt(null)}),J.domElement.addEventListener("contextmenu",e=>e.preventDefault()),J.domElement.addEventListener("wheel",e=>{e.preventDefault(),X=Math.min(40,Math.max(3,X*(e.deltaY>0?1.08:.93)))},{passive:!1});const bt=matchMedia("(max-width: 900px)");function kn(){const e=Math.round(D/(Math.PI/4))*(Math.PI/4);Math.abs(D-e)<5*Math.PI/180&&(D=e)}let Me="none",st=null;function Rt(){Me="none",st=null,pe=le=null,ce=null,O(null,null),Le(null,!1)}Xn(J.domElement,{strokeStart(e,t){const o=Ne(e,t);if(!o){Me="none";return}if(st=JSON.stringify(p),g==="rect"){Me="rect",pe=o,le=o,O(pe,le);return}if(Me="paint",Y=new Set,ce=null,g==="fill"){h(Tt(p,$,o.x,o.y,ne())),Y.add(`${o.x},${o.y}`);return}_e($,o),Le(o,$==="erase")},strokeMove(e,t){const o=Ne(e,t);o&&(Me==="rect"?(le=o,O(pe,le)):Me==="paint"&&g==="brush"&&(_e($,o),Le(o,$==="erase")))},strokeEnd(){Me==="rect"&&pe&&le&&h(Pt(p,$,pe.x,pe.y,le.x,le.y,ne())),Me!=="none"&&(r(),tt()),Rt()},strokeCancel(){Me==="paint"&&st&&(p=JSON.parse(st),M(),je()),Rt()},orbit(e,t){D+=e*.008,te=Math.min(1.4,Math.max(.15,te+t*.006))},orbitEnd(){kn(),oe()},pinch(e){X=Math.min(40,Math.max(3,X/e))},undoTap(){Q(),tt()},redoTap(){me(),tt()},longPress(e,t){const o=Ne(e,t);o&&(Le(o,!1),f(i("tool.forge.cellInfo",{x:o.x,y:o.y,desc:jt(o.x,o.y)})),tt())},strokeSize:()=>Y.size});function jt(e,t){const o=p.cells[t][e],m=[];o.kind==="wall"?m.push(o.low?ae("low"):o.pillar?ae("pillar"):o.breakable?ae("breakable"):ae("wall")):(m.push(o.floorFeat==="water"?ae("water"):o.floorFeat==="slip"?ae("slip"):ae("floor")),o.hazard&&m.push(i("tool.forge.cell.hazard",{el:i(`elem.${o.hazard.element}`)})),(o.height??0)>0&&m.push(i("tool.forge.cell.height",{n:o.height??0})));const v=p.props.find(R=>R.x===e&&R.y===t);v&&m.push(et(v.kind)?ae(v.kind):v.kind);const T=p.spawns.find(R=>R.x===e&&R.y===t);return T&&m.push(T.monType?nt(T.monType):i("tool.forge.cell.spawnAuto")),p.ports.some(R=>R.x===e&&R.y===t)&&m.push(ae("port")),m.join("・")}function lt(e){const t=a("hoverhint");if(!e){t.textContent=i("tool.forge.hoverIdle");return}const o=$==="spawn"?F?nt(F):i("tool.forge.auto"):ae($),m=$==="erase"?i("tool.forge.verb.erase"):g==="rect"?i("tool.forge.verb.rect",{name:o}):g==="fill"?i("tool.forge.verb.fill",{name:o}):i("tool.forge.verb.place",{name:o});t.textContent=i("tool.forge.hoverLine",{x:e.x,y:e.y,desc:jt(e.x,e.y),verb:m})}const $n=e=>{var o,m,v;if(B!=="room"||((o=e.target)==null?void 0:o.tagName)==="INPUT"||((m=e.target)==null?void 0:m.tagName)==="SELECT"||((v=e.target)==null?void 0:v.tagName)==="TEXTAREA")return;if(e.code==="Space"){He=!0,e.preventDefault();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="z"){e.preventDefault(),e.shiftKey?me():Q();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault(),me();return}const t=e.key.toLowerCase();if(t==="b")we("brush");else if(t==="r")we("rect");else if(t==="f")we("fill");else if(t==="escape")_="none",pe=le=null,O(null,null),c(!1);else if(t==="arrowleft")D-=Math.PI/24;else if(t==="arrowright")D+=Math.PI/24;else if(t==="arrowup")te=Math.min(1.4,te+.05);else if(t==="arrowdown")te=Math.max(.15,te-.05);else{const T=sn.find(R=>R.key===t);T&&Te(T.id)}},Ln=e=>{e.code==="Space"&&(He=!1)};j.own(window,"keydown",$n),j.own(window,"keyup",Ln),a("camL").addEventListener("click",()=>{D-=Math.PI/4,oe()}),a("camR").addEventListener("click",()=>{D+=Math.PI/4,oe()}),a("camIn").addEventListener("click",()=>{X=Math.max(3,X*.8),oe()}),a("camOut").addEventListener("click",()=>{X=Math.min(40,X*1.25),oe()});const Je=new Zt({antialias:!0,preserveDrawingBuffer:!0});Je.setSize(96,96);const Ie=new Qt,gt=new en(40,1,.05,100);Ie.add(new qn(16777215,.85));const Bt=new St(16769725,1);Bt.position.set(3,6,4),Ie.add(Bt);function rt(e){Ie.background=new nn(tn[ie].bg),Ie.add(e);const t=new Jn().setFromObject(e),o=t.getCenter(new De),m=t.getSize(new De),v=Math.max(m.x,m.y,m.z)*.62+.24;gt.position.set(o.x+v*1.35,o.y+v*1.15,o.z+v*1.85),gt.lookAt(o),Je.render(Ie,gt);const T=Je.domElement.toDataURL();return Ie.remove(e),T}const be=new Map;function dt(e){const t=`tile:${e}`;if(!be.has(t)){const o=$e.buildSample(ie,e);o.position.set(-1,0,-1);const m=new Qe;m.add(o),be.set(t,rt(m))}return be.get(t)}function wt(){if(!be.has("port")){const e={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};be.set("port",rt($e.buildPrefabPreview(ie,e)))}return be.get("port")}function xt(e){const t=`mon:${e}`;return be.has(t)||be.set(t,rt(K(L(e)))),be.get(t)}function Mn(e){const t=`pf:${e.id}:${e.updatedAt}`;return be.has(t)||be.set(t,rt($e.buildPrefabPreview(ie,e))),be.get(t)}const yt=[];function Oe(e,t,o,m,v,T,R,Ae){const ue=document.createElement("div");ue.className="swatch",ue.title=Ae??"",ue.innerHTML=`${m?`<img src="${m}" alt="" />`:`<div class="glyph">${v??""}</div>`}${T?`<span class="kbd">${T}</span>`:""}<div class="nm">${o}</div>`,ue.addEventListener("click",()=>Te(t,R)),e.appendChild(ue),yt.push({el:ue,brush:t,monType:R})}function qt(){for(const e of["palTerrain","palProps","palMisc","palSpawns"])a(e).innerHTML="";yt.length=0;for(const e of sn)e.cat==="terrain"?Oe(a("palTerrain"),e.id,ae(e.id),e.sample?dt(e.sample):null,e.id==="down"?"▼":null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="prop"?Oe(a("palProps"),e.id,ae(e.id),e.sample?dt(e.sample):null,null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="port"?Oe(a("palMisc"),e.id,ae(e.id),wt(),null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="erase"&&Oe(a("palMisc"),e.id,ae(e.id),null,"🧽","E",void 0,i(`tool.forge.brushHint.${e.id}`));Oe(a("palSpawns"),"spawn",i("tool.forge.auto"),null,"？",void 0,void 0,i("tool.forge.autoHint"));for(const e of Ct)Oe(a("palSpawns"),"spawn",nt(e.name),xt(e.name),null,void 0,e.name,i("tool.forge.monHint",{min:e.min,max:e.max})+(e.size?`・${e.size}×${e.size}`:""))}const En={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function ct(){const e=a("palopts");e.innerHTML=`<span>${$t(i("tool.forge.attrLabel"))}</span>`;for(const m of["fire","ice","earth","poison","holy"]){const v=document.createElement("button");v.className="chip"+(m===q?" on":""),v.style.background=En[m],v.title=i(`elem.${m}`),v.addEventListener("click",()=>{q=m,ct(),Ke(),oe()}),e.appendChild(v)}const t=document.createElement("span");t.textContent=`　${i("tool.forge.powerLabel")}`;const o=document.createElement("input");o.type="number",o.min="1",o.max="40",o.value=String(se),o.className="num",o.style.width="3.4em",o.addEventListener("change",()=>{se=Math.max(1,Math.min(40,Number(o.value)||6)),oe()}),e.append(t,o)}function Te(e,t){$=e,e==="spawn"&&(F=t),Cn(e,e==="spawn"?t:void 0),!et(e).areaOk&&g!=="brush"&&(we("brush"),f(i("tool.forge.brushOneOnly",{name:ae(e)}))),Ke(),lt(vt),oe()}function we(e){if(e!=="brush"&&!et($).areaOk){f(i("tool.forge.shapeOneOnly",{name:ae($)}),!0);return}g=e,Ke(),oe()}function Ke(){const e=et($);for(const v of yt)v.el.classList.toggle("on",v.brush===$&&($!=="spawn"||v.monType===F));a("shBrush").classList.toggle("on",g==="brush"),a("shRect").classList.toggle("on",g==="rect"),a("shFill").classList.toggle("on",g==="fill"),a("nowname").textContent=$==="spawn"?i("tool.forge.nowSpawn",{name:F?nt(F):i("tool.forge.auto")}):$==="hazard"?i("tool.forge.nowHazard",{el:i(`elem.${q}`)}):ae(e.id),a("nowshape").textContent=`（${i(`tool.common.shape.${g}`)}）`;const t=a("nowimg"),o=$==="spawn"?F?xt(F):null:$==="port"?wt():e.sample?dt(e.sample):null;o?(t.src=o,t.style.display="block"):t.style.display="none",a("palopts").classList.toggle("show",$==="hazard");const m=A.querySelector("#mNowImg");m&&(o?(m.src=o,m.style.display="block"):m.style.display="none",a("mNowName").textContent=a("nowname").textContent??"",a("mShB").classList.toggle("on",g==="brush"),a("mShR").classList.toggle("on",g==="rect"),a("mShF").classList.toggle("on",g==="fill"),Hn())}a("shBrush").addEventListener("click",()=>we("brush")),a("shRect").addEventListener("click",()=>we("rect")),a("shFill").addEventListener("click",()=>we("fill"));function Re(){a("pid").value=p.id,a("pname").value=p.name,a("pw").value=String(p.size.w),a("pd").value=String(p.size.d),a("pdepth").value=`${p.meta.depthRange[0]}-${p.meta.depthRange[1]}`,a("pweight").value=String(p.meta.weight),a("ptags").value=p.meta.tags.join(" "),a("cPorts").checked=p.meta.solvability.portsConnected,a("cHaz").checked=p.meta.solvability.hazardAvoidable}function Dt(){p.id=a("pid").value.trim()||p.id,p.name=a("pname").value.trim()||p.name;const e=a("pdepth").value.split("-").map(t=>Math.max(1,Math.min(99,Number(t)||1)));p.meta.depthRange=[e[0]??1,Math.max(e[0]??1,e[1]??e[0]??99)],p.meta.weight=Math.max(1,Math.min(9,Number(a("pweight").value)||3)),p.meta.tags=a("ptags").value.split(/[\s,、]+/).map(t=>t.trim()).filter(Boolean),p.meta.solvability.portsConnected=a("cPorts").checked,p.meta.solvability.hazardAvoidable=a("cHaz").checked}for(const e of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])a(e).addEventListener("change",()=>{Dt(),r()});a("applySize").addEventListener("click",()=>{const e=Number(a("pw").value),t=Number(a("pd").value),o=on(p,e,t);Re(),l(),M(),r();const m=o.ports+o.props+o.spawns;f(m?i("tool.forge.resizedDrop",{w:p.size.w,d:p.size.d,n:m,ports:o.ports,props:o.props,spawns:o.spawns}):i("tool.forge.resized",{w:p.size.w,d:p.size.d}),m>0)}),a("newpf").addEventListener("click",()=>{const e=Math.floor(Math.random()*900)+100;E(zt(`prefab-${e}`,i("tool.forge.newName",{n:e}),p.size.w,p.size.d,at()),i("tool.forge.newSaid"))});function je(){const e=an(p),t=a("solv");t.innerHTML=e.items.map(v=>`<div class="s-${v.level}">${v.level==="ok"?"✓":v.level==="warn"?"⚠":"✗"} ${$t(v.key?i(v.key,v.params):v.msg)}</div>`).join("");const o=a("save");o.disabled=e.saveBlocked,a("savenote").textContent=e.saveBlocked?i("tool.forge.saveBlockedNote",{reason:e.blockReasonKey?i(e.blockReasonKey):e.blockReason??""}):i("tool.common.savenote");const m=A.querySelector("#mSolv");if(m){const v=e.items.filter(R=>R.level==="err").length,T=e.items.filter(R=>R.level==="warn").length;m.textContent=v?`✗ ${v}`:T?`⚠ ${T}`:"✓",m.className="mchip "+(v?"err":T?"warn":"ok"),a("mSave").disabled=e.saveBlocked}}function Wt(){return Dt(),Ee.parse({...p,updatedAt:at()})}a("save").addEventListener("click",()=>{kt()});async function kt(){try{const e=Wt(),t=await ve(U("/api/forge/proposal"),{prefab:e,label:e.name,createdBy:"user"});f(i("tool.common.savedFuture",{id:t.id.slice(0,8)}))}catch(e){f(i("tool.common.saveFail",{msg:e.message}),!0)}}async function Gt(e){try{const t=await ve(U("/api/forge/promote"),{proposalId:e});f(t.promotedNote??i("tool.common.adoptedNote"))}catch(t){f(i("tool.common.promoteFail",{msg:t.message}),!0)}}async function Vt(e){try{await ve(U("/api/forge/archive"),{proposalId:e}),f(i("tool.common.archived"))}catch(t){f(i("tool.common.archiveFail",{msg:t.message}),!0)}}async function Ye(){try{const[e,t]=await Promise.all([fetch(U("/api/forge/truth")).then(o=>o.json()),fetch(U("/api/forge/proposals")).then(o=>o.json())]);Sn(t.proposals??[]),zn(e),a("live").innerHTML="<b>· live</b>"}catch{a("live").textContent=i("tool.common.devOff")}}function Sn(e){Ht(a("proposals"),e,{selectedId:re,onView:t=>{Tn(t)},onPromote:t=>{Gt(t)},onArchive:t=>{Vt(t)}})}function zn(e){const t=e.prefabs??[];Qn(a("truth"),t.map(o=>{let m=null;try{m=Mn(Ee.parse(o))}catch{}return{id:o.id,name:po(o),meta:i("tool.forge.cardMeta",{w:o.size.w,d:o.size.d,a:o.meta.depthRange[0],b:o.meta.depthRange[1],wt:o.meta.weight})+(o.meta.tags.length?"・"+o.meta.tags.join("/"):""),thumb:m,onOpen:()=>{E(Ee.parse(o),i("tool.common.openedTruth",{name:o.name}))},onDup:()=>{const v=Ee.parse({...o,id:`${o.id}-2`,name:i("tool.common.copyName",{name:o.name}),updatedAt:at()});E(v,i("tool.common.duplicated",{name:o.name}))},onCopyWorld:()=>{(async()=>{try{const v=await eo("/api/forge","prefab",Ee.parse(o),j.worlds(),ve);v&&f(i("tool.world.copied",{world:v}))}catch(v){f(i("tool.world.copyFail",{msg:v.message}),!0)}})()}}}),i("tool.forge.truthEmpty"))}async function Tn(e){const t=await fetch(U(`/api/forge/proposal?id=${encodeURIComponent(e)}`)).then(m=>m.json());re=e;const o=(t.prefabs??[])[t.prefabs.length-1];o&&E(Ee.parse(o),i("tool.common.viewingFuture",{id:e.slice(0,8)})),Ye()}function $t(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}const Pn=j.events.on("forge",()=>{Ye()});let Lt=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function Cn(e,t){Lt=[{brush:e,monType:t},...Lt.filter(o=>o.brush!==e||o.monType!==t)].slice(0,5)}function Nn(e){if(e.brush==="spawn")return e.monType?`<img src="${xt(e.monType)}" alt="" />`:'<div class="glyph">？</div>';if(e.brush==="port")return`<img src="${wt()}" alt="" />`;if(e.brush==="erase")return'<div class="glyph">🧽</div>';if(e.brush==="down")return'<div class="glyph">▼</div>';const t=et(e.brush);return t.sample?`<img src="${dt(t.sample)}" alt="" />`:'<div class="glyph"></div>'}function Hn(){const e=A.querySelector("#hrecent");if(e){e.innerHTML="";for(const t of Lt){const o=document.createElement("button");o.className="hswatch"+(t.brush===$&&(t.brush!=="spawn"||t.monType===F)?" on":""),o.innerHTML=`${Nn(t)}<span class="nm">${$t(t.brush==="spawn"?t.monType?nt(t.monType):i("tool.forge.auto"):ae(t.brush))}</span>`,o.addEventListener("click",()=>Te(t.brush,t.monType)),e.appendChild(o)}}}const Xe=Zn(["sheetSide","sheetLoop"]);function Ut(){bt.matches?(a("sheetSideBody").append(a("topbar"),a("side")),a("sheetLoopBody").append(a("loop"))):(Xe.closeAll(),a("app").insertBefore(a("side"),a("stagewrap")),a("stagewrap").insertBefore(a("topbar"),a("mchips")),a("app").appendChild(a("loop"))),b()}a("mMenu").addEventListener("click",()=>Xe.open("sheetSide")),a("mShelf").addEventListener("click",()=>Xe.open("sheetLoop")),a("mSolv").addEventListener("click",()=>Xe.open("sheetSide")),a("hMore").addEventListener("click",()=>Xe.open("sheetSide")),a("mUndo").addEventListener("click",Q),a("mRedo").addEventListener("click",me),a("mFit").addEventListener("click",()=>{l(),oe()}),a("mReach").addEventListener("click",()=>{C=!C,a("mReach").classList.toggle("on",C),ye()}),a("mSave").addEventListener("click",()=>{tt(),kt()}),a("mShB").addEventListener("click",()=>we("brush")),a("mShR").addEventListener("click",()=>we("rect")),a("mShF").addEventListener("click",()=>we("fill")),j.own(bt,"change",Ut);function An(){fe.position.set(d.x+X*Math.sin(D)*Math.cos(te),d.y+X*Math.sin(te),d.z+X*Math.cos(D)*Math.cos(te)),fe.lookAt(d),J.render(ee,fe)}let _t=0,Jt=!1;function Kt(){Jt||(_t=requestAnimationFrame(Kt),An())}window.cdForge={paint:(e,t,o)=>{var m;return o&&Te(o),h(ut(p,$,e,t,ne())),r(),(m=p.cells[t])==null?void 0:m[e]},rect:(e,t,o,m,v)=>{v&&Te(v),h(Pt(p,$,e,t,o,m,ne())),r()},fill:(e,t,o)=>{o&&Te(o),h(Tt(p,$,e,t,ne())),r()},erase:(e,t)=>{var o;return h(ut(p,"erase",e,t)),r(),(o=p.cells[t])==null?void 0:o[e]},spawn:(e,t,o)=>{Te("spawn",o),h(ut(p,"spawn",e,t,ne())),r()},tool:(e,t)=>Te(e,t),shapeMode:e=>we(e),hazard:(e,t)=>{q=e,t&&(se=t),ct()},undo:Q,redo:me,resize:(e,t)=>{const o=on(p,e,t);return Re(),l(),M(),r(),o},newPrefab:(e,t,o,m)=>E(zt(e,t,o,m,at())),prefab:()=>Wt(),draft:()=>p,solv:()=>an(p),save:()=>kt(),promote:e=>Gt(e),archive:e=>Vt(e),refresh:()=>Ye(),view:(e,t,o)=>{D=e,te=t,o!=null&&(X=o)},state:()=>({brush:$,shape:g,spawnType:F??null,hazardElement:q,canUndo:de.canUndo(),canRedo:de.canRedo(),guide:a("guide").style.display!=="none"}),draws:()=>J.info.render.calls,screenOf:(e,t)=>{var T,R;const o=(((R=(T=p.cells[t])==null?void 0:T[e])==null?void 0:R.height)??0)*pt,m=new De(e,o,t).project(fe),v=J.domElement.getBoundingClientRect();return{cx:v.left+(m.x+1)/2*v.width,cy:v.top+(1-m.y)/2*v.height}},cellAt:(e,t)=>Ne(e,t)};async function Fn(e){try{const o=((await fetch(U("/api/forge/truth")).then(m=>m.json())).prefabs??[]).find(m=>m.id===e);o?E(Ee.parse(o),i("tool.common.openedTruth",{name:o.name})):f(i("tool.studio.deepMiss",{id:e}),!0)}catch{}}const In=At(()=>{qt(),ct(),Ke(),je(),lt(vt),Ye()}),Mt=I();qt(),ct(),de.reset(p),Re(),Mt||l(),Ke(),H(),je(),M(),Ut(),b(),c(!Mt),Mt&&f(i("tool.common.restored")),Ye(),Kt();try{const e=sessionStorage.getItem("cdForgeModeM4");(e==="town"||e==="pin")&&G(e)}catch{}return{applyParams(e){const t=e.get("tab")??e.get("mode");t==="town"?G("town"):t==="pin"?G("pin"):t==="room"&&G("room");const o=e.get("id");o&&(G("room"),Fn(o))},dispose(){Jt=!0,cancelAnimationFrame(_t),clearTimeout(n),Pn(),In(),S.dispose(),u.dispose(),oe();try{J.dispose(),J.forceContextLoss(),J.domElement.remove()}catch{}try{Je.dispose(),Je.forceContextLoss()}catch{}delete window.cdForge}}}};export{So as forgePanel};
