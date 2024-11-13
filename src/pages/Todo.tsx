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

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  gap: 1rem;
  margin: 5rem auto;
  border-radius: 8px;
`;
const TodoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TodoLabel = styled.p`
  color: ${(props) => props.theme.color.primaryText};
  font-size: 1.7rem;
  transition: 1s;
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 8px;
  gap: 2rem;
  cursor: pointer;
  border: ${(props) => props.theme.border};
  flex-grow: 1;

  &:hover ${TodoLabel} {
    text-decoration: line-through;
  }
`;

const RemoveButton = styled.button`
  outline: 0;
  padding: 0.8rem 1rem;
  color: #f0405b;
  border: 1px solid #f0405b;
  border-radius: 5px;
  background: 0;
  transition: all 0.15s ease-in;
  align-self: center;

  &:hover {
    border-radius: 0px;
  }
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

const CompleteLabel = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primaryText};
`;

interface Todo {
  description: string;
  isComplete: boolean;
}

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const todos: Todo[] | null = JSON.parse(localStorage["todos"] || null);

    if (todos) {
      return todos;
    } else {
      const initialValue: Todo[] = [];
      localStorage.setItem("todos", JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const [todoValue, setTodoValue] = useState("");

  const handleAddTodo = () => {
    if (todoValue.trim() === "") {
      alert("Must provide a valid todo");
      return;
    }
    const filteredTodos = todos.filter(
      (todo) => todo.description === todoValue
    );

    if (filteredTodos.length > 0) {
      alert("Cannot have duplicate todos");
      setTodoValue("");
      return;
    }

    const updatedTodos = [
      ...todos,
      { description: todoValue, isComplete: false },
    ];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setTodoValue("");
  };

  const handleRemoveTodo = (description: string) => {
    const filteredTodos = todos.filter(
      (todo) => todo.description !== description
    );
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  const handleCompleteTodo = (description: string) => {
    const updatedTodo = todos.map((todo) =>
      todo.description === description ? { ...todo, isComplete: true } : todo
    );

    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTodos(updatedTodo);
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
        <TodosContainer>
          {todos.map((todo) => (
            <TodoContainer key={todo.description}>
              <TodoWrapper onClick={() => handleCompleteTodo(todo.description)}>
                <TodoLabel>{todo.description}</TodoLabel>
                {<CompleteLabel>{todo.isComplete && "Complete"}</CompleteLabel>}
              </TodoWrapper>
              <RemoveButton onClick={() => handleRemoveTodo(todo.description)}>
                Remove
              </RemoveButton>
            </TodoContainer>
          ))}
        </TodosContainer>
      ) : (
        <TodoPlaceHolder>You currently have no todos</TodoPlaceHolder>
      )}
    </Main>
  );
};

export default TodoPage;
