import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, LeftMenuComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}