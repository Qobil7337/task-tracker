import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrl: './left-side-menu.component.scss'
})
export class LeftSideMenuComponent {
  badgeVisible = false;
  badgeVisibility() {
    this.badgeVisible = true;
  }
}
