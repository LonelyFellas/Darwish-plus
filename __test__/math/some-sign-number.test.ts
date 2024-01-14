import type { Math } from "../../src/math";

namespace TestTypes {
  type type0 = Expect<Equal<Math.IsSomeSignNumber<1, 1>, true>>;
  type type1 = Expect<Equal<Math.IsSomeSignNumber<-1, -1>, true>>;
  type type2 = Expect<Equal<Math.IsSomeSignNumber<0, 0>, true>>;
  type type3 = Expect<Equal<Math.IsSomeSignNumber<0, 1>, false>>;
  type type4 = Expect<Equal<Math.IsSomeSignNumber<1, 0>, false>>;
  type type5 = Expect<Equal<Math.IsSomeSignNumber<100, -100>, false>>;
  type type6 = Expect<Equal<Math.IsSomeSignNumber<-0, 0>, true>>;
  type type7 = Expect<Equal<Math.IsSomeSignNumber<10, 10>, true>>;
  type type8 = Expect<Equal<Math.IsSomeSignNumber<101, 110>, true>>;
  type type9 = Expect<Equal<Math.IsSomeSignNumber<-110, 110>, false>>;
}
