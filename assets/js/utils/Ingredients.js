class Ingredients {
    constructor(data) {
        this._ingredients = data.ingredients;
        this.uniqueIngredientsNames = [];
    }

    addIngredientName(array) {
        for (let i = 0; i < array.length; i++) {
            this.uniqueIngredientsNames.push(array[i]);
            console.log('Push in class Array == ', array[i]);
        }
    }

    getAllIngredients() {
        const newArray = [];

        this._ingredients.forEach( (ingredient) => {
            console.log(this.uniqueIngredientsNames)
            let arrayInclude = this.uniqueIngredientsNames.includes(ingredient.ingredient);

            if (arrayInclude === false) {
                newArray.push(ingredient.ingredient);
            }
        });
        console.log('-> Go to arr', newArray)
        this.addIngredientName(newArray)
    }
}