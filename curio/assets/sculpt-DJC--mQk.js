import{W as Ke,A as Tn,S as qe,P as Ze,H as Pn,D as ye,a as Nn,j as In,B as Qe,d as Zt,k as tn,M as Dt,l as en,f as $n,V as St,C as nn,g as on,G as On,R as Fn,h as Dn}from"./three.module-WWCVshk5.js";import{M as Bt,G as Qt,E as an,n as Hn,s as we,o as Bn,L as Rn,b as Vn,m as An,q as jn}from"./render-voxel-yXlPYMpJ.js";import{e as Le,V as Gn,p as ft,m as Rt,f as Un,g as Wn,a as Yn}from"./voxmodel-Dcp997La.js";import{E as Xn}from"./forge-edit-CffY6cQY.js";import{a as _n}from"./touch-input-D1HYJrcI.js";import{i as Jn,b as Ht,r as Kn,a as qn}from"./tool-shelf-D47bRaT1.js";import{M as Zn}from"./dungeon-D-RnNekZ.js";import{c as Qn,t as u,u as mt,v as to}from"./world-ui-6gT7-Xrb.js";import{o as eo}from"./studio-CUVScC89.js";import"./tables-ChfHX5yh.js";import"./monster-CNlJLiEB.js";import"./gamepack-CkDy6Wip.js";import"./creator-auth-C2cecs39.js";function P(s){let l=0,d=0;for(const f of s.vox.layers){d=Math.max(d,f.length);for(const n of f)l=Math.max(l,n.length)}return{w:l,d,h:s.vox.layers.length}}function Ee(s){const{w:l,d}=P(s);s.vox.layers=s.vox.layers.map(f=>{const n=f.map(a=>a.padEnd(l,"."));for(;n.length<d;)n.push(".".repeat(l));return n})}function pt(s,l,d,f){var a,p;const n=(p=(a=s.vox.layers[d])==null?void 0:a[f])==null?void 0:p[l];return n&&n!=="."?n:null}function ln(s,l,d,f,n){var p;const a=(p=s.vox.layers[d])==null?void 0:p[f];return a==null||l<0||l>=a.length||a[l]===n?!1:(s.vox.layers[d][f]=a.slice(0,l)+n+a.slice(l+1),!0)}function Vt(s,l,d,f,n,a=!1){const p=n??".";let g=ln(s,l,d,f,p);if(a){const{w:h}=P(s),m=h-1-l;m!==l&&(g=ln(s,m,d,f,p)||g)}return g}function Me(s,l,d,f,n,a=!1){var I,L;const p=s.vox.layers[l];if(!p)return!1;const g=(I=p[f])==null?void 0:I[d];if(g==null||g===(n??"."))return!1;let m=!1;const k=[[d,f]],M=new Set;for(;k.length;){const[z,T]=k.pop(),ot=z+","+T;M.has(ot)||(M.add(ot),((L=s.vox.layers[l][T])==null?void 0:L[z])===g&&(m=Vt(s,z,l,T,n,a)||m,k.push([z+1,T],[z-1,T],[z,T+1],[z,T-1])))}return m}function sn(s,l,d,f){Ee(s);const n=P(s);let a=0;s.vox.layers.forEach((g,h)=>g.forEach((m,k)=>{for(let M=0;M<m.length;M++)m[M]!=="."&&(h>=f||k>=d||M>=l)&&a++}));const p=[];for(let g=0;g<f;g++){const h=[];for(let m=0;m<d;m++){const k=g<n.h&&m<n.d?s.vox.layers[g][m]:"";h.push(k.slice(0,l).padEnd(l,"."))}p.push(h)}return s.vox.layers=p,{dropped:a}}const no="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function rn(s,l){const d=l.toLowerCase();for(const[f,n]of Object.entries(s.vox.pal))if(n.toLowerCase()===d)return f;for(const f of no)if(!(f in s.vox.pal))return s.vox.pal[f]=d,f;return null}function cn(s,l,d){if(!(l in s.vox.pal))return!1;const f=d.toLowerCase();if(s.vox.pal[l].toLowerCase()===f)return!1;const n=s.vox.pal[l].toLowerCase();return s.vox.pal[l]=f,s.glow=s.glow.map(a=>a.toLowerCase()===n?f:a),!0}function dn(s,l,d){const f=l.toLowerCase(),n=s.glow.some(a=>a.toLowerCase()===f);return d===n?!1:(d?s.glow.push(f):s.glow=s.glow.filter(a=>a.toLowerCase()!==f),!0)}function Se(s){const l=new Map;for(const d of s.vox.layers)for(const f of d)for(const n of f)n!=="."&&l.set(n,(l.get(n)??0)+1);return l}function ke(s){let l=0;for(const d of Se(s).values())l+=d;return l}const Ce=["x","y","z"];function te(s,l){return l==="x"?s.w:l==="y"?s.h:s.d}function pn(s,l,d){return{x:s.x/d+l.w/2,y:s.y/d,z:s.z/d+l.d/2}}function ze(s,l,d){return{x:(s.x+.5-l.w/2)*d,y:(s.y+.5)*d,z:(s.z+.5-l.d/2)*d}}function Te(s,l,d,f,n){const a=pn(s,d,f),p={x:l.x/f,y:l.y/f,z:l.z/f};let g=0,h=Number.POSITIVE_INFINITY,m=null;for(const b of Ce){const $=te(d,b),at=a[b],C=p[b];if(Math.abs(C)<1e-12){if(at<0||at>$)return null;continue}let H=-at/C,A=($-at)/C;const it=C>0?-1:1;if(H>A){const lt=H;H=A,A=lt}H>g&&(g=H,m={axis:b,sign:it}),A<h&&(h=A)}if(g>h||h<0)return null;const k=1e-7,M=g<=0,I=M?0:g+k,L={x:a.x+p.x*I,y:a.y+p.y*I,z:a.z+p.z*I},z={x:Math.min(d.w-1,Math.max(0,Math.floor(L.x))),y:Math.min(d.h-1,Math.max(0,Math.floor(L.y))),z:Math.min(d.d-1,Math.max(0,Math.floor(L.z)))};let T=M?null:m;const ot={x:Math.sign(p.x),y:Math.sign(p.y),z:Math.sign(p.z)},F={x:p.x!==0?Math.abs(1/p.x):Number.POSITIVE_INFINITY,y:p.y!==0?Math.abs(1/p.y):Number.POSITIVE_INFINITY,z:p.z!==0?Math.abs(1/p.z):Number.POSITIVE_INFINITY},S={x:0,y:0,z:0};for(const b of Ce)p[b]>0?S[b]=I+(z[b]+1-L[b])/p[b]:p[b]<0?S[b]=I+(z[b]-L[b])/p[b]:S[b]=Number.POSITIVE_INFINITY;const V=d.w+d.h+d.d+3;for(let b=0;b<=V;b++){if(n(z.x,z.y,z.z))return{cell:{...z},normal:T?{...T}:null};let $="x";if(S.y<S[$]&&($="y"),S.z<S[$]&&($="z"),S[$]>h+k||(z[$]+=ot[$],z[$]<0||z[$]>=te(d,$)))return null;T={axis:$,sign:ot[$]>0?-1:1},S[$]+=F[$]}return null}function ee(s,l,d,f,n){const a=pn(s,f,n),p={x:l.x/n,y:l.y/n,z:l.z/n},g=p[d.axis];if(Math.abs(g)<1e-9)return null;const h=(d.k+.5-a[d.axis])/g;if(h<=0)return null;const m={x:a.x+p.x*h,y:a.y+p.y*h,z:a.z+p.z*h},k={x:Math.floor(m.x),y:Math.floor(m.y),z:Math.floor(m.z)};k[d.axis]=d.k;for(const M of Ce)if(M!==d.axis&&(k[M]<0||k[M]>=te(f,M)))return null;return k}function oo(s,l,d,f,n,a,p,g){var M;const h={axis:"y",k:p};if(g){const I=ee(s,l,h,f,n);return I?{cell:I,plane:h,surface:!1}:null}const m=Te(s,l,f,n,a);if(m){if(d==="paint")return{cell:m.cell,plane:null,surface:!0};if(d==="erase"||d==="fill"){const L=((M=m.normal)==null?void 0:M.axis)??"y";return{cell:m.cell,plane:{axis:L,k:m.cell[L]},surface:!1}}if(!m.normal)return null;const I={...m.cell};return I[m.normal.axis]+=m.normal.sign,{cell:I,plane:{axis:m.normal.axis,k:I[m.normal.axis]},surface:!1}}const k=ee(s,l,h,f,n);return k?{cell:k,plane:h,surface:!1}:null}function ao(s,l){const d=Math.max(Math.abs(l.x-s.x),Math.abs(l.y-s.y),Math.abs(l.z-s.z)),f=[];for(let n=1;n<=d;n++)f.push({x:Math.round(s.x+(l.x-s.x)*(n/d)),y:Math.round(s.y+(l.y-s.y)*(n/d)),z:Math.round(s.z+(l.z-s.z)*(n/d))});return f}function io(s,l){const d=[];for(let f=Math.min(s.x,l.x);f<=Math.max(s.x,l.x);f++)for(let n=Math.min(s.y,l.y);n<=Math.max(s.y,l.y);n++)for(let a=Math.min(s.z,l.z);a<=Math.max(s.z,l.z);a++)d.push({x:f,y:n,z:a});return d}const lo=`<!-- ============================================================
     §studio W2 — 彫房パネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 sculpt.html body の単一実体（二重持ちゼロ）：スタジオも旧 sculpt.html（stub）も
     この1枚を mount する。中身は §18 P4〜M2 の従来 markup そのまま。
     唯一の改変＝#app の高さ 100vh→100%（host の中で生きる＝standalone では
     html/body の height:100% 連鎖で従来と同寸）。
     ============================================================ -->
