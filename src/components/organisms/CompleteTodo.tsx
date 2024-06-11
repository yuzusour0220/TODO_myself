import {
  Box,
  Button,
  ListItem,
  UnorderedList,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  onClickDelete: (index: number) => void;
  onClickReturn: (index: number) => void;
  completeTodos: Array<string>;
};

export const CompleteTodo: FC<Props> = (props) => {
  const { completeTodos, onClickReturn, onClickDelete } = props;
  return (
    <Box bg="gray.50" p="4" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb="4">
        完了リスト
      </Heading>
      <UnorderedList>
        {completeTodos.map((todo, index) => {
          return (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="2"
              p="2"
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <Box flex="1" mr="4">
                {todo}
              </Box>
              <HStack spacing="2">
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() => onClickReturn(index)}
                >
                  戻す
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
