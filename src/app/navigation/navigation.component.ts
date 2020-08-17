import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <div class="navbar">
    <div class="nav-center">
      <ul class="nav-links">
          <a href=""><li routerLink="/">Home</li></a>
          <a href=""><li routerLink="/aboutMe">About me</li></a>
          <a href=""><li routerLink="/portfolio">My Portfolio</li></a>
          <a href=""><li routerLink="/interests">Hobbies & Interests</li></a>
          <a href=""><li routerLink="/contact">Contact</li></a>
      </ul>
    </div>
  </div>
  `
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
