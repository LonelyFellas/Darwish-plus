import type { Math } from "../../src/math";
namespace TestTypes {
  type type0 = Expect<Equal<Math.IsNegative<1>, false>>;
  type type1 = Expect<Equal<Math.IsNegative<2>, false>>;
  type type2 = Expect<Equal<Math.IsNegative<3>, false>>;
  type type3 = Expect<Equal<Math.IsNegative<0>, false>>;
  type type4 = Expect<Equal<Math.IsNegative<-0>, false>>;
  type type5 = Expect<Equal<Math.IsNegative<-1>, true>>;
  type type6 = Expect<Equal<Math.IsNegative<-2>, true>>;
  type type7 = Expect<Equal<Math.IsNegative<-3>, true>>;
  // @ts-expect-error
  type type8 = Expect<Equal<Math.IsNegative<undefined>, false>>;
  // @ts-expect-error
  type type9 = Expect<Equal<Math.IsNegative<[1, 2, 3]>, false>>;
}
