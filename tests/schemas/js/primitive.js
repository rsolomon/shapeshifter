module.exports = {
  name: 'Primitive',
  constants: {
    PRIMITIVE_VALUES: ['string', 123, true],
    PRIMITIVE_STR: 'primitive',
  },
  attributes: {
    boolField: 'bool',
    boolFieldExpanded: {
      type: 'bool',
      nullable: true,
    },
    booleanField: 'boolean',
    booleanFieldExpanded: {
      type: 'boolean',
      nullable: true,
    },
    intField: 'int',
    intFieldExpanded: {
      type: 'int',
      nullable: true,
    },
    integerField: 'integer',
    integerFieldExpanded: {
      type: 'integer',
      nullable: true,
    },
    numField: 'num',
    numFieldExpanded: {
      type: 'num',
      nullable: true,
    },
    numberField: 'number',
    numberFieldExpanded: {
      type: 'number',
      nullable: true,
    },
    floatField: 'float',
    floatFieldExpanded: {
      type: 'float',
      nullable: true,
    },
    strField: 'str',
    strFieldExpanded: {
      type: 'str',
      nullable: true,
    },
    stringField: 'string',
    stringFieldExpanded: {
      type: 'string',
      nullable: true,
    },
  },
};
