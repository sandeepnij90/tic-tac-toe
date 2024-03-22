export const isWinningCombination = (playerCombination: number[]) => {
  if (playerCombination.length < 3) return false;
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const winningCombination of winningCombinations) {
    const hasMatch = winningCombination.every((value) =>
      playerCombination.includes(value)
    );

    if (hasMatch) {
      return true;
    }
  }

  return false;
};
