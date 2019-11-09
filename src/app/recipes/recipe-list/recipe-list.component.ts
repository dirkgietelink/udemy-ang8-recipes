import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }
}
