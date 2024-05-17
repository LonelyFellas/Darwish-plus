import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{u as d,T as n}from"./index-eUlx17qx.js";import"./index-BBkUAzwr.js";import{H as p}from"./index-Cj3mkDzd.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const o=()=>{const{value:l,setTrue:u,setFalse:c,toggle:s}=d(!0);return t.jsxs("div",{children:[t.jsx("div",{children:l?"ON":"OFF"}),t.jsx("button",{onClick:u,children:"set ON(setTrue)"}),t.jsx("button",{onClick:c,children:"set OFF(setFalse)"}),t.jsx("button",{onClick:s,children:"Toggle(toggle)"}),t.jsx("button",{onClick:()=>s(!0),children:"set ON(toggle(true))"}),t.jsx("button",{onClick:()=>s(!1),children:"set OFF(toggle(false))"})]})},V={title:"Hooks/useBoolean",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(p,{args:{description:"An object containing the boolean state value and utility functions to manipulate the state."},apiDescription:"Custom hook that handles boolean state with useful utility functions.",paramDs:{ds:[{name:"defaultValue",type:e("Boolean"),defaultValue:"false",description:t.jsxs(t.Fragment,{children:["The initial value for the boolean state (default is",t.jsx(n,{children:"false"}),')".']})}]},returnDs:{type:t.jsx(n,{children:"UseBooleanOutput"}),description:"An object containing the boolean state value and utility functions to manipulate the state.",ds:[{name:"setFalse",type:e("() => void"),description:t.jsxs(t.Fragment,{children:["Function to set the boolean state to ",t.jsx(n,{children:"false"}),"."]})},{name:"setTrue",type:e("() => void"),description:t.jsxs(t.Fragment,{children:["Function to set the boolean state to ",t.jsx(n,{children:"true"}),"."]})},{name:"setValue",type:e("Dispatch<SetStateAction<boolean>></SetStateAction>"),description:t.jsxs(t.Fragment,{children:["Function to set the boolean state to ",t.jsx(n,{children:"false"}),"."]})},{name:"toggle",type:e("() => void"),description:"Function to toggle the boolean state."},{name:"value",type:e("boolean"),description:"The current boolean state value."}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var a,i,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  // import { useBoolean } from "@darwish/hooks-core";
  const {
    value: on,
    setTrue,
    setFalse,
    toggle
  } = useBoolean(true);
  return <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={setTrue}>set ON(setTrue)</button>
      <button onClick={setFalse}>set OFF(setFalse)</button>
      <button onClick={toggle}>Toggle(toggle)</button>
      <button onClick={() => toggle(true)}>set ON(toggle(true))</button>
      <button onClick={() => toggle(false)}>set OFF(toggle(false))</button>
    </div>;
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const w=["Demo"];export{o as Demo,w as __namedExportsOrder,V as default};
