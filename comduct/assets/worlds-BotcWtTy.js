import{p as A,D as ea,w as L,f as ua}from"./creator-auth-Bis908wL.js";import{o as fa,P as ba}from"./studio-Dy5zbV5Q.js";import{b as xa,t as s}from"./i18n-D2Er-ixT.js";import{r as ha}from"./tool-shelf-Dy_vej1J.js";import{T as ga}from"./tables-doc-BQ8MJfXy.js";import{C as V,k as va}from"./tables-3Ch_nF30.js";import"./preload-helper-Dp1pzeXC.js";import"./schemas-BBGxizon.js";const C=["posBack","posSide","posHigh","waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap","monsterCap","breathLen","breathCd"],la={posBack:{min:1,max:3,step:.1},posSide:{min:1,max:3,step:.1},posHigh:{min:1,max:3,step:.1},waveFirstAfter:{min:0,max:30,step:1},waveGapBase:{min:1,max:30,step:1},waveGapJitter:{min:0,max:10,step:1},waveCountCap:{min:1,max:12,step:1},monsterCap:{min:4,max:40,step:1},breathLen:{min:1,max:9,step:1},breathCd:{min:1,max:20,step:1}};function T(){const p={};for(const i of C)p[i]=V.tuning[i];return p}function q(p){var t;const i=T();for(const d of C){const w=(t=p.tuning)==null?void 0:t[d];typeof w=="number"&&(i[d]=w)}return i}function ta(p,i){const t=V.tuning,d={...p.tuning??{}};for(const f of C)i[f]!==t[f]?d[f]=i[f]:delete d[f];const w={...p};return Object.keys(d).length?w.tuning=d:delete w.tuning,va(w)}function ya(p){const i=[];for(const t of C){const d=la[t],w=p[t];(!Number.isFinite(w)||w<d.min||w>d.max)&&i.push({field:t,value:w,min:d.min,max:d.max})}return i}function na(p){const i=V.tuning;return C.filter(t=>p[t]!==i[t])}function oa(p){const i=[];return(p.waveGapBase+p.waveGapJitter>=24||p.waveCountCap<=1)&&i.push({key:"wavesLoose",level:"warn"}),p.monsterCap<=6&&i.push({key:"capLow",level:"warn"}),Math.max(p.posBack,p.posSide,p.posHigh)>=2.5&&i.push({key:"posDominant",level:"warn"}),p.waveFirstAfter<=1&&p.waveGapBase<=3&&i.push({key:"wavesHarsh",level:"note"}),p.monsterCap>=30&&i.push({key:"capHigh",level:"note"}),p.breathCd<=p.breathLen&&i.push({key:"breathTight",level:"note"}),{level:i.some(d=>d.level==="warn")?"warn":i.length?"note":"ok",notes:i}}const ka=`<!-- ============================================================
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
  /* §studio 敷石#2 — 作成の雛形ピッカー（①旗艦を fork＝全部入り／②まっさら／③手持ちを複製） */
  #wapp .tpls { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; margin: 0 0 8px; }
  #wapp .tplcard { display: flex; flex-direction: column; gap: 4px; text-align: left; background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 10px 12px; cursor: pointer; color: #dfe6f2; font: inherit; }
  #wapp .tplcard b { font-size: 13px; }
  #wapp .tplcard span { font-size: 11px; color: #8b96ab; line-height: 1.5; }
  #wapp .tplcard.on { border-color: #47639c; background: #1e2740; box-shadow: 0 0 0 1px #47639c inset; }
  #wapp .tplcard.on b { color: #cfe3ff; }
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
    <!-- R3面：account を器の見出しに＝「この世帯のワールド群」が一目で読める（whoami/一覧の表示層） -->
    <div class="acct">👤 <span data-i18n="worlds.account">アカウント</span>: <b id="acct">—</b> <span id="acctNote"></span></div>
    <div id="say"></div>
    <h2 data-i18n="worlds.title">ワールド管理</h2>
    <div id="worlds" class="grid"><div class="live">…</div></div>
    <h2 data-i18n="worlds.createHead">新しいワールド</h2>
    <!-- §studio 敷石#2：作成 UX＝雛形の3択（DESIGN-maker §4-6 のプリセット思想の最小形）。
         fork＝旗艦の truth 全量（WORLD_TRUTH_DIRS＝6 バンドル＋tables）が付いてくる＝参照孤児ゼロの器。 -->
    <div class="tpls" id="tplRow">
      <button type="button" class="tplcard on" data-tpl="fork">
        <b data-i18n="worlds.tpl.fork">🏰 全部入り（旗艦を複製）</b>
        <span data-i18n="worlds.tpl.forkDesc">comduct の truth 丸ごと（部屋・敵・部品・技呪文・実体・調律・地表）を雛形に。すぐ遊べる状態から書き換えていく</span>
      </button>
      <button type="button" class="tplcard" data-tpl="blank">
        <b data-i18n="worlds.tpl.blank">🌱 まっさら</b>
        <span data-i18n="worlds.tpl.blankDesc">空の世界から。生成は engine 既定で最初から遊べる。作成後はハブに「はじまりの手」の道しるべが出る</span>
      </button>
      <button type="button" class="tplcard" data-tpl="from">
        <b data-i18n="worlds.tpl.from">📋 手持ちを複製</b>
        <span data-i18n="worlds.tpl.fromDesc">自分のワールドを選んで雛形に（truth だけ写す・作業中の提案は写さない）</span>
      </button>
    </div>
    <form class="create" id="createForm">
      <label><span data-i18n="worlds.fldId">id（kebab-case）</span><input id="fldId" pattern="[a-z0-9][a-z0-9-]*" required placeholder="my-dungeon" /></label>
      <label><span data-i18n="worlds.fldTitle">タイトル</span><input id="fldTitle" placeholder="わたしの迷宮" /></label>
      <label id="fldFromLbl" hidden><span data-i18n="worlds.fldFrom">雛形</span><select id="fldFrom"></select></label>
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
`,u=p=>p.replace(/[&<>"]/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[i]),sa=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),La=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],Ha={id:"worlds",async mount(p,i){p.innerHTML=ka,xa(p);const t=a=>p.querySelector(`#${a}`);function d(a,e=!1){const n=t("say");n.textContent=a,n.className=e?"err":""}let w="masaru",f=[],S=!1,g="fork",R=ea;function I(){for(const a of Array.from(p.querySelectorAll(".tplcard")))a.classList.toggle("on",a.dataset.tpl===g);t("fldFromLbl").hidden=g!=="from"}t("tplRow").addEventListener("click",a=>{const e=a.target.closest(".tplcard");e!=null&&e.dataset.tpl&&(g=e.dataset.tpl,I())});function D(a,e){if(e===i.world()){i.navigate(a);return}const n=i.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);n.search="",n.searchParams.set("panel",a),n.searchParams.set("world",e),window.location.href=n.toString()}function j(){const a=t("worlds");if(a.innerHTML="",!f.length){const l=document.createElement("div");if(l.className="live",l.textContent=s("worlds.none"),a.appendChild(l),S){const r=document.createElement("button");r.type="button",r.className="on",r.textContent=s("worlds.emptyCta"),r.addEventListener("click",()=>{t("fldId").focus();const x=t("wapp");x.scrollTo({top:x.scrollHeight,behavior:"smooth"})}),a.appendChild(r)}return}for(const l of f){const r=document.createElement("div");r.className="card";const x=document.createElement("div"),Q=document.createElement("b");Q.textContent=l.title,x.appendChild(Q);const B=document.createElement("div");B.className="key",B.textContent=l.key;const P=document.createElement("div");P.className="tagrow";const _=document.createElement("span");_.className="tag"+(l.publishedAt?" pub":""),_.textContent=l.publishedAt?s("worlds.statusPublished"):s("worlds.statusDraft"),P.appendChild(_);const aa=l.forkedFrom;if(aa){const m=document.createElement("span");m.className="tag",m.textContent=s("worlds.forkedFrom",{world:aa}),P.appendChild(m)}r.append(x,B,P);const U=document.createElement("div");U.className="row";for(const m of ba){if(m.id==="worlds")continue;const H=document.createElement("button");H.type="button",H.className="btn",H.textContent=`${m.icon} ${s(m.titleKey)}`,H.addEventListener("click",()=>D(m.id,l.key)),U.appendChild(H)}r.appendChild(U);const J=document.createElement("div");J.className="row";const F=document.createElement("button");F.type="button",F.className="on",F.textContent=s("worlds.publish"),F.addEventListener("click",()=>{(async()=>{try{const m=await A("/api/worlds/publish",{world:l.key});d(s("worlds.published",{path:m.packPath})),await M()}catch(m){d(s("worlds.publishFail",{msg:m.message}),!0)}})()});const O=document.createElement("button");O.type="button",O.textContent=s("tool.common.dup"),O.addEventListener("click",()=>{g="from",I(),t("fldFrom").value=l.key,t("fldId").focus();const m=t("wapp");m.scrollTo({top:m.scrollHeight,behavior:"smooth"})});const z=document.createElement("a");z.className="btn",z.textContent=s("worlds.play"),z.href=`dungeon.html?pack=${encodeURIComponent(`packs/${l.packName}.json`)}`,z.target="_blank",J.append(F,O,z),r.appendChild(J),a.appendChild(r)}const e=t("fldFrom"),n=e.value;e.innerHTML="";const o=document.createElement("option");o.value="",o.textContent=s("worlds.fromEmpty"),e.appendChild(o);for(const l of f){const r=document.createElement("option");r.value=l.key,r.textContent=`${l.title}（${l.key}）`,e.appendChild(r)}[...e.options].some(l=>l.value===n)&&(e.value=n)}function G(){t("acct").textContent=S?w:s("worlds.acctLocal"),t("acctNote").textContent=S?s("worlds.acctNote",{n:f.length}):""}async function M(){const a=await ua();if(!a){d(s("worlds.loadFail",{msg:"API unreachable"}),!0),S=!1,f=[],G(),j();return}S=!0,w=a.accountId,f=a.worlds,R=a.defaultWorldKey??ea,G(),j()}t("createForm").addEventListener("submit",a=>{a.preventDefault();const e=t("fldId").value.trim(),n=t("fldTitle").value.trim()||e,o=g==="fork"?R:g==="from"?t("fldFrom").value:void 0;if(g==="from"&&!o){d(s("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const l=await A("/api/worlds",{id:e,title:n,...o?{from:o}:{}});d(s("worlds.created",{key:l.key}));const r=document.createElement("button");r.type="button",r.className="on",r.style.marginLeft="8px",r.textContent=s("worlds.openNew",{key:l.key}),r.addEventListener("click",()=>D("hub",l.key)),t("say").appendChild(r),t("fldId").value="",t("fldTitle").value="",await M()}catch(l){d(s("worlds.createFail",{msg:l.message}),!0)}})()});let h="home",c=T(),v=!1,y=null;function b(a,e=!1){const n=t("lawsSay");n.textContent=a,n.className=e?"err":"",n.style.color=e?"#e08a8a":"#8fd6a3"}function N(){t("wtab-home").classList.toggle("on",h==="home"),t("wtab-laws").classList.toggle("on",h==="laws"),t("whome").hidden=h!=="home",t("wlaws").hidden=h!=="laws"}const K="cdWorldsLawsM6";function k(){try{sessionStorage.setItem(K,JSON.stringify({v:1,tab:h,laws:c,dirty:v,label:t("lawsLabel").value}))}catch{}}function ra(){var a;try{const e=sessionStorage.getItem(K);if(!e)return!1;const n=JSON.parse(e);if(n.v!==1||typeof((a=n.laws)==null?void 0:a.monsterCap)!="number")return!1;h=n.tab==="laws"?"laws":"home";const o=T();for(const l of C)typeof n.laws[l]=="number"&&(o[l]=n.laws[l]);return c=o,v=!!n.dirty,n.label&&(t("lawsLabel").value=n.label),!0}catch{return!1}}function E(){const a=T();t("lawsForm").innerHTML=La.map(([e,n])=>`<div class="lawgrp"><h3>${u(s(e))}</h3>${n.map(o=>{const l=la[o];return`<div class="lawrow"><code>${o}</code><span class="lbl">${u(s(`worlds.laws.f.${o}`))}</span><input data-law="${o}" type="number" value="${c[o]}" min="${l.min}" max="${l.max}" step="${l.step}" class="${c[o]!==a[o]?"chg":""}" /><span class="rng">${l.min}–${l.max}</span></div>`}).join("")}</div>`).join(""),W(),Z()}function W(){const a=t("lawsLint"),e=t("lawsSave"),n=ya(c);if(n.length)return a.innerHTML=`<div class="err">${n.map(o=>u(s("worlds.laws.rangeErr",{field:o.field,min:o.min,max:o.max}))).join(`
`)}</div>`,e.disabled=!0,!1;try{ta({},c)}catch(o){return a.innerHTML=`<div class="err">✗ ${u(o.message.slice(0,600))}</div>`,e.disabled=!0,!1}return a.innerHTML=`<div class="ok">✓ ${u(s("worlds.laws.lintOk",{n:na(c).length}))}</div>`,e.disabled=!1,!0}function Z(){const a=oa(c),e=s(a.level==="ok"?"worlds.laws.meterOk":a.level==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");t("lawsMeter").innerHTML=`<div class="meter ${a.level}"><b class="lv">${u(e)}</b>${a.notes.length?`<ul>${a.notes.map(n=>`<li>${u(s(`worlds.laws.n.${n.key}`))}</li>`).join("")}</ul>`:""}</div>`}function X(a){var l;const e=t("lawsTruth");if(!a){e.innerHTML=`<div class="live">${u(s("worlds.laws.truthEmpty"))}</div>`;return}const n=C.filter(r=>{var x;return typeof((x=a.tables.tuning)==null?void 0:x[r])=="number"}).length,o=[...Object.keys(a.tables).filter(r=>r!=="tuning"),...Object.keys(a.tables.tuning??{}).filter(r=>!C.includes(r)).map(r=>`tuning.${r}`)];e.innerHTML=`<div class="card"><b>${u(a.name)}</b><span class="id">${u(a.updatedAt)}・${n} ${u(s("worlds.laws.ovFields"))}</span><span class="id">${u(o.length?s("worlds.laws.keepNote",{list:o.join(", ")}):s("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${u(s("worlds.laws.load"))}</button></div></div>`,(l=e.querySelector('[data-act="laws-truth-load"]'))==null||l.addEventListener("click",()=>{c=q(a.tables),v=!1,E(),b(s("worlds.laws.loaded",{name:a.name})),k()})}async function $(){var a;t("lawsWorld").textContent=i.world();try{const[e,n]=await Promise.all([fetch(L("/api/tables/truth")).then(o=>o.json()),fetch(L("/api/tables/proposals")).then(o=>o.json())]);y=((a=e.docs)==null?void 0:a[0])??null,v||(c=q((y==null?void 0:y.tables)??{}),E()),X(y),ha(t("lawsProposals"),n.proposals??[],{tag:()=>s("worlds.laws.capTag"),onView:o=>{ia(o)},onPromote:o=>{pa(o)},onArchive:o=>{da(o)}})}catch{y=null,t("lawsTruth").innerHTML=`<div class="live">${u(s("worlds.laws.noApi"))}</div>`,t("lawsProposals").innerHTML=""}}async function ia(a){var e;try{const o=(e=(await(await fetch(L(`/api/tables/proposal?id=${encodeURIComponent(a)}`))).json()).docs)==null?void 0:e[0];if(!o)throw new Error("proposal is empty");c=q(o.tables),v=!0,E(),b(s("worlds.laws.loaded",{name:o.name})),k()}catch(n){b(n.message,!0)}}async function pa(a){try{await A(L("/api/tables/promote"),{proposalId:a}),b(s("tool.common.adoptedNote")),$()}catch(e){b(s("tool.common.promoteFail",{msg:e.message}),!0)}}async function da(a){try{await A(L("/api/tables/archive"),{proposalId:a}),b(s("tool.common.archived")),$()}catch(e){b(s("tool.common.archiveFail",{msg:e.message}),!0)}}async function Y(){var r;if(!W()){b(s("worlds.laws.saveNoValid"),!0);return}let a=y;try{a=((r=(await(await fetch(L("/api/tables/truth"))).json()).docs)==null?void 0:r[0])??null}catch{}let e;try{e=ta((a==null?void 0:a.tables)??{},c)}catch(x){b(x.message,!0);return}const n=na(c),o=t("lawsLabel").value.trim()||s("worlds.laws.defaultLabel",{list:n.length?n.join(", "):"—"}),l={formatVersion:ga,id:"tables",name:o,tables:e,createdAt:(a==null?void 0:a.createdAt)??sa(),updatedAt:sa()};try{await A(L("/api/tables/proposal"),{tables:l,label:o,createdBy:"user"}),b(s("worlds.laws.saved",{name:o})),$()}catch(x){b(s("tool.common.saveFail",{msg:x.message}),!0)}}t("wtab-home").addEventListener("click",()=>{h="home",N(),k()}),t("wtab-laws").addEventListener("click",()=>{h="laws",N(),k()}),t("lawsForm").addEventListener("input",a=>{const e=a.target,n=e.getAttribute("data-law");n&&(c[n]=Number(e.value),v=!0,e.classList.toggle("chg",c[n]!==T()[n]),W(),Z(),k())}),t("lawsSave").addEventListener("click",()=>{Y()}),t("lawsReset").addEventListener("click",()=>{c=T(),v=!0,E(),b(s("worlds.laws.resetDone")),k()});const ca=i.events.on("tables",()=>{$()});window.cdWorlds={reload:()=>M(),worlds:()=>f,account:()=>w,apiOk:()=>S,api:a=>L(a),open:(a,e)=>D(a,e??i.world()),tpl:a=>(a&&(g=a,I()),g),flagship:()=>R,laws:{tab:a=>{h=a,N()},draft:()=>({...c}),set:(a,e)=>{c[a]=e,v=!0,E(),k()},judge:()=>oa(c),save:()=>Y(),refresh:()=>$()}};const wa=fa(()=>{G(),j(),E(),X(y),$()}),ma=ra();return N(),I(),E(),ma&&v&&b(s("tool.common.restored")),M(),$(),{applyParams(a){const e=a.get("tab");e==="laws"?h="laws":e==="home"&&(h="home"),N()},dispose(){ca(),wa(),k(),delete window.cdWorlds}}}};export{Ha as worldsPanel};
