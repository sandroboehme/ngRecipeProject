import { RecipeService } from './../recipe.service';
import {Input, Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-detail',
    templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipeId: string;
    @Input() selectedRecipe: Recipe;
    constructor(private sls: ShoppingListService, private recipeService: RecipeService) {

    }

    ngOnInit() {
        if (!this.selectedRecipe){
            this.selectedRecipe = this.recipeService.getRecipe(this.selectedRecipeId);
        }
    }

    onAddToShoppingList(){
        this.sls.addItems(this.selectedRecipe.ingredients);
    }
}