import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import"./index-CE7WiA4r.js";import{r as o}from"./index-BBkUAzwr.js";import{u as c}from"./useEventListener-CPT3xWBm.js";import{H as l}from"./index-Czzbevtp.js";import{h as t}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";const e=()=>{const[m,p]=o.useState(0),r=o.useRef(null);return c(r,"click",()=>{p(u=>u+1)}),i.jsxs("button",{ref:r,type:"button",children:["You click ",m," times"]})},_={title:"Hooks/useEventListener",component:e,tags:["autodocs"],parameters:{docs:{page:()=>i.jsx(l,{args:{description:"进一步的处理了addEventListener和removeEventListener"},apiDescription:"Dom的监听事件",paramDs:{ds:[{name:"name",type:t("Window | React.RefObject<HTMLElement>"),defaultValue:"",description:"监听的对象"},{name:"eventName",type:t("string"),defaultValue:"",description:"监听的事件"},{name:"handler",type:t("EventListener"),defaultValue:"",description:"事件处理函数"}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEventListener(ref, 'click', () => {
    setValue(prev => prev + 1);
  });
  return <button ref={ref} type="button">
      You click {value} times
    </button>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const w=["Demo"];export{e as Demo,w as __namedExportsOrder,_ as default};
