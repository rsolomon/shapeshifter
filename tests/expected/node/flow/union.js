// @flow
import UnionDefault, { UnionClassName } from '../stub';

export type UnionType = {
  arrayField: ?Array<?string> | ?Array<?{ [key: string]: ?string }>,
  primitiveFields: ?boolean | ?number,
  enumField: 'foo' | 'bar' | 'baz' | 789 | 456 | 123,
  instanceField: ?UnionClassName | UnionDefault,
  objectField: ?{ [key: string]: ?number } | ?{ [key: string]: ?Array<?string> },
  shapeField: ?{
    foo: ?string,
    bar: ?boolean,
  } | ?{
    qux: ?string | ?boolean,
  },
  unionField: ?string | 1 | 2 | 3 | ?boolean | ?number,
};