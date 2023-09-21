import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";


export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 10)
  ];
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  AddIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
