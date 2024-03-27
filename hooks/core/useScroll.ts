import useEventListener from './useEventListener';
import useSetState from './useSetState';

type ScrollHTMLElementEventMap = HTMLElementEventMap['scroll'];
interface OnScrollEvent extends Omit<ScrollHTMLElementEventMap, 'target'> {
  target: Pick<ScrollHTMLElementEventMap, 'target'> & {
    scrollLeft: number;
    scrollTop: number;
  };
}

const useScroll = <T extends React.MutableRefObject<any>>(ref: T) => {
  const [page, setPage] = useSetState({
    x: 0,
    y: 0,
  });

  const onScroll = (event: OnScrollEvent) => {
    if (event && event.target) {
      setPage({
        x: event.target.scrollLeft,
        y: event.target.scrollTop,
      });
    }
  };
  useEventListener(ref, 'scroll', onScroll as any);
  return page;
};
export default useScroll;
