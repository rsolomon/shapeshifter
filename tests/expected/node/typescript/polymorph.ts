/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

export type Key = string | number;

export interface PolymorphVideoInterface {
  path: string | null;
}

export interface PolymorphImageInterface {
  url: string | null;
}

export interface PolymorphInterface {
  item: PolymorphImageInterface | PolymorphVideoInterface | null;
  item_id: Key | null;
  item_type: string | null;
}
