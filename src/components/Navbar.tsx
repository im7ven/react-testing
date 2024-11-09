import styled from "styled-components";
import { CiLight, CiDark } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 2.4rem;
`;

const HomeIcon = styled(IoHome)`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 2.5rem;
`;

const LightToggle = styled(CiLight).withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkTheme",
})<{ isDarkTheme: boolean }>`
  max-height: ${(props) => (props.isDarkTheme ? "initial" : 0)};
  opacity: ${(props) => (props.isDarkTheme ? 1 : 0)};
  transform: ${(props) =>
    props.isDarkTheme ? "translateX(0rem)" : "translateX(3rem)"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${(props) => props.theme.color.primaryText};
`;

const DarkToggle = styled(CiDark).withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkTheme",
})<{ isDarkTheme: boolean }>`
  max-height: ${(props) => (props.isDarkTheme ? 0 : "initial")};
  opacity: ${(props) => (props.isDarkTheme ? 0 : 1)};
  transform: ${(props) =>
    props.isDarkTheme ? "translateX(3rem)" : "translateX(0rem)"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${(props) => props.theme.color.primaryText};
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
        <HomeIcon />
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
