/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

import ArrayDefault from '../stub';
import DefaultName from '../stub';
import AnotherDefault, { Baz, Qux } from '../stub';
import InstanceDefault, { InstanceClassName } from '../stub';
import ObjectDefault from '../stub';
import ShapeDefault, { ShapeClassName } from '../stub';
import UnionDefault, { UnionClassName } from '../stub';

export const ARRAY_NUM = 123;
export const CONST_STRING = 'string';
export const STATUS_NUMBER = 123;
export const MAGIC_FLOAT = 456.78;
export const IS_ENABLED = true;
export const EMPTY_VALUE = null;
export const PRIMITIVE_LIST = ['foo', 123, 456.78, false];
export const INST_STR = 'foobar';
export const INST_ENABLED = true;
export const PRIMITIVE_VALUES = ['string', 123, true];
export const PRIMITIVE_STR = 'primitive';

export enum ArrayEnumFieldEnum {
  foo,
  bar,
  baz
}

export enum ArrayUnionField1Enum {
  A = 1,
  B = 2,
  C = 3
}

export enum EnumBoolFieldEnum {
  A = 1,
  B = 0
}

export enum EnumBooleanFieldEnum {
  A = 0,
  B = 1
}

export enum EnumIntFieldEnum {
  A = 123
}

export enum EnumIntegerFieldEnum {
  A = 1,
  B = 2,
  C = 3
}

export enum EnumNumFieldEnum {
  A = 123,
  B = 456,
  C = 789
}

export enum EnumNumberFieldEnum {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
  H = 8,
  I = 9,
  J = 10
}

export enum EnumFloatFieldEnum {
  A = 12.34,
  B = 56.78,
  C = 9,
  D = 65.4
}

export enum EnumStrFieldEnum {
  foo,
  bar
}

export enum EnumStringFieldEnum {
  baz,
  qux
}

export enum ObjectEnumFieldValueEnum {
  foo,
  bar,
  baz
}

export enum ShapeStringEnumEnum {
  foo,
  bar,
  baz
}

export enum ShapeIntEnumEnum {
  A = 1,
  B = 2,
  C = 3
}

export enum ShapeEnumEnum {
  A = 123,
  B = 456,
  C = 789
}

export enum UnionEnumField0Enum {
  foo,
  bar,
  baz
}

export enum UnionEnumField1Enum {
  A = 789,
  B = 456,
  C = 123
}

export enum UnionUnionField01Enum {
  A = 1,
  B = 2,
  C = 3
}

export interface ArrayInterface {
  arrayField: Array<Array<string | null> | null> | null;
  boolField: Array<boolean | null> | null;
  enumField: Array<ArrayEnumFieldEnum | null> | null;
  instanceField: Array<ArrayDefault | null> | null;
  numberField: Array<number | null>;
  objectField: Array<{ [key: string]: number | null } | null> | null;
  shapeField: Array<{
    foo: string | null;
    bar: boolean | null;
  } | null> | null;
  stringField: Array<string | null> | null;
  unionField: Array<string | ArrayUnionField1Enum | null> | null;
}

export interface ConstantsInterface {
  numberField: number | null;
}

export interface EnumInterface {
  boolField: EnumBoolFieldEnum | null;
  booleanField: EnumBooleanFieldEnum | null;
  intField: EnumIntFieldEnum | null;
  integerField: EnumIntegerFieldEnum | null;
  numField: EnumNumFieldEnum | null;
  numberField: EnumNumberFieldEnum | null;
  floatField: EnumFloatFieldEnum | null;
  strField: EnumStrFieldEnum | null;
  stringField: EnumStringFieldEnum | null;
}

export interface ImportsInterface {
  stringField: string | null;
}

export interface InstanceInterface {
  instField: InstanceClassName | null;
  instanceField: InstanceDefault;
}

export interface ObjectInterface {
  arrayField: { [key: string]: Array<string | null> | null } | null;
  boolField: { [key: string]: boolean | null };
  enumField: { [key: string]: ObjectEnumFieldValueEnum | null };
  instanceField: { [key: string]: ObjectDefault | null } | null;
  numberField: { [key: string]: number | null } | null;
  objectField: { [key: string]: { [key: string]: number | null } | null } | null;
  shapeField: { [key: string]: {
    foo: string | null;
    bar: boolean | null;
  } | null } | null;
  stringField: { [key: string]: string | null } | null;
  unionField: { [key: string]: number | Array<string | null> | null } | null;
  objShorthandField: { [key: string]: string | null } | null;
  objKeyTypeField: { [key: number]: string | null } | null;
}

