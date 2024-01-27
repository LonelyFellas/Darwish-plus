import type { Join, Split } from "./type";
export default class ExtendString {
  static join<L extends string, R extends string, S extends string>(
    lfs: L,
    rfs: R,
    separator: S
  ) {
    return (lfs + separator + rfs) as Join<L, R, S>;
  }
  static split<T extends string, S extends string>(str: T, separator: S) {
    return str.split(separator) as Split<T, S>;
  }
}
const testJoin = ExtendString.join("Darwish", "Yu", " ");
const testSplit = ExtendString.split("Darwish Yu Cat ", "a");
