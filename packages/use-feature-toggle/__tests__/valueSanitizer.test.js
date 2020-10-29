import { valueSanitizer } from "../lib/valueSanitizer";

describe("Value sanitizer", () => {
  it("should return false when no value is passed", () => {
    const value = valueSanitizer();
    expect(value).toStrictEqual(false);
  });
  it("should return true when value is number 1", () => {
    const value = valueSanitizer(1);
    expect(value).toStrictEqual(true);
  });
  it("should return true when value is string 1", () => {
    const value = valueSanitizer("1");
    expect(value).toStrictEqual(true);
  });
  it("should return true when value is string true (lowercase)", () => {
    const value = valueSanitizer("true");
    expect(value).toStrictEqual(true);
  });
  it("should return true when value is string true (uppercase)", () => {
    const value = valueSanitizer("TRUE");
    expect(value).toStrictEqual(true);
  });
});
