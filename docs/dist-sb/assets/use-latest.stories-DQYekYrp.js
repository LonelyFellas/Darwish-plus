import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{T as m}from"./index-eUlx17qx.js";import{r as p}from"./index-BBkUAzwr.js";import{u as l}from"./useLatest-BidcEhGI.js";import{H as d}from"./index-Cj3mkDzd.js";import{h as s}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const e=()=>{const[o,i]=p.useState(0),c=l(o);function u(){setTimeout(()=>{alert(`Latest count value: ${c.current}`)},3e3)}return t.jsxs("div",{children:[t.jsxs("p",{children:["You clicked ",o," times"]}),t.jsx("button",{onClick:()=>i(o+1),children:"Click me"}),t.jsx("button",{onClick:u,children:"Show alert"})]})},H={title:"Hooks/useLatest",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(d,{args:{description:"This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from."},apiDescription:"useLatest 返回的永远是最新值",paramDs:{ds:[{name:"value",type:s("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:t.jsx(m,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"value",type:s("T"),description:"最新的状态值"},{name:"setValue",type:s("React.Dispatch<React.SetStateAction<T>>"),description:"修改状态值的函数"}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);
  function handleAlertClick() {
    setTimeout(() => {
      alert(\`Latest count value: \${latestCount.current}\`);
    }, 3000);
  }
  return <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const R=["Demo"];export{e as Demo,R as __namedExportsOrder,H as default};
