import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as u}from"./index-BBkUAzwr.js";import{h as p,T as i}from"./index-eUlx17qx.js";import{H as m}from"./index-Cj3mkDzd.js";import{B as l}from"./Table-9zVUbs5g.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./useZIndex-C8tNrk2Z.js";function d(r,e){e===void 0&&(e=!0);var t=u.useRef(e),c=u.useRef(!0);p(function(){return e&&c.current&&(t.current=!0,c.current=!1),t.current&&(r(),t.current=!1),function(){t.current=!1}},[e])}const o=()=>{const[r,e]=u.useState(0);return d(()=>(console.log("Running effect once on mount"),()=>{console.log("Running clean-up of effect on unmount")}),r==1),n.jsxs("div",{children:[n.jsx(l,{onClick:()=>e(t=>t+1),children:"Count ++"}),n.jsxs("h1",{children:["Count: ",r]}),n.jsx("h1",{children:"请查看控制台的日志信息: count=1时， 打印日志信息"})]})},S={title:"Hooks/useUpdateEffectOnce",component:o,tags:["autodocs"],parameters:{docs:{page:()=>n.jsx(m,{args:{description:"React lifecycle hook that runs an effect only once."},apiDescription:"apply an effect only once when the component mounts.",paramDs:{ds:[{name:"effect",type:n.jsx(i,{color:"red",children:"React.EffectCallback"}),defaultValue:"",description:"The effect to run only once."}]},returnDs:{ds:[]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,a,f;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  useUpdateEffectOnce(() => {
    console.log('Running effect once on mount');
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  }, count == 1);
  return <div>
      <Button onClick={() => setCount(prev => prev + 1)}>Count ++</Button>
      <h1>Count: {count}</h1>
      <h1>请查看控制台的日志信息: count=1时， 打印日志信息</h1>
    </div>;
}`,...(f=(a=o.parameters)==null?void 0:a.docs)==null?void 0:f.source}}};const T=["Demo"];export{o as Demo,T as __namedExportsOrder,S as default};
