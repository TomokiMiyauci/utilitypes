// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.
/**
 * Returns a record type with exclusive properties.
 * @typeParam T - Any Record types
 * @typeParam U - Any Record types
 * @returns Record type with { property?: undefined } for properties that do not match each of `T` and `U`
 *
 * @example
 * ```ts
 * Exclusive<{ a: string }, { a: number }>
 * // ({ a: string } & { b?: undefined }) |
 * // ({ b: number } & { a?: undefined })
 * ```
 *
 * @beta
 */
type Exclusive<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>,
> =
  | T
    & { [k in Exclude<keyof U, keyof T>]?: never }
  | U & { [k in Exclude<keyof T, keyof U>]?: never };

export type { Exclusive };
