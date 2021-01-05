const getValueOf = (char: string): number => {
  const numberValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return numberValues[char];
};

export function toArabic(str: string): number {
  if ((typeof str as any) !== "string")
    throw new Error("Input must be a string");

  const invalidChars = /([^IVXLCDM])/gi.test(str);
  if (invalidChars)
    throw new Error("Only Roman characters I, V, X, L, C, D, M are supported");

  const result = str
    .toUpperCase()
    .split("")
    .map((val, idx, arr) => {
      const current = getValueOf(val);
      const next = getValueOf(arr[idx + 1]) ?? 0;

      return current < next ? current * -1 : current;
    })
    .reduce((acc, cur) => acc + cur);

  return result as any;
}
