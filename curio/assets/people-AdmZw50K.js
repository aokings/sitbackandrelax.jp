import{P as we,i as ee,j as ke,d as Le}from"./tables-C-kzdGR2.js";import{T as Te}from"./tables-doc-ZUS1HD9V.js";import{r as Ce}from"./tool-shelf-BOeHhi1w.js";import{o as Ee}from"./studio-Qv5QKBOe.js";import{d as te,t as l,g as Pe}from"./world-ui-D_LU_VBO.js";import{c as oe,p as q,a as ne,b as He,f as Se,d as Ne}from"./modelref-picker-BUSN8OhM.js";import{i as Oe,o as Re,q as ze,_ as ae,g as Ae}from"./render-voxel-D6YTgmsU.js";import{v as Me}from"./voxmodel-DxKMXTPW.js";import{d as re}from"./dungeon-DfMPYUEv.js";import{p as je}from"./tuner-core-C8qXj8wr.js";import{o as $e}from"./testbed-BDMxUxRM.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./creator-auth-C2cecs39.js";import"./three.module-DegpxYfP.js";import"./prefab-BBg1g5_j.js";import"./gamepack-40xPumJ3.js";import"./playtest-core-N8nLbbAi.js";const De=`<!-- ============================================================
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
  /* 憲章 §11：小画面では情報を畳むが能力を削らない＝左右2段を縦積みに（親指で届く） */
  @media (max-width: 700px) {
    #pplhero.show { flex-direction: column; overflow-y: auto; }
    #pplheroL, #pplheroR { flex: none; overflow: visible; max-width: none; min-width: 0; border-left: none; }
    #pplheroR { border-top: 1px solid var(--line); }
  }
</style>
<div id="ppl">
  <div id="pplhead">
    <b data-i18n="tool.people.h1">人（主人公・仲間・街の人）</b>
    <button type="button" id="ppltabList" class="tab" data-i18n="tool.people.tabList">一覧</button>
    <button type="button" id="ppltabHero" class="tab" data-i18n="tool.people.tabHero">主人公</button>
    <span id="ppllive">…</span>
    <span id="pplmsg"></span>
  </div>
  <div id="pplmain">
    <section id="ppllist">
      <h2 data-i18n="tool.people.heroHead">主人公</h2>
      <div class="pgrid" id="ppllistHero"></div>
      <h2 data-i18n="tool.people.companionsHead">仲間</h2>
      <div class="pgrid" id="ppllistComp"></div>
      <div class="note" data-i18n="tool.people.companionsNote">仲間は今はコード既定（リン・ガロ）。編成の data 化は判断待ち（§8 #1）</div>
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
          <a id="pplparts" href="#" target="_blank" rel="noopener"></a>
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
  </div>
</div>
`,pe=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),le="cdPeopleP1",ie="cdPeopleHandoff",se=()=>({name:"",glyph:"",color:"",refText:""}),ot={id:"people",async mount(N,f){const{wapi:x,postJson:$}=f.api;N.innerHTML=De,te(N);const a=e=>N.querySelector(`#${e}`),c=(e,t=!1)=>{const o=a("pplmsg");o.textContent=e,o.style.color=t?"#ff7a6e":"#7fd17f"};let T="hero",i=se(),m=!1,E={},C=null,D=!1;const g=re[0],h=oe(96),O=oe(220),u=()=>{try{sessionStorage.setItem(le,JSON.stringify({v:1,world:f.world(),draft:i,dirty:m,shelf:y,label:a("ppllabel").value}))}catch{}};let U;const de=()=>{try{const e=sessionStorage.getItem(le);if(!e)return!1;const t=JSON.parse(e);return t.v!==1||t.world!==f.world()?!1:(i={...se(),...t.draft},m=t.dirty,U=t.shelf,a("ppllabel").value=t.label??"",!0)}catch{return!1}};function ce(){const e={};return i.name.trim()&&(e.name=i.name.trim()),i.glyph.trim()&&(e.glyph=i.glyph.trim()),i.color.trim()&&(e.color=i.color.trim()),i.refText.trim()&&(e.modelRef=ke(i.refText.trim())),e}function V(e){return{name:(e==null?void 0:e.name)??"",glyph:(e==null?void 0:e.glyph)??"",color:(e==null?void 0:e.color)??"",refText:(e==null?void 0:e.modelRef)!==void 0?ee(e.modelRef):""}}function P(){try{const e=ce();return Object.keys(e).length&&we.parse(e),{ok:!0,hero:e}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}let _="",y,H=[];async function R(e){try{const t=e?`/api/parts/proposal?id=${encodeURIComponent(e)}`:"/api/parts/truth",o=await fetch(x(t));if(!o.ok)throw new Error(`HTTP ${o.status}`);H=(await o.json()).parts??[],ae(H.map(p=>Me(p))),y=e,_=e?l("tool.people.shelfProposal"):""}catch{ae([]),H=[],y=void 0,_=""}Ae(),h.clear(),O.clear()}async function I(){var e,t;try{const o=await fetch(x("/api/tables/truth"));if(o.ok)return((t=(e=(await o.json()).docs)==null?void 0:e[0])==null?void 0:t.tables)??{}}catch{}return{}}async function z(e=!1){var t;E=await I(),(e||!m)&&(i=V((t=E.party)==null?void 0:t.hero),m=!1),b()}async function K(){C==null&&(C=await Se(x)),j()}function w(e){T=e,a("ppltabList").classList.toggle("on",T==="list"),a("ppltabHero").classList.toggle("on",T==="hero"),a("ppllist").classList.toggle("show",T==="list"),a("pplhero").classList.toggle("show",T==="hero")}function A(e){return{kind:"hero",race:g.race,equipment:{},stats:{...g.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name??g.name,glyph:e.glyph??g.glyph,color:e.color??g.color,...e.modelRef!==void 0?{modelRef:e.modelRef}:{}}}function S(e,t){try{return e.shoot(Ne(t))}catch(o){return console.warn("people プレビューが組めない",o),null}}function me(){var v;const e=a("ppltruth");e.innerHTML="";const t=document.createElement("div");t.className="card";const o=(v=E.party)==null?void 0:v.hero,r=document.createElement("img"),p=S(h,A(o??{}));p&&(r.src=p);const d=document.createElement("div"),s=document.createElement("div");s.textContent=(o==null?void 0:o.name)??g.name;const n=document.createElement("div");n.className="note",n.textContent=o?l("tool.people.truthAuthored"):l("tool.people.defaultNote"),d.append(s,n),t.append(r,d),e.appendChild(t)}function M(){const e=P(),t=a("pplportrait"),o=a("pplbody");if(!e.ok){t.removeAttribute("src"),o.textContent=`✗ ${e.error}`,o.style.color="#ff7a6e";return}o.style.color="";const r=S(O,A(e.hero));r?t.src=r:t.removeAttribute("src");const p=A(e.hero);o.textContent=Re(p)?`${l("tool.people.bodyPct")}: ${ze(p)}%`:"",a("pplnote").textContent=_}function j(){const e=a("pplcur");e.innerHTML="";const t=document.createElement("div");t.className="mpickhead",t.textContent=l("tool.people.pickCurrent");const o=i.refText.trim(),r=n=>{i.refText=n,m=!0,u(),j(),M()};if(o)e.append(t,q(h,o,ne(C,o),!0,r));else{const n=document.createElement("span");n.className="note",n.textContent=l("tool.people.pickNone"),e.append(t,n)}const p=a("pplgrid");p.innerHTML="";const d=He();if(d.length){const n=document.createElement("div");n.className="mpickhead",n.textContent=l("tool.smith.modelPickBuiltin"),p.appendChild(n);const v=document.createElement("div");v.className="mpickrow";for(const L of d)v.appendChild(q(h,L,L,L===o,r));p.appendChild(v)}const s=C??[];if(s.length){const n=document.createElement("div");n.className="mpickhead",n.textContent=l("tool.smith.modelPickTruth"),p.appendChild(n);const v=document.createElement("div");v.className="mpickrow";for(const L of s)v.appendChild(q(h,L.id,ne(C,L.id),L.id===o,r));p.appendChild(v)}}function fe(){a("pplname").value=i.name,a("pplglyph").value=i.glyph,a("pplcolor").value=i.color||g.color,a("pplref").value=i.refText,a("ppllabel").placeholder=l("tool.people.defaultLabel")}function ue(){var d,s;const e=a("ppllistHero");e.innerHTML="";const t=(d=E.party)==null?void 0:d.hero;e.appendChild(B(S(h,A(t??{})),(t==null?void 0:t.name)??g.name,t?"":l("tool.people.defaultChip"),()=>{w("hero")}));const o=a("ppllistComp");o.innerHTML="";for(const n of re.slice(1))o.appendChild(B(S(h,{kind:"ally",race:n.race,color:n.color,equipment:{},stats:{...n.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:n.name}),n.name,l("tool.people.defaultChip"),null));const r=a("ppllistTown");r.innerHTML="";const p=(E.town??Le()).npcs??[];for(const n of p)r.appendChild(B(S(h,{kind:"ally",race:n.race,color:n.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:n.name??n.id}),((s=n.names)==null?void 0:s[Pe()])??n.name??n.id,"",()=>f.navigate("forge",{tab:"town"})));if(!p.length){const n=document.createElement("div");n.className="note",n.textContent=l("tool.people.noTownFolk"),r.appendChild(n)}}function B(e,t,o,r){const p=document.createElement("div");p.className="pcard"+(r?"":" plain");const d=document.createElement("img");e&&(d.src=e);const s=document.createElement("div");if(s.className="nm",s.textContent=t,p.append(d,s),o){const n=document.createElement("div");n.className="sub",n.textContent=o,p.appendChild(n)}return r&&p.addEventListener("click",r),p}function b(){me(),fe(),j(),M(),ue()}async function k(){try{const e=await(await fetch(x("/api/tables/proposals"))).json();Ce(a("pplprops"),e.proposals??[],{tag:()=>l("tool.people.capTag"),onView:t=>{he(t)},onPromote:t=>{G(t)},onArchive:t=>{ve(t)}}),a("ppllive").textContent="· live",D=!0}catch{a("pplprops").innerHTML=`<div class="note">${l("tool.common.devOff")}</div>`,a("ppllive").textContent=l("tool.common.devOff"),D=!1}a("pplsave").disabled=!D}async function he(e){var t,o,r,p,d;try{const s=await(await fetch(x(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),n=(r=(o=(t=s.docs)==null?void 0:t[0])==null?void 0:o.tables.party)==null?void 0:r.hero;i=V(n),m=!0,u(),b(),c(l("tool.people.loadedProp",{name:((d=(p=s.docs)==null?void 0:p[0])==null?void 0:d.name)??e}))}catch(s){c(s.message,!0)}}async function G(e){try{await $(x("/api/tables/promote"),{proposalId:e}),c(l("tool.people.promoted")),m=!1,k(),z(!0)}catch(t){c(t.message,!0)}}async function ve(e){try{await $(x("/api/tables/archive"),{proposalId:e}),c(l("tool.people.archived")),k()}catch(t){c(t.message,!0)}}async function Y(){const e=P();if(!e.ok){c(`✗ ${e.error}`,!0);return}const t=a("ppllabel").value.trim()||l("tool.people.defaultLabel"),o=await I(),r={...o},p={...o.party??{}};Object.keys(e.hero).length?p.hero=e.hero:delete p.hero,Object.keys(p).length?r.party=p:delete r.party;const d={formatVersion:Te,id:"tables",name:t,tables:r,createdAt:pe(),updatedAt:pe()};try{await $(x("/api/tables/proposal"),{tables:d,label:t,createdBy:"user"}),c(l("tool.people.saved",{name:t})),k()}catch(s){c(s.message,!0)}}function Z(e){const t=e.modelRef;if(!t||typeof t!="object"||!t.parts)return[];const o=new Set(Oe().map(r=>r.id));return Object.values(t.parts).map(r=>typeof r=="string"?r:r.id).filter(r=>!o.has(r))}a("ppltry").addEventListener("click",()=>{const e=P();if(!e.ok){c(`✗ ${e.error}`,!0);return}const t=Z(e.hero);if(t.length){c(l("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}$e("party",{hero:e.hero},f.world(),y?{partsShelf:y}:void 0).catch(o=>c(o.message,!0))}),a("pplplay").addEventListener("click",()=>{const e=P();if(!e.ok){c(`✗ ${e.error}`,!0);return}const t=Z(e.hero);if(t.length){c(l("tool.people.partsMissing",{ids:t.join(", ")}),!0);return}const o=window.open("","_blank");(async()=>{const r=await I(),p={...r},d={...r.party??{}};Object.keys(e.hero).length?d.hero=e.hero:delete d.hero,Object.keys(d).length?p.party=d:delete p.party;const s=`dungeon.html#pack=${encodeURIComponent(je(p,`people preview (${f.world()})`,H.length?{parts:H}:void 0))}`;o?o.location.href=s:window.open(s,"_blank")})()});let Q=!1;function W(){try{const e=localStorage.getItem(ie);if(!e)return;const t=JSON.parse(e);if(t.world!==f.world())return;localStorage.removeItem(ie),Q=!0,i.refText=ee(t.ref),m=!0,u(),w("hero"),t.shelf&&R(t.shelf).then(()=>{u(),b()}),b(),c(l("tool.people.fromParts"))}catch{}}a("ppltabList").addEventListener("click",()=>w("list")),a("ppltabHero").addEventListener("click",()=>w("hero")),a("pplname").addEventListener("input",e=>{i.name=e.target.value,m=!0,u()}),a("pplglyph").addEventListener("input",e=>{i.glyph=e.target.value,m=!0,u()}),a("pplcolor").addEventListener("input",e=>{i.color=e.target.value,m=!0,u(),M()}),a("pplref").addEventListener("change",e=>{i.refText=e.target.value,m=!0,u(),j(),M()}),a("ppllabel").addEventListener("input",u),a("pplsave").addEventListener("click",()=>{Y()});const F=a("pplparts");F.textContent=l("tool.people.partsLink"),F.href=x("parts.html");const J=a("pplsculpt");J.textContent=l("tool.people.sculptLink"),J.addEventListener("click",()=>f.navigate("sculpt"));const xe=f.events.on("tables",()=>{k(),z()}),ge=f.events.on("sculpt",()=>{C=null,h.clear(),O.clear(),K()}),be=f.events.on("parts",()=>{R(y).then(()=>{b()})}),ye=Ee(()=>{te(N),F.textContent=l("tool.people.partsLink"),J.textContent=l("tool.people.sculptLink"),b(),k()});window.cdPeople={draft:()=>({...i}),set:e=>{i={...i,...e},m=!0,u(),b()},valid:()=>P(),save:()=>Y(),promote:e=>G(e),refresh:()=>k(),reload:(e=!0)=>z(e),dirty:()=>m,shelf:e=>(e!==void 0&&R(e??void 0).then(()=>b()),y??""),tab:e=>(e&&w(e),T)},w("hero");const X=de();return(async()=>(await R(U),X&&c(l("tool.common.restored")),await z(!X&&!Q),await Promise.all([k(),K()]),W()))(),{applyParams(e){const t=e.get("tab");(t==="list"||t==="hero")&&w(t),e.get("handoff")==="parts"&&W()},dispose(){xe(),ge(),be(),ye(),u(),h.dispose(),O.dispose(),delete window.cdPeople}}}};export{ie as HANDOFF_KEY,ot as peoplePanel};
