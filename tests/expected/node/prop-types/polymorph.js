/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

import PropTypes from 'prop-types';

export const KeyShape = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
]);

export const PolymorphVideoShape = PropTypes.shape({
  path: PropTypes.string,
});

export const PolymorphImageShape = PropTypes.shape({
  url: PropTypes.string,
});

export const PolymorphShape = PropTypes.shape({
  item: PropTypes.oneOfType([
    PolymorphImageShape.isRequired,
    PolymorphVideoShape.isRequired,
  ]),
  item_id: KeyShape,
  item_type: PropTypes.string,
});
