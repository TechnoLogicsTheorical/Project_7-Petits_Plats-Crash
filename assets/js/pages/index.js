function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('RECIPES');
    recipeContainer.innerHTML = "";

    recipes.forEach( (recipe) => {
       const recipeModel = new Recipe(recipe);
       const recipeCard = recipeModel.createCard();
       recipeContainer.innerHTML += recipeCard;
    });
}

function concatArrayWithoutDuplicates(arr1, arr2) {
    let result = [];
    result = arr1.concat(
        arr2.filter(
            (item) => arr1.indexOf(item) < 0
        )
    );
    return result;
}

function mainSearch() {
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

function init() {
    displayRecipes(recipes);
    mainSearch();
}

init();