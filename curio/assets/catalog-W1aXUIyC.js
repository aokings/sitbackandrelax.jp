import{G as yt,W as Qt,a as Jt,P as jt,A as ke,D as kt,h as Ee,H as Me,d as Le,k as Se,g as Et,M as at,O as ze,f as Mt,q as Zt,C as te,V as P,B as Te,Q as ee}from"./three.module-BAT99Nro.js";import{V as Ae,al as Ce,aj as Pe,am as $e,_ as Oe,an as He,E as ne,k as Ie,s as Lt,g as Re,i as De,m as _e,y as Fe,n as Ge,G as Ne,L as qe,M as Be,ao as Ve,a7 as We,Y as Ue,a5 as Xe,a9 as Ye,ap as Ke}from"./render-voxel-DT_XKhmE.js";import{t as Qe,M as Je,R as je,I as ae,C as Ze}from"./dungeon-Dnk6RqKI.js";import{a as tn}from"./touch-input-D1HYJrcI.js";import{o as en}from"./llm-BOBRi4NF.js";import{h as nn,t as k,D as an,l as $}from"./world-ui-D4RS3ZoF.js";import{b as on}from"./gamepack-BSccYvMQ.js";import{a as sn}from"./play-input-ihx35VtW.js";import"./status-BFngDnvf.js";import"./tables-I60mC_c3.js";import"./pack-handoff-DaSImG6J.js";const ln=`<!-- ============================================================
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
        <span class="lbl" style="min-width:0" data-i18n="tool.catalog.lightNote">（実機＝ゲームの光／明所＝素の色／暗所＝emissive 点検）</span>
      </div>
    </div>
  </div>
</div>
`,rn=Ze.flatMap(l=>l.out==="item"?[l.item]:[]),it=[...ae,...rn.filter(l=>!ae.some(m=>m.id===l.id))],_=l=>it.find(m=>m.id===l),cn=it.filter(l=>l.kind==="weapon"),dn=it.filter(l=>l.kind==="armor"),pn=it.filter(l=>l.kind==="accessory"),ot=l=>{var m;return((m=l.nameOf)==null?void 0:m.call(l))??l.name},oe={"床・壁・地形":"tool.catalog.cat.tiles",敵:"tool.catalog.cat.mons","仲間・自機":"tool.catalog.cat.figs"},mn=new Te(1,1,1);function St(l){const m=Fe(l);if(Ge().some(E=>E.id===m))return`<b>data/models/${m}.json</b>（truth モデル＝<b>sculpt.html</b> で彫る・灯りも data の glow）／dungeon.ts MONSTERS（能力）`;const c=Ne[m]?`／<b>GLOW_HEX['${m}']</b>（灯り）`:"";return qe[m]?`render-voxel.ts <b>LARGE_BUILDERS['${m}']</b>（GB 彫刻）${c}／dungeon.ts MONSTERS（能力）`:Be[m]?`render-voxel.ts <b>MON_VOX['${m}']</b>（スライス定義・sculpt.html で取り込み可）${c}／dungeon.ts MONSTERS（能力）`:`render-voxel.ts <b>monsterBoxes()</b> の t==='${m}' 分岐${c}／dungeon.ts MONSTERS（能力）`}const un="render-voxel.ts <b>figureBoxes()</b>／<b>raceSpecOf()</b>（種族差）＋ dungeon-types.ts <b>weaponVisual/armorVisual/accVisual</b>（装備→見た目）＋ dungeon.ts ITEM_POOL/CRAFT_RECIPES（台帳）",Ln={id:"catalog",async mount(l,m){l.innerHTML=ln,nn(l);const c=t=>l.querySelector(`#${t}`);let E="plain",M="live",K=!1,h=null,u=null,r=null,x=null,v=null,b=null;const ie=new Ae(document.createElement("div"),()=>{});function Q(t){const{geo:e,spots:n}=Re(t),a=new yt,o=De(t);{const i=new at(e,_e());o!==1&&i.scale.setScalar(o),a.add(i)}for(const i of n){const d=new at(mn,new Mt({color:i.c}));d.position.set(i.x*o,i.y*o,i.z*o),d.scale.set(i.sx*o,i.sy*o,i.sz*o),d.userData.sp=i,d.userData.bk=o,a.add(d)}return a}const f=[];for(const t of Ce)f.push({id:"tile:"+t.id,name:t.name,cat:"床・壁・地形",hint:`${t.hint}／テーマ色は <b>ENV['THEME']</b>`,nameOf:()=>k(`tool.catalog.tile.${t.id}`),build:()=>{const e=ie.buildSample(E,t.id);e.position.set(-1,0,-1);const n=new yt;return n.add(e),n}});const st=(t,e={})=>({kind:"monster",name:t,color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},...e});function zt(){for(let e=f.length-1;e>=0;e--)f[e].cat==="敵"&&f.splice(e,1);const t=[];for(const e of Je){const n=st(e.name,{size:e.size,heads:e.heads,element:e.element});t.push({id:"mon:"+e.name,name:e.name+(e.size?`（${e.size}×${e.size}）`:""),cat:"敵",hint:St(n),nameOf:()=>$(e.name)+(e.size?`（${e.size}×${e.size}）`:""),build:()=>Q(n),actor:n,anim:!0})}for(const e of["fire","ice","earth","holy"]){const n={fire:"火",ice:"氷",earth:"土",holy:"聖"}[e],a=st(`${n}の術士`,{element:e});t.push({id:"mon:caster-"+e,name:`${n}の術士`,cat:"敵",hint:St(a),nameOf:()=>$(`${n}の術士`),build:()=>Q(a),actor:a,anim:!0})}for(const[e,n]of[["番兵",{}],["魔物の巣",{}],["封印のボス",{size:2,heads:2}]]){const a=st(e,n);t.push({id:"mon:"+e,name:e,cat:"敵",hint:St(a),nameOf:()=>$(e),build:()=>Q(a),actor:a,anim:!0})}f.push(...t)}zt();const L=(t,e,n,a,o,i,d,s,p=7)=>{const X={kind:n,race:a,color:o,pos:{x:0,y:0},facing:{dx:0,dy:1},stats:{pie:p},equipment:{weapon:i?_(i):void 0,armor:d?_(d):void 0,accessory:s?_(s):void 0}};return{id:"fig:"+t,name:t,cat:"仲間・自機",hint:un,nameOf:()=>k(e),build:()=>Q(X),actor:X,dress:!0,anim:!0}};f.push(L("主人公（鋼の剣・鉄鎧）","tool.catalog.fig.hero","hero","human","#ffd24a","steel","iarmor"),L("ハーフットの斥候（毒の刃・革鎧）","tool.catalog.fig.scout","ally","halffoot","#46c7bf","venomblade","larmor"),L("ドワーフの戦士（戦斧・鎖帷子）","tool.catalog.fig.warrior","ally","dwarf","#e0b060","axe","chain"),L("エルフの射手（焔の弓）","tool.catalog.fig.archer","ally","elf","#9b8cff","firebow","larmor"),L("ノームの魔道士（魔道書）","tool.catalog.fig.mage","ally","gnome","#7fd06a","grimoire"),L("人間の僧（木の杖・聖印）","tool.catalog.fig.priest","ally","human","#ff9ec4","staff","larmor","life",12),L("竜鱗の重戦士（聖銀の剣・竜鱗の鎧）","tool.catalog.fig.dragoon","ally","dwarf","#e0b060","holyblade","dragonmail","pwr"));const F=new Qt({antialias:!0,preserveDrawingBuffer:!0});F.setSize(128,128);const G=new Jt,lt=new jt(40,1,.05,100),se=new ke(16777215,.85),Tt=new kt(16769725,1);Tt.position.set(3,6,4),G.add(se,Tt);function At(t){G.background=new te(ne[E].bg),G.add(t);const e=new Et().setFromObject(t),n=e.getCenter(new P),a=e.getSize(new P),o=Math.max(a.x,a.y,a.z)*.62+.24;lt.position.set(n.x+o*1.35,n.y+o*1.15,n.z+o*1.85),lt.lookAt(n),F.render(G,lt);const i=F.domElement.toDataURL();return G.remove(t),i}const Ct=c("cats"),rt=[];function Pt(){Ct.innerHTML="",rt.length=0;for(const t of["床・壁・地形","敵","仲間・自機"]){const e=f.filter(o=>o.cat===t),n=document.createElement("h2");n.textContent=`${k(oe[t])}（${e.length}）`,rt.push({el:n,cat:t,n:e.length});const a=document.createElement("div");a.className="grid";for(const o of e){const i=document.createElement("div");i.className="cell";const d=document.createElement("img"),s=document.createElement("div");s.className="nm",s.textContent=ot(o),i.append(d,s),i.addEventListener("click",()=>B(o)),a.appendChild(i),o.el=i,o.img=d,o.nmEl=s}Ct.append(n,a)}}function le(){for(const t of rt)t.el.textContent=`${k(oe[t.cat])}（${t.n}）`;for(const t of f)t.nmEl&&(t.nmEl.textContent=ot(t));h&&(Ht.textContent=ot(h))}function ct(t=!1){for(const e of f)t&&e.cat!=="床・壁・地形"||e.img&&(e.img.src=At(e.build()))}const dt=c("stage"),g=new Qt({antialias:!0});g.toneMapping=Ee,g.toneMappingExposure=1.22,g.setPixelRatio(Math.min(devicePixelRatio,2)),dt.appendChild(g.domElement);const S=new Jt,N=new jt(42,1,.05,200),O=new Me(16777215,2236962,.8),H=new kt(16769725,1);H.position.set(3,4.2,2.4);const I=new kt(8229565,.3);I.position.set(-2.6,1.4,-1.8);const R=new Le(16761470,0,14,2);S.add(R),S.add(O,H,I);const re=new Se(8,8,3753310,2305086);S.add(re);let z=.62,w=.42,y=4;const q=new P(0,.6,0);function J(){const t=ne[E],e=Ie(t);S.background=new te(t.bg),O.color.setHex(e.hemiSky),O.groundColor.setHex(e.hemiGround),H.color.setHex(e.sunCol),I.color.setHex(e.fillCol),R.color.setHex(e.heroCol),M==="live"?(O.intensity=e.hemiI,H.intensity=e.sunI,I.intensity=e.fillI,R.intensity=e.heroI,Lt(e.actFill,e.actFillI)):M==="bright"?(O.intensity=.85,H.intensity=1.05,I.intensity=.3,R.intensity=0,Lt(e.actFill,.1)):(O.intensity=.09,H.intensity=.1,I.intensity=.05,R.intensity=0,Lt(0,0))}function $t(){const t=dt.clientWidth,e=dt.clientHeight;g.setSize(t,e),N.aspect=t/e,N.updateProjectionMatrix()}m.own(window,"resize",$t);function ce(t){const e=new Et().setFromObject(t),n=e.getCenter(new P),a=e.getSize(new P);q.copy(n),y=Math.max(a.x,a.y,a.z)*1.15+.6,R.position.set(n.x+.4,1.9,e.max.z+1.3)}let j=!1,pt=0,mt=0;g.domElement.addEventListener("pointerdown",t=>{t.pointerType!=="touch"&&(j=!0,pt=t.clientX,mt=t.clientY,g.domElement.setPointerCapture(t.pointerId))}),g.domElement.addEventListener("pointermove",t=>{t.pointerType==="touch"||!j||(z+=(t.clientX-pt)*.008,w=Math.min(1.35,Math.max(-.2,w+(t.clientY-mt)*.006)),pt=t.clientX,mt=t.clientY)}),g.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(j=!1)}),g.domElement.addEventListener("wheel",t=>{t.preventDefault(),y=Math.min(40,Math.max(.8,y*(t.deltaY>0?1.08:.93)))},{passive:!1});let T=null;const Ot=t=>Math.min(1.35,Math.max(-.2,t));tn(g.domElement,{strokeStart(t,e){T={x:t,y:e}},strokeMove(t,e){T&&(z+=(t-T.x)*.008,w=Ot(w+(e-T.y)*.006)),T={x:t,y:e}},strokeEnd(){T=null},strokeCancel(){T=null},orbit(t,e){z+=t*.008,w=Ot(w+e*.006)},orbitEnd(){},pinch(t){y=Math.min(40,Math.max(.8,y/t))},undoTap(){},redoTap(){},longPress(){}});const Ht=c("title"),It=c("hint"),de=c("dressrow"),pe=c("animrow");function ut(t){r&&S.remove(r),gt(),u=t,r=new yt,r.add(t),S.add(r),ce(t)}function B(t){var e;h=t;for(const n of f)(e=n.el)==null||e.classList.toggle("sel",n===t);Ht.textContent=ot(t),It.innerHTML=t.hint.replace("THEME",E),de.hidden=!t.dress,pe.style.visibility=t.anim?"visible":"hidden",t.dress&&me(t.actor),ut(t.build())}const Z=c("drace"),V=c("dweapon"),W=c("darmor"),U=c("dacc"),ht=c("dpie"),ft=c("dhero");function tt(t,e){const n=t.value;t.innerHTML=e.map(a=>`<option value="${a.v}">${a.t}</option>`).join(""),n&&[...t.options].some(a=>a.value===n)&&(t.value=n)}function Rt(){const t=(e,n)=>`${k(e)}：${n}`;tt(Z,Object.entries(je).map(([e,n])=>({v:e,t:t("tool.catalog.race",$(n.name))}))),tt(V,[{v:"",t:t("slot.weapon",k("tool.catalog.none"))},...cn.map(e=>({v:e.id,t:t("slot.weapon",$(e.name))}))]),tt(W,[{v:"",t:t("slot.armor",k("tool.catalog.none"))},...dn.map(e=>({v:e.id,t:t("slot.armor",$(e.name))}))]),tt(U,[{v:"",t:t("slot.accessory",k("tool.catalog.none"))},...pn.map(e=>({v:e.id,t:t("slot.accessory",$(e.name))}))])}Rt();function me(t){var e,n,a,o,i,d,s;Z.value=t.race??"human",V.value=((n=(e=t.equipment)==null?void 0:e.weapon)==null?void 0:n.id)??"",W.value=((o=(a=t.equipment)==null?void 0:a.armor)==null?void 0:o.id)??"",U.value=((d=(i=t.equipment)==null?void 0:i.accessory)==null?void 0:d.id)??"",ht.checked=(((s=t.stats)==null?void 0:s.pie)??0)>=10,ft.checked=t.kind==="hero"}function ue(){const t=h;if(!(t!=null&&t.dress)||!t.actor)return;const e=t.actor;e.race=Z.value,e.equipment={weapon:V.value?_(V.value):void 0,armor:W.value?_(W.value):void 0,accessory:U.value?_(U.value):void 0},e.stats={...e.stats,pie:ht.checked?12:7},e.kind=ft.checked?"hero":"ally",ut(t.build()),t.img&&(t.img.src=At(t.build()))}for(const t of[Z,V,W,U,ht,ft])t.addEventListener("change",ue);function gt(){var e,n,a;v&&((e=v.parent)==null||e.remove(v),v.material.dispose(),v=null),b&&((n=b.parent)==null||n.remove(b),b.material.dispose(),b=null),r&&(r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.quaternion.identity());const t=(a=u==null?void 0:u.children)==null?void 0:a[0];t!=null&&t.material&&(t.material.transparent=!1,t.material.opacity=1,t.material.needsUpdate=!0),x=null}function Dt(t){var a,o,i,d;gt();const e=(((a=h==null?void 0:h.actor)==null?void 0:a.size)??1)>=2,n=t==="hit"?300:t==="death"?e?900:620:He[t];if(x={kind:t,t0:performance.now(),dur:n},t==="hit"){const s=(i=(o=u==null?void 0:u.children)==null?void 0:o[0])==null?void 0:i.geometry;s&&(v=new at(s,new Mt({color:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:Zt})),v.scale.set(1.02,1.02,1.02),u.add(v))}if(t==="cast"){const s=new Et().setFromObject(u),p={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074}[((d=h==null?void 0:h.actor)==null?void 0:d.element)??""]??14202111;b=new at(new ze(.5),new Mt({color:p,transparent:!0,opacity:.9,depthWrite:!1,blending:Zt})),b.position.set(0,s.max.y+.3,0),b.scale.setScalar(.02),r.add(b)}}l.querySelectorAll("#animrow [data-anim]").forEach(t=>t.addEventListener("click",()=>Dt(t.dataset.anim))),c("spin").addEventListener("click",t=>{K=!K,t.currentTarget.classList.toggle("on",K)});let et=!1,A=0,C=0,_t=0;function Ft(t){et=t,c("walk").classList.toggle("on",t)}c("walk").addEventListener("click",()=>Ft(!et));function he(t){var X,Xt,Yt,Kt;const e=Math.min(.05,(t-(_t||t))/1e3);_t=t;const n=(X=u==null?void 0:u.children)==null?void 0:X[0],a=n==null?void 0:n.material;if(!((Xt=a==null?void 0:a.userData)!=null&&Xt.gaitA)||!(h!=null&&h.actor))return;const o=Ue(h.actor),i=Math.PI/(o.dur/1e3);if(et)A+=i*e,C=Math.min(1,C+e/.08);else{const D=Math.ceil(A/Math.PI-1e-4)*Math.PI;C>0&&A<D?A=Math.min(D,A+i*e):C=Math.max(0,C-e/.16)}const d=o.hover?o.hover*(.5+.5*Math.sin(t*.0016)):0,s=o.breath?o.breath*(.5+.5*Math.sin(t*.0021)):0,p=Xe(o,A,C,d,s);a.userData.gaitA.value.set(p.a[0],p.a[1],p.a[2],p.a[3]),a.userData.gaitB.value.set(p.b[0],p.b[1]);for(const D of u.children){const Y=(Yt=D.userData)==null?void 0:Yt.sp;if(!Y)continue;const xe=Y.gw??[0,0,0],wt=((Kt=D.userData)==null?void 0:Kt.bk)??1,[ve,we,ye]=Ye([Y.x,Y.y,Y.z],xe,p.a,p.b);D.position.set(ve*wt,we*wt,ye*wt)}}const Gt=new P(1,0,0),Nt=new ee,qt=new ee,fe=new P(0,1,0);function ge(t){var d;if(!x||!r)return;const e=t-x.t0,n=e/x.dur;if(n>=1){gt();return}if(x.kind==="hit"){const s=Ke(n);if(r.position.set(0,0,s.kb),r.scale.set(s.sxz,s.sy,s.sxz),v){const p=Math.min(1,e/210);v.material.opacity=e>210?0:.7*(1-p)}return}if(x.kind==="death"){const s=Ve(n);r.quaternion.setFromAxisAngle(Gt,s.ang),r.position.y=-s.sink;const p=(d=u==null?void 0:u.children)==null?void 0:d[0];p!=null&&p.material&&(p.material.transparent=!0,p.material.opacity=s.opacity);return}const{lunge:a,tilt:o,yawOff:i}=We(x.kind,n);if(r.position.set(0,0,a),Nt.setFromAxisAngle(Gt,o),qt.setFromAxisAngle(fe,i),r.quaternion.copy(Nt).multiply(qt),b&&x.kind==="cast"){const s=Math.min(1,e/260);b.scale.setScalar(.05+.3*s),b.rotation.y+=.1,b.material.opacity=.9*(.45+.55*s)}}c("theme").addEventListener("change",t=>{E=t.target.value,J(),ct(!0),h&&(It.innerHTML=h.hint.replace("THEME",E),h.cat==="床・壁・地形"&&ut(h.build()))});function bt(){const t=c("light");t.textContent=k(`tool.common.light.${M}`),t.classList.toggle("on",M!=="dark")}c("light").addEventListener("click",()=>{M=M==="live"?"bright":M==="bright"?"dark":"live",bt(),J()});function Bt(t){K&&!j&&(z+=.006),ge(t),he(t),N.position.set(q.x+y*Math.sin(z)*Math.cos(w),q.y+y*Math.sin(w),q.z+y*Math.cos(z)*Math.cos(w)),N.lookAt(q),g.render(S,N)}let Vt=0,xt=!1;function Wt(){xt||(Vt=requestAnimationFrame(Wt),Bt(performance.now()))}let nt=null;function Ut(t){var n;const e=f.find(a=>a.id===t||a.name===t);return e?(B(e),(n=e.el)==null||n.scrollIntoView({block:"nearest"}),!0):!1}window.cdCat={trigger:Dt,select:t=>{const e=f.find(n=>n.id===t||n.name===t);return e&&B(e),(e==null?void 0:e.id)??null},pose:()=>r?{z:r.position.z,y:r.position.y,sy:r.scale.y,qx:r.quaternion.x,anim:(x==null?void 0:x.kind)??null}:null,list:()=>f.map(t=>t.id),step:()=>Bt(performance.now()),walk:t=>Ft(t??!et),gait:()=>{var e,n,a;const t=(n=(e=u==null?void 0:u.children)==null?void 0:e[0])==null?void 0:n.material;return(a=t==null?void 0:t.userData)!=null&&a.gaitA?{a:t.userData.gaitA.value.toArray(),b:t.userData.gaitB.value.toArray(),phase:A,k:C}:null},view:(t,e,n)=>{z=t,w=e,n!=null&&(y=n)},light:t=>{M=t,J()}};const be=en(()=>{le(),Rt(),bt()});Pt(),J(),bt(),$t(),ct(),B(f.find(t=>t.id==="mon:ドラゴン")??f[0]),Wt();const vt=m.world();return vt!==an&&(async()=>{try{const t=await fetch(`/packs/${vt.replace("/","--")}.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=on(await t.json());if(xt)return;Qe(e.monsters.length?e.monsters:null),e.models.length&&Pe($e(e.models)),e.parts.length&&Oe(e.parts.map(sn)),zt(),Pt(),ct(),nt&&Ut(nt)||B(f.find(n=>n.cat==="敵")??f[0]),nt=null}catch(t){console.warn(`world pack（${vt}）の読込に失敗＝旗艦の台帳で表示`,t)}})(),{applyParams(t){const e=t.get("sel");e&&(Ut(e)||(nt=e))},dispose(){xt=!0,cancelAnimationFrame(Vt),be();try{g.dispose(),g.forceContextLoss(),g.domElement.remove()}catch{}try{F.dispose(),F.forceContextLoss()}catch{}delete window.cdCat}}}};export{Ln as catalogPanel};
