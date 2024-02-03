// prettier-ignore
namespace TypeTests {
  type type0 = Expect<Equal<Replace<"Hello, World", "World", "Darwish">, "Hello, Darwish">>;
  type type1 = Expect<Equal<Replace<"Hello, World", "Hello", "Darwish">, "Darwish, World">>;
  type type2 = Expect<Equal<Replace<"Hello, World", "Darwish", "World">, "Hello, World">>;
  type type3 = Expect<Equal<Replace<"Hello, World", "Darwish", "Darwish">, "Hello, World">>;
  type type4 = Expect<Equal<Replace<"Hello, World", "Hello", "Hello">, "Hello, World">>;
  type type5 = Expect<Equal<Replace<"Hello, World", "World", "World">, "Hello, World">>;
  type type6 = Expect<Equal<Replace<"Hello, World", "Hello", "World">, "World, World">>;
  type type7 = Expect<Equal<Replace<"Hello, World", "World", "Hello">, "Hello, Hello">>;
  type type8 = Expect<Equal<Replace<"Hello, World", "Hello", "">, ", World">>;
  type type9 = Expect<Equal<Replace<"Hello, World", "World", "">, "Hello, ">>;
  type type10 = Expect<Equal<Replace<"Hello, World", "", "Darwish">, "Hello, World">>;
  type type11 = Expect<Equal<Replace<"Hello, World", "Hello, World", "Darwish">, "Darwish">>;
  type type12 = Expect<Equal<Replace<"Hello, World", "Hello, World", "">, "">>;
  type type13 = Expect<Equal<Replace<"Hello, World", "Hello, World", "Hello, World">, "Hello, World">>;
  type type14 = Expect<Equal<Replace<"Hello, World", "o", "x">, "Hellx, World">>;
  type type15 = Expect<Equal<Replace<"Hello, World", "l", "x">, "Hexlo, World">>;
  type type16 = Expect<Equal<Replace<"Hello, World", "l", "ll">, "Helllo, World">>;
  type type17 = Expect<Equal<Replace<"Hello, World", "l", "">, "Helo, World">>;
  type type18 = Expect<Equal<Replace<"Hello, World", "l", "lll">, "Hellllo, World">>;
  type type19 = Expect<Equal<Replace<"Hello, World", "l", "llll">, "Helllllo, World">>;
}
