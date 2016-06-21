import ArrayClassName from '../stub';
import DefaultName from '../stub';
import { foo, bar } from '../stub';
import AnotherDefault, { Baz, QUX } from '../stub';
import InstNamespace, { InstanceClassName } from '../stub';
import ObjectClassName from '../stub';
import ShapeNamespace, { ShapeClassName } from '../stub';
import UnionNamespace, { UnionClassName } from '../stub';

export const ARRAY_NUM = 123;

export interface ArraySchema {
  arrayField: Array<string[]>;
  boolField: boolean[];
  enumField: Array<'foo' | 'bar' | 'baz'>;
  funcField: Array<(arg0: string, arg1: number) => number>;
  instanceField: ArrayClassName[];
  numberField: number[];
  objectField: Array<{ [key: string]: number }>;
  shapeField: Array<{
    foo: string;
    bar: boolean;
    baz: () => void;
  }>;
  stringField: string[];
  unionField: Array<string | 1 | 2 | 3>;
}

export const CONST_STRING = 'string';
export const STATUS_NUMBER = 123;
export const MAGIC_FLOAT = 456.78;
export const IS_ENABLED = true;
export const EMPTY_VALUE = null;
export const PRIMITIVE_LIST = ['foo', 123, 456.78, false];

export interface ConstantsSchema {
  numberField: number;
}

export interface EnumSchema {
  boolField: true | false;
  booleanField: false | true;
  intField: 123;
  integerField: 1 | 2 | 3;
  numField: 123 | 456 | 789;
  numberField: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  floatField: 12.34 | 56.78 | 9 | 65.4;
  strField: 'foo' | 'bar';
  stringField: 'baz' | 'qux';
}

export interface ImportsSchema {
  stringField: string;
}

export const INST_STR = 'foobar';
export const INST_ENABLED = true;

export interface InstanceSchema {
  instField: InstanceClassName;
  instanceField: InstNamespace.InstanceClassName;
}

export interface ObjectSchema {
  arrayField: { [key: string]: string[] };
  boolField: { [key: string]: boolean };
  enumField: { [key: string]: 'foo' | 'bar' | 'baz' };
  funcField: { [key: string]: () => string };
  instanceField: { [key: string]: ObjectClassName };
  numberField: { [key: string]: number };
  objectField: { [key: string]: { [key: string]: number } };
  shapeField: { [key: string]: {
    foo: string;
    bar: boolean;
    baz: () => void;
  } };
  stringField: { [key: string]: string };
  unionField: { [key: string]: number | string[] };
  objShorthandField: { [key: string]: string };
  objKeyTypeField: { [key: number]: string };
}

export const PRIMITIVE_VALUES = ['string', 123, true];
export const PRIMITIVE_STR = 'primitive';

export interface PrimitiveSchema {
  boolField: boolean;
  boolFieldExpanded: boolean;
  booleanField: boolean;
  booleanFieldExpanded: boolean;
  funcField: () => void;
  functionField: (arg0: string) => void;
  intField: number;
  intFieldExpanded: number;
  integerField: number;
  integerFieldExpanded: number;
  numField: number;
  numFieldExpanded: number;
  numberField: number;
  numberFieldExpanded: number;
  floatField: number;
  floatFieldExpanded: number;
  strField: string;
  strFieldExpanded: string;
  stringField: string;
  stringFieldExpanded: string;
}

export interface SetsSchema {
  foo: string;
  bar: number;
  baz: boolean;
  qux: () => void;
}

export interface SetsBasicSchema {
  foo: string;
  baz: boolean;
}

export interface SetsWithRequiredSchema {
  bar: number;
  baz: boolean;
  qux: () => void;
}

export interface SetsWithNullSchema {
  foo: string;
  qux: () => void;
}

export interface SetsWithBothSchema {
  baz: boolean;
  qux: () => void;
}

export interface ShapeSchema {
  structAlias: {
    foo: string;
  };
  primitiveFields: {
    string: string;
    bool: boolean;
    func: (arg0: boolean) => void;
    number: number;
  };
  arrayFields: {
    numberArray: number[];
    stringArray: string[];
    shapeArray: Array<{
      foo: string;
    }>;
  };
  enumFields: {
    stringEnum: 'foo' | 'bar' | 'baz';
    intEnum: 1 | 2 | 3;
  };
  instanceFields: {
    instOf: ShapeClassName;
    instanceOf: ShapeNamespace.ShapeClassName;
  };
  objectFields: {
    numberObj: { [key: string]: number };
    boolObject: { [key: string]: boolean };
    intStringObject: { [key: number]: string };
    unionObject: { [key: string]: number | string | {
      foo: string;
    } };
  };
  unionFields: {
    multiUnion: number | boolean | ShapeClassName | { [key: string]: string } | {
      string: string;
      enum: 123 | 456 | 789;
    };
  };
}

export interface UnionSchema {
  arrayField: string[] | Array<{ [key: string]: string }>;
  primitiveFields: boolean | number | () => void;
  enumField: 'foo' | 'bar' | 'baz' | 789 | 456 | 123;
  instanceField: UnionClassName | UnionNamespace.UnionClassName;
  objectField: { [key: string]: number } | { [key: string]: string[] };
  shapeField: {
    foo: string;
    bar: boolean;
    baz: () => void;
  } | {
    qux: string | boolean;
  };
  unionField: string | 1 | 2 | 3 | boolean | number;
}
