/**
 * Type of any function.
 *
 * @public
 *
 * @typeParam T - Argument types
 */
type AnyFn<T = any, U = unknown> = (...args: T[]) => U

export type { AnyFn }
