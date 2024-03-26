import React, { cloneElement, useEffect } from 'react';
import useSetState from './useSetState';

const usePress = (
  pressedView: React.JSX.Element | (() => React.JSX.Element),
  callback: () => void,
  pressTime: number = 300,
) => {
  const element =
    typeof pressedView === 'function' ? pressedView() : pressedView;
  const [times, setTimes] = useSetState({
    startTime: -1,
    spendTime: -1,
  });
  const onMouseDown = () => {
    if (element.props && 'onMouseDown' in element.props) {
      element.props.onMouseEnter();
    }
    setTimes({ startTime: new Date().getTime(), spendTime: 0 });
  };

  const onMouseUp = () => {
    if (element.props && 'onMouseUp' in element.props) {
      element.props.onMouseLeave();
    }
    setTimes({
      spendTime: new Date().getTime() - times.startTime,
    });
  };

  useEffect(() => {
    if (times.spendTime >= pressTime) {
      /**
       * 有可能两次相同的花费时间，所以需要判断是否已经执行过
       * 如果已经执行过，startTime 会被重置为 -1
       * 如果没有执行过，startTime 一定是 0
       * 因为在onMouseDown中，spendTime 会被赋值为 0
       */
      if (times.startTime === 0) {
        callback();
        setTimes({ spendTime: -1 });
      }
    }
  }, [times.spendTime]);
  return () =>
    cloneElement(element, {
      onMouseDown,
      onMouseUp,
    });
};
export default usePress;
