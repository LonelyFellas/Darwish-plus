import cloneDeep from '@darwish/clone-deep';
import { isBlanks, isObject } from '@darwish/utils-is';
export default function filterUselessKeyValue<
  T extends Record<PropertyKey, any>,
>(obj: T, isFilterEmptyString: boolean = false): T {
  if (isObject(obj)) {
    const cloneObj = cloneDeep(obj);
    Object.keys(cloneObj).forEach((key) => {
      const bool = isFilterEmptyString
        ? isBlanks(cloneObj[key])
        : cloneObj[key] === undefined || cloneObj[key] === null;
      if (bool) {
        delete cloneObj[key];
      }
    });
    return cloneObj;
  } else {
    return obj;
  }
}
