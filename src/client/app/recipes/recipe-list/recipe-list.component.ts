import {Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    private recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private router: Router, private recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    onSelected(recipe: Recipe) {
        this.router.navigate(['/', 'recipes', recipe.id]);
        this.recipeSelected.emit(recipe);
    }
}