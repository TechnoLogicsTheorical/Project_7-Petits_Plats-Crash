function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('RECIPES');
    recipeContainer.innerHTML = "";

    recipes.forEach( (recipe) => {
       const recipeModel = new Recipe(recipe);
       const recipeCard = recipeModel.createCard();
       recipeContainer.innerHTML += recipeCard;
    });
}

function mainSearch() {
    const inputSearchBar = document.getElementById('recipesSearch');
    
    inputSearchBar.addEventListener( 'keyup', (event) => {
        const element = event.target;
        if (element.value.length > 3 ) {
            const recipesFiltered = recipes.filter( (recipe) => recipe.name.toLowerCase().includes(element.value.toLowerCase()) );
            // console.log(recipesFiltered)
            displayRecipes(recipesFiltered);

        }
        
    });
}

function init() {
    displayRecipes(recipes);
    mainSearch();
}

init();