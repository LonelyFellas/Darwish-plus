import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{h as v,T as f}from"./index-eUlx17qx.js";import{r as u}from"./index-BBkUAzwr.js";import{H as g}from"./index-Cj3mkDzd.js";import{h as i}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function y(t){var n=u.useState(void 0),s=n[0],r=n[1],a=u.useState(t),d=a[0],l=a[1];return v(function(){r(d),l(t)},[t]),s}const o=()=>{const[t,n]=u.useState(0),s=y(t);return console.log(s),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["counter current value: ",t]}),e.jsxs("div",{style:{marginBottom:8},children:["counter previous value: ",s]}),e.jsx("button",{type:"button",onClick:()=>n(r=>r+1),children:"increase"}),e.jsx("button",{type:"button",style:{marginLeft:8},onClick:()=>n(r=>r-1),children:"decrease"})]})},I={title:"Hooks/usePrevious",component:o,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(g,{args:{description:"保存上一次状态的 Hook.",beCare:"注意：⚠️初始值的上一个值是 undefined"},apiDescription:i("管理 SessionStorage 的增删改查","#336699"),paramDs:{ds:[{name:"state",type:i("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:e.jsx(f,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"Previous",type:i("T | undefined"),description:"记录上一次的状态值"}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  console.log(previous);
  return <>
      <div>counter current value: {count}</div>
      <div style={{
      marginBottom: 8
    }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        increase
      </button>
      <button type="button" style={{
      marginLeft: 8
    }} onClick={() => setCount(c => c - 1)}>
        decrease
      </button>
    </>;
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Demo"];export{o as Demo,N as __namedExportsOrder,I as default};
