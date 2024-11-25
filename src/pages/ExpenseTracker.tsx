import { useState } from "react";
import styled from "styled-components";
import ExpenseFormModal, {
  FormData,
} from "../components/expense-tracker/ExpenseFormModal";
import { Expense } from "../types";
import { Button } from "../utility-styles";

const ExpenseTotal = styled.span`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 3rem;
`;

const OptionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const defaultExpenses: Expense[] = [
  {
    title: "Tires",
    amount: 189.0,
    category: "Vehicle",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    title: "Oil Change",
    amount: 89.0,
    category: "Vehicle",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    title: "Groceries",
    amount: 229.0,
    category: "Food",
    createdAt: new Date().toLocaleDateString(),
  },
];

const ExpenseTrackerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>(defaultExpenses);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(expenses);

  return (
    <div>
      {isModalOpen && (
        <ExpenseFormModal
          onSubmit={(data: FormData) =>
            setExpenses([
              ...expenses,
              {
                ...data,
                createdAt: new Date().toLocaleDateString(),
              },
            ])
          }
          onClose={handleCloseModal}
        />
      )}
      <OptionsBar>
        <ExpenseTotal>
          {/* {`$${expenses.reduce((acc, val) => acc + val.amount, 0).toFixed(2)}`} */}
        </ExpenseTotal>

        <Button onClick={handleOpenModal}>Add Expense</Button>
      </OptionsBar>
    </div>
  );
};

export default ExpenseTrackerPage;
