import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from '../project-page/project-page.component';
import { ProjectButtonComponent } from '../project-button/project-button.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectPageComponent, ProjectButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectList : String[] = ["1", "2", "3", "4", "5"]

}
