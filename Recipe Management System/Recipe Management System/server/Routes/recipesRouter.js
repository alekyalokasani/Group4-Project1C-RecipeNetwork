const express = require("express");

const { getCompleteRecipes } = require("../Controllers/recipesControllers");
const router = express.Router();

router.get("/allrecipes", getCompleteRecipes);

module.exports = router;
