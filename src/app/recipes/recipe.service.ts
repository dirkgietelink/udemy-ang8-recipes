import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Kip spek rollades met feta kaas',
      'Heerlijk te bereiden. Rol de kip en feta in het spek. Bakken voor 15 minuten',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg',
      [
        new Ingredient('kip', 1),
        new Ingredient('spekreepjes', 4),
        new Ingredient('feta kaas', 2)
      ]),
    new Recipe(
      'Thaise groente curry',
      'Bak de kip goudbruin. Groente erbij, Curry kruiden en kokosmelk erbij. Laten sudderen.',
      'https://c.pxhere.com/images/ce/37/9d3feb7ab124ea5d8fb82c824c8e-1442801.jpg!d',
      [
        new Ingredient('wok groenten', 2),
        new Ingredient('curry kruiden', 1),
        new Ingredient('kokosmelk', 1),
        new Ingredient('kip', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();  // slice() makes sure we do return a copy of the array instead of the reference.
  }

}
