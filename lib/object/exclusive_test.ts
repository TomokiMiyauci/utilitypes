// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.

import { Exclusive } from '@/object/exclusive'
import { assertEqual, assertEqualR, defineAssert } from '@test/assert'

assertEqualR<{}, Exclusive<{}, {}>>()
assertEqualR<{}, Exclusive<{}, {}>>()
assertEqualR<{}, Exclusive<{ a: string }, {}>>()
assertEqualR<{}, Exclusive<{}, { a: string }>>()
assertEqualR<{ a: [] }, Exclusive<{ a: [] }, { a: [] }>>()
assertEqualR<{ a: [] } | { a: string }, Exclusive<{ a: [] }, { a: string }>>()
assertEqualR<{ a: string }, Exclusive<{ a: string }, { a: string }>>()
assertEqualR<
  { a: string } | { a: number },
  Exclusive<{ a: string }, { a: number }>
>()
assertEqualR<{ a: string }, Exclusive<{ a: string }, { b: string }>>()
assertEqualR<
  | { a: string }
  | { a: string; b: undefined }
  | { a: string; b?: undefined }
  | {
      a: string
      b?: never
    }
  | { a: string; b: never }
  | {
      b: string
    }
  | {
      b: string
    }
  | { a: undefined; b: string },
  Exclusive<{ a: string }, { b: string }>
>()
assertEqualR<
  { a: number } | { a: number; b: undefined } | { a: string; b: number },
  Exclusive<{ a: string; b: number }, { a: number }>
>()
assertEqualR<
  { a: { b: string } } | { a: number },
  Exclusive<{ a: { b: string } }, { a: number }>
>()
assertEqualR<
  { a: { b: string } } | { a: { b: number } },
  Exclusive<{ a: { b: string } }, { a: { b: number } }>
>()

assertEqual<Exclusive<{}, {}>>({})
assertEqual<Exclusive<{ a: string }, { a: string }>>({ a: '' })
assertEqual<Exclusive<{ a: string }, { a: number }>>({ a: '' })
assertEqual<Exclusive<{ a: string }, { a: number }>>({ a: 1 })
assertEqual<Exclusive<{ a: string; b: string }, { a: number; b: number }>>({
  a: 1,
  b: 2
})
assertEqual<Exclusive<{ a: string; b: string }, { a: number; b: number }>>({
  a: '',
  b: ''
})
assertEqual<
  Exclusive<{ readonly a: string; b: string }, { a: number; b: number }>
>({
  a: '',
  b: ''
})

const assertEqualCase1 = defineAssert<Exclusive<{ a: string }, { b: number }>>()

assertEqualCase1({ a: '' })
assertEqualCase1({ b: 1 })
assertEqualCase1({ a: '', b: undefined })
assertEqualCase1({ b: 1, a: undefined })

const assertEqualCase2 =
  defineAssert<Exclusive<{ a: string; b: number }, { a: number }>>()

assertEqualCase2({ a: 1 })
assertEqualCase2({ a: 1, b: undefined })
assertEqualCase2({ a: '', b: 1 })
