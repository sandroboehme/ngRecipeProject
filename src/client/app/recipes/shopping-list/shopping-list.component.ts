import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";
import { Ingredient } from "../../shared";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    moduleId: module.id,
    selector: 'rb-shopping-list',
    templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

    items: Ingredient[] = [];
    selectedRecipe: Recipe;

    constructor(private sls: ShoppingListService) {}

    ngOnInit() {
        this.items = this.sls.getItems();
    }
}