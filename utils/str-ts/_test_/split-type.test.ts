// prettier-ignore
namespace TestTypes {
  type type0 = Expect<Equal<Split<"Hello", "">, ["H", "e", "l", "l", "o"]>>;
  type type1 = Expect<Equal<Split<"Hello, World", ", ">, ["Hello", "World"]>>;
  type type2 = Expect<Equal<Split<"Hello, World", " ">, ["Hello,", "World"]>>;
  type type3 = Expect<Equal<Split<"Hello, World", "o">, ["Hell", ", W", "rld"]>>;
  type type4 = Expect<Equal<Split<"Hello, World", "o ">, ["Hello, World"]>>;
  type type5 = Expect<Equal<Split<"Hello, World", "o,">, ["Hell", " World"]>>;
  type type6 = Expect<Equal<Split<"Hello, World", "o, ">, ["Hell", "World"]>>;
  type type7 = Expect<Equal<Split<"Hello, World", "o, W">, ["Hell", "orld"]>>;
  type type8 = Expect<Equal<Split<"Hello, World", "Hello">, ["", ", World"]>>;
  type type9 = Expect<Equal<Split<"Hello, World", "World">, ["Hello, ", ""]>>;
  type type10 = Expect<Equal<Split<"Hello, World", "Hello, World">, ["", ""]>>;
}
