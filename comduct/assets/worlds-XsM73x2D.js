import{p as T,w as P,f as S}from"./creator-auth-C9Tw5ccD.js";import{o as $}from"./shell-D-WKfnWk.js";import{b as H,t as n}from"./i18n-CUpE17Zf.js";import{P as A}from"./registry-BFQ11tWJ.js";import"./preload-helper-Dp1pzeXC.js";const D=`<!-- ============================================================
     §studio W3 — ワールド管理パネルの markup（部分 HTML・?raw import で host へ注入）。
     旧 worlds.html body の単一実体（二重持ちゼロ）：スタジオも旧 worlds.html（stub）も
     この1枚を mount する。中身はマルチテナント E の従来 markup そのまま。
     改変は2点だけ：(1) 要素セレクタ（header/main/body）を #wapp 配下にスコープ
     （パネル注入の <style> は document 全域に効く＝シェル chrome へ漏らさない柵）
     (2) 高さ＝#wapp が 100% スクロール container（host の中で生きる）。
     ============================================================ -->
<style>
  /* マルチテナント E — ダッシュボード（アカウント→ワールド一覧→開く/複製/公開）。
     見た目はツール群（forge/sculpt/smith）と同じ暗色の流儀・依存なしの素朴 CSS。 */
  #wapp { box-sizing: border-box; height: 100%; overflow-y: auto; background: #12151c; color: #dfe6f2; font: 14px/1.6 -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif; }
  #wapp *, #wapp *::before, #wapp *::after { box-sizing: border-box; }
  #wapp header { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; padding: 14px 18px 6px; }
  #wapp header h1 { font-size: 18px; margin: 0; }
  #wapp header .sub { color: #8b96ab; font-size: 12px; }
  #wapp .langpick { color: #8b96ab; margin-left: auto; }
  #wapp .langpick select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 2px 6px; }
  #wapp main { padding: 8px 18px 40px; max-width: 980px; }
  #wapp h2 { font-size: 14px; color: #aeb9cf; border-bottom: 1px solid #262e40; padding-bottom: 4px; margin: 22px 0 10px; }
  #wapp .acct { color: #8b96ab; font-size: 12px; }
  #wapp .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
  #wapp .card { background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 12px; }
  #wapp .card b { font-size: 15px; }
  #wapp .key { color: #8b96ab; font-size: 11px; font-family: ui-monospace, monospace; }
  #wapp .tagrow { margin: 6px 0; display: flex; gap: 6px; flex-wrap: wrap; }
  #wapp .tag { font-size: 11px; border-radius: 999px; padding: 1px 8px; border: 1px solid #333c52; color: #aeb9cf; }
  #wapp .tag.pub { border-color: #3e7a4f; color: #8fd6a3; }
  #wapp .row { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  #wapp button, #wapp .btn { background: #232b3d; color: #dfe6f2; border: 1px solid #333c52; border-radius: 8px; padding: 5px 10px; font-size: 12px; cursor: pointer; text-decoration: none; display: inline-block; }
  #wapp button.on, #wapp .btn.on { background: #2e4a7a; border-color: #47639c; }
  #wapp button:hover, #wapp .btn:hover { filter: brightness(1.15); }
  #wapp form.create { display: flex; gap: 8px; flex-wrap: wrap; align-items: end; background: #181d29; border: 1px solid #262e40; border-radius: 10px; padding: 12px; }
  #wapp form.create label { display: flex; flex-direction: column; gap: 3px; font-size: 11px; color: #8b96ab; }
  #wapp form.create input, #wapp form.create select { background: #1b2030; color: #eef2ff; border: 1px solid #333c52; border-radius: 6px; padding: 5px 8px; min-width: 150px; }
  #wapp #say { margin: 10px 0; min-height: 1.4em; color: #8fd6a3; }
  #wapp #say.err { color: #e08a8a; }
  #wapp .live { color: #8b96ab; font-size: 12px; }
  @media (max-width: 480px) { #wapp main { padding: 8px 12px 40px; } }
</style>
<div id="wapp">
  <header>
    <h1 data-i18n="worlds.title">ワールド管理</h1>
    <span class="sub" data-i18n="worlds.sub">アカウント → ワールド一覧 → 開く/複製/公開（1ワールド=1公開ゲーム=1URL）</span>
    <span class="langpick">🌐<select id="langmode" title="Language / 言語"></select></span>
  </header>
  <main>
    <div class="acct"><span data-i18n="worlds.account">アカウント</span>: <b id="acct">—</b></div>
    <div id="say"></div>
    <h2 data-i18n="worlds.title">ワールド管理</h2>
    <div id="worlds" class="grid"><div class="live">…</div></div>
    <h2 data-i18n="worlds.createHead">新しいワールド</h2>
    <form class="create" id="createForm">
      <label><span data-i18n="worlds.fldId">id（kebab-case）</span><input id="fldId" pattern="[a-z0-9][a-z0-9-]*" required placeholder="my-dungeon" /></label>
      <label><span data-i18n="worlds.fldTitle">タイトル</span><input id="fldTitle" placeholder="わたしの迷宮" /></label>
      <label><span data-i18n="worlds.fldFrom">雛形</span><select id="fldFrom"></select></label>
      <button type="submit" class="on" id="createDo" data-i18n="worlds.createDo">作成</button>
    </form>
  </main>
</div>
`,J={id:"worlds",async mount(g,w){g.innerHTML=D,H(g);const r=a=>g.querySelector(`#${a}`);function i(a,t=!1){const d=r("say");d.textContent=a,d.className=t?"err":""}let h="masaru",l=[];function L(a,t){if(t===w.world()){w.navigate(a);return}const d=w.standalone?new URL("studio.html",window.location.href):new URL(window.location.href);d.search="",d.searchParams.set("panel",a),d.searchParams.set("world",t),window.location.href=d.toString()}function y(){const a=r("worlds");if(a.innerHTML="",!l.length){const e=document.createElement("div");e.className="live",e.textContent=n("worlds.none"),a.appendChild(e);return}for(const e of l){const p=document.createElement("div");p.className="card";const N=document.createElement("div"),z=document.createElement("b");z.textContent=e.title,N.appendChild(z);const v=document.createElement("div");v.className="key",v.textContent=e.key;const b=document.createElement("div");b.className="tagrow";const k=document.createElement("span");k.className="tag"+(e.publishedAt?" pub":""),k.textContent=e.publishedAt?n("worlds.statusPublished"):n("worlds.statusDraft"),b.appendChild(k);const F=e.forkedFrom;if(F){const o=document.createElement("span");o.className="tag",o.textContent=n("worlds.forkedFrom",{world:F}),b.appendChild(o)}p.append(N,v,b);const C=document.createElement("div");C.className="row";for(const o of A){if(o.id==="worlds")continue;const u=document.createElement("button");u.type="button",u.className="btn",u.textContent=`${o.icon} ${n(o.titleKey)}`,u.addEventListener("click",()=>L(o.id,e.key)),C.appendChild(u)}p.appendChild(C);const E=document.createElement("div");E.className="row";const c=document.createElement("button");c.type="button",c.className="on",c.textContent=n("worlds.publish"),c.addEventListener("click",()=>{(async()=>{try{const o=await T("/api/worlds/publish",{world:e.key});i(n("worlds.published",{path:o.packPath})),await f()}catch(o){i(n("worlds.publishFail",{msg:o.message}),!0)}})()});const x=document.createElement("button");x.type="button",x.textContent=n("tool.common.dup"),x.addEventListener("click",()=>{r("fldFrom").value=e.key,r("fldId").focus();const o=r("wapp");o.scrollTo({top:o.scrollHeight,behavior:"smooth"})});const m=document.createElement("a");m.className="btn",m.textContent=n("worlds.play"),m.href=`dungeon.html?pack=${encodeURIComponent(`packs/${e.packName}.json`)}`,m.target="_blank",E.append(c,x,m),p.appendChild(E),a.appendChild(p)}const t=r("fldFrom"),d=t.value;t.innerHTML="";const s=document.createElement("option");s.value="",s.textContent=n("worlds.fromEmpty"),t.appendChild(s);for(const e of l){const p=document.createElement("option");p.value=e.key,p.textContent=`${e.title}（${e.key}）`,t.appendChild(p)}[...t.options].some(e=>e.value===d)&&(t.value=d)}async function f(){const a=await S();if(!a){i(n("worlds.loadFail",{msg:"API unreachable"}),!0),l=[],y();return}h=a.accountId,l=a.worlds,r("acct").textContent=h,y()}r("createForm").addEventListener("submit",a=>{a.preventDefault();const t=r("fldId").value.trim(),d=r("fldTitle").value.trim()||t,s=r("fldFrom").value||void 0;(async()=>{try{const e=await T("/api/worlds",{id:t,title:d,...s?{from:s}:{}});i(n("worlds.created",{key:e.key})),r("fldId").value="",r("fldTitle").value="",await f()}catch(e){i(n("worlds.createFail",{msg:e.message}),!0)}})()}),window.cdWorlds={reload:()=>f(),worlds:()=>l,account:()=>h,api:a=>P(a),open:(a,t)=>L(a,t??w.world())};const I=$(()=>{y()});return f(),{applyParams(){},dispose(){I(),delete window.cdWorlds}}}};export{J as worldsPanel};
