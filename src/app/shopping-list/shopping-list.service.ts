import {Ingredient} from '../shared/Ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();  // slice() makes sure we do return a copy of the array instead of the reference.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
