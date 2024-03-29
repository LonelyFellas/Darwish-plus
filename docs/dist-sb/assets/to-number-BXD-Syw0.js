import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as a}from"./index-z5U8iC57.js";import{M as o,T as i,C as s}from"./index-DSpEmV5-.js";import{T as u,P as m}from"./to-number.stories-BGBuIJGe.js";import"./index-BBkUAzwr.js";import"./iframe-D86rqt8C.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./index-DGzyQsZc.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";function r(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:u}),`
`,e.jsx(i,{children:"to-number"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`$ npm run @darwish/to-number
`})}),`
`,e.jsx(n.h2,{id:"描述",children:"描述"}),`
`,e.jsx(n.p,{children:"该库将一个变量转化成数字，如果转化失败则返回默认值。"}),`
`,e.jsx(n.h2,{id:"使用测试用例",children:"使用+测试用例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const toNumber = require('@darwish/to-number').default;

describe('toNumber of utils function to test', () => {
  // '12345'
  it('When arg_0 is a numeric string, and no default value', () => {
    expect(toNumber('12345')).toBe(12345);
  });
  // '123A'
  it('When arg_0 is number is alphanumeric, and no default value', () => {
    expect(toNumber('1234A')).toBe(1234);
  });
  // 'AAABBB'
  it('When arg_0 is a string of letters, and no default value', () => {
    expect(toNumber('AAABBB')).toBe(NaN);
    expect(toNumber('')).toBe(NaN);
  });
  /**
   * @param dataSource: AAABBB
   * @param defaultValue: 0
   */
  it('When arg_0 a string of letters, and it have a default value', () => {
    expect(toNumber('AAABBB', 0)).toBe(0);
  });
  // 122333
  it('When arg_0 is a number, and no default value', () => {
    expect(toNumber(11111)).toBe(11111);
  });
  // Object type
  it('When arg_0 is a Object type , and no default value', () => {
    expect(toNumber({ name: 1 })).toBe(NaN);
    expect(toNumber(new Set([1, 2, 3]))).toBe(NaN);
  });
  // Object type
  it('When arg_0 is a Object type , and it have a default value', () => {
    expect(toNumber({ name: 1 }, 0)).toBe(0);
    expect(toNumber(new Set([1, 2, 3]), 9)).toBe(9);
  });
});
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{of:m,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"-open-github-源码点击查看源码",children:e.jsx("a",{href:"https://github.com/LonelyFellas/Darwish-plus/tree/main/utils/to-number",target:"_blank",children:"🧭 Open Github-源码(点击查看源码)"})})]})}function W(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{W as default};
