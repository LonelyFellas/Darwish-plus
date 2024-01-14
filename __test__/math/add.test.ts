import { Math } from "src/math";

namespace TestTypes {
  type type1 = Expect<Equal<Math.Add<1, 1>, 2>>;
  type type2 = Expect<Equal<Math.Add<-1, -1>, -2>>;
  type type3 = Expect<Equal<Math.Add<-0, 0>, 0>>;
  type type4 = Expect<Equal<Math.Add<-100, -100>, -200>>;
  type type5 = Expect<Equal<Math.Add<100, 100>, 200>>;
  type type6 = Expect<Equal<Math.Add<100, 100>, 200>>;
  type type7 = Expect<Equal<Math.Add<100, 0>, 100>>;
  type type8 = Expect<Equal<Math.Add<0, 100>, 100>>;
  type type9 = Expect<Equal<Math.Add<0, -100>, -100>>;
  type type10 = Expect<Equal<Math.Add<-100, -0>, -100>>;
  type type11 = Expect<Equal<Math.Add<-100, 90>, -10>>;
  type type12 = Expect<Equal<Math.Add<-33, 22>, -11>>;
  type type13 = Expect<Equal<Math.Add<-55, 54>, -1>>;
  type type14 = Expect<Equal<Math.Add<-10, 20>, 10>>;
  type type15 = Expect<Equal<Math.Add<-100, 200>, 100>>;
  type type16 = Expect<Equal<Math.Add<-10, 11>, 1>>;
  type type17 = Expect<Equal<Math.Add<10, -11>, -1>>;
  type type18 = Expect<Equal<Math.Add<10, -119>, -109>>;
  type type19 = Expect<Equal<Math.Add<10, -301>, -291>>;
  type type20 = Expect<Equal<Math.Add<10, -1>, 9>>;
  type type21 = Expect<Equal<Math.Add<100, -1>, 99>>;
  type type22 = Expect<Equal<Math.Add<291, -290>, 1>>;
}
