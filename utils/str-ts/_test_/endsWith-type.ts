namespace TypeTests {
  type type0 = Expect<Equal<EndsWith<"Hello, World", "d">, true>>;
  type type1 = Expect<Equal<EndsWith<"Hello, World", "ld">, true>>;
  type type2 = Expect<Equal<EndsWith<"Hello, World", "l">, false>>;
  type type3 = Expect<Equal<EndsWith<"Hello, World", "World">, true>>;
  type type4 = Expect<Equal<EndsWith<"Hello, World", "Worl">, false>>;
  type type5 = Expect<Equal<EndsWith<"Hello, World", "Worl", 1>, true>>;
  type type6 = Expect<Equal<EndsWith<"Hello, World", "World", 1>, false>>;
  type type7 = Expect<Equal<EndsWith<"Hello, World", "Hello", 7>, true>>;
  type type8 = Expect<Equal<EndsWith<"Hello, World", "Hello, World">, true>>;
  type type9 = Expect<Equal<EndsWith<"Hello, World", "">, true>>;
}
