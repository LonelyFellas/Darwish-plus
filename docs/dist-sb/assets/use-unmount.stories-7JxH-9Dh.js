import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{H as p}from"./index-vsdhdNy5.js";import{u as i}from"./index-BgWAaTDi.js";import"./index-BBkUAzwr.js";import{u}from"./useUnmount-rmZ4e9QM.js";import"./index-DSpEmV5-.js";import"./iframe-D86rqt8C.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./colors-DwKSCBJm.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";import"./useLatest-BidcEhGI.js";const a=()=>(u(()=>{console.info("unmount")}),o.jsx("p",{children:"Hello World!"})),t=()=>{const{value:e,toggle:m}=i(!0);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:m,children:e?"unmount":"mount"}),e&&o.jsx(a,{})]})},F={title:"Hooks/useUnmount",component:t,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(p,{args:{description:"A hook that returns a function which can be used to force the component to re-render."},apiDescription:"Force the component to re-render.",paramDs:{ds:[]},returnDs:{ds:[]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const M=["Demo"];export{t as Demo,M as __namedExportsOrder,F as default};
