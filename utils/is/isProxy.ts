/**
 * Check if the given object is a proxy object
 * @param obj any
 * @returns boolean
 */
export default function isProxy(obj: any) {
  if (!obj || (typeof obj !== "object" && typeof obj !== "function")) {
    return false; // 非对象或函数返回 false
  }

  try {
    let randomProperty = Symbol("test");
    Object.defineProperty(obj, randomProperty, {
      get: function () {
        return true;
      },
    });

    if (obj[randomProperty] === true) {
      // 尝试删除定义的属性，如果失败则很可能是 Proxy
      delete obj[randomProperty];
      if (obj[randomProperty] === true) {
        return false; // 如果删除成功，说明不是 Proxy
      }
    }
    return true;
  } catch (e) {
    // 如果操作抛出错误，很可能是 Proxy
    return true;
  }
}
