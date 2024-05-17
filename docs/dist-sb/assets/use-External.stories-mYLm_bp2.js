import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{T as S}from"./index-eUlx17qx.js";import{r as b}from"./index-BBkUAzwr.js";import{H as D}from"./index-Cj3mkDzd.js";import{h as f}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";var p={},R=function(t,e){e===void 0&&(e={});var n=document.querySelector('script[src="'.concat(t,'"]'));if(!n){var s=document.createElement("script");return s.src=t,Object.keys(e).forEach(function(d){s[d]=e[d]}),s.setAttribute("data-status","loading"),document.body.appendChild(s),{ref:s,status:"loading"}}return{ref:n,status:n.getAttribute("data-status")||"ready"}},T=function(t,e){e===void 0&&(e={});var n=document.querySelector('link[href="'.concat(t,'"]'));if(!n){var s=document.createElement("link");s.rel="stylesheet",s.href=t,Object.keys(e).forEach(function(r){s[r]=e[r]});var d="hideFocus"in s;return d&&s.relList&&(s.rel="preload",s.as="style"),s.setAttribute("data-status","loading"),document.head.appendChild(s),{ref:s,status:"loading"}}return{ref:n,status:n.getAttribute("data-status")||"ready"}},N=function(t,e){var n=b.useState(t?"loading":"unset"),s=n[0],d=n[1],r=b.useRef();return b.useEffect(function(){if(!t){d("unset");return}var h=t.replace(/[|#].*$/,"");if((e==null?void 0:e.type)==="css"||!(e!=null&&e.type)&&/(^css!|\.css$)/.test(h)){var u=T(t,e==null?void 0:e.css);r.current=u.ref,d(u.status)}else if((e==null?void 0:e.type)==="js"||!(e!=null&&e.type)&&/(^js!|\.js$)/.test(h)){var u=R(t,e==null?void 0:e.js);r.current=u.ref,d(u.status)}else console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options");if(r.current){p[t]===void 0?p[t]=1:p[t]+=1;var m=function(g){var o,l=g.type==="load"?"ready":"error";(o=r.current)===null||o===void 0||o.setAttribute("data-status",l),d(l)};return r.current.addEventListener("load",m),r.current.addEventListener("error",m),function(){var g,o,l;(g=r.current)===null||g===void 0||g.removeEventListener("load",m),(o=r.current)===null||o===void 0||o.removeEventListener("error",m),p[t]-=1,p[t]===0&&!(e!=null&&e.keepWhenUnused)&&((l=r.current)===null||l===void 0||l.remove()),r.current=void 0}}},[t]),s};const i=()=>{var e;const t=N("https://ahooks.js.org/useExternal/test-external-script.js",{js:{async:!0}});return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Status: ",a.jsx("b",{children:t})]}),a.jsxs("p",{children:["Response:"," ",a.jsx("i",{children:t==="ready"?(e=window.TEST_SCRIPT)==null?void 0:e.start():"-"})]})]})},c=()=>{const[t,e]=b.useState("https://ahooks.js.org/useExternal/bootstrap-badge.css"),n=N(t);return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Status: ",a.jsx("b",{children:n})]}),a.jsxs("div",{className:"bd-example",style:{wordBreak:"break-word"},children:[a.jsx("span",{className:"badge badge-pill badge-primary",children:"Primary"}),a.jsx("span",{className:"badge badge-pill badge-secondary",children:"Secondary"}),a.jsx("span",{className:"badge badge-pill badge-success",children:"Success"}),a.jsx("span",{className:"badge badge-pill badge-danger",children:"Danger"}),a.jsx("span",{className:"badge badge-pill badge-warning",children:"Warning"}),a.jsx("span",{className:"badge badge-pill badge-info",children:"Info"}),a.jsx("span",{className:"badge badge-pill badge-light",children:"Light"}),a.jsx("span",{className:"badge badge-pill badge-dark",children:"Dark"})]}),a.jsx("br",{}),a.jsx("button",{type:"button",style:{marginRight:8},onClick:()=>e(""),children:"unload"}),a.jsx("button",{type:"button",style:{marginRight:8},onClick:()=>e("https://ahooks.js.org/useExternal/bootstrap-badge.css"),children:"load"})]})},G={title:"Hooks/useExternal",component:i,tags:["autodocs"],parameters:{docs:{page:()=>a.jsx(D,{args:{description:"动态注入 JS 或 CSS 资源，useExternal 可以保证资源全局唯一。"},examples:[c],apiDescription:"管理应用程序的标题的hook",paramDs:{ds:[{name:"title",type:f("string"),defaultValue:"--",description:"页面标题"},{name:"restoreOnUnmount",type:f("boolean"),defaultValue:"false",description:"是否在卸载时恢复原始标题"}]},returnDs:{type:a.jsx(S,{}),description:"该钩子的输入参数：",ds:[]}})}}};i.__docgenInfo={description:"",methods:[],displayName:"Demo"};c.__docgenInfo={description:"",methods:[],displayName:"Demo1"};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const status = useExternal("https://ahooks.js.org/useExternal/test-external-script.js", {
    js: {
      async: true
    }
  });
  return <>
      <p>
        Status: <b>{status}</b>
      </p>
      <p>
        Response:{" "}
        <i>{status === "ready" ? window.TEST_SCRIPT?.start() : "-"}</i>
      </p>
    </>;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,E,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [path, setPath] = useState("https://ahooks.js.org/useExternal/bootstrap-badge.css");
  const status = useExternal(path);
  return <>
      <p>
        Status: <b>{status}</b>
      </p>
      <div className="bd-example" style={{
      wordBreak: "break-word"
    }}>
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-secondary">Secondary</span>
        <span className="badge badge-pill badge-success">Success</span>
        <span className="badge badge-pill badge-danger">Danger</span>
        <span className="badge badge-pill badge-warning">Warning</span>
        <span className="badge badge-pill badge-info">Info</span>
        <span className="badge badge-pill badge-light">Light</span>
        <span className="badge badge-pill badge-dark">Dark</span>
      </div>
      <br />
      <button type="button" style={{
      marginRight: 8
    }} onClick={() => setPath("")}>
        unload
      </button>
      <button type="button" style={{
      marginRight: 8
    }} onClick={() => setPath("https://ahooks.js.org/useExternal/bootstrap-badge.css")}>
        load
      </button>
    </>;
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const K=["Demo","Demo1"];export{i as Demo,c as Demo1,K as __namedExportsOrder,G as default};
