type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
type LastOf<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R
  ? R
  : never;

type Push<T extends any[], V> = [...T, V];
export declare global {
  namespace Darwish {
    /**
     * 判断两个类型是否相等
     * @example
     * type A = Equal<1, 1> // true
     * type B = Equal<1, 2> // false
     * type C = Equal<{a: number}, {a: string}> // false
     * type D = Equal<{a: number}, {readonly a: number}> // false
     * type E = Equal<{a: number}, {a: number}> // true
     */
    type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
      T
    >() => T extends Y ? 1 : 2
      ? true
      : false;
    /**
     * @description 将一个类型变成增长数字的数组
     * @be_care 限制1000
     * @example Iteraor<number, 5> --> [1, 2, 3, 4, 5]
     */
    type Iteraor<
      N extends number,
      Temp extends any[] = []
    > = Temp["length"] extends N ? Temp : Iteraor<N, [...Temp, Temp["length"]]>;

    /**
     * @description 将一个字符串类型变成数组类型
     */
    type StrToArr<
      T extends string,
      TempArr extends any[] = []
    > = T extends `${infer F}${infer R}`
      ? StrToArr<R, [...TempArr, F]>
      : TempArr;
    /**
     * @description 推断一个字符串和数组的长度
     */
    type Length<
      T extends string | any[],
      TempArr extends any[] = []
    > = T extends any[] ? T["length"] : StrToArr<T>["length"];
    /**
     * @description IsBlanks 判断一个类型是否为空
     */
    type IsBlanks<T = ""> = T extends string
      ? T extends ""
        ? true
        : false
      : T extends any[]
      ? T["length"] extends 0
        ? true
        : false
      : T extends Record<PropertyKey, any>
      ? keyof T extends never
        ? true
        : false
      : T extends null
      ? true
      : T extends undefined
      ? true
      : false;
    /**
     * @description 讲一个字符串类型的数字变成变成 number 类型
     */
    type ToNumber<T> = T extends number
      ? T
      : T extends `${infer S extends number}`
      ? S extends number
        ? S
        : S
      : never;
    /**
     * @description 将一个number类型变成字符串
     */
    type ToString<T> = T extends string ? T : T extends number ? `${T}` : never;
    type AnyObj = Record<PropertyKey, any>;
    type EmptyObj = Record<PropertyKey, never>;
    type AnyFunc = (...args: any[]) => any;
    /**
     *  获取对象属性值类型
     *  @example
     *  type A = { a: { b: string } };
     *  type B = PathValue<A, 'a'>; // { b: string }
     *  type B = PathValue<A, 'a.b'>; // string
     *  type C = PathValue<A, 'a.c'>; // never
     */
    type PathValue<T, P extends string | null = null> = P extends null
      ? T
      : P extends `${infer K}.${infer Rest}`
      ? K extends keyof T
        ? PathValue<T[K], Rest>
        : never
      : P extends keyof T
      ? T[P]
      : never;
    /**
     * @description 将一个联合类型变成元组类型
     * @example
     * type A = UnionToTuple<1 | 2 | 3>; // [1, 2, 3]
     * type B = UnionToTuple<never>; // []
     * type C = UnionToTuple<1 | 2 | 3 | never>; // [1, 2, 3]
     */
    type UnionToTuple<
      T,
      L = LastOf<T>,
      N = [T] extends [never] ? true : false
    > = true extends N ? [] : Push<UnionToTuple<Exclude<T, L>>, L>;
    /**
     * @description 两个参数默认流程判断
     * */
    type Switch<B, A = null> = A extends null ? B : A;
    /**
     * @description
     * 实现范型函数
     *
     * !! 值得注意第二个参数是函数的返回值，如果入参为空，则第一个参数一定指定为null
     * @example
     * const a: GenericsFn = () => {} // () => void;
     * const a1: GenericsFn<null, number> = () => number; // () => number;
     * const b: GenericsFn<{ index: number }> = (arg) => {
     *     console.log(arg.index);
     * }; // (arg: {index: number}) => void
     * const c: GenericsFn<[number, string, boolean]> = (age, number, isOld) => {
     *     console.log(age);
     *     console.log(number);
     *     console.log(isOld);
     * }; // (...args: [number, string, boolean]) = void
     * */
    type GenericsFn<P extends any[] | AnyObj = null, R = null> = P extends null
      ? () => Switch<void, R>
      : P extends any[]
      ? (...args: P) => Switch<void, R>
      : (arg: P) => Switch<void, R>;

    /**
     * @deprecated 请使用 `React.ElementType` 代替
     */
    type ElementLabel = keyof JSX.IntrinsicElements;
    /**
     * @deprecated 请使用 `React.ElementRef` 代替
     */
    type ElementRef<T extends ElementLabel> =
      JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
        React.HTMLAttributes<unknown>,
        infer A
      >
        ? A
        : never;
    type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
      ElementRef<T>,
      MouseEvent
    >;
    type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
      ElementRef<T>
    >;
    type ElementHTMLProps<T extends ElementLabel> = JSX.IntrinsicElements[T];
  }
}
