import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import { CompleteTodo } from "../organisms/CompleteTodo";
import { IncompleteTodo } from "../organisms/IncompleteTodo";
import { RegisterTodo } from "../organisms/RegisterTodo";

export const TodoPage = () => {
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, inputValue];
    setIncompleteTodos(newTodos);
    setInputValue("");
  };
  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickDelete = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickReturn = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);

    setIncompleteTodos(newIncompleteTodos);
  };

  const [inputValue, setInputValue] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <RegisterTodo
        onChangeInput={onChangeInput}
        inputValue={inputValue}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClickDelete={onClickDelete}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
