import { isString, isNumber } from "@darwish/is";

type AddParam = number | string;

/**
 * Adds two numbers.
 *
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */

export default function add(augend: number, addend: number): number;
export default function add(augend: string, addend: string): number;
export default function add(augend: any, addend: any) {
  return augend + addend;
}
