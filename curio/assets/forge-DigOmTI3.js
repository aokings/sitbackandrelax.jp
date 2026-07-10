import{W as cn,A as Vn,S as pn,P as un,C as fn,H as _n,D as je,d as ne,M as Vt,B as pe,f as Un,V as oe,h as Jn,R as Kn,i as Yn,G as ue,O as Xn,g as Zn}from"./three.module-DegpxYfP.js";import{E as hn,r as Qn,V as to,S as Se,l as eo,m as no}from"./render-voxel-D6YTgmsU.js";import{P as Ft,e as Be}from"./prefab-BBg1g5_j.js";import{r as mn,E as oo,c as vn,a as Me,f as qe,b as De,d as fe,B as gn,e as ao}from"./forge-edit-ok95kW6h.js";import{a as io}from"./touch-input-D1HYJrcI.js";import{r as Je,i as so,b as he,a as lo}from"./tool-shelf-BOeHhi1w.js";import{M as Ge}from"./dungeon-DfMPYUEv.js";import{t as o,d as Ke,g as Ye,D as Cn,x as me,y as ro}from"./world-ui-D_LU_VBO.js";import{o as Xe}from"./studio-Qv5QKBOe.js";import{a as co}from"./playtest-core-N8nLbbAi.js";import{o as bn}from"./testbed-BDMxUxRM.js";import{d as xn,t as We,T as ae,k as Ve,l as wn,v as po,n as yn,q as uo,u as _e,w as ze,x as Te,y as kn,z as $n,A as Ln,B as ve}from"./tables-C-kzdGR2.js";import{T as Nn}from"./tables-doc-ZUS1HD9V.js";import"./voxmodel-DxKMXTPW.js";import"./gamepack-40xPumJ3.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./creator-auth-C2cecs39.js";import"./tuner-core-C8qXj8wr.js";const fo=`<!-- ============================================================
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
`,k=R=>R.replace(/[&<>"]/g,F=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[F]),En=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),ho=R=>R===Cn?"comduct":R.replace("/","--"),ie={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},mo={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},Sn={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},Mn={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},vo=["human","elf","dwarf","gnome","halffoot"],go=["talker","guide","shop","equip","craft","heal","recruit"];function bo(R,F){const{wapi:U,postJson:Lt}=F.api,a=s=>R.querySelector(`#${s}`);function z(s,n=!1){const r=a("tmsg");r.textContent=s,r.style.color=n?"#ffd166":"#7fd17f",window.setTimeout(()=>{r.textContent===s&&(r.textContent="")},5e3)}let x=xn(),O="select",tt="shop",at=3,V=2,Pt="plain",$=null,G=-1,nt=null,u=null,E=null,A=!1,it="";const wt="cdForgeTownM4";function L(){try{sessionStorage.setItem(wt,JSON.stringify({v:1,world:F.world(),plan:x,tool:O,dirty:A,stageI:G,label:a("tlabel").value}))}catch{}}function _t(){try{const s=sessionStorage.getItem(wt);if(!s)return!1;const n=JSON.parse(s);return n.v!==1||n.world!==F.world()?!1:(x=ae.parse(n.plan),O=n.tool??"select",A=!!n.dirty,G=typeof n.stageI=="number"?n.stageI:-1,n.label&&(a("tlabel").value=n.label),!0)}catch{return!1}}function S(){A=!0}const ft=[],Ot=()=>{var s;return G>=0?((s=x.stages)==null?void 0:s[G])??null:null};function W(){const s=Ot();return G>=0&&!s&&(G=-1),s?{buildings:s.buildings,decos:s.decos,holes:ft,npcs:s.npcs}:{buildings:x.buildings,decos:x.decos,holes:x.holes,npcs:x.npcs}}function Et(){if(G<0)return[];const s=(x.stages??[]).filter((n,r)=>r!==G);return[{buildings:x.buildings,decos:x.decos,holes:x.holes,npcs:x.npcs},...s.map(n=>({buildings:n.buildings,decos:n.decos,holes:ft,npcs:n.npcs}))]}const Nt=()=>[...x.npcs,...(x.stages??[]).flatMap(s=>s.npcs)];function J(s,n){x=s,n!=null&&n.markDirty&&S(),B(),L()}async function ht(){var s,n,r,d;try{const g=await fetch(U("/api/tables/truth"));if(g.ok){const l=(r=(n=(s=(await g.json()).docs)==null?void 0:s[0])==null?void 0:n.tables)==null?void 0:r.town;if(l!==void 0)return{p:ae.parse(l),src:"truth"}}}catch{}try{const g=await fetch(U(`/packs/${ho(F.world())}.json`));if(g.ok){const l=(d=(await g.json()).tables)==null?void 0:d.town;if(l!==void 0)return{p:ae.parse(l),src:"pack"}}}catch{}return null}async function ct(s=!1){if(A&&!s)return;let n=null;try{n=await ht()}catch(r){z(o("tool.town.zodFail",{msg:r.message}),!0);return}n?(it=o("tool.town.truthMeta",{src:n.src,b:n.p.buildings.length,n:n.p.npcs.length,d:Object.keys(n.p.dialogs).length}),A=!1,$=null,u=null,G=-1,J(n.p)):(it=o("tool.town.truthNew"),A=!1,J(xn())),Kt()}const At=a("tgrid");function et(s,n,r,d){let g="tc",l="",b=`${n},${r}`,y=!1,q=!1;s.decos.some(p=>p.x===n&&p.y===r&&p.kind==="road")&&(g+=" road",q=!0);const bt=s.buildings.findIndex(p=>n>=p.x&&n<p.x+p.w&&r>=p.y&&r<p.y+p.d),Y=[...s.decos].reverse().find(p=>p.x===n&&p.y===r&&p.kind!=="road"),vt=s.holes.findIndex(p=>p.x===n&&p.y===r),kt=s.npcs.find(p=>p.x===n&&p.y===r);if(bt>=0){const p=s.buildings[bt];return g+=" bld",l=n===p.x+(p.w>>1)&&r===p.y+(p.d>>1)?ie[p.facility]:"",b=`${o(`fac.${p.facility}`)} (${p.facility})`,y=d&&($==null?void 0:$.kind)==="building"&&$.i===bt,{cls:g+(y?" sel":""),html:`<span style="position:absolute;inset:0;background:${mo[p.facility]};border-radius:3px"></span><span style="position:relative">${l}</span>`,title:b,selHit:y,found:!0}}if(Y){l=Sn[Y.kind]??"",b=o(`tool.town.tool.${Y.kind==="road"?"road":Y.kind}`);const p=s.decos.lastIndexOf(Y);y=d&&($==null?void 0:$.kind)==="deco"&&$.i===p,q=!0}if(vt>=0){const p=s.holes[vt];l=`<b style="color:${Mn[p.element??"plain"]}">▼</b>`,b=p.element?o(`elem.${p.element}`):o("tool.town.holePlain"),y=d&&($==null?void 0:$.kind)==="hole"&&$.i===vt,q=!0}return s.buildings.find(p=>p.door.x===n&&p.door.y===r)&&(l+='<span class="door">🚪</span>',q=!0),kt&&(l=`🧍<span class="npcdot" style="background:${kt.color}"></span>`,b=`${kt.name}（${kt.id}）`,y=d&&($==null?void 0:$.kind)==="npc"&&$.id===kt.id,q=!0),{cls:g+(y?" sel":""),html:l,title:b,selHit:y,found:q}}function se(s,n){const r=et(W(),s,n,!0);if(r.found||G<0)return r;for(const d of Et()){const g=et(d,s,n,!1);if(g.found)return{cls:g.cls+" ghost",html:g.html,title:g.title,selHit:!1}}return r}function Ut(){let s="";for(let n=0;n<ze;n++)for(let r=0;r<Te;r++){const d=se(r,n);s+=`<div class="${d.cls}" data-x="${r}" data-y="${n}" title="${k(d.title)}">${d.html}</div>`}At.innerHTML=s}At.addEventListener("click",s=>{const n=s.target.closest(".tc");n&&m(Number(n.dataset.x),Number(n.dataset.y))}),At.addEventListener("pointermove",s=>{const n=s.target.closest(".tc");a("thover").textContent=n?`(${n.dataset.x},${n.dataset.y}) ${n.title}`:"—"});const f=()=>{for(let s=1;;s++){const n=`npc-${s}`;if(!Nt().some(r=>r.id===n))return n}};function c(s,n){const r=W(),d=r.npcs.find(b=>b.x===s&&b.y===n);if(d)return{kind:"npc",id:d.id};const g=r.buildings.findIndex(b=>s>=b.x&&s<b.x+b.w&&n>=b.y&&n<b.y+b.d);if(g>=0)return{kind:"building",i:g};const l=r.holes.findIndex(b=>b.x===s&&b.y===n);if(l>=0)return{kind:"hole",i:l};for(let b=r.decos.length-1;b>=0;b--)if(r.decos[b].x===s&&r.decos[b].y===n)return{kind:"deco",i:b};return null}function m(s,n){const r=W();if(nt!=null){const l=r.buildings[nt];l&&(l.door={x:s,y:n},z(o("tool.town.doorPlaced"))),nt=null,S(),B(),L();return}if(O==="select"){$=c(s,n),B();return}if(O==="erase"){const l=c(s,n);if((l==null?void 0:l.kind)==="npc"){const b=r.npcs.findIndex(y=>y.id===l.id);b>=0&&r.npcs.splice(b,1)}else if((l==null?void 0:l.kind)==="building")r.buildings.splice(l.i,1);else if((l==null?void 0:l.kind)==="hole")r.holes.splice(l.i,1);else if((l==null?void 0:l.kind)==="deco")r.decos.splice(l.i,1);else return;$=null,z(o("tool.town.erased")),S(),B(),L();return}if(O==="npc"){const l=r.npcs.find(y=>y.x===s&&y.y===n);if(l){$={kind:"npc",id:l.id},B();return}if(r.npcs.length>=16){z(o("tool.town.npcFull"),!0);return}const b=f();r.npcs.push({id:b,name:`NPC${Nt().length+1}`,x:s,y:n,race:"human",color:"#e0c060",role:"talker",facing:"s"}),$={kind:"npc",id:b},z(o("tool.town.npcAdded",{name:b})),S(),B(),L();return}if(O==="building"){if(r.buildings.length>=8){z(o("tool.town.bldFull"),!0);return}const l=Math.min(s,Te-at),b=Math.min(n,ze-V),y={x:Math.min(l+(at>>1),Te-1),y:Math.min(b+V,ze-1)};r.buildings.push({x:l,y:b,w:at,d:V,facility:tt,door:y}),$={kind:"building",i:r.buildings.length-1},z(o("tool.town.placed",{what:o(`fac.${tt}`)})),S(),B(),L();return}if(O==="hole"){if(G>=0){z(o("tool.town.stageNoHole"),!0);return}const l=Pt==="plain"?null:Pt,b=r.holes.findIndex(y=>y.x===s&&y.y===n);if(b>=0)r.holes[b].element=l;else if(r.holes.length>=6){z(o("tool.town.holeFull"),!0);return}else r.holes.push({x:s,y:n,element:l});z(o("tool.town.placed",{what:"▼"})),S(),B(),L();return}const d=O.slice(5),g=r.decos.findIndex(l=>l.x===s&&l.y===n&&l.kind===d);g>=0?r.decos.splice(g,1):r.decos.push({x:s,y:n,kind:d}),S(),B(),L()}const w=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],C=s=>o(`tool.town.tool.${s.startsWith("deco-")?s.slice(5):s}`);function H(){const s=a("tpal");s.innerHTML="";for(const n of w){const r=document.createElement("button");r.className=O===n?"on":"",r.textContent=C(n),r.addEventListener("click",()=>{O=n,nt=null,H(),I(),L()}),s.appendChild(r)}}function I(){const s=a("tpalopts");if(s.innerHTML="",s.style.display=O==="building"||O==="hole"?"flex":"none",O==="building"){const n=document.createElement("select");n.innerHTML=Object.keys(ie).map(g=>`<option value="${g}"${g===tt?" selected":""}>${ie[g]} ${k(o(`fac.${g}`))}</option>`).join(""),n.addEventListener("change",()=>{tt=n.value});const r=(g,l,b)=>{const y=document.createElement("input");return y.type="number",y.min="1",y.max=String(b),y.value=String(g),y.className="num",y.style.width="3em",y.addEventListener("change",()=>l(Math.max(1,Math.min(b,Number(y.value)||1)))),y},d=document.createElement("span");d.textContent=o("tool.town.sizeLabel"),s.append(n,d,r(at,g=>{at=g},8),document.createTextNode("×"),r(V,g=>{V=g},6))}else if(O==="hole"){const n=document.createElement("span");n.textContent=o("tool.town.holeElem"),s.appendChild(n);for(const r of["fire","ice","earth","poison","holy","plain"]){const d=document.createElement("button");d.className="chip"+(r===Pt?" on":""),d.style.background=Mn[r],d.title=r==="plain"?o("tool.town.holePlain"):o(`elem.${r}`),d.addEventListener("click",()=>{Pt=r,I()}),s.appendChild(d)}}}const M=a("tdetail");function K(){if(nt=nt,!$){M.innerHTML=`<div class="sub">${k(o("tool.town.detailIdle"))}</div>`;return}if($.kind==="npc")return T($.id);if($.kind==="building")return yt($.i);if($.kind==="hole"){const n=W().holes[$.i];if(!n)return $=null,K();M.innerHTML=`<div><b>▼ ${k(n.element?o(`elem.${n.element}`):o("tool.town.holePlain"))}</b>（${n.x},${n.y}）</div>
        <div class="row"><button id="tdel" type="button">${k(o("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{W().holes.splice($.i,1),$=null,S(),B(),L()});return}const s=W().decos[$.i];if(!s)return $=null,K();M.innerHTML=`<div><b>${Sn[s.kind]||"·"} ${k(o(`tool.town.tool.${s.kind}`))}</b>（${s.x},${s.y}）</div>
      <div class="row"><button id="tdel" type="button">${k(o("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{W().decos.splice($.i,1),$=null,S(),B(),L()})}function yt(s){const n=W().buildings[s];if(!n)return $=null,K();M.innerHTML=`
      <div><b>${ie[n.facility]} ${k(o(`fac.${n.facility}`))}</b>（${n.x},${n.y}・${n.w}×${n.d}）</div>
      <div class="kv"><span class="lbl">${k(o("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(ie).map(r=>`<option value="${r}"${n.facility===r?" selected":""}>${ie[r]} ${k(o(`fac.${r}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${k(o("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${n.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${n.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${nt===s?' class="on"':""}>${k(o("tool.town.doorSet"))}</button></div>
      <div class="sub">${k(o("tool.town.doorHint"))}（🚪 ${n.door.x},${n.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${k(o("tool.town.delete"))}</button></div>`,a("tbfac").addEventListener("change",()=>{n.facility=a("tbfac").value,S(),B(),L()}),a("tbw").addEventListener("change",()=>{n.w=Math.max(1,Math.min(8,Number(a("tbw").value)||n.w)),n.x=Math.min(n.x,Te-n.w),S(),B(),L()}),a("tbd").addEventListener("change",()=>{n.d=Math.max(1,Math.min(6,Number(a("tbd").value)||n.d)),n.y=Math.min(n.y,ze-n.d),S(),B(),L()}),a("tbdoor").addEventListener("click",()=>{nt=nt===s?null:s,K()}),a("tdel").addEventListener("click",()=>{W().buildings.splice(s,1),$=null,nt=null,S(),B(),L()})}function T(s){const n=W().npcs.find(d=>d.id===s);if(!n)return $=null,K();const r=(n.lines??[]).map(d=>d.text).join(`
`);M.innerHTML=`
      <div><b>🧍 ${k(n.name)}</b> <span class="sub">${k(n.id)}（${n.x},${n.y}）</span></div>
      <div class="kv"><span class="lbl">${k(o("tool.town.npcName"))}</span><input id="tnname" type="text" value="${k(n.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${k(o("tool.town.race"))}</span><select id="tnrace">
        ${vo.map(d=>`<option value="${d}"${n.race===d?" selected":""}>${k(o(`tool.town.race.${d}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${k(n.color)}" title="${k(o("tool.town.color"))}" /></div>
      <div class="kv"><span class="lbl">${k(o("tool.town.role"))}</span><select id="tnrole">
        ${go.map(d=>`<option value="${d}"${n.role===d?" selected":""}>${k(d==="talker"?o("tool.town.role.talker"):d==="guide"?o("tool.town.role.guide"):o(`fac.${d}`))}</option>`).join("")}
      </select>
      <span class="lbl">${k(o("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(d=>`<option value="${d}"${(n.facing??"s")===d?" selected":""}>${d}</option>`).join("")}
      </select></div>
      <div class="sub">${k(o("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${k(r)}</textarea>
      <div class="row"><button id="tndlg" type="button">${k(o("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${n.dialog?k(n.dialog):k(o("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${k(o("tool.town.delete"))}</button></div>`,a("tnname").addEventListener("change",()=>{n.name=a("tnname").value.trim()||n.name,S(),B(),L()}),a("tnrace").addEventListener("change",()=>{n.race=a("tnrace").value,S(),L()}),a("tncolor").addEventListener("change",()=>{n.color=a("tncolor").value,S(),B(),L()}),a("tnrole").addEventListener("change",()=>{n.role=a("tnrole").value,S(),L()}),a("tnface").addEventListener("change",()=>{n.facing=a("tnface").value,S(),L()}),a("tnlines").addEventListener("change",()=>{const d=a("tnlines").value.split(`
`).map(l=>l.trim()).filter(Boolean).slice(0,8),g=n.lines??[];n.lines=d.length?d.map((l,b)=>{var y,q;return{text:l,...((y=g[b])==null?void 0:y.text)===l&&((q=g[b])!=null&&q.texts)?{texts:g[b].texts}:{}}}):void 0,S(),mt(),L()}),a("tndlg").addEventListener("click",()=>{Q(n)}),a("tdel").addEventListener("click",()=>{const d=W().npcs,g=d.findIndex(l=>l.id===s);g>=0&&d.splice(g,1),$=null,u&&!Nt().some(l=>l.dialog===u)&&j(),S(),B(),L()})}function Q(s){if(!s.dialog){const n=`dlg-${s.id}`;s.dialog=n,x.dialogs[n]||(x.dialogs[n]={id:n,nodes:[{id:"root",say:"……"}]}),S()}u=s.dialog,E=null,lt=null,pt=[],B(),L()}function j(){u=null,E=null,lt=null,pt=[],Ht()}a("tdlgclose").addEventListener("click",j);const Dt=()=>u?x.dialogs[u]??null:null,be=s=>{for(let n=1;;n++){const r=`n${n}`;if(!s.nodes.some(d=>d.id===r))return r}},le=s=>s.kind==="setFlag"?`⚑${s.flag}`:s.kind==="unlock"?`🔓${s.gate}`:s.kind==="giveItem"?`🎁${s.item}`:`💰${s.amount}G`,xe=["setFlag","unlock","giveItem","giveGold"];function we(s,n){const r=(n??[]).map((g,l)=>`<span class="fxchip">${k(le(g))}<button type="button" data-act="fxdel" data-site="${s}" data-fi="${l}">✕</button></span>`).join(""),d=(n??[]).length<4?`<select data-act="fxkind" data-site="${s}">${xe.map(g=>`<option value="${g}">${k(o(`tool.town.fx.${g}`))}</option>`).join("")}</select>
         <input type="text" data-act="fxval" data-site="${s}" style="width:5.5em" placeholder="${k(o("tool.town.fxValPh"))}" />
         <button type="button" data-act="fxadd" data-site="${s}">${k(o("tool.town.fxAdd"))}</button>`:"";return`<div class="chrow sub"><span>${k(o("tool.town.fxLabel"))}</span>${r}${d}</div>`}const ye=/^[a-z0-9][a-z0-9-]*$/;function Rt(s,n){const r=n.trim();if(s==="giveGold"){const d=Number(r);return Number.isInteger(d)&&d>=1&&d<=99999?{kind:s,amount:d}:null}return ye.test(r)?s==="setFlag"?{kind:s,flag:r}:s==="unlock"?{kind:s,gate:r}:{kind:s,item:r}:null}function Ht(){const s=a("tdlg"),n=Dt();if(s.classList.toggle("on",!!n),!n)return;a("tdlghead").textContent=o("tool.town.dlgHead",{id:n.id});const r=a("tdlgnodes");r.innerHTML="",n.nodes.forEach((d,g)=>{var Y,vt,kt,gt;const l=document.createElement("div");l.className="node";const b=p=>`<option value=""${p===null?" selected":""}>${k(o("tool.town.choiceEnd"))}</option>`+n.nodes.map(P=>`<option value="${k(P.id)}"${p===P.id?" selected":""}>→ ${k(P.id)}</option>`).join("");l.innerHTML=`
        <div class="nid">#${k(d.id)}${g===0?" "+k(o("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${k(d.say)}</textarea>
        <div class="chrow sub"><span>${k(o("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${k(((Y=d.when)==null?void 0:Y.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${k(((vt=d.when)==null?void 0:vt.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${k(((kt=d.when)==null?void 0:kt.item)??"")}" /></div>
        ${we("n",d.effects)}
        ${(d.choices??[]).map((p,P)=>{var Z,$t,dt;return`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${P}" value="${k(p.text)}" />
          <select data-act="cgoto" data-ci="${P}">${b(p.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${P}">✕</button></div>
        <div class="chrow sub"><span>${k(o("tool.town.choiceWhen"))}</span>
          <input type="text" data-act="cwflag" data-ci="${P}" style="width:5em" placeholder="flag" value="${k(((Z=p.when)==null?void 0:Z.flag)??"")}" />
          <input type="text" data-act="cwnot" data-ci="${P}" style="width:5em" placeholder="notFlag" value="${k((($t=p.when)==null?void 0:$t.notFlag)??"")}" />
          <input type="text" data-act="cwitem" data-ci="${P}" style="width:5em" placeholder="item" value="${k(((dt=p.when)==null?void 0:dt.item)??"")}" /></div>
        ${we(`c${P}`,p.effects)}`}).join("")}
        ${(d.choices??[]).length<4?`<button type="button" data-act="caddc">${k(o("tool.town.addChoice"))}</button>`:""}`;const y=()=>{S(),mt(),L()};l.querySelector('[data-act="say"]').addEventListener("change",p=>{d.say=p.target.value||d.say,y()});const q=(p,P)=>{const Z={...d.when??{}};P.trim()?Z[p]=P.trim():delete Z[p],d.when=Object.keys(Z).length?Z:void 0,y()};l.querySelector('[data-act="wflag"]').addEventListener("change",p=>q("flag",p.target.value)),l.querySelector('[data-act="wnot"]').addEventListener("change",p=>q("notFlag",p.target.value)),l.querySelector('[data-act="witem"]').addEventListener("change",p=>q("item",p.target.value)),l.querySelector('[data-act="delnode"]').addEventListener("click",()=>{n.nodes.splice(g,1),n.nodes.length||n.nodes.push({id:"root",say:"……"});for(const p of n.nodes)for(const P of p.choices??[])P.goto===d.id&&(P.goto=null);S(),Ht(),mt(),L()});for(const p of Array.from(l.querySelectorAll('[data-act="ctext"]')))p.addEventListener("change",()=>{const P=d.choices[Number(p.dataset.ci)];P.text=p.value||P.text,y()});for(const p of Array.from(l.querySelectorAll('[data-act="cgoto"]')))p.addEventListener("change",()=>{d.choices[Number(p.dataset.ci)].goto=p.value===""?null:p.value,y()});for(const p of Array.from(l.querySelectorAll('[data-act="cdel"]')))p.addEventListener("click",()=>{d.choices.splice(Number(p.dataset.ci),1),d.choices.length||(d.choices=void 0),S(),Ht(),mt(),L()});const X=(p,P,Z)=>{const $t=d.choices[p],dt={...$t.when??{}};Z.trim()?dt[P]=Z.trim():delete dt[P],$t.when=Object.keys(dt).length?dt:void 0,y()};for(const[p,P]of[["cwflag","flag"],["cwnot","notFlag"],["cwitem","item"]])for(const Z of Array.from(l.querySelectorAll(`[data-act="${p}"]`)))Z.addEventListener("change",()=>X(Number(Z.dataset.ci),P,Z.value));const bt=p=>p==="n"?{get:()=>d.effects,set:P=>{d.effects=P}}:(()=>{const P=d.choices[Number(p.slice(1))];return{get:()=>P.effects,set:Z=>{P.effects=Z}}})();for(const p of Array.from(l.querySelectorAll('[data-act="fxdel"]')))p.addEventListener("click",()=>{const P=bt(p.dataset.site),Z=[...P.get()??[]];Z.splice(Number(p.dataset.fi),1),P.set(Z.length?Z:void 0),S(),Ht(),mt(),L()});for(const p of Array.from(l.querySelectorAll('[data-act="fxadd"]')))p.addEventListener("click",()=>{const P=p.dataset.site,Z=l.querySelector(`[data-act="fxkind"][data-site="${P}"]`),$t=l.querySelector(`[data-act="fxval"][data-site="${P}"]`),dt=Rt(Z.value,$t.value);if(!dt){z(o("tool.town.fxValPh"),!0);return}const Xt=bt(P);Xt.set([...Xt.get()??[],dt]),S(),Ht(),mt(),L()});(gt=l.querySelector('[data-act="caddc"]'))==null||gt.addEventListener("click",()=>{d.choices=[...d.choices??[],{text:"…",goto:null}],S(),Ht(),L()}),r.appendChild(l)}),jt()}a("tdlgaddnode").addEventListener("click",()=>{const s=Dt();!s||s.nodes.length>=32||(s.nodes.push({id:be(s),say:"……"}),S(),Ht(),L())});const It=()=>({flags:new Set(a("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(a("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});let lt=null,pt=[];const Jt=()=>lt?{flags:lt.flags,items:lt.items}:It();function jt(){const s=a("tpv"),n=Dt();if(!n){s.innerHTML="";return}const r=Ye();let d=`<div class="row"><button type="button" data-act="pvstart">${k(o("tool.town.pvRestart"))}</button></div>`;const g=pt.length?`<div class="pvend">${k(o("tool.town.pvFx"))} ${pt.map(l=>`<span class="fxchip">${k(l.kind==="giveGold"?o("tool.town.pvGold",{n:l.amount}):le(l))}</span>`).join("")}</div>`:"";if(E==="end")d+=`<div class="pvsay">…</div>${g}<div class="pvend">${k(o("tool.town.pvEnd"))}</div>`;else if(E!==null){const l=Ve(n,E);if(!l)return E=null,jt();d+=`<div class="pvsay">🗨 ${k(wn(l.say,l.says,r))}</div>${g}`;const b=po(l,Jt());b.length?d+=b.map(y=>`<button type="button" data-act="pvc" data-ci="${(l.choices??[]).indexOf(y)}">${k(wn(y.text,y.texts,r))}</button>`).join(""):d+=`<div class="pvend">${k(o("tool.town.pvEnd"))}</div>`}s.innerHTML=d,s.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{lt=yn(It()),pt=[];const l=uo(n,Jt());E=l?l.id:"end",l&&pt.push(..._e(l.effects,lt)),jt()});for(const l of Array.from(s.querySelectorAll('[data-act="pvc"]')))l.addEventListener("click",()=>{var X;const b=E!==null&&E!=="end"?Ve(n,E):null,y=(X=b==null?void 0:b.choices)==null?void 0:X[Number(l.dataset.ci)];if(!y)return;lt||(lt=yn(It())),pt.push(..._e(y.effects,lt));const q=y.goto!==null?Ve(n,y.goto):null;E=q?q.id:"end",q&&pt.push(..._e(q.effects,lt)),jt()})}a("tpvflags").addEventListener("change",jt),a("tpvitems").addEventListener("change",jt);function mt(){const s=a("tlint"),n=We(x);s.innerHTML=n.length?n.map(r=>r.level==="error"?`<div class="warn" style="color:#ff8a80">⛔ ${k(o(r.key,r.params))}</div>`:`<div class="warn">⚠ ${k(o(r.key,r.params))}</div>`).join(""):`<div class="ok">${k(o("tool.town.lint.ok"))}</div>`}async function St(){try{const s=await(await fetch(U("/api/tables/proposals"))).json();Je(a("tprops"),s.proposals??[],{tag:()=>o("tool.town.capTag"),onView:n=>{ot(n)},onPromote:n=>{Gt(n)},onArchive:n=>{Mt(n)}}),a("tplive").textContent="· live",a("tlive").textContent="· live"}catch{a("tprops").innerHTML=`<div class="live">${k(o("tool.town.noApi"))}</div>`,a("tplive").textContent=o("tool.common.devOff"),a("tlive").textContent=o("tool.common.devOff")}Kt()}function Kt(){var n;const s=a("ttruth");s.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${k(it)}</span>
      <div class="row"><button type="button" data-act="truth-load">${k(o("tool.town.loadTruth"))}</button></div></div>`,(n=s.querySelector('[data-act="truth-load"]'))==null||n.addEventListener("click",()=>{A=!1,ct(!0).then(()=>z(o("tool.town.loaded")))})}async function ot(s){var n,r;try{const d=await(await fetch(U(`/api/tables/proposal?id=${encodeURIComponent(s)}`))).json(),g=(r=(n=d.docs)==null?void 0:n[0])==null?void 0:r.tables.town;if(g===void 0)throw new Error(o("tool.town.propNoTown"));const l=ae.parse(g);$=null,u=null,A=!0,G=-1,J(l),z(o("tool.town.loadedProp",{name:d.docs[0].name}))}catch(d){z(d.message,!0)}}async function Gt(s){try{await Lt(U("/api/tables/promote"),{proposalId:s}),z(o("tool.town.promoted")),A=!1,St(),ct(!0)}catch(n){z(n.message,!0)}}async function Mt(s){try{await Lt(U("/api/tables/archive"),{proposalId:s}),z(o("tool.town.archived")),St()}catch(n){z(n.message,!0)}}async function ut(){var l,b;let s;try{x.name=a("tname").value.trim()||x.name,s=ae.parse(x)}catch(y){z(o("tool.town.zodFail",{msg:y.message.slice(0,200)}),!0);return}const n=We(s).filter(y=>y.level==="error");if(n.length){z(o("tool.town.errBlock",{n:n.length}),!0),mt();return}const r=a("tlabel").value.trim()||s.name;let d={};try{const y=await fetch(U("/api/tables/truth"));y.ok&&(d=((b=(l=(await y.json()).docs)==null?void 0:l[0])==null?void 0:b.tables)??{})}catch{}const g={formatVersion:Nn,id:"tables",name:r,tables:{...d,town:s},createdAt:En(),updatedAt:En()};try{await Lt(U("/api/tables/proposal"),{tables:g,label:r,createdBy:"user"}),z(o("tool.town.saved",{name:r})),St()}catch(y){z(o("tool.town.saveFail",{msg:y.message}),!0)}}a("tsave").addEventListener("click",()=>{ut()}),a("tload").addEventListener("click",()=>{A=!1,ct(!0).then(()=>z(o("tool.town.loaded")))}),a("tlabel").addEventListener("input",L),a("tname").addEventListener("change",()=>{x.name=a("tname").value.trim()||x.name,S(),L()});function zt(s){G=s,$=null,nt=null,B(),L()}function Yt(){var g;const s=a("tstages");s.innerHTML="";const n=(l,b,y,q="")=>{const X=document.createElement("button");return X.type="button",X.textContent=l,X.className=b?"on":"",q&&(X.title=q),X.addEventListener("click",y),s.appendChild(X),X},r=document.createElement("span");r.className="sub",r.textContent=o("tool.town.stagesLabel"),s.appendChild(r),n(o("tool.town.stageBase"),G<0,()=>zt(-1)),(x.stages??[]).forEach((l,b)=>n(`🏗 ${l.id} ⚑${l.when}`,G===b,()=>zt(b),o("tool.town.stageChipTitle",{when:l.when}))),(((g=x.stages)==null?void 0:g.length)??0)<4&&n(o("tool.town.stageAdd"),!1,()=>{var y,q;const l=(((y=x.stages)==null?void 0:y.length)??0)+1;let b=`stage-${l}`;for(let X=l;(q=x.stages)!=null&&q.some(bt=>bt.id===b);X++)b=`stage-${X+1}`;x.stages=[...x.stages??[],{id:b,when:`${b}-open`,buildings:[],decos:[],npcs:[]}],S(),zt(x.stages.length-1)});const d=Ot();if(d){const l=document.createElement("span");l.className="sub",l.style.display="inline-flex",l.style.gap="4px",l.style.alignItems="center";const b=(Y,vt,kt)=>{const gt=document.createElement("input");return gt.type="text",gt.value=Y,gt.placeholder=vt,gt.addEventListener("change",()=>{const p=gt.value.trim();if(!/^[a-z0-9][a-z0-9-]*$/.test(p)){z(o("tool.town.stageIdBad"),!0),gt.value=Y;return}kt(p),S(),B(),L()}),l.appendChild(gt),gt},y=document.createElement("span");y.textContent="id",l.appendChild(y),b(d.id,"stage-1",Y=>{d.id=Y});const q=document.createElement("span");q.textContent=o("tool.town.stageWhen"),l.appendChild(q),b(d.when,"flag",Y=>{d.when=Y});const X=document.createElement("button");X.type="button",X.textContent=o("tool.town.stageDel"),X.addEventListener("click",()=>{x.stages=(x.stages??[]).filter((Y,vt)=>vt!==G),x.stages.length||(x.stages=void 0),S(),zt(-1)}),l.appendChild(X),s.appendChild(l);const bt=document.createElement("span");bt.className="sub",bt.textContent=o("tool.town.stageHint"),s.appendChild(bt)}}function B(){a("tname").value=x.name,Yt(),Ut(),H(),I(),K(),Ht(),mt()}const Bt=F.events.on("tables",()=>{St(),ct()}),st=Xe(()=>{Ke(R.querySelector("#townapp")),B(),St()});return window.cdForgeTown={plan:()=>x,setPlan:s=>J(ae.parse(s),{markDirty:!0}),tool:s=>{O=s,H(),I()},click:(s,n)=>m(s,n),select:(s,n)=>($=c(s,n),B(),$),openDialog:s=>{const n=x.npcs.find(r=>r.id===s);return n&&Q(n),(n==null?void 0:n.dialog)??null},lint:()=>We(x),stage:s=>(zt(s),G),stages:()=>x.stages??[],save:()=>ut(),promote:s=>Gt(s),refresh:()=>St(),reload:(s=!0)=>ct(s),dirty:()=>A},_t()?(B(),St()):ct(!0).then(()=>{St()}),{setVisible(s){a("townapp").classList.toggle("on",s),s&&B()},plan(){return x},dispose(){Bt(),st(),L(),delete window.cdForgeTown}}}const _=R=>R.replace(/[&<>"]/g,F=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[F]),zn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Tn=R=>R===Cn?"comduct":R.replace("/","--"),Pn=["fire","ice","earth","poison","holy"],Ue={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"},xo=24;function wo(R,F){const{wapi:U,postJson:Lt}=F.api,a=f=>R.querySelector(`#${f}`);function z(f,c=!1){const m=a("pmsg");m.textContent=f,m.style.color=c?"#ffd166":"#7fd17f",window.setTimeout(()=>{m.textContent===f&&(m.textContent="")},5e3)}let x=[],O=[],tt=-1,at="any",V=!1,Pt="";const $="cdForgePinM3";function G(){try{sessionStorage.setItem($,JSON.stringify({v:1,world:F.world(),pins:x,dirty:V,label:a("plabel").value}))}catch{}}function nt(){try{const f=sessionStorage.getItem($);if(!f)return!1;const c=JSON.parse(f);return c.v!==1||c.world!==F.world()||!Array.isArray(c.pins)?!1:(x=c.pins,V=!!c.dirty,c.label&&(a("plabel").value=c.label),!0)}catch{return!1}}function u(){V=!0}async function E(){try{const f=await fetch(U("/api/forge/truth"));if(f.ok){O=((await f.json()).prefabs??[]).flatMap(m=>{try{return[Ft.parse(m)]}catch{return[]}});return}}catch{}try{const f=await fetch(U(`/packs/${Tn(F.world())}.json`));f.ok&&(O=((await f.json()).prefabs??[]).flatMap(m=>{try{return[Ft.parse(m)]}catch{return[]}}))}catch{}}async function A(){var f,c,m,w;try{const C=await fetch(U("/api/tables/truth"));if(C.ok){const H=(m=(c=(f=(await C.json()).docs)==null?void 0:f[0])==null?void 0:c.tables)==null?void 0:m.pins;if(H!==void 0)return{p:ve.parse(H),src:"truth"}}}catch{}try{const C=await fetch(U(`/packs/${Tn(F.world())}.json`));if(C.ok){const H=(w=(await C.json()).tables)==null?void 0:w.pins;if(H!==void 0)return{p:ve.parse(H),src:"pack"}}}catch{}return null}async function it(f=!1){if(V&&!f)return;let c=null;try{c=await A()}catch(m){z(o("tool.pin.zodFail",{msg:m.message.slice(0,200)}),!0);return}c?(Pt=o("tool.pin.truthMeta",{src:c.src,n:c.p.length}),V=!1,tt=c.p.length?0:-1,x=c.p):(Pt=o("tool.pin.truthNew"),V=!1,x=[],tt=-1),et(),G(),Nt()}const wt=f=>{var m;const c=O.find(w=>w.id===f);return c?((m=c.names)==null?void 0:m[Ye()])??c.name:f};function L(f){const c=O.filter(w=>!w.meta.tags.includes("town")&&!w.meta.tags.includes("town-interior")),m=c.map(w=>`<option value="${_(w.id)}"${w.id===f?" selected":""}>${_(wt(w.id))}（${w.size.w}×${w.size.d}）</option>`);return f&&!c.some(w=>w.id===f)&&m.unshift(`<option value="${_(f)}" selected>⚠ ${_(f)}</option>`),m.join("")}function _t(){const f=a("ppins");f.innerHTML="",x.length||(f.innerHTML=`<div class="sub">${_(o("tool.pin.empty"))}</div>`),x.forEach((c,m)=>{var K,yt;const w=document.createElement("div");w.className="pincard"+(m===tt?" sel":"");const C=["always","depths","once"].map(T=>`<option value="${T}"${c.rule===T?" selected":""}>${_(o(`tool.pin.rule.${T}`))}</option>`).join(""),H=[`<option value=""${c.theme?"":" selected"}>${_(o("tool.pin.themeAny"))}</option>`].concat(Pn.map(T=>`<option value="${T}"${c.theme===T?" selected":""}>${_(o(`elem.${T}`))}</option>`)).join("");w.innerHTML=`
        <div class="row"><b>📌 ${m+1}</b>
          <select data-act="prefab">${L(c.prefab)}</select>
          <button type="button" data-act="del" title="${_(o("tool.pin.delete"))}">🗑</button></div>
        <div class="kv"><span class="lbl">${_(o("tool.pin.ruleLabel"))}</span><select data-act="rule">${C}</select></div>
        <div class="kv" data-show="depths"><span class="lbl">${_(o("tool.pin.depthsLabel"))}</span>
          <input type="text" data-act="depths" placeholder="${_(o("tool.pin.depthsPh"))}" value="${_((c.depths??[]).join(", "))}" /></div>
        <div class="kv" data-show="range"><span class="lbl">${_(o("tool.pin.rangeLabel"))}</span>
          <input type="number" class="num" data-act="r0" min="1" max="99" value="${((K=c.range)==null?void 0:K[0])??1}" /> −
          <input type="number" class="num" data-act="r1" min="1" max="99" value="${((yt=c.range)==null?void 0:yt[1])??99}" /></div>
        <div class="kv"><span class="lbl">${_(o("tool.pin.themeLabel"))}</span><select data-act="theme">${H}</select></div>
        <div class="sub">${_(o("tool.pin.introLabel"))}</div>
        <textarea data-act="intro" placeholder="${_(o("tool.pin.introPh"))}">${_(c.intro??"")}</textarea>`,w.querySelector('[data-show="depths"]').style.display=c.rule==="depths"?"flex":"none",w.querySelector('[data-show="range"]').style.display=c.rule==="depths"?"none":"flex";const I=()=>{u(),et(),G()};w.addEventListener("click",()=>{tt!==m&&(tt=m,et())}),w.querySelector('[data-act="prefab"]').addEventListener("change",T=>{c.prefab=T.target.value,I()}),w.querySelector('[data-act="rule"]').addEventListener("change",T=>{var Q;c.rule=T.target.value,c.rule==="depths"?(delete c.range,c.depths=(Q=c.depths)!=null&&Q.length?c.depths:[5]):(delete c.depths,c.range=c.range??[1,99]),I()}),w.querySelector('[data-act="depths"]').addEventListener("change",T=>{const Q=T.target.value.split(/[\s,、]+/).map(j=>Number(j)).filter(j=>Number.isInteger(j)&&j>=1&&j<=99);c.depths=[...new Set(Q)].sort((j,Dt)=>j-Dt),I()});const M=(T,Q)=>{const j=c.range??[1,99];j[T]=Math.max(1,Math.min(99,Q||j[T])),j[0]>j[1]&&(j[T===0?1:0]=j[T]),c.range=j,I()};w.querySelector('[data-act="r0"]').addEventListener("change",T=>M(0,Number(T.target.value))),w.querySelector('[data-act="r1"]').addEventListener("change",T=>M(1,Number(T.target.value))),w.querySelector('[data-act="theme"]').addEventListener("change",T=>{const Q=T.target.value;Q?c.theme=Q:delete c.theme,I()}),w.querySelector('[data-act="intro"]').addEventListener("change",T=>{const Q=T.target.value.trim();Q!==(c.intro??"")&&delete c.intros,Q?c.intro=Q.slice(0,200):(delete c.intro,delete c.intros),u(),G()}),w.querySelector('[data-act="del"]').addEventListener("click",T=>{T.stopPropagation(),x.splice(m,1),tt>=x.length&&(tt=x.length-1),u(),et(),G()}),f.appendChild(w)}),a("paddpin").disabled=x.length>=kn}a("paddpin").addEventListener("click",()=>{if(x.length>=kn){z(o("tool.pin.full"),!0);return}const f=O.find(c=>!c.meta.tags.includes("town")&&!c.meta.tags.includes("town-interior"));x.push({prefab:(f==null?void 0:f.id)??"prefab-id",rule:"depths",depths:[5]}),tt=x.length-1,u(),et(),G()});function S(){const f=a("plint"),c=$n(x,O.map(m=>({id:m.id,w:m.size.w,d:m.size.d})));for(const m of x){const w=O.find(C=>C.id===m.prefab);w&&(w.meta.tags.includes("town")||w.meta.tags.includes("town-interior"))&&c.push({level:"warn",key:"tool.pin.lint.townTag",params:{id:m.prefab}})}f.innerHTML=c.length?c.map(m=>`<div class="warn">⚠ ${_(o(m.key,m.params))}</div>`).join(""):`<div class="ok">${_(o("tool.pin.lint.ok"))}</div>`}function ft(){const f=a("ppv"),c=at==="any"?null:at;let m="";for(let w=1;w<=xo;w++){const C=Ln(x,w,c),H=C.map(I=>{const M=x.indexOf(I),K=I.theme?Ue[I.theme]:"#5b9bff";return`<button type="button" class="pbadge${M===tt?" sel":""}" data-i="${M}" style="border-color:${K}">${_(wt(I.prefab))}${I.intro?" 💬":""}</button>`}).join("");m+=`<div class="pvrow${C.length?" hit":""}"><span class="d">${w}F</span>${H||`<span class="none">${_(o("tool.pin.pvNone"))}</span>`}</div>`}f.innerHTML=m;for(const w of Array.from(f.querySelectorAll(".pbadge")))w.addEventListener("click",()=>{tt=Number(w.dataset.i),et()})}function Ot(){const f=a("pthemes");f.innerHTML=`<span class="sub">${_(o("tool.pin.pvTheme"))}</span>`;for(const c of["any",...Pn]){const m=document.createElement("button");m.className="chip"+(at===c?" on":""),m.style.background=c==="any"?"#9aa4b5":Ue[c],m.title=c==="any"?o("tool.pin.themeAny"):o(`elem.${c}`),m.addEventListener("click",()=>{at=c,ft(),Ot()}),f.appendChild(m)}}function W(){const f=a("ppf"),c=x[tt],m=c?O.find(H=>H.id===c.prefab):void 0;if(!m){f.innerHTML=`<div class="sub">${_(o("tool.pin.pfNone"))}</div>`;return}const w=(H,I)=>{const M=m.props.find(K=>K.x===H&&K.y===I);return M?M.kind.startsWith("chest")?"📦":M.kind.startsWith("shrine")?"⛲":M.kind.startsWith("portal")?"◎":M.kind==="item"?"✦":M.kind==="trap"?"✖":"·":null};let C="";for(let H=0;H<m.size.d;H++)for(let I=0;I<m.size.w;I++){const M=m.cells[H][I];let K=M.kind==="wall"?M.breakable?"#5e4a33":M.pillar||M.low?"#4a5468":"#3a4356":"#223048";M.kind==="floor"&&M.floorFeat==="water"&&(K="#2b4a6f"),M.kind==="floor"&&M.floorFeat==="slip"&&(K="#9fc4d8"),M.kind==="floor"&&M.hazard&&(K=Ue[M.hazard.element]??K);const yt=m.ports.some(j=>j.x===I&&j.y===H),Q=m.spawns.find(j=>j.x===I&&j.y===H)?"🧍":w(I,H)??(yt?"○":(M.height??0)>0?String(M.height):"");C+=`<div class="pc${yt?" port":""}" style="background:${K}">${Q}</div>`}f.innerHTML=`<div class="sub"><b>${_(wt(m.id))}</b>（${m.size.w}×${m.size.d}・depth ${m.meta.depthRange[0]}-${m.meta.depthRange[1]}）</div>
      <div class="pfgrid" style="grid-template-columns:repeat(${m.size.w}, 18px)">${C}</div>`}async function Et(){try{const f=await(await fetch(U("/api/tables/proposals"))).json();Je(a("pprops"),f.proposals??[],{tag:()=>o("tool.pin.capTag"),onView:c=>{J(c)},onPromote:c=>{ht(c)},onArchive:c=>{ct(c)}}),a("pplive").textContent="· live",a("plive").textContent="· live"}catch{a("pprops").innerHTML=`<div class="live">${_(o("tool.pin.noApi"))}</div>`,a("pplive").textContent=o("tool.common.devOff"),a("plive").textContent=o("tool.common.devOff")}Nt()}function Nt(){var c;const f=a("ptruth");f.innerHTML=`<div class="card"><b>tables.pins</b><span class="id">${_(Pt)}</span>
      <div class="row"><button type="button" data-act="truth-load">${_(o("tool.pin.loadTruth"))}</button></div></div>`,(c=f.querySelector('[data-act="truth-load"]'))==null||c.addEventListener("click",()=>{V=!1,it(!0).then(()=>z(o("tool.pin.loaded")))})}async function J(f){var c,m;try{const w=await(await fetch(U(`/api/tables/proposal?id=${encodeURIComponent(f)}`))).json(),C=(m=(c=w.docs)==null?void 0:c[0])==null?void 0:m.tables.pins;if(C===void 0)throw new Error(o("tool.pin.propNoPins"));const H=ve.parse(C);V=!0,x=H,tt=H.length?0:-1,et(),G(),z(o("tool.pin.loadedProp",{name:w.docs[0].name}))}catch(w){z(w.message,!0)}}async function ht(f){try{await Lt(U("/api/tables/promote"),{proposalId:f}),z(o("tool.pin.promoted")),V=!1,Et(),it(!0)}catch(c){z(c.message,!0)}}async function ct(f){try{await Lt(U("/api/tables/archive"),{proposalId:f}),z(o("tool.pin.archived")),Et()}catch(c){z(c.message,!0)}}async function At(){var H,I;let f=[];try{x.length&&(f=ve.parse(x))}catch(M){z(o("tool.pin.zodFail",{msg:M.message.slice(0,200)}),!0);return}const c=a("plabel").value.trim()||o("tool.pin.capTag");let m={};try{const M=await fetch(U("/api/tables/truth"));M.ok&&(m=((I=(H=(await M.json()).docs)==null?void 0:H[0])==null?void 0:I.tables)??{})}catch{}const w={...m};delete w.pins,f.length&&(w.pins=f);const C={formatVersion:Nn,id:"tables",name:c,tables:w,createdAt:zn(),updatedAt:zn()};try{await Lt(U("/api/tables/proposal"),{tables:C,label:c,createdBy:"user"}),z(o("tool.pin.saved",{name:c})),Et()}catch(M){z(o("tool.pin.saveFail",{msg:M.message}),!0)}}a("psave").addEventListener("click",()=>{At()}),a("pload").addEventListener("click",()=>{V=!1,it(!0).then(()=>z(o("tool.pin.loaded")))}),a("plabel").addEventListener("input",G);function et(){_t(),S(),Ot(),ft(),W()}const se=F.events.on("tables",()=>{Et(),it()}),Ut=Xe(()=>{Ke(R.querySelector("#pinapp")),et(),Et()});return window.cdForgePin={pins:()=>x,setPins:f=>{x=f?ve.parse(f):[],tt=x.length?0:-1,u(),et(),G()},addPin:()=>{a("paddpin").click()},select:f=>{tt=f,et()},preview:(f,c)=>Ln(x,f,c??null).map(m=>m.prefab),lint:()=>$n(x,O.map(f=>({id:f.id,w:f.size.w,d:f.size.d}))),prefabs:()=>O.map(f=>f.id),save:()=>At(),promote:f=>ht(f),refresh:()=>Et(),reload:(f=!0)=>it(f),dirty:()=>V},E().then(()=>{nt()?(et(),Et()):it(!0).then(()=>{Et()})}),{setVisible(f){a("pinapp").classList.toggle("on",f),f&&et()},dispose(){se(),Ut(),G(),delete window.cdForgePin}}}const rt=R=>o(`tool.forge.brush.${R}`),yo=R=>{var F;return((F=R.names)==null?void 0:F[Ye()])??R.name};function ge(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const Bo={id:"forge",async mount(R,F){const{wapi:U,postJson:Lt}=F.api;R.innerHTML=fo,Ke(R);const a=t=>R.querySelector(`#${t}`),z=bo(R,F),x=wo(R,F);let O="room",tt=()=>{};function at(t){O=t,a("app").style.display=t==="room"?"flex":"none",z.setVisible(t==="town"),x.setVisible(t==="pin"),a("modeRoom").classList.toggle("on",t==="room"),a("modeTown").classList.toggle("on",t==="town"),a("modePin").classList.toggle("on",t==="pin"),tt();try{sessionStorage.setItem("cdForgeModeM4",t)}catch{}}a("modeRoom").addEventListener("click",()=>at("room")),a("modeTown").addEventListener("click",()=>at("town")),a("modePin").addEventListener("click",()=>at("pin"));const V=document.createElement("button");V.type="button",V.id="fplay",V.hidden=!0,V.style.marginLeft="auto",V.addEventListener("click",()=>window.open(co(F.world()),"_blank"));const Pt=()=>{V.textContent=o("tool.studio.playNow"),V.title=o("tool.studio.playNowTitle")};Pt(),a("fmodes").appendChild(V);const $=document.createElement("button");$.type="button",$.id="ftry",$.textContent="▶ 試す";const G=()=>{$.hidden=O==="pin",$.title=O==="town"?"この街に主人公を降ろして NPC と話して確かめる":"この部屋を、主人公を降ろして歩いて確かめる"};tt=G,G(),$.addEventListener("click",()=>{(O==="town"?bn("town",z.plan(),F.world()):bn("prefab",He(),F.world())).catch(e=>console.warn("§testbed 試す失敗",e))}),a("fmodes").appendChild($);const nt="plain";let u=Be("first-keep","はじまりの砦",7,6,ge()),E="floor",A="brush",it="fire",wt=6,L,_t=null;const S=new oo,ft=()=>({element:it,power:wt,monType:L}),Ot="cdForgeP2";function W(){try{sessionStorage.setItem(Ot,JSON.stringify({v:1,pf:u,brush:E,shape:A,hazardElement:it,hazardPower:wt,spawnType:L??null,cam:{yaw:m,pitch:w,dist:C}}))}catch{}}function Et(){var t;try{const e=sessionStorage.getItem(Ot);if(!e)return!1;const i=JSON.parse(e);return i.v!==1||!((t=i.pf)!=null&&t.size)||!Array.isArray(i.pf.cells)?!1:(u=i.pf,E=i.brush??"floor",A=i.shape??"brush",it=i.hazardElement??"fire",wt=i.hazardPower??6,L=i.spawnType??void 0,i.cam&&(m=i.cam.yaw,w=i.cam.pitch,C=i.cam.dist),!0)}catch{return!1}}const Nt=a("stage"),J=new cn({antialias:!0});J.toneMapping=Vn,J.toneMappingExposure=1.22,J.setPixelRatio(Math.min(devicePixelRatio,2)),Nt.appendChild(J.domElement);const ht=new pn,ct=new un(42,1,.05,200),At=hn[nt],et=Qn(At);ht.background=new fn(At.bg);const se=new _n(et.hemiSky,et.hemiGround,Math.max(.5,et.hemiI)),Ut=new je(et.sunCol,Math.max(.8,et.sunI));Ut.position.set(3,4.2,2.4);const f=new je(et.fillCol,.35);f.position.set(-2.6,1.4,-1.8),ht.add(se,Ut,f);const c=new to(document.createElement("div"),()=>{});let m=0,w=.72,C=9;const H=new oe(3,0,2.5);function I(){H.set((u.size.w-1)/2,.3,(u.size.d-1)/2),C=Math.max(u.size.w,u.size.d)*1.35+2}function M(){const t=Nt.clientWidth,e=Nt.clientHeight;J.setSize(t,e),ct.aspect=t/e,ct.updateProjectionMatrix()}F.own(window,"resize",M);let K=null,yt=null;function T(){K&&ht.remove(K),yt&&ht.remove(yt),K=c.buildPrefabPreview(nt,u),yt=new ue;for(const t of u.spawns)yt.add(we(t));ht.add(K,yt),be()}let Q=!1,j=null;const Dt=new ne({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function be(){if(j&&(ht.remove(j),j=null),!Q)return;j=new ue;const t=u.ports.length?ao(u,u.ports[0],!1):new Set;for(let e=0;e<u.size.d;e++)for(let i=0;i<u.size.w;i++){const h=u.cells[e][i];if(h.kind!=="floor"||h.floorFeat==="water"||t.has(`${i},${e}`))continue;const v=new Vt(new pe(.96,.06,.96),Dt);v.position.set(i,(h.height??0)*Se+.34,e),j.add(v)}ht.add(j)}function le(t){const e=t?Ge.find(i=>i.name===t):null;return{kind:"monster",name:t??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:e==null?void 0:e.size,heads:e==null?void 0:e.heads,element:e==null?void 0:e.element}}function xe(t){const{geo:e,spots:i}=eo(t),h=new ue;h.add(new Vt(e,no()));for(const v of i){const N=new Vt(new pe(1,1,1),new ne({color:v.c}));N.position.set(v.x,v.y,v.z),N.scale.set(v.sx,v.sy,v.sz),h.add(N)}return h}function we(t){var v,N;const e=new ue,i=new Vt(new pe(.94,.05,.94),new ne({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(i.position.y=.03,e.add(i),t.monType&&Ge.some(D=>D.name===t.monType)){const D=le(t.monType),Wt=xe(D),xt=((D.size??1)-1)/2;Wt.position.set(xt,0,xt),e.add(Wt)}else{const D=new Vt(new Xn(.3),new ne({color:11702236}));D.position.y=.62,e.add(D)}const h=(((N=(v=u.cells[t.y])==null?void 0:v[t.x])==null?void 0:N.height)??0)*Se;return e.position.set(t.x,h,t.y),e}const ye=new ne({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),Rt=new Vt(new pe(1,1,1),ye);Rt.visible=!1,ht.add(Rt);const Ht=new ne({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),It=new Vt(new pe(1,1,1),Ht);It.visible=!1,ht.add(It);function lt(t,e){var h,v;if(!t){Rt.visible=!1;return}const i=(((v=(h=u.cells[t.y])==null?void 0:h[t.x])==null?void 0:v.height)??0)*Se;Rt.visible=!0,Rt.scale.set(1.04,.14,1.04),Rt.position.set(t.x,i+.4,t.y),ye.color.setHex(e||E==="erase"?14707290:6003711)}function pt(t,e){if(!t||!e){It.visible=!1;return}const i=Math.min(t.x,e.x),h=Math.max(t.x,e.x),v=Math.min(t.y,e.y),N=Math.max(t.y,e.y);It.visible=!0,It.scale.set(h-i+1.04,.3,N-v+1.04),It.position.set((i+h)/2,.3,(v+N)/2)}const Jt=new Kn,jt=new Yn(new oe(0,1,0),0);function mt(t,e){const i=J.domElement.getBoundingClientRect(),h=new Jn((t-i.left)/i.width*2-1,-((e-i.top)/i.height*2-1));Jt.setFromCamera(h,ct);const v=(xt,ee)=>xt>=0&&ee>=0&&xt<u.size.w&&ee<u.size.d;if(K){const xt=Jt.intersectObject(K,!0);for(const ee of xt){const Re=ee.point.clone();ee.face&&Re.addScaledVector(ee.face.normal,-.05);const rn=Math.round(Re.x),dn=Math.round(Re.z);if(v(rn,dn))return{x:rn,y:dn}}}const N=new oe;if(!Jt.ray.intersectPlane(jt,N))return null;const D=Math.round(N.x),Wt=Math.round(N.z);return v(D,Wt)?{x:D,y:Wt}:null}const St=a("msg");let Kt=0;function ot(t,e=!1){St.textContent=t,St.style.color=e?"#ffd166":"#7fd17f",clearTimeout(Kt);const i=R.querySelector("#mtoast");i&&X.matches&&(i.textContent=t,i.style.display="block",i.style.borderColor=e?"#ffd166":"#2b3547"),Kt=window.setTimeout(()=>{St.textContent="",i&&(i.style.display="none")},4500)}function Gt(t){a("guide").style.display=t?"block":"none"}a("help").addEventListener("click",()=>Gt(!0));function Mt(t){t&&(T(),Gt(!1))}function ut(){S.commit(u)&&(Yt(),te(),W())}function zt(t,e){u=t,Qt(),I(),T(),ut(),e&&ot(e)}function Yt(){a("undo").disabled=!S.canUndo(),a("redo").disabled=!S.canRedo();const t=R.querySelector("#mUndo");t&&(t.disabled=!S.canUndo(),a("mRedo").disabled=!S.canRedo())}function B(){const t=S.undo();t&&(u=t,Qt(),T(),Yt(),te(),W(),ot(o("tool.common.undone")))}function Bt(){const t=S.redo();t&&(u=t,Qt(),T(),Yt(),te(),W(),ot(o("tool.common.redone")))}a("undo").addEventListener("click",B),a("redo").addEventListener("click",Bt);let st="none",ke=!1,s=0,n=0,r=new Set,d=null,g=null,l=null;function b(t,e,i){const h=`${e},${i}`;r.has(h)||(r.add(h),Mt(Me(u,t,e,i,ft())),t==="port"&&!(e===0||i===0||e===u.size.w-1||i===u.size.d-1)&&ot(o("tool.forge.portEdgeOnly"),!0))}function y(t,e){if(d&&(d.x!==e.x||d.y!==e.y)){let{x:i,y:h}=d;const v=Math.max(Math.abs(e.x-i),Math.abs(e.y-h));for(let N=1;N<=v;N++)b(t,Math.round(i+(e.x-i)*(N/v)),Math.round(h+(e.y-h)*(N/v)))}else b(t,e.x,e.y);d=e}J.domElement.addEventListener("pointerdown",t=>{if(t.pointerType==="touch")return;J.domElement.setPointerCapture(t.pointerId),s=t.clientX,n=t.clientY;const e=mt(t.clientX,t.clientY);if(t.button===2){e?(st="erase",r=new Set,d=null,y("erase",e)):st="orbit";return}if(t.button===1||ke||!e){st="orbit";return}if(t.button===0){if(A==="rect"){st="rect",g=e,l=e,pt(g,l);return}if(A==="fill"){Mt(qe(u,E,e.x,e.y,ft())),ut();return}st="paint",r=new Set,d=null,y(E,e)}});let q=null;J.domElement.addEventListener("pointermove",t=>{if(t.pointerType==="touch")return;const e=mt(t.clientX,t.clientY);q=e,p(e),lt(e,st==="erase"),st==="orbit"?(m+=(t.clientX-s)*.008,w=Math.min(1.4,Math.max(.15,w+(t.clientY-n)*.006))):(st==="paint"||st==="erase")&&e?y(st==="erase"?"erase":E,e):st==="rect"&&e&&(l=e,pt(g,l)),s=t.clientX,n=t.clientY}),J.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(st==="rect"&&g&&l?(Mt(De(u,E,g.x,g.y,l.x,l.y,ft())),ut()):st==="paint"||st==="erase"?ut():st==="orbit"&&W(),st="none",g=l=null,d=null,pt(null,null))}),J.domElement.addEventListener("pointerleave",()=>{lt(null,!1),p(null)}),J.domElement.addEventListener("contextmenu",t=>t.preventDefault()),J.domElement.addEventListener("wheel",t=>{t.preventDefault(),C=Math.min(40,Math.max(3,C*(t.deltaY>0?1.08:.93)))},{passive:!1});const X=matchMedia("(max-width: 900px)");function bt(){const t=Math.round(m/(Math.PI/4))*(Math.PI/4);Math.abs(m-t)<5*Math.PI/180&&(m=t)}let Y="none",vt=null;function kt(){Y="none",vt=null,g=l=null,d=null,pt(null,null),lt(null,!1)}io(J.domElement,{strokeStart(t,e){const i=mt(t,e);if(!i){Y="none";return}if(vt=JSON.stringify(u),A==="rect"){Y="rect",g=i,l=i,pt(g,l);return}if(Y="paint",r=new Set,d=null,A==="fill"){Mt(qe(u,E,i.x,i.y,ft())),r.add(`${i.x},${i.y}`);return}y(E,i),lt(i,E==="erase")},strokeMove(t,e){const i=mt(t,e);i&&(Y==="rect"?(l=i,pt(g,l)):Y==="paint"&&A==="brush"&&(y(E,i),lt(i,E==="erase")))},strokeEnd(){Y==="rect"&&g&&l&&Mt(De(u,E,g.x,g.y,l.x,l.y,ft())),Y!=="none"&&(ut(),he()),kt()},strokeCancel(){Y==="paint"&&vt&&(u=JSON.parse(vt),T(),te()),kt()},orbit(t,e){m+=t*.008,w=Math.min(1.4,Math.max(.15,w+e*.006))},orbitEnd(){bt(),W()},pinch(t){C=Math.min(40,Math.max(3,C/t))},undoTap(){B(),he()},redoTap(){Bt(),he()},longPress(t,e){const i=mt(t,e);i&&(lt(i,!1),ot(o("tool.forge.cellInfo",{x:i.x,y:i.y,desc:gt(i.x,i.y)})),he())},strokeSize:()=>r.size});function gt(t,e){const i=u.cells[e][t],h=[];i.kind==="wall"?h.push(i.low?rt("low"):i.pillar?rt("pillar"):i.breakable?rt("breakable"):rt("wall")):(h.push(i.floorFeat==="water"?rt("water"):i.floorFeat==="slip"?rt("slip"):rt("floor")),i.hazard&&h.push(o("tool.forge.cell.hazard",{el:o(`elem.${i.hazard.element}`)})),(i.height??0)>0&&h.push(o("tool.forge.cell.height",{n:i.height??0})));const v=u.props.find(D=>D.x===t&&D.y===e);v&&h.push(fe(v.kind)?rt(v.kind):v.kind);const N=u.spawns.find(D=>D.x===t&&D.y===e);return N&&h.push(N.monType?me(N.monType):o("tool.forge.cell.spawnAuto")),u.ports.some(D=>D.x===t&&D.y===e)&&h.push(rt("port")),h.join("・")}function p(t){const e=a("hoverhint");if(!t){e.textContent=o("tool.forge.hoverIdle");return}const i=E==="spawn"?L?me(L):o("tool.forge.auto"):rt(E),h=E==="erase"?o("tool.forge.verb.erase"):A==="rect"?o("tool.forge.verb.rect",{name:i}):A==="fill"?o("tool.forge.verb.fill",{name:i}):o("tool.forge.verb.place",{name:i});e.textContent=o("tool.forge.hoverLine",{x:t.x,y:t.y,desc:gt(t.x,t.y),verb:h})}const P=t=>{var i,h,v;if(O!=="room"||((i=t.target)==null?void 0:i.tagName)==="INPUT"||((h=t.target)==null?void 0:h.tagName)==="SELECT"||((v=t.target)==null?void 0:v.tagName)==="TEXTAREA")return;if(t.code==="Space"){ke=!0,t.preventDefault();return}if((t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="z"){t.preventDefault(),t.shiftKey?Bt():B();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y"){t.preventDefault(),Bt();return}const e=t.key.toLowerCase();if(e==="b")Ct("brush");else if(e==="r")Ct("rect");else if(e==="f")Ct("fill");else if(e==="escape")st="none",g=l=null,pt(null,null),Gt(!1);else if(e==="arrowleft")m-=Math.PI/24;else if(e==="arrowright")m+=Math.PI/24;else if(e==="arrowup")w=Math.min(1.4,w+.05);else if(e==="arrowdown")w=Math.max(.15,w-.05);else{const N=gn.find(D=>D.key===e);N&&qt(N.id)}},Z=t=>{t.code==="Space"&&(ke=!1)};F.own(window,"keydown",P),F.own(window,"keyup",Z),a("camL").addEventListener("click",()=>{m-=Math.PI/4,W()}),a("camR").addEventListener("click",()=>{m+=Math.PI/4,W()}),a("camIn").addEventListener("click",()=>{C=Math.max(3,C*.8),W()}),a("camOut").addEventListener("click",()=>{C=Math.min(40,C*1.25),W()});const $t=new cn({antialias:!0,preserveDrawingBuffer:!0});$t.setSize(96,96);const dt=new pn,Xt=new un(40,1,.05,100);dt.add(new Un(16777215,.85));const Ze=new je(16769725,1);Ze.position.set(3,6,4),dt.add(Ze);function $e(t){dt.background=new fn(hn[nt].bg),dt.add(t);const e=new Zn().setFromObject(t),i=e.getCenter(new oe),h=e.getSize(new oe),v=Math.max(h.x,h.y,h.z)*.62+.24;Xt.position.set(i.x+v*1.35,i.y+v*1.15,i.z+v*1.85),Xt.lookAt(i),$t.render(dt,Xt);const N=$t.domElement.toDataURL();return dt.remove(t),N}const Tt=new Map;function Le(t){const e=`tile:${t}`;if(!Tt.has(e)){const i=c.buildSample(nt,t);i.position.set(-1,0,-1);const h=new ue;h.add(i),Tt.set(e,$e(h))}return Tt.get(e)}function Pe(){if(!Tt.has("port")){const t={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};Tt.set("port",$e(c.buildPrefabPreview(nt,t)))}return Tt.get("port")}function Ce(t){const e=`mon:${t}`;return Tt.has(e)||Tt.set(e,$e(xe(le(t)))),Tt.get(e)}function Hn(t){const e=`pf:${t.id}:${t.updatedAt}`;return Tt.has(e)||Tt.set(e,$e(c.buildPrefabPreview(nt,t))),Tt.get(e)}const Ne=[];function Zt(t,e,i,h,v,N,D,Wt){const xt=document.createElement("div");xt.className="swatch",xt.title=Wt??"",xt.innerHTML=`${h?`<img src="${h}" alt="" />`:`<div class="glyph">${v??""}</div>`}${N?`<span class="kbd">${N}</span>`:""}<div class="nm">${i}</div>`,xt.addEventListener("click",()=>qt(e,D)),t.appendChild(xt),Ne.push({el:xt,brush:e,monType:D})}function Qe(){for(const t of["palTerrain","palProps","palMisc","palSpawns"])a(t).innerHTML="";Ne.length=0;for(const t of gn)t.cat==="terrain"?Zt(a("palTerrain"),t.id,rt(t.id),t.sample?Le(t.sample):null,t.id==="down"?"▼":null,t.key,void 0,o(`tool.forge.brushHint.${t.id}`)):t.cat==="prop"?Zt(a("palProps"),t.id,rt(t.id),t.sample?Le(t.sample):null,null,t.key,void 0,o(`tool.forge.brushHint.${t.id}`)):t.cat==="port"?Zt(a("palMisc"),t.id,rt(t.id),Pe(),null,t.key,void 0,o(`tool.forge.brushHint.${t.id}`)):t.cat==="erase"&&Zt(a("palMisc"),t.id,rt(t.id),null,"🧽","E",void 0,o(`tool.forge.brushHint.${t.id}`));Zt(a("palSpawns"),"spawn",o("tool.forge.auto"),null,"？",void 0,void 0,o("tool.forge.autoHint"));for(const t of Ge)Zt(a("palSpawns"),"spawn",me(t.name),Ce(t.name),null,void 0,t.name,o("tool.forge.monHint",{min:t.min,max:t.max})+(t.size?`・${t.size}×${t.size}`:""))}const In={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function Ee(){const t=a("palopts");t.innerHTML=`<span>${Ae(o("tool.forge.attrLabel"))}</span>`;for(const h of["fire","ice","earth","poison","holy"]){const v=document.createElement("button");v.className="chip"+(h===it?" on":""),v.style.background=In[h],v.title=o(`elem.${h}`),v.addEventListener("click",()=>{it=h,Ee(),re(),W()}),t.appendChild(v)}const e=document.createElement("span");e.textContent=`　${o("tool.forge.powerLabel")}`;const i=document.createElement("input");i.type="number",i.min="1",i.max="40",i.value=String(wt),i.className="num",i.style.width="3.4em",i.addEventListener("change",()=>{wt=Math.max(1,Math.min(40,Number(i.value)||6)),W()}),t.append(e,i)}function qt(t,e){E=t,t==="spawn"&&(L=e),jn(t,t==="spawn"?e:void 0),!fe(t).areaOk&&A!=="brush"&&(Ct("brush"),ot(o("tool.forge.brushOneOnly",{name:rt(t)}))),re(),p(q),W()}function Ct(t){if(t!=="brush"&&!fe(E).areaOk){ot(o("tool.forge.shapeOneOnly",{name:rt(E)}),!0);return}A=t,re(),W()}function re(){const t=fe(E);for(const v of Ne)v.el.classList.toggle("on",v.brush===E&&(E!=="spawn"||v.monType===L));a("shBrush").classList.toggle("on",A==="brush"),a("shRect").classList.toggle("on",A==="rect"),a("shFill").classList.toggle("on",A==="fill"),a("nowname").textContent=E==="spawn"?o("tool.forge.nowSpawn",{name:L?me(L):o("tool.forge.auto")}):E==="hazard"?o("tool.forge.nowHazard",{el:o(`elem.${it}`)}):rt(t.id),a("nowshape").textContent=`（${o(`tool.common.shape.${A}`)}）`;const e=a("nowimg"),i=E==="spawn"?L?Ce(L):null:E==="port"?Pe():t.sample?Le(t.sample):null;i?(e.src=i,e.style.display="block"):e.style.display="none",a("palopts").classList.toggle("show",E==="hazard");const h=R.querySelector("#mNowImg");h&&(i?(h.src=i,h.style.display="block"):h.style.display="none",a("mNowName").textContent=a("nowname").textContent??"",a("mShB").classList.toggle("on",A==="brush"),a("mShR").classList.toggle("on",A==="rect"),a("mShF").classList.toggle("on",A==="fill"),qn())}a("shBrush").addEventListener("click",()=>Ct("brush")),a("shRect").addEventListener("click",()=>Ct("rect")),a("shFill").addEventListener("click",()=>Ct("fill"));function Qt(){a("pid").value=u.id,a("pname").value=u.name,a("pw").value=String(u.size.w),a("pd").value=String(u.size.d),a("pdepth").value=`${u.meta.depthRange[0]}-${u.meta.depthRange[1]}`,a("pweight").value=String(u.meta.weight),a("ptags").value=u.meta.tags.join(" "),a("cPorts").checked=u.meta.solvability.portsConnected,a("cHaz").checked=u.meta.solvability.hazardAvoidable}function tn(){u.id=a("pid").value.trim()||u.id,u.name=a("pname").value.trim()||u.name;const t=a("pdepth").value.split("-").map(e=>Math.max(1,Math.min(99,Number(e)||1)));u.meta.depthRange=[t[0]??1,Math.max(t[0]??1,t[1]??t[0]??99)],u.meta.weight=Math.max(1,Math.min(9,Number(a("pweight").value)||3)),u.meta.tags=a("ptags").value.split(/[\s,、]+/).map(e=>e.trim()).filter(Boolean),u.meta.solvability.portsConnected=a("cPorts").checked,u.meta.solvability.hazardAvoidable=a("cHaz").checked}for(const t of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])a(t).addEventListener("change",()=>{tn(),ut()});a("applySize").addEventListener("click",()=>{const t=Number(a("pw").value),e=Number(a("pd").value),i=mn(u,t,e);Qt(),I(),T(),ut();const h=i.ports+i.props+i.spawns;ot(h?o("tool.forge.resizedDrop",{w:u.size.w,d:u.size.d,n:h,ports:i.ports,props:i.props,spawns:i.spawns}):o("tool.forge.resized",{w:u.size.w,d:u.size.d}),h>0)}),a("newpf").addEventListener("click",()=>{const t=Math.floor(Math.random()*900)+100;zt(Be(`prefab-${t}`,o("tool.forge.newName",{n:t}),u.size.w,u.size.d,ge()),o("tool.forge.newSaid"))});function te(){const t=vn(u),e=a("solv");e.innerHTML=t.items.map(v=>`<div class="s-${v.level}">${v.level==="ok"?"✓":v.level==="warn"?"⚠":"✗"} ${Ae(v.key?o(v.key,v.params):v.msg)}</div>`).join("");const i=a("save");i.disabled=t.saveBlocked,a("savenote").textContent=t.saveBlocked?o("tool.forge.saveBlockedNote",{reason:t.blockReasonKey?o(t.blockReasonKey):t.blockReason??""}):o("tool.common.savenote");const h=R.querySelector("#mSolv");if(h){const v=t.items.filter(D=>D.level==="err").length,N=t.items.filter(D=>D.level==="warn").length;h.textContent=v?`✗ ${v}`:N?`⚠ ${N}`:"✓",h.className="mchip "+(v?"err":N?"warn":"ok"),a("mSave").disabled=t.saveBlocked}}function He(){return tn(),Ft.parse({...u,updatedAt:ge()})}a("save").addEventListener("click",()=>{Ie()});async function Ie(){try{const t=He(),e=await Lt(U("/api/forge/proposal"),{prefab:t,label:t.name,createdBy:"user"});ot(o("tool.common.savedFuture",{id:e.id.slice(0,8)}))}catch(t){ot(o("tool.common.saveFail",{msg:t.message}),!0)}}async function en(t){try{const e=await Lt(U("/api/forge/promote"),{proposalId:t});ot(e.promotedNote??o("tool.common.adoptedNote"))}catch(e){ot(o("tool.common.promoteFail",{msg:e.message}),!0)}}async function nn(t){try{await Lt(U("/api/forge/archive"),{proposalId:t}),ot(o("tool.common.archived"))}catch(e){ot(o("tool.common.archiveFail",{msg:e.message}),!0)}}async function de(){try{const[t,e]=await Promise.all([fetch(U("/api/forge/truth")).then(i=>i.json()),fetch(U("/api/forge/proposals")).then(i=>i.json())]);An(e.proposals??[]),Fn(t),a("live").innerHTML="<b>· live</b>",V.hidden=!1}catch{a("live").textContent=o("tool.common.devOff"),V.hidden=!0}}function An(t){Je(a("proposals"),t,{selectedId:_t,onView:e=>{On(e)},onPromote:e=>{en(e)},onArchive:e=>{nn(e)}})}function Fn(t){const e=t.prefabs??[];lo(a("truth"),e.map(i=>{let h=null;try{h=Hn(Ft.parse(i))}catch{}return{id:i.id,name:yo(i),meta:o("tool.forge.cardMeta",{w:i.size.w,d:i.size.d,a:i.meta.depthRange[0],b:i.meta.depthRange[1],wt:i.meta.weight})+(i.meta.tags.length?"・"+i.meta.tags.join("/"):""),thumb:h,onOpen:()=>{zt(Ft.parse(i),o("tool.common.openedTruth",{name:i.name}))},onDup:()=>{const v=Ft.parse({...i,id:`${i.id}-2`,name:o("tool.common.copyName",{name:i.name}),updatedAt:ge()});zt(v,o("tool.common.duplicated",{name:i.name}))},onCopyWorld:()=>{(async()=>{try{const v=await ro("/api/forge","prefab",Ft.parse(i),F.worlds(),Lt);v&&ot(o("tool.world.copied",{world:v}))}catch(v){ot(o("tool.world.copyFail",{msg:v.message}),!0)}})()}}}),o("tool.forge.truthEmpty"))}async function On(t){const e=await fetch(U(`/api/forge/proposal?id=${encodeURIComponent(t)}`)).then(h=>h.json());_t=t;const i=(e.prefabs??[])[e.prefabs.length-1];i&&zt(Ft.parse(i),o("tool.common.viewingFuture",{id:t.slice(0,8)})),de()}function Ae(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const Rn=F.events.on("forge",()=>{de()});let Fe=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function jn(t,e){Fe=[{brush:t,monType:e},...Fe.filter(i=>i.brush!==t||i.monType!==e)].slice(0,5)}function Bn(t){if(t.brush==="spawn")return t.monType?`<img src="${Ce(t.monType)}" alt="" />`:'<div class="glyph">？</div>';if(t.brush==="port")return`<img src="${Pe()}" alt="" />`;if(t.brush==="erase")return'<div class="glyph">🧽</div>';if(t.brush==="down")return'<div class="glyph">▼</div>';const e=fe(t.brush);return e.sample?`<img src="${Le(e.sample)}" alt="" />`:'<div class="glyph"></div>'}function qn(){const t=R.querySelector("#hrecent");if(t){t.innerHTML="";for(const e of Fe){const i=document.createElement("button");i.className="hswatch"+(e.brush===E&&(e.brush!=="spawn"||e.monType===L)?" on":""),i.innerHTML=`${Bn(e)}<span class="nm">${Ae(e.brush==="spawn"?e.monType?me(e.monType):o("tool.forge.auto"):rt(e.brush))}</span>`,i.addEventListener("click",()=>qt(e.brush,e.monType)),t.appendChild(i)}}}const ce=so(["sheetSide","sheetLoop"]);function on(){X.matches?(a("sheetSideBody").append(a("topbar"),a("side")),a("sheetLoopBody").append(a("loop"))):(ce.closeAll(),a("app").insertBefore(a("side"),a("stagewrap")),a("stagewrap").insertBefore(a("topbar"),a("mchips")),a("app").appendChild(a("loop"))),M()}a("mMenu").addEventListener("click",()=>ce.open("sheetSide")),a("mShelf").addEventListener("click",()=>ce.open("sheetLoop")),a("mSolv").addEventListener("click",()=>ce.open("sheetSide")),a("hMore").addEventListener("click",()=>ce.open("sheetSide")),a("mUndo").addEventListener("click",B),a("mRedo").addEventListener("click",Bt),a("mFit").addEventListener("click",()=>{I(),W()}),a("mReach").addEventListener("click",()=>{Q=!Q,a("mReach").classList.toggle("on",Q),be()}),a("mSave").addEventListener("click",()=>{he(),Ie()}),a("mShB").addEventListener("click",()=>Ct("brush")),a("mShR").addEventListener("click",()=>Ct("rect")),a("mShF").addEventListener("click",()=>Ct("fill")),F.own(X,"change",on);function Dn(){ct.position.set(H.x+C*Math.sin(m)*Math.cos(w),H.y+C*Math.sin(w),H.z+C*Math.cos(m)*Math.cos(w)),ct.lookAt(H),J.render(ht,ct)}let an=0,sn=!1;function ln(){sn||(an=requestAnimationFrame(ln),Dn())}window.cdForge={paint:(t,e,i)=>{var h;return i&&qt(i),Mt(Me(u,E,t,e,ft())),ut(),(h=u.cells[e])==null?void 0:h[t]},rect:(t,e,i,h,v)=>{v&&qt(v),Mt(De(u,E,t,e,i,h,ft())),ut()},fill:(t,e,i)=>{i&&qt(i),Mt(qe(u,E,t,e,ft())),ut()},erase:(t,e)=>{var i;return Mt(Me(u,"erase",t,e)),ut(),(i=u.cells[e])==null?void 0:i[t]},spawn:(t,e,i)=>{qt("spawn",i),Mt(Me(u,"spawn",t,e,ft())),ut()},tool:(t,e)=>qt(t,e),shapeMode:t=>Ct(t),hazard:(t,e)=>{it=t,e&&(wt=e),Ee()},undo:B,redo:Bt,resize:(t,e)=>{const i=mn(u,t,e);return Qt(),I(),T(),ut(),i},newPrefab:(t,e,i,h)=>zt(Be(t,e,i,h,ge())),prefab:()=>He(),draft:()=>u,solv:()=>vn(u),save:()=>Ie(),promote:t=>en(t),archive:t=>nn(t),refresh:()=>de(),view:(t,e,i)=>{m=t,w=e,i!=null&&(C=i)},state:()=>({brush:E,shape:A,spawnType:L??null,hazardElement:it,canUndo:S.canUndo(),canRedo:S.canRedo(),guide:a("guide").style.display!=="none"}),draws:()=>J.info.render.calls,screenOf:(t,e)=>{var N,D;const i=(((D=(N=u.cells[e])==null?void 0:N[t])==null?void 0:D.height)??0)*Se,h=new oe(t,i,e).project(ct),v=J.domElement.getBoundingClientRect();return{cx:v.left+(h.x+1)/2*v.width,cy:v.top+(1-h.y)/2*v.height}},cellAt:(t,e)=>mt(t,e)};async function Gn(t){try{const i=((await fetch(U("/api/forge/truth")).then(h=>h.json())).prefabs??[]).find(h=>h.id===t);i?zt(Ft.parse(i),o("tool.common.openedTruth",{name:i.name})):ot(o("tool.studio.deepMiss",{id:t}),!0)}catch{}}const Wn=Xe(()=>{Qe(),Ee(),re(),te(),p(q),Pt(),de()}),Oe=Et();Qe(),Ee(),S.reset(u),Qt(),Oe||I(),re(),Yt(),te(),T(),on(),M(),Gt(!Oe),Oe&&ot(o("tool.common.restored")),de(),ln();try{const t=sessionStorage.getItem("cdForgeModeM4");(t==="town"||t==="pin")&&at(t)}catch{}return{applyParams(t){const e=t.get("tab")??t.get("mode");e==="town"?at("town"):e==="pin"?at("pin"):e==="room"&&at("room");const i=t.get("id");i&&(at("room"),Gn(i))},dispose(){sn=!0,cancelAnimationFrame(an),clearTimeout(Kt),Rn(),Wn(),z.dispose(),x.dispose(),W();try{J.dispose(),J.forceContextLoss(),J.domElement.remove()}catch{}try{$t.dispose(),$t.forceContextLoss()}catch{}delete window.cdForge}}}};export{Bo as forgePanel};
