module.exports = {
  name: 'Polymorph',
  references: {
    PolymorphVideo: './polymorph-video.js',
  },
  shapes: {
    Image: {
      url: 'string',
    },
  },
  attributes: {
    item: {
      type: 'polymorph',
      valueTypes: [
        {
          type: 'shape',
          name: 'App\\Model\\Image',
          reference: 'Image',
        },
        {
          type: 'reference',
          name: 'App\\Model\\Video',
          reference: 'PolymorphVideo',
        },
      ],
    },
    product: {
      type: 'polymorph',
      keySuffix: '_key',
      typeSuffix: '_model',
      valueTypes: [
        {
          type: 'shape',
          name: 'Model::Image',
          reference: 'Image',
        },
        {
          type: 'reference',
          name: 'Model::Video',
          reference: 'PolymorphVideo',
        },
      ],
    },
  },
};
