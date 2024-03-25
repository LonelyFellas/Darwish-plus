type Title = {
  type: "title";
  props: React.HTMLAttributes<HTMLTitleElement>;
};
type Meta = {
  type: "meta";
  props: React.MetaHTMLAttributes<HTMLMetaElement>;
};
type Link = {
  type: "link";
  props: React.LinkHTMLAttributes<HTMLLinkElement>;
};
type Base = {
  type: "base";
  props: React.BaseHTMLAttributes<HTMLBaseElement>;
};
type Style = {
  type: "style";
  props: React.StyleHTMLAttributes<HTMLStyleElement>;
};
type Script = {
  type: "script";
  props: React.ScriptHTMLAttributes<HTMLScriptElement>;
};

export type THeadElement = Title | Meta | Link | Base | Style | Script;
export type PropsForType<H, T extends H[keyof H]> = H extends {
  type: T;
  props: infer P;
}
  ? P
  : never;
