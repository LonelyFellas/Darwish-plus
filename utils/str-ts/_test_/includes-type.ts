namespace TypeTests {
  // position default 0
  type type0 = Expect<Equal<Includes<"Hello, World", "d">, true>>;
  type type1 = Expect<Equal<Includes<"Hello, World", "ld">, true>>;
  type type2 = Expect<Equal<Includes<"Hello, World", "l">, true>>;
  type type3 = Expect<Equal<Includes<"Hello, World", "World">, true>>;
  type type4 = Expect<Equal<Includes<"Hello, World", "Worl">, true>>;
  type type5 = Expect<Equal<Includes<"Hello, World", "Worl">, true>>;
  type type6 = Expect<Equal<Includes<"Hello, World", "World">, true>>;
  type type7 = Expect<Equal<Includes<"Hello, World", "Hello">, true>>;
  type type8 = Expect<Equal<Includes<"Hello, World", "Hello, World">, true>>;
  type type9 = Expect<Equal<Includes<"Hello, World", "">, true>>;
  // has position
  type type10 = Expect<Equal<Includes<"Hello, World", "H", 1>, false>>;
  type type11 = Expect<Equal<Includes<"Hello, World", "He", 2>, false>>;
  type type12 = Expect<Equal<Includes<"Hello, World", "llo", 2>, true>>;
  type type13 = Expect<Equal<Includes<"Hello, World", ", W", 12>, false>>;
  type type14 = Expect<Equal<Includes<"Hello, World", "", 12>, true>>;
  type type15 = Expect<Equal<Includes<"Hello, World", "Worl", 0>, true>>;
  type type16 = Expect<Equal<Includes<"Hello, World", "World", 0>, true>>;
  type type17 = Expect<Equal<Includes<"Hello, World", "Hello", 0>, true>>;
  type type18 = Expect<
    Equal<Includes<"Hello, World", "Hello, World", 0>, true>
  >;
  type type19 = Expect<Equal<Includes<"Hello, World", "", 0>, true>>;
}
