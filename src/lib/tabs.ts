/**
 * How many tabs share a row on a phone. The rows are balanced rather than
 * filled four at a time, so five tabs sit 3 + 2 and seven sit 4 + 3; filling
 * greedily would strand the last tab across a row of its own.
 */
export function tabsPerRow(count: number): number {
  const rows = Math.ceil(count / 4);
  return Math.ceil(count / rows);
}
