import type { PropsWithChildren } from "react";
import { isObject, isArray } from "@darwish/utils-is"
import If from "./if";

type Label = keyof JSX.IntrinsicElements;
type TagProps<T extends Label> = JSX.IntrinsicElements[T];
type LabelProps<T extends Label> = {
  as: T;
  tagProps?: TagProps<T>;
};
export function Switch(
  props: PropsWithChildren<{}>
) {
  const { children } = props;

  let filterChildren = undefined;
  if (isArray(children)) {
    filterChildren = children.filter((child) => child.type === Case || child.type === Default)
  } else if (isObject(children) && ((children as any).type === Case || (children as any).type === Default)) {
    filterChildren = [children];
  } else {
    console.error("Switch children must be an array of Case or Default components");
  }

  return <>{filterChildren}</>
}

interface CaseLabelProps<T extends Label> {
  is?: boolean;
  as: T;
  tagProps?: TagProps<T>;
}
export function Case(props: PropsWithChildren<{ is?: boolean }>): JSX.Element;
export function Case<T extends Label>(props: PropsWithChildren<CaseLabelProps<T>>): JSX.Element;
export function Case<T extends Label>(props: PropsWithChildren<{ is?: boolean, as?: T, tagProps?: JSX.IntrinsicElements[T] }>) {
  const { is = true, as: Component, tagProps, children } = props;
  const isCmpUndef = Component === undefined;

  // @ts-ignore
  const renderedJSX = isCmpUndef ? <>{children}</> : <Component {...tagProps}>{children}</Component>
  return (
    <If is={is} render={renderedJSX} />
  );
}

export function Default(props: PropsWithChildren<{}>): JSX.Element;
export function Default<T extends Label>(props: PropsWithChildren<LabelProps<T>>): JSX.Element;
export function Default<T extends Label>(
  props: PropsWithChildren<{
    as?: T;
    tagProps?: TagProps<T>;
  }>
) {
  const { as: Component, tagProps } = props;
  const isCmpUndef = Component === undefined;

  // @ts-ignore
  return isCmpUndef ? <>{children}</> : <Component {...tagProps}>{children}</Component>

  // return createElement(Component || Fragment, isCmpUndef ? {} : tagProps, props.children);
}
