import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import"./index-misj52ak.js";import{r as o}from"./index-BBkUAzwr.js";import{u as c}from"./useEventListener-CntZ1hJb.js";import{H as l}from"./index-CZgxS6__.js";import{h as t}from"./handleTypeView-iA29ZH8a.js";import"./colors-veBCu0KI.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./isBrowser-CU3-RGUT.js";import"./index-KlfDhVEi.js";import"./iframe-B6iR54QC.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-xGrV3vO2.js";import"./useZIndex-D5ix7yQk.js";const e=()=>{const[m,p]=o.useState(0),r=o.useRef(null);return c(r,"click",()=>{p(u=>u+1)}),i.jsxs("button",{ref:r,type:"button",children:["You click ",m," times"]})},S={title:"Hooks/useEventListener",component:e,tags:["autodocs"],parameters:{docs:{page:()=>i.jsx(l,{args:{description:"进一步的处理了addEventListener和removeEventListener"},apiDescription:"Dom的监听事件",paramDs:{ds:[{name:"name",type:t("Window | React.RefObject<HTMLElement>"),defaultValue:"",description:"监听的对象"},{name:"eventName",type:t("string"),defaultValue:"",description:"监听的事件"},{name:"handler",type:t("EventListener"),defaultValue:"",description:"事件处理函数"}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEventListener(ref, 'click', () => {
    setValue(prev => prev + 1);
  });
  return <button ref={ref} type="button">
      You click {value} times
    </button>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Demo"];export{e as Demo,N as __namedExportsOrder,S as default};
