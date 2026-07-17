import{O as so,Q as Zo,R as Qo,d as Xo}from"./tables-ChiF84Nm.js";import{T as en}from"./tables-doc-DiZK7QxH.js";import{e as Qt}from"./draft-editor-registry-D6E4VN9B.js";import{k as V,j as Se,h as Xt,t as i,g as tn,d as on}from"./ui-confirm-Bv2opBmw.js";import{r as nn,h as rn}from"./stale-card-DOcx983e.js";import{o as pn,l as ht,b as eo}from"./llm-CGRkbp8Z.js";import{c as vt,p as ie,a as Pe,b as to,f as ln,d as an,R as sn}from"./modelref-picker-B5R5P1EM.js";import{D as co,H as Z,F as dn,I as cn,J as un,j as xt,K as fn,_ as oo,N as mn,O as hn}from"./render-voxel-B0uFQS9f.js";import{i as vn}from"./status-CoghzNI4.js";import{k as xn,o as bn,H as gn,l as yn,n as wn,q as kn,s as Cn,t as Sn,u as En,v as Tn,w as Hn,x as no,i as Rn}from"./parts-workbench-CMrYNEvp.js";import{c as bt}from"./dungeon-CoxydZpX.js";import{p as Ln}from"./tuner-core-BGGS1IIi.js";import{o as An}from"./testbed-CjljZQN4.js";import"./three.module-C7yXn3za.js";import"./play-input-BYi92GtF.js";import"./gamepack-DYrEHAxF.js";import"./pack-handoff-client-C-AMTnth.js";import"./playtest-core-D-yW9cVW.js";const Ie=2,On=Object.freeze(["face","hair","arm","upper","lower","palette","review"]),P=Object.freeze(["face","hair","arm","upper","lower","palette"]),Ye=Object.freeze(["skin","hair","primary","secondary","gem"]),Nn=Object.freeze(["pending","selected","kept","no-fit"]);function Je(t,r,l){return Object.freeze({id:t,name:r,palette:Object.freeze({...l})})}const Qe=Object.freeze([Je("amber-shop","琥珀の道具屋",{skin:"#d8a878",hair:"#4e3620",primary:"#6a5138",secondary:"#4e5666",gem:"#ffd27f"}),Je("forest-trader","森の行商",{skin:"#c99068",hair:"#2f3525",primary:"#596443",secondary:"#75533b",gem:"#9ee6a8"}),Je("night-lantern","夜灯り",{skin:"#d3a07c",hair:"#25233a",primary:"#394a70",secondary:"#765d86",gem:"#7fd0ff"}),Je("crimson-market","茜の商い",{skin:"#b9785b",hair:"#5a2c28",primary:"#813f45",secondary:"#3f5960",gem:"#f2c66d"})]),Ge=Object.freeze({face:Z.face[0].id,hair:Z.hair[0].id,arm:Z.arm[0].id,upper:Z.upper[0].id,lower:Z.lower[0].id,palette:Qe[0].id}),Pn=new Map(Qe.map(t=>[t.id,t])),le=Object.freeze({face:Object.freeze(Z.face.map(({id:t})=>t)),hair:Object.freeze(Z.hair.map(({id:t})=>t)),arm:Object.freeze(Z.arm.map(({id:t})=>t)),upper:Object.freeze(Z.upper.map(({id:t})=>t)),lower:Object.freeze(Z.lower.map(({id:t})=>t)),palette:Object.freeze(Qe.map(({id:t})=>t))}),Ze=Object.freeze({face:new Set(le.face),hair:new Set(le.hair),arm:new Set(le.arm),upper:new Set(le.upper),lower:new Set(le.lower),palette:new Set(le.palette)});function In(t){return le[t]}function Mn(t,r={}){var n;const l=typeof t.palette=="string"?(n=Pn.get(t.palette))==null?void 0:n.palette:Me(t.palette);if(!l)throw new Error(`H2で使えないpaletteです: ${String(t.palette)}`);const a=dn(t,{lantern:!0});return{...a,parts:{...a.parts,weapon:"lantern"},palette:{...l},...r.body!==void 0?{body:r.body}:{},...r.paint?{paint:fo(r.paint)}:{}}}function Dn(t,r={}){return Se(Mn(t,r))}function Me(t){if(!t||typeof t!="object"||Array.isArray(t))return null;const r=t;if(Object.keys(r).length!==Ye.length)return null;const l={};for(const a of Ye){const n=r[a];if(typeof n!="string"||!/^#[0-9a-f]{6}$/i.test(n))return null;l[a]=n}return l}function uo(t){const r=Me(t);if(!r)return null;for(const l of Qe)if(Ye.every(a=>r[a]===l.palette[a]))return l.id;return null}function fo(t){return t.map(r=>JSON.parse(JSON.stringify(r)))}function mo(t){try{const r=V(t);return typeof r=="string"?{}:{...r.body!==void 0?{body:r.body}:{},...r.paint?{paint:fo(r.paint)}:{}}}catch{return{}}}function ho(t){try{const r=V(t);if(typeof r=="string"||r.rig!=="humanoid")return null;const l=co(r.parts),a=Me(r.palette);return!l||!a?null:{selection:{...l,palette:uo(a)??a},preserved:mo(t)}}catch{return null}}function vo(t){return ho(t)!=null}function xo(t){const r=ho(t);if(r)return r.selection;try{const l=V(t);if(typeof l=="string")return{...Ge};const a=co(l.parts)??Ge,n=uo(l.palette)??Me(l.palette)??Ge.palette;return{...a,palette:n}}catch{return{...Ge}}}function Xe(t,r){return Dn(r,mo(t))}function jn(){return{face:"pending",hair:"pending",arm:"pending",upper:"pending",lower:"pending",palette:"pending"}}const ne=()=>new Date().toISOString();function Ct(t){return`cdHeroComposerH2:v${Ie}:${encodeURIComponent(t)}`}function bo(t){return{...t,...typeof t.palette=="string"?{}:{palette:{...t.palette}}}}function go(t){return{...t}}function et(t){return{currentStep:t.currentStep,selections:bo(t.selections),decisions:go(t.decisions),currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion}}function yo(t,r){const l=P.indexOf(r);for(let a=1;a<=P.length;a+=1){const n=P[(l+a)%P.length];if(t[n]==="pending")return n}return"review"}function Ve(t,r,l=ne(),a=r){return{v:Ie,world:t,currentStep:"face",selections:xo(r),decisions:jn(),baselineRefText:r,authoritativeRefText:a,currentRefText:r,draftSource:"baseline",conversion:vo(r)?"not-required":"required",updatedAt:l}}function j(t){return t.conversion==="required"||t.conversion==="declined"}function wo(t,r=ne()){return t.conversion!=="required"?t:{...t,conversion:"declined",undo:et(t),updatedAt:r}}function ko(t,r=ne()){return j(t)?{...t,currentRefText:Xe(t.baselineRefText,t.selections),draftSource:"composer",conversion:"confirmed",undo:et(t),updatedAt:r}:t}function ro(t,r,l=ne()){if(!P.includes(r))throw new Error(`H2に無いaxisです: ${String(r)}`);return t.currentStep===r?t:{...t,currentStep:r,updatedAt:l}}function Co(t,r,l=ne()){if(t.currentStep==="review")throw new Error("H2 review段には候補がありません");if(j(t))throw new Error("H2のopaque baselineは明示変換してから候補を選んでください");const a=t.currentStep;if(!Ze[a].has(r))throw new Error(`H2 ${a}に無い候補です: ${r}`);const n={...t.selections,[a]:r},x={...t.decisions,[a]:"selected"};return{...t,currentStep:yo(x,a),selections:n,decisions:x,currentRefText:Xe(t.baselineRefText,n),draftSource:"composer",undo:et(t),updatedAt:l}}function zn(t,r,l){const a=l??(t.currentStep==="review"?null:t.currentStep);if(!a)throw new Error("H2 review段には候補refがありません");if(j(t))throw new Error("H2のopaque baselineは明示変換してから候補を表示してください");if(!Ze[a].has(r))throw new Error(`H2 ${a}に無い候補です: ${r}`);const n={...t.selections,[a]:r};return Xe(t.baselineRefText,n)}function So(t,r,l){if(t.currentStep==="review")return t;if(j(t))throw new Error("H2のopaque baselineは明示変換または現状維持を選んでください");const a=t.currentStep,n={...t.decisions,[a]:r};return{...t,currentStep:yo(n,a),decisions:n,undo:et(t),updatedAt:l}}function Eo(t,r=ne()){return So(t,"kept",r)}function To(t,r=ne()){return So(t,"no-fit",r)}function _n(t,r=ne()){return t.undo?{...t,currentStep:t.undo.currentStep,selections:bo(t.undo.selections),decisions:go(t.undo.decisions),currentRefText:t.undo.currentRefText,draftSource:t.undo.draftSource,conversion:t.undo.conversion,undo:void 0,updatedAt:r}:t}function gt(t,r){return t.decisions[r]}function yt(t,r){return r?t.decisions[r]==="no-fit":P.some(l=>t.decisions[l]==="no-fit")}function Fn(t){return P.filter(r=>t.decisions[r]==="pending"||t.decisions[r]==="no-fit")}function po(t){return!j(t)&&P.every(r=>t.decisions[r]==="selected"||t.decisions[r]==="kept")}function Ho(t,r,l=ne(),a=t.authoritativeRefText){return Ve(t.world,r,l,a)}function tt(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function ot(t,r,l=[]){const a=new Set([...r,...l]);return r.every(n=>Object.prototype.hasOwnProperty.call(t,n))&&Object.keys(t).every(n=>a.has(n))}function Bn(t){return typeof t=="string"&&On.includes(t)}function $n(t){if(!tt(t)||!ot(t,["face","hair","arm","upper","lower","palette"]))return null;for(const l of["face","hair","arm","upper","lower"])if(typeof t[l]!="string"||!Ze[l].has(t[l]))return null;const r=typeof t.palette=="string"?Ze.palette.has(t.palette)?t.palette:null:Me(t.palette);return r?{face:t.face,hair:t.hair,arm:t.arm,upper:t.upper,lower:t.lower,palette:r}:null}function qn(t){if(!tt(t)||!ot(t,P))return null;for(const r of P)if(!Nn.includes(t[r]))return null;return{...t}}function Ro(t,r){return P.every(l=>{const a=t[l],n=r[l];return l!=="palette"||typeof a=="string"||typeof n=="string"?a===n:Ye.every(x=>a[x]===n[x])})}function Un(t,r){return P.every(l=>t[l]===r[l])}function io(t,r){if(!tt(t)||!ot(t,["currentStep","selections","decisions","currentRefText","draftSource","conversion"])||!Bn(t.currentStep)||typeof t.currentRefText!="string"||t.draftSource!=="baseline"&&t.draftSource!=="composer"||t.conversion!=="not-required"&&t.conversion!=="required"&&t.conversion!=="declined"&&t.conversion!=="confirmed")return null;const l=$n(t.selections),a=qn(t.decisions);if(!l||!a||t.currentStep==="review"&&P.some(x=>a[x]==="pending")||(vo(r)?t.conversion!=="not-required":t.conversion==="not-required")||(t.conversion==="required"||t.conversion==="declined")&&t.draftSource!=="baseline"||t.conversion==="confirmed"&&t.draftSource!=="composer"||(t.conversion==="required"||t.conversion==="declined")&&P.some(x=>a[x]!=="pending"))return null;if(t.draftSource==="baseline"){if(!Ro(l,xo(r))||t.currentRefText!==r||P.some(x=>a[x]==="selected"))return null}else if(t.currentRefText!==Xe(r,l))return null;return{currentStep:t.currentStep,selections:l,decisions:a,currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion}}function Kn(t,r){return Ro(t.selections,r.selections)&&Un(t.decisions,r.decisions)&&t.currentRefText===r.currentRefText&&t.draftSource===r.draftSource&&t.conversion===r.conversion}function Jn(t,r,l,a,n,x){const T={v:Ie,world:l,...t,baselineRefText:a,authoritativeRefText:n,updatedAt:x},c=[];if(j(T)&&(c.push(ko(T,x)),c.push(wo(T,x))),T.currentStep!=="review"&&!j(T)){c.push(Eo(T,x),To(T,x));for(const g of le[T.currentStep])c.push(Co(T,g,x))}return c.some(g=>Kn(g,r))}function Gn(t){if(!tt(t)||!ot(t,["v","world","currentStep","selections","decisions","baselineRefText","authoritativeRefText","currentRefText","draftSource","conversion","updatedAt"],["undo"])||t.v!==Ie||typeof t.world!="string"||typeof t.baselineRefText!="string"||typeof t.authoritativeRefText!="string"||typeof t.updatedAt!="string")return null;const r=io({currentStep:t.currentStep,selections:t.selections,decisions:t.decisions,currentRefText:t.currentRefText,draftSource:t.draftSource,conversion:t.conversion},t.baselineRefText);if(!r)return null;let l;if(t.undo!==void 0){const a=io(t.undo,t.baselineRefText);if(!a||!Jn(a,r,t.world,t.baselineRefText,t.authoritativeRefText,t.updatedAt))return null;l=a}return{v:Ie,world:t.world,...r,baselineRefText:t.baselineRefText,authoritativeRefText:t.authoritativeRefText,...l?{undo:l}:{},updatedAt:t.updatedAt}}function Vn(t,r){const l=Ct(r);try{const a=t.getItem(l);if(!a)return null;const n=Gn(JSON.parse(a));return!n||n.world!==r?(t.removeItem(l),null):n}catch{try{t.removeItem(l)}catch{}return null}}function Wn(t,r){try{t.setItem(Ct(r.world),JSON.stringify(r))}catch{}}function Yn(t,r){try{t.removeItem(Ct(r))}catch{}}function Zn(t,r,l){return t.world!==r?null:l===t.authoritativeRefText?t:l===t.currentRefText?Ho(t,l,void 0,l):null}const Qn=`<!-- ============================================================
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
  /* ②姿を作る：H2R 六部位mobile composer。既存九段wizardは別面のまま置換しない。 */
  .pplaction { display: flex; flex-direction: column; gap: 6px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; background: var(--panel); }
  #pplh2 { padding: 0; overflow-x: hidden; border-color: #6c5730; background: #151c29; }
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
  #pplh2Views { height: min(40dvh, 360px); min-height: 250px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
  .pplh2view { display: flex; flex-direction: column; min-width: 0; min-height: 0; gap: 4px; align-items: center; padding: 4px !important; background: #0d1117 !important; }
  .pplh2view img { width: 100%; min-height: 0; flex: 1; object-fit: contain; border-radius: 6px; image-rendering: pixelated; }
  .pplh2view span { font-size: 11px; color: #ffe9b8; }
  #pplh2Motions { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
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
    #pplheroMain { padding: 8px; gap: 12px; overflow-x: hidden; }
    #pplh2Head { align-items: center; }
    #pplh2Axes { gap: 3px; }
    #pplh2Axes button { padding-inline: 1px; font-size: 9px; }
    #pplh2Options { max-height: 54dvh; overflow-y: auto; overscroll-behavior-y: contain; padding-right: 2px; }
    .pplh2option { min-height: 148px; }
    .pplh2option img { height: clamp(92px, 19dvh, 132px); }
    #pplh2Views { height: 40dvh; min-height: 240px; max-height: 42dvh; }
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

        <!-- ②姿を作る：H2R 六部位mobile composer＋既存3動作 -->
        <div class="pplblock">
          <h2 data-i18n="tool.people.makeHead">姿を作る</h2>

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
              <div class="note" data-i18n="tool.people.h2.reviewHint">三方向と、店主の基本の動きを確認できます</div>
              <div id="pplh2Views">
                <button type="button" class="pplh2view" id="pplh2Front"><img id="pplh2FrontImg" alt="" /><span data-i18n="tool.people.h2.front">正面</span></button>
                <button type="button" class="pplh2view" id="pplh2Angle"><img id="pplh2AngleImg" alt="" /><span data-i18n="tool.people.h2.angle">斜め</span></button>
                <button type="button" class="pplh2view" id="pplh2Back"><img id="pplh2BackImg" alt="" /><span data-i18n="tool.people.h2.back">背面</span></button>
              </div>
              <div id="pplh2Motions">
                <button type="button" id="pplh2Idle" data-i18n="tool.people.h2.idle">立つ</button>
                <button type="button" id="pplh2Walk" data-i18n="tool.people.h2.walk">歩く</button>
                <button type="button" id="pplh2Lantern" data-i18n="tool.people.h2.lantern">ランタンを使う</button>
              </div>
            </div>
            <div id="pplh2Status" role="status" aria-live="polite"></div>
          </div>

          <div class="pplaction">
            <h3 data-i18n="tool.people.askHead">言葉で姿を作る</h3>
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
            <div class="note" data-i18n="tool.people.advancedNote">姿の指し方：組み込みの型／彫房で彫った姿／部品の組み合わせ（詳細は手打ちで自由に書けます）</div>
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
`,wt=()=>new Date().toISOString().replace(/\.\d+Z$/,"Z"),lo="cdPeopleP1",kt="cdPeopleHandoff",ao=()=>({name:"",glyph:"",color:"",refText:""}),Xn=Zo.options,er=t=>({id:`comp${t}`,name:"",glyph:"",color:"",race:"human",refText:""});function We(t,r,l){const a={...t},n={...t.party??{}};return Object.keys(r).length?n.hero=r:delete n.hero,l!==void 0?n.start=l:delete n.start,Object.keys(n).length?a.party=n:delete a.party,a}function tr(t,r,l,a,n,x,T){const c=We({},a,n).party;if(c!==void 0&&!so.safeParse(c).success)return r;const g=c===void 0?{field:"party",op:"unset"}:{field:"party",op:"set",value:c},D=i("tool.hub.draft.editorPeople",{name:x});return t.register({panel:l,bundleKind:"tables",itemId:"party",label:D,payload:[g],updatedAt:T,now:T})}function or(t,r){return r&&t.remove(r),null}const wr={id:"people",async mount(t,r){const{wapi:l,postJson:a}=r.api;t.innerHTML=Qn,Xt(t);const n=e=>t.querySelector(`#${e}`),x=(e,o=!1)=>{const p=n("pplmsg");p.textContent=e,p.style.color=o?"#ff7a6e":"#7fd17f"};let T="hero",c=ao(),g=!1,D="default",H=[],I=!1,L=-1,z={},$=null,Ee=!1,Q,fe,me=!1,_,s=null,A=!1,q=!1;const he=new Map;let Te=null,C=null,De=null;const W=bt[0],N=vt(96),He=vt(220),Re=vt(420);function S(){var p;if(!g&&!I){De=or(Qt,De);return}const e=se();if(!e.ok)return;const o=((p=e.hero.name)==null?void 0:p.trim())||W.name;De=tr(Qt,De,"people",e.hero,e.start,o,wt())}const w=()=>{var e;try{sessionStorage.setItem(lo,JSON.stringify({v:1,world:r.world(),draft:c,dirty:g,shelf:de,label:n("ppllabel").value,compMode:D,compMembers:H,compDirty:I,complabel:((e=n("pplcomplabel"))==null?void 0:e.value)??"",lastSavedProposalId:Q,lastSavedSignature:fe,showNextStep:me,askUndo:_}))}catch{}};let St;const Lo=()=>{try{const e=sessionStorage.getItem(lo);if(!e)return!1;const o=JSON.parse(e);return o.v!==1||o.world!==r.world()?!1:(c={...ao(),...o.draft},g=o.dirty,D=o.compMode??"default",H=o.compMembers??[],I=o.compDirty??!1,Q=o.lastSavedProposalId,fe=o.lastSavedSignature,me=o.showNextStep??!1,_=o.askUndo,St=o.shelf,n("ppllabel").value=o.label??"",n("pplcomplabel").value=o.complabel??"",!0)}catch{return!1}};function Et(){const e={};return c.name.trim()&&(e.name=c.name.trim()),c.glyph.trim()&&(e.glyph=c.glyph.trim()),c.color.trim()&&(e.color=c.color.trim()),c.refText.trim()&&(e.modelRef=V(c.refText.trim())),e}function Ao(e){const o=e.trim();if(!o)return null;try{const p=V(o);return p&&typeof p=="object"&&"rig"in p?p:null}catch{return null}}function ae(e){return{name:(e==null?void 0:e.name)??"",glyph:(e==null?void 0:e.glyph)??"",color:(e==null?void 0:e.color)??"",refText:(e==null?void 0:e.modelRef)!==void 0?Se(e.modelRef):""}}function Tt(){try{const e=Et();return Object.keys(e).length&&Qo.parse(e),{ok:!0,hero:e}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}function Ht(){var o;const e=ae((o=z.party)==null?void 0:o.hero);return c.name!==e.name||c.glyph!==e.glyph||c.color!==e.color||c.refText!==e.refText}function Oo(e){const o={id:e.id.trim(),name:e.name.trim()};return e.glyph.trim()&&(o.glyph=e.glyph.trim()),e.color.trim()&&(o.color=e.color.trim()),e.race.trim()&&(o.race=e.race.trim()),e.refText.trim()&&(o.modelRef=V(e.refText.trim())),o}function No(e){return{id:e.id,name:e.name,glyph:e.glyph??"",color:e.color??"",race:e.race??"human",refText:e.modelRef!==void 0?Se(e.modelRef):""}}function nt(e){const o=e==null?void 0:e.start;return o===void 0?{mode:"default",members:[]}:o.length===0?{mode:"solo",members:[]}:{mode:"custom",members:o.map(No)}}function Rt(){if(D!=="default")return D==="solo"?[]:H.map(Oo)}function se(){try{const e=Et(),o=Rt(),p={};return Object.keys(e).length&&(p.hero=e),o!==void 0&&(p.start=o),Object.keys(p).length&&so.parse(p),{ok:!0,hero:e,start:o}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}let je="",de,Le=[];async function ze(e){try{const o=e?`/api/parts/proposal?id=${encodeURIComponent(e)}`:"/api/parts/truth",p=await fetch(l(o));if(!p.ok)throw new Error(`HTTP ${p.status}`);Le=(await p.json()).parts??[],oo(Le.map(u=>vn(u))),de=e,je=e?i("tool.people.shelfProposal"):""}catch{oo([]),Le=[],de=void 0,je=""}mn(),N.clear(),He.clear(),Re.clear(),he.clear(),Te=null}async function rt(){var e,o;try{const p=await fetch(l("/api/tables/truth"));if(p.ok)return((o=(e=(await p.json()).docs)==null?void 0:e[0])==null?void 0:o.tables)??{}}catch{}return{}}async function _e(e=!1){var o;if(z=await rt(),(e||!g)&&(c=ae((o=z.party)==null?void 0:o.hero),g=!1,s&&(c.refText!==s.currentRefText||c.refText!==s.authoritativeRefText)&&K()),e||!I){const p=nt(z.party);D=p.mode,H=p.members,I=!1,L=-1}J(),S()}async function Lt(){$==null&&($=await ln(l)),re()}function Y(e){T=e,n("ppltabList").classList.toggle("on",T==="list"),n("ppltabHero").classList.toggle("on",T==="hero"),n("ppltabComp").classList.toggle("on",T==="comp"),n("ppllist").classList.toggle("show",T==="list"),n("pplhero").classList.toggle("show",T==="hero"),n("pplcomp").classList.toggle("show",T==="comp")}function ve(e){return{kind:"hero",race:W.race,equipment:{},stats:{...W.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name??W.name,glyph:e.glyph??W.glyph,color:e.color??W.color,...e.modelRef!==void 0?{modelRef:e.modelRef}:{}}}function pt(e){const o=e.refText.trim()?V(e.refText.trim()):void 0;return{kind:"ally",race:e.race||"human",color:e.color||"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:e.name.trim()||i("tool.people.compDefaultName"),...o!==void 0?{modelRef:o}:{}}}function U(e,o,p="full",m){try{const u=an(o,{detachedGeometry:e===Re});return m!==void 0&&(u.rotation.y=sn+m),e.shoot(u,p)}catch(u){return console.warn("people プレビューが組めない",u),null}}const At=["idle","walk","use-item"];function Ae(){s&&Wn(localStorage,s)}function K(e=c.refText){var p;const o=ae((p=z.party)==null?void 0:p.hero).refText;s=s?Ho(s,e,void 0,o):Ve(r.world(),e,void 0,o),q=!1,C=null,he.clear(),Te=null,Ae()}function Po(e){var h;const o=ae((h=z.party)==null?void 0:h.hero).refText,p=Vn(localStorage,r.world()),m=p?Zn(p,r.world(),o):null,u=e&&g&&m!=null&&c.refText!==m.currentRefText;m&&!Be&&!u?(s=m,c.refText=m.currentRefText,g=Ht(),q=!0):(p&&!m&&Yn(localStorage,r.world()),s=Ve(r.world(),c.refText,void 0,o),q=!1),A=!0,Ae(),w(),J(),S()}function Ot(e){return i(`tool.people.h2.option.${e}`)}function Io(e){return e==="face"||e==="hair"?"head":e==="arm"||e==="upper"?"upper":"full"}function Nt(e){return e.trim()?{modelRef:V(e)}:{}}function Pt(e){try{const o=e.currentRefText.trim()?V(e.currentRefText):void 0;return!!o&&typeof o=="object"&&"rig"in o&&!!o.parts.weapon&&hn(o.parts.weapon)==="lantern"}catch{return!1}}function Mo(e){if(Te===e.currentRefText)return;Te=e.currentRefText;const o=[["pplh2FrontImg",0,"front"],["pplh2AngleImg",Math.PI/4,"angle"],["pplh2BackImg",Math.PI,"back"]];try{const p=ve(Nt(e.currentRefText));for(const[m,u]of o){const h=n(m),d=U(Re,p,"full",u);d?h.src=d:h.removeAttribute("src")}}catch(p){console.warn("H2 reviewプレビューが組めない",p);for(const[m]of o)n(m).removeAttribute("src")}}function Do(e,o){var d;const p=n("pplh2Options"),m=n("pplh2OptionTemplate");p.replaceChildren(),p.setAttribute("aria-busy",String(!A));const u=e.selections[o],h=gt(e,o);for(const f of In(o)){const b=(d=m.content.firstElementChild)==null?void 0:d.cloneNode(!0);if(!b)continue;const v=Ot(f);b.dataset.h2Option=f,b.disabled=!A,b.setAttribute("aria-label",v);const oe=(h==="selected"||h==="kept")&&u===f;b.setAttribute("aria-pressed",String(oe));const k=b.querySelector("img"),E=b.querySelector(".candidateName");k.alt=v,E.textContent=v;try{const y=zn(e,f,o),R=`${o}|${y}`;he.has(R)||he.set(R,U(Re,ve(Nt(y)),Io(o)));const M=he.get(R);M?k.src=M:k.removeAttribute("src")}catch(y){console.warn("H2候補プレビューが組めない",y),k.removeAttribute("src")}b.addEventListener("click",()=>{It(f)}),p.appendChild(b)}p.setAttribute("aria-busy","false")}function X(){const e=s,o=n("pplh2"),p=n("pplh2Axes"),m=n("pplh2Choices"),u=n("pplh2Options"),h=n("pplh2Conversion"),d=n("pplh2Review"),f=n("pplh2NoFit"),b=n("pplh2Keep"),v=n("pplh2Undo"),oe=n("pplh2Convert"),k=n("pplh2KeepLegacy"),E=n("pplh2Lantern"),y=(e==null?void 0:e.currentStep)==="review",R=!!e&&j(e),M=(e==null?void 0:e.conversion)==="declined";o.setAttribute("aria-busy",String(!A)),u.setAttribute("aria-busy",String(!A)),o.dataset.h2Step=(e==null?void 0:e.currentStep)??"face",h.hidden=!R,m.hidden=!!y,R&&(m.hidden=!0),d.hidden=!y,b.hidden=!!y,f.disabled=!A||!e||y||R,b.disabled=!A||!e||y||R,v.disabled=!A||!(e!=null&&e.undo),oe.disabled=!A||!R,k.disabled=!A||!R||M,k.setAttribute("aria-pressed",String(M)),E.disabled=!A||!y||!e||!Pt(e);for(const O of p.querySelectorAll("[data-h2-axis]")){const Ce=O.dataset.h2Axis,Yo=(e==null?void 0:e.currentStep)===Ce;O.disabled=!A||!e||R,O.setAttribute("aria-current",Yo?"step":"false");const Ke=e?gt(e,Ce):"pending";O.dataset.h2Decision=Ke;const Zt=i(`tool.people.h2.axis.${Ce}`);O.setAttribute("aria-label",`${Zt}・${Ke==="no-fit"?i("tool.people.h2.noFit"):Ke==="pending"?i("tool.people.h2.unresolved"):Ke==="kept"?i("tool.people.h2.kept",{axis:Zt}):i("tool.people.h2.selected")}`)}if(!e)return;const Ue=i(`tool.people.h2.axis.${e.currentStep}`);if(e.currentStep==="review")n("pplh2Step").textContent=Ue;else{const O=P.indexOf(e.currentStep)+1;n("pplh2Step").textContent=i("tool.people.h2.progress",{axis:Ue,current:O})}if(!y&&!R){const O=e.currentStep;n("pplh2AxisTitle").textContent=i(`tool.people.h2.axis.${O}`),n("pplh2OptionsLabel").textContent=i("tool.people.h2.optionsLabel",{axis:Ue}),b.textContent=i("tool.people.h2.keepAxis",{axis:Ue}),f.setAttribute("aria-pressed",String(yt(e,O))),Do(e,O)}else y&&Mo(e);const B=[],Wo=P.filter(O=>yt(e,O));M&&B.push(i("tool.people.h2.keepLegacyDone")),y&&!po(e)&&B.push(i("tool.people.h2.reviewBlocked")),y&&!Pt(e)?B.push(i("tool.people.h2.noLantern")):q?B.push(i("tool.people.h2.resumed")):(C==null?void 0:C.kind)==="chosen"?B.push(i("tool.people.h2.chosen",{name:C.name})):(C==null?void 0:C.kind)==="kept"?B.push(i("tool.people.h2.kept",{axis:C.axis})):(C==null?void 0:C.kind)==="no-fit"?B.push(i("tool.people.h2.noFitStatus",{axis:C.axis})):(C==null?void 0:C.kind)==="legacy-kept"&&B.push(i("tool.people.h2.keepLegacy")),!y&&j(e)&&!M&&B.push(i("tool.people.h2.conversionHint"));for(const O of Wo){const Ce=i(`tool.people.h2.axis.${O}`);(C==null?void 0:C.kind)==="no-fit"&&C.axis===Ce||B.push(i("tool.people.h2.noFitStatus",{axis:Ce}))}const Yt=Fn(e).filter(O=>!yt(e,O));y&&Yt.length&&B.push(`${i("tool.people.h2.unresolved")}: ${Yt.map(O=>i(`tool.people.h2.axis.${O}`)).join("、")}`),n("pplh2Status").textContent=B.join(" ")}function xe(){if(!s)return;const e=c.refText;c.refText=s.currentRefText,g=Ht(),e!==s.currentRefText&&(_=void 0,G("")),he.clear(),Te=null,Ae(),w(),ge(),re(),ce(),ee(),X(),F(),j(s)?n("pplh2ConversionTitle").focus():s.currentStep==="review"?n("pplh2ReviewTitle").focus():n("pplh2AxisTitle").focus(),S()}function It(e){var p;if(!A||(s||(s=Ve(r.world(),c.refText,void 0,ae((p=z.party)==null?void 0:p.hero).refText)),j(s)||s.currentStep==="review"))return;const o=Ot(e);s=Co(s,e),q=!1,C={kind:"chosen",name:o},xe()}function Mt(){if(!A||!s||s.currentStep==="review"||j(s))return;const e=i(`tool.people.h2.axis.${s.currentStep}`);s=Eo(s),q=!1,C={kind:"kept",axis:e},xe()}function Dt(){if(!A||!s||s.currentStep==="review"||j(s))return;const e=i(`tool.people.h2.axis.${s.currentStep}`);s=To(s),q=!1,C={kind:"no-fit",axis:e},xe()}function jt(){!A||!s||!j(s)||(s=ko(s),q=!1,C=null,xe())}function jo(){!A||!s||!j(s)||(s=wo(s),q=!1,C=null,xe())}function zt(){!A||!(s!=null&&s.undo)||(s=_n(s),q=!1,C=null,xe())}function zo(e,o){if(!s)return null;try{const p=s.currentRefText.trim()?V(s.currentRefText):void 0;return p&&typeof p=="object"&&"rig"in p?{kind:"parts",ref:p,initialMotion:e,initialYaw:o,allowedMotions:At}:{kind:"actor",actor:ve(p===void 0?{}:{modelRef:p}),initialMotion:e,initialYaw:o,allowedMotions:At}}catch(p){return console.warn("H2 motion reviewが開けない",p),null}}function be(e,o=.5){const p=zo(e,o);p&&bn(p)}function ee(){var f;const e=Tt(),o=n("pplportrait"),p=n("pplbody"),m=n("pplCurrentName"),u=n("pplCurrentStatus");if(!e.ok){o.removeAttribute("src"),p.textContent=`✗ ${e.error}`,p.style.color="#ff7a6e",m.textContent=c.name.trim()||W.name,u.textContent="",n("pplnote").textContent=je;return}p.style.color="";const h=U(He,ve(e.hero));h?o.src=h:o.removeAttribute("src");const d=ve(e.hero);p.textContent=cn(d)?`${i("tool.people.bodyPct")}: ${un(d)}%`:"",m.textContent=e.hero.name??W.name,u.textContent=g?i("tool.people.draftShown"):(f=z.party)!=null&&f.hero?i("tool.people.truthAuthored"):i("tool.people.defaultNote"),n("pplnote").textContent=je}function ce(){const e=n("pplpresetgrid");e.innerHTML="";const o=new Set(xt().map(d=>d.id)),p=c.refText.trim(),m=d=>{c.refText=d,g=!0,K(),w(),ge(),re(),ce(),ee(),X(),F(),S()},u=gn.filter(d=>yn(d,o));if(u.length){const d=document.createElement("div");d.className="mpickrow";for(const f of u){const b=Se(f.ref);d.appendChild(ie(N,b,i(f.shortLabelKey),b===p,m))}e.appendChild(d)}const h=$??[];if(h.length){const d=document.createElement("div");d.className="mpickrow";for(const f of h)d.appendChild(ie(N,f.id,Pe($,f.id),f.id===p,m));e.appendChild(d)}if(!u.length&&!h.length){const d=document.createElement("div");d.className="note",d.textContent=i("tool.people.presetNone"),e.appendChild(d)}}function re(){const e=n("pplcur");e.innerHTML="";const o=document.createElement("div");o.className="mpickhead",o.textContent=i("tool.people.pickCurrent");const p=c.refText.trim(),m=f=>{c.refText=f,g=!0,K(),w(),ge(),re(),ce(),ee(),X(),F(),S()};if(p)e.append(o,ie(N,p,Pe($,p),!0,m));else{const f=document.createElement("span");f.className="note",f.textContent=i("tool.people.pickNone"),e.append(o,f)}const u=n("pplgrid");u.innerHTML="";const h=to();if(h.length){const f=document.createElement("div");f.className="mpickhead",f.textContent=i("tool.smith.modelPickBuiltin"),u.appendChild(f);const b=document.createElement("div");b.className="mpickrow";for(const v of h)b.appendChild(ie(N,v,v,v===p,m));u.appendChild(b)}const d=$??[];if(d.length){const f=document.createElement("div");f.className="mpickhead",f.textContent=i("tool.smith.modelPickTruth"),u.appendChild(f);const b=document.createElement("div");b.className="mpickrow";for(const v of d)b.appendChild(ie(N,v.id,Pe($,v.id),v.id===p,m));u.appendChild(b)}}function ge(){n("pplname").value=c.name,n("pplglyph").value=c.glyph,n("pplcolor").value=c.color||W.color,n("pplref").value=c.refText,n("ppllabel").placeholder=i("tool.people.defaultLabel")}function _t(){var d,f,b;const e=n("ppllistHero");e.innerHTML="";const o=(d=z.party)==null?void 0:d.hero;e.appendChild(ye(U(N,ve(o??{})),(o==null?void 0:o.name)??W.name,o?"":i("tool.people.defaultChip"),()=>{Y("hero")}));const p=n("ppllistComp");p.innerHTML="";const m=I?{start:Rt()}:{mode:nt(z.party).mode,start:(f=z.party)==null?void 0:f.start};if(m.start===void 0)for(const v of bt.slice(1))p.appendChild(ye(U(N,{kind:"ally",race:v.race,color:v.color,equipment:{},stats:{...v.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:v.name}),v.name,i("tool.people.defaultChip"),()=>Y("comp")));else if(m.start.length===0){const v=document.createElement("div");v.className="note",v.textContent=i("tool.people.compNone"),p.appendChild(v)}else for(const v of m.start)p.appendChild(ye(U(N,{kind:"ally",race:v.race??"human",color:v.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:v.name,...v.modelRef!==void 0?{modelRef:v.modelRef}:{}}),v.name,"",()=>Y("comp")));const u=n("ppllistTown");u.innerHTML="";const h=(z.town??Xo()).npcs??[];for(const v of h)u.appendChild(ye(U(N,{kind:"ally",race:v.race,color:v.color??"#8fb7ff",equipment:{},stats:{pie:0},pos:{x:0,y:0},facing:{dx:0,dy:1},name:v.name??v.id,...v.modelRef!==void 0?{modelRef:v.modelRef}:{}}),((b=v.names)==null?void 0:b[tn()])??v.name??v.id,"",()=>r.navigate("forge",{tab:"town"})));if(!h.length){const v=document.createElement("div");v.className="note",v.textContent=i("tool.people.noTownFolk"),u.appendChild(v)}}function ye(e,o,p,m){const u=document.createElement("div");u.className="pcard"+(m?"":" plain");const h=document.createElement("img");e&&(h.src=e);const d=document.createElement("div");if(d.className="nm",d.textContent=o,u.append(h,d),p){const f=document.createElement("div");f.className="sub",f.textContent=p,u.appendChild(f)}return m&&u.addEventListener("click",m),u}function _o(e){return i(`tool.town.race.${e}`)}function Fo(){n("pplmodeDefault").checked=D==="default",n("pplmodeSolo").checked=D==="solo",n("pplmodeCustom").checked=D==="custom",n("pplcompCustomBox").style.display=D==="custom"?"":"none"}function we(){const e=n("pplcomplist");e.innerHTML="",H.forEach((o,p)=>{const m=document.createElement("div");m.className="crow"+(p===L?" editing":"");const u=document.createElement("img"),h=U(N,pt(o));h&&(u.src=h);const d=document.createElement("div");d.className="nm",d.textContent=o.name.trim()||i("tool.people.compDefaultName");const f=document.createElement("button");f.type="button",f.textContent=i("tool.people.compEditHead"),f.addEventListener("click",()=>{L=p,te()}),m.append(u,d,f),e.appendChild(m)})}function Fe(){const e=n("pplcompedit");if(L<0||!H[L]){e.classList.remove("show");return}e.classList.add("show");const o=H[L];n("pplcompeditId").value=o.id,n("pplcompeditName").value=o.name,n("pplcompeditGlyph").value=o.glyph,n("pplcompeditColor").value=o.color||"#8fb7ff",n("pplcompeditRef").value=o.refText;const p=n("pplcompeditRace");if(!p.options.length)for(const k of Xn){const E=document.createElement("option");E.value=k,p.appendChild(E)}for(const k of Array.from(p.options))k.textContent=_o(k.value);p.value=o.race;const m=n("pplcompeditPortrait"),u=U(He,pt(o));u?m.src=u:m.removeAttribute("src");const h=n("pplcompcur");h.innerHTML="";const d=o.refText.trim(),f=k=>{H[L].refText=k,I=!0,w(),te()};if(d)h.appendChild(ie(N,d,Pe($,d),!0,f));else{const k=document.createElement("span");k.className="note",k.textContent=i("tool.people.pickNone"),h.appendChild(k)}const b=n("pplcompgrid");b.innerHTML="";const v=to();if(v.length){const k=document.createElement("div");k.className="mpickhead",k.textContent=i("tool.smith.modelPickBuiltin"),b.appendChild(k);const E=document.createElement("div");E.className="mpickrow";for(const y of v)E.appendChild(ie(N,y,y,y===d,f));b.appendChild(E)}const oe=$??[];if(oe.length){const k=document.createElement("div");k.className="mpickhead",k.textContent=i("tool.smith.modelPickTruth"),b.appendChild(k);const E=document.createElement("div");E.className="mpickrow";for(const y of oe)E.appendChild(ie(N,y.id,Pe($,y.id),y.id===d,f));b.appendChild(E)}}function Oe(){const e=n("pplcomppreview");if(e.innerHTML="",D==="default"){for(const o of bt.slice(1))e.appendChild(ye(U(N,{kind:"ally",race:o.race,color:o.color,equipment:{},stats:{...o.stats},pos:{x:0,y:0},facing:{dx:0,dy:1},name:o.name}),o.name,i("tool.people.defaultChip"),null));return}if(D==="solo"){const o=document.createElement("div");o.className="note",o.textContent=i("tool.people.compNone"),e.appendChild(o);return}if(!H.length){const o=document.createElement("div");o.className="note",o.textContent=i("tool.people.compEmptyCustomNote"),e.appendChild(o);return}H.forEach((o,p)=>e.appendChild(ye(U(N,pt(o)),o.name.trim()||i("tool.people.compDefaultName"),"",()=>{L=p,te()})))}function te(){Fo(),we(),Fe(),Oe(),n("pplcompadd").disabled=H.length>=5,n("pplcomplabel").placeholder=i("tool.people.defaultLabelParty"),_t(),F()}function Ft(){const e=ht();n("pplAskHint").classList.toggle("show",!e),n("pplAskBox").classList.toggle("show",!!e)}function Bo(){const e=se();return e.ok?JSON.stringify({hero:e.hero,start:e.start}):null}function Ne(){return s?(s.draftSource==="composer"||P.some(o=>gt(s,o)!=="pending"))&&!po(s):!1}function it(){return!Ne()&&!!Q&&!!fe&&Ee&&Bo()===fe}function F(){const e=n("ppldecide"),o=it();e.disabled=!o,n("pplsave").disabled=!Ee||Ne(),n("pplcompsave").disabled=!Ee||Ne();const p=n("pplDecideNote");p.textContent=Ne()?i("tool.people.h2.finishSelection"):o?"":Q?i("tool.people.decideStale"):i("tool.people.decideNeedSave"),n("pplNextStep").classList.toggle("show",me)}async function Bt(){var p;if(!it()||!Q)return;const e=se();!e.ok||!await lt(Q,{skipReload:!0})||(z=We(z,e.hero,e.start),c=ae((p=z.party)==null?void 0:p.hero),g=!1,K(),Q=void 0,fe=void 0,me=!0,w(),J())}function J(){ge(),re(),ce(),ee(),X(),Ft(),F(),_t(),te()}async function pe(){try{const e=await(await fetch(l("/api/tables/proposals"))).json();nn(n("pplprops"),e.proposals??[],{tag:()=>i("tool.people.capTag"),onView:o=>{$t(o)},onPromote:o=>{lt(o)},onArchive:o=>{$o(o)}}),n("ppllive").textContent="· live",Ee=!0}catch{n("pplprops").innerHTML=`<div class="note">${i("tool.common.devOff")}</div>`,n("ppllive").textContent=i("tool.common.devOff"),Ee=!1}F()}async function $t(e){var o,p,m,u;if(!((g||I)&&!await on(i("tool.common.confirmReplaceDraft"),{ok:i("tool.common.confirmReplaceOk"),danger:!0})))try{const h=await(await fetch(l(`/api/tables/proposal?id=${encodeURIComponent(e)}`))).json(),d=(p=(o=h.docs)==null?void 0:o[0])==null?void 0:p.tables.party;c=ae(d==null?void 0:d.hero),g=!0,K();const f=nt(d);D=f.mode,H=f.members,I=!0,L=-1,w(),J(),S(),x(i("tool.people.loadedProp",{name:((u=(m=h.docs)==null?void 0:m[0])==null?void 0:u.name)??e}))}catch(h){x(i("tool.common.loadPropFail",{msg:h.message}),!0)}}async function lt(e,o={}){try{return await a(l("/api/tables/promote"),{proposalId:e}),x(i("tool.people.promoted")),g=!1,I=!1,S(),pe(),o.skipReload||_e(!0),!0}catch(p){return rn(p,{base:"/api/tables",wapi:l,proposalId:e,onView:()=>{$t(e)},onRebased:()=>{x(i("tool.conflict.rebased")),pe()}})||x(i("tool.common.promoteFail",{msg:p.message}),!0),!1}}async function $o(e){try{await a(l("/api/tables/archive"),{proposalId:e}),x(i("tool.people.archived")),pe()}catch(o){x(i("tool.common.archiveFail",{msg:o.message}),!0)}}async function at(){if(Ne()){x(i("tool.people.h2.finishSelection"),!0);return}const e=se();if(!e.ok){x(`✗ ${e.error}`,!0);return}const p=n(T==="comp"?"pplcomplabel":"ppllabel").value.trim()||i(T==="comp"?"tool.people.defaultLabelParty":"tool.people.defaultLabel"),m=await rt(),u=We(m,e.hero,e.start),h={formatVersion:en,id:"tables",name:p,tables:u,createdAt:wt(),updatedAt:wt()};try{const d=await a(l("/api/tables/proposal"),{tables:h,label:p,createdBy:"user"});x(i("tool.people.saved",{name:p})),Q=d.id,fe=JSON.stringify({hero:e.hero,start:e.start}),me=!0,w(),pe(),F()}catch(d){x(i("tool.common.saveFail",{msg:d.message}),!0)}}function qt(e,o){const p=new Set(xt().map(h=>h.id)),m=h=>{if(!h||typeof h!="object"||!h.parts)return[];const d=h.parts;return Object.values(d).map(f=>typeof f=="string"?f:f.id).filter(f=>!p.has(f))},u=new Set(m(e.modelRef));for(const h of o??[])for(const d of m(h.modelRef))u.add(d);return[...u]}function qo(e,o){const p={};return Object.keys(e).length&&(p.hero=e),o!==void 0&&(p.start=o),p}async function Ut(){const e=se();if(!e.ok){x(`✗ ${e.error}`,!0);return}const o=qt(e.hero,e.start);if(o.length){x(i("tool.people.partsMissing",{ids:o.join(", ")}),!0);return}An("party",qo(e.hero,e.start),r.world(),de?{partsShelf:de}:void 0).catch(p=>x(i("tool.common.tryFail",{msg:p.message}),!0))}async function Kt(){const e=se();if(!e.ok){x(`✗ ${e.error}`,!0);return}const o=qt(e.hero,e.start);if(o.length){x(i("tool.people.partsMissing",{ids:o.join(", ")}),!0);return}const p=window.open("","_blank"),m=await rt(),u=We(m,e.hero,e.start),h=`dungeon.html#pack=${encodeURIComponent(Ln(u,`people preview (${r.world()})`,Le.length?{parts:Le}:void 0))}`;p?p.location.href=h:window.open(h,"_blank")}n("ppltry").addEventListener("click",()=>{Ut()}),n("pplplay").addEventListener("click",()=>{Kt()}),n("pplcomptry").addEventListener("click",()=>{Ut()}),n("pplcompplay").addEventListener("click",()=>{Kt()});let Be=!1;function Jt(){try{const e=localStorage.getItem(kt);if(!e)return;const o=JSON.parse(e);if(o.world!==r.world())return;if(Rn(o.at)){localStorage.removeItem(kt);return}localStorage.removeItem(kt),Be=!0;const p={...c},m=g;c.refText=Se(o.ref),g=!0,K(),w(),Y("hero"),o.shelf&&ze(o.shelf).then(()=>{w(),J()}),J(),S(),x(i("tool.people.fromParts"));const u=document.createElement("button");u.type="button",u.textContent=i("tool.people.handoffUndo"),u.addEventListener("click",()=>{c=p,g=m,K(),w(),J(),S()}),n("pplmsg").appendChild(u)}catch{}}n("ppltabList").addEventListener("click",()=>Y("list")),n("ppltabHero").addEventListener("click",()=>Y("hero")),n("ppltabComp").addEventListener("click",()=>Y("comp"));for(const e of t.querySelectorAll("#pplh2Axes [data-h2-axis]"))e.addEventListener("click",()=>{!A||!s||j(s)||(s=ro(s,e.dataset.h2Axis),q=!1,C=null,Ae(),X())});n("pplh2NoFit").addEventListener("click",Dt),n("pplh2Keep").addEventListener("click",Mt),n("pplh2Undo").addEventListener("click",zt),n("pplh2Convert").addEventListener("click",jt),n("pplh2KeepLegacy").addEventListener("click",jo),n("pplh2Front").addEventListener("click",()=>be("idle",0)),n("pplh2Angle").addEventListener("click",()=>be("idle",Math.PI/4)),n("pplh2Back").addEventListener("click",()=>be("idle",Math.PI)),n("pplh2Idle").addEventListener("click",()=>be("idle")),n("pplh2Walk").addEventListener("click",()=>be("walk")),n("pplh2Lantern").addEventListener("click",()=>be("use-item")),n("pplname").addEventListener("input",e=>{c.name=e.target.value,g=!0,w(),ee(),F()}),n("pplname").addEventListener("blur",()=>S()),n("pplglyph").addEventListener("input",e=>{c.glyph=e.target.value,g=!0,w(),F()}),n("pplglyph").addEventListener("blur",()=>S()),n("pplcolor").addEventListener("input",e=>{c.color=e.target.value,g=!0,w(),ee(),F()}),n("pplcolor").addEventListener("blur",()=>S()),n("pplref").addEventListener("change",e=>{c.refText=e.target.value,g=!0,K(),w(),re(),ce(),ee(),X(),F(),S()}),n("ppllabel").addEventListener("input",w),n("pplsave").addEventListener("click",()=>{at()}),n("pplcompsave").addEventListener("click",()=>{at()}),n("ppldecide").addEventListener("click",()=>{Bt()}),n("pplNextGoals").addEventListener("click",()=>r.navigate("goals"));const st=n("pplAskInput"),dt=n("pplAskBtn"),$e=n("pplAskStatus");function G(e,o=!1){$e.textContent=e,$e.className=o?"bad":"ok"}function Gt(){return!!_&&c.refText===_.appliedRefText}function Vt(){if(_){if(!Gt()){_=void 0,w(),G("");return}c.refText=_.prevRefText,g=_.prevDirty,_=void 0,K(),w(),ge(),re(),ce(),ee(),X(),F(),S(),G(i("tool.parts.ask.undone"))}}function Uo(){if(_){if(!Gt()){_=void 0,w();return}G(i("tool.people.ask.restoredUndo")),$e.appendChild(no(_.rows,_.note,Vt))}}async function ct(){const e=st.value.trim();if(!e)return;const o=ht();if(!o){G(i("tool.people.ask.needCfg"),!0);return}dt.disabled=!0,G(i("tool.people.ask.working"));try{const p=xt().map(E=>({id:E.id,name:E.name,slot:E.slot})),m=new Set(p.map(E=>E.id)),u=Object.keys(fn),h={...c},d=g,f=Ao(h.refText);let b,v;if(f){const{system:E,user:y}=wn(e,f,p,u),R=await eo(o,E,y);if(!R.ok){G(R.maybeCors?i("tool.studio.llm.corsFail"):i("tool.people.ask.fail",{err:R.error}),!0);return}const M=kn(R.text,m);if(!M.ok){G(i("tool.people.ask.fail",{err:M.error}),!0);return}b=Cn(f,M.patch),v=M.note}else{const{system:E,user:y}=Sn(e,p,u),R=await eo(o,E,y);if(!R.ok){G(R.maybeCors?i("tool.studio.llm.corsFail"):i("tool.people.ask.fail",{err:R.error}),!0);return}const M=En(R.text,m,new Set(u));if(!M.ok){G(i("tool.people.ask.fail",{err:M.error}),!0);return}b=M.ref,v=M.note}const oe=Tn(f,b),k=Hn(e,b,v);c.refText=Se(b),g=!0,_={prevRefText:h.refText,prevDirty:d,appliedRefText:c.refText,...v?{note:v}:{},rows:oe},K(),w(),ge(),re(),ce(),ee(),X(),F(),S(),G(i("tool.people.ask.done")),$e.appendChild(no(oe,v,Vt,k))}finally{dt.disabled=!1}}dt.addEventListener("click",()=>{ct()}),st.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),ct())}),n("pplAskConnect").addEventListener("click",()=>{var e;(e=document.getElementById("stullmbtn"))==null||e.click()});const ke=document.getElementById("stullmdlg"),Wt=()=>Ft();ke==null||ke.addEventListener("close",Wt);const ut=n("pplparts");ut.textContent=i("tool.people.partsLink"),ut.addEventListener("click",()=>{const e=c.refText.trim();let o;if(e)try{const p=V(e);if(p&&typeof p=="object"&&"rig"in p){const m={world:r.world(),ref:p,at:new Date().toISOString()};localStorage.setItem(xn,JSON.stringify(m)),o={intake:"1"}}}catch{}r.navigate("parts",o)});const ft=n("pplsculpt");ft.textContent=i("tool.people.sculptLink"),ft.addEventListener("click",()=>r.navigate("sculpt"));const qe=e=>{D=e,I=!0,L=-1,w(),te(),S()};n("pplmodeDefault").addEventListener("change",()=>qe("default")),n("pplmodeSolo").addEventListener("change",()=>qe("solo")),n("pplmodeCustom").addEventListener("change",()=>qe("custom")),n("pplcompadd").addEventListener("click",()=>{if(H.length>=5){x(i("tool.people.compFull"),!0);return}H.push(er(H.length+1)),L=H.length-1,I=!0,w(),te(),S()}),n("pplcompremove").addEventListener("click",()=>{L<0||(H.splice(L,1),L=-1,I=!0,w(),te(),S())});const ue=e=>{L<0||!H[L]||(H[L]={...H[L],...e},I=!0,w())};n("pplcompeditId").addEventListener("input",e=>{ue({id:e.target.value}),we()}),n("pplcompeditId").addEventListener("blur",()=>S()),n("pplcompeditName").addEventListener("input",e=>{ue({name:e.target.value}),we(),Oe()}),n("pplcompeditName").addEventListener("blur",()=>S()),n("pplcompeditGlyph").addEventListener("input",e=>{ue({glyph:e.target.value})}),n("pplcompeditGlyph").addEventListener("blur",()=>S()),n("pplcompeditColor").addEventListener("input",e=>{ue({color:e.target.value}),Fe(),we(),Oe()}),n("pplcompeditColor").addEventListener("blur",()=>S()),n("pplcompeditRace").addEventListener("change",e=>{ue({race:e.target.value}),Fe(),we(),Oe(),S()}),n("pplcompeditRef").addEventListener("change",e=>{ue({refText:e.target.value}),Fe(),we(),Oe(),S()}),n("pplcomplabel").addEventListener("input",w);const Ko=r.events.on("tables",()=>{pe(),_e()}),Jo=r.events.on("sculpt",()=>{$=null,N.clear(),He.clear(),Lt()}),Go=r.events.on("parts",()=>{ze(de).then(()=>{J()})}),Vo=pn(()=>{Xt(t),ut.textContent=i("tool.people.partsLink"),ft.textContent=i("tool.people.sculptLink"),J(),pe()});window.cdPeople={draft:()=>({...c}),set:e=>{c={...c,...e},g=!0,e.refText!==void 0&&K(),w(),J()},h2:()=>s?JSON.parse(JSON.stringify(s)):null,selectComposer:e=>It(e),keepComposer:()=>Mt(),rejectComposer:()=>Dt(),visitComposer:e=>{s&&(s=ro(s,e),Ae(),X())},convertComposer:()=>jt(),undoComposer:()=>zt(),valid:()=>Tt(),comp:()=>({mode:D,members:H.map(e=>({...e}))}),setCompMode:e=>qe(e),setMember:(e,o)=>{L=e,ue(o),te()},addMember:()=>{n("pplcompadd").dispatchEvent(new Event("click"))},removeMember:e=>{L=e,H.splice(e,1),L=-1,I=!0,w(),te()},validParty:()=>se(),save:()=>at(),promote:e=>lt(e),refresh:()=>pe(),reload:(e=!0)=>_e(e),dirty:()=>g,compDirty:()=>I,shelf:e=>(e!==void 0&&ze(e??void 0).then(()=>J()),de??""),tab:e=>(e&&Y(e),T),askHero:e=>(st.value=e,ct()),decide:()=>Bt(),decideEnabled:()=>it(),lastSavedProposalId:()=>Q,showNextStep:()=>me,llmConnected:()=>!!ht()},Y("hero");const mt=Lo();return(async()=>(await ze(St),mt&&!Be&&(g||I)&&x(i("tool.common.restored")),await _e(!mt&&!Be),Jt(),Po(mt),Uo(),Promise.all([pe(),Lt()])))(),{applyParams(e){const o=e.get("tab");(o==="list"||o==="hero"||o==="comp")&&Y(o),e.get("handoff")==="parts"&&Jt()},dispose(){Ko(),Jo(),Go(),Vo(),ke==null||ke.removeEventListener("close",Wt),w(),N.dispose(),He.dispose(),Re.dispose(),delete window.cdPeople}}}};export{kt as HANDOFF_KEY,or as forgetPeopleEditorDraft,wr as peoplePanel,tr as syncPeopleEditorDraft};
