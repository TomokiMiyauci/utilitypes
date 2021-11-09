// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.
import { Primitive } from '@/primitive'

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
  | (
    & T
    & {
      [k in keyof U]?: U[k] extends Record<PropertyKey, unknown>
        ? T[k] extends Record<PropertyKey, unknown> ? Exclusive<U[k], T[k]>
        : T[k]
        : T[k] extends Record<PropertyKey, unknown> ? T[k]
        : T[k] extends Primitive | unknown[] ? T[k]
        : never;
    }
  )
  | (
    & U
    & {
      [k in keyof T]?: T[k] extends Record<PropertyKey, unknown>
        ? U[k] extends Record<PropertyKey, unknown> ? Exclusive<T[k], U[k]>
        : U[k]
        : U[k] extends Record<PropertyKey, unknown> ? U[k]
        : U[k] extends Primitive | unknown[] ? U[k]
        : never;
    }
  );

export type { Exclusive }
