import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes : Recipe[] = [
    new Recipe("Test Recipe","This is simply a test","https://www.vegrecipesofindia.com/wp-content/uploads/2020/08/paneer-recipes.jpg"),
    new Recipe("Test Recipe2","This is simply a test2","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg")
   ];
  getRecipes(){
    return this.recipes.slice();
  }
}
