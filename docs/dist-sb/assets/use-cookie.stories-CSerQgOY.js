import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as i}from"./index-BBkUAzwr.js";import{i as p,T as l}from"./index-BgWAaTDi.js";import{H as h}from"./index-vsdhdNy5.js";import{h as d}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DSpEmV5-.js";import"./iframe-D86rqt8C.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function v(o){var n=i.useState(function(){return p.get(o)||null}),r=n[0],s=n[1],u=i.useCallback(function(a,f){p.set(o,a,f),s(a)},[o]),c=i.useCallback(function(){p.remove(o),s(null)},[o]);return[r,u,c]}const t=()=>{const[o,n,r]=v("my-cookie"),[s,u]=i.useState(1);i.useEffect(()=>{r()},[]);const c=()=>{n(`my-awesome-cookie-${s}`),u(a=>a+1)};return e.jsxs("div",{children:[e.jsxs("p",{children:["Value: ",o]}),e.jsx("button",{onClick:c,children:"Update Cookie"}),e.jsx("br",{}),e.jsx("button",{onClick:r,children:"Delete Cookie"})]})},I={title:"Hooks/useCookie",component:t,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(h,{args:{description:"Manages a cookie value with utility functions."},apiDescription:"Custom hook that handles boolean state with useful utility functions.",paramDs:{ds:[{name:"cookieName",type:e.jsx(l,{color:"red",children:"string"}),defaultValue:"",description:"The name of the cookie to be handled."}]},returnDs:{type:e.jsx(l,{children:"UseCookieOutput"}),description:"An array containing the cookie value and utility functions to manipulate the cookie.",ds:[{name:"cookieValue",type:d("string | null"),description:"The current value of the cookie."},{name:"updateCookie",type:d("(value: string, option?: jsCookie.CookieAttributes) => void"),description:"Function to update the cookie value."},{name:"deleteCookie",type:d("() => void"),description:"Function to delete the cookie."}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var m,k,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  // import { useCookie } from "@darwish/hooks-core";
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  // import { useState, useEffect } from "react";
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    deleteCookie();
  }, []);
  const updateCookieHandler = () => {
    updateCookie(\`my-awesome-cookie-\${counter}\`);
    setCounter(c => c + 1);
  };
  return <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>;
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const M=["Demo"];export{t as Demo,M as __namedExportsOrder,I as default};
