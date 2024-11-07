import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 2.4rem;
`;

const LightToggle = styled(CiLight)<{ isDarkTheme: boolean }>`
  max-height: ${(props) => (props.isDarkTheme ? "initail" : 0)};
  opacity: ${(props) => (props.isDarkTheme ? 1 : 0)};
  transform: ${(props) =>
    props.isDarkTheme ? "translateX(0rem)" : "translateX(3rem)"};
  transition: all.3s ease-in-out;
  cursor: pointer;
`;

const DarkToggle = styled(CiDark)<{ isDarkTheme: boolean }>`
  max-height: ${(props) => (props.isDarkTheme ? 0 : "initial")};
  opacity: ${(props) => (props.isDarkTheme ? 0 : 1)};
  transition: all.3s ease-in-out;
  cursor: pointer;
  transform: ${(props) =>
    props.isDarkTheme ? "translateX(3rem)" : "translateX(0rem)"};
`;

const ToggleWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const Navbar = () => {
  const { isDarkTheme, setTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <Nav>
      <Link to="/">
        <IoHome size={25} color={isDarkTheme ? "#fff" : "#21201c"} />
      </Link>
      {pathname !== "/" && (
        <ToggleWrapper>
          <LightToggle
            size={30}
            onClick={() => setTheme(!isDarkTheme)}
            isDarkTheme={isDarkTheme}
          />
          <DarkToggle
            size={30}
            onClick={() => setTheme(!isDarkTheme)}
            isDarkTheme={isDarkTheme}
          />
        </ToggleWrapper>
      )}
    </Nav>
  );
};

export default Navbar;
