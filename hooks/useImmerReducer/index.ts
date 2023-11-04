import { type Draft, type nothing, produce } from 'immer';
import { Dispatch, useMemo, useReducer } from 'react';

type ImmerReducer<S, A> = (
  draftState: Draft<S>,
  action: A
) => void | (S extends undefined ? typeof nothing : S);
type Reducer<S = any, A = any> = ImmerReducer<S, A>;
export function useImmerReducer<S, A, I>(
  reducer: ImmerReducer<S, A>,
  initializerArg: S & I,
  initializer: (arg: S & I) => S
): [S, Dispatch<A>];

export function useImmerReducer<S, A, I>(
  reducer: ImmerReducer<S, A>,
  initializerArg: I,
  initializer: (arg: I) => S
): [S, Dispatch<A>];

export function useImmerReducer<S, A>(
  reducer: ImmerReducer<S, A>,
  initialState: S,
  initializer?: undefined
): [S, Dispatch<A>];

export default function useImmerReducer<S, A, I>(
  reducer: ImmerReducer<S, A>,
  initializerArg: S & I,
  initializer?: (arg: S & I) => S
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initializerArg as any, initializer as any);
}
