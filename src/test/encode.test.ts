import * as chai from "chai";
import { toRoman } from "../encode";
import { testInputs } from "./test-inputs";

const { expect } = chai;

describe("decode Roman Numerals", function () {
  describe("error inputs", function () {
    it("should throw for negative numbers", () => {
      try {
        toRoman(-1);
      } catch (error) {
        expect(error.message).to.equal("Number to encode must be positive");
      }
    });

    it("should throw for zero", () => {
      try {
        toRoman(0);
      } catch (error) {
        expect(error.message).to.equal("Number to encode must be positive");
      }
    });

    it("should throw for numbers greater than 3999", () => {
      try {
        toRoman(4069);
      } catch (error) {
        expect(error.message).to.equal(
          "Number to encode must be less than 4000"
        );
      }
    });

    it("should throw for NaN inputs", () => {
      try {
        toRoman("foo" as any);
      } catch (error) {
        expect(error.message).to.equal("Number to encode must be a number");
      }
    });

    it("should throw for non-whole numbers", () => {
      try {
        toRoman(1.69);
      } catch (error) {
        expect(error.message).to.equal(
          "Number to encode must be a whole number"
        );
      }
    });
  });

  describe("normal inputs", function () {
    it("should encode normal numbers", () => {
      testInputs.forEach((i) => {
        expect(toRoman(i.value)).to.equal(i.string);
      });
    });
  });
});
