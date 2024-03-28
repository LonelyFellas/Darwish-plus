import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as u}from"./index-misj52ak.js";import{r as m}from"./index-BBkUAzwr.js";import{H as l}from"./index-CZgxS6__.js";import{h as s}from"./handleTypeView-iA29ZH8a.js";import"./colors-veBCu0KI.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-KlfDhVEi.js";import"./iframe-B6iR54QC.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-xGrV3vO2.js";import"./useZIndex-D5ix7yQk.js";var g={SVG:"image/svg+xml",ICO:"image/x-icon",GIF:"image/gif",PNG:"image/png"},d=function(t){m.useEffect(function(){if(t){var r=t.split("."),i=r[r.length-1].toLocaleUpperCase(),n=document.querySelector("link[rel*='icon']")||document.createElement("link");n.type=g[i],n.href=t,n.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(n)}},[t])};const e=()=>{const t="https://avatars.githubusercontent.com/u/38754760?v=4",r="https://www.google.com/favicon.ico",[i,n]=m.useState(t);return d(i),o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:["Current Favicon: ",o.jsx("span",{children:i})]}),o.jsx("button",{style:{marginRight:16},onClick:()=>{n(r)},children:"Change To Google Favicon"}),o.jsx("button",{onClick:()=>{n(t)},children:"Back To Darwish Favicon"})]})},I={title:"Hooks/useFavicon",component:e,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(l,{args:{description:"设置页面的 favicon。"},apiDescription:"管理应用程序的 favicon 的 hook",paramDs:{ds:[{name:"href",type:s("string"),defaultValue:"--",description:s("favicon 地址, 支持 svg/png/ico/gif 后缀的图片")}]},returnDs:{type:o.jsx(u,{}),description:"该钩子的输入参数：",ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var a,c,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const DEFAULT_FAVICON_URL = 'https://avatars.githubusercontent.com/u/38754760?v=4';
  const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';
  const [url, setUrl] = useState<string>(DEFAULT_FAVICON_URL);
  useFavicon(url);
  return <>
      <p>
        Current Favicon: <span>{url}</span>
      </p>
      <button style={{
      marginRight: 16
    }} onClick={() => {
      setUrl(GOOGLE_FAVICON_URL);
    }}>
        Change To Google Favicon
      </button>
      <button onClick={() => {
      setUrl(DEFAULT_FAVICON_URL);
    }}>
        Back To Darwish Favicon
      </button>
    </>;
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,I as default};
