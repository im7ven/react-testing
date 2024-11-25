import styled from "styled-components";

export const TextInput = styled.input`
  border: ${(props) => props.theme.border};
  padding: 1.4rem;
  border-radius: 5px;
  width: 100%;
  background: ${(props) => props.theme.input.background};
  flex-grow: 1;
  color: ${(props) => props.theme.color.primaryText};
  width: 100%;
  box-sizing: border-box;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 0.7rem;
  display: inline-block;
`;

export const Button = styled.button`
  outline: 0;
  border-radius: 5px;
  border: 0;
  background-color: #009ff5;
  padding: 1rem 1.5rem;
  color: #fff;
  transition: 0.15s ease-in;

  &:hover {
    box-shadow: 0 0 10px 0 #0263ff;
  }
`;
