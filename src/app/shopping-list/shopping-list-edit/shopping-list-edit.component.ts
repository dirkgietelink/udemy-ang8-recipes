import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded =  new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }


  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);

    this.ingredientAdded.emit(newIngredient);
  }

}
