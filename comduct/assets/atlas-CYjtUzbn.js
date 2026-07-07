import{v as M,b as G,c as Z,a as _,e as Q,d as ut,r as vt,u as z,f as ft,g as V,h as mt}from"./atlas-core-CkiXPaHd.js";import{T as bt}from"./tables-doc-04YCuIWo.js";import{r as ht}from"./tool-shelf-D47bRaT1.js";import{o as gt}from"./studio-DjjVShGJ.js";import{c as j,t as c,D as yt}from"./world-ui-6gT7-Xrb.js";import{a as xt,b as kt}from"./playtest-core-OacOBFvI.js";import"./tables-ChfHX5yh.js";import"./creator-auth-C2cecs39.js";import"./tuner-core-DdXluHi1.js";import"./gamepack-CkDy6Wip.js";import"./monster-CNlJLiEB.js";import"./voxmodel-Dcp997La.js";const wt=`<!-- ============================================================
     §studio A2 — アトラス（世界グラフ GUI）パネルの markup（部分 HTML・?raw import）。
     tuner.html と同じ流儀：style 込み・id はパネル内ローカル（host.querySelector）・
     data-i18n＝tool.* キー（ja は原文と同文）。
     左＝地図盤（ノード chip＋SVG 辺・ドラッグ配置）／右＝詳細（世界の骨格・ノード/辺の欄）
     ＋協働ループ（truth／future・⭐promote は人間ゲート）。
     ============================================================ -->
<style>
  #atl { --bg: #12161f; --panel: #1a2130; --line: #2b3547; --text: #e8edf5; --muted: #8b96a8; --accent: #57c7a4; --tint: #12312a; --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e; }
  #atl { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--text); font: 13px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #atl * { box-sizing: border-box; margin: 0; padding: 0; }
  #atlhead { padding: 8px 14px; border-bottom: 1px solid var(--line); display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  #atlhead b { color: #cfe3ff; font-size: 14px; }
  #atlhead .note { color: var(--muted); font-size: 11px; }
  #atl button, #atl select, #atl input[type="text"], #atl input[type="number"] { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  #atl input[type="text"], #atl input[type="number"] { cursor: text; }
  #atl button:hover { border-color: var(--accent); }
  #atl button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  #atl button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  #atllive { color: var(--muted); font-size: 11px; }
  #atlmain { flex: 1; display: flex; min-height: 0; }
  /* ── 地図盤：スクロールする器の中に固定サイズの盤（chip 絶対配置＋SVG 辺） ── */
  #mapwrap { flex: 1; overflow: auto; position: relative; min-width: 0; background: #0d1117; }
  #map { position: relative; width: 1600px; height: 1000px; background-image: radial-gradient(#1a2130 1px, transparent 1px); background-size: 26px 26px; }
  #map svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
  .an { position: absolute; width: 128px; border: 1px solid var(--line); background: var(--panel); border-radius: 9px; padding: 5px 8px; cursor: grab; user-select: none; -webkit-user-select: none; touch-action: none; z-index: 2; }
  .an:active { cursor: grabbing; }
  .an .k { font-size: 15px; }
  .an .nm { font-size: 12px; color: #cfe3ff; overflow-wrap: anywhere; }
  .an .mt { font-size: 10px; color: var(--muted); font-family: ui-monospace, Menlo, monospace; }
  .an.sel { border-color: var(--accent); background: var(--tint); box-shadow: 0 0 0 1px var(--accent); }
  .an.warn { border-color: var(--warn); }
  .an.start::after { content: "▶"; position: absolute; top: -8px; right: -6px; color: var(--ok); font-size: 11px; }
  .an.linkable { border-color: #5b9bff; box-shadow: 0 0 0 1px #5b9bff; }
  .ae { position: absolute; transform: translate(-50%, -50%); background: #0d1117cc; border: 1px solid var(--line); border-radius: 6px; padding: 0 5px; font-size: 11px; cursor: pointer; z-index: 3; }
  .ae.sel { border-color: var(--accent); color: var(--accent); }
  /* ── 右：詳細＋協働ループ ── */
  #atlside { width: 320px; min-width: 270px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  #atlside h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; flex-wrap: wrap; }
  .kv .lbl { color: var(--muted); font-size: 11px; min-width: 5.2em; }
  .kv input.num { width: 6em; }
  .kv input[type="text"] { flex: 1; min-width: 0; }
  #atllint { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; font-size: 11px; display: flex; flex-direction: column; gap: 3px; }
  #atllint .ok { color: var(--ok); }
  #atllint .warn { color: var(--warn); cursor: pointer; }
  #atllint .info { color: var(--muted); cursor: pointer; }
  #atllint .err { color: var(--err); white-space: pre-wrap; }
  #atldetail { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 7px; font-size: 12px; }
  #atldetail .idle { color: var(--muted); font-size: 11px; }
  #atldetail .edg { border-top: 1px dashed var(--line); padding-top: 6px; display: flex; flex-direction: column; gap: 5px; }
  #atldetail .edg .ttl { font-size: 11px; color: #cfe3ff; font-family: ui-monospace, Menlo, monospace; }
  .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  .card .id { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .card .who { font-size: 10px; color: var(--warn); }
  .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .card.sel { border-color: var(--accent); }
  .live { color: var(--muted); font-size: 11px; }
  details.hist summary { cursor: pointer; color: var(--muted); font-size: 11px; }
  .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid var(--warn); border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  .confirmbar span { color: var(--warn); }
  #atlmsg { color: var(--ok); font-size: 12px; }
  /* ── スマホ（≤900px）＝縦積み：盤が先頭・詳細/棚は下へ ── */
  @media (max-width: 900px) {
    #atlmain { flex-direction: column; overflow-y: auto; }
    #mapwrap { flex: 0 0 auto; height: 46vh; }
    #atlside { width: 100%; min-width: 0; border-left: none; border-top: 1px solid var(--line); }
    #atl .kv input[type="text"], #atl .kv input[type="number"], #atl .kv select, #atl button.big { min-height: 44px; }
    #atl .kv input[type="text"], #atl .kv input[type="number"] { font-size: 16px; } /* iOS の自動ズーム回避 */
  }
</style>
<div id="atl">
  <div id="atlhead">
    <b data-i18n="tool.atlas.h1">🗺 アトラス — 世界グラフ</b>
    <span class="note" data-i18n="tool.atlas.intro">街を置く→森を繋ぐ→潜り口を吊るす。保存は future（truth 不変）・採用は ⭐（人間ゲート）</span>
    <button id="addhub" type="button" data-i18n="tool.atlas.add.hub">＋🏘 街(hub)</button>
    <button id="addfield" type="button" data-i18n="tool.atlas.add.field">＋🌲 野(field)</button>
    <button id="adddungeon" type="button" data-i18n="tool.atlas.add.dungeon">＋🕳 潜り口(dungeon)</button>
    <button id="relayout" type="button" data-i18n="tool.atlas.autoLayout">🧭 自動整列</button>
    <button id="tohub" type="button" data-i18n="tool.atlas.toHub">🕸 ハブ（物の参照）</button>
    <span id="atllive"></span>
    <span id="atlmsg"></span>
  </div>
  <div id="atlmain">
    <div id="mapwrap"><div id="map"></div></div>
    <div id="atlside">
      <div id="atllint"></div>
      <h2 data-i18n="tool.atlas.graphHead">🌍 世界の骨格</h2>
      <div class="kv"><span class="lbl">seed</span><input id="gseed" class="num" type="number" step="1" /></div>
      <div class="kv"><span class="lbl" data-i18n="tool.atlas.start">start</span><select id="gstart"></select></div>
      <div class="kv"><span class="lbl" data-i18n="tool.atlas.respawn">respawn</span><select id="grespawn">
        <option value="">—</option><option value="never">never</option><option value="dive">dive</option><option value="entry">entry</option>
      </select></div>
      <h2 data-i18n="tool.atlas.nodeHead">📍 選択中</h2>
      <div id="atldetail"><div class="idle" data-i18n="tool.atlas.detailIdle">ノード/辺をタップすると欄がここに出る</div></div>
      <h2 data-i18n="tool.atlas.saveHead">💾 提案（propose→⭐）</h2>
      <div class="kv"><input id="savelabel" type="text" placeholder="世界の名前（例：北の森つき）" data-i18n-ph="tool.atlas.labelPh" /></div>
      <button class="big" id="save" type="button" data-i18n="tool.atlas.save">💾 提案として保存（future）</button>
      <div class="live" data-i18n="tool.common.savenote">保存は truth を変えない。下の一覧に future が並び、⭐promote だけが truth を更新する。</div>
      <h2 data-i18n="tool.atlas.futureHead">⭐ 提案（future）</h2>
      <div id="proposals"></div>
      <h2 data-i18n="tool.atlas.truthHead">📜 truth（この world の地表）</h2>
      <div id="truth"></div>
    </div>
  </div>
</div>
`,p=k=>k.replace(/[&<>"]/g,g=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[g]),tt=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),I={hub:"🏘",field:"🌲",dungeon:"🕳"},$t=k=>k===yt?"comduct":k.replace("/","--"),Ot={id:"atlas",async mount(k,g){const{wapi:L,postJson:O}=g.api;k.innerHTML=wt,j(k);const o=t=>k.querySelector(`#${t}`);function f(t,e=!1){const a=o("atlmsg");a.textContent=t,a.style.color=e?"#ff7a6e":"#7fd17f"}let r=Q(),v={},d=null,m=null,b=!1,B="",C=null;const U="cdAtlasA2";function S(){try{sessionStorage.setItem(U,JSON.stringify({v:1,world:g.world(),graph:r,layout:v,dirty:b,label:o("savelabel").value}))}catch{}}function et(){var t;try{const e=sessionStorage.getItem(U);if(!e)return!1;const a=JSON.parse(e);return a.v!==1||a.world!==g.world()||!((t=a.graph)!=null&&t.nodes)?!1:(r=a.graph,v=a.layout??{},b=!!a.dirty,a.label&&(o("savelabel").value=a.label),!0)}catch{return!1}}function u(t,e){r=t;const a=Z(r);for(const l of r.nodes)v[l.id]||(v[l.id]=a[l.id]);for(const l of Object.keys(v))r.nodes.some(i=>i.id===l)||delete v[l];e!=null&&e.markDirty&&(b=!0),y(),S()}async function nt(){var t,e,a,l;try{const i=await fetch(L(`/packs/${$t(g.world())}.json`));if(i.ok){const s=(t=(await i.json()).tables)==null?void 0:t.world;if(s!==void 0){const n=M(s);return n.ok?{g:n.graph,src:"pack"}:(f(n.error,!0),null)}}}catch{}try{const i=await fetch(L("/api/tables/truth"));if(i.ok){const s=(l=(a=(e=(await i.json()).docs)==null?void 0:e[0])==null?void 0:a.tables)==null?void 0:l.world;if(s!==void 0){const n=M(s);if(n.ok)return{g:n.graph,src:"truth"}}}}catch{}return null}async function A(t=!1){if(b&&!t)return;const e=await nt();e?(B=c("tool.atlas.truthMeta",{src:e.src,n:e.g.nodes.length,e:e.g.edges.length}),b=!1,u(e.g)):(B=c("tool.atlas.truthNew"),u(Q()),b=!1),J()}const w=o("map");function at(){return new Set(_(r).filter(t=>t.level==="warn"&&t.focus).map(t=>t.focus))}function W(){w.innerHTML="";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");w.appendChild(t);const e=at();for(const a of r.nodes){const l=v[a.id]??{x:30,y:26},i=document.createElement("div");i.className="an"+((d==null?void 0:d.type)==="node"&&d.id===a.id?" sel":"")+(e.has(a.id)?" warn":"")+(r.start===a.id?" start":"")+(m&&m.from!==a.id?" linkable":""),i.style.left=`${l.x}px`,i.style.top=`${l.y}px`,i.dataset.node=a.id;const s=[a.kind];a.danger!==void 0&&s.push(`d${a.danger}`),a.stories&&s.push(`s${a.stories}`),a.composer&&s.push(a.composer),a.theme&&s.push(a.theme),a.floors!==void 0&&s.push(`${a.floors}F`),a.hiddenBy&&s.push(`🫥${a.hiddenBy}`),i.innerHTML=`<span class="k">${I[a.kind]}</span> <span class="nm">${p(a.id)}</span><div class="mt">${p(s.join(" · "))}</div>`,ot(i,a.id),w.appendChild(i)}P()}function R(t){const e=w.querySelector(`[data-node="${CSS.escape(t)}"]`),a=v[t]??{x:30,y:26};return{x:a.x+(e?e.offsetWidth/2:64),y:a.y+(e?e.offsetHeight/2:28)}}function P(){const t=w.querySelector("svg");if(t){t.innerHTML="";for(const e of Array.from(w.querySelectorAll(".ae")))e.remove();for(const e of r.edges){const a=R(e.from),l=R(e.to),i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",`M ${a.x} ${a.y} L ${l.x} ${l.y}`);const s=(d==null?void 0:d.type)==="edge"&&d.id===e.id;i.setAttribute("fill","none"),i.setAttribute("stroke",s?"#57c7a4":e.kind==="dive"?"#b98fe0":"#4a648f"),i.setAttribute("stroke-width",s?"2.5":"1.5"),e.kind==="dive"&&i.setAttribute("stroke-dasharray","5 4"),t.appendChild(i);const n=document.createElement("div");n.className="ae"+(s?" sel":""),n.style.left=`${(a.x+l.x)/2}px`,n.style.top=`${(a.y+l.y)/2}px`,n.textContent=(e.kind==="dive"?"▼":"🚶")+(e.lockedBy?"🔒":""),n.title=e.id,n.addEventListener("click",()=>{d={type:"edge",id:e.id},m=null,y()}),w.appendChild(n)}}}function ot(t,e){let a=0,l=0,i=0,s=0,n=!1,h=!1;t.addEventListener("pointerdown",x=>{x.preventDefault(),h=!0;try{t.setPointerCapture(x.pointerId)}catch{}a=x.clientX,l=x.clientY;const $=v[e]??{x:30,y:26};i=$.x,s=$.y,n=!1}),t.addEventListener("pointermove",x=>{if(!h)return;const $=x.clientX-a,H=x.clientY-l;Math.abs($)+Math.abs(H)>4&&(n=!0),n&&(v[e]={x:Math.max(0,Math.min(1472,i+$)),y:Math.max(0,Math.min(940,s+H))},t.style.left=`${v[e].x}px`,t.style.top=`${v[e].y}px`,P())}),t.addEventListener("pointercancel",()=>{h=!1}),t.addEventListener("pointerup",x=>{if(h){h=!1;try{t.releasePointerCapture(x.pointerId)}catch{}if(n){S();return}if(m&&m.from!==e){try{const $=ut(r,m.from,e,m.kind),H=$.id;m=null,d={type:"edge",id:H},u($.graph,{markDirty:!0}),f(c("tool.atlas.linked",{id:H}))}catch($){f($.message,!0)}return}m=null,d=(d==null?void 0:d.type)==="node"&&d.id===e?null:{type:"node",id:e},y()}})}w.addEventListener("click",t=>{t.target===w&&(d=null,m=null,y())});function F(){const t=o("atllint");t.innerHTML="";const e=M(r);if(!e.ok){const l=document.createElement("div");l.className="err",l.textContent=`✗ ${e.error}`,t.appendChild(l)}const a=_(r);if(e.ok&&!a.length){const l=document.createElement("div");l.className="ok",l.textContent=c("tool.atlas.lintOk"),t.appendChild(l);return}for(const l of a){const i=document.createElement("div");if(i.className=l.level,i.textContent=(l.level==="warn"?"⚠ ":"· ")+c(l.key,l.params),l.focus){const s=l.focus;i.addEventListener("click",()=>T(s))}t.appendChild(i)}}function T(t){var e;d=r.nodes.some(a=>a.id===t)?{type:"node",id:t}:r.edges.some(a=>a.id===t)?{type:"edge",id:t}:null,y(),(e=w.querySelector(`[data-node="${CSS.escape(t)}"]`))==null||e.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}function it(){o("gseed").value=String(r.seed);const t=o("gstart");t.innerHTML=r.nodes.map(e=>`<option value="${p(e.id)}"${e.id===r.start?" selected":""}>${I[e.kind]} ${p(e.id)}</option>`).join(""),o("grespawn").value=r.respawn??""}o("gseed").addEventListener("input",()=>{const t=Number(o("gseed").value);Number.isFinite(t)&&(r.seed=Math.trunc(t),b=!0,F(),S())}),o("gstart").addEventListener("change",()=>{r.start=o("gstart").value,b=!0,y(),S()}),o("grespawn").addEventListener("change",()=>{const t=o("grespawn").value;t===""?delete r.respawn:r.respawn=t,b=!0,F(),S()});const D=o("atldetail");function q(){if(D.innerHTML="",!d){D.innerHTML=`<div class="idle">${p(c("tool.atlas.detailIdle"))}</div>`;return}d.type==="node"?rt(d.id):lt(d.id)}function rt(t){var s;const e=r.nodes.find(n=>n.id===t);if(!e){d=null,q();return}const a=[["","—"],["null",c("tool.atlas.themeAuto")],["fire","fire"],["ice","ice"],["earth","earth"],["poison","poison"],["holy","holy"]].map(([n,h])=>`<option value="${n}"${(e.theme===null?"null":e.theme??"")===n?" selected":""}>${h}</option>`).join(""),l=[["","—"],["town","town"],["forest","forest"],["dungeon","dungeon"]].map(([n,h])=>`<option value="${n}"${(e.composer??"")===n?" selected":""}>${h}</option>`).join(""),i=[["","—"],["0","0"],["1","1"],["2","2"]].map(([n,h])=>`<option value="${n}"${(e.stories===void 0?"":String(e.stories))===n?" selected":""}>${h}</option>`).join("");D.innerHTML=`
        <div><b>${I[e.kind]} ${p(e.id)}</b> <span class="live">${p(e.kind)}</span></div>
        <div class="kv"><span class="lbl">id</span><input id="nid" type="text" value="${p(e.id)}" /><button id="nren" type="button" data-i18n="tool.atlas.rename">✏</button></div>
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.kind">kind</span><select id="nkind">
          ${["hub","field","dungeon"].map(n=>`<option value="${n}"${e.kind===n?" selected":""}>${I[n]} ${n}</option>`).join("")}
        </select></div>
        ${e.kind==="field"?`<div class="kv"><span class="lbl" data-i18n="tool.atlas.danger">danger（≤6）</span><input id="ndanger" class="num" type="number" min="1" max="9" step="1" value="${e.danger??""}" /></div>`:""}
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.stories">stories</span><select id="nstories">${i}</select></div>
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.composer">composer</span><select id="ncomposer">${l}</select></div>
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.theme">theme</span><select id="ntheme">${a}</select></div>
        ${e.kind==="dungeon"?`<div class="kv"><span class="lbl" data-i18n="tool.atlas.floors">floors（底・空=無限）</span><input id="nfloors" class="num" type="number" min="1" max="99" step="1" value="${e.floors??""}" /></div>`:""}
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.hiddenBy">hiddenBy</span><input id="nhidden" type="text" value="${p(e.hiddenBy??"")}" placeholder="flag-id" /></div>
        <div class="row">
          <button id="nlinkwalk" type="button" data-i18n="tool.atlas.linkWalk">🚶 walk で繋ぐ</button>
          <button id="nlinkdive" type="button" data-i18n="tool.atlas.linkDive">▼ dive で繋ぐ</button>
        </div>
        ${m?`<div class="live">${p(c("tool.atlas.linkHint"))} <button id="nlinkcancel" type="button">${p(c("tool.common.cancel"))}</button></div>`:""}
        <div class="row">
          <button id="ntoforge" type="button" data-i18n="tool.atlas.toForge">🔨 鍛冶場（部屋/街）へ</button>
          <button id="ndel" type="button" data-i18n="tool.atlas.delNode">🗑 ノードを消す</button>
        </div>
        <div class="edg"><div class="live" data-i18n="tool.atlas.edgesHead">この場に触れる辺：</div>${r.edges.filter(n=>n.from===t||n.to===t).map(n=>`<button type="button" class="edgesel" data-e="${p(n.id)}">${n.kind==="dive"?"▼":"🚶"} ${p(n.from)} → ${p(n.to)}${n.lockedBy?" 🔒":""}</button>`).join("")||'<span class="live">—</span>'}</div>`,j(D),o("nren").addEventListener("click",()=>{const n=o("nid").value.trim();try{const h=vt(r,t,n),x=v[t];x&&n!==t&&(v[n]=x,delete v[t]),d={type:"node",id:n},u(h,{markDirty:!0})}catch(h){f(h.message,!0)}}),o("nkind").addEventListener("change",()=>{const n=o("nkind").value;u(z(r,t,{kind:n}),{markDirty:!0})}),e.kind==="field"&&o("ndanger").addEventListener("input",()=>{const n=Number(o("ndanger").value);u(z(r,t,{danger:Number.isFinite(n)&&n>=1?Math.trunc(n):void 0}),{markDirty:!0}),d={type:"node",id:t}}),o("nstories").addEventListener("change",()=>{const n=o("nstories").value;u(z(r,t,{stories:n===""?void 0:Number(n)}),{markDirty:!0})}),o("ncomposer").addEventListener("change",()=>{const n=o("ncomposer").value;u(z(r,t,{composer:n===""?void 0:n}),{markDirty:!0})}),o("ntheme").addEventListener("change",()=>{const n=o("ntheme").value;u(z(r,t,{theme:n===""?void 0:n==="null"?null:n}),{markDirty:!0})}),e.kind==="dungeon"&&o("nfloors").addEventListener("input",()=>{const n=Number(o("nfloors").value);u(z(r,t,{floors:Number.isFinite(n)&&n>=1?Math.trunc(n):void 0}),{markDirty:!0}),d={type:"node",id:t}}),o("nhidden").addEventListener("change",()=>{const n=o("nhidden").value.trim();u(z(r,t,{hiddenBy:n===""?void 0:n}),{markDirty:!0}),d={type:"node",id:t}}),o("nlinkwalk").addEventListener("click",()=>{m={from:t,kind:"walk"},y()}),o("nlinkdive").addEventListener("click",()=>{m={from:t,kind:"dive"},y()}),(s=k.querySelector("#nlinkcancel"))==null||s.addEventListener("click",()=>{m=null,y()}),o("ntoforge").addEventListener("click",()=>g.navigate("forge")),o("ndel").addEventListener("click",()=>{d=null,m=null,u(ft(r,t),{markDirty:!0})});for(const n of Array.from(D.querySelectorAll(".edgesel")))n.addEventListener("click",()=>{d={type:"edge",id:n.dataset.e},y()})}function lt(t){const e=r.edges.find(i=>i.id===t);if(!e){d=null,q();return}const a=i=>["n","e","s","w","auto"].map(s=>`<option value="${s}"${i===s?" selected":""}>${s}</option>`).join(""),l=["","n","e","s","w","auto"].map(i=>`<option value="${i}"${(e.toAt??"")===i?" selected":""}>${i||"—"}</option>`).join("");D.innerHTML=`
        <div><b>${e.kind==="dive"?"▼ dive":"🚶 walk"}</b> <span class="live">${p(e.from)} → ${p(e.to)}</span></div>
        <div class="kv"><span class="lbl">at</span><select id="eat">${a(e.at)}</select><span class="lbl">toAt</span><select id="etoat">${l}</select></div>
        <div class="kv"><span class="lbl" data-i18n="tool.atlas.lockedBy">lockedBy</span><input id="elock" type="text" value="${p(e.lockedBy??"")}" placeholder="flag-id" /></div>
        <div class="row">
          <button id="egoto" type="button">📍 ${p(e.from)}</button>
          <button id="egoto2" type="button">📍 ${p(e.to)}</button>
          <button id="edel" type="button" data-i18n="tool.atlas.delEdge">🗑 辺を消す</button>
        </div>`,j(D),o("eat").addEventListener("change",()=>{u(V(r,t,{at:o("eat").value}),{markDirty:!0}),d={type:"edge",id:t}}),o("etoat").addEventListener("change",()=>{const i=o("etoat").value;u(V(r,t,{toAt:i===""?void 0:i}),{markDirty:!0}),d={type:"edge",id:t}}),o("elock").addEventListener("change",()=>{const i=o("elock").value.trim();u(V(r,t,{lockedBy:i===""?void 0:i}),{markDirty:!0}),d={type:"edge",id:t}}),o("egoto").addEventListener("click",()=>T(e.from)),o("egoto2").addEventListener("click",()=>T(e.to)),o("edel").addEventListener("click",()=>{d=null,u(mt(r,t),{markDirty:!0})})}async function N(){try{const t=await(await fetch(L("/api/tables/proposals"))).json();ht(o("proposals"),t.proposals??[],{tag:()=>c("tool.atlas.capTag"),onView:e=>{st(e)},onPromote:e=>{Y(e)},onArchive:e=>{dt(e)}}),o("atllive").textContent="· live",E.hidden=!1}catch{o("proposals").innerHTML=`<div class="live">${p(c("tool.atlas.noApi"))}</div>`,o("atllive").textContent=c("tool.common.devOff"),E.hidden=!0}J()}function J(){var e;const t=o("truth");t.innerHTML=`<div class="card"><b>world.json</b><span class="id">${p(B)}</span>
        <div class="row"><button type="button" data-act="truth-load">${p(c("tool.atlas.load"))}</button></div></div>`,(e=t.querySelector('[data-act="truth-load"]'))==null||e.addEventListener("click",()=>{b=!1,A(!0).then(()=>f(c("tool.atlas.loaded")))})}async function st(t){var e,a;try{const l=await(await fetch(L(`/api/tables/proposal?id=${encodeURIComponent(t)}`))).json(),i=(a=(e=l.docs)==null?void 0:e[0])==null?void 0:a.tables.world;if(i===void 0)throw new Error(c("tool.atlas.propNoWorld"));const s=M(i);if(!s.ok)throw new Error(s.error);d=null,m=null,b=!0,u(s.graph),f(c("tool.atlas.loadedProp",{name:l.docs[0].name}))}catch(l){f(l.message,!0)}}async function Y(t){try{await O(L("/api/tables/promote"),{proposalId:t}),f(c("tool.atlas.promoted")),b=!1,N(),A(!0)}catch(e){f(e.message,!0)}}async function dt(t){try{await O(L("/api/tables/archive"),{proposalId:t}),f(c("tool.atlas.archived")),N()}catch(e){f(e.message,!0)}}async function K(){var i,s;const t=M(r);if(!t.ok){f(`✗ ${t.error}`,!0);return}const e=o("savelabel").value.trim()||c("tool.atlas.defaultLabel");let a={};try{const n=await fetch(L("/api/tables/truth"));n.ok&&(a=((s=(i=(await n.json()).docs)==null?void 0:i[0])==null?void 0:s.tables)??{})}catch{}const l={formatVersion:bt,id:"tables",name:e,tables:{...a,world:t.graph},createdAt:tt(),updatedAt:tt()};try{await O(L("/api/tables/proposal"),{tables:l,label:e,createdBy:"user"}),f(c("tool.atlas.saved",{name:e})),N()}catch(n){f(n.message,!0)}}const E=document.createElement("button");E.type="button",E.id="atlplay",E.hidden=!0,o("tohub").insertAdjacentElement("afterend",E);function X(){E.textContent=b?c("tool.studio.playDraft"):c("tool.studio.playNow"),E.title=b?c("tool.studio.playDraftTitle"):c("tool.studio.playNowTitle")}X(),E.addEventListener("click",()=>{if(!b){window.open(xt(g.world()),"_blank");return}const t=M(r);if(!t.ok){f(`✗ ${t.error}`,!0);return}const e=window.open("","_blank");(async()=>{var i,s;let a={};try{const n=await fetch(L("/api/tables/truth"));n.ok&&(a=((s=(i=(await n.json()).docs)==null?void 0:i[0])==null?void 0:s.tables)??{})}catch{}const l=kt(a,t.graph,`atlas preview (${g.world()})`);e?e.location.href=l:window.open(l,"_blank")})()}),o("addhub").addEventListener("click",()=>{const t=G(r,"hub");d={type:"node",id:t.id},u(t.graph,{markDirty:!0})}),o("addfield").addEventListener("click",()=>{const t=G(r,"field");d={type:"node",id:t.id},u(t.graph,{markDirty:!0})}),o("adddungeon").addEventListener("click",()=>{const t=G(r,"dungeon");d={type:"node",id:t.id},u(t.graph,{markDirty:!0})}),o("relayout").addEventListener("click",()=>{v=Z(r),W(),S()}),o("tohub").addEventListener("click",()=>g.navigate("hub")),o("save").addEventListener("click",()=>{K()}),o("savelabel").addEventListener("input",S);function y(){if(W(),it(),F(),q(),X(),C&&r.nodes.some(t=>t.id===C)){const t=C;C=null,T(t)}}const ct=g.events.on("tables",()=>{N(),A()}),pt=gt(()=>{j(k),y(),N()});return g.own(window,"resize",()=>P()),window.cdAtlas={graph:()=>r,layout:()=>v,lint:()=>_(r),valid:()=>M(r),patch:t=>{u(t(r),{markDirty:!0})},select:t=>T(t),save:()=>K(),promote:t=>Y(t),refresh:()=>N(),reload:(t=!0)=>A(t),dirty:()=>b},et()?(y(),f(c("tool.common.restored")),N(),A()):A(!0).then(()=>{N()}),{applyParams(t){const e=t.get("focus");e&&(r.nodes.some(a=>a.id===e)?T(e):C=e)},dispose(){ct(),pt(),S(),delete window.cdAtlas}}}};export{Ot as atlasPanel};
