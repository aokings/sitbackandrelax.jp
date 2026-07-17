import{G as yt,W as Qt,a as Jt,P as Zt,A as ke,D as kt,h as Ee,H as Me,d as Le,k as Se,g as Et,M as at,O as ze,f as Mt,q as jt,C as te,V as P,B as Te,Q as ee}from"./three.module-C7yXn3za.js";import{V as Ae,aD as Ce,aB as Pe,aE as $e,_ as He,aF as Oe,E as ne,k as Ie,s as Lt,g as De,i as Re,m as _e,y as Fe,n as Ge,G as Ne,L as Be,M as qe,aG as Ve,ai as We,a5 as Ue,ag as Xe,ak as Ye,aH as Ke}from"./render-voxel-bkefFhJl.js";import{t as Qe,M as Je,R as Ze,I as ae,C as je}from"./dungeon-jvdiX9Lh.js";import{a as tn}from"./touch-input-D1HYJrcI.js";import{o as en}from"./llm-CGRkbp8Z.js";import{h as nn,t as k,D as an,l as $}from"./ui-confirm-Bv2opBmw.js";import{b as on}from"./gamepack-DYrEHAxF.js";import{i as sn}from"./status-CoghzNI4.js";import"./play-input-BYi92GtF.js";import"./tables-ChiF84Nm.js";import"./pack-handoff-client-C-AMTnth.js";const ln=`<!-- ============================================================
     §studio W3 — カタログパネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 catalog.html body の単一実体（二重持ちゼロ）：スタジオも旧 catalog.html（stub）も
     この1枚を mount する。中身は §15 の従来 markup そのまま。
     唯一の改変＝#app の高さ 100vh→100%（host の中で生きる＝standalone では
     html/body の height:100% 連鎖で従来と同寸・forge パネルと同じ流儀）。
     ============================================================ -->
<style>
  /* ============================================================
     §15 voxel モデル・カタログ（DESIGN-tactical-depth §15）
     ・render-voxel.ts のモデル構築コードを import して描く＝ゲームとドリフトしない
     ・左＝カテゴリ別グリッド（サムネ＋名前＋「どこを編集すれば変わるか」）
     ・右＝拡大ビュー（orbit／アニメ再生／着せ替え／背景・ライト切替）
     ・§tool-i18n：UI 文字列は data-i18n / t()（tool.* キー・6言語）＋ 375px responsive
     ============================================================ */
  :root {
    --bg: #12161f;
    --panel: #1a2130;
    --line: #2b3547;
    --text: #e8edf5;
    --muted: #8b96a8;
    --accent: #5b9bff;
    --tint: #223048;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--bg); color: var(--text); font: 14px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #app { display: flex; height: 100%; }

  /* ── 左：一覧 ─────────────────────────── */
  #list { width: 460px; min-width: 320px; overflow-y: auto; border-right: 1px solid var(--line); padding: 12px; }
  #list h1 { font-size: 16px; margin: 2px 0 2px; }
  #list .sub { color: var(--muted); font-size: 11px; margin-bottom: 10px; }
  #list h2 { font-size: 13px; color: var(--accent); margin: 14px 0 6px; border-bottom: 1px solid var(--line); padding-bottom: 3px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 8px; }
  .cell { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 5px; cursor: pointer; text-align: center; }
  .cell:hover { border-color: var(--accent); }
  .cell.sel { border-color: var(--accent); background: var(--tint); }
  .cell img { width: 100%; aspect-ratio: 1; border-radius: 5px; background: #0d1017; display: block; }
  .cell .nm { font-size: 11px; margin-top: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* ── 右：拡大ビュー ────────────────────── */
  #main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  #stage { flex: 1; position: relative; min-height: 0; }
  #stage canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; cursor: grab; touch-action: none; }
  #stage canvas:active { cursor: grabbing; }
  #ctl { border-top: 1px solid var(--line); background: var(--panel); padding: 10px 14px; display: flex; flex-direction: column; gap: 8px; }
  .row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .row .lbl { color: var(--muted); font-size: 11px; min-width: 4.5em; }
  button, select { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 10px; font: inherit; font-size: 12px; cursor: pointer; }
  button:hover { border-color: var(--accent); }
  button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); }
  label.chk { font-size: 12px; display: inline-flex; align-items: center; gap: 4px; color: var(--text); }
  #title { font-size: 15px; font-weight: 700; overflow-wrap: anywhere; }
  #hint { font-family: ui-monospace, Menlo, monospace; font-size: 11.5px; color: #9fd17f; background: #131a12; border: 1px solid #2b3a26; border-radius: 6px; padding: 5px 8px; overflow-x: auto; white-space: nowrap; max-width: 100%; }
  #hint b { color: #ffd75e; font-weight: 600; }
  #dressrow[hidden] { display: none; }
  /* §tool-i18n：6言語ピッカー（ゲームの ☰ と同じ #langmode 流儀） */
  .langpick { margin-left: auto; display: inline-flex; align-items: center; gap: 4px; font-size: 12px; }
  #langmode { max-width: 11em; }
  /* ── §tool-i18n responsive：スマホ縦（375px）で一覧/プレビュー/操作が崩れず使える ── */
  @media (max-width: 860px) {
    #app { flex-direction: column; }
    #list { width: 100%; min-width: 0; height: 40vh; height: 40dvh; border-right: none; border-bottom: 1px solid var(--line); padding-top: calc(12px + env(safe-area-inset-top)); }
    #main { min-height: 0; }
    #ctl { max-height: 46vh; max-height: 46dvh; overflow-y: auto; padding: 8px 10px calc(8px + env(safe-area-inset-bottom)); }
    .grid { grid-template-columns: repeat(auto-fill, minmax(72px, 1fr)); gap: 6px; }
    .cell { padding: 4px; }
    .cell .nm { font-size: 10px; }
    button, select { min-height: 40px; }
    .row { gap: 6px; }
    .row .lbl { min-width: 3.6em; }
    .row select { max-width: calc(100vw - 24px); }
    button, select { padding: 5px 8px; }
    .langpick { margin-left: 0; }
  }
</style>
<div id="app">
  <div id="list">
    <h1 data-i18n="tool.catalog.h1">voxel カタログ（開発ツール）</h1>
    <div class="sub" data-i18n="tool.catalog.sub">render-voxel.ts のモデル構築を import して描く＝ゲームとドリフトしない（§15）。クリックで拡大・ドラッグで回す。</div>
    <div id="cats"></div>
  </div>
  <div id="main">
    <div id="stage"></div>
    <div id="ctl">
      <div class="row"><span id="title">—</span><span class="langpick worldpick">🗺<select id="worldmode" title="World / ワールド"></select></span><span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span></div>
      <div class="row"><span class="lbl" data-i18n="tool.catalog.hintLbl">編集の当たり</span><span id="hint">—</span></div>
      <div class="row" id="animrow">
        <span class="lbl" data-i18n="tool.catalog.animLbl">アニメ</span>
        <button id="walk" data-i18n="tool.catalog.anim.walk">歩く🚶</button>
        <button data-anim="melee" data-i18n="tool.catalog.anim.melee">踏み込み⚔</button>
        <button data-anim="shoot" data-i18n="tool.catalog.anim.shoot">射撃🏹</button>
        <button data-anim="cast" data-i18n="tool.catalog.anim.cast">詠唱✦</button>
        <button data-anim="windup" data-i18n="tool.catalog.anim.windup">予告</button>
        <button data-anim="exhale" data-i18n="tool.catalog.anim.exhale">息</button>
        <button data-anim="heal" data-i18n="tool.catalog.anim.heal">回復</button>
        <button data-anim="hit" data-i18n="tool.catalog.anim.hit">被弾</button>
        <button data-anim="death" data-i18n="tool.catalog.anim.death">死</button>
        <button id="spin" data-i18n="tool.catalog.anim.spin">自動回転</button>
      </div>
      <div class="row" id="dressrow">
        <span class="lbl" data-i18n="tool.catalog.dressLbl">着せ替え</span>
        <select id="drace"></select>
        <select id="dweapon"></select>
        <select id="darmor"></select>
        <select id="dacc"></select>
        <label class="chk"><input type="checkbox" id="dpie" /><span data-i18n="tool.catalog.dPie">聖印(pie≥10)</span></label>
        <label class="chk"><input type="checkbox" id="dhero" /><span data-i18n="tool.catalog.dHero">主人公(冠)</span></label>
      </div>
      <div class="row">
        <span class="lbl" data-i18n="tool.catalog.envLbl">環境</span>
        <select id="theme">
          <option value="plain" data-i18n="tool.catalog.theme.plain">素の石窟</option>
          <option value="fire" data-i18n="tool.catalog.theme.fire">火の穴</option>
          <option value="ice" data-i18n="tool.catalog.theme.ice">氷の穴</option>
          <option value="earth" data-i18n="tool.catalog.theme.earth">土の穴</option>
          <option value="holy" data-i18n="tool.catalog.theme.holy">聖の穴</option>
          <option value="town" data-i18n="tool.catalog.theme.town">街</option>
        </select>
        <button id="light" class="on">実機</button>
        <span class="lbl" style="min-width:0" data-i18n="tool.catalog.lightNote">（実機はゲームと同じ光、明所は地の色、暗所は発光の点検に使います）</span>
      </div>
    </div>
  </div>
</div>
`,rn=je.flatMap(r=>r.out==="item"?[r.item]:[]),it=[...ae,...rn.filter(r=>!ae.some(m=>m.id===r.id))],_=r=>it.find(m=>m.id===r),cn=it.filter(r=>r.kind==="weapon"),dn=it.filter(r=>r.kind==="armor"),pn=it.filter(r=>r.kind==="accessory"),ot=r=>{var m;return((m=r.nameOf)==null?void 0:m.call(r))??r.name},oe={"床・壁・地形":"tool.catalog.cat.tiles",敵:"tool.catalog.cat.mons","仲間・自機":"tool.catalog.cat.figs"},mn=new Te(1,1,1);function St(r){const m=Fe(r);if(Ge().some(E=>E.id===m))return`<b>data/models/${m}.json</b>（truth モデル＝<b>sculpt.html</b> で彫る・灯りも data の glow）／dungeon.ts MONSTERS（能力）`;const d=Ne[m]?`／<b>GLOW_HEX['${m}']</b>（灯り）`:"";return Be[m]?`render-voxel.ts <b>LARGE_BUILDERS['${m}']</b>（GB 彫刻）${d}／dungeon.ts MONSTERS（能力）`:qe[m]?`render-voxel.ts <b>MON_VOX['${m}']</b>（スライス定義・sculpt.html で取り込み可）${d}／dungeon.ts MONSTERS（能力）`:`render-voxel.ts <b>monsterBoxes()</b> の t==='${m}' 分岐${d}／dungeon.ts MONSTERS（能力）`}const un="render-voxel.ts <b>figureBoxes()</b>／<b>raceSpecOf()</b>（種族差）＋ dungeon-types.ts <b>weaponVisual/armorVisual/accVisual</b>（装備→見た目）＋ dungeon.ts ITEM_POOL/CRAFT_RECIPES（台帳）",Ln={id:"catalog",async mount(r,m){r.innerHTML=ln,nn(r);const d=t=>r.querySelector(`#${t}`);let E="plain",M="live",K=!1,h=null,u=null,c=null,x=null,v=null,b=null;const ie=new Ae(document.createElement("div"),()=>{});function Q(t){const{geo:e,spots:n,paintTex:a}=De(t),i=new yt,s=Re(t);{const l=new at(e,_e(a?{paintTex:a}:{}));s!==1&&l.scale.setScalar(s),i.add(l)}for(const l of n){const o=new at(mn,new Mt({color:l.c}));o.position.set(l.x*s,l.y*s,l.z*s),o.scale.set(l.sx*s,l.sy*s,l.sz*s),o.userData.sp=l,o.userData.bk=s,i.add(o)}return i}const f=[];for(const t of Ce)f.push({id:"tile:"+t.id,name:t.name,cat:"床・壁・地形",hint:`${t.hint}／テーマ色は <b>ENV['THEME']</b>`,nameOf:()=>k(`tool.catalog.tile.${t.id}`),build:()=>{const e=ie.buildSample(E,t.id);e.position.set(-1,0,-1);const n=new yt;return n.add(e),n}});const st=(t,e={})=>({kind:"monster",name:t,color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},...e});function zt(){for(let e=f.length-1;e>=0;e--)f[e].cat==="敵"&&f.splice(e,1);const t=[];for(const e of Je){const n=st(e.name,{size:e.size,heads:e.heads,element:e.element});t.push({id:"mon:"+e.name,name:e.name+(e.size?`（${e.size}×${e.size}）`:""),cat:"敵",hint:St(n),nameOf:()=>$(e.name)+(e.size?`（${e.size}×${e.size}）`:""),build:()=>Q(n),actor:n,anim:!0})}for(const e of["fire","ice","earth","holy"]){const n={fire:"火",ice:"氷",earth:"土",holy:"聖"}[e],a=st(`${n}の術士`,{element:e});t.push({id:"mon:caster-"+e,name:`${n}の術士`,cat:"敵",hint:St(a),nameOf:()=>$(`${n}の術士`),build:()=>Q(a),actor:a,anim:!0})}for(const[e,n]of[["番兵",{}],["魔物の巣",{}],["封印のボス",{size:2,heads:2}]]){const a=st(e,n);t.push({id:"mon:"+e,name:e,cat:"敵",hint:St(a),nameOf:()=>$(e),build:()=>Q(a),actor:a,anim:!0})}f.push(...t)}zt();const L=(t,e,n,a,i,s,l,o,p=7)=>{const X={kind:n,race:a,color:i,pos:{x:0,y:0},facing:{dx:0,dy:1},stats:{pie:p},equipment:{weapon:s?_(s):void 0,armor:l?_(l):void 0,accessory:o?_(o):void 0}};return{id:"fig:"+t,name:t,cat:"仲間・自機",hint:un,nameOf:()=>k(e),build:()=>Q(X),actor:X,dress:!0,anim:!0}};f.push(L("主人公（鋼の剣・鉄鎧）","tool.catalog.fig.hero","hero","human","#ffd24a","steel","iarmor"),L("ハーフットの斥候（毒の刃・革鎧）","tool.catalog.fig.scout","ally","halffoot","#46c7bf","venomblade","larmor"),L("ドワーフの戦士（戦斧・鎖帷子）","tool.catalog.fig.warrior","ally","dwarf","#e0b060","axe","chain"),L("エルフの射手（焔の弓）","tool.catalog.fig.archer","ally","elf","#9b8cff","firebow","larmor"),L("ノームの魔道士（魔道書）","tool.catalog.fig.mage","ally","gnome","#7fd06a","grimoire"),L("人間の僧（木の杖・聖印）","tool.catalog.fig.priest","ally","human","#ff9ec4","staff","larmor","life",12),L("竜鱗の重戦士（聖銀の剣・竜鱗の鎧）","tool.catalog.fig.dragoon","ally","dwarf","#e0b060","holyblade","dragonmail","pwr"));const F=new Qt({antialias:!0,preserveDrawingBuffer:!0});F.setSize(128,128);const G=new Jt,lt=new Zt(40,1,.05,100),se=new ke(16777215,.85),Tt=new kt(16769725,1);Tt.position.set(3,6,4),G.add(se,Tt);function At(t){G.background=new te(ne[E].bg),G.add(t);const e=new Et().setFromObject(t),n=e.getCenter(new P),a=e.getSize(new P),i=Math.max(a.x,a.y,a.z)*.62+.24;lt.position.set(n.x+i*1.35,n.y+i*1.15,n.z+i*1.85),lt.lookAt(n),F.render(G,lt);const s=F.domElement.toDataURL();return G.remove(t),s}const Ct=d("cats"),rt=[];function Pt(){Ct.innerHTML="",rt.length=0;for(const t of["床・壁・地形","敵","仲間・自機"]){const e=f.filter(i=>i.cat===t),n=document.createElement("h2");n.textContent=`${k(oe[t])}（${e.length}）`,rt.push({el:n,cat:t,n:e.length});const a=document.createElement("div");a.className="grid";for(const i of e){const s=document.createElement("div");s.className="cell";const l=document.createElement("img"),o=document.createElement("div");o.className="nm",o.textContent=ot(i),s.append(l,o),s.addEventListener("click",()=>q(i)),a.appendChild(s),i.el=s,i.img=l,i.nmEl=o}Ct.append(n,a)}}function le(){for(const t of rt)t.el.textContent=`${k(oe[t.cat])}（${t.n}）`;for(const t of f)t.nmEl&&(t.nmEl.textContent=ot(t));h&&(Ot.textContent=ot(h))}function ct(t=!1){for(const e of f)t&&e.cat!=="床・壁・地形"||e.img&&(e.img.src=At(e.build()))}const dt=d("stage"),g=new Qt({antialias:!0});g.toneMapping=Ee,g.toneMappingExposure=1.22,g.setPixelRatio(Math.min(devicePixelRatio,2)),dt.appendChild(g.domElement);const S=new Jt,N=new Zt(42,1,.05,200),H=new Me(16777215,2236962,.8),O=new kt(16769725,1);O.position.set(3,4.2,2.4);const I=new kt(8229565,.3);I.position.set(-2.6,1.4,-1.8);const D=new Le(16761470,0,14,2);S.add(D),S.add(H,O,I);const re=new Se(8,8,3753310,2305086);S.add(re);let z=.62,w=.42,y=4;const B=new P(0,.6,0);function J(){const t=ne[E],e=Ie(t);S.background=new te(t.bg),H.color.setHex(e.hemiSky),H.groundColor.setHex(e.hemiGround),O.color.setHex(e.sunCol),I.color.setHex(e.fillCol),D.color.setHex(e.heroCol),M==="live"?(H.intensity=e.hemiI,O.intensity=e.sunI,I.intensity=e.fillI,D.intensity=e.heroI,Lt(e.actFill,e.actFillI)):M==="bright"?(H.intensity=.85,O.intensity=1.05,I.intensity=.3,D.intensity=0,Lt(e.actFill,.1)):(H.intensity=.09,O.intensity=.1,I.intensity=.05,D.intensity=0,Lt(0,0))}function $t(){const t=dt.clientWidth,e=dt.clientHeight;g.setSize(t,e),N.aspect=t/e,N.updateProjectionMatrix()}m.own(window,"resize",$t);function ce(t){const e=new Et().setFromObject(t),n=e.getCenter(new P),a=e.getSize(new P);B.copy(n),y=Math.max(a.x,a.y,a.z)*1.15+.6,D.position.set(n.x+.4,1.9,e.max.z+1.3)}let Z=!1,pt=0,mt=0;g.domElement.addEventListener("pointerdown",t=>{t.pointerType!=="touch"&&(Z=!0,pt=t.clientX,mt=t.clientY,g.domElement.setPointerCapture(t.pointerId))}),g.domElement.addEventListener("pointermove",t=>{t.pointerType==="touch"||!Z||(z+=(t.clientX-pt)*.008,w=Math.min(1.35,Math.max(-.2,w+(t.clientY-mt)*.006)),pt=t.clientX,mt=t.clientY)}),g.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(Z=!1)}),g.domElement.addEventListener("wheel",t=>{t.preventDefault(),y=Math.min(40,Math.max(.8,y*(t.deltaY>0?1.08:.93)))},{passive:!1});let T=null;const Ht=t=>Math.min(1.35,Math.max(-.2,t));tn(g.domElement,{strokeStart(t,e){T={x:t,y:e}},strokeMove(t,e){T&&(z+=(t-T.x)*.008,w=Ht(w+(e-T.y)*.006)),T={x:t,y:e}},strokeEnd(){T=null},strokeCancel(){T=null},orbit(t,e){z+=t*.008,w=Ht(w+e*.006)},orbitEnd(){},pinch(t){y=Math.min(40,Math.max(.8,y/t))},undoTap(){},redoTap(){},longPress(){}});const Ot=d("title"),It=d("hint"),de=d("dressrow"),pe=d("animrow");function ut(t){c&&S.remove(c),gt(),u=t,c=new yt,c.add(t),S.add(c),ce(t)}function q(t){var e;h=t;for(const n of f)(e=n.el)==null||e.classList.toggle("sel",n===t);Ot.textContent=ot(t),It.innerHTML=t.hint.replace("THEME",E),de.hidden=!t.dress,pe.style.visibility=t.anim?"visible":"hidden",t.dress&&me(t.actor),ut(t.build())}const j=d("drace"),V=d("dweapon"),W=d("darmor"),U=d("dacc"),ht=d("dpie"),ft=d("dhero");function tt(t,e){const n=t.value;t.innerHTML=e.map(a=>`<option value="${a.v}">${a.t}</option>`).join(""),n&&[...t.options].some(a=>a.value===n)&&(t.value=n)}function Dt(){const t=(e,n)=>`${k(e)}：${n}`;tt(j,Object.entries(Ze).map(([e,n])=>({v:e,t:t("tool.catalog.race",$(n.name))}))),tt(V,[{v:"",t:t("slot.weapon",k("tool.catalog.none"))},...cn.map(e=>({v:e.id,t:t("slot.weapon",$(e.name))}))]),tt(W,[{v:"",t:t("slot.armor",k("tool.catalog.none"))},...dn.map(e=>({v:e.id,t:t("slot.armor",$(e.name))}))]),tt(U,[{v:"",t:t("slot.accessory",k("tool.catalog.none"))},...pn.map(e=>({v:e.id,t:t("slot.accessory",$(e.name))}))])}Dt();function me(t){var e,n,a,i,s,l,o;j.value=t.race??"human",V.value=((n=(e=t.equipment)==null?void 0:e.weapon)==null?void 0:n.id)??"",W.value=((i=(a=t.equipment)==null?void 0:a.armor)==null?void 0:i.id)??"",U.value=((l=(s=t.equipment)==null?void 0:s.accessory)==null?void 0:l.id)??"",ht.checked=(((o=t.stats)==null?void 0:o.pie)??0)>=10,ft.checked=t.kind==="hero"}function ue(){const t=h;if(!(t!=null&&t.dress)||!t.actor)return;const e=t.actor;e.race=j.value,e.equipment={weapon:V.value?_(V.value):void 0,armor:W.value?_(W.value):void 0,accessory:U.value?_(U.value):void 0},e.stats={...e.stats,pie:ht.checked?12:7},e.kind=ft.checked?"hero":"ally",ut(t.build()),t.img&&(t.img.src=At(t.build()))}for(const t of[j,V,W,U,ht,ft])t.addEventListener("change",ue);function gt(){var e,n,a;v&&((e=v.parent)==null||e.remove(v),v.material.dispose(),v=null),b&&((n=b.parent)==null||n.remove(b),b.material.dispose(),b=null),c&&(c.position.set(0,0,0),c.rotation.set(0,0,0),c.scale.set(1,1,1),c.quaternion.identity());const t=(a=u==null?void 0:u.children)==null?void 0:a[0];t!=null&&t.material&&(t.material.transparent=!1,t.material.opacity=1,t.material.needsUpdate=!0),x=null}function Rt(t){var a,i,s,l;gt();const e=(((a=h==null?void 0:h.actor)==null?void 0:a.size)??1)>=2,n=t==="hit"?300:t==="death"?e?900:620:Oe[t];if(x={kind:t,t0:performance.now(),dur:n},t==="hit"){const o=(s=(i=u==null?void 0:u.children)==null?void 0:i[0])==null?void 0:s.geometry;o&&(v=new at(o,new Mt({color:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:jt})),v.scale.set(1.02,1.02,1.02),u.add(v))}if(t==="cast"){const o=new Et().setFromObject(u),p={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074}[((l=h==null?void 0:h.actor)==null?void 0:l.element)??""]??14202111;b=new at(new ze(.5),new Mt({color:p,transparent:!0,opacity:.9,depthWrite:!1,blending:jt})),b.position.set(0,o.max.y+.3,0),b.scale.setScalar(.02),c.add(b)}}r.querySelectorAll("#animrow [data-anim]").forEach(t=>t.addEventListener("click",()=>Rt(t.dataset.anim))),d("spin").addEventListener("click",t=>{K=!K,t.currentTarget.classList.toggle("on",K)});let et=!1,A=0,C=0,_t=0;function Ft(t){et=t,d("walk").classList.toggle("on",t)}d("walk").addEventListener("click",()=>Ft(!et));function he(t){var X,Xt,Yt,Kt;const e=Math.min(.05,(t-(_t||t))/1e3);_t=t;const n=(X=u==null?void 0:u.children)==null?void 0:X[0],a=n==null?void 0:n.material;if(!((Xt=a==null?void 0:a.userData)!=null&&Xt.gaitA)||!(h!=null&&h.actor))return;const i=Ue(h.actor),s=Math.PI/(i.dur/1e3);if(et)A+=s*e,C=Math.min(1,C+e/.08);else{const R=Math.ceil(A/Math.PI-1e-4)*Math.PI;C>0&&A<R?A=Math.min(R,A+s*e):C=Math.max(0,C-e/.16)}const l=i.hover?i.hover*(.5+.5*Math.sin(t*.0016)):0,o=i.breath?i.breath*(.5+.5*Math.sin(t*.0021)):0,p=Xe(i,A,C,l,o);a.userData.gaitA.value.set(p.a[0],p.a[1],p.a[2],p.a[3]),a.userData.gaitB.value.set(p.b[0],p.b[1]);for(const R of u.children){const Y=(Yt=R.userData)==null?void 0:Yt.sp;if(!Y)continue;const xe=Y.gw??[0,0,0],wt=((Kt=R.userData)==null?void 0:Kt.bk)??1,[ve,we,ye]=Ye([Y.x,Y.y,Y.z],xe,p.a,p.b);R.position.set(ve*wt,we*wt,ye*wt)}}const Gt=new P(1,0,0),Nt=new ee,Bt=new ee,fe=new P(0,1,0);function ge(t){var l;if(!x||!c)return;const e=t-x.t0,n=e/x.dur;if(n>=1){gt();return}if(x.kind==="hit"){const o=Ke(n);if(c.position.set(0,0,o.kb),c.scale.set(o.sxz,o.sy,o.sxz),v){const p=Math.min(1,e/210);v.material.opacity=e>210?0:.7*(1-p)}return}if(x.kind==="death"){const o=Ve(n);c.quaternion.setFromAxisAngle(Gt,o.ang),c.position.y=-o.sink;const p=(l=u==null?void 0:u.children)==null?void 0:l[0];p!=null&&p.material&&(p.material.transparent=!0,p.material.opacity=o.opacity);return}const{lunge:a,tilt:i,yawOff:s}=We(x.kind,n);if(c.position.set(0,0,a),Nt.setFromAxisAngle(Gt,i),Bt.setFromAxisAngle(fe,s),c.quaternion.copy(Nt).multiply(Bt),b&&x.kind==="cast"){const o=Math.min(1,e/260);b.scale.setScalar(.05+.3*o),b.rotation.y+=.1,b.material.opacity=.9*(.45+.55*o)}}d("theme").addEventListener("change",t=>{E=t.target.value,J(),ct(!0),h&&(It.innerHTML=h.hint.replace("THEME",E),h.cat==="床・壁・地形"&&ut(h.build()))});function bt(){const t=d("light");t.textContent=k(`tool.common.light.${M}`),t.classList.toggle("on",M!=="dark")}d("light").addEventListener("click",()=>{M=M==="live"?"bright":M==="bright"?"dark":"live",bt(),J()});function qt(t){K&&!Z&&(z+=.006),ge(t),he(t),N.position.set(B.x+y*Math.sin(z)*Math.cos(w),B.y+y*Math.sin(w),B.z+y*Math.cos(z)*Math.cos(w)),N.lookAt(B),g.render(S,N)}let Vt=0,xt=!1;function Wt(){xt||(Vt=requestAnimationFrame(Wt),qt(performance.now()))}let nt=null;function Ut(t){var n;const e=f.find(a=>a.id===t||a.name===t);return e?(q(e),(n=e.el)==null||n.scrollIntoView({block:"nearest"}),!0):!1}window.cdCat={trigger:Rt,select:t=>{const e=f.find(n=>n.id===t||n.name===t);return e&&q(e),(e==null?void 0:e.id)??null},pose:()=>c?{z:c.position.z,y:c.position.y,sy:c.scale.y,qx:c.quaternion.x,anim:(x==null?void 0:x.kind)??null}:null,list:()=>f.map(t=>t.id),step:()=>qt(performance.now()),walk:t=>Ft(t??!et),gait:()=>{var e,n,a;const t=(n=(e=u==null?void 0:u.children)==null?void 0:e[0])==null?void 0:n.material;return(a=t==null?void 0:t.userData)!=null&&a.gaitA?{a:t.userData.gaitA.value.toArray(),b:t.userData.gaitB.value.toArray(),phase:A,k:C}:null},view:(t,e,n)=>{z=t,w=e,n!=null&&(y=n)},light:t=>{M=t,J()}};const be=en(()=>{le(),Dt(),bt()});Pt(),J(),bt(),$t(),ct(),q(f.find(t=>t.id==="mon:ドラゴン")??f[0]),Wt();const vt=m.world();return vt!==an&&(async()=>{try{const t=await fetch(`/packs/${vt.replace("/","--")}.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=on(await t.json());if(xt)return;Qe(e.monsters.length?e.monsters:null),e.models.length&&Pe($e(e.models)),e.parts.length&&He(e.parts.map(sn)),zt(),Pt(),ct(),nt&&Ut(nt)||q(f.find(n=>n.cat==="敵")??f[0]),nt=null}catch(t){console.warn(`world pack（${vt}）の読込に失敗＝旗艦の台帳で表示`,t)}})(),{applyParams(t){const e=t.get("sel");e&&(Ut(e)||(nt=e))},dispose(){xt=!0,cancelAnimationFrame(Vt),be();try{g.dispose(),g.forceContextLoss(),g.domElement.remove()}catch{}try{F.dispose(),F.forceContextLoss()}catch{}delete window.cdCat}}}};export{Ln as catalogPanel};
