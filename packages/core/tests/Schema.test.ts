import Schema from '../src/Schema';

describe('Schema', () => {
  let schema: Schema;
  const foo = new Schema('foos');
  const qux = new Schema('quxs', 'uuid');

  beforeEach(() => {
    schema = new Schema('bars');
  });

  describe('constructor()', () => {
    it('inherits primary key and metadata', () => {
      schema = new Schema('bars', 'uuid', { foo: 'bar' });

      expect(schema.primaryKey).toBe('uuid');
      expect(schema.metadata).toEqual({ foo: 'bar' });
    });

    it('allows metadata as 2nd argument', () => {
      schema = new Schema('bars', { foo: 'bar' });

      expect(schema.primaryKey).toBe('id');
      expect(schema.metadata).toEqual({ foo: 'bar' });
    });

    it('can pass primary key through metadata', () => {
      schema = new Schema('bars', { primaryKey: 'uuid', foo: 'bar' });

      expect(schema.primaryKey).toBe('uuid');
      expect(schema.metadata).toEqual({ primaryKey: 'uuid', foo: 'bar' });
    });

    it('supports compound keys', () => {
      schema = new Schema('bars', ['start_date', 'end_date']);

      expect(schema.primaryKey).toEqual(['start_date', 'end_date']);
      expect(schema.metadata).toEqual({});
    });
  });

  describe('addAttributes()', () => {
    it('adds attributes', () => {
      expect(schema.attributes).toEqual([]);

      schema.addAttributes(['foo', 'bar']);

      expect(schema.attributes).toEqual(['foo', 'bar']);

      schema.addAttributes(['baz']);

      expect(schema.attributes).toEqual(['foo', 'bar', 'baz']);
    });
  });

  describe('addRelation()', () => {
    it('errors if not a schema', () => {
      expect(() => {
        // @ts-ignore
        schema.addRelation('foo', 'bar');
      }).toThrowError('Relation "foo" is not a valid schema.');
    });

    it('errors if been mapped before', () => {
      expect(() => {
        schema.addRelation('foo', new Schema('foos'), Schema.HAS_ONE);
        schema.addRelation('foo', new Schema('foos'), Schema.HAS_MANY);
      }).toThrowError('Relation "foo" has already been mapped as "hasOne".');
    });
  });

  describe('belongsTo()', () => {
    it('adds a schema and maps the attribute', () => {
      expect(schema.relations).toEqual([]);

      schema.belongsTo({ qux });

      expect(schema.relations).toEqual([
        {
          attribute: 'qux',
          schema: qux,
          relation: 'belongsTo',
          collection: false,
        },
      ]);
      expect(schema.attributes).toEqual(['qux']);
    });
  });

  describe('belongsToMany()', () => {
    it('adds a schema and maps the attribute', () => {
      expect(schema.relations).toEqual([]);

      schema.belongsToMany({ qux });

      expect(schema.relations).toEqual([
        {
          attribute: 'qux',
          schema: qux,
          relation: 'belongsToMany',
          collection: true,
        },
      ]);
      expect(schema.attributes).toEqual(['qux']);
    });
  });

  describe('define()', () => {
    it('adds a has one relation for a single schema', () => {
      expect(schema.relations).toEqual([]);

      schema.define({ foo });

      expect(schema.relations).toEqual([
        {
          attribute: 'foo',
          schema: foo,
          relation: 'hasOne',
          collection: false,
        },
      ]);
    });

    it('adds a has many relation for an array of schemas', () => {
      expect(schema.relations).toEqual([]);

      schema.define({ qux: [qux] });

      expect(schema.relations).toEqual([
        {
          attribute: 'qux',
          schema: qux,
          relation: 'hasMany',
          collection: true,
        },
      ]);
    });

    it('errors if schema array is not valid', () => {
      expect(() => {
        schema.define({ foo: [] });
      }).toThrowError('Relation "foo" is not a valid schema.');

      expect(() => {
        // @ts-ignore
        schema.define({ foo: [123] });
      }).toThrowError('Relation "foo" is not a valid schema.');
    });
  });

  describe('hasOne()', () => {
    it('adds a schema and maps the attribute', () => {
      expect(schema.relations).toEqual([]);

      schema.hasOne({ qux });

      expect(schema.relations).toEqual([
        {
          attribute: 'qux',
          schema: qux,
          relation: 'hasOne',
          collection: false,
        },
      ]);
      expect(schema.attributes).toEqual(['qux']);
    });
  });

  describe('hasMany()', () => {
    it('adds a schema and maps the attribute', () => {
      schema.hasMany({ foo, qux });

      expect(schema.relations).toEqual([
        {
          attribute: 'foo',
          schema: foo,
          relation: 'hasMany',
          collection: true,
        },
        {
          attribute: 'qux',
          schema: qux,
          relation: 'hasMany',
          collection: true,
        },
      ]);
      expect(schema.attributes).toEqual(['foo', 'qux']);
    });
  });

  describe('morphTo()', () => {
    it('adds a schema and maps the attribute', () => {
      expect(schema.relations).toEqual([]);

      schema.morphTo({ foo, qux }, 'item');

      expect(schema.relations).toEqual([
        {
          attribute: 'item',
          schema: foo,
          relation: 'morphTo',
          collection: false,
          polymorph: {
            keySuffix: '_id',
            type: 'foo',
            typeSuffix: '_type',
          },
        },
        {
          attribute: 'item',
          schema: qux,
          relation: 'morphTo',
          collection: false,
          polymorph: {
            keySuffix: '_id',
            type: 'qux',
            typeSuffix: '_type',
          },
        },
      ]);
      expect(schema.attributes).toEqual(['item']);
    });

    it('can customize suffixes', () => {
      expect(schema.relations).toEqual([]);

      schema.morphTo({ qux }, 'item', '_model', '_key');

      expect(schema.relations).toEqual([
        {
          attribute: 'item',
          schema: qux,
          relation: 'morphTo',
          collection: false,
          polymorph: {
            keySuffix: '_key',
            type: 'qux',
            typeSuffix: '_model',
          },
        },
      ]);
    });
  });
});
