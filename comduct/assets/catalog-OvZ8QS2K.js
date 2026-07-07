import{G as kt,W as jt,S as Jt,P as Zt,f as xe,D as Mt,A as we,H as ye,a as ke,j as Me,g as Et,M as ot,O as Ee,d as Lt,m as te,C as ee,V as C,B as Le,Q as ne}from"./three.module-WWCVshk5.js";import{V as Se,T as Te,r as ze,_ as Ae,A as Pe,E as ae,n as Ce,s as St,j as $e,k as He,l as Ie,m as Oe,q as De,o as Re,G as _e,L as Fe,M as Ge,t as Ne,u as Be,w as qe,x as Ve,y as We}from"./render-voxel-DLwvligx.js";import{l as Ue,M as Xe,R as Ye,I as oe,C as Ke}from"./dungeon-DcBv29WF.js";import{a as Qe}from"./touch-input-D1HYJrcI.js";import{o as je}from"./studio-CPMgf-Fe.js";import{c as Je,t as k,D as Ze,u as $}from"./world-ui-BxqA3wkJ.js";import{p as tn}from"./gamepack-Yh6e9waZ.js";import{g as en,a as nn,v as an}from"./voxmodel-BFmqjwtD.js";import"./tables-BtvlRO7S.js";import"./monster-CnZB6dQE.js";import"./creator-auth-C2cecs39.js";const on=`<!-- ============================================================
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
`,sn=Ke.flatMap(l=>l.out==="item"?[l.item]:[]),st=[...oe,...sn.filter(l=>!oe.some(m=>m.id===l.id))],F=l=>st.find(m=>m.id===l),ln=st.filter(l=>l.kind==="weapon"),rn=st.filter(l=>l.kind==="armor"),cn=st.filter(l=>l.kind==="accessory"),it=l=>{var m;return((m=l.nameOf)==null?void 0:m.call(l))??l.name},ie={"床・壁・地形":"tool.catalog.cat.tiles",敵:"tool.catalog.cat.mons","仲間・自機":"tool.catalog.cat.figs"},dn=new Le(1,1,1);function Tt(l){const m=De(l);if(Re().some(M=>M.id===m))return`<b>data/models/${m}.json</b>（truth モデル＝<b>sculpt.html</b> で彫る・灯りも data の glow）／dungeon.ts MONSTERS（能力）`;const d=_e[m]?`／<b>GLOW_HEX['${m}']</b>（灯り）`:"";return Fe[m]?`render-voxel.ts <b>LARGE_BUILDERS['${m}']</b>（GB 彫刻）${d}／dungeon.ts MONSTERS（能力）`:Ge[m]?`render-voxel.ts <b>MON_VOX['${m}']</b>（スライス定義・sculpt.html で取り込み可）${d}／dungeon.ts MONSTERS（能力）`:`render-voxel.ts <b>monsterBoxes()</b> の t==='${m}' 分岐${d}／dungeon.ts MONSTERS（能力）`}const pn="render-voxel.ts <b>figureBoxes()</b>／<b>raceSpecOf()</b>（種族差）＋ dungeon-types.ts <b>weaponVisual/armorVisual/accVisual</b>（装備→見た目）＋ dungeon.ts ITEM_POOL/CRAFT_RECIPES（台帳）",Mn={id:"catalog",async mount(l,m){l.innerHTML=on,Je(l);const d=t=>l.querySelector(`#${t}`);let M="plain",E="live",Q=!1,h=null,u=null,c=null,v=null,x=null,b=null;const se=new Se(document.createElement("div"),()=>{});function j(t){const{geo:e,spots:n}=$e(t),a=new kt,o=t.kind==="monster"&&He(t)?Ie(t)/100:1;{const i=new ot(e,Oe());o!==1&&i.scale.setScalar(o),a.add(i)}for(const i of n){const p=new ot(dn,new Lt({color:i.c}));p.position.set(i.x*o,i.y*o,i.z*o),p.scale.set(i.sx*o,i.sy*o,i.sz*o),p.userData.sp=i,p.userData.bk=o,a.add(p)}return a}const f=[];for(const t of Te)f.push({id:"tile:"+t.id,name:t.name,cat:"床・壁・地形",hint:`${t.hint}／テーマ色は <b>ENV['THEME']</b>`,nameOf:()=>k(`tool.catalog.tile.${t.id}`),build:()=>{const e=se.buildSample(M,t.id);e.position.set(-1,0,-1);const n=new kt;return n.add(e),n}});const lt=(t,e={})=>({kind:"monster",name:t,color:"#e07a44",equipment:{},stats:{},pos:{x:0,y:0},facing:{dx:0,dy:1},...e});function zt(){for(let e=f.length-1;e>=0;e--)f[e].cat==="敵"&&f.splice(e,1);const t=[];for(const e of Xe){const n=lt(e.name,{size:e.size,heads:e.heads,element:e.element});t.push({id:"mon:"+e.name,name:e.name+(e.size?`（${e.size}×${e.size}）`:""),cat:"敵",hint:Tt(n),nameOf:()=>$(e.name)+(e.size?`（${e.size}×${e.size}）`:""),build:()=>j(n),actor:n,anim:!0})}for(const e of["fire","ice","earth","holy"]){const n={fire:"火",ice:"氷",earth:"土",holy:"聖"}[e],a=lt(`${n}の術士`,{element:e});t.push({id:"mon:caster-"+e,name:`${n}の術士`,cat:"敵",hint:Tt(a),nameOf:()=>$(`${n}の術士`),build:()=>j(a),actor:a,anim:!0})}for(const[e,n]of[["番兵",{}],["魔物の巣",{}],["封印のボス",{size:2,heads:2}]]){const a=lt(e,n);t.push({id:"mon:"+e,name:e,cat:"敵",hint:Tt(a),nameOf:()=>$(e),build:()=>j(a),actor:a,anim:!0})}f.push(...t)}zt();const L=(t,e,n,a,o,i,p,s,r=7)=>{const Y={kind:n,race:a,color:o,pos:{x:0,y:0},facing:{dx:0,dy:1},stats:{pie:r},equipment:{weapon:i?F(i):void 0,armor:p?F(p):void 0,accessory:s?F(s):void 0}};return{id:"fig:"+t,name:t,cat:"仲間・自機",hint:pn,nameOf:()=>k(e),build:()=>j(Y),actor:Y,dress:!0,anim:!0}};f.push(L("主人公（鋼の剣・鉄鎧）","tool.catalog.fig.hero","hero","human","#ffd24a","steel","iarmor"),L("ハーフットの斥候（毒の刃・革鎧）","tool.catalog.fig.scout","ally","halffoot","#46c7bf","venomblade","larmor"),L("ドワーフの戦士（戦斧・鎖帷子）","tool.catalog.fig.warrior","ally","dwarf","#e0b060","axe","chain"),L("エルフの射手（焔の弓）","tool.catalog.fig.archer","ally","elf","#9b8cff","firebow","larmor"),L("ノームの魔道士（魔道書）","tool.catalog.fig.mage","ally","gnome","#7fd06a","grimoire"),L("人間の僧（木の杖・聖印）","tool.catalog.fig.priest","ally","human","#ff9ec4","staff","larmor","life",12),L("竜鱗の重戦士（聖銀の剣・竜鱗の鎧）","tool.catalog.fig.dragoon","ally","dwarf","#e0b060","holyblade","dragonmail","pwr"));const G=new jt({antialias:!0,preserveDrawingBuffer:!0});G.setSize(128,128);const N=new Jt,rt=new Zt(40,1,.05,100),le=new xe(16777215,.85),At=new Mt(16769725,1);At.position.set(3,6,4),N.add(le,At);function Pt(t){N.background=new ee(ae[M].bg),N.add(t);const e=new Et().setFromObject(t),n=e.getCenter(new C),a=e.getSize(new C),o=Math.max(a.x,a.y,a.z)*.62+.24;rt.position.set(n.x+o*1.35,n.y+o*1.15,n.z+o*1.85),rt.lookAt(n),G.render(N,rt);const i=G.domElement.toDataURL();return N.remove(t),i}const Ct=d("cats"),ct=[];function $t(){Ct.innerHTML="",ct.length=0;for(const t of["床・壁・地形","敵","仲間・自機"]){const e=f.filter(o=>o.cat===t),n=document.createElement("h2");n.textContent=`${k(ie[t])}（${e.length}）`,ct.push({el:n,cat:t,n:e.length});const a=document.createElement("div");a.className="grid";for(const o of e){const i=document.createElement("div");i.className="cell";const p=document.createElement("img"),s=document.createElement("div");s.className="nm",s.textContent=it(o),i.append(p,s),i.addEventListener("click",()=>V(o)),a.appendChild(i),o.el=i,o.img=p,o.nmEl=s}Ct.append(n,a)}}function re(){for(const t of ct)t.el.textContent=`${k(ie[t.cat])}（${t.n}）`;for(const t of f)t.nmEl&&(t.nmEl.textContent=it(t));h&&(Ot.textContent=it(h))}function dt(t=!1){for(const e of f)t&&e.cat!=="床・壁・地形"||e.img&&(e.img.src=Pt(e.build()))}const pt=d("stage"),g=new jt({antialias:!0});g.toneMapping=we,g.toneMappingExposure=1.22,g.setPixelRatio(Math.min(devicePixelRatio,2)),pt.appendChild(g.domElement);const S=new Jt,B=new Zt(42,1,.05,200),H=new ye(16777215,2236962,.8),I=new Mt(16769725,1);I.position.set(3,4.2,2.4);const O=new Mt(8229565,.3);O.position.set(-2.6,1.4,-1.8);const D=new ke(16761470,0,14,2);S.add(D),S.add(H,I,O);const ce=new Me(8,8,3753310,2305086);S.add(ce);let T=.62,w=.42,y=4;const q=new C(0,.6,0);function J(){const t=ae[M],e=Ce(t);S.background=new ee(t.bg),H.color.setHex(e.hemiSky),H.groundColor.setHex(e.hemiGround),I.color.setHex(e.sunCol),O.color.setHex(e.fillCol),D.color.setHex(e.heroCol),E==="live"?(H.intensity=e.hemiI,I.intensity=e.sunI,O.intensity=e.fillI,D.intensity=e.heroI,St(e.actFill,e.actFillI)):E==="bright"?(H.intensity=.85,I.intensity=1.05,O.intensity=.3,D.intensity=0,St(e.actFill,.1)):(H.intensity=.09,I.intensity=.1,O.intensity=.05,D.intensity=0,St(0,0))}function Ht(){const t=pt.clientWidth,e=pt.clientHeight;g.setSize(t,e),B.aspect=t/e,B.updateProjectionMatrix()}m.own(window,"resize",Ht);function de(t){const e=new Et().setFromObject(t),n=e.getCenter(new C),a=e.getSize(new C);q.copy(n),y=Math.max(a.x,a.y,a.z)*1.15+.6,D.position.set(n.x+.4,1.9,e.max.z+1.3)}let Z=!1,mt=0,ut=0;g.domElement.addEventListener("pointerdown",t=>{t.pointerType!=="touch"&&(Z=!0,mt=t.clientX,ut=t.clientY,g.domElement.setPointerCapture(t.pointerId))}),g.domElement.addEventListener("pointermove",t=>{t.pointerType==="touch"||!Z||(T+=(t.clientX-mt)*.008,w=Math.min(1.35,Math.max(-.2,w+(t.clientY-ut)*.006)),mt=t.clientX,ut=t.clientY)}),g.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(Z=!1)}),g.domElement.addEventListener("wheel",t=>{t.preventDefault(),y=Math.min(40,Math.max(.8,y*(t.deltaY>0?1.08:.93)))},{passive:!1});let z=null;const It=t=>Math.min(1.35,Math.max(-.2,t));Qe(g.domElement,{strokeStart(t,e){z={x:t,y:e}},strokeMove(t,e){z&&(T+=(t-z.x)*.008,w=It(w+(e-z.y)*.006)),z={x:t,y:e}},strokeEnd(){z=null},strokeCancel(){z=null},orbit(t,e){T+=t*.008,w=It(w+e*.006)},orbitEnd(){},pinch(t){y=Math.min(40,Math.max(.8,y/t))},undoTap(){},redoTap(){},longPress(){}});const Ot=d("title"),Dt=d("hint"),pe=d("dressrow"),me=d("animrow");function ht(t){c&&S.remove(c),bt(),u=t,c=new kt,c.add(t),S.add(c),de(t)}function V(t){var e;h=t;for(const n of f)(e=n.el)==null||e.classList.toggle("sel",n===t);Ot.textContent=it(t),Dt.innerHTML=t.hint.replace("THEME",M),pe.hidden=!t.dress,me.style.visibility=t.anim?"visible":"hidden",t.dress&&ue(t.actor),ht(t.build())}const tt=d("drace"),W=d("dweapon"),U=d("darmor"),X=d("dacc"),ft=d("dpie"),gt=d("dhero");function et(t,e){const n=t.value;t.innerHTML=e.map(a=>`<option value="${a.v}">${a.t}</option>`).join(""),n&&[...t.options].some(a=>a.value===n)&&(t.value=n)}function Rt(){const t=(e,n)=>`${k(e)}：${n}`;et(tt,Object.entries(Ye).map(([e,n])=>({v:e,t:t("tool.catalog.race",$(n.name))}))),et(W,[{v:"",t:t("slot.weapon",k("tool.catalog.none"))},...ln.map(e=>({v:e.id,t:t("slot.weapon",$(e.name))}))]),et(U,[{v:"",t:t("slot.armor",k("tool.catalog.none"))},...rn.map(e=>({v:e.id,t:t("slot.armor",$(e.name))}))]),et(X,[{v:"",t:t("slot.accessory",k("tool.catalog.none"))},...cn.map(e=>({v:e.id,t:t("slot.accessory",$(e.name))}))])}Rt();function ue(t){var e,n,a,o,i,p,s;tt.value=t.race??"human",W.value=((n=(e=t.equipment)==null?void 0:e.weapon)==null?void 0:n.id)??"",U.value=((o=(a=t.equipment)==null?void 0:a.armor)==null?void 0:o.id)??"",X.value=((p=(i=t.equipment)==null?void 0:i.accessory)==null?void 0:p.id)??"",ft.checked=(((s=t.stats)==null?void 0:s.pie)??0)>=10,gt.checked=t.kind==="hero"}function he(){const t=h;if(!(t!=null&&t.dress)||!t.actor)return;const e=t.actor;e.race=tt.value,e.equipment={weapon:W.value?F(W.value):void 0,armor:U.value?F(U.value):void 0,accessory:X.value?F(X.value):void 0},e.stats={...e.stats,pie:ft.checked?12:7},e.kind=gt.checked?"hero":"ally",ht(t.build()),t.img&&(t.img.src=Pt(t.build()))}for(const t of[tt,W,U,X,ft,gt])t.addEventListener("change",he);function bt(){var e,n,a;x&&((e=x.parent)==null||e.remove(x),x.material.dispose(),x=null),b&&((n=b.parent)==null||n.remove(b),b.material.dispose(),b=null),c&&(c.position.set(0,0,0),c.rotation.set(0,0,0),c.scale.set(1,1,1),c.quaternion.identity());const t=(a=u==null?void 0:u.children)==null?void 0:a[0];t!=null&&t.material&&(t.material.transparent=!1,t.material.opacity=1,t.material.needsUpdate=!0),v=null}function _t(t){var a,o,i,p;bt();const e=(((a=h==null?void 0:h.actor)==null?void 0:a.size)??1)>=2,n=t==="hit"?300:t==="death"?e?900:620:Pe[t];if(v={kind:t,t0:performance.now(),dur:n},t==="hit"){const s=(i=(o=u==null?void 0:u.children)==null?void 0:o[0])==null?void 0:i.geometry;s&&(x=new ot(s,new Lt({color:16777215,transparent:!0,opacity:.7,depthWrite:!1,blending:te})),x.scale.set(1.02,1.02,1.02),u.add(x))}if(t==="cast"){const s=new Et().setFromObject(u),r={fire:16747066,ice:10476799,earth:14198858,holy:16771496,poison:9428074}[((p=h==null?void 0:h.actor)==null?void 0:p.element)??""]??14202111;b=new ot(new Ee(.5),new Lt({color:r,transparent:!0,opacity:.9,depthWrite:!1,blending:te})),b.position.set(0,s.max.y+.3,0),b.scale.setScalar(.02),c.add(b)}}l.querySelectorAll("#animrow [data-anim]").forEach(t=>t.addEventListener("click",()=>_t(t.dataset.anim))),d("spin").addEventListener("click",t=>{Q=!Q,t.currentTarget.classList.toggle("on",Q)});let nt=!1,A=0,P=0,Ft=0;function Gt(t){nt=t,d("walk").classList.toggle("on",t)}d("walk").addEventListener("click",()=>Gt(!nt));function fe(t){var Y,Yt,Kt,Qt;const e=Math.min(.05,(t-(Ft||t))/1e3);Ft=t;const n=(Y=u==null?void 0:u.children)==null?void 0:Y[0],a=n==null?void 0:n.material;if(!((Yt=a==null?void 0:a.userData)!=null&&Yt.gaitA)||!(h!=null&&h.actor))return;const o=Be(h.actor),i=Math.PI/(o.dur/1e3);if(nt)A+=i*e,P=Math.min(1,P+e/.08);else{const R=Math.ceil(A/Math.PI-1e-4)*Math.PI;P>0&&A<R?A=Math.min(R,A+i*e):P=Math.max(0,P-e/.16)}const p=o.hover?o.hover*(.5+.5*Math.sin(t*.0016)):0,s=o.breath?o.breath*(.5+.5*Math.sin(t*.0021)):0,r=qe(o,A,P,p,s);a.userData.gaitA.value.set(r.a[0],r.a[1],r.a[2],r.a[3]),a.userData.gaitB.value.set(r.b[0],r.b[1]);for(const R of u.children){const K=(Kt=R.userData)==null?void 0:Kt.sp;if(!K)continue;const _=K.gw??[0,0,0],yt=((Qt=R.userData)==null?void 0:Qt.bk)??1;R.position.set((K.x+r.a[3]*_[2])*yt,(K.y+r.a[2]*(.15+.85*Math.min(Math.abs(_[2]),1))+r.b[0]*Math.max(0,r.b[1]*Math.sign(_[0]))*Math.abs(_[0]))*yt,(K.z+r.a[0]*_[0]+r.a[1]*_[1])*yt)}}const Nt=new C(1,0,0),Bt=new ne,qt=new ne,ge=new C(0,1,0);function be(t){var p;if(!v||!c)return;const e=t-v.t0,n=e/v.dur;if(n>=1){bt();return}if(v.kind==="hit"){const s=Ve(n);if(c.position.set(0,0,s.kb),c.scale.set(s.sxz,s.sy,s.sxz),x){const r=Math.min(1,e/210);x.material.opacity=e>210?0:.7*(1-r)}return}if(v.kind==="death"){const s=We(n);c.quaternion.setFromAxisAngle(Nt,s.ang),c.position.y=-s.sink;const r=(p=u==null?void 0:u.children)==null?void 0:p[0];r!=null&&r.material&&(r.material.transparent=!0,r.material.opacity=s.opacity);return}const{lunge:a,tilt:o,yawOff:i}=Ne(v.kind,n);if(c.position.set(0,0,a),Bt.setFromAxisAngle(Nt,o),qt.setFromAxisAngle(ge,i),c.quaternion.copy(Bt).multiply(qt),b&&v.kind==="cast"){const s=Math.min(1,e/260);b.scale.setScalar(.05+.3*s),b.rotation.y+=.1,b.material.opacity=.9*(.45+.55*s)}}d("theme").addEventListener("change",t=>{M=t.target.value,J(),dt(!0),h&&(Dt.innerHTML=h.hint.replace("THEME",M),h.cat==="床・壁・地形"&&ht(h.build()))});function vt(){const t=d("light");t.textContent=k(`tool.common.light.${E}`),t.classList.toggle("on",E!=="dark")}d("light").addEventListener("click",()=>{E=E==="live"?"bright":E==="bright"?"dark":"live",vt(),J()});function Vt(t){Q&&!Z&&(T+=.006),be(t),fe(t),B.position.set(q.x+y*Math.sin(T)*Math.cos(w),q.y+y*Math.sin(w),q.z+y*Math.cos(T)*Math.cos(w)),B.lookAt(q),g.render(S,B)}let Wt=0,xt=!1;function Ut(){xt||(Wt=requestAnimationFrame(Ut),Vt(performance.now()))}let at=null;function Xt(t){var n;const e=f.find(a=>a.id===t||a.name===t);return e?(V(e),(n=e.el)==null||n.scrollIntoView({block:"nearest"}),!0):!1}window.cdCat={trigger:_t,select:t=>{const e=f.find(n=>n.id===t||n.name===t);return e&&V(e),(e==null?void 0:e.id)??null},pose:()=>c?{z:c.position.z,y:c.position.y,sy:c.scale.y,qx:c.quaternion.x,anim:(v==null?void 0:v.kind)??null}:null,list:()=>f.map(t=>t.id),step:()=>Vt(performance.now()),walk:t=>Gt(t??!nt),gait:()=>{var e,n,a;const t=(n=(e=u==null?void 0:u.children)==null?void 0:e[0])==null?void 0:n.material;return(a=t==null?void 0:t.userData)!=null&&a.gaitA?{a:t.userData.gaitA.value.toArray(),b:t.userData.gaitB.value.toArray(),phase:A,k:P}:null},view:(t,e,n)=>{T=t,w=e,n!=null&&(y=n)},light:t=>{E=t,J()}};const ve=je(()=>{re(),Rt(),vt()});$t(),J(),vt(),Ht(),dt(),V(f.find(t=>t.id==="mon:ドラゴン")??f[0]),Ut();const wt=m.world();return wt!==Ze&&(async()=>{try{const t=await fetch(`/packs/${wt.replace("/","--")}.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=tn(await t.json());if(xt)return;Ue(e.monsters.length?e.monsters:null),e.models.length&&ze(e.models.map(n=>({id:n.id,name:n.name,vox:nn(n),glow:en(n)}))),e.parts.length&&Ae(e.parts.map(an)),zt(),$t(),dt(),at&&Xt(at)||V(f.find(n=>n.cat==="敵")??f[0]),at=null}catch(t){console.warn(`world pack（${wt}）の読込に失敗＝旗艦の台帳で表示`,t)}})(),{applyParams(t){const e=t.get("sel");e&&(Xt(e)||(at=e))},dispose(){xt=!0,cancelAnimationFrame(Wt),ve();try{g.dispose(),g.forceContextLoss(),g.domElement.remove()}catch{}try{G.dispose(),G.forceContextLoss()}catch{}delete window.cdCat}}}};export{Mn as catalogPanel};
