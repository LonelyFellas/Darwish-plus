export type Join<
  L extends string,
  R extends string,
  S extends string
> = `${L}${S}${R}`;
export type Split<
  T extends string,
  S extends string,
  Temp extends any[] = []
> = T extends `${infer L}${S}${infer R}`
  ? Split<R, S, [...Temp, L]>
  : [...Temp, T];
