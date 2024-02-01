/// <reference path="str-ts.d.ts" />
export default class StrTS {
  /**
   * Returns the character at the specified index.
   * @param str A string.
   * @param pos A number between 0 and str.length - 1. If not specified, returns 0.
   * @returns The character at the specified index. If pos is out of range, charAt() returns an empty string.
   */
  static charAt<T extends string, P extends number>(str: T, pos: P) {
    return str.charAt(pos) as CharAt<T, P>;
  }
  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   * @param tuple An array of strings to be joined.
   * @param dilimiter A string used to separate one element of the tuple from the next in the resulting string. If omitted, the tuple elements are separated with a comma.
   * @returns A string with all tuple elements joined. If tuple is an empty array, the method returns an empty string.
   */
  static join<const T extends string[], D extends string = "">(
    tuple: T,
    dilimiter?: D
  ) {
    return tuple.join(dilimiter) as Join<T, D>;
  }
  /**
   * Combines the text of two or more strings and returns a new string.
   * @param strings The strings to append to the end of the string.
   * @returns A new string containing the combined text of the strings provided.
   */
  static concat<const T extends string[]>(...strings: T) {
    return this.join(strings) as Concat<T>;
  }
  /**
   *
   * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting atendPosition – length(this).
   * Otherwise returns false.
   * @param text The string to be searched.
   * @param search The characters to be searched for at the end of this string.
   * @param position The position in this string at which to begin searching for searchString;
   * @returns true if the given characters are found at the end of the string; otherwise, false.
   */
  static endsWith<
    T extends string,
    S extends string,
    P extends number = T["length"]
  >(text: T, search: S, position = text.length) {
    return text.endsWith(search, position) as EndsWith<T, S, P>;
  }
  /**
   * Returns a section of a string.
   * @param str The string to extract from.
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj.
   * The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
   * @returns A new string that contains the extracted section of the given string.
   */
  static slice<
    T extends string,
    S extends number = 0,
    E extends number = T["length"]
  >(str: T, start?: S, end?: E) {
    return str.slice(start, end) as Slice<T, S, E>;
  }

  /**
   * Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
   * @param str The string to be split.
   * @param separator Specifies the string which denotes the points at which each split should occur.
   * The separator is treated as a string or a regular expression.
   * If a plain-text separator contains more than one character, that entire string must be found to represent a split point.
   * If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string.
   * If separator is an empty string, str is converted to an array of characters.
   * @returns An array of strings split at each point where the separator occurs in the given string.
   */
  static split<T extends string, S extends string>(str: T, separator: S) {
    return str.split(separator) as Split<T, S>;
  }
}
const testCharAt = StrTS.charAt("Darwish", 10);
const testJoin = StrTS.join(["Darwish", "Yu", "Cat", "July"]);
const testConcat = StrTS.concat("darwish", "yu", "cat", "july");
const testEndsWith = StrTS.endsWith("darwishyu", "yu");
const testSlice = StrTS.slice("Darwish Yu Cat July", 1);

const testSplit = StrTS.split("Darwish Yu Cat ", "a");
