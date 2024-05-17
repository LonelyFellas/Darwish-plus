import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as r}from"./index-z5U8iC57.js";import{M as o,T as l}from"./index-fSmkBuud.js";import{I as d}from"./is.stories-BqwZfvAb.js";import"./index-BBkUAzwr.js";import"./iframe-RZmHZP2-.js";import"../sb-preview/runtime.js";import"./index-DUqwVN8i.js";import"./extends-CCbyfPlC.js";import"./index-B_J8iUie.js";import"./isNativeReflectConstruct-DeZAPHXq.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";function i(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(o,{of:d}),`
`,s.jsx(l,{children:"is"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`$ npm run @darwish/is
`})}),`
`,s.jsx(e.h2,{id:"描述",children:"描述"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"该库提供了一系列的判断函数，用于判断传入的参数是否为某种类型"}),`
`,s.jsxs(e.li,{children:["该库提供了一系列的判断函数，不仅仅是类型判断还有其他功能的判断比如: ",s.jsx(e.code,{children:"dev"}),", ",s.jsx(e.code,{children:"promise"}),", ",s.jsx(e.code,{children:"jsx"}),", ",s.jsx(e.code,{children:"browser"}),", ",s.jsx(e.code,{children:"email"}),"等等"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"indexts导出的所有的组件",children:[s.jsx(e.code,{children:"index.ts"}),"导出的所有的组件"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-jsx",children:`export * from "./isTypings"; //判断类型
export { default as isBlanks } from "./isBlanks"; //判断参数是否为 true
export { default as isEmailValid } from "./isEmailValid"; // 判断邮箱是否合法
export { default as isBrowser } from "./isBrowser"; // 判断是否为浏览器环境
export { default as isDev } from "./isDev"; // 判断是否为开发环境
export { default as isJSX } from "./isJSX"; // 判断是否为JSX组件
export { default as isPromise } from "./isPromise"; // 判断是否Promise函数
`})}),`
`,s.jsxs(e.h3,{id:"istypingsts导出的所有的组件",children:[s.jsx(e.code,{children:"isTypings.ts"}),"导出的所有的组件"]}),`
`,s.jsx("span",{style:{color:"red"},children:"注意：这里的判断也都是带着ts类型的判断"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isDate"})," - 判断是否为日期"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isObject"})," - 判断是否为对象"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isSet"})," - 判断是否为Set"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isMap"})," - 判断是否为Map"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isNull"})," - 判断是否为Null"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isBigint"})," - 判断是否为大数"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isArray"})," - 判断是否为数组"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isSymbol"})," - 判断是否为Symbol"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isString"})," - 判断是否为字符串"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isFunction"})," - 判断是否为函数"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isBoolean"})," - 判断是否为布尔值"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isNumber"})," - 判断是否为数字"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isUndef"})," - 判断是否为undefined"]}),`
`]}),`
`,s.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import {isBoolean, isPromise, isDev} from "@darwish/is";

export default () => {
    const promise = new Promise((resolve, reject) => {
        resolve('success');
    });

    const ans: boolean | string = "false"

    if (isBoolean(ans)) {
      console.log('ans is boolean'); // 类型 ans is boolean
    } else {
      console.log('ans is string'); // 类型 ans is string
    }

    if (isPromise(promise)) {
      console.log('promise is promise'); // 类型 promise is promise
    } else {
      console.log('promise is not promise'); // 类型 promise is not promise
    }

    return (
      <div>
          <h1>is</h1>
          {isDev() ? <h2>开发环境</h2> : <h2>生产环境</h2>}
      </div>
    );
}
`})}),`
`,s.jsx(e.h3,{id:"-open-github-源码点击查看源码",children:s.jsx("a",{href:"https://github.com/LonelyFellas/Darwish-plus/tree/main/utils/is",target:"_blank",children:"🧭 Open Github-源码(点击查看源码)"})})]})}function y(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{y as default};
