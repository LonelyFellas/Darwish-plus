import { isArray } from "@darwish/is";

export default function chunk<T>(array: T[], size: number): any[] {
  if (!isArray(array)) {
    return [];
  }
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