export interface PolymorphVideoInterface {
  path: string | null;
}

export interface PolymorphImageInterface {
  url: string | null;
}

export interface PolymorphInterface {
  item: PolymorphImageInterface | PolymorphVideoInterface | null;
  item_id: string | number | null;
  item_type: string | null;
}

export interface PrimitiveInterface {
  boolField: boolean | null;
  boolFieldExpanded: boolean;
  booleanField: boolean | null;
  booleanFieldExpanded: boolean;
  intField: number | null;
  intFieldExpanded: number;
  integerField: number | null;
  integerFieldExpanded: number;
  numField: number | null;
  numFieldExpanded: number;
  numberField: number | null;
  numberFieldExpanded: number;
  floatField: number | null;
  floatFieldExpanded: number;
  strField: string | null;
  strFieldExpanded: string;
  stringField: string | null;
  stringFieldExpanded: string;
}

export interface ReferenceBarInterface {
  boolField: boolean | null;
}

export interface ReferenceFooInterface {
  numberField: number | null;
  refField: ReferenceBarInterface;
}

export interface ReferenceSelfBasicInterface {
  stringField: string | null;
}

export interface ReferenceSelfInterface {
  stringField: string | null;
  referenceField: ReferenceSelfInterface | null;
  requiredRefField: ReferenceSelfInterface;
  subsetRefField: Array<ReferenceSelfBasicInterface | null> | null;
}

export interface ReferenceSetOnlyStringInterface {
  stringField: string;
}

export interface ReferenceSetInterface {
  boolField: boolean | null;
  stringField: string | null;
  numberField: number | null;
}

export interface ReferenceInterface {
  stringField: string | null;
  refField: ReferenceFooInterface;
  referenceField: ReferenceFooInterface | null;
  subsetRefField: ReferenceSetOnlyStringInterface | null;
}

export interface SetsBasicInterface {
  foo: string | null;
  baz: boolean;
}

export interface SetsWithNullInterface {
  foo: string;
  qux: string | null;
}

export interface SetsInterface {
  foo: string | null;
  bar: number | null;
  baz: boolean;
  qux: string;
}

export interface ShapeReferencePriceInterface {
  amount: number | null;
  nativeAmount: number | null;
  exchangeRate: number | null;
}

export interface ShapeReferenceInterface {
  fees: ShapeReferencePriceInterface | null;
  taxes: ShapeReferencePriceInterface;
  total: ShapeReferencePriceInterface;
}

export interface ShapeInterface {
  structAlias: {
    foo: string | null;
  } | null;
  primitiveFields: {
    string: string | null;
    bool: boolean;
    number: number;
  } | null;
  arrayFields: {
    numberArray: Array<number | null> | null;
    stringArray: Array<string | null> | null;
    shapeArray: Array<{
      foo: string | null;
    } | null> | null;
  } | null;
  enumFields: {
    stringEnum: ShapeStringEnumEnum | null;
    intEnum: ShapeIntEnumEnum | null;
  } | null;
  instanceFields: {
    instOf: ShapeClassName | null;
    instanceOf: ShapeDefault | null;
  } | null;
  objectFields: {
    numberObj: { [key: string]: number | null } | null;
    boolObject: { [key: string]: boolean | null } | null;
    intStringObject: { [key: number]: string | null } | null;
    unionObject: { [key: string]: number | string | {
      foo: string | null;
    } | null } | null;
  } | null;
  unionFields: {
    multiUnion: number | boolean | ShapeClassName | { [key: string]: string | null } | {
      string: string | null;
      enum: ShapeEnumEnum | null;
    } | null;
  } | null;
}

export interface UnionInterface {
  arrayField: Array<string | null> | Array<{ [key: string]: string | null } | null> | null;
  primitiveFields: boolean | number | null;
  enumField: UnionEnumField0Enum | UnionEnumField1Enum | null;
  instanceField: UnionClassName | UnionDefault | null;
  objectField: { [key: string]: number | null } | { [key: string]: Array<string | null> | null } | null;
  shapeField: {
    foo: string | null;
    bar: boolean | null;
  } | {
    qux: string | boolean | null;
  } | null;
  unionField: string | UnionUnionField01Enum | boolean | number | null;
}
