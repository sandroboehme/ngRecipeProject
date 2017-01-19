import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from "./recipe";
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'rb-recipes',
    templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit {
    recipeId: String;
    _selectedRecipe: Recipe;
    private subscription: Subscription;
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.recipeId = param['recipeId']
        );
    }

    ngOnInit() {
    }
    get selectedRecipe(){
        return this._selectedRecipe;
    }

    set selectedRecipe(recipe: Recipe){
        this._selectedRecipe = recipe;
        console.log(recipe);
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}