namespace TypeTests {
  type test0 = Expect<Equal<Darwish.Iteraor<0>, []>>;
  type test1 = Expect<Equal<Darwish.Iteraor<1>, [0]>>;
  type test2 = Expect<Equal<Darwish.Iteraor<2>, [0, 1]>>;
  type test3 = Expect<Equal<Darwish.Iteraor<3>, [0, 1, 2]>>;
  type test4 = Expect<Equal<Darwish.Iteraor<4>, [0, 1, 2, 3]>>;
  type test5 = Expect<Equal<Darwish.Iteraor<5>, [0, 1, 2, 3, 4]>>;
  type test6 = Expect<Equal<Darwish.Iteraor<6>, [0, 1, 2, 3, 4, 5]>>;
  type test7 = Expect<Equal<Darwish.Iteraor<7>, [0, 1, 2, 3, 4, 5, 6]>>;
  type test8 = Expect<Equal<Darwish.Iteraor<8>, [0, 1, 2, 3, 4, 5, 6, 7]>>;
  type test9 = Expect<Equal<Darwish.Iteraor<9>, [0, 1, 2, 3, 4, 5, 6, 7, 8]>>;
}
