import styled from "styled-components";
import { Expense } from "../../types";

const Card = styled.article`
  border: ${(props) => props.theme.border};
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.1s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
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

const ExpenseTotal = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.color.secondaryText};
`;

const RemoveButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  color: white;
  right: -1rem;
  top: -1rem;
  outline: 0;
  border: ${(props) => props.theme.border};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

interface Props {
  title: string;
  createdAt: string;
  amount: number;
  onDelete: () => void;
}

const ExpenseCard = ({ ...props }: Props) => {
  return (
    <Card>
      <CardHeader>
        <ExpenseTitle>{props.title}</ExpenseTitle>
        <ExpenseDate>{props.createdAt}</ExpenseDate>
      </CardHeader>
      <ExpenseTotal>${props.amount.toFixed(2)}</ExpenseTotal>
      <RemoveButton onClick={props.onDelete}>X</RemoveButton>
    </Card>
  );
};

export default ExpenseCard;
