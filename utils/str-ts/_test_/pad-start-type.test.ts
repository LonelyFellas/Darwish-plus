// prettier-ignore
namespace TypeTests {
  // max length less then string's length
  type type0 = Expect<Equal<PadStart<"Hello, World">, "Hello, World">>;
  type type1 = Expect<Equal<PadStart<"Hello, World", 12>, "Hello, World">>;
  type type2 = Expect<Equal<PadStart<"Hello, World", 11>, "Hello, World">>;
  type type3 = Expect<Equal<PadStart<"Hello, World", 10>, "Hello, World">>;
  type type4 = Expect<Equal<PadStart<"Hello, World", 9>, "Hello, World">>;
  type type5 = Expect<Equal<PadStart<"Hello, World", 8>, "Hello, World">>;
  type type6 = Expect<Equal<PadStart<"Hello, World", 7>, "Hello, World">>;
  type type7 = Expect<Equal<PadStart<"Hello, World", 6>, "Hello, World">>;
  type type8 = Expect<Equal<PadStart<"Hello, World", 5>, "Hello, World">>;
  type type9 = Expect<Equal<PadStart<"Hello, World", 4>, "Hello, World">>;
  // max length greater then string's length, but has no fillString
  type type10 = Expect<Equal<PadStart<"Hello, World", 13>, " Hello, World">>;
  type type11 = Expect<Equal<PadStart<"Hello, World", 14>, "  Hello, World">>;
  type type12 = Expect<Equal<PadStart<"Hello, World", 15>, "   Hello, World">>;
  type type13 = Expect<Equal<PadStart<"Hello, World", 16>, "    Hello, World">>;
  type type14 = Expect<Equal<PadStart<"Hello, World", 17>, "     Hello, World">>;
  type type15 = Expect<Equal<PadStart<"Hello, World", 18>, "      Hello, World">>;
  type type16 = Expect<Equal<PadStart<"Hello, World", 19>, "       Hello, World">>;
  type type17 = Expect<Equal<PadStart<"Hello, World", 20>, "        Hello, World">>;
  type type18 = Expect<Equal<PadStart<"Hello, World", 21>, "         Hello, World">>;
  type type19 = Expect<Equal<PadStart<"Hello, World", 22>, "          Hello, World">>;
  // max length greater then string's length, and has fillString
  type type20 = Expect<Equal<PadStart<"Hello, World", 13, "123">, "1Hello, World">>;
  type type21 = Expect<Equal<PadStart<"Hello, World", 14, "123">, "12Hello, World">>;
  type type22 = Expect<Equal<PadStart<"Hello, World", 15, "123">, "123Hello, World">>;
  type type23 = Expect<Equal<PadStart<"Hello, World", 16, "123">, "1231Hello, World">>;
  type type24 = Expect<Equal<PadStart<"Hello, World", 17, "123">, "12312Hello, World">>;
  type type25 = Expect<Equal<PadStart<"Hello, World", 18, "123">, "123123Hello, World">>;
  type type26 = Expect<Equal<PadStart<"Hello, World", 19, "123">, "1231231Hello, World">>;
  type type27 = Expect<Equal<PadStart<"Hello, World", 20, "123">, "12312312Hello, World">>;
  type type28 = Expect<Equal<PadStart<"Hello, World", 21, "123">, "123123123Hello, World">>;
  type type29 = Expect<Equal<PadStart<"Hello, World", 22, "123">, "1231231231Hello, World">>;
}
