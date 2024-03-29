import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as p}from"./index-misj52ak.js";import"./index-BBkUAzwr.js";import{u as d}from"./useStorage-CFvomn8k.js";import{H as g}from"./index-CZgxS6__.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-veBCu0KI.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-KlfDhVEi.js";import"./iframe-B6iR54QC.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-xGrV3vO2.js";import"./useZIndex-D5ix7yQk.js";function c(r){var s=d("sessionStorage",r);return s}const t=()=>{const[r,s,m]=c("darwish");return console.log("session-storage.darwish: ",r),o.jsxs("div",{children:[o.jsxs("h1",{children:["Session-Storage: ",r]}),o.jsx("button",{onClick:()=>{s(new Date().getTime())},children:"update "}),o.jsx("button",{onClick:()=>{m()},children:"remove"})]})},H={title:"Hooks/useSessionStorage",component:t,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(g,{args:{description:"浏览器 Session 储存的增删改的操作，进行了多层封装"},apiDescription:e("管理 SessionStorage 的增删改查","#336699"),paramDs:{ds:[{name:"key",type:e("string"),defaultValue:"",description:e("查询的 SessionStorage 的属性名","#336699")}]},returnDs:{type:o.jsx(p,{children:"UseStorageOutput"}),description:"该钩子的输入参数：",ds:[{name:"storage",type:e("string | null | undefined"),description:e("SessionStorage 的值","#336699")},{name:"updateStorage",type:e("(updateVal: unknown) => void"),description:e("更新 SessionStorage 值函数","#336699")},{name:"removeStorage",type:e("() => void;"),description:e("删除 SessionStorage 值函数","#336699")}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [storage, setStorage, removeStorage] = useSessionStorage('darwish');
  console.log("session-storage.darwish: ", storage);
  return <div>
      <h1>Session-Storage: {storage}</h1>
      <button onClick={() => {
      setStorage(new Date().getTime());
    }}>update </button>
      <button onClick={() => {
      removeStorage();
    }}>remove</button>
    </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const E=["Demo"];export{t as Demo,E as __namedExportsOrder,H as default};
