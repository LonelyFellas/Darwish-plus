import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{i as h,T as l}from"./index-CE7WiA4r.js";import{r as v}from"./index-BBkUAzwr.js";import{H as T}from"./index-Czzbevtp.js";import{h as u}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";var x=function(s,i){var t=v.useState(i),r=t[0],a=t[1],m=function(o){h(o)?a(function(f){return o(f)}):o==null?a(s):a(o)};return[r,m]};function n(){const s={name:"Marshall"},i={name:"Mathers"},[t,r]=x(i,s);return console.log(t),e.jsxs("div",{children:[e.jsxs("div",{children:["User: ",t.name]}),e.jsx("input",{onChange:a=>r({name:a.target.value}),value:t.name}),e.jsx("button",{onClick:()=>r(null),children:"set to null"})]})}const R={title:"Hooks/useDefault",component:n,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(T,{args:{description:"React state hook that returns the default value when state is null or undefined."},apiDescription:"React state hook that a hook to set default value.",paramDs:{ds:[{name:"defaultVal",type:e.jsx(l,{color:"red",children:"T"}),defaultValue:"undefined",description:"The default value to return when state is null or undefined."},{name:"initialVal",type:e.jsx(l,{color:"red",children:"T"}),defaultValue:"undefined",description:"The initial value for the state."}]},returnDs:{type:e.jsx(l,{color:"purple",children:"[T, (updateValue: T | null | undefined | ((prev: T) => T)) => void]"}),description:"An array containing the copied text and the function to copy text to the clipboard.",ds:[{name:"value",type:u("T"),description:"a value of type T"},{name:"updateValueFn",type:u("(updateValue: T | null | undefined | ((prev: T) => T)) => void"),description:"update value function"}]}})}}};n.__docgenInfo={description:"",methods:[],displayName:"Demo"};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`function Demo() {
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Demo"];export{n as Demo,S as __namedExportsOrder,R as default};
