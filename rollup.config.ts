import ts from "rollup-plugin-ts";
import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

const banner =
  "/*! Copyright (c) 2021-present the utilitypes authors. All rights reserved. MIT license. */";

const replaceOption = {
  ".ts": "",
  preventAssignment: true,
};
const config = [
  {
    input: resolve(__dirname, "mod.ts"),
    plugins: [
      replace(replaceOption),
      ts(),
      terser(),
    ],

    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: false,
      banner,
    },
  },
];

export default config;
