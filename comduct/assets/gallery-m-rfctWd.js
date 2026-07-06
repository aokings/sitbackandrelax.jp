import{o as A}from"./studio-CzlVzAfP.js";import{h as m,o as v,f as G,l as I,n as p,c as j,a as z,t as n,m as T}from"./world-ui-C6E9eyQU.js";import"./creator-auth-C2cecs39.js";import"./tables-taZ1PZre.js";const M="1",$=m().regex(/^[a-z0-9][a-z0-9-]*(?:--[a-z0-9][a-z0-9-]*)?$/,"pack 名が不正"),R=v({prefabs:p().int().nonnegative(),models:p().int().nonnegative(),monsters:p().int().nonnegative(),items:p().int().nonnegative(),abilities:p().int().nonnegative()}),_=v({pack:$,title:m().min(1),author:m().min(1),publishedAt:m(),counts:R.optional()}),O=v({formatVersion:I(M),worlds:G(_)});function U(a){return O.parse(a)}function N(a){return`dungeon.html?pack=${encodeURIComponent(`packs/${$.parse(a)}.json`)}`}function q(a){let r=0;for(let o=0;o<a.length;o++)r=(r*31+a.charCodeAt(o))%360;return r}const K=`
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
</div>`,X={id:"gallery",async mount(a,r){a.innerHTML=K,j(a);const o=e=>a.querySelector(e);let i=[],d=null;async function H(){try{const e=await fetch("packs/index.json",{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);i=U(await e.json()).worlds,d=null}catch(e){i=[],d=n("tool.studio.gallery.noIndex",{msg:e.message})}}const L=[["prefabs","tool.studio.k.prefabs"],["monsters","tool.studio.k.monsters"],["items","tool.studio.k.items"],["abilities","tool.studio.k.abilities"],["models","tool.studio.k.models"]];function k(){o("#galsay").textContent=d??"";const e=o("#galgrid");if(e.innerHTML="",!i.length){if(!d){const t=document.createElement("div");t.className="galempty",t.textContent=n("tool.studio.gallery.none"),e.appendChild(t)}return}for(const t of i){const x=document.createElement("div");x.className="gcard";const w=q(t.pack),g=document.createElement("div");g.className="banner",g.style.background=`linear-gradient(135deg, hsl(${w} 42% 26%), hsl(${(w+40)%360} 46% 18%))`,g.textContent="🏰";const c=document.createElement("div");c.className="gbody";const E=document.createElement("b");E.textContent=t.title;const b=document.createElement("div");b.className="meta",b.textContent=`${n("tool.studio.gallery.by",{author:t.author})} · ${n("tool.studio.gallery.pubAt",{date:t.publishedAt.slice(0,10)})}`;const y=document.createElement("div");if(y.className="pk",y.textContent=`packs/${t.pack}.json`,c.append(E,b,y),t.counts){const u=document.createElement("div");u.className="chips";for(const[C,S]of L){if(!t.counts[C])continue;const h=document.createElement("span");h.className="chip",h.textContent=`${n(S)} ${t.counts[C]}`,u.appendChild(h)}u.childElementCount&&c.appendChild(u)}const l=document.createElement("a");l.className="play",l.href=N(t.pack),l.target="_blank",l.rel="noopener",l.textContent=n("tool.studio.gallery.play"),c.appendChild(l),x.append(g,c),e.appendChild(x)}}async function f(){await H(),k()}const s=o("#galmake");z()!==""?(s.setAttribute("data-i18n","tool.studio.gallery.makeHosted"),s.textContent=n("tool.studio.gallery.makeHosted"),s.title=n("tool.studio.gallery.makeHostedTitle"),s.addEventListener("click",()=>{window.location.href=T(z(),"worlds")})):s.addEventListener("click",()=>r.navigate("worlds")),o("#galreload").addEventListener("click",()=>{f()});const P=A(()=>{k()});return f(),window.cdGallery={entries:()=>i.map(e=>({...e})),error:()=>d,playHref:e=>N(e),reload:()=>f()},{applyParams(){},dispose(){P(),delete window.cdGallery}}}};export{X as galleryPanel,q as hueOfPack};
