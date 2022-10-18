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

    console.log('hhhee')
    attachDeleteEvent();
}

function attachDeleteEvent() {
    const deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach( button => {
        button.addEventListener('click', (event) => {
            const addictiveFilterElement = event.target.parentElement.parentElement;
            addictiveFilterElement.remove();
        });
    })
}

export { createTag };