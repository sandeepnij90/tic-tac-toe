import { isWinningCombination } from "./isWinningCombination";

describe("checkIsWinningSequence", () => {
  it("should return false if sequence length is less than 3", () => {
    expect(isWinningCombination([1, 2])).toBe(false);
  });

  it("should return true if sequence is a winning combination", () => {
    expect(isWinningCombination([1, 2, 3])).toBe(true);
  });

  it("should return true if sequence is a winning combination but in different order", () => {
    expect(isWinningCombination([2, 3, 1])).toBe(true);
  });

  it("should return false if sequence is not a winning combination", () => {
    expect(isWinningCombination([1, 2, 5])).toBe(false);
  });

  it("should return true if sequence is a winning combination with more than 3 elements", () => {
    expect(isWinningCombination([1, 2, 4, 3, 5])).toBe(true);
  });
});
