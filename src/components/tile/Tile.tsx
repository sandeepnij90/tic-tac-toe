import { useEffect, useState } from "react";
import { Player } from "../game/Game";
import "./tile.css";

type Props = {
  position: number;
  onClick: (position: number) => void;
  currentPlayer: Player;
  disabled: boolean;
  reset: boolean;
};

export const Tile = ({
  position,
  onClick,
  currentPlayer,
  disabled,
  reset,
}: Props) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    setSelectedPlayer(currentPlayer);
    onClick(position);
  };

  useEffect(() => {
    if (reset) {
      setSelectedPlayer(undefined);
      setIsDisabled(false);
    }
  }, [reset]);

  return (
    <button
      disabled={isDisabled || disabled}
      onClick={handleClick}
      className="tile"
      title={`Tile ${position}`}
    >
      {selectedPlayer}
    </button>
  );
};
