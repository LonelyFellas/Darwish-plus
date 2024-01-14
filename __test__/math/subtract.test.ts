import { Math } from "src/math";

namespace TestTypes {
  type type1 = Expect<Equal<Math.Subtract<1, 1>, 0>>;
  type type2 = Expect<Equal<Math.Subtract<-1, -1>, 0>>;
  type type3 = Expect<Equal<Math.Subtract<-0, 0>, 0>>;
  type type4 = Expect<Equal<Math.Subtract<-100, -100>, 0>>;
  type type5 = Expect<Equal<Math.Subtract<100, 100>, 0>>;
  type type6 = Expect<Equal<Math.Subtract<100, 100>, 0>>;
  type type7 = Expect<Equal<Math.Subtract<100, 0>, 100>>;
  type type8 = Expect<Equal<Math.Subtract<0, 100>, -100>>;
  type type9 = Expect<Equal<Math.Subtract<0, -100>, 100>>;
  type type10 = Expect<Equal<Math.Subtract<-100, -0>, -100>>;
  type type11 = Expect<Equal<Math.Subtract<-100, 90>, -190>>;
  type type12 = Expect<Equal<Math.Subtract<-33, 22>, -55>>;
  type type13 = Expect<Equal<Math.Subtract<-55, 54>, -109>>;
  type type14 = Expect<Equal<Math.Subtract<-10, 20>, -30>>;
  type type15 = Expect<Equal<Math.Subtract<-100, 200>, -300>>;
  type type16 = Expect<Equal<Math.Subtract<-10, 11>, -21>>;
  type type17 = Expect<Equal<Math.Subtract<10, -11>, 21>>;
  type type18 = Expect<Equal<Math.Subtract<10, -119>, 129>>;
  type type19 = Expect<Equal<Math.Subtract<10, -301>, 311>>;
  type type20 = Expect<Equal<Math.Subtract<10, -1>, 11>>;
  type type21 = Expect<Equal<Math.Subtract<100, -1>, 101>>;
  type type22 = Expect<Equal<Math.Subtract<291, -290>, 581>>;
}
