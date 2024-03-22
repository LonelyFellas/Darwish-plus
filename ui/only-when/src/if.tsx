import type { PropsWithChildren } from "react";

export default function If(props: {
  is: boolean;
  render: () => React.ReactNode;
}): JSX.Element;
export default function If(
  props: PropsWithChildren<{ is: boolean }>
): JSX.Element | null;
export default function If(props: any) {
  const { is, children, render } = props;
  return is ? render ?? children : null;
}
