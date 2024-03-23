only-when
===

[![npm version](https://img.shields.io/npm/v/@darwish/only-when.svg)](https://www.npmjs.com/package/@darwish/only-when)


A declarative component for conditional rendering. Copy [`only-when`](https://github.com/LonelyFellas/Darwish-plus), let it support TypeScript.

## Quick Start

```bash
$ npm install --save @darwish/only-when
```

## Usage

```jsx
import Only from '@darwish/only-when'; 
 
<Only when={true}>
  <h1>Here I Am</h1>
</Only>
```

```jsx
import { If } from '@darwish/only-when'

<If is={props.error}>
  <h1>{props.error}</h1>
</If>
```

```jsx
import { Switch, Case, Default } from '@darwish/only-when'

<Switch>
  <Case is={age < 6}>preschool</Case>
  <Case is={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
```

## \<If />

React component that renders the children if the `is` prop is `true`.

```jsx
import { If } from '@darwish/only-when';
// Or
import If from '@darwish/only-when/if'

<div>
  <If
    is={props.error}
    render={<h1>{props.error}</h1>}
  />
  <If is={props.error}>
    <h1>{props.error}</h1>
  </If>
</div>
```

Or you could just use plain JavaScript:

```jsx
<div>
  {props.error && (
    <h1>{props.error}</h1>
  )}
</div>
```

Only Example

```jsx mdx:preview&background=#fff&codePen=true
import React, { useState } from 'react';
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
```

## \<Switch />

```jsx
import { Switch, Case, Default } from '@darwish/only-when/switch'

<Switch>
  <Case is={age < 6}>preschool</Case>
  <Case as="div" is={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
```

```jsx mdx:preview&background=#fff&codePen=true
import React, { useState, Fragment } from 'react';
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
```

Defaults to specifying a wrapped HTML Element.

```jsx mdx:preview&background=#fff&codePen=true
import React, { useState, Fragment } from 'react';
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
```

## `<Only />` props

| prop name  | type | default | isRequired | description |
| ----- | ----- | ----- | ----- | ----- |
| children | react element | `null` | `true` | A single child element |
| when | bool | `false` | `true` | When true, children will rendered as is |
| hiddenMode | string | `null`   | `false` | Determines how children should be hidden |
| className  | string | `w-hidden` | `false` | This is working in combination with `hiddenMode={"css"}` |

**`hiddenMode` enum**

| hiddenMode | description |
| ----- | ----- |
| `null` | Will not render the child |
| `display` | Will render the child with `display:none` |
| `visibility` | Will render the child with `visibility:hidden` |
| `css` | Will render the child with a CSS class (you can pass it a custom `className` prop) |

## `<If />` Props

```tsx
import type { PropsWithChildren } from "react";
export default function If(props: {
    is: boolean;
    render: React.ReactNode;
}): JSX.Element;
export default function If(props: PropsWithChildren<{
    is: boolean;
}>): JSX.Element | null;
```

## `<Switch />` `<Case />` `<Default />` Props

```tsx
import type { PropsWithChildren } from "react";
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

```


Made with [contributors](https://github.com/LonelyFellas/github-action-contributors).


## License

MIT © [`sag1v`](https://github.com/sag1v) & [`uiwjs`](https://github.com/uiwjs)