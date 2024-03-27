import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{j as m,k as f,l,m as d,n as h,T as y}from"./index-CE7WiA4r.js";import{r as c}from"./index-BBkUAzwr.js";import{H as E}from"./index-Czzbevtp.js";import{h as o}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function v(e){if(e===1/0)return!!e;if(m(e))return!e.length;if(f(e)){var n=Object.getOwnPropertyNames(e);return!n.length}return typeof e=="string"?/^\s*$/.test(e):l(e)||d(e)?e.size===0:h(e)?Number.isNaN(e.getTime()):!e}function g(e,n){var s=function(p){p.code===e&&n()};c.useLayoutEffect(function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}},[])}const r=()=>{const e=c.useRef(null);return g("Enter",()=>{e.current&&v(e.current.value.trim())?(alert("输入的内容不能为空"),e.current.value=""):alert("search")}),t.jsxs("div",{children:[t.jsx("input",{ref:e}),t.jsx("p",{children:"Enter 'arrow enter' to search data"})]})},H={title:"Hooks/useKey",component:r,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(E,{args:{description:"监听键盘的某一个键位(内部使用了useLayoutEffect钩子)，从而触发一个回调."},apiDescription:"React UI sensor hook that executes a handler when a keyboard key is used.",paramDs:{ds:[{name:"code",type:o("string"),defaultValue:"",description:"键盘的英文名字"},{name:"callback",type:o("() => void"),defaultValue:"",description:"按下键位触发回调函数"}]},returnDs:{type:t.jsx(y,{children:"T"}),description:"该钩子的输入参数：",ds:[]}})}}};r.__docgenInfo={description:"",methods:[],displayName:"Demo"};var i,u,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const ref = useRef<React.ElementRef<'input'>>(null);
  const search = () => {
    if (ref.current && isBlanks(ref.current.value.trim())) {
      alert('输入的内容不能为空');
      ref.current.value = '';
    } else {
      alert('search');
    }
  };
  useKey('Enter', search);
  return <div>
        <input ref={ref} />
        <p>Enter 'arrow enter' to search data</p>
      </div>;
}`,...(a=(u=r.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const I=["Demo"];export{r as Demo,I as __namedExportsOrder,H as default};
