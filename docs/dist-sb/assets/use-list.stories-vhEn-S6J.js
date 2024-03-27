import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{b as A,T as f}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{H as T}from"./index-Czzbevtp.js";import{h as e}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";const o=()=>{const[r,{set:d,push:p,updateAt:c,insertAt:l,update:m,updateFirst:b,upsert:h,sort:C,filter:E,removeAt:v,clear:x,reset:F}]=A([1,2,3]);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>d([2,3,4]),children:"set: 将值设置为 [2, 3, 4]"}),t.jsx("button",{onClick:()=>p(new Date().getTime()),children:"push: 从末尾添加一个值"}),t.jsx("button",{onClick:()=>c(1,new Date().getTime()),children:"upDateAte: 替换Index:1的值"}),t.jsx("button",{onClick:()=>l(1,new Date().getTime()),children:"insertAt: 在index: 1插入一个值"}),t.jsx("button",{onClick:()=>m((n,i)=>n>i,2),children:"update: 所有满足第一个参数的表达式的位置就更新(2)"}),t.jsx("button",{onClick:()=>b((n,i)=>n>i,3),children:"updateFirst: 第一个满足第一个参数的表达式的位置就更新(3)"}),t.jsx("button",{onClick:()=>h((n,i)=>n>i,4),children:"upset: 所有满足第一个参数的表达式的位置就更新(4),不满足就push进去"}),t.jsx("button",{onClick:()=>C((n,i)=>n-i),children:"sort: 自定义排序规则"}),t.jsx("button",{onClick:()=>E(n=>n%2===0),children:"filter: 数过滤"}),t.jsx("button",{onClick:()=>v(1),children:"removeAt: 移除Index:1的値"}),t.jsx("button",{onClick:x,children:"clear: 清空"}),t.jsx("button",{onClick:F,children:"reset: 重置"}),t.jsx("br",{}),t.jsx("textarea",{style:{marginTop:"20px",width:"100%",height:100,fontSize:22,color:"#336699"},disabled:!0,value:JSON.stringify(r)})]})},O={title:"Hooks/useList",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(T,{args:{description:"对数组类型的状态进行高度管理"},apiDescription:`Tracks an array and provides methods to modify it.
            To cause component re-render you have to use these methods instead of direct interaction with array - it won't cause re-render.
            We can ensure that actions object and actions itself will not mutate or change between renders, so there is no need to add it to useEffect dependencies and safe to pass them down to children.
            Note: remove action is deprecated and actually is a copy of removeAt action. Within closest updates it will gain different functionality.`,paramDs:{ds:[{name:"initialList",type:e("Array<T>"),defaultValue:"[ ]",description:"初始化的数组"}]},returnDs:{type:t.jsx(f,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"set",type:e("(value: UseHookStates<T[]>) => void;"),description:"Set new List instead old one"},{name:"push",type:e("(value: T) => void"),description:"Add item(s) at the end of list"},{name:"updateAt",type:e("(index: number, value: T) => void"),description:"Replace item at given position. If item at given position not exists it will be set"},{name:"insertAt",type:e("(index: number, insertValue: T) => void;"),description:"Insert item at given position, all items to the right will be shifted;"},{name:"update",type:e("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),description:"Replace all items that matches predicate with given one;"},{name:"updateFirst",type:e("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),description:"Replace first item that matches predicate with given one;"},{name:"upsert",type:e("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),description:"Like updateFirst but in case of predicate miss - pushes item to the list"},{name:"filter",type:e("(callbackFn: (value: T, index?: number, array?: T[]) => boolean, thisArg?: any) => void"),description:"Same as native Array's method"},{name:"sort",type:e("(compareFn: (a: T, b: T) => number) => void"),description:"Sort list with given sorting function;"},{name:"removeAt",type:e("(index: number) => void"),description:"Remove item at given position"},{name:"clear",type:e("() => void"),description:"Clear list"},{name:"reset",type:e("() => void"),description:"Reset list to initial value"}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var u,s,a;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [list, {
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset
  }] = useList([1, 2, 3]);
  return <div>
      <button onClick={() => set([2, 3, 4])}>set: 将值设置为 [2, 3, 4]</button>
      <button onClick={() => push(new Date().getTime())}>
        push: 从末尾添加一个值
      </button>
      <button onClick={() => updateAt(1, new Date().getTime())}>
        upDateAte: 替换Index:1的值
      </button>
      <button onClick={() => insertAt(1, new Date().getTime())}>
        insertAt: 在index: 1插入一个值
      </button>
      <button onClick={() => update((a, b) => a > b, 2)}>
        update: 所有满足第一个参数的表达式的位置就更新(2)
      </button>
      <button onClick={() => updateFirst((a, b) => a > b, 3)}>
        updateFirst: 第一个满足第一个参数的表达式的位置就更新(3)
      </button>
      <button onClick={() => upsert((a, b) => a > b, 4)}>
        upset: 所有满足第一个参数的表达式的位置就更新(4),不满足就push进去
      </button>
      <button onClick={() => sort((a, b) => a - b)}>
        sort: 自定义排序规则
      </button>
      <button onClick={() => filter(a => a % 2 === 0)}>filter: 数过滤</button>
      <button onClick={() => removeAt(1)}>removeAt: 移除Index:1的値</button>
      <button onClick={clear}>clear: 清空</button>
      <button onClick={reset}>reset: 重置</button>
      <br />
      <textarea style={{
      marginTop: '20px',
      width: '100%',
      height: 100,
      fontSize: 22,
      color: '#336699'
    }} disabled value={JSON.stringify(list)} />
    </div>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const z=["Demo"];export{o as Demo,z as __namedExportsOrder,O as default};
