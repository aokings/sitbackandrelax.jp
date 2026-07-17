import{O as lo,Q as Qo,R as Xo,d as en}from"./tables-3KScslBT.js";import{T as tn}from"./tables-doc-Clxj5t_C.js";import{e as Zt}from"./draft-editor-registry-D6E4VN9B.js";import{k as Y,j as be,h as Qt,t as i,g as on,d as nn}from"./ui-confirm-B1a0wtbi.js";import{r as rn,h as pn}from"./stale-card-CdbJ7s3s.js";import{o as ln,l as ut,b as Xt}from"./llm-_hC_o_Th.js";import{c as ft,p as Te,a as mt,b as an,f as sn,d as dn}from"./modelref-picker-B_5H3iIO.js";import{D as ao,H as W,F as cn,j as ht,I as un,J as fn,K as mn,_ as eo,N as hn,O as vn}from"./render-voxel-CqjyvOEq.js";import{i as xn}from"./status-CoghzNI4.js";import{k as bn,H as gn,l as yn,n as wn,q as kn,s as Sn,t as Cn,u as En,v as Tn,w as An,x as to,i as Rn}from"./parts-workbench-CbmUYPNl.js";import{c as vt}from"./dungeon-CrrX07Lq.js";import{p as Hn}from"./tuner-core-jthNyDov.js";import{o as Ln}from"./testbed-Dxlu7O1h.js";import"./three.module-C7yXn3za.js";import"./play-input-BYi92GtF.js";import"./gamepack-D3b60uQv.js";import"./pack-handoff-client-C-AMTnth.js";import"./playtest-core--LbO5RoM.js";const Ae=2,On=Object.freeze(["face","hair","arm","upper","lower","palette","review"]),P=Object.freeze(["face","hair","arm","upper","lower","palette"]),Ke=Object.freeze(["skin","hair","primary","secondary","gem"]),Nn=Object.freeze(["pending","selected","kept","no-fit"]);function $e(t,r,l){return Object.freeze({id:t,name:r,palette:Object.freeze({...l})})}const Ve=Object.freeze([$e("amber-shop","琥珀の道具屋",{skin:"#d8a878",hair:"#4e3620",primary:"#6a5138",secondary:"#4e5666",gem:"#ffd27f"}),$e("forest-trader","森の行商",{skin:"#c99068",hair:"#2f3525",primary:"#596443",secondary:"#75533b",gem:"#9ee6a8"}),$e("night-lantern","夜灯り",{skin:"#d3a07c",hair:"#25233a",primary:"#394a70",secondary:"#765d86",gem:"#7fd0ff"}),$e("crimson-market","茜の商い",{skin:"#b9785b",hair:"#5a2c28",primary:"#813f45",secondary:"#3f5960",gem:"#f2c66d"})]),qe=Object.freeze({face:W.face[0].id,hair:W.hair[0].id,arm:W.arm[0].id,upper:W.upper[0].id,lower:W.lower[0].id,palette:Ve[0].id}),Pn=new Map(Ve.map(t=>[t.id,t])),ne=Object.freeze({face:Object.freeze(W.face.map(({id:t})=>t)),hair:Object.freeze(W.hair.map(({id:t})=>t)),arm:Object.freeze(W.arm.map(({id:t})=>t)),upper:Object.freeze(W.upper.map(({id:t})=>t)),lower:Object.freeze(W.lower.map(({id:t})=>t)),palette:Object.freeze(Ve.map(({id:t})=>t))}),Je=Object.freeze({face:new Set(ne.face),hair:new Set(ne.hair),arm:new Set(ne.arm),upper:new Set(ne.upper),lower:new Set(ne.lower),palette:new Set(ne.palette)});function Dn(t){return ne[t]}function Mn(t,r={}){var n;const l=typeof t.palette=="string"?(n=Pn.get(t.palette))==null?void 0:n.palette:Re(t.palette);if(!l)throw new Error(`H2で使えないpaletteです: ${String(t.palette)}`);const a=cn(t,{lantern:!0});return{...a,parts:{...a.parts,weapon:"lantern"},palette:{...l},...r.body!==void 0?{body:r.body}:{},...r.paint?{paint:co(r.paint)}:{}}}function In(t,r={}){return be(Mn(t,r))}function Re(t){if(!t||typeof t!="object"||Array.isArray(t))return null;const r=t;if(Object.keys(r).length!==Ke.length)return null;const l={};for(const a of Ke){const n=r[a];if(typeof n!="string"||!/^#[0-9a-f]{6}$/i.test(n))return null;l[a]=n}return l}function so(t){const r=Re(t);if(!r)return null;for(const l of Ve)if(Ke.every(a=>r[a]===l.palette[a]))return l.id;return null}function co(t){return t.map(r=>JSON.parse(JSON.stringify(r)))}function uo(t){try{const r=Y(t);return typeof r=="string"?{}:{...r.body!==void 0?{body:r.body}:{},...r.paint?{paint:co(r.paint)}:{}}}catch{return{}}}function fo(t){try{const r=Y(t);if(typeof r=="string"||r.rig!=="humanoid")return null;const l=ao(r.parts),a=Re(r.palette);return!l||!a?null:{selection:{...l,palette:so(a)??a},preserved:uo(t)}}catch{return null}}function mo(t){return fo(t)!=null}function ho(t){const r=fo(t);if(r)return r.selection;try{const l=Y(t);if(typeof l=="string")return{...qe};const a=ao(l.parts)??qe,n=so(l.palette)??Re(l.palette)??qe.palette;return{...a,palette:n}}catch{return{...qe}}}function Ye(t,r){return In(r,uo(t))}function jn(){return{face:"pending",hair:"pending",arm:"pending",upper:"pending",lower:"pending",palette:"pending"}}const ee=()=>new Date().toISOString();function wt(t){return`cdHeroComposerH2:v${Ae}:${encodeURIComponent(t)}`}function vo(t){return{...t,...typeof t.palette=="string"?{}:{palette:{...t.palette}}}}function xo(t){return{...t}}function We(t){return{currentStep:t.currentStep,selections:vo(t.selections),decisions:xo(t.decisions),currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion}}function bo(t,r){const l=P.indexOf(r);for(let a=1;a<=P.length;a+=1){const n=P[(l+a)%P.length];if(t[n]==="pending")return n}return"review"}function Ge(t,r,l=ee(),a=r){return{v:Ae,world:t,currentStep:"face",selections:ho(r),decisions:jn(),baselineRefText:r,authoritativeRefText:a,currentRefText:r,draftSource:"baseline",conversion:mo(r)?"not-required":"required",updatedAt:l}}function j(t){return t.conversion==="required"||t.conversion==="declined"}function go(t,r=ee()){return t.conversion!=="required"?t:{...t,conversion:"declined",undo:We(t),updatedAt:r}}function yo(t,r=ee()){return j(t)?{...t,currentRefText:Ye(t.baselineRefText,t.selections),draftSource:"composer",conversion:"confirmed",undo:We(t),updatedAt:r}:t}function oo(t,r,l=ee()){if(!P.includes(r))throw new Error(`H2に無いaxisです: ${String(r)}`);return t.currentStep===r?t:{...t,currentStep:r,updatedAt:l}}function wo(t,r,l=ee()){if(t.currentStep==="review")throw new Error("H2 review段には候補がありません");if(j(t))throw new Error("H2のopaque baselineは明示変換してから候補を選んでください");const a=t.currentStep;if(!Je[a].has(r))throw new Error(`H2 ${a}に無い候補です: ${r}`);const n={...t.selections,[a]:r},b={...t.decisions,[a]:"selected"};return{...t,currentStep:bo(b,a),selections:n,decisions:b,currentRefText:Ye(t.baselineRefText,n),draftSource:"composer",undo:We(t),updatedAt:l}}function _n(t,r,l){const a=l??(t.currentStep==="review"?null:t.currentStep);if(!a)throw new Error("H2 review段には候補refがありません");if(j(t))throw new Error("H2のopaque baselineは明示変換してから候補を表示してください");if(!Je[a].has(r))throw new Error(`H2 ${a}に無い候補です: ${r}`);const n={...t.selections,[a]:r};return Ye(t.baselineRefText,n)}function ko(t,r,l){if(t.currentStep==="review")return t;if(j(t))throw new Error("H2のopaque baselineは明示変換または現状維持を選んでください");const a=t.currentStep,n={...t.decisions,[a]:r};return{...t,currentStep:bo(n,a),decisions:n,undo:We(t),updatedAt:l}}function So(t,r=ee()){return ko(t,"kept",r)}function Co(t,r=ee()){return ko(t,"no-fit",r)}function zn(t,r=ee()){return t.undo?{...t,currentStep:t.undo.currentStep,selections:vo(t.undo.selections),decisions:xo(t.undo.decisions),currentRefText:t.undo.currentRefText,draftSource:t.undo.draftSource,conversion:t.undo.conversion,undo:void 0,updatedAt:r}:t}function xt(t,r){return t.decisions[r]}function bt(t,r){return r?t.decisions[r]==="no-fit":P.some(l=>t.decisions[l]==="no-fit")}function Bn(t){return P.filter(r=>t.decisions[r]==="pending"||t.decisions[r]==="no-fit")}function no(t){return!j(t)&&P.every(r=>t.decisions[r]==="selected"||t.decisions[r]==="kept")}function Eo(t,r,l=ee(),a=t.authoritativeRefText){return Ge(t.world,r,l,a)}function Ze(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function Qe(t,r,l=[]){const a=new Set([...r,...l]);return r.every(n=>Object.prototype.hasOwnProperty.call(t,n))&&Object.keys(t).every(n=>a.has(n))}function Fn(t){return typeof t=="string"&&On.includes(t)}function $n(t){if(!Ze(t)||!Qe(t,["face","hair","arm","upper","lower","palette"]))return null;for(const l of["face","hair","arm","upper","lower"])if(typeof t[l]!="string"||!Je[l].has(t[l]))return null;const r=typeof t.palette=="string"?Je.palette.has(t.palette)?t.palette:null:Re(t.palette);return r?{face:t.face,hair:t.hair,arm:t.arm,upper:t.upper,lower:t.lower,palette:r}:null}function qn(t){if(!Ze(t)||!Qe(t,P))return null;for(const r of P)if(!Nn.includes(t[r]))return null;return{...t}}function To(t,r){return P.every(l=>{const a=t[l],n=r[l];return l!=="palette"||typeof a=="string"||typeof n=="string"?a===n:Ke.every(b=>a[b]===n[b])})}function Gn(t,r){return P.every(l=>t[l]===r[l])}function ro(t,r){if(!Ze(t)||!Qe(t,["currentStep","selections","decisions","currentRefText","draftSource","conversion"])||!Fn(t.currentStep)||typeof t.currentRefText!="string"||t.draftSource!=="baseline"&&t.draftSource!=="composer"||t.conversion!=="not-required"&&t.conversion!=="required"&&t.conversion!=="declined"&&t.conversion!=="confirmed")return null;const l=$n(t.selections),a=qn(t.decisions);if(!l||!a||t.currentStep==="review"&&P.some(b=>a[b]==="pending")||(mo(r)?t.conversion!=="not-required":t.conversion==="not-required")||(t.conversion==="required"||t.conversion==="declined")&&t.draftSource!=="baseline"||t.conversion==="confirmed"&&t.draftSource!=="composer"||(t.conversion==="required"||t.conversion==="declined")&&P.some(b=>a[b]!=="pending"))return null;if(t.draftSource==="baseline"){if(!To(l,ho(r))||t.currentRefText!==r||P.some(b=>a[b]==="selected"))return null}else if(t.currentRefText!==Ye(r,l))return null;return{currentStep:t.currentStep,selections:l,decisions:a,currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion}}function Un(t,r){return To(t.selections,r.selections)&&Gn(t.decisions,r.decisions)&&t.currentRefText===r.currentRefText&&t.draftSource===r.draftSource&&t.conversion===r.conversion}function Kn(t,r,l,a,n,b){const E={v:Ae,world:l,...t,baselineRefText:a,authoritativeRefText:n,updatedAt:b},c=[];if(j(E)&&(c.push(yo(E,b)),c.push(go(E,b))),E.currentStep!=="review"&&!j(E)){c.push(So(E,b),Co(E,b));for(const g of ne[E.currentStep])c.push(wo(E,g,b))}return c.some(g=>Un(g,r))}function Jn(t){if(!Ze(t)||!Qe(t,["v","world","currentStep","selections","decisions","baselineRefText","authoritativeRefText","currentRefText","draftSource","conversion","updatedAt"],["undo"])||t.v!==Ae||typeof t.world!="string"||typeof t.baselineRefText!="string"||typeof t.authoritativeRefText!="string"||typeof t.updatedAt!="string")return null;const r=ro({currentStep:t.currentStep,selections:t.selections,decisions:t.decisions,currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion},t.baselineRefText);if(!r)return null;let l;if(t.undo!==void 0){const a=ro(t.undo,t.baselineRefText);if(!a||!Kn(a,r,t.world,t.baselineRefText,t.authoritativeRefText,t.updatedAt))return null;l=a}return{v:Ae,world:t.world,...r,baselineRefText:t.baselineRefText,authoritativeRefText:t.authoritativeRefText,...l?{undo:l}:{},updatedAt:t.updatedAt}}function Vn(t,r){const l=wt(r);try{const a=t.getItem(l);if(!a)return null;const n=Jn(JSON.parse(a));return!n||n.world!==r?(t.removeItem(l),null):n}catch{try{t.removeItem(l)}catch{}return null}}function Yn(t,r){try{t.setItem(wt(r.world),JSON.stringify(r))}catch{}}function Wn(t,r){try{t.removeItem(wt(r))}catch{}}function Zn(t,r,l){return t.world!==r?null:l===t.authoritativeRefText?t:l===t.currentRefText?Eo(t,l,void 0,l):null}const Qn=`<!-- ============================================================
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
  /* ②姿を作る：90度回転レイアウト（A1・masaru 2026-07-17裁定）＝左に縦長の常設プレビュー
     （A2＝アクション再生中の即時反映）・右に六部位composer（H2R）。閾値は既存 700px に合わせる。 */
  .pplaction { display: flex; flex-direction: column; gap: 6px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); }
  #pplStage { display: grid; grid-template-columns: minmax(220px, 300px) 1fr; gap: 12px; align-items: start; }
  #pplStagePreview { display: flex; flex-direction: column; gap: 6px; position: sticky; top: 0; }
  #pplStageCanvas { position: relative; width: 100%; aspect-ratio: 3 / 4; min-height: 260px; background: #0d1117; border-radius: 10px; overflow: hidden; border: 1px solid var(--line); touch-action: none; }
  #pplStageCanvas canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  #pplStageAngles, #pplStageMotions { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 4px; }
  #pplStageMotions { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  #pplStageAngles button, #pplStageMotions button { min-width: 0; min-height: 44px; padding: 5px 2px; font-size: 10px; line-height: 1.2; touch-action: manipulation; }
  #pplStageAngles button.on, #pplStageMotions button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 800; }
  #pplStageAsk { display: flex; flex-direction: column; gap: 6px; }
  #pplAskToggle { min-height: 44px; }
  #pplAskPanel[hidden] { display: none; }
  #pplAskPanel { display: flex; flex-direction: column; gap: 6px; }
  #pplStageEditor { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
  #pplBaseGate { border-color: #6c5730; }
  #pplBaseDefault { align-self: flex-start; min-height: 44px; }
  #pplh2 { padding: 0; overflow-x: hidden; border-color: #6c5730; background: #151c29; }
  #pplh2[hidden], #pplBaseGate[hidden] { display: none; }
  #pplh2Head { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; padding: 10px 10px 0; }
  #pplh2Head > div { min-width: 0; display: flex; flex-direction: column; gap: 3px; }
  #pplh2Step { flex: 0 0 auto; color: var(--accent); border: 1px solid #6c5730; border-radius: 999px; padding: 2px 8px; font-size: 10px; }
  #pplh2Axes { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 4px; padding: 10px 10px 0; }
  #pplh2AxisNavLabel { grid-column: 1 / -1; color: var(--muted); font-size: 10px; }
  #pplh2Axes button { min-width: 0; min-height: 44px; padding: 5px 2px; font-size: 10px; line-height: 1.2; overflow-wrap: anywhere; touch-action: manipulation; }
  #pplh2Axes button[aria-current="step"] { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 800; }
  #pplh2Axes button[data-h2-decision="selected"], #pplh2Axes button[data-h2-decision="kept"] { box-shadow: inset 0 -3px 0 var(--ok); }
  #pplh2Axes button[data-h2-decision="no-fit"] { border-color: var(--warn); color: var(--warn); box-shadow: inset 0 -3px 0 var(--warn); }
  #pplh2Axes button[data-h2-decision="pending"] { opacity: .8; }
  #pplh2Choices { display: flex; flex-direction: column; gap: 8px; padding: 10px; min-width: 0; }
  #pplh2AxisTitle { color: #ffe9b8; font-size: 13px; }
  #pplh2Options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; min-width: 0; }
  .pplh2option { min-width: 0; min-height: 164px; display: flex; flex-direction: column; align-items: stretch; gap: 5px; padding: 6px !important; overflow: hidden; touch-action: manipulation; }
  .pplh2option[aria-pressed="true"] { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); background: var(--tint) !important; }
  .pplh2option img { width: 100%; height: clamp(104px, 22dvh, 150px); object-fit: contain; border-radius: 7px; background: #0d1117; image-rendering: pixelated; }
  .pplh2option .candidateName { min-width: 0; color: #ffe9b8; font-size: 11px; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  #pplh2Fallback { display: flex; flex-direction: column; gap: 6px; padding-top: 2px; border-top: 1px solid var(--line); }
  #pplh2NoFit { width: 100%; min-height: 44px; border-style: dashed; color: var(--muted); touch-action: manipulation; }
  #pplh2NoFit[aria-pressed="true"] { border-color: var(--warn); color: var(--warn); }
  #pplh2Controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 0 10px 10px; }
  #pplh2Controls button, #pplh2Review button, #pplh2Conversion button { width: 100%; min-width: 0; min-height: 44px; padding: 8px 10px; font-size: 14px; font-weight: 700; touch-action: manipulation; }
  #pplh2Controls button[hidden] { display: none; }
  #pplh2[data-h2-step="review"] #pplh2Undo { grid-column: 1 / -1; }
  #pplh2Conversion { margin: 10px; padding: 10px; display: flex; flex-direction: column; gap: 8px; border: 1px solid var(--warn); border-radius: 8px; background: #2c2415; }
  #pplh2Conversion h4 { color: var(--warn); font-size: 12px; }
  #pplh2ConversionActions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  #pplh2Convert { border-color: var(--accent) !important; background: var(--tint) !important; }
  #ppl #pplh2KeepLegacy[aria-pressed="true"] { opacity: 1; border-color: var(--ok); box-shadow: inset 0 0 0 1px var(--ok); }
  #pplh2Status { min-height: 1.5em; padding: 0 10px 10px; color: var(--muted); font-size: 11px; }
  #pplh2Choices[hidden], #pplh2Conversion[hidden], #pplh2Review[hidden] { display: none; }
  #pplh2Review { display: flex; flex-direction: column; gap: 8px; padding: 10px; }
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
  /* ── もっとこだわる（詳細）：▶本編で遊ぶ・下書きの棚。姿ピッカー/JSON手打ち/彫って作るは
     A3（masaru 2026-07-17裁定）で主人公タブから撤去済み（機能自体は parts/sculpt パネルに残る）。 ── */
  #pplMore { border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); display: flex; flex-direction: column; gap: 12px; }
  #pplMore > summary { cursor: pointer; color: var(--accent); font-size: 12px; font-weight: 700; }
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
    #pplheroMain { padding: 8px; gap: 12px; overflow-x: hidden; }
    /* A1（masaru 2026-07-17裁定）：狭画面は縦積みだがプレビューを上に大きく（人は縦長を活かす）。 */
    #pplStage { grid-template-columns: 1fr; }
    #pplStagePreview { position: static; }
    #pplStageCanvas { min-height: 46dvh; }
    #pplh2Head { align-items: center; }
    #pplh2Axes { gap: 3px; }
    #pplh2Axes button { padding-inline: 1px; font-size: 9px; }
    #pplh2Options { max-height: 54dvh; overflow-y: auto; overscroll-behavior-y: contain; padding-right: 2px; }
    .pplh2option { min-height: 148px; }
    .pplh2option img { height: clamp(92px, 19dvh, 132px); }
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
      <div class="note" data-i18n="tool.people.townNote">街の人を作る・直すのは 🔨 街モードです（押すと移動します）</div>
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

        <!-- ②姿を作る：90度回転レイアウト（A1）＝左に常設の縦長プレビュー（A2＝動きながら即時反映）・
             右に H2R 六部位composer。入口は六部位1本＝見本／AI は下地選びと小さな入口へ統合、
             部品ピッカー／彫房は「もっとこだわる」ごと撤去（A3・masaru 2026-07-17裁定）。 -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.makeHead">姿を作る</h2>
          <div id="pplStage">
            <div id="pplStagePreview">
              <div id="pplStageCanvas"></div>
              <div id="pplStageAngles">
                <button type="button" id="pplStageFront" data-i18n="tool.people.h2.front">正面</button>
                <button type="button" id="pplStageAngle45" data-i18n="tool.people.h2.angle">斜め</button>
                <button type="button" id="pplStageBack" data-i18n="tool.people.h2.back">背面</button>
              </div>
              <div id="pplStageMotions"></div>
              <div id="pplStageAsk">
                <button type="button" id="pplAskToggle" aria-expanded="false" aria-controls="pplAskPanel">🪄 <span data-i18n="tool.people.askHead">言葉で姿を作る</span></button>
                <div id="pplAskPanel" hidden>
                  <div id="pplAskHint" class="note">
                    <span data-i18n="tool.people.ask.connectHint">AI をつなぐと言葉でも作れます</span>
                    <button type="button" id="pplAskConnect" data-i18n="tool.people.ask.connectGo">🔌 AI をつなぐ</button>
                  </div>
                  <div id="pplAskBox">
                    <div class="kv">
                      <input type="text" id="pplAskInput" data-i18n-ph="tool.people.ask.ph" placeholder="どんな姿にしたいか、言葉で頼めます（例：前掛けの店主）" />
                      <button type="button" id="pplAskBtn" data-i18n="tool.people.ask.go">🪄 頼む</button>
                    </div>
                    <div id="pplAskStatus"></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="pplStageEditor">
              <!-- 下地選び（A3）：初回・未保存時だけ出す。選ぶと六部位へ、既に下書きがあれば出さない。 -->
              <div class="pplaction" id="pplBaseGate" hidden>
                <h3 data-i18n="tool.people.base.head">どこから始める？</h3>
                <div class="note" data-i18n="tool.people.base.hint">下地を選ぶと、そこから部位ごとに組み替えられます</div>
                <div class="mpickgrid" id="pplBaseGrid"></div>
                <button type="button" id="pplBaseDefault" data-i18n="tool.people.base.default">既定のまま、部位を選ぶ</button>
              </div>

              <div class="pplaction" id="pplh2" data-h2-step="face" role="group" aria-labelledby="pplh2HeadTitle" aria-busy="true">
                <div id="pplh2Head">
                  <div>
                    <h3 id="pplh2HeadTitle" data-i18n="tool.people.h2.head">自分の店主を部位から選ぶ</h3>
                    <div class="note" id="pplh2Hint" data-i18n="tool.people.h2.hint">顔・髪・腕・服・色を、各部位の全候補から組み合わせます</div>
                  </div>
                  <span id="pplh2Step">顔型 1/6</span>
                </div>

                <nav id="pplh2Axes" aria-labelledby="pplh2AxisNavLabel">
                  <div id="pplh2AxisNavLabel" data-i18n="tool.people.h2.axisNav">選ぶ部位</div>
                  <button type="button" data-h2-axis="face" data-i18n="tool.people.h2.axis.face" aria-current="step" disabled>顔型</button>
                  <button type="button" data-h2-axis="hair" data-i18n="tool.people.h2.axis.hair" disabled>髪型</button>
                  <button type="button" data-h2-axis="arm" data-i18n="tool.people.h2.axis.arm" disabled>肩と腕</button>
                  <button type="button" data-h2-axis="upper" data-i18n="tool.people.h2.axis.upper" disabled>上半身</button>
                  <button type="button" data-h2-axis="lower" data-i18n="tool.people.h2.axis.lower" disabled>下半身</button>
                  <button type="button" data-h2-axis="palette" data-i18n="tool.people.h2.axis.palette" disabled>配色</button>
                </nav>

                <div id="pplh2Conversion" role="region" aria-labelledby="pplh2ConversionTitle" hidden>
                  <h4 id="pplh2ConversionTitle" tabindex="-1" data-i18n="tool.people.h2.conversionTitle">今の姿を部位ごとに組み替えられる形へ変えますか？</h4>
                  <p class="note" data-i18n="tool.people.h2.conversionBody">今の姿は旧形式です。変換すると、組み合わせ用の基本姿へ置き換えてから各部位を選べます。旧形式の姿をそのまま残すこともできます。</p>
                  <div id="pplh2ConversionActions">
                    <button type="button" id="pplh2KeepLegacy" data-i18n="tool.people.h2.keepLegacy" aria-pressed="false" disabled>今の姿をそのまま残す</button>
                    <button type="button" id="pplh2Convert" data-i18n="tool.people.h2.convert" disabled>部位選びを始める</button>
                  </div>
                </div>

                <div id="pplh2Choices">
                  <h4 id="pplh2AxisTitle" tabindex="-1">顔型</h4>
                  <div class="note" id="pplh2OptionsLabel" data-i18n="tool.people.h2.optionsLabel">{axis}の全候補</div>
                  <div id="pplh2Options" role="group" aria-labelledby="pplh2AxisTitle" aria-busy="true"></div>
                  <template id="pplh2OptionTemplate">
                    <button type="button" class="pplh2option" aria-pressed="false">
                      <img alt="" />
                      <span class="candidateName"></span>
                    </button>
                  </template>
                  <div id="pplh2Fallback">
                    <button type="button" id="pplh2NoFit" data-i18n="tool.people.h2.noFit" disabled>合うものがない</button>
                  </div>
                </div>
                <div id="pplh2Controls">
                  <button type="button" id="pplh2Keep" data-i18n="tool.people.h2.keep" disabled>この部位は今のまま</button>
                  <button type="button" id="pplh2Undo" data-i18n="tool.people.h2.undo" disabled>ひとつ戻す</button>
                </div>

                <div id="pplh2Review" role="region" aria-labelledby="pplh2ReviewTitle" hidden>
                  <h4 id="pplh2ReviewTitle" tabindex="-1" data-i18n="tool.people.h2.axis.review">確認</h4>
                  <div class="note" data-i18n="tool.people.h2.reviewHint">左のプレビューで、正面・斜め・背面や動きをいつでも確認できます</div>
                </div>
                <div id="pplh2Status" role="status" aria-live="polite"></div>
              </div>
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

        <!-- もっとこだわる（詳細）：▶本編で遊ぶ・下書きの棚。姿ピッカー/JSON手打ち/彫って作るへの
             入口は撤去済み（A3・機能自体は parts/sculpt パネルに残る＝深掘り動線は後段設計）。 -->
        <details id="pplMore">
          <summary data-i18n="tool.people.moreHead">もっとこだわる（詳細編集）</summary>
          <div class="pplblock">
            <div class="kv">
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
            <div class="kv"><span class="lbl" data-i18n="tool.people.compId">見分ける名前（半角英数・ハイフン）</span><input type="text" id="pplcompeditId" style="width:10em" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.name">名前</span><input type="text" id="pplcompeditName" maxlength="40" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.glyph">記号（1-2字）</span><input type="text" id="pplcompeditGlyph" maxlength="2" style="width:4em" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.people.color">色</span><input type="color" id="pplcompeditColor" /></div>
            <div class="kv"><span class="lbl" data-i18n="tool.town.race">種族</span><select id="pplcompeditRace"></select></div>
            <details id="pplcompadv">
              <summary data-i18n="tool.people.advanced">詳細（手打ち）</summary>
              <textarea id="pplcompeditRef" spellcheck="false"></textarea>
              <div class="note" data-i18n="tool.people.advancedNote">姿の指し方：組み込みの型／彫房で彫った姿／部品の組み合わせ（詳細は手打ちで自由に書けます）</div>
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
`,gt=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),po="cdPeopleP1",yt="cdPeopleHandoff",io=()=>({name:"",glyph:"",color:"",refText:""}),Xn=Qo.options,er=t=>({id:`comp${t}`,name:"",glyph:"",color:"",race:"human",refText:""});function Ue(t,r,l){const a={...t},n={...t.party??{}};return Object.keys(r).length?n.hero=r:delete n.hero,l!==void 0?n.start=l:delete n.start,Object.keys(n).length?a.party=n:delete a.party,a}function tr(t,r,l,a,n,b,E){const c=Ue({},a,n).party;if(c!==void 0&&!lo.safeParse(c).success)return r;const g=c===void 0?{field:"party",op:"unset"}:{field:"party",op:"set",value:c},I=i("tool.hub.draft.editorPeople",{name:b});return t.register({panel:l,bundleKind:"tables",itemId:"party",label:I,payload:[g],updatedAt:E,now:E})}function or(t,r){return r&&t.remove(r),null}const kr={id:"people",async mount(t,r){const{wapi:l,postJson:a}=r.api;t.innerHTML=Qn,Qt(t);const n=e=>t.querySelector(`#${e}`),b=(e,o=!1)=>{const p=n("pplmsg");p.textContent=e,p.style.color=o?"#ff7a6e":"#7fd17f"};let E="hero",c=io(),g=!1,I="default",T=[],D=!1,R=-1,_={},te=null,ge=!1,Z,se,de=!1,z,s=null,L=!1,q=!1;const ce=new Map;let k=null,He=null,Le=!1,O=null;const K=vt[0],B=ft(96),ye=ft(220),Oe=ft(420);function A(){var p;if(!g&&!D){He=or(Zt,He);return}const e=pe();if(!e.ok)return;const o=((p=e.hero.name)==null?void 0:p.trim())||K.name;He=tr(Zt,He,"people",e.hero,e.start,o,gt())}const S=()=>{var e;try{sessionStorage.setItem(po,JSON.stringify({v:1,world:r.world(),draft:c,dirty:g,shelf:ie,label:n("ppllabel").value,compMode:I,compMembers:T,compDirty:D,complabel:((e=n("pplcomplabel"))==null?void 0:e.value)??"",lastSavedProposalId:Z,lastSavedSignature:se,showNextStep:de,askUndo:z,baseGateDismissed:Le}))}catch{}};let kt;const Ao=()=>{try{const e=sessionStorage.getItem(po);if(!e)return!1;const o=JSON.parse(e);return o.v!==1||o.world!==r.world()?!1:(c={...io(),...o.draft},g=o.dirty,I=o.compMode??"default",T=o.compMembers??[],D=o.compDirty??!1,Z=o.lastSavedProposalId,se=o.lastSavedSignature,de=o.showNextStep??!1,z=o.askUndo,Le=o.baseGateDismissed??!1,kt=o.shelf,n("ppllabel").value=o.label??"",n("pplcomplabel").value=o.complabel??"",!0)}catch{return!1}};function St(){const e={};return c.name.trim()&&(e.name=c.name.trim()),c.glyph.trim()&&(e.glyph=c.glyph.trim()),c.color.trim()&&(e.color=c.color.trim()),c.refText.trim()&&(e.modelRef=Y(c.refText.trim())),e}function Ro(e){const o=e.trim();if(!o)return null;try{const p=Y(o);return p&&typeof p=="object"&&"rig"in p?p:null}catch{return null}}function re(e){return{name:(e==null?void 0:e.name)??"",glyph:(e==null?void 0:e.glyph)??"",color:(e==null?void 0:e.color)??"",refText:(e==null?void 0:e.modelRef)!==void 0?be(e.modelRef):""}}function Ct(){try{const e=St();return Object.keys(e).length&&Xo.parse(e),{ok:!0,hero:e}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}function Et(){var o;const e=re((o=_.party)==null?void 0:o.hero);return c.name!==e.name||c.glyph!==e.glyph||c.color!==e.color||c.refText!==e.refText}function Ho(e){const o={id:e.id.trim(),name:e.name.trim()};return e.glyph.trim()&&(o.glyph=e.glyph.trim()),e.color.trim()&&(o.color=e.color.trim()),e.race.trim()&&(o.race=e.race.trim()),e.refText.trim()&&(o.modelRef=Y(e.refText.trim())),o}function Lo(e){return{id:e.id,name:e.name,glyph:e.glyph??"",color:e.color??"",race:e.race??"human",refText:e.modelRef!==void 0?be(e.modelRef):""}}function Xe(e){const o=e==null?void 0:e.start;return o===void 0?{mode:"default",members:[]}:o.length===0?{mode:"solo",members:[]}:{mode:"custom",members:o.map(Lo)}}function Tt(){if(I!=="default")return I==="solo"?[]:T.map(Ho)}function pe(){try{const e=St(),o=Tt(),p={};return Object.keys(e).length&&(p.hero=e),o!==void 0&&(p.start=o),Object.keys(p).length&&lo.parse(p),{ok:!0,hero:e,start:o}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}let Ne="",ie,we=[];async function Pe(e){try{const o=e?`/api/parts/proposal?id=${encodeURIComponent(e)}`:"/api/parts/truth",p=await fetch(l(o));if(!p.ok)throw new Error(`HTTP ${p.status}`);we=(await p.json()).parts??[],eo(we.map(d=>xn(d))),ie=e,Ne=e?i("tool.people.shelfProposal"):""}catch{eo([]),we=[],ie=void 0,Ne=""}hn(),B.clear(),ye.clear(),Oe.clear(),ce.clear()}async function et(){var e,o;try{const p=await fetch(l("/api/tables/truth"));if(p.ok)return((o=(e=(await p.json()).docs)==null?void 0:e[0])==null?void 0:o.tables)??{}}catch{}return{}}async function De(e=!1){var o;if(_=await et(),(e||!g)&&(c=re((o=_.party)==null?void 0:o.hero),g=!1,s&&(c.refText!==s.currentRefText||c.refText!==s.authoritativeRefText)&&Q()),e||!D){const p=Xe(_.party);I=p.mode,T=p.members,D=!1,R=-1}G(),A()}async function At(){te==null&&(te=await sn(l)),rt()}function J(e){E=e,n("ppltabList").classList.toggle("on",E==="list"),n("ppltabHero").classList.toggle("on",E==="hero"),n("ppltabComp").classList.toggle("on",E==="comp"),n("ppllist").classList.toggle("show",E==="list"),n("pplhero").classList.toggle("show",E==="hero"),n("pplcomp").classList.toggle("show",E==="comp")}function ue(e){return{kind:"hero",race:K.race,equipment:{},stats:{...K.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name??K.name,glyph:e.glyph??K.glyph,color:e.color??K.color,...e.modelRef!==void 0?{modelRef:e.modelRef}:{}}}function tt(e){const o=e.refText.trim()?Y(e.refText.trim()):void 0;return{kind:"ally",race:e.race||"human",color:e.color||"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name.trim()||i("tool.people.compDefaultName"),...o!==void 0?{modelRef:o}:{}}}function V(e,o,p="full",u){try{const d=dn(o,{detachedGeometry:e===Oe});return e.shoot(d,p)}catch(d){return console.warn("people プレビューが組めない",d),null}}function ke(){s&&Yn(localStorage,s)}function Q(e=c.refText){var p;const o=re((p=_.party)==null?void 0:p.hero).refText;s=s?Eo(s,e,void 0,o):Ge(r.world(),e,void 0,o),q=!1,k=null,ce.clear(),ke(),Me()}function Oo(e){var m;const o=re((m=_.party)==null?void 0:m.hero).refText,p=Vn(localStorage,r.world()),u=p?Zn(p,r.world(),o):null,d=e&&g&&u!=null&&c.refText!==u.currentRefText;u&&!_e&&!d?(s=u,c.refText=u.currentRefText,g=Et(),q=!0):(p&&!u&&Wn(localStorage,r.world()),s=Ge(r.world(),c.refText,void 0,o),q=!1),L=!0,ke(),S(),G(),Me(),A()}function Rt(e){return i(`tool.people.h2.option.${e}`)}function No(e){return e==="face"||e==="hair"?"head":e==="arm"||e==="upper"?"upper":"full"}function Po(e){return e.trim()?{modelRef:Y(e)}:{}}function Ht(e){try{const o=e.currentRefText.trim()?Y(e.currentRefText):void 0;return!!o&&typeof o=="object"&&"rig"in o&&!!o.parts.weapon&&vn(o.parts.weapon)==="lantern"}catch{return!1}}const Do=["idle","walk","run","melee-slash","use-item"],Mo={idle:"tool.people.h2.idle",walk:"tool.people.h2.walk",run:"tool.motion.btn.run","melee-slash":"tool.motion.btn.meleeSlash","use-item":"tool.people.h2.lantern"};function Lt(e){try{const o=e.trim()?Y(e):void 0;return o&&typeof o=="object"&&"rig"in o?{kind:"parts",ref:o}:{kind:"actor",actor:ue(o===void 0?{}:{modelRef:o})}}catch(o){return console.warn("H2 stageプレビューが組めない",o),{kind:"actor",actor:ue({})}}}function Me(){try{O==null||O.updateSubject(Lt(c.refText))}catch(e){console.warn("常設プレビューの更新に失敗しました",e)}Ie()}function Io(){const e=[["pplStageFront",0],["pplStageAngle45",Math.PI/4],["pplStageBack",Math.PI]];for(const[o,p]of e)n(o).addEventListener("click",()=>O==null?void 0:O.setYaw(p))}function Ie(){const e=n("pplStageMotions");if(!e.childElementCount)for(const u of Do){const d=document.createElement("button");d.type="button",d.dataset.motion=u,d.addEventListener("click",()=>{O==null||O.selectMotion(u),Ie()}),e.appendChild(d)}const o=O==null?void 0:O.currentMotion(),p=!!s&&Ht(s);for(const u of Array.from(e.children)){const d=u.dataset.motion;u.textContent=i(Mo[d]),u.className=d===o?"on":"",u.disabled=d==="use-item"&&!p}}function jo(e,o){var x;const p=n("pplh2Options"),u=n("pplh2OptionTemplate");p.replaceChildren(),p.setAttribute("aria-busy",String(!L));const d=e.selections[o],m=xt(e,o);for(const v of Dn(o)){const h=(x=u.content.firstElementChild)==null?void 0:x.cloneNode(!0);if(!h)continue;const f=Rt(v);h.dataset.h2Option=v,h.disabled=!L,h.setAttribute("aria-label",f);const F=(m==="selected"||m==="kept")&&d===v;h.setAttribute("aria-pressed",String(F));const w=h.querySelector("img"),y=h.querySelector(".candidateName");w.alt=f,y.textContent=f;try{const C=_n(e,v,o),N=`${o}|${C}`;ce.has(N)||ce.set(N,V(Oe,ue(Po(C)),No(o)));const M=ce.get(N);M?w.src=M:w.removeAttribute("src")}catch(C){console.warn("H2候補プレビューが組めない",C),w.removeAttribute("src")}h.addEventListener("click",()=>{Ot(v)}),p.appendChild(h)}p.setAttribute("aria-busy","false")}function ot(){const e=s,o=n("pplh2"),p=n("pplh2Axes"),u=n("pplh2Choices"),d=n("pplh2Options"),m=n("pplh2Conversion"),x=n("pplh2Review"),v=n("pplh2NoFit"),h=n("pplh2Keep"),f=n("pplh2Undo"),F=n("pplh2Convert"),w=n("pplh2KeepLegacy"),y=(e==null?void 0:e.currentStep)==="review",C=!!e&&j(e),N=(e==null?void 0:e.conversion)==="declined";o.setAttribute("aria-busy",String(!L)),d.setAttribute("aria-busy",String(!L)),o.dataset.h2Step=(e==null?void 0:e.currentStep)??"face",m.hidden=!C,u.hidden=!!y,C&&(u.hidden=!0),x.hidden=!y,h.hidden=!!y,v.disabled=!L||!e||y||C,h.disabled=!L||!e||y||C,f.disabled=!L||!(e!=null&&e.undo),F.disabled=!L||!C,w.disabled=!L||!C||N,w.setAttribute("aria-pressed",String(N));for(const H of p.querySelectorAll("[data-h2-axis]")){const xe=H.dataset.h2Axis,Zo=(e==null?void 0:e.currentStep)===xe;H.disabled=!L||!e||C,H.setAttribute("aria-current",Zo?"step":"false");const Fe=e?xt(e,xe):"pending";H.dataset.h2Decision=Fe;const Wt=i(`tool.people.h2.axis.${xe}`);H.setAttribute("aria-label",`${Wt}・${Fe==="no-fit"?i("tool.people.h2.noFit"):Fe==="pending"?i("tool.people.h2.unresolved"):Fe==="kept"?i("tool.people.h2.kept",{axis:Wt}):i("tool.people.h2.selected")}`)}if(!e)return;const M=i(`tool.people.h2.axis.${e.currentStep}`);if(e.currentStep==="review")n("pplh2Step").textContent=M;else{const H=P.indexOf(e.currentStep)+1;n("pplh2Step").textContent=i("tool.people.h2.progress",{axis:M,current:H})}if(!y&&!C){const H=e.currentStep;n("pplh2AxisTitle").textContent=i(`tool.people.h2.axis.${H}`),n("pplh2OptionsLabel").textContent=i("tool.people.h2.optionsLabel",{axis:M}),h.textContent=i("tool.people.h2.keepAxis",{axis:M}),v.setAttribute("aria-pressed",String(bt(e,H))),jo(e,H)}Ie();const $=[],Wo=P.filter(H=>bt(e,H));N&&$.push(i("tool.people.h2.keepLegacyDone")),y&&!no(e)&&$.push(i("tool.people.h2.reviewBlocked")),y&&!Ht(e)?$.push(i("tool.people.h2.noLantern")):q?$.push(i("tool.people.h2.resumed")):(k==null?void 0:k.kind)==="chosen"?$.push(i("tool.people.h2.chosen",{name:k.name})):(k==null?void 0:k.kind)==="kept"?$.push(i("tool.people.h2.kept",{axis:k.axis})):(k==null?void 0:k.kind)==="no-fit"?$.push(i("tool.people.h2.noFitStatus",{axis:k.axis})):(k==null?void 0:k.kind)==="legacy-kept"&&$.push(i("tool.people.h2.keepLegacy")),!y&&j(e)&&!N&&$.push(i("tool.people.h2.conversionHint"));for(const H of Wo){const xe=i(`tool.people.h2.axis.${H}`);(k==null?void 0:k.kind)==="no-fit"&&k.axis===xe||$.push(i("tool.people.h2.noFitStatus",{axis:xe}))}const Yt=Bn(e).filter(H=>!bt(e,H));y&&Yt.length&&$.push(`${i("tool.people.h2.unresolved")}: ${Yt.map(H=>i(`tool.people.h2.axis.${H}`)).join("、")}`),n("pplh2Status").textContent=$.join(" ")}function fe(){if(!s)return;const e=c.refText;c.refText=s.currentRefText,g=Et(),e!==s.currentRefText&&(z=void 0,U("")),ce.clear(),ke(),S(),Se(),Me(),j(s)?n("pplh2ConversionTitle").focus():s.currentStep==="review"?n("pplh2ReviewTitle").focus():n("pplh2AxisTitle").focus(),A()}function Ot(e){var p;if(!L||(s||(s=Ge(r.world(),c.refText,void 0,re((p=_.party)==null?void 0:p.hero).refText)),j(s)||s.currentStep==="review"))return;const o=Rt(e);s=wo(s,e),q=!1,k={kind:"chosen",name:o},fe()}function Nt(){if(!L||!s||s.currentStep==="review"||j(s))return;const e=i(`tool.people.h2.axis.${s.currentStep}`);s=So(s),q=!1,k={kind:"kept",axis:e},fe()}function Pt(){if(!L||!s||s.currentStep==="review"||j(s))return;const e=i(`tool.people.h2.axis.${s.currentStep}`);s=Co(s),q=!1,k={kind:"no-fit",axis:e},fe()}function Dt(){!L||!s||!j(s)||(s=yo(s),q=!1,k=null,fe())}function _o(){!L||!s||!j(s)||(s=go(s),q=!1,k=null,fe())}function Mt(){!L||!(s!=null&&s.undo)||(s=zn(s),q=!1,k=null,fe())}function nt(){var v;const e=Ct(),o=n("pplportrait"),p=n("pplbody"),u=n("pplCurrentName"),d=n("pplCurrentStatus");if(!e.ok){o.removeAttribute("src"),p.textContent=`✗ ${e.error}`,p.style.color="#ff7a6e",u.textContent=c.name.trim()||K.name,d.textContent="",n("pplnote").textContent=Ne;return}p.style.color="";const m=V(ye,ue(e.hero));m?o.src=m:o.removeAttribute("src");const x=ue(e.hero);p.textContent=un(x)?`${i("tool.people.bodyPct")}: ${fn(x)}%`:"",u.textContent=e.hero.name??K.name,d.textContent=g?i("tool.people.draftShown"):(v=_.party)!=null&&v.hero?i("tool.people.truthAuthored"):i("tool.people.defaultNote"),n("pplnote").textContent=Ne}function rt(){const e=n("pplBaseGate"),o=!g&&!c.refText.trim()&&!Le;if(e.hidden=!o,n("pplh2").hidden=o,!o)return;const p=n("pplBaseGrid");p.innerHTML="";const u=new Set(ht().map(h=>h.id)),d=c.refText.trim(),m=h=>{c.refText=h,g=!0,Q(),S(),Se(),A()},x=gn.filter(h=>yn(h,u));if(x.length){const h=document.createElement("div");h.className="mpickrow";for(const f of x){const F=be(f.ref);h.appendChild(Te(B,F,i(f.shortLabelKey),F===d,m))}p.appendChild(h)}const v=te??[];if(v.length){const h=document.createElement("div");h.className="mpickrow";for(const f of v)h.appendChild(Te(B,f.id,mt(te,f.id),f.id===d,m));p.appendChild(h)}if(!x.length&&!v.length){const h=document.createElement("div");h.className="note",h.textContent=i("tool.people.base.none"),p.appendChild(h)}}function zo(){n("pplname").value=c.name,n("pplglyph").value=c.glyph,n("pplcolor").value=c.color||K.color,n("ppllabel").placeholder=i("tool.people.defaultLabel")}function Se(){zo(),rt(),nt(),ot(),le()}function It(){var x,v,h;const e=n("ppllistHero");e.innerHTML="";const o=(x=_.party)==null?void 0:x.hero;e.appendChild(me(V(B,ue(o??{})),(o==null?void 0:o.name)??K.name,o?"":i("tool.people.defaultChip"),()=>{J("hero")}));const p=n("ppllistComp");p.innerHTML="";const u=D?{start:Tt()}:{mode:Xe(_.party).mode,start:(v=_.party)==null?void 0:v.start};if(u.start===void 0)for(const f of vt.slice(1))p.appendChild(me(V(B,{kind:"ally",race:f.race,color:f.color,equipment:{},stats:{...f.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:f.name}),f.name,i("tool.people.defaultChip"),()=>J("comp")));else if(u.start.length===0){const f=document.createElement("div");f.className="note",f.textContent=i("tool.people.compNone"),p.appendChild(f)}else for(const f of u.start)p.appendChild(me(V(B,{kind:"ally",race:f.race??"human",color:f.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:f.name,...f.modelRef!==void 0?{modelRef:f.modelRef}:{}}),f.name,"",()=>J("comp")));const d=n("ppllistTown");d.innerHTML="";const m=(_.town??en()).npcs??[];for(const f of m)d.appendChild(me(V(B,{kind:"ally",race:f.race,color:f.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:f.name??f.id,...f.modelRef!==void 0?{modelRef:f.modelRef}:{}}),((h=f.names)==null?void 0:h[on()])??f.name??f.id,"",()=>r.navigate("forge",{tab:"town"})));if(!m.length){const f=document.createElement("div");f.className="note",f.textContent=i("tool.people.noTownFolk"),d.appendChild(f)}}function me(e,o,p,u){const d=document.createElement("div");d.className="pcard"+(u?"":" plain");const m=document.createElement("img");e&&(m.src=e);const x=document.createElement("div");if(x.className="nm",x.textContent=o,d.append(m,x),p){const v=document.createElement("div");v.className="sub",v.textContent=p,d.appendChild(v)}return u&&d.addEventListener("click",u),d}function Bo(e){return i(`tool.town.race.${e}`)}function Fo(){n("pplmodeDefault").checked=I==="default",n("pplmodeSolo").checked=I==="solo",n("pplmodeCustom").checked=I==="custom",n("pplcompCustomBox").style.display=I==="custom"?"":"none"}function he(){const e=n("pplcomplist");e.innerHTML="",T.forEach((o,p)=>{const u=document.createElement("div");u.className="crow"+(p===R?" editing":"");const d=document.createElement("img"),m=V(B,tt(o));m&&(d.src=m);const x=document.createElement("div");x.className="nm",x.textContent=o.name.trim()||i("tool.people.compDefaultName");const v=document.createElement("button");v.type="button",v.textContent=i("tool.people.compEditHead"),v.addEventListener("click",()=>{R=p,X()}),u.append(d,x,v),e.appendChild(u)})}function je(){const e=n("pplcompedit");if(R<0||!T[R]){e.classList.remove("show");return}e.classList.add("show");const o=T[R];n("pplcompeditId").value=o.id,n("pplcompeditName").value=o.name,n("pplcompeditGlyph").value=o.glyph,n("pplcompeditColor").value=o.color||"#8fb7ff",n("pplcompeditRef").value=o.refText;const p=n("pplcompeditRace");if(!p.options.length)for(const w of Xn){const y=document.createElement("option");y.value=w,p.appendChild(y)}for(const w of Array.from(p.options))w.textContent=Bo(w.value);p.value=o.race;const u=n("pplcompeditPortrait"),d=V(ye,tt(o));d?u.src=d:u.removeAttribute("src");const m=n("pplcompcur");m.innerHTML="";const x=o.refText.trim(),v=w=>{T[R].refText=w,D=!0,S(),X()};if(x)m.appendChild(Te(B,x,mt(te,x),!0,v));else{const w=document.createElement("span");w.className="note",w.textContent=i("tool.people.pickNone"),m.appendChild(w)}const h=n("pplcompgrid");h.innerHTML="";const f=an();if(f.length){const w=document.createElement("div");w.className="mpickhead",w.textContent=i("tool.smith.modelPickBuiltin"),h.appendChild(w);const y=document.createElement("div");y.className="mpickrow";for(const C of f)y.appendChild(Te(B,C,C,C===x,v));h.appendChild(y)}const F=te??[];if(F.length){const w=document.createElement("div");w.className="mpickhead",w.textContent=i("tool.smith.modelPickTruth"),h.appendChild(w);const y=document.createElement("div");y.className="mpickrow";for(const C of F)y.appendChild(Te(B,C.id,mt(te,C.id),C.id===x,v));h.appendChild(y)}}function Ce(){const e=n("pplcomppreview");if(e.innerHTML="",I==="default"){for(const o of vt.slice(1))e.appendChild(me(V(B,{kind:"ally",race:o.race,color:o.color,equipment:{},stats:{...o.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:o.name}),o.name,i("tool.people.defaultChip"),null));return}if(I==="solo"){const o=document.createElement("div");o.className="note",o.textContent=i("tool.people.compNone"),e.appendChild(o);return}if(!T.length){const o=document.createElement("div");o.className="note",o.textContent=i("tool.people.compEmptyCustomNote"),e.appendChild(o);return}T.forEach((o,p)=>e.appendChild(me(V(B,tt(o)),o.name.trim()||i("tool.people.compDefaultName"),"",()=>{R=p,X()})))}function X(){Fo(),he(),je(),Ce(),n("pplcompadd").disabled=T.length>=5,n("pplcomplabel").placeholder=i("tool.people.defaultLabelParty"),It(),le()}function jt(){const e=ut();n("pplAskHint").classList.toggle("show",!e),n("pplAskBox").classList.toggle("show",!!e)}function $o(){const e=pe();return e.ok?JSON.stringify({hero:e.hero,start:e.start}):null}function Ee(){return s?(s.draftSource==="composer"||P.some(o=>xt(s,o)!=="pending"))&&!no(s):!1}function pt(){return!Ee()&&!!Z&&!!se&&ge&&$o()===se}function le(){const e=n("ppldecide"),o=pt();e.disabled=!o,n("pplsave").disabled=!ge||Ee(),n("pplcompsave").disabled=!ge||Ee();const p=n("pplDecideNote");p.textContent=Ee()?i("tool.people.h2.finishSelection"):o?"":Z?i("tool.people.decideStale"):i("tool.people.decideNeedSave"),n("pplNextStep").classList.toggle("show",de)}async function _t(){var p;if(!pt()||!Z)return;const e=pe();!e.ok||!await it(Z,{skipReload:!0})||(_=Ue(_,e.hero,e.start),c=re((p=_.party)==null?void 0:p.hero),g=!1,Q(),Z=void 0,se=void 0,de=!0,S(),G())}function G(){Se(),Me(),jt(),It(),X()}async function oe(){try{const e=await(await fetch(l("/api/tables/proposals"))).json();rn(n("pplprops"),e.proposals??[],{tag:()=>i("tool.people.capTag"),onView:o=>{zt(o)},onPromote:o=>{it(o)},onArchive:o=>{qo(o)}}),n("ppllive").textContent="· live",ge=!0}catch{n("pplprops").innerHTML=`<div class="note">${i("tool.common.devOff")}</div>`,n("ppllive").textContent=i("tool.common.devOff"),ge=!1}le()}async function zt(e){var o,p,u,d;if(!((g||D)&&!await nn(i("tool.common.confirmReplaceDraft"),{ok:i("tool.common.confirmReplaceOk"),danger:!0})))try{const m=await(await fetch(l(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),x=(p=(o=m.docs)==null?void 0:o[0])==null?void 0:p.tables.party;c=re(x==null?void 0:x.hero),g=!0,Q();const v=Xe(x);I=v.mode,T=v.members,D=!0,R=-1,S(),G(),A(),b(i("tool.people.loadedProp",{name:((d=(u=m.docs)==null?void 0:u[0])==null?void 0:d.name)??e}))}catch(m){b(i("tool.common.loadPropFail",{msg:m.message}),!0)}}async function it(e,o={}){try{return await a(l("/api/tables/promote"),{proposalId:e}),b(i("tool.people.promoted")),g=!1,D=!1,A(),oe(),o.skipReload||De(!0),!0}catch(p){return pn(p,{base:"/api/tables",wapi:l,proposalId:e,onView:()=>{zt(e)},onRebased:()=>{b(i("tool.conflict.rebased")),oe()}})||b(i("tool.common.promoteFail",{msg:p.message}),!0),!1}}async function qo(e){try{await a(l("/api/tables/archive"),{proposalId:e}),b(i("tool.people.archived")),oe()}catch(o){b(i("tool.common.archiveFail",{msg:o.message}),!0)}}async function lt(){if(Ee()){b(i("tool.people.h2.finishSelection"),!0);return}const e=pe();if(!e.ok){b(`✗ ${e.error}`,!0);return}const p=n(E==="comp"?"pplcomplabel":"ppllabel").value.trim()||i(E==="comp"?"tool.people.defaultLabelParty":"tool.people.defaultLabel"),u=await et(),d=Ue(u,e.hero,e.start),m={formatVersion:tn,id:"tables",name:p,tables:d,createdAt:gt(),updatedAt:gt()};try{const x=await a(l("/api/tables/proposal"),{tables:m,label:p,createdBy:"user"});b(i("tool.people.saved",{name:p})),Z=x.id,se=JSON.stringify({hero:e.hero,start:e.start}),de=!0,S(),oe(),le()}catch(x){b(i("tool.common.saveFail",{msg:x.message}),!0)}}function Bt(e,o){const p=new Set(ht().map(m=>m.id)),u=m=>{if(!m||typeof m!="object"||!m.parts)return[];const x=m.parts;return Object.values(x).map(v=>typeof v=="string"?v:v.id).filter(v=>!p.has(v))},d=new Set(u(e.modelRef));for(const m of o??[])for(const x of u(m.modelRef))d.add(x);return[...d]}function Go(e,o){const p={};return Object.keys(e).length&&(p.hero=e),o!==void 0&&(p.start=o),p}async function Ft(){const e=pe();if(!e.ok){b(`✗ ${e.error}`,!0);return}const o=Bt(e.hero,e.start);if(o.length){b(i("tool.people.partsMissing",{ids:o.join(", ")}),!0);return}Ln("party",Go(e.hero,e.start),r.world(),ie?{partsShelf:ie}:void 0).catch(p=>b(i("tool.common.tryFail",{msg:p.message}),!0))}async function $t(){const e=pe();if(!e.ok){b(`✗ ${e.error}`,!0);return}const o=Bt(e.hero,e.start);if(o.length){b(i("tool.people.partsMissing",{ids:o.join(", ")}),!0);return}const p=window.open("","_blank"),u=await et(),d=Ue(u,e.hero,e.start),m=`dungeon.html#pack=${encodeURIComponent(Hn(d,`people preview (${r.world()})`,we.length?{parts:we}:void 0))}`;p?p.location.href=m:window.open(m,"_blank")}n("ppltry").addEventListener("click",()=>{Ft()}),n("pplplay").addEventListener("click",()=>{$t()}),n("pplcomptry").addEventListener("click",()=>{Ft()}),n("pplcompplay").addEventListener("click",()=>{$t()});let _e=!1;function qt(){try{const e=localStorage.getItem(yt);if(!e)return;const o=JSON.parse(e);if(o.world!==r.world())return;if(Rn(o.at)){localStorage.removeItem(yt);return}localStorage.removeItem(yt),_e=!0;const p={...c},u=g;c.refText=be(o.ref),g=!0,Q(),S(),J("hero"),o.shelf&&Pe(o.shelf).then(()=>{S(),G()}),G(),A(),b(i("tool.people.fromParts"));const d=document.createElement("button");d.type="button",d.textContent=i("tool.people.handoffUndo"),d.addEventListener("click",()=>{c=p,g=u,Q(),S(),G(),A()}),n("pplmsg").appendChild(d)}catch{}}n("ppltabList").addEventListener("click",()=>J("list")),n("ppltabHero").addEventListener("click",()=>J("hero")),n("ppltabComp").addEventListener("click",()=>J("comp"));for(const e of t.querySelectorAll("#pplh2Axes [data-h2-axis]"))e.addEventListener("click",()=>{!L||!s||j(s)||(s=oo(s,e.dataset.h2Axis),q=!1,k=null,ke(),ot())});n("pplh2NoFit").addEventListener("click",Pt),n("pplh2Keep").addEventListener("click",Nt),n("pplh2Undo").addEventListener("click",Mt),n("pplh2Convert").addEventListener("click",Dt),n("pplh2KeepLegacy").addEventListener("click",_o),n("pplBaseDefault").addEventListener("click",()=>{var e,o;Le=!0,S(),rt(),(o=(e=n("pplh2AxisTitle"))==null?void 0:e.focus)==null||o.call(e)});try{O=bn(n("pplStageCanvas"),Lt(c.refText))}catch(e){console.warn("常設プレビューが開けません（WebGL 不可）",e),O=null}n("pplStageCanvas").setAttribute("aria-label",i("tool.people.stage.label")),Io(),Ie();const Gt=n("pplAskToggle"),Ut=n("pplAskPanel");Gt.addEventListener("click",()=>{const e=Ut.hidden;Ut.hidden=!e,Gt.setAttribute("aria-expanded",String(e))}),n("pplname").addEventListener("input",e=>{c.name=e.target.value,g=!0,S(),nt(),le()}),n("pplname").addEventListener("blur",()=>A()),n("pplglyph").addEventListener("input",e=>{c.glyph=e.target.value,g=!0,S(),le()}),n("pplglyph").addEventListener("blur",()=>A()),n("pplcolor").addEventListener("input",e=>{c.color=e.target.value,g=!0,S(),nt(),le()}),n("pplcolor").addEventListener("blur",()=>A()),n("ppllabel").addEventListener("input",S),n("pplsave").addEventListener("click",()=>{lt()}),n("pplcompsave").addEventListener("click",()=>{lt()}),n("ppldecide").addEventListener("click",()=>{_t()}),n("pplNextGoals").addEventListener("click",()=>r.navigate("goals"));const at=n("pplAskInput"),st=n("pplAskBtn"),ze=n("pplAskStatus");function U(e,o=!1){ze.textContent=e,ze.className=o?"bad":"ok"}function Kt(){return!!z&&c.refText===z.appliedRefText}function Jt(){if(z){if(!Kt()){z=void 0,S(),U("");return}c.refText=z.prevRefText,g=z.prevDirty,z=void 0,Q(),S(),Se(),A(),U(i("tool.parts.ask.undone"))}}function Uo(){if(z){if(!Kt()){z=void 0,S();return}U(i("tool.people.ask.restoredUndo")),ze.appendChild(to(z.rows,z.note,Jt))}}async function dt(){const e=at.value.trim();if(!e)return;const o=ut();if(!o){U(i("tool.people.ask.needCfg"),!0);return}st.disabled=!0,U(i("tool.people.ask.working"));try{const p=ht().map(y=>({id:y.id,name:y.name,slot:y.slot})),u=new Set(p.map(y=>y.id)),d=Object.keys(mn),m={...c},x=g,v=Ro(m.refText);let h,f;if(v){const{system:y,user:C}=wn(e,v,p,d),N=await Xt(o,y,C);if(!N.ok){U(N.maybeCors?i("tool.studio.llm.corsFail"):i("tool.people.ask.fail",{err:N.error}),!0);return}const M=kn(N.text,u);if(!M.ok){U(i("tool.people.ask.fail",{err:M.error}),!0);return}h=Sn(v,M.patch),f=M.note}else{const{system:y,user:C}=Cn(e,p,d),N=await Xt(o,y,C);if(!N.ok){U(N.maybeCors?i("tool.studio.llm.corsFail"):i("tool.people.ask.fail",{err:N.error}),!0);return}const M=En(N.text,u,new Set(d));if(!M.ok){U(i("tool.people.ask.fail",{err:M.error}),!0);return}h=M.ref,f=M.note}const F=Tn(v,h),w=An(e,h,f);c.refText=be(h),g=!0,z={prevRefText:m.refText,prevDirty:x,appliedRefText:c.refText,...f?{note:f}:{},rows:F},Q(),S(),Se(),A(),U(i("tool.people.ask.done")),ze.appendChild(to(F,f,Jt,w))}finally{st.disabled=!1}}st.addEventListener("click",()=>{dt()}),at.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),dt())}),n("pplAskConnect").addEventListener("click",()=>{var e;(e=document.getElementById("stullmbtn"))==null||e.click()});const ve=document.getElementById("stullmdlg"),Vt=()=>jt();ve==null||ve.addEventListener("close",Vt);const Be=e=>{I=e,D=!0,R=-1,S(),X(),A()};n("pplmodeDefault").addEventListener("change",()=>Be("default")),n("pplmodeSolo").addEventListener("change",()=>Be("solo")),n("pplmodeCustom").addEventListener("change",()=>Be("custom")),n("pplcompadd").addEventListener("click",()=>{if(T.length>=5){b(i("tool.people.compFull"),!0);return}T.push(er(T.length+1)),R=T.length-1,D=!0,S(),X(),A()}),n("pplcompremove").addEventListener("click",()=>{R<0||(T.splice(R,1),R=-1,D=!0,S(),X(),A())});const ae=e=>{R<0||!T[R]||(T[R]={...T[R],...e},D=!0,S())};n("pplcompeditId").addEventListener("input",e=>{ae({id:e.target.value}),he()}),n("pplcompeditId").addEventListener("blur",()=>A()),n("pplcompeditName").addEventListener("input",e=>{ae({name:e.target.value}),he(),Ce()}),n("pplcompeditName").addEventListener("blur",()=>A()),n("pplcompeditGlyph").addEventListener("input",e=>{ae({glyph:e.target.value})}),n("pplcompeditGlyph").addEventListener("blur",()=>A()),n("pplcompeditColor").addEventListener("input",e=>{ae({color:e.target.value}),je(),he(),Ce()}),n("pplcompeditColor").addEventListener("blur",()=>A()),n("pplcompeditRace").addEventListener("change",e=>{ae({race:e.target.value}),je(),he(),Ce(),A()}),n("pplcompeditRef").addEventListener("change",e=>{ae({refText:e.target.value}),je(),he(),Ce(),A()}),n("pplcomplabel").addEventListener("input",S);const Ko=r.events.on("tables",()=>{oe(),De()}),Jo=r.events.on("sculpt",()=>{te=null,B.clear(),ye.clear(),At()}),Vo=r.events.on("parts",()=>{Pe(ie).then(()=>{G()})}),Yo=ln(()=>{Qt(t),n("pplStageCanvas").setAttribute("aria-label",i("tool.people.stage.label")),G(),oe()});window.cdPeople={draft:()=>({...c}),set:e=>{c={...c,...e},g=!0,e.refText!==void 0&&Q(),S(),G()},h2:()=>s?JSON.parse(JSON.stringify(s)):null,selectComposer:e=>Ot(e),keepComposer:()=>Nt(),rejectComposer:()=>Pt(),visitComposer:e=>{s&&(s=oo(s,e),ke(),ot())},convertComposer:()=>Dt(),undoComposer:()=>Mt(),valid:()=>Ct(),comp:()=>({mode:I,members:T.map(e=>({...e}))}),setCompMode:e=>Be(e),setMember:(e,o)=>{R=e,ae(o),X()},addMember:()=>{n("pplcompadd").dispatchEvent(new Event("click"))},removeMember:e=>{R=e,T.splice(e,1),R=-1,D=!0,S(),X()},validParty:()=>pe(),save:()=>lt(),promote:e=>it(e),refresh:()=>oe(),reload:(e=!0)=>De(e),dirty:()=>g,compDirty:()=>D,shelf:e=>(e!==void 0&&Pe(e??void 0).then(()=>G()),ie??""),tab:e=>(e&&J(e),E),askHero:e=>(at.value=e,dt()),decide:()=>_t(),decideEnabled:()=>pt(),lastSavedProposalId:()=>Z,showNextStep:()=>de,llmConnected:()=>!!ut()},J("hero");const ct=Ao();return(async()=>(await Pe(kt),ct&&!_e&&(g||D)&&b(i("tool.common.restored")),await De(!ct&&!_e),qt(),Oo(ct),Uo(),Promise.all([oe(),At()])))(),{applyParams(e){const o=e.get("tab");(o==="list"||o==="hero"||o==="comp")&&J(o),e.get("handoff")==="parts"&&qt()},dispose(){Ko(),Jo(),Vo(),Yo(),ve==null||ve.removeEventListener("close",Vt),S(),B.dispose(),ye.dispose(),Oe.dispose(),O==null||O.dispose(),O=null,delete window.cdPeople}}}};export{yt as HANDOFF_KEY,or as forgetPeopleEditorDraft,kr as peoplePanel,tr as syncPeopleEditorDraft};
