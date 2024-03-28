import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{c as p,T as l}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{H as m}from"./index-C9ly0t0J.js";import{h as o}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-DRm9wAVr.js";import"./iframe-B9CRT55Y.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";const e=()=>{const[i,n]=p({});return t.jsxs("div",{children:[t.jsx("pre",{children:JSON.stringify(i,null,2)}),t.jsx("button",{onClick:()=>n({hello:"world"}),children:"hello"}),t.jsx("button",{onClick:()=>n({foo:"bar"}),children:"foo"}),t.jsx("button",{onClick:()=>{n(c=>({count:(c.count||0)+1}))},children:"count++"})]})},O={title:"Hooks/useSetState",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(m,{args:{description:"对Object类型的状态进行管理。与Class组件的状态管理风格保持一致, 特别是在修改状态的时候，足矣体现出来Class组件修改状态是一样的"},apiDescription:"操作这个钩子，基本和Class更新和删除State都是一致的风格",paramDs:{ds:[{name:"initialState",type:o("T"),defaultValue:"{}",description:"初始状态值"}]},returnDs:{type:t.jsx(l,{children:"[state, setState]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:o("T"),description:o("Object类型的状态值","#336699")},{name:"setState",type:o("(updateValue: (Partial<T> | ((args: T) => Partial<T>))) => void"),description:o("更新Object类型的状态值函数","#336699")}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [state, setState] = useSetState<{
    count?: number;
    hello?: string;
    foo?: string;
  }>({});
  return <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({
      hello: 'world'
    })}>hello</button>
      <button onClick={() => setState({
      foo: 'bar'
    })}>foo</button>
      <button onClick={() => {
      setState(prevState => ({
        count: (prevState.count || 0) + 1
      }));
    }}>
        count++
      </button>
    </div>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const w=["Demo"];export{e as Demo,w as __namedExportsOrder,O as default};
