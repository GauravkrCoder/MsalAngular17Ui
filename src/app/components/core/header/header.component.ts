import { Component, OnInit } from '@angular/core';
import { CountDownTimerComponent } from '../../../shared/components/count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CountDownTimerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu() {
    const menu = document.querySelector('.navbar__menu-list');
    menu.classList.toggle('show');
  }

}
