import { Component } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../shared/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] 
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService){}
  ngOnInit(){
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
