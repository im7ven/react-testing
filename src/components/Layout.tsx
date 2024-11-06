import { Outlet } from "react-router-dom";
import GlobalStyle from "../global-styles";
import Navbar from "./Navbar";
import { ThemeContextProvider } from "../contexts/ThemeContext";

const Layout = () => {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
