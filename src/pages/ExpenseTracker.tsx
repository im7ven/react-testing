import { useState } from "react";
import styled from "styled-components";
import ExpenseFormModal, {
  FormData,
} from "../components/expense-tracker/ExpenseFormModal";
import { Expense } from "../types";
import { Button, PlaceholderMessage } from "../utility-styles";
import ExpenseCard from "../components/expense-tracker/ExpenseCard";
import ExpenseSelector from "../components/expense-tracker/ExpenseSelector";

const ExpenseTotal = styled.span`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 3rem;
`;

const OptionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: ${(props) => props.theme.border};
`;

const ExpenseGrid = styled.section`
  display: grid;
  gap: 1rem;
  padding: 2rem 0;
  align-items: start;
  justify-items: center;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: initial;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    gap: 0.8rem;
  }
`;

const defaultExpenses: Expense[] = [
  {
    id: Date.now() + 1,
    title: "Tires",
    amount: 189.0,
    category: "Vehicle",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: Date.now() + 2,
    title: "Oil Change",
    amount: 89.0,
    category: "Vehicle",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: Date.now() + 3,
    title: "Groceries",
    amount: 229.0,
    category: "Food",
    createdAt: new Date().toLocaleDateString(),
  },
];

const ExpenseTrackerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>(defaultExpenses);
  const [category, setCategory] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (data: FormData) => {
    setExpenses([
      ...filteredExpenses,
      {
        ...data,
        createdAt: new Date().toLocaleDateString(),
        id: Date.now(),
      },
    ]);
    handleCloseModal();
  };

  const handleRemoveExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  return (
    <div>
      {isModalOpen && (
        <ExpenseFormModal onSubmit={handleSubmit} onClose={handleCloseModal} />
      )}
      <OptionsBar>
        <ExpenseTotal>
          {`$${filteredExpenses
            ?.reduce((acc, val) => acc + val.amount, 0)
            .toFixed(2)}`}
        </ExpenseTotal>
        <OptionButtonWrapper>
          <ExpenseSelector
            expenses={expenses}
            onChange={handleChangeCategory}
          />
          <Button onClick={handleOpenModal}>Add Expense</Button>
        </OptionButtonWrapper>
      </OptionsBar>
      {expenses.length ? (
        <ExpenseGrid>
          {filteredExpenses.map((expense) => (
            <ExpenseCard
              onDelete={() => handleRemoveExpense(expense.id)}
              key={expense.title}
              {...expense}
            />
          ))}
        </ExpenseGrid>
      ) : (
        <PlaceholderMessage>You currently have no expenses</PlaceholderMessage>
      )}
    </div>
  );
};

export default ExpenseTrackerPage;
