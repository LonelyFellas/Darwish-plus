import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as a}from"./index-z5U8iC57.js";import{T as i}from"./Table-Jhx1de67.js";import"./index-BBkUAzwr.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"only-when",children:"only-when"}),`
`,`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@darwish/only-when",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@darwish/only-when.svg",alt:"npm version"})})}),`
`,e.jsxs(n.p,{children:["A declarative component for conditional rendering. Copy ",e.jsx(n.a,{href:"https://github.com/LonelyFellas/Darwish-plus",rel:"nofollow",children:e.jsx(n.code,{children:"only-when"})}),", let it support TypeScript."]}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`$ npm install --save @darwish/only-when
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import Only from '@darwish/only-when';

<Only when={true}>
  <h1>Here I Am</h1>
</Only>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { If } from '@darwish/only-when';

<If is={props.error}>
  <h1>{props.error}</h1>
</If>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Switch, Case, Default } from '@darwish/only-when';

<Switch>
  <Case is={age < 6}>preschool</Case>
  <Case is={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
`})}),`
`,e.jsx(n.h2,{id:"if-",children:"<If />"}),`
`,e.jsxs(n.p,{children:["React component that renders the children if the ",e.jsx(n.code,{children:"is"})," prop is ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { If } from '@darwish/only-when';
// Or
import If from '@darwish/only-when/if';

<div>
  <If
    is={props.error}
    render={<h1>{props.error}</h1>}
  />
  <If is={props.error}>
    <h1>{props.error}</h1>
  </If>
</div>
`})}),`
`,e.jsx(n.p,{children:"Or you could just use plain JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  {props.error && (
    <h1>{props.error}</h1>
  )}
</div>
`})}),`
`,e.jsx(n.p,{children:"Only Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import Only from '@darwish/only-when';

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <Only when={show}>
        <h1>Here I Am</h1>
      </Only>
    </div>
  )
}
`})}),`
`,e.jsx(n.h2,{id:"switch-",children:"<Switch />"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Switch, Case, Default } from '@darwish/only-when/switch';

<Switch>
  <Case is={age < 6}>preschool</Case>
  <Case as="div" is={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState, Fragment } from 'react';
import { Switch, Case, Default } from '@darwish/only-when/switch'

export default function App() {
  const [age, setAge] = useState(19)
  return (
    <Fragment>
      <input type="range" onChange={(evn) => setAge(Number(evn.target.value))} /> {age}<br />
      <Switch>
        <Case is={age < 6}>Preschool</Case>
        <Case is={age >= 6 && age < 18}>Primary school</Case>
        <Case is={age >= 18 && age < 60}>Went to college</Case>
        <Default>you graduated</Default>
      </Switch>
    </Fragment>
  );
}
`})}),`
`,e.jsx(n.p,{children:"Defaults to specifying a wrapped HTML Element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React, { useState, Fragment } from 'react';
import { Switch, Case, Default } from '@darwish/only-when/switch'

export default function App() {
  const [age, setAge] = useState(19)
  return (
    <Fragment>
      <input type="range" onChange={(evn) => setAge(Number(evn.target.value))} /> {age}
      <br />
      <Switch>
        <Case as="span" is={age < 6}>Preschool</Case>
        <Case as="em" is={age >= 6 && age < 18}>Primary school</Case>
        <Case as="div" is={age >= 18 && age < 60}>Went to college</Case>
        <Default as="p">you graduated</Default>
      </Switch>
    </Fragment>
  );
}
`})}),`
`,e.jsxs(n.h2,{id:"only--props",children:[e.jsx(n.code,{children:"<Only />"})," props"]}),`
`,e.jsx(i,{size:"small",rowKey:r=>r.propName||"",pagination:!1,columns:[{title:"prop name",dataIndex:"propName",key:"propName"},{title:"type",dataIndex:"type",key:"type"},{title:"default",dataIndex:"default",key:"default"},{title:"isRequired",dataIndex:"isRequired",key:"isRequired"},{title:"description",dataIndex:"description",key:"description"}],dataSource:[{propName:"children",type:"react element",default:"null",isRequired:"true",description:"A single child element"},{propName:"when",type:"boolean",default:"false",isRequired:"true",description:"When true, children will rendered as is"},{propName:"hiddenMode",type:"string",default:"null",isRequired:"false",description:"Determines how children should be hidden"},{propName:"className",type:"string",default:"w-hidden",isRequired:"false",description:"A custom class name to be applied when hiddenMode is set to `css`"}]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"hiddenMode"})," enum"]})}),`
`,e.jsx(i,{size:"small",pagination:!1,rowKey:r=>r.hiddenMode||"",columns:[{title:"hiddenMode",dataIndex:"hiddenMode",key:"hiddenMode"},{title:"description",dataIndex:"description",key:"description"}],dataSource:[{hiddenMode:"null",description:"Will not render the child"},{hiddenMode:"display",description:"Will render the child with `display:none`"},{hiddenMode:"visibility",description:"Will render the child with `visibility:hidden`"},{hiddenMode:"css",description:"Will render the child with a CSS class (you can pass it a custom `className` prop)"}]}),`
`,e.jsxs(n.h2,{id:"if--props",children:[e.jsx(n.code,{children:"<If />"})," Props"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { PropsWithChildren } from "react";
export default function If(props: {
    is: boolean;
    render: React.ReactNode;
}): JSX.Element;
export default function If(props: PropsWithChildren<{
    is: boolean;
}>): JSX.Element | null;
`})}),`
`,e.jsxs(n.h2,{id:"switch--case--default--props",children:[e.jsx(n.code,{children:"<Switch />"})," ",e.jsx(n.code,{children:"<Case />"})," ",e.jsx(n.code,{children:"<Default />"})," Props"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { PropsWithChildren } from "react";
type Label = keyof JSX.IntrinsicElements;
type TagProps<T extends Label> = JSX.IntrinsicElements[T];
type LabelProps<T extends Label> = {
    as: T;
    tagProps?: TagProps<T>;
};
export declare function Switch(props: PropsWithChildren<{}>): import("react/jsx-runtime").JSX.Element;
interface CaseLabelProps<T extends Label> {
    is?: boolean;
    as: T;
    tagProps?: TagProps<T>;
}
export declare function Case(props: PropsWithChildren<{
    is?: boolean;
}>): JSX.Element;
export declare function Case<T extends Label>(props: PropsWithChildren<CaseLabelProps<T>>): JSX.Element;
export declare function Default(props: PropsWithChildren<{}>): JSX.Element;
export declare function Default<T extends Label>(props: PropsWithChildren<LabelProps<T>>): JSX.Element;
export {};

`})}),`
`,e.jsxs(n.p,{children:["Made with ",e.jsx(n.a,{href:"https://github.com/LonelyFellas/github-action-contributors",rel:"nofollow",children:"contributors"}),"."]}),`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsxs(n.p,{children:["MIT © ",e.jsx(n.a,{href:"https://github.com/sag1v",rel:"nofollow",children:e.jsx(n.code,{children:"sag1v"})})," & ",e.jsx(n.a,{href:"https://github.com/uiwjs",rel:"nofollow",children:e.jsx(n.code,{children:"uiwjs"})})]})]})}function m(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
