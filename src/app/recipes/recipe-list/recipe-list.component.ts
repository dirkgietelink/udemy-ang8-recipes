import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Kip spek rollades met feta kaas',
      'Heerlijk te bereiden. Rol de kip en feta in het spek. Bakken voor 15 minuten',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
