import{p as N,w as k,f as ia}from"./creator-auth-Bl-sL_3z.js";import{o as pa,P as da}from"./studio-BBWstWjK.js";import{b as ca,t as s}from"./i18n-D6wL48qN.js";import{r as wa}from"./tool-shelf-CUloPvsH.js";import{T as ma}from"./tables-doc-56NqbXX4.js";import{C as W,p as ua}from"./tables-DZNtMvcF.js";import"./preload-helper-Dp1pzeXC.js";import"./schemas-BBGxizon.js";const L=["posBack","posSide","posHigh","waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap","monsterCap","breathLen","breathCd"],aa={posBack:{min:1,max:3,step:.1},posSide:{min:1,max:3,step:.1},posHigh:{min:1,max:3,step:.1},waveFirstAfter:{min:0,max:30,step:1},waveGapBase:{min:1,max:30,step:1},waveGapJitter:{min:0,max:10,step:1},waveCountCap:{min:1,max:12,step:1},monsterCap:{min:4,max:40,step:1},breathLen:{min:1,max:9,step:1},breathCd:{min:1,max:20,step:1}};function $(){const i={};for(const l of L)i[l]=W.tuning[l];return i}function R(i){var t;const l=$();for(const p of L){const w=(t=i.tuning)==null?void 0:t[p];typeof w=="number"&&(l[p]=w)}return l}function K(i,l){const t=W.tuning,p={...i.tuning??{}};for(const b of L)l[b]!==t[b]?p[b]=l[b]:delete p[b];const w={...i};return Object.keys(p).length?w.tuning=p:delete w.tuning,ua(w)}function fa(i){const l=[];for(const t of L){const p=aa[t],w=i[t];(!Number.isFinite(w)||w<p.min||w>p.max)&&l.push({field:t,value:w,min:p.min,max:p.max})}return l}function Y(i){const l=W.tuning;return L.filter(t=>i[t]!==l[t])}function Q(i){const l=[];return(i.waveGapBase+i.waveGapJitter>=24||i.waveCountCap<=1)&&l.push({key:"wavesLoose",level:"warn"}),i.monsterCap<=6&&l.push({key:"capLow",level:"warn"}),Math.max(i.posBack,i.posSide,i.posHigh)>=2.5&&l.push({key:"posDominant",level:"warn"}),i.waveFirstAfter<=1&&i.waveGapBase<=3&&l.push({key:"wavesHarsh",level:"note"}),i.monsterCap>=30&&l.push({key:"capHigh",level:"note"}),i.breathCd<=i.breathLen&&l.push({key:"breathTight",level:"note"}),{level:l.some(p=>p.level==="warn")?"warn":l.length?"note":"ok",notes:l}}const ba=`<!-- ============================================================
     §studio W3 — ワールド管理パネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 worlds.html body の単一実体（二重持ちゼロ）：スタジオも旧 worlds.html（stub）も
     この1枚を mount する。中身はマルチテナント E の従来 markup そのまま。
     改変は2点だけ：(1) 要素セレクタ（header/main/body）を #wapp 配下にスコープ
     （パネル注入の <style> は document 全域に効く＝シェル chrome へ漏らさない柵）
     (2) 高さ＝#wapp が 100% スクロール container（host の中で生きる）。
     ============================================================ -->
<style>
  /* マルチテナント E — ダッシュボード（アカウント→ワールド一覧→開く/複製/公開）。
     見た目はツール群（forge/sculpt/smith）と同じ暗色の流儀・依存なしの素朴 CSS。 */
  #wapp { box-sizing: border-box; height: 100%; overflow-y: auto; background: #12151c; color: #dfe6f2; font: 14px/1.6 -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif; }
  #wapp *, #wapp *::before, #wapp *::after { box-sizing: border-box; }
  #wapp header { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; padding: 14px 18px 6px; }
  #wapp header h1 { font-size: 18px; margin: 0; }
  #wapp header .sub { color: #8b96ab; font-size: 12px; }
  #wapp .langpick { color: #8b96ab; margin-left: auto; }
  #wapp .langpick select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 2px 6px; }
  #wapp main { padding: 8px 18px 40px; max-width: 980px; }
  #wapp h2 { font-size: 14px; color: #aeb9cf; border-bottom: 1px solid #262e40; padding-bottom: 4px; margin: 22px 0 10px; }
  #wapp .acct { color: #8b96ab; font-size: 12px; }
  #wapp .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
  #wapp .card { background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 12px; }
  #wapp .card b { font-size: 15px; }
  #wapp .key { color: #8b96ab; font-size: 11px; font-family: ui-monospace, monospace; }
  #wapp .tagrow { margin: 6px 0; display: flex; gap: 6px; flex-wrap: wrap; }
  #wapp .tag { font-size: 11px; border-radius: 999px; padding: 1px 8px; border: 1px solid #333c52; color: #aeb9cf; }
  #wapp .tag.pub { border-color: #3e7a4f; color: #8fd6a3; }
  #wapp .row { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  #wapp button, #wapp .btn { background: #232b3d; color: #dfe6f2; border: 1px solid #333c52; border-radius: 8px; padding: 5px 10px; font-size: 12px; cursor: pointer; text-decoration: none; display: inline-block; }
  #wapp button.on, #wapp .btn.on { background: #2e4a7a; border-color: #47639c; }
  #wapp button:hover, #wapp .btn:hover { filter: brightness(1.15); }
  #wapp form.create { display: flex; gap: 8px; flex-wrap: wrap; align-items: end; background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 12px; }
  #wapp form.create label { display: flex; flex-direction: column; gap: 3px; font-size: 11px; color: #8b96ab; }
  #wapp form.create input, #wapp form.create select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 5px 8px; min-width: 150px; }
  #wapp #say { margin: 10px 0; min-height: 1.4em; color: #8fd6a3; }
  #wapp #say.err { color: #e08a8a; }
  #wapp .live { color: #8b96ab; font-size: 12px; }
  /* ── §maker M6 ⚖世界の掟（E8）＝タブ2枚（🌍ワールド／⚖掟） ─────────────────── */
  #wapp nav.wtabs { display: flex; gap: 6px; padding: 6px 18px 0; border-bottom: 1px solid #262e40; }
  #wapp .wtab { border-radius: 8px 8px 0 0; border-bottom: none; background: #161b26; }
  #wapp .wtab.on { background: #232b3d; color: #ffd166; font-weight: 700; }
  #wapp #wlaws main { max-width: 1180px; }
  #wapp .lawscols { display: flex; gap: 18px; align-items: flex-start; flex-wrap: wrap; }
  #wapp .lawsmain { flex: 2 1 480px; min-width: 0; }
  #wapp .lawsloop { flex: 1 1 280px; min-width: 260px; display: flex; flex-direction: column; gap: 10px; }
  #wapp .lawgrp { background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 10px 12px; margin: 8px 0; }
  #wapp .lawgrp h3 { font-size: 12px; color: #ffd166; margin: 0 0 6px; }
  #wapp .lawrow { display: flex; align-items: center; gap: 8px; margin: 4px 0; flex-wrap: wrap; font-size: 12px; }
  #wapp .lawrow code { font-family: ui-monospace, monospace; font-size: 11px; color: #8fb7ff; min-width: 9.5em; }
  #wapp .lawrow .lbl { color: #aeb9cf; flex: 1; min-width: 10em; }
  #wapp .lawrow input { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 4px 7px; width: 5.2em; font: inherit; font-size: 12px; }
  #wapp .lawrow input.chg { border-color: #ffb347; box-shadow: 0 0 0 1px rgba(255, 179, 71, 0.35) inset; } /* 既定と違う＝火が入っている印（tuner と同じ流儀） */
  #wapp .lawrow .rng { color: #5d6880; font-size: 10px; }
  #wapp #lawsLint { margin: 8px 0; font-size: 12px; white-space: pre-wrap; }
  #wapp #lawsLint .ok { color: #8fd6a3; }
  #wapp #lawsLint .err { color: #e08a8a; }
  #wapp .meter { border-radius: 10px; padding: 10px 12px; margin: 8px 0; border: 1px solid #262e40; background: #181d29; font-size: 12px; }
  #wapp .meter.ok { border-color: #3e7a4f; }
  #wapp .meter.note { border-color: #6b5a41; }
  #wapp .meter.warn { border-color: #a8552a; background: #241a14; }
  #wapp .meter b.lv { display: inline-block; margin-bottom: 4px; }
  #wapp .meter.ok b.lv { color: #8fd6a3; }
  #wapp .meter.note b.lv { color: #ffd166; }
  #wapp .meter.warn b.lv { color: #ffa06e; }
  #wapp .meter ul { margin: 2px 0 0 1.2em; padding: 0; color: #aeb9cf; }
  #wapp ul.constlist { list-style: none; margin: 8px 0; padding: 0; }
  #wapp ul.constlist li { background: #161b26; border: 1px solid #232b3d; border-radius: 8px; padding: 7px 10px; margin: 5px 0; font-size: 12px; color: #aeb9cf; }
  #wapp .lawsloop input[type="text"] { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 5px 8px; width: 100%; font: inherit; font-size: 12px; }
  #wapp .lawsloop .card { background: #181d29; border: 1px solid #262e40; border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  #wapp .lawsloop .card .id { font-family: ui-monospace, monospace; font-size: 10px; color: #8b96ab; }
  #wapp .lawsloop .card .who { font-size: 10px; color: #ffd166; }
  #wapp .lawsloop .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  #wapp .lawsloop details.hist summary { cursor: pointer; color: #8b96ab; font-size: 11px; }
  #wapp .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid #ffd166; border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  #wapp .confirmbar span { color: #ffd166; }
  @media (max-width: 900px) { #wapp .lawrow input { min-height: 40px; font-size: 16px; } } /* touch＝iOS ズーム回避（tuner と同じ柵） */
  @media (max-width: 480px) { #wapp main { padding: 8px 12px 40px; } #wapp nav.wtabs { padding: 6px 12px 0; } }
</style>
<div id="wapp">
  <header>
    <h1 data-i18n="worlds.title">ワールド管理</h1>
    <span class="sub" data-i18n="worlds.sub">アカウント → ワールド一覧 → 開く/複製/公開（1ワールド=1公開ゲーム=1URL）</span>
    <span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span>
  </header>
  <nav class="wtabs">
    <button id="wtab-home" class="wtab on" type="button" data-i18n="worlds.tabHome">🌍 ワールド</button>
    <button id="wtab-laws" class="wtab" type="button" data-i18n="worlds.tabLaws">⚖ 世界の掟</button>
  </nav>
  <div id="whome">
  <main>
    <div class="acct"><span data-i18n="worlds.account">アカウント</span>: <b id="acct">—</b></div>
    <div id="say"></div>
    <h2 data-i18n="worlds.title">ワールド管理</h2>
    <div id="worlds" class="grid"><div class="live">…</div></div>
    <h2 data-i18n="worlds.createHead">新しいワールド</h2>
    <form class="create" id="createForm">
      <label><span data-i18n="worlds.fldId">id（kebab-case）</span><input id="fldId" pattern="[a-z0-9][a-z0-9-]*" required placeholder="my-dungeon" /></label>
      <label><span data-i18n="worlds.fldTitle">タイトル</span><input id="fldTitle" placeholder="わたしの迷宮" /></label>
      <label><span data-i18n="worlds.fldFrom">雛形</span><select id="fldFrom"></select></label>
      <button type="submit" class="on" id="createDo" data-i18n="worlds.createDo">作成</button>
    </form>
  </main>
  </div>
  <!-- ============================================================
       §maker M6 ⚖世界の掟（E8）＝ワールド全体に効く大域ルールの面。
       ・編集できる掟＝今日の schema（tables.ts＝聖域）にある「深度に依らない tuning の大域スカラ」だけ。
         深度カーブ/表は tuner・loot は smith・地表グラフは atlas ＝絶対に被らせない（境界は laws-core 頭書き）。
       ・保存＝truth を read → 掟キーだけ patch → 全文 propose（tuner の編集を踏まない粒度）→ ⭐2段。
       ・E8 の systems ダイヤル（空腹復活/deathPenalty/xpShare…）は ★確認ゲート#5 の裁定待ち＝
         「固定の掟（憲法）」として表示のみ。
       ============================================================ -->
  <div id="wlaws" hidden>
  <main>
    <div class="acct"><span data-i18n="worlds.laws.world">対象ワールド</span>: <b id="lawsWorld">—</b></div>
    <div id="lawsSay"></div>
    <div class="lawscols">
      <div class="lawsmain">
        <h2 data-i18n="worlds.laws.editHead">⚖ 編集できる掟（深度に依らない大域スカラ）</h2>
        <div class="sub" data-i18n="worlds.laws.intro">この世界ぜんたいに効く大域ルール。深度カーブ・出現の表は 🎛調律台、loot は ⚒工房、地表グラフは atlas の領分＝ここでは触らない。保存は truth の該当キーだけを差し替える（他ツールの編集を踏まない）。</div>
        <div id="lawsForm"></div>
        <div id="lawsLint"></div>
        <h2 data-i18n="worlds.laws.meterHead">🧭 北極星メーター（探索・生きて帰る）</h2>
        <div id="lawsMeter"></div>
        <h2 data-i18n="worlds.laws.constHead">🔒 固定の掟（engine の憲法＝表示のみ）</h2>
        <ul class="constlist">
          <li data-i18n="worlds.laws.c.hunger">🍞 空腹：OFF（棚上げ済。復活トグルは systems 欄＝★確認ゲート#5 の裁定後に data 化）</li>
          <li data-i18n="worlds.laws.c.party">👥 パーティ人数上限：6（hero＋5＝3人組×2・北極星の上限）</li>
          <li data-i18n="worlds.laws.c.death">💀 死：hero の死＝隊は解散し持ち物を失い街へ（仲間の死＝死体→蘇生で復帰・失敗は灰）</li>
          <li data-i18n="worlds.laws.c.xp">✨ 経験値：とどめの近く（チェビシェフ6）の仲間だけに入る（近共有）</li>
          <li data-i18n="worlds.laws.c.core">🧊 不変の芯：lockstep・決定論 seed・トルネコ式地図・命令が探索を駆動</li>
        </ul>
        <div class="sub" data-i18n="worlds.laws.constNote">ここはダイヤルにしない（Mod 境界＝ルールは engine 固定・DESIGN-maker §E8）。ダイヤル化の候補は masaru の確認ゲート #5 が開いてから。</div>
      </div>
      <div class="lawsloop">
        <input id="lawsLabel" type="text" placeholder="掟の名前（例：圧つよめ）" data-i18n-ph="worlds.laws.labelPh" />
        <button id="lawsSave" class="on" type="button" data-i18n="worlds.laws.save">💾 提案として保存（future）</button>
        <button id="lawsReset" type="button" data-i18n="worlds.laws.reset">↩ 掟を comduct 既定に戻す</button>
        <div class="sub" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</div>
        <h2 data-i18n="worlds.laws.futureHead">⭐ 提案（future）</h2>
        <div id="lawsProposals"></div>
        <h2 data-i18n="worlds.laws.truthHead">📜 truth（この world の tables）</h2>
        <div id="lawsTruth"></div>
      </div>
    </div>
  </main>
  </div>
</div>
`,u=i=>i.replace(/[&<>"]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[l]),X=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),xa=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],$a={id:"worlds",async mount(i,l){i.innerHTML=ba,ca(i);const t=a=>i.querySelector(`#${a}`);function p(a,e=!1){const n=t("say");n.textContent=a,n.className=e?"err":""}let w="masaru",b=[];function D(a,e){if(e===l.world()){l.navigate(a);return}const n=l.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);n.search="",n.searchParams.set("panel",a),n.searchParams.set("world",e),window.location.href=n.toString()}function I(){const a=t("worlds");if(a.innerHTML="",!b.length){const r=document.createElement("div");r.className="live",r.textContent=s("worlds.none"),a.appendChild(r);return}for(const r of b){const d=document.createElement("div");d.className="card";const h=document.createElement("div"),V=document.createElement("b");V.textContent=r.title,h.appendChild(V);const j=document.createElement("div");j.className="key",j.textContent=r.key;const M=document.createElement("div");M.className="tagrow";const O=document.createElement("span");O.className="tag"+(r.publishedAt?" pub":""),O.textContent=r.publishedAt?s("worlds.statusPublished"):s("worlds.statusDraft"),M.appendChild(O);const Z=r.forkedFrom;if(Z){const m=document.createElement("span");m.className="tag",m.textContent=s("worlds.forkedFrom",{world:Z}),M.appendChild(m)}d.append(h,j,M);const B=document.createElement("div");B.className="row";for(const m of da){if(m.id==="worlds")continue;const F=document.createElement("button");F.type="button",F.className="btn",F.textContent=`${m.icon} ${s(m.titleKey)}`,F.addEventListener("click",()=>D(m.id,r.key)),B.appendChild(F)}d.appendChild(B);const G=document.createElement("div");G.className="row";const T=document.createElement("button");T.type="button",T.className="on",T.textContent=s("worlds.publish"),T.addEventListener("click",()=>{(async()=>{try{const m=await N("/api/worlds/publish",{world:r.key});p(s("worlds.published",{path:m.packPath})),await H()}catch(m){p(s("worlds.publishFail",{msg:m.message}),!0)}})()});const A=document.createElement("button");A.type="button",A.textContent=s("tool.common.dup"),A.addEventListener("click",()=>{t("fldFrom").value=r.key,t("fldId").focus();const m=t("wapp");m.scrollTo({top:m.scrollHeight,behavior:"smooth"})});const z=document.createElement("a");z.className="btn",z.textContent=s("worlds.play"),z.href=`dungeon.html?pack=${encodeURIComponent(`packs/${r.packName}.json`)}`,z.target="_blank",G.append(T,A,z),d.appendChild(G),a.appendChild(d)}const e=t("fldFrom"),n=e.value;e.innerHTML="";const o=document.createElement("option");o.value="",o.textContent=s("worlds.fromEmpty"),e.appendChild(o);for(const r of b){const d=document.createElement("option");d.value=r.key,d.textContent=`${r.title}（${r.key}）`,e.appendChild(d)}[...e.options].some(r=>r.value===n)&&(e.value=n)}async function H(){const a=await ia();if(!a){p(s("worlds.loadFail",{msg:"API unreachable"}),!0),b=[],I();return}w=a.accountId,b=a.worlds,t("acct").textContent=w,I()}t("createForm").addEventListener("submit",a=>{a.preventDefault();const e=t("fldId").value.trim(),n=t("fldTitle").value.trim()||e,o=t("fldFrom").value||void 0;(async()=>{try{const r=await N("/api/worlds",{id:e,title:n,...o?{from:o}:{}});p(s("worlds.created",{key:r.key})),t("fldId").value="",t("fldTitle").value="",await H()}catch(r){p(s("worlds.createFail",{msg:r.message}),!0)}})()});let x="home",c=$(),v=!1,g=null;function f(a,e=!1){const n=t("lawsSay");n.textContent=a,n.className=e?"err":"",n.style.color=e?"#e08a8a":"#8fd6a3"}function S(){t("wtab-home").classList.toggle("on",x==="home"),t("wtab-laws").classList.toggle("on",x==="laws"),t("whome").hidden=x!=="home",t("wlaws").hidden=x!=="laws"}const J="cdWorldsLawsM6";function y(){try{sessionStorage.setItem(J,JSON.stringify({v:1,tab:x,laws:c,dirty:v,label:t("lawsLabel").value}))}catch{}}function ea(){var a;try{const e=sessionStorage.getItem(J);if(!e)return!1;const n=JSON.parse(e);if(n.v!==1||typeof((a=n.laws)==null?void 0:a.monsterCap)!="number")return!1;x=n.tab==="laws"?"laws":"home";const o=$();for(const r of L)typeof n.laws[r]=="number"&&(o[r]=n.laws[r]);return c=o,v=!!n.dirty,n.label&&(t("lawsLabel").value=n.label),!0}catch{return!1}}function C(){const a=$();t("lawsForm").innerHTML=xa.map(([e,n])=>`<div class="lawgrp"><h3>${u(s(e))}</h3>${n.map(o=>{const r=aa[o];return`<div class="lawrow"><code>${o}</code><span class="lbl">${u(s(`worlds.laws.f.${o}`))}</span><input data-law="${o}" type="number" value="${c[o]}" min="${r.min}" max="${r.max}" step="${r.step}" class="${c[o]!==a[o]?"chg":""}" /><span class="rng">${r.min}–${r.max}</span></div>`}).join("")}</div>`).join(""),P(),_()}function P(){const a=t("lawsLint"),e=t("lawsSave"),n=fa(c);if(n.length)return a.innerHTML=`<div class="err">${n.map(o=>u(s("worlds.laws.rangeErr",{field:o.field,min:o.min,max:o.max}))).join(`
`)}</div>`,e.disabled=!0,!1;try{K({},c)}catch(o){return a.innerHTML=`<div class="err">✗ ${u(o.message.slice(0,600))}</div>`,e.disabled=!0,!1}return a.innerHTML=`<div class="ok">✓ ${u(s("worlds.laws.lintOk",{n:Y(c).length}))}</div>`,e.disabled=!1,!0}function _(){const a=Q(c),e=s(a.level==="ok"?"worlds.laws.meterOk":a.level==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");t("lawsMeter").innerHTML=`<div class="meter ${a.level}"><b class="lv">${u(e)}</b>${a.notes.length?`<ul>${a.notes.map(n=>`<li>${u(s(`worlds.laws.n.${n.key}`))}</li>`).join("")}</ul>`:""}</div>`}function U(a){var r;const e=t("lawsTruth");if(!a){e.innerHTML=`<div class="live">${u(s("worlds.laws.truthEmpty"))}</div>`;return}const n=L.filter(d=>{var h;return typeof((h=a.tables.tuning)==null?void 0:h[d])=="number"}).length,o=[...Object.keys(a.tables).filter(d=>d!=="tuning"),...Object.keys(a.tables.tuning??{}).filter(d=>!L.includes(d)).map(d=>`tuning.${d}`)];e.innerHTML=`<div class="card"><b>${u(a.name)}</b><span class="id">${u(a.updatedAt)}・${n} ${u(s("worlds.laws.ovFields"))}</span><span class="id">${u(o.length?s("worlds.laws.keepNote",{list:o.join(", ")}):s("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${u(s("worlds.laws.load"))}</button></div></div>`,(r=e.querySelector('[data-act="laws-truth-load"]'))==null||r.addEventListener("click",()=>{c=R(a.tables),v=!1,C(),f(s("worlds.laws.loaded",{name:a.name})),y()})}async function E(){var a;t("lawsWorld").textContent=l.world();try{const[e,n]=await Promise.all([fetch(k("/api/tables/truth")).then(o=>o.json()),fetch(k("/api/tables/proposals")).then(o=>o.json())]);g=((a=e.docs)==null?void 0:a[0])??null,v||(c=R((g==null?void 0:g.tables)??{}),C()),U(g),wa(t("lawsProposals"),n.proposals??[],{tag:()=>s("worlds.laws.capTag"),onView:o=>{ta(o)},onPromote:o=>{na(o)},onArchive:o=>{oa(o)}})}catch{g=null,t("lawsTruth").innerHTML=`<div class="live">${u(s("worlds.laws.noApi"))}</div>`,t("lawsProposals").innerHTML=""}}async function ta(a){var e;try{const o=(e=(await(await fetch(k(`/api/tables/proposal?id=${encodeURIComponent(a)}`))).json()).docs)==null?void 0:e[0];if(!o)throw new Error("proposal is empty");c=R(o.tables),v=!0,C(),f(s("worlds.laws.loaded",{name:o.name})),y()}catch(n){f(n.message,!0)}}async function na(a){try{await N(k("/api/tables/promote"),{proposalId:a}),f(s("tool.common.adoptedNote")),E()}catch(e){f(s("tool.common.promoteFail",{msg:e.message}),!0)}}async function oa(a){try{await N(k("/api/tables/archive"),{proposalId:a}),f(s("tool.common.archived")),E()}catch(e){f(s("tool.common.archiveFail",{msg:e.message}),!0)}}async function q(){var d;if(!P()){f(s("worlds.laws.saveNoValid"),!0);return}let a=g;try{a=((d=(await(await fetch(k("/api/tables/truth"))).json()).docs)==null?void 0:d[0])??null}catch{}let e;try{e=K((a==null?void 0:a.tables)??{},c)}catch(h){f(h.message,!0);return}const n=Y(c),o=t("lawsLabel").value.trim()||s("worlds.laws.defaultLabel",{list:n.length?n.join(", "):"—"}),r={formatVersion:ma,id:"tables",name:o,tables:e,createdAt:(a==null?void 0:a.createdAt)??X(),updatedAt:X()};try{await N(k("/api/tables/proposal"),{tables:r,label:o,createdBy:"user"}),f(s("worlds.laws.saved",{name:o})),E()}catch(h){f(s("tool.common.saveFail",{msg:h.message}),!0)}}t("wtab-home").addEventListener("click",()=>{x="home",S(),y()}),t("wtab-laws").addEventListener("click",()=>{x="laws",S(),y()}),t("lawsForm").addEventListener("input",a=>{const e=a.target,n=e.getAttribute("data-law");n&&(c[n]=Number(e.value),v=!0,e.classList.toggle("chg",c[n]!==$()[n]),P(),_(),y())}),t("lawsSave").addEventListener("click",()=>{q()}),t("lawsReset").addEventListener("click",()=>{c=$(),v=!0,C(),f(s("worlds.laws.resetDone")),y()});const sa=l.events.on("tables",()=>{E()});window.cdWorlds={reload:()=>H(),worlds:()=>b,account:()=>w,api:a=>k(a),open:(a,e)=>D(a,e??l.world()),laws:{tab:a=>{x=a,S()},draft:()=>({...c}),set:(a,e)=>{c[a]=e,v=!0,C(),y()},judge:()=>Q(c),save:()=>q(),refresh:()=>E()}};const ra=pa(()=>{I(),C(),U(g),E()}),la=ea();return S(),C(),la&&v&&f(s("tool.common.restored")),H(),E(),{applyParams(a){const e=a.get("tab");e==="laws"?x="laws":e==="home"&&(x="home"),S()},dispose(){sa(),ra(),y(),delete window.cdWorlds}}}};export{$a as worldsPanel};
