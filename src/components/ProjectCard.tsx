import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  display: inline-block;
  width: 30rem;
  flex-grow: 1;
  position: relative;
`;

const LightContainer = styled.div`
  display: flex;
  transform: translateY(-1.5px);
  justify-content: center;
`;

const LightWrapper = styled.div`
  width: 75%;
`;

const Light = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    #009ff5,
    rgba(0, 0, 0, 0)
  );

  height: 3px;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    font-size: 2rem;
    top: 0;
    left: 45%;
    right: 45%;
    opacity: 0;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: #009ff5 0px 0px 5rem 3rem;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Icon = styled.div`
  position: relative;
  font-size: 3.5rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
`;

interface Props {
  icon: ReactNode;
  description: string;
}

const ProjectCard = ({ icon, description }: Props) => {
  return (
    <Card>
      <LightContainer>
        <LightWrapper>
          <Light />
        </LightWrapper>
      </LightContainer>
      <ContentWrapper>
        <Icon>{icon}</Icon>
        <Description>
          A simple todo app featuring a user-friendly experience
        </Description>
      </ContentWrapper>
    </Card>
  );
};

export default ProjectCard;
