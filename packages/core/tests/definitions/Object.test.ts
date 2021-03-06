import { options, truthyValues } from '../../../../tests/mocks';
import ObjectDefinition from '../../src/definitions/Object';
import NumberDefinition from '../../src/definitions/Number';
import StringDefinition from '../../src/definitions/String';

describe('definitions/Object', () => {
  it('errors if `valueType` is missing', () => {
    expect(() => new ObjectDefinition(options, 'foo', {})).toThrowError(
      'Invalid ObjectDefinition field "valueType". Field is required and must be defined.',
    );
  });

  it('errors if `valueType` is empty', () => {
    expect(() => new ObjectDefinition(options, 'foo', { valueType: '' })).toThrowError(
      'Invalid ObjectDefinition field "valueType". String cannot be empty.',
    );
  });

  it('errors if `keyType` is empty', () => {
    expect(
      () => new ObjectDefinition(options, 'foo', { keyType: '', valueType: 'string' }),
    ).toThrowError('Invalid ObjectDefinition field "keyType". String cannot be empty.');
  });

  it('errors if `keyType` is not a string', () => {
    truthyValues.filter(value => typeof value !== 'string').forEach(value => {
      expect(
        // @ts-ignore
        () => new ObjectDefinition(options, 'foo', { keyType: value, valueType: 'string' }),
      ).toThrowError('Invalid ObjectDefinition field "keyType". Must be a string.');
    });
  });

  it('creates a `Definition` for the `valueType`', () => {
    const def = new ObjectDefinition(options, 'foo', { valueType: 'number' });

    expect(def.valueType).toBeInstanceOf(NumberDefinition);
  });

  it('creates a `Definition` for the `keyType`', () => {
    const def = new ObjectDefinition(options, 'foo', { valueType: 'number', keyType: 'string' });

    expect(def.keyType).toBeInstanceOf(StringDefinition);
  });
});
