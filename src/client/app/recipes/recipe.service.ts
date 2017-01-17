
import { Recipe } from './recipe';
import { Ingredient } from '../shared/Ingredient';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("Summer Salad", "Okeyish", "http://www.sunnyqueen.com.au/wp-content/uploads/2013/09/summer-salad2012-06-26-122450.jpg", [
        ]),
        new Recipe("Schnitzel", "Very tasty", "http://www.maennernews.info/uploads/schnitzel.jpg", [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ])
    ];

    constructor() {}

    getRecipes() {
        return this.recipes;
    }
}