namespace TypeTests {
  type test1 = Expect<Equal<StartsWith<"abc", "a">, true>>;
  type test2 = Expect<Equal<StartsWith<"abc", "b", 1>, true>>;
  type test3 = Expect<Equal<StartsWith<Uppercase<string>, "a">, boolean>>;
  type test4 = Expect<Equal<StartsWith<string, "a">, boolean>>;
  type test5 = Expect<Equal<StartsWith<"abc", string>, boolean>>;
  type test6 = Expect<Equal<StartsWith<"abc", "a", number>, boolean>>;
}
