import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as a}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"react-head",children:"react-head"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://jaywcjlove.github.io/#/sponsor",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee",alt:"Buy me a coffee"})}),`
`,e.jsx(n.a,{href:"https://github.com/uiwjs/react-head/actions/workflows/ci.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/uiwjs/react-head/actions/workflows/ci.yml/badge.svg",alt:"CI"})}),`
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/@uiw/react-head",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@uiw/react-head.svg",alt:"npm version"})}),`
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/@uiw/react-head",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/npm/dm/@uiw/react-head.svg?style=flat&label=",alt:"NPM Downloads"})}),`
`,e.jsx(n.a,{href:"https://uiwjs.github.io/react-head/lcov-report/",rel:"nofollow",children:e.jsx(n.img,{src:"https://uiwjs.github.io/react-head/badges.svg",alt:"Coverage Status"})})]}),`
`,e.jsxs(n.p,{children:["React components will manage your changes to the document head, like ",e.jsx(n.a,{href:"https://www.npmjs.com/package/react-helmet",rel:"nofollow",children:e.jsx(n.code,{children:"react-helmet"})})]}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @uiw/react-head
`})}),`
`,e.jsx(n.h3,{id:"using",children:"Using"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState } from "react";
import Head from '@uiw/react-head';

export default function App() {
  const [count, setCount] = useState(1);
  const click = () => setCount(count + 1)
  return (
    <div className="container">
      <Head>
        <Head.Meta charSet="utf-8" />
        <Head.Title>{count} React Head</Head.Title>
        <Head.Link rel="canonical" href="https://uiwjs.github.io" />
      </Head>
      <button onClick={click}>
        Switch Title - "{count}"
      </button>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState } from "react";
import Head from '@uiw/react-head';

const css = \`.box-test { color: red; }\`

export default function App() {
  return (
    <div>
      <Head.Style>{css}</Head.Style>
      <Head>
        <Head.Style>{css}</Head.Style>
      </Head>
      <div className="box-test">Text Color</div>
    </div>
  );
}
`})}),`
`,e.jsx(n.p,{children:"outputs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <style>.box-test { color: red; }</style>
  <style>.box-test { color: red; }</style>
</head>
<!-- .... -->
`})}),`
`,e.jsx(n.h3,{id:"meta",children:"Meta"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState } from "react";
import Head from '@uiw/react-head';

export default function App() {
  const [count, setCount] = useState(1);
  const click = () => setCount(count + 1)
  return (
    <div>
      <Head.Meta name="keywords" content="react-head,uiw,uiwjs" />
      <Head.Meta charSet="utf-8" />
      <Head.Meta name="description" content={\`\${count} React components will manage your changes to the document head.\`} />
      <button onClick={click}>
        Modify Meta name=description - "{count}"
      </button>
    </div>
  );
}
`})}),`
`,e.jsx(n.p,{children:"Outputs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <meta name="keywords" content="react-head,uiw,uiwjs">
  <meta name="description" content="1 React components will manage your changes to the document head.">
</head>
`})}),`
`,e.jsx(n.h3,{id:"modify-favicon",children:"Modify Favicon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Head.Link rel="icon" href="/favicon.ico" />
<Head.Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState } from "react";
import Head from '@uiw/react-head';

const favicon = \`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦖</text></svg>\`
const favicon2 = \`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤡</text></svg>\`

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head.Link rel="icon" type="image/svg+xml" href={show ? favicon : favicon2} />
      <button onClick={() => setShow(!show)}>
        Change Favicon {show ? "🦖" : "🤡"} {String(show)}
      </button>
    </div>
  );
}
`})}),`
`,e.jsx(n.p,{children:"Outputs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <link data-head="true" rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤡</text></svg>" />
</head>
`})}),`
`,e.jsx(n.h2,{id:"all-sub-components",children:"All Sub Components"}),`
`,e.jsxs(n.p,{children:["Elements that can be used inside the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title",rel:"nofollow",children:e.jsx(n.code,{children:"<title>"})})," -> ",e.jsx(n.code,{children:"<Head.Title>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base",rel:"nofollow",children:e.jsx(n.code,{children:"<base>"})})," -> ",e.jsx(n.code,{children:"<Head.Base>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",rel:"nofollow",children:e.jsx(n.code,{children:"<link>"})})," -> ",e.jsx(n.code,{children:"<Head.Link>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style",rel:"nofollow",children:e.jsx(n.code,{children:"<style>"})})," -> ",e.jsx(n.code,{children:"<Head.Style>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",rel:"nofollow",children:e.jsx(n.code,{children:"<meta>"})})," -> ",e.jsx(n.code,{children:"<Head.Meta>"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"development",children:"Development"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Dependencies in the installation package and example"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"To develop, run the self-reloading build:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build  # Compile packages      📦 @uiw/react-head
npm run watch  # Real-time compilation 📦 @uiw/react-head
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Run Document Website Environment:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run start
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["To contribute, please fork repos, add your patch and tests for it (in the ",e.jsx(n.code,{children:"test/"})," folder) and submit a pull request."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test
`})}),`
`,e.jsx(n.h2,{id:"contributors",children:"Contributors"}),`
`,e.jsx(n.p,{children:"As always, thanks to our amazing contributors!"}),`
`,e.jsx("a",{href:"https://github.com/uiwjs/react-head/graphs/contributors",children:e.jsx("img",{src:"https://uiwjs.github.io/react-head/CONTRIBUTORS.svg"})}),`
`,e.jsxs(n.p,{children:["Made with ",e.jsx(n.a,{href:"https://github.com/jaywcjlove/github-action-contributors",rel:"nofollow",children:"contributors"}),"."]}),`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsx(n.p,{children:"Licensed under the MIT License."})]})}function c(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
