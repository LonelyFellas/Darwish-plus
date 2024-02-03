// prettier-ignore
namespace TypeTests {
  type type0 = Expect<Equal<Repeat<"Hello, World", 0>, "">>;
  type type1 = Expect<Equal<Repeat<"Hello, World", 1>, "Hello, World">>;
  type type2 = Expect<Equal<Repeat<"Hello, World", 2>, "Hello, WorldHello, World">>;
  type type3 = Expect<Equal<Repeat<"Hello, World", 3>, "Hello, WorldHello, WorldHello, World">>;
  type type4 = Expect<Equal<Repeat<"Hello, World", 4>, "Hello, WorldHello, WorldHello, WorldHello, World">>;
  type type5 = Expect<Equal<Repeat<"Hello, World", 5>, "Hello, WorldHello, WorldHello, WorldHello, WorldHello, World">>;
  type type6 = Expect<Equal<Repeat<"Hello, World", 6>, "Hello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, World">>;
  type type7 = Expect<Equal<Repeat<"Hello, World", 7>, "Hello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, World">>;
  type type8 = Expect<Equal<Repeat<"Hello, World", 8>, "Hello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, World">>;
  type type9 = Expect<Equal<Repeat<"Hello, World", 9>, "Hello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, WorldHello, World">>;
}
