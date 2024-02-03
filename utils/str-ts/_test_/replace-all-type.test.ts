// prettier-ignore
namespace TypeTests {
  type type0 = Expect<Equal<ReplaceAll<"Hello, World", "World", "Darwish">, "Hello, Darwish">>;
  type type1 = Expect<Equal<ReplaceAll<"Hello, World", "Hello", "Darwish">, "Darwish, World">>;
  type type2 = Expect<Equal<ReplaceAll<"Hello, World", "Darwish", "World">, "Hello, World">>;
  type type3 = Expect<Equal<ReplaceAll<"Hello, World", "Darwish", "Darwish">, "Hello, World">>;
  type type4 = Expect<Equal<ReplaceAll<"Hello, World", "Hello", "Hello">, "Hello, World">>;
  type type5 = Expect<Equal<ReplaceAll<"Hello, World", "World", "World">, "Hello, World">>;
  type type6 = Expect<Equal<ReplaceAll<"Hello, World", "Hello", "World">, "World, World">>;
  type type7 = Expect<Equal<ReplaceAll<"Hello, World", "World", "Hello">, "Hello, Hello">>;
  type type8 = Expect<Equal<ReplaceAll<"Hello, World", "Hello", "">, ", World">>;
  type type9 = Expect<Equal<ReplaceAll<"Hello, World", "World", "">, "Hello, ">>;
  type type10 = Expect<Equal<ReplaceAll<"Hello, World", "", "Darwish">, "Hello, World">>;
  type type11 = Expect<Equal<ReplaceAll<"Hello, World", "Hello, World", "Darwish">, "Darwish">>;
  type type12 = Expect<Equal<ReplaceAll<"Hello, World", "Hello, World", "">, "">>;
  type type13 = Expect<Equal<ReplaceAll<"Hello, World", "Hello, World", "Hello, World">, "Hello, World">>;
  type type14 = Expect<Equal<ReplaceAll<"Hello, World", "o", "x">, "Hellx, Wxrld">>;
  type type15 = Expect<Equal<ReplaceAll<"Hello, World", "l", "x">, "Hexxo, Worxd">>;
  type type16 = Expect<Equal<ReplaceAll<"Hello, World", "l", "ll">, "Hellllo, Worlld">>;
  type type17 = Expect<Equal<ReplaceAll<"Hello, World", "l", "">, "Heo, Word">>;
  type type18 = Expect<Equal<ReplaceAll<"Hello, World", "l", "lll">, "Hellllllo, Worllld">>;
  type type19 = Expect<Equal<ReplaceAll<"Hello, World", "l", "llll">, "Hellllllllo, Worlllld">>;
}
