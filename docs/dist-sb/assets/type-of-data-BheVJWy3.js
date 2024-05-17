import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import{M as p,T as r,C as i}from"./index-fSmkBuud.js";import{T as s,P as c}from"./type-of-data.stories-BR5MWZ7a.js";import"./index-BBkUAzwr.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./index-DGzyQsZc.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";function a(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:s}),`
`,e.jsx(r,{children:"TypeOfData"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`$ npm run @darwish/type-of-data
`})}),`
`,e.jsx(t.h2,{id:"描述",children:"描述"}),`
`,e.jsx(t.p,{children:"该库检查数据的类型，返回数据的类型字符串。"}),`
`,e.jsx(t.h2,{id:"使用测试用例",children:"使用+测试用例"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const typeOfData = require("@darwish/type-of-data").default;
describe('typeOfData of utils function to test', () => {
  it('check type', () => {
    expect(typeOfData(null)).toBe('null');
    expect(typeOfData(undefined)).toBe('undefined');
    expect(typeOfData('')).toBe('string');
    expect(typeOfData(false)).toBe('boolean');
    expect(typeOfData({ name: 1 })).toBe('object');
    expect(typeOfData([])).toBe('array');
    expect(typeOfData(Symbol(1))).toBe('symbol');
    expect(typeOfData(new Date())).toBe('date');
    expect(typeOfData(() => 1)).toBe('function');
    expect(typeOfData(new RegExp('/d/g'))).toBe('regexp');
    expect(typeOfData(new Set())).toBe('set');
    expect(typeOfData(new Map())).toBe('map');
  });
});
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(i,{of:c,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"-open-github-源码点击查看源码",children:e.jsx("a",{href:"https://github.com/LonelyFellas/Darwish-plus/tree/main/utils/type-of-data",target:"_blank",children:"🧭 Open Github-源码(点击查看源码)"})})]})}function M(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{M as default};
