import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSidebarShowing = true;

  toggleSidebar(){
    this.isSidebarShowing = !this.isSidebarShowing;
    console.log(this.isSidebarShowing);
  }
}
