import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{f as m,T as p}from"./index-eUlx17qx.js";import"./index-BBkUAzwr.js";import{H as c}from"./index-Cj3mkDzd.js";import{h as s}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const e=()=>{const a=m({age:25,name:"darwish"}),i=()=>{setTimeout(()=>{a.age++},120)};return t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:["Age: ",a.age,", Name: ",a.name]}),t.jsx("button",{onClick:i,children:"Age ++"}),t.jsx("button",{onClick:()=>a.name=a.name==="darwish"?"cat":"darwish",children:"Change Name"})]})},N={title:"Hooks/useSyncState",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(c,{args:{description:"解决异步拿不到最新值和深度改变State"},apiDescription:"api使用风格时mutable的方式来改变state",paramDs:{ds:[{name:"initialState",type:s("T"),defaultValue:"",description:"初始状态值"}]},returnDs:{type:t.jsx(p,{children:"[state, setState]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:s("T"),description:s("直接查看并且修改state, 是一个mutable的方式","#336699")}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,N as default};
