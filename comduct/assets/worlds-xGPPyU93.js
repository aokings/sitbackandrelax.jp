import{p as _,D as le,w as R,f as Ee}from"./creator-auth-DaRS9fY_.js";import{o as $e,P as Ce}from"./studio-suMSCJsV.js";import{b as Re,t as p}from"./i18n-CCqvHJcg.js";import{r as Te}from"./tool-shelf-DN910Fx5.js";import{T as De}from"./tables-doc-CaI14hJO.js";import{C as te,q as Ne,k as me}from"./tables-C--0aRhA.js";import"./preload-helper-Dp1pzeXC.js";import"./schemas-BBGxizon.js";const D=["posBack","posSide","posHigh","waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap","monsterCap","breathLen","breathCd"],fe={posBack:{min:1,max:3,step:.1},posSide:{min:1,max:3,step:.1},posHigh:{min:1,max:3,step:.1},waveFirstAfter:{min:0,max:30,step:1},waveGapBase:{min:1,max:30,step:1},waveGapJitter:{min:0,max:10,step:1},waveCountCap:{min:1,max:12,step:1},monsterCap:{min:4,max:40,step:1},breathLen:{min:1,max:9,step:1},breathCd:{min:1,max:20,step:1}};function P(){const s={};for(const t of D)s[t]=te.tuning[t];return s}function Q(s){var e;const t=P();for(const d of D){const c=(e=s.tuning)==null?void 0:e[d];typeof c=="number"&&(t[d]=c)}return t}function ie(s,t){const e=te.tuning,d={...s.tuning??{}};for(const w of D)t[w]!==e[w]?d[w]=t[w]:delete d[w];const c={...s};return Object.keys(d).length?c.tuning=d:delete c.tuning,me(c)}function Fe(s){const t=[];for(const e of D){const d=fe[e],c=s[e];(!Number.isFinite(c)||c<d.min||c>d.max)&&t.push({field:e,value:c,min:d.min,max:d.max})}return t}function pe(s){const t=te.tuning;return D.filter(e=>s[e]!==t[e])}const Y=[["hunger",["hungerEnabled","hungerRate","hungerStarveDmg"]],["death",["deathLoss","deathRestartGold"]],["xp",["xpRange","xpShare"]],["revive",["reviveBase","revivePerLuck","reviveAshes"]],["escape",["escapeBook","escapeDevice","escapeElevator"]]],ae={hungerEnabled:{kind:"toggle"},hungerRate:{kind:"number",min:1,max:9,step:1},hungerStarveDmg:{kind:"number",min:1,max:9,step:1},deathLoss:{kind:"enum",options:["carried","none"]},deathRestartGold:{kind:"number",min:0,max:999,step:1},xpRange:{kind:"number",min:0,max:30,step:1},xpShare:{kind:"number",min:0,max:1,step:.05},reviveBase:{kind:"number",min:0,max:100,step:1},revivePerLuck:{kind:"number",min:0,max:20,step:1},reviveAshes:{kind:"toggle"},escapeBook:{kind:"toggle"},escapeDevice:{kind:"toggle"},escapeElevator:{kind:"toggle"}};function T(){const s=Ne;return{hungerEnabled:s.hunger.enabled,hungerRate:s.hunger.rate,hungerStarveDmg:s.hunger.starveDmg,deathLoss:s.death.loss,deathRestartGold:s.death.restartGold,xpRange:s.xp.range,xpShare:s.xp.share,reviveBase:s.revive.base,revivePerLuck:s.revive.perLuck,reviveAshes:s.revive.ashes,escapeBook:s.escape.book,escapeDevice:s.escape.device,escapeElevator:s.escape.elevator}}function q(s){var d,c,w,g,b,k,L,H,z,B,N,x,u;const t=T(),e=s.systems;return e&&(((d=e.hunger)==null?void 0:d.enabled)!=null&&(t.hungerEnabled=e.hunger.enabled),((c=e.hunger)==null?void 0:c.rate)!=null&&(t.hungerRate=e.hunger.rate),((w=e.hunger)==null?void 0:w.starveDmg)!=null&&(t.hungerStarveDmg=e.hunger.starveDmg),((g=e.death)==null?void 0:g.loss)!=null&&(t.deathLoss=e.death.loss),((b=e.death)==null?void 0:b.restartGold)!=null&&(t.deathRestartGold=e.death.restartGold),((k=e.xp)==null?void 0:k.range)!=null&&(t.xpRange=e.xp.range),((L=e.xp)==null?void 0:L.share)!=null&&(t.xpShare=e.xp.share),((H=e.revive)==null?void 0:H.base)!=null&&(t.reviveBase=e.revive.base),((z=e.revive)==null?void 0:z.perLuck)!=null&&(t.revivePerLuck=e.revive.perLuck),((B=e.revive)==null?void 0:B.ashes)!=null&&(t.reviveAshes=e.revive.ashes),((N=e.escape)==null?void 0:N.book)!=null&&(t.escapeBook=e.escape.book),((x=e.escape)==null?void 0:x.device)!=null&&(t.escapeDevice=e.escape.device),((u=e.escape)==null?void 0:u.elevator)!=null&&(t.escapeElevator=e.escape.elevator)),t}function de(s,t){const e=T(),d={},c={};t.hungerEnabled!==e.hungerEnabled&&(c.enabled=t.hungerEnabled),t.hungerRate!==e.hungerRate&&(c.rate=t.hungerRate),t.hungerStarveDmg!==e.hungerStarveDmg&&(c.starveDmg=t.hungerStarveDmg),Object.keys(c).length&&(d.hunger=c);const w={};t.deathLoss!==e.deathLoss&&(w.loss=t.deathLoss),t.deathRestartGold!==e.deathRestartGold&&(w.restartGold=t.deathRestartGold),Object.keys(w).length&&(d.death=w);const g={};t.xpRange!==e.xpRange&&(g.range=t.xpRange),t.xpShare!==e.xpShare&&(g.share=t.xpShare),Object.keys(g).length&&(d.xp=g);const b={};t.reviveBase!==e.reviveBase&&(b.base=t.reviveBase),t.revivePerLuck!==e.revivePerLuck&&(b.perLuck=t.revivePerLuck),t.reviveAshes!==e.reviveAshes&&(b.ashes=t.reviveAshes),Object.keys(b).length&&(d.revive=b);const k={};t.escapeBook!==e.escapeBook&&(k.book=t.escapeBook),t.escapeDevice!==e.escapeDevice&&(k.device=t.escapeDevice),t.escapeElevator!==e.escapeElevator&&(k.elevator=t.escapeElevator),Object.keys(k).length&&(d.escape=k);const L={...s};return Object.keys(d).length?L.systems=d:delete L.systems,me(L)}function Ae(s){const t=[];for(const[,e]of Y)for(const d of e){const c=ae[d];if(c.kind!=="number")continue;const w=s[d];(!Number.isFinite(w)||w<c.min||w>c.max)&&t.push({field:d,value:w,min:c.min,max:c.max})}return t}function ee(s){const t=T(),e=[];for(const[,d]of Y)for(const c of d)s[c]!==t[c]&&e.push(c);return e}function ce(s){const t=[];return(s.waveGapBase+s.waveGapJitter>=24||s.waveCountCap<=1)&&t.push({key:"wavesLoose",level:"warn"}),s.monsterCap<=6&&t.push({key:"capLow",level:"warn"}),Math.max(s.posBack,s.posSide,s.posHigh)>=2.5&&t.push({key:"posDominant",level:"warn"}),s.waveFirstAfter<=1&&s.waveGapBase<=3&&t.push({key:"wavesHarsh",level:"note"}),s.monsterCap>=30&&t.push({key:"capHigh",level:"note"}),s.breathCd<=s.breathLen&&t.push({key:"breathTight",level:"note"}),{level:t.some(d=>d.level==="warn")?"warn":t.length?"note":"ok",notes:t}}function we(s){const t=[];return s.deathLoss==="none"&&t.push({key:"deathSoft",level:"warn"}),!s.escapeBook&&!s.escapeDevice&&!s.escapeElevator&&t.push({key:"noEscape",level:"warn"}),s.xpRange>=20&&t.push({key:"xpEverywhere",level:"warn"}),!s.reviveAshes&&s.reviveBase>=90&&t.push({key:"reviveSure",level:"warn"}),s.hungerEnabled&&t.push({key:"hungerOn",level:"note"}),s.xpRange<=1&&t.push({key:"xpTight",level:"note"}),s.xpShare===0&&t.push({key:"xpSolo",level:"note"}),!s.reviveAshes&&s.reviveBase<90&&t.push({key:"reviveSoft",level:"note"}),{level:t.some(d=>d.level==="warn")?"warn":t.length?"note":"ok",notes:t}}const He=`<!-- ============================================================
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
`,h=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ue=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),ze=[["worlds.laws.g.pos",["posBack","posSide","posHigh"]],["worlds.laws.g.wave",["waveFirstAfter","waveGapBase","waveGapJitter","waveCountCap"]],["worlds.laws.g.cap",["monsterCap"]],["worlds.laws.g.breath",["breathLen","breathCd"]]],We={id:"worlds",async mount(s,t){s.innerHTML=He,Re(s);const e=a=>s.querySelector(`#${a}`);function d(a,n=!1){const r=e("say");r.textContent=a,r.className=n?"err":""}let c="masaru",w=[],g=!1,b="fork",k=le;function L(){for(const a of Array.from(s.querySelectorAll(".tplcard")))a.classList.toggle("on",a.dataset.tpl===b);e("fldFromLbl").hidden=b!=="from"}e("tplRow").addEventListener("click",a=>{const n=a.target.closest(".tplcard");n!=null&&n.dataset.tpl&&(b=n.dataset.tpl,L())});function H(a,n){if(n===t.world()){t.navigate(a);return}const r=t.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);r.search="",r.searchParams.set("panel",a),r.searchParams.set("world",n),window.location.href=r.toString()}function z(){const a=e("worlds");if(a.innerHTML="",!w.length){const i=document.createElement("div");if(i.className="live",i.textContent=p("worlds.none"),a.appendChild(i),g){const l=document.createElement("button");l.type="button",l.className="on",l.textContent=p("worlds.emptyCta"),l.addEventListener("click",()=>{e("fldId").focus();const m=e("wapp");m.scrollTo({top:m.scrollHeight,behavior:"smooth"})}),a.appendChild(l)}return}for(const i of w){const l=document.createElement("div");l.className="card";const m=document.createElement("div"),O=document.createElement("b");O.textContent=i.title,m.appendChild(O);const A=document.createElement("div");A.className="key",A.textContent=i.key;const U=document.createElement("div");U.className="tagrow";const K=document.createElement("span");K.className="tag"+(i.publishedAt?" pub":""),K.textContent=i.publishedAt?p("worlds.statusPublished"):p("worlds.statusDraft"),U.appendChild(K);const re=i.forkedFrom;if(re){const v=document.createElement("span");v.className="tag",v.textContent=p("worlds.forkedFrom",{world:re}),U.appendChild(v)}l.append(m,A,U);const X=document.createElement("div");X.className="row";for(const v of Ce){if(v.id==="worlds")continue;const M=document.createElement("button");M.type="button",M.className="btn",M.textContent=`${v.icon} ${p(v.titleKey)}`,M.addEventListener("click",()=>H(v.id,i.key)),X.appendChild(M)}l.appendChild(X);const Z=document.createElement("div");Z.className="row";const G=document.createElement("button");G.type="button",G.className="on",G.textContent=p("worlds.publish"),G.addEventListener("click",()=>{(async()=>{try{const v=await _("/api/worlds/publish",{world:i.key});d(p("worlds.published",{path:v.packPath})),await N()}catch(v){d(p("worlds.publishFail",{msg:v.message}),!0)}})()});const J=document.createElement("button");J.type="button",J.textContent=p("tool.common.dup"),J.addEventListener("click",()=>{b="from",L(),e("fldFrom").value=i.key,e("fldId").focus();const v=e("wapp");v.scrollTo({top:v.scrollHeight,behavior:"smooth"})});const I=document.createElement("a");I.className="btn",I.textContent=p("worlds.play"),I.href=`dungeon.html?pack=${encodeURIComponent(`packs/${i.packName}.json`)}`,I.target="_blank",Z.append(G,J,I),l.appendChild(Z),a.appendChild(l)}const n=e("fldFrom"),r=n.value;n.innerHTML="";const o=document.createElement("option");o.value="",o.textContent=p("worlds.fromEmpty"),n.appendChild(o);for(const i of w){const l=document.createElement("option");l.value=i.key,l.textContent=`${i.title}（${i.key}）`,n.appendChild(l)}[...n.options].some(i=>i.value===r)&&(n.value=r)}function B(){e("acct").textContent=g?c:p("worlds.acctLocal"),e("acctNote").textContent=g?p("worlds.acctNote",{n:w.length}):""}async function N(){const a=await Ee();if(!a){d(p("worlds.loadFail",{msg:"API unreachable"}),!0),g=!1,w=[],B(),z();return}g=!0,c=a.accountId,w=a.worlds,k=a.defaultWorldKey??le,B(),z()}e("createForm").addEventListener("submit",a=>{a.preventDefault();const n=e("fldId").value.trim(),r=e("fldTitle").value.trim()||n,o=b==="fork"?k:b==="from"?e("fldFrom").value:void 0;if(b==="from"&&!o){d(p("worlds.tpl.fromNeed"),!0);return}(async()=>{try{const i=await _("/api/worlds",{id:n,title:r,...o?{from:o}:{}});d(p("worlds.created",{key:i.key}));const l=document.createElement("button");l.type="button",l.className="on",l.style.marginLeft="8px",l.textContent=p("worlds.openNew",{key:i.key}),l.addEventListener("click",()=>H("hub",i.key)),e("say").appendChild(l),e("fldId").value="",e("fldTitle").value="",await N()}catch(i){d(p("worlds.createFail",{msg:i.message}),!0)}})()});let x="home",u=P(),f=T(),S=!1,E=null;function y(a,n=!1){const r=e("lawsSay");r.textContent=a,r.className=n?"err":"",r.style.color=n?"#e08a8a":"#8fd6a3"}function j(){e("wtab-home").classList.toggle("on",x==="home"),e("wtab-laws").classList.toggle("on",x==="laws"),e("whome").hidden=x!=="home",e("wlaws").hidden=x!=="laws"}const ne="cdWorldsLawsM6";function $(){try{sessionStorage.setItem(ne,JSON.stringify({v:2,tab:x,laws:u,sys:f,dirty:S,label:e("lawsLabel").value}))}catch{}}function be(){var a,n;try{const r=sessionStorage.getItem(ne);if(!r)return!1;const o=JSON.parse(r);if(o.v!==1&&o.v!==2||typeof((a=o.laws)==null?void 0:a.monsterCap)!="number")return!1;x=o.tab==="laws"?"laws":"home";const i=P();for(const m of D)typeof o.laws[m]=="number"&&(i[m]=o.laws[m]);u=i;const l=T();for(const[,m]of Y)for(const O of m){const A=(n=o.sys)==null?void 0:n[O];A!=null&&typeof A==typeof l[O]&&(l[O]=A)}return f=l,S=!!o.dirty,o.label&&(e("lawsLabel").value=o.label),!0}catch{return!1}}function C(){const a=P();e("lawsForm").innerHTML=ze.map(([n,r])=>`<div class="lawgrp"><h3>${h(p(n))}</h3>${r.map(o=>{const i=fe[o];return`<div class="lawrow"><code>${o}</code><span class="lbl">${h(p(`worlds.laws.f.${o}`))}</span><input data-law="${o}" type="number" value="${u[o]}" min="${i.min}" max="${i.max}" step="${i.step}" class="${u[o]!==a[o]?"chg":""}" /><span class="rng">${i.min}–${i.max}</span></div>`}).join("")}</div>`).join(""),ve(),W(),V()}function he(a){const n=ae[a],r=f[a]!==T()[a],o=`<code>${a}</code><span class="lbl">${h(p(`worlds.laws.sys.f.${a}`))}</span>`;if(n.kind==="toggle")return`<div class="lawrow${r?" chg":""}">${o}<input data-sys="${a}" type="checkbox"${f[a]?" checked":""} /></div>`;if(n.kind==="enum"){const i=(n.options??[]).map(l=>`<option value="${l}"${f[a]===l?" selected":""}>${h(p(`worlds.laws.sys.opt.${a}.${l}`))}</option>`).join("");return`<div class="lawrow${r?" chg":""}">${o}<select data-sys="${a}" class="${r?"chg":""}">${i}</select></div>`}return`<div class="lawrow">${o}<input data-sys="${a}" type="number" value="${f[a]}" min="${n.min}" max="${n.max}" step="${n.step}" class="${r?"chg":""}" /><span class="rng">${n.min}–${n.max}</span></div>`}function ve(){e("sysForm").innerHTML=Y.map(([a,n])=>`<div class="lawgrp"><h3>${h(p(`worlds.laws.sys.g.${a}`))}</h3>${n.map(he).join("")}</div>`).join("")}function W(){const a=e("lawsLint"),n=e("lawsSave"),r=[...Fe(u),...Ae(f)];if(r.length)return a.innerHTML=`<div class="err">${r.map(o=>h(p("worlds.laws.rangeErr",{field:o.field,min:o.min,max:o.max}))).join(`
`)}</div>`,n.disabled=!0,!1;try{de(ie({},u),f)}catch(o){return a.innerHTML=`<div class="err">✗ ${h(o.message.slice(0,600))}</div>`,n.disabled=!0,!1}return a.innerHTML=`<div class="ok">✓ ${h(p("worlds.laws.lintOk",{n:pe(u).length+ee(f).length}))}</div>`,n.disabled=!1,!0}function V(){const a=ce(u),n=we(f),r=[...a.notes,...n.notes],o=r.some(l=>l.level==="warn")?"warn":r.length?"note":"ok",i=p(o==="ok"?"worlds.laws.meterOk":o==="note"?"worlds.laws.meterNote":"worlds.laws.meterWarn");e("lawsMeter").innerHTML=`<div class="meter ${o}"><b class="lv">${h(i)}</b>${r.length?`<ul>${r.map(l=>`<li>${h(p(`worlds.laws.n.${l.key}`))}</li>`).join("")}</ul>`:""}</div>`}function se(a){var i;const n=e("lawsTruth");if(!a){n.innerHTML=`<div class="live">${h(p("worlds.laws.truthEmpty"))}</div>`;return}const r=D.filter(l=>{var m;return typeof((m=a.tables.tuning)==null?void 0:m[l])=="number"}).length+(a.tables.systems?ee(q(a.tables)).length:0),o=[...Object.keys(a.tables).filter(l=>l!=="tuning"&&l!=="systems"),...Object.keys(a.tables.tuning??{}).filter(l=>!D.includes(l)).map(l=>`tuning.${l}`)];n.innerHTML=`<div class="card"><b>${h(a.name)}</b><span class="id">${h(a.updatedAt)}・${r} ${h(p("worlds.laws.ovFields"))}</span><span class="id">${h(o.length?p("worlds.laws.keepNote",{list:o.join(", ")}):p("worlds.laws.keepNone"))}</span><div class="row"><button type="button" data-act="laws-truth-load">${h(p("worlds.laws.load"))}</button></div></div>`,(i=n.querySelector('[data-act="laws-truth-load"]'))==null||i.addEventListener("click",()=>{u=Q(a.tables),f=q(a.tables),S=!1,C(),y(p("worlds.laws.loaded",{name:a.name})),$()})}async function F(){var a;e("lawsWorld").textContent=t.world();try{const[n,r]=await Promise.all([fetch(R("/api/tables/truth")).then(o=>o.json()),fetch(R("/api/tables/proposals")).then(o=>o.json())]);E=((a=n.docs)==null?void 0:a[0])??null,S||(u=Q((E==null?void 0:E.tables)??{}),f=q((E==null?void 0:E.tables)??{}),C()),se(E),Te(e("lawsProposals"),r.proposals??[],{tag:()=>p("worlds.laws.capTag"),onView:o=>{ge(o)},onPromote:o=>{xe(o)},onArchive:o=>{ye(o)}})}catch{E=null,e("lawsTruth").innerHTML=`<div class="live">${h(p("worlds.laws.noApi"))}</div>`,e("lawsProposals").innerHTML=""}}async function ge(a){var n;try{const o=(n=(await(await fetch(R(`/api/tables/proposal?id=${encodeURIComponent(a)}`))).json()).docs)==null?void 0:n[0];if(!o)throw new Error("proposal is empty");u=Q(o.tables),f=q(o.tables),S=!0,C(),y(p("worlds.laws.loaded",{name:o.name})),$()}catch(r){y(r.message,!0)}}async function xe(a){try{await _(R("/api/tables/promote"),{proposalId:a}),y(p("tool.common.adoptedNote")),F()}catch(n){y(p("tool.common.promoteFail",{msg:n.message}),!0)}}async function ye(a){try{await _(R("/api/tables/archive"),{proposalId:a}),y(p("tool.common.archived")),F()}catch(n){y(p("tool.common.archiveFail",{msg:n.message}),!0)}}async function oe(){var l;if(!W()){y(p("worlds.laws.saveNoValid"),!0);return}let a=E;try{a=((l=(await(await fetch(R("/api/tables/truth"))).json()).docs)==null?void 0:l[0])??null}catch{}let n;try{n=de(ie((a==null?void 0:a.tables)??{},u),f)}catch(m){y(m.message,!0);return}const r=[...pe(u),...ee(f)],o=e("lawsLabel").value.trim()||p("worlds.laws.defaultLabel",{list:r.length?r.join(", "):"—"}),i={formatVersion:De,id:"tables",name:o,tables:n,createdAt:(a==null?void 0:a.createdAt)??ue(),updatedAt:ue()};try{await _(R("/api/tables/proposal"),{tables:i,label:o,createdBy:"user"}),y(p("worlds.laws.saved",{name:o})),F()}catch(m){y(p("tool.common.saveFail",{msg:m.message}),!0)}}e("wtab-home").addEventListener("click",()=>{x="home",j(),$()}),e("wtab-laws").addEventListener("click",()=>{x="laws",j(),$()}),e("lawsForm").addEventListener("input",a=>{const n=a.target,r=n.getAttribute("data-law");r&&(u[r]=Number(n.value),S=!0,n.classList.toggle("chg",u[r]!==P()[r]),W(),V(),$())}),e("sysForm").addEventListener("input",a=>{var m;const n=a.target,r=n.getAttribute("data-sys");if(!r)return;const o=ae[r],i=f;o.kind==="toggle"?i[r]=n.checked:o.kind==="enum"?i[r]=n.value:i[r]=Number(n.value),S=!0;const l=f[r]!==T()[r];o.kind!=="toggle"&&n.classList.toggle("chg",l),(m=n.closest(".lawrow"))==null||m.classList.toggle("chg",l),W(),V(),$()}),e("lawsSave").addEventListener("click",()=>{oe()}),e("lawsReset").addEventListener("click",()=>{u=P(),f=T(),S=!0,C(),y(p("worlds.laws.resetDone")),$()});const ke=t.events.on("tables",()=>{F()});window.cdWorlds={reload:()=>N(),worlds:()=>w,account:()=>c,apiOk:()=>g,api:a=>R(a),open:(a,n)=>H(a,n??t.world()),tpl:a=>(a&&(b=a,L()),b),flagship:()=>k,laws:{tab:a=>{x=a,j()},draft:()=>({...u}),set:(a,n)=>{u[a]=n,S=!0,C(),$()},judge:()=>ce(u),sysDraft:()=>({...f}),setSys:(a,n)=>{f[a]=n,S=!0,C(),$()},judgeSys:()=>we(f),save:()=>oe(),refresh:()=>F()}};const Le=$e(()=>{B(),z(),C(),se(E),F()}),Se=be();return j(),L(),C(),Se&&S&&y(p("tool.common.restored")),N(),F(),{applyParams(a){const n=a.get("tab");n==="laws"?x="laws":n==="home"&&(x="home"),j()},dispose(){ke(),Le(),$(),delete window.cdWorlds}}}};export{We as worldsPanel};
