const express = require("express");
const Recipe = require("./recipes-model");

const router = express.Router();

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch(next);
});

router.use((err, res, req, next) => {
  res.status(500).json({
    customMessage: "Getting an internal error ❌",
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;
