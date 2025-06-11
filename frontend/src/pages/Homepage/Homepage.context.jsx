import { createContext, useContext, useEffect, useState } from "react";
import {
  getIngredients,
  getRecipeById,
  getRecipes,
} from "../../services/Recipes.service";

const HomepageContext = createContext();

export const HomepageProvider = ({ children }) => {
  const [filterQuery, setFilterQuery] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [openRecipe, setOpenRecipe] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await getRecipes({ ingredient: filterQuery.join(",") });
      setItems(data);
    }

    setLoading(true);
    load().finally(() => {
      setLoading(false);
    });
  }, [filterQuery]);

  useEffect(() => {
    async function loadIngredients() {
      const { data } = await getIngredients();
      setIngredients(data);
    }

    loadIngredients();
  }, []);

  useEffect(() => {
    if (!openRecipe) return;
    async function loadRecipeDetails() {
      const { data } = await getRecipeById(openRecipe);
      setRecipeDetails(data);
    }

    setLoading(true);
    loadRecipeDetails().finally(() => {
      setLoading(false);
    });
  }, [openRecipe]);

  return (
    <HomepageContext.Provider
      value={{
        data: {
          filterQuery,
          items,
          loading,
          ingredients,
          openRecipe,
          recipeDetails,
        },
        actions: { setFilterQuery, setOpenRecipe },
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};

export const useHomepageContext = () => {
  return useContext(HomepageContext);
};
