/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

export type Key = string | number;

export interface PolymorphVideoInterface {
  path?: string;
}

export interface PolymorphImageInterface {
  url?: string;
}

export interface PolymorphInterface {
  item?: PolymorphImageInterface | PolymorphVideoInterface;
  item_id?: Key;
  item_type?: string;
  product?: PolymorphImageInterface | PolymorphVideoInterface;
  product_key?: Key;
  product_model?: string;
}
