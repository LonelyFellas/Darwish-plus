import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{T as m}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{u as p}from"./useStorage-CFvomn8k.js";import{H as l}from"./index-Czzbevtp.js";import{h as o}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function d(r){var a=p("localStorage",r);return a}const t=()=>{const[r,a,c]=d("darwish");return console.log("local-storage.darwish: ",r),e.jsxs("div",{children:[e.jsxs("h1",{children:["Local-Storage: ",r]}),e.jsx("button",{onClick:()=>{a(new Date().getTime())},children:"update "}),e.jsx("button",{onClick:()=>{c()},children:"remove"})]})},V={title:"Hooks/useLocalStorage",component:t,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(l,{args:{description:"浏览器 Local 储存的增删改的操作，进行了多层封装."},apiDescription:o("管理 LocalStorage 的增删改查","#336699"),paramDs:{ds:[{name:"key",type:o("string"),defaultValue:"",description:o("查询的 localstorage 的属性名","#336699")}]},returnDs:{type:e.jsx(m,{children:"UseStorageOutput"}),description:"该钩子的输入参数：",ds:[{name:"storage",type:o("string | null | undefined"),description:o("localstorage 的值","#336699")},{name:"updateStorage",type:o("(updateVal: unknown) => void"),description:o("更新 localstorage 值函数","#336699")},{name:"removeStorage",type:o("() => void;"),description:o("删除 localstorage 值函数","#336699")}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [storage, setStorage, removeStorage] = useLocalStorage('darwish');
  console.log("local-storage.darwish: ", storage);
  return <div>
      <h1>Local-Storage: {storage}</h1>
      <button onClick={() => {
      setStorage(new Date().getTime());
    }}>update </button>
      <button onClick={() => {
      removeStorage();
    }}>remove</button>
    </div>;
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,V as default};
