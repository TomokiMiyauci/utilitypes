// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.

/**
 * Returns the specified property of an types as `any`.
 * @typeParam T - Any types
 * @typeParam U - Property keys of `T`
 * @returns Set property of `U` to `any` from `T`
 *
 * @example
 * ```ts
 * Weaken<{ 0: number, a: string, b: string }, 0 | 'a'>
 * // { 0: any, a: any, b: string }
 * ```
 */
type Weaken<T, U extends keyof T> = {
  // deno-lint-ignore no-explicit-any
  [k in keyof T]: k extends U ? any : T[k];
};

export type { Weaken }
