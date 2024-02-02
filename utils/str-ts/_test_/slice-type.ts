namespace TypeTests {
  // start 非负数
  type type0 = Expect<Equal<Slice<"Hello, World">, "Hello, World">>;
  type type1 = Expect<Equal<Slice<"Hello, World", 0>, "Hello, World">>;
  type type2 = Expect<Equal<Slice<"Hello, World", 1>, "ello, World">>;
  type type3 = Expect<Equal<Slice<"Hello, World", 2>, "llo, World">>;
  type type4 = Expect<Equal<Slice<"Hello, World", 3>, "lo, World">>;
  type type5 = Expect<Equal<Slice<"Hello, World", 4>, "o, World">>;
  type type6 = Expect<Equal<Slice<"Hello, World", 5>, ", World">>;
  type type7 = Expect<Equal<Slice<"Hello, World", 6>, " World">>;
  type type8 = Expect<Equal<Slice<"Hello, World", 7>, "World">>;
  type type9 = Expect<Equal<Slice<"Hello, W", 8>, "">>;
  // start end 非负数
  type type10 = Expect<Equal<Slice<"Hello, World", 0, 0>, "">>;
  type type11 = Expect<Equal<Slice<"Hello, World", 0, 1>, "H">>;
  type type12 = Expect<Equal<Slice<"Hello, World", 0, 2>, "He">>;
  type type13 = Expect<Equal<Slice<"Hello, World", 0, 3>, "Hel">>;
  type type14 = Expect<Equal<Slice<"Hello, World", 0, 4>, "Hell">>;
  type type15 = Expect<Equal<Slice<"Hello, World", 0, 5>, "Hello">>;
  type type16 = Expect<Equal<Slice<"Hello, World", 0, 6>, "Hello,">>;
  type type17 = Expect<Equal<Slice<"Hello, World", 0, 7>, "Hello, ">>;
  type type18 = Expect<Equal<Slice<"Hello, World", 0, 8>, "Hello, W">>;
  type type19 = Expect<Equal<Slice<"Hello, Wo", 0, 9>, "Hello, Wo">>;
  // start 负数
  type type20 = Expect<Equal<Slice<"Hello, World", -1>, "d">>;
  type type21 = Expect<Equal<Slice<"Hello, World", -2>, "ld">>;
  type type22 = Expect<Equal<Slice<"Hello, World", -3>, "rld">>;
  type type23 = Expect<Equal<Slice<"Hello, World", -4>, "orld">>;
  type type24 = Expect<Equal<Slice<"Hello, World", -5>, "World">>;
  type type25 = Expect<Equal<Slice<"Hello, World", -6>, " World">>;
  type type26 = Expect<Equal<Slice<"Hello, World", -7>, ", World">>;
  type type27 = Expect<Equal<Slice<"Hello, World", -8>, "o, World">>;
  type type28 = Expect<Equal<Slice<"Hello, World", -12>, "Hello, World">>;
  type type29 = Expect<Equal<Slice<"Hello, World", -0>, "Hello, World">>;
  // end 负数
  type type30 = Expect<Equal<Slice<"Hello, World", 0, -1>, "Hello, Worl">>;
  type type31 = Expect<Equal<Slice<"Hello, World", 0, -2>, "Hello, Wor">>;
  type type32 = Expect<Equal<Slice<"Hello, World", 0, -3>, "Hello, Wo">>;
  type type33 = Expect<Equal<Slice<"Hello, World", 0, -4>, "Hello, W">>;
  type type34 = Expect<Equal<Slice<"Hello, World", 0, -5>, "Hello, ">>;
  type type35 = Expect<Equal<Slice<"Hello, World", 0, -6>, "Hello,">>;
  type type36 = Expect<Equal<Slice<"Hello, World", 0, -7>, "Hello">>;
  type type37 = Expect<Equal<Slice<"Hello, World", 0, -8>, "Hell">>;
  type type38 = Expect<Equal<Slice<"Hello, World", 0, -12>, "">>;
  type type39 = Expect<Equal<Slice<"Hello, World", 0, -0>, "">>;
  // start end 负数
  type type40 = Expect<Equal<Slice<"Hello, World", -1, -0>, "">>;
  type type41 = Expect<Equal<Slice<"Hello, World", -1, -1>, "">>;
  type type42 = Expect<Equal<Slice<"Hello, World", -2, -1>, "l">>;
  type type43 = Expect<Equal<Slice<"Hello, World", -3, -2>, "r">>;
  type type44 = Expect<Equal<Slice<"Hello, World", -5, -3>, "Wo">>;
  type type45 = Expect<Equal<Slice<"Hello, World", -6, -3>, " Wo">>;
  type type46 = Expect<Equal<Slice<"Hello, World", -8, -1>, "o, Worl">>;
  type type47 = Expect<Equal<Slice<"Hello, World", -7, -1>, ", Worl">>;
  type type48 = Expect<Equal<Slice<"Hello, World", -12, -12>, "">>;
  type type49 = Expect<Equal<Slice<"Hello, World", -12, -0>, "">>;
}
