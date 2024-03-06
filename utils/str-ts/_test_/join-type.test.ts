namespace TypeTests {
  type test1 = Expect<
    Equal<Join<["some", "nice", "string"], " ">, "some nice string">
  >;
  type test2 = Expect<Equal<Join<string[], " ">, string>>;
  type test3 = Expect<Equal<Join<Uppercase<string>[], " ">, string>>;
  type test4 = Expect<Equal<Join<["some", "nice", "string"], string>, string>>;
}
