import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as p}from"./index-eUlx17qx.js";import"./index-BBkUAzwr.js";import{u as d}from"./useStorage-CFs_NFjg.js";import{H as g}from"./index-Cj3mkDzd.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function c(r,s){var n=d("sessionStorage",r,s);return n}const t=()=>{const[r,s,n]=c("darwish");return console.log("session-storage.darwish: ",r),o.jsxs("div",{children:[o.jsxs("h1",{children:["Session-Storage: ",r]}),o.jsxs("button",{onClick:()=>{s(new Date().getTime())},children:["update"," "]}),o.jsx("button",{onClick:()=>{n()},children:"remove"})]})},O={title:"Hooks/useSessionStorage",component:t,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(g,{args:{description:"浏览器 Session 储存的增删改的操作，进行了多层封装"},apiDescription:e("管理 SessionStorage 的增删改查","#336699"),paramDs:{ds:[{name:"key",type:e("string"),defaultValue:"",description:e("查询的 SessionStorage 的属性名","#336699")}]},returnDs:{type:o.jsx(p,{children:"UseStorageOutput"}),description:"该钩子的输入参数：",ds:[{name:"storage",type:e("string | null | undefined"),description:e("SessionStorage 的值","#336699")},{name:"updateStorage",type:e("(updateVal: unknown) => void"),description:e("更新 SessionStorage 值函数","#336699")},{name:"removeStorage",type:e("() => void;"),description:e("删除 SessionStorage 值函数","#336699")}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var i,a,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [storage, setStorage, removeStorage] = useSessionStorage<number>("darwish");
  console.log("session-storage.darwish: ", storage);
  return <div>
      <h1>Session-Storage: {storage}</h1>
      <button onClick={() => {
      setStorage(new Date().getTime());
    }}>
        update{" "}
      </button>
      <button onClick={() => {
      removeStorage();
    }}>
        remove
      </button>
    </div>;
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const A=["Demo"];export{t as Demo,A as __namedExportsOrder,O as default};
