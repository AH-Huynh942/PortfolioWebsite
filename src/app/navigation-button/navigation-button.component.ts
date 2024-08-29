import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {
  @Input() button_name!: string

  constructor(private router : Router) {}

  onClick() {
    var route_name = this.button_name.toLowerCase()
    this.router.navigate([`/${route_name  }`])
  }
}
