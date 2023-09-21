import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipe';
  selectedMenu: string = '';
  OnSelectedMenu(menu){
    this.selectedMenu = menu.Menu;
    console.log(menu.Menu);
  }
}
