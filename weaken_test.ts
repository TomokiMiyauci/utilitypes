// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any
import { Weaken } from "./weaken.ts";
import { assertEqualR } from "./dev_deps.ts";

// deno-lint-ignore ban-types
assertEqualR<{}, Weaken<{}, never>>();
assertEqualR<{ "": any }, Weaken<{ "": string }, "">>();
assertEqualR<{ "": any; 0: 1 }, Weaken<{ "": string; 0: 1 }, "">>();
assertEqualR<{ readonly "": any }, Weaken<{ readonly "": string }, "">>();
assertEqualR<
  { readonly "": any; 0: any },
  Weaken<{ readonly "": string; 0: 1 }, "" | 0>
>();
