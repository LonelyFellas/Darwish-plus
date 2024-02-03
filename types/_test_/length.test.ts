namespace TypeTests {
  // string
  type type0 = Expect<Equal<Darwish.Length<"Hello, World">, 12>>;
  type type1 = Expect<Equal<Darwish.Length<"Hello, Worl">, 11>>;
  type type2 = Expect<Equal<Darwish.Length<"Hello, Wor">, 10>>;
  type type3 = Expect<Equal<Darwish.Length<"Hello, Wo">, 9>>;
  type type4 = Expect<Equal<Darwish.Length<"Hello, W">, 8>>;
  type type5 = Expect<Equal<Darwish.Length<"Hello, ">, 7>>;
  type type6 = Expect<Equal<Darwish.Length<"Hello">, 5>>;
  type type7 = Expect<Equal<Darwish.Length<"Hell">, 4>>;
  type type8 = Expect<Equal<Darwish.Length<"Hel">, 3>>;
  type type9 = Expect<Equal<Darwish.Length<"">, 0>>;
  // array
  type type10 = Expect<Equal<Darwish.Length<[]>, 0>>;
  type type11 = Expect<Equal<Darwish.Length<[1]>, 1>>;
  type type12 = Expect<Equal<Darwish.Length<[1, 2]>, 2>>;
  type type13 = Expect<Equal<Darwish.Length<[1, 2, 3]>, 3>>;
  type type14 = Expect<Equal<Darwish.Length<[1, 2, 3, 4]>, 4>>;
  type type15 = Expect<Equal<Darwish.Length<[1, 2, 3, 4, 5]>, 5>>;
  type type16 = Expect<Equal<Darwish.Length<[1, 2, 3, 4, 5, 6]>, 6>>;
  type type17 = Expect<Equal<Darwish.Length<[1, 2, 3, 4, 5, 6, 7]>, 7>>;
  type type18 = Expect<Equal<Darwish.Length<[1, 2, 3, 4, 5, 6, 7, 8]>, 8>>;
  type type19 = Expect<Equal<Darwish.Length<[1, 2, 3, 4, 5, 6, 7, 8, 9]>, 9>>;
}
