import { Outlet } from "react-router-dom";
import GlobalStyle from "../global-styles";
import Navbar from "./Navbar";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

const Layout = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Layout;
