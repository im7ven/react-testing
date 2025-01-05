import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import { ThemeContextProvider, useTheme } from "../src/contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/theme";

describe("Theme", () => {
  it("should not render the theme toggle if user is on home page", () => {
    render(
      <ThemeContextProvider>
        <MemoryRouter initialEntries={["/apps"]}>
          <ThemeProvider theme={lightTheme}>
            <Navbar />
          </ThemeProvider>
        </MemoryRouter>
      </ThemeContextProvider>
    );

    const toggleWrapper = screen.queryByTestId("theme-toggle");
    expect(toggleWrapper).not.toBeInTheDocument();
  }); 
});
