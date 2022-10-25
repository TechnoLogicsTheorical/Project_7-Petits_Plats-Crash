import { displayRecipes} from "../../pages/index.js";
import { createListData } from "../modules/dropdownButton.js";

/**
 * Fonction permettant d'annuler le comportement du bouton inclus dans le formulaire
 */
function cancelFormButtonWithSubmit() {
    const searchForm = document.getElementById('RECIPES_BAR');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.cancelBubble = true;
    });
}

/**
 * Fonction de la barre de recherche principale
 */
function mainSearch() {
    cancelFormButtonWithSubmit();
    const inputSearchBar = document.getElementById('recipesSearch');

    inputSearchBar.addEventListener( 'keyup', (event) => {
        const element = event.target;
        if ( element.value.length > 2 ) {
            // Recherche dans le champ du titre && le champ de la description && tableau des ingrédients
            const filteredRecipes = recipes.filter(
                (recipe) => {
                    return recipe.name.toLowerCase().includes(element.value.toLowerCase())
                        || recipe.description.toLowerCase().includes(element.value.toLowerCase())
                        || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(element.value.toLowerCase()))
                }
            );
            displayRecipes(filteredRecipes);
            createListData(filteredRecipes);
        } else {
            displayRecipes(recipes);
            createListData(recipes);
        }
    });
}

export { mainSearch };