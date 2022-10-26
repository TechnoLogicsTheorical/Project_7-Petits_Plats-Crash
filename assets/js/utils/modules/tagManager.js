const InternalTagFunctions = {
    generateDOMElement(textContent, stringClass) {

        const addictiveFilterContainer = document.createElement('div');
        addictiveFilterContainer.classList.add('filter-element');
        addictiveFilterContainer.classList.add(stringClass);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.ariaLabel = 'Supprimer le tag courant : ' + textContent;
        deleteButton.innerHTML = '<img src="assets/img/icons/crossAround.svg" alt="Supprimer l\'élément">';

        const textElement = document.createElement('span');
        textElement.classList.add('title');
        textElement.innerText = textContent;

        this.eventManager.attachDeleteEvent(deleteButton);

        addictiveFilterContainer.appendChild(textElement);
        addictiveFilterContainer.appendChild(deleteButton);

        return addictiveFilterContainer;
    },

    eventManager: {
        attachDeleteEvent(element) {
            element.addEventListener('click', (event) => {
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
        }
    }
}

export { InternalTagFunctions };