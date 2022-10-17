import { mainSearch } from "../utils/modules/searchBar.js";
import { createListData } from "../utils/modules/dropdownButton.js";

/**
 * Fonction d'affichage de toutes les recettes dans le conteneur associée
 * @param {object[]} recipes Tableau d'objets contenant toutes les recettes
 */
function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('RECIPES');
    recipeContainer.innerHTML = "";

    recipes.forEach( (recipe) => {
       const recipeModel = new Recipe(recipe);
       const recipeCard = recipeModel.createCard();
       recipeContainer.innerHTML += recipeCard;
    });
}

function init() {
    displayRecipes(recipes);
    createListData(recipes);
    mainSearch();
}

init();