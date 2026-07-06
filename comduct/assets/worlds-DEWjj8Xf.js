import{p as I}from"./creator-auth-C2cecs39.js";import{c as Pe,a as V,t as o,D as ge,w as S,O as Re,m as Oe}from"./world-ui-DmjeswZc.js";import{b as _,d as W,S as he,j as ve,c as ye,o as De,l as _e,e as We,f as ke,g as Le,h as $e,a as ie,i as Ue,k as pe,s as X,L as ce,m as Ee,P as Be}from"./studio-DBr6xnAi.js";import{r as Ge}from"./tool-shelf-DjynJPWI.js";import{T as qe}from"./tables-doc-D6JnG-CB.js";import"./tables-B9mSqZiQ.js";const Je=`<!-- ============================================================
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
`,m=T=>T.replace(/[&<>"]/g,L=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[L]),Se=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Ye=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],aa={id:"worlds",async mount(T,L){T.innerHTML=Je,Pe(T);const s=e=>T.querySelector(`#${e}`);function h(e,a=!1){const n=s("say");n.textContent=e,n.className=a?"err":""}let Z="masaru",C=[],$=!1,y="fork",Q=ge;function U(){for(const e of Array.from(T.querySelectorAll(".tplcard")))e.classList.toggle("on",e.dataset.tpl===y);s("fldFromLbl").hidden=y!=="from"}s("tplRow").addEventListener("click",e=>{const a=e.target.closest(".tplcard");a!=null&&a.dataset.tpl&&(y=a.dataset.tpl,U())});function ee(e,a){if(a===L.world()){L.navigate(e);return}const n=L.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);n.search="",n.searchParams.set("panel",e),n.searchParams.set("world",a),window.location.href=n.toString()}function ae(){var d,r;const e=s("worlds");if(e.innerHTML="",!C.length){const l=document.createElement("div");if(l.className="live",l.textContent=o("worlds.none"),e.appendChild(l),!$&&V()!==""){const i=document.createElement("a");i.className="btn on",i.target="_blank",i.rel="noopener",i.href=Oe(V(),"worlds"),i.textContent=`🐙 ${o("worlds.hostedCta")}`,e.appendChild(i)}if($){const i=document.createElement("button");i.type="button",i.className="on",i.textContent=o("worlds.emptyCta"),i.addEventListener("click",()=>{s("fldId").focus();const k=s("wapp");k.scrollTo({top:k.scrollHeight,behavior:"smooth"})}),e.appendChild(i)}return}for(const l of C){const i=document.createElement("div");i.className="card";const k=document.createElement("div"),be=document.createElement("b");be.textContent=l.title,k.appendChild(be);const ne=document.createElement("div");ne.className="key",ne.textContent=l.key;const G=document.createElement("div");G.className="tagrow";const se=document.createElement("span");se.className="tag"+(l.publishedAt?" pub":""),se.textContent=l.publishedAt?o("worlds.statusPublished"):o("worlds.statusDraft"),G.appendChild(se);const fe=l.forkedFrom;if(fe){const p=document.createElement("span");p.className="tag",p.textContent=o("worlds.forkedFrom",{world:fe}),G.appendChild(p)}i.append(k,ne,G);const le=document.createElement("div");le.className="row";for(const p of Be){if(p.id==="worlds")continue;const g=document.createElement("button");g.type="button",g.className="btn",g.textContent=`${p.icon} ${o(p.titleKey)}`,g.addEventListener("click",()=>ee(p.id,l.key)),le.appendChild(g)}i.appendChild(le);const re=document.createElement("div");re.className="row";const M=document.createElement("button");M.type="button",M.className="on",M.textContent=o("worlds.publish"),M.addEventListener("click",()=>{(async()=>{try{const p=await I("/api/worlds/publish",{world:l.key});h(o("worlds.published",{path:p.packPath})),await H()}catch(p){h(o("worlds.publishFail",{msg:p.message}),!0)}})()});const q=document.createElement("button");q.type="button",q.textContent=o("tool.common.dup"),q.addEventListener("click",()=>{y="from",U(),s("fldFrom").value=l.key,s("fldId").focus();const p=s("wapp");p.scrollTo({top:p.scrollHeight,behavior:"smooth"})});const j=document.createElement("a");j.className="btn",j.textContent=o("worlds.play"),j.href=`dungeon.html?pack=${encodeURIComponent(`packs/${l.packName}.json`)}`,j.target="_blank";const J=l,Y=document.createElement("button");Y.type="button",Y.textContent=o("worlds.editMeta");const z=document.createElement("div");z.className="metaedit",z.style.display="none";const P=document.createElement("input");P.type="text",P.value=l.title,P.placeholder=o("worlds.metaTitle");const F=document.createElement("textarea");F.value=J.description??"",F.placeholder=o("worlds.metaDesc"),F.maxLength=280,F.rows=2;const R=document.createElement("input");R.type="text",R.value=(J.tags??[]).join(" "),R.placeholder=o("worlds.metaTags");const de=document.createElement("div");de.className="coverpick";const K=document.createElement("select");for(const p of["prefab","monster","model"]){const g=document.createElement("option");g.value=p,g.textContent=o(`worlds.cover.${p}`),K.appendChild(g)}K.value=((d=J.cover)==null?void 0:d.kind)??"prefab";const O=document.createElement("input");O.type="text",O.value=((r=J.cover)==null?void 0:r.id)??"",O.placeholder=o("worlds.metaCover"),de.append(K,O);const D=document.createElement("button");D.type="button",D.className="on",D.textContent=o("worlds.metaSave"),D.addEventListener("click",()=>{(async()=>{try{const p=R.value.trim(),g=p?p.toLowerCase().split(/[\s,]+/).filter(Boolean):null,xe=O.value.trim(),je=xe?{kind:K.value,id:xe}:null;await I("/api/worlds/meta",{world:l.key,title:P.value.trim()||void 0,description:F.value.trim()||null,tags:g,cover:je}),h(o("worlds.metaSaved")),await H()}catch(p){h(p.message,!0)}})()}),z.append(P,F,R,de,D),Y.addEventListener("click",()=>{z.style.display=z.style.display==="none"?"flex":"none"}),re.append(M,q,j,Y),i.append(re,z),e.appendChild(i)}const a=s("fldFrom"),n=a.value;a.innerHTML="";const t=document.createElement("option");t.value="",t.textContent=o("worlds.fromEmpty"),a.appendChild(t);for(const l of C){const i=document.createElement("option");i.value=l.key,i.textContent=`${l.title}（${l.key}）`,a.appendChild(i)}[...a.options].some(l=>l.value===n)&&(a.value=n)}function te(){s("acct").textContent=$?Z:o("worlds.acctLocal"),s("acctNote").textContent=$?o("worlds.acctNote",{n:C.length}):""}async function H(){const e=await Re();if(!e){V()!==""?h(o("worlds.hostedNeed")):h(o("worlds.loadFail",{msg:"API unreachable"}),!0),$=!1,C=[],te(),ae();return}$=!0,Z=e.accountId,C=e.worlds,Q=e.defaultWorldKey??ge,te(),ae()}s("createForm").addEventListener("submit",e=>{if(e.preventDefault(),!$&&V()!==""){h(o("worlds.hostedNeed"),!0);return}const a=s("fldId").value.trim(),n=s("fldTitle").value.trim()||a,t=y==="fork"?Q:y==="from"?s("fldFrom").value:void 0;if(y==="from"&&!t){h(o("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const d=await I("/api/worlds",{id:a,title:n,...t?{from:t}:{}});h(o("worlds.created",{key:d.key}));const r=document.createElement("button");r.type="button",r.className="on",r.style.marginLeft="8px",r.textContent=o("worlds.openNew",{key:d.key}),r.addEventListener("click",()=>ee("hub",d.key)),s("say").appendChild(r),s("fldId").value="",s("fldTitle").value="",await H()}catch(d){h(o("worlds.createFail",{msg:d.message}),!0)}})()});let b="home",w=_(),c=W(),f=!1,x=null;function u(e,a=!1){const n=s("lawsSay");n.textContent=e,n.className=a?"err":"",n.style.color=a?"#e08a8a":"#8fd6a3"}function A(){s("wtab-home").classList.toggle("on",b==="home"),s("wtab-laws").classList.toggle("on",b==="laws"),s("whome").hidden=b!=="home",s("wlaws").hidden=b!=="laws"}const we="cdWorldsLawsM6";function v(){try{sessionStorage.setItem(we,JSON.stringify({v:2,tab:b,laws:w,sys:c,dirty:f,label:s("lawsLabel").value}))}catch{}}function Ce(){var e,a;try{const n=sessionStorage.getItem(we);if(!n)return!1;const t=JSON.parse(n);if(t.v!==1&&t.v!==2||typeof((e=t.laws)==null?void 0:e.monsterCap)!="number")return!1;b=t.tab==="laws"?"laws":"home";const d=_();for(const l of ce)typeof t.laws[l]=="number"&&(d[l]=t.laws[l]);w=d;const r=W();for(const[,l]of Ee)for(const i of l){const k=(a=t.sys)==null?void 0:a[i];k!=null&&typeof k==typeof r[i]&&(r[i]=k)}return c=r,f=!!t.dirty,t.label&&(s("lawsLabel").value=t.label),!0}catch{return!1}}function E(){const e=_();s("lawsForm").innerHTML=Ye.map(([a,n])=>`<div class="lawgrp"><h3>${m(o(a))}</h3>${n.map(t=>{const d=Ue[t];return`<div class="lawrow"><code>${t}</code><span class="lbl">${m(o(`worlds.laws.f.${t}`))}</span><input data-law="${t}" type="number" value="${w[t]}" min="${d.min}" max="${d.max}" step="${d.step}" class="${w[t]!==e[t]?"chg":""}" /><span class="rng">${d.min}–${d.max}</span></div>`}).join("")}</div>`).join(""),Te(),B(),oe()}function Ne(e){const a=he[e],n=c[e]!==W()[e],t=`<code>${e}</code><span class="lbl">${m(o(`worlds.laws.sys.f.${e}`))}</span>`;if(a.kind==="toggle")return`<div class="lawrow${n?" chg":""}">${t}<input data-sys="${e}" type="checkbox"${c[e]?" checked":""} /></div>`;if(a.kind==="enum"){const d=(a.options??[]).map(r=>`<option value="${r}"${c[e]===r?" selected":""}>${m(o(`worlds.laws.sys.opt.${e}.${r}`))}</option>`).join("");return`<div class="lawrow${n?" chg":""}">${t}<select data-sys="${e}" class="${n?"chg":""}">${d}</select></div>`}return`<div class="lawrow">${t}<input data-sys="${e}" type="number" value="${c[e]}" min="${a.min}" max="${a.max}" step="${a.step}" class="${n?"chg":""}" /><span class="rng">${a.min}–${a.max}</span></div>`}function Te(){s("sysForm").innerHTML=Ee.map(([e,a])=>`<div class="lawgrp"><h3>${m(o(`worlds.laws.sys.g.${e}`))}</h3>${a.map(Ne).join("")}</div>`).join("")}function B(){const e=s("lawsLint"),a=s("lawsSave"),n=[..._e(w),...We(c)];if(n.length)return e.innerHTML=`<div class="err">${n.map(t=>m(o("worlds.laws.rangeErr",{field:t.field,min:t.min,max:t.max}))).join(`
`)}</div>`,a.disabled=!0,!1;try{ke(Le({},w),c)}catch(t){return e.innerHTML=`<div class="err">✗ ${m(t.message.slice(0,600))}</div>`,a.disabled=!0,!1}return e.innerHTML=`<div class="ok">✓ ${m(o("worlds.laws.lintOk",{n:$e(w).length+ie(c).length}))}</div>`,a.disabled=!1,!0}function oe(){const e=ye(w),a=ve(c),n=[...e.notes,...a.notes],t=n.some(r=>r.level==="warn")?"warn":n.length?"note":"ok",d=o(t==="ok"?"worlds.laws.meterOk":t==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");s("lawsMeter").innerHTML=`<div class="meter ${t}"><b class="lv">${m(d)}</b>${n.length?`<ul>${n.map(r=>`<li>${m(o(`worlds.laws.n.${r.key}`))}</li>`).join("")}</ul>`:""}</div>`}function me(e){var d;const a=s("lawsTruth");if(!e){a.innerHTML=`<div class="live">${m(o("worlds.laws.truthEmpty"))}</div>`;return}const n=ce.filter(r=>{var l;return typeof((l=e.tables.tuning)==null?void 0:l[r])=="number"}).length+(e.tables.systems?ie(X(e.tables)).length:0),t=[...Object.keys(e.tables).filter(r=>r!=="tuning"&&r!=="systems"),...Object.keys(e.tables.tuning??{}).filter(r=>!ce.includes(r)).map(r=>`tuning.${r}`)];a.innerHTML=`<div class="card"><b>${m(e.name)}</b><span class="id">${m(e.updatedAt)}・${n} ${m(o("worlds.laws.ovFields"))}</span><span class="id">${m(t.length?o("worlds.laws.keepNote",{list:t.join(", ")}):o("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${m(o("worlds.laws.load"))}</button></div></div>`,(d=a.querySelector('[data-act="laws-truth-load"]'))==null||d.addEventListener("click",()=>{w=pe(e.tables),c=X(e.tables),f=!1,E(),u(o("worlds.laws.loaded",{name:e.name})),v()})}async function N(){var e;s("lawsWorld").textContent=L.world();try{const[a,n]=await Promise.all([fetch(S("/api/tables/truth")).then(t=>t.json()),fetch(S("/api/tables/proposals")).then(t=>t.json())]);x=((e=a.docs)==null?void 0:e[0])??null,f||(w=pe((x==null?void 0:x.tables)??{}),c=X((x==null?void 0:x.tables)??{}),E()),me(x),Ge(s("lawsProposals"),n.proposals??[],{tag:()=>o("worlds.laws.capTag"),onView:t=>{ze(t)},onPromote:t=>{Fe(t)},onArchive:t=>{Ie(t)}})}catch{x=null,s("lawsTruth").innerHTML=`<div class="live">${m(o("worlds.laws.noApi"))}</div>`,s("lawsProposals").innerHTML=""}}async function ze(e){var a;try{const t=(a=(await(await fetch(S(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json()).docs)==null?void 0:a[0];if(!t)throw new Error("proposal is empty");w=pe(t.tables),c=X(t.tables),f=!0,E(),u(o("worlds.laws.loaded",{name:t.name})),v()}catch(n){u(n.message,!0)}}async function Fe(e){try{await I(S("/api/tables/promote"),{proposalId:e}),u(o("tool.common.adoptedNote")),N()}catch(a){u(o("tool.common.promoteFail",{msg:a.message}),!0)}}async function Ie(e){try{await I(S("/api/tables/archive"),{proposalId:e}),u(o("tool.common.archived")),N()}catch(a){u(o("tool.common.archiveFail",{msg:a.message}),!0)}}async function ue(){var r;if(!B()){u(o("worlds.laws.saveNoValid"),!0);return}let e=x;try{e=((r=(await(await fetch(S("/api/tables/truth"))).json()).docs)==null?void 0:r[0])??null}catch{}let a;try{a=ke(Le((e==null?void 0:e.tables)??{},w),c)}catch(l){u(l.message,!0);return}const n=[...$e(w),...ie(c)],t=s("lawsLabel").value.trim()||o("worlds.laws.defaultLabel",{list:n.length?n.join(", "):"—"}),d={formatVersion:qe,id:"tables",name:t,tables:a,createdAt:(e==null?void 0:e.createdAt)??Se(),updatedAt:Se()};try{await I(S("/api/tables/proposal"),{tables:d,label:t,createdBy:"user"}),u(o("worlds.laws.saved",{name:t})),N()}catch(l){u(o("tool.common.saveFail",{msg:l.message}),!0)}}s("wtab-home").addEventListener("click",()=>{b="home",A(),v()}),s("wtab-laws").addEventListener("click",()=>{b="laws",A(),v()}),s("lawsForm").addEventListener("input",e=>{const a=e.target,n=a.getAttribute("data-law");n&&(w[n]=Number(a.value),f=!0,a.classList.toggle("chg",w[n]!==_()[n]),B(),oe(),v())}),s("sysForm").addEventListener("input",e=>{var l;const a=e.target,n=a.getAttribute("data-sys");if(!n)return;const t=he[n],d=c;t.kind==="toggle"?d[n]=a.checked:t.kind==="enum"?d[n]=a.value:d[n]=Number(a.value),f=!0;const r=c[n]!==W()[n];t.kind!=="toggle"&&a.classList.toggle("chg",r),(l=a.closest(".lawrow"))==null||l.classList.toggle("chg",r),B(),oe(),v()}),s("lawsSave").addEventListener("click",()=>{ue()}),s("lawsReset").addEventListener("click",()=>{w=_(),c=W(),f=!0,E(),u(o("worlds.laws.resetDone")),v()});const He=L.events.on("tables",()=>{N()});window.cdWorlds={reload:()=>H(),worlds:()=>C,account:()=>Z,apiOk:()=>$,api:e=>S(e),open:(e,a)=>ee(e,a??L.world()),tpl:e=>(e&&(y=e,U()),y),flagship:()=>Q,laws:{tab:e=>{b=e,A()},draft:()=>({...w}),set:(e,a)=>{w[e]=a,f=!0,E(),v()},judge:()=>ye(w),sysDraft:()=>({...c}),setSys:(e,a)=>{c[e]=a,f=!0,E(),v()},judgeSys:()=>ve(c),save:()=>ue(),refresh:()=>N()}};const Ae=De(()=>{te(),ae(),E(),me(x),N()}),Me=Ce();return A(),U(),E(),Me&&f&&u(o("tool.common.restored")),H(),N(),{applyParams(e){const a=e.get("tab");a==="laws"?b="laws":a==="home"&&(b="home"),A()},dispose(){He(),Ae(),v(),delete window.cdWorlds}}}};export{aa as worldsPanel};
