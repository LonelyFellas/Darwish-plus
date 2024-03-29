import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as t}from"./index-z5U8iC57.js";import{M as s,T as c,C as l}from"./index-DSpEmV5-.js";import{C as a,P as i}from"./clone-deep.stories-D_lEfJnM.js";import"./index-BBkUAzwr.js";import"./iframe-D86rqt8C.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./index-DGzyQsZc.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";function r(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(c,{children:"clone-deep"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`$ npm run @darwish/clone-deep
`})}),`
`,e.jsx(n.h2,{id:"描述",children:"描述"}),`
`,e.jsx(n.p,{children:"该库对一个对象进行一个深度克隆，支持对象、数组、Map、Set、Date、RegExp、Function、Symbol、BigInt、原始类型、null、undefined等类型的克隆。"}),`
`,e.jsx(n.h2,{id:"使用测试用例",children:"使用+测试用例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import cloneDeep from '@darwish/clone-deep';

const obj = {
  name: 'darwish',
  age: 18,
}
const arr = [1, 2, 3];
const cloneObj = cloneDeep(obj);
const cloneArr = cloneDeep(arr);

// test object
console.log(cloneObj); // { name: 'darwish', age: 18 }
console.log(cloneObj === obj); // false

// test array
console.log(cloneArr); // [1, 2, 3]
console.log(cloneArr === arr); // false
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{of:i,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"-open-github-源码点击查看源码",children:e.jsx("a",{href:"https://github.com/LonelyFellas/Darwish-plus/tree/main/utils/clone-deep",target:"_blank",children:"🧭 Open Github-源码(点击查看源码)"})})]})}function A(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{A as default};
