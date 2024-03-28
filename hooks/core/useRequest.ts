import { useEffect, useState } from 'react';
import useUpdateEffect from "./useUpdateEffect";
import useFetch from './utils/use-fetch';

/**
 * This hook is used to make requests to the server.
 * It should be used in the components that need to make requests to the server.
 * It should be used in the following way:
 *
 */
export interface Options<TData, TParams> {
  defaultData?: TData | null;
  manual?: boolean;
  defaultParams?: Partial<TParams>[];
  refreshDeps?: React.DependencyList;
  onSuccess?: (data: TData, params: TParams) => void;
  onError?: (error: unknown) => void;
  onBefore?: (params: TParams) => void;
  onFinally?: (params: TParams, result: TData, error: Error) => void;
}

export default function useRequest<TData = null, TParams extends any[] = []>(
  requestFn: (...obj: any[]) => Promise<TData>,
  options?: Options<TData, TParams>,
) {
  const defaultOptions: Required<Options<TData, TParams>> = {
    defaultData: options?.defaultData || null,
    defaultParams: options?.defaultParams || [],
    manual: options?.manual || false,
    refreshDeps: options?.refreshDeps || [],
    onSuccess: options?.onSuccess || ((data, params) => {}),
    onError: options?.onError || (() => {}),
    onBefore: options?.onBefore || ((params) => {}),
    onFinally: options?.onFinally || ((params, result, error) => {}),
  };
  const [count, setCount] = useState(0);
  const { manual, refreshDeps, defaultParams } = defaultOptions;

  const { run, data, loading, error, mutate, ...restParams } = useFetch<
    TData,
    TParams
  >({
    service: requestFn,
    options: defaultOptions,
  });

  useEffect(() => {
    if (!manual) {
      run(defaultParams);
    }
  }, []);

  useUpdateEffect(() => {
    run(defaultParams);
  }, [count]);

  const refresh = () => setCount((prev) => prev + 1);

  return {
    data,
    run,
    refresh,
    mutate,
    loading,
    error,
    ...restParams,
  };
}
