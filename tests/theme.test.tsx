import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../src/components/Navbar";
import { ThemeContextProvider } from "../src/contexts/ThemeContext";
import { lightTheme } from "../src/theme";

describe("Theme", () => {
  it("should not render the theme toggle if user is on home page", () => {
    render(
      <ThemeContextProvider>
        <MemoryRouter initialEntries={["/"]}>
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
