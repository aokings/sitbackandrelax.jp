import{W as an,A as qn,S as sn,P as ln,E as rn,z as Dn,C as dn,H as Gn,D as Ht,r as Wn,l as Xe,M as Oe,B as lt,t as Vn,F as xt,V as Ye,J as Un,R as _n,K as Jn,G as rt,O as Kn,w as Xn,m as Yn,u as Zn}from"./render-voxel-PcSYZtX2.js";import{P as He,e as Ft}from"./gamepack-Ch4DClsv.js";import{r as cn,E as Qn,c as pn,a as wt,f as At,b as It,d as dt,B as un,e as eo}from"./forge-edit-CffY6cQY.js";import{a as to}from"./touch-input-D1HYJrcI.js";import{r as Dt,i as no,b as ct,a as oo}from"./tool-shelf-CPrJ-OK1.js";import{M as Ot}from"./dungeon-CzQMf0gi.js";import{D as En,b as ao}from"./creator-auth-q666652w.js";import{o as Gt}from"./studio-C4l3Mpju.js";import{t as i,b as Wt,g as Vt,c as pt}from"./i18n-D_93wjAr.js";import{a as io}from"./playtest-core-BI-sj3ag.js";import{d as fn,t as Rt,T as Ze,a as jt,l as hn,v as so,s as mn,b as lo,c as Bt,e as yt,f as kt,P as vn,p as bn,g as gn,h as ut}from"./tables-B68AojDj.js";import{T as Sn}from"./tables-doc-DJe4PGR4.js";import"./dungeon-types-JT-53Zyi.js";import"./voxmodel-BixVuI7N.js";import"./schemas-BBGxizon.js";import"./preload-helper-Dp1pzeXC.js";import"./tuner-core-BOPz8p1v.js";const ro=`<!-- ============================================================
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
`,g=A=>A.replace(/[&<>"]/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[R]),xn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),co=A=>A===En?"comduct":A.replace("/","--"),Qe={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},po={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},wn={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},yn={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},uo=["human","elf","dwarf","gnome","halffoot"],fo=["talker","guide","shop","equip","craft","heal","recruit"];function ho(A,R){const{wapi:G,postJson:$e}=R.api,a=s=>A.querySelector(`#${s}`);function M(s,n=!1){const h=a("tmsg");h.textContent=s,h.style.color=n?"#ffd166":"#7fd17f",window.setTimeout(()=>{h.textContent===s&&(h.textContent="")},5e3)}let f=fn(),B="select",q="shop",Y=3,ne=2,ce="plain",r=null,w=null,j=null,V=null,oe=!1,ie="";const Le="cdForgeTownM4";function k(){try{sessionStorage.setItem(Le,JSON.stringify({v:1,world:R.world(),plan:f,tool:B,dirty:oe,label:a("tlabel").value}))}catch{}}function be(){try{const s=sessionStorage.getItem(Le);if(!s)return!1;const n=JSON.parse(s);return n.v!==1||n.world!==R.world()?!1:(f=Ze.parse(n.plan),B=n.tool??"select",oe=!!n.dirty,n.label&&(a("tlabel").value=n.label),!0)}catch{return!1}}function C(){oe=!0}function X(s,n){f=s,n!=null&&n.markDirty&&C(),S(),k()}async function Re(){var s,n,h,d;try{const u=await fetch(G("/api/tables/truth"));if(u.ok){const p=(h=(n=(s=(await u.json()).docs)==null?void 0:s[0])==null?void 0:n.tables)==null?void 0:h.town;if(p!==void 0)return{p:Ze.parse(p),src:"truth"}}}catch{}try{const u=await fetch(G(`/packs/${co(R.world())}.json`));if(u.ok){const p=(d=(await u.json()).tables)==null?void 0:d.town;if(p!==void 0)return{p:Ze.parse(p),src:"pack"}}}catch{}return null}async function ge(s=!1){if(oe&&!s)return;let n=null;try{n=await Re()}catch(h){M(i("tool.town.zodFail",{msg:h.message}),!0);return}n?(ie=i("tool.town.truthMeta",{src:n.src,b:n.p.buildings.length,n:n.p.npcs.length,d:Object.keys(n.p.dialogs).length}),oe=!1,r=null,j=null,X(n.p)):(ie=i("tool.town.truthNew"),oe=!1,X(fn())),qe()}const U=a("tgrid");function Z(s,n){let h="tc",d="",u=`${s},${n}`,p=!1;f.decos.some(E=>E.x===s&&E.y===n&&E.kind==="road")&&(h+=" road");const L=f.buildings.findIndex(E=>s>=E.x&&s<E.x+E.w&&n>=E.y&&n<E.y+E.d),J=[...f.decos].reverse().find(E=>E.x===s&&E.y===n&&E.kind!=="road"),se=f.holes.findIndex(E=>E.x===s&&E.y===n),K=f.npcs.find(E=>E.x===s&&E.y===n);if(L>=0){const E=f.buildings[L];return h+=" bld",d=s===E.x+(E.w>>1)&&n===E.y+(E.d>>1)?Qe[E.facility]:"",u=`${i(`fac.${E.facility}`)} (${E.facility})`,p=(r==null?void 0:r.kind)==="building"&&r.i===L,{cls:h+(p?" sel":""),html:`<span style="position:absolute;inset:0;background:${po[E.facility]};border-radius:3px"></span><span style="position:relative">${d}</span>`,title:u,selHit:p}}if(J){d=wn[J.kind]??"",u=i(`tool.town.tool.${J.kind==="road"?"road":J.kind}`);const E=f.decos.lastIndexOf(J);p=(r==null?void 0:r.kind)==="deco"&&r.i===E}if(se>=0){const E=f.holes[se];d=`<b style="color:${yn[E.element??"plain"]}">▼</b>`,u=E.element?i(`elem.${E.element}`):i("tool.town.holePlain"),p=(r==null?void 0:r.kind)==="hole"&&r.i===se}return f.buildings.find(E=>E.door.x===s&&E.door.y===n)&&(d+='<span class="door">🚪</span>'),K&&(d=`🧍<span class="npcdot" style="background:${K.color}"></span>`,u=`${K.name}（${K.id}）`,p=(r==null?void 0:r.kind)==="npc"&&r.id===K.id),{cls:h+(p?" sel":""),html:d,title:u,selHit:p}}function Ee(){let s="";for(let n=0;n<yt;n++)for(let h=0;h<kt;h++){const d=Z(h,n);s+=`<div class="${d.cls}" data-x="${h}" data-y="${n}" title="${g(d.title)}">${d.html}</div>`}U.innerHTML=s}U.addEventListener("click",s=>{const n=s.target.closest(".tc");n&&Be(Number(n.dataset.x),Number(n.dataset.y))}),U.addEventListener("pointermove",s=>{const n=s.target.closest(".tc");a("thover").textContent=n?`(${n.dataset.x},${n.dataset.y}) ${n.title}`:"—"});const je=()=>{for(let s=1;;s++){const n=`npc-${s}`;if(!f.npcs.some(h=>h.id===n))return n}};function xe(s,n){const h=f.npcs.find(p=>p.x===s&&p.y===n);if(h)return{kind:"npc",id:h.id};const d=f.buildings.findIndex(p=>s>=p.x&&s<p.x+p.w&&n>=p.y&&n<p.y+p.d);if(d>=0)return{kind:"building",i:d};const u=f.holes.findIndex(p=>p.x===s&&p.y===n);if(u>=0)return{kind:"hole",i:u};for(let p=f.decos.length-1;p>=0;p--)if(f.decos[p].x===s&&f.decos[p].y===n)return{kind:"deco",i:p};return null}function Be(s,n){if(w!=null){const u=f.buildings[w];u&&(u.door={x:s,y:n},M(i("tool.town.doorPlaced"))),w=null,C(),S(),k();return}if(B==="select"){r=xe(s,n),S();return}if(B==="erase"){const u=xe(s,n);if((u==null?void 0:u.kind)==="npc")f.npcs=f.npcs.filter(p=>p.id!==u.id);else if((u==null?void 0:u.kind)==="building")f.buildings.splice(u.i,1);else if((u==null?void 0:u.kind)==="hole")f.holes.splice(u.i,1);else if((u==null?void 0:u.kind)==="deco")f.decos.splice(u.i,1);else return;r=null,M(i("tool.town.erased")),C(),S(),k();return}if(B==="npc"){const u=f.npcs.find(I=>I.x===s&&I.y===n);if(u){r={kind:"npc",id:u.id},S();return}if(f.npcs.length>=16){M(i("tool.town.npcFull"),!0);return}const p=je();f.npcs.push({id:p,name:`NPC${f.npcs.length+1}`,x:s,y:n,race:"human",color:"#e0c060",role:"talker",facing:"s"}),r={kind:"npc",id:p},M(i("tool.town.npcAdded",{name:p})),C(),S(),k();return}if(B==="building"){if(f.buildings.length>=8){M(i("tool.town.bldFull"),!0);return}const u=Math.min(s,kt-Y),p=Math.min(n,yt-ne),I={x:Math.min(u+(Y>>1),kt-1),y:Math.min(p+ne,yt-1)};f.buildings.push({x:u,y:p,w:Y,d:ne,facility:q,door:I}),r={kind:"building",i:f.buildings.length-1},M(i("tool.town.placed",{what:i(`fac.${q}`)})),C(),S(),k();return}if(B==="hole"){const u=ce==="plain"?null:ce,p=f.holes.findIndex(I=>I.x===s&&I.y===n);if(p>=0)f.holes[p].element=u;else if(f.holes.length>=6){M(i("tool.town.holeFull"),!0);return}else f.holes.push({x:s,y:n,element:u});M(i("tool.town.placed",{what:"▼"})),C(),S(),k();return}const h=B.slice(5),d=f.decos.findIndex(u=>u.x===s&&u.y===n&&u.kind===h);d>=0?f.decos.splice(d,1):f.decos.push({x:s,y:n,kind:h}),C(),S(),k()}const Ae=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],re=s=>i(`tool.town.tool.${s.startsWith("deco-")?s.slice(5):s}`);function Pe(){const s=a("tpal");s.innerHTML="";for(const n of Ae){const h=document.createElement("button");h.className=B===n?"on":"",h.textContent=re(n),h.addEventListener("click",()=>{B=n,w=null,Pe(),Q(),k()}),s.appendChild(h)}}function Q(){const s=a("tpalopts");if(s.innerHTML="",s.style.display=B==="building"||B==="hole"?"flex":"none",B==="building"){const n=document.createElement("select");n.innerHTML=Object.keys(Qe).map(u=>`<option value="${u}"${u===q?" selected":""}>${Qe[u]} ${g(i(`fac.${u}`))}</option>`).join(""),n.addEventListener("change",()=>{q=n.value});const h=(u,p,I)=>{const L=document.createElement("input");return L.type="number",L.min="1",L.max=String(I),L.value=String(u),L.className="num",L.style.width="3em",L.addEventListener("change",()=>p(Math.max(1,Math.min(I,Number(L.value)||1)))),L},d=document.createElement("span");d.textContent=i("tool.town.sizeLabel"),s.append(n,d,h(Y,u=>{Y=u},8),document.createTextNode("×"),h(ne,u=>{ne=u},6))}else if(B==="hole"){const n=document.createElement("span");n.textContent=i("tool.town.holeElem"),s.appendChild(n);for(const h of["fire","ice","earth","poison","holy","plain"]){const d=document.createElement("button");d.className="chip"+(h===ce?" on":""),d.style.background=yn[h],d.title=h==="plain"?i("tool.town.holePlain"):i(`elem.${h}`),d.addEventListener("click",()=>{ce=h,Q()}),s.appendChild(d)}}}const c=a("tdetail");function l(){if(w=w,!r){c.innerHTML=`<div class="sub">${g(i("tool.town.detailIdle"))}</div>`;return}if(r.kind==="npc")return x(r.id);if(r.kind==="building")return b(r.i);if(r.kind==="hole"){const n=f.holes[r.i];if(!n)return r=null,l();c.innerHTML=`<div><b>▼ ${g(n.element?i(`elem.${n.element}`):i("tool.town.holePlain"))}</b>（${n.x},${n.y}）</div>
        <div class="row"><button id="tdel" type="button">${g(i("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{f.holes.splice(r.i,1),r=null,C(),S(),k()});return}const s=f.decos[r.i];if(!s)return r=null,l();c.innerHTML=`<div><b>${wn[s.kind]||"·"} ${g(i(`tool.town.tool.${s.kind}`))}</b>（${s.x},${s.y}）</div>
      <div class="row"><button id="tdel" type="button">${g(i("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{f.decos.splice(r.i,1),r=null,C(),S(),k()})}function b(s){const n=f.buildings[s];if(!n)return r=null,l();c.innerHTML=`
      <div><b>${Qe[n.facility]} ${g(i(`fac.${n.facility}`))}</b>（${n.x},${n.y}・${n.w}×${n.d}）</div>
      <div class="kv"><span class="lbl">${g(i("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(Qe).map(h=>`<option value="${h}"${n.facility===h?" selected":""}>${Qe[h]} ${g(i(`fac.${h}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${g(i("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${n.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${n.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${w===s?' class="on"':""}>${g(i("tool.town.doorSet"))}</button></div>
      <div class="sub">${g(i("tool.town.doorHint"))}（🚪 ${n.door.x},${n.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${g(i("tool.town.delete"))}</button></div>`,a("tbfac").addEventListener("change",()=>{n.facility=a("tbfac").value,C(),S(),k()}),a("tbw").addEventListener("change",()=>{n.w=Math.max(1,Math.min(8,Number(a("tbw").value)||n.w)),n.x=Math.min(n.x,kt-n.w),C(),S(),k()}),a("tbd").addEventListener("change",()=>{n.d=Math.max(1,Math.min(6,Number(a("tbd").value)||n.d)),n.y=Math.min(n.y,yt-n.d),C(),S(),k()}),a("tbdoor").addEventListener("click",()=>{w=w===s?null:s,l()}),a("tdel").addEventListener("click",()=>{f.buildings.splice(s,1),r=null,w=null,C(),S(),k()})}function x(s){const n=f.npcs.find(d=>d.id===s);if(!n)return r=null,l();const h=(n.lines??[]).map(d=>d.text).join(`
`);c.innerHTML=`
      <div><b>🧍 ${g(n.name)}</b> <span class="sub">${g(n.id)}（${n.x},${n.y}）</span></div>
      <div class="kv"><span class="lbl">${g(i("tool.town.npcName"))}</span><input id="tnname" type="text" value="${g(n.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${g(i("tool.town.race"))}</span><select id="tnrace">
        ${uo.map(d=>`<option value="${d}"${n.race===d?" selected":""}>${g(i(`tool.town.race.${d}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${g(n.color)}" title="${g(i("tool.town.color"))}" /></div>
      <div class="kv"><span class="lbl">${g(i("tool.town.role"))}</span><select id="tnrole">
        ${fo.map(d=>`<option value="${d}"${n.role===d?" selected":""}>${g(d==="talker"?i("tool.town.role.talker"):d==="guide"?i("tool.town.role.guide"):i(`fac.${d}`))}</option>`).join("")}
      </select>
      <span class="lbl">${g(i("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(d=>`<option value="${d}"${(n.facing??"s")===d?" selected":""}>${d}</option>`).join("")}
      </select></div>
      <div class="sub">${g(i("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${g(h)}</textarea>
      <div class="row"><button id="tndlg" type="button">${g(i("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${n.dialog?g(n.dialog):g(i("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${g(i("tool.town.delete"))}</button></div>`,a("tnname").addEventListener("change",()=>{n.name=a("tnname").value.trim()||n.name,C(),S(),k()}),a("tnrace").addEventListener("change",()=>{n.race=a("tnrace").value,C(),k()}),a("tncolor").addEventListener("change",()=>{n.color=a("tncolor").value,C(),S(),k()}),a("tnrole").addEventListener("change",()=>{n.role=a("tnrole").value,C(),k()}),a("tnface").addEventListener("change",()=>{n.facing=a("tnface").value,C(),k()}),a("tnlines").addEventListener("change",()=>{const d=a("tnlines").value.split(`
`).map(p=>p.trim()).filter(Boolean).slice(0,8),u=n.lines??[];n.lines=d.length?d.map((p,I)=>{var L,J;return{text:p,...((L=u[I])==null?void 0:L.text)===p&&((J=u[I])!=null&&J.texts)?{texts:u[I].texts}:{}}}):void 0,C(),ue(),k()}),a("tndlg").addEventListener("click",()=>{W(n)}),a("tdel").addEventListener("click",()=>{f.npcs=f.npcs.filter(d=>d.id!==s),r=null,j&&!f.npcs.some(d=>d.dialog===j)&&P(),C(),S(),k()})}function W(s){if(!s.dialog){const n=`dlg-${s.id}`;s.dialog=n,f.dialogs[n]||(f.dialogs[n]={id:n,nodes:[{id:"root",say:"……"}]}),C()}j=s.dialog,V=null,he=null,pe=[],S(),k()}function P(){j=null,V=null,he=null,pe=[],we()}a("tdlgclose").addEventListener("click",P);const H=()=>j?f.dialogs[j]??null:null,$=s=>{for(let n=1;;n++){const h=`n${n}`;if(!s.nodes.some(d=>d.id===h))return h}},ee=s=>s.kind==="setFlag"?`⚑${s.flag}`:s.kind==="unlock"?`🔓${s.gate}`:s.kind==="giveItem"?`🎁${s.item}`:`💰${s.amount}G`,fe=["setFlag","unlock","giveItem","giveGold"];function N(s,n){const h=(n??[]).map((u,p)=>`<span class="fxchip">${g(ee(u))}<button type="button" data-act="fxdel" data-site="${s}" data-fi="${p}">✕</button></span>`).join(""),d=(n??[]).length<4?`<select data-act="fxkind" data-site="${s}">${fe.map(u=>`<option value="${u}">${g(i(`tool.town.fx.${u}`))}</option>`).join("")}</select>
         <input type="text" data-act="fxval" data-site="${s}" style="width:5.5em" placeholder="${g(i("tool.town.fxValPh"))}" />
         <button type="button" data-act="fxadd" data-site="${s}">${g(i("tool.town.fxAdd"))}</button>`:"";return`<div class="chrow sub"><span>${g(i("tool.town.fxLabel"))}</span>${h}${d}</div>`}const ae=/^[a-z0-9][a-z0-9-]*$/;function _(s,n){const h=n.trim();if(s==="giveGold"){const d=Number(h);return Number.isInteger(d)&&d>=1&&d<=99999?{kind:s,amount:d}:null}return ae.test(h)?s==="setFlag"?{kind:s,flag:h}:s==="unlock"?{kind:s,gate:h}:{kind:s,item:h}:null}function we(){const s=a("tdlg"),n=H();if(s.classList.toggle("on",!!n),!n)return;a("tdlghead").textContent=i("tool.town.dlgHead",{id:n.id});const h=a("tdlgnodes");h.innerHTML="",n.nodes.forEach((d,u)=>{var te,E,Ne,We;const p=document.createElement("div");p.className="node";const I=y=>`<option value=""${y===null?" selected":""}>${g(i("tool.town.choiceEnd"))}</option>`+n.nodes.map(z=>`<option value="${g(z.id)}"${y===z.id?" selected":""}>→ ${g(z.id)}</option>`).join("");p.innerHTML=`
        <div class="nid">#${g(d.id)}${u===0?" "+g(i("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${g(d.say)}</textarea>
        <div class="chrow sub"><span>${g(i("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${g(((te=d.when)==null?void 0:te.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${g(((E=d.when)==null?void 0:E.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${g(((Ne=d.when)==null?void 0:Ne.item)??"")}" /></div>
        ${N("n",d.effects)}
        ${(d.choices??[]).map((y,z)=>{var F,Me,ke;return`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${z}" value="${g(y.text)}" />
          <select data-act="cgoto" data-ci="${z}">${I(y.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${z}">✕</button></div>
        <div class="chrow sub"><span>${g(i("tool.town.choiceWhen"))}</span>
          <input type="text" data-act="cwflag" data-ci="${z}" style="width:5em" placeholder="flag" value="${g(((F=y.when)==null?void 0:F.flag)??"")}" />
          <input type="text" data-act="cwnot" data-ci="${z}" style="width:5em" placeholder="notFlag" value="${g(((Me=y.when)==null?void 0:Me.notFlag)??"")}" />
          <input type="text" data-act="cwitem" data-ci="${z}" style="width:5em" placeholder="item" value="${g(((ke=y.when)==null?void 0:ke.item)??"")}" /></div>
        ${N(`c${z}`,y.effects)}`}).join("")}
        ${(d.choices??[]).length<4?`<button type="button" data-act="caddc">${g(i("tool.town.addChoice"))}</button>`:""}`;const L=()=>{C(),ue(),k()};p.querySelector('[data-act="say"]').addEventListener("change",y=>{d.say=y.target.value||d.say,L()});const J=(y,z)=>{const F={...d.when??{}};z.trim()?F[y]=z.trim():delete F[y],d.when=Object.keys(F).length?F:void 0,L()};p.querySelector('[data-act="wflag"]').addEventListener("change",y=>J("flag",y.target.value)),p.querySelector('[data-act="wnot"]').addEventListener("change",y=>J("notFlag",y.target.value)),p.querySelector('[data-act="witem"]').addEventListener("change",y=>J("item",y.target.value)),p.querySelector('[data-act="delnode"]').addEventListener("click",()=>{n.nodes.splice(u,1),n.nodes.length||n.nodes.push({id:"root",say:"……"});for(const y of n.nodes)for(const z of y.choices??[])z.goto===d.id&&(z.goto=null);C(),we(),ue(),k()});for(const y of Array.from(p.querySelectorAll('[data-act="ctext"]')))y.addEventListener("change",()=>{const z=d.choices[Number(y.dataset.ci)];z.text=y.value||z.text,L()});for(const y of Array.from(p.querySelectorAll('[data-act="cgoto"]')))y.addEventListener("change",()=>{d.choices[Number(y.dataset.ci)].goto=y.value===""?null:y.value,L()});for(const y of Array.from(p.querySelectorAll('[data-act="cdel"]')))y.addEventListener("click",()=>{d.choices.splice(Number(y.dataset.ci),1),d.choices.length||(d.choices=void 0),C(),we(),ue(),k()});const se=(y,z,F)=>{const Me=d.choices[y],ke={...Me.when??{}};F.trim()?ke[z]=F.trim():delete ke[z],Me.when=Object.keys(ke).length?ke:void 0,L()};for(const[y,z]of[["cwflag","flag"],["cwnot","notFlag"],["cwitem","item"]])for(const F of Array.from(p.querySelectorAll(`[data-act="${y}"]`)))F.addEventListener("change",()=>se(Number(F.dataset.ci),z,F.value));const K=y=>y==="n"?{get:()=>d.effects,set:z=>{d.effects=z}}:(()=>{const z=d.choices[Number(y.slice(1))];return{get:()=>z.effects,set:F=>{z.effects=F}}})();for(const y of Array.from(p.querySelectorAll('[data-act="fxdel"]')))y.addEventListener("click",()=>{const z=K(y.dataset.site),F=[...z.get()??[]];F.splice(Number(y.dataset.fi),1),z.set(F.length?F:void 0),C(),we(),ue(),k()});for(const y of Array.from(p.querySelectorAll('[data-act="fxadd"]')))y.addEventListener("click",()=>{const z=y.dataset.site,F=p.querySelector(`[data-act="fxkind"][data-site="${z}"]`),Me=p.querySelector(`[data-act="fxval"][data-site="${z}"]`),ke=_(F.value,Me.value);if(!ke){M(i("tool.town.fxValPh"),!0);return}const nt=K(z);nt.set([...nt.get()??[],ke]),C(),we(),ue(),k()});(We=p.querySelector('[data-act="caddc"]'))==null||We.addEventListener("click",()=>{d.choices=[...d.choices??[],{text:"…",goto:null}],C(),we(),k()}),h.appendChild(p)}),ye()}a("tdlgaddnode").addEventListener("click",()=>{const s=H();!s||s.nodes.length>=32||(s.nodes.push({id:$(s),say:"……"}),C(),we(),k())});const et=()=>({flags:new Set(a("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(a("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});let he=null,pe=[];const ht=()=>he?{flags:he.flags,items:he.items}:et();function ye(){const s=a("tpv"),n=H();if(!n){s.innerHTML="";return}const h=Vt();let d=`<div class="row"><button type="button" data-act="pvstart">${g(i("tool.town.pvRestart"))}</button></div>`;const u=pe.length?`<div class="pvend">${g(i("tool.town.pvFx"))} ${pe.map(p=>`<span class="fxchip">${g(p.kind==="giveGold"?i("tool.town.pvGold",{n:p.amount}):ee(p))}</span>`).join("")}</div>`:"";if(V==="end")d+=`<div class="pvsay">…</div>${u}<div class="pvend">${g(i("tool.town.pvEnd"))}</div>`;else if(V!==null){const p=jt(n,V);if(!p)return V=null,ye();d+=`<div class="pvsay">🗨 ${g(hn(p.say,p.says,h))}</div>${u}`;const I=so(p,ht());I.length?d+=I.map(L=>`<button type="button" data-act="pvc" data-ci="${(p.choices??[]).indexOf(L)}">${g(hn(L.text,L.texts,h))}</button>`).join(""):d+=`<div class="pvend">${g(i("tool.town.pvEnd"))}</div>`}s.innerHTML=d,s.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{he=mn(et()),pe=[];const p=lo(n,ht());V=p?p.id:"end",p&&pe.push(...Bt(p.effects,he)),ye()});for(const p of Array.from(s.querySelectorAll('[data-act="pvc"]')))p.addEventListener("click",()=>{var se;const I=V!==null&&V!=="end"?jt(n,V):null,L=(se=I==null?void 0:I.choices)==null?void 0:se[Number(p.dataset.ci)];if(!L)return;he||(he=mn(et())),pe.push(...Bt(L.effects,he));const J=L.goto!==null?jt(n,L.goto):null;V=J?J.id:"end",J&&pe.push(...Bt(J.effects,he)),ye()})}a("tpvflags").addEventListener("change",ye),a("tpvitems").addEventListener("change",ye);function ue(){const s=a("tlint"),n=Rt(f);s.innerHTML=n.length?n.map(h=>h.level==="error"?`<div class="warn" style="color:#ff8a80">⛔ ${g(i(h.key,h.params))}</div>`:`<div class="warn">⚠ ${g(i(h.key,h.params))}</div>`).join(""):`<div class="ok">${g(i("tool.town.lint.ok"))}</div>`}async function de(){try{const s=await(await fetch(G("/api/tables/proposals"))).json();Dt(a("tprops"),s.proposals??[],{tag:()=>i("tool.town.capTag"),onView:n=>{$t(n)},onPromote:n=>{Ce(n)},onArchive:n=>{tt(n)}}),a("tplive").textContent="· live",a("tlive").textContent="· live"}catch{a("tprops").innerHTML=`<div class="live">${g(i("tool.town.noApi"))}</div>`,a("tplive").textContent=i("tool.common.devOff"),a("tlive").textContent=i("tool.common.devOff")}qe()}function qe(){var n;const s=a("ttruth");s.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${g(ie)}</span>
      <div class="row"><button type="button" data-act="truth-load">${g(i("tool.town.loadTruth"))}</button></div></div>`,(n=s.querySelector('[data-act="truth-load"]'))==null||n.addEventListener("click",()=>{oe=!1,ge(!0).then(()=>M(i("tool.town.loaded")))})}async function $t(s){var n,h;try{const d=await(await fetch(G(`/api/tables/proposal?id=${encodeURIComponent(s)}`))).json(),u=(h=(n=d.docs)==null?void 0:n[0])==null?void 0:h.tables.town;if(u===void 0)throw new Error(i("tool.town.propNoTown"));const p=Ze.parse(u);r=null,j=null,oe=!0,X(p),M(i("tool.town.loadedProp",{name:d.docs[0].name}))}catch(d){M(d.message,!0)}}async function Ce(s){try{await $e(G("/api/tables/promote"),{proposalId:s}),M(i("tool.town.promoted")),oe=!1,de(),ge(!0)}catch(n){M(n.message,!0)}}async function tt(s){try{await $e(G("/api/tables/archive"),{proposalId:s}),M(i("tool.town.archived")),de()}catch(n){M(n.message,!0)}}async function De(){var p,I;let s;try{f.name=a("tname").value.trim()||f.name,s=Ze.parse(f)}catch(L){M(i("tool.town.zodFail",{msg:L.message.slice(0,200)}),!0);return}const n=Rt(s).filter(L=>L.level==="error");if(n.length){M(i("tool.town.errBlock",{n:n.length}),!0),ue();return}const h=a("tlabel").value.trim()||s.name;let d={};try{const L=await fetch(G("/api/tables/truth"));L.ok&&(d=((I=(p=(await L.json()).docs)==null?void 0:p[0])==null?void 0:I.tables)??{})}catch{}const u={formatVersion:Sn,id:"tables",name:h,tables:{...d,town:s},createdAt:xn(),updatedAt:xn()};try{await $e(G("/api/tables/proposal"),{tables:u,label:h,createdBy:"user"}),M(i("tool.town.saved",{name:h})),de()}catch(L){M(i("tool.town.saveFail",{msg:L.message}),!0)}}a("tsave").addEventListener("click",()=>{De()}),a("tload").addEventListener("click",()=>{oe=!1,ge(!0).then(()=>M(i("tool.town.loaded")))}),a("tlabel").addEventListener("input",k),a("tname").addEventListener("change",()=>{f.name=a("tname").value.trim()||f.name,C(),k()});function S(){a("tname").value=f.name,Ee(),Pe(),Q(),l(),we(),ue()}const Ge=R.events.on("tables",()=>{de(),ge()}),Se=Gt(()=>{Wt(A.querySelector("#townapp")),S(),de()});return window.cdForgeTown={plan:()=>f,setPlan:s=>X(Ze.parse(s),{markDirty:!0}),tool:s=>{B=s,Pe(),Q()},click:(s,n)=>Be(s,n),select:(s,n)=>(r=xe(s,n),S(),r),openDialog:s=>{const n=f.npcs.find(h=>h.id===s);return n&&W(n),(n==null?void 0:n.dialog)??null},lint:()=>Rt(f),save:()=>De(),promote:s=>Ce(s),refresh:()=>de(),reload:(s=!0)=>ge(s),dirty:()=>oe},be()?(S(),de()):ge(!0).then(()=>{de()}),{setVisible(s){a("townapp").classList.toggle("on",s),s&&S()},dispose(){Ge(),Se(),k(),delete window.cdForgeTown}}}const D=A=>A.replace(/[&<>"]/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[R]),kn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),$n=A=>A===En?"comduct":A.replace("/","--"),Ln=["fire","ice","earth","poison","holy"],qt={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"},mo=24;function vo(A,R){const{wapi:G,postJson:$e}=R.api,a=c=>A.querySelector(`#${c}`);function M(c,l=!1){const b=a("pmsg");b.textContent=c,b.style.color=l?"#ffd166":"#7fd17f",window.setTimeout(()=>{b.textContent===c&&(b.textContent="")},5e3)}let f=[],B=[],q=-1,Y="any",ne=!1,ce="";const r="cdForgePinM3";function w(){try{sessionStorage.setItem(r,JSON.stringify({v:1,world:R.world(),pins:f,dirty:ne,label:a("plabel").value}))}catch{}}function j(){try{const c=sessionStorage.getItem(r);if(!c)return!1;const l=JSON.parse(c);return l.v!==1||l.world!==R.world()||!Array.isArray(l.pins)?!1:(f=l.pins,ne=!!l.dirty,l.label&&(a("plabel").value=l.label),!0)}catch{return!1}}function V(){ne=!0}async function oe(){try{const c=await fetch(G("/api/forge/truth"));if(c.ok){B=((await c.json()).prefabs??[]).flatMap(b=>{try{return[He.parse(b)]}catch{return[]}});return}}catch{}try{const c=await fetch(G(`/packs/${$n(R.world())}.json`));c.ok&&(B=((await c.json()).prefabs??[]).flatMap(b=>{try{return[He.parse(b)]}catch{return[]}}))}catch{}}async function ie(){var c,l,b,x;try{const W=await fetch(G("/api/tables/truth"));if(W.ok){const P=(b=(l=(c=(await W.json()).docs)==null?void 0:c[0])==null?void 0:l.tables)==null?void 0:b.pins;if(P!==void 0)return{p:ut.parse(P),src:"truth"}}}catch{}try{const W=await fetch(G(`/packs/${$n(R.world())}.json`));if(W.ok){const P=(x=(await W.json()).tables)==null?void 0:x.pins;if(P!==void 0)return{p:ut.parse(P),src:"pack"}}}catch{}return null}async function Le(c=!1){if(ne&&!c)return;let l=null;try{l=await ie()}catch(b){M(i("tool.pin.zodFail",{msg:b.message.slice(0,200)}),!0);return}l?(ce=i("tool.pin.truthMeta",{src:l.src,n:l.p.length}),ne=!1,q=l.p.length?0:-1,f=l.p):(ce=i("tool.pin.truthNew"),ne=!1,f=[],q=-1),re(),w(),Ee()}const k=c=>{var b;const l=B.find(x=>x.id===c);return l?((b=l.names)==null?void 0:b[Vt()])??l.name:c};function be(c){const l=B.filter(x=>!x.meta.tags.includes("town")&&!x.meta.tags.includes("town-interior")),b=l.map(x=>`<option value="${D(x.id)}"${x.id===c?" selected":""}>${D(k(x.id))}（${x.size.w}×${x.size.d}）</option>`);return c&&!l.some(x=>x.id===c)&&b.unshift(`<option value="${D(c)}" selected>⚠ ${D(c)}</option>`),b.join("")}function C(){const c=a("ppins");c.innerHTML="",f.length||(c.innerHTML=`<div class="sub">${D(i("tool.pin.empty"))}</div>`),f.forEach((l,b)=>{var ee,fe;const x=document.createElement("div");x.className="pincard"+(b===q?" sel":"");const W=["always","depths","once"].map(N=>`<option value="${N}"${l.rule===N?" selected":""}>${D(i(`tool.pin.rule.${N}`))}</option>`).join(""),P=[`<option value=""${l.theme?"":" selected"}>${D(i("tool.pin.themeAny"))}</option>`].concat(Ln.map(N=>`<option value="${N}"${l.theme===N?" selected":""}>${D(i(`elem.${N}`))}</option>`)).join("");x.innerHTML=`
        <div class="row"><b>📌 ${b+1}</b>
          <select data-act="prefab">${be(l.prefab)}</select>
          <button type="button" data-act="del" title="${D(i("tool.pin.delete"))}">🗑</button></div>
        <div class="kv"><span class="lbl">${D(i("tool.pin.ruleLabel"))}</span><select data-act="rule">${W}</select></div>
        <div class="kv" data-show="depths"><span class="lbl">${D(i("tool.pin.depthsLabel"))}</span>
          <input type="text" data-act="depths" placeholder="${D(i("tool.pin.depthsPh"))}" value="${D((l.depths??[]).join(", "))}" /></div>
        <div class="kv" data-show="range"><span class="lbl">${D(i("tool.pin.rangeLabel"))}</span>
          <input type="number" class="num" data-act="r0" min="1" max="99" value="${((ee=l.range)==null?void 0:ee[0])??1}" /> −
          <input type="number" class="num" data-act="r1" min="1" max="99" value="${((fe=l.range)==null?void 0:fe[1])??99}" /></div>
        <div class="kv"><span class="lbl">${D(i("tool.pin.themeLabel"))}</span><select data-act="theme">${P}</select></div>
        <div class="sub">${D(i("tool.pin.introLabel"))}</div>
        <textarea data-act="intro" placeholder="${D(i("tool.pin.introPh"))}">${D(l.intro??"")}</textarea>`,x.querySelector('[data-show="depths"]').style.display=l.rule==="depths"?"flex":"none",x.querySelector('[data-show="range"]').style.display=l.rule==="depths"?"none":"flex";const H=()=>{V(),re(),w()};x.addEventListener("click",()=>{q!==b&&(q=b,re())}),x.querySelector('[data-act="prefab"]').addEventListener("change",N=>{l.prefab=N.target.value,H()}),x.querySelector('[data-act="rule"]').addEventListener("change",N=>{var ae;l.rule=N.target.value,l.rule==="depths"?(delete l.range,l.depths=(ae=l.depths)!=null&&ae.length?l.depths:[5]):(delete l.depths,l.range=l.range??[1,99]),H()}),x.querySelector('[data-act="depths"]').addEventListener("change",N=>{const ae=N.target.value.split(/[\s,、]+/).map(_=>Number(_)).filter(_=>Number.isInteger(_)&&_>=1&&_<=99);l.depths=[...new Set(ae)].sort((_,we)=>_-we),H()});const $=(N,ae)=>{const _=l.range??[1,99];_[N]=Math.max(1,Math.min(99,ae||_[N])),_[0]>_[1]&&(_[N===0?1:0]=_[N]),l.range=_,H()};x.querySelector('[data-act="r0"]').addEventListener("change",N=>$(0,Number(N.target.value))),x.querySelector('[data-act="r1"]').addEventListener("change",N=>$(1,Number(N.target.value))),x.querySelector('[data-act="theme"]').addEventListener("change",N=>{const ae=N.target.value;ae?l.theme=ae:delete l.theme,H()}),x.querySelector('[data-act="intro"]').addEventListener("change",N=>{const ae=N.target.value.trim();ae!==(l.intro??"")&&delete l.intros,ae?l.intro=ae.slice(0,200):(delete l.intro,delete l.intros),V(),w()}),x.querySelector('[data-act="del"]').addEventListener("click",N=>{N.stopPropagation(),f.splice(b,1),q>=f.length&&(q=f.length-1),V(),re(),w()}),c.appendChild(x)}),a("paddpin").disabled=f.length>=vn}a("paddpin").addEventListener("click",()=>{if(f.length>=vn){M(i("tool.pin.full"),!0);return}const c=B.find(l=>!l.meta.tags.includes("town")&&!l.meta.tags.includes("town-interior"));f.push({prefab:(c==null?void 0:c.id)??"prefab-id",rule:"depths",depths:[5]}),q=f.length-1,V(),re(),w()});function X(){const c=a("plint"),l=bn(f,B.map(b=>({id:b.id,w:b.size.w,d:b.size.d})));for(const b of f){const x=B.find(W=>W.id===b.prefab);x&&(x.meta.tags.includes("town")||x.meta.tags.includes("town-interior"))&&l.push({level:"warn",key:"tool.pin.lint.townTag",params:{id:b.prefab}})}c.innerHTML=l.length?l.map(b=>`<div class="warn">⚠ ${D(i(b.key,b.params))}</div>`).join(""):`<div class="ok">${D(i("tool.pin.lint.ok"))}</div>`}function Re(){const c=a("ppv"),l=Y==="any"?null:Y;let b="";for(let x=1;x<=mo;x++){const W=gn(f,x,l),P=W.map(H=>{const $=f.indexOf(H),ee=H.theme?qt[H.theme]:"#5b9bff";return`<button type="button" class="pbadge${$===q?" sel":""}" data-i="${$}" style="border-color:${ee}">${D(k(H.prefab))}${H.intro?" 💬":""}</button>`}).join("");b+=`<div class="pvrow${W.length?" hit":""}"><span class="d">${x}F</span>${P||`<span class="none">${D(i("tool.pin.pvNone"))}</span>`}</div>`}c.innerHTML=b;for(const x of Array.from(c.querySelectorAll(".pbadge")))x.addEventListener("click",()=>{q=Number(x.dataset.i),re()})}function ge(){const c=a("pthemes");c.innerHTML=`<span class="sub">${D(i("tool.pin.pvTheme"))}</span>`;for(const l of["any",...Ln]){const b=document.createElement("button");b.className="chip"+(Y===l?" on":""),b.style.background=l==="any"?"#9aa4b5":qt[l],b.title=l==="any"?i("tool.pin.themeAny"):i(`elem.${l}`),b.addEventListener("click",()=>{Y=l,Re(),ge()}),c.appendChild(b)}}function U(){const c=a("ppf"),l=f[q],b=l?B.find(P=>P.id===l.prefab):void 0;if(!b){c.innerHTML=`<div class="sub">${D(i("tool.pin.pfNone"))}</div>`;return}const x=(P,H)=>{const $=b.props.find(ee=>ee.x===P&&ee.y===H);return $?$.kind.startsWith("chest")?"📦":$.kind.startsWith("shrine")?"⛲":$.kind.startsWith("portal")?"◎":$.kind==="item"?"✦":$.kind==="trap"?"✖":"·":null};let W="";for(let P=0;P<b.size.d;P++)for(let H=0;H<b.size.w;H++){const $=b.cells[P][H];let ee=$.kind==="wall"?$.breakable?"#5e4a33":$.pillar||$.low?"#4a5468":"#3a4356":"#223048";$.kind==="floor"&&$.floorFeat==="water"&&(ee="#2b4a6f"),$.kind==="floor"&&$.floorFeat==="slip"&&(ee="#9fc4d8"),$.kind==="floor"&&$.hazard&&(ee=qt[$.hazard.element]??ee);const fe=b.ports.some(_=>_.x===H&&_.y===P),ae=b.spawns.find(_=>_.x===H&&_.y===P)?"🧍":x(H,P)??(fe?"○":($.height??0)>0?String($.height):"");W+=`<div class="pc${fe?" port":""}" style="background:${ee}">${ae}</div>`}c.innerHTML=`<div class="sub"><b>${D(k(b.id))}</b>（${b.size.w}×${b.size.d}・depth ${b.meta.depthRange[0]}-${b.meta.depthRange[1]}）</div>
      <div class="pfgrid" style="grid-template-columns:repeat(${b.size.w}, 18px)">${W}</div>`}async function Z(){try{const c=await(await fetch(G("/api/tables/proposals"))).json();Dt(a("pprops"),c.proposals??[],{tag:()=>i("tool.pin.capTag"),onView:l=>{je(l)},onPromote:l=>{xe(l)},onArchive:l=>{Be(l)}}),a("pplive").textContent="· live",a("plive").textContent="· live"}catch{a("pprops").innerHTML=`<div class="live">${D(i("tool.pin.noApi"))}</div>`,a("pplive").textContent=i("tool.common.devOff"),a("plive").textContent=i("tool.common.devOff")}Ee()}function Ee(){var l;const c=a("ptruth");c.innerHTML=`<div class="card"><b>tables.pins</b><span class="id">${D(ce)}</span>
      <div class="row"><button type="button" data-act="truth-load">${D(i("tool.pin.loadTruth"))}</button></div></div>`,(l=c.querySelector('[data-act="truth-load"]'))==null||l.addEventListener("click",()=>{ne=!1,Le(!0).then(()=>M(i("tool.pin.loaded")))})}async function je(c){var l,b;try{const x=await(await fetch(G(`/api/tables/proposal?id=${encodeURIComponent(c)}`))).json(),W=(b=(l=x.docs)==null?void 0:l[0])==null?void 0:b.tables.pins;if(W===void 0)throw new Error(i("tool.pin.propNoPins"));const P=ut.parse(W);ne=!0,f=P,q=P.length?0:-1,re(),w(),M(i("tool.pin.loadedProp",{name:x.docs[0].name}))}catch(x){M(x.message,!0)}}async function xe(c){try{await $e(G("/api/tables/promote"),{proposalId:c}),M(i("tool.pin.promoted")),ne=!1,Z(),Le(!0)}catch(l){M(l.message,!0)}}async function Be(c){try{await $e(G("/api/tables/archive"),{proposalId:c}),M(i("tool.pin.archived")),Z()}catch(l){M(l.message,!0)}}async function Ae(){var P,H;let c=[];try{f.length&&(c=ut.parse(f))}catch($){M(i("tool.pin.zodFail",{msg:$.message.slice(0,200)}),!0);return}const l=a("plabel").value.trim()||i("tool.pin.capTag");let b={};try{const $=await fetch(G("/api/tables/truth"));$.ok&&(b=((H=(P=(await $.json()).docs)==null?void 0:P[0])==null?void 0:H.tables)??{})}catch{}const x={...b};delete x.pins,c.length&&(x.pins=c);const W={formatVersion:Sn,id:"tables",name:l,tables:x,createdAt:kn(),updatedAt:kn()};try{await $e(G("/api/tables/proposal"),{tables:W,label:l,createdBy:"user"}),M(i("tool.pin.saved",{name:l})),Z()}catch($){M(i("tool.pin.saveFail",{msg:$.message}),!0)}}a("psave").addEventListener("click",()=>{Ae()}),a("pload").addEventListener("click",()=>{ne=!1,Le(!0).then(()=>M(i("tool.pin.loaded")))}),a("plabel").addEventListener("input",w);function re(){C(),X(),ge(),Re(),U()}const Pe=R.events.on("tables",()=>{Z(),Le()}),Q=Gt(()=>{Wt(A.querySelector("#pinapp")),re(),Z()});return window.cdForgePin={pins:()=>f,setPins:c=>{f=c?ut.parse(c):[],q=f.length?0:-1,V(),re(),w()},addPin:()=>{a("paddpin").click()},select:c=>{q=c,re()},preview:(c,l)=>gn(f,c,l??null).map(b=>b.prefab),lint:()=>bn(f,B.map(c=>({id:c.id,w:c.size.w,d:c.size.d}))),prefabs:()=>B.map(c=>c.id),save:()=>Ae(),promote:c=>xe(c),refresh:()=>Z(),reload:(c=!0)=>Le(c),dirty:()=>ne},oe().then(()=>{j()?(re(),Z()):Le(!0).then(()=>{Z()})}),{setVisible(c){a("pinapp").classList.toggle("on",c),c&&re()},dispose(){Pe(),Q(),w(),delete window.cdForgePin}}}const le=A=>i(`tool.forge.brush.${A}`),bo=A=>{var R;return((R=A.names)==null?void 0:R[Vt()])??A.name};function ft(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const Ao={id:"forge",async mount(A,R){const{wapi:G,postJson:$e}=R.api;A.innerHTML=ro,Wt(A);const a=e=>A.querySelector(`#${e}`),M=ho(A,R),f=vo(A,R);let B="room";function q(e){B=e,a("app").style.display=e==="room"?"flex":"none",M.setVisible(e==="town"),f.setVisible(e==="pin"),a("modeRoom").classList.toggle("on",e==="room"),a("modeTown").classList.toggle("on",e==="town"),a("modePin").classList.toggle("on",e==="pin");try{sessionStorage.setItem("cdForgeModeM4",e)}catch{}}a("modeRoom").addEventListener("click",()=>q("room")),a("modeTown").addEventListener("click",()=>q("town")),a("modePin").addEventListener("click",()=>q("pin"));const Y=document.createElement("button");Y.type="button",Y.id="fplay",Y.hidden=!0,Y.style.marginLeft="auto",Y.addEventListener("click",()=>window.open(io(R.world()),"_blank"));const ne=()=>{Y.textContent=i("tool.studio.playNow"),Y.title=i("tool.studio.playNowTitle")};ne(),a("fmodes").appendChild(Y);const ce="plain";let r=Ft("first-keep","はじまりの砦",7,6,ft()),w="floor",j="brush",V="fire",oe=6,ie,Le=null;const k=new Qn,be=()=>({element:V,power:oe,monType:ie}),C="cdForgeP2";function X(){try{sessionStorage.setItem(C,JSON.stringify({v:1,pf:r,brush:w,shape:j,hazardElement:V,hazardPower:oe,spawnType:ie??null,cam:{yaw:Q,pitch:c,dist:l}}))}catch{}}function Re(){var e;try{const t=sessionStorage.getItem(C);if(!t)return!1;const o=JSON.parse(t);return o.v!==1||!((e=o.pf)!=null&&e.size)||!Array.isArray(o.pf.cells)?!1:(r=o.pf,w=o.brush??"floor",j=o.shape??"brush",V=o.hazardElement??"fire",oe=o.hazardPower??6,ie=o.spawnType??void 0,o.cam&&(Q=o.cam.yaw,c=o.cam.pitch,l=o.cam.dist),!0)}catch{return!1}}const ge=a("stage"),U=new an({antialias:!0});U.toneMapping=qn,U.toneMappingExposure=1.22,U.setPixelRatio(Math.min(devicePixelRatio,2)),ge.appendChild(U.domElement);const Z=new sn,Ee=new ln(42,1,.05,200),je=rn[ce],xe=Dn(je);Z.background=new dn(je.bg);const Be=new Gn(xe.hemiSky,xe.hemiGround,Math.max(.5,xe.hemiI)),Ae=new Ht(xe.sunCol,Math.max(.8,xe.sunI));Ae.position.set(3,4.2,2.4);const re=new Ht(xe.fillCol,.35);re.position.set(-2.6,1.4,-1.8),Z.add(Be,Ae,re);const Pe=new Wn(document.createElement("div"),()=>{});let Q=0,c=.72,l=9;const b=new Ye(3,0,2.5);function x(){b.set((r.size.w-1)/2,.3,(r.size.d-1)/2),l=Math.max(r.size.w,r.size.d)*1.35+2}function W(){const e=ge.clientWidth,t=ge.clientHeight;U.setSize(e,t),Ee.aspect=e/t,Ee.updateProjectionMatrix()}R.own(window,"resize",W);let P=null,H=null;function $(){P&&Z.remove(P),H&&Z.remove(H),P=Pe.buildPrefabPreview(ce,r),H=new rt;for(const e of r.spawns)H.add(et(e));Z.add(P,H),ae()}let ee=!1,fe=null;const N=new Xe({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function ae(){if(fe&&(Z.remove(fe),fe=null),!ee)return;fe=new rt;const e=r.ports.length?eo(r,r.ports[0],!1):new Set;for(let t=0;t<r.size.d;t++)for(let o=0;o<r.size.w;o++){const m=r.cells[t][o];if(m.kind!=="floor"||m.floorFeat==="water"||e.has(`${o},${t}`))continue;const v=new Oe(new lt(.96,.06,.96),N);v.position.set(o,(m.height??0)*xt+.34,t),fe.add(v)}Z.add(fe)}function _(e){const t=e?Ot.find(o=>o.name===e):null;return{kind:"monster",name:e??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:t==null?void 0:t.size,heads:t==null?void 0:t.heads,element:t==null?void 0:t.element}}function we(e){const{geo:t,spots:o}=Xn(e),m=new rt;m.add(new Oe(t,Yn()));for(const v of o){const T=new Oe(new lt(1,1,1),new Xe({color:v.c}));T.position.set(v.x,v.y,v.z),T.scale.set(v.sx,v.sy,v.sz),m.add(T)}return m}function et(e){var v,T;const t=new rt,o=new Oe(new lt(.94,.05,.94),new Xe({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(o.position.y=.03,t.add(o),e.monType&&Ot.some(O=>O.name===e.monType)){const O=_(e.monType),Ie=we(O),ve=((O.size??1)-1)/2;Ie.position.set(ve,0,ve),t.add(Ie)}else{const O=new Oe(new Kn(.3),new Xe({color:11702236}));O.position.y=.62,t.add(O)}const m=(((T=(v=r.cells[e.y])==null?void 0:v[e.x])==null?void 0:T.height)??0)*xt;return t.position.set(e.x,m,e.y),t}const he=new Xe({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),pe=new Oe(new lt(1,1,1),he);pe.visible=!1,Z.add(pe);const ht=new Xe({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),ye=new Oe(new lt(1,1,1),ht);ye.visible=!1,Z.add(ye);function ue(e,t){var m,v;if(!e){pe.visible=!1;return}const o=(((v=(m=r.cells[e.y])==null?void 0:m[e.x])==null?void 0:v.height)??0)*xt;pe.visible=!0,pe.scale.set(1.04,.14,1.04),pe.position.set(e.x,o+.4,e.y),he.color.setHex(t||w==="erase"?14707290:6003711)}function de(e,t){if(!e||!t){ye.visible=!1;return}const o=Math.min(e.x,t.x),m=Math.max(e.x,t.x),v=Math.min(e.y,t.y),T=Math.max(e.y,t.y);ye.visible=!0,ye.scale.set(m-o+1.04,.3,T-v+1.04),ye.position.set((o+m)/2,.3,(v+T)/2)}const qe=new _n,$t=new Jn(new Ye(0,1,0),0);function Ce(e,t){const o=U.domElement.getBoundingClientRect(),m=new Un((e-o.left)/o.width*2-1,-((t-o.top)/o.height*2-1));qe.setFromCamera(m,Ee);const v=(ve,Ke)=>ve>=0&&Ke>=0&&ve<r.size.w&&Ke<r.size.d;if(P){const ve=qe.intersectObject(P,!0);for(const Ke of ve){const Nt=Ke.point.clone();Ke.face&&Nt.addScaledVector(Ke.face.normal,-.05);const nn=Math.round(Nt.x),on=Math.round(Nt.z);if(v(nn,on))return{x:nn,y:on}}}const T=new Ye;if(!qe.ray.intersectPlane($t,T))return null;const O=Math.round(T.x),Ie=Math.round(T.z);return v(O,Ie)?{x:O,y:Ie}:null}const tt=a("msg");let De=0;function S(e,t=!1){tt.textContent=e,tt.style.color=t?"#ffd166":"#7fd17f",clearTimeout(De);const o=A.querySelector("#mtoast");o&&y.matches&&(o.textContent=e,o.style.display="block",o.style.borderColor=t?"#ffd166":"#2b3547"),De=window.setTimeout(()=>{tt.textContent="",o&&(o.style.display="none")},4500)}function Ge(e){a("guide").style.display=e?"block":"none"}a("help").addEventListener("click",()=>Ge(!0));function Se(e){e&&($(),Ge(!1))}function me(){k.commit(r)&&(n(),Je(),X())}function s(e,t){r=e,_e(),x(),$(),me(),t&&S(t)}function n(){a("undo").disabled=!k.canUndo(),a("redo").disabled=!k.canRedo();const e=A.querySelector("#mUndo");e&&(e.disabled=!k.canUndo(),a("mRedo").disabled=!k.canRedo())}function h(){const e=k.undo();e&&(r=e,_e(),$(),n(),Je(),X(),S(i("tool.common.undone")))}function d(){const e=k.redo();e&&(r=e,_e(),$(),n(),Je(),X(),S(i("tool.common.redone")))}a("undo").addEventListener("click",h),a("redo").addEventListener("click",d);let u="none",p=!1,I=0,L=0,J=new Set,se=null,K=null,te=null;function E(e,t,o){const m=`${t},${o}`;J.has(m)||(J.add(m),Se(wt(r,e,t,o,be())),e==="port"&&!(t===0||o===0||t===r.size.w-1||o===r.size.d-1)&&S(i("tool.forge.portEdgeOnly"),!0))}function Ne(e,t){if(se&&(se.x!==t.x||se.y!==t.y)){let{x:o,y:m}=se;const v=Math.max(Math.abs(t.x-o),Math.abs(t.y-m));for(let T=1;T<=v;T++)E(e,Math.round(o+(t.x-o)*(T/v)),Math.round(m+(t.y-m)*(T/v)))}else E(e,t.x,t.y);se=t}U.domElement.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;U.domElement.setPointerCapture(e.pointerId),I=e.clientX,L=e.clientY;const t=Ce(e.clientX,e.clientY);if(e.button===2){t?(u="erase",J=new Set,se=null,Ne("erase",t)):u="orbit";return}if(e.button===1||p||!t){u="orbit";return}if(e.button===0){if(j==="rect"){u="rect",K=t,te=t,de(K,te);return}if(j==="fill"){Se(At(r,w,t.x,t.y,be())),me();return}u="paint",J=new Set,se=null,Ne(w,t)}});let We=null;U.domElement.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const t=Ce(e.clientX,e.clientY);We=t,mt(t),ue(t,u==="erase"),u==="orbit"?(Q+=(e.clientX-I)*.008,c=Math.min(1.4,Math.max(.15,c+(e.clientY-L)*.006))):(u==="paint"||u==="erase")&&t?Ne(u==="erase"?"erase":w,t):u==="rect"&&t&&(te=t,de(K,te)),I=e.clientX,L=e.clientY}),U.domElement.addEventListener("pointerup",e=>{e.pointerType!=="touch"&&(u==="rect"&&K&&te?(Se(It(r,w,K.x,K.y,te.x,te.y,be())),me()):u==="paint"||u==="erase"?me():u==="orbit"&&X(),u="none",K=te=null,se=null,de(null,null))}),U.domElement.addEventListener("pointerleave",()=>{ue(null,!1),mt(null)}),U.domElement.addEventListener("contextmenu",e=>e.preventDefault()),U.domElement.addEventListener("wheel",e=>{e.preventDefault(),l=Math.min(40,Math.max(3,l*(e.deltaY>0?1.08:.93)))},{passive:!1});const y=matchMedia("(max-width: 900px)");function z(){const e=Math.round(Q/(Math.PI/4))*(Math.PI/4);Math.abs(Q-e)<5*Math.PI/180&&(Q=e)}let F="none",Me=null;function ke(){F="none",Me=null,K=te=null,se=null,de(null,null),ue(null,!1)}to(U.domElement,{strokeStart(e,t){const o=Ce(e,t);if(!o){F="none";return}if(Me=JSON.stringify(r),j==="rect"){F="rect",K=o,te=o,de(K,te);return}if(F="paint",J=new Set,se=null,j==="fill"){Se(At(r,w,o.x,o.y,be())),J.add(`${o.x},${o.y}`);return}Ne(w,o),ue(o,w==="erase")},strokeMove(e,t){const o=Ce(e,t);o&&(F==="rect"?(te=o,de(K,te)):F==="paint"&&j==="brush"&&(Ne(w,o),ue(o,w==="erase")))},strokeEnd(){F==="rect"&&K&&te&&Se(It(r,w,K.x,K.y,te.x,te.y,be())),F!=="none"&&(me(),ct()),ke()},strokeCancel(){F==="paint"&&Me&&(r=JSON.parse(Me),$(),Je()),ke()},orbit(e,t){Q+=e*.008,c=Math.min(1.4,Math.max(.15,c+t*.006))},orbitEnd(){z(),X()},pinch(e){l=Math.min(40,Math.max(3,l/e))},undoTap(){h(),ct()},redoTap(){d(),ct()},longPress(e,t){const o=Ce(e,t);o&&(ue(o,!1),S(i("tool.forge.cellInfo",{x:o.x,y:o.y,desc:nt(o.x,o.y)})),ct())},strokeSize:()=>J.size});function nt(e,t){const o=r.cells[t][e],m=[];o.kind==="wall"?m.push(o.low?le("low"):o.pillar?le("pillar"):o.breakable?le("breakable"):le("wall")):(m.push(o.floorFeat==="water"?le("water"):o.floorFeat==="slip"?le("slip"):le("floor")),o.hazard&&m.push(i("tool.forge.cell.hazard",{el:i(`elem.${o.hazard.element}`)})),(o.height??0)>0&&m.push(i("tool.forge.cell.height",{n:o.height??0})));const v=r.props.find(O=>O.x===e&&O.y===t);v&&m.push(dt(v.kind)?le(v.kind):v.kind);const T=r.spawns.find(O=>O.x===e&&O.y===t);return T&&m.push(T.monType?pt(T.monType):i("tool.forge.cell.spawnAuto")),r.ports.some(O=>O.x===e&&O.y===t)&&m.push(le("port")),m.join("・")}function mt(e){const t=a("hoverhint");if(!e){t.textContent=i("tool.forge.hoverIdle");return}const o=w==="spawn"?ie?pt(ie):i("tool.forge.auto"):le(w),m=w==="erase"?i("tool.forge.verb.erase"):j==="rect"?i("tool.forge.verb.rect",{name:o}):j==="fill"?i("tool.forge.verb.fill",{name:o}):i("tool.forge.verb.place",{name:o});t.textContent=i("tool.forge.hoverLine",{x:e.x,y:e.y,desc:nt(e.x,e.y),verb:m})}const Mn=e=>{var o,m,v;if(B!=="room"||((o=e.target)==null?void 0:o.tagName)==="INPUT"||((m=e.target)==null?void 0:m.tagName)==="SELECT"||((v=e.target)==null?void 0:v.tagName)==="TEXTAREA")return;if(e.code==="Space"){p=!0,e.preventDefault();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="z"){e.preventDefault(),e.shiftKey?d():h();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault(),d();return}const t=e.key.toLowerCase();if(t==="b")Te("brush");else if(t==="r")Te("rect");else if(t==="f")Te("fill");else if(t==="escape")u="none",K=te=null,de(null,null),Ge(!1);else if(t==="arrowleft")Q-=Math.PI/24;else if(t==="arrowright")Q+=Math.PI/24;else if(t==="arrowup")c=Math.min(1.4,c+.05);else if(t==="arrowdown")c=Math.max(.15,c-.05);else{const T=un.find(O=>O.key===t);T&&Fe(T.id)}},zn=e=>{e.code==="Space"&&(p=!1)};R.own(window,"keydown",Mn),R.own(window,"keyup",zn),a("camL").addEventListener("click",()=>{Q-=Math.PI/4,X()}),a("camR").addEventListener("click",()=>{Q+=Math.PI/4,X()}),a("camIn").addEventListener("click",()=>{l=Math.max(3,l*.8),X()}),a("camOut").addEventListener("click",()=>{l=Math.min(40,l*1.25),X()});const ot=new an({antialias:!0,preserveDrawingBuffer:!0});ot.setSize(96,96);const Ve=new sn,Lt=new ln(40,1,.05,100);Ve.add(new Vn(16777215,.85));const Ut=new Ht(16769725,1);Ut.position.set(3,6,4),Ve.add(Ut);function vt(e){Ve.background=new dn(rn[ce].bg),Ve.add(e);const t=new Zn().setFromObject(e),o=t.getCenter(new Ye),m=t.getSize(new Ye),v=Math.max(m.x,m.y,m.z)*.62+.24;Lt.position.set(o.x+v*1.35,o.y+v*1.15,o.z+v*1.85),Lt.lookAt(o),ot.render(Ve,Lt);const T=ot.domElement.toDataURL();return Ve.remove(e),T}const ze=new Map;function bt(e){const t=`tile:${e}`;if(!ze.has(t)){const o=Pe.buildSample(ce,e);o.position.set(-1,0,-1);const m=new rt;m.add(o),ze.set(t,vt(m))}return ze.get(t)}function Et(){if(!ze.has("port")){const e={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};ze.set("port",vt(Pe.buildPrefabPreview(ce,e)))}return ze.get("port")}function St(e){const t=`mon:${e}`;return ze.has(t)||ze.set(t,vt(we(_(e)))),ze.get(t)}function Tn(e){const t=`pf:${e.id}:${e.updatedAt}`;return ze.has(t)||ze.set(t,vt(Pe.buildPrefabPreview(ce,e))),ze.get(t)}const Mt=[];function Ue(e,t,o,m,v,T,O,Ie){const ve=document.createElement("div");ve.className="swatch",ve.title=Ie??"",ve.innerHTML=`${m?`<img src="${m}" alt="" />`:`<div class="glyph">${v??""}</div>`}${T?`<span class="kbd">${T}</span>`:""}<div class="nm">${o}</div>`,ve.addEventListener("click",()=>Fe(t,O)),e.appendChild(ve),Mt.push({el:ve,brush:t,monType:O})}function _t(){for(const e of["palTerrain","palProps","palMisc","palSpawns"])a(e).innerHTML="";Mt.length=0;for(const e of un)e.cat==="terrain"?Ue(a("palTerrain"),e.id,le(e.id),e.sample?bt(e.sample):null,e.id==="down"?"▼":null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="prop"?Ue(a("palProps"),e.id,le(e.id),e.sample?bt(e.sample):null,null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="port"?Ue(a("palMisc"),e.id,le(e.id),Et(),null,e.key,void 0,i(`tool.forge.brushHint.${e.id}`)):e.cat==="erase"&&Ue(a("palMisc"),e.id,le(e.id),null,"🧽","E",void 0,i(`tool.forge.brushHint.${e.id}`));Ue(a("palSpawns"),"spawn",i("tool.forge.auto"),null,"？",void 0,void 0,i("tool.forge.autoHint"));for(const e of Ot)Ue(a("palSpawns"),"spawn",pt(e.name),St(e.name),null,void 0,e.name,i("tool.forge.monHint",{min:e.min,max:e.max})+(e.size?`・${e.size}×${e.size}`:""))}const Pn={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function gt(){const e=a("palopts");e.innerHTML=`<span>${Tt(i("tool.forge.attrLabel"))}</span>`;for(const m of["fire","ice","earth","poison","holy"]){const v=document.createElement("button");v.className="chip"+(m===V?" on":""),v.style.background=Pn[m],v.title=i(`elem.${m}`),v.addEventListener("click",()=>{V=m,gt(),at(),X()}),e.appendChild(v)}const t=document.createElement("span");t.textContent=`　${i("tool.forge.powerLabel")}`;const o=document.createElement("input");o.type="number",o.min="1",o.max="40",o.value=String(oe),o.className="num",o.style.width="3.4em",o.addEventListener("change",()=>{oe=Math.max(1,Math.min(40,Number(o.value)||6)),X()}),e.append(t,o)}function Fe(e,t){w=e,e==="spawn"&&(ie=t),An(e,e==="spawn"?t:void 0),!dt(e).areaOk&&j!=="brush"&&(Te("brush"),S(i("tool.forge.brushOneOnly",{name:le(e)}))),at(),mt(We),X()}function Te(e){if(e!=="brush"&&!dt(w).areaOk){S(i("tool.forge.shapeOneOnly",{name:le(w)}),!0);return}j=e,at(),X()}function at(){const e=dt(w);for(const v of Mt)v.el.classList.toggle("on",v.brush===w&&(w!=="spawn"||v.monType===ie));a("shBrush").classList.toggle("on",j==="brush"),a("shRect").classList.toggle("on",j==="rect"),a("shFill").classList.toggle("on",j==="fill"),a("nowname").textContent=w==="spawn"?i("tool.forge.nowSpawn",{name:ie?pt(ie):i("tool.forge.auto")}):w==="hazard"?i("tool.forge.nowHazard",{el:i(`elem.${V}`)}):le(e.id),a("nowshape").textContent=`（${i(`tool.common.shape.${j}`)}）`;const t=a("nowimg"),o=w==="spawn"?ie?St(ie):null:w==="port"?Et():e.sample?bt(e.sample):null;o?(t.src=o,t.style.display="block"):t.style.display="none",a("palopts").classList.toggle("show",w==="hazard");const m=A.querySelector("#mNowImg");m&&(o?(m.src=o,m.style.display="block"):m.style.display="none",a("mNowName").textContent=a("nowname").textContent??"",a("mShB").classList.toggle("on",j==="brush"),a("mShR").classList.toggle("on",j==="rect"),a("mShF").classList.toggle("on",j==="fill"),On())}a("shBrush").addEventListener("click",()=>Te("brush")),a("shRect").addEventListener("click",()=>Te("rect")),a("shFill").addEventListener("click",()=>Te("fill"));function _e(){a("pid").value=r.id,a("pname").value=r.name,a("pw").value=String(r.size.w),a("pd").value=String(r.size.d),a("pdepth").value=`${r.meta.depthRange[0]}-${r.meta.depthRange[1]}`,a("pweight").value=String(r.meta.weight),a("ptags").value=r.meta.tags.join(" "),a("cPorts").checked=r.meta.solvability.portsConnected,a("cHaz").checked=r.meta.solvability.hazardAvoidable}function Jt(){r.id=a("pid").value.trim()||r.id,r.name=a("pname").value.trim()||r.name;const e=a("pdepth").value.split("-").map(t=>Math.max(1,Math.min(99,Number(t)||1)));r.meta.depthRange=[e[0]??1,Math.max(e[0]??1,e[1]??e[0]??99)],r.meta.weight=Math.max(1,Math.min(9,Number(a("pweight").value)||3)),r.meta.tags=a("ptags").value.split(/[\s,、]+/).map(t=>t.trim()).filter(Boolean),r.meta.solvability.portsConnected=a("cPorts").checked,r.meta.solvability.hazardAvoidable=a("cHaz").checked}for(const e of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])a(e).addEventListener("change",()=>{Jt(),me()});a("applySize").addEventListener("click",()=>{const e=Number(a("pw").value),t=Number(a("pd").value),o=cn(r,e,t);_e(),x(),$(),me();const m=o.ports+o.props+o.spawns;S(m?i("tool.forge.resizedDrop",{w:r.size.w,d:r.size.d,n:m,ports:o.ports,props:o.props,spawns:o.spawns}):i("tool.forge.resized",{w:r.size.w,d:r.size.d}),m>0)}),a("newpf").addEventListener("click",()=>{const e=Math.floor(Math.random()*900)+100;s(Ft(`prefab-${e}`,i("tool.forge.newName",{n:e}),r.size.w,r.size.d,ft()),i("tool.forge.newSaid"))});function Je(){const e=pn(r),t=a("solv");t.innerHTML=e.items.map(v=>`<div class="s-${v.level}">${v.level==="ok"?"✓":v.level==="warn"?"⚠":"✗"} ${Tt(v.key?i(v.key,v.params):v.msg)}</div>`).join("");const o=a("save");o.disabled=e.saveBlocked,a("savenote").textContent=e.saveBlocked?i("tool.forge.saveBlockedNote",{reason:e.blockReasonKey?i(e.blockReasonKey):e.blockReason??""}):i("tool.common.savenote");const m=A.querySelector("#mSolv");if(m){const v=e.items.filter(O=>O.level==="err").length,T=e.items.filter(O=>O.level==="warn").length;m.textContent=v?`✗ ${v}`:T?`⚠ ${T}`:"✓",m.className="mchip "+(v?"err":T?"warn":"ok"),a("mSave").disabled=e.saveBlocked}}function Kt(){return Jt(),He.parse({...r,updatedAt:ft()})}a("save").addEventListener("click",()=>{zt()});async function zt(){try{const e=Kt(),t=await $e(G("/api/forge/proposal"),{prefab:e,label:e.name,createdBy:"user"});S(i("tool.common.savedFuture",{id:t.id.slice(0,8)}))}catch(e){S(i("tool.common.saveFail",{msg:e.message}),!0)}}async function Xt(e){try{const t=await $e(G("/api/forge/promote"),{proposalId:e});S(t.promotedNote??i("tool.common.adoptedNote"))}catch(t){S(i("tool.common.promoteFail",{msg:t.message}),!0)}}async function Yt(e){try{await $e(G("/api/forge/archive"),{proposalId:e}),S(i("tool.common.archived"))}catch(t){S(i("tool.common.archiveFail",{msg:t.message}),!0)}}async function it(){try{const[e,t]=await Promise.all([fetch(G("/api/forge/truth")).then(o=>o.json()),fetch(G("/api/forge/proposals")).then(o=>o.json())]);Cn(t.proposals??[]),Nn(e),a("live").innerHTML="<b>· live</b>",Y.hidden=!1}catch{a("live").textContent=i("tool.common.devOff"),Y.hidden=!0}}function Cn(e){Dt(a("proposals"),e,{selectedId:Le,onView:t=>{Hn(t)},onPromote:t=>{Xt(t)},onArchive:t=>{Yt(t)}})}function Nn(e){const t=e.prefabs??[];oo(a("truth"),t.map(o=>{let m=null;try{m=Tn(He.parse(o))}catch{}return{id:o.id,name:bo(o),meta:i("tool.forge.cardMeta",{w:o.size.w,d:o.size.d,a:o.meta.depthRange[0],b:o.meta.depthRange[1],wt:o.meta.weight})+(o.meta.tags.length?"・"+o.meta.tags.join("/"):""),thumb:m,onOpen:()=>{s(He.parse(o),i("tool.common.openedTruth",{name:o.name}))},onDup:()=>{const v=He.parse({...o,id:`${o.id}-2`,name:i("tool.common.copyName",{name:o.name}),updatedAt:ft()});s(v,i("tool.common.duplicated",{name:o.name}))},onCopyWorld:()=>{(async()=>{try{const v=await ao("/api/forge","prefab",He.parse(o),R.worlds(),$e);v&&S(i("tool.world.copied",{world:v}))}catch(v){S(i("tool.world.copyFail",{msg:v.message}),!0)}})()}}}),i("tool.forge.truthEmpty"))}async function Hn(e){const t=await fetch(G(`/api/forge/proposal?id=${encodeURIComponent(e)}`)).then(m=>m.json());Le=e;const o=(t.prefabs??[])[t.prefabs.length-1];o&&s(He.parse(o),i("tool.common.viewingFuture",{id:e.slice(0,8)})),it()}function Tt(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}const Fn=R.events.on("forge",()=>{it()});let Pt=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function An(e,t){Pt=[{brush:e,monType:t},...Pt.filter(o=>o.brush!==e||o.monType!==t)].slice(0,5)}function In(e){if(e.brush==="spawn")return e.monType?`<img src="${St(e.monType)}" alt="" />`:'<div class="glyph">？</div>';if(e.brush==="port")return`<img src="${Et()}" alt="" />`;if(e.brush==="erase")return'<div class="glyph">🧽</div>';if(e.brush==="down")return'<div class="glyph">▼</div>';const t=dt(e.brush);return t.sample?`<img src="${bt(t.sample)}" alt="" />`:'<div class="glyph"></div>'}function On(){const e=A.querySelector("#hrecent");if(e){e.innerHTML="";for(const t of Pt){const o=document.createElement("button");o.className="hswatch"+(t.brush===w&&(t.brush!=="spawn"||t.monType===ie)?" on":""),o.innerHTML=`${In(t)}<span class="nm">${Tt(t.brush==="spawn"?t.monType?pt(t.monType):i("tool.forge.auto"):le(t.brush))}</span>`,o.addEventListener("click",()=>Fe(t.brush,t.monType)),e.appendChild(o)}}}const st=no(["sheetSide","sheetLoop"]);function Zt(){y.matches?(a("sheetSideBody").append(a("topbar"),a("side")),a("sheetLoopBody").append(a("loop"))):(st.closeAll(),a("app").insertBefore(a("side"),a("stagewrap")),a("stagewrap").insertBefore(a("topbar"),a("mchips")),a("app").appendChild(a("loop"))),W()}a("mMenu").addEventListener("click",()=>st.open("sheetSide")),a("mShelf").addEventListener("click",()=>st.open("sheetLoop")),a("mSolv").addEventListener("click",()=>st.open("sheetSide")),a("hMore").addEventListener("click",()=>st.open("sheetSide")),a("mUndo").addEventListener("click",h),a("mRedo").addEventListener("click",d),a("mFit").addEventListener("click",()=>{x(),X()}),a("mReach").addEventListener("click",()=>{ee=!ee,a("mReach").classList.toggle("on",ee),ae()}),a("mSave").addEventListener("click",()=>{ct(),zt()}),a("mShB").addEventListener("click",()=>Te("brush")),a("mShR").addEventListener("click",()=>Te("rect")),a("mShF").addEventListener("click",()=>Te("fill")),R.own(y,"change",Zt);function Rn(){Ee.position.set(b.x+l*Math.sin(Q)*Math.cos(c),b.y+l*Math.sin(c),b.z+l*Math.cos(Q)*Math.cos(c)),Ee.lookAt(b),U.render(Z,Ee)}let Qt=0,en=!1;function tn(){en||(Qt=requestAnimationFrame(tn),Rn())}window.cdForge={paint:(e,t,o)=>{var m;return o&&Fe(o),Se(wt(r,w,e,t,be())),me(),(m=r.cells[t])==null?void 0:m[e]},rect:(e,t,o,m,v)=>{v&&Fe(v),Se(It(r,w,e,t,o,m,be())),me()},fill:(e,t,o)=>{o&&Fe(o),Se(At(r,w,e,t,be())),me()},erase:(e,t)=>{var o;return Se(wt(r,"erase",e,t)),me(),(o=r.cells[t])==null?void 0:o[e]},spawn:(e,t,o)=>{Fe("spawn",o),Se(wt(r,"spawn",e,t,be())),me()},tool:(e,t)=>Fe(e,t),shapeMode:e=>Te(e),hazard:(e,t)=>{V=e,t&&(oe=t),gt()},undo:h,redo:d,resize:(e,t)=>{const o=cn(r,e,t);return _e(),x(),$(),me(),o},newPrefab:(e,t,o,m)=>s(Ft(e,t,o,m,ft())),prefab:()=>Kt(),draft:()=>r,solv:()=>pn(r),save:()=>zt(),promote:e=>Xt(e),archive:e=>Yt(e),refresh:()=>it(),view:(e,t,o)=>{Q=e,c=t,o!=null&&(l=o)},state:()=>({brush:w,shape:j,spawnType:ie??null,hazardElement:V,canUndo:k.canUndo(),canRedo:k.canRedo(),guide:a("guide").style.display!=="none"}),draws:()=>U.info.render.calls,screenOf:(e,t)=>{var T,O;const o=(((O=(T=r.cells[t])==null?void 0:T[e])==null?void 0:O.height)??0)*xt,m=new Ye(e,o,t).project(Ee),v=U.domElement.getBoundingClientRect();return{cx:v.left+(m.x+1)/2*v.width,cy:v.top+(1-m.y)/2*v.height}},cellAt:(e,t)=>Ce(e,t)};async function jn(e){try{const o=((await fetch(G("/api/forge/truth")).then(m=>m.json())).prefabs??[]).find(m=>m.id===e);o?s(He.parse(o),i("tool.common.openedTruth",{name:o.name})):S(i("tool.studio.deepMiss",{id:e}),!0)}catch{}}const Bn=Gt(()=>{_t(),gt(),at(),Je(),mt(We),ne(),it()}),Ct=Re();_t(),gt(),k.reset(r),_e(),Ct||x(),at(),n(),Je(),$(),Zt(),W(),Ge(!Ct),Ct&&S(i("tool.common.restored")),it(),tn();try{const e=sessionStorage.getItem("cdForgeModeM4");(e==="town"||e==="pin")&&q(e)}catch{}return{applyParams(e){const t=e.get("tab")??e.get("mode");t==="town"?q("town"):t==="pin"?q("pin"):t==="room"&&q("room");const o=e.get("id");o&&(q("room"),jn(o))},dispose(){en=!0,cancelAnimationFrame(Qt),clearTimeout(De),Fn(),Bn(),M.dispose(),f.dispose(),X();try{U.dispose(),U.forceContextLoss(),U.domElement.remove()}catch{}try{ot.dispose(),ot.forceContextLoss()}catch{}delete window.cdForge}}}};export{Ao as forgePanel};
