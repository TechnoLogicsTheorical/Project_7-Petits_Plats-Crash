function gettingValues(recipes) {
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
}

function generateDOM(allResultRecipesString) {
    // Générer toutes les balises : <option value="Lait de coco">
    let resultString = '';

    for ( let string of allResultRecipesString ) {
        resultString += (`<li>${string}</li>`);
    }
    return resultString;
}

function createListData(recipes) {
    const ingredientsList = document.querySelector('#ingredientsList');
    const equipmentsList = document.querySelector('#equipmentsList');
    const ustensilsList = document.querySelector('#ustensilsList');

    const [ingredientsData, equipmentsData, ustensilsData] = gettingValues(recipes);

    ingredientsList.innerHTML = '';
    ingredientsList.innerHTML = generateDOM(ingredientsData);

    equipmentsList.innerHTML = '';
    equipmentsList.innerHTML = generateDOM(equipmentsData);

    ustensilsList.innerHTML = '';
    ustensilsList.innerHTML = generateDOM(ustensilsData);

    attachEvent();
    attachClickEvent();
    focusedInput();
}

function attachEvent() {
    const ingredientsListElements = document.querySelectorAll('#ingredientsList li');
    const equipmentsListElements = document.querySelectorAll('#equipmentsList li');
    const ustensilsListElements = document.querySelectorAll('#ustensilsList li');

    ingredientsListElements.forEach((itemIngredientList) => itemIngredientList.addEventListener('click', (e) => {
        let clickedOption = e.target.innerText;
        // TODO: Quand la valeur à été clickée transmettre à une fonction de gestion d'evenement
    }))
}

// TODO: Quand je clicke sur Arrow-icon, faire une rotation CSS + afficher la liste d'élément

function attachClickEvent() {
    const buttonsShow = document.querySelectorAll('.arrow-icon');

    buttonsShow.forEach( button => {
        button.addEventListener('click', (event) => {
            showMenu(event);
            button.classList.toggle('rotate');
        });
    });
}

function focusedInput() {
    const allInputs = document.querySelectorAll('#EXTRAS_BUTTONS input');
    allInputs.forEach( input => {
        input.addEventListener('focusin', (event) => {
            showMenu(event);

            const button = event.target.offsetParent.firstElementChild;
            button.classList.toggle('rotate');
        });
        input.addEventListener('focusout', event => {
            showMenu(event)

            const button = event.target.offsetParent.firstElementChild;
            button.classList.toggle('rotate');
        })
    });
}

function showMenu(event) {
    // changer la valeur Aria-hidden sur l'element list
    const targetMenu = event.target.offsetParent.nextElementSibling;

    // Custom toggle for Aria-hidden
    if (targetMenu.ariaHidden === 'true') {
        targetMenu.ariaHidden = false;
    } else if (targetMenu.ariaHidden === 'false') {
        targetMenu.ariaHidden = true;
    }
}
export { createListData }