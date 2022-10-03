class Recipe {
    constructor(data) {
        this._name = data.name;

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
                            <time>10 min</time>
                        </span>
                    </div>

                    <div class="text">
                        <ul class="ingredients">
                            <li>
                                <span>Lait de coco: </span>
                                <span>400ml</span>
                            </li>
                            <li>
                                <span>Jus de Citron: </span>
                                <span>2</span>
                            </li>
                            <li>
                                <span>Créme de coco: </span>
                                <span>4 cuillères</span>
                            </li>
                            <li>
                                <span>Sucre: </span>
                                <span>20g</span>
                            </li>
                            <li>
                                <span>Glonçons: </span>
                                <span>2</span>
                            </li>
                        </ul>

                        <p class="instructions">
                            Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée.
                        </p>
                    </div>
                </main>
            </article>
        `;
    }
}