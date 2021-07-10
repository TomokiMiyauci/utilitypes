// Copyright 2021-present the utilitypes authors. All rights reserved. MIT license.
const assertEqualR = <T extends U, U = T>(_actual?: U): void => {};

const defineAssert = <T>() => (_: T): void => {};
const assertEqual = <T>(_: T): void => {};

export { assertEqual, assertEqualR, defineAssert };
