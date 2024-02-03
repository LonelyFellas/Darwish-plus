type SliceNormal<
  T extends string,
  E extends number = Length<T>,
  TempArr extends any[] = [],
  TempStr extends string = ""
> = T extends `${infer F}${infer R}`
  ? TempArr["length"] extends E
    ? TempStr
    : SliceNormal<R, E, [...TempArr, F], `${TempStr}${F}`>
  : TempStr;
export declare global {
  type IsArray<A extends any[]> = A extends [infer F, ...infer R]
    ? true
    : false;
  /**
   * Returns the character at the specified index.
   */
  type CharAt<
    T extends string,
    P extends number,
    Temp extends string[] = []
  > = T extends `${infer F}${infer R}`
    ? Temp["length"] extends P
      ? F
      : CharAt<R, P, [...Temp, F]>
    : never;
  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   */
  type Join<
    L extends string[],
    D extends string = "",
    Temp extends string = ""
  > = L extends [infer F extends string, ...infer R extends string[]]
    ? Join<R, D, `${Temp}${F}${IsArray<R> extends true ? D : ""}`>
    : Temp;
  /**
   * Combines the text of two or more strings and returns a new string.
   */
  type Concat<T extends string[]> = Join<T>;
  /**
   *
   * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting atendPosition – length(this).
   * Otherwise returns false.
   */
  type EndsWith<
    T extends string,
    S extends string,
    P extends number = 0
  > = Slice<T, 0, Math.Subtract<Darwish.Length<T>, P>> extends `${infer R}${S}`
    ? true
    : false;
  /**
   * Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
   */
  type Includes<
    T extends string,
    S extends string,
    P extends number = 0,
    TempStr extends string = Slice<T, P>
  > = TempStr extends `${infer L}${S}${infer R}`
    ? true
    : TempStr extends `${S}`
    ? true
    : false;
  /**
   * Returns the length of a String object. Gets or sets the length of the array.
   * This is a number one higher than the highest index in the array.Returns a section of a string.
   */
  type Length<T extends string> = Darwish.Length<T>;
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   */
  type PadEnd<
    T extends string,
    L extends number = Length<T>,
    S extends string = " ",
    Len extends number = Length<T>
  > = Math.TwoNumberGreater<L, Len> extends Len
    ? T
    : `${T}${Slice<
        Repeat<S, Math.Subtract<L, Len>>,
        0,
        Math.Subtract<L, Len>
      >}`;
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   */
  type PadStart<
    T extends string,
    L extends number = Length<T>,
    S extends string = " ",
    Len extends number = Length<T>
  > = Math.TwoNumberGreater<L, Len> extends Len
    ? T
    : `${Slice<
        Repeat<S, Math.Subtract<L, Len>>,
        0,
        Math.Subtract<L, Len>
      >}${T}`;
  /**
   * Returns a String value that is made from count copies appended together.
   * If count is 0, the empty string is returned.
   */
  type Repeat<T extends string, N extends number> = N extends 0
    ? ""
    : `${T}${Repeat<T, Math.Subtract<N, 1>>}`;
  /**
   * Replaces text in a string, using a regular expression or search string.
   */
  type Replace<
    T extends string,
    S extends string = "",
    R extends string = ""
  > = T extends `${infer L}${S}${infer RR}`
    ? S extends ""
      ? T
      : `${L}${R}${RR}`
    : T;
  /**
   * Replace all instances of a substring in a string, using a regular expression or search string.
   */
  type ReplaceAll<
    T extends string,
    S extends string = "",
    R extends string = ""
  > = T extends `${infer L}${S}${infer RR}`
    ? S extends ""
      ? T
      : `${L}${R}${ReplaceAll<RR, S, R>}`
    : T;
  /**
   * Returns a section of a string.
   */
  type Slice<
    T extends string,
    S extends number = 0,
    E extends number = Length<T>,
    Temp1 extends any[] = [],
    Temp2 extends string = ""
  > = Math.IsNegative<S> extends true
    ? Slice<T, Math.Add<Length<T>, S>, E>
    : Math.IsNegative<E> extends true
    ? Slice<T, S, Math.Add<Length<T>, E>>
    : T extends `${SliceNormal<T, S>}${infer R}${T extends `${SliceNormal<
        T,
        E
      >}${infer RR}`
        ? RR
        : ""}`
    ? R
    : "";
  /**
   * Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
   */
  type Split<
    T extends string,
    S extends string,
    Temp extends any[] = []
  > = T extends `${infer L}${S}${infer R}`
    ? Split<R, S, [...Temp, L]>
    : [...Temp, T];
}
