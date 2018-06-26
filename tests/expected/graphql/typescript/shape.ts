/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

export enum ShapeStringEnumEnum {
  FOO,
  BAR,
  BAZ,
  QUX
}

export interface ShapeBasicStructInterface {
  foo?: string | null;
}

export interface ShapePrimitiveStructInterface {
  string?: string | null;
  bool?: boolean;
  number?: number;
}

export interface ShapeArrayStructInterface {
  numberArray?: Array<number | null> | null;
  stringArray?: Array<string | null> | null;
  shapeArray?: Array<ShapeBasicStructInterface | null> | null;
}

export interface ShapeEnumStructInterface {
  stringEnum?: ShapeStringEnumEnum | null;
}

export interface ShapeUnionStructInterface {
  multiUnion?: number | boolean | ShapeEnumStructInterface | null;
}

export interface ShapeInterface {
  structAlias?: ShapeBasicStructInterface | null;
  primitiveFields?: ShapePrimitiveStructInterface | null;
  arrayFields?: ShapeArrayStructInterface | null;
  enumFields?: ShapeEnumStructInterface | null;
  unionFields?: ShapeUnionStructInterface | null;
}
