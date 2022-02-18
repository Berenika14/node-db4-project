function getRecipeById(recipe_id) {
  return Promise.resolve(`Awesome recipe with an id ${recipe_id}`);
}

module.exports = { getRecipeById };
