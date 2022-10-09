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

/**
 * Fonction permettant de concaténer deux tableau en un resultat et en filtrant les données qui pourrais déjà exister
 * @param {object[]} arr1 Tableau d'objet n°1
 * @param {object[]} arr2 Tableau d'objet n°2
 * @returns {object[]} Retourne un tableau d'objet avec des ensembles uniques
 */
function concatArrayWithoutDuplicates(arr1, arr2) {
    let result = [];
    result = arr1.concat(
        arr2.filter(
            (item) => arr1.indexOf(item) < 0
        )
    );
    return result;
}

/**
 * Fonction permettant d'annuler le comportement du bouton inclus dans le formulaire
 */
function cancelSubmit() {
    const submitButton = document.querySelector('#RECIPES_BAR button[type="submit"]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
}

/**
 * Fonction de la barre de recherche principale
 */
function mainSearch() {
    cancelSubmit();
    const inputSearchBar = document.getElementById('recipesSearch');
    
    inputSearchBar.addEventListener( 'keyup', (event) => {
        const element = event.target;
        if ( element.value.length > 2 ) {
            // Recherche dans le champ du titre
            const titleRecipes = recipes.filter(
                (recipe) => {
                    let value = element.value.toLowerCase();
                    return recipe.name
                        .toLowerCase()
                        .includes(value)
                }
            );

            // Recherche dans le champ de la description
            const describeRecipes = recipes.filter(
                (recipe) => {
                    let value = element.value.toLowerCase();
                    return recipe.description
                        .toLowerCase()
                        .includes(value)
                }
            );

            // Recherche dans le tableau des ingrédients
            const ingredientRecipes = recipes.filter(
                (recipe) => {
                    let value = element.value.toLowerCase();
                    // console.log( recipe.ingredients.forEach(
                    //     (ingredient) => {
                    //         return ingredient.ingredient
                    //             .toLowerCase()
                    //             .includes(value)
                    //     }
                    // ));

                    let ingredientsRecipe = recipe.ingredients;

                    for (let i = 0; i < ingredientsRecipe.length; i++) {
                        return (ingredientsRecipe[i].ingredient
                            .toLowerCase()
                            .includes(value));
                    }
                }
            );

            let allRecipes = concatArrayWithoutDuplicates(titleRecipes, describeRecipes);
            allRecipes = concatArrayWithoutDuplicates(allRecipes, ingredientRecipes);

            displayRecipes(allRecipes);
        } else {
            displayRecipes(recipes);
        }
    });
}

function createListData() {
    const ingredientsData = document.querySelector('#ingredientsList');
    const equipmentsData = document.querySelector('#equipmentsList');
    const utensilsData = document.querySelector('#utensilsList');

    recipes.forEach( (recipe) => {
        const ingredientItemName = new Ingredients(recipe);
        ingredientItemName.getAllIngredients();
    });
}

function hdyrateSearch() {
    createListData();
}

function init() {
    displayRecipes(recipes);
    mainSearch();
    hdyrateSearch();
}

init();