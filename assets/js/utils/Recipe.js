class Recipe {
    constructor(data) {
        this._name = data.name;
        this._time = data.time;
        this._description = data.description;

        this._ingredients = data.ingredients;
    }

    createIngredientsList() {
        let finalStringElements = '';

        this._ingredients.forEach( (ingredient) => {
            this._ingredientName = ingredient.ingredient;
            if (ingredient.hasOwnProperty('quantity') && ingredient.hasOwnProperty('unit')) {
                this._ingredientQuantity = ingredient.quantity;
                this._ingredientUnit = ingredient.unit;

                finalStringElements += `
                    <li>
                        <span>${this._ingredientName}: </span>
                        <span>${this._ingredientQuantity} ${this._ingredientUnit}</span>
                    </li>
                `;
            }
            else if (ingredient.hasOwnProperty('quantity')) {
                this._ingredientQuantity = ingredient.quantity;

                finalStringElements += `
                    <li>
                        <span>${this._ingredientName}: </span>
                        <span>${this._ingredientQuantity}</span>
                    </li>
                `;
            } else {
                finalStringElements += `
                    <li>
                        <span>${this._ingredientName} </span>
                    </li>
                `;
            }
        });

        return finalStringElements;
    }

    createCard() {
        return `
            <article class="recipe-card">
                <header class="image-wrapper">

                </header>

                <main class="details">
                    <div class="header">
                        <h2 class="title">${this._name}</h2>
                        <span class="time-wrapper">
                            <img src="assets/img/icons/recipeTime.svg" alt="Temps de préparation">
                            <time>${this._time} min</time>
                        </span>
                    </div>

                    <div class="text">
                        <ul class="ingredients">
                            ${this.createIngredientsList()}
                        </ul>

                        <p class="instructions">
                            ${this._description}
                        </p>
                    </div>
                </main>
            </article>
        `;
    }
}