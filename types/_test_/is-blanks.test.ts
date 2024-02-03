namespace TypeTests {
  type type0 = Expect<Equal<Darwish.IsBlanks<"">, true>>;
  type type1 = Expect<Equal<Darwish.IsBlanks<"Hello, World">, false>>;
  type type2 = Expect<Equal<Darwish.IsBlanks<[]>, true>>;
  type type3 = Expect<Equal<Darwish.IsBlanks<[1, 2, 3]>, false>>;
  type type4 = Expect<Equal<Darwish.IsBlanks<{}>, true>>;
  type type5 = Expect<Equal<Darwish.IsBlanks<{ a: 1 }>, false>>;
  type type6 = Expect<Equal<Darwish.IsBlanks<0>, false>>;
  type type7 = Expect<Equal<Darwish.IsBlanks<null>, true>>;
  type type8 = Expect<Equal<Darwish.IsBlanks<undefined>, true>>;
  type type9 = Expect<Equal<Darwish.IsBlanks<true>, false>>;
  type type10 = Expect<Equal<Darwish.IsBlanks, true>>;
}
