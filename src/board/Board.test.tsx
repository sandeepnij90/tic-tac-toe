import { Board } from "./Board";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("<Board />", () => {
  it("Should render 9 tiles", () => {
    const func = vi.fn();
    render(
      <Board
        onClick={func}
        onRestart={func}
        currentPlayer="O"
        gameOver={false}
      />
    );
    expect(screen.queryAllByRole("button")).toHaveLength(9);
  });

  it("should render the reset button if the game is over", () => {
    const func = vi.fn();
    render(
      <Board onClick={func} onRestart={func} currentPlayer="O" gameOver />
    );
    expect(
      screen.getByRole("button", { name: /restart/i })
    ).toBeInTheDocument();
  });

  it("Should restart game when restart button is clicked", async () => {
    const user = userEvent.setup();
    const func = vi.fn();
    render(
      <Board onClick={func} onRestart={func} currentPlayer="O" gameOver />
    );
    const restartButton = screen.getByRole("button", { name: /restart/i });
    await user.click(restartButton);
    expect(func).toHaveBeenCalled();
  });
});
