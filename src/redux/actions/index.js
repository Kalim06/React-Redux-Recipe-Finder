export const SET_RECIPES = "SET_RECIPES";
export const FAV_RECIPE = "FAV_RECIPE";
export const STAR = "STAR";

export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items
  };
}

export function favRecipe(item) {
  return {
    type: FAV_RECIPE,
    item
  };
}

export function star(item) {
  return {
    type: STAR,
    item
  };
}
