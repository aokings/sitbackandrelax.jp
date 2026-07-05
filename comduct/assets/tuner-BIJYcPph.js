import{G as ht,E as bt,a as gt,_ as Y,r as vt,g as N,d as xt,b as yt,c as kt,e as wt,f as $t,h as St,i as Ot,j as Pt}from"./dungeon-Du8C67AT.js";import{p as Lt}from"./prefab-CaEyAM_B.js";import{G as Tt,C as A,p as Mt}from"./tables-Du__anr4.js";import{o as et,s as j,l as B,a as _t}from"./schemas-BBGxizon.js";import{r as Nt}from"./tool-shelf-8xgyJ3dz.js";import{o as jt}from"./studio-CPz-TNtB.js";import{b as zt,t as i}from"./i18n-CUpE17Zf.js";import"./preload-helper-Dp1pzeXC.js";import"./voxmodel-DIWseshL.js";import"./creator-auth-C9Tw5ccD.js";const J="0.1.0";et({formatVersion:B(J),id:B("tables"),name:j().min(1),tables:Tt,createdAt:j(),updatedAt:j()});et({formatVersion:B(J),title:j(),updatedAt:j(),tablesOrder:_t(j())});function I(){return JSON.parse(JSON.stringify(A))}const E=(n,l)=>JSON.stringify(n)===JSON.stringify(l);function Et(n,l=A){const f={},$={};for(const r of Object.keys(l.tuning))n.tuning[r]!==l.tuning[r]&&($[r]=n.tuning[r]);return Object.keys($).length&&(f.tuning=$),E(n.genParams,l.genParams)||(f.genParams=n.genParams),E(n.gimmicks,l.gimmicks)||(f.gimmicks=n.gimmicks),E(n.enemyPacks,l.enemyPacks)||(f.enemyPacks=n.enemyPacks),E(n.themes,l.themes)||(f.themes=n.themes),E(n.materials,l.materials)||(f.materials=n.materials),Mt(f)}function Q(n){const l=I();return n.tuning&&Object.assign(l.tuning,n.tuning),n.genParams&&(l.genParams={...n.genParams}),n.gimmicks&&(l.gimmicks=JSON.parse(JSON.stringify(n.gimmicks))),n.enemyPacks&&(l.enemyPacks=JSON.parse(JSON.stringify(n.enemyPacks))),n.themes&&(l.themes=JSON.parse(JSON.stringify(n.themes))),n.materials&&(l.materials=JSON.parse(JSON.stringify(n.materials))),l}function D(n,l){return!n||l<n.min?0:Math.min(n.cap,n.base+(l-n.min)*n.ramp)}function X(n,l){return{maxRooms:n.maxRoomsBase+Math.min(n.maxRoomsAdd,l),loops:n.loopsBase+Math.min(n.loopsAdd,Math.floor(l/n.loopsDiv))}}function At(n,l){const f=Math.max(0,Math.floor(n))>>>0;return Array.from({length:l},($,r)=>f+r>>>0)}const nt={fire:"#e0603a",ice:"#6fa8ff",earth:"#c8a060",poison:"#7fc46a",holy:"#ffe9a8"};function Ct(n){return n.kind==="wall"?n.secret?"#6a4a8a":n.locked?"#a87b2a":n.breakable?"#6b5a41":n.low?"#46536e":n.pillar?"#4a5872":"#39455e":n.chest&&!n.chest.opened?"#e8c15a":n.portal?"#5fd2a5":n.shrine?"#ffe9a8":n.trap?"#c05a8a":n.item?"#9ad06a":n.hazard?nt[n.hazard.element]:n.floorFeat==="water"?"#2a5f9e":n.floorFeat==="slip"?"#79b7e0":n.floorFeat==="dark"?"#0d1119":n.floorFeat==="slow"?"#3d3a2c":n.floorFeat==="pit"?"#05070c":n.over?"#33415c":"#141b2a"}function Rt(n,l="tuner preview"){const f=ht.parse({formatVersion:gt,engineVersion:bt,meta:{title:l,author:"tuner",locale:"ja"},tables:n});return`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(f))}`}const Ht=["bruiser","shooter","skirmisher","caster"];function Ft(n){const l=n.split(/[,\s]+/).filter(Boolean);if(!l.length||l.length>4)return null;const f=[];for(const $ of l){const[r,x]=$.split(":");if(!Ht.includes(r))return null;const c=Number(x??1);if(!Number.isInteger(c)||c<1||c>4)return null;f.push({role:r,n:c})}return f}function Gt(n){return n.map(l=>`${l.role}:${l.n}`).join(" ")}const Dt=`<!-- ============================================================
     §studio W2 — 調律台パネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 tuner.html body の単一実体（二重持ちゼロ）：スタジオも旧 tuner.html（stub）も
     この1枚を mount する。中身は §maker M1 の従来 markup そのまま。
     改変は2点だけ＝#app の高さ 100vh→100%・モバイルの縦スクロールを body→#app へ
     （host の中で生きる＝standalone では html/body の height:100% 連鎖で従来と同じ見え方）。
     ============================================================ -->
<style>
  /* ============================================================
     §maker M1 生成チューナー（DESIGN-maker §B4・forge/sculpt/smith の隣）
     ・左＝3タブ（カーブ／表／feel）＝GameTables のつまみ（schema 工事ゼロ）
     ・中＝★seed 束見＝つまみを動かすと 9〜16 seed の小盤面が即並び直す
       （決定論だからタダ＝genFloor を read で回すだけ・乱数写像に触れない）
     ・右＝協働ループ（truth／future・⭐promote は人間ゲート）＋試遊
     ・§tool-i18n：UI 文字列は data-i18n / t()（tool.* キー）。ja は原文と同文。
     ============================================================ */
  :root {
    --bg: #12161f; --panel: #1a2130; --line: #2b3547;
    --text: #e8edf5; --muted: #8b96a8; --accent: #ffb347; --tint: #2e2412;
    --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--bg); color: var(--text); font: 14px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #app { display: flex; height: 100%; } /* §studio W2：唯一の改変＝100vh→100%（host の中で生きる） */
  #side { width: 380px; min-width: 330px; border-right: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 9px; }
  #side h1 { font-size: 15px; }
  .sub { color: var(--muted); font-size: 11px; }
  h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin-top: 3px; }
  button, select, input[type="text"], input[type="number"], input[type="color"] { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  input[type="text"], input[type="number"] { cursor: text; }
  input[type="range"] { accent-color: var(--accent); }
  button:hover { border-color: var(--accent); }
  button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  button:disabled { opacity: 0.45; cursor: not-allowed; }
  .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; flex-wrap: wrap; }
  .kv .lbl { color: var(--muted); font-size: 11px; min-width: 4.2em; }
  .kv input[type="text"] { flex: 1; min-width: 0; }
  .kv input.num { width: 4.6em; }
  /* 既定と違う欄＝火が入っている印（差分だけが data になる、の可視化） */
  input.chg, textarea.chg { border-color: var(--accent); box-shadow: 0 0 0 1px rgba(255, 179, 71, 0.35) inset; }
  /* 仕掛け/表の行 */
  table.grid { border-collapse: collapse; width: 100%; font-size: 11px; }
  table.grid th { color: var(--muted); font-weight: 400; text-align: left; padding: 2px 4px; position: sticky; top: 0; background: var(--panel); }
  table.grid td { padding: 1px 2px; }
  table.grid td input { width: 4em; padding: 3px 5px; font-size: 11px; }
  table.grid td input.wide { width: 8.5em; }
  table.grid tr.sel td:first-child { color: var(--accent); }
  table.grid td.key { cursor: pointer; white-space: nowrap; color: #cfe3ff; }
  .tblwrap { max-height: 300px; overflow: auto; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 4px 6px; }
  #curvechart { background: #0d1117; border: 1px solid var(--line); border-radius: 8px; width: 100%; }
  #mid { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  #stage { flex: 1; padding: 14px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
  #ctrl { background: var(--panel); border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  #ctrl input[type="range"] { width: 180px; }
  #depthv { color: var(--warn); font-weight: 700; min-width: 3em; }
  #gensum { color: var(--muted); font-size: 11px; }
  #grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(216px, 1fr)); gap: 10px; }
  .thumb { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px; display: flex; flex-direction: column; gap: 4px; cursor: pointer; }
  .thumb canvas { width: 100%; image-rendering: pixelated; background: #0d1117; border-radius: 4px; }
  .thumb .cap { font-size: 10px; color: var(--muted); font-family: ui-monospace, Menlo, monospace; }
  .thumb.zoom { grid-column: 1 / -1; }
  #lint { background: var(--panel); border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px; font-size: 12px; }
  #lint .ok { color: var(--ok); }
  #lint .err { color: var(--err); white-space: pre-wrap; }
  #legend { display: flex; gap: 10px; flex-wrap: wrap; font-size: 10px; color: var(--muted); }
  #legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 3px; vertical-align: -1px; }
  #foot { border-top: 1px solid var(--line); background: var(--panel); padding: 7px 12px; font-size: 12px; color: var(--muted); display: flex; gap: 14px; flex-wrap: wrap; }
  #msg { color: var(--ok); }
  #loop { width: 320px; min-width: 270px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  .card .id { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .card .who { font-size: 10px; color: var(--warn); }
  .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .live { color: var(--muted); font-size: 11px; }
  details.hist summary { cursor: pointer; color: var(--muted); font-size: 11px; }
  details.json pre { max-height: 220px; overflow: auto; background: #0d1117; border-radius: 6px; padding: 6px 8px; font-size: 10px; font-family: ui-monospace, Menlo, monospace; white-space: pre-wrap; }
  .tag { display: inline-block; background: #232c3e; border-radius: 5px; padding: 0 6px; font-size: 10px; color: var(--muted); margin-right: 4px; }
  .langpick { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; }
  #langmode { max-width: 12em; }
  .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid var(--warn); border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  .confirmbar span { color: var(--warn); }
  /* ── スマホ（≤900px）＝縦積み：束見が先頭（つまみ→手応えの距離を最短に） ── */
  @media (max-width: 900px) {
    #app { flex-direction: column; height: 100%; overflow-y: auto; } /* §studio W2：body スクロール→#app 内スクロール（host の中で生きる） */
    #side, #loop { width: 100%; min-width: 0; border: none; border-top: 1px solid var(--line); }
    #mid { order: -1; flex: 0 0 auto; }
    #stage { overflow: visible; padding: 10px; }
    #grid { grid-template-columns: repeat(2, 1fr); }
    #ctrl input[type="range"] { width: 130px; }
    .kv input[type="text"], .kv input[type="number"], .kv select, button.big { min-height: 44px; }
    .kv input[type="text"], .kv input[type="number"] { font-size: 16px; } /* iOS の自動ズーム回避 */
    table.grid td input { min-height: 34px; font-size: 13px; }
  }
</style>
<div id="app">
  <div id="side">
    <div id="about" style="display:flex;flex-direction:column;gap:9px">
      <h1><span data-i18n="tool.tuner.h1">🎛 調律台 — 生成チューナー</span> <span class="sub">M1</span></h1>
      <div class="sub"><span data-i18n="tool.tuner.intro">つまみは全部 data（GameTables）＝式と語彙は engine 固定。右の束見が「このつまみだと実際どんな盤が出るか」を分布で見せる。保存は future（truth 不変）・採用は ⭐（人間ゲート）。</span><a href="./studio.html?panel=forge" style="color:#8fb7ff" data-i18n="tool.tuner.linkForge">鍛冶場</a>・<a href="./studio.html?panel=smith" style="color:#8fb7ff" data-i18n="tool.tuner.linkSmith">工房</a>・<a href="./dungeon.html" style="color:#8fb7ff" data-i18n="tool.tuner.linkGame">実機</a></div>
      <div class="kv"><span class="langpick worldpick">🗺<select id="worldmode" title="World / ワールド"></select></span><span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span></div>
    </div>
    <div class="kv" id="tabs">
      <button id="tab-curve" class="on" type="button" data-i18n="tool.tuner.tab.curve">📈 カーブ</button>
      <button id="tab-table" type="button" data-i18n="tool.tuner.tab.table">📋 表</button>
      <button id="tab-feel" type="button" data-i18n="tool.tuner.tab.feel">🎚 feel</button>
    </div>
    <div id="form"></div>
    <button id="reset" type="button" data-i18n="tool.tuner.reset">↩ 全部 comduct 既定に戻す</button>
  </div>
  <div id="mid">
    <div id="stage">
      <div id="ctrl">
        <span class="lbl" data-i18n="tool.tuner.depth">深さ</span>
        <input id="depth" type="range" min="1" max="30" value="3" />
        <span id="depthv">3F</span>
        <span class="lbl" data-i18n="tool.tuner.seedBase">seed</span>
        <input id="seedbase" class="num" type="number" value="100" min="0" max="99999999" />
        <select id="count"><option value="9">9</option><option value="12" selected>12</option><option value="16">16</option></select>
        <button id="regen" type="button" data-i18n="tool.tuner.regen">🎲 束ね直す</button>
        <button id="play" class="big" type="button" data-i18n="tool.tuner.play">▶ この調律で遊ぶ</button>
        <span id="gensum"></span>
      </div>
      <div id="lint"></div>
      <div id="grid"></div>
      <div id="legend"></div>
    </div>
    <div id="foot"><span id="hint" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</span><span id="perf"></span><span id="msg"></span></div>
  </div>
  <div id="loop">
    <h2 data-i18n="tool.tuner.overridesHead">🧾 いまの差分（これが data になる）</h2>
    <details class="json" id="ovbox" open><summary class="sub" id="ovsum"></summary><pre id="ovjson"></pre></details>
    <div class="kv"><input id="savelabel" type="text" placeholder="調律の名前（例：罠濃いめ）" data-i18n-ph="tool.tuner.labelPh" /></div>
    <button class="big" id="save" type="button" data-i18n="tool.tuner.save">💾 提案として保存（future）</button>
    <h2 data-i18n="tool.tuner.futureHead">⭐ 提案（future）</h2>
    <div id="proposals"></div>
    <h2 data-i18n="tool.tuner.truthHead">📜 truth（この world の調律）</h2>
    <div id="truth"></div>
  </div>
</div>
`,m=n=>n.replace(/[&<>"]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[l]),tt=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z");try{const n=Object.assign({"../../tenants/masaru/comduct/prefabs/interior-craft.json":Ot,"../../tenants/masaru/comduct/prefabs/interior-equip.json":St,"../../tenants/masaru/comduct/prefabs/interior-heal.json":$t,"../../tenants/masaru/comduct/prefabs/interior-recruit.json":wt,"../../tenants/masaru/comduct/prefabs/interior-shop.json":kt,"../../tenants/masaru/comduct/prefabs/manifest.json":yt}),l=[];for(const f of Object.keys(n).sort())f.endsWith("manifest.json")||l.push(Lt(n[f].default??n[f]));Pt(l)}catch(n){console.warn("truth プレハブの読込に失敗（プレハブ無しの束見で継続）",n)}const Bt={tuning:A.tuning,gen:A.genParams,gim:A.gimmicks},Xt={id:"tuner",async mount(n,l){const{wapi:f,postJson:$}=l.api;n.innerHTML=Dt,zt(n);const r=o=>n.querySelector(`#${o}`);function x(o,t=!1){const e=r("msg");e.textContent=o,e.style.color=t?"#ff7a6e":"#7fd17f"}let c=I(),k="curve",S="trap",h=3,C={};function R(){return Et(c)}const W="cdTunerW2";function M(){try{sessionStorage.setItem(W,JSON.stringify({v:1,draft:c,tab:k,selGim:S,depth:h,seed:r("seedbase").value,count:r("count").value,label:r("savelabel").value}))}catch{}}function at(){var o,t;try{const e=sessionStorage.getItem(W);if(!e)return!1;const a=JSON.parse(e);return a.v!==1||!((o=a.draft)!=null&&o.genParams)||!((t=a.draft)!=null&&t.gimmicks)?!1:(c=a.draft,k=a.tab??"curve",S=a.draft.gimmicks[a.selGim]?a.selGim:"trap",h=Math.max(1,Math.min(30,a.depth|0||3)),r("depth").value=String(h),r("depthv").textContent=`${h}F`,a.seed&&(r("seedbase").value=a.seed),a.count&&(r("count").value=a.count),a.label&&(r("savelabel").value=a.label),!0)}catch{return!1}}const g=(o,t,e,a,d=1,b="num")=>{const s=o.split(".").reduce((u,O)=>u==null?void 0:u[O],Bt);return`<input class="${b}${typeof s=="number"&&s!==t?" chg":""}" data-f="${o}" type="number" value="${t}" min="${e}" max="${a}" step="${d}" />`};function y(){const o=r("form");if(k==="curve"){const a=c.genParams,d=X(a,h),b=Object.keys(c.gimmicks).map(s=>{const p=c.gimmicks[s];return`<tr data-gim="${s}" class="${s===S?"sel":""}">
            <td class="key" data-gimsel="${s}">${m(s)}</td>
            <td>${g(`gim.${s}.min`,p.min,1,99)}</td>
            <td>${g(`gim.${s}.base`,p.base,0,1,.01)}</td>
            <td>${g(`gim.${s}.ramp`,p.ramp,0,1,.005)}</td>
            <td>${g(`gim.${s}.cap`,p.cap,0,1,.01)}</td>
            <td class="sub">${Math.round(D(p,h)*100)}%</td>
          </tr>`}).join("");o.innerHTML=`
          <h2>${m(i("tool.tuner.genHead"))}</h2>
          <div class="kv"><span class="lbl">maxRooms</span>${g("gen.maxRoomsBase",a.maxRoomsBase,4,30)}<span class="sub">+min(</span>${g("gen.maxRoomsAdd",a.maxRoomsAdd,0,20)}<span class="sub">, depth)</span></div>
          <div class="kv"><span class="lbl">loops</span>${g("gen.loopsBase",a.loopsBase,0,8)}<span class="sub">+min(</span>${g("gen.loopsAdd",a.loopsAdd,0,8)}<span class="sub">, ⌊d/</span>${g("gen.loopsDiv",a.loopsDiv,1,9)}<span class="sub">⌋)</span></div>
          <div class="kv"><span class="lbl">${m(i("tool.tuner.roomSize"))}</span>${g("gen.roomW",a.roomW,3,12)}×${g("gen.roomH",a.roomH,3,12)}<span class="lbl">stories</span>${g("gen.stories",a.stories??0,0,2)}</div>
          <div class="sub">${m(i("tool.tuner.atDepth",{d:h,rooms:d.maxRooms,loops:d.loops}))}</div>
          <h2>${m(i("tool.tuner.gimHead"))}</h2>
          <canvas id="curvechart" width="352" height="150"></canvas>
          <div class="sub">${m(i("tool.tuner.gimNote"))}</div>
          <div class="tblwrap"><table class="grid">
            <thead><tr><th>${m(i("tool.tuner.colGim"))}</th><th>min</th><th>base</th><th>ramp</th><th>cap</th><th>@${h}F</th></tr></thead>
            <tbody>${b}</tbody>
          </table></div>`,V();return}if(k==="table"){const a=c.enemyPacks.map((s,p)=>`<tr>
          <td><input class="wide" data-f="pack.${p}.name" type="text" value="${m(s.name)}" /></td>
          <td>${g(`pack.${p}.min`,s.min,1,99)}</td><td>${g(`pack.${p}.max`,s.max,1,99)}</td>
          <td>${g(`pack.${p}.weight`,s.weight,1,9)}</td>
          <td><input class="wide" data-f="pack.${p}.units" type="text" value="${m(Gt(s.units))}" /></td>
          <td><button type="button" data-act="pack-del" data-i="${p}">✕</button></td></tr>`).join(""),d=c.materials.map((s,p)=>`<tr>
          <td><input data-f="mat.${p}.id" type="text" value="${m(s.id)}" style="width:7em" /></td>
          <td><input data-f="mat.${p}.name" type="text" value="${m(s.name)}" style="width:6.5em" /></td>
          <td>${g(`mat.${p}.min`,s.min,1,99)}</td><td>${g(`mat.${p}.value`,s.value,1,999)}</td>
          <td><button type="button" data-act="mat-del" data-i="${p}">✕</button></td></tr>`).join(""),b=Object.keys(c.themes).map(s=>{const p=c.themes[s],u=["","fire","ice","earth","poison","holy"].map(w=>`<option value="${w}"${(p.hazard??"")===w?" selected":""}>${w||"—"}</option>`).join(""),O=["scarce","normal","rich"].map(w=>`<option value="${w}"${p.water===w?" selected":""}>${w}</option>`).join("");return`<tr><td class="key" style="color:${nt[s]}">${s}</td>
            <td><input data-f="theme.${s}.col" type="color" value="${p.col}" /></td>
            <td><input data-f="theme.${s}.mat" type="text" value="${m(p.mat)}" style="width:7em" /></td>
            <td><select data-f="theme.${s}.water">${O}</select></td>
            <td><select data-f="theme.${s}.hazard">${u}</select></td></tr>`}).join("");o.innerHTML=`
          <h2>${m(i("tool.tuner.packHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>${m(i("tool.tuner.colName"))}</th><th>min</th><th>max</th><th>w</th><th>units</th><th></th></tr></thead><tbody>${a}</tbody></table></div>
          <div class="kv"><button type="button" data-act="pack-add">＋ ${m(i("tool.tuner.addRow"))}</button><span class="sub">${m(i("tool.tuner.unitsNote"))}</span></div>
          <h2>${m(i("tool.tuner.matHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>id</th><th>${m(i("tool.tuner.colName"))}</th><th>min</th><th>value</th><th></th></tr></thead><tbody>${d}</tbody></table></div>
          <div class="kv"><button type="button" data-act="mat-add">＋ ${m(i("tool.tuner.addRow"))}</button></div>
          <h2>${m(i("tool.tuner.themeHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>${m(i("tool.tuner.colTheme"))}</th><th>col</th><th>mat</th><th>water</th><th>hazard</th></tr></thead><tbody>${b}</tbody></table></div>`;return}const t=c.tuning,e=(a,d)=>`<h2>${m(a)}</h2>`+d.map(([b,s,p,u])=>`<div class="kv"><span class="lbl" style="min-width:9em">${b}</span>${g(`tuning.${b}`,t[b],s,p,u)}</div>`).join("");o.innerHTML=e(i("tool.tuner.feelPos"),[["posBack",1,3,.1],["posSide",1,3,.1],["posHigh",1,3,.1]])+e(i("tool.tuner.feelWave"),[["waveFirstAfter",0,30,1],["waveGapBase",1,30,1],["waveGapJitter",0,10,1],["waveCountCap",1,12,1],["monsterCap",4,40,1]])+e(i("tool.tuner.feelGold"),[["assaultGoldBase",0,99,1],["assaultGoldPerDepth",0,30,1]])+e(i("tool.tuner.feelMat"),[["matDropBase",0,100,1],["matDropPerDepth",0,20,1],["themeMatN",0,10,1]])+e(i("tool.tuner.feelBreath"),[["breathLen",1,9,1],["breathCd",1,20,1]])+e(i("tool.tuner.feelLarge"),[["largePerFloor",0,4,1],["largePerFloorDeep",0,6,1],["largeDeepFrom",1,99,1]])}function V(){const o=n.querySelector("#curvechart");if(!o)return;const t=o.getContext("2d"),e=o.width,a=o.height,d=30;t.clearRect(0,0,e,a),t.strokeStyle="#2b3547",t.lineWidth=1;for(const u of[.25,.5,.75])t.beginPath(),t.moveTo(0,a*u),t.lineTo(e,a*u),t.stroke();const b=u=>(u-1)/(d-1)*(e-8)+4,s=u=>a-6-u*(a-14),p=(u,O,w)=>{t.strokeStyle=O,t.lineWidth=w,t.beginPath();for(let L=1;L<=d;L++){const Z=s(D(c.gimmicks[u],L));L===1?t.moveTo(b(L),Z):t.lineTo(b(L),Z)}t.stroke()};for(const u of Object.keys(c.gimmicks))u!==S&&p(u,"rgba(139,150,168,0.28)",1);c.gimmicks[S]&&p(S,"#ffb347",2),t.strokeStyle="#ffd166",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(b(h),0),t.lineTo(b(h),a),t.stroke(),t.setLineDash([]),t.fillStyle="#ffb347",t.font="10px ui-monospace",t.fillText(`${S} @${h}F = ${Math.round(D(c.gimmicks[S],h)*100)}%`,6,11)}const v=3;let H=0,F="";function ot(o){let t=0;for(;N().floor.depth<o&&t++<o+30;){const e=N().actors.find(a=>a.kind==="hero");if(!e)return;e.pos={...N().floor.stairs},xt()}}function rt(o){const t=N(),e=t.floor;o.width=e.w*v,o.height=e.h*v;const a=o.getContext("2d");let d=0;for(let s=0;s<e.h;s++)for(let p=0;p<e.w;p++){const u=e.tiles[s][p];u.chest&&!u.chest.opened&&d++,a.fillStyle=Ct(u),a.fillRect(p*v,s*v,v,v)}a.fillStyle="#ffffff",a.fillRect(e.stairs.x*v,e.stairs.y*v,v,v),e.upstairs&&(a.fillStyle="#9aa7bd",a.fillRect(e.upstairs.x*v,e.upstairs.y*v,v,v));let b=0;for(const s of t.actors)s.alive&&(s.kind==="monster"?(b++,a.fillStyle="#ff5a4a"):s.kind==="hero"?a.fillStyle="#ffe9a8":a.fillStyle="#6ab0ff",a.fillRect(s.pos.x*v,s.pos.y*v,v,v));return{mon:b,chest:d}}async function _(){const o=++H;let t;try{t=R()}catch(u){r("lint").innerHTML=`<div class="err">✗ ${m(u.message.slice(0,800))}</div>`;return}C=t;const e=Object.keys(t).length;r("lint").innerHTML=`<div class="ok">✓ ${m(i("tool.tuner.lintOk",{n:e}))}</div>`,U(t),Y(e?t:null);const a=At(Number(r("seedbase").value)||0,Number(r("count").value)),d=r("grid");d.innerHTML=a.map((u,O)=>`<div class="thumb" data-i="${O}"><canvas></canvas><div class="cap">#${u} …</div></div>`).join("");const b=performance.now();for(let u=0;u<a.length;u++){if(o!==H)return;vt(a[u]),ot(h);const O=d.children[u],w=rt(O.querySelector("canvas"));O.querySelector(".cap").textContent=`#${a[u]}  ${i("tool.tuner.capMon")}${w.mon} ${i("tool.tuner.capChest")}${w.chest}${N().floor.monsterHouse?" MH!":""}${N().floor.sealRoom?" 封":""}`,u%4===3&&await new Promise(L=>setTimeout(L))}const s=Math.round(performance.now()-b);F=i("tool.tuner.perf",{n:a.length,d:h,ms:s}),r("perf").textContent=F;const p=X(c.genParams,h);r("gensum").textContent=i("tool.tuner.atDepth",{d:h,rooms:p.maxRooms,loops:p.loops})}let G=0;function P(){clearTimeout(G),G=window.setTimeout(()=>{_()},180),M()}function U(o){const t=Object.keys(o);r("ovsum").textContent=t.length?i("tool.tuner.ovSome",{list:t.join(", ")}):i("tool.tuner.ovNone"),r("ovjson").textContent=t.length?JSON.stringify(o,null,1):"{}"}function q(){const o=[["#39455e",i("tool.tuner.lgWall")],["#141b2a",i("tool.tuner.lgFloor")],["#2a5f9e",i("tool.tuner.lgWater")],["#e8c15a",i("tool.tuner.lgChest")],["#c05a8a",i("tool.tuner.lgTrap")],["#a87b2a",i("tool.tuner.lgLocked")],["#6a4a8a",i("tool.tuner.lgSecret")],["#ff5a4a",i("tool.tuner.lgMon")],["#ffe9a8",i("tool.tuner.lgHero")],["#ffffff",i("tool.tuner.lgStairs")]];r("legend").innerHTML=o.map(([t,e])=>`<span><i style="background:${t}"></i>${m(e)}</span>`).join("")}async function T(){try{const[o,t]=await Promise.all([fetch(f("/api/tables/truth")).then(e=>e.json()),fetch(f("/api/tables/proposals")).then(e=>e.json())]);it(o.docs??[]),st(t.proposals??[])}catch{r("truth").innerHTML=`<div class="live">${m(i("tool.tuner.noApi"))}</div>`,r("proposals").innerHTML=""}}function it(o){var d;const t=r("truth");if(!o.length){t.innerHTML=`<div class="live">${m(i("tool.tuner.truthEmpty"))}</div>`;return}const e=o[0],a=Object.keys(e.tables).length;t.innerHTML=`<div class="card"><b>${m(e.name)}</b><span class="id">${m(e.updatedAt)}・${a} ${m(i("tool.tuner.ovFields"))}</span>
        <div class="row"><button type="button" data-act="truth-load">${m(i("tool.tuner.load"))}</button></div></div>`,(d=t.querySelector('[data-act="truth-load"]'))==null||d.addEventListener("click",()=>{c=Q(e.tables),y(),P(),x(i("tool.tuner.loaded",{name:e.name}))})}function st(o){Nt(r("proposals"),o,{tag:()=>i("tool.tuner.capTag"),onView:t=>{lt(t)},onPromote:t=>{dt(t)},onArchive:t=>{ct(t)}})}async function lt(o){var t;try{const a=(t=(await(await fetch(f(`/api/tables/proposal?id=${encodeURIComponent(o)}`))).json()).docs)==null?void 0:t[0];if(!a)throw new Error("proposal is empty");c=Q(a.tables),y(),P(),x(i("tool.tuner.loaded",{name:a.name}))}catch(e){x(e.message,!0)}}async function dt(o){try{await $(f("/api/tables/promote"),{proposalId:o}),x(i("tool.tuner.promoted")),T()}catch(t){x(t.message,!0)}}async function ct(o){try{await $(f("/api/tables/archive"),{proposalId:o}),x(i("tool.tuner.archived")),T()}catch(t){x(t.message,!0)}}async function K(){let o;try{o=R()}catch(a){x(a.message,!0);return}const t=r("savelabel").value.trim()||i("tool.tuner.defaultLabel"),e={formatVersion:J,id:"tables",name:t,tables:o,createdAt:tt(),updatedAt:tt()};try{await $(f("/api/tables/proposal"),{tables:e,label:t,createdBy:"user"}),x(i("tool.tuner.saved",{name:t})),T()}catch(a){x(a.message,!0)}}function pt(o,t){const e=o.split("."),a=Number(t);if(e[0]==="tuning")c.tuning[e[1]]=a;else if(e[0]==="gen")c.genParams[e[1]]=a;else if(e[0]==="gim"){const d=c.gimmicks[e[1]];d&&(d[e[2]]=a),S=e[1],V()}else if(e[0]==="pack"){const d=c.enemyPacks[Number(e[1])];if(!d)return;if(e[2]==="name")d.name=t;else if(e[2]==="units"){const b=Ft(t);if(!b){x(i("tool.tuner.unitsBad"),!0);return}d.units=b}else d[e[2]]=a}else if(e[0]==="mat"){const d=c.materials[Number(e[1])];if(!d)return;e[2]==="id"||e[2]==="name"?d[e[2]]=t:d[e[2]]=a}else if(e[0]==="theme"){const d=c.themes[e[1]];if(!d)return;e[2]==="col"||e[2]==="mat"?d[e[2]]=t:e[2]==="water"?d.water=t:e[2]==="hazard"&&(d.hazard=t||null)}P()}r("form").addEventListener("input",o=>{const t=o.target,e=t.getAttribute("data-f");e&&pt(e,t.value)}),r("form").addEventListener("click",o=>{const t=o.target.closest("[data-act],[data-gimsel]");if(!t)return;const e=t.getAttribute("data-gimsel");if(e){S=e,y();return}const a=t.getAttribute("data-act"),d=Number(t.getAttribute("data-i")??-1);if(a==="pack-del")c.enemyPacks.splice(d,1);else if(a==="pack-add")c.enemyPacks.push({name:i("tool.tuner.newPack"),min:1,max:99,weight:2,units:[{role:"bruiser",n:1}]});else if(a==="mat-del")c.materials.splice(d,1);else if(a==="mat-add")c.materials.push({id:`mat${c.materials.length}`,name:i("tool.tuner.newMat"),min:1,value:10});else return;y(),P()});function z(){r("tab-curve").classList.toggle("on",k==="curve"),r("tab-table").classList.toggle("on",k==="table"),r("tab-feel").classList.toggle("on",k==="feel")}r("tab-curve").addEventListener("click",()=>{k="curve",z(),y(),M()}),r("tab-table").addEventListener("click",()=>{k="table",z(),y(),M()}),r("tab-feel").addEventListener("click",()=>{k="feel",z(),y(),M()}),r("reset").addEventListener("click",()=>{c=I(),y(),P(),x(i("tool.tuner.resetDone"))}),r("depth").addEventListener("input",()=>{h=Number(r("depth").value),r("depthv").textContent=`${h}F`,k==="curve"&&y(),P()}),r("seedbase").addEventListener("input",P),r("count").addEventListener("change",()=>{M(),_()}),r("regen").addEventListener("click",()=>{_()}),r("save").addEventListener("click",()=>{K()}),r("play").addEventListener("click",()=>{const o=Object.keys(C).length?`dungeon.html?pack=${encodeURIComponent(Rt(C))}`:"dungeon.html";window.open(o,"_blank")}),r("grid").addEventListener("click",o=>{const t=o.target.closest(".thumb");t&&t.classList.toggle("zoom")});const ut=l.events.on("tables",()=>{T()});window.cdTuner={draft:()=>c,patch:o=>{o(c),y(),P()},overrides:()=>R(),depth:o=>(h=o,r("depth").value=String(o),r("depthv").textContent=`${o}F`,_()),regen:()=>_(),perf:()=>F,save:()=>K(),refresh:()=>T()};const mt=jt(()=>{z(),y(),q(),U(C),T()}),ft=at();return z(),y(),q(),ft&&x(i("tool.common.restored")),_(),T(),{applyParams(o){const t=Number(o.get("depth"));!Number.isFinite(t)||t<1||(h=Math.max(1,Math.min(30,Math.round(t))),r("depth").value=String(h),r("depthv").textContent=`${h}F`,k==="curve"&&y(),P())},dispose(){H++,clearTimeout(G),ut(),mt(),M(),Y(null),delete window.cdTuner}}}};export{Xt as tunerPanel};
