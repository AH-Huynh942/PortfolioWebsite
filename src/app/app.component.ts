import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NavigationButtonComponent, CommonModule, HomeComponent, AboutComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class MainComponent {
  title = 'PortfolioWebsite';

  // onScroll(event: any){
  //   console.log("scrolling")
  //   if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight){
  //     console.log("Scrolled to the bottom")
  //   }
  // }


}
