import{j as b}from"./jsx-runtime-DRTy3Uxn.js";import{T as ct,i as dt,C as Te}from"./index-D1GfW9Tl.js";import{r as i,g as ut}from"./index-BBkUAzwr.js";import{i as Me,m as pt,r as ft,s as V,j as me,d as X,A as ye,y as gt,z as mt,B as Ne,D as oe,h as yt}from"./colors-DwKSCBJm.js";import{T as fe}from"./index-BgWAaTDi.js";import{_ as be}from"./extends-CCbyfPlC.js";import{o as _e,a as bt,b as he,C as ht,t as ze,u as vt,c as He,d as xt,i as Ie,R as Et,T as St}from"./Table-9zVUbs5g.js";import{K as ie}from"./useZIndex-C8tNrk2Z.js";const Ct=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:o,textPaddingInline:c,orientationMargin:f,verticalMarginInline:a}=e;return{[t]:Object.assign(Object.assign({},ft(e)),{borderBlockStart:`${V(o)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${V(o)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${V(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${V(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${V(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${f} * 100%)`},"&::after":{width:`calc(100% - ${f} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${f} * 100%)`},"&::after":{width:`calc(${f} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:c},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${V(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:r}}})}},Ot=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),wt=Me("Divider",e=>{const t=pt(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[Ct(t)]},Ot,{unitless:{orientationMargin:!0}});var $t=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const jt=e=>{const{getPrefixCls:t,direction:r,divider:n}=i.useContext(me),{prefixCls:o,type:c="horizontal",orientation:f="center",orientationMargin:a,className:u,rootClassName:m,children:s,dashed:d,plain:v,style:E}=e,S=$t(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),y=t("divider",o),[T,C,I]=wt(y),x=f.length>0?`-${f}`:f,k=!!s,R=f==="left"&&a!=null,O=f==="right"&&a!=null,D=X(y,n==null?void 0:n.className,C,I,`${y}-${c}`,{[`${y}-with-text`]:k,[`${y}-with-text${x}`]:k,[`${y}-dashed`]:!!d,[`${y}-plain`]:!!v,[`${y}-rtl`]:r==="rtl",[`${y}-no-default-orientation-margin-left`]:R,[`${y}-no-default-orientation-margin-right`]:O},u,m),h=i.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),g=Object.assign(Object.assign({},R&&{marginLeft:h}),O&&{marginRight:h});return T(i.createElement("div",Object.assign({className:D,style:Object.assign(Object.assign({},n==null?void 0:n.style),E)},S,{role:"separator"}),s&&c!=="vertical"&&i.createElement("span",{className:`${y}-inner-text`,style:g},s)))},Tt=jt;var It=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Rt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Pt=i.forwardRef((e,t)=>{const r=m=>{const{keyCode:s}=m;s===ie.ENTER&&m.preventDefault()},n=m=>{const{keyCode:s}=m,{onClick:d}=e;s===ie.ENTER&&d&&d()},{style:o,noStyle:c,disabled:f}=e,a=It(e,["style","noStyle","disabled"]);let u={};return c||(u=Object.assign({},Rt)),f&&(u.pointerEvents="none"),u=Object.assign(Object.assign({},u),o),i.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},a,{onKeyDown:r,onKeyUp:n,style:u}))}),Le=Pt;var kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Dt=kt;var Mt=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:Dt}))},Nt=i.forwardRef(Mt);const _t=Nt;var zt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},Ht=zt,Re={"text/plain":"Text","text/html":"Url",default:"Text"},Lt="Copy to clipboard: #{key}, Enter";function At(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Bt(e,t){var r,n,o,c,f,a,u=!1;t||(t={}),r=t.debug||!1;try{o=Ht(),c=document.createRange(),f=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=Re[t.format]||Re.default;window.clipboardData.setData(d,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(a),c.selectNodeContents(a),f.addRange(c);var m=document.execCommand("copy");if(!m)throw new Error("copy command was unsuccessful");u=!0}catch(s){r&&console.error("unable to copy using execCommand: ",s),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),n=At("message"in t?t.message:Lt),window.prompt(n,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(c):f.removeAllRanges()),a&&document.body.removeChild(a),o()}return u}var Wt=Bt;const Ut=ut(Wt);var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const qt=Vt;var Kt=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:qt}))},Ft=i.forwardRef(Kt);const Xt=Ft,Gt=(e,t,r,n)=>{const{titleMarginBottom:o,fontWeightStrong:c}=n;return{marginBottom:o,color:r,fontWeight:c,fontSize:e,lineHeight:t}},Jt=e=>{const t=[1,2,3,4,5],r={};return t.forEach(n=>{r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Gt(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),r},Qt=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},_e(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Yt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:gt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Zt=e=>{const{componentCls:t,paddingSM:r}=e,n=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${V(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},en=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),tn=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),nn=e=>{const{componentCls:t,titleMarginTop:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Jt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:r},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:r}}}),Yt(e)),Qt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},_e(e)),{marginInlineStart:e.marginXXS})}),Zt(e)),en(e)),tn()),{"&-rtl":{direction:"rtl"}})}},rn=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Ae=Me("Typography",e=>[nn(e)],rn),on=e=>{const{prefixCls:t,"aria-label":r,className:n,style:o,direction:c,maxLength:f,autoSize:a=!0,value:u,onSave:m,onCancel:s,onEnd:d,component:v,enterIcon:E=i.createElement(Xt,null)}=e,S=i.useRef(null),y=i.useRef(!1),T=i.useRef(),[C,I]=i.useState(u);i.useEffect(()=>{I(u)},[u]),i.useEffect(()=>{if(S.current&&S.current.resizableTextArea){const{textArea:P}=S.current.resizableTextArea;P.focus();const{length:j}=P.value;P.setSelectionRange(j,j)}},[]);const x=P=>{let{target:j}=P;I(j.value.replace(/[\n\r]/g,""))},k=()=>{y.current=!0},R=()=>{y.current=!1},O=P=>{let{keyCode:j}=P;y.current||(T.current=j)},D=()=>{m(C.trim())},h=P=>{let{keyCode:j,ctrlKey:U,altKey:A,metaKey:J,shiftKey:Q}=P;T.current===j&&!y.current&&!U&&!A&&!J&&!Q&&(j===ie.ENTER?(D(),d==null||d()):j===ie.ESC&&s())},g=()=>{D()},$=v?`${t}-${v}`:"",[L,M,N]=Ae(t),q=X(t,`${t}-edit-content`,{[`${t}-rtl`]:c==="rtl"},n,$,M,N);return L(i.createElement("div",{className:q,style:o},i.createElement(bt,{ref:S,maxLength:f,value:C,onChange:x,onKeyDown:O,onKeyUp:h,onCompositionStart:k,onCompositionEnd:R,onBlur:g,"aria-label":r,rows:1,autoSize:a}),E!==null?mt(E,{className:`${t}-edit-content-confirm`}):null))},ln=on;function ae(e,t){return i.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},t),r&&typeof e=="object"?e:null)]},[e])}const sn=(e,t)=>{const r=i.useRef(!1);i.useEffect(()=>{r.current?e():r.current=!0},t)};var an=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const cn=i.forwardRef((e,t)=>{const{prefixCls:r,component:n="article",className:o,rootClassName:c,setContentRef:f,children:a,direction:u,style:m}=e,s=an(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:d,direction:v,typography:E}=i.useContext(me),S=u??v;let y=t;f&&(y=Ne(t,f));const T=d("typography",r),[C,I,x]=Ae(T),k=X(T,E==null?void 0:E.className,{[`${T}-rtl`]:S==="rtl"},o,c,I,x),R=Object.assign(Object.assign({},E==null?void 0:E.style),m);return C(i.createElement(n,Object.assign({className:k,style:R,ref:y},s),a))}),Be=cn;var dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const un=dn;var pn=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:un}))},fn=i.forwardRef(pn);const gn=fn;function Pe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function te(e,t,r){return e===!0||e===void 0?t:e||r&&t}function mn(e){const{prefixCls:t,copied:r,locale:n={},onCopy:o,iconOnly:c,tooltips:f,icon:a}=e,u=Pe(f),m=Pe(a),{copied:s,copy:d}=n,v=r?te(u[1],s):te(u[0],d),S=typeof v=="string"?v:r?s:d;return i.createElement(he,{key:"copy",title:v},i.createElement(Le,{className:X(`${t}-copy`,{[`${t}-copy-success`]:r,[`${t}-copy-icon-only`]:c}),onClick:o,"aria-label":S},r?te(m[1],i.createElement(ht,null),!0):te(m[0],i.createElement(gn,null),!0)))}const ne=i.forwardRef((e,t)=>{let{style:r,children:n}=e;const o=i.useRef(null);return i.useImperativeHandle(t,()=>({isExceed:()=>{const c=o.current;return c.scrollHeight>c.clientHeight},getHeight:()=>o.current.clientHeight})),i.createElement("span",{"aria-hidden":!0,ref:o,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},r)},n)});function We(e){const t=typeof e;return t==="string"||t==="number"}function yn(e){let t=0;return e.forEach(r=>{We(r)?t+=String(r).length:t+=1}),t}function ke(e,t){let r=0;const n=[];for(let o=0;o<e.length;o+=1){if(r===t)return n;const c=e[o],a=We(c)?String(c).length:1,u=r+a;if(u>t){const m=t-r;return n.push(String(c).slice(0,m)),n}n.push(c),r=u}return e}const ce=0,de=1,ue=2,De=3,re={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function bn(e){const{enableMeasure:t,width:r,text:n,children:o,rows:c,miscDeps:f,onEllipsis:a}=e,u=i.useMemo(()=>ze(n),[n]),m=i.useMemo(()=>yn(u),[n]),s=i.useMemo(()=>o(u,!1,!1),[n]),[d,v]=i.useState(null),E=i.useRef(null),S=i.useRef(null),y=i.useRef(null),T=i.useRef(null),[C,I]=i.useState(ce),[x,k]=i.useState(0);oe(()=>{I(t&&r&&m?de:ce)},[r,n,c,t,u]),oe(()=>{var h,g,$,L;if(C===de){const M=!!(!((h=S.current)===null||h===void 0)&&h.isExceed());I(M?ue:De),v(M?[0,m]:null);const N=((g=S.current)===null||g===void 0?void 0:g.getHeight())||0,q=c===1?0:(($=y.current)===null||$===void 0?void 0:$.getHeight())||0,P=((L=T.current)===null||L===void 0?void 0:L.getHeight())||0,j=q+P,U=Math.max(N,j);k(U+1),a(M)}},[C]);const R=d?Math.ceil((d[0]+d[1])/2):0;oe(()=>{var h;const[g,$]=d||[0,0];if(g!==$){const M=(((h=E.current)===null||h===void 0?void 0:h.getHeight())||0)>x;let N=R;$-g===1&&(N=M?g:$),v(M?[g,N]:[N,$])}},[d,R]);const O=i.useMemo(()=>{if(C!==ue||!d||d[0]!==d[1]){const h=o(u,!1,!1);return C!==De&&C!==ce?i.createElement("span",{style:Object.assign(Object.assign({},re),{WebkitLineClamp:c})},h):h}return o(ke(u,d[0]),!0,!0)},[C,d,u].concat(yt(f))),D={width:r,whiteSpace:"normal",margin:0,padding:0};return i.createElement(i.Fragment,null,O,C===de&&i.createElement(i.Fragment,null,i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:c}),ref:S},s),i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:c-1}),ref:y},s),i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:1}),ref:T},o([],!0,!0))),C===ue&&d&&d[0]!==d[1]&&i.createElement(ne,{style:Object.assign(Object.assign({},D),{top:400}),ref:E},o(ke(u,R),!0,!0)))}const hn=e=>{let{enableEllipsis:t,isEllipsis:r,children:n,tooltipProps:o}=e;return!(o!=null&&o.title)||!t?n:i.createElement(he,Object.assign({open:r?void 0:!1},o),n)},vn=hn;var xn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function En(e,t){let{mark:r,code:n,underline:o,delete:c,strong:f,keyboard:a,italic:u}=e,m=t;function s(d,v){v&&(m=i.createElement(d,{},m))}return s("strong",f),s("u",o),s("del",c),s("code",n),s("mark",r),s("kbd",a),s("i",u),m}const Sn="...",Cn=i.forwardRef((e,t)=>{var r,n,o;const{prefixCls:c,className:f,style:a,type:u,disabled:m,children:s,ellipsis:d,editable:v,copyable:E,component:S,title:y}=e,T=xn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:C,direction:I}=i.useContext(me),[x]=vt("Text"),k=i.useRef(null),R=i.useRef(null),O=C("typography",c),D=He(T,["mark","code","delete","underline","strong","keyboard","italic"]),[h,g]=ae(v),[$,L]=xt(!1,{value:g.editing}),{triggerType:M=["icon"]}=g,N=l=>{var p;l&&((p=g.onStart)===null||p===void 0||p.call(g)),L(l)};sn(()=>{var l;$||(l=R.current)===null||l===void 0||l.focus()},[$]);const q=l=>{l==null||l.preventDefault(),N(!0)},P=l=>{var p;(p=g.onChange)===null||p===void 0||p.call(g,l),N(!1)},j=()=>{var l;(l=g.onCancel)===null||l===void 0||l.call(g),N(!1)},[U,A]=ae(E),[J,Q]=i.useState(!1),se=i.useRef(null),ve={};A.format&&(ve.format=A.format);const xe=()=>{se.current&&clearTimeout(se.current)},qe=l=>{var p;l==null||l.preventDefault(),l==null||l.stopPropagation(),Ut(A.text||String(s)||"",ve),Q(!0),xe(),se.current=setTimeout(()=>{Q(!1)},3e3),(p=A.onCopy)===null||p===void 0||p.call(A,l)};i.useEffect(()=>xe,[]);const[Ee,Ke]=i.useState(!1),[Se,Fe]=i.useState(!1),[Ce,Xe]=i.useState(!1),[Oe,Ge]=i.useState(!1),[we,Je]=i.useState(!1),[Qe,Ye]=i.useState(!0),[B,w]=ae(d,{expandable:!1}),_=B&&!Ce,{rows:K=1}=w,Y=i.useMemo(()=>!_||w.suffix!==void 0||w.onEllipsis||w.expandable||h||U,[_,w,h,U]);oe(()=>{B&&!Y&&(Ke(Ie("webkitLineClamp")),Fe(Ie("textOverflow")))},[Y,B]);const z=i.useMemo(()=>Y?!1:K===1?Se:Ee,[Y,Se,Ee]),$e=_&&(z?we:Oe),Ze=_&&K===1&&z,Z=_&&K>1&&z,et=l=>{var p;Xe(!0),(p=w.onExpand)===null||p===void 0||p.call(w,l)},[je,tt]=i.useState(0),nt=l=>{let{offsetWidth:p}=l;tt(p)},rt=l=>{var p;Ge(l),Oe!==l&&((p=w.onEllipsis)===null||p===void 0||p.call(w,l))};i.useEffect(()=>{const l=k.current;if(B&&z&&l){const p=Z?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;we!==p&&Je(p)}},[B,z,s,Z,Qe,je]),i.useEffect(()=>{const l=k.current;if(typeof IntersectionObserver>"u"||!l||!z||!_)return;const p=new IntersectionObserver(()=>{Ye(!!l.offsetParent)});return p.observe(l),()=>{p.disconnect()}},[z,_]);let W={};w.tooltip===!0?W={title:(r=g.text)!==null&&r!==void 0?r:s}:i.isValidElement(w.tooltip)?W={title:w.tooltip}:typeof w.tooltip=="object"?W=Object.assign({title:(n=g.text)!==null&&n!==void 0?n:s},w.tooltip):W={title:w.tooltip};const ee=i.useMemo(()=>{const l=p=>["string","number"].includes(typeof p);if(!(!B||z)){if(l(g.text))return g.text;if(l(s))return s;if(l(y))return y;if(l(W.title))return W.title}},[B,z,y,W.title,$e]);if($)return i.createElement(ln,{value:(o=g.text)!==null&&o!==void 0?o:typeof s=="string"?s:"",onSave:P,onCancel:j,onEnd:g.onEnd,prefixCls:O,className:f,style:a,direction:I,component:S,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});const ot=()=>{const{expandable:l,symbol:p}=w;if(!l)return null;let H;return p?H=p:H=x==null?void 0:x.expand,i.createElement("a",{key:"expand",className:`${O}-expand`,onClick:et,"aria-label":x==null?void 0:x.expand},H)},it=()=>{if(!h)return;const{icon:l,tooltip:p}=g,H=ze(p)[0]||(x==null?void 0:x.edit),F=typeof H=="string"?H:"";return M.includes("icon")?i.createElement(he,{key:"edit",title:p===!1?"":H},i.createElement(Le,{ref:R,className:`${O}-edit`,onClick:q,"aria-label":F},l||i.createElement(_t,{role:"button"}))):null},lt=()=>U?i.createElement(mn,Object.assign({key:"copy"},A,{prefixCls:O,copied:J,locale:x,onCopy:qe,iconOnly:s==null})):null,st=l=>[l&&ot(),it(),lt()],at=l=>[l&&i.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Sn),w.suffix,st(l)];return i.createElement(Et,{onResize:nt,disabled:!_},l=>i.createElement(vn,{tooltipProps:W,enableEllipsis:_,isEllipsis:$e},i.createElement(Be,Object.assign({className:X({[`${O}-${u}`]:u,[`${O}-disabled`]:m,[`${O}-ellipsis`]:B,[`${O}-single-line`]:_&&K===1,[`${O}-ellipsis-single-line`]:Ze,[`${O}-ellipsis-multiple-line`]:Z},f),prefixCls:c,style:Object.assign(Object.assign({},a),{WebkitLineClamp:Z?K:void 0}),component:S,ref:Ne(l,k,t),direction:I,onClick:M.includes("text")?q:void 0,"aria-label":ee==null?void 0:ee.toString(),title:y},D),i.createElement(bn,{enableMeasure:_&&!z,text:s,rows:K,width:je,onEllipsis:rt,miscDeps:[J,Ce]},(p,H)=>{let F=p;return p.length&&H&&ee&&(F=i.createElement("span",{key:"show-content","aria-hidden":!0},F)),En(e,i.createElement(i.Fragment,null,F,at(H)))}))))}),le=Cn;var On=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const wn=i.forwardRef((e,t)=>{var{ellipsis:r,rel:n}=e,o=On(e,["ellipsis","rel"]);const c=Object.assign(Object.assign({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete c.navigate,i.createElement(le,Object.assign({},c,{ref:t,ellipsis:!!r,component:"a"}))}),$n=wn,jn=i.forwardRef((e,t)=>i.createElement(le,Object.assign({ref:t},e,{component:"div"}))),Tn=jn;var In=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Rn=(e,t)=>{var{ellipsis:r}=e,n=In(e,["ellipsis"]);const o=i.useMemo(()=>r&&typeof r=="object"?He(r,["expandable","rows"]):r,[r]);return i.createElement(le,Object.assign({ref:t},n,{ellipsis:o,component:"span"}))},Pn=i.forwardRef(Rn);var kn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Dn=[1,2,3,4,5],Mn=i.forwardRef((e,t)=>{const{level:r=1}=e,n=kn(e,["level"]);let o;return Dn.includes(r)?o=`h${r}`:o="h1",i.createElement(le,Object.assign({ref:t},n,{component:o}))}),Nn=Mn,G=Be;G.Text=Pn;G.Link=$n;G.Title=Nn;G.Paragraph=Tn;const Ue=G,{Title:_n}=Ue;function ge(e){const{dataSource:t}=e;return b.jsxs(b.Fragment,{children:[b.jsx(_n,{level:5,style:{marginTop:"10px"},children:t.title}),t!=null&&t.type?b.jsx("div",{style:{margin:"5px 0px"},children:t.type}):null,t!=null&&t.description?b.jsx("div",{style:Ve,children:t.description}):null,b.jsx(St,{size:"small",rowKey:r=>r.name||"",pagination:!1,columns:[{title:"Name",dataIndex:"name",key:"name",render:r=>b.jsx(fe,{color:"cyan",children:r})},{title:"Type",dataIndex:"type",key:"type"},{title:"DefaultValue",dataIndex:"defaultValue",key:"defaultValue",render:r=>b.jsx(fe,{color:"gray",children:r})},{title:"Description",dataIndex:"description",key:"description"}],dataSource:t.ds||[]})]})}ge.__docgenInfo={description:"",methods:[],displayName:"APITableProperty",props:{dataSource:{required:!0,tsType:{name:"intersection",raw:"DSProps & { title?: string }",elements:[{name:"DSProps"},{name:"signature",type:"object",raw:"{ title?: string }",signature:{properties:[{key:"title",value:{name:"string",required:!1}}]}}]},description:""}}};const Ve={margin:"5px 0px",fontWeight:"bold",color:"#797979"},{Title:pe}=Ue;function zn(e){const{paramDs:t,returnDs:r,apiDescription:n,examples:o=[]}=e,[c,f]=i.useState(null),{title:a,description:u="No description",beCare:m}=e.args||{};i.useEffect(()=>{var d;f(((d=document.querySelector(".sbdocs-title.sb-unstyled"))==null?void 0:d.textContent)||"")},[]);const s={additionalActions:[{title:"Source Code",onClick:()=>{var d;window.open(`https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/${(d=document.querySelector(".sbdocs-title.sb-unstyled"))==null?void 0:d.textContent}/index.ts`,"_blank")}}],sourceState:"shown"};return b.jsxs(b.Fragment,{children:[b.jsx(ct,{children:a}),b.jsx(Tt,{style:{margin:"10px"}}),b.jsx(pe,{level:4,children:"Install"}),b.jsx(dt,{code:`npm install @darwish/${c}`}),b.jsx(pe,{level:4,children:"Usage"}),b.jsx("div",{style:Ve,children:u}),m&&b.jsx(fe,{style:{color:"darkred",fontSize:"14px"},children:m}),b.jsx(Te,{...s}),o.map(d=>b.jsx(Te,{of:d,...s})),b.jsxs("div",{children:[b.jsx(pe,{level:4,children:"API"}),b.jsx("div",{style:{fontWeight:"bold",color:"#797979"},children:n}),b.jsx(ge,{dataSource:{...t,title:"Paramters"}},"param"),b.jsx(ge,{dataSource:{...r,title:"Returns"}},"return")]})]})}zn.__docgenInfo={description:"",methods:[],displayName:"HookDocsView",props:{args:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  beCare?: string;
  description?: string;
  sourceUrl?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"beCare",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"sourceUrl",value:{name:"string",required:!1}}]}},description:""},apiDescription:{required:!0,tsType:{name:"ReactNode"},description:""},paramDs:{required:!1,tsType:{name:"DSProps"},description:""},returnDs:{required:!1,tsType:{name:"DSProps"},description:""},examples:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(() => React.JSX.Element)[]"},description:""}}};export{zn as H};