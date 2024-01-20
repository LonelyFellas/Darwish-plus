import React from 'react';

/**
 * @module hooks/core/useEffectOnce
 * @see
 * @param {React.EffectCallback} effect 回调函数
 * @returns {void}
 * @example
 * import useEffectOnce from 'hooks/core/useEffectOnce';
 * useEffectOnce(() => {
 *  console.log('useEffectOnce');
 *  return () => {
 *  console.log('useEffectOnce cleanup');
 * };
 */
function useEffectOnce(effect: React.EffectCallback): void {
  React.useEffect(effect, []);
}
export default useEffectOnce;
