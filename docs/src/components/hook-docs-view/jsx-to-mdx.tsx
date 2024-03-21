interface JsxToMdxProps {
  component: React.JSX.Element;
}
export default function JsxToMdx(props: JsxToMdxProps) {
  return (
    <>
      ```jsx
      {props.component}
      ```
    </>
  );
}
