// Automatically generated by shapeshifter. Do not modify!
// @flow
import Schema from 'shapeshifter';

export const MultipleChildrenSchema = new Schema('multiple-children', 'uuid');

export const SingleChildSchema = new Schema('single-child');

export const ParentSchema = new Schema('parents');

SingleChildSchema.define({
  self: SingleChildSchema,
});

ParentSchema.define({
  orphan: SingleChildSchema,
  children: [MultipleChildrenSchema],
});
