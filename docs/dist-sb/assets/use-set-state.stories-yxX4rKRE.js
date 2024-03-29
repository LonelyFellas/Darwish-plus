import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{c,T as l}from"./index-BgWAaTDi.js";import"./index-BBkUAzwr.js";import{H as m}from"./index-BBv7Nev3.js";import{h as o}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-9ryXY6YS.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const e=()=>{const[i,n]=c({});return t.jsxs("div",{children:[t.jsx("pre",{children:JSON.stringify(i,null,2)}),t.jsx("button",{onClick:()=>n({hello:"world"}),children:"hello"}),t.jsx("button",{onClick:()=>n({foo:"bar"}),children:"foo"}),t.jsx("button",{onClick:()=>{n(p=>({count:(p.count||0)+1}))},children:"count++"})]})},_={title:"Hooks/useSetState",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(m,{args:{description:"对Object类型的状态进行管理。与Class组件的状态管理风格保持一致, 特别是在修改状态的时候，足矣体现出来Class组件修改状态是一样的"},apiDescription:"操作这个钩子，基本和Class更新和删除State都是一致的风格",paramDs:{ds:[{name:"initialState",type:o("T"),defaultValue:"{}",description:"初始状态值"}]},returnDs:{type:t.jsx(l,{children:"[state, setState]"}),description:"该钩子的输入参数：",ds:[{name:"state",type:o("T"),description:o("Object类型的状态值","#336699")},{name:"setState",type:o("(updateValue: (Partial<T> | ((args: T) => Partial<T>))) => void"),description:o("更新Object类型的状态值函数","#336699")}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const H=["Demo"];export{e as Demo,H as __namedExportsOrder,_ as default};
