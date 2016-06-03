module.exports = {
  name: 'Instance',
  imports: [
    { default: 'InstNamespace', named: ['InstanceClassName'], path: '/path/to/InstanceClassName' }
  ],
  constants: {
    INST_STR: 'foobar',
    INST_ENABLED: true
  },
  attributes: {
    instField: {
      type: 'inst',
      contract: 'InstanceClassName'
    },
    instanceField: {
      type: 'instance',
      contract: 'InstNamespace.InstanceClassName'
    }
  }
};