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
  onClickComplete: (index: number) => void;
  incompleteTodos: Array<string>;
};

export const IncompleteTodo: FC<Props> = (props) => {
  const { incompleteTodos, onClickComplete } = props;
  return (
    <Box bg="gray.50" p="4" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb="4">
        未完了リスト
      </Heading>
      <UnorderedList>
        {incompleteTodos.map((todo, index) => {
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
                  colorScheme="green"
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
