// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.

// deno-lint-ignore-file ban-types
import { Exclusive } from "./exclusive.ts";
import { assertEqual, assertEqualR, defineAssert } from "./dev_deps.ts";

assertEqualR<{}, Exclusive<{}, {}>>();
assertEqualR<{}, Exclusive<{}, {}>>();
assertEqualR<{}, Exclusive<{ a: string }, {}>>();
assertEqualR<{}, Exclusive<{}, { a: string }>>();
assertEqualR<{ a: string }, Exclusive<{ a: string }, { a: string }>>();
assertEqualR<
  { a: string } | { a: number },
  Exclusive<{ a: string }, { a: number }>
>();
assertEqualR<{ a: string }, Exclusive<{ a: string }, { b: string }>>();
assertEqualR<
  | { a: string }
  | { a: string; b: undefined }
  | { a: string; b?: undefined }
  | {
    a: string;
    b?: never;
  }
  | { a: string; b: never }
  | {
    b: string;
  }
  | {
    b: string;
  }
  | { a: undefined; b: string },
  Exclusive<{ a: string }, { b: string }>
>();
assertEqualR<
  { a: number } | { a: number; b: undefined } | { a: string; b: number },
  Exclusive<{ a: string; b: number }, { a: number }>
>();

assertEqual<Exclusive<{}, {}>>({});
assertEqual<Exclusive<{ a: string }, { a: string }>>({ a: "" });
assertEqual<Exclusive<{ a: string }, { a: number }>>({ a: "" });
assertEqual<Exclusive<{ a: string }, { a: number }>>({ a: 1 });
assertEqual<Exclusive<{ a: string; b: string }, { a: number; b: number }>>({
  a: 1,
  b: 2,
});
assertEqual<Exclusive<{ a: string; b: string }, { a: number; b: number }>>({
  a: "",
  b: "",
});
assertEqual<
  Exclusive<{ readonly a: string; b: string }, { a: number; b: number }>
>({
  a: "",
  b: "",
});

const assertEqualCase1 = defineAssert<
  Exclusive<{ a: string }, { b: number }>
>();

assertEqualCase1({ a: "" });
assertEqualCase1({ b: 1 });
assertEqualCase1({ a: "", b: undefined });
assertEqualCase1({ b: 1, a: undefined });

const assertEqualCase2 = defineAssert<
  Exclusive<{ a: string; b: number }, { a: number }>
>();

assertEqualCase2({ a: 1 });
assertEqualCase2({ a: 1, b: undefined });
assertEqualCase2({ a: "", b: 1 });
