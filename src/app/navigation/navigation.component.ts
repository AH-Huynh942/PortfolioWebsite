import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NavigationButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isScrollToTop: boolean = false

  @HostListener('window:scroll', [])

  onWindowScroll() {
    // if (window.scrollY === 0) {
    //   console.log("Scrolled to the top")
    // }
    this.isScrollToTop = window.scrollY === 0;
    
  }

  buttonNames: string[] = ["Home", "About", "Projects"]
}
