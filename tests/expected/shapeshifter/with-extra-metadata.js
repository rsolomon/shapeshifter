// @flow
import Schema from 'shapeshifter';

export const ExtraMetaSchema = new Schema('extra', {
  arrayOfThings: ['id', 'date'],
  extraThing: 123,
  something: true,
});
