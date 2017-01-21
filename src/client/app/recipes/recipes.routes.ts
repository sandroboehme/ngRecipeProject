import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const RECIPE_ROUTES: Routes = [

    { path: '', component: RecipeStartComponent},
    //{ path: 'recipes', component: RecipesComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':recipeId', component: RecipeDetailComponent},
    { path: ':recipeId/edit', component: RecipeEditComponent},
    //{ path: 'shopping-list', component: ShoppingListComponent}
];
