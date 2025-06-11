import { Box } from "@chakra-ui/react";

export const RecipeCard = ({
  _id,
  name,
  description,
  ingredients,
  estimatedTime,
  servings,
  difficulty,
  type,
  setOpenRecipe,
}) => {
  return (
    <Box
      bg="gray.800"
      color="white"
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      maxW="sm"
      minH="80"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
      cursor="pointer"
      onClick={() => setOpenRecipe(_id)}
    >
      <Box fontWeight="bold" fontSize="2xl" mb={2}>
        {name}
      </Box>
      <Box fontSize="md" color="gray.300" mb={4}>
        {description}
      </Box>
      <Box mb={4}>
        <Box fontWeight="semibold" mb={1}>
          Ingredients:
        </Box>
        <Box as="ul" pl={4}>
          {ingredients.map((item, idx) => (
            <Box as="li" key={idx} color="gray.200">
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box>
          <Box fontSize="sm" color="gray.400">
            Time
          </Box>
          <Box fontWeight="medium">{estimatedTime} min</Box>
        </Box>
        <Box>
          <Box fontSize="sm" color="gray.400">
            Servings
          </Box>
          <Box fontWeight="medium">{servings}</Box>
        </Box>
        <Box>
          <Box fontSize="sm" color="gray.400">
            Difficulty
          </Box>
          <Box fontWeight="medium" textTransform="capitalize">
            {difficulty}
          </Box>
        </Box>
      </Box>
      <Box
        mt={2}
        fontSize="sm"
        color="purple.300"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {type}
      </Box>
    </Box>
  );
};
