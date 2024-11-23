import { Outlet } from "react-router-dom";
import GlobalStyle from "../global-styles";
import Navbar from "./Navbar";
import { useTheme } from "../contexts/ThemeContext";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

const Main = styled.main`
  padding: 0 2.4rem;
`;

const Layout = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar />
        <Main>
          <Outlet />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
