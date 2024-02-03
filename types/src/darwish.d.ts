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
