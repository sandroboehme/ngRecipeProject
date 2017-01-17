import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './recipes/shopping-list/shopping-list.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [RecipeService, ShoppingListService]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
