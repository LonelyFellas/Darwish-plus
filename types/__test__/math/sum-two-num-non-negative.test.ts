import type { SumTwoNumberNonNegative } from "src/math";

namespace TestTypes {
  type type0 = Expect<Equal<SumTwoNumberNonNegative<0, 0>, 0>>;
  type type1 = Expect<Equal<SumTwoNumberNonNegative<1, 0>, 1>>;
  type type2 = Expect<Equal<SumTwoNumberNonNegative<0, 3>, 3>>;
  type type3 = Expect<Equal<SumTwoNumberNonNegative<1, 3>, 4>>;
  type type4 = Expect<Equal<SumTwoNumberNonNegative<4, 1>, 5>>;
  type type5 = Expect<Equal<SumTwoNumberNonNegative<12, 20>, 32>>;
  type type6 = Expect<Equal<SumTwoNumberNonNegative<100, 220>, 320>>;
  type type7 = Expect<Equal<SumTwoNumberNonNegative<10, 1>, 11>>;
  type type8 = Expect<Equal<SumTwoNumberNonNegative<0, 100>, 100>>;
  type type9 = Expect<Equal<SumTwoNumberNonNegative<100, 0>, 100>>;
}
