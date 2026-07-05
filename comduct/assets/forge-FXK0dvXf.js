import{W as Wt,A as Mn,S as Ut,P as Vt,E as Kt,z as En,C as _t,H as Sn,D as Lt,r as zn,l as Ie,M as Me,B as We,t as Tn,F as at,V as Re,J as Pn,R as Cn,K as Nn,G as Ue,O as Hn,w as In,m as Rn,u as Fn}from"./render-voxel-CjFacDZD.js";import{e as Mt,P as Ee}from"./prefab-CaEyAM_B.js";import{r as Jt,E as On,c as Yt,a as it,f as Et,b as St,d as Ve,B as Xt,e as An}from"./forge-edit-CffY6cQY.js";import{a as Bn}from"./touch-input-D1HYJrcI.js";import{r as sn,i as Dn,b as Ke,a as jn}from"./tool-shelf-BE1nDWty.js";import{M as zt}from"./dungeon-ChlFI8mA.js";import{D as qn,b as Gn}from"./creator-auth-B1Dea2cT.js";import{o as ln}from"./studio-BpP2cUMc.js";import{t as s,b as rn,g as dn,c as _e}from"./i18n-CyHpDAlw.js";import{d as Zt,t as Qt,T as Fe,a as en,l as tn,b as Wn,c as st,e as lt}from"./tables-HJvNj3ar.js";import{T as Un}from"./tables-doc-dF84Oq3l.js";import"./voxmodel-DIWseshL.js";import"./schemas-BBGxizon.js";import"./preload-helper-Dp1pzeXC.js";import"./monster-9NZouzFO.js";const Vn=`<!-- ============================================================
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
</style>
<div id="forgeroot">
<div id="fmodes">
  <span class="cap" data-i18n="tool.forge.modeCap">モード</span>
  <button id="modeRoom" class="on" data-i18n="tool.forge.modeRoom">🧱 部屋</button>
  <button id="modeTown" data-i18n="tool.forge.modeTown">🏘 街</button>
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
`,h=N=>N.replace(/[&<>"]/g,A=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[A]),nn=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Kn=N=>N===qn?"comduct":N.replace("/","--"),Oe={shop:"🏪",equip:"🛡",craft:"🔨",heal:"💤",recruit:"🤝"},_n={shop:"#5b4a2e",equip:"#3e4a5e",craft:"#5e3e33",heal:"#2e4a3a",recruit:"#4a3a55"},on={fence:"▦",fountain:"⛲",brazier:"🔥",tree:"🌳",road:""},an={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8",plain:"#9aa4b5"},Jn=["human","elf","dwarf","gnome","halffoot"],Yn=["talker","guide","shop","equip","craft","heal","recruit"];function Xn(N,A){const{wapi:G,postJson:fe}=A.api,a=i=>N.querySelector(`#${i}`);function C(i,n=!1){const f=a("tmsg");f.textContent=i,f.style.color=n?"#ffd166":"#7fd17f",window.setTimeout(()=>{f.textContent===i&&(f.textContent="")},5e3)}let m=Zt(),H="select",Q="shop",p=3,x=2,T="plain",v=null,j=null,I=null,V=null,R=!1,J="";const Ae="cdForgeTownM4";function b(){try{sessionStorage.setItem(Ae,JSON.stringify({v:1,world:A.world(),plan:m,tool:H,dirty:R,label:a("tlabel").value}))}catch{}}function rt(){try{const i=sessionStorage.getItem(Ae);if(!i)return!1;const n=JSON.parse(i);return n.v!==1||n.world!==A.world()?!1:(m=Fe.parse(n.plan),H=n.tool??"select",R=!!n.dirty,n.label&&(a("tlabel").value=n.label),!0)}catch{return!1}}function L(){R=!0}function z(i,n){m=i,n!=null&&n.markDirty&&L(),E(),b()}async function Y(){var i,n,f,l;try{const r=await fetch(G("/api/tables/truth"));if(r.ok){const d=(f=(n=(i=(await r.json()).docs)==null?void 0:i[0])==null?void 0:n.tables)==null?void 0:f.town;if(d!==void 0)return{p:Fe.parse(d),src:"truth"}}}catch{}try{const r=await fetch(G(`/packs/${Kn(A.world())}.json`));if(r.ok){const d=(l=(await r.json()).tables)==null?void 0:l.town;if(d!==void 0)return{p:Fe.parse(d),src:"pack"}}}catch{}return null}async function K(i=!1){if(R&&!i)return;let n=null;try{n=await Y()}catch(f){C(s("tool.town.zodFail",{msg:f.message}),!0);return}n?(J=s("tool.town.truthMeta",{src:n.src,b:n.p.buildings.length,n:n.p.npcs.length,d:Object.keys(n.p.dialogs).length}),R=!1,v=null,I=null,z(n.p)):(J=s("tool.town.truthNew"),R=!1,z(Zt())),ce()}const Se=a("tgrid");function me(i,n){let f="tc",l="",r=`${i},${n}`,d=!1;m.decos.some(g=>g.x===i&&g.y===n&&g.kind==="road")&&(f+=" road");const $=m.buildings.findIndex(g=>i>=g.x&&i<g.x+g.w&&n>=g.y&&n<g.y+g.d),F=[...m.decos].reverse().find(g=>g.x===i&&g.y===n&&g.kind!=="road"),P=m.holes.findIndex(g=>g.x===i&&g.y===n),X=m.npcs.find(g=>g.x===i&&g.y===n);if($>=0){const g=m.buildings[$];return f+=" bld",l=i===g.x+(g.w>>1)&&n===g.y+(g.d>>1)?Oe[g.facility]:"",r=`${s(`fac.${g.facility}`)} (${g.facility})`,d=(v==null?void 0:v.kind)==="building"&&v.i===$,{cls:f+(d?" sel":""),html:`<span style="position:absolute;inset:0;background:${_n[g.facility]};border-radius:3px"></span><span style="position:relative">${l}</span>`,title:r,selHit:d}}if(F){l=on[F.kind]??"",r=s(`tool.town.tool.${F.kind==="road"?"road":F.kind}`);const g=m.decos.lastIndexOf(F);d=(v==null?void 0:v.kind)==="deco"&&v.i===g}if(P>=0){const g=m.holes[P];l=`<b style="color:${an[g.element??"plain"]}">▼</b>`,r=g.element?s(`elem.${g.element}`):s("tool.town.holePlain"),d=(v==null?void 0:v.kind)==="hole"&&v.i===P}return m.buildings.find(g=>g.door.x===i&&g.door.y===n)&&(l+='<span class="door">🚪</span>'),X&&(l=`🧍<span class="npcdot" style="background:${X.color}"></span>`,r=`${X.name}（${X.id}）`,d=(v==null?void 0:v.kind)==="npc"&&v.id===X.id),{cls:f+(d?" sel":""),html:l,title:r,selHit:d}}function dt(){let i="";for(let n=0;n<st;n++)for(let f=0;f<lt;f++){const l=me(f,n);i+=`<div class="${l.cls}" data-x="${f}" data-y="${n}" title="${h(l.title)}">${l.html}</div>`}Se.innerHTML=i}Se.addEventListener("click",i=>{const n=i.target.closest(".tc");n&&we(Number(n.dataset.x),Number(n.dataset.y))}),Se.addEventListener("pointermove",i=>{const n=i.target.closest(".tc");a("thover").textContent=n?`(${n.dataset.x},${n.dataset.y}) ${n.title}`:"—"});const Ye=()=>{for(let i=1;;i++){const n=`npc-${i}`;if(!m.npcs.some(f=>f.id===n))return n}};function ze(i,n){const f=m.npcs.find(d=>d.x===i&&d.y===n);if(f)return{kind:"npc",id:f.id};const l=m.buildings.findIndex(d=>i>=d.x&&i<d.x+d.w&&n>=d.y&&n<d.y+d.d);if(l>=0)return{kind:"building",i:l};const r=m.holes.findIndex(d=>d.x===i&&d.y===n);if(r>=0)return{kind:"hole",i:r};for(let d=m.decos.length-1;d>=0;d--)if(m.decos[d].x===i&&m.decos[d].y===n)return{kind:"deco",i:d};return null}function we(i,n){if(j!=null){const r=m.buildings[j];r&&(r.door={x:i,y:n},C(s("tool.town.doorPlaced"))),j=null,L(),E(),b();return}if(H==="select"){v=ze(i,n),E();return}if(H==="erase"){const r=ze(i,n);if((r==null?void 0:r.kind)==="npc")m.npcs=m.npcs.filter(d=>d.id!==r.id);else if((r==null?void 0:r.kind)==="building")m.buildings.splice(r.i,1);else if((r==null?void 0:r.kind)==="hole")m.holes.splice(r.i,1);else if((r==null?void 0:r.kind)==="deco")m.decos.splice(r.i,1);else return;v=null,C(s("tool.town.erased")),L(),E(),b();return}if(H==="npc"){const r=m.npcs.find(k=>k.x===i&&k.y===n);if(r){v={kind:"npc",id:r.id},E();return}if(m.npcs.length>=16){C(s("tool.town.npcFull"),!0);return}const d=Ye();m.npcs.push({id:d,name:`NPC${m.npcs.length+1}`,x:i,y:n,race:"human",color:"#e0c060",role:"talker",facing:"s"}),v={kind:"npc",id:d},C(s("tool.town.npcAdded",{name:d})),L(),E(),b();return}if(H==="building"){if(m.buildings.length>=8){C(s("tool.town.bldFull"),!0);return}const r=Math.min(i,lt-p),d=Math.min(n,st-x),k={x:Math.min(r+(p>>1),lt-1),y:Math.min(d+x,st-1)};m.buildings.push({x:r,y:d,w:p,d:x,facility:Q,door:k}),v={kind:"building",i:m.buildings.length-1},C(s("tool.town.placed",{what:s(`fac.${Q}`)})),L(),E(),b();return}if(H==="hole"){const r=T==="plain"?null:T,d=m.holes.findIndex(k=>k.x===i&&k.y===n);if(d>=0)m.holes[d].element=r;else if(m.holes.length>=6){C(s("tool.town.holeFull"),!0);return}else m.holes.push({x:i,y:n,element:r});C(s("tool.town.placed",{what:"▼"})),L(),E(),b();return}const f=H.slice(5),l=m.decos.findIndex(r=>r.x===i&&r.y===n&&r.kind===f);l>=0?m.decos.splice(l,1):m.decos.push({x:i,y:n,kind:f}),L(),E(),b()}const W=["select","npc","building","hole","deco-road","deco-fence","deco-tree","deco-brazier","deco-fountain","erase"],U=i=>s(`tool.town.tool.${i.startsWith("deco-")?i.slice(5):i}`);function B(){const i=a("tpal");i.innerHTML="";for(const n of W){const f=document.createElement("button");f.className=H===n?"on":"",f.textContent=U(n),f.addEventListener("click",()=>{H=n,j=null,B(),ae(),b()}),i.appendChild(f)}}function ae(){const i=a("tpalopts");if(i.innerHTML="",i.style.display=H==="building"||H==="hole"?"flex":"none",H==="building"){const n=document.createElement("select");n.innerHTML=Object.keys(Oe).map(r=>`<option value="${r}"${r===Q?" selected":""}>${Oe[r]} ${h(s(`fac.${r}`))}</option>`).join(""),n.addEventListener("change",()=>{Q=n.value});const f=(r,d,k)=>{const $=document.createElement("input");return $.type="number",$.min="1",$.max=String(k),$.value=String(r),$.className="num",$.style.width="3em",$.addEventListener("change",()=>d(Math.max(1,Math.min(k,Number($.value)||1)))),$},l=document.createElement("span");l.textContent=s("tool.town.sizeLabel"),i.append(n,l,f(p,r=>{p=r},8),document.createTextNode("×"),f(x,r=>{x=r},6))}else if(H==="hole"){const n=document.createElement("span");n.textContent=s("tool.town.holeElem"),i.appendChild(n);for(const f of["fire","ice","earth","poison","holy","plain"]){const l=document.createElement("button");l.className="chip"+(f===T?" on":""),l.style.background=an[f],l.title=f==="plain"?s("tool.town.holePlain"):s(`elem.${f}`),l.addEventListener("click",()=>{T=f,ae()}),i.appendChild(l)}}}const ee=a("tdetail");function ie(){if(j=j,!v){ee.innerHTML=`<div class="sub">${h(s("tool.town.detailIdle"))}</div>`;return}if(v.kind==="npc")return xe(v.id);if(v.kind==="building")return he(v.i);if(v.kind==="hole"){const n=m.holes[v.i];if(!n)return v=null,ie();ee.innerHTML=`<div><b>▼ ${h(n.element?s(`elem.${n.element}`):s("tool.town.holePlain"))}</b>（${n.x},${n.y}）</div>
        <div class="row"><button id="tdel" type="button">${h(s("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{m.holes.splice(v.i,1),v=null,L(),E(),b()});return}const i=m.decos[v.i];if(!i)return v=null,ie();ee.innerHTML=`<div><b>${on[i.kind]||"·"} ${h(s(`tool.town.tool.${i.kind}`))}</b>（${i.x},${i.y}）</div>
      <div class="row"><button id="tdel" type="button">${h(s("tool.town.delete"))}</button></div>`,a("tdel").addEventListener("click",()=>{m.decos.splice(v.i,1),v=null,L(),E(),b()})}function he(i){const n=m.buildings[i];if(!n)return v=null,ie();ee.innerHTML=`
      <div><b>${Oe[n.facility]} ${h(s(`fac.${n.facility}`))}</b>（${n.x},${n.y}・${n.w}×${n.d}）</div>
      <div class="kv"><span class="lbl">${h(s("tool.town.facilityLabel"))}</span><select id="tbfac">
        ${Object.keys(Oe).map(f=>`<option value="${f}"${n.facility===f?" selected":""}>${Oe[f]} ${h(s(`fac.${f}`))}</option>`).join("")}
      </select></div>
      <div class="kv"><span class="lbl">${h(s("tool.town.sizeLabel"))}</span>
        <input id="tbw" class="num" type="number" min="1" max="8" value="${n.w}" /> ×
        <input id="tbd" class="num" type="number" min="1" max="6" value="${n.d}" /></div>
      <div class="row"><button id="tbdoor" type="button"${j===i?' class="on"':""}>${h(s("tool.town.doorSet"))}</button></div>
      <div class="sub">${h(s("tool.town.doorHint"))}（🚪 ${n.door.x},${n.door.y}）</div>
      <div class="row"><button id="tdel" type="button">${h(s("tool.town.delete"))}</button></div>`,a("tbfac").addEventListener("change",()=>{n.facility=a("tbfac").value,L(),E(),b()}),a("tbw").addEventListener("change",()=>{n.w=Math.max(1,Math.min(8,Number(a("tbw").value)||n.w)),n.x=Math.min(n.x,lt-n.w),L(),E(),b()}),a("tbd").addEventListener("change",()=>{n.d=Math.max(1,Math.min(6,Number(a("tbd").value)||n.d)),n.y=Math.min(n.y,st-n.d),L(),E(),b()}),a("tbdoor").addEventListener("click",()=>{j=j===i?null:i,ie()}),a("tdel").addEventListener("click",()=>{m.buildings.splice(i,1),v=null,j=null,L(),E(),b()})}function xe(i){const n=m.npcs.find(l=>l.id===i);if(!n)return v=null,ie();const f=(n.lines??[]).map(l=>l.text).join(`
`);ee.innerHTML=`
      <div><b>🧍 ${h(n.name)}</b> <span class="sub">${h(n.id)}（${n.x},${n.y}）</span></div>
      <div class="kv"><span class="lbl">${h(s("tool.town.npcName"))}</span><input id="tnname" type="text" value="${h(n.name)}" maxlength="24" /></div>
      <div class="kv"><span class="lbl">${h(s("tool.town.race"))}</span><select id="tnrace">
        ${Jn.map(l=>`<option value="${l}"${n.race===l?" selected":""}>${h(s(`tool.town.race.${l}`))}</option>`).join("")}
      </select><input id="tncolor" type="color" value="${h(n.color)}" title="${h(s("tool.town.color"))}" /></div>
      <div class="kv"><span class="lbl">${h(s("tool.town.role"))}</span><select id="tnrole">
        ${Yn.map(l=>`<option value="${l}"${n.role===l?" selected":""}>${h(l==="talker"?s("tool.town.role.talker"):l==="guide"?s("tool.town.role.guide"):s(`fac.${l}`))}</option>`).join("")}
      </select>
      <span class="lbl">${h(s("tool.town.facing"))}</span><select id="tnface">
        ${["n","s","e","w"].map(l=>`<option value="${l}"${(n.facing??"s")===l?" selected":""}>${l}</option>`).join("")}
      </select></div>
      <div class="sub">${h(s("tool.town.linesLabel"))}</div>
      <textarea id="tnlines">${h(f)}</textarea>
      <div class="row"><button id="tndlg" type="button">${h(s("tool.town.dialogEdit"))}</button></div>
      <div class="sub">${n.dialog?h(n.dialog):h(s("tool.town.dialogNone"))}</div>
      <div class="row"><button id="tdel" type="button">${h(s("tool.town.delete"))}</button></div>`,a("tnname").addEventListener("change",()=>{n.name=a("tnname").value.trim()||n.name,L(),E(),b()}),a("tnrace").addEventListener("change",()=>{n.race=a("tnrace").value,L(),b()}),a("tncolor").addEventListener("change",()=>{n.color=a("tncolor").value,L(),E(),b()}),a("tnrole").addEventListener("change",()=>{n.role=a("tnrole").value,L(),b()}),a("tnface").addEventListener("change",()=>{n.facing=a("tnface").value,L(),b()}),a("tnlines").addEventListener("change",()=>{const l=a("tnlines").value.split(`
`).map(d=>d.trim()).filter(Boolean).slice(0,8),r=n.lines??[];n.lines=l.length?l.map((d,k)=>{var $,F;return{text:d,...(($=r[k])==null?void 0:$.text)===d&&((F=r[k])!=null&&F.texts)?{texts:r[k].texts}:{}}}):void 0,L(),ke(),b()}),a("tndlg").addEventListener("click",()=>{te(n)}),a("tdel").addEventListener("click",()=>{m.npcs=m.npcs.filter(l=>l.id!==i),v=null,I&&!m.npcs.some(l=>l.dialog===I)&&ye(),L(),E(),b()})}function te(i){if(!i.dialog){const n=`dlg-${i.id}`;i.dialog=n,m.dialogs[n]||(m.dialogs[n]={id:n,nodes:[{id:"root",say:"……"}]}),L()}I=i.dialog,V=null,E(),b()}function ye(){I=null,V=null,re()}a("tdlgclose").addEventListener("click",ye);const se=()=>I?m.dialogs[I]??null:null,ct=i=>{for(let n=1;;n++){const f=`n${n}`;if(!i.nodes.some(l=>l.id===f))return f}};function re(){const i=a("tdlg"),n=se();if(i.classList.toggle("on",!!n),!n)return;a("tdlghead").textContent=s("tool.town.dlgHead",{id:n.id});const f=a("tdlgnodes");f.innerHTML="",n.nodes.forEach((l,r)=>{var P,X,$e,g;const d=document.createElement("div");d.className="node";const k=w=>`<option value=""${w===null?" selected":""}>${h(s("tool.town.choiceEnd"))}</option>`+n.nodes.map(S=>`<option value="${h(S.id)}"${w===S.id?" selected":""}>→ ${h(S.id)}</option>`).join("");d.innerHTML=`
        <div class="nid">#${h(l.id)}${r===0?" "+h(s("tool.town.entryMark")):""}
          <button type="button" data-act="delnode" style="float:right">🗑</button></div>
        <textarea data-act="say">${h(l.say)}</textarea>
        <div class="chrow sub"><span>${h(s("tool.town.nodeWhen"))}</span>
          <input type="text" data-act="wflag" style="width:5.5em" placeholder="flag" value="${h(((P=l.when)==null?void 0:P.flag)??"")}" />
          <input type="text" data-act="wnot" style="width:5.5em" placeholder="notFlag" value="${h(((X=l.when)==null?void 0:X.notFlag)??"")}" />
          <input type="text" data-act="witem" style="width:5.5em" placeholder="item" value="${h((($e=l.when)==null?void 0:$e.item)??"")}" /></div>
        ${(l.choices??[]).map((w,S)=>`<div class="chrow">
          <input type="text" data-act="ctext" data-ci="${S}" value="${h(w.text)}" />
          <select data-act="cgoto" data-ci="${S}">${k(w.goto)}</select>
          <button type="button" data-act="cdel" data-ci="${S}">✕</button></div>`).join("")}
        ${(l.choices??[]).length<4?`<button type="button" data-act="caddc">${h(s("tool.town.addChoice"))}</button>`:""}`;const $=()=>{L(),ke(),b()};d.querySelector('[data-act="say"]').addEventListener("change",w=>{l.say=w.target.value||l.say,$()});const F=(w,S)=>{const O={...l.when??{}};S.trim()?O[w]=S.trim():delete O[w],l.when=Object.keys(O).length?O:void 0,$()};d.querySelector('[data-act="wflag"]').addEventListener("change",w=>F("flag",w.target.value)),d.querySelector('[data-act="wnot"]').addEventListener("change",w=>F("notFlag",w.target.value)),d.querySelector('[data-act="witem"]').addEventListener("change",w=>F("item",w.target.value)),d.querySelector('[data-act="delnode"]').addEventListener("click",()=>{n.nodes.splice(r,1),n.nodes.length||n.nodes.push({id:"root",say:"……"});for(const w of n.nodes)for(const S of w.choices??[])S.goto===l.id&&(S.goto=null);L(),re(),ke(),b()});for(const w of Array.from(d.querySelectorAll('[data-act="ctext"]')))w.addEventListener("change",()=>{const S=l.choices[Number(w.dataset.ci)];S.text=w.value||S.text,$()});for(const w of Array.from(d.querySelectorAll('[data-act="cgoto"]')))w.addEventListener("change",()=>{l.choices[Number(w.dataset.ci)].goto=w.value===""?null:w.value,$()});for(const w of Array.from(d.querySelectorAll('[data-act="cdel"]')))w.addEventListener("click",()=>{l.choices.splice(Number(w.dataset.ci),1),l.choices.length||(l.choices=void 0),L(),re(),ke(),b()});(g=d.querySelector('[data-act="caddc"]'))==null||g.addEventListener("click",()=>{l.choices=[...l.choices??[],{text:"…",goto:null}],L(),re(),b()}),f.appendChild(d)}),de()}a("tdlgaddnode").addEventListener("click",()=>{const i=se();!i||i.nodes.length>=32||(i.nodes.push({id:ct(i),say:"……"}),L(),re(),b())});const Xe=()=>({flags:new Set(a("tpvflags").value.split(/[\s,、]+/).filter(Boolean)),items:new Set(a("tpvitems").value.split(/[\s,、]+/).filter(Boolean))});function de(){var r;const i=a("tpv"),n=se();if(!n){i.innerHTML="";return}const f=dn();let l=`<div class="row"><button type="button" data-act="pvstart">${h(s("tool.town.pvRestart"))}</button></div>`;if(V==="end")l+=`<div class="pvend">${h(s("tool.town.pvEnd"))}</div>`;else if(V!==null){const d=en(n,V);if(!d)return V=null,de();l+=`<div class="pvsay">🗨 ${h(tn(d.say,d.says,f))}</div>`,(r=d.choices)!=null&&r.length?l+=d.choices.map((k,$)=>`<button type="button" data-act="pvc" data-ci="${$}">${h(tn(k.text,k.texts,f))}</button>`).join(""):l+=`<div class="pvend">${h(s("tool.town.pvEnd"))}</div>`}i.innerHTML=l,i.querySelector('[data-act="pvstart"]').addEventListener("click",()=>{const d=Wn(n,Xe());V=d?d.id:"end",de()});for(const d of Array.from(i.querySelectorAll('[data-act="pvc"]')))d.addEventListener("click",()=>{var F;const k=V!==null&&V!=="end"?en(n,V):null,$=(F=k==null?void 0:k.choices)==null?void 0:F[Number(d.dataset.ci)];V=($==null?void 0:$.goto)??"end",de()})}a("tpvflags").addEventListener("change",de),a("tpvitems").addEventListener("change",de);function ke(){const i=a("tlint"),n=Qt(m);i.innerHTML=n.length?n.map(f=>`<div class="warn">⚠ ${h(s(f.key,f.params))}</div>`).join(""):`<div class="ok">${h(s("tool.town.lint.ok"))}</div>`}async function ne(){try{const i=await(await fetch(G("/api/tables/proposals"))).json();sn(a("tprops"),i.proposals??[],{tag:()=>s("tool.town.capTag"),onView:n=>{pt(n)},onPromote:n=>{pe(n)},onArchive:n=>{ve(n)}}),a("tplive").textContent="· live",a("tlive").textContent="· live"}catch{a("tprops").innerHTML=`<div class="live">${h(s("tool.town.noApi"))}</div>`,a("tplive").textContent=s("tool.common.devOff"),a("tlive").textContent=s("tool.common.devOff")}ce()}function ce(){var n;const i=a("ttruth");i.innerHTML=`<div class="card"><b>tables.town</b><span class="id">${h(J)}</span>
      <div class="row"><button type="button" data-act="truth-load">${h(s("tool.town.loadTruth"))}</button></div></div>`,(n=i.querySelector('[data-act="truth-load"]'))==null||n.addEventListener("click",()=>{R=!1,K(!0).then(()=>C(s("tool.town.loaded")))})}async function pt(i){var n,f;try{const l=await(await fetch(G(`/api/tables/proposal?id=${encodeURIComponent(i)}`))).json(),r=(f=(n=l.docs)==null?void 0:n[0])==null?void 0:f.tables.town;if(r===void 0)throw new Error(s("tool.town.propNoTown"));const d=Fe.parse(r);v=null,I=null,R=!0,z(d),C(s("tool.town.loadedProp",{name:l.docs[0].name}))}catch(l){C(l.message,!0)}}async function pe(i){try{await fe(G("/api/tables/promote"),{proposalId:i}),C(s("tool.town.promoted")),R=!1,ne(),K(!0)}catch(n){C(n.message,!0)}}async function ve(i){try{await fe(G("/api/tables/archive"),{proposalId:i}),C(s("tool.town.archived")),ne()}catch(n){C(n.message,!0)}}async function le(){var r,d;let i;try{m.name=a("tname").value.trim()||m.name,i=Fe.parse(m)}catch(k){C(s("tool.town.zodFail",{msg:k.message.slice(0,200)}),!0);return}const n=a("tlabel").value.trim()||i.name;let f={};try{const k=await fetch(G("/api/tables/truth"));k.ok&&(f=((d=(r=(await k.json()).docs)==null?void 0:r[0])==null?void 0:d.tables)??{})}catch{}const l={formatVersion:Un,id:"tables",name:n,tables:{...f,town:i},createdAt:nn(),updatedAt:nn()};try{await fe(G("/api/tables/proposal"),{tables:l,label:n,createdBy:"user"}),C(s("tool.town.saved",{name:n})),ne()}catch(k){C(s("tool.town.saveFail",{msg:k.message}),!0)}}a("tsave").addEventListener("click",()=>{le()}),a("tload").addEventListener("click",()=>{R=!1,K(!0).then(()=>C(s("tool.town.loaded")))}),a("tlabel").addEventListener("input",b),a("tname").addEventListener("change",()=>{m.name=a("tname").value.trim()||m.name,L(),b()});function E(){a("tname").value=m.name,dt(),B(),ae(),ie(),re(),ke()}const ut=A.events.on("tables",()=>{ne(),K()}),be=ln(()=>{rn(N.querySelector("#townapp")),E(),ne()});return window.cdForgeTown={plan:()=>m,setPlan:i=>z(Fe.parse(i),{markDirty:!0}),tool:i=>{H=i,B(),ae()},click:(i,n)=>we(i,n),select:(i,n)=>(v=ze(i,n),E(),v),openDialog:i=>{const n=m.npcs.find(f=>f.id===i);return n&&te(n),(n==null?void 0:n.dialog)??null},lint:()=>Qt(m),save:()=>le(),promote:i=>pe(i),refresh:()=>ne(),reload:(i=!0)=>K(i),dirty:()=>R},rt()?(E(),ne()):K(!0).then(()=>{ne()}),{setVisible(i){a("townapp").classList.toggle("on",i),i&&E()},dispose(){ut(),be(),b(),delete window.cdForgeTown}}}const D=N=>s(`tool.forge.brush.${N}`),Zn=N=>{var A;return((A=N.names)==null?void 0:A[dn()])??N.name};function Je(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const ho={id:"forge",async mount(N,A){const{wapi:G,postJson:fe}=A.api;N.innerHTML=Vn,rn(N);const a=e=>N.querySelector(`#${e}`),C=Xn(N,A);let m="room";function H(e){m=e,a("app").style.display=e==="room"?"flex":"none",C.setVisible(e==="town"),a("modeRoom").classList.toggle("on",e==="room"),a("modeTown").classList.toggle("on",e==="town");try{sessionStorage.setItem("cdForgeModeM4",e)}catch{}}a("modeRoom").addEventListener("click",()=>H("room")),a("modeTown").addEventListener("click",()=>H("town"));const Q="plain";let p=Mt("first-keep","はじまりの砦",7,6,Je()),x="floor",T="brush",v="fire",j=6,I,V=null;const R=new On,J=()=>({element:v,power:j,monType:I}),Ae="cdForgeP2";function b(){try{sessionStorage.setItem(Ae,JSON.stringify({v:1,pf:p,brush:x,shape:T,hazardElement:v,hazardPower:j,spawnType:I??null,cam:{yaw:W,pitch:U,dist:B}}))}catch{}}function rt(){var e;try{const t=sessionStorage.getItem(Ae);if(!t)return!1;const o=JSON.parse(t);return o.v!==1||!((e=o.pf)!=null&&e.size)||!Array.isArray(o.pf.cells)?!1:(p=o.pf,x=o.brush??"floor",T=o.shape??"brush",v=o.hazardElement??"fire",j=o.hazardPower??6,I=o.spawnType??void 0,o.cam&&(W=o.cam.yaw,U=o.cam.pitch,B=o.cam.dist),!0)}catch{return!1}}const L=a("stage"),z=new Wt({antialias:!0});z.toneMapping=Mn,z.toneMappingExposure=1.22,z.setPixelRatio(Math.min(devicePixelRatio,2)),L.appendChild(z.domElement);const Y=new Ut,K=new Vt(42,1,.05,200),Se=Kt[Q],me=En(Se);Y.background=new _t(Se.bg);const dt=new Sn(me.hemiSky,me.hemiGround,Math.max(.5,me.hemiI)),Ye=new Lt(me.sunCol,Math.max(.8,me.sunI));Ye.position.set(3,4.2,2.4);const ze=new Lt(me.fillCol,.35);ze.position.set(-2.6,1.4,-1.8),Y.add(dt,Ye,ze);const we=new zn(document.createElement("div"),()=>{});let W=0,U=.72,B=9;const ae=new Re(3,0,2.5);function ee(){ae.set((p.size.w-1)/2,.3,(p.size.d-1)/2),B=Math.max(p.size.w,p.size.d)*1.35+2}function ie(){const e=L.clientWidth,t=L.clientHeight;z.setSize(e,t),K.aspect=e/t,K.updateProjectionMatrix()}A.own(window,"resize",ie);let he=null,xe=null;function te(){he&&Y.remove(he),xe&&Y.remove(xe),he=we.buildPrefabPreview(Q,p),xe=new Ue;for(const e of p.spawns)xe.add(ke(e));Y.add(he,xe),re()}let ye=!1,se=null;const ct=new Ie({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function re(){if(se&&(Y.remove(se),se=null),!ye)return;se=new Ue;const e=p.ports.length?An(p,p.ports[0],!1):new Set;for(let t=0;t<p.size.d;t++)for(let o=0;o<p.size.w;o++){const c=p.cells[t][o];if(c.kind!=="floor"||c.floorFeat==="water"||e.has(`${o},${t}`))continue;const u=new Me(new We(.96,.06,.96),ct);u.position.set(o,(c.height??0)*at+.34,t),se.add(u)}Y.add(se)}function Xe(e){const t=e?zt.find(o=>o.name===e):null;return{kind:"monster",name:e??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:t==null?void 0:t.size,heads:t==null?void 0:t.heads,element:t==null?void 0:t.element}}function de(e){const{geo:t,spots:o}=In(e),c=new Ue;c.add(new Me(t,Rn()));for(const u of o){const y=new Me(new We(1,1,1),new Ie({color:u.c}));y.position.set(u.x,u.y,u.z),y.scale.set(u.sx,u.sy,u.sz),c.add(y)}return c}function ke(e){var u,y;const t=new Ue,o=new Me(new We(.94,.05,.94),new Ie({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(o.position.y=.03,t.add(o),e.monType&&zt.some(M=>M.name===e.monType)){const M=Xe(e.monType),Le=de(M),_=((M.size??1)-1)/2;Le.position.set(_,0,_),t.add(Le)}else{const M=new Me(new Hn(.3),new Ie({color:11702236}));M.position.y=.62,t.add(M)}const c=(((y=(u=p.cells[e.y])==null?void 0:u[e.x])==null?void 0:y.height)??0)*at;return t.position.set(e.x,c,e.y),t}const ne=new Ie({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),ce=new Me(new We(1,1,1),ne);ce.visible=!1,Y.add(ce);const pt=new Ie({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),pe=new Me(new We(1,1,1),pt);pe.visible=!1,Y.add(pe);function ve(e,t){var c,u;if(!e){ce.visible=!1;return}const o=(((u=(c=p.cells[e.y])==null?void 0:c[e.x])==null?void 0:u.height)??0)*at;ce.visible=!0,ce.scale.set(1.04,.14,1.04),ce.position.set(e.x,o+.4,e.y),ne.color.setHex(t||x==="erase"?14707290:6003711)}function le(e,t){if(!e||!t){pe.visible=!1;return}const o=Math.min(e.x,t.x),c=Math.max(e.x,t.x),u=Math.min(e.y,t.y),y=Math.max(e.y,t.y);pe.visible=!0,pe.scale.set(c-o+1.04,.3,y-u+1.04),pe.position.set((o+c)/2,.3,(u+y)/2)}const E=new Cn,ut=new Nn(new Re(0,1,0),0);function be(e,t){const o=z.domElement.getBoundingClientRect(),c=new Pn((e-o.left)/o.width*2-1,-((t-o.top)/o.height*2-1));E.setFromCamera(c,K);const u=(_,He)=>_>=0&&He>=0&&_<p.size.w&&He<p.size.d;if(he){const _=E.intersectObject(he,!0);for(const He of _){const $t=He.point.clone();He.face&&$t.addScaledVector(He.face.normal,-.05);const qt=Math.round($t.x),Gt=Math.round($t.z);if(u(qt,Gt))return{x:qt,y:Gt}}}const y=new Re;if(!E.ray.intersectPlane(ut,y))return null;const M=Math.round(y.x),Le=Math.round(y.z);return u(M,Le)?{x:M,y:Le}:null}const Ze=a("msg");let i=0;function n(e,t=!1){Ze.textContent=e,Ze.style.color=t?"#ffd166":"#7fd17f",clearTimeout(i);const o=N.querySelector("#mtoast");o&&mt.matches&&(o.textContent=e,o.style.display="block",o.style.borderColor=t?"#ffd166":"#2b3547"),i=window.setTimeout(()=>{Ze.textContent="",o&&(o.style.display="none")},4500)}function f(e){a("guide").style.display=e?"block":"none"}a("help").addEventListener("click",()=>f(!0));function l(e){e&&(te(),f(!1))}function r(){R.commit(p)&&(k(),Ne(),b())}function d(e,t){p=e,Ce(),ee(),te(),r(),t&&n(t)}function k(){a("undo").disabled=!R.canUndo(),a("redo").disabled=!R.canRedo();const e=N.querySelector("#mUndo");e&&(e.disabled=!R.canUndo(),a("mRedo").disabled=!R.canRedo())}function $(){const e=R.undo();e&&(p=e,Ce(),te(),k(),Ne(),b(),n(s("tool.common.undone")))}function F(){const e=R.redo();e&&(p=e,Ce(),te(),k(),Ne(),b(),n(s("tool.common.redone")))}a("undo").addEventListener("click",$),a("redo").addEventListener("click",F);let P="none",X=!1,$e=0,g=0,w=new Set,S=null,O=null,q=null;function Tt(e,t,o){const c=`${t},${o}`;w.has(c)||(w.add(c),l(it(p,e,t,o,J())),e==="port"&&!(t===0||o===0||t===p.size.w-1||o===p.size.d-1)&&n(s("tool.forge.portEdgeOnly"),!0))}function Be(e,t){if(S&&(S.x!==t.x||S.y!==t.y)){let{x:o,y:c}=S;const u=Math.max(Math.abs(t.x-o),Math.abs(t.y-c));for(let y=1;y<=u;y++)Tt(e,Math.round(o+(t.x-o)*(y/u)),Math.round(c+(t.y-c)*(y/u)))}else Tt(e,t.x,t.y);S=t}z.domElement.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;z.domElement.setPointerCapture(e.pointerId),$e=e.clientX,g=e.clientY;const t=be(e.clientX,e.clientY);if(e.button===2){t?(P="erase",w=new Set,S=null,Be("erase",t)):P="orbit";return}if(e.button===1||X||!t){P="orbit";return}if(e.button===0){if(T==="rect"){P="rect",O=t,q=t,le(O,q);return}if(T==="fill"){l(Et(p,x,t.x,t.y,J())),r();return}P="paint",w=new Set,S=null,Be(x,t)}});let ft=null;z.domElement.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const t=be(e.clientX,e.clientY);ft=t,et(t),ve(t,P==="erase"),P==="orbit"?(W+=(e.clientX-$e)*.008,U=Math.min(1.4,Math.max(.15,U+(e.clientY-g)*.006))):(P==="paint"||P==="erase")&&t?Be(P==="erase"?"erase":x,t):P==="rect"&&t&&(q=t,le(O,q)),$e=e.clientX,g=e.clientY}),z.domElement.addEventListener("pointerup",e=>{e.pointerType!=="touch"&&(P==="rect"&&O&&q?(l(St(p,x,O.x,O.y,q.x,q.y,J())),r()):P==="paint"||P==="erase"?r():P==="orbit"&&b(),P="none",O=q=null,S=null,le(null,null))}),z.domElement.addEventListener("pointerleave",()=>{ve(null,!1),et(null)}),z.domElement.addEventListener("contextmenu",e=>e.preventDefault()),z.domElement.addEventListener("wheel",e=>{e.preventDefault(),B=Math.min(40,Math.max(3,B*(e.deltaY>0?1.08:.93)))},{passive:!1});const mt=matchMedia("(max-width: 900px)");function cn(){const e=Math.round(W/(Math.PI/4))*(Math.PI/4);Math.abs(W-e)<5*Math.PI/180&&(W=e)}let ue="none",Qe=null;function Pt(){ue="none",Qe=null,O=q=null,S=null,le(null,null),ve(null,!1)}Bn(z.domElement,{strokeStart(e,t){const o=be(e,t);if(!o){ue="none";return}if(Qe=JSON.stringify(p),T==="rect"){ue="rect",O=o,q=o,le(O,q);return}if(ue="paint",w=new Set,S=null,T==="fill"){l(Et(p,x,o.x,o.y,J())),w.add(`${o.x},${o.y}`);return}Be(x,o),ve(o,x==="erase")},strokeMove(e,t){const o=be(e,t);o&&(ue==="rect"?(q=o,le(O,q)):ue==="paint"&&T==="brush"&&(Be(x,o),ve(o,x==="erase")))},strokeEnd(){ue==="rect"&&O&&q&&l(St(p,x,O.x,O.y,q.x,q.y,J())),ue!=="none"&&(r(),Ke()),Pt()},strokeCancel(){ue==="paint"&&Qe&&(p=JSON.parse(Qe),te(),Ne()),Pt()},orbit(e,t){W+=e*.008,U=Math.min(1.4,Math.max(.15,U+t*.006))},orbitEnd(){cn(),b()},pinch(e){B=Math.min(40,Math.max(3,B/e))},undoTap(){$(),Ke()},redoTap(){F(),Ke()},longPress(e,t){const o=be(e,t);o&&(ve(o,!1),n(s("tool.forge.cellInfo",{x:o.x,y:o.y,desc:Ct(o.x,o.y)})),Ke())},strokeSize:()=>w.size});function Ct(e,t){const o=p.cells[t][e],c=[];o.kind==="wall"?c.push(o.low?D("low"):o.pillar?D("pillar"):o.breakable?D("breakable"):D("wall")):(c.push(o.floorFeat==="water"?D("water"):o.floorFeat==="slip"?D("slip"):D("floor")),o.hazard&&c.push(s("tool.forge.cell.hazard",{el:s(`elem.${o.hazard.element}`)})),(o.height??0)>0&&c.push(s("tool.forge.cell.height",{n:o.height??0})));const u=p.props.find(M=>M.x===e&&M.y===t);u&&c.push(Ve(u.kind)?D(u.kind):u.kind);const y=p.spawns.find(M=>M.x===e&&M.y===t);return y&&c.push(y.monType?_e(y.monType):s("tool.forge.cell.spawnAuto")),p.ports.some(M=>M.x===e&&M.y===t)&&c.push(D("port")),c.join("・")}function et(e){const t=a("hoverhint");if(!e){t.textContent=s("tool.forge.hoverIdle");return}const o=x==="spawn"?I?_e(I):s("tool.forge.auto"):D(x),c=x==="erase"?s("tool.forge.verb.erase"):T==="rect"?s("tool.forge.verb.rect",{name:o}):T==="fill"?s("tool.forge.verb.fill",{name:o}):s("tool.forge.verb.place",{name:o});t.textContent=s("tool.forge.hoverLine",{x:e.x,y:e.y,desc:Ct(e.x,e.y),verb:c})}const pn=e=>{var o,c,u;if(m==="town"||((o=e.target)==null?void 0:o.tagName)==="INPUT"||((c=e.target)==null?void 0:c.tagName)==="SELECT"||((u=e.target)==null?void 0:u.tagName)==="TEXTAREA")return;if(e.code==="Space"){X=!0,e.preventDefault();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="z"){e.preventDefault(),e.shiftKey?F():$();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault(),F();return}const t=e.key.toLowerCase();if(t==="b")oe("brush");else if(t==="r")oe("rect");else if(t==="f")oe("fill");else if(t==="escape")P="none",O=q=null,le(null,null),f(!1);else if(t==="arrowleft")W-=Math.PI/24;else if(t==="arrowright")W+=Math.PI/24;else if(t==="arrowup")U=Math.min(1.4,U+.05);else if(t==="arrowdown")U=Math.max(.15,U-.05);else{const y=Xt.find(M=>M.key===t);y&&ge(y.id)}},un=e=>{e.code==="Space"&&(X=!1)};A.own(window,"keydown",pn),A.own(window,"keyup",un),a("camL").addEventListener("click",()=>{W-=Math.PI/4,b()}),a("camR").addEventListener("click",()=>{W+=Math.PI/4,b()}),a("camIn").addEventListener("click",()=>{B=Math.max(3,B*.8),b()}),a("camOut").addEventListener("click",()=>{B=Math.min(40,B*1.25),b()});const De=new Wt({antialias:!0,preserveDrawingBuffer:!0});De.setSize(96,96);const Te=new Ut,ht=new Vt(40,1,.05,100);Te.add(new Tn(16777215,.85));const Nt=new Lt(16769725,1);Nt.position.set(3,6,4),Te.add(Nt);function tt(e){Te.background=new _t(Kt[Q].bg),Te.add(e);const t=new Fn().setFromObject(e),o=t.getCenter(new Re),c=t.getSize(new Re),u=Math.max(c.x,c.y,c.z)*.62+.24;ht.position.set(o.x+u*1.35,o.y+u*1.15,o.z+u*1.85),ht.lookAt(o),De.render(Te,ht);const y=De.domElement.toDataURL();return Te.remove(e),y}const Z=new Map;function nt(e){const t=`tile:${e}`;if(!Z.has(t)){const o=we.buildSample(Q,e);o.position.set(-1,0,-1);const c=new Ue;c.add(o),Z.set(t,tt(c))}return Z.get(t)}function vt(){if(!Z.has("port")){const e={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};Z.set("port",tt(we.buildPrefabPreview(Q,e)))}return Z.get("port")}function bt(e){const t=`mon:${e}`;return Z.has(t)||Z.set(t,tt(de(Xe(e)))),Z.get(t)}function fn(e){const t=`pf:${e.id}:${e.updatedAt}`;return Z.has(t)||Z.set(t,tt(we.buildPrefabPreview(Q,e))),Z.get(t)}const gt=[];function Pe(e,t,o,c,u,y,M,Le){const _=document.createElement("div");_.className="swatch",_.title=Le??"",_.innerHTML=`${c?`<img src="${c}" alt="" />`:`<div class="glyph">${u??""}</div>`}${y?`<span class="kbd">${y}</span>`:""}<div class="nm">${o}</div>`,_.addEventListener("click",()=>ge(t,M)),e.appendChild(_),gt.push({el:_,brush:t,monType:M})}function Ht(){for(const e of["palTerrain","palProps","palMisc","palSpawns"])a(e).innerHTML="";gt.length=0;for(const e of Xt)e.cat==="terrain"?Pe(a("palTerrain"),e.id,D(e.id),e.sample?nt(e.sample):null,e.id==="down"?"▼":null,e.key,void 0,s(`tool.forge.brushHint.${e.id}`)):e.cat==="prop"?Pe(a("palProps"),e.id,D(e.id),e.sample?nt(e.sample):null,null,e.key,void 0,s(`tool.forge.brushHint.${e.id}`)):e.cat==="port"?Pe(a("palMisc"),e.id,D(e.id),vt(),null,e.key,void 0,s(`tool.forge.brushHint.${e.id}`)):e.cat==="erase"&&Pe(a("palMisc"),e.id,D(e.id),null,"🧽","E",void 0,s(`tool.forge.brushHint.${e.id}`));Pe(a("palSpawns"),"spawn",s("tool.forge.auto"),null,"？",void 0,void 0,s("tool.forge.autoHint"));for(const e of zt)Pe(a("palSpawns"),"spawn",_e(e.name),bt(e.name),null,void 0,e.name,s("tool.forge.monHint",{min:e.min,max:e.max})+(e.size?`・${e.size}×${e.size}`:""))}const mn={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function ot(){const e=a("palopts");e.innerHTML=`<span>${xt(s("tool.forge.attrLabel"))}</span>`;for(const c of["fire","ice","earth","poison","holy"]){const u=document.createElement("button");u.className="chip"+(c===v?" on":""),u.style.background=mn[c],u.title=s(`elem.${c}`),u.addEventListener("click",()=>{v=c,ot(),je(),b()}),e.appendChild(u)}const t=document.createElement("span");t.textContent=`　${s("tool.forge.powerLabel")}`;const o=document.createElement("input");o.type="number",o.min="1",o.max="40",o.value=String(j),o.className="num",o.style.width="3.4em",o.addEventListener("change",()=>{j=Math.max(1,Math.min(40,Number(o.value)||6)),b()}),e.append(t,o)}function ge(e,t){x=e,e==="spawn"&&(I=t),wn(e,e==="spawn"?t:void 0),!Ve(e).areaOk&&T!=="brush"&&(oe("brush"),n(s("tool.forge.brushOneOnly",{name:D(e)}))),je(),et(ft),b()}function oe(e){if(e!=="brush"&&!Ve(x).areaOk){n(s("tool.forge.shapeOneOnly",{name:D(x)}),!0);return}T=e,je(),b()}function je(){const e=Ve(x);for(const u of gt)u.el.classList.toggle("on",u.brush===x&&(x!=="spawn"||u.monType===I));a("shBrush").classList.toggle("on",T==="brush"),a("shRect").classList.toggle("on",T==="rect"),a("shFill").classList.toggle("on",T==="fill"),a("nowname").textContent=x==="spawn"?s("tool.forge.nowSpawn",{name:I?_e(I):s("tool.forge.auto")}):x==="hazard"?s("tool.forge.nowHazard",{el:s(`elem.${v}`)}):D(e.id),a("nowshape").textContent=`（${s(`tool.common.shape.${T}`)}）`;const t=a("nowimg"),o=x==="spawn"?I?bt(I):null:x==="port"?vt():e.sample?nt(e.sample):null;o?(t.src=o,t.style.display="block"):t.style.display="none",a("palopts").classList.toggle("show",x==="hazard");const c=N.querySelector("#mNowImg");c&&(o?(c.src=o,c.style.display="block"):c.style.display="none",a("mNowName").textContent=a("nowname").textContent??"",a("mShB").classList.toggle("on",T==="brush"),a("mShR").classList.toggle("on",T==="rect"),a("mShF").classList.toggle("on",T==="fill"),yn())}a("shBrush").addEventListener("click",()=>oe("brush")),a("shRect").addEventListener("click",()=>oe("rect")),a("shFill").addEventListener("click",()=>oe("fill"));function Ce(){a("pid").value=p.id,a("pname").value=p.name,a("pw").value=String(p.size.w),a("pd").value=String(p.size.d),a("pdepth").value=`${p.meta.depthRange[0]}-${p.meta.depthRange[1]}`,a("pweight").value=String(p.meta.weight),a("ptags").value=p.meta.tags.join(" "),a("cPorts").checked=p.meta.solvability.portsConnected,a("cHaz").checked=p.meta.solvability.hazardAvoidable}function It(){p.id=a("pid").value.trim()||p.id,p.name=a("pname").value.trim()||p.name;const e=a("pdepth").value.split("-").map(t=>Math.max(1,Math.min(99,Number(t)||1)));p.meta.depthRange=[e[0]??1,Math.max(e[0]??1,e[1]??e[0]??99)],p.meta.weight=Math.max(1,Math.min(9,Number(a("pweight").value)||3)),p.meta.tags=a("ptags").value.split(/[\s,、]+/).map(t=>t.trim()).filter(Boolean),p.meta.solvability.portsConnected=a("cPorts").checked,p.meta.solvability.hazardAvoidable=a("cHaz").checked}for(const e of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])a(e).addEventListener("change",()=>{It(),r()});a("applySize").addEventListener("click",()=>{const e=Number(a("pw").value),t=Number(a("pd").value),o=Jt(p,e,t);Ce(),ee(),te(),r();const c=o.ports+o.props+o.spawns;n(c?s("tool.forge.resizedDrop",{w:p.size.w,d:p.size.d,n:c,ports:o.ports,props:o.props,spawns:o.spawns}):s("tool.forge.resized",{w:p.size.w,d:p.size.d}),c>0)}),a("newpf").addEventListener("click",()=>{const e=Math.floor(Math.random()*900)+100;d(Mt(`prefab-${e}`,s("tool.forge.newName",{n:e}),p.size.w,p.size.d,Je()),s("tool.forge.newSaid"))});function Ne(){const e=Yt(p),t=a("solv");t.innerHTML=e.items.map(u=>`<div class="s-${u.level}">${u.level==="ok"?"✓":u.level==="warn"?"⚠":"✗"} ${xt(u.key?s(u.key,u.params):u.msg)}</div>`).join("");const o=a("save");o.disabled=e.saveBlocked,a("savenote").textContent=e.saveBlocked?s("tool.forge.saveBlockedNote",{reason:e.blockReasonKey?s(e.blockReasonKey):e.blockReason??""}):s("tool.common.savenote");const c=N.querySelector("#mSolv");if(c){const u=e.items.filter(M=>M.level==="err").length,y=e.items.filter(M=>M.level==="warn").length;c.textContent=u?`✗ ${u}`:y?`⚠ ${y}`:"✓",c.className="mchip "+(u?"err":y?"warn":"ok"),a("mSave").disabled=e.saveBlocked}}function Rt(){return It(),Ee.parse({...p,updatedAt:Je()})}a("save").addEventListener("click",()=>{wt()});async function wt(){try{const e=Rt(),t=await fe(G("/api/forge/proposal"),{prefab:e,label:e.name,createdBy:"user"});n(s("tool.common.savedFuture",{id:t.id.slice(0,8)}))}catch(e){n(s("tool.common.saveFail",{msg:e.message}),!0)}}async function Ft(e){try{const t=await fe(G("/api/forge/promote"),{proposalId:e});n(t.promotedNote??s("tool.common.adoptedNote"))}catch(t){n(s("tool.common.promoteFail",{msg:t.message}),!0)}}async function Ot(e){try{await fe(G("/api/forge/archive"),{proposalId:e}),n(s("tool.common.archived"))}catch(t){n(s("tool.common.archiveFail",{msg:t.message}),!0)}}async function qe(){try{const[e,t]=await Promise.all([fetch(G("/api/forge/truth")).then(o=>o.json()),fetch(G("/api/forge/proposals")).then(o=>o.json())]);hn(t.proposals??[]),vn(e),a("live").innerHTML="<b>· live</b>"}catch{a("live").textContent=s("tool.common.devOff")}}function hn(e){sn(a("proposals"),e,{selectedId:V,onView:t=>{bn(t)},onPromote:t=>{Ft(t)},onArchive:t=>{Ot(t)}})}function vn(e){const t=e.prefabs??[];jn(a("truth"),t.map(o=>{let c=null;try{c=fn(Ee.parse(o))}catch{}return{id:o.id,name:Zn(o),meta:s("tool.forge.cardMeta",{w:o.size.w,d:o.size.d,a:o.meta.depthRange[0],b:o.meta.depthRange[1],wt:o.meta.weight})+(o.meta.tags.length?"・"+o.meta.tags.join("/"):""),thumb:c,onOpen:()=>{d(Ee.parse(o),s("tool.common.openedTruth",{name:o.name}))},onDup:()=>{const u=Ee.parse({...o,id:`${o.id}-2`,name:s("tool.common.copyName",{name:o.name}),updatedAt:Je()});d(u,s("tool.common.duplicated",{name:o.name}))},onCopyWorld:()=>{(async()=>{try{const u=await Gn("/api/forge","prefab",Ee.parse(o),A.worlds(),fe);u&&n(s("tool.world.copied",{world:u}))}catch(u){n(s("tool.world.copyFail",{msg:u.message}),!0)}})()}}}),s("tool.forge.truthEmpty"))}async function bn(e){const t=await fetch(G(`/api/forge/proposal?id=${encodeURIComponent(e)}`)).then(c=>c.json());V=e;const o=(t.prefabs??[])[t.prefabs.length-1];o&&d(Ee.parse(o),s("tool.common.viewingFuture",{id:e.slice(0,8)})),qe()}function xt(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}const gn=A.events.on("forge",()=>{qe()});let yt=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function wn(e,t){yt=[{brush:e,monType:t},...yt.filter(o=>o.brush!==e||o.monType!==t)].slice(0,5)}function xn(e){if(e.brush==="spawn")return e.monType?`<img src="${bt(e.monType)}" alt="" />`:'<div class="glyph">？</div>';if(e.brush==="port")return`<img src="${vt()}" alt="" />`;if(e.brush==="erase")return'<div class="glyph">🧽</div>';if(e.brush==="down")return'<div class="glyph">▼</div>';const t=Ve(e.brush);return t.sample?`<img src="${nt(t.sample)}" alt="" />`:'<div class="glyph"></div>'}function yn(){const e=N.querySelector("#hrecent");if(e){e.innerHTML="";for(const t of yt){const o=document.createElement("button");o.className="hswatch"+(t.brush===x&&(t.brush!=="spawn"||t.monType===I)?" on":""),o.innerHTML=`${xn(t)}<span class="nm">${xt(t.brush==="spawn"?t.monType?_e(t.monType):s("tool.forge.auto"):D(t.brush))}</span>`,o.addEventListener("click",()=>ge(t.brush,t.monType)),e.appendChild(o)}}}const Ge=Dn(["sheetSide","sheetLoop"]);function At(){mt.matches?(a("sheetSideBody").append(a("topbar"),a("side")),a("sheetLoopBody").append(a("loop"))):(Ge.closeAll(),a("app").insertBefore(a("side"),a("stagewrap")),a("stagewrap").insertBefore(a("topbar"),a("mchips")),a("app").appendChild(a("loop"))),ie()}a("mMenu").addEventListener("click",()=>Ge.open("sheetSide")),a("mShelf").addEventListener("click",()=>Ge.open("sheetLoop")),a("mSolv").addEventListener("click",()=>Ge.open("sheetSide")),a("hMore").addEventListener("click",()=>Ge.open("sheetSide")),a("mUndo").addEventListener("click",$),a("mRedo").addEventListener("click",F),a("mFit").addEventListener("click",()=>{ee(),b()}),a("mReach").addEventListener("click",()=>{ye=!ye,a("mReach").classList.toggle("on",ye),re()}),a("mSave").addEventListener("click",()=>{Ke(),wt()}),a("mShB").addEventListener("click",()=>oe("brush")),a("mShR").addEventListener("click",()=>oe("rect")),a("mShF").addEventListener("click",()=>oe("fill")),A.own(mt,"change",At);function kn(){K.position.set(ae.x+B*Math.sin(W)*Math.cos(U),ae.y+B*Math.sin(U),ae.z+B*Math.cos(W)*Math.cos(U)),K.lookAt(ae),z.render(Y,K)}let Bt=0,Dt=!1;function jt(){Dt||(Bt=requestAnimationFrame(jt),kn())}window.cdForge={paint:(e,t,o)=>{var c;return o&&ge(o),l(it(p,x,e,t,J())),r(),(c=p.cells[t])==null?void 0:c[e]},rect:(e,t,o,c,u)=>{u&&ge(u),l(St(p,x,e,t,o,c,J())),r()},fill:(e,t,o)=>{o&&ge(o),l(Et(p,x,e,t,J())),r()},erase:(e,t)=>{var o;return l(it(p,"erase",e,t)),r(),(o=p.cells[t])==null?void 0:o[e]},spawn:(e,t,o)=>{ge("spawn",o),l(it(p,"spawn",e,t,J())),r()},tool:(e,t)=>ge(e,t),shapeMode:e=>oe(e),hazard:(e,t)=>{v=e,t&&(j=t),ot()},undo:$,redo:F,resize:(e,t)=>{const o=Jt(p,e,t);return Ce(),ee(),te(),r(),o},newPrefab:(e,t,o,c)=>d(Mt(e,t,o,c,Je())),prefab:()=>Rt(),draft:()=>p,solv:()=>Yt(p),save:()=>wt(),promote:e=>Ft(e),archive:e=>Ot(e),refresh:()=>qe(),view:(e,t,o)=>{W=e,U=t,o!=null&&(B=o)},state:()=>({brush:x,shape:T,spawnType:I??null,hazardElement:v,canUndo:R.canUndo(),canRedo:R.canRedo(),guide:a("guide").style.display!=="none"}),draws:()=>z.info.render.calls,screenOf:(e,t)=>{var y,M;const o=(((M=(y=p.cells[t])==null?void 0:y[e])==null?void 0:M.height)??0)*at,c=new Re(e,o,t).project(K),u=z.domElement.getBoundingClientRect();return{cx:u.left+(c.x+1)/2*u.width,cy:u.top+(1-c.y)/2*u.height}},cellAt:(e,t)=>be(e,t)};async function $n(e){try{const o=((await fetch(G("/api/forge/truth")).then(c=>c.json())).prefabs??[]).find(c=>c.id===e);o?d(Ee.parse(o),s("tool.common.openedTruth",{name:o.name})):n(s("tool.studio.deepMiss",{id:e}),!0)}catch{}}const Ln=ln(()=>{Ht(),ot(),je(),Ne(),et(ft),qe()}),kt=rt();Ht(),ot(),R.reset(p),Ce(),kt||ee(),je(),k(),Ne(),te(),At(),ie(),f(!kt),kt&&n(s("tool.common.restored")),qe(),jt();try{sessionStorage.getItem("cdForgeModeM4")==="town"&&H("town")}catch{}return{applyParams(e){const t=e.get("tab")??e.get("mode");t==="town"?H("town"):t==="room"&&H("room");const o=e.get("id");o&&(H("room"),$n(o))},dispose(){Dt=!0,cancelAnimationFrame(Bt),clearTimeout(i),gn(),Ln(),C.dispose(),b();try{z.dispose(),z.forceContextLoss(),z.domElement.remove()}catch{}try{De.dispose(),De.forceContextLoss()}catch{}delete window.cdForge}}}};export{ho as forgePanel};
