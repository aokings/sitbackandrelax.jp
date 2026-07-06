import{o as I}from"./studio-LKqZyj2F.js";import{b as L,t as r}from"./i18n-BrZYbm5r.js";import{s as u,o as h,a as S,l as j,n as c}from"./schemas-BBGxizon.js";import"./creator-auth-e8JqamKp.js";import"./preload-helper-Dp1pzeXC.js";const A="1",z=u().regex(/^[a-z0-9][a-z0-9-]*(?:--[a-z0-9][a-z0-9-]*)?$/,"pack 名が不正"),M=h({prefabs:c().int().nonnegative(),models:c().int().nonnegative(),monsters:c().int().nonnegative(),items:c().int().nonnegative(),abilities:c().int().nonnegative()}),T=h({pack:z,title:u().min(1),author:u().min(1),publishedAt:u(),counts:M.optional()}),H=h({formatVersion:j(A),worlds:S(T)});function R(t){return H.parse(t)}function C(t){return`dungeon.html?pack=${encodeURIComponent(`packs/${z.parse(t)}.json`)}`}function _(t){let l=0;for(let o=0;o<t.length;o++)l=(l*31+t.charCodeAt(o))%360;return l}const O=`
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
</div>`,D={id:"gallery",async mount(t,l){t.innerHTML=O,L(t);const o=e=>t.querySelector(e);let i=[],d=null;async function N(){try{const e=await fetch("packs/index.json",{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);i=R(await e.json()).worlds,d=null}catch(e){i=[],d=r("tool.studio.gallery.noIndex",{msg:e.message})}}const $=[["prefabs","tool.studio.k.prefabs"],["monsters","tool.studio.k.monsters"],["items","tool.studio.k.items"],["abilities","tool.studio.k.abilities"],["models","tool.studio.k.models"]];function v(){o("#galsay").textContent=d??"";const e=o("#galgrid");if(e.innerHTML="",!i.length){if(!d){const a=document.createElement("div");a.className="galempty",a.textContent=r("tool.studio.gallery.none"),e.appendChild(a)}return}for(const a of i){const f=document.createElement("div");f.className="gcard";const k=_(a.pack),p=document.createElement("div");p.className="banner",p.style.background=`linear-gradient(135deg, hsl(${k} 42% 26%), hsl(${(k+40)%360} 46% 18%))`,p.textContent="🏰";const s=document.createElement("div");s.className="gbody";const w=document.createElement("b");w.textContent=a.title;const x=document.createElement("div");x.className="meta",x.textContent=`${r("tool.studio.gallery.by",{author:a.author})} · ${r("tool.studio.gallery.pubAt",{date:a.publishedAt.slice(0,10)})}`;const b=document.createElement("div");if(b.className="pk",b.textContent=`packs/${a.pack}.json`,s.append(w,x,b),a.counts){const g=document.createElement("div");g.className="chips";for(const[E,G]of $){if(!a.counts[E])continue;const y=document.createElement("span");y.className="chip",y.textContent=`${r(G)} ${a.counts[E]}`,g.appendChild(y)}g.childElementCount&&s.appendChild(g)}const n=document.createElement("a");n.className="play",n.href=C(a.pack),n.target="_blank",n.rel="noopener",n.textContent=r("tool.studio.gallery.play"),s.appendChild(n),f.append(p,s),e.appendChild(f)}}async function m(){await N(),v()}o("#galmake").addEventListener("click",()=>l.navigate("worlds")),o("#galreload").addEventListener("click",()=>{m()});const P=I(()=>{v()});return m(),window.cdGallery={entries:()=>i.map(e=>({...e})),error:()=>d,playHref:e=>C(e),reload:()=>m()},{applyParams(){},dispose(){P(),delete window.cdGallery}}}};export{D as galleryPanel,_ as hueOfPack};
