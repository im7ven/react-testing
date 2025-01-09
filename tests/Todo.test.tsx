import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoPage from "../src/pages/Todo";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/theme";

describe("Todo - Adding Todos", () => {
  const renderTodoPage = () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <TodoPage />
      </ThemeProvider>
    );

    return {
      button: screen.getByRole("button", { name: /add/i }),
      input: screen.getByPlaceholderText(/e.g./),
      user: userEvent.setup(),
      duplicateTodo: "New Todo",
    };
  };

  it("should add a todo if a valid description is provided", async () => {
    const { button, input, user } = renderTodoPage();

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    await user.type(input, "New Todo");
    await user.click(button);

    const todo = screen.getByText("New Todo");

    expect(todo).toBeInTheDocument();
  });

  it("should prevent duplicate todos from being added ", async () => {
    const { button, user, input, duplicateTodo } = renderTodoPage();

    await user.type(input, duplicateTodo);
    await user.click(button);

    await user.type(input, duplicateTodo);
    await user.click(button);

    expect(screen.getAllByText(duplicateTodo).length).toBe(1);
  });

  it("should render the correct error message when validating todos", async () => {
    const { button, user, input, duplicateTodo } = renderTodoPage();

    await user.click(button);

    expect(screen.getByText("Todo is required")).toBeInTheDocument();

    await user.type(input, duplicateTodo);
    await user.click(button);
    await user.type(input, duplicateTodo);
    await user.click(button);

    expect(screen.getByText("Todo already exist")).toBeInTheDocument();
  });
});
