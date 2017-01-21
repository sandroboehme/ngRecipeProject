import {Component, OnInit } from '@angular/core';
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

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
}