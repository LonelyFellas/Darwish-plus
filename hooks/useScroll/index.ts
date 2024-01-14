import useEventListener from '@darwish-hooks/use-event-listener';
import useSetState from '@darwish-hooks/use-set-state';

type ScrollHTMLElementEventMap = HTMLElementEventMap['scroll'];
interface OnScrollEvent extends Omit<ScrollHTMLElementEventMap, 'target'> {
  target: Pick<ScrollHTMLElementEventMap, 'target'> & {
    scrollLeft: number;
    scrollTop: number;
  };
}

const useScroll = (ref: React.MutableRefObject<HTMLDivElement>) => {
  const [page, setPage] = useSetState({
    x: 0,
    y: 0,
    scrolling: false,
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
  return [page, 3];
};
export default useScroll;
