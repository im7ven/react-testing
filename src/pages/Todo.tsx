import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  padding: 0 2.4rem;
`;

const TodoForm = styled.div`
  display: flex;
  justify-content: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.7rem;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.color.primaryText};
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const TextInput = styled.input`
  border: ${(props) => props.theme.border};
  padding: 1.5rem;
  border-radius: 5px;
  background: ${(props) => props.theme.input.background};
  flex-grow: 1;
  color: ${(props) => props.theme.color.primaryText};

  @media screen and (min-width: 440px) {
    width: 30rem;
  }
  @media screen and (min-width: 768px) {
    width: 60rem;
  }
`;

const SubmitButton = styled.button`
  color: #fff;
  outline: 0;
  font-weight: 100;
  text-transform: uppercase;
  border: 0;
  padding: 1rem 1.8rem;
  border-radius: 5px;
  background-color: #3596d2;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 90rem;
  padding: 2rem;
  margin: 5rem auto;
  border: ${(props) => props.theme.border};
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoLabel = styled.p`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 1.7rem;
`;

const RemoveButton = styled.button`
  outline: 0;
  padding: 0.5rem 1rem;
  color: #f0405b;
  border: 1px solid #f0405b;
  border-radius: 5px;
  background: 0;
  transition: all 0.15s ease-in;

  &:hover {
    border-radius: 0px;
  }
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CheckBox = styled.span`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  border: ${(props) => props.theme.border};
`;

const TodoPlaceHolder = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  margin-top: 2rem;
  color: ${(props) => props.theme.color.primaryText};
`;

const CheckMark = styled.span`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
`;

const TodoPage = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodo = () => {
    if (todos.includes(todoValue)) {
      alert("Cannot have duplicate todos");
      setTodoValue("");
      return;
    }

    setTodos([...todos, todoValue]);
    setTodoValue("");
  };

  const handleRemoveTodo = (todoLabel: string) => {
    setTodos(todos.filter((todo) => todo !== todoLabel));
  };

  return (
    <Main>
      <TodoForm>
        <FormGroup>
          <Label>Todo</Label>
          <InputWrapper>
            <TextInput
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              placeholder="e.g. Change the tires"
            />
            <SubmitButton onClick={handleAddTodo}>Add Todo</SubmitButton>
          </InputWrapper>
        </FormGroup>
      </TodoForm>
      {todos.length > 0 ? (
        <TodoContainer>
          {todos.map((todo) => (
            <TodoWrapper key={todo}>
              <CheckBoxWrapper>
                <CheckBox></CheckBox>
                <TodoLabel>{todo}</TodoLabel>
              </CheckBoxWrapper>
              <RemoveButton onClick={() => handleRemoveTodo(todo)}>
                Remove
              </RemoveButton>
            </TodoWrapper>
          ))}
        </TodoContainer>
      ) : (
        <TodoPlaceHolder>You currently have no todos</TodoPlaceHolder>
      )}
    </Main>
  );
};

export default TodoPage;
