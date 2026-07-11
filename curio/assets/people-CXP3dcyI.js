import{x as Q,E as Ye,F as Ze,H as We,w as de,d as Qe}from"./tables-CeMbYj3G.js";import{T as Xe}from"./tables-doc-Dj1yoess.js";import{r as et}from"./tool-shelf-w4U13pug.js";import{o as tt}from"./studio-cz5LGzS3.js";import{c as Ne,t as a,g as ot}from"./world-ui-GIWH7IUu.js";import{c as Pe,p as _,a as X,b as Re,f as nt,d as pt}from"./modelref-picker-COnx4CDd.js";import{j as lt,k as at,_ as Se,l as rt,g as it}from"./render-voxel-ByLZI2rX.js";import{a as dt}from"./voxmodel-BvUzcFRp.js";import{P as st}from"./parts-workbench-CcuJ6I6v.js";import{d as se}from"./dungeon-C4wSHy-I.js";import{p as ct}from"./tuner-core-DO9AaxZD.js";import{o as mt}from"./testbed-D0H5NTd6.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./creator-auth-C2cecs39.js";import"./three.module-B1bP4c5T.js";import"./prefab-DsCyDzqv.js";import"./gamepack-BTweR0v7.js";import"./playtest-core-Y_OPZXI-.js";const ut=`<!-- ============================================================
     §A 人パネル（👤 people）の markup（部分 HTML・?raw import）。
     goals.html と同じ流儀：style 込み・id はパネル内ローカル・data-i18n＝tool.* キー。
     憲章（CHARTER-authoring-ui.md draft）の最初の実例＝画面の順序は §5：
     ①今の状態 ②いま決める一つ（姿を選ぶ）③プレビュー ④詳細 ⑤下書き保存 ⑥試す ⑦次の工程。
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
  /* ── 主人公タブ ── */
  #pplhero { flex: 1; min-height: 0; }
  #pplheroL { flex: 1.2; min-width: 0; overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; background: #0d1117; }
  #pplheroR { flex: 1; min-width: 260px; max-width: 380px; border-left: 1px solid var(--line); overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; }
  #pplhero h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  #ppl .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; flex-wrap: wrap; }
  #ppl .kv .lbl { color: var(--muted); font-size: 11px; min-width: 5.6em; }
  #ppl .note { color: var(--muted); font-size: 11px; }
  #ppl .statusline { font-size: 12px; }
  #ppltruth .card { border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); display: flex; align-items: center; gap: 10px; }
  #ppltruth img { width: 56px; height: 56px; border-radius: 6px; background: #0d1117; image-rendering: pixelated; }
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
  #pplportrait { width: 100%; max-width: 220px; aspect-ratio: 1; border-radius: 10px; background: #0d1117; image-rendering: pixelated; border: 1px solid var(--line); align-self: center; }
  #ppladv textarea { width: 100%; min-height: 80px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; }
  #ppladv summary { cursor: pointer; color: var(--muted); font-size: 11px; }
  #pplactions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  /* ── 仲間タブ（§8-1） ── */
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
  /* 憲章 §11：小画面では情報を畳むが能力を削らない＝左右2段を縦積みに（親指で届く） */
  @media (max-width: 700px) {
    #pplhero.show, #pplcomp.show { flex-direction: column; overflow-y: auto; }
    #pplheroL, #pplheroR, #pplcompL, #pplcompR { flex: none; overflow: visible; max-width: none; min-width: 0; border-left: none; }
    #pplheroR, #pplcompR { border-top: 1px solid var(--line); }
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
      <div id="pplheroL">
        <h2 data-i18n="tool.people.truthHead">確定版のいま</h2>
        <div id="ppltruth"></div>
        <h2 data-i18n="tool.people.pickHead">主人公の姿を選ぶ</h2>
        <div class="mpickcur" id="pplcur"></div>
        <div class="mpickgrid" id="pplgrid"></div>
        <div class="kv">
          <button type="button" id="pplparts"></button>
          <span class="note">／</span>
          <button type="button" id="pplsculpt"></button>
        </div>
        <div class="kv"><span class="lbl" data-i18n="tool.people.name">名前</span><input type="text" id="pplname" maxlength="40" /></div>
        <div class="kv"><span class="lbl" data-i18n="tool.people.glyph">記号（1-2字）</span><input type="text" id="pplglyph" maxlength="2" style="width:4em" /></div>
        <div class="kv"><span class="lbl" data-i18n="tool.people.color">色</span><input type="color" id="pplcolor" /></div>
        <details id="ppladv">
          <summary data-i18n="tool.people.advanced">詳細（手打ち）</summary>
          <textarea id="pplref" spellcheck="false"></textarea>
          <div class="note" data-i18n="tool.people.advancedNote">姿の指し方：組込キー／彫った姿の id／{"rig":…,"parts":…} の JSON（部品の組み合わせ）</div>
        </details>
        <div id="pplactions">
          <input type="text" id="ppllabel" placeholder="" style="min-width: 12em" />
          <button type="button" id="pplsave" class="big" data-i18n="tool.people.saveDraft">下書きとして保存</button>
          <button type="button" id="ppltry" data-i18n="tool.people.tryDraft">▶ この下書きで試す</button>
          <button type="button" id="pplplay" data-i18n="tool.people.playDraft">▶ この下書きで遊ぶ</button>
        </div>
      </div>
      <div id="pplheroR">
        <h2 data-i18n="tool.people.previewHead">プレビュー（実機と同じ組み方）</h2>
        <img id="pplportrait" alt="" />
        <div class="statusline" id="pplbody"></div>
        <div class="note" id="pplnote"></div>
        <h2 data-i18n="tool.people.propsHead">下書きの棚</h2>
        <div id="pplprops"></div>
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
          <button type="button" id="pplcompsave" class="big" data-i18n="tool.people.saveDraft">下書きとして保存</button>
          <button type="button" id="pplcomptry" data-i18n="tool.people.tryDraft">▶ この下書きで試す</button>
          <button type="button" id="pplcompplay" data-i18n="tool.people.playDraft">▶ この下書きで遊ぶ</button>
        </div>
      </div>
      <div id="pplcompR">
        <h2 data-i18n="tool.people.compPreviewHead">編成プレビュー</h2>
        <div class="pgrid" id="pplcomppreview"></div>
      </div>
    </section>
  </div>
</div>
`,He=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),Me="cdPeopleP1",Oe="cdPeopleHandoff",Ae=()=>({name:"",glyph:"",color:"",refText:""}),ft=Ye.options,vt=I=>({id:`comp${I}`,name:"",glyph:"",color:"",race:"human",refText:""}),At={id:"people",async mount(I,k){const{wapi:R,postJson:ee}=k.api;I.innerHTML=ut,Ne(I);const n=e=>I.querySelector(`#${e}`),x=(e,t=!1)=>{const o=n("pplmsg");o.textContent=e,o.style.color=t?"#ff7a6e":"#7fd17f"};let C="hero",c=Ae(),g=!1,y="default",m=[],w=!1,u=-1,S={},N=null,te=!1;const H=se[0],b=Pe(96),B=Pe(220),v=()=>{var e;try{sessionStorage.setItem(Me,JSON.stringify({v:1,world:k.world(),draft:c,dirty:g,shelf:O,label:n("ppllabel").value,compMode:y,compMembers:m,compDirty:w,complabel:((e=n("pplcomplabel"))==null?void 0:e.value)??""}))}catch{}};let ce;const De=()=>{try{const e=sessionStorage.getItem(Me);if(!e)return!1;const t=JSON.parse(e);return t.v!==1||t.world!==k.world()?!1:(c={...Ae(),...t.draft},g=t.dirty,y=t.compMode??"default",m=t.compMembers??[],w=t.compDirty??!1,ce=t.shelf,n("ppllabel").value=t.label??"",n("pplcomplabel").value=t.complabel??"",!0)}catch{return!1}};function me(){const e={};return c.name.trim()&&(e.name=c.name.trim()),c.glyph.trim()&&(e.glyph=c.glyph.trim()),c.color.trim()&&(e.color=c.color.trim()),c.refText.trim()&&(e.modelRef=Q(c.refText.trim())),e}function ue(e){return{name:(e==null?void 0:e.name)??"",glyph:(e==null?void 0:e.glyph)??"",color:(e==null?void 0:e.color)??"",refText:(e==null?void 0:e.modelRef)!==void 0?de(e.modelRef):""}}function fe(){try{const e=me();return Object.keys(e).length&&We.parse(e),{ok:!0,hero:e}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}function ze(e){const t={id:e.id.trim(),name:e.name.trim()};return e.glyph.trim()&&(t.glyph=e.glyph.trim()),e.color.trim()&&(t.color=e.color.trim()),e.race.trim()&&(t.race=e.race.trim()),e.refText.trim()&&(t.modelRef=Q(e.refText.trim())),t}function Ie(e){return{id:e.id,name:e.name,glyph:e.glyph??"",color:e.color??"",race:e.race??"human",refText:e.modelRef!==void 0?de(e.modelRef):""}}function oe(e){const t=e==null?void 0:e.start;return t===void 0?{mode:"default",members:[]}:t.length===0?{mode:"solo",members:[]}:{mode:"custom",members:t.map(Ie)}}function ve(){if(y!=="default")return y==="solo"?[]:m.map(ze)}function q(){try{const e=me(),t=ve(),o={};return Object.keys(e).length&&(o.hero=e),t!==void 0&&(o.start=t),Object.keys(o).length&&Ze.parse(o),{ok:!0,hero:e,start:t}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}let ne="",O,F=[];async function G(e){try{const t=e?`/api/parts/proposal?id=${encodeURIComponent(e)}`:"/api/parts/truth",o=await fetch(R(t));if(!o.ok)throw new Error(`HTTP ${o.status}`);F=(await o.json()).parts??[],Se(F.map(p=>dt(p))),O=e,ne=e?a("tool.people.shelfProposal"):""}catch{Se([]),F=[],O=void 0,ne=""}rt(),b.clear(),B.clear()}async function pe(){var e,t;try{const o=await fetch(R("/api/tables/truth"));if(o.ok)return((t=(e=(await o.json()).docs)==null?void 0:e[0])==null?void 0:t.tables)??{}}catch{}return{}}async function K(e=!1){var t;if(S=await pe(),(e||!g)&&(c=ue((t=S.party)==null?void 0:t.hero),g=!1),e||!w){const o=oe(S.party);y=o.mode,m=o.members,w=!1,u=-1}M()}async function he(){N==null&&(N=await nt(R)),Y()}function L(e){C=e,n("ppltabList").classList.toggle("on",C==="list"),n("ppltabHero").classList.toggle("on",C==="hero"),n("ppltabComp").classList.toggle("on",C==="comp"),n("ppllist").classList.toggle("show",C==="list"),n("pplhero").classList.toggle("show",C==="hero"),n("pplcomp").classList.toggle("show",C==="comp")}function U(e){return{kind:"hero",race:H.race,equipment:{},stats:{...H.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name??H.name,glyph:e.glyph??H.glyph,color:e.color??H.color,...e.modelRef!==void 0?{modelRef:e.modelRef}:{}}}function le(e){const t=e.refText.trim()?Q(e.refText.trim()):void 0;return{kind:"ally",race:e.race||"human",color:e.color||"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name.trim()||a("tool.people.compDefaultName"),...t!==void 0?{modelRef:t}:{}}}function E(e,t){try{return e.shoot(pt(t))}catch(o){return console.warn("people プレビューが組めない",o),null}}function je(){var f;const e=n("ppltruth");e.innerHTML="";const t=document.createElement("div");t.className="card";const o=(f=S.party)==null?void 0:f.hero,r=document.createElement("img"),p=E(b,U(o??{}));p&&(r.src=p);const d=document.createElement("div"),s=document.createElement("div");s.textContent=(o==null?void 0:o.name)??H.name;const l=document.createElement("div");l.className="note",l.textContent=o?a("tool.people.truthAuthored"):a("tool.people.defaultNote"),d.append(s,l),t.append(r,d),e.appendChild(t)}function V(){const e=fe(),t=n("pplportrait"),o=n("pplbody");if(!e.ok){t.removeAttribute("src"),o.textContent=`✗ ${e.error}`,o.style.color="#ff7a6e";return}o.style.color="";const r=E(B,U(e.hero));r?t.src=r:t.removeAttribute("src");const p=U(e.hero);o.textContent=lt(p)?`${a("tool.people.bodyPct")}: ${at(p)}%`:"",n("pplnote").textContent=ne}function Y(){const e=n("pplcur");e.innerHTML="";const t=document.createElement("div");t.className="mpickhead",t.textContent=a("tool.people.pickCurrent");const o=c.refText.trim(),r=l=>{c.refText=l,g=!0,v(),Y(),V()};if(o)e.append(t,_(b,o,X(N,o),!0,r));else{const l=document.createElement("span");l.className="note",l.textContent=a("tool.people.pickNone"),e.append(t,l)}const p=n("pplgrid");p.innerHTML="";const d=Re();if(d.length){const l=document.createElement("div");l.className="mpickhead",l.textContent=a("tool.smith.modelPickBuiltin"),p.appendChild(l);const f=document.createElement("div");f.className="mpickrow";for(const i of d)f.appendChild(_(b,i,i,i===o,r));p.appendChild(f)}const s=N??[];if(s.length){const l=document.createElement("div");l.className="mpickhead",l.textContent=a("tool.smith.modelPickTruth"),p.appendChild(l);const f=document.createElement("div");f.className="mpickrow";for(const i of s)f.appendChild(_(b,i.id,X(N,i.id),i.id===o,r));p.appendChild(f)}}function $e(){n("pplname").value=c.name,n("pplglyph").value=c.glyph,n("pplcolor").value=c.color||H.color,n("pplref").value=c.refText,n("ppllabel").placeholder=a("tool.people.defaultLabel")}function xe(){var s,l,f;const e=n("ppllistHero");e.innerHTML="";const t=(s=S.party)==null?void 0:s.hero;e.appendChild(j(E(b,U(t??{})),(t==null?void 0:t.name)??H.name,t?"":a("tool.people.defaultChip"),()=>{L("hero")}));const o=n("ppllistComp");o.innerHTML="";const r=w?{start:ve()}:{mode:oe(S.party).mode,start:(l=S.party)==null?void 0:l.start};if(r.start===void 0)for(const i of se.slice(1))o.appendChild(j(E(b,{kind:"ally",race:i.race,color:i.color,equipment:{},stats:{...i.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name}),i.name,a("tool.people.defaultChip"),()=>L("comp")));else if(r.start.length===0){const i=document.createElement("div");i.className="note",i.textContent=a("tool.people.compNone"),o.appendChild(i)}else for(const i of r.start)o.appendChild(j(E(b,{kind:"ally",race:i.race??"human",color:i.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name,...i.modelRef!==void 0?{modelRef:i.modelRef}:{}}),i.name,"",()=>L("comp")));const p=n("ppllistTown");p.innerHTML="";const d=(S.town??Qe()).npcs??[];for(const i of d)p.appendChild(j(E(b,{kind:"ally",race:i.race,color:i.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:i.name??i.id,...i.modelRef!==void 0?{modelRef:i.modelRef}:{}}),((f=i.names)==null?void 0:f[ot()])??i.name??i.id,"",()=>k.navigate("forge",{tab:"town"})));if(!d.length){const i=document.createElement("div");i.className="note",i.textContent=a("tool.people.noTownFolk"),p.appendChild(i)}}function j(e,t,o,r){const p=document.createElement("div");p.className="pcard"+(r?"":" plain");const d=document.createElement("img");e&&(d.src=e);const s=document.createElement("div");if(s.className="nm",s.textContent=t,p.append(d,s),o){const l=document.createElement("div");l.className="sub",l.textContent=o,p.appendChild(l)}return r&&p.addEventListener("click",r),p}function _e(e){return a(`tool.town.race.${e}`)}function Be(){n("pplmodeDefault").checked=y==="default",n("pplmodeSolo").checked=y==="solo",n("pplmodeCustom").checked=y==="custom",n("pplcompCustomBox").style.display=y==="custom"?"":"none"}function $(){const e=n("pplcomplist");e.innerHTML="",m.forEach((t,o)=>{const r=document.createElement("div");r.className="crow"+(o===u?" editing":"");const p=document.createElement("img"),d=E(b,le(t));d&&(p.src=d);const s=document.createElement("div");s.className="nm",s.textContent=t.name.trim()||a("tool.people.compDefaultName");const l=document.createElement("button");l.type="button",l.textContent=a("tool.people.compEditHead"),l.addEventListener("click",()=>{u=o,P()}),r.append(p,s,l),e.appendChild(r)})}function Z(){const e=n("pplcompedit");if(u<0||!m[u]){e.classList.remove("show");return}e.classList.add("show");const t=m[u];n("pplcompeditId").value=t.id,n("pplcompeditName").value=t.name,n("pplcompeditGlyph").value=t.glyph,n("pplcompeditColor").value=t.color||"#8fb7ff",n("pplcompeditRef").value=t.refText;const o=n("pplcompeditRace");if(!o.options.length)for(const h of ft){const T=document.createElement("option");T.value=h,o.appendChild(T)}for(const h of Array.from(o.options))h.textContent=_e(h.value);o.value=t.race;const r=n("pplcompeditPortrait"),p=E(B,le(t));p?r.src=p:r.removeAttribute("src");const d=n("pplcompcur");d.innerHTML="";const s=t.refText.trim(),l=h=>{m[u].refText=h,w=!0,v(),P()};if(s)d.appendChild(_(b,s,X(N,s),!0,l));else{const h=document.createElement("span");h.className="note",h.textContent=a("tool.people.pickNone"),d.appendChild(h)}const f=n("pplcompgrid");f.innerHTML="";const i=Re();if(i.length){const h=document.createElement("div");h.className="mpickhead",h.textContent=a("tool.smith.modelPickBuiltin"),f.appendChild(h);const T=document.createElement("div");T.className="mpickrow";for(const z of i)T.appendChild(_(b,z,z,z===s,l));f.appendChild(T)}const Te=N??[];if(Te.length){const h=document.createElement("div");h.className="mpickhead",h.textContent=a("tool.smith.modelPickTruth"),f.appendChild(h);const T=document.createElement("div");T.className="mpickrow";for(const z of Te)T.appendChild(_(b,z.id,X(N,z.id),z.id===s,l));f.appendChild(T)}}function J(){const e=n("pplcomppreview");if(e.innerHTML="",y==="default"){for(const t of se.slice(1))e.appendChild(j(E(b,{kind:"ally",race:t.race,color:t.color,equipment:{},stats:{...t.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:t.name}),t.name,a("tool.people.defaultChip"),null));return}if(y==="solo"){const t=document.createElement("div");t.className="note",t.textContent=a("tool.people.compNone"),e.appendChild(t);return}if(!m.length){const t=document.createElement("div");t.className="note",t.textContent=a("tool.people.compEmptyCustomNote"),e.appendChild(t);return}m.forEach((t,o)=>e.appendChild(j(E(b,le(t)),t.name.trim()||a("tool.people.compDefaultName"),"",()=>{u=o,P()})))}function P(){Be(),$(),Z(),J(),n("pplcompadd").disabled=m.length>=5,n("pplcomplabel").placeholder=a("tool.people.defaultLabelParty"),xe()}function M(){je(),$e(),Y(),V(),xe(),P()}async function A(){try{const e=await(await fetch(R("/api/tables/proposals"))).json();et(n("pplprops"),e.proposals??[],{tag:()=>a("tool.people.capTag"),onView:t=>{Fe(t)},onPromote:t=>{be(t)},onArchive:t=>{Je(t)}}),n("ppllive").textContent="· live",te=!0}catch{n("pplprops").innerHTML=`<div class="note">${a("tool.common.devOff")}</div>`,n("ppllive").textContent=a("tool.common.devOff"),te=!1}n("pplsave").disabled=!te}async function Fe(e){var t,o,r,p;try{const d=await(await fetch(R(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),s=(o=(t=d.docs)==null?void 0:t[0])==null?void 0:o.tables.party;c=ue(s==null?void 0:s.hero),g=!0;const l=oe(s);y=l.mode,m=l.members,w=!0,u=-1,v(),M(),x(a("tool.people.loadedProp",{name:((p=(r=d.docs)==null?void 0:r[0])==null?void 0:p.name)??e}))}catch(d){x(d.message,!0)}}async function be(e){try{await ee(R("/api/tables/promote"),{proposalId:e}),x(a("tool.people.promoted")),g=!1,w=!1,A(),K(!0)}catch(t){x(t.message,!0)}}async function Je(e){try{await ee(R("/api/tables/archive"),{proposalId:e}),x(a("tool.people.archived")),A()}catch(t){x(t.message,!0)}}function ge(e,t,o){const r={...e},p={...e.party??{}};return Object.keys(t).length?p.hero=t:delete p.hero,o!==void 0?p.start=o:delete p.start,Object.keys(p).length?r.party=p:delete r.party,r}async function ae(){const e=q();if(!e.ok){x(`✗ ${e.error}`,!0);return}const o=n(C==="comp"?"pplcomplabel":"ppllabel").value.trim()||a(C==="comp"?"tool.people.defaultLabelParty":"tool.people.defaultLabel"),r=await pe(),p=ge(r,e.hero,e.start),d={formatVersion:Xe,id:"tables",name:o,tables:p,createdAt:He(),updatedAt:He()};try{await ee(R("/api/tables/proposal"),{tables:d,label:o,createdBy:"user"}),x(a("tool.people.saved",{name:o})),A()}catch(s){x(s.message,!0)}}function ye(e,t){const o=new Set(it().map(d=>d.id)),r=d=>{if(!d||typeof d!="object"||!d.parts)return[];const s=d.parts;return Object.values(s).map(l=>typeof l=="string"?l:l.id).filter(l=>!o.has(l))},p=new Set(r(e.modelRef));for(const d of t??[])for(const s of r(d.modelRef))p.add(s);return[...p]}function qe(e,t){const o={};return Object.keys(e).length&&(o.hero=e),t!==void 0&&(o.start=t),o}async function we(){const e=q();if(!e.ok){x(`✗ ${e.error}`,!0);return}const t=ye(e.hero,e.start);if(t.length){x(a("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}mt("party",qe(e.hero,e.start),k.world(),O?{partsShelf:O}:void 0).catch(o=>x(o.message,!0))}async function ke(){const e=q();if(!e.ok){x(`✗ ${e.error}`,!0);return}const t=ye(e.hero,e.start);if(t.length){x(a("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}const o=window.open("","_blank"),r=await pe(),p=ge(r,e.hero,e.start),d=`dungeon.html#pack=${encodeURIComponent(ct(p,`people preview (${k.world()})`,F.length?{parts:F}:void 0))}`;o?o.location.href=d:window.open(d,"_blank")}n("ppltry").addEventListener("click",()=>{we()}),n("pplplay").addEventListener("click",()=>{ke()}),n("pplcomptry").addEventListener("click",()=>{we()}),n("pplcompplay").addEventListener("click",()=>{ke()});let Ce=!1;function Le(){try{const e=localStorage.getItem(Oe);if(!e)return;const t=JSON.parse(e);if(t.world!==k.world())return;localStorage.removeItem(Oe),Ce=!0,c.refText=de(t.ref),g=!0,v(),L("hero"),t.shelf&&G(t.shelf).then(()=>{v(),M()}),M(),x(a("tool.people.fromParts"))}catch{}}n("ppltabList").addEventListener("click",()=>L("list")),n("ppltabHero").addEventListener("click",()=>L("hero")),n("ppltabComp").addEventListener("click",()=>L("comp")),n("pplname").addEventListener("input",e=>{c.name=e.target.value,g=!0,v()}),n("pplglyph").addEventListener("input",e=>{c.glyph=e.target.value,g=!0,v()}),n("pplcolor").addEventListener("input",e=>{c.color=e.target.value,g=!0,v(),V()}),n("pplref").addEventListener("change",e=>{c.refText=e.target.value,g=!0,v(),Y(),V()}),n("ppllabel").addEventListener("input",v),n("pplsave").addEventListener("click",()=>{ae()}),n("pplcompsave").addEventListener("click",()=>{ae()});const re=n("pplparts");re.textContent=a("tool.people.partsLink"),re.addEventListener("click",()=>{const e=c.refText.trim();let t;if(e)try{const o=Q(e);if(o&&typeof o=="object"&&"rig"in o){const r={world:k.world(),ref:o};localStorage.setItem(st,JSON.stringify(r)),t={intake:"1"}}}catch{}k.navigate("parts",t)});const ie=n("pplsculpt");ie.textContent=a("tool.people.sculptLink"),ie.addEventListener("click",()=>k.navigate("sculpt"));const W=e=>{y=e,w=!0,u=-1,v(),P()};n("pplmodeDefault").addEventListener("change",()=>W("default")),n("pplmodeSolo").addEventListener("change",()=>W("solo")),n("pplmodeCustom").addEventListener("change",()=>W("custom")),n("pplcompadd").addEventListener("click",()=>{if(m.length>=5){x(a("tool.people.compFull"),!0);return}m.push(vt(m.length+1)),u=m.length-1,w=!0,v(),P()}),n("pplcompremove").addEventListener("click",()=>{u<0||(m.splice(u,1),u=-1,w=!0,v(),P())});const D=e=>{u<0||!m[u]||(m[u]={...m[u],...e},w=!0,v())};n("pplcompeditId").addEventListener("input",e=>{D({id:e.target.value}),$()}),n("pplcompeditName").addEventListener("input",e=>{D({name:e.target.value}),$(),J()}),n("pplcompeditGlyph").addEventListener("input",e=>{D({glyph:e.target.value})}),n("pplcompeditColor").addEventListener("input",e=>{D({color:e.target.value}),Z(),$(),J()}),n("pplcompeditRace").addEventListener("change",e=>{D({race:e.target.value}),Z(),$(),J()}),n("pplcompeditRef").addEventListener("change",e=>{D({refText:e.target.value}),Z(),$(),J()}),n("pplcomplabel").addEventListener("input",v);const Ge=k.events.on("tables",()=>{A(),K()}),Ke=k.events.on("sculpt",()=>{N=null,b.clear(),B.clear(),he()}),Ue=k.events.on("parts",()=>{G(O).then(()=>{M()})}),Ve=tt(()=>{Ne(I),re.textContent=a("tool.people.partsLink"),ie.textContent=a("tool.people.sculptLink"),M(),A()});window.cdPeople={draft:()=>({...c}),set:e=>{c={...c,...e},g=!0,v(),M()},valid:()=>fe(),comp:()=>({mode:y,members:m.map(e=>({...e}))}),setCompMode:e=>W(e),setMember:(e,t)=>{u=e,D(t),P()},addMember:()=>{n("pplcompadd").dispatchEvent(new Event("click"))},removeMember:e=>{u=e,m.splice(e,1),u=-1,w=!0,v(),P()},validParty:()=>q(),save:()=>ae(),promote:e=>be(e),refresh:()=>A(),reload:(e=!0)=>K(e),dirty:()=>g,compDirty:()=>w,shelf:e=>(e!==void 0&&G(e??void 0).then(()=>M()),O??""),tab:e=>(e&&L(e),C)},L("hero");const Ee=De();return(async()=>(await G(ce),Ee&&x(a("tool.common.restored")),await K(!Ee&&!Ce),await Promise.all([A(),he()]),Le()))(),{applyParams(e){const t=e.get("tab");(t==="list"||t==="hero"||t==="comp")&&L(t),e.get("handoff")==="parts"&&Le()},dispose(){Ge(),Ke(),Ue(),Ve(),v(),b.dispose(),B.dispose(),delete window.cdPeople}}}};export{Oe as HANDOFF_KEY,At as peoplePanel};
