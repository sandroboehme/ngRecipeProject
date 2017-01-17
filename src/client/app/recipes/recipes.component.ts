import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from "./recipe";

@Component({
    moduleId: module.id,
    selector: 'rb-recipes',
    templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit {
    _selectedRecipe: Recipe;
    constructor() {}

    ngOnInit() {
    }
    get selectedRecipe(){
        return this._selectedRecipe;
    }

    set selectedRecipe(recipe: Recipe){
        this._selectedRecipe = recipe;
        console.log(recipe);
    }
}