function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-z5U8iC57.js","./index-BBkUAzwr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-DHq-w96I.js";import{R as e,r as c}from"./index-BBkUAzwr.js";import{r as l,u}from"./react-16-D4-xGubx.js";import{d as h,A as E,H as d,D as x}from"./index-9ryXY6YS.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},O=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{p(()=>import("./index-z5U8iC57.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:a})=>l(e.createElement(D,{showException:i,key:Math.random()},e.createElement(a,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{O as DocsRenderer,_ as defaultComponents};
