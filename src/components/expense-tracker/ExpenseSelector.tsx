import styled from "styled-components";

const Selector = styled.select`
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background: none;
  color: ${(props) => props.theme.color.primaryText};
  margin-right: 1rem;
`;

const Option = styled.option`
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.primaryText};

  &:hover {
    background-color: red;
  }
`;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ExpenseSelector = ({ onChange }: Props) => {
  return (
    <Selector onChange={(e) => onChange(e)} defaultValue="placeholder">
      <Option value="placeholder" disabled>
        Select Category
      </Option>
      <Option value="">None</Option>
      <Option value="Food">Food</Option>
      <Option value="Vehicle">Vehicle</Option>
      <Option value="Fun">Fun</Option>
    </Selector>
  );
};

export default ExpenseSelector;
