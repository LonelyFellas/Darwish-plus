import React, {
  type ElementType,
  type ComponentPropsWithRef,
  useLayoutEffect,
} from "react";
import { THeadElement } from "./type";
import { createPortal } from "react-dom";

const HeadElement = <T extends THeadElement["type"]>(
  props: { as?: T } & any
) => {
  const _props = props as ComponentPropsWithRef<ElementType<any>> & {
    as: ElementType<any>;
  };
  const { as: Comp = "link", ...other } = props;
  const restProps = other as ComponentPropsWithRef<T>;
  const Component = <Comp data-head={true} {...restProps} />;

  useLayoutEffect(() => {
    const name = _props.name;
    let selector = "";
    if (_props.as && /(base|title)/.test(_props.as as string)) {
      selector = `${_props.as}:not([data-head])`;
    }
    if (_props.as === "meta" && name) {
      selector = `meta[name="${name}"]:not([data-head])`;
    }
    if (_props.as === "meta" && _props.charSet) {
      selector = `meta[charset]:not([data-head])`;
    }
    if (_props.as === "link" && _props.rel == "icon") {
      selector = `link[rel="icon"]:not([data-head])`;
    }
    if (selector) {
      const dom = document.querySelector(selector);
      dom?.remove();
    }
  }, []);

  return createPortal(Component, document.head);
};

export default HeadElement;
