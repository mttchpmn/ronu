export function toRoman(num: number): string {
  if (typeof num !== "number")
    throw new Error("Number to encode must be a number");
  if (num < 1) throw new Error("Number to encode must be positive");
  if (num > 3999) throw new Error("Number to encode must be less than 4000");
  if (num % 1 !== 0) throw new Error("Number to encode must be a whole number");

  const values: { value: number; char: string }[] = [
    {
      value: 1000,
      char: "M",
    },
    {
      value: 900,
      char: "CM",
    },
    {
      value: 500,
      char: "D",
    },
    {
      value: 400,
      char: "CD",
    },
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

  let counter = num;
  let result: string = "";

  while (counter !== 0) {
    for (const i of values) {
      if (counter >= i.value) {
        result += i.char;
        counter -= i.value;
        break;
      }
    }
  }

  return result;
}
