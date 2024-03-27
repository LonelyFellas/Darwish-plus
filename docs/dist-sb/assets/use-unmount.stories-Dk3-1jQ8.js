import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{H as u}from"./index-Czzbevtp.js";import{u as p}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{u as a}from"./useUnmount-rmZ4e9QM.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./colors-oHcgSm9O.js";import"./Table-Jhx1de67.js";import"./useLatest-BidcEhGI.js";const i=()=>(a(()=>{console.info("unmount")}),o.jsx("p",{children:"Hello World!"})),t=()=>{const{value:e,toggle:m}=p(!0);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:m,children:e?"unmount":"mount"}),e&&o.jsx(i,{})]})},w={title:"Hooks/useUnmount",component:t,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(u,{args:{description:"A hook that returns a function which can be used to force the component to re-render."},apiDescription:"Force the component to re-render.",paramDs:{ds:[]},returnDs:{ds:[]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    value,
    toggle
  } = useBoolean(true);
  return <>
      <button type="button" onClick={toggle}>
        {value ? 'unmount' : 'mount'}
      </button>
      {value && <MyComponent />}
    </>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["Demo"];export{t as Demo,B as __namedExportsOrder,w as default};
