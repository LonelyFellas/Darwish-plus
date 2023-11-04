import { useCallback, useState } from 'react';
import { Draft, freeze, produce } from 'immer';

type DraftFunction<S> = (draft: Draft<S>) => void;
type Updater<S> = (arg: S | DraftFunction<S>) => void;
type ImmerHook<S> = [S, Updater<S>];
export function useImmer<S = any>(initialValue: S | (() => S)): ImmerHook<S>;

export default function useImmer(initialValue: any) {
  const [val, updateValue] = useState(() =>
    freeze(
      typeof initialValue === 'function' ? initialValue() : initialValue,
      true
    )
  );
  return [
    val,
    useCallback((updater: any) => {
      if (typeof updater === 'function') updateValue(produce(updater));
      else updateValue(freeze(updater));
    }, []),
  ];
}
