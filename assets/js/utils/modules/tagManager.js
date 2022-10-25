function generateDOMTag(textContent, stringClass) {
    return `
    <div class="filter-element ${stringClass}">
        <span class="title">${textContent}</span>
        <button class="delete">
            <img
                src="assets/img/icons/crossAround.svg"
                alt="Supprimer l'élément"
            >
        </button>
    </div>
    `;
}

function createTag(selectedText, addingClass) {
    const recipeTagContainer = document.querySelector('#ACTIVE_FILTERS');
    if (recipeTagContainer.ariaHidden === 'true') {
        recipeTagContainer.ariaHidden = 'false';
    }
    recipeTagContainer.innerHTML += generateDOMTag(selectedText, addingClass);

    attachDeleteEvent();
}

function attachDeleteEvent() {
    const deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach( button => {
        button.addEventListener('click', (event) => {
            const addictiveFilterElement = event.target.parentElement.parentElement;
            addictiveFilterElement.remove();

            /*
                Je dois relancer la recherche principale +
                Je relance la recherche des tags

             */
            //
            const addictiveFilter = 'Resultat de la recherche principal';
            // Je liste les tags ...
            // Je parcours la liste des tags
                // Je relance le filtre par rapport à un tag

            // J'affiche mon tableau filtrée avec displayRecipes
        });
    })
}

export { createTag };