function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./use-boolean.stories-CNvVBJMi.js","./jsx-runtime-DRTy3Uxn.js","./index-BBkUAzwr.js","./index-BgWAaTDi.js","./colors-DwKSCBJm.js","./extends-CCbyfPlC.js","./index-DUqwVN8i.js","./objectWithoutPropertiesLoose-1QL-frMM.js","./isNativeReflectConstruct-DeZAPHXq.js","./index-vsdhdNy5.js","./index-DSpEmV5-.js","./index-B_J8iUie.js","./index-DboEQVPH.js","./index-DrFu-skq.js","./Table-9zVUbs5g.js","./useZIndex-C8tNrk2Z.js","./handleTypeView-iA29ZH8a.js","./use-console.stories-D6GUk2a7.js","./index-DGzyQsZc.js","./index-GJ5Qc8d6.css","./use-console-D0ZX569y.css","./use-cookie.stories-CSerQgOY.js","./use-copy-to-clipboard.stories-wT7lVKot.js","./use-creation.stories-CSeiMGzg.js","./use-default.stories-CHIKGSSk.js","./use-effect-once.stories-BPogECMv.js","./use-event-listener.stories-kg368gkU.js","./useEventListener-CntZ1hJb.js","./isBrowser-CU3-RGUT.js","./use-favicon.stories-BmwGg-4j.js","./use-hover.stories-DG90L7wJ.js","./use-immer-reducer.stories-IKiM6E45.js","./useImmer-DX3XG-w-.js","./use-immer.stories-nvERU1HW.js","./use-key.stories-D-r74uLe.js","./use-latest.stories-C7sovRAY.js","./useLatest-BidcEhGI.js","./use-list.stories-ku81AQHz.js","./use-local-storage.stories-DAQtwFGl.js","./useStorage-CFvomn8k.js","./use-press.stories-CB4Bigp8.js","./use-previous.stories-ByJNZwxY.js","./use-raf-state.stories-QtwQwjoD.js","./useUnmount-rmZ4e9QM.js","./use-request.stories-4JQI8zob.js","./use-scroll.stories-iiUc0Uy4.js","./use-session-storage.stories-UCb7qcy2.js","./use-set-state.stories-Bxc_9-_y.js","./use-set.stories-CBqFDLpp.js","./use-sync-state.stories-Ceb2f54m.js","./use-title.stories-C-7wbspF.js","./use-toggle.stories-j-15-Bn4.js","./use-unmount.stories-7JxH-9Dh.js","./use-update-effect-once.stories-k44uec25.js","./use-update-effect.stories-DbIOfZNL.js","./use-update.stories-Sjcz9asz.js","./darwish-type-BmuA1bPH.js","./index-z5U8iC57.js","./math-type-CP1L0XxQ.js","./head-Du43j8zg.js","./only-when-CeQmVEOs.js","./clone-deep-CId4RynM.js","./clone-deep.stories-D_lEfJnM.js","./deep-equal-B_zxu9I_.js","./deep-equal.stories-CoPG8D2t.js","./dlv-CLZaAGVN.js","./dlv.stories-YpQiJEx5.js","./is-CqCaSfuh.js","./is.stories-B0lEiggB.js","./to-number-BXD-Syw0.js","./to-number.stories-BGBuIJGe.js","./type-of-data-BIXFFWmH.js","./type-of-data.stories-BR5MWZ7a.js","./entry-preview-BLf_LNq2.js","./react-16-D4-xGubx.js","./entry-preview-docs-iRXZaQKw.js","./preview-DzbRFJg_.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function m(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=m(e);fetch(e.href,s)}})();const R="modulepreload",v=function(r,u){return new URL(r,u).href},d={},t=function(u,m,n){let e=Promise.resolve();if(m&&m.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(m.map(i=>{if(i=v(i,n),i in d)return;d[i]=!0;const c=i.endsWith(".css"),O=c?'[rel="stylesheet"]':"";if(!!n)for(let a=s.length-1;a>=0;a--){const l=s[a];if(l.href===i&&(!c||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${O}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":R,c||(_.as="script",_.crossOrigin=""),_.href=i,E&&_.setAttribute("nonce",E),document.head.appendChild(_),c)return new Promise((a,l)=>{_.addEventListener("load",a),_.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>u()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},{createBrowserChannel:y}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=y({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const T={"./src/stories/hooks/use-boolean.stories.tsx":async()=>t(()=>import("./use-boolean.stories-CNvVBJMi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-console.stories.tsx":async()=>t(()=>import("./use-console.stories-D6GUk2a7.js"),__vite__mapDeps([17,1,2,18,5,7,19,6,3,4,8,20]),import.meta.url),"./src/stories/hooks/use-cookie.stories.tsx":async()=>t(()=>import("./use-cookie.stories-CSerQgOY.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-copy-to-clipboard.stories.tsx":async()=>t(()=>import("./use-copy-to-clipboard.stories-wT7lVKot.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-creation.stories.tsx":async()=>t(()=>import("./use-creation.stories-CSeiMGzg.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-default.stories.tsx":async()=>t(()=>import("./use-default.stories-CHIKGSSk.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-effect-once.stories.tsx":async()=>t(()=>import("./use-effect-once.stories-BPogECMv.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),"./src/stories/hooks/use-event-listener.stories.tsx":async()=>t(()=>import("./use-event-listener.stories-kg368gkU.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,27,28,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-favicon.stories.tsx":async()=>t(()=>import("./use-favicon.stories-BmwGg-4j.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-hover.stories.tsx":async()=>t(()=>import("./use-hover.stories-DG90L7wJ.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-immer-reducer.stories.tsx":async()=>t(()=>import("./use-immer-reducer.stories-IKiM6E45.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,32,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-immer.stories.tsx":async()=>t(()=>import("./use-immer.stories-nvERU1HW.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,32,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-key.stories.tsx":async()=>t(()=>import("./use-key.stories-D-r74uLe.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-latest.stories.tsx":async()=>t(()=>import("./use-latest.stories-C7sovRAY.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,36,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-list.stories.tsx":async()=>t(()=>import("./use-list.stories-ku81AQHz.js"),__vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-local-storage.stories.tsx":async()=>t(()=>import("./use-local-storage.stories-DAQtwFGl.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8,39,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-press.stories.tsx":async()=>t(()=>import("./use-press.stories-CB4Bigp8.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-previous.stories.tsx":async()=>t(()=>import("./use-previous.stories-ByJNZwxY.js"),__vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-raf-state.stories.tsx":async()=>t(()=>import("./use-raf-state.stories-QtwQwjoD.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,43,36,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-request.stories.tsx":async()=>t(()=>import("./use-request.stories-4JQI8zob.js"),__vite__mapDeps([44,1,2,3,4,5,6,7,8,18,19,10,11,12,13,15]),import.meta.url),"./src/stories/hooks/use-scroll.stories.tsx":async()=>t(()=>import("./use-scroll.stories-iiUc0Uy4.js"),__vite__mapDeps([45,1,2,3,4,5,6,7,8,27,28,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-session-storage.stories.tsx":async()=>t(()=>import("./use-session-storage.stories-UCb7qcy2.js"),__vite__mapDeps([46,1,2,3,4,5,6,7,8,39,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-set-state.stories.tsx":async()=>t(()=>import("./use-set-state.stories-Bxc_9-_y.js"),__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-set.stories.tsx":async()=>t(()=>import("./use-set.stories-CBqFDLpp.js"),__vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-sync-state.stories.tsx":async()=>t(()=>import("./use-sync-state.stories-Ceb2f54m.js"),__vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-title.stories.tsx":async()=>t(()=>import("./use-title.stories-C-7wbspF.js"),__vite__mapDeps([50,1,2,3,4,5,6,7,8,28,43,36,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-toggle.stories.tsx":async()=>t(()=>import("./use-toggle.stories-j-15-Bn4.js"),__vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),"./src/stories/hooks/use-unmount.stories.tsx":async()=>t(()=>import("./use-unmount.stories-7JxH-9Dh.js"),__vite__mapDeps([52,1,2,9,10,6,5,11,8,12,13,4,7,3,14,15,43,36]),import.meta.url),"./src/stories/hooks/use-update-effect-once.stories.tsx":async()=>t(()=>import("./use-update-effect-once.stories-k44uec25.js"),__vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),"./src/stories/hooks/use-update-effect.stories.tsx":async()=>t(()=>import("./use-update-effect.stories-DbIOfZNL.js"),__vite__mapDeps([54,1,2,9,10,6,5,11,8,12,13,4,7,3,14,15]),import.meta.url),"./src/stories/hooks/use-update.stories.tsx":async()=>t(()=>import("./use-update.stories-Sjcz9asz.js"),__vite__mapDeps([55,1,2,9,10,6,5,11,8,12,13,4,7,3,14,15]),import.meta.url),"./src/stories/types/darwish-type.mdx":async()=>t(()=>import("./darwish-type-BmuA1bPH.js"),__vite__mapDeps([56,1,2,57]),import.meta.url),"./src/stories/types/math-type.mdx":async()=>t(()=>import("./math-type-CP1L0XxQ.js"),__vite__mapDeps([58,1,2,57]),import.meta.url),"./src/stories/ui/head.mdx":async()=>t(()=>import("./head-Du43j8zg.js"),__vite__mapDeps([59,1,2,57]),import.meta.url),"./src/stories/ui/only-when.mdx":async()=>t(()=>import("./only-when-CeQmVEOs.js"),__vite__mapDeps([60,1,2,57,14,4,5,6,7,8,15]),import.meta.url),"./src/stories/utils/clone-deep/clone-deep.mdx":async()=>t(()=>import("./clone-deep-CId4RynM.js"),__vite__mapDeps([61,1,2,57,10,6,5,11,8,12,13,62,18,7,19]),import.meta.url),"./src/stories/utils/clone-deep/clone-deep.stories.tsx":async()=>t(()=>import("./clone-deep.stories-D_lEfJnM.js").then(r=>r.C),__vite__mapDeps([62,1,2,18,5,7,19]),import.meta.url),"./src/stories/utils/deep-equal/deep-equal.mdx":async()=>t(()=>import("./deep-equal-B_zxu9I_.js"),__vite__mapDeps([63,1,2,57,10,6,5,11,8,12,13,64,18,7,19]),import.meta.url),"./src/stories/utils/deep-equal/deep-equal.stories.tsx":async()=>t(()=>import("./deep-equal.stories-CoPG8D2t.js").then(r=>r.D),__vite__mapDeps([64,1,2,18,5,7,19]),import.meta.url),"./src/stories/utils/dlv/dlv.mdx":async()=>t(()=>import("./dlv-CLZaAGVN.js"),__vite__mapDeps([65,1,2,57,10,6,5,11,8,12,13,66,18,7,19]),import.meta.url),"./src/stories/utils/dlv/dlv.stories.tsx":async()=>t(()=>import("./dlv.stories-YpQiJEx5.js").then(r=>r.D),__vite__mapDeps([66,1,2,18,5,7,19]),import.meta.url),"./src/stories/utils/is/is.mdx":async()=>t(()=>import("./is-CqCaSfuh.js"),__vite__mapDeps([67,1,2,57,10,6,5,11,8,12,13,68]),import.meta.url),"./src/stories/utils/is/is.stories.tsx":async()=>t(()=>import("./is.stories-B0lEiggB.js").then(r=>r.I),__vite__mapDeps([68,1,2]),import.meta.url),"./src/stories/utils/to-number/to-number.mdx":async()=>t(()=>import("./to-number-BXD-Syw0.js"),__vite__mapDeps([69,1,2,57,10,6,5,11,8,12,13,70,18,7,19]),import.meta.url),"./src/stories/utils/to-number/to-number.stories.tsx":async()=>t(()=>import("./to-number.stories-BGBuIJGe.js").then(r=>r.T),__vite__mapDeps([70,1,2,18,5,7,19]),import.meta.url),"./src/stories/utils/type-of-data/type-of-data.mdx":async()=>t(()=>import("./type-of-data-BIXFFWmH.js"),__vite__mapDeps([71,1,2,57,10,6,5,11,8,12,13,72,18,7,19]),import.meta.url),"./src/stories/utils/type-of-data/type-of-data.stories.tsx":async()=>t(()=>import("./type-of-data.stories-BR5MWZ7a.js").then(r=>r.T),__vite__mapDeps([72,1,2,18,5,7,19]),import.meta.url)};async function L(r){return T[r]()}const{composeConfigs:A,PreviewWeb:h,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const r=await Promise.all([t(()=>import("./entry-preview-BLf_LNq2.js"),__vite__mapDeps([73,2,74,6]),import.meta.url),t(()=>import("./entry-preview-docs-iRXZaQKw.js"),__vite__mapDeps([75,12,2,13]),import.meta.url),t(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([76,11]),import.meta.url),t(()=>import("./preview-DRPX3UDR.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([77,13]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([78,13]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-D2d-74FL.js"),__vite__mapDeps([]),import.meta.url)]);return A(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(L,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};