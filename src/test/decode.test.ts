import * as chai from "chai";
import { toArabic } from "../decode";
import { testInputs } from "./test-inputs";

const { expect } = chai;

describe("encode Roman Numerals", function () {
  describe("error inputs", function () {
    it("should throw for non Roman characters", () => {
      try {
        toArabic("TFI");
      } catch (error) {
        expect(error.message).to.equal(
          "Only Roman characters I, V, X, L, C, D, M are supported"
        );
      }
    });

    it("should throw for whitespace and punctuation", () => {
      try {
        toArabic(" . /");
      } catch (error) {
        expect(error.message).to.equal(
          "Only Roman characters I, V, X, L, C, D, M are supported"
        );
      }
    });

    it("should throw for non-string input", () => {
      try {
        toArabic(69 as any);
      } catch (error) {
        expect(error.message).to.equal("Input must be a string");
      }
    });
  });

  describe("normal inputs", function () {
    it("should decode normal numbers", () => {
      testInputs.forEach((i) => {
        expect(toArabic(i.string)).to.equal(i.value);
      });
    });
  });
});
