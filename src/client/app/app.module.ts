import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

/*
*/
import {Recipe} from './recipes/recipe';
import {Ingredient} from './shared';

import {HeaderComponent} from './header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './recipes/shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from './recipes/shopping-list/shopping-list-add.component';

import {DropdownDirective} from './dropdown.directive';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule.forRoot(), routing],
  declarations: [AppComponent, HeaderComponent, RecipesComponent, 
  RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, 
  ShoppingListComponent, ShoppingListAddComponent, DropdownDirective],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
