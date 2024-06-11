import { Box, Button, Input } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  onClickAdd: () => void;
};

export const RegisterTodo: FC<Props> = (props) => {
  const { onChangeInput, inputValue, onClickAdd } = props;
  return (
    <Box bg="gray.100">
      <Input
        size="lg"
        placeholder="Todoを入力してください"
        color="black"
        backgroundColor="white"
        width="300px"
        margin="10px"
        onChange={onChangeInput}
        value={inputValue}
      />
      <Button colorScheme="teal" onClick={onClickAdd} isDisabled={!inputValue}>
        追加
      </Button>
    </Box>
  );
};
