import{W as Ct,A as sn,S as Rt,P as $t,E as Nt,z as rn,C as Ht,H as ln,D as tt,r as dn,l as re,M as U,B as ve,t as pn,F as He,V as le,J as cn,R as un,K as mn,G as xe,O as hn,w as fn,m as bn,u as gn}from"./render-voxel-CjFacDZD.js";import{e as nt,P as q}from"./prefab-CaEyAM_B.js";import{r as Bt,E as vn,c as It,a as Be,f as ot,b as at,d as we,B as Ft,e as xn}from"./forge-edit-CffY6cQY.js";import{a as wn}from"./touch-input-D1HYJrcI.js";import{i as yn,b as ye,r as kn,a as Mn}from"./tool-shelf-CUloPvsH.js";import{M as it}from"./dungeon-iRFe-wxN.js";import{a as zn}from"./creator-auth-Bl-sL_3z.js";import{o as Sn}from"./studio-BBWstWjK.js";import{b as Ln,t as r,c as ke,g as En}from"./i18n-D6wL48qN.js";import"./voxmodel-DIWseshL.js";import"./schemas-BBGxizon.js";import"./preload-helper-Dp1pzeXC.js";import"./tables-DZNtMvcF.js";import"./monster-SG2Rilkb.js";const Pn=`<!-- ============================================================
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
  #app { display: flex; height: 100%; }
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
</style>
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
`,h=M=>r(`tool.forge.brush.${M}`),Tn=M=>{var P;return((P=M.names)==null?void 0:P[En()])??M.name};function Me(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const qn={id:"forge",async mount(M,P){const{wapi:O,postJson:ze}=P.api;M.innerHTML=Pn,Ln(M);const o=e=>M.querySelector(`#${e}`),K="plain";let s=nt("first-keep","はじまりの砦",7,6,Me()),d="floor",u="brush",B="fire",W=6,z,st=null;const T=new vn,N=()=>({element:B,power:W,monType:z}),rt="cdForgeP2";function g(){try{sessionStorage.setItem(rt,JSON.stringify({v:1,pf:s,brush:d,shape:u,hazardElement:B,hazardPower:W,spawnType:z??null,cam:{yaw:w,pitch:y,dist:v}}))}catch{}}function Ot(){var e;try{const t=sessionStorage.getItem(rt);if(!t)return!1;const n=JSON.parse(t);return n.v!==1||!((e=n.pf)!=null&&e.size)||!Array.isArray(n.pf.cells)?!1:(s=n.pf,d=n.brush??"floor",u=n.shape??"brush",B=n.hazardElement??"fire",W=n.hazardPower??6,z=n.spawnType??void 0,n.cam&&(w=n.cam.yaw,y=n.cam.pitch,v=n.cam.dist),!0)}catch{return!1}}const Ie=o("stage"),c=new Ct({antialias:!0});c.toneMapping=sn,c.toneMappingExposure=1.22,c.setPixelRatio(Math.min(devicePixelRatio,2)),Ie.appendChild(c.domElement);const C=new Rt,A=new $t(42,1,.05,200),lt=Nt[K],X=rn(lt);C.background=new Ht(lt.bg);const At=new ln(X.hemiSky,X.hemiGround,Math.max(.5,X.hemiI)),dt=new tt(X.sunCol,Math.max(.8,X.sunI));dt.position.set(3,4.2,2.4);const pt=new tt(X.fillCol,.35);pt.position.set(-2.6,1.4,-1.8),C.add(At,dt,pt);const Se=new dn(document.createElement("div"),()=>{});let w=0,y=.72,v=9;const de=new le(3,0,2.5);function pe(){de.set((s.size.w-1)/2,.3,(s.size.d-1)/2),v=Math.max(s.size.w,s.size.d)*1.35+2}function Fe(){const e=Ie.clientWidth,t=Ie.clientHeight;c.setSize(e,t),A.aspect=e/t,A.updateProjectionMatrix()}P.own(window,"resize",Fe);let V=null,ce=null;function I(){V&&C.remove(V),ce&&C.remove(ce),V=Se.buildPrefabPreview(K,s),ce=new xe;for(const e of s.spawns)ce.add(Gt(e));C.add(V,ce),ct()}let Le=!1,Y=null;const Dt=new re({color:14703178,transparent:!0,opacity:.38,depthWrite:!1});function ct(){if(Y&&(C.remove(Y),Y=null),!Le)return;Y=new xe;const e=s.ports.length?xn(s,s.ports[0],!1):new Set;for(let t=0;t<s.size.d;t++)for(let n=0;n<s.size.w;n++){const a=s.cells[t][n];if(a.kind!=="floor"||a.floorFeat==="water"||e.has(`${n},${t}`))continue;const i=new U(new ve(.96,.06,.96),Dt);i.position.set(n,(a.height??0)*He+.34,t),Y.add(i)}C.add(Y)}function ut(e){const t=e?it.find(n=>n.name===e):null;return{kind:"monster",name:e??"？",color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},size:t==null?void 0:t.size,heads:t==null?void 0:t.heads,element:t==null?void 0:t.element}}function mt(e){const{geo:t,spots:n}=fn(e),a=new xe;a.add(new U(t,bn()));for(const i of n){const l=new U(new ve(1,1,1),new re({color:i.c}));l.position.set(i.x,i.y,i.z),l.scale.set(i.sx,i.sy,i.sz),a.add(l)}return a}function Gt(e){var i,l;const t=new xe,n=new U(new ve(.94,.05,.94),new re({color:11702236,transparent:!0,opacity:.55,depthWrite:!1}));if(n.position.y=.03,t.add(n),e.monType&&it.some(p=>p.name===e.monType)){const p=ut(e.monType),j=mt(p),k=((p.size??1)-1)/2;j.position.set(k,0,k),t.add(j)}else{const p=new U(new hn(.3),new re({color:11702236}));p.position.y=.62,t.add(p)}const a=(((l=(i=s.cells[e.y])==null?void 0:i[e.x])==null?void 0:l.height)??0)*He;return t.position.set(e.x,a,e.y),t}const ht=new re({color:6003711,transparent:!0,opacity:.4,depthWrite:!1}),J=new U(new ve(1,1,1),ht);J.visible=!1,C.add(J);const jt=new re({color:6003711,transparent:!0,opacity:.22,depthWrite:!1}),Z=new U(new ve(1,1,1),jt);Z.visible=!1,C.add(Z);function _(e,t){var a,i;if(!e){J.visible=!1;return}const n=(((i=(a=s.cells[e.y])==null?void 0:a[e.x])==null?void 0:i.height)??0)*He;J.visible=!0,J.scale.set(1.04,.14,1.04),J.position.set(e.x,n+.4,e.y),ht.color.setHex(t||d==="erase"?14707290:6003711)}function D(e,t){if(!e||!t){Z.visible=!1;return}const n=Math.min(e.x,t.x),a=Math.max(e.x,t.x),i=Math.min(e.y,t.y),l=Math.max(e.y,t.y);Z.visible=!0,Z.scale.set(a-n+1.04,.3,l-i+1.04),Z.position.set((n+a)/2,.3,(i+l)/2)}const Oe=new un,Ut=new mn(new le(0,1,0),0);function Q(e,t){const n=c.domElement.getBoundingClientRect(),a=new cn((e-n.left)/n.width*2-1,-((t-n.top)/n.height*2-1));Oe.setFromCamera(a,A);const i=(k,se)=>k>=0&&se>=0&&k<s.size.w&&se<s.size.d;if(V){const k=Oe.intersectObject(V,!0);for(const se of k){const et=se.point.clone();se.face&&et.addScaledVector(se.face.normal,-.05);const Pt=Math.round(et.x),Tt=Math.round(et.z);if(i(Pt,Tt))return{x:Pt,y:Tt}}}const l=new le;if(!Oe.ray.intersectPlane(Ut,l))return null;const p=Math.round(l.x),j=Math.round(l.z);return i(p,j)?{x:p,y:j}:null}const Ae=o("msg");let De=0;function m(e,t=!1){Ae.textContent=e,Ae.style.color=t?"#ffd166":"#7fd17f",clearTimeout(De);const n=M.querySelector("#mtoast");n&&Ke.matches&&(n.textContent=e,n.style.display="block",n.style.borderColor=t?"#ffd166":"#2b3547"),De=window.setTimeout(()=>{Ae.textContent="",n&&(n.style.display="none")},4500)}function Ee(e){o("guide").style.display=e?"block":"none"}o("help").addEventListener("click",()=>Ee(!0));function R(e){e&&(I(),Ee(!1))}function S(){T.commit(s)&&(Pe(),ie(),g())}function ee(e,t){s=e,ae(),pe(),I(),S(),t&&m(t)}function Pe(){o("undo").disabled=!T.canUndo(),o("redo").disabled=!T.canRedo();const e=M.querySelector("#mUndo");e&&(e.disabled=!T.canUndo(),o("mRedo").disabled=!T.canRedo())}function ue(){const e=T.undo();e&&(s=e,ae(),I(),Pe(),ie(),g(),m(r("tool.common.undone")))}function te(){const e=T.redo();e&&(s=e,ae(),I(),Pe(),ie(),g(),m(r("tool.common.redone")))}o("undo").addEventListener("click",ue),o("redo").addEventListener("click",te);let f="none",Ge=!1,je=0,Ue=0,G=new Set,$=null,x=null,b=null;function ft(e,t,n){const a=`${t},${n}`;G.has(a)||(G.add(a),R(Be(s,e,t,n,N())),e==="port"&&!(t===0||n===0||t===s.size.w-1||n===s.size.d-1)&&m(r("tool.forge.portEdgeOnly"),!0))}function me(e,t){if($&&($.x!==t.x||$.y!==t.y)){let{x:n,y:a}=$;const i=Math.max(Math.abs(t.x-n),Math.abs(t.y-a));for(let l=1;l<=i;l++)ft(e,Math.round(n+(t.x-n)*(l/i)),Math.round(a+(t.y-a)*(l/i)))}else ft(e,t.x,t.y);$=t}c.domElement.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;c.domElement.setPointerCapture(e.pointerId),je=e.clientX,Ue=e.clientY;const t=Q(e.clientX,e.clientY);if(e.button===2){t?(f="erase",G=new Set,$=null,me("erase",t)):f="orbit";return}if(e.button===1||Ge||!t){f="orbit";return}if(e.button===0){if(u==="rect"){f="rect",x=t,b=t,D(x,b);return}if(u==="fill"){R(ot(s,d,t.x,t.y,N())),S();return}f="paint",G=new Set,$=null,me(d,t)}});let qe=null;c.domElement.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const t=Q(e.clientX,e.clientY);qe=t,Ce(t),_(t,f==="erase"),f==="orbit"?(w+=(e.clientX-je)*.008,y=Math.min(1.4,Math.max(.15,y+(e.clientY-Ue)*.006))):(f==="paint"||f==="erase")&&t?me(f==="erase"?"erase":d,t):f==="rect"&&t&&(b=t,D(x,b)),je=e.clientX,Ue=e.clientY}),c.domElement.addEventListener("pointerup",e=>{e.pointerType!=="touch"&&(f==="rect"&&x&&b?(R(at(s,d,x.x,x.y,b.x,b.y,N())),S()):f==="paint"||f==="erase"?S():f==="orbit"&&g(),f="none",x=b=null,$=null,D(null,null))}),c.domElement.addEventListener("pointerleave",()=>{_(null,!1),Ce(null)}),c.domElement.addEventListener("contextmenu",e=>e.preventDefault()),c.domElement.addEventListener("wheel",e=>{e.preventDefault(),v=Math.min(40,Math.max(3,v*(e.deltaY>0?1.08:.93)))},{passive:!1});const Ke=matchMedia("(max-width: 900px)");function qt(){const e=Math.round(w/(Math.PI/4))*(Math.PI/4);Math.abs(w-e)<5*Math.PI/180&&(w=e)}let H="none",Te=null;function bt(){H="none",Te=null,x=b=null,$=null,D(null,null),_(null,!1)}wn(c.domElement,{strokeStart(e,t){const n=Q(e,t);if(!n){H="none";return}if(Te=JSON.stringify(s),u==="rect"){H="rect",x=n,b=n,D(x,b);return}if(H="paint",G=new Set,$=null,u==="fill"){R(ot(s,d,n.x,n.y,N())),G.add(`${n.x},${n.y}`);return}me(d,n),_(n,d==="erase")},strokeMove(e,t){const n=Q(e,t);n&&(H==="rect"?(b=n,D(x,b)):H==="paint"&&u==="brush"&&(me(d,n),_(n,d==="erase")))},strokeEnd(){H==="rect"&&x&&b&&R(at(s,d,x.x,x.y,b.x,b.y,N())),H!=="none"&&(S(),ye()),bt()},strokeCancel(){H==="paint"&&Te&&(s=JSON.parse(Te),I(),ie()),bt()},orbit(e,t){w+=e*.008,y=Math.min(1.4,Math.max(.15,y+t*.006))},orbitEnd(){qt(),g()},pinch(e){v=Math.min(40,Math.max(3,v/e))},undoTap(){ue(),ye()},redoTap(){te(),ye()},longPress(e,t){const n=Q(e,t);n&&(_(n,!1),m(r("tool.forge.cellInfo",{x:n.x,y:n.y,desc:gt(n.x,n.y)})),ye())},strokeSize:()=>G.size});function gt(e,t){const n=s.cells[t][e],a=[];n.kind==="wall"?a.push(n.low?h("low"):n.pillar?h("pillar"):n.breakable?h("breakable"):h("wall")):(a.push(n.floorFeat==="water"?h("water"):n.floorFeat==="slip"?h("slip"):h("floor")),n.hazard&&a.push(r("tool.forge.cell.hazard",{el:r(`elem.${n.hazard.element}`)})),(n.height??0)>0&&a.push(r("tool.forge.cell.height",{n:n.height??0})));const i=s.props.find(p=>p.x===e&&p.y===t);i&&a.push(we(i.kind)?h(i.kind):i.kind);const l=s.spawns.find(p=>p.x===e&&p.y===t);return l&&a.push(l.monType?ke(l.monType):r("tool.forge.cell.spawnAuto")),s.ports.some(p=>p.x===e&&p.y===t)&&a.push(h("port")),a.join("・")}function Ce(e){const t=o("hoverhint");if(!e){t.textContent=r("tool.forge.hoverIdle");return}const n=d==="spawn"?z?ke(z):r("tool.forge.auto"):h(d),a=d==="erase"?r("tool.forge.verb.erase"):u==="rect"?r("tool.forge.verb.rect",{name:n}):u==="fill"?r("tool.forge.verb.fill",{name:n}):r("tool.forge.verb.place",{name:n});t.textContent=r("tool.forge.hoverLine",{x:e.x,y:e.y,desc:gt(e.x,e.y),verb:a})}const Kt=e=>{var n,a,i;if(((n=e.target)==null?void 0:n.tagName)==="INPUT"||((a=e.target)==null?void 0:a.tagName)==="SELECT"||((i=e.target)==null?void 0:i.tagName)==="TEXTAREA")return;if(e.code==="Space"){Ge=!0,e.preventDefault();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="z"){e.preventDefault(),e.shiftKey?te():ue();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault(),te();return}const t=e.key.toLowerCase();if(t==="b")E("brush");else if(t==="r")E("rect");else if(t==="f")E("fill");else if(t==="escape")f="none",x=b=null,D(null,null),Ee(!1);else if(t==="arrowleft")w-=Math.PI/24;else if(t==="arrowright")w+=Math.PI/24;else if(t==="arrowup")y=Math.min(1.4,y+.05);else if(t==="arrowdown")y=Math.max(.15,y-.05);else{const l=Ft.find(p=>p.key===t);l&&F(l.id)}},Wt=e=>{e.code==="Space"&&(Ge=!1)};P.own(window,"keydown",Kt),P.own(window,"keyup",Wt),o("camL").addEventListener("click",()=>{w-=Math.PI/4,g()}),o("camR").addEventListener("click",()=>{w+=Math.PI/4,g()}),o("camIn").addEventListener("click",()=>{v=Math.max(3,v*.8),g()}),o("camOut").addEventListener("click",()=>{v=Math.min(40,v*1.25),g()});const he=new Ct({antialias:!0,preserveDrawingBuffer:!0});he.setSize(96,96);const ne=new Rt,We=new $t(40,1,.05,100);ne.add(new pn(16777215,.85));const vt=new tt(16769725,1);vt.position.set(3,6,4),ne.add(vt);function Re(e){ne.background=new Ht(Nt[K].bg),ne.add(e);const t=new gn().setFromObject(e),n=t.getCenter(new le),a=t.getSize(new le),i=Math.max(a.x,a.y,a.z)*.62+.24;We.position.set(n.x+i*1.35,n.y+i*1.15,n.z+i*1.85),We.lookAt(n),he.render(ne,We);const l=he.domElement.toDataURL();return ne.remove(e),l}const L=new Map;function $e(e){const t=`tile:${e}`;if(!L.has(t)){const n=Se.buildSample(K,e);n.position.set(-1,0,-1);const a=new xe;a.add(n),L.set(t,Re(a))}return L.get(t)}function Xe(){if(!L.has("port")){const e={size:{w:3,d:3},cells:[0,1,2].map(()=>[0,1,2].map(()=>({kind:"floor"}))),props:[],ports:[{x:1,y:2}]};L.set("port",Re(Se.buildPrefabPreview(K,e)))}return L.get("port")}function Ve(e){const t=`mon:${e}`;return L.has(t)||L.set(t,Re(mt(ut(e)))),L.get(t)}function Xt(e){const t=`pf:${e.id}:${e.updatedAt}`;return L.has(t)||L.set(t,Re(Se.buildPrefabPreview(K,e))),L.get(t)}const Ye=[];function oe(e,t,n,a,i,l,p,j){const k=document.createElement("div");k.className="swatch",k.title=j??"",k.innerHTML=`${a?`<img src="${a}" alt="" />`:`<div class="glyph">${i??""}</div>`}${l?`<span class="kbd">${l}</span>`:""}<div class="nm">${n}</div>`,k.addEventListener("click",()=>F(t,p)),e.appendChild(k),Ye.push({el:k,brush:t,monType:p})}function xt(){for(const e of["palTerrain","palProps","palMisc","palSpawns"])o(e).innerHTML="";Ye.length=0;for(const e of Ft)e.cat==="terrain"?oe(o("palTerrain"),e.id,h(e.id),e.sample?$e(e.sample):null,e.id==="down"?"▼":null,e.key,void 0,r(`tool.forge.brushHint.${e.id}`)):e.cat==="prop"?oe(o("palProps"),e.id,h(e.id),e.sample?$e(e.sample):null,null,e.key,void 0,r(`tool.forge.brushHint.${e.id}`)):e.cat==="port"?oe(o("palMisc"),e.id,h(e.id),Xe(),null,e.key,void 0,r(`tool.forge.brushHint.${e.id}`)):e.cat==="erase"&&oe(o("palMisc"),e.id,h(e.id),null,"🧽","E",void 0,r(`tool.forge.brushHint.${e.id}`));oe(o("palSpawns"),"spawn",r("tool.forge.auto"),null,"？",void 0,void 0,r("tool.forge.autoHint"));for(const e of it)oe(o("palSpawns"),"spawn",ke(e.name),Ve(e.name),null,void 0,e.name,r("tool.forge.monHint",{min:e.min,max:e.max})+(e.size?`・${e.size}×${e.size}`:""))}const Vt={fire:"#e0603a",ice:"#6fa8ff",earth:"#a08050",poison:"#7fc46a",holy:"#ffe9a8"};function Ne(){const e=o("palopts");e.innerHTML=`<span>${Ze(r("tool.forge.attrLabel"))}</span>`;for(const a of["fire","ice","earth","poison","holy"]){const i=document.createElement("button");i.className="chip"+(a===B?" on":""),i.style.background=Vt[a],i.title=r(`elem.${a}`),i.addEventListener("click",()=>{B=a,Ne(),fe(),g()}),e.appendChild(i)}const t=document.createElement("span");t.textContent=`　${r("tool.forge.powerLabel")}`;const n=document.createElement("input");n.type="number",n.min="1",n.max="40",n.value=String(W),n.className="num",n.style.width="3.4em",n.addEventListener("change",()=>{W=Math.max(1,Math.min(40,Number(n.value)||6)),g()}),e.append(t,n)}function F(e,t){d=e,e==="spawn"&&(z=t),Qt(e,e==="spawn"?t:void 0),!we(e).areaOk&&u!=="brush"&&(E("brush"),m(r("tool.forge.brushOneOnly",{name:h(e)}))),fe(),Ce(qe),g()}function E(e){if(e!=="brush"&&!we(d).areaOk){m(r("tool.forge.shapeOneOnly",{name:h(d)}),!0);return}u=e,fe(),g()}function fe(){const e=we(d);for(const i of Ye)i.el.classList.toggle("on",i.brush===d&&(d!=="spawn"||i.monType===z));o("shBrush").classList.toggle("on",u==="brush"),o("shRect").classList.toggle("on",u==="rect"),o("shFill").classList.toggle("on",u==="fill"),o("nowname").textContent=d==="spawn"?r("tool.forge.nowSpawn",{name:z?ke(z):r("tool.forge.auto")}):d==="hazard"?r("tool.forge.nowHazard",{el:r(`elem.${B}`)}):h(e.id),o("nowshape").textContent=`（${r(`tool.common.shape.${u}`)}）`;const t=o("nowimg"),n=d==="spawn"?z?Ve(z):null:d==="port"?Xe():e.sample?$e(e.sample):null;n?(t.src=n,t.style.display="block"):t.style.display="none",o("palopts").classList.toggle("show",d==="hazard");const a=M.querySelector("#mNowImg");a&&(n?(a.src=n,a.style.display="block"):a.style.display="none",o("mNowName").textContent=o("nowname").textContent??"",o("mShB").classList.toggle("on",u==="brush"),o("mShR").classList.toggle("on",u==="rect"),o("mShF").classList.toggle("on",u==="fill"),tn())}o("shBrush").addEventListener("click",()=>E("brush")),o("shRect").addEventListener("click",()=>E("rect")),o("shFill").addEventListener("click",()=>E("fill"));function ae(){o("pid").value=s.id,o("pname").value=s.name,o("pw").value=String(s.size.w),o("pd").value=String(s.size.d),o("pdepth").value=`${s.meta.depthRange[0]}-${s.meta.depthRange[1]}`,o("pweight").value=String(s.meta.weight),o("ptags").value=s.meta.tags.join(" "),o("cPorts").checked=s.meta.solvability.portsConnected,o("cHaz").checked=s.meta.solvability.hazardAvoidable}function wt(){s.id=o("pid").value.trim()||s.id,s.name=o("pname").value.trim()||s.name;const e=o("pdepth").value.split("-").map(t=>Math.max(1,Math.min(99,Number(t)||1)));s.meta.depthRange=[e[0]??1,Math.max(e[0]??1,e[1]??e[0]??99)],s.meta.weight=Math.max(1,Math.min(9,Number(o("pweight").value)||3)),s.meta.tags=o("ptags").value.split(/[\s,、]+/).map(t=>t.trim()).filter(Boolean),s.meta.solvability.portsConnected=o("cPorts").checked,s.meta.solvability.hazardAvoidable=o("cHaz").checked}for(const e of["pid","pname","pdepth","pweight","ptags","cPorts","cHaz"])o(e).addEventListener("change",()=>{wt(),S()});o("applySize").addEventListener("click",()=>{const e=Number(o("pw").value),t=Number(o("pd").value),n=Bt(s,e,t);ae(),pe(),I(),S();const a=n.ports+n.props+n.spawns;m(a?r("tool.forge.resizedDrop",{w:s.size.w,d:s.size.d,n:a,ports:n.ports,props:n.props,spawns:n.spawns}):r("tool.forge.resized",{w:s.size.w,d:s.size.d}),a>0)}),o("newpf").addEventListener("click",()=>{const e=Math.floor(Math.random()*900)+100;ee(nt(`prefab-${e}`,r("tool.forge.newName",{n:e}),s.size.w,s.size.d,Me()),r("tool.forge.newSaid"))});function ie(){const e=It(s),t=o("solv");t.innerHTML=e.items.map(i=>`<div class="s-${i.level}">${i.level==="ok"?"✓":i.level==="warn"?"⚠":"✗"} ${Ze(i.key?r(i.key,i.params):i.msg)}</div>`).join("");const n=o("save");n.disabled=e.saveBlocked,o("savenote").textContent=e.saveBlocked?r("tool.forge.saveBlockedNote",{reason:e.blockReasonKey?r(e.blockReasonKey):e.blockReason??""}):r("tool.common.savenote");const a=M.querySelector("#mSolv");if(a){const i=e.items.filter(p=>p.level==="err").length,l=e.items.filter(p=>p.level==="warn").length;a.textContent=i?`✗ ${i}`:l?`⚠ ${l}`:"✓",a.className="mchip "+(i?"err":l?"warn":"ok"),o("mSave").disabled=e.saveBlocked}}function yt(){return wt(),q.parse({...s,updatedAt:Me()})}o("save").addEventListener("click",()=>{Je()});async function Je(){try{const e=yt(),t=await ze(O("/api/forge/proposal"),{prefab:e,label:e.name,createdBy:"user"});m(r("tool.common.savedFuture",{id:t.id.slice(0,8)}))}catch(e){m(r("tool.common.saveFail",{msg:e.message}),!0)}}async function kt(e){try{const t=await ze(O("/api/forge/promote"),{proposalId:e});m(t.promotedNote??r("tool.common.adoptedNote"))}catch(t){m(r("tool.common.promoteFail",{msg:t.message}),!0)}}async function Mt(e){try{await ze(O("/api/forge/archive"),{proposalId:e}),m(r("tool.common.archived"))}catch(t){m(r("tool.common.archiveFail",{msg:t.message}),!0)}}async function be(){try{const[e,t]=await Promise.all([fetch(O("/api/forge/truth")).then(n=>n.json()),fetch(O("/api/forge/proposals")).then(n=>n.json())]);Yt(t.proposals??[]),Jt(e),o("live").innerHTML="<b>· live</b>"}catch{o("live").textContent=r("tool.common.devOff")}}function Yt(e){kn(o("proposals"),e,{selectedId:st,onView:t=>{Zt(t)},onPromote:t=>{kt(t)},onArchive:t=>{Mt(t)}})}function Jt(e){const t=e.prefabs??[];Mn(o("truth"),t.map(n=>{let a=null;try{a=Xt(q.parse(n))}catch{}return{id:n.id,name:Tn(n),meta:r("tool.forge.cardMeta",{w:n.size.w,d:n.size.d,a:n.meta.depthRange[0],b:n.meta.depthRange[1],wt:n.meta.weight})+(n.meta.tags.length?"・"+n.meta.tags.join("/"):""),thumb:a,onOpen:()=>{ee(q.parse(n),r("tool.common.openedTruth",{name:n.name}))},onDup:()=>{const i=q.parse({...n,id:`${n.id}-2`,name:r("tool.common.copyName",{name:n.name}),updatedAt:Me()});ee(i,r("tool.common.duplicated",{name:n.name}))},onCopyWorld:()=>{(async()=>{try{const i=await zn("/api/forge","prefab",q.parse(n),P.worlds(),ze);i&&m(r("tool.world.copied",{world:i}))}catch(i){m(r("tool.world.copyFail",{msg:i.message}),!0)}})()}}}),r("tool.forge.truthEmpty"))}async function Zt(e){const t=await fetch(O(`/api/forge/proposal?id=${encodeURIComponent(e)}`)).then(a=>a.json());st=e;const n=(t.prefabs??[])[t.prefabs.length-1];n&&ee(q.parse(n),r("tool.common.viewingFuture",{id:e.slice(0,8)})),be()}function Ze(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}const _t=P.events.on("forge",()=>{be()});let _e=[{brush:"floor"},{brush:"wall"},{brush:"up"},{brush:"port"},{brush:"erase"}];function Qt(e,t){_e=[{brush:e,monType:t},..._e.filter(n=>n.brush!==e||n.monType!==t)].slice(0,5)}function en(e){if(e.brush==="spawn")return e.monType?`<img src="${Ve(e.monType)}" alt="" />`:'<div class="glyph">？</div>';if(e.brush==="port")return`<img src="${Xe()}" alt="" />`;if(e.brush==="erase")return'<div class="glyph">🧽</div>';if(e.brush==="down")return'<div class="glyph">▼</div>';const t=we(e.brush);return t.sample?`<img src="${$e(t.sample)}" alt="" />`:'<div class="glyph"></div>'}function tn(){const e=M.querySelector("#hrecent");if(e){e.innerHTML="";for(const t of _e){const n=document.createElement("button");n.className="hswatch"+(t.brush===d&&(t.brush!=="spawn"||t.monType===z)?" on":""),n.innerHTML=`${en(t)}<span class="nm">${Ze(t.brush==="spawn"?t.monType?ke(t.monType):r("tool.forge.auto"):h(t.brush))}</span>`,n.addEventListener("click",()=>F(t.brush,t.monType)),e.appendChild(n)}}}const ge=yn(["sheetSide","sheetLoop"]);function zt(){Ke.matches?(o("sheetSideBody").append(o("topbar"),o("side")),o("sheetLoopBody").append(o("loop"))):(ge.closeAll(),o("app").insertBefore(o("side"),o("stagewrap")),o("stagewrap").insertBefore(o("topbar"),o("mchips")),o("app").appendChild(o("loop"))),Fe()}o("mMenu").addEventListener("click",()=>ge.open("sheetSide")),o("mShelf").addEventListener("click",()=>ge.open("sheetLoop")),o("mSolv").addEventListener("click",()=>ge.open("sheetSide")),o("hMore").addEventListener("click",()=>ge.open("sheetSide")),o("mUndo").addEventListener("click",ue),o("mRedo").addEventListener("click",te),o("mFit").addEventListener("click",()=>{pe(),g()}),o("mReach").addEventListener("click",()=>{Le=!Le,o("mReach").classList.toggle("on",Le),ct()}),o("mSave").addEventListener("click",()=>{ye(),Je()}),o("mShB").addEventListener("click",()=>E("brush")),o("mShR").addEventListener("click",()=>E("rect")),o("mShF").addEventListener("click",()=>E("fill")),P.own(Ke,"change",zt);function nn(){A.position.set(de.x+v*Math.sin(w)*Math.cos(y),de.y+v*Math.sin(y),de.z+v*Math.cos(w)*Math.cos(y)),A.lookAt(de),c.render(C,A)}let St=0,Lt=!1;function Et(){Lt||(St=requestAnimationFrame(Et),nn())}window.cdForge={paint:(e,t,n)=>{var a;return n&&F(n),R(Be(s,d,e,t,N())),S(),(a=s.cells[t])==null?void 0:a[e]},rect:(e,t,n,a,i)=>{i&&F(i),R(at(s,d,e,t,n,a,N())),S()},fill:(e,t,n)=>{n&&F(n),R(ot(s,d,e,t,N())),S()},erase:(e,t)=>{var n;return R(Be(s,"erase",e,t)),S(),(n=s.cells[t])==null?void 0:n[e]},spawn:(e,t,n)=>{F("spawn",n),R(Be(s,"spawn",e,t,N())),S()},tool:(e,t)=>F(e,t),shapeMode:e=>E(e),hazard:(e,t)=>{B=e,t&&(W=t),Ne()},undo:ue,redo:te,resize:(e,t)=>{const n=Bt(s,e,t);return ae(),pe(),I(),S(),n},newPrefab:(e,t,n,a)=>ee(nt(e,t,n,a,Me())),prefab:()=>yt(),draft:()=>s,solv:()=>It(s),save:()=>Je(),promote:e=>kt(e),archive:e=>Mt(e),refresh:()=>be(),view:(e,t,n)=>{w=e,y=t,n!=null&&(v=n)},state:()=>({brush:d,shape:u,spawnType:z??null,hazardElement:B,canUndo:T.canUndo(),canRedo:T.canRedo(),guide:o("guide").style.display!=="none"}),draws:()=>c.info.render.calls,screenOf:(e,t)=>{var l,p;const n=(((p=(l=s.cells[t])==null?void 0:l[e])==null?void 0:p.height)??0)*He,a=new le(e,n,t).project(A),i=c.domElement.getBoundingClientRect();return{cx:i.left+(a.x+1)/2*i.width,cy:i.top+(1-a.y)/2*i.height}},cellAt:(e,t)=>Q(e,t)};async function on(e){try{const n=((await fetch(O("/api/forge/truth")).then(a=>a.json())).prefabs??[]).find(a=>a.id===e);n?ee(q.parse(n),r("tool.common.openedTruth",{name:n.name})):m(r("tool.studio.deepMiss",{id:e}),!0)}catch{}}const an=Sn(()=>{xt(),Ne(),fe(),ie(),Ce(qe),be()}),Qe=Ot();return xt(),Ne(),T.reset(s),ae(),Qe||pe(),fe(),Pe(),ie(),I(),zt(),Fe(),Ee(!Qe),Qe&&m(r("tool.common.restored")),be(),Et(),{applyParams(e){const t=e.get("id");t&&on(t)},dispose(){Lt=!0,cancelAnimationFrame(St),clearTimeout(De),_t(),an(),g();try{c.dispose(),c.forceContextLoss(),c.domElement.remove()}catch{}try{he.dispose(),he.forceContextLoss()}catch{}delete window.cdForge}}}};export{qn as forgePanel};
