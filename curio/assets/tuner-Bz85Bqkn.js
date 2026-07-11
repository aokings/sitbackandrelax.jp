import{u as U,a1 as dt,q as j,a2 as pt,a3 as ct,a4 as ut,a5 as mt,a6 as ft,a7 as ht,a8 as bt,a9 as vt,r as gt}from"./dungeon-C4wSHy-I.js";import{p as xt}from"./prefab-DsCyDzqv.js";import{C as F}from"./tables-CeMbYj3G.js";import{T as yt}from"./tables-doc-Dj1yoess.js";import{f as J,p as wt,a as $t,g as V,b as R,u as kt,E as Lt,s as Tt,o as St,t as _t,d as K}from"./tuner-core-DO9AaxZD.js";import{r as Mt}from"./tool-shelf-w4U13pug.js";import{o as Pt}from"./studio-cz5LGzS3.js";import{c as jt,t as o}from"./world-ui-GIWH7IUu.js";import"./voxmodel-BvUzcFRp.js";import"./gamepack-BTweR0v7.js";import"./three.module-B1bP4c5T.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./creator-auth-C2cecs39.js";const zt=`<!-- ============================================================
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
    <button id="reset" type="button" data-i18n="tool.tuner.reset">↩ 全部 既定に戻す</button>
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
`,c=g=>g.replace(/[&<>"]/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[S]),Z=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z");try{const g=Object.assign({"../../tenants/masaru/comduct/prefabs/interior-craft.json":vt,"../../tenants/masaru/comduct/prefabs/interior-equip.json":bt,"../../tenants/masaru/comduct/prefabs/interior-heal.json":ht,"../../tenants/masaru/comduct/prefabs/interior-recruit.json":ft,"../../tenants/masaru/comduct/prefabs/interior-shop.json":mt,"../../tenants/masaru/comduct/prefabs/manifest.json":ut,"../../tenants/masaru/comduct/prefabs/scribe-alcove.json":ct}),S=[];for(const w of Object.keys(g).sort())w.endsWith("manifest.json")||S.push(xt(g[w].default??g[w]));gt(S)}catch(g){console.warn("truth プレハブの読込に失敗（プレハブ無しの束見で継続）",g)}const Ot={tuning:F.tuning,gen:F.genParams,gim:F.gimmicks},Ut={id:"tuner",async mount(g,S){const{wapi:w,postJson:H}=S.api;g.innerHTML=zt,jt(g);const i=a=>g.querySelector(`#${a}`);function b(a,t=!1){const e=i("msg");e.textContent=a,e.style.color=t?"#ff7a6e":"#7fd17f"}let p=J(),x="curve",$="trap",u=3,O={};function C(){return St(p)}const D="cdTunerW2";function M(){try{sessionStorage.setItem(D,JSON.stringify({v:1,draft:p,tab:x,selGim:$,depth:u,seed:i("seedbase").value,count:i("count").value,label:i("savelabel").value}))}catch{}}function Y(){var a,t;try{const e=sessionStorage.getItem(D);if(!e)return!1;const n=JSON.parse(e);return n.v!==1||!((a=n.draft)!=null&&a.genParams)||!((t=n.draft)!=null&&t.gimmicks)?!1:(p=n.draft,x=n.tab??"curve",$=n.draft.gimmicks[n.selGim]?n.selGim:"trap",u=Math.max(1,Math.min(30,n.depth|0||3)),i("depth").value=String(u),i("depthv").textContent=`${u}F`,n.seed&&(i("seedbase").value=n.seed),n.count&&(i("count").value=n.count),n.label&&(i("savelabel").value=n.label),!0)}catch{return!1}}const f=(a,t,e,n,s=1,m="num")=>{const r=a.split(".").reduce((d,k)=>d==null?void 0:d[k],Ot);return`<input class="${m}${typeof r=="number"&&r!==t?" chg":""}" data-f="${a}" type="number" value="${t}" min="${e}" max="${n}" step="${s}" />`};function v(){const a=i("form");if(x==="curve"){const n=p.genParams,s=V(n,u),m=Object.keys(p.gimmicks).map(r=>{const l=p.gimmicks[r];return`<tr data-gim="${r}" class="${r===$?"sel":""}">
            <td class="key" data-gimsel="${r}">${c(r)}</td>
            <td>${f(`gim.${r}.min`,l.min,1,99)}</td>
            <td>${f(`gim.${r}.base`,l.base,0,1,.01)}</td>
            <td>${f(`gim.${r}.ramp`,l.ramp,0,1,.005)}</td>
            <td>${f(`gim.${r}.cap`,l.cap,0,1,.01)}</td>
            <td class="sub">${Math.round(R(l,u)*100)}%</td>
          </tr>`}).join("");a.innerHTML=`
          <h2>${c(o("tool.tuner.genHead"))}</h2>
          <div class="kv"><span class="lbl">maxRooms</span>${f("gen.maxRoomsBase",n.maxRoomsBase,4,30)}<span class="sub">+min(</span>${f("gen.maxRoomsAdd",n.maxRoomsAdd,0,20)}<span class="sub">, depth)</span></div>
          <div class="kv"><span class="lbl">loops</span>${f("gen.loopsBase",n.loopsBase,0,8)}<span class="sub">+min(</span>${f("gen.loopsAdd",n.loopsAdd,0,8)}<span class="sub">, ⌊d/</span>${f("gen.loopsDiv",n.loopsDiv,1,9)}<span class="sub">⌋)</span></div>
          <div class="kv"><span class="lbl">${c(o("tool.tuner.roomSize"))}</span>${f("gen.roomW",n.roomW,3,12)}×${f("gen.roomH",n.roomH,3,12)}<span class="lbl">stories</span>${f("gen.stories",n.stories??0,0,2)}</div>
          <div class="sub">${c(o("tool.tuner.atDepth",{d:u,rooms:s.maxRooms,loops:s.loops}))}</div>
          <h2>${c(o("tool.tuner.gimHead"))}</h2>
          <canvas id="curvechart" width="352" height="150"></canvas>
          <div class="sub">${c(o("tool.tuner.gimNote"))}</div>
          <div class="tblwrap"><table class="grid">
            <thead><tr><th>${c(o("tool.tuner.colGim"))}</th><th>min</th><th>base</th><th>ramp</th><th>cap</th><th>@${u}F</th></tr></thead>
            <tbody>${m}</tbody>
          </table></div>`,B();return}if(x==="table"){const n=p.enemyPacks.map((r,l)=>`<tr>
          <td><input class="wide" data-f="pack.${l}.name" type="text" value="${c(r.name)}" /></td>
          <td>${f(`pack.${l}.min`,r.min,1,99)}</td><td>${f(`pack.${l}.max`,r.max,1,99)}</td>
          <td>${f(`pack.${l}.weight`,r.weight,1,9)}</td>
          <td><input class="wide" data-f="pack.${l}.units" type="text" value="${c(kt(r.units))}" /></td>
          <td><button type="button" data-act="pack-del" data-i="${l}">✕</button></td></tr>`).join(""),s=p.materials.map((r,l)=>`<tr>
          <td><input data-f="mat.${l}.id" type="text" value="${c(r.id)}" style="width:7em" /></td>
          <td><input data-f="mat.${l}.name" type="text" value="${c(r.name)}" style="width:6.5em" /></td>
          <td>${f(`mat.${l}.min`,r.min,1,99)}</td><td>${f(`mat.${l}.value`,r.value,1,999)}</td>
          <td><button type="button" data-act="mat-del" data-i="${l}">✕</button></td></tr>`).join(""),m=Object.keys(p.themes).map(r=>{const l=p.themes[r],d=["","fire","ice","earth","poison","holy"].map(y=>`<option value="${y}"${(l.hazard??"")===y?" selected":""}>${y||"—"}</option>`).join(""),k=["scarce","normal","rich"].map(y=>`<option value="${y}"${l.water===y?" selected":""}>${y}</option>`).join("");return`<tr><td class="key" style="color:${Lt[r]}">${r}</td>
            <td><input data-f="theme.${r}.col" type="color" value="${l.col}" /></td>
            <td><input data-f="theme.${r}.mat" type="text" value="${c(l.mat)}" style="width:7em" /></td>
            <td><select data-f="theme.${r}.water">${k}</select></td>
            <td><select data-f="theme.${r}.hazard">${d}</select></td></tr>`}).join("");a.innerHTML=`
          <h2>${c(o("tool.tuner.packHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>${c(o("tool.tuner.colName"))}</th><th>min</th><th>max</th><th>w</th><th>units</th><th></th></tr></thead><tbody>${n}</tbody></table></div>
          <div class="kv"><button type="button" data-act="pack-add">＋ ${c(o("tool.tuner.addRow"))}</button><span class="sub">${c(o("tool.tuner.unitsNote"))}</span></div>
          <h2>${c(o("tool.tuner.matHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>id</th><th>${c(o("tool.tuner.colName"))}</th><th>min</th><th>value</th><th></th></tr></thead><tbody>${s}</tbody></table></div>
          <div class="kv"><button type="button" data-act="mat-add">＋ ${c(o("tool.tuner.addRow"))}</button></div>
          <h2>${c(o("tool.tuner.themeHead"))}</h2>
          <div class="tblwrap"><table class="grid"><thead><tr><th>${c(o("tool.tuner.colTheme"))}</th><th>col</th><th>mat</th><th>water</th><th>hazard</th></tr></thead><tbody>${m}</tbody></table></div>`;return}const t=p.tuning,e=(n,s)=>`<h2>${c(n)}</h2>`+s.map(([m,r,l,d])=>`<div class="kv"><span class="lbl" style="min-width:9em">${m}</span>${f(`tuning.${m}`,t[m],r,l,d)}</div>`).join("");a.innerHTML=e(o("tool.tuner.feelPos"),[["posBack",1,3,.1],["posSide",1,3,.1],["posHigh",1,3,.1]])+e(o("tool.tuner.feelWave"),[["waveFirstAfter",0,30,1],["waveGapBase",1,30,1],["waveGapJitter",0,10,1],["waveCountCap",1,12,1],["monsterCap",4,40,1]])+e(o("tool.tuner.feelGold"),[["assaultGoldBase",0,99,1],["assaultGoldPerDepth",0,30,1]])+e(o("tool.tuner.feelMat"),[["matDropBase",0,100,1],["matDropPerDepth",0,20,1],["themeMatN",0,10,1]])+e(o("tool.tuner.feelBreath"),[["breathLen",1,9,1],["breathCd",1,20,1]])+e(o("tool.tuner.feelLarge"),[["largePerFloor",0,4,1],["largePerFloorDeep",0,6,1],["largeDeepFrom",1,99,1]])}function B(){const a=g.querySelector("#curvechart");if(!a)return;const t=a.getContext("2d"),e=a.width,n=a.height,s=30;t.clearRect(0,0,e,n),t.strokeStyle="#2b3547",t.lineWidth=1;for(const d of[.25,.5,.75])t.beginPath(),t.moveTo(0,n*d),t.lineTo(e,n*d),t.stroke();const m=d=>(d-1)/(s-1)*(e-8)+4,r=d=>n-6-d*(n-14),l=(d,k,y)=>{t.strokeStyle=k,t.lineWidth=y,t.beginPath();for(let T=1;T<=s;T++){const q=r(R(p.gimmicks[d],T));T===1?t.moveTo(m(T),q):t.lineTo(m(T),q)}t.stroke()};for(const d of Object.keys(p.gimmicks))d!==$&&l(d,"rgba(139,150,168,0.28)",1);p.gimmicks[$]&&l($,"#ffb347",2),t.strokeStyle="#ffd166",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(m(u),0),t.lineTo(m(u),n),t.stroke(),t.setLineDash([]),t.fillStyle="#ffb347",t.font="10px ui-monospace",t.fillText(`${$} @${u}F = ${Math.round(R(p.gimmicks[$],u)*100)}%`,6,11)}const h=3;let E=0,N="";function Q(a){let t=0;for(;j().floor.depth<a&&t++<a+30;){const e=j().actors.find(n=>n.kind==="hero");if(!e)return;e.pos={...j().floor.stairs},pt()}}function X(a){const t=j(),e=t.floor;a.width=e.w*h,a.height=e.h*h;const n=a.getContext("2d");let s=0;for(let r=0;r<e.h;r++)for(let l=0;l<e.w;l++){const d=e.tiles[r][l];d.chest&&!d.chest.opened&&s++,n.fillStyle=_t(d),n.fillRect(l*h,r*h,h,h)}n.fillStyle="#ffffff",n.fillRect(e.stairs.x*h,e.stairs.y*h,h,h),e.upstairs&&(n.fillStyle="#9aa7bd",n.fillRect(e.upstairs.x*h,e.upstairs.y*h,h,h));let m=0;for(const r of t.actors)r.alive&&(r.kind==="monster"?(m++,n.fillStyle="#ff5a4a"):r.kind==="hero"?n.fillStyle="#ffe9a8":n.fillStyle="#6ab0ff",n.fillRect(r.pos.x*h,r.pos.y*h,h,h));return{mon:m,chest:s}}async function P(){const a=++E;let t;try{t=C()}catch(d){i("lint").innerHTML=`<div class="err">✗ ${c(d.message.slice(0,800))}</div>`;return}O=t;const e=Object.keys(t).length;i("lint").innerHTML=`<div class="ok">✓ ${c(o("tool.tuner.lintOk",{n:e}))}</div>`,W(t),U(e?t:null);const n=Tt(Number(i("seedbase").value)||0,Number(i("count").value)),s=i("grid");s.innerHTML=n.map((d,k)=>`<div class="thumb" data-i="${k}"><canvas></canvas><div class="cap">#${d} …</div></div>`).join("");const m=performance.now();for(let d=0;d<n.length;d++){if(a!==E)return;dt(n[d]),Q(u);const k=s.children[d],y=X(k.querySelector("canvas"));k.querySelector(".cap").textContent=`#${n[d]}  ${o("tool.tuner.capMon")}${y.mon} ${o("tool.tuner.capChest")}${y.chest}${j().floor.monsterHouse?" MH!":""}${j().floor.sealRoom?" 封":""}`,d%4===3&&await new Promise(T=>setTimeout(T))}const r=Math.round(performance.now()-m);N=o("tool.tuner.perf",{n:n.length,d:u,ms:r}),i("perf").textContent=N;const l=V(p.genParams,u);i("gensum").textContent=o("tool.tuner.atDepth",{d:u,rooms:l.maxRooms,loops:l.loops})}let A=0;function L(){clearTimeout(A),A=window.setTimeout(()=>{P()},180),M()}function W(a){const t=Object.keys(a);i("ovsum").textContent=t.length?o("tool.tuner.ovSome",{list:t.join(", ")}):o("tool.tuner.ovNone"),i("ovjson").textContent=t.length?JSON.stringify(a,null,1):"{}"}function G(){const a=[["#39455e",o("tool.tuner.lgWall")],["#141b2a",o("tool.tuner.lgFloor")],["#2a5f9e",o("tool.tuner.lgWater")],["#e8c15a",o("tool.tuner.lgChest")],["#c05a8a",o("tool.tuner.lgTrap")],["#a87b2a",o("tool.tuner.lgLocked")],["#6a4a8a",o("tool.tuner.lgSecret")],["#ff5a4a",o("tool.tuner.lgMon")],["#ffe9a8",o("tool.tuner.lgHero")],["#ffffff",o("tool.tuner.lgStairs")]];i("legend").innerHTML=a.map(([t,e])=>`<span><i style="background:${t}"></i>${c(e)}</span>`).join("")}async function _(){try{const[a,t]=await Promise.all([fetch(w("/api/tables/truth")).then(e=>e.json()),fetch(w("/api/tables/proposals")).then(e=>e.json())]);tt(a.docs??[]),et(t.proposals??[])}catch{i("truth").innerHTML=`<div class="live">${c(o("tool.tuner.noApi"))}</div>`,i("proposals").innerHTML=""}}function tt(a){var s;const t=i("truth");if(!a.length){t.innerHTML=`<div class="live">${c(o("tool.tuner.truthEmpty"))}</div>`;return}const e=a[0],n=Object.keys(e.tables).length;t.innerHTML=`<div class="card"><b>${c(e.name)}</b><span class="id">${c(e.updatedAt)}・${n} ${c(o("tool.tuner.ovFields"))}</span>
        <div class="row"><button type="button" data-act="truth-load">${c(o("tool.tuner.load"))}</button></div></div>`,(s=t.querySelector('[data-act="truth-load"]'))==null||s.addEventListener("click",()=>{p=K(e.tables),v(),L(),b(o("tool.tuner.loaded",{name:e.name}))})}function et(a){Mt(i("proposals"),a,{tag:()=>o("tool.tuner.capTag"),onView:t=>{nt(t)},onPromote:t=>{at(t)},onArchive:t=>{ot(t)}})}async function nt(a){var t;try{const n=(t=(await(await fetch(w(`/api/tables/proposal?id=${encodeURIComponent(a)}`))).json()).docs)==null?void 0:t[0];if(!n)throw new Error("proposal is empty");p=K(n.tables),v(),L(),b(o("tool.tuner.loaded",{name:n.name}))}catch(e){b(e.message,!0)}}async function at(a){try{await H(w("/api/tables/promote"),{proposalId:a}),b(o("tool.tuner.promoted")),_()}catch(t){b(t.message,!0)}}async function ot(a){try{await H(w("/api/tables/archive"),{proposalId:a}),b(o("tool.tuner.archived")),_()}catch(t){b(t.message,!0)}}async function I(){let a;try{a=C()}catch(n){b(n.message,!0);return}const t=i("savelabel").value.trim()||o("tool.tuner.defaultLabel"),e={formatVersion:yt,id:"tables",name:t,tables:a,createdAt:Z(),updatedAt:Z()};try{await H(w("/api/tables/proposal"),{tables:e,label:t,createdBy:"user"}),b(o("tool.tuner.saved",{name:t})),_()}catch(n){b(n.message,!0)}}function rt(a,t){const e=a.split("."),n=Number(t);if(e[0]==="tuning")p.tuning[e[1]]=n;else if(e[0]==="gen")p.genParams[e[1]]=n;else if(e[0]==="gim"){const s=p.gimmicks[e[1]];s&&(s[e[2]]=n),$=e[1],B()}else if(e[0]==="pack"){const s=p.enemyPacks[Number(e[1])];if(!s)return;if(e[2]==="name")s.name=t;else if(e[2]==="units"){const m=$t(t);if(!m){b(o("tool.tuner.unitsBad"),!0);return}s.units=m}else s[e[2]]=n}else if(e[0]==="mat"){const s=p.materials[Number(e[1])];if(!s)return;e[2]==="id"||e[2]==="name"?s[e[2]]=t:s[e[2]]=n}else if(e[0]==="theme"){const s=p.themes[e[1]];if(!s)return;e[2]==="col"||e[2]==="mat"?s[e[2]]=t:e[2]==="water"?s.water=t:e[2]==="hazard"&&(s.hazard=t||null)}L()}i("form").addEventListener("input",a=>{const t=a.target,e=t.getAttribute("data-f");e&&rt(e,t.value)}),i("form").addEventListener("click",a=>{const t=a.target.closest("[data-act],[data-gimsel]");if(!t)return;const e=t.getAttribute("data-gimsel");if(e){$=e,v();return}const n=t.getAttribute("data-act"),s=Number(t.getAttribute("data-i")??-1);if(n==="pack-del")p.enemyPacks.splice(s,1);else if(n==="pack-add")p.enemyPacks.push({name:o("tool.tuner.newPack"),min:1,max:99,weight:2,units:[{role:"bruiser",n:1}]});else if(n==="mat-del")p.materials.splice(s,1);else if(n==="mat-add")p.materials.push({id:`mat${p.materials.length}`,name:o("tool.tuner.newMat"),min:1,value:10});else return;v(),L()});function z(){i("tab-curve").classList.toggle("on",x==="curve"),i("tab-table").classList.toggle("on",x==="table"),i("tab-feel").classList.toggle("on",x==="feel")}i("tab-curve").addEventListener("click",()=>{x="curve",z(),v(),M()}),i("tab-table").addEventListener("click",()=>{x="table",z(),v(),M()}),i("tab-feel").addEventListener("click",()=>{x="feel",z(),v(),M()}),i("reset").addEventListener("click",()=>{p=J(),v(),L(),b(o("tool.tuner.resetDone"))}),i("depth").addEventListener("input",()=>{u=Number(i("depth").value),i("depthv").textContent=`${u}F`,x==="curve"&&v(),L()}),i("seedbase").addEventListener("input",L),i("count").addEventListener("change",()=>{M(),P()}),i("regen").addEventListener("click",()=>{P()}),i("save").addEventListener("click",()=>{I()}),i("play").addEventListener("click",()=>{const a=Object.keys(O).length?`dungeon.html?pack=${encodeURIComponent(wt(O))}`:"dungeon.html";window.open(a,"_blank")}),i("grid").addEventListener("click",a=>{const t=a.target.closest(".thumb");t&&t.classList.toggle("zoom")});const it=S.events.on("tables",()=>{_()});window.cdTuner={draft:()=>p,patch:a=>{a(p),v(),L()},overrides:()=>C(),depth:a=>(u=a,i("depth").value=String(a),i("depthv").textContent=`${a}F`,P()),regen:()=>P(),perf:()=>N,save:()=>I(),refresh:()=>_()};const st=Pt(()=>{z(),v(),G(),W(O),_()}),lt=Y();return z(),v(),G(),lt&&b(o("tool.common.restored")),P(),_(),{applyParams(a){const t=Number(a.get("depth"));!Number.isFinite(t)||t<1||(u=Math.max(1,Math.min(30,Math.round(t))),i("depth").value=String(u),i("depthv").textContent=`${u}F`,x==="curve"&&v(),L())},dispose(){E++,clearTimeout(A),it(),st(),M(),U(null),delete window.cdTuner}}}};export{Ut as tunerPanel};
