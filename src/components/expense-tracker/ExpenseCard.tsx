import styled from "styled-components";
import { Expense } from "../../types";

const Card = styled.article`
  border: ${(props) => props.theme.border};
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  border-radius: 8px;
`;

const ExpenseTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color.primaryText};
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpenseDate = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.color.primaryText};
`;

interface Props {
  expenseTitle: string;
  expenseCategory: string;
  expenseAmount: number;
  expenseDate: string;
}

const ExpenseCard = ({ ...props }: Expense) => {
  return (
    <Card>
      <CardHeader>
        <ExpenseTitle>{props.title}</ExpenseTitle>
        <ExpenseDate>{props.createdAt}</ExpenseDate>
      </CardHeader>
    </Card>
  );
};

export default ExpenseCard;
