namespace TypeTests {
  type test0 = Expect<Equal<Darwish.ToString<"">, "">>;
  type test1 = Expect<Equal<Darwish.ToString<"darwish">, "darwish">>;
  type test2 = Expect<Equal<Darwish.ToString<"[1, 2, 3]">, "[1, 2, 3]">>;
  type test3 = Expect<Equal<Darwish.ToString<-1>, "-1">>;
  type test4 = Expect<Equal<Darwish.ToString<2>, "2">>;
  type test5 = Expect<Equal<Darwish.ToString<3>, "3">>;
  type test6 = Expect<Equal<Darwish.ToString<{ name: string }>, never>>;
  type test7 = Expect<Equal<Darwish.ToString<[1, 2, 3, 4]>, never>>;
  type test8 = Expect<Equal<Darwish.ToString<"2020-2-2">, "2020-2-2">>;
  type test9 = Expect<Equal<Darwish.ToString<10000000>, "10000000">>;
}
