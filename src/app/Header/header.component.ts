import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() OnMenuSelected = new EventEmitter<{Menu: string}>;
  collapsed = true;
  selectedMenu: string = '';
  OnRecipesClick() {
    this.OnMenuSelected.emit({
      Menu: 'Recipes'
    });
  }
  
  OnShoppingClick() {
    this.OnMenuSelected.emit({
      Menu: 'Shopping'
    });
  }
  
}