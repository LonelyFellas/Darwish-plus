import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{j as h,T as l}from"./index-BgWAaTDi.js";import{r as v}from"./index-BBkUAzwr.js";import{H as T}from"./index-BBv7Nev3.js";import{h as u}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-9ryXY6YS.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";var x=function(s,i){var t=v.useState(i),a=t[0],o=t[1],m=function(r){h(r)?o(function(f){return r(f)}):r==null?o(s):o(r)};return[a,m]};function n(){const s={name:"Marshall"},i={name:"Mathers"},[t,a]=x(i,s);return console.log(t),e.jsxs("div",{children:[e.jsxs("div",{children:["User: ",t.name]}),e.jsx("input",{onChange:o=>a({name:o.target.value}),value:t.name}),e.jsx("button",{onClick:()=>a(null),children:"set to null"})]})}const I={title:"Hooks/useDefault",component:n,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(T,{args:{description:"React state hook that returns the default value when state is null or undefined."},apiDescription:"React state hook that a hook to set default value.",paramDs:{ds:[{name:"defaultVal",type:e.jsx(l,{color:"red",children:"T"}),defaultValue:"undefined",description:"The default value to return when state is null or undefined."},{name:"initialVal",type:e.jsx(l,{color:"red",children:"T"}),defaultValue:"undefined",description:"The initial value for the state."}]},returnDs:{type:e.jsx(l,{color:"purple",children:"[T, (updateValue: T | null | undefined | ((prev: T) => T)) => void]"}),description:"An array containing the copied text and the function to copy text to the clipboard.",ds:[{name:"value",type:u("T"),description:"a value of type T"},{name:"updateValueFn",type:u("(updateValue: T | null | undefined | ((prev: T) => T)) => void"),description:"update value function"}]}})}}};n.__docgenInfo={description:"",methods:[],displayName:"Demo"};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`function Demo() {
  const initialUser = {
    name: 'Marshall'
  };
  const defaultUser = {
    name: 'Mathers'
  };
  const [user, setUser] = useDefault(defaultUser, initialUser);
  console.log(user);
  return <div>
      <div>User: {user.name}</div>
      <input onChange={e => setUser({
      name: e.target.value
    })} value={user.name} />
      <button onClick={() => setUser(null)}>set to null</button>
    </div>;
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const N=["Demo"];export{n as Demo,N as __namedExportsOrder,I as default};
