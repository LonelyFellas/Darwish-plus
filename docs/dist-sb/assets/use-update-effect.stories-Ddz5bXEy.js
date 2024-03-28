import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as n}from"./index-BBkUAzwr.js";import{H as m}from"./index-CZgxS6__.js";import{g as C,T as E}from"./index-misj52ak.js";import"./index-KlfDhVEi.js";import"./iframe-B6iR54QC.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./colors-veBCu0KI.js";import"./Table-xGrV3vO2.js";import"./useZIndex-D5ix7yQk.js";const e=()=>{const[s,a]=n.useState(0),[u,p]=n.useState(0),[i,d]=n.useState(0);return n.useEffect(()=>{p(o=>o+1)},[s]),C(()=>(d(o=>o+1),()=>{}),[s]),t.jsxs("div",{children:[t.jsxs("p",{children:["effectCount: ",u]}),t.jsxs("p",{children:["updateEffectCount: ",i]}),t.jsx("p",{children:t.jsx("button",{type:"button",onClick:()=>a(o=>o+1),children:"reRender"})})]})},T={title:"Hooks/useUpdateEffect",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(m,{args:{description:"A hook alike useEffect but skips running the effect for the first time."},apiDescription:"The API is exactly the same as React.useEffect.",paramDs:{ds:[{name:"effect",type:t.jsx(E,{color:"red",children:"React.EffectCallback"}),defaultValue:"",description:"只在依赖项更新时运行的 effect。"}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var c,r,f;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount(c => c + 1);
  }, [count]);
  useUpdateEffect(() => {
    setUpdateEffectCount(c => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary

  return <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount(c => c + 1)}>
          reRender
        </button>
      </p>
    </div>;
}`,...(f=(r=e.parameters)==null?void 0:r.docs)==null?void 0:f.source}}};const A=["Demo"];export{e as Demo,A as __namedExportsOrder,T as default};
