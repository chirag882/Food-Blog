const expres = require("express");
const router = expres.Router();
const recipeController = require('../controllers/recipeController');

// App Route
router.get('/',recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);


module.exports = router;
