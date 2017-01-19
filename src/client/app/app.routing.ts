import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [

    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'recipes', component: RecipesComponent},
    { path: 'recipes/:recipeId', component: RecipesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
