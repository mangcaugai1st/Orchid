import { Component} from '@angular/core';
import {SignInComponent} from "../../sign-in/sign-in.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

    protected readonly SignInComponent = SignInComponent;
}
