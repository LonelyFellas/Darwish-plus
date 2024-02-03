// prettier-ignore
namespace TypeTests {
  type type0 = Expect<Equal<Darwish.StrToArr<"Hello, World">, ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]>>;
  type type1 = Expect<Equal<Darwish.StrToArr<"Hello, Worl">, ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l"]>>;
  type type2 = Expect<Equal<Darwish.StrToArr<"Hello, Wor">, ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r"]>>;
  type type3 = Expect<Equal<Darwish.StrToArr<"Hello, Wo">, ["H", "e", "l", "l", "o", ",", " ", "W", "o"]>>;
  type type4 = Expect<Equal<Darwish.StrToArr<"Hello, W">, ["H", "e", "l", "l", "o", ",", " ", "W"]>>;
  type type5 = Expect<Equal<Darwish.StrToArr<"Hello, ">, ["H", "e", "l", "l", "o", ",", " "]>>;
  type type6 = Expect<Equal<Darwish.StrToArr<"Hello">, ["H", "e", "l", "l", "o"]>>;
  type type7 = Expect<Equal<Darwish.StrToArr<"Hell">, ["H", "e", "l", "l"]>>;
  type type8 = Expect<Equal<Darwish.StrToArr<"Hel">, ["H", "e", "l"]>>;
  type type9 = Expect<Equal<Darwish.StrToArr<"">, []>>;
}
