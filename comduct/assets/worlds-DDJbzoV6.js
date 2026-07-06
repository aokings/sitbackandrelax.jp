import{p as I,D as na,w as y,f as ka}from"./creator-auth-DRvYmnWX.js";import{o as La,P as $a}from"./studio-BmA879xu.js";import{b as Sa,t as l}from"./i18n-xRoouL-_.js";import{r as Ea}from"./tool-shelf-xYtc3kfc.js";import{T as Ca}from"./tables-doc-CHdegPtO.js";import{b as A,d as M,S as sa,j as la,c as ra,l as Na,e as Ta,f as da,g as ia,h as pa,a as X,i as za,k as Z,s as W,L as Q,m as ca}from"./laws-core-lxvSDIaP.js";import"./preload-helper-Dp1pzeXC.js";import"./tables-Baw1omEy.js";import"./schemas-BBGxizon.js";const Fa=`<!-- ============================================================
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
`,c=S=>S.replace(/[&<>"]/g,h=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[h]),wa=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Ha=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],_a={id:"worlds",async mount(S,h){S.innerHTML=Fa,Sa(S);const r=a=>S.querySelector(`#${a}`);function E(a,e=!1){const o=r("say");o.textContent=a,o.className=e?"err":""}let _="masaru",k=[],C=!1,x="fork",U=na;function P(){for(const a of Array.from(S.querySelectorAll(".tplcard")))a.classList.toggle("on",a.dataset.tpl===x);r("fldFromLbl").hidden=x!=="from"}r("tplRow").addEventListener("click",a=>{const e=a.target.closest(".tplcard");e!=null&&e.dataset.tpl&&(x=e.dataset.tpl,P())});function G(a,e){if(e===h.world()){h.navigate(a);return}const o=h.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);o.search="",o.searchParams.set("panel",a),o.searchParams.set("world",e),window.location.href=o.toString()}function q(){const a=r("worlds");if(a.innerHTML="",!k.length){const s=document.createElement("div");if(s.className="live",s.textContent=l("worlds.none"),a.appendChild(s),C){const n=document.createElement("button");n.type="button",n.className="on",n.textContent=l("worlds.emptyCta"),n.addEventListener("click",()=>{r("fldId").focus();const d=r("wapp");d.scrollTo({top:d.scrollHeight,behavior:"smooth"})}),a.appendChild(n)}return}for(const s of k){const n=document.createElement("div");n.className="card";const d=document.createElement("div"),N=document.createElement("b");N.textContent=s.title,d.appendChild(N);const $=document.createElement("div");$.className="key",$.textContent=s.key;const O=document.createElement("div");O.className="tagrow";const Y=document.createElement("span");Y.className="tag"+(s.publishedAt?" pub":""),Y.textContent=s.publishedAt?l("worlds.statusPublished"):l("worlds.statusDraft"),O.appendChild(Y);const oa=s.forkedFrom;if(oa){const w=document.createElement("span");w.className="tag",w.textContent=l("worlds.forkedFrom",{world:oa}),O.appendChild(w)}n.append(d,$,O);const V=document.createElement("div");V.className="row";for(const w of $a){if(w.id==="worlds")continue;const H=document.createElement("button");H.type="button",H.className="btn",H.textContent=`${w.icon} ${l(w.titleKey)}`,H.addEventListener("click",()=>G(w.id,s.key)),V.appendChild(H)}n.appendChild(V);const K=document.createElement("div");K.className="row";const z=document.createElement("button");z.type="button",z.className="on",z.textContent=l("worlds.publish"),z.addEventListener("click",()=>{(async()=>{try{const w=await I("/api/worlds/publish",{world:s.key});E(l("worlds.published",{path:w.packPath})),await j()}catch(w){E(l("worlds.publishFail",{msg:w.message}),!0)}})()});const D=document.createElement("button");D.type="button",D.textContent=l("tool.common.dup"),D.addEventListener("click",()=>{x="from",P(),r("fldFrom").value=s.key,r("fldId").focus();const w=r("wapp");w.scrollTo({top:w.scrollHeight,behavior:"smooth"})});const F=document.createElement("a");F.className="btn",F.textContent=l("worlds.play"),F.href=`dungeon.html?pack=${encodeURIComponent(`packs/${s.packName}.json`)}`,F.target="_blank",K.append(z,D,F),n.appendChild(K),a.appendChild(n)}const e=r("fldFrom"),o=e.value;e.innerHTML="";const t=document.createElement("option");t.value="",t.textContent=l("worlds.fromEmpty"),e.appendChild(t);for(const s of k){const n=document.createElement("option");n.value=s.key,n.textContent=`${s.title}（${s.key}）`,e.appendChild(n)}[...e.options].some(s=>s.value===o)&&(e.value=o)}function B(){r("acct").textContent=C?_:l("worlds.acctLocal"),r("acctNote").textContent=C?l("worlds.acctNote",{n:k.length}):""}async function j(){const a=await ka();if(!a){E(l("worlds.loadFail",{msg:"API unreachable"}),!0),C=!1,k=[],B(),q();return}C=!0,_=a.accountId,k=a.worlds,U=a.defaultWorldKey??na,B(),q()}r("createForm").addEventListener("submit",a=>{a.preventDefault();const e=r("fldId").value.trim(),o=r("fldTitle").value.trim()||e,t=x==="fork"?U:x==="from"?r("fldFrom").value:void 0;if(x==="from"&&!t){E(l("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const s=await I("/api/worlds",{id:e,title:o,...t?{from:t}:{}});E(l("worlds.created",{key:s.key}));const n=document.createElement("button");n.type="button",n.className="on",n.style.marginLeft="8px",n.textContent=l("worlds.openNew",{key:s.key}),n.addEventListener("click",()=>G("hub",s.key)),r("say").appendChild(n),r("fldId").value="",r("fldTitle").value="",await j()}catch(s){E(l("worlds.createFail",{msg:s.message}),!0)}})()});let u="home",p=A(),i=M(),b=!1,f=null;function m(a,e=!1){const o=r("lawsSay");o.textContent=a,o.className=e?"err":"",o.style.color=e?"#e08a8a":"#8fd6a3"}function T(){r("wtab-home").classList.toggle("on",u==="home"),r("wtab-laws").classList.toggle("on",u==="laws"),r("whome").hidden=u!=="home",r("wlaws").hidden=u!=="laws"}const aa="cdWorldsLawsM6";function g(){try{sessionStorage.setItem(aa,JSON.stringify({v:2,tab:u,laws:p,sys:i,dirty:b,label:r("lawsLabel").value}))}catch{}}function ma(){var a,e;try{const o=sessionStorage.getItem(aa);if(!o)return!1;const t=JSON.parse(o);if(t.v!==1&&t.v!==2||typeof((a=t.laws)==null?void 0:a.monsterCap)!="number")return!1;u=t.tab==="laws"?"laws":"home";const s=A();for(const d of Q)typeof t.laws[d]=="number"&&(s[d]=t.laws[d]);p=s;const n=M();for(const[,d]of ca)for(const N of d){const $=(e=t.sys)==null?void 0:e[N];$!=null&&typeof $==typeof n[N]&&(n[N]=$)}return i=n,b=!!t.dirty,t.label&&(r("lawsLabel").value=t.label),!0}catch{return!1}}function v(){const a=A();r("lawsForm").innerHTML=Ha.map(([e,o])=>`<div class="lawgrp"><h3>${c(l(e))}</h3>${o.map(t=>{const s=za[t];return`<div class="lawrow"><code>${t}</code><span class="lbl">${c(l(`worlds.laws.f.${t}`))}</span><input data-law="${t}" type="number" value="${p[t]}" min="${s.min}" max="${s.max}" step="${s.step}" class="${p[t]!==a[t]?"chg":""}" /><span class="rng">${s.min}–${s.max}</span></div>`}).join("")}</div>`).join(""),ba(),R(),J()}function ua(a){const e=sa[a],o=i[a]!==M()[a],t=`<code>${a}</code><span class="lbl">${c(l(`worlds.laws.sys.f.${a}`))}</span>`;if(e.kind==="toggle")return`<div class="lawrow${o?" chg":""}">${t}<input data-sys="${a}" type="checkbox"${i[a]?" checked":""} /></div>`;if(e.kind==="enum"){const s=(e.options??[]).map(n=>`<option value="${n}"${i[a]===n?" selected":""}>${c(l(`worlds.laws.sys.opt.${a}.${n}`))}</option>`).join("");return`<div class="lawrow${o?" chg":""}">${t}<select data-sys="${a}" class="${o?"chg":""}">${s}</select></div>`}return`<div class="lawrow">${t}<input data-sys="${a}" type="number" value="${i[a]}" min="${e.min}" max="${e.max}" step="${e.step}" class="${o?"chg":""}" /><span class="rng">${e.min}–${e.max}</span></div>`}function ba(){r("sysForm").innerHTML=ca.map(([a,e])=>`<div class="lawgrp"><h3>${c(l(`worlds.laws.sys.g.${a}`))}</h3>${e.map(ua).join("")}</div>`).join("")}function R(){const a=r("lawsLint"),e=r("lawsSave"),o=[...Na(p),...Ta(i)];if(o.length)return a.innerHTML=`<div class="err">${o.map(t=>c(l("worlds.laws.rangeErr",{field:t.field,min:t.min,max:t.max}))).join(`
`)}</div>`,e.disabled=!0,!1;try{da(ia({},p),i)}catch(t){return a.innerHTML=`<div class="err">✗ ${c(t.message.slice(0,600))}</div>`,e.disabled=!0,!1}return a.innerHTML=`<div class="ok">✓ ${c(l("worlds.laws.lintOk",{n:pa(p).length+X(i).length}))}</div>`,e.disabled=!1,!0}function J(){const a=ra(p),e=la(i),o=[...a.notes,...e.notes],t=o.some(n=>n.level==="warn")?"warn":o.length?"note":"ok",s=l(t==="ok"?"worlds.laws.meterOk":t==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");r("lawsMeter").innerHTML=`<div class="meter ${t}"><b class="lv">${c(s)}</b>${o.length?`<ul>${o.map(n=>`<li>${c(l(`worlds.laws.n.${n.key}`))}</li>`).join("")}</ul>`:""}</div>`}function ea(a){var s;const e=r("lawsTruth");if(!a){e.innerHTML=`<div class="live">${c(l("worlds.laws.truthEmpty"))}</div>`;return}const o=Q.filter(n=>{var d;return typeof((d=a.tables.tuning)==null?void 0:d[n])=="number"}).length+(a.tables.systems?X(W(a.tables)).length:0),t=[...Object.keys(a.tables).filter(n=>n!=="tuning"&&n!=="systems"),...Object.keys(a.tables.tuning??{}).filter(n=>!Q.includes(n)).map(n=>`tuning.${n}`)];e.innerHTML=`<div class="card"><b>${c(a.name)}</b><span class="id">${c(a.updatedAt)}・${o} ${c(l("worlds.laws.ovFields"))}</span><span class="id">${c(t.length?l("worlds.laws.keepNote",{list:t.join(", ")}):l("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${c(l("worlds.laws.load"))}</button></div></div>`,(s=e.querySelector('[data-act="laws-truth-load"]'))==null||s.addEventListener("click",()=>{p=Z(a.tables),i=W(a.tables),b=!1,v(),m(l("worlds.laws.loaded",{name:a.name})),g()})}async function L(){var a;r("lawsWorld").textContent=h.world();try{const[e,o]=await Promise.all([fetch(y("/api/tables/truth")).then(t=>t.json()),fetch(y("/api/tables/proposals")).then(t=>t.json())]);f=((a=e.docs)==null?void 0:a[0])??null,b||(p=Z((f==null?void 0:f.tables)??{}),i=W((f==null?void 0:f.tables)??{}),v()),ea(f),Ea(r("lawsProposals"),o.proposals??[],{tag:()=>l("worlds.laws.capTag"),onView:t=>{fa(t)},onPromote:t=>{ga(t)},onArchive:t=>{xa(t)}})}catch{f=null,r("lawsTruth").innerHTML=`<div class="live">${c(l("worlds.laws.noApi"))}</div>`,r("lawsProposals").innerHTML=""}}async function fa(a){var e;try{const t=(e=(await(await fetch(y(`/api/tables/proposal?id=${encodeURIComponent(a)}`))).json()).docs)==null?void 0:e[0];if(!t)throw new Error("proposal is empty");p=Z(t.tables),i=W(t.tables),b=!0,v(),m(l("worlds.laws.loaded",{name:t.name})),g()}catch(o){m(o.message,!0)}}async function ga(a){try{await I(y("/api/tables/promote"),{proposalId:a}),m(l("tool.common.adoptedNote")),L()}catch(e){m(l("tool.common.promoteFail",{msg:e.message}),!0)}}async function xa(a){try{await I(y("/api/tables/archive"),{proposalId:a}),m(l("tool.common.archived")),L()}catch(e){m(l("tool.common.archiveFail",{msg:e.message}),!0)}}async function ta(){var n;if(!R()){m(l("worlds.laws.saveNoValid"),!0);return}let a=f;try{a=((n=(await(await fetch(y("/api/tables/truth"))).json()).docs)==null?void 0:n[0])??null}catch{}let e;try{e=da(ia((a==null?void 0:a.tables)??{},p),i)}catch(d){m(d.message,!0);return}const o=[...pa(p),...X(i)],t=r("lawsLabel").value.trim()||l("worlds.laws.defaultLabel",{list:o.length?o.join(", "):"—"}),s={formatVersion:Ca,id:"tables",name:t,tables:e,createdAt:(a==null?void 0:a.createdAt)??wa(),updatedAt:wa()};try{await I(y("/api/tables/proposal"),{tables:s,label:t,createdBy:"user"}),m(l("worlds.laws.saved",{name:t})),L()}catch(d){m(l("tool.common.saveFail",{msg:d.message}),!0)}}r("wtab-home").addEventListener("click",()=>{u="home",T(),g()}),r("wtab-laws").addEventListener("click",()=>{u="laws",T(),g()}),r("lawsForm").addEventListener("input",a=>{const e=a.target,o=e.getAttribute("data-law");o&&(p[o]=Number(e.value),b=!0,e.classList.toggle("chg",p[o]!==A()[o]),R(),J(),g())}),r("sysForm").addEventListener("input",a=>{var d;const e=a.target,o=e.getAttribute("data-sys");if(!o)return;const t=sa[o],s=i;t.kind==="toggle"?s[o]=e.checked:t.kind==="enum"?s[o]=e.value:s[o]=Number(e.value),b=!0;const n=i[o]!==M()[o];t.kind!=="toggle"&&e.classList.toggle("chg",n),(d=e.closest(".lawrow"))==null||d.classList.toggle("chg",n),R(),J(),g()}),r("lawsSave").addEventListener("click",()=>{ta()}),r("lawsReset").addEventListener("click",()=>{p=A(),i=M(),b=!0,v(),m(l("worlds.laws.resetDone")),g()});const ha=h.events.on("tables",()=>{L()});window.cdWorlds={reload:()=>j(),worlds:()=>k,account:()=>_,apiOk:()=>C,api:a=>y(a),open:(a,e)=>G(a,e??h.world()),tpl:a=>(a&&(x=a,P()),x),flagship:()=>U,laws:{tab:a=>{u=a,T()},draft:()=>({...p}),set:(a,e)=>{p[a]=e,b=!0,v(),g()},judge:()=>ra(p),sysDraft:()=>({...i}),setSys:(a,e)=>{i[a]=e,b=!0,v(),g()},judgeSys:()=>la(i),save:()=>ta(),refresh:()=>L()}};const va=La(()=>{B(),q(),v(),ea(f),L()}),ya=ma();return T(),P(),v(),ya&&b&&m(l("tool.common.restored")),j(),L(),{applyParams(a){const e=a.get("tab");e==="laws"?u="laws":e==="home"&&(u="home"),T()},dispose(){ha(),va(),g(),delete window.cdWorlds}}}};export{_a as worldsPanel};
