// A fake file to resolve all the imports used

export default class DefaultClass {}

export class InstanceClassName {}
DefaultClass.InstanceClassName = InstanceClassName;

export class UnionClassName {}
DefaultClass.UnionClassName = UnionClassName;

export class ShapeClassName {}
DefaultClass.ShapeClassName = ShapeClassName;

export const Foo = {};
export const Bar = {};
export const Baz = {};
export const QUX = {};

export function foo() {}
export function bar() {}
