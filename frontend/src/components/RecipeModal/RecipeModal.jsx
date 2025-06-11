import { CloseButton, Dialog, HStack, Portal, Text, VStack } from "@chakra-ui/react";
import { useHomepageContext } from "../../pages/Homepage/Homepage.context";

export const RecipeModal = ({ open, setOpen }) => {
  const {
    data: { loading, recipeDetails },
  } = useHomepageContext();
  /**name,
  description,
  ingredients,
  estimatedTime,
  servings,
  difficulty,
  type, */
  return (
    <Dialog.Root
      placement="center"
      lazyMount
      size="lg"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title p="4">
                <Text fontSize="xl" color="black">
                  {recipeDetails?.name}
                </Text>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body p="4">
              {loading ? (
                <Text>Loading...</Text>
              ) : recipeDetails ? (
                <HStack alignItems="start" justifyContent="space-between">
                 <VStack alignItems="start" gap="0"> <Text color="black" fontWeight="bold">
                    Description:
                  </Text>
                  <Text color="black">
                    {recipeDetails.description}
                  </Text>
                  <Text color="black">
                    <b>Estimated Time:</b> {recipeDetails.estimatedTime} minutes
                  </Text>
                  <Text color="black">
                    <b>Servings:</b> {recipeDetails.servings}
                  </Text>
                  <Text color="black">
                    <b>Difficulty:</b> {recipeDetails.difficulty}
                  </Text>
                  <Text color="black">
                    <b>Type:</b> {recipeDetails.type}
                  </Text>
                  <Text color="black" fontWeight="bold">
                    Ingredients:
                  </Text>
                  {recipeDetails.ingredients?.map((ingredient, idx) => (
                    <Text key={idx} color="black" as="p" ml="1">
                      {ingredient}
                    </Text>
                  ))}</VStack>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi8423a2GdO2yi0Ig5N2iRQ8gkCd-F4KTFQ&s"
                    alt="Recipe"
                    style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
                    />
                </HStack>
              ) : (
                <Text>No recipe details available.</Text>
              )}
            </Dialog.Body>
            <Dialog.Footer></Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
