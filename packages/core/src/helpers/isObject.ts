/**
 * @copyright   2016-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

/**
 * Return true if the value is a literal object.
 */
export default function isObject<T>(value: T): boolean {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
