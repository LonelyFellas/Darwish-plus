/**
 * @dataSource 数据源
 */
export default function isSort<T>(dataSource: T[]): boolean;
/**
 *
 * @param dataSource 数据源
 * @param comparators 自定义比较回调
 * @returns
 */
export default function isSort<T>(
  dataSource: T[],
  comparators: (a: T, b: T) => number
): boolean;

export default function isSort<T>(
  dataSource: T[],
  comparators?: (a: T, b: T) => number
): boolean {
  let _comparators: (a: any, b: any) => number =
    comparators === void 0 ? defaultComparators : comparators;

  for (let i = 1; i < dataSource.length; i++) {
    if (_comparators(dataSource[i - 1], dataSource[i]) > 0) {
      return false;
    }
  }
  return true;
}

function defaultComparators(a: number, b: number): number {
  return a - b;
}
