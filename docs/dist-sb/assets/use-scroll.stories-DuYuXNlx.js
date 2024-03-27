import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{c as m,T as u}from"./index-CE7WiA4r.js";import{R as x}from"./index-BBkUAzwr.js";import{u as f}from"./useEventListener-CPT3xWBm.js";import{H as h}from"./index-Czzbevtp.js";import{h as n}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";var y=function(t){var o=m({x:0,y:0}),i=o[0],l=o[1],d=function(s){s&&s.target&&l({x:s.target.scrollLeft,y:s.target.scrollTop})};return f(t,"scroll",d),i};const r=()=>{const t=x.useRef(null),{x:o,y:i}=y(t);return e.jsxs("div",{children:[e.jsx("div",{children:"请水平或者垂直滚动鼠标滑轮："}),e.jsxs("div",{children:["x: ",o,", y: ",i]}),e.jsx("div",{ref:t,style:{height:"400px",width:"400px",overflow:"auto",background:"gray"},children:e.jsx("div",{style:{height:"1200px",width:"1200px"}})})]})},A={title:"Hooks/useScroll",component:r,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(h,{args:{description:"DOM 滚动的 ScrollX 和 ScrollY 的位置"},apiDescription:"计算DOM滚动的位置",paramDs:{ds:[{name:"Ref",type:n("T extends React.RefObject<HTMLElement>"),defaultValue:"",description:"被监听 DOM 的 Ref 对象"}]},returnDs:{type:e.jsx(u,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"x",type:n("number"),description:"水平滚动的位置"},{name:"y",type:n("number"),description:"垂直滚动的位置"}]}})}}};r.__docgenInfo={description:"",methods:[],displayName:"Demo"};var a,c,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const scrollRef = React.useRef<React.ElementRef<'div'>>(null);
  const {
    x,
    y
  } = useScroll(scrollRef);
  return <div>
      <div>请水平或者垂直滚动鼠标滑轮：</div>
      <div>x: {x}, y: {y}</div>
      <div ref={scrollRef} style={{
      height: '400px',
      width: '400px',
      overflow: 'auto',
      background: 'gray'
    }}>
        <div style={{
        height: '1200px',
        width: '1200px'
      }}></div>
      </div>
    </div>;
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const L=["Demo"];export{r as Demo,L as __namedExportsOrder,A as default};