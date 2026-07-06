import{o as I}from"./studio-DfptEijb.js";import{h as d,o as w,f as L,l as j,n as u,c as T,a as $,t as l,m as M}from"./world-ui-DzxH_Z-b.js";import"./creator-auth-C2cecs39.js";import"./tables-BILzhIA_.js";const R="1",P=d().regex(/^[a-z0-9][a-z0-9-]*(?:--[a-z0-9][a-z0-9-]*)?$/,"pack 名が不正"),_=w({prefabs:u().int().nonnegative(),models:u().int().nonnegative(),monsters:u().int().nonnegative(),items:u().int().nonnegative(),abilities:u().int().nonnegative()}),O=w({pack:P,title:d().min(1),author:d().min(1),publishedAt:d(),counts:_.optional(),description:d().optional(),tags:L(d()).optional()}),U=w({formatVersion:j(R),worlds:L(O)});function q(o){return U.parse(o)}function H(o){return`dungeon.html?pack=${encodeURIComponent(`packs/${P.parse(o)}.json`)}`}function K(o){let s=0;for(let n=0;n<o.length;n++)s=(s*31+o.charCodeAt(n))%360;return s}const V=`
<style>
  #gal { height: 100%; display: flex; flex-direction: column; background: var(--bg, #12161f); color: var(--text, #e8edf5); font: 13px/1.55 ui-rounded, "Hiragino Maru Gothic ProN", system-ui, sans-serif; }
  #galhead { padding: 8px 14px; border-bottom: 1px solid var(--line, #2b3547); display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; }
  #galhead b { color: #cfe3ff; font-size: 14px; }
  #galhead .note { color: var(--muted, #8b96a8); font-size: 11px; }
  #galhead .hbtn { background: transparent; border: 1px solid var(--line, #2b3547); color: #8fb7ff; border-radius: 6px; padding: 2px 9px; font: inherit; font-size: 11px; cursor: pointer; }
  #galhead .hbtn:hover { border-color: var(--accent, #5b9bff); }
  #galhead .spacer { margin-left: auto; }
  #galbody { flex: 1; overflow-y: auto; padding: 14px; }
  #galsay { color: #e08a8a; font-size: 12px; padding: 4px 0; white-space: pre-wrap; }
  #galsay:empty { display: none; }
  #galgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
  .gcard { border: 1px solid var(--line, #2b3547); background: var(--panel, #1a2130); border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; }
  .gcard .banner { height: 52px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
  .gcard .gbody { padding: 9px 11px 11px; display: flex; flex-direction: column; gap: 5px; flex: 1; }
  .gcard b { color: #eef4ff; font-size: 14px; overflow-wrap: anywhere; }
  .gcard .meta { color: var(--muted, #8b96a8); font-size: 11px; }
  .gcard .pk { font-family: ui-monospace, Menlo, monospace; font-size: 10px; color: var(--muted, #8b96a8); overflow-wrap: anywhere; }
  .gcard .desc { color: #c3ccdb; font-size: 12px; line-height: 1.45; overflow-wrap: anywhere; }
  .gcard .chips { display: flex; flex-wrap: wrap; gap: 4px; }
  .gcard .chip { font-size: 10px; color: #b9c4d6; background: rgba(255, 255, 255, 0.06); border: 1px solid var(--line, #2b3547); border-radius: 999px; padding: 1px 7px; white-space: nowrap; }
  .gcard .play { margin-top: auto; display: block; text-align: center; background: var(--tint, #223048); border: 1px solid var(--accent, #5b9bff); color: var(--text, #e8edf5); border-radius: 8px; padding: 7px 10px; font-size: 13px; font-weight: 700; text-decoration: none; }
  .gcard .play:hover { background: #2a3c5c; }
  .galempty { color: var(--muted, #8b96a8); font-size: 12px; }
</style>
<div id="gal">
  <div id="galhead">
    <b data-i18n="tool.studio.gallery.head">🖼 みんなの世界（公開ギャラリー）</b>
    <span class="note" data-i18n="tool.studio.gallery.note">公開済み world の台帳（packs/index.json）を読むだけ＝read-only・遊ぶは1クリック</span>
    <span class="spacer"></span>
    <button class="hbtn" id="galmake" type="button" data-i18n="tool.studio.gallery.make">🛠 自分の世界を作る</button>
    <button class="hbtn" id="galreload" type="button" data-i18n="tool.studio.gallery.reload">↻ 更新</button>
  </div>
  <div id="galbody">
    <div id="galsay"></div>
    <div id="galgrid"></div>
  </div>
</div>`,B={id:"gallery",async mount(o,s){o.innerHTML=V,T(o);const n=t=>o.querySelector(t);let c=[],p=null;async function S(){try{const t=await fetch("packs/index.json",{cache:"no-cache"});if(!t.ok)throw new Error(`HTTP ${t.status}`);c=q(await t.json()).worlds,p=null}catch(t){c=[],p=l("tool.studio.gallery.noIndex",{msg:t.message})}}const A=[["prefabs","tool.studio.k.prefabs"],["monsters","tool.studio.k.monsters"],["items","tool.studio.k.items"],["abilities","tool.studio.k.abilities"],["models","tool.studio.k.models"]];function C(){var E;n("#galsay").textContent=p??"";const t=n("#galgrid");if(t.innerHTML="",!c.length){if(!p){const e=document.createElement("div");e.className="galempty",e.textContent=l("tool.studio.gallery.none"),t.appendChild(e)}return}for(const e of c){const y=document.createElement("div");y.className="gcard";const N=K(e.pack),f=document.createElement("div");f.className="banner",f.style.background=`linear-gradient(135deg, hsl(${N} 42% 26%), hsl(${(N+40)%360} 46% 18%))`,f.textContent="🏰";const r=document.createElement("div");r.className="gbody";const z=document.createElement("b");z.textContent=e.title;const h=document.createElement("div");h.className="meta",h.textContent=`${l("tool.studio.gallery.by",{author:e.author})} · ${l("tool.studio.gallery.pubAt",{date:e.publishedAt.slice(0,10)})}`;const v=document.createElement("div");if(v.className="pk",v.textContent=`packs/${e.pack}.json`,r.append(z,h,v),e.description){const a=document.createElement("div");a.className="desc",a.textContent=e.description,r.appendChild(a)}if((E=e.tags)!=null&&E.length){const a=document.createElement("div");a.className="chips";for(const x of e.tags){const m=document.createElement("span");m.className="chip",m.textContent=`#${x}`,a.appendChild(m)}r.appendChild(a)}if(e.counts){const a=document.createElement("div");a.className="chips";for(const[x,m]of A){if(!e.counts[x])continue;const k=document.createElement("span");k.className="chip",k.textContent=`${l(m)} ${e.counts[x]}`,a.appendChild(k)}a.childElementCount&&r.appendChild(a)}const i=document.createElement("a");i.className="play",i.href=H(e.pack),i.target="_blank",i.rel="noopener",i.textContent=l("tool.studio.gallery.play"),r.appendChild(i),y.append(f,r),t.appendChild(y)}}async function b(){await S(),C()}const g=n("#galmake");$()!==""?(g.setAttribute("data-i18n","tool.studio.gallery.makeHosted"),g.textContent=l("tool.studio.gallery.makeHosted"),g.title=l("tool.studio.gallery.makeHostedTitle"),g.addEventListener("click",()=>{window.location.href=M($(),"worlds")})):g.addEventListener("click",()=>s.navigate("worlds")),n("#galreload").addEventListener("click",()=>{b()});const G=I(()=>{C()});return b(),window.cdGallery={entries:()=>c.map(t=>({...t})),error:()=>p,playHref:t=>H(t),reload:()=>b()},{applyParams(){},dispose(){G(),delete window.cdGallery}}}};export{B as galleryPanel,K as hueOfPack};
