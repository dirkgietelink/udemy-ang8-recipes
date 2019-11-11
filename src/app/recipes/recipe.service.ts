import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Kip spek rollades met feta kaas',
      'Heerlijk te bereiden. Rol de kip en feta in het spek. Bakken voor 15 minuten',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg' ),
    new Recipe(
      'Thaise groente curry',
      'Bak de kip goudbruin. Groente erbij, Curry kruiden en kokosmelk erbij. Laten sudderen.',
      'https://c.pxhere.com/images/ce/37/9d3feb7ab124ea5d8fb82c824c8e-1442801.jpg!d'
    )
  ];

  getRecipes() {
    return this.recipes.slice();  // slice() makes sure we do retrurn a copy of the array instead of the reference.
  }

}
