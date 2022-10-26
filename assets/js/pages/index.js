import { Recipe } from "../utils/Recipe.js";
import { mainSearch } from "../utils/modules/searchBar.js";
import { InternalDropdownFunctions } from "../utils/modules/dropdownButton.js";
import { InternalTagFunctions } from "../utils/modules/tagManager.js";

export class Interface {

    /**
     * Fonction d'affichage de toutes les recettes dans le conteneur associée
     * @param {object[]} recipes Tableau d'objets contenant toutes les recettes
     */
    static displayRecipes(recipes) {
        const recipeContainer = document.getElementById('RECIPES');
        recipeContainer.innerHTML = "";

        recipes.forEach( (recipe) => {
            const recipeModel = new Recipe(recipe);
            const recipeCard = recipeModel.createCard();
            recipeContainer.innerHTML += recipeCard;
        });
    }
    //------------------------
    // Dropdown Section INIT
    //------------------------
    static showDropdownMenu(event) {
        // changer la valeur Aria-hidden sur l'element list
        const targetMenu = event.target.offsetParent.nextElementSibling;

        // Custom toggle for Aria-hidden
        if (targetMenu.ariaHidden === 'true') {
            targetMenu.ariaHidden = false;
        } else if (targetMenu.ariaHidden === 'false') {
            targetMenu.ariaHidden = true;
        }
    }

    static initDropdownClickedArrowIcon() {
        const buttonsShow = document.querySelectorAll('.arrow-icon');

        buttonsShow.forEach( button => {
            button.addEventListener('click', (event) => {
                Interface.showDropdownMenu(event);
                button.classList.toggle('rotate');
            });
        });
    }

    static initFocusedDropdownInput() {
        // TODO : Modifier en fonction simple -> clicked
        const allInputs = document.querySelectorAll('#EXTRAS_BUTTONS input');
        allInputs.forEach( input => {
            input.addEventListener('click', (event) => {
                Interface.showDropdownMenu(event);

                const button = event.target.offsetParent.firstElementChild;
                button.classList.toggle('rotate');
            });
        });
    }

    static createDropdownListData(recipes) {
        const ingredientsList = document.querySelector('#ingredientsList');
        const equipmentsList = document.querySelector('#equipmentsList');
        const ustensilsList = document.querySelector('#ustensilsList');

        const [ingredientsData, equipmentsData, ustensilsData] = InternalDropdownFunctions.gettingValues(recipes);

        InternalDropdownFunctions.clearList(ingredientsList);
        InternalDropdownFunctions.generateDOMObjectsArray(ingredientsData).forEach( ingredientElementDOM => {
            ingredientsList.appendChild(ingredientElementDOM);
        });

        InternalDropdownFunctions.clearList(equipmentsList);
        InternalDropdownFunctions.generateDOMObjectsArray(equipmentsData).forEach( equipmentsElementDOM => {
            equipmentsList.appendChild(equipmentsElementDOM);
        });

        InternalDropdownFunctions.clearList(ustensilsList);
        InternalDropdownFunctions.generateDOMObjectsArray(ustensilsData).forEach( ustensilsElementDOM => {
            ustensilsList.appendChild(ustensilsElementDOM);
        });
    }

    // Tag Interface
    static createTagElement(selectedText, addingClass) {
        const recipeTagContainer = document.querySelector('#ACTIVE_FILTERS');
        if (recipeTagContainer.ariaHidden === 'true') {
            recipeTagContainer.ariaHidden = 'false';
        }
        recipeTagContainer.appendChild( InternalTagFunctions.generateDOMElement(selectedText, addingClass));
    }
}

function init() {
    Interface.initDropdownClickedArrowIcon();
    Interface.initFocusedDropdownInput();

    Interface.displayRecipes(recipes);
    Interface.createDropdownListData(recipes);
    mainSearch();
}

init();