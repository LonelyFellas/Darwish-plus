import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as s}from"./index-misj52ak.js";import{R as u}from"./index-BBkUAzwr.js";import{H as a}from"./index-CZgxS6__.js";import"./colors-veBCu0KI.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-KlfDhVEi.js";import"./iframe-B6iR54QC.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-xGrV3vO2.js";import"./useZIndex-D5ix7yQk.js";function m(c){u.useEffect(c,[])}const e=()=>(m(()=>(console.log("Running effect once on mount"),()=>{console.log("Running clean-up of effect on unmount")})),o.jsx("h1",{children:"请查看控制台的日志信息:"})),O={title:"Hooks/useEffectOnce",component:e,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(a,{args:{description:"React lifecycle hook that runs an effect only once."},apiDescription:"apply an effect only once when the component mounts.",paramDs:{ds:[{name:"effect",type:o.jsx(s,{color:"red",children:"React.EffectCallback"}),defaultValue:"",description:"The effect to run only once."}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  useEffectOnce(() => {
    console.log('Running effect once on mount');
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });
  return <h1>请查看控制台的日志信息:</h1>;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,O as default};
