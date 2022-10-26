import { Interface } from "../../pages/index.js";

const InternalDropdownFunctions = {

    clearList(listElement) {
        listElement.innerHTML = '';
    },
    gettingValues(recipes) {
        // currentRecipes => Contient un tableau [ ] contenant lui même des objets
        // On va d'abord boucler sur le grand tableau pour accèder aux objets

        let ingredientsRecipesList = [];
        let equipementsRecipesList = [];
        let ustensilsRecipesList = [];

        recipes.forEach( recipe => {
            // On parcours le tableau des ingredients et on ajoute un élément, si la condition est uniquement validée
            recipe.ingredients.forEach( ingredient => ingredientsRecipesList.push(ingredient.ingredient.toLowerCase()));
            equipementsRecipesList.push(recipe.appliance.toLowerCase());
            recipe.ustensils.forEach( ustensil => ustensilsRecipesList.push(ustensil.toLowerCase()));
        });

        ingredientsRecipesList = [...new Set(ingredientsRecipesList.sort())];
        equipementsRecipesList = [...new Set(equipementsRecipesList.sort())];
        ustensilsRecipesList = [...new Set(ustensilsRecipesList.sort())];

        return ([
            ingredientsRecipesList,
            equipementsRecipesList,
            ustensilsRecipesList
        ])
    },

    generateDOMObjectsArray(allResultRecipesString) {
        // Générer toutes les balises : <li>${string}</li>
        let listElements = [];

        for ( let string of allResultRecipesString ) {
            const item = document.createElement('li');
            item.innerText = string;

            // Ajouter l'évenement de click sur l'élément générer
            this.eventManager.attachEvent(item);

            listElements.push(item);
        }
        return listElements;
    },

    eventManager: {
        attachEvent(element) {

            element.addEventListener('click', (event) => {
                let selectedIngredient = event.target.innerText;
                // TODO: Quand la valeur à été clickée transmettre à une fonction de gestion d'evenement
                Interface.createTagElement(selectedIngredient, 'ingredient');

                // Recherche dans le champ du titre && le champ de la description && tableau des ingrédients
                const filteredRecipes = recipes.filter(
                    (recipe) => {
                        return recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedIngredient.toLowerCase()))
                    }
                );
                Interface.displayRecipes(filteredRecipes);
                Interface.createDropdownListData(filteredRecipes);
            })
        }
    }
};

export { InternalDropdownFunctions }