import api from "./api";

export async function getRecipes(filters) {
  return await api.get("/recipes", {params: filters})
}
export async function getIngredients() {
  return await api.get("/recipes/ingredients")
}

export async function getRecipeById(id) {
  return await api.get(`/recipes/${id}`);
}