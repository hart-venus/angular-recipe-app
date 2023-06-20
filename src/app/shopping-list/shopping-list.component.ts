import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : string[] = ['Apples', 'Tomatoes'];
  currIngredient : string = '';

  addIngredient() {
    this.ingredients.push(this.currIngredient);
    this.currIngredient = '';
  }
}
