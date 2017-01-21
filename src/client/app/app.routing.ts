import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RECIPE_ROUTES } from './recipes/recipes.routes';

export const APP_ROUTES: Routes = [

    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
