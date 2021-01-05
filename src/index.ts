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

const decode = (str: string): number => {
  const result = str
    .split("")
    .map((val, idx, arr) => {
      const current = getValueOf(val);
      const next = getValueOf(arr[idx + 1]) ?? 0;

      return current < next ? current * -1 : current;
    })
    .reduce((acc, cur) => acc + cur);

  return result as any;
};

const encode = (num: number): string => {
  const values: { value: number; char: string }[] = [
    {
      value: 100,
      char: "C",
    },
    {
      value: 90,
      char: "XC",
    },
    {
      value: 50,
      char: "L",
    },
    {
      value: 40,
      char: "XL",
    },
    {
      value: 10,
      char: "X",
    },
    {
      value: 9,
      char: "IX",
    },
    {
      value: 5,
      char: "V",
    },
    {
      value: 4,
      char: "IV",
    },
    {
      value: 1,
      char: "I",
    },
  ];

  let counter = num; //?
  let result: string = "";

  while (counter !== 0) {
    values.forEach((i) => {
      if (counter >= i.value) {
        result += i.char;
        counter -= i.value;
      }
    });
  }

  return result;
};

decode("XLIV"); //?
decode("XCIX"); //?

encode(96); //?
encode(98); //?
encode(69); //?
