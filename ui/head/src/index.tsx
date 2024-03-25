import React, { type PropsWithChildren, type FC, createContext } from "react";
import HeadElement from "./head-element";
import type { THeadElement, PropsForType } from "./type";
const InHeadContext = createContext<boolean>(false);
const Internal: FC<PropsWithChildren> = ({ children }) => (
  <InHeadContext.Provider value={true}>{children}</InHeadContext.Provider>
);

const hocHeadElement =
  <T extends THeadElement["type"] = "link">(tag: T) =>
  (props: PropsForType<THeadElement, T>) =>
    <HeadElement {...props} as={tag} />;

const Title = hocHeadElement("title");
const Meta = hocHeadElement("meta");
const Link = hocHeadElement("link");
const Base = hocHeadElement("base");
const Style = hocHeadElement("style");
const Script = hocHeadElement("script");

export default Object.assign(Internal, {
  Title,
  Meta,
  Link,
  Base,
  Style,
  Script,
});
