export function jsonStr(obj: any): string {
  return JSON.stringify(obj, null, 2);
}
export function jsonParse(str: string): any {
  let ans: string | null = null;
  try {
    JSON.parse(str);
  } catch (e) {
    console.error(e);
    ans = null;
  }
  return ans;
}
