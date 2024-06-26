// /// <reference path="str-ts.d.ts" />
// export default class StrTS {
//   /**
//    * Returns the character at the specified index.
//    * @param str A string.
//    * @param pos A number between 0 and str.length - 1. If not specified, returns 0.
//    * @returns The character at the specified index. If pos is out of range, charAt() returns an empty string.
//    */
//   static charAt<T extends string, P extends number>(str: T, pos: P) {
//     return str.charAt(pos) as CharAt<T, P>;
//   }
//   /**
//    * Adds all the elements of an array into a string, separated by the specified separator string.
//    * @param tuple An array of strings to be joined.
//    * @param dilimiter A string used to separate one element of the tuple from the next in the resulting string. If omitted, the tuple elements are separated with a comma.
//    * @returns A string with all tuple elements joined. If tuple is an empty array, the method returns an empty string.
//    */
//   static join<const T extends string[], D extends string = "">(
//     tuple: T,
//     dilimiter?: D
//   ) {
//     return tuple.join(dilimiter) as Join<T, D>;
//   }
//   /**
//    * Combines the text of two or more strings and returns a new string.
//    * @param strings The strings to append to the end of the string.
//    * @returns A new string containing the combined text of the strings provided.
//    */
//   static concat<const T extends string[]>(...strings: T) {
//     return this.join(strings) as Concat<T>;
//   }
//   /**
//    *
//    * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting atendPosition – length(this).
//    * Otherwise returns false.
//    * @param text The string to be searched.
//    * @param search The characters to be searched for at the end of this string.
//    * @param position The position in this string at which to begin searching for searchString;
//    * @returns true if the given characters are found at the end of the string; otherwise, false.
//    */
//   static endsWith<
//     T extends string,
//     S extends string,
//     P extends number = T["length"]
//   >(text: T, search: S, position = text.length) {
//     return text.endsWith(search, position) as EndsWith<T, S, P>;
//   }
//   /**
//    * Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
//    * @param str string to search in.
//    * @param search string to search for.
//    * @param position  If position is undefined, 0 is assumed, so as to search all of the String.
//    * @returns true if the search string is found anywhere within the given string; otherwise, false if not.
//    */
//   static includes<T extends string, S extends string, P extends number>(
//     str: T,
//     search: S,
//     position = 0
//   ) {
//     return str.includes(search) as Includes<T, S, P>;
//   }

//   /**
//    * Returns the length of a String object. Gets or sets the length of the array. This is a number one higher than the highest index in the array.Returns a section of a string.
//    * @param str The string to extract from.
//    * @returns The length of the given string.
//    */
//   static len<T extends string>(str: T) {
//     return str.length as Length<T>;
//   }
//   /**
//    * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
//    * The padding is applied from the end (right) of the current string.
//    * @param str The string to pad.
//    * @param maxLength The length of the resulting string once the current string has been padded.
//    * If this parameter is smaller than the current string's length, the current string will be returned as it is.
//    * @param fillString The string to pad the current string with.
//    * If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020).
//    * @returns A new string of the given length with the current string padded at the end with the given string.
//    */
//   static padEnd<T extends string, L extends number, S extends string>(
//     str: T,
//     maxLength: L,
//     fillString: S
//   ) {
//     return str.padEnd(maxLength, fillString) as PadEnd<T, L, S>;
//   }
//   /**
//    * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
//    * The padding is applied from the start (left) of the current string.
//    * @param str The string to pad.
//    * @param maxLength The length of the resulting string once the current string has been padded.
//    * If this parameter is smaller than the current string's length, the current string will be returned as it is.
//    * @param fillString The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied.
//    * The default value for this parameter is " " (U+0020).
//    * @returns
//    */
//   static padStart<T extends string, L extends number, S extends string>(
//     str: T,
//     maxLength: L,
//     fillString: S
//   ) {
//     return str.padStart(maxLength, fillString) as PadStart<T, L, S>;
//   }
//   /**
//    * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
//    * @param str The string to be repeated.
//    * @param count The number of times the original string value should be repeated in the new string value.
//    * @returns A new string containing the given string repeated the specified number of times.
//    */
//   static repeat<T extends string, N extends number>(str: T, count: N) {
//     return str.repeat(count) as Repeat<T, N>;
//   }
//   /**
//    * Replaces text in a string, using a regular expression or search string.
//    * @param str The string to be searched.
//    * @param searchValue A string to search for.
//    * @param replaceValue A string containing the text to replace.
//    * When the `searchValue` is a RegExp, all matches are replaced if the g flag is set (or only those matches at the beginning, if the `y` flag is also present).
//    * Otherwise, only the first match of `searchValue` is replaced.
//    * @returns A new string with some or all matches of a pattern replaced by a replacement.
//    */
//   static replace<T extends string, S extends string, R extends string>(
//     str: T,
//     searchValue: S,
//     replaceValue: R
//   ) {
//     return str.replace(searchValue, replaceValue) as Replace<T, S, R>;
//   }
//   /**
//    * Replace all instances of a substring in a string, using a regular expression or search string.
//    * @param str The string to be searched.
//    * @param searchValue A string to search for.
//    * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
//    * @returns A new string with some or all matches of a pattern replaced by a replacement.
//    */
//   static replaceAll<T extends string, S extends string, R extends string>(
//     str: T,
//     searchValue: S,
//     replaceValue: R
//   ) {
//     return str.replaceAll(searchValue, replaceValue) as ReplaceAll<T, S, R>;
//   }
//   /**
//    * Returns a section of a string.
//    * @param str The string to extract from.
//    * @param start The index to the beginning of the specified portion of stringObj.
//    * @param end The index to the end of the specified portion of stringObj.
//    * The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
//    * @returns A new string that contains the extracted section of the given string.
//    */
//   static slice<
//     T extends string,
//     S extends number = 0,
//     E extends number = T["length"]
//   >(str: T, start?: S, end?: E) {
//     return str.slice(start, end) as Slice<T, S, E>;
//   }

//   /**
//    * Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
//    * @param str The string to be split.
//    * @param separator Specifies the string which denotes the points at which each split should occur.
//    * The separator is treated as a string or a regular expression.
//    * If a plain-text separator contains more than one character, that entire string must be found to represent a split point.
//    * If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string.
//    * If separator is an empty string, str is converted to an array of characters.
//    * @returns An array of strings split at each point where the separator occurs in the given string.
//    */
//   static split<T extends string, S extends string>(str: T, separator: S) {
//     return str.split(separator) as Split<T, S>;
//   }
//   static startWith<T extends string, S extends string = "">(
//     text: T,
//     search: S,
//     position = 0
//   ) {}
// }
