import { Interface } from "../../pages/index.js";

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
            Interface.displayRecipes(filteredRecipes);
            Interface.createDropdownListData(filteredRecipes);
        } else {
            Interface.displayRecipes(recipes);
            Interface.createDropdownListData(recipes);
        }
    });
}

export { mainSearch };