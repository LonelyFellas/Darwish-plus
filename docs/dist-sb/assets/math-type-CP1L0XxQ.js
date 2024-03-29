import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as r}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";function t(s){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"math",children:"Math"}),`
`,e.jsx(n.p,{children:"数学工具类型包"}),`
`,e.jsx(n.h3,{id:"math类型包下所有的类型",children:"Math类型包下所有的类型"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Add"})," - 将两个数字类型的数值相加"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Subtract"})," - 将两个数字类型的数字相减"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TwoNumberGreater"})," - 判断两个数字类型的数值大小"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsNegative"})," - 判断一个数字类型是否是负数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AbsStr"})," - abs 绝对值 结果是一个字符串"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Abs"})," - 将一个数字类型取绝对值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Negation"})," - 将一个数字类型取反"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsZero"})," - 判断一个数字类型是否是0"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsPositive"})," - 判断一个数字类型是否是正数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsSomeSignNumber"})," - 两个数符号是否相同"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsNegative"})," - 判断一个数字类型是否是负数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsNonNegativeNum"})," - 判断一个数字类型是否是非负数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IsNonPositiveNum"})," - 判断一个数字类型是否是非正数"]}),`
`]}),`
`,e.jsx(n.h3,{id:"安装",children:"安装"}),`
`,e.jsxs(n.p,{children:["安装后需要在",e.jsx(n.code,{children:"tsconfig.json"}),"中配置",e.jsx(n.code,{children:'"complierOptions.types": ["@darwish/types"]'}),"。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "types": ["@darwish/types"]
  }
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:` $ npm install @darwish/types
`})}),`
`,e.jsx(n.h3,{id:"示例",children:"示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Add, Subtract, Abs } from '@darwish/types'

type TestAdd = Add<1, 2> // 3
type TestSubtract = Subtract<1, 2> // -1
type TestAbs = Abs<-1> // 1
`})}),`
`,e.jsx(n.h3,{id:"add",children:e.jsx(n.code,{children:"Add"})}),`
`,e.jsx(n.p,{children:"将类型数字类型做加法运算"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
 * @description 两个非负数相加
 */
export type SumTwoNumberNonNegative<
  A extends number,
  B extends number,
  Temp1 extends any[] = [],
  Temp2 extends any[] = [],
  Temp3 extends any[] = []
> = Temp1["length"] extends A
  ? Temp2["length"] extends B
    ? Temp3["length"]
    : SumTwoNumberNonNegative<A, B, Temp1, [...Temp2, A], [...Temp3, B]>
  : SumTwoNumberNonNegative<A, B, [...Temp1, A], Temp2, [...Temp3, B]>;

/**
 * @description 两个负数相加
 */
export type SumTwoNumberBothNegative<
  A extends number,
  B extends number,
  Temp1 extends any[] = [],
  Temp2 extends any[] = [],
  Temp3 extends any[] = []
> = Temp1["length"] extends A
  ? Temp2["length"] extends B
    ? Temp3["length"]
    : SumTwoNumberBothNegative<A, B, Temp1, [...Temp2, B], [...Temp3, B]>
  : SumTwoNumberBothNegative<A, B, [...Temp1, A], Temp2, [...Temp3, A]>;
/**
 * @description 两个正数相减 其中 A > B
 */
export type SubtractTwoNumberBothPositiveAndAGreaterB<
  A extends number,
  B extends number,
  Temp1 extends any[] = Darwish.Iteraor<A>,
  Temp2 extends any[] = []
> = Temp2["length"] extends B
  ? Temp1["length"]
  : Temp1 extends [infer F, ...infer R]
  ? SubtractTwoNumberBothPositiveAndAGreaterB<A, B, R, [...Temp2, F]>
  : Temp1["length"];
/**
 * @description 两个正数相减 其中 A < B
 */
export type SubtractTwoNumberBothPositiveAndALessB<
  A extends number,
  B extends number
> = Math.Negation<SubtractTwoNumberBothPositiveAndAGreaterB<B, A>>;
/**
 * @description 一个负数一个正数相加, 其中正数大于负数
 *
 */
export type SumTwoNumberOnePositiveOneNegativeAndPositiveGreater<
  A extends number,
  B extends number
> = Math.IsNegative<A> extends true
  ? SubtractTwoNumberBothPositiveAndAGreaterB<B, Math.Negation<A>>
  : SubtractTwoNumberBothPositiveAndAGreaterB<A, Math.Abs<B>>;
/**
 * @description 判断两个负数都是负数
 */
export type IsTwoNumberBothNegative<
  A extends number,
  B extends number
> = Math.IsNegative<A> extends true
  ? Math.IsNegative<B> extends true
    ? true
    : false
  : false;
/**
 * @description 两个正数比较大小 A > B 返回 true 否则返回 false
 */
export type TwoNumberBothPositiveGreater<
  A extends number,
  B extends number,
  Temp1 extends any[] = Darwish.Iteraor<A>,
  Temp2 extends any[] = Darwish.Iteraor<B>
> = Temp1["length"] extends 0
  ? false
  : Temp1 extends [infer F, ...infer R]
  ? Temp1["length"] extends Temp2["length"]
    ? true
    : TwoNumberBothPositiveGreater<A, B, R, Temp2>
  : false;
/**
 * @description 两个数是否是非负数
 */
export type IsTwoNumberBothNonNegativeNum<
  A extends number,
  B extends number
> = Math.IsNonNegativeNum<A> extends true
  ? Math.IsNonNegativeNum<B> extends true
    ? true
    : false
  : false;
/**
 * @description 两个数是否是非正数
 */
export type IsTwoNumberBothNonPositiveNum<
  A extends number,
  B extends number
> = Math.IsNonPositiveNum<A> extends true
  ? Math.IsNonPositiveNum<B> extends true
    ? true
    : false
  : false;
/**
 * @description 两个数比较大小 A > B 返回 true 否则返回 false
 */
export type IsTwoNumberGreater<
  A extends number,
  B extends number
> = Darwish.Equal<A, B> extends true
  ? false
  : IsTwoNumberBothNegative<A, B> extends true
  ? IsTwoNumberGreater<Math.Abs<B>, Math.Abs<A>>
  : Math.IsNegative<A> extends true
  ? false
  : Math.IsNegative<B> extends true
  ? true
  : Darwish.Equal<A, 0> extends true
  ? false
  : Darwish.Equal<B, 0> extends true
  ? true
  : TwoNumberBothPositiveGreater<A, B>;
type Add<
  A extends number,
  B extends number
> = IsTwoNumberBothNonNegativeNum<A, B> extends true
  ? SumTwoNumberNonNegative<A, B>
  : IsTwoNumberBothNonPositiveNum<A, B> extends true
  ? Negation<SumTwoNumberNonNegative<Abs<A>, Abs<B>>>
  : IsNegative<A> extends true
  ? IsTwoNumberGreater<Math.Abs<A>, Math.Abs<B>> extends true
    ? SubtractTwoNumberBothPositiveAndALessB<B, Math.Abs<A>>
    : SubtractTwoNumberBothPositiveAndAGreaterB<B, Math.Abs<A>>
  : IsNegative<B> extends true
  ? IsTwoNumberGreater<Math.Abs<B>, A> extends true
    ? SubtractTwoNumberBothPositiveAndALessB<A, Math.Abs<B>>
    : SubtractTwoNumberBothPositiveAndAGreaterB<A, Math.Abs<B>>
  : SumTwoNumberBothNegative<A, B>;
`})}),`
`,e.jsxs(n.h3,{id:"subtract-将两个数字类型的数值相减",children:[e.jsx(n.code,{children:"Subtract"})," 将两个数字类型的数值相减"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Subtract<A extends number, B extends number> = Add<A, Negation<B>>;
`})}),`
`,e.jsxs(n.h3,{id:"twonumbergreater-判断两个数字类型的数值大小",children:[e.jsx(n.code,{children:"TwoNumberGreater"})," 判断两个数字类型的数值大小"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 两个数比较大小 A > B 返回 true 否则返回 false
*/
type TwoNumberGreater<
  A extends number,
  B extends number
  > = IsTwoNumberGreater<A, B> extends true ? A : B;
`})}),`
`,e.jsxs(n.h3,{id:"isnegative-判断一个数字类型是否是负数",children:[e.jsx(n.code,{children:"IsNegative"})," 判断一个数字类型是否是负数"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 判断一个类型是否是负数
* @example
* type A = isNegative<1> // false
* type B = isNegative<-1> // true
*/
type IsNegative<N extends number> = \`\${N}\` extends \`-\${string}\`
  ? true
  : false;
`})}),`
`,e.jsxs(n.h3,{id:"absstr-abs-绝对值-结果是一个字符串",children:[e.jsx(n.code,{children:"AbsStr"})," abs 绝对值 结果是一个字符串"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"/**\n* @description abs 绝对值 结果是一个字符串\n*/\ntype AbsStr<T extends number | string | bigint> =\n  `${T}` extends `-${infer Num}` ? Num : `${T}`;\n"})}),`
`,e.jsxs(n.h3,{id:"abs-将一个数字类型取绝对值",children:[e.jsx(n.code,{children:"Abs"})," 将一个数字类型取绝对值"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description abs 绝对值 结果是原类型
*/
type Abs<T extends number | string | bigint> = T extends number | bigint
  ? Darwish.ToNumber<AbsStr<T>>
  : never;
`})}),`
`,e.jsxs(n.h3,{id:"negation-将一个数字类型取反",children:[e.jsx(n.code,{children:"Negation"})," 将一个数字类型取反"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 一个数字取反
*/
type Negation<T extends number> = IsZero<T> extends true
  ? 0
  : IsNegative<T> extends true
  ? Abs<T>
  : Darwish.ToNumber<\`-\${T}\`>;
`})}),`
`,e.jsxs(n.h3,{id:"iszero-判断一个数字类型是否是0",children:[e.jsx(n.code,{children:"IsZero"})," 判断一个数字类型是否是0"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 是否是0
*/
type IsZero<T extends number> = Darwish.Equal<T, 0> extends true
  ? true
  : false;
`})}),`
`,e.jsxs(n.h3,{id:"ispositive-判断一个数字类型是否是正数",children:[e.jsx(n.code,{children:"IsPositive"})," 判断一个数字类型是否是正数"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type IsPositive<T extends number> = IsZero<T> extends false
  ? IsNegative<T> extends false
    ? true
    : false
  : false;
`})}),`
`,e.jsxs(n.h3,{id:"issomesignnumber-两个符号是否相同",children:[e.jsx(n.code,{children:"IsSomeSignNumber"})," 两个符号是否相同"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 两个数符号是否相同
*/
type IsSomeSignNumber<
  A extends number,
  B extends number
> = IsZero<A> extends true
  ? IsZero<B> extends true
    ? true
    : false
  : Math.IsNegative<A> extends true
  ? Math.IsNegative<B> extends true
    ? true
    : false
  : Math.IsPositive<A> extends true
  ? Math.IsPositive<B> extends true
    ? true
    : false
  : false;
`})}),`
`,e.jsxs(n.h3,{id:"isnonnegativenum-一个数是否是非负数",children:[e.jsx(n.code,{children:"IsNonNegativeNum"})," 一个数是否是非负数"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 一个数是否是非负数
*/
type IsNonNegativeNum<T extends number> = IsNegative<T> extends false
  ? true
  : false;
`})}),`
`,e.jsxs(n.h3,{id:"isnonpositivenum-一个数是否是非正数",children:[e.jsx(n.code,{children:"IsNonPositiveNum"})," 一个数是否是非正数"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
* @description 一个数是否是非正数
*/
type IsNonPositiveNum<T extends number> = IsPositive<T> extends false
  ? true
  : false;
`})})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{o as default};
