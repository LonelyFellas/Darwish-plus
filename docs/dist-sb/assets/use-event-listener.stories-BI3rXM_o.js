import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BgWAaTDi.js";import{r as o}from"./index-BBkUAzwr.js";import{u as c}from"./useEventListener-CntZ1hJb.js";import{H as l}from"./index-K_qfieJg.js";import{h as t}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./isBrowser-CU3-RGUT.js";import"./index-D1GfW9Tl.js";import"./iframe-ZUa7SXaf.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const e=()=>{const[m,p]=o.useState(0),r=o.useRef(null);return c(r,"click",()=>{p(u=>u+1)}),a.jsxs("button",{ref:r,type:"button",children:["You click ",m," times"]})},O={title:"Hooks/useEventListener",component:e,tags:["autodocs"],parameters:{docs:{page:()=>a.jsx(l,{args:{description:"进一步的处理了addEventListener和removeEventListener"},apiDescription:"Dom的监听事件",paramDs:{ds:[{name:"name",type:t("Window | React.RefObject<HTMLElement>"),defaultValue:"",description:"监听的对象"},{name:"eventName",type:t("string"),defaultValue:"",description:"监听的事件"},{name:"handler",type:t("EventListener"),defaultValue:"",description:"事件处理函数"}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEventListener(ref, 'click', () => {
    setValue(prev => prev + 1);
  });
  return <button ref={ref} type="button">
      You click {value} times
    </button>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const T=["Demo"];export{e as Demo,T as __namedExportsOrder,O as default};
