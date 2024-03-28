var d=Object.defineProperty;var l=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var s=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{T as a}from"./index-CE7WiA4r.js";import{r as u}from"./index-BBkUAzwr.js";import{H as f}from"./index-C9ly0t0J.js";import{h as i}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-DRm9wAVr.js";import"./iframe-B9CRT55Y.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function j(o,t){if(o===t)return!0;for(var e=0;e<o.length;e++)if(!Object.is(o[e],t[e]))return!1;return!0}function g(o,t){var e=u.useRef({deps:t,obj:void 0,initialized:!1}).current;return(e.initialized===!1||!j(e.deps,t))&&(e.deps=t,e.obj=o(),e.initialized=!0),e.obj}class h{constructor(){s(this,"data");this.data=Math.random()}}function n(){const o=g(()=>new h,[]),[,t]=u.useState({});return r.jsxs(r.Fragment,{children:[r.jsx("p",{children:o.data}),r.jsx("button",{type:"button",onClick:()=>{t({})},children:"Rerender"})]})}const H={title:"Hooks/useCreation",component:n,tags:["autodocs"],parameters:{docs:{page:()=>r.jsx(f,{args:{description:"useCreation 是 useMemo 或 useRef 的替代品。"},apiDescription:"因为 useMemo 不能保证被 memo 的值一定不会被重新计算，而 useCreation 可以保证这一点。.",paramDs:{ds:[{name:"factory",type:i("() => T"),defaultValue:"",description:"通过 factory 函数，可以避免性能隐患."},{name:"deps",type:r.jsx(a,{color:"red",children:"React.DependencyList"}),defaultValue:"",description:"缓存依赖数组"}]},returnDs:{type:r.jsx(a,{color:"purple",children:"T"}),description:"该钩子的返回的参数: ",ds:[{name:"value",type:i("T"),description:"需要缓存的数据"}]}})}}};n.__docgenInfo={description:"",methods:[],displayName:"Demo"};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function Demo() {
  const foo = useCreation(() => new Foo(), []);
  const [, setFlag] = useState({});
  return <>
      <p>{foo.data}</p>
      <button type="button" onClick={() => {
      setFlag({});
    }}>
        Rerender
      </button>
    </>;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Demo"];export{n as Demo,M as __namedExportsOrder,H as default};
