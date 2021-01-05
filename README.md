# RoNu

Easy Roman Numeral encoding and decoding.

## Overview

RoNu is a Typescript module that simplifies conversion between Arabic integers (1, 3, 59 etc) and Roman Numerals (I, XL, XLIX etc). It exposes 2 functions, `toRoman()`, and `toArabic()` which allows for conversion between formats. Conversion to Roman Numerals only supports whole, positive, numbers between 1 and 3999 inclusive. RoNu is combat tested against a suite of unit tests.

## Installation

Install from NPM Package Registry

```
npm install ronu
```

## Usage

Converting to Roman Numerals

```
import { toRoman } from 'ronu';

const myInteger = 69;

const myNumeral = toRoman(myInteger);

console.log(myNumeral); // Outputs "LXIX"
```

Converting Roman Numerals to integers

```
import { toRoman } from 'ronu';

const myNumeral = "MMMCMXCIX";

const myInteger = toArabic(myNumeral);

console.log(myNumeral); // Outputs 3999
```
