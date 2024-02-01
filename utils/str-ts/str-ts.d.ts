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
  type EndsWith<T extends string, S extends string, P extends number> = Slice<
    T,
    0,
    P
  > extends `${infer R}${S}`
    ? true
    : false;
  /**
   * Returns a section of a string.
   */
  type Slice<
    T extends string,
    S extends number = 0,
    E extends number = T["length"],
    Temp1 extends any[] = [],
    Temp2 extends string = ""
  > = T extends `${infer F}${infer R}`
    ? Math.IsNonNegativeNum<S> extends true
      ? S extends Temp1["length"]
        ? Slice<R, S, R, Temp1, `${Temp2}${F}`>
        : Slice<R, S, E, [...Temp1, F], Temp2>
      : Temp2
    : Temp2;
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
// T extends `${infer F}${infer R}`
//   ? Temp1["length"] extends S
//     ? Temp2["length"] extends E
//       ? Join<Temp2>
//       : Slice<R, S, E, Temp1, [...Temp2, F]>
//     : Slice<R, S, E, [...Temp1, F], Temp2>
//   : "";
// type B = Slice<"darwish", 0, 6>;
