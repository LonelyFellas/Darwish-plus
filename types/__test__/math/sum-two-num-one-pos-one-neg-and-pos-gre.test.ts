import { SumTwoNumberOnePositiveOneNegativeAndPositiveGreater } from "src/math";

namespace TestTypes {
  type type0 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<10, -9>, 1>
  >;
  type type1 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<100, -90>, 10>
  >;
  type type2 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<100, -80>, 20>
  >;
  type type3 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<200, -100>, 100>
  >;
  type type4 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<200, -9>, 191>
  >;
  type type5 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<300, -9>, 291>
  >;
  type type6 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<900, -9>, 891>
  >;
  type type7 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<33, -9>, 24>
  >;
  type type8 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<99, -9>, 90>
  >;
  type type9 = Expect<
    Equal<SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<19, -9>, 10>
  >;
}
