import{W as ln,A as qn,S as rn,P as dn,E as cn,z as Dn,C as pn,H as Gn,D as Ae,r as Wn,l as oe,M as Kt,B as fe,t as _n,F as $e,V as ae,J as Vn,R as Un,K as Jn,G as he,O as Kn,w as Yn,m as Xn,u as Zn}from"./render-voxel-BJOVnvoh.js";import{P as Ot,e as Oe}from"./monster-CFZ1vIDi.js";import{r as un,E as Qn,c as fn,a as Le,f as Re,b as je,d as me,B as hn,e as to}from"./forge-edit-CffY6cQY.js";import{a as eo}from"./touch-input-D1HYJrcI.js";import{r as _e,i as no,b as ve,a as oo}from"./tool-shelf-ByNVi0cI.js";import{M as Be}from"./dungeon-BPeUFN39.js";import{t as a,c as Ve,g as Ue,D as Mn,u as ge,v as ao}from"./world-ui-Drw-P3-v.js";import{o as Je}from"./studio-Ce1A7dWJ.js";import{a as io}from"./playtest-core-ElwkpQS5.js";import{d as mn,t as qe,T as ie,b as De,l as vn,v as so,s as gn,c as lo,e as Ge,f as Ee,h as Se,P as bn,i as xn,j as wn,k as be}from"./tables-CCFYefBy.js";import{T as zn}from"./tables-doc-DTmThUeo.js";import"./dungeon-types-JT-53Zyi.js";import"./voxmodel-Ch3SrahU.js";import"./gamepack-CXru2l9o.js";import"./creator-auth-C2cecs39.js";import"./tuner-core-4J-MDv4y.js";const ro=`<!-- ============================================================
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
`,w=A=>A.replace(/[&<>"]/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[R]),yn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),co=A=>A===Mn?"comduct":A.replace("/","--"),se={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},po={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},kn={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},$n={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},uo=["human","elf","dwarf","gnome","halffoot"],fo=["talker","guide","shop","equip","craft","heal","recruit"];function ho(A,R){const{wapi:G,postJson:Et}=R.api,s=o=>A.querySelector(`#${o}`);function z(o,e=!1){const l=s("tmsg");l.textContent=o,l.style.color=e?"#ffd166":"#7fd17f",window.setTimeout(()=>{l.textContent===o&&(l.textContent="")},5e3)}let b=mn(),j="select",q="shop",Z=3,et=2,ct="plain",d=null,$=-1,I=null,X=null,nt=null,W=!1,yt="";const rt="cdForgeTownM4";function S(){try{sessionStorage.setItem(rt,JSON.stringify({v:1,world:R.world(),plan:b,tool:j,dirty:W,stageI:$,label:s("tlabel").value}))}catch{}}function Yt(){try{const o=sessionStorage.getItem(rt);if(!o)return!1;const e=JSON.parse(o);return e.v!==1||e.world!==R.world()?!1:(b=ie.parse(e.plan),j=e.tool??"select",W=!!e.dirty,$=typeof e.stageI=="number"?e.stageI:-1,e.label&&(s("tlabel").value=e.label),!0)}catch{return!1}}function L(){W=!0}const Vt=[],Ht=()=>{var o;return $>=0?((o=b.stages)==null?void 0:o[$])??null:null};function N(){const o=Ht();return $>=0&&!o&&($=-1),o?{buildings:o.buildings,decos:o.decos,holes:Vt,npcs:o.npcs}:{buildings:b.buildings,decos:b.decos,holes:b.holes,npcs:b.npcs}}function Q(){if($<0)return[];const o=(b.stages??[]).filter((e,l)=>l!==$);return[{buildings:b.buildings,decos:b.decos,holes:b.holes,npcs:b.npcs},...o.map(e=>({buildings:e.buildings,decos:e.decos,holes:Vt,npcs:e.npcs}))]}const gt=()=>[...b.npcs,...(b.stages??[]).flatMap(o=>o.npcs)];function It(o,e){b=o,e!=null&&e.markDirty&&L(),B(),S()}async function zt(){var o,e,l,p;try{const y=await fetch(G("/api/tables/truth"));if(y.ok){const r=(l=(e=(o=(await y.json()).docs)==null?void 0:o[0])==null?void 0:e.tables)==null?void 0:l.town;if(r!==void 0)return{p:ie.parse(r),src:"truth"}}}catch{}try{const y=await fetch(G(`/packs/${co(R.world())}.json`));if(y.ok){const r=(p=(await y.json()).tables)==null?void 0:p.town;if(r!==void 0)return{p:ie.parse(r),src:"pack"}}}catch{}return null}async function Pt(o=!1){if(W&&!o)return;let e=null;try{e=await zt()}catch(l){z(a("tool.town.zodFail",{msg:l.message}),!0);return}e?(yt=a("tool.town.truthMeta",{src:e.src,b:e.p.buildings.length,n:e.p.npcs.length,d:Object.keys(e.p.dialogs).length}),W=!1,d=null,X=null,$=-1,It(e.p)):(yt=a("tool.town.truthNew"),W=!1,It(mn())),Lt()}const Ft=s("tgrid");function it(o,e,l,p){let y="tc",r="",g=`${e},${l}`,x=!1,P=!1;o.decos.some(f=>f.x===e&&f.y===l&&f.kind==="road")&&(y+=" road",P=!0);const ft=o.buildings.findIndex(f=>e>=f.x&&e<f.x+f.w&&l>=f.y&&l<f.y+f.d),at=[...o.decos].reverse().find(f=>f.x===e&&f.y===l&&f.kind!=="road"),ht=o.holes.findIndex(f=>f.x===e&&f.y===l),Mt=o.npcs.find(f=>f.x===e&&f.y===l);if(ft>=0){const f=o.buildings[ft];return y+=" bld",r=e===f.x+(f.w>>1)&&l===f.y+(f.d>>1)?se[f.facility]:"",g=`${a(`fac.${f.facility}`)} (${f.facility})`,x=p&&(d==null?void 0:d.kind)==="building"&&d.i===ft,{cls:y+(x?" sel":""),html:`<span style="position:absolute;inset:0;background:${po[f.facility]};border-radius:3px"></span><span style="position:relative">${r}</span>`,title:g,selHit:x,found:!0}}if(at){r=kn[at.kind]??"",g=a(`tool.town.tool.${at.kind==="road"?"road":at.kind}`);const f=o.decos.lastIndexOf(at);x=p&&(d==null?void 0:d.kind)==="deco"&&d.i===f,P=!0}if(ht>=0){const f=o.holes[ht];r=`<b style="color:${$n[f.element??"plain"]}">▼</b>`,g=f.element?a(`elem.${f.element}`):a("tool.town.holePlain"),x=p&&(d==null?void 0:d.kind)==="hole"&&d.i===ht,P=!0}return o.buildings.find(f=>f.door.x===e&&f.door.y===l)&&(r+='<span class="door">🚪</span>',P=!0),Mt&&(r=`🧍<span class="npcdot" style="background:${Mt.color}"></span>`,g=`${Mt.name}（${Mt.id}）`,x=p&&(d==null?void 0:d.kind)==="npc"&&d.id===Mt.id,P=!0),{cls:y+(x?" sel":""),html:r,title:g,selHit:x,found:P}}function Rt(o,e){const l=it(N(),o,e,!0);if(l.found||$<0)return l;for(const p of Q()){const y=it(p,o,e,!1);if(y.found)return{cls:y.cls+" ghost",html:y.html,title:y.title,selHit:!1}}return l}function st(){let o="";for(let e=0;e<Ee;e++)for(let l=0;l<Se;l++){const p=Rt(l,e);o+=`<div class="${p.cls}" data-x="${l}" data-y="${e}" title="${w(p.title)}">${p.html}</div>`}Ft.innerHTML=o}Ft.addEventListener("click",o=>{const e=o.target.closest(".tc");e&&v(Number(e.dataset.x),Number(e.dataset.y))}),Ft.addEventListener("pointermove",o=>{const e=o.target.closest(".tc");s("thover").textContent=e?`(${e.dataset.x},${e.dataset.y}) ${e.title}`:"—"});const u=()=>{for(let o=1;;o++){const e=`npc-${o}`;if(!gt().some(l=>l.id===e))return e}};function c(o,e){const l=N(),p=l.npcs.find(g=>g.x===o&&g.y===e);if(p)return{kind:"npc",id:p.id};const y=l.buildings.findIndex(g=>o>=g.x&&o<g.x+g.w&&e>=g.y&&e<g.y+g.d);if(y>=0)return{kind:"building",i:y};const r=l.holes.findIndex(g=>g.x===o&&g.y===e);if(r>=0)return{kind:"hole",i:r};for(let g=l.decos.length-1;g>=0;g--)if(l.decos[g].x===o&&l.decos[g].y===e)return{kind:"deco",i:g};return null}function v(o,e){const l=N();if(I!=null){const r=l.buildings[I];r&&(r.door={x:o,y:e},z(a("tool.town.doorPlaced"))),I=null,L(),B(),S();return}if(j==="select"){d=c(o,e),B();return}if(j==="erase"){const r=c(o,e);if((r==null?void 0:r.kind)==="npc"){const g=l.npcs.findIndex(x=>x.id===r.id);g>=0&&l.npcs.splice(g,1)}else if((r==null?void 0:r.kind)==="building")l.buildings.splice(r.i,1);else if((r==null?void 0:r.kind)==="hole")l.holes.splice(r.i,1);else if((r==null?void 0:r.kind)==="deco")l.decos.splice(r.i,1);else return;d=null,z(a("tool.town.erased")),L(),B(),S();return}if(j==="npc"){const r=l.npcs.find(x=>x.x===o&&x.y===e);if(r){d={kind:"npc",id:r.id},B();return}if(l.npcs.length>=16){z(a("tool.town.npcFull"),!0);return}const g=u();l.npcs.push({id:g,name:`NPC${gt().length+1}`,x:o,y:e,race:"human",color:"#e0c060",role:"talker",facing:"s"}),d={kind:"npc",id:g},z(a("tool.town.npcAdded",{name:g})),L(),B(),S();return}if(j==="building"){if(l.buildings.length>=8){z(a("tool.town.bldFull"),!0);return}const r=Math.min(o,Se-Z),g=Math.min(e,Ee-et),x={x:Math.min(r+(Z>>1),Se-1),y:Math.min(g+et,Ee-1)};l.buildings.push({x:r,y:g,w:Z,d:et,facility:q,door:x}),d={kind:"building",i:l.buildings.length-1},z(a("tool.town.placed",{what:a(`fac.${q}`)})),L(),B(),S();return}if(j==="hole"){if($>=0){z(a("tool.town.stageNoHole"),!0);return}const r=ct==="plain"?null:ct,g=l.holes.findIndex(x=>x.x===o&&x.y===e);if(g>=0)l.holes[g].element=r;else if(l.holes.length>=6){z(a("tool.town.holeFull"),!0);return}else l.holes.push({x:o,y:e,element:r});z(a("tool.town.placed",{what:"▼"})),L(),B(),S();return}const p=j.slice(5),y=l.decos.findIndex(r=>r.x===o&&r.y===e&&r.kind===p);y>=0?l.decos.splice(y,1):l.decos.push({x:o,y:e,kind:p}),L(),B(),S()}const k=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],U=o=>a(`tool.town.tool.${o.startsWith("deco-")?o.slice(5):o}`);function T(){const o=s("tpal");o.innerHTML="";for(const e of k){const l=document.createElement("button");l.className=j===e?"on":"",l.textContent=U(e),l.addEventListener("click",()=>{j=e,I=null,T(),H(),S()}),o.appendChild(l)}}function H(){const o=s("tpalopts");if(o.innerHTML="",o.style.display=j==="building"||j==="hole"?"flex":"none",j==="building"){const e=document.createElement("select");e.innerHTML=Object.keys(se).map(y=>`<option value="${y}"${y===q?" selected":""}>${se[y]} ${w(a(`fac.${y}`))}</option>`).join(""),e.addEventListener("change",()=>{q=e.value});const l=(y,r,g)=>{const x=document.createElement("input");return x.type="number",x.min="1",x.max=String(g),x.value=String(y),x.className="num",x.style.width="3em",x.addEventListener("change",()=>r(Math.max(1,Math.min(g,Number(x.value)||1)))),x},p=document.createElement("span");p.textContent=a("tool.town.sizeLabel"),o.append(e,p,l(Z,y=>{Z=y},8),document.createTextNode("×"),l(et,y=>{et=y},6))}else if(j==="hole"){const e=document.createElement("span");e.textContent=a("tool.town.holeElem"),o.appendChild(e);for(const l of["fire","ice","earth","poison","holy","plain"]){const p=document.createElement("button");p.className="chip"+(l===ct?" on":""),p.style.background=$n[l],p.title=l==="plain"?a("tool.town.holePlain"):a(`elem.${l}`),p.addEventListener("click",()=>{ct=l,H()}),o.appendChild(p)}}}const E=s("tdetail");function Y(){if(I=I,!d){E.innerHTML=`<div class="sub">${w(a("tool.town.detailIdle"))}</div>`;return}if(d.kind==="npc")return F(d.id);if(d.kind==="building")return bt(d.i);if(d.kind==="hole"){const e=N().holes[d.i];if(!e)return d=null,Y();E.innerHTML=`<div><b>▼ ${w(e.element?a(`elem.${e.element}`):a("tool.town.holePlain"))}</b>（${e.x},${e.y}）</div>
        <div class="row"><button id="tdel" type="button">${w(a("tool.town.delete"))}</button></div>`,s("tdel").addEventListener("click",()=>{N().holes.splice(d.i,1),d=null,L(),B(),S()});return}const o=N().decos[d.i];if(!o)return d=null,Y();E.innerHTML=`<div><b>${kn[o.kind]||"·"} ${w(a(`tool.town.tool.${o.kind}`))}</b>（${o.x},${o.y}）</div>
      <div class="row"><button id="tdel" type="button">${w(a("tool.town.delete"))}</button></div>`,s("tdel").addEventListener("click",()=>{N().decos.splice(d.i,1),d=null,L(),B(),S()})}function bt(o){const e=N().buildings[o];if(!e)return d=null,Y();E.innerHTML=`
      <div><b>${se[e.facility]} ${w(a(`fac.${e.facility}`))}</b>（${e.x},${e.y}・${e.w}×${e.d}）</div>
      <div class="kv"><span class="lbl">${w(a("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(se).map(l=>`<option value="${l}"${e.facility===l?" selected":""}>${se[l]} ${w(a(`fac.${l}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${w(a("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${e.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${e.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${I===o?' class="on"':""}>${w(a("tool.town.doorSet"))}</button></div>
      <div class="sub">${w(a("tool.town.doorHint"))}（🚪 ${e.door.x},${e.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${w(a("tool.town.delete"))}</button></div>`,s("tbfac").addEventListener("change",()=>{e.facility=s("tbfac").value,L(),B(),S()}),s("tbw").addEventListener("change",()=>{e.w=Math.max(1,Math.min(8,Number(s("tbw").value)||e.w)),e.x=Math.min(e.x,Se-e.w),L(),B(),S()}),s("tbd").addEventListener("change",()=>{e.d=Math.max(1,Math.min(6,Number(s("tbd").value)||e.d)),e.y=Math.min(e.y,Ee-e.d),L(),B(),S()}),s("tbdoor").addEventListener("click",()=>{I=I===o?null:o,Y()}),s("tdel").addEventListener("click",()=>{N().buildings.splice(o,1),d=null,I=null,L(),B(),S()})}function F(o){const e=N().npcs.find(p=>p.id===o);if(!e)return d=null,Y();const l=(e.lines??[]).map(p=>p.text).join(`
`);E.innerHTML=`
      <div><b>🧍 ${w(e.name)}</b> <span class="sub">${w(e.id)}（${e.x},${e.y}）</span></div>
      <div class="kv"><span class="lbl">${w(a("tool.town.npcName"))}</span><input id="tnname" type="text" value="${w(e.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${w(a("tool.town.race"))}</span><select id="tnrace">
        ${uo.map(p=>`<option value="${p}"${e.race===p?" selected":""}>${w(a(`tool.town.race.${p}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${w(e.color)}" title="${w(a("tool.town.color"))}" /></div>
      <div class="kv"><span class="lbl">${w(a("tool.town.role"))}</span><select id="tnrole">
        ${fo.map(p=>`<option value="${p}"${e.role===p?" selected":""}>${w(p==="talker"?a("tool.town.role.talker"):p==="guide"?a("tool.town.role.guide"):a(`fac.${p}`))}</option>`).join("")}
      </select>
      <span class="lbl">${w(a("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(p=>`<option value="${p}"${(e.facing??"s")===p?" selected":""}>${p}</option>`).join("")}
      </select></div>
      <div class="sub">${w(a("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${w(l)}</textarea>
      <div class="row"><button id="tndlg" type="button">${w(a("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${e.dialog?w(e.dialog):w(a("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${w(a("tool.town.delete"))}</button></div>`,s("tnname").addEventListener("change",()=>{e.name=s("tnname").value.trim()||e.name,L(),B(),S()}),s("tnrace").addEventListener("change",()=>{e.race=s("tnrace").value,L(),S()}),s("tncolor").addEventListener("change",()=>{e.color=s("tncolor").value,L(),B(),S()}),s("tnrole").addEventListener("change",()=>{e.role=s("tnrole").value,L(),S()}),s("tnface").addEventListener("change",()=>{e.facing=s("tnface").value,L(),S()}),s("tnlines").addEventListener("change",()=>{const p=s("tnlines").value.split(`
`).map(r=>r.trim()).filter(Boolean).slice(0,8),y=e.lines??[];e.lines=p.length?p.map((r,g)=>{var x,P;return{text:r,...((x=y[g])==null?void 0:x.text)===r&&((P=y[g])!=null&&P.texts)?{texts:y[g].texts}:{}}}):void 0,L(),V(),S()}),s("tndlg").addEventListener("click",()=>{tt(e)}),s("tdel").addEventListener("click",()=>{const p=N().npcs,y=p.findIndex(r=>r.id===o);y>=0&&p.splice(y,1),d=null,X&&!gt().some(r=>r.dialog===X)&&_(),L(),B(),S()})}function tt(o){if(!o.dialog){const e=`dlg-${o.id}`;o.dialog=e,b.dialogs[e]||(b.dialogs[e]={id:e,nodes:[{id:"root",say:"……"}]}),L()}X=o.dialog,nt=null,kt=null,pt=[],B(),S()}function _(){X=null,nt=null,kt=null,pt=[],dt()}s("tdlgclose").addEventListener("click",_);const jt=()=>X?b.dialogs[X]??null:null,Me=o=>{for(let e=1;;e++){const l=`n${e}`;if(!o.nodes.some(p=>p.id===l))return l}},le=o=>o.kind==="setFlag"?`⚑${o.flag}`:o.kind==="unlock"?`🔓${o.gate}`:o.kind==="giveItem"?`🎁${o.item}`:`💰${o.amount}G`,Bt=["setFlag","unlock","giveItem","giveGold"];function we(o,e){const l=(e??[]).map((y,r)=>`<span class="fxchip">${w(le(y))}<button type="button" data-act="fxdel" data-site="${o}" data-fi="${r}">✕</button></span>`).join(""),p=(e??[]).length<4?`<select data-act="fxkind" data-site="${o}">${Bt.map(y=>`<option value="${y}">${w(a(`tool.town.fx.${y}`))}</option>`).join("")}</select>
         <input type="text" data-act="fxval" data-site="${o}" style="width:5.5em" placeholder="${w(a("tool.town.fxValPh"))}" />
         <button type="button" data-act="fxadd" data-site="${o}">${w(a("tool.town.fxAdd"))}</button>`:"";return`<div class="chrow sub"><span>${w(a("tool.town.fxLabel"))}</span>${l}${p}</div>`}const qt=/^[a-z0-9][a-z0-9-]*$/;function Dt(o,e){const l=e.trim();if(o==="giveGold"){const p=Number(l);return Number.isInteger(p)&&p>=1&&p<=99999?{kind:o,amount:p}:null}return qt.test(l)?o==="setFlag"?{kind:o,flag:l}:o==="unlock"?{kind:o,gate:l}:{kind:o,item:l}:null}function dt(){const o=s("tdlg"),e=jt();if(o.classList.toggle("on",!!e),!e)return;s("tdlghead").textContent=a("tool.town.dlgHead",{id:e.id});const l=s("tdlgnodes");l.innerHTML="",e.nodes.forEach((p,y)=>{var at,ht,Mt,xt;const r=document.createElement("div");r.className="node";const g=f=>`<option value=""${f===null?" selected":""}>${w(a("tool.town.choiceEnd"))}</option>`+e.nodes.map(M=>`<option value="${w(M.id)}"${f===M.id?" selected":""}>→ ${w(M.id)}</option>`).join("");r.innerHTML=`
        <div class="nid">#${w(p.id)}${y===0?" "+w(a("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${w(p.say)}</textarea>
        <div class="chrow sub"><span>${w(a("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${w(((at=p.when)==null?void 0:at.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${w(((ht=p.when)==null?void 0:ht.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${w(((Mt=p.when)==null?void 0:Mt.item)??"")}" /></div>
        ${we("n",p.effects)}
        ${(p.choices??[]).map((f,M)=>{var K,Nt,mt;return`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${M}" value="${w(f.text)}" />
          <select data-act="cgoto" data-ci="${M}">${g(f.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${M}">✕</button></div>
        <div class="chrow sub"><span>${w(a("tool.town.choiceWhen"))}</span>
          <input type="text" data-act="cwflag" data-ci="${M}" style="width:5em" placeholder="flag" value="${w(((K=f.when)==null?void 0:K.flag)??"")}" />
          <input type="text" data-act="cwnot" data-ci="${M}" style="width:5em" placeholder="notFlag" value="${w(((Nt=f.when)==null?void 0:Nt.notFlag)??"")}" />
          <input type="text" data-act="cwitem" data-ci="${M}" style="width:5em" placeholder="item" value="${w(((mt=f.when)==null?void 0:mt.item)??"")}" /></div>
        ${we(`c${M}`,f.effects)}`}).join("")}
        ${(p.choices??[]).length<4?`<button type="button" data-act="caddc">${w(a("tool.town.addChoice"))}</button>`:""}`;const x=()=>{L(),V(),S()};r.querySelector('[data-act="say"]').addEventListener("change",f=>{p.say=f.target.value||p.say,x()});const P=(f,M)=>{const K={...p.when??{}};M.trim()?K[f]=M.trim():delete K[f],p.when=Object.keys(K).length?K:void 0,x()};r.querySelector('[data-act="wflag"]').addEventListener("change",f=>P("flag",f.target.value)),r.querySelector('[data-act="wnot"]').addEventListener("change",f=>P("notFlag",f.target.value)),r.querySelector('[data-act="witem"]').addEventListener("change",f=>P("item",f.target.value)),r.querySelector('[data-act="delnode"]').addEventListener("click",()=>{e.nodes.splice(y,1),e.nodes.length||e.nodes.push({id:"root",say:"……"});for(const f of e.nodes)for(const M of f.choices??[])M.goto===p.id&&(M.goto=null);L(),dt(),V(),S()});for(const f of Array.from(r.querySelectorAll('[data-act="ctext"]')))f.addEventListener("change",()=>{const M=p.choices[Number(f.dataset.ci)];M.text=f.value||M.text,x()});for(const f of Array.from(r.querySelectorAll('[data-act="cgoto"]')))f.addEventListener("change",()=>{p.choices[Number(f.dataset.ci)].goto=f.value===""?null:f.value,x()});for(const f of Array.from(r.querySelectorAll('[data-act="cdel"]')))f.addEventListener("click",()=>{p.choices.splice(Number(f.dataset.ci),1),p.choices.length||(p.choices=void 0),L(),dt(),V(),S()});const J=(f,M,K)=>{const Nt=p.choices[f],mt={...Nt.when??{}};K.trim()?mt[M]=K.trim():delete mt[M],Nt.when=Object.keys(mt).length?mt:void 0,x()};for(const[f,M]of[["cwflag","flag"],["cwnot","notFlag"],["cwitem","item"]])for(const K of Array.from(r.querySelectorAll(`[data-act="${f}"]`)))K.addEventListener("change",()=>J(Number(K.dataset.ci),M,K.value));const ft=f=>f==="n"?{get:()=>p.effects,set:M=>{p.effects=M}}:(()=>{const M=p.choices[Number(f.slice(1))];return{get:()=>M.effects,set:K=>{M.effects=K}}})();for(const f of Array.from(r.querySelectorAll('[data-act="fxdel"]')))f.addEventListener("click",()=>{const M=ft(f.dataset.site),K=[...M.get()??[]];K.splice(Number(f.dataset.fi),1),M.set(K.length?K:void 0),L(),dt(),V(),S()});for(const f of Array.from(r.querySelectorAll('[data-act="fxadd"]')))f.addEventListener("click",()=>{const M=f.dataset.site,K=r.querySelector(`[data-act="fxkind"][data-site="${M}"]`),Nt=r.querySelector(`[data-act="fxval"][data-site="${M}"]`),mt=Dt(K.value,Nt.value);if(!mt){z(a("tool.town.fxValPh"),!0);return}const vt=ft(M);vt.set([...vt.get()??[],mt]),L(),dt(),V(),S()});(xt=r.querySelector('[data-act="caddc"]'))==null||xt.addEventListener("click",()=>{p.choices=[...p.choices??[],{text:"…",goto:null}],L(),dt(),S()}),l.appendChild(r)}),Ct()}s("tdlgaddnode").addEventListener("click",()=>{const o=jt();!o||o.nodes.length>=32||(o.nodes.push({id:Me(o),say:"……"}),L(),dt(),S())});const Ut=()=>({flags:new Set(s("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(s("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});let kt=null,pt=[];const Xt=()=>kt?{flags:kt.flags,items:kt.items}:Ut();function Ct(){const o=s("tpv"),e=jt();if(!e){o.innerHTML="";return}const l=Ue();let p=`<div class="row"><button type="button" data-act="pvstart">${w(a("tool.town.pvRestart"))}</button></div>`;const y=pt.length?`<div class="pvend">${w(a("tool.town.pvFx"))} ${pt.map(r=>`<span class="fxchip">${w(r.kind==="giveGold"?a("tool.town.pvGold",{n:r.amount}):le(r))}</span>`).join("")}</div>`:"";if(nt==="end")p+=`<div class="pvsay">…</div>${y}<div class="pvend">${w(a("tool.town.pvEnd"))}</div>`;else if(nt!==null){const r=De(e,nt);if(!r)return nt=null,Ct();p+=`<div class="pvsay">🗨 ${w(vn(r.say,r.says,l))}</div>${y}`;const g=so(r,Xt());g.length?p+=g.map(x=>`<button type="button" data-act="pvc" data-ci="${(r.choices??[]).indexOf(x)}">${w(vn(x.text,x.texts,l))}</button>`).join(""):p+=`<div class="pvend">${w(a("tool.town.pvEnd"))}</div>`}o.innerHTML=p,o.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{kt=gn(Ut()),pt=[];const r=lo(e,Xt());nt=r?r.id:"end",r&&pt.push(...Ge(r.effects,kt)),Ct()});for(const r of Array.from(o.querySelectorAll('[data-act="pvc"]')))r.addEventListener("click",()=>{var J;const g=nt!==null&&nt!=="end"?De(e,nt):null,x=(J=g==null?void 0:g.choices)==null?void 0:J[Number(r.dataset.ci)];if(!x)return;kt||(kt=gn(Ut())),pt.push(...Ge(x.effects,kt));const P=x.goto!==null?De(e,x.goto):null;nt=P?P.id:"end",P&&pt.push(...Ge(P.effects,kt)),Ct()})}s("tpvflags").addEventListener("change",Ct),s("tpvitems").addEventListener("change",Ct);function V(){const o=s("tlint"),e=qe(b);o.innerHTML=e.length?e.map(l=>l.level==="error"?`<div class="warn" style="color:#ff8a80">⛔ ${w(a(l.key,l.params))}</div>`:`<div class="warn">⚠ ${w(a(l.key,l.params))}</div>`).join(""):`<div class="ok">${w(a("tool.town.lint.ok"))}</div>`}async function $t(){try{const o=await(await fetch(G("/api/tables/proposals"))).json();_e(s("tprops"),o.proposals??[],{tag:()=>a("tool.town.capTag"),onView:e=>{ut(e)},onPromote:e=>{At(e)},onArchive:e=>{Zt(e)}}),s("tplive").textContent="· live",s("tlive").textContent="· live"}catch{s("tprops").innerHTML=`<div class="live">${w(a("tool.town.noApi"))}</div>`,s("tplive").textContent=a("tool.common.devOff"),s("tlive").textContent=a("tool.common.devOff")}Lt()}function Lt(){var e;const o=s("ttruth");o.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${w(yt)}</span>
      <div class="row"><button type="button" data-act="truth-load">${w(a("tool.town.loadTruth"))}</button></div></div>`,(e=o.querySelector('[data-act="truth-load"]'))==null||e.addEventListener("click",()=>{W=!1,Pt(!0).then(()=>z(a("tool.town.loaded")))})}async function ut(o){var e,l;try{const p=await(await fetch(G(`/api/tables/proposal?id=${encodeURIComponent(o)}`))).json(),y=(l=(e=p.docs)==null?void 0:e[0])==null?void 0:l.tables.town;if(y===void 0)throw new Error(a("tool.town.propNoTown"));const r=ie.parse(y);d=null,X=null,W=!0,$=-1,It(r),z(a("tool.town.loadedProp",{name:p.docs[0].name}))}catch(p){z(p.message,!0)}}async function At(o){try{await Et(G("/api/tables/promote"),{proposalId:o}),z(a("tool.town.promoted")),W=!1,$t(),Pt(!0)}catch(e){z(e.message,!0)}}async function Zt(o){try{await Et(G("/api/tables/archive"),{proposalId:o}),z(a("tool.town.archived")),$t()}catch(e){z(e.message,!0)}}async function Gt(){var r,g;let o;try{b.name=s("tname").value.trim()||b.name,o=ie.parse(b)}catch(x){z(a("tool.town.zodFail",{msg:x.message.slice(0,200)}),!0);return}const e=qe(o).filter(x=>x.level==="error");if(e.length){z(a("tool.town.errBlock",{n:e.length}),!0),V();return}const l=s("tlabel").value.trim()||o.name;let p={};try{const x=await fetch(G("/api/tables/truth"));x.ok&&(p=((g=(r=(await x.json()).docs)==null?void 0:r[0])==null?void 0:g.tables)??{})}catch{}const y={formatVersion:zn,id:"tables",name:l,tables:{...p,town:o},createdAt:yn(),updatedAt:yn()};try{await Et(G("/api/tables/proposal"),{tables:y,label:l,createdBy:"user"}),z(a("tool.town.saved",{name:l})),$t()}catch(x){z(a("tool.town.saveFail",{msg:x.message}),!0)}}s("tsave").addEventListener("click",()=>{Gt()}),s("tload").addEventListener("click",()=>{W=!1,Pt(!0).then(()=>z(a("tool.town.loaded")))}),s("tlabel").addEventListener("input",S),s("tname").addEventListener("change",()=>{b.name=s("tname").value.trim()||b.name,L(),S()});function St(o){$=o,d=null,I=null,B(),S()}function ot(){var y;const o=s("tstages");o.innerHTML="";const e=(r,g,x,P="")=>{const J=document.createElement("button");return J.type="button",J.textContent=r,J.className=g?"on":"",P&&(J.title=P),J.addEventListener("click",x),o.appendChild(J),J},l=document.createElement("span");l.className="sub",l.textContent=a("tool.town.stagesLabel"),o.appendChild(l),e(a("tool.town.stageBase"),$<0,()=>St(-1)),(b.stages??[]).forEach((r,g)=>e(`🏗 ${r.id} ⚑${r.when}`,$===g,()=>St(g),a("tool.town.stageChipTitle",{when:r.when}))),(((y=b.stages)==null?void 0:y.length)??0)<4&&e(a("tool.town.stageAdd"),!1,()=>{var x,P;const r=(((x=b.stages)==null?void 0:x.length)??0)+1;let g=`stage-${r}`;for(let J=r;(P=b.stages)!=null&&P.some(ft=>ft.id===g);J++)g=`stage-${J+1}`;b.stages=[...b.stages??[],{id:g,when:`${g}-open`,buildings:[],decos:[],npcs:[]}],L(),St(b.stages.length-1)});const p=Ht();if(p){const r=document.createElement("span");r.className="sub",r.style.display="inline-flex",r.style.gap="4px",r.style.alignItems="center";const g=(at,ht,Mt)=>{const xt=document.createElement("input");return xt.type="text",xt.value=at,xt.placeholder=ht,xt.addEventListener("change",()=>{const f=xt.value.trim();if(!/^[a-z0-9][a-z0-9-]*$/.test(f)){z(a("tool.town.stageIdBad"),!0),xt.value=at;return}Mt(f),L(),B(),S()}),r.appendChild(xt),xt},x=document.createElement("span");x.textContent="id",r.appendChild(x),g(p.id,"stage-1",at=>{p.id=at});const P=document.createElement("span");P.textContent=a("tool.town.stageWhen"),r.appendChild(P),g(p.when,"flag",at=>{p.when=at});const J=document.createElement("button");J.type="button",J.textContent=a("tool.town.stageDel"),J.addEventListener("click",()=>{b.stages=(b.stages??[]).filter((at,ht)=>ht!==$),b.stages.length||(b.stages=void 0),L(),St(-1)}),r.appendChild(J),o.appendChild(r);const ft=document.createElement("span");ft.className="sub",ft.textContent=a("tool.town.stageHint"),o.appendChild(ft)}}function B(){s("tname").value=b.name,ot(),st(),T(),H(),Y(),dt(),V()}const re=R.events.on("tables",()=>{$t(),Pt()}),de=Je(()=>{Ve(A.querySelector("#townapp")),B(),$t()});return window.cdForgeTown={plan:()=>b,setPlan:o=>It(ie.parse(o),{markDirty:!0}),tool:o=>{j=o,T(),H()},click:(o,e)=>v(o,e),select:(o,e)=>(d=c(o,e),B(),d),openDialog:o=>{const e=b.npcs.find(l=>l.id===o);return e&&tt(e),(e==null?void 0:e.dialog)??null},lint:()=>qe(b),stage:o=>(St(o),$),stages:()=>b.stages??[],save:()=>Gt(),promote:o=>At(o),refresh:()=>$t(),reload:(o=!0)=>Pt(o),dirty:()=>W},Yt()?(B(),$t()):Pt(!0).then(()=>{$t()}),{setVisible(o){s("townapp").classList.toggle("on",o),o&&B()},dispose(){re(),de(),S(),delete window.cdForgeTown}}}const D=A=>A.replace(/[&<>"]/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[R]),Ln=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),En=A=>A===Mn?"comduct":A.replace("/","--"),Sn=["fire","ice","earth","poison","holy"],We={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"},mo=24;function vo(A,R){const{wapi:G,postJson:Et}=R.api,s=u=>A.querySelector(`#${u}`);function z(u,c=!1){const v=s("pmsg");v.textContent=u,v.style.color=c?"#ffd166":"#7fd17f",window.setTimeout(()=>{v.textContent===u&&(v.textContent="")},5e3)}let b=[],j=[],q=-1,Z="any",et=!1,ct="";const d="cdForgePinM3";function $(){try{sessionStorage.setItem(d,JSON.stringify({v:1,world:R.world(),pins:b,dirty:et,label:s("plabel").value}))}catch{}}function I(){try{const u=sessionStorage.getItem(d);if(!u)return!1;const c=JSON.parse(u);return c.v!==1||c.world!==R.world()||!Array.isArray(c.pins)?!1:(b=c.pins,et=!!c.dirty,c.label&&(s("plabel").value=c.label),!0)}catch{return!1}}function X(){et=!0}async function nt(){try{const u=await fetch(G("/api/forge/truth"));if(u.ok){j=((await u.json()).prefabs??[]).flatMap(v=>{try{return[Ot.parse(v)]}catch{return[]}});return}}catch{}try{const u=await fetch(G(`/packs/${En(R.world())}.json`));u.ok&&(j=((await u.json()).prefabs??[]).flatMap(v=>{try{return[Ot.parse(v)]}catch{return[]}}))}catch{}}async function W(){var u,c,v,k;try{const U=await fetch(G("/api/tables/truth"));if(U.ok){const T=(v=(c=(u=(await U.json()).docs)==null?void 0:u[0])==null?void 0:c.tables)==null?void 0:v.pins;if(T!==void 0)return{p:be.parse(T),src:"truth"}}}catch{}try{const U=await fetch(G(`/packs/${En(R.world())}.json`));if(U.ok){const T=(k=(await U.json()).tables)==null?void 0:k.pins;if(T!==void 0)return{p:be.parse(T),src:"pack"}}}catch{}return null}async function yt(u=!1){if(et&&!u)return;let c=null;try{c=await W()}catch(v){z(a("tool.pin.zodFail",{msg:v.message.slice(0,200)}),!0);return}c?(ct=a("tool.pin.truthMeta",{src:c.src,n:c.p.length}),et=!1,q=c.p.length?0:-1,b=c.p):(ct=a("tool.pin.truthNew"),et=!1,b=[],q=-1),it(),$(),gt()}const rt=u=>{var v;const c=j.find(k=>k.id===u);return c?((v=c.names)==null?void 0:v[Ue()])??c.name:u};function S(u){const c=j.filter(k=>!k.meta.tags.includes("town")&&!k.meta.tags.includes("town-interior")),v=c.map(k=>`<option value="${D(k.id)}"${k.id===u?" selected":""}>${D(rt(k.id))}（${k.size.w}×${k.size.d}）</option>`);return u&&!c.some(k=>k.id===u)&&v.unshift(`<option value="${D(u)}" selected>⚠ ${D(u)}</option>`),v.join("")}function Yt(){const u=s("ppins");u.innerHTML="",b.length||(u.innerHTML=`<div class="sub">${D(a("tool.pin.empty"))}</div>`),b.forEach((c,v)=>{var Y,bt;const k=document.createElement("div");k.className="pincard"+(v===q?" sel":"");const U=["always","depths","once"].map(F=>`<option value="${F}"${c.rule===F?" selected":""}>${D(a(`tool.pin.rule.${F}`))}</option>`).join(""),T=[`<option value=""${c.theme?"":" selected"}>${D(a("tool.pin.themeAny"))}</option>`].concat(Sn.map(F=>`<option value="${F}"${c.theme===F?" selected":""}>${D(a(`elem.${F}`))}</option>`)).join("");k.innerHTML=`
        <div class="row"><b>📌 ${v+1}</b>
          <select data-act="prefab">${S(c.prefab)}</select>
          <button type="button" data-act="del" title="${D(a("tool.pin.delete"))}">🗑</button></div>
        <div class="kv"><span class="lbl">${D(a("tool.pin.ruleLabel"))}</span><select data-act="rule">${U}</select></div>
        <div class="kv" data-show="depths"><span class="lbl">${D(a("tool.pin.depthsLabel"))}</span>
          <input type="text" data-act="depths" placeholder="${D(a("tool.pin.depthsPh"))}" value="${D((c.depths??[]).join(", "))}" /></div>
        <div class="kv" data-show="range"><span class="lbl">${D(a("tool.pin.rangeLabel"))}</span>
          <input type="number" class="num" data-act="r0" min="1" max="99" value="${((Y=c.range)==null?void 0:Y[0])??1}" /> −
          <input type="number" class="num" data-act="r1" min="1" max="99" value="${((bt=c.range)==null?void 0:bt[1])??99}" /></div>
        <div class="kv"><span class="lbl">${D(a("tool.pin.themeLabel"))}</span><select data-act="theme">${T}</select></div>
        <div class="sub">${D(a("tool.pin.introLabel"))}</div>
        <textarea data-act="intro" placeholder="${D(a("tool.pin.introPh"))}">${D(c.intro??"")}</textarea>`,k.querySelector('[data-show="depths"]').style.display=c.rule==="depths"?"flex":"none",k.querySelector('[data-show="range"]').style.display=c.rule==="depths"?"none":"flex";const H=()=>{X(),it(),$()};k.addEventListener("click",()=>{q!==v&&(q=v,it())}),k.querySelector('[data-act="prefab"]').addEventListener("change",F=>{c.prefab=F.target.value,H()}),k.querySelector('[data-act="rule"]').addEventListener("change",F=>{var tt;c.rule=F.target.value,c.rule==="depths"?(delete c.range,c.depths=(tt=c.depths)!=null&&tt.length?c.depths:[5]):(delete c.depths,c.range=c.range??[1,99]),H()}),k.querySelector('[data-act="depths"]').addEventListener("change",F=>{const tt=F.target.value.split(/[\s,、]+/).map(_=>Number(_)).filter(_=>Number.isInteger(_)&&_>=1&&_<=99);c.depths=[...new Set(tt)].sort((_,jt)=>_-jt),H()});const E=(F,tt)=>{const _=c.range??[1,99];_[F]=Math.max(1,Math.min(99,tt||_[F])),_[0]>_[1]&&(_[F===0?1:0]=_[F]),c.range=_,H()};k.querySelector('[data-act="r0"]').addEventListener("change",F=>E(0,Number(F.target.value))),k.querySelector('[data-act="r1"]').addEventListener("change",F=>E(1,Number(F.target.value))),k.querySelector('[data-act="theme"]').addEventListener("change",F=>{const tt=F.target.value;tt?c.theme=tt:delete c.theme,H()}),k.querySelector('[data-act="intro"]').addEventListener("change",F=>{const tt=F.target.value.trim();tt!==(c.intro??"")&&delete c.intros,tt?c.intro=tt.slice(0,200):(delete c.intro,delete c.intros),X(),$()}),k.querySelector('[data-act="del"]').addEventListener("click",F=>{F.stopPropagation(),b.splice(v,1),q>=b.length&&(q=b.length-1),X(),it(),$()}),u.appendChild(k)}),s("paddpin").disabled=b.length>=bn}s("paddpin").addEventListener("click",()=>{if(b.length>=bn){z(a("tool.pin.full"),!0);return}const u=j.find(c=>!c.meta.tags.includes("town")&&!c.meta.tags.includes("town-interior"));b.push({prefab:(u==null?void 0:u.id)??"prefab-id",rule:"depths",depths:[5]}),q=b.length-1,X(),it(),$()});function L(){const u=s("plint"),c=xn(b,j.map(v=>({id:v.id,w:v.size.w,d:v.size.d})));for(const v of b){const k=j.find(U=>U.id===v.prefab);k&&(k.meta.tags.includes("town")||k.meta.tags.includes("town-interior"))&&c.push({level:"warn",key:"tool.pin.lint.townTag",params:{id:v.prefab}})}u.innerHTML=c.length?c.map(v=>`<div class="warn">⚠ ${D(a(v.key,v.params))}</div>`).join(""):`<div class="ok">${D(a("tool.pin.lint.ok"))}</div>`}function Vt(){const u=s("ppv"),c=Z==="any"?null:Z;let v="";for(let k=1;k<=mo;k++){const U=wn(b,k,c),T=U.map(H=>{const E=b.indexOf(H),Y=H.theme?We[H.theme]:"#5b9bff";return`<button type="button" class="pbadge${E===q?" sel":""}" data-i="${E}" style="border-color:${Y}">${D(rt(H.prefab))}${H.intro?" 💬":""}</button>`}).join("");v+=`<div class="pvrow${U.length?" hit":""}"><span class="d">${k}F</span>${T||`<span class="none">${D(a("tool.pin.pvNone"))}</span>`}</div>`}u.innerHTML=v;for(const k of Array.from(u.querySelectorAll(".pbadge")))k.addEventListener("click",()=>{q=Number(k.dataset.i),it()})}function Ht(){const u=s("pthemes");u.innerHTML=`<span class="sub">${D(a("tool.pin.pvTheme"))}</span>`;for(const c of["any",...Sn]){const v=document.createElement("button");v.className="chip"+(Z===c?" on":""),v.style.background=c==="any"?"#9aa4b5":We[c],v.title=c==="any"?a("tool.pin.themeAny"):a(`elem.${c}`),v.addEventListener("click",()=>{Z=c,Vt(),Ht()}),u.appendChild(v)}}function N(){const u=s("ppf"),c=b[q],v=c?j.find(T=>T.id===c.prefab):void 0;if(!v){u.innerHTML=`<div class="sub">${D(a("tool.pin.pfNone"))}</div>`;return}const k=(T,H)=>{const E=v.props.find(Y=>Y.x===T&&Y.y===H);return E?E.kind.startsWith("chest")?"📦":E.kind.startsWith("shrine")?"⛲":E.kind.startsWith("portal")?"◎":E.kind==="item"?"✦":E.kind==="trap"?"✖":"·":null};let U="";for(let T=0;T<v.size.d;T++)for(let H=0;H<v.size.w;H++){const E=v.cells[T][H];let Y=E.kind==="wall"?E.breakable?"#5e4a33":E.pillar||E.low?"#4a5468":"#3a4356":"#223048";E.kind==="floor"&&E.floorFeat==="water"&&(Y="#2b4a6f"),E.kind==="floor"&&E.floorFeat==="slip"&&(Y="#9fc4d8"),E.kind==="floor"&&E.hazard&&(Y=We[E.hazard.element]??Y);const bt=v.ports.some(_=>_.x===H&&_.y===T),tt=v.spawns.find(_=>_.x===H&&_.y===T)?"🧍":k(H,T)??(bt?"○":(E.height??0)>0?String(E.height):"");U+=`<div class="pc${bt?" port":""}" style="background:${Y}">${tt}</div>`}u.innerHTML=`<div class="sub"><b>${D(rt(v.id))}</b>（${v.size.w}×${v.size.d}・depth ${v.meta.depthRange[0]}-${v.meta.depthRange[1]}）</div>
      <div class="pfgrid" style="grid-template-columns:repeat(${v.size.w}, 18px)">${U}</div>`}async function Q(){try{const u=await(await fetch(G("/api/tables/proposals"))).json();_e(s("pprops"),u.proposals??[],{tag:()=>a("tool.pin.capTag"),onView:c=>{It(c)},onPromote:c=>{zt(c)},onArchive:c=>{Pt(c)}}),s("pplive").textContent="· live",s("plive").textContent="· live"}catch{s("pprops").innerHTML=`<div class="live">${D(a("tool.pin.noApi"))}</div>`,s("pplive").textContent=a("tool.common.devOff"),s("plive").textContent=a("tool.common.devOff")}gt()}function gt(){var c;const u=s("ptruth");u.innerHTML=`<div class="card"><b>tables.pins</b><span class="id">${D(ct)}</span>
      <div class="row"><button type="button" data-act="truth-load">${D(a("tool.pin.loadTruth"))}</button></div></div>`,(c=u.querySelector('[data-act="truth-load"]'))==null||c.addEventListener("click",()=>{et=!1,yt(!0).then(()=>z(a("tool.pin.loaded")))})}async function It(u){var c,v;try{const k=await(await fetch(G(`/api/tables/proposal?id=${encodeURIComponent(u)}`))).json(),U=(v=(c=k.docs)==null?void 0:c[0])==null?void 0:v.tables.pins;if(U===void 0)throw new Error(a("tool.pin.propNoPins"));const T=be.parse(U);et=!0,b=T,q=T.length?0:-1,it(),$(),z(a("tool.pin.loadedProp",{name:k.docs[0].name}))}catch(k){z(k.message,!0)}}async function zt(u){try{await Et(G("/api/tables/promote"),{proposalId:u}),z(a("tool.pin.promoted")),et=!1,Q(),yt(!0)}catch(c){z(c.message,!0)}}async function Pt(u){try{await Et(G("/api/tables/archive"),{proposalId:u}),z(a("tool.pin.archived")),Q()}catch(c){z(c.message,!0)}}async function Ft(){var T,H;let u=[];try{b.length&&(u=be.parse(b))}catch(E){z(a("tool.pin.zodFail",{msg:E.message.slice(0,200)}),!0);return}const c=s("plabel").value.trim()||a("tool.pin.capTag");let v={};try{const E=await fetch(G("/api/tables/truth"));E.ok&&(v=((H=(T=(await E.json()).docs)==null?void 0:T[0])==null?void 0:H.tables)??{})}catch{}const k={...v};delete k.pins,u.length&&(k.pins=u);const U={formatVersion:zn,id:"tables",name:c,tables:k,createdAt:Ln(),updatedAt:Ln()};try{await Et(G("/api/tables/proposal"),{tables:U,label:c,createdBy:"user"}),z(a("tool.pin.saved",{name:c})),Q()}catch(E){z(a("tool.pin.saveFail",{msg:E.message}),!0)}}s("psave").addEventListener("click",()=>{Ft()}),s("pload").addEventListener("click",()=>{et=!1,yt(!0).then(()=>z(a("tool.pin.loaded")))}),s("plabel").addEventListener("input",$);function it(){Yt(),L(),Ht(),Vt(),N()}const Rt=R.events.on("tables",()=>{Q(),yt()}),st=Je(()=>{Ve(A.querySelector("#pinapp")),it(),Q()});return window.cdForgePin={pins:()=>b,setPins:u=>{b=u?be.parse(u):[],q=b.length?0:-1,X(),it(),$()},addPin:()=>{s("paddpin").click()},select:u=>{q=u,it()},preview:(u,c)=>wn(b,u,c??null).map(v=>v.prefab),lint:()=>xn(b,j.map(u=>({id:u.id,w:u.size.w,d:u.size.d}))),prefabs:()=>j.map(u=>u.id),save:()=>Ft(),promote:u=>zt(u),refresh:()=>Q(),reload:(u=!0)=>yt(u),dirty:()=>et},nt().then(()=>{I()?(it(),Q()):yt(!0).then(()=>{Q()})}),{setVisible(u){s("pinapp").classList.toggle("on",u),u&&it()},dispose(){Rt(),st(),$(),delete window.cdForgePin}}}const lt=A=>a(`tool.forge.brush.${A}`),go=A=>{var R;return((R=A.names)==null?void 0:R[Ue()])??A.name};function xe(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const Io={id:"forge",async mount(A,R){const{wapi:G,postJson:Et}=R.api;A.innerHTML=ro,Ve(A);const s=t=>A.querySelector(`#${t}`),z=ho(A,R),b=vo(A,R);let j="room";function q(t){j=t,s("app").style.display=t==="room"?"flex":"none",z.setVisible(t==="town"),b.setVisible(t==="pin"),s("modeRoom").classList.toggle("on",t==="room"),s("modeTown").classList.toggle("on",t==="town"),s("modePin").classList.toggle("on",t==="pin");try{sessionStorage.setItem("cdForgeModeM4",t)}catch{}}s("modeRoom").addEventListener("click",()=>q("room")),s("modeTown").addEventListener("click",()=>q("town")),s("modePin").addEventListener("click",()=>q("pin"));const Z=document.createElement("button");Z.type="button",Z.id="fplay",Z.hidden=!0,Z.style.marginLeft="auto",Z.addEventListener("click",()=>window.open(io(R.world()),"_blank"));const et=()=>{Z.textContent=a("tool.studio.playNow"),Z.title=a("tool.studio.playNowTitle")};et(),s("fmodes").appendChild(Z);const ct="plain";let d=Oe("first-keep","はじまりの砦",7,6,xe()),$="floor",I="brush",X="fire",nt=6,W,yt=null;const rt=new Qn,S=()=>({element:X,power:nt,monType:W}),Yt="cdForgeP2";function L(){try{sessionStorage.setItem(Yt,JSON.stringify({v:1,pf:d,brush:$,shape:I,hazardElement:X,hazardPower:nt,spawnType:W??null,cam:{yaw:st,pitch:u,dist:c}}))}catch{}}function Vt(){var t;try{const n=sessionStorage.getItem(Yt);if(!n)return!1;const i=JSON.parse(n);return i.v!==1||!((t=i.pf)!=null&&t.size)||!Array.isArray(i.pf.cells)?!1:(d=i.pf,$=i.brush??"floor",I=i.shape??"brush",X=i.hazardElement??"fire",nt=i.hazardPower??6,W=i.spawnType??void 0,i.cam&&(st=i.cam.yaw,u=i.cam.pitch,c=i.cam.dist),!0)}catch{return!1}}const Ht=s("stage"),N=new ln({antialias:!0});N.toneMapping=qn,N.toneMappingExposure=1.22,N.setPixelRatio(Math.min(devicePixelRatio,2)),Ht.appendChild(N.domElement);const Q=new rn,gt=new dn(42,1,.05,200),It=cn[ct],zt=Dn(It);Q.background=new pn(It.bg);const Pt=new Gn(zt.hemiSky,zt.hemiGround,Math.max(.5,zt.hemiI)),Ft=new Ae(zt.sunCol,Math.max(.8,zt.sunI));Ft.position.set(3,4.2,2.4);const it=new Ae(zt.fillCol,.35);it.position.set(-2.6,1.4,-1.8),Q.add(Pt,Ft,it);const Rt=new Wn(document.createElement("div"),()=>{});let st=0,u=.72,c=9;const v=new ae(3,0,2.5);function k(){v.set((d.size.w-1)/2,.3,(d.size.d-1)/2),c=Math.max(d.size.w,d.size.d)*1.35+2}function U(){const t=Ht.clientWidth,n=Ht.clientHeight;N.setSize(t,n),gt.aspect=t/n,gt.updateProjectionMatrix()}R.own(window,"resize",U);let T=null,H=null;function E(){T&&Q.remove(T),H&&Q.remove(H),T=Rt.buildPrefabPreview(ct,d),H=new he;for(const t of d.spawns)H.add(Me(t));Q.add(T,H),tt()}let Y=!1,bt=null;const F=new oe({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function tt(){if(bt&&(Q.remove(bt),bt=null),!Y)return;bt=new he;const t=d.ports.length?to(d,d.ports[0],!1):new Set;for(let n=0;n<d.size.d;n++)for(let i=0;i<d.size.w;i++){const h=d.cells[n][i];if(h.kind!=="floor"||h.floorFeat==="water"||t.has(`${i},${n}`))continue;const m=new Kt(new fe(.96,.06,.96),F);m.position.set(i,(h.height??0)*$e+.34,n),bt.add(m)}Q.add(bt)}function _(t){const n=t?Be.find(i=>i.name===t):null;return{kind:"monster",name:t??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:n==null?void 0:n.size,heads:n==null?void 0:n.heads,element:n==null?void 0:n.element}}function jt(t){const{geo:n,spots:i}=Yn(t),h=new he;h.add(new Kt(n,Xn()));for(const m of i){const C=new Kt(new fe(1,1,1),new oe({color:m.c}));C.position.set(m.x,m.y,m.z),C.scale.set(m.sx,m.sy,m.sz),h.add(C)}return h}function Me(t){var m,C;const n=new he,i=new Kt(new fe(.94,.05,.94),new oe({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(i.position.y=.03,n.add(i),t.monType&&Be.some(O=>O.name===t.monType)){const O=_(t.monType),Jt=jt(O),wt=((O.size??1)-1)/2;Jt.position.set(wt,0,wt),n.add(Jt)}else{const O=new Kt(new Kn(.3),new oe({color:11702236}));O.position.y=.62,n.add(O)}const h=(((C=(m=d.cells[t.y])==null?void 0:m[t.x])==null?void 0:C.height)??0)*$e;return n.position.set(t.x,h,t.y),n}const le=new oe({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),Bt=new Kt(new fe(1,1,1),le);Bt.visible=!1,Q.add(Bt);const we=new oe({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),qt=new Kt(new fe(1,1,1),we);qt.visible=!1,Q.add(qt);function Dt(t,n){var h,m;if(!t){Bt.visible=!1;return}const i=(((m=(h=d.cells[t.y])==null?void 0:h[t.x])==null?void 0:m.height)??0)*$e;Bt.visible=!0,Bt.scale.set(1.04,.14,1.04),Bt.position.set(t.x,i+.4,t.y),le.color.setHex(n||$==="erase"?14707290:6003711)}function dt(t,n){if(!t||!n){qt.visible=!1;return}const i=Math.min(t.x,n.x),h=Math.max(t.x,n.x),m=Math.min(t.y,n.y),C=Math.max(t.y,n.y);qt.visible=!0,qt.scale.set(h-i+1.04,.3,C-m+1.04),qt.position.set((i+h)/2,.3,(m+C)/2)}const Ut=new Un,kt=new Jn(new ae(0,1,0),0);function pt(t,n){const i=N.domElement.getBoundingClientRect(),h=new Vn((t-i.left)/i.width*2-1,-((n-i.top)/i.height*2-1));Ut.setFromCamera(h,gt);const m=(wt,ne)=>wt>=0&&ne>=0&&wt<d.size.w&&ne<d.size.d;if(T){const wt=Ut.intersectObject(T,!0);for(const ne of wt){const Fe=ne.point.clone();ne.face&&Fe.addScaledVector(ne.face.normal,-.05);const an=Math.round(Fe.x),sn=Math.round(Fe.z);if(m(an,sn))return{x:an,y:sn}}}const C=new ae;if(!Ut.ray.intersectPlane(kt,C))return null;const O=Math.round(C.x),Jt=Math.round(C.z);return m(O,Jt)?{x:O,y:Jt}:null}const Xt=s("msg");let Ct=0;function V(t,n=!1){Xt.textContent=t,Xt.style.color=n?"#ffd166":"#7fd17f",clearTimeout(Ct);const i=A.querySelector("#mtoast");i&&g.matches&&(i.textContent=t,i.style.display="block",i.style.borderColor=n?"#ffd166":"#2b3547"),Ct=window.setTimeout(()=>{Xt.textContent="",i&&(i.style.display="none")},4500)}function $t(t){s("guide").style.display=t?"block":"none"}s("help").addEventListener("click",()=>$t(!0));function Lt(t){t&&(E(),$t(!1))}function ut(){rt.commit(d)&&(Zt(),ee(),L())}function At(t,n){d=t,te(),k(),E(),ut(),n&&V(n)}function Zt(){s("undo").disabled=!rt.canUndo(),s("redo").disabled=!rt.canRedo();const t=A.querySelector("#mUndo");t&&(t.disabled=!rt.canUndo(),s("mRedo").disabled=!rt.canRedo())}function Gt(){const t=rt.undo();t&&(d=t,te(),E(),Zt(),ee(),L(),V(a("tool.common.undone")))}function St(){const t=rt.redo();t&&(d=t,te(),E(),Zt(),ee(),L(),V(a("tool.common.redone")))}s("undo").addEventListener("click",Gt),s("redo").addEventListener("click",St);let ot="none",B=!1,re=0,de=0,Wt=new Set,o=null,e=null,l=null;function p(t,n,i){const h=`${n},${i}`;Wt.has(h)||(Wt.add(h),Lt(Le(d,t,n,i,S())),t==="port"&&!(n===0||i===0||n===d.size.w-1||i===d.size.d-1)&&V(a("tool.forge.portEdgeOnly"),!0))}function y(t,n){if(o&&(o.x!==n.x||o.y!==n.y)){let{x:i,y:h}=o;const m=Math.max(Math.abs(n.x-i),Math.abs(n.y-h));for(let C=1;C<=m;C++)p(t,Math.round(i+(n.x-i)*(C/m)),Math.round(h+(n.y-h)*(C/m)))}else p(t,n.x,n.y);o=n}N.domElement.addEventListener("pointerdown",t=>{if(t.pointerType==="touch")return;N.domElement.setPointerCapture(t.pointerId),re=t.clientX,de=t.clientY;const n=pt(t.clientX,t.clientY);if(t.button===2){n?(ot="erase",Wt=new Set,o=null,y("erase",n)):ot="orbit";return}if(t.button===1||B||!n){ot="orbit";return}if(t.button===0){if(I==="rect"){ot="rect",e=n,l=n,dt(e,l);return}if(I==="fill"){Lt(Re(d,$,n.x,n.y,S())),ut();return}ot="paint",Wt=new Set,o=null,y($,n)}});let r=null;N.domElement.addEventListener("pointermove",t=>{if(t.pointerType==="touch")return;const n=pt(t.clientX,t.clientY);r=n,ht(n),Dt(n,ot==="erase"),ot==="orbit"?(st+=(t.clientX-re)*.008,u=Math.min(1.4,Math.max(.15,u+(t.clientY-de)*.006))):(ot==="paint"||ot==="erase")&&n?y(ot==="erase"?"erase":$,n):ot==="rect"&&n&&(l=n,dt(e,l)),re=t.clientX,de=t.clientY}),N.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(ot==="rect"&&e&&l?(Lt(je(d,$,e.x,e.y,l.x,l.y,S())),ut()):ot==="paint"||ot==="erase"?ut():ot==="orbit"&&L(),ot="none",e=l=null,o=null,dt(null,null))}),N.domElement.addEventListener("pointerleave",()=>{Dt(null,!1),ht(null)}),N.domElement.addEventListener("contextmenu",t=>t.preventDefault()),N.domElement.addEventListener("wheel",t=>{t.preventDefault(),c=Math.min(40,Math.max(3,c*(t.deltaY>0?1.08:.93)))},{passive:!1});const g=matchMedia("(max-width: 900px)");function x(){const t=Math.round(st/(Math.PI/4))*(Math.PI/4);Math.abs(st-t)<5*Math.PI/180&&(st=t)}let P="none",J=null;function ft(){P="none",J=null,e=l=null,o=null,dt(null,null),Dt(null,!1)}eo(N.domElement,{strokeStart(t,n){const i=pt(t,n);if(!i){P="none";return}if(J=JSON.stringify(d),I==="rect"){P="rect",e=i,l=i,dt(e,l);return}if(P="paint",Wt=new Set,o=null,I==="fill"){Lt(Re(d,$,i.x,i.y,S())),Wt.add(`${i.x},${i.y}`);return}y($,i),Dt(i,$==="erase")},strokeMove(t,n){const i=pt(t,n);i&&(P==="rect"?(l=i,dt(e,l)):P==="paint"&&I==="brush"&&(y($,i),Dt(i,$==="erase")))},strokeEnd(){P==="rect"&&e&&l&&Lt(je(d,$,e.x,e.y,l.x,l.y,S())),P!=="none"&&(ut(),ve()),ft()},strokeCancel(){P==="paint"&&J&&(d=JSON.parse(J),E(),ee()),ft()},orbit(t,n){st+=t*.008,u=Math.min(1.4,Math.max(.15,u+n*.006))},orbitEnd(){x(),L()},pinch(t){c=Math.min(40,Math.max(3,c/t))},undoTap(){Gt(),ve()},redoTap(){St(),ve()},longPress(t,n){const i=pt(t,n);i&&(Dt(i,!1),V(a("tool.forge.cellInfo",{x:i.x,y:i.y,desc:at(i.x,i.y)})),ve())},strokeSize:()=>Wt.size});function at(t,n){const i=d.cells[n][t],h=[];i.kind==="wall"?h.push(i.low?lt("low"):i.pillar?lt("pillar"):i.breakable?lt("breakable"):lt("wall")):(h.push(i.floorFeat==="water"?lt("water"):i.floorFeat==="slip"?lt("slip"):lt("floor")),i.hazard&&h.push(a("tool.forge.cell.hazard",{el:a(`elem.${i.hazard.element}`)})),(i.height??0)>0&&h.push(a("tool.forge.cell.height",{n:i.height??0})));const m=d.props.find(O=>O.x===t&&O.y===n);m&&h.push(me(m.kind)?lt(m.kind):m.kind);const C=d.spawns.find(O=>O.x===t&&O.y===n);return C&&h.push(C.monType?ge(C.monType):a("tool.forge.cell.spawnAuto")),d.ports.some(O=>O.x===t&&O.y===n)&&h.push(lt("port")),h.join("・")}function ht(t){const n=s("hoverhint");if(!t){n.textContent=a("tool.forge.hoverIdle");return}const i=$==="spawn"?W?ge(W):a("tool.forge.auto"):lt($),h=$==="erase"?a("tool.forge.verb.erase"):I==="rect"?a("tool.forge.verb.rect",{name:i}):I==="fill"?a("tool.forge.verb.fill",{name:i}):a("tool.forge.verb.place",{name:i});n.textContent=a("tool.forge.hoverLine",{x:t.x,y:t.y,desc:at(t.x,t.y),verb:h})}const Mt=t=>{var i,h,m;if(j!=="room"||((i=t.target)==null?void 0:i.tagName)==="INPUT"||((h=t.target)==null?void 0:h.tagName)==="SELECT"||((m=t.target)==null?void 0:m.tagName)==="TEXTAREA")return;if(t.code==="Space"){B=!0,t.preventDefault();return}if((t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="z"){t.preventDefault(),t.shiftKey?St():Gt();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y"){t.preventDefault(),St();return}const n=t.key.toLowerCase();if(n==="b")Tt("brush");else if(n==="r")Tt("rect");else if(n==="f")Tt("fill");else if(n==="escape")ot="none",e=l=null,dt(null,null),$t(!1);else if(n==="arrowleft")st-=Math.PI/24;else if(n==="arrowright")st+=Math.PI/24;else if(n==="arrowup")u=Math.min(1.4,u+.05);else if(n==="arrowdown")u=Math.max(.15,u-.05);else{const C=hn.find(O=>O.key===n);C&&_t(C.id)}},xt=t=>{t.code==="Space"&&(B=!1)};R.own(window,"keydown",Mt),R.own(window,"keyup",xt),s("camL").addEventListener("click",()=>{st-=Math.PI/4,L()}),s("camR").addEventListener("click",()=>{st+=Math.PI/4,L()}),s("camIn").addEventListener("click",()=>{c=Math.max(3,c*.8),L()}),s("camOut").addEventListener("click",()=>{c=Math.min(40,c*1.25),L()});const f=new ln({antialias:!0,preserveDrawingBuffer:!0});f.setSize(96,96);const M=new rn,K=new dn(40,1,.05,100);M.add(new _n(16777215,.85));const Nt=new Ae(16769725,1);Nt.position.set(3,6,4),M.add(Nt);function mt(t){M.background=new pn(cn[ct].bg),M.add(t);const n=new Zn().setFromObject(t),i=n.getCenter(new ae),h=n.getSize(new ae),m=Math.max(h.x,h.y,h.z)*.62+.24;K.position.set(i.x+m*1.35,i.y+m*1.15,i.z+m*1.85),K.lookAt(i),f.render(M,K);const C=f.domElement.toDataURL();return M.remove(t),C}const vt=new Map;function ye(t){const n=`tile:${t}`;if(!vt.has(n)){const i=Rt.buildSample(ct,t);i.position.set(-1,0,-1);const h=new he;h.add(i),vt.set(n,mt(h))}return vt.get(n)}function ze(){if(!vt.has("port")){const t={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};vt.set("port",mt(Rt.buildPrefabPreview(ct,t)))}return vt.get("port")}function Te(t){const n=`mon:${t}`;return vt.has(n)||vt.set(n,mt(jt(_(t)))),vt.get(n)}function Tn(t){const n=`pf:${t.id}:${t.updatedAt}`;return vt.has(n)||vt.set(n,mt(Rt.buildPrefabPreview(ct,t))),vt.get(n)}const Pe=[];function Qt(t,n,i,h,m,C,O,Jt){const wt=document.createElement("div");wt.className="swatch",wt.title=Jt??"",wt.innerHTML=`${h?`<img src="${h}" alt="" />`:`<div class="glyph">${m??""}</div>`}${C?`<span class="kbd">${C}</span>`:""}<div class="nm">${i}</div>`,wt.addEventListener("click",()=>_t(n,O)),t.appendChild(wt),Pe.push({el:wt,brush:n,monType:O})}function Ke(){for(const t of["palTerrain","palProps","palMisc","palSpawns"])s(t).innerHTML="";Pe.length=0;for(const t of hn)t.cat==="terrain"?Qt(s("palTerrain"),t.id,lt(t.id),t.sample?ye(t.sample):null,t.id==="down"?"▼":null,t.key,void 0,a(`tool.forge.brushHint.${t.id}`)):t.cat==="prop"?Qt(s("palProps"),t.id,lt(t.id),t.sample?ye(t.sample):null,null,t.key,void 0,a(`tool.forge.brushHint.${t.id}`)):t.cat==="port"?Qt(s("palMisc"),t.id,lt(t.id),ze(),null,t.key,void 0,a(`tool.forge.brushHint.${t.id}`)):t.cat==="erase"&&Qt(s("palMisc"),t.id,lt(t.id),null,"🧽","E",void 0,a(`tool.forge.brushHint.${t.id}`));Qt(s("palSpawns"),"spawn",a("tool.forge.auto"),null,"？",void 0,void 0,a("tool.forge.autoHint"));for(const t of Be)Qt(s("palSpawns"),"spawn",ge(t.name),Te(t.name),null,void 0,t.name,a("tool.forge.monHint",{min:t.min,max:t.max})+(t.size?`・${t.size}×${t.size}`:""))}const Pn={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function ke(){const t=s("palopts");t.innerHTML=`<span>${Ne(a("tool.forge.attrLabel"))}</span>`;for(const h of["fire","ice","earth","poison","holy"]){const m=document.createElement("button");m.className="chip"+(h===X?" on":""),m.style.background=Pn[h],m.title=a(`elem.${h}`),m.addEventListener("click",()=>{X=h,ke(),ce(),L()}),t.appendChild(m)}const n=document.createElement("span");n.textContent=`　${a("tool.forge.powerLabel")}`;const i=document.createElement("input");i.type="number",i.min="1",i.max="40",i.value=String(nt),i.className="num",i.style.width="3.4em",i.addEventListener("change",()=>{nt=Math.max(1,Math.min(40,Number(i.value)||6)),L()}),t.append(n,i)}function _t(t,n){$=t,t==="spawn"&&(W=n),Fn(t,t==="spawn"?n:void 0),!me(t).areaOk&&I!=="brush"&&(Tt("brush"),V(a("tool.forge.brushOneOnly",{name:lt(t)}))),ce(),ht(r),L()}function Tt(t){if(t!=="brush"&&!me($).areaOk){V(a("tool.forge.shapeOneOnly",{name:lt($)}),!0);return}I=t,ce(),L()}function ce(){const t=me($);for(const m of Pe)m.el.classList.toggle("on",m.brush===$&&($!=="spawn"||m.monType===W));s("shBrush").classList.toggle("on",I==="brush"),s("shRect").classList.toggle("on",I==="rect"),s("shFill").classList.toggle("on",I==="fill"),s("nowname").textContent=$==="spawn"?a("tool.forge.nowSpawn",{name:W?ge(W):a("tool.forge.auto")}):$==="hazard"?a("tool.forge.nowHazard",{el:a(`elem.${X}`)}):lt(t.id),s("nowshape").textContent=`（${a(`tool.common.shape.${I}`)}）`;const n=s("nowimg"),i=$==="spawn"?W?Te(W):null:$==="port"?ze():t.sample?ye(t.sample):null;i?(n.src=i,n.style.display="block"):n.style.display="none",s("palopts").classList.toggle("show",$==="hazard");const h=A.querySelector("#mNowImg");h&&(i?(h.src=i,h.style.display="block"):h.style.display="none",s("mNowName").textContent=s("nowname").textContent??"",s("mShB").classList.toggle("on",I==="brush"),s("mShR").classList.toggle("on",I==="rect"),s("mShF").classList.toggle("on",I==="fill"),On())}s("shBrush").addEventListener("click",()=>Tt("brush")),s("shRect").addEventListener("click",()=>Tt("rect")),s("shFill").addEventListener("click",()=>Tt("fill"));function te(){s("pid").value=d.id,s("pname").value=d.name,s("pw").value=String(d.size.w),s("pd").value=String(d.size.d),s("pdepth").value=`${d.meta.depthRange[0]}-${d.meta.depthRange[1]}`,s("pweight").value=String(d.meta.weight),s("ptags").value=d.meta.tags.join(" "),s("cPorts").checked=d.meta.solvability.portsConnected,s("cHaz").checked=d.meta.solvability.hazardAvoidable}function Ye(){d.id=s("pid").value.trim()||d.id,d.name=s("pname").value.trim()||d.name;const t=s("pdepth").value.split("-").map(n=>Math.max(1,Math.min(99,Number(n)||1)));d.meta.depthRange=[t[0]??1,Math.max(t[0]??1,t[1]??t[0]??99)],d.meta.weight=Math.max(1,Math.min(9,Number(s("pweight").value)||3)),d.meta.tags=s("ptags").value.split(/[\s,、]+/).map(n=>n.trim()).filter(Boolean),d.meta.solvability.portsConnected=s("cPorts").checked,d.meta.solvability.hazardAvoidable=s("cHaz").checked}for(const t of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])s(t).addEventListener("change",()=>{Ye(),ut()});s("applySize").addEventListener("click",()=>{const t=Number(s("pw").value),n=Number(s("pd").value),i=un(d,t,n);te(),k(),E(),ut();const h=i.ports+i.props+i.spawns;V(h?a("tool.forge.resizedDrop",{w:d.size.w,d:d.size.d,n:h,ports:i.ports,props:i.props,spawns:i.spawns}):a("tool.forge.resized",{w:d.size.w,d:d.size.d}),h>0)}),s("newpf").addEventListener("click",()=>{const t=Math.floor(Math.random()*900)+100;At(Oe(`prefab-${t}`,a("tool.forge.newName",{n:t}),d.size.w,d.size.d,xe()),a("tool.forge.newSaid"))});function ee(){const t=fn(d),n=s("solv");n.innerHTML=t.items.map(m=>`<div class="s-${m.level}">${m.level==="ok"?"✓":m.level==="warn"?"⚠":"✗"} ${Ne(m.key?a(m.key,m.params):m.msg)}</div>`).join("");const i=s("save");i.disabled=t.saveBlocked,s("savenote").textContent=t.saveBlocked?a("tool.forge.saveBlockedNote",{reason:t.blockReasonKey?a(t.blockReasonKey):t.blockReason??""}):a("tool.common.savenote");const h=A.querySelector("#mSolv");if(h){const m=t.items.filter(O=>O.level==="err").length,C=t.items.filter(O=>O.level==="warn").length;h.textContent=m?`✗ ${m}`:C?`⚠ ${C}`:"✓",h.className="mchip "+(m?"err":C?"warn":"ok"),s("mSave").disabled=t.saveBlocked}}function Xe(){return Ye(),Ot.parse({...d,updatedAt:xe()})}s("save").addEventListener("click",()=>{Ce()});async function Ce(){try{const t=Xe(),n=await Et(G("/api/forge/proposal"),{prefab:t,label:t.name,createdBy:"user"});V(a("tool.common.savedFuture",{id:n.id.slice(0,8)}))}catch(t){V(a("tool.common.saveFail",{msg:t.message}),!0)}}async function Ze(t){try{const n=await Et(G("/api/forge/promote"),{proposalId:t});V(n.promotedNote??a("tool.common.adoptedNote"))}catch(n){V(a("tool.common.promoteFail",{msg:n.message}),!0)}}async function Qe(t){try{await Et(G("/api/forge/archive"),{proposalId:t}),V(a("tool.common.archived"))}catch(n){V(a("tool.common.archiveFail",{msg:n.message}),!0)}}async function pe(){try{const[t,n]=await Promise.all([fetch(G("/api/forge/truth")).then(i=>i.json()),fetch(G("/api/forge/proposals")).then(i=>i.json())]);Cn(n.proposals??[]),Nn(t),s("live").innerHTML="<b>· live</b>",Z.hidden=!1}catch{s("live").textContent=a("tool.common.devOff"),Z.hidden=!0}}function Cn(t){_e(s("proposals"),t,{selectedId:yt,onView:n=>{Hn(n)},onPromote:n=>{Ze(n)},onArchive:n=>{Qe(n)}})}function Nn(t){const n=t.prefabs??[];oo(s("truth"),n.map(i=>{let h=null;try{h=Tn(Ot.parse(i))}catch{}return{id:i.id,name:go(i),meta:a("tool.forge.cardMeta",{w:i.size.w,d:i.size.d,a:i.meta.depthRange[0],b:i.meta.depthRange[1],wt:i.meta.weight})+(i.meta.tags.length?"・"+i.meta.tags.join("/"):""),thumb:h,onOpen:()=>{At(Ot.parse(i),a("tool.common.openedTruth",{name:i.name}))},onDup:()=>{const m=Ot.parse({...i,id:`${i.id}-2`,name:a("tool.common.copyName",{name:i.name}),updatedAt:xe()});At(m,a("tool.common.duplicated",{name:i.name}))},onCopyWorld:()=>{(async()=>{try{const m=await ao("/api/forge","prefab",Ot.parse(i),R.worlds(),Et);m&&V(a("tool.world.copied",{world:m}))}catch(m){V(a("tool.world.copyFail",{msg:m.message}),!0)}})()}}}),a("tool.forge.truthEmpty"))}async function Hn(t){const n=await fetch(G(`/api/forge/proposal?id=${encodeURIComponent(t)}`)).then(h=>h.json());yt=t;const i=(n.prefabs??[])[n.prefabs.length-1];i&&At(Ot.parse(i),a("tool.common.viewingFuture",{id:t.slice(0,8)})),pe()}function Ne(t){return t.replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n])}const In=R.events.on("forge",()=>{pe()});let He=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function Fn(t,n){He=[{brush:t,monType:n},...He.filter(i=>i.brush!==t||i.monType!==n)].slice(0,5)}function An(t){if(t.brush==="spawn")return t.monType?`<img src="${Te(t.monType)}" alt="" />`:'<div class="glyph">？</div>';if(t.brush==="port")return`<img src="${ze()}" alt="" />`;if(t.brush==="erase")return'<div class="glyph">🧽</div>';if(t.brush==="down")return'<div class="glyph">▼</div>';const n=me(t.brush);return n.sample?`<img src="${ye(n.sample)}" alt="" />`:'<div class="glyph"></div>'}function On(){const t=A.querySelector("#hrecent");if(t){t.innerHTML="";for(const n of He){const i=document.createElement("button");i.className="hswatch"+(n.brush===$&&(n.brush!=="spawn"||n.monType===W)?" on":""),i.innerHTML=`${An(n)}<span class="nm">${Ne(n.brush==="spawn"?n.monType?ge(n.monType):a("tool.forge.auto"):lt(n.brush))}</span>`,i.addEventListener("click",()=>_t(n.brush,n.monType)),t.appendChild(i)}}}const ue=no(["sheetSide","sheetLoop"]);function tn(){g.matches?(s("sheetSideBody").append(s("topbar"),s("side")),s("sheetLoopBody").append(s("loop"))):(ue.closeAll(),s("app").insertBefore(s("side"),s("stagewrap")),s("stagewrap").insertBefore(s("topbar"),s("mchips")),s("app").appendChild(s("loop"))),U()}s("mMenu").addEventListener("click",()=>ue.open("sheetSide")),s("mShelf").addEventListener("click",()=>ue.open("sheetLoop")),s("mSolv").addEventListener("click",()=>ue.open("sheetSide")),s("hMore").addEventListener("click",()=>ue.open("sheetSide")),s("mUndo").addEventListener("click",Gt),s("mRedo").addEventListener("click",St),s("mFit").addEventListener("click",()=>{k(),L()}),s("mReach").addEventListener("click",()=>{Y=!Y,s("mReach").classList.toggle("on",Y),tt()}),s("mSave").addEventListener("click",()=>{ve(),Ce()}),s("mShB").addEventListener("click",()=>Tt("brush")),s("mShR").addEventListener("click",()=>Tt("rect")),s("mShF").addEventListener("click",()=>Tt("fill")),R.own(g,"change",tn);function Rn(){gt.position.set(v.x+c*Math.sin(st)*Math.cos(u),v.y+c*Math.sin(u),v.z+c*Math.cos(st)*Math.cos(u)),gt.lookAt(v),N.render(Q,gt)}let en=0,nn=!1;function on(){nn||(en=requestAnimationFrame(on),Rn())}window.cdForge={paint:(t,n,i)=>{var h;return i&&_t(i),Lt(Le(d,$,t,n,S())),ut(),(h=d.cells[n])==null?void 0:h[t]},rect:(t,n,i,h,m)=>{m&&_t(m),Lt(je(d,$,t,n,i,h,S())),ut()},fill:(t,n,i)=>{i&&_t(i),Lt(Re(d,$,t,n,S())),ut()},erase:(t,n)=>{var i;return Lt(Le(d,"erase",t,n)),ut(),(i=d.cells[n])==null?void 0:i[t]},spawn:(t,n,i)=>{_t("spawn",i),Lt(Le(d,"spawn",t,n,S())),ut()},tool:(t,n)=>_t(t,n),shapeMode:t=>Tt(t),hazard:(t,n)=>{X=t,n&&(nt=n),ke()},undo:Gt,redo:St,resize:(t,n)=>{const i=un(d,t,n);return te(),k(),E(),ut(),i},newPrefab:(t,n,i,h)=>At(Oe(t,n,i,h,xe())),prefab:()=>Xe(),draft:()=>d,solv:()=>fn(d),save:()=>Ce(),promote:t=>Ze(t),archive:t=>Qe(t),refresh:()=>pe(),view:(t,n,i)=>{st=t,u=n,i!=null&&(c=i)},state:()=>({brush:$,shape:I,spawnType:W??null,hazardElement:X,canUndo:rt.canUndo(),canRedo:rt.canRedo(),guide:s("guide").style.display!=="none"}),draws:()=>N.info.render.calls,screenOf:(t,n)=>{var C,O;const i=(((O=(C=d.cells[n])==null?void 0:C[t])==null?void 0:O.height)??0)*$e,h=new ae(t,i,n).project(gt),m=N.domElement.getBoundingClientRect();return{cx:m.left+(h.x+1)/2*m.width,cy:m.top+(1-h.y)/2*m.height}},cellAt:(t,n)=>pt(t,n)};async function jn(t){try{const i=((await fetch(G("/api/forge/truth")).then(h=>h.json())).prefabs??[]).find(h=>h.id===t);i?At(Ot.parse(i),a("tool.common.openedTruth",{name:i.name})):V(a("tool.studio.deepMiss",{id:t}),!0)}catch{}}const Bn=Je(()=>{Ke(),ke(),ce(),ee(),ht(r),et(),pe()}),Ie=Vt();Ke(),ke(),rt.reset(d),te(),Ie||k(),ce(),Zt(),ee(),E(),tn(),U(),$t(!Ie),Ie&&V(a("tool.common.restored")),pe(),on();try{const t=sessionStorage.getItem("cdForgeModeM4");(t==="town"||t==="pin")&&q(t)}catch{}return{applyParams(t){const n=t.get("tab")??t.get("mode");n==="town"?q("town"):n==="pin"?q("pin"):n==="room"&&q("room");const i=t.get("id");i&&(q("room"),jn(i))},dispose(){nn=!0,cancelAnimationFrame(en),clearTimeout(Ct),In(),Bn(),z.dispose(),b.dispose(),L();try{N.dispose(),N.forceContextLoss(),N.domElement.remove()}catch{}try{f.dispose(),f.forceContextLoss()}catch{}delete window.cdForge}}}};export{Io as forgePanel};
