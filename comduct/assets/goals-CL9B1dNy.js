import{G as se,m as P,n as me,o as he}from"./tables-Baw1omEy.js";import{T as be}from"./tables-doc-CHdegPtO.js";import{r as ke}from"./tool-shelf-xYtc3kfc.js";import{o as ye}from"./studio-BmA879xu.js";import{b as _,t as c}from"./i18n-xRoouL-_.js";import{D as xe}from"./creator-auth-DRvYmnWX.js";import{a as we}from"./playtest-core-Bl_pE6Kr.js";import{p as $e}from"./tuner-core-_vfhFOE_.js";import"./schemas-BBGxizon.js";import"./preload-helper-Dp1pzeXC.js";import"./gamepack-gXOeeXAj.js";import"./voxmodel-BixVuI7N.js";const Se=`<!-- ============================================================
     §world-spine ③ — 🎯 目的パネルの markup（部分 HTML・?raw import）。
     atlas.html と同じ流儀：style 込み・id はパネル内ローカル（host.querySelector）・
     data-i18n＝tool.* キー（ja は原文と同文）。
     左＝目的の一覧＋連鎖の見取り図／右＝選択中の欄（target/rewards/outcome/persist）
     ＋lint＋協働ループ（truth／future・⭐promote は人間ゲート）。
     ============================================================ -->
<style>
  #gls { --bg: #12161f; --panel: #1a2130; --line: #2b3547; --text: #e8edf5; --muted: #8b96a8; --accent: #e0b050; --tint: #31290f; --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e; }
  #gls { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--text); font: 13px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #gls * { box-sizing: border-box; margin: 0; padding: 0; }
  #glshead { padding: 8px 14px; border-bottom: 1px solid var(--line); display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  #glshead b { color: #ffe9b8; font-size: 14px; }
  #glshead .note { color: var(--muted); font-size: 11px; max-width: 46em; }
  #gls button, #gls select, #gls input[type="text"], #gls input[type="number"] { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  #gls input[type="text"], #gls input[type="number"] { cursor: text; }
  #gls button:hover { border-color: var(--accent); }
  #gls button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  #gls button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  #glslive { color: var(--muted); font-size: 11px; }
  #glsmsg { color: var(--ok); font-size: 12px; }
  #glsmain { flex: 1; display: flex; min-height: 0; }
  /* ── 左：目的の一覧＋連鎖の見取り図 ── */
  #glslist { flex: 1; overflow-y: auto; min-width: 0; background: #0d1117; padding: 12px; display: flex; flex-direction: column; gap: 10px; }
  #glslist h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  .gchainrow { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .gchip { border: 1px solid var(--line); background: var(--panel); border-radius: 9px; padding: 6px 10px; cursor: pointer; user-select: none; -webkit-user-select: none; }
  .gchip .gid { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .gchip .gnm { font-size: 12px; color: #ffe9b8; }
  .gchip .gtg { font-size: 10px; color: var(--muted); }
  .gchip.sel { border-color: var(--accent); background: var(--tint); box-shadow: 0 0 0 1px var(--accent); }
  .gchip.warn { border-color: var(--warn); }
  .gchip .badge { font-size: 10px; color: var(--ok); }
  .garrow { color: var(--muted); font-size: 14px; }
  .gidle { color: var(--muted); font-size: 12px; }
  /* ── 右：詳細＋lint＋協働ループ ── */
  #glsside { width: 340px; min-width: 280px; border-left: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  #glsside h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; flex-wrap: wrap; }
  .kv .lbl { color: var(--muted); font-size: 11px; min-width: 5.6em; }
  .kv input.num { width: 5.5em; }
  .kv input[type="text"] { flex: 1; min-width: 0; }
  .kv select { max-width: 100%; }
  #glslint { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; font-size: 11px; display: flex; flex-direction: column; gap: 3px; }
  #glslint .ok { color: var(--ok); }
  #glslint .warn { color: var(--warn); cursor: pointer; }
  #glslint .err { color: var(--err); white-space: pre-wrap; }
  #glsdetail { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 7px; font-size: 12px; }
  #glsdetail .idle { color: var(--muted); font-size: 11px; }
  #glsdetail .sect { border-top: 1px dashed var(--line); padding-top: 6px; color: #ffe9b8; font-size: 11px; }
  .rrow { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; border: 1px solid var(--line); border-radius: 6px; padding: 4px 6px; }
  .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  .card .id { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .card .who { font-size: 10px; color: var(--warn); }
  .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .live { color: var(--muted); font-size: 11px; }
  details.hist summary { cursor: pointer; color: var(--muted); font-size: 11px; }
  .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid var(--warn); border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  .confirmbar span { color: var(--warn); }
  /* ── スマホ（≤900px）＝縦積み ── */
  @media (max-width: 900px) {
    #glsmain { flex-direction: column; overflow-y: auto; }
    #glslist { flex: 0 0 auto; }
    #glsside { width: 100%; min-width: 0; border-left: none; border-top: 1px solid var(--line); }
    #gls .kv input[type="text"], #gls .kv input[type="number"], #gls .kv select, #gls button.big { min-height: 44px; }
    #gls .kv input[type="text"], #gls .kv input[type="number"] { font-size: 16px; } /* iOS の自動ズーム回避 */
  }
</style>
<div id="gls">
  <div id="glshead">
    <b data-i18n="tool.goals.h1">🎯 目的 — この世界の「なぜ潜るか」</b>
    <span class="note" data-i18n="tool.goals.note">目的→達成→報酬 flag→世界が広がる（hiddenBy／lockedBy／会話 when）→次の目的。⭐採用は人間の手で。</span>
    <button id="gadd" type="button" data-i18n="tool.goals.add">＋目的を足す</button>
    <span id="glslive"></span>
    <span id="glsmsg"></span>
  </div>
  <div id="glsmain">
    <div id="glslist">
      <h2 data-i18n="tool.goals.chains">連鎖の見取り図（start → next）</h2>
      <div id="gchains"></div>
    </div>
    <div id="glsside">
      <div id="glslint"></div>
      <h2 data-i18n="tool.goals.target">達成条件（target）</h2>
      <div id="glsdetail"><div class="idle" data-i18n="tool.goals.detailIdle">一覧から目的を選ぶ（＋で新規）</div></div>
      <h2 data-i18n="tool.atlas.saveHead">💾 提案（propose→⭐）</h2>
      <div class="kv"><input id="savelabel" type="text" data-i18n-ph="tool.goals.defaultLabel" placeholder="目的の下書き" /></div>
      <button class="big" id="save" type="button" data-i18n="tool.goals.save">⭐候補として提案</button>
      <div class="live" data-i18n="tool.common.savenote">保存は truth を変えない。下の一覧に future が並び、⭐promote だけが truth を更新する。</div>
      <h2 data-i18n="tool.atlas.futureHead">⭐ 提案（future）</h2>
      <div id="proposals"></div>
      <h2 data-i18n="tool.atlas.truthHead">📜 truth（この world の地表）</h2>
      <div id="truth"></div>
    </div>
  </div>
</div>
`,p=g=>g.replace(/[&<>"]/g,L=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[L]),ie=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Le=g=>g===xe?"comduct":g.replace("/","--"),B=()=>({start:[],defs:{}}),Ee=["kill","fetch","reach","depth","flag"],Ne={kill:"tool.goals.tKill",fetch:"tool.goals.tFetch",reach:"tool.goals.tReach",depth:"tool.goals.tDepth",flag:"tool.goals.tFlag"},I={kill:"⚔",fetch:"🎒",reach:"📍",depth:"🪜",flag:"⚑"},He={id:"goals",async mount(g,L){const{wapi:O,postJson:J}=L.api;g.innerHTML=Se,_(g);const r=e=>g.querySelector(`#${e}`);function b(e,t=!1){const n=r("glsmsg");n.textContent=e,n.style.color=t?"#ff7a6e":"#7fd17f"}let d=B(),f=null,k=!1,C="",S={},q=null;const R="cdGoalsW3";function G(){try{sessionStorage.setItem(R,JSON.stringify({v:1,world:L.world(),draft:d,dirty:k,label:r("savelabel").value}))}catch{}}function le(){var e;try{const t=sessionStorage.getItem(R);if(!t)return!1;const n=JSON.parse(t);return n.v!==1||n.world!==L.world()||!((e=n.draft)!=null&&e.defs)?!1:(d=n.draft,k=!!n.dirty,n.label&&(r("savelabel").value=n.label),!0)}catch{return!1}}function E(e,t){d=e,t!=null&&t.markDirty&&(k=!0),M(),G()}function re(e){const t=e==null?void 0:e.goals;return t?{start:[...t.start],defs:JSON.parse(JSON.stringify(t.defs))}:B()}function de(e,t,n){var y,$,u;const s=[],i=[];for(const m of Object.values(((y=e==null?void 0:e.town)==null?void 0:y.dialogs)??{}))for(const z of m.nodes){for(const h of[...z.effects??[],...(z.choices??[]).flatMap(A=>A.effects??[])])h.kind==="setFlag"?s.push(h.flag):h.kind==="unlock"&&s.push(h.gate);for(const h of[z.when,...(z.choices??[]).map(A=>A.when)])h!=null&&h.flag&&i.push(h.flag),h!=null&&h.notFlag&&i.push(h.notFlag)}return{nodes:((($=e==null?void 0:e.world)==null?void 0:$.nodes)??[]).map(m=>({id:m.id,...m.hiddenBy?{hiddenBy:m.hiddenBy}:{}})),lockedFlags:(((u=e==null?void 0:e.world)==null?void 0:u.edges)??[]).flatMap(m=>m.lockedBy?[m.lockedBy]:[]),dialogSetFlags:s,dialogWhenFlags:i,monsters:t,items:[...n,...((e==null?void 0:e.materials)??[]).map(m=>m.id)]}}async function ce(){var e,t;try{const n=await fetch(O(`/packs/${Le(L.world())}.json`));if(n.ok){const s=await n.json();return{tables:s.tables??{},monsters:(s.monsters??[]).flatMap(i=>i.id?[i.id]:[]),items:(s.items??[]).flatMap(i=>i.id?[i.id]:[]),src:"pack"}}}catch{}try{const n=await fetch(O("/api/tables/truth"));if(n.ok)return{tables:((t=(e=(await n.json()).docs)==null?void 0:e[0])==null?void 0:t.tables)??{},monsters:[],items:[],src:"truth"}}catch{}return null}async function F(e=!1){if(k&&!e)return;const t=await ce();if(t){S=de(t.tables,t.monsters,t.items);const n=re(t.tables);C=t.tables.goals?c("tool.goals.truthMeta",{src:t.src,n:Object.keys(t.tables.goals.defs).length}):c("tool.goals.truthNew"),k=!1,E(n)}else C=c("tool.goals.truthNew"),k=!1,E(B());W()}function D(){if(!Object.keys(d.defs).length)return{ok:!0,goals:null};const e=P.safeParse(d);return e.success?{ok:!0,goals:e.data}:{ok:!1,error:e.error.issues.map(t=>t.message).join(`
`)}}function H(){if(!Object.keys(d.defs).length)return[];const e=P.safeParse(d);return e.success?me(e.data,S):[]}function pe(){const e=r("glslint");if(e.innerHTML="",!Object.keys(d.defs).length){const s=document.createElement("div");s.className="ok",s.textContent=c("tool.goals.clearEmpty"),e.appendChild(s);return}const t=D();if(!t.ok){const s=document.createElement("div");s.className="err",s.textContent=`✗ ${t.error}`,e.appendChild(s);return}const n=H();if(!n.length){const s=document.createElement("div");s.className="ok",s.textContent=c("tool.goals.lintOk"),e.appendChild(s);return}for(const s of n){const i=document.createElement("div");if(i.className="warn",i.textContent="⚠ "+c(s.key,s.params),s.focus){const y=s.focus;i.addEventListener("click",()=>{f=y,M()})}e.appendChild(i)}}function K(e,t){var $;const n=d.defs[e];if(!n)return"";const s=d.start.includes(e),i=n.target,y=i.kind==="kill"?`${I.kill}${i.mon}×${i.count??1}`:i.kind==="fetch"?`${I.fetch}${i.item}×${i.count??1}`:i.kind==="reach"?`${I.reach}${i.node}`:i.kind==="depth"?`${I.depth}${i.depth}F`:`${I.flag}${i.flag}`;return`<div class="gchip${f===e?" sel":""}${t.has(e)?" warn":""}" data-g="${p(e)}"><span class="gnm">${p(n.name)}</span>${($=n.outcome)!=null&&$.win?" 👑":""}${s?' <span class="badge">⭐start</span>':""}<div class="gid">${p(e)}${n.persist?" · persist":""}</div><div class="gtg">${p(y)}</div></div>`}function U(){const e=r("gchains"),t=Object.keys(d.defs);if(!t.length){e.innerHTML=`<div class="gidle">${p(c("tool.goals.emptyList"))}</div>`;return}const n=new Set(H().flatMap(u=>u.focus?[u.focus]:[])),s=(()=>{const u=P.safeParse(d);return u.success?u.data:null})(),i=[],y=new Set;if(s)for(const u of he(s))i.push(`<div class="gchainrow">${u.map(m=>(y.add(m),K(m,n))).join('<span class="garrow">→</span>')}</div>`);const $=t.filter(u=>!y.has(u));$.length&&i.push(`<div class="gchainrow">${$.map(u=>K(u,n)).join("")}</div>`),e.innerHTML=i.join("");for(const u of Array.from(e.querySelectorAll(".gchip")))u.addEventListener("click",()=>{f=f===u.dataset.g?null:u.dataset.g,M()})}const j=r("glsdetail");function v(e,t){const n=JSON.parse(JSON.stringify(d)),s=n.defs[e];s&&(t(s),E(n,{markDirty:!0}),f=e)}function V(){var m,z,h,A,ee,te,ae,ne,oe;j.innerHTML="";const e=f?d.defs[f]:null;if(!e||!f){j.innerHTML=`<div class="idle">${p(c("tool.goals.detailIdle"))}</div>`;return}const t=f,n=e.target,s=Object.keys(d.defs).filter(a=>a!==t),i=a=>(S.nodes??[]).map(o=>`<option value="${p(o.id)}"${o.id===a?" selected":""}>${p(o.id)}</option>`).join(""),y=(S.monsters??[]).map(a=>`<option value="${p(a)}"></option>`).join(""),$=(S.items??[]).map(a=>`<option value="${p(a)}"></option>`).join("");j.innerHTML=`
        <div><b>🎯 ${p(e.name)}</b>${(m=e.outcome)!=null&&m.win?" 👑":""}</div>
        <div class="kv"><span class="lbl">id</span><input id="gid" type="text" value="${p(t)}" /><button id="gren" type="button">✏</button></div>
        <div class="kv"><span class="lbl" data-i18n="tool.goals.name">表示名</span><input id="gname" type="text" value="${p(e.name)}" /></div>
        <div class="kv"><span class="lbl" data-i18n="tool.goals.intro">開始口上（実況に1行・任意）</span><input id="gintro" type="text" value="${p(e.intro??"")}" /></div>
        <div class="sect" data-i18n="tool.goals.target">達成条件（target）</div>
        <div class="kv"><select id="gtk">${Ee.map(a=>`<option value="${a}"${n.kind===a?" selected":""}>${I[a]} ${p(c(Ne[a]))}</option>`).join("")}</select></div>
        ${n.kind==="kill"?`<div class="kv"><span class="lbl" data-i18n="tool.goals.mon">敵 id</span><input id="gmon" type="text" list="glsmons" value="${p(n.mon)}" /><span class="lbl" data-i18n="tool.goals.count">数</span><input id="gcount" class="num" type="number" min="1" max="99" value="${n.count??1}" /></div><datalist id="glsmons">${y}</datalist>`:""}
        ${n.kind==="fetch"?`<div class="kv"><span class="lbl" data-i18n="tool.goals.item">品 id（実体/素材）</span><input id="gitem" type="text" list="glsitems" value="${p(n.item)}" /><span class="lbl" data-i18n="tool.goals.count">数</span><input id="gcount" class="num" type="number" min="1" max="99" value="${n.count??1}" /></div><datalist id="glsitems">${$}</datalist>`:""}
        ${n.kind==="reach"?`<div class="kv"><span class="lbl" data-i18n="tool.goals.node">ノード</span>${(S.nodes??[]).length?`<select id="gnode">${i(n.node)}</select>`:`<input id="gnode" type="text" value="${p(n.node)}" />`}</div>`:""}
        ${n.kind==="depth"?`<div class="kv"><span class="lbl" data-i18n="tool.goals.depth">深さ</span><input id="gdepth" class="num" type="number" min="1" max="99" value="${n.depth}" /></div>`:""}
        ${n.kind==="flag"?`<div class="kv"><span class="lbl" data-i18n="tool.goals.flag">flag</span><input id="gflag" type="text" value="${p(n.flag)}" placeholder="flag-id" /></div>`:""}
        <div class="sect" data-i18n="tool.goals.rewards">報酬（≤4・flag が世界を動かす）</div>
        <div id="grewards">${(e.rewards??[]).map((a,o)=>`
          <div class="rrow" data-ri="${o}">
            <select data-rk="${o}">
              <option value="setFlag"${a.kind==="setFlag"?" selected":""}>⚑ setFlag</option>
              <option value="giveItem"${a.kind==="giveItem"?" selected":""}>🎁 giveItem</option>
              <option value="giveGold"${a.kind==="giveGold"?" selected":""}>💰 giveGold</option>
            </select>
            ${a.kind==="giveGold"?`<input class="num" type="number" min="1" max="99999" data-rv="${o}" value="${a.amount}" />`:`<input type="text" data-rv="${o}" list="${a.kind==="giveItem"?"glsritems":""}" value="${p(a.kind==="setFlag"?a.flag:a.item)}" />`}
            <button type="button" data-rdel="${o}">✕</button>
          </div>`).join("")}</div>
        <datalist id="glsritems">${$}</datalist>
        ${(e.rewards??[]).length<4?'<div class="row"><button id="graddr" type="button" data-i18n="tool.goals.addReward">＋報酬</button></div>':""}
        <div class="sect" data-i18n="tool.goals.outcome">帰結（outcome）</div>
        <div class="kv"><label><input id="gwin" type="checkbox"${(z=e.outcome)!=null&&z.win?" checked":""} /> <span data-i18n="tool.goals.win">👑 勝ち＝world クリア（区切り＋余生）</span></label></div>
        <div class="kv"><span class="lbl" data-i18n="tool.goals.next">次の目的（連鎖）</span><select id="gnext"><option value="">—</option>${s.map(a=>{var o;return`<option value="${p(a)}"${((o=e.outcome)==null?void 0:o.next)===a?" selected":""}>${p(a)}</option>`}).join("")}</select></div>
        <div class="kv"><label><input id="gpersist" type="checkbox"${e.persist?" checked":""} /> <span data-i18n="tool.goals.persist">進捗を run を跨いで残す（既定＝死ねば数え直し）</span></label></div>
        <div class="kv"><label><input id="gstart" type="checkbox"${d.start.includes(t)?" checked":""} /> <span data-i18n="tool.goals.start">⭐ 開始時に開く（start）</span></label></div>
        <div class="row"><button id="gdel" type="button" data-i18n="tool.goals.del">🗑 目的を消す</button></div>`,_(j),r("gren").addEventListener("click",()=>{var x;const a=r("gid").value.trim();if(!a||a===t)return;if(d.defs[a]){b(`✗ id '${a}' は既にある`,!0);return}const o=JSON.parse(JSON.stringify(d)),l=o.defs[t];delete o.defs[t],l.id=a,o.defs[a]=l,o.start=o.start.map(w=>w===t?a:w);for(const w of Object.values(o.defs))((x=w.outcome)==null?void 0:x.next)===t&&(w.outcome.next=a);f=a,E(o,{markDirty:!0})}),r("gname").addEventListener("change",()=>v(t,a=>{a.name=r("gname").value||a.name})),r("gintro").addEventListener("change",()=>v(t,a=>{const o=r("gintro").value.trim();o?a.intro=o:delete a.intro})),r("gtk").addEventListener("change",()=>{const a=r("gtk").value;v(t,o=>{var l;o.target=a==="kill"?{kind:"kill",mon:(S.monsters??[])[0]??"goblin"}:a==="fetch"?{kind:"fetch",item:(S.items??[])[0]??"herb"}:a==="reach"?{kind:"reach",node:((l=(S.nodes??[])[0])==null?void 0:l.id)??"town"}:a==="depth"?{kind:"depth",depth:5}:{kind:"flag",flag:"my-flag"}})});const u=a=>{var o;return Math.trunc(Number(((o=g.querySelector(`#${a}`))==null?void 0:o.value)??0))};(h=g.querySelector("#gmon"))==null||h.addEventListener("change",()=>v(t,a=>{a.target.kind==="kill"&&(a.target.mon=g.querySelector("#gmon").value.trim())})),(A=g.querySelector("#gitem"))==null||A.addEventListener("change",()=>v(t,a=>{a.target.kind==="fetch"&&(a.target.item=g.querySelector("#gitem").value.trim())})),(ee=g.querySelector("#gcount"))==null||ee.addEventListener("change",()=>v(t,a=>{const o=u("gcount");(a.target.kind==="kill"||a.target.kind==="fetch")&&(o>1?a.target.count=o:delete a.target.count)})),(te=g.querySelector("#gnode"))==null||te.addEventListener("change",()=>v(t,a=>{a.target.kind==="reach"&&(a.target.node=g.querySelector("#gnode").value.trim())})),(ae=g.querySelector("#gdepth"))==null||ae.addEventListener("change",()=>v(t,a=>{a.target.kind==="depth"&&(a.target.depth=Math.max(1,Math.min(99,u("gdepth"))))})),(ne=g.querySelector("#gflag"))==null||ne.addEventListener("change",()=>v(t,a=>{a.target.kind==="flag"&&(a.target.flag=g.querySelector("#gflag").value.trim())}));for(const a of Array.from(j.querySelectorAll("[data-rk]")))a.addEventListener("change",()=>v(t,o=>{const l=Number(a.dataset.rk),x=a.value,w=o.rewards??[];w[l]=x==="setFlag"?{kind:"setFlag",flag:"my-flag"}:x==="giveItem"?{kind:"giveItem",item:(S.items??[])[0]??"herb"}:{kind:"giveGold",amount:100},o.rewards=w}));for(const a of Array.from(j.querySelectorAll("[data-rv]")))a.addEventListener("change",()=>v(t,o=>{var w;const l=Number(a.dataset.rv),x=(w=o.rewards)==null?void 0:w[l];x&&(x.kind==="giveGold"?x.amount=Math.max(1,Math.min(99999,Math.trunc(Number(a.value)))):x.kind==="setFlag"?x.flag=a.value.trim():x.item=a.value.trim())}));for(const a of Array.from(j.querySelectorAll("[data-rdel]")))a.addEventListener("click",()=>v(t,o=>{const l=Number(a.dataset.rdel);o.rewards=(o.rewards??[]).filter((x,w)=>w!==l),o.rewards.length||delete o.rewards}));(oe=g.querySelector("#graddr"))==null||oe.addEventListener("click",()=>v(t,a=>{a.rewards=[...a.rewards??[],{kind:"setFlag",flag:"my-flag"}]})),r("gwin").addEventListener("change",()=>v(t,a=>{const o=r("gwin").checked,l={...a.outcome??{}};o?l.win=!0:delete l.win,l.win||l.next?a.outcome=l:delete a.outcome})),r("gnext").addEventListener("change",()=>v(t,a=>{const o=r("gnext").value,l={...a.outcome??{}};o?l.next=o:delete l.next,l.win||l.next?a.outcome=l:delete a.outcome})),r("gpersist").addEventListener("change",()=>v(t,a=>{r("gpersist").checked?a.persist=!0:delete a.persist})),r("gstart").addEventListener("change",()=>{const a=r("gstart").checked,o=JSON.parse(JSON.stringify(d));o.start=a?[...o.start.filter(l=>l!==t),t]:o.start.filter(l=>l!==t),f=t,E(o,{markDirty:!0})}),r("gdel").addEventListener("click",()=>{var o;const a=JSON.parse(JSON.stringify(d));delete a.defs[t],a.start=a.start.filter(l=>l!==t);for(const l of Object.values(a.defs))((o=l.outcome)==null?void 0:o.next)===t&&(delete l.outcome.next,l.outcome.win||delete l.outcome);f=null,E(a,{markDirty:!0})})}r("gadd").addEventListener("click",()=>{if(Object.keys(d.defs).length>=se){b(`✗ 目的は ${se} 件まで`,!0);return}let e=1;for(;d.defs[`goal-${e}`];)e++;const t=`goal-${e}`,n=JSON.parse(JSON.stringify(d));n.defs[t]={id:t,name:`目的 ${e}`,target:{kind:"depth",depth:5}},n.start.length||(n.start=[t]),f=t,E(n,{markDirty:!0})});async function T(){try{const e=await(await fetch(O("/api/tables/proposals"))).json();ke(r("proposals"),e.proposals??[],{tag:()=>c("tool.goals.capTag"),onView:t=>{ge(t)},onPromote:t=>{Z(t)},onArchive:t=>{ue(t)}}),r("glslive").textContent="· live",N.hidden=!1}catch{r("proposals").innerHTML=`<div class="live">${p(c("tool.goals.noApi"))}</div>`,r("glslive").textContent=c("tool.common.devOff"),N.hidden=!0}W()}function W(){var t;const e=r("truth");e.innerHTML=`<div class="card"><b>tables.goals</b><span class="id">${p(C)}</span>
        <div class="row"><button type="button" data-act="truth-load">${p(c("tool.goals.load"))}</button></div></div>`,(t=e.querySelector('[data-act="truth-load"]'))==null||t.addEventListener("click",()=>{k=!1,F(!0).then(()=>b(c("tool.goals.loaded")))})}async function ge(e){var t,n;try{const s=await(await fetch(O(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),i=(n=(t=s.docs)==null?void 0:t[0])==null?void 0:n.tables.goals;if(i===void 0)throw new Error(c("tool.goals.propNoGoals"));f=null,k=!0,E({start:[...i.start],defs:JSON.parse(JSON.stringify(i.defs))}),b(c("tool.goals.loadedProp",{name:s.docs[0].name}))}catch(s){b(s.message,!0)}}async function Z(e){try{await J(O("/api/tables/promote"),{proposalId:e}),b(c("tool.goals.promoted")),k=!1,T(),F(!0)}catch(t){b(t.message,!0)}}async function ue(e){try{await J(O("/api/tables/archive"),{proposalId:e}),b(c("tool.goals.archived")),T()}catch(t){b(t.message,!0)}}async function X(){var e,t;try{const n=await fetch(O("/api/tables/truth"));if(n.ok)return((t=(e=(await n.json()).docs)==null?void 0:e[0])==null?void 0:t.tables)??{}}catch{}return{}}async function Y(){const e=D();if(!e.ok){b(`✗ ${e.error}`,!0);return}const t=r("savelabel").value.trim()||c("tool.goals.defaultLabel"),s={...await X()};e.goals?s.goals=e.goals:delete s.goals;const i={formatVersion:be,id:"tables",name:t,tables:s,createdAt:ie(),updatedAt:ie()};try{await J(O("/api/tables/proposal"),{tables:i,label:t,createdBy:"user"}),b(c("tool.goals.saved",{name:t})),T()}catch(y){b(y.message,!0)}}r("save").addEventListener("click",()=>{Y()}),r("savelabel").addEventListener("input",G);const N=document.createElement("button");N.type="button",N.id="glsplay",N.hidden=!0,r("gadd").insertAdjacentElement("afterend",N);function Q(){N.textContent=k?c("tool.studio.playDraft"):c("tool.studio.playNow"),N.title=k?c("tool.studio.playDraftTitle"):c("tool.studio.playNowTitle")}Q(),N.addEventListener("click",()=>{if(!k){window.open(we(L.world()),"_blank");return}const e=D();if(!e.ok){b(`✗ ${e.error}`,!0);return}const t=window.open("","_blank");(async()=>{const s={...await X()};e.goals?s.goals=e.goals:delete s.goals;const i=`dungeon.html?pack=${encodeURIComponent($e(s,`goals preview (${L.world()})`))}`;t?t.location.href=i:window.open(i,"_blank")})()});function M(){U(),pe(),V(),Q(),q&&d.defs[q]&&(f=q,q=null,U(),V())}const fe=L.events.on("tables",()=>{T(),F()}),ve=ye(()=>{_(g),M(),T()});return window.cdGoals={draft:()=>d,valid:()=>D(),lint:()=>H(),patch:e=>{E(e(JSON.parse(JSON.stringify(d))),{markDirty:!0})},select:e=>{f=e,M()},save:()=>Y(),promote:e=>Z(e),refresh:()=>T(),reload:(e=!0)=>F(e),dirty:()=>k},le()?(M(),b(c("tool.common.restored")),T(),F()):F(!0).then(()=>{T()}),{applyParams(e){const t=e.get("focus");t&&(d.defs[t]?(f=t,M()):q=t)},dispose(){fe(),ve(),G(),delete window.cdGoals}}}};export{He as goalsPanel};
