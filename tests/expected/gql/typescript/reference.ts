/* eslint-disable */
// Automatically generated by shapeshifter. Do not modify!
export interface ReferenceBarInterface {
  boolField: boolean;
}

export interface ReferenceFooInterface {
  numberField: number;
  refField: ReferenceBarInterface;
}

export interface ReferenceInterface {
  stringField: string;
  refField: ReferenceFooInterface;
  referenceField: ReferenceFooInterface;
}
