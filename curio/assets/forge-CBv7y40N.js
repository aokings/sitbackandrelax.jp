import{W as pn,f as Jn,S as un,P as fn,C as mn,H as Yn,D as Bt,d as rt,M as Qe,B as bt,A as Xn,V as dt,g as Zn,R as Qn,h as eo,G as xt,O as to,e as no}from"./three.module-B1bP4c5T.js";import{E as hn,f as oo,V as ao,S as Tt,d as io,m as so}from"./render-voxel-FJ_3_tE3.js";import{P as De,e as qt}from"./prefab-DsCyDzqv.js";import{r as vn,E as lo,c as gn,a as Ct,f as Dt,b as Gt,d as wt,B as bn,e as ro}from"./forge-edit-ok95kW6h.js";import{a as co}from"./touch-input-D1HYJrcI.js";import{r as Yt,i as po,b as yt,a as uo}from"./tool-shelf-w4U13pug.js";import{M as Wt}from"./dungeon-DXz4FGgx.js";import{t as o,c as Xt,g as Zt,D as An,x as kt,y as fo}from"./world-ui-GIWH7IUu.js";import{o as Qt}from"./studio-D29k-jEz.js";import{a as mo}from"./playtest-core-Y_OPZXI-.js";import{o as xn}from"./testbed-BuwQcHHt.js";import{d as wn,t as Vt,T as ct,i as _t,l as yn,v as ho,j as kn,k as vo,n as Ut,q as Pt,u as Nt,w as $n,x as Ln,P as En,y as Mn,z as Sn,A as $t}from"./tables-CeMbYj3G.js";import{T as Fn}from"./tables-doc-Dj1yoess.js";import{c as go,f as bo,p as Kt,a as zn,b as xo}from"./modelref-picker-DHEkcFBm.js";import"./voxmodel-BvUzcFRp.js";import"./gamepack-BTweR0v7.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./creator-auth-C2cecs39.js";import"./tuner-core-DO9AaxZD.js";const wo=`<!-- ============================================================
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
  /* §3-4 stages：段階の帯（base/段階チップ＋when 編集）。ghost＝他レイヤーの薄写し */
  #tstages { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; padding: 7px 12px; border-bottom: 1px solid var(--line); background: var(--panel); font-size: 12px; }
  #tstages button.on { background: var(--accent); color: #fff; }
  #tstages input[type="text"] { width: 8em; font-size: 11px; }
  #tstages .sub { font-size: 11px; }
  #tgrid .tc.ghost { opacity: 0.38; }
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
  /* §8-2：NPC 姿ピッカー（smith/people と同じ共有 class＝modelref-picker.ts の pickerCell が使う） */
  .mpickcur { display: flex; align-items: center; gap: 8px; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; }
  .mpickgrid { display: flex; flex-direction: column; gap: 6px; max-height: 220px; overflow-y: auto; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; }
  .mpickhead { font-size: 11px; color: var(--muted); }
  .mpickrow { display: flex; flex-wrap: wrap; gap: 6px; }
  .mpickcell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; width: 52px; min-height: 52px; border: 1px solid var(--line); border-radius: 6px; padding: 3px; cursor: pointer; background: #232c3e; }
  .mpickcell:hover { border-color: var(--accent); }
  .mpickcell.sel { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .mpickcell img { width: 44px; height: 44px; border-radius: 4px; background: #0d1117; image-rendering: pixelated; }
  .mpickcell .nm { font-size: 9px; color: var(--muted); max-width: 48px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mpickcell .tag { font-size: 9px; color: var(--muted); white-space: normal; overflow-wrap: anywhere; text-align: center; }
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
  /* §gate6 効果 chips（会話エディタ＋プレビュー「獲得」） */
  .fxchip { display: inline-flex; align-items: center; gap: 3px; background: #2c3850; border: 1px solid var(--line); border-radius: 10px; padding: 1px 6px; font-size: 10px; color: #ffe9a8; white-space: nowrap; }
  .fxchip button { font-size: 9px; padding: 0 3px; background: none; border: none; color: var(--muted); cursor: pointer; }
  #tdlg select[data-act="fxkind"], #tdlg input[data-act="fxval"] { font-size: 10px; }
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
    <div id="tstages"></div>
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
`,y=q=>q.replace(/[&<>"]/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[O]),Tn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),yo=q=>q===An?"comduct":q.replace("/","--"),pt={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},ko={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},Cn={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},Pn={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},$o=["human","elf","dwarf","gnome","halffoot"],Lo=["talker","guide","shop","equip","craft","heal","recruit"];function Eo(q,O){const{wapi:K,postJson:Ee}=O.api,a=i=>q.querySelector(`#${i}`);function z(i,t=!1){const r=a("tmsg");r.textContent=i,r.style.color=t?"#ffd166":"#7fd17f",window.setTimeout(()=>{r.textContent===i&&(r.textContent="")},5e3)}let x=wn(),B="select",Z="shop",ie=3,J=2,Te="plain",$=null,W=-1,oe=null,u=null,M=null,j=!1,se="",ue=null;const ee=go();async function Je(){ue==null&&(ue=await bo(K)),($==null?void 0:$.kind)==="npc"&&_()}const be="cdForgeTownM4";function E(){try{sessionStorage.setItem(be,JSON.stringify({v:1,world:O.world(),plan:x,tool:B,dirty:j,stageI:W,label:a("tlabel").value}))}catch{}}function Ye(){try{const i=sessionStorage.getItem(be);if(!i)return!1;const t=JSON.parse(i);return t.v!==1||t.world!==O.world()?!1:(x=ct.parse(t.plan),B=t.tool??"select",j=!!t.dirty,W=typeof t.stageI=="number"?t.stageI:-1,t.label&&(a("tlabel").value=t.label),!0)}catch{return!1}}function L(){j=!0}const $e=[],Fe=()=>{var i;return W>=0?((i=x.stages)==null?void 0:i[W])??null:null};function F(){const i=Fe();return W>=0&&!i&&(W=-1),i?{buildings:i.buildings,decos:i.decos,holes:$e,npcs:i.npcs}:{buildings:x.buildings,decos:x.decos,holes:x.holes,npcs:x.npcs}}function xe(){if(W<0)return[];const i=(x.stages??[]).filter((t,r)=>r!==W);return[{buildings:x.buildings,decos:x.decos,holes:x.holes,npcs:x.npcs},...i.map(t=>({buildings:t.buildings,decos:t.decos,holes:$e,npcs:t.npcs}))]}const Le=()=>[...x.npcs,...(x.stages??[]).flatMap(i=>i.npcs)];function Ne(i,t){x=i,t!=null&&t.markDirty&&L(),U(),E()}async function te(){var i,t,r,d;try{const k=await fetch(K("/api/tables/truth"));if(k.ok){const l=(r=(t=(i=(await k.json()).docs)==null?void 0:i[0])==null?void 0:t.tables)==null?void 0:r.town;if(l!==void 0)return{p:ct.parse(l),src:"truth"}}}catch{}try{const k=await fetch(K(`/packs/${yo(O.world())}.json`));if(k.ok){const l=(d=(await k.json()).tables)==null?void 0:d.town;if(l!==void 0)return{p:ct.parse(l),src:"pack"}}}catch{}return null}async function He(i=!1){if(j&&!i)return;let t=null;try{t=await te()}catch(r){z(o("tool.town.zodFail",{msg:r.message}),!0);return}t?(se=o("tool.town.truthMeta",{src:t.src,b:t.p.buildings.length,n:t.p.npcs.length,d:Object.keys(t.p.dialogs).length}),j=!1,$=null,u=null,W=-1,Ne(t.p)):(se=o("tool.town.truthNew"),j=!1,Ne(wn())),je()}const Ge=a("tgrid");function f(i,t,r,d){let k="tc",l="",g=`${t},${r}`,v=!1,N=!1;i.decos.some(p=>p.x===t&&p.y===r&&p.kind==="road")&&(k+=" road",N=!0);const de=i.buildings.findIndex(p=>t>=p.x&&t<p.x+p.w&&r>=p.y&&r<p.y+p.d),ce=[...i.decos].reverse().find(p=>p.x===t&&p.y===r&&p.kind!=="road"),ve=i.holes.findIndex(p=>p.x===t&&p.y===r),me=i.npcs.find(p=>p.x===t&&p.y===r);if(de>=0){const p=i.buildings[de];return k+=" bld",l=t===p.x+(p.w>>1)&&r===p.y+(p.d>>1)?pt[p.facility]:"",g=`${o(`fac.${p.facility}`)} (${p.facility})`,v=d&&($==null?void 0:$.kind)==="building"&&$.i===de,{cls:k+(v?" sel":""),html:`<span style="position:absolute;inset:0;background:${ko[p.facility]};border-radius:3px"></span><span style="position:relative">${l}</span>`,title:g,selHit:v,found:!0}}if(ce){l=Cn[ce.kind]??"",g=o(`tool.town.tool.${ce.kind==="road"?"road":ce.kind}`);const p=i.decos.lastIndexOf(ce);v=d&&($==null?void 0:$.kind)==="deco"&&$.i===p,N=!0}if(ve>=0){const p=i.holes[ve];l=`<b style="color:${Pn[p.element??"plain"]}">▼</b>`,g=p.element?o(`elem.${p.element}`):o("tool.town.holePlain"),v=d&&($==null?void 0:$.kind)==="hole"&&$.i===ve,N=!0}return i.buildings.find(p=>p.door.x===t&&p.door.y===r)&&(l+='<span class="door">🚪</span>',N=!0),me&&(l=`🧍<span class="npcdot" style="background:${me.color}"></span>`,g=`${me.name}（${me.id}）`,v=d&&($==null?void 0:$.kind)==="npc"&&$.id===me.id,N=!0),{cls:k+(v?" sel":""),html:l,title:g,selHit:v,found:N}}function c(i,t){const r=f(F(),i,t,!0);if(r.found||W<0)return r;for(const d of xe()){const k=f(d,i,t,!1);if(k.found)return{cls:k.cls+" ghost",html:k.html,title:k.title,selHit:!1}}return r}function h(){let i="";for(let t=0;t<Pt;t++)for(let r=0;r<Nt;r++){const d=c(r,t);i+=`<div class="${d.cls}" data-x="${r}" data-y="${t}" title="${y(d.title)}">${d.html}</div>`}Ge.innerHTML=i}Ge.addEventListener("click",i=>{const t=i.target.closest(".tc");t&&I(Number(t.dataset.x),Number(t.dataset.y))}),Ge.addEventListener("pointermove",i=>{const t=i.target.closest(".tc");a("thover").textContent=t?`(${t.dataset.x},${t.dataset.y}) ${t.title}`:"—"});const w=()=>{for(let i=1;;i++){const t=`npc-${i}`;if(!Le().some(r=>r.id===t))return t}};function C(i,t){const r=F(),d=r.npcs.find(g=>g.x===i&&g.y===t);if(d)return{kind:"npc",id:d.id};const k=r.buildings.findIndex(g=>i>=g.x&&i<g.x+g.w&&t>=g.y&&t<g.y+g.d);if(k>=0)return{kind:"building",i:k};const l=r.holes.findIndex(g=>g.x===i&&g.y===t);if(l>=0)return{kind:"hole",i:l};for(let g=r.decos.length-1;g>=0;g--)if(r.decos[g].x===i&&r.decos[g].y===t)return{kind:"deco",i:g};return null}function I(i,t){const r=F();if(oe!=null){const l=r.buildings[oe];l&&(l.door={x:i,y:t},z(o("tool.town.doorPlaced"))),oe=null,L(),U(),E();return}if(B==="select"){$=C(i,t),U();return}if(B==="erase"){const l=C(i,t);if((l==null?void 0:l.kind)==="npc"){const g=r.npcs.findIndex(v=>v.id===l.id);g>=0&&r.npcs.splice(g,1)}else if((l==null?void 0:l.kind)==="building")r.buildings.splice(l.i,1);else if((l==null?void 0:l.kind)==="hole")r.holes.splice(l.i,1);else if((l==null?void 0:l.kind)==="deco")r.decos.splice(l.i,1);else return;$=null,z(o("tool.town.erased")),L(),U(),E();return}if(B==="npc"){const l=r.npcs.find(v=>v.x===i&&v.y===t);if(l){$={kind:"npc",id:l.id},U();return}if(r.npcs.length>=16){z(o("tool.town.npcFull"),!0);return}const g=w();r.npcs.push({id:g,name:`NPC${Le().length+1}`,x:i,y:t,race:"human",color:"#e0c060",role:"talker",facing:"s"}),$={kind:"npc",id:g},z(o("tool.town.npcAdded",{name:g})),L(),U(),E();return}if(B==="building"){if(r.buildings.length>=8){z(o("tool.town.bldFull"),!0);return}const l=Math.min(i,Nt-ie),g=Math.min(t,Pt-J),v={x:Math.min(l+(ie>>1),Nt-1),y:Math.min(g+J,Pt-1)};r.buildings.push({x:l,y:g,w:ie,d:J,facility:Z,door:v}),$={kind:"building",i:r.buildings.length-1},z(o("tool.town.placed",{what:o(`fac.${Z}`)})),L(),U(),E();return}if(B==="hole"){if(W>=0){z(o("tool.town.stageNoHole"),!0);return}const l=Te==="plain"?null:Te,g=r.holes.findIndex(v=>v.x===i&&v.y===t);if(g>=0)r.holes[g].element=l;else if(r.holes.length>=6){z(o("tool.town.holeFull"),!0);return}else r.holes.push({x:i,y:t,element:l});z(o("tool.town.placed",{what:"▼"})),L(),U(),E();return}const d=B.slice(5),k=r.decos.findIndex(l=>l.x===i&&l.y===t&&l.kind===d);k>=0?r.decos.splice(k,1):r.decos.push({x:i,y:t,kind:d}),L(),U(),E()}const D=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],P=i=>o(`tool.town.tool.${i.startsWith("deco-")?i.slice(5):i}`);function X(){const i=a("tpal");i.innerHTML="";for(const t of D){const r=document.createElement("button");r.className=B===t?"on":"",r.textContent=P(t),r.addEventListener("click",()=>{B=t,oe=null,X(),he(),E()}),i.appendChild(r)}}function he(){const i=a("tpalopts");if(i.innerHTML="",i.style.display=B==="building"||B==="hole"?"flex":"none",B==="building"){const t=document.createElement("select");t.innerHTML=Object.keys(pt).map(k=>`<option value="${k}"${k===Z?" selected":""}>${pt[k]} ${y(o(`fac.${k}`))}</option>`).join(""),t.addEventListener("change",()=>{Z=t.value});const r=(k,l,g)=>{const v=document.createElement("input");return v.type="number",v.min="1",v.max=String(g),v.value=String(k),v.className="num",v.style.width="3em",v.addEventListener("change",()=>l(Math.max(1,Math.min(g,Number(v.value)||1)))),v},d=document.createElement("span");d.textContent=o("tool.town.sizeLabel"),i.append(t,d,r(ie,k=>{ie=k},8),document.createTextNode("×"),r(J,k=>{J=k},6))}else if(B==="hole"){const t=document.createElement("span");t.textContent=o("tool.town.holeElem"),i.appendChild(t);for(const r of["fire","ice","earth","poison","holy","plain"]){const d=document.createElement("button");d.className="chip"+(r===Te?" on":""),d.style.background=Pn[r],d.title=r==="plain"?o("tool.town.holePlain"):o(`elem.${r}`),d.addEventListener("click",()=>{Te=r,he()}),i.appendChild(d)}}}const S=a("tdetail");function _(){if(oe=oe,!$){S.innerHTML=`<div class="sub">${y(o("tool.town.detailIdle"))}</div>`;return}if($.kind==="npc")return Et($.id);if($.kind==="building")return V($.i);if($.kind==="hole"){const t=F().holes[$.i];if(!t)return $=null,_();S.innerHTML=`<div><b>▼ ${y(t.element?o(`elem.${t.element}`):o("tool.town.holePlain"))}</b>（${t.x},${t.y}）</div>
        <div class="row"><button id="tdel" type="button">${y(o("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{F().holes.splice($.i,1),$=null,L(),U(),E()});return}const i=F().decos[$.i];if(!i)return $=null,_();S.innerHTML=`<div><b>${Cn[i.kind]||"·"} ${y(o(`tool.town.tool.${i.kind}`))}</b>（${i.x},${i.y}）</div>
      <div class="row"><button id="tdel" type="button">${y(o("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{F().decos.splice($.i,1),$=null,L(),U(),E()})}function V(i){const t=F().buildings[i];if(!t)return $=null,_();S.innerHTML=`
      <div><b>${pt[t.facility]} ${y(o(`fac.${t.facility}`))}</b>（${t.x},${t.y}・${t.w}×${t.d}）</div>
      <div class="kv"><span class="lbl">${y(o("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(pt).map(r=>`<option value="${r}"${t.facility===r?" selected":""}>${pt[r]} ${y(o(`fac.${r}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${y(o("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${t.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${t.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${oe===i?' class="on"':""}>${y(o("tool.town.doorSet"))}</button></div>
      <div class="sub">${y(o("tool.town.doorHint"))}（🚪 ${t.door.x},${t.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${y(o("tool.town.delete"))}</button></div>`,a("tbfac").addEventListener("change",()=>{t.facility=a("tbfac").value,L(),U(),E()}),a("tbw").addEventListener("change",()=>{t.w=Math.max(1,Math.min(8,Number(a("tbw").value)||t.w)),t.x=Math.min(t.x,Nt-t.w),L(),U(),E()}),a("tbd").addEventListener("change",()=>{t.d=Math.max(1,Math.min(6,Number(a("tbd").value)||t.d)),t.y=Math.min(t.y,Pt-t.d),L(),U(),E()}),a("tbdoor").addEventListener("click",()=>{oe=oe===i?null:i,_()}),a("tdel").addEventListener("click",()=>{F().buildings.splice(i,1),$=null,oe=null,L(),U(),E()})}function Xe(i,t){i.modelRef=t.trim()?Ln(t.trim()):void 0,L(),_(),E()}function et(i){const t=a("tnmrefcur"),r=a("tnmrefgrid");if(!t||!r)return;t.innerHTML="";const d=i.modelRef!==void 0?$n(i.modelRef):"",k=document.createElement("div");if(k.className="sub",k.textContent=o("tool.smith.modelPickCurrent"),d)t.append(k,Kt(ee,d,zn(ue,d),!0,v=>Xe(i,v)));else{const v=document.createElement("span");v.className="sub",v.textContent=o("tool.people.pickNone"),t.append(k,v)}r.innerHTML="";const l=xo();if(l.length){const v=document.createElement("div");v.className="mpickhead",v.textContent=o("tool.smith.modelPickBuiltin"),r.appendChild(v);const N=document.createElement("div");N.className="mpickrow";for(const R of l)N.appendChild(Kt(ee,R,R,R===d,de=>Xe(i,de)));r.appendChild(N)}const g=ue??[];if(g.length){const v=document.createElement("div");v.className="mpickhead",v.textContent=o("tool.smith.modelPickTruth"),r.appendChild(v);const N=document.createElement("div");N.className="mpickrow";for(const R of g)N.appendChild(Kt(ee,R.id,zn(ue,R.id),R.id===d,de=>Xe(i,de)));r.appendChild(N)}}function Et(i){const t=F().npcs.find(d=>d.id===i);if(!t)return $=null,_();const r=(t.lines??[]).map(d=>d.text).join(`
`);S.innerHTML=`
      <div><b>🧍 ${y(t.name)}</b> <span class="sub">${y(t.id)}（${t.x},${t.y}）</span></div>
      <div class="kv"><span class="lbl">${y(o("tool.town.npcName"))}</span><input id="tnname" type="text" value="${y(t.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${y(o("tool.town.race"))}</span><select id="tnrace">
        ${$o.map(d=>`<option value="${d}"${t.race===d?" selected":""}>${y(o(`tool.town.race.${d}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${y(t.color)}" title="${y(o("tool.town.color"))}" /></div>
      <div class="sub">${y(o("tool.smith.modelRefLbl"))}</div>
      <div id="tnmrefcur" class="mpickcur"></div>
      <div id="tnmrefgrid" class="mpickgrid"></div>
      <details><summary>${y(o("tool.smith.modelPickAdvanced"))}</summary>
        <div class="kv" style="margin-top:6px"><span class="lbl">modelRef</span><input id="tnmreftxt" type="text" value="${y(t.modelRef!==void 0?$n(t.modelRef):"")}" /></div>
      </details>
      <div class="sub">${y(o("tool.smith.modelRefNote"))}</div>
      <div class="kv"><span class="lbl">${y(o("tool.town.role"))}</span><select id="tnrole">
        ${Lo.map(d=>`<option value="${d}"${t.role===d?" selected":""}>${y(d==="talker"?o("tool.town.role.talker"):d==="guide"?o("tool.town.role.guide"):o(`fac.${d}`))}</option>`).join("")}
      </select>
      <span class="lbl">${y(o("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(d=>`<option value="${d}"${(t.facing??"s")===d?" selected":""}>${d}</option>`).join("")}
      </select></div>
      <div class="sub">${y(o("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${y(r)}</textarea>
      <div class="row"><button id="tndlg" type="button">${y(o("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${t.dialog?y(t.dialog):y(o("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${y(o("tool.town.delete"))}</button></div>`,a("tnname").addEventListener("change",()=>{t.name=a("tnname").value.trim()||t.name,L(),U(),E()}),a("tnrace").addEventListener("change",()=>{t.race=a("tnrace").value,L(),et(t),E()}),a("tncolor").addEventListener("change",()=>{t.color=a("tncolor").value,L(),U(),E()}),et(t),a("tnmreftxt").addEventListener("change",()=>{const d=a("tnmreftxt").value.trim();let k;try{k=d?Ln(d):void 0}catch(l){z(o("tool.town.zodFail",{msg:l.message}),!0);return}t.modelRef=k,L(),et(t),E()}),a("tnrole").addEventListener("change",()=>{t.role=a("tnrole").value,L(),E()}),a("tnface").addEventListener("change",()=>{t.facing=a("tnface").value,L(),E()}),a("tnlines").addEventListener("change",()=>{const d=a("tnlines").value.split(`
`).map(l=>l.trim()).filter(Boolean).slice(0,8),k=t.lines??[];t.lines=d.length?d.map((l,g)=>{var v,N;return{text:l,...((v=k[g])==null?void 0:v.text)===l&&((N=k[g])!=null&&N.texts)?{texts:k[g].texts}:{}}}):void 0,L(),le(),E()}),a("tndlg").addEventListener("click",()=>{ut(t)}),a("tdel").addEventListener("click",()=>{const d=F().npcs,k=d.findIndex(l=>l.id===i);k>=0&&d.splice(k,1),$=null,u&&!Le().some(l=>l.dialog===u)&&Mt(),L(),U(),E()})}function ut(i){if(!i.dialog){const t=`dlg-${i.id}`;i.dialog=t,x.dialogs[t]||(x.dialogs[t]={id:t,nodes:[{id:"root",say:"……"}]}),L()}u=i.dialog,M=null,we=null,Me=[],U(),E()}function Mt(){u=null,M=null,we=null,Me=[],Ie()}a("tdlgclose").addEventListener("click",Mt);const tt=()=>u?x.dialogs[u]??null:null,We=i=>{for(let t=1;;t++){const r=`n${t}`;if(!i.nodes.some(d=>d.id===r))return r}},St=i=>i.kind==="setFlag"?`⚑${i.flag}`:i.kind==="unlock"?`🔓${i.gate}`:i.kind==="giveItem"?`🎁${i.item}`:`💰${i.amount}G`,Ve=["setFlag","unlock","giveItem","giveGold"];function Re(i,t){const r=(t??[]).map((k,l)=>`<span class="fxchip">${y(St(k))}<button type="button" data-act="fxdel" data-site="${i}" data-fi="${l}">✕</button></span>`).join(""),d=(t??[]).length<4?`<select data-act="fxkind" data-site="${i}">${Ve.map(k=>`<option value="${k}">${y(o(`tool.town.fx.${k}`))}</option>`).join("")}</select>
         <input type="text" data-act="fxval" data-site="${i}" style="width:5.5em" placeholder="${y(o("tool.town.fxValPh"))}" />
         <button type="button" data-act="fxadd" data-site="${i}">${y(o("tool.town.fxAdd"))}</button>`:"";return`<div class="chrow sub"><span>${y(o("tool.town.fxLabel"))}</span>${r}${d}</div>`}const Oe=/^[a-z0-9][a-z0-9-]*$/;function ft(i,t){const r=t.trim();if(i==="giveGold"){const d=Number(r);return Number.isInteger(d)&&d>=1&&d<=99999?{kind:i,amount:d}:null}return Oe.test(r)?i==="setFlag"?{kind:i,flag:r}:i==="unlock"?{kind:i,gate:r}:{kind:i,item:r}:null}function Ie(){const i=a("tdlg"),t=tt();if(i.classList.toggle("on",!!t),!t)return;a("tdlghead").textContent=o("tool.town.dlgHead",{id:t.id});const r=a("tdlgnodes");r.innerHTML="",t.nodes.forEach((d,k)=>{var ce,ve,me,ge;const l=document.createElement("div");l.className="node";const g=p=>`<option value=""${p===null?" selected":""}>${y(o("tool.town.choiceEnd"))}</option>`+t.nodes.map(T=>`<option value="${y(T.id)}"${p===T.id?" selected":""}>→ ${y(T.id)}</option>`).join("");l.innerHTML=`
        <div class="nid">#${y(d.id)}${k===0?" "+y(o("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${y(d.say)}</textarea>
        <div class="chrow sub"><span>${y(o("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${y(((ce=d.when)==null?void 0:ce.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${y(((ve=d.when)==null?void 0:ve.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${y(((me=d.when)==null?void 0:me.item)??"")}" /></div>
        ${Re("n",d.effects)}
        ${(d.choices??[]).map((p,T)=>{var A,ze,ye;return`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${T}" value="${y(p.text)}" />
          <select data-act="cgoto" data-ci="${T}">${g(p.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${T}">✕</button></div>
        <div class="chrow sub"><span>${y(o("tool.town.choiceWhen"))}</span>
          <input type="text" data-act="cwflag" data-ci="${T}" style="width:5em" placeholder="flag" value="${y(((A=p.when)==null?void 0:A.flag)??"")}" />
          <input type="text" data-act="cwnot" data-ci="${T}" style="width:5em" placeholder="notFlag" value="${y(((ze=p.when)==null?void 0:ze.notFlag)??"")}" />
          <input type="text" data-act="cwitem" data-ci="${T}" style="width:5em" placeholder="item" value="${y(((ye=p.when)==null?void 0:ye.item)??"")}" /></div>
        ${Re(`c${T}`,p.effects)}`}).join("")}
        ${(d.choices??[]).length<4?`<button type="button" data-act="caddc">${y(o("tool.town.addChoice"))}</button>`:""}`;const v=()=>{L(),le(),E()};l.querySelector('[data-act="say"]').addEventListener("change",p=>{d.say=p.target.value||d.say,v()});const N=(p,T)=>{const A={...d.when??{}};T.trim()?A[p]=T.trim():delete A[p],d.when=Object.keys(A).length?A:void 0,v()};l.querySelector('[data-act="wflag"]').addEventListener("change",p=>N("flag",p.target.value)),l.querySelector('[data-act="wnot"]').addEventListener("change",p=>N("notFlag",p.target.value)),l.querySelector('[data-act="witem"]').addEventListener("change",p=>N("item",p.target.value)),l.querySelector('[data-act="delnode"]').addEventListener("click",()=>{t.nodes.splice(k,1),t.nodes.length||t.nodes.push({id:"root",say:"……"});for(const p of t.nodes)for(const T of p.choices??[])T.goto===d.id&&(T.goto=null);L(),Ie(),le(),E()});for(const p of Array.from(l.querySelectorAll('[data-act="ctext"]')))p.addEventListener("change",()=>{const T=d.choices[Number(p.dataset.ci)];T.text=p.value||T.text,v()});for(const p of Array.from(l.querySelectorAll('[data-act="cgoto"]')))p.addEventListener("change",()=>{d.choices[Number(p.dataset.ci)].goto=p.value===""?null:p.value,v()});for(const p of Array.from(l.querySelectorAll('[data-act="cdel"]')))p.addEventListener("click",()=>{d.choices.splice(Number(p.dataset.ci),1),d.choices.length||(d.choices=void 0),L(),Ie(),le(),E()});const R=(p,T,A)=>{const ze=d.choices[p],ye={...ze.when??{}};A.trim()?ye[T]=A.trim():delete ye[T],ze.when=Object.keys(ye).length?ye:void 0,v()};for(const[p,T]of[["cwflag","flag"],["cwnot","notFlag"],["cwitem","item"]])for(const A of Array.from(l.querySelectorAll(`[data-act="${p}"]`)))A.addEventListener("change",()=>R(Number(A.dataset.ci),T,A.value));const de=p=>p==="n"?{get:()=>d.effects,set:T=>{d.effects=T}}:(()=>{const T=d.choices[Number(p.slice(1))];return{get:()=>T.effects,set:A=>{T.effects=A}}})();for(const p of Array.from(l.querySelectorAll('[data-act="fxdel"]')))p.addEventListener("click",()=>{const T=de(p.dataset.site),A=[...T.get()??[]];A.splice(Number(p.dataset.fi),1),T.set(A.length?A:void 0),L(),Ie(),le(),E()});for(const p of Array.from(l.querySelectorAll('[data-act="fxadd"]')))p.addEventListener("click",()=>{const T=p.dataset.site,A=l.querySelector(`[data-act="fxkind"][data-site="${T}"]`),ze=l.querySelector(`[data-act="fxval"][data-site="${T}"]`),ye=ft(A.value,ze.value);if(!ye){z(o("tool.town.fxValPh"),!0);return}const ot=de(T);ot.set([...ot.get()??[],ye]),L(),Ie(),le(),E()});(ge=l.querySelector('[data-act="caddc"]'))==null||ge.addEventListener("click",()=>{d.choices=[...d.choices??[],{text:"…",goto:null}],L(),Ie(),E()}),r.appendChild(l)}),Ce()}a("tdlgaddnode").addEventListener("click",()=>{const i=tt();!i||i.nodes.length>=32||(i.nodes.push({id:We(i),say:"……"}),L(),Ie(),E())});const Ae=()=>({flags:new Set(a("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(a("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});let we=null,Me=[];const ne=()=>we?{flags:we.flags,items:we.items}:Ae();function Ce(){const i=a("tpv"),t=tt();if(!t){i.innerHTML="";return}const r=Zt();let d=`<div class="row"><button type="button" data-act="pvstart">${y(o("tool.town.pvRestart"))}</button></div>`;const k=Me.length?`<div class="pvend">${y(o("tool.town.pvFx"))} ${Me.map(l=>`<span class="fxchip">${y(l.kind==="giveGold"?o("tool.town.pvGold",{n:l.amount}):St(l))}</span>`).join("")}</div>`:"";if(M==="end")d+=`<div class="pvsay">…</div>${k}<div class="pvend">${y(o("tool.town.pvEnd"))}</div>`;else if(M!==null){const l=_t(t,M);if(!l)return M=null,Ce();d+=`<div class="pvsay">🗨 ${y(yn(l.say,l.says,r))}</div>${k}`;const g=ho(l,ne());g.length?d+=g.map(v=>`<button type="button" data-act="pvc" data-ci="${(l.choices??[]).indexOf(v)}">${y(yn(v.text,v.texts,r))}</button>`).join(""):d+=`<div class="pvend">${y(o("tool.town.pvEnd"))}</div>`}i.innerHTML=d,i.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{we=kn(Ae()),Me=[];const l=vo(t,ne());M=l?l.id:"end",l&&Me.push(...Ut(l.effects,we)),Ce()});for(const l of Array.from(i.querySelectorAll('[data-act="pvc"]')))l.addEventListener("click",()=>{var R;const g=M!==null&&M!=="end"?_t(t,M):null,v=(R=g==null?void 0:g.choices)==null?void 0:R[Number(l.dataset.ci)];if(!v)return;we||(we=kn(Ae())),Me.push(...Ut(v.effects,we));const N=v.goto!==null?_t(t,v.goto):null;M=N?N.id:"end",N&&Me.push(...Ut(N.effects,we)),Ce()})}a("tpvflags").addEventListener("change",Ce),a("tpvitems").addEventListener("change",Ce);function le(){const i=a("tlint"),t=Vt(x);i.innerHTML=t.length?t.map(r=>r.level==="error"?`<div class="warn" style="color:#ff8a80">⛔ ${y(o(r.key,r.params))}</div>`:`<div class="warn">⚠ ${y(o(r.key,r.params))}</div>`).join(""):`<div class="ok">${y(o("tool.town.lint.ok"))}</div>`}async function Q(){try{const i=await(await fetch(K("/api/tables/proposals"))).json();Yt(a("tprops"),i.proposals??[],{tag:()=>o("tool.town.capTag"),onView:t=>{nt(t)},onPromote:t=>{_e(t)},onArchive:t=>{Ue(t)}}),a("tplive").textContent="· live",a("tlive").textContent="· live"}catch{a("tprops").innerHTML=`<div class="live">${y(o("tool.town.noApi"))}</div>`,a("tplive").textContent=o("tool.common.devOff"),a("tlive").textContent=o("tool.common.devOff")}je()}function je(){var t;const i=a("ttruth");i.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${y(se)}</span>
      <div class="row"><button type="button" data-act="truth-load">${y(o("tool.town.loadTruth"))}</button></div></div>`,(t=i.querySelector('[data-act="truth-load"]'))==null||t.addEventListener("click",()=>{j=!1,He(!0).then(()=>z(o("tool.town.loaded")))})}async function nt(i){var t,r;try{const d=await(await fetch(K(`/api/tables/proposal?id=${encodeURIComponent(i)}`))).json(),k=(r=(t=d.docs)==null?void 0:t[0])==null?void 0:r.tables.town;if(k===void 0)throw new Error(o("tool.town.propNoTown"));const l=ct.parse(k);$=null,u=null,j=!0,W=-1,Ne(l),z(o("tool.town.loadedProp",{name:d.docs[0].name}))}catch(d){z(d.message,!0)}}async function _e(i){try{await Ee(K("/api/tables/promote"),{proposalId:i}),z(o("tool.town.promoted")),j=!1,Q(),He(!0)}catch(t){z(t.message,!0)}}async function Ue(i){try{await Ee(K("/api/tables/archive"),{proposalId:i}),z(o("tool.town.archived")),Q()}catch(t){z(t.message,!0)}}async function ae(){var l,g;let i;try{x.name=a("tname").value.trim()||x.name,i=ct.parse(x)}catch(v){z(o("tool.town.zodFail",{msg:v.message.slice(0,200)}),!0);return}const t=Vt(i).filter(v=>v.level==="error");if(t.length){z(o("tool.town.errBlock",{n:t.length}),!0),le();return}const r=a("tlabel").value.trim()||i.name;let d={};try{const v=await fetch(K("/api/tables/truth"));v.ok&&(d=((g=(l=(await v.json()).docs)==null?void 0:l[0])==null?void 0:g.tables)??{})}catch{}const k={formatVersion:Fn,id:"tables",name:r,tables:{...d,town:i},createdAt:Tn(),updatedAt:Tn()};try{await Ee(K("/api/tables/proposal"),{tables:k,label:r,createdBy:"user"}),z(o("tool.town.saved",{name:r})),Q()}catch(v){z(o("tool.town.saveFail",{msg:v.message}),!0)}}a("tsave").addEventListener("click",()=>{ae()}),a("tload").addEventListener("click",()=>{j=!1,He(!0).then(()=>z(o("tool.town.loaded")))}),a("tlabel").addEventListener("input",E),a("tname").addEventListener("change",()=>{x.name=a("tname").value.trim()||x.name,L(),E()});function Be(i){W=i,$=null,oe=null,U(),E()}function mt(){var k;const i=a("tstages");i.innerHTML="";const t=(l,g,v,N="")=>{const R=document.createElement("button");return R.type="button",R.textContent=l,R.className=g?"on":"",N&&(R.title=N),R.addEventListener("click",v),i.appendChild(R),R},r=document.createElement("span");r.className="sub",r.textContent=o("tool.town.stagesLabel"),i.appendChild(r),t(o("tool.town.stageBase"),W<0,()=>Be(-1)),(x.stages??[]).forEach((l,g)=>t(`🏗 ${l.id} ⚑${l.when}`,W===g,()=>Be(g),o("tool.town.stageChipTitle",{when:l.when}))),(((k=x.stages)==null?void 0:k.length)??0)<4&&t(o("tool.town.stageAdd"),!1,()=>{var v,N;const l=(((v=x.stages)==null?void 0:v.length)??0)+1;let g=`stage-${l}`;for(let R=l;(N=x.stages)!=null&&N.some(de=>de.id===g);R++)g=`stage-${R+1}`;x.stages=[...x.stages??[],{id:g,when:`${g}-open`,buildings:[],decos:[],npcs:[]}],L(),Be(x.stages.length-1)});const d=Fe();if(d){const l=document.createElement("span");l.className="sub",l.style.display="inline-flex",l.style.gap="4px",l.style.alignItems="center";const g=(ce,ve,me)=>{const ge=document.createElement("input");return ge.type="text",ge.value=ce,ge.placeholder=ve,ge.addEventListener("change",()=>{const p=ge.value.trim();if(!/^[a-z0-9][a-z0-9-]*$/.test(p)){z(o("tool.town.stageIdBad"),!0),ge.value=ce;return}me(p),L(),U(),E()}),l.appendChild(ge),ge},v=document.createElement("span");v.textContent="id",l.appendChild(v),g(d.id,"stage-1",ce=>{d.id=ce});const N=document.createElement("span");N.textContent=o("tool.town.stageWhen"),l.appendChild(N),g(d.when,"flag",ce=>{d.when=ce});const R=document.createElement("button");R.type="button",R.textContent=o("tool.town.stageDel"),R.addEventListener("click",()=>{x.stages=(x.stages??[]).filter((ce,ve)=>ve!==W),x.stages.length||(x.stages=void 0),L(),Be(-1)}),l.appendChild(R),i.appendChild(l);const de=document.createElement("span");de.className="sub",de.textContent=o("tool.town.stageHint"),i.appendChild(de)}}function U(){a("tname").value=x.name,mt(),h(),X(),he(),_(),Ie(),le()}const qe=O.events.on("tables",()=>{Q(),He()}),Se=O.events.on("sculpt",()=>{ue=null,ee.clear(),Je()}),fe=Qt(()=>{Xt(q.querySelector("#townapp")),U(),Q()});return window.cdForgeTown={plan:()=>x,setPlan:i=>Ne(ct.parse(i),{markDirty:!0}),tool:i=>{B=i,X(),he()},click:(i,t)=>I(i,t),select:(i,t)=>($=C(i,t),U(),$),openDialog:i=>{const t=x.npcs.find(r=>r.id===i);return t&&ut(t),(t==null?void 0:t.dialog)??null},lint:()=>Vt(x),stage:i=>(Be(i),W),stages:()=>x.stages??[],save:()=>ae(),promote:i=>_e(i),refresh:()=>Q(),reload:(i=!0)=>He(i),dirty:()=>j},Ye()?(U(),Q()):He(!0).then(()=>{Q()}),Je(),{setVisible(i){a("townapp").classList.toggle("on",i),i&&U()},plan(){return x},dispose(){qe(),Se(),fe(),ee.dispose(),E(),delete window.cdForgeTown}}}const Y=q=>q.replace(/[&<>"]/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[O]),Nn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Hn=q=>q===An?"comduct":q.replace("/","--"),In=["fire","ice","earth","poison","holy"],Jt={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"},Mo=24;function So(q,O){const{wapi:K,postJson:Ee}=O.api,a=f=>q.querySelector(`#${f}`);function z(f,c=!1){const h=a("pmsg");h.textContent=f,h.style.color=c?"#ffd166":"#7fd17f",window.setTimeout(()=>{h.textContent===f&&(h.textContent="")},5e3)}let x=[],B=[],Z=-1,ie="any",J=!1,Te="";const $="cdForgePinM3";function W(){try{sessionStorage.setItem($,JSON.stringify({v:1,world:O.world(),pins:x,dirty:J,label:a("plabel").value}))}catch{}}function oe(){try{const f=sessionStorage.getItem($);if(!f)return!1;const c=JSON.parse(f);return c.v!==1||c.world!==O.world()||!Array.isArray(c.pins)?!1:(x=c.pins,J=!!c.dirty,c.label&&(a("plabel").value=c.label),!0)}catch{return!1}}function u(){J=!0}async function M(){try{const f=await fetch(K("/api/forge/truth"));if(f.ok){B=((await f.json()).prefabs??[]).flatMap(h=>{try{return[De.parse(h)]}catch{return[]}});return}}catch{}try{const f=await fetch(K(`/packs/${Hn(O.world())}.json`));f.ok&&(B=((await f.json()).prefabs??[]).flatMap(h=>{try{return[De.parse(h)]}catch{return[]}}))}catch{}}async function j(){var f,c,h,w;try{const C=await fetch(K("/api/tables/truth"));if(C.ok){const I=(h=(c=(f=(await C.json()).docs)==null?void 0:f[0])==null?void 0:c.tables)==null?void 0:h.pins;if(I!==void 0)return{p:$t.parse(I),src:"truth"}}}catch{}try{const C=await fetch(K(`/packs/${Hn(O.world())}.json`));if(C.ok){const I=(w=(await C.json()).tables)==null?void 0:w.pins;if(I!==void 0)return{p:$t.parse(I),src:"pack"}}}catch{}return null}async function se(f=!1){if(J&&!f)return;let c=null;try{c=await j()}catch(h){z(o("tool.pin.zodFail",{msg:h.message.slice(0,200)}),!0);return}c?(Te=o("tool.pin.truthMeta",{src:c.src,n:c.p.length}),J=!1,Z=c.p.length?0:-1,x=c.p):(Te=o("tool.pin.truthNew"),J=!1,x=[],Z=-1),te(),W(),Fe()}const ue=f=>{var h;const c=B.find(w=>w.id===f);return c?((h=c.names)==null?void 0:h[Zt()])??c.name:f};function ee(f){const c=B.filter(w=>!w.meta.tags.includes("town")&&!w.meta.tags.includes("town-interior")),h=c.map(w=>`<option value="${Y(w.id)}"${w.id===f?" selected":""}>${Y(ue(w.id))}（${w.size.w}×${w.size.d}）</option>`);return f&&!c.some(w=>w.id===f)&&h.unshift(`<option value="${Y(f)}" selected>⚠ ${Y(f)}</option>`),h.join("")}function Je(){const f=a("ppins");f.innerHTML="",x.length||(f.innerHTML=`<div class="sub">${Y(o("tool.pin.empty"))}</div>`),x.forEach((c,h)=>{var X,he;const w=document.createElement("div");w.className="pincard"+(h===Z?" sel":"");const C=["always","depths","once"].map(S=>`<option value="${S}"${c.rule===S?" selected":""}>${Y(o(`tool.pin.rule.${S}`))}</option>`).join(""),I=[`<option value=""${c.theme?"":" selected"}>${Y(o("tool.pin.themeAny"))}</option>`].concat(In.map(S=>`<option value="${S}"${c.theme===S?" selected":""}>${Y(o(`elem.${S}`))}</option>`)).join("");w.innerHTML=`
        <div class="row"><b>📌 ${h+1}</b>
          <select data-act="prefab">${ee(c.prefab)}</select>
          <button type="button" data-act="del" title="${Y(o("tool.pin.delete"))}">🗑</button></div>
        <div class="kv"><span class="lbl">${Y(o("tool.pin.ruleLabel"))}</span><select data-act="rule">${C}</select></div>
        <div class="kv" data-show="depths"><span class="lbl">${Y(o("tool.pin.depthsLabel"))}</span>
          <input type="text" data-act="depths" placeholder="${Y(o("tool.pin.depthsPh"))}" value="${Y((c.depths??[]).join(", "))}" /></div>
        <div class="kv" data-show="range"><span class="lbl">${Y(o("tool.pin.rangeLabel"))}</span>
          <input type="number" class="num" data-act="r0" min="1" max="99" value="${((X=c.range)==null?void 0:X[0])??1}" /> −
          <input type="number" class="num" data-act="r1" min="1" max="99" value="${((he=c.range)==null?void 0:he[1])??99}" /></div>
        <div class="kv"><span class="lbl">${Y(o("tool.pin.themeLabel"))}</span><select data-act="theme">${I}</select></div>
        <div class="sub">${Y(o("tool.pin.introLabel"))}</div>
        <textarea data-act="intro" placeholder="${Y(o("tool.pin.introPh"))}">${Y(c.intro??"")}</textarea>`,w.querySelector('[data-show="depths"]').style.display=c.rule==="depths"?"flex":"none",w.querySelector('[data-show="range"]').style.display=c.rule==="depths"?"none":"flex";const D=()=>{u(),te(),W()};w.addEventListener("click",()=>{Z!==h&&(Z=h,te())}),w.querySelector('[data-act="prefab"]').addEventListener("change",S=>{c.prefab=S.target.value,D()}),w.querySelector('[data-act="rule"]').addEventListener("change",S=>{var _;c.rule=S.target.value,c.rule==="depths"?(delete c.range,c.depths=(_=c.depths)!=null&&_.length?c.depths:[5]):(delete c.depths,c.range=c.range??[1,99]),D()}),w.querySelector('[data-act="depths"]').addEventListener("change",S=>{const _=S.target.value.split(/[\s,、]+/).map(V=>Number(V)).filter(V=>Number.isInteger(V)&&V>=1&&V<=99);c.depths=[...new Set(_)].sort((V,Xe)=>V-Xe),D()});const P=(S,_)=>{const V=c.range??[1,99];V[S]=Math.max(1,Math.min(99,_||V[S])),V[0]>V[1]&&(V[S===0?1:0]=V[S]),c.range=V,D()};w.querySelector('[data-act="r0"]').addEventListener("change",S=>P(0,Number(S.target.value))),w.querySelector('[data-act="r1"]').addEventListener("change",S=>P(1,Number(S.target.value))),w.querySelector('[data-act="theme"]').addEventListener("change",S=>{const _=S.target.value;_?c.theme=_:delete c.theme,D()}),w.querySelector('[data-act="intro"]').addEventListener("change",S=>{const _=S.target.value.trim();_!==(c.intro??"")&&delete c.intros,_?c.intro=_.slice(0,200):(delete c.intro,delete c.intros),u(),W()}),w.querySelector('[data-act="del"]').addEventListener("click",S=>{S.stopPropagation(),x.splice(h,1),Z>=x.length&&(Z=x.length-1),u(),te(),W()}),f.appendChild(w)}),a("paddpin").disabled=x.length>=En}a("paddpin").addEventListener("click",()=>{if(x.length>=En){z(o("tool.pin.full"),!0);return}const f=B.find(c=>!c.meta.tags.includes("town")&&!c.meta.tags.includes("town-interior"));x.push({prefab:(f==null?void 0:f.id)??"prefab-id",rule:"depths",depths:[5]}),Z=x.length-1,u(),te(),W()});function be(){const f=a("plint"),c=Mn(x,B.map(h=>({id:h.id,w:h.size.w,d:h.size.d})));for(const h of x){const w=B.find(C=>C.id===h.prefab);w&&(w.meta.tags.includes("town")||w.meta.tags.includes("town-interior"))&&c.push({level:"warn",key:"tool.pin.lint.townTag",params:{id:h.prefab}})}f.innerHTML=c.length?c.map(h=>`<div class="warn">⚠ ${Y(o(h.key,h.params))}</div>`).join(""):`<div class="ok">${Y(o("tool.pin.lint.ok"))}</div>`}function E(){const f=a("ppv"),c=ie==="any"?null:ie;let h="";for(let w=1;w<=Mo;w++){const C=Sn(x,w,c),I=C.map(D=>{const P=x.indexOf(D),X=D.theme?Jt[D.theme]:"#5b9bff";return`<button type="button" class="pbadge${P===Z?" sel":""}" data-i="${P}" style="border-color:${X}">${Y(ue(D.prefab))}${D.intro?" 💬":""}</button>`}).join("");h+=`<div class="pvrow${C.length?" hit":""}"><span class="d">${w}F</span>${I||`<span class="none">${Y(o("tool.pin.pvNone"))}</span>`}</div>`}f.innerHTML=h;for(const w of Array.from(f.querySelectorAll(".pbadge")))w.addEventListener("click",()=>{Z=Number(w.dataset.i),te()})}function Ye(){const f=a("pthemes");f.innerHTML=`<span class="sub">${Y(o("tool.pin.pvTheme"))}</span>`;for(const c of["any",...In]){const h=document.createElement("button");h.className="chip"+(ie===c?" on":""),h.style.background=c==="any"?"#9aa4b5":Jt[c],h.title=c==="any"?o("tool.pin.themeAny"):o(`elem.${c}`),h.addEventListener("click",()=>{ie=c,E(),Ye()}),f.appendChild(h)}}function L(){const f=a("ppf"),c=x[Z],h=c?B.find(I=>I.id===c.prefab):void 0;if(!h){f.innerHTML=`<div class="sub">${Y(o("tool.pin.pfNone"))}</div>`;return}const w=(I,D)=>{const P=h.props.find(X=>X.x===I&&X.y===D);return P?P.kind.startsWith("chest")?"📦":P.kind.startsWith("shrine")?"⛲":P.kind.startsWith("portal")?"◎":P.kind==="item"?"✦":P.kind==="trap"?"✖":"·":null};let C="";for(let I=0;I<h.size.d;I++)for(let D=0;D<h.size.w;D++){const P=h.cells[I][D];let X=P.kind==="wall"?P.breakable?"#5e4a33":P.pillar||P.low?"#4a5468":"#3a4356":"#223048";P.kind==="floor"&&P.floorFeat==="water"&&(X="#2b4a6f"),P.kind==="floor"&&P.floorFeat==="slip"&&(X="#9fc4d8"),P.kind==="floor"&&P.hazard&&(X=Jt[P.hazard.element]??X);const he=h.ports.some(V=>V.x===D&&V.y===I),_=h.spawns.find(V=>V.x===D&&V.y===I)?"🧍":w(D,I)??(he?"○":(P.height??0)>0?String(P.height):"");C+=`<div class="pc${he?" port":""}" style="background:${X}">${_}</div>`}f.innerHTML=`<div class="sub"><b>${Y(ue(h.id))}</b>（${h.size.w}×${h.size.d}・depth ${h.meta.depthRange[0]}-${h.meta.depthRange[1]}）</div>
      <div class="pfgrid" style="grid-template-columns:repeat(${h.size.w}, 18px)">${C}</div>`}async function $e(){try{const f=await(await fetch(K("/api/tables/proposals"))).json();Yt(a("pprops"),f.proposals??[],{tag:()=>o("tool.pin.capTag"),onView:c=>{F(c)},onPromote:c=>{xe(c)},onArchive:c=>{Le(c)}}),a("pplive").textContent="· live",a("plive").textContent="· live"}catch{a("pprops").innerHTML=`<div class="live">${Y(o("tool.pin.noApi"))}</div>`,a("pplive").textContent=o("tool.common.devOff"),a("plive").textContent=o("tool.common.devOff")}Fe()}function Fe(){var c;const f=a("ptruth");f.innerHTML=`<div class="card"><b>tables.pins</b><span class="id">${Y(Te)}</span>
      <div class="row"><button type="button" data-act="truth-load">${Y(o("tool.pin.loadTruth"))}</button></div></div>`,(c=f.querySelector('[data-act="truth-load"]'))==null||c.addEventListener("click",()=>{J=!1,se(!0).then(()=>z(o("tool.pin.loaded")))})}async function F(f){var c,h;try{const w=await(await fetch(K(`/api/tables/proposal?id=${encodeURIComponent(f)}`))).json(),C=(h=(c=w.docs)==null?void 0:c[0])==null?void 0:h.tables.pins;if(C===void 0)throw new Error(o("tool.pin.propNoPins"));const I=$t.parse(C);J=!0,x=I,Z=I.length?0:-1,te(),W(),z(o("tool.pin.loadedProp",{name:w.docs[0].name}))}catch(w){z(w.message,!0)}}async function xe(f){try{await Ee(K("/api/tables/promote"),{proposalId:f}),z(o("tool.pin.promoted")),J=!1,$e(),se(!0)}catch(c){z(c.message,!0)}}async function Le(f){try{await Ee(K("/api/tables/archive"),{proposalId:f}),z(o("tool.pin.archived")),$e()}catch(c){z(c.message,!0)}}async function Ne(){var I,D;let f=[];try{x.length&&(f=$t.parse(x))}catch(P){z(o("tool.pin.zodFail",{msg:P.message.slice(0,200)}),!0);return}const c=a("plabel").value.trim()||o("tool.pin.capTag");let h={};try{const P=await fetch(K("/api/tables/truth"));P.ok&&(h=((D=(I=(await P.json()).docs)==null?void 0:I[0])==null?void 0:D.tables)??{})}catch{}const w={...h};delete w.pins,f.length&&(w.pins=f);const C={formatVersion:Fn,id:"tables",name:c,tables:w,createdAt:Nn(),updatedAt:Nn()};try{await Ee(K("/api/tables/proposal"),{tables:C,label:c,createdBy:"user"}),z(o("tool.pin.saved",{name:c})),$e()}catch(P){z(o("tool.pin.saveFail",{msg:P.message}),!0)}}a("psave").addEventListener("click",()=>{Ne()}),a("pload").addEventListener("click",()=>{J=!1,se(!0).then(()=>z(o("tool.pin.loaded")))}),a("plabel").addEventListener("input",W);function te(){Je(),be(),Ye(),E(),L()}const He=O.events.on("tables",()=>{$e(),se()}),Ge=Qt(()=>{Xt(q.querySelector("#pinapp")),te(),$e()});return window.cdForgePin={pins:()=>x,setPins:f=>{x=f?$t.parse(f):[],Z=x.length?0:-1,u(),te(),W()},addPin:()=>{a("paddpin").click()},select:f=>{Z=f,te()},preview:(f,c)=>Sn(x,f,c??null).map(h=>h.prefab),lint:()=>Mn(x,B.map(f=>({id:f.id,w:f.size.w,d:f.size.d}))),prefabs:()=>B.map(f=>f.id),save:()=>Ne(),promote:f=>xe(f),refresh:()=>$e(),reload:(f=!0)=>se(f),dirty:()=>J},M().then(()=>{oe()?(te(),$e()):se(!0).then(()=>{$e()})}),{setVisible(f){a("pinapp").classList.toggle("on",f),f&&te()},dispose(){He(),Ge(),W(),delete window.cdForgePin}}}const pe=q=>o(`tool.forge.brush.${q}`),zo=q=>{var O;return((O=q.names)==null?void 0:O[Zt()])??q.name};function Lt(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const Ko={id:"forge",async mount(q,O){const{wapi:K,postJson:Ee}=O.api;q.innerHTML=wo,Xt(q);const a=e=>q.querySelector(`#${e}`),z=Eo(q,O),x=So(q,O);let B="room",Z=()=>{};function ie(e){B=e,a("app").style.display=e==="room"?"flex":"none",z.setVisible(e==="town"),x.setVisible(e==="pin"),a("modeRoom").classList.toggle("on",e==="room"),a("modeTown").classList.toggle("on",e==="town"),a("modePin").classList.toggle("on",e==="pin"),Z();try{sessionStorage.setItem("cdForgeModeM4",e)}catch{}}a("modeRoom").addEventListener("click",()=>ie("room")),a("modeTown").addEventListener("click",()=>ie("town")),a("modePin").addEventListener("click",()=>ie("pin"));const J=document.createElement("button");J.type="button",J.id="fplay",J.hidden=!0,J.style.marginLeft="auto",J.addEventListener("click",()=>window.open(mo(O.world()),"_blank"));const Te=()=>{J.textContent=o("tool.studio.playNow"),J.title=o("tool.studio.playNowTitle")};Te(),a("fmodes").appendChild(J);const $=document.createElement("button");$.type="button",$.id="ftry",$.textContent="▶ 試す";const W=()=>{$.hidden=B==="pin",$.title=B==="town"?"この街に主人公を降ろして NPC と話して確かめる":"この部屋を、主人公を降ろして歩いて確かめる"};Z=W,W(),$.addEventListener("click",()=>{(B==="town"?xn("town",z.plan(),O.world()):xn("prefab",It(),O.world())).catch(n=>console.warn("§testbed 試す失敗",n))}),a("fmodes").appendChild($);const oe="plain";let u=qt("first-keep","はじまりの砦",7,6,Lt()),M="floor",j="brush",se="fire",ue=6,ee,Je=null;const be=new lo,E=()=>({element:se,power:ue,monType:ee}),Ye="cdForgeP2";function L(){try{sessionStorage.setItem(Ye,JSON.stringify({v:1,pf:u,brush:M,shape:j,hazardElement:se,hazardPower:ue,spawnType:ee??null,cam:{yaw:h,pitch:w,dist:C}}))}catch{}}function $e(){var e;try{const n=sessionStorage.getItem(Ye);if(!n)return!1;const s=JSON.parse(n);return s.v!==1||!((e=s.pf)!=null&&e.size)||!Array.isArray(s.pf.cells)?!1:(u=s.pf,M=s.brush??"floor",j=s.shape??"brush",se=s.hazardElement??"fire",ue=s.hazardPower??6,ee=s.spawnType??void 0,s.cam&&(h=s.cam.yaw,w=s.cam.pitch,C=s.cam.dist),!0)}catch{return!1}}const Fe=a("stage"),F=new pn({antialias:!0});F.toneMapping=Jn,F.toneMappingExposure=1.22,F.setPixelRatio(Math.min(devicePixelRatio,2)),Fe.appendChild(F.domElement);const xe=new un,Le=new fn(42,1,.05,200),Ne=hn[oe],te=oo(Ne);xe.background=new mn(Ne.bg);const He=new Yn(te.hemiSky,te.hemiGround,Math.max(.5,te.hemiI)),Ge=new Bt(te.sunCol,Math.max(.8,te.sunI));Ge.position.set(3,4.2,2.4);const f=new Bt(te.fillCol,.35);f.position.set(-2.6,1.4,-1.8),xe.add(He,Ge,f);const c=new ao(document.createElement("div"),()=>{});let h=0,w=.72,C=9;const I=new dt(3,0,2.5);function D(){I.set((u.size.w-1)/2,.3,(u.size.d-1)/2),C=Math.max(u.size.w,u.size.d)*1.35+2}function P(){const e=Fe.clientWidth,n=Fe.clientHeight;F.setSize(e,n),Le.aspect=e/n,Le.updateProjectionMatrix()}O.own(window,"resize",P);let X=null,he=null;function S(){X&&xe.remove(X),he&&xe.remove(he),X=c.buildPrefabPreview(oe,u),he=new xt;for(const e of u.spawns)he.add(Mt(e));xe.add(X,he),et()}let _=!1,V=null;const Xe=new rt({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function et(){if(V&&(xe.remove(V),V=null),!_)return;V=new xt;const e=u.ports.length?ro(u,u.ports[0],!1):new Set;for(let n=0;n<u.size.d;n++)for(let s=0;s<u.size.w;s++){const m=u.cells[n][s];if(m.kind!=="floor"||m.floorFeat==="water"||e.has(`${s},${n}`))continue;const b=new Qe(new bt(.96,.06,.96),Xe);b.position.set(s,(m.height??0)*Tt+.34,n),V.add(b)}xe.add(V)}function Et(e){const n=e?Wt.find(s=>s.name===e):null;return{kind:"monster",name:e??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:n==null?void 0:n.size,heads:n==null?void 0:n.heads,element:n==null?void 0:n.element}}function ut(e){const{geo:n,spots:s}=io(e),m=new xt;m.add(new Qe(n,so()));for(const b of s){const H=new Qe(new bt(1,1,1),new rt({color:b.c}));H.position.set(b.x,b.y,b.z),H.scale.set(b.sx,b.sy,b.sz),m.add(H)}return m}function Mt(e){var b,H;const n=new xt,s=new Qe(new bt(.94,.05,.94),new rt({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(s.position.y=.03,n.add(s),e.monType&&Wt.some(G=>G.name===e.monType)){const G=Et(e.monType),Ze=ut(G),ke=((G.size??1)-1)/2;Ze.position.set(ke,0,ke),n.add(Ze)}else{const G=new Qe(new to(.3),new rt({color:11702236}));G.position.y=.62,n.add(G)}const m=(((H=(b=u.cells[e.y])==null?void 0:b[e.x])==null?void 0:H.height)??0)*Tt;return n.position.set(e.x,m,e.y),n}const tt=new rt({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),We=new Qe(new bt(1,1,1),tt);We.visible=!1,xe.add(We);const St=new rt({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),Ve=new Qe(new bt(1,1,1),St);Ve.visible=!1,xe.add(Ve);function Re(e,n){var m,b;if(!e){We.visible=!1;return}const s=(((b=(m=u.cells[e.y])==null?void 0:m[e.x])==null?void 0:b.height)??0)*Tt;We.visible=!0,We.scale.set(1.04,.14,1.04),We.position.set(e.x,s+.4,e.y),tt.color.setHex(n||M==="erase"?14707290:6003711)}function Oe(e,n){if(!e||!n){Ve.visible=!1;return}const s=Math.min(e.x,n.x),m=Math.max(e.x,n.x),b=Math.min(e.y,n.y),H=Math.max(e.y,n.y);Ve.visible=!0,Ve.scale.set(m-s+1.04,.3,H-b+1.04),Ve.position.set((s+m)/2,.3,(b+H)/2)}const ft=new Qn,Ie=new eo(new dt(0,1,0),0);function Ae(e,n){const s=F.domElement.getBoundingClientRect(),m=new Zn((e-s.left)/s.width*2-1,-((n-s.top)/s.height*2-1));ft.setFromCamera(m,Le);const b=(ke,lt)=>ke>=0&&lt>=0&&ke<u.size.w&&lt<u.size.d;if(X){const ke=ft.intersectObject(X,!0);for(const lt of ke){const jt=lt.point.clone();lt.face&&jt.addScaledVector(lt.face.normal,-.05);const dn=Math.round(jt.x),cn=Math.round(jt.z);if(b(dn,cn))return{x:dn,y:cn}}}const H=new dt;if(!ft.ray.intersectPlane(Ie,H))return null;const G=Math.round(H.x),Ze=Math.round(H.z);return b(G,Ze)?{x:G,y:Ze}:null}const we=a("msg");let Me=0;function ne(e,n=!1){we.textContent=e,we.style.color=n?"#ffd166":"#7fd17f",clearTimeout(Me);const s=q.querySelector("#mtoast");s&&d.matches&&(s.textContent=e,s.style.display="block",s.style.borderColor=n?"#ffd166":"#2b3547"),Me=window.setTimeout(()=>{we.textContent="",s&&(s.style.display="none")},4500)}function Ce(e){a("guide").style.display=e?"block":"none"}a("help").addEventListener("click",()=>Ce(!0));function le(e){e&&(S(),Ce(!1))}function Q(){be.commit(u)&&(nt(),st(),L())}function je(e,n){u=e,it(),D(),S(),Q(),n&&ne(n)}function nt(){a("undo").disabled=!be.canUndo(),a("redo").disabled=!be.canRedo();const e=q.querySelector("#mUndo");e&&(e.disabled=!be.canUndo(),a("mRedo").disabled=!be.canRedo())}function _e(){const e=be.undo();e&&(u=e,it(),S(),nt(),st(),L(),ne(o("tool.common.undone")))}function Ue(){const e=be.redo();e&&(u=e,it(),S(),nt(),st(),L(),ne(o("tool.common.redone")))}a("undo").addEventListener("click",_e),a("redo").addEventListener("click",Ue);let ae="none",Be=!1,mt=0,U=0,qe=new Set,Se=null,fe=null,re=null;function i(e,n,s){const m=`${n},${s}`;qe.has(m)||(qe.add(m),le(Ct(u,e,n,s,E())),e==="port"&&!(n===0||s===0||n===u.size.w-1||s===u.size.d-1)&&ne(o("tool.forge.portEdgeOnly"),!0))}function t(e,n){if(Se&&(Se.x!==n.x||Se.y!==n.y)){let{x:s,y:m}=Se;const b=Math.max(Math.abs(n.x-s),Math.abs(n.y-m));for(let H=1;H<=b;H++)i(e,Math.round(s+(n.x-s)*(H/b)),Math.round(m+(n.y-m)*(H/b)))}else i(e,n.x,n.y);Se=n}F.domElement.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;F.domElement.setPointerCapture(e.pointerId),mt=e.clientX,U=e.clientY;const n=Ae(e.clientX,e.clientY);if(e.button===2){n?(ae="erase",qe=new Set,Se=null,t("erase",n)):ae="orbit";return}if(e.button===1||Be||!n){ae="orbit";return}if(e.button===0){if(j==="rect"){ae="rect",fe=n,re=n,Oe(fe,re);return}if(j==="fill"){le(Dt(u,M,n.x,n.y,E())),Q();return}ae="paint",qe=new Set,Se=null,t(M,n)}});let r=null;F.domElement.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const n=Ae(e.clientX,e.clientY);r=n,R(n),Re(n,ae==="erase"),ae==="orbit"?(h+=(e.clientX-mt)*.008,w=Math.min(1.4,Math.max(.15,w+(e.clientY-U)*.006))):(ae==="paint"||ae==="erase")&&n?t(ae==="erase"?"erase":M,n):ae==="rect"&&n&&(re=n,Oe(fe,re)),mt=e.clientX,U=e.clientY}),F.domElement.addEventListener("pointerup",e=>{e.pointerType!=="touch"&&(ae==="rect"&&fe&&re?(le(Gt(u,M,fe.x,fe.y,re.x,re.y,E())),Q()):ae==="paint"||ae==="erase"?Q():ae==="orbit"&&L(),ae="none",fe=re=null,Se=null,Oe(null,null))}),F.domElement.addEventListener("pointerleave",()=>{Re(null,!1),R(null)}),F.domElement.addEventListener("contextmenu",e=>e.preventDefault()),F.domElement.addEventListener("wheel",e=>{e.preventDefault(),C=Math.min(40,Math.max(3,C*(e.deltaY>0?1.08:.93)))},{passive:!1});const d=matchMedia("(max-width: 900px)");function k(){const e=Math.round(h/(Math.PI/4))*(Math.PI/4);Math.abs(h-e)<5*Math.PI/180&&(h=e)}let l="none",g=null;function v(){l="none",g=null,fe=re=null,Se=null,Oe(null,null),Re(null,!1)}co(F.domElement,{strokeStart(e,n){const s=Ae(e,n);if(!s){l="none";return}if(g=JSON.stringify(u),j==="rect"){l="rect",fe=s,re=s,Oe(fe,re);return}if(l="paint",qe=new Set,Se=null,j==="fill"){le(Dt(u,M,s.x,s.y,E())),qe.add(`${s.x},${s.y}`);return}t(M,s),Re(s,M==="erase")},strokeMove(e,n){const s=Ae(e,n);s&&(l==="rect"?(re=s,Oe(fe,re)):l==="paint"&&j==="brush"&&(t(M,s),Re(s,M==="erase")))},strokeEnd(){l==="rect"&&fe&&re&&le(Gt(u,M,fe.x,fe.y,re.x,re.y,E())),l!=="none"&&(Q(),yt()),v()},strokeCancel(){l==="paint"&&g&&(u=JSON.parse(g),S(),st()),v()},orbit(e,n){h+=e*.008,w=Math.min(1.4,Math.max(.15,w+n*.006))},orbitEnd(){k(),L()},pinch(e){C=Math.min(40,Math.max(3,C/e))},undoTap(){_e(),yt()},redoTap(){Ue(),yt()},longPress(e,n){const s=Ae(e,n);s&&(Re(s,!1),ne(o("tool.forge.cellInfo",{x:s.x,y:s.y,desc:N(s.x,s.y)})),yt())},strokeSize:()=>qe.size});function N(e,n){const s=u.cells[n][e],m=[];s.kind==="wall"?m.push(s.low?pe("low"):s.pillar?pe("pillar"):s.breakable?pe("breakable"):pe("wall")):(m.push(s.floorFeat==="water"?pe("water"):s.floorFeat==="slip"?pe("slip"):pe("floor")),s.hazard&&m.push(o("tool.forge.cell.hazard",{el:o(`elem.${s.hazard.element}`)})),(s.height??0)>0&&m.push(o("tool.forge.cell.height",{n:s.height??0})));const b=u.props.find(G=>G.x===e&&G.y===n);b&&m.push(wt(b.kind)?pe(b.kind):b.kind);const H=u.spawns.find(G=>G.x===e&&G.y===n);return H&&m.push(H.monType?kt(H.monType):o("tool.forge.cell.spawnAuto")),u.ports.some(G=>G.x===e&&G.y===n)&&m.push(pe("port")),m.join("・")}function R(e){const n=a("hoverhint");if(!e){n.textContent=o("tool.forge.hoverIdle");return}const s=M==="spawn"?ee?kt(ee):o("tool.forge.auto"):pe(M),m=M==="erase"?o("tool.forge.verb.erase"):j==="rect"?o("tool.forge.verb.rect",{name:s}):j==="fill"?o("tool.forge.verb.fill",{name:s}):o("tool.forge.verb.place",{name:s});n.textContent=o("tool.forge.hoverLine",{x:e.x,y:e.y,desc:N(e.x,e.y),verb:m})}const de=e=>{var s,m,b;if(B!=="room"||((s=e.target)==null?void 0:s.tagName)==="INPUT"||((m=e.target)==null?void 0:m.tagName)==="SELECT"||((b=e.target)==null?void 0:b.tagName)==="TEXTAREA")return;if(e.code==="Space"){Be=!0,e.preventDefault();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="z"){e.preventDefault(),e.shiftKey?Ue():_e();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault(),Ue();return}const n=e.key.toLowerCase();if(n==="b")Pe("brush");else if(n==="r")Pe("rect");else if(n==="f")Pe("fill");else if(n==="escape")ae="none",fe=re=null,Oe(null,null),Ce(!1);else if(n==="arrowleft")h-=Math.PI/24;else if(n==="arrowright")h+=Math.PI/24;else if(n==="arrowup")w=Math.min(1.4,w+.05);else if(n==="arrowdown")w=Math.max(.15,w-.05);else{const H=bn.find(G=>G.key===n);H&&Ke(H.id)}},ce=e=>{e.code==="Space"&&(Be=!1)};O.own(window,"keydown",de),O.own(window,"keyup",ce),a("camL").addEventListener("click",()=>{h-=Math.PI/4,L()}),a("camR").addEventListener("click",()=>{h+=Math.PI/4,L()}),a("camIn").addEventListener("click",()=>{C=Math.max(3,C*.8),L()}),a("camOut").addEventListener("click",()=>{C=Math.min(40,C*1.25),L()});const ve=new pn({antialias:!0,preserveDrawingBuffer:!0});ve.setSize(96,96);const me=new un,ge=new fn(40,1,.05,100);me.add(new Xn(16777215,.85));const p=new Bt(16769725,1);p.position.set(3,6,4),me.add(p);function T(e){me.background=new mn(hn[oe].bg),me.add(e);const n=new no().setFromObject(e),s=n.getCenter(new dt),m=n.getSize(new dt),b=Math.max(m.x,m.y,m.z)*.62+.24;ge.position.set(s.x+b*1.35,s.y+b*1.15,s.z+b*1.85),ge.lookAt(s),ve.render(me,ge);const H=ve.domElement.toDataURL();return me.remove(e),H}const A=new Map;function ze(e){const n=`tile:${e}`;if(!A.has(n)){const s=c.buildSample(oe,e);s.position.set(-1,0,-1);const m=new xt;m.add(s),A.set(n,T(m))}return A.get(n)}function ye(){if(!A.has("port")){const e={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};A.set("port",T(c.buildPrefabPreview(oe,e)))}return A.get("port")}function ot(e){const n=`mon:${e}`;return A.has(n)||A.set(n,T(ut(Et(e)))),A.get(n)}function Rn(e){const n=`pf:${e.id}:${e.updatedAt}`;return A.has(n)||A.set(n,T(c.buildPrefabPreview(oe,e))),A.get(n)}const Ht=[];function at(e,n,s,m,b,H,G,Ze){const ke=document.createElement("div");ke.className="swatch",ke.title=Ze??"",ke.innerHTML=`${m?`<img src="${m}" alt="" />`:`<div class="glyph">${b??""}</div>`}${H?`<span class="kbd">${H}</span>`:""}<div class="nm">${s}</div>`,ke.addEventListener("click",()=>Ke(n,G)),e.appendChild(ke),Ht.push({el:ke,brush:n,monType:G})}function en(){for(const e of["palTerrain","palProps","palMisc","palSpawns"])a(e).innerHTML="";Ht.length=0;for(const e of bn)e.cat==="terrain"?at(a("palTerrain"),e.id,pe(e.id),e.sample?ze(e.sample):null,e.id==="down"?"▼":null,e.key,void 0,o(`tool.forge.brushHint.${e.id}`)):e.cat==="prop"?at(a("palProps"),e.id,pe(e.id),e.sample?ze(e.sample):null,null,e.key,void 0,o(`tool.forge.brushHint.${e.id}`)):e.cat==="port"?at(a("palMisc"),e.id,pe(e.id),ye(),null,e.key,void 0,o(`tool.forge.brushHint.${e.id}`)):e.cat==="erase"&&at(a("palMisc"),e.id,pe(e.id),null,"🧽","E",void 0,o(`tool.forge.brushHint.${e.id}`));at(a("palSpawns"),"spawn",o("tool.forge.auto"),null,"？",void 0,void 0,o("tool.forge.autoHint"));for(const e of Wt)at(a("palSpawns"),"spawn",kt(e.name),ot(e.name),null,void 0,e.name,o("tool.forge.monHint",{min:e.min,max:e.max})+(e.size?`・${e.size}×${e.size}`:""))}const On={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function zt(){const e=a("palopts");e.innerHTML=`<span>${Ft(o("tool.forge.attrLabel"))}</span>`;for(const m of["fire","ice","earth","poison","holy"]){const b=document.createElement("button");b.className="chip"+(m===se?" on":""),b.style.background=On[m],b.title=o(`elem.${m}`),b.addEventListener("click",()=>{se=m,zt(),ht(),L()}),e.appendChild(b)}const n=document.createElement("span");n.textContent=`　${o("tool.forge.powerLabel")}`;const s=document.createElement("input");s.type="number",s.min="1",s.max="40",s.value=String(ue),s.className="num",s.style.width="3.4em",s.addEventListener("change",()=>{ue=Math.max(1,Math.min(40,Number(s.value)||6)),L()}),e.append(n,s)}function Ke(e,n){M=e,e==="spawn"&&(ee=n),Gn(e,e==="spawn"?n:void 0),!wt(e).areaOk&&j!=="brush"&&(Pe("brush"),ne(o("tool.forge.brushOneOnly",{name:pe(e)}))),ht(),R(r),L()}function Pe(e){if(e!=="brush"&&!wt(M).areaOk){ne(o("tool.forge.shapeOneOnly",{name:pe(M)}),!0);return}j=e,ht(),L()}function ht(){const e=wt(M);for(const b of Ht)b.el.classList.toggle("on",b.brush===M&&(M!=="spawn"||b.monType===ee));a("shBrush").classList.toggle("on",j==="brush"),a("shRect").classList.toggle("on",j==="rect"),a("shFill").classList.toggle("on",j==="fill"),a("nowname").textContent=M==="spawn"?o("tool.forge.nowSpawn",{name:ee?kt(ee):o("tool.forge.auto")}):M==="hazard"?o("tool.forge.nowHazard",{el:o(`elem.${se}`)}):pe(e.id),a("nowshape").textContent=`（${o(`tool.common.shape.${j}`)}）`;const n=a("nowimg"),s=M==="spawn"?ee?ot(ee):null:M==="port"?ye():e.sample?ze(e.sample):null;s?(n.src=s,n.style.display="block"):n.style.display="none",a("palopts").classList.toggle("show",M==="hazard");const m=q.querySelector("#mNowImg");m&&(s?(m.src=s,m.style.display="block"):m.style.display="none",a("mNowName").textContent=a("nowname").textContent??"",a("mShB").classList.toggle("on",j==="brush"),a("mShR").classList.toggle("on",j==="rect"),a("mShF").classList.toggle("on",j==="fill"),Vn())}a("shBrush").addEventListener("click",()=>Pe("brush")),a("shRect").addEventListener("click",()=>Pe("rect")),a("shFill").addEventListener("click",()=>Pe("fill"));function it(){a("pid").value=u.id,a("pname").value=u.name,a("pw").value=String(u.size.w),a("pd").value=String(u.size.d),a("pdepth").value=`${u.meta.depthRange[0]}-${u.meta.depthRange[1]}`,a("pweight").value=String(u.meta.weight),a("ptags").value=u.meta.tags.join(" "),a("cPorts").checked=u.meta.solvability.portsConnected,a("cHaz").checked=u.meta.solvability.hazardAvoidable}function tn(){u.id=a("pid").value.trim()||u.id,u.name=a("pname").value.trim()||u.name;const e=a("pdepth").value.split("-").map(n=>Math.max(1,Math.min(99,Number(n)||1)));u.meta.depthRange=[e[0]??1,Math.max(e[0]??1,e[1]??e[0]??99)],u.meta.weight=Math.max(1,Math.min(9,Number(a("pweight").value)||3)),u.meta.tags=a("ptags").value.split(/[\s,、]+/).map(n=>n.trim()).filter(Boolean),u.meta.solvability.portsConnected=a("cPorts").checked,u.meta.solvability.hazardAvoidable=a("cHaz").checked}for(const e of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])a(e).addEventListener("change",()=>{tn(),Q()});a("applySize").addEventListener("click",()=>{const e=Number(a("pw").value),n=Number(a("pd").value),s=vn(u,e,n);it(),D(),S(),Q();const m=s.ports+s.props+s.spawns;ne(m?o("tool.forge.resizedDrop",{w:u.size.w,d:u.size.d,n:m,ports:s.ports,props:s.props,spawns:s.spawns}):o("tool.forge.resized",{w:u.size.w,d:u.size.d}),m>0)}),a("newpf").addEventListener("click",()=>{const e=Math.floor(Math.random()*900)+100;je(qt(`prefab-${e}`,o("tool.forge.newName",{n:e}),u.size.w,u.size.d,Lt()),o("tool.forge.newSaid"))});function st(){const e=gn(u),n=a("solv");n.innerHTML=e.items.map(b=>`<div class="s-${b.level}">${b.level==="ok"?"✓":b.level==="warn"?"⚠":"✗"} ${Ft(b.key?o(b.key,b.params):b.msg)}</div>`).join("");const s=a("save");s.disabled=e.saveBlocked,a("savenote").textContent=e.saveBlocked?o("tool.forge.saveBlockedNote",{reason:e.blockReasonKey?o(e.blockReasonKey):e.blockReason??""}):o("tool.common.savenote");const m=q.querySelector("#mSolv");if(m){const b=e.items.filter(G=>G.level==="err").length,H=e.items.filter(G=>G.level==="warn").length;m.textContent=b?`✗ ${b}`:H?`⚠ ${H}`:"✓",m.className="mchip "+(b?"err":H?"warn":"ok"),a("mSave").disabled=e.saveBlocked}}function It(){return tn(),De.parse({...u,updatedAt:Lt()})}a("save").addEventListener("click",()=>{At()});async function At(){try{const e=It(),n=await Ee(K("/api/forge/proposal"),{prefab:e,label:e.name,createdBy:"user"});ne(o("tool.common.savedFuture",{id:n.id.slice(0,8)}))}catch(e){ne(o("tool.common.saveFail",{msg:e.message}),!0)}}async function nn(e){try{const n=await Ee(K("/api/forge/promote"),{proposalId:e});ne(n.promotedNote??o("tool.common.adoptedNote"))}catch(n){ne(o("tool.common.promoteFail",{msg:n.message}),!0)}}async function on(e){try{await Ee(K("/api/forge/archive"),{proposalId:e}),ne(o("tool.common.archived"))}catch(n){ne(o("tool.common.archiveFail",{msg:n.message}),!0)}}async function vt(){try{const[e,n]=await Promise.all([fetch(K("/api/forge/truth")).then(s=>s.json()),fetch(K("/api/forge/proposals")).then(s=>s.json())]);jn(n.proposals??[]),Bn(e),a("live").innerHTML="<b>· live</b>",J.hidden=!1}catch{a("live").textContent=o("tool.common.devOff"),J.hidden=!0}}function jn(e){Yt(a("proposals"),e,{selectedId:Je,onView:n=>{qn(n)},onPromote:n=>{nn(n)},onArchive:n=>{on(n)}})}function Bn(e){const n=e.prefabs??[];uo(a("truth"),n.map(s=>{let m=null;try{m=Rn(De.parse(s))}catch{}return{id:s.id,name:zo(s),meta:o("tool.forge.cardMeta",{w:s.size.w,d:s.size.d,a:s.meta.depthRange[0],b:s.meta.depthRange[1],wt:s.meta.weight})+(s.meta.tags.length?"・"+s.meta.tags.join("/"):""),thumb:m,onOpen:()=>{je(De.parse(s),o("tool.common.openedTruth",{name:s.name}))},onDup:()=>{const b=De.parse({...s,id:`${s.id}-2`,name:o("tool.common.copyName",{name:s.name}),updatedAt:Lt()});je(b,o("tool.common.duplicated",{name:s.name}))},onCopyWorld:()=>{(async()=>{try{const b=await fo("/api/forge","prefab",De.parse(s),O.worlds(),Ee);b&&ne(o("tool.world.copied",{world:b}))}catch(b){ne(o("tool.world.copyFail",{msg:b.message}),!0)}})()}}}),o("tool.forge.truthEmpty"))}async function qn(e){const n=await fetch(K(`/api/forge/proposal?id=${encodeURIComponent(e)}`)).then(m=>m.json());Je=e;const s=(n.prefabs??[])[n.prefabs.length-1];s&&je(De.parse(s),o("tool.common.viewingFuture",{id:e.slice(0,8)})),vt()}function Ft(e){return e.replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n])}const Dn=O.events.on("forge",()=>{vt()});let Rt=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function Gn(e,n){Rt=[{brush:e,monType:n},...Rt.filter(s=>s.brush!==e||s.monType!==n)].slice(0,5)}function Wn(e){if(e.brush==="spawn")return e.monType?`<img src="${ot(e.monType)}" alt="" />`:'<div class="glyph">？</div>';if(e.brush==="port")return`<img src="${ye()}" alt="" />`;if(e.brush==="erase")return'<div class="glyph">🧽</div>';if(e.brush==="down")return'<div class="glyph">▼</div>';const n=wt(e.brush);return n.sample?`<img src="${ze(n.sample)}" alt="" />`:'<div class="glyph"></div>'}function Vn(){const e=q.querySelector("#hrecent");if(e){e.innerHTML="";for(const n of Rt){const s=document.createElement("button");s.className="hswatch"+(n.brush===M&&(n.brush!=="spawn"||n.monType===ee)?" on":""),s.innerHTML=`${Wn(n)}<span class="nm">${Ft(n.brush==="spawn"?n.monType?kt(n.monType):o("tool.forge.auto"):pe(n.brush))}</span>`,s.addEventListener("click",()=>Ke(n.brush,n.monType)),e.appendChild(s)}}}const gt=po(["sheetSide","sheetLoop"]);function an(){d.matches?(a("sheetSideBody").append(a("topbar"),a("side")),a("sheetLoopBody").append(a("loop"))):(gt.closeAll(),a("app").insertBefore(a("side"),a("stagewrap")),a("stagewrap").insertBefore(a("topbar"),a("mchips")),a("app").appendChild(a("loop"))),P()}a("mMenu").addEventListener("click",()=>gt.open("sheetSide")),a("mShelf").addEventListener("click",()=>gt.open("sheetLoop")),a("mSolv").addEventListener("click",()=>gt.open("sheetSide")),a("hMore").addEventListener("click",()=>gt.open("sheetSide")),a("mUndo").addEventListener("click",_e),a("mRedo").addEventListener("click",Ue),a("mFit").addEventListener("click",()=>{D(),L()}),a("mReach").addEventListener("click",()=>{_=!_,a("mReach").classList.toggle("on",_),et()}),a("mSave").addEventListener("click",()=>{yt(),At()}),a("mShB").addEventListener("click",()=>Pe("brush")),a("mShR").addEventListener("click",()=>Pe("rect")),a("mShF").addEventListener("click",()=>Pe("fill")),O.own(d,"change",an);function _n(){Le.position.set(I.x+C*Math.sin(h)*Math.cos(w),I.y+C*Math.sin(w),I.z+C*Math.cos(h)*Math.cos(w)),Le.lookAt(I),F.render(xe,Le)}let sn=0,ln=!1;function rn(){ln||(sn=requestAnimationFrame(rn),_n())}window.cdForge={paint:(e,n,s)=>{var m;return s&&Ke(s),le(Ct(u,M,e,n,E())),Q(),(m=u.cells[n])==null?void 0:m[e]},rect:(e,n,s,m,b)=>{b&&Ke(b),le(Gt(u,M,e,n,s,m,E())),Q()},fill:(e,n,s)=>{s&&Ke(s),le(Dt(u,M,e,n,E())),Q()},erase:(e,n)=>{var s;return le(Ct(u,"erase",e,n)),Q(),(s=u.cells[n])==null?void 0:s[e]},spawn:(e,n,s)=>{Ke("spawn",s),le(Ct(u,"spawn",e,n,E())),Q()},tool:(e,n)=>Ke(e,n),shapeMode:e=>Pe(e),hazard:(e,n)=>{se=e,n&&(ue=n),zt()},undo:_e,redo:Ue,resize:(e,n)=>{const s=vn(u,e,n);return it(),D(),S(),Q(),s},newPrefab:(e,n,s,m)=>je(qt(e,n,s,m,Lt())),prefab:()=>It(),draft:()=>u,solv:()=>gn(u),save:()=>At(),promote:e=>nn(e),archive:e=>on(e),refresh:()=>vt(),view:(e,n,s)=>{h=e,w=n,s!=null&&(C=s)},state:()=>({brush:M,shape:j,spawnType:ee??null,hazardElement:se,canUndo:be.canUndo(),canRedo:be.canRedo(),guide:a("guide").style.display!=="none"}),draws:()=>F.info.render.calls,screenOf:(e,n)=>{var H,G;const s=(((G=(H=u.cells[n])==null?void 0:H[e])==null?void 0:G.height)??0)*Tt,m=new dt(e,s,n).project(Le),b=F.domElement.getBoundingClientRect();return{cx:b.left+(m.x+1)/2*b.width,cy:b.top+(1-m.y)/2*b.height}},cellAt:(e,n)=>Ae(e,n)};async function Un(e){try{const s=((await fetch(K("/api/forge/truth")).then(m=>m.json())).prefabs??[]).find(m=>m.id===e);s?je(De.parse(s),o("tool.common.openedTruth",{name:s.name})):ne(o("tool.studio.deepMiss",{id:e}),!0)}catch{}}const Kn=Qt(()=>{en(),zt(),ht(),st(),R(r),Te(),vt()}),Ot=$e();en(),zt(),be.reset(u),it(),Ot||D(),ht(),nt(),st(),S(),an(),P(),Ce(!Ot),Ot&&ne(o("tool.common.restored")),vt(),rn();try{const e=sessionStorage.getItem("cdForgeModeM4");(e==="town"||e==="pin")&&ie(e)}catch{}return{applyParams(e){const n=e.get("tab")??e.get("mode");n==="town"?ie("town"):n==="pin"?ie("pin"):n==="room"&&ie("room");const s=e.get("id");s&&(ie("room"),Un(s))},dispose(){ln=!0,cancelAnimationFrame(sn),clearTimeout(Me),Dn(),Kn(),z.dispose(),x.dispose(),L();try{F.dispose(),F.forceContextLoss(),F.domElement.remove()}catch{}try{ve.dispose(),ve.forceContextLoss()}catch{}delete window.cdForge}}}};export{Ko as forgePanel};