<style>
  /* ============================================================
     §18 クリエイター P4（DESIGN-creator §12-A）
     ・第一要件（P2 の教訓）＝迷わず彫れる：現在の筆/色が常時見える・ドラッグ彫り・
       右クリック消し・undo/redo・hover ヒント・層の見せ方・鏡映・空グリッド誘導
     ・描画＝render-voxel（buildVoxBody/geomFromVoxDef）＝3D プレビューも
       サムネもゲームと同一実体（ドリフト無し）
     ・左＝パレット＋モデル素性／中＝層スライス（2D 彫刻面）／右＝3D＋ライブラリ
     ・§tool-i18n：UI 文字列は data-i18n / t()（tool.* キー・6言語）。ja は原文と同文。
     ============================================================ */
  :root {
    --bg: #12161f; --panel: #1a2130; --line: #2b3547;
    --text: #e8edf5; --muted: #8b96a8; --accent: #5b9bff; --tint: #223048;
    --ok: #7fd17f; --warn: #ffd166; --err: #ff7a6e; --erase: #e06a5a;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--bg); color: var(--text); font: 14px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", "Noto Sans Thai Sub", "Noto Sans Viet Sub", system-ui, sans-serif; }
  #app { display: flex; height: 100%; } /* §studio W2：唯一の改変＝100vh→100%（host の中で生きる） */
  /* §M1 full-touch（DESIGN-tools-mobile §1）：狭幅＝上チップ行・3D 最大・下 hotbar・シート召喚。
     2D スライス盤はモバイルでは畳む（真上視点＋層ロックで統合）。パネル（#topbar/#side/#libwrap）は
     JS がシートへ移動する＝DOM は同一実体（リスナ/i18n 無傷）。PC は現行2面（スライス＋3D）温存。 */
  #side { width: 280px; min-width: 240px; border-right: 1px solid var(--line); padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 9px; }
  #side > * { flex: 0 0 auto; }
  #side h1 { font-size: 15px; }
  .sub { color: var(--muted); font-size: 11px; }
  #side h2, #loop h2 { font-size: 12px; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin-top: 3px; }
  button, select, input[type="text"], input[type="number"] { background: #232c3e; color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 5px 9px; font: inherit; font-size: 12px; cursor: pointer; }
  input[type="text"], input[type="number"] { cursor: text; }
  button:hover { border-color: var(--accent); }
  button.on { background: var(--accent); color: #0d1017; border-color: var(--accent); font-weight: 700; }
  button.big { background: var(--tint); border-color: var(--accent); padding: 8px 10px; font-weight: 700; }
  button:disabled { opacity: 0.45; cursor: not-allowed; }
  /* パレット＝色チップ。選択中は白枠＝「いまの色」を常時可視化 */
  #pal { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { position: relative; width: 44px; height: 44px; border-radius: 8px; border: 2px solid var(--line); cursor: pointer; }
  .chip:hover { border-color: #4a648f; }
  .chip.on { border-color: #fff; box-shadow: 0 0 0 2px var(--accent); }
  .chip .ch { position: absolute; top: 1px; left: 4px; font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: rgba(255,255,255,0.85); text-shadow: 0 1px 2px rgba(0,0,0,0.9); }
  .chip .n { position: absolute; bottom: 0; right: 3px; font-size: 9px; color: rgba(255,255,255,0.8); text-shadow: 0 1px 2px rgba(0,0,0,0.9); }
  .chip .glow { position: absolute; top: -1px; right: 1px; font-size: 11px; color: #ffe9a8; text-shadow: 0 0 4px #ffb; }
  .chip.erase { background: repeating-linear-gradient(45deg, #232c3e, #232c3e 6px, #2e3950 6px, #2e3950 12px); display: flex; align-items: center; justify-content: center; font-size: 20px; }
  #palopts { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 7px 8px; font-size: 11px; }
  #palopts input[type="color"] { width: 34px; height: 26px; padding: 0 2px; background: #232c3e; border: 1px solid var(--line); border-radius: 6px; cursor: pointer; }
  .kv { display: flex; align-items: center; gap: 6px; font-size: 12px; }
  .kv .lbl { color: var(--muted); font-size: 11px; min-width: 3.2em; }
  .kv input[type="text"] { flex: 1; min-width: 0; }
  .kv input.num { width: 3.6em; }
  #lint { display: flex; flex-direction: column; gap: 3px; font-size: 11px; }
  #lint .s-ok { color: var(--ok); } #lint .s-warn { color: var(--warn); } #lint .s-err { color: var(--err); }
  /* 中央＝スライス彫刻面 */
  #stagewrap { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  #topbar { display: flex; align-items: center; gap: 8px; padding: 7px 12px; border-bottom: 1px solid var(--line); background: var(--panel); flex-wrap: wrap; }
  #nowtool { display: flex; align-items: center; gap: 7px; background: var(--tint); border: 1px solid var(--accent); border-radius: 8px; padding: 3px 10px; font-size: 12px; }
  #nowswatch { width: 22px; height: 22px; border-radius: 5px; border: 1px solid rgba(255,255,255,0.4); }
  #nowtool b { color: #cfe3ff; }
  .tgroup { display: flex; gap: 4px; align-items: center; }
  .tgroup .cap { color: var(--muted); font-size: 10px; margin-right: 2px; }
  /* §tool-i18n：6言語ピッカー（ゲームの ☰ と同じ #langmode 流儀） */
  .langpick { margin-left: auto; display: inline-flex; align-items: center; gap: 4px; font-size: 12px; }
  #langmode { max-width: 11em; }
  #layerlbl { font-size: 12px; min-width: 5.5em; text-align: center; background: var(--tint); border-radius: 6px; padding: 4px 6px; border: 1px solid var(--line); }
  #stage { flex: 1; position: relative; min-height: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  #slice { background: #0d1117; border: 1px solid var(--line); border-radius: 8px; cursor: crosshair; touch-action: none; }
  #guide { position: absolute; left: 50%; top: 10%; transform: translateX(-50%); background: rgba(18,22,31,0.9); border: 1px solid var(--accent); border-radius: 12px; padding: 12px 18px; font-size: 13px; line-height: 1.9; pointer-events: none; z-index: 5; box-shadow: 0 6px 24px rgba(0,0,0,0.45); max-width: min(92%, 560px); }
  #guide b { color: #cfe3ff; }
  #axes { position: absolute; left: 12px; bottom: 10px; font-size: 11px; color: var(--muted); z-index: 2; }
  #foot { border-top: 1px solid var(--line); background: var(--panel); padding: 7px 12px; font-size: 12px; color: var(--muted); display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
  #hoverhint { color: #cfe3ff; min-width: 15em; }
  #msg { color: var(--ok); }
  #legend { margin-left: auto; font-size: 11px; }
  #legend b { color: var(--text); font-weight: 600; }
  /* 右＝3D プレビュー＋ライブラリ */
  #loop { width: 330px; min-width: 280px; border-left: 1px solid var(--line); display: flex; flex-direction: column; }
  #view3d { position: relative; height: 300px; min-height: 220px; border-bottom: 1px solid var(--line); background: #10141d; }
  #view3d canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  #view3dbar { position: absolute; top: 6px; left: 8px; right: 8px; display: flex; gap: 5px; z-index: 2; align-items: center; }
  #view3dbar .sub { margin-left: auto; text-shadow: 0 1px 3px #000; }
  #libwrap { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 8px; font-size: 12px; display: flex; flex-direction: column; gap: 5px; }
  .card.sel { border-color: var(--accent); }
  .card .id { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted); }
  .card .who { font-size: 10px; color: var(--warn); }
  .card .row { display: flex; gap: 6px; flex-wrap: wrap; }
  .card img.pv { width: 56px; height: 56px; border-radius: 6px; background: #0d1117; float: right; }
  .card .head { display: flex; gap: 8px; align-items: flex-start; }
  .card .head .info { flex: 1; min-width: 0; }
  .live { font-size: 11px; color: var(--muted); }
  .live b { color: var(--ok); }
  details.hist summary { cursor: pointer; font-size: 11px; color: var(--muted); }
  label.tog { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; color: var(--muted); cursor: pointer; }
  /* ⭐2段確認（決定⑥・M0 forge と共通）：promote タップ→確認バー→確定。PC/モバイル共通 */
  .confirmbar { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; background: #33290f; border: 1px solid var(--warn); border-radius: 6px; padding: 6px 8px; font-size: 11px; }
  .confirmbar span { color: var(--warn); }
  /* ── M1 モバイル部品（デスクトップでは非表示） ───────────────────────── */
  #mchips, #hotbar, .sheet, #veil, #mtoast, #mstage, #mlegend, #lrail { display: none; }
  #mchips { gap: 6px; align-items: center; padding: 6px 8px; border-bottom: 1px solid var(--line); background: var(--panel); overflow-x: auto; flex: 0 0 auto; }
  #mchips button { min-height: 44px; min-width: 44px; font-size: 14px; flex: 0 0 auto; }
  #mchips .mchip.ok { color: var(--ok); border-color: var(--ok); }
  #mchips .mchip.warn { color: var(--warn); border-color: var(--warn); }
  #mchips .mchip.err { color: var(--err); border-color: var(--err); font-weight: 700; }
  #mchips button.on { background: var(--tint); border-color: var(--accent); }
  #mInfo { font-size: 11px; color: var(--muted); white-space: nowrap; flex: 0 0 auto; background: var(--tint); border: 1px solid var(--line); border-radius: 8px; padding: 4px 8px; min-height: 44px; display: inline-flex; align-items: center; }
  #mstage { position: relative; flex: 1 1 auto; min-height: 0; }
  #mstage #view3d { position: absolute; inset: 0; height: auto; min-height: 0; border-bottom: none; }
  /* 層レール（§1-b）：縦スライダ＋▲▼＋層ロック。3D の右端に浮かせる */
  #lrail { position: absolute; right: 6px; top: 50%; transform: translateY(-50%); z-index: 4; flex-direction: column; align-items: center; gap: 6px; background: rgba(18, 22, 31, 0.72); border: 1px solid var(--line); border-radius: 10px; padding: 8px 5px; }
  #lrail button { min-width: 40px; min-height: 40px; }
  #lrail #lNum { font-size: 11px; color: #cfe3ff; }
  #lSlider { writing-mode: vertical-lr; direction: rtl; -webkit-appearance: slider-vertical; width: 40px; height: 24vh; padding: 0; }
  #hotbar { gap: 6px; align-items: stretch; padding: 6px 8px calc(6px + env(safe-area-inset-bottom)); border-top: 1px solid var(--line); background: var(--panel); overflow-x: auto; flex: 0 0 auto; }
  #hotbar button { min-width: 52px; min-height: 52px; font-size: 12px; flex: 0 0 auto; }
  #hColor .sw { width: 26px; height: 26px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.4); margin: 0 auto 2px; display: block; }
  #hColor .nm { font-size: 9px; color: var(--muted); font-family: ui-monospace, Menlo, monospace; }
  #mtoast { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); background: rgba(18, 22, 31, 0.92); border: 1px solid var(--line); border-radius: 8px; padding: 6px 12px; font-size: 12px; z-index: 6; max-width: 92%; }
  #mlegend { position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%); background: rgba(18, 22, 31, 0.85); border: 1px solid var(--line); border-radius: 8px; padding: 5px 10px; font-size: 10.5px; color: var(--muted); pointer-events: none; z-index: 5; max-width: 94%; text-align: center; }
  #veil { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 29; }
  .sheet { position: fixed; left: 0; right: 0; bottom: 0; z-index: 30; background: var(--bg); border-top: 1px solid var(--accent); border-radius: 14px 14px 0 0; max-height: 78vh; max-height: 78dvh; flex-direction: column; box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.5); }
  .sheet .sheethead { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--line); flex: 0 0 auto; }
  .sheet .sheethead b { color: #cfe3ff; }
  .sheet .sheethead button { min-width: 44px; min-height: 38px; }
  .sheet .sheetbody { overflow-y: auto; min-height: 0; }
  .sheet #side { width: auto; min-width: 0; border-right: none; }
  .sheet #libwrap { width: auto; min-width: 0; border-left: none; }
  .sheet #topbar { border-bottom: 1px solid var(--line); }
  @media (max-width: 900px) {
    #mchips, #hotbar, #lrail { display: flex; }
    #mchips { padding-top: calc(6px + env(safe-area-inset-top)); } /* notch 側（viewport-fit=cover） */
    #mstage { display: block; touch-action: none; }
    #mstage canvas { touch-action: none; }
    #stage, #foot { display: none; } /* 2D スライス盤は畳む（§8 決定②）＝真上視点＋層ロックで統合 */
    #loop { display: none; } /* 棚は 📚 シートへ（#view3d/#libwrap は JS が移動済） */
  }
</style>
<div id="app">
  <div id="side">
    <h1><span data-i18n="tool.sculpt.h1">彫房</span> <span class="sub" data-i18n="tool.sculpt.h1sub">素材 voxel エディタ P4</span></h1>
    <div class="sub" data-i18n-html="tool.sculpt.intro">彫る→<b>提案（future）</b>を保存→<b>⭐promote</b> で truth へ→カタログ＆実機の<b>姿が変わる</b>（ゲーム結果は不変＝見た目のみ）。</div>
    <h2><span data-i18n="tool.sculpt.palHead">色パレット</span> <span class="sub" data-i18n="tool.sculpt.palHeadSub">クリック=筆にする</span></h2>
    <div id="pal"></div>
    <div id="palopts"></div>
    <h2><span data-i18n="tool.sculpt.modelHead">モデル</span> <span class="sub" data-i18n="tool.sculpt.modelHeadSub">（id=種キー。同じ種の姿を上書き）</span></h2>
    <div class="kv"><span class="lbl" data-i18n="tool.sculpt.typeId">種 id</span><input type="text" id="mid" list="typelist" /><datalist id="typelist"></datalist></div>
    <div class="kv"><span class="lbl" data-i18n="tool.common.name">名前</span><input type="text" id="mname" /></div>
    <div class="kv"><span class="lbl" data-i18n="tool.sculpt.voxSize">voxel寸</span><input type="number" id="ms" class="num" min="0.02" max="0.3" step="0.005" />
      <span class="sub" data-i18n="tool.sculpt.voxSizeSub">world/1voxel（小=高精細）</span></div>
    <div class="kv"><span class="lbl" data-i18n="tool.common.size">大きさ</span>
      <input type="number" id="mw" class="num" min="1" max="64" data-i18n-title="tool.sculpt.dimW" title="幅（x）" /> ×
      <input type="number" id="md" class="num" min="1" max="64" data-i18n-title="tool.sculpt.dimD" title="奥行（z）" /> ×
      <input type="number" id="mh" class="num" min="1" max="64" data-i18n-title="tool.sculpt.dimH" title="高さ（層）" />
      <button id="applySize" data-i18n="tool.sculpt.applySize">変える</button>
    </div>
    <h2 data-i18n="tool.sculpt.lintHead">検査（保存前の lint）</h2>
    <div id="lint"></div>
    <button class="big" id="save" data-i18n="tool.sculpt.save">🗿 提案として保存（future）</button>
    <div class="sub" id="savenote" data-i18n="tool.common.savenote">保存は truth を変えない。右の一覧に future が並び、⭐promote だけが truth を更新する。</div>
  </div>
  <div id="stagewrap">
    <div id="topbar">
      <div id="nowtool"><span id="nowswatch"></span><span><span data-i18n="tool.common.nowBrush">いまの筆：</span><b id="nowname">—</b><span class="sub" id="nowshape">（筆）</span></span></div>
      <div class="tgroup"><span class="cap" data-i18n="tool.common.shapeCap">かたち</span>
        <button id="shBrush" class="on" data-i18n-title="tool.sculpt.shBrushTitle" title="1 voxel ずつ彫る（ドラッグ可）"><span data-i18n="tool.common.shape.brush">筆</span> <span class="sub">B</span></button>
        <button id="shFill" data-i18n-title="tool.sculpt.shFillTitle" title="同じ色の続く範囲をまとめて塗る"><span data-i18n="tool.common.shape.fill">塗りつぶし</span> <span class="sub">F</span></button>
      </div>
      <div class="tgroup"><span class="cap" data-i18n="tool.sculpt.layerCap">層（下→上）</span>
        <button id="layDn" data-i18n-title="tool.sculpt.layDn" title="下の層へ（[）">▼</button>
        <span id="layerlbl">層 1/12</span>
        <button id="layUp" data-i18n-title="tool.sculpt.layUp" title="上の層へ（]）">▲</button>
      </div>
      <div class="tgroup">
        <label class="tog"><input type="checkbox" id="mirror" /> <span data-i18n="tool.sculpt.mirror">鏡映</span> <span class="sub">M</span></label>
        <label class="tog"><input type="checkbox" id="onion" checked /> <span data-i18n="tool.sculpt.onion">下の層を透かす</span> <span class="sub">O</span></label>
      </div>
      <div class="tgroup"><span class="cap" data-i18n="tool.common.undoCap">やり直し</span>
        <button id="undo" title="⌘Z / Ctrl+Z" data-i18n="tool.common.undo">↶ 戻す</button>
        <button id="redo" title="⌘⇧Z / Ctrl+Y" data-i18n="tool.common.redo">↷ 進む</button>
      </div>
      <div class="tgroup">
        <button id="newm" data-i18n="tool.common.new" data-i18n-title="tool.sculpt.newTitle" title="空のグリッドから">新規</button>
        <button id="help" data-i18n-title="tool.common.helpTitle" title="操作の説明をもう一度出す">？</button>
      </div>
      <span class="langpick worldpick">🗺<select id="worldmode" title="World / ワールド"></select></span>
      <span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span>
    </div>
    <div id="mchips">
      <button id="mLint" class="mchip ok" data-i18n-title="tool.sculpt.mLintTitle" title="保存できるか（タップで詳細）">✓</button>
      <span id="mInfo"></span>
      <button id="mUndo" title="undo">↶</button>
      <button id="mRedo" title="redo">↷</button>
      <button id="mFit" data-i18n-title="tool.sculpt.mFit" title="全体が見える距離に戻す">⛶</button>
      <button id="mVF" data-i18n="tool.sculpt.viewFront">正</button>
      <button id="mVS" data-i18n="tool.sculpt.viewSide">横</button>
      <button id="mVT" data-i18n="tool.sculpt.viewTop">上</button>
      <button id="mMirror" data-i18n-title="tool.sculpt.mirror" title="鏡映">🪞</button>
      <button id="mSave" data-i18n="tool.sculpt.mSaveShort" data-i18n-title="tool.sculpt.mLintTitle" title="保存できるか（タップで詳細）">🗿 保存</button>
      <button id="mMenu" data-i18n-title="tool.sculpt.mMenu" title="色と保存">☰</button>
      <button id="mShelf" data-i18n-title="tool.sculpt.mShelf" title="棚（future / truth）">📚</button>
    </div>
    <div id="mstage">
      <div id="lrail">
        <button id="lUp" data-i18n-title="tool.sculpt.layUp" title="上の層へ（]）">▲</button>
        <input id="lSlider" type="range" min="1" max="12" step="1" value="1" />
        <span id="lNum">1/12</span>
        <button id="lDn" data-i18n-title="tool.sculpt.layDn" title="下の層へ（[）">▼</button>
        <button id="lLock" data-i18n-title="tool.sculpt.layerLockTitle" title="層ロック＝全ストロークをこの層平面に固定（真上視点で 2D スライスと同じ）">🔒</button>
      </div>
      <div id="mlegend" data-i18n="tool.sculpt.mLegend">1本指=彫る・塗る｜2本指=回す・寄る｜2本指タップ=戻す・3本指=進む｜長押し=スポイト</div>
      <div id="mtoast"></div>
    </div>
    <div id="stage">
      <canvas id="slice"></canvas>
      <div id="guide" data-i18n-html="tool.sculpt.guide">
        <b>① 左のパレットで色を選ぶ</b>（いまの筆は左上に常時表示）<br />
        <b>② 方眼を左クリック/ドラッグ</b>＝彫る　<b>右クリック</b>＝消す<br />
        <b>③ ▼▲（または [ ]）で層を上下</b>＝下から積み上げる（右上に 3D が常時映る）<br />
        彫れたら左下の <b>🗿 保存</b> → 右の一覧で <b>⭐promote</b> → カタログ＆実機の姿が変わる
      </div>
      <div id="axes" data-i18n="tool.sculpt.axes">上＝奥（背中側）・下＝手前（顔側・facing=南 +z）・左右＝x</div>
    </div>
    <div id="foot">
      <span id="hoverhint">—</span>
      <span id="msg"></span>
      <span id="legend" data-i18n-html="tool.sculpt.legend"><b>左ドラッグ</b>=彫る｜<b>右クリック</b>=消す｜<b>[ ]</b>=層｜<b>M</b>=鏡映｜<b>⌘Z</b>=戻す｜<b>3D はドラッグで回す</b></span>
    </div>
    <div id="hotbar">
      <button id="tCarve" class="on" data-i18n="tool.sculpt.tool.carve">⛏ 彫る</button>
      <button id="tPaint" data-i18n="tool.sculpt.tool.paint">🖌 塗る</button>
      <button id="tErase" data-i18n="tool.sculpt.tool.erase">🧽 消す</button>
      <button id="tBox" data-i18n="tool.sculpt.tool.box">▭ 箱</button>
      <button id="tFill" data-i18n="tool.sculpt.tool.fill">🪣 塗りつぶし</button>
      <button id="hColor" data-i18n-title="tool.sculpt.mPalette" title="パレット（色を選ぶ）"><span class="sw" id="hColorSw"></span><span class="nm" id="hColorName"></span></button>
    </div>
  </div>
  <div id="loop">
    <div id="view3d">
      <div id="view3dbar">
        <button id="spin" data-i18n="tool.sculpt.spin" data-i18n-title="tool.sculpt.spinTitle" title="自動で回す">回</button>
        <button id="light" class="on" data-i18n-title="tool.sculpt.lightTitle" title="実機→明所→暗所（カタログと同じ物差し）">実機</button>
        <span class="sub" data-i18n="tool.sculpt.view3dNote">3D＝ゲームと同一実体（1 draw/体）</span>
      </div>
    </div>
    <div id="libwrap">
      <h2><span data-i18n="tool.common.futureHead">提案（future）</span><span class="live" id="live">·</span></h2>
      <div id="proposals"></div>
      <h2 data-i18n="tool.sculpt.truthHead">truth ライブラリ（data/models/）</h2>
      <div id="truth"></div>
      <h2 data-i18n="tool.sculpt.codeHead">コード定義（MON_VOX）から取り込む</h2>
      <div id="codelib"></div>
      <div class="sub" data-i18n="tool.sculpt.watchNote">ファイル変更は watch（150ms debounce＋内容署名 dedupe）で自動反映＝AI がファイルで future を書いてもここに現れる。編集中の盤は reload されない（状態保持）。GB 大型（ドラゴン等）はコードのまま（当面）。</div>
    </div>
  </div>
</div>
<!-- M1 モバイル：シート召喚（パネル DOM は JS がここへ移動＝同一実体・リスナ無傷） -->
<div id="veil"></div>
<div id="sheetSide" class="sheet">
  <div class="sheethead"><b data-i18n="tool.sculpt.mMenu">色と保存</b><button class="shclose">✕</button></div>
  <div class="sheetbody" id="sheetSideBody"></div>
</div>
<div id="sheetLoop" class="sheet">
  <div class="sheethead"><b data-i18n="tool.sculpt.mShelf">棚（future / truth）</b><button class="shclose">✕</button></div>
  <div class="sheetbody" id="sheetLoopBody"></div>
</div>
`;function J(){return new Date().toISOString().replace(/\.\d+Z$/,"Z")}const nt=s=>s.replace(/[&<>"]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[l]),B=new Map;{const s=l=>({kind:"monster",name:l.name,size:l.size});for(const l of Zn){const d=jn(s(l));B.has(d)||B.set(d,l.name)}for(const[l,d]of[["caster","術士"],["sentry","番兵"],["nest","魔物の巣"],["warden","番人"],["boss","封印のボス"]])B.has(l)||B.set(l,d)}function so(){try{return Rt("goblin",B.get("goblin")??"ゴブリン",Bt.goblin,Qt.goblin??[],J())}catch{return Le("goblin","ゴブリン",11,6,12,J())}}const Mo={id:"sculpt",async mount(s,l){const{wapi:d,postJson:f}=l.api;s.innerHTML=lo,Qn(s);const n=t=>s.querySelector(`#${t}`);let a=so(),p="a",g="brush",h=0,m=!1,k=!0,M="live",I=!1,L="carve",z=!1;const T=new Xn,ot="cdSculptP4";let F=.55,S=.35,V=2.2;function b(){try{sessionStorage.setItem(ot,JSON.stringify({v:1,model:a,brush:p,shape:g,layer:h,mirror:m,onion:k,lightMode:M,ttool:L,layerLock:z,cam:{yaw:F,pitch:S,dist:V}}))}catch{}}function $(){var t,e;try{const o=sessionStorage.getItem(ot);if(!o)return!1;const i=JSON.parse(o);return i.v!==1||!((e=(t=i.model)==null?void 0:t.vox)!=null&&e.layers)?!1:(a=i.model,p=i.brush??"a",g=i.shape??"brush",h=i.layer??0,m=!!i.mirror,k=i.onion!==!1,M=i.lightMode??"live",L=i.ttool??"carve",z=!!i.layerLock,i.cam&&(F=i.cam.yaw,S=i.cam.pitch,V=i.cam.dist),!0)}catch{return!1}}const at=n("view3d"),C=new Ke({antialias:!0});C.toneMapping=Tn,C.toneMappingExposure=1.22,C.setPixelRatio(Math.min(devicePixelRatio,2)),at.appendChild(C.domElement);const H=new qe,A=new Ze(42,1,.02,100),it=new Pn(16777215,2236962,.8),lt=new ye(16769725,1);lt.position.set(3,4.2,2.4);const xt=new ye(8229565,.3);xt.position.set(-2.6,1.4,-1.8);const vt=new Nn(16761470,0,14,2);H.add(vt),H.add(it,lt,xt);const un=new In(2,8,3753310,2305086);H.add(un);const Ct=new St(0,.5,0),Pe=new Qe(1,1,1);let bt=null;const hn=new Zt({color:6003711,transparent:!0,opacity:.14,depthWrite:!1,side:tn}),At=new Dt(new en(1,1),hn);At.rotation.x=-Math.PI/2,H.add(At);const fn=new Zt({color:16765286,transparent:!0,opacity:.1,depthWrite:!1,side:tn}),gt=new Dt(new en(1,1),fn);gt.rotation.y=Math.PI/2,gt.visible=!1,H.add(gt);const mn=new Zt({color:6003711,transparent:!0,opacity:.28,depthWrite:!1}),ut=new Dt(new Qe(1,1,1),mn);ut.visible=!1,H.add(ut);function ne(){const t=an.plain,e=Hn(t);H.background=new nn(t.bg),it.color.setHex(e.hemiSky),it.groundColor.setHex(e.hemiGround),lt.color.setHex(e.sunCol),xt.color.setHex(e.fillCol),vt.color.setHex(e.heroCol),M==="live"?(it.intensity=e.hemiI,lt.intensity=e.sunI,xt.intensity=e.fillI,vt.intensity=e.heroI,we(e.actFill,e.actFillI)):M==="bright"?(it.intensity=.85,lt.intensity=1.05,xt.intensity=.3,vt.intensity=0,we(e.actFill,.1)):(it.intensity=.09,lt.intensity=.1,xt.intensity=.05,vt.intensity=0,we(0,0));const o=n("light");o.textContent=u(`tool.common.light.${M}`),o.classList.toggle("on",M!=="dark")}function Ne(t){const{geo:e,spots:o}=Vn(Yn(t),Wn(t),!1,Un(t)),i=new On;i.add(new Dt(e,An()));for(const r of o){const c=new Dt(Pe,new Zt({color:r.c}));c.position.set(r.x,r.y,r.z),c.scale.set(r.sx,r.sy,r.sz),i.add(c)}return i}function Ie(t){var e,o,i,r;for(const c of t.children)c.geometry!==Pe&&((o=(e=c.geometry)==null?void 0:e.dispose)==null||o.call(e)),(r=(i=c.material)==null?void 0:i.dispose)==null||r.call(i)}function j(t=!1){bt&&(H.remove(bt),Ie(bt)),bt=Ne(a),H.add(bt),yt(),t&&$e()}function yt(){const{w:t,d:e,h:o}=P(a),i=a.vox.s;At.scale.set(t*i+.06,e*i+.06,1),At.position.set(0,(h+.5)*i,0),gt.scale.set(e*i+.06,o*i+.06,1),gt.position.set(0,o*i/2,0),gt.visible=m}function $e(){const t=new on().setFromObject(bt),e=t.getCenter(new St),o=t.getSize(new St);Ct.copy(e),V=Math.max(o.x,o.y,o.z)*1.5+.35,vt.position.set(e.x+.4,1.9,t.max.z+1.3)}function oe(){const t=at.clientWidth,e=at.clientHeight;C.setSize(t,e),A.aspect=t/e,A.updateProjectionMatrix()}let jt=!1,ae=0,ie=0;C.domElement.addEventListener("pointerdown",t=>{if(t.pointerType!=="touch"){jt=!0,ae=t.clientX,ie=t.clientY;try{C.domElement.setPointerCapture(t.pointerId)}catch{}}}),C.domElement.addEventListener("pointermove",t=>{t.pointerType==="touch"||!jt||(F+=(t.clientX-ae)*.008,S=Math.min(1.35,Math.max(-.2,S+(t.clientY-ie)*.006)),ae=t.clientX,ie=t.clientY)}),C.domElement.addEventListener("pointerup",t=>{t.pointerType!=="touch"&&(jt=!1,b())}),C.domElement.addEventListener("wheel",t=>{t.preventDefault(),V=Math.min(20,Math.max(.3,V*(t.deltaY>0?1.08:.93)))},{passive:!1}),n("spin").addEventListener("click",t=>{I=!I,t.currentTarget.classList.toggle("on",I)}),n("light").addEventListener("click",()=>{M=M==="live"?"bright":M==="bright"?"dark":"live",ne(),b()});const G=n("slice"),xn=G.getContext("2d"),Oe=n("stage");let y=28,Y=null;function E(){const{w:t,d:e,h:o}=P(a),i=Oe.clientWidth-48,r=Oe.clientHeight-48;y=Math.max(8,Math.min(46,Math.floor(Math.min(i/t,r/e))));const c=t*y+1,v=e*y+1,N=Math.min(devicePixelRatio,2);G.width=c*N,G.height=v*N,G.style.width=`${c}px`,G.style.height=`${v}px`;const x=xn;if(x.setTransform(N,0,0,N,0,0),x.clearRect(0,0,c,v),x.fillStyle="#0d1117",x.fillRect(0,0,c,v),k&&h>0){x.globalAlpha=.26;for(let w=0;w<e;w++)for(let R=0;R<t;R++){const et=pt(a,R,h-1,w);et&&(x.fillStyle=a.vox.pal[et]??"#888",x.fillRect(R*y+1,w*y+1,y-1,y-1))}x.globalAlpha=1}for(let w=0;w<e;w++)for(let R=0;R<t;R++){const et=pt(a,R,h,w);et&&(x.fillStyle=a.vox.pal[et]??"#f0f",x.fillRect(R*y+1,w*y+1,y-1,y-1),ce().has((a.vox.pal[et]??"").toLowerCase())&&(x.fillStyle="rgba(255,244,200,0.9)",x.font=`${Math.max(8,y*.45)}px sans-serif`,x.fillText("✦",R*y+y*.28,w*y+y*.72)))}x.strokeStyle="rgba(90,110,150,0.28)",x.lineWidth=1;for(let w=0;w<=t;w++)x.beginPath(),x.moveTo(w*y+.5,0),x.lineTo(w*y+.5,v),x.stroke();for(let w=0;w<=e;w++)x.beginPath(),x.moveTo(0,w*y+.5),x.lineTo(c,w*y+.5),x.stroke();if(m&&(x.strokeStyle="rgba(255,209,102,0.6)",x.setLineDash([5,4]),x.beginPath(),x.moveTo(t/2*y+.5,0),x.lineTo(t/2*y+.5,v),x.stroke(),x.setLineDash([])),Y&&(x.strokeStyle=p==="erase"?"#e06a5a":"#5b9bff",x.lineWidth=2,x.strokeRect(Y.x*y+1.5,Y.z*y+1.5,y-2,y-2),m)){const w=P(a).w-1-Y.x;w!==Y.x&&(x.globalAlpha=.5,x.strokeRect(w*y+1.5,Y.z*y+1.5,y-2,y-2),x.globalAlpha=1)}n("layerlbl").textContent=u("tool.sculpt.layerLbl",{n:h+1,h:o})}function Fe(t){const e=G.getBoundingClientRect(),o=Math.floor((t.clientX-e.left)/y),i=Math.floor((t.clientY-e.top)/y),{w:r,d:c}=P(a);return o>=0&&i>=0&&o<r&&i<c?{x:o,z:i}:null}const le=n("msg"),Gt=matchMedia("(max-width: 900px)");let se=0;function O(t,e=!1){le.textContent=t,le.style.color=e?"#ffd166":"#7fd17f",clearTimeout(se);const o=n("mtoast");Gt.matches&&(o.textContent=t,o.style.display="block",o.style.borderColor=e?"#ffd166":"#2b3547"),se=window.setTimeout(()=>{le.textContent="",o.style.display="none"},4500)}function Ut(t){n("guide").style.display=t?"block":"none",n("mlegend").style.display=t&&Gt.matches?"block":"none"}n("help").addEventListener("click",()=>Ut(!0));function K(t){t&&(E(),j(),Ut(!1))}function D(){T.commit(a)&&(Wt(),kt(),U(),b())}function q(t,e){a=t,Ee(a),h=Math.min(h,P(a).h-1),De(),Mt(),E(),j(!0),U(),D(),e&&O(e)}function De(){p!=="erase"&&!(p in a.vox.pal)&&(p=Object.keys(a.vox.pal)[0]??"erase")}function Wt(){n("undo").disabled=!T.canUndo(),n("redo").disabled=!T.canRedo(),n("mUndo").disabled=!T.canUndo(),n("mRedo").disabled=!T.canRedo()}function Tt(){const t=T.undo();t&&(a=t,h=Math.min(h,P(a).h-1),Mt(),E(),j(),U(),Wt(),kt(),b(),O(u("tool.common.undone")))}function wt(){const t=T.redo();t&&(a=t,h=Math.min(h,P(a).h-1),Mt(),E(),j(),U(),Wt(),kt(),b(),O(u("tool.common.redone")))}n("undo").addEventListener("click",Tt),n("redo").addEventListener("click",wt);let ht="none",st=null;function He(t,e,o){K(Vt(a,e,h,o,t||p==="erase"?null:p,m))}function re(t,e){if(st&&(st.x!==e.x||st.z!==e.z)){const{x:o,z:i}=st,r=Math.max(Math.abs(e.x-o),Math.abs(e.z-i));for(let c=1;c<=r;c++)He(t,Math.round(o+(e.x-o)*(c/r)),Math.round(i+(e.z-i)*(c/r)))}else He(t,e.x,e.z);st=e}G.addEventListener("pointerdown",t=>{try{G.setPointerCapture(t.pointerId)}catch{}const e=Fe(t);if(e){if(t.button===2){ht="erase",st=null,re(!0,e);return}if(t.button===0){if(g==="fill"){K(Me(a,h,e.x,e.z,p==="erase"?null:p,m)),D();return}ht="paint",st=null,re(p==="erase",e)}}}),G.addEventListener("pointermove",t=>{const e=Fe(t);Y=e,Pt(e),(ht==="paint"||ht==="erase")&&e?re(ht==="erase"||p==="erase",e):E()}),G.addEventListener("pointerup",()=>{ht!=="none"&&D(),ht="none",st=null}),G.addEventListener("pointerleave",()=>{Y=null,Pt(null),E()}),G.addEventListener("contextmenu",t=>t.preventDefault());function Pt(t){const e=n("hoverhint");if(!t){e.textContent=u("tool.sculpt.hoverIdle");return}const o=pt(a,t.x,h,t.z),i=o?`${a.vox.pal[o]}（'${o}'）`:u("tool.sculpt.empty"),r=p==="erase"?u("tool.sculpt.verb.erase"):g==="fill"?u("tool.sculpt.verb.fill",{name:a.vox.pal[p]??p}):u("tool.sculpt.verb.carve",{name:a.vox.pal[p]??p});e.textContent=u("tool.sculpt.hoverLine",{x:t.x,n:h+1,z:t.z,what:i,verb:r,mirror:m?u("tool.sculpt.mirrorSuffix"):""})}function ce(){return new Set(a.glow.map(t=>t.toLowerCase()))}function U(){const t=n("pal");t.innerHTML="";const e=Se(a),o=ce();for(const[c,v]of Object.entries(a.vox.pal)){const N=document.createElement("div");N.className="chip"+(p===c?" on":""),N.style.background=v,N.title=u("tool.sculpt.chipTitle",{hex:v,ch:c})+(o.has(v.toLowerCase())?u("tool.sculpt.glowMark"):""),N.innerHTML=`<span class="ch">${nt(c)}</span><span class="n">${e.get(c)??0}</span>${o.has(v.toLowerCase())?'<span class="glow">✦</span>':""}`,N.addEventListener("click",()=>Z(c)),t.appendChild(N)}const i=document.createElement("div");i.className="chip erase"+(p==="erase"?" on":""),i.title=u("tool.sculpt.eraserTitle"),i.textContent="🧽",i.addEventListener("click",()=>Z("erase")),t.appendChild(i);const r=document.createElement("div");r.className="chip erase",r.title=u("tool.sculpt.addColor"),r.textContent="＋",r.addEventListener("click",()=>{const c=rn(a,vn());if(!c){O(u("tool.sculpt.palExhausted"),!0);return}Z(c),D(),U(),O(u("tool.sculpt.colorAdded"))}),t.appendChild(r),bn(),rt()}function vn(){const t=Math.random()*360,e=.45+Math.random()*.3,o=.45+Math.random()*.2,i=r=>{const c=(r+t/30)%12,v=e*Math.min(o,1-o);return Math.round(255*(o-v*Math.max(-1,Math.min(c-3,9-c,1))))};return"#"+[i(0),i(8),i(4)].map(r=>r.toString(16).padStart(2,"0")).join("")}function bn(){const t=n("palopts");if(p==="erase"){t.innerHTML=`<span class="sub">${nt(u("tool.sculpt.palOptErase"))}</span>`;return}const e=a.vox.pal[p];if(!e){t.innerHTML="";return}t.innerHTML=`<span>${nt(u("tool.sculpt.selected"))} '<b>${nt(p)}</b>'</span>`;const o=document.createElement("input");o.type="color",o.value=e,o.addEventListener("input",()=>{cn(a,p,o.value)&&(E(),j())}),o.addEventListener("change",()=>{D(),U()});const i=document.createElement("label");i.className="tog";const r=document.createElement("input");r.type="checkbox",r.checked=ce().has(e.toLowerCase()),r.addEventListener("change",()=>{dn(a,a.vox.pal[p],r.checked),D(),U(),E(),j(),O(r.checked?u("tool.sculpt.glowOn"):u("tool.sculpt.glowOff"))}),i.append(r,document.createTextNode(" "+u("tool.sculpt.glowLabel")));const c=Se(a).get(p)??0,v=document.createElement("span");v.className="sub",v.textContent=u("tool.sculpt.usedVox",{n:c}),t.append(o,i,v)}function Z(t){p=t,U(),Pt(Y),E(),b()}function Nt(t){g=t,rt(),b()}function rt(){n("shBrush").classList.toggle("on",g==="brush"),n("shFill").classList.toggle("on",g==="fill");const t=n("nowswatch");p==="erase"?(t.style.background="repeating-linear-gradient(45deg,#232c3e,#232c3e 4px,#3a465e 4px,#3a465e 8px)",n("nowname").textContent=u("tool.sculpt.eraser")):(t.style.background=a.vox.pal[p]??"#f0f",n("nowname").textContent=`${a.vox.pal[p]??"?"}（'${p}'）`),n("nowshape").textContent=`（${u(`tool.common.shape.${g}`)}）`,n("mirror").checked=m,n("onion").checked=k,ct()}function ct(){for(const[v,N]of[["tCarve","carve"],["tPaint","paint"],["tErase","erase"],["tBox","box"],["tFill","fill"]])n(v).classList.toggle("on",L===N);const t=n("hColorSw"),e=Xt();t.style.background=e?a.vox.pal[e]??"#f0f":"#232c3e",n("hColorName").textContent=e?`'${e}'`:"—",n("mMirror").classList.toggle("on",m),n("lLock").classList.toggle("on",z);const{w:o,d:i,h:r}=P(a);n("mInfo").textContent=`${u("tool.sculpt.layerLbl",{n:h+1,h:r})}・${o}×${i}×${r}・${ke(a)}v`;const c=n("lSlider");c.max=String(r),c.value=String(h+1),n("lNum").textContent=`${h+1}/${r}`}n("shBrush").addEventListener("click",()=>Nt("brush")),n("shFill").addEventListener("click",()=>Nt("fill")),n("mirror").addEventListener("change",t=>{m=t.target.checked,yt(),ct(),E(),b()}),n("onion").addEventListener("change",t=>{k=t.target.checked,E(),b()});function dt(t){const{h:e}=P(a);h=Math.max(0,Math.min(e-1,t)),E(),yt(),Pt(Y),ct(),b()}n("layUp").addEventListener("click",()=>dt(h+1)),n("layDn").addEventListener("click",()=>dt(h-1));function Mt(){n("mid").value=a.id,n("mname").value=a.name,n("ms").value=String(a.vox.s);const{w:t,d:e,h:o}=P(a);n("mw").value=String(t),n("md").value=String(e),n("mh").value=String(o)}function Yt(){a.id=n("mid").value.trim()||a.id,a.name=n("mname").value.trim()||a.name,a.vox.s=Math.max(.02,Math.min(.3,Number(n("ms").value)||a.vox.s))}for(const t of["mid","mname"])n(t).addEventListener("change",()=>{Yt(),D(),kt()});n("ms").addEventListener("change",()=>{Yt(),E(),j(!0),D()}),n("applySize").addEventListener("click",()=>{const t=Math.max(1,Math.min(64,Number(n("mw").value)||1)),e=Math.max(1,Math.min(64,Number(n("md").value)||1)),o=Math.max(1,Math.min(64,Number(n("mh").value)||1)),{dropped:i}=sn(a,t,e,o);h=Math.min(h,o-1),Mt(),E(),j(!0),D(),O(i?u("tool.sculpt.resizedDrop",{w:t,d:e,h:o,n:i}):u("tool.sculpt.resized",{w:t,d:e,h:o}),i>0)}),n("newm").addEventListener("click",()=>{const{w:t,d:e,h:o}=P(a),i=Math.floor(Math.random()*900)+100;m=!0,q(Le(`model-${i}`,u("tool.sculpt.newName",{n:i}),t,e,o,J()),u("tool.sculpt.newSaid"))});function Be(){const t=n("typelist");t.innerHTML="";for(const[e,o]of B){const i=document.createElement("option");i.value=e,i.label=`${mt(o)}${Bt[e]?u("tool.sculpt.srcCode"):Rn[e]?u("tool.sculpt.srcLarge"):u("tool.sculpt.srcProc")}`,t.appendChild(i)}}function kt(){Yt();const t=n("lint"),e=[],o=Gn.safeParse({...a,updatedAt:J()});if(!o.success)for(const x of o.error.issues.slice(0,6))e.push({level:"err",msg:x.message});const i=ke(a);e.push({level:i>0?"ok":"err",msg:u("tool.sculpt.lintCount",{n:i,c:Object.keys(a.vox.pal).length,g:a.glow.length})}),B.has(a.id)?e.push({level:"ok",msg:u("tool.sculpt.lintMatch",{id:a.id,name:mt(B.get(a.id))})}):e.push({level:"warn",msg:u("tool.sculpt.lintNoMatch",{id:a.id})}),t.innerHTML=e.map(x=>`<div class="s-${x.level}">${x.level==="ok"?"✓":x.level==="warn"?"⚠":"✗"} ${nt(x.msg)}</div>`).join("");const r=n("save");r.disabled=!o.success,n("savenote").textContent=o.success?u("tool.common.savenote"):u("tool.sculpt.lintFix");const c=e.filter(x=>x.level==="err").length,v=e.filter(x=>x.level==="warn").length,N=n("mLint");N.textContent=c?`✗ ${c}`:v?`⚠ ${v}`:"✓",N.className="mchip "+(c?"err":v?"warn":"ok"),n("mSave").disabled=!o.success,ct()}const gn=t=>{var i;const e=(i=t.target)==null?void 0:i.tagName;if(e==="INPUT"||e==="SELECT"||e==="TEXTAREA")return;if((t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="z"){t.preventDefault(),t.shiftKey?wt():Tt();return}if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y"){t.preventDefault(),wt();return}const o=t.key.toLowerCase();if(o==="b")Nt("brush");else if(o==="f")Nt("fill");else if(o==="e")Z("erase");else if(o==="m")m=!m,yt(),rt(),E(),b();else if(o==="o")k=!k,rt(),E(),b();else if(t.key==="[")dt(h-1);else if(t.key==="]")dt(h+1);else if(o==="escape")Ut(!1);else if(/^[1-9]$/.test(t.key)){const c=Object.keys(a.vox.pal)[Number(t.key)-1];c&&Z(c)}};l.own(window,"keydown",gn);let Re=null;function Ve(){return Yt(),ft({...a,updatedAt:J()})}n("save").addEventListener("click",()=>{de()});async function de(){try{const t=Ve(),e=await f(d("/api/sculpt/proposal"),{model:t,label:t.name,createdBy:"user"});O(u("tool.common.savedFuture",{id:e.id.slice(0,8)}))}catch(t){O(u("tool.common.saveFail",{msg:t.message}),!0)}}async function Ae(t){try{const e=await f(d("/api/sculpt/promote"),{proposalId:t});O(u("tool.sculpt.promoted",{note:e.promotedNote??u("tool.common.adoptedNote")}))}catch(e){O(u("tool.common.promoteFail",{msg:e.message}),!0)}}async function je(t){try{await f(d("/api/sculpt/archive"),{proposalId:t}),O(u("tool.common.archived"))}catch(e){O(u("tool.common.archiveFail",{msg:e.message}),!0)}}const It=new Ke({antialias:!0,preserveDrawingBuffer:!0});It.setSize(96,96);const zt=new qe,pe=new Ze(40,1,.02,50);zt.add(new $n(16777215,.85));const Ge=new ye(16769725,1);Ge.position.set(3,6,4),zt.add(Ge);const ue=new Map;function yn(t){const e=`${t.id}:${t.updatedAt}`;if(ue.has(e))return ue.get(e);zt.background=new nn(an.plain.bg);const o=Ne(t);zt.add(o);const i=new on().setFromObject(o),r=i.getCenter(new St),c=i.getSize(new St),v=Math.max(c.x,c.y,c.z)*.62+.1;pe.position.set(r.x+v*1.35,r.y+v*1.15,r.z+v*1.85),pe.lookAt(r),It.render(zt,pe);const N=It.domElement.toDataURL();return zt.remove(o),Ie(o),ue.set(e,N),N}let he=!1;async function $t(){try{const[t,e]=await Promise.all([fetch(d("/api/sculpt/truth")).then(o=>o.json()),fetch(d("/api/sculpt/proposals")).then(o=>o.json())]);he=!0,wn(e.proposals??[]),Ue(t.models??[]),n("live").innerHTML="<b>· live</b>"}catch{he=!1,n("live").textContent=u("tool.common.devOff");const t=[];for(const e of Bn())try{t.push(Rt(e.id,e.name,e.vox,e.glow,J()))}catch{}Ue(t),n("proposals").innerHTML=`<div class="live">${nt(u("tool.sculpt.devOnlyLoop"))}</div>`}Mn()}function wn(t){Kn(n("proposals"),t,{selectedId:Re,onView:e=>{kn(e)},onPromote:e=>{Ae(e)},onArchive:e=>{je(e)}})}function Ue(t){qn(n("truth"),t.map(e=>{const{w:o,d:i,h:r}=P(e);let c=null;try{c=yn(e)}catch{}return{id:e.id,name:mt(e.name),meta:`${o}×${i}×${r}・s=${e.vox.s}・${B.has(e.id)?u("tool.sculpt.overriding",{name:mt(B.get(e.id))}):u("tool.sculpt.noMatch")}`,thumb:c,onOpen:()=>{q(ft(e),u("tool.common.openedTruth",{name:e.name}))},onDup:()=>{const v=ft({...e,id:`${e.id}-2`,name:u("tool.common.copyName",{name:e.name}),updatedAt:J()});q(v,u("tool.common.duplicated",{name:e.name}))},onCopyWorld:()=>{(async()=>{try{const v=await to("/api/sculpt","model",ft(e),l.worlds(),f);v&&O(u("tool.world.copied",{world:v}))}catch(v){O(u("tool.world.copyFail",{msg:v.message}),!0)}})()}}}),u("tool.sculpt.truthEmpty"))}function Mn(){const t=n("codelib");t.innerHTML="";for(const[o,i]of Object.entries(Bt)){const r=document.createElement("div");r.className="card",r.innerHTML=`<div><b>${nt(mt(B.get(o)??o))}</b> <span class="live">MON_VOX['${nt(o)}']</span></div>`;const c=document.createElement("div");c.className="row";const v=document.createElement("button");v.textContent=u("tool.sculpt.importEdit"),v.addEventListener("click",()=>{q(Rt(o,B.get(o)??o,i,Qt[o]??[],J()),u("tool.sculpt.imported",{name:mt(B.get(o)??o)}))}),c.appendChild(v),r.appendChild(c),t.appendChild(r)}const e=document.createElement("div");e.className="card",e.innerHTML=`<div class="live">${nt(u("tool.sculpt.otherNote"))}</div>`,t.appendChild(e)}async function kn(t){const e=await fetch(d(`/api/sculpt/proposal?id=${encodeURIComponent(t)}`)).then(i=>i.json());Re=t;const o=(e.models??[])[e.models.length-1];o&&q(ft(o),u("tool.common.viewingFuture",{id:t.slice(0,8)})),$t()}const zn=l.events.on("sculpt",()=>{$t()});function Ln(){const t=Math.round(F/(Math.PI/4))*(Math.PI/4);Math.abs(F-t)<5*Math.PI/180&&(F=t)}const fe=new Fn;function Ot(t,e){const o=C.domElement.getBoundingClientRect();fe.setFromCamera(new Dn((t-o.left)/o.width*2-1,-((e-o.top)/o.height*2-1)),A);const i=fe.ray.origin,r=fe.ray.direction;return{origin:{x:i.x,y:i.y,z:i.z},dir:{x:r.x,y:r.y,z:r.z}}}const me=(t,e,o)=>pt(a,t,e,o)!=null;function Xt(){return L==="erase"?null:p!=="erase"&&p in a.vox.pal?p:Object.keys(a.vox.pal)[0]??null}let tt="none",Lt=null,xe=!1,Q=null,X=null,_t=new Set,Jt=null,_=null,W=null;const Et=t=>`${t.x},${t.y},${t.z}`;function ve(){tt="none",Lt=null,xe=!1,Q=null,X=null,Jt=null,_=W=null,_t=new Set,ut.visible=!1}function We(){if(!_||!W){ut.visible=!1;return}const t=P(a),e=a.vox.s,o={x:Math.min(_.x,W.x),y:Math.min(_.y,W.y),z:Math.min(_.z,W.z)},i={x:Math.max(_.x,W.x),y:Math.max(_.y,W.y),z:Math.max(_.z,W.z)},r=ze(o,t,e),c=ze(i,t,e);ut.visible=!0,ut.scale.set((i.x-o.x+1)*e+.004,(i.y-o.y+1)*e+.004,(i.z-o.z+1)*e+.004),ut.position.set((r.x+c.x)/2,(r.y+c.y)/2,(r.z+c.z)/2)}function Kt(t,e){let o=!1;for(const i of t)o=Vt(a,i.x,i.y,i.z,e,m)||o,_t.add(Et(i));return o}_n(C.domElement,{strokeStart(t,e){ve();const o=Xt();if(L!=="erase"&&o==null)return;const{origin:i,dir:r}=Ot(t,e),c=oo(i,r,L,P(a),a.vox.s,me,h,z);if(c){if(c.plane&&(c.plane.k<0||c.plane.k>=te(P(a),c.plane.axis))){O(u("tool.sculpt.atEdge"),!0);return}if(Jt=JSON.stringify(a),Lt=c.plane,xe=c.surface,Q=c.cell,X={x:t,y:e},L==="fill"){tt="fill",_t.add(Et(c.cell)),K(Me(a,c.cell.y,c.cell.x,c.cell.z,o,m));return}if(L==="box"){tt="box",_=W=c.cell,We();return}tt="stroke",K(Kt([c.cell],o))}},strokeMove(t,e){const o=P(a),i=a.vox.s;if(tt==="box"){if(!Lt)return;const x=Ot(t,e),w=ee(x.origin,x.dir,Lt,o,i);w&&(W=w,We());return}if(tt!=="stroke")return;const r=Xt();if(xe){if(!X)return;const x=Math.max(1,Math.ceil(Math.hypot(t-X.x,e-X.y)/8));let w=!1;for(let R=1;R<=x;R++){const et=Ot(X.x+(t-X.x)*(R/x),X.y+(e-X.y)*(R/x)),qt=Te(et.origin,et.dir,o,i,me);qt&&(!Q||Et(qt.cell)!==Et(Q))&&(w=Kt([qt.cell],r)||w,Q=qt.cell)}X={x:t,y:e},K(w);return}if(!Lt)return;const c=Ot(t,e),v=ee(c.origin,c.dir,Lt,o,i);if(!v||Q&&Et(v)===Et(Q))return;const N=Kt(Q?ao(Q,v):[v],r);Q=v,X={x:t,y:e},K(N)},strokeEnd(){tt==="box"&&_&&W&&K(Kt(io(_,W),Xt())),tt!=="none"&&(D(),Ht()),ve()},strokeCancel(){tt!=="none"&&Jt&&(a=JSON.parse(Jt),E(),j()),ve()},orbit(t,e){F+=t*.008,S=Math.min(1.35,Math.max(-.2,S+e*.006))},orbitEnd(){Ln(),b()},pinch(t){V=Math.min(20,Math.max(.3,V/t))},undoTap(){Tt(),Ht()},redoTap(){wt(),Ht()},longPress(t,e){const o=Ot(t,e),i=Te(o.origin,o.dir,P(a),a.vox.s,me),r=i?pt(a,i.cell.x,i.cell.y,i.cell.z):null;r&&(L==="erase"&&(L="carve"),Z(r),O(u("tool.sculpt.picked",{hex:a.vox.pal[r]??"?",ch:r})),Ht())},strokeSize:()=>_t.size});const Ft=Jn(["sheetSide","sheetLoop"]);function Ye(){Gt.matches?(n("sheetSideBody").append(n("topbar"),n("side")),n("sheetLoopBody").append(n("libwrap")),n("mstage").appendChild(n("view3d"))):(Ft.closeAll(),n("app").insertBefore(n("side"),n("stagewrap")),n("stagewrap").insertBefore(n("topbar"),n("mchips")),n("loop").append(n("view3d"),n("libwrap"))),oe(),E()}n("mMenu").addEventListener("click",()=>Ft.open("sheetSide")),n("mShelf").addEventListener("click",()=>Ft.open("sheetLoop")),n("mLint").addEventListener("click",()=>Ft.open("sheetSide")),n("hColor").addEventListener("click",()=>Ft.open("sheetSide")),n("mUndo").addEventListener("click",Tt),n("mRedo").addEventListener("click",wt),n("mSave").addEventListener("click",()=>{Ht(),de()}),n("mFit").addEventListener("click",()=>{$e(),b()}),n("mVF").addEventListener("click",()=>{F=0,S=.15,b()}),n("mVS").addEventListener("click",()=>{F=Math.PI/2,S=.15,b()}),n("mVT").addEventListener("click",()=>{F=Math.round(F/(Math.PI/2))*(Math.PI/2),S=1.35,b()}),n("mMirror").addEventListener("click",()=>{m=!m,yt(),rt(),E(),b()});for(const[t,e]of[["tCarve","carve"],["tPaint","paint"],["tErase","erase"],["tBox","box"],["tFill","fill"]])n(t).addEventListener("click",()=>{L=e,ct(),b()});n("lUp").addEventListener("click",()=>dt(h+1)),n("lDn").addEventListener("click",()=>dt(h-1)),n("lSlider").addEventListener("input",t=>dt(Number(t.target.value)-1)),n("lLock").addEventListener("click",()=>{z=!z,ct(),b()}),l.own(Gt,"change",Ye);function be(){I&&!jt&&(F+=.006),A.position.set(Ct.x+V*Math.sin(F)*Math.cos(S),Ct.y+V*Math.sin(S),Ct.z+V*Math.cos(F)*Math.cos(S)),A.lookAt(Ct),C.render(H,A)}let Xe=0,_e=!1;function Je(){_e||(Xe=requestAnimationFrame(Je),be())}const En=()=>{oe(),E()};l.own(window,"resize",En),window.cdSculpt={paint:(t,e,o)=>(o&&Z(o),K(Vt(a,t,h,e,p==="erase"?null:p,m)),D(),pt(a,t,h,e)),erase:(t,e)=>(K(Vt(a,t,h,e,null,m)),D(),pt(a,t,h,e)),fill:(t,e,o)=>{o&&Z(o),K(Me(a,h,t,e,p==="erase"?null:p,m)),D()},tool:t=>Z(t),shapeMode:t=>Nt(t),setLayer:dt,layerNow:()=>h,mirrorOn:t=>{m=t,yt(),rt(),E(),b()},addColor:t=>{const e=rn(a,t);return e&&(Z(e),D(),U()),e},recolor:(t,e)=>{const o=cn(a,t,e);return o&&(E(),j(),D(),U()),o},glowHex:(t,e)=>{const o=dn(a,t,e);return o&&(D(),U(),j()),o},resize:(t,e,o)=>{const i=sn(a,t,e,o);return h=Math.min(h,o-1),Mt(),E(),j(!0),D(),i},newModel:(t,e,o,i,r)=>q(Le(t,e,o,i,r,J())),importCode:t=>{const e=Bt[t];return e?(q(Rt(t,B.get(t)??t,e,Qt[t]??[],J())),!0):!1},openTruthJson:t=>q(ft(t)),model:()=>Ve(),draft:()=>a,dims:()=>P(a),count:()=>ke(a),undo:Tt,redo:wt,save:()=>de(),promote:t=>Ae(t),archive:t=>je(t),refresh:()=>$t(),state:()=>({brush:p,shape:g,layer:h,mirror:m,onion:k,lightMode:M,devLive:he,ttool:L,layerLock:z,canUndo:T.canUndo(),canRedo:T.canRedo(),guide:n("guide").style.display!=="none"}),view:(t,e,o)=>{F=t,S=e,o!=null&&(V=o)},step:()=>be(),draws:()=>C.info.render.calls,screenOf:(t,e)=>{const o=G.getBoundingClientRect();return{cx:o.left+(t+.5)*y,cy:o.top+(e+.5)*y}},mtool:t=>{L=t,ct()},lockLayer:t=>{z=t,ct()},vox:(t,e,o)=>pt(a,t,e,o),screenOfVox:(t,e,o)=>{be();const i=ze({x:t,y:e,z:o},P(a),a.vox.s),r=new St(i.x,i.y,i.z).project(A),c=C.domElement.getBoundingClientRect();return{cx:c.left+(r.x+1)/2*c.width,cy:c.top+(1-r.y)/2*c.height}}};async function Sn(t){try{const i=((await fetch(d("/api/sculpt/truth")).then(r=>r.json())).models??[]).find(r=>r.id===t);if(i){q(ft(i),u("tool.common.openedTruth",{name:i.name}));return}}catch{}const e=Bt[t];e?q(Rt(t,B.get(t)??t,e,Qt[t]??[],J()),u("tool.sculpt.imported",{name:mt(B.get(t)??t)})):O(u("tool.studio.deepMiss",{id:t}),!0)}const Cn=eo(()=>{U(),rt(),kt(),E(),Be(),ne(),Pt(Y),$t()}),ge=$();return Ee(a),De(),T.reset(a),Be(),Mt(),U(),rt(),Wt(),kt(),ne(),Ye(),oe(),E(),j(!ge),Ut(!ge),ge&&O(u("tool.common.restored")),$t(),Je(),{applyParams(t){const e=t.get("type");e&&Sn(e)},dispose(){_e=!0,cancelAnimationFrame(Xe),clearTimeout(se),zn(),Cn(),b();try{C.dispose(),C.forceContextLoss(),C.domElement.remove()}catch{}try{It.dispose(),It.forceContextLoss()}catch{}delete window.cdSculpt}}}};export{Mo as sculptPanel};
