import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{T as f}from"./index-BgWAaTDi.js";import{r as s}from"./index-BBkUAzwr.js";import{u as l}from"./useUnmount-rmZ4e9QM.js";import{H as S}from"./index-K_qfieJg.js";import{h as a}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./useLatest-BidcEhGI.js";import"./index-D1GfW9Tl.js";import"./iframe-ZUa7SXaf.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";function v(e){s.useEffect(function(){e==null||e()},[])}var w=function(e){var n=s.useRef(0),i=s.useState(e),o=i[0],u=i[1],c=s.useCallback(function(h){cancelAnimationFrame(n.current),n.current=window.requestAnimationFrame(function(){u(h)})},[]);return l(function(){window.cancelAnimationFrame(n.current)}),[o,c]};const t=()=>{const[e,n]=w({width:0,height:0});return v(()=>{const i=o=>{n({width:o.target.innerWidth,height:o.target.innerHeight})};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}}),r.jsxs("div",{children:[r.jsx("h1",{children:"Window Size"}),r.jsx("pre",{children:JSON.stringify(e,null,2)})]})},q={title:"Hooks/useRafState",component:t,tags:["autodocs"],parameters:{docs:{page:()=>r.jsx(S,{args:{description:"`useRafState` is a hook that is used to update the state of a component using `requestAnimationFrame`. It is similar to `useState` but it is more performant."},apiDescription:"通过WebWorker来计算状态值，从而提高性能。",paramDs:{ds:[{name:"initialState",type:a("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:r.jsx(f,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"state",type:a("T"),description:"最新的状态值"},{name:"setState",type:a(" (value: (S | ((prevState: S) => S))) => void"),description:"修改状态值的action"}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const I=["Demo"];export{t as Demo,I as __namedExportsOrder,q as default};
