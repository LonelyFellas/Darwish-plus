import { useEffect } from "react";
import useEventListener from "./useEventListener";
import useRafState from "./useRafState";

/**
 * 监听一个容器的宽度和高度的变化。
 *
 * 注意：入参如果传入，就监听当前的DOM宽高的变化，否则则是窗口`window`的宽高变化
 * @param target DOM
 * @returns
 */
export default function useSize<T extends Element = HTMLDivElement>(
  target?: React.RefObject<T>
) {
  const isTarget = target !== undefined;
  const [dimensions, setDimensions] = useRafState({
    width: isTarget ? 0 : window.innerWidth,
    height: isTarget ? 0 : window.innerHeight,
  });

  useEventListener(window, "resize", () => {
    if (!isTarget) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  });

  useEffect(() => {
    if (isTarget) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entrie of entries) {
          const { height, width } = entrie.contentRect;
          setDimensions({ height, width });
        }
      });

      if (target.current) {
        resizeObserver.observe(target.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return dimensions;
}
