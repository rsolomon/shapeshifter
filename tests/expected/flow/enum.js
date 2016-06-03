// @flow
import EnumNamespace, { fooFunc, barFunc } from '/path/to/EnumFuncs';

export type EnumSchema = {
  boolField: true | false,
  booleanField: false | true,
  funcField: fooFunc | barFunc,
  functionField: EnumNamespace.fooFunc | EnumNamespace.barFunc,
  intField: 123,
  integerField: 1 | 2 | 3,
  numField: 123 | 456 | 789,
  numberField: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  floatField: 12.34 | 56.78 | 9 | 65.4,
  strField: 'foo' | 'bar',
  stringField: 'baz' | 'qux',
};