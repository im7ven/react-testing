import { RiTodoLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TechCard from "../components/ProjectCard";

const Headline = styled.h1`
  font-size: 4rem;
  max-width: 60rem;
  margin: 3rem auto 0;
`;

const Highlight = styled.span`
  background: linear-gradient(to right, #0263ff 0%, #0098cf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 30rem);
  gap: 1rem;
  margin: 6rem auto 0;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

function App() {
  return (
    <>
      <Headline>
        Building small apps to focus on <Highlight>testing</Highlight> and
        quality
      </Headline>
      <ProjectGrid>
        <ProjectLink to="/apps/todo">
          <TechCard
            icon={<RiTodoLine />}
            description=" A simple todo app featuring a user-friendly experience"
          />
        </ProjectLink>
        <TechCard
          icon={<RiTodoLine />}
          description=" A simple todo app featuring a user-friendly experience"
        />
        <TechCard
          icon={<RiTodoLine />}
          description=" A simple todo app featuring a user-friendly experience"
        />
        <TechCard
          icon={<RiTodoLine />}
          description=" A simple todo app featuring a user-friendly experience"
        />
      </ProjectGrid>
    </>
  );
}

export default App;
