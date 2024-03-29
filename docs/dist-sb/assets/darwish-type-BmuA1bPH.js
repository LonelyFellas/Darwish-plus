import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as t}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";function s(r){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"darwish",children:"darwish"}),`
`,e.jsx(n.p,{children:"类型描述"}),`
`,e.jsx(n.h3,{id:"安装",children:"安装"}),`
`,e.jsxs(n.p,{children:["安装后需要在",e.jsx(n.code,{children:"tsconfig.json"}),"中配置",e.jsx(n.code,{children:'"complierOptions.types": ["@darwish/types"]'}),"。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "types": ["@darwish/types"]
  }
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:` $ npm install @darwish/types
`})}),`
`,e.jsx(n.h3,{id:"示例",children:"示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Equal, Iteraor, StrToArr } from '@darwish/types'

type TestEqual = Equal<1, 1> // true
type TestIteraor = Iteraor<5> // [1, 2, 3, 4, 5]
type TestStrToArr = StrToArr<'123'> // ['1', '2', '3']
`})}),`
`,e.jsxs(n.h3,{id:"darwish-所有的类型",children:[e.jsx(n.code,{children:"darwish"})," 所有的类型"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* 判断两个类型是否相等
* @example
* type A = Equal<1, 1> // true
* type B = Equal<1, 2> // false
* type C = Equal<{a: number}, {a: string}> // false
* type D = Equal<{a: number}, {readonly a: number}> // false
* type E = Equal<{a: number}, {a: number}> // true
*/
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
  >() => T extends Y ? 1 : 2
    ? true
    : false;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 将一个类型变成增长数字的数组
* @be_care 限制1000
* @example Iteraor<number, 5> --> [1, 2, 3, 4, 5]
*/
type Iteraor<
  N extends number,
  Temp extends any[] = []
  > = Temp["length"] extends N ? Temp : Iteraor<N, [...Temp, Temp["length"]]>;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 将一个字符串类型变成数组类型
*/
type StrToArr<
  T extends string,
  TempArr extends any[] = []
  > = T extends \`\${infer F}\${infer R}\`
    ? StrToArr<R, [...TempArr, F]>
    : TempArr;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 推断一个字符串和数组的长度
*/
type Length<
  T extends string | any[],
  TempArr extends any[] = []
  > = T extends any[] ? T["length"] : StrToArr<T>["length"];
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description IsBlanks 判断一个类型是否为空
*/
type IsBlanks<T = ""> = T extends string
  ? T extends ""
    ? true
    : false
  : T extends any[]
  ? T["length"] extends 0
    ? true
    : false
  : T extends Record<PropertyKey, any>
  ? keyof T extends never
    ? true
    : false
  : T extends null
  ? true
  : T extends undefined
  ? true
  : false;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 讲一个字符串类型的数字变成变成 number 类型
*/
type ToNumber<T> = T extends number
  ? T
  : T extends \`\${infer S extends number}\`
  ? S extends number
    ? S
    : S
  : never;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 将一个number类型变成字符串
*/
type ToString<T> = T extends string ? T : T extends number ? \`\${T}\` : never;
type AnyObj = Record<PropertyKey, any>;
type EmptyObj = Record<PropertyKey, never>;
type AnyFunc = (...args: any[]) => any;
`})})]})}function c(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
