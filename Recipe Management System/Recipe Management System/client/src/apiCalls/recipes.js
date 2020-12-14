export const allRecipes = () => {
  return fetch("http://localhost:5001/api/recipes/allrecipes", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getARecipe = (id) => {
  return fetch(`http://localhost:5001/api/recipe/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
