import { useEffect, useState } from "react";
import { isWinningCombination } from "../../../utils/isWinningCombination";
import "./game.css";
import { Board } from "../../board/Board";

export type Player = "X" | "O" | "-";

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("O");
  const [playerO, setPlayerO] = useState<number[]>([]);
  const [playerX, setPlayerX] = useState<number[]>([]);
  const [winner, setWinner] = useState<Player | undefined>();

  const handlePlayerMove = (position: number) => {
    if (currentPlayer === "O") {
      setPlayerO((prev) => [...prev, position]);
      return setCurrentPlayer("X");
    }
    setPlayerX((prev) => [...prev, position]);
    return setCurrentPlayer("O");
  };

  useEffect(() => {
    if (playerO.length >= 3 && isWinningCombination(playerO)) {
      setWinner("O");
    }

    if (playerX.length >= 3 && isWinningCombination(playerX)) {
      setWinner("X");
    }

    if (playerO.length + playerX.length === 9 && !winner) {
      setWinner("-");
    }
  }, [playerO, playerX, winner]);

  const restartGame = () => {
    setPlayerO([]);
    setPlayerX([]);
    setWinner(undefined);
    setCurrentPlayer("O");
  };

  return (
    <div>
      {!Boolean(winner) && (
        <h1 className="game__title">It is {currentPlayer}'s move</h1>
      )}

      {winner === "-" && <h1 className="game__title">Draw</h1>}

      {Boolean(winner) && winner !== "-" && (
        <h1 className="game__title">Player {winner} wins!</h1>
      )}

      <Board
        onClick={handlePlayerMove}
        currentPlayer={currentPlayer}
        gameOver={Boolean(winner)}
        onRestart={restartGame}
      />
    </div>
  );
};
