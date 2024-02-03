// prettier-ignore
namespace TestTypes {
  // max length less then string's length
  type type0 = Expect<Equal<PadEnd<"Hello, World">, "Hello, World">>;
  type type1 = Expect<Equal<PadEnd<"Hello, World", 12>, "Hello, World">>;
  type type2 = Expect<Equal<PadEnd<"Hello, World", 11>, "Hello, World">>;
  type type3 = Expect<Equal<PadEnd<"Hello, World", 10>, "Hello, World">>;
  type type4 = Expect<Equal<PadEnd<"Hello, World", 9>, "Hello, World">>;
  type type5 = Expect<Equal<PadEnd<"Hello, World", 8>, "Hello, World">>;
  type type6 = Expect<Equal<PadEnd<"Hello, World", 7>, "Hello, World">>;
  type type7 = Expect<Equal<PadEnd<"Hello, World", 6>, "Hello, World">>;
  type type8 = Expect<Equal<PadEnd<"Hello, World", 5>, "Hello, World">>;
  type type9 = Expect<Equal<PadEnd<"Hello, World", 4>, "Hello, World">>;
  // max length greater then string's length, but has no fillString
  type type10 = Expect<Equal<PadEnd<"Hello, World", 13>, "Hello, World ">>;
  type type11 = Expect<Equal<PadEnd<"Hello, World", 14>, "Hello, World  ">>;
  type type12 = Expect<Equal<PadEnd<"Hello, World", 15>, "Hello, World   ">>;
  type type13 = Expect<Equal<PadEnd<"Hello, World", 16>, "Hello, World    ">>;
  type type14 = Expect<Equal<PadEnd<"Hello, World", 17>, "Hello, World     ">>;
  type type15 = Expect<Equal<PadEnd<"Hello, World", 18>, "Hello, World      ">>;
  type type16 = Expect<Equal<PadEnd<"Hello, World", 19>, "Hello, World       ">>;
  type type17 = Expect<Equal<PadEnd<"Hello, World", 20>, "Hello, World        ">>;
  type type18 = Expect<Equal<PadEnd<"Hello, World", 21>, "Hello, World         ">>;
  type type19 = Expect<Equal<PadEnd<"Hello, World", 22>, "Hello, World          ">>;
  // max length greater then string's length, and has fillString
  type type20 = Expect<Equal<PadEnd<"Hello, World", 13, "123">, "Hello, World1">>;
  type type21 = Expect<Equal<PadEnd<"Hello, World", 14, "123">, "Hello, World12">>;
  type type22 = Expect<Equal<PadEnd<"Hello, World", 15, "123">, "Hello, World123">>;
  type type23 = Expect<Equal<PadEnd<"Hello, World", 16, "123">, "Hello, World1231">>;
  type type24 = Expect<Equal<PadEnd<"Hello, World", 17, "123">, "Hello, World12312">>;
  type type25 = Expect<Equal<PadEnd<"Hello, World", 18, "123">, "Hello, World123123">>;
  type type26 = Expect<Equal<PadEnd<"Hello, World", 19, "123">, "Hello, World1231231">>;
  type type27 = Expect<Equal<PadEnd<"Hello, World", 20, "123">, "Hello, World12312312">>;
  type type28 = Expect<Equal<PadEnd<"Hello, World", 21, "123">, "Hello, World123123123">>;
  type type29 = Expect<Equal<PadEnd<"Hello, World", 22, "123">, "Hello, World1231231231">>;

}
