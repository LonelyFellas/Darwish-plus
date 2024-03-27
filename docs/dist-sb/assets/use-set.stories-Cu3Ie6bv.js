import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{d as m,T as u}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{H as h}from"./index-Czzbevtp.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";const o=()=>{const[s,{add:a,has:l,remove:d,toggle:p,reset:c}]=m(new Set(["hello"]));return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>a(String(Date.now())),children:"Add"}),t.jsx("button",{onClick:()=>c(),children:"Reset"}),t.jsx("button",{onClick:()=>d("hello"),disabled:!l("hello"),children:"Remove 'hello'"}),t.jsx("button",{onClick:()=>p("hello"),children:"Toggle hello"}),t.jsx("pre",{children:JSON.stringify(Array.from(s),null,2)})]})},_={title:"Hooks/useSet",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(h,{args:{description:"对set集合的数据状态进行管理"},apiDescription:"对set集合数据的增删改查",paramDs:{ds:[{name:"initialState",type:e("T"),defaultValue:"new Set<T>()",description:"初始状态值"}]},returnDs:{type:t.jsx(u,{children:"[state: Set<T>, action: StableActions]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:e("T"),description:e("Set类型的状态值","#336699")},{name:"action",type:e("(StateAction<T>) => void"),description:e("对Set类型数据的增删改","#336699")},{name:"action.add",type:e("(value: T) => void"),description:e("添加数据","#336699")},{name:"action.has",type:e("(value: T) => boolean"),description:e("判断是否存在","#336699")},{name:"action.remove",type:e("(value: T) => void"),description:e("删除数据","#336699")},{name:"action.toggle",type:e("(value: T) => void"),description:e("切换数据","#336699")},{name:"action.reset",type:e("() => void"),description:e("重置数据","#336699")}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,i,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const H=["Demo"];export{o as Demo,H as __namedExportsOrder,_ as default};
