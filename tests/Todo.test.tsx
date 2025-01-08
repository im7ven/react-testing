import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoPage from "../src/pages/Todo";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/theme";

describe("Todo - Adding Todos", () => {
  it("should add a todo if a valid description is provided", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <TodoPage />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /add todo/i });
    const input = screen.getByPlaceholderText(/e.g./);

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, "New Todo");
    await user.click(button);

    const todo = screen.getByText("New Todo");

    expect(todo).toBeInTheDocument();
  });
});
