import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

export const CustomSelect = ({ placeholder, items = [], ...props }) => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: items.map((item) => ({
          label: item,
          value: item,
        })),
      }),
    [items]
  );

  return (
    <Select.Root multiple collection={collection} {...props}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((framework) => (
              <Select.Item color="black" item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
