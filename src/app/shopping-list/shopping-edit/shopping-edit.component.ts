import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;
   constructor(private shoppingService: ShoppingService){}

    onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      //this.shoppingservice.emit(newIngredient);
      this.shoppingService.AddIngredient(newIngredient);
    }
}
