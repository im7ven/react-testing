import styled from "styled-components";
import { Expense } from "../../types";

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
  expenses: Expense[];
}

const ExpenseSelector = ({ onChange, expenses }: Props) => {
  const expenseCategories = expenses.map((expense) => expense.category);
  const uniqueCategories = Array.from(new Set(expenseCategories));

  return (
    <Selector onChange={(e) => onChange(e)} defaultValue="placeholder">
      <Option value="placeholder" disabled>
        Select Category
      </Option>
      <Option value="">All</Option>

      {uniqueCategories.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Selector>
  );
};

export default ExpenseSelector;
