
import { Recipe } from './recipe';
import { Ingredient } from '../shared/Ingredient';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("1", "Summer Salad", "Okeyish", "http://www.sunnyqueen.com.au/wp-content/uploads/2013/09/summer-salad2012-06-26-122450.jpg", [
            new Ingredient('Salmon', 1),
            new Ingredient('Egg', 2),
            new Ingredient('Tomato', 3)
        ]),
        new Recipe("2", "Schnitzel", "Very tasty", "http://www.maennernews.info/uploads/schnitzel.jpg", [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ])
    ];

    constructor() {}

    getRecipes() {
        return this.recipes;
    }

    getRecipe(recipeId: string): Recipe {
        var foundRecipe: Recipe = null;
        for (var i = 0; i < this.recipes.length && !foundRecipe; i++) {
            if (this.recipes[i].id == recipeId){
                foundRecipe = this.recipes[i];
            }
        }
        return foundRecipe;
    }
    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

}