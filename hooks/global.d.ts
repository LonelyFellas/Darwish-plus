export = Darwish;
export as namespace Darwish;
declare namespace Darwish {
  export type ElementLabel = keyof JSX.IntrinsicElements;
  export type ElementRef<T extends ElementLabel> =
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
      React.HTMLAttributes<unknown>,
      infer A
    >
      ? A
      : never;
  export type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
    ElementRef<T>,
    MouseEvent
  >;
  export type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
    ElementRef<T>
  >;
  export type ElementHTMLProps<T extends ElementLabel> =
    JSX.IntrinsicElements[T];
  export type EmptyObject = Record<PropertyKey, never>;
  export type AnyType =
    | 'null'
    | 'undefined'
    | 'string'
    | 'boolean'
    | 'object'
    | 'array'
    | 'symbol'
    | 'date'
    | 'function'
    | 'regExp'
    | 'set';
}
declare module 'Darwish' {}
