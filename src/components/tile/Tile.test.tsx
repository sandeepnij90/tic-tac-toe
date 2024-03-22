import { Tile } from "./Tile";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { vi } from "vitest";

describe("<Tile>", () => {
  it("Should display O if current player is O and clicks on tile", async () => {
    const user = userEvent.setup();

    render(
      <Tile
        position={0}
        onClick={vi.fn()}
        currentPlayer="O"
        disabled={false}
        reset={false}
      />
    );

    const tile = screen.getByRole("button");
    await user.click(tile);
    expect(tile).toHaveTextContent("O");
  });

  it("Should display X if current player is O and clicks on tile", async () => {
    const user = userEvent.setup();

    render(
      <Tile
        position={0}
        onClick={vi.fn()}
        currentPlayer="X"
        disabled={false}
        reset={false}
      />
    );

    const tile = screen.getByRole("button");
    await user.click(tile);
    expect(tile).toHaveTextContent("X");
  });

  it("Should send back the position when clicked", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(
      <Tile
        position={1}
        onClick={mockOnClick}
        currentPlayer="X"
        disabled={false}
        reset={false}
      />
    );

    const tile = screen.getByRole("button");
    await user.click(tile);
    expect(mockOnClick).toHaveBeenCalledWith(1);
  });

  it("Should not be clickabled if disabled", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(
      <Tile
        position={1}
        onClick={mockOnClick}
        currentPlayer="X"
        disabled
        reset={false}
      />
    );

    const tile = screen.getByRole("button");
    await user.click(tile);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
