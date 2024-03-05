namespace TypeTests {
  type test1 = Expect<Equal<CharAt<"some nice string", 5>, "n">>;
  type test2 = Expect<Equal<CharAt<string, 5>, string>>;
  type test3 = Expect<Equal<CharAt<Uppercase<string>, 5>, string>>;
  type test4 = Expect<Equal<CharAt<"some nice string", number>, string>>;

  // TODO: index greater than Length<T>
  type test5 = Expect<Equal<CharAt<"some nice string", 100>, "">>;
}

type a = CharAt<string, 5>;
type c = Uppercase<string>;
