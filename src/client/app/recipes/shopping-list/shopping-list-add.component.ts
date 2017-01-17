import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
    moduleId: module.id,
    selector: 'rb-shopping-list-add',
    templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor() {}

    ngOnInit() {
    }
}