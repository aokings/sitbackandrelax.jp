import{p as H}from"./creator-auth-C2cecs39.js";import{c as ze,a as J,t as s,D as we,w as L,C as Fe,m as He}from"./world-ui-DzxH_Z-b.js";import{b as D,d as _,S as me,j as ue,c as be,o as Ie,l as Ae,e as Me,f as fe,g as xe,h as ge,a as ne,i as je,k as se,s as Y,L as le,m as he,P as Pe}from"./studio-DfptEijb.js";import{r as Re}from"./tool-shelf-JX5ZzxeU.js";import{T as Oe}from"./tables-doc-B9ukf2y-.js";import"./tables-BILzhIA_.js";const De=`<!-- ============================================================
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
`,w=N=>N.replace(/[&<>"]/g,v=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[v]),ve=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),_e=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],Ye={id:"worlds",async mount(N,v){N.innerHTML=De,ze(N);const r=e=>N.querySelector(`#${e}`);function x(e,a=!1){const o=r("say");o.textContent=e,o.className=a?"err":""}let V="masaru",$=[],y=!1,h="fork",K=we;function W(){for(const e of Array.from(N.querySelectorAll(".tplcard")))e.classList.toggle("on",e.dataset.tpl===h);r("fldFromLbl").hidden=h!=="from"}r("tplRow").addEventListener("click",e=>{const a=e.target.closest(".tplcard");a!=null&&a.dataset.tpl&&(h=a.dataset.tpl,W())});function X(e,a){if(a===v.world()){v.navigate(e);return}const o=v.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);o.search="",o.searchParams.set("panel",e),o.searchParams.set("world",a),window.location.href=o.toString()}function Z(){const e=r("worlds");if(e.innerHTML="",!$.length){const l=document.createElement("div");if(l.className="live",l.textContent=s("worlds.none"),e.appendChild(l),!y&&J()!==""){const n=document.createElement("a");n.className="btn on",n.target="_blank",n.rel="noopener",n.href=He(J(),"worlds"),n.textContent=`🐙 ${s("worlds.hostedCta")}`,e.appendChild(n)}if(y){const n=document.createElement("button");n.type="button",n.className="on",n.textContent=s("worlds.emptyCta"),n.addEventListener("click",()=>{r("fldId").focus();const d=r("wapp");d.scrollTo({top:d.scrollHeight,behavior:"smooth"})}),e.appendChild(n)}return}for(const l of $){const n=document.createElement("div");n.className="card";const d=document.createElement("div"),T=document.createElement("b");T.textContent=l.title,d.appendChild(T);const S=document.createElement("div");S.className="key",S.textContent=l.key;const B=document.createElement("div");B.className="tagrow";const ae=document.createElement("span");ae.className="tag"+(l.publishedAt?" pub":""),ae.textContent=l.publishedAt?s("worlds.statusPublished"):s("worlds.statusDraft"),B.appendChild(ae);const pe=l.forkedFrom;if(pe){const p=document.createElement("span");p.className="tag",p.textContent=s("worlds.forkedFrom",{world:pe}),B.appendChild(p)}n.append(d,S,B);const te=document.createElement("div");te.className="row";for(const p of Pe){if(p.id==="worlds")continue;const C=document.createElement("button");C.type="button",C.className="btn",C.textContent=`${p.icon} ${s(p.titleKey)}`,C.addEventListener("click",()=>X(p.id,l.key)),te.appendChild(C)}n.appendChild(te);const oe=document.createElement("div");oe.className="row";const M=document.createElement("button");M.type="button",M.className="on",M.textContent=s("worlds.publish"),M.addEventListener("click",()=>{(async()=>{try{const p=await H("/api/worlds/publish",{world:l.key});x(s("worlds.published",{path:p.packPath})),await I()}catch(p){x(s("worlds.publishFail",{msg:p.message}),!0)}})()});const G=document.createElement("button");G.type="button",G.textContent=s("tool.common.dup"),G.addEventListener("click",()=>{h="from",W(),r("fldFrom").value=l.key,r("fldId").focus();const p=r("wapp");p.scrollTo({top:p.scrollHeight,behavior:"smooth"})});const j=document.createElement("a");j.className="btn",j.textContent=s("worlds.play"),j.href=`dungeon.html?pack=${encodeURIComponent(`packs/${l.packName}.json`)}`,j.target="_blank";const ce=l,q=document.createElement("button");q.type="button",q.textContent=s("worlds.editMeta");const z=document.createElement("div");z.className="metaedit",z.style.display="none";const P=document.createElement("input");P.type="text",P.value=l.title,P.placeholder=s("worlds.metaTitle");const F=document.createElement("textarea");F.value=ce.description??"",F.placeholder=s("worlds.metaDesc"),F.maxLength=280,F.rows=2;const R=document.createElement("input");R.type="text",R.value=(ce.tags??[]).join(" "),R.placeholder=s("worlds.metaTags");const O=document.createElement("button");O.type="button",O.className="on",O.textContent=s("worlds.metaSave"),O.addEventListener("click",()=>{(async()=>{try{const p=R.value.trim(),C=p?p.toLowerCase().split(/[\s,]+/).filter(Boolean):null;await H("/api/worlds/meta",{world:l.key,title:P.value.trim()||void 0,description:F.value.trim()||null,tags:C}),x(s("worlds.metaSaved")),await I()}catch(p){x(p.message,!0)}})()}),z.append(P,F,R,O),q.addEventListener("click",()=>{z.style.display=z.style.display==="none"?"flex":"none"}),oe.append(M,G,j,q),n.append(oe,z),e.appendChild(n)}const a=r("fldFrom"),o=a.value;a.innerHTML="";const t=document.createElement("option");t.value="",t.textContent=s("worlds.fromEmpty"),a.appendChild(t);for(const l of $){const n=document.createElement("option");n.value=l.key,n.textContent=`${l.title}（${l.key}）`,a.appendChild(n)}[...a.options].some(l=>l.value===o)&&(a.value=o)}function Q(){r("acct").textContent=y?V:s("worlds.acctLocal"),r("acctNote").textContent=y?s("worlds.acctNote",{n:$.length}):""}async function I(){const e=await Fe();if(!e){J()!==""?x(s("worlds.hostedNeed")):x(s("worlds.loadFail",{msg:"API unreachable"}),!0),y=!1,$=[],Q(),Z();return}y=!0,V=e.accountId,$=e.worlds,K=e.defaultWorldKey??we,Q(),Z()}r("createForm").addEventListener("submit",e=>{if(e.preventDefault(),!y&&J()!==""){x(s("worlds.hostedNeed"),!0);return}const a=r("fldId").value.trim(),o=r("fldTitle").value.trim()||a,t=h==="fork"?K:h==="from"?r("fldFrom").value:void 0;if(h==="from"&&!t){x(s("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const l=await H("/api/worlds",{id:a,title:o,...t?{from:t}:{}});x(s("worlds.created",{key:l.key}));const n=document.createElement("button");n.type="button",n.className="on",n.style.marginLeft="8px",n.textContent=s("worlds.openNew",{key:l.key}),n.addEventListener("click",()=>X("hub",l.key)),r("say").appendChild(n),r("fldId").value="",r("fldTitle").value="",await I()}catch(l){x(s("worlds.createFail",{msg:l.message}),!0)}})()});let u="home",c=D(),i=_(),b=!1,f=null;function m(e,a=!1){const o=r("lawsSay");o.textContent=e,o.className=a?"err":"",o.style.color=a?"#e08a8a":"#8fd6a3"}function A(){r("wtab-home").classList.toggle("on",u==="home"),r("wtab-laws").classList.toggle("on",u==="laws"),r("whome").hidden=u!=="home",r("wlaws").hidden=u!=="laws"}const re="cdWorldsLawsM6";function g(){try{sessionStorage.setItem(re,JSON.stringify({v:2,tab:u,laws:c,sys:i,dirty:b,label:r("lawsLabel").value}))}catch{}}function ye(){var e,a;try{const o=sessionStorage.getItem(re);if(!o)return!1;const t=JSON.parse(o);if(t.v!==1&&t.v!==2||typeof((e=t.laws)==null?void 0:e.monsterCap)!="number")return!1;u=t.tab==="laws"?"laws":"home";const l=D();for(const d of le)typeof t.laws[d]=="number"&&(l[d]=t.laws[d]);c=l;const n=_();for(const[,d]of he)for(const T of d){const S=(a=t.sys)==null?void 0:a[T];S!=null&&typeof S==typeof n[T]&&(n[T]=S)}return i=n,b=!!t.dirty,t.label&&(r("lawsLabel").value=t.label),!0}catch{return!1}}function k(){const e=D();r("lawsForm").innerHTML=_e.map(([a,o])=>`<div class="lawgrp"><h3>${w(s(a))}</h3>${o.map(t=>{const l=je[t];return`<div class="lawrow"><code>${t}</code><span class="lbl">${w(s(`worlds.laws.f.${t}`))}</span><input data-law="${t}" type="number" value="${c[t]}" min="${l.min}" max="${l.max}" step="${l.step}" class="${c[t]!==e[t]?"chg":""}" /><span class="rng">${l.min}–${l.max}</span></div>`}).join("")}</div>`).join(""),Le(),U(),ee()}function ke(e){const a=me[e],o=i[e]!==_()[e],t=`<code>${e}</code><span class="lbl">${w(s(`worlds.laws.sys.f.${e}`))}</span>`;if(a.kind==="toggle")return`<div class="lawrow${o?" chg":""}">${t}<input data-sys="${e}" type="checkbox"${i[e]?" checked":""} /></div>`;if(a.kind==="enum"){const l=(a.options??[]).map(n=>`<option value="${n}"${i[e]===n?" selected":""}>${w(s(`worlds.laws.sys.opt.${e}.${n}`))}</option>`).join("");return`<div class="lawrow${o?" chg":""}">${t}<select data-sys="${e}" class="${o?"chg":""}">${l}</select></div>`}return`<div class="lawrow">${t}<input data-sys="${e}" type="number" value="${i[e]}" min="${a.min}" max="${a.max}" step="${a.step}" class="${o?"chg":""}" /><span class="rng">${a.min}–${a.max}</span></div>`}function Le(){r("sysForm").innerHTML=he.map(([e,a])=>`<div class="lawgrp"><h3>${w(s(`worlds.laws.sys.g.${e}`))}</h3>${a.map(ke).join("")}</div>`).join("")}function U(){const e=r("lawsLint"),a=r("lawsSave"),o=[...Ae(c),...Me(i)];if(o.length)return e.innerHTML=`<div class="err">${o.map(t=>w(s("worlds.laws.rangeErr",{field:t.field,min:t.min,max:t.max}))).join(`
`)}</div>`,a.disabled=!0,!1;try{fe(xe({},c),i)}catch(t){return e.innerHTML=`<div class="err">✗ ${w(t.message.slice(0,600))}</div>`,a.disabled=!0,!1}return e.innerHTML=`<div class="ok">✓ ${w(s("worlds.laws.lintOk",{n:ge(c).length+ne(i).length}))}</div>`,a.disabled=!1,!0}function ee(){const e=be(c),a=ue(i),o=[...e.notes,...a.notes],t=o.some(n=>n.level==="warn")?"warn":o.length?"note":"ok",l=s(t==="ok"?"worlds.laws.meterOk":t==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");r("lawsMeter").innerHTML=`<div class="meter ${t}"><b class="lv">${w(l)}</b>${o.length?`<ul>${o.map(n=>`<li>${w(s(`worlds.laws.n.${n.key}`))}</li>`).join("")}</ul>`:""}</div>`}function de(e){var l;const a=r("lawsTruth");if(!e){a.innerHTML=`<div class="live">${w(s("worlds.laws.truthEmpty"))}</div>`;return}const o=le.filter(n=>{var d;return typeof((d=e.tables.tuning)==null?void 0:d[n])=="number"}).length+(e.tables.systems?ne(Y(e.tables)).length:0),t=[...Object.keys(e.tables).filter(n=>n!=="tuning"&&n!=="systems"),...Object.keys(e.tables.tuning??{}).filter(n=>!le.includes(n)).map(n=>`tuning.${n}`)];a.innerHTML=`<div class="card"><b>${w(e.name)}</b><span class="id">${w(e.updatedAt)}・${o} ${w(s("worlds.laws.ovFields"))}</span><span class="id">${w(t.length?s("worlds.laws.keepNote",{list:t.join(", ")}):s("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${w(s("worlds.laws.load"))}</button></div></div>`,(l=a.querySelector('[data-act="laws-truth-load"]'))==null||l.addEventListener("click",()=>{c=se(e.tables),i=Y(e.tables),b=!1,k(),m(s("worlds.laws.loaded",{name:e.name})),g()})}async function E(){var e;r("lawsWorld").textContent=v.world();try{const[a,o]=await Promise.all([fetch(L("/api/tables/truth")).then(t=>t.json()),fetch(L("/api/tables/proposals")).then(t=>t.json())]);f=((e=a.docs)==null?void 0:e[0])??null,b||(c=se((f==null?void 0:f.tables)??{}),i=Y((f==null?void 0:f.tables)??{}),k()),de(f),Re(r("lawsProposals"),o.proposals??[],{tag:()=>s("worlds.laws.capTag"),onView:t=>{$e(t)},onPromote:t=>{Ee(t)},onArchive:t=>{Se(t)}})}catch{f=null,r("lawsTruth").innerHTML=`<div class="live">${w(s("worlds.laws.noApi"))}</div>`,r("lawsProposals").innerHTML=""}}async function $e(e){var a;try{const t=(a=(await(await fetch(L(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json()).docs)==null?void 0:a[0];if(!t)throw new Error("proposal is empty");c=se(t.tables),i=Y(t.tables),b=!0,k(),m(s("worlds.laws.loaded",{name:t.name})),g()}catch(o){m(o.message,!0)}}async function Ee(e){try{await H(L("/api/tables/promote"),{proposalId:e}),m(s("tool.common.adoptedNote")),E()}catch(a){m(s("tool.common.promoteFail",{msg:a.message}),!0)}}async function Se(e){try{await H(L("/api/tables/archive"),{proposalId:e}),m(s("tool.common.archived")),E()}catch(a){m(s("tool.common.archiveFail",{msg:a.message}),!0)}}async function ie(){var n;if(!U()){m(s("worlds.laws.saveNoValid"),!0);return}let e=f;try{e=((n=(await(await fetch(L("/api/tables/truth"))).json()).docs)==null?void 0:n[0])??null}catch{}let a;try{a=fe(xe((e==null?void 0:e.tables)??{},c),i)}catch(d){m(d.message,!0);return}const o=[...ge(c),...ne(i)],t=r("lawsLabel").value.trim()||s("worlds.laws.defaultLabel",{list:o.length?o.join(", "):"—"}),l={formatVersion:Oe,id:"tables",name:t,tables:a,createdAt:(e==null?void 0:e.createdAt)??ve(),updatedAt:ve()};try{await H(L("/api/tables/proposal"),{tables:l,label:t,createdBy:"user"}),m(s("worlds.laws.saved",{name:t})),E()}catch(d){m(s("tool.common.saveFail",{msg:d.message}),!0)}}r("wtab-home").addEventListener("click",()=>{u="home",A(),g()}),r("wtab-laws").addEventListener("click",()=>{u="laws",A(),g()}),r("lawsForm").addEventListener("input",e=>{const a=e.target,o=a.getAttribute("data-law");o&&(c[o]=Number(a.value),b=!0,a.classList.toggle("chg",c[o]!==D()[o]),U(),ee(),g())}),r("sysForm").addEventListener("input",e=>{var d;const a=e.target,o=a.getAttribute("data-sys");if(!o)return;const t=me[o],l=i;t.kind==="toggle"?l[o]=a.checked:t.kind==="enum"?l[o]=a.value:l[o]=Number(a.value),b=!0;const n=i[o]!==_()[o];t.kind!=="toggle"&&a.classList.toggle("chg",n),(d=a.closest(".lawrow"))==null||d.classList.toggle("chg",n),U(),ee(),g()}),r("lawsSave").addEventListener("click",()=>{ie()}),r("lawsReset").addEventListener("click",()=>{c=D(),i=_(),b=!0,k(),m(s("worlds.laws.resetDone")),g()});const Ce=v.events.on("tables",()=>{E()});window.cdWorlds={reload:()=>I(),worlds:()=>$,account:()=>V,apiOk:()=>y,api:e=>L(e),open:(e,a)=>X(e,a??v.world()),tpl:e=>(e&&(h=e,W()),h),flagship:()=>K,laws:{tab:e=>{u=e,A()},draft:()=>({...c}),set:(e,a)=>{c[e]=a,b=!0,k(),g()},judge:()=>be(c),sysDraft:()=>({...i}),setSys:(e,a)=>{i[e]=a,b=!0,k(),g()},judgeSys:()=>ue(i),save:()=>ie(),refresh:()=>E()}};const Ne=Ie(()=>{Q(),Z(),k(),de(f),E()}),Te=ye();return A(),W(),k(),Te&&b&&m(s("tool.common.restored")),I(),E(),{applyParams(e){const a=e.get("tab");a==="laws"?u="laws":a==="home"&&(u="home"),A()},dispose(){Ce(),Ne(),g(),delete window.cdWorlds}}}};export{Ye as worldsPanel};
