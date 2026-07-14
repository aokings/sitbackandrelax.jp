import{O as st,Q as Lt,R as St,d as Nt}from"./tables-I60mC_c3.js";import{T as Tt}from"./tables-doc-B6whtzBZ.js";import{e as tt}from"./draft-editor-registry-D6E4VN9B.js";import{h as ot,t as p,k as re,j as ie,g as Pt,d as At}from"./world-ui-D4RS3ZoF.js";import{r as Rt,h as Ht}from"./stale-card-CeJeg8X5.js";import{o as Dt,l as De,b as nt}from"./llm-BOBRi4NF.js";import{c as pt,p as U,a as de,b as lt,f as Mt,d as Ot}from"./modelref-picker-BWINazCf.js";import{A as It,B as zt,j as Me,C as Bt,_ as at,D as jt}from"./render-voxel-DT_XKhmE.js";import{a as $t}from"./play-input-ihx35VtW.js";import{b as _t,H as Ft,p as Jt,e as Gt,f as Ut,g as qt,h as Kt,j as Vt,k as Yt,l as Zt,n as rt,i as Qt}from"./parts-workbench-DOn7Ru3L.js";import{c as Oe}from"./dungeon-Dnk6RqKI.js";import{p as Wt}from"./tuner-core-B4mzWM7K.js";import{o as Xt}from"./testbed-CNAgZqbg.js";import"./status-BFngDnvf.js";import"./three.module-BAT99Nro.js";import"./gamepack-BSccYvMQ.js";import"./pack-handoff-DaSImG6J.js";import"./playtest-core-AQCSWlcO.js";const eo=`<!-- ============================================================
     §A 人パネル（👤 people）の markup（部分 HTML・?raw import）。
     goals.html と同じ流儀：style 込み・id はパネル内ローカル・data-i18n＝tool.* キー。
     FEEDBACK-P1-round1-2026-07-11 §2・PLAN-p1-round2 E2＝主人公タブを 8 工程文法の最初の実例に
     作り替え（2026-07-11）。通常面＝①いまの主人公 ②姿を作る3動作 ③基本情報 ④三段階 ⑤次の工程。
     JSON／全候補ピッカー／本編で遊ぶ／下書きの棚（内部 id を見せる）は「もっとこだわる」へ畳む。
     仲間（comp）タブ・一覧タブは今回の対象外＝markup 不変。
     ============================================================ -->
<style>
  #ppl { --bg: #12161f; --panel: #1a2130; --line: #2b3547; --text: #e8edf5; --muted: #8b96a8; --accent: #e0b050; --tint: #31290f; --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e; }
  #ppl { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--text); font: 13px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #ppl * { box-sizing: border-box; margin: 0; padding: 0; }
  #pplhead { padding: 8px 14px; border-bottom: 1px solid var(--line); display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  #pplhead b { color: #ffe9b8; font-size: 14px; }
  #ppl button, #ppl select, #ppl input[type="text"], #ppl input[type="color"], #ppl textarea { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  #ppl input[type="text"], #ppl textarea { cursor: text; }
  #ppl button:hover { border-color: var(--accent); }
  #ppl button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  #ppl button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  #ppl button:disabled { opacity: .5; cursor: default; }
  #ppllive { color: var(--muted); font-size: 11px; }
  #pplmsg { color: var(--ok); font-size: 12px; }
  #pplmain { flex: 1; display: flex; min-height: 0; }
  #pplmain section { display: none; }
  #pplmain section.show { display: flex; }
  /* ── 一覧タブ：この世界の人が全員一目で見える（設計 §A-1 の玄関） ── */
  #ppllist { flex: 1; overflow-y: auto; padding: 12px 14px; flex-direction: column; gap: 12px; }
  #ppllist h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  #ppllist .note { color: var(--muted); font-size: 11px; }
  .pgrid { display: flex; flex-wrap: wrap; gap: 8px; }
  .pcard { display: flex; flex-direction: column; align-items: center; gap: 3px; width: 84px; border: 1px solid var(--line); border-radius: 8px; padding: 6px; background: var(--panel); cursor: pointer; }
  .pcard:hover { border-color: var(--accent); }
  .pcard.plain { cursor: default; }
  .pcard img { width: 64px; height: 64px; border-radius: 6px; background: #0d1117; image-rendering: pixelated; }
  .pcard .nm { font-size: 11px; color: #ffe9b8; max-width: 76px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .pcard .sub { font-size: 9px; color: var(--muted); }
  /* ── 主人公タブ：常に縦一列＝順番どおり読める（憲章 §5・FEEDBACK 共通させる画面文法） ── */
  #pplhero { flex: 1; min-height: 0; }
  #pplheroMain { flex: 1; min-width: 0; overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 16px; background: #0d1117; }
  #pplhero h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  #pplhero h3 { font-size: 11px; color: #ffe9b8; font-weight: 700; }
  #ppl .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; flex-wrap: wrap; }
  #ppl .kv .lbl { color: var(--muted); font-size: 11px; min-width: 5.6em; }
  #ppl .note { color: var(--muted); font-size: 11px; }
  #ppl .statusline { font-size: 12px; }
  .pplblock { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  /* ①いまの主人公：立ち姿＋名前＋状態を1つの塊で見せる（確定版カードと二重に出さない） */
  .pplcurrent { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .pplcurrentinfo { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  #pplCurrentName { font-size: 15px; color: #ffe9b8; font-weight: 700; }
  #pplportrait { width: 96px; height: 96px; border-radius: 10px; background: #0d1117; image-rendering: pixelated; border: 1px solid var(--line); flex-shrink: 0; }
  /* ②姿を作る3動作：言葉で作る／見本から選ぶ／自分で部品を選ぶ */
  .pplaction { display: flex; flex-direction: column; gap: 6px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); }
  #pplAskHint { display: none; align-items: center; gap: 8px; flex-wrap: wrap; }
  #pplAskHint.show { display: flex; }
  #pplAskBox { display: none; flex-direction: column; gap: 6px; }
  #pplAskBox.show { display: flex; }
  #pplAskInput { flex: 1; min-width: 140px; }
  #pplAskStatus.ok { color: var(--ok); }
  #pplAskStatus.bad { color: var(--err); }
  #pplAskStatus .diffextra { margin-top: 4px; display: flex; flex-direction: column; gap: 3px; align-items: flex-start; color: var(--text); }
  #pplAskStatus .diffnote { color: var(--muted); }
  #pplAskStatus .diffomit { color: var(--err); } /* P1 round3 #C：依頼にあった同義語が反映されず note も無い＝機械の最終柵 */
  /* ピッカー（smith §5-2 と同じ class＝共有部品 pickerCell の見た目） */
  .mpickcur { display: flex; align-items: center; gap: 8px; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; }
  .mpickgrid { display: flex; flex-direction: column; gap: 6px; max-height: 240px; overflow-y: auto; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; }
  .mpickhead { font-size: 11px; color: var(--muted); }
  .mpickrow { display: flex; flex-wrap: wrap; gap: 6px; }
  .mpickcell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; width: 52px; min-height: 52px; border: 1px solid var(--line); border-radius: 6px; padding: 3px; cursor: pointer; background: #232c3e; }
  .mpickcell:hover { border-color: var(--accent); }
  .mpickcell.sel { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .mpickcell img { width: 44px; height: 44px; border-radius: 4px; background: #0d1117; image-rendering: pixelated; }
  .mpickcell .nm { font-size: 9px; color: var(--muted); max-width: 48px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mpickcell .tag { font-size: 9px; color: var(--muted); white-space: normal; overflow-wrap: anywhere; text-align: center; }
  /* ④三段階（▶遊んで確かめる／下書きを保存する／これで決定する） */
  #pplactions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  #pplDecideNote { min-height: 1.2em; }
  #pplNextStep { display: none; align-items: center; gap: 8px; flex-wrap: wrap; }
  #pplNextStep.show { display: flex; }
  /* ── もっとこだわる（詳細）：JSON・全候補・本編で遊ぶ・下書きの棚をここへ畳む ── */
  #pplMore { border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); display: flex; flex-direction: column; gap: 12px; }
  #pplMore > summary { cursor: pointer; color: var(--accent); font-size: 12px; font-weight: 700; }
  #pplMore textarea { width: 100%; min-height: 80px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; }
  #ppladv summary { cursor: pointer; color: var(--muted); font-size: 11px; }
  /* ── 仲間タブ（§8-1・今回の対象外） ── */
  #pplcomp { flex: 1; min-height: 0; }
  #pplcompL { flex: 1.2; min-width: 0; overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; background: #0d1117; }
  #pplcompR { flex: 1; min-width: 260px; max-width: 380px; border-left: 1px solid var(--line); overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; }
  #pplcomp h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  #pplcompmodes { display: flex; flex-direction: column; gap: 4px; font-size: 12px; }
  #pplcompmodes label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
  .pplwarnnote { color: var(--warn); font-size: 11px; }
  #pplcomplist { display: flex; flex-direction: column; gap: 6px; }
  .crow { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; background: var(--panel); }
  .crow img { width: 40px; height: 40px; border-radius: 6px; background: #0d1117; image-rendering: pixelated; }
  .crow .nm { flex: 1; font-size: 12px; }
  .crow.editing { border-color: var(--accent); }
  #pplcompedit { display: none; flex-direction: column; gap: 8px; border: 1px solid var(--line); border-radius: 8px; padding: 10px; background: var(--panel); }
  #pplcompedit.show { display: flex; }
  #pplcompeditPortrait { width: 72px; height: 72px; border-radius: 8px; background: #0d1117; image-rendering: pixelated; align-self: center; }
  #pplcompgrid { display: flex; flex-direction: column; gap: 6px; max-height: 200px; overflow-y: auto; background: #232c3e; border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; }
  #pplcompActions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  /* 憲章 §11：小画面では情報を畳むが能力を削らない（仲間タブは左右2段を縦積みに・親指で届く） */
  @media (max-width: 700px) {
    #pplcomp.show { flex-direction: column; overflow-y: auto; }
    #pplcompL, #pplcompR { flex: none; overflow: visible; max-width: none; min-width: 0; border-left: none; }
    #pplcompR { border-top: 1px solid var(--line); }
  }
</style>
<div id="ppl">
  <div id="pplhead">
    <b data-i18n="tool.people.h1">人（主人公・仲間・街の人）</b>
    <button type="button" id="ppltabList" class="tab" data-i18n="tool.people.tabList">一覧</button>
    <button type="button" id="ppltabHero" class="tab" data-i18n="tool.people.tabHero">主人公</button>
    <button type="button" id="ppltabComp" class="tab" data-i18n="tool.people.tabComp">仲間</button>
    <span id="ppllive">…</span>
    <span id="pplmsg"></span>
  </div>
  <div id="pplmain">
    <section id="ppllist">
      <h2 data-i18n="tool.people.heroHead">主人公</h2>
      <div class="pgrid" id="ppllistHero"></div>
      <h2 data-i18n="tool.people.companionsHead">仲間</h2>
      <div class="pgrid" id="ppllistComp"></div>
      <div class="note" data-i18n="tool.people.companionsNote">仲間タブで編成を選べます（既定のまま／ソロ開始／カスタム）。開始編成はゲーム結果に影響します</div>
      <h2 data-i18n="tool.people.townHead">街の人</h2>
      <div class="pgrid" id="ppllistTown"></div>
      <div class="note" data-i18n="tool.people.townNote">街の人を作る・直すのは 🔨 街モード（押すと移動します）</div>
    </section>
    <section id="pplhero">
      <div id="pplheroMain">
        <!-- ①いまの主人公 -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.currentHead">いまの主人公</h2>
          <div class="pplcurrent">
            <img id="pplportrait" alt="" />
            <div class="pplcurrentinfo">
              <div id="pplCurrentName"></div>
              <div class="statusline" id="pplbody"></div>
              <div class="note" id="pplCurrentStatus"></div>
              <div class="note" id="pplnote"></div>
            </div>
          </div>
        </div>

        <!-- ②姿を作る3動作 -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.makeHead">姿を作る</h2>

          <div class="pplaction">
            <h3 data-i18n="tool.people.askHead">言葉で姿を作る</h3>
            <div id="pplAskHint" class="note">
              <span data-i18n="tool.people.ask.connectHint">AI をつなぐと言葉でも作れます</span>
              <button type="button" id="pplAskConnect" data-i18n="tool.people.ask.connectGo">🔌 AI をつなぐ</button>
            </div>
            <div id="pplAskBox">
              <div class="kv">
                <input type="text" id="pplAskInput" data-i18n-ph="tool.people.ask.ph" placeholder="" />
                <button type="button" id="pplAskBtn" data-i18n="tool.people.ask.go">🪄 頼む</button>
              </div>
              <div id="pplAskStatus"></div>
            </div>
          </div>

          <div class="pplaction">
            <h3 data-i18n="tool.people.presetHead">見本から選ぶ</h3>
            <div class="mpickgrid" id="pplpresetgrid"></div>
          </div>

          <div class="pplaction">
            <h3 data-i18n="tool.people.partsHead">自分で部品を選ぶ</h3>
            <div class="kv">
              <button type="button" id="pplparts"></button>
            </div>
          </div>
        </div>

        <!-- ③基本情報 -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.basicHead">基本情報</h2>
          <div class="kv"><span class="lbl" data-i18n="tool.people.name">名前</span><input type="text" id="pplname" maxlength="40" /></div>
          <div class="kv"><span class="lbl" data-i18n="tool.people.glyph">記号（1-2字）</span><input type="text" id="pplglyph" maxlength="2" style="width:4em" /></div>
          <div class="kv"><span class="lbl" data-i18n="tool.people.color">色</span><input type="color" id="pplcolor" /></div>
        </div>

        <!-- ④三段階：▶遊んで確かめる／下書きを保存する／これで決定する -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.stageHead">仕上げる</h2>
          <div id="pplactions">
            <button type="button" id="ppltry" data-i18n="tool.people.tryDraft">▶ 遊んで確かめる</button>
            <input type="text" id="ppllabel" placeholder="" style="min-width: 12em" />
            <button type="button" id="pplsave" class="big" data-i18n="tool.people.saveDraft">下書きを保存する</button>
            <button type="button" id="ppldecide" class="big" data-i18n="tool.people.decide">これで決定する</button>
          </div>
          <div class="note" id="pplDecideNote"></div>
          <!-- ⑤次の工程へ -->
          <div id="pplNextStep">
            <span data-i18n="tool.people.nextStepNote">次は 依頼 を作れます</span>
            <button type="button" id="pplNextGoals" data-i18n="tool.people.nextStepGo">🎯 依頼を作る</button>
          </div>
        </div>

        <!-- もっとこだわる（詳細）：JSON手打ち・全候補ピッカー・本編で遊ぶ・下書きの棚 -->
        <details id="pplMore">
          <summary data-i18n="tool.people.moreHead">もっとこだわる（詳細編集）</summary>
          <div class="pplblock">
            <h3 data-i18n="tool.people.pickHead">主人公の姿を選ぶ</h3>
            <div class="mpickcur" id="pplcur"></div>
            <div class="mpickgrid" id="pplgrid"></div>
          </div>
          <details id="ppladv">
            <summary data-i18n="tool.people.advanced">詳細（手打ち）</summary>
            <textarea id="pplref" spellcheck="false"></textarea>
            <div class="note" data-i18n="tool.people.advancedNote">姿の指し方：組込キー／彫った姿の id／{"rig":…,"parts":…} の JSON（部品の組み合わせ）</div>
          </details>
          <div class="pplblock">
            <div class="kv">
              <button type="button" id="pplsculpt"></button>
              <button type="button" id="pplplay" data-i18n="tool.people.playDraft">▶ 本編で遊ぶ</button>
            </div>
          </div>
          <div class="pplblock">
            <h3 data-i18n="tool.people.propsHead">下書きの棚</h3>
            <div id="pplprops"></div>
          </div>
        </details>
      </div>
    </section>
    <section id="pplcomp">
      <div id="pplcompL">
        <h2 data-i18n="tool.people.compModeHead">編成モード</h2>
        <div id="pplcompmodes">
          <label><input type="radio" name="pplcompmode" id="pplmodeDefault" value="default" /><span data-i18n="tool.people.compModeDefault">既定のまま（リン・ガロ）</span></label>
          <label><input type="radio" name="pplcompmode" id="pplmodeSolo" value="solo" /><span data-i18n="tool.people.compModeSolo">ソロ開始（主人公だけ）</span></label>
          <label><input type="radio" name="pplcompmode" id="pplmodeCustom" value="custom" /><span data-i18n="tool.people.compModeCustom">カスタム編成</span></label>
        </div>
        <div class="pplwarnnote" data-i18n="tool.people.compImpactNote">開始編成はゲームの難しさ・結果に影響します</div>
        <div id="pplcompCustomBox">
          <h2 data-i18n="tool.people.compListHead">仲間（最大5人）</h2>
          <div id="pplcomplist"></div>
          <button type="button" id="pplcompadd" data-i18n="tool.people.compAdd">＋ 仲間を追加</button>
          <div id="pplcompedit">
            <img id="pplcompeditPortrait" alt="" />
            <div class="kv"><span class="lbl" data-i18n="tool.people.compId">id（半角英数・ハイフン）</span><input type="text" id="pplcompeditId" style="width:10em" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.name">名前</span><input type="text" id="pplcompeditName" maxlength="40" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.glyph">記号（1-2字）</span><input type="text" id="pplcompeditGlyph" maxlength="2" style="width:4em" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.color">色</span><input type="color" id="pplcompeditColor" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.town.race">種族</span><select id="pplcompeditRace"></select></div>
            <details id="pplcompadv">
              <summary data-i18n="tool.people.advanced">詳細（手打ち）</summary>
              <textarea id="pplcompeditRef" spellcheck="false"></textarea>
              <div class="note" data-i18n="tool.people.advancedNote">姿の指し方：組込キー／彫った姿の id／{"rig":…,"parts":…} の JSON（部品の組み合わせ）</div>
            </details>
            <div id="pplcompcur" class="mpickcur"></div>
            <div id="pplcompgrid"></div>
            <button type="button" id="pplcompremove" data-i18n="tool.people.compRemove">削除</button>
          </div>
        </div>
        <div id="pplcompActions">
          <input type="text" id="pplcomplabel" placeholder="" style="min-width: 12em" />
          <button type="button" id="pplcompsave" class="big" data-i18n="tool.people.saveDraft">下書きを保存する</button>
          <button type="button" id="pplcomptry" data-i18n="tool.people.tryDraft">▶ 遊んで確かめる</button>
          <button type="button" id="pplcompplay" data-i18n="tool.people.playDraft">▶ 本編で遊ぶ</button>
        </div>
      </div>
      <div id="pplcompR">
        <h2 data-i18n="tool.people.compPreviewHead">編成プレビュー</h2>
        <div class="pgrid" id="pplcomppreview"></div>
      </div>
    </section>
  </div>
</div>
`,Ie=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),it="cdPeopleP1",ze="cdPeopleHandoff",dt=()=>({name:"",glyph:"",color:"",refText:""}),to=Lt.options,oo=N=>({id:`comp${N}`,name:"",glyph:"",color:"",race:"human",refText:""});function be(N,h,L){const z={...N},o={...N.party??{}};return Object.keys(h).length?o.hero=h:delete o.hero,L!==void 0?o.start=L:delete o.start,Object.keys(o).length?z.party=o:delete z.party,z}function no(N,h,L,z,o,b,T){const s=be({},z,o).party;if(s!==void 0&&!st.safeParse(s).success)return h;const m=s===void 0?{field:"party",op:"unset"}:{field:"party",op:"set",value:s},E=p("tool.hub.draft.editorPeople",{name:b});return N.register({panel:L,bundleKind:"tables",itemId:"party",label:E,payload:[m],updatedAt:T,now:T})}function po(N,h){return h&&N.remove(h),null}const Eo={id:"people",async mount(N,h){const{wapi:L,postJson:z}=h.api;N.innerHTML=eo,ot(N);const o=e=>N.querySelector(`#${e}`),b=(e,t=!1)=>{const n=o("pplmsg");n.textContent=e,n.style.color=t?"#ff7a6e":"#7fd17f"};let T="hero",s=dt(),m=!1,E="default",v=[],C=!1,x=-1,P={},A=null,se=!1,B,Z,Q=!1,S,ce=null;const D=Oe[0],w=pt(96),oe=pt(220);function g(){var n;if(!m&&!C){ce=po(tt,ce);return}const e=q();if(!e.ok)return;const t=((n=e.hero.name)==null?void 0:n.trim())||D.name;ce=no(tt,ce,"people",e.hero,e.start,t,Ie())}const u=()=>{var e;try{sessionStorage.setItem(it,JSON.stringify({v:1,world:h.world(),draft:s,dirty:m,shelf:K,label:o("ppllabel").value,compMode:E,compMembers:v,compDirty:C,complabel:((e=o("pplcomplabel"))==null?void 0:e.value)??"",lastSavedProposalId:B,lastSavedSignature:Z,showNextStep:Q,askUndo:S}))}catch{}};let Be;const ct=()=>{try{const e=sessionStorage.getItem(it);if(!e)return!1;const t=JSON.parse(e);return t.v!==1||t.world!==h.world()?!1:(s={...dt(),...t.draft},m=t.dirty,E=t.compMode??"default",v=t.compMembers??[],C=t.compDirty??!1,B=t.lastSavedProposalId,Z=t.lastSavedSignature,Q=t.showNextStep??!1,S=t.askUndo,Be=t.shelf,o("ppllabel").value=t.label??"",o("pplcomplabel").value=t.complabel??"",!0)}catch{return!1}};function je(){const e={};return s.name.trim()&&(e.name=s.name.trim()),s.glyph.trim()&&(e.glyph=s.glyph.trim()),s.color.trim()&&(e.color=s.color.trim()),s.refText.trim()&&(e.modelRef=re(s.refText.trim())),e}function mt(e){const t=e.trim();if(!t)return null;try{const n=re(t);return n&&typeof n=="object"&&"rig"in n?n:null}catch{return null}}function ge(e){return{name:(e==null?void 0:e.name)??"",glyph:(e==null?void 0:e.glyph)??"",color:(e==null?void 0:e.color)??"",refText:(e==null?void 0:e.modelRef)!==void 0?ie(e.modelRef):""}}function $e(){try{const e=je();return Object.keys(e).length&&St.parse(e),{ok:!0,hero:e}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}function ut(e){const t={id:e.id.trim(),name:e.name.trim()};return e.glyph.trim()&&(t.glyph=e.glyph.trim()),e.color.trim()&&(t.color=e.color.trim()),e.race.trim()&&(t.race=e.race.trim()),e.refText.trim()&&(t.modelRef=re(e.refText.trim())),t}function ft(e){return{id:e.id,name:e.name,glyph:e.glyph??"",color:e.color??"",race:e.race??"human",refText:e.modelRef!==void 0?ie(e.modelRef):""}}function ye(e){const t=e==null?void 0:e.start;return t===void 0?{mode:"default",members:[]}:t.length===0?{mode:"solo",members:[]}:{mode:"custom",members:t.map(ft)}}function _e(){if(E!=="default")return E==="solo"?[]:v.map(ut)}function q(){try{const e=je(),t=_e(),n={};return Object.keys(e).length&&(n.hero=e),t!==void 0&&(n.start=t),Object.keys(n).length&&st.parse(n),{ok:!0,hero:e,start:t}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}let me="",K,ne=[];async function ue(e){try{const t=e?`/api/parts/proposal?id=${encodeURIComponent(e)}`:"/api/parts/truth",n=await fetch(L(t));if(!n.ok)throw new Error(`HTTP ${n.status}`);ne=(await n.json()).parts??[],at(ne.map(r=>$t(r))),K=e,me=e?p("tool.people.shelfProposal"):""}catch{at([]),ne=[],K=void 0,me=""}jt(),w.clear(),oe.clear()}async function ke(){var e,t;try{const n=await fetch(L("/api/tables/truth"));if(n.ok)return((t=(e=(await n.json()).docs)==null?void 0:e[0])==null?void 0:t.tables)??{}}catch{}return{}}async function fe(e=!1){var t;if(P=await ke(),(e||!m)&&(s=ge((t=P.party)==null?void 0:t.hero),m=!1),e||!C){const n=ye(P.party);E=n.mode,v=n.members,C=!1,x=-1}O(),g()}async function Fe(){A==null&&(A=await Mt(L)),V()}function M(e){T=e,o("ppltabList").classList.toggle("on",T==="list"),o("ppltabHero").classList.toggle("on",T==="hero"),o("ppltabComp").classList.toggle("on",T==="comp"),o("ppllist").classList.toggle("show",T==="list"),o("pplhero").classList.toggle("show",T==="hero"),o("pplcomp").classList.toggle("show",T==="comp")}function we(e){return{kind:"hero",race:D.race,equipment:{},stats:{...D.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name??D.name,glyph:e.glyph??D.glyph,color:e.color??D.color,...e.modelRef!==void 0?{modelRef:e.modelRef}:{}}}function Ce(e){const t=e.refText.trim()?re(e.refText.trim()):void 0;return{kind:"ally",race:e.race||"human",color:e.color||"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name.trim()||p("tool.people.compDefaultName"),...t!==void 0?{modelRef:t}:{}}}function j(e,t){try{return e.shoot(Ot(t))}catch(n){return console.warn("people プレビューが組めない",n),null}}function J(){var a;const e=$e(),t=o("pplportrait"),n=o("pplbody"),c=o("pplCurrentName"),r=o("pplCurrentStatus");if(!e.ok){t.removeAttribute("src"),n.textContent=`✗ ${e.error}`,n.style.color="#ff7a6e",c.textContent=s.name.trim()||D.name,r.textContent="",o("pplnote").textContent=me;return}n.style.color="";const d=j(oe,we(e.hero));d?t.src=d:t.removeAttribute("src");const l=we(e.hero);n.textContent=It(l)?`${p("tool.people.bodyPct")}: ${zt(l)}%`:"",c.textContent=e.hero.name??D.name,r.textContent=m?p("tool.people.draftShown"):(a=P.party)!=null&&a.hero?p("tool.people.truthAuthored"):p("tool.people.defaultNote"),o("pplnote").textContent=me}function W(){const e=o("pplpresetgrid");e.innerHTML="";const t=new Set(Me().map(l=>l.id)),n=s.refText.trim(),c=l=>{s.refText=l,m=!0,u(),pe(),V(),W(),J(),R()},r=Ft.filter(l=>Jt(l,t));if(r.length){const l=document.createElement("div");l.className="mpickrow";for(const a of r){const f=ie(a.ref);l.appendChild(U(w,f,a.label.replace(/^人の下地：/,""),f===n,c))}e.appendChild(l)}const d=A??[];if(d.length){const l=document.createElement("div");l.className="mpickrow";for(const a of d)l.appendChild(U(w,a.id,de(A,a.id),a.id===n,c));e.appendChild(l)}if(!r.length&&!d.length){const l=document.createElement("div");l.className="note",l.textContent=p("tool.people.presetNone"),e.appendChild(l)}}function V(){const e=o("pplcur");e.innerHTML="";const t=document.createElement("div");t.className="mpickhead",t.textContent=p("tool.people.pickCurrent");const n=s.refText.trim(),c=a=>{s.refText=a,m=!0,u(),pe(),V(),W(),J(),R()};if(n)e.append(t,U(w,n,de(A,n),!0,c));else{const a=document.createElement("span");a.className="note",a.textContent=p("tool.people.pickNone"),e.append(t,a)}const r=o("pplgrid");r.innerHTML="";const d=lt();if(d.length){const a=document.createElement("div");a.className="mpickhead",a.textContent=p("tool.smith.modelPickBuiltin"),r.appendChild(a);const f=document.createElement("div");f.className="mpickrow";for(const i of d)f.appendChild(U(w,i,i,i===n,c));r.appendChild(f)}const l=A??[];if(l.length){const a=document.createElement("div");a.className="mpickhead",a.textContent=p("tool.smith.modelPickTruth"),r.appendChild(a);const f=document.createElement("div");f.className="mpickrow";for(const i of l)f.appendChild(U(w,i.id,de(A,i.id),i.id===n,c));r.appendChild(f)}}function pe(){o("pplname").value=s.name,o("pplglyph").value=s.glyph,o("pplcolor").value=s.color||D.color,o("pplref").value=s.refText,o("ppllabel").placeholder=p("tool.people.defaultLabel")}function Je(){var l,a,f;const e=o("ppllistHero");e.innerHTML="";const t=(l=P.party)==null?void 0:l.hero;e.appendChild(X(j(w,we(t??{})),(t==null?void 0:t.name)??D.name,t?"":p("tool.people.defaultChip"),()=>{M("hero")}));const n=o("ppllistComp");n.innerHTML="";const c=C?{start:_e()}:{mode:ye(P.party).mode,start:(a=P.party)==null?void 0:a.start};if(c.start===void 0)for(const i of Oe.slice(1))n.appendChild(X(j(w,{kind:"ally",race:i.race,color:i.color,equipment:{},stats:{...i.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name}),i.name,p("tool.people.defaultChip"),()=>M("comp")));else if(c.start.length===0){const i=document.createElement("div");i.className="note",i.textContent=p("tool.people.compNone"),n.appendChild(i)}else for(const i of c.start)n.appendChild(X(j(w,{kind:"ally",race:i.race??"human",color:i.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name,...i.modelRef!==void 0?{modelRef:i.modelRef}:{}}),i.name,"",()=>M("comp")));const r=o("ppllistTown");r.innerHTML="";const d=(P.town??Nt()).npcs??[];for(const i of d)r.appendChild(X(j(w,{kind:"ally",race:i.race,color:i.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name??i.id,...i.modelRef!==void 0?{modelRef:i.modelRef}:{}}),((f=i.names)==null?void 0:f[Pt()])??i.name??i.id,"",()=>h.navigate("forge",{tab:"town"})));if(!d.length){const i=document.createElement("div");i.className="note",i.textContent=p("tool.people.noTownFolk"),r.appendChild(i)}}function X(e,t,n,c){const r=document.createElement("div");r.className="pcard"+(c?"":" plain");const d=document.createElement("img");e&&(d.src=e);const l=document.createElement("div");if(l.className="nm",l.textContent=t,r.append(d,l),n){const a=document.createElement("div");a.className="sub",a.textContent=n,r.appendChild(a)}return c&&r.addEventListener("click",c),r}function vt(e){return p(`tool.town.race.${e}`)}function ht(){o("pplmodeDefault").checked=E==="default",o("pplmodeSolo").checked=E==="solo",o("pplmodeCustom").checked=E==="custom",o("pplcompCustomBox").style.display=E==="custom"?"":"none"}function ee(){const e=o("pplcomplist");e.innerHTML="",v.forEach((t,n)=>{const c=document.createElement("div");c.className="crow"+(n===x?" editing":"");const r=document.createElement("img"),d=j(w,Ce(t));d&&(r.src=d);const l=document.createElement("div");l.className="nm",l.textContent=t.name.trim()||p("tool.people.compDefaultName");const a=document.createElement("button");a.type="button",a.textContent=p("tool.people.compEditHead"),a.addEventListener("click",()=>{x=n,$()}),c.append(r,l,a),e.appendChild(c)})}function ve(){const e=o("pplcompedit");if(x<0||!v[x]){e.classList.remove("show");return}e.classList.add("show");const t=v[x];o("pplcompeditId").value=t.id,o("pplcompeditName").value=t.name,o("pplcompeditGlyph").value=t.glyph,o("pplcompeditColor").value=t.color||"#8fb7ff",o("pplcompeditRef").value=t.refText;const n=o("pplcompeditRace");if(!n.options.length)for(const y of to){const k=document.createElement("option");k.value=y,n.appendChild(k)}for(const y of Array.from(n.options))y.textContent=vt(y.value);n.value=t.race;const c=o("pplcompeditPortrait"),r=j(oe,Ce(t));r?c.src=r:c.removeAttribute("src");const d=o("pplcompcur");d.innerHTML="";const l=t.refText.trim(),a=y=>{v[x].refText=y,C=!0,u(),$()};if(l)d.appendChild(U(w,l,de(A,l),!0,a));else{const y=document.createElement("span");y.className="note",y.textContent=p("tool.people.pickNone"),d.appendChild(y)}const f=o("pplcompgrid");f.innerHTML="";const i=lt();if(i.length){const y=document.createElement("div");y.className="mpickhead",y.textContent=p("tool.smith.modelPickBuiltin"),f.appendChild(y);const k=document.createElement("div");k.className="mpickrow";for(const H of i)k.appendChild(U(w,H,H,H===l,a));f.appendChild(k)}const ae=A??[];if(ae.length){const y=document.createElement("div");y.className="mpickhead",y.textContent=p("tool.smith.modelPickTruth"),f.appendChild(y);const k=document.createElement("div");k.className="mpickrow";for(const H of ae)k.appendChild(U(w,H.id,de(A,H.id),H.id===l,a));f.appendChild(k)}}function le(){const e=o("pplcomppreview");if(e.innerHTML="",E==="default"){for(const t of Oe.slice(1))e.appendChild(X(j(w,{kind:"ally",race:t.race,color:t.color,equipment:{},stats:{...t.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:t.name}),t.name,p("tool.people.defaultChip"),null));return}if(E==="solo"){const t=document.createElement("div");t.className="note",t.textContent=p("tool.people.compNone"),e.appendChild(t);return}if(!v.length){const t=document.createElement("div");t.className="note",t.textContent=p("tool.people.compEmptyCustomNote"),e.appendChild(t);return}v.forEach((t,n)=>e.appendChild(X(j(w,Ce(t)),t.name.trim()||p("tool.people.compDefaultName"),"",()=>{x=n,$()})))}function $(){ht(),ee(),ve(),le(),o("pplcompadd").disabled=v.length>=5,o("pplcomplabel").placeholder=p("tool.people.defaultLabelParty"),Je(),R()}function Ge(){const e=De();o("pplAskHint").classList.toggle("show",!e),o("pplAskBox").classList.toggle("show",!!e)}function xt(){const e=q();return e.ok?JSON.stringify({hero:e.hero,start:e.start}):null}function Ee(){return!!B&&!!Z&&se&&xt()===Z}function R(){const e=o("ppldecide"),t=Ee();e.disabled=!t;const n=o("pplDecideNote");n.textContent=t?"":B?p("tool.people.decideStale"):p("tool.people.decideNeedSave"),o("pplNextStep").classList.toggle("show",Q)}async function Ue(){var n;if(!Ee()||!B)return;const e=q();!e.ok||!await Le(B,{skipReload:!0})||(P=be(P,e.hero,e.start),s=ge((n=P.party)==null?void 0:n.hero),m=!1,B=void 0,Z=void 0,Q=!0,u(),O())}function O(){pe(),V(),W(),J(),Ge(),R(),Je(),$()}async function G(){try{const e=await(await fetch(L("/api/tables/proposals"))).json();Rt(o("pplprops"),e.proposals??[],{tag:()=>p("tool.people.capTag"),onView:t=>{qe(t)},onPromote:t=>{Le(t)},onArchive:t=>{bt(t)}}),o("ppllive").textContent="· live",se=!0}catch{o("pplprops").innerHTML=`<div class="note">${p("tool.common.devOff")}</div>`,o("ppllive").textContent=p("tool.common.devOff"),se=!1}o("pplsave").disabled=!se}async function qe(e){var t,n,c,r;if(!((m||C)&&!await At(p("tool.common.confirmReplaceDraft"),{ok:p("tool.common.confirmReplaceOk"),danger:!0})))try{const d=await(await fetch(L(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),l=(n=(t=d.docs)==null?void 0:t[0])==null?void 0:n.tables.party;s=ge(l==null?void 0:l.hero),m=!0;const a=ye(l);E=a.mode,v=a.members,C=!0,x=-1,u(),O(),g(),b(p("tool.people.loadedProp",{name:((r=(c=d.docs)==null?void 0:c[0])==null?void 0:r.name)??e}))}catch(d){b(d.message,!0)}}async function Le(e,t={}){try{return await z(L("/api/tables/promote"),{proposalId:e}),b(p("tool.people.promoted")),m=!1,C=!1,g(),G(),t.skipReload||fe(!0),!0}catch(n){return Ht(n,{base:"/api/tables",wapi:L,proposalId:e,onView:()=>{qe(e)},onRebased:()=>{b(p("tool.conflict.rebased")),G()}})||b(n.message,!0),!1}}async function bt(e){try{await z(L("/api/tables/archive"),{proposalId:e}),b(p("tool.people.archived")),G()}catch(t){b(t.message,!0)}}async function Se(){const e=q();if(!e.ok){b(`✗ ${e.error}`,!0);return}const n=o(T==="comp"?"pplcomplabel":"ppllabel").value.trim()||p(T==="comp"?"tool.people.defaultLabelParty":"tool.people.defaultLabel"),c=await ke(),r=be(c,e.hero,e.start),d={formatVersion:Tt,id:"tables",name:n,tables:r,createdAt:Ie(),updatedAt:Ie()};try{const l=await z(L("/api/tables/proposal"),{tables:d,label:n,createdBy:"user"});b(p("tool.people.saved",{name:n})),B=l.id,Z=JSON.stringify({hero:e.hero,start:e.start}),Q=!0,u(),G(),R()}catch(l){b(l.message,!0)}}function Ke(e,t){const n=new Set(Me().map(d=>d.id)),c=d=>{if(!d||typeof d!="object"||!d.parts)return[];const l=d.parts;return Object.values(l).map(a=>typeof a=="string"?a:a.id).filter(a=>!n.has(a))},r=new Set(c(e.modelRef));for(const d of t??[])for(const l of c(d.modelRef))r.add(l);return[...r]}function gt(e,t){const n={};return Object.keys(e).length&&(n.hero=e),t!==void 0&&(n.start=t),n}async function Ve(){const e=q();if(!e.ok){b(`✗ ${e.error}`,!0);return}const t=Ke(e.hero,e.start);if(t.length){b(p("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}Xt("party",gt(e.hero,e.start),h.world(),K?{partsShelf:K}:void 0).catch(n=>b(n.message,!0))}async function Ye(){const e=q();if(!e.ok){b(`✗ ${e.error}`,!0);return}const t=Ke(e.hero,e.start);if(t.length){b(p("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}const n=window.open("","_blank"),c=await ke(),r=be(c,e.hero,e.start),d=`dungeon.html#pack=${encodeURIComponent(Wt(r,`people preview (${h.world()})`,ne.length?{parts:ne}:void 0))}`;n?n.location.href=d:window.open(d,"_blank")}o("ppltry").addEventListener("click",()=>{Ve()}),o("pplplay").addEventListener("click",()=>{Ye()}),o("pplcomptry").addEventListener("click",()=>{Ve()}),o("pplcompplay").addEventListener("click",()=>{Ye()});let Ne=!1;function Ze(){try{const e=localStorage.getItem(ze);if(!e)return;const t=JSON.parse(e);if(t.world!==h.world())return;if(Qt(t.at)){localStorage.removeItem(ze);return}localStorage.removeItem(ze),Ne=!0;const n={...s},c=m;s.refText=ie(t.ref),m=!0,u(),M("hero"),t.shelf&&ue(t.shelf).then(()=>{u(),O()}),O(),g(),b(p("tool.people.fromParts"));const r=document.createElement("button");r.type="button",r.textContent=p("tool.people.handoffUndo"),r.addEventListener("click",()=>{s=n,m=c,u(),O(),g()}),o("pplmsg").appendChild(r)}catch{}}o("ppltabList").addEventListener("click",()=>M("list")),o("ppltabHero").addEventListener("click",()=>M("hero")),o("ppltabComp").addEventListener("click",()=>M("comp")),o("pplname").addEventListener("input",e=>{s.name=e.target.value,m=!0,u(),J(),R()}),o("pplname").addEventListener("blur",()=>g()),o("pplglyph").addEventListener("input",e=>{s.glyph=e.target.value,m=!0,u(),R()}),o("pplglyph").addEventListener("blur",()=>g()),o("pplcolor").addEventListener("input",e=>{s.color=e.target.value,m=!0,u(),J(),R()}),o("pplcolor").addEventListener("blur",()=>g()),o("pplref").addEventListener("change",e=>{s.refText=e.target.value,m=!0,u(),V(),W(),J(),R(),g()}),o("ppllabel").addEventListener("input",u),o("pplsave").addEventListener("click",()=>{Se()}),o("pplcompsave").addEventListener("click",()=>{Se()}),o("ppldecide").addEventListener("click",()=>{Ue()}),o("pplNextGoals").addEventListener("click",()=>h.navigate("goals"));const Te=o("pplAskInput"),Pe=o("pplAskBtn"),he=o("pplAskStatus");function I(e,t=!1){he.textContent=e,he.className=t?"bad":"ok"}function Qe(){return!!S&&s.refText===S.appliedRefText}function We(){if(S){if(!Qe()){S=void 0,u(),I("");return}s.refText=S.prevRefText,m=S.prevDirty,S=void 0,u(),pe(),V(),W(),J(),R(),g(),I(p("tool.parts.ask.undone"))}}function yt(){if(S){if(!Qe()){S=void 0,u();return}I(p("tool.people.ask.restoredUndo")),he.appendChild(rt(S.rows,S.note,We))}}async function Ae(){const e=Te.value.trim();if(!e)return;const t=De();if(!t){I(p("tool.people.ask.needCfg"),!0);return}Pe.disabled=!0,I(p("tool.people.ask.working"));try{const n=Me().map(k=>({id:k.id,name:k.name,slot:k.slot})),c=new Set(n.map(k=>k.id)),r=Object.keys(Bt),d={...s},l=m,a=mt(d.refText);let f,i;if(a){const{system:k,user:H}=Gt(e,a,n,r),_=await nt(t,k,H);if(!_.ok){I(_.maybeCors?p("tool.studio.llm.corsFail"):p("tool.people.ask.fail",{err:_.error}),!0);return}const F=Ut(_.text,c);if(!F.ok){I(p("tool.people.ask.fail",{err:F.error}),!0);return}f=qt(a,F.patch),i=F.note}else{const{system:k,user:H}=Kt(e,n,r),_=await nt(t,k,H);if(!_.ok){I(_.maybeCors?p("tool.studio.llm.corsFail"):p("tool.people.ask.fail",{err:_.error}),!0);return}const F=Vt(_.text,c,new Set(r));if(!F.ok){I(p("tool.people.ask.fail",{err:F.error}),!0);return}f=F.ref,i=F.note}const ae=Yt(a,f),y=Zt(e,f,i);s.refText=ie(f),m=!0,S={prevRefText:d.refText,prevDirty:l,appliedRefText:s.refText,...i?{note:i}:{},rows:ae},u(),pe(),V(),W(),J(),R(),g(),I(p("tool.people.ask.done")),he.appendChild(rt(ae,i,We,y))}finally{Pe.disabled=!1}}Pe.addEventListener("click",()=>{Ae()}),Te.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Ae())}),o("pplAskConnect").addEventListener("click",()=>{var e;(e=document.getElementById("stullmbtn"))==null||e.click()});const te=document.getElementById("stullmdlg"),Xe=()=>Ge();te==null||te.addEventListener("close",Xe);const Re=o("pplparts");Re.textContent=p("tool.people.partsLink"),Re.addEventListener("click",()=>{const e=s.refText.trim();let t;if(e)try{const n=re(e);if(n&&typeof n=="object"&&"rig"in n){const c={world:h.world(),ref:n,at:new Date().toISOString()};localStorage.setItem(_t,JSON.stringify(c)),t={intake:"1"}}}catch{}h.navigate("parts",t)});const He=o("pplsculpt");He.textContent=p("tool.people.sculptLink"),He.addEventListener("click",()=>h.navigate("sculpt"));const xe=e=>{E=e,C=!0,x=-1,u(),$(),g()};o("pplmodeDefault").addEventListener("change",()=>xe("default")),o("pplmodeSolo").addEventListener("change",()=>xe("solo")),o("pplmodeCustom").addEventListener("change",()=>xe("custom")),o("pplcompadd").addEventListener("click",()=>{if(v.length>=5){b(p("tool.people.compFull"),!0);return}v.push(oo(v.length+1)),x=v.length-1,C=!0,u(),$(),g()}),o("pplcompremove").addEventListener("click",()=>{x<0||(v.splice(x,1),x=-1,C=!0,u(),$(),g())});const Y=e=>{x<0||!v[x]||(v[x]={...v[x],...e},C=!0,u())};o("pplcompeditId").addEventListener("input",e=>{Y({id:e.target.value}),ee()}),o("pplcompeditId").addEventListener("blur",()=>g()),o("pplcompeditName").addEventListener("input",e=>{Y({name:e.target.value}),ee(),le()}),o("pplcompeditName").addEventListener("blur",()=>g()),o("pplcompeditGlyph").addEventListener("input",e=>{Y({glyph:e.target.value})}),o("pplcompeditGlyph").addEventListener("blur",()=>g()),o("pplcompeditColor").addEventListener("input",e=>{Y({color:e.target.value}),ve(),ee(),le()}),o("pplcompeditColor").addEventListener("blur",()=>g()),o("pplcompeditRace").addEventListener("change",e=>{Y({race:e.target.value}),ve(),ee(),le(),g()}),o("pplcompeditRef").addEventListener("change",e=>{Y({refText:e.target.value}),ve(),ee(),le(),g()}),o("pplcomplabel").addEventListener("input",u);const kt=h.events.on("tables",()=>{G(),fe()}),wt=h.events.on("sculpt",()=>{A=null,w.clear(),oe.clear(),Fe()}),Ct=h.events.on("parts",()=>{ue(K).then(()=>{O()})}),Et=Dt(()=>{ot(N),Re.textContent=p("tool.people.partsLink"),He.textContent=p("tool.people.sculptLink"),O(),G()});window.cdPeople={draft:()=>({...s}),set:e=>{s={...s,...e},m=!0,u(),O()},valid:()=>$e(),comp:()=>({mode:E,members:v.map(e=>({...e}))}),setCompMode:e=>xe(e),setMember:(e,t)=>{x=e,Y(t),$()},addMember:()=>{o("pplcompadd").dispatchEvent(new Event("click"))},removeMember:e=>{x=e,v.splice(e,1),x=-1,C=!0,u(),$()},validParty:()=>q(),save:()=>Se(),promote:e=>Le(e),refresh:()=>G(),reload:(e=!0)=>fe(e),dirty:()=>m,compDirty:()=>C,shelf:e=>(e!==void 0&&ue(e??void 0).then(()=>O()),K??""),tab:e=>(e&&M(e),T),askHero:e=>(Te.value=e,Ae()),decide:()=>Ue(),decideEnabled:()=>Ee(),lastSavedProposalId:()=>B,showNextStep:()=>Q,llmConnected:()=>!!De()},M("hero");const et=ct();return(async()=>(await ue(Be),et&&!Ne&&(m||C)&&b(p("tool.common.restored")),await fe(!et&&!Ne),await Promise.all([G(),Fe()]),Ze(),yt()))(),{applyParams(e){const t=e.get("tab");(t==="list"||t==="hero"||t==="comp")&&M(t),e.get("handoff")==="parts"&&Ze()},dispose(){kt(),wt(),Ct(),Et(),te==null||te.removeEventListener("close",Xe),u(),w.dispose(),oe.dispose(),delete window.cdPeople}}}};export{ze as HANDOFF_KEY,po as forgetPeopleEditorDraft,Eo as peoplePanel,no as syncPeopleEditorDraft};
