import type { Math } from "../../src/math";

namespace TestTypes {
  type type0 = Expect<Equal<Math.TwoNumberGreater<1, 2>, 2>>;
  type type1 = Expect<Equal<Math.TwoNumberGreater<2, 1>, 2>>;
  type type2 = Expect<Equal<Math.TwoNumberGreater<0, 1>, 1>>;
  type type3 = Expect<Equal<Math.TwoNumberGreater<1, 0>, 1>>;
  type type4 = Expect<Equal<Math.TwoNumberGreater<-1, 0>, 0>>;
  type type5 = Expect<Equal<Math.TwoNumberGreater<0, -1>, 0>>;
  type type6 = Expect<Equal<Math.TwoNumberGreater<-1, -2>, -1>>;
  type type7 = Expect<Equal<Math.TwoNumberGreater<-2, -1>, -1>>;
  type type8 = Expect<Equal<Math.TwoNumberGreater<100, 99>, 100>>;
  type type9 = Expect<Equal<Math.TwoNumberGreater<99, 100>, 100>>;
  type type10 = Expect<Equal<Math.TwoNumberGreater<-100, -99>, -99>>;
  type type11 = Expect<Equal<Math.TwoNumberGreater<-99, -100>, -99>>;
  type type12 = Expect<Equal<Math.TwoNumberGreater<0, -100>, 0>>;
  type type13 = Expect<Equal<Math.TwoNumberGreater<-100, 0>, 0>>;
  type type14 = Expect<Equal<Math.TwoNumberGreater<0, -0>, 0>>;
  type type15 = Expect<Equal<Math.TwoNumberGreater<1, 1>, 1>>;
  type type16 = Expect<Equal<Math.TwoNumberGreater<-1, -1>, -1>>;
}
