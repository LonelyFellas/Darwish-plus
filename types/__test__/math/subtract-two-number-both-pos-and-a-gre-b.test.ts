import { SubtractTwoNumberBothPositiveAndAGreaterB } from "src/math";

namespace TestTypes {
  type type0 = Expect<
    Equal<SubtractTwoNumberBothPositiveAndAGreaterB<3, 1>, 2>
  >;
  type type1 = Expect<
    Equal<SubtractTwoNumberBothPositiveAndAGreaterB<3, 0>, 3>
  >;
  type type2 = Expect<
    Equal<SubtractTwoNumberBothPositiveAndAGreaterB<100, 1>, 99>
  >;
}
