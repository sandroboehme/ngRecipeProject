import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { sep } from 'path';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import {Input, Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-detail',
    templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    selectedRecipe: Recipe;
    private subscription: Subscription;
    private selectedRecipeId: string;

    constructor(
        private sls: ShoppingListService, 
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.selectedRecipeId = params['recipeId'];
                this.selectedRecipe = this.recipeService.getRecipe(this.selectedRecipeId);
            }
        );
    }
    onEdit(){
        this.router.navigate(['/recipes', this.selectedRecipeId, 'edit']);
    }
    onDelete(){
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }

    onAddToShoppingList(){
        this.sls.addItems(this.selectedRecipe.ingredients);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}