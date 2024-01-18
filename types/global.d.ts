/// <reference path="./src/math.d.ts" />
/// <reference path="./src/darwish.d.ts" />

declare global {
  // TEST UTILITIES
  type Expect<T extends true> = T;
  type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
    ? 1
    : 2
    ? true
    : [A, "should equal", B];
}
export {};
