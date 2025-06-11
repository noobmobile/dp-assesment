import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { HomepageProvider, useHomepageContext } from "./Homepage.context";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { CustomSelect } from "../../components/Select/Select";
import { Empty } from "../../components/Empty/Empty";
import { RecipeModal } from "../../components/RecipeModal/RecipeModal";

const Homepage = () => {
  const {
    data: { filterQuery, items, ingredients, openRecipe },
    actions: { setFilterQuery, setOpenRecipe },
  } = useHomepageContext();

  return (
    <>
      <VStack
        width="100vw"
        minHeight="30vh"
        justifyContent="center"
        padding="4"
      >
        <Text fontSize="4xl" fontWeight="bold">
          Recipe Search
        </Text>
        <Text fontSize="xl">
          Discover delicious recipes based on the ingredients you have at home
        </Text>
        <CustomSelect
          items={ingredients}
          value={filterQuery}
          onValueChange={(e) => setFilterQuery(e.value)}
          placeholder="Enter ingredients separated by commas (e.g., garlic, broccoli, chicken)"
          minWidth="40%"
          maxWidth="96"
        />
      </VStack>
      <HStack
        maxWidth="100vw"
        flexWrap="wrap"
        gap={4}
        padding="4"
        justifyContent="center"
      >
        {items.map((recipe) => (
          <RecipeCard key={recipe.id} setOpenRecipe={setOpenRecipe} {...recipe} />
        ))}
        {!items.length && <Empty />}
      </HStack>
      <RecipeModal setOpen={setOpenRecipe} open={openRecipe}/>
    </>
  );
};

export const HomepageWrapper = () => {
  return (
    <HomepageProvider>
      <Homepage />
    </HomepageProvider>
  );
};
