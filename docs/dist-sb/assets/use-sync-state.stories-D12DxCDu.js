import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{e as m,T as p}from"./index-BgWAaTDi.js";import"./index-BBkUAzwr.js";import{H as c}from"./index-BBv7Nev3.js";import{h as s}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-9ryXY6YS.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const t=()=>{const a=m({age:25,name:"darwish"}),i=()=>{setTimeout(()=>{a.age++},120)};return e.jsxs(e.Fragment,{children:[e.jsxs("h1",{children:["Age: ",a.age,", Name: ",a.name]}),e.jsx("button",{onClick:i,children:"Age ++"}),e.jsx("button",{onClick:()=>a.name=a.name==="darwish"?"cat":"darwish",children:"Change Name"})]})},N={title:"Hooks/useSyncState",component:t,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(c,{args:{description:"解决异步拿不到最新值和深度改变State"},apiDescription:"api使用风格时mutable的方式来改变state",paramDs:{ds:[{name:"initialState",type:s("T"),defaultValue:"",description:"初始状态值"}]},returnDs:{type:e.jsx(p,{children:"[state, setState]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:s("T"),description:s("直接查看并且修改state, 是一个mutable的方式","#336699")}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const state = useSyncState({
    age: 25,
    name: 'darwish'
  });
  const handleAgePlusPlus = () => {
    setTimeout(() => {
      state.age++;
    }, 120);
  };
  return <>
      <h1>
        Age: {state.age}, Name: {state.name}
      </h1>
      <button onClick={handleAgePlusPlus}>Age ++</button>
      <button onClick={() => state.name = state.name === 'darwish' ? 'cat' : 'darwish'}>
        Change Name
      </button>
    </>;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,N as default};
