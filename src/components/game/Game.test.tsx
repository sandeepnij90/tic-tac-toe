import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { Game } from "./Game";

describe("<Game />", () => {
  it("should default with player 0", () => {
    render(<Game />);
    expect(
      screen.getByRole("heading", { name: /it is o's move/i })
    ).toBeInTheDocument();
  });

  it("should switch player after a move", async () => {
    const user = userEvent.setup();
    render(<Game />);
    const tile = screen.getByRole("button", { name: /tile 1/i });
    await user.click(tile);
    expect(
      screen.getByRole("heading", { name: /it is x's move/i })
    ).toBeInTheDocument();
  });

  it("should display winner when there is a winning combination", async () => {
    const user = userEvent.setup();
    render(<Game />);
    const tile1 = screen.getByRole("button", { name: /tile 1/i });
    const tile2 = screen.getByRole("button", { name: /tile 2/i });
    const tile3 = screen.getByRole("button", { name: /tile 3/i });
    const tile4 = screen.getByRole("button", { name: /tile 4/i });
    const tile5 = screen.getByRole("button", { name: /tile 5/i });

    await user.click(tile1);
    await user.click(tile4);
    await user.click(tile2);
    await user.click(tile5);
    await user.click(tile3);

    expect(
      screen.getByRole("heading", { name: /player o wins!/i })
    ).toBeInTheDocument();
  });

  it("should display draw when there is no winner", async () => {
    render(<Game />);
    const tile1 = screen.getByRole("button", { name: /tile 1/i });
    const tile2 = screen.getByRole("button", { name: /tile 2/i });
    const tile3 = screen.getByRole("button", { name: /tile 3/i });
    const tile4 = screen.getByRole("button", { name: /tile 5/i });
    const tile5 = screen.getByRole("button", { name: /tile 8/i });
    const tile6 = screen.getByRole("button", { name: /tile 6/i });
    const tile7 = screen.getByRole("button", { name: /tile 4/i });
    const tile8 = screen.getByRole("button", { name: /tile 7/i });
    const tile9 = screen.getByRole("button", { name: /tile 9/i });

    await userEvent.click(tile1);
    await userEvent.click(tile2);
    await userEvent.click(tile3);
    await userEvent.click(tile4);
    await userEvent.click(tile5);
    await userEvent.click(tile6);
    await userEvent.click(tile8);
    await userEvent.click(tile7);
    await userEvent.click(tile9);

    expect(
      screen.getByRole("heading", { name: /player/i })
    ).toBeInTheDocument();
  });

  it("should be able to reset game after winner", async () => {
    const user = userEvent.setup();
    render(<Game />);
    const tile1 = screen.getByRole("button", { name: /tile 1/i });
    const tile2 = screen.getByRole("button", { name: /tile 2/i });
    const tile3 = screen.getByRole("button", { name: /tile 3/i });
    const tile4 = screen.getByRole("button", { name: /tile 4/i });
    const tile5 = screen.getByRole("button", { name: /tile 5/i });

    await user.click(tile1);
    await user.click(tile4);
    await user.click(tile2);
    await user.click(tile5);
    await user.click(tile3);

    const resetButton = screen.getByRole("button", { name: /restart/i });
    await user.click(resetButton);
    expect(
      screen.getByRole("heading", { name: /it is o's move/i })
    ).toBeInTheDocument();
  });
});
