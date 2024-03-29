import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{f as u,T as n}from"./index-BgWAaTDi.js";import"./index-BBkUAzwr.js";import{H as m}from"./index-BBv7Nev3.js";import{h as t}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-9ryXY6YS.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const o=()=>{const{value:a,setLeft:l,setRight:p,toggle:g}=u("man","female");return e.jsxs("div",{children:[e.jsxs("p",{children:["Effects：",`${a}`]}),e.jsxs("p",{children:[e.jsx("button",{type:"button",onClick:g,children:"Toggle"}),e.jsx("button",{type:"button",onClick:l,style:{margin:"0 8px"},children:"Toggle False"}),e.jsx("button",{type:"button",onClick:p,children:"Toggle True"})]})]})},L={title:"Hooks/useToggle",component:o,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(m,{args:{description:"A hook that toggle states."},apiDescription:"Custom hook that handles toggle state with useful utility functions.",paramDs:{ds:[{name:"defaultValue",type:t("T"),defaultValue:"false",description:e.jsx(e.Fragment,{children:"The initial value for the toggle state"})},{name:"reverseValue",type:t("U"),defaultValue:"",description:e.jsx(e.Fragment,{children:"The reverse value for the toggle state"})}]},returnDs:{type:e.jsx(n,{children:"UseToggleActions"}),description:"",ds:[{name:"setLeft",type:t("() => void"),description:e.jsxs(e.Fragment,{children:["Function to set the boolean state to ",e.jsx(n,{children:"false"}),"."]})},{name:"setRight",type:t("() => void"),description:e.jsxs(e.Fragment,{children:["Function to set the boolean state to ",e.jsx(n,{children:"true"}),"."]})},{name:"toggle",type:t("(settingValue: ChangeEvent<any> | T) => void;"),description:"Switches the toggle state value."},{name:"value",type:t("boolean | (T | U)"),description:"The current toggle state value."}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,i,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    value,
    setLeft,
    setRight,
    toggle
  } = useToggle('man', 'female');
  return <div>
      <p>Effects：{\`\${value}\`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{
        margin: '0 8px'
      }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>;
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const _=["Demo"];export{o as Demo,_ as __namedExportsOrder,L as default};
