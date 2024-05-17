import { isArray } from "@darwish/is";

export default class ExtendArray<T> extends Array implements Array<T> {
  value: T[] = [];

  constructor(length: number);
  constructor(...items: T[]);
  constructor(value: T[]);
  constructor(value: any) {
    super();
    if (isArray(value)) {
      this.value = value;
    }
  }

  /**
   * @description Chunk array
   * @param array Data source
   * @param size Chunk size
   * @returns A new data of chunked array
   */
  static chunk = <T>(array: T[], size: number): T[][] => {
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
  };

  toChunk = ExtendArray.chunk;

  /**
   * @property `static` chunk array
   * @description Shuffle array
   * @param array Data source
   * @returns A new data of shuffled array
   */
  static shuffle = <T>(array: T[]): T[] => {
    if (!isArray(array)) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = [...array];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  };

  /**
   * Don't use this method
   * @private
   * @description Unique array
   * @param array data source
   * @returns unique array
   */
  unique = <T>(array: T[]): T[] => {
    const length = array === null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const result = [];
    while (++index < length) {
      const value = array[index];
      if (result.indexOf(value) === -1) {
        result.push(value);
      }
    }
    return result;
  };

  toShuffle = ExtendArray.shuffle;

  static flattenOneDimArr = <T>(array: T[]): T[] => {
    let ans: T[] = [];
    array.forEach((item) => {
      if (isArray(item)) {
        ans = ans.concat(this.flattenOneDimArr(item));
      } else {
        ans.push(item as T);
      }
    });
    return ans;
  };
}
