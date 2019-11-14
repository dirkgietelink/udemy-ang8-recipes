import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/Ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList(ingredients: Ingredient[]) {
    for(let i = 0; i < ingredients.length; i++) {
      this.shoppingListService.addIngredient(ingredients[i]);
    }
    // this.shoppingListService.ingredientsChanged.emit(ingredients);
  }

}
