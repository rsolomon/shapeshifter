declare module 'shapeshifter' {
  declare export type SchemaMap = { [attribute: string]: Schema };
  declare export type SchemaExtendedMap = { [attribute: string]: Schema | Schema[] };
  declare export type PrimaryKey = string | string[];
  declare export type Relation = {
    attribute: string,
    collection: boolean,
    relation: string,
    +schema: Schema,
  };

  declare export default class Schema {
    attributes: string[];
    metadata: Object;
    primaryKey: PrimaryKey;
    relations: Relation[];
    relationTypes: { [key: string]: string };
    resourceName: string;
    static HAS_ONE: string;
    static HAS_MANY: string;
    static BELONGS_TO: string;
    static BELONGS_TO_MANY: string;

    constructor(resourceName: string, primaryKey?: PrimaryKey | Object, metadata?: Object): void;
    addAttributes(attributes: string[]): this;
    addRelation(attribute: string, schema: Schema, relation: string): this;
    addRelations(schemas: SchemaMap, relation: string): this;
    belongsTo(relations: SchemaMap): this;
    belongsToMany(relations: SchemaMap): this;
    define(relations: SchemaExtendedMap): this;
    hasOne(relations: SchemaMap): this;
    hasMany(relations: SchemaMap): this;
  }
}