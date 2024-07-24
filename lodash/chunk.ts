import { isArray, isBlanks } from '@darwish/utils-is';

export default function chunk<T>(array: T[], size = 1): any[] {
  if (!isArray(array)) {
    return [];
  }
  console.log(isBlanks(size));
  if (isBlanks(size)) return array;
  let count = 0;
  let index = 0;
  const result: T[][] = [];
  array.forEach((it) => {
    if (count === 0) {
      result.push([]);
    }
    result[index].push(it);
    if (count === size - 1) {
      index++;
      count = 0;
    } else {
      count++;
    }
  });
  return result;
}
