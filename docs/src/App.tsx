/* eslint-disable @typescript-eslint/ban-ts-comment */
import deepEqual from '../../utils/deepEqual/index';
function App() {
  const maplikeSet = new Set();
  maplikeSet.add(1);
  // @ts-ignore
  maplikeSet.__proto__ = Map.prototype; // eslint-disable-line no-proto
  // @ts-ignore
  // console.log(deepEqual(maplikeSet, new Map())).toBe(false);
  debugger;
  // 检查 Set 特有方法
  // debugger;
  // const map = new Map();
  // map.set('a', 1);
  // let isMap = true;
  // try {
  //   maplikeSet.set('a', 1);
  //   maplikeSet.get('a');
  //   maplikeSet.keys();
  //   maplikeSet.values();
  //   maplikeSet.delete('a');
  // } catch {
  //   isMap = false;
  // }
  // console.log(isMap);
  // // maplikeSet.set('a', 1);

  return (
    <>{/* <button onClick={toggle}>{isShowing ? 'Hide' : 'Show'}</button> */}</>
  );
}

export default App;
