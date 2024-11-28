import styled from "styled-components";
import { Button, Label, Select, TextInput } from "../../utility-styles";
import { useForm } from "react-hook-form";
import { categories } from "../../data/category-data";

const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0 2.4rem;
  box-sizing: border-box;
`;

const Modal = styled.div`
  max-width: 40rem;
  width: 100%;
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  position: relative;
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  z-index: 1;
  color: ${(props) => props.theme.color.primaryText};
  padding: 2rem;
`;

const ModalHeading = styled.h2`
  font-size: 2.6rem;
  color: ${(props) => props.theme.color.primaryText};
`;

const ExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export interface FormData {
  title: string;
  amount: number;
  category: string;
}

interface Props {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const ExpenseFormModal = ({ onClose, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <ModalOverlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeading>Add Expense</ModalHeading>
        <ExpenseForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Expense</Label>
            <TextInput
              {...register("title")}
              type="text"
              placeholder="e.g. Winter Tires"
            />
          </div>
          <div>
            <Label>Category</Label>

            <Select defaultValue="placeholder" {...register("category")}>
              <option value="placeholder" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label>Amount</Label>
            <TextInput
              {...register("amount", { valueAsNumber: true })}
              type="number"
              placeholder="e.g. 215.85"
            />
          </div>
          <ButtonWrapper>
            <Button onClick={onClose} className="secondary span">
              Cancel
            </Button>
            <Button className="span" type="submit">
              Submit
            </Button>
          </ButtonWrapper>
        </ExpenseForm>
      </Modal>
    </ModalOverlay>
  );
};

export default ExpenseFormModal;
