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

const FormError = styled.p`
  color: #ff5959;
  font-size: 1.3rem;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <ModalOverlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeading>Add Expense</ModalHeading>
        <ExpenseForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Expense</Label>
            <TextInput
              {...register("title", { required: "Must provide expense name" })}
              type="text"
              placeholder="e.g. Winter Tires"
            />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>
          <div>
            <Label>Category</Label>

            <Select
              defaultValue=""
              {...register("category", { required: "Must provide a category" })}
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            {errors.category && (
              <FormError>{errors.category.message}</FormError>
            )}
          </div>
          <div>
            <Label>Amount</Label>
            <TextInput
              {...register("amount", {
                valueAsNumber: true,
                required: "Must provide a amount",
              })}
              type="number"
              placeholder="e.g. 215.85"
            />
            {errors.amount && <FormError>{errors.amount.message}</FormError>}
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
