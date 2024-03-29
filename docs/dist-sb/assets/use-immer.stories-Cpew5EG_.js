import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{T as p}from"./index-BgWAaTDi.js";import"./index-BBkUAzwr.js";import{u as d}from"./useImmer-DX3XG-w-.js";import{H as c}from"./index-BBv7Nev3.js";import{h as o}from"./handleTypeView-iA29ZH8a.js";import"./colors-DwKSCBJm.js";import"./extends-CCbyfPlC.js";import"./index-DUqwVN8i.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-9ryXY6YS.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-9zVUbs5g.js";import"./useZIndex-C8tNrk2Z.js";const e=()=>{const[i,a]=d({name:"darwish",d:{b:{info:{age:25}}}});return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>{a(m=>{m.d.b.info.age++})},children:"change info"}),t.jsxs("h1",{children:["Age: ",i.d.b.info.age]})]})},S={title:"Hooks/useImmer",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(c,{args:{description:"解决一个State 复杂多层赋值问题, 通过 immer 库实现. mutate state in a more convenient way."},apiDescription:"React state hook that uses immer to allow you to mutate state in a more convenient way.",paramDs:{ds:[{name:"initialValue",type:o("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:t.jsx(p,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"state",type:o("T"),description:"状态值"},{name:"setState",type:o(" Updater<T>"),description:"修改状态值函数"}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [person, setPerson] = useImmer({
    name: 'darwish',
    d: {
      b: {
        info: {
          age: 25
        }
      }
    }
  });
  return <div>
        <button onClick={() => {
      setPerson(draft => {
        draft.d.b.info.age++;
      });
    }}>
          change info
        </button>
        <h1>Age: {person.d.b.info.age}</h1>
      </div>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const A=["Demo"];export{e as Demo,A as __namedExportsOrder,S as default};
