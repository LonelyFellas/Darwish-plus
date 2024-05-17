import React, { useCallback } from "react";
import useSetState from "../useSetState";
import { isFunction } from "@darwish/is";
import type { Options } from "../useRequest";

type States<T> = {
  data: T | null;
  loading: boolean;
  error: any;
};
type Flag =
  | "before"
  | "useRequest"
  | "error"
  | "success"
  | "finally"
  | "cancel";
type DataStats<T> = States<T>["data"];
export default function useFetch<TData = null, TParams extends any[] = []>({
  service,
  options,
}: {
  service: (params: any[]) => Promise<TData>;
  options?: Required<Options<TData, TParams>>;
}) {
  const { defaultData, refreshDeps, onFinally, onSuccess, onBefore, onError } =
    options || {
      defaultData: null,
    };
  const [states, setStates] = useSetState<States<TData>>({
    data: defaultData,
    loading: false,
    error: null,
  });
  const flag = React.useRef<Flag>("before");

  const run = useCallback(
    (runParams: any) => {
      setStates({ loading: true });
      flag.current = "useRequest";
      onBefore?.(runParams);
      service(runParams)
        .then((res) => {
          if (flag.current === "cancel") return;
          onSuccess?.(res, (runParams || []) as TParams);
          setStates({ data: res });
          flag.current = "success";
        })
        .catch((err) => {
          if (flag.current === "cancel") return;
          onError?.(err);
          setStates({ data: defaultData, error: err });
          flag.current = "error";
        })
        .finally(() => {
          if (flag.current === "cancel") return;
          onFinally?.(runParams, states.data as TData, states.error);
          setStates({ loading: false });
          flag.current = "finally";
        });
    },
    [states.loading, ...(refreshDeps || [])]
  );
  const cancel = () => {
    setStates({ loading: false });
    flag.current = "cancel";
  };

  const mutate = (
    data: DataStats<TData> | ((prev: DataStats<TData>) => DataStats<TData>)
  ) => setStates({ data: isFunction(data) ? data(states.data) : data });

  return {
    run,
    mutate,
    cancel,
    ...states,
  };
}
