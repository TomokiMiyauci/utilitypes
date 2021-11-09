// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.

import { Weaken } from "@/object/weaken";
import { assertEqualR } from "@test/assert";

assertEqualR<{}, Weaken<{}, never>>();
assertEqualR<{ "": any }, Weaken<{ "": string }, "">>();
assertEqualR<{ "": any; 0: 1 }, Weaken<{ "": string; 0: 1 }, "">>();
assertEqualR<{ readonly "": any }, Weaken<{ readonly "": string }, "">>();
assertEqualR<
  { readonly "": any; 0: any },
  Weaken<{ readonly "": string; 0: 1 }, "" | 0>
>();
assertEqualR<
  { readonly "": any; 0: number },
  Weaken<Test, "">
>();

interface Test {
  "": string;
  0: number;
}
