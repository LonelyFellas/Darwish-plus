/**
 * Check if a value is an infinity number.
 * @param value any
 * @returns
 */
export default function isInfinity(value: any): value is number {
  return value === Infinity || value === -Infinity;
}
