import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as l}from"./index-z5U8iC57.js";import{M as d,T as c,C as a}from"./index-9ryXY6YS.js";import{D as r,P as i}from"./dlv.stories-YpQiJEx5.js";import"./index-BBkUAzwr.js";import"./iframe-DHq-w96I.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./index-DGzyQsZc.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(c,{children:"utils-dlv"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`$ npm run @darwish/utils-dlv
`})}),`
`,e.jsx(t.h2,{id:"描述",children:"描述"}),`
`,e.jsxs(t.p,{children:["该库为了解决",e.jsx(t.code,{children:"Object"}),"类型在取值中有可能中间会报错的方案"]}),`
`,e.jsx(t.h2,{id:"使用测试用例",children:"使用+测试用例"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const dlv = require('@darwish/utils-dlv').default;

const obj = {
  undef: undefined,
  zero: 0,
  one: 1,
  n: null,
  f: false,
  a: {
    two: 2,
    b: {
      three: 3,
      c: {
        four: 4,
      },
    },
  },
};

describe('dlv function test', () => {
  it('should access a top-level property', () => {
    expect(dlv(obj, 'undef')).toBe(undefined);
    expect(dlv(obj, 'zero')).toBe(0);
    expect(dlv(obj, 'one')).toBe(1);
    expect(dlv(obj, 'n')).toBe(null);
    expect(dlv(obj, 'f')).toBe(false);
    expect(dlv(obj, 'a')).toStrictEqual({
      two: 2,
      b: { three: 3, c: { four: 4 } },
    });
    expect(dlv(obj, ['undef'])).toBe(undefined);
    expect(dlv(obj, ['zero'])).toBe(0);
    expect(dlv(obj, ['one'])).toBe(1);
    expect(dlv(obj, ['n'])).toBe(null);
    expect(dlv(obj, ['f'])).toBe(false);
  });
  it('should access a nested property', () => {
    expect(dlv(obj, 'a.two')).toBe(2);
    expect(dlv(obj, 'a.b')).toStrictEqual({ three: 3, c: { four: 4 } });
    expect(dlv(obj, 'a.b.three')).toBe(3);
    expect(dlv(obj, 'a.b.c')).toStrictEqual({ four: 4 });
    expect(dlv(obj, 'a.b.c.four')).toBe(4);
    expect(dlv(obj, ['a'])).toStrictEqual({
      two: 2,
      b: { three: 3, c: { four: 4 } },
    });
    expect(dlv(obj, ['a', 'two'])).toBe(2);
    expect(dlv(obj, ['a', 'b'])).toStrictEqual({ three: 3, c: { four: 4 } });
    expect(dlv(obj, ['a', 'b', 'three'])).toBe(3);
    expect(dlv(obj, ['a', 'b', 'c'])).toStrictEqual({ four: 4 });
    expect(dlv(obj, ['a', 'b', 'c', 'four'])).toBe(4);
    expect(dlv(obj, ['a', 'b', 'c', 'four', 'five'])).toBe(undefined);
  });
  it("should return the default value if the path doesn't exist", () => {
    expect(dlv(obj, 'a.b.c.five', 'default')).toBe('default');
    expect(dlv(obj, ['a', 'b', 'c', 'five'], 'default')).toBe('default');
  });
  it('should return the default value if the path is invalid', () => {
    expect(dlv(obj, 'a..b.c.five', 'default')).toBe('default');
    expect(dlv(obj, ['a', '', 'b', 'c', 'five'], 'default')).toBe('default');
  });
  it('not exist with default function', () => {
    expect(dlv(obj, 'a.b.c.five', () => 'default')).toBe('default');
    expect(dlv(obj, ['a', 'b', 'c', 'five'], () => 'default')).toBe('default');
  });
  it('not exist with default function and context', () => {
    expect(
      dlv(obj, 'a.b.c.five', function () {
        return this.a.two;
      }),
    ).toBe(2);
    expect(
      dlv(obj, ['a', 'b', 'c', 'five'], function () {
        return this.a.b.three;
      }),
    ).toBe(3);
  });
});
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{of:i,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"-open-github-源码点击查看源码",children:e.jsx("a",{href:"https://github.com/LonelyFellas/Darwish-plus/tree/main/utils/dlv",target:"_blank",children:"🧭 Open Github-源码(点击查看源码)"})})]})}function S(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
