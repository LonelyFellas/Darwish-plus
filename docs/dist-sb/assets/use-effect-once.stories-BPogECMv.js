import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as s}from"./index-BgWAaTDi.js";import{R as u}from"./index-BBkUAzwr.js";import{H as a}from"./index-vsdhdNy5.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DSpEmV5-.js";import"./iframe-D86rqt8C.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function m(c){u.useEffect(c,[])}const e=()=>(m(()=>(console.log("Running effect once on mount"),()=>{console.log("Running clean-up of effect on unmount")})),o.jsx("h1",{children:"请查看控制台的日志信息:"})),H={title:"Hooks/useEffectOnce",component:e,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(a,{args:{description:"React lifecycle hook that runs an effect only once."},apiDescription:"apply an effect only once when the component mounts.",paramDs:{ds:[{name:"effect",type:o.jsx(s,{color:"red",children:"React.EffectCallback"}),defaultValue:"",description:"The effect to run only once."}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  useEffectOnce(() => {
    console.log('Running effect once on mount');
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });
  return <h1>请查看控制台的日志信息:</h1>;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const T=["Demo"];export{e as Demo,T as __namedExportsOrder,H as default};
