import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{e as c,T as u}from"./index-eUlx17qx.js";import"./index-BBkUAzwr.js";import{H as h}from"./index-Cj3mkDzd.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const o=()=>{const[s,{add:a,has:l,remove:d,toggle:p,reset:m}]=c(new Set(["hello"]));return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>a(String(Date.now())),children:"Add"}),t.jsx("button",{onClick:()=>m(),children:"Reset"}),t.jsx("button",{onClick:()=>d("hello"),disabled:!l("hello"),children:"Remove 'hello'"}),t.jsx("button",{onClick:()=>p("hello"),children:"Toggle hello"}),t.jsx("pre",{children:JSON.stringify(Array.from(s),null,2)})]})},O={title:"Hooks/useSet",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(h,{args:{description:"对set集合的数据状态进行管理"},apiDescription:"对set集合数据的增删改查",paramDs:{ds:[{name:"initialState",type:e("T"),defaultValue:"new Set<T>()",description:"初始状态值"}]},returnDs:{type:t.jsx(u,{children:"[state: Set<T>, action: StableActions]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:e("T"),description:e("Set类型的状态值","#336699")},{name:"action",type:e("(StateAction<T>) => void"),description:e("对Set类型数据的增删改","#336699")},{name:"action.add",type:e("(value: T) => void"),description:e("添加数据","#336699")},{name:"action.has",type:e("(value: T) => boolean"),description:e("判断是否存在","#336699")},{name:"action.remove",type:e("(value: T) => void"),description:e("删除数据","#336699")},{name:"action.toggle",type:e("(value: T) => void"),description:e("切换数据","#336699")},{name:"action.reset",type:e("() => void"),description:e("重置数据","#336699")}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,i,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [set, {
    add,
    has,
    remove,
    toggle,
    reset
  }] = useSet(new Set(['hello']));
  return <div>
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>;
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const V=["Demo"];export{o as Demo,V as __namedExportsOrder,O as default};
