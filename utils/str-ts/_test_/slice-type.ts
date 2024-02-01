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
  type type21 = Expect<Equal<Slice<"Hello, World", -1>, "Hello Worl">>;
}
type A = Slice<"Hello World", -1>;
type B = Slice<"Hello World", 0, Math.Add<11, -1>>;
type B1 = Math.Add<10, -1>;
