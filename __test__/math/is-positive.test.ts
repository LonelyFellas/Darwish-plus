import type { Math } from "src/math";

namespace TestTypes {
  type type0 = Expect<Equal<Math.IsPositive<1>, true>>;
  type type1 = Expect<Equal<Math.IsPositive<2>, true>>;
  type type2 = Expect<Equal<Math.IsPositive<100>, true>>;
  type type3 = Expect<Equal<Math.IsPositive<-1>, false>>;
  type type4 = Expect<Equal<Math.IsPositive<0>, false>>;
  type type5 = Expect<Equal<Math.IsPositive<-0>, false>>;
  type type6 = Expect<Equal<Math.IsPositive<-100>, false>>;

  // @ts-expect-error
  type type7 = Expect<Equal<Math.IsPositive<undefined>, false>>;
  // @ts-expect-error
  type type8 = Expect<Equal<Math.IsPositive<[1, 2, 3]>, false>>;
  // @ts-expect-error
  type type8 = Expect<Equal<Math.IsPositive<"darwish">, false>>;
}
