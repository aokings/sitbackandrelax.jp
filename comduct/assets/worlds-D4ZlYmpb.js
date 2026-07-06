import{p as R}from"./creator-auth-C2cecs39.js";import{c as Pe,a as U,t as o,D as he,w as S,O as Oe,m as De}from"./world-ui-Drw-P3-v.js";import{b as B,d as G,S as ve,j as ye,c as ke,o as _e,l as We,e as Ue,f as Le,g as $e,h as Ee,a as ce,i as Be,k as we,s as Q,L as me,m as Se,P as Ge}from"./studio-Ce1A7dWJ.js";import{r as qe}from"./tool-shelf-ByNVi0cI.js";import{T as Je}from"./tables-doc-DTmThUeo.js";import"./tables-CCFYefBy.js";const Ye=`<!-- ============================================================
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
  /* §portal B②③：掲載情報の編集（名前/説明/タグ）＝id 不変・表示だけ */
  #wapp .metaedit { flex-direction: column; gap: 6px; margin-top: 8px; padding: 8px; background: #141926; border: 1px solid #262e40; border-radius: 8px; }
  #wapp .metaedit input, #wapp .metaedit textarea { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 6px 8px; font: inherit; font-size: 12px; width: 100%; box-sizing: border-box; }
  #wapp .metaedit .coverpick { display: flex; gap: 6px; }
  #wapp .metaedit .coverpick select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 6px 8px; font: inherit; font-size: 12px; flex: 0 0 auto; }
  #wapp .metaedit .coverpick input { flex: 1; }
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
  /* §E8 systems ダイヤル（gate#5）：トグル/選択肢の行（数値行は .lawrow input を共用） */
  #wapp .lawrow select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 4px 7px; font: inherit; font-size: 12px; }
  #wapp .lawrow select.chg { border-color: #ffb347; box-shadow: 0 0 0 1px rgba(255, 179, 71, 0.35) inset; }
  #wapp .lawrow input[type="checkbox"] { width: auto; accent-color: #47639c; transform: scale(1.2); cursor: pointer; }
  #wapp .lawrow.chg code { color: #ffb347; } /* トグル既定差＝code 側で点灯（checkbox は枠が描けない） */
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
       ・保存＝truth を read → 掟＋systems キーだけ patch → 全文 propose（tuner の編集を踏まない粒度）→ ⭐2段。
       ・E8 の systems ダイヤル（空腹/死/XP 共有/蘇生/帰還）＝★確認ゲート#5 開通済（gate5）＝実 dial
         （tables.systems・欄なし＝現行バイト同値・語彙は laws-core SYS_GROUPS/SYS_FIELDS）。
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
        <h2 data-i18n="worlds.laws.sysHead">🎚 systems ダイヤル（世界のルール＝空腹・死・経験値・蘇生・帰還）</h2>
        <div class="sub" data-i18n="worlds.laws.sysIntro">engine が既に持つ系の on/off と率だけを振る（新しい機構は増えない・同じ seed なら同じ結果）。何も変えなければ truth に systems 欄は書かれない＝現行とバイト同一。</div>
        <div id="sysForm"></div>
        <div id="lawsLint"></div>
        <h2 data-i18n="worlds.laws.meterHead">🧭 北極星メーター（探索・生きて帰る）</h2>
        <div id="lawsMeter"></div>
        <h2 data-i18n="worlds.laws.constHead">🔒 固定の掟（engine の憲法＝表示のみ）</h2>
        <ul class="constlist">
          <li data-i18n="worlds.laws.c.party">👥 パーティ人数上限：6（hero＋5＝3人組×2・北極星の上限）</li>
          <li data-i18n="worlds.laws.c.core">🧊 不変の芯：lockstep・決定論 seed・トルネコ式地図・命令が探索を駆動</li>
        </ul>
        <div class="sub" data-i18n="worlds.laws.constNote">ここはダイヤルにしない（Mod 境界＝ルールは engine 固定・DESIGN-maker §E8）。空腹・死・経験値・蘇生・帰還は ★確認ゲート#5 開通で上の systems ダイヤルへ昇格済み。</div>
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
`,m=F=>F.replace(/[&<>"]/g,L=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[L]),Ce=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Ke=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],at={id:"worlds",async mount(F,L){F.innerHTML=Ye,Pe(F);const s=e=>F.querySelector(`#${e}`);function b(e,t=!1){const n=s("say");n.textContent=e,n.className=t?"err":""}let ee="masaru",C=[],$=!1,y="fork",te=he;function q(){for(const e of Array.from(F.querySelectorAll(".tplcard")))e.classList.toggle("on",e.dataset.tpl===y);s("fldFromLbl").hidden=y!=="from"}s("tplRow").addEventListener("click",e=>{const t=e.target.closest(".tplcard");t!=null&&t.dataset.tpl&&(y=t.dataset.tpl,q())});function ae(e,t){if(t===L.world()){L.navigate(e);return}const n=L.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);n.search="",n.searchParams.set("panel",e),n.searchParams.set("world",t),window.location.href=n.toString()}function oe(){var d,r;const e=s("worlds");if(e.innerHTML="",!C.length){const l=document.createElement("div");if(l.className="live",l.textContent=o("worlds.none"),e.appendChild(l),!$&&U()!==""){const p=document.createElement("a");p.className="btn on",p.target="_blank",p.rel="noopener",p.href=De(U(),"worlds"),p.textContent=`🐙 ${o("worlds.hostedCta")}`,e.appendChild(p)}if($){const p=document.createElement("button");p.type="button",p.className="on",p.textContent=o("worlds.emptyCta"),p.addEventListener("click",()=>{s("fldId").focus();const k=s("wapp");k.scrollTo({top:k.scrollHeight,behavior:"smooth"})}),e.appendChild(p)}return}for(const l of C){const p=document.createElement("div");p.className="card";const k=document.createElement("div"),xe=document.createElement("b");xe.textContent=l.title,k.appendChild(xe);const le=document.createElement("div");le.className="key",le.textContent=l.key;const Y=document.createElement("div");Y.className="tagrow";const re=document.createElement("span");re.className="tag"+(l.publishedAt?" pub":""),re.textContent=l.publishedAt?o("worlds.statusPublished"):o("worlds.statusDraft"),Y.appendChild(re);const ge=l.forkedFrom;if(ge){const i=document.createElement("span");i.className="tag",i.textContent=o("worlds.forkedFrom",{world:ge}),Y.appendChild(i)}p.append(k,le,Y);const de=document.createElement("div");de.className="row";for(const i of Ge){if(i.id==="worlds")continue;const u=document.createElement("button");u.type="button",u.className="btn",u.textContent=`${i.icon} ${o(i.titleKey)}`,u.addEventListener("click",()=>ae(i.id,l.key)),de.appendChild(u)}p.appendChild(de);const ie=document.createElement("div");ie.className="row";const M=document.createElement("button");M.type="button",M.className="on",M.textContent=o("worlds.publish"),M.addEventListener("click",()=>{(async()=>{try{const i=await R("/api/worlds/publish",{world:l.key});b(o("worlds.published",{path:i.packPath})),await j()}catch(i){b(o("worlds.publishFail",{msg:i.message}),!0)}})()});const K=document.createElement("button");K.type="button",K.textContent=o("tool.common.dup"),K.addEventListener("click",()=>{y="from",q(),s("fldFrom").value=l.key,s("fldId").focus();const i=s("wapp");i.scrollTo({top:i.scrollHeight,behavior:"smooth"})});const P=document.createElement("a");P.className="btn",P.textContent=o("worlds.play"),P.href=`dungeon.html?pack=${encodeURIComponent(`packs/${l.packName}.json`)}`,P.target="_blank";const V=l,X=document.createElement("button");X.type="button",X.textContent=o("worlds.editMeta");const z=document.createElement("div");z.className="metaedit",z.style.display="none";const O=document.createElement("input");O.type="text",O.value=l.title,O.placeholder=o("worlds.metaTitle");const I=document.createElement("textarea");I.value=V.description??"",I.placeholder=o("worlds.metaDesc"),I.maxLength=280,I.rows=2;const D=document.createElement("input");D.type="text",D.value=(V.tags??[]).join(" "),D.placeholder=o("worlds.metaTags");const pe=document.createElement("div");pe.className="coverpick";const Z=document.createElement("select");for(const i of["prefab","monster","model"]){const u=document.createElement("option");u.value=i,u.textContent=o(`worlds.cover.${i}`),Z.appendChild(u)}Z.value=((d=V.cover)==null?void 0:d.kind)??"prefab";const _=document.createElement("input");_.type="text",_.value=((r=V.cover)==null?void 0:r.id)??"",_.placeholder=o("worlds.metaCover"),pe.append(Z,_);const W=document.createElement("button");W.type="button",W.className="on",W.textContent=o("worlds.metaSave"),W.addEventListener("click",()=>{(async()=>{try{const i=D.value.trim(),u=i?i.toLowerCase().split(/[\s,]+/).filter(Boolean):null,T=_.value.trim(),Me=T?{kind:Z.value,id:T}:null;await R("/api/worlds/meta",{world:l.key,title:O.value.trim()||void 0,description:I.value.trim()||null,tags:u,cover:Me}),b(o("worlds.metaSaved")),await j()}catch(i){b(i.message,!0)}})()}),z.append(O,I,D,pe,W),X.addEventListener("click",()=>{z.style.display=z.style.display==="none"?"flex":"none"});const H=document.createElement("button");H.type="button",H.textContent=o("worlds.playtest"),H.addEventListener("click",()=>{(async()=>{H.disabled=!0,b(o("worlds.playtestRun"));try{const i=(()=>{try{return localStorage.getItem("comduct-creator-token")}catch{return null}})(),u=await fetch(`${U()}/api/worlds/playtest?world=${encodeURIComponent(l.key)}&seeds=8&turns=200`,i?{headers:{authorization:`Bearer ${i}`}}:void 0);if(!u.ok){b(o("worlds.playtestFail",{code:String(u.status)}),!0);return}const T=(await u.json()).aggregate;b(o("worlds.playtestResult",{surv:(T.survivalRate*100).toFixed(0),depth:T.meanDepth.toFixed(1),turns:T.meanTurns.toFixed(0),hp:T.meanHeroHp.toFixed(1)}))}catch(i){b(i.message,!0)}finally{H.disabled=!1}})()}),ie.append(M,K,P,X,H),p.append(ie,z),e.appendChild(p)}const t=s("fldFrom"),n=t.value;t.innerHTML="";const a=document.createElement("option");a.value="",a.textContent=o("worlds.fromEmpty"),t.appendChild(a);for(const l of C){const p=document.createElement("option");p.value=l.key,p.textContent=`${l.title}（${l.key}）`,t.appendChild(p)}[...t.options].some(l=>l.value===n)&&(t.value=n)}function ne(){s("acct").textContent=$?ee:o("worlds.acctLocal"),s("acctNote").textContent=$?o("worlds.acctNote",{n:C.length}):""}async function j(){const e=await Oe();if(!e){U()!==""?b(o("worlds.hostedNeed")):b(o("worlds.loadFail",{msg:"API unreachable"}),!0),$=!1,C=[],ne(),oe();return}$=!0,ee=e.accountId,C=e.worlds,te=e.defaultWorldKey??he,ne(),oe()}s("createForm").addEventListener("submit",e=>{if(e.preventDefault(),!$&&U()!==""){b(o("worlds.hostedNeed"),!0);return}const t=s("fldId").value.trim(),n=s("fldTitle").value.trim()||t,a=y==="fork"?te:y==="from"?s("fldFrom").value:void 0;if(y==="from"&&!a){b(o("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const d=await R("/api/worlds",{id:t,title:n,...a?{from:a}:{}});b(o("worlds.created",{key:d.key}));const r=document.createElement("button");r.type="button",r.className="on",r.style.marginLeft="8px",r.textContent=o("worlds.openNew",{key:d.key}),r.addEventListener("click",()=>ae("hub",d.key)),s("say").appendChild(r),s("fldId").value="",s("fldTitle").value="",await j()}catch(d){b(o("worlds.createFail",{msg:d.message}),!0)}})()});let x="home",w=B(),c=G(),g=!1,h=null;function f(e,t=!1){const n=s("lawsSay");n.textContent=e,n.className=t?"err":"",n.style.color=t?"#e08a8a":"#8fd6a3"}function A(){s("wtab-home").classList.toggle("on",x==="home"),s("wtab-laws").classList.toggle("on",x==="laws"),s("whome").hidden=x!=="home",s("wlaws").hidden=x!=="laws"}const ue="cdWorldsLawsM6";function v(){try{sessionStorage.setItem(ue,JSON.stringify({v:2,tab:x,laws:w,sys:c,dirty:g,label:s("lawsLabel").value}))}catch{}}function Ne(){var e,t;try{const n=sessionStorage.getItem(ue);if(!n)return!1;const a=JSON.parse(n);if(a.v!==1&&a.v!==2||typeof((e=a.laws)==null?void 0:e.monsterCap)!="number")return!1;x=a.tab==="laws"?"laws":"home";const d=B();for(const l of me)typeof a.laws[l]=="number"&&(d[l]=a.laws[l]);w=d;const r=G();for(const[,l]of Se)for(const p of l){const k=(t=a.sys)==null?void 0:t[p];k!=null&&typeof k==typeof r[p]&&(r[p]=k)}return c=r,g=!!a.dirty,a.label&&(s("lawsLabel").value=a.label),!0}catch{return!1}}function E(){const e=B();s("lawsForm").innerHTML=Ke.map(([t,n])=>`<div class="lawgrp"><h3>${m(o(t))}</h3>${n.map(a=>{const d=Be[a];return`<div class="lawrow"><code>${a}</code><span class="lbl">${m(o(`worlds.laws.f.${a}`))}</span><input data-law="${a}" type="number" value="${w[a]}" min="${d.min}" max="${d.max}" step="${d.step}" class="${w[a]!==e[a]?"chg":""}" /><span class="rng">${d.min}–${d.max}</span></div>`}).join("")}</div>`).join(""),Fe(),J(),se()}function Te(e){const t=ve[e],n=c[e]!==G()[e],a=`<code>${e}</code><span class="lbl">${m(o(`worlds.laws.sys.f.${e}`))}</span>`;if(t.kind==="toggle")return`<div class="lawrow${n?" chg":""}">${a}<input data-sys="${e}" type="checkbox"${c[e]?" checked":""} /></div>`;if(t.kind==="enum"){const d=(t.options??[]).map(r=>`<option value="${r}"${c[e]===r?" selected":""}>${m(o(`worlds.laws.sys.opt.${e}.${r}`))}</option>`).join("");return`<div class="lawrow${n?" chg":""}">${a}<select data-sys="${e}" class="${n?"chg":""}">${d}</select></div>`}return`<div class="lawrow">${a}<input data-sys="${e}" type="number" value="${c[e]}" min="${t.min}" max="${t.max}" step="${t.step}" class="${n?"chg":""}" /><span class="rng">${t.min}–${t.max}</span></div>`}function Fe(){s("sysForm").innerHTML=Se.map(([e,t])=>`<div class="lawgrp"><h3>${m(o(`worlds.laws.sys.g.${e}`))}</h3>${t.map(Te).join("")}</div>`).join("")}function J(){const e=s("lawsLint"),t=s("lawsSave"),n=[...We(w),...Ue(c)];if(n.length)return e.innerHTML=`<div class="err">${n.map(a=>m(o("worlds.laws.rangeErr",{field:a.field,min:a.min,max:a.max}))).join(`
`)}</div>`,t.disabled=!0,!1;try{Le($e({},w),c)}catch(a){return e.innerHTML=`<div class="err">✗ ${m(a.message.slice(0,600))}</div>`,t.disabled=!0,!1}return e.innerHTML=`<div class="ok">✓ ${m(o("worlds.laws.lintOk",{n:Ee(w).length+ce(c).length}))}</div>`,t.disabled=!1,!0}function se(){const e=ke(w),t=ye(c),n=[...e.notes,...t.notes],a=n.some(r=>r.level==="warn")?"warn":n.length?"note":"ok",d=o(a==="ok"?"worlds.laws.meterOk":a==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");s("lawsMeter").innerHTML=`<div class="meter ${a}"><b class="lv">${m(d)}</b>${n.length?`<ul>${n.map(r=>`<li>${m(o(`worlds.laws.n.${r.key}`))}</li>`).join("")}</ul>`:""}</div>`}function be(e){var d;const t=s("lawsTruth");if(!e){t.innerHTML=`<div class="live">${m(o("worlds.laws.truthEmpty"))}</div>`;return}const n=me.filter(r=>{var l;return typeof((l=e.tables.tuning)==null?void 0:l[r])=="number"}).length+(e.tables.systems?ce(Q(e.tables)).length:0),a=[...Object.keys(e.tables).filter(r=>r!=="tuning"&&r!=="systems"),...Object.keys(e.tables.tuning??{}).filter(r=>!me.includes(r)).map(r=>`tuning.${r}`)];t.innerHTML=`<div class="card"><b>${m(e.name)}</b><span class="id">${m(e.updatedAt)}・${n} ${m(o("worlds.laws.ovFields"))}</span><span class="id">${m(a.length?o("worlds.laws.keepNote",{list:a.join(", ")}):o("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${m(o("worlds.laws.load"))}</button></div></div>`,(d=t.querySelector('[data-act="laws-truth-load"]'))==null||d.addEventListener("click",()=>{w=we(e.tables),c=Q(e.tables),g=!1,E(),f(o("worlds.laws.loaded",{name:e.name})),v()})}async function N(){var e;s("lawsWorld").textContent=L.world();try{const[t,n]=await Promise.all([fetch(S("/api/tables/truth")).then(a=>a.json()),fetch(S("/api/tables/proposals")).then(a=>a.json())]);h=((e=t.docs)==null?void 0:e[0])??null,g||(w=we((h==null?void 0:h.tables)??{}),c=Q((h==null?void 0:h.tables)??{}),E()),be(h),qe(s("lawsProposals"),n.proposals??[],{tag:()=>o("worlds.laws.capTag"),onView:a=>{ze(a)},onPromote:a=>{Ie(a)},onArchive:a=>{He(a)}})}catch{h=null,s("lawsTruth").innerHTML=`<div class="live">${m(o("worlds.laws.noApi"))}</div>`,s("lawsProposals").innerHTML=""}}async function ze(e){var t;try{const a=(t=(await(await fetch(S(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json()).docs)==null?void 0:t[0];if(!a)throw new Error("proposal is empty");w=we(a.tables),c=Q(a.tables),g=!0,E(),f(o("worlds.laws.loaded",{name:a.name})),v()}catch(n){f(n.message,!0)}}async function Ie(e){try{await R(S("/api/tables/promote"),{proposalId:e}),f(o("tool.common.adoptedNote")),N()}catch(t){f(o("tool.common.promoteFail",{msg:t.message}),!0)}}async function He(e){try{await R(S("/api/tables/archive"),{proposalId:e}),f(o("tool.common.archived")),N()}catch(t){f(o("tool.common.archiveFail",{msg:t.message}),!0)}}async function fe(){var r;if(!J()){f(o("worlds.laws.saveNoValid"),!0);return}let e=h;try{e=((r=(await(await fetch(S("/api/tables/truth"))).json()).docs)==null?void 0:r[0])??null}catch{}let t;try{t=Le($e((e==null?void 0:e.tables)??{},w),c)}catch(l){f(l.message,!0);return}const n=[...Ee(w),...ce(c)],a=s("lawsLabel").value.trim()||o("worlds.laws.defaultLabel",{list:n.length?n.join(", "):"—"}),d={formatVersion:Je,id:"tables",name:a,tables:t,createdAt:(e==null?void 0:e.createdAt)??Ce(),updatedAt:Ce()};try{await R(S("/api/tables/proposal"),{tables:d,label:a,createdBy:"user"}),f(o("worlds.laws.saved",{name:a})),N()}catch(l){f(o("tool.common.saveFail",{msg:l.message}),!0)}}s("wtab-home").addEventListener("click",()=>{x="home",A(),v()}),s("wtab-laws").addEventListener("click",()=>{x="laws",A(),v()}),s("lawsForm").addEventListener("input",e=>{const t=e.target,n=t.getAttribute("data-law");n&&(w[n]=Number(t.value),g=!0,t.classList.toggle("chg",w[n]!==B()[n]),J(),se(),v())}),s("sysForm").addEventListener("input",e=>{var l;const t=e.target,n=t.getAttribute("data-sys");if(!n)return;const a=ve[n],d=c;a.kind==="toggle"?d[n]=t.checked:a.kind==="enum"?d[n]=t.value:d[n]=Number(t.value),g=!0;const r=c[n]!==G()[n];a.kind!=="toggle"&&t.classList.toggle("chg",r),(l=t.closest(".lawrow"))==null||l.classList.toggle("chg",r),J(),se(),v()}),s("lawsSave").addEventListener("click",()=>{fe()}),s("lawsReset").addEventListener("click",()=>{w=B(),c=G(),g=!0,E(),f(o("worlds.laws.resetDone")),v()});const Re=L.events.on("tables",()=>{N()});window.cdWorlds={reload:()=>j(),worlds:()=>C,account:()=>ee,apiOk:()=>$,api:e=>S(e),open:(e,t)=>ae(e,t??L.world()),tpl:e=>(e&&(y=e,q()),y),flagship:()=>te,laws:{tab:e=>{x=e,A()},draft:()=>({...w}),set:(e,t)=>{w[e]=t,g=!0,E(),v()},judge:()=>ke(w),sysDraft:()=>({...c}),setSys:(e,t)=>{c[e]=t,g=!0,E(),v()},judgeSys:()=>ye(c),save:()=>fe(),refresh:()=>N()}};const je=_e(()=>{ne(),oe(),E(),be(h),N()}),Ae=Ne();return A(),q(),E(),Ae&&g&&f(o("tool.common.restored")),j(),N(),{applyParams(e){const t=e.get("tab");t==="laws"?x="laws":t==="home"&&(x="home"),A()},dispose(){Re(),je(),v(),delete window.cdWorlds}}}};export{at as worldsPanel};
