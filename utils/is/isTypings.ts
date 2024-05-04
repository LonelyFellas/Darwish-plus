import isProxy from "./isProxy";
export const isDate = (value: unknown): value is Date =>
  objProtoCallType(value, "date");
/**
 * Check if the value is an object, excluding proxies
 * if excludeProxy is true, it will return false if the value is a proxy
 * @param value the value to check
 * @param excludeProxy whether to exclude proxies or not, defaults to `true`
 * @returns true if the value is an object, false otherwise
 */
export const isObject = (
  value: unknown,
  excludeProxy = true
): value is Record<PropertyKey, any> => {
  const isObj = objProtoCallType(value, "object");
  const a = new Proxy({}, {});
  console.log("isProxy", isProxy(a));
  if (isObj && excludeProxy) return !isProxy(value);
  return isObj;
};
export const isSet = (value: unknown): value is Set<any> =>
  objProtoCallType(value, "set");
export const isMap = (value: unknown): value is Map<any, any> =>
  objProtoCallType(value, "map");
export const isNull = (value: unknown): value is null =>
  objProtoCallType(value, "null");
export const isBigint = (value: unknown): value is bigint =>
  typeof value === "bigint";
export const isArray = (value: unknown): value is any[] => Array.isArray(value);
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === "symbol";
export const isFunction = (value: unknown): value is (...props: any) => any =>
  typeof value === "function";
export const isString = (value: unknown): value is string =>
  typeof value === "string";
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";
export const isNumber = (value: unknown): value is number =>
  typeof value === "number";
export const isInfinity = (value: unknown): value is number =>
  value === Infinity || value === -Infinity;
export const isUndef = (value: unknown): value is undefined =>
  typeof value === "undefined";
const objProtoCallType = <T>(value: unknown, type: T) =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type;
