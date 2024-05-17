import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import{T as d}from"./index-eUlx17qx.js";import{r as c}from"./index-BBkUAzwr.js";import{u}from"./useRafState-CeKfIhxR.js";import{H as h}from"./index-Cj3mkDzd.js";import{h as r}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./useUnmount-rmZ4e9QM.js";import"./useLatest-BidcEhGI.js";import"./index-fSmkBuud.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function l(t){c.useEffect(function(){t==null||t()},[])}const e=()=>{const[t,m]=u({width:0,height:0});return l(()=>{const n=o=>{m({width:o.target.innerWidth,height:o.target.innerHeight})};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),i.jsxs("div",{children:[i.jsx("h1",{children:"Window Size"}),i.jsx("pre",{children:JSON.stringify(t,null,2)})]})},b={title:"Hooks/useRafState",component:e,tags:["autodocs"],parameters:{docs:{page:()=>i.jsx(h,{args:{description:"`useRafState` is a hook that is used to update the state of a component using `requestAnimationFrame`. It is similar to `useState` but it is more performant."},apiDescription:"通过WebWorker来计算状态值，从而提高性能。",paramDs:{ds:[{name:"initialState",type:r("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:i.jsx(d,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"state",type:r("T"),description:"最新的状态值"},{name:"setState",type:r(" (value: (S | ((prevState: S) => S))) => void"),description:"修改状态值的action"}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var s,a,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0
  });
  useMount(() => {
    const onResize = (event: any) => {
      setState({
        width: event.target.innerWidth,
        height: event.target.innerHeight
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });
  return <div>
    <h1>Window Size</h1>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>;
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const I=["Demo"];export{e as Demo,I as __namedExportsOrder,b as default};
