import { PropTypes } from 'react';
import InstNamespace, { InstanceClassName } from '/path/to/InstanceClassName';

export const INST_STR = 'foobar';
export const INST_ENABLED = true;

export const InstanceSchema = PropTypes.shape({
  instField: PropTypes.instanceOf(InstanceClassName),
  instanceField: PropTypes.instanceOf(InstNamespace.InstanceClassName),
});