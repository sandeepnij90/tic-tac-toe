import { useEffect, useState } from "react";
import { Player } from "../components/game/Game";
import { Tile } from "../components/tile/Tile";
import "./board.css";

type Props = {
  onClick: (position: number) => void;
  currentPlayer: Player;
  gameOver: boolean;
  onRestart: () => void;
};

export const Board = ({
  onClick,
  currentPlayer,
  gameOver,
  onRestart,
}: Props) => {
  const [restartGame, setRestartGame] = useState(false);

  const handleRestart = () => {
    setRestartGame(true);
    onRestart();
  };

  useEffect(() => {
    if (restartGame) {
      setRestartGame(false);
    }
  }, [restartGame]);

  return (
    <>
      <div className="board">
        <Tile
          position={1}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={2}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={3}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={4}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={5}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={6}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={7}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={8}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
        <Tile
          position={9}
          onClick={onClick}
          currentPlayer={currentPlayer}
          disabled={gameOver}
          reset={restartGame}
        />
      </div>
      {gameOver && (
        <button className="restart-button" onClick={handleRestart}>
          Restart
        </button>
      )}
    </>
  );
};
