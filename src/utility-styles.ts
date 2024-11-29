import styled, { css } from "styled-components";

const input = css`
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

export const TextInput = styled.input`
  ${input}
`;

export const Select = styled.select`
  ${input}
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
  padding: 1rem 1.8rem;
  color: #fff;
  transition: 0.15s;

  &:hover {
    background-color: #118ccf;
  }

  &.span {
    width: 100%;
  }

  &.secondary {
    background-color: ${(props) => props.theme.color.backgroundSecondary};
    border: ${(props) => props.theme.border};
    color: ${(props) => props.theme.color.primaryText};
  }
`;
