import { EmptyState } from "@chakra-ui/react";
import { TbMoodEmpty } from "react-icons/tb";


export const Empty = () => {
  return (
    <EmptyState.Root size="lg">
      <EmptyState.Content>
        <EmptyState.Indicator >
            <TbMoodEmpty/>
        </EmptyState.Indicator>
                <EmptyState.Title>No recipes found.</EmptyState.Title>
        <EmptyState.Description />
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
