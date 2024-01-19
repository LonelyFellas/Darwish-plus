const isPromise = (value: unknown): value is Promise<any> =>
  Promise.resolve(value) instanceof Promise;
export default isPromise;
