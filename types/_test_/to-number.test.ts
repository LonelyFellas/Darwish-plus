namespace TestTypes {
  type type0 = Expect<Equal<Darwish.ToNumber<"0">, 0>>;
  type type1 = Expect<Equal<Darwish.ToNumber<"1">, 1>>;
  type type2 = Expect<Equal<Darwish.ToNumber<"2">, 2>>;
  type type3 = Expect<Equal<Darwish.ToNumber<0>, 0>>;
  type type4 = Expect<Equal<Darwish.ToNumber<-0>, 0>>;
  type type5 = Expect<Equal<Darwish.ToNumber<2>, 2>>;
  type type6 = Expect<Equal<Darwish.ToNumber<{ name: string }>, never>>;
  type type7 = Expect<Equal<Darwish.ToNumber<"Darwish">, never>>;
  type type8 = Expect<Equal<Darwish.ToNumber<"2024-1-1">, never>>;
  type type9 = Expect<Equal<Darwish.ToNumber<[1, 3, 4, 5]>, never>>;
}
