import { Outlet } from "react-router-dom";
import GlobalStyle from "../global-styles";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
